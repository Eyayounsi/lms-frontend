import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../shared/service/auth/auth.service';

@Component({
  selector: 'app-session-expired',
  templateUrl: './session-expired.component.html',
  styleUrls: ['./session-expired.component.scss'],
  imports: [CommonModule]
})
export class SessionExpiredComponent implements OnInit, OnDestroy {
  countdown = 5;
  progressPct = 100;

  private tickInterval: ReturnType<typeof setInterval> | null = null;
  private endTimeout: ReturnType<typeof setTimeout> | null = null;
  private startedAt = 0;
  private readonly totalMs = 5000;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.startedAt = Date.now();

    this.tickInterval = setInterval(() => {
      const elapsed = Date.now() - this.startedAt;
      const remainingMs = Math.max(0, this.totalMs - elapsed);
      this.progressPct = Math.ceil((remainingMs / this.totalMs) * 100);
      this.countdown = Math.max(0, Math.ceil(remainingMs / 1000));
    }, 120);

    this.endTimeout = setTimeout(() => {
      this.confirmLogout();
    }, this.totalMs);
  }

  ngOnDestroy(): void {
    if (this.tickInterval) {
      clearInterval(this.tickInterval);
      this.tickInterval = null;
    }
    if (this.endTimeout) {
      clearTimeout(this.endTimeout);
      this.endTimeout = null;
    }
  }

  confirmLogout(): void {
    console.log('🔴 session-expired.component - user confirmed logout or timer expired');
    this.ngOnDestroy();
    this.authService.completeMandatoryLogout();
  }
}
