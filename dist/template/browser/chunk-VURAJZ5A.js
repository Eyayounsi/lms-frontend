import {
  CarouselComponent,
  CarouselModule,
  CarouselSlideDirective
} from "./chunk-DB7VBWQD.js";
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
import "./chunk-RE3U2CBZ.js";
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
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-5DE2SIVI.js";
import {
  __toESM
} from "./chunk-TXDUYLVM.js";

// src/app/features/home-list/home3/home3.component.ts
var AOS = __toESM(require_aos());

// src/app/features/home-list/home3/components/footer/footer.component.ts
var FooterComponent = class _FooterComponent {
  routes = routes;
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 129, vars: 12, consts: [[1, "footer", "footer-three"], ["data-aos", "fade-up", 1, "footer-top", "aos"], [1, "container"], [1, "row", "justify-content-between", "row-gap-4"], [1, "col-lg-4", "col-md-12"], [1, "footer-widget", "footer-about"], [1, "footer-logo"], ["src", "assets/img/logo-white.svg", "alt", "logo"], [1, "footer-about-content"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap"], ["href", "javascript:void(0);"], ["src", "assets/img/icons/appstore.svg", "alt", "", 1, "img-fluid"], ["src", "assets/img/icons/googleplay.svg", "alt", "", 1, "img-fluid"], [1, "col-lg-8"], [1, "row", "row-gap-4"], [1, "col-lg-3", "col-md-6"], [1, "footer-widget", "footer-menu"], [1, "footer-title"], [3, "routerLink"], [1, "footer-widget", "footer-contact"], [1, "contact-infos"], [1, "footer-bottom"], [1, "row", "row-gap-3"], [1, "col-md-4"], [1, "copyright-text"], [1, "d-flex", "align-items-center", "justify-content-center", "gap-2"], ["src", "assets/img/icons/fb.svg", "alt", "facebook", 1, "img-fluid"], ["src", "assets/img/icons/instagram.svg", "alt", "facebook", 1, "img-fluid"], ["src", "assets/img/icons/be.svg", "alt", "facebook", 1, "img-fluid"], ["src", "assets/img/icons/linkedin.svg", "alt", "facebook", 1, "img-fluid"], ["src", "assets/img/icons/x.svg", "alt", "facebook", 1, "img-fluid"], [1, "privacy-link"], [1, "mb-0", 3, "routerLink"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
      \u0275\u0275element(7, "img", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 8)(9, "p");
      \u0275\u0275text(10, "Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 9)(12, "a", 10);
      \u0275\u0275element(13, "img", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "a", 10);
      \u0275\u0275element(15, "img", 12);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(16, "div", 13)(17, "div", 14)(18, "div", 15)(19, "div", 16)(20, "h6", 17);
      \u0275\u0275text(21, "Support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "ul")(23, "li")(24, "a", 18);
      \u0275\u0275text(25, "Education");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "li")(27, "a", 18);
      \u0275\u0275text(28, "Enroll a Course");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "li")(30, "a", 18);
      \u0275\u0275text(31, "Orders");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "li")(33, "a", 18);
      \u0275\u0275text(34, "Payments");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "li")(36, "a", 18);
      \u0275\u0275text(37, "Contact Us");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(38, "div", 15)(39, "div", 16)(40, "h6", 17);
      \u0275\u0275text(41, "About");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "ul")(43, "li")(44, "a", 18);
      \u0275\u0275text(45, "Categories");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "li")(47, "a", 18);
      \u0275\u0275text(48, "Services");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "li")(50, "a", 18);
      \u0275\u0275text(51, "About Us");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "li")(53, "a", 18);
      \u0275\u0275text(54, "FAQ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "li")(56, "a", 18);
      \u0275\u0275text(57, "Blog");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(58, "div", 15)(59, "div", 16)(60, "h6", 17);
      \u0275\u0275text(61, "Useful Links");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "ul")(63, "li")(64, "a", 10);
      \u0275\u0275text(65, "Our values");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "li")(67, "a", 10);
      \u0275\u0275text(68, "Advisory board");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "li")(70, "a", 10);
      \u0275\u0275text(71, "Our partners");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "li")(73, "a", 10);
      \u0275\u0275text(74, "Become a partner");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "li")(76, "a", 10);
      \u0275\u0275text(77, "Future Learn");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(78, "div", 15)(79, "div", 19)(80, "h6", 17);
      \u0275\u0275text(81, "Contact Info");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "ul")(83, "li")(84, "div", 20)(85, "span");
      \u0275\u0275text(86, "Phone Number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "p");
      \u0275\u0275text(88, "310-437-2766");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(89, "li")(90, "div", 20)(91, "span");
      \u0275\u0275text(92, "Mail Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "p");
      \u0275\u0275text(94, "contact@example.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(95, "li")(96, "div", 20)(97, "span");
      \u0275\u0275text(98, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "p");
      \u0275\u0275text(100, "706 Campfire Ave. Meriden, CT ");
      \u0275\u0275elementEnd()()()()()()()()()()();
      \u0275\u0275elementStart(101, "div", 21)(102, "div", 2)(103, "div", 22)(104, "div", 23)(105, "div", 24)(106, "p");
      \u0275\u0275text(107, "Copyright 2025 \xA9 ");
      \u0275\u0275elementStart(108, "a", 10);
      \u0275\u0275text(109, "DreamsLMS");
      \u0275\u0275elementEnd();
      \u0275\u0275text(110, ". All right reserved.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(111, "div", 23)(112, "div", 25)(113, "a", 10);
      \u0275\u0275element(114, "img", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "a", 10);
      \u0275\u0275element(116, "img", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "a", 10);
      \u0275\u0275element(118, "img", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "a", 10);
      \u0275\u0275element(120, "img", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "a", 10);
      \u0275\u0275element(122, "img", 30);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(123, "div", 23)(124, "div", 31)(125, "a", 32);
      \u0275\u0275text(126, "Terms & Policy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "a", 18);
      \u0275\u0275text(128, "Privacy Policy");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(24);
      \u0275\u0275property("routerLink", ctx.routes.courseGrid);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.addCourse);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.register);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.page_pricing_plan);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.contactUs);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseCategory);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.courseCategory);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.aboutUs);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.page_faq);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.blog_grid3);
      \u0275\u0275advance(69);
      \u0275\u0275property("routerLink", ctx.routes.page_term_condition);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.page_privacy_policy);
    }
  }, dependencies: [CommonModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer", imports: [CommonModule, RouterLink], template: '<footer class="footer footer-three">\n				\n    <!-- Footer Top -->\n    <div class="footer-top aos" data-aos="fade-up">\n        <div class="container">\n            <div class="row justify-content-between row-gap-4">\n                <div class="col-lg-4 col-md-12">\n                \n                    <!-- Footer Widget -->\n                    <div class="footer-widget footer-about">\n                        <div class="footer-logo">\n                            <img src="assets/img/logo-white.svg" alt="logo">\n                        </div>\n                        <div class="footer-about-content">\n                            <p>Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.</p>\n                        </div>\n                        <div class="d-flex align-items-center gap-2 flex-wrap">\n                            <a href="javascript:void(0);"><img src="assets/img/icons/appstore.svg" alt="" class="img-fluid"></a>\n                            <a href="javascript:void(0);"><img src="assets/img/icons/googleplay.svg" alt="" class="img-fluid"></a>\n                        </div>\n                    </div>\n                    <!-- /Footer Widget -->\n                    \n                </div>\n\n                <div class="col-lg-8">\n                    <div class="row row-gap-4">\n                \n                        <div class="col-lg-3 col-md-6">\n                        \n                            <!-- Footer Widget -->\n                            <div class="footer-widget footer-menu">\n                                <h6 class="footer-title">Support</h6>\n                                <ul>\n                                    <li><a [routerLink]="routes.courseGrid">Education</a></li>\n                                    <li><a [routerLink]="routes.addCourse">Enroll a Course</a></li>\n                                    <li><a [routerLink]="routes.register">Orders</a></li>\n                                    <li><a [routerLink]="routes.page_pricing_plan">Payments</a></li>\n                                    <li><a [routerLink]="routes.contactUs">Contact Us</a></li>\n                                </ul>\n                            </div>\n                            <!-- /Footer Widget -->\n                            \n                        </div>\n                        \n                        <div class="col-lg-3 col-md-6">\n                        \n                            <!-- Footer Widget -->\n                            <div class="footer-widget footer-menu">\n                                <h6 class="footer-title">About</h6>\n                                <ul>\n                                    <li><a [routerLink]="routes.courseCategory">Categories</a></li>\n                                    <li><a [routerLink]="routes.courseCategory">Services</a></li>\n                                    <li><a [routerLink]="routes.aboutUs">About Us</a></li>\n                                    <li><a [routerLink]="routes.page_faq">FAQ</a></li>\n                                    <li><a [routerLink]="routes.blog_grid3">Blog</a></li>\n                                </ul>\n                            </div>\n                            <!-- /Footer Widget -->\n                            \n                        </div>\n\n                        <div class="col-lg-3 col-md-6">\n                        \n                            <!-- Footer Widget -->\n                            <div class="footer-widget footer-menu">\n                                <h6 class="footer-title">Useful Links</h6>\n                                <ul>\n                                    <li><a href="javascript:void(0);">Our values</a></li>\n                                    <li><a href="javascript:void(0);">Advisory board</a></li>\n                                    <li><a href="javascript:void(0);">Our partners</a></li>\n                                    <li><a href="javascript:void(0);">Become a partner</a></li>\n                                    <li><a href="javascript:void(0);">Future Learn</a></li>\n                                </ul>\n                            </div>\n                            <!-- /Footer Widget -->\n                            \n                        </div>\n                \n                        <div class="col-lg-3 col-md-6">\n                        \n                            <!-- Footer Widget -->\n                            <div class="footer-widget footer-contact">\n                                <h6 class="footer-title">Contact Info</h6>\n                                <ul>\n                                    <li>\n                                        <div class="contact-infos">\n                                            <span>Phone Number</span>\n                                            <p>310-437-2766</p>\n                                        </div>\n                                    </li>\n                                    <li>\n                                        <div class="contact-infos">\n                                            <span>Mail Address</span>\n                                            <p>contact&#64;example.com</p>\n                                        </div>\n                                    </li>\n                                    <li>\n                                        <div class="contact-infos">\n                                            <span>Address</span>\n                                            <p>706 Campfire Ave. Meriden, CT </p>\n                                        </div>\n                                    </li>\n                                </ul>\n                            </div>\n                            <!-- /Footer Widget -->\n                            \n                        </div>\n\n                    </div>\n                </div>\n                \n            </div>\n        </div>\n    </div>\n    <!-- /Footer Top -->\n    \n    <!-- Footer Bottom -->\n    <div class="footer-bottom">\n        <div class="container">\n        \n            <!-- Copyright -->\n            <div class="row row-gap-3">\n                <div class="col-md-4">\n                    <div class="copyright-text">\n                        <p>Copyright 2025 \xA9 <a href="javascript:void(0);">DreamsLMS</a>. All right reserved.</p>\n                    </div>\n                </div>\n                <div class="col-md-4">\n                    <div class="d-flex align-items-center justify-content-center gap-2">\n                        <a href="javascript:void(0);">\n                            <img src="assets/img/icons/fb.svg" alt="facebook" class="img-fluid">\n                        </a>\n                        <a href="javascript:void(0);">\n                            <img src="assets/img/icons/instagram.svg" alt="facebook" class="img-fluid">\n                        </a>\n                        <a href="javascript:void(0);">\n                            <img src="assets/img/icons/be.svg" alt="facebook" class="img-fluid">\n                        </a>\n                        <a href="javascript:void(0);">\n                            <img src="assets/img/icons/linkedin.svg" alt="facebook" class="img-fluid">\n                        </a>\n                        <a href="javascript:void(0);">\n                            <img src="assets/img/icons/x.svg" alt="facebook" class="img-fluid">\n                        </a>\n                    </div>\n                </div>\n                <div class="col-md-4">\n                    <div class="privacy-link">\n                        <a [routerLink]="routes.page_term_condition" class="mb-0">Terms & Policy</a>\n                        <a [routerLink]="routes.page_privacy_policy">Privacy Policy</a>\n                    </div>\n                </div>\n            </div>\n            <!-- /Copyright -->\n            \n        </div>\n    </div>\n    <!-- /Footer Bottom -->\n    \n</footer>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/features/home-list/home3/components/footer/footer.component.ts", lineNumber: 12 });
})();

