import { Component } from '@angular/core';
import { routes } from '../../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-student-notifications',
    templateUrl: './student-notifications.component.html',
    styleUrl: './student-notifications.component.scss',
    imports : [CommonModule]
})
export class StudentNotificationsComponent {
  public routes = routes;
}
