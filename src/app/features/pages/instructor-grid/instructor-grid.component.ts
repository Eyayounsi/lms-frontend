import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { routes } from '../../../shared/service/routes/routes';
import { CourseService } from '../../../shared/service/course/course.service';
import { resolveAvatarImage } from '../../../shared/utils/avatar-image.util';

@Component({
  selector: 'app-instructor-grid',
  imports: [CommonModule, RouterLink],
  templateUrl: './instructor-grid.component.html',
  styleUrl: './instructor-grid.component.scss'
})
export class InstructorGridComponent implements OnInit {
  routes = routes;

  instructors: any[] = [];
  loading = true;

  // Pagination
  currentPage = 1;
  pageSize = 9;

  get totalPages(): number {
    return Math.ceil(this.instructors.length / this.pageSize);
  }

  get paginatedInstructors(): any[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.instructors.slice(start, start + this.pageSize);
  }

  getPageRange(): number[] {
    const total = this.totalPages;
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
    const range: number[] = [];
    for (let i = Math.max(2, this.currentPage - 2); i <= Math.min(total - 1, this.currentPage + 2); i++) range.push(i);
    return [1, ...range, total];
  }

  goToPage(p: number): void {
    if (p < 1 || p > this.totalPages) return;
    this.currentPage = p;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getPublishedCourses().subscribe({
      next: (courses) => {
        const map = new Map<number, any>();
        for (const c of courses) {
          if (!c.instructorId) continue;
          if (!map.has(c.instructorId)) {
            map.set(c.instructorId, {
              id: c.instructorId,
              name: c.instructorName || 'Instructeur',
              avatar: c.instructorAvatar,
              courseCount: 0,
              totalRating: 0,
              ratingCount: 0
            });
          }
          const inst = map.get(c.instructorId)!;
          inst.courseCount++;
          if (c.averageRating) {
            inst.totalRating += c.averageRating;
            inst.ratingCount++;
          }
        }
        this.instructors = Array.from(map.values()).map(inst => ({
          ...inst,
          avgRating: inst.ratingCount > 0 ? (inst.totalRating / inst.ratingCount).toFixed(1) : '0.0'
        }));
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  getAvatarUrl(path: string): string {
    return resolveAvatarImage(path, 'assets/img/avatar/avatar10.jpg');
  }
}
