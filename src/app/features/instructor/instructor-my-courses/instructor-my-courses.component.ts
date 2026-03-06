import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CourseService } from '../../../shared/service/course/course.service';

@Component({
  selector: 'app-instructor-my-courses',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './instructor-my-courses.component.html',
  styleUrls: ['./instructor-my-courses.component.scss']
})
export class InstructorMyCoursesComponent implements OnInit {

  courses: any[] = [];
  loading = true;
  errorMessage = '';

  // Formulaire de création
  showCreateForm = false;
  newCourse = { title: '', description: '', price: 0, level: 'BEGINNER' };
  creating = false;

  // Modal de détail / édition
  selectedCourse: any = null;
  showDetailModal = false;
  editMode = false;
  editCourse = { title: '', description: '', price: 0, level: '' };

  // Section / Leçon
  newSectionTitle = '';
  newLessonTitle = '';
  newLessonType = 'VIDEO';
  addingSectionToCourseId: number | null = null;
  addingLessonToSectionId: number | null = null;

  // Upload
  uploadingCover = false;
  uploadingVideo = false;
  uploadingPdf = false;

  // Ressources des leçons
  expandedResourceLessonId: number | null = null;
  lessonResources: { [lessonId: number]: any[] } = {};
  loadingResourcesMap: { [lessonId: number]: boolean } = {};
  newResourceForm: { [lessonId: number]: { title: string; url: string; type: string } } = {};
  addingResourceTo: number | null = null;

