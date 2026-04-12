import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationDto, NotificationService } from '../../../shared/service/notification/notification.service';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NotificationActionsService } from '../../../shared/service/notification/notification-actions.service';
import { WebSocketNotificationService } from '../../../shared/service/notification/websocket-notification.service';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  imports: [CommonModule]
})
export class NotificationsComponent implements OnInit, OnDestroy {
  public routes = routes;
  public loading = true;
  public allNotifications: NotificationDto[] = [];
  public notificationsToday: NotificationDto[] = [];
  public notificationsYesterday: NotificationDto[] = [];
  public notificationsEarlier: NotificationDto[] = [];
  public pageSize = 8;
  public currentPage = 1;
  public totalPages = 1;
  private headerActionsSub?: Subscription;
  private wsSub?: Subscription;

  constructor(
    private notificationService: NotificationService,
    private router: Router,
    private notificationActionsService: NotificationActionsService,
    private wsNotifService: WebSocketNotificationService
  ) {}

  ngOnInit(): void {
    const role = (localStorage.getItem('role') || '').toUpperCase();
    if (role.includes('INSTRUCTOR') && this.router.url.startsWith('/pages/notifications')) {
      this.router.navigateByUrl(routes.instructorNotifications);
      return;
    }

    this.loadNotifications();
    this.wsNotifService.connect();
    this.wsSub = this.wsNotifService.getNewNotifications$().subscribe((notif) => {
      if (!notif) return;
      this.allNotifications = [notif, ...this.allNotifications.filter(n => n.id !== notif.id)];
      this.currentPage = 1;
      this.rebuildBucketsFromCurrentPage();
    });

    this.headerActionsSub = this.notificationActionsService.actions$.subscribe((action) => {
      if (action === 'mark-all-read') {
        this.markAllAsRead();
      } else if (action === 'delete-all') {
        this.deleteAllNotifications();
      }
    });
  }

  ngOnDestroy(): void {
    this.headerActionsSub?.unsubscribe();
    this.wsSub?.unsubscribe();
    this.wsNotifService.disconnect();
  }

  loadNotifications(): void {
    this.loading = true;
    this.notificationService.getMyNotifications().subscribe({
      next: (items) => {
        this.allNotifications = Array.isArray(items) ? [...items] : [];
        this.currentPage = 1;
        this.rebuildBucketsFromCurrentPage();
        this.loading = false;
      },
      error: () => {
        this.allNotifications = [];
        this.notificationsToday = [];
        this.notificationsYesterday = [];
        this.notificationsEarlier = [];
        this.totalPages = 1;
        this.loading = false;
      }
    });
  }

  markAllAsRead(): void {
    if (this.allNotifications.length === 0) return;
    this.notificationService.markAllAsRead().subscribe({
      next: () => {
        this.allNotifications = this.allNotifications.map((n) => ({ ...n, read: true }));
        this.rebuildBucketsFromCurrentPage();
      },
      error: () => {}
    });
  }

  deleteNotification(item: NotificationDto): void {
    this.allNotifications = this.allNotifications.filter((n) => n.id !== item.id);
    this.rebuildBucketsFromCurrentPage();
  }

  deleteAllNotifications(): void {
    this.allNotifications = [];
    this.currentPage = 1;
    this.rebuildBucketsFromCurrentPage();
  }

  previousPage(): void {
    if (this.currentPage <= 1) return;
    this.currentPage -= 1;
    this.rebuildBucketsFromCurrentPage();
  }

  nextPage(): void {
    if (this.currentPage >= this.totalPages) return;
    this.currentPage += 1;
    this.rebuildBucketsFromCurrentPage();
  }

  markAsRead(item: NotificationDto): void {
    if (item.read) return;
    this.notificationService.markAsRead(item.id).subscribe({
      next: () => {
        item.read = true;
      },
      error: () => {}
    });
  }

  unreadCount(): number {
    return this.allNotifications.filter((item) => !item.read).length;
  }

  formatNotifDate(dateStr: string): string {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    const now = new Date();
    const diffMs = now.getTime() - d.getTime();
    const diffMin = Math.floor(diffMs / 60000);
    if (diffMin < 1) return 'A l\'instant';
    if (diffMin < 60) return `il y a ${diffMin} min`;
    const diffH = Math.floor(diffMin / 60);
    if (diffH < 24) return `il y a ${diffH}h`;
    return d.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  getNotifIcon(type: string): string {
    switch ((type || '').toUpperCase()) {
      case 'COURSE_APPROVED':
      case 'COURSE_MODIFICATION_APPROVED':
        return 'isax-tick-circle';
      case 'COURSE_REJECTED':
        return 'isax-close-circle';
      case 'COURSE_ARCHIVED_BY_INSTRUCTOR':
      case 'COURSE_ARCHIVED_BY_ADMIN':
        return 'isax-archive-minus';
      case 'COURSE_UNARCHIVED_BY_INSTRUCTOR':
      case 'COURSE_UNARCHIVED_BY_ADMIN':
        return 'isax-refresh-circle';
      case 'COURSE_PROMOTION_UPDATED':
        return 'isax-discount-circle';
      case 'NEW_REVENUE':
      case 'PAYOUT_PAID':
        return 'isax-dollar-circle';
      case 'PAYOUT_REJECTED':
        return 'isax-wallet-remove';
      case 'NEW_MESSAGE':
        return 'isax-messages-3';
      default:
        return 'isax-notification';
    }
  }

  private splitByDateBuckets(items: NotificationDto[]): void {
    const now = new Date();
    const startToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    const startYesterday = startToday - 24 * 60 * 60 * 1000;

    this.notificationsToday = [];
    this.notificationsYesterday = [];
    this.notificationsEarlier = [];

    items.forEach((item) => {
      const t = new Date(item.createdAt).getTime();
      if (Number.isNaN(t)) {
        this.notificationsEarlier.push(item);
        return;
      }
      if (t >= startToday) {
        this.notificationsToday.push(item);
      } else if (t >= startYesterday) {
        this.notificationsYesterday.push(item);
      } else {
        this.notificationsEarlier.push(item);
      }
    });
  }

  private rebuildBucketsFromCurrentPage(): void {
    const sorted = [...this.allNotifications].sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

    this.totalPages = Math.max(1, Math.ceil(sorted.length / this.pageSize));
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    }

    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    const pageItems = sorted.slice(start, end);
    this.splitByDateBuckets(pageItems);
  }

}


