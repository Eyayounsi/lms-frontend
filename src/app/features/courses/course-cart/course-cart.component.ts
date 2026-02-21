import { Component } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-course-cart',
  imports : [CommonModule,RouterLink],
  templateUrl: './course-cart.component.html',
  styleUrl: './course-cart.component.scss'
})
export class CourseCartComponent {
routes=routes;
}
