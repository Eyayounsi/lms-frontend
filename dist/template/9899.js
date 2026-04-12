"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[9899],{

/***/ 11580:
/*!********************************************************************************!*\
  !*** ./src/app/features/home-list/home2/components/footer/footer.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);




let FooterComponent = /*#__PURE__*/(() => {
  class FooterComponent {
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    static ɵfac = function FooterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FooterComponent)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 101,
      vars: 11,
      consts: [[1, "footer"], [1, "footer-bg"], ["src", "assets/img/bg/footer-bg-01.png", "alt", "", 1, "footer-bg-1"], ["src", "assets/img/bg/footer-bg-02.png", "alt", "", 1, "footer-bg-2"], [1, "footer-top"], [1, "container"], [1, "row", "row-gap-4"], [1, "col-lg-4"], [1, "footer-about"], [1, "footer-logo"], ["src", "assets/img/logo.svg", "alt", ""], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "me-2"], ["src", "assets/img/icon/appstore.svg", "alt", ""], ["href", "javascript:void(0);"], ["src", "assets/img/icon/googleplay.svg", "alt", ""], [1, "col-lg-8"], [1, "col-lg-3"], [1, "footer-widget", "footer-menu"], [1, "footer-title"], [3, "routerLink"], [1, "col-lg-6"], [1, "footer-widget", "footer-contact"], [1, "subscribe-input"], ["action", "javascript:void(0);"], ["type", "email", "placeholder", "Enter your Email Address", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", "inline-flex", "align-items-center"], [1, "isax", "isax-send-2", "me-1"], [1, "footer-contact-info"], [1, "footer-address", "d-flex", "align-items-center"], ["src", "assets/img/icon/icon-20.svg", "alt", "Img", 1, "img-fluid", "me-2"], ["src", "assets/img/icon/icon-19.svg", "alt", "Img", 1, "img-fluid", "me-2"], ["src", "assets/img/icon/icon-21.svg", "alt", "Img", 1, "img-fluid", "me-2"], [1, "footer-bottom"], [1, "row", "row-gap-2"], [1, "col-md-6"], [1, "text-center", "text-md-start"], [1, "text-white"], [1, "d-flex", "align-items-center", "justify-content-center", "justify-content-md-end", "footer-link"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 2)(3, "img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "img", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 11)(14, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "img", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "img", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 16)(19, "div", 6)(20, "div", 17)(21, "div", 18)(22, "h5", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "For Instructor");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "ul")(25, "li")(26, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Search Mentors");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "li")(29, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Login");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "li")(32, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Register");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "li")(35, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Booking");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "li")(38, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Students Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 17)(41, "div", 18)(42, "h5", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "For Student");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "ul")(45, "li")(46, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Appointments");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "li")(49, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Chat");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "li")(52, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Login");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "li")(55, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Register");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "li")(58, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Instructor Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 21)(61, "div", 22)(62, "h5", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Newsletter");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 23)(65, "form", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Subscribe");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 28)(71, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "img", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, " 3556 Beech Street, San Francisco,");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, " California, CA 94108 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](78, "img", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "dreamslms@example.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](82, "img", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "+19 123-456-7890");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 33)(86, "div", 5)(87, "div", 34)(88, "div", 35)(89, "div", 36)(90, "p", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "Copyright 2025 \u00A9 DreamsLMS. Tous droits r\u00E9serv\u00E9s.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 35)(93, "div")(94, "ul", 38)(95, "li")(96, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "Terms & Conditions");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "li")(99, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "Privacy Policy");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.courseGrid);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.login);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.register);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.courseList);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.students_Dashboard);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.instructorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.login);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.register);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.instructor_dashboard);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](38);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.page_term_condition);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.page_privacy_policy);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: [".footer-two[_ngcontent-%COMP%]   i-feather[_ngcontent-%COMP%] {\n  width: 17px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvaG9tZS1saXN0L2hvbWUyL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFdBQUE7QUFBUiIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItdHdvIHtcbiAgICBpLWZlYXRoZXIge1xuICAgICAgICB3aWR0aDogMTdweDtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return FooterComponent;
})();

/***/ }),

/***/ 29899:
/*!*************************************************************!*\
  !*** ./src/app/features/home-list/home2/home2.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Home2Component: () => (/* binding */ Home2Component)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ 37502);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-owl-carousel-o */ 96821);
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ 11580);
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-slick-carousel */ 49953);
/* harmony import */ var ngx_countup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-countup */ 67305);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 16060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_data_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/service/data/data.service */ 30098);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 85422);
/* harmony import */ var _components_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/data */ 39428);















