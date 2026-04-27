import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CourseService } from '../../../shared/service/course/course.service';
import { AvatarFallbackComponent } from '../../../shared/components/avatar-fallback/avatar-fallback.component';
import { routes } from '../../../shared/service/routes/routes';
import { resolveCourseImage } from '../../../shared/utils/course-image.util';

declare var bootstrap: any;

@Component({
  selector: 'app-instructor-course-detail',
  standalone: true,
  imports: [CommonModule, AvatarFallbackComponent],
  templateUrl: './instructor-course-detail.component.html',
  styleUrls: ['./instructor-course-detail.component.scss']
})
export class InstructorCourseDetailComponent implements OnInit {

  public routes = routes;

  course: any = null;
  reviews: any[] = [];
  loading = true;
  loadingReviews = true;
  errorMessage = '';
  courseId!: number;
  coverImageFailed = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.courseId = +params['courseId'];
      if (this.courseId) {
        this.loadCourse();
        this.loadReviews();
      } else {
        this.errorMessage = 'Aucun cours spécifié';
        this.loading = false;
        this.loadingReviews = false;
      }
    });
  }

  loadCourse(): void {
    this.loading = true;
    this.courseService.getMyCourse(this.courseId).subscribe({
      next: (data) => {
        this.course = data;
        this.coverImageFailed = false;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Erreur lors du chargement du cours';
        this.loading = false;
      }
    });
  }

  loadReviews(): void {
    this.loadingReviews = true;
    this.courseService.getInstructorCourseReviews(this.courseId).subscribe({
      next: (data) => {
        this.reviews = data;
        this.loadingReviews = false;
      },
      error: () => {
        this.reviews = [];
        this.loadingReviews = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/instructor/instructor-course']);
  }

  editCourse(): void {
    this.router.navigate([this.routes.instructorEditCourse, this.courseId]);
  }

  // ── Prévisualisation médias ──────────────────────────────────
  previewUrl = '';
  previewType: 'video' | 'pdf' | 'article' = 'video';
  previewArticleContent: string = '';
  pdfLoading = false;

  openPreview(url: string, type: 'video' | 'pdf' | 'article', articleContent?: string): void {
    this.pdfLoading = type === 'pdf';
    if (type === 'article') {
      this.previewArticleContent = articleContent || '';
      this.previewType = 'article';
    } else {
      this.previewUrl = this.getFileUrl(url);
      this.previewType = type;
    }
    const el = document.getElementById('mediaPreviewModal');
    if (el) {
      const modal = bootstrap.Modal.getInstance(el) || new bootstrap.Modal(el);
      modal.show();
    }
  }

  get safePreviewUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.previewUrl);
  }

  // ── Helpers ──────────────────────────────────────────────────

  getCourseCoverImage(course: any): string {
    const candidates = [
      course?.coverImage,
      course?.thumbnailUrl,
      course?.coverImageUrl,
      course?.thumbnail,
      course?.image,
      course?.imageUrl,
      course?.courseImageUrl,
      course?.courseImage,
    ];
    const found = candidates.find((value) => !!value && String(value).trim());
    return this.getImageUrl(found || '');
  }

  hasCoverImage(course: any): boolean {
    return !!this.getCourseCoverImage(course) && !this.coverImageFailed;
  }

  onCoverImageError(): void {
    this.coverImageFailed = true;
  }

  getCoverPlaceholderGradient(course: any): string {
    const gradients = [
      'linear-gradient(135deg, #5625E8 0%, #02a8b5 100%)',
      'linear-gradient(135deg, #FD3995 0%, #9b59b6 100%)',
      'linear-gradient(135deg, #02a8b5 0%, #5625E8 100%)',
      'linear-gradient(135deg, #9b59b6 0%, #FD3995 100%)',
    ];
    const key = String(course?.id || course?.slug || course?.title || 'course');
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = ((hash << 5) - hash) + key.charCodeAt(i);
      hash |= 0;
    }
    return gradients[Math.abs(hash) % gradients.length];
  }

  getImageUrl(path: string): string {
    return resolveCourseImage(path, '');
  }

  getFileUrl(path: string): string {
    if (!path) return '#';
    const clean = path.startsWith('/') ? path : '/' + path;
    return clean;
  }

  getStatusBadgeClass(status: string): string {
    switch (status) {
      case 'PUBLISHED': return 'bg-success';
      case 'PENDING':   return 'bg-warning text-dark';
      case 'DRAFT':     return 'bg-secondary';
      case 'REJECTED':  return 'bg-danger';
      case 'ARCHIVED':  return 'bg-dark';
      default:          return 'bg-secondary';
    }
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'PUBLISHED': return 'Publié';
      case 'PENDING':   return 'En attente';
      case 'DRAFT':     return 'Brouillon';
      case 'REJECTED':  return 'Rejeté';
      case 'ARCHIVED':  return 'Archivé';
      default:          return status;
    }
  }

  getLevelLabel(level: string): string {
    switch (level) {
      case 'BEGINNER':     return 'Débutant';
      case 'INTERMEDIATE': return 'Intermédiaire';
      case 'ADVANCED':     return 'Avancé';
      default:             return level;
    }
  }

  formatDuration(totalSeconds: number): string {
    if (!totalSeconds) return '0 min';
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    if (hours > 0) return `${hours}h ${minutes}min`;
    return `${minutes} min`;
  }

  getStarsArray(rating: number): number[] {
    return [1, 2, 3, 4, 5];
  }
}
