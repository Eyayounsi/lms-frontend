import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { routes } from '../../../shared/service/routes/routes';

@Component({
    selector: 'app-student-courses',
    templateUrl: './student-courses.component.html',
    styleUrl: './student-courses.component.scss',
    imports : [CommonModule,RouterLink]
})
export class StudentCoursesComponent {
  public routes = routes;
  isSelected:boolean[]=[false];
  iconSelect(index:number) : void{
    this.isSelected[index]=!this.isSelected[index]
    }
}
