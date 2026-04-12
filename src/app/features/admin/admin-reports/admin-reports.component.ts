import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import Swal from 'sweetalert2';
import {
  AdminReportsService,
  ReportsOverview,
  RevenueStats,
  CourseStats,
  UserStats
} from '../services/admin-reports.service';

@Component({
  selector: 'app-admin-reports',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './admin-reports.component.html',
  styleUrls: ['./admin-reports.component.scss']
})
export class AdminReportsComponent implements OnInit {
  overview: ReportsOverview | null = null;
  courseStats: CourseStats | null = null;
  loading = true;

  // ─── Revenue chart (area) ─────────────────────────────────────────
  revenueSeries: any[] = [];
  revenueOptions: any = {
    chart:  { type: 'area', height: 260, toolbar: { show: false } },
    colors: ['#6366f1', '#22c55e'],
    fill:   { type: 'gradient', gradient: { opacityFrom: 0.4, opacityTo: 0.05 } },
    stroke: { curve: 'smooth', width: 2 },
    markers: { size: 4, strokeColors: '#fff', strokeWidth: 2 },
    xaxis: { categories: [], labels: { rotate: -40, style: { fontSize: '10px' } } },
    yaxis: { labels: { formatter: (v: number) => `${v.toFixed(0)} €` } },
    grid:  { borderColor: '#f1f5f9', strokeDashArray: 4 },
    dataLabels: { enabled: false },
    legend: { position: 'top' },
    tooltip: { y: { formatter: (v: number) => `${v.toFixed(2)} €` } }
  };

  // ─── User registrations chart (bar) ──────────────────────────────
  userSeries: any[] = [];
  userChartOptions: any = {
    chart: { type: 'bar', height: 240, toolbar: { show: false } },
    plotOptions: { bar: { borderRadius: 4, columnWidth: '55%', distributed: false } },
    colors: ['#6366f1'],
    dataLabels: { enabled: false },
    xaxis: { categories: [] },
    yaxis: { title: { text: 'Inscriptions' } },
    grid: { borderColor: '#f1f5f9', strokeDashArray: 4 },
    tooltip: { y: { formatter: (val: number) => `${val} utilisateur(s)` } }
  };

  // ─── Courses by status (donut) ────────────────────────────────────
  courseDonutSeries: number[] = [];
  courseDonutOptions: any = {
    chart:  { type: 'donut', height: 240, animations: { enabled: true } },
    labels: ['Brouillon', 'En attente', 'Publié', 'Rejeté'],
    colors: ['#94a3b8', '#f59e0b', '#22c55e', '#ef4444'],
    legend: { position: 'bottom' },
    dataLabels: { enabled: true, formatter: (val: number) => `${val.toFixed(1)}%` },
    plotOptions: { pie: { donut: { size: '65%', labels: { show: true,
      total: { show: true, label: 'Total', fontSize: '14px', fontWeight: '700' }
    }}}}
  };

  chartsReady = false;

  constructor(private reportsService: AdminReportsService) {}

  ngOnInit(): void { this.loadAll(); }

  loadAll(): void {
    this.loading = true;
    let pending = 4;
    const done = () => { if (--pending === 0) { this.loading = false; this.chartsReady = true; } };

    this.reportsService.getOverview().subscribe({
      next: d => { this.overview = d; done(); },
      error: () => done()
    });

    this.reportsService.getRevenue().subscribe({
      next: (d: RevenueStats) => {
        this.revenueSeries = [
          { name: 'Revenus (€)', data: d.revenue },
          { name: 'Ventes',      data: d.sales }
        ];
        this.revenueOptions = {
          ...this.revenueOptions,
          xaxis: { ...this.revenueOptions.xaxis, categories: d.labels }
        };
        done();
      },
      error: () => done()
    });

    this.reportsService.getCourseStats().subscribe({
      next: (d: CourseStats) => {
        this.courseStats = d;
        this.courseDonutSeries = [
          d.byStatus.DRAFT, d.byStatus.PENDING, d.byStatus.PUBLISHED, d.byStatus.REJECTED
        ];
        done();
      },
      error: () => done()
    });

    this.reportsService.getUserStats().subscribe({
      next: (d: UserStats) => {
        this.userSeries = [{ name: 'Inscriptions', data: d.registrations }];
        this.userChartOptions = {
          ...this.userChartOptions,
          xaxis: { ...this.userChartOptions.xaxis, categories: d.labels }
        };
        done();
      },
      error: () => { this.showToast('error', 'Erreur lors du chargement des inscriptions.'); done(); }
    });
  }

  private showToast(type: 'success' | 'error', msg: string): void {
    const Toast = Swal.mixin({
      toast: true, position: 'top-end',
      showConfirmButton: false, timer: 3500, timerProgressBar: true
    });
    Toast.fire({ icon: type, title: msg });
  }
}
