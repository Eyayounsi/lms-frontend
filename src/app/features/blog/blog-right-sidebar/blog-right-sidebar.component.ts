import { Component } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-right-sidebar',
  imports: [CommonModule,RouterLink],
  templateUrl: './blog-right-sidebar.component.html',
  styleUrl: './blog-right-sidebar.component.scss'
})
export class BlogRightSidebarComponent {
public routes = routes;
}
