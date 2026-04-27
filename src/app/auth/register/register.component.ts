import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { welcomeLogin } from '../../shared/models/model';
import { DataService } from '../../shared/service/data/data.service';
import { routes } from '../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AuthService } from '../../shared/service/auth/auth.service';
import { environment } from '../../../environments/environment';
import { InputOtpModule } from 'primeng/inputotp';

declare const google: any;

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, RouterLink, SlickCarouselModule, InputOtpModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements AfterViewInit {
  routes = routes;
  public welcomeLogin: welcomeLogin[] = [];
  readonly googleAuthEnabled = !!environment.enableGoogleAuth;
  readonly intendedRole: string;
  password: boolean[] = [false];
  errorMessage: string = '';
  successMessage: string = '';
  isLoading: boolean = false;

  // ── OTP step ─────────────────────────────────────────────────────────────
  step: 'form' | 'otp' | 'success' = 'form';
  pendingEmail: string = '';
  pendingName: string = '';
  private pendingRegisterData: any = null;
  otpCode: string = '';
  isVerifying: boolean = false;
  countdown: number = 5;
  private countdownInterval: any = null;

  // ── Masquer email ─────────────────────────────────────────────────────────
  maskEmail(email: string): string {
    const parts = email.split('@');
    if (parts.length !== 2) return email;
    const u = parts[0];
    const masked = u.substring(0, 2) + '***' + u.substring(Math.max(2, u.length - 2));
    return masked + '@' + parts[1];
  }

  togglePassword(index: number): void {
    this.password[index] = !this.password[index];
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
    public router: Router,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
    this.welcomeLogin = this.DataService.welcomeLogin;
    const requestedRole = (this.route.snapshot.queryParamMap.get('role') || '').toUpperCase();
    this.intendedRole = requestedRole === 'INSTRUCTOR' ? 'INSTRUCTOR' : '';
  }

  get roleQueryParams(): { role: string } | null {
    return this.intendedRole ? { role: this.intendedRole } : null;
  }

  directIndex() {
    this.router.navigate([routes.login]);
  }

  ngAfterViewInit(): void {
    if (!this.googleAuthEnabled) {
      return;
    }

    const initGoogle = () => {
      if (typeof google !== 'undefined' && google.accounts) {
        google.accounts.id.initialize({
          client_id: environment.googleClientId,
          callback: (response: any) => this.handleGoogleCredential(response)
        });
        google.accounts.id.renderButton(
          document.getElementById('google-btn-register'),
          { theme: 'outline', size: 'large', text: 'signup_with', shape: 'rectangular', width: 220 }
        );
      } else {
        setTimeout(initGoogle, 300);
      }
    };
    initGoogle();
  }

  handleGoogleCredential(response: any): void {
    this.authService.loginWithGoogle(response.credential).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('id', res.id);
        localStorage.setItem('email', res.email);
        localStorage.setItem('fullName', res.fullName);
        localStorage.setItem('role', res.role);
        localStorage.setItem('firstLogin', 'false');
        this.authService.setFullName(res.fullName || '');
        this.authService.setCurrentRole(res.role || '');
        this.router.navigate([routes.students_Dashboard]);
      },
      error: (err: any) => {
        alert('Connexion Google échouée: ' + (err.error?.error || 'Réessayez'));
      }
    });
  }

  passwordValue: string = '';
  strengthLevel: string = '';
  passwordInfoMessage: string | null = null;
  passwordInfoColor: string = '';

  private poorRegExp = /[a-z]/;
  private weakRegExp = /(?=.*?[0-9])/;
  private strongRegExp = /(?=.*?[#?!@$%^&*-])/;
  private whitespaceRegExp = /^$|\s+/;

  checkPasswordStrength(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const password = inputElement.value;
    this.passwordValue = password;

    const passwordLength = password.length;
    const hasPoor = this.poorRegExp.test(password);
    const hasWeak = this.weakRegExp.test(password);
    const hasStrong = this.strongRegExp.test(password);
    const hasWhitespace = this.whitespaceRegExp.test(password);

    if (password === '') {
      this.resetStrength();
      return;
    }

    if (hasWhitespace) {
      this.passwordInfoMessage = 'Whitespaces are not allowed';
      this.passwordInfoColor = 'red';
      this.strengthLevel = '';
      return;
    }

    if (passwordLength < 8) {
      this.strengthLevel = 'poor';
      this.passwordInfoMessage = 'Weak. Must contain at least 8 characters.';
      this.passwordInfoColor = 'red';
    } else if (hasPoor || hasWeak || hasStrong) {
      this.strengthLevel = 'weak';
      this.passwordInfoMessage = 'Average. Must contain at least 1 letter or number.';
      this.passwordInfoColor = '#FFB54A';
    }

    if (passwordLength >= 8 && hasPoor && (hasWeak || hasStrong)) {
      this.strengthLevel = 'strong';
      this.passwordInfoMessage = 'Almost strong. Must contain a special symbol.';
      this.passwordInfoColor = '#1D9CFD';
    }

    if (passwordLength >= 8 && hasPoor && hasWeak && hasStrong) {
      this.strengthLevel = 'heavy';
      this.passwordInfoMessage = 'Awesome! You have a secure password.';
      this.passwordInfoColor = '#159F46';
    }
  }

  private resetStrength(): void {
    this.strengthLevel = '';
    this.passwordInfoMessage = null;
  }

  // Fonction d'enregistrement
  registerUser(form: any) {
    this.errorMessage = '';
    this.successMessage = '';

    if (!form.valid) {
      this.errorMessage = 'Veuillez remplir tous les champs correctement.';
      return;
    }

    const password = form.value.password?.trim();
    const confirmPassword = form.value.confirmPassword?.trim();

    if (password !== confirmPassword) {
      this.errorMessage = 'Les mots de passe ne correspondent pas !';
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.value.email?.trim())) {
      this.errorMessage = 'Veuillez entrer une adresse email valide.';
      return;
    }

    const registerData = {
      fullName: form.value.fullName?.trim(),
      email: form.value.email?.trim(),
      password: password,
      role: this.intendedRole || undefined
    };

    this.isLoading = true;

    this.authService.requestRegisterOtp(registerData).subscribe({
      next: () => {
        this.isLoading = false;
        this.pendingEmail = registerData.email;
        this.pendingName  = registerData.fullName;
        this.pendingRegisterData = registerData;
        this.otpCode = '';
        this.errorMessage = '';
        this.step = 'otp';
      },
      error: (error: any) => {
        this.isLoading = false;
        const msg = error.error?.error || error.error?.message || '';
        if (msg.toLowerCase().includes('email') || msg.toLowerCase().includes('exist') || msg.toLowerCase().includes('already')) {
          this.errorMessage = 'Cette adresse email est déjà utilisée.';
        } else {
          this.errorMessage = msg || 'Une erreur est survenue. Veuillez réessayer.';
        }
      }
    });
  }

  submitOtp(): void {
    this.errorMessage = '';
    if (!this.otpCode || this.otpCode.length !== 6) {
      this.errorMessage = 'Veuillez entrer le code à 6 chiffres.';
      return;
    }

    this.isVerifying = true;

    this.authService.verifyRegisterOtp(this.pendingEmail, this.otpCode).subscribe({
      next: (res: any) => {
        this.isVerifying = false;
        if (res.token) {
          localStorage.setItem('token', res.token);
          if (res.fullName) this.authService.setFullName(res.fullName);
          if (res.role) this.authService.setCurrentRole(res.role);
        }
        this.step = 'success';
        this.countdown = 5;
        this.countdownInterval = setInterval(() => {
          this.countdown--;
          if (this.countdown <= 0) {
            clearInterval(this.countdownInterval);
            this.router.navigate([routes.login]);
          }
        }, 1000);
      },
      error: (error: any) => {
        this.isVerifying = false;
        this.errorMessage = error.error?.error || 'Code incorrect ou expiré.';
      }
    });
  }

  resendOtp(): void {
    this.errorMessage = '';
    this.successMessage = '';
    if (!this.pendingRegisterData) {
      this.step = 'form';
      this.successMessage = 'Recommencez pour recevoir un nouveau code.';
      return;
    }
    this.isLoading = true;
    this.authService.requestRegisterOtp(this.pendingRegisterData).subscribe({
      next: () => {
        this.isLoading = false;
        this.otpCode = '';
        this.successMessage = 'Un nouveau code a été envoyé à ' + this.pendingEmail;
      },
      error: () => {
        this.isLoading = false;
        this.step = 'form';
        this.successMessage = 'Recommencez pour recevoir un nouveau code.';
      }
    });
  }
}

