import { Component, OnInit } from '@angular/core';
import { Sort, MatSortModule } from '@angular/material/sort';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { QuizService } from '../../../shared/service/quiz/quiz.service';

@Component({
  selector: 'app-instructor-quiz-results',
  imports: [CommonModule, MatSortModule, DatePipe, RouterLink],
  templateUrl: './instructor-quiz-results.component.html',
  styleUrl: './instructor-quiz-results.component.scss'
})
export class InstructorQuizResultsComponent implements OnInit {
  quizId!: number;
  data: any = null;
  results: any[] = [];
  loading = true;

  listMode = false;
  allQuizzes: any[] = [];

  constructor(private route: ActivatedRoute, private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizId = Number(this.route.snapshot.paramMap.get('quizId'));
    if (this.quizId) {
      this.loadResults();
    } else {
      this.listMode = true;
      this.loadAllQuizzes();
    }
  }

  loadAllQuizzes(): void {
    this.loading = true;
    this.quizService.getInstructorQuizzes().subscribe({
      next: (data) => { this.allQuizzes = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  loadResults(): void {
    this.loading = true;
    this.quizService.getQuizResults(this.quizId).subscribe({
      next: (res) => { this.data = res; this.results = res.results || []; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  sortData(sort: Sort): void {
    const d = this.results.slice();
    if (!sort.active || sort.direction === '') {
      this.results = d;
    } else {
      this.results = d.sort((a, b) => {
        const aValue = a[sort.active];
        const bValue = b[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  getAverageScore(): number {
    if (this.results.length === 0) return 0;
    const sum = this.results.reduce((acc: number, r: any) => acc + (r.score || 0), 0);
    return Math.round(sum / this.results.length);
  }

  getPassRate(): number {
    if (this.results.length === 0) return 0;
    const passed = this.results.filter((r: any) => r.passed).length;
    return Math.round((passed * 100) / this.results.length);
  }
}