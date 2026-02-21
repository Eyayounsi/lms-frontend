import { Component } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-2-grid',
  imports: [CommonModule,RouterLink],
  templateUrl: './blog-2-grid.component.html',
  styleUrl: './blog-2-grid.component.scss'
})
export class Blog2GridComponent {
public routes = routes;
}
