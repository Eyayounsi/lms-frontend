import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BlockedService {
  private _message = new BehaviorSubject<string | null>(null);
  blocked$ = this._message.asObservable();

  trigger(message: string): void {
    this._message.next(message);
  }

  clear(): void {
    this._message.next(null);
  }
}
