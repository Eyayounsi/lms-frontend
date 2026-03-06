import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/service/data/data.service';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../shared/service/routes/routes';
import { welcomeLogin } from '../../shared/models/model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AuthService } from '../../shared/service/auth/auth.service';
import { BlockedService } from '../../shared/service/auth/blocked.service';
import { CourseService } from '../../shared/service/course/course.service';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    imports: [CommonModule,FormsModule,RouterLink,SlickCarouselModule]
})
export class LoginComponent implements OnInit {
  public routes = routes;
  public welcomeLogin: welcomeLogin[] = [];
  password: boolean = false;
  blockedMessage: string = '';
  errorMessage: string = '';

  togglePassword(): void {
    this.password = !this.password;
  }

  public authSlider ={
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
    private blockedService: BlockedService,
    private courseService: CourseService
  ) {
    this.welcomeLogin = this.DataService.welcomeLogin;
  }

  ngOnInit(): void {
    const msg = localStorage.getItem('blockedMessage');
    if (msg) {
      this.blockedMessage = msg;
      localStorage.removeItem('blockedMessage');
    }
  }

  directIndex() {
    this.router.navigate([routes.instructor_dashboard]);
  }

  // Fonction de connexion
  loginUser(form: any) {
    console.log('Form values:', form.value); // Debug
    this.errorMessage = '';
    this.blockedMessage = '';

    // Vérification que le formulaire est valide
    if (!form.valid) {
      this.errorMessage = 'Veuillez remplir tous les champs correctement';
      return;
    }

    const loginData = {
      email: form.value.email?.trim(),
      password: form.value.password?.trim()
    };

    console.log('Sending login data:', loginData); // Debug

    this.authService.login(loginData).subscribe({
      next: (res: any) => {
        console.log('Connexion réussie:', res);
        // Effacer tout état "bloqué" résiduel du BehaviorSubject
        this.blockedService.clear();
        localStorage.removeItem('blockedMessage');
        // Stocker le token, id, email, fullName et role
        localStorage.setItem('token', res.token);
        localStorage.setItem('id', res.id);
        localStorage.setItem('email', res.email);
        localStorage.setItem('fullName', res.fullName);
        localStorage.setItem('role', res.role);
        localStorage.setItem('firstLogin', res.firstLogin ? 'true' : 'false');

        // ─── Première connexion RECRUITER → forcer le changement de mot de passe ──
        if (res.firstLogin === true) {
          this.router.navigate([routes.forceChangePassword]);
          return;
        }

        // ─── Redirection selon le rôle ───────────────────────────────
        // Le backend retourne res.role sous la forme "[INSTRUCTOR]"
        // (toString() d'une liste Java ajoute des crochets)
        // On utilise .includes() pour détecter le rôle sans se soucier des crochets
        const role: string = res.role;

        // Sync guest cart to backend after student login
        const guestCart: any[] = JSON.parse(localStorage.getItem('guest_cart') || '[]');
        const hasGuestItems = guestCart.length > 0 && role.includes('STUDENT');
        
        const navigateAfterLogin = () => {
          if (role.includes('INSTRUCTOR')) {
            this.router.navigate([routes.instructor_dashboard]);
          } else if (role.includes('STUDENT')) {
            const returnUrl = localStorage.getItem('pendingReturnUrl');
            localStorage.removeItem('pendingReturnUrl');
            if (returnUrl) {
              this.router.navigateByUrl(returnUrl);
            } else if (hasGuestItems) {
              this.router.navigate([routes.cart]);
            } else {
              this.router.navigate([routes.students_Dashboard]);
            }
          } else if (role.includes('SUPERADMIN')) {
            this.router.navigate([routes.superadmin_dashboard]);
          } else if (role.includes('ADMIN')) {
            this.router.navigate([routes.admin_dashboard]);
          } else if (role.includes('RECRUITER')) {
            this.router.navigate([routes.recruiter_dashboard]);
          } else {
            this.router.navigate([routes.home]);
          }
        };

        if (hasGuestItems) {
          localStorage.removeItem('guest_cart');
          const cartCalls = guestCart.map((item: any) =>
            this.courseService.addToCart(item.id).pipe(catchError(() => of(null)))
          );
          forkJoin(cartCalls).subscribe({ next: () => navigateAfterLogin(), error: () => navigateAfterLogin() });
        } else {
          navigateAfterLogin();
        }
      },
      error: (error: any) => {
        console.error('Erreur connexion:', error);
        const msg = error.error?.message || 'Email ou mot de passe incorrect';
        this.errorMessage = msg;
      }
    });
  }
}
