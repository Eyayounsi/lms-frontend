import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export type NotificationHeaderAction = 'mark-all-read' | 'delete-all';

@Injectable({ providedIn: 'root' })
export class NotificationActionsService {
  readonly actions$ = new Subject<NotificationHeaderAction>();

  triggerMarkAllAsRead(): void {
    this.actions$.next('mark-all-read');
  }

  triggerDeleteAll(): void {
    this.actions$.next('delete-all');
  }
}
