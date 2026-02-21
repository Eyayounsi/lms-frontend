import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SuperAdminApiService, SuperAdminUser } from '../services/superadmin-api.service';

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
  userToDelete: SuperAdminUser | null = null;

  constructor(private superAdminApi: SuperAdminApiService) {}

  ngOnInit(): void {
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
  }

  onSearchChange(): void { this.applyFilters(); }
  onFilterChange(): void { this.applyFilters(); }

  confirmDelete(user: SuperAdminUser): void { this.userToDelete = user; }
  cancelDelete(): void { this.userToDelete = null; }

  deleteUser(): void {
    if (!this.userToDelete) return;
    const id = this.userToDelete.id;
    this.superAdminApi.deleteUser(id).subscribe({
      next: () => {
        this.users = this.users.filter(u => u.id !== id);
        this.applyFilters();
        this.userToDelete = null;
        this.showSuccess('Utilisateur supprimé avec succès.');
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Impossible de supprimer cet utilisateur.';
        this.userToDelete = null;
      }
    });
  }

  toggleBlock(user: SuperAdminUser): void {
    if (user.role === 'SUPERADMIN') return;
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
      ADMIN: 'ti ti-shield', RECRUITER: 'ti ti-briefcase', SUPERADMIN: 'ti ti-crown'
    };
    return icons[role] || 'ti ti-user';
  }
}
