import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { forkJoin, of, catchError } from 'rxjs';
import { CourseService } from '../../../shared/service/course/course.service';
import { resolveCourseImage } from '../../../shared/utils/course-image.util';

declare var Swal: any;

@Component({
    selector: 'app-student-dashboard',
    templateUrl: './student-dashboard.component.html',
    styleUrl: './student-dashboard.component.scss',
    imports: [CommonModule, RouterLink],
})
export class StudentDashboardComponent implements OnInit {
  public routes = routes;
  public Math = Math;

  // ────── User Info ────────────────────────────────────────────
  public userName: string = '';
  public userRole: string = '';

  // ────── Stats ────────────────────────────────────────────────
  totalCourses = 0;
  activeCourses = 0;   // progression > 0% et < 100%
  completedCourses = 0; // progression = 100%

  // ────── Data ─────────────────────────────────────────────────
  recentCourses: any[] = [];
  loading = true;

  constructor(
    private courseService: CourseService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.userName = localStorage.getItem('fullName') || 'Student';
    this.userRole = localStorage.getItem('role') || '';
    this.loadDashboard();
  }

  loadDashboard(): void {
    forkJoin({
      courses: this.courseService.getMyEnrolledCourses().pipe(
        catchError(() => of([]))
      ),
      progress: this.courseService.getMyCourseProgress().pipe(
        catchError(() => of([]))
      )
    }).subscribe({
      next: ({ courses, progress }) => {

        this.totalCourses = courses.length;

        // ────── Construire map courseId → progressionPct ────────
        const progressMap = new Map<number, number>();
        (progress as any[]).forEach(p => {
          progressMap.set(p.courseId, p.completionPercentage ?? 0);
        });

        // ────── Calcul des stats ────────────────────────────────
        this.completedCourses = (progress as any[]).filter(
          p => (p.completionPercentage ?? 0) >= 100
        ).length;

        this.activeCourses = (progress as any[]).filter(p => {
          const pct = p.completionPercentage ?? 0;
          return pct > 0 && pct < 100;
        }).length;

        // ────── Enrichir les cours avec progression ─────────────
        this.recentCourses = courses.slice(0, 6).map((c: any) => ({
          ...c,
          progressPct: Math.round(progressMap.get(c.id) ?? 0)
        }));

        this.loading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }

  /**
   * Résoudre l'URL de l'image du cours
   */
  getImageUrl(path: string): string {
    return resolveCourseImage(path);
  }

  /**
   * Obtenir la classe Bootstrap pour le badge de progression
   */
  getProgressClass(pct: number): string {
    if (pct >= 100) return 'bg-success';
    if (pct >= 50)  return 'bg-primary';
    if (pct > 0)    return 'bg-warning';
    return 'bg-secondary';
  }

  /**
   * Afficher une notification douce pour continuer un cours
   */
  showContinueCourseAlert(courseName: string, courseId: number): void {
    if (typeof Swal === 'undefined') return;
    
    Swal.fire({
      title: 'Continue Learning?',
      html: `<p>Ready to continue <strong>${courseName}</strong>?</p>`,
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: '📚 Let\'s Go!',
      cancelButtonText: 'Later',
      confirmButtonColor: '#5625E8',
      cancelButtonColor: '#888',
      customClass: {
        popup: 'sa-swal-popup',
        container: 'sa-swal-container'
      }
    }).then((result: any) => {
      if (result.isConfirmed) {
        // Navigation handled by button click
      }
    });
  }

  /**
   * Congratulations pour cours complété
   */
  showCongratulations(courseName: string): void {
    if (typeof Swal === 'undefined') return;

    Swal.fire({
      title: '🎉 Congratulations!',
      html: `<p>You have successfully completed <strong>${courseName}</strong>!</p><p class="mt-2">Great achievement! Keep learning! 💪</p>`,
      icon: 'success',
      confirmButtonText: 'Awesome!',
      confirmButtonColor: '#03C95A',
      customClass: {
        popup: 'sa-swal-popup',
        container: 'sa-swal-container'
      }
    });
  }
}

