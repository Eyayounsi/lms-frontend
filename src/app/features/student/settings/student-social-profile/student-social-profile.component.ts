import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from '../../../../shared/service/profile/profile.service';
import { routes } from '../../../../shared/service/routes/routes';

@Component({
    selector: 'app-student-social-profile',
    templateUrl: './student-social-profile.component.html',
    styleUrl: './student-social-profile.component.scss',
    imports: [CommonModule, FormsModule]
})
export class StudentSocialProfileComponent implements OnInit {
  public routes = routes;

  socialForm = {
    twitterUrl: '',
    facebookUrl: '',
    instagramUrl: '',
    linkedinUrl: '',
    youtubeUrl: ''
  };

  loading = false;
  saving = false;
  successMsg = '';
  errorMsg = '';

  constructor(
    private profileService: ProfileService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.profileService.getProfile().subscribe({
      next: (profile) => {
        this.socialForm.twitterUrl   = profile.twitterUrl   || '';
        this.socialForm.facebookUrl  = profile.facebookUrl  || '';
        this.socialForm.instagramUrl = profile.instagramUrl || '';
        this.socialForm.linkedinUrl  = profile.linkedinUrl  || '';
        this.socialForm.youtubeUrl   = profile.youtubeUrl   || '';
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.toastr.error('Impossible de charger le profil.');
      }
    });
  }

  onSave(): void {
    this.saving = true;
    this.successMsg = '';
    this.errorMsg = '';
    this.profileService.updateProfile(this.socialForm).subscribe({
      next: () => {
        this.saving = false;
        this.successMsg = 'Réseaux sociaux mis à jour avec succès.';
        this.toastr.success('Réseaux sociaux sauvegardés !');
        setTimeout(() => this.successMsg = '', 4000);
      },
      error: (err) => {
        this.saving = false;
        this.errorMsg = err?.error || 'Erreur lors de la sauvegarde.';
        this.toastr.error(this.errorMsg);
      }
    });
  }
}

