import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface ReportsOverview {
  totalUsers: number;
  totalCourses: number;
  publishedCourses: number;
  totalEnrollments: number;
  totalRevenue: number;
  totalCertificates: number;
  openTickets: number;
  newUsersThisMonth: number;
  newEnrollmentsThisMonth: number;
}

export interface RevenueStats {
  labels: string[];
  revenue: number[];
  sales: number[];
}

export interface CourseStats {
  byStatus: { DRAFT: number; PENDING: number; PUBLISHED: number; REJECTED: number };
  topCourses: { title: string; enrollments: number; revenue: number }[];
  totalCourses: number;
}

export interface UserStats {
  labels: string[];
  registrations: number[];
  byRole: { [key: string]: number };
  total: number;
}

@Injectable({ providedIn: 'root' })
export class AdminReportsService {
  private base = `${environment.apiUrl}/admin/reports`;

  constructor(private http: HttpClient) {}

  getOverview(): Observable<ReportsOverview> {
    return this.http.get<ReportsOverview>(`${this.base}/overview`);
  }

  getRevenue(): Observable<RevenueStats> {
    return this.http.get<RevenueStats>(`${this.base}/revenue`);
  }

  getCourseStats(): Observable<CourseStats> {
    return this.http.get<CourseStats>(`${this.base}/courses`);
  }

  getUserStats(): Observable<UserStats> {
    return this.http.get<UserStats>(`${this.base}/users`);
  }
}
