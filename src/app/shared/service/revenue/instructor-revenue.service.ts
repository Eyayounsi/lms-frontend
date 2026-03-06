import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

@Injectable({ providedIn: 'root' })
export class InstructorRevenueService {
  private readonly api = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getMyRevenueDashboard(): Observable<InstructorRevenueDto> {
    return this.http.get<InstructorRevenueDto>(`${this.api}/instructor/revenue`);
  }
}
