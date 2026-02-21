import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminSidebarComponent } from './common/admin-sidebar/admin-sidebar.component';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss'],
    imports: [RouterModule, AdminSidebarComponent],
})
export class AdminComponent {}
