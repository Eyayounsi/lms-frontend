import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ChartComponent, ApexAxisChartSeries, ApexChart, ApexXAxis,
  ApexDataLabels, ApexPlotOptions, ApexLegend, ApexFill, ApexGrid,
  ApexTooltip, ApexStroke, ApexYAxis, ApexNonAxisChartSeries
} from 'ng-apexcharts';
import { AnalyticsService, AdminAnalyticsDto, CourseAnalyticsDto } from '../../../shared/service/analytics/analytics.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { resolveCourseImage } from '../../../shared/utils/course-image.util';
import Swal from 'sweetalert2';

export type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries | any;
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
  colors: string[] | any;
  labels: string[] | any;
};

@Component({
  selector: 'app-admin-analytics',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './admin-analytics.component.html',
  styleUrl: './admin-analytics.component.scss'
})
export class AdminAnalyticsComponent implements OnInit {

  @ViewChild('topEngChart') topEngChart?: ChartComponent;
  @ViewChild('topRatingChart') topRatingChart?: ChartComponent;
  @ViewChild('donutChart') donutChart?: ChartComponent;

  analytics: AdminAnalyticsDto | null = null;
  loading = true;
  activeTab: 'overview' | 'ranking' = 'overview';
  featuredActionLoading: Record<number, boolean> = {};

  topEngagementChartOptions: Partial<ChartOptions> = {};
  topRatingChartOptions: Partial<ChartOptions> = {};
  platformDonutOptions: Partial<ChartOptions> = {};

  private apiUrl = environment.apiUrl;

  constructor(
    private analyticsService: AnalyticsService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loadAnalytics();
  }

  loadAnalytics(): void {
    this.loading = true;
    this.analyticsService.getAdminAnalytics().subscribe({
      next: (data) => {
        this.analytics = data;
        this.loading = false;
        this.buildCharts(data);
      },
      error: () => {
        this.loading = false;
        this.showToast('error', 'Impossible de charger les analytics.');
      }
    });
  }

  private buildCharts(data: AdminAnalyticsDto): void {
    // ── Top Engagement Bar (horizontal) ──────────────────────────────────────
    const engCourses = data.topEngagementCourses;
    this.topEngagementChartOptions = {
      chart: { type: 'bar', height: 280, toolbar: { show: false }, fontFamily: 'inherit' },
      plotOptions: { bar: { horizontal: true, borderRadius: 5, barHeight: '60%' } },
      series: [{ name: 'Score Engagement', data: engCourses.map(c => Math.round(c.engagementScore)) }],
      xaxis: { categories: engCourses.map(c => this.truncate(c.title, 22)), max: 100, labels: { style: { fontSize: '11px' } } },
      yaxis: { labels: { style: { fontSize: '11px' } } },
      dataLabels: { enabled: true, style: { fontSize: '11px' } },
      colors: ['#6366f1'],
      grid: { borderColor: '#e5e7eb', strokeDashArray: 4 },
      tooltip: { y: { formatter: (v: number) => v + ' / 100' } }
    };

    // ── Top Rated Bar (horizontal) ────────────────────────────────────────────
    const ratedCourses = data.topRatedCourses;
    this.topRatingChartOptions = {
      chart: { type: 'bar', height: 280, toolbar: { show: false }, fontFamily: 'inherit' },
      plotOptions: { bar: { horizontal: true, borderRadius: 5, barHeight: '60%' } },
      series: [{ name: 'Note Moyenne', data: ratedCourses.map(c => +(c.avgRating ?? 0).toFixed(2)) }],
      xaxis: { categories: ratedCourses.map(c => this.truncate(c.title, 22)), min: 0, max: 5, labels: { style: { fontSize: '11px' } } },
      yaxis: { labels: { style: { fontSize: '11px' } } },
      dataLabels: { enabled: true, style: { fontSize: '11px' }, formatter: (v: number) => '★ ' + v },
      colors: ['#f59e0b'],
      grid: { borderColor: '#e5e7eb', strokeDashArray: 4 },
      tooltip: { y: { formatter: (v: number) => '★ ' + v + ' / 5' } }
    };

    // ── Platform Donut ────────────────────────────────────────────────────────
    this.platformDonutOptions = {
      chart: { type: 'donut', height: 250, fontFamily: 'inherit' },
      series: [
        Math.round(data.platformConcentrationRate),
        Math.round(data.platformFatigueRate),
        Math.round(data.platformDistractionRate)
      ],
      labels: ['Concentration', 'Fatigue', 'Distraction'],
      colors: ['#6366f1', '#f59e0b', '#ef4444'],
      legend: { position: 'bottom', fontSize: '12px' },
      dataLabels: { enabled: true, formatter: (v: number) => Math.round(v) + '%' },
      plotOptions: { pie: { donut: { size: '65%', labels: { show: true, total: { show: true, label: 'Total', formatter: () => '100%' } } } } },
      stroke: { width: 0 }
    };
  }

