import { Component, OnInit } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { CourseService } from '../../../shared/service/course/course.service';
import { resolveCourseImage } from '../../../shared/utils/course-image.util';
import { resolveAvatarImage } from '../../../shared/utils/avatar-image.util';

@Component({
  selector: 'app-course-grid',
  imports : [CommonModule,RouterLink,MatSliderModule,FormsModule],
  templateUrl: './course-grid.component.html',
  styleUrl: './course-grid.component.scss'
})
export class CourseGridComponent implements OnInit {
  constructor(private courseService: CourseService, private router: Router, private activatedRoute: ActivatedRoute) {}

  courses: any[] = [];
  filteredCourses: any[] = [];
  loading = true;
  routes=routes;
  wishlistSet = new Set<number>();
  startValue = 0;
  endValue = 5000;
  searchTerm = '';
  sortOption = '';
  priceFilter = '';
  private isStudentContext = false;
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value) + '';
    }
  
    return `${value}`;
  }
  formatLabel1(value: number): string {
    if (value >= 5000) {
      return '$'+ Math.round(value / 5000) ;
    }
  
    return `$${value}`;
  }
  iconSelect(courseId: number): void {
    if (this.wishlistSet.has(courseId)) {
      this.wishlistSet.delete(courseId);
      this.courseService.removeFromWishlist(courseId).subscribe();
    } else {
      this.wishlistSet.add(courseId);
      this.courseService.addToWishlist(courseId).subscribe();
    }
  }

  ngOnInit(): void {
    this.isStudentContext = this.router.url.startsWith('/student');

    this.courseService.getPublishedCourses().subscribe({
      next: (data) => {
        this.courses = data;
        this.filteredCourses = data;
        this.loading = false;
        // Load wishlist state for each course
        data.forEach((c: any) => {
          this.courseService.checkWishlist(c.id).subscribe({
            next: (res) => { if (res.inWishlist) this.wishlistSet.add(c.id); },
            error: () => {}
          });
        });
      },
      error: () => { this.loading = false; }
    });
  }

  applyFilters(): void {
    let result = [...this.courses];

    // Search
    if (this.searchTerm.trim()) {
      const q = this.searchTerm.toLowerCase();
      result = result.filter(c =>
        (c.title || '').toLowerCase().includes(q) ||
        (c.instructorName || '').toLowerCase().includes(q) ||
        (c.categoryName || '').toLowerCase().includes(q)
      );
    }

    // Price filter
    if (this.priceFilter === 'free') {
      result = result.filter(c => !c.price || c.price === 0);
    } else if (this.priceFilter === 'paid') {
      result = result.filter(c => c.price && c.price > 0);
    }

    // Range filter
    result = result.filter(c => {
      const price = c.effectivePrice ?? c.price ?? 0;
      return price >= this.startValue && price <= this.endValue;
    });

    // Sort
    if (this.sortOption === 'newest') {
      result.sort((a, b) => (b.id || 0) - (a.id || 0));
    } else if (this.sortOption === 'toprated') {
      result.sort((a, b) => (b.averageRating || 0) - (a.averageRating || 0));
    } else if (this.sortOption === 'free') {
      result = result.filter(c => !c.price || c.price === 0);
    }

    this.filteredCourses = result;
  }

  goToCourse(courseId: number): void {
    const target = this.isStudentContext ? routes.studentCourseDetails : routes.courseDetails2;
    this.router.navigate([target], { queryParams: { courseId } });
  }

  formatPrice(course: any): string {
    if (!course.price || course.price === 0) return 'Free';
    if (course.effectivePrice !== undefined && course.effectivePrice < course.price) {
      return '$' + course.effectivePrice;
    }
    return '$' + course.price;
  }

  getImageUrl(image: string): string {
    if (!image) return 'assets/img/course-img/courses-01.jpg';
    if (image.startsWith('preset:')) return `assets/img/course-img/${image.replace('preset:', '')}`;
    if (image.startsWith('http')) return image;
    return resolveCourseImage(image);
  }

  getAvatarUrl(avatar: string): string {
    return resolveAvatarImage(avatar, 'assets/img/user/user-01.jpg');
  }
}
