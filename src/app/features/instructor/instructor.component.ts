import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationStart, Router, Event as RouterEvent, RouterModule } from '@angular/router';
import { routes } from '../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeatherIconModule } from '../../shared/module/feather.module';
import { SharedModule } from 'primeng/api';
import { InstructorSidebarComponent } from './common/instructor-sidebar/instructor-sidebar.component';
import { AiAgentsService } from '../../shared/service/ai/ai-agents.service';
import { firstValueFrom } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from '../../shared/service/course/course.service';
import { QuizService } from '../../shared/service/quiz/quiz.service';
import { AuthService } from '../../shared/service/auth/auth.service';
import { NotificationActionsService } from '../../shared/service/notification/notification-actions.service';

@Component({
    selector: 'app-instructor',
    templateUrl: './instructor.component.html',
    styleUrls: ['./instructor.component.scss'],
    imports: [
      CommonModule,
      FormsModule,
      FeatherIconModule,
      RouterModule,
      SharedModule,
      InstructorSidebarComponent
    ],
})
export class InstructorComponent implements OnInit, OnDestroy {
  public routes = routes;
  last = '';
  userName = '';
  currentInstructorPageKey = 'instructor-dashboard';

  private readonly instructorPageIcons: Record<string, string> = {
    'instructor-dashboard': 'fa-solid fa-table-columns',
    'instructor-course': 'fa-solid fa-book-open',
    'add-course': 'fa-solid fa-circle-plus',
    'edit-course': 'fa-solid fa-pen-to-square',
    'instructor-course-detail': 'fa-solid fa-book',
    'students-grid': 'fa-solid fa-users',
    'students-list': 'fa-solid fa-users',
    'students-details': 'fa-solid fa-user',
    'instructor-quiz': 'fa-solid fa-award',
    'instructor-quiz-questions': 'fa-solid fa-circle-question',
    'instructor-quiz-results': 'fa-solid fa-chart-column',
    'instructor-quiz-details': 'fa-solid fa-clipboard-list',
    'instructor-message': 'fa-solid fa-comments',
    'notifications': 'fa-solid fa-bell',
    'instructor-payouts': 'fa-solid fa-wallet',
    'instructor-tickets': 'fa-solid fa-ticket',
    'instructor-certificate': 'fa-solid fa-certificate',
    'instructor-profile': 'fa-solid fa-user',
    'instructor-detection': 'fa-solid fa-shield-halved',
    'instructor-analytics': 'fa-solid fa-chart-line',
    'instructor-settings': 'fa-solid fa-gear',
    'instructor-change-password': 'fa-solid fa-key',
    'instructor-social-profiles': 'fa-solid fa-hashtag',
    'instructor-setting-notifications': 'fa-solid fa-bell',
    'instructor-setting-withdraw': 'fa-solid fa-credit-card'
  };

