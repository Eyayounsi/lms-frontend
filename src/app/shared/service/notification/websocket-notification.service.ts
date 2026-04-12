import { Injectable, NgZone } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import SockJS from 'sockjs-client';
import { Client, IMessage, StompSubscription } from '@stomp/stompjs';

export interface NotificationDto {
  id: number;
  type: string;
  title: string;
  message: string;
  link: string;
  read: boolean;
  createdAt: string;
}

/**
 * Service WebSocket pour les notifications temps réel
 * ================================================
 * 
 * Connexion:
 * 1. Connecter le WebSocket via connect()
 * 2. S'abonner aux notifications privées: /user/queue/notifications
 * 3. Recevoir les notifications en temps réel
 * 4. Afficher un Toastr pour chaque nouvelle notification
 * 
 * Utilisation:
 * constructor(private wsNotifService: WebSocketNotificationService) {}
 * ngOnInit() {
 *   this.wsNotifService.connect(); // Démarrer la connexion
 *   this.wsNotifService.getNewNotifications$().subscribe(notif => {
 *     console.log('Nouvelle notification reçue:', notif);
 *   });
 * }
 */
@Injectable({ providedIn: 'root' })
export class WebSocketNotificationService {

  private stompClient: Client | null = null;
  private notificationsSubscription: StompSubscription | null = null;
  private newNotificationsSubject = new BehaviorSubject<NotificationDto | null>(null);
  private connectedSubject = new BehaviorSubject<boolean>(false);

  constructor(
    private toastr: ToastrService,
    private ngZone: NgZone
  ) {
    this.initializeWebSocket();
  }

  private initializeWebSocket(): void {
    // Garder la tentative de connexion silencieuse si WebSocket non disponible
    try {
      const token = localStorage.getItem('token');
      const baseUrl = environment.apiUrl.replace(/\/api\/?$/, '').replace(/\/$/, '');
      const wsUrl = token
        ? `${baseUrl}/ws?token=${encodeURIComponent(token)}`
        : `${baseUrl}/ws`;
      this.stompClient = new Client({
        webSocketFactory: () => new SockJS(wsUrl),
        reconnectDelay: 5000,
        debug: () => {
          // Désactiver les logs STOMP bruyants
        }
      });
    } catch (e) {
      console.debug('[WebSocket] Initialisation échouée (fallback HTTP):', e);
    }
  }

  /**
   * Connecter à WebSocket et s'abonner aux notifications
   */
  public connect(): void {
    if (!this.stompClient) {
      this.initializeWebSocket();
    }

    if (!this.stompClient) {
      console.debug('[WebSocket] ❌ Pas de client STOMP disponible (SockJS non chargé)');
      return;
    }

    if (this.stompClient.active) {
      return;
    }

    const client = this.stompClient;
    client.onConnect = (frame) => {
      this.connectedSubject.next(true);

      if (this.notificationsSubscription) {
        this.notificationsSubscription.unsubscribe();
      }

      // S'abonner aux notifications privées
      this.notificationsSubscription = client.subscribe('/user/queue/notifications', (message: IMessage) => {
        try {
          const notification: NotificationDto = JSON.parse(message.body);
          
          // Émettre pour les subscribers
          this.newNotificationsSubject.next(notification);

          // Afficher le Toastr
          this.ngZone.run(() => {
            this.showNotificationToast(notification);
          });
        } catch (e) {
          console.error('[WebSocket] ❌ Erreur parsing notification:', e);
        }
      });

    };

    client.onStompError = (error) => {
      console.error('[WebSocket] ❌ Erreur connexion WebSocket:', error);
      this.connectedSubject.next(false);
    };

    client.onWebSocketClose = () => {
      this.connectedSubject.next(false);
    };

    client.activate();
  }

  /**
   * Afficher une notification Toastr avec icône selon le type
   */
  private showNotificationToast(notif: NotificationDto): void {
    const iconClass = this.getNotificationIcon(notif.type);
    const html = `
      <div class="d-flex align-items-start">
        <i class="${iconClass} me-2 mt-1" style="font-size: 1.2rem;"></i>
        <div>
          <strong>${notif.title}</strong><br>
          <small>${notif.message}</small>
        </div>
      </div>
    `;

    // Toast type mapping
    let toastType: 'success' | 'error' | 'warning' | 'info' = 'info';
    if (notif.type.includes('APPROVED') || notif.type.includes('CONFIRMED') || notif.type.includes('ISSUED')) {
      toastType = 'success';
    } else if (notif.type.includes('REJECTED') || notif.type.includes('ERROR')) {
      toastType = 'error';
    } else if (notif.type.includes('PENDING') || notif.type.includes('MODIFIED')) {
      toastType = 'warning';
    }

    this.toastr[toastType](html, '', {
      timeOut: 5000,
      positionClass: 'toast-top-right',
      enableHtml: true,
      closeButton: true,
      progressBar: true,
      progressAnimation: 'increasing'
    });
  }

  /**
   * Retourner l'icône selon le type de notification
   */
  private getNotificationIcon(type: string): string {
    const iconMap: { [key: string]: string } = {
      'COURSE_APPROVED': 'isax-verify text-success',
      'COURSE_REJECTED': 'isax-close-circle text-danger',
      'PURCHASE_CONFIRMED': 'isax-shopping-cart text-success',
      'CERTIFICATE_ISSUED': 'isax-award text-warning',
      'NEW_REVENUE': 'isax-trending-up text-success',
      'PAYOUT_PAID': 'isax-receive-money text-success',
      'PAYOUT_REJECTED': 'isax-close-circle text-danger',
      'COURSE_PROMOTION_UPDATED': 'isax-discount-shape text-info',
      'COURSE_ARCHIVED_BY_INSTRUCTOR': 'isax-archive-minus text-warning',
      'COURSE_UNARCHIVED_BY_INSTRUCTOR': 'isax-refresh-circle text-info',
      'COURSE_ARCHIVED_BY_ADMIN': 'isax-archive-minus text-danger',
      'COURSE_UNARCHIVED_BY_ADMIN': 'isax-refresh-circle text-success',
      'CHALLENGE_UNLOCKED': 'isax-star text-warning',
      'NEW_MESSAGE': 'isax-message text-info'
    };
    return iconMap[type] || 'isax-notification';
  }

  /**
   * Observable pour les nouvelles notifications
   */
  public getNewNotifications$(): Observable<NotificationDto | null> {
    return this.newNotificationsSubject.asObservable();
  }

  /**
   * Observable pour l'état de connexion
   */
  public isConnected$(): Observable<boolean> {
    return this.connectedSubject.asObservable();
  }

  /**
   * Déconnecter
   */
  public disconnect(): void {
    if (this.notificationsSubscription) {
      this.notificationsSubscription.unsubscribe();
      this.notificationsSubscription = null;
    }

    if (this.stompClient && this.stompClient.active) {
      this.stompClient.deactivate().finally(() => {
        this.connectedSubject.next(false);
      });
    }
  }
}
