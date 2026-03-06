import {
  CourseService
} from "./chunk-C7JGHRMX.js";
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
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

// src/app/features/student/student-wishlist/student-wishlist.component.ts
function StudentWishlistComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "i", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 11);
    \u0275\u0275listener("click", function StudentWishlistComponent_div_1_Template_button_click_3_listener() {
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
function StudentWishlistComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 11);
    \u0275\u0275listener("click", function StudentWishlistComponent_div_2_Template_button_click_3_listener() {
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
function StudentWishlistComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "div", 15);
    \u0275\u0275elementStart(2, "p", 16);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()();
  }
}
function StudentWishlistComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "i", 17);
    \u0275\u0275elementStart(2, "h5", 18);
    \u0275\u0275text(3, "Votre wishlist est vide");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 18);
    \u0275\u0275text(5, "Parcourez nos cours et ajoutez-en \xE0 votre liste");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 19);
    \u0275\u0275element(7, "i", 20);
    \u0275\u0275text(8, "Parcourir les cours ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", ctx_r1.routes.courseListPublic);
  }
}
function StudentWishlistComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "div", 25);
    \u0275\u0275element(3, "img", 26);
    \u0275\u0275elementStart(4, "button", 27);
    \u0275\u0275listener("click", function StudentWishlistComponent_div_11_div_1_Template_button_click_4_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeFromWishlist(item_r5.courseId));
    });
    \u0275\u0275element(5, "i", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 29)(7, "h6", 30);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 31);
    \u0275\u0275element(10, "i", 32);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 33)(13, "span", 34);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 35)(17, "button", 36);
    \u0275\u0275listener("click", function StudentWishlistComponent_div_11_div_1_Template_button_click_17_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.moveToCart(item_r5.courseId));
    });
    \u0275\u0275element(18, "i", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 38);
    \u0275\u0275listener("click", function StudentWishlistComponent_div_11_div_1_Template_button_click_19_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.buyCourse(item_r5.courseId));
    });
    \u0275\u0275element(20, "i", 39);
    \u0275\u0275text(21, "Acheter ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("alt", \u0275\u0275interpolate(item_r5.courseTitle))("src", ctx_r1.getImageUrl(item_r5.courseImage), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r5.courseTitle);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r5.instructorName, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(15, 6, item_r5.coursePrice, "1.2-2"), " \u20AC");
  }
}
function StudentWishlistComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, StudentWishlistComponent_div_11_div_1_Template, 22, 9, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.items);
  }
}
var StudentWishlistComponent = class _StudentWishlistComponent {
  courseService;
  routes = routes;
  items = [];
  loading = true;
  errorMessage = "";
  successMessage = "";
  constructor(courseService) {
    this.courseService = courseService;
  }
  ngOnInit() {
    this.loadWishlist();
  }
  loadWishlist() {
    this.loading = true;
    this.courseService.getWishlist().subscribe({
      next: (data) => {
        this.items = data;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = "Erreur lors du chargement de la wishlist";
        this.loading = false;
        console.error(err);
      }
    });
  }
  removeFromWishlist(courseId) {
    this.courseService.removeFromWishlist(courseId).subscribe({
      next: () => {
        this.items = this.items.filter((i) => i.courseId !== courseId);
        this.showSuccess("Cours retir\xE9 de la wishlist");
      },
      error: (err) => this.errorMessage = err.error?.message || "Erreur lors du retrait"
    });
  }
  moveToCart(courseId) {
    this.courseService.moveToCart(courseId).subscribe({
      next: () => {
        this.items = this.items.filter((i) => i.courseId !== courseId);
        this.showSuccess("Cours d\xE9plac\xE9 dans le panier !");
      },
      error: (err) => this.errorMessage = err.error?.message || "Erreur lors du d\xE9placement"
    });
  }
  buyCourse(courseId) {
    this.courseService.createCheckoutSession(courseId).subscribe({
      next: (res) => {
        window.location.href = res.url;
      },
      error: (err) => this.errorMessage = err.error?.message || "Erreur lors du paiement"
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
  static \u0275fac = function StudentWishlistComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentWishlistComponent)(\u0275\u0275directiveInject(CourseService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentWishlistComponent, selectors: [["app-student-wishlist"]], decls: 12, vars: 6, consts: [[1, "page-content"], ["class", "alert alert-success alert-dismissible fade show mb-3", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show mb-3", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "mb-0"], [1, "fa-solid", "fa-heart", "me-2", "text-danger"], [1, "badge", "bg-secondary", "fs-6"], ["class", "text-center py-5", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "alert", "alert-success", "alert-dismissible", "fade", "show", "mb-3"], [1, "fa-solid", "fa-check-circle", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], [1, "alert", "alert-danger", "alert-dismissible", "fade", "show", "mb-3"], [1, "fa-solid", "fa-exclamation-circle", "me-2"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-danger"], [1, "mt-2", "text-muted"], [1, "fa-solid", "fa-heart-crack", "fa-3x", "text-muted", "mb-3"], [1, "text-muted"], [1, "btn", "btn-primary", "mt-2", 3, "routerLink"], [1, "fa-solid", "fa-search", "me-1"], [1, "row"], ["class", "col-md-6 col-lg-4 mb-4", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-lg-4", "mb-4"], [1, "card", "h-100", "shadow-sm"], [1, "position-relative"], [1, "card-img-top", 2, "height", "180px", "object-fit", "cover", 3, "src", "alt"], ["title", "Retirer de la wishlist", 1, "btn", "btn-sm", "position-absolute", "top-0", "end-0", "m-2", "rounded-circle", 2, "width", "36px", "height", "36px", "background", "rgba(255,255,255,0.9)", 3, "click"], [1, "fa-solid", "fa-heart", "text-danger"], [1, "card-body", "d-flex", "flex-column"], [1, "card-title", "mb-1"], [1, "text-muted", "small", "mb-1"], [1, "fa-solid", "fa-user-tie", "me-1"], [1, "mt-auto", "pt-3", "border-top", "d-flex", "justify-content-between", "align-items-center"], [1, "fw-bold", "text-primary", "fs-5"], [1, "d-flex", "gap-1"], ["title", "Ajouter au panier", 1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "fa-solid", "fa-cart-plus"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "fa-solid", "fa-bolt", "me-1"]], template: function StudentWishlistComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, StudentWishlistComponent_div_1_Template, 4, 1, "div", 1)(2, StudentWishlistComponent_div_2_Template, 4, 1, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "h4", 4);
      \u0275\u0275element(5, "i", 5);
      \u0275\u0275text(6, "Ma Liste de Souhaits");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 6);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, StudentWishlistComponent_div_9_Template, 4, 0, "div", 7)(10, StudentWishlistComponent_div_10_Template, 9, 1, "div", 7)(11, StudentWishlistComponent_div_11_Template, 2, 1, "div", 8);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentWishlistComponent, [{
    type: Component,
    args: [{ selector: "app-student-wishlist", imports: [CommonModule, RouterLink], template: `<div class="page-content">

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
    <h4 class="mb-0"><i class="fa-solid fa-heart me-2 text-danger"></i>Ma Liste de Souhaits</h4>
    <span class="badge bg-secondary fs-6">{{ items.length }} cours</span>
  </div>

  <!-- Loading -->
  <div *ngIf="loading" class="text-center py-5">
    <div class="spinner-border text-danger" role="status"></div>
    <p class="mt-2 text-muted">Chargement...</p>
  </div>

  <!-- Vide -->
  <div *ngIf="!loading && items.length === 0" class="text-center py-5">
    <i class="fa-solid fa-heart-crack fa-3x text-muted mb-3"></i>
    <h5 class="text-muted">Votre wishlist est vide</h5>
    <p class="text-muted">Parcourez nos cours et ajoutez-en \xE0 votre liste</p>
    <a [routerLink]="routes.courseListPublic" class="btn btn-primary mt-2">
      <i class="fa-solid fa-search me-1"></i>Parcourir les cours
    </a>
  </div>

  <!-- Liste -->
  <div class="row" *ngIf="!loading && items.length > 0">
    <div class="col-md-6 col-lg-4 mb-4" *ngFor="let item of items">
      <div class="card h-100 shadow-sm">
        <!-- Image -->
        <div class="position-relative">
          <img [src]="getImageUrl(item.courseImage)" class="card-img-top"
               style="height: 180px; object-fit: cover;" alt="{{ item.courseTitle }}">
          <button class="btn btn-sm position-absolute top-0 end-0 m-2 rounded-circle"
                  style="width:36px; height:36px; background:rgba(255,255,255,0.9);"
                  title="Retirer de la wishlist"
                  (click)="removeFromWishlist(item.courseId)">
            <i class="fa-solid fa-heart text-danger"></i>
          </button>
        </div>

        <div class="card-body d-flex flex-column">
          <h6 class="card-title mb-1">{{ item.courseTitle }}</h6>
          <p class="text-muted small mb-1">
            <i class="fa-solid fa-user-tie me-1"></i>{{ item.instructorName }}
          </p>
          <div class="mt-auto pt-3 border-top d-flex justify-content-between align-items-center">
            <span class="fw-bold text-primary fs-5">{{ item.coursePrice | number:'1.2-2' }} \u20AC</span>
            <div class="d-flex gap-1">
              <button class="btn btn-outline-secondary btn-sm" title="Ajouter au panier"
                      (click)="moveToCart(item.courseId)">
                <i class="fa-solid fa-cart-plus"></i>
              </button>
              <button class="btn btn-primary btn-sm" (click)="buyCourse(item.courseId)">
                <i class="fa-solid fa-bolt me-1"></i>Acheter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>\r
` }]
  }], () => [{ type: CourseService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentWishlistComponent, { className: "StudentWishlistComponent", filePath: "src/app/features/student/student-wishlist/student-wishlist.component.ts", lineNumber: 13 });
})();
export {
  StudentWishlistComponent
};
//# sourceMappingURL=chunk-QTABYN7M.js.map
