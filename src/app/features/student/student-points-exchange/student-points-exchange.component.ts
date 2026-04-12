import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { forkJoin } from 'rxjs';
import {
  ChallengeService,
  ChallengesResponse,
  CouponItem,
  ExchangeResponse
} from '../../../shared/service/challenge/challenge.service';
import { routes } from '../../../shared/service/routes/routes';

@Component({
  selector: 'app-student-points-exchange',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './student-points-exchange.component.html',
  styleUrls: ['./student-points-exchange.component.scss']
})
export class StudentPointsExchangeComponent implements OnInit {
  routes = routes;
  loading = true;
  exchanging = false;
  error = '';
  successMsg = '';

  points = 0;
  totalEarnedPoints = 0;
  unlockedCount = 0;
  totalCount = 0;
  coupons: CouponItem[] = [];

  readonly TIERS = [
    { tier: 1, points: 100, discount: 10, color: 'warning', icon: 'ti-star' },
    { tier: 2, points: 200, discount: 20, color: 'primary', icon: 'ti-diamond' },
    { tier: 3, points: 300, discount: 30, color: 'danger', icon: 'ti-crown' }
  ];

  constructor(private challengeService: ChallengeService) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.error = '';
    this.successMsg = '';

    forkJoin({
      challenges: this.challengeService.getChallenges(),
      coupons: this.challengeService.getCoupons()
    }).subscribe({
      next: ({ challenges, coupons }: { challenges: ChallengesResponse; coupons: CouponItem[] }) => {
        this.points = challenges.points;
        this.totalEarnedPoints = challenges.totalEarnedPoints;
        this.unlockedCount = challenges.unlockedCount;
        this.totalCount = challenges.totalCount;
        this.coupons = coupons;
        this.loading = false;
      },
      error: () => {
        this.error = 'Impossible de charger vos points.';
        this.loading = false;
      }
    });
  }

  canExchangeTier(tierPoints: number): boolean {
    return this.points >= tierPoints && !this.exchanging;
  }

  exchange(tier: number): void {
    const t = this.TIERS.find(t => t.tier === tier);
    if (!t || !this.canExchangeTier(t.points)) return;
    this.exchanging = true;
    this.error = '';
    this.successMsg = '';

    this.challengeService.exchangePoints(tier).subscribe({
      next: (res: ExchangeResponse) => {
        this.successMsg = `Coupon généré : ${res.couponCode} (${res.discountPercent}% de réduction)`;
        this.points = res.pointsRemaining;
        this.exchanging = false;
        this.challengeService.getCoupons().subscribe({
          next: (list: CouponItem[]) => { this.coupons = list; },
          error: () => {}
        });
      },
      error: () => {
        this.error = "Échec de l'échange. Vérifiez vos points.";
        this.exchanging = false;
      }
    });
  }

  copyCoupon(code: string): void {
    navigator.clipboard.writeText(code);
  }
}
