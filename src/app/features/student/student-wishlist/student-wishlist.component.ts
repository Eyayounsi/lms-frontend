import { Component } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-student-wishlist',
    templateUrl: './student-wishlist.component.html',
    styleUrl: './student-wishlist.component.scss',
    imports : [CommonModule,RouterLink]
})
export class StudentWishlistComponent {
  public routes = routes;
  isSelected: boolean[] = Array(10).fill(true);

  iconSelect(index: number): void {
    this.isSelected[index] = !this.isSelected[index]; // Toggle boolean value
  }
}
