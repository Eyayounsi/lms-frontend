import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '../../../../shared/service/routes/routes';

@Component({
    selector: 'app-instructor-setting-withdraw',
    templateUrl: './instructor-setting-withdraw.component.html',
    styleUrl: './instructor-setting-withdraw.component.scss',
    imports : [RouterLink]
})
export class InstructorSettingWithdrawComponent {
  public routes = routes;
}
