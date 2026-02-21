import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import routes from '../../../shared/service/routes/routes';

@Component({
  selector: 'app-student-quiz-questions',
  imports: [CommonModule,RouterLink],
  templateUrl: './student-quiz-questions.component.html',
  styleUrl: './student-quiz-questions.component.scss'
})
export class StudentQuizQuestionsComponent {
routes=routes
selected=1

moveNext():void{
  this.selected+=1;
}
movePrev():void{
  this.selected-=1;
}
}
