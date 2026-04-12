import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface AdminTicketDto {
  id: number;
  ticketId: string;
  date: string;
  subject: string;
  category: string;
  priority: string;
  status: string;
  description: string;
  userName?: string;
  userEmail?: string;
  adminReply?: string;
  respondedAt?: string;
}

@Injectable({ providedIn: 'root' })
export class AdminTicketsService {
  private base = `${environment.apiUrl}/admin/tickets`;

  constructor(private http: HttpClient) {}

  getAll(status?: string): Observable<AdminTicketDto[]> {
    const url = status ? `${this.base}?status=${status}` : this.base;
    return this.http.get<AdminTicketDto[]>(url);
  }

  updateStatus(id: number, status: string): Observable<AdminTicketDto> {
    return this.http.put<AdminTicketDto>(`${this.base}/${id}/status`, { status });
  }

  addReply(id: number, reply: string): Observable<AdminTicketDto> {
    return this.http.put<AdminTicketDto>(`${this.base}/${id}/reply`, { reply });
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.base}/${id}`, { responseType: 'text' as 'json' });
  }
}
