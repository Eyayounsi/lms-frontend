import { Component } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-details-right-sidebar',
  imports: [CommonModule,RouterLink],
  templateUrl: './blog-details-right-sidebar.component.html',
  styleUrl: './blog-details-right-sidebar.component.scss'
})
export class BlogDetailsRightSidebarComponent {
public routes = routes;
}
