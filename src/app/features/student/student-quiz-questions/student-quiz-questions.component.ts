import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { routes } from '../../../shared/service/routes/routes';
import { QuizService } from '../../../shared/service/quiz/quiz.service';
import { CourseService } from '../../../shared/service/course/course.service';

@Component({
  selector: 'app-student-quiz-questions',
  imports: [CommonModule, RouterLink],
  templateUrl: './student-quiz-questions.component.html',
  styleUrl: './student-quiz-questions.component.scss'
})
export class StudentQuizQuestionsComponent implements OnInit {
  routes = routes;
  quizId!: number;
  courseId = 0; // set from queryParams to allow "Back to course" navigation
  lessonId = 0; // lesson that triggered this quiz — marked complete when quiz is passed
  quizData: any = null;
  questions: any[] = [];
  answers: { [questionId: number]: number } = {}; // questionId -> choiceId
  selected = 0; // current question index (0-based)
  loading = true;
  submitting = false;
  result: any = null; // filled after submit

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.quizId = Number(this.route.snapshot.paramMap.get('quizId'));
    this.courseId = Number(this.route.snapshot.queryParamMap.get('courseId') || 0);
    this.lessonId = Number(this.route.snapshot.queryParamMap.get('lessonId') || 0);
    if (this.quizId) {
      this.quizService.startQuiz(this.quizId).subscribe({
        next: (data) => {
          this.quizData = data;
          this.questions = data.questions || [];
          this.loading = false;
        },
        error: () => { this.loading = false; }
      });
    }
  }

  get totalQuestions(): number { return this.questions.length; }
  get progress(): number {
    return this.totalQuestions > 0 ? Math.round(((this.selected + 1) / this.totalQuestions) * 100) : 0;
  }

  selectChoice(questionId: number, choiceId: number): void {
    this.answers[questionId] = choiceId;
  }

  isSelected(questionId: number, choiceId: number): boolean {
    return this.answers[questionId] === choiceId;
  }

  moveNext(): void {
    if (this.selected < this.totalQuestions - 1) {
      this.selected++;
    }
  }

  movePrev(): void {
    if (this.selected > 0) {
      this.selected--;
    }
  }

  submitQuiz(): void {
    this.submitting = true;
    // Transform answers map { questionId: choiceId } into array format expected by backend
    const answersArray = Object.entries(this.answers).map(([questionId, choiceId]) => ({
      questionId: Number(questionId),
      selectedChoiceId: choiceId
    }));
    const payload = { answers: answersArray };
    this.quizService.submitQuiz(this.quizId, payload).subscribe({
      next: (res) => {
        this.result = res;
        this.submitting = false;
        // Si le quiz est passé et qu'on vient d'une leçon, marquer la leçon comme terminée
        if (res?.passed && this.lessonId) {
          this.courseService.markLessonCompleted(this.lessonId).subscribe({ error: () => {} });
        }
      },
      error: () => { this.submitting = false; }
    });
  }
}
