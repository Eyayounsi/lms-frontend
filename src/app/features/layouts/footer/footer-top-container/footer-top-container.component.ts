import { Component } from '@angular/core';
import { routes } from '../../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-footer-top-container',
    templateUrl: './footer-top-container.component.html',
    styleUrls: ['./footer-top-container.component.scss'],
    imports: [CommonModule,RouterLink]
})
export class FooterTopContainerComponent  {
  public routes = routes;


}
