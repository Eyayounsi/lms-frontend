import { Component } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-3-grid',
  imports: [CommonModule,RouterLink],
  templateUrl: './blog-3-grid.component.html',
  styleUrl: './blog-3-grid.component.scss'
})
export class Blog3GridComponent {
public routes = routes;
}
