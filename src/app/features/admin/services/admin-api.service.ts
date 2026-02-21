import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface AdminUser {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  role: string;
  accountStatus: string;
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<AdminUser[]> {
    return this.http.get<AdminUser[]>(`${this.apiUrl}/admin/users`);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/admin/users/${id}`, { responseType: 'text' as 'json' });
  }

  toggleBlock(id: number): Observable<AdminUser> {
    return this.http.put<AdminUser>(`${this.apiUrl}/admin/users/${id}/toggle-block`, {});
  }

  changeUserRole(id: number, role: string): Observable<AdminUser> {
    return this.http.put<AdminUser>(`${this.apiUrl}/admin/users/${id}/change-role?role=${role}`, {});
  }
}
