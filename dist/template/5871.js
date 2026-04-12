"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[5871],{

/***/ 25871:
/*!***************************************************************!*\
  !*** ./src/app/features/pages/about-us/about-us.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutUsComponent: () => (/* binding */ AboutUsComponent)
/* harmony export */ });
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-slick-carousel */ 49953);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aos */ 37502);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 12481);







let AboutUsComponent = /*#__PURE__*/(() => {
  class AboutUsComponent {
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_0__.routes;
    ngOnInit() {
      aos__WEBPACK_IMPORTED_MODULE_4__.init({
        duration: 1000,
        once: true
      });
    }
    instructorSlider = {
      lazyLoad: 'ondemand',
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 1800,
      arrows: false,
      responsive: [{
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
          infinite: true,
          dots: false
        }
      }, {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }]
    };
    testimonialSlider = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: false
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }]
    };
    static ɵfac = function AboutUsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AboutUsComponent)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: AboutUsComponent,
      selectors: [["app-about-us"]],
      decls: 590,
      vars: 14,
      consts: [[1, "about-hero-sec"], [1, "container"], [1, "row", "align-items-center", "g-5"], ["data-aos", "fade-right", 1, "col-lg-6"], [1, "about-pill", "mb-3", "d-inline-flex", "align-items-center", "gap-2"], [1, "fa-solid", "fa-graduation-cap"], [1, "about-hero-title", "mb-4"], [1, "fs-lg", "text-muted", "mb-4"], [1, "d-flex", "flex-wrap", "gap-3"], [1, "btn", "btn-primary", "btn-lg", "d-inline-flex", "align-items-center", "gap-2", 3, "routerLink"], [1, "fa-solid", "fa-book-open"], [1, "btn", "btn-outline-secondary", "btn-lg", "d-inline-flex", "align-items-center", "gap-2", 3, "routerLink"], [1, "fa-solid", "fa-envelope"], ["data-aos", "fade-left", 1, "col-lg-6"], [1, "about-hero-img-wrap", "position-relative", "p-3", "p-sm-4"], [1, "position-absolute", "top-0", "start-0", "z-n1"], ["src", "assets/img/shapes/shape-1.svg", "alt", "", "aria-hidden", "true"], [1, "position-absolute", "bottom-0", "end-0", "z-n1"], ["src", "assets/img/shapes/shape-2.svg", "alt", "", "aria-hidden", "true"], ["src", "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80&auto=format&fit=crop", "alt", "\u00C9quipe Dreams LMS", 1, "img-fluid", "img-radius", 2, "border-radius", "28px", "width", "100%", "object-fit", "cover", "max-height", "420px"], [1, "about-float-card", "about-float-1"], [1, "fa-solid", "fa-graduation-cap", "text-primary", "fs-20"], [1, "fw-800", "fs-20", "lh-1"], [1, "text-muted", 2, "font-size", "12px"], [1, "about-float-card", "about-float-2"], [1, "fa-solid", "fa-certificate", "text-warning", "fs-20"], [1, "about-section-two", "pb-0"], ["data-aos", "fade-left", 1, "col-lg-6", "order-lg-2"], [1, "p-3", "p-sm-4", "position-relative"], [1, "position-absolute", "top-0", "end-0", "z-n1"], ["src", "assets/img/shapes/about-shape1.png", "alt", "", "aria-hidden", "true"], [1, "position-absolute", "bottom-0", "start-0", "z-n1"], ["src", "assets/img/shapes/about-shape2.png", "alt", "", "aria-hidden", "true"], ["src", "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=700&q=80&auto=format&fit=crop", "alt", "Notre histoire Dreams LMS", 1, "img-fluid", "img-radius", 2, "border-radius", "24px", "width", "100%", "object-fit", "cover", "max-height", "400px"], ["data-aos", "fade-right", 1, "col-lg-6", "order-lg-1"], [1, "ps-0", "ps-lg-2", "pt-4", "pt-lg-0", "ps-xl-4"], [1, "section-header"], [1, "fw-medium", "text-secondary", "text-decoration-underline", "mb-2", "d-inline-block"], [1, "d-flex", "align-items-center", "about-us-banner"], [1, "bg-primary-transparent", "rounded-3", "p-2", "about-icon", "d-flex", "justify-content-center", "align-items-center"], [1, "isax", "isax-book-1", "fs-24"], [1, "ps-3"], [1, "mb-1"], [1, "mb-0", "text-muted"], [1, "bg-secondary-transparent", "rounded-3", "p-2", "about-icon", "d-flex", "justify-content-center", "align-items-center"], [1, "isax", "isax-bookmark5", "fs-24"], [1, "bg-skyblue-transparent", "rounded-3", "p-2", "about-icon", "d-flex", "justify-content-center", "align-items-center"], [1, "isax", "isax-medal", "fs-24"], [1, "about-stats-sec"], [1, "row", "g-4", "justify-content-center"], ["data-aos", "zoom-in", "data-aos-delay", "0", 1, "col-lg-3", "col-md-6", "text-center"], [1, "about-stat-item"], [1, "about-stat-icon"], [1, "about-stat-num"], [1, "text-white-50", "mb-0"], ["data-aos", "zoom-in", "data-aos-delay", "100", 1, "col-lg-3", "col-md-6", "text-center"], [1, "fa-solid", "fa-chalkboard-user"], ["data-aos", "zoom-in", "data-aos-delay", "200", 1, "col-lg-3", "col-md-6", "text-center"], [1, "fa-solid", "fa-users"], ["data-aos", "zoom-in", "data-aos-delay", "300", 1, "col-lg-3", "col-md-6", "text-center"], [1, "fa-solid", "fa-certificate"], [1, "about-values-sec"], [1, "row", "justify-content-center", "mb-5"], [1, "col-lg-7", "text-center"], [1, "row", "g-4"], ["data-aos", "fade-up", "data-aos-delay", "0", 1, "col-lg-4", "col-md-6"], [1, "about-value-card"], [1, "about-value-icon", "cat-p-indigo"], [1, "fa-solid", "fa-unlock"], [1, "mt-3", "mb-2"], [1, "text-muted", "mb-0"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "col-lg-4", "col-md-6"], [1, "about-value-icon", "cat-p-purple"], [1, "fa-solid", "fa-wand-magic-sparkles"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "col-lg-4", "col-md-6"], [1, "about-value-icon", "cat-p-emerald"], [1, "fa-solid", "fa-shield-halved"], [1, "about-value-icon", "cat-p-amber"], [1, "fa-solid", "fa-people-group"], [1, "about-value-icon", "cat-p-pink"], [1, "fa-solid", "fa-rocket"], [1, "about-value-icon", "cat-p-sky"], [1, "fa-solid", "fa-globe"], [1, "benefit-section"], [1, "section-header", "text-center"], [1, "col-lg-4", "col-md-6"], [1, "card", "shadow-sm", "h-100"], [1, "card-body", "p-4"], [1, "position-absolute", "top-0", "end-0", "mt-n3", "me-n4"], ["src", "assets/img/shapes/bg-1.png", "alt", "", "aria-hidden", "true"], [1, "p-4", "rounded-pill", "bg-primary-transparent", "d-inline-flex"], [1, "fa-solid", "fa-laptop-code", "fs-24", "text-primary"], [1, "mt-3", "mb-1"], ["src", "assets/img/shapes/bg-2.png", "alt", "", "aria-hidden", "true"], [1, "p-4", "rounded-pill", "bg-secondary-transparent", "d-inline-flex"], [1, "fa-solid", "fa-infinity", "fs-24", "text-secondary"], ["src", "assets/img/shapes/bg-3.png", "alt", "", "aria-hidden", "true"], [1, "p-4", "rounded-pill", "bg-skyblue-transparent", "d-inline-flex"], [1, "fa-solid", "fa-user-tie", "fs-24", "text-info"], [1, "client-section"], [1, "fw-medium", "text-center", "mb-4"], [1, "text-decoration-underline", "text-secondary"], [1, "institutions-slider", "lazy", "slider"], [3, "config"], ["ngxSlickItem", "", 1, "institutions-items", "p-1"], ["src", "assets/img/client/01.svg", "alt", "client", 1, "img-fluid"], ["src", "assets/img/client/02.svg", "alt", "client", 1, "img-fluid"], ["src", "assets/img/client/03.svg", "alt", "client", 1, "img-fluid"], ["src", "assets/img/client/04.svg", "alt", "client", 1, "img-fluid"], ["src", "assets/img/client/05.svg", "alt", "client", 1, "img-fluid"], ["src", "assets/img/client/06.svg", "alt", "client", 1, "img-fluid"], [1, "about-cta-sec"], [1, "about-cta-inner"], [1, "row", "align-items-center"], [1, "col-lg-8"], [1, "text-white", "mb-2"], [1, "text-white", "opacity-80", "mb-0"], [1, "col-lg-4", "text-lg-end", "mt-4", "mt-lg-0"], [1, "btn", "btn-light", "btn-lg", "fw-bold", "d-inline-flex", "align-items-center", "gap-2", 3, "routerLink"], [1, "fa-solid", "fa-user-plus"], [2, "display", "none"], [1, "col-lg-6"], ["src", "assets/img/shapes/shape-1.svg", "alt", "img"], ["src", "assets/img/shapes/shape-2.svg", "alt", "img"], [1, "position-absolute", "bottom-0", "start-0", "mb-md-5", "ms-md-n5"], ["src", "assets/img/icons/icon-1.svg", "alt", "img"], ["src", "./assets/img/about/about-2.svg", "alt", "img", 1, "img-fluid", "img-radius"], [1, "ps-0", "ps-lg-2", "pt-4", "pt-lg-0", "ps-xl-5"], [1, "mb-2"], [1, "row"], [1, "card", "shadow-sm"], ["src", "./assets/img/shapes/bg-1.png", "alt", "img"], ["src", "assets/img/shapes/bg-2.png", "alt", "img"], ["src", "assets/img/shapes/bg-3.png", "alt", "img"], [1, "isax", "isax-chart-26", "fs-24"], ["src", "./assets/img/client/01.svg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/client/02.svg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/client/03.svg", "alt", "img", 1, "img-fluid"], [1, "institutions-items", "p-1"], ["src", "./assets/img/client/04.svg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/client/05.svg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/client/06.svg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/client/07.svg", "alt", "img", 1, "img-fluid"], [1, "counter-sec"], [1, "row", "gy-3"], [1, "col-xl-3", "col-md-6"], [1, "card", "border-0", "mb-0"], [1, "card-body"], [1, "d-flex", "align-items-center"], [1, "counter-icon"], ["src", "./assets/img/icons/counter-icon1.svg", "alt", "img"], [1, "count-content"], [1, "text-info"], [1, "count-digit"], ["src", "./assets/img/icons/counter-icon2.svg", "alt", "img"], [1, "text-warning"], ["src", "./assets/img/icons/counter-icon3.svg", "alt", "img"], [1, "text-skyblue"], [1, "card-body", "d-flex", "align-items-center"], ["src", "./assets/img/icons/counter-icon4.svg", "alt", "img"], [1, "text-lightgreen"], [1, "testimonials-section", "text-center"], [1, "testimonials-slider", "lazy", "mt-4"], ["ngxSlickItem", ""], [1, "testimonials-item", "rounded-3", "bg-white"], [1, "position-relative", "d-inline-flex", "mb-2"], [1, "avatar", "rounded-circle", "avatar-xxl", "border", "border-white", "border-3"], [3, "routerLink"], ["src", "./assets/img/user/user-41.jpg", "alt", "img", 1, "img-fluid", "rounded-circle"], [1, "isax", "isax-quote-up5", "bg-secondary", "quote", "rounded-pill", "fs-16", "p-1"], [1, "fs-14", "mb-3"], [1, "mb-3", "text-truncate", "line-clamb-2"], [1, "fa-solid", "fa-star", "text-warning"], ["src", "./assets/img/user/user-42.jpg", "alt", "img", 1, "img-fluid", "rounded-circle"], ["src", "./assets/img/user/user-43.jpg", "alt", "img", 1, "img-fluid", "rounded-circle"], [1, "faq-section"], [1, "col-lg-5", "pe-md-5"], [1, "position-relative"], ["src", "assets/img/about/about-1.jpg", "alt", "img", 1, "img-fluid", "rounded-4"], [1, "bg-warning", "text-center", "p-3", "rounded-5", "position-absolute", "top-0", "end-0", "z-index-1", "d-none", "d-sm-block", "my-3", "mx-3"], [1, "isax", "isax-message-question5", "heading-color", "fs-46"], [1, "col-lg-7"], [1, "faq-content"], ["id", "accordioncustomicon1Example", 1, "accordion", "accordion-customicon1", "accordions-items-seperate"], ["data-aos", "fade-up", 1, "accordion-item"], ["id", "headingcustomicon1One", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1One", "aria-expanded", "true", "aria-controls", "collapsecustomicon1One", 1, "accordion-button"], [1, "isax", "isax-add", "fs-20", "fw-semibold", "ms-1"], ["id", "collapsecustomicon1One", "aria-labelledby", "headingcustomicon1One", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body", "pt-0"], ["data-aos", "fade-up", "data-aos-delay", "250", 1, "accordion-item"], ["id", "headingcustomicon1Two", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1Two", "aria-expanded", "false", "aria-controls", "collapsecustomicon1One", 1, "accordion-button", "collapsed"], ["id", "collapsecustomicon1Two", "aria-labelledby", "headingcustomicon1Two", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse"], ["id", "headingcustomicon1Three", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1Three", "aria-expanded", "false", "aria-controls", "collapsecustomicon1One", 1, "accordion-button", "collapsed"], ["id", "collapsecustomicon1Three", "aria-labelledby", "headingcustomicon1Three", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse"], ["id", "headingcustomicon1Four", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1Four", "aria-expanded", "false", "aria-controls", "collapsecustomicon1One", 1, "accordion-button", "collapsed"], ["id", "collapsecustomicon1Four", "aria-labelledby", "headingcustomicon1Four", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse"], ["id", "headingcustomicon1Five", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1Five", "aria-expanded", "false", "aria-controls", "collapsecustomicon1One", 1, "accordion-button", "collapsed"], ["id", "collapsecustomicon1Five", "aria-labelledby", "headingcustomicon1Five", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse"]],
      template: function AboutUsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " \u00C0 propos de Dreams LMS ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h1", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Nous croyons que ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "chaque");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " personne m\u00E9rite");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "d'apprendre sans limites ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " Dreams LMS rassemble des formateurs experts et des apprenants ambitieux sur une plateforme pens\u00E9e pour la progression r\u00E9elle. Accessible, certifiante et toujours \u00E0 la pointe de la p\u00E9dagogie num\u00E9rique. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 8)(17, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " Explorer les cours ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " Nous contacter ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 13)(24, "div", 14)(25, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "img", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "img", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "img", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div")(33, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "5 000+");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Apprenants actifs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div")(40, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "98 %");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Taux de satisfaction");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "section", 26)(45, "div", 1)(46, "div", 2)(47, "div", 27)(48, "div", 28)(49, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](50, "img", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](52, "img", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "img", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 34)(55, "div", 35)(56, "div", 36)(57, "span", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Notre histoire");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "N\u00E9s d'une conviction : l'\u00E9ducation doit \u00EAtre accessible");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "Fond\u00E9e par des passionn\u00E9s de technologie et d'enseignement, Dreams LMS est n\u00E9e d'un constat simple : trop de talents restent bloqu\u00E9s faute d'acc\u00E8s \u00E0 une formation de qualit\u00E9. Nous avons alors con\u00E7u une plateforme pens\u00E9e pour briser ces barri\u00E8res.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 38)(64, "div")(65, "span", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](66, "i", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 41)(68, "h6", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, "Apprenez depuis n'importe o\u00F9");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "p", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "Ordinateur, tablette ou mobile vos cours vous suivent partout.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 38)(73, "div")(74, "span", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](75, "i", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 41)(77, "h6", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, "Formateurs rigoureusement s\u00E9lectionn\u00E9s");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "p", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, "Chaque formateur est un expert actif, valid\u00E9 par notre \u00E9quipe p\u00E9dagogique.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "div", 38)(82, "div")(83, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](84, "i", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "div", 41)(86, "h6", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87, "Certifications v\u00E9rifiables");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "p", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89, "Partagez votre certificat avec un QR code unique et un lien de v\u00E9rification.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "section", 48)(91, "div", 1)(92, "div", 49)(93, "div", 50)(94, "div", 51)(95, "div", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](96, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "h2", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](98, "50+");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "p", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100, "Cours disponibles");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "div", 55)(102, "div", 51)(103, "div", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](104, "i", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "h2", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](106, "20+");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "p", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108, "Formateurs experts");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "div", 57)(110, "div", 51)(111, "div", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](112, "i", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "h2", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](114, "5 000+");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](115, "p", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](116, "Apprenants inscrits");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "div", 59)(118, "div", 51)(119, "div", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](120, "i", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](121, "h2", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](122, "3 000+");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](123, "p", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](124, "Certificats d\u00E9livr\u00E9s");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "section", 61)(126, "div", 1)(127, "div", 62)(128, "div", 63)(129, "div", 36)(130, "span", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](131, "Nos valeurs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](132, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](133, "Ce qui nous guide au quotidien");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](134, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](135, "Nos valeurs ne sont pas grav\u00E9es dans du marbre elles se vivent \u00E0 chaque cours, chaque question r\u00E9pondue, chaque certificat d\u00E9cern\u00E9.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](136, "div", 64)(137, "div", 65)(138, "div", 66)(139, "div", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](140, "i", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](141, "h5", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](142, "Accessibilit\u00E9");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](143, "p", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](144, "Des cours gratuits et payants afin que le niveau de revenu ne soit jamais un obstacle \u00E0 l'apprentissage.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](145, "div", 71)(146, "div", 66)(147, "div", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](148, "i", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](149, "h5", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](150, "Excellence");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](151, "p", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](152, "Chaque formateur est s\u00E9lectionn\u00E9 pour son expertise, sa p\u00E9dagogie et son engagement envers les apprenants.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](153, "div", 74)(154, "div", 66)(155, "div", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](156, "i", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](157, "h5", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](158, "Confiance");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](159, "p", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](160, "Certificats v\u00E9rifiables, contenus mis \u00E0 jour r\u00E9guli\u00E8rement, support toujours disponible pour vous accompagner.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](161, "div", 65)(162, "div", 66)(163, "div", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](164, "i", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](165, "h5", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](166, "Communaut\u00E9");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](167, "p", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](168, "Une vraie communaut\u00E9 d'apprenants et de formateurs qui s'entraident et partagent leurs connaissances.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](169, "div", 71)(170, "div", 66)(171, "div", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](172, "i", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](173, "h5", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](174, "Innovation");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](175, "p", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](176, "Quiz adaptatifs, suivi de pr\u00E9sence, analytics avanc\u00E9s nous repoussons les limites du e-learning.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](177, "div", 74)(178, "div", 66)(179, "div", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](180, "i", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](181, "h5", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](182, "Impact global");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](183, "p", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](184, "Apprenants en Tunisie, en France, au Canada nos formations touchent des professionnels partout dans le monde.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](185, "section", 83)(186, "div", 1)(187, "div", 84)(188, "span", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](189, "Nos avantages");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](190, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](191, "Pourquoi choisir Dreams LMS ?");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](192, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](193, "La bonne formation, guid\u00E9e par un expert passionn\u00E9, transforme votre trajectoire professionnelle.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](194, "div", 64)(195, "div", 85)(196, "div", 86)(197, "div", 87)(198, "div", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](199, "img", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](200, "div", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](201, "i", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](202, "h5", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](203, "Apprentissage flexible");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](204, "p", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](205, "Acc\u00E9dez \u00E0 vos cours depuis n'importe quel appareil, \u00E0 tout moment, o\u00F9 que vous soyez dans le monde.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](206, "div", 85)(207, "div", 86)(208, "div", 87)(209, "div", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](210, "img", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](211, "div", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](212, "i", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](213, "h5", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](214, "Acc\u00E8s \u00E0 vie");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](215, "p", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](216, "Une fois inscrit, les cours vous appartiennent pour toujours mises \u00E0 jour et nouveaux contenus inclus.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](217, "div", 85)(218, "div", 86)(219, "div", 87)(220, "div", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](221, "img", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](222, "div", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](223, "i", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](224, "h5", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](225, "Formateurs experts");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](226, "p", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](227, "Chaque instructeur est un professionnel actif, s\u00E9lectionn\u00E9 selon des crit\u00E8res p\u00E9dagogiques rigoureux.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](228, "section", 99)(229, "div", 1)(230, "h6", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](231, " Reconnu par ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](232, "span", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](233, "20+");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](234, " institutions et entreprises partenaires ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](235, "div", 102)(236, "ngx-slick-carousel", 103)(237, "div", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](238, "img", 105);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](239, "div", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](240, "img", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](241, "div", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](242, "img", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](243, "div", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](244, "img", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](245, "div", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](246, "img", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](247, "div", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](248, "img", 110);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](249, "section", 111)(250, "div", 1)(251, "div", 112)(252, "div", 113)(253, "div", 114)(254, "h2", 115);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](255, "Pr\u00EAt(e) \u00E0 transformer votre carri\u00E8re ?");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](256, "p", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](257, "Rejoignez des milliers d'apprenants qui font confiance \u00E0 Dreams LMS pour monter en comp\u00E9tences.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](258, "div", 117)(259, "a", 118);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](260, "i", 119);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](261, " S'inscrire gratuitement ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](262, "div", 120)(263, "section", 26)(264, "div", 1)(265, "div", 113)(266, "div", 121)(267, "div", 28)(268, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](269, "img", 122);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](270, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](271, "img", 123);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](272, "div", 124);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](273, "img", 125);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](274, "img", 126);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](275, "div", 121)(276, "div", 127)(277, "div", 36)(278, "span", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](279, "About");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](280, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](281, "Empowering Learning, Inspiring Growth");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](282, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](283, "At DreamsLMS, we make education accessible to all with interactive courses and expert-led content. Learn anytime, anywhere, and achieve your goals seamlessly.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](284, "div", 38)(285, "div")(286, "span", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](287, "i", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](288, "div", 41)(289, "h6", 128);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](290, "Learn from anywhere");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](291, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](292, "Learning from anywhere has become a transform aspect of modern education, allowing individuals.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](293, "div", 38)(294, "div")(295, "span", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](296, "i", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](297, "div", 41)(298, "h6", 128);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](299, "Expert Mentors");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](300, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](301, "Expert mentors are invaluable assets in any field, providing seasoned guidance knowledge.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](302, "section", 83)(303, "div", 1)(304, "div", 84)(305, "span", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](306, "Our Benefits");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](307, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](308, "Master the Skills to Drive your Career");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](309, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](310, "The right course, guided by an expert mentor, can provide invaluable insights, practical skills.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](311, "div", 129)(312, "div", 85)(313, "div", 130)(314, "div", 87)(315, "div", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](316, "img", 131);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](317, "div", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](318, "i", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](319, "h5", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](320, "Flexible Learning");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](321, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](322, "We believe that high-quality education should be accessible to everyone. Our pricing form in models are designed.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](323, "div", 85)(324, "div", 130)(325, "div", 87)(326, "div", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](327, "img", 132);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](328, "div", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](329, "i", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](330, "h5", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](331, "Lifetime Access");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](332, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](333, "When you enroll in our courses, you\u00E2\u20AC\u2122re not just signing up for a temporary learning to experience you\u00E2\u20AC\u2122re making.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](334, "div", 85)(335, "div", 130)(336, "div", 87)(337, "div", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](338, "img", 133);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](339, "div", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](340, "i", 134);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](341, "h5", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](342, "Expert Instruction");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](343, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](344, "Our instructors are seasoned professionals with years of experience in their respective fields & Experts advice");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](345, "section", 99)(346, "div", 1)(347, "h6", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](348, "Trusted by ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](349, "span", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](350, "20+");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](351, " Institutions Around the World");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](352, "div", 102)(353, "ngx-slick-carousel", 103)(354, "div", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](355, "img", 135);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](356, "div", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](357, "img", 136);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](358, "div", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](359, "img", 137);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](360, "div", 138);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](361, "img", 139);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](362, "div", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](363, "img", 140);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](364, "div", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](365, "img", 141);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](366, "div", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](367, "img", 142);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](368, "div", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](369, "img", 136);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](370, "div", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](371, "img", 137);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](372, "div", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](373, "img", 139);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](374, "div", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](375, "img", 140);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](376, "div", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](377, "img", 141);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](378, "section", 143)(379, "div", 1)(380, "div", 144)(381, "div", 145)(382, "div", 146)(383, "div", 147)(384, "div", 148)(385, "div", 149);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](386, "img", 150);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](387, "div", 151)(388, "h4", 152)(389, "span", 153);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](390, "10");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](391, "K");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](392, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](393, "Online Courses");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](394, "div", 145)(395, "div", 146)(396, "div", 147)(397, "div", 148)(398, "div", 149);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](399, "img", 154);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](400, "div", 151)(401, "h4", 155)(402, "span", 153);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](403, "200");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](404, "+");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](405, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](406, "Expert Tutors");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](407, "div", 145)(408, "div", 146)(409, "div", 147)(410, "div", 148)(411, "div", 149);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](412, "img", 156);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](413, "div", 151)(414, "h4", 157)(415, "span", 153);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](416, "6");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](417, "K+");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](418, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](419, "Certified Courses");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](420, "div", 145)(421, "div", 146)(422, "div", 158)(423, "div", 149);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](424, "img", 159);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](425, "div", 151)(426, "h4", 160)(427, "span", 153);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](428, "60");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](429, "K+");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](430, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](431, "Online Students");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](432, "section", 161)(433, "div", 1)(434, "div", 84)(435, "span", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](436, "Featured Instructors");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](437, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](438, "Top Class & Professional Instructors");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](439, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](440, "Words from Those Who\u00E2\u20AC\u2122ve Experienced Real Growth.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](441, "div", 162)(442, "ngx-slick-carousel", 103)(443, "div", 163)(444, "div")(445, "div", 164)(446, "div", 165)(447, "div", 166)(448, "a", 167);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](449, "img", 168);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](450, "i", 169);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](451, "h6", 42)(452, "a", 167);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](453, "Brenda Slaton");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](454, "p", 170);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](455, "Designer");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](456, "p", 171);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](457, "This mentor helped me understand concepts that I had been struggling with for weeks.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](458, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](459, "i", 172)(460, "i", 172)(461, "i", 172)(462, "i", 172)(463, "i", 172);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](464, "div", 163)(465, "div")(466, "div", 164)(467, "div", 165)(468, "div", 166)(469, "a", 167);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](470, "img", 173);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](471, "i", 169);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](472, "h6", 42)(473, "a", 167);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](474, "Adrian Dennis");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](475, "p", 170);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](476, "Developer");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](477, "p", 171);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](478, "I\u00E2\u20AC\u2122ve learned so much from my mentor\u00E2\u20AC\u2122s personal experience.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](479, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](480, "i", 172)(481, "i", 172)(482, "i", 172)(483, "i", 172)(484, "i", 172);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](485, "div", 163)(486, "div")(487, "div", 164)(488, "div", 165)(489, "div", 166)(490, "a", 167);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](491, "img", 174);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](492, "i", 169);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](493, "h6", 42)(494, "a", 167);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](495, "Adrian Coztanza");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](496, "p", 170);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](497, "Architect");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](498, "p", 171);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](499, "The advice was useful, but I wish my mentor had been more available for follow-up discussions.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](500, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](501, "i", 172)(502, "i", 172)(503, "i", 172)(504, "i", 172)(505, "i", 172);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](506, "div", 163)(507, "div")(508, "div", 164)(509, "div", 165)(510, "div", 166)(511, "a", 167);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](512, "img", 174);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](513, "i", 169);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](514, "h6", 42)(515, "a", 167);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](516, "Adrian Coztanza");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](517, "p", 170);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](518, "Architect");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](519, "p", 171);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](520, "The advice was useful, but I wish my mentor had been more available for follow-up discussions.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](521, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](522, "i", 172)(523, "i", 172)(524, "i", 172)(525, "i", 172)(526, "i", 172);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](527, "section", 175)(528, "div", 1)(529, "div", 113)(530, "div", 176)(531, "div", 177);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](532, "img", 178);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](533, "div", 179);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](534, "i", 180);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](535, "div", 181)(536, "div", 36)(537, "span", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](538, "FAQs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](539, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](540, "Frequently Asked Questions");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](541, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](542, "Explore detailed answers to the most common questions about our platform.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](543, "div", 182)(544, "div", 183)(545, "div", 184)(546, "h2", 185)(547, "a", 186);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](548, " What\u00E2\u20AC\u2122s DreamLMS want to give you? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](549, "i", 187);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](550, "div", 188)(551, "div", 189)(552, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](553, "DreamLMS aims to provide you with a comprehensive and intuitive learning platform that enhances your educational experience.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](554, "div", 190)(555, "h2", 191)(556, "a", 192);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](557, " Why choose us for your education? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](558, "i", 187);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](559, "div", 193)(560, "div", 189)(561, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](562, "DreamLMS aims to provide you with a comprehensive and intuitive learning platform that enhances your educational experience.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](563, "div", 190)(564, "h2", 194)(565, "a", 195);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](566, " How We Provide Service For you? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](567, "i", 187);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](568, "div", 196)(569, "div", 189)(570, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](571, "DreamLMS aims to provide you with a comprehensive and intuitive learning platform that enhances your educational experience.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](572, "div", 190)(573, "h2", 197)(574, "a", 198);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](575, " Do you have a monthly plan? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](576, "i", 187);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](577, "div", 199)(578, "div", 189)(579, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](580, "DreamLMS aims to provide you with a comprehensive and intuitive learning platform that enhances your educational experience.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](581, "div", 190)(582, "h2", 200)(583, "a", 201);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](584, " Are you Affordable For Your Course ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](585, "i", 187);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](586, "div", 202)(587, "div", 189)(588, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](589, "DreamLMS aims to provide you with a comprehensive and intuitive learning platform that enhances your educational experience.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx.routes.courseListPublic);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx.routes.contactUs);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](216);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("config", ctx.instructorSlider);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx.routes.register);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](94);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("config", ctx.instructorSlider);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](89);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("config", ctx.testimonialSlider);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__.SlickCarouselModule, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__.SlickCarouselComponent, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__.SlickItemDirective],
      styles: ["/* \n   About Us  Custom Styles\n    */\n/* pill badge */\n.about-pill {\n  padding: 7px 18px 7px 14px;\n  border-radius: 999px;\n  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.12));\n  border: 1px solid rgba(99, 102, 241, 0.2);\n  color: #4338ca;\n  font-size: 13px;\n  font-weight: 700;\n}\n\n/* hero */\n.about-hero-sec {\n  padding: 80px 0 60px;\n}\n\n.about-hero-title {\n  font-size: clamp(2rem, 4vw, 2.8rem);\n  font-weight: 800;\n  line-height: 1.2;\n  color: #0f172a;\n}\n.about-hero-title span {\n  color: #6366f1;\n}\n\n.about-hero-img-wrap {\n  position: relative;\n}\n.about-hero-img-wrap img {\n  border-radius: 28px;\n}\n\n.about-float-card {\n  position: absolute;\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 20px;\n  background: #fff;\n  border-radius: 18px;\n  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.14);\n  border: 1px solid rgba(226, 232, 240, 0.8);\n}\n.about-float-card .fw-800 {\n  font-weight: 800;\n}\n\n.about-float-1 {\n  top: 20px;\n  right: -12px;\n}\n\n.about-float-2 {\n  bottom: 30px;\n  left: -12px;\n}\n\n/* values */\n.about-values-sec {\n  padding: 80px 0;\n  background: #f8fafc;\n}\n\n.about-value-card {\n  background: #fff;\n  border-radius: 22px;\n  padding: 28px;\n  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.06);\n  border: 1px solid rgba(226, 232, 240, 0.7);\n  height: 100%;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.about-value-card:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 16px 40px rgba(99, 102, 241, 0.14);\n}\n\n.about-value-icon {\n  width: 60px;\n  height: 60px;\n  border-radius: 18px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n}\n\n/* reuse cat-p-* from admin/home */\n.cat-p-indigo.about-value-icon {\n  background: #eef2ff;\n  color: #4338ca;\n}\n\n.cat-p-purple.about-value-icon {\n  background: #faf5ff;\n  color: #7e22ce;\n}\n\n.cat-p-emerald.about-value-icon {\n  background: #f0fdf4;\n  color: #15803d;\n}\n\n.cat-p-amber.about-value-icon {\n  background: #fff7ed;\n  color: #c2410c;\n}\n\n.cat-p-pink.about-value-icon {\n  background: #fdf2f8;\n  color: #be185d;\n}\n\n.cat-p-sky.about-value-icon {\n  background: #e0f2fe;\n  color: #0369a1;\n}\n\n/* stats */\n.about-stats-sec {\n  padding: 80px 0;\n  background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);\n}\n\n.about-stat-item {\n  padding: 20px 0;\n}\n\n.about-stat-icon {\n  width: 64px;\n  height: 64px;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.12);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 26px;\n  color: #fff;\n  margin-bottom: 14px;\n}\n\n.about-stat-num {\n  font-size: 2.6rem;\n  font-weight: 900;\n  color: #fff;\n  margin-bottom: 4px;\n  letter-spacing: -0.02em;\n}\n\n.about-stats-sec .text-white-50 {\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n\n.about-stats-sec .text-muted {\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n\n/* about-us-banner list for notre histoire section */\n.about-us-banner {\n  padding: 14px 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.about-us-banner:last-child {\n  border: none;\n}\n.about-us-banner .about-icon {\n  width: 48px;\n  height: 48px;\n  flex-shrink: 0;\n}\n\n/* cta */\n.about-cta-sec {\n  padding: 60px 0;\n  background: #f8fafc;\n}\n\n.about-cta-inner {\n  background: linear-gradient(135deg, #312e81 0%, #4f46e5 50%, #7c3aed 100%);\n  border-radius: 32px;\n  padding: 52px 56px;\n  position: relative;\n  overflow: hidden;\n}\n.about-cta-inner::before {\n  content: \"\";\n  position: absolute;\n  top: -60px;\n  right: -60px;\n  width: 280px;\n  height: 280px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.06);\n  pointer-events: none;\n}\n.about-cta-inner::after {\n  content: \"\";\n  position: absolute;\n  bottom: -80px;\n  left: -40px;\n  width: 240px;\n  height: 240px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.04);\n  pointer-events: none;\n}\n\n/* client section inside about page */\n.client-section {\n  padding: 50px 0 60px;\n  background: #fff;\n}\n\n.institutions-items {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcGFnZXMvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0tBQUE7QUFJQSxlQUFBO0FBQ0E7RUFDRSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0ZBQUE7RUFDQSx5Q0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQSxTQUFBO0FBQ0E7RUFDRSxvQkFBQTtBQUFGOztBQUVBO0VBQ0UsbUNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGO0FBQUU7RUFBTyxjQUFBO0FBR1Q7O0FBREE7RUFDRSxrQkFBQTtBQUlGO0FBSEU7RUFBTSxtQkFBQTtBQU1SOztBQUpBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0VBQ0EsMENBQUE7QUFPRjtBQU5FO0VBQVUsZ0JBQUE7QUFTWjs7QUFQQTtFQUFpQixTQUFBO0VBQVcsWUFBQTtBQVk1Qjs7QUFYQTtFQUFpQixZQUFBO0VBQWMsV0FBQTtBQWdCL0I7O0FBZEEsV0FBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBaUJGOztBQWZBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw2Q0FBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLHFEQUFBO0FBa0JGO0FBakJFO0VBQ0UsMkJBQUE7RUFDQSxnREFBQTtBQW1CSjs7QUFoQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQW1CRjs7QUFoQkEsa0NBQUE7QUFDQTtFQUFrQyxtQkFBQTtFQUFxQixjQUFBO0FBcUJ2RDs7QUFwQkE7RUFBa0MsbUJBQUE7RUFBcUIsY0FBQTtBQXlCdkQ7O0FBeEJBO0VBQWtDLG1CQUFBO0VBQXFCLGNBQUE7QUE2QnZEOztBQTVCQTtFQUFrQyxtQkFBQTtFQUFxQixjQUFBO0FBaUN2RDs7QUFoQ0E7RUFBa0MsbUJBQUE7RUFBcUIsY0FBQTtBQXFDdkQ7O0FBcENBO0VBQWtDLG1CQUFBO0VBQXFCLGNBQUE7QUF5Q3ZEOztBQXZDQSxVQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsNkRBQUE7QUEwQ0Y7O0FBeENBO0VBQW1CLGVBQUE7QUE0Q25COztBQTNDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUE4Q0Y7O0FBNUNBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBK0NGOztBQTdDQTtFQUFrQywwQ0FBQTtBQWlEbEM7O0FBaERBO0VBQStCLDBDQUFBO0FBb0QvQjs7QUFsREEsb0RBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQSxnQ0FBQTtBQXFERjtBQXBERTtFQUFlLFlBQUE7QUF1RGpCO0FBdERFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBd0RKOztBQXBEQSxRQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUF1REY7O0FBckRBO0VBQ0UsMEVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQXdERjtBQXZERTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0Esb0JBQUE7QUF5REo7QUF2REU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLG9CQUFBO0FBeURKOztBQXJEQSxxQ0FBQTtBQUNBO0VBQWtCLG9CQUFBO0VBQXNCLGdCQUFBO0FBMER4Qzs7QUF6REE7RUFBc0IsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLHVCQUFBO0VBQXlCLGFBQUE7QUFnRW5GIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG4gICBBYm91dCBVcyAgQ3VzdG9tIFN0eWxlc1xuICAgICovXG5cbi8qIHBpbGwgYmFkZ2UgKi9cbi5hYm91dC1waWxsIHtcbiAgcGFkZGluZzogN3B4IDE4cHggN3B4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDk5LDEwMiwyNDEsLjEpLCByZ2JhKDEzOSw5MiwyNDYsLjEyKSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoOTksMTAyLDI0MSwuMik7XG4gIGNvbG9yOiAjNDMzOGNhO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi8qIGhlcm8gKi9cbi5hYm91dC1oZXJvLXNlYyB7XG4gIHBhZGRpbmc6IDgwcHggMCA2MHB4O1xufVxuLmFib3V0LWhlcm8tdGl0bGUge1xuICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDR2dywgMi44cmVtKTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgY29sb3I6ICMwZjE3MmE7XG4gIHNwYW4geyBjb2xvcjogIzYzNjZmMTsgfVxufVxuLmFib3V0LWhlcm8taW1nLXdyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGltZyB7IGJvcmRlci1yYWRpdXM6IDI4cHg7IH1cbn1cbi5hYm91dC1mbG9hdC1jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIGJveC1zaGFkb3c6IDAgMjBweCA1MHB4IHJnYmEoMTUsMjMsNDIsLjE0KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMjYsMjMyLDI0MCwuOCk7XG4gIC5mdy04MDAgeyBmb250LXdlaWdodDogODAwOyB9XG59XG4uYWJvdXQtZmxvYXQtMSB7IHRvcDogMjBweDsgcmlnaHQ6IC0xMnB4OyB9XG4uYWJvdXQtZmxvYXQtMiB7IGJvdHRvbTogMzBweDsgbGVmdDogLTEycHg7IH1cblxuLyogdmFsdWVzICovXG4uYWJvdXQtdmFsdWVzLXNlYyB7XG4gIHBhZGRpbmc6IDgwcHggMDtcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYztcbn1cbi5hYm91dC12YWx1ZS1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgcGFkZGluZzogMjhweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDE1LDIzLDQyLC4wNik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjI2LDIzMiwyNDAsLjcpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZSwgYm94LXNoYWRvdyAuM3MgZWFzZTtcbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xuICAgIGJveC1zaGFkb3c6IDAgMTZweCA0MHB4IHJnYmEoOTksMTAyLDI0MSwuMTQpO1xuICB9XG59XG4uYWJvdXQtdmFsdWUtaWNvbiB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4vKiByZXVzZSBjYXQtcC0qIGZyb20gYWRtaW4vaG9tZSAqL1xuLmNhdC1wLWluZGlnby5hYm91dC12YWx1ZS1pY29uICB7IGJhY2tncm91bmQ6ICNlZWYyZmY7IGNvbG9yOiAjNDMzOGNhOyB9XG4uY2F0LXAtcHVycGxlLmFib3V0LXZhbHVlLWljb24gIHsgYmFja2dyb3VuZDogI2ZhZjVmZjsgY29sb3I6ICM3ZTIyY2U7IH1cbi5jYXQtcC1lbWVyYWxkLmFib3V0LXZhbHVlLWljb24geyBiYWNrZ3JvdW5kOiAjZjBmZGY0OyBjb2xvcjogIzE1ODAzZDsgfVxuLmNhdC1wLWFtYmVyLmFib3V0LXZhbHVlLWljb24gICB7IGJhY2tncm91bmQ6ICNmZmY3ZWQ7IGNvbG9yOiAjYzI0MTBjOyB9XG4uY2F0LXAtcGluay5hYm91dC12YWx1ZS1pY29uICAgIHsgYmFja2dyb3VuZDogI2ZkZjJmODsgY29sb3I6ICNiZTE4NWQ7IH1cbi5jYXQtcC1za3kuYWJvdXQtdmFsdWUtaWNvbiAgICAgeyBiYWNrZ3JvdW5kOiAjZTBmMmZlOyBjb2xvcjogIzAzNjlhMTsgfVxuXG4vKiBzdGF0cyAqL1xuLmFib3V0LXN0YXRzLXNlYyB7XG4gIHBhZGRpbmc6IDgwcHggMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzFlMWI0YiAwJSwgIzMxMmU4MSAxMDAlKTtcbn1cbi5hYm91dC1zdGF0LWl0ZW0geyBwYWRkaW5nOiAyMHB4IDA7IH1cbi5hYm91dC1zdGF0LWljb24ge1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4xMik7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbn1cbi5hYm91dC1zdGF0LW51bSB7XG4gIGZvbnQtc2l6ZTogMi42cmVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbn1cbi5hYm91dC1zdGF0cy1zZWMgLnRleHQtd2hpdGUtNTAgeyBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNjApICFpbXBvcnRhbnQ7IH1cbi5hYm91dC1zdGF0cy1zZWMgLnRleHQtbXV0ZWQgeyBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNjApICFpbXBvcnRhbnQ7IH1cblxuLyogYWJvdXQtdXMtYmFubmVyIGxpc3QgZm9yIG5vdHJlIGhpc3RvaXJlIHNlY3Rpb24gKi9cbi5hYm91dC11cy1iYW5uZXIge1xuICBwYWRkaW5nOiAxNHB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmNWY5O1xuICAmOmxhc3QtY2hpbGQgeyBib3JkZXI6IG5vbmU7IH1cbiAgLmFib3V0LWljb24ge1xuICAgIHdpZHRoOiA0OHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBmbGV4LXNocmluazogMDtcbiAgfVxufVxuXG4vKiBjdGEgKi9cbi5hYm91dC1jdGEtc2VjIHtcbiAgcGFkZGluZzogNjBweCAwO1xuICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xufVxuLmFib3V0LWN0YS1pbm5lciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMzMTJlODEgMCUsICM0ZjQ2ZTUgNTAlLCAjN2MzYWVkIDEwMCUpO1xuICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICBwYWRkaW5nOiA1MnB4IDU2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtNjBweDtcbiAgICByaWdodDogLTYwcHg7XG4gICAgd2lkdGg6IDI4MHB4O1xuICAgIGhlaWdodDogMjgwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjA2KTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTgwcHg7XG4gICAgbGVmdDogLTQwcHg7XG4gICAgd2lkdGg6IDI0MHB4O1xuICAgIGhlaWdodDogMjQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjA0KTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxufVxuXG4vKiBjbGllbnQgc2VjdGlvbiBpbnNpZGUgYWJvdXQgcGFnZSAqL1xuLmNsaWVudC1zZWN0aW9uIHsgcGFkZGluZzogNTBweCAwIDYwcHg7IGJhY2tncm91bmQ6ICNmZmY7IH1cbi5pbnN0aXR1dGlvbnMtaXRlbXMgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgcGFkZGluZzogMTBweDsgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
  return AboutUsComponent;
})();

/***/ })

}]);
//# sourceMappingURL=5871.js.map