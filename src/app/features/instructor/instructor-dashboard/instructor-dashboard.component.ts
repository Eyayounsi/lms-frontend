/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexDataLabels,
  ApexTooltip, ApexStroke, ApexPlotOptions, ApexLegend, ApexYAxis,
  ApexFill, ApexGrid, ApexMarkers, ApexResponsive
} from 'ng-apexcharts';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CourseService } from '../../../shared/service/course/course.service';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  yaxis: ApexYAxis | any;
  stroke: ApexStroke | any;
  tooltip: ApexTooltip | any;
  dataLabels: ApexDataLabels | any;
  plotOptions: ApexPlotOptions | any;
  fill: ApexFill | any;
  legend: ApexLegend | any;
  grid: ApexGrid | any;
  markers: ApexMarkers | any;
  colors: string[] | any;
  labels: string[] | any;
  responsive: ApexResponsive[] | any;
};

@Component({
  selector: 'app-instructor-dashboard',
  templateUrl: './instructor-dashboard.component.html',
  styleUrls: ['./instructor-dashboard.component.scss'],
  imports: [CommonModule, RouterLink, NgApexchartsModule, FormsModule]
})
export class InstructorDashboardComponent implements OnInit {
  public routes = routes;
  @ViewChild('chart') chart!: ChartComponent;

  // ── User info ──
  public userName = '';
  public userRole = '';

  // ── Stats cards ──
  totalCourses = 0;
  publishedCourses = 0;
  pendingCourses = 0;
  totalStudents = 0;
  totalRevenue = 0;
  currentMonthRevenue = 0;
  avgRating = 0;
  completionRate = 0;

  // ── Raw data ──
  courses: any[] = [];
  students: any[] = [];
  revenueData: any = null;
  loading = true;

  // ── Student table filter ──
  searchStudent = '';
  filterCourse = 0;

  get filteredStudents(): any[] {
    return this.students.filter(s => {
      const matchSearch = !this.searchStudent ||
        (s.studentName || '').toLowerCase().includes(this.searchStudent.toLowerCase()) ||
        (s.studentEmail || '').toLowerCase().includes(this.searchStudent.toLowerCase());
      const matchCourse = !this.filterCourse || s.courseId === this.filterCourse;
      return matchSearch && matchCourse;
    });
  }

  // ── Charts ──
  public enrollmentChart!: Partial<ChartOptions>;
  public revenueChart!: Partial<ChartOptions>;
  public completionDonut!: Partial<ChartOptions>;
  public statusChart!: Partial<ChartOptions>;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.userName = localStorage.getItem('fullName') || 'Instructor';
    this.userRole = localStorage.getItem('role') || '';

