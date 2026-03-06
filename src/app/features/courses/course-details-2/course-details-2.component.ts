import { Component, OnInit } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import { LightGallery } from 'lightgallery/lightgallery';
import { routes } from '../../../shared/service/routes/routes';
import Aos from 'aos';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LightgalleryModule } from 'lightgallery/angular';
import { CourseService } from '../../../shared/service/course/course.service';

@Component({
  selector: 'app-course-details-2',
  imports: [CommonModule, RouterLink, FormsModule, LightgalleryModule],
  templateUrl: './course-details-2.component.html',
  styleUrl: './course-details-2.component.scss'
})
export class CourseDetails2Component implements OnInit {
  routes = routes;
  readonly stars = [1, 2, 3, 4, 5];

  // LightGallery
  settings = { counter: false, plugins: [lgZoom, lgVideo] };
  private lightGallery!: LightGallery;
  private needRefresh = false;
  ngAfterViewChecked(): void {
    if (this.needRefresh) { this.lightGallery?.refresh(); this.needRefresh = false; }
  }
  onInit = (detail: { instance: LightGallery }): void => { this.lightGallery = detail.instance; };

  // Data
  course: any = null;
  loading = true;
  errorMessage = '';
  successMessage = '';

  // Reviews
  reviews: any[] = [];
  loadingReviews = false;

  // Review form (student only)
  myRating = 5;
  myComment = '';
  submitingReview = false;
  reviewMsg = '';

  // Auth
  isLoggedIn = false;
  isEnrolled = false;
  isInCart = false;
  buyingCourse = false;
  addingToCart = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    Aos.init({ duration: 1200, once: true });
    this.isLoggedIn = !!localStorage.getItem('token');

