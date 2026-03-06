import { Component, OnInit } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { CourseService } from '../../../shared/service/course/course.service';

@Component({
  selector: 'app-course-list',
  imports : [CommonModule,RouterLink,MatSliderModule,FormsModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent implements OnInit {
  constructor(private courseService: CourseService, private router: Router) {}

  courses: any[] = [];
  filteredCourses: any[] = [];
  loading = true;
  routes=routes;
  isSelected:boolean[]=[false];
  startValue = 0;
  endValue = 5000;
  searchTerm = '';
  sortOption = '';
  priceFilter = '';
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
  iconSelect(index:number) : void{
    this.isSelected[index]=!this.isSelected[index]
  }

  ngOnInit(): void {
    this.courseService.getPublishedCourses().subscribe({
      next: (data) => {
        this.courses = data;
        this.filteredCourses = data;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  applyFilters(): void {
    let result = [...this.courses];

    if (this.searchTerm.trim()) {
      const q = this.searchTerm.toLowerCase();
      result = result.filter(c =>
        (c.title || '').toLowerCase().includes(q) ||
        (c.instructorName || '').toLowerCase().includes(q) ||
        (c.categoryName || '').toLowerCase().includes(q)
      );
    }

    if (this.priceFilter === 'free') {
      result = result.filter(c => !c.price || c.price === 0);
    } else if (this.priceFilter === 'paid') {
      result = result.filter(c => c.price && c.price > 0);
    }

    result = result.filter(c => {
      const price = c.effectivePrice ?? c.price ?? 0;
      return price >= this.startValue && price <= this.endValue;
    });

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
    this.router.navigate([routes.courseDetails2], { queryParams: { courseId } });
  }

  formatPrice(course: any): string {
    if (!course.price || course.price === 0) return 'Free';
    if (course.effectivePrice !== undefined && course.effectivePrice < course.price) {
      return '$' + course.effectivePrice;
    }
    return '$' + course.price;
  }

  getImageUrl(image: string): string {
    if (!image) return 'assets/img/course/course-01.jpg';
    if (image.startsWith('http')) return image;
    return `http://localhost:8081/api/files/${image}`;
  }

  getAvatarUrl(avatar: string): string {
    if (!avatar) return 'assets/img/user/user-01.jpg';
    if (avatar.startsWith('http')) return avatar;
    return `http://localhost:8081/api/files/${avatar}`;
  }

  getLevelLabel(level: string): string {
    const map: Record<string, string> = {
      BEGINNER: 'Beginner', INTERMEDIATE: 'Intermediate', ADVANCED: 'Advanced', EXPERT: 'Expert'
    };
    return map[level] || level || 'All Levels';
  }
}
