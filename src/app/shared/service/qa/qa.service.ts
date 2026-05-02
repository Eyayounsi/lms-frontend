import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QaService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Questions
  askQuestion(data: { courseId: number; lessonId?: number; title: string; body: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/qa/questions`, data);
  }

  getQuestionsByCourse(courseId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user/qa/course/${courseId}`);
  }

  getQuestionsByLesson(lessonId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user/qa/lesson/${lessonId}`);
  }

  getQuestionDetail(questionId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/qa/questions/${questionId}`);
  }

  deleteQuestion(questionId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/user/qa/questions/${questionId}`, { responseType: 'text' });
  }

  updateQuestion(questionId: number, data: { title?: string; body?: string }): Observable<any> {
    return this.http.put(`${this.apiUrl}/user/qa/questions/${questionId}`, data);
  }

  /** Toutes les questions posées par l'utilisateur connecté */
  getMyQuestions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user/qa/my-questions`);
  }

  /** Toutes les questions des cours auxquels l'étudiant est inscrit */
  getEnrolledQuestions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user/qa/enrolled-questions`);
  }

  /** Toutes les questions des cours de l'instructeur connecté */
  getInstructorQuestions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user/qa/instructor-questions`);
  }

  // Réponses
  answerQuestion(questionId: number, data: { body: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/qa/questions/${questionId}/answers`, data);
  }

  deleteAnswer(answerId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/user/qa/answers/${answerId}`, { responseType: 'text' });
  }

  updateAnswer(answerId: number, data: { body: string }): Observable<any> {
    return this.http.put(`${this.apiUrl}/user/qa/answers/${answerId}`, data);
  }
}
