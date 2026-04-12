import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileService } from '../../../../shared/service/profile/profile.service';
import { AuthService } from '../../../../shared/service/auth/auth.service';

@Component({
  selector: 'app-recruiter-settings',
  templateUrl: './recruiter-settings.component.html',
  styleUrl: './recruiter-settings.component.scss',
  imports: [CommonModule, FormsModule],
})
export class RecruiterSettingsComponent implements OnInit {
  profileForm = {
    fullName: '',
    email: '',
    phone: '',
    designation: '',
    address: '',
    bio: '',
  };

  newEmail = '';

  successMessage = '';
  errorMessage = '';
  emailSuccessMessage = '';
  emailErrorMessage = '';
  loadError = '';
  updatingEmail = false;
  avatarPreview: string | null = null;
  avatarUploading = false;
  avatarPath = '';

  avatarSuccessMessage = '';
  avatarErrorMessage = '';

  constructor(
    private profileService: ProfileService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.profileService.getProfile().subscribe({
      next: (data: any) => {
        this.profileForm.fullName = data.fullName || '';
        this.profileForm.email = data.email || '';
        this.profileForm.phone = data.phone || '';
        this.profileForm.designation = data.designation || '';
        this.profileForm.address = data.address || '';
        this.profileForm.bio = data.bio || '';
        this.newEmail = data.email || '';
        this.avatarPath = data.avatarPath || '';
      },
      error: () => {
        this.loadError = 'Impossible de charger le profil. Verifiez que le serveur est demarre.';
      },
    });
  }

  onUpdateProfile(): void {
    this.successMessage = '';
    this.errorMessage = '';

    this.profileService.updateProfile(this.profileForm).subscribe({
      next: (data: any) => {
        this.successMessage = 'Profil mis a jour avec succes.';
        localStorage.setItem('fullName', data.fullName);
        localStorage.setItem('email', data.email);
        this.newEmail = data.email || this.newEmail;
      },
      error: (err: any) => {
        this.errorMessage = err.error?.message || 'Erreur lors de la mise a jour';
      },
    });
  }

  onChangeEmail(): void {
    this.emailSuccessMessage = '';
    this.emailErrorMessage = '';

    const nextEmail = (this.newEmail || '').trim();
    if (!nextEmail) {
      this.emailErrorMessage = 'Veuillez saisir une adresse e-mail.';
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(nextEmail)) {
      this.emailErrorMessage = 'Format e-mail invalide.';
      return;
    }

    if (nextEmail.toLowerCase() === (this.profileForm.email || '').toLowerCase()) {
      this.emailErrorMessage = 'Le nouvel e-mail est identique a l\'actuel.';
      return;
    }

    this.updatingEmail = true;
    this.profileService
      .updateProfile({
        ...this.profileForm,
        email: nextEmail,
      })
      .subscribe({
        next: (data: any) => {
          this.profileForm.email = data?.email || nextEmail;
          this.newEmail = this.profileForm.email;
          localStorage.setItem('email', this.profileForm.email);
          this.emailSuccessMessage = 'Adresse e-mail mise a jour avec succes.';
          this.updatingEmail = false;
        },
        error: (err: any) => {
          this.emailErrorMessage = err?.error?.message || 'Impossible de modifier l\'e-mail.';
          this.updatingEmail = false;
        },
      });
  }

  getAvatarUrl(): string {
    if (this.avatarPreview) return this.avatarPreview;
    if (!this.avatarPath) return '';
    return this.authService.resolveAvatarUrl(this.avatarPath) || '';
  }

  get avatarInitial(): string {
    return this.profileForm.fullName?.trim()?.charAt(0)?.toUpperCase() || 'R';
  }

  get avatarInitialBg(): string {
    return 'linear-gradient(135deg, #10b981, #059669)';
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
        this.authService.setAvatarPath(this.avatarPath);
        this.avatarSuccessMessage = 'Photo de profil mise a jour avec succes.';
        input.value = '';
      },
      error: (err) => {
        this.avatarUploading = false;
        this.avatarPreview = null;
        this.avatarErrorMessage =
          err?.error?.message || err?.error?.error || 'Impossible de mettre a jour la photo.';
        input.value = '';
      },
    });
  }

  removeAvatar(): void {
    this.avatarSuccessMessage = '';
    this.avatarErrorMessage = '';

    if (!this.avatarPath) {
      this.avatarErrorMessage = 'Aucune photo de profil a supprimer.';
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
        this.authService.setAvatarPath('');
        this.avatarSuccessMessage = 'Photo de profil supprimee avec succes.';
      },
      error: (err) => {
        this.avatarUploading = false;
        this.avatarErrorMessage =
          err?.error?.message || err?.error?.error || 'Impossible de supprimer la photo.';
      },
    });
  }
}
