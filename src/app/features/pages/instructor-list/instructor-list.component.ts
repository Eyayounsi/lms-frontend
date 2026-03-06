import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { routes } from '../../../shared/service/routes/routes';
import { CourseService } from '../../../shared/service/course/course.service';

@Component({
  selector: 'app-instructor-list',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './instructor-list.component.html',
  styleUrl: './instructor-list.component.scss'
})
export class InstructorListComponent implements OnInit {
  routes = routes;
  instructors: any[] = [];
  filteredInstructors: any[] = [];
  loading = true;
  searchTerm = '';

  // Pagination
  currentPage = 1;
  pageSize = 6;

  get totalPages(): number {
    return Math.ceil(this.filteredInstructors.length / this.pageSize);
  }

  get paginatedInstructors(): any[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredInstructors.slice(start, start + this.pageSize);
  }

  getPageRange(): number[] {
    const total = this.totalPages;
    if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
    const range: number[] = [];
    for (let i = Math.max(2, this.currentPage - 1); i <= Math.min(total - 1, this.currentPage + 1); i++) range.push(i);
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
              ratingCount: 0,
              categories: new Set<string>()
            });
          }
          const inst = map.get(c.instructorId)!;
          inst.courseCount++;
          if (c.averageRating) {
            inst.totalRating += c.averageRating;
            inst.ratingCount++;
          }
          if (c.categoryName) inst.categories.add(c.categoryName);
        }
        this.instructors = Array.from(map.values()).map(inst => ({
          ...inst,
          avgRating: inst.ratingCount > 0 ? (inst.totalRating / inst.ratingCount).toFixed(1) : null,
          reviewCount: inst.ratingCount,
          categories: Array.from(inst.categories)
        }));
        this.filteredInstructors = [...this.instructors];
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  applySearch(): void {
    const q = this.searchTerm.trim().toLowerCase();
    this.filteredInstructors = q
      ? this.instructors.filter(i => i.name.toLowerCase().includes(q))
      : [...this.instructors];
    this.currentPage = 1;
  }

  getAvatarUrl(path: string): string {
    if (!path) return 'assets/img/avatar/avatar10.jpg';
    return `http://localhost:8081/${path}`;
  }
}
