import { Component } from '@angular/core';
import { routes } from '../../../../shared/service/routes/routes';

@Component({
    selector: 'app-instructor-setting-notifications',
    templateUrl: './instructor-setting-notifications.component.html',
    styleUrl: './instructor-setting-notifications.component.scss',
    imports : []
})
export class InstructorSettingNotificationsComponent {
  public routes = routes;
}
