import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { QaService } from '../../../shared/service/qa/qa.service';
import { CourseService } from '../../../shared/service/course/course.service';
import { resolveAvatarImage } from '../../../shared/utils/avatar-image.util';

declare var bootstrap: any;

@Component({
    selector: 'app-student-qa',
    templateUrl: './student-qa.component.html',
    styleUrl: './student-qa.component.scss',
    imports: [CommonModule, FormsModule]
})
export class StudentQaComponent implements OnInit {

  questions: any[] = [];
  allCourseQuestions: any[] = [];
  enrolledCourses: any[] = [];
  loading = false;
  expandedId: number | null = null;
  selectedQuestion: any = null;
  activeTab: 'mine' | 'all' = 'all';

  // Formulaire nouvelle question
  questionForm = { courseId: '', title: '', body: '' };
  submitting = false;

  constructor(
    private qaService: QaService,
    private courseService: CourseService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadMyQuestions();
    this.loadAllCourseQuestions();
    this.loadEnrolledCourses();
  }

  loadMyQuestions(): void {
    this.loading = true;
    this.qaService.getMyQuestions().subscribe({
      next: (data) => {
        this.questions = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.toastr.error('Impossible de charger vos questions.');
      }
    });
  }

  loadAllCourseQuestions(): void {
    this.qaService.getEnrolledQuestions().subscribe({
      next: (data) => { this.allCourseQuestions = data; },
      error: () => {}
    });
  }

  loadEnrolledCourses(): void {
    this.courseService.getMyEnrolledCourses().subscribe({
      next: (courses) => { this.enrolledCourses = courses; },
      error: () => {}
    });
  }

  toggleExpand(question: any): void {
    this.expandedId = this.expandedId === question.id ? null : question.id;
  }

  openAskModal(): void {
    this.questionForm = { courseId: '', title: '', body: '' };
    const el = document.getElementById('ask_question_modal');
    if (el) new bootstrap.Modal(el).show();
  }

  onAskQuestion(): void {
    if (!this.questionForm.courseId || !this.questionForm.title.trim() || !this.questionForm.body.trim()) {
      this.toastr.warning('Veuillez remplir tous les champs obligatoires.');
      return;
    }
    this.submitting = true;
    this.qaService.askQuestion({
      courseId: Number(this.questionForm.courseId),
      title: this.questionForm.title.trim(),
      body: this.questionForm.body.trim()
    }).subscribe({
      next: (q) => {
        this.questions.unshift(q);
        this.submitting = false;
        this.toastr.success('Question posée avec succès !');
        const el = document.getElementById('ask_question_modal');
        if (el) bootstrap.Modal.getInstance(el)?.hide();
      },
      error: (err) => {
        this.submitting = false;
        this.toastr.error(err?.error || 'Erreur lors de l\'envoi de la question.');
      }
    });
  }

  deleteQuestion(question: any): void {
    if (!confirm(`Supprimer la question "${question.title}" ?`)) return;
    this.qaService.deleteQuestion(question.id).subscribe({
      next: () => {
        this.questions = this.questions.filter(q => q.id !== question.id);
        if (this.expandedId === question.id) this.expandedId = null;
        this.toastr.success('Question supprimée.');
      },
      error: (err) => this.toastr.error(err?.error || 'Erreur lors de la suppression.')
    });
  }

  get totalQuestions(): number { return this.questions.length; }
  get answeredCount(): number { return this.questions.filter(q => q.answerCount > 0).length; }
  get unansweredCount(): number { return this.questions.filter(q => q.answerCount === 0).length; }

  get displayedQuestions(): any[] {
    return this.activeTab === 'mine' ? this.questions : this.allCourseQuestions;
  }

  // ─── Répondre à une question ───────────────────────────────────────
  replyText: { [id: number]: string } = {};
  submittingReply: { [id: number]: boolean } = {};

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

  getAvatarUrl(path: string | null): string {
    return resolveAvatarImage(path, 'assets/img/user/user-01.jpg');
  }
}

