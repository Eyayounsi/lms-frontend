import { Component } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-course-category-3',
  imports : [CommonModule,RouterLink],
  templateUrl: './course-category-3.component.html',
  styleUrl: './course-category-3.component.scss'
})
export class CourseCategory3Component {
routes=routes
}
