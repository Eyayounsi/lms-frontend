import { Component } from '@angular/core';
import { notificationsToday, notificationsYesterday } from '../../../shared/models/model';
import { DataService } from '../../../shared/service/data/data.service';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.scss'],
    imports: [CommonModule,RouterLink]
})
export class NotificationsComponent {
  public routes = routes;
  public notificationsToday : notificationsToday[] = [];
  public notificationsYesterday : notificationsYesterday[] = [];



  }


