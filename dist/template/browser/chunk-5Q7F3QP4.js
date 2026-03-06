import {
  RecruiterService
} from "./chunk-7FFXSULA.js";
import "./chunk-MFSRU4HL.js";
import {
  routes
} from "./chunk-E6TQA5KL.js";
import {
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/recruiter/recruiter-dashboard/recruiter-dashboard.component.ts
function RecruiterDashboardComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "span", 25);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()()();
  }
}
function RecruiterDashboardComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "i", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.statsError, "\n");
  }
}
function RecruiterDashboardComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "div", 12)(3, "div", 15)(4, "div", 30)(5, "span", 31);
    \u0275\u0275element(6, "i", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "span", 33);
    \u0275\u0275text(9, "Profils Partag\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h4", 34);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(12, "div", 29)(13, "div", 12)(14, "div", 15)(15, "div", 30)(16, "span", 35);
    \u0275\u0275element(17, "i", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div")(19, "span", 33);
    \u0275\u0275text(20, "Total \xC9tudiants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "h4", 34);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(23, "div", 29)(24, "div", 12)(25, "div", 15)(26, "div", 30)(27, "span", 37);
    \u0275\u0275element(28, "i", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div")(30, "span", 33);
    \u0275\u0275text(31, "Offres en Attente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "h4", 34);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(34, "div", 29)(35, "div", 12)(36, "div", 15)(37, "div", 30)(38, "span", 39);
    \u0275\u0275element(39, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div")(41, "span", 33);
    \u0275\u0275text(42, "Entretiens Planifi\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "h4", 34);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.stats.sharedProfiles);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.stats.totalStudents);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.stats.pendingOffers);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.stats.scheduledInterviews);
  }
}
var RecruiterDashboardComponent = class _RecruiterDashboardComponent {
  recruiterService;
  routes = routes;
  // Informations de l'utilisateur connecté
  userName = "";
  userRole = "";
  // Statistiques depuis le backend
  stats = {
    sharedProfiles: 0,
    totalStudents: 0,
    pendingOffers: 0,
    scheduledInterviews: 0
  };
  statsLoading = true;
  statsError = "";
  constructor(recruiterService) {
    this.recruiterService = recruiterService;
  }
  ngOnInit() {
    this.userName = localStorage.getItem("fullName") || "Recruteur";
    this.userRole = localStorage.getItem("role") || "";
    this.loadStats();
  }
  loadStats() {
    this.statsLoading = true;
    this.statsError = "";
    this.recruiterService.getStats().subscribe({
      next: (data) => {
        this.stats = data;
        this.statsLoading = false;
      },
      error: (err) => {
        this.statsError = "Impossible de charger les statistiques.";
        this.statsLoading = false;
        console.error(err);
      }
    });
  }
  static \u0275fac = function RecruiterDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecruiterDashboardComponent)(\u0275\u0275directiveInject(RecruiterService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecruiterDashboardComponent, selectors: [["app-recruiter-dashboard"]], decls: 38, vars: 7, consts: [[1, "row", "mb-4"], [1, "col-12"], [1, "card", "border-0", "bg-success", "text-white"], [1, "card-body", "d-flex", "align-items-center", "gap-3", "py-3"], [1, "icon-box", "bg-white", "bg-opacity-25", "flex-shrink-0"], [1, "ti", "ti-briefcase", "fs-20", "text-white"], [1, "mb-0", "text-white"], [1, "badge", "bg-white", "text-success", "mt-1"], ["class", "text-center py-4", 4, "ngIf"], ["class", "alert alert-warning", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "row", "mt-2"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "row", "g-3"], [1, "col-md-6"], [1, "text-decoration-none", 3, "routerLink"], [1, "border", "rounded", "p-3", "text-center", "hover-action"], [1, "ti", "ti-users", "fs-30", "text-success", "d-block", "mb-2"], [1, "text-muted", "small", "mb-0"], [1, "ti", "ti-settings", "fs-30", "text-primary", "d-block", "mb-2"], [1, "text-center", "py-4"], ["role", "status", 1, "spinner-border", "text-success"], [1, "visually-hidden"], [1, "alert", "alert-warning"], [1, "ti", "ti-alert-circle", "me-2"], [1, "row"], [1, "col-md-6", "col-xl-3"], [1, "d-flex", "align-items-center"], [1, "icon-box", "bg-primary-transparent", "me-2", "me-xxl-3", "flex-shrink-0"], [1, "ti", "ti-users", "fs-20", "text-primary"], [1, "d-block"], [1, "fs-24", "mt-1"], [1, "icon-box", "bg-secondary-transparent", "me-2", "me-xxl-3", "flex-shrink-0"], [1, "ti", "ti-school", "fs-20", "text-secondary"], [1, "icon-box", "bg-warning-transparent", "me-2", "me-xxl-3", "flex-shrink-0"], [1, "ti", "ti-file-text", "fs-20", "text-warning"], [1, "icon-box", "bg-info-transparent", "me-2", "me-xxl-3", "flex-shrink-0"], [1, "ti", "ti-calendar-event", "fs-20", "text-info"]], template: function RecruiterDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
      \u0275\u0275element(5, "i", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div")(7, "h5", 6);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 7);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275template(11, RecruiterDashboardComponent_div_11_Template, 4, 0, "div", 8)(12, RecruiterDashboardComponent_div_12_Template, 3, 1, "div", 9)(13, RecruiterDashboardComponent_div_13_Template, 45, 4, "div", 10);
      \u0275\u0275elementStart(14, "div", 11)(15, "div", 1)(16, "div", 12)(17, "div", 13)(18, "h5", 14);
      \u0275\u0275text(19, "Actions Rapides");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 15)(21, "div", 16)(22, "div", 17)(23, "a", 18)(24, "div", 19);
      \u0275\u0275element(25, "i", 20);
      \u0275\u0275elementStart(26, "h6");
      \u0275\u0275text(27, "Voir les Profils \xC9tudiants");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "p", 21);
      \u0275\u0275text(29, "Consulter les profils partag\xE9s par les \xE9tudiants");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(30, "div", 17)(31, "a", 18)(32, "div", 19);
      \u0275\u0275element(33, "i", 22);
      \u0275\u0275elementStart(34, "h6");
      \u0275\u0275text(35, "Mon Profil");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "p", 21);
      \u0275\u0275text(37, "Modifier mes informations de recruteur");
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("Bienvenue, ", ctx.userName, " !");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.userRole);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.statsLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.statsError && !ctx.statsLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.statsLoading);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.recruiter_shared_profiles);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.recruiterSettings);
    }
  }, dependencies: [CommonModule, NgIf, RouterLink], styles: ["\n\n.hover-action[_ngcontent-%COMP%] {\n  transition:\n    box-shadow 0.2s ease,\n    transform 0.2s ease,\n    border-color 0.2s ease;\n}\n.hover-action[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  transform: translateY(-2px);\n  border-color: #198754 !important;\n}\n/*# sourceMappingURL=recruiter-dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecruiterDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-recruiter-dashboard", imports: [CommonModule, RouterLink], template: '<!-- Banni\xE8re de bienvenue Recruteur -->\r\n<div class="row mb-4">\r\n    <div class="col-12">\r\n        <div class="card border-0 bg-success text-white">\r\n            <div class="card-body d-flex align-items-center gap-3 py-3">\r\n                <span class="icon-box bg-white bg-opacity-25 flex-shrink-0">\r\n                    <i class="ti ti-briefcase fs-20 text-white"></i>\r\n                </span>\r\n                <div>\r\n                    <h5 class="mb-0 text-white">Bienvenue, {{ userName }} !</h5>\r\n                    <span class="badge bg-white text-success mt-1">{{ userRole }}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Chargement statistiques -->\r\n<div *ngIf="statsLoading" class="text-center py-4">\r\n    <div class="spinner-border text-success" role="status">\r\n        <span class="visually-hidden">Chargement...</span>\r\n    </div>\r\n</div>\r\n\r\n<!-- Erreur statistiques -->\r\n<div *ngIf="statsError && !statsLoading" class="alert alert-warning">\r\n    <i class="ti ti-alert-circle me-2"></i>{{ statsError }}\r\n</div>\r\n\r\n<!-- Statistiques Recruteur (depuis le backend) -->\r\n<div class="row" *ngIf="!statsLoading">\r\n    <div class="col-md-6 col-xl-3">\r\n        <div class="card">\r\n            <div class="card-body">\r\n                <div class="d-flex align-items-center">\r\n                    <span class="icon-box bg-primary-transparent me-2 me-xxl-3 flex-shrink-0">\r\n                        <i class="ti ti-users fs-20 text-primary"></i>\r\n                    </span>\r\n                    <div>\r\n                        <span class="d-block">Profils Partag\xE9s</span>\r\n                        <h4 class="fs-24 mt-1">{{ stats.sharedProfiles }}</h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="col-md-6 col-xl-3">\r\n        <div class="card">\r\n            <div class="card-body">\r\n                <div class="d-flex align-items-center">\r\n                    <span class="icon-box bg-secondary-transparent me-2 me-xxl-3 flex-shrink-0">\r\n                        <i class="ti ti-school fs-20 text-secondary"></i>\r\n                    </span>\r\n                    <div>\r\n                        <span class="d-block">Total \xC9tudiants</span>\r\n                        <h4 class="fs-24 mt-1">{{ stats.totalStudents }}</h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="col-md-6 col-xl-3">\r\n        <div class="card">\r\n            <div class="card-body">\r\n                <div class="d-flex align-items-center">\r\n                    <span class="icon-box bg-warning-transparent me-2 me-xxl-3 flex-shrink-0">\r\n                        <i class="ti ti-file-text fs-20 text-warning"></i>\r\n                    </span>\r\n                    <div>\r\n                        <span class="d-block">Offres en Attente</span>\r\n                        <h4 class="fs-24 mt-1">{{ stats.pendingOffers }}</h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="col-md-6 col-xl-3">\r\n        <div class="card">\r\n            <div class="card-body">\r\n                <div class="d-flex align-items-center">\r\n                    <span class="icon-box bg-info-transparent me-2 me-xxl-3 flex-shrink-0">\r\n                        <i class="ti ti-calendar-event fs-20 text-info"></i>\r\n                    </span>\r\n                    <div>\r\n                        <span class="d-block">Entretiens Planifi\xE9s</span>\r\n                        <h4 class="fs-24 mt-1">{{ stats.scheduledInterviews }}</h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Actions rapides Recruteur -->\r\n<div class="row mt-2">\r\n    <div class="col-12">\r\n        <div class="card">\r\n            <div class="card-header">\r\n                <h5 class="card-title">Actions Rapides</h5>\r\n            </div>\r\n            <div class="card-body">\r\n                <div class="row g-3">\r\n                    <div class="col-md-6">\r\n                        <a [routerLink]="routes.recruiter_shared_profiles" class="text-decoration-none">\r\n                            <div class="border rounded p-3 text-center hover-action">\r\n                                <i class="ti ti-users fs-30 text-success d-block mb-2"></i>\r\n                                <h6>Voir les Profils \xC9tudiants</h6>\r\n                                <p class="text-muted small mb-0">Consulter les profils partag\xE9s par les \xE9tudiants</p>\r\n                            </div>\r\n                        </a>\r\n                    </div>\r\n                    <div class="col-md-6">\r\n                        <a [routerLink]="routes.recruiterSettings" class="text-decoration-none">\r\n                            <div class="border rounded p-3 text-center hover-action">\r\n                                <i class="ti ti-settings fs-30 text-primary d-block mb-2"></i>\r\n                                <h6>Mon Profil</h6>\r\n                                <p class="text-muted small mb-0">Modifier mes informations de recruteur</p>\r\n                            </div>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n', styles: ["/* src/app/features/recruiter/recruiter-dashboard/recruiter-dashboard.component.scss */\n.hover-action {\n  transition:\n    box-shadow 0.2s ease,\n    transform 0.2s ease,\n    border-color 0.2s ease;\n}\n.hover-action:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  transform: translateY(-2px);\n  border-color: #198754 !important;\n}\n/*# sourceMappingURL=recruiter-dashboard.component.css.map */\n"] }]
  }], () => [{ type: RecruiterService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecruiterDashboardComponent, { className: "RecruiterDashboardComponent", filePath: "src/app/features/recruiter/recruiter-dashboard/recruiter-dashboard.component.ts", lineNumber: 13 });
})();
export {
  RecruiterDashboardComponent
};
//# sourceMappingURL=chunk-5Q7F3QP4.js.map
