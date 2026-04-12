import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ChartComponent, ApexAxisChartSeries, ApexChart, ApexXAxis,
  ApexDataLabels, ApexPlotOptions, ApexLegend, ApexFill, ApexGrid,
  ApexTooltip, ApexStroke, ApexResponsive, ApexYAxis, ApexMarkers
} from 'ng-apexcharts';
import { AnalyticsService, CourseAnalyticsDto } from '../../../shared/service/analytics/analytics.service';
import { routes } from '../../../shared/service/routes/routes';
import { RouterLink } from '@angular/router';
import { resolveCourseImage } from '../../../shared/utils/course-image.util';

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
  colors: string[] | any;
  labels: string[] | any;
  responsive: ApexResponsive[] | any;
  markers: ApexMarkers | any;
};

@Component({
  selector: 'app-instructor-analytics',
  standalone: true,
  imports: [CommonModule, FormsModule, NgApexchartsModule, RouterLink],
  templateUrl: './instructor-analytics.component.html',
  styleUrl: './instructor-analytics.component.scss'
})
export class InstructorAnalyticsComponent implements OnInit {

  routes = routes;
  @ViewChild('chart') chart!: ChartComponent;

  courses: CourseAnalyticsDto[] = [];
  filteredCourses: CourseAnalyticsDto[] = [];
  loading = true;
  selectedCourse: CourseAnalyticsDto | null = null;
  searchTerm = '';
  filterType = '';

  // Charts
  public attentionChart!: Partial<ChartOptions>;
  public detectionDistChart!: Partial<ChartOptions>;
  public engagementChart!: Partial<ChartOptions>;

  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit(): void {
    this.analyticsService.getInstructorAnalytics().subscribe({
      next: (data) => {
        this.courses = data;
        this.filteredCourses = data;
        this.loading = false;
        if (data.length) {
          this.selectedCourse = data[0];
          this.buildCharts(data);
        }
      },
      error: () => { this.loading = false; }
    });
  }

  // ─── Filters ───────────────────────────────────────────────────────────

  applyFilters(): void {
    let list = [...this.courses];
    if (this.searchTerm.trim()) {
      const t = this.searchTerm.toLowerCase();
      list = list.filter(c => c.title.toLowerCase().includes(t));
    }
    if (this.filterType) {
      list = list.filter(c => c.recommendationType === this.filterType);
    }
    this.filteredCourses = list;
  }

  selectCourse(c: CourseAnalyticsDto): void {
    this.selectedCourse = this.selectedCourse?.courseId === c.courseId ? null : c;
  }

  // ─── Global stats getters ──────────────────────────────────────────────

  get avgAttention(): number {
    const w = this.courses.filter(c => c.totalDetections > 0);
    if (!w.length) return 0;
    return Math.round(w.reduce((s, c) => s + c.avgAttentionScore, 0) / w.length);
  }

  get avgRating(): number {
    const w = this.courses.filter(c => c.avgRating != null);
    if (!w.length) return 0;
    return Math.round(w.reduce((s, c) => s + (c.avgRating ?? 0), 0) / w.length * 10) / 10;
  }

  get totalStudents(): number {
    return this.courses.reduce((s, c) => s + c.enrollmentCount, 0);
  }

  get excellentCount(): number {
    return this.courses.filter(c => c.recommendationType === 'EXCELLENT').length;
  }

  // ─── Charts ────────────────────────────────────────────────────────────

