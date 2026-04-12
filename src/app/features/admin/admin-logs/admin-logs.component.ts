import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import {
  AiSessionLogItem,
  AuthLogItem,
  MongoLogsService,
  RecommendationLogItem
} from '../../../shared/service/mongo-logs/mongo-logs.service';

@Component({
  selector: 'app-admin-logs',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-logs.component.html',
  styleUrl: './admin-logs.component.scss'
})
export class AdminLogsComponent implements OnInit {

  mongoKind: 'auth' | 'recommendations' | 'ai' = 'auth';
  mongoLoading = false;
  mongoError = '';

  authLogs: AuthLogItem[] = [];
  recommendationLogs: RecommendationLogItem[] = [];
  aiLogs: AiSessionLogItem[] = [];

  mongoPage = 0;
  mongoSize = 20;
  mongoTotalPages = 0;
  mongoTotalElements = 0;

  authProviderFilter = '';
  authEmailFilter = '';
  recommendationTypeFilter = '';
  aiSessionIdFilter = '';
  aiUserEmailFilter = '';

  constructor(private mongoLogsService: MongoLogsService) {}

  ngOnInit(): void {
    this.loadMongoLogs();
  }

  onMongoKindChange(kind: 'auth' | 'recommendations' | 'ai'): void {
    this.mongoKind = kind;
    this.mongoPage = 0;
    this.loadMongoLogs();
  }

  applyMongoFilters(): void {
    this.mongoPage = 0;
    this.loadMongoLogs();
  }

  changeMongoPage(delta: number): void {
    const next = this.mongoPage + delta;
    if (next < 0 || next >= this.mongoTotalPages) return;
    this.mongoPage = next;
    this.loadMongoLogs();
  }

  loadMongoLogs(): void {
    this.mongoLoading = true;
    this.mongoError = '';

    if (this.mongoKind === 'auth') {
      this.mongoLogsService
        .getAuthLogs(this.mongoPage, this.mongoSize, this.authProviderFilter, this.authEmailFilter)
        .subscribe({
          next: (res) => {
            this.authLogs = res.content;
            this.mongoTotalPages = res.totalPages;
            this.mongoTotalElements = res.totalElements;
            this.mongoLoading = false;
          },
          error: () => {
            this.authLogs = [];
            this.mongoTotalPages = 0;
            this.mongoTotalElements = 0;
            this.mongoError = 'Impossible de charger les logs (auth).';
            this.showToast('error', this.mongoError);
            this.mongoLoading = false;
          }
        });
      return;
    }

    if (this.mongoKind === 'recommendations') {
      this.mongoLogsService
        .getRecommendationLogs(this.mongoPage, this.mongoSize, this.recommendationTypeFilter)
        .subscribe({
          next: (res) => {
            this.recommendationLogs = res.content;
            this.mongoTotalPages = res.totalPages;
            this.mongoTotalElements = res.totalElements;
            this.mongoLoading = false;
          },
          error: () => {
            this.recommendationLogs = [];
            this.mongoTotalPages = 0;
            this.mongoTotalElements = 0;
            this.mongoError = 'Impossible de charger les logs (recommendations).';
            this.showToast('error', this.mongoError);
            this.mongoLoading = false;
          }
        });
      return;
    }

    this.mongoLogsService
      .getAiSessionLogs(this.mongoPage, this.mongoSize, this.aiSessionIdFilter, this.aiUserEmailFilter)
      .subscribe({
        next: (res) => {
          this.aiLogs = res.content;
          this.mongoTotalPages = res.totalPages;
          this.mongoTotalElements = res.totalElements;
          this.mongoLoading = false;
        },
        error: () => {
          this.aiLogs = [];
          this.mongoTotalPages = 0;
          this.mongoTotalElements = 0;
          this.mongoError = 'Impossible de charger les logs (AI sessions).';
          this.showToast('error', this.mongoError);
          this.mongoLoading = false;
        }
      });
  }

  private showToast(type: 'success' | 'error', msg: string): void {
    const Toast = Swal.mixin({
      toast: true, position: 'top-end',
      showConfirmButton: false, timer: 3500, timerProgressBar: true
    });
    Toast.fire({ icon: type, title: msg });
  }
}
