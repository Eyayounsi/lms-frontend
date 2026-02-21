import { Component } from '@angular/core';
import { routes } from '../../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-student-linked-accounts',
    templateUrl: './student-linked-accounts.component.html',
    styleUrl: './student-linked-accounts.component.scss',
    imports : [CommonModule]
})
export class StudentLinkedAccountsComponent {
  public routes = routes;
}
