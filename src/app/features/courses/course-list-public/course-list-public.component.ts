import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CourseService } from '../../../shared/service/course/course.service';
import { routes } from '../../../shared/service/routes/routes';

@Component({
  selector: 'app-course-list-public',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './course-list-public.component.html',
  styleUrls: ['./course-list-public.component.scss']
})
export class CourseListPublicComponent implements OnInit, OnDestroy {
  public routes = routes;
  readonly stars = [1, 2, 3, 4, 5];

  // Data
  courses: any[] = [];
  filteredCourses: any[] = [];
  paginatedCourses: any[] = [];
  categories: any[] = [];
  loading = true;
  errorMessage = '';
  successMessage = '';

  // Filters
  searchTerm = '';
  selectedCategoryId: number | null = null;
  selectedLevels: string[] = [];
  priceFilter = 'all';
  minRating = 0;
  sortBy = 'newest';
  viewMode: 'grid' | 'list' = 'grid';

  // Pagination
  pageSize = 12;
  currentPage = 1;
  totalPages = 1;

  // Auth
  isLoggedIn = false;
  wishlistSet = new Set<number>();
  enrolledSet = new Set<number>();
  buyingCourseId: number | null = null;
  addingToCartId: number | null = null;

  private searchSubject = new Subject<string>();

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = !!localStorage.getItem('token');

    this.searchSubject.pipe(debounceTime(350), distinctUntilChanged())
      .subscribe(() => { this.currentPage = 1; this.applyFilters(); });

    this.courseService.getCategories().subscribe({
      next: (cats) => (this.categories = cats),
      error: () => {}
    });

    if (this.isLoggedIn) {
      this.courseService.getWishlist().subscribe({
        next: (items) => items.forEach((i: any) => this.wishlistSet.add(i.courseId ?? i.id)),
        error: () => {}
      });
      this.courseService.getMyEnrolledCourses().subscribe({
        next: (items) => items.forEach((c: any) => this.enrolledSet.add(c.id)),
        error: () => {}
      });
    }

