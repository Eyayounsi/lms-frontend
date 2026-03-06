import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { routes } from '../../../shared/service/routes/routes';
import { CourseService } from '../../../shared/service/course/course.service';
import { SafeUrlPipe } from '../../../shared/pipe/safe-url.pipe';
import Swal from 'sweetalert2';

declare var bootstrap: any;

@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, SafeUrlPipe],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.scss'
})
export class AddCourseComponent implements OnInit, OnDestroy {
  routes = routes;

  //  Wizard step 
  public selectedFieldSet = [0];

  //  Statut 
  loading = false;
  errorMsg = '';
  successMsg = '';

  //  Données persistées côté backend (ID du cours créé) 
  courseId: number | null = null;

  //  Étape 1 : Informations de base 
  categories: any[] = [];
  step1 = {
    title: '',
    description: '',
    shortDescription: '',
    categoryId: null as number | null,
    level: 'BEGINNER',
    language: 'Français',
    featured: false
  };
  objectives: string[] = [''];
  requirements: string[] = [''];

  //  Étape 2 : Médias 
  coverFile: File | null = null;
  coverPreview: string | null = null;
  introVideoUrl = '';

  //  Étape 3 : Curriculum 
  sections: any[] = [];
  newSectionTitle = '';
  newLesson = {
    sectionId: null as number | null,
    title: '',
    type: 'VIDEO',
    videoUrl: '',
    isFree: false
  };

  // Modèle pour la modal d'édition de leçon
  editLessonModel: { lesson: any; title: string; isFree: boolean } | null = null;

  //  Étape 5 : Tarification 
  step5 = {
    price: 0,
    isFree: false,
    hasDiscount: false,
    discountPrice: null as number | null,
    discountEndsAt: ''
  };

  isEditMode = false;
  courseStatus = '';   // DRAFT | PENDING_REVIEW | PUBLISHED | REJECTED

