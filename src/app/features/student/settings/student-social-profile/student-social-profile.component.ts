import { Component } from '@angular/core';
import { routes } from '../../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-student-social-profile',
    templateUrl: './student-social-profile.component.html',
    styleUrl: './student-social-profile.component.scss',
    imports : [CommonModule]
})
export class StudentSocialProfileComponent {
  public routes = routes;
}
