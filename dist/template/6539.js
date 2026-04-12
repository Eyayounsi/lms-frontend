"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[6539],{

/***/ 66539:
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/service/routes/routes */ 92643);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-slick-carousel */ 49953);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_data_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/service/data/data.service */ 30098);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 85422);
/* harmony import */ var _shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/service/auth/auth.service */ 34530);
/* harmony import */ var _shared_service_auth_blocked_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/service/auth/blocked.service */ 63688);
/* harmony import */ var _shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/service/course/course.service */ 4856);

















const _c0 = ["faceLoginVideo"];
const _c1 = ["faceLoginCanvas"];
function LoginComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 9)(1, "div", 58)(2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 61)(5, "h3", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const slide_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", slide_r2.img, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", slide_r2.content1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](slide_r2.content2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](slide_r2.content3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", slide_r2.content4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](slide_r2.paragraph);
  }
}
function LoginComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r2.blockedMessage);
  }
}
function LoginComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r2.errorMessage);
  }
}
function LoginComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Facebook");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function LoginComponent_span_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "span", 73)(2, "span", 73)(3, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Recherche de votre visage\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function LoginComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 77)(1, "div", 78)(2, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "h5", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Bienvenue !");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "small", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Redirection en cours\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r2.recognizedUser.fullName);
  }
}
function LoginComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r2.recognitionError);
  }
}
function LoginComponent_p_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Placez-vous face \u00E0 la cam\u00E9ra, bien \u00E9clair\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
let LoginComponent = /*#__PURE__*/(() => {
  class LoginComponent {
    DataService;
    router;
    authService;
    blockedService;
    courseService;
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_1__.routes;
    welcomeLogin = [];
    googleAuthEnabled = !!_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.enableGoogleAuth;
    password = false;
    blockedMessage = '';
    errorMessage = '';
    // ── Face login state ────────────────────────────────────────────────────
    faceLoginActive = false;
    recognizedUser = null;
    recognitionError = '';
    faceScanning = false;
    faceStream = null;
    recognitionInterval = null;
    faceLoginVideo;
    faceLoginCanvas;
    togglePassword() {
      this.password = !this.password;
    }
    authSlider = {
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      responsive: [{
        breakpoint: 1300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };
    constructor(DataService, router, authService, blockedService, courseService) {
      this.DataService = DataService;
      this.router = router;
      this.authService = authService;
      this.blockedService = blockedService;
      this.courseService = courseService;
      this.welcomeLogin = this.DataService.welcomeLogin;
    }
    ngOnInit() {
      const msg = localStorage.getItem('blockedMessage');
      if (msg) {
        this.blockedMessage = msg;
        localStorage.removeItem('blockedMessage');
      }
    }
    ngAfterViewInit() {
      if (!this.googleAuthEnabled) {
        return;
      }
      const initGoogle = () => {
        if (typeof google !== 'undefined' && google.accounts) {
          google.accounts.id.initialize({
            client_id: _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.googleClientId,
            callback: response => this.handleGoogleCredential(response)
          });
          google.accounts.id.renderButton(document.getElementById('google-btn-login'), {
            theme: 'outline',
            size: 'large',
            text: 'signin_with',
            shape: 'rectangular',
            width: 220
          });
        } else {
          setTimeout(initGoogle, 300);
        }
      };
      initGoogle();
    }
    ngOnDestroy() {
      this.stopFaceCamera();
    }
    // ── Google login ─────────────────────────────────────────────────────────
    handleGoogleCredential(response) {
      this.errorMessage = '';
      this.blockedMessage = '';
      this.authService.loginWithGoogle(response.credential).subscribe({
        next: res => {
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
        error: err => {
          this.errorMessage = err.error?.error || 'Connexion Google échouée. Réessayez.';
        }
      });
    }
    // ── Face login ───────────────────────────────────────────────────────────
    toggleFaceLogin() {
      if (this.faceLoginActive) {
        this.stopFaceCamera();
      } else {
        this.startFaceCamera();
      }
    }
    startFaceCamera() {
      this.faceLoginActive = true;
      this.recognizedUser = null;
      this.recognitionError = '';
      this.faceScanning = true;
      this.errorMessage = '';
      navigator.mediaDevices.getUserMedia({
        video: {
          width: 640,
          height: 480,
          facingMode: 'user'
        }
      }).then(stream => {
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
      }).catch(err => {
        this.faceLoginActive = false;
        this.faceScanning = false;
        this.errorMessage = 'Impossible d\'accéder à la caméra : ' + err.message;
      });
    }
    stopFaceCamera() {
      if (this.recognitionInterval) {
        clearInterval(this.recognitionInterval);
        this.recognitionInterval = null;
      }
      if (this.faceStream) {
        this.faceStream.getTracks().forEach(t => t.stop());
        this.faceStream = null;
      }
      this.faceLoginActive = false;
      this.faceScanning = false;
      this.recognizedUser = null;
    }
    performRecognition() {
      const video = this.faceLoginVideo?.nativeElement;
      if (!video || video.readyState < 2) return;
      const canvas = this.faceLoginCanvas?.nativeElement;
      if (!canvas) return;
      canvas.width = 320;
      canvas.height = 240;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, 320, 240);
      const base64 = canvas.toDataURL('image/jpeg', 0.75);
      this.authService.recognizeFace(base64).subscribe({
        next: res => {
          if (res.recognized) {
            clearInterval(this.recognitionInterval);
            this.recognitionInterval = null;
            this.faceScanning = false;
            this.recognizedUser = {
              fullName: res.full_name,
              email: res.email
            };
            this.recognitionError = '';
            // Exchange HMAC token for Spring Boot JWT
            this.authService.faceLogin({
              email: res.email,
              token: res.token,
              timestamp: res.timestamp
            }).subscribe({
              next: loginRes => {
                this.blockedService.clear();
                localStorage.setItem('token', loginRes.token);
                localStorage.setItem('id', loginRes.id);
                localStorage.setItem('email', loginRes.email);
                localStorage.setItem('fullName', loginRes.fullName);
                localStorage.setItem('role', loginRes.role);
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
              error: err => {
                this.recognizedUser = null;
                this.recognitionError = err.error?.error || 'Erreur de connexion.';
                // Resume scanning
                this.faceScanning = true;
                this.recognitionInterval = setInterval(() => this.performRecognition(), 2000);
              }
            });
          } else {
            this.recognizedUser = null;
            this.faceScanning = true;
            this.recognitionError = res?.message || 'Visage non reconnu. Ajustez la lumière et regardez la caméra.';
          }
        },
        error: err => {
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
    redirectAfterLogin(role) {
      // Planifier le logout automatique dès que le token est stocké
      this.authService.scheduleAutoLogout();
      if (role.includes('INSTRUCTOR')) {
        this.router.navigate([_shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_1__.routes.instructor_dashboard]);
      } else if (role.includes('STUDENT')) {
        const returnUrl = localStorage.getItem('pendingReturnUrl');
        localStorage.removeItem('pendingReturnUrl');
        this.router.navigate(returnUrl ? [returnUrl] : [_shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_1__.routes.students_Dashboard]);
      } else if (role.includes('SUPERADMIN')) {
        this.router.navigate([_shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_1__.routes.superadmin_dashboard]);
      } else if (role.includes('ADMIN')) {
        this.router.navigate([_shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_1__.routes.admin_dashboard]);
      } else if (role.includes('RECRUITER')) {
        this.router.navigate([_shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_1__.routes.recruiter_dashboard]);
      } else {
        this.router.navigate([_shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_1__.routes.home]);
      }
    }
    directIndex() {
      this.router.navigate([_shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_1__.routes.instructor_dashboard]);
    }
    // ── Classic login ────────────────────────────────────────────────────────
    loginUser(form) {
      console.log('Form values:', form.value);
      this.errorMessage = '';
      this.blockedMessage = '';
      if (!form.valid) {
        this.errorMessage = 'Veuillez remplir tous les champs correctement';
        return;
      }
      const loginData = {
        email: form.value.email?.trim(),
        password: form.value.password?.trim()
      };
      this.authService.login(loginData).subscribe({
        next: res => {
          this.blockedService.clear();
          localStorage.removeItem('blockedMessage');
          localStorage.setItem('token', res.token);
          localStorage.setItem('id', res.id);
          localStorage.setItem('email', res.email);
          localStorage.setItem('fullName', res.fullName);
          localStorage.setItem('role', res.role);
          localStorage.setItem('firstLogin', res.firstLogin ? 'true' : 'false');
          localStorage.setItem('secondaryRoles', JSON.stringify(res.secondaryRoles || []));
          this.authService.setFullName(res.fullName || '');
          this.authService.setCurrentRole(res.role);
          if (res.firstLogin === true) {
            this.router.navigate([_shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_1__.routes.forceChangePassword]);
            return;
          }
          // Planifier le logout automatique dès que le token est stocké
          this.authService.scheduleAutoLogout();
          const role = res.role;
          const guestCart = JSON.parse(localStorage.getItem('guest_cart') || '[]');
          const hasGuestItems = guestCart.length > 0 && role.includes('STUDENT');
          const navigateAfterLogin = () => {
            if (role.includes('INSTRUCTOR')) {
              this.router.navigate([_shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_1__.routes.instructor_dashboard]);
            } else if (role.includes('STUDENT')) {
              const returnUrl = localStorage.getItem('pendingReturnUrl');
              localStorage.removeItem('pendingReturnUrl');
              if (returnUrl) this.router.navigateByUrl(returnUrl);else if (hasGuestItems) this.router.navigate([_shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_1__.routes.cart]);else this.router.navigate([_shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_1__.routes.students_Dashboard]);
            } else if (role.includes('SUPERADMIN')) {
              this.router.navigate([_shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_1__.routes.superadmin_dashboard]);
            } else if (role.includes('ADMIN')) {
              this.router.navigate([_shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_1__.routes.admin_dashboard]);
            } else if (role.includes('RECRUITER')) {
              this.router.navigate([_shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_1__.routes.recruiter_dashboard]);
            } else {
              this.router.navigate([_shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_1__.routes.home]);
            }
          };
          if (hasGuestItems) {
            localStorage.removeItem('guest_cart');
            const cartCalls = guestCart.map(item => this.courseService.addToCart(item.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null))));
            (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.forkJoin)(cartCalls).subscribe({
              next: () => navigateAfterLogin(),
              error: () => navigateAfterLogin()
            });
          } else {
            navigateAfterLogin();
          }
        },
        error: error => {
          const msg = error.error?.message || 'Email ou mot de passe incorrect';
          this.errorMessage = msg;
        }
      });
    }
    static ɵfac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_service_data_data_service__WEBPACK_IMPORTED_MODULE_11__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_service_auth_blocked_service__WEBPACK_IMPORTED_MODULE_14__.BlockedService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_15__.CourseService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      viewQuery: function LoginComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.faceLoginVideo = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.faceLoginCanvas = _t.first);
        }
      },
      decls: 78,
      vars: 21,
      consts: [["loginForm", "ngForm"], ["faceLoginVideo", ""], ["faceLoginCanvas", ""], [1, "main-wrapper"], [1, "login-content"], [1, "row"], [1, "col-md-6", "login-bg", "d-none", "d-lg-flex"], [1, "login-carousel"], [3, "config"], ["ngxSlickItem", ""], [1, "col-md-6", "login-wrap-bg"], [1, "login-wrapper"], [1, "loginbox"], [1, "w-100"], [1, "d-flex", "align-items-center", "justify-content-between", "login-header"], ["src", "assets/img/logo.svg", "alt", "Logo", 1, "img-fluid"], [1, "link-1", 3, "routerLink"], [1, "fs-32", "fw-bold", "topic"], ["class", "alert alert-danger d-flex align-items-center gap-2 mb-3", "role", "alert", 4, "ngIf"], ["class", "alert alert-warning d-flex align-items-center gap-2 mb-3", "role", "alert", 4, "ngIf"], [1, "mb-3", "pb-3", 3, "ngSubmit"], [1, "mb-3", "position-relative"], [1, "form-label"], [1, "text-danger", "ms-1"], [1, "position-relative"], ["type", "email", "name", "email", "ngModel", "", "required", "", 1, "form-control", "form-control-lg"], [1, "isax", "isax-sms", "input-icon", "text-gray-7", "fs-14"], ["id", "passwordInput", 1, "position-relative"], ["name", "password", "ngModel", "", "required", "", 1, "pass-inputs", "form-control", "form-control-lg", 3, "type"], ["tabindex", "0", 1, "isax", "toggle-passwords", "fs-14", 3, "click", "keydown.enter", "ngClass"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "remember-me", "d-flex", "align-items-center"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input"], ["for", "flexCheckDefault", 1, "form-check-label", "ms-2"], [1, ""], [1, "link-2", 3, "routerLink"], [1, "d-grid"], ["type", "submit", 1, "btn", "btn-secondary", "btn-lg"], [1, "isax", "isax-arrow-right-3", "ms-1"], [1, "d-flex", "align-items-center", "justify-content-center", "or", "fs-14", "mb-3"], ["class", "d-flex align-items-center justify-content-center mb-3", 4, "ngIf"], [1, "mb-3"], [1, "d-flex", "align-items-center", "my-2"], [1, "flex-grow-1"], [1, "px-2", "text-muted", "fs-12"], [1, "btn", "w-100", "face-login-btn", 3, "click"], [1, "ti", "ti-face-id", "fs-18", "me-2"], ["class", "ms-2", 4, "ngIf"], [1, "mt-3", "face-camera-section"], [1, "face-video-wrapper", "position-relative"], ["autoplay", "", "playsinline", "", "muted", "", 1, "face-video", "w-100", "rounded-3"], [2, "display", "none"], ["class", "scan-overlay", 4, "ngIf"], ["class", "success-overlay", 4, "ngIf"], ["class", "alert alert-danger d-flex align-items-center gap-2 mt-2 py-2 small", "role", "alert", 4, "ngIf"], ["class", "text-muted text-center small mt-2 mb-0", 4, "ngIf"], [1, "fs-14", "fw-normal", "d-flex", "align-items-center", "justify-content-center"], [1, "link-2", "ms-1", 3, "routerLink"], [1, "login-carousel-section", "mb-3"], [1, "login-banner"], ["alt", "Logo", 1, "img-fluid", 3, "src"], [1, "mentor-course", "text-center"], [1, "mb-2"], [1, "text-secondary"], ["role", "alert", 1, "alert", "alert-danger", "d-flex", "align-items-center", "gap-2", "mb-3"], [1, "ti", "ti-ban", "fs-18", "flex-shrink-0"], ["role", "alert", 1, "alert", "alert-warning", "d-flex", "align-items-center", "gap-2", "mb-3"], [1, "ti", "ti-alert-triangle", "fs-18", "flex-shrink-0"], [1, "d-flex", "align-items-center", "justify-content-center", "mb-3"], ["id", "google-btn-login", 1, "me-2"], ["href", "javascript:void(0);", 1, "btn", "btn-light"], ["src", "assets/img/icons/facebook.svg", "alt", "img", 1, "me-2"], [1, "ms-2"], [1, "scanning-dot"], [1, "scan-overlay"], [1, "scan-ring"], [1, "scan-text"], [1, "success-overlay"], [1, "success-content"], [1, "check-circle"], [1, "ti", "ti-check", "fs-32", "text-white"], [1, "mt-2", "mb-1", "text-white", "fw-bold"], [1, "text-white", "mb-1", "fw-semibold", "fs-16"], [1, "text-white-50"], ["role", "alert", 1, "alert", "alert-danger", "d-flex", "align-items-center", "gap-2", "mt-2", "py-2", "small"], [1, "ti", "ti-alert-triangle", "fs-16", "flex-shrink-0"], [1, "text-muted", "text-center", "small", "mt-2", "mb-0"], [1, "ti", "ti-info-circle", "me-1"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "div", 7)(5, "ngx-slick-carousel", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeaterCreate"](6, LoginComponent_For_7_Template, 14, 6, "div", 9, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 10)(9, "div", 11)(10, "div", 12)(11, "div", 13)(12, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "img", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "Back to Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "h1", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "Sign into Your Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, LoginComponent_div_18_Template, 4, 1, "div", 18)(19, LoginComponent_div_19_Template, 4, 1, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "form", 20, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            const loginForm_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](21);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.loginUser(loginForm_r4));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 21)(23, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](28, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](30, "i", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "div", 21)(32, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "Password ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](37, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginComponent_Template_span_click_38_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.togglePassword());
          })("keydown.enter", function LoginComponent_Template_span_keydown_enter_38_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.togglePassword());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "div", 30)(40, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](41, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "label", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, " Remember Me ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "div", 34)(45, "a", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46, " Forgot Password ? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "div", 36)(48, "button", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](49, "Login ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](50, "i", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](52, " Or ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](53, LoginComponent_div_53_Template, 5, 0, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "div", 41)(55, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](56, "hr", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "span", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](58, "ou");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](59, "hr", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "button", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_60_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.toggleFaceLogin());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](61, "i", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](62);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](63, LoginComponent_span_63_Template, 4, 0, "span", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](64, "div", 48)(65, "div", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](66, "video", 50, 1)(68, "canvas", 51, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](70, LoginComponent_div_70_Template, 4, 0, "div", 52)(71, LoginComponent_div_71_Template, 10, 1, "div", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](72, LoginComponent_div_72_Template, 4, 1, "div", 54)(73, LoginComponent_p_73_Template, 3, 0, "p", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](74, "div", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](75, " Don't you have an account?");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "a", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](77, " Sign up");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("config", ctx.authSlider);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeater"](ctx.welcomeLogin);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.home);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.blockedMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("type", ctx.password ? "text" : "password");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx.password ? "isax-eye" : "isax-eye-slash");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.forgot_password);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.googleAuthEnabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("btn-outline-secondary", !ctx.faceLoginActive)("btn-secondary", ctx.faceLoginActive);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.faceLoginActive ? "Fermer la cam\u00E9ra" : "Login with Face ID", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.faceScanning);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("d-none", !ctx.faceLoginActive);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.faceScanning && !ctx.recognizedUser);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.recognizedUser);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.recognitionError);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.faceScanning && !ctx.recognizedUser && !ctx.recognitionError);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.register);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterLink, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__.SlickCarouselModule, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__.SlickCarouselComponent, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__.SlickItemDirective],
      styles: ["@charset \"UTF-8\";\n\n\n.face-login-btn[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  font-weight: 600;\n  transition: all 0.2s;\n}\n.face-login-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n\n.face-camera-section[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.face-video-wrapper[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  overflow: hidden;\n  background: #000;\n  max-height: 300px;\n}\n\n.face-video[_ngcontent-%COMP%] {\n  max-height: 300px;\n  object-fit: cover;\n  transform: scaleX(-1); \n\n}\n\n\n\n.scan-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  pointer-events: none;\n}\n\n.scan-ring[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 150px;\n  border: 3px solid rgba(92, 103, 229, 0.8);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_scan-pulse 1.5s ease-in-out infinite;\n  box-shadow: 0 0 20px rgba(92, 103, 229, 0.4);\n}\n\n@keyframes _ngcontent-%COMP%_scan-pulse {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.06);\n    opacity: 0.7;\n  }\n}\n.scan-text[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 13px;\n  font-weight: 500;\n  background: rgba(0, 0, 0, 0.45);\n  padding: 4px 14px;\n  border-radius: 20px;\n}\n\n\n\n.success-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-out;\n}\n\n.success-content[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1rem;\n}\n\n.check-circle[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  background: #22c55e;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  animation: _ngcontent-%COMP%_bounceIn 0.4s ease-out;\n  box-shadow: 0 0 30px rgba(34, 197, 94, 0.5);\n}\n\n@keyframes _ngcontent-%COMP%_bounceIn {\n  0% {\n    transform: scale(0.3);\n    opacity: 0;\n  }\n  60% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n\n.scanning-dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: currentColor;\n  margin: 0 2px;\n  animation: _ngcontent-%COMP%_dot-bounce 1.2s ease-in-out infinite;\n}\n.scanning-dot[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.15s;\n}\n.scanning-dot[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.3s;\n}\n\n@keyframes _ngcontent-%COMP%_dot-bounce {\n  0%, 80%, 100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(-5px);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEIsaUZBQUE7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUNGO0FBQUU7RUFBVSwyQkFBQTtBQUdaOztBQUFBO0VBQ0UsK0JBQUE7QUFHRjs7QUFBQTtFQUNFO0lBQU8sVUFBQTtJQUFZLDBCQUFBO0VBS25CO0VBSkE7SUFBTyxVQUFBO0lBQVksd0JBQUE7RUFRbkI7QUFDRjtBQU5BO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFRRjs7QUFMQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQSxFQUFBLFdBQUE7QUFRRjs7QUFMQSxxQkFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FBUUY7O0FBTEE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtFQUNBLDRDQUFBO0FBUUY7O0FBTEE7RUFDRTtJQUFXLG1CQUFBO0lBQXdCLFVBQUE7RUFVbkM7RUFUQTtJQUFZLHNCQUFBO0lBQXdCLFlBQUE7RUFhcEM7QUFDRjtBQVhBO0VBQ0UsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQWFGOztBQVZBLG9CQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7QUFhRjs7QUFWQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQWFGOztBQVZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQ0FBQTtBQWFGOztBQVZBO0VBQ0U7SUFBTyxxQkFBQTtJQUF1QixVQUFBO0VBZTlCO0VBZEE7SUFBTyxxQkFBQTtFQWlCUDtFQWhCQTtJQUFPLG1CQUFBO0lBQXVCLFVBQUE7RUFvQjlCO0FBQ0Y7QUFsQkEsNEJBQUE7QUFDQTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLCtDQUFBO0FBb0JGO0FBbEJFO0VBQWlCLHNCQUFBO0FBcUJuQjtBQXBCRTtFQUFpQixxQkFBQTtBQXVCbkI7O0FBcEJBO0VBQ0U7SUFBZ0Isd0JBQUE7RUF3QmhCO0VBdkJBO0lBQWlCLDJCQUFBO0VBMEJqQjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogw6LClMKAw6LClMKAIEZhY2UgSUQgTG9naW4gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXHJcblxyXG4uZmFjZS1sb2dpbi1idG4ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAmOmhvdmVyIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpOyB9XHJcbn1cclxuXHJcbi5mYWNlLWNhbWVyYS1zZWN0aW9uIHtcclxuICBhbmltYXRpb246IGZhZGVJbiAwLjNzIGVhc2Utb3V0O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpOyB9XHJcbiAgdG8gICB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxyXG59XHJcblxyXG4uZmFjZS12aWRlby13cmFwcGVyIHtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZDogIzAwMDtcclxuICBtYXgtaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLmZhY2UtdmlkZW8ge1xyXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTsgLyogbWlycm9yICovXHJcbn1cclxuXHJcbi8qIFNjYW5uaW5nIG92ZXJsYXkgKi9cclxuLnNjYW4tb3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGluc2V0OiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uc2Nhbi1yaW5nIHtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDkyLDEwMywyMjksMC44KTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYW5pbWF0aW9uOiBzY2FuLXB1bHNlIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSg5MiwxMDMsMjI5LDAuNCk7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2Nhbi1wdWxzZSB7XHJcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyAgICBvcGFjaXR5OiAxOyB9XHJcbiAgNTAlICAgICAgIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjA2KTsgb3BhY2l0eTogMC43OyB9XHJcbn1cclxuXHJcbi5zY2FuLXRleHQge1xyXG4gIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44NSk7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjQ1KTtcclxuICBwYWRkaW5nOiA0cHggMTRweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4vKiBTdWNjZXNzIG92ZXJsYXkgKi9cclxuLnN1Y2Nlc3Mtb3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGluc2V0OiAwO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC43KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC4zcyBlYXNlLW91dDtcclxufVxyXG5cclxuLnN1Y2Nlc3MtY29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbi5jaGVjay1jaXJjbGUge1xyXG4gIHdpZHRoOiA3MnB4O1xyXG4gIGhlaWdodDogNzJweDtcclxuICBiYWNrZ3JvdW5kOiAjMjJjNTVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYW5pbWF0aW9uOiBib3VuY2VJbiAwLjRzIGVhc2Utb3V0O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMzQsMTk3LDk0LDAuNSk7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYm91bmNlSW4ge1xyXG4gIDAlICAgeyB0cmFuc2Zvcm06IHNjYWxlKDAuMyk7IG9wYWNpdHk6IDA7IH1cclxuICA2MCUgIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyB9XHJcbiAgMTAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7ICAgb3BhY2l0eTogMTsgfVxyXG59XHJcblxyXG4vKiBTY2FubmluZyBkb3RzIGFuaW1hdGlvbiAqL1xyXG4uc2Nhbm5pbmctZG90IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDZweDtcclxuICBoZWlnaHQ6IDZweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xyXG4gIG1hcmdpbjogMCAycHg7XHJcbiAgYW5pbWF0aW9uOiBkb3QtYm91bmNlIDEuMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcblxyXG4gICY6bnRoLWNoaWxkKDIpIHsgYW5pbWF0aW9uLWRlbGF5OiAwLjE1czsgfVxyXG4gICY6bnRoLWNoaWxkKDMpIHsgYW5pbWF0aW9uLWRlbGF5OiAwLjNzOyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZG90LWJvdW5jZSB7XHJcbiAgMCUsIDgwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxyXG4gIDQwJSAgICAgICAgICAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpOyB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return LoginComponent;
})();

/***/ })

}]);
//# sourceMappingURL=6539.js.map