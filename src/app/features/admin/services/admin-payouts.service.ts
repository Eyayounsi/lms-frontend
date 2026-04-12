import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface AdminPayoutDto {
  id: number;
  instructorId: number;
  instructorName: string;
  instructorEmail: string;
  amount: number;
  period: string;
  status: string;
  notes?: string;
  requestedAt: string;
  paidAt?: string;
}

@Injectable({ providedIn: 'root' })
export class AdminPayoutsService {
  private base = `${environment.apiUrl}/admin/payouts`;

  constructor(private http: HttpClient) {}

  getAll(status?: string): Observable<AdminPayoutDto[]> {
    const url = status ? `${this.base}?status=${status}` : this.base;
    return this.http.get<AdminPayoutDto[]>(url);
  }

  markAsPaid(id: number, notes?: string): Observable<AdminPayoutDto> {
    return this.http.put<AdminPayoutDto>(`${this.base}/${id}/pay`, { notes: notes || '' });
  }

  reject(id: number, notes: string): Observable<AdminPayoutDto> {
    return this.http.put<AdminPayoutDto>(`${this.base}/${id}/reject`, { notes });
  }
}
