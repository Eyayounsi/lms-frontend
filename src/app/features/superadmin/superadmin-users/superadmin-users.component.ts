import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SuperAdminApiService, SuperAdminUser } from '../services/superadmin-api.service';
import Swal from 'sweetalert2';
import { AuthService } from '../../../shared/service/auth/auth.service';

@Component({
  selector: 'app-superadmin-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './superadmin-users.component.html',
  styleUrls: ['./superadmin-users.component.scss']
})
export class SuperadminUsersComponent implements OnInit {

  users: SuperAdminUser[] = [];
  filteredUsers: SuperAdminUser[] = [];
  searchTerm: string = '';
  filterRole: string = '';
  filterStatus: string = '';

  loading = false;
  errorMessage = '';
  successMessage = '';

  // Pagination
  pageSize = 10;
  currentPage = 1;
  pagedUsers: SuperAdminUser[] = [];
  get totalPages(): number { return Math.max(1, Math.ceil(this.filteredUsers.length / this.pageSize)); }
  get pageNumbers(): number[] {
    const start = Math.max(1, this.currentPage - 2);
    const end   = Math.min(this.totalPages, this.currentPage + 2);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }
  get pageEnd(): number { return Math.min(this.currentPage * this.pageSize, this.filteredUsers.length); }
  get pageStart(): number { return (this.currentPage - 1) * this.pageSize + 1; }

  // For create account modal
  showCreateModal = false;
  createForm = { fullName: '', email: '', phone: '', companyName: '', password: '', role: 'RECRUITER' };
  creating = false;
  createError = '';
  showCreatePassword = false;

  // Secondary roles UI
  addingSecondaryRoleFor: number | null = null;
  private avatarLoadErrors = new Set<number>();

  /** Initiales du super-admin connecté (depuis localStorage) */
  userHeroInitials = 'SA';

  constructor(private superAdminApi: SuperAdminApiService, private authService: AuthService) {}

  ngOnInit(): void {
    const fullName = localStorage.getItem('fullName') || '';
    if (fullName) {
      this.userHeroInitials = fullName
        .split(' ')
        .map(p => p.charAt(0))
        .join('')
        .toUpperCase()
        .slice(0, 2) || 'SA';
    }
    this.loadUsers();
  }

