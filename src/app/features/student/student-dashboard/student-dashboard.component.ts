import { Component, OnInit } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { forkJoin, of, catchError } from 'rxjs';
import { CourseService } from '../../../shared/service/course/course.service';

@Component({
    selector: 'app-student-dashboard',
    templateUrl: './student-dashboard.component.html',
    styleUrl: './student-dashboard.component.scss',
    imports: [CommonModule, RouterLink],
})
export class StudentDashboardComponent implements OnInit {
  public routes = routes;

  // Infos utilisateur depuis localStorage
  public userName: string = '';
  public userRole: string = '';

  // Stats réelles
  totalCourses = 0;
  activeCourses = 0;   // progression > 0% et < 100%
  completedCourses = 0; // progression = 100%

  // Cours récents avec progression enrichie
  recentCourses: any[] = [];

  loading = true;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.userName = localStorage.getItem('fullName') || 'Utilisateur';
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

        // Construire une map courseId → progressionPct
        const progressMap = new Map<number, number>();
        (progress as any[]).forEach(p => {
          progressMap.set(p.courseId, p.completionPercentage ?? 0);
        });

        this.completedCourses = (progress as any[]).filter(
          p => (p.completionPercentage ?? 0) >= 100
        ).length;

        this.activeCourses = (progress as any[]).filter(p => {
          const pct = p.completionPercentage ?? 0;
          return pct > 0 && pct < 100;
        }).length;

        // Cours récents (max 6) enrichis avec leur progression
        this.recentCourses = courses.slice(0, 6).map((c: any) => ({
          ...c,
          progressPct: progressMap.get(c.id) ?? 0
        }));

        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  getImageUrl(path: string): string {
    if (!path) return 'assets/img/course/course-01.jpg';
    const clean = path.startsWith('/') ? path : '/' + path;
    return `http://localhost:8081${clean}`;
  }

  /** Badge couleur en fonction de la progression */
  getProgressClass(pct: number): string {
    if (pct >= 100) return 'bg-success';
    if (pct >= 50)  return 'bg-primary';
    if (pct > 0)    return 'bg-warning';
    return 'bg-secondary';
  }
}