function Home2Component_ng_template_107_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 250)(1, "div", 251)(2, "span", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "i", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "h5", 254)(5, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "156 Courses");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx_r0.routes.courseCategory);
  }
}
function Home2Component_ng_template_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 250)(1, "div", 251)(2, "span", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "i", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "h5", 254)(5, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "IT & Softwares");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "214 Courses");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx_r0.routes.courseCategory);
  }
}
function Home2Component_ng_template_109_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 250)(1, "div", 251)(2, "span", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "i", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "h5", 254)(5, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Marketing");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "174 Courses");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx_r0.routes.courseCategory);
  }
}
function Home2Component_ng_template_110_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 250)(1, "div", 251)(2, "div", 257)(3, "span", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "i", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "h5", 254)(6, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Productivity");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "126 Courses");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx_r0.routes.courseCategory);
  }
}
function Home2Component_ng_template_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 250)(1, "div", 251)(2, "div", 257)(3, "span", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "i", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "h5", 254)(6, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Lifestyles");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "214 Courses");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx_r0.routes.courseCategory);
  }
}
function Home2Component_ng_template_112_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 250)(1, "div", 251)(2, "div", 257)(3, "span", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "i", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "h5", 254)(6, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Design");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "161 Courses");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx_r0.routes.courseCategory);
  }
}
function Home2Component_ng_template_113_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 250)(1, "div", 251)(2, "div", 257)(3, "span", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "i", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "h5", 254)(6, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Marketing");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "174 Courses");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx_r0.routes.courseCategory);
  }
}
function Home2Component_ng_template_369_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 250)(1, "div", 261)(2, "div", 86)(3, "a", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 263)(6, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "img", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "span", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "img", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 267)(11, "h3", 73)(12, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Joyce Pence");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "span", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Lead Designer");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "p", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "i", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "4.8 (157 Reviews) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 270)(20, "a", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "i", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "a", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "i", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "a", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](25, "i", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "a", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](27, "i", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "a", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](29, "i", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx_r0.routes.instructorDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx_r0.routes.instructorDetails);
  }
}
function Home2Component_ng_template_370_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 250)(1, "div", 261)(2, "div", 86)(3, "a", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 263)(6, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "img", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "span", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "img", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 267)(11, "h3", 73)(12, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Edith Dorsey");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "span", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Accountant");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "p", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "i", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "4.9 (20 Reviews) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 270)(20, "a", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "i", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "a", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "i", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "a", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](25, "i", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "a", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](27, "i", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "a", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](29, "i", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx_r0.routes.instructorDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx_r0.routes.instructorDetails);
  }
}
function Home2Component_ng_template_371_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 250)(1, "div", 261)(2, "div", 86)(3, "a", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 263)(6, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "img", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "span", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "img", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 267)(11, "h3", 73)(12, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Ruben Holmesr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "span", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Architect");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "p", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "i", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "4.8 (157 Reviews) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 270)(20, "a", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "i", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "a", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "i", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "a", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](25, "i", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "a", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](27, "i", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "a", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](29, "i", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx_r0.routes.instructorDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx_r0.routes.instructorDetails);
  }
}
function Home2Component_ng_template_372_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 250)(1, "div", 261)(2, "div", 86)(3, "a", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 263)(6, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "img", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "span", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "img", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 267)(11, "h3", 73)(12, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Carol Magner");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "span", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Lead Designer");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "p", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "i", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "5.0 (218 Reviews) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 270)(20, "a", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "i", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "a", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "i", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "a", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](25, "i", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "a", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](27, "i", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "a", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](29, "i", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx_r0.routes.instructorDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx_r0.routes.instructorDetails);
  }
}
function Home2Component_ng_template_373_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 250)(1, "div", 261)(2, "div", 86)(3, "a", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 263)(6, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "img", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "span", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "img", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 267)(11, "h3", 73)(12, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Edith Dorsey");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "span", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Accountant");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "p", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "i", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "4.9 (20 Reviews) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 270)(20, "a", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "i", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "a", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "i", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "a", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](25, "i", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "a", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](27, "i", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "a", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](29, "i", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx_r0.routes.instructorDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx_r0.routes.instructorDetails);
  }
}
function Home2Component_ng_template_445_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function Home2Component_ng_template_446_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function Home2Component_ng_template_447_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function Home2Component_ng_template_448_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function Home2Component_ng_template_449_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function Home2Component_ng_template_450_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function Home2Component_ng_template_451_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function Home2Component_ng_template_452_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
let Home2Component = /*#__PURE__*/(() => {
  class Home2Component {
    DataService;
    router;
    data;
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_3__.routes;
    selected = '1';
    universitiesCompanies = [];
    Category = [];
    Featured_Courses = [];
    trending_Courses = [];
    feature_instructors = [];
    real_reviews = [];
    blog = [];
    constructor(DataService, router, data) {
      this.DataService = DataService;
      this.router = router;
      this.data = data;
      this.Category = this.data.Category;
      this.Featured_Courses = this.data.Featured_Courses;
      this.trending_Courses = this.data.trending_Courses;
      this.feature_instructors = this.data.feature_instructors;
      this.real_reviews = this.data.real_reviews;
      this.blog = this.data.blog;
    }
    ngOnInit() {
      aos__WEBPACK_IMPORTED_MODULE_1__.init({
        duration: 1200,
        once: true
      });
    }
    categoryCarousel = {
      loop: true,
      margin: 16,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 2500,
      autoplayHoverPause: true,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 2
        },
        768: {
          items: 3
        },
        992: {
          items: 5
        },
        1200: {
          items: 6
        },
        1400: {
          items: 6
        }
      }
    };
    instructorCarousel = {
      loop: true,
      margin: 24,
      nav: false,
      dots: true,
      autoplay: false,
      autoplayTimeout: 2500,
      autoplayHoverPause: true,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        },
        1040: {
          items: 4
        },
        1400: {
          items: 4
        }
      }
    };
    brandCarousel = {
      loop: true,
      margin: 24,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 2
        },
        576: {
          items: 3
        },
        768: {
          items: 4
        },
        992: {
          items: 4
        },
        1200: {
          items: 6
        },
        1400: {
          items: 6
        }
      }
    };
    courseSlider = {
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: false,
      responsive: [{
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };
    toggleClass(slide) {
      slide.favourite = !slide.favourite;
    }
    directPath() {
      this.router.navigate(['/pages/course/course-list']);
    }
    static ɵfac = function Home2Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Home2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_service_data_data_service__WEBPACK_IMPORTED_MODULE_10__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_components_data__WEBPACK_IMPORTED_MODULE_12__.HomeData));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: Home2Component,
      selectors: [["app-home2"]],
      decls: 736,
      vars: 44,
      consts: [["slickModal", "slick-carousel"], [1, "banner-section-two"], [1, "container", "position-relative"], ["src", "assets/img/banner/star-01.png", "alt", "img", 1, "img-fluid", "star-01"], ["src", "assets/img/banner/star-02.png", "alt", "img", 1, "img-fluid", "star-02"], ["src", "assets/img/banner/star-03.png", "alt", "img", 1, "img-fluid", "star-03"], ["src", "assets/img/banner/star-04.png", "alt", "img", 1, "img-fluid", "star-04"], ["src", "assets/img/banner/star-05.png", "alt", "img", 1, "img-fluid", "star-05"], ["src", "assets/img/icons/banner-book.svg", "alt", "img", 1, "img-fluid", "star-06", "d-none", "d-xl-flex"], ["src", "assets/img/icons/banner-icon-03.svg", "alt", "img", 1, "img-fluid", "star-07", "d-none", "d-xl-flex"], ["src", "assets/img/icons/banner-icon-01.svg", "alt", "img", 1, "img-fluid", "star-08", "d-none", "d-xl-flex"], ["src", "assets/img/icons/banner-icon-02.svg", "alt", "img", 1, "img-fluid", "star-09", "d-none", "d-xl-flex"], ["src", "assets/img/icons/banner-icon-04.svg", "alt", "img", 1, "img-fluid", "star-10", "d-none", "d-xl-flex"], ["src", "assets/img/banner/soft-star.png", "alt", "img", 1, "img-fluid", "star-11", "d-none", "d-xl-flex"], [1, "row", "align-items-end"], [1, "col-lg-6"], [1, "d-flex", "align-items-center", "position-relative", "banner-content"], ["data-aos", "zoom-in", 1, "aos"], [1, "banner-info"], [1, "d-inline-flex", "fw-semibold", "text-uppercase", "mb-3"], [1, "mb-4"], [1, "position-relative", "banner-title"], ["src", "assets/img/banner/banner-text-bg.png", "alt", "img", 1, "img-fluid", "position-absolute", "title-bg"], [1, "banner-form"], [1, "d-sm-flex", "align-items-center"], [1, "dropdown"], ["data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "dropdown-toggle", "d-flex", "align-items-center"], [1, "isax", "isax-book", "me-2"], [1, "dropdown-menu", "p-2"], ["href", "javascript:void(0);", 1, "dropdown-item", "d-flex", "align-items-center", "p-2"], ["type", "text", "placeholder", "Search Courses, Instructors", 1, "form-control", "border-0"], [1, "rounded-pill", "btn", "btn-primary", "btn-xl"], [1, "ms-sm-3", "mt-2", "mt-sm-0"], [1, "list-inline", "mb-0"], [1, "list-inline-item", "me-0"], [1, "fas", "fa-star", "text-warning"], [1, "fas", "fa-star-half-alt", "text-warning"], [1, "list-inline-item", "heading-color", "fw-bold", "me-0"], [1, "banner-img-section"], ["src", "assets/img/banner/banner-bg-01.png", "alt", "img", "data-aos", "fade-up", "data-aos-easing", "linear", "data-aos-duration", "500", 1, "img-fluid", "banner-bg-01", "d-none", "d-xl-flex", "aos"], ["src", "assets/img/banner/banner-bg-02.png", "alt", "img", "data-aos", "fade-up", "data-aos-easing", "linear", "data-aos-duration", "600", 1, "img-fluid", "banner-bg-02", "d-none", "d-xl-flex", "aos"], ["src", "assets/img/hero/hero-1.png", "alt", "img", "data-aos", "fade-up", "data-aos-easing", "linear", "data-aos-duration", "900", 1, "img-fluid", "banner-bg-03", "aos"], ["data-aos", "fade-down", 1, "enrolled-list-cover", "aos"], [1, "enrolled-list"], [1, "avatar-list-stacked"], [1, "avatar", "avatar-rounded"], ["src", "assets/img/user/user-01.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/user/user-03.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/user/user-07.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/user/user-08.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/user/user-06.jpg", "alt", "img"], [1, "mb-0"], [1, "text-secondary"], ["data-aos", "fade-down", 1, "course-count", "d-inline-flex", "align-items-center", "aos"], [1, "counter-icon"], [1, "ti", "ti-list-details"], [1, "text-white"], [1, "text-light", "mb-0"], [1, "favorite-course"], [1, "container"], ["data-aos", "fade-up", 1, "section-header", "text-center", "aos"], [1, "section-badge"], [1, "nav-bottom", "px-1", "category-carousel"], [3, "options"], ["carouselSlide", ""], ["src", "assets/img/bg/category-bg-1.png", "alt", "img", 1, "bg-01"], [1, "benefits-section"], [1, "section-badge", "text-white"], ["data-aos", "fade-up", 1, "row", "justify-content-center", "row-gap-4", "aos"], [1, "col-md-6", "col-lg-4"], [1, "benefits-item"], [1, "benefits-img"], ["src", "assets/img/icons/benefit-icon-01.svg", "alt", "img", 1, "img-fluid"], [1, "title"], ["src", "assets/img/icons/benefit-icon-02.svg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/icons/benefit-icon-03.svg", "alt", "img", 1, "img-fluid"], [1, "feature-section", "position-relative"], ["src", "assets/img/bg/feature-bg-01.png", "alt", "img", 1, "bg-star-01", "img-fluid"], ["src", "assets/img/bg/feature-bg-02.png", "alt", "img", 1, "bg-star-02", "img-fluid"], [1, "course-slider-slick"], [3, "config"], ["ngxSlickItem", "", 1, "item"], [1, "course-item-two", "course-item"], [1, "course-img"], [3, "routerLink"], ["src", "assets/img/course/course-22.jpg", "alt", "img", 1, "img-fluid"], [1, "position-absolute", "start-0", "top-0", "d-flex", "align-items-start", "w-100", "z-index-2", "p-2"], ["href", "javascript:void(0);", 1, "fav-icon"], [1, "isax", "isax-heart"], ["href", "javascript:void(0);", 1, "brand-icon", "ms-auto"], ["src", "assets/img/icons/course-01.svg", "alt", "img", 1, "img-fluid"], [1, "course-content"], [1, "d-flex", "justify-content-between", "mb-2"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-sm", 3, "routerLink"], ["src", "assets/img/user/user-29.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-sm", "rounded-circle"], [1, "ms-2"], [1, "link-default", "fs-14", 3, "routerLink"], [1, "badge", "badge-light", "rounded-pill", "bg-light", "d-inline-flex", "align-items-center", "fs-13", "fw-medium", "mb-0"], [1, "title", "mb-2"], [1, "d-flex", "align-items-center", "mb-3"], [1, "ti", "ti-star-filled", "text-warning", "me-2"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "text-secondary", "fs-16", "fw-semi-bold", "mb-0"], [1, "btn", "btn-dark", "btn-sm", "d-inline-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-arrow-right-3", "ms-1"], ["src", "assets/img/course/course-23.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/user/user-50.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-sm", "rounded-circle"], ["src", "assets/img/course/course-24.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/featured-courses/react.svg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/user/user-23.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-sm", "rounded-circle"], ["src", "assets/img/course/course-25.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/featured-courses/Clip-path-group.svg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/user/user-20.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-sm", "rounded-circle"], [1, "counter-trending-cover"], [1, "counter-section"], [1, "text-light"], [1, "row", "row-gap-4"], [1, "col-md-6", "col-lg-3", "d-flex"], ["data-aos", "fade-up", 1, "counter-item", "text-center", "flex-fill"], ["data-aos", "fade-up", 1, "counter-item", "aos", "text-center", "flex-fill"], ["data-aos", "fade-up", 1, "counter-item", "no-border", "aos", "text-center", "flex-fill"], ["src", "assets/img/bg/count-icon.png", "alt", "img", 1, "img-fluid", "counter-bg-01", "d-none", "d-lg-flex"], ["src", "assets/img/icons/banner-icon-03.svg", "alt", "img", 1, "img-fluid", "counter-bg-02", "d-none", "d-lg-flex"], [1, "trending-instruction"], [1, "instructor-carousel", "owl-theme", "nav-bottom"], ["src", "assets/img/bg/instructor-bg-1.png", "alt", "img", 1, "instructor-bg"], [1, "subsribe-section"], ["src", "assets/img/icons/banner-icon-03.svg", "alt", "img", 1, "img-fluid", "bg-05", "d-none", "d-lg-flex"], [1, "row"], [1, "contact-section"], ["data-aos", "fade-up", 1, "mb-4", "aos"], [1, "text-white", "mb-1"], [1, "text-light", "fs-16"], ["action", "#", 1, "subcribe-form"], [1, "isax", "isax-message-text"], ["type", "email", "placeholder", "Email Address", 1, "form-control"], ["type", "submit", 1, "btn", "btn-secondary", "btn-xl"], [1, "col-lg-6", "position-relative"], ["src", "assets/img/bg/subscribe-bg-01.png", "alt", "img", "data-aos", "fade-down", 1, "img-fluid", "bg-01", "d-none", "d-lg-flex", "aos"], ["src", "assets/img/feature/feature-22.png", "alt", "img", "data-aos", "fade-down", 1, "img-fluid", "bg-02", "d-none", "d-lg-flex", "aos"], ["src", "assets/img/icons/subscribe-icon-02.svg", "alt", "img", 1, "img-fluid", "bg-03", "d-none", "d-lg-flex"], ["src", "assets/img/icons/subscribe-icon-01.svg", "alt", "img", 1, "img-fluid", "bg-04", "d-none", "d-lg-flex"], [1, "skill-section"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-lg-6", "col-xl-7"], [1, "skill-image"], [1, "row", "position-relative"], ["src", "assets/img/bg/book-bg.png", "alt", "img", 1, "img-fluid", "img-04", "d-none", "d-xl-flex"], ["src", "assets/img/icons/icon-31.png", "alt", "img", 1, "img-fluid", "img-05", "d-none", "d-xl-flex"], [1, "col-md-6", "d-flex"], [1, "flex-fill"], ["src", "assets/img/feature/feature-26.jpg", "alt", "img", "data-aos", "fade-right", 1, "img-fluid", "flex-fill", "img-01", "aos"], [1, "col-md-6"], [1, "mb-3"], ["src", "assets/img/feature/feature-27.jpg", "alt", "img", "data-aos", "fade-down", 1, "img-fluid", "img-02", "aos"], ["src", "assets/img/feature/feature-28.jpg", "alt", "img", "data-aos", "fade-up", 1, "img-fluid", "img-03", "aos"], ["data-aos", "fade-up", 1, "col-lg-6", "col-xl-5", "aos"], [1, "skill-content"], [1, "skill-list", "mb-4"], [1, "isax", "isax-tick-circle5", "text-success", "fs-24", "me-2"], [1, "btn", "btn-dark", "btn-xl", "rounded-pill", "d-inline-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-arrow-right-3", "ms-2"], [1, "cliets-section"], [1, "owl-theme", "brand-carousel"], [1, "about-us"], [1, "about-us-content"], ["data-aos", "fade-up", 1, "col-lg-7", "aos"], ["data-aos", "fade-up", 1, "about-us-head", "aos"], ["id", "review-carousel", 1, "owl-carousel", "owl-theme", "nav-bottom"], [1, "item", "flex-fill"], [1, "review-item"], [1, "rating"], [1, "ti", "ti-star-filled", "selected"], [1, "d-flex", "align-items-center", "review-user"], [1, "me-2"], ["src", "assets/img/user/user-06.jpg", "alt", "img", 1, "img-fluid"], [1, "fw-medium"], ["src", "assets/img/user/user-12.jpg", "alt", "img", 1, "img-fluid"], [1, "col-lg-5"], [1, "img-section"], ["src", "assets/img/feature/feature-23.jpg", "alt", "img", "data-aos", "zoom-in", 1, "img-fluid", "about-img", "aos"], ["data-aos", "fade-down", 1, "enrolled-list-cover", "d-none", "d-xl-flex", "aos"], ["src", "assets/img/user/user-35.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/user/user-09.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/user/user-06.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/user/user-36.jpg", "alt", "img"], [1, "mb-0", "text-light", "fw-bold", "text-center"], ["src", "assets/img/bg/arrow.png", "alt", "img", 1, "img-fluid", "arrow", "d-none", "d-xl-flex"], [1, "apply-role-section"], ["data-aos", "fade-right", 1, "role-item", "aos"], [1, "col-xl-6"], [1, "mb-2"], [1, "btn", "btn-primary", "rounded-pill", "d-inline-flex", "align-items-center", 3, "routerLink"], ["src", "assets/img/instructor/instructor.png", "alt", "img", 1, "img-fluid", "role-img", "d-none", "d-xl-flex"], ["data-aos", "fade-up", 1, "role-item", "student-bg", "aos"], [1, "btn", "btn-secondary", "rounded-pill", "d-inline-flex", "align-items-center", 3, "routerLink"], ["src", "assets/img/students/student.png", "alt", "img", 1, "img-fluid", "role-img", "d-none", "d-xl-flex"], ["src", "assets/img/bg/about-bg-01.png", "alt", "img", 1, "img-fluid", "about-bg-01", "d-none", "d-xl-flex"], ["src", "assets/img/bg/about-bg-02.png", "alt", "img", 1, "img-fluid", "about-bg-02", "d-none", "d-xl-flex"], [1, "faq-section"], [1, "row", "align-items-center"], [1, "col-lg-5", "pe-md-5"], [1, "position-relative"], ["src", "assets/img/about/about-1.jpg", "alt", "img", 1, "img-fluid", "rounded-4"], [1, "bg-warning", "text-center", "p-3", "rounded-5", "position-absolute", "top-0", "end-0", "z-index-1", "d-none", "d-sm-block", "my-3", "mx-3"], [1, "isax", "isax-message-question5", "heading-color", "fs-46"], [1, "col-lg-7"], [1, "section-header"], [1, "fw-medium", "text-secondary", "mb-2", "d-inline-block", "section-badge"], ["id", "accordioncustomicon1Example", 1, "accordion", "accordion-customicon1", "accordions-items-seperate"], ["data-aos", "fade-up", 1, "accordion-item"], ["id", "headingcustomicon1One", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1One", "aria-expanded", "true", "aria-controls", "collapsecustomicon1One", 1, "accordion-button"], [1, "isax", "isax-add", "fs-20", "fw-semibold", "ms-1"], ["id", "collapsecustomicon1One", "aria-labelledby", "headingcustomicon1One", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body", "pt-0"], ["data-aos", "fade-up", "data-aos-delay", "250", 1, "accordion-item"], ["id", "headingcustomicon1Two", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1Two", "aria-expanded", "false", "aria-controls", "collapsecustomicon1One", 1, "accordion-button", "collapsed"], ["id", "collapsecustomicon1Two", "aria-labelledby", "headingcustomicon1Two", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse"], ["id", "headingcustomicon1Three", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1Three", "aria-expanded", "false", "aria-controls", "collapsecustomicon1One", 1, "accordion-button", "collapsed"], ["id", "collapsecustomicon1Three", "aria-labelledby", "headingcustomicon1Three", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse"], ["id", "headingcustomicon1Four", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1Four", "aria-expanded", "false", "aria-controls", "collapsecustomicon1One", 1, "accordion-button", "collapsed"], ["id", "collapsecustomicon1Four", "aria-labelledby", "headingcustomicon1Four", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse"], ["id", "headingcustomicon1Five", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1Five", "aria-expanded", "false", "aria-controls", "collapsecustomicon1One", 1, "accordion-button", "collapsed"], ["id", "collapsecustomicon1Five", "aria-labelledby", "headingcustomicon1Five", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse"], [1, "blog-section", "position-relative"], [1, "row", "row-gap-4", "justify-content-center"], [1, "col-lg-4", "col-md-6"], ["data-aos", "zoom-in", 1, "blog-card", "aos"], [1, "blog-img"], ["src", "assets/img/blog/blog-22.jpg", "alt", "img", 1, "img-fluid"], [1, "blog-content"], [1, "blog-user", "d-flex", "align-items-center", "justify-content-between"], ["href", "javascript:void(0);", 1, "avatar", "me-2"], ["src", "assets/img/user/user-42.jpg", "alt", "img", 1, "img-fluid"], [1, "mb-0", "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "fw-medium", "ms-1"], [1, "isax", "isax-calendar-1", "text-gray-7"], [1, "blog-card"], ["src", "assets/img/blog/blog-23.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/user/user-36.jpg", "alt", "img", 1, "img-fluid"], [1, "isax", "isax-calendar-1", "text-gray-72"], ["src", "assets/img/blog/blog-24.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/user/user-53.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/bg/feature-bg-02.png", "alt", "img", 1, "img-fluid", "blog-bg-01"], ["data-aos", "flip-right", 1, "item", "aos"], [1, "categories-item"], [1, "categories-img"], [1, "isax", "isax-archive5", "fs-36", "text-primary"], [1, "fw-semi-bold", "mb-1"], [1, "isax", "isax-airpod5", "fs-36", "text-primary"], [1, "isax", "isax-bag-tick-25", "fs-36", "text-primary"], [1, "card-body", "text-center"], [1, "isax", "isax-additem5", "fs-36", "text-primary"], [1, "isax", "isax-dcube5", "fs-36", "text-primary"], [1, "isax", "isax-bezier5", "fs-36", "text-primary"], [1, "instructor-item"], ["href", "javascript:void(0);", 1, "favourite", "ms-auto"], [1, "instructor-img"], ["src", "assets/img/instructor/instructor-05.jpg", "alt", "img"], [1, "verify"], ["src", "assets/img/icons/verify-icon.svg", "alt", "img", 1, "img-fluid"], [1, "instructor-content"], [1, "designation"], [1, "fas", "fa-star", "me-1"], [1, "instructor-social"], ["href", "javascript:void(0);"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-instagram"], [1, "fab", "fa-x-twitter"], [1, "fab", "fa-youtube"], [1, "fab", "fa-linkedin"], ["src", "assets/img/instructor/instructor-06.jpg", "alt", "img"], ["src", "assets/img/instructor/instructor-07.jpg", "alt", "img"], ["src", "assets/img/instructor/instructor-08.jpg", "alt", "img"], [1, "item"], ["src", "assets/img/client/08.svg", "alt", "img"], ["src", "assets/img/client/09.svg", "alt", "img"], ["src", "assets/img/client/10.svg", "alt", "img"], ["src", "assets/img/client/11.svg", "alt", "img"], ["src", "assets/img/client/12.svg", "alt", "img"], ["src", "assets/img/client/13.svg", "alt", "img"], ["src", "assets/img/client/14.svg", "alt", "img"], ["src", "assets/img/client/15.svg", "alt", "img"]],
      template: function Home2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "img", 3)(3, "img", 4)(4, "img", 5)(5, "img", 6)(6, "img", 7)(7, "img", 8)(8, "img", 9)(9, "img", 10)(10, "img", 11)(11, "img", 12)(12, "img", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 14)(14, "div", 15)(15, "div", 16)(16, "div", 17)(17, "div", 18)(18, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "The Leader in Online Learning");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "h1", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "Engaging & Accessible ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "Online ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](24, "img", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, " Courses For All");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 23)(27, "div", 24)(28, "div", 25)(29, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](30, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, " Category ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "ul", 28)(33, "li")(34, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35, " Design ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "li")(37, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, " Marketing ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "li")(40, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41, " Framer Developer ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "li")(43, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44, " Figma Developer ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](46, "input", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "button", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48, "Search");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "div", 24)(50, "div", 32)(51, "ul", 33)(52, "li", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](53, "i", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "li", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](55, "i", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "li", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](57, "i", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](58, "li", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](59, "i", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "li", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](61, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](62, "li", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](63, "4.5 / 5.0");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](64, "small");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](65, "From 500+ reviews");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](66, "div", 15)(67, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](68, "img", 39)(69, "img", 40)(70, "img", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "div", 42)(72, "div", 43)(73, "div", 44)(74, "span", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](75, "img", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "span", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](77, "img", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](78, "span", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](79, "img", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](80, "span", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](81, "img", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](82, "span", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](83, "img", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](84, "p", 51)(85, "span", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](86, "35K+");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](87, " Students Enrolled");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](88, "div", 53)(89, "span", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](90, "i", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](91, "div")(92, "h4", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](93, "50+");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](94, "p", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](95, "Courses");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](96, "div", 58)(97, "div", 59)(98, "div", 60)(99, "span", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](100, " Favourite Course ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](101, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](102, "Top Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](103, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](104, "The right course, guided by an expert mentor, can provide invaluable insights, practical skills");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](105, "div", 62)(106, "owl-carousel-o", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](107, Home2Component_ng_template_107_Template, 9, 1, "ng-template", 64)(108, Home2Component_ng_template_108_Template, 9, 1, "ng-template", 64)(109, Home2Component_ng_template_109_Template, 9, 1, "ng-template", 64)(110, Home2Component_ng_template_110_Template, 10, 1, "ng-template", 64)(111, Home2Component_ng_template_111_Template, 10, 1, "ng-template", 64)(112, Home2Component_ng_template_112_Template, 10, 1, "ng-template", 64)(113, Home2Component_ng_template_113_Template, 10, 1, "ng-template", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](114, "img", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](115, "div", 66)(116, "div", 59)(117, "div", 60)(118, "div", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](119, " Our Benefits ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](120, "h2", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](121, "Master the skills to drive your career");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](122, "p", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](123, "The right course, guided by an expert mentor, can provide invaluable insights, practical skills");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](124, "div", 68)(125, "div", 69)(126, "div", 70)(127, "div", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](128, "img", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](129, "h5", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](130, "Stay motivated with instructors");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](131, "p", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](132, "Stay motivated with engaging instructors on our platform, guiding you through every course.");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](133, "div", 69)(134, "div", 70)(135, "div", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](136, "img", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](137, "h5", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](138, "Get certified on courses");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](139, "p", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](140, "Get certified, master modern tech skills, and level up your career whether you\u2019re starting.");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](141, "div", 69)(142, "div", 70)(143, "div", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](144, "img", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](145, "h5", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](146, "Build skills on your way");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](147, "p", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](148, "Build skills your way with hands-on labs and immersive courses, tailored to fit.");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](149, "div", 76)(150, "div", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](151, "img", 77)(152, "img", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](153, "div", 60)(154, "span", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](155, " What\u2019s New ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](156, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](157, "Featured Courses");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](158, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](159, "Discover our featured courses, specially curated to help you gain in-demand skills");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](160, "div", 79)(161, "ngx-slick-carousel", 80, 0)(163, "div", 81)(164, "div", 82)(165, "div", 83)(166, "a", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](167, "img", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](168, "div", 86)(169, "a", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](170, "i", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](171, "a", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](172, "img", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](173, "div", 91)(174, "div", 92)(175, "div", 93)(176, "a", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](177, "img", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](178, "div", 96)(179, "a", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](180, "Brenda Slaton");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](181, "span", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](182, " Design ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](183, "h6", 99)(184, "a", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](185, "Information About UI/UX Design Degree Course");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](186, "p", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](187, "i", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](188, "4.9 (200 Reviews)");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](189, "div", 102)(190, "h6", 103);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](191, "$120");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](192, "a", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](193, "Add to Cart");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](194, "i", 105);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](195, "div", 81)(196, "div", 82)(197, "div", 83)(198, "a", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](199, "img", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](200, "div", 86)(201, "a", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](202, "i", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](203, "a", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](204, "img", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](205, "div", 91)(206, "div", 92)(207, "div", 93)(208, "a", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](209, "img", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](210, "div", 96)(211, "a", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](212, "David Benitz");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](213, "span", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](214, " Productivity ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](215, "h6", 99)(216, "a", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](217, "The Complete Business and Management Course");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](218, "p", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](219, "i", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](220, "5.0 (210 Reviews)");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](221, "div", 102)(222, "h6", 103);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](223, "$168");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](224, "a", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](225, "Add to Cart");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](226, "i", 105);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](227, "div", 81)(228, "div", 82)(229, "div", 83)(230, "a", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](231, "img", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](232, "div", 86)(233, "a", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](234, "i", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](235, "a", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](236, "img", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](237, "div", 91)(238, "div", 92)(239, "div", 93)(240, "a", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](241, "img", 110);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](242, "div", 96)(243, "a", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](244, "Calvin Johnsen");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](245, "span", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](246, " Development ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](247, "h6", 99)(248, "a", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](249, "Learn & Create ReactJS Tech Fundamentals Apps");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](250, "p", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](251, "i", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](252, "5.0 (154 Reviews)");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](253, "div", 102)(254, "h6", 103);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](255, "$147");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](256, "a", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](257, "Add to Cart");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](258, "i", 105);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](259, "div", 81)(260, "div", 82)(261, "div", 83)(262, "a", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](263, "img", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](264, "div", 86)(265, "a", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](266, "i", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](267, "a", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](268, "img", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](269, "div", 91)(270, "div", 92)(271, "div", 93)(272, "a", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](273, "img", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](274, "div", 96)(275, "a", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](276, "Edith Dorsey");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](277, "span", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](278, " Lifestyles ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](279, "h6", 99)(280, "a", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](281, "Build Creative Arts & media Course Completed");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](282, "p", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](283, "i", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](284, "4.9 (178 Reviews)");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](285, "div", 102)(286, "h6", 103);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](287, "$190");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](288, "a", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](289, "Add to Cart");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](290, "i", 105);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](291, "div", 81)(292, "div", 82)(293, "div", 83)(294, "a", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](295, "img", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](296, "div", 86)(297, "a", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](298, "i", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](299, "a", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](300, "img", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](301, "div", 91)(302, "div", 92)(303, "div", 93)(304, "a", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](305, "img", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](306, "div", 96)(307, "a", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](308, "David Benitz");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](309, "span", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](310, " Productivity ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](311, "h6", 99)(312, "a", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](313, "The Complete Business and Management Course");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](314, "p", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](315, "i", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](316, "5.0 (210 Reviews)");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](317, "div", 102)(318, "h6", 103);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](319, "$168");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](320, "a", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](321, "Add to Cart");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](322, "i", 105);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](323, "section", 114)(324, "div", 59)(325, "div", 115)(326, "div", 60)(327, "h2", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](328, "Acheive you Goals with DreamsLMS");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](329, "p", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](330, "96% of eLearning for Business customers see improved results within six months. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](331, "div", 117)(332, "div", 118)(333, "div", 119)(334, "h2", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](335, "253,085");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](336, "p", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](337, "Students Enrolled all over World");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](338, "div", 118)(339, "div", 119)(340, "h2", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](341, "1,205");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](342, "p", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](343, "Total Courses on our Platform");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](344, "div", 118)(345, "div", 120)(346, "h2", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](347, "56");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](348, "p", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](349, "Countries of Students");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](350, "div", 118)(351, "div", 121)(352, "h2", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](353, "968");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](354, "p", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](355, "Expert Tutors From Various Fields");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](356, "img", 122)(357, "img", 123);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](358, "div", 2)(359, "div", 124)(360, "div", 60)(361, "span", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](362, " Trending Instructors ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](363, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](364, "Top Class & Professional Instructors ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](365, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](366, " Empowering Change: Stories from Those Who Took the Leap");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](367, "div", 125)(368, "owl-carousel-o", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](369, Home2Component_ng_template_369_Template, 30, 2, "ng-template", 64)(370, Home2Component_ng_template_370_Template, 30, 2, "ng-template", 64)(371, Home2Component_ng_template_371_Template, 30, 2, "ng-template", 64)(372, Home2Component_ng_template_372_Template, 30, 2, "ng-template", 64)(373, Home2Component_ng_template_373_Template, 30, 2, "ng-template", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](374, "img", 126);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](375, "div", 127)(376, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](377, "img", 128);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](378, "div", 129)(379, "div", 15)(380, "div", 130)(381, "div", 131)(382, "h2", 132);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](383, "Transform Access To Education");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](384, "p", 133);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](385, "Create Account to Receive Our Newsletter, Course Recommend & Promotions.");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](386, "form", 134)(387, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](388, "i", 135);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](389, "input", 136);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](390, "button", 137);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](391, "Subcribe");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](392, "div", 138);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](393, "img", 139)(394, "img", 140)(395, "img", 141)(396, "img", 142);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](397, "div", 143)(398, "div", 59)(399, "div", 144)(400, "div", 145)(401, "div", 146)(402, "div", 147);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](403, "img", 148)(404, "img", 149);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](405, "div", 150)(406, "div", 151);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](407, "img", 152);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](408, "div", 153)(409, "div", 154);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](410, "img", 155);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](411, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](412, "img", 156);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](413, "div", 157)(414, "div", 158)(415, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](416, "Master the Skills To Drive Your Career");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](417, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](418, "Get certified, master modern tech skills, and level up your career whether you\u2019re starting out or a seasoned pro. 95% of eLearning learners report our hands-on content directly helped their careers.");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](419, "div", 159)(420, "p", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](421, "i", 160);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](422, "Access Your Class anywhere ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](423, "p", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](424, "i", 160);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](425, "Flexible Course Plan");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](426, "p", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](427, "i", 160);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](428, "Quality Assurance");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](429, "p", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](430, "i", 160);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](431, "Cost-Effectiveness");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](432, "p", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](433, "i", 160);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](434, "The Most World Class Instructors");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](435, "p", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](436, "i", 160);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](437, "Quality Assurance");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](438, "a", 161);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](439, "Get Started");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](440, "i", 162);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](441, "div", 163)(442, "div")(443, "div", 164)(444, "owl-carousel-o", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](445, Home2Component_ng_template_445_Template, 2, 0, "ng-template", 64)(446, Home2Component_ng_template_446_Template, 2, 0, "ng-template", 64)(447, Home2Component_ng_template_447_Template, 2, 0, "ng-template", 64)(448, Home2Component_ng_template_448_Template, 2, 0, "ng-template", 64)(449, Home2Component_ng_template_449_Template, 2, 0, "ng-template", 64)(450, Home2Component_ng_template_450_Template, 2, 0, "ng-template", 64)(451, Home2Component_ng_template_451_Template, 2, 0, "ng-template", 64)(452, Home2Component_ng_template_452_Template, 2, 0, "ng-template", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](453, "div", 165)(454, "div", 59)(455, "div", 166)(456, "div", 144)(457, "div", 167)(458, "div", 168)(459, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](460, "What People Say About Us \u2764\uFE0F");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](461, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](462, "Read what our satisfied clients have to say about their experiences with our platform.");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](463, "div", 169)(464, "div", 170)(465, "div", 171)(466, "div", 172)(467, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](468, "i", 173);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](469, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](470, "i", 173);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](471, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](472, "i", 173);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](473, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](474, "i", 173);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](475, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](476, "i", 173);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](477, "h5", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](478, "\"Transformed My Career\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](479, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](480, "As an employer, the platform exceeded my expectations. We swiftly found top-tier talent for our company.");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](481, "div", 174)(482, "div", 175)(483, "a", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](484, "img", 176);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](485, "div")(486, "h6", 177)(487, "a", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](488, "Brenda Slaton");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](489, "p", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](490, "Designer");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](491, "div", 170)(492, "div", 171)(493, "div", 172)(494, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](495, "i", 173);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](496, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](497, "i", 173);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](498, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](499, "i", 173);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](500, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](501, "i", 173);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](502, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](503, "i", 173);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](504, "h5", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](505, "\"Enhanced My Study\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](506, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](507, "The LMS made managing my coursework simple and engaging, with everything I need easily accessible and organized.");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](508, "div", 174)(509, "div", 175)(510, "a", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](511, "img", 178);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](512, "div")(513, "h6", 177)(514, "a", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](515, "Adrian Dennis");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](516, "p", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](517, "Designer");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](518, "div", 170)(519, "div", 171)(520, "div", 172)(521, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](522, "i", 173);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](523, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](524, "i", 173);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](525, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](526, "i", 173);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](527, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](528, "i", 173);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](529, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](530, "i", 173);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](531, "h5", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](532, "\"Transformed My Career\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](533, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](534, "As an employer, the platform exceeded my expectations. We swiftly found top-tier talent for our company.");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](535, "div", 174)(536, "div", 175)(537, "a", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](538, "img", 176);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](539, "div")(540, "h6", 177)(541, "a", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](542, "Brenda Slaton");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](543, "p", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](544, "Designer");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](545, "div", 179)(546, "div", 180);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](547, "img", 181);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](548, "div", 182)(549, "div", 43)(550, "div", 44)(551, "span", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](552, "img", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](553, "span", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](554, "img", 183);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](555, "span", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](556, "img", 184);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](557, "span", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](558, "img", 185);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](559, "span", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](560, "img", 186);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](561, "p", 187)(562, "span", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](563, "200+ ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](564, "Reviews");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](565, "img", 188);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](566, "div", 189)(567, "div", 117)(568, "div", 153)(569, "div", 190)(570, "div", 129)(571, "div", 191)(572, "h5", 192);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](573, "Become an Instructor");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](574, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](575, "Top global instructors teach millions of students on Mentoring.");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](576, "a", 193);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](577, "Apply Now");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](578, "i", 162);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](579, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](580, "img", 194);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](581, "div", 153)(582, "div", 195)(583, "div", 129)(584, "div", 191)(585, "h5", 192);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](586, "Become a Student");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](587, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](588, "Start your educational journey with us and access a wealth of resources ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](589, "a", 196);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](590, "Enroll Now");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](591, "i", 162);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](592, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](593, "img", 197);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](594, "img", 198)(595, "img", 199);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](596, "section", 200)(597, "div", 59)(598, "div", 201)(599, "div", 202)(600, "div", 203);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](601, "img", 204);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](602, "div", 205);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](603, "i", 206);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](604, "div", 207)(605, "div", 208)(606, "span", 209);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](607, "FAQs");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](608, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](609, "Frequently Asked Questions");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](610, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](611, "Explore detailed answers to the most common questions about our platform.");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](612, "div", 210)(613, "div", 211)(614, "h2", 212)(615, "a", 213);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](616, " What\u2019s DreamLMS want to give you? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](617, "i", 214);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](618, "div", 215)(619, "div", 216)(620, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](621, "DreamLMS aims to provide you with a comprehensive and intuitive learning platform that enhances your educational experience.");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](622, "div", 217)(623, "h2", 218)(624, "a", 219);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](625, " Why choose us for your education? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](626, "i", 214);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](627, "div", 220)(628, "div", 216)(629, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](630, "DreamLMS aims to provide you with a comprehensive and intuitive learning platform that enhances your educational experience.");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](631, "div", 217)(632, "h2", 221)(633, "a", 222);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](634, " How We Provide Service For you? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](635, "i", 214);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](636, "div", 223)(637, "div", 216)(638, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](639, "DreamLMS aims to provide you with a comprehensive and intuitive learning platform that enhances your educational experience.");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](640, "div", 217)(641, "h2", 224)(642, "a", 225);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](643, " Do you have a monthly plan? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](644, "i", 214);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](645, "div", 226)(646, "div", 216)(647, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](648, "DreamLMS aims to provide you with a comprehensive and intuitive learning platform that enhances your educational experience.");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](649, "div", 217)(650, "h2", 227)(651, "a", 228);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](652, " Are you Affordable For Your Course ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](653, "i", 214);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](654, "div", 229)(655, "div", 216)(656, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](657, "DreamLMS aims to provide you with a comprehensive and intuitive learning platform that enhances your educational experience.");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](658, "div", 230)(659, "div", 59)(660, "div", 60)(661, "span", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](662, " Blog ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](663, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](664, "Latest Articles & News");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](665, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](666, "Explore curated content to enlighten, entertain and engage global readers.");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](667, "div", 231)(668, "div", 232)(669, "div", 233)(670, "div", 234)(671, "a", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](672, "img", 235);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](673, "div", 236)(674, "h5")(675, "a", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](676, "Mastering Programming with a Technical Mentor");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](677, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](678, "Learning to code can be overwhelming, but a mentor can make the journey smoother....");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](679, "div", 237)(680, "div", 93)(681, "a", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](682, "img", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](683, "p", 240);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](684, "by ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](685, "a", 241);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](686, "Reni Sarow");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](687, "p", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](688, "i", 242);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](689, "09 Aug 2025");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](690, "div", 232)(691, "div", 243)(692, "div", 234)(693, "a", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](694, "img", 244);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](695, "div", 236)(696, "h5")(697, "a", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](698, "How to Level Up Your Coding Skills with the Help of a Mentor");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](699, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](700, "Whether you're a beginner or an advanced coder, this blog will explore how....");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](701, "div", 237)(702, "div", 93)(703, "a", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](704, "img", 245);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](705, "p", 240);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](706, "by ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](707, "a", 241);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](708, "Chris Daniel");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](709, "p", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](710, "i", 246);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](711, "15 Jul 2025");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](712, "div", 232)(713, "div", 243)(714, "div", 234)(715, "a", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](716, "img", 247);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](717, "div", 236)(718, "h5")(719, "a", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](720, "Navigating the Tech World: The Ultimate Guide");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](721, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](722, " The tech industry is vast and ever-changing, but a mentor can help you stay ahead.....");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](723, "div", 237)(724, "div", 93)(725, "a", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](726, "img", 248);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](727, "p", 240);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](728, "by ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](729, "a", 241);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](730, "Andrew");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](731, "p", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](732, "i", 242);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](733, "15 Jan 2025");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](734, "img", 249);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](735, "app-footer");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](106);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("options", ctx.categoryCarousel);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](55);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("config", ctx.courseSlider);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.cart);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.cart);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.cart);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.cart);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.cart);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](48);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("options", ctx.instructorCarousel);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](70);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.courseList);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("options", ctx.brandCarousel);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.studentsDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.studentsDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.studentsDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.studentsDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.studentsDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.studentsDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.becomeAnExpert);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.studentsList);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](82);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterLink, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselSlideDirective, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__.SlickCarouselModule, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__.SlickCarouselComponent, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__.SlickItemDirective, ngx_countup__WEBPACK_IMPORTED_MODULE_7__.CountUpModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return Home2Component;
})();

