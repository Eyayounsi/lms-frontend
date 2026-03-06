import {
  CountUpDirective,
  CountUpModule
} from "./chunk-HCPHENTX.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-YSUELB2P.js";
import "./chunk-7Q3BJUUO.js";
import "./chunk-Z42TT3Y4.js";
import "./chunk-LTXOSFWN.js";
import "./chunk-K5NRG4TQ.js";
import "./chunk-PZXI3ZTH.js";
import {
  require_aos
} from "./chunk-ZVJUVWF7.js";
import {
  CommonService
} from "./chunk-CDB6UHUA.js";
import {
  SlickCarouselComponent,
  SlickCarouselModule,
  SlickItemDirective
} from "./chunk-PRTCGMFX.js";
import {
  routes
} from "./chunk-E6TQA5KL.js";
import "./chunk-VF2E3YWR.js";
import {
  Router,
  RouterLink
} from "./chunk-TPKO67I6.js";
import "./chunk-QFZWCWB7.js";
import "./chunk-PXFMCAI3.js";
import {
  CommonModule,
  NgClass
} from "./chunk-YBJXKBE2.js";
import {
  Component,
  Renderer2,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵtext
} from "./chunk-5DE2SIVI.js";
import {
  __toESM
} from "./chunk-TXDUYLVM.js";

// src/app/features/home-list/home6/home6.component.ts
var AOS = __toESM(require_aos());

// src/app/features/home-list/home6/components/footer/footer.component.ts
var FooterComponent = class _FooterComponent {
  routes = routes;
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 102, vars: 10, consts: [[1, "footer", "footer-six"], [1, "footer-top-five"], [1, "container"], [1, "row", "row-gap-3"], [1, "col-lg-3", "col-md-6", "col-sm-12"], [1, "footer-contact", "footer-menu-five"], [1, "footer-title", "footer-title-five"], [1, "footer-contact-info"], [1, "footer-address"], [1, "col-lg-3", "col-md-3", "col-sm-12"], [1, "footer-menu", "footer-menu-five"], [1, "fa-sharp", "fa-solid", "fa-dash"], [3, "routerLink"], [1, "col-lg-2", "col-md-3", "col-sm-12"], [1, "col-lg-4", "col-md-6", "col-12"], [1, "footer-menu"], [1, "footer-title", "footer-title-five", "mb-1"], [1, "fs-14", "text-light"], [1, "footer-widget-five", "mb-3"], [1, "box-form-newsletter"], [1, "form-newsletter"], ["type", "email", "placeholder", "Enter Email Address", 1, "input-newsletter"], [1, "btn", "btn-secondary", "font-heading", "icon-send-letter"], [1, "d-flex", "align-items-center", "gap-3", "flex-wrap"], ["href", "javascript:void(0);"], ["src", "./assets/img/icon/app-store.svg", "alt", "img"], ["src", "./assets/img/icon/google-play.svg", "alt", "img"], [1, "footer-bottom", "footer-bottom-six"], [1, "copyright-five"], [1, "row", "align-items-center"], [1, "col-md-6"], [1, "copyright-text"], [1, "social-icon"], [1, "fa-brands", "fa-facebook-f"], [1, "fa-brands", "fa-instagram"], [1, "fa-brands", "fa-x-twitter"], [1, "fa-brands", "fa-youtube"], [1, "fa-brands", "fa-linkedin"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h5", 6);
      \u0275\u0275text(7, "Get in touch");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "h6");
      \u0275\u0275text(11, "Phone Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p");
      \u0275\u0275text(13, "310-437-2766");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 8)(15, "h6");
      \u0275\u0275text(16, "Mail Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p");
      \u0275\u0275text(18, "contact@example.com");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 8)(20, "h6");
      \u0275\u0275text(21, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "p");
      \u0275\u0275text(23, "706 Campfire Ave. Meriden, CT ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(24, "div", 9)(25, "div", 10)(26, "h5", 6);
      \u0275\u0275element(27, "i", 11);
      \u0275\u0275text(28, "For Instructor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "ul")(30, "li")(31, "a", 12);
      \u0275\u0275text(32, "Profile");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "li")(34, "a", 12);
      \u0275\u0275text(35, "Login");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "li")(37, "a", 12);
      \u0275\u0275text(38, "Register");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "li")(40, "a", 12);
      \u0275\u0275text(41, "Instructor");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "li")(43, "a", 12);
      \u0275\u0275text(44, " Dashboard");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(45, "div", 13)(46, "div", 10)(47, "h5", 6);
      \u0275\u0275text(48, "For Student");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "ul")(50, "li")(51, "a", 12);
      \u0275\u0275text(52, "Profile");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "li")(54, "a", 12);
      \u0275\u0275text(55, "Login");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "li")(57, "a", 12);
      \u0275\u0275text(58, "Register");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "li")(60, "a", 12);
      \u0275\u0275text(61, "Student");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "li")(63, "a", 12);
      \u0275\u0275text(64, " Dashboard");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(65, "div", 14)(66, "div", 15)(67, "h5", 16);
      \u0275\u0275text(68, "Subscription");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "p", 17);
      \u0275\u0275text(70, "Sign up to get updates & news.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "div", 18)(72, "div", 19)(73, "form", 20);
      \u0275\u0275element(74, "input", 21);
      \u0275\u0275elementStart(75, "button", 22);
      \u0275\u0275text(76, "Subscribe");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(77, "div", 23)(78, "a", 24);
      \u0275\u0275element(79, "img", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "a", 24);
      \u0275\u0275element(81, "img", 26);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(82, "div", 27)(83, "div", 2)(84, "div", 28)(85, "div", 29)(86, "div", 30)(87, "div", 31)(88, "p");
      \u0275\u0275text(89, "\xA9 2025 DreamsLMS. All rights reserved.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(90, "div", 30)(91, "div", 32)(92, "a", 24);
      \u0275\u0275element(93, "i", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "a", 24);
      \u0275\u0275element(95, "i", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "a", 24);
      \u0275\u0275element(97, "i", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "a", 24);
      \u0275\u0275element(99, "i", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "a", 24);
      \u0275\u0275element(101, "i", 37);
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(31);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.login);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.register);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructor);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructor_dashboard);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.studentProfile);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.login);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.register);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.studentsList);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.students_Dashboard);
    }
  }, dependencies: [CommonModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer", imports: [CommonModule, RouterLink], template: '<footer class="footer footer-six">\n	<!-- Footer Top -->\n	<div class="footer-top-five">\n		<div class="container">\n			\n			<div class="row row-gap-3">\n				\n				<div class="col-lg-3 col-md-6 col-sm-12">\n				\n					<!-- Footer Widget -->\n					<div class="footer-contact footer-menu-five">\n						<h5 class="footer-title footer-title-five">Get in touch</h5>\n						<div class="footer-contact-info">\n							<div class="footer-address">\n								<h6>Phone Number</h6>\n								<p>310-437-2766</p>\n							</div>\n							<div class="footer-address">\n								<h6>Mail Address</h6>\n								<p>contact&#64;example.com</p>\n							</div>\n							<div class="footer-address">\n								<h6>Address</h6>\n								<p>706 Campfire Ave. Meriden, CT </p>\n							</div>\n						</div>\n					</div>\n					<!-- /Footer Widget -->\n					\n				</div>\n				\n				<div class="col-lg-3 col-md-3 col-sm-12">\n				\n					<!-- Footer Widget -->\n					<div class="footer-menu footer-menu-five">\n						<h5 class="footer-title footer-title-five"><i class="fa-sharp fa-solid fa-dash"></i>For Instructor</h5>\n						<ul>\n							<li><a [routerLink]="routes.instructorProfile">Profile</a></li>\n							<li><a [routerLink]="routes.login">Login</a></li>\n							<li><a [routerLink]="routes.register">Register</a></li>\n							<li><a [routerLink]="routes.instructor">Instructor</a></li>\n							<li><a [routerLink]="routes.instructor_dashboard"> Dashboard</a></li>\n						</ul>\n					</div>\n					<!-- /Footer Widget -->\n					\n				</div>\n				\n				<div class="col-lg-2 col-md-3 col-sm-12">\n				\n					<!-- Footer Widget -->\n					<div class="footer-menu footer-menu-five">\n						<h5 class="footer-title footer-title-five">For Student</h5>\n						<ul>\n							<li><a [routerLink]="routes.studentProfile">Profile</a></li>\n							<li><a [routerLink]="routes.login">Login</a></li>\n							<li><a [routerLink]="routes.register">Register</a></li>\n							<li><a [routerLink]="routes.studentsList">Student</a></li>\n							<li><a [routerLink]="routes.students_Dashboard"> Dashboard</a></li>\n						</ul>\n					</div>\n					<!-- /Footer Widget -->\n					\n				</div>	\n\n				<div class="col-lg-4 col-md-6 col-12">\n					<div class="footer-menu">\n						<h5 class="footer-title footer-title-five mb-1">Subscription</h5>\n						<p class="fs-14 text-light">Sign up to get updates & news.</p>\n						<!-- Footer Widget -->\n						<div class="footer-widget-five mb-3">\n							<div class="box-form-newsletter">\n								<form class="form-newsletter">\n									<input class="input-newsletter" type="email" placeholder="Enter Email Address">\n									<button class="btn btn-secondary font-heading icon-send-letter">Subscribe</button>\n								</form>\n							</div>\n						</div>\n						<div class="d-flex align-items-center gap-3 flex-wrap">\n							<a href="javascript:void(0);">\n								<img src="./assets/img/icon/app-store.svg" alt="img">\n							</a>\n							<a href="javascript:void(0);">\n								<img src="./assets/img/icon/google-play.svg" alt="img">\n							</a>\n						</div>\n						<!-- /Footer Widget -->\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n	<!-- /Footer Top -->\n	\n	<!-- Footer Bottom -->\n	<div class="footer-bottom footer-bottom-six">\n		<div class="container">				\n\n			<!-- Copyright -->\n			<div class="copyright-five">\n				<div class="row align-items-center">\n					<div class="col-md-6">\n						<div class="copyright-text">\n							<p>&copy; 2025 DreamsLMS. All rights reserved.</p>\n						</div>\n					</div>\n					<div class="col-md-6">\n						<div class="social-icon">\n							<a href="javascript:void(0);"><i class="fa-brands fa-facebook-f"></i></a>\n							<a href="javascript:void(0);"><i class="fa-brands fa-instagram"></i></a>\n							<a href="javascript:void(0);"><i class="fa-brands fa-x-twitter"></i></a>\n							<a href="javascript:void(0);"><i class="fa-brands fa-youtube"></i></a>\n							<a href="javascript:void(0);"><i class="fa-brands fa-linkedin"></i></a>\n						</div>\n					</div>\n				</div>\n			</div>\n			<!-- /Copyright -->					\n			\n		</div>\n	</div>\n	<!-- /Footer Bottom -->\n	\n</footer>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/features/home-list/home6/components/footer/footer.component.ts", lineNumber: 12 });
})();

