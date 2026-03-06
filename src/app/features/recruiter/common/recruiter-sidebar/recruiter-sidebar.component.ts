import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from '../../../../shared/service/routes/routes';
import { AuthService } from '../../../../shared/service/auth/auth.service';

@Component({
  selector: 'app-recruiter-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './recruiter-sidebar.component.html',
  styleUrls: ['./recruiter-sidebar.component.scss']
})
export class RecruiterSidebarComponent {
  public routes = routes;

  constructor(private authService: AuthService) {}

  onLogout(): void {
    this.authService.logout();
  }
}
