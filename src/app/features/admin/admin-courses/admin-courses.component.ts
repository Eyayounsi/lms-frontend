import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../../shared/service/course/course.service';
import { SafeUrlPipe } from '../../../shared/pipe/safe-url.pipe';
import { resolveCourseImage } from '../../../shared/utils/course-image.util';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-courses',
  standalone: true,
  imports: [CommonModule, FormsModule, SafeUrlPipe],
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.scss']
})
export class AdminCoursesComponent implements OnInit {

  pendingCourses: any[] = [];
  publishedCourses: any[] = [];
  loading = true;
  loadingPublished = true;
  errorMessage = '';
  successMessage = '';

  // Onglet actif : 'pending' | 'published' | 'all' | 'pending-edits' | 'archived'
  activeTab: 'pending' | 'published' | 'all' | 'pending-edits' | 'archived' = 'pending';
  allCourses: any[] = [];
  loadingAll = true;

  // Modifications en attente
  pendingEditsCourses: any[] = [];
  loadingPendingEdits = true;

  // Cours archivés
  archivedCourses: any[] = [];
  loadingArchived = true;

  // Modal détail
  selectedCourse: any = null;
  showDetailModal = false;

  // Modal rejet
  showRejectModal = false;
  rejectionReason = '';
  rejectSubmitting = false;

  // Modal rejet modification
  showRejectEditModal = false;
  editRejectReason = '';
  editRejectCourse: any = null;

  // Modal prix
  showPriceModal = false;
  newPrice = 0;

  // Modal promotion
  showPromoModal = false;
  promoPrice = 0;
  promoEndsAt = '';

  // Confirm delete
  showDeleteModal = false;
  courseToDelete: any = null;

  // Admin edit mode (inline dans le modal détail)
  adminEditMode = false;
  adminEditForm: any = {};
  categories: any[] = [];

