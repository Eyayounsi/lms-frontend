import { Component, OnInit } from '@angular/core';
import { routes } from '../../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../../../../shared/service/profile/profile.service';
import { AuthService } from '../../../../shared/service/auth/auth.service';

@Component({
    selector: 'app-student-settings',
    templateUrl: './student-settings.component.html',
    styleUrl: './student-settings.component.scss',
    imports : [CommonModule, RouterLink, MatSelectModule, BsDatepickerModule, FormsModule]
})
export class StudentSettingsComponent implements OnInit {
  public routes = routes;

  profileForm = { fullName: '', email: '', phone: '' };
  successMessage = '';
  errorMessage = '';
  deletePassword = '';
  deleteError = '';

  // Share with recruiters
  shareWithRecruiters = false;
  shareLoading = false;
  shareSuccess = '';
  shareError = '';

  constructor(
    private profileService: ProfileService,
    private authService: AuthService,
    private router: Router
  ) {}

  loadError: string = '';

  ngOnInit(): void {
    this.profileService.getProfile().subscribe({
      next: (profile) => {
        this.profileForm.fullName = profile.fullName || '';
        this.profileForm.email = profile.email || '';
        this.profileForm.phone = profile.phone || '';
        this.shareWithRecruiters = profile.shareWithRecruiters === true;
      },
      error: (err) => {
        console.error('Erreur chargement profil:', err);
        this.loadError = 'Impossible de charger le profil. Vérifiez que le serveur est démarré.';
      }
    });
  }

  onUpdateProfile(): void {
    this.successMessage = '';
    this.errorMessage = '';
    this.profileService.updateProfile(this.profileForm).subscribe({
      next: (updated) => {
        this.successMessage = 'Profil mis à jour avec succès.';
        localStorage.setItem('fullName', updated.fullName || '');
        if (updated.email) localStorage.setItem('email', updated.email);
      },
      error: (err) => {
        this.errorMessage = err.error || 'Erreur lors de la mise à jour.';
      }
    });
  }

  onToggleShare(event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    this.shareLoading = true;
    this.shareSuccess = '';
    this.shareError = '';
    this.profileService.toggleShareWithRecruiters(checked).subscribe({
      next: () => {
        this.shareWithRecruiters = checked;
        this.shareLoading = false;
        this.shareSuccess = checked
          ? 'Votre profil est maintenant visible par les recruteurs.'
          : 'Votre profil est masqué des recruteurs.';
        setTimeout(() => this.shareSuccess = '', 3000);
      },
      error: (err) => {
        this.shareLoading = false;
        this.shareError = err.error || 'Erreur lors de la mise à jour.';
        // Revert toggle 
        this.shareWithRecruiters = !checked;
      }
    });
  }

  onDeleteAccount(): void {
    this.deleteError = '';
    this.profileService.deleteAccount(this.deletePassword).subscribe({
      next: () => {
        this.authService.logout();
        this.router.navigate([this.routes.login]);
      },
      error: (err) => {
        this.deleteError = err.error || 'Mot de passe incorrect.';
      }
    });
  }
}