    this.route.queryParams.subscribe(params => {
      const courseId = params['courseId'];
      if (courseId) {
        this.loadCourse(+courseId);
      } else {
        this.loading = false;
        this.errorMessage = 'Aucun cours spécifié.';
      }
    });
  }

  loadCourse(courseId: number): void {
    this.loading = true;
    this.courseService.getCourseDetail(courseId).subscribe({
      next: (data) => {
        this.course = data;
        this.loading = false;
        this.needRefresh = true;
        this.loadReviews(courseId);
        if (this.isLoggedIn) {
          const role = localStorage.getItem('role') || '';
          const isStudent = role.includes('STUDENT');
          if (isStudent) {
            this.courseService.getMyEnrolledCourses().subscribe({
              next: (items) => { this.isEnrolled = items.some((c: any) => c.id === courseId); },
              error: () => {}
            });
            this.courseService.getCart().subscribe({
              next: (cartItems) => { this.isInCart = cartItems.some((c: any) => c.courseId === courseId); },
              error: () => {}
            });
          }
        }
      },
      error: () => { this.errorMessage = 'Cours introuvable.'; this.loading = false; }
    });
  }

  loadReviews(courseId: number): void {
    this.loadingReviews = true;
    this.courseService.getCourseReviews(courseId).subscribe({
      next: (data) => { this.reviews = data; this.loadingReviews = false; },
      error: () => { this.loadingReviews = false; }
    });
  }

  submitReview(): void {
    if (!this.isLoggedIn) { this.router.navigate(['/auth/login']); return; }
    this.submitingReview = true;
    this.courseService.upsertReview(this.course.id, { rating: this.myRating, comment: this.myComment }).subscribe({
      next: () => {
        this.submitingReview = false;
        this.reviewMsg = 'Avis publié !';
        this.myComment = '';
        this.loadReviews(this.course.id);
        setTimeout(() => this.reviewMsg = '', 3000);
      },
      error: (e: any) => { this.submitingReview = false; this.reviewMsg = e.error?.message || 'Erreur.'; }
    });
  }

  // Utilities
  getTotalLessons(): number {
    if (!this.course?.sections) return 0;
    return this.course.sections.reduce((sum: number, s: any) => sum + (s.lessons?.length ?? 0), 0);
  }

  formatPrice(): string {
    if (!this.course) return '';
    const price = +(this.course.effectivePrice ?? this.course.price ?? 0);
    return price === 0 ? 'Gratuit' : price.toFixed(2) + ' €';
  }

  isCourseFree(): boolean {
    return +(this.course?.effectivePrice ?? this.course?.price ?? 0) === 0;
  }

  enrollFree(): void {
    if (!this.isLoggedIn) { this.router.navigate(['/auth/login']); return; }
    this.buyingCourse = true;
    this.courseService.enrollFree(this.course.id).subscribe({
      next: () => {
        this.buyingCourse = false;
        this.isEnrolled = true;
        this.showSuccess('Inscription réussie ! Vous pouvez maintenant accéder au cours.');
      },
      error: (e: any) => {
        this.buyingCourse = false;
        this.errorMessage = e.error?.message || 'Erreur lors de l\'inscription.';
        setTimeout(() => this.errorMessage = '', 5000);
      }
    });
  }

  buyCourse(): void {
    if (!this.isLoggedIn) { this.router.navigate(['/auth/login']); return; }
    this.buyingCourse = true;
    this.courseService.createCheckoutSession(this.course.id).subscribe({
      next: (r) => { window.location.href = r.url; },
      error: (e: any) => {
        this.buyingCourse = false;
        this.errorMessage = e.error?.error || 'Erreur lors du paiement.';
        setTimeout(() => this.errorMessage = '', 5000);
      }
    });
  }

  addToCart(): void {
    // Guest: save to localStorage, no API call
    if (!this.isLoggedIn) {
      const cart: any[] = JSON.parse(localStorage.getItem('guest_cart') || '[]');
      if (!cart.some((c: any) => c.id === this.course.id)) {
        cart.push({
          id: this.course.id,
          title: this.course.title,
          coverImage: this.course.coverImage,
          price: this.course.price,
          effectivePrice: this.course.effectivePrice,
          instructorName: this.course.instructorName
        });
        localStorage.setItem('guest_cart', JSON.stringify(cart));
        this.showSuccess('Ajouté au panier ! Connectez-vous pour finaliser l\'achat.');
      } else {
        this.showSuccess('Ce cours est déjà dans votre panier.');
      }
      return;
    }
    // Non-student (instructor, admin) → redirect to login as student
    const role = localStorage.getItem('role') || '';
    if (!role.includes('STUDENT')) {
      this.router.navigate([this.routes.login]);
      return;
    }
    // Already enrolled
    if (this.isEnrolled) { this.watchCourse(); return; }
    // Already in cart
    if (this.isInCart) { this.router.navigate([this.routes.cart]); return; }
    this.addingToCart = true;
    this.courseService.addToCart(this.course.id).subscribe({
      next: () => {
        this.addingToCart = false;
        this.isInCart = true;
        this.showSuccess('Ajouté au panier !');
      },
      error: (e: any) => {
        this.addingToCart = false;
        const status = e.status;
        if (status === 500 || status === 409 || status === 400) {
          // Backend throws when already in cart or already enrolled
          this.isInCart = true;
          this.router.navigate([this.routes.cart]);
        } else {
          this.errorMessage = e.error?.message || 'Erreur lors de l\'ajout au panier';
          setTimeout(() => this.errorMessage = '', 5000);
        }
      }
    });
  }

  watchCourse(): void {
    this.router.navigate([this.routes.courseWatch], { queryParams: { courseId: this.course.id } });
  }

  getLevelLabel(l: string): string {
    const m: Record<string, string> = { BEGINNER: 'Débutant', INTERMEDIATE: 'Intermédiaire', ADVANCED: 'Avancé' };
    return m[l] ?? l;
  }

  getImageUrl(path: string): string {
    if (!path) return 'assets/img/course/course-01.jpg';
    return `http://localhost:8081/${path}`;
  }

  getAvatarUrl(path: string): string {
    if (!path) return 'assets/img/avatar/avatar10.jpg';
    return `http://localhost:8081/${path}`;
  }

  private showSuccess(msg: string): void {
    this.successMessage = msg;
    setTimeout(() => this.successMessage = '', 3000);
  }
}
