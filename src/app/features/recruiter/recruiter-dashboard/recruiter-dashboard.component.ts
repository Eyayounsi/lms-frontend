import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from '../../../shared/service/routes/routes';

@Component({
    selector: 'app-recruiter-dashboard',
    templateUrl: './recruiter-dashboard.component.html',
    styleUrl: './recruiter-dashboard.component.scss',
    imports: [CommonModule]
})
export class RecruiterDashboardComponent implements OnInit {
    public routes = routes;

    // Informations de l'utilisateur connecté
    public userName: string = '';
    public userRole: string = '';

    ngOnInit(): void {
        this.userName = localStorage.getItem('fullName') || 'Recruteur';
        this.userRole = localStorage.getItem('role') || '';
    }
}
