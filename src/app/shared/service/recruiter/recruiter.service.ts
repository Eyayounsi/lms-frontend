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

export interface CertificateItem {
  id: number;
  courseName: string;
  certificateCode: string;
  issuedAt: string;
}

export interface CertifiedStudent {
  id: number;
  fullName: string;
  email: string;
  avatarPath: string | null;
  bio: string | null;
  designation: string | null;
  linkedinUrl: string | null;
  certificates: CertificateItem[];
}

export interface JobOffer {
  id: number;
  title: string;
  description: string | null;
  offerType: 'EMPLOI' | 'STAGE';
  location: string | null;
  contractType: string | null;
  requiredSkills: string | null;
  deadline: string | null;
  status: 'ACTIVE' | 'CLOSED' | 'DRAFT';
  createdAt: string;
  updatedAt: string;
  // présent uniquement dans la vue étudiant (public)
  recruiterName?: string | null;
  recruiterId?: number | null;
  recruiterEmail?: string | null;
  recruiterPhone?: string | null;
  companyName?: string | null;
}

export interface JobOfferForm {
  title: string;
  description: string;
  offerType: 'EMPLOI' | 'STAGE';
  location: string;
  contractType: string;
  requiredSkills: string;
  deadline: string;
  status: 'ACTIVE' | 'CLOSED' | 'DRAFT';
}

export interface ConversationSummary {
  conversationId: number;
  participantId: number;
  participantName: string;
  participantAvatar: string | null;
  participantRole: string;
  unreadCount: number;
  lastMessage: string | null;
  lastMessageAt: string;
  lastMessageIsOwn: boolean;
}

export interface ChatMessage {
  id: number;
  content: string;
  messageType: string;
  senderId: number;
  senderName: string;
  senderAvatar: string | null;
  isRead: boolean;
  sentAt: string;
  readAt: string | null;
}

export interface StartConversationResponse {
  conversationId: number;
  participantId: number;
  participantName: string;
  participantAvatar: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class RecruiterService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // ── Stats & Profiles ──────────────────────────────────────────────────────

  getStats(): Observable<RecruiterStats> {
    return this.http.get<RecruiterStats>(`${this.apiUrl}/recruiter/stats`);
  }

  getSharedProfiles(): Observable<SharedProfile[]> {
    return this.http.get<SharedProfile[]>(`${this.apiUrl}/recruiter/shared-profiles`);
  }

  // ── Certified Students ────────────────────────────────────────────────────

  getCertifiedStudents(search: string = ''): Observable<CertifiedStudent[]> {
    const params = search ? `?search=${encodeURIComponent(search)}` : '';
    return this.http.get<CertifiedStudent[]>(`${this.apiUrl}/recruiter/certified-students${params}`);
  }

  // ── Job Offers ────────────────────────────────────────────────────────────

  getJobOffers(): Observable<JobOffer[]> {
    return this.http.get<JobOffer[]>(`${this.apiUrl}/recruiter/job-offers`);
  }

  /** Toutes les offres ACTIVE publiées — accessible aux étudiants */
  getPublicJobOffers(type?: string): Observable<JobOffer[]> {
    const params = type ? `?type=${encodeURIComponent(type)}` : '';
    return this.http.get<JobOffer[]>(`${this.apiUrl}/student/job-offers${params}`);
  }

  createJobOffer(data: Partial<JobOfferForm>): Observable<JobOffer> {
    return this.http.post<JobOffer>(`${this.apiUrl}/recruiter/job-offers`, data);
  }

  updateJobOffer(id: number, data: Partial<JobOfferForm>): Observable<JobOffer> {
    return this.http.put<JobOffer>(`${this.apiUrl}/recruiter/job-offers/${id}`, data);
  }

  deleteJobOffer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/recruiter/job-offers/${id}`);
  }

  // ── Messaging ─────────────────────────────────────────────────────────────

  getConversations(): Observable<ConversationSummary[]> {
    return this.http.get<ConversationSummary[]>(`${this.apiUrl}/recruiter/conversations`);
  }

  startConversation(studentId: number): Observable<StartConversationResponse> {
    return this.http.post<StartConversationResponse>(`${this.apiUrl}/recruiter/conversations/${studentId}`, {});
  }

  getMessages(conversationId: number): Observable<ChatMessage[]> {
    return this.http.get<ChatMessage[]>(`${this.apiUrl}/recruiter/conversations/${conversationId}/messages`);
  }

  sendMessage(conversationId: number, content: string): Observable<ChatMessage> {
    return this.http.post<ChatMessage>(`${this.apiUrl}/recruiter/conversations/${conversationId}/messages`, { content });
  }
}

