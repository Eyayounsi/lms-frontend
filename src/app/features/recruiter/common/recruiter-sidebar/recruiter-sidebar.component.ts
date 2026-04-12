import { Component, OnInit } from '@angular/core';
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
export class RecruiterSidebarComponent implements OnInit {
  public routes = routes;
  public fullName = '';
  public initial  = 'R';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.fullName = localStorage.getItem('fullName') || 'Recruteur';
    this.initial  = this.fullName.charAt(0).toUpperCase();
  }

  onLogout(): void {
    this.authService.logout();
  }
}
