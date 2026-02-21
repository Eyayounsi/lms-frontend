import { Component } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-term-condition',
    templateUrl: './term-condition.component.html',
    styleUrls: ['./term-condition.component.scss'],
    imports: [CommonModule]
})
export class TermConditionComponent  {
  public routes = routes;

 

}
