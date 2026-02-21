import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from '../../../../shared/service/routes/routes';
import { AuthService } from '../../../../shared/service/auth/auth.service';

@Component({
  selector: 'app-superadmin-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './superadmin-sidebar.component.html',
  styleUrls: ['./superadmin-sidebar.component.scss']
})
export class SuperadminSidebarComponent {
  public routes = routes;
  public userName: string = localStorage.getItem('fullName') || 'Super Administrateur';

  constructor(private authService: AuthService) {}

  onLogout(): void {
    this.authService.logout();
  }
}
