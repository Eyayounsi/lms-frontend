"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[3911],{

/***/ 63911:
/*!*************************************************************!*\
  !*** ./src/app/features/home-list/home3/home3.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Home3Component: () => (/* binding */ Home3Component)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-owl-carousel-o */ 96821);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ 37502);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ 96825);
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-slick-carousel */ 49953);
/* harmony import */ var ngx_countup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-countup */ 67305);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 16060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 85422);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 8724);
















const _c0 = () => ({
  enableScrollSpy: true
});
const _c1 = a0 => ({
  "selected": a0
});
function Home3Component_ng_template_1010_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 237)(1, "div", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "img", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function Home3Component_ng_template_1011_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 237)(1, "div", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "img", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function Home3Component_ng_template_1012_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 237)(1, "div", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "img", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function Home3Component_ng_template_1013_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 237)(1, "div", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "img", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function Home3Component_ng_template_1014_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 237)(1, "div", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "img", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function Home3Component_ng_template_1015_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 237)(1, "div", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "img", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
let Home3Component = /*#__PURE__*/(() => {
  class Home3Component {
    router;
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_4__.routes;
    topCategories = [];
    trendingCourses = [];
    featuredInstructor = [];
    latestBlogs = [];
    featuredCourses = [];
    career = [];
    universitiesCompanies = [];
    testimonial = [];
    isSelected = [false];
    selected = '1';
    topCategoriesOwlOptions = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    trendingcrouse = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 768,
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
    instructorCrouse = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 768,
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
    brandCarousel = {
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
        1040: {
          items: 6,
          dots: false
        }
      }
    };
    testimonials = {
      lazyLoad: 'ondemand',
      infinite: true
    };
    brandSlide2 = {
      lazyLoad: 'ondemand',
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: false,
      speed: 3000,
      autoplaySpeed: 1800,
      arrows: false,
      responsive: [{
        breakpoint: 1199,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }]
    };
    slideConfig = {
      lazyLoad: 'ondemand',
      infinite: true
    };
    constructor(router) {
      this.router = router;
    }
    ngOnInit() {
      aos__WEBPACK_IMPORTED_MODULE_2__.init({
        duration: 1200,
        once: true
      });
    }
    toggleClass(slide) {
      slide.active = !slide.active;
    }
    directPath() {
      this.router.navigate(['/pages/course/course-list']);
    }
    iconSelect(index) {
      this.isSelected[index] = !this.isSelected[index];
    }
    onSubmit() {
      this.router.navigate([_shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_4__.routes.courseList]);
    }
    static ɵfac = function Home3Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Home3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: Home3Component,
      selectors: [["app-home3"]],
      decls: 1266,
      vars: 148,
      consts: [["slickModal", "slick-carousel"], [1, "banner-section-three", "d-flex", "align-items-center"], ["src", "assets/img/bg/bg-3.png", "alt", "img", 1, "img-fluid", "banner-bg-01"], ["src", "assets/img/bg/bg-4.png", "alt", "img", 1, "img-fluid", "banner-bg-02"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6"], ["data-aos", "fade-up", 1, "home-slide-face", "aos"], [1, "home-slide-text"], [1, "fw-bold", "text-uppercase"], [1, "mt-4"], [1, "text-secondary"], [1, "banner-content"], [1, "form", 3, "ngSubmit"], [1, "form-inner"], [1, "input-group"], [1, "fa-solid", "fa-magnifying-glass", "search-icon"], ["type", "email", "placeholder", "Search School, Online eductional centers, etc", 1, "form-control"], [1, "drop-detail"], ["placeholder", "Category", 1, "custom-mat-select", "select"], ["value", "1"], ["type", "submit", 1, "btn", "sub-btn"], [1, "fas", "fa-arrow-right"], [1, "trust-user"], [1, "trust-rating", "d-flex", "align-items-center"], [1, "rate-head"], [1, "rating", "d-flex", "align-items-center"], [1, "d-inline-block", "average-rating"], [1, "fas", "fa-star", "filled"], [1, "col-lg-6", "d-flex", "align-items-center"], ["data-aos", "fade-up", 1, "banner-image", "aos"], ["src", "assets/img/hero/hero-2.png", "alt", "Img"], [1, "section", "student-course"], [1, "course-widget"], [1, "row"], [1, "col-lg-3", "col-md-6"], [1, "course-full-width"], ["data-aos", "fade-up", 1, "blur-border", "course-radius", "align-items-center", "aos"], [1, "online-course", "d-flex", "align-items-center"], [1, "course-img"], ["src", "assets/img/pencil-icon.svg", "alt", ""], [1, "course-inner-content"], [3, "countUp", "options"], [1, "col-lg-3", "col-md-6", "d-flex"], ["data-aos", "fade-up", 1, "blur-border", "course-radius", "aos"], ["src", "assets/img/cources-icon.svg", "alt", ""], ["src", "assets/img/certificate-icon.svg", "alt", ""], ["src", "assets/img/gratuate-icon.svg", "alt", ""], [1, "section", "how-it-works"], ["data-aos", "fade-up", 1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "aos"], [1, "section-header"], [1, "fw-medium", "text-secondary", "fs-18", "fw-bold", "mb-2", "d-inline-block"], [1, "mb-0"], [1, "btn", "btn-secondary", "btn-xl", 3, "routerLink"], ["data-aos", "fade-up", 1, "mentoring-course"], [3, "config"], ["ngxSlickItem", "", 1, "categories-item", "categories-item-two"], [1, "categories-icon"], ["src", "assets/img/category/icons/icon-1.svg", "alt", "Img"], [3, "routerLink"], ["src", "assets/img/category/icons/icon-2.svg", "alt", "Img"], ["src", "assets/img/category/icons/icon-3.svg", "alt", "Img"], ["src", "assets/img/category/icons/icon-4.svg", "alt", "Img"], ["src", "assets/img/category/icons/icon-5.png", "alt", "Img"], [1, "section", "new-course"], [1, "home-three-sec-bg"], ["src", "assets/img/bg/bg-3.png", "alt", "img", 1, "img-fluid", "sec-bg-01"], ["src", "assets/img/bg/bg-4.png", "alt", "img", 1, "img-fluid", "sec-bg-02"], [1, "course-feature"], [1, "col-lg-4", "col-md-6", "d-flex"], ["data-aos", "fade-up", 1, "course-item", "course-item-three", "mx-0", "flex-fill", "aos"], ["alt", "Img", "src", "assets/img/course/course-40.jpg", 1, "img-fluid"], [1, "price"], [1, "course-content"], [1, "course-user"], [1, "course-user-img"], ["src", "assets/img/avatar/avatar-21.jpg", "alt", "Img", 1, "img-fluid"], [1, "course-name"], ["href", "javascript:void(0);", 1, "fav-icon", 3, "click", "ngClass"], [1, "fa-regular", "fa-heart"], [1, "title"], [1, "course-info", "d-flex", "align-items-center"], [1, "course-lesson", "d-flex", "align-items-center"], ["src", "assets/img/icons/icon-3.svg", "alt", "Img"], [1, "course-time", "d-flex", "align-items-center"], ["src", "assets/img/icons/icon-4.svg", "alt", "Img"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "rating", "m-0"], [1, "fas", "fa-star"], [1, "btn", "btn-primary", "btn-xl", "d-inline-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-shopping-cart5", "me-2"], ["alt", "Img", "src", "assets/img/course/course-41.jpg", 1, "img-fluid"], ["src", "assets/img/avatar/avatar-22.jpg", "alt", "Img", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/course/course-42.jpg", 1, "img-fluid"], [1, "price", "combo"], ["src", "assets/img/avatar/avatar-25.jpg", "alt", "Img", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/course/course-43.jpg", 1, "img-fluid"], ["src", "assets/img/avatar/avatar-24.jpg", "alt", "Img", 1, "img-fluid"], [1, "course-share", "d-flex", "align-items-center", "justify-content-center"], ["alt", "Img", "src", "assets/img/course/course-45.jpg", 1, "img-fluid"], ["src", "assets/img/avatar/avatar-23.jpg", "alt", "Img", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/course/course-44.jpg", 1, "img-fluid"], ["src", "assets/img/avatar/avatar-26.jpg", "alt", "Img", 1, "img-fluid"], [1, "section", "master-skill"], [1, "row", "align-items-end"], [1, "col-lg-6", "col-md-12"], ["data-aos", "fade-up", 1, "section-header", "aos"], ["data-aos", "fade-up", 1, "career-group", "aos"], [1, "row", "row-gap-4"], [1, "col-lg-6", "col-md-6", "d-flex"], [1, "certified-item", "d-flex", "align-items-center", "flex-fill"], [1, "certified-img"], ["src", "assets/img/icons/icon-22.svg", "alt", "Img", 1, "img-fluid"], ["src", "assets/img/icons/icon-17.svg", "alt", "Img", 1, "img-fluid"], ["src", "assets/img/icons/icon-23.svg", "alt", "Img", 1, "img-fluid"], ["src", "assets/img/icons/icon-16.svg", "alt", "Img", 1, "img-fluid"], ["data-aos", "fade-up", 1, "career-img", "aos"], ["src", "assets/img/bg/bg-2.png", "alt", "Img", 1, "img-fluid", "master-bg"], ["src", "assets/img/feature/feature-16.png", "alt", "Img", 1, "img-fluid", "girl-img"], ["src", "assets/img/icons/icon-18.svg", "alt", "Img", 1, "img-fluid", "float-img-01"], ["src", "assets/img/icons/icon-19.svg", "alt", "Img", 1, "img-fluid", "float-img-02"], ["src", "assets/img/icons/icon-20.svg", "alt", "Img", 1, "img-fluid", "float-img-03"], ["src", "assets/img/icons/icon-21.svg", "alt", "Img", 1, "img-fluid", "float-img-04"], [1, "section", "trend-course"], ["data-aos", "fade-up", 1, "trending-course", "owl-theme", "aos"], ["ngxSlickItem", ""], [1, "course-box", "trend-box"], ["src", "assets/img/avatar/avatar-27.jpg", "alt", "Img", 1, "img-fluid"], ["href", "javascript:void(0);"], ["src", "assets/img/icons/icon-3.svg", "alt", "Img", 1, "img-fluid"], ["src", "assets/img/icons/icon-4.svg", "alt", "Img", 1, "img-fluid"], [1, "course-box", "d-flex", "aos"], [1, "rating-img", "d-flex", "align-items-center"], [1, "course-view", "d-flex", "align-items-center"], [1, "feature-instructors"], ["data-aos", "fade-up", 1, "section-header", "text-center", "aos"], ["data-aos", "fade-up", 1, "instructors-course", "aos"], ["ngxSlickItem", "", 1, "instructor-item", "instructor-item-two"], [1, "instructors-img"], ["tabindex", "0", 3, "routerLink"], ["alt", "Img", "src", "assets/img/instructor/instructor-09.jpg", 1, "img-fluid"], [1, "position-absolute", "start-0", "top-0", "d-flex", "align-items-start", "w-100", "z-index-2", "p-3"], [1, "verify"], [1, "isax", "isax-verify5"], [1, "course-count", "ms-auto", 3, "routerLink"], [1, "position-absolute", "end-0", "bottom-0", "d-flex", "align-items-start", "w-100", "z-index-2", "p-3"], ["href", "javascript:void(0);", 1, "favourite", "selected", "ms-auto"], [1, "isax", "isax-heart"], [1, "instructor-content"], [1, "designation"], [1, "student-count"], [1, "isax", "isax-profile-2user5", "text-secondary", "me-2"], ["alt", "Img", "src", "assets/img/instructor/instructor-10.jpg", 1, "img-fluid"], ["href", "javascript:void(0);", 1, "favourite", "ms-auto"], [1, "isax", "isax-profile-2user5", "text-warning", "me-2"], ["alt", "Img", "src", "assets/img/instructor/instructor-11.jpg", 1, "img-fluid"], [1, "isax", "isax-profile-2user5", "text-primary", "me-2"], ["alt", "Img", "src", "assets/img/instructor/instructor-12.jpg", 1, "img-fluid"], [1, "isax", "isax-profile-2user5", "text-danger", "me-2"], [1, "isax", "isax-profile-2user5", "text-pink", "me-2"], [1, "section", "lead-companies"], ["data-aos", "fade-up", 1, "lead-group", "aos"], [1, "lead-group-slider", "owl-theme"], [3, "options"], ["carouselSlide", ""], [1, "section", "share-knowledge"], [1, "row", "align-items-center", "row-gap-4"], [1, "col-md-6"], ["data-aos", "fade-up", 1, "knowledge-img", "aos"], ["src", "assets/img/feature/feature-17.svg", "alt", "Img", 1, "img-fluid"], [1, "col-md-6", "d-flex", "align-items-center"], ["data-aos", "fade-up", 1, "join-mentor", "aos"], [1, "list-unstyled", "mb-4"], [1, "d-flex", "mb-3"], [1, "isax", "isax-tick-circle5", "text-success", "fs-24", "me-2"], [1, "testimonial-four"], [1, "review"], [1, "fw-medium", "text-white", "fs-18", "fw-bold", "mb-2", "d-inline-block"], [1, "text-white", "mb-0"], ["data-aos", "fade-up", "data-sizes", "50vw ", 1, "mentor-testimonial", "lazy", "slider", "aos"], ["ngxSlickItem", "", 1, "d-flex", "justify-content-center"], [1, "testimonial-all"], [1, "testimonial-quotes"], ["src", "assets/img/icons/icon-28.png", "alt", "Img"], [1, "testimonial-content", "text-center", "align-items-center", "d-flex"], [1, "testimonial-info"], [1, "testimonial-icon"], ["src", "assets/img/icons/icon-29.png", "alt", "Img"], [1, "testimonial-user"], [1, "user-img"], ["data-aos", "fade-up", 1, "section", "become-instructors", "aos"], ["src", "assets/img/bg/bg-5.png", "alt", "", 1, "img-fluid", "become-instructors-bg1"], ["src", "assets/img/bg/bg-6.png", "alt", "", 1, "img-fluid", "become-instructors-bg2"], [1, "row", "row-gap-3"], [1, "col-md-6", "d-flex"], [1, "student-mentor", "d-flex", "flex-fill"], [1, "col-lg-7", "col-md-12"], [1, "top-instructors"], [1, "col-lg-5", "col-md-12"], [1, "mentor-img"], ["alt", "Img", "src", "assets/img/feature/feature-15.svg", 1, "img-fluid", "d-none", "d-lg-flex"], [1, "student-mentor", "bg-dark", "d-flex", "flex-fill"], [1, "mentor-img", "d-none", "d-lg-flex"], ["alt", "Img", "src", "assets/img/feature/feature-14.svg", 1, "img-fluid"], [1, "section", "latest-blog"], [1, "row", "row-gap-4", "justify-content-center"], [1, "col-md-6", "col-lg-4"], [1, "blog-wrap", "shadow-sm", "mb-0"], [1, "blog-img"], ["alt", "Img", "src", "assets/img/blog/blog-40.jpg", 1, "img-fluid"], [1, "blog-content"], [1, "blog-info", "mb-3"], ["href", "javascript:void(0);", 1, "blog-category"], [1, "blog-date"], [1, "isax", "isax-calendar-1"], ["alt", "Img", "src", "assets/img/blog/blog-41.jpg", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/blog/blog-42.jpg", 1, "img-fluid"], ["data-aos", "fade-up", 1, "enroll-group", "aos"], [1, "row", "row-gap-3", "justify-content-center"], [1, "col-lg-4", "col-md-6"], [1, "enroll-course", "d-flex", "align-items-center"], [1, "enroll-img"], ["src", "assets/img/icons/icon-5.svg", "alt", "Img", 1, "img-fluid"], [1, "course-count"], [1, "counterUp", 3, "countUp", "options"], ["src", "assets/img/icons/icon-6.svg", "alt", "Img", 1, "img-fluid"], ["src", "assets/img/icons/icon-7.svg", "alt", "Img", 1, "img-fluid"], [1, "lab-course"], ["data-aos", "fade-up", 1, "client-slider", "aos", 3, "config"], ["src", "assets/img/icons/icon-8.svg", "alt", "Img", 1, "img-fluid"], ["src", "assets/img/icons/icon-9.svg", "alt", "Img", 1, "img-fluid"], ["src", "assets/img/icons/icon-10.svg", "alt", "Img", 1, "img-fluid"], ["src", "assets/img/icons/icon-11.svg", "alt", "Img", 1, "img-fluid", "coda"], ["src", "assets/img/icons/icon-12.svg", "alt", "Img", 1, "img-fluid", "coda"], ["src", "assets/img/icons/icon-13.svg", "alt", "Img", 1, "img-fluid"], ["src", "assets/img/icons/icon-14.svg", "alt", "Img", 1, "img-fluid"], ["src", "assets/img/icons/icon-15.svg", "alt", "Img", 1, "img-fluid"], [1, "item"], [1, "lead-img"], ["alt", "Img", "src", "assets/img/client/22.svg", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/client/23.svg", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/client/24.svg", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/client/25.svg", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/client/26.svg", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/client/27.svg", 1, "img-fluid"]],
      template: function Home3Component_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "section", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 2)(2, "img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "div", 7)(7, "div", 8)(8, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "The Leader in Online Learning");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "h1", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "Engaging & Accessible ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Online Courses");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, " For All");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "Our specialized online courses are designed to bring the classroom experience to you, no matter where you are.");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 12)(18, "form", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngSubmit", function Home3Component_Template_form_ngSubmit_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.onSubmit());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 14)(20, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "i", 16)(22, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "span", 18)(24, "mat-select", 19)(25, "mat-option", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "mat-option", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "Angular");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "mat-option", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "Node Js");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "mat-option", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "React");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "mat-option", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, "Python");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](36, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "div", 23)(38, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39, "Trusted by over 15K Users worldwide since 2022");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "div", 24)(41, "div", 25)(42, "h2")(43, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, "1000");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45, "+");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "div", 26)(47, "h2", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48, "4.4");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](49, "i", 28)(50, "i", 28)(51, "i", 28)(52, "i", 28)(53, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "div", 29)(55, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](56, "img", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "section", 32)(58, "div", 4)(59, "div", 33)(60, "div", 34)(61, "div", 35)(62, "div", 36)(63, "div", 37)(64, "div", 38)(65, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](66, "img", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "div", 41)(68, "h4")(69, "span", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](70, "0");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](71, "K ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](73, "Online Courses");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](74, "div", 43)(75, "div", 36)(76, "div", 44)(77, "div", 38)(78, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](79, "img", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](80, "div", 41)(81, "h4")(82, "span", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](83, "0");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](84, "+ ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](85, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](86, "Expert Tutors");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](87, "div", 43)(88, "div", 36)(89, "div", 44)(90, "div", 38)(91, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](92, "img", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](93, "div", 41)(94, "h4")(95, "span", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](96, "0");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](97, "K+ ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](98, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](99, "Ceritified Courses");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](100, "div", 43)(101, "div", 36)(102, "div", 44)(103, "div", 38)(104, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](105, "img", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](106, "div", 41)(107, "h4")(108, "span", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](109, "0");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](110, "K + ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](111, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](112, "Online Students");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](113, "section", 48)(114, "div", 4)(115, "div", 49)(116, "div", 50)(117, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](118, "Favourite Course");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](119, "h2", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](120, "Top Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](121, "div")(122, "a", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](123, "View all Categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](124, "div", 54)(125, "ngx-slick-carousel", 55)(126, "div", 56)(127, "span", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](128, "img", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](129, "h5")(130, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](131, "Angular Development");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](132, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](133, "40 Instructors");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](134, "div", 56)(135, "span", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](136, "img", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](137, "h5")(138, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](139, "Docker Development");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](140, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](141, "45 Instructors");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](142, "div", 56)(143, "span", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](144, "img", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](145, "h5")(146, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](147, "Node JS Frontend");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](148, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](149, "40 Instructors");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](150, "div", 56)(151, "span", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](152, "img", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](153, "h5")(154, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](155, "Swift Development");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](156, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](157, "23 Instructors");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](158, "div", 56)(159, "span", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](160, "img", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](161, "h5")(162, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](163, "React Native");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](164, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](165, "80 Instructors");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](166, "div", 64)(167, "div", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](168, "img", 66)(169, "img", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](170, "div", 4)(171, "div", 49)(172, "div", 50)(173, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](174, "What\u2019s New");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](175, "h2", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](176, "Featured Courses");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](177, "div")(178, "a", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](179, "View all Categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](180, "div", 68)(181, "div", 34)(182, "div", 69)(183, "div", 70)(184, "div", 39)(185, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](186, "img", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](187, "div", 72)(188, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](189, "$200 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](190, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](191, "$990.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](192, "div", 73)(193, "div", 74)(194, "div", 75)(195, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](196, "img", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](197, "div", 77)(198, "h4")(199, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](200, "Nicole Brown");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](201, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](202, "Instructor");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](203, "a", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function Home3Component_Template_a_click_203_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.iconSelect(1));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](204, "i", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](205, "h3", 80)(206, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](207, "Information About UI/UX Design Degree");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](208, "div", 81)(209, "div", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](210, "img", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](211, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](212, "12+ Lesson");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](213, "div", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](214, "img", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](215, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](216, "9hr 30min");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](217, "div", 86)(218, "div", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](219, "i", 28)(220, "i", 28)(221, "i", 28)(222, "i", 28)(223, "i", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](224, "span", 27)(225, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](226, "4.0");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](227, " (15)");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](228, "a", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](229, "i", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](230, "Buy Now");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](231, "div", 69)(232, "div", 70)(233, "div", 39)(234, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](235, "img", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](236, "div", 72)(237, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](238, "$156");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](239, "div", 73)(240, "div", 74)(241, "div", 75)(242, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](243, "img", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](244, "div", 77)(245, "h4")(246, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](247, "Jenis R.");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](248, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](249, "Instructor");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](250, "a", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function Home3Component_Template_a_click_250_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.iconSelect(2));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](251, "i", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](252, "h3", 80)(253, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](254, "Wordpress for Beginners - Master Wordpress Quickly");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](255, "div", 81)(256, "div", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](257, "img", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](258, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](259, "11+ Lesson");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](260, "div", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](261, "img", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](262, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](263, "6hr 30min");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](264, "div", 86)(265, "div", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](266, "i", 28)(267, "i", 28)(268, "i", 28)(269, "i", 28)(270, "i", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](271, "span", 27)(272, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](273, "4.3");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](274, " (15)");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](275, "a", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](276, "i", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](277, "Buy Now");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](278, "div", 69)(279, "div", 70)(280, "div", 39)(281, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](282, "img", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](283, "div", 94)(284, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](285, "FREE");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](286, "div", 73)(287, "div", 74)(288, "div", 75)(289, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](290, "img", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](291, "div", 77)(292, "h4")(293, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](294, "Jesse Stevens");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](295, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](296, "Instructor");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](297, "a", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function Home3Component_Template_a_click_297_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.iconSelect(3));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](298, "i", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](299, "h3", 80)(300, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](301, "Sketch from A to Z (2022): Become an app designer");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](302, "div", 81)(303, "div", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](304, "img", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](305, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](306, "16+ Lesson");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](307, "div", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](308, "img", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](309, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](310, "12hr 30min");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](311, "div", 86)(312, "div", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](313, "i", 28)(314, "i", 28)(315, "i", 28)(316, "i", 28)(317, "i", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](318, "span", 27)(319, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](320, "4.5");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](321, " (15)");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](322, "a", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](323, "i", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](324, "Buy Now");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](325, "div", 69)(326, "div", 70)(327, "div", 39)(328, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](329, "img", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](330, "div", 72)(331, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](332, "$145");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](333, "div", 73)(334, "div", 74)(335, "div", 75)(336, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](337, "img", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](338, "div", 77)(339, "h4")(340, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](341, "Nicole Brown");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](342, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](343, "Instructor");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](344, "div", 98)(345, "a", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function Home3Component_Template_a_click_345_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.iconSelect(6));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](346, "i", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](347, "h3", 80)(348, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](349, "Learn Angular Fundamentals From beginning to advance lavel");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](350, "div", 81)(351, "div", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](352, "img", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](353, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](354, "10+ Lesson");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](355, "div", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](356, "img", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](357, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](358, "8hr 30min");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](359, "div", 86)(360, "div", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](361, "i", 28)(362, "i", 28)(363, "i", 28)(364, "i", 28)(365, "i", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](366, "span", 27)(367, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](368, "4.2");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](369, " (15)");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](370, "a", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](371, "i", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](372, "Buy Now");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](373, "div", 69)(374, "div", 70)(375, "div", 39)(376, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](377, "img", 99);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](378, "div", 94)(379, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](380, "Free");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](381, "div", 73)(382, "div", 74)(383, "div", 75)(384, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](385, "img", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](386, "div", 77)(387, "h4")(388, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](389, "John Smith");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](390, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](391, "Instructor");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](392, "a", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function Home3Component_Template_a_click_392_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.iconSelect(4));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](393, "i", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](394, "h3", 80)(395, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](396, "Build Responsive Real World Websites with HTML5 and CSS3");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](397, "div", 81)(398, "div", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](399, "img", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](400, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](401, "13+ Lesson");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](402, "div", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](403, "img", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](404, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](405, "10hr 30min");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](406, "div", 86)(407, "div", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](408, "i", 28)(409, "i", 28)(410, "i", 28)(411, "i", 28)(412, "i", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](413, "span", 27)(414, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](415, "4.0");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](416, " (15)");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](417, "a", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](418, "i", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](419, "Buy Now");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](420, "div", 69)(421, "div", 70)(422, "div", 39)(423, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](424, "img", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](425, "div", 94)(426, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](427, "$200 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](428, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](429, "$990.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](430, "div", 73)(431, "div", 74)(432, "div", 75)(433, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](434, "img", 102);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](435, "div", 77)(436, "h4")(437, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](438, "Stella Johnson");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](439, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](440, "Instructor");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](441, "a", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function Home3Component_Template_a_click_441_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.iconSelect(5));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](442, "i", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](443, "h3", 80)(444, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](445, "C# Developers Double Your Coding Speed with Visual Studio");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](446, "div", 81)(447, "div", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](448, "img", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](449, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](450, "7+ Lesson");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](451, "div", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](452, "img", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](453, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](454, "7hr 30min");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](455, "div", 86)(456, "div", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](457, "i", 28)(458, "i", 28)(459, "i", 28)(460, "i", 28)(461, "i", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](462, "span", 27)(463, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](464, "4.6");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](465, " (15)");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](466, "a", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](467, "i", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](468, "Buy Now");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](469, "div", 103)(470, "div", 4)(471, "div", 104)(472, "div", 105)(473, "div", 106)(474, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](475, "What\u2019s New");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](476, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](477, "Master the skills to drive your career");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](478, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](479, "Get certified, master modern tech skills, and level up your career \u2014 whether you\u2019re starting out or a seasoned pro. 95% of eLearning learners report our hands-on content directly helped their careers.");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](480, "div", 107)(481, "div", 108)(482, "div", 109)(483, "div", 110)(484, "div", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](485, "img", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](486, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](487, "Stay motivated with engaging instructors");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](488, "div", 109)(489, "div", 110)(490, "div", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](491, "img", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](492, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](493, "Keep up with in the latest in cloud");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](494, "div", 109)(495, "div", 110)(496, "div", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](497, "img", 114);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](498, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](499, "Get certified with 100+ certification courses");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](500, "div", 109)(501, "div", 110)(502, "div", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](503, "img", 115);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](504, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](505, "Build skills your way, from labs to courses");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](506, "div", 105)(507, "div", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](508, "img", 117)(509, "img", 118)(510, "img", 119)(511, "img", 120)(512, "img", 121)(513, "img", 122);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](514, "div", 123)(515, "div", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](516, "img", 66)(517, "img", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](518, "div", 4)(519, "div", 49)(520, "div", 50)(521, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](522, "What\u2019s New");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](523, "h2", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](524, "Trending Courses");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](525, "div")(526, "a", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](527, "View all Courses");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](528, "div", 124)(529, "ngx-slick-carousel", 55, 0)(531, "div", 125)(532, "div", 126)(533, "div", 70)(534, "div", 39)(535, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](536, "img", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](537, "div", 72)(538, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](539, "$200 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](540, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](541, "$99.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](542, "div", 73)(543, "div", 74)(544, "div", 75)(545, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](546, "img", 127);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](547, "div", 77)(548, "h4")(549, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](550, "John Michael");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](551, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](552, "Instructor");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](553, "div", 98)(554, "a", 128);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](555, "i", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](556, "h3", 80)(557, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](558, "Learn JavaScript and Express to become a professional JavaScript");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](559, "div", 81)(560, "div", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](561, "img", 129);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](562, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](563, "13+ Lesson");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](564, "div", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](565, "img", 130);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](566, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](567, "10hr 30min");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](568, "div", 86)(569, "div", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](570, "i", 28)(571, "i", 28)(572, "i", 28)(573, "i", 28)(574, "i", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](575, "span", 27)(576, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](577, "4.0");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](578, " (15)");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](579, "a", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](580, "i", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](581, "Buy Now");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](582, "div", 125)(583, "div", 126)(584, "div", 70)(585, "div", 39)(586, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](587, "img", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](588, "div", 72)(589, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](590, "$300 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](591, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](592, "$99.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](593, "div", 73)(594, "div", 74)(595, "div", 75)(596, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](597, "img", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](598, "div", 77)(599, "h4")(600, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](601, "John Smith");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](602, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](603, "Instructor");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](604, "div", 98)(605, "a", 128);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](606, "i", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](607, "h3", 80)(608, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](609, "Responsive Web Design Essentials HTML5 CSS3 and Bootstrap");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](610, "div", 81)(611, "div", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](612, "img", 129);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](613, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](614, "10+ Lesson");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](615, "div", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](616, "img", 130);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](617, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](618, "11hr 30min");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](619, "div", 86)(620, "div", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](621, "i", 28)(622, "i", 28)(623, "i", 28)(624, "i", 28)(625, "i", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](626, "span", 27)(627, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](628, "4.2");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](629, " (15)");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](630, "a", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](631, "i", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](632, "Buy Now");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](633, "div", 125)(634, "div", 126)(635, "div", 70)(636, "div", 39)(637, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](638, "img", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](639, "div", 72)(640, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](641, "$100 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](642, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](643, "$99.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](644, "div", 73)(645, "div", 74)(646, "div", 75)(647, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](648, "img", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](649, "div", 77)(650, "h4")(651, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](652, "Lavern M.");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](653, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](654, "Instructor");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](655, "div", 98)(656, "a", 128);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](657, "i", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](658, "h3", 80)(659, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](660, "The Complete App Design Course - UX, UI and Design Thinking");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](661, "div", 81)(662, "div", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](663, "img", 129);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](664, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](665, "8+ Lesson");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](666, "div", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](667, "img", 130);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](668, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](669, "8hr 30min");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](670, "div", 86)(671, "div", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](672, "i", 28)(673, "i", 28)(674, "i", 28)(675, "i", 28)(676, "i", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](677, "span", 27)(678, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](679, "4.3");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](680, " (15)");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](681, "a", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](682, "i", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](683, "Buy Now");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](684, "div", 125)(685, "div", 131)(686, "div", 70)(687, "div", 39)(688, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](689, "img", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](690, "div", 94)(691, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](692, "Free");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](693, "div", 73)(694, "div", 74)(695, "div", 75)(696, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](697, "img", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](698, "div", 77)(699, "h4")(700, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](701, "John Smith");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](702, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](703, "Instructor");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](704, "div", 98)(705, "a", 128);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](706, "i", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](707, "h3", 80)(708, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](709, "Build Responsive Real World Websites with HTML5 and CSS3");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](710, "div", 81)(711, "div", 132);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](712, "img", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](713, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](714, "13+ Lesson");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](715, "div", 133);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](716, "img", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](717, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](718, "10hr 30min");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](719, "div", 86)(720, "div", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](721, "i", 28)(722, "i", 28)(723, "i", 28)(724, "i", 28)(725, "i", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](726, "span", 27)(727, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](728, "4.0");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](729, " (15)");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](730, "a", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](731, "i", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](732, "Buy Now");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](733, "div", 125)(734, "div", 126)(735, "div", 70)(736, "div", 39)(737, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](738, "img", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](739, "div", 72)(740, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](741, "$300 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](742, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](743, "$99.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](744, "div", 73)(745, "div", 74)(746, "div", 75)(747, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](748, "img", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](749, "div", 77)(750, "h4")(751, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](752, "John Smith");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](753, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](754, "Instructor");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](755, "div", 98)(756, "a", 128);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](757, "i", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](758, "h3", 80)(759, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](760, "Responsive Web Design Essentials HTML5 CSS3 and Bootstrap");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](761, "div", 81)(762, "div", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](763, "img", 129);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](764, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](765, "10+ Lesson");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](766, "div", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](767, "img", 130);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](768, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](769, "11hr 30min");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](770, "div", 86)(771, "div", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](772, "i", 28)(773, "i", 28)(774, "i", 28)(775, "i", 28)(776, "i", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](777, "span", 27)(778, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](779, "4.5");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](780, " (15)");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](781, "a", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](782, "i", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](783, "Buy Now");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](784, "div", 125)(785, "div", 126)(786, "div", 70)(787, "div", 39)(788, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](789, "img", 99);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](790, "div", 72)(791, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](792, "$100 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](793, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](794, "$99.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](795, "div", 73)(796, "div", 74)(797, "div", 75)(798, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](799, "img", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](800, "div", 77)(801, "h4")(802, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](803, "Lavern M.");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](804, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](805, "Instructor");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](806, "div", 98)(807, "a", 128);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](808, "i", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](809, "h3", 80)(810, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](811, "The Complete App Design Course - UX, UI and Design Thinking");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](812, "div", 81)(813, "div", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](814, "img", 129);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](815, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](816, "8+ Lesson");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](817, "div", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](818, "img", 130);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](819, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](820, "8hr 30min");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](821, "div", 86)(822, "div", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](823, "i", 28)(824, "i", 28)(825, "i", 28)(826, "i", 28)(827, "i", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](828, "span", 27)(829, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](830, "4.0");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](831, " (15)");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](832, "a", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](833, "i", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](834, "Buy Now");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](835, "div", 125)(836, "div", 126)(837, "div", 70)(838, "div", 39)(839, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](840, "img", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](841, "div", 72)(842, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](843, "$200 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](844, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](845, "$99.00");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](846, "div", 73)(847, "div", 74)(848, "div", 75)(849, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](850, "img", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](851, "div", 77)(852, "h4")(853, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](854, "John Michael");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](855, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](856, "Instructor");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](857, "div", 98)(858, "a", 128);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](859, "i", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](860, "h3", 80)(861, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](862, "Learn JavaScript and Express to become a professional JavaScript");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](863, "div", 81)(864, "div", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](865, "img", 129);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](866, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](867, "13+ Lesson");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](868, "div", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](869, "img", 130);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](870, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](871, "10hr 30min");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](872, "div", 86)(873, "div", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](874, "i", 28)(875, "i", 28)(876, "i", 28)(877, "i", 28)(878, "i", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](879, "span", 27)(880, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](881, "4.0");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](882, " (15)");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](883, "a", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](884, "i", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](885, "Buy Now");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](886, "div", 134)(887, "div", 135)(888, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](889, "Featured Instructor");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](890, "p", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](891, " Our team combines cutting-edge design with robust development");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](892, "div", 136)(893, "ngx-slick-carousel", 55)(894, "div", 137)(895, "div", 138)(896, "a", 139);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](897, "img", 140);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](898, "div", 141)(899, "span", 142);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](900, "i", 143);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](901, "a", 144);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](902, "20 Courses");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](903, "div", 145)(904, "a", 146);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](905, "i", 147);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](906, "div", 148)(907, "h3", 80)(908, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](909, "David Lee");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](910, "span", 149);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](911, "Web Developer");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](912, "div", 150);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](913, "i", 151);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](914, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](915, "50 Students");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](916, "div", 137)(917, "div", 138)(918, "a", 139);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](919, "img", 152);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](920, "div", 141)(921, "a", 144);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](922, "15 Courses");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](923, "div", 145)(924, "a", 153);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](925, "i", 147);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](926, "div", 148)(927, "h3", 80)(928, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](929, "Daziy Millar");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](930, "span", 149);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](931, "PHP Expert");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](932, "div", 150);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](933, "i", 154);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](934, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](935, "60 Students");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](936, "div", 137)(937, "div", 138)(938, "a", 139);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](939, "img", 155);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](940, "div", 141)(941, "span", 142);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](942, "i", 143);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](943, "a", 144);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](944, "22 Courses");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](945, "div", 145)(946, "a", 153);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](947, "i", 147);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](948, "div", 148)(949, "h3", 80)(950, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](951, "Patricia Mendoza");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](952, "span", 149);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](953, "Web Developer");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](954, "div", 150);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](955, "i", 156);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](956, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](957, "40 Students");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](958, "div", 137)(959, "div", 138)(960, "a", 139);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](961, "img", 157);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](962, "div", 141)(963, "span", 142);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](964, "i", 143);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](965, "a", 144);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](966, "20 Courses");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](967, "div", 145)(968, "a", 153);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](969, "i", 147);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](970, "div", 148)(971, "h3", 80)(972, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](973, "Skyler Whites");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](974, "span", 149);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](975, "UI Designer");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](976, "div", 150);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](977, "i", 158);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](978, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](979, "50 Students");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](980, "div", 137)(981, "div", 138)(982, "a", 139);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](983, "img", 152);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](984, "div", 141)(985, "a", 144);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](986, "15 Courses");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](987, "div", 145)(988, "a", 153);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](989, "i", 147);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](990, "div", 148)(991, "h3", 80)(992, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](993, "Patricia Mendoza");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](994, "span", 149);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](995, "Web Developer");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](996, "div", 150);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](997, "i", 159);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](998, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](999, "50 Students");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1000, "div", 160)(1001, "div", 4)(1002, "div", 135)(1003, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1004, "Trusted By");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1005, "h2", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1006, "500+ Leading Universities And Companies");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1007, "div", 161)(1008, "div", 162)(1009, "owl-carousel-o", 163);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1010, Home3Component_ng_template_1010_Template, 3, 0, "ng-template", 164)(1011, Home3Component_ng_template_1011_Template, 3, 0, "ng-template", 164)(1012, Home3Component_ng_template_1012_Template, 3, 0, "ng-template", 164)(1013, Home3Component_ng_template_1013_Template, 3, 0, "ng-template", 164)(1014, Home3Component_ng_template_1014_Template, 3, 0, "ng-template", 164)(1015, Home3Component_ng_template_1015_Template, 3, 0, "ng-template", 164);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1016, "div", 165)(1017, "div", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1018, "img", 66)(1019, "img", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1020, "div", 4)(1021, "div", 166)(1022, "div", 167)(1023, "div", 168);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1024, "img", 169);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1025, "div", 170)(1026, "div", 171)(1027, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1028, "Want to share your knowledge? Join us a Mentor");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1029, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1030, "High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1031, "ul", 172)(1032, "li", 173);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1033, "i", 174);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1034, "Access Your Class anywhere ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1035, "li", 173);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1036, "i", 174);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1037, "Flexible Course Plan ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1038, "li", 173);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1039, "i", 174);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1040, "Quality Assurance ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1041, "li", 173);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1042, "i", 174);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1043, "Cost Effectiveness ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1044, "li", 173);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1045, "i", 174);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1046, "The Most World Class Instructors ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1047, "div")(1048, "a", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1049, "Read More");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1050, "div", 175)(1051, "div", 176)(1052, "div", 4)(1053, "div", 135)(1054, "span", 177);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1055, "Check out these real reviews");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1056, "h2", 178);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1057, "Users-love-us Don't take it from us.");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1058, "div", 179)(1059, "ngx-slick-carousel", 55)(1060, "div", 180)(1061, "div", 181)(1062, "div", 182);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1063, "img", 183);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1064, "div", 184)(1065, "div", 185)(1066, "div", 186);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1067, "img", 187);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1068, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1069, "I really appreciated my mentor\u2019s insight, but sometimes I felt overwhelmed by the amount of information they provided. It would have been helpful to focus on one or two areas at a time rather than trying to cover everything.");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1070, "div", 188)(1071, "div", 189)(1072, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1073, "img", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1074, "h6")(1075, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1076, "Daziy Millar");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1077, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1078, "Founder of Awesomeux Technology");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1079, "div", 180)(1080, "div", 181)(1081, "div", 182);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1082, "img", 183);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1083, "div", 184)(1084, "div", 185)(1085, "div", 186);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1086, "img", 187);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1087, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1088, "I really appreciated my mentor\u2019s insight, but sometimes I felt overwhelmed by the amount of information they provided. It would have been helpful to focus on one or two areas at a time rather than trying to cover everything.");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1089, "div", 188)(1090, "div", 189)(1091, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1092, "img", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1093, "h6")(1094, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1095, "john smith");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1096, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1097, "Founder of Awesomeux Technology");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1098, "div", 180)(1099, "div", 181)(1100, "div", 182);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1101, "img", 183);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1102, "div", 184)(1103, "div", 185)(1104, "div", 186);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1105, "img", 187);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1106, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1107, "I really appreciated my mentor\u2019s insight, but sometimes I felt overwhelmed by the amount of information they provided. It would have been helpful to focus on one or two areas at a time rather than trying to cover everything.");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1108, "div", 188)(1109, "div", 189)(1110, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1111, "img", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1112, "h6")(1113, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1114, "David Lee");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1115, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1116, "Founder of Awesomeux Technology");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1117, "div", 190);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1118, "img", 191)(1119, "img", 192);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1120, "div", 4)(1121, "div", 193)(1122, "div", 194)(1123, "div", 195)(1124, "div", 5)(1125, "div", 196)(1126, "div", 197)(1127, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1128, "Become An Instructor");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1129, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1130, "Top instructors from around the world teach millions of students on Mentoring.");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1131, "a", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1132, "Register as Instructor");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1133, "div", 198)(1134, "div", 199);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1135, "img", 200);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1136, "div", 194)(1137, "div", 201)(1138, "div", 5)(1139, "div", 196)(1140, "div", 197)(1141, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1142, "Transform Access To Education");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1143, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1144, "Create an account to receive our newsletter course promotions.");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1145, "a", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1146, "Register as Instructor");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1147, "div", 198)(1148, "div", 202);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1149, "img", 203);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1150, "div", 204)(1151, "div", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1152, "img", 66)(1153, "img", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1154, "div", 4)(1155, "div", 135)(1156, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1157, "Latest Blogs");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1158, "p", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1159, "Dont Miss Stay Updated with the Latest Articles and Insights");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1160, "div", 205)(1161, "div", 206)(1162, "div", 207)(1163, "div", 208)(1164, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1165, "img", 209);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1166, "div", 210)(1167, "div", 211)(1168, "a", 212);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1169, "Marketing");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1170, "p", 213);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1171, "i", 214);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1172, "May 15, 2020");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1173, "h5")(1174, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1175, "How to Find the Perfect Mentor for Your Academic Journey");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1176, "div", 206)(1177, "div", 207)(1178, "div", 208)(1179, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1180, "img", 215);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1181, "div", 210)(1182, "div", 211)(1183, "a", 212);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1184, "Statistics");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1185, "p", 213);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1186, "i", 214);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1187, "May 15, 2020");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1188, "h5")(1189, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1190, "Unlocking Your Potential in School and Beyond");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1191, "div", 206)(1192, "div", 207)(1193, "div", 208)(1194, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1195, "img", 216);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1196, "div", 210)(1197, "div", 211)(1198, "a", 212);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1199, "Learning");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1200, "p", 213);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1201, "i", 214);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1202, "May 15, 2020");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1203, "h5")(1204, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1205, "11 Tips to Help You Get New Clients with the design knowledge");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1206, "div", 217)(1207, "div", 218)(1208, "div", 219)(1209, "div", 220)(1210, "div", 221);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1211, "img", 222);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1212, "div", 223)(1213, "h3")(1214, "span", 224);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1215, "3,490");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1216, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1217, "Students Enrolled");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1218, "div", 219)(1219, "div", 220)(1220, "div", 221);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1221, "img", 225);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1222, "div", 223)(1223, "h3")(1224, "span", 224);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1225, "255");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1226, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1227, "Total Courses");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1228, "div", 219)(1229, "div", 220)(1230, "div", 221);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1231, "img", 226);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1232, "div", 223)(1233, "h3")(1234, "span", 224);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1235, "15");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1236, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1237, "Countries");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1238, "div", 227)(1239, "div")(1240, "ngx-slick-carousel", 228)(1241, "div", 125)(1242, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1243, "img", 229);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1244, "div", 125)(1245, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1246, "img", 230);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1247, "div", 125)(1248, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1249, "img", 231);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1250, "div", 125)(1251, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1252, "img", 232);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1253, "div", 125)(1254, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1255, "img", 233);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1256, "div", 125)(1257, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1258, "img", 234);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1259, "div", 125)(1260, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1261, "img", 235);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1262, "div", 125)(1263, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1264, "img", 236);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1265, "app-footer");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](69);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("countUp", 10)("options", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](129, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("countUp", 200)("options", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](130, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("countUp", 6)("options", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](131, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("countUp", 60)("options", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](132, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.courseCategory2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("config", ctx.topCategoriesOwlOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.courseCategory);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.courseCategory);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.courseCategory);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.courseCategory);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.courseCategory);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.courseList);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorProfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorProfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](133, _c1, ctx.isSelected[1]));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.checkout);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorProfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorProfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](135, _c1, ctx.isSelected[2]));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.checkout);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorProfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorProfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](137, _c1, ctx.isSelected[3]));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.checkout);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorProfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorProfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](139, _c1, ctx.isSelected[6]));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.checkout);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorProfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorProfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](141, _c1, ctx.isSelected[4]));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.checkout);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorProfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorProfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](143, _c1, ctx.isSelected[5]));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.checkout);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](60);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.courseList);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("config", ctx.trendingcrouse);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorProfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorProfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.checkout);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorProfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorProfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.checkout);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorProfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorProfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.checkout);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorProfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorProfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.checkout);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorProfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorProfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.checkout);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorProfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorProfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.checkout);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorProfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorProfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.courseDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.checkout);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("config", ctx.instructorCrouse);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorList);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.courseList);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorList);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.courseList);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorList);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.courseList);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorList);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.courseList);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.courseList);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx.brandCarousel);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorList);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("config", ctx.testimonials);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorProfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorProfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorProfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorProfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorProfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.instructorProfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.becomeAnExpert);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.becomeAnExpert);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.blog_grid);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.blog_grid);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.blog_grid);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.blog_grid);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.blog_grid);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", ctx.routes.blog_grid);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("countUp", 3490)("options", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](145, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("countUp", 255)("options", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](146, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("countUp", 15)("options", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](147, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("config", ctx.brandSlide2);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterLink, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__.CarouselModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__.CarouselSlideDirective, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__.SlickCarouselModule, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__.SlickCarouselComponent, ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__.SlickItemDirective, ngx_countup__WEBPACK_IMPORTED_MODULE_7__.CountUpModule, ngx_countup__WEBPACK_IMPORTED_MODULE_7__.CountUpDirective, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelect, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatOption],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return Home3Component;
})();

