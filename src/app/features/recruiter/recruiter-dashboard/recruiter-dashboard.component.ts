import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { routes } from '../../../shared/service/routes/routes';
import { RecruiterService, RecruiterStats } from '../../../shared/service/recruiter/recruiter.service';

@Component({
    selector: 'app-recruiter-dashboard',
    templateUrl: './recruiter-dashboard.component.html',
    styleUrl: './recruiter-dashboard.component.scss',
    imports: [CommonModule, RouterLink]
})
export class RecruiterDashboardComponent implements OnInit {
    public routes = routes;

    // Informations de l'utilisateur connecté
    public userName: string = '';
    public userRole: string = '';

    // Statistiques depuis le backend
    public stats: RecruiterStats = {
        sharedProfiles: 0,
        totalStudents: 0,
        pendingOffers: 0,
        scheduledInterviews: 0
    };
    public statsLoading = true;
    public statsError = '';

    constructor(private recruiterService: RecruiterService) {}

    ngOnInit(): void {
        this.userName = localStorage.getItem('fullName') || 'Recruteur';
        this.userRole = localStorage.getItem('role') || '';
        this.loadStats();
    }

    public loadStats(): void {
        this.statsLoading = true;
        this.statsError = '';
        this.recruiterService.getStats().subscribe({
            next: (data) => {
                this.stats = data;
                this.statsLoading = false;
            },
            error: (err) => {
                this.statsError = 'Impossible de charger les statistiques.';
                this.statsLoading = false;
                console.error(err);
            }
        });
    }
}
