import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getConversations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user/messages/conversations`);
  }

  getOrCreateConversation(otherUserId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/messages/conversations/${otherUserId}`, {});
  }

  getMessages(conversationId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user/messages/conversations/${conversationId}/messages`);
  }

  sendMessage(conversationId: number, data: { content: string; messageType?: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/messages/conversations/${conversationId}/messages`, data);
  }

  markAsRead(conversationId: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/user/messages/conversations/${conversationId}/read`, {}, { responseType: 'text' });
  }

  getUnreadCount(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/messages/unread-count`);
  }
}
