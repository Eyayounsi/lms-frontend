import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetectionService, DetectionSummary, DetectionRemarkItem } from '../../../shared/service/detection/detection.service';

@Component({
  selector: 'app-admin-detection',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-detection.component.html',
  styleUrl: './admin-detection.component.scss'
})
export class AdminDetectionComponent implements OnInit {

  summaries: DetectionSummary[] = [];
  filteredSummaries: DetectionSummary[] = [];
  selectedRemarks: DetectionRemarkItem[] = [];
  loading = true;
  detailLoading = false;
  searchTerm = '';

  selectedStudentName = '';
  selectedCourseTitle = '';

  constructor(private detectionService: DetectionService) {}

  ngOnInit(): void {
    this.loadSummary();
  }

  loadSummary(): void {
    this.loading = true;
    this.detectionService.getAdminSummary().subscribe({
      next: (data) => {
        this.summaries = data;
        this.filteredSummaries = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  filterSummaries(): void {
    const term = this.searchTerm.toLowerCase().trim();
    if (!term) {
      this.filteredSummaries = this.summaries;
      return;
    }
    this.filteredSummaries = this.summaries.filter(s =>
      s.studentName.toLowerCase().includes(term) ||
      s.studentEmail.toLowerCase().includes(term) ||
      s.courseTitle.toLowerCase().includes(term)
    );
  }

  viewDetail(summary: DetectionSummary): void {
    this.detailLoading = true;
    this.selectedStudentName = summary.studentName;
    this.selectedCourseTitle = summary.courseTitle;
    this.detectionService.getRemarksByStudentAndCourse(summary.studentId, summary.courseId).subscribe({
      next: (data) => {
        this.selectedRemarks = data;
        this.detailLoading = false;
      },
      error: () => { this.detailLoading = false; }
    });
  }

  closeDetail(): void {
    this.selectedRemarks = [];
    this.selectedStudentName = '';
    this.selectedCourseTitle = '';
  }

  getTypeBadgeClass(type: string): string {
    switch (type) {
      case 'EYES_CLOSED':   return 'det-badge-warn';
      case 'YAWNING':       return 'det-badge-purple';
      case 'LOOKING_AWAY':  return 'det-badge-red';
      case 'ABSENT':        return 'det-badge-gray';
      case 'SMILING':       return 'det-badge-green';
      case 'CONCENTRATED':  return 'det-badge-ok';
      case 'SAD':           return 'det-badge-purple';
      case 'ANGRY':         return 'det-badge-red';
      case 'TIRED':         return 'det-badge-warn';
      default:              return 'det-badge-gray';
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

  get totalMonitored(): number { return this.summaries.length; }

  get avgScore(): number | null {
    const withScore = this.summaries.filter(s => s.avgAttentionScore != null);
    if (!withScore.length) return null;
    const sum = withScore.reduce((acc, s) => acc + s.avgAttentionScore!, 0);
    return Math.round(sum / withScore.length);
  }

  get criticalStudents(): number {
    return this.summaries.filter(s => s.avgAttentionScore != null && s.avgAttentionScore < 50).length;
  }
}
