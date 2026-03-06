import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { routes } from '../../../shared/service/routes/routes';
import { CourseService } from '../../../shared/service/course/course.service';

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
        this.items = data;
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
    if (!path) return 'assets/img/course/course-01.jpg';
    const clean = path.startsWith('/') ? path : '/' + path;
    return `http://localhost:8081${clean}`;
  }

  private showSuccess(msg: string): void {
    this.successMessage = msg;
    this.errorMessage = '';
    setTimeout(() => this.successMessage = '', 3000);
  }
}
