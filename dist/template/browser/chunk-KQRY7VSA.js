import {
  CourseService
} from "./chunk-C7JGHRMX.js";
import "./chunk-MFSRU4HL.js";
import {
  routes
} from "./chunk-E6TQA5KL.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-VF2E3YWR.js";
import {
  RouterLink
} from "./chunk-TPKO67I6.js";
import "./chunk-QFZWCWB7.js";
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
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5DE2SIVI.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/features/pages/instructor-list/instructor-list.component.ts
var _c0 = (a0, a1) => [a0, a1];
function InstructorListComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "span", 6);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()()();
  }
}
function InstructorListComponent_div_3_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p", 27);
    \u0275\u0275text(2, "Aucun instructeur trouv\xE9.");
    \u0275\u0275elementEnd()();
  }
}
function InstructorListComponent_div_3_div_21_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 44);
    \u0275\u0275element(2, "i", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const inst_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", inst_r3.avgRating, " (", inst_r3.reviewCount, " avis) ");
  }
}
function InstructorListComponent_div_3_div_21_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r4, " ");
  }
}
function InstructorListComponent_div_3_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "a", 30);
    \u0275\u0275element(3, "img", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 32)(5, "div", 33)(6, "div", 34)(7, "div")(8, "h6", 35)(9, "a", 30);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span", 36);
    \u0275\u0275text(12, "Instructeur");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, InstructorListComponent_div_3_div_21_div_13_Template, 4, 2, "div", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 37)(15, "div", 38)(16, "span", 39)(17, "span", 40);
    \u0275\u0275element(18, "i", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 42);
    \u0275\u0275template(21, InstructorListComponent_div_3_div_21_div_21_Template, 2, 1, "div", 43);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const inst_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(9, _c0, ctx_r1.routes.instructorDetails, inst_r3.id));
    \u0275\u0275advance();
    \u0275\u0275property("alt", \u0275\u0275interpolate(inst_r3.name))("src", ctx_r1.getAvatarUrl(inst_r3.avatar), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(12, _c0, ctx_r1.routes.instructorDetails, inst_r3.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(inst_r3.name);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", inst_r3.avgRating);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", inst_r3.courseCount, " cours ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", inst_r3.categories);
  }
}
function InstructorListComponent_div_3_div_22_li_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 58)(1, "a", 53);
    \u0275\u0275listener("click", function InstructorListComponent_div_3_div_22_li_9_Template_a_click_1_listener() {
      const p_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToPage(p_r7));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", p_r7 === ctx_r1.currentPage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r7);
  }
}
function InstructorListComponent_div_3_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48)(2, "p", 49);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 50)(5, "ul", 51)(6, "li", 52)(7, "a", 53);
    \u0275\u0275listener("click", function InstructorListComponent_div_3_div_22_Template_a_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage - 1));
    });
    \u0275\u0275element(8, "i", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, InstructorListComponent_div_3_div_22_li_9_Template, 3, 3, "li", 55);
    \u0275\u0275elementStart(10, "li", 56)(11, "a", 53);
    \u0275\u0275listener("click", function InstructorListComponent_div_3_div_22_Template_a_click_11_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage + 1));
    });
    \u0275\u0275element(12, "i", 57);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Page ", ctx_r1.currentPage, " sur ", ctx_r1.totalPages);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.getPageRange());
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
function InstructorListComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 7)(2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "div", 11)(6, "div", 12)(7, "h6", 13);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 14)(10, "div", 15)(11, "div", 16)(12, "div", 17)(13, "a", 18);
    \u0275\u0275element(14, "i", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 20);
    \u0275\u0275element(16, "i", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 22);
    \u0275\u0275element(18, "i", 23);
    \u0275\u0275elementStart(19, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorListComponent_div_3_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function InstructorListComponent_div_3_Template_input_input_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applySearch());
    });
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275template(20, InstructorListComponent_div_3_div_20_Template, 3, 0, "div", 2)(21, InstructorListComponent_div_3_div_21_Template, 22, 15, "div", 25)(22, InstructorListComponent_div_3_div_22_Template, 13, 7, "div", 26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r1.filteredInstructors.length, " instructeur(s) trouv\xE9(s)");
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", ctx_r1.routes.instructorGrid);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r1.routes.instructorList);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchTerm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredInstructors.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.paginatedInstructors);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.totalPages > 1);
  }
}
var InstructorListComponent = class _InstructorListComponent {
  courseService;
  routes = routes;
  instructors = [];
  filteredInstructors = [];
  loading = true;
  searchTerm = "";
  // Pagination
  currentPage = 1;
  pageSize = 6;
  get totalPages() {
    return Math.ceil(this.filteredInstructors.length / this.pageSize);
  }
  get paginatedInstructors() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredInstructors.slice(start, start + this.pageSize);
  }
  getPageRange() {
    const total = this.totalPages;
    if (total <= 5)
      return Array.from({ length: total }, (_, i) => i + 1);
    const range = [];
    for (let i = Math.max(2, this.currentPage - 1); i <= Math.min(total - 1, this.currentPage + 1); i++)
      range.push(i);
    return [1, ...range, total];
  }
  goToPage(p) {
    if (p < 1 || p > this.totalPages)
      return;
    this.currentPage = p;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  constructor(courseService) {
    this.courseService = courseService;
  }
  ngOnInit() {
    this.courseService.getPublishedCourses().subscribe({
      next: (courses) => {
        const map = /* @__PURE__ */ new Map();
        for (const c of courses) {
          if (!c.instructorId)
            continue;
          if (!map.has(c.instructorId)) {
            map.set(c.instructorId, {
              id: c.instructorId,
              name: c.instructorName || "Instructeur",
              avatar: c.instructorAvatar,
              courseCount: 0,
              totalRating: 0,
              ratingCount: 0,
              categories: /* @__PURE__ */ new Set()
            });
          }
          const inst = map.get(c.instructorId);
          inst.courseCount++;
          if (c.averageRating) {
            inst.totalRating += c.averageRating;
            inst.ratingCount++;
          }
          if (c.categoryName)
            inst.categories.add(c.categoryName);
        }
        this.instructors = Array.from(map.values()).map((inst) => __spreadProps(__spreadValues({}, inst), {
          avgRating: inst.ratingCount > 0 ? (inst.totalRating / inst.ratingCount).toFixed(1) : null,
          reviewCount: inst.ratingCount,
          categories: Array.from(inst.categories)
        }));
        this.filteredInstructors = [...this.instructors];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  applySearch() {
    const q = this.searchTerm.trim().toLowerCase();
    this.filteredInstructors = q ? this.instructors.filter((i) => i.name.toLowerCase().includes(q)) : [...this.instructors];
    this.currentPage = 1;
  }
  getAvatarUrl(path) {
    if (!path)
      return "assets/img/avatar/avatar10.jpg";
    return `http://localhost:8081/${path}`;
  }
  static \u0275fac = function InstructorListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorListComponent)(\u0275\u0275directiveInject(CourseService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorListComponent, selectors: [["app-instructor-list"]], decls: 4, vars: 2, consts: [[1, "instructor-list"], [1, "container"], ["class", "text-center py-5", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "row", "align-items-baseline"], [1, "col-lg-12"], [1, "showing-list", "mb-4"], [1, "row", "align-items-center"], [1, "col-lg-4"], [1, "show-result", "text-center", "text-lg-start"], [1, "fw-medium"], [1, "col-lg-8"], [1, "show-filter", "add-course-info"], [1, "d-sm-flex", "justify-content-center", "justify-content-lg-end", "mb-1", "mb-lg-0"], [1, "view-icons", "mb-2", "mb-sm-0"], [1, "grid-view", 3, "routerLink"], [1, "feather", "icon-grid"], [1, "list-view", "active", 3, "routerLink"], [1, "isax", "isax-task"], [1, "search-group"], [1, "isax", "isax-search-normal-1"], ["type", "text", "placeholder", "Rechercher un instructeur...", 1, "form-control", 3, "ngModelChange", "input", "ngModel"], ["class", "instructor-item instructor-item-seven", 4, "ngFor", "ngForOf"], ["class", "row align-items-center mt-sm-4 mt-md-5 mt-3", 4, "ngIf"], [1, "text-muted", "fs-16"], [1, "instructor-item", "instructor-item-seven"], [1, "instructor-img"], [3, "routerLink"], [1, "img-fluid", 3, "src", "alt"], [1, "instructor-content", "flex-fill"], [1, "pb-3", "border-bottom", "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-1", "mb-1"], [1, "title"], [1, "designation"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-2"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-y-2", "fs-14", "counts-details"], [1, "d-flex", "align-items-center", "me-4"], [1, "d-flex", "align-items-center"], [1, "isax", "isax-book-saved5", "fs-16", "text-secondary", "me-2"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-1"], ["class", "badge bg-gray-100 text-dark badge-md fs-10 fw-medium rounded", 4, "ngFor", "ngForOf"], [1, "rating"], [1, "fas", "fa-star", "me-1"], [1, "badge", "bg-gray-100", "text-dark", "badge-md", "fs-10", "fw-medium", "rounded"], [1, "row", "align-items-center", "mt-sm-4", "mt-md-5", "mt-3"], [1, "col-md-2"], [1, "pagination-text"], [1, "col-md-10"], [1, "pagination", "lms-page", "justify-content-center", "justify-content-md-end", "mt-2", "mt-md-0"], [1, "page-item", "prev"], ["href", "javascript:void(0)", 1, "page-link", 3, "click"], [1, "fas", "fa-angle-left"], ["class", "page-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "page-item", "next"], [1, "fas", "fa-angle-right"], [1, "page-item"]], template: function InstructorListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275template(2, InstructorListComponent_div_2_Template, 4, 0, "div", 2)(3, InstructorListComponent_div_3_Template, 23, 7, "div", 3);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorListComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-list", imports: [CommonModule, RouterLink, FormsModule], template: '<div class="instructor-list">\n  <div class="container">\n    <!-- Loading -->\n    <div *ngIf="loading" class="text-center py-5">\n      <div class="spinner-border text-primary" role="status">\n        <span class="visually-hidden">Chargement...</span>\n      </div>\n    </div>\n\n    <div *ngIf="!loading">\n      <div class="row align-items-baseline">\n        <div class="col-lg-12">\n          <!-- Filter Bar -->\n          <div class="showing-list mb-4">\n            <div class="row align-items-center">\n              <div class="col-lg-4">\n                <div class="show-result text-center text-lg-start">\n                  <h6 class="fw-medium">{{ filteredInstructors.length }} instructeur(s) trouv\xE9(s)</h6>\n                </div>\n              </div>\n              <div class="col-lg-8">\n                <div class="show-filter add-course-info">\n                  <div class="d-sm-flex justify-content-center justify-content-lg-end mb-1 mb-lg-0">\n                    <div class="view-icons mb-2 mb-sm-0">\n                      <a [routerLink]="routes.instructorGrid" class="grid-view"><i class="feather icon-grid"></i></a>\n                      <a [routerLink]="routes.instructorList" class="list-view active"><i class="isax isax-task"></i></a>\n                    </div>\n                    <div class="search-group">\n                      <i class="isax isax-search-normal-1"></i>\n                      <input type="text" class="form-control" placeholder="Rechercher un instructeur..." [(ngModel)]="searchTerm" (input)="applySearch()">\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- /Filter Bar -->\n\n          <!-- Empty -->\n          <div *ngIf="filteredInstructors.length === 0" class="text-center py-5">\n            <p class="text-muted fs-16">Aucun instructeur trouv\xE9.</p>\n          </div>\n\n          <!-- Instructor List Items -->\n          <div *ngFor="let inst of paginatedInstructors" class="instructor-item instructor-item-seven">\n            <div class="instructor-img">\n              <a [routerLink]="[routes.instructorDetails, inst.id]">\n                <img [src]="getAvatarUrl(inst.avatar)" alt="{{ inst.name }}" class="img-fluid">\n              </a>\n            </div>\n            <div class="instructor-content flex-fill">\n              <div class="pb-3 border-bottom mb-3">\n                <div class="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-1">\n                  <div>\n                    <h6 class="title">\n                      <a [routerLink]="[routes.instructorDetails, inst.id]">{{ inst.name }}</a>\n                    </h6>\n                    <span class="designation">Instructeur</span>\n                  </div>\n                  <div *ngIf="inst.avgRating">\n                    <p class="rating">\n                      <i class="fas fa-star me-1"></i>{{ inst.avgRating }} ({{ inst.reviewCount }} avis)\n                    </p>\n                  </div>\n                </div>\n              </div>\n              <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">\n                <div class="d-flex align-items-center flex-wrap gap-y-2 fs-14 counts-details">\n                  <span class="d-flex align-items-center me-4">\n                    <span class="d-flex align-items-center"><i class="isax isax-book-saved5 fs-16 text-secondary me-2"></i></span>\n                    {{ inst.courseCount }} cours\n                  </span>\n                </div>\n                <div class="d-flex align-items-center flex-wrap gap-1">\n                  <div *ngFor="let cat of inst.categories" class="badge bg-gray-100 text-dark badge-md fs-10 fw-medium rounded">\n                    {{ cat }}\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!-- Pagination -->\n          <div *ngIf="totalPages > 1" class="row align-items-center mt-sm-4 mt-md-5 mt-3">\n            <div class="col-md-2">\n              <p class="pagination-text">Page {{ currentPage }} sur {{ totalPages }}</p>\n            </div>\n            <div class="col-md-10">\n              <ul class="pagination lms-page justify-content-center justify-content-md-end mt-2 mt-md-0">\n                <li class="page-item prev" [class.disabled]="currentPage === 1">\n                  <a class="page-link" href="javascript:void(0)" (click)="goToPage(currentPage - 1)"><i class="fas fa-angle-left"></i></a>\n                </li>\n                <li *ngFor="let p of getPageRange()" class="page-item" [class.active]="p === currentPage">\n                  <a class="page-link" href="javascript:void(0)" (click)="goToPage(p)">{{ p }}</a>\n                </li>\n                <li class="page-item next" [class.disabled]="currentPage === totalPages">\n                  <a class="page-link" href="javascript:void(0)" (click)="goToPage(currentPage + 1)"><i class="fas fa-angle-right"></i></a>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <!-- /Pagination -->\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n' }]
  }], () => [{ type: CourseService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorListComponent, { className: "InstructorListComponent", filePath: "src/app/features/pages/instructor-list/instructor-list.component.ts", lineNumber: 14 });
})();
export {
  InstructorListComponent
};
//# sourceMappingURL=chunk-KQRY7VSA.js.map
