import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RecruiterService, CertifiedStudent, CertificateItem } from '../../../shared/service/recruiter/recruiter.service';
import { routes } from '../../../shared/service/routes/routes';
import { resolveAvatarImage } from '../../../shared/utils/avatar-image.util';

@Component({
  selector: 'app-recruiter-certified-students',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recruiter-certified-students.component.html',
  styleUrls: ['./recruiter-certified-students.component.scss']
})
export class RecruiterCertifiedStudentsComponent implements OnInit {
  public routes = routes;
  students: CertifiedStudent[] = [];
  filteredStudents: CertifiedStudent[] = [];
  searchQuery = '';
  loading = true;
  error = '';
  contactingId: number | null = null;

  selectedStudent: CertifiedStudent | null = null;

  constructor(
    private recruiterService: RecruiterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.loading = true;
    this.error = '';
    this.recruiterService.getCertifiedStudents().subscribe({
      next: (data) => {
        this.students = data;
        this.filteredStudents = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Impossible de charger les étudiants certifiés.';
        this.loading = false;
      }
    });
  }

  onSearch(): void {
    const q = this.searchQuery.toLowerCase().trim();
    if (!q) {
      this.filteredStudents = this.students;
      return;
    }
    this.filteredStudents = this.students.filter(s =>
      (s.fullName || '').toLowerCase().includes(q) ||
      (s.email || '').toLowerCase().includes(q) ||
      (s.designation || '').toLowerCase().includes(q) ||
      s.certificates.some(c => c.courseName.toLowerCase().includes(q))
    );
  }

  contactStudent(student: CertifiedStudent): void {
    this.contactingId = student.id;
    this.recruiterService.startConversation(student.id).subscribe({
      next: (res) => {
        this.contactingId = null;
        this.router.navigate([this.routes.recruiter_messages], {
          queryParams: { conversationId: res.conversationId }
        });
      },
      error: () => {
        this.contactingId = null;
      }
    });
  }

  viewStudent(student: CertifiedStudent): void {
    this.selectedStudent = student;
  }

  closeModal(): void {
    this.selectedStudent = null;
  }

  getAvatarUrl(avatarPath: string | null, name?: string): string {
    return resolveAvatarImage(avatarPath, this.generateInitialAvatar(name || 'E'));
  }

  private generateInitialAvatar(name: string): string {
    const initial = (name || 'U').charAt(0).toUpperCase();
    const colors = ['#392C7D', '#03C95A', '#0DCAF0', '#6d28d9', '#059669'];
    const bg = colors[(name || 'U').charCodeAt(0) % colors.length];
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><rect width="80" height="80" rx="40" fill="${bg}"/><text x="40" y="53" text-anchor="middle" font-family="Arial,sans-serif" font-size="30" font-weight="700" fill="white">${initial}</text></svg>`;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  }

  formatDate(dateStr: string): string {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  getCertBadgeClass(index: number): string {
    const classes = ['bg-primary', 'bg-success', 'bg-info', 'bg-warning', 'bg-secondary'];
    return classes[index % classes.length];
  }

  getCertStyle(index: number): string {
    const styles = [
      'background:rgba(3,201,90,.1);color:#03C95A;border:1px solid rgba(3,201,90,.2)',
      'background:rgba(57,44,125,.09);color:#392C7D;border:1px solid rgba(57,44,125,.18)',
      'background:rgba(245,159,11,.1);color:#d97706;border:1px solid rgba(245,159,11,.2)',
      'background:rgba(13,202,240,.1);color:#0284c7;border:1px solid rgba(13,202,240,.2)',
      'background:rgba(255,70,103,.08);color:#e11d48;border:1px solid rgba(255,70,103,.18)',
    ];
    return styles[index % styles.length];
  }

  getCertItemStyle(index: number): string {
    const colors = ['3,201,90', '57,44,125', '245,159,11', '13,202,240', '255,70,103'];
    const rgb = colors[index % colors.length];
    return `background:rgba(${rgb},.05);border:1px solid rgba(${rgb},.13)`;
  }
}
