import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { routes } from '../../../shared/service/routes/routes';
import { ProfileService } from '../../../shared/service/profile/profile.service';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private profileService: ProfileService, private toastr: ToastrService) {}

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
    if (!this.profile?.avatarPath) return 'assets/img/profiles/avatar-02.jpg';
    const p = this.profile.avatarPath;
    if (p.startsWith('http')) return p;
    return 'http://localhost:8081/' + (p.startsWith('/') ? p.substring(1) : p);
  }

  onAvatarSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = (e) => { this.avatarPreview = e.target?.result as string; };
    reader.readAsDataURL(file);
    this.profileService.uploadAvatar(file).subscribe({
      next: (res) => { if (this.profile) this.profile.avatarPath = res.avatarPath; this.toastr.success('Avatar mis à jour !'); },
      error: () => { this.toastr.error('Erreur lors de l\'upload'); }
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
