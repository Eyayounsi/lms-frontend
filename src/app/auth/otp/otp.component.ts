import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { welcomeLogin } from '../../shared/models/model';
import { DataService } from '../../shared/service/data/data.service';
import { AuthService } from '../../shared/service/auth/auth.service';
import { routes } from '../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputOtpModule } from 'primeng/inputotp';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-otp',
  imports: [CommonModule,FormsModule,RouterLink,InputOtpModule,SlickCarouselModule],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.scss'
})
export class OtpComponent implements OnInit {
  routes = routes;
  otpCode: string = '';
  newPassword: string = '';
  email: string = '';
  
  public welcomeLogin: welcomeLogin[] = [];
  password: boolean = false;
  isLoading: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';
  
  togglePassword(): void {
    this.password = !this.password;
  }

  // Masquer l'email pour la sécurité
  maskEmail(): string {
    if (!this.email) return '';
    const parts = this.email.split('@');
    if (parts.length !== 2) return this.email;
    const username = parts[0];
    const domain = parts[1];
    const maskedUsername = username.substring(0, 2) + '***' + username.substring(username.length - 2);
    return maskedUsername + '@' + domain;
  }

  public authSlider = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  constructor(
    private DataService: DataService,
    private authService: AuthService,
    public router: Router
  ) {
    this.welcomeLogin = this.DataService.welcomeLogin;
  }

  ngOnInit(): void {
    // Récupérer l'email stocké depuis le service
    this.email = this.authService.getResetEmail();
    
    // Si pas d'email, rediriger vers forgot-password
    if (!this.email) {
      this.router.navigate([routes.forgot_password]);
    }
  }

  // Méthode appelée lors de la soumission du formulaire
  submitVerifyOtp(): void {
    // Réinitialiser les messages
    this.errorMessage = '';
    this.successMessage = '';

    // Validation basique
    if (!this.otpCode || !this.otpCode.trim()) {
      this.errorMessage = 'Veuillez entrer le code OTP';
      return;
    }

    if (this.otpCode.length !== 6 || !/^\d+$/.test(this.otpCode)) {
      this.errorMessage = 'Le code OTP doit contenir exactement 6 chiffres';
      return;
    }

    if (!this.newPassword || !this.newPassword.trim()) {
      this.errorMessage = 'Veuillez entrer un nouveau mot de passe';
      return;
    }

    if (this.newPassword.length < 6) {
      this.errorMessage = 'Le mot de passe doit faire au moins 6 caractères';
      return;
    }

    this.isLoading = true;

    // Préparer les données pour l'API
    const payload = {
      email: this.email,
      otpCode: this.otpCode,
      newPassword: this.newPassword
    };

    // Appeler le service pour vérifier l'OTP et réinitialiser le mot de passe
    this.authService.verifyOtp(payload).subscribe({
      next: (response: any) => {
        console.log('✅ [SUCCESS] Réponse brute:', response);
        console.log('✅ [SUCCESS] Type:', typeof response);
        
        this.isLoading = false;
        
        let message = '';
        
        // Cas 1: Objet JSON avec message
        if (response && typeof response === 'object' && response.message) {
          message = response.message;
          console.log('✅ Format détecté: JSON avec "message"');
        } 
        // Cas 2: Texte brut
        else if (typeof response === 'string' && response.trim()) {
          message = response;
          console.log('✅ Format détecté: Texte brut');
        } 
        // Cas 3: Objet sans message (affiche tout)
        else if (response && typeof response === 'object') {
          message = JSON.stringify(response);
          console.log('✅ Format détecté: Objet JSON (converti)');
        } 
        // Cas 4: Fallback
        else {
          message = 'Mot de passe réinitialisé avec succès!';
          console.log('✅ Format détecté: Vide (fallback)');
        }
        
        console.log('✅ Message final:', message);
        this.successMessage = message;
        
        // Rediriger vers la page login après 1.5 secondes
        setTimeout(() => {
          this.router.navigate([routes.login]);
        }, 1500);
      },
      error: (error: any) => {
        console.error('❌ [ERROR FULL]:', error);
        console.error('❌ Status:', error.status);
        console.error('❌ Error:', error.error);
        console.error('❌ Message:', error.message);
        
        this.isLoading = false;
        
        // Essayer d'extraire le message d'erreur
        let errorMsg = 'Une erreur est survenue. Veuillez réessayer.';
        
        if (error.error && typeof error.error === 'string') {
          errorMsg = error.error;
        } else if (error.error && error.error.message) {
          errorMsg = error.error.message;
        } else if (error.message) {
          errorMsg = error.message;
        }
        
        this.errorMessage = errorMsg;
      }
    });
  }

  directIndex() {
    this.router.navigate([routes.instructor_dashboard]);
  }
}
