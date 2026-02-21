import { Component } from '@angular/core';
import { NavigationStart, Router, Event as RouterEvent, RouterModule } from '@angular/router';
import { CommonService } from '../../shared/service/common/common.service';
import { routes } from '../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { CapitalizeWordsPipe } from '../../shared/pipe/capitalize-words.pipe';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  imports: [CommonModule,RouterModule,CapitalizeWordsPipe],
})
export class BlogComponent {
  routes = routes;
  page = '';
  constructor(private common: CommonService) {
    this.common.page.subscribe((res: string) => {
      this.page = res;
    });
  }
}
