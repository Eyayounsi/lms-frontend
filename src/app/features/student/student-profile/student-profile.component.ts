import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { routes } from '../../../shared/service/routes/routes';
import { ProfileService } from '../../../shared/service/profile/profile.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../shared/service/auth/auth.service';

@Component({
    selector: 'app-student-profile',
    templateUrl: './student-profile.component.html',
    styleUrls: ['./student-profile.component.scss'],
    imports: [CommonModule, RouterLink]
})
export class StudentProfileComponent implements OnInit {

  public routes = routes;

  profile: any = null;
  loading = true;
  errorMessage = '';
  avatarPreview: string | null = null;
  avatarUploading = false;

  constructor(
    private profileService: ProfileService,
    private toastr: ToastrService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.profileService.getProfile().subscribe({
      next: (data) => {
        this.profile = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur chargement profil:', err);
        this.errorMessage = 'Impossible de charger le profil. Vérifiez votre connexion.';
        this.loading = false;
      }
    });
  }

  getAvatarUrl(): string {
    if (this.avatarPreview) return this.avatarPreview;
    if (!this.profile?.avatarPath) return '';
    return this.authService.resolveAvatarUrl(this.profile.avatarPath) || '';
  }

  get avatarInitial(): string {
    return this.profile?.fullName?.trim()?.charAt(0)?.toUpperCase() || 'U';
  }

  onAvatarSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;
    const file = input.files[0];

    if (!file.type.startsWith('image/')) {
      this.toastr.error('Veuillez sélectionner un fichier image valide.');
      input.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => { this.avatarPreview = e.target?.result as string; };
    reader.readAsDataURL(file);
    this.avatarUploading = true;
    this.profileService.uploadAvatar(file).subscribe({
      next: (res) => {
        this.avatarUploading = false;
        if (this.profile) this.profile.avatarPath = res.avatarPath;
        this.avatarPreview = null;
        this.authService.setAvatarPath(res.avatarPath || '');
        this.toastr.success('Avatar mis à jour !');
        input.value = '';
      },
      error: (err) => {
        this.avatarUploading = false;
        const message = err?.error?.message || err?.error?.error || 'Erreur lors de l\'upload';
        this.toastr.error(message);
        input.value = '';
      }
    });
  }

  removeAvatar(): void {
    if (!this.profile?.avatarPath) {
      this.toastr.info('Aucune photo de profil à supprimer.');
      return;
    }

    const confirmed = window.confirm('Voulez-vous supprimer votre photo de profil ?');
    if (!confirmed) return;

    this.avatarUploading = true;
    this.profileService.deleteAvatar().subscribe({
      next: () => {
        this.avatarUploading = false;
        if (this.profile) this.profile.avatarPath = null;
        this.avatarPreview = null;
        this.authService.setAvatarPath('');
        this.toastr.success('Photo de profil supprimée avec succès');
      },
      error: (err) => {
        this.avatarUploading = false;
        const message = err?.error?.message || err?.error?.error || 'Impossible de supprimer la photo de profil';
        this.toastr.error(message);
      }
    });
  }

  /** Extrait le prénom (tout sauf le dernier mot) */
  getFirstName(): string {
    if (!this.profile?.fullName) return '—';
    const parts = this.profile.fullName.trim().split(' ');
    return parts.length > 1 ? parts.slice(0, -1).join(' ') : parts[0];
  }

  /** Extrait le nom de famille (dernier mot) */
  getLastName(): string {
    if (!this.profile?.fullName) return '—';
    const parts = this.profile.fullName.trim().split(' ');
    return parts.length > 1 ? parts[parts.length - 1] : '';
  }
}