  setTab(tab: 'overview' | 'ranking'): void {
    this.activeTab = tab;
  }

  markAsFeatured(course: CourseAnalyticsDto): void {
    this.featuredActionLoading[course.courseId] = true;
    this.http.put<any>(`${this.apiUrl}/admin/courses/${course.courseId}/featured`, {}).subscribe({
      next: () => {
        this.featuredActionLoading[course.courseId] = false;
        this.showToast('success', `"${course.title}" est maintenant Featured !`);
      },
      error: () => {
        this.featuredActionLoading[course.courseId] = false;
        this.showToast('error', 'Action impossible.');
      }
    });
  }

  get platformKpiCards() {
    if (!this.analytics) return [];
    const a = this.analytics;
    return [
      { label: 'Attention Moyenne', value: a.platformAvgAttention.toFixed(1) + '%', icon: 'isax-eye5', bg: 'rgba(99,102,241,.1)', color: '#6366f1' },
      { label: 'Concentration', value: a.platformConcentrationRate.toFixed(1) + '%', icon: 'isax-activity5', bg: 'rgba(34,197,94,.1)', color: '#22c55e' },
      { label: 'Taux Fatigue', value: a.platformFatigueRate.toFixed(1) + '%', icon: 'isax-warning-25', bg: 'rgba(245,158,11,.1)', color: '#f59e0b' },
      { label: 'Distraction', value: a.platformDistractionRate.toFixed(1) + '%', icon: 'isax-danger5', bg: 'rgba(239,68,68,.1)', color: '#ef4444' },
      { label: 'Inscriptions', value: a.platformTotalEnrollments.toString(), icon: 'isax-people5', bg: 'rgba(59,130,246,.1)', color: '#3b82f6' },
      { label: 'Note Moyenne', value: (a.platformAvgRating ?? 0).toFixed(1) + ' ★', icon: 'isax-star5', bg: 'rgba(245,158,11,.1)', color: '#f59e0b' }
    ];
  }

  getScoreRing(score: number, size = 54): string {
    const r = (size - 6) / 2;
    const circ = 2 * Math.PI * r;
    const fill = (score / 100) * circ;
    const color = score >= 65 ? '#22c55e' : score >= 40 ? '#f59e0b' : '#ef4444';
    return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="#f1f5f9" stroke-width="6"/>
      <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="${color}" stroke-width="6"
        stroke-dasharray="${fill} ${circ}" stroke-linecap="round"
        transform="rotate(-90 ${size/2} ${size/2})"/>
    </svg>`;
  }

  getRingColor(score: number): string {
    return score >= 65 ? '#10b981' : score >= 40 ? '#f59e0b' : '#ef4444';
  }

  coverUrl(path: string | null): string {
    return resolveCourseImage(path, '');
  }

  truncate(text: string, max = 30): string {
    return text.length > max ? text.slice(0, max) + '…' : text;
  }

  stars(rating: number | null): { full: number; half: boolean; empty: number } {
    const r = rating ?? 0;
    const full = Math.floor(r);
    const half = (r - full) >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);
    return { full, half, empty };
  }

  private showToast(type: 'success' | 'error', msg: string): void {
    const Toast = Swal.mixin({ toast: true, position: 'top-end', showConfirmButton: false, timer: 3500, timerProgressBar: true });
    Toast.fire({ icon: type, title: msg });
  }
}
