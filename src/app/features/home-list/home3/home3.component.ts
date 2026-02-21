import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import * as AOS from 'aos';
import {
  topCategories,
  trendingCourses,
  featuredInstructor,
  latestBlogs,
  featuredCourses,
  career,
  universitiesCompanies,
  testimonial,
} from '../../../shared/models/model';
import { CommonModule } from '@angular/common';
import { routes } from '../../../shared/service/routes/routes';
import { FooterComponent } from './components/footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CountUpModule } from 'ngx-countup';
import { MatSelectModule } from '@angular/material/select';
interface data {
  active?: boolean;
}
@Component({
    selector: 'app-home3',
    templateUrl: './home3.component.html',
    styleUrls: ['./home3.component.scss'],
    imports: [CommonModule,FooterComponent,RouterLink,CarouselModule,SlickCarouselModule,CountUpModule,MatSelectModule],
})
export class Home3Component implements OnInit {
  public routes = routes;
  public topCategories: topCategories[] = [];
  public trendingCourses: trendingCourses[] = [];
  public featuredInstructor: featuredInstructor[] = [];
  public latestBlogs: latestBlogs[] = [];
  public featuredCourses: featuredCourses[] = [];
  public career: career[] = [];
  public universitiesCompanies: universitiesCompanies[] = [];
  public testimonial: testimonial[] = [];
  isSelected:boolean[]=[false];
  selected = '1';
  public topCategoriesOwlOptions = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
        slidesToShow: 2,
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
  public trendingcrouse = {
    dots: true,
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: false,
				responsive: [
					{
					  breakpoint: 1024,
					  settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true,
						dots: true
					  }
					},
					{
					  breakpoint: 768,
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
  public instructorCrouse = {
    dots: true,
				infinite: true,
				slidesToShow: 4,
				slidesToScroll: 1,arrows: false,
				responsive: [
					{
					  breakpoint: 1024,
					  settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true,
						dots: true
					  }
					},
					{
					  breakpoint: 768,
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
  public brandCarousel: OwlOptions = {
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
          	1040: {
            	items: 6,
				dots: false,
          		}
    		}
  };
  public testimonials = {
    lazyLoad: 'ondemand',
    infinite: true,
  };
  public brandSlide2 = {
    lazyLoad: 'ondemand',
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: false,
    speed: 3000,
    autoplaySpeed: 1800,
    arrows: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        }
      },
      {
        breakpoint: 767,
        settings: {
        slidesToShow: 5,
        slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1
        }
      }
      ]
  };
  public slideConfig = {
    lazyLoad: 'ondemand',
    infinite: true,
  };

  constructor(public router: Router) {

  }

  ngOnInit() {
    AOS.init({ duration: 1200, once: true });
  }
  toggleClass(slide: data) {
    slide.active = !slide.active;
  }
  directPath() {
    this.router.navigate(['/pages/course/course-list']);
  }
  iconSelect(index:number) : void{
    this.isSelected[index]=!this.isSelected[index]
    }
    onSubmit():void{
      this.router.navigate([routes.courseList]);
      }
}
