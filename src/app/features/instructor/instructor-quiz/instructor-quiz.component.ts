import { Component, OnInit } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { QuizService } from '../../../shared/service/quiz/quiz.service';
import { CourseService } from '../../../shared/service/course/course.service';

declare var bootstrap: any;

@Component({
    selector: 'app-instructor-quiz',  
    templateUrl: './instructor-quiz.component.html',
    styleUrl: './instructor-quiz.component.scss',
    imports:[CommonModule, MatSelectModule, RouterLink, FormsModule]
})
export class InstructorQuizComponent implements OnInit {
  public routes = routes;

  quizzes: any[] = [];
  myCourses: any[] = [];
  loading = true;

  // â”€â”€â”€ Cascade Course â†’ Section â†’ Lesson â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  formCourseId: number | null = null;
  formSections: any[] = [];
  formSectionId: number | null = null;
  formLessons: any[] = [];
  formLessonId: number | null = null;

  // Quiz metadata
  formTitle = '';
  formTotalMarks = 100;
  formPassMark = 50;
  formDuration = 30;

  // â”€â”€â”€ Inline questions â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  formQuestions: Array<{
    questionText: string;
    marks: number;
    choices: Array<{ text: string; isCorrect: boolean }>;
  }> = [];

  formError = '';

  editingQuiz: any = null;
  deletingQuizId: number | null = null;

  constructor(
    private quizService: QuizService,
    private courseService: CourseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadQuizzes();
    this.loadCourses();
  }

  loadQuizzes(): void {
    this.loading = true;
    this.quizService.getInstructorQuizzes().subscribe({
      next: (data) => { this.quizzes = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  loadCourses(): void {
    this.courseService.getMyCourses().subscribe({
      next: (data) => { this.myCourses = data; }
    });
  }

  // â”€â”€â”€ Cascade logic â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  onCourseChange(): void {
    this.formSections = [];
    this.formSectionId = null;
    this.formLessons = [];
    this.formLessonId = null;
    if (!this.formCourseId) return;
    this.courseService.getMyCourse(this.formCourseId).subscribe({
      next: (course: any) => {
        this.formSections = course.sections || [];
      }
    });
  }

  onSectionChange(): void {
    this.formLessons = [];
    this.formLessonId = null;
    if (!this.formSectionId) return;
    const sec = this.formSections.find((s: any) => s.id === this.formSectionId);
    this.formLessons = sec ? (sec.lessons || []) : [];
  }

  // â”€â”€â”€ Inline questions helpers â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  addQuestion(): void {
    this.formQuestions.push({
      questionText: '',
      marks: 1,
      choices: [
        { text: '', isCorrect: false },
        { text: '', isCorrect: false }
      ]
    });
    this.autoDistributeMarks();
  }

  removeQuestion(qi: number): void {
    this.formQuestions.splice(qi, 1);
    this.autoDistributeMarks();
  }

  /** Auto-distribute totalMarks evenly across all questions */
  autoDistributeMarks(): void {
    if (this.formQuestions.length === 0) return;
    const perQuestion = Math.ceil(this.formTotalMarks / this.formQuestions.length);
    this.formQuestions.forEach(q => q.marks = perQuestion);
  }

  /** Called when totalMarks input changes */
  onTotalMarksChange(): void {
    this.autoDistributeMarks();
  }

  addChoice(qi: number): void {
    this.formQuestions[qi].choices.push({ text: '', isCorrect: false });
  }

  removeChoice(qi: number, ci: number): void {
    if (this.formQuestions[qi].choices.length > 2) {
      this.formQuestions[qi].choices.splice(ci, 1);
    }
  }

  setCorrect(qi: number, ci: number): void {
    // Toggle selected; for MULTIPLE_CHOICE allow only 1 correct (radio-like)
    this.formQuestions[qi].choices.forEach((c, idx) => c.isCorrect = (idx === ci));
  }

  // â”€â”€â”€ Form submit â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  resetForm(): void {
    this.formCourseId = null;
    this.formSections = [];
    this.formSectionId = null;
    this.formLessons = [];
    this.formLessonId = null;
    this.formTitle = '';
    this.formTotalMarks = 100;
    this.formPassMark = 50;
    this.formDuration = 30;
    this.formQuestions = [];
    this.formError = '';
    this.editingQuiz = null;
  }

  openAddModal(): void {
    this.resetForm();
    this.addQuestion(); // start with 1 question
  }

  openEditModal(quiz: any): void {
    this.editingQuiz = quiz;
    this.formCourseId = quiz.courseId;
    this.formTitle = quiz.title;
    this.formTotalMarks = quiz.totalMarks;
    this.formPassMark = quiz.passMark;
    this.formDuration = quiz.durationMinutes;
    this.formError = '';
  }

  validateCreate(): boolean {
    this.formError = '';
    if (!this.formTitle.trim()) { this.formError = 'Le titre est requis.'; return false; }
    if (!this.formCourseId) { this.formError = 'Veuillez sÃ©lectionner un cours.'; return false; }
    if (this.formQuestions.length === 0) { this.formError = 'Au moins une question est requise.'; return false; }

    for (let i = 0; i < this.formQuestions.length; i++) {
      const q = this.formQuestions[i];
      if (!q.questionText.trim()) { this.formError = `Question ${i+1} : le texte est requis.`; return false; }
      const hasCorrect = q.choices.some(c => c.isCorrect);
      if (!hasCorrect) { this.formError = `Question ${i+1} : marquer une rÃ©ponse correcte.`; return false; }
      const emptyChoice = q.choices.some(c => !c.text.trim());
      if (emptyChoice) { this.formError = `Question ${i+1} : tous les choix doivent avoir un texte.`; return false; }
    }
    return true;
  }

  submitQuiz(): void {
    if (this.editingQuiz) {
      const data = {
        title: this.formTitle,
        totalMarks: this.formTotalMarks,
        passMark: this.formPassMark,
        durationMinutes: this.formDuration
      };
      this.quizService.updateQuiz(this.editingQuiz.id, data).subscribe({
        next: () => { this.loadQuizzes(); this.closeModal('edit_quiz'); }
      });
    } else {
      if (!this.validateCreate()) return;
      const data: any = {
        title: this.formTitle,
        totalMarks: this.formTotalMarks,
        passMark: this.formPassMark,
        durationMinutes: this.formDuration,
        courseId: this.formCourseId,
        questions: this.formQuestions
      };
      if (this.formLessonId) data['lessonId'] = this.formLessonId;

      this.quizService.createQuiz(data).subscribe({
        next: (created: any) => {
          this.closeModal('add_quiz');
          this.router.navigate(['/instructor/instructor-quiz-questions', created.id]);
        },
        error: (err: any) => {
          this.formError = err?.error?.message || err?.error || 'Erreur lors de la crÃ©ation du quiz.';
        }
      });
    }
  }

  confirmDelete(quizId: number): void {
    this.deletingQuizId = quizId;
  }

  deleteQuiz(): void {
    if (this.deletingQuizId) {
      this.quizService.deleteQuiz(this.deletingQuizId).subscribe({
        next: () => { this.loadQuizzes(); this.closeModal('delete_modal'); }
      });
    }
  }

  private closeModal(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      const modal = bootstrap.Modal.getInstance(el);
      if (modal) modal.hide();
    }
  }
}
