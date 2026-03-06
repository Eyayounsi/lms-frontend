import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from '../../../shared/service/data/data.service';
import { CourseService } from '../../../shared/service/course/course.service';
import * as AOS from 'aos';
import { routes } from '../../../shared/service/routes/routes';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import { LightGallery } from 'lightgallery/lightgallery';
import SwiperCore from 'swiper'
import {
	EffectCards,
	Mousewheel
  } from 'swiper/modules';

  SwiperCore.use([EffectCards, Mousewheel]);
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { LightgalleryModule } from 'lightgallery/angular';
import { SwiperModule } from 'ngx-swiper-wrapper';
interface data {
  active?: boolean;
  class?:string;
}
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [CommonModule, FooterComponent, RouterLink, SlickCarouselModule, LightgalleryModule, FormsModule],
    encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  public routes = routes;
  isSelected:boolean[]=[false];
  searchTerm = '';
  categories: any[] = [];
  selectedCategoryName = 'Sélectionner';
  featuredCourses: any[] = [];
  topInstructors: any[] = [];
  bannerCourses: any[] = [];

  constructor(private DataService: DataService, public router: Router, private courseService: CourseService) {}

  onSubmit(): void {
    const q = this.searchTerm.trim();
    if (q) {
      this.router.navigate(['/courses/course-list-public'], { queryParams: { search: q } });
    } else {
      this.router.navigate(['/courses/course-list-public']);
    }
  }

  selectCategory(catId: number, catName: string): void {
    this.selectedCategoryName = catName;
    this.router.navigate(['/courses/course-list-public'], { queryParams: { categoryId: catId } });
  }
//   config: SwiperOptions = {
//     effect: 'cards',
//     loop: false,
//     grabCursor: true,
//     slidesPerView: 'auto',
//   };
  public bannercard: any[] = [];

  public slideConfig ={
    lazyLoad: 'ondemand',
				slidesToShow: 7,
				slidesToScroll: 1,
				autoplay: true,
				speed: 3000,
				autoplaySpeed: 1800,
				arrows: false,
				responsive: [
					{
						breakpoint: 1400,
						settings: {
						slidesToShow: 6,
						infinite: true,
						dots: false
						}
					},
					{
						breakpoint: 1200,
						settings: {
						slidesToShow: 5,
						}
					},
					{
						breakpoint: 992,
						settings: {
						slidesToShow: 3,
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2,
						}
						}
				]
   }
  public topCourseSlider={
    infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
      infinite: true,
      dots: false
    }
    },
    {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
    }
    },
  ]
  }
public featureCourseSlider2 ={
  dots: false,
				infinite: true,
				speed: 300,
				slidesToShow: 4,
				slidesToScroll: 1,
				responsive: [
				  {
					breakpoint: 1300,
					settings: {
					  slidesToShow: 3,
					  slidesToScroll: 1,
					  infinite: true,
					  dots: true
					}
				  },
				  {
					breakpoint: 992,
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
				  }
				]
}
public brandSlide={
  dots: false,
				infinite: true,
				speed: 2000,
				slidesToShow: 6,
				slidesToScroll: 1,
				autoplay: true,
				arrows: false,
				responsive: [
				  {
					breakpoint: 1300,
					settings: {
					  slidesToShow: 5,
					  slidesToScroll: 1,
					  infinite: true,
					  dots: true
					}
				  },
				  {
					breakpoint: 992,
					settings: {
					  slidesToShow: 4,
					  slidesToScroll: 1,
					  infinite: true,
					  dots: true
					}
				  },
				  {
					breakpoint: 768,
					settings: {
					  slidesToShow: 2,
					  slidesToScroll: 1
					}
				  }
				]
}
public instructorSlider={
  infinite: true,
				slidesToShow: 4,
				slidesToScroll: 4,
				responsive: [
					{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: false
					}
					},
					{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
					},
					{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScrol:1
          }
        }
        ]
}
public testimonialSlider={
  infinite: true,
				slidesToShow: 3,
				slidesToScroll: 3,
				responsive: [
					{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						infinite: true,
						dots: false
					}
					},
					{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
					}
					},
				]
}
  settings = {
    counter: false,
    plugins: [lgZoom, lgVideo],
  };
  private lightGallery!: LightGallery;
  private needRefresh = false;
  ngAfterViewChecked(): void {
    if (this.needRefresh) {
      this.lightGallery.refresh();
      this.needRefresh = false;
    }
  }
  onInit = (detail: { instance: LightGallery }): void => {
    this.lightGallery = detail.instance;

  };
  ngOnInit() {
    AOS.init({ duration: 1200, once: true });
    this.courseService.getCategories().subscribe({
      next: (cats) => { this.categories = cats; },
      error: () => {}
    });
    this.courseService.getPublishedCourses().subscribe({
      next: (courses) => {
        // Featured courses (up to 8)
        this.featuredCourses = courses.slice(0, 8);
        // Banner courses (up to 3)
        this.bannerCourses = courses.slice(0, 3);
        // Top instructors derived from courses
        const map = new Map<number, any>();
        for (const c of courses) {
          if (!c.instructorId) continue;
          if (!map.has(c.instructorId)) {
            map.set(c.instructorId, {
              id: c.instructorId,
              name: c.instructorName || 'Instructeur',
              avatar: c.instructorAvatar,
              totalRating: 0,
              ratingCount: 0
            });
          }
          const inst = map.get(c.instructorId)!;
          if (c.averageRating) { inst.totalRating += c.averageRating; inst.ratingCount++; }
        }
        this.topInstructors = Array.from(map.values()).map(i => ({
          ...i,
          avgRating: i.ratingCount > 0 ? (i.totalRating / i.ratingCount).toFixed(1) : null
        })).slice(0, 8);
      },
      error: () => {}
    });
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

  getImageUrl(path: string): string {
    if (!path) return 'assets/img/course/course-01.jpg';
    return `http://localhost:8081/${path}`;
  }

  getAvatarUrl(path: string): string {
    if (!path) return 'assets/img/avatar/avatar10.jpg';
    return `http://localhost:8081/${path}`;
  }

  formatPrice(course: any): string {
    const price = +(course.effectivePrice ?? course.price ?? 0);
    return price === 0 ? 'Gratuit' : price.toFixed(2) + ' €';
  }

  goToCourseDetail(courseId: number): void {
    this.router.navigate(['/courses/course-details-2'], { queryParams: { courseId } });
  }
}