/***/ }),

/***/ 39428:
/*!*************************************************************!*\
  !*** ./src/app/features/home-list/home2/components/data.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeData: () => (/* binding */ HomeData)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 34205);

let HomeData = /*#__PURE__*/(() => {
  class HomeData {
    Category = [{
      title: 'Angular Development',
      instructors: '40',
      img: '1'
    }, {
      title: 'Python Development',
      instructors: '20',
      img: '2'
    }, {
      title: 'Node Js Development',
      instructors: '120',
      img: '3'
    }, {
      title: 'PHP Development',
      instructors: '40',
      img: '4'
    }, {
      title: 'Docker Development',
      instructors: '40',
      img: '5'
    }, {
      title: 'Swift Development',
      instructors: '40',
      img: '6'
    }, {
      title: 'Photography',
      instructors: '40',
      img: '7'
    }, {
      title: 'Business',
      instructors: '40',
      img: '8'
    }];
    Featured_Courses = [{
      title: 'PHP',
      id: 1,
      reviews: '203',
      course: 'The Complete Web Developer PHP framework Course 2.0',
      author: 'Russell T. Johnson'
    }, {
      title: 'Wordpress',
      id: 2,
      reviews: '243',
      course: 'Wordpress for Beginners - Master Wordpress Quickly',
      author: 'Cristofer Nolen'
    }, {
      title: 'Angular',
      id: 3,
      reviews: '243',
      course: 'Learn Angular Fundamentals From beginning to advance lavel',
      author: 'Cristofer Nolen'
    }, {
      title: 'HTML5',
      id: 4,
      reviews: '243',
      course: 'Build Responsive Real World Websites with HTML5 and CSS3',
      author: 'Cristofer Nolen'
    }, {
      title: 'C#',
      id: 5,
      reviews: '243',
      course: 'C# Developers Double Your Coding Speed with Visual Studio',
      author: 'Cristofer Nolen'
    }, {
      title: 'UI/UX',
      id: 6,
      reviews: '234',
      course: 'Information About UI/UX Design Degree',
      author: 'Cristofer Nolen'
    }];
    trending_Courses = [{
      id: 1,
      title: 'Wordpress',
      reviews: '333',
      course: 'Wordpress for Beginners - Master Wordpress Quickly'
    }, {
      id: 2,
      title: 'C#',
      reviews: '235',
      course: 'C# Developers Double Your Coding Speed with Visual Studio'
    }, {
      id: 3,
      title: 'Angular',
      reviews: '674',
      course: 'Learn Angular Fundamentals From beginning to advance lavel'
    }, {
      id: 4,
      title: 'HTML5',
      reviews: '123',
      course: 'Build Responsive Real World Websites with HTML5 and CSS3'
    }];
    feature_instructors = [{
      id: 1,
      name: 'Julian Adrose',
      title: 'Angular Expert',
      students: '50'
    }, {
      id: 2,
      name: 'Gallegos',
      title: 'Docker',
      students: '70'
    }, {
      id: 3,
      name: 'Kristi',
      title: 'Node Js',
      students: '60'
    }, {
      id: 4,
      name: 'Pinero',
      title: 'Python',
      students: '80'
    }];
    real_reviews = [{
      title: 'Helps us to improve our productivity',
      para: 'High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.',
      name: 'William George',
      role: 'CEO & Chairman'
    }, {
      title: 'Helps us to improve our productivity',
      para: 'High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.',
      name: 'Gallegos',
      role: 'CEO & MD'
    }, {
      title: 'Helps us to improve our productivity',
      para: 'High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.',
      name: 'Julian Adrose',
      role: 'Manager'
    }];
    blog = [{
      id: 1,
      badge: 'Marketing',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: 'Jun 15, 2022'
    }, {
      id: 2,
      badge: 'Sales',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: 'Jun 15, 2022'
    }, {
      id: 3,
      badge: 'Marketing',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: 'Jun 15, 2022'
    }];
    static ɵfac = function HomeData_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HomeData)();
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HomeData,
      factory: HomeData.ɵfac,
      providedIn: 'root'
    });
  }
  return HomeData;
})();

/***/ })

}]);
//# sourceMappingURL=9899.js.map