import { Component } from '@angular/core';
import { blogMasonry } from '../../../shared/models/model';
import { DataService } from '../../../shared/service/data/data.service';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-blog-masonry',
    templateUrl: './blog-masonry.component.html',
    styleUrls: ['./blog-masonry.component.scss'],
    imports: [CommonModule,RouterLink]
})
export class BlogMasonryComponent {
  public blogMasonry : blogMasonry[] = [];
  public routes = routes;



}
