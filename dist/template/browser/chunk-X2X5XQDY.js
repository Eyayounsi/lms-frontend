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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
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
  ɵɵtextInterpolate2
} from "./chunk-5DE2SIVI.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/features/pages/instructor-grid/instructor-grid.component.ts
var _c0 = (a0, a1) => [a0, a1];
function InstructorGridComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "div", 30);
    \u0275\u0275elementStart(2, "p", 31);
    \u0275\u0275text(3, "Chargement des instructeurs...");
    \u0275\u0275elementEnd()();
  }
}
function InstructorGridComponent_ng_container_83_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "p", 48);
    \u0275\u0275text(2, "Aucun instructeur trouv\xE9.");
    \u0275\u0275elementEnd()();
  }
}
function InstructorGridComponent_ng_container_83_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50)(2, "div", 51)(3, "a", 52);
    \u0275\u0275element(4, "img", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 54)(6, "a", 55);
    \u0275\u0275element(7, "i", 56);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 57)(9, "div")(10, "p", 58);
    \u0275\u0275element(11, "i", 59);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "h3", 60)(14, "a", 61);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "span", 62);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 63)(19, "div", 64)(20, "span", 64);
    \u0275\u0275element(21, "i", 65);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const instructor_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(8, _c0, ctx_r1.routes.instructorDetails, instructor_r1.id));
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.getAvatarUrl(instructor_r1.avatar), \u0275\u0275sanitizeUrl)("alt", instructor_r1.name);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", instructor_r1.avgRating, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(11, _c0, ctx_r1.routes.instructorDetails, instructor_r1.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", instructor_r1.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", instructor_r1.courseCount, " cours");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", instructor_r1.courseCount, " cours ");
  }
}
function InstructorGridComponent_ng_container_83_div_18_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 76)(2, "a", 71);
    \u0275\u0275listener("click", function InstructorGridComponent_ng_container_83_div_18_ng_container_9_Template_a_click_2_listener() {
      const p_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToPage(p_r5));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", p_r5 === ctx_r1.currentPage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r5);
  }
}
function InstructorGridComponent_ng_container_83_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 66)(2, "p", 67);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 68)(5, "ul", 69)(6, "li", 70)(7, "a", 71);
    \u0275\u0275listener("click", function InstructorGridComponent_ng_container_83_div_18_Template_a_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage - 1));
    });
    \u0275\u0275element(8, "i", 72);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, InstructorGridComponent_ng_container_83_div_18_ng_container_9_Template, 4, 3, "ng-container", 73);
    \u0275\u0275elementStart(10, "li", 74)(11, "a", 71);
    \u0275\u0275listener("click", function InstructorGridComponent_ng_container_83_div_18_Template_a_click_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.currentPage + 1));
    });
    \u0275\u0275element(12, "i", 75);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Page ", ctx_r1.currentPage, " / ", ctx_r1.totalPages);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.getPageRange());
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
function InstructorGridComponent_ng_container_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 32)(2, "div", 33)(3, "div", 34)(4, "div", 35)(5, "h6", 36);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 37)(8, "div", 38)(9, "div", 39)(10, "div", 40)(11, "a", 41);
    \u0275\u0275element(12, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a", 43);
    \u0275\u0275element(14, "i", 44);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275template(15, InstructorGridComponent_ng_container_83_div_15_Template, 3, 0, "div", 27);
    \u0275\u0275elementStart(16, "div", 45);
    \u0275\u0275template(17, InstructorGridComponent_ng_container_83_div_17_Template, 23, 14, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, InstructorGridComponent_ng_container_83_div_18_Template, 13, 7, "div", 47);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.instructors.length, " instructeur(s)");
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", ctx_r1.routes.instructorGrid);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r1.routes.instructorList);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.instructors.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.paginatedInstructors);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.totalPages > 1);
  }
}
var InstructorGridComponent = class _InstructorGridComponent {
  courseService;
  routes = routes;
  instructors = [];
  loading = true;
  // Pagination
  currentPage = 1;
  pageSize = 9;
  get totalPages() {
    return Math.ceil(this.instructors.length / this.pageSize);
  }
  get paginatedInstructors() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.instructors.slice(start, start + this.pageSize);
  }
  getPageRange() {
    const total = this.totalPages;
    if (total <= 7)
      return Array.from({ length: total }, (_, i) => i + 1);
    const range = [];
    for (let i = Math.max(2, this.currentPage - 2); i <= Math.min(total - 1, this.currentPage + 2); i++)
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
              ratingCount: 0
            });
          }
          const inst = map.get(c.instructorId);
          inst.courseCount++;
          if (c.averageRating) {
            inst.totalRating += c.averageRating;
            inst.ratingCount++;
          }
        }
        this.instructors = Array.from(map.values()).map((inst) => __spreadProps(__spreadValues({}, inst), {
          avgRating: inst.ratingCount > 0 ? (inst.totalRating / inst.ratingCount).toFixed(1) : "0.0"
        }));
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  getAvatarUrl(path) {
    if (!path)
      return "assets/img/avatar/avatar10.jpg";
    return `http://localhost:8081/${path}`;
  }
  static \u0275fac = function InstructorGridComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorGridComponent)(\u0275\u0275directiveInject(CourseService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorGridComponent, selectors: [["app-instructor-grid"]], decls: 84, vars: 2, consts: [[1, "course-content"], [1, "container"], [1, "row", "align-items-baseline"], [1, "col-lg-3", "theiaStickySidebar"], [1, "filter-clear"], [1, "clear-filter", "d-flex", "align-items-center", "justify-content-between", "mb-4", "pb-lg-2"], [1, "feather-filter", "me-2"], [1, "accordion", "accordion-customicon1", "accordions-items-seperate"], [1, "accordion-item"], ["id", "headingOne", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseOne", "aria-expanded", "true", 1, "accordion-button"], [1, "fa-solid", "fa-chevron-down"], ["id", "collapseOne", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body"], [1, "custom_check"], ["type", "checkbox"], [1, "checkmark"], [1, "custom_check", "mb-0"], ["id", "headingTwo", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseTwo", "aria-expanded", "true", 1, "accordion-button"], ["id", "collapseTwo", 1, "accordion-collapse", "collapse", "show"], [1, "custom_check", "custom_one"], [1, "custom_check", "custom_one", "mb-0"], ["id", "headingThree", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseThree", "aria-expanded", "true", 1, "accordion-button"], ["id", "collapseThree", 1, "accordion-collapse", "collapse", "show"], [1, "col-lg-9"], ["class", "text-center py-5", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "py-5"], [1, "spinner-border", "text-primary"], [1, "mt-2"], [1, "showing-list", "mb-4"], [1, "row", "align-items-center"], [1, "col-lg-4"], [1, "show-result", "text-center", "text-lg-start"], [1, "fw-medium"], [1, "col-lg-8"], [1, "show-filter", "add-course-info"], [1, "d-sm-flex", "justify-content-center", "justify-content-lg-end", "mb-1", "mb-lg-0"], [1, "view-icons", "mb-2", "mb-sm-0"], [1, "grid-view", "active", 3, "routerLink"], [1, "feather", "icon-grid"], [1, "list-view", 3, "routerLink"], [1, "isax", "isax-task"], [1, "row", "course-list-cover"], ["class", "col-xl-4 col-md-6 d-flex", 4, "ngFor", "ngForOf"], ["class", "row align-items-center", 4, "ngIf"], [1, "text-muted"], [1, "col-xl-4", "col-md-6", "d-flex"], [1, "instructor-item", "instructor-item-six", "flex-fill"], [1, "instructors-img"], ["tabindex", "0", 3, "routerLink"], [1, "img-fluid", 2, "width", "100%", "height", "220px", "object-fit", "cover", 3, "src", "alt"], [1, "position-absolute", "start-0", "top-0", "d-flex", "align-items-start", "w-100", "z-index-2", "p-2"], ["href", "javascript:void(0);", "tabindex", "0", 1, "favourite", "ms-auto"], [1, "isax", "isax-heart"], [1, "instructor-content"], [1, "rating", "mb-2"], [1, "fas", "fa-star", "me-1"], [1, "title", "mb-2"], [3, "routerLink"], [1, "designation"], [1, "d-flex", "justify-content-between", "align-items-center", "instructor-bottom"], [1, "d-flex", "align-items-center"], [1, "isax", "isax-book-saved5", "fs-16", "text-secondary", "me-2"], [1, "col-md-2"], [1, "pagination-text"], [1, "col-md-10"], [1, "pagination", "lms-page", "justify-content-center", "justify-content-md-end", "mt-2", "mt-md-0"], [1, "page-item", "prev"], ["href", "javascript:void(0)", 1, "page-link", 3, "click"], [1, "fas", "fa-angle-left"], [4, "ngFor", "ngForOf"], [1, "page-item", "next"], [1, "fas", "fa-angle-right"], [1, "page-item"]], template: function InstructorGridComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h5");
      \u0275\u0275element(7, "i", 6);
      \u0275\u0275text(8, "Filtres");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "h2", 9)(12, "button", 10);
      \u0275\u0275text(13, " Sp\xE9cialit\xE9 ");
      \u0275\u0275element(14, "i", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 12)(16, "div", 13)(17, "div")(18, "label", 14);
      \u0275\u0275element(19, "input", 15)(20, "span", 16);
      \u0275\u0275text(21, " D\xE9veloppement");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div")(23, "label", 14);
      \u0275\u0275element(24, "input", 15)(25, "span", 16);
      \u0275\u0275text(26, " Design");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div")(28, "label", 14);
      \u0275\u0275element(29, "input", 15)(30, "span", 16);
      \u0275\u0275text(31, " Marketing");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div")(33, "label", 17);
      \u0275\u0275element(34, "input", 15)(35, "span", 16);
      \u0275\u0275text(36, " Autres");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(37, "div", 8)(38, "h2", 18)(39, "button", 19);
      \u0275\u0275text(40, " Prix ");
      \u0275\u0275element(41, "i", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 20)(43, "div", 13)(44, "div")(45, "label", 21);
      \u0275\u0275element(46, "input", 15)(47, "span", 16);
      \u0275\u0275text(48, " Tous");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div")(50, "label", 21);
      \u0275\u0275element(51, "input", 15)(52, "span", 16);
      \u0275\u0275text(53, " Gratuit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div")(55, "label", 22);
      \u0275\u0275element(56, "input", 15)(57, "span", 16);
      \u0275\u0275text(58, " Payant");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(59, "div", 8)(60, "h2", 23)(61, "button", 24);
      \u0275\u0275text(62, " Niveau ");
      \u0275\u0275element(63, "i", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div", 25)(65, "div", 13)(66, "div")(67, "label", 21);
      \u0275\u0275element(68, "input", 15)(69, "span", 16);
      \u0275\u0275text(70, " D\xE9butant");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "div")(72, "label", 21);
      \u0275\u0275element(73, "input", 15)(74, "span", 16);
      \u0275\u0275text(75, " Interm\xE9diaire");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "div")(77, "label", 22);
      \u0275\u0275element(78, "input", 15)(79, "span", 16);
      \u0275\u0275text(80, " Avanc\xE9");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(81, "div", 26);
      \u0275\u0275template(82, InstructorGridComponent_div_82_Template, 4, 0, "div", 27)(83, InstructorGridComponent_ng_container_83_Template, 19, 6, "ng-container", 28);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(82);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorGridComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-grid", imports: [CommonModule, RouterLink], template: '<section class="course-content">\n    <div class="container">\n        <div class="row align-items-baseline">\n            <!-- Sidebar filters (static UI) -->\n            <div class="col-lg-3 theiaStickySidebar">\n                <div class="filter-clear">\n                    <div class="clear-filter d-flex align-items-center justify-content-between mb-4 pb-lg-2">\n                        <h5><i class="feather-filter me-2"></i>Filtres</h5>\n                    </div>\n                    <div class="accordion accordion-customicon1 accordions-items-seperate">\n                        <div class="accordion-item">\n                            <h2 class="accordion-header" id="headingOne">\n                                <button class="accordion-button" type="button" data-bs-toggle="collapse"\n                                        data-bs-target="#collapseOne" aria-expanded="true">\n                                    Sp\xE9cialit\xE9 <i class="fa-solid fa-chevron-down"></i>\n                                </button>\n                            </h2>\n                            <div id="collapseOne" class="accordion-collapse collapse show">\n                                <div class="accordion-body">\n                                    <div><label class="custom_check"><input type="checkbox"><span class="checkmark"></span> D\xE9veloppement</label></div>\n                                    <div><label class="custom_check"><input type="checkbox"><span class="checkmark"></span> Design</label></div>\n                                    <div><label class="custom_check"><input type="checkbox"><span class="checkmark"></span> Marketing</label></div>\n                                    <div><label class="custom_check mb-0"><input type="checkbox"><span class="checkmark"></span> Autres</label></div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="accordion-item">\n                            <h2 class="accordion-header" id="headingTwo">\n                                <button class="accordion-button" type="button" data-bs-toggle="collapse"\n                                        data-bs-target="#collapseTwo" aria-expanded="true">\n                                    Prix <i class="fa-solid fa-chevron-down"></i>\n                                </button>\n                            </h2>\n                            <div id="collapseTwo" class="accordion-collapse collapse show">\n                                <div class="accordion-body">\n                                    <div><label class="custom_check custom_one"><input type="checkbox"><span class="checkmark"></span> Tous</label></div>\n                                    <div><label class="custom_check custom_one"><input type="checkbox"><span class="checkmark"></span> Gratuit</label></div>\n                                    <div><label class="custom_check custom_one mb-0"><input type="checkbox"><span class="checkmark"></span> Payant</label></div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="accordion-item">\n                            <h2 class="accordion-header" id="headingThree">\n                                <button class="accordion-button" type="button" data-bs-toggle="collapse"\n                                        data-bs-target="#collapseThree" aria-expanded="true">\n                                    Niveau <i class="fa-solid fa-chevron-down"></i>\n                                </button>\n                            </h2>\n                            <div id="collapseThree" class="accordion-collapse collapse show">\n                                <div class="accordion-body">\n                                    <div><label class="custom_check custom_one"><input type="checkbox"><span class="checkmark"></span> D\xE9butant</label></div>\n                                    <div><label class="custom_check custom_one"><input type="checkbox"><span class="checkmark"></span> Interm\xE9diaire</label></div>\n                                    <div><label class="custom_check custom_one mb-0"><input type="checkbox"><span class="checkmark"></span> Avanc\xE9</label></div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- /Sidebar -->\n\n            <div class="col-lg-9">\n                <!-- Loading -->\n                <div *ngIf="loading" class="text-center py-5">\n                    <div class="spinner-border text-primary"></div>\n                    <p class="mt-2">Chargement des instructeurs...</p>\n                </div>\n\n                <ng-container *ngIf="!loading">\n                    <!-- Toolbar -->\n                    <div class="showing-list mb-4">\n                        <div class="row align-items-center">\n                            <div class="col-lg-4">\n                                <div class="show-result text-center text-lg-start">\n                                    <h6 class="fw-medium">{{ instructors.length }} instructeur(s)</h6>\n                                </div>\n                            </div>\n                            <div class="col-lg-8">\n                                <div class="show-filter add-course-info">\n                                    <div class="d-sm-flex justify-content-center justify-content-lg-end mb-1 mb-lg-0">\n                                        <div class="view-icons mb-2 mb-sm-0">\n                                            <a [routerLink]="routes.instructorGrid" class="grid-view active"><i class="feather icon-grid"></i></a>\n                                            <a [routerLink]="routes.instructorList" class="list-view"><i class="isax isax-task"></i></a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- /Toolbar -->\n\n                    <!-- Empty state -->\n                    <div *ngIf="instructors.length === 0" class="text-center py-5">\n                        <p class="text-muted">Aucun instructeur trouv\xE9.</p>\n                    </div>\n\n                    <!-- Instructor cards grid -->\n                    <div class="row course-list-cover">\n                        <div *ngFor="let instructor of paginatedInstructors"\n                             class="col-xl-4 col-md-6 d-flex">\n                            <div class="instructor-item instructor-item-six flex-fill">\n                                <div class="instructors-img">\n                                    <a [routerLink]="[routes.instructorDetails, instructor.id]"\n                                       tabindex="0">\n                                        <img class="img-fluid" [src]="getAvatarUrl(instructor.avatar)"\n                                             [alt]="instructor.name"\n                                             style="width:100%;height:220px;object-fit:cover;">\n                                    </a>\n                                    <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">\n                                        <a href="javascript:void(0);" class="favourite ms-auto" tabindex="0">\n                                            <i class="isax isax-heart"></i>\n                                        </a>\n                                    </div>\n                                </div>\n                                <div class="instructor-content">\n                                    <div>\n                                        <p class="rating mb-2">\n                                            <i class="fas fa-star me-1"></i>{{ instructor.avgRating }}\n                                        </p>\n                                        <h3 class="title mb-2">\n                                            <a [routerLink]="[routes.instructorDetails, instructor.id]">\n                                                {{ instructor.name }}\n                                            </a>\n                                        </h3>\n                                        <span class="designation">{{ instructor.courseCount }} cours</span>\n                                    </div>\n                                    <div class="d-flex justify-content-between align-items-center instructor-bottom">\n                                        <div class="d-flex align-items-center">\n                                            <span class="d-flex align-items-center">\n                                                <i class="isax isax-book-saved5 fs-16 text-secondary me-2"></i>\n                                                {{ instructor.courseCount }} cours\n                                            </span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- /Instructor cards -->\n\n                    <!-- Pagination -->\n                    <div *ngIf="totalPages > 1" class="row align-items-center">\n                        <div class="col-md-2">\n                            <p class="pagination-text">Page {{ currentPage }} / {{ totalPages }}</p>\n                        </div>\n                        <div class="col-md-10">\n                            <ul class="pagination lms-page justify-content-center justify-content-md-end mt-2 mt-md-0">\n                                <li class="page-item prev" [class.disabled]="currentPage === 1">\n                                    <a class="page-link" href="javascript:void(0)" (click)="goToPage(currentPage - 1)">\n                                        <i class="fas fa-angle-left"></i>\n                                    </a>\n                                </li>\n                                <ng-container *ngFor="let p of getPageRange()">\n                                    <li class="page-item" [class.active]="p === currentPage">\n                                        <a class="page-link" href="javascript:void(0)" (click)="goToPage(p)">{{ p }}</a>\n                                    </li>\n                                </ng-container>\n                                <li class="page-item next" [class.disabled]="currentPage === totalPages">\n                                    <a class="page-link" href="javascript:void(0)" (click)="goToPage(currentPage + 1)">\n                                        <i class="fas fa-angle-right"></i>\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                    <!-- /Pagination -->\n                </ng-container>\n            </div>\n        </div>\n    </div>\n</section>\n' }]
  }], () => [{ type: CourseService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorGridComponent, { className: "InstructorGridComponent", filePath: "src/app/features/pages/instructor-grid/instructor-grid.component.ts", lineNumber: 13 });
})();
export {
  InstructorGridComponent
};
//# sourceMappingURL=chunk-X2X5XQDY.js.map
