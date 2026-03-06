import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificateService, CertificateDto } from '../../../shared/service/certificate/certificate.service';

@Component({
  selector: 'app-student-certificate',
  templateUrl: './student-certificate.component.html',
  styleUrl: './student-certificate.component.scss',
  imports: [CommonModule]
})
export class StudentCertificateComponent implements OnInit {
  certificates: CertificateDto[] = [];
  loading = true;
  errorMessage = '';
  successMessage = '';
  generatingId: number | null = null;

  constructor(private certService: CertificateService) {}

  ngOnInit(): void {
    this.loadCertificates();
  }

  loadCertificates(): void {
    this.loading = true;
    this.certService.getMyCertificates().subscribe({
      next: (data) => { this.certificates = data; this.loading = false; },
      error: () => { this.errorMessage = 'Erreur lors du chargement des certificats.'; this.loading = false; }
    });
  }

  formatDate(dateStr: string): string {
    if (!dateStr) return '-';
    return new Date(dateStr).toLocaleDateString('fr-FR', {
      day: '2-digit', month: 'short', year: 'numeric'
    });
  }

  downloadCertificate(cert: CertificateDto): void {
    const url = `/courses/certificates/verify/${cert.certificateCode}`;
    window.open(url, '_blank');
  }
}

