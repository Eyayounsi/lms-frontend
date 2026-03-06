import { Component, OnInit } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { QuizService } from '../../../shared/service/quiz/quiz.service';

declare var bootstrap: any;

@Component({
  selector: 'app-instructor-quiz-questions',
  imports: [CommonModule, RouterLink, FormsModule, MatSelectModule],
  templateUrl: './instructor-quiz-questions.component.html',
  styleUrl: './instructor-quiz-questions.component.scss'
})
export class InstructorQuizQuestionsComponent implements OnInit {
  routes = routes;
  quizId!: number;
  quiz: any = null;
  questions: any[] = [];
  loading = true;

  // Add question form
  formQuestionText = '';
  formQuestionType = 'MULTIPLE_CHOICE';
  formChoices: { text: string; isCorrect: boolean }[] = [
    { text: '', isCorrect: true },
    { text: '', isCorrect: false }
  ];

  // Edit question form
  editingQuestion: any = null;
  editQuestionText = '';
  editQuestionType = 'MULTIPLE_CHOICE';
  editChoices: { text: string; isCorrect: boolean }[] = [];

  // Delete
  deletingQuestionId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.quizId = Number(this.route.snapshot.paramMap.get('quizId'));
    if (this.quizId) {
      this.loadData();
    }
  }

  loadData(): void {
    this.loading = true;
    // Load quiz info (from instructor quizzes list)
    this.quizService.getInstructorQuizzes().subscribe({
      next: (quizzes) => {
        this.quiz = quizzes.find((q: any) => q.id === this.quizId) || null;
      }
    });
    // Load questions
    this.quizService.getQuestions(this.quizId).subscribe({
      next: (data) => {
        this.questions = data;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  // ─── Add Question ────────────────────────────────────────────
  addNewChoice(): void {
    this.formChoices.push({ text: '', isCorrect: false });
  }

  removeChoice(index: number): void {
    this.formChoices.splice(index, 1);
  }

  resetAddForm(): void {
    this.formQuestionText = '';
    this.formQuestionType = 'MULTIPLE_CHOICE';
    this.formChoices = [
      { text: '', isCorrect: true },
      { text: '', isCorrect: false }
    ];
  }

  submitAddQuestion(): void {
    const payload = {
      questionText: this.formQuestionText,
      questionType: this.formQuestionType,
      choices: this.formChoices.map(c => ({ text: c.text, isCorrect: c.isCorrect }))
    };
    this.quizService.addQuestion(this.quizId, payload).subscribe({
      next: () => {
        this.closeModal('add_question');
        this.resetAddForm();
        this.loadData();
      }
    });
  }

  // ─── Edit Question ───────────────────────────────────────────
  openEditModal(q: any): void {
    this.editingQuestion = q;
    this.editQuestionText = q.questionText;
    this.editQuestionType = q.questionType;
    this.editChoices = (q.choices || []).map((c: any) => ({ text: c.text, isCorrect: c.isCorrect }));
    if (this.editChoices.length === 0) {
      this.editChoices = [{ text: '', isCorrect: true }, { text: '', isCorrect: false }];
    }
    const modal = new bootstrap.Modal(document.getElementById('edit_question'));
    modal.show();
  }

  addEditChoice(): void {
    this.editChoices.push({ text: '', isCorrect: false });
  }

  removeEditChoice(index: number): void {
    this.editChoices.splice(index, 1);
  }

  submitEditQuestion(): void {
    if (!this.editingQuestion) return;
    const payload = {
      questionText: this.editQuestionText,
      questionType: this.editQuestionType,
      choices: this.editChoices.map(c => ({ text: c.text, isCorrect: c.isCorrect }))
    };
    this.quizService.updateQuestion(this.editingQuestion.id, payload).subscribe({
      next: () => {
        this.closeModal('edit_question');
        this.editingQuestion = null;
        this.loadData();
      }
    });
  }

  // ─── Delete Question ─────────────────────────────────────────
  confirmDelete(questionId: number): void {
    this.deletingQuestionId = questionId;
    const modal = new bootstrap.Modal(document.getElementById('delete_modal'));
    modal.show();
  }

  deleteQuestion(): void {
    if (!this.deletingQuestionId) return;
    this.quizService.deleteQuestion(this.deletingQuestionId).subscribe({
      next: () => {
        this.closeModal('delete_modal');
        this.deletingQuestionId = null;
        this.loadData();
      }
    });
  }

  closeModal(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      const m = bootstrap.Modal.getInstance(el);
      m?.hide();
    }
  }
}
