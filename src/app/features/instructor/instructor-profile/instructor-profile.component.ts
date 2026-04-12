import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfileService } from '../../../shared/service/profile/profile.service';
import { routes } from '../../../shared/service/routes/routes';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../shared/service/auth/auth.service';

@Component({
    selector: 'app-instructor-profile',
    templateUrl: './instructor-profile.component.html',
    styleUrls: ['./instructor-profile.component.scss'],
    imports: [CommonModule, RouterLink]
})
export class InstructorProfileComponent implements OnInit {
  public routes = routes;
  profile: any = null;
  education: any[] = [];
  experience: any[] = [];
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
        try { this.education = JSON.parse(data.educationJson || '[]'); } catch { this.education = []; }
        try { this.experience = JSON.parse(data.experienceJson || '[]'); } catch { this.experience = []; }
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Impossible de charger le profil.';
        this.loading = false;
      }
    });
  }

  getSocialCount(): number {
    if (!this.profile) return 0;
    const links = [
      this.profile.facebookUrl,
      this.profile.instagramUrl,
      this.profile.twitterUrl,
      this.profile.youtubeUrl,
      this.profile.linkedinUrl
    ];
    return links.filter((value: string) => !!String(value || '').trim()).length;
  }

  getCompletionItems(): Array<{ key: string; label: string; done: boolean }> {
    if (!this.profile) return [];
    return [
      { key: 'avatar', label: 'Photo de profil', done: !!this.profile.avatarPath },
      { key: 'fullName', label: 'Nom complet', done: !!String(this.profile.fullName || '').trim() },
      { key: 'email', label: 'Email', done: !!String(this.profile.email || '').trim() },
      { key: 'phone', label: 'Téléphone', done: !!String(this.profile.phone || '').trim() },
      { key: 'address', label: 'Adresse', done: !!String(this.profile.address || '').trim() },
      { key: 'bio', label: 'Biographie', done: !!String(this.profile.bio || '').trim() }
    ];
  }

  get completedItemsCount(): number {
    return this.getCompletionItems().filter(item => item.done).length;
  }

  get totalCompletionItems(): number {
    return this.getCompletionItems().length;
  }

  getProfileCompletion(): number {
    const items = this.getCompletionItems();
    if (!items.length) return 0;
    const done = items.filter(item => item.done).length;
    return Math.round((done / items.length) * 100);
  }

  getRoleLabel(): string {
    return this.profile?.designation || 'Instructeur';
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

    // Preview
    const reader = new FileReader();
    reader.onload = (e) => { this.avatarPreview = e.target?.result as string; };
    reader.readAsDataURL(file);
    // Upload
    this.avatarUploading = true;
    this.profileService.uploadAvatar(file).subscribe({
      next: (res) => {
        this.avatarUploading = false;
        if (this.profile) this.profile.avatarPath = res.avatarPath;
        this.avatarPreview = null;
        this.authService.setAvatarPath(res.avatarPath || '');
        this.toastr.success('Photo de profil mise a jour avec succes');
        input.value = '';
      },
      error: (err) => {
        this.avatarUploading = false;
        const message = err?.error?.message || err?.error?.error || 'Echec de mise a jour de la photo';
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

  getFirstName(): string {
    if (!this.profile?.fullName) return '—';
    const parts = this.profile.fullName.trim().split(' ');
    return parts.length > 1 ? parts.slice(0, -1).join(' ') : parts[0];
  }

  getLastName(): string {
    if (!this.profile?.fullName) return '—';
    const parts = this.profile.fullName.trim().split(' ');
    return parts.length > 1 ? parts[parts.length - 1] : '';
  }
}
