import { Component, OnInit } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { QuizService } from '../../../shared/service/quiz/quiz.service';

@Component({
    selector: 'app-instructor-quiz-details',
    templateUrl: './instructor-quiz-details.component.html',
    styleUrl: './instructor-quiz-details.component.scss',
    imports: [CommonModule, RouterLink]
})
export class InstructorQuizDetailsComponent implements OnInit {
  public routes = routes;
  attemptId!: number;
  attempt: any = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.attemptId = Number(this.route.snapshot.paramMap.get('attemptId'));
    if (this.attemptId) {
      this.quizService.getAttemptDetailInstructor(this.attemptId).subscribe({
        next: (data) => { this.attempt = data; this.loading = false; },
        error: () => { this.loading = false; }
      });
    }
  }
}
