import {
  CertificateService
} from "./chunk-P5ZO2DBO.js";
import "./chunk-MFSRU4HL.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-VF2E3YWR.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-TPKO67I6.js";
import "./chunk-QFZWCWB7.js";
import "./chunk-PXFMCAI3.js";
import {
  CommonModule,
  NgIf
} from "./chunk-YBJXKBE2.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/courses/certificate-view/certificate-view.component.ts
function CertificateViewComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 5);
    \u0275\u0275elementEnd();
  }
}
function CertificateViewComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "span", 11);
    \u0275\u0275element(6, "i", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "h4", 13);
    \u0275\u0275text(8, "V\xE9rifier un certificat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 14);
    \u0275\u0275text(10, "Saisissez le code de v\xE9rification figurant sur le certificat pour confirmer son authenticit\xE9.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 15)(12, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function CertificateViewComponent_div_1_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.inputCode, $event) || (ctx_r1.inputCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function CertificateViewComponent_div_1_Template_input_keyup_enter_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.verifyCode());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 17);
    \u0275\u0275listener("click", function CertificateViewComponent_div_1_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.verifyCode());
    });
    \u0275\u0275element(14, "i", 18);
    \u0275\u0275text(15, "V\xE9rifier ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.inputCode);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.inputCode.trim());
  }
}
function CertificateViewComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275element(2, "i", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "a", 22);
    \u0275\u0275element(6, "i", 23);
    \u0275\u0275text(7, "R\xE9essayer ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function CertificateViewComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "button", 26);
    \u0275\u0275listener("click", function CertificateViewComponent_div_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.print());
    });
    \u0275\u0275element(3, "i", 27);
    \u0275\u0275text(4, "Imprimer / T\xE9l\xE9charger PDF ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 28);
    \u0275\u0275element(6, "div", 29);
    \u0275\u0275elementStart(7, "div", 30)(8, "div", 31);
    \u0275\u0275element(9, "img", 32);
    \u0275\u0275elementStart(10, "p", 33);
    \u0275\u0275text(11, "EduLearn Platform");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "hr", 34);
    \u0275\u0275elementStart(13, "div", 35)(14, "h1", 36);
    \u0275\u0275text(15, "Certificat d'Ach\xE8vement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 37);
    \u0275\u0275text(17, "Certificate of Completion");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 35)(19, "p", 38);
    \u0275\u0275text(20, "Pr\xE9sent\xE9 \xE0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "h2", 39);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 35)(24, "p", 40);
    \u0275\u0275text(25, "pour avoir compl\xE9t\xE9 avec succ\xE8s le cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "h3", 41);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(28, "hr", 34);
    \u0275\u0275elementStart(29, "div", 42)(30, "div", 43)(31, "p", 44);
    \u0275\u0275text(32, "Date d'\xE9mission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p", 45);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 43)(36, "div", 46);
    \u0275\u0275element(37, "i", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 43)(39, "p", 44);
    \u0275\u0275text(40, "Code de v\xE9rification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "p", 48);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(43, "div", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 50)(45, "small", 51);
    \u0275\u0275element(46, "i", 52);
    \u0275\u0275text(47, " Ce certificat est authentique. Code : ");
    \u0275\u0275elementStart(48, "strong");
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(22);
    \u0275\u0275textInterpolate(ctx_r1.certificate.studentName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\xAB ", ctx_r1.certificate.courseTitle, " \xBB");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.certificate.issuedAt));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.certificate.certificateCode);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.certificate.certificateCode);
  }
}
var CertificateViewComponent = class _CertificateViewComponent {
  route;
  router;
  certService;
  certificate = null;
  loading = true;
  errorMessage = "";
  /** Mode formulaire : aucun code dans l'URL → on affiche le champ de saisie */
  showForm = false;
  inputCode = "";
  constructor(route, router, certService) {
    this.route = route;
    this.router = router;
    this.certService = certService;
  }
  ngOnInit() {
    const code = this.route.snapshot.paramMap.get("code");
    if (code) {
      this.loading = true;
      this.certService.verifyByCode(code).subscribe({
        next: (cert) => {
          this.certificate = cert;
          this.loading = false;
        },
        error: () => {
          this.errorMessage = "Certificat introuvable ou code invalide.";
          this.loading = false;
        }
      });
    } else {
      this.showForm = true;
      this.loading = false;
    }
  }
  /** Navigue vers la page de vérification avec le code saisi */
  verifyCode() {
    const code = this.inputCode.trim();
    if (!code)
      return;
    this.router.navigate(["/courses/certificates/verify", code]);
  }
  formatDate(dateStr) {
    if (!dateStr)
      return "-";
    return new Date(dateStr).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    });
  }
  print() {
    window.print();
  }
  static \u0275fac = function CertificateViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CertificateViewComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(CertificateService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CertificateViewComponent, selectors: [["app-certificate-view"]], decls: 4, vars: 4, consts: [["class", "d-flex justify-content-center align-items-center", "style", "min-height:300px;", 4, "ngIf"], ["class", "container py-5", 4, "ngIf"], ["class", "container py-5 text-center", 4, "ngIf"], ["class", "certificate-wrapper", 4, "ngIf"], [1, "d-flex", "justify-content-center", "align-items-center", 2, "min-height", "300px"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "container", "py-5"], [1, "row", "justify-content-center"], [1, "col-md-6", "col-lg-5"], [1, "card", "shadow-sm", "border-0", "rounded-4", "p-4", "text-center"], [1, "mb-3"], [1, "d-inline-flex", "align-items-center", "justify-content-center", "rounded-circle", "bg-primary", "bg-opacity-10", 2, "width", "72px", "height", "72px"], [1, "isax", "isax-shield-tick", "text-primary", 2, "font-size", "2rem"], [1, "fw-bold", "mb-1"], [1, "text-muted", "mb-4"], [1, "input-group", "mb-3"], ["type", "text", "placeholder", "Ex : CERT-XXXXXXXXXXXXXXXX", "autofocus", "", 1, "form-control", "form-control-lg", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "btn", "btn-primary", "btn-lg", "w-100", 3, "click", "disabled"], [1, "isax", "isax-search-normal", "me-2"], [1, "container", "py-5", "text-center"], [1, "alert", "alert-danger", "d-inline-flex", "align-items-center", "gap-2", "px-4", "py-3", "mb-3"], [1, "isax", "isax-close-circle", "fs-20"], ["routerLink", "/courses/certificates/verify", 1, "btn", "btn-outline-primary", "btn-sm"], [1, "isax", "isax-arrow-left-2", "me-1"], [1, "certificate-wrapper"], [1, "text-center", "mb-4", "no-print"], [1, "btn", "btn-primary", "me-2", 3, "click"], [1, "isax", "isax-printer", "me-2"], [1, "certificate-card", "mx-auto"], [1, "cert-top-bar"], [1, "cert-body"], [1, "text-center", "mb-3"], ["src", "assets/img/logo/logo.svg", "alt", "Logo", "onerror", "this.style.display='none'", 1, "cert-logo", "mb-3"], [1, "cert-site-name", "mb-0"], [1, "cert-divider"], [1, "text-center", "my-4"], [1, "cert-title"], [1, "cert-subtitle"], [1, "cert-presented"], [1, "cert-student-name"], [1, "cert-course-label"], [1, "cert-course-title"], [1, "cert-footer", "row", "text-center", "mt-4"], [1, "col-4"], [1, "cert-info-label"], [1, "cert-info-value"], [1, "cert-seal"], [1, "isax", "isax-medal-star", "cert-seal-icon"], [1, "cert-info-value", "cert-code"], [1, "cert-bottom-bar"], [1, "text-center", "mt-4", "no-print"], [1, "text-muted"], [1, "isax", "isax-shield-tick", "me-1"]], template: function CertificateViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CertificateViewComponent_div_0_Template, 2, 0, "div", 0)(1, CertificateViewComponent_div_1_Template, 16, 2, "div", 1)(2, CertificateViewComponent_div_2_Template, 8, 1, "div", 2)(3, CertificateViewComponent_div_3_Template, 50, 5, "div", 3);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.showForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.showForm && ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.certificate);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink], styles: ["\n\n.certificate-wrapper[_ngcontent-%COMP%] {\n  padding: 2rem 1rem 4rem;\n}\n.certificate-card[_ngcontent-%COMP%] {\n  max-width: 820px;\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n}\n.cert-top-bar[_ngcontent-%COMP%], \n.cert-bottom-bar[_ngcontent-%COMP%] {\n  height: 10px;\n  background:\n    linear-gradient(\n      90deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #06b6d4 100%);\n}\n.cert-body[_ngcontent-%COMP%] {\n  padding: 2.5rem 3rem;\n}\n.cert-logo[_ngcontent-%COMP%] {\n  height: 52px;\n  object-fit: contain;\n}\n.cert-site-name[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #6366f1;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n}\n.cert-divider[_ngcontent-%COMP%] {\n  border-color: #e5e7eb;\n  margin: 0.5rem 0;\n}\n.cert-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1e293b;\n  letter-spacing: 1px;\n  margin-bottom: 0;\n}\n.cert-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #94a3b8;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  margin-bottom: 0;\n}\n.cert-presented[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #64748b;\n  margin-bottom: 0.25rem;\n}\n.cert-student-name[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  font-weight: 700;\n  color: #6366f1;\n  font-style: italic;\n}\n.cert-course-label[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #64748b;\n  margin-bottom: 0.5rem;\n}\n.cert-course-title[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 600;\n  color: #1e293b;\n}\n.cert-footer[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n}\n.cert-info-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #94a3b8;\n  margin-bottom: 0.25rem;\n}\n.cert-info-value[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin-bottom: 0;\n}\n.cert-code[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 0.8rem;\n  color: #6366f1;\n  word-break: break-all;\n}\n.cert-seal[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  margin: 0 auto;\n  color: #fff;\n}\n.cert-seal-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n@media print {\n  .no-print[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .certificate-wrapper[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .certificate-card[_ngcontent-%COMP%] {\n    border: none;\n    box-shadow: none;\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=certificate-view.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CertificateViewComponent, [{
    type: Component,
    args: [{ selector: "app-certificate-view", standalone: true, imports: [CommonModule, FormsModule, RouterLink], template: `<!-- Loading -->\r
<div *ngIf="loading" class="d-flex justify-content-center align-items-center" style="min-height:300px;">\r
  <div class="spinner-border text-primary" role="status"></div>\r
</div>\r
\r
<!-- \u2500\u2500\u2500 FORMULAIRE DE RECHERCHE (pas de code dans l'URL) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
<div *ngIf="!loading && showForm" class="container py-5">\r
  <div class="row justify-content-center">\r
    <div class="col-md-6 col-lg-5">\r
      <div class="card shadow-sm border-0 rounded-4 p-4 text-center">\r
        <!-- Icon -->\r
        <div class="mb-3">\r
          <span class="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10"\r
                style="width:72px;height:72px;">\r
            <i class="isax isax-shield-tick text-primary" style="font-size:2rem;"></i>\r
          </span>\r
        </div>\r
        <h4 class="fw-bold mb-1">V\xE9rifier un certificat</h4>\r
        <p class="text-muted mb-4">Saisissez le code de v\xE9rification figurant sur le certificat pour confirmer son authenticit\xE9.</p>\r
\r
        <div class="input-group mb-3">\r
          <input\r
            type="text"\r
            class="form-control form-control-lg"\r
            placeholder="Ex : CERT-XXXXXXXXXXXXXXXX"\r
            [(ngModel)]="inputCode"\r
            (keyup.enter)="verifyCode()"\r
            autofocus\r
          />\r
        </div>\r
        <button\r
          class="btn btn-primary btn-lg w-100"\r
          (click)="verifyCode()"\r
          [disabled]="!inputCode.trim()">\r
          <i class="isax isax-search-normal me-2"></i>V\xE9rifier\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Error -->\r
<div *ngIf="!loading && !showForm && errorMessage" class="container py-5 text-center">\r
  <div class="alert alert-danger d-inline-flex align-items-center gap-2 px-4 py-3 mb-3">\r
    <i class="isax isax-close-circle fs-20"></i>\r
    {{ errorMessage }}\r
  </div>\r
  <div>\r
    <a routerLink="/courses/certificates/verify" class="btn btn-outline-primary btn-sm">\r
      <i class="isax isax-arrow-left-2 me-1"></i>R\xE9essayer\r
    </a>\r
  </div>\r
</div>\r
\r
<!-- Certificate -->\r
<div *ngIf="!loading && certificate" class="certificate-wrapper">\r
\r
  <!-- Print button (hidden on print) -->\r
  <div class="text-center mb-4 no-print">\r
    <button class="btn btn-primary me-2" (click)="print()">\r
      <i class="isax isax-printer me-2"></i>Imprimer / T\xE9l\xE9charger PDF\r
    </button>\r
  </div>\r
\r
  <!-- Certificate card -->\r
  <div class="certificate-card mx-auto">\r
\r
    <!-- Top border accent -->\r
    <div class="cert-top-bar"></div>\r
\r
    <div class="cert-body">\r
\r
      <!-- Logo & header -->\r
      <div class="text-center mb-3">\r
        <img src="assets/img/logo/logo.svg" alt="Logo" class="cert-logo mb-3" onerror="this.style.display='none'">\r
        <p class="cert-site-name mb-0">EduLearn Platform</p>\r
      </div>\r
\r
      <hr class="cert-divider">\r
\r
      <!-- Title -->\r
      <div class="text-center my-4">\r
        <h1 class="cert-title">Certificat d'Ach\xE8vement</h1>\r
        <p class="cert-subtitle">Certificate of Completion</p>\r
      </div>\r
\r
      <!-- Body text -->\r
      <div class="text-center my-4">\r
        <p class="cert-presented">Pr\xE9sent\xE9 \xE0</p>\r
        <h2 class="cert-student-name">{{ certificate.studentName }}</h2>\r
      </div>\r
\r
      <div class="text-center my-4">\r
        <p class="cert-course-label">pour avoir compl\xE9t\xE9 avec succ\xE8s le cours</p>\r
        <h3 class="cert-course-title">\xAB {{ certificate.courseTitle }} \xBB</h3>\r
      </div>\r
\r
      <hr class="cert-divider">\r
\r
      <!-- Footer info -->\r
      <div class="cert-footer row text-center mt-4">\r
        <div class="col-4">\r
          <p class="cert-info-label">Date d'\xE9mission</p>\r
          <p class="cert-info-value">{{ formatDate(certificate.issuedAt) }}</p>\r
        </div>\r
        <div class="col-4">\r
          <div class="cert-seal">\r
            <i class="isax isax-medal-star cert-seal-icon"></i>\r
          </div>\r
        </div>\r
        <div class="col-4">\r
          <p class="cert-info-label">Code de v\xE9rification</p>\r
          <p class="cert-info-value cert-code">{{ certificate.certificateCode }}</p>\r
        </div>\r
      </div>\r
\r
    </div><!-- /cert-body -->\r
\r
    <!-- Bottom border accent -->\r
    <div class="cert-bottom-bar"></div>\r
\r
  </div><!-- /certificate-card -->\r
\r
  <!-- Validity info (hidden on print) -->\r
  <div class="text-center mt-4 no-print">\r
    <small class="text-muted">\r
      <i class="isax isax-shield-tick me-1"></i>\r
      Ce certificat est authentique. Code : <strong>{{ certificate.certificateCode }}</strong>\r
    </small>\r
  </div>\r
\r
</div>\r
`, styles: ["/* src/app/features/courses/certificate-view/certificate-view.component.scss */\n.certificate-wrapper {\n  padding: 2rem 1rem 4rem;\n}\n.certificate-card {\n  max-width: 820px;\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n}\n.cert-top-bar,\n.cert-bottom-bar {\n  height: 10px;\n  background:\n    linear-gradient(\n      90deg,\n      #6366f1 0%,\n      #8b5cf6 50%,\n      #06b6d4 100%);\n}\n.cert-body {\n  padding: 2.5rem 3rem;\n}\n.cert-logo {\n  height: 52px;\n  object-fit: contain;\n}\n.cert-site-name {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #6366f1;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n}\n.cert-divider {\n  border-color: #e5e7eb;\n  margin: 0.5rem 0;\n}\n.cert-title {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1e293b;\n  letter-spacing: 1px;\n  margin-bottom: 0;\n}\n.cert-subtitle {\n  font-size: 0.9rem;\n  color: #94a3b8;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  margin-bottom: 0;\n}\n.cert-presented {\n  font-size: 0.95rem;\n  color: #64748b;\n  margin-bottom: 0.25rem;\n}\n.cert-student-name {\n  font-size: 2.2rem;\n  font-weight: 700;\n  color: #6366f1;\n  font-style: italic;\n}\n.cert-course-label {\n  font-size: 0.95rem;\n  color: #64748b;\n  margin-bottom: 0.5rem;\n}\n.cert-course-title {\n  font-size: 1.4rem;\n  font-weight: 600;\n  color: #1e293b;\n}\n.cert-footer {\n  padding-top: 0.5rem;\n}\n.cert-info-label {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #94a3b8;\n  margin-bottom: 0.25rem;\n}\n.cert-info-value {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin-bottom: 0;\n}\n.cert-code {\n  font-family: monospace;\n  font-size: 0.8rem;\n  color: #6366f1;\n  word-break: break-all;\n}\n.cert-seal {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  margin: 0 auto;\n  color: #fff;\n}\n.cert-seal-icon {\n  font-size: 2rem;\n}\n@media print {\n  .no-print {\n    display: none !important;\n  }\n  .certificate-wrapper {\n    padding: 0;\n  }\n  .certificate-card {\n    border: none;\n    box-shadow: none;\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=certificate-view.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: CertificateService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CertificateViewComponent, { className: "CertificateViewComponent", filePath: "src/app/features/courses/certificate-view/certificate-view.component.ts", lineNumber: 14 });
})();
export {
  CertificateViewComponent
};
//# sourceMappingURL=chunk-T3EBYHRV.js.map
