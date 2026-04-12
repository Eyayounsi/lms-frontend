import { Component, OnInit } from '@angular/core';
import { Sort, MatSortModule } from '@angular/material/sort';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuizService } from '../../../shared/service/quiz/quiz.service';
import { AvatarFallbackComponent } from '../../../shared/components/avatar-fallback/avatar-fallback.component';

@Component({
  selector: 'app-instructor-quiz-results',
  imports: [CommonModule, MatSortModule, DatePipe, RouterLink, FormsModule, AvatarFallbackComponent],
  templateUrl: './instructor-quiz-results.component.html',
  styleUrl: './instructor-quiz-results.component.scss'
})
export class InstructorQuizResultsComponent implements OnInit {
  quizId!: number;
  data: any = null;
  results: any[] = [];
  loading = true;
  searchTerm = '';

  listMode = false;
  allQuizzes: any[] = [];
  studentRows: StudentResultRow[] = [];
  expandedStudentKeys = new Set<string>();

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
      next: (res) => {
        this.data = res;
        this.results = res.results || [];
        this.buildStudentRows();
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  sortData(sort: Sort): void {
    const d = this.studentRows.slice();
    if (!sort.active || sort.direction === '') {
      this.studentRows = d;
    } else {
      const active = sort.active as SortableStudentKey;
      if (!this.isSortableStudentKey(active)) {
        this.studentRows = d;
        return;
      }

      this.studentRows = d.sort((a, b) => {
        const aValue = this.getSortableValue(a, active);
        const bValue = this.getSortableValue(b, active);
        if (aValue === bValue) return 0;
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  private isSortableStudentKey(key: string): key is SortableStudentKey {
    return ['studentName', 'bestScore', 'latestScore', 'attemptsCount', 'passRate', 'latestFinishedAt'].includes(key);
  }

  private getSortableValue(row: StudentResultRow, key: SortableStudentKey): string | number {
    if (key === 'latestFinishedAt') {
      return row.latestFinishedAt ? new Date(row.latestFinishedAt).getTime() : 0;
    }
    return row[key];
  }

  buildStudentRows(): void {
    const grouped = new Map<string, StudentResultRow>();

    this.results.forEach((r: any) => {
      const sid = r.studentId != null ? String(r.studentId) : '';
      const sname = String(r.studentName || 'Étudiant');
      const key = sid || sname.toLowerCase();

      const attempt: StudentAttemptRow = {
        score: Number(r.score || 0),
        passed: !!r.passed,
        finishedAt: r.finishedAt
      };

      if (!grouped.has(key)) {
        grouped.set(key, {
          key,
          studentId: r.studentId,
          studentName: sname,
          studentAvatar: r.studentAvatar,
          attemptsCount: 0,
          bestScore: 0,
          latestScore: 0,
          averageScore: 0,
          latestFinishedAt: r.finishedAt,
          passRate: 0,
          passedCount: 0,
          attempts: []
        });
      }

      const row = grouped.get(key)!;
      row.attempts.push(attempt);
      row.attemptsCount += 1;
      row.passedCount += attempt.passed ? 1 : 0;
      row.bestScore = Math.max(row.bestScore, attempt.score);
      row.latestScore = row.attempts[0]?.score ?? row.latestScore;
      row.latestFinishedAt = row.attempts[0]?.finishedAt ?? row.latestFinishedAt;
    });

    this.studentRows = Array.from(grouped.values()).map((row) => {
      const totalScore = row.attempts.reduce((acc, a) => acc + a.score, 0);
      return {
        ...row,
        averageScore: row.attemptsCount ? Math.round(totalScore / row.attemptsCount) : 0,
        passRate: row.attemptsCount ? Math.round((row.passedCount * 100) / row.attemptsCount) : 0
      };
    });
  }

  get filteredStudentRows(): StudentResultRow[] {
    const query = this.searchTerm.trim().toLowerCase();
    if (!query) return this.studentRows;
    return this.studentRows.filter((row) => row.studentName.toLowerCase().includes(query));
  }

  toggleStudent(key: string): void {
    if (this.expandedStudentKeys.has(key)) {
      this.expandedStudentKeys.delete(key);
      return;
    }
    this.expandedStudentKeys.add(key);
  }

  isStudentExpanded(key: string): boolean {
    return this.expandedStudentKeys.has(key);
  }

  getTotalAttempts(): number {
    return this.results.length;
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

interface StudentAttemptRow {
  score: number;
  passed: boolean;
  finishedAt: string;
}

interface StudentResultRow {
  key: string;
  studentId?: number;
  studentName: string;
  studentAvatar?: string;
  attemptsCount: number;
  bestScore: number;
  latestScore: number;
  averageScore: number;
  latestFinishedAt: string;
  passRate: number;
  passedCount: number;
  attempts: StudentAttemptRow[];
}

type SortableStudentKey = 'studentName' | 'bestScore' | 'latestScore' | 'attemptsCount' | 'passRate' | 'latestFinishedAt';