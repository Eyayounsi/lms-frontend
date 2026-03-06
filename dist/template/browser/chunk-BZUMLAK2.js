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
  RouterLink
} from "./chunk-TPKO67I6.js";
import "./chunk-QFZWCWB7.js";
import "./chunk-PXFMCAI3.js";
import {
  CommonModule
} from "./chunk-YBJXKBE2.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/blog/blog-carousal/blog-carousal.component.ts
var BlogCarousalComponent = class _BlogCarousalComponent {
  routes = routes;
  topCategoriesOwlOptions = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
  static \u0275fac = function BlogCarousalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BlogCarousalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogCarousalComponent, selectors: [["app-blog-carousal"]], decls: 129, vars: 21, consts: [[1, "content"], [1, "container"], [1, "blog-slider", "lazy"], [3, "config"], ["ngxSlickItem", ""], [1, "blog"], [1, "blog-image"], [3, "routerLink"], ["src", "./assets/img/blog/blog-7.jpg", "alt", "img", 1, "img-fluid"], [1, "blog-item"], [1, "badge", "bg-success", "mb-2"], [1, "mb-2"], [1, "text-truncate", "line-clamb-2"], [1, "blog-info"], [1, "d-flex", "align-items-center", "flex-wrap", "justify-content-between"], [1, "d-flex", "align-items-center", "user-profile"], [1, "user-img", 3, "routerLink"], ["src", "./assets/img/user/user-52.jpg", "alt", "img", 1, "rounded-pill", "w-auto"], [1, "user-name", 3, "routerLink"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], ["src", "./assets/img/icons/calendar.svg", "alt", "img", 1, "me-1"], ["src", "./assets/img/blog/blog-8.jpg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/user/user-01.jpg", "alt", "img", 1, "rounded-pill", "w-auto"], ["src", "./assets/img/blog/blog-9.jpg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/user/user-02.jpg", "alt", "img", 1, "rounded-pill", "w-auto"], ["src", "./assets/img/blog/blog-10.jpg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/user/user-03.jpg", "alt", "img", 1, "rounded-pill", "w-auto"], ["src", "./assets/img/blog/blog-11.jpg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/user/user-05.jpg", "alt", "img", 1, "rounded-pill", "w-auto"]], template: function BlogCarousalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "ngx-slick-carousel", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "a", 7);
      \u0275\u0275element(8, "img", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 9)(10, "span", 10);
      \u0275\u0275text(11, "Education");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "h5", 11)(13, "a", 7);
      \u0275\u0275text(14, "Learn Web App Development from Experts in 2024");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "p", 12);
      \u0275\u0275text(16, "Master the art of web application development with expert-led courses that cover the latest tools, fram...");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 13)(18, "div", 14)(19, "div", 15)(20, "a", 16);
      \u0275\u0275element(21, "img", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "a", 18);
      \u0275\u0275text(23, "John Miller");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "ul", 19)(25, "li");
      \u0275\u0275element(26, "img", 20);
      \u0275\u0275elementStart(27, "p");
      \u0275\u0275text(28, "23 Apr 2024");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(29, "div", 4)(30, "div", 5)(31, "div", 6)(32, "a", 7);
      \u0275\u0275element(33, "img", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 9)(35, "span", 10);
      \u0275\u0275text(36, "Guides");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "h5", 11)(38, "a", 7);
      \u0275\u0275text(39, "Expand Your Career Opportunities With Python");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "p", 12);
      \u0275\u0275text(41, "Unlock limitless career opportunities by mastering Python, one of the most versatile and in-demand ...");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 13)(43, "div", 14)(44, "div", 15)(45, "a", 16);
      \u0275\u0275element(46, "img", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "a", 18);
      \u0275\u0275text(48, "Cedric Glenn");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "ul", 19)(50, "li");
      \u0275\u0275element(51, "img", 20);
      \u0275\u0275elementStart(52, "p");
      \u0275\u0275text(53, "20 Apr 2024");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(54, "div", 4)(55, "div", 5)(56, "div", 6)(57, "a", 7);
      \u0275\u0275element(58, "img", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 9)(60, "span", 10);
      \u0275\u0275text(61, "Technical");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "h5", 11)(63, "a", 7);
      \u0275\u0275text(64, "Learn Mobile Applications Development from Experts");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "p", 12);
      \u0275\u0275text(66, "Elevate your skills with expert-led training in mobile application development! Learn to design, develop ...");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "div", 13)(68, "div", 14)(69, "div", 15)(70, "a", 16);
      \u0275\u0275element(71, "img", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "a", 18);
      \u0275\u0275text(73, "John Reyes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "ul", 19)(75, "li");
      \u0275\u0275element(76, "img", 20);
      \u0275\u0275elementStart(77, "p");
      \u0275\u0275text(78, "04 Apr 2024");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(79, "div", 4)(80, "div", 5)(81, "div", 6)(82, "a", 7);
      \u0275\u0275element(83, "img", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "div", 9)(85, "span", 10);
      \u0275\u0275text(86, "Guides");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "h5", 11)(88, "a", 7);
      \u0275\u0275text(89, "Complete PHP Programming Career Guideline");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "p", 12);
      \u0275\u0275text(91, "Master PHP programming with our comprehensive career guideline! Learn the fundamentals, explore ...");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "div", 13)(93, "div", 14)(94, "div", 15)(95, "a", 16);
      \u0275\u0275element(96, "img", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "a", 18);
      \u0275\u0275text(98, "Donald Vesely");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "ul", 19)(100, "li");
      \u0275\u0275element(101, "img", 20);
      \u0275\u0275elementStart(102, "p");
      \u0275\u0275text(103, "24 Mar 2024");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(104, "div", 4)(105, "div", 5)(106, "div", 6)(107, "a", 7);
      \u0275\u0275element(108, "img", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(109, "div", 9)(110, "span", 10);
      \u0275\u0275text(111, "Education");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "h5", 11)(113, "a", 7);
      \u0275\u0275text(114, "The Complete JavaScript Course for Beginners");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(115, "p", 12);
      \u0275\u0275text(116, "Dive into the world of JavaScript with our complete beginner-friendly course! Learn essential concepts...");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "div", 13)(118, "div", 14)(119, "div", 15)(120, "a", 16);
      \u0275\u0275element(121, "img", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "a", 18);
      \u0275\u0275text(123, "Richard Garza");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(124, "ul", 19)(125, "li");
      \u0275\u0275element(126, "img", 20);
      \u0275\u0275elementStart(127, "p");
      \u0275\u0275text(128, "16 Mar 2024");
      \u0275\u0275elementEnd()()()()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("config", ctx.topCategoriesOwlOptions);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.blog_details);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.blog_details);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.blog_details);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.blog_details);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.blog_details);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.blog_details);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.blog_details);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.blog_details);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.blog_details);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.blog_details);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
    }
  }, dependencies: [CommonModule, RouterLink, SlickCarouselModule, SlickCarouselComponent, SlickItemDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlogCarousalComponent, [{
    type: Component,
    args: [{ selector: "app-blog-carousal", imports: [CommonModule, RouterLink, SlickCarouselModule], template: '<div class="content">\n    <div class="container">\n    <div class="blog-slider lazy">\n        <ngx-slick-carousel [config]="topCategoriesOwlOptions">\n            <div ngxSlickItem>\n                <div class="blog" >\n                    <div class="blog-image">\n                        <a [routerLink]="routes.blog_details">\n                            <img class="img-fluid" src="./assets/img/blog/blog-7.jpg" alt="img">\n                        </a>\n                    </div>\n                    <div class="blog-item">\n                        <span class="badge bg-success mb-2">Education</span>\n                        <h5 class="mb-2"><a [routerLink]="routes.blog_details">Learn Web App Development from Experts in 2024</a></h5>\n                        <p class="text-truncate line-clamb-2">Master the art of web application development with expert-led courses that cover the latest tools, fram...</p>\n                        <div class="blog-info">\n                            <div class="d-flex align-items-center flex-wrap justify-content-between">\n                                <div class="d-flex align-items-center user-profile">\n                                    <a [routerLink]="routes.instructorDetails" class="user-img"><img class="rounded-pill w-auto" src="./assets/img/user/user-52.jpg" alt="img"></a>\n                                    <a [routerLink]="routes.instructorDetails" class="user-name">John Miller</a>\n                                </div>\n                                <ul class="d-flex align-items-center flex-wrap gap-2">\n                                    <li>\n                                        <img class="me-1" src="./assets/img/icons/calendar.svg" alt="img">\n                                        <p>23 Apr 2024</p>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div ngxSlickItem>\n                <div class="blog" >\n                    <div class="blog-image">\n                        <a [routerLink]="routes.blog_details">\n                            <img class="img-fluid" src="./assets/img/blog/blog-8.jpg" alt="img">\n                        </a>\n                    </div>\n                    <div class="blog-item">\n                        <span class="badge bg-success mb-2">Guides</span>\n                        <h5 class="mb-2"><a [routerLink]="routes.blog_details">Expand Your Career Opportunities With Python</a></h5>\n                        <p class="text-truncate line-clamb-2">Unlock limitless career opportunities by mastering Python, one of the most versatile and in-demand ...</p>\n                        <div class="blog-info">\n                            <div class="d-flex align-items-center flex-wrap justify-content-between">\n                                <div class="d-flex align-items-center user-profile">\n                                    <a [routerLink]="routes.instructorDetails" class="user-img"><img class="rounded-pill w-auto" src="./assets/img/user/user-01.jpg" alt="img"></a>\n                                    <a [routerLink]="routes.instructorDetails" class="user-name">Cedric Glenn</a>\n                                </div>\n                                <ul class="d-flex align-items-center flex-wrap gap-2">\n                                    <li>\n                                        <img class="me-1" src="./assets/img/icons/calendar.svg" alt="img">\n                                        <p>20 Apr 2024</p>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div ngxSlickItem>\n                <div class="blog" >\n                    <div class="blog-image">\n                        <a [routerLink]="routes.blog_details">\n                            <img class="img-fluid" src="./assets/img/blog/blog-9.jpg" alt="img">\n                        </a>\n                    </div>\n                    <div class="blog-item">\n                        <span class="badge bg-success mb-2">Technical</span>\n                        <h5 class="mb-2"><a [routerLink]="routes.blog_details">Learn Mobile Applications Development from Experts</a></h5>\n                        <p class="text-truncate line-clamb-2">Elevate your skills with expert-led training in mobile application development! Learn to design, develop ...</p>\n                        <div class="blog-info">\n                            <div class="d-flex align-items-center flex-wrap justify-content-between">\n                                <div class="d-flex align-items-center user-profile">\n                                    <a [routerLink]="routes.instructorDetails" class="user-img"><img class="rounded-pill w-auto" src="./assets/img/user/user-02.jpg" alt="img"></a>\n                                    <a [routerLink]="routes.instructorDetails" class="user-name">John Reyes</a>\n                                </div>\n                                <ul class="d-flex align-items-center flex-wrap gap-2">\n                                    <li>\n                                        <img class="me-1" src="./assets/img/icons/calendar.svg" alt="img">\n                                        <p>04 Apr 2024</p>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div ngxSlickItem>\n                <div class="blog" >\n                    <div class="blog-image">\n                        <a [routerLink]="routes.blog_details">\n                            <img class="img-fluid" src="./assets/img/blog/blog-10.jpg" alt="img">\n                        </a>\n                    </div>\n                    <div class="blog-item">\n                        <span class="badge bg-success mb-2">Guides</span>\n                        <h5 class="mb-2"><a [routerLink]="routes.blog_details">Complete PHP Programming Career Guideline</a></h5>\n                        <p class="text-truncate line-clamb-2">Master PHP programming with our comprehensive career guideline! Learn the fundamentals, explore ...</p>\n                        <div class="blog-info">\n                            <div class="d-flex align-items-center flex-wrap justify-content-between">\n                                <div class="d-flex align-items-center user-profile">\n                                    <a [routerLink]="routes.instructorDetails" class="user-img"><img class="rounded-pill w-auto" src="./assets/img/user/user-03.jpg" alt="img"></a>\n                                    <a [routerLink]="routes.instructorDetails" class="user-name">Donald Vesely</a>\n                                </div>\n                                <ul class="d-flex align-items-center flex-wrap gap-2">\n                                    <li>\n                                        <img class="me-1" src="./assets/img/icons/calendar.svg" alt="img">\n                                        <p>24 Mar 2024</p>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div ngxSlickItem>\n                <div class="blog" >\n                    <div class="blog-image">\n                        <a [routerLink]="routes.blog_details">\n                            <img class="img-fluid" src="./assets/img/blog/blog-11.jpg" alt="img">\n                        </a>\n                    </div>\n                    <div class="blog-item">\n                        <span class="badge bg-success mb-2">Education</span>\n                        <h5 class="mb-2"><a [routerLink]="routes.blog_details">The Complete JavaScript Course for Beginners</a></h5>\n                        <p class="text-truncate line-clamb-2">Dive into the world of JavaScript with our complete beginner-friendly course! Learn essential concepts...</p>\n                        <div class="blog-info">\n                            <div class="d-flex align-items-center flex-wrap justify-content-between">\n                                <div class="d-flex align-items-center user-profile">\n                                    <a [routerLink]="routes.instructorDetails" class="user-img"><img class="rounded-pill w-auto" src="./assets/img/user/user-05.jpg" alt="img"></a>\n                                    <a [routerLink]="routes.instructorDetails" class="user-name">Richard Garza</a>\n                                </div>\n                                <ul class="d-flex align-items-center flex-wrap gap-2">\n                                    <li>\n                                        <img class="me-1" src="./assets/img/icons/calendar.svg" alt="img">\n                                        <p>16 Mar 2024</p>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n           \n            \n           \n            \n            \n            \n        </ngx-slick-carousel>\n    </div>\n    \n    </div>\n    </div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogCarousalComponent, { className: "BlogCarousalComponent", filePath: "src/app/features/blog/blog-carousal/blog-carousal.component.ts", lineNumber: 13 });
})();
export {
  BlogCarousalComponent
};
//# sourceMappingURL=chunk-BZUMLAK2.js.map
