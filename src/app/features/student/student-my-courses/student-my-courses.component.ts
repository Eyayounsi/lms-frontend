import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { routes } from '../../../shared/service/routes/routes';
import { resolveCourseImage } from '../../../shared/utils/course-image.util';

@Component({
  selector: 'app-student-my-courses',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './student-my-courses.component.html',
  styleUrls: ['./student-my-courses.component.scss']
})
export class StudentMyCoursesComponent implements OnInit {

  public routes = routes;

  courses: any[] = [];
  loading = true;
  errorMessage = '';

  confirmingPayment = false;
  paymentConfirmed = false;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const sessionId = this.route.snapshot.queryParamMap.get('session_id');
    if (sessionId) {
      this.confirmingPayment = true;
      this.http.post(`${environment.apiUrl}/payment/confirm`, { sessionId }).subscribe({
        next: () => {
          this.confirmingPayment = false;
          this.paymentConfirmed = true;
          this.loadMyCourses();
        },
        error: () => {
          this.confirmingPayment = false;
          this.loadMyCourses();
        }
      });
    } else {
      this.loadMyCourses();
    }
  }

  loadMyCourses(): void {
    this.loading = true;
    // Charger cours + progression en parallèle
    forkJoin({
      courses: this.http.get<any[]>(`${environment.apiUrl}/student/my-courses`),
      progress: this.http.get<any[]>(`${environment.apiUrl}/student/progress/my-courses`)
    }).subscribe({
      next: ({ courses, progress }) => {
        // Construire map: courseId → progressionPct
        const progressMap = new Map<number, number>();
        progress.forEach(p => progressMap.set(p.courseId, p.completionPercentage ?? 0));

        // Enrichir chaque cours avec sa progression
        this.courses = courses.map(c => ({
          ...c,
          progressPct: progressMap.get(c.id) ?? 0
        }));

        this.loading = false;
      },
      error: (err) => {
        // Fallback: charger les cours sans progression
        this.http.get<any[]>(`${environment.apiUrl}/student/my-courses`).subscribe({
          next: (courses) => {
            this.courses = courses.map(c => ({ ...c, progressPct: 0 }));
            this.loading = false;
          },
          error: () => {
            this.errorMessage = 'Erreur lors du chargement de vos cours';
            this.loading = false;
            console.error(err);
          }
        });
      }
    });
  }

  /** Naviguer vers le lecteur de cours */
  goToCourse(courseId: number): void {
    this.router.navigate([this.routes.courseWatch], { queryParams: { courseId } });
  }

  getImageUrl(path: string): string {
    return resolveCourseImage(path);
  }

  getLevelLabel(level: string): string {
    switch (level) {
      case 'BEGINNER':     return 'Débutant';
      case 'INTERMEDIATE': return 'Intermédiaire';
      case 'ADVANCED':     return 'Avancé';
      default:             return level;
    }
  }

  /** Couleur de la barre de progression */
  getProgressClass(pct: number): string {
    if (pct >= 100) return 'bg-success';
    if (pct >= 50)  return 'bg-primary';
    if (pct > 0)    return 'bg-warning';
    return 'bg-secondary';
  }

  /** Label de statut de progression */
  getProgressLabel(pct: number): string {
    if (pct >= 100) return 'Terminé';
    if (pct > 0)    return `${pct}% complété`;
    return 'Non commencé';
  }
}
