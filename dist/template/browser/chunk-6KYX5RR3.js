import {
  MatSlider,
  MatSliderModule,
  MatSliderRangeThumb
} from "./chunk-EMERDEFM.js";
import "./chunk-Z42TT3Y4.js";
import "./chunk-LTXOSFWN.js";
import "./chunk-K5NRG4TQ.js";
import "./chunk-PZXI3ZTH.js";
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
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-VF2E3YWR.js";
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/courses/course-grid/course-grid.component.ts
function CourseGridComponent_div_230_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 84)(2, "span", 85);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()()();
  }
}
function CourseGridComponent_div_231_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83)(1, "p", 86);
    \u0275\u0275text(2, "No courses available.");
    \u0275\u0275elementEnd()();
  }
}
function CourseGridComponent_div_232_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275text(1, "En promo");
    \u0275\u0275elementEnd();
  }
}
function CourseGridComponent_div_232_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 89)(1, "div", 90)(2, "div", 91)(3, "a", 92);
    \u0275\u0275listener("click", function CourseGridComponent_div_232_div_1_Template_a_click_3_listener() {
      const course_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToCourse(course_r2.id));
    });
    \u0275\u0275element(4, "img", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 94);
    \u0275\u0275template(6, CourseGridComponent_div_232_div_1_div_6_Template, 2, 0, "div", 95);
    \u0275\u0275elementStart(7, "a", 96);
    \u0275\u0275element(8, "i", 97);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 0)(10, "div", 98)(11, "div", 99);
    \u0275\u0275element(12, "img", 100);
    \u0275\u0275elementStart(13, "div", 101)(14, "span", 102);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "span", 103);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "h6", 104)(19, "a", 92);
    \u0275\u0275listener("click", function CourseGridComponent_div_232_div_1_Template_a_click_19_listener() {
      const course_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToCourse(course_r2.id));
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "p", 105);
    \u0275\u0275element(22, "i", 106);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 107)(26, "h5", 108);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "a", 109);
    \u0275\u0275listener("click", function CourseGridComponent_div_232_div_1_Template_a_click_28_listener() {
      const course_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToCourse(course_r2.id));
    });
    \u0275\u0275text(29, "View Course");
    \u0275\u0275element(30, "i", 110);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const course_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r2.getImageUrl(course_r2.coverImage), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", course_r2.onSale);
    \u0275\u0275advance(6);
    \u0275\u0275property("src", ctx_r2.getAvatarUrl(course_r2.instructorAvatar), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(course_r2.instructorName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n", course_r2.categoryName, "\n");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(course_r2.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(24, 9, course_r2.averageRating, "1.1-1"), " (", course_r2.reviewCount, " Reviews)");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.formatPrice(course_r2));
  }
}
function CourseGridComponent_div_232_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275template(1, CourseGridComponent_div_232_div_1_Template, 31, 12, "div", 88);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.filteredCourses);
  }
}
var CourseGridComponent = class _CourseGridComponent {
  courseService;
  router;
  constructor(courseService, router) {
    this.courseService = courseService;
    this.router = router;
  }
  courses = [];
  filteredCourses = [];
  loading = true;
  routes = routes;
  isSelected = [false];
  startValue = 0;
  endValue = 5e3;
  searchTerm = "";
  sortOption = "";
  priceFilter = "";
  formatLabel(value) {
    if (value >= 1e3) {
      return Math.round(value) + "";
    }
    return `${value}`;
  }
  formatLabel1(value) {
    if (value >= 5e3) {
      return "$" + Math.round(value / 5e3);
    }
    return `$${value}`;
  }
  iconSelect(index) {
    this.isSelected[index] = !this.isSelected[index];
  }
  ngOnInit() {
    this.courseService.getPublishedCourses().subscribe({
      next: (data) => {
        this.courses = data;
        this.filteredCourses = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  applyFilters() {
    let result = [...this.courses];
    if (this.searchTerm.trim()) {
      const q = this.searchTerm.toLowerCase();
      result = result.filter((c) => (c.title || "").toLowerCase().includes(q) || (c.instructorName || "").toLowerCase().includes(q) || (c.categoryName || "").toLowerCase().includes(q));
    }
    if (this.priceFilter === "free") {
      result = result.filter((c) => !c.price || c.price === 0);
    } else if (this.priceFilter === "paid") {
      result = result.filter((c) => c.price && c.price > 0);
    }
    result = result.filter((c) => {
      const price = c.effectivePrice ?? c.price ?? 0;
      return price >= this.startValue && price <= this.endValue;
    });
    if (this.sortOption === "newest") {
      result.sort((a, b) => (b.id || 0) - (a.id || 0));
    } else if (this.sortOption === "toprated") {
      result.sort((a, b) => (b.averageRating || 0) - (a.averageRating || 0));
    } else if (this.sortOption === "free") {
      result = result.filter((c) => !c.price || c.price === 0);
    }
    this.filteredCourses = result;
  }
  goToCourse(courseId) {
    this.router.navigate([routes.courseDetails2], { queryParams: { courseId } });
  }
  formatPrice(course) {
    if (!course.price || course.price === 0)
      return "Free";
    if (course.effectivePrice !== void 0 && course.effectivePrice < course.price) {
      return "$" + course.effectivePrice;
    }
    return "$" + course.price;
  }
  getImageUrl(image) {
    if (!image)
      return "assets/img/course/course-01.jpg";
    if (image.startsWith("http"))
      return image;
    return `http://localhost:8081/api/files/${image}`;
  }
  getAvatarUrl(avatar) {
    if (!avatar)
      return "assets/img/user/user-01.jpg";
    if (avatar.startsWith("http"))
      return avatar;
    return `http://localhost:8081/api/files/${avatar}`;
  }
  static \u0275fac = function CourseGridComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CourseGridComponent)(\u0275\u0275directiveInject(CourseService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CourseGridComponent, selectors: [["app-course-grid"]], decls: 254, vars: 12, consts: [[1, "course-content"], [1, "container"], [1, "row", "align-items-baseline"], [1, "col-lg-3", "theiaStickySidebar"], [1, "filter-clear"], [1, "clear-filter", "mb-4", "pb-lg-2", "d-flex", "align-items-center", "justify-content-between"], [1, "feather", "icon-filter", "me-2"], ["href", "javascript:void(0);", 1, "clear-text"], [1, "accordion", "accordion-customicon1", "accordions-items-seperate"], [1, "accordion-item"], ["id", "headingcustomicon1One", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1One", "aria-expanded", "false", "aria-controls", "collapsecustomicon1One", 1, "accordion-button"], [1, "fa-solid", "fa-chevron-down"], ["id", "collapsecustomicon1One", "aria-labelledby", "headingcustomicon1One", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body"], [1, "custom_check"], ["type", "checkbox", "name", "select_specialist"], [1, "checkmark"], ["type", "checkbox", "name", "select_specialist", "checked", ""], [1, "custom_check", "mb-0"], ["href", "javascript:void(0);", 1, "see-more-btn"], ["id", "headingcustomicon1Two", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1Two", "aria-expanded", "false", "aria-controls", "collapsecustomicon1Two", 1, "accordion-button"], ["id", "collapsecustomicon1Two", "aria-labelledby", "headingcustomicon1Two", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse", "show"], ["id", "headingcustomicon1Three", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1Three", "aria-expanded", "false", "aria-controls", "collapsecustomicon1Three", 1, "accordion-button"], ["id", "collapsecustomicon1Three", "aria-labelledby", "headingcustomicon1Three", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse", "show"], [1, "custom_check", "custom_one"], [1, "custom_check", "custom_one", "mb-0"], ["id", "headingcustomicon1Four", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1Four", "aria-expanded", "false", "aria-controls", "collapsecustomicon1Four", 1, "accordion-button"], ["id", "collapsecustomicon1Four", "aria-labelledby", "headingcustomicon1Four", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse", "show"], [1, "filter-range"], ["min", "0", "max", "5000", "step", "100", "showTickMarks", "", "discrete", "", 3, "displayWith"], ["matSliderStartThumb", "", 3, "ngModelChange", "valueChange", "ngModel"], ["matSliderEndThumb", "", 3, "ngModelChange", "valueChange", "ngModel"], ["id", "headingcustomicon1Five", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1Five", "aria-expanded", "false", "aria-controls", "collapsecustomicon1Five", 1, "accordion-button"], ["id", "collapsecustomicon1Five", "aria-labelledby", "headingcustomicon1Five", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse", "show"], ["id", "headingcustomicon1Six", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1Six", "aria-expanded", "false", "aria-controls", "collapsecustomicon1Six", 1, "accordion-button"], ["id", "collapsecustomicon1Six", "aria-labelledby", "headingcustomicon1Six", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse", "show"], [1, "fa-solid", "fa-star", "text-warning", "me-1"], [1, "fa-solid", "fa-star", "text-warning"], [1, "fa-solid", "fa-star", "text-light"], [1, "fa-solid", "fa-star", "text-light", "me-1"], [1, "col-lg-9"], [1, "showing-list", "mb-4"], [1, "row", "align-items-center"], [1, "col-lg-4"], [1, "show-result", "text-center", "text-lg-start"], [1, "fw-medium"], [1, "col-lg-8"], [1, "show-filter", "add-course-info"], ["action", "#"], [1, "d-sm-flex", "justify-content-center", "justify-content-lg-end", "mb-1", "mb-lg-0"], [1, "view-icons", "mb-2", "mb-sm-0"], [1, "grid-view", "active", 3, "routerLink"], [1, "feather", "icon-grid"], [1, "list-view", 3, "routerLink"], [1, "isax", "isax-task"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "newest"], ["value", "toprated"], ["value", "free"], [1, "search-group"], [1, "isax", "isax-search-normal-1"], ["type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel"], ["class", "text-center py-5", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "col-md-2"], [1, "pagination-text"], [1, "col-md-10"], [1, "pagination", "lms-page", "justify-content-center", "justify-content-md-end", "mt-2", "mt-md-0"], [1, "page-item", "prev"], ["href", "javascript:void(0)", "tabindex", "-1", 1, "page-link"], [1, "fas", "fa-angle-left"], [1, "page-item", "first-page", "active"], ["href", "javascript:void(0)", 1, "page-link"], [1, "page-item"], [1, "page-item", "next"], [1, "fas", "fa-angle-right"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-secondary"], [1, "visually-hidden"], [1, "text-muted"], [1, "row"], ["class", "col-xl-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-xl-4", "col-md-6"], [1, "course-item-two", "course-item", "mx-0"], [1, "course-img"], ["href", "javascript:void(0);", 3, "click"], ["alt", "img", 1, "img-fluid", 3, "src"], [1, "position-absolute", "start-0", "top-0", "d-flex", "align-items-start", "w-100", "z-index-2", "p-3"], ["class", "badge text-bg-danger", 4, "ngIf"], ["href", "javascript:void(0);", 1, "fav-icon", "ms-auto"], [1, "isax", "isax-heart"], [1, "d-flex", "justify-content-between", "mb-2"], [1, "d-flex", "align-items-center"], ["alt", "img", 1, "img-fluid", "avatar", "avatar-sm", "rounded-circle", 3, "src"], [1, "ms-2"], [1, "link-default", "fs-14"], [1, "badge", "badge-light", "rounded-pill", "bg-light", "d-inline-flex", "align-items-center", "fs-13", "fw-medium", "mb-0"], [1, "title", "mb-2"], [1, "d-flex", "align-items-center", "mb-3"], [1, "fa-solid", "fa-star", "text-warning", "me-2"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "text-secondary", "mb-0"], ["href", "javascript:void(0);", 1, "btn", "btn-dark", "btn-sm", "d-inline-flex", "align-items-center", 3, "click"], [1, "isax", "isax-arrow-right-3", "ms-1"], [1, "badge", "text-bg-danger"]], template: function CourseGridComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h5");
      \u0275\u0275element(7, "i", 6);
      \u0275\u0275text(8, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "a", 7);
      \u0275\u0275text(10, " Clear ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 8)(12, "div", 9)(13, "h2", 10)(14, "a", 11);
      \u0275\u0275text(15, " Categories ");
      \u0275\u0275element(16, "i", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 13)(18, "div", 14)(19, "div")(20, "label", 15);
      \u0275\u0275element(21, "input", 16)(22, "span", 17);
      \u0275\u0275text(23, " Backend (3) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div")(25, "label", 15);
      \u0275\u0275element(26, "input", 16)(27, "span", 17);
      \u0275\u0275text(28, " CSS (2) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div")(30, "label", 15);
      \u0275\u0275element(31, "input", 16)(32, "span", 17);
      \u0275\u0275text(33, " Frontend (2) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div")(35, "label", 15);
      \u0275\u0275element(36, "input", 16)(37, "span", 17);
      \u0275\u0275text(38, " General (2) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div")(40, "label", 15);
      \u0275\u0275element(41, "input", 18)(42, "span", 17);
      \u0275\u0275text(43, " IT & Software (2) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div")(45, "label", 15);
      \u0275\u0275element(46, "input", 16)(47, "span", 17);
      \u0275\u0275text(48, " Photography (2) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div")(50, "label", 15);
      \u0275\u0275element(51, "input", 16)(52, "span", 17);
      \u0275\u0275text(53, " Programming Language (3) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div")(55, "label", 19);
      \u0275\u0275element(56, "input", 16)(57, "span", 17);
      \u0275\u0275text(58, " Technology (2) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "a", 20);
      \u0275\u0275text(60, "See More");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(61, "div", 9)(62, "h2", 21)(63, "a", 22);
      \u0275\u0275text(64, " Instructors");
      \u0275\u0275element(65, "i", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 23)(67, "div", 14)(68, "div")(69, "label", 15);
      \u0275\u0275element(70, "input", 16)(71, "span", 17);
      \u0275\u0275text(72, " Keny White (10) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "div")(74, "label", 15);
      \u0275\u0275element(75, "input", 16)(76, "span", 17);
      \u0275\u0275text(77, " Hinata Hyuga (5) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "div")(79, "label", 15);
      \u0275\u0275element(80, "input", 16)(81, "span", 17);
      \u0275\u0275text(82, " John Doe (3) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "div")(84, "label", 19);
      \u0275\u0275element(85, "input", 18)(86, "span", 17);
      \u0275\u0275text(87, " Nicole Brown ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "a", 20);
      \u0275\u0275text(89, "See More");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(90, "div", 9)(91, "h2", 24)(92, "a", 25);
      \u0275\u0275text(93, " Price");
      \u0275\u0275element(94, "i", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "div", 26)(96, "div", 14)(97, "div")(98, "label", 27);
      \u0275\u0275element(99, "input", 16)(100, "span", 17);
      \u0275\u0275text(101, " All (10) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(102, "div")(103, "label", 27);
      \u0275\u0275element(104, "input", 16)(105, "span", 17);
      \u0275\u0275text(106, " Free (5) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "div")(108, "label", 28);
      \u0275\u0275element(109, "input", 16)(110, "span", 17);
      \u0275\u0275text(111, " Paid (3) ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(112, "div", 9)(113, "h2", 29)(114, "a", 30);
      \u0275\u0275text(115, " Range");
      \u0275\u0275element(116, "i", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(117, "div", 31)(118, "div", 14)(119, "div", 32)(120, "mat-slider", 33)(121, "input", 34);
      \u0275\u0275twoWayListener("ngModelChange", function CourseGridComponent_Template_input_ngModelChange_121_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.startValue, $event) || (ctx.startValue = $event);
        return $event;
      });
      \u0275\u0275listener("valueChange", function CourseGridComponent_Template_input_valueChange_121_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "input", 35);
      \u0275\u0275twoWayListener("ngModelChange", function CourseGridComponent_Template_input_ngModelChange_122_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.endValue, $event) || (ctx.endValue = $event);
        return $event;
      });
      \u0275\u0275listener("valueChange", function CourseGridComponent_Template_input_valueChange_122_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(123, "div", 9)(124, "h2", 36)(125, "a", 37);
      \u0275\u0275text(126, " Level");
      \u0275\u0275element(127, "i", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(128, "div", 38)(129, "div", 14)(130, "div")(131, "label", 27);
      \u0275\u0275element(132, "input", 16)(133, "span", 17);
      \u0275\u0275text(134, "Beginner (10) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(135, "div")(136, "label", 27);
      \u0275\u0275element(137, "input", 16)(138, "span", 17);
      \u0275\u0275text(139, " Intermediate (5) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(140, "div")(141, "label", 27);
      \u0275\u0275element(142, "input", 16)(143, "span", 17);
      \u0275\u0275text(144, "Advanced (21) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(145, "div")(146, "label", 28);
      \u0275\u0275element(147, "input", 16)(148, "span", 17);
      \u0275\u0275text(149, "Expert (3) ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(150, "div", 9)(151, "h2", 39)(152, "a", 40);
      \u0275\u0275text(153, " Reviews ");
      \u0275\u0275element(154, "i", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(155, "div", 41)(156, "div", 14)(157, "div")(158, "label", 27);
      \u0275\u0275element(159, "input", 16)(160, "span", 17)(161, "i", 42)(162, "i", 42)(163, "i", 42)(164, "i", 42)(165, "i", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(166, "div")(167, "label", 27);
      \u0275\u0275element(168, "input", 16)(169, "span", 17)(170, "i", 42)(171, "i", 42)(172, "i", 42)(173, "i", 42)(174, "i", 44);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(175, "div")(176, "label", 27);
      \u0275\u0275element(177, "input", 16)(178, "span", 17)(179, "i", 42)(180, "i", 42)(181, "i", 42)(182, "i", 45)(183, "i", 44);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(184, "div")(185, "label", 27);
      \u0275\u0275element(186, "input", 16)(187, "span", 17)(188, "i", 42)(189, "i", 42)(190, "i", 45)(191, "i", 45)(192, "i", 44);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(193, "div")(194, "label", 28);
      \u0275\u0275element(195, "input", 16)(196, "span", 17)(197, "i", 42)(198, "i", 45)(199, "i", 45)(200, "i", 45)(201, "i", 44);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(202, "div", 46)(203, "div", 47)(204, "div", 48)(205, "div", 49)(206, "div", 50)(207, "h6", 51);
      \u0275\u0275text(208);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(209, "div", 52)(210, "div", 53)(211, "form", 54)(212, "div", 55)(213, "div", 56)(214, "a", 57);
      \u0275\u0275element(215, "i", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(216, "a", 59);
      \u0275\u0275element(217, "i", 60);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(218, "select", 61);
      \u0275\u0275twoWayListener("ngModelChange", function CourseGridComponent_Template_select_ngModelChange_218_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.sortOption, $event) || (ctx.sortOption = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function CourseGridComponent_Template_select_ngModelChange_218_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementStart(219, "option", 62);
      \u0275\u0275text(220, "Newly Published");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "option", 63);
      \u0275\u0275text(222, "Newest");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "option", 64);
      \u0275\u0275text(224, "Top Rated");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "option", 65);
      \u0275\u0275text(226, "Free Courses");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(227, "div", 66);
      \u0275\u0275element(228, "i", 67);
      \u0275\u0275elementStart(229, "input", 68);
      \u0275\u0275twoWayListener("ngModelChange", function CourseGridComponent_Template_input_ngModelChange_229_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function CourseGridComponent_Template_input_ngModelChange_229_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275template(230, CourseGridComponent_div_230_Template, 4, 0, "div", 69)(231, CourseGridComponent_div_231_Template, 3, 0, "div", 69)(232, CourseGridComponent_div_232_Template, 2, 1, "div", 70);
      \u0275\u0275elementStart(233, "div", 48)(234, "div", 71)(235, "p", 72);
      \u0275\u0275text(236, "Page 1 of 2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(237, "div", 73)(238, "ul", 74)(239, "li", 75)(240, "a", 76);
      \u0275\u0275element(241, "i", 77);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(242, "li", 78)(243, "a", 79);
      \u0275\u0275text(244, "1");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(245, "li", 80)(246, "a", 79);
      \u0275\u0275text(247, "2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(248, "li", 80)(249, "a", 79);
      \u0275\u0275text(250, "3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(251, "li", 81)(252, "a", 79);
      \u0275\u0275element(253, "i", 82);
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(120);
      \u0275\u0275property("displayWith", ctx.formatLabel1);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.startValue);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.endValue);
      \u0275\u0275advance(86);
      \u0275\u0275textInterpolate2("Showing ", ctx.filteredCourses.length, " of ", ctx.courses.length, " results");
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseGrid);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.courseList);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.sortOption);
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredCourses.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredCourses.length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, MatSliderModule, MatSlider, MatSliderRangeThumb, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CourseGridComponent, [{
    type: Component,
    args: [{ selector: "app-course-grid", imports: [CommonModule, RouterLink, MatSliderModule, FormsModule], template: `			\r
            \r
            \r
            <!-- Course -->\r
			<section class="course-content">\r
				<div class="container">\r
					<div class="row align-items-baseline">\r
						<div class="col-lg-3 theiaStickySidebar">\r
							<div class="filter-clear">\r
								<div class="clear-filter mb-4 pb-lg-2 d-flex align-items-center justify-content-between">\r
									<h5><i class="feather icon-filter me-2"></i>Filters</h5>\r
									<a href="javascript:void(0);" class="clear-text">\r
										Clear\r
									</a>\r
								</div>\r
\r
								<div class="accordion accordion-customicon1 accordions-items-seperate">\r
									<div class="accordion-item">\r
										<h2 class="accordion-header" id="headingcustomicon1One">\r
											<a href="javascript:void(0);" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapsecustomicon1One" aria-expanded="false" aria-controls="collapsecustomicon1One">\r
											Categories <i class="fa-solid fa-chevron-down"></i>\r
											</a>\r
										</h2>\r
										<div id="collapsecustomicon1One" class="accordion-collapse collapse show" aria-labelledby="headingcustomicon1One" data-bs-parent="#accordioncustomicon1Example">\r
											<div class="accordion-body">\r
												<div>\r
													<label class="custom_check">\r
														<input type="checkbox" name="select_specialist" >\r
														<span class="checkmark"></span> Backend (3)\r
													</label>\r
												</div>\r
												<div>\r
													<label class="custom_check">\r
														<input type="checkbox" name="select_specialist" >\r
														<span class="checkmark"></span>  CSS (2)\r
													</label>\r
												</div>\r
												<div>\r
													<label class="custom_check">\r
														<input type="checkbox" name="select_specialist">\r
														<span class="checkmark"></span>  Frontend (2)\r
													</label>\r
												</div>\r
												<div>\r
													<label class="custom_check">\r
														<input type="checkbox" name="select_specialist">\r
														<span class="checkmark"></span> General (2)\r
													</label>\r
												</div>\r
												<div>\r
													<label class="custom_check">\r
														<input type="checkbox" name="select_specialist" checked>\r
														<span class="checkmark"></span> IT & Software (2)\r
													</label>\r
												</div>\r
												<div>\r
													<label class="custom_check">\r
														<input type="checkbox" name="select_specialist">\r
														<span class="checkmark"></span> Photography (2)\r
													</label>\r
												</div>\r
												<div>\r
													<label class="custom_check">\r
														<input type="checkbox" name="select_specialist">\r
														<span class="checkmark"></span>  Programming Language (3)\r
													</label>\r
												</div>\r
												<div>\r
													<label class="custom_check mb-0">\r
														<input type="checkbox" name="select_specialist">\r
														<span class="checkmark"></span>  Technology (2)\r
													</label>\r
												</div>\r
												<a href="javascript:void(0);" class="see-more-btn">See More</a>\r
											</div>\r
										</div>\r
									</div>\r
									<div class="accordion-item">\r
										<h2 class="accordion-header" id="headingcustomicon1Two">\r
											<a href="javascript:void(0);" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapsecustomicon1Two" aria-expanded="false" aria-controls="collapsecustomicon1Two">\r
											Instructors<i class="fa-solid fa-chevron-down"></i>\r
											</a>\r
										</h2>\r
										<div id="collapsecustomicon1Two" class="accordion-collapse collapse show" aria-labelledby="headingcustomicon1Two" data-bs-parent="#accordioncustomicon1Example">\r
											<div class="accordion-body">\r
												<div>\r
													<label class="custom_check">\r
														<input type="checkbox" name="select_specialist" >\r
														<span class="checkmark"></span> Keny White (10)\r
	\r
													</label>\r
												</div>\r
												<div>\r
													<label class="custom_check">\r
														<input type="checkbox" name="select_specialist" >\r
														<span class="checkmark"></span>  Hinata Hyuga (5)\r
													</label>\r
												</div>\r
												<div>\r
													<label class="custom_check">\r
														<input type="checkbox" name="select_specialist">\r
														<span class="checkmark"></span>  John Doe (3)\r
													</label>\r
												</div>\r
												<div>\r
													<label class="custom_check mb-0">\r
														<input type="checkbox" name="select_specialist" checked>\r
														<span class="checkmark"></span> Nicole Brown\r
													</label>\r
												</div>\r
												<a href="javascript:void(0);" class="see-more-btn">See More</a>\r
											</div>\r
										</div>\r
									</div>\r
									<div class="accordion-item">\r
										<h2 class="accordion-header" id="headingcustomicon1Three">\r
											<a href="javascript:void(0);" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapsecustomicon1Three" aria-expanded="false" aria-controls="collapsecustomicon1Three">\r
											Price<i class="fa-solid fa-chevron-down"></i>\r
											</a>\r
										</h2>\r
										<div id="collapsecustomicon1Three" class="accordion-collapse collapse show" aria-labelledby="headingcustomicon1Three" data-bs-parent="#accordioncustomicon1Example">\r
											<div class="accordion-body">\r
												<div>\r
													<label class="custom_check custom_one">\r
														<input type="checkbox" name="select_specialist" >\r
														<span class="checkmark"></span> All (10)\r
	\r
													</label>\r
												</div>\r
												<div>\r
													<label class="custom_check custom_one">\r
														<input type="checkbox" name="select_specialist" >\r
														<span class="checkmark"></span>  Free (5) \r
	\r
													</label>\r
												</div>\r
												<div>\r
													<label class="custom_check custom_one mb-0">\r
														<input type="checkbox" name="select_specialist">\r
														<span class="checkmark"></span>  Paid (3)\r
													</label>\r
												</div>\r
											</div>\r
										</div>\r
									</div>\r
									<div class="accordion-item">\r
										<h2 class="accordion-header" id="headingcustomicon1Four">\r
											<a href="javascript:void(0);" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapsecustomicon1Four" aria-expanded="false" aria-controls="collapsecustomicon1Four">\r
											Range<i class="fa-solid fa-chevron-down"></i>\r
											</a>\r
										</h2>\r
										<div id="collapsecustomicon1Four" class="accordion-collapse collapse show" aria-labelledby="headingcustomicon1Four" data-bs-parent="#accordioncustomicon1Example">\r
											<div class="accordion-body">\r
												<div class="filter-range">\r
										<mat-slider min="0" max="5000" step="100" showTickMarks discrete [displayWith]="formatLabel1">\r
                                                        <input matSliderStartThumb [(ngModel)]="startValue" (valueChange)="applyFilters()">\r
                                                        <input matSliderEndThumb [(ngModel)]="endValue" (valueChange)="applyFilters()">\r
                                                    </mat-slider>\r
												</div>\r
											</div>\r
										</div>\r
									</div>\r
									<div class="accordion-item">\r
										<h2 class="accordion-header" id="headingcustomicon1Five">\r
											<a href="javascript:void(0);" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapsecustomicon1Five" aria-expanded="false" aria-controls="collapsecustomicon1Five">\r
											Level<i class="fa-solid fa-chevron-down"></i>\r
											</a>\r
										</h2>\r
										<div id="collapsecustomicon1Five" class="accordion-collapse collapse show" aria-labelledby="headingcustomicon1Five" data-bs-parent="#accordioncustomicon1Example">\r
											<div class="accordion-body">\r
												<div>\r
													<label class="custom_check custom_one">\r
														<input type="checkbox" name="select_specialist" >\r
														<span class="checkmark"></span>Beginner (10)\r
	\r
													</label>\r
												</div>\r
												<div>\r
													<label class="custom_check custom_one">\r
														<input type="checkbox" name="select_specialist" >\r
														<span class="checkmark"></span> Intermediate (5)\r
	\r
													</label>\r
												</div>\r
												<div>\r
													<label class="custom_check custom_one">\r
														<input type="checkbox" name="select_specialist">\r
														<span class="checkmark"></span>Advanced (21)\r
													</label>\r
												</div>\r
												<div>\r
													<label class="custom_check custom_one mb-0">\r
														<input type="checkbox" name="select_specialist">\r
														<span class="checkmark"></span>Expert  (3)\r
													</label>\r
												</div>\r
											</div>\r
										</div>\r
									</div>\r
									<div class="accordion-item">\r
										<h2 class="accordion-header" id="headingcustomicon1Six">\r
											<a href="javascript:void(0);" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapsecustomicon1Six" aria-expanded="false" aria-controls="collapsecustomicon1Six">\r
											Reviews <i class="fa-solid fa-chevron-down"></i>\r
											</a>\r
										</h2>\r
										<div id="collapsecustomicon1Six" class="accordion-collapse collapse show" aria-labelledby="headingcustomicon1Six" data-bs-parent="#accordioncustomicon1Example">\r
											<div class="accordion-body">\r
												<div>\r
													<label class="custom_check custom_one">\r
														<input type="checkbox" name="select_specialist" >\r
														<span class="checkmark"></span>\r
														<i class="fa-solid fa-star text-warning me-1"></i>\r
														<i class="fa-solid fa-star text-warning me-1"></i>\r
														<i class="fa-solid fa-star text-warning me-1"></i>\r
														<i class="fa-solid fa-star text-warning me-1"></i>\r
														<i class="fa-solid fa-star text-warning"></i>\r
													</label>\r
												</div>\r
												<div>\r
													<label class="custom_check custom_one">\r
														<input type="checkbox" name="select_specialist" >\r
														<span class="checkmark"></span>\r
														<i class="fa-solid fa-star text-warning me-1"></i>\r
														<i class="fa-solid fa-star text-warning me-1"></i>\r
														<i class="fa-solid fa-star text-warning me-1"></i>\r
														<i class="fa-solid fa-star text-warning me-1"></i>\r
														<i class="fa-solid fa-star text-light"></i>\r
	\r
													</label>\r
												</div>\r
												<div>\r
													<label class="custom_check custom_one">\r
														<input type="checkbox" name="select_specialist">\r
														<span class="checkmark"></span>\r
														<i class="fa-solid fa-star text-warning me-1"></i>\r
														<i class="fa-solid fa-star text-warning me-1"></i>\r
														<i class="fa-solid fa-star text-warning me-1"></i>\r
														<i class="fa-solid fa-star text-light me-1"></i>\r
														<i class="fa-solid fa-star text-light"></i>\r
													</label>\r
												</div>\r
												<div>\r
													<label class="custom_check custom_one">\r
														<input type="checkbox" name="select_specialist">\r
														<span class="checkmark"></span>\r
														<i class="fa-solid fa-star text-warning me-1"></i>\r
														<i class="fa-solid fa-star text-warning me-1"></i>\r
														<i class="fa-solid fa-star text-light me-1"></i>\r
														<i class="fa-solid fa-star text-light me-1"></i>\r
														<i class="fa-solid fa-star text-light"></i>\r
													</label>\r
												</div>\r
												<div>\r
													<label class="custom_check custom_one mb-0">\r
														<input type="checkbox" name="select_specialist">\r
														<span class="checkmark"></span>\r
														<i class="fa-solid fa-star text-warning me-1"></i>\r
														<i class="fa-solid fa-star text-light me-1"></i>\r
														<i class="fa-solid fa-star text-light me-1"></i>\r
														<i class="fa-solid fa-star text-light me-1"></i>\r
														<i class="fa-solid fa-star text-light"></i>\r
													</label>\r
												</div>\r
											</div>\r
										</div>\r
									</div>\r
								</div>\r
\r
							</div>\r
						</div>\r
						<div class="col-lg-9">\r
						\r
							<!-- Filter -->\r
							<div class="showing-list mb-4">\r
								<div class="row align-items-center">\r
									<div class="col-lg-4">\r
											<div class="show-result text-center text-lg-start">\r
												<h6 class="fw-medium">Showing {{ filteredCourses.length }} of {{ courses.length }} results</h6>\r
											</div>\r
									</div>\r
									<div class="col-lg-8">	\r
										<div class="show-filter add-course-info">\r
											<form action="#">\r
												<div class="d-sm-flex justify-content-center justify-content-lg-end mb-1 mb-lg-0">\r
													<div class="view-icons mb-2 mb-sm-0">\r
														<a [routerLink]="routes.courseGrid" class="grid-view active"><i class="feather icon-grid"></i></a>\r
														<a [routerLink]="routes.courseList" class="list-view"><i class="isax isax-task"></i></a>\r
													</div>\r
												<select class="form-select" [(ngModel)]="sortOption" (ngModelChange)="applyFilters()">\r
													<option value="">Newly Published</option>\r
													<option value="newest">Newest</option>\r
													<option value="toprated">Top Rated</option>\r
													<option value="free">Free Courses</option>\r
												</select>\r
												<div class=" search-group">\r
													<i class="isax isax-search-normal-1"></i>\r
													<input type="text" class="form-control" placeholder="Search" [(ngModel)]="searchTerm" (ngModelChange)="applyFilters()">\r
													</div>\r
												</div>\r
											</form>\r
										</div>	\r
									</div>\r
								</div>\r
							</div>\r
							<!-- /Filter -->\r
							\r
<!-- Loading -->\r
<div *ngIf="loading" class="text-center py-5">\r
<div class="spinner-border text-secondary" role="status">\r
<span class="visually-hidden">Loading...</span>\r
</div>\r
</div>\r
\r
<!-- No courses -->\r
<div *ngIf="!loading && filteredCourses.length === 0" class="text-center py-5">\r
<p class="text-muted">No courses available.</p>\r
</div>\r
\r
<div *ngIf="!loading && filteredCourses.length > 0" class="row">\r
<div *ngFor="let course of filteredCourses" class="col-xl-4 col-md-6">\r
<div class="course-item-two course-item mx-0">\r
<div class="course-img">\r
<a href="javascript:void(0);" (click)="goToCourse(course.id)">\r
<img [src]="getImageUrl(course.coverImage)" alt="img" class="img-fluid">\r
</a>\r
<div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">\r
<div *ngIf="course.onSale" class="badge text-bg-danger">En promo</div>\r
<a href="javascript:void(0);" class="fav-icon ms-auto"><i class="isax isax-heart"></i></a>\r
</div>\r
</div>\r
<div class="course-content">\r
<div class="d-flex justify-content-between mb-2">\r
<div class="d-flex align-items-center">\r
<img [src]="getAvatarUrl(course.instructorAvatar)" alt="img" class="img-fluid avatar avatar-sm rounded-circle">\r
<div class="ms-2">\r
<span class="link-default fs-14">{{ course.instructorName }}</span>\r
</div>\r
</div>\r
<span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">\r
{{ course.categoryName }}\r
</span>\r
</div>\r
<h6 class="title mb-2"><a href="javascript:void(0);" (click)="goToCourse(course.id)">{{ course.title }}</a></h6>\r
<p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>{{ course.averageRating | number:'1.1-1' }} ({{ course.reviewCount }} Reviews)</p>\r
<div class="d-flex align-items-center justify-content-between">\r
<h5 class="text-secondary mb-0">{{ formatPrice(course) }}</h5>\r
<a href="javascript:void(0);" (click)="goToCourse(course.id)" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="isax isax-arrow-right-3 ms-1"></i></a>\r
</div>\r
</div>\r
</div>\r
</div>\r
</div>\r
							<!-- /pagination -->\r
							<div class="row align-items-center">\r
								<div class="col-md-2">\r
                                  <p class="pagination-text">Page 1 of 2</p>\r
								</div>\r
								<div class="col-md-10">\r
									<ul class="pagination lms-page justify-content-center justify-content-md-end mt-2 mt-md-0">\r
										<li class="page-item prev">\r
											<a class="page-link" href="javascript:void(0)" tabindex="-1"><i class="fas fa-angle-left"></i></a>\r
										</li>\r
										<li class="page-item first-page active">\r
											<a class="page-link" href="javascript:void(0)">1</a>\r
										</li>\r
										<li class="page-item">\r
											<a class="page-link" href="javascript:void(0)">2</a>\r
										</li>\r
										<li class="page-item">\r
											<a class="page-link" href="javascript:void(0)">3</a>\r
										</li>\r
										<li class="page-item next">\r
											<a class="page-link" href="javascript:void(0)"><i class="fas fa-angle-right"></i></a>\r
										</li>\r
									</ul>\r
								</div>\r
							</div>\r
							<!-- /pagination -->\r
							\r
						</div>\r
					</div>\r
				</div>\r
			</section>\r
			<!-- /Course -->\r
` }]
  }], () => [{ type: CourseService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CourseGridComponent, { className: "CourseGridComponent", filePath: "src/app/features/courses/course-grid/course-grid.component.ts", lineNumber: 15 });
})();
export {
  CourseGridComponent
};
//# sourceMappingURL=chunk-6KYX5RR3.js.map
