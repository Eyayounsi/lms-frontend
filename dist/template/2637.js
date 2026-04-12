"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[2637],{

/***/ 12637:
/*!**********************************************************************************!*\
  !*** ./src/app/features/blog/blog-right-sidebar/blog-right-sidebar.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogRightSidebarComponent: () => (/* binding */ BlogRightSidebarComponent)
/* harmony export */ });
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);




let BlogRightSidebarComponent = /*#__PURE__*/(() => {
  class BlogRightSidebarComponent {
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    static ɵfac = function BlogRightSidebarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BlogRightSidebarComponent)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: BlogRightSidebarComponent,
      selectors: [["app-blog-right-sidebar"]],
      decls: 280,
      vars: 30,
      consts: [[1, "content"], [1, "container"], [1, "row"], [1, "col-lg-8"], [1, "col-md-6"], [1, "blog"], [1, "blog-image"], [3, "routerLink"], ["src", "./assets/img/blog/blog-7.jpg", "alt", "img", 1, "img-fluid"], [1, "blog-item"], [1, "badge", "bg-success", "mb-2"], [1, "mb-2"], [1, "text-truncate", "line-clamb-2"], [1, "blog-info"], [1, "d-flex", "align-items-center", "flex-wrap", "justify-content-between"], [1, "d-flex", "align-items-center", "user-profile"], [1, "user-img", 3, "routerLink"], ["src", "./assets/img/user/user-52.jpg", "alt", "img", 1, "rounded-pill", "w-auto"], [1, "user-name", 3, "routerLink"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], ["src", "./assets/img/icons/calendar.svg", "alt", "img", 1, "me-1"], ["src", "./assets/img/blog/blog-8.jpg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/user/user-01.jpg", "alt", "img", 1, "rounded-pill", "w-auto"], ["src", "./assets/img/blog/blog-9.jpg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/user/user-02.jpg", "alt", "img", 1, "rounded-pill", "w-auto"], ["src", "./assets/img/blog/blog-10.jpg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/user/user-03.jpg", "alt", "img", 1, "rounded-pill", "w-auto"], ["src", "./assets/img/blog/blog-11.jpg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/user/user-05.jpg", "alt", "img", 1, "rounded-pill", "w-auto"], ["src", "./assets/img/blog/blog-12.jpg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/user/user-06.jpg", "alt", "img", 1, "rounded-pill", "w-auto"], [1, "row", "align-items-center"], [1, "col-md-12"], [1, "pagination", "justify-content-center"], [1, "page-item", "prev"], ["href", "javascript:void(0);", "tabindex", "-1", 1, "page-link"], [1, "fas", "fa-angle-left"], [1, "page-item", "first-page", "active"], ["href", "javascript:void(0);", 1, "page-link"], [1, "page-item"], [1, "page-item", "next"], [1, "fas", "fa-angle-right"], [1, "col-lg-4", "sidebar-left", "mt-4", "mt-lg-0", "theiaStickySidebar"], [1, "search-widget", "blog-search", "blog-widget"], [1, "mb-3", "fs-18"], [1, "search-form"], [1, "position-relative"], ["type", "text", "placeholder", "Search...", 1, "form-control"], ["type", "submit", 1, "search-btn"], [1, "isax", "isax-search-normal-1"], [1, "blog-widget"], [1, "fs-18", "mb-3"], [1, "categories-list"], ["href", "javascript:void(0);"], [1, "isax", "isax-arrow-right-3", "fs-14", "text-secondary", "fw-bold"], [1, "float-end"], [1, "recent-blog-list"], [1, "post-thumb"], ["src", "assets/img/blog/recent-blog-1.jpg", "alt", "Img", 1, "img-fluid"], [1, "post-info"], [1, "d-flex", "align-items-center"], ["src", "assets/img/icons/calendar2.svg", "alt", "Img", 1, "img-fluid", "me-1"], ["src", "assets/img/blog/recent-blog-2.jpg", "alt", "Img", 1, "img-fluid"], [1, "mb-0"], ["src", "assets/img/blog/recent-blog-3.jpg", "alt", "Img", 1, "img-fluid"], [1, "card-body"], [1, "latest-tags"], ["href", "javascript:void(0);", 1, "tag", "rounded-1", "p-2", "fs-10", "fw-medium", "d-flex"]],
      template: function BlogRightSidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 2)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "img", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9)(11, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Education");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "h5", 11)(14, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Learn Web App Development from Experts in 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Master the art of web application development with expert-led courses that cover the latest tools, fram...");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 13)(19, "div", 14)(20, "div", 15)(21, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "img", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "John Miller");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "ul", 19)(26, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "img", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "23 Apr 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 4)(31, "div", 5)(32, "div", 6)(33, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "img", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 9)(36, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Guides");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "h5", 11)(39, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Expand Your Career Opportunities With Python");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Unlock limitless career opportunities by mastering Python, one of the most versatile and in-demand ...");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 13)(44, "div", 14)(45, "div", 15)(46, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "img", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Cedric Glenn");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "ul", 19)(51, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "img", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "20 Apr 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 4)(56, "div", 5)(57, "div", 6)(58, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](59, "img", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 9)(61, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Technical");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "h5", 11)(64, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Learn Mobile Applications Development from Experts");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Elevate your skills with expert-led training in mobile application development! Learn to design, develop ...");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 13)(69, "div", 14)(70, "div", 15)(71, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "img", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "John Reyes");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "ul", 19)(76, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](77, "img", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "04 Apr 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 4)(81, "div", 5)(82, "div", 6)(83, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](84, "img", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 9)(86, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "Guides");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "h5", 11)(89, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "Complete PHP Programming Career Guideline");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, "Master PHP programming with our comprehensive career guideline! Learn the fundamentals, explore ...");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "div", 13)(94, "div", 14)(95, "div", 15)(96, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](97, "img", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, "Donald Vesely");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "ul", 19)(101, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](102, "img", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, "24 Mar 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 4)(106, "div", 5)(107, "div", 6)(108, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](109, "img", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "div", 9)(111, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, "Education");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "h5", 11)(114, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115, "The Complete JavaScript Course for Beginners");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, "Dive into the world of JavaScript with our complete beginner-friendly course! Learn essential concepts...");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "div", 13)(119, "div", 14)(120, "div", 15)(121, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](122, "img", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124, "Richard Garza");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "ul", 19)(126, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](127, "img", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129, "16 Mar 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "div", 4)(131, "div", 5)(132, "div", 6)(133, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](134, "img", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "div", 9)(136, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, "Guides");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "h5", 11)(139, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](140, "Programming Content Guideline For Beginners");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](142, "Kickstart your programming journey with beginner-friendly guidelines designed to simplify coding ...");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "div", 13)(144, "div", 14)(145, "div", 15)(146, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](147, "img", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](149, "Lewis Devine");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "ul", 19)(151, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](152, "img", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](154, "10 Mar 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "div", 31)(156, "div", 32)(157, "ul", 33)(158, "li", 34)(159, "a", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](160, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "li", 37)(162, "a", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](163, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "li", 39)(165, "a", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](166, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](167, "li", 39)(168, "a", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](169, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](170, "li", 40)(171, "a", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](172, "i", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](173, "div", 42)(174, "div", 43)(175, "div")(176, "h5", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](177, "Search");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](178, "form", 45)(179, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](180, "input", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](181, "button", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](182, "i", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](183, "div", 50)(184, "h5", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](185, "Categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](186, "div", 52)(187, "h6")(188, "a", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](189, "i", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](190, " Business");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](191, "span", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](192, "04");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](193, "h6")(194, "a", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](195, "i", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](196, " Education");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](197, "span", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](198, "03");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](199, "h6")(200, "a", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](201, "i", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](202, " Graphics Design");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](203, "span", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](204, "14");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](205, "h6")(206, "a", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](207, "i", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](208, " Programming");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](209, "span", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](210, "12");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](211, "h6")(212, "a", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](213, "i", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](214, " Web Design");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](215, "span", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](216, "15");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](217, "div", 50)(218, "h5", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](219, "Recent Blogs");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](220, "ul", 56)(221, "li")(222, "div", 57)(223, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](224, "img", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](225, "div", 59)(226, "h6", 12)(227, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](228, "Learn Webs Applications Development from Experts");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](229, "p", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](230, "img", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](231, "20 Apr 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](232, "li")(233, "div", 57)(234, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](235, "img", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](236, "div", 59)(237, "h6", 12)(238, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](239, "Expand Your Career Opportunities With Python");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](240, "p", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](241, "img", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](242, "16 Apr 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](243, "li", 63)(244, "div", 57)(245, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](246, "img", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](247, "div", 59)(248, "h6", 12)(249, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](250, "Learn Webs Applications Development from Experts");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](251, "p", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](252, "img", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](253, "12 Apr 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](254, "div", 50)(255, "h5", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](256, "Latest Tags");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](257, "div", 65)(258, "ul", 66)(259, "li")(260, "a", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](261, "HTML");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](262, "li")(263, "a", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](264, "Javascript");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](265, "li")(266, "a", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](267, "Benefits");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](268, "li")(269, "a", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](270, "Web Design");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](271, "li")(272, "a", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](273, "Programming");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](274, "li")(275, "a", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](276, "Career Growth");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](277, "li")(278, "a", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](279, "Guidelines");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](75);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return BlogRightSidebarComponent;
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
//# sourceMappingURL=2637.js.map