  buildCharts(data: CourseAnalyticsDto[]): void {
    const withDet = data.filter(c => c.totalDetections > 0);
    const labels  = withDet.map(c => this.truncate(c.title, 18));

    // Chart 1: Attention score per course
    this.attentionChart = {
      series: [{
        name: 'Attention moy.',
        data: withDet.map(c => Math.round(c.avgAttentionScore))
      }],
      chart: { type: 'bar', height: 240, toolbar: { show: false }, fontFamily: 'inherit', animations: { enabled: true } },
      colors: withDet.map(c =>
        c.avgAttentionScore >= 70 ? '#4ade80' :
        c.avgAttentionScore >= 50 ? '#fbbf24' : '#fb7185'
      ),
      plotOptions: { bar: { borderRadius: 6, columnWidth: '55%',
        distributed: true, dataLabels: { position: 'top' } } },
      dataLabels: { enabled: true, formatter: (v: number) => v + '%', offsetY: -18,
        style: { fontSize: '11px', fontWeight: 600 } },
      xaxis: { categories: labels, labels: { style: { fontSize: '11px', colors: '#64748b' } } },
      yaxis: { max: 100, labels: { formatter: (v: number) => v + '%' } },
      grid: { borderColor: '#f1f5f9' },
      legend: { show: false },
      tooltip: { y: { formatter: (v: number) => v + '%' } }
    };

    // Chart 2: Detection distribution (concentration vs fatigue vs distraction)
    const conc   = withDet.map(c => Math.round(c.concentrationRate));
    const fatig  = withDet.map(c => Math.round(c.fatigueRate));
    const distr  = withDet.map(c => Math.round(c.distractionRate));
    const other  = withDet.map((c, i) => Math.max(0, 100 - conc[i] - fatig[i] - distr[i]));

    this.detectionDistChart = {
      series: [
        { name: 'Concentration', data: conc },
        { name: 'Fatigue',       data: fatig },
        { name: 'Distraction',   data: distr },
        { name: 'Autre',         data: other }
      ],
      chart: { type: 'bar', height: 240, stacked: true, stackType: '100%',
        toolbar: { show: false }, fontFamily: 'inherit', animations: { enabled: true } },
      colors: ['#4ade80', '#fbbf24', '#fb7185', '#cbd5e1'],
      plotOptions: { bar: { horizontal: false, borderRadius: 4 } },
      xaxis: { categories: labels, labels: { style: { fontSize: '11px', colors: '#64748b' } } },
      yaxis: { labels: { formatter: (v: number) => v + '%' } },
      grid: { borderColor: '#f1f5f9' },
      legend: { position: 'top', fontSize: '12px' },
      tooltip: { y: { formatter: (v: number) => Math.round(v) + '%' } },
      fill: { opacity: 1 },
      dataLabels: { enabled: false }
    };

    // Chart 3: Engagement score per course
    this.engagementChart = {
      series: [{ name: 'Score engagement', data: data.map(c => Math.round(c.engagementScore)) }],
      chart: { type: 'radar', height: 260, toolbar: { show: false }, fontFamily: 'inherit', animations: { enabled: true } },
      colors: ['#6366f1'],
      labels: data.map(c => this.truncate(c.title, 14)),
      fill: { opacity: 0.25 },
      stroke: { width: 2.2 },
      markers: { size: 4.5 },
      yaxis: { show: false },
      tooltip: { y: { formatter: (v: number) => Math.round(v) + '/100' } }
    };
  }

  // ─── Helpers ───────────────────────────────────────────────────────────

  truncate(s: string, n: number): string {
    return s.length > n ? s.slice(0, n) + '…' : s;
  }

  coverUrl(path: string | null): string {
    return resolveCourseImage(path, '');
  }

  stars(rating: number | null): number[] {
    const r = Math.round(rating ?? 0);
    return Array.from({ length: 5 }, (_, i) => i < r ? 1 : 0);
  }

  getScoreRing(score: number): string {
    const pct = Math.round(score);
    const r = 20;
    const circ = 2 * Math.PI * r;
    const offset = circ - (pct / 100) * circ;
    return `stroke-dasharray:${circ.toFixed(1)};stroke-dashoffset:${offset.toFixed(1)}`;
  }

  getRingColor(score: number): string {
    if (score >= 70) return '#4ade80';
    if (score >= 50) return '#fbbf24';
    return '#fb7185';
  }
}
