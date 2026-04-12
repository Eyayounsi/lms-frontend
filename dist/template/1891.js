"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[1891],{

/***/ 71891:
/*!************************************************************************!*\
  !*** ./src/app/features/blog/blog-carousal/blog-carousal.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogCarousalComponent: () => (/* binding */ BlogCarousalComponent)
/* harmony export */ });
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-slick-carousel */ 49953);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 12481);






let BlogCarousalComponent = /*#__PURE__*/(() => {
  class BlogCarousalComponent {
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    topCategoriesOwlOptions = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };
    static ɵfac = function BlogCarousalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BlogCarousalComponent)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: BlogCarousalComponent,
      selectors: [["app-blog-carousal"]],
      decls: 129,
      vars: 21,
      consts: [[1, "content"], [1, "container"], [1, "blog-slider", "lazy"], [3, "config"], ["ngxSlickItem", ""], [1, "blog"], [1, "blog-image"], [3, "routerLink"], ["src", "./assets/img/blog/blog-7.jpg", "alt", "img", 1, "img-fluid"], [1, "blog-item"], [1, "badge", "bg-success", "mb-2"], [1, "mb-2"], [1, "text-truncate", "line-clamb-2"], [1, "blog-info"], [1, "d-flex", "align-items-center", "flex-wrap", "justify-content-between"], [1, "d-flex", "align-items-center", "user-profile"], [1, "user-img", 3, "routerLink"], ["src", "./assets/img/user/user-52.jpg", "alt", "img", 1, "rounded-pill", "w-auto"], [1, "user-name", 3, "routerLink"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], ["src", "./assets/img/icons/calendar.svg", "alt", "img", 1, "me-1"], ["src", "./assets/img/blog/blog-8.jpg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/user/user-01.jpg", "alt", "img", 1, "rounded-pill", "w-auto"], ["src", "./assets/img/blog/blog-9.jpg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/user/user-02.jpg", "alt", "img", 1, "rounded-pill", "w-auto"], ["src", "./assets/img/blog/blog-10.jpg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/user/user-03.jpg", "alt", "img", 1, "rounded-pill", "w-auto"], ["src", "./assets/img/blog/blog-11.jpg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/user/user-05.jpg", "alt", "img", 1, "rounded-pill", "w-auto"]],
      template: function BlogCarousalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "ngx-slick-carousel", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 9)(10, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Education");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "h5", 11)(13, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Learn Web App Development from Experts in 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Master the art of web application development with expert-led courses that cover the latest tools, fram...");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 13)(18, "div", 14)(19, "div", 15)(20, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "img", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "John Miller");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "ul", 19)(25, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "img", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "23 Apr 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 4)(30, "div", 5)(31, "div", 6)(32, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "img", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 9)(35, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Guides");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "h5", 11)(38, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Expand Your Career Opportunities With Python");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Unlock limitless career opportunities by mastering Python, one of the most versatile and in-demand ...");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 13)(43, "div", 14)(44, "div", 15)(45, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "img", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Cedric Glenn");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "ul", 19)(50, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](51, "img", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "20 Apr 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 4)(55, "div", 5)(56, "div", 6)(57, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "img", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 9)(60, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "Technical");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "h5", 11)(63, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "Learn Mobile Applications Development from Experts");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "Elevate your skills with expert-led training in mobile application development! Learn to design, develop ...");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "div", 13)(68, "div", 14)(69, "div", 15)(70, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](71, "img", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "John Reyes");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "ul", 19)(75, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](76, "img", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "04 Apr 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div", 4)(80, "div", 5)(81, "div", 6)(82, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](83, "img", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "div", 9)(85, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, "Guides");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "h5", 11)(88, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, "Complete PHP Programming Career Guideline");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, "Master PHP programming with our comprehensive career guideline! Learn the fundamentals, explore ...");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "div", 13)(93, "div", 14)(94, "div", 15)(95, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](96, "img", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98, "Donald Vesely");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "ul", 19)(100, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](101, "img", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](103, "24 Mar 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "div", 4)(105, "div", 5)(106, "div", 6)(107, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](108, "img", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "div", 9)(110, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](111, "Education");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "h5", 11)(113, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](114, "The Complete JavaScript Course for Beginners");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](115, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](116, "Dive into the world of JavaScript with our complete beginner-friendly course! Learn essential concepts...");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "div", 13)(118, "div", 14)(119, "div", 15)(120, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](121, "img", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](123, "Richard Garza");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "ul", 19)(125, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](126, "img", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](127, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](128, "16 Mar 2024");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("config", ctx.topCategoriesOwlOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx.routes.blog_details);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__.SlickCarouselModule, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__.SlickCarouselComponent, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__.SlickItemDirective],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return BlogCarousalComponent;
})();

/***/ })

}]);
//# sourceMappingURL=1891.js.map