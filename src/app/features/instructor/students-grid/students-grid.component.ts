import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CourseService } from '../../../shared/service/course/course.service';
import { routes } from '../../../shared/service/routes/routes';
import { CustomPaginationComponent } from '../../../shared/service/custom-pagination/custom-pagination.component';
import { PaginationService, pageSelection, tablePageSize } from '../../../shared/service/custom-pagination/pagination.service';
import { AuthService } from '../../../shared/service/auth/auth.service';

@Component({
  selector: 'app-students-grid',
  imports : [CommonModule, FormsModule, RouterLink, CustomPaginationComponent],
  templateUrl: './students-grid.component.html',
  styleUrl: './students-grid.component.scss'
})
export class StudentsGridComponent implements OnInit {
  routes = routes;
  students: any[] = [];
  filteredStudents: any[] = [];
  tableData: any[] = [];
  tableDataCopy: any[] = [];
  serialNumberArray: number[] = [];
  totalData = 0;
  pageSelection: pageSelection[] = [];
  currentPage = 1;
  skip = 0;
  searchValue = '';
  loading = true;
  private avatarLoadErrors = new Set<string>();
  pageSize = 9;
  limit: number = this.pageSize;

  constructor(
    private courseService: CourseService,
    private router: Router,
    private pagination: PaginationService,
    private authService: AuthService,
  ) {
    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
      if (this.router.url === this.routes.studentsGrid) {
        this.getTableData({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });
  }

  ngOnInit(): void {
    this.courseService.getInstructorStudents().subscribe({
      next: (data) => {
        this.students = this.mergeStudentsByIdentity(Array.isArray(data) ? data : []);
        this.filteredStudents = [...this.students];
        this.totalData = this.filteredStudents.length;
        this.getTableData({ skip: this.skip, limit: this.limit });
        this.loading = false;
      },
      error: () => {
        this.students = [];
        this.filteredStudents = [];
        this.totalData = 0;
        this.getTableData({ skip: this.skip, limit: this.limit });
        this.loading = false;
      }
    });
  }

  searchData(value: string): void {
    const query = (value || '').toLowerCase().trim();
    if (!query) {
      this.filteredStudents = [...this.students];
      this.skip = 0;
      this.currentPage = 1;
      this.getTableData({ skip: this.skip, limit: this.limit });
      return;
    }

    this.filteredStudents = this.students.filter((student) => {
      const name = (student?.studentName || student?.name || '').toLowerCase();
      const email = (student?.studentEmail || student?.email || '').toLowerCase();
      const course = (student?.courseTitle || student?.courseName || '').toLowerCase();
      return name.includes(query) || email.includes(query) || course.includes(query);
    });
    this.skip = 0;
    this.currentPage = 1;
    this.getTableData({ skip: this.skip, limit: this.limit });
  }

  getInitial(name: string): string {
    return name ? name.charAt(0).toUpperCase() : '?';
  }

  getStudentName(student: any): string {
    return student?.studentName || student?.name || 'Étudiant';
  }

  getStudentEmail(student: any): string {
    return student?.studentEmail || student?.email || '';
  }

  getCourseTitle(student: any): string {
    return student?.courseTitle || student?.courseName || 'Cours';
  }

  getStudentAvatar(student: any): string {
    const image = String(student?.studentAvatar || student?.avatarPath || student?.avatar || '').trim();
    if (!image) return '';
    return this.authService.resolveAvatarUrl(image) || '';
  }

  hasValidAvatar(student: any): boolean {
    const key = this.getStudentRenderKey(student);
    return !!this.getStudentAvatar(student) && !this.avatarLoadErrors.has(key);
  }

  onAvatarError(student: any): void {
    this.avatarLoadErrors.add(this.getStudentRenderKey(student));
  }

  getStudentAvatarGradient(student: any): string {
    const palettes = [
      'linear-gradient(135deg,#6366f1,#8b5cf6)',
      'linear-gradient(135deg,#0ea5e9,#06b6d4)',
      'linear-gradient(135deg,#f59e0b,#f97316)',
      'linear-gradient(135deg,#10b981,#14b8a6)',
      'linear-gradient(135deg,#ec4899,#f43f5e)',
      'linear-gradient(135deg,#7c3aed,#a855f7)'
    ];
    const key = this.getStudentRenderKey(student);
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = ((hash << 5) - hash) + key.charCodeAt(i);
      hash |= 0;
    }
    return palettes[Math.abs(hash) % palettes.length];
  }

  private getTableData(pageOption: pageSelection): void {
    this.tableData = [];
    this.tableDataCopy = [];
    this.serialNumberArray = [];
    this.totalData = this.filteredStudents.length;

    this.filteredStudents.forEach((res: any, index: number) => {
      const serialNumber = index + 1;
      if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
        this.tableData.push(res);
        this.tableDataCopy.push(res);
        this.serialNumberArray.push(serialNumber);
      }
    });

    this.pagination.calculatePageSize.next({
      totalData: this.totalData,
      pageSize: this.pageSize,
      tableData: this.tableData,
      tableDataCopy: this.tableDataCopy,
      serialNumberArray: this.serialNumberArray,
    });
  }

  getProgress(student: any): number {
    const value = Number(student?.aggregateProgress ?? student?.completionPercentage ?? student?.progress ?? 0);
    return Number.isFinite(value) ? Math.max(0, Math.min(100, value)) : 0;
  }

  formatDate(value: any): string {
    if (!value) return 'Date inconnue';
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return String(value);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
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
        map.set(key, {
          ...row,
          studentId: row?.studentId || row?.userId || row?.enrollmentId || row?.studentEmail || row?.email || String(index + 1),
          courseTitles: [...currentCourses],
          progressSum: rowProgress,
          progressCount: 1,
          completedCourses: rowCompleted ? 1 : 0,
        });
        return;
      }

      const existing = map.get(key);
      currentCourses.forEach((courseTitle: string) => {
        if (courseTitle && !existing.courseTitles.includes(courseTitle)) {
          existing.courseTitles.push(courseTitle);
        }
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
    }));
  }

  private getStudentKey(student: any, index: number): string {
    const rawKey = student?.studentId || student?.userId || student?.studentEmail || student?.email || student?.enrollmentId;
    return String(rawKey || `student-${index}`);
  }

  private getStudentRenderKey(student: any): string {
    return String(student?.studentId || student?.userId || student?.studentEmail || student?.email || student?.studentName || 'student');
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
}
