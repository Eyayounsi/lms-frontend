import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { CourseService } from '../../../shared/service/course/course.service';
import { routes } from '../../../shared/service/routes/routes';
import { resolveCourseImage } from '../../../shared/utils/course-image.util';

@Component({
  selector: 'app-course-resume',
  imports: [CommonModule, RouterLink],
  templateUrl: './course-resume.component.html',
  styleUrl: './course-resume.component.scss'
})
export class CourseResumeComponent implements OnInit {
  routes = routes;
  enrolledCourses: any[] = [];
  loading = true;
  isLoggedIn = false;

  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role') || '';
    this.isLoggedIn = !!token;

    if (!this.isLoggedIn || !role.includes('STUDENT')) {
      this.loading = false;
      return;
    }

    this.courseService.getMyEnrolledCourses().subscribe({
      next: (courses) => {
        this.enrolledCourses = courses;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  watchCourse(courseId: number): void {
    this.router.navigate([routes.courseWatch], { queryParams: { courseId } });
  }

  getTotalLessons(course: any): number {
    if (!course.sections) return 0;
    return course.sections.reduce((total: number, section: any) => {
      return total + (section.lessons ? section.lessons.length : 0);
    }, 0);
  }

  getImageUrl(image: string): string {
    if (!image) return 'assets/img/course-img/courses-01.jpg';
    if (image.startsWith('preset:')) return `assets/img/course-img/${image.replace('preset:', '')}`;
    if (image.startsWith('http')) return image;
    return resolveCourseImage(image);
  }
}