import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface CourseAnalyticsDto {
  courseId: number;
  title: string;
  coverImage: string | null;
  instructorName: string;
  enrollmentCount: number;
  totalDetections: number;
  avgAttentionScore: number;
  concentrationRate: number;
  fatigueRate: number;
  distractionRate: number;
  detectionBreakdown: Record<string, number>;
  avgRating: number | null;
  reviewCount: number;
  engagementScore: number;
  recommendationType: string;
  recommendationBadge: string;
  recommendationColor: string;
  recommendationIcon: string;
  recommendationMessage: string;
}

export interface AdminAnalyticsDto {
  platformAvgAttention: number;
  platformConcentrationRate: number;
  platformFatigueRate: number;
  platformDistractionRate: number;
  platformTotalDetections: number;
  platformTotalEnrollments: number;
  platformAvgRating: number;
  allCourses: CourseAnalyticsDto[];
  topEngagementCourses: CourseAnalyticsDto[];
  topRatedCourses: CourseAnalyticsDto[];
  recommendedForFeatured: CourseAnalyticsDto[];
  needsImprovementCourses: CourseAnalyticsDto[];
}

@Injectable({ providedIn: 'root' })
export class AnalyticsService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  /** Analytics pédagogiques Instructor */
  getInstructorAnalytics(): Observable<CourseAnalyticsDto[]> {
    return this.http.get<CourseAnalyticsDto[]>(`${this.apiUrl}/instructor/analytics`);
  }

  /** Analytics stratégiques Admin */
  getAdminAnalytics(): Observable<AdminAnalyticsDto> {
    return this.http.get<AdminAnalyticsDto>(`${this.apiUrl}/admin/analytics`);
  }
}
