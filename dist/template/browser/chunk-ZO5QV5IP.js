import {
  CapitalizeWordsPipe
} from "./chunk-6HITJ3QB.js";
import {
  CommonService
} from "./chunk-CDB6UHUA.js";
import {
  routes
} from "./chunk-E6TQA5KL.js";
import {
  RouterLink,
  RouterModule,
  RouterOutlet
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
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/pages.component.ts
var PagesComponent = class _PagesComponent {
  common;
  last = "";
  routes = routes;
  page = "";
  base = "";
  constructor(common) {
    this.common = common;
    this.common.base.subscribe((res) => {
      this.base = res;
    });
    this.common.page.subscribe((res) => {
      this.page = res;
    });
    this.common.last.subscribe((res) => {
      this.last = res;
    });
  }
  static \u0275fac = function PagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PagesComponent)(\u0275\u0275directiveInject(CommonService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PagesComponent, selectors: [["app-pages"]], decls: 117, vars: 18, consts: [[1, "breadcrumb-bar", "text-center"], [1, "container"], [1, "row"], [1, "col-md-12", "col-12"], [1, "breadcrumb-title", "mb-2"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "justify-content-center", "mb-0"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "footer"], [1, "footer-bg"], ["src", "assets/img/bg/footer-bg-01.png", "alt", "", 1, "footer-bg-1"], ["src", "assets/img/bg/footer-bg-02.png", "alt", "", 1, "footer-bg-2"], [1, "footer-top"], [1, "row", "row-gap-4"], [1, "col-lg-4"], [1, "footer-about"], [1, "footer-logo"], ["src", "assets/img/logo.svg", "alt", ""], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "me-2"], ["src", "assets/img/icon/appstore.svg", "alt", ""], ["href", "javascript:void(0);"], ["src", "assets/img/icon/googleplay.svg", "alt", ""], [1, "col-lg-8"], [1, "col-lg-3"], [1, "footer-widget", "footer-menu"], [1, "footer-title"], [1, "col-lg-6"], [1, "footer-widget", "footer-contact"], [1, "subscribe-input"], ["action", "javascript:void(0);"], ["type", "email", "placeholder", "Enter your Email Address", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", "inline-flex", "align-items-center"], [1, "isax", "isax-send-2", "me-1"], [1, "footer-contact-info"], [1, "footer-address", "d-flex", "align-items-center"], ["src", "assets/img/icon/icon-20.svg", "alt", "Img", 1, "img-fluid", "me-2"], ["src", "assets/img/icon/icon-19.svg", "alt", "Img", 1, "img-fluid", "me-2"], ["src", "assets/img/icon/icon-21.svg", "alt", "Img", 1, "img-fluid", "me-2"], [1, "footer-bottom"], [1, "row", "row-gap-2"], [1, "col-md-6"], [1, "text-center", "text-md-start"], [1, "text-white"], [1, "d-flex", "align-items-center", "justify-content-center", "justify-content-md-end", "footer-link"]], template: function PagesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "capitalizeWords");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "nav", 5)(8, "ol", 6)(9, "li", 7)(10, "a", 8);
      \u0275\u0275text(11, "Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "li", 9);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "capitalizeWords");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275element(15, "router-outlet");
      \u0275\u0275elementStart(16, "footer", 10)(17, "div", 11);
      \u0275\u0275element(18, "img", 12)(19, "img", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 14)(21, "div", 1)(22, "div", 15)(23, "div", 16)(24, "div", 17)(25, "div", 18);
      \u0275\u0275element(26, "img", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "p");
      \u0275\u0275text(28, "Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 20)(30, "a", 21);
      \u0275\u0275element(31, "img", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "a", 23);
      \u0275\u0275element(33, "img", 24);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(34, "div", 25)(35, "div", 15)(36, "div", 26)(37, "div", 27)(38, "h5", 28);
      \u0275\u0275text(39, "For Instructor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "ul")(41, "li")(42, "a", 8);
      \u0275\u0275text(43, "Search Mentors");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "li")(45, "a", 8);
      \u0275\u0275text(46, "Login");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "li")(48, "a", 8);
      \u0275\u0275text(49, "Register");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "li")(51, "a", 8);
      \u0275\u0275text(52, "Booking");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "li")(54, "a", 8);
      \u0275\u0275text(55, "Students Dashboard");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(56, "div", 26)(57, "div", 27)(58, "h5", 28);
      \u0275\u0275text(59, "For Student");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "ul")(61, "li")(62, "a", 23);
      \u0275\u0275text(63, "Appointments");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "li")(65, "a", 8);
      \u0275\u0275text(66, "Chat");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "li")(68, "a", 8);
      \u0275\u0275text(69, "Login");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "li")(71, "a", 8);
      \u0275\u0275text(72, "Register");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "li")(74, "a", 8);
      \u0275\u0275text(75, "Instructor Dashboard");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(76, "div", 29)(77, "div", 30)(78, "h5", 28);
      \u0275\u0275text(79, "Newsletter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "div", 31)(81, "form", 32);
      \u0275\u0275element(82, "input", 33);
      \u0275\u0275elementStart(83, "button", 34);
      \u0275\u0275element(84, "i", 35);
      \u0275\u0275text(85, "Subscribe");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(86, "div", 36)(87, "div", 37);
      \u0275\u0275element(88, "img", 38);
      \u0275\u0275elementStart(89, "p");
      \u0275\u0275text(90, " 3556 Beech Street, San Francisco,");
      \u0275\u0275element(91, "br");
      \u0275\u0275text(92, " California, CA 94108 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "div", 37);
      \u0275\u0275element(94, "img", 39);
      \u0275\u0275elementStart(95, "p");
      \u0275\u0275text(96, "dreamslms@example.com");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "div", 37);
      \u0275\u0275element(98, "img", 40);
      \u0275\u0275elementStart(99, "p");
      \u0275\u0275text(100, "+19 123-456-7890");
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(101, "div", 41)(102, "div", 1)(103, "div", 42)(104, "div", 43)(105, "div", 44)(106, "p", 45);
      \u0275\u0275text(107, "Copyright \xA9 2025 DreamsLMS. All rights reserved.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(108, "div", 43)(109, "div")(110, "ul", 46)(111, "li")(112, "a", 8);
      \u0275\u0275text(113, "Terms & Conditions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(114, "li")(115, "a", 8);
      \u0275\u0275text(116, "Privacy Policy");
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 14, ctx.page));
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.home);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 16, ctx.page));
      \u0275\u0275advance(29);
      \u0275\u0275property("routerLink", ctx.routes.courseGrid);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.login);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.register);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.courseList);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.students_Dashboard);
      \u0275\u0275advance(11);
      \u0275\u0275property("routerLink", ctx.routes.instructorMessage);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.login);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.register);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructor_dashboard);
      \u0275\u0275advance(38);
      \u0275\u0275property("routerLink", ctx.routes.page_term_condition);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.page_privacy_policy);
    }
  }, dependencies: [CommonModule, RouterModule, RouterOutlet, RouterLink, CapitalizeWordsPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagesComponent, [{
    type: Component,
    args: [{ selector: "app-pages", imports: [CommonModule, RouterModule, CapitalizeWordsPipe], template: '<div class="breadcrumb-bar text-center">\n    <div class="container">\n        <div class="row">\n            <div class="col-md-12 col-12">\n                <h2 class="breadcrumb-title mb-2">{{page | capitalizeWords}}</h2>\n                <nav aria-label="breadcrumb">\n                    <ol class="breadcrumb justify-content-center mb-0">\n                        <li class="breadcrumb-item"><a [routerLink]="routes.home">Home</a></li>\n                        <li class="breadcrumb-item active" aria-current="page">{{page | capitalizeWords}}</li>\n                    </ol>\n                </nav>\n            </div>\n        </div>\n    </div>\n</div>\n<router-outlet></router-outlet>\n<footer class="footer">\n    <div class="footer-bg">\n        <img src="assets/img/bg/footer-bg-01.png" class="footer-bg-1" alt="">\n        <img src="assets/img/bg/footer-bg-02.png" class="footer-bg-2" alt="">\n    </div>\n    <div class="footer-top">\n        <div class="container">\n            <div class="row row-gap-4">\n                <div class="col-lg-4">\n                    <div class="footer-about">\n                        <div class="footer-logo">\n                            <img src="assets/img/logo.svg" alt="">\n                        </div>\n                        <p>Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.</p>\n                        <div class="d-flex align-items-center">\n                            <a href="javascript:void(0);" class="me-2"><img src="assets/img/icon/appstore.svg" alt=""></a>\n                            <a href="javascript:void(0);"><img src="assets/img/icon/googleplay.svg" alt=""></a>\n                        </div>\n                    </div>\n                </div>\n                <div class="col-lg-8">\n                    <div class="row row-gap-4">\n                        <div class="col-lg-3">\n                            <div class="footer-widget footer-menu">\n                                <h5 class="footer-title">For Instructor</h5>\n                                <ul>\n                                    <li><a [routerLink]="routes.courseGrid">Search Mentors</a></li>\n                                    <li><a [routerLink]="routes.login">Login</a></li>\n                                    <li><a [routerLink]="routes.register">Register</a></li>\n                                    <li><a [routerLink]="routes.courseList">Booking</a></li>\n                                    <li><a [routerLink]="routes.students_Dashboard">Students Dashboard</a></li>\n                                </ul>\n                            </div>\n                        </div>\n                        <div class="col-lg-3">\n                            <div class="footer-widget footer-menu">\n                                <h5 class="footer-title">For Student</h5>\n                                <ul>\n                                    <li><a href="javascript:void(0);">Appointments</a></li>\n                                    <li><a [routerLink]="routes.instructorMessage">Chat</a></li>\n                                    <li><a [routerLink]="routes.login">Login</a></li>\n                                    <li><a [routerLink]="routes.register">Register</a></li>\n                                    <li><a [routerLink]="routes.instructor_dashboard">Instructor Dashboard</a></li>\n                                </ul>\n                            </div>\n                        </div>\n                        <div class="col-lg-6">\n                            <div class="footer-widget footer-contact">\n                                <h5 class="footer-title">Newsletter</h5>\n                                <div class="subscribe-input">\n                                    <form action="javascript:void(0);">\n                                        <input type="email" class="form-control" placeholder="Enter your Email Address">\n                                        <button type="submit" class="btn btn-primary btn-sm inline-flex align-items-center"><i class="isax isax-send-2 me-1"></i>Subscribe</button>\n                                    </form>\n                                </div>\n                                <div class="footer-contact-info">\n                                    <div class="footer-address d-flex align-items-center">\n                                        <img src="assets/img/icon/icon-20.svg" alt="Img" class="img-fluid me-2">\n                                        <p> 3556  Beech Street, San Francisco,<br> California, CA 94108 </p>\n                                    </div>\n                                    <div class="footer-address d-flex align-items-center">\n                                        <img src="assets/img/icon/icon-19.svg" alt="Img" class="img-fluid me-2">\n                                        <p>dreamslms&#64;example.com</p>\n                                    </div>\n                                    <div class="footer-address d-flex align-items-center">\n                                        <img src="assets/img/icon/icon-21.svg" alt="Img" class="img-fluid me-2">\n                                        <p>+19 123-456-7890</p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="footer-bottom">\n        <div class="container">\n            <div class="row row-gap-2">\n                <div class="col-md-6">\n                    <div class="text-center text-md-start">\n                        <p class="text-white">Copyright &copy; 2025 DreamsLMS. All rights reserved.</p>\n                    </div>\n                </div>\n                <div class="col-md-6">\n                    <div>\n                        <ul class="d-flex align-items-center justify-content-center justify-content-md-end footer-link">\n                            <li><a [routerLink]="routes.page_term_condition">Terms & Conditions</a></li>\n                            <li><a [routerLink]="routes.page_privacy_policy">Privacy Policy</a></li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</footer>\n' }]
  }], () => [{ type: CommonService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PagesComponent, { className: "PagesComponent", filePath: "src/app/features/pages/pages.component.ts", lineNumber: 14 });
})();
export {
  PagesComponent
};
//# sourceMappingURL=chunk-ZO5QV5IP.js.map
