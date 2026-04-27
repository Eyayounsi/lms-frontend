import DOMPurify from 'dompurify';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {
  Component, OnInit, OnDestroy, ViewChild, ElementRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CourseService } from '../../../shared/service/course/course.service';
import { NoteService } from '../../../shared/service/note/note.service';
import { QaService } from '../../../shared/service/qa/qa.service';
import { DetectionService, DetectionResult } from '../../../shared/service/detection/detection.service';
import { AiAgentsService } from '../../../shared/service/ai/ai-agents.service';
import { routes } from '../../../shared/service/routes/routes';
import { SafeUrlPipe } from '../../../shared/pipe/safe-url.pipe';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { Subscription, firstValueFrom, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-course-watch',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, SafeUrlPipe],
  templateUrl: './course-watch.component.html',
  styleUrl: './course-watch.component.scss'
})
export class CourseWatchComponent implements OnInit, OnDestroy {

  sanitizedArticleContent: SafeHtml | null = null;

  @ViewChild('videoPlayer') videoRef!: ElementRef<HTMLVideoElement>;
  @ViewChild('cameraVideo') cameraVideoRef!: ElementRef<HTMLVideoElement>;
  @ViewChild('cameraCanvas', { static: false }) cameraCanvasRef!: ElementRef<HTMLCanvasElement>;

  routes = routes;

  //  IDs depuis query params
  courseId: number | null = null;
  activeLessonId: number | null = null;

  //  Données du cours
  course: any = null;
  sections: any[] = [];
  allLessons: any[] = [];
  activeLesson: any = null;

  //  Progression
  courseProgress: any = null;
  lessonProgress: any = null;
  lessonCompleted = false;
  completedLessons = new Set<number>(); // track across navigation

  //  Autosave timer
  private saveInterval: any = null;
  private readonly SAVE_INTERVAL_MS = 30000;

  //  UI
  loading = true;
  errorMsg = '';
  activeTab = 'overview';

  //  Reviews
  reviews: any[] = [];
  myReview: any = null;
  myRating = 5;
  myComment = '';
  reviewSubmitting = false;
  reviewMsg = '';
  reviewError = '';
  readonly stars = [1, 2, 3, 4, 5];

  //  Notes personnelles (localStorage)
  courseNote = '';        // note globale du cours
  lessonNote = '';        // note de la leçon active
  courseNoteSaved = false;
  lessonNoteSaved = false;
  showNotesPanel = false;
  showStudentAiPanel = false;
  studentAiBusy = false;
  studentAiHistory: Array<{ role: 'user' | 'assistant'; content: string }> = [];
  studentAiInput = '';
  private noteSaveTimer: any = null;
  private lessonNoteSaveTimer: any = null;

  // ═══ Q&A ═══
  currentUserId = 0;
  qaQuestions: any[] = [];
  qaLoading = false;
  qaNewTitle = '';
  qaNewBody = '';
  qaSubmitting = false;
  qaActiveQuestion: any = null;
  qaAnswerText = '';
  qaAnswerSubmitting = false;

  // ═══ Q&A Edit ═══
  editingQuestionId: number | null = null;
  editQuestionTitle = '';
  editQuestionBody = '';
  editingAnswerId: number | null = null;
  editAnswerBody = '';

  // ═══ Camera Detection ═══
  cameraActive = false;
  cameraStream: MediaStream | null = null;
  cameraInterval: any = null;
  attentionScore = 100;
  latestDetection: DetectionResult | null = null;
  cameraRemarks: { type: string; message: string; time: Date }[] = [];
  private detectionSub: Subscription | null = null;
  private cameraPromptShown = false;

  // ═══ Session Stats & Tips ═══
  sessionStartTime: Date | null = null;
  showSessionStats = false;
  attentionHistory: { score: number; time: Date }[] = [];
  sessionTypeCounts: Record<string, number> = {};
  currentTip: string | null = null;
  private tipTimer: any = null;
  private ttsTimer: any = null;
  private destroy$ = new Subject<void>();
  private attentionSampleCounter = 0;

  // ═══ Breathing Exercise ═══
  breathingActive = false;
  breathingPhase: 'inhale' | 'hold' | 'exhale' = 'inhale';
  breathingTimeLeft = 0;
  private breathingTimer: any = null;
  private breathingDismissed = false;
  breathingSuggested = false;

  // ═══ Micro-coaching ═══
  showMicroCoaching = true;

  // ═══ Audio notifications ═══
  private audioCtx: AudioContext | null = null;
  soundEnabled = true;

