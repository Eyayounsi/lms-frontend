import { Component } from '@angular/core';
import { routes } from '../../shared/service/routes/routes';
import { CommonService } from '../../shared/service/common/common.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CapitalizeWordsPipe } from '../../shared/pipe/capitalize-words.pipe';
import { FooterComponent } from '../layouts/footer/footer.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports : [CommonModule, RouterOutlet, RouterLink, CapitalizeWordsPipe, FooterComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
routes=routes;
base = '';
page = '';
last = '';
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
