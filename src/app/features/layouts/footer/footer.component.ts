import { Component, OnDestroy, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { CommonService } from '../../../shared/service/common/common.service';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { FooterTopContainerComponent } from './footer-top-container/footer-top-container.component';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    imports: [CommonModule,RouterLink,FooterTopContainerComponent]
})
export class FooterComponent implements OnInit, OnDestroy {
  public base = '';
  public routes = routes;
  currentUrl = '';
  private routerSub?: Subscription;

  constructor(
    private common: CommonService,
    private router: Router,
  ) {
    this.common.base.subscribe((res: string) => {
      this.base = res;
    });

    this.currentUrl = this.router.url || '';
    this.routerSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects || event.url || '';
      }
    });
  }

  get showFullFooter(): boolean {
    const isIndex = this.currentUrl === '/index' || this.currentUrl.startsWith('/index?');
    return isIndex;
  }

  ngOnInit(): void {
    Aos.init({
      duration: 1500,
      once: true,
    });
  }

  ngOnDestroy(): void {
    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }
  }
}
