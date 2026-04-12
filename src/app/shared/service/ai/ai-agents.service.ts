import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface AiAgentRequest {
  message: string;
  userId?: string;
  sessionId?: string;
  courseId?: string;
  context?: Record<string, unknown>;
  history?: Array<{ role: 'user' | 'assistant'; content: string }>;
}

export interface AiAgentResponse {
  reply: string;
  provider?: string;
  fallbackUsed?: boolean;
  latencyMs?: number;
}

@Injectable({ providedIn: 'root' })
export class AiAgentsService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private readonly http: HttpClient) {}

  visitorSupport(payload: AiAgentRequest): Observable<AiAgentResponse> {
    return this.http.post<AiAgentResponse>(`${this.apiUrl}/public/chatbot/visitor-support`, payload);
  }

  studentTutor(payload: AiAgentRequest): Observable<AiAgentResponse> {
    return this.http.post<AiAgentResponse>(`${this.apiUrl}/ai/chatbot/student/tutor`, payload);
  }

  instructorQuiz(payload: AiAgentRequest): Observable<AiAgentResponse> {
    return this.http.post<AiAgentResponse>(`${this.apiUrl}/ai/chatbot/instructor/quiz`, payload);
  }

  instructorPlan(payload: AiAgentRequest): Observable<AiAgentResponse> {
    return this.http.post<AiAgentResponse>(`${this.apiUrl}/ai/chatbot/instructor/plan`, payload);
  }

  instructorCopilot(payload: AiAgentRequest): Observable<AiAgentResponse> {
    return this.http.post<AiAgentResponse>(`${this.apiUrl}/ai/chatbot/instructor/copilot`, payload);
  }

  adminCopilot(payload: AiAgentRequest): Observable<AiAgentResponse> {
    return this.http.post<AiAgentResponse>(`${this.apiUrl}/ai/chatbot/admin/copilot`, payload);
  }
}