  private readonly instructorPageHeaders: Record<string, { title: string; subtitle: string; chip: string }> = {
    'instructor-dashboard': {
      title: 'Tableau de bord',
      subtitle: 'Vue globale de votre activite pedagogique.',
      chip: 'Dashboard'
    },
    'instructor-course': {
      title: 'Gestion des cours',
      subtitle: 'Creez, mettez a jour et suivez vos contenus.',
      chip: 'Cours'
    },
    'add-course': {
      title: 'Nouveau cours',
      subtitle: 'Construisez une experience d apprentissage claire et engageante.',
      chip: 'Creation'
    },
    'edit-course': {
      title: 'Edition du cours',
      subtitle: 'Ajustez votre cours sans perdre votre progression.',
      chip: 'Edition'
    },
    'instructor-course-detail': {
      title: 'Detail du cours',
      subtitle: 'Controlez la structure, les chapitres et les ressources.',
      chip: 'Contenu'
    },
    'students-grid': {
      title: 'Etudiants',
      subtitle: 'Suivez vos apprenants et adaptez votre accompagnement.',
      chip: 'Communaute'
    },
    'students-list': {
      title: 'Etudiants',
      subtitle: 'Visualisez rapidement la liste de vos apprenants actifs.',
      chip: 'Communaute'
    },
    'instructor-quiz': {
      title: 'Quiz',
      subtitle: 'Creez des evaluations pertinentes pour vos cours.',
      chip: 'Evaluation'
    },
    'instructor-quiz-questions': {
      title: 'Questions du quiz',
      subtitle: 'Affinez les questions pour une evaluation de qualite.',
      chip: 'Evaluation'
    },
    'instructor-quiz-results': {
      title: 'Resultats des quiz',
      subtitle: 'Analysez les performances pour mieux guider vos etudiants.',
      chip: 'Evaluation'
    },
    'instructor-quiz-details': {
      title: 'Detail tentative quiz',
      subtitle: 'Examinez les reponses et les axes d amelioration.',
      chip: 'Evaluation'
    },
    'instructor-message': {
      title: 'Messages',
      subtitle: 'Restez proche de vos etudiants avec des echanges fluides.',
      chip: 'Communication'
    },
    'notifications': {
      title: 'Notifications',
      subtitle: 'Gardez la visibilite sur chaque action importante.',
      chip: 'Suivi'
    },
    'instructor-payouts': {
      title: 'Revenus',
      subtitle: 'Suivez vos gains et votre progression financiere.',
      chip: 'Finance'
    },
    'instructor-tickets': {
      title: 'Support',
      subtitle: 'Centralisez et traitez vos demandes d assistance.',
      chip: 'Support'
    },
    'instructor-certificate': {
      title: 'Certificats',
      subtitle: 'Generez et gerez les certificats de vos apprenants.',
      chip: 'Certification'
    },
    'instructor-profile': {
      title: 'Mon profil',
      subtitle: 'Mettez en valeur votre identite et votre expertise.',
      chip: 'Compte'
    },
    'instructor-detection': {
      title: 'Detection IA',
      subtitle: 'Supervisez la qualite et la conformite pedagogique.',
      chip: 'IA'
    },
    'instructor-analytics': {
      title: 'Analytics IA',
      subtitle: 'Transformez vos donnees en decisions pedagogiques.',
      chip: 'IA'
    },
    'instructor-settings': {
      title: 'Parametres du compte',
      subtitle: 'Gerez votre compte et vos preferences en toute simplicite.',
      chip: 'Parametres'
    },
    'instructor-change-password': {
      title: 'Securite du compte',
      subtitle: 'Renforcez la securite avec un mot de passe a jour.',
      chip: 'Parametres'
    },
    'instructor-social-profiles': {
      title: 'Profils sociaux',
      subtitle: 'Connectez vos reseaux pour renforcer votre visibilite.',
      chip: 'Parametres'
    },
    'instructor-setting-notifications': {
      title: 'Preferences de notification',
      subtitle: 'Choisissez ce que vous souhaitez recevoir et quand.',
      chip: 'Parametres'
    },
    'instructor-setting-withdraw': {
      title: 'Retraits',
      subtitle: 'Configurez la gestion de vos retraits en toute clarte.',
      chip: 'Parametres'
    }
  };

  get showInstructorPageHero(): boolean {
    return this.currentInstructorPageKey !== 'instructor-dashboard' && this.currentInstructorPageKey !== 'students-details';
  }

  get instructorPageHero(): { title: string; subtitle: string; chip: string } {
    return this.instructorPageHeaders[this.currentInstructorPageKey] || {
      title: 'Espace instructeur',
      subtitle: 'Pilotez vos activites avec une vue claire et moderne.',
      chip: 'Instructeur'
    };
  }

  get instructorPageIconClass(): string {
    return this.instructorPageIcons[this.currentInstructorPageKey] || 'fa-solid fa-book-open';
  }

  get showHeaderNewCourseButton(): boolean {
    return this.currentInstructorPageKey === 'instructor-course';
  }

  get showHeaderNotificationButtons(): boolean {
    return this.currentInstructorPageKey === 'notifications';
  }

  get userInitials(): string {
    return (this.userName || 'I').split(' ').map(p => p.charAt(0)).join('').toUpperCase().slice(0, 2);
  }
  private readonly instructorAiModeLabel: Record<'quiz' | 'plan' | 'copilot' | 'audit', string> = {
    quiz: 'Quiz pédagogique',
    plan: 'Plan de cours',
    copilot: 'Copilot Instructor',
    audit: 'Audit de cours'
  };

