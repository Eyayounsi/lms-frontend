import { Component } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-instructor-details',
  imports: [CommonModule,RouterLink,SlickCarouselModule],
  templateUrl: './instructor-details.component.html',
  styleUrl: './instructor-details.component.scss'
})
export class InstructorDetailsComponent {
routes=routes
courseCarousel={
  infinite: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			autoplay: true,
			responsive: [
				{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					infinite: true,
					dots: false
				}
				},
			]
}
}
