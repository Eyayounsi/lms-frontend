import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lock-screen',
  imports: [CommonModule,FormsModule],
  templateUrl: './lock-screen.component.html',
  styleUrl: './lock-screen.component.scss'
})
export class LockScreenComponent {
routes=routes
password: boolean[] = [false]; // Add more as needed
  
togglePassword(index:number): void {
  this.password[index]= !this.password[index];
}
constructor(
  private router:Router
){}
directIndex() {
  this.router.navigate([routes.instructor_dashboard]);
}
}
