import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VisitorChatbotService } from '../../service/chatbot/visitor-chatbot.service';

interface VisitorChatMessage {
  sender: 'assistant' | 'user';
  text: string;
  time: Date;
}

@Component({
  selector: 'app-visitor-chatbot',
  imports: [CommonModule, FormsModule],
  templateUrl: './visitor-chatbot.component.html',
  styleUrl: './visitor-chatbot.component.scss'
})
export class VisitorChatbotComponent {

  isOpen = false;
  isLoading = false;
  draftMessage = '';
  unreadCount = 0;
  suggestedPrompts: string[] = [
    'Comment acheter un cours via Stripe ?',
    'Recommande-moi 3 cours disponibles pour débuter',
    'Quels cours pour Python / Data / Web ?',
    'Comment obtenir un certificat ?'
  ];

  messages: VisitorChatMessage[] = [
    {
      sender: 'assistant',
      text: 'Bienvenue 👋 Je peux vous aider à découvrir les cours, les certificats et les étapes pour commencer.',
      time: new Date()
    }
  ];

  constructor(private visitorChatbotService: VisitorChatbotService) {}

  toggle(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.unreadCount = 0;
    }
  }

  send(): void {
    const message = this.draftMessage.trim();
    if (!message || this.isLoading) {
      return;
    }

    this.messages.push({ sender: 'user', text: message, time: new Date() });
    this.draftMessage = '';
    this.isLoading = true;

    this.visitorChatbotService.ask(message).subscribe({
      next: (res) => {
        this.pushAssistantMessage(
          res?.reply?.trim() || 'Je n\'ai pas de réponse pour le moment. Pouvez-vous reformuler ?'
        );
        this.isLoading = false;
      },
      error: () => {
        this.pushAssistantMessage('Service temporairement indisponible. Réessayez dans un instant.');
        this.isLoading = false;
      }
    });
  }

  clearConversation(): void {
    if (this.isLoading) {
      return;
    }

    this.messages = [
      {
        sender: 'assistant',
        text: 'Bienvenue 👋 Je peux vous aider à découvrir les cours, le paiement Stripe et les certificats.',
        time: new Date()
      }
    ];
  }

  async copyLastAssistantReply(): Promise<void> {
    const lastAssistant = [...this.messages].reverse().find(m => m.sender === 'assistant');
    const text = lastAssistant?.text?.trim();
    if (!text) {
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // no-op: browser may block clipboard in insecure contexts
    }
  }

  formatAssistantText(text: string): string {
    const escaped = (text || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    return escaped
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
  }

  private pushAssistantMessage(text: string): void {
    this.messages.push({ sender: 'assistant', text, time: new Date() });
    if (!this.isOpen) {
      this.unreadCount += 1;
    }
  }

  sendSuggestion(suggestion: string): void {
    if (this.isLoading) {
      return;
    }
    this.draftMessage = suggestion;
    this.send();
  }

  trackByIndex(index: number): number {
    return index;
  }

  handleEnter(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.send();
    }
  }
}
