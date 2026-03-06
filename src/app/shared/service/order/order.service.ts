import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface OrderHistoryDto {
  enrollmentId: number;
  courseId: number;
  courseTitle: string;
  courseCoverImage: string;
  instructorName: string;
  amount: number;
  purchaseDate: string;
  status: string;
}

@Injectable({ providedIn: 'root' })
export class OrderService {
  private readonly api = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getMyOrders(): Observable<OrderHistoryDto[]> {
    return this.http.get<OrderHistoryDto[]>(`${this.api}/student/orders`);
  }
}
