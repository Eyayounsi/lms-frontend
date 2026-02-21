import { Component } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-instructor-quiz-questions',
  imports:[CommonModule,RouterLink,FormsModule,MatSelectModule],
  templateUrl: './instructor-quiz-questions.component.html',
  styleUrl: './instructor-quiz-questions.component.scss'
})
export class InstructorQuizQuestionsComponent {
routes=routes
formData: any[] = []; // Initialize with an empty object to start with one row

addNewRow() {
  this.formData.push({});
}

removeRow(index: number) {
    this.formData.splice(index, 1);
}

}
