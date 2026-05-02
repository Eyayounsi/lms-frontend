import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { forkJoin, of, catchError, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CourseService } from '../../../shared/service/course/course.service';
import { OrderService, OrderHistoryDto } from '../../../shared/service/order/order.service';
import { resolveCourseImage } from '../../../shared/utils/course-image.util';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import Swal from 'sweetalert2';
import { AuthService } from '../../../shared/service/auth/auth.service';

@Component({
    selector: 'app-student-dashboard',
    templateUrl: './student-dashboard.component.html',
    styleUrl: './student-dashboard.component.scss',
  imports: [CommonModule, RouterLink, FormsModule],
})
export class StudentDashboardComponent implements OnInit, OnDestroy {
  public routes = routes;
  public Math = Math;
  public userAvatarUrl = '';
  private destroy$ = new Subject<void>();

  // ────── User Info ────────────────────────────────────────────
  public userName: string = '';
  public userRole: string = '';
  public studentEmail: string = '';

  get userInitials(): string {
    const parts = (this.userName || 'Student')
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2);
    if (parts.length === 0) return 'ST';
    return parts.map(part => part.charAt(0).toUpperCase()).join('');
  }

  // ────── Stats ────────────────────────────────────────────────
  totalCourses = 0;
  activeCourses = 0;   // progression > 0% et < 100%
  completedCourses = 0; // progression = 100%

  get completionRate(): number {
    if (this.totalCourses <= 0) return 0;
    return Math.round((this.completedCourses / this.totalCourses) * 100);
  }

  get completionRatioLabel(): string {
    return `${this.completedCourses}/${this.totalCourses}`;
  }

  // ────── Data ─────────────────────────────────────────────────
  recentCourses: any[] = [];
  featuredCourse: any | null = null;
  orders: OrderHistoryDto[] = [];
  filteredOrders: OrderHistoryDto[] = [];
  latestOrder: OrderHistoryDto | null = null;
  invoiceOrder: OrderHistoryDto | null = null;
  orderSearch = '';
  ordersLoading = true;
  ordersError = '';
  loading = true;
  totalSpent = 0;
  paidOrders = 0;
  pendingOrders = 0;

  constructor(
    private courseService: CourseService,
    private orderService: OrderService,
    private authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.userName = localStorage.getItem('fullName') || 'Student';
    this.userRole = localStorage.getItem('role') || '';
    this.studentEmail = localStorage.getItem('email') || '';
    this.authService.ensureProfileIdentityLoaded();
    this.userAvatarUrl = this.authService.resolveAvatarUrl(localStorage.getItem('avatarPath'));
    this.authService.currentAvatarPath$.pipe(takeUntil(this.destroy$)).subscribe(path => {
      this.userAvatarUrl = this.authService.resolveAvatarUrl(path);
    });

    this.loadDashboard();
    this.loadOrders();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onAvatarError(): void {
    this.userAvatarUrl = '';
  }

  loadDashboard(): void {
    forkJoin({
      courses: this.courseService.getMyEnrolledCourses().pipe(
        catchError(() => of([]))
      ),
      progress: this.courseService.getMyCourseProgress().pipe(
        catchError(() => of([]))
      )
    }).subscribe({
      next: ({ courses, progress }) => {

        this.totalCourses = courses.length;

        // ────── Construire map courseId → progressionPct ────────
        const progressMap = new Map<number, number>();
        (progress as any[]).forEach(p => {
          progressMap.set(p.courseId, p.completionPercentage ?? 0);
        });

        // ────── Calcul des stats ────────────────────────────────
        this.completedCourses = (progress as any[]).filter(
          p => (p.completionPercentage ?? 0) >= 100
        ).length;

        this.activeCourses = (progress as any[]).filter(p => {
          const pct = p.completionPercentage ?? 0;
          return pct > 0 && pct < 100;
        }).length;

        // ────── Enrichir les cours avec progression ─────────────
        const mappedCourses = courses.slice(0, 6).map((c: any) => ({
          ...c,
          progressPct: Math.round(progressMap.get(c.id) ?? 0)
        }));
        this.recentCourses = mappedCourses;
        this.featuredCourse = mappedCourses.find(c => c.progressPct > 0 && c.progressPct < 100) || mappedCourses[0] || null;

        this.loading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }

  loadOrders(): void {
    this.ordersLoading = true;
    this.ordersError = '';

    this.orderService.getMyOrders().pipe(
      catchError(() => of([]))
    ).subscribe({
      next: (orders: any) => {
        this.orders = Array.isArray(orders)
          ? [...orders].sort((left, right) => this.parseOrderTimestamp(right.purchaseDate) - this.parseOrderTimestamp(left.purchaseDate))
          : [];
        this.latestOrder = this.orders[0] || null;
        this.totalSpent = this.orders.reduce((sum, order) => sum + Number(order.amount || 0), 0);
        this.paidOrders = this.orders.filter(order => (order.status || '').toUpperCase() === 'PAID').length;
        this.pendingOrders = this.orders.filter(order => (order.status || '').toUpperCase() === 'PENDING').length;
        this.applyOrderFilters();
        this.ordersLoading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.orders = [];
        this.filteredOrders = [];
        this.ordersError = 'Impossible de charger vos factures pour le moment.';
        this.ordersLoading = false;
        this.cdr.markForCheck();
      }
    });
  }

  applyOrderFilters(): void {
    const q = this.orderSearch.trim().toLowerCase();
    if (!q) {
      this.filteredOrders = [...this.orders];
      return;
    }

    this.filteredOrders = this.orders.filter(order =>
      String(order.enrollmentId).includes(q) ||
      order.courseTitle?.toLowerCase().includes(q) ||
      order.instructorName?.toLowerCase().includes(q) ||
      order.status?.toLowerCase().includes(q)
    );
  }

  openInvoice(order: OrderHistoryDto): void {
    this.invoiceOrder = order;
  }

  getHeroDescription(): string {
    if (this.featuredCourse) {
      return `Votre prochain objectif: ${this.featuredCourse.title} avec ${this.featuredCourse.progressPct}% déjà parcourus.`;
    }

    if (this.loading) {
      return 'Préparation de votre espace personnalisé...';
    }

    return 'Découvrez un parcours adapté et reprenez là où vous vous êtes arrêté.';
  }

  closeInvoice(): void {
    this.invoiceOrder = null;
  }

  printInvoice(): void {
    const el = document.getElementById('student-invoice-area');
    if (!el) return;
    const original = document.body.innerHTML;
    document.body.innerHTML = el.innerHTML;
    window.print();
    document.body.innerHTML = original;
    window.location.reload();
  }

  getInvoiceStatusClass(status: string): string {
    const normalized = (status || '').toUpperCase();
    if (normalized === 'PAID' || normalized === 'COMPLETED') return 'bg-success';
    if (normalized === 'PENDING') return 'bg-warning text-dark';
    if (normalized === 'FAILED' || normalized === 'REFUNDED') return 'bg-danger';
    return 'bg-secondary';
  }

  getInvoiceStatusLabel(status: string): string {
    const normalized = (status || '').toUpperCase();
    if (normalized === 'PAID') return 'Payé';
    if (normalized === 'COMPLETED') return 'Complété';
    if (normalized === 'PENDING') return 'En attente';
    if (normalized === 'FAILED') return 'Échoué';
    if (normalized === 'REFUNDED') return 'Remboursé';
    return status || '-';
  }

  getOrderStatusClass(status: string): string {
    switch ((status || '').toUpperCase()) {
      case 'PAID': return 'std-badge-paid';
      case 'PENDING': return 'std-badge-pending';
      case 'FAILED': return 'std-badge-failed';
      default: return 'std-badge-pending';
    }
  }

  getOrderStatusLabel(status: string): string {
    switch ((status || '').toUpperCase()) {
      case 'PAID': return 'Paid';
      case 'PENDING': return 'Pending';
      case 'FAILED': return 'Failed';
      default: return status || '-';
    }
  }

  formatOrderDate(dateValue: string): string {
    if (!dateValue) return '-';
    const parsed = new Date(dateValue.replace(' ', 'T'));
    if (Number.isNaN(parsed.getTime())) return dateValue;
    return parsed.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  }

  exportOrders(): void {
    const rows = this.filteredOrders;
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    const today = new Date().toLocaleDateString('fr-FR');
    const fileName = `student-invoices-${new Date().toISOString().slice(0, 10)}.pdf`;
    const total = rows.reduce((sum, order) => sum + Number(order.amount || 0), 0);

    doc.setFontSize(18);
    doc.setTextColor(13, 110, 253);
    doc.text('Student Invoice Report', 14, 16);

    doc.setFontSize(10);
    doc.setTextColor(90, 98, 115);
    doc.text(`Generated for: ${this.userName}`, 14, 23);
    doc.text(`Date: ${today}`, 14, 29);
    doc.text(`Total invoices: ${rows.length}`, 14, 35);

    autoTable(doc, {
      startY: 42,
      head: [[ 'Invoice ID', 'Course', 'Instructor', 'Amount', 'Date', 'Status' ]],
      body: rows.map(order => [
        `INV${order.enrollmentId}`,
        order.courseTitle,
        order.instructorName,
        `${Number(order.amount || 0).toFixed(2)} €`,
        this.formatOrderDate(order.purchaseDate),
        this.getOrderStatusLabel(order.status)
      ]),
      theme: 'grid',
      styles: {
        fontSize: 9,
        cellPadding: 3,
        valign: 'middle'
      },
      headStyles: {
        fillColor: [95, 107, 245],
        textColor: 255,
        fontStyle: 'bold'
      },
      alternateRowStyles: {
        fillColor: [248, 250, 252]
      },
      didDrawPage: (data) => {
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        doc.setFontSize(9);
        doc.setTextColor(107, 114, 128);
        doc.text(`Total amount: ${total.toFixed(2)} €`, 14, pageHeight - 10);
        doc.text(`Page ${doc.getNumberOfPages()}`, pageWidth - 24, pageHeight - 10);
      }
    });

    doc.save(fileName);
  }

  showDashboardTips(): void {
    const focusCourse = this.featuredCourse?.title || 'Aucun cours actif';
    const latestInvoice = this.latestOrder ? `#INV${this.latestOrder.enrollmentId}` : 'Aucune facture';

    Swal.fire({
      title: 'Aperçu rapide',
      html: `
        <div style="text-align:left">
          <div class="mb-2"><strong>Cours en focus :</strong> ${focusCourse}</div>
          <div class="mb-2"><strong>Facture récente :</strong> ${latestInvoice}</div>
          <div class="mb-2"><strong>Cours suivis :</strong> ${this.totalCourses}</div>
          <div class="mb-2"><strong>Terminés :</strong> ${this.completedCourses}</div>
          <div><strong>Factures :</strong> ${this.orders.length}</div>
        </div>
      `,
      icon: 'info',
      showCancelButton: true,
      showDenyButton: true,
      confirmButtonText: this.featuredCourse ? 'Reprendre le cours' : 'Explorer les cours',
      denyButtonText: this.latestOrder ? 'Voir les factures' : 'Fermer',
      cancelButtonText: 'Fermer',
      confirmButtonColor: '#5f6bf5',
      denyButtonColor: '#03C95A',
      customClass: {
        popup: 'sa-swal-popup',
        container: 'sa-swal-container'
      }
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.openFeaturedCourse();
      } else if (result.isDenied && this.latestOrder) {
        this.openInvoice(this.latestOrder);
      }
    });
  }

  openFeaturedCourse(): void {
    if (!this.featuredCourse) {
      this.router.navigate([this.routes.courseListPublic]);
      return;
    }

    this.router.navigate([this.routes.courseWatch], { queryParams: { courseId: this.featuredCourse.id } });
  }

  scrollToInvoices(): void {
    document.querySelector('.std-invoices-table-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  openNotesWorkspace(): void {
    const targetCourse = this.featuredCourse || this.recentCourses[0];

    if (!targetCourse?.id) {
      Swal.fire({
        title: 'Aucun cours actif',
        text: 'Inscrivez-vous à un cours pour prendre des notes par cours ou par leçon.',
        icon: 'info',
        confirmButtonColor: '#5f6bf5'
      });
      this.router.navigate([this.routes.courseListPublic]);
      return;
    }

    this.router.navigate([this.routes.courseWatch], {
      queryParams: { courseId: targetCourse.id }
    });
  }

  private parseOrderTimestamp(dateValue: string): number {
    if (!dateValue) return 0;
    const timestamp = new Date(dateValue.replace(' ', 'T')).getTime();
    return Number.isNaN(timestamp) ? 0 : timestamp;
  }

  /**
   * Résoudre l'URL de l'image du cours
   */
  getImageUrl(path: string): string {
    return resolveCourseImage(path);
  }

  /**
   * Obtenir la classe Bootstrap pour le badge de progression
   */
  getProgressClass(pct: number): string {
    if (pct >= 100) return 'bg-success';
    if (pct >= 50)  return 'bg-primary';
    if (pct > 0)    return 'bg-warning';
    return 'bg-secondary';
  }

  /**
   * Afficher une notification douce pour continuer un cours
   */
  showContinueCourseAlert(courseName: string, courseId: number): void {
    if (typeof Swal === 'undefined') return;
    
    Swal.fire({
      title: 'Continue Learning?',
      html: `<p>Ready to continue <strong>${courseName}</strong>?</p>`,
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: '📚 Let\'s Go!',
      cancelButtonText: 'Later',
      confirmButtonColor: '#5625E8',
      cancelButtonColor: '#888',
      customClass: {
        popup: 'sa-swal-popup',
        container: 'sa-swal-container'
      }
    }).then((result: any) => {
      if (result.isConfirmed) {
        // Navigation handled by button click
      }
    });
  }

  /**
   * Congratulations pour cours complété
   */
  showCongratulations(courseName: string): void {
    if (typeof Swal === 'undefined') return;

    Swal.fire({
      title: '🎉 Congratulations!',
      html: `<p>You have successfully completed <strong>${courseName}</strong>!</p><p class="mt-2">Great achievement! Keep learning! 💪</p>`,
      icon: 'success',
      confirmButtonText: 'Awesome!',
      confirmButtonColor: '#03C95A',
      customClass: {
        popup: 'sa-swal-popup',
        container: 'sa-swal-container'
      }
    });
  }
}

