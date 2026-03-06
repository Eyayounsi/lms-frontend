import {
  environment
} from "./chunk-MFSRU4HL.js";
import {
  routes
} from "./chunk-E6TQA5KL.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-TPKO67I6.js";
import "./chunk-QFZWCWB7.js";
import {
  HttpClient
} from "./chunk-PXFMCAI3.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-YBJXKBE2.js";
import {
  Component,
  forkJoin,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5DE2SIVI.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/features/student/student-my-courses/student-my-courses.component.ts
function StudentMyCoursesComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "i", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 9);
    \u0275\u0275listener("click", function StudentMyCoursesComponent_div_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
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
function StudentMyCoursesComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "i", 11);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Paiement confirm\xE9 !");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Votre cours est maintenant accessible. ");
    \u0275\u0275elementStart(5, "button", 9);
    \u0275\u0275listener("click", function StudentMyCoursesComponent_div_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.paymentConfirmed = false);
    });
    \u0275\u0275elementEnd()();
  }
}
function StudentMyCoursesComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "span", 13);
    \u0275\u0275text(2, " Confirmation du paiement en cours... ");
    \u0275\u0275elementEnd();
  }
}
function StudentMyCoursesComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "div", 15);
    \u0275\u0275elementStart(2, "p", 16);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()();
  }
}
function StudentMyCoursesComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "i", 17);
    \u0275\u0275elementStart(2, "h5", 18);
    \u0275\u0275text(3, "Vous n'avez pas encore achet\xE9 de cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 18);
    \u0275\u0275text(5, "Parcourez notre catalogue pour trouver des cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 19);
    \u0275\u0275element(7, "i", 20);
    \u0275\u0275text(8, "Voir les cours ");
    \u0275\u0275elementEnd()();
  }
}
function StudentMyCoursesComponent_div_8_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 42);
    \u0275\u0275text(2, "Termin\xE9 ");
    \u0275\u0275elementEnd();
  }
}
function StudentMyCoursesComponent_div_8_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const course_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", course_r5.progressPct, "% ");
  }
}
function StudentMyCoursesComponent_div_8_div_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Nouveau");
    \u0275\u0275elementEnd();
  }
}
function StudentMyCoursesComponent_div_8_div_1_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Commencer");
    \u0275\u0275elementEnd();
  }
}
function StudentMyCoursesComponent_div_8_div_1_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Continuer");
    \u0275\u0275elementEnd();
  }
}
function StudentMyCoursesComponent_div_8_div_1_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Revoir");
    \u0275\u0275elementEnd();
  }
}
function StudentMyCoursesComponent_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "div", 25);
    \u0275\u0275element(3, "img", 26);
    \u0275\u0275elementStart(4, "div", 27)(5, "span");
    \u0275\u0275template(6, StudentMyCoursesComponent_div_8_div_1_span_6_Template, 3, 0, "span", 28)(7, StudentMyCoursesComponent_div_8_div_1_span_7_Template, 2, 1, "span", 28)(8, StudentMyCoursesComponent_div_8_div_1_span_8_Template, 2, 0, "span", 28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 29)(10, "h6", 30);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 31);
    \u0275\u0275element(13, "i", 32);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 33);
    \u0275\u0275element(16, "i", 34);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 35)(19, "div", 36)(20, "span", 18);
    \u0275\u0275text(21, "Progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 37);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 38);
    \u0275\u0275element(25, "div", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "button", 40);
    \u0275\u0275listener("click", function StudentMyCoursesComponent_div_8_div_1_Template_button_click_26_listener() {
      const course_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToCourse(course_r5.id));
    });
    \u0275\u0275element(27, "i", 41);
    \u0275\u0275template(28, StudentMyCoursesComponent_div_8_div_1_span_28_Template, 2, 0, "span", 28)(29, StudentMyCoursesComponent_div_8_div_1_span_29_Template, 2, 0, "span", 28)(30, StudentMyCoursesComponent_div_8_div_1_span_30_Template, 2, 0, "span", 28);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const course_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r1.getImageUrl(course_r5.coverImage), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("badge rounded-pill ", ctx_r1.getProgressClass(course_r5.progressPct)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", course_r5.progressPct >= 100);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", course_r5.progressPct > 0 && course_r5.progressPct < 100);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", course_r5.progressPct === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(course_r5.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", course_r5.instructorName, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.getLevelLabel(course_r5.level), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.getProgressLabel(course_r5.progressPct));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("progress-bar ", ctx_r1.getProgressClass(course_r5.progressPct)));
    \u0275\u0275styleProp("width", course_r5.progressPct, "%");
    \u0275\u0275attribute("aria-valuenow", course_r5.progressPct);
    \u0275\u0275advance();
    \u0275\u0275classProp("btn-primary", course_r5.progressPct < 100)("btn-success", course_r5.progressPct >= 100);
    \u0275\u0275advance();
    \u0275\u0275classProp("fa-play", course_r5.progressPct === 0)("fa-rotate-right", course_r5.progressPct > 0 && course_r5.progressPct < 100)("fa-eye", course_r5.progressPct >= 100);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", course_r5.progressPct === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", course_r5.progressPct > 0 && course_r5.progressPct < 100);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", course_r5.progressPct >= 100);
  }
}
function StudentMyCoursesComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, StudentMyCoursesComponent_div_8_div_1_Template, 31, 30, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.courses);
  }
}
var StudentMyCoursesComponent = class _StudentMyCoursesComponent {
  http;
  route;
  router;
  routes = routes;
  courses = [];
  loading = true;
  errorMessage = "";
  confirmingPayment = false;
  paymentConfirmed = false;
  constructor(http, route, router) {
    this.http = http;
    this.route = route;
    this.router = router;
  }
  ngOnInit() {
    const sessionId = this.route.snapshot.queryParamMap.get("session_id");
    if (sessionId) {
      this.confirmingPayment = true;
      this.http.post(`${environment.apiUrl}/payment/confirm`, { sessionId }).subscribe({
        next: () => {
          this.confirmingPayment = false;
          this.paymentConfirmed = true;
          this.loadMyCourses();
        },
        error: () => {
          this.confirmingPayment = false;
          this.loadMyCourses();
        }
      });
    } else {
      this.loadMyCourses();
    }
  }
  loadMyCourses() {
    this.loading = true;
    forkJoin({
      courses: this.http.get(`${environment.apiUrl}/student/my-courses`),
      progress: this.http.get(`${environment.apiUrl}/student/progress/my-courses`)
    }).subscribe({
      next: ({ courses, progress }) => {
        const progressMap = /* @__PURE__ */ new Map();
        progress.forEach((p) => progressMap.set(p.courseId, p.completionPercentage ?? 0));
        this.courses = courses.map((c) => __spreadProps(__spreadValues({}, c), {
          progressPct: progressMap.get(c.id) ?? 0
        }));
        this.loading = false;
      },
      error: (err) => {
        this.http.get(`${environment.apiUrl}/student/my-courses`).subscribe({
          next: (courses) => {
            this.courses = courses.map((c) => __spreadProps(__spreadValues({}, c), { progressPct: 0 }));
            this.loading = false;
          },
          error: () => {
            this.errorMessage = "Erreur lors du chargement de vos cours";
            this.loading = false;
            console.error(err);
          }
        });
      }
    });
  }
  /** Naviguer vers le lecteur de cours */
  goToCourse(courseId) {
    this.router.navigate([this.routes.courseWatch], { queryParams: { courseId } });
  }
  getImageUrl(path) {
    if (!path)
      return "assets/img/course/course-01.jpg";
    const clean = path.startsWith("/") ? path : "/" + path;
    return `http://localhost:8081${clean}`;
  }
  getLevelLabel(level) {
    switch (level) {
      case "BEGINNER":
        return "D\xE9butant";
      case "INTERMEDIATE":
        return "Interm\xE9diaire";
      case "ADVANCED":
        return "Avanc\xE9";
      default:
        return level;
    }
  }
  /** Couleur de la barre de progression */
  getProgressClass(pct) {
    if (pct >= 100)
      return "bg-success";
    if (pct >= 50)
      return "bg-primary";
    if (pct > 0)
      return "bg-warning";
    return "bg-secondary";
  }
  /** Label de statut de progression */
  getProgressLabel(pct) {
    if (pct >= 100)
      return "Termin\xE9";
    if (pct > 0)
      return `${pct}% compl\xE9t\xE9`;
    return "Non commenc\xE9";
  }
  static \u0275fac = function StudentMyCoursesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentMyCoursesComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentMyCoursesComponent, selectors: [["app-student-my-courses"]], decls: 9, vars: 6, consts: [["class", "alert alert-danger alert-dismissible fade show", 4, "ngIf"], ["class", "alert alert-success alert-dismissible fade show", 4, "ngIf"], ["class", "alert alert-info", 4, "ngIf"], [1, "mb-4"], [1, "fa-solid", "fa-graduation-cap", "me-2", "text-primary"], ["class", "text-center py-5", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "fa-solid", "fa-exclamation-circle", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], [1, "alert", "alert-success", "alert-dismissible", "fade", "show"], [1, "fa-solid", "fa-circle-check", "me-2"], [1, "alert", "alert-info"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "mt-2", "text-muted"], [1, "fa-solid", "fa-shopping-bag", "fa-3x", "text-muted", "mb-3"], [1, "text-muted"], ["routerLink", "/courses/course-list-public", 1, "btn", "btn-primary"], [1, "fa-solid", "fa-search", "me-1"], [1, "row"], ["class", "col-md-6 col-lg-4 mb-4", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-lg-4", "mb-4"], [1, "card", "h-100", "course-card", "shadow-sm"], [1, "position-relative"], ["alt", "cover", 1, "card-img-top", 2, "height", "180px", "object-fit", "cover", 3, "src"], [1, "position-absolute", "top-0", "end-0", "p-2"], [4, "ngIf"], [1, "card-body", "d-flex", "flex-column"], [1, "card-title"], [1, "text-muted", "small", "mb-1"], [1, "fa-solid", "fa-user-tie", "me-1"], [1, "text-muted", "small", "mb-3"], [1, "fa-solid", "fa-signal", "me-1"], [1, "mb-3"], [1, "d-flex", "justify-content-between", "small", "mb-1"], [1, "fw-semibold"], [1, "progress", 2, "height", "8px", "border-radius", "4px"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100"], [1, "btn", "mt-auto", "w-100", 3, "click"], [1, "fa-solid", "me-1"], [1, "fa-solid", "fa-check", "me-1"]], template: function StudentMyCoursesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, StudentMyCoursesComponent_div_0_Template, 4, 1, "div", 0)(1, StudentMyCoursesComponent_div_1_Template, 6, 0, "div", 1)(2, StudentMyCoursesComponent_div_2_Template, 3, 0, "div", 2);
      \u0275\u0275elementStart(3, "h4", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275text(5, "Mes Cours Achet\xE9s ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, StudentMyCoursesComponent_div_6_Template, 4, 0, "div", 5)(7, StudentMyCoursesComponent_div_7_Template, 9, 0, "div", 5)(8, StudentMyCoursesComponent_div_8_Template, 2, 1, "div", 6);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.paymentConfirmed);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.confirmingPayment);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.courses.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.courses.length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink], styles: ["\n\n.course-card[_ngcontent-%COMP%] {\n  transition: transform 0.2s, box-shadow 0.2s;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.course-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1) !important;\n}\n.modal.show[_ngcontent-%COMP%] {\n  z-index: 1050;\n}\n.accordion-button[_ngcontent-%COMP%]:not(.collapsed) {\n  background-color: #e7f1ff;\n  color: #0d6efd;\n}\n/*# sourceMappingURL=student-my-courses.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentMyCoursesComponent, [{
    type: Component,
    args: [{ selector: "app-student-my-courses", standalone: true, imports: [CommonModule, RouterLink], template: `<!-- Messages -->\r
        <div *ngIf="errorMessage" class="alert alert-danger alert-dismissible fade show">\r
          <i class="fa-solid fa-exclamation-circle me-2"></i>{{ errorMessage }}\r
          <button type="button" class="btn-close" (click)="errorMessage = ''"></button>\r
        </div>\r
\r
        <!-- Banner paiement confirm\xE9 -->\r
        <div *ngIf="paymentConfirmed" class="alert alert-success alert-dismissible fade show">\r
          <i class="fa-solid fa-circle-check me-2"></i>\r
          <strong>Paiement confirm\xE9 !</strong> Votre cours est maintenant accessible.\r
          <button type="button" class="btn-close" (click)="paymentConfirmed = false"></button>\r
        </div>\r
\r
        <!-- Confirmation en cours -->\r
        <div *ngIf="confirmingPayment" class="alert alert-info">\r
          <span class="spinner-border spinner-border-sm me-2"></span>\r
          Confirmation du paiement en cours...\r
        </div>\r
\r
        <h4 class="mb-4">\r
          <i class="fa-solid fa-graduation-cap me-2 text-primary"></i>Mes Cours Achet\xE9s\r
        </h4>\r
\r
        <!-- Loading -->\r
        <div *ngIf="loading" class="text-center py-5">\r
          <div class="spinner-border text-primary" role="status"></div>\r
          <p class="mt-2 text-muted">Chargement...</p>\r
        </div>\r
\r
        <!-- Aucun cours -->\r
        <div *ngIf="!loading && courses.length === 0" class="text-center py-5">\r
          <i class="fa-solid fa-shopping-bag fa-3x text-muted mb-3"></i>\r
          <h5 class="text-muted">Vous n'avez pas encore achet\xE9 de cours</h5>\r
          <p class="text-muted">Parcourez notre catalogue pour trouver des cours</p>\r
          <a routerLink="/courses/course-list-public" class="btn btn-primary">\r
            <i class="fa-solid fa-search me-1"></i>Voir les cours\r
          </a>\r
        </div>\r
\r
        <!-- Grille des cours -->\r
        <div class="row" *ngIf="!loading && courses.length > 0">\r
          <div class="col-md-6 col-lg-4 mb-4" *ngFor="let course of courses">\r
            <div class="card h-100 course-card shadow-sm">\r
              <!-- Image couverture -->\r
              <div class="position-relative">\r
                <img [src]="getImageUrl(course.coverImage)" class="card-img-top"\r
                     style="height: 180px; object-fit: cover;" alt="cover">\r
                <!-- Badge de progression -->\r
                <div class="position-absolute top-0 end-0 p-2">\r
                  <span class="badge rounded-pill {{ getProgressClass(course.progressPct) }}">\r
                    <span *ngIf="course.progressPct >= 100">\r
                      <i class="fa-solid fa-check me-1"></i>Termin\xE9\r
                    </span>\r
                    <span *ngIf="course.progressPct > 0 && course.progressPct < 100">\r
                      {{ course.progressPct }}%\r
                    </span>\r
                    <span *ngIf="course.progressPct === 0">Nouveau</span>\r
                  </span>\r
                </div>\r
              </div>\r
\r
              <div class="card-body d-flex flex-column">\r
                <h6 class="card-title">{{ course.title }}</h6>\r
                <p class="text-muted small mb-1">\r
                  <i class="fa-solid fa-user-tie me-1"></i>{{ course.instructorName }}\r
                </p>\r
                <p class="text-muted small mb-3">\r
                  <i class="fa-solid fa-signal me-1"></i>{{ getLevelLabel(course.level) }}\r
                </p>\r
\r
                <!-- Barre de progression -->\r
                <div class="mb-3">\r
                  <div class="d-flex justify-content-between small mb-1">\r
                    <span class="text-muted">Progression</span>\r
                    <span class="fw-semibold">{{ getProgressLabel(course.progressPct) }}</span>\r
                  </div>\r
                  <div class="progress" style="height: 8px; border-radius: 4px;">\r
                    <div class="progress-bar {{ getProgressClass(course.progressPct) }}"\r
                         role="progressbar"\r
                         [style.width.%]="course.progressPct"\r
                         [attr.aria-valuenow]="course.progressPct"\r
                         aria-valuemin="0"\r
                         aria-valuemax="100">\r
                    </div>\r
                  </div>\r
                </div>\r
\r
                <!-- Bouton principal -->\r
                <button class="btn mt-auto w-100"\r
                        [class.btn-primary]="course.progressPct < 100"\r
                        [class.btn-success]="course.progressPct >= 100"\r
                        (click)="goToCourse(course.id)">\r
                  <i class="fa-solid me-1"\r
                     [class.fa-play]="course.progressPct === 0"\r
                     [class.fa-rotate-right]="course.progressPct > 0 && course.progressPct < 100"\r
                     [class.fa-eye]="course.progressPct >= 100"></i>\r
                  <span *ngIf="course.progressPct === 0">Commencer</span>\r
                  <span *ngIf="course.progressPct > 0 && course.progressPct < 100">Continuer</span>\r
                  <span *ngIf="course.progressPct >= 100">Revoir</span>\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
`, styles: ["/* src/app/features/student/student-my-courses/student-my-courses.component.scss */\n.course-card {\n  transition: transform 0.2s, box-shadow 0.2s;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.course-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1) !important;\n}\n.modal.show {\n  z-index: 1050;\n}\n.accordion-button:not(.collapsed) {\n  background-color: #e7f1ff;\n  color: #0d6efd;\n}\n/*# sourceMappingURL=student-my-courses.component.css.map */\n"] }]
  }], () => [{ type: HttpClient }, { type: ActivatedRoute }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentMyCoursesComponent, { className: "StudentMyCoursesComponent", filePath: "src/app/features/student/student-my-courses/student-my-courses.component.ts", lineNumber: 16 });
})();
export {
  StudentMyCoursesComponent
};
//# sourceMappingURL=chunk-UVM3U4WS.js.map
