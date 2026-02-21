import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { CommonService } from '../../../shared/service/common/common.service';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FooterTopContainerComponent } from './footer-top-container/footer-top-container.component';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    imports: [CommonModule,RouterLink,FooterTopContainerComponent]
})
export class FooterComponent implements OnInit {
  public base = '';
  public routes = routes;
  constructor(private common: CommonService) {
    this.common.base.subscribe((res: string) => {
      this.base = res;
    });
  }
  ngOnInit(): void {
    Aos.init({
      duration: 1500,
      once: true,
    });
  }
}
