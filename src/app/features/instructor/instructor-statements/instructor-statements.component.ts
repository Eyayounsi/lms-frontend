import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { InstructorRevenueService, InstructorRevenueDto } from '../../../shared/service/revenue/instructor-revenue.service';

@Component({
  selector: 'app-instructor-statements',
  imports: [CommonModule, FormsModule],
  templateUrl: './instructor-statements.component.html',
  styleUrl: './instructor-statements.component.scss'
})
export class InstructorStatementsComponent implements OnInit {

  revenue: InstructorRevenueDto | null = null;
  filtered: any[] = [];
  searchValue = '';
  loading = false;

  constructor(
    private revenueService: InstructorRevenueService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.revenueService.getMyRevenueDashboard().subscribe({
      next: (data) => {
        this.revenue = data;
        this.filtered = data.byCourse || [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.toastr.error('Impossible de charger les releves.');
      }
    });
  }

  searchData(value: string): void {
    if (!this.revenue) return;
    const term = value.trim().toLowerCase();
    this.filtered = term
      ? (this.revenue.byCourse || []).filter((c: any) => c.courseTitle.toLowerCase().includes(term))
      : [...(this.revenue.byCourse || [])];
  }
}
