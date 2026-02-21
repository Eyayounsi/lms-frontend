import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminApiService, AdminUser } from '../services/admin-api.service';

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
  errorMessage: string = '';
  successMessage: string = '';

  // For delete confirmation modal
  userToDelete: AdminUser | null = null;

  constructor(private adminApi: AdminApiService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.loading = true;
    this.errorMessage = '';
    this.adminApi.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.applyFilters();
        this.loading = false;
      },
      error: (err) => {
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
    this.userToDelete = user;
  }

  cancelDelete(): void {
    this.userToDelete = null;
  }

  deleteUser(): void {
    if (!this.userToDelete) return;
    const id = this.userToDelete.id;
    this.adminApi.deleteUser(id).subscribe({
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

  toggleBlock(user: AdminUser): void {
    if (user.role.includes('ADMIN')) return; // sécurité frontend
    this.adminApi.toggleBlock(user.id).subscribe({
      next: (updated) => {
        user.accountStatus = updated.accountStatus;
        const action = user.accountStatus === 'BLOCKED' ? 'bloqué' : 'débloqué';
        this.showSuccess(`Utilisateur ${action} avec succès.`);
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Impossible de modifier le statut.';
      }
    });
  }

  changeRole(user: AdminUser, newRole: string): void {
    if (user.role.includes('ADMIN')) return; // sécurité frontend
    const oldRole = user.role;
    this.adminApi.changeUserRole(user.id, newRole).subscribe({
      next: (updated) => {
        user.role = updated.role;
        this.showSuccess(`Rôle de ${user.fullName} changé en ${this.getRoleLabel(updated.role)}.`);
      },
      error: (err) => {
        user.role = oldRole; // Annuler le changement visuel
        this.errorMessage = err.error?.message || 'Impossible de changer le rôle.';
      }
    });
  }

  showSuccess(msg: string): void {
    this.successMessage = msg;
    setTimeout(() => this.successMessage = '', 4000);
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

  formatDate(dateStr: string): string {
    if (!dateStr) return '-';
    try {
      return new Date(dateStr).toLocaleDateString('fr-FR');
    } catch {
      return dateStr;
    }
  }
}
