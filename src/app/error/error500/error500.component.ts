import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { routes } from '../../shared/service/routes/routes';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-error500',
    templateUrl: './error500.component.html',
    styleUrls: ['./error500.component.scss'],
    imports: [CommonModule,RouterLink]
})
export class Error500Component  {
  public routes = routes;

 

}
