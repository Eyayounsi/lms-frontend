import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface ChallengeItem {
  id: number;
  code: string;
  title: string;
  description: string;
  iconClass: string;
  targetCount: number;
  currentCount: number;
  rewardPoints: number;
  unlocked: boolean;
  unlockedAt: string | null;
  progressPercent: number;
}

export interface ChallengesResponse {
  challenges: ChallengeItem[];
  points: number;
  totalEarnedPoints: number;
  unlockedCount: number;
  totalCount: number;
}

export interface CouponItem {
  id: number;
  couponCode: string;
  discountPercent: number;
  pointsSpent: number;
  used: boolean;
  status: 'Actif' | 'Utilisé' | 'Expiré';
  createdAt: string;
  expiresAt: string | null;
}

export interface ExchangeResponse {
  couponCode: string;
  discountPercent: number;
  pointsRemaining: number;
}

export interface CouponValidationResponse {
  valid: boolean;
  couponCode?: string;
  discountPercent?: number;
  error?: string;
}

@Injectable({ providedIn: 'root' })
export class ChallengeService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getChallenges(): Observable<ChallengesResponse> {
    return this.http.get<ChallengesResponse>(`${this.apiUrl}/student/challenges`);
  }

  exchangePoints(tier: number): Observable<ExchangeResponse> {
    return this.http.post<ExchangeResponse>(`${this.apiUrl}/student/challenges/exchange`, { tier });
  }

  getCoupons(): Observable<CouponItem[]> {
    return this.http.get<CouponItem[]>(`${this.apiUrl}/student/challenges/coupons`);
  }

  validateCoupon(couponCode: string): Observable<CouponValidationResponse> {
    return this.http.post<CouponValidationResponse>(
      `${this.apiUrl}/student/challenges/validate-coupon`,
      { couponCode }
    );
  }
}
