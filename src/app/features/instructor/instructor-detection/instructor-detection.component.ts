import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetectionService, DetectionRemarkItem } from '../../../shared/service/detection/detection.service';
import { CourseService } from '../../../shared/service/course/course.service';

@Component({
  selector: 'app-instructor-detection',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './instructor-detection.component.html',
  styleUrl: './instructor-detection.component.scss'
})
export class InstructorDetectionComponent implements OnInit {

  myCourses: any[] = [];
  selectedCourseId: number | null = null;
  selectedCourseTitle = '';
  remarks: DetectionRemarkItem[] = [];
  filteredRemarks: DetectionRemarkItem[] = [];
  loading = false;
  coursesLoading = true;
  searchTerm = '';

  constructor(
    private detectionService: DetectionService,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.coursesLoading = true;
    this.courseService.getMyCourses().subscribe({
      next: (data) => {
        this.myCourses = data;
        this.coursesLoading = false;
      },
      error: () => { this.coursesLoading = false; }
    });
  }

  selectCourse(course: any): void {
    this.selectedCourseId = course.id;
    this.selectedCourseTitle = course.title;
    this.loading = true;
    this.detectionService.getInstructorRemarksByCourse(course.id).subscribe({
      next: (data) => {
        this.remarks = data;
        this.filteredRemarks = data;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  filterRemarks(): void {
    const term = this.searchTerm.toLowerCase().trim();
    if (!term) {
      this.filteredRemarks = this.remarks;
      return;
    }
    this.filteredRemarks = this.remarks.filter(r =>
      r.studentName.toLowerCase().includes(term) ||
      r.remarkType.toLowerCase().includes(term) ||
      r.remarkMessage.toLowerCase().includes(term)
    );
  }

  getTypeBadgeClass(type: string): string {
    switch (type) {
      case 'EYES_CLOSED': return 'bg-warning text-dark';
      case 'YAWNING': return 'bg-purple';
      case 'LOOKING_AWAY': return 'bg-danger';
      case 'ABSENT': return 'bg-secondary';
      case 'SMILING': return 'bg-success';
      case 'CONCENTRATED': return 'bg-primary';
      case 'SAD': return 'bg-indigo';
      case 'ANGRY': return 'bg-danger';
      case 'TIRED': return 'bg-purple';
      default: return 'bg-info';
    }
  }

  getTypeLabel(type: string): string {
    switch (type) {
      case 'EYES_CLOSED': return 'Yeux fermés';
      case 'YAWNING': return 'Bâillement';
      case 'LOOKING_AWAY': return 'Regard ailleurs';
      case 'ABSENT': return 'Absent';
      case 'SMILING': return 'Sourire';
      case 'CONCENTRATED': return 'Concentration';
      case 'SAD': return 'Tristesse';
      case 'ANGRY': return 'Frustration';
      case 'TIRED': return 'Fatigue';
      default: return type;
    }
  }

  getScoreColor(score: number | null): string {
    if (score == null) return '#6b7280';
    if (score >= 75) return '#22c55e';
    if (score >= 50) return '#f59e0b';
    return '#ef4444';
  }

  // Get unique students from current results
  get uniqueStudents(): { name: string; count: number }[] {
    const map = new Map<string, number>();
    this.remarks.forEach(r => {
      map.set(r.studentName, (map.get(r.studentName) || 0) + 1);
    });
    return Array.from(map.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  }

  countByType(type: string): number {
    return this.remarks.filter(r => r.remarkType === type).length;
  }

  // ═══ Computed Stats ═══

  get avgAttentionScore(): number | null {
    const scores = this.remarks.filter(r => r.attentionScore != null).map(r => r.attentionScore as number);
    if (!scores.length) return null;
    return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  }

  get mostCommonIssue(): { type: string; label: string; count: number } | null {
    const issues = ['EYES_CLOSED', 'LOOKING_AWAY', 'YAWNING', 'ABSENT', 'TIRED', 'SAD', 'ANGRY'];
    let max = 0; let dominant: string | null = null;
    for (const t of issues) {
      const c = this.countByType(t);
      if (c > max) { max = c; dominant = t; }
    }
    if (!dominant) return null;
    return { type: dominant, label: this.getTypeLabel(dominant), count: max };
  }

  get positiveCount(): number {
    return this.countByType('SMILING') + this.countByType('CONCENTRATED');
  }

  get attentionScoreColor(): string {
    const s = this.avgAttentionScore;
    if (s == null) return '#6b7280';
    if (s >= 75) return '#22c55e';
    if (s >= 50) return '#f59e0b';
    return '#ef4444';
  }
}
