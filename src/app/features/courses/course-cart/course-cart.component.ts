import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../../shared/service/routes/routes';
import { CourseService } from '../../../shared/service/course/course.service';

@Component({
  selector: 'app-course-cart',
  imports: [CommonModule, RouterLink],
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

  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit(): void {
    if (!localStorage.getItem('token')) {
      this.isGuest = true;
      const raw: any[] = JSON.parse(localStorage.getItem('guest_cart') || '[]');
      this.items = raw.map((c: any) => ({
        courseId: c.id,
        courseTitle: c.title,
        courseImage: c.coverImage,
        coursePrice: +(c.effectivePrice ?? c.price ?? 0),
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
          coursePrice: +(item.effectivePrice ?? item.originalPrice ?? 0),
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
    return this.items.reduce((sum, item) => sum + (item.coursePrice || 0), 0);
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
    this.courseService.createCheckoutSession(courseId).subscribe({
      next: (res) => { window.location.href = res.url; },
      error: (err) => {
        this.checkingOutId = null;
        this.errorMessage = err.error?.message || err.error?.error || 'Erreur lors du paiement';
        setTimeout(() => this.errorMessage = '', 5000);
      }
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
