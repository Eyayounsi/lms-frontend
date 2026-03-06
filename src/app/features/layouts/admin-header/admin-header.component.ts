import { Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonService } from '../../../shared/service/common/common.service';
import { DataService } from '../../../shared/service/data/data.service';
import { SidebarService } from '../../../shared/service/sidebar/sidebar.service';
import { routes } from '../../../shared/service/routes/routes';
import { SidebarItem } from '../../../shared/models/model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../shared/service/auth/auth.service';
import { NotificationService, NotificationDto } from '../../../shared/service/notification/notification.service';

@Component({
    selector: 'app-admin-header',
    templateUrl: './admin-header.component.html',
    styleUrls: ['./admin-header.component.scss'],
    imports: [CommonModule,RouterLink]
})
export class AdminHeaderComponent implements OnInit, OnDestroy {
   public routes = routes;
   @ViewChild('stickyMenu')
   menuElement!: ElementRef;
   headerpage = false;
   sticky = false;
   elementPosition!: number;
   public headerClass = true;
   isHovered=false;
   isFixed = false;
   isOpened = false;
   isDropdownOpen=false;
   isDropdownOpen1: number | null = null;
   base = '';
   page = '';
   last = '';
   headerMenuactive = '';
   openDropdownIndex: number | null = null;
   themeColor = 'light-mode';
   islight=true;
   isdark=false;
   sidebar: SidebarItem[];
   @HostListener('window:scroll', [])
   onWindowScroll() {
     // Add a fixed class when the scroll position is greater than 50px
     this.isFixed = window.pageYOffset > 40;
   }
 
   public toggleSidebar(): void {
      this.sidebarService.openSidebar();
    this.isOpened=!this.isOpened; 
    if(this.isOpened===true){
    this.renderer.addClass(document.documentElement,'menu-opened')
    }
    else{
      this.renderer.removeClass(document.documentElement,'menu-opened')
    }
   }
   public hideSidebar(): void {
     this.sidebarService.closeSidebar();
    this.isOpened=false;
    this.renderer.removeClass(document.documentElement,'menu-opened')
   }

   openSubMenu():void{
     this.isDropdownOpen=!this.isDropdownOpen;
     this.openDropdownIndex=null;
   }
   openSubMenu1(index: number):void{
     this.isDropdownOpen1=this.isDropdownOpen1 === index? null :index;
   }
   toggleSubMenu(index: number): void {
     // If the clicked menu is already open, close it
     this.openDropdownIndex = this.openDropdownIndex === index ? null : index;
     this.isDropdownOpen=false;
   }
   switchTheme():void{
    this.isdark=!this.isdark;
    this.islight=!this.islight;
  }

  userName = '';
  userEmail = '';

  // Notifications
  notifications: NotificationDto[] = [];
  unreadCount = 0;
  private notifInterval: any;

  constructor(
    private common: CommonService,
    private data: DataService,
    public sidebarService: SidebarService,
    private renderer: Renderer2,
    private authService: AuthService,
    private notificationService: NotificationService
  ) {
    this.common.base.subscribe((res: string) => {
      this.base = res;
    });
    this.common.page.subscribe((res: string) => {
      this.page = res;
    });
    this.common.last.subscribe((res: string) => {
      this.last = res;
    });
    this.sidebar = this.data.sideBar;
    this.sidebarService.themeColors.subscribe((res: string) => {
     this.themeColor = res;
   });
 
  }

  ngOnInit(): void {
    const themeColor = localStorage.getItem('themeColor') || 'light-mode';
    this.sidebarService.changeThemeColor(themeColor);
    this.userName = localStorage.getItem('fullName') || 'Utilisateur';
    this.userEmail = localStorage.getItem('email') || '';
    this.loadNotifications();
    this.notifInterval = setInterval(() => this.loadNotifications(), 60000);
  }

  ngOnDestroy(): void {
    if (this.notifInterval) clearInterval(this.notifInterval);
  }

  loadNotifications(): void {
    const token = localStorage.getItem('token');
    if (!token) return;
    this.notificationService.getMyNotifications().subscribe({
      next: (data) => {
        this.notifications = data.slice(0, 10);
        this.unreadCount = data.filter(n => !n.read).length;
      },
      error: () => {}
    });
  }

  markNotifAsRead(notif: NotificationDto): void {
    if (!notif.read) {
      this.notificationService.markAsRead(notif.id).subscribe({
        next: () => {
          notif.read = true;
          this.unreadCount = Math.max(0, this.unreadCount - 1);
        },
        error: () => {}
      });
    }
  }

  markAllNotifsAsRead(): void {
    this.notificationService.markAllAsRead().subscribe({
      next: () => {
        this.notifications.forEach(n => n.read = true);
        this.unreadCount = 0;
      },
      error: () => {}
    });
  }

  getNotifIcon(type: string): string {
    switch (type) {
      case 'PURCHASE_CONFIRMED': return 'isax-shopping-cart';
      case 'COURSE_APPROVED':    return 'isax-tick-circle';
      case 'COURSE_REJECTED':    return 'isax-close-circle';
      case 'CERTIFICATE_ISSUED': return 'isax-award';
      case 'NEW_REVENUE':        return 'isax-dollar-circle';
      default:                   return 'isax-notification';
    }
  }

  formatNotifDate(dateStr: string): string {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    const now = new Date();
    const diffMs = now.getTime() - d.getTime();
    const diffMin = Math.floor(diffMs / 60000);
    if (diffMin < 1)  return 'à l\'instant';
    if (diffMin < 60) return `il y a ${diffMin} min`;
    const diffH = Math.floor(diffMin / 60);
    if (diffH < 24)   return `il y a ${diffH}h`;
    return d.toLocaleDateString('fr-FR');
  }

  onLogout(): void {
    this.authService.logout();
  }

}
