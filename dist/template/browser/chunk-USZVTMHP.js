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
  RouterOutlet
} from "./chunk-TPKO67I6.js";
import "./chunk-QFZWCWB7.js";
import "./chunk-PXFMCAI3.js";
import {
  CommonModule,
  NgIf
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/courses/courses.component.ts
function CoursesComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 6)(2, "div", 41)(3, "div", 42)(4, "h2", 43);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "capitalizeWords");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "nav", 44)(8, "ol", 45)(9, "li", 46)(10, "a", 21);
    \u0275\u0275text(11, "Home");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "li", 47);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "capitalizeWords");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, ctx_r0.page));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", ctx_r0.routes.home);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 5, ctx_r0.page));
  }
}
var CoursesComponent = class _CoursesComponent {
  common;
  routes = routes;
  base = "";
  page = "";
  last = "";
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
  static \u0275fac = function CoursesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CoursesComponent)(\u0275\u0275directiveInject(CommonService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CoursesComponent, selectors: [["app-courses"]], decls: 103, vars: 12, consts: [["class", "breadcrumb-bar text-center", 4, "ngIf"], [1, "footer"], [1, "footer-bg"], ["src", "assets/img/bg/footer-bg-01.png", "alt", "", 1, "footer-bg-1"], ["src", "assets/img/bg/footer-bg-02.png", "alt", "", 1, "footer-bg-2"], [1, "footer-top"], [1, "container"], [1, "row", "row-gap-4"], [1, "col-lg-4"], [1, "footer-about"], [1, "footer-logo"], ["src", "assets/img/logo.svg", "alt", ""], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "me-2"], ["src", "assets/img/icon/appstore.svg", "alt", ""], ["href", "javascript:void(0);"], ["src", "assets/img/icon/googleplay.svg", "alt", ""], [1, "col-lg-8"], [1, "col-lg-3"], [1, "footer-widget", "footer-menu"], [1, "footer-title"], [3, "routerLink"], [1, "col-lg-6"], [1, "footer-widget", "footer-contact"], [1, "subscribe-input"], ["action", "javascript:void(0);"], ["type", "email", "placeholder", "Enter your Email Address", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", "inline-flex", "align-items-center"], [1, "isax", "isax-send-2", "me-1"], [1, "footer-contact-info"], [1, "footer-address", "d-flex", "align-items-center"], ["src", "assets/img/icon/icon-20.svg", "alt", "Img", 1, "img-fluid", "me-2"], ["src", "assets/img/icon/icon-19.svg", "alt", "Img", 1, "img-fluid", "me-2"], ["src", "assets/img/icon/icon-21.svg", "alt", "Img", 1, "img-fluid", "me-2"], [1, "footer-bottom"], [1, "row", "row-gap-2"], [1, "col-md-6"], [1, "text-center", "text-md-start"], [1, "text-white"], [1, "d-flex", "align-items-center", "justify-content-center", "justify-content-md-end", "footer-link"], [1, "breadcrumb-bar", "text-center"], [1, "row"], [1, "col-md-12", "col-12"], [1, "breadcrumb-title", "mb-2"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "justify-content-center", "mb-0"], [1, "breadcrumb-item"], ["aria-current", "page", 1, "breadcrumb-item", "active"]], template: function CoursesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CoursesComponent_div_0_Template, 15, 7, "div", 0);
      \u0275\u0275element(1, "router-outlet");
      \u0275\u0275elementStart(2, "footer", 1)(3, "div", 2);
      \u0275\u0275element(4, "img", 3)(5, "img", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10);
      \u0275\u0275element(12, "img", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p");
      \u0275\u0275text(14, "Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 12)(16, "a", 13);
      \u0275\u0275element(17, "img", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "a", 15);
      \u0275\u0275element(19, "img", 16);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(20, "div", 17)(21, "div", 7)(22, "div", 18)(23, "div", 19)(24, "h5", 20);
      \u0275\u0275text(25, "For Instructor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "ul")(27, "li")(28, "a", 21);
      \u0275\u0275text(29, "Search Mentors");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "li")(31, "a", 21);
      \u0275\u0275text(32, "Login");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "li")(34, "a", 21);
      \u0275\u0275text(35, "Register");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "li")(37, "a", 21);
      \u0275\u0275text(38, "Booking");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "li")(40, "a", 21);
      \u0275\u0275text(41, "Students Dashboard");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(42, "div", 18)(43, "div", 19)(44, "h5", 20);
      \u0275\u0275text(45, "For Student");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "ul")(47, "li")(48, "a", 15);
      \u0275\u0275text(49, "Appointments");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "li")(51, "a", 21);
      \u0275\u0275text(52, "Chat");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "li")(54, "a", 21);
      \u0275\u0275text(55, "Login");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "li")(57, "a", 21);
      \u0275\u0275text(58, "Register");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "li")(60, "a", 21);
      \u0275\u0275text(61, "Instructor Dashboard");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(62, "div", 22)(63, "div", 23)(64, "h5", 20);
      \u0275\u0275text(65, "Newsletter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 24)(67, "form", 25);
      \u0275\u0275element(68, "input", 26);
      \u0275\u0275elementStart(69, "button", 27);
      \u0275\u0275element(70, "i", 28);
      \u0275\u0275text(71, "Subscribe");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(72, "div", 29)(73, "div", 30);
      \u0275\u0275element(74, "img", 31);
      \u0275\u0275elementStart(75, "p");
      \u0275\u0275text(76, " 3556 Beech Street, San Francisco,");
      \u0275\u0275element(77, "br");
      \u0275\u0275text(78, " California, CA 94108 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "div", 30);
      \u0275\u0275element(80, "img", 32);
      \u0275\u0275elementStart(81, "p");
      \u0275\u0275text(82, "dreamslms@example.com");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "div", 30);
      \u0275\u0275element(84, "img", 33);
      \u0275\u0275elementStart(85, "p");
      \u0275\u0275text(86, "+19 123-456-7890");
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(87, "div", 34)(88, "div", 6)(89, "div", 35)(90, "div", 36)(91, "div", 37)(92, "p", 38);
      \u0275\u0275text(93, "Copyright \xA9 2025 DreamsLMS. All rights reserved.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(94, "div", 36)(95, "div")(96, "ul", 39)(97, "li")(98, "a", 21);
      \u0275\u0275text(99, "Terms & Conditions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "li")(101, "a", 21);
      \u0275\u0275text(102, "Privacy Policy");
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.page !== "course-details-2" && ctx.page !== "course-details" && ctx.page !== "course-watch");
      \u0275\u0275advance(28);
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
  }, dependencies: [CommonModule, NgIf, RouterOutlet, RouterLink, CapitalizeWordsPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CoursesComponent, [{
    type: Component,
    args: [{ selector: "app-courses", standalone: true, imports: [CommonModule, RouterOutlet, RouterLink, CapitalizeWordsPipe], template: `
<!-- Breadcrumb -->
<div *ngIf="page !== 'course-details-2' && page !== 'course-details' && page !== 'course-watch'" class="breadcrumb-bar text-center">
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-12">
                <h2 class="breadcrumb-title mb-2">{{page | capitalizeWords}}</h2>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-center mb-0">
                        <li class="breadcrumb-item"><a [routerLink]="routes.home">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">{{page | capitalizeWords}}</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
</div>
<!-- /Breadcrumb -->
<router-outlet></router-outlet>


<!-- Footer -->
<footer class="footer">
    <div class="footer-bg">
        <img src="assets/img/bg/footer-bg-01.png" class="footer-bg-1" alt="">
        <img src="assets/img/bg/footer-bg-02.png" class="footer-bg-2" alt="">
    </div>
    <div class="footer-top">
        <div class="container">
            <div class="row row-gap-4">
                <div class="col-lg-4">
                    <div class="footer-about">
                        <div class="footer-logo">
                            <img src="assets/img/logo.svg" alt="">
                        </div>
                        <p>Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.</p>
                        <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="me-2"><img src="assets/img/icon/appstore.svg" alt=""></a>
                            <a href="javascript:void(0);"><img src="assets/img/icon/googleplay.svg" alt=""></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="row row-gap-4">
                        <div class="col-lg-3">
                            <div class="footer-widget footer-menu">
                                <h5 class="footer-title">For Instructor</h5>
                                <ul>
                                    <li><a [routerLink]="routes.courseGrid">Search Mentors</a></li>
                                    <li><a [routerLink]="routes.login">Login</a></li>
                                    <li><a [routerLink]="routes.register">Register</a></li>
                                    <li><a [routerLink]="routes.courseList">Booking</a></li>
                                    <li><a [routerLink]="routes.students_Dashboard">Students Dashboard</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="footer-widget footer-menu">
                                <h5 class="footer-title">For Student</h5>
                                <ul>
                                    <li><a href="javascript:void(0);">Appointments</a></li>
                                    <li><a [routerLink]="routes.instructorMessage">Chat</a></li>
                                    <li><a [routerLink]="routes.login">Login</a></li>
                                    <li><a [routerLink]="routes.register">Register</a></li>
                                    <li><a [routerLink]="routes.instructor_dashboard">Instructor Dashboard</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="footer-widget footer-contact">
                                <h5 class="footer-title">Newsletter</h5>
                                <div class="subscribe-input">
                                    <form action="javascript:void(0);">
                                        <input type="email" class="form-control" placeholder="Enter your Email Address">
                                        <button type="submit" class="btn btn-primary btn-sm inline-flex align-items-center"><i class="isax isax-send-2 me-1"></i>Subscribe</button>
                                    </form>
                                </div>
                                <div class="footer-contact-info">
                                    <div class="footer-address d-flex align-items-center">
                                        <img src="assets/img/icon/icon-20.svg" alt="Img" class="img-fluid me-2">
                                        <p> 3556  Beech Street, San Francisco,<br> California, CA 94108 </p>
                                    </div>
                                    <div class="footer-address d-flex align-items-center">
                                        <img src="assets/img/icon/icon-19.svg" alt="Img" class="img-fluid me-2">
                                        <p>dreamslms&#64;example.com</p>
                                    </div>
                                    <div class="footer-address d-flex align-items-center">
                                        <img src="assets/img/icon/icon-21.svg" alt="Img" class="img-fluid me-2">
                                        <p>+19 123-456-7890</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="container">
            <div class="row row-gap-2">
                <div class="col-md-6">
                    <div class="text-center text-md-start">
                        <p class="text-white">Copyright &copy; 2025 DreamsLMS. All rights reserved.</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div>
                        <ul class="d-flex align-items-center justify-content-center justify-content-md-end footer-link">
                            <li><a [routerLink]="routes.page_term_condition">Terms & Conditions</a></li>
                            <li><a [routerLink]="routes.page_privacy_policy">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
<!-- /Footer -->` }]
  }], () => [{ type: CommonService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CoursesComponent, { className: "CoursesComponent", filePath: "src/app/features/courses/courses.component.ts", lineNumber: 15 });
})();
export {
  CoursesComponent
};
//# sourceMappingURL=chunk-USZVTMHP.js.map
