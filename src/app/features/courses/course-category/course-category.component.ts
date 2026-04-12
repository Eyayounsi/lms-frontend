import { Component } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CourseService } from '../../../shared/service/course/course.service';

@Component({
  selector: 'app-course-category',
  imports : [CommonModule,RouterLink],
  templateUrl: './course-category.component.html',
  styleUrl: './course-category.component.scss'
})
export class CourseCategoryComponent {
  routes = routes;
  categories: any[] = [];
  loading = true;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  private loadCategories(): void {
    this.loading = true;

    this.courseService.getCategories().subscribe({
      next: (cats) => {
        const categories = Array.isArray(cats) ? cats : [];

        this.courseService.getPublishedCourses().subscribe({
          next: (courses) => {
            const list = Array.isArray(courses) ? courses : [];
            this.categories = categories.map((cat: any) => {
              const count = list.filter((c: any) => this.isCourseInCategory(c, cat)).length;
              return {
                ...cat,
                courseCount: count
              };
            });
            this.loading = false;
          },
          error: () => {
            this.categories = categories.map((cat: any) => ({ ...cat, courseCount: 0 }));
            this.loading = false;
          }
        });
      },
      error: () => {
        this.categories = [];
        this.loading = false;
      }
    });
  }

  private isCourseInCategory(course: any, category: any): boolean {
    const courseCatId = Number(course?.categoryId || course?.category?.id || 0);
    const catId = Number(category?.id || 0);
    if (catId > 0 && courseCatId > 0) {
      return courseCatId === catId;
    }

    const courseName = String(course?.categoryName || course?.category?.name || '').trim().toLowerCase();
    const catName = String(category?.name || '').trim().toLowerCase();
    return !!courseName && !!catName && courseName === catName;
  }

  getCategoryIconClass(icon?: string, categoryName?: string): string {
    const name = (categoryName || '').toLowerCase();
    if (name.includes('cloud') || name.includes('aws') || name.includes('azure') || name.includes('gcp')) return 'fa-solid fa-cloud';
    if (name.includes('cyber') || name.includes('securit') || name.includes('security') || name.includes('devsec')) return 'fa-solid fa-shield-halved';
    if (name.includes('devops') || name.includes('cicd') || name.includes('ci/cd') || name.includes(' ops')) return 'fa-solid fa-infinity';
    if (name.includes('network') || name.includes('reseau') || name.includes('réseau')) return 'fa-solid fa-network-wired';
    if (name.includes('mobile') || name.includes('android') || name.includes('ios') || name.includes('flutter')) return 'fa-solid fa-mobile-screen';
    if (name.includes('design') || name.includes('ui') || name.includes('ux') || name.includes('graph')) return 'fa-solid fa-pen-ruler';
    if (name.includes('market') || name.includes('business') || name.includes('commerce') || name.includes('sales')) return 'fa-solid fa-chart-line';
    if (name.includes('program') || name.includes('dev') || name.includes('web') || name.includes('informat') || name.includes('code')) return 'fa-solid fa-code';
    if (name.includes('data') || name.includes(' ai') || name.includes(' ia') || name.includes('machine') || name.includes('intelligence')) return 'fa-solid fa-brain';
    if (name.includes('lang') || name.includes('communication')) return 'fa-solid fa-language';
    if (icon && icon.startsWith('fa-')) return icon;
    return 'fa-solid fa-layer-group';
  }

  getCategoryColorClass(categoryName?: string): string {
    const name = (categoryName || '').toLowerCase();
    if (name.includes('devsec') || name.includes('cyber') || name.includes('security')) return 'cat-red';
    if (name.includes('cloud')) return 'cat-sky';
    if (name.includes('devops')) return 'cat-amber';
    if (name.includes('network') || name.includes('reseau') || name.includes('réseau') || name.includes('mobile')) return 'cat-teal';
    if (name.includes('design') || name.includes('ui') || name.includes('ux')) return 'cat-pink';
    if (name.includes('market') || name.includes('business') || name.includes('commerce')) return 'cat-emerald';
    if (name.includes('program') || name.includes('dev') || name.includes('web') || name.includes('code')) return 'cat-indigo';
    if (name.includes('data') || name.includes(' ai') || name.includes(' ia')) return 'cat-purple';
    return 'cat-slate';
  }
}
