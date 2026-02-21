import { Component } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrl: './settings.component.scss',
    imports : [RouterModule,RouterLinkActive]
})
export class SettingsComponent {
routes=routes
}
