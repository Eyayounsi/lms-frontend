import { Component, OnInit } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import { LightGallery } from 'lightgallery/lightgallery';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { LightgalleryModule } from 'lightgallery/angular';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-course-watch',
  imports : [CommonModule,LightgalleryModule],
  templateUrl: './course-watch.component.html',
  styleUrl: './course-watch.component.scss'
})
export class CourseWatchComponent {
 routes=routes;
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
  async ngOnInit() {
  const AOS = (await import('aos')).default;
  AOS.init({ duration: 1200, once: true });
}

}
