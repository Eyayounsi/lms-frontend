import { Component, OnInit } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { QuizService } from '../../../shared/service/quiz/quiz.service';

@Component({
    selector: 'app-student-quiz',
    templateUrl: './student-quiz.component.html',
    styleUrl: './student-quiz.component.scss',
    imports: [CommonModule, RouterLink]
})
export class StudentQuizComponent implements OnInit {
  public routes = routes;
  quizzes: any[] = [];
  loading = true;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.getAllStudentQuizzes().subscribe({
      next: (data) => { this.quizzes = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }
}
