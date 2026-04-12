import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProfileService } from '../../../shared/service/profile/profile.service';
import { routes } from '../../../shared/service/routes/routes';
import { resolveAvatarImage } from '../../../shared/utils/avatar-image.util';
import { resolveCourseImage } from '../../../shared/utils/course-image.util';

@Component({
  selector: 'app-instructor-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './instructor-details.component.html',
  styleUrl: './instructor-details.component.scss'
})
export class InstructorDetailsComponent implements OnInit {
  routes = routes;
  instructor: any = null;
  courses: any[] = [];
  education: any[] = [];
  experience: any[] = [];
  loading = true;
  private failedCourseImageKeys = new Set<string>();

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('instructorId');
    if (id) {
      this.loadInstructor(+id);
    }
  }

  loadInstructor(id: number): void {
    this.loading = true;
    this.profileService.getInstructorProfile(id).subscribe({
      next: (data) => {
        this.instructor = data;
        this.courses = data.courses || [];
        try { this.education = JSON.parse(data.educationJson || '[]'); } catch { this.education = []; }
        try { this.experience = JSON.parse(data.experienceJson || '[]'); } catch { this.experience = []; }
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  getAvatarUrl(path: string): string {
    return resolveAvatarImage(path, 'assets/img/user/user-61.jpg');
  }

  getCourseImage(course: any): string {
    const candidates = [
      course?.coverImage,
      course?.thumbnailUrl,
      course?.coverImageUrl,
      course?.thumbnail,
      course?.imageUrl,
      course?.image,
      course?.courseImageUrl,
      course?.courseImage
    ];
    const found = candidates.find((v: any) => typeof v === 'string' && v.trim().length > 0);
    return found ? resolveCourseImage(found, '') : '';
  }

  hasCourseImage(course: any): boolean {
    const key = this.getCourseKey(course);
    return !!this.getCourseImage(course) && !this.failedCourseImageKeys.has(key);
  }

  onCourseImageError(course: any): void {
    this.failedCourseImageKeys.add(this.getCourseKey(course));
  }

  getCoursePlaceholderGradient(course: any): string {
    const gradients = [
      'linear-gradient(135deg, #5625E8 0%, #02a8b5 100%)',
      'linear-gradient(135deg, #FD3995 0%, #9b59b6 100%)',
      'linear-gradient(135deg, #02a8b5 0%, #5625E8 100%)',
      'linear-gradient(135deg, #9b59b6 0%, #FD3995 100%)'
    ];
    const key = this.getCourseKey(course);
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = ((hash << 5) - hash) + key.charCodeAt(i);
      hash |= 0;
    }
    return gradients[Math.abs(hash) % gradients.length];
  }

  private getCourseKey(course: any): string {
    return String(course?.id || course?.slug || course?.title || Math.random());
  }
}
