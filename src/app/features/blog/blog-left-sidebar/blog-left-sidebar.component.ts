import { Component } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-left-sidebar',
  imports: [CommonModule,RouterLink],
  templateUrl: './blog-left-sidebar.component.html',
  styleUrl: './blog-left-sidebar.component.scss'
})
export class BlogLeftSidebarComponent {
public routes = routes;
}