  constructor(private courseService: CourseService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.courseService.getCategories().subscribe({
      next: (cats) => (this.categories = cats),
      error: () => (this.categories = [])
    });
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.courseId = +params['id'];
        this.isEditMode = true;
        this.loadCourseForEdit();
      }
    });
  }

  loadCourseForEdit(): void {
    if (!this.courseId) return;
    this.loading = true;
    this.courseService.getMyCourse(this.courseId).subscribe({
      next: (course) => {
        this.loading = false;
        this.step1 = {
          title: course.title || '',
          description: course.description || '',
          shortDescription: course.shortDescription || '',
          categoryId: course.categoryId || null,
          level: course.level || 'BEGINNER',
          language: course.language || 'Français',
          featured: !!course.featured
        };
        const objLines: string[] = course.objectives ? course.objectives.split('\n').filter((o: string) => o.trim()) : [];
        this.objectives = objLines.length ? objLines : [''];
        const reqLines: string[] = course.requirements ? course.requirements.split('\n').filter((r: string) => r.trim()) : [];
        this.requirements = reqLines.length ? reqLines : [''];
        this.step5.price = course.price || 0;
        this.step5.isFree = !course.price || course.price === 0;
        this.sections = course.sections || [];
        this.courseStatus = course.status || '';

        // Cours en attente de validation → mode lecture seule
        if (this.courseStatus === 'PENDING') {
          Swal.fire({
            icon: 'info',
            title: 'Cours en attente de validation',
            html: 'Ce cours est actuellement <b>en attente de validation</b> par un administrateur.<br>Aucune modification n\'est possible tant que la validation n\'a pas été effectuée.',
            confirmButtonText: 'OK',
            confirmButtonColor: '#6c63ff',
          }).then(() => this.router.navigate([this.routes.instructorCourse]));
        }
      },
      error: () => { this.loading = false; }
    });
  }

  ngOnDestroy(): void {}

  //  Utilitaires 
  addObjective(): void { this.objectives.push(''); }
  removeObjective(i: number): void { if (this.objectives.length > 1) this.objectives.splice(i, 1); }
  addRequirement(): void { this.requirements.push(''); }
  removeRequirement(i: number): void { if (this.requirements.length > 1) this.requirements.splice(i, 1); }
  trackByIndex(i: number): number { return i; }

  //  Étape 1  créer le cours 
  saveStep1(): void {
    if (!this.step1.title.trim()) {
      this.errorMsg = 'Le titre du cours est obligatoire.';
      return;
    }
    this.errorMsg = '';
    this.loading = true;

    const payload = {
      title: this.step1.title,
      description: this.step1.description,
      shortDescription: this.step1.shortDescription,
      categoryId: this.step1.categoryId,
      level: this.step1.level,
      language: this.step1.language,
      featured: this.step1.featured,
      objectives: this.objectives.filter(o => o.trim()).join('\n'),
      requirements: this.requirements.filter(r => r.trim()).join('\n'),
      price: 0
    };

    if (this.courseId) {
      this.courseService.updateCourse(this.courseId, payload).subscribe({
        next: () => { this.loading = false; this.selectedFieldSet[0] = 1; },
        error: (e) => { this.loading = false; this.errorMsg = e?.error?.message || 'Erreur lors de la mise à jour.'; }
      });
    } else {
      this.courseService.createCourse(payload).subscribe({
        next: (course) => {
          this.courseId = course.id;
          this.loading = false;
          this.selectedFieldSet[0] = 1;
        },
        error: (e) => { this.loading = false; this.errorMsg = e?.error?.message || 'Erreur lors de la création.'; }
      });
    }
  }

  //  Étape 2  upload couverture 
  onCoverSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.coverFile = input.files[0];
      const reader = new FileReader();
      reader.onload = (e) => (this.coverPreview = e.target?.result as string);
      reader.readAsDataURL(this.coverFile);
    }
  }

  saveStep2(): void {
    if (!this.courseId) { this.selectedFieldSet[0] = 0; return; }
    if (!this.coverFile) {
      this.selectedFieldSet[0] = 2;
      this.loadCurriculum();
      return;
    }
    this.loading = true;
    this.courseService.uploadCoverImage(this.courseId, this.coverFile).subscribe({
      next: () => {
        this.loading = false;
        this.selectedFieldSet[0] = 2;
        this.loadCurriculum();
      },
      error: (e) => { this.loading = false; this.errorMsg = e?.error?.message || "Erreur lors de l'upload."; }
    });
  }

  //  Étape 3 : Curriculum 
  loadCurriculum(): void {
    if (!this.courseId) return;
    this.courseService.getMyCourse(this.courseId).subscribe({
      next: (c) => (this.sections = c.sections || []),
      error: () => (this.sections = [])
    });
  }

  openAddSectionModal(): void {
    this.newSectionTitle = '';
    const el = document.getElementById('add-topic');
    if (el) { const modal = new bootstrap.Modal(el); modal.show(); }
  }

  confirmAddSection(): void {
    if (!this.newSectionTitle.trim() || !this.courseId) return;
    this.courseService.addSection(this.courseId, { title: this.newSectionTitle }).subscribe({
      next: (sec) => {
        this.sections.push({ ...sec, lessons: [] });
        this.newSectionTitle = '';
      },
      error: () => {}
    });
  }

  openAddLessonModal(sectionId: number): void {
    this.newLesson = { sectionId, title: '', type: 'VIDEO', videoUrl: '', isFree: false };
    const el = document.getElementById('add-lesson');
    if (el) { const modal = new bootstrap.Modal(el); modal.show(); }
  }

  confirmAddLesson(): void {
    if (!this.newLesson.title.trim() || !this.newLesson.sectionId) return;
    const lessonPayload: any = {
      title: this.newLesson.title,
      lessonType: this.newLesson.type,
      isFree: this.newLesson.isFree
    };
    if (this.newLesson.type === 'VIDEO' && this.newLesson.videoUrl.trim()) {
      lessonPayload.videoUrl = this.newLesson.videoUrl.trim();
    }
    const selectedType = this.newLesson.type; // capture before async callback
    this.courseService.addLesson(this.newLesson.sectionId, lessonPayload).subscribe({
      next: (lesson) => {
        // Ensure the local lessonType always matches what the user selected
        // (fallback in case the running backend version doesn't yet return it)
        if (!lesson.lessonType || lesson.lessonType === 'VIDEO' && selectedType !== 'VIDEO') {
          lesson.lessonType = selectedType;
        }
        const section = this.sections.find(s => s.id === this.newLesson.sectionId);
        if (section) section.lessons = [...(section.lessons || []), lesson];
        // For TEXT lessons: auto-open the article editor once the add-lesson modal is fully closed
        if (selectedType === 'TEXT') {
          setTimeout(() => this.openArticleEditor(lesson), 600);
        }
      },
      error: () => {}
    });
  }

  //  Upload vidéo pour une leçon
  triggerVideoUpload(lessonId: number): void {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'video/*';
    input.onchange = (e: Event) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      this.loading = true;
      this.courseService.uploadLessonVideo(lessonId, file).subscribe({
        next: () => { this.loading = false; this.successMsg = 'Vidéo uploadée !'; this.loadCurriculum(); },
        error: (err) => { this.loading = false; this.errorMsg = err.error?.message || 'Erreur upload vidéo'; }
      });
    };
    input.click();
  }

  //  Upload PDF pour une leçon
  triggerPdfUpload(lessonId: number): void {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/pdf';
    input.onchange = (e: Event) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      this.loading = true;
      this.courseService.uploadLessonPdf(lessonId, file).subscribe({
        next: () => { this.loading = false; this.successMsg = 'PDF uploadé !'; this.loadCurriculum(); },
        error: (err) => { this.loading = false; this.errorMsg = err.error?.message || 'Erreur upload PDF'; }
      });
    };
    input.click();
  }

  //  Étape 4  mise à jour objectives/requirements 
  saveStep4(): void {
    if (!this.courseId) { this.selectedFieldSet[0] = 4; return; }
    this.loading = true;
    const payload = {
      title: this.step1.title,
      description: this.step1.description,
      shortDescription: this.step1.shortDescription,
      categoryId: this.step1.categoryId,
      level: this.step1.level,
      language: this.step1.language,
      featured: this.step1.featured,
      objectives: this.objectives.filter(o => o.trim()).join('\n'),
      requirements: this.requirements.filter(r => r.trim()).join('\n'),
      price: this.step5.isFree ? 0 : (this.step5.price || 0)
    };
    this.courseService.updateCourse(this.courseId, payload).subscribe({
      next: () => { this.loading = false; this.selectedFieldSet[0] = 4; },
      error: (e) => { this.loading = false; this.errorMsg = e?.error?.message || 'Erreur.'; }
    });
  }

  //  Étape 5  tarification + soumettre / sauvegarder brouillon

  /** Affiche une alerte SweetAlert2 de confirmation avant d'enregistrer le brouillon */
  saveDraft(): void {
    if (!this.courseId) return;
    Swal.fire({
      icon: 'info',
      title: 'Enregistrer comme brouillon',
      html: `Le cours sera enregistré en <b>brouillon</b>.<br>
             <span style="color:#6c757d;font-size:0.9em">Il ne sera pas publié tant qu'il n'est pas soumis pour validation.</span>`,
      confirmButtonText: 'Enregistrer',
      cancelButtonText: 'Annuler',
      confirmButtonColor: '#0dcaf0',
      cancelButtonColor: '#6c757d',
      showCancelButton: true,
      timer: 10000,
      timerProgressBar: true,
      allowOutsideClick: false,
      reverseButtons: true,
    }).then((result) => {
      // Procéder uniquement si l'utilisateur clique Enregistrer (pas sur timer expire)
      if (result.isConfirmed) {
        this._doSaveDraft();
      }
    });
  }

  /** Logique réelle de sauvegarde brouillon — appelée après confirmation Swal */
  private _doSaveDraft(): void {
    this.errorMsg = '';
    this.loading = true;
    const payload: any = {
      title: this.step1.title,
      description: this.step1.description,
      shortDescription: this.step1.shortDescription,
      categoryId: this.step1.categoryId,
      level: this.step1.level,
      language: this.step1.language,
      featured: this.step1.featured,
      objectives: this.objectives.filter(o => o.trim()).join('\n'),
      requirements: this.requirements.filter(r => r.trim()).join('\n'),
      price: this.step5.isFree ? 0 : (this.step5.price || 0),
      discountPrice: (this.step5.hasDiscount && this.step5.discountPrice) ? this.step5.discountPrice : null,
      discountEndsAt: (this.step5.hasDiscount && this.step5.discountEndsAt) ? this.step5.discountEndsAt : null
    };
    this.courseService.updateCourse(this.courseId!, payload).subscribe({
      next: () => {
        this.loading = false;
        Swal.fire({
          icon: 'success',
          title: 'Brouillon enregistré !',
          text: 'Votre cours a été sauvegardé. Vous pourrez le soumettre quand il sera prêt.',
          confirmButtonText: 'Mes cours',
          confirmButtonColor: '#198754',
          timer: 4000,
          timerProgressBar: true,
        }).then(() => this.router.navigate([this.routes.instructorMyCourses]));
      },
      error: (e) => { this.loading = false; this.errorMsg = e?.error?.message || 'Erreur lors de la sauvegarde.'; }
    });
  }

  get discountPercent(): number {
    if (!this.step5.price || !this.step5.discountPrice) return 0;
    return Math.round((1 - this.step5.discountPrice / this.step5.price) * 100);
  }

  /** Affiche une alerte SweetAlert2 de confirmation avant de soumettre pour révision */
  submitCourse(): void {
    if (!this.courseId) return;

    // — Cours déjà en attente de validation —
    if (this.courseStatus === 'PENDING_REVIEW') {
      Swal.fire({
        icon: 'info',
        title: 'Déjà soumis',
        text: 'Ce cours est déjà en attente de validation par un administrateur. Vous serez notifié une fois qu\'il est approuvé.',
        confirmButtonColor: '#6c63ff',
      });
      return;
    }

    // — Vérification locale avant d'appeler le backend —
    const emptySections: string[] = [];
    for (const sec of this.sections) {
      const hasContent = (sec.lessons || []).some((l: any) =>
        l.videoUrl || l.pdfUrl || l.articleContent
      );
      if (!hasContent) emptySections.push(sec.title);
    }
    if (this.sections.length === 0) {
      Swal.fire({ icon: 'error', title: 'Curriculum vide', text: 'Ajoutez au moins une section et une leçon avant de soumettre.' });
      return;
    }
    if (emptySections.length > 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Section(s) sans contenu',
        html: `Les sections suivantes n'ont aucune leçon avec contenu :<br><br>
               <b>${emptySections.map(s => `« ${s} »`).join('<br>')}</b><br><br>
               Ajoutez au moins une vidéo, un PDF ou un article par section.`,
        confirmButtonText: 'Retour au curriculum',
        confirmButtonColor: '#e53e3e',
      }).then(() => this.selectedFieldSet[0] = 2);
      return;
    }

    const isPublished = this.courseStatus === 'PUBLISHED';
    Swal.fire({
      icon: 'warning',
      title: isPublished ? 'Soumettre les modifications ?' : 'Soumettre pour validation ?',
      html: isPublished
        ? `Vos modifications seront soumises pour validation par l'administrateur.<br>
           <b>Le cours restera visible aux étudiants</b> pendant l'examen.`
        : `Une fois soumis, <b>vous ne pourrez plus modifier ce cours</b><br>
             tant qu'il est en attente de validation par l'administrateur.`,
      confirmButtonText: '<i class="isax isax-send me-1"></i> Confirmer',
      cancelButtonText: 'Annuler',
      confirmButtonColor: '#d63384',
      cancelButtonColor: '#6c757d',
      showCancelButton: true,
      timer: 10000,
      timerProgressBar: true,
      allowOutsideClick: false,
      reverseButtons: true,
    }).then((result) => {
      // Procéder uniquement si l'utilisateur clique Confirmer (pas sur timer expire)
      if (result.isConfirmed) {
        this._doSubmitCourse();
      }
    });
  }
  /** Logique réelle de soumission — appelée après confirmation Swal */
  private _doSubmitCourse(): void {
    this.loading = true;
    const isPublished = this.courseStatus === 'PUBLISHED';
    const payload: any = {
      title: this.step1.title,
      description: this.step1.description,
      shortDescription: this.step1.shortDescription,
      categoryId: this.step1.categoryId,
      level: this.step1.level,
      language: this.step1.language,
      featured: this.step1.featured,
      objectives: this.objectives.filter(o => o.trim()).join('\n'),
      requirements: this.requirements.filter(r => r.trim()).join('\n'),
      price: this.step5.isFree ? 0 : this.step5.price,
      discountPrice: (this.step5.hasDiscount && this.step5.discountPrice) ? this.step5.discountPrice : null,
      discountEndsAt: (this.step5.hasDiscount && this.step5.discountEndsAt) ? this.step5.discountEndsAt : null
    };
    this.courseService.updateCourse(this.courseId!, payload).subscribe({
      next: () => {
        if (isPublished) {
          // Cours publié : les modifications sont sauvegardées comme « pending edit »
          // et l'admin les verra dans sa liste. Pas de changement de statut.
          this.loading = false;
          Swal.fire({
            icon: 'success',
            title: 'Modifications soumises',
            text: 'Vos modifications ont été enregistrées et soumises pour validation. L\'administrateur les examinera prochainement. Le cours reste visible aux étudiants en attendant.',
            confirmButtonText: 'Aller vers Dashboard',
            showDenyButton: true,
            denyButtonText: 'Mes cours',
            customClass: {
              confirmButton: 'btn btn-secondary main-btn me-2',
              denyButton: 'btn btn-outline-secondary main-btn',
              actions: 'd-flex justify-content-center gap-2',
            },
            buttonsStyling: false,
          }).then(result => {
            if (result.isConfirmed) {
              this.router.navigate([this.routes.instructor_dashboard]);
            } else if (result.isDenied) {
              this.router.navigate([this.routes.instructorMyCourses]);
            }
          });
          return;
        }
        // Cours DRAFT ou REJECTED → soumettre pour validation (PENDING)
        this.courseService.submitForReview(this.courseId!).subscribe({
          next: () => {
            this.loading = false;
            this.courseStatus = 'PENDING_REVIEW';
            const el = document.getElementById('success');
            if (el) { const modal = new bootstrap.Modal(el); modal.show(); }
          },
          error: (e) => {
            this.loading = false;
            this.errorMsg = e?.error?.message || 'Erreur lors de la soumission.';
          }
        });
      },
      error: (e) => { this.loading = false; this.errorMsg = e?.error?.message || 'Erreur lors de la mise à jour.'; }
    });
  }

  formatDuration(seconds: number): string {
    if (!seconds) return '';
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${s.toString().padStart(2, '0')}s`;
  }

  // ─── Lesson preview ─────────────────────────────────────────────────────────────────

  previewLesson: any = null;

  openPreview(lesson: any): void {
    this.previewLesson = lesson;
    setTimeout(() => {
      const el = document.getElementById('lesson_preview_modal');
      if (!el) return;
      const modal = bootstrap.Modal.getInstance(el) || new bootstrap.Modal(el);
      el.addEventListener('shown.bs.modal', () => {
        const body = el.querySelector('.article-preview-body') as HTMLElement | null;
        if (body) this._initCodeBlocks(body);
      }, { once: true });
      modal.show();
    }, 50);
  }

  getFileUrl(path: string): string {
    if (!path) return '#';
    const clean = path.startsWith('/') ? path : '/' + path;
    return 'http://localhost:8081' + clean;
  }

  // ─── Article editor (Quill.js) ───────────────────────────────────────────

  articleLesson: any = null;
  articleSaving = false;
  articleSaved = false;
  private _quill: any = null; // Quill instance, initialized on first modal open

  openArticleEditor(lesson: any): void {
    this.articleLesson = lesson;
    this.articleSaved = false;
    const el = document.getElementById('article_editor_modal');
    if (!el) return;
    const bsModal = bootstrap.Modal.getInstance(el) || new bootstrap.Modal(el);

    if (this._quill) {
      // Already initialized — just swap content
      this._quill.root.innerHTML = '';
      if (lesson.articleContent) {
        this._quill.clipboard.dangerouslyPasteHTML(lesson.articleContent);
      }
      bsModal.show();
      return;
    }

    // First open: init Quill after Bootstrap entrance animation completes
    el.addEventListener('shown.bs.modal', () => {
      const Quill = (window as any).Quill;
      if (!Quill || this._quill) return;
      this._quill = new Quill('#quill-editor-container', {
        theme: 'snow',
        modules: { toolbar: '#ql-article-toolbar' },
        placeholder: 'Rédigez votre article ici…'
      });
      if (lesson.articleContent) {
        this._quill.clipboard.dangerouslyPasteHTML(lesson.articleContent);
      }
    }, { once: true });

    bsModal.show();
  }

  // ─── Édition et suppression de leçon ────────────────────────────────

  openEditLessonModal(lesson: any): void {
    this.editLessonModel = { lesson, title: lesson.title, isFree: !!lesson.free };
  }

  confirmEditLesson(): void {
    if (!this.editLessonModel) return;
    const { lesson, title, isFree } = this.editLessonModel;
    if (!title.trim()) return;
    this.courseService.updateLesson(lesson.id, { title: title.trim(), isFree }).subscribe({
      next: (updated: any) => {
        lesson.title = updated.title;
        lesson.free  = updated.free;
        this.editLessonModel = null;
        const el = document.getElementById('edit-lesson');
        if (el) { const modal = bootstrap.Modal.getInstance(el); if (modal) modal.hide(); }
      },
      error: (e: any) => Swal.fire({ icon: 'error', title: 'Erreur', text: e?.error?.message || 'Impossible de modifier la leçon.' })
    });
  }

  deleteLesson(section: any, lesson: any): void {
    Swal.fire({
      icon: 'warning',
      title: 'Supprimer la leçon ?',
      html: `La leçon <b>« ${lesson.title} »</b> et tout son contenu (vidéo, PDF, article) seront <b>définitivement supprimés</b>.`,
      showCancelButton: true,
      confirmButtonText: 'Supprimer',
      cancelButtonText: 'Annuler',
      confirmButtonColor: '#e53e3e',
      cancelButtonColor: '#6c757d',
      reverseButtons: true,
    }).then(result => {
      if (!result.isConfirmed) return;
      this.courseService.deleteLesson(lesson.id).subscribe({
        next: () => {
          section.lessons = (section.lessons || []).filter((l: any) => l.id !== lesson.id);
        },
        error: (e: any) => Swal.fire({ icon: 'error', title: 'Erreur', text: e?.error?.message || 'Impossible de supprimer la leçon.' })
      });
    });
  }

  // ─── Suppression de contenu d'une leçon ─────────────────────────────

  deleteContent(lesson: any, type: 'video' | 'pdf' | 'article'): void {
    const labels: Record<string, string> = { video: 'vidéo', pdf: 'PDF', article: 'article' };
    Swal.fire({
      icon: 'warning',
      title: `Supprimer la ${labels[type]} ?`,
      text: `Cette action est irréversible. La ${labels[type]} de la leçon « ${lesson.title} » sera définitivement supprimée.`,
      showCancelButton: true,
      confirmButtonText: 'Supprimer',
      cancelButtonText: 'Annuler',
      confirmButtonColor: '#e53e3e',
      cancelButtonColor: '#6c757d',
      reverseButtons: true,
    }).then(result => {
      if (!result.isConfirmed) return;
      const obs = type === 'video'
        ? this.courseService.deleteLessonVideo(lesson.id)
        : type === 'pdf'
          ? this.courseService.deleteLessonPdf(lesson.id)
          : this.courseService.deleteLessonArticle(lesson.id);
      obs.subscribe({
        next: (updated: any) => {
          lesson.videoUrl       = updated.videoUrl       ?? null;
          lesson.pdfUrl         = updated.pdfUrl         ?? null;
          lesson.articleContent = updated.articleContent ?? null;
          lesson.lessonType     = updated.lessonType     ?? 'VIDEO';
        },
        error: (e: any) => {
          Swal.fire({ icon: 'error', title: 'Erreur', text: e?.error?.message || 'Impossible de supprimer le contenu.' });
        }
      });
    });
  }

  saveArticle(): void {
    if (!this._quill || !this.articleLesson) return;
    const content = this._quill.root.innerHTML;
    this.articleSaving = true;
    this.courseService.saveArticleContent(this.articleLesson.id, content).subscribe({
      next: (_: any) => {
        this.articleLesson.articleContent = content;
        this.articleLesson.lessonType = 'TEXT';
        for (const sec of this.sections) {
          const idx = (sec.lessons || []).findIndex((l: any) => l.id === this.articleLesson.id);
          if (idx >= 0) { sec.lessons[idx] = { ...sec.lessons[idx], articleContent: content, lessonType: 'TEXT' }; break; }
        }
        this.articleSaving = false;
        this.articleSaved = true;
      },
      error: () => { this.articleSaving = false; }
    });
  }

  // ─── Shared code-block enhancer (article preview: instructor + admin) ────

  _initCodeBlocks(container: HTMLElement): void {
    // Pass 1 — <pre> blocks (ql-syntax, language-*, bare pre)
    const preBlocks = Array.from(container.querySelectorAll<HTMLElement>('pre:not([data-cb-enhanced])'));
    preBlocks.forEach(pre => this._enhanceBlock(pre, (pre.querySelector('code') as HTMLElement) || pre));

    // Pass 2 — standalone <code> not inside a <pre>
    const codeBlocks = Array.from(container.querySelectorAll<HTMLElement>('code:not(pre code):not([data-cb-enhanced])'));
    codeBlocks.forEach(code => { code.style.display = 'block'; this._enhanceBlock(code, code); });

    // Pass 3 — smart fallback: no formal blocks but text looks like code
    if (preBlocks.length === 0 && codeBlocks.length === 0) {
      const text = container.textContent || '';
      if (/console\.|function |=>|var |let |const |<script|<div|document\.|window\.|import |export /.test(text)) {
        const banner = document.createElement('div');
        banner.setAttribute('data-cb-enhanced', 'true');
        banner.style.cssText =
          'background:#2d2d2d;border:1px solid #3a3a3a;border-radius:6px;padding:10px 14px;' +
          'display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;gap:12px;';
        banner.innerHTML =
          '<span style="font-size:12px;color:#aaa;font-family:monospace;">' +
          '<i class="fa-solid fa-triangle-exclamation" style="color:#ffb74d;margin-right:6px"></i>' +
          'Aucun bloc de code formel — le texte semble contenir du code.' +
          '</span>';
        const runAll = document.createElement('button');
        runAll.innerHTML = '<i class="fa-solid fa-play" style="margin-right:5px"></i>Exécuter comme JS';
        runAll.style.cssText = 'font-size:11px;padding:4px 12px;border:1px solid #4caf50;background:transparent;color:#4caf50;border-radius:4px;cursor:pointer;white-space:nowrap;flex-shrink:0;';
        runAll.addEventListener('click', () => {
          let w = container.querySelector<HTMLElement>('.cb-smart-wrapper');
          if (!w) { w = document.createElement('div'); w.className = 'cb-smart-wrapper'; container.appendChild(w); }
          this._runCode(text, 'js', w!);
        });
        banner.appendChild(runAll);
        container.insertBefore(banner, container.firstChild);
      }
    }
  }

  private _enhanceBlock(blockEl: HTMLElement, codeEl: HTMLElement): void {
    blockEl.setAttribute('data-cb-enhanced', 'true');
    const raw = codeEl.textContent || '';
    if (!raw.trim()) return;

    const classStr  = (codeEl.className || '') + ' ' + (blockEl.className || '');
    const langMatch = classStr.match(/language-(\w+)|lang-(\w+)/i);
    const dataLang  = blockEl.getAttribute('data-lang') || codeEl.getAttribute('data-lang') || '';
    const lang      = langMatch ? (langMatch[1] || langMatch[2]).toLowerCase() : (dataLang || 'js');
    // All languages are runnable: native for JS/TS/HTML, Piston API for the rest
    const isRunnable = true;

    const wrapper = document.createElement('div');
    wrapper.className = 'cb-card mb-3 rounded overflow-hidden';
    wrapper.style.cssText = 'border:1px solid #3a3a3a;';
    blockEl.parentNode?.insertBefore(wrapper, blockEl);
    wrapper.appendChild(blockEl);

    blockEl.style.cssText =
      'background:#1e1e1e;color:#d4d4d4;margin:0;padding:14px 18px;' +
      'font-size:13px;line-height:1.65;overflow-x:auto;white-space:pre;font-family:monospace;';

    const bar     = document.createElement('div');
    bar.style.cssText = 'background:#2d2d2d;display:flex;justify-content:space-between;align-items:center;padding:5px 14px;gap:8px;';

    const badge   = document.createElement('span');
    badge.textContent   = lang.toUpperCase();
    badge.style.cssText = 'font-size:10px;font-family:monospace;color:#aaa;letter-spacing:1px;';
    bar.appendChild(badge);

    const btnRow  = document.createElement('div');
    btnRow.style.cssText = 'display:flex;gap:6px;';

    if (isRunnable) {
      const runBtn = document.createElement('button');
      runBtn.innerHTML   = '<i class="fa-solid fa-play" style="margin-right:4px"></i>Exécuter';
      runBtn.style.cssText = 'font-size:11px;padding:3px 10px;border:1px solid #4caf50;background:transparent;color:#4caf50;border-radius:4px;cursor:pointer;';
      runBtn.addEventListener('click', () => this._runCode(raw, lang, wrapper));
      btnRow.appendChild(runBtn);
    }

    const copyBtn = document.createElement('button');
    copyBtn.innerHTML   = '<i class="fa-solid fa-copy" style="margin-right:4px"></i>Copier';
    copyBtn.style.cssText = 'font-size:11px;padding:3px 10px;border:1px solid #888;background:transparent;color:#ccc;border-radius:4px;cursor:pointer;';
    copyBtn.addEventListener('click', () => {
      const fallback = () => { const t = document.createElement('textarea'); t.value = raw; document.body.appendChild(t); t.select(); document.execCommand('copy'); document.body.removeChild(t); };
      navigator.clipboard?.writeText(raw).then(() => {/*ok*/}, fallback) ?? fallback();
      copyBtn.innerHTML   = '<i class="fa-solid fa-check" style="margin-right:4px"></i>Copié !';
      copyBtn.style.color = '#4ec9b0'; copyBtn.style.borderColor = '#4ec9b0';
      setTimeout(() => { copyBtn.innerHTML = '<i class="fa-solid fa-copy" style="margin-right:4px"></i>Copier'; copyBtn.style.color = '#ccc'; copyBtn.style.borderColor = '#888'; }, 2000);
    });
    btnRow.appendChild(copyBtn);
    bar.appendChild(btnRow);
    wrapper.insertBefore(bar, blockEl);
  }

  _runCode(code: string, lang: string, wrapper: HTMLElement): void {
    wrapper.querySelector('.cb-runner')?.remove();
    const runner = document.createElement('div');
    runner.className   = 'cb-runner';
    runner.style.cssText = 'border-top:1px solid #333;';

    const hdr = document.createElement('div');
    hdr.style.cssText = 'display:flex;justify-content:space-between;align-items:center;padding:4px 14px;background:#111;';
    const X = document.createElement('button');
    X.textContent   = '✕';
    X.style.cssText = 'background:none;border:none;color:#888;cursor:pointer;font-size:14px;line-height:1;';
    X.addEventListener('click', () => runner.remove());

    if (lang === 'html') {
      // ─ HTML: iframe sandboxed renderer ────────────────────────────────────────────
      hdr.innerHTML = '<span style="font-size:12px;color:#aaa"><i class="fa-solid fa-display" style="color:#64b5f6;margin-right:6px"></i>Rendu HTML</span>';
      hdr.appendChild(X); runner.appendChild(hdr);
      const frame = document.createElement('iframe');
      frame.srcdoc = code;
      frame.setAttribute('sandbox', 'allow-scripts allow-same-origin');
      frame.style.cssText = 'width:100%;height:300px;border:none;background:#fff;display:block;';
      runner.appendChild(frame);

    } else if (['js', 'javascript', 'ts', 'typescript'].includes(lang)) {
      // ─ JS / TS: native browser execution ────────────────────────────────────
      hdr.innerHTML = '<span style="font-size:12px;color:#aaa"><i class="fa-solid fa-terminal" style="color:#a5d6a7;margin-right:6px"></i>Console (natif)</span>';
      hdr.appendChild(X); runner.appendChild(hdr);
      const out = document.createElement('div');
      out.style.cssText = 'background:#0d0d0d;font-family:monospace;font-size:13px;padding:12px 16px;min-height:60px;max-height:240px;overflow-y:auto;';
      const logs: string[] = [];
      const orig = { log: console.log, error: console.error, warn: console.warn };
      const esc  = (x: unknown) => (typeof x === 'object' ? JSON.stringify(x, null, 2) : String(x))
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      console.log   = (...a) => { orig.log(...a);   logs.push(`<span style="color:#4ec9b0">${a.map(esc).join(' ')}</span>`); };
      console.error = (...a) => { orig.error(...a); logs.push(`<span style="color:#f44336">❌ ${a.map(esc).join(' ')}</span>`); };
      console.warn  = (...a) => { orig.warn(...a);  logs.push(`<span style="color:#ffb74d">⚠️ ${a.map(esc).join(' ')}</span>`); };
      try { new Function(code)(); } catch (e: any) { logs.push(`<span style="color:#f44336">❌ ${esc(e.message)}</span>`); }
      finally { Object.assign(console, orig); }
      out.innerHTML = logs.length ? logs.join('<br>') : '<span style="color:#555">// Aucune sortie console</span>';
      runner.appendChild(out);

    } else {
      // ─ All other languages: Piston API ─────────────────────────────────────────
      hdr.innerHTML = `<span style="font-size:12px;color:#aaa"><i class="fa-solid fa-cloud" style="color:#64b5f6;margin-right:6px"></i>Piston — ${lang.toUpperCase()}</span>`;
      hdr.appendChild(X); runner.appendChild(hdr);
      const out = document.createElement('div');
      out.style.cssText = 'background:#0d0d0d;font-family:monospace;font-size:13px;padding:12px 16px;min-height:60px;max-height:240px;overflow-y:auto;';
      runner.appendChild(out);
      this._runWithPiston(code, lang, out);
    }

    wrapper.appendChild(runner);
  }

  // ─── Piston integration ───────────────────────────────────────────────
  //  Maps our language identifiers to Piston [language, version] tuples.
  //  See https://emkc.org/api/v2/piston/runtimes for the full list.
  private readonly PISTON_LANGS: Record<string, [string, string]> = {
    python:  ['python',     '3.10.0'],
    py:      ['python',     '3.10.0'],
    java:    ['java',       '15.0.2'],
    c:       ['c',          '10.2.0'],
    cpp:     ['c++',        '10.2.0'],
    bash:    ['bash',       '5.1.0' ],
    sh:      ['bash',       '5.1.0' ],
    php:     ['php',        '8.0.0' ],
    ruby:    ['ruby',       '3.0.0' ],
    rb:      ['ruby',       '3.0.0' ],
    rust:    ['rust',       '1.50.0'],
    rs:      ['rust',       '1.50.0'],
    go:      ['go',         '1.16.2'],
    kotlin:  ['kotlin',     '1.6.0' ],
    kt:      ['kotlin',     '1.6.0' ],
    swift:   ['swift',      '5.3.3' ],
    csharp:  ['csharp',     '6.12.0'],
    cs:      ['csharp',     '6.12.0'],
    r:       ['r',          '4.1.1' ],
    sql:     ['sqlite3',    '3.36.0'],
  };

  private _runWithPiston(code: string, lang: string, out: HTMLElement): void {
    const mapping = this.PISTON_LANGS[lang];
    const html = (s: string) => s
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br>');

    if (!mapping) {
      out.innerHTML = `<span style="color:#ffb74d">⚠️ Langage "${lang}" non configuré pour l'exécution.</span>`;
      return;
    }

    const [pistonLang, pistonVer] = mapping;
    out.innerHTML = '<span style="color:#aaa"><i class="fa-solid fa-spinner fa-spin" style="margin-right:6px"></i>Exécution via Piston…</span>';

    fetch('https://emkc.org/api/v2/piston/execute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        language: pistonLang,
        version:  pistonVer,
        files: [{ content: code }]
      })
    })
    .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })
    .then((res: any) => {
      const stdout  = (res?.run?.stdout     || '').trim();
      const stderr  = (res?.run?.stderr     || '').trim();
      const compile = (res?.compile?.stderr || '').trim();
      const parts: string[] = [];
      if (compile) parts.push(`<span style="color:#ff7043">⚙️ Erreur de compilation:<br>${html(compile)}</span>`);
      if (stdout)  parts.push(`<span style="color:#4ec9b0">${html(stdout)}</span>`);
      if (stderr)  parts.push(`<span style="color:#f44336">❌ ${html(stderr)}</span>`);
      if (!parts.length) parts.push('<span style="color:#555">// Aucune sortie</span>');
      out.innerHTML = parts.join('<br>');
    })
    .catch((e: any) => {
      out.innerHTML = `<span style="color:#f44336">❌ Piston inaccessible : ${e.message}</span>`;
    });
  }
}