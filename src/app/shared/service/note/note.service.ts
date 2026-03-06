import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCourseNote(courseId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/student/notes/course/${courseId}`);
  }

  saveCourseNote(courseId: number, content: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/student/notes/course/${courseId}`, { content });
  }

  getLessonNote(lessonId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/student/notes/lesson/${lessonId}`);
  }

  saveLessonNote(lessonId: number, content: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/student/notes/lesson/${lessonId}`, { content });
  }
}
