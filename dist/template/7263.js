"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[7263],{

/***/ 17263:
/*!********************************************************************************!*\
  !*** ./src/app/features/blog/blog-left-sidebar/blog-left-sidebar.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogLeftSidebarComponent: () => (/* binding */ BlogLeftSidebarComponent)
/* harmony export */ });
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);




let BlogLeftSidebarComponent = /*#__PURE__*/(() => {
  class BlogLeftSidebarComponent {
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    static ɵfac = function BlogLeftSidebarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BlogLeftSidebarComponent)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: BlogLeftSidebarComponent,
      selectors: [["app-blog-left-sidebar"]],
      decls: 280,
      vars: 30,
      consts: [[1, "content"], [1, "container"], [1, "row"], [1, "col-lg-4", "sidebar-left", "mt-4", "mt-lg-0", "theiaStickySidebar"], [1, "search-widget", "blog-search", "blog-widget"], [1, "mb-3", "fs-18"], [1, "search-form"], [1, "position-relative"], ["type", "text", "placeholder", "Search...", 1, "form-control"], ["type", "submit", 1, "search-btn"], [1, "isax", "isax-search-normal-1"], [1, "blog-widget"], [1, "fs-18", "mb-3"], [1, "categories-list"], ["href", "javascript:void(0);"], [1, "isax", "isax-arrow-right-3", "fs-14", "text-secondary", "fw-bold"], [1, "float-end"], [1, "recent-blog-list"], [1, "post-thumb"], [3, "routerLink"], ["src", "assets/img/blog/recent-blog-1.jpg", "alt", "Img", 1, "img-fluid"], [1, "post-info"], [1, "text-truncate", "line-clamb-2"], [1, "d-flex", "align-items-center"], ["src", "assets/img/icons/calendar2.svg", "alt", "Img", 1, "img-fluid", "me-1"], ["src", "assets/img/blog/recent-blog-2.jpg", "alt", "Img", 1, "img-fluid"], [1, "mb-0"], ["src", "assets/img/blog/recent-blog-3.jpg", "alt", "Img", 1, "img-fluid"], [1, "card-body"], [1, "latest-tags"], ["href", "javascript:void(0);", 1, "tag", "rounded-1", "p-2", "fs-10", "fw-medium", "d-flex"], [1, "col-lg-8"], [1, "col-md-6"], [1, "blog"], [1, "blog-image"], ["src", "./assets/img/blog/blog-7.jpg", "alt", "img", 1, "img-fluid"], [1, "blog-item"], [1, "badge", "bg-success", "mb-2"], [1, "mb-2"], [1, "blog-info"], [1, "d-flex", "align-items-center", "flex-wrap", "justify-content-between"], [1, "d-flex", "align-items-center", "user-profile"], [1, "user-img", 3, "routerLink"], ["src", "./assets/img/user/user-52.jpg", "alt", "img", 1, "rounded-pill", "w-auto"], [1, "user-name", 3, "routerLink"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], ["src", "./assets/img/icons/calendar.svg", "alt", "img", 1, "me-1"], ["src", "./assets/img/blog/blog-8.jpg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/user/user-01.jpg", "alt", "img", 1, "rounded-pill", "w-auto"], ["src", "./assets/img/blog/blog-9.jpg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/user/user-02.jpg", "alt", "img", 1, "rounded-pill", "w-auto"], ["src", "./assets/img/blog/blog-10.jpg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/user/user-03.jpg", "alt", "img", 1, "rounded-pill", "w-auto"], ["src", "./assets/img/blog/blog-11.jpg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/user/user-05.jpg", "alt", "img", 1, "rounded-pill", "w-auto"], ["src", "./assets/img/blog/blog-12.jpg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/user/user-06.jpg", "alt", "img", 1, "rounded-pill", "w-auto"], [1, "row", "align-items-center"], [1, "col-md-12"], [1, "pagination", "justify-content-center"], [1, "page-item", "prev"], ["href", "javascript:void(0);", "tabindex", "-1", 1, "page-link"], [1, "fas", "fa-angle-left"], [1, "page-item", "first-page", "active"], ["href", "javascript:void(0);", 1, "page-link"], [1, "page-item"], [1, "page-item", "next"], [1, "fas", "fa-angle-right"]],
      template: function BlogLeftSidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div")(6, "h5", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Search");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "form", 6)(9, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 11)(14, "h5", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 13)(17, "h6")(18, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " Business");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "04");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "h6")(24, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " Education");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "03");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "h6")(30, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " Graphics Design");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "14");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "h6")(36, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, " Programming");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "12");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "h6")(42, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, " Web Design");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "15");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 11)(48, "h5", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Recent Blogs");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "ul", 17)(51, "li")(52, "div", 18)(53, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "img", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 21)(56, "h6", 22)(57, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Learn Webs Applications Development from Experts");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "p", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "img", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "20 Apr 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "li")(63, "div", 18)(64, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "img", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 21)(67, "h6", 22)(68, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Expand Your Career Opportunities With Python");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "p", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "img", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "16 Apr 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "li", 26)(74, "div", 18)(75, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](76, "img", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 21)(78, "h6", 22)(79, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "Learn Webs Applications Development from Experts");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "p", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](82, "img", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "12 Apr 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 11)(85, "h5", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "Latest Tags");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "div", 28)(88, "ul", 29)(89, "li")(90, "a", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "HTML");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "li")(93, "a", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "Javascript");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "li")(96, "a", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "Benefits");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "li")(99, "a", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "Web Design");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "li")(102, "a", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, "Programming");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "li")(105, "a", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "Career Growth");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "li")(108, "a", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109, "Guidelines");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "div", 31)(111, "div", 2)(112, "div", 32)(113, "div", 33)(114, "div", 34)(115, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](116, "img", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "div", 36)(118, "span", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, "Education");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "h5", 38)(121, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](122, "Learn Web App Development from Experts in 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "p", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124, "Master the art of web application development with expert-led courses that cover the latest tools, fram...");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "div", 39)(126, "div", 40)(127, "div", 41)(128, "a", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](129, "img", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "a", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](131, "John Miller");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "ul", 45)(133, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](134, "img", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](136, "23 Apr 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "div", 32)(138, "div", 33)(139, "div", 34)(140, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](141, "img", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "div", 36)(143, "span", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144, "Guides");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "h5", 38)(146, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](147, "Expand Your Career Opportunities With Python");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "p", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](149, "Unlock limitless career opportunities by mastering Python, one of the most versatile and in-demand ...");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "div", 39)(151, "div", 40)(152, "div", 41)(153, "a", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](154, "img", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "a", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](156, "Cedric Glenn");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](157, "ul", 45)(158, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](159, "img", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](160, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](161, "20 Apr 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](162, "div", 32)(163, "div", 33)(164, "div", 34)(165, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](166, "img", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](167, "div", 36)(168, "span", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](169, "Technical");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](170, "h5", 38)(171, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](172, "Learn Mobile Applications Development from Experts");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](173, "p", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](174, "Elevate your skills with expert-led training in mobile application development! Learn to design, develop ...");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](175, "div", 39)(176, "div", 40)(177, "div", 41)(178, "a", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](179, "img", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](180, "a", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](181, "John Reyes");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](182, "ul", 45)(183, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](184, "img", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](185, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](186, "04 Apr 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](187, "div", 32)(188, "div", 33)(189, "div", 34)(190, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](191, "img", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](192, "div", 36)(193, "span", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](194, "Guides");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](195, "h5", 38)(196, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](197, "Complete PHP Programming Career Guideline");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](198, "p", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](199, "Master PHP programming with our comprehensive career guideline! Learn the fundamentals, explore ...");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](200, "div", 39)(201, "div", 40)(202, "div", 41)(203, "a", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](204, "img", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](205, "a", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](206, "Donald Vesely");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](207, "ul", 45)(208, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](209, "img", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](210, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](211, "24 Mar 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](212, "div", 32)(213, "div", 33)(214, "div", 34)(215, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](216, "img", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](217, "div", 36)(218, "span", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](219, "Education");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](220, "h5", 38)(221, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](222, "The Complete JavaScript Course for Beginners");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](223, "p", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](224, "Dive into the world of JavaScript with our complete beginner-friendly course! Learn essential concepts...");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](225, "div", 39)(226, "div", 40)(227, "div", 41)(228, "a", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](229, "img", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](230, "a", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](231, "Richard Garza");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](232, "ul", 45)(233, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](234, "img", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](235, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](236, "16 Mar 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](237, "div", 32)(238, "div", 33)(239, "div", 34)(240, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](241, "img", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](242, "div", 36)(243, "span", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](244, "Guides");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](245, "h5", 38)(246, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](247, "Programming Content Guideline For Beginners");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](248, "p", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](249, "Kickstart your programming journey with beginner-friendly guidelines designed to simplify coding ...");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](250, "div", 39)(251, "div", 40)(252, "div", 41)(253, "a", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](254, "img", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](255, "a", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](256, "Lewis Devine");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](257, "ul", 45)(258, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](259, "img", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](260, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](261, "10 Mar 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](262, "div", 57)(263, "div", 58)(264, "ul", 59)(265, "li", 60)(266, "a", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](267, "i", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](268, "li", 63)(269, "a", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](270, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](271, "li", 65)(272, "a", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](273, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](274, "li", 65)(275, "a", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](276, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](277, "li", 66)(278, "a", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](279, "i", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](53);
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
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](36);
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
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return BlogLeftSidebarComponent;
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
//# sourceMappingURL=7263.js.map