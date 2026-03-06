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
    imports:[CommonModule,NgApexchartsModule]
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

  buildChart(byCourse: RevenueByCourse[]): void {
    const labels = byCourse.map(c =>
      c.courseTitle.length > 20 ? c.courseTitle.substring(0, 20) + '...' : c.courseTitle
    );
    const values = byCourse.map(c => Number(c.instructorRevenue.toFixed(2)));
    const chartLabels = labels.length > 0 ? labels : ['Aucun cours'];
    const chartValues = values.length > 0 ? values : [0];

    this.earningChart = {
      series: [{ name: 'Revenu (€)', data: chartValues }],
      chart: { height: 273, type: 'bar', toolbar: { show: false } },
      colors: ['#FF4667'],
      dataLabels: { enabled: false },
      plotOptions: { bar: { borderRadius: 4, horizontal: false } },
      xaxis: { categories: chartLabels },
      yaxis: { labels: { formatter: (val: any) => val + ' €' } },
      tooltip: { y: { formatter: (val: any) => val + ' €' } }
    };
  }
}
