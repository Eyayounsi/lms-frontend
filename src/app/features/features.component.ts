import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { NavigationStart, Router, Event as RouterEvent, RouterModule } from '@angular/router';
import { CommonService } from '../shared/service/common/common.service';
import { SidebarService } from '../shared/service/sidebar/sidebar.service';
import { url } from '../shared/models/model';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layouts/header/header.component';
import { AdminHeaderComponent } from './layouts/admin-header/admin-header.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BlockedService } from '../shared/service/auth/blocked.service';
import { AuthService } from '../shared/service/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-features',
  imports: [CommonModule,RouterModule,HeaderComponent,AdminHeaderComponent,SlickCarouselModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent implements OnInit, OnDestroy {
  showMiniSidebar = false;
  base = '';
  page = '';
  last = '';
  public isuserHeader!: boolean;
  public themeMode: string = '';
  public darkTheme = false;
  public isAdminHeader!: boolean;
  public showDark = false;
  public mainFooter!: boolean;
  public routeStatus!: string;
  public routeStatusSub!: string;
  renderer: any;
  showBackToTop: boolean = false;

  // Modal compte bloqué
  blockedMessage: string | null = null;
  private blockedSub!: Subscription;
  private pingInterval: any = null;
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // Show the button after scrolling 200px down
    this.showBackToTop = window.scrollY > 200;

  }

  // Scroll to the top of the page
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
  }

  constructor(
    private Router: Router,
    private sidebar: SidebarService,
    private common: CommonService,
    public sidebarService: SidebarService,
    private blockedService: BlockedService,
    private authService: AuthService,
  ) {
    this.common.base.subscribe((res: string) => {
      this.base = res;
      this.scrollToTop();
    });
    this.common.page.subscribe((res: string) => {
      this.page = res;
      this.scrollToTop();
    });
    this.common.last.subscribe((res: string) => {
      this.last = res;
    });

    this.Router.events.subscribe((data: RouterEvent) => {
      if (data instanceof NavigationStart) {
        this.setRouting(data);
      }
    });

    this.setRouting(this.Router);

    this.common.isAdminHeader.subscribe((res: boolean) => {
      this.isAdminHeader = res;
    });
    this.common.isuserHeader.subscribe((res: boolean) => {
      this.isuserHeader = res;
    });
    this.common.mainFooter.subscribe((res: boolean) => {
      this.mainFooter = res;
    });
    this.sidebar.toogleSidebar.subscribe((res: string) => {
      if (res == 'true') {
        this.showMiniSidebar = true;
      } else {
        this.showMiniSidebar = false;
      }
    });

    
  }

  private setRouting(data: url): void {
    this.routeStatus = data.url.split('/')[1];
    this.routeStatusSub = data.url.split('/')[2];

    this.common.base.next(data.url.split('/')[1]);
    this.common.page.next(data.url.split('/')[2]);
    this.common.last.next(data.url.split('/')[3]);

    if (
      this.routeStatus == 'index' ||
      this.routeStatus == 'index-two' ||
      this.routeStatus == 'index-three' ||
      this.routeStatus == 'index-four'||
      this.routeStatus == 'index-five'||
      this.routeStatus == 'index-six'
    ) {
      this.common.isuserHeader.next(true);
      this.common.isAdminHeader.next(false);
      this.common.mainFooter.next(false);
    } else {
      this.common.mainFooter.next(true);
    }
    if (
      this.routeStatus == 'instructor' ||
      this.routeStatus == 'student' ||
      this.routeStatus == 'admin' ||
      this.routeStatus == 'recruiter'
    ) {
      this.common.isuserHeader.next(false);
      this.common.isAdminHeader.next(true);
    }else{
      this.common.isuserHeader.next(true);
      this.common.isAdminHeader.next(false);
    }
   
  }
  ngOnInit(): void {
    this.blockedSub = this.blockedService.blocked$.subscribe(msg => {
      this.blockedMessage = msg;
    });
    // Vérification périodique toutes les 30 secondes pour détecter un blocage en temps réel
    this.pingInterval = setInterval(() => {
      if (this.authService.isLoggedIn()) {
        this.authService.ping().subscribe({
          error: () => {} // 423 est géré par blockedInterceptor automatiquement
        });
      }
    }, 30000);
  }

  onBlockedLogout(): void {
    // Sauvegarder le message pour l'afficher sur la page de login
    if (this.blockedMessage) {
      localStorage.setItem('blockedMessage', this.blockedMessage);
    }
    this.blockedService.clear();
    this.blockedMessage = null;
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.sidebarService.changeThemeColor('light-mode');
    if (this.blockedSub) this.blockedSub.unsubscribe();
    if (this.pingInterval) clearInterval(this.pingInterval);
  }
}
