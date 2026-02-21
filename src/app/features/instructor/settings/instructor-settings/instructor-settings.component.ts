import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '../../../../shared/service/routes/routes';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../../../../shared/service/profile/profile.service';
import { AuthService } from '../../../../shared/service/auth/auth.service';

@Component({
    selector: 'app-instructor-settings',
    templateUrl: './instructor-settings.component.html',
    styleUrl: './instructor-settings.component.scss',
    imports: [RouterLink, BsDatepickerModule, FormsModule, CommonModule]
})
export class InstructorSettingsComponent implements OnInit {
  public routes = routes;

  // Modèle du formulaire — lié aux inputs via [(ngModel)]
  profileForm = {
    fullName: '',
    email: '',
    phone: ''
  };

  // Modèle pour la suppression de compte
  deletePassword: string = '';

  // Messages d'état
  successMessage: string = '';
  errorMessage: string = '';
  deleteError: string = '';
  loadError: string = '';

  constructor(
    private profileService: ProfileService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.profileService.getProfile().subscribe({
      next: (data: any) => {
        this.profileForm.fullName = data.fullName || '';
        this.profileForm.email   = data.email   || '';
        this.profileForm.phone   = data.phone   || '';
      },
      error: (err: any) => {
        console.error('Erreur chargement profil:', err);
        this.loadError = 'Impossible de charger le profil. Vérifiez que le serveur est démarré.';
      }
    });
  }

  // Appelée quand l'utilisateur clique "Update Profile"
  // (ngSubmit) déclenche cette méthode depuis le formulaire HTML
  onUpdateProfile(): void {
    this.successMessage = '';
    this.errorMessage = '';

    this.profileService.updateProfile(this.profileForm).subscribe({
      next: (data: any) => {
        this.successMessage = 'Profil mis à jour avec succès !';
        // Mettre à jour le localStorage avec le nouveau nom
        localStorage.setItem('fullName', data.fullName);
        localStorage.setItem('email', data.email);
      },
      error: (err: any) => {
        this.errorMessage = err.error?.message || 'Erreur lors de la mise à jour';
      }
    });
  }

  // Appelée quand l'utilisateur confirme la suppression dans le modal
  onDeleteAccount(): void {
    this.deleteError = '';

    if (!this.deletePassword.trim()) {
      this.deleteError = 'Veuillez entrer votre mot de passe pour confirmer.';
      return;
    }

    this.profileService.deleteAccount(this.deletePassword).subscribe({
      next: () => {
        // Compte supprimé → vider localStorage et déconnecter
        alert('Votre compte a été supprimé définitivement.');
        this.authService.logout();
      },
      error: (err: any) => {
        this.deleteError = err.error || 'Mot de passe incorrect. Suppression refusée.';
      }
    });
  }
}