    this.route.queryParams.subscribe(params => {
      if (params['search'])     this.searchTerm = params['search'];
      if (params['categoryId']) this.selectedCategoryId = Number(params['categoryId']);
      if (params['level'])      this.selectedLevels = [params['level']];
      if (params['sort'])       this.sortBy = params['sort'];
      this.loadCourses();
    });
  }

  ngOnDestroy(): void { this.searchSubject.complete(); }

  loadCourses(): void {
    this.loading = true;
    this.courseService.getPublishedCourses().subscribe({
      next: (data) => {
        this.courses = data;
        this.currentPage = 1;
        this.applyFilters();
        this.loading = false;
      },
      error: () => { this.errorMessage = 'Erreur lors du chargement des cours.'; this.loading = false; }
    });
  }

  onSearchInput(): void { this.searchSubject.next(this.searchTerm); }
  onFilterChange(): void { this.currentPage = 1; this.applyFilters(); }

  clearFilters(): void {
    this.searchTerm = ''; this.selectedCategoryId = null; this.selectedLevels = [];
    this.priceFilter = 'all'; this.minRating = 0; this.sortBy = 'newest'; this.currentPage = 1;
    this.applyFilters();
  }

  toggleLevel(level: string): void {
    const idx = this.selectedLevels.indexOf(level);
    if (idx > -1) this.selectedLevels.splice(idx, 1); else this.selectedLevels.push(level);
    this.onFilterChange();
  }

  isLevelSelected(level: string): boolean { return this.selectedLevels.includes(level); }

  applyFilters(): void {
    let r = [...this.courses];

    if (this.searchTerm.trim()) {
      const q = this.searchTerm.toLowerCase();
      r = r.filter(c =>
        c.title?.toLowerCase().includes(q) ||
        c.description?.toLowerCase().includes(q) ||
        c.instructorName?.toLowerCase().includes(q)
      );
    }

    if (this.selectedCategoryId) r = r.filter(c => c.categoryId === this.selectedCategoryId);
    if (this.selectedLevels.length > 0) r = r.filter(c => this.selectedLevels.includes(c.level));

    if (this.priceFilter === 'free')      r = r.filter(c => +(c.effectivePrice ?? c.price ?? 0) === 0);
    else if (this.priceFilter === 'paid') r = r.filter(c => +(c.effectivePrice ?? c.price ?? 0) > 0);

    if (this.minRating > 0) r = r.filter(c => (c.averageRating ?? 0) >= this.minRating);

    switch (this.sortBy) {
      case 'newest':    r.sort((a, b) => (b.id ?? 0) - (a.id ?? 0)); break;
      case 'top-rated': r.sort((a, b) => (b.averageRating ?? 0) - (a.averageRating ?? 0)); break;
      case 'popular':   r.sort((a, b) => (b.enrollmentCount ?? 0) - (a.enrollmentCount ?? 0)); break;
      case 'price-asc': r.sort((a, b) => +(a.effectivePrice ?? a.price ?? 0) - +(b.effectivePrice ?? b.price ?? 0)); break;
      case 'price-desc': r.sort((a, b) => +(b.effectivePrice ?? b.price ?? 0) - +(a.effectivePrice ?? a.price ?? 0)); break;
    }

    this.filteredCourses = r;
    this.totalPages = Math.max(1, Math.ceil(r.length / this.pageSize));
    if (this.currentPage > this.totalPages) this.currentPage = this.totalPages;
    const start = (this.currentPage - 1) * this.pageSize;
    this.paginatedCourses = r.slice(start, start + this.pageSize);
  }

  goToPage(p: number): void {
    if (p < 1 || p > this.totalPages) return;
    this.currentPage = p;
    const start = (p - 1) * this.pageSize;
    this.paginatedCourses = this.filteredCourses.slice(start, start + this.pageSize);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getPageRange(): number[] {
    const range: number[] = [];
    for (let i = Math.max(1, this.currentPage - 2); i <= Math.min(this.totalPages, this.currentPage + 2); i++) range.push(i);
    return range;
  }

  goToDetail(courseId: number): void {
    this.router.navigate([this.routes.courseDetails], { queryParams: { courseId } });
  }

  isInWishlist(id: number): boolean { return this.wishlistSet.has(id); }
  isEnrolled(id: number): boolean   { return this.enrolledSet.has(id); }

  toggleWishlist(course: any, event: Event): void {
    event.stopPropagation();
    if (!this.isLoggedIn) { this.router.navigate(['/auth/login']); return; }
    if (this.isInWishlist(course.id)) {
      this.courseService.removeFromWishlist(course.id).subscribe({ next: () => this.wishlistSet.delete(course.id), error: () => {} });
    } else {
      this.courseService.addToWishlist(course.id).subscribe({
        next: () => { this.wishlistSet.add(course.id); this.showSuccess('Ajouté à la wishlist !'); },
        error: (e: any) => { this.errorMessage = e.error?.message || 'Erreur wishlist'; }
      });
    }
  }

  buyCourse(courseId: number, event: Event): void {
    event.stopPropagation();
    if (!this.isLoggedIn) { this.router.navigate(['/auth/login']); return; }
    this.buyingCourseId = courseId;
    this.courseService.createCheckoutSession(courseId).subscribe({
      next: (r) => { window.location.href = r.url; },
      error: (e: any) => { this.buyingCourseId = null; this.errorMessage = e.error?.error || 'Erreur paiement'; setTimeout(() => this.errorMessage = '', 5000); }
    });
  }

  addToCart(courseId: number, event: Event): void {
    event.stopPropagation();
    if (!this.isLoggedIn) {
      const course = this.courses.find((c: any) => c.id === courseId);
      const cart: any[] = JSON.parse(localStorage.getItem('guest_cart') || '[]');
      if (!cart.some((c: any) => c.id === courseId)) {
        cart.push({
          id: courseId,
          title: course?.title || '',
          coverImage: course?.coverImage || '',
          price: course?.price || 0,
          effectivePrice: course?.effectivePrice || 0,
          instructorName: course?.instructorName || ''
        });
        localStorage.setItem('guest_cart', JSON.stringify(cart));
        this.showSuccess('Ajouté au panier ! Connectez-vous pour finaliser l\'achat.');
      } else {
        this.showSuccess('Ce cours est déjà dans votre panier.');
      }
      return;
    }
    // Non-student roles cannot use the student cart
    const role = localStorage.getItem('role') || '';
    if (!role.includes('STUDENT')) { return; }
    this.addingToCartId = courseId;
    this.courseService.addToCart(courseId).subscribe({
      next: () => { this.addingToCartId = null; this.showSuccess('Ajouté au panier !'); },
      error: (e: any) => { this.addingToCartId = null; this.errorMessage = e.error?.message || 'Erreur'; setTimeout(() => this.errorMessage = '', 4000); }
    });
  }

  getLevelLabel(l: string): string {
    const m: Record<string, string> = { BEGINNER: 'Débutant', INTERMEDIATE: 'Intermédiaire', ADVANCED: 'Avancé' };
    return m[l] ?? l;
  }

  formatPrice(course: any): string {
    const price = +(course.effectivePrice ?? course.price ?? 0);
    return price === 0 ? 'Gratuit' : price.toFixed(2) + ' €';
  }

  getImageUrl(path: string): string {
    if (!path) return 'assets/img/course/course-01.jpg';
    return `http://localhost:8081/${path}`;
  }

  getInstructorAvatar(path: string): string {
    if (!path) return 'assets/img/avatar/avatar1.jpg';
    return `http://localhost:8081/${path}`;
  }

  private showSuccess(msg: string): void {
    this.successMessage = msg;
    this.errorMessage = '';
    setTimeout(() => this.successMessage = '', 3000);
  }
}
