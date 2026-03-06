import {
  routes
} from "./chunk-E6TQA5KL.js";
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/become-an-expert/become-an-expert.component.ts
var BecomeAnExpertComponent = class _BecomeAnExpertComponent {
  routes = routes;
  password = [false];
  // Add more as needed
  togglePassword(index) {
    this.password[index] = !this.password[index];
  }
  static \u0275fac = function BecomeAnExpertComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BecomeAnExpertComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BecomeAnExpertComponent, selectors: [["app-become-an-expert"]], decls: 222, vars: 4, consts: [[1, "share-your-knowledge"], [1, "container"], [1, "row"], [1, "col-lg-7", "pe-xl-5"], [1, "share-knowledge-content"], [1, "section-header"], [1, "fw-medium", "text-secondary", "text-decoration-underline", "mb-2", "d-inline-block"], [1, "col-lg-6"], [1, "card"], [1, "card-body"], [1, "d-flex", "align-items-center"], [1, "me-2"], [1, "bg-secondary-transparent", "d-flex", "justify-content-center", "align-items-center", "p-3", "rounded-pill"], ["src", "./assets/img/icons/instructor-icon1.svg", "alt", "img"], [1, "mb-1"], [1, "text-truncate", "line-clamb-1"], ["src", "./assets/img/icons/instructor-icon2.svg", "alt", "img"], ["src", "./assets/img/icons/instructor-icon3.svg", "alt", "img"], ["src", "./assets/img/icons/instructor-icon4.svg", "alt", "img"], ["href", "javascript:void(0);", 1, "btn", "register-btn-1", "d-inline-flex", "align-items-center"], [1, "isax", "isax-arrow-right-3", "ms-1"], [1, "col-lg-5"], [1, "share-your-knowledge-img", "d-none", "d-lg-flex"], ["src", "assets/img/shapes/shape-4.png", "alt", "img", 1, "img-fluid", "become-instructor-bg-02"], ["src", "assets/img/shapes/shape-5.png", "alt", "img", 1, "img-fluid", "become-instructor-bg-01"], ["src", "assets/img/shapes/shape-3.png", "alt", "img", 1, "img-fluid", "become-instructor-bg-03"], ["src", "assets/img/feature/feature-5.jpg", "alt", "img", 1, "img-fluid", "rounded-4", "become-instructor-bg-04"], ["src", "assets/img/feature/feature-6.jpg", "alt", "img", 1, "img-fluid", "rounded-4", "become-instructor-bg-05"], ["src", "assets/img/shapes/shape-7.svg", "alt", "img", 1, "img-fluid", "become-instructor-bg-06"], [1, "how-it-works-sec", "bg-light-900"], [1, "row", "row-gap-4"], [1, "col-lg-4"], [1, "share-knowledge-item-2"], ["src", "./assets/img/icons/how-it-works-1.svg", "alt", "img"], [1, "mt-3", "mb-2"], [1, "text-truncate", "line-clamb-2"], ["src", "./assets/img/icons/how-it-works-2.svg", "alt", "img"], ["src", "./assets/img/icons/how-it-works-3.svg", "alt", "img"], [1, "counter-sec"], [1, "col-xl-3", "col-md-6"], [1, "become-instructor-item-3", "mb-0"], [1, "counter-icon"], ["src", "./assets/img/icons/counter-icon1.svg", "alt", "img"], [1, "count-content", "ps-1", "pb-2"], [1, "text-info"], [1, "count-digit"], [1, "fw-medium", "text-truncate"], ["src", "./assets/img/icons/counter-icon2.svg", "alt", "img"], [1, "text-warning"], ["src", "./assets/img/icons/counter-icon3.svg", "alt", "img"], [1, "text-skyblue"], ["src", "./assets/img/icons/counter-icon4.svg", "alt", "img"], [1, "text-lightgreen"], [1, "register-sec"], [1, "row", "align-items-center"], [1, "rounded-4", "pe-lg-5"], ["src", "assets/img/feature/feature-4.jpg", "alt", "img", 1, "img-fluid", "rounded-5", "d-none", "d-lg-flex"], [1, "register-section", "p-4", "p-sm-5", "p-md-6"], [1, "mb-2"], [1, "col-lg-12"], [1, "mb-3"], [1, "form-label", "mb-1"], [1, "ms-1", "text-danger"], ["type", "text", 1, "form-control"], ["type", "email", 1, "form-control"], ["type", "tel", 1, "form-control"], [1, "mb-3", "position-relative"], ["id", "passwordInput", 1, "position-relative"], [1, "pass-inputs", "form-control", "form-control-lg", 3, "type"], ["tabindex", "0", 1, "isax", "toggle-passwords", "fs-14", 3, "click", "keydown.enter", "ngClass"], [1, "mb-4"], ["type", "submit", 1, "btn", "btn-secondary", "btn-lg", "w-100", "justify-content-center"], [1, "become-an-instructor", "rounded-2", "bg-primary", "position-relative", "mt-5", "p-5"], ["src", "./assets/img/shapes/instructor-bg-1.png", "alt", "img", 1, "instructor-bg-1"], ["src", "./assets/img/shapes/instructor-bg-2.png", "alt", "img", 1, "instructor-bg-2"], [1, "col-lg-8"], [1, "text-white", "mb-2", "mblg-3"], [1, "text-light"], [1, "col-lg-4", "d-flex", "justify-content-lg-end", "justify-content-center"], ["href", "javascript:void(0);", 1, "btn", "btn-secondary", "btn-lg", "mt-3", "mt-lg-0"]], template: function BecomeAnExpertComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "span", 6);
      \u0275\u0275text(7, "Share Knowledge");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "h2");
      \u0275\u0275text(9, "Share Your Knowledge. Inspire the Future.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p");
      \u0275\u0275text(11, "Share your knowledge, inspire learners worldwide, and earn while doing what you love. Join a community of experts transforming education through engaging and accessible content.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 2)(13, "div", 7)(14, "div", 8)(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "span", 12);
      \u0275\u0275element(19, "img", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div")(21, "h6", 14);
      \u0275\u0275text(22, "Flexible Work");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "p", 15);
      \u0275\u0275text(24, "Teach at your own pace.");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(25, "div", 7)(26, "div", 8)(27, "div", 9)(28, "div", 10)(29, "div", 11)(30, "span", 12);
      \u0275\u0275element(31, "img", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div")(33, "h6", 14);
      \u0275\u0275text(34, "Earning Potential");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "p", 15);
      \u0275\u0275text(36, "Monetize your expertise.");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(37, "div", 7)(38, "div", 8)(39, "div", 9)(40, "div", 10)(41, "div", 11)(42, "span", 12);
      \u0275\u0275element(43, "img", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div")(45, "h6", 14);
      \u0275\u0275text(46, "Impact");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "p", 15);
      \u0275\u0275text(48, "Reach and educate ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(49, "div", 7)(50, "div", 8)(51, "div", 9)(52, "div", 10)(53, "div", 11)(54, "span", 12);
      \u0275\u0275element(55, "img", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "div")(57, "h6", 14);
      \u0275\u0275text(58, "Support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "p", 15);
      \u0275\u0275text(60, "Access to dedicated support");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(61, "a", 19);
      \u0275\u0275text(62, "Register Now ");
      \u0275\u0275element(63, "i", 20);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "div", 21)(65, "div", 22);
      \u0275\u0275element(66, "img", 23)(67, "img", 24)(68, "img", 25)(69, "img", 26)(70, "img", 27)(71, "img", 28);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(72, "div", 29)(73, "div", 1)(74, "div", 5)(75, "span", 6);
      \u0275\u0275text(76, "Our Workflow");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "h2");
      \u0275\u0275text(78, "How It Works");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "p");
      \u0275\u0275text(80, "Turn Your Expertise into Impact in Just 3 Simple Steps!");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "div", 30)(82, "div", 31)(83, "div", 32);
      \u0275\u0275element(84, "img", 33);
      \u0275\u0275elementStart(85, "h5", 34);
      \u0275\u0275text(86, "Apply & Get Approved");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "p", 35);
      \u0275\u0275text(88, "Submit your application and get approved to access the platform");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(89, "div", 31)(90, "div", 32);
      \u0275\u0275element(91, "img", 36);
      \u0275\u0275elementStart(92, "h5", 34);
      \u0275\u0275text(93, "Create & Upload Content");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "p", 35);
      \u0275\u0275text(95, "Develop and upload your courses, including videos, lessons, quizzes, and assignments.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(96, "div", 31)(97, "div", 32);
      \u0275\u0275element(98, "img", 37);
      \u0275\u0275elementStart(99, "h5", 34);
      \u0275\u0275text(100, "Teach & Earn");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "p", 35);
      \u0275\u0275text(102, "Reach learners worldwide, teach, and start earning while making an impact.");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(103, "div", 38)(104, "div", 1)(105, "div", 30)(106, "div", 39)(107, "div", 40)(108, "div", 10)(109, "div", 41);
      \u0275\u0275element(110, "img", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "div", 43)(112, "h4", 44)(113, "span", 45);
      \u0275\u0275text(114, "10");
      \u0275\u0275elementEnd();
      \u0275\u0275text(115, "K");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "p", 46);
      \u0275\u0275text(117, "Online Courses");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(118, "div", 39)(119, "div", 40)(120, "div", 10)(121, "div", 41);
      \u0275\u0275element(122, "img", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "div", 43)(124, "h4", 48)(125, "span", 45);
      \u0275\u0275text(126, "200");
      \u0275\u0275elementEnd();
      \u0275\u0275text(127, "+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "p", 46);
      \u0275\u0275text(129, "Expert Tutors");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(130, "div", 39)(131, "div", 40)(132, "div", 10)(133, "div", 41);
      \u0275\u0275element(134, "img", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "div", 43)(136, "h4", 50)(137, "span", 45);
      \u0275\u0275text(138, "6");
      \u0275\u0275elementEnd();
      \u0275\u0275text(139, "K+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "p", 46);
      \u0275\u0275text(141, "Certified Courses");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(142, "div", 39)(143, "div", 40)(144, "div", 10)(145, "div", 41);
      \u0275\u0275element(146, "img", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "div", 43)(148, "h4", 52)(149, "span", 45);
      \u0275\u0275text(150, "60");
      \u0275\u0275elementEnd();
      \u0275\u0275text(151, "K+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "p", 46);
      \u0275\u0275text(153, "Online Students");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(154, "div", 53)(155, "div", 1)(156, "div", 54)(157, "div", 7)(158, "div", 55);
      \u0275\u0275element(159, "img", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(160, "div", 7)(161, "div", 57)(162, "h5", 58);
      \u0275\u0275text(163, "Register");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "p");
      \u0275\u0275text(165, "Your email address will not be published. Required fields are marked *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "form")(167, "div", 2)(168, "div", 59)(169, "div", 60)(170, "label", 61);
      \u0275\u0275text(171, "Name");
      \u0275\u0275elementStart(172, "span", 62);
      \u0275\u0275text(173, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(174, "input", 63);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(175, "div", 59)(176, "div", 60)(177, "label", 61);
      \u0275\u0275text(178, "Email");
      \u0275\u0275elementStart(179, "span", 62);
      \u0275\u0275text(180, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(181, "input", 64);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(182, "div", 59)(183, "div", 60)(184, "label", 61);
      \u0275\u0275text(185, "Phone Number");
      \u0275\u0275elementStart(186, "span", 62);
      \u0275\u0275text(187, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(188, "input", 65);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(189, "div", 59)(190, "div", 66)(191, "label", 61);
      \u0275\u0275text(192, "Password");
      \u0275\u0275elementStart(193, "span", 62);
      \u0275\u0275text(194, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(195, "div", 67);
      \u0275\u0275element(196, "input", 68);
      \u0275\u0275elementStart(197, "span", 69);
      \u0275\u0275listener("click", function BecomeAnExpertComponent_Template_span_click_197_listener() {
        return ctx.togglePassword(1);
      })("keydown.enter", function BecomeAnExpertComponent_Template_span_keydown_enter_197_listener() {
        return ctx.togglePassword(1);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(198, "div", 59)(199, "div", 70)(200, "label", 61);
      \u0275\u0275text(201, "Confirm Password");
      \u0275\u0275elementStart(202, "span", 62);
      \u0275\u0275text(203, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(204, "div", 67);
      \u0275\u0275element(205, "input", 68);
      \u0275\u0275elementStart(206, "span", 69);
      \u0275\u0275listener("click", function BecomeAnExpertComponent_Template_span_click_206_listener() {
        return ctx.togglePassword(2);
      })("keydown.enter", function BecomeAnExpertComponent_Template_span_keydown_enter_206_listener() {
        return ctx.togglePassword(2);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(207, "div", 59)(208, "button", 71);
      \u0275\u0275text(209, "Submit");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(210, "div", 72);
      \u0275\u0275element(211, "img", 73)(212, "img", 74);
      \u0275\u0275elementStart(213, "div", 54)(214, "div", 75)(215, "h3", 76);
      \u0275\u0275text(216, "Become an Instructor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(217, "p", 77);
      \u0275\u0275text(218, "Turn your expertise into impactful courses and inspire learners worldwide. Join our community of instructors and start your journey today!");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(219, "div", 78)(220, "a", 79);
      \u0275\u0275text(221, "Start Teaching Today");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(196);
      \u0275\u0275property("type", ctx.password[1] ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.password[1] ? "isax-eye" : "isax-eye-slash");
      \u0275\u0275advance(8);
      \u0275\u0275property("type", ctx.password[2] ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.password[2] ? "isax-eye" : "isax-eye-slash");
    }
  }, dependencies: [CommonModule, NgClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BecomeAnExpertComponent, [{
    type: Component,
    args: [{ selector: "app-become-an-expert", imports: [CommonModule], template: ` <!-- share your knowledge -->
 <div class="share-your-knowledge">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 pe-xl-5">
                <div class="share-knowledge-content">
                    <div class="section-header">
                        <span class="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">Share Knowledge</span>
                        <h2>Share Your Knowledge. Inspire the Future.</h2>
                        <p>Share your knowledge, inspire learners worldwide, and earn while doing what you love. Join a community of experts transforming education through engaging and accessible content.</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="bg-secondary-transparent d-flex justify-content-center align-items-center p-3 rounded-pill"><img src="./assets/img/icons/instructor-icon1.svg" alt="img"></span>
                                        </div>    
                                        <div>
                                            <h6 class="mb-1">Flexible Work</h6>
                                            <p class="text-truncate line-clamb-1">Teach at your own pace.</p>
                                        </div>
                                    </div>
                                </div>	
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="bg-secondary-transparent d-flex justify-content-center align-items-center p-3 rounded-pill"><img src="./assets/img/icons/instructor-icon2.svg" alt="img"></span>
                                        </div>    
                                        <div>
                                            <h6 class="mb-1">Earning Potential</h6>
                                            <p class="text-truncate line-clamb-1">Monetize your expertise.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="bg-secondary-transparent d-flex justify-content-center align-items-center p-3 rounded-pill"><img src="./assets/img/icons/instructor-icon3.svg" alt="img"></span>
                                        </div>    
                                        <div>
                                            <h6 class="mb-1">Impact</h6>
                                            <p class="text-truncate line-clamb-1">Reach and educate </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span class="bg-secondary-transparent d-flex justify-content-center align-items-center p-3 rounded-pill"><img src="./assets/img/icons/instructor-icon4.svg" alt="img"></span>
                                        </div>    
                                        <div>
                                            <h6 class="mb-1">Support</h6>
                                            <p class="text-truncate line-clamb-1">Access to dedicated support</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="javascript:void(0);" class="btn register-btn-1 d-inline-flex align-items-center">Register Now <i class="isax isax-arrow-right-3 ms-1"></i></a>
                </div>
            </div>
            <div class="col-lg-5">
                <div class="share-your-knowledge-img d-none d-lg-flex">
                    <img src="assets/img/shapes/shape-4.png" alt="img" class="img-fluid become-instructor-bg-02">
                    <img src="assets/img/shapes/shape-5.png" alt="img" class="img-fluid become-instructor-bg-01">
                    <img src="assets/img/shapes/shape-3.png" alt="img" class="img-fluid become-instructor-bg-03"> 
                    <img src="assets/img/feature/feature-5.jpg" alt="img" class="img-fluid rounded-4 become-instructor-bg-04"> 
                    <img src="assets/img/feature/feature-6.jpg" alt="img" class="img-fluid rounded-4 become-instructor-bg-05"> 
                    <img src="assets/img/shapes/shape-7.svg" alt="img" class="img-fluid become-instructor-bg-06"> 
                </div>
            </div>
        </div>
    </div>
</div>
<!-- share your knowledge -->

<!-- how it works -->
<div class="how-it-works-sec bg-light-900">
    <div class="container">
        <div class="section-header">
            <span class="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">Our Workflow</span>
            <h2>How It Works</h2>
            <p>Turn Your Expertise into Impact in Just 3 Simple Steps!</p>
        </div>
        <div class="row row-gap-4">
            <div class="col-lg-4">
                <div class="share-knowledge-item-2">
                    <img src="./assets/img/icons/how-it-works-1.svg" alt="img">
                    <h5 class="mt-3 mb-2">Apply & Get Approved</h5>
                    <p class="text-truncate line-clamb-2">Submit your application and get approved to access the platform</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="share-knowledge-item-2">
                    <img src="./assets/img/icons/how-it-works-2.svg" alt="img">
                    <h5 class="mt-3 mb-2">Create & Upload Content</h5>
                    <p class="text-truncate line-clamb-2">Develop and upload your courses, including videos, lessons, quizzes, and assignments.</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="share-knowledge-item-2">
                    <img src="./assets/img/icons/how-it-works-3.svg" alt="img">
                    <h5 class="mt-3 mb-2">Teach & Earn</h5>
                    <p class="text-truncate line-clamb-2">Reach learners worldwide, teach, and start earning while making an impact.</p>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- how it works -->

<!-- counter -->
<div class="counter-sec">
    <div class="container">
        <div class="row row-gap-4">
            <div class="col-xl-3 col-md-6">
                <div class="become-instructor-item-3 mb-0">
                    <div class="d-flex align-items-center">
                        <div class="counter-icon">
                            <img src="./assets/img/icons/counter-icon1.svg" alt="img">
                        </div>
                        <div class="count-content ps-1 pb-2">
                            <h4 class="text-info"><span class="count-digit">10</span>K</h4>
                            <p class="fw-medium text-truncate">Online Courses</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-md-6">
                <div class="become-instructor-item-3 mb-0">
                    <div class="d-flex align-items-center">
                        <div class="counter-icon">
                            <img src="./assets/img/icons/counter-icon2.svg" alt="img">
                        </div>
                        <div class="count-content ps-1 pb-2">
                            <h4 class="text-warning"><span class="count-digit">200</span>+</h4>
                            <p class="fw-medium text-truncate">Expert Tutors</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-md-6">
                <div class="become-instructor-item-3 mb-0">
                    <div class="d-flex align-items-center">
                        <div class="counter-icon">
                            <img src="./assets/img/icons/counter-icon3.svg" alt="img">
                        </div>
                        <div class="count-content ps-1 pb-2">
                            <h4 class="text-skyblue"><span class="count-digit">6</span>K+</h4>
                            <p class="fw-medium text-truncate">Certified Courses</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-md-6">
                <div class="become-instructor-item-3 mb-0">
                    <div class="d-flex align-items-center">
                        <div class="counter-icon">
                            <img src="./assets/img/icons/counter-icon4.svg" alt="img">
                        </div>
                        <div class="count-content ps-1 pb-2">
                            <h4 class="text-lightgreen"><span class="count-digit">60</span>K+</h4>
                            <p class="fw-medium text-truncate">Online Students</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- counter -->

<!-- register -->
<div class="register-sec">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="rounded-4 pe-lg-5">
                    <img class="img-fluid rounded-5 d-none d-lg-flex" src="assets/img/feature/feature-4.jpg" alt="img">
                </div>
            </div>
            <div class="col-lg-6">
                <div class="register-section p-4 p-sm-5 p-md-6">
                    <h5 class="mb-2">Register</h5>
                    <p>Your email address will not be published. Required fields are marked *</p>
                    <form>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="mb-3">
                                    <label class="form-label mb-1">Name<span class="ms-1 text-danger">*</span></label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="mb-3">
                                    <label class="form-label mb-1">Email<span class="ms-1 text-danger">*</span></label>
                                    <input type="email" class="form-control">
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="mb-3">
                                    <label class="form-label mb-1">Phone Number<span class="ms-1 text-danger">*</span></label>
                                    <input type="tel" class="form-control">
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="mb-3 position-relative">
                                    <label class="form-label mb-1">Password<span class="ms-1 text-danger">*</span></label>
                                    <div class="position-relative" id="passwordInput">
                                        <input [type]="password[1] ? 'text' : 'password'" class="pass-inputs form-control form-control-lg">
                                        <span tabindex="0" (click)="togglePassword(1)" (keydown.enter)="togglePassword(1)" class="isax toggle-passwords fs-14" [ngClass]="password[1] ? 'isax-eye' : 'isax-eye-slash'"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="mb-4">
                                    <label class="form-label mb-1">Confirm Password<span class="ms-1 text-danger">*</span></label>
                                    <div class="position-relative" id="passwordInput">
                                        <input [type]="password[2] ? 'text' : 'password'" class="pass-inputs form-control form-control-lg">
                                        <span tabindex="0" (click)="togglePassword(2)" (keydown.enter)="togglePassword(2)" class="isax toggle-passwords fs-14" [ngClass]="password[2] ? 'isax-eye' : 'isax-eye-slash'"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <button type="submit" class="btn btn-secondary btn-lg w-100 justify-content-center">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="become-an-instructor rounded-2 bg-primary position-relative mt-5 p-5">
            <img src="./assets/img/shapes/instructor-bg-1.png" alt="img" class="instructor-bg-1">
            <img src="./assets/img/shapes/instructor-bg-2.png" alt="img" class="instructor-bg-2">
            <div class="row align-items-center">
                <div class="col-lg-8">
                    <h3 class="text-white mb-2 mblg-3">Become an Instructor</h3>
                    <p class="text-light">Turn your expertise into impactful courses and inspire learners worldwide. Join our community of instructors and start your journey today!</p>
                </div>
                <div class="col-lg-4 d-flex justify-content-lg-end justify-content-center">
                    <a href="javascript:void(0);" class="btn btn-secondary btn-lg mt-3 mt-lg-0">Start Teaching Today</a>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- register -->` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BecomeAnExpertComponent, { className: "BecomeAnExpertComponent", filePath: "src/app/features/pages/become-an-expert/become-an-expert.component.ts", lineNumber: 11 });
})();
export {
  BecomeAnExpertComponent
};
//# sourceMappingURL=chunk-AD2W4AK3.js.map
