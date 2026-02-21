import { Component, OnInit } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-student-dashboard',
    templateUrl: './student-dashboard.component.html',
    styleUrl: './student-dashboard.component.scss',
    imports : [CommonModule,RouterLink],
})
export class StudentDashboardComponent implements OnInit {
  public routes = routes;
  isSelected:boolean[]=[false];

  // Informations de l'utilisateur connecté
  public userName: string = '';
  public userRole: string = '';

  ngOnInit(): void {
    this.userName = localStorage.getItem('fullName') || 'Utilisateur';
    this.userRole = localStorage.getItem('role') || '';
  }

  iconSelect(index:number) : void{
    this.isSelected[index]=!this.isSelected[index];
  }
}
