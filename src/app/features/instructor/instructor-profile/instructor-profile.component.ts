import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { instructorProfile, instructorProfileEducation, instructorProfileExperience, instructorProfileCourses, instructorProfileReviews, instructorProfileOverview, instructorProfileContactDetails } from '../../../shared/models/model';
import { DataService } from '../../../shared/service/data/data.service';
import { routes } from '../../../shared/service/routes/routes';
interface data {
  active?:boolean;
}
@Component({
    selector: 'app-instructor-profile',
    templateUrl: './instructor-profile.component.html',
    styleUrls: ['./instructor-profile.component.scss'],
    imports:[CommonModule]
})
export class InstructorProfileComponent  {
  public routes = routes;

  toggleClass(data: data) {
    data.active = !data.active;
  }
}
