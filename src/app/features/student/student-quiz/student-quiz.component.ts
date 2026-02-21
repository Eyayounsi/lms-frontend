import { Component } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-student-quiz',
    templateUrl: './student-quiz.component.html',
    styleUrl: './student-quiz.component.scss',
    imports : [CommonModule,RouterLink] 
})
export class StudentQuizComponent {
  public routes = routes;
}
