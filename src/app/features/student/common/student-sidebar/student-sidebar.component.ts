import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from '../../../../shared/service/routes/routes';
import { CommonService } from '../../../../shared/service/common/common.service';
import { AuthService } from '../../../../shared/service/auth/auth.service';


@Component({
    selector: 'app-student-sidebar',
    templateUrl: './student-sidebar.component.html',
    styleUrl: './student-sidebar.component.scss',
    imports: [CommonModule, RouterModule],
})
export class StudentSidebarComponent {
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
