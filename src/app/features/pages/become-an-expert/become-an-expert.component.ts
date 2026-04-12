import { Component } from '@angular/core';
import { routes } from '../../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../shared/service/auth/auth.service';

@Component({
  selector: 'app-become-an-expert',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './become-an-expert.component.html',
  styleUrl: './become-an-expert.component.scss'
})
export class BecomeAnExpertComponent {
  routes = routes;
  password: boolean[] = [false, false];

  passwordValue = '';
  strengthLevel = '';

  private poorRegExp = /[a-z]/;
  private weakRegExp = /(?=.*?[0-9])/;
  private strongRegExp = /(?=.*?[#?!@$%^&*-])/;
  private whitespaceRegExp = /^$|\s+/;

  constructor(private authService: AuthService, private router: Router) {}

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
