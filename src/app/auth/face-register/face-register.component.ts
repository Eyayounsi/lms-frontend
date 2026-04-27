import { Component, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../shared/service/auth/auth.service';
import { routes } from '../../shared/service/routes/routes';
import Swal from 'sweetalert2';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-face-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './face-register.component.html',
  styleUrls: ['./face-register.component.scss']
})
export class FaceRegisterComponent implements AfterViewInit, OnDestroy {

  public routes = routes;

  // ── Multi-step state ─────────────────────────────────────────────────────
  step: 1 | 2 = 1;
  formData: { fullName: string; email: string; password?: string } = { fullName: '', email: '' };
  requestedRole = '';
  errorMessage = '';
  showPassword = false;
  showConfirmPassword = false;

  // ── Camera state ─────────────────────────────────────────────────────────
  capturedImages: string[] = [];   // base64 strings shown as thumbnails
  submitting = false;
  cameraError = '';
  private stream: MediaStream | null = null;

  @ViewChild('faceVideo')  faceVideo!:  ElementRef<HTMLVideoElement>;
  @ViewChild('faceCanvas') faceCanvas!: ElementRef<HTMLCanvasElement>;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
    const role = (this.route.snapshot.queryParamMap.get('role') || '').toUpperCase();
    this.requestedRole = role === 'INSTRUCTOR' ? 'INSTRUCTOR' : '';
  }

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {
    this.stopCamera();
  }

  // ── Step 1: form submit ──────────────────────────────────────────────────
  async onFormSubmit(form: any): Promise<void> {
    this.errorMessage = '';
    if (!form.valid) {
      this.errorMessage = 'Veuillez remplir tous les champs correctement.';
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.value.email?.trim())) {
      this.errorMessage = 'Veuillez entrer une adresse email valide.';
      return;
    }

    // Password validation — optional but if provided must match and be ≥6 chars
    const pwd = (form.value.password || '').trim();
    const confirmPwd = (form.value.confirmPassword || '').trim();
    if (pwd) {
      if (pwd.length < 6) {
        this.errorMessage = 'Le mot de passe doit contenir au moins 6 caractères.';
        return;
      }
      if (pwd !== confirmPwd) {
        this.errorMessage = 'Les mots de passe ne correspondent pas.';
        return;
      }
    }

    this.formData = {
      fullName: form.value.fullName?.trim(),
      email:    form.value.email?.trim(),
      password: pwd || undefined
    };

    // Vérifier si l'email existe déjà AVANT d'ouvrir la caméra
    try {
      const res = await this.authService.checkEmailExists(this.formData.email).toPromise();
      if (res?.exists) {
        this.errorMessage = 'Cette adresse email est déjà utilisée. Veuillez vous connecter ou utiliser une autre adresse.';
        return;
      }
    } catch {
      // En cas d'erreur réseau, on laisse passer (le backend rejettera de toute façon)
    }

    // SweetAlert guidance before opening camera
    const result = await Swal.fire({
      title: '📸 Capture de votre visage',
      html: `
        <div class="text-start small">
          <p class="mb-2">La caméra va s'ouvrir pour capturer <strong>10 photos</strong> de votre visage.</p>
          <p class="fw-semibold mb-1">📋 Conseils pour une bonne capture :</p>
          <ul class="ps-3 mb-0">
            <li>Restez <strong>face à la caméra</strong>, regardez l'objectif</li>
            <li>Assurez-vous d'avoir une <strong>bonne luminosité</strong> (pas de contre-jour)</li>
            <li>Tournez <strong>légèrement la tête</strong> à chaque capture (gauche, droite…)</li>
            <li>Retirez vos <strong>lunettes de soleil</strong> ou masque</li>
            <li>Gardez une <strong>expression neutre</strong></li>
          </ul>
        </div>
      `,
      icon: 'info',
      confirmButtonText: '🎬 Commencer la capture',
      cancelButtonText: 'Annuler',
      showCancelButton: true,
      confirmButtonColor: '#5C67E5',
      cancelButtonColor: '#6c757d',
      customClass: { htmlContainer: 'text-start' }
    });

    if (result.isConfirmed) {
      this.step = 2;
      // Wait for *ngIf to render step 2 before accessing ViewChild
      setTimeout(() => this.startCamera(), 150);
    }
  }

  // ── Camera ───────────────────────────────────────────────────────────────
  private startCamera(): void {
    this.cameraError = '';

    if (!navigator.mediaDevices?.getUserMedia) {
      this.cameraError =
        '⚠️ La caméra nécessite HTTPS. Accédez via : https://' +
        window.location.hostname + ':4443' + window.location.pathname;
      return;
    }

    navigator.mediaDevices
      .getUserMedia({ video: { width: 640, height: 480, facingMode: 'user' } })
      .then(stream => {
        this.stream = stream;
        const video = this.faceVideo.nativeElement;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        this.cameraError = 'Impossible d\'accéder à la caméra : ' + err.message;
      });
  }

  private stopCamera(): void {
    this.stream?.getTracks().forEach(t => t.stop());
    this.stream = null;
  }

  // ── Capture one image ────────────────────────────────────────────────────
  captureImage(): void {
    if (this.capturedImages.length >= 10) return;

    const video  = this.faceVideo.nativeElement;
    const canvas = this.faceCanvas.nativeElement;
    canvas.width  = 320;
    canvas.height = 240;
    const ctx = canvas.getContext('2d')!;
    ctx.drawImage(video, 0, 0, 320, 240);
    const base64 = canvas.toDataURL('image/jpeg', 0.85);
    this.capturedImages.push(base64);

    // Small visual flash
    canvas.style.opacity = '0.5';
    setTimeout(() => (canvas.style.opacity = '1'), 100);
  }

  removeImage(index: number): void {
    this.capturedImages.splice(index, 1);
  }

  get captureProgress(): number {
    return (this.capturedImages.length / 10) * 100;
  }

  // ── Final submit: register face + user account ───────────────────────────
  async submitRegistration(): Promise<void> {
    if (this.capturedImages.length < 10 || this.submitting) return;

    this.submitting = true;
    this.stopCamera();

    Swal.fire({
      title: 'Enregistrement en cours…',
      html: '<p>Analyse de votre visage et création du compte…</p>',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading()
    });

    // 1. Register face encodings in Python service
    this.authService.registerFaceEncodings(
      this.formData.email,
      this.formData.fullName,
      this.capturedImages
    ).subscribe({
      next: (pyRes: any) => {
        // 2. Create user account in Spring Boot
        this.authService.registerFaceUser({
          ...this.formData,
          role: this.requestedRole || undefined
        }).subscribe({
          next: () => {
            Swal.close();
            this.submitting = false;
            const loginHint = this.formData.password
              ? '<p class="text-muted small">Vous pouvez vous connecter avec votre visage <strong>ou avec votre mot de passe</strong>.</p>'
              : '<p class="text-muted small">Vous pouvez maintenant vous connecter avec votre visage.</p>';
            Swal.fire({
              title: '✅ Inscription réussie !',
              html: `
                <p>Bienvenue <strong>${this.formData.fullName}</strong> !</p>
                <p>${pyRes.faces_detected} captures de votre visage ont été enregistrées.</p>
                ${loginHint}
              `,
              icon: 'success',
              confirmButtonText: 'Aller au login',
              confirmButtonColor: '#5C67E5',
              allowOutsideClick: false
            }).then(() => {
              this.router.navigate([this.routes.login]);
            });
          },
          error: (err: any) => {
            this.submitting = false;
            Swal.close();
            Swal.fire({
              title: 'Erreur création de compte',
              text: err.error?.error || 'Impossible de créer le compte. Réessayez.',
              icon: 'error'
            });
          }
        });
      },
      error: (err: any) => {
        this.submitting = false;
        Swal.close();
        Swal.fire({
          title: 'Erreur reconnaissance faciale',
          text: err.error?.detail || 'Problème avec le service Face ID. Vérifiez que le service Python est démarré.',
          icon: 'error'
        });
      }
    });
  }

  // ── Restart capture ──────────────────────────────────────────────────────
  restartCapture(): void {
    this.capturedImages = [];
    this.cameraError = '';
    this.startCamera();
  }
}