  // Messages
  successMessage = '';

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.loading = true;
    this.courseService.getMyCourses().subscribe({
      next: (data) => {
        this.courses = data;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = 'Erreur lors du chargement des cours';
        this.loading = false;
        console.error(err);
      }
    });
  }

  // ════════════════════════════════════
  //  CRÉATION
  // ════════════════════════════════════

  toggleCreateForm(): void {
    this.showCreateForm = !this.showCreateForm;
    this.newCourse = { title: '', description: '', price: 0, level: 'BEGINNER' };
  }

  createCourse(): void {
    if (!this.newCourse.title.trim()) return;
    this.creating = true;
    this.courseService.createCourse(this.newCourse).subscribe({
      next: (course) => {
        this.showSuccess('Cours créé ! Ajoutez maintenant les sections et les leçons.');
        this.showCreateForm = false;
        this.creating = false;
        this.newCourse = { title: '', description: '', price: 0, level: 'BEGINNER' };
        this.loadCourses();
        // Ouvrir automatiquement le modal de détail pour ajouter sections/leçons
        this.openDetail(course);
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Erreur lors de la création';
        this.creating = false;
      }
    });
  }

  // ════════════════════════════════════
  //  DÉTAIL / ÉDITION
  // ════════════════════════════════════

  openDetail(course: any): void {
    this.courseService.getMyCourse(course.id).subscribe({
      next: (data) => {
        this.selectedCourse = data;
        this.showDetailModal = true;
        this.editMode = false;
      },
      error: (err) => console.error(err)
    });
  }

  closeDetail(): void {
    this.showDetailModal = false;
    this.selectedCourse = null;
    this.editMode = false;
  }

  startEdit(): void {
    this.editMode = true;
    this.editCourse = {
      title: this.selectedCourse.title,
      description: this.selectedCourse.description,
      price: this.selectedCourse.price,
      level: this.selectedCourse.level
    };
  }

  saveEdit(): void {
    this.courseService.updateCourse(this.selectedCourse.id, this.editCourse).subscribe({
      next: () => {
        this.showSuccess('Cours mis à jour !');
        this.editMode = false;
        this.openDetail(this.selectedCourse);
        this.loadCourses();
      },
      error: (err) => this.errorMessage = err.error?.message || 'Erreur'
    });
  }

  // ════════════════════════════════════
  //  ACTIONS
  // ════════════════════════════════════

  submitForReview(course: any): void {
    if (confirm('Soumettre ce cours pour validation par un administrateur ?')) {
      this.courseService.submitForReview(course.id).subscribe({
        next: () => {
          this.showSuccess('Cours soumis pour validation !');
          this.loadCourses();
        },
        error: (err) => this.errorMessage = err.error?.message || 'Erreur'
      });
    }
  }

  deleteCourse(course: any): void {
    if (confirm(`Supprimer le cours "${course.title}" ? Cette action est irréversible.`)) {
      this.courseService.deleteCourse(course.id).subscribe({
        next: () => {
          this.showSuccess('Cours supprimé !');
          this.loadCourses();
          this.closeDetail();
        },
        error: (err) => this.errorMessage = err.error?.message || 'Erreur'
      });
    }
  }

  // ════════════════════════════════════
  //  SECTIONS
  // ════════════════════════════════════

  toggleAddSection(courseId: number): void {
    this.addingSectionToCourseId = this.addingSectionToCourseId === courseId ? null : courseId;
    this.newSectionTitle = '';
  }

  addSection(courseId: number): void {
    if (!this.newSectionTitle.trim()) return;
    this.courseService.addSection(courseId, { title: this.newSectionTitle }).subscribe({
      next: () => {
        this.showSuccess('Section ajoutée !');
        this.newSectionTitle = '';
        this.addingSectionToCourseId = null;
        if (this.selectedCourse?.id === courseId) {
          this.openDetail(this.selectedCourse);
        }
      },
      error: (err) => this.errorMessage = err.error?.message || 'Erreur'
    });
  }

  // ════════════════════════════════════
  //  LEÇONS
  // ════════════════════════════════════

  toggleAddLesson(sectionId: number): void {
    this.addingLessonToSectionId = this.addingLessonToSectionId === sectionId ? null : sectionId;
    this.newLessonTitle = '';
    this.newLessonType = 'VIDEO';
  }

  addLesson(sectionId: number): void {
    if (!this.newLessonTitle.trim()) return;
    this.courseService.addLesson(sectionId, { title: this.newLessonTitle, lessonType: this.newLessonType }).subscribe({
      next: () => {
        this.showSuccess('Leçon ajoutée !');
        this.newLessonTitle = '';
        this.addingLessonToSectionId = null;
        if (this.selectedCourse) {
          this.openDetail(this.selectedCourse);
        }
      },
      error: (err) => this.errorMessage = err.error?.message || 'Erreur'
    });
  }

  // ════════════════════════════════════
  //  UPLOADS
  // ════════════════════════════════════

  onCoverUpload(event: any, courseId: number): void {
    const file = event.target.files[0];
    if (!file) return;
    this.uploadingCover = true;
    this.courseService.uploadCoverImage(courseId, file).subscribe({
      next: () => {
        this.showSuccess('Image de couverture uploadée !');
        this.uploadingCover = false;
        if (this.selectedCourse?.id === courseId) {
          this.openDetail(this.selectedCourse);
        }
        this.loadCourses();
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Erreur upload';
        this.uploadingCover = false;
      }
    });
  }

  onVideoUpload(event: any, lessonId: number): void {
    const file = event.target.files[0];
    if (!file) return;
    this.uploadingVideo = true;
    this.courseService.uploadLessonVideo(lessonId, file).subscribe({
      next: () => {
        this.showSuccess('Vidéo uploadée !');
        this.uploadingVideo = false;
        if (this.selectedCourse) {
          this.openDetail(this.selectedCourse);
        }
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Erreur upload vidéo';
        this.uploadingVideo = false;
      }
    });
  }

  onPdfUpload(event: any, lessonId: number): void {
    const file = event.target.files[0];
    if (!file) return;
    this.uploadingPdf = true;
    this.courseService.uploadLessonPdf(lessonId, file).subscribe({
      next: () => {
        this.showSuccess('PDF uploadé !');
        this.uploadingPdf = false;
        if (this.selectedCourse) {
          this.openDetail(this.selectedCourse);
        }
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Erreur upload PDF';
        this.uploadingPdf = false;
      }
    });
  }

  // ════════════════════════════════════
  //  UTILITAIRES
  // ════════════════════════════════════

  getStatusBadgeClass(status: string): string {
    switch (status) {
      case 'DRAFT': return 'bg-secondary';
      case 'PENDING': return 'bg-warning text-dark';
      case 'PUBLISHED': return 'bg-success';
      case 'REJECTED': return 'bg-danger';
      default: return 'bg-secondary';
    }
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'DRAFT': return 'Brouillon';
      case 'PENDING': return 'En attente';
      case 'PUBLISHED': return 'Publié';
      case 'REJECTED': return 'Rejeté';
      default: return status;
    }
  }

  getLevelLabel(level: string): string {
    switch (level) {
      case 'BEGINNER': return 'Débutant';
      case 'INTERMEDIATE': return 'Intermédiaire';
      case 'ADVANCED': return 'Avancé';
      default: return level;
    }
  }

  private showSuccess(msg: string): void {
    this.successMessage = msg;
    this.errorMessage = '';
    setTimeout(() => this.successMessage = '', 3000);
  }

  archiveCourse(course: any): void {
    if (!confirm(`Archiver le cours "${course.title}" ? Il ne sera plus visible par les étudiants.`)) return;
    this.courseService.archiveCourse(course.id).subscribe({
      next: () => {
        this.showSuccess('Cours archivé.');
        this.loadCourses();
        this.closeDetail();
      },
      error: (e: any) => { this.errorMessage = e?.error?.message || 'Erreur lors de l\'archivage.'; }
    });
  }

  toggleLessonResources(lessonId: number): void {
    if (this.expandedResourceLessonId === lessonId) {
      this.expandedResourceLessonId = null;
    } else {
      this.expandedResourceLessonId = lessonId;
      if (!this.lessonResources[lessonId]) {
        this.loadLessonResources(lessonId);
      }
    }
  }

  loadLessonResources(lessonId: number): void {
    this.loadingResourcesMap[lessonId] = true;
    this.courseService.getLessonResources(lessonId).subscribe({
      next: (data) => { this.lessonResources[lessonId] = data; this.loadingResourcesMap[lessonId] = false; },
      error: () => { this.loadingResourcesMap[lessonId] = false; }
    });
  }

  toggleAddResource(lessonId: number): void {
    if (this.addingResourceTo === lessonId) {
      this.addingResourceTo = null;
    } else {
      this.addingResourceTo = lessonId;
      if (!this.newResourceForm[lessonId]) {
        this.newResourceForm[lessonId] = { title: '', url: '', type: 'LINK' };
      }
    }
  }

  addResource(lessonId: number): void {
    const form = this.newResourceForm[lessonId];
    if (!form?.title?.trim() || !form?.url?.trim()) return;
    this.courseService.addLessonResource(lessonId, form).subscribe({
      next: (res) => {
        if (!this.lessonResources[lessonId]) this.lessonResources[lessonId] = [];
        this.lessonResources[lessonId].push(res);
        this.newResourceForm[lessonId] = { title: '', url: '', type: 'LINK' };
        this.addingResourceTo = null;
        this.showSuccess('Ressource ajoutée !');
      },
      error: (e: any) => { this.errorMessage = e?.error?.message || 'Erreur lors de l\'ajout.'; }
    });
  }

  deleteResource(resourceId: number, lessonId: number): void {
    if (!confirm('Supprimer cette ressource ?')) return;
    this.courseService.deleteLessonResource(resourceId).subscribe({
      next: () => {
        this.lessonResources[lessonId] = this.lessonResources[lessonId].filter(r => r.id !== resourceId);
        this.showSuccess('Ressource supprimée.');
      },
      error: (e: any) => { this.errorMessage = e?.error?.message || 'Erreur.'; }
    });
  }

  getImageUrl(path: string): string {
    if (!path) return 'assets/img/course/course-01.jpg';
    return `http://localhost:8081/${path}`;
  }
}
