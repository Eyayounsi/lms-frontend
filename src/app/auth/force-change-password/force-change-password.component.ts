import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileService } from '../../shared/service/profile/profile.service';
import { routes } from '../../shared/service/routes/routes';

@Component({
  selector: 'app-force-change-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './force-change-password.component.html',
  styleUrl: './force-change-password.component.scss'
})
export class ForceChangePasswordComponent {
  oldPassword = '';
  newPassword = '';
  confirmPassword = '';
  errorMessage = '';
  successMessage = '';
  loading = false;
  showOld = false;
  showNew = false;
  showConfirm = false;

  constructor(
    private profileService: ProfileService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.oldPassword || !this.newPassword || !this.confirmPassword) {
      this.errorMessage = 'Veuillez remplir tous les champs.';
      return;
    }
    if (this.newPassword.length < 8) {
      this.errorMessage = 'Le nouveau mot de passe doit contenir au moins 8 caractères.';
      return;
    }
    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = 'Les mots de passe ne correspondent pas.';
      return;
    }
    if (this.oldPassword === this.newPassword) {
      this.errorMessage = 'Le nouveau mot de passe doit être différent de l\'ancien.';
      return;
    }

    this.loading = true;
    this.profileService.changePassword({
      oldPassword: this.oldPassword,
      newPassword: this.newPassword
    }).subscribe({
      next: () => {
        this.loading = false;
        localStorage.setItem('firstLogin', 'false');
        this.successMessage = 'Mot de passe modifié avec succès ! Redirection...';
        setTimeout(() => {
          this.router.navigate([routes.recruiter_dashboard]);
        }, 1500);
      },
      error: (err: any) => {
        this.loading = false;
        this.errorMessage = err.error?.message || err.error || 'Erreur lors du changement de mot de passe.';
      }
    });
  }
}
