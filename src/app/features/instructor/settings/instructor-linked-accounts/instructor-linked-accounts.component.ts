import { Component } from '@angular/core';
import { routes } from '../../../../app.routes';

@Component({
  selector: 'app-instructor-linked-accounts',
  imports:[],
  templateUrl: './instructor-linked-accounts.component.html',
  styleUrl: './instructor-linked-accounts.component.scss'
})
export class InstructorLinkedAccountsComponent {
public routes = routes;
}
