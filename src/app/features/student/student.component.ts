
import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router, Event as RouterEvent } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from '../../shared/service/routes/routes';
import { StudentSidebarComponent } from './common/student-sidebar/student-sidebar.component';
import { AuthService } from '../../shared/service/auth/auth.service';

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.scss'],
  imports : [CommonModule,RouterModule,StudentSidebarComponent]
})
export class StudentComponent implements OnInit {
  public routes = routes;
  last = '';
  userName = '';
  userAvatarUrl = '';

  get userInitials(): string {
    return (this.userName || 'S').split(' ').map(p => p.charAt(0)).join('').toUpperCase().slice(0, 2);
  }

  get pageTitle(): string {
    // Dashboard: garder Bienvenue
    if (this.last === '' || this.last.toLowerCase().includes('dashboard')) return 'Bienvenue';
    // Traductions rapides (à adapter si besoin)
    const map: any = {
      'Enrolled Courses': 'Mes cours',
      'My Profile': 'Mon profil',
      'My Certificates': 'Certificats',
      'Wishlist': 'Wishlist',
      'Reviews': 'Avis',
      'My Quiz Attempts': 'Quiz',
      'Order History': 'Commandes',
      'Referrals': 'Parrainages',
      'Messages': 'Messages',
      'Question & Answer': 'Q&A',
      'Support Tickets': 'Tickets',
      "Offres d'Emploi": "Offres d'Emploi",
      'Challenges': 'Challenges',
    };
    return map[this.last] || this.last;
  }

  get pageIcon(): string {
    if (this.last === '' || this.last.toLowerCase().includes('dashboard')) return '';
    const map: any = {
      'Enrolled Courses': 'isax isax-teacher5',
      'My Profile': 'fa-solid fa-user',
      'My Certificates': 'isax isax-note-215',
      'Wishlist': 'isax isax-heart5',
      'Reviews': 'isax isax-star5',
      'My Quiz Attempts': 'isax isax-award5',
      'Order History': 'isax isax-shopping-cart5',
      'Referrals': 'isax isax-tag-user5',
      'Messages': 'isax isax-messages-35',
      'Question & Answer': 'isax isax-message-question5',
      'Support Tickets': 'isax isax-message-question5',
      "Offres d'Emploi": 'ti ti-briefcase',
      'Challenges': 'ti ti-trophy',
    };
    return map[this.last] || 'isax isax-book';
  }

  ngOnInit(): void {
    this.authService.ensureProfileIdentityLoaded();
    this.userName = localStorage.getItem('fullName') || 'Student';
    this.userAvatarUrl = this.authService.resolveAvatarUrl(localStorage.getItem('avatarPath'));

    this.authService.currentFullName$.subscribe(name => {
      if (name) this.userName = name;
    });
    this.authService.currentAvatarPath$.subscribe(path => {
      this.userAvatarUrl = this.authService.resolveAvatarUrl(path);
    });
  }

  constructor(private router: Router, private authService: AuthService) {
    this.updateLastFromUrl(this.router.url);
    this.router.events.subscribe((data: RouterEvent) => {
      if (data instanceof NavigationStart) {
        this.updateLastFromUrl(data.url);
      }
    });
  }

  private updateLastFromUrl(url: string): void {
    const parts = url.split('/');
    const lastPart = parts[2]?.replace('student-', '').trim();

    if (lastPart === 'profile') {
      this.last = 'My Profile';
    } else if (lastPart === 'courses') {
      this.last = 'Enrolled Courses';
    } else if (lastPart === 'chat') {
      this.last = 'Messages';
    } else if (lastPart === 'quiz'){
      this.last = 'My Quiz Attempts';
    }
    else if (lastPart === 'qa'){
      this.last = 'Question & Answer';
    }
    else if (lastPart === 'tickets'){
      this.last = 'Support Tickets';
    }
    else if (lastPart === 'certificate'){
      this.last = 'My Certificates';
    }
    else if (lastPart === 'quiz-questions'){
      this.last = 'My Quiz Attempts';
    }
    else {
      this.last = lastPart;
    }
  }
}
