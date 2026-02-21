import { Component } from '@angular/core';
import { CommonService } from '../../../../shared/service/common/common.service';
import { routes } from '../../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../../shared/service/auth/auth.service';

@Component({
    selector: 'app-instructor-sidebar',
    templateUrl: './instructor-sidebar.component.html',
    styleUrl: './instructor-sidebar.component.scss',
    imports:[CommonModule,RouterLink,RouterLinkActive]
})
export class InstructorSidebarComponent {
  public routes = routes;
  public base = '';
  public page = '';
  public last = '';

  constructor(private common: CommonService, private authService: AuthService) {
    this.common.base.subscribe((base: string) => {
      this.base = base;
    });
    this.common.page.subscribe((page: string) => {
      this.page = page;
    });
    this.common.last.subscribe((last: string) => {
      this.last = last;
    });
  }

  onLogout(): void {
    this.authService.logout();
  }
}
