import { Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonService } from '../../../shared/service/common/common.service';
import { DataService } from '../../../shared/service/data/data.service';
import { SidebarService } from '../../../shared/service/sidebar/sidebar.service';
import { routes } from '../../../shared/service/routes/routes';
import { SidebarItem } from '../../../shared/models/model';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../shared/service/auth/auth.service';
import { MessageService } from '../../../shared/service/message/message.service';
import { WebSocketNotificationService } from '../../../shared/service/notification/websocket-notification.service';
import { Subscription, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [CommonModule,RouterLink]
})
export class HeaderComponent implements OnInit, OnDestroy {
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
  indexMoreOpen = false;
  homeDropdownOpen = false;
  base: string = '';
  page: string = '';
  last: string = '';
  headerMenuactive = '';
  openDropdownIndex: number | null = null;
  themeColor = 'light-mode';
  islight=true;
  isdark=false;
  public showDark = false;
  public white_bg = false;

  // ── User state ──
  isLoggedIn = false;
  userName = '';
  userRole = '';
  isProfileDropdownOpen = false;
  unreadMsgCount = 0;
  private pollSub?: Subscription;

  get userInitials(): string {
    if (!this.userName) return 'U';
    return this.userName.split(' ').map(p => p.charAt(0)).join('').toUpperCase().slice(0, 2);
  }
  get isStudent():     boolean { return this.userRole.includes('STUDENT'); }
  get isInstructor():  boolean { return this.userRole.includes('INSTRUCTOR'); }
  get isAdmin():       boolean { return this.userRole.includes('ADMIN') && !this.userRole.includes('SUPERADMIN'); }
  get isSuperAdmin():  boolean { return this.userRole.includes('SUPERADMIN'); }
  get isRecruiter():   boolean { return this.userRole.includes('RECRUITER'); }
  get showCart():      boolean { return this.isStudent || !this.isLoggedIn; }
  get showCartOnPublicCoursePages(): boolean {
    const url = this.router.url || '';
    return url.includes('/courses/course-list-public') || url.includes('/courses/course-details');
  }

  get dashboardRoute(): string {
    if (this.isSuperAdmin)  return '/superadmin/superadmin-dashboard';
    if (this.isAdmin)       return '/admin/admin-dashboard';
    if (this.isInstructor)  return '/instructor/instructor-dashboard';
    if (this.isStudent)     return '/student/student-dashboard';
    if (this.isRecruiter)   return '/recruiter/recruiter-dashboard';
    return '/';
  }
  get profileRoute(): string {
    if (this.isSuperAdmin)  return '/superadmin/superadmin-settings';
    if (this.isAdmin)       return '/admin/admin-settings';
    if (this.isInstructor)  return '/instructor/settings/instructor-settings';
    if (this.isStudent)     return '/student/student-profile';
    if (this.isRecruiter)   return '/recruiter/settings/recruiter-settings';
    return '/';
  }
  get roleLabel(): string {
    if (this.isSuperAdmin)  return 'Super Admin';
    if (this.isAdmin)       return 'Admin';
    if (this.isInstructor)  return 'Instructeur';
    if (this.isStudent)     return 'Étudiant';
    if (this.isRecruiter)   return 'Recruteur';
    return this.userRole;
  }
  doLogout(): void {
    this.isProfileDropdownOpen = false;
    this.authService.logout();
  }
  toggleProfileDropdown(): void {
    this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
  }

  sidebar: SidebarItem[];
  constructor(
    private common: CommonService,
    private data: DataService,
    public sidebarService: SidebarService,
    private renderer: Renderer2,
    private el: ElementRef,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService,
    private wsNotifService: WebSocketNotificationService
  ) {
    this.common.base.subscribe((res: string) => {
      this.base = res;
      this.renderer.removeClass(document.documentElement,'menu-opened');
        this.isOpened = false;
    });
    this.common.page.subscribe((res: string) => {
      this.page = res;
       this.renderer.removeClass(document.documentElement,'menu-opened');
        this.isOpened = false;
    });
    this.common.last.subscribe((res: string) => {
      this.last = res;
    });
    this.sidebar = this.data.sideBar;

    this.sidebarService.themeColors.subscribe((res: string) => {
      this.themeColor = res;
    });
  }

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
  themeMode: string = 'light_mode';
  isDarkMode: boolean = false;
  // toggleMode(isDark: boolean) {
  //   this.isDarkMode = isDark;
  //   this.applyTheme();
  // }
  openSubMenu():void{
    this.isDropdownOpen=!this.isDropdownOpen;
    this.openDropdownIndex=null;
  }
  toggleHomeDropdown(): void {
    this.homeDropdownOpen = !this.homeDropdownOpen;
  }
  isHomeRoute(route: string): boolean {
    return this.base === route;
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
 ngOnInit(): void {
  const themeColor = localStorage.getItem('themeColor') || 'light-mode';
  this.sidebarService.changeThemeColor(themeColor);
  this.isLoggedIn = this.authService.isLoggedIn();
  this.userName = localStorage.getItem('fullName') || 'Utilisateur';
  this.userRole = localStorage.getItem('role') || '';

  if (this.isLoggedIn) {
    this.refreshUnreadCount();
    // Poll every 30 seconds
    this.pollSub = interval(30000).pipe(
      switchMap(() => this.messageService.getUnreadCount())
    ).subscribe({
      next: (res: any) => { this.unreadMsgCount = res?.count ?? res ?? 0; },
      error: () => {}
    });

    // 🚀 Démarrer WebSocket pour les notifications temps réel
    try {
      this.wsNotifService.connect();
    } catch (e) {
      console.error('[HEADER] ❌ Erreur WebSocket:', e);
    }
  }
}

ngOnDestroy(): void {
  this.pollSub?.unsubscribe();
  // Déconnecter WebSocket
  this.wsNotifService.disconnect();
}

private refreshUnreadCount(): void {
  this.messageService.getUnreadCount().subscribe({
    next: (res: any) => { this.unreadMsgCount = res?.count ?? res ?? 0; },
    error: () => {}
  });
}

/** Translate nav top-level titles to French */
translateNavItem(tittle: string): string {
  const map: Record<string, string> = {
    'Home':       'Accueil',
    'Courses':    'Cours',
    'Dashboard':  'Tableau de bord',
    'Pages':      'Pages',
    'Blog':       'Blog',
  };
  return map[tittle] ?? tittle;
}

}
