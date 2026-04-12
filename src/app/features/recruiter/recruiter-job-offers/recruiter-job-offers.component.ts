import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecruiterService, JobOffer, JobOfferForm } from '../../../shared/service/recruiter/recruiter.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recruiter-job-offers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recruiter-job-offers.component.html',
  styleUrls: ['./recruiter-job-offers.component.scss']
})
export class RecruiterJobOffersComponent implements OnInit {
  offers: JobOffer[] = [];
  loading = true;
  error = '';
  saving = false;
  saveError = '';

  showModal = false;
  editingOffer: JobOffer | null = null;
  form: JobOfferForm = this.blankForm();

  constructor(private recruiterService: RecruiterService) {}

  ngOnInit(): void { this.loadOffers(); }

  loadOffers(): void {
    this.loading = true; this.error = '';
    this.recruiterService.getJobOffers().subscribe({
      next: (data) => { this.offers = data; this.loading = false; },
      error: () => { this.error = 'Impossible de charger les offres.'; this.loading = false; }
    });
  }

  openCreate(): void {
    this.editingOffer = null; this.form = this.blankForm();
    this.saveError = ''; this.showModal = true;
  }

  openEdit(offer: JobOffer): void {
    this.editingOffer = offer;
    this.form = { title:offer.title, description:offer.description||'', offerType:offer.offerType, location:offer.location||'', contractType:offer.contractType||'', requiredSkills:offer.requiredSkills||'', deadline:offer.deadline||'', status:offer.status };
    this.saveError = ''; this.showModal = true;
  }

  closeModal(): void { this.showModal = false; this.editingOffer = null; }

  save(): void {
    if (!this.form.title.trim()) { this.saveError = 'Le titre est obligatoire.'; return; }
    this.saving = true; this.saveError = '';
    const action$ = this.editingOffer
      ? this.recruiterService.updateJobOffer(this.editingOffer.id, { ...this.form })
      : this.recruiterService.createJobOffer({ ...this.form });
    action$.subscribe({
      next: (saved) => {
        if (this.editingOffer) {
          const idx = this.offers.findIndex(o => o.id === saved.id);
          if (idx !== -1) this.offers[idx] = saved;
        } else {
          this.offers.unshift(saved);
        }
        this.saving = false; this.closeModal();
        Swal.fire({ icon: 'success', title: this.editingOffer ? 'Offre modifiée !' : 'Offre créée !', text: this.editingOffer ? 'Les modifications ont été enregistrées.' : 'Votre offre est maintenant publiée.', timer: 2000, showConfirmButton: false, toast: true, position: 'top-end' });
      },
      error: () => { this.saveError = 'Erreur lors de la sauvegarde. Veuillez réessayer.'; this.saving = false; }
    });
  }

  confirmDelete(id: number): void {
    Swal.fire({
      title: 'Supprimer cette offre ?',
      text: 'Cette action est irréversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc2626',
      cancelButtonColor: '#6b7280',
      confirmButtonText: '<i class="ti ti-trash me-1"></i> Oui, supprimer',
      cancelButtonText: 'Annuler',
      customClass: { popup: 'rct-swal-popup', confirmButton: 'rct-swal-danger', cancelButton: 'rct-swal-cancel' }
    }).then((result) => {
      if (result.isConfirmed) { this.doDelete(id); }
    });
  }

  doDelete(id: number): void {
    this.recruiterService.deleteJobOffer(id).subscribe({
      next: () => {
        this.offers = this.offers.filter(o => o.id !== id);
        Swal.fire({ icon: 'success', title: 'Supprimée !', text: 'L\'offre a été supprimée.', timer: 1800, showConfirmButton: false, toast: true, position: 'top-end' });
      },
      error: () => { Swal.fire({ icon: 'error', title: 'Erreur', text: 'Impossible de supprimer l\'offre.' }); }
    });
  }

  toggleStatus(offer: JobOffer): void {
    const newStatus: 'ACTIVE' | 'DRAFT' = offer.status === 'ACTIVE' ? 'DRAFT' : 'ACTIVE';
    const label = newStatus === 'ACTIVE' ? 'publier' : 'mettre en brouillon';
    const icon = newStatus === 'ACTIVE' ? '✅' : '📋';
    Swal.fire({
      title: `${icon} Confirmer`,
      text: `Voulez-vous ${label} l'offre "${offer.title}" ?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: newStatus === 'ACTIVE' ? '#03C95A' : '#6b7280',
      cancelButtonColor: '#94a3b8',
      confirmButtonText: newStatus === 'ACTIVE' ? '✅ Oui, publier' : '📋 Oui, brouillon',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        this.recruiterService.updateJobOffer(offer.id, { status: newStatus }).subscribe({
          next: (saved) => {
            const idx = this.offers.findIndex(o => o.id === saved.id);
            if (idx !== -1) this.offers[idx] = saved;
            Swal.fire({ icon: 'success', title: newStatus === 'ACTIVE' ? 'Offre publiée !' : 'Mise en brouillon !', timer: 1800, showConfirmButton: false, toast: true, position: 'top-end' });
          },
          error: () => { Swal.fire({ icon: 'error', title: 'Erreur', text: 'Impossible de modifier le statut.' }); }
        });
      }
    });
  }

  getStatusLabel(status: string): string {
    switch (status) { case 'ACTIVE': return 'Active'; case 'DRAFT': return 'Brouillon'; case 'CLOSED': return 'Fermée'; default: return status; }
  }

  getStatusStyle(status: string): string {
    switch (status) {
      case 'ACTIVE': return 'background:rgba(3,201,90,.12);color:#03C95A;border:1px solid rgba(3,201,90,.24)';
      case 'DRAFT':  return 'background:rgba(107,114,128,.1);color:#6b7280;border:1px solid rgba(107,114,128,.2)';
      case 'CLOSED': return 'background:rgba(239,68,68,.1);color:#dc2626;border:1px solid rgba(239,68,68,.2)';
      default: return '';
    }
  }

  getOfferTypeStyle(type: string): string {
    return type === 'STAGE'
      ? 'background:rgba(13,202,240,.1);color:#0284c7'
      : 'background:rgba(57,44,125,.1);color:#392C7D';
  }

  getTypeBadge(type: string): string { return type === 'STAGE' ? 'bg-info' : 'bg-primary'; }

  formatDate(dateStr: string | null): string {
    if (!dateStr) return '—';
    return new Date(dateStr).toLocaleDateString('fr-FR');
  }

  getActiveCount(): number { return this.offers.filter(o => o.status === 'ACTIVE').length; }
  getStageCount(): number  { return this.offers.filter(o => o.offerType === 'STAGE').length; }

  private blankForm(): JobOfferForm {
    return { title:'', description:'', offerType:'EMPLOI', location:'', contractType:'CDI', requiredSkills:'', deadline:'', status:'ACTIVE' };
  }
}