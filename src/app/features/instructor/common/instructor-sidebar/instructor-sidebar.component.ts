import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { CommonService } from '../../../../shared/service/common/common.service';
import { AuthService } from '../../../../shared/service/auth/auth.service';
import { MessageService } from '../../../../shared/service/message/message.service';
import { NotificationService } from '../../../../shared/service/notification/notification.service';
import { WebSocketNotificationService } from '../../../../shared/service/notification/websocket-notification.service';
import { routes } from '../../../../shared/service/routes/routes';

@Component({
    selector: 'app-instructor-sidebar',
    templateUrl: './instructor-sidebar.component.html',
    styleUrl: './instructor-sidebar.component.scss',
    imports:[CommonModule,RouterLink,RouterLinkActive]
})
export class InstructorSidebarComponent implements OnInit, OnDestroy {
  public routes = routes;
  public base = '';
  public page = '';
  public last = '';
  userName = localStorage.getItem('fullName') || 'Instructor';
  userAvatarUrl = '';
  unreadMsgCount = 0;
  unreadNotifCount = 0;
  private pollSub?: Subscription;
  private identitySub?: Subscription;
  private wsSub?: Subscription;

  get userInitials(): string {
    return (this.userName || 'I')
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }

  constructor(
    private common: CommonService,
    private authService: AuthService,
    private messageService: MessageService,
    private notificationService: NotificationService,
    private wsNotifService: WebSocketNotificationService
  ) {
    this.common.base.subscribe((base: string) => { this.base = base; });
    this.common.page.subscribe((page: string) => { this.page = page; });
    this.common.last.subscribe((last: string) => { this.last = last; });
  }

  ngOnInit(): void {
    this.authService.ensureProfileIdentityLoaded();
    this.userAvatarUrl = this.authService.resolveAvatarUrl(localStorage.getItem('avatarPath'));

    this.identitySub = new Subscription();
    this.identitySub.add(
      this.authService.currentFullName$.subscribe(name => {
        if (name) this.userName = name;
      })
    );
    this.identitySub.add(
      this.authService.currentAvatarPath$.subscribe(path => {
        this.userAvatarUrl = this.authService.resolveAvatarUrl(path);
      })
    );

    this.refreshCounts();
    this.wsNotifService.connect();
    this.wsSub = this.wsNotifService.getNewNotifications$().subscribe((notif) => {
      if (!notif?.read) {
        this.unreadNotifCount += 1;
      }
    });
    this.pollSub = interval(30000).subscribe(() => {
      this.refreshCounts();
    });
  }

  ngOnDestroy(): void {
    this.pollSub?.unsubscribe();
    this.identitySub?.unsubscribe();
    this.wsSub?.unsubscribe();
    this.wsNotifService.disconnect();
  }

  private refreshCounts(): void {
    this.messageService.getUnreadCount().subscribe({
      next: (res: any) => { this.unreadMsgCount = res?.count ?? res ?? 0; },
      error: () => {}
    });
    this.notificationService.getUnreadCount().subscribe({
      next: (count: any) => { this.unreadNotifCount = count?.count ?? count ?? 0; },
      error: () => {}
    });
  }

  onLogout(): void {
    this.authService.logout();
  }
}
