import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface CertificateDto {
  id: number;
  courseId: number;
  courseTitle: string;
  studentName: string;
  certificateCode: string;
  issuedAt: string;
}

@Injectable({ providedIn: 'root' })
export class CertificateService {
  private readonly api = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getMyCertificates(): Observable<CertificateDto[]> {
    return this.http.get<CertificateDto[]>(`${this.api}/student/certificates`);
  }

  generateCertificate(courseId: number): Observable<CertificateDto> {
    return this.http.post<CertificateDto>(`${this.api}/student/certificates/generate/${courseId}`, {});
  }

  getCertificateById(id: number): Observable<CertificateDto> {
    return this.http.get<CertificateDto>(`${this.api}/student/certificates/${id}`);
  }

  /** Public — no auth needed */
  verifyByCode(code: string): Observable<CertificateDto> {
    return this.http.get<CertificateDto>(`${this.api}/courses/certificates/verify/${code}`);
  }
}
