import { Component} from '@angular/core';
import { blogGrid, blogGridRecentPosts } from '../../../shared/models/model';
import { DataService } from '../../../shared/service/data/data.service';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-blog-grid',
    templateUrl: './blog-grid.component.html',
    styleUrls: ['./blog-grid.component.scss'],
    imports: [CommonModule,RouterLink]
})
export class BlogGridComponent  {
  public blogGrid : blogGrid[] = [];
  public routes = routes;
  public blogGridRecentPosts : blogGridRecentPosts[] = [];



 
}
