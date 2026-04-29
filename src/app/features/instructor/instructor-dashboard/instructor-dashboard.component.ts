/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexDataLabels,
  ApexTooltip, ApexStroke, ApexPlotOptions, ApexLegend, ApexYAxis,
  ApexFill, ApexGrid, ApexMarkers, ApexResponsive
} from 'ng-apexcharts';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CourseService } from '../../../shared/service/course/course.service';
import { AuthService } from '../../../shared/service/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../environments/environment';

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
  private failedImageKeys = new Set<string>();
  private failedStudentAvatarKeys = new Set<string>();
  private readonly backendBaseUrl = (environment.apiUrl || '').replace(/\/api\/?$/, '');

  // ── User info ──
  public userName = '';
  public userRole = '';
  public userAvatarUrl = '';

  // ── Stats cards ──
  totalCourses = 0;
  publishedCourses = 0;
  pendingCourses = 0;
  totalStudents = 0;
  totalRevenue = 0;
  currentMonthRevenue = 0;
  avgRating = 0;
  completionRate = 0;

  // ── Animated display values (counter effect) ──
  displayTotalCourses = 0;
  displayPublishedCourses = 0;
  displayPendingCourses = 0;
  displayTotalStudents = 0;
  displayTotalRevenue = 0;
  displayCurrentMonthRevenue = 0;
  displayAvgRating = 0;
  displayCompletionRate = 0;

  // ── Raw data ──
  courses: any[] = [];
  students: any[] = [];
  revenueData: any = null;
  loading = true;

  // ── Student table filter ──
  searchStudent = '';
  filterCourse = 0;

  // ✅ Modal de vérification password pour switch vers student
  showSwitchToStudentModal = false;
  switchToStudentPassword = '';
  switchToStudentError = '';
  switchingToStudent = false;

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

  constructor(
    private courseService: CourseService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.authService.ensureProfileIdentityLoaded();
    this.userName = localStorage.getItem('fullName') || 'Instructor';
    this.userRole = localStorage.getItem('role') || '';
    this.userAvatarUrl = this.authService.resolveAvatarUrl(localStorage.getItem('avatarPath'));

    this.authService.currentFullName$.subscribe(name => {
      if (name) this.userName = name;
    });
    this.authService.currentAvatarPath$.subscribe(path => {
      this.userAvatarUrl = this.authService.resolveAvatarUrl(path);
    });

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
        this.animateCounters();
      },
      error: () => {
        this.courseService.getMyCourses().subscribe({
          next: (courses) => {
            this.courses = courses || [];
            this.totalStudents = this.courses.reduce((s, c) => s + (c.enrollmentCount || 0), 0);
            this.computeStats();
            this.buildCharts();
            this.loading = false;
            this.animateCounters();
          },
          error: () => { this.loading = false; }
        });
      }
    });
  }

  private computeStats(): void {
    this.totalCourses = this.courses.length;
    this.publishedCourses = this.courses.filter(c => this.normalizeCourseStatus(c) === 'PUBLISHED').length;
    this.pendingCourses = this.courses.filter(c => this.normalizeCourseStatus(c) === 'PENDING_REVIEW').length;

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
      chart: {
        type: 'bar',
        height: 300,
        toolbar: { show: false },
        animations: { enabled: true, speed: 900, easing: 'easeinout' }
      },
      plotOptions: {
        bar: {
          borderRadius: 8,
          borderRadiusApplication: 'end',
          horizontal: false,
          columnWidth: '54%',
          distributed: true
        }
      },
      series: [{ name: 'Étudiants', data: top.map(c => c.enrollmentCount || 0) }],
      xaxis: {
        categories: top.map(c => (c.title?.length > 15 ? c.title.substring(0, 13) + '…' : c.title) || 'Cours'),
        labels: { style: { fontSize: '11px', fontWeight: 600, colors: '#6b7280' } }
      },
      yaxis: {
        labels: { offsetX: -10, style: { colors: '#6b7280' } }
      },
      colors: ['#14b8a6', '#f59e0b', '#8b5cf6', '#ec4899', '#0ea5e9', '#22c55e', '#f97316', '#6366f1'],
      fill: {
        type: 'gradient',
        gradient: { shade: 'light', type: 'vertical', shadeIntensity: 0.25, opacityFrom: 0.98, opacityTo: 0.72, stops: [0, 100] }
      },
      dataLabels: { enabled: false },
      grid: { borderColor: '#e5e7eb', strokeDashArray: 3 },
      legend: { show: false },
      tooltip: { y: { formatter: (v: number) => v + ' étudiants' } }
    };

    // Monthly revenue area chart
    const monthly: any[] = this.revenueData?.monthly || [];
    const lastMonths = this.generateLastMonths(6);
    const revenueMap = new Map(monthly.map((m: any) => [m.month, parseFloat(m.revenue) || 0]));
    this.revenueChart = {
      chart: {
        type: 'area',
        height: 280,
        toolbar: { show: false },
        animations: { enabled: true, speed: 900, easing: 'easeinout' },
        dropShadow: { enabled: true, top: 8, left: 0, blur: 10, color: '#0ea5e9', opacity: 0.18 }
      },
      series: [{ name: 'Revenus (€)', data: lastMonths.map(m => revenueMap.get(m) || 0) }],
      stroke: { curve: 'smooth', width: 4 },
      markers: { size: 4, strokeWidth: 2, hover: { size: 6 } },
      xaxis: {
        categories: lastMonths.map(m => this.formatMonth(m)),
        labels: { style: { fontSize: '11px', colors: '#6b7280', fontWeight: 600 } }
      },
      yaxis: { labels: { formatter: (v: number) => '€' + v.toFixed(0), style: { colors: '#6b7280' } } },
      colors: ['#0ea5e9'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          gradientToColors: ['#14b8a6'],
          opacityFrom: 0.55,
          opacityTo: 0.06,
          stops: [0, 90, 100]
        }
      },
      dataLabels: { enabled: false },
      grid: { borderColor: '#e5e7eb', strokeDashArray: 3 },
      tooltip: { y: { formatter: (v: number) => '€' + v.toFixed(2) } }
    };

    // Completion donut
    const completedCount = this.students.filter(s => s.completed).length;
    const inProgressCount = this.students.filter(s => !s.completed && (s.completionPercentage || 0) > 0).length;
    const notStartedCount = this.students.filter(s => !s.completed && !(s.completionPercentage || 0)).length;
    this.completionDonut = {
      chart: {
        type: 'donut',
        height: 260,
        animations: { enabled: true, speed: 850, easing: 'easeinout' }
      },
      series: [completedCount || 0, inProgressCount || 0, notStartedCount || 0],
      labels: ['Complété', 'En cours', 'Non commencé'],
      colors: ['#14b8a6', '#f59e0b', '#a78bfa'],
      legend: { position: 'bottom', fontSize: '13px', markers: { width: 10, height: 10, radius: 12 } },
      dataLabels: { enabled: true, formatter: (v: number) => `${Math.round(v)}%` },
      responsive: [{ breakpoint: 480, options: { chart: { height: 220 } } }],
      plotOptions: {
        pie: {
          donut: {
            size: '62%',
            labels: {
              show: true,
              total: {
                show: true,
                label: 'Étudiants',
                formatter: () => `${this.students.length}`
              }
            }
          }
        }
      },
      tooltip: { y: { formatter: (v: number) => v + ' étudiants' } }
    };

    // Course status histogram (vertical bars)
    const statusCounts = [
      this.courses.filter(c => this.normalizeCourseStatus(c) === 'PUBLISHED').length,
      this.courses.filter(c => this.normalizeCourseStatus(c) === 'PENDING_REVIEW').length,
      this.courses.filter(c => this.normalizeCourseStatus(c) === 'DRAFT').length,
      this.courses.filter(c => this.normalizeCourseStatus(c) === 'ARCHIVED').length
    ];
    const statusLabels = ['Publié', 'En attente', 'Brouillon', 'Archivé'];
    const statusColors = ['#10b981', '#f59e0b', '#9ca3af', '#ef4444'];
    this.statusChart = {
      chart: {
        type: 'bar',
        height: 280,
        toolbar: { show: false },
        animations: { enabled: true, speed: 800, easing: 'easeinout' }
      },
      plotOptions: {
        bar: {
          borderRadius: 8,
          horizontal: false,
          columnWidth: '58%',
          distributed: true,
          dataLabels: { position: 'top' }
        }
      },
      series: [{ name: 'Cours', data: statusCounts }],
      xaxis: {
        categories: statusLabels,
        labels: { style: { fontSize: '12px', fontWeight: 700, colors: '#6b7280' } }
      },
      yaxis: {
        min: 0,
        forceNiceScale: true,
        tickAmount: 4,
        labels: { formatter: (v: number) => `${Math.max(0, Math.round(v))}`, style: { colors: '#6b7280' } }
      },
      colors: statusColors,
      dataLabels: {
        enabled: true,
        formatter: (v: number) => `${Math.round(v)}`,
        style: { fontSize: '12px', fontWeight: 700 },
        offsetY: -8
      },
      grid: { borderColor: '#e5e7eb', strokeDashArray: 3, yaxis: { lines: { show: true } } },
      legend: { show: false },
      tooltip: { y: { formatter: (v: number) => v + ' cours' } }
    };
  }

  private normalizeCourseStatus(course: any): string {
    const raw = (course?.courseStatus || course?.status || '').toString().trim().toUpperCase();
    if (raw === 'PENDING') return 'PENDING_REVIEW';
    if (raw === 'PENDING_REVIEW') return 'PENDING_REVIEW';
    if (raw === 'PUBLISHED') return 'PUBLISHED';
    if (raw === 'ARCHIVED') return 'ARCHIVED';
    return 'DRAFT';
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

  getCourseStatusLabel(course: any): string {
    return this.getStatusLabel(this.normalizeCourseStatus(course));
  }

  getCourseImage(course: any): string {
    const candidates = [
      course?.coverImage,
      course?.thumbnailUrl,
      course?.coverImageUrl,
      course?.thumbnail,
      course?.imageUrl,
      course?.image,
      course?.courseImageUrl,
      course?.courseImage
    ];
    const found = candidates.find((v: any) => typeof v === 'string' && v.trim().length > 0);
    if (!found) return '';

    const normalized = found.trim().replace(/\\/g, '/');

    if (normalized.startsWith('http://') || normalized.startsWith('https://')) return normalized;

    if (normalized.startsWith('preset:')) {
      const presetName = this.normalizeLegacyPresetFileName(normalized.replace('preset:', '').trim());
      return this.resolveAssetPresetImage(presetName);
    }

    if (normalized.startsWith('assets/')) return normalized;

    // Some records store only preset-like file names (e.g. "course-img3.jpg").
    if (!normalized.includes('/')) {
      const fileName = this.normalizeLegacyPresetFileName(normalized);
      if (/^(course-img|courses-)/i.test(fileName)) {
        return this.resolveAssetPresetImage(fileName);
      }
    }

    if (normalized.startsWith('/')) {
      return `${this.backendBaseUrl}${normalized}`;
    }

    return `${this.backendBaseUrl}/${normalized}`;
  }

  private normalizeLegacyPresetFileName(name: string): string {
    const trimmed = (name || '').trim();
    const m = trimmed.match(/^course-img-?(\d+)\.(jpg|jpeg|png|webp|svg)$/i);
    if (!m) return trimmed;
    return `course-img${m[1]}.${m[2]}`;
  }

  private resolveAssetPresetImage(fileName: string): string {
    if (/^(course-img|courses-|cat-icon-|cat-template-)/i.test(fileName)) {
      return `assets/img/course-img/${fileName}`;
    }
    return `assets/img/course-img/${fileName}`;
  }

  hasValidImage(course: any): boolean {
    const key = this.getCourseKey(course);
    return !!this.getCourseImage(course) && !this.failedImageKeys.has(key);
  }

  onCourseImageError(course: any): void {
    this.failedImageKeys.add(this.getCourseKey(course));
  }

  getPlaceholderGradient(course: any): string {
    const gradients = [
      'linear-gradient(135deg, #5625E8 0%, #02a8b5 100%)',
      'linear-gradient(135deg, #FD3995 0%, #9b59b6 100%)',
      'linear-gradient(135deg, #02a8b5 0%, #5625E8 100%)',
      'linear-gradient(135deg, #9b59b6 0%, #FD3995 100%)'
    ];
    const key = this.getCourseKey(course);
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = ((hash << 5) - hash) + key.charCodeAt(i);
      hash |= 0;
    }
    return gradients[Math.abs(hash) % gradients.length];
  }

  private getCourseKey(course: any): string {
    return String(course?.id || course?.slug || course?.title || Math.random());
  }

  getStudentAvatarUrl(student: any): string {
    const raw = student?.studentAvatar || student?.avatarPath || student?.avatar || '';
    if (!raw || typeof raw !== 'string') return '';
    const resolved = this.authService.resolveAvatarUrl(raw);
    return resolved || '';
  }

  hasStudentAvatar(student: any): boolean {
    const key = this.getStudentKey(student);
    return !!this.getStudentAvatarUrl(student) && !this.failedStudentAvatarKeys.has(key);
  }

  onStudentAvatarError(student: any): void {
    this.failedStudentAvatarKeys.add(this.getStudentKey(student));
  }

  getStudentInitial(student: any): string {
    return (student?.studentName || 'E').trim().charAt(0).toUpperCase() || 'E';
  }

  getStudentAvatarGradient(student: any): string {
    const gradients = [
      'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
      'linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)',
      'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
      'linear-gradient(135deg, #22c55e 0%, #0ea5e9 100%)',
      'linear-gradient(135deg, #f97316 0%, #eab308 100%)'
    ];
    const key = this.getStudentKey(student);
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = ((hash << 5) - hash) + key.charCodeAt(i);
      hash |= 0;
    }
    return gradients[Math.abs(hash) % gradients.length];
  }

  private getStudentKey(student: any): string {
    return String(student?.studentId || student?.id || student?.studentEmail || student?.studentName || Math.random());
  }

  private animateCounters(): void {
    const duration = 1300;
    const steps    = 60;
    const interval = duration / steps;
    const targets: { key: keyof InstructorDashboardComponent; target: number }[] = [
      { key: 'displayTotalCourses',        target: this.totalCourses        },
      { key: 'displayPublishedCourses',    target: this.publishedCourses    },
      { key: 'displayPendingCourses',      target: this.pendingCourses      },
      { key: 'displayTotalStudents',       target: this.totalStudents       },
      { key: 'displayTotalRevenue',        target: this.totalRevenue        },
      { key: 'displayCurrentMonthRevenue', target: this.currentMonthRevenue },
      { key: 'displayAvgRating',           target: this.avgRating           },
      { key: 'displayCompletionRate',      target: this.completionRate      },
    ];

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      targets.forEach(t => {
        (this as any)[t.key] = parseFloat((t.target * ease).toFixed(1));
      });
      if (step >= steps) {
        clearInterval(timer);
        this.displayTotalCourses        = this.totalCourses;
        this.displayPublishedCourses    = this.publishedCourses;
        this.displayPendingCourses      = this.pendingCourses;
        this.displayTotalStudents       = this.totalStudents;
        this.displayTotalRevenue        = this.totalRevenue;
        this.displayCurrentMonthRevenue = this.currentMonthRevenue;
        this.displayAvgRating           = this.avgRating;
        this.displayCompletionRate      = this.completionRate;
      }
    }, interval);
  }

  /** Afficher la modal pour saisir le mot de passe avant de basculer vers étudiant */
  switchToStudent(): void {
    this.switchToStudentPassword = '';
    this.switchToStudentError = '';
    this.showSwitchToStudentModal = true;
  }

  /** Confirmer et basculer vers le rôle étudiant après vérification du password */
  confirmSwitchToStudent(): void {
    if (!this.switchToStudentPassword.trim()) {
      this.switchToStudentError = 'Mot de passe requis';
      return;
    }

    this.switchingToStudent = true;
    this.switchToStudentError = '';

    this.authService.switchRole('STUDENT', this.switchToStudentPassword).subscribe({
      next: (resp: any) => {
        localStorage.setItem('token', resp.token);
        localStorage.setItem('role', resp.role);
        if (resp.secondaryRoles) {
          localStorage.setItem('secondaryRoles', JSON.stringify(resp.secondaryRoles));
        }
        this.authService.setCurrentRole(resp.role);
        this.authService.scheduleAutoLogout();
        // Fermer la modal
        this.showSwitchToStudentModal = false;
        this.switchToStudentPassword = '';
        this.switchingToStudent = false;
        this.router.navigate([routes.students_Dashboard]);
      },
      error: (err: any) => {
        this.switchingToStudent = false;
        this.switchToStudentError = err.error?.message || err.error || 'Erreur lors du changement de rôle';
      }
    });
  }
}
