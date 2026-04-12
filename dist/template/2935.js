"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[2935],{

/***/ 8102:
/*!********************************************************************************!*\
  !*** ./src/app/features/home-list/home4/components/footer/footer.component.ts ***!
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
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return FooterComponent;
})();

/***/ }),

/***/ 18830:
/*!*************************************************************!*\
  !*** ./src/app/features/home-list/home4/components/data.ts ***!
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

/***/ }),

/***/ 32935:
/*!*************************************************************!*\
  !*** ./src/app/features/home-list/home4/home4.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Home4Component: () => (/* binding */ Home4Component)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ 37502);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-owl-carousel-o */ 96821);
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ 8102);
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-slick-carousel */ 49953);
/* harmony import */ var ngx_countup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-countup */ 67305);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 16060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 85422);
/* harmony import */ var _components_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/data */ 18830);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 8724);















const _c0 = () => ({
  enableScrollSpy: true
});
function Home4Component_ng_template_754_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 242)(1, "div", 243)(2, "div", 244)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Helps us to improve our productivity");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.High-definition video is video of higher resolution and quality than standard-definition.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 245)(8, "div", 246)(9, "h5", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "William George");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "h6", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "CEO & Chairman");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
}
function Home4Component_ng_template_755_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 242)(1, "div", 243)(2, "div", 244)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Helps us to improve our productivity");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 245)(8, "div", 246)(9, "h5", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Julian Adrose");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "h6", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
}
function Home4Component_ng_template_761_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 242)(1, "div", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "img", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function Home4Component_ng_template_762_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 242)(1, "div", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "img", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function Home4Component_ng_template_763_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 242)(1, "div", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "img", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function Home4Component_ng_template_764_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 242)(1, "div", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "img", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function Home4Component_ng_template_765_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 242)(1, "div", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "img", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function Home4Component_ng_template_766_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 242)(1, "div", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "img", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
let Home4Component = /*#__PURE__*/(() => {
  class Home4Component {
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
    constructor(router, data) {
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
    realReviews = {
      loop: true,
      margin: 15,
      dots: false,
      nav: true,
      navText: ['<i class="fa-sharp fa-solid fa-arrow-left-long"></i>', '<i class="fa-sharp fa-solid fa-arrow-right-long"></i>'],
      responsive: {
        0: {
          items: 1
        },
        500: {
          items: 1
        },
        768: {
          items: 1
        },
        1000: {
          items: 1
        },
        1300: {
          items: 1
        }
      }
    };
    leadGroup = {
      margin: 24,
      nav: false,
      dots: false,
      loop: true,
      autoplay: false,
      autoplaySpeed: 2000,
      responsive: {
        0: {
          items: 2,
          nav: false,
          dots: false
        },
        768: {
          items: 3,
          nav: false,
          dots: false
        },
        1170: {
          items: 6,
          dots: false
        }
      }
    };
    toggleClass(slide) {
      slide.favourite = !slide.favourite;
    }
    directPath() {
      this.router.navigate(['/pages/course/course-list']);
    }
    onSubmit() {
      this.router.navigate([_shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_3__.routes.courseList]);
    }
    static ɵfac = function Home4Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Home4Component)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_components_data__WEBPACK_IMPORTED_MODULE_11__.HomeData));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: Home4Component,
      selectors: [["app-home4"]],
      decls: 826,
      vars: 62,
      consts: [[1, "banner-section-four", "d-flex", "align-items-center"], [1, "container"], [1, "row", "align-items-center"], ["data-aos", "fade-up", 1, "col-lg-6", "col-12"], [1, "home-slide-face"], [1, "banner-content"], [1, "banner-form"], ["name", "store", "id", "store", "method", "post", 1, "form", 3, "ngSubmit"], [1, "form-inner1"], [1, "input-group"], [1, "drop-detail", "home5-select", "border-end"], ["placeholder", "Select Category", "name", "storeID", 1, "custom-mat-select", "select"], ["value", "0"], ["value", "1"], ["type", "text", "placeholder", "Search for Courses, Instructors", 1, "form-control"], ["type", "submit", 1, "btn", "btn-secondary", "sub-btn1"], [1, "fa-solid", "fa-magnifying-glass", "me-2"], [1, "trust-user"], [1, "rating"], [1, "fas", "fa-star", "filled"], [1, "col-lg-6"], [1, "banner-image"], [1, "row", "position-relative"], [1, "logo-cover"], ["src", "assets/img/icons/icon-30.svg", "alt", "img", "data-aos", "zoom-in", 1, "img-fluid", "img-05", "d-none", "d-xl-flex", "aos"], [1, "col-md-6", "d-flex"], [1, "flex-fill"], ["src", "assets/img/hero/hero-3.jpg", "alt", "img", "data-aos", "fade-bottm", 1, "img-fluid", "h-100", "flex-fill", "img-01", "aos"], [1, "col-md-6", "d-flex", "flex-column"], [1, "flex-fill", "mb-3"], ["src", "assets/img/hero/hero-4.jpg", "alt", "img", "data-aos", "fade-down", 1, "img-fluid", "img-02", "aos"], ["src", "assets/img/hero/hero-5.jpg", "alt", "img", "data-aos", "fade-up", 1, "img-fluid", "img-03", "aos"], [1, "shapes"], ["src", "assets/img/bg/bg-10.png", "alt", "Img", 1, "shapes-one"], ["src", "assets/img/bg/bg-11.png", "alt", "Img", 1, "shapes-two"], ["src", "assets/img/bg/bg-12.png", "alt", "Img", 1, "shapes-middle"], [1, "vision-section"], [1, "row", "row-gap-4"], [1, "col-xl-3", "col-lg-6", "d-flex"], [1, "vision-item", "flex-fill"], [1, "vision-icon", "border"], ["src", "assets/img/icons/vision-icon-01.svg", "alt", "img"], ["src", "assets/img/icons/vision-icon-02.svg", "alt", "img"], ["src", "assets/img/icons/vision-icon-03.svg", "alt", "img"], ["src", "assets/img/icons/vision-icon-04.svg", "alt", "img"], [1, "about-section"], [1, "row", "align-items-center", "row-gap-4"], ["data-aos", "fade-up", 1, "col-lg-7", "wow", "fadeInLeft", "order-lg-1", "order-xs-2", "order-sm-2"], [1, "section-header"], [1, "fw-medium", "text-secondary", "fs-18", "fw-bold", "mb-2", "d-inline-block"], [1, "mb-0"], [1, "about-content"], [1, "about-img"], [1, "col-md-4"], ["src", "assets/img/about/about-3.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/about/about-4.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/about/about-5.jpg", "alt", "img", 1, "img-fluid"], [1, "btn", "btn-secondary", "btn-xl", 3, "routerLink"], [1, "col-lg-5", "order-lg-2", "order-xs-1", "order-sm-1"], [1, "stylist-gallery"], ["data-aos", "fade-down", 1, "col-lg-6", "col-md-6", "col-sm-12", "col-12"], [1, "about-image", "border", "count-one", "d-flex", "align-items-center", "justify-content-center", "flex-fill", "project-details"], [1, "about-count"], [1, "course-img"], ["src", "assets/img/icons/count-one.svg", "alt", "Img"], [1, "count-content-three", "course-count", "ms-0"], [1, "counterUp", 3, "countUp", "options"], [1, "about-image", "border", "count-two", "d-flex", "align-items-center", "justify-content-center", "flex-fill", "project-details"], ["src", "assets/img/icons/count-two.svg", "alt", "Img"], ["data-aos", "fade-bottm", "data-wow-delay", "1.5", 1, "col-lg-6", "col-md-6", "col-sm-12", "col-12"], [1, "about-image", "border", "count-three", "d-flex", "align-items-center", "justify-content-center", "flex-fill", "project-details"], ["src", "assets/img/icons/count-three.svg", "alt", "Img"], ["data-aos", "fade-top", "data-wow-delay", "0.5", 1, "col-lg-6", "col-md-6", "col-sm-12", "col-12"], [1, "about-image", "border", "count-four", "d-flex", "align-items-center", "justify-content-center", "flex-fill", "project-details"], ["src", "assets/img/icons/count-four.svg", "alt", "Img"], [1, "about-bg"], ["src", "assets/img/bg/bg-8.png", "alt", "img", 1, "about-02"], ["src", "assets/img/bg/bg-7.png", "alt", "img", 1, "about-01"], ["src", "assets/img/bg/bg-9.png", "alt", "img", 1, "about-03"], [1, "topcategory-sec"], [1, "section-header", "text-center"], [1, "row"], ["data-aos", "fade-down", 1, "col-xl-3", "col-lg-6", "col-md-6", "col-sm-12", "d-flex"], [1, "categories-item", "categories-item-four", "flex-fill"], [1, "categories-icon"], ["src", "assets/img/icons/category-1.svg", "alt", "Angular Development"], [1, "title"], [3, "routerLink"], ["src", "assets/img/icons/category-9.svg", "alt", "Python Development"], ["src", "assets/img/icons/category-icon10.svg", "alt", "Node Js Development"], ["src", "assets/img/icons/category-11.svg", "alt", "PHP Development"], ["src", "assets/img/icons/category-5.svg", "alt", "Docker Development"], ["src", "assets/img/icons/category-6.svg", "alt", "Swift Development"], ["src", "assets/img/icons/category-7.svg", "alt", "Photography"], [1, "col-xl-3", "col-lg-6", "col-md-6", "col-sm-12", "d-flex"], ["data-aos", "fade-up", 1, "categories-item", "categories-item-four", "flex-fill"], ["src", "assets/img/icons/category-8.svg", "alt", "Business"], ["data-aos", "fade-down", 1, "more-details", "text-center"], [1, "featured-courses-sec"], [1, "patter-bg"], ["src", "assets/img/bg/bg-13.png", "alt", "Img", 1, "patter-one"], [1, "featured-courses-two"], ["data-aos", "fade-down", 1, "col-xl-4", "col-lg-6", "col-md-6", "col-sm-12", "d-flex"], [1, "course-item", "course-item-four", "mx-0"], ["alt", "Img", "src", "assets/img/course/course-10.jpg", 1, "img-fluid"], [1, "position-absolute", "start-0", "top-0", "d-flex", "align-items-start", "w-100", "z-index-2", "p-2"], ["href", "javascript:void(0);", 1, "course-name"], [1, "course-content"], [1, "ms-2"], [1, "user-info"], [1, "user-name"], [1, "link-info", 3, "routerLink"], [1, "course-level"], [1, "course-info"], [1, "course-time"], [1, "fa-regular", "fa-clock", "me-2"], [1, "price"], ["alt", "Img", "src", "assets/img/course/course-11.jpg", 1, "img-fluid"], [1, "course-level", "text-warning"], ["alt", "Img", "src", "assets/img/course/course-12.jpg", 1, "img-fluid"], [1, "course-level", "text-purple"], ["alt", "Img", "src", "assets/img/course/course-13.jpg", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/course/course-14.jpg", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/course/course-15.jpg", 1, "img-fluid"], [1, "course-level", "text-pink"], ["data-aos", "fade-up", 1, "col-lg-12"], [1, "more-details", "text-center"], [1, "master-skills-sec", "pt-0"], [1, "col-lg-7", "mx-auto"], [1, "course-info-two"], [1, "skills-item"], [1, "skills-wrap"], [1, "row", "row-gap-4", "align-items-center"], ["data-aos", "fade-up", 1, "col-xl-5", "col-lg-6", "col-md-12", "order-lg-0", "order-md-0", "order-0"], [1, "list-unstyled", "heading-color", "mb-4"], [1, "d-flex", "mb-3"], [1, "isax", "isax-tick-circle5", "text-success", "fs-24", "me-2"], [1, "d-flex", "mb-3", "aos-init", "aos-animate"], ["data-aos", "fade-up", 1, "col-xl-7", "col-lg-6", "col-md-12", "order-lg-1", "order-md-1", "order-1"], [1, "join-mentor-img"], ["src", "assets/img/feature/feature-18.jpg", "alt", "Img", 1, "img-fluid", "rounded-4"], [1, "joing-icon-award", "bg-warning"], ["src", "assets/img/icons/award-01.svg", "alt", "Img", 1, "img-fluid"], [1, "skills-wrap", "skill-center"], ["data-aos", "fade-up", 1, "col-xl-7", "col-lg-7", "col-md-12", "order-lg-2", "order-md-3", "order-3"], ["src", "assets/img/feature/feature-19.jpg", "alt", "Img", 1, "img-fluid", "rounded-4"], [1, "joing-icon-award", "bg-success"], ["src", "assets/img/icons/award-02.svg", "alt", "Img", 1, "img-fluid"], ["data-aos", "fade-up", 1, "col-xl-5", "col-lg-5", "col-md-12", "order-lg-3", "order-md-2", "order-2"], [1, "d-flex", "mb-3", "aos-init"], ["data-aos", "fade-up", 1, "col-xl-5", "col-lg-7", "col-md-12", "order-lg-4", "order-md-4", "order-4"], ["data-aos", "fade-up", 1, "col-xl-7", "col-lg-5", "col-md-12", "order-lg-5", "order-md-5", "order-5"], ["src", "assets/img/feature/feature-20.jpg", "alt", "Img", 1, "img-fluid", "rounded-4"], [1, "joing-icon-award", "bg-secondary"], ["src", "assets/img/icons/award-03.svg", "alt", "Img", 1, "img-fluid"], [1, "testimonial-sec"], [1, "testimonial-two-img"], ["src", "assets/img/bg/bg-14.png", "alt", "Img", 1, "img-fluid"], [1, "testimonial-subhead-two"], ["data-aos", "fade-down", 1, "col-md-12"], [1, "testimonial-inner"], ["data-aos", "fade-down"], [1, "row", "text-center"], ["data-aos", "fade-up", 1, "col-md-4", "col-sm-12"], [1, "course-count-two", "course-count", "border"], [1, "counterUp", "text-secondary"], [1, "counterUp", "text-success"], [1, "counterUp", "text-primary"], [1, "knowledge-sec"], [1, "container-fluid"], [1, "col-lg-6", "col-sm-12", "ps-0"], [1, "featured-img-1"], ["data-aos", "fade-up", 1, "col-lg-6", "col-sm-12", "p-0"], [1, "joing-group"], [1, "mb-2"], [1, "joing-list"], ["data-aos", "fade-bottom"], [1, "joing-header"], [1, "joing-icon", "bg-primary"], ["src", "assets/img/icons/joing-01.svg", "alt", "Img", 1, "img-fluid"], [1, "joing-content"], [1, "joing-icon", "bg-warning"], ["src", "assets/img/icons/joing-02.svg", "alt", "Img", 1, "img-fluid"], [1, "joing-icon", "bg-success"], ["src", "assets/img/icons/joing-03.svg", "alt", "Img", 1, "img-fluid"], [1, "joing-content", "aos"], ["data-aos", "fade-bottom", 1, "mb-0"], [1, "joing-icon", "bg-secondary"], ["src", "assets/img/icons/joing-04.svg", "alt", "Img", 1, "img-fluid"], [1, "feature-instructors-sec"], ["data-aos", "fade-up", 1, "section-header", "text-center"], [1, "featured-instructor-two"], ["data-aos", "fade-up", 1, "col-xl-3", "col-lg-6", "col-md-6", "col-sm-12"], [1, "instructor-item", "instructor-item-four"], [1, "instructors-img"], ["tabindex", "0", 3, "routerLink"], ["alt", "Img", "src", "assets/img/instructor/instructor-01.jpg", 1, "img-fluid"], [1, "featured-img"], ["src", "assets/img/icons/category-1.svg", "alt", "Img", 1, "img-fluid"], ["href", "javascript:void(0);", 1, "favourite", "ms-auto"], [1, "isax", "isax-heart"], [1, "instructor-content"], [1, "designation"], [1, "student-count"], [1, "fa-solid", "fa-user-group", "me-2"], ["alt", "Img", "src", "assets/img/instructor/instructor-02.jpg", 1, "img-fluid"], ["src", "assets/img/icons/category-2.svg", "alt", "Img", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/instructor/instructor-03.jpg", 1, "img-fluid"], ["src", "assets/img/icons/category-3.svg", "alt", "Img", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/instructor/instructor-04.jpg", 1, "img-fluid"], ["src", "assets/img/icons/category-4.svg", "alt", "Img", 1, "img-fluid"], [1, "col-lg-12"], ["data-aos", "fade-up", 1, "more-details", "text-center"], [1, "real-reviews-sec"], [1, "real-reviews-group"], ["data-aos", "fade-up", 1, "col-lg-6", "col-md-12", "col-sm-12"], [1, "reviews-img"], ["src", "assets/img/feature/feature-21.jpg", "alt", "Img", 1, "img-fluid", "rounded-4"], [1, "review-icon"], ["src", "assets/img/icons/review.svg", "alt", "img"], ["data-aos", "fade-up", 1, "col-lg-6", "col-md-12", "col-md-12"], [1, "real-reviews", "owl-theme"], [3, "options"], ["carouselSlide", ""], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "owl-nav", "slide-nav-8", "nav-control"], [1, "client-two-carousel"], [1, "lead-group-slider", "owl-theme"], ["src", "assets/img/bg/bg-9.png", "alt", "img", 1, "review-bg"], [1, "latest-blog-sec"], [1, "row", "justify-content-center"], ["data-aos", "fade-down", 1, "col-xl-4", "col-lg-6", "col-md-6"], [1, "event-blog-main"], [1, "latest-blog-img"], ["alt", "Img", "src", "assets/img/blog/blog-31.jpg", 1, "img-fluid"], [1, "blog-content"], [1, "category-name", 3, "routerLink"], [1, "blog-date"], [1, "isax", "isax-calendar-1", "me-1"], ["alt", "Img", "src", "assets/img/blog/blog-32.jpg", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/blog/blog-33.jpg", 1, "img-fluid"], ["src", "assets/img/bg/blog-bg.png", "alt", "img", 1, "blog-bg"], [1, "item"], [1, "real-reviews-grid"], [1, "review-content"], [1, "review-top"], [1, "review-info"], ["data-aos", "fade-up"], [1, "lead-img"], ["alt", "img", "src", "assets/img/client/16.svg", 1, "img-fluid"], ["alt", "img", "src", "assets/img/client/17.svg", 1, "img-fluid"], ["alt", "img", "src", "assets/img/client/18.svg", 1, "img-fluid"], ["alt", "img", "src", "assets/img/client/19.svg", 1, "img-fluid"], ["alt", "img", "src", "assets/img/client/20.svg", 1, "img-fluid"], ["alt", "img", "src", "assets/img/client/21.svg", 1, "img-fluid"]],
      template: function Home4Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "The Leader in Online Learning");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Engaging & Accessible Online Courses For All");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "Our specialized online courses are designed to bring the classroom experience to you, no matter where you are.");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 6)(13, "form", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngSubmit", function Home4Component_Template_form_ngSubmit_13_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 8)(15, "div", 9)(16, "span", 10)(17, "mat-select", 11)(18, "mat-option", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "Select Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "mat-option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "Development");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "mat-option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "Marketing");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](24, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](26, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "Search");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "div", 17)(29, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, "Trusted by over 15K Users worldwide since 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](32, "i", 19)(33, "i", 19)(34, "i", 19)(35, "i", 19)(36, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "4.9 / 200 Review");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "div", 20)(40, "div", 21)(41, "div", 22)(42, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](43, "img", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "div", 25)(45, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](46, "img", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "div", 28)(48, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](49, "img", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](51, "img", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](53, "img", 33)(54, "img", 34)(55, "img", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "div", 36)(57, "div", 1)(58, "div", 37)(59, "div", 38)(60, "div", 39)(61, "span", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](62, "img", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](64, "Get certified with 100+ certification courses");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](65, "div", 38)(66, "div", 39)(67, "span", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](68, "img", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](70, "Keep up with the latest in cloud");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "div", 38)(72, "div", 39)(73, "span", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](74, "img", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](75, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](76, "Build skills your way, from labs to courses");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](77, "div", 38)(78, "div", 39)(79, "span", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](80, "img", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](81, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](82, "Stay motivated with engaging instructors");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](83, "section", 45)(84, "div", 1)(85, "div", 46)(86, "div", 47)(87, "div", 48)(88, "span", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](89, "Learn with DreamLMS");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](90, "h2", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](91, "Get Trained By Experts & Professionals around the World");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](92, "div", 51)(93, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](94, "Mentor is essential for personal and professional growth. This blog discusses the key benefits of professional mentoring, including skill development, networking, and career advancement, while also offering strategies for finding the right mentor.");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](95, "div", 52)(96, "div", 37)(97, "div", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](98, "img", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](99, "div", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](100, "img", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](101, "div", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](102, "img", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](103, "a", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](104, "Learn more");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](105, "div", 58)(106, "div", 59)(107, "div", 37)(108, "div", 60)(109, "div", 61)(110, "div", 62)(111, "div", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](112, "img", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](113, "div", 65)(114, "h4")(115, "span", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](116, "10");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](117, "K");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](118, "p", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](119, "Online Courses");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](120, "div", 60)(121, "div", 67)(122, "div", 62)(123, "div", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](124, "img", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](125, "div", 65)(126, "h4")(127, "span", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](128, "215");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](129, "+");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](130, "p", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](131, "Expert Tutors");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](132, "div", 69)(133, "div", 70)(134, "div", 62)(135, "div", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](136, "img", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](137, "div", 65)(138, "h4")(139, "span", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](140, "10");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](141, "K");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](142, "p", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](143, "Ceritified Courses");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](144, "div", 72)(145, "div", 73)(146, "div", 62)(147, "div", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](148, "img", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](149, "div", 65)(150, "h4")(151, "span", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](152, "10");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](153, "K");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](154, "p", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](155, "Online Students");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](156, "div", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](157, "img", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](158, "div", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](159, "img", 77)(160, "img", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](161, "section", 79)(162, "div", 1)(163, "div", 80)(164, "span", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](165, "Favourite Course");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](166, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](167, "Top Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](168, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](169, "Discover our featured courses, specially curated to help you gain in-demand skills");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](170, "div", 81)(171, "div", 82)(172, "div", 83)(173, "div", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](174, "img", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](175, "h5", 86)(176, "a", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](177, "Angular Development");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](178, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](179, "220 Instructors");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](180, "div", 82)(181, "div", 83)(182, "div", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](183, "img", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](184, "h5", 86)(185, "a", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](186, "Nodeman Development");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](187, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](188, "124 Instructors");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](189, "div", 82)(190, "div", 83)(191, "div", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](192, "img", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](193, "h5", 86)(194, "a", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](195, "Node Js Development");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](196, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](197, "120 Instructors");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](198, "div", 82)(199, "div", 83)(200, "div", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](201, "img", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](202, "h5", 86)(203, "a", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](204, "AWS Development");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](205, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](206, "285 Instructors");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](207, "div", 82)(208, "div", 83)(209, "div", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](210, "img", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](211, "h5", 86)(212, "a", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](213, "Strapi CMS");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](214, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](215, "99 Instructors");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](216, "div", 82)(217, "div", 83)(218, "div", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](219, "img", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](220, "h5", 86)(221, "a", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](222, "Swift Development");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](223, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](224, "64 Instructors");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](225, "div", 82)(226, "div", 83)(227, "div", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](228, "img", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](229, "h5", 86)(230, "a", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](231, "VUE JS Development");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](232, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](233, "32 Instructors");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](234, "div", 94)(235, "div", 95)(236, "div", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](237, "img", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](238, "h5", 86)(239, "a", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](240, "ApostropheCMS");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](241, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](242, "21 Instructors");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](243, "div", 97)(244, "a", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](245, "View all Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](246, "section", 98)(247, "div", 99);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](248, "img", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](249, "div", 1)(250, "div", 80)(251, "span", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](252, "What\u2019s New");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](253, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](254, "Featured Courses");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](255, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](256, "Get certified, master modern tech skills, and level up your career");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](257, "div", 101)(258, "div", 81)(259, "div", 102)(260, "div", 103)(261, "div", 63)(262, "a", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](263, "img", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](264, "div", 105)(265, "a", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](266, "PHP");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](267, "div", 107)(268, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](269, "i", 19)(270, "i", 19)(271, "i", 19)(272, "i", 19)(273, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](274, "span", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](275, "203 reviews");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](276, "h3", 86)(277, "a", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](278, "The Complete Web Developer PHP framework Course 2.0");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](279, "div", 109)(280, "p", 110)(281, "a", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](282, "Emily Williams");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](283, "p", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](284, "Expert");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](285, "div", 113)(286, "p", 114);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](287, "i", 115);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](288, "6hr 30min");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](289, "h5", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](290, "$400 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](291, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](292, "$99.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](293, "div", 102)(294, "div", 103)(295, "div", 63)(296, "a", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](297, "img", 117);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](298, "div", 105)(299, "a", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](300, "Self Improvements");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](301, "div", 107)(302, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](303, "i", 19)(304, "i", 19)(305, "i", 19)(306, "i", 19)(307, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](308, "span", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](309, "5.0 (22 Reviews)");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](310, "h3", 86)(311, "a", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](312, "Building Your Personal Brand: Tips for Career Success");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](313, "div", 109)(314, "p", 110)(315, "a", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](316, "Brook Salaine");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](317, "p", 118);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](318, "Intermediate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](319, "div", 113)(320, "p", 114);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](321, "i", 115);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](322, "1hr 20min ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](323, "h5", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](324, "$125");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](325, "div", 102)(326, "div", 103)(327, "div", 63)(328, "a", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](329, "img", 119);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](330, "div", 105)(331, "a", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](332, "Finance");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](333, "div", 107)(334, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](335, "i", 19)(336, "i", 19)(337, "i", 19)(338, "i", 19)(339, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](340, "span", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](341, "4.0 (15 Reviwes) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](342, "h3", 86)(343, "a", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](344, "Strength Training 101: Building a Solid Foundation");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](345, "div", 109)(346, "p", 110)(347, "a", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](348, "Mark Richardson");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](349, "p", 120);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](350, "Basic");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](351, "div", 113)(352, "p", 114);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](353, "i", 115);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](354, "2hr 30min ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](355, "h5", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](356, "$3560");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](357, "div", 102)(358, "div", 103)(359, "div", 63)(360, "a", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](361, "img", 121);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](362, "div", 105)(363, "a", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](364, "SEO");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](365, "div", 107)(366, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](367, "i", 19)(368, "i", 19)(369, "i", 19)(370, "i", 19)(371, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](372, "span", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](373, "203 reviews");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](374, "h3", 86)(375, "a", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](376, "Digital Marketing Strategies for Business Growth");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](377, "div", 109)(378, "p", 110)(379, "a", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](380, "Laura Bennett");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](381, "p", 120);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](382, "Basic");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](383, "div", 113)(384, "p", 114);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](385, "i", 115);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](386, "6hr 30min");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](387, "h5", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](388, "$350 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](389, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](390, "$699.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](391, "div", 102)(392, "div", 103)(393, "div", 63)(394, "a", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](395, "img", 122);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](396, "div", 105)(397, "a", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](398, "Development");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](399, "div", 107)(400, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](401, "i", 19)(402, "i", 19)(403, "i", 19)(404, "i", 19)(405, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](406, "span", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](407, "5.0 (05 Reviews)");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](408, "h3", 86)(409, "a", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](410, "Web Development for Beginners: HTML, CSS, and JavaScript");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](411, "div", 109)(412, "p", 110)(413, "a", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](414, "David Morgan");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](415, "p", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](416, "Expert");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](417, "div", 113)(418, "p", 114);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](419, "i", 115);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](420, "1hr 15min ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](421, "h5", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](422, "$150");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](423, "div", 102)(424, "div", 103)(425, "div", 63)(426, "a", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](427, "img", 123);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](428, "div", 105)(429, "a", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](430, "PHP");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](431, "div", 107)(432, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](433, "i", 19)(434, "i", 19)(435, "i", 19)(436, "i", 19)(437, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](438, "span", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](439, "203 reviews");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](440, "h3", 86)(441, "a", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](442, "Photography Basics: Understanding Composition and Lighting");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](443, "div", 109)(444, "p", 110)(445, "a", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](446, "Maria Lopez");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](447, "p", 124);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](448, "Advanced");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](449, "div", 113)(450, "p", 114);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](451, "i", 115);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](452, "2hr 40min ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](453, "h5", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](454, "$250");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](455, "div", 125)(456, "div", 126)(457, "a", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](458, "View all Courses ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](459, "section", 127)(460, "div", 1)(461, "div", 81)(462, "div", 128)(463, "div", 80)(464, "span", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](465, "What\u2019s New");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](466, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](467, "Master the skills to drive your career");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](468, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](469, "Get certified, master modern tech skills, and level up your career \u2014 whether you\u2019re starting out or a seasoned pro. 95% of eLearning learners report.");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](470, "div", 129)(471, "div", 130)(472, "div", 131)(473, "div", 132)(474, "div", 133)(475, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](476, "Award Winning Course Management");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](477, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](478, "An award-winning course management system (CMS) or program is typically recognized for its exceptional quality, innovation, and effectiveness in helping both instructors and students succeed.");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](479, "ul", 134)(480, "li", 135);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](481, "i", 136);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](482, "Interactive Tools for Engagement ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](483, "li", 135);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](484, "i", 136);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](485, "Customizable Course Creation ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](486, "li", 137);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](487, "i", 136);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](488, "Robust Analytics and Reporting ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](489, "li", 137);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](490, "i", 136);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](491, "Collaborative and Peer to Peer Learning ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](492, "li", 137);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](493, "i", 136);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](494, "The Most World Class Instructors ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](495, "div", 138)(496, "div", 139);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](497, "img", 140);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](498, "div", 141);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](499, "img", 142);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](500, "div", 130)(501, "div", 143)(502, "div", 132)(503, "div", 144)(504, "div", 139);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](505, "img", 145);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](506, "div", 146);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](507, "img", 147);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](508, "div", 148)(509, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](510, "Learn anything from anywhere anytime");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](511, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](512, "In today\u2019s fast-paced, digital world, the ability to learn anything, from anywhere, and at any time is more accessible than ever. Whether you are looking to expand your knowledge, gain new skills.");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](513, "ul", 134)(514, "li", 135);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](515, "i", 136);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](516, "Access to a World of Knowledge ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](517, "li", 135);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](518, "i", 136);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](519, "Diverse Learning Formats ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](520, "li", 149);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](521, "i", 136);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](522, "Learn at Your Own Pace ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](523, "li", 149);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](524, "i", 136);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](525, "Affordable and Flexible Pricing ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](526, "li", 149);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](527, "i", 136);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](528, "The Most World Class Instructors ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](529, "div", 130)(530, "div", 131)(531, "div", 132)(532, "div", 150)(533, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](534, "Certification for solid development of your Career");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](535, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](536, "Certifications are a powerful way to enhance your skills, build credibility, and boost your career growth. In today\u2019s competitive job market, a professional certification");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](537, "ul", 134)(538, "li", 135);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](539, "i", 136);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](540, "Demonstrates Expertise ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](541, "li", 135);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](542, "i", 136);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](543, "Boosts Your Credibility ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](544, "li", 149);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](545, "i", 136);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](546, "Improves Job Security ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](547, "li", 149);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](548, "i", 136);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](549, "Facilitates Career Advancement ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](550, "li", 149);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](551, "i", 136);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](552, "Fosters Personal Growth ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](553, "div", 151)(554, "div", 139);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](555, "img", 152);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](556, "div", 153);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](557, "img", 154);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](558, "section", 155)(559, "div", 1)(560, "div", 156);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](561, "img", 157);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](562, "div", 158)(563, "div", 159)(564, "div", 160)(565, "div", 80)(566, "h2", 161);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](567, "Join over 5 Million Students");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](568, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](569, "Get certified, master modern tech skills, and level up your career ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](570, "div", 162)(571, "div", 163)(572, "div", 164)(573, "h4")(574, "span", 165);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](575, "253,085");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](576, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](577, "Students Enrolled");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](578, "div", 163)(579, "div", 164)(580, "h4")(581, "span", 166);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](582, "1,205");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](583, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](584, "Total Courses");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](585, "div", 163)(586, "div", 164)(587, "h4")(588, "span", 167);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](589, "253,085");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](590, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](591, "Students Worldwide");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](592, "div", 168)(593, "div", 169)(594, "div", 2)(595, "div", 170);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](596, "div", 171);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](597, "div", 172)(598, "div", 173)(599, "div", 48)(600, "h2", 174);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](601, "Want to share your knowledge? Join us a Mentor");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](602, "div", 175)(603, "ul")(604, "li", 176)(605, "div", 177)(606, "span", 178);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](607, "img", 179);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](608, "div", 180)(609, "h5", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](610, "Project Management Professional");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](611, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](612, "A globally recognized certification for project managers, PMP validates your ability to lead projects efficiently from start to finish. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](613, "li", 176)(614, "div", 177)(615, "span", 181);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](616, "img", 182);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](617, "div", 180)(618, "h5", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](619, "Fosters Personal Growth");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](620, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](621, "Pursuing certifications pushes you to learn new things and grow professionally, increasing your confidence and job satisfaction.");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](622, "li", 176)(623, "div", 177)(624, "span", 183);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](625, "img", 184);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](626, "div", 185)(627, "h5", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](628, "Build skills your way, from labs to courses");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](629, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](630, "Courses come in various formats, including video tutorials, interactive assignments, quizzes, reading materials, and hands-on projects");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](631, "li", 186)(632, "div", 177)(633, "span", 187);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](634, "img", 188);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](635, "div", 185)(636, "h5", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](637, "Get certified with 100+ certification courses");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](638, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](639, "Employers often value certifications when it comes to promotions and internal career advancement opportunities.");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](640, "div", 189)(641, "div", 1)(642, "div", 190)(643, "span", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](644, "New Courses");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](645, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](646, "Featured Instructor");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](647, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](648, "95% of eLearning learners report our hands-on content directly helped their careers.");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](649, "div", 191)(650, "div", 81)(651, "div", 192)(652, "div", 193)(653, "div", 194)(654, "a", 195);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](655, "img", 196);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](656, "div", 105)(657, "div", 197);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](658, "img", 198);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](659, "a", 199);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](660, "i", 200);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](661, "div", 201)(662, "h5", 86)(663, "a", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](664, "Julian Adrose");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](665, "span", 202);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](666, "Angular Expert");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](667, "div", 203);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](668, "i", 204);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](669, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](670, "50 Students");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](671, "div", 192)(672, "div", 193)(673, "div", 194)(674, "a", 195);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](675, "img", 205);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](676, "div", 105)(677, "div", 197);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](678, "img", 206);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](679, "a", 199);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](680, "i", 200);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](681, "div", 201)(682, "h5", 86)(683, "a", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](684, "Gallegos");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](685, "span", 202);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](686, "Angular Expert");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](687, "div", 203);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](688, "i", 204);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](689, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](690, "70 Students");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](691, "div", 192)(692, "div", 193)(693, "div", 194)(694, "a", 195);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](695, "img", 207);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](696, "div", 105)(697, "div", 197);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](698, "img", 208);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](699, "a", 199);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](700, "i", 200);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](701, "div", 201)(702, "h5", 86)(703, "a", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](704, "Kristi");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](705, "span", 202);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](706, "Node Js");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](707, "div", 203);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](708, "i", 204);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](709, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](710, "60 Students");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](711, "div", 192)(712, "div", 193)(713, "div", 194)(714, "a", 195);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](715, "img", 209);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](716, "div", 105)(717, "div", 197);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](718, "img", 210);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](719, "a", 199);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](720, "i", 200);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](721, "div", 201)(722, "h5", 86)(723, "a", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](724, "Pinero");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](725, "span", 202);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](726, "Python");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](727, "div", 203);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](728, "i", 204);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](729, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](730, "40 Students");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](731, "div", 211)(732, "div", 212)(733, "a", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](734, "View all Instructors");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](735, "section", 213)(736, "div", 1)(737, "div", 190)(738, "span", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](739, "Check out these real reviews");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](740, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](741, "Users love us Don't take it from us");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](742, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](743, "95% of eLearning learners report our hands-on content directly helped their careers.");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](744, "div", 214)(745, "div", 2)(746, "div", 215)(747, "div", 216);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](748, "img", 217);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](749, "span", 218);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](750, "img", 219);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](751, "div", 220)(752, "div", 221)(753, "owl-carousel-o", 222);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](754, Home4Component_ng_template_754_Template, 13, 0, "ng-template", 223)(755, Home4Component_ng_template_755_Template, 13, 0, "ng-template", 223);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](756, "div", 224);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](757, "div", 225);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](758, "div", 226)(759, "div", 227)(760, "owl-carousel-o", 222);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](761, Home4Component_ng_template_761_Template, 3, 0, "ng-template", 223)(762, Home4Component_ng_template_762_Template, 3, 0, "ng-template", 223)(763, Home4Component_ng_template_763_Template, 3, 0, "ng-template", 223)(764, Home4Component_ng_template_764_Template, 3, 0, "ng-template", 223)(765, Home4Component_ng_template_765_Template, 3, 0, "ng-template", 223)(766, Home4Component_ng_template_766_Template, 3, 0, "ng-template", 223);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](767, "img", 228);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](768, "section", 229)(769, "div", 1)(770, "div", 190)(771, "span", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](772, "News & Events");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](773, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](774, "Our Latest Updates");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](775, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](776, "Dont Miss Stay Updated with the Latest Articles and Insights");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](777, "div", 230)(778, "div", 231)(779, "div", 232)(780, "div", 233)(781, "a", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](782, "img", 234);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](783, "div", 235)(784, "a", 236);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](785, "LMS");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](786, "h4", 86)(787, "a", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](788, "Promoting Health & Well being in Schools");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](789, "p", 237);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](790, "i", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](791, "14 Sep 2022");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](792, "div", 231)(793, "div", 232)(794, "div", 233)(795, "a", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](796, "img", 239);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](797, "div", 235)(798, "a", 236);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](799, "Sales");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](800, "h4", 86)(801, "a", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](802, "Why an LMS is Essential for Modern Education");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](803, "p", 237);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](804, "i", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](805, "14 Sep 2022");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](806, "div", 231)(807, "div", 232)(808, "div", 233)(809, "a", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](810, "img", 240);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](811, "div", 235)(812, "a", 236);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](813, "Website Design");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](814, "h4", 86)(815, "a", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](816, "11 Tips to Help You Get New Clients with the design");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](817, "p", 237);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](818, "i", 238);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](819, "14 Sep 2022");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](820, "div", 211)(821, "div", 97)(822, "a", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](823, "View all Updates");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](824, "img", 241);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](825, "app-footer");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](103);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.courseList);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("countUp", 10)("options", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](58, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("countUp", 215)("options", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](59, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("countUp", 10)("options", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](60, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("countUp", 10)("options", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](61, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.courseCategory);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.courseCategory);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.courseCategory);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.courseCategory);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.courseCategory);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.courseCategory);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.courseCategory);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.courseCategory);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.courseCategory3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.courseList);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](197);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.instructorList);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.instructorList);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.instructorList);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.instructorList);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.instructorList);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("options", ctx.realReviews);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("options", ctx.leadGroup);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.blog_grid);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", ctx.routes.blog_grid);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterLink, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselSlideDirective, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__.SlickCarouselModule, ngx_countup__WEBPACK_IMPORTED_MODULE_7__.CountUpModule, ngx_countup__WEBPACK_IMPORTED_MODULE_7__.CountUpDirective, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelect, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatOption],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return Home4Component;
})();

/***/ })

}]);
//# sourceMappingURL=2935.js.map