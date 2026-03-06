import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // ═══════════════════════════════════════════════════════════════════════
  //  INSTRUCTOR
  // ═══════════════════════════════════════════════════════════════════════

  getInstructorQuizzes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/instructor/quiz`);
  }

  getQuizzesByCourse(courseId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/instructor/quiz/course/${courseId}`);
  }

  getQuizByLesson(lessonId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/instructor/quiz/lesson/${lessonId}`);
  }

  createQuiz(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/instructor/quiz`, data);
  }

  updateQuiz(quizId: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/instructor/quiz/${quizId}`, data);
  }

  deleteQuiz(quizId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/instructor/quiz/${quizId}`, { responseType: 'text' });
  }

  // Questions
  getQuestions(quizId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/instructor/quiz/${quizId}/questions`);
  }

  addQuestion(quizId: number, data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/instructor/quiz/${quizId}/questions`, data);
  }

  updateQuestion(questionId: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/instructor/quiz/questions/${questionId}`, data);
  }

  deleteQuestion(questionId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/instructor/quiz/questions/${questionId}`, { responseType: 'text' });
  }

  // Résultats
  getQuizResults(quizId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/instructor/quiz/${quizId}/results`);
  }

  getAttemptDetailInstructor(attemptId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/instructor/quiz/attempt/${attemptId}`);
  }

  // ═══════════════════════════════════════════════════════════════════════
  //  STUDENT
  // ═══════════════════════════════════════════════════════════════════════

  getStudentQuizzes(courseId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/student/quiz/course/${courseId}`);
  }

  getAllStudentQuizzes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/student/quiz/all`);
  }

  startQuiz(quizId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/student/quiz/${quizId}/start`);
  }

  submitQuiz(quizId: number, data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/student/quiz/${quizId}/submit`, data);
  }

  getAttemptDetailStudent(attemptId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/student/quiz/attempt/${attemptId}`);
  }
}
