import {
  Component, OnInit, OnDestroy, ViewChild, ElementRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CourseService } from '../../../shared/service/course/course.service';
import { NoteService } from '../../../shared/service/note/note.service';
import { QaService } from '../../../shared/service/qa/qa.service';
import { routes } from '../../../shared/service/routes/routes';
import { SafeUrlPipe } from '../../../shared/pipe/safe-url.pipe';
import { SafeHtmlPipe } from '../../../shared/pipe/safe-html.pipe'; // keeps innerHTML unsanitized so Quill HTML renders correctly
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-course-watch',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, SafeUrlPipe, SafeHtmlPipe],
  templateUrl: './course-watch.component.html',
  styleUrl: './course-watch.component.scss'
})
export class CourseWatchComponent implements OnInit, OnDestroy {

  @ViewChild('videoPlayer') videoRef!: ElementRef<HTMLVideoElement>;

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService,
    private noteService: NoteService,
    private qaService: QaService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.currentUserId = parseInt(localStorage.getItem('id') || '0', 10);
    this.route.queryParams.subscribe(params => {
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
    this.saveCurrentProgress(); // Save last position before leaving
    this.clearSaveInterval();
    if (this.noteSaveTimer) clearTimeout(this.noteSaveTimer);
    if (this.lessonNoteSaveTimer) clearTimeout(this.lessonNoteSaveTimer);
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
    this.onVideoEnd();
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
    return `http://localhost:8081${clean}`;
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
}