  // ═══ Text-to-Speech ═══
  ttsEnabled = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService,
    private noteService: NoteService,
    private qaService: QaService,
    private detectionService: DetectionService,
    private aiAgentsService: AiAgentsService,
    private toastr: ToastrService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.currentUserId = parseInt(localStorage.getItem('id') || '0', 10);
    this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe(params => {
      const cId = params['courseId'];
      const lId = params['lessonId'];
      if (cId) {
        this.courseId = +cId;
        this.loadCourseContent(lId ? +lId : null);
      } else {
        this.errorMsg = 'Aucun cours spécifié.';
        this.loading = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.saveCurrentProgress(); // Save last position before leaving
    this.clearSaveInterval();
    if (this.noteSaveTimer) clearTimeout(this.noteSaveTimer);
    if (this.lessonNoteSaveTimer) clearTimeout(this.lessonNoteSaveTimer);
    this.stopBreathingExercise();
    this.stopCamera();
    if (this.audioCtx) { this.audioCtx.close(); this.audioCtx = null; }
    window.speechSynthesis?.cancel();
  }

  //  Chargement 
  loadCourseContent(firstLessonId: number | null): void {
    if (!this.courseId) return;

    // Charger contenu + progression en parallèle
    this.courseService.getCourseContent(this.courseId).subscribe({
      next: (data) => {
        this.course = data;
        this.sections = data.sections || [];
        this.allLessons = this.sections.flatMap((s: any) => s.lessons || []);

        // Charger les notes sauvegardées pour ce cours (API)
        this.noteService.getCourseNote(this.courseId!).subscribe({
          next: (n) => { this.courseNote = n?.content || ''; },
          error: () => { this.courseNote = ''; }
        });

        const lessonToLoad = firstLessonId
          || data.lastLessonId
          || (this.allLessons[0]?.id ?? null);

        if (lessonToLoad) {
          this.selectLesson(lessonToLoad);
        } else {
          this.loading = false;
        }

        // Prompt caméra — une seule fois par cours par session navigateur
        const camKey = `camera_prompt_${this.courseId}`;
        if (!sessionStorage.getItem(camKey)) {
          sessionStorage.setItem(camKey, '1');
          setTimeout(() => this.promptCamera(), 1000);
        }
      },
      error: (e) => {
        if (e?.status === 403 || e?.status === 400) {
          this.errorMsg = e?.error?.message || 'Vous devez acheter ce cours pour y accéder.';
        } else {
          this.errorMsg = 'Erreur lors du chargement du cours.';
        }
        this.loading = false;
      }
    });

    this.courseService.getCourseProgress(this.courseId).subscribe({
      next: (progress) => {
        this.courseProgress = progress;
        // Pré-remplir les leçons complétées pour le verrouillage séquentiel
        if (progress?.completedLessonIds) {
          (progress.completedLessonIds as number[]).forEach(id => this.completedLessons.add(id));
        }
      },
      error: () => {}
    });

    this.loadReviews();
  }

  //  Sélection d'une leçon
  selectLesson(lessonId: number): void {
    if (this.isLessonLocked(lessonId)) {
      this.toastr.warning('Terminez la leçon précédente pour débloquer celle-ci.', 'Leçon verrouillée');
      return;
    }
    this.activeLessonId = lessonId;
    this.activeLesson = this.allLessons.find(l => l.id === lessonId) || null;
    this.lessonCompleted = false;
    this.loading = true;
    this.lessonNoteSaved = false;
    this.courseNoteSaved = false;

    // Sanitize article content with DOMPurify if lesson is TEXT
    if (this.activeLesson?.lessonType === 'TEXT' && this.activeLesson.articleContent) {
      const clean = DOMPurify.sanitize(this.activeLesson.articleContent, {USE_PROFILES: {html: true}});
      this.sanitizedArticleContent = this.sanitizer.bypassSecurityTrustHtml(clean);
    } else {
      this.sanitizedArticleContent = null;
    }

    // Charger la note de cette leçon (API)
    this.noteService.getLessonNote(lessonId).subscribe({
      next: (n) => { this.lessonNote = n?.content || ''; },
      error: () => { this.lessonNote = ''; }
    });

    this.clearSaveInterval();

    this.courseService.getLessonProgress(lessonId).subscribe({
      next: (progress) => {
        this.lessonProgress = progress;
        this.lessonCompleted = progress?.isCompleted || false;
        if (this.lessonCompleted) this.completedLessons.add(lessonId);
        this.loading = false;

        // Reprendre la vidéo là où on s'était arrêté
        if (this.activeLesson?.lessonType !== 'PDF') {
          setTimeout(() => {
            const video = this.videoRef?.nativeElement;
            if (video && progress?.watchedSeconds > 0) {
              video.currentTime = progress.watchedSeconds;
            }
          }, 200);
        }
        this.startAutoSave();
      },
      error: () => {
        this.lessonProgress = null;
        this.loading = false;
        this.startAutoSave();
      }
    });
  }

  //  Autosave toutes les 30 secondes 
  private startAutoSave(): void {
    if (this.activeLesson?.lessonType === 'VIDEO') {
      this.saveInterval = setInterval(() => {
        this.saveCurrentProgress();
      }, this.SAVE_INTERVAL_MS);
    }
  }

  private clearSaveInterval(): void {
    if (this.saveInterval) {
      clearInterval(this.saveInterval);
      this.saveInterval = null;
    }
  }

  saveCurrentProgress(): void {
    if (!this.activeLessonId) return;
    const video = this.videoRef?.nativeElement;
    const watched = video ? Math.floor(video.currentTime) : 0;
    this.courseService.saveProgress(this.activeLessonId, watched).subscribe({
      next: () => {},
      error: () => {}
    });
  }

  //  Fin de la vidéo 
  onVideoEnd(): void {
    if (!this.activeLessonId) return;
    this.courseService.markLessonCompleted(this.activeLessonId).subscribe({
      next: (progress) => {
        this.lessonCompleted = true;
        this.lessonProgress = progress;
        if (this.activeLessonId) this.completedLessons.add(this.activeLessonId);
        // Rafraîchir la progression globale
        this.courseService.getCourseProgress(this.courseId!).subscribe({
          next: (cp) => (this.courseProgress = cp),
          error: () => {}
        });
      },
      error: () => {}
    });
  }

  //  Marquer manuellement comme terminé 
  markCompleted(): void {
    if (!this.activeLessonId) return;

    // Vérifier si la leçon a un quiz obligatoire
    if (this.activeLesson?.hasQuiz && !this.lessonCompleted) {
      Swal.fire({
        icon: 'warning',
        title: 'Quiz obligatoire',
        html: `
          <p>Cette leçon contient un quiz obligatoire.</p>
          <p class="mb-0"><strong>Vous devez réussir le quiz avant de marquer cette leçon comme terminée.</strong></p>
        `,
        confirmButtonText: 'Faire le Quiz',
        showCancelButton: true,
        cancelButtonText: 'Annuler',
        confirmButtonColor: '#f59e0b'
      }).then(result => {
        if (result.isConfirmed && this.activeLesson?.quizId) {
          this.router.navigate(
            ['/student/student-quiz-questions', this.activeLesson.quizId],
            { queryParams: { courseId: this.courseId, lessonId: this.activeLesson.id } }
          );
        }
      });
      return;
    }

    // Si déjà terminé, proposer de décocher
    if (this.lessonCompleted) {
      this.markIncomplete();
      return;
    }

    // Marquer comme terminé
    this.courseService.markLessonCompleted(this.activeLessonId).subscribe({
      next: (progress) => {
        this.lessonCompleted = true;
        this.lessonProgress = progress;
        if (this.activeLessonId) this.completedLessons.add(this.activeLessonId);
        this.toastr.success('Leçon marquée comme terminée !');
        // Rafraîchir la progression globale
        this.courseService.getCourseProgress(this.courseId!).subscribe({
          next: (cp) => (this.courseProgress = cp),
          error: () => {}
        });
      },
      error: (err) => {
        // Gérer l'erreur de quiz obligatoire
        const errorMsg = err?.error?.message || err?.message || 'Erreur lors de la mise à jour';
        if (errorMsg.includes('quiz')) {
          Swal.fire({
            icon: 'error',
            title: 'Quiz obligatoire non réussi',
            text: errorMsg,
            confirmButtonText: 'Faire le Quiz',
            showCancelButton: true,
            cancelButtonText: 'Fermer',
            confirmButtonColor: '#f59e0b'
          }).then(result => {
            if (result.isConfirmed && this.activeLesson?.quizId) {
              this.router.navigate(
                ['/student/student-quiz-questions', this.activeLesson.quizId],
                { queryParams: { courseId: this.courseId, lessonId: this.activeLesson.id } }
              );
            }
          });
        } else {
          this.toastr.error(errorMsg);
        }
      }
    });
  }

  //  Démarquer comme non terminé (toggle)
  markIncomplete(): void {
    if (!this.activeLessonId) return;

    Swal.fire({
      title: 'Démarquer cette leçon ?',
      text: 'La leçon sera marquée comme non terminée et votre progression sera recalculée.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Oui, démarquer',
      cancelButtonText: 'Annuler',
      confirmButtonColor: '#6b7280'
    }).then(result => {
      if (result.isConfirmed) {
        this.courseService.markLessonIncomplete(this.activeLessonId!).subscribe({
          next: (progress) => {
            this.lessonCompleted = false;
            this.lessonProgress = progress;
            if (this.activeLessonId) this.completedLessons.delete(this.activeLessonId);
            this.toastr.info('Leçon démarquée comme non terminée');
            // Rafraîchir la progression globale
            this.courseService.getCourseProgress(this.courseId!).subscribe({
              next: (cp) => (this.courseProgress = cp),
              error: () => {}
            });
          },
          error: () => {
            this.toastr.error('Erreur lors de la mise à jour');
          }
        });
      }
    });
  }

  //  Aller à la leçon suivante
  goToNextLesson(): void {
    if (!this.activeLessonId) return;
    const idx = this.allLessons.findIndex(l => l.id === this.activeLessonId);
    if (idx >= 0 && idx < this.allLessons.length - 1) {
      this.selectLesson(this.allLessons[idx + 1].id);
    }
  }

  //  Aller au quiz ou à la leçon suivante selon le contexte
  goToNextOrQuiz(): void {
    if (!this.activeLesson) return;
    if (this.activeLesson.hasQuiz && this.activeLesson.quizId) {
      this.router.navigate(
        ['/student/student-quiz-questions', this.activeLesson.quizId],
        { queryParams: { courseId: this.courseId, lessonId: this.activeLesson.id } }
      );
    } else {
      this.goToNextLesson();
    }
  }

  goToPrevLesson(): void {
    if (!this.activeLessonId) return;
    const idx = this.allLessons.findIndex(l => l.id === this.activeLessonId);
    if (idx > 0) {
      this.selectLesson(this.allLessons[idx - 1].id);
    }
  }

  //  Utilitaires
  isLessonDone(lessonId: number): boolean {
    return this.completedLessons.has(lessonId);
  }

  isLessonLocked(lessonId: number): boolean {
    const idx = this.allLessons.findIndex(l => l.id === lessonId);
    if (idx <= 0) return false; // première leçon toujours accessible
    return !this.completedLessons.has(this.allLessons[idx - 1].id);
  }

  lessonStatus(lesson: any): 'active' | 'completed' | 'default' {
    if (lesson.id === this.activeLessonId) return 'active';
    if (this.completedLessons.has(lesson.id)) return 'completed';
    return 'default';
  }

  getSectionProgress(section: any): number {
    const lessons = section.lessons || [];
    if (!lessons.length) return 0;
    const done = lessons.filter((l: any) => this.completedLessons.has(l.id)).length;
    return Math.round((done / lessons.length) * 100);
  }

  get completionPercent(): number {
    return this.courseProgress?.completionPercentage || 0;
  }

  formatDuration(seconds: number): string {
    if (!seconds) return '';
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  getMediaUrl(path: string): string {
    if (!path) return '';
    if (path.startsWith('http')) return path;
    const clean = path.startsWith('/') ? path : '/' + path;
    return clean;
  }

  getSectionForLesson(lessonId: number): any {
    return this.sections.find(s => s.lessons?.some((l: any) => l.id === lessonId));
  }

  isLessonCompleted(lessonId: number): boolean {
    return this.activeLessonId === lessonId && this.lessonCompleted;
  }

  backToCourse(): void {
    if (this.courseId) {
      this.router.navigate([this.routes.courseListPublic]);
    }
  }

  // ═══════════════════════════════════════════════════════════════════════
  //  REVIEWS
  // ═══════════════════════════════════════════════════════════════════════

  loadReviews(): void {
    if (!this.courseId) return;
    this.courseService.getCourseReviews(this.courseId).subscribe({
      next: (data) => {
        this.reviews = data;
        // Détecter si l'étudiant a déjà soumis un avis (même myReview null au départ)
        const saved = localStorage.getItem(`my-review-course-${this.courseId}`);
        if (saved) {
          try {
            const parsed = JSON.parse(saved);
            this.myReview = parsed;
            this.myRating = parsed.rating || 5;
            this.myComment = parsed.comment || '';
          } catch { this.myReview = null; }
        }
      },
      error: () => {}
    });
  }

  submitReview(): void {
    if (!this.courseId || this.myRating < 1) return;
    this.reviewSubmitting = true;
    this.reviewMsg = '';
    this.reviewError = '';
    this.courseService.upsertReview(this.courseId, { rating: this.myRating, comment: this.myComment }).subscribe({
      next: (saved) => {
        this.reviewSubmitting = false;
        this.myReview = saved;
        this.reviewMsg = 'Votre avis a été publié avec succès !';
        localStorage.setItem(`my-review-course-${this.courseId}`, JSON.stringify(saved));
        // Recharger la liste
        this.loadReviews();
        setTimeout(() => (this.reviewMsg = ''), 3000);
      },
      error: () => {
        this.reviewSubmitting = false;
        this.reviewError = 'Erreur lors de la publication. Veuillez réessayer.';
      }
    });
  }

  deleteMyReview(): void {
    if (!this.courseId) return;
    this.courseService.deleteReview(this.courseId).subscribe({
      next: () => {
        this.myReview = null;
        this.myRating = 5;
        this.myComment = '';
        localStorage.removeItem(`my-review-course-${this.courseId}`);
        this.toastr.success('Avis supprimé avec succès.');
        this.loadReviews();
      },
      error: (err) => {
        // 400 = avis introuvable en base (cache localStorage désynchronisé)
        // On réinitialise l'état local pour corriger la désynchronisation
        if (err.status === 400 || err.status === 404) {
          this.myReview = null;
          this.myRating = 5;
          this.myComment = '';
          localStorage.removeItem(`my-review-course-${this.courseId}`);
          this.reviewError = '';
          this.loadReviews();
        } else {
          this.reviewError = 'Erreur lors de la suppression. Veuillez réessayer.';
        }
      }
    });
  }

  get isCourseDone(): boolean {
    return this.completionPercent >= 100;
  }

  // ═══════════════════════════════════════════════════════════════════════
  //  NOTES PERSONNELLES (localStorage)
  // ═══════════════════════════════════════════════════════════════════════

  saveNote(): void {
    if (!this.courseId) return;
    this.noteService.saveCourseNote(this.courseId, this.courseNote).subscribe({
      next: () => {
        this.courseNoteSaved = true;
        this.toastr.success('Note du cours sauvegardée');
        if (this.noteSaveTimer) clearTimeout(this.noteSaveTimer);
        this.noteSaveTimer = setTimeout(() => (this.courseNoteSaved = false), 2500);
      },
      error: () => {}
    });
  }

  saveLessonNote(): void {
    if (!this.activeLessonId) return;
    this.noteService.saveLessonNote(this.activeLessonId, this.lessonNote).subscribe({
      next: () => {
        this.lessonNoteSaved = true;
        this.toastr.success('Note de leçon sauvegardée');
        if (this.lessonNoteSaveTimer) clearTimeout(this.lessonNoteSaveTimer);
        this.lessonNoteSaveTimer = setTimeout(() => (this.lessonNoteSaved = false), 2500);
      },
      error: () => {}
    });
  }

  // ═══════════════════════════════════════════════════════════════════════
  //  Q&A par leçon / cours
  // ═══════════════════════════════════════════════════════════════════════

  loadQaQuestions(): void {
    if (!this.courseId) return;
    this.qaLoading = true;
    this.qaService.getQuestionsByCourse(this.courseId).subscribe({
      next: (data) => { this.qaQuestions = data; this.qaLoading = false; },
      error: () => { this.qaLoading = false; }
    });
  }

  submitQuestion(): void {
    if (!this.courseId || !this.qaNewTitle.trim()) return;
    this.qaSubmitting = true;
    this.qaService.askQuestion({
      courseId: this.courseId,
      lessonId: this.activeLessonId || undefined,
      title: this.qaNewTitle.trim(),
      body: this.qaNewBody.trim()
    }).subscribe({
      next: () => {
        this.qaNewTitle = '';
        this.qaNewBody = '';
        this.qaSubmitting = false;
        this.toastr.success('Question publiée !');
        this.loadQaQuestions();
      },
      error: () => { this.qaSubmitting = false; }
    });
  }

  openQuestionDetail(q: any): void {
    this.qaActiveQuestion = null;
    this.qaAnswerText = '';
    this.qaService.getQuestionDetail(q.id).subscribe({
      next: (detail) => { this.qaActiveQuestion = detail; }
    });
  }

  closeQuestionDetail(): void {
    this.qaActiveQuestion = null;
    this.qaAnswerText = '';
  }

  submitAnswer(): void {
    if (!this.qaActiveQuestion || !this.qaAnswerText.trim()) return;
    this.qaAnswerSubmitting = true;
    this.qaService.answerQuestion(this.qaActiveQuestion.id, { body: this.qaAnswerText.trim() }).subscribe({
      next: () => {
        this.qaAnswerSubmitting = false;
        this.qaAnswerText = '';
        this.toastr.success('Réponse publiée !');
        this.openQuestionDetail(this.qaActiveQuestion);
        this.loadQaQuestions();
      },
      error: () => { this.qaAnswerSubmitting = false; }
    });
  }

  deleteQuestion(questionId: number, event: Event): void {
    event.stopPropagation(); // prevent opening question detail
    if (!confirm('Supprimer cette question ?')) return;
    this.qaService.deleteQuestion(questionId).subscribe({
      next: () => {
        this.toastr.success('Question supprimée.');
        if (this.qaActiveQuestion?.id === questionId) this.qaActiveQuestion = null;
        this.loadQaQuestions();
      },
      error: () => this.toastr.error('Erreur lors de la suppression.')
    });
  }

  deleteAnswer(answerId: number): void {
    if (!confirm('Supprimer cette réponse ?')) return;
    this.qaService.deleteAnswer(answerId).subscribe({
      next: () => {
        this.toastr.success('Réponse supprimée.');
        this.openQuestionDetail(this.qaActiveQuestion);
      },
      error: () => this.toastr.error('Erreur lors de la suppression.')
    });
  }

  // ═══ Q&A Edit ═══

  startEditQuestion(q: any, event: Event): void {
    event.stopPropagation();
    this.editingQuestionId = q.id;
    this.editQuestionTitle = q.title;
    this.editQuestionBody = q.body || '';
  }

  cancelEditQuestion(): void {
    this.editingQuestionId = null;
    this.editQuestionTitle = '';
    this.editQuestionBody = '';
  }

  saveEditQuestion(questionId: number): void {
    if (!this.editQuestionTitle.trim()) return;
    this.qaService.updateQuestion(questionId, {
      title: this.editQuestionTitle.trim(),
      body: this.editQuestionBody.trim()
    }).subscribe({
      next: () => {
        this.toastr.success('Question modifiée.');
        this.cancelEditQuestion();
        this.loadQaQuestions();
      },
      error: () => this.toastr.error('Erreur lors de la modification.')
    });
  }

  startEditAnswer(ans: any): void {
    this.editingAnswerId = ans.id;
    this.editAnswerBody = ans.body || '';
  }

  cancelEditAnswer(): void {
    this.editingAnswerId = null;
    this.editAnswerBody = '';
  }

  saveEditAnswer(answerId: number): void {
    if (!this.editAnswerBody.trim()) return;
    this.qaService.updateAnswer(answerId, { body: this.editAnswerBody.trim() }).subscribe({
      next: () => {
        this.toastr.success('Réponse modifiée.');
        this.cancelEditAnswer();
        this.openQuestionDetail(this.qaActiveQuestion);
      },
      error: () => this.toastr.error('Erreur lors de la modification.')
    });
  }

  toggleNotesPanel(): void {
    this.showNotesPanel = !this.showNotesPanel;
  }

  openStudentAiAssistant(): void {
    this.showStudentAiPanel = !this.showStudentAiPanel;
  }

  clearStudentAiHistory(): void {
    if (this.studentAiHistory.length === 0) return;

    Swal.fire({
      title: 'Effacer l\'historique ?',
      text: 'Toutes les conversations avec l\'assistant IA seront supprimées.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, effacer',
      cancelButtonText: 'Annuler',
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#6b7280'
    }).then(result => {
      if (result.isConfirmed) {
        this.studentAiHistory = [];
        this.toastr.success('Historique effacé');
      }
    });
  }

  async sendStudentAiMessage(): Promise<void> {
    const message = this.studentAiInput.trim();
    if (!message || this.studentAiBusy) {
      return;
    }

    this.studentAiInput = '';
    this.studentAiHistory.push({ role: 'user', content: message });
    this.studentAiBusy = true;
    try {
      const rawLessonContent = String(this.activeLesson?.articleContent || this.activeLesson?.description || '');
      const lessonContent = rawLessonContent
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 1800);

      // Pour les leçons PDF/VIDEO sans articleContent, construire un contexte textuel
      const lessonType = this.activeLesson?.lessonType || '';
      const lessonContextNote = lessonType === 'PDF'
        ? `[Leçon de type PDF : ${this.activeLesson?.title || ''}. Le contenu est un document PDF.${this.activeLesson?.description ? ' Description : ' + this.activeLesson.description : ''}]`
        : lessonType === 'VIDEO'
        ? `[Leçon de type Vidéo : ${this.activeLesson?.title || ''}.${this.activeLesson?.description ? ' Description : ' + this.activeLesson.description : ''}]`
        : '';
      const finalLessonContent = lessonContent || lessonContextNote;

      const response = await firstValueFrom(
        this.aiAgentsService.studentTutor({
          message,
          userId: localStorage.getItem('id') || undefined,
          sessionId: localStorage.getItem('sessionId') || undefined,
          courseId: this.courseId ? String(this.courseId) : undefined,
          history: this.studentAiHistory.slice(-6),
          context: {
            lessonId: this.activeLesson?.id ? String(this.activeLesson.id) : null,  // ← AJOUTÉ: ID de la leçon pour extraction PDF
            lessonTitle: this.activeLesson?.title || null,
            courseTitle: this.course?.title || null,
            courseName: this.course?.title || null,
            courseLevel: this.course?.level || null,
            category: this.course?.categoryName || null,
            language: this.course?.language || null,
            objectives: this.course?.objectives || null,
            requirements: this.course?.requirements || null,
            lessonContent: finalLessonContent,
            lessonType: this.activeLesson?.lessonType || null,
            lessonDescription: this.activeLesson?.description || null,  // ← AJOUTÉ: Description de la leçon
            courseStructure: (this.sections || []).map((sec: any) => ({
              id: sec.id,
              title: sec.title,
              orderIndex: sec.orderIndex,
              lessons: (sec.lessons || []).map((les: any) => ({
                id: les.id,
                title: les.title,
                lessonType: les.lessonType || 'VIDEO',
                free: les.free || false
              }))
            }))
          }
        })
      );

      this.studentAiHistory.push({
        role: 'assistant',
        content: (response.reply || '').trim() || 'Aucune réponse reçue.'
      });
    } catch {
      this.toastr.error('Assistant IA indisponible pour le moment.');
      this.studentAiHistory.push({
        role: 'assistant',
        content: 'Assistant IA indisponible pour le moment. Réessayez dans quelques instants.'
      });
    } finally {
      this.studentAiBusy = false;
    }
  }

  async copyLastStudentAiReply(): Promise<void> {
    const lastReply = [...this.studentAiHistory].reverse().find((msg) => msg.role === 'assistant');
    const content = lastReply?.content?.trim();

    if (!content) {
      this.toastr.info('Aucune réponse à copier pour le moment.');
      return;
    }

    try {
      await navigator.clipboard.writeText(content);
      this.toastr.success('Dernière réponse copiée.');
    } catch {
      this.toastr.error('Impossible de copier la réponse.');
    }
  }

  // ═══════════════════════════════════════════════════════════════════════
  //  CAMERA — Computer Vision Attention Tracking
  // ═══════════════════════════════════════════════════════════════════════

  promptCamera(): void {
    Swal.fire({
      title: '🎯 Suivi intelligent par IA',
      html: `
        <div style="text-align:left; font-size:14px; color:#374151;">
          <p style="margin-bottom:10px;">Activez le suivi par caméra pour bénéficier de :</p>
          <ul style="padding-left:18px; margin:0; line-height:1.9;">
            <li>📊 Analyse de votre <strong>niveau d'attention</strong> en temps réel</li>
            <li>💡 <strong>Recommandations personnalisées</strong> selon votre état</li>
            <li>🧘 Exercices de <strong>respiration guidés</strong> si fatigue détectée</li>
            <li>📈 <strong>Rapport de session</strong> à la fin du cours</li>
          </ul>
          <p style="margin-top:10px; font-size:12px; color:#6b7280;">Vous pouvez activer/désactiver la caméra à tout moment.</p>
        </div>`,
      icon: undefined,
      showCancelButton: true,
      confirmButtonText: '📷 Activer la caméra',
      cancelButtonText: 'Plus tard',
      confirmButtonColor: '#3b82f6',
      cancelButtonColor: '#6b7280',
      customClass: { popup: 'swal-cv-prompt' }
    }).then(result => {
      if (result.isConfirmed) {
        this.startCamera();
      }
    });
  }

  toggleCamera(): void {
    if (this.cameraActive) {
      this.stopCamera();
    } else {
      this.startCamera();
    }
  }

  async startCamera(): Promise<void> {
    try {
      if (!navigator.mediaDevices?.getUserMedia) {
        this.toastr.error(
          '⚠️ La caméra nécessite HTTPS. Accédez via https://' +
          window.location.hostname + ':4443',
          'Caméra indisponible', { timeOut: 8000 }
        );
        return;
      }

      this.cameraStream = await navigator.mediaDevices.getUserMedia({
        video: { width: 320, height: 240, facingMode: 'user' }
      });
      this.cameraActive = true;

      // Reset session stats
      this.sessionStartTime = new Date();
      this.attentionHistory = [];
      this.sessionTypeCounts = {};
      this.showSessionStats = false;
      this.attentionSampleCounter = 0;

      // Connect to Python CV service FIRST
      this.detectionService.connectWebSocket();

      // Subscribe to detection results
      this.detectionSub = this.detectionService.detection$.subscribe(result => {
        this.latestDetection = result;
        this.attentionScore = result.attention_score;

        // Sample attention every 10 frames (~2s)
        this.attentionSampleCounter++;
        if (this.attentionSampleCounter % 10 === 0) {
          this.attentionHistory.push({ score: result.attention_score, time: new Date() });
          if (this.attentionHistory.length > 300) this.attentionHistory.shift();
        }

        // If a new remark is generated, add it and save to backend
        if (result.remark && result.remark_type) {
          this.cameraRemarks.unshift({
            type: result.remark_type,
            message: result.remark,
            time: new Date()
          });
          // Track session type counts
          this.sessionTypeCounts[result.remark_type] = (this.sessionTypeCounts[result.remark_type] || 0) + 1;

          // Keep only last 20 remarks in UI
          if (this.cameraRemarks.length > 20) this.cameraRemarks.length = 20;

          // Save to backend
          this.detectionService.saveRemark({
            courseId: this.courseId!,
            lessonId: this.activeLessonId,
            remarkType: result.remark_type,
            remarkMessage: result.remark,
            attentionScore: result.attention_score
          }).subscribe({ error: () => {} });
        }

        // Suggest breathing exercise when CV recommends it
        if (result.recommend_breathing && !this.breathingActive && !this.breathingDismissed) {
          this.breathingSuggested = true;
        }

        // Update tip
        this.computeTip();
      });

      // Start rotating tips every 30s
      this.tipTimer = setInterval(() => this.computeTip(), 30000);

      // Check attention and speak via TTS every 90s
      this.ttsTimer = setInterval(() => this.checkAndSpeak(), 90000);

      // Wait for Angular to render the video element (ngIf change detection)
      setTimeout(() => {
        const video = this.cameraVideoRef?.nativeElement;
        if (video) {
          video.srcObject = this.cameraStream;
          // Wait for video to be ready before capturing frames
          video.onloadeddata = () => {
            console.log('[CV] Video ready, starting frame capture');
            // Give WebSocket 500ms to connect, then start sending frames
            setTimeout(() => {
              this.cameraInterval = setInterval(() => this.captureAndSendFrame(), 200);
            }, 500);
          };
        } else {
          console.warn('[CV] Video element not found, retrying...');
          // Retry after another change detection cycle
          setTimeout(() => {
            const v = this.cameraVideoRef?.nativeElement;
            if (v) {
              v.srcObject = this.cameraStream;
              v.onloadeddata = () => {
                setTimeout(() => {
                  this.cameraInterval = setInterval(() => this.captureAndSendFrame(), 200);
                }, 500);
              };
            }
          }, 300);
        }
      }, 200);

      this.playSound('camera');
      this.toastr.success('Caméra activée pour le suivi d\'attention');
    } catch (err) {
      console.error('Camera access denied', err);
      this.toastr.error('Impossible d\'accéder à la caméra. Vérifiez les permissions.');
      this.cameraActive = false;
    }
  }

  captureAndSendFrame(): void {
    const video = this.cameraVideoRef?.nativeElement;
    const canvas = this.cameraCanvasRef?.nativeElement;
    if (!video || !canvas || video.readyState < 2) return;

    canvas.width = video.videoWidth || 320;
    canvas.height = video.videoHeight || 240;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const base64 = canvas.toDataURL('image/jpeg', 0.7);
    this.detectionService.sendFrame(base64);
  }

  stopCamera(): void {
    this.cameraActive = false;

    if (this.cameraInterval) {
      clearInterval(this.cameraInterval);
      this.cameraInterval = null;
    }

    if (this.tipTimer) {
      clearInterval(this.tipTimer);
      this.tipTimer = null;
    }

    if (this.ttsTimer) {
      clearInterval(this.ttsTimer);
      this.ttsTimer = null;
    }

    if (this.detectionSub) {
      this.detectionSub.unsubscribe();
      this.detectionSub = null;
    }

    this.detectionService.disconnectWebSocket();

    if (this.cameraStream) {
      this.cameraStream.getTracks().forEach(t => t.stop());
      this.cameraStream = null;
    }

    this.stopBreathingExercise();
    this.breathingSuggested = false;
    this.breathingDismissed = false;
    this.latestDetection = null;
    this.currentTip = null;

    // Show personalized session summary
    this.showSessionSummary();
  }

  private showSessionSummary(): void {
    if (!this.sessionStartTime || !Object.keys(this.sessionTypeCounts).length) return;

    const issue = this.dominantIssue;
    const avg = this.sessionAvgAttention;
    let icon = '🏆';
    let title = '';
    let message = '';
    let color = '#22c55e';
    let showBreathing = false;

    if (issue === 'EYES_CLOSED' || issue === 'TIRED' || issue === 'YAWNING') {
      icon = '😴';
      title = 'Récupérez votre énergie';
      message = 'Nous avons remarqué que vous sembliez fatigué pendant une partie du cours. Prenez un moment pour respirer profondément afin de retrouver votre énergie.';
      color = '#f59e0b';
      showBreathing = true;
    } else if (issue === 'LOOKING_AWAY' || issue === 'ABSENT') {
      icon = '🎯';
      title = 'Restez concentré';
      message = 'Votre attention a été parfois perturbée pendant le cours. Essayez de réduire les distractions autour de vous pour mieux profiter de la prochaine session.';
      color = '#3b82f6';
      showBreathing = false;
    } else if (issue === 'SAD' || issue === 'ANGRY') {
      icon = '💙';
      title = 'Prenez soin de vous';
      message = 'Votre état émotionnel peut affecter votre apprentissage. Une courte pause et quelques respirations profondes peuvent vous aider à vous sentir mieux.';
      color = '#6366f1';
      showBreathing = true;
    } else if (!issue && avg >= 70) {
      icon = '🏆';
      title = 'Session excellente !';
      message = `Excellent travail ! Vous êtes resté concentré pendant la majeure partie du cours. Votre attention moyenne était de <strong>${avg}%</strong>. Continuez sur cette lancée !`;
      color = '#22c55e';
      showBreathing = false;
    } else {
      icon = '👍';
      title = 'Bonne session !';
      message = `Session terminée avec une attention moyenne de <strong>${avg}%</strong>. Chaque effort compte pour votre progression !`;
      color = '#3b82f6';
      showBreathing = false;
    }

    const breathingHtml = showBreathing ? `
      <div style="margin-top:14px;padding:12px;background:#f0f9ff;border-radius:10px;border:1px solid #bae6fd;">
        <div style="font-weight:600;color:#0369a1;margin-bottom:8px;">🌬️ Exercice de respiration (20 secondes)</div>
        <div style="color:#374151;font-size:13px;line-height:1.8;">
          • Inspirez pendant <strong>4 secondes</strong><br>
          • Gardez l'air <strong>2 secondes</strong><br>
          • Expirez lentement pendant <strong>6 secondes</strong><br>
          • Répétez pendant 20 secondes
        </div>
        <div style="margin-top:8px;font-size:12px;color:#0369a1;">Prenez 20 secondes pour respirer et retrouver votre concentration.</div>
      </div>` : '';

    // Plain text version for TTS (strip HTML tags)
    const breathingTts = showBreathing
      ? ' Nous vous suggérons un exercice de respiration : inspirez 4 secondes, tenez 2 secondes, expirez lentement 6 secondes. Répétez 3 fois.'
      : '';
    const plainMessage = `${title}. ${message.replace(/<[^>]+>/g, '')}${breathingTts}`;

    const speakBtnHtml = `
      <div style="margin-top:12px;">
        <button id="swal-tts-btn"
          style="background:#f5f3ff;color:#7c3aed;border:1px solid #ddd6fe;border-radius:8px;
                 padding:6px 14px;font-size:13px;cursor:pointer;transition:background .2s;"
          onmouseover="this.style.background='#ede9fe'"
          onmouseout="this.style.background='#f5f3ff'">
          🔊 Écouter la recommandation
        </button>
      </div>`;

    Swal.fire({
      title: `${icon} ${title}`,
      html: `<p style="color:#374151;margin-bottom:0;">${message}</p>${breathingHtml}${speakBtnHtml}`,
      confirmButtonText: showBreathing ? '🧘 Commencer la respiration' : '👍 Merci !',
      showCancelButton: showBreathing,
      cancelButtonText: 'Fermer',
      confirmButtonColor: color,
      cancelButtonColor: '#6b7280',
      timer: showBreathing ? undefined : 9000,
      timerProgressBar: !showBreathing,
      didOpen: (popup) => {
        const btn = popup.querySelector('#swal-tts-btn') as HTMLButtonElement | null;
        if (btn) {
          btn.addEventListener('click', () => this.speak(plainMessage));
        }
        // Auto-read if ttsEnabled
        if (this.ttsEnabled) {
          setTimeout(() => this.speak(plainMessage), 600);
        }
      },
      willClose: () => {
        window.speechSynthesis?.cancel();
      }
    }).then(result => {
      if (result.isConfirmed && showBreathing) {
        this.startBreathingExercise();
      }
    });
  }

  dismissMicroCoaching(): void {
    this.showMicroCoaching = false;
  }

  toggleMicroCoaching(): void {
    this.showMicroCoaching = !this.showMicroCoaching;
  }

  // ═══ Sound notifications (Web Audio API — no external files) ═══
  toggleSound(): void {
    this.soundEnabled = !this.soundEnabled;
    if (this.soundEnabled) this.playSound('camera'); // confirmation beep
  }

  // ═══ Text-to-Speech ═══
  toggleTts(): void {
    this.ttsEnabled = !this.ttsEnabled;
    if (!this.ttsEnabled) {
      window.speechSynthesis?.cancel();
    } else {
      // Speak confirmation, then immediately do a first attention check (after 2.5s so voices don't overlap)
      this.speak('Lecture vocale activée.');
      setTimeout(() => this.checkAndSpeak(), 2500);
    }
  }

  // ═══ Periodic attention check — speaks based on recent concentration ═══
  private checkAndSpeak(): void {
    if (!this.ttsEnabled || !this.cameraActive) return;

    // Use the last 30 samples (≈ 60 seconds of data at 1 sample/2s)
    const recent = this.attentionHistory.slice(-30);
    if (recent.length < 3) return; // not enough data yet

    const recentAvg = Math.round(
      recent.reduce((acc, h) => acc + h.score, 0) / recent.length
    );

    const issue = this.dominantIssue;

    if (recentAvg >= 70) {
      // Concentrated → positive encouragement
      const msgs = [
        'Excellent travail ! Vous êtes très concentré. Continuez sur cette lancée !',
        'Super ! Votre attention est au top. Vous êtes dans la zone idéale.',
        'Bravo ! Vous progressez très bien. Restez dans cet état de concentration.',
        'Parfait ! Votre niveau d\'attention est excellent. Continuez comme ça !'
      ];
      this.speak(msgs[Math.floor(Math.random() * msgs.length)]);

    } else if (recentAvg >= 45) {
      // Middle range → gentle reminder to refocus
      const msgs = [
        'Vous êtes sur la bonne voie ! Essayez de rester focalisé sur le cours.',
        'Bonne session. Un petit effort de concentration et vous serez au top !',
        'Continuez, vous faites du bon travail. Restez attentif pour progresser encore plus.',
      ];
      this.speak(msgs[Math.floor(Math.random() * msgs.length)]);

    } else {
      // Low attention → motivating message based on detected issue
      let msg: string;
      if (issue === 'EYES_CLOSED' || issue === 'TIRED' || issue === 'YAWNING') {
        msg = 'Vous semblez fatigué. Prenez une grande respiration et une courte pause pour retrouver votre énergie.';
      } else if (issue === 'LOOKING_AWAY' || issue === 'ABSENT') {
        msg = 'Votre attention semble dispersée. Recentrez-vous sur le cours, vous êtes presque là !';
      } else if (issue === 'SAD' || issue === 'ANGRY') {
        msg = 'Prenez une grande respiration. Vous faites du bon travail, chaque effort compte.';
      } else {
        msg = 'Votre concentration a baissé. Prenez un instant pour vous recentrer, vous en êtes capable !';
      }
      this.speak(msg);
    }
  }

  speak(text: string): void {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel(); // cancel any ongoing speech
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'fr-FR';
    utter.rate = 0.92;
    utter.pitch = 1.05;
    // Try to pick a French voice; getVoices() may be empty on first call
    const setVoiceAndSpeak = () => {
      const voices = window.speechSynthesis.getVoices();
      const frVoice = voices.find(v => v.lang.startsWith('fr')) ?? null;
      if (frVoice) utter.voice = frVoice;
      window.speechSynthesis.speak(utter);
    };
    if (window.speechSynthesis.getVoices().length) {
      setVoiceAndSpeak();
    } else {
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.onvoiceschanged = null;
        setVoiceAndSpeak();
      };
    }
  }

  private getAudioContext(): AudioContext {
    if (!this.audioCtx) {
      this.audioCtx = new AudioContext();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  playSound(type: 'positive' | 'warning' | 'camera' | 'breathing'): void {
    if (!this.soundEnabled) return;
    try {
      const ctx = this.getAudioContext();
      const notes: { freq: number; start: number; dur: number }[] = [];

      if (type === 'positive') {
        // Ascending two-note soft chime (C5 → E5)
        notes.push({ freq: 523.25, start: 0,    dur: 0.12 });
        notes.push({ freq: 659.25, start: 0.13, dur: 0.18 });
      } else if (type === 'warning') {
        // Descending soft tone (G4 → D4)
        notes.push({ freq: 392.00, start: 0,    dur: 0.15 });
        notes.push({ freq: 293.66, start: 0.16, dur: 0.22 });
      } else if (type === 'camera') {
        // 3-note ascending chime (C5 → E5 → G5)
        notes.push({ freq: 523.25, start: 0,    dur: 0.10 });
        notes.push({ freq: 659.25, start: 0.11, dur: 0.10 });
        notes.push({ freq: 783.99, start: 0.22, dur: 0.20 });
      } else {
        // Breathing — calm low double pulse (A3)
        notes.push({ freq: 220.00, start: 0,    dur: 0.30 });
        notes.push({ freq: 220.00, start: 0.40, dur: 0.30 });
      }

      notes.forEach(n => {
        const osc  = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = (type === 'warning') ? 'triangle' : 'sine';
        osc.frequency.value = n.freq;
        gain.gain.setValueAtTime(0, ctx.currentTime + n.start);
        gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + n.start + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + n.start + n.dur);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + n.start);
        osc.stop(ctx.currentTime + n.start + n.dur + 0.01);
      });
    } catch { /* audio not supported */ }
  }

  getRemarkIcon(type: string): string {
    switch (type) {
      case 'EYES_CLOSED': return 'isax-eye-slash';
      case 'YAWNING': return 'isax-emoji-sad';
      case 'LOOKING_AWAY': return 'isax-eye';
      case 'ABSENT': return 'isax-user-remove';
      case 'SMILING': return 'isax-emoji-happy';
      case 'CONCENTRATED': return 'isax-brain';
      case 'SAD': return 'isax-emoji-sad';
      case 'ANGRY': return 'isax-danger';
      case 'TIRED': return 'isax-moon';
      default: return 'isax-info-circle';
    }
  }

  getRemarkColor(type: string): string {
    switch (type) {
      case 'EYES_CLOSED': return '#f59e0b';
      case 'YAWNING': return '#8b5cf6';
      case 'LOOKING_AWAY': return '#ef4444';
      case 'ABSENT': return '#6b7280';
      case 'SMILING': return '#22c55e';
      case 'CONCENTRATED': return '#3b82f6';
      case 'SAD': return '#6366f1';
      case 'ANGRY': return '#dc2626';
      case 'TIRED': return '#a855f7';
      default: return '#3b82f6';
    }
  }

  getAttentionColor(): string {
    if (this.attentionScore >= 75) return '#22c55e';
    if (this.attentionScore >= 50) return '#f59e0b';
    return '#ef4444';
  }

  // ═══ Session Stats Getters ═══

  get sessionAvgAttention(): number {
    if (!this.attentionHistory.length) return this.attentionScore;
    const sum = this.attentionHistory.reduce((acc, h) => acc + h.score, 0);
    return Math.round(sum / this.attentionHistory.length);
  }

  get sessionDuration(): string {
    if (!this.sessionStartTime) return '0 min';
    const secs = Math.floor((new Date().getTime() - this.sessionStartTime.getTime()) / 1000);
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return m > 0 ? `${m} min ${s}s` : `${s}s`;
  }

  get dominantIssue(): string | null {
    const issues = ['EYES_CLOSED', 'LOOKING_AWAY', 'YAWNING', 'ABSENT', 'TIRED', 'SAD', 'ANGRY'];
    let max = 0;
    let dominant: string | null = null;
    for (const t of issues) {
      const c = this.sessionTypeCounts[t] || 0;
      if (c > max) { max = c; dominant = t; }
    }
    return max > 0 ? dominant : null;
  }

  get sessionImprovementTip(): string {
    const issue = this.dominantIssue;
    const avg = this.sessionAvgAttention;
    if (!issue && avg >= 70) return 'Excellente session ! Votre concentration était remarquable tout au long du cours. 🌟';
    switch (issue) {
      case 'EYES_CLOSED': return 'Pour améliorer votre attention : assurez-vous d\'être bien reposé avant chaque session et éclairez correctement votre espace. 💤';
      case 'LOOKING_AWAY': return 'Essayez d\'éliminer les distractions visuelles dans votre environnement de travail pour rester focus. 🎯';
      case 'YAWNING': return 'Boire de l\'eau régulièrement et faire de courtes pauses (technique Pomodoro) peut renforcer votre énergie. 💧';
      case 'ABSENT': return 'Assurez-vous d\'être bien positionné face à la caméra et dans un endroit calme. 🏠';
      case 'TIRED': return 'Prenez le temps de vous étirer entre les sessions pour maintenir votre énergie. 🤸';
      case 'SAD': return 'Un environnement confortable, une musique légère ou un café peuvent améliorer votre humeur d\'apprentissage. ☕';
      case 'ANGRY': return 'Des pauses courtes et régulières permettent de maintenir la patience face aux défis. 🧘';
      default: return 'Continuez sur cette lancée — chaque session vous rapproche de vos objectifs ! 🚀';
    }
  }

  get sessionTypeCountsSorted(): { type: string; label: string; count: number; color: string }[] {
    const all = [
      { type: 'EYES_CLOSED', label: 'Yeux fermés', color: '#f59e0b' },
      { type: 'YAWNING', label: 'Bâillements', color: '#8b5cf6' },
      { type: 'LOOKING_AWAY', label: 'Regard ailleurs', color: '#ef4444' },
      { type: 'ABSENT', label: 'Absences', color: '#6b7280' },
      { type: 'SAD', label: 'Tristesse', color: '#6366f1' },
      { type: 'ANGRY', label: 'Frustration', color: '#dc2626' },
      { type: 'TIRED', label: 'Fatigue', color: '#a855f7' },
      { type: 'SMILING', label: 'Sourires', color: '#22c55e' },
      { type: 'CONCENTRATED', label: 'Concentration', color: '#3b82f6' },
    ];
    return all
      .filter(t => (this.sessionTypeCounts[t.type] || 0) > 0)
      .map(t => ({ ...t, count: this.sessionTypeCounts[t.type] || 0 }))
      .sort((a, b) => b.count - a.count);
  }

  toggleSessionStats(): void {
    this.showSessionStats = !this.showSessionStats;
  }

  // ═══ Real-time Tips Logic ═══

  private computeTip(): void {
    const d = this.latestDetection;
    if (!d) { this.currentTip = null; return; }

    const level = d.attention_level || '';

    // Priority: breathing active → expression → detection flags → attention level
    if (this.breathingActive) {
      this.currentTip = null; // breathing UI handles its own display
      return;
    }

    if (!d.face_detected) {
      this.currentTip = 'Positionnez-vous face à la caméra pour ne rien manquer 📷';
    } else if (d.expression === 'CONCENTRATED') {
      this.currentTip = 'Vous êtes en pleine concentration 🎯 Excellent ! Continuez ainsi.';
    } else if (d.expression === 'SMILING') {
      this.currentTip = 'Votre enthousiasme est visible ! Gardez cette énergie positive 😊';
    } else if (d.expression === 'TIRED') {
      this.currentTip = 'Vous semblez fatigué — étirez vos bras et respirez profondément 🤸';
    } else if (d.expression === 'ANGRY') {
      this.currentTip = 'Prenez une grande inspiration… Les défis font partie de l\'apprentissage 🧘';
    } else if (d.expression === 'SAD') {
      this.currentTip = 'C\'est normal de trouver ça difficile. Vous y êtes presque ! 🌈';
    } else if (d.eyes_closed) {
      this.currentTip = 'Respirez profondément pour rester alerte. Un verre d\'eau peut aider ! 💧';
    } else if (d.yawning) {
      this.currentTip = 'Vous semblez fatigué. Une pause de 2 min peut booster votre concentration ! ⏱️';
    } else if (d.looking_away) {
      this.currentTip = 'Recentrez votre regard sur le cours — vous pouvez le faire ! 💪';
    } else if (level === 'VERY_FOCUSED') {
      this.currentTip = 'Performance optimale ! Votre concentration est excellente 🚀';
    } else if (level === 'FOCUSED') {
      this.currentTip = 'Bonne concentration ! Gardez ce rythme 👍';
    } else if (level === 'SLIGHTLY_DISTRACTED') {
      this.currentTip = 'Petite baisse de concentration — recentrez-vous doucement 🎯';
    } else if (level === 'DISTRACTED') {
      this.currentTip = 'Votre attention baisse — essayez de changer de position ou coupez les distractions 🌟';
    } else if (level === 'VERY_DISTRACTED') {
      this.currentTip = 'Attention très basse — une courte pause vous ferait du bien 🛑';
    } else {
      this.currentTip = null;
    }
  }

  // ═══ Breathing Exercise ═══

  startBreathingExercise(): void {
    this.breathingSuggested = false;
    this.breathingDismissed = false;
    this.breathingActive = true;
    this.breathingPhase = 'inhale';
    this.breathingTimeLeft = 4;
    this.runBreathingCycle();
  }

  stopBreathingExercise(): void {
    this.breathingActive = false;
    this.breathingSuggested = false;
    if (this.breathingTimer) {
      clearInterval(this.breathingTimer);
      this.breathingTimer = null;
    }
  }

  dismissBreathingSuggestion(): void {
    this.breathingSuggested = false;
    this.breathingDismissed = true;
    // Allow re-suggestion after 3 minutes
    setTimeout(() => { this.breathingDismissed = false; }, 180000);
  }

  private runBreathingCycle(): void {
    let cycleCount = 0;
    const maxCycles = 3; // 3 full cycles (~36 seconds)

    this.breathingTimer = setInterval(() => {
      this.breathingTimeLeft--;

      if (this.breathingTimeLeft <= 0) {
        if (this.breathingPhase === 'inhale') {
          this.breathingPhase = 'hold';
          this.breathingTimeLeft = 2;
        } else if (this.breathingPhase === 'hold') {
          this.breathingPhase = 'exhale';
          this.breathingTimeLeft = 6;
        } else {
          cycleCount++;
          if (cycleCount >= maxCycles) {
            this.stopBreathingExercise();
            this.currentTip = 'Bravo ! Exercice terminé. Vous devriez vous sentir plus détendu 🧘';
            return;
          }
          this.breathingPhase = 'inhale';
          this.breathingTimeLeft = 4;
        }
      }
    }, 1000);
  }

  getBreathingLabel(): string {
    switch (this.breathingPhase) {
      case 'inhale': return 'Inspirez lentement…';
      case 'hold': return 'Gardez l\'air…';
      case 'exhale': return 'Expirez lentement…';
    }
  }

  getAttentionLevelLabel(): string {
    const level = this.latestDetection?.attention_level || '';
    switch (level) {
      case 'VERY_FOCUSED': return 'Très concentré';
      case 'FOCUSED': return 'Concentré';
      case 'SLIGHTLY_DISTRACTED': return 'Légèrement distrait';
      case 'DISTRACTED': return 'Distrait';
      case 'VERY_DISTRACTED': return 'Très distrait';
      default: return '';
    }
  }

  getAttentionLevelColor(): string {
    const level = this.latestDetection?.attention_level || '';
    switch (level) {
      case 'VERY_FOCUSED': return '#059669';
      case 'FOCUSED': return '#22c55e';
      case 'SLIGHTLY_DISTRACTED': return '#f59e0b';
      case 'DISTRACTED': return '#ef4444';
      case 'VERY_DISTRACTED': return '#dc2626';
      default: return '#6b7280';
    }
  }

  formatStudentMessage(markdown: string): string {
    if (!markdown) {
      return '';
    }

    const escapeHtml = (value: string): string => value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');

    let html = escapeHtml(markdown);

    const codeBlocks: string[] = [];
    html = html.replace(/```([a-zA-Z0-9_-]+)?\n([\s\S]*?)```/g, (_full, lang, code) => {
      const language = (lang || '').trim();
      const codeHtml = `<pre class="ai-msg__code-block"><code>${code}</code></pre>`;
      const token = `@@CODEBLOCK_${codeBlocks.length}@@`;
      codeBlocks.push(codeHtml.replace('<pre class="ai-msg__code-block">', `<pre class="ai-msg__code-block${language ? ` lang-${language}` : ''}">`));
      return token;
    });

    html = html.replace(/^#### (.+)$/gm, '<h5 class="ai-msg__section-title">$1</h5>');
    html = html.replace(/^### (.+)$/gm, '<h4 class="ai-msg__section-title">$1</h4>');
    html = html.replace(/^## (.+)$/gm, '<h3 class="ai-msg__section-title">$1</h3>');

    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/`([^`\n]+?)`/g, '<code class="ai-msg__code">$1</code>');

    html = html.replace(/^---$/gm, '<hr class="ai-msg__divider">');

    const lines = html.split('\n');
    let listType: 'ul' | 'ol' | null = null;
    const out: string[] = [];

    for (const line of lines) {
      const bullet = line.match(/^\s*[-•*]\s+(.+)$/);
      const numbered = line.match(/^\s*\d+\.\s+(.+)$/);

      if (bullet) {
        if (listType !== 'ul') {
          if (listType) out.push('</ol>');
          out.push('<ul class="ai-msg__list">');
          listType = 'ul';
        }
        out.push(`<li class="ai-msg__list-item">${bullet[1]}</li>`);
        continue;
      }

      if (numbered) {
        if (listType !== 'ol') {
          if (listType) out.push('</ul>');
          out.push('<ol class="ai-msg__list ai-msg__list--ordered">');
          listType = 'ol';
        }
        out.push(`<li class="ai-msg__list-item">${numbered[1]}</li>`);
        continue;
      }

      if (listType) {
        out.push(listType === 'ul' ? '</ul>' : '</ol>');
        listType = null;
      }

      out.push(line.trim() ? `<p>${line}</p>` : '');
    }

    if (listType) {
      out.push(listType === 'ul' ? '</ul>' : '</ol>');
    }

    html = out.join('');

    codeBlocks.forEach((block, idx) => {
      html = html.replace(`@@CODEBLOCK_${idx}@@`, block);
    });

    return html;
  }



}
