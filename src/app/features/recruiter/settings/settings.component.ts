import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { routes } from '../../../shared/service/routes/routes';

@Component({
  selector: 'app-recruiter-settings-shell',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  imports: [RouterModule, RouterLink, RouterLinkActive],
})
export class SettingsComponent {
  routes = routes;
}
