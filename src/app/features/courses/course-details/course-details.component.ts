import { Component, OnInit } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import { LightGallery } from 'lightgallery/lightgallery';
import { routes } from '../../../shared/service/routes/routes';
import { resolveCourseImage } from '../../../shared/utils/course-image.util';
import Aos from 'aos';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { LightgalleryModule } from 'lightgallery/angular';
import { CourseService } from '../../../shared/service/course/course.service';
@Component({
  selector: 'app-course-details',
  imports : [CommonModule,RouterLink,LightgalleryModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss'
})
export class CourseDetailsComponent implements OnInit {
  routes=routes;
  settings = {
    counter: false,
    plugins: [lgZoom, lgVideo],
  };
  private lightGallery!: LightGallery;
  private needRefresh = false;
  course: any = null;

  ngAfterViewChecked(): void {
    if (this.needRefresh) {
      this.lightGallery.refresh();
      this.needRefresh = false;
    }
  }
  onInit = (detail: { instance: LightGallery }): void => {
    this.lightGallery = detail.instance;
  };

  get hasIntroVideo(): boolean {
    return !!(this.course?.introVideo && this.course.introVideo.trim().length > 0);
  }

  get introVideoUrl(): string {
    if (!this.course?.introVideo) return '';
    let url = this.course.introVideo.trim();
    if (url.includes('youtube.com/watch')) {
      try {
        const vidId = new URL(url).searchParams.get('v');
        if (vidId) url = `https://www.youtube.com/embed/${vidId}`;
      } catch {}
    } else if (url.includes('youtu.be/')) {
      const parts = url.split('youtu.be/')[1];
      if (parts) {
        const vidId = parts.split('?')[0];
        if (vidId) url = `https://www.youtube.com/embed/${vidId}`;
      }
    }
    return url;
  }

  private hasCourseCover(): boolean {
    return !!this.course?.coverImage;
  }

  getCourseCoverImage(): string {
    return resolveCourseImage(this.course?.coverImage, this.course?.id);
  }

  onCourseCoverError(evt: Event): void {
    const img = evt.target as HTMLImageElement;
    img.style.display = 'none';
  }

   ngOnInit() {
       Aos.init({ duration: 1200, once: true });
     }
}