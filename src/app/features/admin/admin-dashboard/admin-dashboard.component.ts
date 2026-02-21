import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { routes } from '../../../shared/service/routes/routes';
import { SuperAdminApiService, DashboardStats } from '../../superadmin/services/superadmin-api.service';

@Component({
    selector: 'app-admin-dashboard',
    templateUrl: './admin-dashboard.component.html',
    styleUrl: './admin-dashboard.component.scss',
    standalone: true,
    imports: [CommonModule, RouterLink, NgApexchartsModule]
})
export class AdminDashboardComponent implements OnInit {
    public routes = routes;
    public userName: string = '';
    public userRole: string = '';

    stats: DashboardStats | null = null;
    loading = true;
    newThisMonth = 0;

    // ─── Donut Chart ──────────────────────────────────────────────────────────
    donutSeries: number[] = [];
    donutOptions: any = {
        chart: { type: 'donut', height: 260, animations: { enabled: true } },
        labels: ['Actifs', 'Bloqués'],
        colors: ['#22c55e', '#ef4444'],
        legend: { position: 'bottom' },
        dataLabels: { enabled: true, formatter: (val: number) => `${val.toFixed(1)}%` },
        plotOptions: { pie: { donut: { size: '65%', labels: { show: true,
            total: { show: true, label: 'Total', fontSize: '14px', fontWeight: '700' }
        }}}},
        tooltip: { y: { formatter: (val: number) => `${val} utilisateur(s)` } }
    };

    // ─── Bar Chart ────────────────────────────────────────────────────────────
    barSeries: any[] = [];
    barOptions: any = {
        chart: { type: 'bar', height: 260, toolbar: { show: false } },
        plotOptions: { bar: { borderRadius: 5, columnWidth: '55%', distributed: true } },
        colors: ['#6366f1', '#22c55e', '#ef4444', '#f59e0b', '#8b5cf6'],
        dataLabels: { enabled: true, style: { fontWeight: 'bold', fontSize: '11px' } },
        xaxis: { categories: [] },
        yaxis: { title: { text: 'Utilisateurs' } },
        grid: { borderColor: '#f1f5f9', strokeDashArray: 4 },
        legend: { show: false },
        tooltip: { y: { formatter: (val: number) => `${val} utilisateur(s)` } }
    };

    // ─── Line Chart ───────────────────────────────────────────────────────────
    lineSeries: any[] = [];
    lineOptions: any = {
        chart: { type: 'area', height: 240, toolbar: { show: false } },
        colors: ['#ef4444'],
        fill: { type: 'gradient', gradient: { opacityFrom: 0.5, opacityTo: 0.05 } },
        stroke: { curve: 'smooth', width: 3 },
        markers: { size: 4, colors: ['#ef4444'], strokeColors: '#fff', strokeWidth: 2 },
        xaxis: { categories: [], labels: { rotate: -40, style: { fontSize: '10px' } } },
        yaxis: { min: 0, labels: { formatter: (v: number) => Math.round(v).toString() } },
        grid: { borderColor: '#f1f5f9', strokeDashArray: 4 },
        dataLabels: { enabled: false },
        tooltip: { y: { formatter: (val: number) => `${val} inscription(s)` } }
    };

    constructor(
        private superAdminApi: SuperAdminApiService,
        private cdr: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        this.userName = localStorage.getItem('fullName') || 'Administrateur';
        this.userRole = localStorage.getItem('role') || '';
        this.loadStats();
    }

    loadStats(): void {
        this.loading = true;
        this.superAdminApi.getAdminStats().subscribe({
            next: (data) => {
                this.stats = data;
                this.buildCharts(data);
                this.loading = false;
                this.cdr.detectChanges();
            },
            error: () => { this.loading = false; }
        });
    }

    buildCharts(data: DashboardStats): void {
        this.donutSeries = [data.activeUsers ?? 0, data.blockedUsers ?? 0];

        const roleLabels: Record<string, string> = {
            STUDENT: 'Étudiants', INSTRUCTOR: 'Instruct.',
            ADMIN: 'Admins', RECRUITER: 'Recruteurs', SUPERADMIN: 'SuperAdmin'
        };
        const roles = Object.keys(data.usersByRole ?? {});
        this.barSeries = [{ name: 'Utilisateurs', data: roles.map(r => data.usersByRole[r] ?? 0) }];
        this.barOptions = { ...this.barOptions,
            xaxis: { ...this.barOptions.xaxis, categories: roles.map(r => roleLabels[r] || r) }
        };

        const months = Object.keys(data.registrationsByMonth ?? {});
        const now = new Date();
        const currentKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
        this.newThisMonth = data.registrationsByMonth?.[currentKey] ?? 0;
        this.lineSeries = [{ name: 'Inscriptions', data: months.map(m => data.registrationsByMonth[m] ?? 0) }];
        this.lineOptions = { ...this.lineOptions,
            xaxis: { ...this.lineOptions.xaxis,
                categories: months.map(m => {
                    const [y, mo] = m.split('-');
                    return new Date(parseInt(y), parseInt(mo) - 1)
                        .toLocaleDateString('fr-FR', { month: 'short', year: '2-digit' });
                })
            }
        };
    }

    getRoleColor(role: string): string {
        const colors: Record<string, string> = {
            STUDENT: '#6366f1', INSTRUCTOR: '#22c55e',
            ADMIN: '#ef4444', RECRUITER: '#f59e0b', SUPERADMIN: '#8b5cf6'
        };
        return colors[role] || '#6b7280';
    }

    getRoleLabel(role: string): string {
        const labels: Record<string, string> = {
            STUDENT: 'Étudiants', INSTRUCTOR: 'Instructeurs',
            ADMIN: 'Admins', RECRUITER: 'Recruteurs', SUPERADMIN: 'Super Admins'
        };
        return labels[role] || role;
    }
}

