import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CertificateService, CertificateDto } from '../../../shared/service/certificate/certificate.service';

@Component({
  selector: 'app-certificate-view',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './certificate-view.component.html',
  styleUrl: './certificate-view.component.scss'
})
export class CertificateViewComponent implements OnInit {
  certificate: CertificateDto | null = null;
  loading = true;
  errorMessage = '';

  /** Mode formulaire : aucun code dans l'URL → on affiche le champ de saisie */
  showForm = false;
  inputCode = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private certService: CertificateService
  ) {}

  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get('code');
    if (code) {
      this.loading = true;
      this.certService.verifyByCode(code).subscribe({
        next: (cert) => { this.certificate = cert; this.loading = false; },
        error: () => { this.errorMessage = 'Certificat introuvable ou code invalide.'; this.loading = false; }
      });
    } else {
      // Pas de code dans l'URL → afficher le formulaire de recherche
      this.showForm = true;
      this.loading = false;
    }
  }

  /** Navigue vers la page de vérification avec le code saisi */
  verifyCode(): void {
    const code = this.inputCode.trim();
    if (!code) return;
    this.router.navigate(['/courses/certificates/verify', code]);
  }

  formatDate(dateStr: string): string {
    if (!dateStr) return '-';
    return new Date(dateStr).toLocaleDateString('fr-FR', {
      day: '2-digit', month: 'long', year: 'numeric'
    });
  }

  print(): void {
    window.print();
  }
}
