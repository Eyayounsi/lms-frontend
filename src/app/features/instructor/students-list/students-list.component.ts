import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import { CustomPaginationComponent } from '../../../shared/service/custom-pagination/custom-pagination.component';
import { PaginationService, tablePageSize } from '../../../shared/service/custom-pagination/pagination.service';
import { CourseService } from '../../../shared/service/course/course.service';
import { routes } from '../../../shared/service/routes/routes';
import { instructorStudentList, pageSelection } from '../../../shared/models/model';
import { AuthService } from '../../../shared/service/auth/auth.service';

@Component({
  selector: 'app-students-list',
  imports :[RouterLink,FormsModule,CommonModule,MatSortModule,CustomPaginationComponent],
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.scss'
})
export class StudentsListComponent implements OnInit {
routes = routes;
// pagination variables
public pageSize = 10;
public tableData: instructorStudentList[] = [];
public tableDataCopy: instructorStudentList[] = [];
public actualData: instructorStudentList[] = [];
public filteredData: instructorStudentList[] = [];
public currentPage = 1;
public skip = 0;
public limit: number = this.pageSize;
public serialNumberArray: number[] = [];
public totalData = 0;
public pageSelection: pageSelection[] = [];
dataSource!: MatTableDataSource<instructorStudentList>;
public searchDataValue = '';
private imageLoadErrors = new Set<string>();

constructor(
  private courseService: CourseService,
  private router: Router,
  private pagination: PaginationService,
  private authService: AuthService
) {
  this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
    if (this.router.url === this.routes.studentsList) {
      this.getTableData({ skip: res.skip, limit: res.limit });
      this.pageSize = res.pageSize;
    }
  });
}

ngOnInit(): void {
  this.loadStudents();
}

private loadStudents(): void {
  this.courseService.getInstructorStudents().subscribe({
    next: (students: any[]) => {
      const uniqueStudents = this.mergeStudentsByIdentity(students || []);
      this.actualData = uniqueStudents.map((student: any, index: number) => {
        const progress = this.getProgressValue(student);
        return {
          sNo: index + 1,
          studentId: String(student?.studentId || student?.userId || student?.studentEmail || student?.email || index + 1),
          img: student?.studentAvatar || student?.avatarPath || student?.avatar || '',
          studentName: student?.studentName || student?.name || 'Étudiant',
          enrollDate: this.formatDate(student?.enrolledAt || student?.createdAt || student?.joinedAt),
          progress: `${progress}%`,
          courses: student?.courseTitle || student?.courseName || 'Cours',
          width: `${progress}%`
        };
      });
      this.filteredData = [...this.actualData];
      this.totalData = this.filteredData.length;
      this.getTableData({ skip: this.skip, limit: this.limit });
    },
    error: () => {
      this.actualData = [];
      this.filteredData = [];
      this.totalData = 0;
      this.getTableData({ skip: this.skip, limit: this.limit });
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
      map.set(key, {
        ...row,
        studentId: row?.studentId || row?.userId || row?.studentEmail || row?.email || String(index + 1),
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

private getTableData(pageOption: pageSelection): void {
  this.tableData = [];
  this.tableDataCopy = [];
  this.serialNumberArray = [];
  this.totalData = this.filteredData.length;

  this.filteredData.forEach((res: instructorStudentList, index: number) => {
    const serialNumber = index + 1;
    if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
      res.sNo = serialNumber;
      this.tableData.push(res);
      this.tableDataCopy.push(res);
      this.serialNumberArray.push(serialNumber);
    }
  });

  this.dataSource = new MatTableDataSource<instructorStudentList>(this.filteredData);
  this.pagination.calculatePageSize.next({
    totalData: this.totalData,
    pageSize: this.pageSize,
    tableData: this.tableData,
    tableDataCopy: this.tableDataCopy,
    serialNumberArray: this.serialNumberArray,
  });
}

public searchData(value: string): void {
  const query = (value || '').trim().toLowerCase();

  if (!query) {
    this.filteredData = [...this.actualData];
  } else {
    this.filteredData = this.actualData.filter((student) => {
      const studentId = String(student?.studentId || '').toLowerCase();
      const name = String(student?.studentName || '').toLowerCase();
      const courses = String(student?.courses || '').toLowerCase();
      return studentId.includes(query) || name.includes(query) || courses.includes(query);
    });
  }

  this.skip = 0;
  this.currentPage = 1;
  this.getTableData({ skip: this.skip, limit: this.limit });
}

public sortData(sort: Sort): void {
  const data = this.tableData.slice();

  if (!sort.active || sort.direction === '') {
    this.tableData = data;
  } else {
    this.tableData = data.sort((a, b) => {
      const aValue = (a as never)[sort.active];
      const bValue = (b as never)[sort.active];
      return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
    });
  }
}

public changePageSize(pageSize: number): void {
  this.pageSelection = [];
  this.limit = pageSize;
  this.skip = 0;
  this.currentPage = 1;
  this.pagination.tablePageSize.next({
    skip: this.skip,
    limit: this.limit,
    pageSize: this.pageSize,
  });
}

private getProgressValue(student: any): number {
  const value = Number(student?.aggregateProgress ?? student?.completionPercentage ?? student?.progress ?? 0);
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

private formatDate(value: any): string {
  if (!value) return 'Date inconnue';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  return date.toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
}

public getStudentImage(student: instructorStudentList): string {
  const image = String(student?.img || '').trim();
  if (!image) return '';
  return this.authService.resolveAvatarUrl(image) || '';
}

public hasStudentImage(student: instructorStudentList): boolean {
  return !!this.getStudentImage(student) && !this.imageLoadErrors.has(this.getStudentRenderKey(student));
}

public onStudentImageError(student: instructorStudentList): void {
  this.imageLoadErrors.add(this.getStudentRenderKey(student));
}

public getStudentInitial(name: string): string {
  return (name || '?').trim().charAt(0).toUpperCase() || '?';
}

public getStudentAvatarGradient(student: instructorStudentList): string {
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

private getStudentRenderKey(student: instructorStudentList): string {
  return String(student?.studentId || student?.studentName || student?.img || 'student');
}
}
