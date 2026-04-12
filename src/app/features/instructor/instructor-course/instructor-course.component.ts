import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, Subject } from 'rxjs';
import { routes } from '../../../shared/service/routes/routes';
import { CourseService } from '../../../shared/service/course/course.service';
import Swal from 'sweetalert2';
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-instructor-course',
    templateUrl: './instructor-course.component.html',
    styleUrls: ['./instructor-course.component.scss'],
    imports: [CommonModule, FormsModule, RouterLink]
})
export class InstructorCourseComponent implements OnInit, OnDestroy {
  public routes = routes;
  private failedImageKeys = new Set<string>();
  private readonly backendBaseUrl = environment.apiUrl.replace(/\/api\/?$/, '');
  private destroy$ = new Subject<void>();

  courses: any[] = [];
  filteredCourses: any[] = [];
  loading = true;
  errorMessage = '';
  successMessage = '';

  searchTerm = '';
  selectedStatus = '';

  // Stats
  publishedCount = 0;
  pendingCount = 0;
  draftCount = 0;
  rejectedCount = 0;

  // Modal delete
  courseToDelete: any = null;
  showDeleteModal = false;

  constructor(private courseService: CourseService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadCourses();
    
    // Recharger les données chaque fois qu'on revient à ce composant après la navigation
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        filter((event: NavigationEnd) => event.url.includes('/instructor/instructor-course') || event.url.includes('/instructor/instructor-dashboard')),
      )
      .subscribe(() => {
        // Petit délai pour s'assurer que les données sont à jour
        setTimeout(() => this.loadCourses(), 300);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadCourses(): void {
    this.loading = true;
    this.courseService.getMyCourses().subscribe({
      next: (data) => {
        this.courses = data;
        this.calculateSectionAndLessonCounts();
        this.applyFilters();
        this.computeStats();
        this.loading = false;
      },
      error: (err) => {
        this.showError('Erreur lors du chargement des cours');
        this.loading = false;
        console.error(err);
      }
    });
  }

  /** Calculer les compteurs de sections et leçons basés sur les données réelles */
  calculateSectionAndLessonCounts(): void {
    this.courses.forEach(course => {
      // Compter les sections
      if (course.sections && Array.isArray(course.sections)) {
        course.sectionsCount = course.sections.length;
        // Compter aussi les leçons totales
        let totalLessons = 0;
        course.sections.forEach((section: any) => {
          if (section.lessons && Array.isArray(section.lessons)) {
            totalLessons += section.lessons.length;
          }
        });
        course.lessonsCount = totalLessons;
      }
    });
  }

  computeStats(): void {
    this.publishedCount = this.courses.filter(c => this.getCourseStatus(c) === 'PUBLISHED').length;
    this.pendingCount   = this.courses.filter(c => this.getCourseStatus(c) === 'PENDING_REVIEW').length;
    this.draftCount     = this.courses.filter(c => this.getCourseStatus(c) === 'DRAFT').length;
    this.rejectedCount  = this.courses.filter(c => this.getCourseStatus(c) === 'REJECTED').length;
  }

  applyFilters(): void {
    const selectedStatus = (this.selectedStatus || '').toString().trim().toUpperCase();
    const normalizedStatus = selectedStatus ? this.normalizeCourseStatus(selectedStatus) : '';

    this.filteredCourses = this.courses.filter(c => {
      const matchSearch = !this.searchTerm ||
        (c.title || '').toLowerCase().includes(this.searchTerm.toLowerCase());

      let matchStatus = true;
      if (selectedStatus === 'MODIFICATION_PENDING') {
        matchStatus = !!c?.hasPendingEdit;
      } else if (normalizedStatus === 'PENDING_REVIEW') {
        matchStatus = this.getCourseStatus(c) === 'PENDING_REVIEW' || !!c?.hasPendingEdit;
      } else if (normalizedStatus) {
        matchStatus = this.getCourseStatus(c) === normalizedStatus;
      }

      return matchSearch && matchStatus;
    });
  }

  // Soumettre un cours DRAFT pour revue
  submitForReview(course: any): void {
    Swal.fire({
      icon: 'question',
      title: 'Soumettre pour validation ?',
      html: `<b>${course.title}</b><br><br>
             Une fois soumis, <b>vous ne pourrez plus modifier ce cours</b><br>
             tant qu'il est en attente de validation par l'administrateur.`,
      confirmButtonText: '<i class="isax isax-send me-1"></i> Confirmer',
      cancelButtonText: 'Annuler',
      confirmButtonColor: '#6366f1',
      cancelButtonColor: '#64748b',
      showCancelButton: true,
      timer: 10000,
      timerProgressBar: true,
      allowOutsideClick: false,
      reverseButtons: true,
    }).then((result) => {
      if (!result.isConfirmed) return;
      this.courseService.submitForReview(course.id).subscribe({
        next: () => {
          this.showSuccess('Cours soumis pour validation !');
          this.loadCourses();
        },
        error: (err) => this.showError(err.error?.message || 'Erreur lors de la soumission')
      });
    });
  }

  // Archiver un cours PUBLISHED
  archiveCourse(course: any): void {
    Swal.fire({
      icon: 'question',
      title: 'Archiver ce cours ?',
      html: `<b>${course.title}</b><br><br>Il ne sera plus visible par les étudiants.`,
      confirmButtonText: '<i class="fa-solid fa-archive me-1"></i> Archiver',
      cancelButtonText: 'Annuler',
      confirmButtonColor: '#0d6efd',
      cancelButtonColor: '#6c757d',
      showCancelButton: true,
      reverseButtons: true,
      focusCancel: true,
    }).then((result) => {
      if (!result.isConfirmed) return;
      this.courseService.archiveCourse(course.id).subscribe({
        next: () => {
          this.showSuccess('Cours archivé avec succès');
          this.loadCourses();
        },
        error: (err) => this.showError(err.error?.message || 'Erreur lors de l\'archivage')
      });
    });
  }

  // Désarchiver un cours ARCHIVED
  unarchiveCourse(course: any): void {
    Swal.fire({
      icon: 'question',
      title: 'Désarchiver ce cours ?',
      html: `<b>${course.title}</b><br><br>Le cours redeviendra visible pour les étudiants.`,
      confirmButtonText: '<i class="fa-solid fa-box-open me-1"></i> Désarchiver',
      cancelButtonText: 'Annuler',
      confirmButtonColor: '#0d6efd',
      cancelButtonColor: '#6c757d',
      showCancelButton: true,
      reverseButtons: true,
      focusCancel: true,
    }).then((result) => {
      if (!result.isConfirmed) return;
      this.courseService.unarchiveCourse(course.id).subscribe({
        next: () => {
          this.showSuccess('Cours désarchivé avec succès');
          this.loadCourses();
        },
        error: (err) => this.showError(err.error?.message || 'Erreur lors du désarchivage')
      });
    });
  }

  // Ouvrir modal de suppression
  openDeleteModal(course: any): void {
    this.courseToDelete = course;
    this.showDeleteModal = true;
  }

  closeDeleteModal(): void {
    this.courseToDelete = null;
    this.showDeleteModal = false;
  }

  confirmDelete(): void {
    if (!this.courseToDelete) return;
    this.courseService.deleteCourse(this.courseToDelete.id).subscribe({
      next: () => {
        this.showSuccess('Cours supprimé');
        this.closeDeleteModal();
        this.loadCourses();
      },
      error: (err) => {
        this.showError(err.error?.message || 'Erreur lors de la suppression');
        this.closeDeleteModal();
      }
    });
  }

  // Naviguer vers l'édition du cours
  editCourse(courseId: number): void {
    this.router.navigate([this.routes.instructorEditCourse, courseId]);
  }

  // Naviguer vers les détails du cours
  viewDetails(courseId: number): void {
    this.router.navigate(['/instructor/instructor-course-detail'], { queryParams: { courseId } });
  }

  /** Recharger les données d'un seul cours et mettre à jour la liste */
  refreshCourseInList(courseId: number): void {
    this.courseService.getMyCourse(courseId).subscribe({
      next: (updatedCourse) => {
        const index = this.courses.findIndex(c => c.id === courseId);
        if (index !== -1) {
          this.courses[index] = updatedCourse;
          this.calculateSectionAndLessonCounts();
          this.applyFilters();
          this.computeStats();
        }
      },
      error: (err) => console.error('Erreur lors du rechargement du cours', err)
    });
  }

  // Badges de statut
  getStatusBadgeClass(status: string): string {
    const normalized = this.normalizeCourseStatus(status);
    switch (normalized) {
      case 'PUBLISHED': return 'ins-course-status ins-course-status--published';
      case 'PENDING_REVIEW': return 'ins-course-status ins-course-status--pending';
      case 'DRAFT':     return 'ins-course-status ins-course-status--draft';
      case 'REJECTED':  return 'ins-course-status ins-course-status--rejected';
      case 'ARCHIVED':  return 'ins-course-status ins-course-status--archived';
      default:          return 'ins-course-status ins-course-status--default';
    }
  }

  getStatusLabel(status: string): string {
    const normalized = this.normalizeCourseStatus(status);
    switch (normalized) {
      case 'PUBLISHED': return 'Publié';
      case 'PENDING_REVIEW':   return 'En attente';
      case 'DRAFT':     return 'Brouillon';
      case 'REJECTED':  return 'Rejeté';
      case 'ARCHIVED':  return 'Archivé';
      default:          return normalized;
    }
  }

  getCourseStatus(course: any): string {
    return this.normalizeCourseStatus(course?.status || course?.courseStatus || 'DRAFT');
  }

  canEditCourse(course: any): boolean {
    const status = this.getCourseStatus(course);
    return status !== 'PENDING_REVIEW' && status !== 'ARCHIVED' && !course?.hasPendingEdit;
  }

  canSubmitForReview(course: any): boolean {
    const status = this.getCourseStatus(course);
    return status === 'DRAFT' || status === 'REJECTED';
  }

  canArchiveCourse(course: any): boolean {
    return this.getCourseStatus(course) === 'PUBLISHED' && !course?.hasPendingEdit;
  }

  canUnarchiveCourse(course: any): boolean {
    return this.getCourseStatus(course) === 'ARCHIVED' && !course?.hasPendingEdit;
  }

  canDeleteCourse(course: any): boolean {
    const status = this.getCourseStatus(course);
    return status === 'DRAFT';
  }

  showPendingValidationState(course: any): boolean {
    const status = this.getCourseStatus(course);
    return status === 'PENDING_REVIEW' || (status === 'PUBLISHED' && !!course?.hasPendingEdit);
  }

  shouldShowPendingEditBadge(course: any): boolean {
    return !!course?.hasPendingEdit && this.getCourseStatus(course) !== 'ARCHIVED';
  }

  getLevelLabel(level: string): string {
    switch (level) {
      case 'BEGINNER':     return 'Débutant';
      case 'INTERMEDIATE': return 'Intermédiaire';
      case 'ADVANCED':     return 'Avancé';
      default:             return level;
    }
  }

  getCourseImage(course: any): string {
    const candidates = [
      course?.coverImage,
      course?.thumbnailUrl,
      course?.coverImageUrl,
      course?.thumbnail,
      course?.imageUrl,
      course?.image,
      course?.courseImageUrl,
      course?.courseImage
    ];
    const found = candidates.find((v: any) => typeof v === 'string' && v.trim().length > 0);
    return this.getImageUrl(found || '');
  }

  getImageUrl(path: string): string {
    if (!path || !path.trim()) return 'assets/img/course-img/courses-01.jpg';

    const normalizedPath = path.trim().replace(/\\/g, '/');

    if (normalizedPath.startsWith('http://') || normalizedPath.startsWith('https://')) {
      return normalizedPath;
    }

    if (normalizedPath.startsWith('assets/')) {
      return normalizedPath;
    }

    if (normalizedPath.startsWith('preset:')) {
      const presetName = this.normalizeLegacyPresetFileName(normalizedPath.replace('preset:', '').trim());
      return this.resolveAssetPresetImage(presetName);
    }

    // Some records store only preset file names (e.g. "course-img3.jpg").
    if (!normalizedPath.includes('/')) {
      const fileName = this.normalizeLegacyPresetFileName(normalizedPath);
      if (/^(course-img|courses-)/i.test(fileName)) {
        return this.resolveAssetPresetImage(fileName);
      }
    }

    if (normalizedPath.startsWith('/')) {
      return `${this.backendBaseUrl}${normalizedPath}`;
    }

    return `${this.backendBaseUrl}/${normalizedPath}`;
  }

  hasValidImage(course: any): boolean {
    const key = this.getCourseKey(course);
    return !!this.getCourseImage(course) && !this.failedImageKeys.has(key);
  }

  onCourseImageError(course: any): void {
    this.failedImageKeys.add(this.getCourseKey(course));
  }

  getCourseInitial(course: any): string {
    return (course?.title || 'C').trim().charAt(0).toUpperCase() || 'C';
  }

  getPlaceholderGradient(course: any): string {
    const gradients = [
      'linear-gradient(135deg, #5625E8 0%, #02a8b5 100%)',
      'linear-gradient(135deg, #FD3995 0%, #9b59b6 100%)',
      'linear-gradient(135deg, #02a8b5 0%, #5625E8 100%)',
      'linear-gradient(135deg, #9b59b6 0%, #FD3995 100%)'
    ];
    const key = this.getCourseKey(course);
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = ((hash << 5) - hash) + key.charCodeAt(i);
      hash |= 0;
    }
    return gradients[Math.abs(hash) % gradients.length];
  }

  private getCourseKey(course: any): string {
    return String(course?.id || course?.slug || course?.title || Math.random());
  }

  private resolveAssetPresetImage(fileName: string): string {
    if (/^course-img/i.test(fileName) || /^courses-/i.test(fileName)) {
      return `assets/img/course-img/${fileName}`;
    }
    return `assets/img/course/${fileName}`;
  }

  private normalizeCourseStatus(status: string): string {
    const raw = (status || '').toString().trim().toUpperCase();
    if (!raw) return '';
    if (raw === 'PENDING') return 'PENDING_REVIEW';
    if (raw === 'PENDING_REVIEW') return 'PENDING_REVIEW';
    if (raw === 'PUBLISHED') return 'PUBLISHED';
    if (raw === 'REJECTED') return 'REJECTED';
    if (raw === 'ARCHIVED') return 'ARCHIVED';
    return 'DRAFT';
  }

  private normalizeLegacyPresetFileName(name: string): string {
    const trimmed = (name || '').trim();
    const m = trimmed.match(/^course-img-?(\d+)\.(jpg|jpeg|png|webp|svg)$/i);
    if (!m) return trimmed;
    return `course-img${m[1]}.${m[2]}`;
  }

  private showSuccess(msg: string): void {
    this.successMessage = msg;
    this.errorMessage = '';
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'info',
      title: msg,
      showConfirmButton: false,
      timer: 2200,
      timerProgressBar: true,
      background: '#ffffff',
      customClass: { popup: 'ins-course-toast ins-course-toast--info' }
    });
    setTimeout(() => this.successMessage = '', 3500);
  }

  private showError(msg: string): void {
    this.errorMessage = msg;
    this.successMessage = '';
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'info',
      title: msg,
      showConfirmButton: false,
      timer: 2800,
      timerProgressBar: true,
      background: '#ffffff',
      customClass: { popup: 'ins-course-toast ins-course-toast--info' }
    });
  }

}
