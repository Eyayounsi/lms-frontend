import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router, Event as RouterEvent } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { routes } from '../../shared/service/routes/routes';
import { StudentSidebarComponent } from './common/student-sidebar/student-sidebar.component';
import { AuthService } from '../../shared/service/auth/auth.service';

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.scss'],
    imports : [CommonModule,RouterModule,FormsModule,StudentSidebarComponent]
})
export class StudentComponent implements OnInit {
  public routes = routes;
  last = '';
  userName = '';

  // ✅ Modal de vérification password pour switch vers instructor
  showSwitchToInstructorModal = false;
  switchToInstructorPassword = '';
  switchToInstructorError = '';
  switchingToInstructor = false;

  get userInitials(): string {
    return (this.userName || 'S').split(' ').map(p => p.charAt(0)).join('').toUpperCase().slice(0, 2);
  }

  /** Vrai si le compte possède aussi le rôle INSTRUCTOR (primaire ou secondaire) */
  get hasInstructorRole(): boolean {
    const primaryRole = localStorage.getItem('role') || '';
    const secondary: string[] = JSON.parse(localStorage.getItem('secondaryRoles') || '[]');
    return primaryRole === 'INSTRUCTOR' || secondary.includes('INSTRUCTOR');
  }

  ngOnInit(): void {
    this.userName = localStorage.getItem('fullName') || 'Student';
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

  /** Afficher la modal pour saisir le mot de passe avant de basculer vers instructeur */
  switchToInstructor(): void {
    this.switchToInstructorPassword = '';
    this.switchToInstructorError = '';
    this.showSwitchToInstructorModal = true;
  }

  /** Confirmer et basculer vers le rôle instructeur après vérification du password */
  confirmSwitchToInstructor(): void {
    if (!this.switchToInstructorPassword.trim()) {
      this.switchToInstructorError = 'Mot de passe requis';
      return;
    }

    this.switchingToInstructor = true;
    this.switchToInstructorError = '';

    this.authService.switchRole('INSTRUCTOR', this.switchToInstructorPassword).subscribe({
      next: (resp: any) => {
        localStorage.setItem('token', resp.token);
        localStorage.setItem('role', resp.role);
        if (resp.secondaryRoles) {
          localStorage.setItem('secondaryRoles', JSON.stringify(resp.secondaryRoles));
        }
        this.authService.setCurrentRole(resp.role);
        this.authService.scheduleAutoLogout();
        // Fermer la modal
        this.showSwitchToInstructorModal = false;
        this.switchToInstructorPassword = '';
        this.switchingToInstructor = false;
        this.router.navigate([this.routes.instructor_dashboard]);
      },
      error: (err: any) => {
        this.switchingToInstructor = false;
        this.switchToInstructorError = err.error?.message || err.error || 'Erreur lors du changement de rôle';
      }
    });
  }
}
