import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { routes } from '../../../shared/service/routes/routes';
import { CourseService } from '../../../shared/service/course/course.service';

@Component({
    selector: 'app-student-reviews',
    templateUrl: './student-reviews.component.html',
    styleUrl: './student-reviews.component.scss',
    imports: [CommonModule, FormsModule, RouterLink]
})
export class StudentReviewsComponent implements OnInit {
  routes = routes;

  enrolledCourses: any[] = [];
  loading = true;
  errorMessage = '';
  successMessage = '';

  // Map courseId → {rating, comment} for existing reviews
  reviewMap: Map<number, any> = new Map();

  // Form state per course
  editingCourseId: number | null = null;
  formRating = 5;
  formComment = '';
  submitting = false;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.loading = true;
    this.courseService.getMyEnrolledCourses().subscribe({
      next: (courses) => {
        this.enrolledCourses = courses;
        // Load reviews for each course
        courses.forEach(c => {
          this.courseService.getCourseReviews(c.id).subscribe({
            next: (reviews) => {
              const userId = Number(localStorage.getItem('userId'));
              const myReview = reviews.find((r: any) => r.studentId === userId);
              if (myReview) this.reviewMap.set(c.id, myReview);
            },
            error: () => {}
          });
        });
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Erreur lors du chargement des cours';
        this.loading = false;
      }
    });
  }

  getMyReview(courseId: number): any {
    return this.reviewMap.get(courseId) || null;
  }

  openReviewForm(course: any): void {
    this.editingCourseId = course.id;
    const existing = this.reviewMap.get(course.id);
    this.formRating = existing?.rating || 5;
    this.formComment = existing?.comment || '';
  }

  cancelEdit(): void {
    this.editingCourseId = null;
    this.formRating = 5;
    this.formComment = '';
  }

  submitReview(courseId: number): void {
    if (this.formRating < 1 || this.formRating > 5) {
      this.errorMessage = 'Note invalide (1-5)';
      return;
    }
    this.submitting = true;
    this.courseService.upsertReview(courseId, { rating: this.formRating, comment: this.formComment }).subscribe({
      next: (review) => {
        this.reviewMap.set(courseId, review);
        this.cancelEdit();
        this.submitting = false;
        this.showSuccess('Avis enregistré !');
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Erreur lors de l\'enregistrement';
        this.submitting = false;
      }
    });
  }

  deleteMyReview(courseId: number): void {
    if (!confirm('Supprimer votre avis ?')) return;
    this.courseService.deleteReview(courseId).subscribe({
      next: () => {
        this.reviewMap.delete(courseId);
        this.showSuccess('Avis supprimé');
      },
      error: (err) => this.errorMessage = err.error?.message || 'Erreur lors de la suppression'
    });
  }

  getStars(rating: number): number[] {
    return Array.from({ length: 5 }, (_, i) => i + 1);
  }

  getImageUrl(path: string): string {
    if (!path) return 'assets/img/course/course-01.jpg';
    const clean = path.startsWith('/') ? path : '/' + path;
    return `http://localhost:8081${clean}`;
  }

  private showSuccess(msg: string): void {
    this.successMessage = msg;
    this.errorMessage = '';
    setTimeout(() => this.successMessage = '', 3500);
  }
}
