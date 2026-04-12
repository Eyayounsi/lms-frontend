import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RecruiterService, SharedProfile } from '../../../shared/service/recruiter/recruiter.service';
import { routes } from '../../../shared/service/routes/routes';
import { resolveAvatarImage } from '../../../shared/utils/avatar-image.util';

@Component({
  selector: 'app-recruiter-shared-profiles',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recruiter-shared-profiles.component.html',
  styleUrls: ['./recruiter-shared-profiles.component.scss']
})
export class RecruiterSharedProfilesComponent implements OnInit {
  profiles: SharedProfile[] = [];
  filteredProfiles: SharedProfile[] = [];
  searchQuery = '';
  loading = true;
  error = '';

  // Profil sélectionné pour le modal
  selectedProfile: SharedProfile | null = null;

  // Contact
  contactingId: number | null = null;

  constructor(private recruiterService: RecruiterService, private router: Router) {}

  ngOnInit(): void {
    this.loadProfiles();
  }

  loadProfiles(): void {
    this.loading = true;
    this.error = '';
    this.recruiterService.getSharedProfiles().subscribe({
      next: (data) => {
        this.profiles = data;
        this.filteredProfiles = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Impossible de charger les profils partagés.';
        this.loading = false;
        console.error(err);
      }
    });
  }

  onSearch(): void {
    const q = this.searchQuery.toLowerCase().trim();
    if (!q) {
      this.filteredProfiles = this.profiles;
      return;
    }
    this.filteredProfiles = this.profiles.filter(p =>
      (p.fullName || '').toLowerCase().includes(q) ||
      (p.email || '').toLowerCase().includes(q) ||
      (p.designation || '').toLowerCase().includes(q) ||
      (p.bio || '').toLowerCase().includes(q)
    );
  }

  viewProfile(profile: SharedProfile): void {
    this.selectedProfile = profile;
  }

  closeModal(): void {
    this.selectedProfile = null;
  }

  parseJson(json: string | null): any[] {
    if (!json) return [];
    try {
      return JSON.parse(json);
    } catch {
      return [];
    }
  }

  getAvatarUrl(profile: SharedProfile): string {
    return resolveAvatarImage(profile.avatarPath, this.generateInitialAvatar(profile.fullName));
  }

  private generateInitialAvatar(name: string): string {
    const initial = (name || 'U').charAt(0).toUpperCase();
    const colors = ['#392C7D', '#03C95A', '#0DCAF0', '#6d28d9', '#059669'];
    const bg = colors[(name || 'U').charCodeAt(0) % colors.length];
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><rect width="80" height="80" rx="40" fill="${bg}"/><text x="40" y="53" text-anchor="middle" font-family="Arial,sans-serif" font-size="30" font-weight="700" fill="white">${initial}</text></svg>`;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  }

  contactStudent(profile: SharedProfile): void {
    this.contactingId = profile.id;
    this.recruiterService.startConversation(profile.id).subscribe({
      next: (res) => {
        this.contactingId = null;
        this.closeModal();
        this.router.navigate([routes.recruiter_messages], {
          queryParams: { conversationId: res.conversationId }
        });
      },
      error: () => { this.contactingId = null; }
    });
  }

  getCardGradient(index: number): string {
    const gradients = [
      'linear-gradient(135deg,#03C95A,#392C7D)',
      'linear-gradient(135deg,#392C7D,#0DCAF0)',
      'linear-gradient(135deg,#F59E0B,#03C95A)',
      'linear-gradient(135deg,#0DCAF0,#392C7D)',
      'linear-gradient(135deg,#FF4667,#392C7D)',
      'linear-gradient(135deg,#03C95A,#0DCAF0)',
    ];
    return gradients[index % gradients.length];
  }
}
