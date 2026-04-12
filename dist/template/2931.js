"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[2931],{

/***/ 22931:
/*!*********************************************************************************!*\
  !*** ./src/app/features/courses/certificate-view/certificate-view.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CertificateViewComponent: () => (/* binding */ CertificateViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 85422);
/* harmony import */ var _shared_service_certificate_certificate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/service/certificate/certificate.service */ 31224);








function CertificateViewComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CertificateViewComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "V\u00E9rifier un certificat");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Saisissez le code de v\u00E9rification figurant sur le certificat pour confirmer son authenticit\u00E9.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 15)(12, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function CertificateViewComponent_div_1_Template_input_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.inputCode, $event) || (ctx_r1.inputCode = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.enter", function CertificateViewComponent_div_1_Template_input_keyup_enter_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.verifyCode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CertificateViewComponent_div_1_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.verifyCode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "V\u00E9rifier ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.inputCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r1.inputCode.trim());
  }
}
function CertificateViewComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19)(1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div")(5, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "R\u00E9essayer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessage, " ");
  }
}
function CertificateViewComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24)(1, "div", 25)(2, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CertificateViewComponent_div_3_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.print());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Imprimer / T\u00E9l\u00E9charger PDF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 30)(8, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "EduLearn Platform");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "hr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 35)(14, "h1", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Certificat d'Ach\u00E8vement");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Certificate of Completion");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 35)(19, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Pr\u00E9sent\u00E9 \u00E0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "h2", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 35)(24, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "pour avoir compl\u00E9t\u00E9 avec succ\u00E8s le cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "h3", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "hr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 42)(30, "div", 43)(31, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Date d'\u00E9mission");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 43)(36, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 43)(39, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Code de v\u00E9rification");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 50)(45, "small", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, " Ce certificat est authentique. Code : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.certificate.studentName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u00AB ", ctx_r1.certificate.courseTitle, " \u00BB");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.formatDate(ctx_r1.certificate.issuedAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.certificate.certificateCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.certificate.certificateCode);
  }
}
let CertificateViewComponent = /*#__PURE__*/(() => {
  class CertificateViewComponent {
    route;
    router;
    certService;
    certificate = null;
    loading = true;
    errorMessage = '';
    /** Mode formulaire : aucun code dans l'URL → on affiche le champ de saisie */
    showForm = false;
    inputCode = '';
    constructor(route, router, certService) {
      this.route = route;
      this.router = router;
      this.certService = certService;
    }
    ngOnInit() {
      const code = this.route.snapshot.paramMap.get('code');
      if (code) {
        this.loading = true;
        this.certService.verifyByCode(code).subscribe({
          next: cert => {
            this.certificate = cert;
            this.loading = false;
          },
          error: () => {
            this.errorMessage = 'Certificat introuvable ou code invalide.';
            this.loading = false;
          }
        });
      } else {
        // Pas de code dans l'URL → afficher le formulaire de recherche
        this.showForm = true;
        this.loading = false;
      }
    }
    /** Navigue vers la page de vérification avec le code saisi */
    verifyCode() {
      const code = this.inputCode.trim();
      if (!code) return;
      this.router.navigate(['/courses/certificates/verify', code]);
    }
    formatDate(dateStr) {
      if (!dateStr) return '-';
      return new Date(dateStr).toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      });
    }
    print() {
      window.print();
    }
    static ɵfac = function CertificateViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CertificateViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_service_certificate_certificate_service__WEBPACK_IMPORTED_MODULE_6__.CertificateService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: CertificateViewComponent,
      selectors: [["app-certificate-view"]],
      decls: 4,
      vars: 4,
      consts: [["class", "d-flex justify-content-center align-items-center", "style", "min-height:300px;", 4, "ngIf"], ["class", "container py-5", 4, "ngIf"], ["class", "container py-5 text-center", 4, "ngIf"], ["class", "certificate-wrapper", 4, "ngIf"], [1, "d-flex", "justify-content-center", "align-items-center", 2, "min-height", "300px"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "container", "py-5"], [1, "row", "justify-content-center"], [1, "col-md-6", "col-lg-5"], [1, "card", "shadow-sm", "border-0", "rounded-4", "p-4", "text-center"], [1, "mb-3"], [1, "d-inline-flex", "align-items-center", "justify-content-center", "rounded-circle", "bg-primary", "bg-opacity-10", 2, "width", "72px", "height", "72px"], [1, "isax", "isax-shield-tick", "text-primary", 2, "font-size", "2rem"], [1, "fw-bold", "mb-1"], [1, "text-muted", "mb-4"], [1, "input-group", "mb-3"], ["type", "text", "placeholder", "Ex : CERT-XXXXXXXXXXXXXXXX", "autofocus", "", 1, "form-control", "form-control-lg", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "btn", "btn-primary", "btn-lg", "w-100", 3, "click", "disabled"], [1, "isax", "isax-search-normal", "me-2"], [1, "container", "py-5", "text-center"], [1, "alert", "alert-danger", "d-inline-flex", "align-items-center", "gap-2", "px-4", "py-3", "mb-3"], [1, "isax", "isax-close-circle", "fs-20"], ["routerLink", "/courses/certificates/verify", 1, "btn", "btn-outline-primary", "btn-sm"], [1, "isax", "isax-arrow-left-2", "me-1"], [1, "certificate-wrapper"], [1, "text-center", "mb-4", "no-print"], [1, "btn", "btn-primary", "me-2", 3, "click"], [1, "isax", "isax-printer", "me-2"], [1, "certificate-card", "mx-auto"], [1, "cert-top-bar"], [1, "cert-body"], [1, "text-center", "mb-3"], ["src", "assets/img/logo/logo.svg", "alt", "Logo", "onerror", "this.style.display='none'", 1, "cert-logo", "mb-3"], [1, "cert-site-name", "mb-0"], [1, "cert-divider"], [1, "text-center", "my-4"], [1, "cert-title"], [1, "cert-subtitle"], [1, "cert-presented"], [1, "cert-student-name"], [1, "cert-course-label"], [1, "cert-course-title"], [1, "cert-footer", "row", "text-center", "mt-4"], [1, "col-4"], [1, "cert-info-label"], [1, "cert-info-value"], [1, "cert-seal"], [1, "isax", "isax-medal-star", "cert-seal-icon"], [1, "cert-info-value", "cert-code"], [1, "cert-bottom-bar"], [1, "text-center", "mt-4", "no-print"], [1, "text-muted"], [1, "isax", "isax-shield-tick", "me-1"]],
      template: function CertificateViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, CertificateViewComponent_div_0_Template, 2, 0, "div", 0)(1, CertificateViewComponent_div_1_Template, 16, 2, "div", 1)(2, CertificateViewComponent_div_2_Template, 8, 1, "div", 2)(3, CertificateViewComponent_div_3_Template, 50, 5, "div", 3);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.showForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.showForm && ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.certificate);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: [".certificate-wrapper[_ngcontent-%COMP%] {\n  padding: 2rem 1rem 4rem;\n}\n\n.certificate-card[_ngcontent-%COMP%] {\n  max-width: 820px;\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n}\n\n.cert-top-bar[_ngcontent-%COMP%], \n.cert-bottom-bar[_ngcontent-%COMP%] {\n  height: 10px;\n  background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%);\n}\n\n.cert-body[_ngcontent-%COMP%] {\n  padding: 2.5rem 3rem;\n}\n\n.cert-logo[_ngcontent-%COMP%] {\n  height: 52px;\n  object-fit: contain;\n}\n\n.cert-site-name[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #6366f1;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n}\n\n.cert-divider[_ngcontent-%COMP%] {\n  border-color: #e5e7eb;\n  margin: 0.5rem 0;\n}\n\n.cert-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1e293b;\n  letter-spacing: 1px;\n  margin-bottom: 0;\n}\n\n.cert-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #94a3b8;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  margin-bottom: 0;\n}\n\n.cert-presented[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #64748b;\n  margin-bottom: 0.25rem;\n}\n\n.cert-student-name[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  font-weight: 700;\n  color: #6366f1;\n  font-style: italic;\n}\n\n.cert-course-label[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #64748b;\n  margin-bottom: 0.5rem;\n}\n\n.cert-course-title[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 600;\n  color: #1e293b;\n}\n\n.cert-footer[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n}\n\n.cert-info-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #94a3b8;\n  margin-bottom: 0.25rem;\n}\n\n.cert-info-value[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin-bottom: 0;\n}\n\n.cert-code[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 0.8rem;\n  color: #6366f1;\n  word-break: break-all;\n}\n\n.cert-seal[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #6366f1, #8b5cf6);\n  margin: 0 auto;\n  color: #fff;\n}\n\n.cert-seal-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n\n\n@media print {\n  .no-print[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .certificate-wrapper[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .certificate-card[_ngcontent-%COMP%] {\n    border: none;\n    box-shadow: none;\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY291cnNlcy9jZXJ0aWZpY2F0ZS12aWV3L2NlcnRpZmljYXRlLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsWUFBQTtFQUNBLHlFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFEQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQSxpQkFBQTtBQUNBO0VBQ0U7SUFDRSx3QkFBQTtFQUNGO0VBRUE7SUFDRSxVQUFBO0VBQUY7RUFHQTtJQUNFLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7RUFERjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmNlcnRpZmljYXRlLXdyYXBwZXIge1xyXG4gIHBhZGRpbmc6IDJyZW0gMXJlbSA0cmVtO1xyXG59XHJcblxyXG4uY2VydGlmaWNhdGUtY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiA4MjBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4uY2VydC10b3AtYmFyLFxyXG4uY2VydC1ib3R0b20tYmFyIHtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNjM2NmYxIDAlLCAjOGI1Y2Y2IDUwJSwgIzA2YjZkNCAxMDAlKTtcclxufVxyXG5cclxuLmNlcnQtYm9keSB7XHJcbiAgcGFkZGluZzogMi41cmVtIDNyZW07XHJcbn1cclxuXHJcbi5jZXJ0LWxvZ28ge1xyXG4gIGhlaWdodDogNTJweDtcclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG59XHJcblxyXG4uY2VydC1zaXRlLW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjNjM2NmYxO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmNlcnQtZGl2aWRlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZTVlN2ViO1xyXG4gIG1hcmdpbjogMC41cmVtIDA7XHJcbn1cclxuXHJcbi5jZXJ0LXRpdGxlIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzFlMjkzYjtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5jZXJ0LXN1YnRpdGxlIHtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBjb2xvcjogIzk0YTNiODtcclxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmNlcnQtcHJlc2VudGVkIHtcclxuICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgY29sb3I6ICM2NDc0OGI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcclxufVxyXG5cclxuLmNlcnQtc3R1ZGVudC1uYW1lIHtcclxuICBmb250LXNpemU6IDIuMnJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjNjM2NmYxO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLmNlcnQtY291cnNlLWxhYmVsIHtcclxuICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgY29sb3I6ICM2NDc0OGI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4uY2VydC1jb3Vyc2UtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMxZTI5M2I7XHJcbn1cclxuXHJcbi5jZXJ0LWZvb3RlciB7XHJcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxufVxyXG5cclxuLmNlcnQtaW5mby1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBjb2xvcjogIzk0YTNiODtcclxuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xyXG59XHJcblxyXG4uY2VydC1pbmZvLXZhbHVlIHtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMWUyOTNiO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5jZXJ0LWNvZGUge1xyXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgY29sb3I6ICM2MzY2ZjE7XHJcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG59XHJcblxyXG4uY2VydC1zZWFsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDcycHg7XHJcbiAgaGVpZ2h0OiA3MnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjM2NmYxLCAjOGI1Y2Y2KTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmNlcnQtc2VhbC1pY29uIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi8qIFByaW50IHN0eWxlcyAqL1xyXG5AbWVkaWEgcHJpbnQge1xyXG4gIC5uby1wcmludCB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY2VydGlmaWNhdGUtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgLmNlcnRpZmljYXRlLWNhcmQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return CertificateViewComponent;
})();

/***/ })

}]);
//# sourceMappingURL=2931.js.map