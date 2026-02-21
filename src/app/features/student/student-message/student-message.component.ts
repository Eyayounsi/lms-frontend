import { Component } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-student-message',
    templateUrl: './student-message.component.html',
    styleUrl: './student-message.component.scss',
    imports : [CommonModule,RouterLink]
})
export class StudentMessageComponent {
  public routes = routes;
  isSearch=false;
  openSearch():void{
    this.isSearch=!this.isSearch
  }
}
