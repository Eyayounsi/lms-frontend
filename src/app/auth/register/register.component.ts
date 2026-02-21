import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { welcomeLogin } from '../../shared/models/model';
import { DataService } from '../../shared/service/data/data.service';
import { routes } from '../../shared/service/routes/routes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AuthService } from '../../shared/service/auth/auth.service';

@Component({
  selector: 'app-register',
  imports: [CommonModule,FormsModule,RouterLink,SlickCarouselModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  routes = routes;
  public welcomeLogin: welcomeLogin[] = [];
  password: boolean[] = [false]; // Add more as needed

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
    private authService: AuthService
  ) {
    this.welcomeLogin = this.DataService.welcomeLogin;
  }

  directIndex() {
    this.router.navigate([routes.login]);
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
    console.log('Form values:', form.value); // Debug

    // Vérification que le formulaire est valide
    if (!form.valid) {
      alert('Veuillez remplir tous les champs correctement');
      return;
    }

    const password = form.value.password?.trim();
    const confirmPassword = form.value.confirmPassword?.trim();

    console.log('Password:', password);
    console.log('ConfirmPassword:', confirmPassword);

    // Vérification que les mots de passe correspondent
    if (password !== confirmPassword) {
      alert('Les mots de passe ne correspondent pas !');
      return;
    }

    // Préparer les données pour l'API (en enlevant confirmPassword)
    const registerData = {
      fullName: form.value.fullName?.trim(),
      email: form.value.email?.trim(),
      password: password
    };

    console.log('Sending data:', registerData); // Debug

    this.authService.register(registerData).subscribe({
      next: (res: any) => {
        console.log('Inscription réussie:', res);
        localStorage.setItem('token', res.token);
        alert('Inscription réussie ! Redirection vers login...');
        this.router.navigate([routes.login]);
      },
      error: (error: any) => {
        console.error('Erreur inscription:', error);
        alert('Erreur inscription: ' + (error.error?.message || 'Veuillez réessayer'));
      }
    });
  }
}
