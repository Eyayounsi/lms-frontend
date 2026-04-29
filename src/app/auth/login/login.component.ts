import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
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
import { environment } from '../../../environments/environment';

declare const google: any;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    imports: [CommonModule,FormsModule,RouterLink,SlickCarouselModule]
})
export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {
  public routes = routes;
  public welcomeLogin: welcomeLogin[] = [];
  readonly googleAuthEnabled = !!environment.enableGoogleAuth;
  password: boolean = false;
  blockedMessage: string = '';
  errorMessage: string = '';

  // ── Face login state ────────────────────────────────────────────────────
  faceLoginActive    = false;
  recognizedUser:    { fullName: string; email: string } | null = null;
  recognitionError   = '';
  faceScanning       = false;
  private faceStream: MediaStream | null = null;
  private recognitionInterval: any = null;

  @ViewChild('faceLoginVideo')  faceLoginVideo!:  ElementRef<HTMLVideoElement>;
  @ViewChild('faceLoginCanvas') faceLoginCanvas!: ElementRef<HTMLCanvasElement>;

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
          document.getElementById('google-btn-login'),
          { theme: 'outline', size: 'large', text: 'signin_with', shape: 'rectangular', width: 220 }
        );
      } else {
        setTimeout(initGoogle, 300);
      }
    };
    initGoogle();
  }

  ngOnDestroy(): void {
    this.stopFaceCamera();
  }

  // ── Google login ─────────────────────────────────────────────────────────
  handleGoogleCredential(response: any): void {
    this.errorMessage = '';
    this.blockedMessage = '';
    this.authService.loginWithGoogle(response.credential).subscribe({
      next: (res: any) => {
        this.blockedService.clear();
        localStorage.setItem('token', res.token);
        localStorage.setItem('id', res.id);
        localStorage.setItem('email', res.email);
        localStorage.setItem('fullName', res.fullName);
        localStorage.setItem('role', res.role);
        localStorage.setItem('firstLogin', 'false');
        localStorage.setItem('secondaryRoles', JSON.stringify(res.secondaryRoles || []));
        this.authService.setFullName(res.fullName || '');
        this.authService.setCurrentRole(res.role);
        this.redirectAfterLogin(res.role);
      },
      error: (err: any) => {
        this.errorMessage = err.error?.error || 'Connexion Google échouée. Réessayez.';
      }
    });
  }

  // ── Face login ───────────────────────────────────────────────────────────
  toggleFaceLogin(): void {
    if (this.faceLoginActive) {
      this.stopFaceCamera();
    } else {
      this.startFaceCamera();
    }
  }

  private startFaceCamera(): void {
    this.faceLoginActive  = true;
    this.recognizedUser   = null;
    this.recognitionError = '';
    this.faceScanning     = true;
    this.errorMessage     = '';

    navigator.mediaDevices
      .getUserMedia({ video: { width: 640, height: 480, facingMode: 'user' } })
      .then(stream => {
        this.faceStream = stream;
        // Wait for ngIf to render video element
        setTimeout(() => {
          if (this.faceLoginVideo?.nativeElement) {
            this.faceLoginVideo.nativeElement.srcObject = stream;
            this.faceLoginVideo.nativeElement.play();
          }
          // Start recognition loop after 1.5s warmup
          setTimeout(() => {
            this.recognitionInterval = setInterval(() => this.performRecognition(), 2000);
          }, 1500);
        }, 200);
      })
      .catch(err => {
        this.faceLoginActive = false;
        this.faceScanning    = false;
        this.errorMessage    = 'Impossible d\'accéder à la caméra : ' + err.message;
      });
  }

  private stopFaceCamera(): void {
    if (this.recognitionInterval) {
      clearInterval(this.recognitionInterval);
      this.recognitionInterval = null;
    }
    if (this.faceStream) {
      this.faceStream.getTracks().forEach(t => t.stop());
      this.faceStream = null;
    }
    this.faceLoginActive = false;
    this.faceScanning    = false;
    this.recognizedUser  = null;
  }

  private performRecognition(): void {
    const video = this.faceLoginVideo?.nativeElement;
    if (!video || video.readyState < 2) return;

    const canvas = this.faceLoginCanvas?.nativeElement;
    if (!canvas) return;

    canvas.width  = 320;
    canvas.height = 240;
    const ctx = canvas.getContext('2d')!;
    ctx.drawImage(video, 0, 0, 320, 240);
    const base64 = canvas.toDataURL('image/jpeg', 0.75);

    this.authService.recognizeFace(base64).subscribe({
      next: (res: any) => {
        if (res.recognized) {
          clearInterval(this.recognitionInterval);
          this.recognitionInterval = null;
          this.faceScanning      = false;
          this.recognizedUser    = { fullName: res.full_name, email: res.email };
          this.recognitionError  = '';

          // Exchange HMAC token for Spring Boot JWT
          this.authService.faceLogin({
            email:     res.email,
            token:     res.token,
            timestamp: res.timestamp
          }).subscribe({
            next: (loginRes: any) => {
              this.blockedService.clear();
              localStorage.setItem('token',      loginRes.token);
              localStorage.setItem('id',         loginRes.id);
              localStorage.setItem('email',      loginRes.email);
              localStorage.setItem('fullName',   loginRes.fullName);
              localStorage.setItem('role',       loginRes.role);
              localStorage.setItem('firstLogin', 'false');
              localStorage.setItem('secondaryRoles', JSON.stringify(loginRes.secondaryRoles || []));
              this.authService.setFullName(loginRes.fullName || '');
              this.authService.setCurrentRole(loginRes.role);
              // Redirect after a brief "welcome" display
              setTimeout(() => {
                this.stopFaceCamera();
                this.redirectAfterLogin(loginRes.role);
              }, 2200);
            },
            error: (err: any) => {
              this.recognizedUser   = null;
              this.recognitionError = err.error?.error || 'Erreur de connexion.';
              // Resume scanning
              this.faceScanning        = true;
              this.recognitionInterval = setInterval(() => this.performRecognition(), 2000);
            }
          });
        } else {
          this.recognizedUser = null;
          this.faceScanning = true;
          this.recognitionError = res?.message || 'Visage non reconnu. Ajustez la lumière et regardez la caméra.';
        }
      },
      error: (err: any) => {
        this.recognitionError = err?.error?.error || 'Service Face ID indisponible. Vérifiez que le service Python tourne sur le port 8082.';
        this.faceScanning = false;
        if (this.recognitionInterval) {
          clearInterval(this.recognitionInterval);
          this.recognitionInterval = null;
        }
      }
    });
  }

  // ── Shared redirect ──────────────────────────────────────────────────────
  private redirectAfterLogin(role: string): void {
    // Planifier le logout automatique dès que le token est stocké
    this.authService.scheduleAutoLogout();
    if (role.includes('INSTRUCTOR')) {
      this.router.navigate([routes.instructor_dashboard]);
    } else if (role.includes('STUDENT')) {
      const returnUrl = localStorage.getItem('pendingReturnUrl');
      localStorage.removeItem('pendingReturnUrl');
      this.router.navigate(returnUrl ? [returnUrl] : [routes.students_Dashboard]);
    } else if (role.includes('SUPERADMIN')) {
      this.router.navigate([routes.superadmin_dashboard]);
    } else if (role.includes('ADMIN')) {
      this.router.navigate([routes.admin_dashboard]);
    } else if (role.includes('RECRUITER')) {
      this.router.navigate([routes.recruiter_dashboard]);
    } else {
      this.router.navigate([routes.home]);
    }
  }

  directIndex() {
    this.router.navigate([routes.instructor_dashboard]);
  }

  // ── Classic login ────────────────────────────────────────────────────────
  loginUser(form: any) {
    this.errorMessage = '';
    this.blockedMessage = '';

    if (!form.valid) {
      this.errorMessage = 'Veuillez remplir tous les champs correctement';
      return;
    }

    const loginData = {
      email:    form.value.email?.trim(),
      password: form.value.password?.trim()
    };

    this.authService.login(loginData).subscribe({
      next: (res: any) => {
        this.blockedService.clear();
        localStorage.removeItem('blockedMessage');
        localStorage.setItem('token',      res.token);
        localStorage.setItem('id',         res.id);
        localStorage.setItem('email',      res.email);
        localStorage.setItem('fullName',   res.fullName);
        localStorage.setItem('role',       res.role);
        localStorage.setItem('firstLogin', res.firstLogin ? 'true' : 'false');
        localStorage.setItem('secondaryRoles', JSON.stringify(res.secondaryRoles || []));
        this.authService.setFullName(res.fullName || '');
        this.authService.setCurrentRole(res.role);

        if (res.firstLogin === true) {
          this.router.navigate([routes.forceChangePassword]);
          return;
        }

        // Planifier le logout automatique dès que le token est stocké
        this.authService.scheduleAutoLogout();

        const role: string = res.role;
        const guestCart: any[] = JSON.parse(localStorage.getItem('guest_cart') || '[]');
        const hasGuestItems = guestCart.length > 0 && role.includes('STUDENT');

        const navigateAfterLogin = () => {
          if (role.includes('INSTRUCTOR')) {
            this.router.navigate([routes.instructor_dashboard]);
          } else if (role.includes('STUDENT')) {
            const returnUrl = localStorage.getItem('pendingReturnUrl');
            localStorage.removeItem('pendingReturnUrl');
            if (returnUrl)          this.router.navigateByUrl(returnUrl);
            else if (hasGuestItems) this.router.navigate([routes.cart]);
            else                    this.router.navigate([routes.students_Dashboard]);
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
        const msg = error.error?.message || 'Email ou mot de passe incorrect';
        this.errorMessage = msg;
      }
    });
  }
}