// src/app/features/home-list/home6/home6.component.ts
var _c0 = () => ({ enableScrollSpy: true });
var _c1 = (a0) => ({ "selected": a0 });
var Home6Component = class _Home6Component {
  common;
  router;
  renderer;
  routes = routes;
  selected = "1";
  base = "";
  page = "";
  last = "";
  isSelected = [false];
  constructor(common, router, renderer) {
    this.common = common;
    this.router = router;
    this.renderer = renderer;
    this.common.base.subscribe((base) => {
      this.base = base;
    });
    this.common.page.subscribe((page) => {
      this.page = page;
    });
    this.common.last.subscribe((last) => {
      this.last = last;
    });
    if (this.base == "home-four") {
      this.renderer.addClass(document.body, "select-home-four");
    }
  }
  ngOnInit() {
    AOS.init({
      duration: 1200,
      once: true
    });
  }
  leadingSlider5 = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };
  homeFiveCourse = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  testimonialFive = {
    lazyLoad: "ondemand",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 3e3,
    autoplaySpeed: 1800,
    arrows: false
  };
  blogOption = {
    margin: 24,
    nav: false,
    loop: true,
    dots: true,
    autoplay: false,
    responsive: {
      0: {
        items: 1,
        dots: false
      },
      768: {
        items: 3
      },
      1170: {
        items: 3
      }
    }
  };
  directPath() {
    this.router.navigate(["/pages/course/course-list"]);
  }
  ngOnDestroy() {
    this.renderer.removeClass(document.body, "select-home-four");
  }
  iconSelect(index) {
    this.isSelected[index] = !this.isSelected[index];
  }
  onSubmit() {
    this.router.navigate([routes.courseList]);
  }
  static \u0275fac = function Home6Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Home6Component)(\u0275\u0275directiveInject(CommonService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Renderer2));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Home6Component, selectors: [["app-home6"]], decls: 957, vars: 90, consts: [[1, "home-slide-five", "home-six"], [1, "container"], [1, "row", "align-items-center"], [1, "col-xl-5", "col-lg-6", "col-12"], ["data-aos", "fade-down", 1, "home-slide-five-face"], [1, "home-slide-five-text"], [1, "text-warning", "d-inline-flex", "fw-semibold", "text-uppercase", "mb-3"], [1, "text-white", "mb-4"], [1, "text-white", "fs-lg", "text-center", "text-md-start", "pb-2", "pb-md-3", "mb-4"], [1, "banner-content-five"], [1, "form", 3, "ngSubmit"], [1, "form-inner-five"], [1, "input-group"], [1, "drop-detail-five"], ["placeholder", "Category", 1, "form-select", "select"], ["value", "1"], ["type", "email", "placeholder", "Search for Courses, Instructors", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "sub-btn"], [1, "fa-solid", "fa-magnifying-glass"], [1, "review-five-group"], [1, "review-user-five", "d-flex", "align-items-center"], [1, "review-users-list"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "", "data-bs-original-title", "leader 1"], ["src", "assets/img/user/user-01.jpg", "alt", "img"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "", "data-bs-original-title", "leader 2"], ["src", "assets/img/user/user-02.jpg", "alt", "img"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "", "data-bs-original-title", "leader 3"], ["src", "assets/img/user/user-03.jpg", "alt", "img"], [1, "review-rating-five"], [1, "rating-star"], [1, "fas", "fa-star", "filled", "me-1"], [1, "col-xl-7", "col-lg-6", "col-12"], [1, "banner-six-img"], [1, "row"], [1, "col-lg-6", "align-self-end"], ["data-aos", "fade-up", 1, "ban-img-1"], ["src", "./assets/img/hero/hero-7.png", "alt", "img"], [1, "col-lg-6"], ["data-aos", "fade-down", 1, "ban-img-2"], ["data-aos", "fade-down", "data-aos-delay", "250", "src", "./assets/img/shapes/dot-group.png", "alt", "img", 1, "ban-shape2"], ["data-aos", "fade-down", "data-aos-delay", "300", "src", "./assets/img/banner/ban-shape-2.svg", "alt", "img", 1, "ban-shape3"], ["data-aos", "fade-down", "data-aos-delay", "350", "src", "./assets/img/banner/ban-shape-3.svg", "alt", "img", 1, "ban-shape4"], ["src", "./assets/img/hero/hero-8.png", "alt", "img"], [1, "vector-shapes-five", "d-none", "d-lg-flex"], ["src", "assets/img/bg/banner-vector.svg", "alt", "Img"], [1, "leading-section-five"], ["data-aos", "fade-down", 1, "col-lg-4", "col-md-6"], [1, "leading-five-content", "course-count"], [1, "mb-2"], [1, "counterUp"], ["data-aos", "fade-down", 1, "col-lg-8", "col-md-6"], [1, "lead-group-five"], [1, "leading-slider-five"], [3, "config"], ["ngxSlickItem", "", 1, "item"], [1, "lead-img"], ["alt", "Img", "src", "assets/img/client/client-28.svg", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/client/client-29.svg", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/client/client-30.svg", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/client/client-31.svg", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/client/client-32.svg", 1, "img-fluid"], [1, "course-section-five"], ["data-aos", "fade-down", 1, "header-five-title", "text-center"], [1, "home-five-course", "aos"], ["data-aos", "fade-down", "ngxSlickItem", "", 1, "categories-item", "categories-item-six"], [1, "categories-icon"], [1, "icon-bg"], [3, "routerLink"], ["src", "assets/img/icon/framework-01.svg", "alt", "Img"], [1, "title"], [1, "view-icon", 3, "routerLink"], [1, "fas", "fa-chevron-right"], ["src", "assets/img/icon/framework-02.svg", "alt", "Img"], ["src", "assets/img/icon/framework-03.svg", "alt", "Img"], ["src", "assets/img/icon/framework-04.svg", "alt", "Img"], [1, "counter-section-five"], [1, "row", "align-items-center", "text-center", "justify-content-between"], ["data-aos", "fade-down", 1, "col-lg-3", "col-md-3", "col-sm-12"], [1, "count-five"], [1, "count-content-five", "course-count", "ms-0"], [1, "counterUp", 3, "countUp", "options"], [1, "mb-0"], [1, "count-five", "count-five-last", "count-five-0"], [1, "featured-section-five"], ["data-aos", "fade-down", 1, "section-header", "section-header-six", "text-center"], [1, "featured-courses-five-tab"], [1, "tab-content"], [1, "ux-design-five"], [1, "col-lg-4", "col-md-6", "d-flex"], ["data-aos", "fade-up", 1, "course-item", "course-item-three", "mx-0", "flex-fill", "aos"], [1, "course-img"], ["alt", "Img", "src", "assets/img/course/course-40.jpg", 1, "img-fluid"], [1, "price"], [1, "course-content"], [1, "course-user"], [1, "course-user-img"], ["src", "assets/img/avatar/avatar-21.jpg", "alt", "Img", 1, "img-fluid"], [1, "course-name"], ["href", "javascript:void(0);", 1, "fav-icon", 3, "click", "ngClass"], [1, "fa-regular", "fa-heart"], [1, "course-info", "d-flex", "align-items-center"], [1, "course-lesson", "d-flex", "align-items-center"], ["src", "assets/img/icons/icon-3.svg", "alt", "Img"], [1, "course-time", "d-flex", "align-items-center"], ["src", "assets/img/icons/icon-4.svg", "alt", "Img"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "rating", "m-0"], [1, "fas", "fa-star", "filled"], [1, "fas", "fa-star"], [1, "d-inline-block", "average-rating"], [1, "btn", "btn-primary", "btn-xl", "d-inline-flex", "align-items-center", "flex-shrink-0", 3, "routerLink"], [1, "isax", "isax-shopping-cart5", "me-2"], ["alt", "Img", "src", "assets/img/course/course-02.jpg", 1, "img-fluid"], ["src", "assets/img/avatar/avatar-22.jpg", "alt", "Img", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/course/course-03.jpg", 1, "img-fluid"], [1, "price", "combo"], ["src", "assets/img/avatar/avatar-25.jpg", "alt", "Img", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/course/course-04.jpg", 1, "img-fluid"], ["src", "assets/img/avatar/avatar-24.jpg", "alt", "Img", 1, "img-fluid"], [1, "course-share", "d-flex", "align-items-center", "justify-content-center"], ["href", "javascript:void(0);"], ["alt", "Img", "src", "assets/img/course/course-13.jpg", 1, "img-fluid"], ["src", "assets/img/avatar/avatar-23.jpg", "alt", "Img", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/course/course-44.jpg", 1, "img-fluid"], ["src", "assets/img/avatar/avatar-26.jpg", "alt", "Img", 1, "img-fluid"], [1, "text-center"], ["data-aos", "fade-up", 1, "btn", "btn-xl", "btn-primary", "mt-2", 3, "routerLink"], [1, "master-section-five"], ["data-aos", "fade-down", 1, "col-lg-6", "col-sm-12"], [1, "section-five-sub"], [1, "header-five-title", "mb-4"], [1, "career-five-content"], ["data-aos", "fade-down"], [1, "d-flex", "align-items-center"], [1, "btn", "btn-primary", "me-2", 3, "routerLink"], [1, "btn", "btn-secondary", 3, "routerLink"], [1, "col-lg-6", "col-sm-12"], ["data-aos", "fade-down", 1, "col-lg-6", "col-sm-6"], [1, "skill-five-item"], [1, "skill-five-icon", "bg-success"], ["src", "assets/img/icon/skill-01.svg", "alt", "Stay motivated"], [1, "skill-five-content"], [1, "skill-five-icon", "bg-skyblue"], ["src", "assets/img/icon/skill-02.svg", "alt", "Stay motivated"], [1, "skill-five-icon", "bg-danger"], ["src", "assets/img/icon/skill-03.svg", "alt", "Stay motivated"], [1, "skill-five-icon", "bg-info"], ["src", "assets/img/icon/skill-04.svg", "alt", "Stay motivated"], [1, "experienced-course-five"], ["data-aos", "fade-down", 1, "col-lg-6"], [1, "experienced-five-group"], [1, "instructor-vector-left"], ["src", "assets/img/bg/instructor-vector-left.svg", "alt", "Img"], [1, "developer-five-list"], [1, "column-img"], [1, "developer-profile-five"], [1, "developer-image"], ["src", "assets/img/user/user-01.jpg", "alt", "Course Instructor"], [1, "profile-five-ovelay"], ["src", "assets/img/user/user-02.jpg", "alt", "Course Instructor"], ["src", "assets/img/user/user-03.jpg", "alt", "Course Instructor"], ["src", "assets/img/user/user-04.jpg", "alt", "Course Instructor"], ["src", "assets/img/user/user-05.jpg", "alt", "Course Instructor"], ["src", "assets/img/user/user-06.jpg", "alt", "Course Instructor"], ["src", "assets/img/user/user-07.jpg", "alt", "Course Instructor"], ["src", "assets/img/user/user-08.jpg", "alt", "Course Instructor"], ["src", "assets/img/user/user-09.jpg", "alt", "Course Instructor"], ["src", "assets/img/user/user-10.jpg", "alt", "Course Instructor"], ["src", "assets/img/user/user-11.jpg", "alt", "Course Instructor"], ["src", "assets/img/user/user-12.jpg", "alt", "Course Instructor"], ["src", "assets/img/user/user-13.jpg", "alt", "Course Instructor"], ["src", "assets/img/user/user-14.jpg", "alt", "Course Instructor"], ["src", "assets/img/user/user-15.jpg", "alt", "Course Instructor"], ["src", "assets/img/user/user-16.jpg", "alt", "Course Instructor"], [1, "instructor-vector-right"], ["src", "assets/img/bg/instructor-vector-right.svg", "alt", "Img"], [1, "experienced-five-sub"], [1, "header-five-title", "header-five-title-inner"], [1, "ex-five-title"], [1, "ex-five-content"], [1, "btn", "btn-secondary", "btn-md", 3, "routerLink"], [1, "share-knowledge-five"], [1, "header-five-title", "mb-0"], [1, "list-unstyled", "heading-color", "mb-4"], [1, "d-flex", "mb-3"], [1, "isax", "isax-tick-circle5", "text-success", "fs-24", "me-2"], [1, "d-flex", "mb-3", "aos-init", "aos-animate"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "joing-count-five", "text-center"], [1, "joing-count-image"], ["src", "assets/img/feature/feature-7.png", "alt", "Img"], ["src", "./assets/img/shapes/dot-2.svg", "alt", "img", 1, "joing-count-img1"], ["src", "./assets/img/shapes/half-circle.svg", "alt", "img", 1, "joing-count-img2"], [1, "joing-count-five-one", "course-count"], [1, "joing-count-number"], [1, "joing-count-text"], [1, "joing-count-five-two", "course-count"], [1, "joing-count-five-three", "course-count"], [1, "testimonial-section-five"], ["src", "./assets/img/shapes/quote.png", "alt", "Img", 1, "d-none", "d-lg-flex", "testimonials-quote"], [1, "text-light"], [1, "text-white"], [1, "testimonial-slider-five"], [1, "testimonial-five", "lazy", "slider"], ["ngxSlickItem", ""], [1, "testimonial-carousel"], [1, "testimonial-item-six"], [1, "testimonial-content-five"], [1, "testimonial-text"], [1, "mb-3"], [1, "testimonial-users-group", "d-flex", "align-items-center", "justify-content-between"], [1, "testimonial-users"], [1, "mb-1"], [1, "testimonial-ratings-five", "d-inline-flex", "align-items-center"], [1, "rating"], [1, "testimonial-image"], ["src", "assets/img/testimonial/testimonials-1.png", "alt", "Img"], ["src", "assets/img/testimonial/testimonial-02.png", "alt", "Img"], ["src", "assets/img/testimonial/testimonial-03.png", "alt", "Img"], [1, "blogs-section-five"], [1, "home-five-blog"], [1, "col-lg-4"], [1, "blog-card"], [1, "blog-img"], ["src", "assets/img/blog/blog-22.jpg", "alt", "img", 1, "img-fluid"], [1, "blog-content"], [1, "blog-user", "d-flex", "align-items-center", "justify-content-between"], ["href", "javascript:void(0);", 1, "avatar", "me-2"], ["src", "assets/img/user/user-42.jpg", "alt", "img", 1, "img-fluid"], [1, "mb-0", "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "link-info", "text-decoration-underline", "ms-1"], [1, "isax", "isax-calendar-1", "text-gray-7", "me-2"], ["src", "assets/img/blog/blog-23.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/user/user-36.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/blog/blog-24.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/user/user-53.jpg", "alt", "img", 1, "img-fluid"], [1, "btn", "btn-xl", "btn-primary", "mt-3", 3, "routerLink"]], template: function Home6Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "span", 6);
      \u0275\u0275text(7, "The Leader in Online Learning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "h1", 7);
      \u0275\u0275text(9, "Engaging & Accessible Online Courses For All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 8);
      \u0275\u0275text(11, "Trusted by over 15K Users worldwide since 2022");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 9)(13, "form", 10);
      \u0275\u0275listener("ngSubmit", function Home6Component_Template_form_ngSubmit_13_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(14, "div", 11)(15, "div", 12)(16, "span", 13)(17, "mat-select", 14)(18, "mat-option", 15);
      \u0275\u0275text(19, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "mat-option", 15);
      \u0275\u0275text(21, "Angular");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "mat-option", 15);
      \u0275\u0275text(23, "Node Js");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "mat-option", 15);
      \u0275\u0275text(25, "React");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "mat-option", 15);
      \u0275\u0275text(27, "Python");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(28, "input", 16);
      \u0275\u0275elementStart(29, "button", 17)(30, "span");
      \u0275\u0275element(31, "i", 18);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(32, "div", 19)(33, "div", 20)(34, "ul", 21)(35, "li")(36, "a", 22);
      \u0275\u0275element(37, "img", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "li")(39, "a", 24);
      \u0275\u0275element(40, "img", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "li")(42, "a", 26);
      \u0275\u0275element(43, "img", 27);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(44, "div", 28)(45, "div", 29);
      \u0275\u0275element(46, "i", 30)(47, "i", 30)(48, "i", 30)(49, "i", 30)(50, "i", 30);
      \u0275\u0275elementStart(51, "p");
      \u0275\u0275text(52, "4.9 / 200 Review");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(53, "div", 31)(54, "div", 32)(55, "div", 33)(56, "div", 34)(57, "div", 35);
      \u0275\u0275element(58, "img", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 37)(60, "div", 38);
      \u0275\u0275element(61, "img", 39)(62, "img", 40)(63, "img", 41)(64, "img", 42);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(65, "div", 43);
      \u0275\u0275element(66, "img", 44);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(67, "section", 45)(68, "div", 1)(69, "div", 2)(70, "div", 46)(71, "div", 47)(72, "h3", 48);
      \u0275\u0275text(73, "Trusted By ");
      \u0275\u0275elementStart(74, "span", 49);
      \u0275\u0275text(75, "500");
      \u0275\u0275elementEnd();
      \u0275\u0275text(76, "+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "p");
      \u0275\u0275text(78, "Leading Universities And Companies");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(79, "div", 50)(80, "div", 51)(81, "div", 52)(82, "ngx-slick-carousel", 53)(83, "div", 54)(84, "div", 55);
      \u0275\u0275element(85, "img", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "div", 54)(87, "div", 55);
      \u0275\u0275element(88, "img", 57);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "div", 54)(90, "div", 55);
      \u0275\u0275element(91, "img", 58);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "div", 54)(93, "div", 55);
      \u0275\u0275element(94, "img", 59);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "div", 54)(96, "div", 55);
      \u0275\u0275element(97, "img", 60);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "div", 54)(99, "div", 55);
      \u0275\u0275element(100, "img", 58);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "div", 54)(102, "div", 55);
      \u0275\u0275element(103, "img", 59);
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(104, "section", 61)(105, "div", 1)(106, "div", 62)(107, "h2");
      \u0275\u0275text(108, "Course Categories");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "p");
      \u0275\u0275text(110, "Explore our top categories to find the perfect courses for your learning journey");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(111, "div", 63)(112, "ngx-slick-carousel", 53)(113, "div", 64)(114, "div", 65)(115, "div", 66)(116, "a", 67);
      \u0275\u0275element(117, "img", 68);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(118, "h3", 69)(119, "a", 67);
      \u0275\u0275text(120, "Angular");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(121, "p");
      \u0275\u0275text(122, "50 Instructors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "a", 70);
      \u0275\u0275element(124, "i", 71);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(125, "div", 64)(126, "div", 65)(127, "div", 66)(128, "a", 67);
      \u0275\u0275element(129, "img", 72);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(130, "h3", 69)(131, "a", 67);
      \u0275\u0275text(132, "React JS");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(133, "p");
      \u0275\u0275text(134, "50 Instructors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "a", 70);
      \u0275\u0275element(136, "i", 71);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(137, "div", 64)(138, "div", 65)(139, "div", 66)(140, "a", 67);
      \u0275\u0275element(141, "img", 73);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(142, "h3", 69)(143, "a", 67);
      \u0275\u0275text(144, "Node JS");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(145, "p");
      \u0275\u0275text(146, "30 Instructors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "a", 70);
      \u0275\u0275element(148, "i", 71);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(149, "div", 64)(150, "div", 65)(151, "div", 66)(152, "a", 67);
      \u0275\u0275element(153, "img", 74);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(154, "h3", 69)(155, "a", 67);
      \u0275\u0275text(156, "Docker");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(157, "p");
      \u0275\u0275text(158, "60 Instructors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "a", 70);
      \u0275\u0275element(160, "i", 71);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(161, "div", 64)(162, "div", 65)(163, "div", 66)(164, "a", 67);
      \u0275\u0275element(165, "img", 68);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(166, "h3", 69)(167, "a", 67);
      \u0275\u0275text(168, "Angular");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(169, "p");
      \u0275\u0275text(170, "40 Instructors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "a", 70);
      \u0275\u0275element(172, "i", 71);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(173, "div", 64)(174, "div", 65)(175, "div", 66)(176, "a", 67);
      \u0275\u0275element(177, "img", 72);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(178, "h3", 69)(179, "a", 67);
      \u0275\u0275text(180, "React JS");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(181, "p");
      \u0275\u0275text(182, "50 Instructors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(183, "a", 70);
      \u0275\u0275element(184, "i", 71);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(185, "section", 75)(186, "div", 1)(187, "div", 76)(188, "div", 77)(189, "div", 78)(190, "div", 79)(191, "h4")(192, "span", 80);
      \u0275\u0275text(193, "145");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(194, "p", 81);
      \u0275\u0275text(195, "Expert Tutors");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(196, "div", 77)(197, "div", 78)(198, "div", 79)(199, "h4")(200, "span", 80);
      \u0275\u0275text(201, "2,3495");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(202, "p", 81);
      \u0275\u0275text(203, "Cetified Courses");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(204, "div", 77)(205, "div", 78)(206, "div", 79)(207, "h4")(208, "span", 80);
      \u0275\u0275text(209, "20");
      \u0275\u0275elementEnd();
      \u0275\u0275text(210, "+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(211, "p", 81);
      \u0275\u0275text(212, "Online students");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(213, "div", 77)(214, "div", 82)(215, "div", 79)(216, "h4")(217, "span", 80);
      \u0275\u0275text(218, "58,370");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(219, "p", 81);
      \u0275\u0275text(220, "Online Courses");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(221, "section", 83)(222, "div", 1)(223, "div", 84)(224, "h2");
      \u0275\u0275text(225, "Popular Courses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(226, "p");
      \u0275\u0275text(227, "Discover our featured courses, specially curated to help you gain in-demand skills");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(228, "div", 33)(229, "div", 85)(230, "div", 86)(231, "div", 87)(232, "div", 33)(233, "div", 88)(234, "div", 89)(235, "div", 90)(236, "a", 67);
      \u0275\u0275element(237, "img", 91);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(238, "div", 92)(239, "h3");
      \u0275\u0275text(240, "$200 ");
      \u0275\u0275elementStart(241, "span");
      \u0275\u0275text(242, "$990.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(243, "div", 93)(244, "div", 94)(245, "div", 95)(246, "a", 67);
      \u0275\u0275element(247, "img", 96);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(248, "div", 97)(249, "h4")(250, "a", 67);
      \u0275\u0275text(251, "Nicole Brown");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(252, "p");
      \u0275\u0275text(253, "Instructor");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(254, "a", 98);
      \u0275\u0275listener("click", function Home6Component_Template_a_click_254_listener() {
        return ctx.iconSelect(0);
      });
      \u0275\u0275element(255, "i", 99);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(256, "h3", 69)(257, "a", 67);
      \u0275\u0275text(258, "Information About UI/UX Design Degree");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(259, "div", 100)(260, "div", 101);
      \u0275\u0275element(261, "img", 102);
      \u0275\u0275elementStart(262, "p");
      \u0275\u0275text(263, "12+ Lesson");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(264, "div", 103);
      \u0275\u0275element(265, "img", 104);
      \u0275\u0275elementStart(266, "p");
      \u0275\u0275text(267, "9hr 30min");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(268, "div", 105)(269, "div", 106);
      \u0275\u0275element(270, "i", 107)(271, "i", 107)(272, "i", 107)(273, "i", 107)(274, "i", 108);
      \u0275\u0275elementStart(275, "span", 109)(276, "span");
      \u0275\u0275text(277, "4.0");
      \u0275\u0275elementEnd();
      \u0275\u0275text(278, " (15)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(279, "a", 110);
      \u0275\u0275element(280, "i", 111);
      \u0275\u0275text(281, "Buy Now");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(282, "div", 88)(283, "div", 89)(284, "div", 90)(285, "a", 67);
      \u0275\u0275element(286, "img", 112);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(287, "div", 92)(288, "h3");
      \u0275\u0275text(289, "$156");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(290, "div", 93)(291, "div", 94)(292, "div", 95)(293, "a", 67);
      \u0275\u0275element(294, "img", 113);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(295, "div", 97)(296, "h4")(297, "a", 67);
      \u0275\u0275text(298, "Jenis R.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(299, "p");
      \u0275\u0275text(300, "Instructor");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(301, "a", 98);
      \u0275\u0275listener("click", function Home6Component_Template_a_click_301_listener() {
        return ctx.iconSelect(1);
      });
      \u0275\u0275element(302, "i", 99);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(303, "h3", 69)(304, "a", 67);
      \u0275\u0275text(305, "Wordpress for Beginners - Master Wordpress Quickly");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(306, "div", 100)(307, "div", 101);
      \u0275\u0275element(308, "img", 102);
      \u0275\u0275elementStart(309, "p");
      \u0275\u0275text(310, "11+ Lesson");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(311, "div", 103);
      \u0275\u0275element(312, "img", 104);
      \u0275\u0275elementStart(313, "p");
      \u0275\u0275text(314, "6hr 30min");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(315, "div", 105)(316, "div", 106);
      \u0275\u0275element(317, "i", 107)(318, "i", 107)(319, "i", 107)(320, "i", 107)(321, "i", 108);
      \u0275\u0275elementStart(322, "span", 109)(323, "span");
      \u0275\u0275text(324, "4.3");
      \u0275\u0275elementEnd();
      \u0275\u0275text(325, " (15)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(326, "a", 110);
      \u0275\u0275element(327, "i", 111);
      \u0275\u0275text(328, "Buy Now");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(329, "div", 88)(330, "div", 89)(331, "div", 90)(332, "a", 67);
      \u0275\u0275element(333, "img", 114);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(334, "div", 115)(335, "h3");
      \u0275\u0275text(336, "FREE");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(337, "div", 93)(338, "div", 94)(339, "div", 95)(340, "a", 67);
      \u0275\u0275element(341, "img", 116);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(342, "div", 97)(343, "h4")(344, "a", 67);
      \u0275\u0275text(345, "Jesse Stevens");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(346, "p");
      \u0275\u0275text(347, "Instructor");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(348, "a", 98);
      \u0275\u0275listener("click", function Home6Component_Template_a_click_348_listener() {
        return ctx.iconSelect(2);
      });
      \u0275\u0275element(349, "i", 99);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(350, "h3", 69)(351, "a", 67);
      \u0275\u0275text(352, "Sketch from A to Z (2022): Become an app designer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(353, "div", 100)(354, "div", 101);
      \u0275\u0275element(355, "img", 102);
      \u0275\u0275elementStart(356, "p");
      \u0275\u0275text(357, "16+ Lesson");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(358, "div", 103);
      \u0275\u0275element(359, "img", 104);
      \u0275\u0275elementStart(360, "p");
      \u0275\u0275text(361, "12hr 30min");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(362, "div", 105)(363, "div", 106);
      \u0275\u0275element(364, "i", 107)(365, "i", 107)(366, "i", 107)(367, "i", 107)(368, "i", 108);
      \u0275\u0275elementStart(369, "span", 109)(370, "span");
      \u0275\u0275text(371, "4.5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(372, " (15)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(373, "a", 110);
      \u0275\u0275element(374, "i", 111);
      \u0275\u0275text(375, "Buy Now");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(376, "div", 88)(377, "div", 89)(378, "div", 90)(379, "a", 67);
      \u0275\u0275element(380, "img", 117);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(381, "div", 92)(382, "h3");
      \u0275\u0275text(383, "$145");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(384, "div", 93)(385, "div", 94)(386, "div", 95)(387, "a", 67);
      \u0275\u0275element(388, "img", 118);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(389, "div", 97)(390, "h4")(391, "a", 67);
      \u0275\u0275text(392, "Nicole Brown");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(393, "p");
      \u0275\u0275text(394, "Instructor");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(395, "div", 119)(396, "a", 120);
      \u0275\u0275element(397, "i", 99);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(398, "h3", 69)(399, "a", 67);
      \u0275\u0275text(400, "Learn Angular Fundamentals From beginning to advance lavel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(401, "div", 100)(402, "div", 101);
      \u0275\u0275element(403, "img", 102);
      \u0275\u0275elementStart(404, "p");
      \u0275\u0275text(405, "10+ Lesson");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(406, "div", 103);
      \u0275\u0275element(407, "img", 104);
      \u0275\u0275elementStart(408, "p");
      \u0275\u0275text(409, "8hr 30min");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(410, "div", 105)(411, "div", 106);
      \u0275\u0275element(412, "i", 107)(413, "i", 107)(414, "i", 107)(415, "i", 107)(416, "i", 108);
      \u0275\u0275elementStart(417, "span", 109)(418, "span");
      \u0275\u0275text(419, "4.2");
      \u0275\u0275elementEnd();
      \u0275\u0275text(420, " (15)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(421, "a", 110);
      \u0275\u0275element(422, "i", 111);
      \u0275\u0275text(423, "Buy Now");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(424, "div", 88)(425, "div", 89)(426, "div", 90)(427, "a", 67);
      \u0275\u0275element(428, "img", 121);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(429, "div", 115)(430, "h3");
      \u0275\u0275text(431, "Free");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(432, "div", 93)(433, "div", 94)(434, "div", 95)(435, "a", 67);
      \u0275\u0275element(436, "img", 122);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(437, "div", 97)(438, "h4")(439, "a", 67);
      \u0275\u0275text(440, "John Smith");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(441, "p");
      \u0275\u0275text(442, "Instructor");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(443, "a", 98);
      \u0275\u0275listener("click", function Home6Component_Template_a_click_443_listener() {
        return ctx.iconSelect(3);
      });
      \u0275\u0275element(444, "i", 99);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(445, "h3", 69)(446, "a", 67);
      \u0275\u0275text(447, "Build Responsive Real World Websites with HTML5 and CSS3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(448, "div", 100)(449, "div", 101);
      \u0275\u0275element(450, "img", 102);
      \u0275\u0275elementStart(451, "p");
      \u0275\u0275text(452, "13+ Lesson");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(453, "div", 103);
      \u0275\u0275element(454, "img", 104);
      \u0275\u0275elementStart(455, "p");
      \u0275\u0275text(456, "10hr 30min");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(457, "div", 105)(458, "div", 106);
      \u0275\u0275element(459, "i", 107)(460, "i", 107)(461, "i", 107)(462, "i", 107)(463, "i", 108);
      \u0275\u0275elementStart(464, "span", 109)(465, "span");
      \u0275\u0275text(466, "4.0");
      \u0275\u0275elementEnd();
      \u0275\u0275text(467, " (15)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(468, "a", 110);
      \u0275\u0275element(469, "i", 111);
      \u0275\u0275text(470, "Buy Now");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(471, "div", 88)(472, "div", 89)(473, "div", 90)(474, "a", 67);
      \u0275\u0275element(475, "img", 123);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(476, "div", 115)(477, "h3");
      \u0275\u0275text(478, "$200 ");
      \u0275\u0275elementStart(479, "span");
      \u0275\u0275text(480, "$990.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(481, "div", 93)(482, "div", 94)(483, "div", 95)(484, "a", 67);
      \u0275\u0275element(485, "img", 124);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(486, "div", 97)(487, "h4")(488, "a", 67);
      \u0275\u0275text(489, "Stella Johnson");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(490, "p");
      \u0275\u0275text(491, "Instructor");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(492, "a", 98);
      \u0275\u0275listener("click", function Home6Component_Template_a_click_492_listener() {
        return ctx.iconSelect(4);
      });
      \u0275\u0275element(493, "i", 99);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(494, "h3", 69)(495, "a", 67);
      \u0275\u0275text(496, "C# Developers Double Your Coding Speed with Visual Studio");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(497, "div", 100)(498, "div", 101);
      \u0275\u0275element(499, "img", 102);
      \u0275\u0275elementStart(500, "p");
      \u0275\u0275text(501, "7+ Lesson");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(502, "div", 103);
      \u0275\u0275element(503, "img", 104);
      \u0275\u0275elementStart(504, "p");
      \u0275\u0275text(505, "7hr 30min");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(506, "div", 105)(507, "div", 106);
      \u0275\u0275element(508, "i", 107)(509, "i", 107)(510, "i", 107)(511, "i", 107)(512, "i", 108);
      \u0275\u0275elementStart(513, "span", 109)(514, "span");
      \u0275\u0275text(515, "4.6");
      \u0275\u0275elementEnd();
      \u0275\u0275text(516, " (15)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(517, "a", 110);
      \u0275\u0275element(518, "i", 111);
      \u0275\u0275text(519, "Buy Now");
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(520, "div", 125)(521, "a", 126);
      \u0275\u0275text(522, "See More Courses");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(523, "section", 127)(524, "div", 1)(525, "div", 2)(526, "div", 128)(527, "div", 129)(528, "div", 130)(529, "h2");
      \u0275\u0275text(530, "Master the skills to drive your career");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(531, "div", 131)(532, "p", 132);
      \u0275\u0275text(533, "Get certified, master modern tech skills, and level up your career \u2014 whether you\u2019re starting out or a seasoned pro. 95% of eLearning learners report our hands-on earning learners report our hands-on ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(534, "div", 133)(535, "a", 134);
      \u0275\u0275text(536, "Join Course");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(537, "a", 135);
      \u0275\u0275text(538, "Learn More");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(539, "div", 136)(540, "div", 2)(541, "div", 137)(542, "div", 138)(543, "div", 139);
      \u0275\u0275element(544, "img", 140);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(545, "div", 141)(546, "h3");
      \u0275\u0275text(547, "Stay motivated with engaging instructors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(548, "p");
      \u0275\u0275text(549, "eLearning learners report our hands-on content directly helped their careers.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(550, "div", 137)(551, "div", 138)(552, "div", 142);
      \u0275\u0275element(553, "img", 143);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(554, "div", 141)(555, "h3");
      \u0275\u0275text(556, "Keep up with in the latest in cloud");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(557, "p");
      \u0275\u0275text(558, "eLearning learners report our hands-on content directly helped their careers.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(559, "div", 137)(560, "div", 138)(561, "div", 144);
      \u0275\u0275element(562, "img", 145);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(563, "div", 141)(564, "h3");
      \u0275\u0275text(565, "Get certified with 100+ certification courses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(566, "p");
      \u0275\u0275text(567, "eLearning learners report our hands-on content directly helped their careers.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(568, "div", 137)(569, "div", 138)(570, "div", 146);
      \u0275\u0275element(571, "img", 147);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(572, "div", 141)(573, "h3");
      \u0275\u0275text(574, "Build skills your way, from labs to courses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(575, "p");
      \u0275\u0275text(576, "eLearning learners report our hands-on content directly helped their careers.");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(577, "section", 148)(578, "div", 1)(579, "div", 2)(580, "div", 149)(581, "div", 150)(582, "div", 151);
      \u0275\u0275element(583, "img", 152);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(584, "div", 153)(585, "ul")(586, "li", 154)(587, "div", 155)(588, "div", 156);
      \u0275\u0275element(589, "img", 157);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(590, "div", 158)(591, "h5");
      \u0275\u0275text(592, "Daziy Millar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(593, "p");
      \u0275\u0275text(594, "PHP Expert");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(595, "li", 154)(596, "div", 155)(597, "div", 156);
      \u0275\u0275element(598, "img", 159);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(599, "div", 158)(600, "h5");
      \u0275\u0275text(601, "Daziy Millar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(602, "p");
      \u0275\u0275text(603, "PHP Expert");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(604, "li", 154)(605, "div", 155)(606, "div", 156);
      \u0275\u0275element(607, "img", 160);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(608, "div", 158)(609, "h5");
      \u0275\u0275text(610, "Daziy Millar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(611, "p");
      \u0275\u0275text(612, "PHP Expert");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(613, "li", 154)(614, "div", 155)(615, "div", 156);
      \u0275\u0275element(616, "img", 161);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(617, "div", 158)(618, "h5");
      \u0275\u0275text(619, "Daziy Millar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(620, "p");
      \u0275\u0275text(621, "PHP Expert");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(622, "li", 154)(623, "div", 155)(624, "div", 156);
      \u0275\u0275element(625, "img", 162);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(626, "div", 158)(627, "h5");
      \u0275\u0275text(628, "Daziy Millar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(629, "p");
      \u0275\u0275text(630, "PHP Expert");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(631, "li", 154)(632, "div", 155)(633, "div", 156);
      \u0275\u0275element(634, "img", 163);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(635, "div", 158)(636, "h5");
      \u0275\u0275text(637, "Daziy Millar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(638, "p");
      \u0275\u0275text(639, "PHP Expert");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(640, "li", 154)(641, "div", 155)(642, "div", 156);
      \u0275\u0275element(643, "img", 164);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(644, "div", 158)(645, "h5");
      \u0275\u0275text(646, "Daziy Millar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(647, "p");
      \u0275\u0275text(648, "PHP Expert");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(649, "li", 154)(650, "div", 155)(651, "div", 156);
      \u0275\u0275element(652, "img", 165);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(653, "div", 158)(654, "h5");
      \u0275\u0275text(655, "Daziy Millar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(656, "p");
      \u0275\u0275text(657, "PHP Expert");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(658, "li", 154)(659, "div", 155)(660, "div", 156);
      \u0275\u0275element(661, "img", 166);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(662, "div", 158)(663, "h5");
      \u0275\u0275text(664, "Daziy Millar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(665, "p");
      \u0275\u0275text(666, "PHP Expert");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(667, "li", 154)(668, "div", 155)(669, "div", 156);
      \u0275\u0275element(670, "img", 167);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(671, "div", 158)(672, "h5");
      \u0275\u0275text(673, "Daziy Millar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(674, "p");
      \u0275\u0275text(675, "PHP Expert");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(676, "li", 154)(677, "div", 155)(678, "div", 156);
      \u0275\u0275element(679, "img", 168);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(680, "div", 158)(681, "h5");
      \u0275\u0275text(682, "Daziy Millar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(683, "p");
      \u0275\u0275text(684, "PHP Expert");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(685, "li", 154)(686, "div", 155)(687, "div", 156);
      \u0275\u0275element(688, "img", 169);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(689, "div", 158)(690, "h5");
      \u0275\u0275text(691, "Daziy Millar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(692, "p");
      \u0275\u0275text(693, "PHP Expert");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(694, "li", 154)(695, "div", 155)(696, "div", 156);
      \u0275\u0275element(697, "img", 170);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(698, "div", 158)(699, "h5");
      \u0275\u0275text(700, "Daziy Millar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(701, "p");
      \u0275\u0275text(702, "PHP Expert");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(703, "li", 154)(704, "div", 155)(705, "div", 156);
      \u0275\u0275element(706, "img", 171);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(707, "div", 158)(708, "h5");
      \u0275\u0275text(709, "Daziy Millar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(710, "p");
      \u0275\u0275text(711, "PHP Expert");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(712, "li", 154)(713, "div", 155)(714, "div", 156);
      \u0275\u0275element(715, "img", 172);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(716, "div", 158)(717, "h5");
      \u0275\u0275text(718, "Daziy Millar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(719, "p");
      \u0275\u0275text(720, "PHP Expert");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(721, "li", 154)(722, "div", 155)(723, "div", 156);
      \u0275\u0275element(724, "img", 173);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(725, "div", 158)(726, "h5");
      \u0275\u0275text(727, "Daziy Millar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(728, "p");
      \u0275\u0275text(729, "PHP Expert");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(730, "div", 174);
      \u0275\u0275element(731, "img", 175);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(732, "div", 149)(733, "div", 176)(734, "div", 177)(735, "h2", 178);
      \u0275\u0275text(736, "Experienced Course Instructor");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(737, "div", 131)(738, "p", 179);
      \u0275\u0275text(739, "An award-winning course management system (CMS) or program is typically recognized for its exceptional quality, innovation, and effectiveness in helping both instructors and students succeed. Here's a breakdown of what makes a course management program stand out, along with examples of course topics and instructors that could be part of such a system.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(740, "a", 180);
      \u0275\u0275text(741, "Register Now");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(742, "section", 181)(743, "div", 1)(744, "div", 2)(745, "div", 128)(746, "div", 129)(747, "div", 182)(748, "h2");
      \u0275\u0275text(749, "Want to share your knowledge? Join us a Mentor");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(750, "div", 131)(751, "p");
      \u0275\u0275text(752, "High-definition video is video of higher resolution and quality than standard-definition. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(753, "ul", 183)(754, "li", 184);
      \u0275\u0275element(755, "i", 185);
      \u0275\u0275text(756, "Access Your Class anywhere ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(757, "li", 184);
      \u0275\u0275element(758, "i", 185);
      \u0275\u0275text(759, "Flexible Course Plan ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(760, "li", 186);
      \u0275\u0275element(761, "i", 185);
      \u0275\u0275text(762, "Quality Assurance ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(763, "li", 186);
      \u0275\u0275element(764, "i", 185);
      \u0275\u0275text(765, "Cost Effectiveness ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(766, "li", 186);
      \u0275\u0275element(767, "i", 185);
      \u0275\u0275text(768, "The Most World Class Instructors ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(769, "a", 187);
      \u0275\u0275text(770, "Start Teaching Today");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(771, "div", 128)(772, "div", 188)(773, "div", 189);
      \u0275\u0275element(774, "img", 190)(775, "img", 191)(776, "img", 192);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(777, "div", 193)(778, "h3", 194)(779, "span", 49);
      \u0275\u0275text(780, "5,5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(781, "K");
      \u0275\u0275elementStart(782, "span");
      \u0275\u0275text(783, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(784, "p", 195);
      \u0275\u0275text(785, "Courses");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(786, "div", 196)(787, "h3", 194)(788, "span", 49);
      \u0275\u0275text(789, "50");
      \u0275\u0275elementEnd();
      \u0275\u0275text(790, "K");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(791, "p", 195);
      \u0275\u0275text(792, "Appreciations");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(793, "div", 197)(794, "h3", 194)(795, "span", 49);
      \u0275\u0275text(796, "100");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(797, "p", 195);
      \u0275\u0275text(798, "Countries");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(799, "section", 198);
      \u0275\u0275element(800, "img", 199);
      \u0275\u0275elementStart(801, "div", 1)(802, "div", 62)(803, "h2", 200);
      \u0275\u0275text(804, "Testimonials");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(805, "p", 201);
      \u0275\u0275text(806, "We are a very happy because we have a happy customer ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(807, "div", 202)(808, "div", 203)(809, "ngx-slick-carousel", 53)(810, "div", 204)(811, "div", 205)(812, "div", 206)(813, "div", 207)(814, "div", 208)(815, "h5", 209);
      \u0275\u0275text(816, 'Exactly what I was looking for. You will not regret it. It really saves me time and effort. Skill is what our business lacked."');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(817, "p", 209);
      \u0275\u0275text(818, "Thank you very much for your help. This is exactly what I was looking for. You will not regret it. It really saves me time and effort. Skill is what our business lacked. Thank you very much for your help. This is exactly what I was look.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(819, "div", 210)(820, "div", 211)(821, "h5", 212);
      \u0275\u0275text(822, "Hawkins");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(823, "p");
      \u0275\u0275text(824, "UI-UX Designer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(825, "div", 213)(826, "div", 214);
      \u0275\u0275element(827, "i", 107)(828, "i", 107)(829, "i", 107)(830, "i", 107)(831, "i", 107);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(832, "div", 215);
      \u0275\u0275element(833, "img", 216);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(834, "div", 204)(835, "div", 205)(836, "div", 206)(837, "div", 207)(838, "div", 208)(839, "p", 209);
      \u0275\u0275text(840, '"Thank you very much for your help. This is exactly what I was looking for. You will not regret it. It really saves me time and effort. Skill is what our business lacked. Thank you very much for your help. This is exactly what I was looking for. You will not regret it. It really saves me time and effort. Skill is what our business lacked."');
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(841, "div", 210)(842, "div", 211)(843, "h5", 212);
      \u0275\u0275text(844, "Nikolas Brooten");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(845, "p");
      \u0275\u0275text(846, "Sales Manager");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(847, "div", 213)(848, "div", 214);
      \u0275\u0275element(849, "i", 107)(850, "i", 107)(851, "i", 107)(852, "i", 107)(853, "i", 107);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(854, "div", 215);
      \u0275\u0275element(855, "img", 217);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(856, "div", 204)(857, "div", 205)(858, "div", 206)(859, "div", 207)(860, "div", 208)(861, "p", 209);
      \u0275\u0275text(862, '"Thank you very much for your help. This is exactly what I was looking for. You will not regret it. It really saves me time and effort. Skill is what our business lacked. Thank you very much for your help. This is exactly what I was looking for. You will not regret it. It really saves me time and effort. Skill is what our business lacked."');
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(863, "div", 210)(864, "div", 211)(865, "h5", 212);
      \u0275\u0275text(866, "Nikolas Brooten");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(867, "p");
      \u0275\u0275text(868, "Sales Manager");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(869, "div", 213)(870, "div", 214);
      \u0275\u0275element(871, "i", 107)(872, "i", 107)(873, "i", 107)(874, "i", 107)(875, "i", 107);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(876, "div", 215);
      \u0275\u0275element(877, "img", 218);
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(878, "section", 219)(879, "div", 1)(880, "div", 84)(881, "h2");
      \u0275\u0275text(882, "Latest Blogs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(883, "p");
      \u0275\u0275text(884, "Follow the latest and most useful articles on that student's blog");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(885, "div", 220)(886, "div", 33)(887, "div", 221)(888, "div", 222)(889, "div", 223)(890, "a", 67);
      \u0275\u0275element(891, "img", 224);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(892, "div", 225)(893, "h5")(894, "a", 67);
      \u0275\u0275text(895, "Mastering Programming with a Technical Mentor");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(896, "p");
      \u0275\u0275text(897, "Learning to code can be overwhelming, but a mentor can make the journey smoother....");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(898, "div", 226)(899, "div", 133)(900, "a", 227);
      \u0275\u0275element(901, "img", 228);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(902, "p", 229);
      \u0275\u0275text(903, "by ");
      \u0275\u0275elementStart(904, "a", 230);
      \u0275\u0275text(905, "Reni Sarow");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(906, "p", 133);
      \u0275\u0275element(907, "i", 231);
      \u0275\u0275text(908, "09 Aug 2025");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(909, "div", 221)(910, "div", 222)(911, "div", 223)(912, "a", 67);
      \u0275\u0275element(913, "img", 232);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(914, "div", 225)(915, "h5")(916, "a", 67);
      \u0275\u0275text(917, "How to Level Up Your Coding Skills with the Help of a Mentor");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(918, "p");
      \u0275\u0275text(919, "Whether you're a beginner or an advanced coder, this blog will explore how....");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(920, "div", 226)(921, "div", 133)(922, "a", 227);
      \u0275\u0275element(923, "img", 233);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(924, "p", 229);
      \u0275\u0275text(925, "by ");
      \u0275\u0275elementStart(926, "a", 230);
      \u0275\u0275text(927, "Chris Daniel");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(928, "p", 133);
      \u0275\u0275element(929, "i", 231);
      \u0275\u0275text(930, "15 Jul 2025");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(931, "div", 221)(932, "div", 222)(933, "div", 223)(934, "a", 67);
      \u0275\u0275element(935, "img", 234);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(936, "div", 225)(937, "h5")(938, "a", 67);
      \u0275\u0275text(939, "Navigating the Tech World: The Ultimate Guide");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(940, "p");
      \u0275\u0275text(941, " The tech industry is vast and ever-changing, but a mentor can help you stay ahead.....");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(942, "div", 226)(943, "div", 133)(944, "a", 227);
      \u0275\u0275element(945, "img", 235);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(946, "p", 229);
      \u0275\u0275text(947, "by ");
      \u0275\u0275elementStart(948, "a", 230);
      \u0275\u0275text(949, "Andrew");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(950, "p", 133);
      \u0275\u0275element(951, "i", 231);
      \u0275\u0275text(952, "15 Jan 2025");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(953, "div", 125)(954, "a", 236);
      \u0275\u0275text(955, "See More Blogs");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(956, "app-footer");
    }
    if (rf & 2) {
      \u0275\u0275advance(82);
      \u0275\u0275property("config", ctx.leadingSlider5);
      \u0275\u0275advance(30);
      \u0275\u0275property("config", ctx.homeFiveCourse);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(9);
      \u0275\u0275property("countUp", 145)("options", \u0275\u0275pureFunction0(76, _c0));
      \u0275\u0275advance(8);
      \u0275\u0275property("countUp", 23495)("options", \u0275\u0275pureFunction0(77, _c0));
      \u0275\u0275advance(8);
      \u0275\u0275property("countUp", 20)("options", \u0275\u0275pureFunction0(78, _c0));
      \u0275\u0275advance(9);
      \u0275\u0275property("countUp", 58370)("options", \u0275\u0275pureFunction0(79, _c0));
      \u0275\u0275advance(19);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(80, _c1, ctx.isSelected[0]));
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.checkout);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(82, _c1, ctx.isSelected[1]));
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.checkout);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(84, _c1, ctx.isSelected[2]));
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.checkout);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.checkout);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(86, _c1, ctx.isSelected[3]));
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.checkout);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(88, _c1, ctx.isSelected[4]));
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.checkout);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.courseGrid);
      \u0275\u0275advance(14);
      \u0275\u0275property("routerLink", ctx.routes.courseList);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.courseList);
      \u0275\u0275advance(203);
      \u0275\u0275property("routerLink", ctx.routes.instructorList);
      \u0275\u0275advance(29);
      \u0275\u0275property("routerLink", ctx.routes.courseList);
      \u0275\u0275advance(40);
      \u0275\u0275property("config", ctx.testimonialFive);
      \u0275\u0275advance(81);
      \u0275\u0275property("routerLink", ctx.routes.blog_details);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.blog_details);
      \u0275\u0275advance(18);
      \u0275\u0275property("routerLink", ctx.routes.blog_details);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.blog_details);
      \u0275\u0275advance(18);
      \u0275\u0275property("routerLink", ctx.routes.blog_details);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.blog_details);
      \u0275\u0275advance(16);
      \u0275\u0275property("routerLink", ctx.routes.blog_grid2);
    }
  }, dependencies: [CommonModule, NgClass, FooterComponent, RouterLink, SlickCarouselModule, SlickCarouselComponent, SlickItemDirective, CountUpModule, CountUpDirective, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Home6Component, [{
    type: Component,
    args: [{ selector: "app-home6", imports: [CommonModule, FooterComponent, RouterLink, SlickCarouselModule, CountUpModule, MatSelectModule], template: `	<!-- Home Banner -->
	<section class="home-slide-five home-six">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-xl-5 col-lg-6 col-12">
					<div class="home-slide-five-face" data-aos="fade-down">

						<!-- Banner Text -->
						<div class="home-slide-five-text">
							<span class="text-warning d-inline-flex fw-semibold text-uppercase mb-3">The Leader in Online Learning</span>
							<h1 class="text-white mb-4">Engaging & Accessible Online Courses For All</h1>
							<p class="text-white fs-lg text-center text-md-start pb-2 pb-md-3 mb-4">Trusted by over 15K Users worldwide since 2022</p>
						</div>
						<!-- /Banner Text -->

						<!-- banner Seach Category -->
						<div class="banner-content-five">
							<form class="form"  (ngSubmit)="onSubmit()">
								<div class="form-inner-five">
									<div class="input-group">
										<!-- Slect Category -->
										<span class="drop-detail-five">
											<mat-select class="form-select select" placeholder="Category">
												<mat-option value="1">Category</mat-option>
												<mat-option value="1">Angular</mat-option>
												<mat-option value="1">Node Js</mat-option>
												<mat-option value="1">React</mat-option>
												<mat-option value="1">Python</mat-option>
											</mat-select>
										</span>	
										<!-- Slect Category -->	
										
										<!-- Search -->
										<input type="email" class="form-control" placeholder="Search for Courses, Instructors">
										<!-- Search -->

										<!-- Submit Button -->
										<button class="btn btn-primary sub-btn" type="submit"><span><i class="fa-solid fa-magnifying-glass"></i></span></button>
										<!-- Submit Button -->
										 
									</div>
								</div>
							</form>
						</div>
						<!-- /banner Seach Category -->

						<!-- Review and Experience -->
						<div class="review-five-group">
							<div class="review-user-five  d-flex align-items-center">
								<ul class="review-users-list">
									<li>
										<a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="leader 1"><img src="assets/img/user/user-01.jpg" alt="img"></a>
									</li>
									<li>
										<a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="leader 2"><img src="assets/img/user/user-02.jpg" alt="img"></a>
									</li>
									<li>
										<a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="leader 3"><img src="assets/img/user/user-03.jpg" alt="img"></a>
									</li>
								</ul>
								<div class="review-rating-five">
									<div class="rating-star">
										<i class="fas fa-star filled me-1"></i>
										<i class="fas fa-star filled me-1"></i>
										<i class="fas fa-star filled me-1"></i>
										<i class="fas fa-star filled me-1"></i>
										<i class="fas fa-star filled me-1"></i>
										<p>4.9 / 200 Review</p>	
									</div>
								</div>
							</div>
						</div>
						<!-- /Review and Experience -->
					</div>
				</div>
				<div class="col-xl-7 col-lg-6 col-12">
					<div class="banner-six-img">								
						<div class="row">
							<div class="col-lg-6 align-self-end">
								<div class="ban-img-1" data-aos="fade-up">
									<img src="./assets/img/hero/hero-7.png" alt="img">
								</div>
							</div>
							<div class="col-lg-6">
								<div class="ban-img-2" data-aos="fade-down">
									<img class="ban-shape2" data-aos="fade-down" data-aos-delay="250" src="./assets/img/shapes/dot-group.png" alt="img">
									<img class="ban-shape3" data-aos="fade-down" data-aos-delay="300" src="./assets/img/banner/ban-shape-2.svg" alt="img">
									<img class="ban-shape4" data-aos="fade-down" data-aos-delay="350" src="./assets/img/banner/ban-shape-3.svg" alt="img">
									<img src="./assets/img/hero/hero-8.png" alt="img">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="vector-shapes-five d-none d-lg-flex">
				<img src="assets/img/bg/banner-vector.svg" alt="Img">
			</div>
		</div>
	</section>
	<!-- /Home Banner -->
	
	<!-- Leading Companies -->
	<section class="leading-section-five">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-lg-4 col-md-6" data-aos="fade-down">
					<div class="leading-five-content course-count">
						<h3 class="mb-2">Trusted By <span class="counterUp">500</span>+</h3>
						<p>Leading Universities And Companies</p>
					</div>
				</div>
				<div class="col-lg-8 col-md-6" data-aos="fade-down">
					<div class="lead-group-five">
						<div class="leading-slider-five">
							<ngx-slick-carousel [config]="leadingSlider5">

								<div class="item" ngxSlickItem>
									<div class="lead-img">
										<img class="img-fluid" alt="Img" src="assets/img/client/client-28.svg">
									</div>
								</div>
								<div class="item" ngxSlickItem>
									<div class="lead-img">
										<img class="img-fluid" alt="Img" src="assets/img/client/client-29.svg">
									</div>
								</div>
								<div class="item" ngxSlickItem>
									<div class="lead-img">
										<img class="img-fluid" alt="Img" src="assets/img/client/client-30.svg">
									</div>
								</div>
								<div class="item" ngxSlickItem>
									<div class="lead-img">
										<img class="img-fluid" alt="Img" src="assets/img/client/client-31.svg">
									</div>
								</div>
								<div class="item" ngxSlickItem>
									<div class="lead-img">
										<img class="img-fluid" alt="Img" src="assets/img/client/client-32.svg">
									</div>
								</div>	
								<div class="item" ngxSlickItem>
									<div class="lead-img">
										<img class="img-fluid" alt="Img" src="assets/img/client/client-30.svg">
									</div>
								</div>
								<div class="item" ngxSlickItem>
									<div class="lead-img">
										<img class="img-fluid" alt="Img" src="assets/img/client/client-31.svg">
									</div>
								</div>					
							</ngx-slick-carousel>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- /Leading Companies -->
	
	<!-- Course Categories Five -->
	<section class="course-section-five">
		<div class="container">
			<div class="header-five-title text-center" data-aos="fade-down">						
				<h2>Course Categories</h2>
				<p>Explore our top categories to find the perfect courses for your learning journey</p>
			</div>
			<div class="home-five-course aos">
				<ngx-slick-carousel [config]="homeFiveCourse">

					<!-- Carousel Item -->
					<div class="categories-item categories-item-six" data-aos="fade-down" ngxSlickItem>
						<div class="categories-icon">
							<div class="icon-bg">
								<a [routerLink]="routes.courseDetails">
									<img src="assets/img/icon/framework-01.svg" alt="Img">
								</a>
							</div>
						</div>
						<h3 class="title"><a [routerLink]="routes.courseDetails">Angular</a></h3>
						<p>50 Instructors</p>
						<a [routerLink]="routes.courseDetails" class="view-icon"><i class="fas fa-chevron-right"></i></a>
					</div>
					<!-- /Carousel Item  -->
	
					<!-- Carousel Item  -->
					<div class="categories-item categories-item-six" data-aos="fade-down" ngxSlickItem>
						<div class="categories-icon">
							<div class="icon-bg">
								<a [routerLink]="routes.courseDetails">
									<img src="assets/img/icon/framework-02.svg" alt="Img">
								</a>
							</div>
						</div>
						<h3 class="title"><a [routerLink]="routes.courseDetails">React JS</a></h3>
						<p>50 Instructors</p>
						<a [routerLink]="routes.courseDetails" class="view-icon"><i class="fas fa-chevron-right"></i></a>
					</div>
					<!-- /Carousel Item  -->
	
					<!-- Carousel Item  -->
					<div class="categories-item categories-item-six" data-aos="fade-down" ngxSlickItem>
						<div class="categories-icon">
							<div class="icon-bg">
								<a [routerLink]="routes.courseDetails">
									<img src="assets/img/icon/framework-03.svg" alt="Img">
								</a>
							</div>
						</div>
						<h3 class="title"><a [routerLink]="routes.courseDetails">Node JS</a></h3>
						<p>30 Instructors</p>
						<a [routerLink]="routes.courseDetails" class="view-icon"><i class="fas fa-chevron-right"></i></a>
					</div>
					<!-- /Carousel Item  -->
	
					<!-- Carousel Item  -->
					<div class="categories-item categories-item-six" data-aos="fade-down" ngxSlickItem>
						<div class="categories-icon">
							<div class="icon-bg">
								<a [routerLink]="routes.courseDetails">
									<img src="assets/img/icon/framework-04.svg" alt="Img">
								</a>
							</div>
						</div>
						<h3 class="title"><a [routerLink]="routes.courseDetails">Docker</a></h3>
						<p>60 Instructors</p>
						<a [routerLink]="routes.courseDetails" class="view-icon"><i class="fas fa-chevron-right"></i></a>
					</div>
					<!-- /Carousel Item  -->
	
					<!-- Carousel Item -->
					<div class="categories-item categories-item-six" data-aos="fade-down" ngxSlickItem>
						<div class="categories-icon">
							<div class="icon-bg">
								<a [routerLink]="routes.courseDetails">
									<img src="assets/img/icon/framework-01.svg" alt="Img">
								</a>
							</div>
						</div>
						<h3 class="title"><a [routerLink]="routes.courseDetails">Angular</a></h3>
						<p>40 Instructors</p>
						<a [routerLink]="routes.courseDetails" class="view-icon"><i class="fas fa-chevron-right"></i></a>
					</div>
					<!-- /Carousel Item  -->
	
					<!-- Carousel Item  -->
					<div class="categories-item categories-item-six" data-aos="fade-down" ngxSlickItem>
						<div class="categories-icon">
							<div class="icon-bg">
								<a [routerLink]="routes.courseDetails">
									<img src="assets/img/icon/framework-02.svg" alt="Img">
								</a>
							</div>
						</div>
						<h3 class="title"><a [routerLink]="routes.courseDetails">React JS</a></h3>
						<p>50 Instructors</p>
						<a [routerLink]="routes.courseDetails" class="view-icon"><i class="fas fa-chevron-right"></i></a>
					</div>
					<!-- /Carousel Item  -->
				</ngx-slick-carousel>

			</div>
		</div>
	</section>
	<!-- /Course Categories Five-->

	<!-- Counter Five-->
	<section class="counter-section-five">
		<div class="container">
			<div class="row align-items-center text-center justify-content-between">
				<!-- col -->
				<div class="col-lg-3 col-md-3 col-sm-12" data-aos="fade-down">
					<div class="count-five">
						<div class="count-content-five course-count ms-0">
							<h4><span class="counterUp" [countUp]="145" [options]="{ enableScrollSpy: true }">145</span></h4>
							<p class="mb-0">Expert Tutors</p>
						</div>
					</div>
				</div>
				<!--/ col -->

				<!-- col -->
				<div class="col-lg-3 col-md-3 col-sm-12" data-aos="fade-down">
					<div class="count-five">
						<div class="count-content-five course-count ms-0">
							<h4><span class="counterUp" [countUp]="23495" [options]="{ enableScrollSpy: true }">2,3495</span></h4>
							<p class="mb-0">Cetified Courses</p>
						</div>
					</div>
				</div>
				<!--/ col -->

				<!-- col -->
				<div class="col-lg-3 col-md-3 col-sm-12" data-aos="fade-down">
					<div class="count-five">
						<div class="count-content-five course-count ms-0">
							<h4><span class="counterUp" [countUp]="20" [options]="{ enableScrollSpy: true }">20</span>+</h4>
							<p class="mb-0">Online students</p>
						</div>
					</div>
				</div>
				<!--/ col -->

				<!-- col -->
				<div class="col-lg-3 col-md-3 col-sm-12" data-aos="fade-down">
					<div class="count-five count-five-last count-five-0">
						<div class="count-content-five course-count ms-0">
							<h4><span class="counterUp" [countUp]="58370" [options]="{ enableScrollSpy: true }">58,370</span></h4>
							<p class="mb-0">Online Courses</p>
						</div>
					</div>
				</div>
				<!--/ col -->
			</div>
		</div>
	</section>
	<!-- /Counter Five-->

	<!-- Featured Courses Five-->
	<section class="featured-section-five">
		<div class="container">
			<div class="section-header section-header-six text-center" data-aos="fade-down">						
				<h2>Popular Courses</h2>
				<p>Discover our featured courses, specially curated to help you gain in-demand skills</p>
			</div>
			<div class="row">
				<div class="featured-courses-five-tab">
					<div class="tab-content">
						<div class="ux-design-five">
							<div class="row">
								<div class="col-lg-4 col-md-6 d-flex">
									<div class="course-item course-item-three mx-0 flex-fill aos" data-aos="fade-up">
										<div class="course-img">
											<a [routerLink]="routes.courseDetails">
												<img class="img-fluid" alt="Img" src="assets/img/course/course-40.jpg">
											</a>
											<div class="price">
												<h3>$200 <span>$990.00</span></h3>
											</div>
										</div>
										<div class="course-content">
											<div class="course-user">
												<div class="course-user-img">
													<a [routerLink]="routes.instructorProfile"><img src="assets/img/avatar/avatar-21.jpg" alt="Img" class="img-fluid"></a>
													<div class="course-name">
														<h4><a [routerLink]="routes.instructorProfile">Nicole Brown</a></h4>
														<p>Instructor</p>
													</div>
												</div>
												<a href="javascript:void(0);" class="fav-icon" [ngClass]="{'selected':isSelected[0]}" (click)="iconSelect(0)"><i class="fa-regular fa-heart"></i></a>
											</div>
											<h3 class="title"><a [routerLink]="routes.courseDetails">Information About UI/UX Design Degree</a></h3>
											<div class="course-info d-flex align-items-center">
												<div class="course-lesson d-flex align-items-center">
													<img src="assets/img/icons/icon-3.svg" alt="Img">
													<p>12+ Lesson</p>
												</div>
												<div class="course-time d-flex align-items-center">
													<img src="assets/img/icons/icon-4.svg" alt="Img">
													<p>9hr 30min</p>
												</div>
											</div>
											<div class="d-flex align-items-center justify-content-between">
												<div class="rating m-0">							
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star"></i>
													<span class="d-inline-block average-rating"><span>4.0</span> (15)</span>
												</div>
												<a [routerLink]="routes.checkout" class="btn btn-primary btn-xl d-inline-flex align-items-center flex-shrink-0"><i class="isax isax-shopping-cart5 me-2"></i>Buy Now</a>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-6 d-flex">
									<div class="course-item course-item-three mx-0 flex-fill aos" data-aos="fade-up">
										<div class="course-img">
											<a [routerLink]="routes.courseDetails">
												<img class="img-fluid" alt="Img" src="assets/img/course/course-02.jpg">
											</a>
											<div class="price">
												<h3>$156</h3>
											</div>
										</div>
										<div class="course-content">
											<div class="course-user">
												<div class="course-user-img">
													<a [routerLink]="routes.instructorProfile"><img src="assets/img/avatar/avatar-22.jpg" alt="Img" class="img-fluid"></a>
													<div class="course-name">
														<h4><a [routerLink]="routes.instructorProfile">Jenis R.</a></h4>
														<p>Instructor</p>
													</div>
												</div>
												<a href="javascript:void(0);" class="fav-icon" [ngClass]="{'selected':isSelected[1]}" (click)="iconSelect(1)"><i class="fa-regular fa-heart"></i></a>
											</div>
											<h3 class="title"><a [routerLink]="routes.courseDetails">Wordpress for Beginners - Master Wordpress Quickly</a></h3>
											<div class="course-info d-flex align-items-center">
												<div class="course-lesson d-flex align-items-center">
													<img src="assets/img/icons/icon-3.svg" alt="Img">
													<p>11+ Lesson</p>
												</div>
												<div class="course-time d-flex align-items-center">
													<img src="assets/img/icons/icon-4.svg" alt="Img">
													<p>6hr 30min</p>
												</div>
											</div>
											<div class="d-flex align-items-center justify-content-between">
												<div class="rating m-0">							
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star"></i>
													<span class="d-inline-block average-rating"><span>4.3</span> (15)</span>
												</div>
												<a [routerLink]="routes.checkout" class="btn btn-primary btn-xl d-inline-flex align-items-center flex-shrink-0"><i class="isax isax-shopping-cart5 me-2"></i>Buy Now</a>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-6 d-flex">
									<div class="course-item course-item-three mx-0 flex-fill aos" data-aos="fade-up">
										<div class="course-img">
											<a [routerLink]="routes.courseDetails">
												<img class="img-fluid" alt="Img" src="assets/img/course/course-03.jpg">
											</a>
											<div class="price combo">
												<h3>FREE</h3>
											</div>
										</div>
										<div class="course-content">
											<div class="course-user">
												<div class="course-user-img">
													<a [routerLink]="routes.instructorProfile"><img src="assets/img/avatar/avatar-25.jpg" alt="Img" class="img-fluid"></a>
													<div class="course-name">
														<h4><a [routerLink]="routes.instructorProfile">Jesse Stevens</a></h4>
														<p>Instructor</p>
													</div>
												</div>
												<a href="javascript:void(0);" class="fav-icon" [ngClass]="{'selected':isSelected[2]}" (click)="iconSelect(2)"><i class="fa-regular fa-heart"></i></a>
											</div>
											<h3 class="title"><a [routerLink]="routes.courseDetails">Sketch from A to Z (2022): Become an app designer</a></h3>
											<div class="course-info d-flex align-items-center">
												<div class="course-lesson d-flex align-items-center">
													<img src="assets/img/icons/icon-3.svg" alt="Img">
													<p>16+ Lesson</p>
												</div>
												<div class="course-time d-flex align-items-center">
													<img src="assets/img/icons/icon-4.svg" alt="Img">
													<p>12hr 30min</p>
												</div>
											</div>
											<div class="d-flex align-items-center justify-content-between">
												<div class="rating m-0">							
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star"></i>
													<span class="d-inline-block average-rating"><span>4.5</span> (15)</span>
												</div>
												<a [routerLink]="routes.checkout" class="btn btn-primary btn-xl d-inline-flex align-items-center flex-shrink-0"><i class="isax isax-shopping-cart5 me-2"></i>Buy Now</a>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-6 d-flex">
									<div class="course-item course-item-three mx-0 flex-fill aos" data-aos="fade-up">
										<div class="course-img">
											<a [routerLink]="routes.courseDetails">
												<img class="img-fluid" alt="Img" src="assets/img/course/course-04.jpg">
											</a>
											<div class="price">
												<h3>$145</h3>
											</div>
										</div>
										<div class="course-content">
											<div class="course-user">
												<div class="course-user-img">
													<a [routerLink]="routes.instructorProfile"><img src="assets/img/avatar/avatar-24.jpg" alt="Img" class="img-fluid"></a>
													<div class="course-name">
														<h4><a [routerLink]="routes.instructorProfile">Nicole Brown</a></h4>
														<p>Instructor</p>
													</div>
												</div>
												<div class="course-share d-flex align-items-center justify-content-center">
													<a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>
												</div>
											</div>
											<h3 class="title"><a [routerLink]="routes.courseDetails">Learn Angular Fundamentals From beginning to advance lavel</a></h3>
											<div class="course-info d-flex align-items-center">
												<div class="course-lesson d-flex align-items-center">
													<img src="assets/img/icons/icon-3.svg" alt="Img">
													<p>10+ Lesson</p>
												</div>
												<div class="course-time d-flex align-items-center">
													<img src="assets/img/icons/icon-4.svg" alt="Img">
													<p>8hr 30min</p>
												</div>
											</div>
											<div class="d-flex align-items-center justify-content-between">
												<div class="rating m-0">							
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star"></i>
													<span class="d-inline-block average-rating"><span>4.2</span> (15)</span>
												</div>
												<a [routerLink]="routes.checkout" class="btn btn-primary btn-xl d-inline-flex align-items-center flex-shrink-0"><i class="isax isax-shopping-cart5 me-2"></i>Buy Now</a>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-6 d-flex">
									<div class="course-item course-item-three mx-0 flex-fill aos" data-aos="fade-up">
										<div class="course-img">
											<a [routerLink]="routes.courseDetails">
												<img class="img-fluid" alt="Img" src="assets/img/course/course-13.jpg">
											</a>
											<div class="price combo">
												<h3>Free</h3>
											</div>
										</div>
										<div class="course-content">
											<div class="course-user">
												<div class="course-user-img">
													<a [routerLink]="routes.instructorProfile"><img src="assets/img/avatar/avatar-23.jpg" alt="Img" class="img-fluid"></a>
													<div class="course-name">
														<h4><a [routerLink]="routes.instructorProfile">John Smith</a></h4>
														<p>Instructor</p>
													</div>
												</div>
												<a href="javascript:void(0);" class="fav-icon" [ngClass]="{'selected':isSelected[3]}" (click)="iconSelect(3)"><i class="fa-regular fa-heart"></i></a>
											</div>
											<h3 class="title"><a [routerLink]="routes.courseDetails">Build Responsive Real World Websites with HTML5 and CSS3</a></h3>
											<div class="course-info d-flex align-items-center">
												<div class="course-lesson d-flex align-items-center">
													<img src="assets/img/icons/icon-3.svg" alt="Img">
													<p>13+ Lesson</p>
												</div>
												<div class="course-time d-flex align-items-center">
													<img src="assets/img/icons/icon-4.svg" alt="Img">
													<p>10hr 30min</p>
												</div>
											</div>
											<div class="d-flex align-items-center justify-content-between">
												<div class="rating m-0">							
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star"></i>
													<span class="d-inline-block average-rating"><span>4.0</span> (15)</span>
												</div>
												<a [routerLink]="routes.checkout" class="btn btn-primary btn-xl d-inline-flex align-items-center flex-shrink-0"><i class="isax isax-shopping-cart5 me-2"></i>Buy Now</a>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-6 d-flex">
									<div class="course-item course-item-three mx-0 flex-fill aos" data-aos="fade-up">
										<div class="course-img">
											<a [routerLink]="routes.courseDetails">
												<img class="img-fluid" alt="Img" src="assets/img/course/course-44.jpg">
											</a>
											<div class="price combo">
												<h3>$200 <span>$990.00</span></h3>
											</div>
										</div>
										<div class="course-content">
											<div class="course-user">
												<div class="course-user-img">
													<a [routerLink]="routes.instructorProfile"><img src="assets/img/avatar/avatar-26.jpg" alt="Img" class="img-fluid"></a>
													<div class="course-name">
														<h4><a [routerLink]="routes.instructorProfile">Stella Johnson</a></h4>
														<p>Instructor</p>
													</div>
												</div>
												<a href="javascript:void(0);" class="fav-icon" [ngClass]="{'selected':isSelected[4]}" (click)="iconSelect(4)"><i class="fa-regular fa-heart"></i></a>
											</div>
											<h3 class="title"><a [routerLink]="routes.courseDetails">C# Developers Double Your Coding Speed with Visual Studio</a></h3>
											<div class="course-info d-flex align-items-center">
												<div class="course-lesson d-flex align-items-center">
													<img src="assets/img/icons/icon-3.svg" alt="Img">
													<p>7+ Lesson</p>
												</div>
												<div class="course-time d-flex align-items-center">
													<img src="assets/img/icons/icon-4.svg" alt="Img">
													<p>7hr 30min</p>
												</div>
											</div>
											<div class="d-flex align-items-center justify-content-between">
												<div class="rating m-0">							
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star"></i>
													<span class="d-inline-block average-rating"><span>4.6</span> (15)</span>
												</div>
												<a [routerLink]="routes.checkout" class="btn btn-primary btn-xl d-inline-flex align-items-center flex-shrink-0"><i class="isax isax-shopping-cart5 me-2"></i>Buy Now</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="text-center">
			<a [routerLink]="routes.courseGrid" class="btn btn-xl btn-primary mt-2" data-aos="fade-up">See More Courses</a>
			 </div>
		</div>
	</section>
	<!-- /Featured Courses Five-->

	<!-- Master the skills Five -->
	<section class="master-section-five">
		<div class="container">	
			<div class="row align-items-center">
				<div class="col-lg-6 col-sm-12" data-aos="fade-down">
					<div class="section-five-sub">
						<div class="header-five-title mb-4">						
							<h2>Master the skills to drive your career</h2>
						</div>
						<div class="career-five-content">
							<p data-aos="fade-down">Get certified, master modern tech skills, and level up your career \u2014 whether you\u2019re starting out or a seasoned pro. 95% of eLearning learners report our hands-on earning learners report our hands-on </p>
						</div>
						<div class="d-flex align-items-center">
							<a [routerLink]="routes.courseList" class="btn btn-primary me-2">Join Course</a>
							<a [routerLink]="routes.courseList" class="btn btn-secondary">Learn More</a>
						</div>
					</div>
				</div>
				<div class="col-lg-6 col-sm-12">
					<div class="row align-items-center">
						<div class="col-lg-6 col-sm-6" data-aos="fade-down">
							<div class="skill-five-item">
								<div class="skill-five-icon bg-success">
									<img src="assets/img/icon/skill-01.svg" alt="Stay motivated">
								</div>
								<div class="skill-five-content">
									<h3>Stay motivated with engaging instructors</h3>
									<p>eLearning learners report our hands-on content directly helped their careers.</p>
								</div>
							</div>
						</div>
						<div class="col-lg-6 col-sm-6" data-aos="fade-down">
							<div class="skill-five-item">
								<div class="skill-five-icon bg-skyblue">
									<img src="assets/img/icon/skill-02.svg" alt="Stay motivated">
								</div>
								<div class="skill-five-content">
									<h3>Keep up with in the latest in cloud</h3>
									<p>eLearning learners report our hands-on content directly helped their careers.</p>
								</div>
							</div>
						</div>
						<div class="col-lg-6 col-sm-6" data-aos="fade-down">
							<div class="skill-five-item">
								<div class="skill-five-icon bg-danger">
									<img src="assets/img/icon/skill-03.svg" alt="Stay motivated">
								</div>
								<div class="skill-five-content">
									<h3>Get certified with 100+ certification courses</h3>
									<p>eLearning learners report our hands-on content directly helped their careers.</p>
								</div>
							</div>
						</div>
						<div class="col-lg-6 col-sm-6" data-aos="fade-down">
							<div class="skill-five-item">
								<div class="skill-five-icon bg-info">
									<img src="assets/img/icon/skill-04.svg" alt="Stay motivated">
								</div>
								<div class="skill-five-content">
									<h3>Build skills your way, from labs to courses</h3>
									<p>eLearning learners report our hands-on content directly helped their careers.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- /Master the skills Five -->

	<!-- Experienced Course Five -->
	<section class="experienced-course-five">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-lg-6" data-aos="fade-down">
					<div class="experienced-five-group">
						<div class="instructor-vector-left">
							<img src="assets/img/bg/instructor-vector-left.svg" alt="Img">
						</div>
						<div class="developer-five-list">
							<ul>
								<li class="column-img">
									<div class="developer-profile-five">											
										<div class="developer-image">
											<img src="assets/img/user/user-01.jpg" alt="Course Instructor">
										</div>
										<div class="profile-five-ovelay">													
											<h5>Daziy Millar</h5>
											<p>PHP Expert</p>
										</div>
									</div>										
								</li>
								<li class="column-img">
									<div class="developer-profile-five">											
										<div class="developer-image">
											<img src="assets/img/user/user-02.jpg" alt="Course Instructor">
										</div>
										<div class="profile-five-ovelay">													
											<h5>Daziy Millar</h5>
											<p>PHP Expert</p>
										</div>
									</div>										
								</li>
								<li class="column-img">
									<div class="developer-profile-five">											
										<div class="developer-image">
											<img src="assets/img/user/user-03.jpg" alt="Course Instructor">
										</div>
										<div class="profile-five-ovelay">													
											<h5>Daziy Millar</h5>
											<p>PHP Expert</p>
										</div>
									</div>										
								</li>
								<li class="column-img">
									<div class="developer-profile-five">											
										<div class="developer-image">
											<img src="assets/img/user/user-04.jpg" alt="Course Instructor">
										</div>
										<div class="profile-five-ovelay">													
											<h5>Daziy Millar</h5>
											<p>PHP Expert</p>
										</div>
									</div>										
								</li>
								<li class="column-img">
									<div class="developer-profile-five">											
										<div class="developer-image">
											<img src="assets/img/user/user-05.jpg" alt="Course Instructor">
										</div>
										<div class="profile-five-ovelay">													
											<h5>Daziy Millar</h5>
											<p>PHP Expert</p>
										</div>
									</div>										
								</li>
								<li class="column-img">
									<div class="developer-profile-five">											
										<div class="developer-image">
											<img src="assets/img/user/user-06.jpg" alt="Course Instructor">
										</div>
										<div class="profile-five-ovelay">													
											<h5>Daziy Millar</h5>
											<p>PHP Expert</p>
										</div>
									</div>										
								</li>
								<li class="column-img">
									<div class="developer-profile-five">											
										<div class="developer-image">
											<img src="assets/img/user/user-07.jpg" alt="Course Instructor">
										</div>
										<div class="profile-five-ovelay">													
											<h5>Daziy Millar</h5>
											<p>PHP Expert</p>
										</div>
									</div>										
								</li>
								<li class="column-img">
									<div class="developer-profile-five">											
										<div class="developer-image">
											<img src="assets/img/user/user-08.jpg" alt="Course Instructor">
										</div>
										<div class="profile-five-ovelay">													
											<h5>Daziy Millar</h5>
											<p>PHP Expert</p>
										</div>
									</div>										
								</li>
								<li class="column-img">
									<div class="developer-profile-five">											
										<div class="developer-image">
											<img src="assets/img/user/user-09.jpg" alt="Course Instructor">
										</div>
										<div class="profile-five-ovelay">													
											<h5>Daziy Millar</h5>
											<p>PHP Expert</p>
										</div>
									</div>										
								</li>
								<li class="column-img">
									<div class="developer-profile-five">											
										<div class="developer-image">
											<img src="assets/img/user/user-10.jpg" alt="Course Instructor">
										</div>
										<div class="profile-five-ovelay">													
											<h5>Daziy Millar</h5>
											<p>PHP Expert</p>
										</div>
									</div>										
								</li>
								<li class="column-img">
									<div class="developer-profile-five">											
										<div class="developer-image">
											<img src="assets/img/user/user-11.jpg" alt="Course Instructor">
										</div>
										<div class="profile-five-ovelay">													
											<h5>Daziy Millar</h5>
											<p>PHP Expert</p>
										</div>
									</div>										
								</li>
								<li class="column-img">
									<div class="developer-profile-five">											
										<div class="developer-image">
											<img src="assets/img/user/user-12.jpg" alt="Course Instructor">
										</div>
										<div class="profile-five-ovelay">													
											<h5>Daziy Millar</h5>
											<p>PHP Expert</p>
										</div>
									</div>										
								</li>
								<li class="column-img">
									<div class="developer-profile-five">											
										<div class="developer-image">
											<img src="assets/img/user/user-13.jpg" alt="Course Instructor">
										</div>
										<div class="profile-five-ovelay">													
											<h5>Daziy Millar</h5>
											<p>PHP Expert</p>
										</div>
									</div>										
								</li>
								<li class="column-img">
									<div class="developer-profile-five">											
										<div class="developer-image">
											<img src="assets/img/user/user-14.jpg" alt="Course Instructor">
										</div>
										<div class="profile-five-ovelay">													
											<h5>Daziy Millar</h5>
											<p>PHP Expert</p>
										</div>
									</div>										
								</li>
								<li class="column-img">
									<div class="developer-profile-five">											
										<div class="developer-image">
											<img src="assets/img/user/user-15.jpg" alt="Course Instructor">
										</div>
										<div class="profile-five-ovelay">													
											<h5>Daziy Millar</h5>
											<p>PHP Expert</p>
										</div>
									</div>										
								</li>
								<li class="column-img">
									<div class="developer-profile-five">											
										<div class="developer-image">
											<img src="assets/img/user/user-16.jpg" alt="Course Instructor">
										</div>
										<div class="profile-five-ovelay">													
											<h5>Daziy Millar</h5>
											<p>PHP Expert</p>
										</div>
									</div>										
								</li>
							</ul>
						</div>
						<div class="instructor-vector-right">
							<img src="assets/img/bg/instructor-vector-right.svg" alt="Img">
						</div>
					</div>
				</div>
				<div class="col-lg-6" data-aos="fade-down">
					<div class="experienced-five-sub">
						<div class="header-five-title header-five-title-inner">						
							<h2 class="ex-five-title">Experienced Course Instructor</h2>
						</div>
						<div class="career-five-content">
							<p class="ex-five-content">An award-winning course management system (CMS) or program is typically recognized for its exceptional quality, innovation, and effectiveness in helping both instructors and students succeed. Here's a breakdown of what makes a course management program stand out, along with examples of course topics and instructors that could be part of such a system.</p>
						</div>
						<a [routerLink]="routes.instructorList" class="btn btn-secondary btn-md">Register Now</a>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- Experienced Course Five -->

	<!-- Share your knowledge -->
	<section class="share-knowledge-five">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-lg-6 col-sm-12" data-aos="fade-down">
					<div class="section-five-sub">
						<div class="header-five-title mb-0">						
							<h2>Want to share your knowledge? Join us a Mentor</h2>
						</div>
						<div class="career-five-content">
							<p>High-definition video is video of higher resolution and quality than standard-definition. </p>
						</div>
						<ul class="list-unstyled heading-color mb-4">
							<li class="d-flex mb-3">
								<i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>Access Your Class anywhere
							</li>
							<li class="d-flex mb-3">
								<i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>Flexible Course Plan
							</li>
							<li class="d-flex mb-3 aos-init aos-animate">
								<i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>Quality Assurance
							</li>
							<li class="d-flex mb-3 aos-init aos-animate">
								<i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>Cost Effectiveness
							</li>
							<li class="d-flex mb-3 aos-init aos-animate">
								<i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>The Most World Class Instructors
							</li>
						</ul>
						
						<a [routerLink]="routes.courseList" class="btn btn-primary">Start Teaching Today</a>
					</div>
				</div>
				<div class="col-lg-6 col-sm-12" data-aos="fade-down">
					<div class="joing-count-five text-center">
						<div class="joing-count-image">
							<img src="assets/img/feature/feature-7.png" alt="Img">
							<img src="./assets/img/shapes/dot-2.svg" alt="img" class="joing-count-img1">
							<img src="./assets/img/shapes/half-circle.svg" alt="img" class="joing-count-img2">								
						</div>
						<div class="joing-count-five-one course-count">
							<h3 class="joing-count-number"><span class="counterUp">5,5</span>K<span>+</span></h3>
							<p class="joing-count-text">Courses</p>
						</div>
						<div class="joing-count-five-two course-count">
							<h3 class="joing-count-number"><span class="counterUp">50</span>K</h3>
							<p class="joing-count-text">Appreciations</p>
						</div>
						<div class="joing-count-five-three course-count">
							<h3 class="joing-count-number"><span class="counterUp">100</span></h3>
							<p class="joing-count-text">Countries</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- /Share your knowledge -->
	
	<!-- Testimonials -->
	<section class="testimonial-section-five">
		<img src="./assets/img/shapes/quote.png" class="d-none d-lg-flex testimonials-quote" alt="Img">
		<div class="container">
			<div class="header-five-title text-center" data-aos="fade-down">						
				<h2 class="text-light">Testimonials</h2>
				<p class="text-white">We are a very happy because we have a happy customer </p>
			</div>
			<div class="testimonial-slider-five">
				<div class="testimonial-five lazy slider">
					<ngx-slick-carousel [config]="testimonialFive">
						<div ngxSlickItem>

							<div class="testimonial-carousel" >
								<div class="testimonial-item-six">
									<div class="testimonial-content-five">
										<div class="testimonial-text">
											<h5 class="mb-3">Exactly what I was looking for. You will not regret it. It really saves me time and effort. Skill is what our business lacked."</h5>
											<p class="mb-3">Thank you very much for your help. This is exactly what I was looking for. You will not regret it. It really saves me time and effort. Skill is what our business lacked. Thank you very much for your help. This is exactly what I was look.</p>
										</div>
										<div class="testimonial-users-group d-flex align-items-center justify-content-between">													
											<div class="testimonial-users">
												<h5 class="mb-1">Hawkins</h5>
												<p>UI-UX Designer</p>
											</div>
											<div class="testimonial-ratings-five d-inline-flex align-items-center">
												<div class="rating">							
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
												</div>
											</div>
										</div>
									</div>
									<div class="testimonial-image">
										<img src="assets/img/testimonial/testimonials-1.png" alt="Img">
									</div>
								</div>
							</div>
						</div>
						<div ngxSlickItem>

							<div class="testimonial-carousel" >
								<div class="testimonial-item-six">
									<div class="testimonial-content-five">
										<div class="testimonial-text">
											<p class="mb-3">"Thank you very much for your help. This is exactly what I was looking for. You will not regret it. It really saves me time and effort. Skill is what our business lacked. Thank you very much for your help. This is exactly what I was looking for. You will not regret it. It really saves me time and effort. Skill is what our business lacked."</p>
										</div>
										<div class="testimonial-users-group d-flex align-items-center justify-content-between">													
											<div class="testimonial-users">
												<h5 class="mb-1">Nikolas Brooten</h5>
												<p>Sales Manager</p>
											</div>
											<div class="testimonial-ratings-five d-inline-flex align-items-center">
												<div class="rating">							
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
												</div>
											</div>
										</div>
									</div>
									<div class="testimonial-image">
										<img src="assets/img/testimonial/testimonial-02.png" alt="Img">
									</div>
								</div>
							</div>
						</div>
						<div ngxSlickItem>

							<div class="testimonial-carousel" >
								<div class="testimonial-item-six">
									<div class="testimonial-content-five">
										<div class="testimonial-text">
											<p class="mb-3">"Thank you very much for your help. This is exactly what I was looking for. You will not regret it. It really saves me time and effort. Skill is what our business lacked. Thank you very much for your help. This is exactly what I was looking for. You will not regret it. It really saves me time and effort. Skill is what our business lacked."</p>
										</div>
										<div class="testimonial-users-group d-flex align-items-center justify-content-between">													
											<div class="testimonial-users">
												<h5 class="mb-1">Nikolas Brooten</h5>
												<p>Sales Manager</p>
											</div>
											<div class="testimonial-ratings-five d-inline-flex align-items-center">
												<div class="rating">							
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
												</div>
											</div>
										</div>
									</div>
									<div class="testimonial-image">
										<img src="assets/img/testimonial/testimonial-03.png" alt="Img">
									</div>
								</div>
							</div>
						</div>
					</ngx-slick-carousel>
				</div>
			</div>
		</div>
	</section>
	<!-- /Testimonials -->

	<!-- Latest Blogs -->
	<section class="blogs-section-five ">
		<div class="container">
			<div class="section-header section-header-six text-center" data-aos="fade-down">						
				<h2>Latest Blogs</h2>
				<p>Follow the latest and most useful articles on that student's blog</p>
			</div>
			<div class="home-five-blog">
				<div class="row">
				<div class="col-lg-4">
					<div class="blog-card">
						<div class="blog-img">
							<a [routerLink]="routes.blog_details"><img src="assets/img/blog/blog-22.jpg" alt="img" class="img-fluid"></a>
						</div>
						<div class="blog-content">                                   
							<h5><a [routerLink]="routes.blog_details">Mastering Programming with a Technical Mentor</a></h5>
							<p>Learning to code can be overwhelming, but a mentor can make the journey smoother....</p>
							<div class="blog-user d-flex align-items-center justify-content-between">
								<div class="d-flex align-items-center">
									<a href="javascript:void(0);" class="avatar me-2">
										<img src="assets/img/user/user-42.jpg" alt="img" class="img-fluid">
									</a>
									<p class="mb-0 d-flex align-items-center">by <a href="javascript:void(0);" class="link-info text-decoration-underline ms-1">Reni Sarow</a></p>
								</div>
								<p class="d-flex align-items-center"><i class="isax isax-calendar-1 text-gray-7 me-2"></i>09 Aug 2025</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="blog-card">
						<div class="blog-img">
							<a [routerLink]="routes.blog_details"><img src="assets/img/blog/blog-23.jpg" alt="img" class="img-fluid"></a>
						</div>
						<div class="blog-content">                                   
							<h5><a [routerLink]="routes.blog_details">How to Level Up Your Coding Skills with the Help of a Mentor</a></h5>
							<p>Whether you're a beginner or an advanced coder, this blog will explore how....</p>
							<div class="blog-user d-flex align-items-center justify-content-between">
								<div class="d-flex align-items-center">
									<a href="javascript:void(0);" class="avatar me-2">
										<img src="assets/img/user/user-36.jpg" alt="img" class="img-fluid">
									</a>
									<p class="mb-0 d-flex align-items-center">by <a href="javascript:void(0);" class="link-info text-decoration-underline ms-1">Chris Daniel</a></p>
								</div>
								<p class="d-flex align-items-center"><i class="isax isax-calendar-1 text-gray-7 me-2"></i>15 Jul 2025</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="blog-card">
						<div class="blog-img">
							<a [routerLink]="routes.blog_details"><img src="assets/img/blog/blog-24.jpg" alt="img" class="img-fluid"></a>
						</div>
						<div class="blog-content">                                   
							<h5><a [routerLink]="routes.blog_details">Navigating the Tech World: The Ultimate Guide</a></h5>
							<p> The tech industry is vast and ever-changing, but a mentor can help you stay ahead.....</p>
							<div class="blog-user d-flex align-items-center justify-content-between">
								<div class="d-flex align-items-center">
									<a href="javascript:void(0);" class="avatar me-2">
										<img src="assets/img/user/user-53.jpg" alt="img" class="img-fluid">
									</a>
									<p class="mb-0 d-flex align-items-center">by <a href="javascript:void(0);" class="link-info text-decoration-underline ms-1">Andrew</a></p>
								</div>
								<p class="d-flex align-items-center"><i class="isax isax-calendar-1 text-gray-7 me-2"></i>15 Jan 2025</p>
							</div>
						</div>
					</div>
				</div>	
				</div>
				<div class="text-center">
					<a [routerLink]="routes.blog_grid2" class="btn btn-xl btn-primary mt-3">See More Blogs</a>
				</div>
			</div>
		</div>
	</section>
	<!-- Latest Blogs -->

	<app-footer/>` }]
  }], () => [{ type: CommonService }, { type: Router }, { type: Renderer2 }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Home6Component, { className: "Home6Component", filePath: "src/app/features/home-list/home6/home6.component.ts", lineNumber: 19 });
})();
export {
  Home6Component
};
//# sourceMappingURL=chunk-G7IUXNGY.js.map
