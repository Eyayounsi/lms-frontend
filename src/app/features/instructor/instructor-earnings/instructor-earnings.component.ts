/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexPlotOptions,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { RouterLink } from '@angular/router';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { InstructorRevenueService, InstructorRevenueDto, RevenueByCourse } from '../../../shared/service/revenue/instructor-revenue.service';
export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  dataLabels: ApexDataLabels | any;
  plotOptions: ApexPlotOptions | any;
  xaxis: ApexXAxis | any;
  colors: ApexXAxis | any;
};

@Component({
    selector: 'app-instructor-earnings',
    templateUrl: './instructor-earnings.component.html',
    styleUrls: ['./instructor-earnings.component.scss'],
  imports:[CommonModule, NgApexchartsModule, RouterLink]
})
export class InstructorEarningsComponent implements OnInit {
  public routes = routes;
  @ViewChild('chart') chart!: ChartComponent;
  public earningChart: Partial<ChartOptions> | any;

  revenue: InstructorRevenueDto | null = null;
  loading = true;
  errorMessage = '';

  constructor(private revenueService: InstructorRevenueService) {}

  ngOnInit(): void {
    this.revenueService.getMyRevenueDashboard().subscribe({
      next: (data) => {
        this.revenue = data;
        this.loading = false;
        this.buildChart(data.byCourse);
      },
      error: () => {
        this.errorMessage = 'Erreur lors du chargement des revenus.';
        this.loading = false;
        this.buildChart([]);
      }
    });
  }

  get hasRevenueData(): boolean {
    return !!this.revenue && (this.revenue.totalSales > 0 || (this.revenue.byCourse?.length || 0) > 0);
  }

  get avgTicket(): number {
    if (!this.revenue || this.revenue.totalSales <= 0) {
      return 0;
    }
    return this.revenue.totalRevenue / this.revenue.totalSales;
  }

  get monthlyShare(): number {
    if (!this.revenue || this.revenue.totalRevenue <= 0) {
      return 0;
    }
    return Math.min(100, (this.revenue.monthlyRevenue / this.revenue.totalRevenue) * 100);
  }

  get topCourse(): RevenueByCourse | null {
    const list = this.revenue?.byCourse || [];
    if (list.length === 0) {
      return null;
    }
    return [...list].sort((a, b) => b.instructorRevenue - a.instructorRevenue)[0];
  }

  get topCourses(): RevenueByCourse[] {
    const list = this.revenue?.byCourse || [];
    return [...list]
      .sort((a, b) => b.instructorRevenue - a.instructorRevenue)
      .slice(0, 5);
  }

  buildChart(byCourse: RevenueByCourse[]): void {
    const sorted = [...byCourse]
      .sort((a, b) => b.instructorRevenue - a.instructorRevenue)
      .slice(0, 8);

    const labels = sorted.map(c =>
      c.courseTitle.length > 20 ? c.courseTitle.substring(0, 20) + '...' : c.courseTitle
    );
    const values = sorted.map(c => Number(c.instructorRevenue.toFixed(2)));
    const chartLabels = labels.length > 0 ? labels : ['Aucun cours'];
    const chartValues = values.length > 0 ? values : [0];

    this.earningChart = {
      series: [{ name: 'Revenu (€)', data: chartValues }],
      chart: { height: 320, type: 'bar', toolbar: { show: false } },
      colors: ['#4b55dc'],
      dataLabels: { enabled: false },
      plotOptions: { bar: { borderRadius: 6, horizontal: true, barHeight: '45%' } },
      xaxis: { categories: chartLabels },
      yaxis: { labels: { formatter: (val: any) => val + ' €' } },
      grid: { borderColor: '#eef2f7', strokeDashArray: 4 },
      tooltip: { y: { formatter: (val: any) => val + ' €' } }
    };
  }
}