/***/ }),

/***/ 96825:
/*!********************************************************************************!*\
  !*** ./src/app/features/home-list/home3/components/footer/footer.component.ts ***!
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
      decls: 129,
      vars: 12,
      consts: [[1, "footer", "footer-three"], ["data-aos", "fade-up", 1, "footer-top", "aos"], [1, "container"], [1, "row", "justify-content-between", "row-gap-4"], [1, "col-lg-4", "col-md-12"], [1, "footer-widget", "footer-about"], [1, "footer-logo"], ["src", "assets/img/logo-white.svg", "alt", "logo"], [1, "footer-about-content"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap"], ["href", "javascript:void(0);"], ["src", "assets/img/icons/appstore.svg", "alt", "", 1, "img-fluid"], ["src", "assets/img/icons/googleplay.svg", "alt", "", 1, "img-fluid"], [1, "col-lg-8"], [1, "row", "row-gap-4"], [1, "col-lg-3", "col-md-6"], [1, "footer-widget", "footer-menu"], [1, "footer-title"], [3, "routerLink"], [1, "footer-widget", "footer-contact"], [1, "contact-infos"], [1, "footer-bottom"], [1, "row", "row-gap-3"], [1, "col-md-4"], [1, "copyright-text"], [1, "d-flex", "align-items-center", "justify-content-center", "gap-2"], ["src", "assets/img/icons/fb.svg", "alt", "facebook", 1, "img-fluid"], ["src", "assets/img/icons/instagram.svg", "alt", "facebook", 1, "img-fluid"], ["src", "assets/img/icons/be.svg", "alt", "facebook", 1, "img-fluid"], ["src", "assets/img/icons/linkedin.svg", "alt", "facebook", 1, "img-fluid"], ["src", "assets/img/icons/x.svg", "alt", "facebook", 1, "img-fluid"], [1, "privacy-link"], [1, "mb-0", 3, "routerLink"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8)(9, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9)(12, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "img", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 13)(17, "div", 14)(18, "div", 15)(19, "div", 16)(20, "h6", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Support");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "ul")(23, "li")(24, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Education");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "li")(27, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Enroll a Course");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "li")(30, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Orders");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "li")(33, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Payments");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "li")(36, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Contact Us");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 15)(39, "div", 16)(40, "h6", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "About");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "ul")(43, "li")(44, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "li")(47, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Services");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "li")(50, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "About Us");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "li")(53, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "FAQ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "li")(56, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Blog");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 15)(59, "div", 16)(60, "h6", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Useful Links");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "ul")(63, "li")(64, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Our values");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "li")(67, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "Advisory board");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "li")(70, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "Our partners");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "li")(73, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Become a partner");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "li")(76, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "Future Learn");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 15)(79, "div", 19)(80, "h6", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "Contact Info");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "ul")(83, "li")(84, "div", 20)(85, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "Phone Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "310-437-2766");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "li")(90, "div", 20)(91, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, "Mail Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "contact@example.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "li")(96, "div", 20)(97, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "706 Campfire Ave. Meriden, CT ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div", 21)(102, "div", 2)(103, "div", 22)(104, "div", 23)(105, "div", 24)(106, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, "Copyright 2025 \u00A9 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109, "DreamsLMS");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, ". Tous droits r\u00E9serv\u00E9s.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "div", 23)(112, "div", 25)(113, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](114, "img", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](116, "img", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](118, "img", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](120, "img", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](122, "img", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "div", 23)(124, "div", 31)(125, "a", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126, "Terms & Policy");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](128, "Privacy Policy");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.courseGrid);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.addCourse);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.register);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.page_pricing_plan);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.contactUs);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.courseCategory);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.courseCategory);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.aboutUs);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.page_faq);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.blog_grid3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](69);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.page_term_condition);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.routes.page_privacy_policy);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return FooterComponent;
})();

/***/ })

}]);
//# sourceMappingURL=3911.js.map