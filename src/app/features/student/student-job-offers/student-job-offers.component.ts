import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RecruiterService, JobOffer } from '../../../shared/service/recruiter/recruiter.service';
import { ProfileService } from '../../../shared/service/profile/profile.service';
import { routes } from '../../../shared/service/routes/routes';

@Component({
  selector: 'app-student-job-offers',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './student-job-offers.component.html',
  styleUrls: ['./student-job-offers.component.scss']
})
export class StudentJobOffersComponent implements OnInit {
  public routes = routes;

  // État du partage de profil
  shareWithRecruiters: boolean | null = null; // null = en cours de chargement
  profileLoading = true;
  togglingShare = false;

  // Offres
  offers: JobOffer[] = [];
  filteredOffers: JobOffer[] = [];
  loading = false;
  error = '';

  searchQuery = '';
  filterType: '' | 'EMPLOI' | 'STAGE' = '';

  // Modal détail
  selectedOffer: JobOffer | null = null;

  constructor(
    private recruiterService: RecruiterService,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.profileService.getProfile().subscribe({
      next: (profile) => {
        this.shareWithRecruiters = profile.shareWithRecruiters === true;
        this.profileLoading = false;
        if (this.shareWithRecruiters) {
          this.loadOffers();
        }
      },
      error: () => {
        // En cas d'erreur profil, on permet quand même de voir les offres
        this.shareWithRecruiters = true;
        this.profileLoading = false;
        this.loadOffers();
      }
    });
  }

  enableSharing(): void {
    this.togglingShare = true;
    this.profileService.toggleShareWithRecruiters(true).subscribe({
      next: () => {
        this.shareWithRecruiters = true;
        this.togglingShare = false;
        this.loadOffers();
      },
      error: () => { this.togglingShare = false; }
    });
  }

  loadOffers(): void {
    this.loading = true;
    this.error = '';
    this.recruiterService.getPublicJobOffers().subscribe({
      next: (data) => {
        this.offers = data;
        this.applyFilters();
        this.loading = false;
      },
      error: () => {
        this.error = 'Impossible de charger les offres. Vérifiez votre connexion.';
        this.loading = false;
      }
    });
  }

  onSearch(): void { this.applyFilters(); }

  onFilterType(type: '' | 'EMPLOI' | 'STAGE'): void {
    this.filterType = type;
    this.applyFilters();
  }

  private applyFilters(): void {
    let result = [...this.offers];
    if (this.filterType) {
      result = result.filter(o => o.offerType === this.filterType);
    }
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      result = result.filter(o =>
        o.title.toLowerCase().includes(q) ||
        (o.location || '').toLowerCase().includes(q) ||
        (o.recruiterName || '').toLowerCase().includes(q) ||
        (o.requiredSkills || '').toLowerCase().includes(q)
      );
    }
    this.filteredOffers = result;
  }

  viewOffer(offer: JobOffer): void { this.selectedOffer = offer; }
  closeModal(): void { this.selectedOffer = null; }

  formatDate(dateStr: string | null): string {
    if (!dateStr) return '—';
    return new Date(dateStr).toLocaleDateString('fr-FR');
  }

  isDeadlineSoon(deadline: string | null): boolean {
    if (!deadline) return false;
    const diff = new Date(deadline).getTime() - Date.now();
    return diff > 0 && diff < 7 * 24 * 60 * 60 * 1000;
  }

  isDeadlinePassed(deadline: string | null): boolean {
    if (!deadline) return false;
    return new Date(deadline).getTime() < Date.now();
  }

  getContractLabel(c: string | null): string {
    const map: Record<string, string> = {
      CDI: 'CDI', CDD: 'CDD', FREELANCE: 'Freelance',
      STAGE_6M: 'Stage 6 mois', STAGE_3M: 'Stage 3 mois', ALTERNANCE: 'Alternance'
    };
    return c ? (map[c] || c) : '—';
  }

  get emploiCount(): number { return this.offers.filter(o => o.offerType === 'EMPLOI').length; }
  get stageCount(): number  { return this.offers.filter(o => o.offerType === 'STAGE').length; }
}
