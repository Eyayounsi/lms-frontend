import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RecruiterService, ConversationSummary, ChatMessage, SharedProfile, StartConversationResponse } from '../../../shared/service/recruiter/recruiter.service';
import { MessageRealtimeService } from '../../../shared/service/message/message-realtime.service';
import { Subscription } from 'rxjs';
import { resolveAvatarImage } from '../../../shared/utils/avatar-image.util';

@Component({
  selector: 'app-recruiter-messages',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recruiter-messages.component.html',
  styleUrls: ['./recruiter-messages.component.scss']
})
export class RecruiterMessagesComponent implements OnInit, AfterViewChecked, OnDestroy {
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;

  conversations: ConversationSummary[] = [];
  selectedConversation: ConversationSummary | null = null;
  messages: ChatMessage[] = [];
  newMessage = '';

  loadingConversations = true;
  loadingMessages = false;
  sendingMessage = false;
  conversationsError = '';
  messagesError = '';

  currentUserId: number | null = null;
  private shouldScrollToBottom = false;

  // Recherche d'étudiant
  studentSearchQuery = '';
  studentSearchResults: SharedProfile[] = [];
  allStudents: SharedProfile[] = [];
  showSearchDropdown = false;
  startingConversationWith: number | null = null;
  private realtimeSub?: Subscription;
  private subscribedConversationId: number | null = null;

  // Emoji picker
  showEmojiPicker = false;
  emojis = ['😊','😂','👍','❤️','🎉','🙏','👋','😎','🔥','✅','💼','🎓','📄','💡','🚀','⭐','💪','🤝','📝','👏'];

  constructor(
    private recruiterService: RecruiterService,
    private route: ActivatedRoute,
    private messageRealtimeService: MessageRealtimeService
  ) {}

  ngOnInit(): void {
    const idStr = localStorage.getItem('id');
    this.currentUserId = idStr ? +idStr : null;
    this.messageRealtimeService.connect();
    this.realtimeSub = this.messageRealtimeService.events$.subscribe(event => this.handleRealtimeEvent(event));
    this.loadConversations();
    this.loadStudents();
  }

  ngOnDestroy(): void {
    this.realtimeSub?.unsubscribe();
    if (this.subscribedConversationId) {
      this.messageRealtimeService.unsubscribeConversation(this.subscribedConversationId);
      this.subscribedConversationId = null;
    }
  }

  loadStudents(): void {
    this.recruiterService.getSharedProfiles().subscribe({
      next: (data) => { this.allStudents = data; },
      error: () => {}
    });
  }

  onStudentSearch(): void {
    const q = this.studentSearchQuery.toLowerCase().trim();
    if (!q) {
      this.studentSearchResults = [];
      this.showSearchDropdown = false;
      return;
    }
    this.studentSearchResults = this.allStudents
      .filter(s =>
        (s.fullName || '').toLowerCase().includes(q) ||
        (s.email || '').toLowerCase().includes(q) ||
        (s.designation || '').toLowerCase().includes(q)
      )
      .slice(0, 6);
    this.showSearchDropdown = this.studentSearchResults.length > 0;
  }

  startConversationWith(student: SharedProfile): void {
    this.studentSearchQuery = '';
    this.studentSearchResults = [];
    this.showSearchDropdown = false;
    this.startingConversationWith = student.id;

    this.recruiterService.startConversation(student.id).subscribe({
      next: (res: StartConversationResponse) => {
        const existing = this.conversations.find(c => c.conversationId === res.conversationId);
        if (existing) {
          this.selectConversation(existing);
        } else {
          const newConv: ConversationSummary = {
            conversationId: res.conversationId,
            participantId: res.participantId,
            participantName: res.participantName,
            participantAvatar: res.participantAvatar,
            participantRole: 'STUDENT',
            unreadCount: 0,
            lastMessage: null,
            lastMessageAt: new Date().toISOString(),
            lastMessageIsOwn: false
          };
          this.conversations.unshift(newConv);
          this.selectConversation(newConv);
        }
        this.startingConversationWith = null;
      },
      error: () => { this.startingConversationWith = null; }
    });
  }

  closeSearchDropdown(): void {
    // Delay to allow mousedown on dropdown items to fire before blur hides them
    setTimeout(() => { this.showSearchDropdown = false; }, 200);
  }

  ngAfterViewChecked(): void {
    if (this.shouldScrollToBottom) {
      this.scrollToBottom();
      this.shouldScrollToBottom = false;
    }
  }

  loadConversations(): void {
    this.loadingConversations = true;
    this.conversationsError = '';
    this.recruiterService.getConversations().subscribe({
      next: (data) => {
        this.conversations = data;
        this.loadingConversations = false;
        // Auto-select conversation from query param
        this.route.queryParams.subscribe(params => {
          if (params['conversationId']) {
            const id = +params['conversationId'];
            const conv = this.conversations.find(c => c.conversationId === id);
            if (conv) {
              this.selectConversation(conv);
            } else {
              // Conversation exists but might not be in list yet — reload
              this.recruiterService.getConversations().subscribe(refreshed => {
                this.conversations = refreshed;
                const found = this.conversations.find(c => c.conversationId === id);
                if (found) this.selectConversation(found);
              });
            }
          }
        });
      },
      error: () => {
        this.conversationsError = 'Impossible de charger les conversations.';
        this.loadingConversations = false;
      }
    });
  }

