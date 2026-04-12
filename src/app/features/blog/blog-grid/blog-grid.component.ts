import { Component, OnInit } from '@angular/core';
import { blogGrid, blogGridRecentPosts } from '../../../shared/models/model';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-blog-grid',
    templateUrl: './blog-grid.component.html',
    styleUrls: ['./blog-grid.component.scss'],
    imports: [CommonModule, RouterLink]
})
export class BlogGridComponent implements OnInit {
  public blogGrid: blogGrid[] = [];
  public routes = routes;
  public blogGridRecentPosts: blogGridRecentPosts[] = [];
  public dynamicPosts: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>(`${environment.apiUrl}/public/blog/published`).subscribe({
      next: (posts) => { this.dynamicPosts = posts; },
      error: () => { this.dynamicPosts = []; }
    });
  }
}
