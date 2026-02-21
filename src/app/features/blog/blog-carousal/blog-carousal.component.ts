import { Component } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-blog-carousal',
  imports: [CommonModule,RouterLink,SlickCarouselModule],
  templateUrl: './blog-carousal.component.html',
  styleUrl: './blog-carousal.component.scss'
})
export class BlogCarousalComponent {
public routes = routes;
public topCategoriesOwlOptions = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1
      }
    }
    ]
};
}
