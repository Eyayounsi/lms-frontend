"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[9559],{

/***/ 99559:
/*!***********************************************************************!*\
  !*** ./src/app/features/courses/course-grid/course-grid.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CourseGridComponent: () => (/* binding */ CourseGridComponent)
/* harmony export */ });
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slider */ 64992);
/* harmony import */ var _shared_utils_course_image_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/utils/course-image.util */ 39937);
/* harmony import */ var _shared_utils_avatar_image_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/utils/avatar-image.util */ 35365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/service/course/course.service */ 4856);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 85422);













function CourseGridComponent_div_230_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 83)(1, "div", 84)(2, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
}
function CourseGridComponent_div_231_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 83)(1, "p", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "No courses available.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function CourseGridComponent_div_232_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "En promo");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function CourseGridComponent_div_232_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 89)(1, "div", 90)(2, "div", 91)(3, "a", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CourseGridComponent_div_232_div_1_Template_a_click_3_listener() {
      const course_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.goToCourse(course_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "img", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, CourseGridComponent_div_232_div_1_div_6_Template, 2, 0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "a", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 0)(10, "div", 98)(11, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "img", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 101)(14, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "h6", 104)(19, "a", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CourseGridComponent_div_232_div_1_Template_a_click_19_listener() {
      const course_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.goToCourse(course_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "p", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](24, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 107)(26, "h5", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "a", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CourseGridComponent_div_232_div_1_Template_a_click_28_listener() {
      const course_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.goToCourse(course_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "View Course");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](30, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const course_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r2.getImageUrl(course_r2.coverImage), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", course_r2.onSale);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r2.getAvatarUrl(course_r2.instructorAvatar), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](course_r2.instructorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\n", course_r2.categoryName, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](course_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](24, 9, course_r2.averageRating, "1.1-1"), " (", course_r2.reviewCount, " Reviews)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.formatPrice(course_r2));
  }
}
function CourseGridComponent_div_232_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CourseGridComponent_div_232_div_1_Template, 31, 12, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.filteredCourses);
  }
}
let CourseGridComponent = /*#__PURE__*/(() => {
  class CourseGridComponent {
    courseService;
    router;
    constructor(courseService, router) {
      this.courseService = courseService;
      this.router = router;
    }
    courses = [];
    filteredCourses = [];
    loading = true;
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    isSelected = [false];
    startValue = 0;
    endValue = 5000;
    searchTerm = '';
    sortOption = '';
    priceFilter = '';
    formatLabel(value) {
      if (value >= 1000) {
        return Math.round(value) + '';
      }
      return `${value}`;
    }
    formatLabel1(value) {
      if (value >= 5000) {
        return '$' + Math.round(value / 5000);
      }
      return `$${value}`;
    }
    iconSelect(index) {
      this.isSelected[index] = !this.isSelected[index];
    }
    ngOnInit() {
      this.courseService.getPublishedCourses().subscribe({
        next: data => {
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
      // Search
      if (this.searchTerm.trim()) {
        const q = this.searchTerm.toLowerCase();
        result = result.filter(c => (c.title || '').toLowerCase().includes(q) || (c.instructorName || '').toLowerCase().includes(q) || (c.categoryName || '').toLowerCase().includes(q));
      }
      // Price filter
      if (this.priceFilter === 'free') {
        result = result.filter(c => !c.price || c.price === 0);
      } else if (this.priceFilter === 'paid') {
        result = result.filter(c => c.price && c.price > 0);
      }
      // Range filter
      result = result.filter(c => {
        const price = c.effectivePrice ?? c.price ?? 0;
        return price >= this.startValue && price <= this.endValue;
      });
      // Sort
      if (this.sortOption === 'newest') {
        result.sort((a, b) => (b.id || 0) - (a.id || 0));
      } else if (this.sortOption === 'toprated') {
        result.sort((a, b) => (b.averageRating || 0) - (a.averageRating || 0));
      } else if (this.sortOption === 'free') {
        result = result.filter(c => !c.price || c.price === 0);
      }
      this.filteredCourses = result;
    }
    goToCourse(courseId) {
      this.router.navigate([_shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__.routes.courseDetails2], {
        queryParams: {
          courseId
        }
      });
    }
    formatPrice(course) {
      if (!course.price || course.price === 0) return 'Free';
      if (course.effectivePrice !== undefined && course.effectivePrice < course.price) {
        return '$' + course.effectivePrice;
      }
      return '$' + course.price;
    }
    getImageUrl(image) {
      if (!image) return 'assets/img/course-img/courses-01.jpg';
      if (image.startsWith('preset:')) return `assets/img/course-img/${image.replace('preset:', '')}`;
      if (image.startsWith('http')) return image;
      return (0,_shared_utils_course_image_util__WEBPACK_IMPORTED_MODULE_5__.resolveCourseImage)(image);
    }
    getAvatarUrl(avatar) {
      return (0,_shared_utils_avatar_image_util__WEBPACK_IMPORTED_MODULE_6__.resolveAvatarImage)(avatar, 'assets/img/user/user-01.jpg');
    }
    static ɵfac = function CourseGridComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CourseGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_9__.CourseService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: CourseGridComponent,
      selectors: [["app-course-grid"]],
      decls: 254,
      vars: 12,
      consts: [[1, "course-content"], [1, "container"], [1, "row", "align-items-baseline"], [1, "col-lg-3", "theiaStickySidebar"], [1, "filter-clear"], [1, "clear-filter", "mb-4", "pb-lg-2", "d-flex", "align-items-center", "justify-content-between"], [1, "feather", "icon-filter", "me-2"], ["href", "javascript:void(0);", 1, "clear-text"], [1, "accordion", "accordion-customicon1", "accordions-items-seperate"], [1, "accordion-item"], ["id", "headingcustomicon1One", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1One", "aria-expanded", "false", "aria-controls", "collapsecustomicon1One", 1, "accordion-button"], [1, "fa-solid", "fa-chevron-down"], ["id", "collapsecustomicon1One", "aria-labelledby", "headingcustomicon1One", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body"], [1, "custom_check"], ["type", "checkbox", "name", "select_specialist"], [1, "checkmark"], ["type", "checkbox", "name", "select_specialist", "checked", ""], [1, "custom_check", "mb-0"], ["href", "javascript:void(0);", 1, "see-more-btn"], ["id", "headingcustomicon1Two", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1Two", "aria-expanded", "false", "aria-controls", "collapsecustomicon1Two", 1, "accordion-button"], ["id", "collapsecustomicon1Two", "aria-labelledby", "headingcustomicon1Two", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse", "show"], ["id", "headingcustomicon1Three", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1Three", "aria-expanded", "false", "aria-controls", "collapsecustomicon1Three", 1, "accordion-button"], ["id", "collapsecustomicon1Three", "aria-labelledby", "headingcustomicon1Three", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse", "show"], [1, "custom_check", "custom_one"], [1, "custom_check", "custom_one", "mb-0"], ["id", "headingcustomicon1Four", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1Four", "aria-expanded", "false", "aria-controls", "collapsecustomicon1Four", 1, "accordion-button"], ["id", "collapsecustomicon1Four", "aria-labelledby", "headingcustomicon1Four", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse", "show"], [1, "filter-range"], ["min", "0", "max", "5000", "step", "100", "showTickMarks", "", "discrete", "", 3, "displayWith"], ["matSliderStartThumb", "", 3, "ngModelChange", "valueChange", "ngModel"], ["matSliderEndThumb", "", 3, "ngModelChange", "valueChange", "ngModel"], ["id", "headingcustomicon1Five", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1Five", "aria-expanded", "false", "aria-controls", "collapsecustomicon1Five", 1, "accordion-button"], ["id", "collapsecustomicon1Five", "aria-labelledby", "headingcustomicon1Five", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse", "show"], ["id", "headingcustomicon1Six", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1Six", "aria-expanded", "false", "aria-controls", "collapsecustomicon1Six", 1, "accordion-button"], ["id", "collapsecustomicon1Six", "aria-labelledby", "headingcustomicon1Six", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse", "show"], [1, "fa-solid", "fa-star", "text-warning", "me-1"], [1, "fa-solid", "fa-star", "text-warning"], [1, "fa-solid", "fa-star", "text-light"], [1, "fa-solid", "fa-star", "text-light", "me-1"], [1, "col-lg-9"], [1, "showing-list", "mb-4"], [1, "row", "align-items-center"], [1, "col-lg-4"], [1, "show-result", "text-center", "text-lg-start"], [1, "fw-medium"], [1, "col-lg-8"], [1, "show-filter", "add-course-info"], ["action", "#"], [1, "d-sm-flex", "justify-content-center", "justify-content-lg-end", "mb-1", "mb-lg-0"], [1, "view-icons", "mb-2", "mb-sm-0"], [1, "grid-view", "active", 3, "routerLink"], [1, "feather", "icon-grid"], [1, "list-view", 3, "routerLink"], [1, "isax", "isax-task"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "newest"], ["value", "toprated"], ["value", "free"], [1, "search-group"], [1, "isax", "isax-search-normal-1"], ["type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModelChange", "ngModel"], ["class", "text-center py-5", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "col-md-2"], [1, "pagination-text"], [1, "col-md-10"], [1, "pagination", "lms-page", "justify-content-center", "justify-content-md-end", "mt-2", "mt-md-0"], [1, "page-item", "prev"], ["href", "javascript:void(0)", "tabindex", "-1", 1, "page-link"], [1, "fas", "fa-angle-left"], [1, "page-item", "first-page", "active"], ["href", "javascript:void(0)", 1, "page-link"], [1, "page-item"], [1, "page-item", "next"], [1, "fas", "fa-angle-right"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-secondary"], [1, "visually-hidden"], [1, "text-muted"], [1, "row"], ["class", "col-xl-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-xl-4", "col-md-6"], [1, "course-item-two", "course-item", "mx-0"], [1, "course-img"], ["href", "javascript:void(0);", 3, "click"], ["alt", "img", 1, "img-fluid", 3, "src"], [1, "position-absolute", "start-0", "top-0", "d-flex", "align-items-start", "w-100", "z-index-2", "p-3"], ["class", "badge text-bg-danger", 4, "ngIf"], ["href", "javascript:void(0);", 1, "fav-icon", "ms-auto"], [1, "isax", "isax-heart"], [1, "d-flex", "justify-content-between", "mb-2"], [1, "d-flex", "align-items-center"], ["alt", "img", 1, "img-fluid", "avatar", "avatar-sm", "rounded-circle", 3, "src"], [1, "ms-2"], [1, "link-default", "fs-14"], [1, "badge", "badge-light", "rounded-pill", "bg-light", "d-inline-flex", "align-items-center", "fs-13", "fw-medium", "mb-0"], [1, "title", "mb-2"], [1, "d-flex", "align-items-center", "mb-3"], [1, "fa-solid", "fa-star", "text-warning", "me-2"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "text-secondary", "mb-0"], ["href", "javascript:void(0);", 1, "btn", "btn-dark", "btn-sm", "d-inline-flex", "align-items-center", 3, "click"], [1, "isax", "isax-arrow-right-3", "ms-1"], [1, "badge", "text-bg-danger"]],
      template: function CourseGridComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Filters");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, " Clear ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "h2", 10)(14, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, " Categories ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 13)(18, "div", 14)(19, "div")(20, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "input", 16)(22, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, " Backend (3) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div")(25, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](26, "input", 16)(27, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, " CSS (2) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div")(30, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](31, "input", 16)(32, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, " Frontend (2) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div")(35, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](36, "input", 16)(37, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, " General (2) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div")(40, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](41, "input", 18)(42, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, " IT & Software (2) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "div")(45, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](46, "input", 16)(47, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, " Photography (2) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "div")(50, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](51, "input", 16)(52, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, " Programming Language (3) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "div")(55, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](56, "input", 16)(57, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](58, " Technology (2) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](60, "See More");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "div", 9)(62, "h2", 21)(63, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](64, " Instructors");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](65, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "div", 23)(67, "div", 14)(68, "div")(69, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](70, "input", 16)(71, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](72, " Keny White (10) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "div")(74, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](75, "input", 16)(76, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](77, " Hinata Hyuga (5) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "div")(79, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](80, "input", 16)(81, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](82, " John Doe (3) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "div")(84, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](85, "input", 18)(86, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](87, " Nicole Brown ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](88, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](89, "See More");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](90, "div", 9)(91, "h2", 24)(92, "a", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](93, " Price");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](94, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](95, "div", 26)(96, "div", 14)(97, "div")(98, "label", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](99, "input", 16)(100, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](101, " All (10) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](102, "div")(103, "label", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](104, "input", 16)(105, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](106, " Free (5) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](107, "div")(108, "label", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](109, "input", 16)(110, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](111, " Paid (3) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](112, "div", 9)(113, "h2", 29)(114, "a", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](115, " Range");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](116, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](117, "div", 31)(118, "div", 14)(119, "div", 32)(120, "mat-slider", 33)(121, "input", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function CourseGridComponent_Template_input_ngModelChange_121_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.startValue, $event) || (ctx.startValue = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("valueChange", function CourseGridComponent_Template_input_valueChange_121_listener() {
            return ctx.applyFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](122, "input", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function CourseGridComponent_Template_input_ngModelChange_122_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.endValue, $event) || (ctx.endValue = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("valueChange", function CourseGridComponent_Template_input_valueChange_122_listener() {
            return ctx.applyFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](123, "div", 9)(124, "h2", 36)(125, "a", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](126, " Level");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](127, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](128, "div", 38)(129, "div", 14)(130, "div")(131, "label", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](132, "input", 16)(133, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](134, "Beginner (10) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](135, "div")(136, "label", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](137, "input", 16)(138, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](139, " Intermediate (5) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](140, "div")(141, "label", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](142, "input", 16)(143, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](144, "Advanced (21) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](145, "div")(146, "label", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](147, "input", 16)(148, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](149, "Expert (3) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](150, "div", 9)(151, "h2", 39)(152, "a", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](153, " Reviews ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](154, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](155, "div", 41)(156, "div", 14)(157, "div")(158, "label", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](159, "input", 16)(160, "span", 17)(161, "i", 42)(162, "i", 42)(163, "i", 42)(164, "i", 42)(165, "i", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](166, "div")(167, "label", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](168, "input", 16)(169, "span", 17)(170, "i", 42)(171, "i", 42)(172, "i", 42)(173, "i", 42)(174, "i", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](175, "div")(176, "label", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](177, "input", 16)(178, "span", 17)(179, "i", 42)(180, "i", 42)(181, "i", 42)(182, "i", 45)(183, "i", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](184, "div")(185, "label", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](186, "input", 16)(187, "span", 17)(188, "i", 42)(189, "i", 42)(190, "i", 45)(191, "i", 45)(192, "i", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](193, "div")(194, "label", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](195, "input", 16)(196, "span", 17)(197, "i", 42)(198, "i", 45)(199, "i", 45)(200, "i", 45)(201, "i", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](202, "div", 46)(203, "div", 47)(204, "div", 48)(205, "div", 49)(206, "div", 50)(207, "h6", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](208);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](209, "div", 52)(210, "div", 53)(211, "form", 54)(212, "div", 55)(213, "div", 56)(214, "a", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](215, "i", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](216, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](217, "i", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](218, "select", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function CourseGridComponent_Template_select_ngModelChange_218_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.sortOption, $event) || (ctx.sortOption = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CourseGridComponent_Template_select_ngModelChange_218_listener() {
            return ctx.applyFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](219, "option", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](220, "Newly Published");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](221, "option", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](222, "Newest");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](223, "option", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](224, "Top Rated");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](225, "option", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](226, "Free Courses");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](227, "div", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](228, "i", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](229, "input", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("ngModelChange", function CourseGridComponent_Template_input_ngModelChange_229_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx.searchTerm, $event) || (ctx.searchTerm = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CourseGridComponent_Template_input_ngModelChange_229_listener() {
            return ctx.applyFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](230, CourseGridComponent_div_230_Template, 4, 0, "div", 69)(231, CourseGridComponent_div_231_Template, 3, 0, "div", 69)(232, CourseGridComponent_div_232_Template, 2, 1, "div", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](233, "div", 48)(234, "div", 71)(235, "p", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](236, "Page 1 of 2");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](237, "div", 73)(238, "ul", 74)(239, "li", 75)(240, "a", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](241, "i", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](242, "li", 78)(243, "a", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](244, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](245, "li", 80)(246, "a", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](247, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](248, "li", 80)(249, "a", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](250, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](251, "li", 81)(252, "a", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](253, "i", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](120);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("displayWith", ctx.formatLabel1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.startValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.endValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](86);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("Showing ", ctx.filteredCourses.length, " of ", ctx.courses.length, " results");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", ctx.routes.courseGrid);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", ctx.routes.courseList);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.sortOption);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("ngModel", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.filteredCourses.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.filteredCourses.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__.MatSliderModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__.MatSlider, _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__.MatSliderRangeThumb, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return CourseGridComponent;
})();

/***/ })

}]);
//# sourceMappingURL=9559.js.map