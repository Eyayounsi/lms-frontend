import {
	Component,
	OnDestroy,
	OnInit,
	Renderer2,
	ViewEncapsulation,
  } from '@angular/core';

  import * as AOS from 'aos';
  import { Router, RouterLink } from '@angular/router';
  import { routes } from '../../../shared/service/routes/routes';
  import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
  import {
	counter,
	favourite,
	swiper,
	tab1,
	tab2,
	tab3,
	tab4,
	tab5,
	tab6,
	tab7,
	trending_course,
  } from '../../../shared/models/model';
import { HomeData } from './components/data';
import { CommonModule } from '@angular/common';
import { CommonService } from '../../../shared/service/common/common.service';
import { FooterComponent } from './components/footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CountUpModule } from 'ngx-countup';
import { MatSelectModule } from '@angular/material/select';

  interface data {
	active?: boolean;
  }

@Component({
  selector: 'app-home5',
  imports: [CommonModule,FooterComponent,RouterLink,CarouselModule,SlickCarouselModule,CountUpModule,MatSelectModule],
  templateUrl: './home5.component.html',
  styleUrl: './home5.component.scss',
  encapsulation: ViewEncapsulation.None,
})

export class Home5Component implements OnInit, OnDestroy {

selected = '1';
  public counter: counter[] = [];
  public favourite: favourite[] = [];
  public tab1: tab1[] = [];
  public tab2: tab2[] = [];
  public tab3: tab3[] = [];
  public tab4: tab4[] = [];
  public tab5: tab5[] = [];
  public tab6: tab6[] = [];
  public tab7: tab7[] = [];
  public trending_course: trending_course[] = [];
  public swiper: swiper[] = [];
  public routes = routes;
  public base = '';
  public page = '';
  public last = '';

  constructor(
	private common: CommonService,
	public router: Router,
	private data: HomeData,
	private renderer: Renderer2
  ) {
	this.counter = this.data.counter;
	this.favourite = this.data.favourite;
	this.tab1 = this.data.tab1;
	this.tab2 = this.data.tab2;
	this.tab3 = this.data.tab3;
	this.tab4 = this.data.tab4;
	this.tab5 = this.data.tab5;
	this.tab6 = this.data.tab6;
	this.tab7 = this.data.tab7;
	this.trending_course = this.data.trending_course;
	this.swiper = this.data.swiper;
	this.common.base.subscribe((base: string) => {
	  this.base = base;
	});
	this.common.page.subscribe((page: string) => {
	  this.page = page;
	});
	this.common.last.subscribe((last: string) => {
	  this.last = last;
	});
	if (this.base == 'home-three') {
	  this.renderer.addClass(document.body, 'select-home-three');
	}
  }
  ngOnInit(): void {
	AOS.init({
	  duration: 1200,
	  once: true,
	});
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false, // Equivalent to Swiper's pagination
    nav: true, // Equivalent to Swiper's navigation
    navText: ['<div class="testimonial-next-pre"><i class="fas fa-arrow-left"></i></div>', '<div class="testimonial-next-pre"><i class="fas fa-arrow-right"></i></div>'], // Custom navigation icons
    items: 1, // Equivalent to slidesPerView: 1
    margin: 10, // Equivalent to spaceBetween: 10
    center: true, // For coverflow-like effect
    stagePadding: 0,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 },
    },
  };

  testimonials = [
    {
      content: 'I’ve become more organized, confident, and focused thanks to my life coach. They helped me set realistic goals and break them down into actionable steps. I’ve accomplished so much already!',
      rating: 4.5,
      user: { name: 'Jeff J. Sparrow', role: 'Designer', image: 'assets/img/user/user-01.jpg' },
    },
    {
      content: 'As a writer, I’ve learned so much about structure and storytelling from my mentor. Their feedback helped me tighten up my writing and make my characters more compelling.',
      rating: 4.5,
      user: { name: 'Martin Harn', role: 'Docker Development', image: 'assets/img/user/user-02.jpg' },
    },
    {
      content: 'I often felt like the mentor’s answers were too detailed, which made it hard for me to keep up. Sometimes, a simpler explanation would have helped me understand things faster.',
      rating: 4.8,
      user: { name: 'Noah Aarons', role: 'Business Man', image: 'assets/img/user/user-03.jpg' },
    },
  ];
  public favouriteCarousel = {
	dots: true,
			infinite: false,
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 5,
			arrows: false,
			responsive: [
				{
				  breakpoint: 1399,
				  settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					infinite: true,
					dots: true
				  }
				},
			  {
				breakpoint: 1300,
				settings: {
				  slidesToShow: 3,
				  slidesToScroll: 3,
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
			  }
			]
  };
  public trendingcrouses = {
	dots: true,
	infinite: false,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 4,
	arrows: false,
	responsive: [
	  {
		breakpoint: 1300,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  infinite: true,
		  dots: true
		}
	  },
	  {
		breakpoint: 992,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2
		}
	  },
	  {
		breakpoint: 768,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	]
  };
  public brandoption2: OwlOptions = {
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
//   config1: SwiperOptions = {
// 	effect: "coverflow",
// 	loop: false,
// 	grabCursor: true,
// 	centeredSlidesBounds:true,
// 	centeredSlides: true,
// 	slidesPerView: "auto",
// 	initialSlide: 2,
// 	navigation: {
// 		prevEl: '.slide-prev-btn',
// 		nextEl: '.slide-next-btn',
// 	},
// 	coverflowEffect: {
// 	rotate: 0,
// 	stretch: 0,
// 	depth: 100,
// 	modifier: 10,
// 	slideShadows: true
// 	},
// 	pagination: {
// 	el: ".swiper-pagination",
// 	clickable: true
// 	}
//   }
  directPath() {
	this.router.navigate(['/pages/course/course-list']);
  }
  toggleClass(slide: data) {
	slide.active = !slide.active;
  }
  ngOnDestroy(): void {
	this.renderer.removeClass(document.body, 'select-home-three');
  }
//   config: SwiperOptions = {
// 	effect: 'coverflow',
// 	direction: 'horizontal',
// 	loop: false,
// 	grabCursor: true,
// 	centeredSlides: true,
// 	slidesPerView: 'auto',
// 	initialSlide: 2,
// 	// spaceBetween: 100,
// 	speed: 400,
// 	navigation: {
// 	  prevEl: '.slide-prev-btn',
// 	  nextEl: '.slide-next-btn',
// 	},
// 	pagination: {
// 	  clickable: true,
// 	  el: '.swiper-pagination',
// 	},
// 	// scrollbar: { draggable: true },
// 	coverflowEffect: {
// 	  rotate: 0,
// 	  stretch: 0,
// 	  depth: 100,
// 	  modifier: 10,
// 	  slideShadows: true,
// 	},
//   };
  onSubmit():void{
	this.router.navigate([routes.courseList]);
  }
}
