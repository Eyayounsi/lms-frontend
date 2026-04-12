import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from '../../../../shared/service/routes/routes';
import { AuthService } from '../../../../shared/service/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit, OnDestroy {
  public routes = routes;
  userName = localStorage.getItem('fullName') || 'Admin';
  private nameSub!: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.nameSub = this.authService.currentFullName$.subscribe(name => {
      if (name) this.userName = name;
    });
  }

  ngOnDestroy(): void {
    this.nameSub?.unsubscribe();
  }

  onLogout(): void {
    this.authService.logout();
  }
}
