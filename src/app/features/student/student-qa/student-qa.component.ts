import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from '../../../shared/service/routes/routes';
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-student-qa',
    templateUrl: './student-qa.component.html',
    styleUrl: './student-qa.component.scss',
    imports : [CommonModule,RouterLink]
})
export class StudentQaComponent {
  public routes = routes;
  current:number=1

  next(): void {
    if(this.current<6){
    this.current+=1;
    }
  }
  previous():void{
    if(this.current>1){
      this.current-=1
    }
  }
}
