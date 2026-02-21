import { Component } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-become-an-expert',
  imports: [CommonModule],
  templateUrl: './become-an-expert.component.html',
  styleUrl: './become-an-expert.component.scss'
})
export class BecomeAnExpertComponent {
routes=routes;
   password: boolean[] = [false]; // Add more as needed
  
   togglePassword(index:number): void {
     this.password[index]= !this.password[index];
   }
}
