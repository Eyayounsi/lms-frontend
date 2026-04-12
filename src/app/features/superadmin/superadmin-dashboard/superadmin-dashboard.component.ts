import {
  Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef
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
import Swal from 'sweetalert2';

@Component({
  selector: 'app-superadmin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, NgApexchartsModule],
  templateUrl: './superadmin-dashboard.component.html',
  styleUrls: ['./superadmin-dashboard.component.scss']
})
export class SuperadminDashboardComponent implements OnInit, OnDestroy {

  @ViewChild('donutChart') donutChart!: ChartComponent;
  @ViewChild('barChart') barChart!: ChartComponent;
  @ViewChild('lineChart') lineChart!: ChartComponent;

  public routes = routes;
  public userName = localStorage.getItem('fullName') || 'Super Administrateur';

  // Stats brutes
  stats: DashboardStats | null = null;
  loading = true;
  newThisMonth = 0;
  lastUpdated: string | null = null;
  currentTime = '';
  private clockInterval: any;

  // ─── Computed getters ─────────────────────────────────────────────────────
  get userHeroInitials(): string {
    return this.userName.trim().split(/\s+/).map(w => w.charAt(0).toUpperCase()).join('').slice(0, 2) || 'SA';
  }

  get activeRate(): number {
    if (!this.stats || this.stats.totalUsers === 0) return 0;
    return Math.round((this.stats.activeUsers / this.stats.totalUsers) * 100);
  }

  get blockedRate(): number {
    if (!this.stats || this.stats.totalUsers === 0) return 0;
    return Math.round((this.stats.blockedUsers / this.stats.totalUsers) * 100);
  }

  get platformHealth(): 'Excellente' | 'Bonne' | 'Critique' {
    const r = this.activeRate;
    if (r >= 85) return 'Excellente';
    if (r >= 60) return 'Bonne';
    return 'Critique';
  }

  get healthColor(): string {
    const h = this.platformHealth;
    if (h === 'Excellente') return '#22c55e';
    if (h === 'Bonne') return '#f59e0b';
    return '#ef4444';
  }

  get roleEntries(): { role: string; count: number; percent: number }[] {
    if (!this.stats?.usersByRole) return [];
    const total = Object.values(this.stats.usersByRole).reduce((a, b) => a + b, 0);
    return Object.entries(this.stats.usersByRole)
      .map(([role, count]) => ({
        role,
        count,
        percent: total > 0 ? Math.round((count / total) * 100) : 0
      }))
      .sort((a, b) => b.count - a.count);
  }

  // ─── Donut : Actifs vs Bloqués ────────────────────────────────────────────
  donutSeries: ApexNonAxisChartSeries = [];
  donutOptions: any = {
    chart: { type: 'donut', height: 260, fontFamily: 'inherit', animations: { enabled: true, speed: 800 } },
    labels: ['Actifs', 'Bloqués'],
    colors: ['#38bdf8', '#7c3aed'],
    legend: { position: 'bottom', fontFamily: 'inherit', fontSize: '13px', labels: { colors: '#64748b' } },
    dataLabels: { enabled: true, formatter: (val: number) => `${val.toFixed(1)}%`, style: { fontSize: '11px', fontWeight: '600' } },
    plotOptions: { pie: { donut: { size: '68%', labels: { show: true,
      name: { show: true, fontSize: '13px', fontWeight: '600', color: '#64748b' },
      value: { show: true, fontSize: '28px', fontWeight: '800', color: '#0f172a',
        formatter: (val: string) => parseInt(val).toString() },
      total: { show: true, label: 'Total', fontSize: '13px', fontWeight: '700', color: '#475569',
        formatter: (w: any) => w.globals.seriesTotals.reduce((a: number, b: number) => a + b, 0).toString()
      }
    }}}},
    tooltip: { y: { formatter: (val: number) => `${val} utilisateur(s)` } },
    responsive: [{ breakpoint: 480, options: { chart: { width: 220 }, legend: { position: 'bottom' } } }]
  };

  // ─── Bar : Utilisateurs par rôle ─────────────────────────────────────────
  barSeries: ApexAxisChartSeries = [];
  barOptions: any = {
    chart: { type: 'bar', height: 290, fontFamily: 'inherit', toolbar: { show: false },
      animations: { enabled: true, easing: 'easeinout', speed: 700 }
    },
    plotOptions: { bar: { borderRadius: 8, columnWidth: '52%', distributed: true,
      dataLabels: { position: 'top' }
    }},
    colors: ['#5625E8', '#7c3aed', '#392C7D', '#0DCAF0', '#020c18'],
    dataLabels: { enabled: true, offsetY: -18,
      style: { fontWeight: '700', fontSize: '12px', colors: ['#374151'] }
    },
    xaxis: { categories: [], labels: { style: { fontWeight: '600', fontSize: '12px', colors: '#6b7280' } } },
    yaxis: { title: { text: 'Utilisateurs', style: { fontWeight: '600', color: '#6b7280' } }, min: 0 },
    grid: { borderColor: '#EEF0FF', strokeDashArray: 4, padding: { top: 20 } },
    tooltip: { y: { formatter: (val: number) => `${val} utilisateur(s)` } },
    legend: { show: false }
  };

  // ─── Line : Inscriptions par mois ────────────────────────────────────────
  lineSeries: ApexAxisChartSeries = [];
  lineOptions: any = {
    chart: { type: 'area', height: 270, toolbar: { show: false },
      animations: { enabled: true, easing: 'linear', speed: 900 }
    },
    colors: ['#5625E8'],
    fill: { type: 'gradient', gradient: {
      shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.02, stops: [0, 90, 100],
      colorStops: [{ offset: 0, color: '#5625E8', opacity: 0.4 }, { offset: 100, color: '#0DCAF0', opacity: 0.02 }]
    }},
    stroke: { curve: 'smooth', width: 2.5 },
    markers: { size: 5, colors: ['#fff'], strokeColors: '#5625E8', strokeWidth: 2.5, hover: { size: 7 } },
    xaxis: { categories: [], labels: { rotate: -40, style: { fontSize: '11px', colors: '#6b7280' } },
      axisBorder: { show: false }, axisTicks: { show: false }
    },
    yaxis: { min: 0, labels: { formatter: (v: number) => Math.round(v).toString(), style: { colors: '#6b7280' } } },
    grid: { borderColor: '#EEF0FF', strokeDashArray: 4, padding: { top: 5, bottom: 5 } },
    tooltip: { x: { show: true }, y: { formatter: (val: number) => `${val} inscription(s)` }, theme: 'light' },
    dataLabels: { enabled: false }
  };

  constructor(
    private superAdminApi: SuperAdminApiService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadStats();
    this.startClock();
  }

  ngOnDestroy(): void {
    if (this.clockInterval) clearInterval(this.clockInterval);
  }

  startClock(): void {
    const update = () => {
      const now = new Date();
      this.currentTime = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    };
    update();
    this.clockInterval = setInterval(update, 1000);
  }

  loadStats(): void {
    this.loading = true;
    this.superAdminApi.getSuperStats().subscribe({
      next: (data: DashboardStats) => {
        this.stats = data;
        this.buildCharts(data);
        this.loading = false;
        this.lastUpdated = new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
        this.cdr.detectChanges();
        Swal.fire({
          toast: true, position: 'bottom-end', icon: 'success',
          title: 'Statistiques actualisées', showConfirmButton: false,
          timer: 2500, timerProgressBar: true,
          background: '#f8faff', color: '#1e293b', iconColor: '#38bdf8'
        });
      },
      error: () => { this.loading = false; }
    });
  }

  confirmRefresh(): void {
    Swal.fire({
      title: 'Actualiser les statistiques ?',
      html: '<p style="color:#6b7280;margin:0">Les données seront rechargées depuis le serveur.</p>',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#5625E8',
      cancelButtonColor: '#9b59b6',
      cancelButtonText: 'Annuler',
      confirmButtonText: '<i class="ti ti-refresh"></i>&nbsp;Actualiser',
      timer: 10000,
      timerProgressBar: true,
    }).then(result => {
      if (result.isConfirmed || result.dismiss === Swal.DismissReason.timer) {
        this.loadStats();
      }
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
      ADMIN: 'ti ti-shield', RECRUITER: 'ti ti-briefcase', SUPERADMIN: 'ti ti-shield-bolt'
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
      STUDENT: '#5625E8', INSTRUCTOR: '#38bdf8',
      ADMIN: '#9b59b6', RECRUITER: '#0DCAF0', SUPERADMIN: '#392C7D'
    };
    return colors[role] || '#6b7280';
  }
}