  selectConversation(conv: ConversationSummary): void {
    if (this.subscribedConversationId && this.subscribedConversationId !== conv.conversationId) {
      this.messageRealtimeService.unsubscribeConversation(this.subscribedConversationId);
    }

    this.selectedConversation = conv;
    this.messages = [];
    this.messagesError = '';
    this.loadMessages(conv.conversationId);
    this.messageRealtimeService.subscribeConversation(conv.conversationId);
    this.subscribedConversationId = conv.conversationId;
    // Reset unread count locally
    conv.unreadCount = 0;
  }

  loadMessages(conversationId: number): void {
    this.loadingMessages = true;
    this.recruiterService.getMessages(conversationId).subscribe({
      next: (data) => {
        this.messages = data;
        this.loadingMessages = false;
        this.shouldScrollToBottom = true;
      },
      error: () => {
        this.messagesError = 'Impossible de charger les messages.';
        this.loadingMessages = false;
      }
    });
  }

  sendMessage(): void {
    const content = this.newMessage.trim();
    if (!content || !this.selectedConversation || this.sendingMessage) return;

    this.sendingMessage = true;
    this.recruiterService.sendMessage(this.selectedConversation.conversationId, content).subscribe({
      next: (msg) => {
        this.upsertMessage(msg);
        this.newMessage = '';
        this.sendingMessage = false;
        this.shouldScrollToBottom = true;
        // Update conversation preview
        this.updateConversationPreview(msg);
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

  toggleEmojiPicker(): void {
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  insertEmoji(emoji: string): void {
    this.newMessage += emoji;
    this.showEmojiPicker = false;
  }

  closeEmojiPicker(): void {
    this.showEmojiPicker = false;
  }

  showDateSeparator(messages: ChatMessage[], index: number): boolean {
    if (index === 0) return true;
    const prev = new Date(messages[index - 1].sentAt).toDateString();
    const curr = new Date(messages[index].sentAt).toDateString();
    return prev !== curr;
  }

  isFromMe(msg: ChatMessage): boolean {
    return this.currentUserId !== null && msg.senderId === this.currentUserId;
  }

  getAvatarUrl(avatarPath: string | null, name?: string): string {
    return resolveAvatarImage(avatarPath, this.generateInitialAvatar(name || 'U'));
  }

  private generateInitialAvatar(name: string): string {
    const initial = (name || 'U').charAt(0).toUpperCase();
    const colors = ['#392C7D', '#03C95A', '#0DCAF0', '#6d28d9', '#059669'];
    const bg = colors[(name || 'U').charCodeAt(0) % colors.length];
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><rect width="80" height="80" rx="40" fill="${bg}"/><text x="40" y="53" text-anchor="middle" font-family="Arial,sans-serif" font-size="30" font-weight="700" fill="white">${initial}</text></svg>`;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  }

  formatTime(dateStr: string): string {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  }

  formatDate(dateStr: string): string {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    const today = new Date();
    const isToday = d.toDateString() === today.toDateString();
    if (isToday) return "Aujourd'hui";
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    if (d.toDateString() === yesterday.toDateString()) return 'Hier';
    return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
  }

  private scrollToBottom(): void {
    try {
      if (this.messagesContainer) {
        const el = this.messagesContainer.nativeElement;
        el.scrollTop = el.scrollHeight;
        setTimeout(() => {
          el.scrollTop = el.scrollHeight;
        }, 0);
        setTimeout(() => {
          el.scrollTop = el.scrollHeight;
        }, 80);
      }
    } catch {}
  }

  totalUnread(): number {
    return this.conversations.reduce((sum, c) => sum + (c.unreadCount || 0), 0);
  }

  private handleRealtimeEvent(event: any): void {
    if (!event || event.type !== 'MESSAGE_CREATED' || !event.conversationId || !event.message) {
      return;
    }

    const msg = event.message as ChatMessage;
    const conversationId = event.conversationId as number;

    if (this.selectedConversation?.conversationId === conversationId) {
      this.upsertMessage(msg);
      this.shouldScrollToBottom = true;

      if (this.currentUserId !== null && msg.senderId !== this.currentUserId) {
        this.selectedConversation.unreadCount = 0;
      }
    } else {
      const conv = this.conversations.find(c => c.conversationId === conversationId);
      if (conv && this.currentUserId !== null && msg.senderId !== this.currentUserId) {
        conv.unreadCount = (conv.unreadCount || 0) + 1;
      }
    }

    this.updateConversationPreview(msg, conversationId);
    this.moveConversationToTop(conversationId);
  }

  private upsertMessage(msg: ChatMessage): void {
    const exists = this.messages.some(m => m.id === msg.id);
    if (!exists) {
      this.messages.push(msg);
    }
  }

  private updateConversationPreview(msg: ChatMessage, forcedConversationId?: number): void {
    const conversationId = forcedConversationId ?? this.selectedConversation?.conversationId;
    if (!conversationId) {
      return;
    }

    const conv = this.conversations.find(c => c.conversationId === conversationId);
    if (!conv) {
      return;
    }

    conv.lastMessage = msg.content;
    conv.lastMessageAt = msg.sentAt;
    conv.lastMessageIsOwn = this.currentUserId !== null && msg.senderId === this.currentUserId;
  }

  private moveConversationToTop(conversationId: number): void {
    const index = this.conversations.findIndex(c => c.conversationId === conversationId);
    if (index <= 0) {
      return;
    }

    const [conv] = this.conversations.splice(index, 1);
    this.conversations.unshift(conv);
  }
}
