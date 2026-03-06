import {
  CourseService
} from "./chunk-C7JGHRMX.js";
import "./chunk-MFSRU4HL.js";
import {
  routes
} from "./chunk-E6TQA5KL.js";
import {
  Router,
  RouterLink
} from "./chunk-TPKO67I6.js";
import "./chunk-QFZWCWB7.js";
import "./chunk-PXFMCAI3.js";
import {
  CommonModule,
  DecimalPipe,
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/courses/course-cart/course-cart.component.ts
function CourseCartComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "i", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 11);
    \u0275\u0275listener("click", function CourseCartComponent_div_1_Template_button_click_3_listener() {
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
function CourseCartComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 11);
    \u0275\u0275listener("click", function CourseCartComponent_div_2_Template_button_click_3_listener() {
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
function CourseCartComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "div", 15);
    \u0275\u0275elementStart(2, "p", 16);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()();
  }
}
function CourseCartComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "i", 17);
    \u0275\u0275elementStart(2, "h5", 18);
    \u0275\u0275text(3, "Votre panier est vide");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 19);
    \u0275\u0275element(5, "i", 20);
    \u0275\u0275text(6, "Parcourir les cours ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", ctx_r1.routes.courseListPublic);
  }
}
function CourseCartComponent_div_11_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 28)(2, "div", 36)(3, "div", 37);
    \u0275\u0275element(4, "img", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 39)(6, "h6", 40);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 41);
    \u0275\u0275element(9, "i", 42);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 43)(12, "div", 44);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 45);
    \u0275\u0275listener("click", function CourseCartComponent_div_11_div_3_Template_button_click_15_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeFromCart(item_r5.courseId));
    });
    \u0275\u0275element(16, "i", 46);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r1.getImageUrl(item_r5.courseImage), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r5.courseTitle);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r5.instructorName, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(14, 4, item_r5.coursePrice, "1.2-2"), " \u20AC");
  }
}
function CourseCartComponent_div_11_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "span", 48);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 49);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.courseTitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 2, item_r6.coursePrice, "1.2-2"), " \u20AC");
  }
}
function CourseCartComponent_div_11_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 50);
    \u0275\u0275element(2, "i", 51);
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "Connectez-vous");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " pour finaliser votre achat.");
    \u0275\u0275element(6, "br");
    \u0275\u0275text(7, " Vos articles seront conserv\xE9s. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 52);
    \u0275\u0275element(9, "i", 53);
    \u0275\u0275text(10, "Se connecter / S'inscrire ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("routerLink", ctx_r1.routes.login);
  }
}
function CourseCartComponent_div_11_ng_container_20_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 58);
  }
}
function CourseCartComponent_div_11_ng_container_20_div_1_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 59);
  }
}
function CourseCartComponent_div_11_ng_container_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "button", 55);
    \u0275\u0275listener("click", function CourseCartComponent_div_11_ng_container_20_div_1_Template_button_click_1_listener() {
      const item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.checkout(item_r8.courseId));
    });
    \u0275\u0275template(2, CourseCartComponent_div_11_ng_container_20_div_1_span_2_Template, 1, 0, "span", 56)(3, CourseCartComponent_div_11_ng_container_20_div_1_i_3_Template, 1, 0, "i", 57);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.checkingOutId === item_r8.courseId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.checkingOutId === item_r8.courseId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.checkingOutId !== item_r8.courseId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.checkingOutId === item_r8.courseId ? "Redirection..." : "Payer " + \u0275\u0275pipeBind2(5, 4, item_r8.coursePrice, "1.2-2") + " \u20AC", " ");
  }
}
function CourseCartComponent_div_11_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CourseCartComponent_div_11_ng_container_20_div_1_Template, 6, 7, "div", 54);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.items);
  }
}
function CourseCartComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 21)(2, "div", 22);
    \u0275\u0275template(3, CourseCartComponent_div_11_div_3_Template, 17, 7, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 24)(5, "div", 25)(6, "div", 26)(7, "h5", 4);
    \u0275\u0275element(8, "i", 27);
    \u0275\u0275text(9, "R\xE9capitulatif");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 28);
    \u0275\u0275template(11, CourseCartComponent_div_11_div_11_Template, 6, 5, "div", 29);
    \u0275\u0275element(12, "hr");
    \u0275\u0275elementStart(13, "div", 30)(14, "span", 31);
    \u0275\u0275text(15, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 32);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, CourseCartComponent_div_11_ng_container_19_Template, 11, 1, "ng-container", 8)(20, CourseCartComponent_div_11_ng_container_20_Template, 2, 1, "ng-container", 8);
    \u0275\u0275elementStart(21, "p", 33);
    \u0275\u0275element(22, "i", 34);
    \u0275\u0275text(23, " Paiement s\xE9curis\xE9 via Stripe ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.items);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r1.items);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(18, 5, ctx_r1.total, "1.2-2"), " \u20AC");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isGuest);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isGuest);
  }
}
var CourseCartComponent = class _CourseCartComponent {
  courseService;
  router;
  routes = routes;
  items = [];
  loading = true;
  errorMessage = "";
  successMessage = "";
  checkingOutId = null;
  isGuest = false;
  constructor(courseService, router) {
    this.courseService = courseService;
    this.router = router;
  }
  ngOnInit() {
    if (!localStorage.getItem("token")) {
      this.isGuest = true;
      const raw = JSON.parse(localStorage.getItem("guest_cart") || "[]");
      this.items = raw.map((c) => ({
        courseId: c.id,
        courseTitle: c.title,
        courseImage: c.coverImage,
        coursePrice: +(c.effectivePrice ?? c.price ?? 0),
        instructorName: c.instructorName
      }));
      this.loading = false;
    } else {
      const role = localStorage.getItem("role") || "";
      if (!role.includes("STUDENT")) {
        this.items = [];
        this.loading = false;
        this.errorMessage = "Le panier est r\xE9serv\xE9 aux \xE9tudiants.";
        return;
      }
      this.loadCart();
    }
  }
  loadCart() {
    this.loading = true;
    this.courseService.getCart().subscribe({
      next: (data) => {
        this.items = data.map((item) => ({
          courseId: item.courseId,
          courseTitle: item.courseTitle,
          courseImage: item.courseCoverImage,
          coursePrice: +(item.effectivePrice ?? item.originalPrice ?? 0),
          instructorName: item.instructorName
        }));
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = "Erreur lors du chargement du panier";
        this.loading = false;
        console.error(err);
      }
    });
  }
  get total() {
    return this.items.reduce((sum, item) => sum + (item.coursePrice || 0), 0);
  }
  removeFromCart(courseId) {
    if (this.isGuest) {
      const raw = JSON.parse(localStorage.getItem("guest_cart") || "[]");
      const updated = raw.filter((c) => c.id !== courseId);
      localStorage.setItem("guest_cart", JSON.stringify(updated));
      this.items = this.items.filter((i) => i.courseId !== courseId);
      this.showSuccess("Cours retir\xE9 du panier");
      return;
    }
    this.courseService.removeFromCart(courseId).subscribe({
      next: () => {
        this.items = this.items.filter((i) => i.courseId !== courseId);
        this.showSuccess("Cours retir\xE9 du panier");
      },
      error: (err) => this.errorMessage = err.error?.message || "Erreur lors du retrait"
    });
  }
  checkout(courseId) {
    if (!localStorage.getItem("token")) {
      this.router.navigate(["/auth/login"]);
      return;
    }
    this.checkingOutId = courseId;
    this.courseService.createCheckoutSession(courseId).subscribe({
      next: (res) => {
        window.location.href = res.url;
      },
      error: (err) => {
        this.checkingOutId = null;
        this.errorMessage = err.error?.message || err.error?.error || "Erreur lors du paiement";
        setTimeout(() => this.errorMessage = "", 5e3);
      }
    });
  }
  getImageUrl(path) {
    if (!path)
      return "assets/img/course/course-01.jpg";
    const clean = path.startsWith("/") ? path : "/" + path;
    return `http://localhost:8081${clean}`;
  }
  showSuccess(msg) {
    this.successMessage = msg;
    this.errorMessage = "";
    setTimeout(() => this.successMessage = "", 3e3);
  }
  static \u0275fac = function CourseCartComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CourseCartComponent)(\u0275\u0275directiveInject(CourseService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CourseCartComponent, selectors: [["app-course-cart"]], decls: 12, vars: 6, consts: [[1, "page-content"], ["class", "alert alert-success alert-dismissible fade show mb-3", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show mb-3", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "mb-0"], [1, "fa-solid", "fa-cart-shopping", "me-2", "text-primary"], [1, "badge", "bg-secondary", "fs-6"], ["class", "text-center py-5", 4, "ngIf"], [4, "ngIf"], [1, "alert", "alert-success", "alert-dismissible", "fade", "show", "mb-3"], [1, "fa-solid", "fa-check-circle", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], [1, "alert", "alert-danger", "alert-dismissible", "fade", "show", "mb-3"], [1, "fa-solid", "fa-exclamation-circle", "me-2"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "mt-2", "text-muted"], [1, "fa-solid", "fa-cart-shopping", "fa-3x", "text-muted", "mb-3"], [1, "text-muted"], [1, "btn", "btn-primary", "mt-2", 3, "routerLink"], [1, "fa-solid", "fa-search", "me-1"], [1, "row"], [1, "col-lg-8"], ["class", "card mb-3 shadow-sm", 4, "ngFor", "ngForOf"], [1, "col-lg-4"], [1, "card", "shadow-sm"], [1, "card-header", "bg-primary", "text-white"], [1, "fa-solid", "fa-receipt", "me-2"], [1, "card-body"], ["class", "d-flex justify-content-between mb-2", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "fw-bold"], [1, "fw-bold", "fs-5", "text-primary"], [1, "text-muted", "small", "text-center", "mt-2"], [1, "fa-solid", "fa-shield-halved", "me-1", "text-success"], [1, "card", "mb-3", "shadow-sm"], [1, "row", "align-items-center"], [1, "col-md-3"], ["alt", "", 1, "img-fluid", "rounded", 2, "height", "90px", "object-fit", "cover", "width", "100%", 3, "src"], [1, "col-md-7"], [1, "mb-1"], [1, "text-muted", "small", "mb-1"], [1, "fa-solid", "fa-user-tie", "me-1"], [1, "col-md-2", "text-end"], [1, "fw-bold", "text-primary", "mb-2"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "fa-solid", "fa-trash"], [1, "d-flex", "justify-content-between", "mb-2"], [1, "text-muted", "small", "text-truncate", "me-2", 2, "max-width", "180px"], [1, "fw-medium"], [1, "alert", "alert-info", "text-center", "py-3", "mb-2"], [1, "fa-solid", "fa-lock", "me-2"], [1, "btn", "btn-primary", "w-100", "mb-2", 3, "routerLink"], [1, "fa-solid", "fa-right-to-bracket", "me-1"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "w-100", "mb-2", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], ["class", "fa-solid fa-bolt me-1", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "fa-solid", "fa-bolt", "me-1"]], template: function CourseCartComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, CourseCartComponent_div_1_Template, 4, 1, "div", 1)(2, CourseCartComponent_div_2_Template, 4, 1, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "h4", 4);
      \u0275\u0275element(5, "i", 5);
      \u0275\u0275text(6, "Mon Panier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 6);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, CourseCartComponent_div_9_Template, 4, 0, "div", 7)(10, CourseCartComponent_div_10_Template, 7, 1, "div", 7)(11, CourseCartComponent_div_11_Template, 24, 8, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", ctx.items.length, " cours");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.items.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.items.length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CourseCartComponent, [{
    type: Component,
    args: [{ selector: "app-course-cart", imports: [CommonModule, RouterLink], template: `<div class="page-content">

  <!-- Messages -->
  <div *ngIf="successMessage" class="alert alert-success alert-dismissible fade show mb-3">
    <i class="fa-solid fa-check-circle me-2"></i>{{ successMessage }}
    <button type="button" class="btn-close" (click)="successMessage = ''"></button>
  </div>
  <div *ngIf="errorMessage" class="alert alert-danger alert-dismissible fade show mb-3">
    <i class="fa-solid fa-exclamation-circle me-2"></i>{{ errorMessage }}
    <button type="button" class="btn-close" (click)="errorMessage = ''"></button>
  </div>

  <div class="d-flex justify-content-between align-items-center mb-4">
    <h4 class="mb-0"><i class="fa-solid fa-cart-shopping me-2 text-primary"></i>Mon Panier</h4>
    <span class="badge bg-secondary fs-6">{{ items.length }} cours</span>
  </div>

  <!-- Loading -->
  <div *ngIf="loading" class="text-center py-5">
    <div class="spinner-border text-primary" role="status"></div>
    <p class="mt-2 text-muted">Chargement...</p>
  </div>

  <!-- Vide -->
  <div *ngIf="!loading && items.length === 0" class="text-center py-5">
    <i class="fa-solid fa-cart-shopping fa-3x text-muted mb-3"></i>
    <h5 class="text-muted">Votre panier est vide</h5>
    <a [routerLink]="routes.courseListPublic" class="btn btn-primary mt-2">
      <i class="fa-solid fa-search me-1"></i>Parcourir les cours
    </a>
  </div>

  <!-- Contenu du panier -->
  <div *ngIf="!loading && items.length > 0">
    <div class="row">
      <!-- Articles -->
      <div class="col-lg-8">
        <div class="card mb-3 shadow-sm" *ngFor="let item of items">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-md-3">
                <img [src]="getImageUrl(item.courseImage)" class="img-fluid rounded"
                     style="height: 90px; object-fit: cover; width:100%;" alt="">
              </div>
              <div class="col-md-7">
                <h6 class="mb-1">{{ item.courseTitle }}</h6>
                <p class="text-muted small mb-1">
                  <i class="fa-solid fa-user-tie me-1"></i>{{ item.instructorName }}
                </p>
              </div>
              <div class="col-md-2 text-end">
                <div class="fw-bold text-primary mb-2">{{ item.coursePrice | number:'1.2-2' }} \u20AC</div>
                <button class="btn btn-danger btn-sm" (click)="removeFromCart(item.courseId)">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- R\xE9capitulatif -->
      <div class="col-lg-4">
        <div class="card shadow-sm">
          <div class="card-header bg-primary text-white">
            <h5 class="mb-0"><i class="fa-solid fa-receipt me-2"></i>R\xE9capitulatif</h5>
          </div>
          <div class="card-body">
            <div *ngFor="let item of items" class="d-flex justify-content-between mb-2">
              <span class="text-muted small text-truncate me-2" style="max-width:180px;">{{ item.courseTitle }}</span>
              <span class="fw-medium">{{ item.coursePrice | number:'1.2-2' }} \u20AC</span>
            </div>
            <hr>
            <div class="d-flex justify-content-between align-items-center mb-3">
              <span class="fw-bold">Total</span>
              <span class="fw-bold fs-5 text-primary">{{ total | number:'1.2-2' }} \u20AC</span>
            </div>

            <!-- Guest: login to checkout -->
            <ng-container *ngIf="isGuest">
              <div class="alert alert-info text-center py-3 mb-2">
                <i class="fa-solid fa-lock me-2"></i>
                <strong>Connectez-vous</strong> pour finaliser votre achat.<br>
                Vos articles seront conserv\xE9s.
              </div>
              <a [routerLink]="routes.login" class="btn btn-primary w-100 mb-2">
                <i class="fa-solid fa-right-to-bracket me-1"></i>Se connecter / S'inscrire
              </a>
            </ng-container>

            <!-- Logged-in: buy each course separately -->
            <ng-container *ngIf="!isGuest">
              <div *ngFor="let item of items">
                <button class="btn btn-primary w-100 mb-2"
                        (click)="checkout(item.courseId)"
                        [disabled]="checkingOutId === item.courseId">
                  <span *ngIf="checkingOutId === item.courseId"
                        class="spinner-border spinner-border-sm me-1"></span>
                  <i *ngIf="checkingOutId !== item.courseId" class="fa-solid fa-bolt me-1"></i>
                  {{ checkingOutId === item.courseId ? 'Redirection...' : 'Payer ' + (item.coursePrice | number:'1.2-2') + ' \\u20ac' }}
                </button>
              </div>
            </ng-container>

            <p class="text-muted small text-center mt-2">
              <i class="fa-solid fa-shield-halved me-1 text-success"></i>
              Paiement s\xE9curis\xE9 via Stripe
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
` }]
  }], () => [{ type: CourseService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CourseCartComponent, { className: "CourseCartComponent", filePath: "src/app/features/courses/course-cart/course-cart.component.ts", lineNumber: 13 });
})();
export {
  CourseCartComponent
};
//# sourceMappingURL=chunk-YOJOOGAO.js.map
