import { Component } from '@angular/core';
import { NavigationStart, Router, Event as RouterEvent, RouterModule } from '@angular/router';
import { routes } from '../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { FeatherIconModule } from '../../shared/module/feather.module';
import { SharedModule } from 'primeng/api';
import { InstructorSidebarComponent } from './common/instructor-sidebar/instructor-sidebar.component';

@Component({
    selector: 'app-instructor',
    templateUrl: './instructor.component.html',
    styleUrls: ['./instructor.component.scss'],
    imports: [
      CommonModule,
      FeatherIconModule,
      RouterModule,
      SharedModule,
      InstructorSidebarComponent
    ],
})
export class InstructorComponent {
  public routes = routes;
  last = '';
 

  

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