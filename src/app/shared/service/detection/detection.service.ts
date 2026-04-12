import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface DetectionResult {
  status: string;
  face_detected: boolean;
  eyes_closed: boolean;
  yawning: boolean;
  looking_away: boolean;
  attention_score: number;
  attention_level: string;
  recommend_breathing: boolean;
  remark: string | null;
  remark_type: string | null;
  expression: string | null;
}

export interface DetectionRemarkItem {
  id: number;
  studentId: number;
  studentName: string;
  courseId: number;
  courseTitle: string;
  lessonId: number | null;
  remarkType: string;
  remarkMessage: string;
  attentionScore: number | null;
  detectedAt: string;
}

export interface DetectionSummary {
  studentId: number;
  studentName: string;
  studentEmail: string;
  courseId: number;
  courseTitle: string;
  totalRemarks: number;
  typeCounts: Record<string, number>;
  avgAttentionScore: number | null;
  lastDetectedAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class DetectionService {

  private apiUrl = environment.apiUrl;
  private ws: WebSocket | null = null;
  private wsUrl = 'ws://localhost:5001/ws/detect';

  /** Observable that emits each detection result from the WebSocket */
  public detection$ = new Subject<DetectionResult>();

  /** Whether the WebSocket is currently connected */
  public connected = false;

  constructor(private http: HttpClient) {}

  // ═══ WebSocket ═══

  connectWebSocket(): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) return;

    this.ws = new WebSocket(this.wsUrl);

    this.ws.onopen = () => {
      this.connected = true;
      console.log('[CV] WebSocket connected');
    };

    this.ws.onmessage = (event) => {
      try {
        const result: DetectionResult = JSON.parse(event.data);
        this.detection$.next(result);
      } catch (e) {
        console.error('[CV] Failed to parse detection result', e);
      }
    };

    this.ws.onerror = (err) => {
      console.error('[CV] WebSocket error', err);
    };

    this.ws.onclose = () => {
      this.connected = false;
      console.log('[CV] WebSocket disconnected');
    };
  }

  sendFrame(base64Frame: string): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify({ frame: base64Frame }));
    }
  }

  disconnectWebSocket(): void {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
      this.connected = false;
    }
  }

  // ═══ REST API — Student ═══

  saveRemark(body: {
    courseId: number;
    lessonId?: number | null;
    remarkType: string;
    remarkMessage: string;
    attentionScore?: number;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/detection-remarks`, body);
  }

  getMyRemarks(courseId: number): Observable<DetectionRemarkItem[]> {
    return this.http.get<DetectionRemarkItem[]>(
      `${this.apiUrl}/detection-remarks/my`, { params: { courseId: courseId.toString() } }
    );
  }

  // ═══ REST API — Admin ═══

  getAdminSummary(): Observable<DetectionSummary[]> {
    return this.http.get<DetectionSummary[]>(`${this.apiUrl}/admin/detection-remarks/summary`);
  }

  getRemarksByStudent(studentId: number): Observable<DetectionRemarkItem[]> {
    return this.http.get<DetectionRemarkItem[]>(
      `${this.apiUrl}/admin/detection-remarks/by-student`, { params: { studentId: studentId.toString() } }
    );
  }

  getRemarksByCourse(courseId: number): Observable<DetectionRemarkItem[]> {
    return this.http.get<DetectionRemarkItem[]>(
      `${this.apiUrl}/admin/detection-remarks/by-course`, { params: { courseId: courseId.toString() } }
    );
  }

  getRemarksByStudentAndCourse(studentId: number, courseId: number): Observable<DetectionRemarkItem[]> {
    return this.http.get<DetectionRemarkItem[]>(
      `${this.apiUrl}/admin/detection-remarks/by-student-course`,
      { params: { studentId: studentId.toString(), courseId: courseId.toString() } }
    );
  }

  // ═══ REST API — Instructor ═══

  getInstructorRemarksByCourse(courseId: number): Observable<DetectionRemarkItem[]> {
    return this.http.get<DetectionRemarkItem[]>(
      `${this.apiUrl}/instructor/detection-remarks/by-course`, { params: { courseId: courseId.toString() } }
    );
  }

  getInstructorRemarksByStudentCourse(studentId: number, courseId: number): Observable<DetectionRemarkItem[]> {
    return this.http.get<DetectionRemarkItem[]>(
      `${this.apiUrl}/instructor/detection-remarks/by-student-course`,
      { params: { studentId: studentId.toString(), courseId: courseId.toString() } }
    );
  }
}
