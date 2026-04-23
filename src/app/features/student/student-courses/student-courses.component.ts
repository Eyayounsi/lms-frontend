import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CourseService } from '../../../shared/service/course/course.service';
import { routes } from '../../../shared/service/routes/routes';
import { resolveCourseImage } from '../../../shared/utils/course-image.util';
import { resolveAvatarImage } from '../../../shared/utils/avatar-image.util';

@Component({
    selector: 'app-student-courses',
    templateUrl: './student-courses.component.html',
    styleUrl: './student-courses.component.scss',
    imports : [CommonModule,RouterLink]
})
export class StudentCoursesComponent implements OnInit {
  public routes = routes;
  enrolledCourses: any[] = [];
  activeCourses: any[] = [];
  completedCourses: any[] = [];
  loading = true;
  errorMessage = '';

  private favouriteCourseIds = new Set<number>();

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadMyCourses();
  }

  loadMyCourses(): void {
    this.loading = true;
    this.errorMessage = '';

    forkJoin({
      courses: this.courseService.getMyEnrolledCourses().pipe(catchError(() => of([]))),
      progress: this.courseService.getMyCourseProgress().pipe(catchError(() => of([])))
    }).subscribe({
      next: ({ courses, progress }) => {
        const progressMap = new Map<number, number>();
        (progress as any[]).forEach(p => progressMap.set(p.courseId, Number(p.completionPercentage ?? 0)));

        const normalizedCourses = (courses as any[]).map(course => ({
          ...course,
          progressPct: Math.round(progressMap.get(course.id) ?? 0)
        }));

        this.enrolledCourses = normalizedCourses;
        this.activeCourses = normalizedCourses.filter(course => course.progressPct > 0 && course.progressPct < 100);
        this.completedCourses = normalizedCourses.filter(course => course.progressPct >= 100);

        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Erreur lors du chargement de vos cours.';
        this.loading = false;
      }
    });
  }

  get enrolledCount(): number {
    return this.enrolledCourses.length;
  }

  get activeCount(): number {
    return this.activeCourses.length;
  }

  get completedCount(): number {
    return this.completedCourses.length;
  }

  iconSelect(courseId: number): void {
    if (this.favouriteCourseIds.has(courseId)) {
      this.favouriteCourseIds.delete(courseId);
      return;
    }
    this.favouriteCourseIds.add(courseId);
  }

  isSelected(courseId: number): boolean {
    return this.favouriteCourseIds.has(courseId);
  }

  getCoursesByTab(tab: 'enrolled' | 'active' | 'completed'): any[] {
    switch (tab) {
      case 'active': return this.activeCourses;
      case 'completed': return this.completedCourses;
      default: return this.enrolledCourses;
    }
  }

  getCourseImage(course: any): string {
    return resolveCourseImage(course?.coverImage);
  }

  getInstructorAvatar(course: any): string {
    return resolveAvatarImage(
      course?.instructorAvatar ||
      course?.instructorAvatarPath ||
      course?.avatarPath ||
      course?.instructor?.avatarPath ||
      '',
      ''
    );
  }

  getCourseBadge(course: any): string {
    if ((course?.progressPct ?? 0) >= 100) return 'Completed';
    // Toujours afficher la progression, même si 0%
    return `${course.progressPct ?? 0}%`;
  }

  getCourseBadgeClass(course: any): string {
    if ((course?.progressPct ?? 0) >= 100) return 'text-bg-success';
    if ((course?.progressPct ?? 0) > 0) return 'text-bg-primary';
    // 0% = badge gris
    return 'text-bg-secondary';
  }

  getCoursePrice(course: any): string {
    const price = Number(course?.effectivePrice ?? course?.price ?? 0);
    return price > 0 ? `$${price}` : 'Free';
  }

  getCourseRating(course: any): string {
    const rating = Number(course?.averageRating ?? 0);
    const reviews = Number(course?.reviewCount ?? course?.reviewsCount ?? course?.reviews?.length ?? 0);
    return `${rating ? rating.toFixed(1) : '0.0'} (${reviews} Reviews)`;
  }

  getProgressText(course: any): string {
    const pct = Number(course?.progressPct ?? 0);
    if (pct >= 100) return 'Completed';
    if (pct > 0) return `Answered: ${pct}/100`;
    return 'Not started';
  }

  getProgressButtonText(course: any): string {
    const pct = Number(course?.progressPct ?? 0);
    if (pct >= 100) return 'View Course';
    if (pct > 0) return 'Continue';
    return 'View Course';
  }
}
