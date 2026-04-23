
import { Component, AfterViewInit } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../shared/service/auth/auth.service';
import { environment } from '../../../../environments/environment';

declare const google: any;


@Component({
  selector: 'app-become-an-expert',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './become-an-expert.component.html',
  styleUrl: './become-an-expert.component.scss'
})
export class BecomeAnExpertComponent implements AfterViewInit {
  routes = routes;
  password: boolean[] = [false, false];
  passwordValue = '';
  strengthLevel = '';
  readonly googleAuthEnabled = !!environment.enableGoogleAuth;

  private poorRegExp = /[a-z]/;
  private weakRegExp = /(?=.*?[0-9])/;
  private strongRegExp = /(?=.*?[#?!@$%^&*-])/;
  private whitespaceRegExp = /^$|\s+/;

  constructor(private authService: AuthService, private router: Router) {}

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
          document.getElementById('google-btn-instructor'),
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
        this.router.navigate([routes.instructor_dashboard]);
      },
      error: (err: any) => {
        alert('Connexion Google échouée: ' + (err.error?.error || 'Réessayez'));
      }
    });
  }

  togglePassword(index: number): void {
    this.password[index] = !this.password[index];
  }

  scrollToRegisterForm(): void {
    const formSection = document.getElementById('become-instructor-register-form');
    if (!formSection) return;
    formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

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
      this.strengthLevel = '';
      return;
    }

    if (hasWhitespace) {
      this.strengthLevel = '';
      return;
    }

    if (passwordLength < 8) {
      this.strengthLevel = 'poor';
      return;
    }

    if (passwordLength >= 8 && hasPoor && (hasWeak || hasStrong)) {
      this.strengthLevel = 'strong';
    } else {
      this.strengthLevel = 'weak';
    }

    if (passwordLength >= 8 && hasPoor && hasWeak && hasStrong) {
      this.strengthLevel = 'heavy';
    }
  }

  registerInstructor(form: any): void {
    if (!form.valid) {
      alert('Veuillez remplir tous les champs correctement');
      return;
    }

    const password = form.value.password?.trim();
    const confirmPassword = form.value.confirmPassword?.trim();

    if (password !== confirmPassword) {
      alert('Les mots de passe ne correspondent pas !');
      return;
    }

    const registerData = {
      fullName: form.value.fullName?.trim(),
      email: form.value.email?.trim(),
      phone: form.value.phone?.trim() || undefined,
      password,
      role: 'INSTRUCTOR'
    };

    this.authService.register(registerData).subscribe({
      next: () => {
        alert('Inscription instructeur réussie ! Redirection vers login...');
        this.router.navigate([routes.login]);
      },
      error: (error: any) => {
        alert('Erreur inscription: ' + (error.error?.message || 'Veuillez réessayer'));
      }
    });
  }
}
