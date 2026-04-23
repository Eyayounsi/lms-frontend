import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { routes } from '../../../shared/service/routes/routes';
import { forkJoin } from 'rxjs';
import {
    AdminReportsService,
    CourseStats,
    ReportsOverview,
    RevenueStats,
    UserStats
} from '../services/admin-reports.service';

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

    get userHeroInitials(): string {
        if (!this.userName) return 'AD';
        return this.userName.split(' ').map(p => p.charAt(0)).join('').toUpperCase().slice(0, 2);
    }

    overview:    ReportsOverview | null = null;
    userStats:   UserStats | null = null;
    courseStats: CourseStats | null = null;
    loading = true;

    // ─── Donut Chart ──────────────────────────────────────────────────────────
    // ─── Revenue Chart (area) ─────────────────────────────────────────────────
    revenueSeries: any[] = [];
    revenueOptions: any = {
        chart: { type: 'area', height: 260, toolbar: { show: false } },
        colors: ['#5625E8', '#03C95A'],
        fill: { type: 'gradient', gradient: { opacityFrom: 0.4, opacityTo: 0.05 } },
        stroke: { curve: 'smooth', width: 2 },
        markers: { size: 4, strokeColors: '#fff', strokeWidth: 2 },
        xaxis: { categories: [], labels: { rotate: -40, style: { fontSize: '10px' } } },
        yaxis: { labels: { formatter: (v: number) => `${v.toFixed(0)} €` } },
        grid: { borderColor: '#f1f5f9', strokeDashArray: 4 },
        dataLabels: { enabled: false },
        legend: { position: 'top' },
        tooltip: { y: { formatter: (v: number) => `${v.toFixed(2)} €` } }
    };

    // ─── Bar Chart ────────────────────────────────────────────────────────────
    barSeries: any[] = [];
    barOptions: any = {
        chart: { type: 'bar', height: 260, toolbar: { show: false } },
        plotOptions: { bar: { borderRadius: 5, columnWidth: '55%', distributed: true } },
        colors: ['#5625E8', '#03C95A', '#9b59b6', '#FFC107', '#02a8b5'],
        dataLabels: { enabled: true, style: { fontWeight: 'bold', fontSize: '11px' } },
        xaxis: { categories: [] },
        yaxis: { title: { text: 'Utilisateurs' } },
        grid: { borderColor: '#f1f5f9', strokeDashArray: 4 },
        legend: { show: false },
        tooltip: { y: { formatter: (val: number) => `${val} utilisateur(s)` } }
    };

    // ─── Donut Chart (cours par statut) ──────────────────────────────────────
    courseDonutSeries: number[] = [];
    courseDonutOptions: any = {
        chart: { type: 'donut', height: 220, animations: { enabled: true } },
        labels: ['Brouillon', 'En attente', 'Publié', 'Rejeté'],
        colors: ['#94a3b8', '#FFC107', '#03C95A', '#5625E8'],
        legend: { position: 'bottom', fontSize: '11px' },
        dataLabels: { enabled: true, formatter: (val: number) => `${val.toFixed(0)}%` },
        plotOptions: { pie: { donut: { size: '65%', labels: { show: true,
            total: { show: true, label: 'Total', fontSize: '13px', fontWeight: '700' }
        }}}}
    };

    // ─── Line Chart ───────────────────────────────────────────────────────────
    lineSeries: any[] = [];
    lineOptions: any = {
        chart: { type: 'area', height: 240, toolbar: { show: false } },
        colors: ['#5625E8'],
        fill: { type: 'gradient', gradient: { opacityFrom: 0.5, opacityTo: 0.05 } },
        stroke: { curve: 'smooth', width: 3 },
        markers: { size: 4, colors: ['#5625E8'], strokeColors: '#fff', strokeWidth: 2 },
        xaxis: { categories: [], labels: { rotate: -40, style: { fontSize: '10px' } } },
        yaxis: { min: 0, labels: { formatter: (v: number) => Math.round(v).toString() } },
        grid: { borderColor: '#f1f5f9', strokeDashArray: 4 },
        dataLabels: { enabled: false },
        tooltip: { y: { formatter: (val: number) => `${val} inscription(s)` } }
    };

    constructor(
        private reportsService: AdminReportsService,
        private cdr: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        this.userName = localStorage.getItem('fullName') || 'Administrateur';
        this.userRole = localStorage.getItem('role') || '';
        this.loadStats();
    }

    loadStats(): void {
        this.loading = true;
        forkJoin({
            overview:    this.reportsService.getOverview(),
            userStats:   this.reportsService.getUserStats(),
            revenue:     this.reportsService.getRevenue(),
            courseStats: this.reportsService.getCourseStats()
        }).subscribe({
            next: ({ overview, userStats, revenue, courseStats }) => {
                this.overview    = overview;
                this.userStats   = userStats;
                this.courseStats = courseStats;
                this.buildCharts(overview, userStats, revenue, courseStats);
                this.loading = false;
                this.cdr.detectChanges();
            },
            error: () => { this.loading = false; }
        });
    }

    buildCharts(overview: ReportsOverview, userStats: UserStats, revenue: RevenueStats, courseStats: CourseStats): void {
        // Revenue area chart
        this.revenueSeries = [
            { name: 'Revenus (€)', data: revenue.revenue },
            { name: 'Ventes',       data: revenue.sales }
        ];
        this.revenueOptions = {
            ...this.revenueOptions,
            xaxis: { ...this.revenueOptions.xaxis, categories: revenue.labels }
        };

        // Bar — utilisateurs par rôle
        const roleLabels: Record<string, string> = {
            STUDENT: 'Étudiants', INSTRUCTOR: 'Instruct.',
            ADMIN: 'Admins', RECRUITER: 'Recruteurs', SUPERADMIN: 'SuperAdmin'
        };
        const roles = Object.keys(userStats.byRole ?? {});
        this.barSeries = [{ name: 'Utilisateurs', data: roles.map(r => userStats.byRole[r] ?? 0) }];
        this.barOptions = {
            ...this.barOptions,
            xaxis: { ...this.barOptions.xaxis, categories: roles.map(r => roleLabels[r] || r) }
        };

        // Line — inscriptions (12 derniers mois)
        this.lineSeries = [{ name: 'Inscriptions', data: userStats.registrations }];
        this.lineOptions = {
            ...this.lineOptions,
            xaxis: { ...this.lineOptions.xaxis, categories: userStats.labels }
        };

        // Donut — cours par statut
        this.courseDonutSeries = [
            courseStats.byStatus.DRAFT,
            courseStats.byStatus.PENDING,
            courseStats.byStatus.PUBLISHED,
            courseStats.byStatus.REJECTED
        ];
    }

    get pendingCourses(): number {
        if (!this.courseStats) return 0;
        return this.courseStats.byStatus.PENDING || 0;
    }

    getRoleColor(role: string): string {
        const colors: Record<string, string> = {
            STUDENT: '#5625E8', INSTRUCTOR: '#03C95A',
            ADMIN: '#9b59b6', RECRUITER: '#FFC107', SUPERADMIN: '#5625E8'
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

