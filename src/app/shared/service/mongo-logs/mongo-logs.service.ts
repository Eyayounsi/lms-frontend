import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface AuthLogItem {
  id: string;
  createdAt: string;
  provider: string;
  email: string;
  success: boolean;
  role: string;
  reason: string;
}

export interface RecommendationLogItem {
  id: string;
  createdAt: string;
  courseId: number;
  recommendationType: string;
  recommendationBadge: string;
  engagementScore: number;
  totalDetections: number;
  enrollmentCount: number;
  avgRating: number | null;
}

export interface AiSessionLogItem {
  id: string;
  createdAt: string;
  sessionId: string;
  userEmail: string;
  model: string;
  prompt: string;
  response: string;
  latencyMs: number | null;
  success: boolean;
}

export interface PageResponse<T> {
  content: T[];
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MongoLogsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAuthLogs(page: number, size: number, provider = '', email = ''): Observable<PageResponse<AuthLogItem>> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set('provider', provider)
      .set('email', email);
    return this.http.get<PageResponse<AuthLogItem>>(`${this.apiUrl}/superadmin/mongo-logs/auth`, { params });
  }

  getRecommendationLogs(page: number, size: number, type = ''): Observable<PageResponse<RecommendationLogItem>> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set('type', type);
    return this.http.get<PageResponse<RecommendationLogItem>>(`${this.apiUrl}/superadmin/mongo-logs/recommendations`, { params });
  }

  getAiSessionLogs(page: number, size: number, sessionId = '', userEmail = ''): Observable<PageResponse<AiSessionLogItem>> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set('sessionId', sessionId)
      .set('userEmail', userEmail);
    return this.http.get<PageResponse<AiSessionLogItem>>(`${this.apiUrl}/superadmin/mongo-logs/ai-sessions`, { params });
  }
}
