"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[8815],{

/***/ 88815:
/*!*******************************************************************************!*\
  !*** ./src/app/features/courses/course-category/course-category.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CourseCategoryComponent: () => (/* binding */ CourseCategoryComponent)
/* harmony export */ });
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/course/course.service */ 4856);






const _c0 = a0 => ({
  categoryId: a0
});
function CourseCategoryComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Chargement des cat\u00E9gories...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CourseCategoryComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Aucune cat\u00E9gorie disponible pour le moment.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CourseCategoryComponent_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14)(1, "a", 15)(2, "div", 16)(3, "div", 17)(4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h6", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("cc-disabled", cat_r1.courseCount === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", cat_r1.courseCount > 0 ? ctx_r1.routes.courseListPublic : null)("queryParams", cat_r1.courseCount > 0 ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c0, cat_r1.id) : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-disabled", cat_r1.courseCount === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r1.getCategoryColorClass(cat_r1.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx_r1.getCategoryIconClass(cat_r1.icon, cat_r1.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cat_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", cat_r1.courseCount, " ");
  }
}
function CourseCategoryComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CourseCategoryComponent_div_8_div_1_Template, 10, 12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.categories);
  }
}
let CourseCategoryComponent = /*#__PURE__*/(() => {
  class CourseCategoryComponent {
    courseService;
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    categories = [];
    loading = true;
    constructor(courseService) {
      this.courseService = courseService;
    }
    ngOnInit() {
      this.loadCategories();
    }
    loadCategories() {
      this.loading = true;
      this.courseService.getCategories().subscribe({
        next: cats => {
          const categories = Array.isArray(cats) ? cats : [];
          this.courseService.getPublishedCourses().subscribe({
            next: courses => {
              const list = Array.isArray(courses) ? courses : [];
              this.categories = categories.map(cat => {
                const count = list.filter(c => this.isCourseInCategory(c, cat)).length;
                return {
                  ...cat,
                  courseCount: count
                };
              });
              this.loading = false;
            },
            error: () => {
              this.categories = categories.map(cat => ({
                ...cat,
                courseCount: 0
              }));
              this.loading = false;
            }
          });
        },
        error: () => {
          this.categories = [];
          this.loading = false;
        }
      });
    }
    isCourseInCategory(course, category) {
      const courseCatId = Number(course?.categoryId || course?.category?.id || 0);
      const catId = Number(category?.id || 0);
      if (catId > 0 && courseCatId > 0) {
        return courseCatId === catId;
      }
      const courseName = String(course?.categoryName || course?.category?.name || '').trim().toLowerCase();
      const catName = String(category?.name || '').trim().toLowerCase();
      return !!courseName && !!catName && courseName === catName;
    }
    getCategoryIconClass(icon, categoryName) {
      const name = (categoryName || '').toLowerCase();
      if (name.includes('cloud') || name.includes('aws') || name.includes('azure') || name.includes('gcp')) return 'fa-solid fa-cloud';
      if (name.includes('cyber') || name.includes('securit') || name.includes('security') || name.includes('devsec')) return 'fa-solid fa-shield-halved';
      if (name.includes('devops') || name.includes('cicd') || name.includes('ci/cd') || name.includes(' ops')) return 'fa-solid fa-infinity';
      if (name.includes('network') || name.includes('reseau') || name.includes('réseau')) return 'fa-solid fa-network-wired';
      if (name.includes('mobile') || name.includes('android') || name.includes('ios') || name.includes('flutter')) return 'fa-solid fa-mobile-screen';
      if (name.includes('design') || name.includes('ui') || name.includes('ux') || name.includes('graph')) return 'fa-solid fa-pen-ruler';
      if (name.includes('market') || name.includes('business') || name.includes('commerce') || name.includes('sales')) return 'fa-solid fa-chart-line';
      if (name.includes('program') || name.includes('dev') || name.includes('web') || name.includes('informat') || name.includes('code')) return 'fa-solid fa-code';
      if (name.includes('data') || name.includes(' ai') || name.includes(' ia') || name.includes('machine') || name.includes('intelligence')) return 'fa-solid fa-brain';
      if (name.includes('lang') || name.includes('communication')) return 'fa-solid fa-language';
      if (icon && icon.startsWith('fa-')) return icon;
      return 'fa-solid fa-layer-group';
    }
    getCategoryColorClass(categoryName) {
      const name = (categoryName || '').toLowerCase();
      if (name.includes('devsec') || name.includes('cyber') || name.includes('security')) return 'cat-red';
      if (name.includes('cloud')) return 'cat-sky';
      if (name.includes('devops')) return 'cat-amber';
      if (name.includes('network') || name.includes('reseau') || name.includes('réseau') || name.includes('mobile')) return 'cat-teal';
      if (name.includes('design') || name.includes('ui') || name.includes('ux')) return 'cat-pink';
      if (name.includes('market') || name.includes('business') || name.includes('commerce')) return 'cat-emerald';
      if (name.includes('program') || name.includes('dev') || name.includes('web') || name.includes('code')) return 'cat-indigo';
      if (name.includes('data') || name.includes(' ai') || name.includes(' ia')) return 'cat-purple';
      return 'cat-slate';
    }
    static ɵfac = function CourseCategoryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CourseCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_4__.CourseService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: CourseCategoryComponent,
      selectors: [["app-course-category"]],
      decls: 9,
      vars: 3,
      consts: [[1, "course-category"], [1, "container"], [1, "mb-1"], ["class", "cc-loading text-center py-5", 4, "ngIf"], ["class", "cc-empty text-center py-5", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "cc-loading", "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "mt-3", "mb-0", "text-muted"], [1, "cc-empty", "text-center", "py-5"], [1, "fa-solid", "fa-compass"], [1, "mb-0", "mt-2"], [1, "row"], ["class", "col-lg-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6"], [1, "course-category-item", "cc-card-link", 3, "routerLink", "queryParams"], [1, "d-flex", "flex-row", "justify-content-between", "align-items-center"], [1, "d-flex", "align-items-center", "cc-link-wrap"], [1, "cc-icon-wrap", 3, "ngClass"], [1, "pe-2", "mb-0"], [1, "cat-count", "text-white", "fw-medium", "bg-dark", "d-inline-flex"]],
      template: function CourseCategoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Nos cat\u00E9gories de cours");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Trouvez le domaine qui vous passionne et commencez d\u00E8s aujourd'hui.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CourseCategoryComponent_div_6_Template, 4, 0, "div", 3)(7, CourseCategoryComponent_div_7_Template, 4, 0, "div", 4)(8, CourseCategoryComponent_div_8_Template, 2, 1, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.categories.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.categories.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: [".course-category[_ngcontent-%COMP%] {\n  padding: 72px 0;\n}\n\n.course-category[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.course-category[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.course-category[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n  color: #6b7280;\n}\n\n.course-category-item[_ngcontent-%COMP%] {\n  border: 1px solid #e6eaf2;\n  border-radius: 14px;\n  background: #ffffff;\n  padding: 14px 18px;\n  margin-bottom: 16px;\n  min-height: 78px;\n  display: flex;\n  align-items: center;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n\n.course-category-item[_ngcontent-%COMP%]:hover {\n  border-color: #d7ddeb;\n  box-shadow: 0 4px 10px rgba(15, 23, 42, 0.04);\n}\n\n.cc-card-link[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n}\n\n.cc-card-link.cc-disabled[_ngcontent-%COMP%] {\n  cursor: default;\n}\n\n.cc-link-wrap[_ngcontent-%COMP%] {\n  min-width: 0;\n  gap: 10px;\n}\n\n.cc-link-wrap[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.cc-icon-wrap[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 12px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 18px;\n}\n\n.cat-indigo[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #eef2ff, #c7d2fe);\n  color: #4338ca;\n}\n\n.cat-sky[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #e0f2fe, #bae6fd);\n  color: #0369a1;\n}\n\n.cat-red[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #fff1f2, #fecdd3);\n  color: #be123c;\n}\n\n.cat-amber[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #fff7ed, #fed7aa);\n  color: #c2410c;\n}\n\n.cat-purple[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #faf5ff, #e9d5ff);\n  color: #7e22ce;\n}\n\n.cat-pink[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #fdf2f8, #fbcfe8);\n  color: #be185d;\n}\n\n.cat-teal[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f0fdfa, #99f6e4);\n  color: #0f766e;\n}\n\n.cat-emerald[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f0fdf4, #bbf7d0);\n  color: #15803d;\n}\n\n.cat-slate[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f8fafc, #e2e8f0);\n  color: #475569;\n}\n\n.cat-count[_ngcontent-%COMP%] {\n  min-width: 40px;\n  height: 30px;\n  border-radius: 999px;\n  align-items: center;\n  justify-content: center;\n  padding: 0 10px;\n  font-size: 12px;\n}\n\n.cc-loading[_ngcontent-%COMP%]   .spinner-border[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n}\n\n.cc-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  color: #6b7280;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY291cnNlcy9jb3Vyc2UtY2F0ZWdvcnkvY291cnNlLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZUFBQTtBQUNEOztBQUVBOztFQUVDLGtCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxtQkFBQTtFQUNBLGNBQUE7QUFDRDs7QUFFQTtFQUNDLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHdEQUFBO0FBQ0Q7O0FBRUE7RUFDQyxxQkFBQTtFQUNBLDZDQUFBO0FBQ0Q7O0FBRUE7RUFDQyxjQUFBO0VBQ0EscUJBQUE7QUFDRDs7QUFFQTtFQUNDLGVBQUE7QUFDRDs7QUFFQTtFQUNDLFlBQUE7RUFDQSxTQUFBO0FBQ0Q7O0FBRUE7RUFDQyxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRDs7QUFFQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNEOztBQUVBO0VBQWMscURBQUE7RUFBdUQsY0FBQTtBQUdyRTs7QUFGQTtFQUFXLHFEQUFBO0VBQXVELGNBQUE7QUFPbEU7O0FBTkE7RUFBVyxxREFBQTtFQUF1RCxjQUFBO0FBV2xFOztBQVZBO0VBQWEscURBQUE7RUFBdUQsY0FBQTtBQWVwRTs7QUFkQTtFQUFjLHFEQUFBO0VBQXVELGNBQUE7QUFtQnJFOztBQWxCQTtFQUFZLHFEQUFBO0VBQXVELGNBQUE7QUF1Qm5FOztBQXRCQTtFQUFZLHFEQUFBO0VBQXVELGNBQUE7QUEyQm5FOztBQTFCQTtFQUFlLHFEQUFBO0VBQXVELGNBQUE7QUErQnRFOztBQTlCQTtFQUFhLHFEQUFBO0VBQXVELGNBQUE7QUFtQ3BFOztBQWpDQTtFQUNDLGVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFvQ0Q7O0FBakNBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUFvQ0Q7O0FBakNBO0VBQ0Msa0JBQUE7RUFDQSxjQUFBO0FBb0NEIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdXJzZS1jYXRlZ29yeSB7XHJcblx0cGFkZGluZzogNzJweCAwO1xyXG59XHJcblxyXG4uY291cnNlLWNhdGVnb3J5IGgyLFxyXG4uY291cnNlLWNhdGVnb3J5IHAge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvdXJzZS1jYXRlZ29yeSBwIHtcclxuXHRtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG5cdGNvbG9yOiAjNmI3MjgwO1xyXG59XHJcblxyXG4uY291cnNlLWNhdGVnb3J5LWl0ZW0ge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNlNmVhZjI7XHJcblx0Ym9yZGVyLXJhZGl1czogMTRweDtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG5cdHBhZGRpbmc6IDE0cHggMThweDtcclxuXHRtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG5cdG1pbi1oZWlnaHQ6IDc4cHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzIGVhc2UsIGJveC1zaGFkb3cgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4uY291cnNlLWNhdGVnb3J5LWl0ZW06aG92ZXIge1xyXG5cdGJvcmRlci1jb2xvcjogI2Q3ZGRlYjtcclxuXHRib3gtc2hhZG93OiAwIDRweCAxMHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wNCk7XHJcbn1cclxuXHJcbi5jYy1jYXJkLWxpbmsge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmNjLWNhcmQtbGluay5jYy1kaXNhYmxlZCB7XHJcblx0Y3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG4uY2MtbGluay13cmFwIHtcclxuXHRtaW4td2lkdGg6IDA7XHJcblx0Z2FwOiAxMHB4O1xyXG59XHJcblxyXG4uY2MtbGluay13cmFwIGg2IHtcclxuXHRjb2xvcjogIzBmMTcyYTtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLmNjLWljb24td3JhcCB7XHJcblx0d2lkdGg6IDQ2cHg7XHJcblx0aGVpZ2h0OiA0NnB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDEycHg7XHJcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRmbGV4LXNocmluazogMDtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5jYXQtaW5kaWdvIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2VlZjJmZiwgI2M3ZDJmZSk7IGNvbG9yOiAjNDMzOGNhOyB9XHJcbi5jYXQtc2t5IHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UwZjJmZSwgI2JhZTZmZCk7IGNvbG9yOiAjMDM2OWExOyB9XHJcbi5jYXQtcmVkIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmZjFmMiwgI2ZlY2RkMyk7IGNvbG9yOiAjYmUxMjNjOyB9XHJcbi5jYXQtYW1iZXIgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmZmN2VkLCAjZmVkN2FhKTsgY29sb3I6ICNjMjQxMGM7IH1cclxuLmNhdC1wdXJwbGUgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmFmNWZmLCAjZTlkNWZmKTsgY29sb3I6ICM3ZTIyY2U7IH1cclxuLmNhdC1waW5rIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZkZjJmOCwgI2ZiY2ZlOCk7IGNvbG9yOiAjYmUxODVkOyB9XHJcbi5jYXQtdGVhbCB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmMGZkZmEsICM5OWY2ZTQpOyBjb2xvcjogIzBmNzY2ZTsgfVxyXG4uY2F0LWVtZXJhbGQgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjBmZGY0LCAjYmJmN2QwKTsgY29sb3I6ICMxNTgwM2Q7IH1cclxuLmNhdC1zbGF0ZSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGZhZmMsICNlMmU4ZjApOyBjb2xvcjogIzQ3NTU2OTsgfVxyXG5cclxuLmNhdC1jb3VudCB7XHJcblx0bWluLXdpZHRoOiA0MHB4O1xyXG5cdGhlaWdodDogMzBweDtcclxuXHRib3JkZXItcmFkaXVzOiA5OTlweDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdHBhZGRpbmc6IDAgMTBweDtcclxuXHRmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5jYy1sb2FkaW5nIC5zcGlubmVyLWJvcmRlciB7XHJcblx0d2lkdGg6IDJyZW07XHJcblx0aGVpZ2h0OiAycmVtO1xyXG59XHJcblxyXG4uY2MtZW1wdHkgaSB7XHJcblx0Zm9udC1zaXplOiAxLjM1cmVtO1xyXG5cdGNvbG9yOiAjNmI3MjgwO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return CourseCategoryComponent;
})();

/***/ }),

/***/ 92643:
/*!*************************************************!*\
  !*** ./src/app/shared/service/routes/routes.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
const routes = {
  // SuperAdmin Routes
  superadmin_dashboard: '/superadmin/superadmin-dashboard',
  superadmin_users: '/superadmin/superadmin-users',
  superadminSettings: '/superadmin/superadmin-settings',
  superadmin_logs: '/superadmin/superadmin-logs',
  // Admin Routes
  admin_dashboard: '/admin/admin-dashboard',
  admin_users: '/admin/admin-users',
  admin_courses: '/admin/admin-courses',
  admin_categories: '/admin/admin-categories',
  admin_blog: '/admin/admin-blog',
  admin_tickets: '/admin/admin-tickets',
  admin_payouts: '/admin/admin-payouts',
  admin_detection: '/admin/admin-detection',
  adminAnalytics: '/admin/admin-analytics',
  adminSettings: '/admin/admin-settings',
  // Recruiter Routes
  recruiter_dashboard: '/recruiter/recruiter-dashboard',
  recruiter_shared_profiles: '/recruiter/recruiter-shared-profiles',
  recruiter_certified_students: '/recruiter/recruiter-certified-students',
  recruiter_job_offers: '/recruiter/recruiter-job-offers',
  recruiter_messages: '/recruiter/recruiter-messages',
  recruiterSettings: '/recruiter/settings/recruiter-settings',
  recruiterChangePassword: '/recruiter/settings/recruiter-change-password',
  forceChangePassword: '/auth/force-change-password',
  face_register: '/auth/face-register',
  // Instructor Routes
  instructor: '/instructor/',
  instructor_dashboard: '/instructor/instructor-dashboard',
  instructor_payouts: '/instructor/instructor-payouts',
  instructor_tickets: '/instructor/instructor-tickets',
  instructorWishlist: '/instructor/instructor-wishlist',
  instructorWithdraw: '/instructor/instructor-withdraw',
  instructorProfile: '/instructor/instructor-profile',
  instructorQuizQuestion: '/instructor/instructor-quiz-questions',
  instructorQuiz: '/instructor/instructor-quiz',
  instructorCertificate: '/instructor/instructor-certificate',
  instructorEarning: '/instructor/instructor-payouts',
  instructorStatements: '/instructor/instructor-statements',
  quiz: 'quiz',
  studentsList: '/instructor/students-list',
  studentsGrid: '/instructor/students-grid',
  studentsDetails: '/instructor/students-details',
  instructorQuizResult: '/instructor/instructor-quiz-results',
  instructorCourse: '/instructor/instructor-course',
  instructorNotifications: '/instructor/notifications',
  instructorAddCourse: '/instructor/add-course',
  instructorEditCourse: '/instructor/edit-course',
  instructorMyCourses: '/instructor/instructor-course',
  instructorCourseGrid: '/instructor/instructor-course-grid',
  instructorTickets: '/instructor/instructor-tickets',
  instructorMessage: '/instructor/instructor-message',
  instructorQuizDetails: '/instructor/instructor-quiz-details',
  instructorSettingWithdraw: '/instructor/settings/instructor-setting-withdraw',
  instructorSettingNotifications: '/instructor/settings/instructor-setting-notifications',
  instructorPlans: '/instructor/settings/instructor-plans',
  instructorIntegrations: '/instructor/settings/instructor-integrations',
  instructorLinkedAccounts: '/instructor/settings/instructor-linked-accounts',
  instructorSocialProfiles: '/instructor/settings/instructor-social-profiles',
  instructorDeleteAccount: '/instructor/settings/instructor-delete-account',
  instructorChangePassword: '/instructor/settings/instructor-change-password',
  instructorSettings: '/instructor/settings/instructor-settings',
  instructorDetection: '/instructor/instructor-detection',
  instructorAnalytics: '/instructor/instructor-analytics',
  // Student Routes
  students: '/student/',
  students_profile: '/student/student-profile',
  students_Dashboard: '/student/student-dashboard',
  course_student: '/student/course-student',
  student_Certificate: '/student/student-certificate',
  student_Wishlist: '/student/student-wishlist',
  view_invoice_student: '/student/view-invoice',
  transactions_student: '/student/transactions-student',
  students_security: '/student/setting-student-security',
  students_notification: '/student/setting-student-notification',
  students_privacy: '/student/setting-student-privacy',
  students_delete: '/student/setting-student-delete-profile',
  students_accounts: '/student/setting-student-accounts',
  students_referral: '/student/student-referral',
  students_subscription: '/student/setting-student-subscription',
  students_billing: '/student/setting-student-billing',
  students_payments: '/student/setting-student-payment',
  students_invoice: '/student/setting-student-invoice',
  students_tickets: '/student/student-tickets',
  students_message: '/student/student-message',
  students_quiz_question: '/student/student-quiz-questions',
  students_quiz: '/student/student-quiz',
  studentsQuizQuestion: '/student/student-quiz-questions',
  studentsQuiz: '/student/student-quiz',
  studentProfile: '/student/student-profile',
  studentMessages: '/student/student-message',
  studentsMessage: '/student/student-message',
  studentOrderHistory: '/student/student-order-history',
  studentWishlist: '/student/student-wishlist',
  studentCourses: '/student/student-courses',
  studentMyCourses: '/student/student-my-courses',
  studentReviews: '/student/student-reviews',
  studentQuizDetails: '/student/student-quiz-details',
  studentQuiz: '/student/student-quiz',
  studentLinkedAccount: '/student/settings/student-linked-accounts',
  studentNotification: '/student/settings/student-notifications',
  students_social_profile: '/student/settings/student-social-profile',
  studentChangePassword: '/student/settings/student-change-password',
  studentSettings: '/student/settings/student-settings',
  studentBillingAddress: '/student/settings/student-billing-address',
  studentQa: '/student/student-qa',
  student_job_offers: '/student/student-job-offers',
  studentChallenges: '/student/student-challenges',
  studentPointsExchange: '/student/student-points-exchange',
  // Pages Routes
  pages: '/pages/',
  page_notifications: '/pages/notifications',
  becomeAnExpert: '/pages/become-an-instructor',
  testimonial: '/pages/testimonial',
  aboutUs: '/pages/about-us',
  contactUs: '/pages/contact-us',
  page_pricing_plan: '/pages/pricing-plan',
  page_faq: '/pages/faq',
  page_term_condition: '/pages/term-condition',
  page_privacy_policy: '/pages/privacy-policy',
  instructorDetails: '/pages/instructor-details',
  instructorGrid: '/pages/instructor-grid',
  instructorList: '/pages/instructor-list',
  // Blog Routes
  blog: '/blog/',
  blog_details_left_sidebar: '/blog/blog-details-left-sidebar',
  blog_details_right_sidebar: '/blog/blog-details-right-sidebar',
  blog_details: '/blog/blog-details',
  blog_masonry: '/blog/blog-masonry',
  blog_grid: '/blog/blog-grid',
  blog_grid2: '/blog/blog-2-grid',
  blog_grid3: '/blog/blog-3-grid',
  blog_carousal: '/blog/blog-carousal',
  blog_left_sidebar: '/blog/blog-left-sidebar',
  blog_right_sidebar: '/blog/blog-right-sidebar',
  // Auth Routes
  auth: '/auth/',
  forgot_password: '/auth/forgot-password',
  login: '/auth/login',
  register: '/auth/register',
  setPassword: '/auth/set-password',
  otp: '/auth/otp',
  lockScreen: '/auth/lock-screen',
  under_construction: '/under-construction',
  comming_soon: '/coming-soon',
  error_404: '/error-404',
  error_500: '/error-500',
  // Home Routes
  home: '/index',
  home2: '/index-two',
  home3: '/index-three',
  home4: '/index-four',
  home5: '/index-five',
  home6: '/index-six',
  // Courses Routes
  courses: '/courses',
  courseGrid: '/courses/course-grid',
  courseList: '/courses/course-list',
  courseCategory: '/courses/course-category',
  courseCategory2: '/courses/course-category-2',
  courseCategory3: '/courses/course-category-3',
  courseResume: '/courses/course-resume',
  courseWatch: '/courses/course-watch',
  cart: '/courses/cart',
  checkout: '/courses/checkout',
  courseDetails: '/courses/course-details',
  courseDetails2: '/courses/course-details-2',
  courseListPublic: '/courses/course-list-public',
  verifyCertificate: '/courses/certificates/verify',
  addCourse: '/courses/add-course',
  editCourse: '/courses/edit-course'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ })

}]);
//# sourceMappingURL=8815.js.map