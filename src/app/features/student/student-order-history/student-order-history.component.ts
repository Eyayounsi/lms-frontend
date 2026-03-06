import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderService, OrderHistoryDto } from '../../../shared/service/order/order.service';
import { environment } from '../../../../environments/environment';

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
    if (!path) return 'assets/img/course/course-01.jpg';
    const clean = path.startsWith('/') ? path : '/' + path;
    return `${environment.apiUrl.replace('/api', '')}${clean}`;
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
}
