import { Component, OnInit } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ViewEncapsulation } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-about-us',
  imports: [CommonModule, RouterLink, SlickCarouselModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AboutUsComponent implements OnInit {
  routes = routes;

  ngOnInit(): void {
    AOS.init({ duration: 1000, once: true });
  }

  instructorSlider = {
    lazyLoad: 'ondemand',
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1800,
    arrows: false,
    responsive: [
      { breakpoint: 1400, settings: { slidesToShow: 6, infinite: true, dots: false } },
      { breakpoint: 1200, settings: { slidesToShow: 5 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } }
    ]
  };

  testimonialSlider = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2, infinite: true, dots: false } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };
}