import { Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonService } from '../../../shared/service/common/common.service';
import { DataService } from '../../../shared/service/data/data.service';
import { SidebarService } from '../../../shared/service/sidebar/sidebar.service';
import { routes } from '../../../shared/service/routes/routes';
import { SidebarItem } from '../../../shared/models/model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../shared/service/auth/auth.service';
import { NotificationService, NotificationDto } from '../../../shared/service/notification/notification.service';
import { Subscription } from 'rxjs';
import { WebSocketNotificationService } from '../../../shared/service/notification/websocket-notification.service';

@Component({
    selector: 'app-admin-header',
    templateUrl: './admin-header.component.html',
    styleUrls: ['./admin-header.component.scss'],
    imports: [CommonModule, FormsModule, RouterLink]
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
  userRole = '';
  userAvatarUrl = '';
  secondaryRoles: string[] = [];
  isSwitchingRole = false;

  // ✅ Modal générique de vérification password pour switch de rôle
  showSwitchRoleModal = false;
  switchRoleTargetRole: string | null = null;
  switchRolePassword = '';
  switchRoleError = '';
  switchingRoleWithPassword = false;

  /** Vrai si l'instructeur peut accéder au dashboard étudiant */
  get canAccessStudentDashboard(): boolean {
    return this.isInstructor && this.availableSwitchRoles.includes('STUDENT');
  }

  get isStudent():    boolean { return this.userRole.includes('STUDENT'); }
  get isInstructor(): boolean { return this.userRole.includes('INSTRUCTOR'); }
  get isAdmin():      boolean { return this.userRole.includes('ADMIN') && !this.userRole.includes('SUPERADMIN'); }
  get isSuperAdmin(): boolean { return this.userRole.includes('SUPERADMIN'); }
  get isRecruiter():  boolean { return this.userRole.includes('RECRUITER'); }

  get userInitials(): string {
    if (!this.userName) return 'U';
    return this.userName.split(' ').map(p => p.charAt(0)).join('').toUpperCase().slice(0, 2);
  }

  get roleLabel(): string {
    if (this.isSuperAdmin)  return 'Super Admin';
    if (this.isAdmin)       return 'Admin';
    if (this.isInstructor)  return 'Instructeur';
    if (this.isStudent)     return 'Étudiant';
    if (this.isRecruiter)   return 'Recruteur';
    return this.userRole;
  }

  get roleBadgeClass(): string {
    if (this.isSuperAdmin)  return 'badge-superadmin';
    if (this.isAdmin)       return 'badge-admin';
    if (this.isInstructor)  return 'badge-instructor';
    if (this.isStudent)     return 'badge-student';
    if (this.isRecruiter)   return 'badge-recruiter';
    return '';
  }

  get avatarBg(): string {
    if (this.isSuperAdmin)  return 'linear-gradient(135deg,#020c18,#0d3a66,#5625E8,#0DCAF0)';
    if (this.isAdmin)       return 'linear-gradient(135deg,#ef4444,#dc2626)';
    if (this.isInstructor)  return 'linear-gradient(135deg,#6366f1,#8b5cf6)';
    if (this.isStudent)     return 'linear-gradient(135deg,#10b981,#059669)';
    if (this.isRecruiter)   return 'linear-gradient(135deg,#0ea5e9,#0284c7)';
    return 'linear-gradient(135deg,#6b7280,#4b5563)';
  }

  get accentColor(): string {
    if (this.isSuperAdmin)  return '#0DCAF0';
    if (this.isAdmin)       return '#5625E8';
    if (this.isInstructor)  return '#6366f1';
    if (this.isStudent)     return '#10b981';
    if (this.isRecruiter)   return '#0ea5e9';
    return '#6b7280';
  }

  // Notifications
  notifications: NotificationDto[] = [];
  unreadCount = 0;
  unreadMessageCount = 0;
  private notifInterval: any;
  private wsNotifSub?: Subscription;

  /** Rôles vers lesquels l'utilisateur peut basculer (sans le rôle actif) */
  get availableSwitchRoles(): string[] {
    return this.secondaryRoles.filter(r => r !== this.userRole);
  }

  getRoleSwitchLabel(role: string): string {
    const map: Record<string, string> = {
      STUDENT: 'Étudiant', INSTRUCTOR: 'Instructeur',
      ADMIN: 'Admin', RECRUITER: 'Recruteur', SUPERADMIN: 'Super Admin'
    };
    return map[role] || role;
  }

  getRoleSwitchIcon(role: string): string {
    const map: Record<string, string> = {
      STUDENT: 'isax-teacher', INSTRUCTOR: 'isax-book-1',
      ADMIN: 'isax-shield-tick', RECRUITER: 'isax-briefcase',
      SUPERADMIN: 'isax-shield-star'
    };
    return map[role] || 'isax-profile-circle';
  }

  getRoleSwitchColor(role: string): string {
    const map: Record<string, string> = {
      STUDENT: '#10b981', INSTRUCTOR: '#6366f1',
      ADMIN: '#ef4444', RECRUITER: '#0ea5e9', SUPERADMIN: '#0DCAF0'
    };
    return map[role] || '#6b7280';
  }

  /** Afficher la modal pour vérifier le password avant de changer de rôle */
  switchToRole(targetRole: string): void {
    if (this.isSwitchingRole) return;
    this.switchRoleTargetRole = targetRole;
    this.switchRolePassword = '';
    this.switchRoleError = '';
    this.showSwitchRoleModal = true;
  }

  /** Changer de rôle après vérification du password (modal) */
  confirmSwitchRole(): void {
    if (!this.switchRoleTargetRole) return;
    if (!this.switchRolePassword.trim()) {
      this.switchRoleError = 'Mot de passe requis';
      return;
    }

    this.switchingRoleWithPassword = true;
    this.switchRoleError = '';
    this.isSwitchingRole = true;

    this.authService.switchRole(this.switchRoleTargetRole, this.switchRolePassword).subscribe({
      next: (res: any) => {
        // Mettre à jour le localStorage avec le nouveau token et rôle
        localStorage.setItem('token',          res.token);
        localStorage.setItem('role',           res.role);
        localStorage.setItem('secondaryRoles', JSON.stringify(res.secondaryRoles || []));
        if (res.fullName) localStorage.setItem('fullName', res.fullName);
        if (res.email)    localStorage.setItem('email',    res.email);
        // Relancer le timer auto-logout avec le nouveau token
        this.authService.scheduleAutoLogout();
        // Synchroniser le BehaviorSubject AVANT toute navigation
        this.authService.setCurrentRole(res.role);
        // Mettre à jour les propriétés du composant immédiatement
        this.userRole         = res.role;
        this.secondaryRoles   = res.secondaryRoles || [];
        if (res.fullName) this.userName  = res.fullName;
        if (res.email)    this.userEmail = res.email;
        // Fermer la modal
        this.showSwitchRoleModal = false;
        this.switchRoleTargetRole = null;
        this.switchRolePassword = '';
        // Rediriger vers le dashboard approprié
        const dashMap: Record<string, string> = {
          SUPERADMIN: '/superadmin/superadmin-dashboard',
          ADMIN:      '/admin/admin-dashboard',
          INSTRUCTOR: '/instructor/instructor-dashboard',
          STUDENT:    '/student/student-dashboard',
          RECRUITER:  '/recruiter/recruiter-dashboard'
        };
        const dest = dashMap[res.role] || '/index';
        this.switchingRoleWithPassword = false;
        this.isSwitchingRole = false;
        // Vider immédiatement les notifs de l'ancien rôle, puis recharger selon le nouveau
        this.notifications = [];
        this.unreadCount = 0;
        this.loadNotifications();
        this.router.navigate([dest]);
      },
      error: (err: any) => {
        this.switchingRoleWithPassword = false;
        this.isSwitchingRole = false;
        this.switchRoleError = err.error?.message || err.error || 'Erreur lors du changement de rôle';
      }
    });
  }

  constructor(
    private common: CommonService,
    private data: DataService,
    public sidebarService: SidebarService,
    private renderer: Renderer2,
    private authService: AuthService,
    private notificationService: NotificationService,
    private wsNotifService: WebSocketNotificationService,
    private router: Router
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
    this.authService.ensureProfileIdentityLoaded();
    this.userName         = localStorage.getItem('fullName') || 'Utilisateur';
    this.userEmail        = localStorage.getItem('email') || '';
    this.userRole         = localStorage.getItem('role') || '';
    this.userAvatarUrl    = this.authService.resolveAvatarUrl(localStorage.getItem('avatarPath'));
    const stored = localStorage.getItem('secondaryRoles');
    try {
      this.secondaryRoles = stored ? JSON.parse(stored) : [];
    } catch { this.secondaryRoles = []; }
    // Règle implicite : INSTRUCTOR peut toujours basculer en STUDENT
    if (this.userRole.includes('INSTRUCTOR') && !this.secondaryRoles.includes('STUDENT')) {
      this.secondaryRoles.push('STUDENT');
    }
    // Écouter les changements de rôle émis depuis n'importe quel composant
    this.authService.currentRole$.subscribe(role => {
      if (role && role !== this.userRole) {
        this.userRole       = role;
        this.userName       = localStorage.getItem('fullName') || this.userName;
        this.userEmail      = localStorage.getItem('email')    || this.userEmail;
        this.userAvatarUrl  = this.authService.resolveAvatarUrl(localStorage.getItem('avatarPath'));
        const sr = localStorage.getItem('secondaryRoles');
        try { this.secondaryRoles = sr ? JSON.parse(sr) : []; } catch { this.secondaryRoles = []; }
      }
    });
    // Écouter les changements de nom (mise à jour profil) — mise à jour en temps réel
    this.authService.currentFullName$.subscribe(name => {
      if (name) this.userName = name;
    });
    this.authService.currentAvatarPath$.subscribe(path => {
      this.userAvatarUrl = this.authService.resolveAvatarUrl(path);
    });
    this.loadNotifications();
    if (this.isRecruiter) this.loadUnreadMessageCount();

    // Démarrer le temps réel sur les layouts back-office
    this.wsNotifService.connect();
    this.wsNotifSub = this.wsNotifService.getNewNotifications$().subscribe((notif) => {
      if (!notif || !this.shouldDisplayNotification(notif)) return;
      this.notifications = [notif, ...this.notifications.filter(n => n.id !== notif.id)].slice(0, 10);
      if (!notif.read) this.unreadCount += 1;
    });

    this.notifInterval = setInterval(() => {
      this.loadNotifications();
      if (this.isRecruiter) this.loadUnreadMessageCount();
    }, 60000);
  }

  ngOnDestroy(): void {
    if (this.notifInterval) clearInterval(this.notifInterval);
    this.wsNotifSub?.unsubscribe();
    this.wsNotifService.disconnect();
  }

  // Types de notifs appartenant à chaque rôle
  private static readonly INSTRUCTOR_NOTIF_TYPES = new Set([
    'COURSE_APPROVED','COURSE_REJECTED','NEW_REVENUE','PAYOUT_PAID','PAYOUT_REJECTED','COURSE_MODIFICATION_APPROVED','COURSE_MODIFICATION_PENDING','COURSE_PROMOTION_UPDATED','COURSE_ARCHIVED_BY_ADMIN','COURSE_UNARCHIVED_BY_ADMIN'
  ]);
  private static readonly STUDENT_NOTIF_TYPES = new Set([
    'PURCHASE_CONFIRMED','CERTIFICATE_ISSUED','CHALLENGE_UNLOCKED'
  ]);

  loadUnreadMessageCount(): void {
    const token = localStorage.getItem('token');
    if (!token) return;
    this.notificationService.getUnreadMessageCount().subscribe({
      next: (count) => { this.unreadMessageCount = count; },
      error: () => {}
    });
  }

  loadNotifications(): void {
    const token = localStorage.getItem('token');
    if (!token) return;
    // Effacer immédiatement avant tout chargement
    this.notifications = [];
    this.unreadCount = 0;
    // Notifications visibles pour Admin, SuperAdmin, Recruiter et Instructor
    if (!this.isAdmin && !this.isSuperAdmin && !this.isRecruiter && !this.isInstructor) return;
    this.notificationService.getMyNotifications().subscribe({
      next: (data) => {
        // Filtrer selon le rôle actif pour éviter les flux mélangés
        const filtered = data.filter((n: NotificationDto) => this.shouldDisplayNotification(n));
        this.notifications = filtered.slice(0, 10);
        this.unreadCount   = filtered.filter(n => !n.read).length;
      },
      error: () => {}
    });
  }

  private shouldDisplayNotification(n: NotificationDto): boolean {
    const t = (n.type || '').toUpperCase();
    if (this.isInstructor) {
      return AdminHeaderComponent.INSTRUCTOR_NOTIF_TYPES.has(t);
    }
    return !AdminHeaderComponent.INSTRUCTOR_NOTIF_TYPES.has(t)
        && !AdminHeaderComponent.STUDENT_NOTIF_TYPES.has(t);
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

  getNotifIconTi(type: string): string {
    switch ((type || '').toUpperCase()) {
      case 'PURCHASE_CONFIRMED':  return 'ti-shopping-cart';
      case 'COURSE_APPROVED':     return 'ti-circle-check';
      case 'COURSE_REJECTED':     return 'ti-circle-x';
      case 'COURSE_ARCHIVED_BY_INSTRUCTOR':   return 'ti-archive';
      case 'COURSE_UNARCHIVED_BY_INSTRUCTOR': return 'ti-arrow-back-up';
      case 'COURSE_ARCHIVED_BY_ADMIN':        return 'ti-archive';
      case 'COURSE_UNARCHIVED_BY_ADMIN':      return 'ti-arrow-back-up';
      case 'CERTIFICATE_ISSUED':  return 'ti-certificate';
      case 'NEW_REVENUE':         return 'ti-currency-dollar';
      case 'COURSE_PROMOTION_UPDATED': return 'ti-ticket';
      case 'PROFILE_SHARED':      return 'ti-user-share';
      case 'NEW_JOB_APPLICATION': return 'ti-briefcase';
      case 'NEW_MESSAGE':         return 'ti-message-circle';
      default:                    return 'ti-bell';
    }
  }

  getNotifIcon(type: string): string {
    switch (type) {
      case 'PURCHASE_CONFIRMED': return 'isax-shopping-cart';
      case 'COURSE_APPROVED':    return 'isax-tick-circle';
      case 'COURSE_REJECTED':    return 'isax-close-circle';
      case 'COURSE_ARCHIVED_BY_INSTRUCTOR':   return 'isax-archive-minus';
      case 'COURSE_UNARCHIVED_BY_INSTRUCTOR': return 'isax-refresh-circle';
      case 'COURSE_ARCHIVED_BY_ADMIN':        return 'isax-archive-minus';
      case 'COURSE_UNARCHIVED_BY_ADMIN':      return 'isax-refresh-circle';
      case 'CERTIFICATE_ISSUED': return 'isax-award';
      case 'NEW_REVENUE':        return 'isax-dollar-circle';
      case 'COURSE_PROMOTION_UPDATED': return 'isax-discount-circle';
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

  onAvatarError(): void {
    this.userAvatarUrl = '';
  }

}
