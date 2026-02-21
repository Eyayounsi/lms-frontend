import { Component } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-instructor-course-grid',
  imports:[CommonModule,RouterLink],
  templateUrl: './instructor-course-grid.component.html',
  styleUrl: './instructor-course-grid.component.scss'
})
export class InstructorCourseGridComponent {
routes=routes
}
