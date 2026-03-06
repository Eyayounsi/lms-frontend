import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../../../shared/service/message/message.service';
import { CourseService } from '../../../shared/service/course/course.service';

@Component({
    selector: 'app-student-message',
    templateUrl: './student-message.component.html',
    styleUrl: './student-message.component.scss',
    imports: [CommonModule, FormsModule, DatePipe]
})
export class StudentMessageComponent implements OnInit {
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

  constructor(private messageService: MessageService, private courseService: CourseService) {
    this.currentUserId = parseInt(localStorage.getItem('id') || '0', 10);
  }

  ngOnInit(): void {
    this.loadConversations();
    this.loadInstructors();
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
    this.activeConversation = conv;
    this.loadingMessages = true;
    this.messageService.getMessages(conv.conversationId).subscribe({
      next: (data) => { this.messages = data; this.loadingMessages = false; },
      error: () => { this.loadingMessages = false; }
    });
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
      next: (msg) => { this.messages.push(msg); }
    });
  }

  isSent(msg: any): boolean {
    return msg.senderId === this.currentUserId;
  }
}
