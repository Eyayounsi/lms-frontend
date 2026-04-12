import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { routes } from '../../../shared/service/routes/routes';
import { CourseService } from '../../../shared/service/course/course.service';
import { resolveCourseImage } from '../../../shared/utils/course-image.util';

@Component({
    selector: 'app-student-wishlist',
    templateUrl: './student-wishlist.component.html',
    styleUrl: './student-wishlist.component.scss',
    imports: [CommonModule, RouterLink]
})
export class StudentWishlistComponent implements OnInit {
  public routes = routes;

  items: any[] = [];
  loading = true;
  errorMessage = '';
  successMessage = '';

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadWishlist();
  }

  loadWishlist(): void {
    this.loading = true;
    this.courseService.getWishlist().subscribe({
      next: (data) => {
        this.items = (data || []).map((item: any) => {
          const originalPrice = +(item.originalPrice ?? item.price ?? 0);
          const effectivePrice = +(item.effectivePrice ?? originalPrice);
          return {
            courseId: item.courseId,
            courseTitle: item.courseTitle,
            courseImage: item.courseCoverImage,
            instructorName: item.instructorName,
            originalPrice,
            effectivePrice,
            onSale: !!item.onSale && originalPrice > 0 && effectivePrice < originalPrice
          };
        });
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = 'Erreur lors du chargement de la wishlist';
        this.loading = false;
        console.error(err);
      }
    });
  }

  removeFromWishlist(courseId: number): void {
    this.courseService.removeFromWishlist(courseId).subscribe({
      next: () => {
        this.items = this.items.filter(i => i.courseId !== courseId);
        this.showSuccess('Cours retiré de la wishlist');
      },
      error: (err) => this.errorMessage = err.error?.message || 'Erreur lors du retrait'
    });
  }

  moveToCart(courseId: number): void {
    this.courseService.moveToCart(courseId).subscribe({
      next: () => {
        this.items = this.items.filter(i => i.courseId !== courseId);
        this.showSuccess('Cours déplacé dans le panier !');
      },
      error: (err) => this.errorMessage = err.error?.message || 'Erreur lors du déplacement'
    });
  }

  buyCourse(courseId: number): void {
    this.courseService.createCheckoutSession(courseId).subscribe({
      next: (res) => { window.location.href = res.url; },
      error: (err) => this.errorMessage = err.error?.message || 'Erreur lors du paiement'
    });
  }

  getImageUrl(path: string): string {
    return resolveCourseImage(path);
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

  private showSuccess(msg: string): void {
    this.successMessage = msg;
    this.errorMessage = '';
    setTimeout(() => this.successMessage = '', 3000);
  }
}
