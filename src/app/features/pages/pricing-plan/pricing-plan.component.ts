import { Component} from '@angular/core';
import { pricingPlan } from '../../../shared/models/model';
import { DataService } from '../../../shared/service/data/data.service';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-pricing-plan',
    templateUrl: './pricing-plan.component.html',
    styleUrls: ['./pricing-plan.component.scss'],
    imports: [CommonModule,RouterLink]
})
export class PricingPlanComponent  {
  public pricingPlan : pricingPlan[] = [];
  public routes = routes;




}
