import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '../../../shared/service/routes/routes';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-students-details',
  imports : [RouterLink,CommonModule,SlickCarouselModule],
  templateUrl: './students-details.component.html',
  styleUrl: './students-details.component.scss'
})
export class StudentsDetailsComponent {
routes=routes 
public courseCarousel={
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
