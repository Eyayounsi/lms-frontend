import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { studentProfileContactDetails, studentProfileCourses, studentProfileEducation, studentProfileExperience, studentProfileReviews } from '../../../shared/models/model';
import { routes } from '../../../shared/service/routes/routes';

@Component({
    selector: 'app-student-profile',
    templateUrl: './student-profile.component.html',
    styleUrls: ['./student-profile.component.scss'],
    imports : [CommonModule]
})
export class StudentProfileComponent  {
  public studentProfileEducation: studentProfileEducation[] = [];
  public studentProfileExperience: studentProfileExperience[] = [];
  public studentProfileCourses: studentProfileCourses [] = [];
  public studentProfileReviews: studentProfileReviews[] = [];
  public routes = routes;
  public studentProfileContactDetails: studentProfileContactDetails [] = [];




}
