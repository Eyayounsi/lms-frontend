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

  // Avatar upload
  avatarPreview: string | null = null;
  avatarUploading = false;
  avatarPath = '';
  avatarSuccessMessage = '';
  avatarErrorMessage = '';
  avatarCacheBuster = '';

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
        this.avatarPath = profile.avatarPath || '';
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

  get avatarInitial(): string {
    return this.profileForm.fullName?.trim()?.charAt(0)?.toUpperCase() || 'U';
  }

  getAvatarUrl(): string {
    if (this.avatarPreview) return this.avatarPreview;
    if (!this.avatarPath) return '';
    const base = this.authService.resolveAvatarUrl(this.avatarPath) || '';
    return base ? `${base}${this.avatarCacheBuster ? '?t=' + this.avatarCacheBuster : ''}` : '';
  }

  onAvatarSelected(event: Event): void {
    this.avatarSuccessMessage = '';
    this.avatarErrorMessage = '';

    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;
    const file = input.files[0];

    if (!file.type.startsWith('image/')) {
      this.avatarErrorMessage = 'Veuillez choisir un fichier image valide (PNG/JPG).';
      input.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      this.avatarPreview = e.target?.result as string;
    };
    reader.readAsDataURL(file);

    this.avatarUploading = true;
    this.profileService.uploadAvatar(file).subscribe({
      next: (res) => {
        this.avatarUploading = false;
        this.avatarPreview = null;
        this.avatarPath = res?.avatarPath || '';
        this.avatarCacheBuster = Date.now().toString();
        this.authService.setAvatarPath(this.avatarPath);
        this.avatarSuccessMessage = 'Photo de profil mise à jour avec succès.';
        input.value = '';
      },
      error: (err) => {
        this.avatarUploading = false;
        this.avatarPreview = null;
        this.avatarErrorMessage = err?.error?.message || err?.error?.error || 'Impossible de mettre à jour la photo.';
        input.value = '';
      }
    });
  }

  removeAvatar(): void {
    this.avatarSuccessMessage = '';
    this.avatarErrorMessage = '';

    if (!this.avatarPath) {
      this.avatarErrorMessage = 'Aucune photo de profil à supprimer.';
      return;
    }

    const confirmed = window.confirm('Voulez-vous supprimer votre photo de profil ?');
    if (!confirmed) return;

    this.avatarUploading = true;
    this.profileService.deleteAvatar().subscribe({
      next: () => {
        this.avatarUploading = false;
        this.avatarPreview = null;
        this.avatarPath = '';
        this.avatarCacheBuster = '';
        this.authService.setAvatarPath('');
        this.avatarSuccessMessage = 'Photo de profil supprimée.';
      },
      error: (err) => {
        this.avatarUploading = false;
        this.avatarErrorMessage = err?.error?.message || 'Impossible de supprimer la photo.';
      }
    });
  }
}
