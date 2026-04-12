import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface BlogPostDto {
  id?: number;
  title: string;
  slug?: string;
  summary?: string;
  content?: string;
  coverImage?: string;
  status?: string;
  authorName?: string;
  createdAt?: string;
  updatedAt?: string;
}

@Injectable({ providedIn: 'root' })
export class AdminBlogService {
  private base = `${environment.apiUrl}/admin/blog`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<BlogPostDto[]> {
    return this.http.get<BlogPostDto[]>(this.base);
  }

  create(dto: BlogPostDto): Observable<BlogPostDto> {
    return this.http.post<BlogPostDto>(this.base, dto);
  }

  update(id: number, dto: BlogPostDto): Observable<BlogPostDto> {
    return this.http.put<BlogPostDto>(`${this.base}/${id}`, dto);
  }

  toggle(id: number): Observable<BlogPostDto> {
    return this.http.put<BlogPostDto>(`${this.base}/${id}/toggle`, {});
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.base}/${id}`, { responseType: 'text' as 'json' });
  }

  uploadImage(file: File): Observable<{ url: string }> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<{ url: string }>(`${this.base}/upload-image`, formData);
  }
}
