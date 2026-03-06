import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RecruiterSidebarComponent } from './common/recruiter-sidebar/recruiter-sidebar.component';

@Component({
    selector: 'app-recruiter',
    templateUrl: './recruiter.component.html',
    styleUrls: ['./recruiter.component.scss'],
    imports: [RouterModule, RecruiterSidebarComponent],
})
export class RecruiterComponent {}
