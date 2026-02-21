import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileService } from '../../service/profile/profile.service';
import { AuthService } from '../../service/auth/auth.service';
import { Router } from '@angular/router';
import { routes } from '../../service/routes/routes';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
  imports: [CommonModule, FormsModule]
})
export class UserProfileComponent implements OnInit {

  public routes = routes;

  profileForm = { fullName: '', email: '', phone: '' };
  successMessage = '';
  errorMessage = '';
  deletePassword = '';
  deleteError = '';
  userRole = '';

  constructor(
    private profileService: ProfileService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userRole = localStorage.getItem('role') || '';
    this.profileService.getProfile().subscribe({
      next: (data: any) => {
        this.profileForm.fullName = data.fullName || '';
        this.profileForm.email   = data.email   || '';
        this.profileForm.phone   = data.phone   || '';
      },
      error: (err: any) => {
        console.error('Erreur chargement profil:', err);
        this.errorMessage = 'Impossible de charger le profil. Vérifiez la connexion au serveur.';
      }
    });
  }

  onUpdateProfile(): void {
    this.successMessage = '';
    this.errorMessage = '';
    this.profileService.updateProfile(this.profileForm).subscribe({
      next: (data: any) => {
        this.successMessage = 'Profil mis à jour avec succès !';
        localStorage.setItem('fullName', data.fullName || '');
        if (data.email) localStorage.setItem('email', data.email);
      },
      error: (err: any) => {
        this.errorMessage = err.error?.message || err.error || 'Erreur lors de la mise à jour.';
      }
    });
  }

  onDeleteAccount(): void {
    this.deleteError = '';
    if (!this.deletePassword.trim()) {
      this.deleteError = 'Veuillez entrer votre mot de passe pour confirmer.';
      return;
    }
    this.profileService.deleteAccount(this.deletePassword).subscribe({
      next: () => {
        this.authService.logout();
        this.router.navigate([this.routes.login]);
      },
      error: (err: any) => {
        this.deleteError = err.error || 'Mot de passe incorrect.';
      }
    });
  }
}
