import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationStart, Router, Event as RouterEvent, RouterModule } from '@angular/router';
import { routes } from '../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeatherIconModule } from '../../shared/module/feather.module';
import { SharedModule } from 'primeng/api';
import { InstructorSidebarComponent } from './common/instructor-sidebar/instructor-sidebar.component';

@Component({
    selector: 'app-instructor',
    templateUrl: './instructor.component.html',
    styleUrls: ['./instructor.component.scss'],
    imports: [
      CommonModule,
      FormsModule,
      FeatherIconModule,
      RouterModule,
      SharedModule,
      InstructorSidebarComponent
    ],
})
export class InstructorComponent implements OnInit, OnDestroy {
  public routes = routes;
  last = '';

  // ── Notes ──────────────────────────────────────────────────────────────────
  showNotesPanel = false;
  instructorNote = '';
  noteSaved = false;
  private noteSaveTimer: any;
 

  

  ngOnInit(): void {
    this.instructorNote = localStorage.getItem('instructor-general-note') ?? '';
  }

  ngOnDestroy(): void {
    clearTimeout(this.noteSaveTimer);
  }

  toggleNotesPanel(): void {
    this.showNotesPanel = !this.showNotesPanel;
  }

  saveNote(): void {
    localStorage.setItem('instructor-general-note', this.instructorNote);
    this.noteSaved = true;
    clearTimeout(this.noteSaveTimer);
    this.noteSaveTimer = setTimeout(() => { this.noteSaved = false; }, 2000);
  }

  constructor(private router: Router) {
    this.updateLastFromUrl(this.router.url);
    this.router.events.subscribe((data: RouterEvent) => {
      if (data instanceof NavigationStart) {
        this.updateLastFromUrl(data.url);
      }
    });
  }

  private updateLastFromUrl(url: string): void {
    const parts = url.split('/');
    const lastPart = parts[2]?.replace('instructor-', '').trim();
    this.last =parts[2]
    if (lastPart === 'profile') {
      this.last = 'My Profile';
    } else if (lastPart === 'course') {
      this.last = 'My Courses';
    } else if (lastPart === 'chat') {
      this.last = 'Messages';
    } else if (lastPart === 'quiz-attempts'){
      this.last = 'My Quiz Attempts';
    }
    else if (lastPart === 'qa'){
      this.last = 'Question & Answer';
    }
    else if (lastPart === 'quiz-results'){
      this.last = 'Quiz Results';
    }
    else if (lastPart === 'students-grid'){
      this.last = 'Students Grid';
    }
    else if (lastPart === 'students-list'){
      this.last = 'Students List';
    }
    else if (lastPart === 'quiz-questions'){
      this.last = 'Quiz Questions';
    }
   
    
    else {
      this.last = lastPart;
    }
  }
  }