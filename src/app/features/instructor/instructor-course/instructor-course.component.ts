import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../../shared/service/routes/routes';
import { CourseService } from '../../../shared/service/course/course.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-instructor-course',
    templateUrl: './instructor-course.component.html',
    styleUrls: ['./instructor-course.component.scss'],
    imports: [CommonModule, FormsModule, RouterLink]
})
export class InstructorCourseComponent implements OnInit {
  public routes = routes;

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

  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.loading = true;
    this.courseService.getMyCourses().subscribe({
      next: (data) => {
        this.courses = data;
        this.applyFilters();
        this.computeStats();
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = 'Erreur lors du chargement des cours';
        this.loading = false;
        console.error(err);
      }
    });
  }

  computeStats(): void {
    this.publishedCount = this.courses.filter(c => c.status === 'PUBLISHED').length;
    this.pendingCount   = this.courses.filter(c => c.status === 'PENDING').length;
    this.draftCount     = this.courses.filter(c => c.status === 'DRAFT').length;
    this.rejectedCount  = this.courses.filter(c => c.status === 'REJECTED').length;
  }

  applyFilters(): void {
    this.filteredCourses = this.courses.filter(c => {
      const matchSearch = !this.searchTerm ||
        c.title.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchStatus = !this.selectedStatus || c.status === this.selectedStatus;
      return matchSearch && matchStatus;
    });
  }

  // Soumettre un cours DRAFT pour revue
  submitForReview(course: any): void {
    Swal.fire({
      icon: 'warning',
      title: 'Soumettre pour validation ?',
      html: `<b>${course.title}</b><br><br>
             Une fois soumis, <b>vous ne pourrez plus modifier ce cours</b><br>
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
      if (!result.isConfirmed) return;
      this.courseService.submitForReview(course.id).subscribe({
        next: () => {
          this.showSuccess('Cours soumis pour validation !');
          this.loadCourses();
        },
        error: (err) => this.errorMessage = err.error?.message || 'Erreur lors de la soumission'
      });
    });
  }

  // Archiver un cours PUBLISHED
  archiveCourse(course: any): void {
    if (!confirm(`Archiver le cours "${course.title}" ? Il ne sera plus visible par les étudiants.`)) return;
    this.courseService.archiveCourse(course.id).subscribe({
      next: () => {
        this.showSuccess('Cours archivé avec succès');
        this.loadCourses();
      },
      error: (err) => this.errorMessage = err.error?.message || 'Erreur lors de l\'archivage'
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
        this.errorMessage = err.error?.message || 'Erreur lors de la suppression';
        this.closeDeleteModal();
      }
    });
  }

  // Naviguer vers l'édition du cours
  editCourse(courseId: number): void {
    this.router.navigate([this.routes.addCourse], { queryParams: { id: courseId } });
  }

  // Naviguer vers les détails du cours
  viewDetails(courseId: number): void {
    this.router.navigate(['/instructor/instructor-course-detail'], { queryParams: { courseId } });
  }

  // Badges de statut
  getStatusBadgeClass(status: string): string {
    switch (status) {
      case 'PUBLISHED': return 'bg-success';
      case 'PENDING':   return 'bg-warning text-dark';
      case 'DRAFT':     return 'bg-secondary';
      case 'REJECTED':  return 'bg-danger';
      case 'ARCHIVED':  return 'bg-dark';
      default:          return 'bg-secondary';
    }
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'PUBLISHED': return 'Publié';
      case 'PENDING':   return 'En attente';
      case 'DRAFT':     return 'Brouillon';
      case 'REJECTED':  return 'Rejeté';
      case 'ARCHIVED':  return 'Archivé';
      default:          return status;
    }
  }

  getLevelLabel(level: string): string {
    switch (level) {
      case 'BEGINNER':     return 'Débutant';
      case 'INTERMEDIATE': return 'Intermédiaire';
      case 'ADVANCED':     return 'Avancé';
      default:             return level;
    }
  }

  getImageUrl(path: string): string {
    if (!path) return 'assets/img/course/course-01.jpg';
    const clean = path.startsWith('/') ? path : '/' + path;
    return `http://localhost:8081${clean}`;
  }

  private showSuccess(msg: string): void {
    this.successMessage = msg;
    this.errorMessage = '';
    setTimeout(() => this.successMessage = '', 3500);
  }

}
