import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../../shared/service/routes/routes';
import { CourseService } from '../../../shared/service/course/course.service';
import { ChallengeService } from '../../../shared/service/challenge/challenge.service';
import { resolveCourseImage } from '../../../shared/utils/course-image.util';
import { AvatarFallbackComponent } from '../../../shared/components/avatar-fallback/avatar-fallback.component';

@Component({
  selector: 'app-course-cart',
  imports: [CommonModule, RouterLink, FormsModule, AvatarFallbackComponent],
  templateUrl: './course-cart.component.html',
  styleUrl: './course-cart.component.scss'
})
export class CourseCartComponent implements OnInit {
  routes = routes;

  items: any[] = [];
  loading = true;
  errorMessage = '';
  successMessage = '';
  checkingOutId: number | null = null;
  isGuest = false;

  // Coupon
  couponCode = '';
  couponValid = false;
  couponDiscount = 0;
  couponError = '';
  validatingCoupon = false;

  constructor(
    private courseService: CourseService,
    private challengeService: ChallengeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!localStorage.getItem('token')) {
      this.isGuest = true;
      const raw: any[] = JSON.parse(localStorage.getItem('guest_cart') || '[]');
      this.items = raw.map((c: any) => ({
        courseId: c.id,
        courseTitle: c.title,
        courseImage: c.coverImage,
        originalPrice: +(c.price ?? 0),
        effectivePrice: +(c.effectivePrice ?? c.price ?? 0),
        onSale: +(c.effectivePrice ?? c.price ?? 0) < +(c.price ?? 0),
        instructorName: c.instructorName
      }));
      this.loading = false;
    } else {
      const role = localStorage.getItem('role') || '';
      if (!role.includes('STUDENT')) {
        // Instructor / admin has no cart
        this.items = [];
        this.loading = false;
        this.errorMessage = 'Le panier est réservé aux étudiants.';
        return;
      }
      this.loadCart();
    }
  }

  loadCart(): void {
    this.loading = true;
    this.courseService.getCart().subscribe({
      next: (data) => {
        this.items = data.map((item: any) => ({
          courseId: item.courseId,
          courseTitle: item.courseTitle,
          courseImage: item.courseCoverImage,
          originalPrice: +(item.originalPrice ?? 0),
          effectivePrice: +(item.effectivePrice ?? item.originalPrice ?? 0),
          onSale: !!item.onSale && +(item.effectivePrice ?? item.originalPrice ?? 0) < +(item.originalPrice ?? 0),
          instructorName: item.instructorName
        }));
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = 'Erreur lors du chargement du panier';
        this.loading = false;
        console.error(err);
      }
    });
  }

  get total(): number {
    return this.items.reduce((sum, item) => sum + this.getCurrentPrice(item), 0);
  }

  removeFromCart(courseId: number): void {
    if (this.isGuest) {
      const raw: any[] = JSON.parse(localStorage.getItem('guest_cart') || '[]');
      const updated = raw.filter((c: any) => c.id !== courseId);
      localStorage.setItem('guest_cart', JSON.stringify(updated));
      this.items = this.items.filter(i => i.courseId !== courseId);
      this.showSuccess('Cours retiré du panier');
      return;
    }
    this.courseService.removeFromCart(courseId).subscribe({
      next: () => {
        this.items = this.items.filter(i => i.courseId !== courseId);
        this.showSuccess('Cours retiré du panier');
      },
      error: (err) => this.errorMessage = err.error?.message || 'Erreur lors du retrait'
    });
  }

  checkout(courseId: number): void {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/auth/login']);
      return;
    }
    this.checkingOutId = courseId;
    const code = this.couponValid ? this.sanitizeCouponCode(this.couponCode) : undefined;
    this.courseService.createCheckoutSession(courseId, code).subscribe({
      next: (res) => { window.location.href = res.url; },
      error: (err) => {
        this.checkingOutId = null;
        this.errorMessage = err.error?.message || err.error?.error || 'Erreur lors du paiement';
        setTimeout(() => this.errorMessage = '', 5000);
      }
    });
  }

  applyCoupon(): void {
    const sanitizedCode = this.sanitizeCouponCode(this.couponCode);
    this.couponCode = sanitizedCode;
    if (!sanitizedCode) return;

    this.validatingCoupon = true;
    this.couponError = '';
    this.couponValid = false;
    this.couponDiscount = 0;

    this.challengeService.validateCoupon(sanitizedCode).subscribe({
      next: (res) => {
        this.validatingCoupon = false;
        if (res.valid) {
          this.couponValid = true;
          this.couponDiscount = res.discountPercent || 0;
        } else {
          this.couponError = res.error || 'Code invalide';
        }
      },
      error: (err) => {
        this.validatingCoupon = false;
        this.couponError = err.error?.error || 'Code invalide ou expiré';
      }
    });
  }

  removeCoupon(): void {
    this.couponCode = '';
    this.couponValid = false;
    this.couponDiscount = 0;
    this.couponError = '';
  }

  getDiscountedPrice(price: number): number {
    if (!this.couponValid || this.couponDiscount <= 0) return price;
    return +(price * (1 - this.couponDiscount / 100)).toFixed(2);
  }

  getCurrentPrice(item: any): number {
    return +(item?.effectivePrice ?? item?.originalPrice ?? 0);
  }

  hasActivePromotion(item: any): boolean {
    const original = +(item?.originalPrice ?? 0);
    const effective = +(item?.effectivePrice ?? original);
    return !!item?.onSale && original > 0 && effective < original;
  }

  getPromotionPercent(item: any): number {
    const original = +(item?.originalPrice ?? 0);
    const effective = +(item?.effectivePrice ?? original);
    if (original <= 0 || effective >= original) {
      return 0;
    }
    return Math.round(((original - effective) / original) * 100);
  }

  getImageUrl(path: string): string {
    return resolveCourseImage(path);
  }

  getInstructorInitial(name?: string): string {
    const value = String(name || 'Formateur').trim();
    return (value.charAt(0) || 'F').toUpperCase();
  }

  onCouponInput(): void {
    this.couponCode = this.sanitizeCouponCode(this.couponCode);
  }

  getItemSubtitle(item: any): string {
    const parts = [];
    if (item?.instructorName) parts.push(item.instructorName);
    if (this.hasActivePromotion(item)) parts.push(`Promo -${this.getPromotionPercent(item)}%`);
    return parts.join(' · ');
  }

  trackByCourseId(_: number, item: any): number {
    return item?.courseId ?? 0;
  }

  private sanitizeCouponCode(code: string): string {
    return String(code || '')
      .toUpperCase()
      .replace(/[^A-Z0-9-]/g, '')
      .slice(0, 32);
  }

  private showSuccess(msg: string): void {
    this.successMessage = msg;
    this.errorMessage = '';
    setTimeout(() => this.successMessage = '', 3000);
  }
}
