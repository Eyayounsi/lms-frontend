import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ChallengeService, ChallengeItem, ChallengesResponse } from '../../../shared/service/challenge/challenge.service';
import { routes } from '../../../shared/service/routes/routes';

@Component({
  selector: 'app-student-challenges',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './student-challenges.component.html',
  styleUrls: ['./student-challenges.component.scss']
})
export class StudentChallengesComponent implements OnInit {
  routes = routes;
  loading = true;
  error = '';

  challenges: ChallengeItem[] = [];
  points = 0;
  totalEarnedPoints = 0;
  unlockedCount = 0;
  totalCount = 0;

  constructor(private challengeService: ChallengeService) {}

  ngOnInit(): void {
    this.loadChallenges();
  }

  loadChallenges(): void {
    this.loading = true;
    this.error = '';
    this.challengeService.getChallenges().subscribe({
      next: (res: ChallengesResponse) => {
        this.challenges = res.challenges;
        this.points = res.points;
        this.totalEarnedPoints = res.totalEarnedPoints;
        this.unlockedCount = res.unlockedCount;
        this.totalCount = res.totalCount;
        this.loading = false;
      },
      error: () => {
        this.error = 'Impossible de charger les challenges.';
        this.loading = false;
      }
    });
  }

  get unlockedChallenges(): ChallengeItem[] {
    return this.challenges.filter(c => c.unlocked);
  }

  get lockedChallenges(): ChallengeItem[] {
    return this.challenges.filter(c => !c.unlocked);
  }
}
