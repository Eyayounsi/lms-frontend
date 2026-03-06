import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from '../../../../shared/service/routes/routes';
import { CommonService } from '../../../../shared/service/common/common.service';
import { AuthService } from '../../../../shared/service/auth/auth.service';
import { MessageService } from '../../../../shared/service/message/message.service';
import { Subscription, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
    selector: 'app-student-sidebar',
    templateUrl: './student-sidebar.component.html',
    styleUrl: './student-sidebar.component.scss',
    imports: [CommonModule, RouterModule],
})
export class StudentSidebarComponent implements OnInit, OnDestroy {
  public routes = routes;
  public base = '';
  public page = '';
  public last = '';
  unreadMsgCount = 0;
  private pollSub?: Subscription;

  constructor(private common: CommonService, private authService: AuthService, private messageService: MessageService) {
    this.common.base.subscribe((base: string) => { this.base = base; });
    this.common.page.subscribe((page: string) => { this.page = page; });
    this.common.last.subscribe((last: string) => { this.last = last; });
  }

  ngOnInit(): void {
    this.refreshCount();
    this.pollSub = interval(30000).pipe(
      switchMap(() => this.messageService.getUnreadCount())
    ).subscribe({
      next: (res: any) => { this.unreadMsgCount = res?.count ?? res ?? 0; },
      error: () => {}
    });
  }

  ngOnDestroy(): void {
    this.pollSub?.unsubscribe();
  }

  private refreshCount(): void {
    this.messageService.getUnreadCount().subscribe({
      next: (res: any) => { this.unreadMsgCount = res?.count ?? res ?? 0; },
      error: () => {}
    });
  }

  onLogout(): void {
    this.authService.logout();
  }
}
