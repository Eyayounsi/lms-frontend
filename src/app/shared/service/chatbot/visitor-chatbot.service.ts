import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface VisitorChatbotMessageRequest {
  message: string;
}

export interface VisitorChatbotMessageResponse {
  reply: string;
}

@Injectable({
  providedIn: 'root'
})
export class VisitorChatbotService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  ask(message: string): Observable<VisitorChatbotMessageResponse> {
    const payload: VisitorChatbotMessageRequest = { message };
    return this.http.post<VisitorChatbotMessageResponse>(`${this.apiUrl}/public/chatbot/message`, payload);
  }
}
