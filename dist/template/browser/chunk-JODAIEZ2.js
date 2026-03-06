import {
  routes
} from "./chunk-E6TQA5KL.js";
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

// src/app/features/blog/blog-grid/blog-grid.component.ts
var BlogGridComponent = class _BlogGridComponent {
  blogGrid = [];
  routes = routes;
  blogGridRecentPosts = [];
  static \u0275fac = function BlogGridComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BlogGridComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogGridComponent, selectors: [["app-blog-grid"]], decls: 102, vars: 12, consts: [[1, "content"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-9"], [1, "blog"], [1, "blog-image"], [3, "routerLink"], ["src", "./assets/img/blog/blog-16.jpg", "alt", "img", 1, "img-fluid"], [1, "blog-item"], [1, "mb-2"], [1, "text-truncate", "line-clamb-2"], [1, "blog-info"], [1, "d-flex", "align-items-center", "flex-wrap", "justify-content-between", "gap-2"], [1, "d-flex", "align-items-center", "user-profile"], [1, "user-img", 3, "routerLink"], ["src", "./assets/img/user/user-52.jpg", "alt", "img", 1, "rounded-pill", "w-auto"], [1, "user-name", 3, "routerLink"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], ["src", "./assets/img/icons/calendar.svg", "alt", "img", 1, "me-1"], ["src", "./assets/img/icons/tag.svg", "alt", "img", 1, "me-1"], ["src", "./assets/img/blog/blog-17.jpg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/user/user-15.jpg", "alt", "img", 1, "rounded-pill", "w-auto"], ["src", "./assets/img/blog/blog-18.jpg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/user/user-05.jpg", "alt", "img", 1, "rounded-pill", "w-auto"], [1, "row", "align-items-center"], [1, "col-md-12"], [1, "pagination", "justify-content-center"], [1, "page-item", "prev"], ["href", "javascript:void(0);", "tabindex", "-1", 1, "page-link"], [1, "fas", "fa-angle-left"], [1, "page-item", "first-page", "active"], ["href", "javascript:void(0);", 1, "page-link"], [1, "page-item"], [1, "page-item", "next"], [1, "fas", "fa-angle-right"]], template: function BlogGridComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "a", 6);
      \u0275\u0275element(7, "img", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 8)(9, "h5", 9)(10, "a", 6);
      \u0275\u0275text(11, "Learn Web App Development from Experts in 2024");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "p", 10);
      \u0275\u0275text(13, "Master the art of web application development with expert-led courses that cover the latest tools, fram...");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "a", 14);
      \u0275\u0275element(18, "img", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "a", 16);
      \u0275\u0275text(20, "John Miller");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "ul", 17)(22, "li");
      \u0275\u0275element(23, "img", 18);
      \u0275\u0275elementStart(24, "p");
      \u0275\u0275text(25, "20 Apr 2024");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "li");
      \u0275\u0275element(27, "img", 19);
      \u0275\u0275elementStart(28, "p");
      \u0275\u0275text(29, "Programming, Web Design");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(30, "div", 3)(31, "div", 4)(32, "div", 5)(33, "a", 6);
      \u0275\u0275element(34, "img", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 8)(36, "h5", 9)(37, "a", 6);
      \u0275\u0275text(38, "The Complete JavaScript Course for Beginners");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "p", 10);
      \u0275\u0275text(40, "Dive into the world of JavaScript with our complete beginner-friendly course! Learn essential concepts...");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 11)(42, "div", 12)(43, "div", 13)(44, "a", 14);
      \u0275\u0275element(45, "img", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "a", 16);
      \u0275\u0275text(47, "Donald Vesely");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "ul", 17)(49, "li");
      \u0275\u0275element(50, "img", 18);
      \u0275\u0275elementStart(51, "p");
      \u0275\u0275text(52, "08 Apr 2024");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "li");
      \u0275\u0275element(54, "img", 19);
      \u0275\u0275elementStart(55, "p");
      \u0275\u0275text(56, "Programming, Web Design");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(57, "div", 3)(58, "div", 4)(59, "div", 5)(60, "a", 6);
      \u0275\u0275element(61, "img", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 8)(63, "h5", 9)(64, "a", 6);
      \u0275\u0275text(65, "Revolutionize Learning with a Modern LMS");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "p", 10);
      \u0275\u0275text(67, "Discover how a Learning Management System (LMS) can transform education and corporate training by ...");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 11)(69, "div", 12)(70, "div", 13)(71, "a", 14);
      \u0275\u0275element(72, "img", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "a", 16);
      \u0275\u0275text(74, "James Barnes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "ul", 17)(76, "li");
      \u0275\u0275element(77, "img", 18);
      \u0275\u0275elementStart(78, "p");
      \u0275\u0275text(79, "23 Feb 2024");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "li");
      \u0275\u0275element(81, "img", 19);
      \u0275\u0275elementStart(82, "p");
      \u0275\u0275text(83, "Modern Learning, Innovative");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(84, "div", 24)(85, "div", 25)(86, "ul", 26)(87, "li", 27)(88, "a", 28);
      \u0275\u0275element(89, "i", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "li", 30)(91, "a", 31);
      \u0275\u0275text(92, "1");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "li", 32)(94, "a", 31);
      \u0275\u0275text(95, "2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "li", 32)(97, "a", 31);
      \u0275\u0275text(98, "3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "li", 33)(100, "a", 31);
      \u0275\u0275element(101, "i", 34);
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.blog_details);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.blog_details);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(14);
      \u0275\u0275property("routerLink", ctx.routes.blog_details);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.blog_details);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(14);
      \u0275\u0275property("routerLink", ctx.routes.blog_details);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.blog_details);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
    }
  }, dependencies: [CommonModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlogGridComponent, [{
    type: Component,
    args: [{ selector: "app-blog-grid", imports: [CommonModule, RouterLink], template: '<div class="content">\n  <div class="container">\n    <div class="row justify-content-center">\n      <div class="col-lg-9">\n        <div class="blog">\n          <div class="blog-image">\n            <a [routerLink]="routes.blog_details">\n              <img class="img-fluid" src="./assets/img/blog/blog-16.jpg" alt="img">\n            </a>\n          </div>\n          <div class="blog-item">\n            <h5 class="mb-2"><a [routerLink]="routes.blog_details">Learn Web App Development from Experts in 2024</a></h5>\n            <p class="text-truncate line-clamb-2">Master the art of web application development with expert-led courses that cover the latest tools, fram...</p>\n            <div class="blog-info">\n              <div class="d-flex align-items-center flex-wrap justify-content-between gap-2">\n                <div class="d-flex align-items-center user-profile">\n                  <a [routerLink]="routes.instructorDetails" class="user-img"><img class="rounded-pill w-auto" src="./assets/img/user/user-52.jpg" alt="img"></a>\n                  <a [routerLink]="routes.instructorDetails" class="user-name">John Miller</a>\n                </div>\n                <ul class="d-flex align-items-center flex-wrap gap-2">\n                  <li>\n                    <img class="me-1" src="./assets/img/icons/calendar.svg" alt="img">\n                    <p>20 Apr 2024</p>\n                  </li>\n                  <li>\n                    <img class="me-1" src="./assets/img/icons/tag.svg" alt="img">\n                    <p>Programming, Web Design</p>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="col-lg-9">\n        <div class="blog">\n          <div class="blog-image">\n            <a [routerLink]="routes.blog_details">\n              <img class="img-fluid" src="./assets/img/blog/blog-17.jpg" alt="img">\n            </a>\n          </div>\n          <div class="blog-item">\n            <h5 class="mb-2"><a [routerLink]="routes.blog_details">The Complete JavaScript Course for Beginners</a></h5>\n            <p class="text-truncate line-clamb-2">Dive into the world of JavaScript with our complete beginner-friendly course! Learn essential concepts...</p>\n            <div class="blog-info">\n              <div class="d-flex align-items-center flex-wrap justify-content-between gap-2">\n                <div class="d-flex align-items-center user-profile">\n                  <a [routerLink]="routes.instructorDetails" class="user-img"><img class="rounded-pill w-auto" src="./assets/img/user/user-15.jpg" alt="img"></a>\n                  <a [routerLink]="routes.instructorDetails" class="user-name">Donald Vesely</a>\n                </div>\n                <ul class="d-flex align-items-center flex-wrap gap-2">\n                  <li>\n                    <img class="me-1" src="./assets/img/icons/calendar.svg" alt="img">\n                    <p>08 Apr 2024</p>\n                  </li>\n                  <li>\n                    <img class="me-1" src="./assets/img/icons/tag.svg" alt="img">\n                    <p>Programming, Web Design</p>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>    \n      <div class="col-lg-9">\n      <div class="blog">\n        <div class="blog-image">\n          <a [routerLink]="routes.blog_details">\n            <img class="img-fluid" src="./assets/img/blog/blog-18.jpg" alt="img">\n          </a>\n        </div>\n        <div class="blog-item">\n          <h5 class="mb-2"><a [routerLink]="routes.blog_details">Revolutionize Learning with a Modern LMS</a></h5>\n          <p class="text-truncate line-clamb-2">Discover how a Learning Management System (LMS) can transform education and corporate training by ...</p>\n          <div class="blog-info">\n            <div class="d-flex align-items-center flex-wrap justify-content-between gap-2">\n              <div class="d-flex align-items-center user-profile">\n                <a [routerLink]="routes.instructorDetails" class="user-img"><img class="rounded-pill w-auto" src="./assets/img/user/user-05.jpg" alt="img"></a>\n                <a [routerLink]="routes.instructorDetails" class="user-name">James Barnes</a>\n              </div>\n              <ul class="d-flex align-items-center flex-wrap gap-2">\n                <li>\n                  <img class="me-1" src="./assets/img/icons/calendar.svg" alt="img">\n                  <p>23 Feb 2024</p>\n                </li>\n                <li>\n                  <img class="me-1" src="./assets/img/icons/tag.svg" alt="img">\n                  <p>Modern Learning, Innovative</p>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    </div>\n  <!-- /pagination -->\n  <div class="row align-items-center">\n    <div class="col-md-12">\n      <ul class="pagination justify-content-center">\n        <li class="page-item prev">\n          <a class="page-link" href="javascript:void(0);" tabindex="-1"><i class="fas fa-angle-left"></i></a>\n        </li>\n        <li class="page-item first-page active">\n          <a class="page-link" href="javascript:void(0);">1</a>\n        </li>\n        <li class="page-item">\n          <a class="page-link" href="javascript:void(0);">2</a>\n        </li>\n        <li class="page-item">\n          <a class="page-link" href="javascript:void(0);">3</a>\n        </li>\n        <li class="page-item next">\n          <a class="page-link" href="javascript:void(0);"><i class="fas fa-angle-right"></i></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <!-- /pagination -->\n  </div>\n  </div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogGridComponent, { className: "BlogGridComponent", filePath: "src/app/features/blog/blog-grid/blog-grid.component.ts", lineNumber: 13 });
})();
export {
  BlogGridComponent
};
//# sourceMappingURL=chunk-JODAIEZ2.js.map
