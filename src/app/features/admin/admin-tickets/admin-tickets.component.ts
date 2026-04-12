import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminTicketsService, AdminTicketDto } from '../services/admin-tickets.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-tickets',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-tickets.component.html',
  styleUrls: ['./admin-tickets.component.scss']
})
export class AdminTicketsComponent implements OnInit {
  tickets: AdminTicketDto[] = [];
  loading = true;

  filterStatus = '';

  selectedTicket: AdminTicketDto | null = null;
  replyText = '';
  replying = false;

  statusToSet = '';
  updatingStatus = false;

  ticketToDelete: AdminTicketDto | null = null;
  showDeleteModal = false;
  deleting = false;

  constructor(private ticketService: AdminTicketsService) {}

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.ticketService.getAll(this.filterStatus || undefined).subscribe({
      next: data => { this.tickets = data; this.loading = false; },
      error: () => { this.showToast('error', 'Erreur de chargement.'); this.loading = false; }
    });
  }

  onFilterChange(): void { this.load(); }

  openView(ticket: AdminTicketDto): void {
    this.selectedTicket = { ...ticket };
    this.replyText = ticket.adminReply || '';
    this.statusToSet = ticket.status;
  }

  closeView(): void { this.selectedTicket = null; }

  submitReply(): void {
    if (!this.replyText.trim() || !this.selectedTicket) return;
    this.replying = true;
    this.ticketService.addReply(this.selectedTicket.id, this.replyText).subscribe({
      next: updated => {
        this.replying = false;
        Object.assign(this.selectedTicket!, updated);
        this.replyText = updated.adminReply || '';
        this.statusToSet = updated.status;
        const idx = this.tickets.findIndex(t => t.id === updated.id);
        if (idx >= 0) this.tickets[idx] = updated;
        this.showToast('success', 'Réponse envoyée.');
      },
      error: () => { this.replying = false; this.showToast('error', "Erreur d'envoi de la réponse."); }
    });
  }

  changeStatus(): void {
    if (!this.selectedTicket || !this.statusToSet) return;
    this.updatingStatus = true;
    this.ticketService.updateStatus(this.selectedTicket.id, this.statusToSet).subscribe({
      next: updated => {
        this.updatingStatus = false;
        Object.assign(this.selectedTicket!, updated);
        const idx = this.tickets.findIndex(t => t.id === updated.id);
        if (idx >= 0) this.tickets[idx] = updated;
        this.showToast('success', 'Statut mis à jour.');
      },
      error: () => { this.updatingStatus = false; this.showToast('error', 'Erreur de changement de statut.'); }
    });
  }

  getPriorityClass(priority: string): string {
    switch (priority?.toLowerCase()) {
      case 'high':   return 'rejected';
      case 'medium': return 'pending';
      case 'low':    return 'archived';
      default:       return 'archived';
    }
  }

  getPriorityLabel(priority: string): string {
    switch (priority?.toLowerCase()) {
      case 'high':   return 'Haute';
      case 'medium': return 'Moyenne';
      case 'low':    return 'Basse';
      default:       return priority;
    }
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Opened':     return 'pending';
      case 'Inprogress': return 'pending-edit';
      case 'Closed':     return 'published';
      default:           return 'archived';
    }
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'Opened':     return 'Ouvert';
      case 'Inprogress': return 'En cours';
      case 'Closed':     return 'Fermé';
      default:           return status;
    }
  }

  openDelete(ticket: AdminTicketDto): void { this.ticketToDelete = ticket; this.showDeleteModal = true; }
  cancelDelete(): void { this.showDeleteModal = false; this.ticketToDelete = null; }

  confirmDelete(): void {
    if (!this.ticketToDelete) return;
    this.deleting = true;
    this.ticketService.delete(this.ticketToDelete.id).subscribe({
      next: () => {
        this.deleting = false;
        this.showDeleteModal = false;
        this.tickets = this.tickets.filter(t => t.id !== this.ticketToDelete!.id);
        this.ticketToDelete = null;
        this.showToast('success', 'Ticket supprimé.');
      },
      error: () => { this.deleting = false; this.showToast('error', 'Erreur de suppression.'); }
    });
  }

  get openedCount(): number     { return this.tickets.filter(t => t.status === 'Opened').length; }
  get inProgressCount(): number { return this.tickets.filter(t => t.status === 'Inprogress').length; }
  get closedCount(): number     { return this.tickets.filter(t => t.status === 'Closed').length; }

  private showToast(type: 'success' | 'error', msg: string): void {
    const Toast = Swal.mixin({ toast: true, position: 'top-end', showConfirmButton: false, timer: 3500, timerProgressBar: true });
    Toast.fire({ icon: type, title: msg });
  }
}
