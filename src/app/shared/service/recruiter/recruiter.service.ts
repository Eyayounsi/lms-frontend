import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface RecruiterStats {
  sharedProfiles: number;
  totalStudents: number;
  pendingOffers: number;
  scheduledInterviews: number;
}

export interface SharedProfile {
  id: number;
  fullName: string;
  email: string;
  avatarPath: string | null;
  bio: string | null;
  designation: string | null;
  linkedinUrl: string | null;
  educationJson: string | null;
  experienceJson: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class RecruiterService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getStats(): Observable<RecruiterStats> {
    return this.http.get<RecruiterStats>(`${this.apiUrl}/recruiter/stats`);
  }

  getSharedProfiles(): Observable<SharedProfile[]> {
    return this.http.get<SharedProfile[]>(`${this.apiUrl}/recruiter/shared-profiles`);
  }
}
