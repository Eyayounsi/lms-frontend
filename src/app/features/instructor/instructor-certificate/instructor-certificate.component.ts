import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CertificateService, CertificateDto } from '../../../shared/service/certificate/certificate.service';
import { AvatarFallbackComponent } from '../../../shared/components/avatar-fallback/avatar-fallback.component';
import { resolveAvatarImage } from '../../../shared/utils/avatar-image.util';

@Component({
  selector: 'app-instructor-certificate',
  imports: [CommonModule, FormsModule, AvatarFallbackComponent],
  templateUrl: './instructor-certificate.component.html',
  styleUrl: './instructor-certificate.component.scss'
})
export class InstructorCertificateComponent implements OnInit {

  certificates: CertificateDto[] = [];
  filtered: CertificateDto[] = [];
  loading = false;
  searchValue = '';
  uniqueCourses: string[] = [];

  constructor(
    private certService: CertificateService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.load();
  }

  getTotalCertificates(): number {
    return this.certificates.length;
  }

  getUniqueCourses(): string[] {
    return [...new Set(this.certificates.map(c => c.courseTitle))];
  }

  getUniqueStudents(): string[] {
    return [...new Set(this.certificates.map(c => c.studentName))];
  }

  load(): void {
    this.loading = true;
    this.certService.getInstructorCertificates().subscribe({
      next: (data) => {
        this.certificates = data;
        this.uniqueCourses = this.getUniqueCourses();
        this.filtered = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.toastr.error('Impossible de charger les certificats.');
      }
    });
  }

  searchData(value: string): void {
    this.searchValue = value;
    const term = value.trim().toLowerCase();
    this.filtered = term
      ? this.certificates.filter(c =>
          c.studentName.toLowerCase().includes(term) ||
          c.courseTitle.toLowerCase().includes(term) ||
          c.certificateCode.toLowerCase().includes(term)
        )
      : [...this.certificates];
  }

  copyCertificateCode(code: string): void {
    navigator.clipboard.writeText(code);
    this.toastr.success('Code de certificat copié !');
  }

  getStudentAvatarUrl(cert: CertificateDto): string {
    return resolveAvatarImage(cert?.studentAvatar || '', '');
  }
}
