import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProfileService } from '../../../shared/service/profile/profile.service';

@Component({
  selector: 'app-instructor-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './instructor-details.component.html',
  styleUrl: './instructor-details.component.scss'
})
export class InstructorDetailsComponent implements OnInit {
  instructor: any = null;
  courses: any[] = [];
  education: any[] = [];
  experience: any[] = [];
  loading = true;

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
    if (!path) return 'assets/img/user/user-61.jpg';
    if (path.startsWith('http')) return path;
    return 'http://localhost:8081/' + (path.startsWith('/') ? path.substring(1) : path);
  }

  getThumbnailUrl(path: string): string {
    if (!path) return 'assets/img/course/course-02.jpg';
    if (path.startsWith('http')) return path;
    return 'http://localhost:8081/' + (path.startsWith('/') ? path.substring(1) : path);
  }
}