    forkJoin({
      courses: this.courseService.getMyCourses(),
      students: this.courseService.getInstructorStudents(),
      revenue: this.courseService.getInstructorRevenue()
    }).subscribe({
      next: ({ courses, students, revenue }) => {
        this.courses = courses || [];
        this.students = students || [];
        this.revenueData = revenue;
        this.computeStats();
        this.buildCharts();
        this.loading = false;
      },
      error: () => {
        this.courseService.getMyCourses().subscribe({
          next: (courses) => {
            this.courses = courses || [];
            this.totalStudents = this.courses.reduce((s, c) => s + (c.enrollmentCount || 0), 0);
            this.computeStats();
            this.buildCharts();
            this.loading = false;
          },
          error: () => { this.loading = false; }
        });
      }
    });
  }

  private computeStats(): void {
    this.totalCourses = this.courses.length;
    this.publishedCourses = this.courses.filter(c => c.courseStatus === 'PUBLISHED').length;
    this.pendingCourses = this.courses.filter(c => c.courseStatus === 'PENDING_REVIEW').length;

    if (this.revenueData) {
      this.totalStudents = this.revenueData.totalStudents || 0;
      this.totalRevenue = parseFloat(this.revenueData.totalRevenue) || 0;
      this.currentMonthRevenue = parseFloat(this.revenueData.currentMonthRevenue) || 0;
    } else {
      this.totalStudents = this.courses.reduce((s, c) => s + (c.enrollmentCount || 0), 0);
    }

    if (this.students.length > 0) {
      const completed = this.students.filter(s => s.completed).length;
      this.completionRate = Math.round((completed / this.students.length) * 100);
    }

    const rated = this.courses.filter(c => c.averageRating && c.averageRating > 0);
    if (rated.length > 0) {
      this.avgRating = Math.round((rated.reduce((s, c) => s + c.averageRating, 0) / rated.length) * 10) / 10;
    }
  }

  private buildCharts(): void {
    // Enrollment bar chart (top 8 courses by students)
    const top = [...this.courses]
      .sort((a, b) => (b.enrollmentCount || 0) - (a.enrollmentCount || 0))
      .slice(0, 8);

    this.enrollmentChart = {
      chart: { type: 'bar', height: 300, toolbar: { show: false } },
      plotOptions: { bar: { borderRadius: 6, horizontal: false, columnWidth: '55%' } },
      series: [{ name: 'Étudiants', data: top.map(c => c.enrollmentCount || 0) }],
      xaxis: {
        categories: top.map(c => (c.title?.length > 15 ? c.title.substring(0, 13) + '…' : c.title) || 'Cours'),
        labels: { style: { fontSize: '11px' } }
      },
      yaxis: { labels: { offsetX: -10 } },
      colors: ['#6366f1'],
      fill: {
        type: 'gradient',
        gradient: { shade: 'light', type: 'vertical', shadeIntensity: 0.3, gradientToColors: ['#8b5cf6'], stops: [0, 100] }
      },
      dataLabels: { enabled: false },
      grid: { borderColor: '#e5e7eb', strokeDashArray: 4 },
      legend: { show: false },
      tooltip: { y: { formatter: (v: number) => v + ' étudiants' } }
    };

    // Monthly revenue area chart
    const monthly: any[] = this.revenueData?.monthly || [];
    const lastMonths = this.generateLastMonths(6);
    const revenueMap = new Map(monthly.map((m: any) => [m.month, parseFloat(m.revenue) || 0]));
    this.revenueChart = {
      chart: { type: 'area', height: 280, toolbar: { show: false } },
      series: [{ name: 'Revenus (€)', data: lastMonths.map(m => revenueMap.get(m) || 0) }],
      stroke: { curve: 'smooth', width: 3 },
      xaxis: { categories: lastMonths.map(m => this.formatMonth(m)), labels: { style: { fontSize: '11px' } } },
      yaxis: { labels: { formatter: (v: number) => '€' + v.toFixed(0) } },
      colors: ['#06b6d4'],
      fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.45, opacityTo: 0.05 } },
      dataLabels: { enabled: false },
      grid: { borderColor: '#e5e7eb', strokeDashArray: 4 },
      tooltip: { y: { formatter: (v: number) => '€' + v.toFixed(2) } }
    };

    // Completion donut
    const completedCount = this.students.filter(s => s.completed).length;
    const inProgressCount = this.students.filter(s => !s.completed && (s.completionPercentage || 0) > 0).length;
    const notStartedCount = this.students.filter(s => !s.completed && !(s.completionPercentage || 0)).length;
    this.completionDonut = {
      chart: { type: 'donut', height: 260 },
      series: [completedCount || 0, inProgressCount || 0, notStartedCount || 0],
      labels: ['Complété', 'En cours', 'Non commencé'],
      colors: ['#10b981', '#f59e0b', '#6b7280'],
      legend: { position: 'bottom', fontSize: '13px' },
      dataLabels: { enabled: true },
      responsive: [{ breakpoint: 480, options: { chart: { height: 220 } } }],
      plotOptions: { pie: { donut: { size: '60%' } } },
      tooltip: { y: { formatter: (v: number) => v + ' étudiants' } }
    };

    // Course status horizontal bar
    const statusCounts = [
      this.courses.filter(c => c.courseStatus === 'PUBLISHED').length,
      this.courses.filter(c => c.courseStatus === 'PENDING_REVIEW').length,
      this.courses.filter(c => c.courseStatus === 'DRAFT').length,
      this.courses.filter(c => c.courseStatus === 'ARCHIVED').length
    ];
    this.statusChart = {
      chart: { type: 'bar', height: 200, toolbar: { show: false } },
      plotOptions: { bar: { borderRadius: 4, horizontal: true, barHeight: '55%',
        distributed: true } },
      series: [{ name: 'Cours', data: statusCounts }],
      xaxis: { categories: ['Publié', 'En attente', 'Brouillon', 'Archivé'], labels: { style: { fontSize: '12px' } } },
      colors: ['#10b981', '#f59e0b', '#9ca3af', '#ef4444'],
      dataLabels: { enabled: true },
      grid: { borderColor: '#e5e7eb', strokeDashArray: 3 },
      legend: { show: false },
      tooltip: { y: { formatter: (v: number) => v + ' cours' } }
    };
  }

  private generateLastMonths(n: number): string[] {
    const months: string[] = [];
    const now = new Date();
    for (let i = n - 1; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, '0');
      months.push(`${y}-${m}`);
    }
    return months;
  }

  private formatMonth(m: string): string {
    const [, mo] = m.split('-');
    const names = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
    return names[parseInt(mo) - 1];
  }

  getProgressClass(pct: number): string {
    if (!pct) return 'bg-secondary';
    if (pct >= 100) return 'bg-success';
    if (pct >= 50) return 'bg-primary';
    return 'bg-warning';
  }

  getStatusBadge(status: string): string {
    const map: Record<string, string> = {
      PUBLISHED: 'bg-success-transparent text-success',
      PENDING_REVIEW: 'bg-warning-transparent text-warning',
      DRAFT: 'bg-secondary-transparent text-secondary',
      ARCHIVED: 'bg-danger-transparent text-danger'
    };
    return map[status] || 'bg-light text-dark';
  }

  getStatusLabel(status: string): string {
    const map: Record<string, string> = {
      PUBLISHED: 'Publié',
      PENDING_REVIEW: 'En attente',
      DRAFT: 'Brouillon',
      ARCHIVED: 'Archivé'
    };
    return map[status] || status;
  }
}
