import {
  Component, OnInit, ViewChild, ChangeDetectorRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ApexNonAxisChartSeries, ApexChart, ApexTitleSubtitle, ApexDataLabels,
  ApexFill, ApexLegend, ApexTooltip, ApexPlotOptions, ApexResponsive,
  ApexAxisChartSeries, ApexXAxis, ApexYAxis, ApexGrid, ApexStroke, ApexMarkers,
  ChartComponent
} from 'ng-apexcharts';
import { SuperAdminApiService, DashboardStats } from '../services/superadmin-api.service';
import { routes } from '../../../shared/service/routes/routes';

@Component({
  selector: 'app-superadmin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, NgApexchartsModule],
  templateUrl: './superadmin-dashboard.component.html',
  styleUrls: ['./superadmin-dashboard.component.scss']
})
export class SuperadminDashboardComponent implements OnInit {

  @ViewChild('donutChart') donutChart!: ChartComponent;
  @ViewChild('barChart') barChart!: ChartComponent;
  @ViewChild('lineChart') lineChart!: ChartComponent;

  public routes = routes;
  public userName = localStorage.getItem('fullName') || 'Super Administrateur';

  // Stats brutes
  stats: DashboardStats | null = null;
  loading = true;
  newThisMonth = 0;

  // ─── Donut : Actifs vs Bloqués ────────────────────────────────────────────
  donutSeries: ApexNonAxisChartSeries = [];
  donutOptions: any = {
    chart: { type: 'donut', height: 280, animations: { enabled: true } },
    labels: ['Actifs', 'Bloqués'],
    colors: ['#22c55e', '#ef4444'],
    legend: { position: 'bottom' },
    dataLabels: { enabled: true, formatter: (val: number) => `${val.toFixed(1)}%` },
    plotOptions: { pie: { donut: { size: '65%', labels: { show: true,
      total: { show: true, label: 'Total', fontSize: '16px', fontWeight: '700', color: '#374151' }
    }}}},
    tooltip: { y: { formatter: (val: number) => `${val} utilisateur(s)` } },
    responsive: [{ breakpoint: 480, options: { chart: { width: 220 }, legend: { position: 'bottom' } } }]
  };

  // ─── Bar : Utilisateurs par rôle ─────────────────────────────────────────
  barSeries: ApexAxisChartSeries = [];
  barOptions: any = {
    chart: { type: 'bar', height: 300, toolbar: { show: false },
      animations: { enabled: true, easing: 'easeinout', speed: 600 }
    },
    plotOptions: { bar: { borderRadius: 6, columnWidth: '50%', distributed: true } },
    colors: ['#6366f1', '#22c55e', '#ef4444', '#f59e0b', '#8b5cf6'],
    dataLabels: { enabled: true, style: { fontWeight: 'bold' } },
    xaxis: { categories: [], labels: { style: { fontWeight: '600', fontSize: '12px' } } },
    yaxis: { title: { text: 'Nombre d\'utilisateurs', style: { fontWeight: '600' } } },
    grid: { borderColor: '#f1f5f9', strokeDashArray: 4 },
    tooltip: { y: { formatter: (val: number) => `${val} utilisateur(s)` } },
    legend: { show: false }
  };

  // ─── Line : Inscriptions par mois ────────────────────────────────────────
  lineSeries: ApexAxisChartSeries = [];
  lineOptions: any = {
    chart: { type: 'area', height: 280, toolbar: { show: false },
      animations: { enabled: true, easing: 'linear', speed: 800 }
    },
    colors: ['#f59e0b'],
    fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.55, opacityTo: 0.05, stops: [0, 90, 100] } },
    stroke: { curve: 'smooth', width: 3 },
    markers: { size: 5, colors: ['#f59e0b'], strokeColors: '#fff', strokeWidth: 2, hover: { size: 7 } },
    xaxis: { categories: [], labels: { rotate: -45, style: { fontSize: '11px' } } },
    yaxis: { min: 0, labels: { formatter: (v: number) => Math.round(v).toString() } },
    grid: { borderColor: '#f1f5f9', strokeDashArray: 4 },
    tooltip: { x: { show: true }, y: { formatter: (val: number) => `${val} inscription(s)` } },
    dataLabels: { enabled: false }
  };

  constructor(
    private superAdminApi: SuperAdminApiService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadStats();
  }

  loadStats(): void {
    this.loading = true;
    this.superAdminApi.getSuperStats().subscribe({
      next: (data: DashboardStats) => {
        this.stats = data;
        this.buildCharts(data);
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => { this.loading = false; }
    });
  }

  buildCharts(data: DashboardStats): void {
    // Donut
    this.donutSeries = [data.activeUsers ?? 0, data.blockedUsers ?? 0];

    // Bar
    const roleLabels: Record<string, string> = {
      STUDENT: 'Étudiants', INSTRUCTOR: 'Instructeurs',
      ADMIN: 'Admins', RECRUITER: 'Recruteurs', SUPERADMIN: 'SuperAdmin'
    };
    const roles = Object.keys(data.usersByRole ?? {});
    const roleValues = roles.map(r => data.usersByRole[r] ?? 0);
    this.barSeries = [{ name: 'Utilisateurs', data: roleValues }];
    this.barOptions = { ...this.barOptions,
      xaxis: { ...this.barOptions.xaxis, categories: roles.map(r => roleLabels[r] || r) }
    };

    // Line
    const months = Object.keys(data.registrationsByMonth ?? {});
    const monthValues = months.map(m => data.registrationsByMonth[m] ?? 0);

    // Calculer les inscriptions ce mois-ci pour la carte
    const now = new Date();
    const currentKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    this.newThisMonth = data.registrationsByMonth?.[currentKey] ?? 0;

    this.lineSeries = [{ name: 'Inscriptions', data: monthValues }];
    this.lineOptions = { ...this.lineOptions,
      xaxis: { ...this.lineOptions.xaxis,
        categories: months.map(m => {
          const [year, month] = m.split('-');
          return new Date(parseInt(year), parseInt(month) - 1).toLocaleDateString('fr-FR', { month: 'short', year: '2-digit' });
        })
      }
    };
  }

  getRoleIcon(role: string): string {
    const icons: Record<string, string> = {
      STUDENT: 'ti ti-school', INSTRUCTOR: 'ti ti-chalkboard',
      ADMIN: 'ti ti-shield', RECRUITER: 'ti ti-briefcase', SUPERADMIN: 'ti ti-crown'
    };
    return icons[role] || 'ti ti-user';
  }

  getRoleLabel(role: string): string {
    const labels: Record<string, string> = {
      STUDENT: 'Étudiants', INSTRUCTOR: 'Instructeurs',
      ADMIN: 'Admins', RECRUITER: 'Recruteurs', SUPERADMIN: 'Super Admins'
    };
    return labels[role] || role;
  }

  getRoleColor(role: string): string {
    const colors: Record<string, string> = {
      STUDENT: '#6366f1', INSTRUCTOR: '#22c55e',
      ADMIN: '#ef4444', RECRUITER: '#f59e0b', SUPERADMIN: '#8b5cf6'
    };
    return colors[role] || '#6b7280';
  }
}
