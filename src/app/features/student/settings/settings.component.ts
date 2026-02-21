import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from '../../../shared/service/routes/routes';
import { RouterLinkActive, RouterModule } from '@angular/router';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrl: './settings.component.scss',
    imports : [CommonModule,RouterModule,RouterLinkActive]
})
export class SettingsComponent {    
routes=routes
}
