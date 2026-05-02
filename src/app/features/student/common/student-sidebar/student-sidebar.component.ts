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
  userName = localStorage.getItem('fullName') || 'Etudiant';
  userAvatarUrl = '';
  unreadMsgCount = 0;
  private pollSub?: Subscription;
  private identitySub?: Subscription;

  get userInitials(): string {
    return (this.userName || 'E')
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }

  constructor(private common: CommonService, private authService: AuthService, private messageService: MessageService) {
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
    this.identitySub?.unsubscribe();
  }

  onAvatarError(): void {
    this.userAvatarUrl = '';
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
