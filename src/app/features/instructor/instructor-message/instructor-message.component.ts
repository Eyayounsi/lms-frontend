import { AfterViewChecked, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../../../shared/service/message/message.service';
import { MessageRealtimeService } from '../../../shared/service/message/message-realtime.service';
import { Subscription } from 'rxjs';
import { resolveAvatarImage } from '../../../shared/utils/avatar-image.util';

@Component({
  selector: 'app-instructor-message',
  imports: [CommonModule, FormsModule],
  templateUrl: './instructor-message.component.html',
  styleUrl: './instructor-message.component.scss'
})
export class InstructorMessageComponent implements OnInit, OnDestroy, AfterViewChecked {
  @ViewChild('messagesContainer') private messagesContainer?: ElementRef<HTMLDivElement>;

  searchQuery = '';
  conversations: any[] = [];
  activeConversation: any = null;
  messages: any[] = [];
  newMessage = '';
  loading = true;
  conversationsError = '';
  loadingMessages = false;
  messagesError = '';
  sendingMessage = false;
  currentUserId: number = 0;
  private realtimeSub?: Subscription;
  private subscribedConversationId: number | null = null;
  private shouldScrollToBottom = false;
  private pendingParticipantId: number | null = null;
  private pendingParticipantName = '';
  private pendingParticipantAvatar: string | null = null;

  constructor(
    private messageService: MessageService,
    private messageRealtimeService: MessageRealtimeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.currentUserId = parseInt(localStorage.getItem('id') || '0', 10);
    const params = this.route.snapshot.queryParamMap;
    const studentUserId = Number(params.get('studentUserId') || 0);
    const legacyStudentId = Number(params.get('studentId') || 0);
    this.pendingParticipantId = studentUserId || legacyStudentId || null;
    this.pendingParticipantName = params.get('studentName') || '';
    this.pendingParticipantAvatar = params.get('studentAvatar');
    this.messageRealtimeService.connect();
    this.realtimeSub = this.messageRealtimeService.events$.subscribe(event => this.handleRealtimeEvent(event));
    this.loadConversations();
  }

  ngOnDestroy(): void {
    this.realtimeSub?.unsubscribe();
    if (this.subscribedConversationId) {
      this.messageRealtimeService.unsubscribeConversation(this.subscribedConversationId);
      this.subscribedConversationId = null;
    }
  }

  ngAfterViewChecked(): void {
    if (this.shouldScrollToBottom) {
      this.scrollMessagesToBottom();
      this.shouldScrollToBottom = false;
    }
  }

  get filteredConversations(): any[] {
    const q = this.searchQuery.trim().toLowerCase();
    if (!q) return this.conversations;
    return this.conversations.filter((c) =>
      this.getConversationName(c).toLowerCase().includes(q) ||
      String(c?.lastMessage || '').toLowerCase().includes(q)
    );
  }

  getConversationName(conv: any): string {
    return String(
      conv?.otherParticipantName || conv?.participantName || conv?.fullName || conv?.name || 'Utilisateur'
    );
  }

  getConversationAvatar(conv: any): string | null {
    return conv?.otherParticipantAvatar || conv?.participantAvatar || conv?.avatarPath || conv?.avatar || null;
  }

  totalUnread(): number {
    return this.conversations.reduce((sum, c) => sum + Number(c?.unreadCount || 0), 0);
  }

  loadConversations(): void {
    this.loading = true;
    this.conversationsError = '';
    this.messageService.getConversations().subscribe({
      next: (data) => {
        this.conversations = data || [];
        this.loading = false;

        if (this.pendingParticipantId) {
          const match = this.conversations.find((c) =>
            Number(c?.otherParticipantId || c?.participantId || c?.otherUserId || c?.userId || 0) === this.pendingParticipantId
          );
          if (match) {
            this.openConversation(match);
            this.pendingParticipantId = null;
          } else {
            this.openOrCreateConversation(this.pendingParticipantId);
          }
        }
      },
      error: () => {
        this.conversationsError = 'Impossible de charger les conversations.';
        this.loading = false;
      }
    });
  }

  private openOrCreateConversation(otherUserId: number): void {
    if (!otherUserId) return;

    this.messageService.getOrCreateConversation(otherUserId).subscribe({
      next: (res: any) => {
        const conversationId = Number(res?.conversationId || res?.id || 0);
        if (!conversationId) return;

        const existing = this.conversations.find((c) => c.conversationId === conversationId);
        if (existing) {
          this.openConversation(existing);
          this.pendingParticipantId = null;
          return;
        }

        const newConv = {
          conversationId,
          otherParticipantId: Number(res?.participantId || res?.otherParticipantId || otherUserId),
          otherParticipantName: res?.participantName || res?.otherParticipantName || this.pendingParticipantName || 'Etudiant',
          otherParticipantAvatar: res?.participantAvatar || res?.otherParticipantAvatar || this.pendingParticipantAvatar,
          unreadCount: 0,
          lastMessage: null,
          lastMessageAt: new Date().toISOString(),
          lastMessageIsOwn: false
        };

        this.conversations.unshift(newConv);
        this.openConversation(newConv);
        this.pendingParticipantId = null;
      },
      error: () => {}
    });
  }

  openConversation(conv: any): void {
    if (this.subscribedConversationId && this.subscribedConversationId !== conv.conversationId) {
      this.messageRealtimeService.unsubscribeConversation(this.subscribedConversationId);
    }

    this.activeConversation = conv;
    this.loadingMessages = true;
    this.messagesError = '';
    this.messages = [];
    this.messageService.getMessages(conv.conversationId).subscribe({
      next: (msgs) => {
        this.messages = msgs || [];
        this.loadingMessages = false;
        this.requestScrollToBottom();
        this.messageService.markAsRead(conv.conversationId).subscribe();
        conv.unreadCount = 0;
      },
      error: () => {
        this.messagesError = 'Impossible de charger les messages.';
        this.loadingMessages = false;
      }
    });
    this.messageRealtimeService.subscribeConversation(conv.conversationId);
    this.subscribedConversationId = conv.conversationId;
  }

  sendMessage(): void {
    if (!this.newMessage.trim() || !this.activeConversation || this.sendingMessage) return;
    this.sendingMessage = true;

    this.messageService.sendMessage(this.activeConversation.conversationId, {
      content: this.newMessage,
      messageType: 'TEXT'
    }).subscribe({
      next: (msg) => {
        this.upsertMessage(msg);
        this.updateConversationPreview(msg, this.activeConversation?.conversationId);
        this.requestScrollToBottom();
        this.newMessage = '';
        this.sendingMessage = false;
      },
      error: () => {
        this.sendingMessage = false;
      }
    });
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  isSent(msg: any): boolean {
    return msg.senderId === this.currentUserId;
  }

  showDateSeparator(messages: any[], index: number): boolean {
    if (index === 0) return true;
    const prev = new Date(messages[index - 1].sentAt).toDateString();
    const curr = new Date(messages[index].sentAt).toDateString();
    return prev !== curr;
  }

  formatTime(dateStr: string): string {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  }

  formatDate(dateStr: string): string {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    const today = new Date();
    if (d.toDateString() === today.toDateString()) return "Aujourd'hui";
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    if (d.toDateString() === yesterday.toDateString()) return 'Hier';
    return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
  }

  getAvatarUrl(avatarPath: string | null | undefined, name?: string): string {
    return resolveAvatarImage(avatarPath, this.generateInitialAvatar(name || 'U'));
  }

  onAvatarError(event: Event, name?: string): void {
    const img = event?.target as HTMLImageElement | null;
    if (!img) return;
    img.src = this.generateInitialAvatar(name || 'U');
  }

  private generateInitialAvatar(name: string): string {
    const initial = (name || 'U').charAt(0).toUpperCase();
    const colors = ['#392C7D', '#03C95A', '#0DCAF0', '#6d28d9', '#059669'];
    const bg = colors[(name || 'U').charCodeAt(0) % colors.length];
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><rect width="80" height="80" rx="40" fill="${bg}"/><text x="40" y="53" text-anchor="middle" font-family="Arial,sans-serif" font-size="30" font-weight="700" fill="white">${initial}</text></svg>`;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  }

  private handleRealtimeEvent(event: any): void {
    if (!event || event.type !== 'MESSAGE_CREATED' || !event.conversationId || !event.message) {
      return;
    }

    const msg = event.message;
    const conversationId = event.conversationId as number;

    if (this.activeConversation?.conversationId === conversationId) {
      this.upsertMessage(msg);
      this.requestScrollToBottom();
      if (msg.senderId !== this.currentUserId) {
        this.messageService.markAsRead(conversationId).subscribe();
        this.activeConversation.unreadCount = 0;
      }
    } else {
      const conv = this.conversations.find(c => c.conversationId === conversationId);
      if (conv && msg.senderId !== this.currentUserId) {
        conv.unreadCount = (conv.unreadCount || 0) + 1;
      }
    }

    this.updateConversationPreview(msg, conversationId);
    this.moveConversationToTop(conversationId);
  }

  private upsertMessage(msg: any): void {
    if (!this.messages.some(m => m.id === msg.id)) {
      this.messages.push(msg);
    }
  }

  private updateConversationPreview(msg: any, conversationId?: number): void {
    if (!conversationId) return;
    const conv = this.conversations.find(c => c.conversationId === conversationId);
    if (!conv) return;

    conv.lastMessage = msg.content;
    conv.lastMessageAt = msg.sentAt;
    conv.lastMessageIsOwn = msg.senderId === this.currentUserId;
  }

  private moveConversationToTop(conversationId: number): void {
    const index = this.conversations.findIndex(c => c.conversationId === conversationId);
    if (index <= 0) return;

    const [conv] = this.conversations.splice(index, 1);
    this.conversations.unshift(conv);
  }

  private requestScrollToBottom(): void {
    this.shouldScrollToBottom = true;
  }

  private scrollMessagesToBottom(): void {
    const el = this.messagesContainer?.nativeElement;
    if (!el) return;

    el.scrollTop = el.scrollHeight;
    setTimeout(() => {
      el.scrollTop = el.scrollHeight;
    }, 0);
  }
}
