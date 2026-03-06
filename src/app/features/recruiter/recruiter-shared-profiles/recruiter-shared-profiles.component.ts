import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecruiterService, SharedProfile } from '../../../shared/service/recruiter/recruiter.service';

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

  constructor(private recruiterService: RecruiterService) {}

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
    return profile.avatarPath
      ? 'http://localhost:8081' + profile.avatarPath
      : 'assets/img/user/avatar-default.png';
  }
}
