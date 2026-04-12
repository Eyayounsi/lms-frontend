import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { ToastrService } from 'ngx-toastr';
import { TicketService, TicketDto } from '../../../shared/service/ticket/ticket.service';
import { routes } from '../../../shared/service/routes/routes';

declare var bootstrap: any;

@Component({
    selector: 'app-student-tickets',
    templateUrl: './student-tickets.component.html',
    styleUrl: './student-tickets.component.scss',
    imports: [CommonModule, FormsModule, MatSelectModule]
})
export class StudentTicketsComponent implements OnInit {
  public routes = routes;

  tickets: TicketDto[] = [];
  filteredTickets: TicketDto[] = [];
  loading = false;
  searchValue = '';

  selectedTicket: TicketDto | null = null;
  pendingDeleteId: number | null = null;

  // Formulaire création
  addForm = { subject: '', category: '', priority: '', description: '' };
  addSubmitting = false;

  // Formulaire édition
  editForm = { subject: '', category: '', priority: '', description: '' };
  editSubmitting = false;

  readonly categories = ['Mailing Issues', 'Language Issues', 'Installation Error', 'Payment Issue', 'Other'];
  readonly priorities = ['High', 'Medium', 'Low'];

  constructor(
    private ticketService: TicketService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets(): void {
    this.loading = true;
    this.ticketService.getMyTickets().subscribe({
      next: (data) => {
        this.tickets = data;
        this.filteredTickets = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.toastr.error('Impossible de charger vos tickets.');
      }
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

  // ─── Stats ───────────────────────────────────────────────────────────────
  get totalCount(): number { return this.tickets.length; }
  get openedCount(): number { return this.tickets.filter(t => t.status === 'Opened').length; }
  get closedCount(): number { return this.tickets.filter(t => t.status === 'Closed').length; }

  // ─── Création ────────────────────────────────────────────────────────────
  openAddModal(): void {
    this.addForm = { subject: '', category: '', priority: '', description: '' };
    const el = document.getElementById('add_ticket');
    if (el) new bootstrap.Modal(el).show();
  }

  onAddTicket(): void {
    if (!this.addForm.subject.trim() || !this.addForm.category || !this.addForm.priority) {
      this.toastr.warning('Titre, catégorie et priorité sont obligatoires.');
      return;
    }
    this.addSubmitting = true;
    this.ticketService.createTicket({
      subject: this.addForm.subject.trim(),
      category: this.addForm.category,
      priority: this.addForm.priority,
      description: this.addForm.description.trim() || undefined
    }).subscribe({
      next: (ticket) => {
        this.tickets.unshift(ticket);
        this.filteredTickets = [...this.tickets];
        this.addSubmitting = false;
        this.toastr.success('Ticket créé avec succès !');
        const el = document.getElementById('add_ticket');
        if (el) bootstrap.Modal.getInstance(el)?.hide();
      },
      error: (err) => {
        this.addSubmitting = false;
        this.toastr.error(err?.error || 'Erreur lors de la création du ticket.');
      }
    });
  }

  // ─── Détails ─────────────────────────────────────────────────────────────
  openDetailsModal(ticket: TicketDto): void {
    this.selectedTicket = ticket;
    const el = document.getElementById('ticket_details');
    if (el) new bootstrap.Modal(el).show();
  }

  // ─── Édition ─────────────────────────────────────────────────────────────
  openEditModal(ticket: TicketDto): void {
    this.selectedTicket = ticket;
    this.editForm = {
      subject: ticket.subject,
      category: ticket.category,
      priority: ticket.priority,
      description: ticket.description || ''
    };
    const el = document.getElementById('edit_ticket');
    if (el) new bootstrap.Modal(el).show();
  }

  onEditTicket(): void {
    if (!this.selectedTicket) return;
    if (!this.editForm.subject.trim() || !this.editForm.category || !this.editForm.priority) {
      this.toastr.warning('Titre, catégorie et priorité sont obligatoires.');
      return;
    }
    this.editSubmitting = true;
    this.ticketService.updateTicket(this.selectedTicket.id, {
      subject: this.editForm.subject.trim(),
      category: this.editForm.category,
      priority: this.editForm.priority,
      description: this.editForm.description.trim() || undefined
    }).subscribe({
      next: (updated) => {
        const idx = this.tickets.findIndex(t => t.id === updated.id);
        if (idx !== -1) this.tickets[idx] = updated;
        this.filteredTickets = [...this.tickets];
        this.editSubmitting = false;
        this.toastr.success('Ticket mis à jour !');
        const el = document.getElementById('edit_ticket');
        if (el) bootstrap.Modal.getInstance(el)?.hide();
      },
      error: (err) => {
        this.editSubmitting = false;
        this.toastr.error(err?.error || 'Erreur lors de la modification.');
      }
    });
  }

  // ─── Suppression ─────────────────────────────────────────────────────────
  openDeleteModal(ticket: TicketDto): void {
    this.pendingDeleteId = ticket.id;
    const el = document.getElementById('delete_modal');
    if (el) new bootstrap.Modal(el).show();
  }

  confirmDelete(): void {
    if (!this.pendingDeleteId) return;
    this.ticketService.deleteTicket(this.pendingDeleteId).subscribe({
      next: () => {
        this.tickets = this.tickets.filter(t => t.id !== this.pendingDeleteId);
        this.filteredTickets = [...this.tickets];
        this.pendingDeleteId = null;
        this.toastr.success('Ticket supprimé.');
        const el = document.getElementById('delete_modal');
        if (el) bootstrap.Modal.getInstance(el)?.hide();
      },
      error: (err) => this.toastr.error(err?.error || 'Erreur lors de la suppression.')
    });
  }
}
