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
import { resolveCourseImage } from '../../../shared/utils/course-image.util';
import { resolveAvatarImage } from '../../../shared/utils/avatar-image.util';

@Component({
  selector: 'app-course-details-2',
  imports: [CommonModule, RouterLink, FormsModule, LightgalleryModule],
  templateUrl: './course-details-2.component.html',
  styleUrl: './course-details-2.component.scss'
})
export class CourseDetails2Component implements OnInit {
  routes = routes;
  readonly stars = [1, 2, 3, 4, 5];
  private coverImageFailed = false;
  private instructorAvatarFailed = false;
  private coverCandidateIndex = 0;

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
        this.errorMessage = 'Aucun cours specifie.';
      }
    });
  }

  loadCourse(courseId: number): void {
    this.loading = true;
    this.courseService.getCourseDetail(courseId).subscribe({
      next: (data) => {
        this.course = data;
        
        // Transformer objectives et requirements en arrays si ce sont des strings
        if (this.course.objectives && typeof this.course.objectives === 'string') {
          this.course.objectives = this.course.objectives.split('\n').filter((o: string) => o.trim());
        }
        if (this.course.requirements && typeof this.course.requirements === 'string') {
          this.course.requirements = this.course.requirements.split('\n').filter((r: string) => r.trim());
        }
        
        this.coverImageFailed = false;
        this.instructorAvatarFailed = false;
        this.coverCandidateIndex = 0;
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
        this.reviewMsg = 'Avis publie !';
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
        this.showSuccess('Inscription reussie ! Vous pouvez maintenant acceder au cours.');
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
        this.showSuccess('Ajoute au panier ! Connectez-vous pour finaliser l\'achat.');
      } else {
        this.router.navigate([this.routes.cart]);
      }
      return;
    }
    // Non-student (instructor, admin) ? redirect to login as student
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
        this.showSuccess('Ajoute au panier !');
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
    const m: Record<string, string> = { BEGINNER: 'Debutant', INTERMEDIATE: 'Intermediaire', ADVANCED: 'Avance' };
    return m[l] ?? l;
  }

  hasCourseCover(): boolean {
    return this.getCourseCoverCandidates().length > 0 && !this.coverImageFailed;
  }

  getBannerStyle(): Record<string, string> {
    return {};
  }

  getImageUrl(path: string): string {
    return resolveCourseImage(path, 'assets/img/course-img/courses-01.jpg');
  }

  getAvatarUrl(path: string): string {
    return resolveAvatarImage(path, 'assets/img/avatar/avatar10.jpg');
  }

  getCourseCoverImage(): string {
    const candidates = this.getCourseCoverCandidates();
    const raw = candidates[this.coverCandidateIndex] || '';
    return this.getImageUrl(raw);
  }

  getCourseCoverPlaceholderGradient(): string {
    const gradients = [
      'linear-gradient(135deg, #5625E8 0%, #02a8b5 100%)',
      'linear-gradient(135deg, #FD3995 0%, #9b59b6 100%)',
      'linear-gradient(135deg, #02a8b5 0%, #5625E8 100%)',
      'linear-gradient(135deg, #9b59b6 0%, #FD3995 100%)'
    ];
    const key = String(this.course?.id || this.course?.slug || this.course?.title || 'course');
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = ((hash << 5) - hash) + key.charCodeAt(i);
      hash |= 0;
    }
    return gradients[Math.abs(hash) % gradients.length];
  }

  getCourseCoverInitial(): string {
    const value = String(this.course?.title || 'Cours').trim();
    return (value.charAt(0) || 'C').toUpperCase();
  }

  hasInstructorAvatar(): boolean {
    return !!this.getCourseInstructorAvatarRaw() && !this.instructorAvatarFailed;
  }

  getCourseInstructorAvatar(): string {
    return resolveAvatarImage(this.getCourseInstructorAvatarRaw(), '');
  }

  getInstructorInitial(): string {
    const value = String(this.course?.instructorName || 'I').trim();
    return (value.charAt(0) || 'I').toUpperCase();
  }

  onCourseCoverError(event: Event): void {
    const img = event?.target as HTMLImageElement | null;
    if (!img) return;

    const candidates = this.getCourseCoverCandidates();
    if (this.coverCandidateIndex < candidates.length - 1) {
      this.coverCandidateIndex += 1;
      img.src = this.getImageUrl(candidates[this.coverCandidateIndex]);
      return;
    }

    this.coverImageFailed = true;
  }

  onInstructorAvatarError(event: Event, name?: string): void {
    const img = event?.target as HTMLImageElement | null;
    if (!img) return;
    this.instructorAvatarFailed = true;
    img.src = this.generateInitialAvatar(name || 'F');
  }

  private getCourseCoverRaw(): string {
    return this.getCourseCoverCandidates()[0] || '';
  }

  private getCourseCoverCandidates(): string[] {
    const pending = this.course?.pendingEditData || this.course?.pendingEdit || {};

    const values = [
      this.course?.coverImage,
      this.course?.coverImagePath,
      this.course?.cover,
      this.course?.courseCoverImage,
      this.course?.courseCoverImagePath,
      this.course?.thumbnailUrl,
      this.course?.coverImageUrl,
      this.course?.thumbnail,
      this.course?.imageUrl,
      this.course?.image,
      this.course?.courseImageUrl,
      this.course?.courseImage,
      this.course?.courseImagePath,
      pending?.coverImage,
      pending?.coverImagePath,
      pending?.courseCoverImage,
      pending?.thumbnailUrl,
      pending?.coverImageUrl,
      pending?.imageUrl,
      pending?.image
    ];

    const normalized = values
      .map((v) => String(v || '').trim())
      .filter((v) => {
        if (!v) return false;
        const low = v.toLowerCase();
        return low !== 'null' && low !== 'undefined' && low !== 'none' && low !== 'n/a';
      });

    return Array.from(new Set(normalized));
  }

  private getCourseInstructorAvatarRaw(): string {
    const raw =
      this.course?.instructorAvatar ||
      this.course?.instructorAvatarPath ||
      this.course?.instructorImage ||
      this.course?.instructorPhoto ||
      this.course?.instructorPhotoUrl ||
      this.course?.avatarPath ||
      this.course?.instructor?.avatarPath ||
      this.course?.instructor?.avatar ||
      this.course?.instructor?.profileImage ||
      this.course?.instructor?.photo ||
      this.course?.instructor?.photoUrl ||
      '';
    return String(raw || '').trim();
  }

  private generateInitialAvatar(name: string): string {
    const initial = String(name || 'F').trim().charAt(0).toUpperCase() || 'F';
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#6366f1"/><stop offset="100%" stop-color="#8b5cf6"/></linearGradient></defs><rect width="80" height="80" rx="40" fill="url(#g)"/><text x="40" y="52" text-anchor="middle" font-size="32" font-family="Arial, sans-serif" font-weight="700" fill="#ffffff">${initial}</text></svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  }

  private showSuccess(msg: string): void {
    this.successMessage = msg;
    setTimeout(() => this.successMessage = '', 3000);
  }
}
