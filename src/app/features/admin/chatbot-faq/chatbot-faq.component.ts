import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

interface FaqItem {
  message: string;
  count: number;
  courseId?: string;
  lessonId?: string;
  courseName?: string;
  sectionName?: string;
  lessonName?: string;
  lastSeen?: string;
  customResponse?: string; // Réponse personnalisée admin
}

interface FaqStatsResponse {
  total: number;
  items: FaqItem[];
}

interface AdminCustomResponse {
  question: string;
  response: string;
  courseId?: string;
  lessonId?: string;
  active: boolean;
}

@Component({
  selector: 'app-chatbot-faq',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot-faq.component.html',
  styleUrls: ['./chatbot-faq.component.scss']
})
export class ChatbotFaqComponent implements OnInit {
  faqStats: FaqStatsResponse = { total: 0, items: [] };
  loading = true;
  error: string | null = null;
  limit = 20;
  
  // Modal pour créer/modifier une réponse
  showResponseModal = false;
  selectedQuestion: FaqItem | null = null;
  customResponseText = '';
  savingResponse = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadFaqStats();
  }

  loadFaqStats(): void {
    this.loading = true;
    this.error = null;

    const url = `/api/ai/chatbot/admin/student-faq-stats?limit=${this.limit}`;

    this.http.get<FaqStatsResponse>(url).subscribe({
      next: (data) => {
        this.faqStats = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des FAQ:', err);
        this.error = 'Impossible de charger les statistiques FAQ. Vérifiez que MongoDB est démarré et que le service Python est actif.';
        this.loading = false;
      }
    });
  }

  refresh(): void {
    this.loadFaqStats();
  }

  // Ouvrir le modal pour créer une réponse personnalisée
  openResponseModal(item: FaqItem): void {
    this.selectedQuestion = item;
    this.customResponseText = item.customResponse || '';
    this.showResponseModal = true;
  }

  // Fermer le modal
  closeResponseModal(): void {
    this.showResponseModal = false;
    this.selectedQuestion = null;
    this.customResponseText = '';
  }

  // Sauvegarder la réponse personnalisée
  saveCustomResponse(): void {
    if (!this.selectedQuestion || !this.customResponseText.trim()) {
      return;
    }

    this.savingResponse = true;

    const payload = {
      question: this.selectedQuestion.message,
      response: this.customResponseText.trim(),
      courseId: this.selectedQuestion.courseId || null,
      lessonId: this.selectedQuestion.lessonId || null
    };

    const url = '/agents/admin/custom-responses';

    this.http.post(url, payload).subscribe({
      next: () => {
        this.savingResponse = false;
        this.closeResponseModal();
        // Recharger les stats pour afficher la nouvelle réponse
        this.loadFaqStats();
        alert('Réponse personnalisée sauvegardée avec succès !');
      },
      error: (err) => {
        console.error('Erreur lors de la sauvegarde:', err);
        this.savingResponse = false;
        alert('Erreur lors de la sauvegarde de la réponse.');
      }
    });
  }

  // Calculer le total des interactions
  getTotalInteractions(): number {
    return this.faqStats.items.reduce((sum, item) => sum + item.count, 0);
  }

  // Calculer la moyenne par question
  getAveragePerQuestion(): string {
    if (this.faqStats.items.length === 0) return '0';
    const total = this.getTotalInteractions();
    const average = total / this.faqStats.items.length;
    return average.toFixed(1);
  }

  getRelativeTime(dateStr: string): string {
    if (!dateStr) return 'Inconnu';
    
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return 'À l\'instant';
    if (diffMins < 60) return `Il y a ${diffMins} min`;
    if (diffHours < 24) return `Il y a ${diffHours}h`;
    if (diffDays < 7) return `Il y a ${diffDays}j`;
    return date.toLocaleDateString('fr-FR');
  }

  getPopularityClass(count: number): string {
    if (count >= 10) return 'very-popular';
    if (count >= 5) return 'popular';
    return 'normal';
  }
}