  // Reviews dans le modal
  modalReviews: any[] = [];
  loadingReviews = false;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadPendingCourses();
    this.loadPublishedCourses();
    this.loadAllCourses();
    this.loadPendingEditsCourses();
    this.loadArchivedCourses();
    this.courseService.getCategories().subscribe({
      next: (cats) => (this.categories = cats),
      error: () => {}
    });
  }

  loadAllCourses(): void {
    this.loadingAll = true;
    this.courseService.getAllCoursesForAdmin().subscribe({
      next: (data) => { this.allCourses = data; this.loadingAll = false; },
      error: () => { this.loadingAll = false; }
    });
  }

  loadPendingEditsCourses(): void {
    this.loadingPendingEdits = true;
    this.courseService.getCoursesWithPendingEdits().subscribe({
      next: (data) => { this.pendingEditsCourses = data; this.loadingPendingEdits = false; },
      error: () => { this.loadingPendingEdits = false; }
    });
  }

  loadArchivedCourses(): void {
    this.loadingArchived = true;
    this.courseService.getArchivedCoursesForAdmin().subscribe({
      next: (data) => { this.archivedCourses = data; this.loadingArchived = false; },
      error: () => { this.loadingArchived = false; }
    });
  }

  loadPendingCourses(): void {
    this.loading = true;
    this.courseService.getPendingCourses().subscribe({
      next: (data) => {
        this.pendingCourses = data;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = 'Erreur lors du chargement des cours en attente';
        this.loading = false;
        console.error(err);
      }
    });
  }

  loadPublishedCourses(): void {
    this.loadingPublished = true;
    this.courseService.getPublishedCoursesForAdmin().subscribe({
      next: (data) => {
        this.publishedCourses = data;
        this.loadingPublished = false;
      },
      error: (err) => {
        console.error('Erreur chargement cours publiés', err);
        this.loadingPublished = false;
      }
    });
  }

  switchTab(tab: 'pending' | 'published' | 'all' | 'pending-edits' | 'archived'): void {
    this.activeTab = tab;
  }

  // Voir le détail
  openDetail(course: any): void {
    this.courseService.getCourseForAdmin(course.id).subscribe({
      next: (data) => {
        this.selectedCourse = data;
        this.showDetailModal = true;
        this.modalReviews = [];
        this.loadModalReviews(data.id);
      },
      error: (err) => console.error(err)
    });
  }

  closeDetail(): void {
    this.showDetailModal = false;
    this.selectedCourse = null;
    this.adminEditMode = false;
    this.modalReviews = [];
    this.approveSubmitting = false;
  }

  loadModalReviews(courseId: number): void {
    this.loadingReviews = true;
    this.courseService.getCourseReviews(courseId).subscribe({
      next: (data) => { this.modalReviews = data; this.loadingReviews = false; },
      error: () => { this.loadingReviews = false; }
    });
  }

  /** Centralized refresh to ensure all tabs are up-to-date after an action */
  refreshAll(): void {
    this.loadPendingCourses();
    this.loadPublishedCourses();
    this.loadAllCourses();
    this.loadPendingEditsCourses();
    this.loadArchivedCourses();
  }

  deleteReviewAdmin(review: any): void {
    Swal.fire({
      title: 'Supprimer cet avis ?',
      html: `Avis de <strong>${review.studentName}</strong> — action irréversible.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '<i class="fa-solid fa-trash me-1"></i>Supprimer',
      cancelButtonText: 'Annuler',
      confirmButtonColor: '#dc2626',
      cancelButtonColor: '#6b7280',
      customClass: { popup: 'rounded-4 shadow' }
    }).then(result => {
      if (!result.isConfirmed) return;
      this.courseService.adminDeleteReview(review.id).subscribe({
        next: () => {
          this.modalReviews = this.modalReviews.filter(r => r.id !== review.id);
          this.showToast('success', `Avis de ${review.studentName} supprimé.`);
        },
        error: (e) => this.showToast('error', e?.error?.message || 'Erreur.')
      });
    });
  }

  approveSubmitting = false;

  // Approuver
  approveCourse(course: any): void {
    if (this.approveSubmitting) return;

    Swal.fire({
      title: 'Approuver ce cours ?',
      html: `Le cours <strong>${course.title}</strong> sera visible par tous les étudiants.`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: '<i class="fa-solid fa-check me-1"></i>Approuver',
      cancelButtonText: 'Annuler',
      confirmButtonColor: '#16a34a',
      cancelButtonColor: '#6b7280',
      customClass: { popup: 'rounded-4 shadow' }
    }).then(result => {
      if (!result.isConfirmed) return;
      this.approveSubmitting = true;
      this.courseService.reviewCourse(course.id, { action: 'APPROVE' }).subscribe({
        next: () => {
          this.approveSubmitting = false;
          this.showToast('success', 'Cours approuvé avec succès !');
          this.refreshAll();
          this.closeDetail();
        },
        error: (err) => {
          this.approveSubmitting = false;
          this.showToast('error', err.error?.message || "Erreur lors de l'approbation");
        }
      });
    });
  }

  // Rejeter
  openRejectModal(course: any): void {
    this.selectedCourse = course;
    this.showRejectModal = true;
    this.rejectionReason = '';
    this.rejectSubmitting = false;
  }

  closeRejectModal(): void {
    this.showRejectModal = false;
    this.rejectionReason = '';
    this.rejectSubmitting = false;
  }

  confirmReject(): void {
    if (!this.selectedCourse || this.rejectSubmitting) return;
    this.rejectSubmitting = true;
    const courseSnapshot = this.selectedCourse;
    const reasonSnapshot = this.rejectionReason.trim() || undefined;
    this.showRejectModal = false;
    this.closeDetail();
    this.courseService.reviewCourse(courseSnapshot.id, {
      action: 'REJECT',
      rejectionReason: reasonSnapshot
    }).subscribe({
      next: () => {
        this.rejectSubmitting = false;
        this.showToast('success', 'Cours rejeté');
        this.refreshAll();
      },
      error: (err) => {
        this.rejectSubmitting = false;
        this.selectedCourse = courseSnapshot;
        this.rejectionReason = reasonSnapshot || '';
        this.showRejectModal = true;
        this.showToast('error', err.error?.message || 'Erreur lors du rejet');
      }
    });
  }

  // Admin: Supprimer
  openDeleteModal(course: any): void {
    this.courseToDelete = course;
    this.showDeleteModal = true;
  }

  closeDeleteModal(): void {
    this.courseToDelete = null;
    this.showDeleteModal = false;
  }

  confirmAdminDelete(): void {
    if (!this.courseToDelete) return;
    this.courseService.adminDeleteCourse(this.courseToDelete.id).subscribe({
      next: () => {
        this.showToast('success', 'Cours supprimé définitivement');
        this.closeDeleteModal();
        this.loadPendingCourses(); this.loadPublishedCourses();
        this.loadAllCourses(); this.loadArchivedCourses();
      },
      error: (err) => { this.showToast('error', err.error?.message || 'Erreur lors de la suppression'); this.closeDeleteModal(); }
    });
  }

  // Admin: Archiver
  adminArchive(course: any): void {
    Swal.fire({
      title: 'Archiver ce cours ?',
      html: `<strong>${course.title}</strong> ne sera plus visible par les étudiants.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '<i class="fa-solid fa-box-archive me-1"></i>Archiver',
      cancelButtonText: 'Annuler',
      confirmButtonColor: '#475569',
      cancelButtonColor: '#6b7280',
      customClass: { popup: 'rounded-4 shadow' }
    }).then(result => {
      if (!result.isConfirmed) return;
      this.courseService.adminArchiveCourse(course.id).subscribe({
        next: () => {
          this.showToast('success', 'Cours archivé');
          this.loadPublishedCourses(); this.loadAllCourses(); this.loadArchivedCourses();
        },
        error: (err) => this.showToast('error', err.error?.message || "Erreur lors de l'archivage")
      });
    });
  }

  // Admin: Désarchiver
  adminUnarchive(course: any): void {
    Swal.fire({
      title: 'Désarchiver ce cours ?',
      html: `<strong>${course.title}</strong> sera remis en ligne et visible par tous.`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: '<i class="fa-solid fa-rotate-left me-1"></i>Désarchiver',
      cancelButtonText: 'Annuler',
      confirmButtonColor: '#16a34a',
      cancelButtonColor: '#6b7280',
      customClass: { popup: 'rounded-4 shadow' }
    }).then(result => {
      if (!result.isConfirmed) return;
      this.courseService.adminUnarchiveCourse(course.id).subscribe({
        next: () => {
          this.showToast('success', 'Cours remis en ligne');
          this.loadPublishedCourses(); this.loadAllCourses(); this.loadArchivedCourses();
        },
        error: (err) => this.showToast('error', err.error?.message || 'Erreur lors du désarchivage')
      });
    });
  }

  // Admin: Modifier le prix
  openPriceModal(course: any): void {
    this.selectedCourse = course;
    this.newPrice = course.price || 0;
    this.showPriceModal = true;
  }

  closePriceModal(): void {
    this.showPriceModal = false;
    this.newPrice = 0;
  }

  savePriceModal(): void {
    if (!this.selectedCourse) return;
    this.courseService.adminUpdatePrice(this.selectedCourse.id, this.newPrice).subscribe({
      next: () => {
        this.showToast('success', 'Prix mis à jour !');
        this.closePriceModal();
        this.loadPublishedCourses();
        this.loadAllCourses();
      },
      error: (err) => this.showToast('error', err.error?.message || 'Erreur lors de la mise à jour du prix')
    });
  }

  // Admin: Promotion
  openPromoModal(course: any): void {
    this.selectedCourse = course;
    this.promoPrice = course.discountPrice || 0;
    this.promoEndsAt = '';
    this.showPromoModal = true;
  }

  closePromoModal(): void {
    this.showPromoModal = false;
    this.promoPrice = 0;
    this.promoEndsAt = '';
  }

  savePromoModal(): void {
    if (!this.selectedCourse) return;
    this.courseService.adminSetPromotion(this.selectedCourse.id, this.promoPrice, this.promoEndsAt).subscribe({
      next: () => {
        this.showToast('success', 'Promotion appliquée !');
        this.closePromoModal();
        this.loadPublishedCourses();
        this.loadAllCourses();
      },
      error: (err) => this.showToast('error', err.error?.message || "Erreur lors de l'application de la promotion")
    });
  }

  // Utilitaires
  getLevelLabel(level: string): string {
    switch (level) {
      case 'BEGINNER': return 'Débutant';
      case 'INTERMEDIATE': return 'Intermédiaire';
      case 'ADVANCED': return 'Avancé';
      default: return level;
    }
  }

  getImageUrl(path: string): string {
    return resolveCourseImage(path);
  }

  getFileUrl(path: string): string {
    if (!path) return '#';
    if (path.startsWith('http://') || path.startsWith('https://')) return path;
    // Utilise resolveCourseImage pour pointer vers le backend (gestion des /uploads)
    return resolveCourseImage(path, '#');
  }

  // Aperçu contenu de leçon (admin)
  previewLesson: any = null;

  openLessonPreview(lesson: any): void {
    this.previewLesson = lesson;
    setTimeout(() => {
      const el = document.getElementById('admin_lesson_preview');
      if (!el) return;

      // --- Backdrop fix for STACKED modals ---
      // We open this preview on top of the detail modal that is already open.
      // Passing { backdrop: false } prevents Bootstrap from creating a second
      // backdrop and, critically, from removing modal-open from <body> when
      // this child modal closes — so the parent modal stays fully interactive.
      let modal = (window as any).bootstrap.Modal.getInstance(el);
      if (!modal) {
        modal = new (window as any).bootstrap.Modal(el, { backdrop: false, keyboard: true });
      }

      // Enhance code blocks after animation finishes
      el.addEventListener('shown.bs.modal', () => {
        const articleBody = el.querySelector('.article-preview-body') as HTMLElement | null;
        if (articleBody) this.initCodeBlocks(articleBody);
      }, { once: true });

      modal.show();
    }, 50);
  }

  /**
   * Scans for code blocks inside an article body and enhances them with
   * a dark toolbar (language badge, Copy, Exécuter).
   *
   * Targets (in priority order):
   *  1. <pre> / <pre><code> — standard + Quill (ql-syntax) + Prism (language-*)
   *  2. Standalone <code> not already inside a <pre>
   *  3. Smart fallback: if NONE of the above found but text looks like JS/HTML,
   *     wraps the entire article text in a runnable pseudo-block.
   */
  initCodeBlocks(container: HTMLElement): void {
    // ── Pass 1: <pre> blocks ───────────────────────────────────────────────
    const preBlocks = Array.from(
      container.querySelectorAll<HTMLElement>('pre:not([data-cb-enhanced])')
    );
    preBlocks.forEach(pre => this._enhanceBlock(pre, pre.querySelector('code') || pre));

    // ── Pass 2: standalone <code> not inside a <pre> ───────────────────────
    const codeBlocks = Array.from(
      container.querySelectorAll<HTMLElement>('code:not(pre code):not([data-cb-enhanced])')
    );
    codeBlocks.forEach(code => {
      // Promote to block display
      code.style.display = 'block';
      this._enhanceBlock(code, code);
    });

    // ── Pass 3: smart fallback désactivé pour afficher le contenu proprement ─────────
    // Le contenu article s'affiche maintenant sans message d'avertissement
  }

  /** Internal helper: injects the dark card around a single block element */
  private _enhanceBlock(blockEl: HTMLElement, codeEl: HTMLElement): void {
    blockEl.setAttribute('data-cb-enhanced', 'true');
    const raw = codeEl.textContent || '';
    if (!raw.trim()) return;

    // Detect language
    const classStr = (codeEl.className || '') + ' ' + (blockEl.className || '');
    const langMatch = classStr.match(/language-(\w+)|lang-(\w+)/i);
    // Quill uses ql-syntax with no language; default to js
    const lang = langMatch ? (langMatch[1] || langMatch[2]).toLowerCase() : 'js';
    // All languages runnable: native for JS/TS/HTML, Piston API for the rest
    const isRunnable = true;

    // Card wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'cb-card mb-3 rounded overflow-hidden';
    wrapper.style.cssText = 'border:1px solid #3a3a3a;';
    blockEl.parentNode?.insertBefore(wrapper, blockEl);
    wrapper.appendChild(blockEl);

    // Style the code element
    blockEl.style.cssText =
      'background:#1e1e1e;color:#d4d4d4;margin:0;padding:14px 16px;' +
      'font-size:13px;line-height:1.65;overflow-x:auto;white-space:pre;font-family:monospace;';

    // Toolbar
    const bar = document.createElement('div');
    bar.style.cssText =
      'background:#2d2d2d;display:flex;justify-content:space-between;' +
      'align-items:center;padding:5px 12px;gap:8px;';

    const langBadge = document.createElement('span');
    langBadge.textContent = lang.toUpperCase();
    langBadge.style.cssText = 'font-size:10px;font-family:monospace;color:#aaa;letter-spacing:1px;';
    bar.appendChild(langBadge);

    const btnWrap = document.createElement('div');
    btnWrap.style.cssText = 'display:flex;gap:6px;';

    if (isRunnable) {
      const runBtn = document.createElement('button');
      runBtn.innerHTML = '<i class="fa-solid fa-play" style="margin-right:4px"></i>Exécuter';
      runBtn.style.cssText =
        'font-size:11px;padding:3px 10px;border:1px solid #4caf50;' +
        'background:transparent;color:#4caf50;border-radius:4px;cursor:pointer;';
      runBtn.addEventListener('click', () => this.runCode(raw, lang, wrapper));
      btnWrap.appendChild(runBtn);
    }

    const copyBtn = document.createElement('button');
    copyBtn.innerHTML = '<i class="fa-solid fa-copy" style="margin-right:4px"></i>Copier';
    copyBtn.style.cssText =
      'font-size:11px;padding:3px 10px;border:1px solid #888;' +
      'background:transparent;color:#ccc;border-radius:4px;cursor:pointer;';
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(raw).then(() => {
        copyBtn.innerHTML = '<i class="fa-solid fa-check" style="margin-right:4px"></i>Copié !';
        copyBtn.style.color = '#4ec9b0';
        copyBtn.style.borderColor = '#4ec9b0';
        setTimeout(() => {
          copyBtn.innerHTML = '<i class="fa-solid fa-copy" style="margin-right:4px"></i>Copier';
          copyBtn.style.color = '#ccc';
          copyBtn.style.borderColor = '#888';
        }, 1800);
      }).catch(() => {
        // Clipboard API unavailable in some contexts
        const ta = document.createElement('textarea');
        ta.value = raw;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        copyBtn.innerHTML = '<i class="fa-solid fa-check" style="margin-right:4px"></i>Copié !';
        setTimeout(() => {
          copyBtn.innerHTML = '<i class="fa-solid fa-copy" style="margin-right:4px"></i>Copier';
        }, 1800);
      });
    });
    btnWrap.appendChild(copyBtn);

    bar.appendChild(btnWrap);
    wrapper.insertBefore(bar, blockEl);
  }

  /**
   * Executes code inline:
   * - HTML → sandboxed <iframe srcdoc>
   * - JS/TS → new Function() with console capture
   */
  runCode(code: string, lang: string, wrapper: Element): void {
    wrapper.querySelector('.cb-runner')?.remove();
    const runner = document.createElement('div');
    runner.className = 'cb-runner';
    runner.style.cssText = 'border-top:1px solid #333;';

    const hdr = document.createElement('div');
    hdr.style.cssText = 'display:flex;justify-content:space-between;align-items:center;padding:4px 12px;background:#111;';
    const X = document.createElement('button');
    X.textContent = '✕';
    X.title = 'Fermer';
    X.style.cssText = 'background:none;border:none;color:#888;cursor:pointer;font-size:14px;line-height:1;';
    X.addEventListener('click', () => runner.remove());

    if (lang === 'html') {
      // ─ HTML: iframe sandboxed renderer ──────────────────────────────────────────
      hdr.innerHTML = '<span style="font-size:12px;color:#aaa"><i class="fa-solid fa-display" style="margin-right:6px;color:#64b5f6"></i>Rendu HTML</span>';
      hdr.appendChild(X); runner.appendChild(hdr);
      const frame = document.createElement('iframe');
      frame.srcdoc = code;
      frame.setAttribute('sandbox', 'allow-scripts allow-same-origin');
      frame.style.cssText = 'width:100%;height:300px;border:none;background:#fff;display:block;';
      runner.appendChild(frame);

    } else if (['js', 'javascript', 'ts', 'typescript'].includes(lang)) {
      // ─ JS / TS: native browser execution ───────────────────────────────────
      hdr.innerHTML = '<span style="font-size:12px;color:#aaa"><i class="fa-solid fa-terminal" style="margin-right:6px;color:#a5d6a7"></i>Console (natif)</span>';
      hdr.appendChild(X); runner.appendChild(hdr);
      const out = document.createElement('div');
      out.style.cssText = 'background:#0d0d0d;font-family:monospace;font-size:13px;padding:12px 16px;min-height:60px;max-height:240px;overflow-y:auto;';
      const logs: string[] = [];
      const orig = { log: console.log, error: console.error, warn: console.warn };
      const esc = (x: unknown) => (typeof x === 'object' ? JSON.stringify(x, null, 2) : String(x))
        .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
      console.log   = (...a) => { orig.log(...a);   logs.push(`<span style="color:#4ec9b0">${a.map(esc).join(' ')}</span>`); };
      console.error = (...a) => { orig.error(...a); logs.push(`<span style="color:#f44336">❌ ${a.map(esc).join(' ')}</span>`); };
      console.warn  = (...a) => { orig.warn(...a);  logs.push(`<span style="color:#ffb74d">⚠️ ${a.map(esc).join(' ')}</span>`); };
      try { new Function(code)(); } catch (e: any) { logs.push(`<span style="color:#f44336">❌ ${esc(e.message)}</span>`); }
      finally { Object.assign(console, orig); }
      out.innerHTML = logs.length ? logs.join('<br>') : '<span style="color:#555">// Aucune sortie console</span>';
      runner.appendChild(out);

    } else {
      // ─ All other languages: Piston API ───────────────────────────────────────
      hdr.innerHTML = `<span style="font-size:12px;color:#aaa"><i class="fa-solid fa-cloud" style="color:#64b5f6;margin-right:6px"></i>Piston — ${lang.toUpperCase()}</span>`;
      hdr.appendChild(X); runner.appendChild(hdr);
      const out = document.createElement('div');
      out.style.cssText = 'background:#0d0d0d;font-family:monospace;font-size:13px;padding:12px 16px;min-height:60px;max-height:240px;overflow-y:auto;';
      runner.appendChild(out);
      this._runWithPiston(code, lang, out);
    }

    wrapper.appendChild(runner);
  }

  // ─── Piston integration ─────────────────────────────────────────────
  private readonly PISTON_LANGS: Record<string, [string, string]> = {
    python:  ['python',  '3.10.0'],
    py:      ['python',  '3.10.0'],
    java:    ['java',    '15.0.2'],
    c:       ['c',       '10.2.0'],
    cpp:     ['c++',     '10.2.0'],
    bash:    ['bash',    '5.1.0' ],
    sh:      ['bash',    '5.1.0' ],
    php:     ['php',     '8.0.0' ],
    ruby:    ['ruby',    '3.0.0' ],
    rb:      ['ruby',    '3.0.0' ],
    rust:    ['rust',    '1.50.0'],
    rs:      ['rust',    '1.50.0'],
    go:      ['go',      '1.16.2'],
    kotlin:  ['kotlin',  '1.6.0' ],
    kt:      ['kotlin',  '1.6.0' ],
    swift:   ['swift',   '5.3.3' ],
    csharp:  ['csharp',  '6.12.0'],
    cs:      ['csharp',  '6.12.0'],
    r:       ['r',       '4.1.1' ],
    sql:     ['sqlite3', '3.36.0'],
  };

  private _runWithPiston(code: string, lang: string, out: HTMLElement): void {
    const mapping = this.PISTON_LANGS[lang];
    const html = (s: string) => s
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br>');

    if (!mapping) {
      out.innerHTML = `<span style="color:#ffb74d">⚠️ Langage "${lang}" non configuré pour l'exécution distante.</span>`;
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
      if (compile) parts.push(`<span style="color:#ff7043">⚙️ Erreur de compilation :<br>${html(compile)}</span>`);
      if (stdout)  parts.push(`<span style="color:#4ec9b0">${html(stdout)}</span>`);
      if (stderr)  parts.push(`<span style="color:#f44336">❌ ${html(stderr)}</span>`);
      if (!parts.length) parts.push('<span style="color:#555">// Aucune sortie</span>');
      out.innerHTML = parts.join('<br>');
    })
    .catch((e: any) => {
      out.innerHTML = `<span style="color:#f44336">❌ Piston inaccessible : ${e.message}</span>`;
    });
  }

  // Admin: ouvrir le formulaire d'édition
  openAdminEdit(): void {
    if (!this.selectedCourse) return;
    this.adminEditMode = true;
    this.adminEditForm = {
      title: this.selectedCourse.title || '',
      description: this.selectedCourse.description || '',
      level: this.selectedCourse.level || 'BEGINNER',
      language: this.selectedCourse.language || 'Français',
      objectives: this.selectedCourse.objectives || '',
      requirements: this.selectedCourse.requirements || '',
      categoryId: this.selectedCourse.categoryId || null
    };
  }

  cancelAdminEdit(): void {
    this.adminEditMode = false;
  }

  saveAdminEdit(): void {
    if (!this.selectedCourse) return;
    this.courseService.adminEditCourse(this.selectedCourse.id, this.adminEditForm).subscribe({
      next: (updated) => {
        this.showToast('success', 'Cours mis à jour !');
        this.selectedCourse = updated;
        this.adminEditMode = false;
        this.refreshAll();
      },
      error: (err) => this.showToast('error', err.error?.message || 'Erreur lors de la mise à jour')
    });
  }

  private showToast(type: 'success' | 'error' | 'warning' | 'info', msg: string): void {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });
    Toast.fire({ icon: type, title: msg });
  }

  toggleFeatured(course: any): void {
    const newFeatured = !course.featured;
    this.courseService.toggleFeatured(course.id, newFeatured).subscribe({
      next: () => {
        course.featured = newFeatured;
        this.showToast('success', newFeatured
          ? `"${course.title}" mis en avant !`
          : `"${course.title}" retiré des mis en avant.`);
      },
      error: (err) => this.showToast('error', err.error?.message || 'Impossible de modifier le featured.')
    });
  }

  // ═══════════════════════════════════════════════════════════════════════
  //  PENDING EDITS — Approuver / Rejeter modifications
  // ═══════════════════════════════════════════════════════════════════════

  approvePendingEditAction(course: any): void {
    Swal.fire({
      title: 'Approuver les modifications ?',
      html: `Les changements du cours <strong>${course.title}</strong> seront visibles immédiatement.`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: '<i class="fa-solid fa-check me-1"></i>Approuver',
      cancelButtonText: 'Annuler',
      confirmButtonColor: '#16a34a',
      cancelButtonColor: '#6b7280',
      customClass: { popup: 'rounded-4 shadow' }
    }).then(result => {
      if (!result.isConfirmed) return;
      this.courseService.approvePendingEdit(course.id).subscribe({
        next: () => {
          this.showToast('success', 'Modification approuvée !');
          this.refreshAll();
        },
        error: (err) => this.showToast('error', err.error?.message || "Erreur lors de l'approbation")
      });
    });
  }

  openRejectEditModal(course: any): void {
    this.editRejectCourse = course;
    this.editRejectReason = '';
    this.showRejectEditModal = true;
  }

  closeRejectEditModal(): void {
    this.showRejectEditModal = false;
    this.editRejectCourse = null;
    this.editRejectReason = '';
  }

  confirmRejectEdit(): void {
    if (!this.editRejectCourse) return;
    this.courseService.rejectPendingEdit(this.editRejectCourse.id, this.editRejectReason).subscribe({
      next: () => {
        this.showToast('success', 'Modification rejetée');
        this.closeRejectEditModal();
        this.refreshAll();
      },
      error: (err) => this.showToast('error', err.error?.message || 'Erreur lors du rejet')
    });
  }
}
