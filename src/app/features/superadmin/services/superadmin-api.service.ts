import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface SuperAdminUser {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  role: string;
  accountStatus: string;
  createdAt: string;
}

export interface DashboardStats {
  totalUsers: number;
  activeUsers: number;
  blockedUsers: number;
  usersByRole: { [key: string]: number };
  registrationsByMonth: { [key: string]: number };
}

@Injectable({
  providedIn: 'root'
})
export class SuperAdminApiService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // ─── Stats ────────────────────────────────────────────────────────────────
  getSuperStats(): Observable<DashboardStats> {
    return this.http.get<DashboardStats>(`${this.apiUrl}/superadmin/stats`);
  }

  getAdminStats(): Observable<DashboardStats> {
    return this.http.get<DashboardStats>(`${this.apiUrl}/admin/stats`);
  }

  // ─── Users ────────────────────────────────────────────────────────────────
  getAllUsers(): Observable<SuperAdminUser[]> {
    return this.http.get<SuperAdminUser[]>(`${this.apiUrl}/superadmin/users`);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/superadmin/users/${id}`, { responseType: 'text' as 'json' });
  }

  toggleBlock(id: number): Observable<SuperAdminUser> {
    return this.http.put<SuperAdminUser>(`${this.apiUrl}/superadmin/users/${id}/toggle-block`, {});
  }

  changeUserRole(id: number, role: string): Observable<SuperAdminUser> {
    return this.http.put<SuperAdminUser>(`${this.apiUrl}/superadmin/users/${id}/change-role?role=${role}`, {});
  }
}
