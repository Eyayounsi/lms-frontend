import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface TicketDto {
  id: number;
  ticketId: string;
  date: string;
  subject: string;
  category: string;
  priority: string;
  status: string;
  description: string;
}

export interface CreateTicketRequest {
  subject: string;
  category: string;
  priority: string;
  description?: string;
}

@Injectable({ providedIn: 'root' })
export class TicketService {
  private readonly api = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getMyTickets(): Observable<TicketDto[]> {
    return this.http.get<TicketDto[]>(`${this.api}/user/tickets`);
  }

  createTicket(data: CreateTicketRequest): Observable<TicketDto> {
    return this.http.post<TicketDto>(`${this.api}/user/tickets`, data);
  }

  updateTicket(id: number, data: Partial<CreateTicketRequest>): Observable<TicketDto> {
    return this.http.put<TicketDto>(`${this.api}/user/tickets/${id}`, data);
  }

  deleteTicket(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/user/tickets/${id}`);
  }
}