  loadUsers(): void {
    this.loading = true;
    this.errorMessage = '';
    this.superAdminApi.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.applyFilters();
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Impossible de charger les utilisateurs.';
        this.loading = false;
      }
    });
  }

  applyFilters(): void {
    this.filteredUsers = this.users.filter(u => {
      const matchSearch = !this.searchTerm ||
        u.fullName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        u.email.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchRole = !this.filterRole || u.role === this.filterRole;
      const matchStatus = !this.filterStatus || u.accountStatus === this.filterStatus;
      return matchSearch && matchRole && matchStatus;
    });
    if (this.currentPage > this.totalPages) this.currentPage = 1;
    this.updatePage();
  }

  updatePage(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    this.pagedUsers = this.filteredUsers.slice(start, start + this.pageSize);
  }

  goToPage(n: number): void {
    if (n >= 1 && n <= this.totalPages) { this.currentPage = n; this.updatePage(); }
  }

  prevPage(): void { this.goToPage(this.currentPage - 1); }
  nextPage(): void { this.goToPage(this.currentPage + 1); }

  onSearchChange(): void { this.currentPage = 1; this.applyFilters(); }
  onFilterChange(): void { this.currentPage = 1; this.applyFilters(); }

  confirmDelete(user: SuperAdminUser): void { this.confirmAndDelete(user); }
  cancelDelete(): void {}

  async confirmAndDelete(user: SuperAdminUser): Promise<void> {
    const result = await Swal.fire({
      title: 'Supprimer cet utilisateur ?',
      html: `<div style="text-align:center;padding:4px 0">
        <div style="display:inline-flex;align-items:center;justify-content:center;width:52px;height:52px;border-radius:50%;background:rgba(231,13,13,.1);margin-bottom:12px">
          <i class="ti ti-user-x" style="font-size:24px;color:#E70D0D"></i>
        </div>
        <p style="margin:0;font-size:13.5px;color:#374151;font-weight:600">${user.fullName}</p>
        <p style="margin:4px 0 0;font-size:12px;color:#9ca3af">${user.email}</p>
        <p style="margin:10px 0 0;font-size:13px;color:#6b7280">Cette action est <strong style="color:#E70D0D">irréversible</strong>.</p>
      </div>`,
      showCancelButton: true,
      confirmButtonText: '<i class="ti ti-trash me-1"></i> Supprimer',
      cancelButtonText: 'Annuler',
      reverseButtons: true,
      focusCancel: true,
      buttonsStyling: false,
      customClass: {
        popup: 'sa-swal-popup sa-swal-danger-popup',
        confirmButton: 'sa-swal-btn sa-swal-btn-danger',
        cancelButton: 'sa-swal-btn sa-swal-btn-cancel',
        actions: 'sa-swal-actions'
      }
    });
    if (!result.isConfirmed) return;
    const id = user.id;
    this.superAdminApi.deleteUser(id).subscribe({
      next: () => {
        this.users = this.users.filter(u => u.id !== id);
        this.applyFilters();
        Swal.fire({
          toast: true, position: 'top-end', timer: 3500, timerProgressBar: true,
          showConfirmButton: false,
          html: `<div style="display:flex;align-items:flex-start;gap:12px;min-width:260px"><div style="width:34px;height:34px;border-radius:999px;display:grid;place-items:center;background:linear-gradient(135deg,#03C95A,#0ea5e9);box-shadow:0 8px 18px rgba(3,201,90,.22);flex-shrink:0"><i class="ti ti-circle-check" style="font-size:19px;color:#fff"></i></div><div style="text-align:left;line-height:1.25"><div style="font-size:13.5px;font-weight:700;color:#111827">Utilisateur supprimé</div><div style="margin-top:2px;font-size:12px;color:#6b7280">L'action a été enregistrée avec succès.</div></div></div>`,
          customClass: { popup: 'sa-swal-toast sa-swal-toast-success' }
        });
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Impossible de supprimer cet utilisateur.';
      }
    });
  }

  async confirmToggleBlock(user: SuperAdminUser): Promise<void> {
    if (user.role === 'SUPERADMIN') return;
    const isBlocked = user.accountStatus === 'BLOCKED';
    const color = isBlocked ? '#03C95A' : '#E70D0D';
    const icon = isBlocked ? 'ti-lock-open' : 'ti-lock';
    const result = await Swal.fire({
      title: isBlocked ? 'Débloquer cet utilisateur ?' : 'Bloquer cet utilisateur ?',
      html: `<div style="text-align:center;padding:4px 0">
        <div style="display:inline-flex;align-items:center;justify-content:center;width:52px;height:52px;border-radius:50%;background:${isBlocked ? 'rgba(3,201,90,.1)' : 'rgba(231,13,13,.1)'};margin-bottom:12px">
          <i class="ti ${icon}" style="font-size:24px;color:${color}"></i>
        </div>
        <p style="margin:0;font-size:13.5px;color:#374151;font-weight:600">${user.fullName}</p>
        <p style="margin:8px 0 0;font-size:13px;color:#6b7280">
          ${isBlocked ? "L'accès de cet utilisateur sera <strong style='color:#03C95A'>réactivé</strong>." : "L'accès de cet utilisateur sera <strong style='color:#E70D0D'>suspendu</strong>."}
        </p>
      </div>`,
      showCancelButton: true,
      confirmButtonText: isBlocked ? '<i class="ti ti-lock-open me-1"></i> Débloquer' : '<i class="ti ti-lock me-1"></i> Bloquer',
      cancelButtonText: 'Annuler',
      reverseButtons: true,
      focusCancel: true,
      buttonsStyling: false,
      customClass: {
        popup: 'sa-swal-popup sa-swal-popup--soft',
        confirmButton: `sa-swal-btn ${isBlocked ? 'sa-swal-btn-success' : 'sa-swal-btn-danger'}`,
        cancelButton: 'sa-swal-btn sa-swal-btn-cancel',
        actions: 'sa-swal-actions'
      }
    });
    if (!result.isConfirmed) return;
    this.superAdminApi.toggleBlock(user.id).subscribe({
      next: (updated) => {
        user.accountStatus = updated.accountStatus;
        this.showSuccess(`Utilisateur ${user.accountStatus === 'BLOCKED' ? 'bloqué' : 'débloqué'}.`);
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Impossible de modifier le statut.';
      }
    });
  }

  changeRole(user: SuperAdminUser, newRole: string): void {
    if (user.role === 'SUPERADMIN') return;
    if (user.role !== 'INSTRUCTOR' || newRole !== 'STUDENT') {
      this.showSuccess('Seul le passage Instructeur → Étudiant est autorisé.');
      return;
    }
    const oldRole = user.role;
    this.superAdminApi.changeUserRole(user.id, newRole).subscribe({
      next: (updated) => {
        user.role = updated.role;
        this.showSuccess(`Rôle changé en ${this.getRoleLabel(updated.role)}.`);
      },
      error: (err) => {
        user.role = oldRole;
        this.errorMessage = err.error?.message || 'Impossible de changer le rôle.';
      }
    });
  }

  showSuccess(msg: string): void {
    this.successMessage = msg;
    setTimeout(() => (this.successMessage = ''), 4000);
  }

  openCreateModal(): void {
    this.createForm = { fullName: '', email: '', phone: '', companyName: '', password: '', role: 'RECRUITER' };
    this.createError = '';
    this.showCreatePassword = false;
    this.showCreateModal = true;
  }

  closeCreateModal(): void {
    this.showCreateModal = false;
    this.createError = '';
  }

  createAccount(): void {
    if (!this.createForm.fullName.trim() || !this.createForm.email.trim()) {
      this.createError = 'Le nom et l\'email sont obligatoires.';
      return;
    }
    this.creating = true;
    this.createError = '';
    this.superAdminApi.createAccount(this.createForm).subscribe({
      next: (created) => {
        this.users.push(created);
        this.applyFilters();
        this.creating = false;
        this.showCreateModal = false;
        const roleLabel = created.role === 'ADMIN' ? 'Admin' : 'Recruteur';
        this.showSuccess(`Compte ${roleLabel} "${created.fullName}" créé. Les identifiants ont été envoyés par email.`);
      },
      error: (err) => {
        this.creating = false;
        this.createError = err.error || err.error?.message || 'Erreur lors de la création du compte.';
      }
    });
  }

  getRoleBadgeClass(role: string): string {
    if (role === 'SUPERADMIN') return 'badge bg-warning text-dark';
    if (role === 'ADMIN') return 'badge bg-danger-transparent text-danger';
    if (role === 'INSTRUCTOR') return 'badge bg-primary-transparent text-primary';
    if (role === 'STUDENT') return 'badge bg-info-transparent text-info';
    if (role === 'RECRUITER') return 'badge bg-secondary-transparent text-secondary';
    return 'badge bg-light text-dark';
  }

  getRoleLabel(role: string): string {
    const labels: Record<string, string> = {
      STUDENT: 'Étudiant', INSTRUCTOR: 'Instructeur',
      ADMIN: 'Admin', RECRUITER: 'Recruteur', SUPERADMIN: 'Super Admin'
    };
    return labels[role] || role;
  }

  formatDate(date: string): string {
    if (!date) return '-';
    return new Date(date).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  getRoleIcon(role: string): string {
    const icons: Record<string, string> = {
      STUDENT: 'ti ti-school', INSTRUCTOR: 'ti ti-chalkboard',
      ADMIN: 'ti ti-shield', RECRUITER: 'ti ti-briefcase', SUPERADMIN: 'ti ti-shield-bolt'
    };
    return icons[role] || 'ti ti-user';
  }

  countActive(): number {
    return this.users.filter(u => u.accountStatus === 'ACTIVE').length;
  }

  countBlocked(): number {
    return this.users.filter(u => u.accountStatus === 'BLOCKED').length;
  }

  getAvatarUrl(user: SuperAdminUser): string {
    return this.authService.resolveAvatarUrl(user?.avatarPath || '') || '';
  }

  hasAvatar(user: SuperAdminUser): boolean {
    return !!this.getAvatarUrl(user) && !this.avatarLoadErrors.has(user.id);
  }

  onAvatarError(user: SuperAdminUser): void {
    this.avatarLoadErrors.add(user.id);
  }

  // ─── Gestion des rôles secondaires ──────────────────────────────────────

  availableSecondaryRoles(user: SuperAdminUser): string[] {
    const all = ['STUDENT', 'RECRUITER', 'ADMIN'];
    return all.filter(r => r !== user.role && !(user.secondaryRoles || []).includes(r));
  }

  toggleAddRoleDropdown(userId: number): void {
    this.addingSecondaryRoleFor = this.addingSecondaryRoleFor === userId ? null : userId;
  }

  addSecondaryRole(user: SuperAdminUser, role: string): void {
    this.superAdminApi.addSecondaryRole(user.id, role).subscribe({
      next: (updated) => {
        user.secondaryRoles = updated.secondaryRoles;
        this.addingSecondaryRoleFor = null;
        this.showSuccess(`Rôle secondaire "${this.getRoleLabel(role)}" ajouté à ${user.fullName}.`);
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Impossible d\'ajouter le rôle secondaire.';
      }
    });
  }

  removeSecondaryRole(user: SuperAdminUser, role: string): void {
    this.superAdminApi.removeSecondaryRole(user.id, role).subscribe({
      next: (updated) => {
        user.secondaryRoles = updated.secondaryRoles;
        this.showSuccess(`Rôle secondaire "${this.getRoleLabel(role)}" retiré de ${user.fullName}.`);
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Impossible de retirer le rôle secondaire.';
      }
    });
  }
}
