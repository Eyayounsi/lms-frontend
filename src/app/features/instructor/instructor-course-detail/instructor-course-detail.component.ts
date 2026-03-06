import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CourseService } from '../../../shared/service/course/course.service';

declare var bootstrap: any;

@Component({
  selector: 'app-instructor-course-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instructor-course-detail.component.html',
  styleUrls: ['./instructor-course-detail.component.scss']
})
export class InstructorCourseDetailComponent implements OnInit {

  course: any = null;
  reviews: any[] = [];
  loading = true;
  loadingReviews = true;
  errorMessage = '';
  courseId!: number;

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
    this.router.navigate(['/courses/add-course'], { queryParams: { id: this.courseId } });
  }

  // ── Prévisualisation médias ──────────────────────────────────
  previewUrl = '';
  previewType: 'video' | 'pdf' = 'video';

  openPreview(url: string, type: 'video' | 'pdf'): void {
    this.previewUrl = this.getFileUrl(url);
    this.previewType = type;
    const el = document.getElementById('mediaPreviewModal');
    if (el) { new bootstrap.Modal(el).show(); }
  }

  get safePreviewUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.previewUrl);
  }

  // ── Helpers ──────────────────────────────────────────────────

  getImageUrl(path: string): string {
    if (!path) return 'assets/img/course/course-01.jpg';
    const clean = path.startsWith('/') ? path : '/' + path;
    return `http://localhost:8081${clean}`;
  }

  getFileUrl(path: string): string {
    if (!path) return '#';
    const clean = path.startsWith('/') ? path : '/' + path;
    return `http://localhost:8081${clean}`;
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
