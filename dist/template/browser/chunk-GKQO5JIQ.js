import {
  CertificateService
} from "./chunk-P5ZO2DBO.js";
import "./chunk-MFSRU4HL.js";
import "./chunk-PXFMCAI3.js";
import {
  CommonModule,
  NgForOf,
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
  ɵɵtextInterpolate1
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/student/student-certificate/student-certificate.component.ts
function StudentCertificateComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "i", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 7);
    \u0275\u0275listener("click", function StudentCertificateComponent_div_3_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.successMessage = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.successMessage, " ");
  }
}
function StudentCertificateComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "i", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 7);
    \u0275\u0275listener("click", function StudentCertificateComponent_div_4_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.errorMessage = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.errorMessage, " ");
  }
}
function StudentCertificateComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "div", 11);
    \u0275\u0275elementStart(2, "p", 12);
    \u0275\u0275text(3, "Chargement des certificats...");
    \u0275\u0275elementEnd()();
  }
}
function StudentCertificateComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275elementStart(2, "h5", 14);
    \u0275\u0275text(3, "Aucun certificat pour l'instant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 15);
    \u0275\u0275text(5, "Terminez un cours \xE0 100% pour obtenir votre certificat.");
    \u0275\u0275elementEnd()();
  }
}
function StudentCertificateComponent_div_7_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "code", 21);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "div", 22)(13, "button", 23);
    \u0275\u0275listener("click", function StudentCertificateComponent_div_7_tr_15_Template_button_click_13_listener() {
      const cert_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.downloadCertificate(cert_r5));
    });
    \u0275\u0275element(14, "i", 24);
    \u0275\u0275text(15, "T\xE9l\xE9charger ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const cert_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r6 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cert_r5.courseTitle);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cert_r5.certificateCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(cert_r5.issuedAt));
  }
}
function StudentCertificateComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "table", 17)(2, "thead", 18)(3, "tr")(4, "th");
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Nom du cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Code certificat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Date d'\xE9mission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, StudentCertificateComponent_div_7_tr_15_Template, 16, 4, "tr", 19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r1.certificates);
  }
}
var StudentCertificateComponent = class _StudentCertificateComponent {
  certService;
  certificates = [];
  loading = true;
  errorMessage = "";
  successMessage = "";
  generatingId = null;
  constructor(certService) {
    this.certService = certService;
  }
  ngOnInit() {
    this.loadCertificates();
  }
  loadCertificates() {
    this.loading = true;
    this.certService.getMyCertificates().subscribe({
      next: (data) => {
        this.certificates = data;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = "Erreur lors du chargement des certificats.";
        this.loading = false;
      }
    });
  }
  formatDate(dateStr) {
    if (!dateStr)
      return "-";
    return new Date(dateStr).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  }
  downloadCertificate(cert) {
    const url = `/courses/certificates/verify/${cert.certificateCode}`;
    window.open(url, "_blank");
  }
  static \u0275fac = function StudentCertificateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentCertificateComponent)(\u0275\u0275directiveInject(CertificateService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentCertificateComponent, selectors: [["app-student-certificate"]], decls: 8, vars: 5, consts: [[1, "page-title", "d-flex", "align-items-center", "justify-content-between"], ["class", "alert alert-success alert-dismissible fade show", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["class", "table-responsive custom-table", 4, "ngIf"], [1, "alert", "alert-success", "alert-dismissible", "fade", "show"], [1, "isax", "isax-tick-circle", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], [1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "isax", "isax-close-circle", "me-2"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "mt-2", "text-muted"], [1, "isax", "isax-award", "fa-3x", "text-muted", "mb-3", 2, "font-size", "3rem"], [1, "text-muted", "mt-3"], [1, "text-muted"], [1, "table-responsive", "custom-table"], [1, "table"], [1, "thead-light"], [4, "ngFor", "ngForOf"], [1, "fw-semibold"], [1, "bg-light", "px-2", "py-1", "rounded", "text-primary"], [1, "d-flex", "align-items-center", "gap-1"], ["title", "Voir / T\xE9l\xE9charger", 1, "btn", "btn-sm", "btn-outline-primary", "d-inline-flex", "align-items-center", 3, "click"], [1, "isax", "isax-import", "me-1"]], template: function StudentCertificateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h5");
      \u0275\u0275text(2, "Mes Certificats");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(3, StudentCertificateComponent_div_3_Template, 4, 1, "div", 1)(4, StudentCertificateComponent_div_4_Template, 4, 1, "div", 2)(5, StudentCertificateComponent_div_5_Template, 4, 0, "div", 3)(6, StudentCertificateComponent_div_6_Template, 6, 0, "div", 3)(7, StudentCertificateComponent_div_7_Template, 16, 1, "div", 4);
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.certificates.length === 0 && !ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.certificates.length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentCertificateComponent, [{
    type: Component,
    args: [{ selector: "app-student-certificate", imports: [CommonModule], template: `
    <div class="page-title d-flex align-items-center justify-content-between">
        <h5>Mes Certificats</h5>
    </div>

    <!-- Alertes -->
    <div *ngIf="successMessage" class="alert alert-success alert-dismissible fade show">
        <i class="isax isax-tick-circle me-2"></i>{{ successMessage }}
        <button type="button" class="btn-close" (click)="successMessage = ''"></button>
    </div>
    <div *ngIf="errorMessage" class="alert alert-danger alert-dismissible fade show">
        <i class="isax isax-close-circle me-2"></i>{{ errorMessage }}
        <button type="button" class="btn-close" (click)="errorMessage = ''"></button>
    </div>

    <!-- Chargement -->
    <div *ngIf="loading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status"></div>
        <p class="mt-2 text-muted">Chargement des certificats...</p>
    </div>

    <!-- Aucun certificat -->
    <div *ngIf="!loading && certificates.length === 0 && !errorMessage" class="text-center py-5">
        <i class="isax isax-award fa-3x text-muted mb-3" style="font-size:3rem"></i>
        <h5 class="text-muted mt-3">Aucun certificat pour l'instant</h5>
        <p class="text-muted">Terminez un cours \xE0 100% pour obtenir votre certificat.</p>
    </div>

    <!-- Table des certificats -->
    <div *ngIf="!loading && certificates.length > 0" class="table-responsive custom-table">
        <table class="table">
            <thead class="thead-light">
                <tr>
                    <th>#</th>
                    <th>Nom du cours</th>
                    <th>Code certificat</th>
                    <th>Date d'\xE9mission</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let cert of certificates; let i = index">
                    <td>{{ i + 1 }}</td>
                    <td>
                        <span class="fw-semibold">{{ cert.courseTitle }}</span>
                    </td>
                    <td>
                        <code class="bg-light px-2 py-1 rounded text-primary">{{ cert.certificateCode }}</code>
                    </td>
                    <td>{{ formatDate(cert.issuedAt) }}</td>
                    <td>
                        <div class="d-flex align-items-center gap-1">
                            <button class="btn btn-sm btn-outline-primary d-inline-flex align-items-center"
                                    (click)="downloadCertificate(cert)"
                                    title="Voir / T\xE9l\xE9charger">
                                <i class="isax isax-import me-1"></i>T\xE9l\xE9charger
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
` }]
  }], () => [{ type: CertificateService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentCertificateComponent, { className: "StudentCertificateComponent", filePath: "src/app/features/student/student-certificate/student-certificate.component.ts", lineNumber: 11 });
})();
export {
  StudentCertificateComponent
};
//# sourceMappingURL=chunk-GKQO5JIQ.js.map