  // ── Notes ──────────────────────────────────────────────────────────────────
  showNotesPanel = false;
  showInstructorAiPanel = false;
  instructorAiBusy = false;
  instructorAiHistory: Array<{ role: 'user' | 'assistant'; content: string }> = [];
  instructorAiMode: 'quiz' | 'plan' | 'copilot' | 'audit' = 'copilot';
  instructorAiInput = '';
  instructorAiLevel = 'Intermédiaire';
  instructorAiDuration = '4 semaines';
  instructorAiObjectives = '';
  instructorAiFormat = 'structuré';
  instructorNote = '';
  noteSaved = false;
  private noteSaveTimer: any;
  instructorCoursesKnowledge: any[] = [];
  instructorQuizzesKnowledge: any[] = [];
  instructorKnowledgeLoaded = false;
  selectedAuditCourseId: number | null = null;

  // ✅ Modal de vérification password pour switch vers student
  showSwitchToStudentModal = false;
  switchToStudentPassword = '';
  switchToStudentError = '';
  switchingToStudent = false;

  ngOnInit(): void {
    this.userName = localStorage.getItem('fullName') || 'Instructor';
    this.instructorNote = localStorage.getItem('instructor-general-note') ?? '';
    this.loadInstructorKnowledge();
  }

  ngOnDestroy(): void {
    clearTimeout(this.noteSaveTimer);
  }

  toggleNotesPanel(): void {
    this.showNotesPanel = !this.showNotesPanel;
  }

  openInstructorAiAssistant(): void {
    this.showInstructorAiPanel = !this.showInstructorAiPanel;
  }

  private loadInstructorKnowledge(): void {
    this.courseService.getMyCourses().subscribe({
      next: (courses) => {
        this.instructorCoursesKnowledge = Array.isArray(courses) ? courses : [];
        this.instructorKnowledgeLoaded = true;
      },
      error: () => {
        this.instructorCoursesKnowledge = [];
      }
    });

    this.quizService.getInstructorQuizzes().subscribe({
      next: (quizzes) => {
        this.instructorQuizzesKnowledge = Array.isArray(quizzes) ? quizzes : [];
      },
      error: () => {
        this.instructorQuizzesKnowledge = [];
      }
    });
  }

  private buildInstructorKnowledgeContext(): {
    instructorKnowledgeLoaded: boolean;
    courseCount: number;
    quizCount: number;
    instructorCoursesSnapshot: Array<Record<string, any>>;
    instructorQuizzesSnapshot: Array<Record<string, any>>;
    instructorCatalogSummary: string;
  } {
    const courseSnapshot = this.instructorCoursesKnowledge.slice(0, 6).map((course: any) => {
      const sections = Array.isArray(course?.sections) ? course.sections : [];
      const lessons = sections.flatMap((section: any) => Array.isArray(section?.lessons) ? section.lessons : []);
      const lessonTypes = Array.from(new Set(lessons.map((lesson: any) => String(lesson?.lessonType || '').trim()).filter(Boolean)));
      const sampleLessons = lessons.slice(0, 5).map((lesson: any) => String(lesson?.title || '').trim()).filter(Boolean);

      return {
        id: course?.id,
        title: course?.title || 'Cours sans titre',
        level: course?.level || 'N/A',
        sectionsCount: sections.length,
        lessonsCount: lessons.length,
        lessonTypes,
        sampleLessons
      };
    });

    const quizSnapshot = this.instructorQuizzesKnowledge.slice(0, 8).map((quiz: any) => ({
      id: quiz?.id,
      title: quiz?.title || quiz?.quizTitle || 'Quiz sans titre',
      courseTitle: quiz?.courseTitle || quiz?.courseName || 'Cours non spécifié',
      lessonTitle: quiz?.lessonTitle || null,
      questionsCount: Array.isArray(quiz?.questions) ? quiz.questions.length : (quiz?.questionCount ?? null)
    }));

    const summary = [
      `Cours instructeur: ${this.instructorCoursesKnowledge.length}`,
      `Quiz instructeur: ${this.instructorQuizzesKnowledge.length}`,
      ...courseSnapshot.slice(0, 3).map((course: any) =>
        `${course.title} (sections=${course.sectionsCount}, leçons=${course.lessonsCount}, types=${(course.lessonTypes || []).join('/') || 'N/A'})`
      )
    ].join(' | ');

    return {
      instructorKnowledgeLoaded: this.instructorKnowledgeLoaded,
      courseCount: this.instructorCoursesKnowledge.length,
      quizCount: this.instructorQuizzesKnowledge.length,
      instructorCoursesSnapshot: courseSnapshot,
      instructorQuizzesSnapshot: quizSnapshot,
      instructorCatalogSummary: summary
    };
  }

