import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminApiService, AdminUser } from '../services/admin-api.service';
import Swal from 'sweetalert2';
import { AuthService } from '../../../shared/service/auth/auth.service';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {

  users: AdminUser[] = [];
  filteredUsers: AdminUser[] = [];
  searchTerm: string = '';
  filterRole: string = '';
  filterStatus: string = '';

  loading: boolean = false;
  private avatarLoadErrors = new Set<number>();

  // For create recruiter modal
  showCreateModal = false;
  createForm = { fullName: '', email: '', phone: '', companyName: '', password: '' };
  creating = false;
  createError = '';
  showCreatePassword = false;

  constructor(private adminApi: AdminApiService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.loading = true;
    this.adminApi.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.applyFilters();
        this.loading = false;
      },
      error: (err) => {
        this.showToast('error', 'Impossible de charger les utilisateurs.');
        this.loading = false;
      }
    });
  }

  applyFilters(): void {
    this.filteredUsers = this.users.filter(u => {
      const matchSearch = !this.searchTerm ||
        u.fullName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        u.email.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchRole = !this.filterRole || u.role.includes(this.filterRole);
      const matchStatus = !this.filterStatus || u.accountStatus === this.filterStatus;
      return matchSearch && matchRole && matchStatus;
    });
  }

  onSearchChange(): void {
    this.applyFilters();
  }

  onFilterChange(): void {
    this.applyFilters();
  }

  confirmDelete(user: AdminUser): void {
    if (user.role.includes('ADMIN')) return;
    Swal.fire({
      title: 'Supprimer cet utilisateur ?',
      html: `Compte de <strong>${user.fullName}</strong> supprimé définitivement.<br><small class="text-muted">${user.email}</small>`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc2626',
      cancelButtonColor: '#64748b',
      confirmButtonText: '<i class="ti ti-trash me-1"></i>Supprimer',
      cancelButtonText: 'Annuler',
      customClass: { popup: 'rounded-4 shadow-lg' }
    }).then(r => { if (r.isConfirmed) this.deleteUser(user); });
  }

  private deleteUser(user: AdminUser): void {
    this.adminApi.deleteUser(user.id).subscribe({
      next: () => {
        this.users = this.users.filter(u => u.id !== user.id);
        this.applyFilters();
        this.showToast('success', 'Utilisateur supprimé avec succès.');
      },
      error: err => this.showToast('error', err.error?.message || 'Impossible de supprimer cet utilisateur.')
    });
  }

  toggleBlock(user: AdminUser): void {
    if (user.role.includes('ADMIN')) return; // sécurité frontend
    this.adminApi.toggleBlock(user.id).subscribe({
      next: (updated) => {
        user.accountStatus = updated.accountStatus;
        const action = user.accountStatus === 'BLOCKED' ? 'bloqué' : 'débloqué';
        this.showToast('success', `Utilisateur ${action} avec succès.`);
      },
      error: (err) => {
        this.showToast('error', err.error?.message || 'Impossible de modifier le statut.');
      }
    });
  }

  changeRole(user: AdminUser, newRole: string): void {
    if (user.role.includes('ADMIN')) return; // sécurité frontend
    if (user.role !== 'INSTRUCTOR' || newRole !== 'STUDENT') {
      this.showToast('error', 'Seul le passage Instructeur → Étudiant est autorisé.');
      return;
    }
    const oldRole = user.role;
    this.adminApi.changeUserRole(user.id, newRole).subscribe({
      next: (updated) => {
        user.role = updated.role;
        this.showToast('success', `Rôle de ${user.fullName} changé en ${this.getRoleLabel(updated.role)}.`);
      },
      error: (err) => {
        user.role = oldRole;
        this.showToast('error', err.error?.message || 'Impossible de changer le rôle.');
      }
    });
  }

  private showToast(type: 'success' | 'error', msg: string): void {
    const Toast = Swal.mixin({
      toast: true, position: 'top-end',
      showConfirmButton: false, timer: 3500, timerProgressBar: true
    });
    Toast.fire({ icon: type, title: msg });
  }

  openCreateModal(): void {
    this.createForm = { fullName: '', email: '', phone: '', companyName: '', password: '' };
    this.createError = '';
    this.showCreatePassword = false;
    this.showCreateModal = true;
  }

  closeCreateModal(): void {
    this.showCreateModal = false;
    this.createError = '';
  }

  createRecruiter(): void {
    if (!this.createForm.fullName.trim() || !this.createForm.email.trim()) {
      this.createError = 'Le nom et l\'email sont obligatoires.';
      return;
    }
    this.creating = true;
    this.createError = '';
    this.adminApi.createRecruiter(this.createForm).subscribe({
      next: (created) => {
        this.users.push(created);
        this.applyFilters();
        this.creating = false;
        this.showCreateModal = false;
        this.showToast('success', `Recruteur "${created.fullName}" créé avec succès. Les identifiants ont été envoyés par email.`);
      },
      error: (err) => {
        this.creating = false;
        this.createError = err.error || err.error?.message || 'Erreur lors de la création du compte.';
      }
    });
  }

  getRoleBadgeClass(role: string): string {
    if (role.includes('ADMIN')) return 'badge bg-danger';
    if (role.includes('INSTRUCTOR')) return 'badge bg-primary';
    if (role.includes('STUDENT')) return 'badge bg-success';
    if (role.includes('RECRUITER')) return 'badge bg-warning text-dark';
    return 'badge bg-secondary';
  }

  getRoleLabel(role: string): string {
    if (role.includes('ADMIN')) return 'Admin';
    if (role.includes('INSTRUCTOR')) return 'Instructeur';
    if (role.includes('STUDENT')) return 'Étudiant';
    if (role.includes('RECRUITER')) return 'Recruteur';
    return role;
  }

  getAvatarUrl(user: AdminUser): string {
    return this.authService.resolveAvatarUrl(user?.avatarPath || '') || '';
  }

  hasAvatar(user: AdminUser): boolean {
    return !!this.getAvatarUrl(user) && !this.avatarLoadErrors.has(user.id);
  }

  onAvatarError(user: AdminUser): void {
    this.avatarLoadErrors.add(user.id);
  }

  formatDate(dateStr: string): string {
    if (!dateStr) return '-';
    try {
      return new Date(dateStr).toLocaleDateString('fr-FR');
    } catch {
      return dateStr;
    }
  }

  get totalUsersCount(): number     { return this.users.length; }
  get activeUsersCount(): number    { return this.users.filter(u => u.accountStatus === 'ACTIVE').length; }
  get blockedUsersCount(): number   { return this.users.filter(u => u.accountStatus === 'BLOCKED').length; }
  get instructorsCount(): number    { return this.users.filter(u => u.role.includes('INSTRUCTOR')).length; }
}
