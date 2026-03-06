import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

export interface NotificationDto {
  id: number;
  type: string;
  title: string;
  message: string;
  link: string;
  read: boolean;
  createdAt: string;
}

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private readonly api = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getMyNotifications(): Observable<NotificationDto[]> {
    return this.http.get<NotificationDto[]>(`${this.api}/notifications`);
  }

  getUnreadCount(): Observable<number> {
    return this.http.get<{ count: number }>(`${this.api}/notifications/unread-count`).pipe(
      map(res => res.count)
    );
  }

  markAsRead(id: number): Observable<void> {
    return this.http.put<void>(`${this.api}/notifications/${id}/read`, {});
  }

  markAllAsRead(): Observable<void> {
    return this.http.put<void>(`${this.api}/notifications/read-all`, {});
  }
}
