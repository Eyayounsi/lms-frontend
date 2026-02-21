import { Component } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-instructor-list',
  imports: [CommonModule,RouterLink,MatSliderModule],
  templateUrl: './instructor-list.component.html',
  styleUrl: './instructor-list.component.scss'
})
export class InstructorListComponent {
  routes=routes
  startValue = 500;
  endValue = 3000;
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value) + '';
    }
  
    return `${value}`;
  }
  formatLabel1(value: number): string {
    if (value >= 5000) {
      return '$'+ Math.round(value / 5000) ;
    }
  
    return `$${value}`;
  }
}
