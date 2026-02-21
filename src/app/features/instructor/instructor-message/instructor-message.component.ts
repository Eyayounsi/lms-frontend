import { Component } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-instructor-message',
  imports:[CommonModule,RouterLink],
  templateUrl: './instructor-message.component.html',
  styleUrl: './instructor-message.component.scss'
})
export class InstructorMessageComponent {
routes=routes;
isSearch=false;
openSearch():void{
  this.isSearch=!this.isSearch
}
}
