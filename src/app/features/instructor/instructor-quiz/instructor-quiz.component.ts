import { Component } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { DatePickerModule } from 'primeng/datepicker';

@Component({
    selector: 'app-instructor-quiz',  
    templateUrl: './instructor-quiz.component.html',
    styleUrl: './instructor-quiz.component.scss',
    imports:[CommonModule,MatSelectModule,RouterLink,FormsModule,DatePickerModule]
})
export class InstructorQuizComponent {
  public routes = routes;
  time: Date = new Date();
  time2: Date = new Date();

}