// src/app/features/home-list/home3/home3.component.ts
var _c0 = () => ({ enableScrollSpy: true });
var _c1 = (a0) => ({ "selected": a0 });
function Home3Component_ng_template_1010_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 237)(1, "div", 238);
    \u0275\u0275element(2, "img", 239);
    \u0275\u0275elementEnd()();
  }
}
function Home3Component_ng_template_1011_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 237)(1, "div", 238);
    \u0275\u0275element(2, "img", 240);
    \u0275\u0275elementEnd()();
  }
}
function Home3Component_ng_template_1012_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 237)(1, "div", 238);
    \u0275\u0275element(2, "img", 241);
    \u0275\u0275elementEnd()();
  }
}
function Home3Component_ng_template_1013_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 237)(1, "div", 238);
    \u0275\u0275element(2, "img", 242);
    \u0275\u0275elementEnd()();
  }
}
function Home3Component_ng_template_1014_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 237)(1, "div", 238);
    \u0275\u0275element(2, "img", 243);
    \u0275\u0275elementEnd()();
  }
}
function Home3Component_ng_template_1015_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 237)(1, "div", 238);
    \u0275\u0275element(2, "img", 244);
    \u0275\u0275elementEnd()();
  }
}
var Home3Component = class _Home3Component {
  router;
  routes = routes;
  topCategories = [];
  trendingCourses = [];
  featuredInstructor = [];
  latestBlogs = [];
  featuredCourses = [];
  career = [];
  universitiesCompanies = [];
  testimonial = [];
  isSelected = [false];
  selected = "1";
  topCategoriesOwlOptions = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  trendingcrouse = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  instructorCrouse = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  brandCarousel = {
    margin: 24,
    nav: false,
    dots: false,
    loop: true,
    autoplay: false,
    autoplaySpeed: 2e3,
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
    lazyLoad: "ondemand",
    infinite: true
  };
  brandSlide2 = {
    lazyLoad: "ondemand",
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: false,
    speed: 3e3,
    autoplaySpeed: 1800,
    arrows: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  slideConfig = {
    lazyLoad: "ondemand",
    infinite: true
  };
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {
    AOS.init({ duration: 1200, once: true });
  }
  toggleClass(slide) {
    slide.active = !slide.active;
  }
  directPath() {
    this.router.navigate(["/pages/course/course-list"]);
  }
  iconSelect(index) {
    this.isSelected[index] = !this.isSelected[index];
  }
  onSubmit() {
    this.router.navigate([routes.courseList]);
  }
  static \u0275fac = function Home3Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Home3Component)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Home3Component, selectors: [["app-home3"]], decls: 1266, vars: 148, consts: [["slickModal", "slick-carousel"], [1, "banner-section-three", "d-flex", "align-items-center"], ["src", "assets/img/bg/bg-3.png", "alt", "img", 1, "img-fluid", "banner-bg-01"], ["src", "assets/img/bg/bg-4.png", "alt", "img", 1, "img-fluid", "banner-bg-02"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6"], ["data-aos", "fade-up", 1, "home-slide-face", "aos"], [1, "home-slide-text"], [1, "fw-bold", "text-uppercase"], [1, "mt-4"], [1, "text-secondary"], [1, "banner-content"], [1, "form", 3, "ngSubmit"], [1, "form-inner"], [1, "input-group"], [1, "fa-solid", "fa-magnifying-glass", "search-icon"], ["type", "email", "placeholder", "Search School, Online eductional centers, etc", 1, "form-control"], [1, "drop-detail"], ["placeholder", "Category", 1, "custom-mat-select", "select"], ["value", "1"], ["type", "submit", 1, "btn", "sub-btn"], [1, "fas", "fa-arrow-right"], [1, "trust-user"], [1, "trust-rating", "d-flex", "align-items-center"], [1, "rate-head"], [1, "rating", "d-flex", "align-items-center"], [1, "d-inline-block", "average-rating"], [1, "fas", "fa-star", "filled"], [1, "col-lg-6", "d-flex", "align-items-center"], ["data-aos", "fade-up", 1, "banner-image", "aos"], ["src", "assets/img/hero/hero-2.png", "alt", "Img"], [1, "section", "student-course"], [1, "course-widget"], [1, "row"], [1, "col-lg-3", "col-md-6"], [1, "course-full-width"], ["data-aos", "fade-up", 1, "blur-border", "course-radius", "align-items-center", "aos"], [1, "online-course", "d-flex", "align-items-center"], [1, "course-img"], ["src", "assets/img/pencil-icon.svg", "alt", ""], [1, "course-inner-content"], [3, "countUp", "options"], [1, "col-lg-3", "col-md-6", "d-flex"], ["data-aos", "fade-up", 1, "blur-border", "course-radius", "aos"], ["src", "assets/img/cources-icon.svg", "alt", ""], ["src", "assets/img/certificate-icon.svg", "alt", ""], ["src", "assets/img/gratuate-icon.svg", "alt", ""], [1, "section", "how-it-works"], ["data-aos", "fade-up", 1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-3", "aos"], [1, "section-header"], [1, "fw-medium", "text-secondary", "fs-18", "fw-bold", "mb-2", "d-inline-block"], [1, "mb-0"], [1, "btn", "btn-secondary", "btn-xl", 3, "routerLink"], ["data-aos", "fade-up", 1, "mentoring-course"], [3, "config"], ["ngxSlickItem", "", 1, "categories-item", "categories-item-two"], [1, "categories-icon"], ["src", "assets/img/category/icons/icon-1.svg", "alt", "Img"], [3, "routerLink"], ["src", "assets/img/category/icons/icon-2.svg", "alt", "Img"], ["src", "assets/img/category/icons/icon-3.svg", "alt", "Img"], ["src", "assets/img/category/icons/icon-4.svg", "alt", "Img"], ["src", "assets/img/category/icons/icon-5.png", "alt", "Img"], [1, "section", "new-course"], [1, "home-three-sec-bg"], ["src", "assets/img/bg/bg-3.png", "alt", "img", 1, "img-fluid", "sec-bg-01"], ["src", "assets/img/bg/bg-4.png", "alt", "img", 1, "img-fluid", "sec-bg-02"], [1, "course-feature"], [1, "col-lg-4", "col-md-6", "d-flex"], ["data-aos", "fade-up", 1, "course-item", "course-item-three", "mx-0", "flex-fill", "aos"], ["alt", "Img", "src", "assets/img/course/course-40.jpg", 1, "img-fluid"], [1, "price"], [1, "course-content"], [1, "course-user"], [1, "course-user-img"], ["src", "assets/img/avatar/avatar-21.jpg", "alt", "Img", 1, "img-fluid"], [1, "course-name"], ["href", "javascript:void(0);", 1, "fav-icon", 3, "click", "ngClass"], [1, "fa-regular", "fa-heart"], [1, "title"], [1, "course-info", "d-flex", "align-items-center"], [1, "course-lesson", "d-flex", "align-items-center"], ["src", "assets/img/icons/icon-3.svg", "alt", "Img"], [1, "course-time", "d-flex", "align-items-center"], ["src", "assets/img/icons/icon-4.svg", "alt", "Img"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "rating", "m-0"], [1, "fas", "fa-star"], [1, "btn", "btn-primary", "btn-xl", "d-inline-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-shopping-cart5", "me-2"], ["alt", "Img", "src", "assets/img/course/course-41.jpg", 1, "img-fluid"], ["src", "assets/img/avatar/avatar-22.jpg", "alt", "Img", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/course/course-42.jpg", 1, "img-fluid"], [1, "price", "combo"], ["src", "assets/img/avatar/avatar-25.jpg", "alt", "Img", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/course/course-43.jpg", 1, "img-fluid"], ["src", "assets/img/avatar/avatar-24.jpg", "alt", "Img", 1, "img-fluid"], [1, "course-share", "d-flex", "align-items-center", "justify-content-center"], ["alt", "Img", "src", "assets/img/course/course-45.jpg", 1, "img-fluid"], ["src", "assets/img/avatar/avatar-23.jpg", "alt", "Img", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/course/course-44.jpg", 1, "img-fluid"], ["src", "assets/img/avatar/avatar-26.jpg", "alt", "Img", 1, "img-fluid"], [1, "section", "master-skill"], [1, "row", "align-items-end"], [1, "col-lg-6", "col-md-12"], ["data-aos", "fade-up", 1, "section-header", "aos"], ["data-aos", "fade-up", 1, "career-group", "aos"], [1, "row", "row-gap-4"], [1, "col-lg-6", "col-md-6", "d-flex"], [1, "certified-item", "d-flex", "align-items-center", "flex-fill"], [1, "certified-img"], ["src", "assets/img/icons/icon-22.svg", "alt", "Img", 1, "img-fluid"], ["src", "assets/img/icons/icon-17.svg", "alt", "Img", 1, "img-fluid"], ["src", "assets/img/icons/icon-23.svg", "alt", "Img", 1, "img-fluid"], ["src", "assets/img/icons/icon-16.svg", "alt", "Img", 1, "img-fluid"], ["data-aos", "fade-up", 1, "career-img", "aos"], ["src", "assets/img/bg/bg-2.png", "alt", "Img", 1, "img-fluid", "master-bg"], ["src", "assets/img/feature/feature-16.png", "alt", "Img", 1, "img-fluid", "girl-img"], ["src", "assets/img/icons/icon-18.svg", "alt", "Img", 1, "img-fluid", "float-img-01"], ["src", "assets/img/icons/icon-19.svg", "alt", "Img", 1, "img-fluid", "float-img-02"], ["src", "assets/img/icons/icon-20.svg", "alt", "Img", 1, "img-fluid", "float-img-03"], ["src", "assets/img/icons/icon-21.svg", "alt", "Img", 1, "img-fluid", "float-img-04"], [1, "section", "trend-course"], ["data-aos", "fade-up", 1, "trending-course", "owl-theme", "aos"], ["ngxSlickItem", ""], [1, "course-box", "trend-box"], ["src", "assets/img/avatar/avatar-27.jpg", "alt", "Img", 1, "img-fluid"], ["href", "javascript:void(0);"], ["src", "assets/img/icons/icon-3.svg", "alt", "Img", 1, "img-fluid"], ["src", "assets/img/icons/icon-4.svg", "alt", "Img", 1, "img-fluid"], [1, "course-box", "d-flex", "aos"], [1, "rating-img", "d-flex", "align-items-center"], [1, "course-view", "d-flex", "align-items-center"], [1, "feature-instructors"], ["data-aos", "fade-up", 1, "section-header", "text-center", "aos"], ["data-aos", "fade-up", 1, "instructors-course", "aos"], ["ngxSlickItem", "", 1, "instructor-item", "instructor-item-two"], [1, "instructors-img"], ["tabindex", "0", 3, "routerLink"], ["alt", "Img", "src", "assets/img/instructor/instructor-09.jpg", 1, "img-fluid"], [1, "position-absolute", "start-0", "top-0", "d-flex", "align-items-start", "w-100", "z-index-2", "p-3"], [1, "verify"], [1, "isax", "isax-verify5"], [1, "course-count", "ms-auto", 3, "routerLink"], [1, "position-absolute", "end-0", "bottom-0", "d-flex", "align-items-start", "w-100", "z-index-2", "p-3"], ["href", "javascript:void(0);", 1, "favourite", "selected", "ms-auto"], [1, "isax", "isax-heart"], [1, "instructor-content"], [1, "designation"], [1, "student-count"], [1, "isax", "isax-profile-2user5", "text-secondary", "me-2"], ["alt", "Img", "src", "assets/img/instructor/instructor-10.jpg", 1, "img-fluid"], ["href", "javascript:void(0);", 1, "favourite", "ms-auto"], [1, "isax", "isax-profile-2user5", "text-warning", "me-2"], ["alt", "Img", "src", "assets/img/instructor/instructor-11.jpg", 1, "img-fluid"], [1, "isax", "isax-profile-2user5", "text-primary", "me-2"], ["alt", "Img", "src", "assets/img/instructor/instructor-12.jpg", 1, "img-fluid"], [1, "isax", "isax-profile-2user5", "text-danger", "me-2"], [1, "isax", "isax-profile-2user5", "text-pink", "me-2"], [1, "section", "lead-companies"], ["data-aos", "fade-up", 1, "lead-group", "aos"], [1, "lead-group-slider", "owl-theme"], [3, "options"], ["carouselSlide", ""], [1, "section", "share-knowledge"], [1, "row", "align-items-center", "row-gap-4"], [1, "col-md-6"], ["data-aos", "fade-up", 1, "knowledge-img", "aos"], ["src", "assets/img/feature/feature-17.svg", "alt", "Img", 1, "img-fluid"], [1, "col-md-6", "d-flex", "align-items-center"], ["data-aos", "fade-up", 1, "join-mentor", "aos"], [1, "list-unstyled", "mb-4"], [1, "d-flex", "mb-3"], [1, "isax", "isax-tick-circle5", "text-success", "fs-24", "me-2"], [1, "testimonial-four"], [1, "review"], [1, "fw-medium", "text-white", "fs-18", "fw-bold", "mb-2", "d-inline-block"], [1, "text-white", "mb-0"], ["data-aos", "fade-up", "data-sizes", "50vw ", 1, "mentor-testimonial", "lazy", "slider", "aos"], ["ngxSlickItem", "", 1, "d-flex", "justify-content-center"], [1, "testimonial-all"], [1, "testimonial-quotes"], ["src", "assets/img/icons/icon-28.png", "alt", "Img"], [1, "testimonial-content", "text-center", "align-items-center", "d-flex"], [1, "testimonial-info"], [1, "testimonial-icon"], ["src", "assets/img/icons/icon-29.png", "alt", "Img"], [1, "testimonial-user"], [1, "user-img"], ["data-aos", "fade-up", 1, "section", "become-instructors", "aos"], ["src", "assets/img/bg/bg-5.png", "alt", "", 1, "img-fluid", "become-instructors-bg1"], ["src", "assets/img/bg/bg-6.png", "alt", "", 1, "img-fluid", "become-instructors-bg2"], [1, "row", "row-gap-3"], [1, "col-md-6", "d-flex"], [1, "student-mentor", "d-flex", "flex-fill"], [1, "col-lg-7", "col-md-12"], [1, "top-instructors"], [1, "col-lg-5", "col-md-12"], [1, "mentor-img"], ["alt", "Img", "src", "assets/img/feature/feature-15.svg", 1, "img-fluid", "d-none", "d-lg-flex"], [1, "student-mentor", "bg-dark", "d-flex", "flex-fill"], [1, "mentor-img", "d-none", "d-lg-flex"], ["alt", "Img", "src", "assets/img/feature/feature-14.svg", 1, "img-fluid"], [1, "section", "latest-blog"], [1, "row", "row-gap-4", "justify-content-center"], [1, "col-md-6", "col-lg-4"], [1, "blog-wrap", "shadow-sm", "mb-0"], [1, "blog-img"], ["alt", "Img", "src", "assets/img/blog/blog-40.jpg", 1, "img-fluid"], [1, "blog-content"], [1, "blog-info", "mb-3"], ["href", "javascript:void(0);", 1, "blog-category"], [1, "blog-date"], [1, "isax", "isax-calendar-1"], ["alt", "Img", "src", "assets/img/blog/blog-41.jpg", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/blog/blog-42.jpg", 1, "img-fluid"], ["data-aos", "fade-up", 1, "enroll-group", "aos"], [1, "row", "row-gap-3", "justify-content-center"], [1, "col-lg-4", "col-md-6"], [1, "enroll-course", "d-flex", "align-items-center"], [1, "enroll-img"], ["src", "assets/img/icons/icon-5.svg", "alt", "Img", 1, "img-fluid"], [1, "course-count"], [1, "counterUp", 3, "countUp", "options"], ["src", "assets/img/icons/icon-6.svg", "alt", "Img", 1, "img-fluid"], ["src", "assets/img/icons/icon-7.svg", "alt", "Img", 1, "img-fluid"], [1, "lab-course"], ["data-aos", "fade-up", 1, "client-slider", "aos", 3, "config"], ["src", "assets/img/icons/icon-8.svg", "alt", "Img", 1, "img-fluid"], ["src", "assets/img/icons/icon-9.svg", "alt", "Img", 1, "img-fluid"], ["src", "assets/img/icons/icon-10.svg", "alt", "Img", 1, "img-fluid"], ["src", "assets/img/icons/icon-11.svg", "alt", "Img", 1, "img-fluid", "coda"], ["src", "assets/img/icons/icon-12.svg", "alt", "Img", 1, "img-fluid", "coda"], ["src", "assets/img/icons/icon-13.svg", "alt", "Img", 1, "img-fluid"], ["src", "assets/img/icons/icon-14.svg", "alt", "Img", 1, "img-fluid"], ["src", "assets/img/icons/icon-15.svg", "alt", "Img", 1, "img-fluid"], [1, "item"], [1, "lead-img"], ["alt", "Img", "src", "assets/img/client/22.svg", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/client/23.svg", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/client/24.svg", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/client/25.svg", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/client/26.svg", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/client/27.svg", 1, "img-fluid"]], template: function Home3Component_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "section", 1);
      \u0275\u0275element(1, "img", 2)(2, "img", 3);
      \u0275\u0275elementStart(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "div", 7)(7, "div", 8)(8, "span", 9);
      \u0275\u0275text(9, "The Leader in Online Learning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "h1", 10);
      \u0275\u0275text(11, "Engaging & Accessible ");
      \u0275\u0275elementStart(12, "span", 11);
      \u0275\u0275text(13, "Online Courses");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " For All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p", 10);
      \u0275\u0275text(16, "Our specialized online courses are designed to bring the classroom experience to you, no matter where you are.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 12)(18, "form", 13);
      \u0275\u0275listener("ngSubmit", function Home3Component_Template_form_ngSubmit_18_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(19, "div", 14)(20, "div", 15);
      \u0275\u0275element(21, "i", 16)(22, "input", 17);
      \u0275\u0275elementStart(23, "span", 18)(24, "mat-select", 19)(25, "mat-option", 20);
      \u0275\u0275text(26, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "mat-option", 20);
      \u0275\u0275text(28, "Angular");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "mat-option", 20);
      \u0275\u0275text(30, "Node Js");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "mat-option", 20);
      \u0275\u0275text(32, "React");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "mat-option", 20);
      \u0275\u0275text(34, "Python");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "button", 21);
      \u0275\u0275element(36, "i", 22);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(37, "div", 23)(38, "h5");
      \u0275\u0275text(39, "Trusted by over 15K Users worldwide since 2022");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 24)(41, "div", 25)(42, "h2")(43, "span");
      \u0275\u0275text(44, "1000");
      \u0275\u0275elementEnd();
      \u0275\u0275text(45, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 26)(47, "h2", 27);
      \u0275\u0275text(48, "4.4");
      \u0275\u0275elementEnd();
      \u0275\u0275element(49, "i", 28)(50, "i", 28)(51, "i", 28)(52, "i", 28)(53, "i", 28);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(54, "div", 29)(55, "div", 30);
      \u0275\u0275element(56, "img", 31);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(57, "section", 32)(58, "div", 4)(59, "div", 33)(60, "div", 34)(61, "div", 35)(62, "div", 36)(63, "div", 37)(64, "div", 38)(65, "div", 39);
      \u0275\u0275element(66, "img", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "div", 41)(68, "h4")(69, "span", 42);
      \u0275\u0275text(70, "0");
      \u0275\u0275elementEnd();
      \u0275\u0275text(71, "K ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "p");
      \u0275\u0275text(73, "Online Courses");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(74, "div", 43)(75, "div", 36)(76, "div", 44)(77, "div", 38)(78, "div", 39);
      \u0275\u0275element(79, "img", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "div", 41)(81, "h4")(82, "span", 42);
      \u0275\u0275text(83, "0");
      \u0275\u0275elementEnd();
      \u0275\u0275text(84, "+ ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "p");
      \u0275\u0275text(86, "Expert Tutors");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(87, "div", 43)(88, "div", 36)(89, "div", 44)(90, "div", 38)(91, "div", 39);
      \u0275\u0275element(92, "img", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "div", 41)(94, "h4")(95, "span", 42);
      \u0275\u0275text(96, "0");
      \u0275\u0275elementEnd();
      \u0275\u0275text(97, "K+ ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "p");
      \u0275\u0275text(99, "Ceritified Courses");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(100, "div", 43)(101, "div", 36)(102, "div", 44)(103, "div", 38)(104, "div", 39);
      \u0275\u0275element(105, "img", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "div", 41)(107, "h4")(108, "span", 42);
      \u0275\u0275text(109, "0");
      \u0275\u0275elementEnd();
      \u0275\u0275text(110, "K + ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "p");
      \u0275\u0275text(112, "Online Students");
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(113, "section", 48)(114, "div", 4)(115, "div", 49)(116, "div", 50)(117, "span", 51);
      \u0275\u0275text(118, "Favourite Course");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "h2", 52);
      \u0275\u0275text(120, "Top Category");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(121, "div")(122, "a", 53);
      \u0275\u0275text(123, "View all Categories");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(124, "div", 54)(125, "ngx-slick-carousel", 55)(126, "div", 56)(127, "span", 57);
      \u0275\u0275element(128, "img", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "h5")(130, "a", 59);
      \u0275\u0275text(131, "Angular Development");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(132, "p");
      \u0275\u0275text(133, "40 Instructors");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(134, "div", 56)(135, "span", 57);
      \u0275\u0275element(136, "img", 60);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "h5")(138, "a", 59);
      \u0275\u0275text(139, "Docker Development");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(140, "p");
      \u0275\u0275text(141, "45 Instructors");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(142, "div", 56)(143, "span", 57);
      \u0275\u0275element(144, "img", 61);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "h5")(146, "a", 59);
      \u0275\u0275text(147, "Node JS Frontend");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(148, "p");
      \u0275\u0275text(149, "40 Instructors");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(150, "div", 56)(151, "span", 57);
      \u0275\u0275element(152, "img", 62);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "h5")(154, "a", 59);
      \u0275\u0275text(155, "Swift Development");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(156, "p");
      \u0275\u0275text(157, "23 Instructors");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(158, "div", 56)(159, "span", 57);
      \u0275\u0275element(160, "img", 63);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "h5")(162, "a", 59);
      \u0275\u0275text(163, "React Native");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(164, "p");
      \u0275\u0275text(165, "80 Instructors");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(166, "div", 64)(167, "div", 65);
      \u0275\u0275element(168, "img", 66)(169, "img", 67);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "div", 4)(171, "div", 49)(172, "div", 50)(173, "span", 51);
      \u0275\u0275text(174, "What\u2019s New");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "h2", 52);
      \u0275\u0275text(176, "Featured Courses");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(177, "div")(178, "a", 53);
      \u0275\u0275text(179, "View all Categories");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(180, "div", 68)(181, "div", 34)(182, "div", 69)(183, "div", 70)(184, "div", 39)(185, "a", 59);
      \u0275\u0275element(186, "img", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "div", 72)(188, "h3");
      \u0275\u0275text(189, "$200 ");
      \u0275\u0275elementStart(190, "span");
      \u0275\u0275text(191, "$990.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(192, "div", 73)(193, "div", 74)(194, "div", 75)(195, "a", 59);
      \u0275\u0275element(196, "img", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(197, "div", 77)(198, "h4")(199, "a", 59);
      \u0275\u0275text(200, "Nicole Brown");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(201, "p");
      \u0275\u0275text(202, "Instructor");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(203, "a", 78);
      \u0275\u0275listener("click", function Home3Component_Template_a_click_203_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.iconSelect(1));
      });
      \u0275\u0275element(204, "i", 79);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(205, "h3", 80)(206, "a", 59);
      \u0275\u0275text(207, "Information About UI/UX Design Degree");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(208, "div", 81)(209, "div", 82);
      \u0275\u0275element(210, "img", 83);
      \u0275\u0275elementStart(211, "p");
      \u0275\u0275text(212, "12+ Lesson");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(213, "div", 84);
      \u0275\u0275element(214, "img", 85);
      \u0275\u0275elementStart(215, "p");
      \u0275\u0275text(216, "9hr 30min");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(217, "div", 86)(218, "div", 87);
      \u0275\u0275element(219, "i", 28)(220, "i", 28)(221, "i", 28)(222, "i", 28)(223, "i", 88);
      \u0275\u0275elementStart(224, "span", 27)(225, "span");
      \u0275\u0275text(226, "4.0");
      \u0275\u0275elementEnd();
      \u0275\u0275text(227, " (15)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(228, "a", 89);
      \u0275\u0275element(229, "i", 90);
      \u0275\u0275text(230, "Buy Now");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(231, "div", 69)(232, "div", 70)(233, "div", 39)(234, "a", 59);
      \u0275\u0275element(235, "img", 91);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(236, "div", 72)(237, "h3");
      \u0275\u0275text(238, "$156");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(239, "div", 73)(240, "div", 74)(241, "div", 75)(242, "a", 59);
      \u0275\u0275element(243, "img", 92);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(244, "div", 77)(245, "h4")(246, "a", 59);
      \u0275\u0275text(247, "Jenis R.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(248, "p");
      \u0275\u0275text(249, "Instructor");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(250, "a", 78);
      \u0275\u0275listener("click", function Home3Component_Template_a_click_250_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.iconSelect(2));
      });
      \u0275\u0275element(251, "i", 79);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(252, "h3", 80)(253, "a", 59);
      \u0275\u0275text(254, "Wordpress for Beginners - Master Wordpress Quickly");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(255, "div", 81)(256, "div", 82);
      \u0275\u0275element(257, "img", 83);
      \u0275\u0275elementStart(258, "p");
      \u0275\u0275text(259, "11+ Lesson");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(260, "div", 84);
      \u0275\u0275element(261, "img", 85);
      \u0275\u0275elementStart(262, "p");
      \u0275\u0275text(263, "6hr 30min");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(264, "div", 86)(265, "div", 87);
      \u0275\u0275element(266, "i", 28)(267, "i", 28)(268, "i", 28)(269, "i", 28)(270, "i", 88);
      \u0275\u0275elementStart(271, "span", 27)(272, "span");
      \u0275\u0275text(273, "4.3");
      \u0275\u0275elementEnd();
      \u0275\u0275text(274, " (15)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(275, "a", 89);
      \u0275\u0275element(276, "i", 90);
      \u0275\u0275text(277, "Buy Now");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(278, "div", 69)(279, "div", 70)(280, "div", 39)(281, "a", 59);
      \u0275\u0275element(282, "img", 93);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(283, "div", 94)(284, "h3");
      \u0275\u0275text(285, "FREE");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(286, "div", 73)(287, "div", 74)(288, "div", 75)(289, "a", 59);
      \u0275\u0275element(290, "img", 95);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(291, "div", 77)(292, "h4")(293, "a", 59);
      \u0275\u0275text(294, "Jesse Stevens");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(295, "p");
      \u0275\u0275text(296, "Instructor");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(297, "a", 78);
      \u0275\u0275listener("click", function Home3Component_Template_a_click_297_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.iconSelect(3));
      });
      \u0275\u0275element(298, "i", 79);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(299, "h3", 80)(300, "a", 59);
      \u0275\u0275text(301, "Sketch from A to Z (2022): Become an app designer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(302, "div", 81)(303, "div", 82);
      \u0275\u0275element(304, "img", 83);
      \u0275\u0275elementStart(305, "p");
      \u0275\u0275text(306, "16+ Lesson");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(307, "div", 84);
      \u0275\u0275element(308, "img", 85);
      \u0275\u0275elementStart(309, "p");
      \u0275\u0275text(310, "12hr 30min");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(311, "div", 86)(312, "div", 87);
      \u0275\u0275element(313, "i", 28)(314, "i", 28)(315, "i", 28)(316, "i", 28)(317, "i", 88);
      \u0275\u0275elementStart(318, "span", 27)(319, "span");
      \u0275\u0275text(320, "4.5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(321, " (15)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(322, "a", 89);
      \u0275\u0275element(323, "i", 90);
      \u0275\u0275text(324, "Buy Now");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(325, "div", 69)(326, "div", 70)(327, "div", 39)(328, "a", 59);
      \u0275\u0275element(329, "img", 96);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(330, "div", 72)(331, "h3");
      \u0275\u0275text(332, "$145");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(333, "div", 73)(334, "div", 74)(335, "div", 75)(336, "a", 59);
      \u0275\u0275element(337, "img", 97);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(338, "div", 77)(339, "h4")(340, "a", 59);
      \u0275\u0275text(341, "Nicole Brown");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(342, "p");
      \u0275\u0275text(343, "Instructor");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(344, "div", 98)(345, "a", 78);
      \u0275\u0275listener("click", function Home3Component_Template_a_click_345_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.iconSelect(6));
      });
      \u0275\u0275element(346, "i", 79);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(347, "h3", 80)(348, "a", 59);
      \u0275\u0275text(349, "Learn Angular Fundamentals From beginning to advance lavel");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(350, "div", 81)(351, "div", 82);
      \u0275\u0275element(352, "img", 83);
      \u0275\u0275elementStart(353, "p");
      \u0275\u0275text(354, "10+ Lesson");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(355, "div", 84);
      \u0275\u0275element(356, "img", 85);
      \u0275\u0275elementStart(357, "p");
      \u0275\u0275text(358, "8hr 30min");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(359, "div", 86)(360, "div", 87);
      \u0275\u0275element(361, "i", 28)(362, "i", 28)(363, "i", 28)(364, "i", 28)(365, "i", 88);
      \u0275\u0275elementStart(366, "span", 27)(367, "span");
      \u0275\u0275text(368, "4.2");
      \u0275\u0275elementEnd();
      \u0275\u0275text(369, " (15)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(370, "a", 89);
      \u0275\u0275element(371, "i", 90);
      \u0275\u0275text(372, "Buy Now");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(373, "div", 69)(374, "div", 70)(375, "div", 39)(376, "a", 59);
      \u0275\u0275element(377, "img", 99);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(378, "div", 94)(379, "h3");
      \u0275\u0275text(380, "Free");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(381, "div", 73)(382, "div", 74)(383, "div", 75)(384, "a", 59);
      \u0275\u0275element(385, "img", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(386, "div", 77)(387, "h4")(388, "a", 59);
      \u0275\u0275text(389, "John Smith");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(390, "p");
      \u0275\u0275text(391, "Instructor");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(392, "a", 78);
      \u0275\u0275listener("click", function Home3Component_Template_a_click_392_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.iconSelect(4));
      });
      \u0275\u0275element(393, "i", 79);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(394, "h3", 80)(395, "a", 59);
      \u0275\u0275text(396, "Build Responsive Real World Websites with HTML5 and CSS3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(397, "div", 81)(398, "div", 82);
      \u0275\u0275element(399, "img", 83);
      \u0275\u0275elementStart(400, "p");
      \u0275\u0275text(401, "13+ Lesson");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(402, "div", 84);
      \u0275\u0275element(403, "img", 85);
      \u0275\u0275elementStart(404, "p");
      \u0275\u0275text(405, "10hr 30min");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(406, "div", 86)(407, "div", 87);
      \u0275\u0275element(408, "i", 28)(409, "i", 28)(410, "i", 28)(411, "i", 28)(412, "i", 88);
      \u0275\u0275elementStart(413, "span", 27)(414, "span");
      \u0275\u0275text(415, "4.0");
      \u0275\u0275elementEnd();
      \u0275\u0275text(416, " (15)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(417, "a", 89);
      \u0275\u0275element(418, "i", 90);
      \u0275\u0275text(419, "Buy Now");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(420, "div", 69)(421, "div", 70)(422, "div", 39)(423, "a", 59);
      \u0275\u0275element(424, "img", 101);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(425, "div", 94)(426, "h3");
      \u0275\u0275text(427, "$200 ");
      \u0275\u0275elementStart(428, "span");
      \u0275\u0275text(429, "$990.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(430, "div", 73)(431, "div", 74)(432, "div", 75)(433, "a", 59);
      \u0275\u0275element(434, "img", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(435, "div", 77)(436, "h4")(437, "a", 59);
      \u0275\u0275text(438, "Stella Johnson");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(439, "p");
      \u0275\u0275text(440, "Instructor");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(441, "a", 78);
      \u0275\u0275listener("click", function Home3Component_Template_a_click_441_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.iconSelect(5));
      });
      \u0275\u0275element(442, "i", 79);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(443, "h3", 80)(444, "a", 59);
      \u0275\u0275text(445, "C# Developers Double Your Coding Speed with Visual Studio");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(446, "div", 81)(447, "div", 82);
      \u0275\u0275element(448, "img", 83);
      \u0275\u0275elementStart(449, "p");
      \u0275\u0275text(450, "7+ Lesson");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(451, "div", 84);
      \u0275\u0275element(452, "img", 85);
      \u0275\u0275elementStart(453, "p");
      \u0275\u0275text(454, "7hr 30min");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(455, "div", 86)(456, "div", 87);
      \u0275\u0275element(457, "i", 28)(458, "i", 28)(459, "i", 28)(460, "i", 28)(461, "i", 88);
      \u0275\u0275elementStart(462, "span", 27)(463, "span");
      \u0275\u0275text(464, "4.6");
      \u0275\u0275elementEnd();
      \u0275\u0275text(465, " (15)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(466, "a", 89);
      \u0275\u0275element(467, "i", 90);
      \u0275\u0275text(468, "Buy Now");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(469, "div", 103)(470, "div", 4)(471, "div", 104)(472, "div", 105)(473, "div", 106)(474, "span", 51);
      \u0275\u0275text(475, "What\u2019s New");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(476, "h2");
      \u0275\u0275text(477, "Master the skills to drive your career");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(478, "p");
      \u0275\u0275text(479, "Get certified, master modern tech skills, and level up your career \u2014 whether you\u2019re starting out or a seasoned pro. 95% of eLearning learners report our hands-on content directly helped their careers.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(480, "div", 107)(481, "div", 108)(482, "div", 109)(483, "div", 110)(484, "div", 111);
      \u0275\u0275element(485, "img", 112);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(486, "p");
      \u0275\u0275text(487, "Stay motivated with engaging instructors");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(488, "div", 109)(489, "div", 110)(490, "div", 111);
      \u0275\u0275element(491, "img", 113);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(492, "p");
      \u0275\u0275text(493, "Keep up with in the latest in cloud");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(494, "div", 109)(495, "div", 110)(496, "div", 111);
      \u0275\u0275element(497, "img", 114);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(498, "p");
      \u0275\u0275text(499, "Get certified with 100+ certification courses");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(500, "div", 109)(501, "div", 110)(502, "div", 111);
      \u0275\u0275element(503, "img", 115);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(504, "p");
      \u0275\u0275text(505, "Build skills your way, from labs to courses");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(506, "div", 105)(507, "div", 116);
      \u0275\u0275element(508, "img", 117)(509, "img", 118)(510, "img", 119)(511, "img", 120)(512, "img", 121)(513, "img", 122);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(514, "div", 123)(515, "div", 65);
      \u0275\u0275element(516, "img", 66)(517, "img", 67);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(518, "div", 4)(519, "div", 49)(520, "div", 50)(521, "span", 51);
      \u0275\u0275text(522, "What\u2019s New");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(523, "h2", 52);
      \u0275\u0275text(524, "Trending Courses");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(525, "div")(526, "a", 53);
      \u0275\u0275text(527, "View all Courses");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(528, "div", 124)(529, "ngx-slick-carousel", 55, 0)(531, "div", 125)(532, "div", 126)(533, "div", 70)(534, "div", 39)(535, "a", 59);
      \u0275\u0275element(536, "img", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(537, "div", 72)(538, "h3");
      \u0275\u0275text(539, "$200 ");
      \u0275\u0275elementStart(540, "span");
      \u0275\u0275text(541, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(542, "div", 73)(543, "div", 74)(544, "div", 75)(545, "a", 59);
      \u0275\u0275element(546, "img", 127);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(547, "div", 77)(548, "h4")(549, "a", 59);
      \u0275\u0275text(550, "John Michael");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(551, "p");
      \u0275\u0275text(552, "Instructor");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(553, "div", 98)(554, "a", 128);
      \u0275\u0275element(555, "i", 79);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(556, "h3", 80)(557, "a", 59);
      \u0275\u0275text(558, "Learn JavaScript and Express to become a professional JavaScript");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(559, "div", 81)(560, "div", 82);
      \u0275\u0275element(561, "img", 129);
      \u0275\u0275elementStart(562, "p");
      \u0275\u0275text(563, "13+ Lesson");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(564, "div", 84);
      \u0275\u0275element(565, "img", 130);
      \u0275\u0275elementStart(566, "p");
      \u0275\u0275text(567, "10hr 30min");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(568, "div", 86)(569, "div", 87);
      \u0275\u0275element(570, "i", 28)(571, "i", 28)(572, "i", 28)(573, "i", 28)(574, "i", 88);
      \u0275\u0275elementStart(575, "span", 27)(576, "span");
      \u0275\u0275text(577, "4.0");
      \u0275\u0275elementEnd();
      \u0275\u0275text(578, " (15)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(579, "a", 89);
      \u0275\u0275element(580, "i", 90);
      \u0275\u0275text(581, "Buy Now");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(582, "div", 125)(583, "div", 126)(584, "div", 70)(585, "div", 39)(586, "a", 59);
      \u0275\u0275element(587, "img", 91);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(588, "div", 72)(589, "h3");
      \u0275\u0275text(590, "$300 ");
      \u0275\u0275elementStart(591, "span");
      \u0275\u0275text(592, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(593, "div", 73)(594, "div", 74)(595, "div", 75)(596, "a", 59);
      \u0275\u0275element(597, "img", 92);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(598, "div", 77)(599, "h4")(600, "a", 59);
      \u0275\u0275text(601, "John Smith");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(602, "p");
      \u0275\u0275text(603, "Instructor");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(604, "div", 98)(605, "a", 128);
      \u0275\u0275element(606, "i", 79);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(607, "h3", 80)(608, "a", 59);
      \u0275\u0275text(609, "Responsive Web Design Essentials HTML5 CSS3 and Bootstrap");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(610, "div", 81)(611, "div", 82);
      \u0275\u0275element(612, "img", 129);
      \u0275\u0275elementStart(613, "p");
      \u0275\u0275text(614, "10+ Lesson");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(615, "div", 84);
      \u0275\u0275element(616, "img", 130);
      \u0275\u0275elementStart(617, "p");
      \u0275\u0275text(618, "11hr 30min");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(619, "div", 86)(620, "div", 87);
      \u0275\u0275element(621, "i", 28)(622, "i", 28)(623, "i", 28)(624, "i", 28)(625, "i", 88);
      \u0275\u0275elementStart(626, "span", 27)(627, "span");
      \u0275\u0275text(628, "4.2");
      \u0275\u0275elementEnd();
      \u0275\u0275text(629, " (15)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(630, "a", 89);
      \u0275\u0275element(631, "i", 90);
      \u0275\u0275text(632, "Buy Now");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(633, "div", 125)(634, "div", 126)(635, "div", 70)(636, "div", 39)(637, "a", 59);
      \u0275\u0275element(638, "img", 101);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(639, "div", 72)(640, "h3");
      \u0275\u0275text(641, "$100 ");
      \u0275\u0275elementStart(642, "span");
      \u0275\u0275text(643, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(644, "div", 73)(645, "div", 74)(646, "div", 75)(647, "a", 59);
      \u0275\u0275element(648, "img", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(649, "div", 77)(650, "h4")(651, "a", 59);
      \u0275\u0275text(652, "Lavern M.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(653, "p");
      \u0275\u0275text(654, "Instructor");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(655, "div", 98)(656, "a", 128);
      \u0275\u0275element(657, "i", 79);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(658, "h3", 80)(659, "a", 59);
      \u0275\u0275text(660, "The Complete App Design Course - UX, UI and Design Thinking");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(661, "div", 81)(662, "div", 82);
      \u0275\u0275element(663, "img", 129);
      \u0275\u0275elementStart(664, "p");
      \u0275\u0275text(665, "8+ Lesson");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(666, "div", 84);
      \u0275\u0275element(667, "img", 130);
      \u0275\u0275elementStart(668, "p");
      \u0275\u0275text(669, "8hr 30min");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(670, "div", 86)(671, "div", 87);
      \u0275\u0275element(672, "i", 28)(673, "i", 28)(674, "i", 28)(675, "i", 28)(676, "i", 88);
      \u0275\u0275elementStart(677, "span", 27)(678, "span");
      \u0275\u0275text(679, "4.3");
      \u0275\u0275elementEnd();
      \u0275\u0275text(680, " (15)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(681, "a", 89);
      \u0275\u0275element(682, "i", 90);
      \u0275\u0275text(683, "Buy Now");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(684, "div", 125)(685, "div", 131)(686, "div", 70)(687, "div", 39)(688, "a", 59);
      \u0275\u0275element(689, "img", 93);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(690, "div", 94)(691, "h3");
      \u0275\u0275text(692, "Free");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(693, "div", 73)(694, "div", 74)(695, "div", 75)(696, "a", 59);
      \u0275\u0275element(697, "img", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(698, "div", 77)(699, "h4")(700, "a", 59);
      \u0275\u0275text(701, "John Smith");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(702, "p");
      \u0275\u0275text(703, "Instructor");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(704, "div", 98)(705, "a", 128);
      \u0275\u0275element(706, "i", 79);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(707, "h3", 80)(708, "a", 59);
      \u0275\u0275text(709, "Build Responsive Real World Websites with HTML5 and CSS3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(710, "div", 81)(711, "div", 132);
      \u0275\u0275element(712, "img", 83);
      \u0275\u0275elementStart(713, "p");
      \u0275\u0275text(714, "13+ Lesson");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(715, "div", 133);
      \u0275\u0275element(716, "img", 85);
      \u0275\u0275elementStart(717, "p");
      \u0275\u0275text(718, "10hr 30min");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(719, "div", 86)(720, "div", 87);
      \u0275\u0275element(721, "i", 28)(722, "i", 28)(723, "i", 28)(724, "i", 28)(725, "i", 88);
      \u0275\u0275elementStart(726, "span", 27)(727, "span");
      \u0275\u0275text(728, "4.0");
      \u0275\u0275elementEnd();
      \u0275\u0275text(729, " (15)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(730, "a", 89);
      \u0275\u0275element(731, "i", 90);
      \u0275\u0275text(732, "Buy Now");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(733, "div", 125)(734, "div", 126)(735, "div", 70)(736, "div", 39)(737, "a", 59);
      \u0275\u0275element(738, "img", 101);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(739, "div", 72)(740, "h3");
      \u0275\u0275text(741, "$300 ");
      \u0275\u0275elementStart(742, "span");
      \u0275\u0275text(743, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(744, "div", 73)(745, "div", 74)(746, "div", 75)(747, "a", 59);
      \u0275\u0275element(748, "img", 92);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(749, "div", 77)(750, "h4")(751, "a", 59);
      \u0275\u0275text(752, "John Smith");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(753, "p");
      \u0275\u0275text(754, "Instructor");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(755, "div", 98)(756, "a", 128);
      \u0275\u0275element(757, "i", 79);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(758, "h3", 80)(759, "a", 59);
      \u0275\u0275text(760, "Responsive Web Design Essentials HTML5 CSS3 and Bootstrap");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(761, "div", 81)(762, "div", 82);
      \u0275\u0275element(763, "img", 129);
      \u0275\u0275elementStart(764, "p");
      \u0275\u0275text(765, "10+ Lesson");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(766, "div", 84);
      \u0275\u0275element(767, "img", 130);
      \u0275\u0275elementStart(768, "p");
      \u0275\u0275text(769, "11hr 30min");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(770, "div", 86)(771, "div", 87);
      \u0275\u0275element(772, "i", 28)(773, "i", 28)(774, "i", 28)(775, "i", 28)(776, "i", 88);
      \u0275\u0275elementStart(777, "span", 27)(778, "span");
      \u0275\u0275text(779, "4.5");
      \u0275\u0275elementEnd();
      \u0275\u0275text(780, " (15)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(781, "a", 89);
      \u0275\u0275element(782, "i", 90);
      \u0275\u0275text(783, "Buy Now");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(784, "div", 125)(785, "div", 126)(786, "div", 70)(787, "div", 39)(788, "a", 59);
      \u0275\u0275element(789, "img", 99);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(790, "div", 72)(791, "h3");
      \u0275\u0275text(792, "$100 ");
      \u0275\u0275elementStart(793, "span");
      \u0275\u0275text(794, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(795, "div", 73)(796, "div", 74)(797, "div", 75)(798, "a", 59);
      \u0275\u0275element(799, "img", 97);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(800, "div", 77)(801, "h4")(802, "a", 59);
      \u0275\u0275text(803, "Lavern M.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(804, "p");
      \u0275\u0275text(805, "Instructor");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(806, "div", 98)(807, "a", 128);
      \u0275\u0275element(808, "i", 79);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(809, "h3", 80)(810, "a", 59);
      \u0275\u0275text(811, "The Complete App Design Course - UX, UI and Design Thinking");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(812, "div", 81)(813, "div", 82);
      \u0275\u0275element(814, "img", 129);
      \u0275\u0275elementStart(815, "p");
      \u0275\u0275text(816, "8+ Lesson");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(817, "div", 84);
      \u0275\u0275element(818, "img", 130);
      \u0275\u0275elementStart(819, "p");
      \u0275\u0275text(820, "8hr 30min");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(821, "div", 86)(822, "div", 87);
      \u0275\u0275element(823, "i", 28)(824, "i", 28)(825, "i", 28)(826, "i", 28)(827, "i", 88);
      \u0275\u0275elementStart(828, "span", 27)(829, "span");
      \u0275\u0275text(830, "4.0");
      \u0275\u0275elementEnd();
      \u0275\u0275text(831, " (15)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(832, "a", 89);
      \u0275\u0275element(833, "i", 90);
      \u0275\u0275text(834, "Buy Now");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(835, "div", 125)(836, "div", 126)(837, "div", 70)(838, "div", 39)(839, "a", 59);
      \u0275\u0275element(840, "img", 101);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(841, "div", 72)(842, "h3");
      \u0275\u0275text(843, "$200 ");
      \u0275\u0275elementStart(844, "span");
      \u0275\u0275text(845, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(846, "div", 73)(847, "div", 74)(848, "div", 75)(849, "a", 59);
      \u0275\u0275element(850, "img", 76);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(851, "div", 77)(852, "h4")(853, "a", 59);
      \u0275\u0275text(854, "John Michael");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(855, "p");
      \u0275\u0275text(856, "Instructor");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(857, "div", 98)(858, "a", 128);
      \u0275\u0275element(859, "i", 79);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(860, "h3", 80)(861, "a", 59);
      \u0275\u0275text(862, "Learn JavaScript and Express to become a professional JavaScript");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(863, "div", 81)(864, "div", 82);
      \u0275\u0275element(865, "img", 129);
      \u0275\u0275elementStart(866, "p");
      \u0275\u0275text(867, "13+ Lesson");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(868, "div", 84);
      \u0275\u0275element(869, "img", 130);
      \u0275\u0275elementStart(870, "p");
      \u0275\u0275text(871, "10hr 30min");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(872, "div", 86)(873, "div", 87);
      \u0275\u0275element(874, "i", 28)(875, "i", 28)(876, "i", 28)(877, "i", 28)(878, "i", 88);
      \u0275\u0275elementStart(879, "span", 27)(880, "span");
      \u0275\u0275text(881, "4.0");
      \u0275\u0275elementEnd();
      \u0275\u0275text(882, " (15)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(883, "a", 89);
      \u0275\u0275element(884, "i", 90);
      \u0275\u0275text(885, "Buy Now");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(886, "div", 134)(887, "div", 135)(888, "h2");
      \u0275\u0275text(889, "Featured Instructor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(890, "p", 52);
      \u0275\u0275text(891, " Our team combines cutting-edge design with robust development");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(892, "div", 136)(893, "ngx-slick-carousel", 55)(894, "div", 137)(895, "div", 138)(896, "a", 139);
      \u0275\u0275element(897, "img", 140);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(898, "div", 141)(899, "span", 142);
      \u0275\u0275element(900, "i", 143);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(901, "a", 144);
      \u0275\u0275text(902, "20 Courses");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(903, "div", 145)(904, "a", 146);
      \u0275\u0275element(905, "i", 147);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(906, "div", 148)(907, "h3", 80)(908, "a", 59);
      \u0275\u0275text(909, "David Lee");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(910, "span", 149);
      \u0275\u0275text(911, "Web Developer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(912, "div", 150);
      \u0275\u0275element(913, "i", 151);
      \u0275\u0275elementStart(914, "span");
      \u0275\u0275text(915, "50 Students");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(916, "div", 137)(917, "div", 138)(918, "a", 139);
      \u0275\u0275element(919, "img", 152);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(920, "div", 141)(921, "a", 144);
      \u0275\u0275text(922, "15 Courses");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(923, "div", 145)(924, "a", 153);
      \u0275\u0275element(925, "i", 147);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(926, "div", 148)(927, "h3", 80)(928, "a", 59);
      \u0275\u0275text(929, "Daziy Millar");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(930, "span", 149);
      \u0275\u0275text(931, "PHP Expert");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(932, "div", 150);
      \u0275\u0275element(933, "i", 154);
      \u0275\u0275elementStart(934, "span");
      \u0275\u0275text(935, "60 Students");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(936, "div", 137)(937, "div", 138)(938, "a", 139);
      \u0275\u0275element(939, "img", 155);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(940, "div", 141)(941, "span", 142);
      \u0275\u0275element(942, "i", 143);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(943, "a", 144);
      \u0275\u0275text(944, "22 Courses");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(945, "div", 145)(946, "a", 153);
      \u0275\u0275element(947, "i", 147);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(948, "div", 148)(949, "h3", 80)(950, "a", 59);
      \u0275\u0275text(951, "Patricia Mendoza");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(952, "span", 149);
      \u0275\u0275text(953, "Web Developer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(954, "div", 150);
      \u0275\u0275element(955, "i", 156);
      \u0275\u0275elementStart(956, "span");
      \u0275\u0275text(957, "40 Students");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(958, "div", 137)(959, "div", 138)(960, "a", 139);
      \u0275\u0275element(961, "img", 157);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(962, "div", 141)(963, "span", 142);
      \u0275\u0275element(964, "i", 143);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(965, "a", 144);
      \u0275\u0275text(966, "20 Courses");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(967, "div", 145)(968, "a", 153);
      \u0275\u0275element(969, "i", 147);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(970, "div", 148)(971, "h3", 80)(972, "a", 59);
      \u0275\u0275text(973, "Skyler Whites");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(974, "span", 149);
      \u0275\u0275text(975, "UI Designer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(976, "div", 150);
      \u0275\u0275element(977, "i", 158);
      \u0275\u0275elementStart(978, "span");
      \u0275\u0275text(979, "50 Students");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(980, "div", 137)(981, "div", 138)(982, "a", 139);
      \u0275\u0275element(983, "img", 152);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(984, "div", 141)(985, "a", 144);
      \u0275\u0275text(986, "15 Courses");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(987, "div", 145)(988, "a", 153);
      \u0275\u0275element(989, "i", 147);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(990, "div", 148)(991, "h3", 80)(992, "a", 59);
      \u0275\u0275text(993, "Patricia Mendoza");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(994, "span", 149);
      \u0275\u0275text(995, "Web Developer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(996, "div", 150);
      \u0275\u0275element(997, "i", 159);
      \u0275\u0275elementStart(998, "span");
      \u0275\u0275text(999, "50 Students");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(1e3, "div", 160)(1001, "div", 4)(1002, "div", 135)(1003, "span", 51);
      \u0275\u0275text(1004, "Trusted By");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1005, "h2", 52);
      \u0275\u0275text(1006, "500+ Leading Universities And Companies");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1007, "div", 161)(1008, "div", 162)(1009, "owl-carousel-o", 163);
      \u0275\u0275template(1010, Home3Component_ng_template_1010_Template, 3, 0, "ng-template", 164)(1011, Home3Component_ng_template_1011_Template, 3, 0, "ng-template", 164)(1012, Home3Component_ng_template_1012_Template, 3, 0, "ng-template", 164)(1013, Home3Component_ng_template_1013_Template, 3, 0, "ng-template", 164)(1014, Home3Component_ng_template_1014_Template, 3, 0, "ng-template", 164)(1015, Home3Component_ng_template_1015_Template, 3, 0, "ng-template", 164);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(1016, "div", 165)(1017, "div", 65);
      \u0275\u0275element(1018, "img", 66)(1019, "img", 67);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1020, "div", 4)(1021, "div", 166)(1022, "div", 167)(1023, "div", 168);
      \u0275\u0275element(1024, "img", 169);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1025, "div", 170)(1026, "div", 171)(1027, "h2");
      \u0275\u0275text(1028, "Want to share your knowledge? Join us a Mentor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1029, "p");
      \u0275\u0275text(1030, "High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1031, "ul", 172)(1032, "li", 173);
      \u0275\u0275element(1033, "i", 174);
      \u0275\u0275text(1034, "Access Your Class anywhere ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1035, "li", 173);
      \u0275\u0275element(1036, "i", 174);
      \u0275\u0275text(1037, "Flexible Course Plan ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1038, "li", 173);
      \u0275\u0275element(1039, "i", 174);
      \u0275\u0275text(1040, "Quality Assurance ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1041, "li", 173);
      \u0275\u0275element(1042, "i", 174);
      \u0275\u0275text(1043, "Cost Effectiveness ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1044, "li", 173);
      \u0275\u0275element(1045, "i", 174);
      \u0275\u0275text(1046, "The Most World Class Instructors ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1047, "div")(1048, "a", 53);
      \u0275\u0275text(1049, "Read More");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(1050, "div", 175)(1051, "div", 176)(1052, "div", 4)(1053, "div", 135)(1054, "span", 177);
      \u0275\u0275text(1055, "Check out these real reviews");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1056, "h2", 178);
      \u0275\u0275text(1057, "Users-love-us Don't take it from us.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1058, "div", 179)(1059, "ngx-slick-carousel", 55)(1060, "div", 180)(1061, "div", 181)(1062, "div", 182);
      \u0275\u0275element(1063, "img", 183);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1064, "div", 184)(1065, "div", 185)(1066, "div", 186);
      \u0275\u0275element(1067, "img", 187);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1068, "p");
      \u0275\u0275text(1069, "I really appreciated my mentor\u2019s insight, but sometimes I felt overwhelmed by the amount of information they provided. It would have been helpful to focus on one or two areas at a time rather than trying to cover everything.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1070, "div", 188)(1071, "div", 189)(1072, "a", 59);
      \u0275\u0275element(1073, "img", 76);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1074, "h6")(1075, "a", 59);
      \u0275\u0275text(1076, "Daziy Millar");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1077, "span");
      \u0275\u0275text(1078, "Founder of Awesomeux Technology");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1079, "div", 180)(1080, "div", 181)(1081, "div", 182);
      \u0275\u0275element(1082, "img", 183);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1083, "div", 184)(1084, "div", 185)(1085, "div", 186);
      \u0275\u0275element(1086, "img", 187);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1087, "p");
      \u0275\u0275text(1088, "I really appreciated my mentor\u2019s insight, but sometimes I felt overwhelmed by the amount of information they provided. It would have been helpful to focus on one or two areas at a time rather than trying to cover everything.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1089, "div", 188)(1090, "div", 189)(1091, "a", 59);
      \u0275\u0275element(1092, "img", 100);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1093, "h6")(1094, "a", 59);
      \u0275\u0275text(1095, "john smith");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1096, "span");
      \u0275\u0275text(1097, "Founder of Awesomeux Technology");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1098, "div", 180)(1099, "div", 181)(1100, "div", 182);
      \u0275\u0275element(1101, "img", 183);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1102, "div", 184)(1103, "div", 185)(1104, "div", 186);
      \u0275\u0275element(1105, "img", 187);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1106, "p");
      \u0275\u0275text(1107, "I really appreciated my mentor\u2019s insight, but sometimes I felt overwhelmed by the amount of information they provided. It would have been helpful to focus on one or two areas at a time rather than trying to cover everything.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1108, "div", 188)(1109, "div", 189)(1110, "a", 59);
      \u0275\u0275element(1111, "img", 92);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1112, "h6")(1113, "a", 59);
      \u0275\u0275text(1114, "David Lee");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1115, "span");
      \u0275\u0275text(1116, "Founder of Awesomeux Technology");
      \u0275\u0275elementEnd()()()()()()()()()()();
      \u0275\u0275elementStart(1117, "div", 190);
      \u0275\u0275element(1118, "img", 191)(1119, "img", 192);
      \u0275\u0275elementStart(1120, "div", 4)(1121, "div", 193)(1122, "div", 194)(1123, "div", 195)(1124, "div", 5)(1125, "div", 196)(1126, "div", 197)(1127, "h4");
      \u0275\u0275text(1128, "Become An Instructor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1129, "p");
      \u0275\u0275text(1130, "Top instructors from around the world teach millions of students on Mentoring.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1131, "a", 53);
      \u0275\u0275text(1132, "Register as Instructor");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1133, "div", 198)(1134, "div", 199);
      \u0275\u0275element(1135, "img", 200);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(1136, "div", 194)(1137, "div", 201)(1138, "div", 5)(1139, "div", 196)(1140, "div", 197)(1141, "h4");
      \u0275\u0275text(1142, "Transform Access To Education");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1143, "p");
      \u0275\u0275text(1144, "Create an account to receive our newsletter course promotions.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1145, "a", 53);
      \u0275\u0275text(1146, "Register as Instructor");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1147, "div", 198)(1148, "div", 202);
      \u0275\u0275element(1149, "img", 203);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(1150, "div", 204)(1151, "div", 65);
      \u0275\u0275element(1152, "img", 66)(1153, "img", 67);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1154, "div", 4)(1155, "div", 135)(1156, "h2");
      \u0275\u0275text(1157, "Latest Blogs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1158, "p", 52);
      \u0275\u0275text(1159, "Dont Miss Stay Updated with the Latest Articles and Insights");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1160, "div", 205)(1161, "div", 206)(1162, "div", 207)(1163, "div", 208)(1164, "a", 59);
      \u0275\u0275element(1165, "img", 209);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1166, "div", 210)(1167, "div", 211)(1168, "a", 212);
      \u0275\u0275text(1169, "Marketing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1170, "p", 213);
      \u0275\u0275element(1171, "i", 214);
      \u0275\u0275text(1172, "May 15, 2020");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1173, "h5")(1174, "a", 59);
      \u0275\u0275text(1175, "How to Find the Perfect Mentor for Your Academic Journey");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(1176, "div", 206)(1177, "div", 207)(1178, "div", 208)(1179, "a", 59);
      \u0275\u0275element(1180, "img", 215);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1181, "div", 210)(1182, "div", 211)(1183, "a", 212);
      \u0275\u0275text(1184, "Statistics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1185, "p", 213);
      \u0275\u0275element(1186, "i", 214);
      \u0275\u0275text(1187, "May 15, 2020");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1188, "h5")(1189, "a", 59);
      \u0275\u0275text(1190, "Unlocking Your Potential in School and Beyond");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(1191, "div", 206)(1192, "div", 207)(1193, "div", 208)(1194, "a", 59);
      \u0275\u0275element(1195, "img", 216);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1196, "div", 210)(1197, "div", 211)(1198, "a", 212);
      \u0275\u0275text(1199, "Learning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1200, "p", 213);
      \u0275\u0275element(1201, "i", 214);
      \u0275\u0275text(1202, "May 15, 2020");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1203, "h5")(1204, "a", 59);
      \u0275\u0275text(1205, "11 Tips to Help You Get New Clients with the design knowledge");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1206, "div", 217)(1207, "div", 218)(1208, "div", 219)(1209, "div", 220)(1210, "div", 221);
      \u0275\u0275element(1211, "img", 222);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1212, "div", 223)(1213, "h3")(1214, "span", 224);
      \u0275\u0275text(1215, "3,490");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1216, "p");
      \u0275\u0275text(1217, "Students Enrolled");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1218, "div", 219)(1219, "div", 220)(1220, "div", 221);
      \u0275\u0275element(1221, "img", 225);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1222, "div", 223)(1223, "h3")(1224, "span", 224);
      \u0275\u0275text(1225, "255");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1226, "p");
      \u0275\u0275text(1227, "Total Courses");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1228, "div", 219)(1229, "div", 220)(1230, "div", 221);
      \u0275\u0275element(1231, "img", 226);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1232, "div", 223)(1233, "h3")(1234, "span", 224);
      \u0275\u0275text(1235, "15");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1236, "p");
      \u0275\u0275text(1237, "Countries");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1238, "div", 227)(1239, "div")(1240, "ngx-slick-carousel", 228)(1241, "div", 125)(1242, "div");
      \u0275\u0275element(1243, "img", 229);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1244, "div", 125)(1245, "div");
      \u0275\u0275element(1246, "img", 230);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1247, "div", 125)(1248, "div");
      \u0275\u0275element(1249, "img", 231);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1250, "div", 125)(1251, "div");
      \u0275\u0275element(1252, "img", 232);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1253, "div", 125)(1254, "div");
      \u0275\u0275element(1255, "img", 233);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1256, "div", 125)(1257, "div");
      \u0275\u0275element(1258, "img", 234);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1259, "div", 125)(1260, "div");
      \u0275\u0275element(1261, "img", 235);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1262, "div", 125)(1263, "div");
      \u0275\u0275element(1264, "img", 236);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275element(1265, "app-footer");
    }
    if (rf & 2) {
      \u0275\u0275advance(69);
      \u0275\u0275property("countUp", 10)("options", \u0275\u0275pureFunction0(129, _c0));
      \u0275\u0275advance(13);
      \u0275\u0275property("countUp", 200)("options", \u0275\u0275pureFunction0(130, _c0));
      \u0275\u0275advance(13);
      \u0275\u0275property("countUp", 6)("options", \u0275\u0275pureFunction0(131, _c0));
      \u0275\u0275advance(13);
      \u0275\u0275property("countUp", 60)("options", \u0275\u0275pureFunction0(132, _c0));
      \u0275\u0275advance(14);
      \u0275\u0275property("routerLink", ctx.routes.courseCategory2);
      \u0275\u0275advance(3);
      \u0275\u0275property("config", ctx.topCategoriesOwlOptions);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseCategory);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseCategory);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseCategory);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseCategory);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseCategory);
      \u0275\u0275advance(16);
      \u0275\u0275property("routerLink", ctx.routes.courseList);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(133, _c1, ctx.isSelected[1]));
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
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(135, _c1, ctx.isSelected[2]));
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
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(137, _c1, ctx.isSelected[3]));
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
      \u0275\u0275advance(5);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(139, _c1, ctx.isSelected[6]));
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
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(141, _c1, ctx.isSelected[4]));
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
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(143, _c1, ctx.isSelected[5]));
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.checkout);
      \u0275\u0275advance(60);
      \u0275\u0275property("routerLink", ctx.routes.courseList);
      \u0275\u0275advance(3);
      \u0275\u0275property("config", ctx.trendingcrouse);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.checkout);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.checkout);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.checkout);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.checkout);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.checkout);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.checkout);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.checkout);
      \u0275\u0275advance(10);
      \u0275\u0275property("config", ctx.instructorCrouse);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorList);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseList);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.instructorList);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.courseList);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.instructorList);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseList);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.instructorList);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseList);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.courseList);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(17);
      \u0275\u0275property("options", ctx.brandCarousel);
      \u0275\u0275advance(39);
      \u0275\u0275property("routerLink", ctx.routes.instructorList);
      \u0275\u0275advance(11);
      \u0275\u0275property("config", ctx.testimonials);
      \u0275\u0275advance(13);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(16);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(16);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(18);
      \u0275\u0275property("routerLink", ctx.routes.becomeAnExpert);
      \u0275\u0275advance(14);
      \u0275\u0275property("routerLink", ctx.routes.becomeAnExpert);
      \u0275\u0275advance(19);
      \u0275\u0275property("routerLink", ctx.routes.blog_grid);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.blog_grid);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.blog_grid);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.blog_grid);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.blog_grid);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.blog_grid);
      \u0275\u0275advance(10);
      \u0275\u0275property("countUp", 3490)("options", \u0275\u0275pureFunction0(145, _c0));
      \u0275\u0275advance(10);
      \u0275\u0275property("countUp", 255)("options", \u0275\u0275pureFunction0(146, _c0));
      \u0275\u0275advance(10);
      \u0275\u0275property("countUp", 15)("options", \u0275\u0275pureFunction0(147, _c0));
      \u0275\u0275advance(6);
      \u0275\u0275property("config", ctx.brandSlide2);
    }
  }, dependencies: [CommonModule, NgClass, FooterComponent, RouterLink, CarouselModule, CarouselComponent, CarouselSlideDirective, SlickCarouselModule, SlickCarouselComponent, SlickItemDirective, CountUpModule, CountUpDirective, MatSelectModule, MatSelect, MatOption], styles: ["\n\n/*# sourceMappingURL=home3.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Home3Component, [{
    type: Component,
    args: [{ selector: "app-home3", imports: [CommonModule, FooterComponent, RouterLink, CarouselModule, SlickCarouselModule, CountUpModule, MatSelectModule], template: `<!-- Home Banner -->
<section class="banner-section-three d-flex align-items-center">
  <img src="assets/img/bg/bg-3.png" alt="img" class="img-fluid banner-bg-01">
  <img src="assets/img/bg/bg-4.png" alt="img" class="img-fluid banner-bg-02">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-6">
        <div class="home-slide-face aos" data-aos="fade-up">
          <div class="home-slide-text ">
            <span class="fw-bold text-uppercase">The Leader in Online Learning</span>
            <h1 class="mt-4">Engaging &  Accessible <span class="text-secondary">Online Courses</span> For All</h1>
            <p class="mt-4">Our specialized online courses are designed to bring the classroom experience to you, no matter where you are.</p>
          </div>
          <div class="banner-content">
            <form class="form"  (ngSubmit)="onSubmit()">
              <div class="form-inner">
                <div class="input-group">
                  <i class="fa-solid fa-magnifying-glass search-icon"></i>
                  <input type="email" class="form-control" placeholder="Search School, Online eductional centers, etc">
                  <span class="drop-detail">
                    <mat-select class="custom-mat-select select" placeholder="Category">
                      <mat-option value="1">Category</mat-option>
                      <mat-option value="1">Angular</mat-option>
                      <mat-option value="1">Node Js</mat-option>
                      <mat-option value="1">React</mat-option>
                      <mat-option value="1">Python</mat-option>
                    </mat-select>
                  </span>
                  <button class="btn sub-btn" type="submit"><i class="fas fa-arrow-right"></i></button>
                </div>
              </div>
            </form>
          </div>
          <div class="trust-user">
            <h5>Trusted by over 15K Users worldwide since 2022</h5>
            <div class="trust-rating d-flex align-items-center">
              <div class="rate-head">
                <h2><span>1000</span>+</h2>
              </div>
              <div class="rating d-flex align-items-center">	
                <h2 class="d-inline-block average-rating">4.4</h2>	
                <i class="fas fa-star filled"></i>
                <i class="fas fa-star filled"></i>
                <i class="fas fa-star filled"></i>
                <i class="fas fa-star filled"></i>
                <i class="fas fa-star filled"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 d-flex align-items-center">
        <div class="banner-image aos" data-aos="fade-up">
          <img src="assets/img/hero/hero-2.png" alt="Img">
        </div>
      </div>
    </div>
  </div>
</section>
    <!-- /Home Banner -->
    <section class="section student-course">
      <div class="container">
        <div class="course-widget">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="course-full-width">
                <div
                  class="blur-border course-radius align-items-center aos"
                  data-aos="fade-up"
                  >
                  <div class="online-course d-flex align-items-center">
                    <div class="course-img">
                      <img src="assets/img/pencil-icon.svg" alt="" />
                    </div>
                    <div class="course-inner-content">
                      <h4>
                        <span [countUp]="10" [options]="{ enableScrollSpy: true }"
                          >0</span
                          >K
                        </h4>
                        <p>Online Courses</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 d-flex">
                <div class="course-full-width">
                  <div class="blur-border course-radius aos" data-aos="fade-up">
                    <div class="online-course d-flex align-items-center">
                      <div class="course-img">
                        <img src="assets/img/cources-icon.svg" alt="" />
                      </div>
                      <div class="course-inner-content">
                        <h4>
                          <span [countUp]="200" [options]="{ enableScrollSpy: true }"
                            >0</span
                            >+
                          </h4>
                          <p>Expert Tutors</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 d-flex">
                  <div class="course-full-width">
                    <div class="blur-border course-radius aos" data-aos="fade-up">
                      <div class="online-course d-flex align-items-center">
                        <div class="course-img">
                          <img src="assets/img/certificate-icon.svg" alt="" />
                        </div>
                        <div class="course-inner-content">
                          <h4>
                            <span [countUp]="6" [options]="{ enableScrollSpy: true }"
                              >0</span
                              >K+
                            </h4>
                            <p>Ceritified Courses</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 d-flex">
                    <div class="course-full-width">
                      <div class="blur-border course-radius aos" data-aos="fade-up">
                        <div class="online-course d-flex align-items-center">
                          <div class="course-img">
                            <img src="assets/img/gratuate-icon.svg" alt="" />
                          </div>
                          <div class="course-inner-content">
                            <h4>
                              <span [countUp]="60" [options]="{ enableScrollSpy: true }"
                                >0</span
                                >K +
                              </h4>
                              <p>Online Students</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <!-- Home Banner -->

            <!-- Top Categories -->
            <section class="section how-it-works">
              <div class="container">
                <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 aos" data-aos="fade-up">
                  <div class="section-header">
                    <span class="fw-medium text-secondary fs-18 fw-bold mb-2 d-inline-block">Favourite Course</span>
                    <h2 class="mb-0">Top Category</h2>
                  </div>
                  <div>
                    <a [routerLink]="routes.courseCategory2" class="btn btn-secondary btn-xl">View all Categories</a>
                  </div>
                </div>
                  <div data-aos="fade-up"  class="mentoring-course" >
                   <ngx-slick-carousel [config]="topCategoriesOwlOptions">
                    <div class="categories-item categories-item-two" ngxSlickItem>			
                      <span class="categories-icon">
                        <img src="assets/img/category/icons/icon-1.svg" alt="Img">
                      </span>		
                      <h5><a [routerLink]="routes.courseCategory">Angular Development</a></h5>
                      <p>40 Instructors</p>
                    </div>
                    <div class="categories-item categories-item-two" ngxSlickItem>			
                      <span class="categories-icon">
                        <img src="assets/img/category/icons/icon-2.svg" alt="Img">
                      </span>		
                      <h5><a [routerLink]="routes.courseCategory">Docker Development</a></h5>
                      <p>45 Instructors</p>
                    </div>
                    <div class="categories-item categories-item-two" ngxSlickItem>			
                      <span class="categories-icon">
                        <img src="assets/img/category/icons/icon-3.svg" alt="Img">
                      </span>		
                      <h5><a [routerLink]="routes.courseCategory">Node JS Frontend</a></h5>
                      <p>40 Instructors</p>
                    </div>
                    <div class="categories-item categories-item-two" ngxSlickItem>			
                      <span class="categories-icon">
                        <img src="assets/img/category/icons/icon-4.svg" alt="Img">
                      </span>		
                      <h5><a [routerLink]="routes.courseCategory">Swift Development</a></h5>
                      <p>23 Instructors</p>
                    </div>
                    <div class="categories-item categories-item-two" ngxSlickItem>			
                      <span class="categories-icon">
                        <img src="assets/img/category/icons/icon-5.png" alt="Img">
                      </span>		
                      <h5><a [routerLink]="routes.courseCategory">React Native</a></h5>
                      <p>80 Instructors</p>
                    </div>
                   </ngx-slick-carousel>
                  </div>
                </div>
              </section>
              <!-- /Top Categories -->

              <!-- Feature Course -->
              <div class="section new-course">
                <div class="home-three-sec-bg">
                  <img src="assets/img/bg/bg-3.png" alt="img" class="img-fluid sec-bg-01">
                  <img src="assets/img/bg/bg-4.png" alt="img" class="img-fluid sec-bg-02">
                </div>
                <div class="container">
                  <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 aos" data-aos="fade-up">
                    <div class="section-header">
                      <span class="fw-medium text-secondary fs-18 fw-bold mb-2 d-inline-block">What\u2019s New</span>
                      <h2 class="mb-0">Featured Courses</h2>
                    </div>
                    <div>
                      <a [routerLink]="routes.courseList" class="btn btn-secondary btn-xl">View all Categories</a>
                    </div>
                  </div>
                  <div class="course-feature">
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
                              <a href="javascript:void(0);" class="fav-icon" [ngClass]="{'selected':isSelected[1]}" (click)="iconSelect(1)"><i class="fa-regular fa-heart"></i></a>
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
                              <a [routerLink]="routes.checkout" class="btn btn-primary btn-xl d-inline-flex align-items-center"><i class="isax isax-shopping-cart5 me-2"></i>Buy Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6 d-flex">
                        <div class="course-item course-item-three mx-0 flex-fill aos" data-aos="fade-up">
                          <div class="course-img">
                            <a [routerLink]="routes.courseDetails">
                              <img class="img-fluid" alt="Img" src="assets/img/course/course-41.jpg">
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
                              <a href="javascript:void(0);" class="fav-icon" [ngClass]="{'selected':isSelected[2]}" (click)="iconSelect(2)"><i class="fa-regular fa-heart"></i></a>
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
                              <a [routerLink]="routes.checkout" class="btn btn-primary btn-xl d-inline-flex align-items-center"><i class="isax isax-shopping-cart5 me-2"></i>Buy Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6 d-flex">
                        <div class="course-item course-item-three mx-0 flex-fill aos" data-aos="fade-up">
                          <div class="course-img">
                            <a [routerLink]="routes.courseDetails">
                              <img class="img-fluid" alt="Img" src="assets/img/course/course-42.jpg">
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
                              <a href="javascript:void(0);" class="fav-icon" [ngClass]="{'selected':isSelected[3]}" (click)="iconSelect(3)"><i class="fa-regular fa-heart"></i></a>
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
                              <a [routerLink]="routes.checkout" class="btn btn-primary btn-xl d-inline-flex align-items-center"><i class="isax isax-shopping-cart5 me-2"></i>Buy Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6 d-flex">
                        <div class="course-item course-item-three mx-0 flex-fill aos" data-aos="fade-up">
                          <div class="course-img">
                            <a [routerLink]="routes.courseDetails">
                              <img class="img-fluid" alt="Img" src="assets/img/course/course-43.jpg">
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
                                <a href="javascript:void(0);" class="fav-icon" [ngClass]="{'selected':isSelected[6]}" (click)="iconSelect(6)"><i class="fa-regular fa-heart"></i></a>
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
                              <a [routerLink]="routes.checkout" class="btn btn-primary btn-xl d-inline-flex align-items-center"><i class="isax isax-shopping-cart5 me-2"></i>Buy Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6 d-flex">
                        <div class="course-item course-item-three mx-0 flex-fill aos" data-aos="fade-up">
                          <div class="course-img">
                            <a [routerLink]="routes.courseDetails">
                              <img class="img-fluid" alt="Img" src="assets/img/course/course-45.jpg">
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
                              <a href="javascript:void(0);" class="fav-icon" [ngClass]="{'selected':isSelected[4]}" (click)="iconSelect(4)"><i class="fa-regular fa-heart"></i></a>
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
                              <a [routerLink]="routes.checkout" class="btn btn-primary btn-xl d-inline-flex align-items-center"><i class="isax isax-shopping-cart5 me-2"></i>Buy Now</a>
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
                              <a href="javascript:void(0);" class="fav-icon" [ngClass]="{'selected':isSelected[5]}" (click)="iconSelect(5)"><i class="fa-regular fa-heart"></i></a>
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
                              <a [routerLink]="routes.checkout" class="btn btn-primary btn-xl d-inline-flex align-items-center"><i class="isax isax-shopping-cart5 me-2"></i>Buy Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                      <!-- /Feature Course -->

                      <!-- Master Skill -->
                      <div class="section master-skill">
                        <div class="container">
                          <div class="row align-items-end">
                            <div class="col-lg-6 col-md-12">
                              <div class="section-header aos" data-aos="fade-up">
                                <span class="fw-medium text-secondary fs-18 fw-bold mb-2 d-inline-block">What\u2019s New</span>
                                <h2>Master the skills to drive your career</h2>
                                <p>Get certified, master modern tech skills, and level up your career \u2014 whether you\u2019re starting out or a seasoned pro. 95% of eLearning learners report our hands-on content directly helped their careers.</p>
                              </div>
                              <div class="career-group aos" data-aos="fade-up">
                                <div class="row row-gap-4">
                                  <div class="col-lg-6 col-md-6 d-flex">
                                    <div class="certified-item d-flex align-items-center flex-fill">
                                      <div class="certified-img ">
                                        <img src="assets/img/icons/icon-22.svg" alt="Img" class="img-fluid">
                                      </div>
                                      <p>Stay motivated with engaging instructors</p>
                                    </div>
                                  </div>
                                  <div class="col-lg-6 col-md-6 d-flex">
                                    <div class="certified-item d-flex align-items-center flex-fill">
                                      <div class="certified-img ">
                                        <img src="assets/img/icons/icon-17.svg" alt="Img" class="img-fluid">
                                      </div>
                                      <p>Keep up with in the latest in cloud</p>
                                    </div>
                                  </div>
                                  <div class="col-lg-6 col-md-6 d-flex">
                                    <div class="certified-item d-flex align-items-center flex-fill">
                                      <div class="certified-img "><img src="assets/img/icons/icon-23.svg" alt="Img" class="img-fluid">
                                      </div>
                                      <p>Get certified with 100+ certification courses</p>
                                    </div>
                                  </div>
                                  <div class="col-lg-6 col-md-6 d-flex">
                                    <div class="certified-item d-flex align-items-center flex-fill">
                                      <div class="certified-img ">
                                        <img src="assets/img/icons/icon-16.svg" alt="Img" class="img-fluid">
                                      </div>
                                      <p>Build skills your way, from labs to courses</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-6 col-md-12">
                              <div class="career-img aos" data-aos="fade-up">
                                <img src="assets/img/bg/bg-2.png" alt="Img" class="img-fluid master-bg">
                                <img src="assets/img/feature/feature-16.png" alt="Img" class="img-fluid girl-img">
                                <img src="assets/img/icons/icon-18.svg" alt="Img" class="img-fluid float-img-01">
                                <img src="assets/img/icons/icon-19.svg" alt="Img" class="img-fluid float-img-02">
                                <img src="assets/img/icons/icon-20.svg" alt="Img" class="img-fluid float-img-03">
                                <img src="assets/img/icons/icon-21.svg" alt="Img" class="img-fluid float-img-04">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Master Skill -->

                      <!-- Trending Course -->
                      <div class="section trend-course">
                        <div class="home-three-sec-bg">
                          <img src="assets/img/bg/bg-3.png" alt="img" class="img-fluid sec-bg-01">
                          <img src="assets/img/bg/bg-4.png" alt="img" class="img-fluid sec-bg-02">
                        </div>
                        <div class="container">
                          <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 aos" data-aos="fade-up">
                            <div class="section-header">
                              <span class="fw-medium text-secondary fs-18 fw-bold mb-2 d-inline-block">What\u2019s New</span>
                              <h2 class="mb-0">Trending Courses</h2>
                            </div>
                            <div>
                              <a [routerLink]="routes.courseList" class="btn btn-secondary btn-xl">View all Courses</a>
                            </div>
                          </div>
                          <div class="trending-course owl-theme aos" data-aos="fade-up">
                            <ngx-slick-carousel #slickModal="slick-carousel" [config]="trendingcrouse">

                              <div ngxSlickItem>
                                <div class="course-box trend-box">
                                  <div class="course-item course-item-three mx-0 flex-fill aos" data-aos="fade-up">
                                    <div class="course-img">
                                      <a [routerLink]="routes.courseDetails">
                                        <img class="img-fluid" alt="Img" src="assets/img/course/course-40.jpg">
                                      </a>
                                      <div class="price">
                                        <h3>$200 <span>$99.00</span></h3>
                                      </div>
                                    </div>
                                    <div class="course-content">
                                      <div class="course-user">
                                        <div class="course-user-img">
                                          <a [routerLink]="routes.instructorProfile"><img src="assets/img/avatar/avatar-27.jpg" alt="Img" class="img-fluid"></a>
                                          <div class="course-name">
                                            <h4><a [routerLink]="routes.instructorProfile">John Michael</a></h4>
                                            <p>Instructor</p>
                                          </div>
                                        </div>
                                        <div class="course-share d-flex align-items-center justify-content-center">
                                          <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>
                                        </div>
                                      </div>
                                      <h3 class="title"><a [routerLink]="routes.courseDetails">Learn JavaScript and Express to become a professional JavaScript</a></h3>
                                      <div class="course-info d-flex align-items-center">
                                        <div class="course-lesson d-flex align-items-center">
                                          <img src="assets/img/icons/icon-3.svg" alt="Img" class="img-fluid">
                                          <p>13+ Lesson</p>
                                        </div>
                                        <div class="course-time d-flex align-items-center">
                                          <img src="assets/img/icons/icon-4.svg" alt="Img" class="img-fluid">
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
                                        <a [routerLink]="routes.checkout" class="btn btn-primary btn-xl d-inline-flex align-items-center"><i class="isax isax-shopping-cart5 me-2"></i>Buy Now</a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div ngxSlickItem>
                                <div class="course-box trend-box">
                                  <div class="course-item course-item-three mx-0 flex-fill aos" data-aos="fade-up">
                                    <div class="course-img">
                                      <a [routerLink]="routes.courseDetails">
                                        <img class="img-fluid" alt="Img" src="assets/img/course/course-41.jpg">
                                      </a>
                                      <div class="price">
                                        <h3>$300 <span>$99.00</span></h3>
                                      </div>
                                    </div>
                                    <div class="course-content">
                                      <div class="course-user">
                                        <div class="course-user-img">
                                          <a [routerLink]="routes.instructorProfile"><img src="assets/img/avatar/avatar-22.jpg" alt="Img" class="img-fluid"></a>
                                          <div class="course-name">
                                            <h4><a [routerLink]="routes.instructorProfile">John Smith</a></h4>
                                            <p>Instructor</p>
                                          </div>
                                        </div>
                                        <div class="course-share d-flex align-items-center justify-content-center">
                                          <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>
                                        </div>
                                      </div>
                                      <h3 class="title"><a [routerLink]="routes.courseDetails">Responsive Web Design Essentials HTML5 CSS3 and Bootstrap</a></h3>
                                      <div class="course-info d-flex align-items-center">
                                        <div class="course-lesson d-flex align-items-center">
                                          <img src="assets/img/icons/icon-3.svg" alt="Img" class="img-fluid">
                                          <p>10+ Lesson</p>
                                        </div>
                                        <div class="course-time d-flex align-items-center">
                                          <img src="assets/img/icons/icon-4.svg" alt="Img" class="img-fluid">
                                          <p>11hr 30min</p>
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
                                        <a [routerLink]="routes.checkout" class="btn btn-primary btn-xl d-inline-flex align-items-center"><i class="isax isax-shopping-cart5 me-2"></i>Buy Now</a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div ngxSlickItem>
                                <div class="course-box trend-box">
                                  <div class="course-item course-item-three mx-0 flex-fill aos" data-aos="fade-up">
                                    <div class="course-img">
                                      <a [routerLink]="routes.courseDetails">
                                        <img class="img-fluid" alt="Img" src="assets/img/course/course-44.jpg">
                                      </a>
                                      <div class="price">
                                        <h3>$100 <span>$99.00</span></h3>
                                      </div>
                                    </div>
                                    <div class="course-content">
                                      <div class="course-user">
                                        <div class="course-user-img">
                                          <a [routerLink]="routes.instructorProfile"><img src="assets/img/avatar/avatar-23.jpg" alt="Img" class="img-fluid"></a>
                                          <div class="course-name">
                                            <h4><a [routerLink]="routes.instructorProfile">Lavern M.</a></h4>
                                            <p>Instructor</p>
                                          </div>
                                        </div>
                                        <div class="course-share d-flex align-items-center justify-content-center">
                                          <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>
                                        </div>
                                      </div>
                                      <h3 class="title"><a [routerLink]="routes.courseDetails">The Complete App Design Course - UX, UI and Design Thinking</a></h3>
                                      <div class="course-info d-flex align-items-center">
                                        <div class="course-lesson d-flex align-items-center">
                                          <img src="assets/img/icons/icon-3.svg" alt="Img" class="img-fluid">
                                          <p>8+ Lesson</p>
                                        </div>
                                        <div class="course-time d-flex align-items-center">
                                          <img src="assets/img/icons/icon-4.svg" alt="Img" class="img-fluid">
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
                                          <span class="d-inline-block average-rating"><span>4.3</span> (15)</span>
                                        </div>
                                        <a [routerLink]="routes.checkout" class="btn btn-primary btn-xl d-inline-flex align-items-center"><i class="isax isax-shopping-cart5 me-2"></i>Buy Now</a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div ngxSlickItem>
                                <div class="course-box d-flex aos">
                                  <div class="course-item course-item-three mx-0 flex-fill aos" data-aos="fade-up">
                                    <div class="course-img">
                                      <a [routerLink]="routes.courseDetails">
                                        <img class="img-fluid" alt="Img" src="assets/img/course/course-42.jpg">
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
                                        <div class="course-share d-flex align-items-center justify-content-center">
                                          <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>
                                        </div>
                                      </div>
                                      <h3 class="title"><a [routerLink]="routes.courseDetails">Build Responsive Real World Websites with HTML5 and CSS3</a></h3>
                                      <div class="course-info d-flex align-items-center">
                                        <div class="rating-img d-flex align-items-center">
                                          <img src="assets/img/icons/icon-3.svg" alt="Img">
                                          <p>13+ Lesson</p>
                                        </div>
                                        <div class="course-view d-flex align-items-center">
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
                                        <a [routerLink]="routes.checkout" class="btn btn-primary btn-xl d-inline-flex align-items-center"><i class="isax isax-shopping-cart5 me-2"></i>Buy Now</a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div ngxSlickItem>
                                <div class="course-box trend-box">
                                  <div class="course-item course-item-three mx-0 flex-fill aos" data-aos="fade-up">
                                    <div class="course-img">
                                      <a [routerLink]="routes.courseDetails">
                                        <img class="img-fluid" alt="Img" src="assets/img/course/course-44.jpg">
                                      </a>
                                      <div class="price">
                                        <h3>$300 <span>$99.00</span></h3>
                                      </div>
                                    </div>
                                    <div class="course-content">
                                      <div class="course-user">
                                        <div class="course-user-img">
                                          <a [routerLink]="routes.instructorProfile"><img src="assets/img/avatar/avatar-22.jpg" alt="Img" class="img-fluid"></a>
                                          <div class="course-name">
                                            <h4><a [routerLink]="routes.instructorProfile">John Smith</a></h4>
                                            <p>Instructor</p>
                                          </div>
                                        </div>
                                        <div class="course-share d-flex align-items-center justify-content-center">
                                          <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>
                                        </div>
                                      </div>
                                      <h3 class="title"><a [routerLink]="routes.courseDetails">Responsive Web Design Essentials HTML5 CSS3 and Bootstrap</a></h3>
                                      <div class="course-info d-flex align-items-center">
                                        <div class="course-lesson d-flex align-items-center">
                                          <img src="assets/img/icons/icon-3.svg" alt="Img" class="img-fluid">
                                          <p>10+ Lesson</p>
                                        </div>
                                        <div class="course-time d-flex align-items-center">
                                          <img src="assets/img/icons/icon-4.svg" alt="Img" class="img-fluid">
                                          <p>11hr 30min</p>
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
                                        <a [routerLink]="routes.checkout" class="btn btn-primary btn-xl d-inline-flex align-items-center"><i class="isax isax-shopping-cart5 me-2"></i>Buy Now</a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div ngxSlickItem>
                                <div class="course-box trend-box">
                                  <div class="course-item course-item-three mx-0 flex-fill aos" data-aos="fade-up">
                                    <div class="course-img">
                                      <a [routerLink]="routes.courseDetails">
                                        <img class="img-fluid" alt="Img" src="assets/img/course/course-45.jpg">
                                      </a>
                                      <div class="price">
                                        <h3>$100 <span>$99.00</span></h3>
                                      </div>
                                    </div>
                                    <div class="course-content">
                                      <div class="course-user">
                                        <div class="course-user-img">
                                          <a [routerLink]="routes.instructorProfile"><img src="assets/img/avatar/avatar-24.jpg" alt="Img" class="img-fluid"></a>
                                          <div class="course-name">
                                            <h4><a [routerLink]="routes.instructorProfile">Lavern M.</a></h4>
                                            <p>Instructor</p>
                                          </div>
                                        </div>
                                        <div class="course-share d-flex align-items-center justify-content-center">
                                          <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>
                                        </div>
                                      </div>
                                      <h3 class="title"><a [routerLink]="routes.courseDetails">The Complete App Design Course - UX, UI and Design Thinking</a></h3>
                                      <div class="course-info d-flex align-items-center">
                                        <div class="course-lesson d-flex align-items-center">
                                          <img src="assets/img/icons/icon-3.svg" alt="Img" class="img-fluid">
                                          <p>8+ Lesson</p>
                                        </div>
                                        <div class="course-time d-flex align-items-center">
                                          <img src="assets/img/icons/icon-4.svg" alt="Img" class="img-fluid">
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
                                          <span class="d-inline-block average-rating"><span>4.0</span> (15)</span>
                                        </div>
                                        <a [routerLink]="routes.checkout" class="btn btn-primary btn-xl d-inline-flex align-items-center"><i class="isax isax-shopping-cart5 me-2"></i>Buy Now</a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div ngxSlickItem>
                                <div class="course-box trend-box">
                                  <div class="course-item course-item-three mx-0 flex-fill aos" data-aos="fade-up">
                                    <div class="course-img">
                                      <a [routerLink]="routes.courseDetails">
                                        <img class="img-fluid" alt="Img" src="assets/img/course/course-44.jpg">
                                      </a>
                                      <div class="price">
                                        <h3>$200 <span>$99.00</span></h3>
                                      </div>
                                    </div>
                                    <div class="course-content">
                                      <div class="course-user">
                                        <div class="course-user-img">
                                          <a [routerLink]="routes.instructorProfile"><img src="assets/img/avatar/avatar-21.jpg" alt="Img" class="img-fluid"></a>
                                          <div class="course-name">
                                            <h4><a [routerLink]="routes.instructorProfile">John Michael</a></h4>
                                            <p>Instructor</p>
                                          </div>
                                        </div>
                                        <div class="course-share d-flex align-items-center justify-content-center">
                                          <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>
                                        </div>
                                      </div>
                                      <h3 class="title"><a [routerLink]="routes.courseDetails">Learn JavaScript and Express to become a professional JavaScript</a></h3>
                                      <div class="course-info d-flex align-items-center">
                                        <div class="course-lesson d-flex align-items-center">
                                          <img src="assets/img/icons/icon-3.svg" alt="Img" class="img-fluid">
                                          <p>13+ Lesson</p>
                                        </div>
                                        <div class="course-time d-flex align-items-center">
                                          <img src="assets/img/icons/icon-4.svg" alt="Img" class="img-fluid">
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
                                        <a [routerLink]="routes.checkout" class="btn btn-primary btn-xl d-inline-flex align-items-center"><i class="isax isax-shopping-cart5 me-2"></i>Buy Now</a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </ngx-slick-carousel>
                          </div>
                          
                          <!-- Feature Instructors -->
                          <div class="feature-instructors">
                            <div class="section-header text-center aos" data-aos="fade-up">
                              <h2>Featured Instructor</h2>
                              <p class="mb-0"> Our team combines cutting-edge design with robust development</p>
                            </div>
                            <div class="instructors-course aos" data-aos="fade-up">
                              <ngx-slick-carousel [config]="instructorCrouse">
                              <div class="instructor-item instructor-item-two" ngxSlickItem>
                                <div class="instructors-img">
                                  <a [routerLink]="routes.instructorList" tabindex="0">
                                    <img class="img-fluid" alt="Img" src="assets/img/instructor/instructor-09.jpg">
                                  </a>
                                  <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                                    <span class="verify">
                                      <i class="isax isax-verify5"></i>
                                    </span>
                                    <a [routerLink]="routes.courseList" class="course-count ms-auto">20 Courses</a>
                                  </div>
                                  <div class="position-absolute end-0 bottom-0 d-flex align-items-start w-100 z-index-2 p-3">
                                    <a href="javascript:void(0);" class="favourite selected ms-auto">
                                      <i class="isax isax-heart"></i>
                                    </a>
                                  </div>
                                </div>
                                <div class="instructor-content">
                                  <h3 class="title">
                                    <a [routerLink]="routes.instructorDetails">David Lee</a>
                                  </h3>
                                  <span class="designation">Web Developer</span>
                                  <div class="student-count">
                                    <i class="isax isax-profile-2user5 text-secondary me-2"></i><span>50 Students</span>
                                  </div>
                                </div>
                              </div>
                              <div class="instructor-item instructor-item-two" ngxSlickItem>
                                <div class="instructors-img">
                                  <a [routerLink]="routes.instructorList" tabindex="0">
                                    <img class="img-fluid" alt="Img" src="assets/img/instructor/instructor-10.jpg">
                                  </a>
                                  <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                                    <a [routerLink]="routes.courseList" class="course-count ms-auto">15 Courses</a>
                                  </div>
                                  <div class="position-absolute end-0 bottom-0 d-flex align-items-start w-100 z-index-2 p-3">
                                    <a href="javascript:void(0);" class="favourite ms-auto">
                                      <i class="isax isax-heart"></i>
                                    </a>
                                  </div>
                                </div>
                                <div class="instructor-content">
                                  <h3 class="title">
                                    <a [routerLink]="routes.instructorDetails">Daziy Millar</a>
                                  </h3>
                                  <span class="designation">PHP Expert</span>
                                  <div class="student-count">
                                    <i class="isax isax-profile-2user5 text-warning me-2"></i><span>60 Students</span>
                                  </div>
                                </div>
                              </div>
                              <div class="instructor-item instructor-item-two" ngxSlickItem>
                                <div class="instructors-img">
                                  <a [routerLink]="routes.instructorList" tabindex="0">
                                    <img class="img-fluid" alt="Img" src="assets/img/instructor/instructor-11.jpg">
                                  </a>
                                  <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                                    <span class="verify">
                                      <i class="isax isax-verify5"></i>
                                    </span>
                                    <a [routerLink]="routes.courseList" class="course-count ms-auto">22 Courses</a>
                                  </div>
                                  <div class="position-absolute end-0 bottom-0 d-flex align-items-start w-100 z-index-2 p-3">
                                    <a href="javascript:void(0);" class="favourite ms-auto">
                                      <i class="isax isax-heart"></i>
                                    </a>
                                  </div>
                                </div>
                                <div class="instructor-content">
                                  <h3 class="title">
                                    <a [routerLink]="routes.instructorDetails">Patricia Mendoza</a>
                                  </h3>
                                  <span class="designation">Web Developer</span>
                                  <div class="student-count">
                                    <i class="isax isax-profile-2user5 text-primary me-2"></i><span>40 Students</span>
                                  </div>
                                </div>
                              </div>
                              <div class="instructor-item instructor-item-two" ngxSlickItem>
                                <div class="instructors-img">
                                  <a [routerLink]="routes.instructorList" tabindex="0">
                                    <img class="img-fluid" alt="Img" src="assets/img/instructor/instructor-12.jpg">
                                  </a>
                                  <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                                    <span class="verify">
                                      <i class="isax isax-verify5"></i>
                                    </span>
                                    <a [routerLink]="routes.courseList" class="course-count ms-auto">20 Courses</a>
                                  </div>
                                  <div class="position-absolute end-0 bottom-0 d-flex align-items-start w-100 z-index-2 p-3">
                                    <a href="javascript:void(0);" class="favourite ms-auto">
                                      <i class="isax isax-heart"></i>
                                    </a>
                                  </div>
                                </div>
                                <div class="instructor-content">
                                  <h3 class="title">
                                    <a [routerLink]="routes.instructorDetails">Skyler Whites</a>
                                  </h3>
                                  <span class="designation">UI Designer</span>
                                  <div class="student-count">
                                    <i class="isax isax-profile-2user5 text-danger me-2"></i><span>50 Students</span>
                                  </div>
                                </div>
                              </div>
                              <div class="instructor-item instructor-item-two" ngxSlickItem>
                                <div class="instructors-img">
                                  <a [routerLink]="routes.instructorDetails" tabindex="0">
                                    <img class="img-fluid" alt="Img" src="assets/img/instructor/instructor-10.jpg">
                                  </a>
                                  <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                                    <a [routerLink]="routes.courseList" class="course-count ms-auto">15 Courses</a>
                                  </div>
                                  <div class="position-absolute end-0 bottom-0 d-flex align-items-start w-100 z-index-2 p-3">
                                    <a href="javascript:void(0);" class="favourite ms-auto">
                                      <i class="isax isax-heart"></i>
                                    </a>
                                  </div>
                                </div>
                                <div class="instructor-content">
                                  <h3 class="title">
                                    <a [routerLink]="routes.instructorDetails">Patricia Mendoza</a>
                                  </h3>
                                  <span class="designation">Web Developer</span>
                                  <div class="student-count">
                                    <i class="isax isax-profile-2user5 text-pink me-2"></i><span>50 Students</span>
                                  </div>
                                </div>
                              </div>
                            </ngx-slick-carousel>
                            </div>
                          </div>
                          <!-- /Feature Instructors -->
                          
                        </div>
                      </div>
                              <!-- /Trending Course -->

                              <!-- Leading Companies -->
                              <div class="section lead-companies">
                                <div class="container">
                                  <div class="section-header text-center aos" data-aos="fade-up">
                                    <span class="fw-medium text-secondary fs-18 fw-bold mb-2 d-inline-block">Trusted By</span>
                                    <h2 class="mb-0">500+ Leading Universities And Companies</h2>
                                  </div>
                                  <div class="lead-group aos" data-aos="fade-up">
                                    <div class="lead-group-slider owl-theme">
                                      <owl-carousel-o [options]="brandCarousel">
                                        <ng-template carouselSlide>
                                          <div class="item">
                                            <div class="lead-img">
                                              <img class="img-fluid" alt="Img" src="assets/img/client/22.svg">
                                            </div>
                                          </div>
                                        </ng-template>
                                        <ng-template carouselSlide>
                                          <div class="item">
                                            <div class="lead-img">
                                              <img class="img-fluid" alt="Img" src="assets/img/client/23.svg">
                                            </div>
                                          </div>
                                        </ng-template>
                                        <ng-template carouselSlide>
                                          <div class="item">
                                            <div class="lead-img">
                                              <img class="img-fluid" alt="Img" src="assets/img/client/24.svg">
                                            </div>
                                          </div>
                                        </ng-template>
                                        <ng-template carouselSlide>
                                          <div class="item">
                                            <div class="lead-img">
                                              <img class="img-fluid" alt="Img" src="assets/img/client/25.svg">
                                            </div>
                                          </div>
                                        </ng-template>
                                        <ng-template carouselSlide>
                                          <div class="item">
                                            <div class="lead-img">
                                              <img class="img-fluid" alt="Img" src="assets/img/client/26.svg">
                                            </div>
                                          </div>
                                        </ng-template>
                                        <ng-template carouselSlide>
                                          <div class="item">
                                            <div class="lead-img">
                                              <img class="img-fluid" alt="Img" src="assets/img/client/27.svg">
                                            </div>
                                          </div>							
                                        </ng-template>
                                      </owl-carousel-o>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <!-- /Leading Companies -->

                              <!-- Share Knowledge -->
                              <div class="section share-knowledge">
                                <div class="home-three-sec-bg">
                                  <img src="assets/img/bg/bg-3.png" alt="img" class="img-fluid sec-bg-01">
                                  <img src="assets/img/bg/bg-4.png" alt="img" class="img-fluid sec-bg-02">
                                </div>
                                <div class="container">
                                  <div class="row align-items-center row-gap-4">
                                    <div class="col-md-6">
                                      <div class="knowledge-img aos" data-aos="fade-up">
                                        <img src="assets/img/feature/feature-17.svg" alt="Img" class="img-fluid">
                                      </div>
                                    </div>
                                    <div class="col-md-6 d-flex align-items-center"> 
                                      <div class="join-mentor aos" data-aos="fade-up">
                                        <h2>Want to share your knowledge? Join us a Mentor</h2>
                                        <p>High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.</p>
                                        <ul class="list-unstyled mb-4">
                                          <li class="d-flex mb-3">
                                            <i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>Access Your Class anywhere
                                          </li>
                                          <li class="d-flex mb-3">
                                            <i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>Flexible Course Plan
                                          </li>
                                          <li class="d-flex mb-3">
                                            <i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>Quality Assurance
                                          </li>
                                          <li class="d-flex mb-3">
                                            <i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>Cost Effectiveness
                                          </li>
                                          <li class="d-flex mb-3">
                                            <i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>The Most World Class Instructors
                                          </li>
                                        </ul>
                                        <div>
                                          <a [routerLink]="routes.instructorList" class="btn btn-secondary btn-xl">Read More</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                                <!-- /Share Knowledge -->

			<!-- Say testimonial Four -->
			<div class="testimonial-four">
				<div class="review">
					<div class="container">
						<div class="section-header text-center aos" data-aos="fade-up">
							<span class="fw-medium text-white fs-18 fw-bold mb-2 d-inline-block">Check out these real reviews</span>
							<h2 class="text-white mb-0">Users-love-us Don't take it from us.</h2>
						</div>
						<div class="mentor-testimonial lazy slider aos" data-aos="fade-up" data-sizes="50vw ">
              <ngx-slick-carousel [config]="testimonials">

                <div class="d-flex justify-content-center" ngxSlickItem>
                  <div class="testimonial-all">
                    <div class="testimonial-quotes">
                      <img src="assets/img/icons/icon-28.png" alt="Img" >
                    </div>
                    <div class="testimonial-content text-center align-items-center d-flex">
                      <div class="testimonial-info ">
                        <div class="testimonial-icon">
                          <img src="assets/img/icons/icon-29.png" alt="Img">
                        </div>
                        <p>I really appreciated my mentor\u2019s insight, but sometimes I felt overwhelmed by the amount of information they provided. It would have been helpful to focus on one or two areas at a time rather than trying to cover everything.</p>
                        <div class="testimonial-user">
                          <div class="user-img">
                            <a [routerLink]="routes.instructorProfile"><img src="assets/img/avatar/avatar-21.jpg" alt="Img" class="img-fluid"></a>
                          </div>
                          <h6><a [routerLink]="routes.instructorProfile">Daziy Millar</a></h6>
                          <span>Founder of Awesomeux Technology</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-center" ngxSlickItem>
                  <div class="testimonial-all">
                    <div class="testimonial-quotes">
                      <img src="assets/img/icons/icon-28.png" alt="Img" >
                    </div>
                    <div class="testimonial-content text-center align-items-center d-flex">
                      <div class="testimonial-info ">
                        <div class="testimonial-icon">
                          <img src="assets/img/icons/icon-29.png" alt="Img">
                        </div>
                        <p>I really appreciated my mentor\u2019s insight, but sometimes I felt overwhelmed by the amount of information they provided. It would have been helpful to focus on one or two areas at a time rather than trying to cover everything.</p>
                        <div class="testimonial-user">
                          <div class="user-img">
                            <a [routerLink]="routes.instructorProfile"><img src="assets/img/avatar/avatar-23.jpg" alt="Img" class="img-fluid"></a>
                          </div>
                          <h6><a [routerLink]="routes.instructorProfile">john smith</a></h6>
                          <span>Founder of Awesomeux Technology</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-center" ngxSlickItem>
                  <div class="testimonial-all">
                    <div class="testimonial-quotes">
                      <img src="assets/img/icons/icon-28.png" alt="Img" >
                    </div>
                    <div class="testimonial-content text-center align-items-center d-flex">
                      <div class="testimonial-info ">
                        <div class="testimonial-icon">
                          <img src="assets/img/icons/icon-29.png" alt="Img">
                        </div>
                        <p>I really appreciated my mentor\u2019s insight, but sometimes I felt overwhelmed by the amount of information they provided. It would have been helpful to focus on one or two areas at a time rather than trying to cover everything.</p>
                        <div class="testimonial-user">
                          <div class="user-img">
                            <a [routerLink]="routes.instructorProfile"><img src="assets/img/avatar/avatar-22.jpg" alt="Img" class="img-fluid"></a>
                          </div>
                          <h6><a [routerLink]="routes.instructorProfile">David Lee</a></h6>
                          <span>Founder of Awesomeux Technology</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ngx-slick-carousel>
						</div>
					</div>
				</div>
			</div>
			<!-- /Say testimonial Four -->
			
			<!-- Become An Instructor -->
			<div class="section become-instructors aos" data-aos="fade-up">
				<img src="assets/img/bg/bg-5.png" alt="" class="img-fluid become-instructors-bg1">
				<img src="assets/img/bg/bg-6.png" alt="" class="img-fluid become-instructors-bg2">
				<div class="container">
					<div class="row row-gap-3">
						<div class="col-md-6 d-flex">
							<div class="student-mentor d-flex flex-fill">
								<div class="row align-items-center">
									<div class="col-lg-7 col-md-12">
										<div class="top-instructors">
											<h4>Become An Instructor</h4>
											<p>Top instructors from around the world teach millions of students on Mentoring.</p>
											<a [routerLink]="routes.becomeAnExpert" class="btn btn-secondary btn-xl">Register as Instructor</a>
										</div>
									</div>
									<div class="col-lg-5 col-md-12">
										<div class="mentor-img">
											<img class="img-fluid d-none d-lg-flex" alt="Img" src="assets/img/feature/feature-15.svg">
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6 d-flex">
							<div class="student-mentor bg-dark d-flex flex-fill">
								<div class="row align-items-center">
									<div class="col-lg-7 col-md-12">
										<div class="top-instructors">
											<h4>Transform Access To Education</h4>
											<p>Create an account to receive our newsletter course promotions.</p>
											<a [routerLink]="routes.becomeAnExpert" class="btn btn-secondary btn-xl">Register as Instructor</a>
										</div>
									</div>
									<div class="col-lg-5 col-md-12">
										<div class="mentor-img d-none d-lg-flex">
											<img class="img-fluid" alt="Img" src="assets/img/feature/feature-14.svg">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /Become An Instructor -->
			
			<!-- Latest Blog -->
			<div class="section latest-blog">
				<div class="home-three-sec-bg">
					<img src="assets/img/bg/bg-3.png" alt="img" class="img-fluid sec-bg-01">
					<img src="assets/img/bg/bg-4.png" alt="img" class="img-fluid sec-bg-02">
				</div>
				<div class="container">
					<div class="section-header text-center aos" data-aos="fade-up">
						<h2>Latest Blogs</h2>
						<p class="mb-0">Dont Miss Stay Updated with the Latest Articles and Insights</p>
					</div>
					<div class="row row-gap-4 justify-content-center">
						<div class="col-md-6 col-lg-4">
							<div class="blog-wrap shadow-sm mb-0">
								<div class="blog-img">
									<a [routerLink]="routes.blog_grid">
										<img class="img-fluid" alt="Img" src="assets/img/blog/blog-40.jpg">
									</a>
								</div>
								<div class="blog-content"> 
									<div class="blog-info mb-3">
										<a href="javascript:void(0);" class="blog-category">Marketing</a>
										<p class="blog-date"><i class="isax isax-calendar-1"></i>May 15, 2020</p>
									</div>
									<h5><a [routerLink]="routes.blog_grid">How to Find the Perfect Mentor for Your Academic Journey</a></h5>
								</div>	
							</div>
						</div>
						<div class="col-md-6 col-lg-4">
							<div class="blog-wrap shadow-sm mb-0">
								<div class="blog-img">
									<a [routerLink]="routes.blog_grid">
										<img class="img-fluid" alt="Img" src="assets/img/blog/blog-41.jpg">
									</a>
								</div>
								<div class="blog-content"> 
									<div class="blog-info mb-3">
										<a href="javascript:void(0);" class="blog-category">Statistics</a>
										<p class="blog-date"><i class="isax isax-calendar-1"></i>May 15, 2020</p>
									</div>
									<h5><a [routerLink]="routes.blog_grid">Unlocking Your Potential in School and Beyond</a></h5>
								</div>	
							</div>
						</div>
						<div class="col-md-6 col-lg-4">
							<div class="blog-wrap shadow-sm mb-0">
								<div class="blog-img">
									<a [routerLink]="routes.blog_grid">
										<img class="img-fluid" alt="Img" src="assets/img/blog/blog-42.jpg">
									</a>
								</div>
								<div class="blog-content"> 
									<div class="blog-info mb-3">
										<a href="javascript:void(0);" class="blog-category">Learning</a>
										<p class="blog-date"><i class="isax isax-calendar-1"></i>May 15, 2020</p>
									</div>
									<h5><a [routerLink]="routes.blog_grid">11 Tips to Help You Get New Clients with the design knowledge</a></h5>
								</div>	
							</div>
						</div>
					</div>
					<div class="enroll-group aos" data-aos="fade-up">
						<div class="row row-gap-3 justify-content-center">
							<div class="col-lg-4 col-md-6">
								<div class="enroll-course d-flex align-items-center">
									<div class="enroll-img">
										<img src="assets/img/icons/icon-5.svg" alt="Img" class="img-fluid">
									</div>
									<div class="course-count">
										<h3><span class="counterUp" [countUp]="3490" [options]="{ enableScrollSpy: true }">3,490</span></h3>
										<p>Students Enrolled</p>
									</div>
								</div>
							</div>
							<div class="col-lg-4 col-md-6">
								<div class="enroll-course d-flex align-items-center">
									<div class="enroll-img ">
										<img src="assets/img/icons/icon-6.svg" alt="Img" class="img-fluid">
									</div>
									<div class="course-count">
										<h3><span class="counterUp" [countUp]="255" [options]="{ enableScrollSpy: true }">255</span></h3>
										<p>Total Courses</p>
									</div>
								</div>
							</div>
							<div class="col-lg-4 col-md-6">
								<div class="enroll-course d-flex align-items-center">
									<div class="enroll-img ">
										<img src="assets/img/icons/icon-7.svg" alt="Img" class="img-fluid">
									</div>
									<div class="course-count">
										<h3><span class="counterUp" [countUp]="15" [options]="{ enableScrollSpy: true }">15</span></h3>
										<p>Countries</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="lab-course">
						<div >
              <ngx-slick-carousel [config]="brandSlide2" class="client-slider aos" data-aos="fade-up">
                  <div ngxSlickItem>
                    <div >
                      <img src="assets/img/icons/icon-8.svg" alt="Img" class="img-fluid">
                    </div>
                  </div>
                  <div ngxSlickItem>
                    <div >
                      <img src="assets/img/icons/icon-9.svg" alt="Img" class="img-fluid">
                    </div>
                  </div>
                <div ngxSlickItem>
                  <div >
                    <img src="assets/img/icons/icon-10.svg" alt="Img" class="img-fluid">
                  </div>
                  </div>
                <div ngxSlickItem>
                  <div >
                    <img src="assets/img/icons/icon-11.svg" alt="Img" class="img-fluid coda">
                  </div>
                </div>
                <div ngxSlickItem>
                  <div >
                    <img src="assets/img/icons/icon-12.svg" alt="Img" class="img-fluid coda">
                  </div>
                  </div>
                <div ngxSlickItem>
                  <div >
                    <img src="assets/img/icons/icon-13.svg" alt="Img" class="img-fluid">
                  </div>
                  </div>
                <div ngxSlickItem>
                  <div >
                    <img src="assets/img/icons/icon-14.svg" alt="Img" class="img-fluid">
                  </div>
                  </div>
                <div ngxSlickItem>
                  <div >
                    <img src="assets/img/icons/icon-15.svg" alt="Img" class="img-fluid">
                  </div>
                </div>
              </ngx-slick-carousel>
						</div>
					</div>
				</div>
			</div>	
			<!-- /Latest Blog -->

      <app-footer/>`, styles: ["/* src/app/features/home-list/home3/home3.component.scss */\n/*# sourceMappingURL=home3.component.css.map */\n"] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Home3Component, { className: "Home3Component", filePath: "src/app/features/home-list/home3/home3.component.ts", lineNumber: 30 });
})();
export {
  Home3Component
};
//# sourceMappingURL=chunk-VURAJZ5A.js.map
