import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../../shared/service/course/course.service';
import { routes } from '../../../shared/service/routes/routes';
import { AvatarFallbackComponent } from '../../../shared/components/avatar-fallback/avatar-fallback.component';
import { AuthService } from '../../../shared/service/auth/auth.service';

@Component({
  selector: 'app-students-details',
  imports: [CommonModule, FormsModule, RouterLink, AvatarFallbackComponent],
  templateUrl: './students-details.component.html',
  styleUrl: './students-details.component.scss'
})
export class StudentsDetailsComponent implements OnInit {
  routes = routes;
  student: any = null;
  loading = true;
  studentId: string | null = null;

  constructor(
    private courseService: CourseService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get student ID from route params
    this.studentId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.studentId) {
      this.loadStudentDetails();
    } else {
      this.loading = false;
    }
  }

  private loadStudentDetails(): void {
    // Fetch all instructor students and filter by unique student ID
    this.courseService.getInstructorStudents().subscribe({
      next: (data: any[]) => {
        const students = this.mergeStudentsByIdentity(Array.isArray(data) ? data : []);
        this.student = students.find(
          (s: any) =>
            String(s?.studentId || s?.userId || s?.studentEmail || s?.email) === String(this.studentId)
        ) || null;
        this.loading = false;
      },
      error: () => {
        this.student = null;
        this.loading = false;
      }
    });
  }

  getInitial(name: string): string {
    return name ? name.charAt(0).toUpperCase() : '?';
  }

  getStudentName(student: any): string {
    return student?.studentName || student?.name || 'Étudiant inconnu';
  }

  getStudentEmail(student: any): string {
    return student?.studentEmail || student?.email || 'Email non disponible';
  }

  getCourseTitle(student: any): string {
    return student?.courseTitle || student?.courseName || 'Cours inconnu';
  }

  getCourseItems(student: any = this.student): any[] {
    return Array.isArray(student?.courseItems) ? student.courseItems : [];
  }

  getCourseCount(student: any = this.student): number {
    return this.getCourseItems(student).length;
  }

  getCompletedCourseCount(student: any = this.student): number {
    return this.getCourseItems(student).filter((course: any) => Number(course?.progress ?? 0) >= 100).length;
  }

  getAverageProgress(student: any = this.student): number {
    return this.getProgress(student);
  }

  getProgressLabel(student: any = this.student): string {
    const progress = this.getAverageProgress(student);
    if (progress >= 100) return 'Parcours terminé';
    if (progress >= 75) return 'Très avancé';
    if (progress >= 40) return 'En progression';
    if (progress > 0) return 'Début de parcours';
    return 'Aucun avancement';
  }

  getProgressTone(student: any = this.student): 'success' | 'primary' | 'info' | 'warning' | 'secondary' {
    const progress = this.getAverageProgress(student);
    if (progress >= 100) return 'success';
    if (progress >= 75) return 'primary';
    if (progress >= 40) return 'info';
    if (progress > 0) return 'warning';
    return 'secondary';
  }

  getLastActivity(student: any = this.student): string {
    return this.formatDate(student?.enrolledAt || student?.createdAt || student?.joinedAt);
  }

  getAvatarUrl(student: any = this.student): string | null {
    const raw =
      student?.studentAvatar ||
      student?.avatarPath ||
      student?.avatar ||
      student?.profileImage ||
      student?.photoUrl ||
      '';

    const resolved = this.authService.resolveAvatarUrl(raw);
    return resolved || null;
  }

  getProgress(student: any): number {
    const value = Number(student?.aggregateProgress ?? student?.completionPercentage ?? student?.progress ?? 0);
    return Number.isFinite(value) ? Math.max(0, Math.min(100, value)) : 0;
  }

  formatDate(value: any): string {
    if (!value) return 'Date inconnue';
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return String(value);
    return date.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  sendMessage(): void {
    const targetUserId = Number(this.student?.userId || this.student?.studentId || this.studentId || 0);

    // Navigate in SPA mode to preserve app state
    this.router.navigate([this.routes.instructorMessage], {
      queryParams: {
        studentUserId: Number.isFinite(targetUserId) && targetUserId > 0 ? targetUserId : null,
        studentId: this.studentId,
        studentName: this.getStudentName(this.student),
        studentAvatar: this.student?.studentAvatar || this.student?.avatarPath || null
      }
    });
  }

  private mergeStudentsByIdentity(rows: any[]): any[] {
    const map = new Map<string, any>();

    rows.forEach((row: any, index: number) => {
      const key = this.getStudentKey(row, index);
      const currentCourses = this.extractCourseTitles(row?.courseTitle || row?.courseName || '');
      const rowProgress = this.getProgressValue(row);
      const rowCompleted = rowProgress >= 100;

      if (!map.has(key)) {
        const courseProgressMap: Record<string, number> = {};
        currentCourses.forEach((courseTitle: string) => {
          courseProgressMap[courseTitle] = rowProgress;
        });

        const rowAvatar = this.extractAvatar(row);

        map.set(key, {
          ...row,
          studentId: row?.studentId || row?.userId || row?.studentEmail || row?.email || String(index + 1),
          studentAvatar: rowAvatar,
          avatarPath: rowAvatar,
          courseTitles: [...currentCourses],
          courseProgressMap,
          progressSum: rowProgress,
          progressCount: 1,
          completedCourses: rowCompleted ? 1 : 0,
        });
        return;
      }

      const existing = map.get(key);
      const rowAvatar = this.extractAvatar(row);
      if (!this.extractAvatar(existing) && rowAvatar) {
        existing.studentAvatar = rowAvatar;
        existing.avatarPath = rowAvatar;
      }

      currentCourses.forEach((courseTitle: string) => {
        if (courseTitle && !existing.courseTitles.includes(courseTitle)) {
          existing.courseTitles.push(courseTitle);
        }
        const prev = Number(existing.courseProgressMap?.[courseTitle] ?? 0);
        existing.courseProgressMap[courseTitle] = Math.max(prev, rowProgress);
      });

      existing.progressSum += rowProgress;
      existing.progressCount += 1;
      if (rowCompleted) {
        existing.completedCourses += 1;
      }
    });

    return Array.from(map.values()).map((student: any) => ({
      ...student,
      courseTitle: student.courseTitles.length > 0 ? student.courseTitles.join(' • ') : (student?.courseTitle || student?.courseName || 'Cours'),
      aggregateProgress: student.progressCount > 0 ? Math.round(student.progressSum / student.progressCount) : 0,
      totalCourses: student.progressCount || 0,
      courseItems: student.courseTitles.map((title: string) => {
        const progress = Number(student.courseProgressMap?.[title] ?? 0);
        return {
          title,
          progress,
          status: progress >= 100 ? 'Termine' : 'En cours'
        };
      })
    }));
  }

  private getStudentKey(student: any, index: number): string {
    const rawKey = student?.studentId || student?.userId || student?.studentEmail || student?.email || student?.enrollmentId;
    return String(rawKey || `student-${index}`);
  }

  private getProgressValue(student: any): number {
    const value = Number(student?.completionPercentage ?? student?.progress ?? 0);
    return Number.isFinite(value) ? Math.max(0, Math.min(100, value)) : 0;
  }

  private extractCourseTitles(rawValue: any): string[] {
    const raw = String(rawValue || '').trim();
    if (!raw) return [];
    return raw
      .split(/[,;|•]/)
      .map((part: string) => part.trim())
      .filter((part: string) => !!part)
      .filter((value: string, index: number, self: string[]) => self.indexOf(value) === index);
  }

  private extractAvatar(student: any): string {
    return (
      student?.studentAvatar ||
      student?.avatarPath ||
      student?.avatar ||
      student?.profileImage ||
      student?.photoUrl ||
      ''
    );
  }
}
