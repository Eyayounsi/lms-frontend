import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TicketService, TicketDto } from '../../../shared/service/ticket/ticket.service';

declare var bootstrap: any;

@Component({
    selector: 'app-instructor-tickets',
    templateUrl: './instructor-tickets.component.html',
    styleUrls: ['./instructor-tickets.component.scss'],
    imports: [CommonModule, FormsModule]
})
export class InstructorTicketsComponent implements OnInit {

  tickets: TicketDto[] = [];
  filteredTickets: TicketDto[] = [];
  loading = false;
  searchValue = '';

  selectedTicket: TicketDto | null = null;
  pendingDeleteId: number | null = null;

  addForm = { subject: '', category: '', priority: '', description: '' };
  addSubmitting = false;

  editForm = { subject: '', category: '', priority: '', description: '' };
  editSubmitting = false;

  readonly categories = ['Mailing Issues', 'Language Issues', 'Installation Error', 'Payment Issue', 'Other'];
  readonly priorities = ['High', 'Medium', 'Low'];

  constructor(
    private ticketService: TicketService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void { this.loadTickets(); }

  loadTickets(): void {
    this.loading = true;
    this.ticketService.getMyTickets().subscribe({
      next: (data) => { this.tickets = data; this.filteredTickets = data; this.loading = false; },
      error: () => { this.loading = false; this.toastr.error('Impossible de charger vos tickets.'); }
    });
  }

  searchData(value: string): void {
    const term = value.trim().toLowerCase();
    this.filteredTickets = term
      ? this.tickets.filter(t =>
          t.subject.toLowerCase().includes(term) ||
          t.category.toLowerCase().includes(term) ||
          t.ticketId.toLowerCase().includes(term)
        )
      : [...this.tickets];
  }

  get totalCount(): number { return this.tickets.length; }
  get openedCount(): number { return this.tickets.filter(t => t.status === 'Opened').length; }
  get closedCount(): number { return this.tickets.filter(t => t.status === 'Closed').length; }

  openAddModal(): void {
    this.addForm = { subject: '', category: '', priority: '', description: '' };
    const el = document.getElementById('add_ticket');
    if (el) new bootstrap.Modal(el).show();
  }

  onAddTicket(): void {
    if (!this.addForm.subject.trim() || !this.addForm.category || !this.addForm.priority) {
      this.toastr.warning('Titre, categorie et priorite sont obligatoires.');
      return;
    }
    this.addSubmitting = true;
    this.ticketService.createTicket({
      subject: this.addForm.subject.trim(),
      category: this.addForm.category,
      priority: this.addForm.priority,
      description: this.addForm.description
    } as TicketDto).subscribe({
      next: (t) => {
        this.tickets.unshift(t);
        this.filteredTickets = [...this.tickets];
        this.addSubmitting = false;
        this.toastr.success('Ticket cree avec succes !');
        const el = document.getElementById('add_ticket');
        if (el) bootstrap.Modal.getInstance(el)?.hide();
      },
      error: (err) => {
        this.addSubmitting = false;
        this.toastr.error(err?.error || 'Erreur lors de la creation.');
      }
    });
  }

  openDetailsModal(ticket: TicketDto): void {
    this.selectedTicket = ticket;
    const el = document.getElementById('ticket_details');
    if (el) new bootstrap.Modal(el).show();
  }

  openEditModal(ticket: TicketDto): void {
    this.selectedTicket = ticket;
    this.editForm = { subject: ticket.subject, category: ticket.category, priority: ticket.priority, description: ticket.description || '' };
    const el = document.getElementById('edit_ticket');
    if (el) new bootstrap.Modal(el).show();
  }

  onEditTicket(): void {
    if (!this.selectedTicket?.id) return;
    this.editSubmitting = true;
    this.ticketService.updateTicket(this.selectedTicket.id, this.editForm).subscribe({
      next: (updated) => {
        const idx = this.tickets.findIndex(t => t.id === updated.id);
        if (idx !== -1) this.tickets[idx] = updated;
        this.filteredTickets = [...this.tickets];
        this.editSubmitting = false;
        this.toastr.success('Ticket modifie avec succes !');
        const el = document.getElementById('edit_ticket');
        if (el) bootstrap.Modal.getInstance(el)?.hide();
      },
      error: (err) => {
        this.editSubmitting = false;
        this.toastr.error(err?.error || 'Erreur lors de la modification.');
      }
    });
  }

  confirmDelete(id: number): void {
    this.pendingDeleteId = id;
    const el = document.getElementById('delete_ticket_modal');
    if (el) new bootstrap.Modal(el).show();
  }

  doDelete(): void {
    if (!this.pendingDeleteId) return;
    this.ticketService.deleteTicket(this.pendingDeleteId).subscribe({
      next: () => {
        this.tickets = this.tickets.filter(t => t.id !== this.pendingDeleteId);
        this.filteredTickets = [...this.tickets];
        this.pendingDeleteId = null;
        this.toastr.success('Ticket supprime.');
        const el = document.getElementById('delete_ticket_modal');
        if (el) bootstrap.Modal.getInstance(el)?.hide();
      },
      error: (err) => { this.toastr.error(err?.error || 'Erreur lors de la suppression.'); }
    });
  }

  statusClass(status: string): string {
    return status === 'Opened' ? 'bg-danger' : status === 'Inprogress' ? 'bg-info' : 'bg-success';
  }

  priorityClass(priority: string): string {
    return priority === 'High' ? 'bg-danger' : priority === 'Medium' ? 'bg-warning' : 'bg-success';
  }
}
