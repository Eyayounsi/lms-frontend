import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface MessageRealtimeEvent {
  type: string;
  conversationId: number;
  message?: any;
}

@Injectable({
  providedIn: 'root'
})
export class MessageRealtimeService {
  private ws: WebSocket | null = null;
  private reconnectTimer: any = null;
  private shouldReconnect = true;

  private subscribedConversationIds = new Set<number>();

  private readonly eventsSubject = new Subject<MessageRealtimeEvent>();
  readonly events$ = this.eventsSubject.asObservable();

  private readonly connectedSubject = new BehaviorSubject<boolean>(false);
  readonly connected$ = this.connectedSubject.asObservable();

  connect(): void {
    if (this.ws && (this.ws.readyState === WebSocket.OPEN || this.ws.readyState === WebSocket.CONNECTING)) {
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      return;
    }

    this.shouldReconnect = true;
    const wsUrl = this.buildWsUrl(token);
    this.ws = new WebSocket(wsUrl);

    this.ws.onopen = () => {
      this.connectedSubject.next(true);
      this.flushSubscriptions();
    };

    this.ws.onmessage = (event) => {
      try {
        const payload = JSON.parse(event.data) as MessageRealtimeEvent;
        this.eventsSubject.next(payload);
      } catch {
      }
    };

    this.ws.onclose = () => {
      this.connectedSubject.next(false);
      this.ws = null;
      this.scheduleReconnect();
    };

    this.ws.onerror = () => {
      this.connectedSubject.next(false);
    };
  }

  disconnect(): void {
    this.shouldReconnect = false;
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }

    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }

    this.connectedSubject.next(false);
  }

  subscribeConversation(conversationId: number): void {
    if (!conversationId) {
      return;
    }

    this.subscribedConversationIds.add(conversationId);
    this.send({ type: 'SUBSCRIBE', conversationId });
  }

  unsubscribeConversation(conversationId: number): void {
    if (!conversationId) {
      return;
    }

    this.subscribedConversationIds.delete(conversationId);
    this.send({ type: 'UNSUBSCRIBE', conversationId });
  }

  private flushSubscriptions(): void {
    for (const id of this.subscribedConversationIds) {
      this.send({ type: 'SUBSCRIBE', conversationId: id });
    }
  }

  private send(payload: { type: string; conversationId: number }): void {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      return;
    }

    this.ws.send(JSON.stringify(payload));
  }

  private scheduleReconnect(): void {
    if (!this.shouldReconnect || this.reconnectTimer) {
      return;
    }

    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null;
      this.connect();
    }, 2000);
  }

  private buildWsUrl(token: string): string {
    const apiUrl = (environment.apiUrl || '').replace(/\/+$/, '');
    const baseUrl = apiUrl.endsWith('/api') ? apiUrl.slice(0, -4) : apiUrl;
    const wsBase = baseUrl.startsWith('https://')
      ? baseUrl.replace('https://', 'wss://')
      : baseUrl.replace('http://', 'ws://');

    return `${wsBase}/ws/messages?token=${encodeURIComponent(token)}`;
  }
}
