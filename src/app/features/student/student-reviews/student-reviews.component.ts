import { Component } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-student-reviews',
    templateUrl: './student-reviews.component.html',
    styleUrl: './student-reviews.component.scss',
    imports : [CommonModule,RouterLink]
})
export class StudentReviewsComponent {
routes=routes
}
