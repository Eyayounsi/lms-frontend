import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../../../shared/service/message/message.service';

@Component({
  selector: 'app-instructor-message',
  imports: [CommonModule, FormsModule],
  templateUrl: './instructor-message.component.html',
  styleUrl: './instructor-message.component.scss'
})
export class InstructorMessageComponent implements OnInit {
  isSearch = false;
  conversations: any[] = [];
  activeConversation: any = null;
  messages: any[] = [];
  newMessage = '';
  loading = true;
  loadingMessages = false;
  currentUserId: number = 0;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.currentUserId = parseInt(localStorage.getItem('id') || '0', 10);
    this.loadConversations();
  }

  openSearch(): void {
    this.isSearch = !this.isSearch;
  }

  loadConversations(): void {
    this.loading = true;
    this.messageService.getConversations().subscribe({
      next: (data) => { this.conversations = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  openConversation(conv: any): void {
    this.activeConversation = conv;
    this.loadingMessages = true;
    this.messageService.getMessages(conv.conversationId).subscribe({
      next: (msgs) => {
        this.messages = msgs;
        this.loadingMessages = false;
        this.messageService.markAsRead(conv.conversationId).subscribe();
        conv.unreadCount = 0;
      },
      error: () => { this.loadingMessages = false; }
    });
  }

  sendMessage(): void {
    if (!this.newMessage.trim() || !this.activeConversation) return;
    this.messageService.sendMessage(this.activeConversation.conversationId, {
      content: this.newMessage,
      messageType: 'TEXT'
    }).subscribe({
      next: (msg) => {
        this.messages.push(msg);
        this.newMessage = '';
      }
    });
  }

  isSent(msg: any): boolean {
    return msg.senderId === this.currentUserId;
  }
}
