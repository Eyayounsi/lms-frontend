import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '../../../shared/service/routes/routes';

@Component({
  selector: 'app-students-grid',
  imports : [RouterLink],
  templateUrl: './students-grid.component.html',
  styleUrl: './students-grid.component.scss'
})
export class StudentsGridComponent {
routes =routes
}
