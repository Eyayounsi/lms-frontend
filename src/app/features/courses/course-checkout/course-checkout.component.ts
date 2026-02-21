import { Component } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-course-checkout',
  imports : [CommonModule,RouterLink],
  templateUrl: './course-checkout.component.html',
  styleUrl: './course-checkout.component.scss'
})
export class CourseCheckoutComponent {
routes=routes
}
