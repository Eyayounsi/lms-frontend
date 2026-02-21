import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import * as AOS from 'aos';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

import { routes } from '../../../shared/service/routes/routes';
import {
  universitiesCompanies,
  category,
  Featured_Courses,
  trending_Courses,
  feature_instructors,
  real_reviews,
  blog,
} from '../../../shared/models/model';
import { HomeData } from './components/data';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CountUpModule } from 'ngx-countup';
import { MatSelectModule } from '@angular/material/select';
interface data {
  favourite: boolean;
  active?: boolean;
}
@Component({
    selector: 'app-home4',
    templateUrl: './home4.component.html',
    styleUrls: ['./home4.component.scss'],
    imports: [CommonModule,FooterComponent,RouterLink,CarouselModule,SlickCarouselModule,CountUpModule,MatSelectModule],
})
export class Home4Component implements OnInit {
public routes = routes;
  selected = '1';
  public universitiesCompanies: universitiesCompanies[] = [];
  public Category: category[] = [];
  public Featured_Courses: Featured_Courses[] = [];
  public trending_Courses: trending_Courses[] = [];
  public feature_instructors: feature_instructors[] = [];
  public real_reviews: real_reviews[] = [];
  public blog: blog[] = [];
  constructor(
    public router: Router,
    public data: HomeData
  ) {

    this.Category = this.data.Category;
    this.Featured_Courses = this.data.Featured_Courses;
    this.trending_Courses = this.data.trending_Courses;
    this.feature_instructors = this.data.feature_instructors;
    this.real_reviews = this.data.real_reviews;
    this.blog = this.data.blog;
  }
  ngOnInit(): void {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }
  realReviews:OwlOptions = {
    loop:true,
    margin:15,
    dots: false,
    nav:true,
    navText: [ '<i class="fa-sharp fa-solid fa-arrow-left-long"></i>', '<i class="fa-sharp fa-solid fa-arrow-right-long"></i>' ], 
    responsive:{
      0:{
        items:1
      },
      500:{
        items:1
      },
      768:{
        items:1
      },
      1000:{
        items:1
      },
      1300:{
        items:1
      }
    }
  };
  public leadGroup: OwlOptions = {
    margin: 24,
    nav : false,
    dots: false,
    loop: true,
    autoplay:false,
    autoplaySpeed: 2000,
      responsive: {
          0: {
            items: 2,
      nav : false,
      dots: false,
        },
        768 : {
            items: 3,
      nav : false,
      dots: false,
        },
          1170: {
            items: 6,
      dots: false,
            }
      }
  };
  toggleClass(slide: data) {
    slide.favourite = !slide.favourite;
  }
  directPath() {
    this.router.navigate(['/pages/course/course-list']);
  }
  onSubmit():void{
    this.router.navigate([routes.courseList]);
    }
}
