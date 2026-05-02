import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { QaService } from '../../../shared/service/qa/qa.service';
import { resolveAvatarImage } from '../../../shared/utils/avatar-image.util';

declare var bootstrap: any;

@Component({
  selector: 'app-instructor-qa',
  templateUrl: './instructor-qa.component.html',
  styleUrl: './instructor-qa.component.scss',
  imports: [CommonModule, FormsModule, DatePipe]
})
export class InstructorQaComponent implements OnInit {

  questions: any[] = [];
  filteredQuestions: any[] = [];
  loading = false;
  searchValue = '';
  filterCourse = '';
  courseNames: string[] = [];

  expandedId: number | null = null;
  replyText: { [id: number]: string } = {};
  submittingReply: { [id: number]: boolean } = {};

  constructor(
    private qaService: QaService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions(): void {
    this.loading = true;
    this.qaService.getInstructorQuestions().subscribe({
      next: (data) => {
        this.questions = data;
        this.courseNames = [...new Set<string>(data.map((q: any) => q.courseName))];
        this.applyFilter();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.toastr.error('Impossible de charger les questions.');
      }
    });
  }

  applyFilter(): void {
    let list = [...this.questions];
    if (this.filterCourse) {
      list = list.filter(q => q.courseName === this.filterCourse);
    }
    if (this.searchValue.trim()) {
      const term = this.searchValue.trim().toLowerCase();
      list = list.filter(q =>
        q.title?.toLowerCase().includes(term) ||
        q.body?.toLowerCase().includes(term) ||
        q.authorName?.toLowerCase().includes(term)
      );
    }
    this.filteredQuestions = list;
  }

  onSearch(value: string): void {
    this.searchValue = value;
    this.applyFilter();
  }

  onFilterCourse(value: string): void {
    this.filterCourse = value;
    this.applyFilter();
  }

  toggleExpand(q: any): void {
    this.expandedId = this.expandedId === q.id ? null : q.id;
  }

  submitReply(q: any): void {
    const body = (this.replyText[q.id] || '').trim();
    if (!body) return;
    this.submittingReply[q.id] = true;
    this.qaService.answerQuestion(q.id, { body }).subscribe({
      next: (answer) => {
        if (!q.answers) q.answers = [];
        q.answers.push(answer);
        q.answerCount = (q.answerCount || 0) + 1;
        this.replyText[q.id] = '';
        this.submittingReply[q.id] = false;
        this.toastr.success('Réponse publiée.');
      },
      error: () => {
        this.submittingReply[q.id] = false;
        this.toastr.error('Erreur lors de la publication.');
      }
    });
  }

  deleteAnswer(q: any, answerId: number): void {
    this.qaService.deleteAnswer(answerId).subscribe({
      next: () => {
        q.answers = q.answers.filter((a: any) => a.id !== answerId);
        q.answerCount = Math.max(0, (q.answerCount || 1) - 1);
        this.toastr.success('Réponse supprimée.');
      },
      error: () => this.toastr.error('Erreur lors de la suppression.')
    });
  }

  getAvatarUrl(avatarPath: string | null, name: string): string {
    return resolveAvatarImage(avatarPath, this.generateInitialAvatar(name || 'U'));
  }

  private generateInitialAvatar(name: string): string {
    const initials = name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
    const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#f97316', '#14b8a6', '#3b82f6'];
    const color = colors[name.charCodeAt(0) % colors.length];
    return `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36'><rect width='36' height='36' rx='18' fill='${encodeURIComponent(color)}'/><text x='50%' y='54%' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='13' font-family='sans-serif' font-weight='600'>${initials}</text></svg>`;
  }

  get totalCount(): number { return this.questions.length; }
  get answeredCount(): number { return this.questions.filter(q => q.answerCount > 0).length; }
  get unansweredCount(): number { return this.questions.filter(q => !q.answerCount || q.answerCount === 0).length; }
}
