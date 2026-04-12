import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminPayoutsService, AdminPayoutDto } from '../services/admin-payouts.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-payouts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-payouts.component.html',
  styleUrls: ['./admin-payouts.component.scss']
})
export class AdminPayoutsComponent implements OnInit {
  payouts: AdminPayoutDto[] = [];
  loading = true;

  filterStatus = '';

  selectedPayout: AdminPayoutDto | null = null;
  actionType: 'pay' | 'reject' | null = null;
  actionNotes = '';
  processing = false;

  invoicePayout: AdminPayoutDto | null = null;

  constructor(private payoutService: AdminPayoutsService) {}

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.payoutService.getAll(this.filterStatus || undefined).subscribe({
      next: data => { this.payouts = data; this.loading = false; },
      error: () => { this.showToast('error', 'Erreur de chargement.'); this.loading = false; }
    });
  }

  onFilterChange(): void { this.load(); }

  openAction(payout: AdminPayoutDto, type: 'pay' | 'reject'): void {
    this.selectedPayout = payout;
    this.actionType = type;
    this.actionNotes = '';
  }

  cancelAction(): void {
    this.selectedPayout = null;
    this.actionType = null;
    this.actionNotes = '';
  }

  confirmAction(): void {
    if (!this.selectedPayout || !this.actionType) return;
    if (this.actionType === 'reject' && !this.actionNotes.trim()) {
      this.showToast('error', 'Veuillez indiquer une raison de rejet.');
      return;
    }
    this.processing = true;
    const obs = this.actionType === 'pay'
      ? this.payoutService.markAsPaid(this.selectedPayout.id, this.actionNotes)
      : this.payoutService.reject(this.selectedPayout.id, this.actionNotes);

    obs.subscribe({
      next: (updated) => {
        this.processing = false;
        const idx = this.payouts.findIndex(p => p.id === updated.id);
        if (idx >= 0) this.payouts[idx] = updated;
        this.cancelAction();
        this.showToast('success', this.actionType === 'pay' ? 'Virement marqué comme payé.' : 'Virement rejeté.');
      },
      error: (err) => {
        this.processing = false;
        this.showToast('error', err?.error?.error || 'Erreur lors du traitement.');
      }
    });
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'PAID':     return 'published';
      case 'REJECTED': return 'rejected';
      default:         return 'pending';
    }
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'PAID':     return 'Payé';
      case 'REJECTED': return 'Rejeté';
      default:         return 'En attente';
    }
  }

  get pendingCount(): number {
    return this.payouts.filter(p => p.status === 'PENDING').length;
  }

  get totalPending(): number {
    return this.payouts
      .filter(p => p.status === 'PENDING')
      .reduce((sum, p) => sum + p.amount, 0);
  }

  openInvoice(p: AdminPayoutDto): void { this.invoicePayout = p; }
  closeInvoice(): void { this.invoicePayout = null; }

  printInvoice(): void {
    const el = document.getElementById('invoice-print-area');
    if (!el) return;
    const original = document.body.innerHTML;
    document.body.innerHTML = el.innerHTML;
    window.print();
    document.body.innerHTML = original;
    window.location.reload();
  }

  private showToast(type: 'success' | 'error', msg: string): void {
    const Toast = Swal.mixin({ toast: true, position: 'top-end', showConfirmButton: false, timer: 3500, timerProgressBar: true });
    Toast.fire({ icon: type, title: msg });
  }
}
