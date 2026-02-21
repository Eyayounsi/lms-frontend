import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SuperadminSidebarComponent } from './common/superadmin-sidebar/superadmin-sidebar.component';

@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styles: [],
  standalone: true,
  imports: [RouterModule, SuperadminSidebarComponent],
})
export class SuperadminComponent {}
