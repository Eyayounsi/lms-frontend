import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfileService } from '../../../shared/service/profile/profile.service';
import { routes } from '../../../shared/service/routes/routes';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private profileService: ProfileService, private toastr: ToastrService) {}

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
    // Preview
    const reader = new FileReader();
    reader.onload = (e) => { this.avatarPreview = e.target?.result as string; };
    reader.readAsDataURL(file);
    // Upload
    this.profileService.uploadAvatar(file).subscribe({
      next: (res) => {
        if (this.profile) this.profile.avatarPath = res.avatarPath;
        this.toastr.success('Avatar updated successfully');
      },
      error: () => { this.toastr.error('Failed to upload avatar'); }
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