  formatInstructorMessage(markdown: string): string {
    if (!markdown) return '';
    let html = markdown;
    // Headers (###)
    html = html.replace(/^#### (.+)$/gm, '<h5 class="ai-msg__section-title">$1</h5>');
    html = html.replace(/^### (.+)$/gm, '<h4 class="ai-msg__section-title">$1</h4>');
    html = html.replace(/^## (.+)$/gm, '<h3 class="ai-msg__section-title">$1</h3>');
    // Bold & italic
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
    // Bullet lists
    html = html.replace(/^[\s]*[\•\-\*] (.+)$/gm, '<li class="ai-msg__list-item">$1</li>');
    html = html.replace(/(<li class="ai-msg__list-item">.+<\/li>)/s, '<ul class="ai-msg__list">$1</ul>');
    // Numbered lists  
    html = html.replace(/^\d+\. (.+)$/gm, '<li class="ai-msg__list-item">$1</li>');
    // Pipe tables
    html = html.replace(/\|(.+)\|/g, (match) => {
      if (match.includes('---')) return match;
      const cells = match.split('|').filter(c => c.trim());
      return '<tr class="ai-msg__table-row">' + cells.map(c => `<td class="ai-msg__table-cell">${c.trim()}</td>`).join('') + '</tr>';
    });
    html = html.replace(/(<tr class="ai-msg__table-row">.+<\/tr>)/s, '<table class="ai-msg__table">$1</table>');
    // Line breaks
    html = html.replace(/\n\n/g, '</p><p>');
    html = '<p>' + html + '</p>';
    // Code blocks
    html = html.replace(/`(.+?)`/g, '<code class="ai-msg__code">$1</code>');
    // Horizontal rules
    html = html.replace(/^---$/gm, '<hr class="ai-msg__divider">');
    // Emojis remain as-is
    return html.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
  }

  async sendInstructorAiMessage(): Promise<void> {
    const subject = this.instructorAiInput.trim();
    if (!subject || this.instructorAiBusy) {
      return;
    }

    const target = this.instructorAiMode;
    const requestDetails = {
      subject,
      level: this.instructorAiLevel,
      duration: this.instructorAiDuration,
      objectives: this.instructorAiObjectives.trim(),
      format: this.instructorAiFormat
    };

    this.instructorAiInput = '';
    this.instructorAiHistory.push({
      role: 'user',
      content: `[${this.instructorAiModeLabel[target]}] ${subject}`
    });
    this.instructorAiBusy = true;

    try {
      const userId = localStorage.getItem('id') || undefined;
      const sessionId = localStorage.getItem('sessionId') || undefined;

      let finalText = 'Aucune réponse reçue.';
      if (target === 'copilot' || target === 'audit') {
        const copilotMessage = target === 'audit'
          ? this.buildInstructorAuditPrompt(requestDetails)
          : subject;

        const copilotResponse = await firstValueFrom(this.aiAgentsService.instructorCopilot({
          message: copilotMessage,
          userId,
          sessionId,
          history: this.instructorAiHistory.slice(-6),
          context: {
            target,
            ...requestDetails,
            ...this.buildInstructorKnowledgeContext()
          }
        }));

        finalText = copilotResponse.reply?.trim() || 'Aucune réponse reçue.';
      } else {
        const structuredTarget: 'quiz' | 'plan' = target === 'quiz' ? 'quiz' : 'plan';
        const response = target === 'quiz'
          ? await firstValueFrom(this.aiAgentsService.instructorQuiz({
              message: this.buildInstructorPrompt(structuredTarget, requestDetails),
              userId,
              sessionId,
              history: this.instructorAiHistory.slice(-6),
              context: { target, ...requestDetails, ...this.buildInstructorKnowledgeContext() }
            }))
          : await firstValueFrom(this.aiAgentsService.instructorPlan({
              message: this.buildInstructorPrompt(structuredTarget, requestDetails),
              userId,
              sessionId,
              history: this.instructorAiHistory.slice(-6),
              context: { target, ...requestDetails, ...this.buildInstructorKnowledgeContext() }
            }));

        finalText = response.reply?.trim() || 'Aucune réponse reçue.';
      }

      this.instructorAiHistory.push({ role: 'assistant', content: finalText });
    } catch {
      this.toastr.error('Assistant IA indisponible pour le moment.');
      this.instructorAiHistory.push({
        role: 'assistant',
        content: 'Assistant IA indisponible pour le moment. Réessayez dans quelques instants.'
      });
    } finally {
      this.instructorAiBusy = false;
    }
  }

  async copyLastInstructorAiReply(): Promise<void> {
    const lastAssistant = [...this.instructorAiHistory].reverse().find(m => m.role === 'assistant');
    if (!lastAssistant?.content) {
      return;
    }
    await navigator.clipboard.writeText(lastAssistant.content);
    this.toastr.success('Dernière réponse IA copiée.');
  }

  private buildInstructorPrompt(
    target: 'quiz' | 'plan',
    details: { subject: string; level: string; duration: string; objectives: string; format: string }
  ): string {
    const base = [
      `Type de livrable: ${target === 'quiz' ? 'Quiz pédagogique' : 'Plan de cours'}`,
      `Sujet: ${details.subject}`,
      `Niveau: ${details.level}`,
      `Durée: ${details.duration}`,
      `Format souhaité: ${details.format}`
    ];

    if (details.objectives) {
      base.push(`Objectifs pédagogiques: ${details.objectives}`);
    }

    if (target === 'quiz') {
      base.push(
        'Contraintes: 12 questions variées (QCM + Vrai/Faux + cas pratique court), corrigé détaillé, barème sur 20, erreurs fréquentes à éviter.',
        'Sortie attendue: titres clairs, sections séparées, directement exploitable en classe.'
      );
    } else {
      base.push(
        'Contraintes: progression semaine par semaine, objectifs mesurables, activités pratiques, mini-évaluations et livrable final.',
        'Sortie attendue: plan structuré avec actions concrètes pour l’instructeur.'
      );
    }

    return base.join('\n');
  }

  private buildInstructorAuditPrompt(
    details: { subject: string; level: string; duration: string; objectives: string; format: string }
  ): string {
    const catalog = this.buildInstructorKnowledgeContext();

    // Si un cours spécifique est sélectionné, construire un contexte détaillé de ce cours
    let courseContext = '';
    if (this.selectedAuditCourseId !== null) {
      const selectedCourse = this.instructorCoursesKnowledge.find(
        (c: any) => c.id === this.selectedAuditCourseId
      );
      if (selectedCourse) {
        const sections = Array.isArray(selectedCourse.sections) ? selectedCourse.sections : [];
        const lessons = sections.flatMap((s: any) => Array.isArray(s.lessons) ? s.lessons : []);
        const lessonTypes = Array.from(new Set(lessons.map((l: any) => String(l?.lessonType || '')).filter(Boolean)));
        const quizzesForCourse = this.instructorQuizzesKnowledge.filter(
          (q: any) => q?.courseId === this.selectedAuditCourseId || q?.courseTitle === selectedCourse.title
        );
        courseContext = [
          `Cours ciblé: "${selectedCourse.title}"`,
          `Niveau: ${selectedCourse.level || 'N/A'}`,
          `Sections: ${sections.length} | Leçons: ${lessons.length}`,
          `Types de contenu: ${lessonTypes.join(', ') || 'N/A'}`,
          `Quiz liés: ${quizzesForCourse.length}`,
          `Sections detail: ${sections.map((s: any) => `"${s.title}" (${Array.isArray(s.lessons) ? s.lessons.length : 0} leçons)`).join(', ')}`
        ].join('\n');
      }
    } else {
      courseContext = `Résumé catalogue global: ${catalog.instructorCatalogSummary}`;
    }

    const scopeLabel = this.selectedAuditCourseId !== null
      ? `Audit ciblé sur UN cours spécifique`
      : `Audit global du catalogue (${catalog.courseCount} cours)`;

    return [
      `Mode: Audit de cours instructeur — ${scopeLabel}.`,
      `Sujet / Axe d'analyse: ${details.subject}`,
      `Niveau cible: ${details.level}`,
      `Durée cible: ${details.duration}`,
      `Objectifs déclarés: ${details.objectives || 'non précisés'}`,
      '',
      '--- Données réelles du cours ---',
      courseContext,
      '--- Fin données ---',
      '',
      'Analyse demandée:',
      '- Identifier les écarts pédagogiques sur structure cours/quiz.',
      '- Détecter les risques: manque d\'évaluation, surcharge contenu, faible progressivité.',
      '- Proposer un plan d\'amélioration priorisé (quick wins + moyen terme).',
      '',
      'Format de sortie obligatoire:',
      '## Diagnostic ciblé',
      '## Écarts détectés (Top 5)',
      '## Plan d\'action priorisé (7/30/60 jours)',
      '## Correctifs quiz & contenu',
      '## KPI de suivi et seuils d\'alerte',
      '## Prochaine action immédiate'
    ].join('\n');
  }

  private formatAiReplyAsHtml(text: string): string {
    const quizHtml = this.tryRenderQuizJson(text);
    if (quizHtml) {
      return quizHtml;
    }

    const safeText = this.escapeHtml(text);
    const formatted = safeText
      .replace(/^###\s?(.*)$/gm, '<h6 class="mt-3 mb-2">$1</h6>')
      .replace(/^##\s?(.*)$/gm, '<h6 class="mt-3 mb-2">$1</h6>')
      .replace(/^#\s?(.*)$/gm, '<h6 class="mt-3 mb-2">$1</h6>')
      .replace(/^[-*]\s+(.*)$/gm, '<li>$1</li>')
      .replace(/^(\d+)\.\s+(.*)$/gm, '<li><strong>$1.</strong> $2</li>')
      .replace(/\n{2,}/g, '</p><p class="mb-2">')
      .replace(/\n/g, '<br/>');

    const normalized = formatted.replace(/(<li>.*?<\/li>)/gs, '<ul class="mb-2 ps-4">$1</ul>');
    return `<div class="text-start" style="max-height:60vh;overflow:auto"><p class="mb-2">${normalized}</p></div>`;
  }

  private tryRenderQuizJson(text: string): string | null {
    const trimmed = (text || '').trim();
    if (!trimmed.startsWith('{') || !trimmed.includes('"questions"')) {
      return null;
    }

    try {
      const parsed = JSON.parse(trimmed) as {
        quizTitle?: string;
        questions?: Array<{
          type?: string;
          question?: string;
          options?: string[];
          correctAnswer?: string;
          explanation?: string;
        }>;
      };

      if (!Array.isArray(parsed.questions) || parsed.questions.length === 0) {
        return null;
      }

      const title = this.escapeHtml(parsed.quizTitle || 'Quiz pédagogique');
      const questionBlocks = parsed.questions.slice(0, 20).map((item, idx) => {
        const question = this.escapeHtml(item.question || `Question ${idx + 1}`);
        const qType = this.escapeHtml(item.type || 'QUESTION');
        const correct = this.escapeHtml(item.correctAnswer || 'N/A');
        const explanation = this.escapeHtml(item.explanation || 'Pas d’explication fournie.');
        const options = Array.isArray(item.options) ? item.options : [];
        const optionsHtml = options.length
          ? `<ul class="mb-2 ps-4">${options.map(opt => `<li>${this.escapeHtml(opt)}</li>`).join('')}</ul>`
          : '<p class="mb-2 text-muted">Aucune option fournie.</p>';

        return `
          <div class="border rounded p-3 mb-3">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <strong>Q${idx + 1}</strong>
              <span class="badge bg-light text-dark">${qType}</span>
            </div>
            <p class="mb-2"><strong>${question}</strong></p>
            ${optionsHtml}
            <p class="mb-1"><strong>Réponse correcte:</strong> ${correct}</p>
            <p class="mb-0 text-muted"><strong>Explication:</strong> ${explanation}</p>
          </div>
        `;
      }).join('');

      return `
        <div class="text-start" style="max-height:60vh;overflow:auto">
          <div class="border rounded p-3 mb-3 bg-light">
            <h5 class="mb-1">${title}</h5>
            <div class="small text-muted">${parsed.questions.length} questions générées</div>
          </div>
          ${questionBlocks}
        </div>
      `;
    } catch {
      return null;
    }
  }

  private escapeHtml(text: string): string {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  saveNote(): void {
    localStorage.setItem('instructor-general-note', this.instructorNote);
    this.noteSaved = true;
    clearTimeout(this.noteSaveTimer);
    this.noteSaveTimer = setTimeout(() => { this.noteSaved = false; }, 2000);
  }

  constructor(
    private router: Router,
    private aiAgentsService: AiAgentsService,
    private toastr: ToastrService,
    private courseService: CourseService,
    private quizService: QuizService,
    private authService: AuthService,
    private notificationActionsService: NotificationActionsService
  ) {
    this.updateLastFromUrl(this.router.url);
    this.router.events.subscribe((data: RouterEvent) => {
      if (data instanceof NavigationStart) {
        this.updateLastFromUrl(data.url);
      }
    });
  }

  markAllNotificationsFromHeader(): void {
    this.notificationActionsService.triggerMarkAllAsRead();
  }

  deleteAllNotificationsFromHeader(): void {
    this.notificationActionsService.triggerDeleteAll();
  }

  private updateLastFromUrl(url: string): void {
    const parts = url.split('?')[0].split('#')[0].split('/');
    const routeParts = parts.filter(Boolean);
    const section = routeParts[1] || 'instructor-dashboard';
    const subSection = routeParts[2] || '';

    if (section === 'settings') {
      this.currentInstructorPageKey = subSection || 'instructor-settings';
    } else if (section === 'edit-course') {
      this.currentInstructorPageKey = 'edit-course';
    } else if (section === 'add-course') {
      this.currentInstructorPageKey = 'add-course';
    } else {
      this.currentInstructorPageKey = section;
    }

    const lastPart = parts[2]?.replace('instructor-', '').trim();
    this.last =parts[2]
    if (lastPart === 'profile') {
      this.last = 'My Profile';
    } else if (lastPart === 'course') {
      this.last = 'My Courses';
    } else if (lastPart === 'chat') {
      this.last = 'Messages';
    } else if (lastPart === 'quiz-attempts'){
      this.last = 'My Quiz Attempts';
    }
    else if (lastPart === 'qa'){
      this.last = 'Question & Answer';
    }
    else if (lastPart === 'quiz-results'){
      this.last = 'Quiz Results';
    }
    else if (lastPart === 'students-grid'){
      this.last = 'Students Grid';
    }
    else if (lastPart === 'students-list'){
      this.last = 'Students List';
    }
    else if (lastPart === 'quiz-questions'){
      this.last = 'Quiz Questions';
    }
   
    
    else {
      this.last = lastPart;
    }
  }

  /** Afficher la modal pour saisir le mot de passe avant de basculer vers étudiant */
  switchToStudent(): void {
    this.switchToStudentPassword = '';
    this.switchToStudentError = '';
    this.showSwitchToStudentModal = true;
  }

  /** Confirmer et basculer vers le rôle étudiant après vérification du password */
  confirmSwitchToStudent(): void {
    if (!this.switchToStudentPassword.trim()) {
      this.switchToStudentError = 'Mot de passe requis';
      return;
    }

    this.switchingToStudent = true;
    this.switchToStudentError = '';

    this.authService.switchRole('STUDENT', this.switchToStudentPassword).subscribe({
      next: (resp: any) => {
        localStorage.setItem('token', resp.token);
        localStorage.setItem('role', resp.role);
        if (resp.secondaryRoles) {
          localStorage.setItem('secondaryRoles', JSON.stringify(resp.secondaryRoles));
        }
        this.authService.setCurrentRole(resp.role);
        this.authService.scheduleAutoLogout();
        // Fermer la modal
        this.showSwitchToStudentModal = false;
        this.switchToStudentPassword = '';
        this.switchingToStudent = false;
        this.router.navigate([this.routes.students_Dashboard]);
      },
      error: (err: any) => {
        this.switchingToStudent = false;
        this.switchToStudentError = err.error?.message || err.error || 'Erreur lors du changement de rôle';
      }
    });
  }
  }