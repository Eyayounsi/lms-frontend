import { Component } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-details-left-sidebar',
  imports: [CommonModule,RouterLink],
  templateUrl: './blog-details-left-sidebar.component.html',
  styleUrl: './blog-details-left-sidebar.component.scss'
})
export class BlogDetailsLeftSidebarComponent {
public routes = routes;
}
