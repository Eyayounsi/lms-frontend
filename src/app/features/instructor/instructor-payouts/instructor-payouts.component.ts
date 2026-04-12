/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexPlotOptions,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { InstructorRevenueService, InstructorRevenueDto, PayoutDto } from '../../../shared/service/revenue/instructor-revenue.service';

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  dataLabels: ApexDataLabels | any;
  plotOptions: ApexPlotOptions | any;
  xaxis: ApexXAxis | any;
  colors: ApexXAxis | any;
};

@Component({
  selector: 'app-instructor-payouts',
  imports: [CommonModule, FormsModule, NgApexchartsModule],
  templateUrl: './instructor-payouts.component.html',
  styleUrl: './instructor-payouts.component.scss'
})
export class InstructorPayoutsComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;
  public earningChart: Partial<ChartOptions> | any;

  revenue: InstructorRevenueDto | null = null;
  filteredByCourse: InstructorRevenueDto['byCourse'] = [];
  searchValue = '';
  availableBalance: number = 0;
  payouts: PayoutDto[] = [];
  loading = false;
  requesting = false;
  showRequestModal = false;
  invoicePayout: PayoutDto | null = null;

  constructor(
    private revenueService: InstructorRevenueService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): void {
    this.loading = true;
    this.revenueService.getMyRevenueDashboard().subscribe({
      next: (data) => {
        this.revenue = data;
        this.filteredByCourse = [...(data.byCourse || [])];
        this.buildChart(data.byCourse || []);
        this.loading = false;
      },
      error: () => {
        this.buildChart([]);
        this.loading = false;
        this.toastr.error('Impossible de charger les données');
      }
    });
    this.revenueService.getAvailableBalance().subscribe({
      next: (data) => { this.availableBalance = data.availableBalance; }
    });
    this.revenueService.getMyPayouts().subscribe({
      next: (data) => { this.payouts = data; }
    });
  }

  searchData(value: string): void {
    this.searchValue = value;
    if (!this.revenue) {
      this.filteredByCourse = [];
      return;
    }

    const term = value.trim().toLowerCase();
    this.filteredByCourse = term
      ? (this.revenue.byCourse || []).filter((c) => c.courseTitle.toLowerCase().includes(term))
      : [...(this.revenue.byCourse || [])];
  }

  get totalRevenueValue(): number {
    return this.toSafeNumber(this.revenue?.totalRevenue);
  }

  get monthlyRevenueValue(): number {
    return this.toSafeNumber(this.revenue?.monthlyRevenue);
  }

  get totalSalesValue(): number {
    return this.toSafeNumber(this.revenue?.totalSales);
  }

  get avgTicket(): number {
    const sales = this.totalSalesValue;
    const revenue = this.totalRevenueValue;
    if (sales <= 0 || revenue <= 0) return 0;
    return revenue / sales;
  }

  get topCourseTitle(): string {
    const first = [...(this.revenue?.byCourse || [])]
      .sort((a, b) => this.toSafeNumber(b.instructorRevenue) - this.toSafeNumber(a.instructorRevenue))[0];
    return first?.courseTitle || 'Aucun cours';
  }

  get topCourseRevenue(): number {
    const first = [...(this.revenue?.byCourse || [])]
      .sort((a, b) => this.toSafeNumber(b.instructorRevenue) - this.toSafeNumber(a.instructorRevenue))[0];
    return this.toSafeNumber(first?.instructorRevenue);
  }

  buildChart(byCourse: InstructorRevenueDto['byCourse']): void {
    const sorted = [...(byCourse || [])]
      .sort((a, b) => this.toSafeNumber(b.instructorRevenue) - this.toSafeNumber(a.instructorRevenue))
      .slice(0, 8);

    const labels = sorted.map(c =>
      c.courseTitle.length > 20 ? c.courseTitle.substring(0, 20) + '...' : c.courseTitle
    );
    const values = sorted.map(c => Number(this.toSafeNumber(c.instructorRevenue).toFixed(2)));
    const chartLabels = labels.length > 0 ? labels : ['Aucun cours'];
    const chartValues = values.length > 0 ? values : [0];

    this.earningChart = {
      series: [{ name: 'Revenu (€)', data: chartValues }],
      chart: { height: 300, type: 'bar', toolbar: { show: false } },
      colors: ['#4b55dc'],
      dataLabels: { enabled: false },
      plotOptions: { bar: { borderRadius: 6, horizontal: false, columnWidth: '48%' } },
      xaxis: {
        categories: chartLabels,
        labels: {
          rotate: -25,
          trim: true,
          hideOverlappingLabels: true
        }
      },
      yaxis: { labels: { formatter: (val: any) => val + ' €' } },
      grid: { borderColor: '#eef2f7', strokeDashArray: 4 },
      tooltip: { y: { formatter: (val: any) => val + ' €' } }
    };
  }

  private toSafeNumber(value: unknown): number {
    const n = Number(value);
    return Number.isFinite(n) ? n : 0;
  }

  openRequestModal(): void { this.showRequestModal = true; }
  cancelRequest(): void { this.showRequestModal = false; }

  confirmRequest(): void {
    this.requesting = true;
    this.revenueService.requestPayout().subscribe({
      next: (payout) => {
        this.requesting = false;
        this.showRequestModal = false;
        this.payouts.unshift(payout);
        this.availableBalance = 0;
        this.toastr.success('Demande de virement envoyée, l\'admin la traitera prochainement');
      },
      error: (err) => {
        this.requesting = false;
        const msg = err?.error?.error || err?.error || 'Erreur lors de la demande';
        this.toastr.error(msg);
      }
    });
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'PAID':     return 'badge bg-success';
      case 'REJECTED': return 'badge bg-danger';
      default:         return 'badge bg-warning text-dark';
    }
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'PAID':     return 'Payé';
      case 'REJECTED': return 'Rejeté';
      default:         return 'En attente';
    }
  }

  openInvoice(p: PayoutDto): void { this.invoicePayout = p; }
  closeInvoice(): void { this.invoicePayout = null; }

  printInvoice(): void {
    const el = document.getElementById('instructor-invoice-area');
    if (!el) return;
    const original = document.body.innerHTML;
    document.body.innerHTML = el.innerHTML;
    window.print();
    document.body.innerHTML = original;
    window.location.reload();
  }
}
