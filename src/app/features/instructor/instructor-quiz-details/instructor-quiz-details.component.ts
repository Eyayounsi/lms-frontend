import { Component } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-instructor-quiz-details',
    templateUrl: './instructor-quiz-details.component.html',
    styleUrl: './instructor-quiz-details.component.scss',
    imports:[CommonModule,RouterLink]
})
export class InstructorQuizDetailsComponent {
  public routes = routes

}
