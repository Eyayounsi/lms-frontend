import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderService, OrderHistoryDto } from '../../../shared/service/order/order.service';
import { environment } from '../../../../environments/environment';
import { resolveCourseImage } from '../../../shared/utils/course-image.util';

@Component({
    selector: 'app-student-order-history',
    templateUrl: './student-order-history.component.html',
    styleUrl: './student-order-history.component.scss',
    imports: [CommonModule, FormsModule],
})
export class StudentOrderHistoryComponent implements OnInit {
  orders: OrderHistoryDto[] = [];
  filteredOrders: OrderHistoryDto[] = [];
  loading = true;
  errorMessage = '';
  searchValue = '';
  statusFilter = '';

  invoiceOrder: OrderHistoryDto | null = null;
  studentName = localStorage.getItem('fullName') || 'Client';
  studentEmail = localStorage.getItem('email') || '';

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.loading = true;
    this.orderService.getMyOrders().subscribe({
      next: (data) => {
        this.orders = data;
        this.filteredOrders = data;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Erreur lors du chargement des commandes.';
        this.loading = false;
      }
    });
  }

  applyFilters(): void {
    let result = [...this.orders];
    if (this.statusFilter) {
      result = result.filter(o => o.status === this.statusFilter);
    }
    if (this.searchValue.trim()) {
      const q = this.searchValue.toLowerCase();
      result = result.filter(o =>
        o.courseTitle.toLowerCase().includes(q) ||
        o.instructorName.toLowerCase().includes(q) ||
        String(o.enrollmentId).includes(q)
      );
    }
    this.filteredOrders = result;
  }

  getImageUrl(path: string): string {
    return resolveCourseImage(path);
  }

  formatDate(dateStr: string): string {
    if (!dateStr) return '-';
    return new Date(dateStr).toLocaleDateString('fr-FR', {
      day: '2-digit', month: 'short', year: 'numeric'
    });
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'COMPLETED': return 'bg-success';
      case 'PENDING':   return 'bg-warning text-dark';
      case 'REFUNDED':  return 'bg-danger';
      default:          return 'bg-secondary';
    }
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'COMPLETED': return 'Complété';
      case 'PENDING':   return 'En attente';
      case 'REFUNDED':  return 'Remboursé';
      default:          return status;
    }
  }

  getTotalSpent(): number {
    return this.orders.reduce((sum, o) => sum + (o.amount || 0), 0);
  }

  openInvoice(o: OrderHistoryDto): void { this.invoiceOrder = o; }
  closeInvoice(): void { this.invoiceOrder = null; }

  printInvoice(): void {
    const el = document.getElementById('student-invoice-area');
    if (!el) return;
    const original = document.body.innerHTML;
    document.body.innerHTML = el.innerHTML;
    window.print();
    document.body.innerHTML = original;
    window.location.reload();
  }
}
