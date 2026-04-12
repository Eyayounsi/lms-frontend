import { AfterViewChecked, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../../../shared/service/message/message.service';
import { CourseService } from '../../../shared/service/course/course.service';
import { MessageRealtimeService } from '../../../shared/service/message/message-realtime.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-student-message',
    templateUrl: './student-message.component.html',
    styleUrl: './student-message.component.scss',
    imports: [CommonModule, FormsModule, DatePipe]
})
export class StudentMessageComponent implements OnInit, OnDestroy, AfterViewChecked {
  @ViewChild('messagesContainer') private messagesContainer?: ElementRef<HTMLDivElement>;

  conversations: any[] = [];
  activeConversation: any = null;
  messages: any[] = [];
  newMessage = '';
  loading = true;
  loadingMessages = false;
  currentUserId: number = 0;

  // Instructeurs suggérés (depuis les cours inscrits)
  instructors: { id: number; name: string; avatar: string }[] = [];
  startingConv = false;
  private realtimeSub?: Subscription;
  private subscribedConversationId: number | null = null;
  private shouldScrollToBottom = false;

  constructor(
    private messageService: MessageService,
    private courseService: CourseService,
    private messageRealtimeService: MessageRealtimeService
  ) {
    this.currentUserId = parseInt(localStorage.getItem('id') || '0', 10);
  }

  ngOnInit(): void {
    this.messageRealtimeService.connect();
    this.realtimeSub = this.messageRealtimeService.events$.subscribe(event => this.handleRealtimeEvent(event));
    this.loadConversations();
    this.loadInstructors();
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

  loadInstructors(): void {
    this.courseService.getMyEnrolledCourses().subscribe({
      next: (courses) => {
        const map = new Map<number, { id: number; name: string; avatar: string }>();
        for (const c of courses) {
          if (c.instructorId && !map.has(c.instructorId)) {
            map.set(c.instructorId, {
              id: c.instructorId,
              name: c.instructorName || 'Instructeur',
              avatar: c.instructorAvatar || ''
            });
          }
        }
        this.instructors = Array.from(map.values());
      },
      error: () => {}
    });
  }

  contactInstructor(instructor: { id: number; name: string; avatar: string }): void {
    this.startingConv = true;
    this.messageService.getOrCreateConversation(instructor.id).subscribe({
      next: (conv) => {
        this.startingConv = false;
        // Refresh conversations then open the new one
        this.messageService.getConversations().subscribe({
          next: (data) => {
            this.conversations = data;
            const found = data.find((c: any) => c.conversationId === conv.conversationId || c.conversationId === conv.id);
            if (found) { this.openConversation(found); }
          }
        });
      },
      error: () => { this.startingConv = false; }
    });
  }

  loadConversations(): void {
    this.loading = true;
    this.messageService.getConversations().subscribe({
      next: (data) => { this.conversations = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  openConversation(conv: any): void {
    if (this.subscribedConversationId && this.subscribedConversationId !== conv.conversationId) {
      this.messageRealtimeService.unsubscribeConversation(this.subscribedConversationId);
    }

    this.activeConversation = conv;
    this.loadingMessages = true;
    this.messageService.getMessages(conv.conversationId).subscribe({
      next: (data) => {
        this.messages = data;
        this.loadingMessages = false;
        this.requestScrollToBottom();
      },
      error: () => { this.loadingMessages = false; }
    });
    this.messageRealtimeService.subscribeConversation(conv.conversationId);
    this.subscribedConversationId = conv.conversationId;
    if (conv.unreadCount > 0) {
      this.messageService.markAsRead(conv.conversationId).subscribe();
      conv.unreadCount = 0;
    }
  }

  sendMessage(): void {
    if (!this.newMessage.trim() || !this.activeConversation) return;
    const content = this.newMessage.trim();
    this.newMessage = '';
    this.messageService.sendMessage(this.activeConversation.conversationId, { content, messageType: 'TEXT' }).subscribe({
      next: (msg) => {
        this.upsertMessage(msg);
        this.updateConversationPreview(msg, this.activeConversation?.conversationId);
        this.requestScrollToBottom();
      }
    });
  }

  isSent(msg: any): boolean {
    return msg.senderId === this.currentUserId;
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
