import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationStart, Router, RouterEvent, RouterModule } from '@angular/router';
import { CommonService } from '../../shared/service/common/common.service';
import { routes } from '../../shared/service/routes/routes';
import { CapitalizeWordsPipe } from '../../shared/pipe/capitalize-words.pipe';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss'],
    imports : [CommonModule,RouterModule,CapitalizeWordsPipe]
})
export class PagesComponent  {
  last = '';
public routes = routes
page='';
base='';

  constructor(
      private common: CommonService,
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
  
    }
}
