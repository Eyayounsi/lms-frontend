import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface RevenueByCourse {
  courseId: number;
  courseTitle: string;
  totalRevenue: number;
  instructorRevenue: number;
  totalSales: number;
}

export interface InstructorRevenueDto {
  totalRevenue: number;
  monthlyRevenue: number;
  totalSales: number;
  byCourse: RevenueByCourse[];
}

interface BackendCourseRevenueItem {
  courseId: number;
  courseTitle: string;
  revenue: number;
}

interface BackendInstructorRevenueDto {
  totalRevenue?: number;
  currentMonthRevenue?: number;
  totalStudents?: number;
  perCourse?: BackendCourseRevenueItem[];
}

export interface PayoutDto {
  id: number;
  instructorId: number;
  instructorName: string;
  instructorEmail: string;
  amount: number;
  period: string;
  status: string;   // PENDING | PAID | REJECTED
  notes?: string;
  requestedAt: string;
  paidAt?: string;
}

@Injectable({ providedIn: 'root' })
export class InstructorRevenueService {
  private readonly api = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getMyRevenueDashboard(): Observable<InstructorRevenueDto> {
    return this.http
      .get<BackendInstructorRevenueDto | InstructorRevenueDto>(`${this.api}/instructor/revenue`)
      .pipe(map((data) => this.normalizeRevenueResponse(data)));
  }

  getAvailableBalance(): Observable<{ availableBalance: number }> {
    return this.http.get<{ availableBalance: number }>(`${this.api}/instructor/payouts/balance`);
  }

  getMyPayouts(): Observable<PayoutDto[]> {
    return this.http.get<PayoutDto[]>(`${this.api}/instructor/payouts`);
  }

  requestPayout(period?: string): Observable<PayoutDto> {
    const body = period ? { period } : {};
    return this.http.post<PayoutDto>(`${this.api}/instructor/payouts`, body);
  }

  private normalizeRevenueResponse(raw: BackendInstructorRevenueDto | InstructorRevenueDto): InstructorRevenueDto {
    const maybeFrontend = raw as InstructorRevenueDto;
    if (Array.isArray(maybeFrontend.byCourse)) {
      return {
        totalRevenue: Number(maybeFrontend.totalRevenue ?? 0),
        monthlyRevenue: Number(maybeFrontend.monthlyRevenue ?? 0),
        totalSales: Number(maybeFrontend.totalSales ?? 0),
        byCourse: maybeFrontend.byCourse.map((c) => ({
          courseId: Number(c.courseId ?? 0),
          courseTitle: c.courseTitle || 'Cours',
          totalRevenue: Number(c.totalRevenue ?? 0),
          instructorRevenue: Number(c.instructorRevenue ?? 0),
          totalSales: Number(c.totalSales ?? 0)
        }))
      };
    }

    const backend = raw as BackendInstructorRevenueDto;
    return {
      totalRevenue: Number(backend.totalRevenue ?? 0),
      monthlyRevenue: Number(backend.currentMonthRevenue ?? 0),
      totalSales: Number(backend.totalStudents ?? 0),
      byCourse: (backend.perCourse || []).map((c) => {
        const instructorRevenue = Number(c.revenue ?? 0);
        return {
          courseId: Number(c.courseId ?? 0),
          courseTitle: c.courseTitle || 'Cours',
          totalRevenue: instructorRevenue,
          instructorRevenue,
          totalSales: 0
        };
      })
    };
  }
}
