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
import {
  CommonService
} from "./chunk-CDB6UHUA.js";
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
  NgForOf,
  SlicePipe
} from "./chunk-YBJXKBE2.js";
import {
  Component,
  Injectable,
  Renderer2,
  ViewEncapsulation,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-5DE2SIVI.js";
import {
  __toESM
} from "./chunk-TXDUYLVM.js";

// src/app/features/home-list/home5/home5.component.ts
var AOS = __toESM(require_aos());

// src/app/features/home-list/home5/components/footer/footer.component.ts
var FooterComponent = class _FooterComponent {
  routes = routes;
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 87, vars: 12, consts: [[1, "footer", "footer-five"], ["data-aos", "fade-up", 1, "footer-three-top"], [1, "container"], [1, "footer-three-top-content"], [1, "row", "align-items-center", "gy-4"], [1, "col-lg-6"], [1, "footer-widget-three", "footer-about"], [1, "footer-three-logo"], ["src", "assets/img/logo-white.svg", "alt", "logo", 1, "img-fluid"], [1, "footer-three-about"], [1, "box-form-newsletter"], [1, "form-newsletter"], ["type", "text", "placeholder", "Enter your email here", 1, "input-newsletter", "ps-0"], [1, "btn", "btn-secondary", "font-heading", "icon-send-letter"], [1, "row", "gy-4"], [1, "col-md-6", "d-lg-flex", "justify-content-end"], [1, "footer-widget-three", "footer-menu-three", "footer-three-right"], [1, "footer-three-title"], [3, "routerLink"], [1, "footer-widget-three", "footer-menu-three"], [1, "footer-bottom-five"], [1, "row", "row-gap-3"], [1, "col-lg-4"], [1, "copyright-text"], ["href", "javascript:void(0);"], [1, "privacy-link"], [1, "mb-0", 3, "routerLink"], [1, "social-icon"], [1, "fa-brands", "fa-facebook-f"], [1, "fa-brands", "fa-instagram"], [1, "fa-brands", "fa-x-twitter"], [1, "fa-brands", "fa-youtube"], [1, "fa-brands", "fa-linkedin"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
      \u0275\u0275element(8, "img", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 9)(10, "p");
      \u0275\u0275text(11, "Platform designed to help organizations, educators, and learners manage,");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 10)(13, "form", 11);
      \u0275\u0275element(14, "input", 12);
      \u0275\u0275elementStart(15, "button", 13);
      \u0275\u0275text(16, "Subscribe");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(17, "div", 5)(18, "div", 14)(19, "div", 15)(20, "div", 16)(21, "h5", 17);
      \u0275\u0275text(22, "For Instructor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "ul")(24, "li")(25, "a", 18);
      \u0275\u0275text(26, "Profile");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "li")(28, "a", 18);
      \u0275\u0275text(29, "Login");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "li")(31, "a", 18);
      \u0275\u0275text(32, "Register");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "li")(34, "a", 18);
      \u0275\u0275text(35, "Instructor");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "li")(37, "a", 18);
      \u0275\u0275text(38, " Dashboard");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(39, "div", 15)(40, "div", 19)(41, "h5", 17);
      \u0275\u0275text(42, "For Student");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "ul")(44, "li")(45, "a", 18);
      \u0275\u0275text(46, "Profile");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "li")(48, "a", 18);
      \u0275\u0275text(49, "Login");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "li")(51, "a", 18);
      \u0275\u0275text(52, "Register");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "li")(54, "a", 18);
      \u0275\u0275text(55, "Student");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "li")(57, "a", 18);
      \u0275\u0275text(58, " Dashboard");
      \u0275\u0275elementEnd()()()()()()()()()()();
      \u0275\u0275elementStart(59, "div", 20)(60, "div", 2)(61, "div", 21)(62, "div", 22)(63, "div", 23)(64, "p");
      \u0275\u0275text(65, "Copyright 2025 \xA9 ");
      \u0275\u0275elementStart(66, "a", 24);
      \u0275\u0275text(67, "DreamsLMS");
      \u0275\u0275elementEnd();
      \u0275\u0275text(68, ". All right reserved.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(69, "div", 22)(70, "div", 25)(71, "a", 26);
      \u0275\u0275text(72, "Terms & Policy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "a", 18);
      \u0275\u0275text(74, "Privacy Policy");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(75, "div", 22)(76, "div", 27)(77, "a", 24);
      \u0275\u0275element(78, "i", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "a", 24);
      \u0275\u0275element(80, "i", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "a", 24);
      \u0275\u0275element(82, "i", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "a", 24);
      \u0275\u0275element(84, "i", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "a", 24);
      \u0275\u0275element(86, "i", 32);
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(25);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.login);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.register);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorList);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructor_dashboard);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.students_profile);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.login);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.register);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.studentsList);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.students_Dashboard);
      \u0275\u0275advance(14);
      \u0275\u0275property("routerLink", ctx.routes.page_term_condition);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.page_privacy_policy);
    }
  }, dependencies: [CommonModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer", imports: [CommonModule, RouterLink], template: '<footer class="footer footer-five">\n				\n    <!-- Footer Top -->\n    <div class="footer-three-top" data-aos="fade-up">\n        <div class="container">\n            <div class="footer-three-top-content">\n                <div class="row align-items-center gy-4">\n                    <div class="col-lg-6">\n                    \n                        <!-- Footer Widget -->\n                        <div class="footer-widget-three footer-about">\n                            <div class="footer-three-logo">\n                                <img class="img-fluid" src="assets/img/logo-white.svg" alt="logo">\n                            </div>\n                            <div class="footer-three-about">\n                                <p>Platform designed to help organizations, educators, and learners manage,</p>\n                            </div>\n                            <div class="box-form-newsletter">\n                                <form class="form-newsletter">\n                                    <input class="input-newsletter ps-0" type="text" placeholder="Enter your email here">\n                                    <button class="btn btn-secondary font-heading icon-send-letter">Subscribe</button>\n                                </form>\n                            </div>\n                        </div>\n                        <!-- /Footer Widget -->\n                        \n                    </div>\n                    <div class="col-lg-6">\n                        <div class="row gy-4">\n                            <div class="col-md-6 d-lg-flex justify-content-end">\n                                <!-- Footer Widget -->\n                                <div class="footer-widget-three footer-menu-three footer-three-right">\n                                    <h5 class="footer-three-title">For Instructor</h5>\n                                    <ul>\n                                        <li><a [routerLink]="routes.instructorProfile">Profile</a></li>\n                                        <li><a [routerLink]="routes.login">Login</a></li>\n                                        <li><a [routerLink]="routes.register">Register</a></li>\n                                        <li><a [routerLink]="routes.instructorList">Instructor</a></li>\n                                        <li><a [routerLink]="routes.instructor_dashboard"> Dashboard</a></li>\n                                    </ul>\n                                </div>\n                                <!-- /Footer Widget -->\n                            </div>\n                            <div class="col-md-6 d-lg-flex justify-content-end">\n                                <!-- Footer Widget -->\n                                <div class="footer-widget-three footer-menu-three">\n                                    <h5 class="footer-three-title">For Student</h5>\n                                    <ul>\n                                        <li><a [routerLink]="routes.students_profile">Profile</a></li>\n                                        <li><a [routerLink]="routes.login">Login</a></li>\n                                        <li><a [routerLink]="routes.register">Register</a></li>\n                                        <li><a [routerLink]="routes.studentsList">Student</a></li>\n                                        <li><a [routerLink]="routes.students_Dashboard"> Dashboard</a></li>\n                                    </ul>\n                                </div>\n                                <!-- /Footer Widget -->\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>						\n        </div>\n    </div>\n    <!-- /Footer Top -->\n    \n    <div class="footer-bottom-five">\n        <div class="container">\n        \n            <!-- Copyright -->\n            <div class="row row-gap-3">\n                <div class="col-lg-4">\n                    <div class="copyright-text">\n                        <p>Copyright 2025 \xA9 <a href="javascript:void(0);">DreamsLMS</a>. All right reserved.</p>\n                    </div>\n                </div>\n                <div class="col-lg-4">\n                    <div class="privacy-link">\n                        <a [routerLink]="routes.page_term_condition" class="mb-0">Terms &amp; Policy</a>\n                        <a [routerLink]="routes.page_privacy_policy">Privacy Policy</a>\n                    </div>\n                </div>\n                <div class="col-lg-4">\n                    <div class="social-icon">\n                        <a href="javascript:void(0);"><i class="fa-brands fa-facebook-f"></i></a>\n                        <a href="javascript:void(0);"><i class="fa-brands fa-instagram"></i></a>\n                        <a href="javascript:void(0);"><i class="fa-brands fa-x-twitter"></i></a>\n                        <a href="javascript:void(0);"><i class="fa-brands fa-youtube"></i></a>\n                        <a href="javascript:void(0);"><i class="fa-brands fa-linkedin"></i></a>\n                    </div>\n                </div>\n            </div>\n            <!-- /Copyright -->\n            \n        </div>\n    </div>\n    \n</footer>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/features/home-list/home5/components/footer/footer.component.ts", lineNumber: 12 });
})();

// src/app/features/home-list/home5/components/data.ts
var HomeData = class _HomeData {
  counter = [
    {
      id: 1,
      class: "text-blue",
      counter: 10,
      title: "Online Courses",
      end: "K"
    },
    {
      id: 2,
      class: "text-yellow",
      counter: 200,
      title: "Expert Tutors",
      end: "+"
    },
    {
      id: 3,
      class: "text-info",
      counter: 6,
      title: "Ceritified Courses",
      end: "K+"
    },
    {
      id: 4,
      class: "text-green",
      counter: 60,
      title: "Online Students",
      end: "K +"
    }
  ];
  favourite = [
    {
      id: 1,
      title: "Angular Development"
    },
    {
      id: 2,
      title: "Pyhton Development"
    },
    {
      id: 3,
      title: "NODE JS Development"
    },
    {
      id: 4,
      title: "Laravel Development"
    },
    {
      id: 5,
      title: "PHP Development"
    },
    {
      id: 6,
      title: "Docker Development"
    }
  ];
  tab1 = [
    {
      courseimg: "course-26.jpg",
      avatar: "user1.jpg",
      title: "Personalized Learning",
      content: "Build Responsive Websites with HTML",
      students: "450",
      currentamt: "$650"
    },
    {
      courseimg: "course-27.jpg",
      avatar: "user2.jpg",
      title: "Pyhton Development",
      content: "The Complete Web Developer PHP Course",
      students: "500",
      currentamt: "$650"
    },
    {
      courseimg: "course-20.jpg",
      avatar: "user3.jpg",
      title: "Business Management",
      content: "The Complete Business Management Course",
      students: "400",
      currentamt: "$300"
    },
    {
      courseimg: "course-21.jpg",
      avatar: "user4.jpg",
      title: "Creative Arts & media",
      content: "Build Creative Arts & media Course Completed",
      students: "250",
      currentamt: "$700"
    },
    {
      courseimg: "course-22.jpg",
      avatar: "user5.jpg",
      title: "Personalized Learning",
      content: "Build Responsive Websites with HTML",
      students: "400",
      currentamt: "$650"
    },
    {
      courseimg: "course-23.jpg",
      avatar: "user6.jpg",
      title: "Pyhton Development",
      content: "The Complete Pyhton Development Course",
      students: "600",
      currentamt: "free"
    },
    {
      courseimg: "course-24.jpg",
      avatar: "user7.jpg",
      title: "Business Management",
      content: "Build Websites with HTML5 CSS3 Javascript",
      students: "400",
      currentamt: "$650"
    },
    {
      courseimg: "course-25.jpg",
      avatar: "user8.jpg",
      title: "Creative Arts & media",
      content: "Build Responsive Websites with HTML",
      students: "431",
      currentamt: "$3000"
    }
  ];
  tab2 = [
    {
      courseimg: "course-21.jpg",
      avatar: "user4.jpg",
      title: "Creative Arts & media",
      content: "Build Creative Arts & media Course Completed",
      students: "250",
      currentamt: "$700"
    },
    {
      courseimg: "course-22.jpg",
      avatar: "user5.jpg",
      title: "Personalized Learning",
      content: "Build Responsive Websites with HTML",
      students: "400",
      currentamt: "$650"
    },
    {
      courseimg: "course-23.jpg",
      avatar: "user6.jpg",
      title: "Pyhton Development",
      content: "The Complete Pyhton Development Course",
      students: "600",
      currentamt: "free"
    },
    {
      courseimg: "course-26.jpg",
      avatar: "user1.jpg",
      title: "Personalized Learning",
      content: "Build Responsive Websites with HTML",
      students: "450",
      currentamt: "$650"
    },
    {
      courseimg: "course-27.jpg",
      avatar: "user2.jpg",
      title: "Pyhton Development",
      content: "The Complete Web Developer PHP Course",
      students: "500",
      currentamt: "$650"
    },
    {
      courseimg: "course-20.jpg",
      avatar: "user3.jpg",
      title: "Business Management",
      content: "The Complete Business Management Course",
      students: "400",
      currentamt: "$300"
    },
    {
      courseimg: "course-24.jpg",
      avatar: "user7.jpg",
      title: "Business Management",
      content: "Build Websites with HTML5 CSS3 Javascript",
      students: "400",
      currentamt: "$650"
    },
    {
      courseimg: "course-25.jpg",
      avatar: "user8.jpg",
      title: "Creative Arts & media",
      content: "Build Responsive Websites with HTML",
      students: "431",
      currentamt: "$3000"
    }
  ];
  tab3 = [
    {
      courseimg: "course-20.jpg",
      avatar: "user3.jpg",
      title: "Business Management",
      content: "The Complete Business Management Course",
      students: "400",
      currentamt: "$300"
    },
    {
      courseimg: "course-21.jpg",
      avatar: "user4.jpg",
      title: "Creative Arts & media",
      content: "Build Creative Arts & media Course Completed",
      students: "250",
      currentamt: "$700"
    },
    {
      courseimg: "course-22.jpg",
      avatar: "user5.jpg",
      title: "Personalized Learning",
      content: "Build Responsive Websites with HTML",
      students: "400",
      currentamt: "$650"
    },
    {
      courseimg: "course-23.jpg",
      avatar: "user6.jpg",
      title: "Pyhton Development",
      content: "The Complete Pyhton Development Course",
      students: "600",
      currentamt: "free"
    },
    {
      courseimg: "course-24.jpg",
      avatar: "user7.jpg",
      title: "Business Management",
      content: "Build Websites with HTML5 CSS3 Javascript",
      students: "400",
      currentamt: "$650"
    },
    {
      courseimg: "course-26.jpg",
      avatar: "user1.jpg",
      title: "Personalized Learning",
      content: "Build Responsive Websites with HTML",
      students: "450",
      currentamt: "$650"
    },
    {
      courseimg: "course-27.jpg",
      avatar: "user2.jpg",
      title: "Pyhton Development",
      content: "The Complete Web Developer PHP Course",
      students: "500",
      currentamt: "$650"
    },
    {
      courseimg: "course-25.jpg",
      avatar: "user8.jpg",
      title: "Creative Arts & media",
      content: "Build Responsive Websites with HTML",
      students: "431",
      currentamt: "$3000"
    }
  ];
  tab4 = [
    {
      courseimg: "course-23.jpg",
      avatar: "user6.jpg",
      title: "Pyhton Development",
      content: "The Complete Pyhton Development Course",
      students: "600",
      currentamt: "free"
    },
    {
      courseimg: "course-24.jpg",
      avatar: "user7.jpg",
      title: "Business Management",
      content: "Build Websites with HTML5 CSS3 Javascript",
      students: "400",
      currentamt: "$650"
    },
    {
      courseimg: "course-25.jpg",
      avatar: "user8.jpg",
      title: "Creative Arts & media",
      content: "Build Responsive Websites with HTML",
      students: "431",
      currentamt: "$3000"
    },
    {
      courseimg: "course-26.jpg",
      avatar: "user1.jpg",
      title: "Personalized Learning",
      content: "Build Responsive Websites with HTML",
      students: "450",
      currentamt: "$650"
    },
    {
      courseimg: "course-27.jpg",
      avatar: "user2.jpg",
      title: "Pyhton Development",
      content: "The Complete Web Developer PHP Course",
      students: "500",
      currentamt: "$650"
    },
    {
      courseimg: "course-20.jpg",
      avatar: "user3.jpg",
      title: "Business Management",
      content: "The Complete Business Management Course",
      students: "400",
      currentamt: "$300"
    },
    {
      courseimg: "course-21.jpg",
      avatar: "user4.jpg",
      title: "Creative Arts & media",
      content: "Build Creative Arts & media Course Completed",
      students: "250",
      currentamt: "$700"
    },
    {
      courseimg: "course-22.jpg",
      avatar: "user5.jpg",
      title: "Personalized Learning",
      content: "Build Responsive Websites with HTML",
      students: "400",
      currentamt: "$650"
    }
  ];
  tab5 = [
    {
      courseimg: "course-27.jpg",
      avatar: "user2.jpg",
      title: "Pyhton Development",
      content: "The Complete Web Developer PHP Course",
      students: "500",
      currentamt: "$650"
    },
    {
      courseimg: "course-20.jpg",
      avatar: "user3.jpg",
      title: "Business Management",
      content: "The Complete Business Management Course",
      students: "400",
      currentamt: "$300"
    },
    {
      courseimg: "course-21.jpg",
      avatar: "user4.jpg",
      title: "Creative Arts & media",
      content: "Build Creative Arts & media Course Completed",
      students: "250",
      currentamt: "$700"
    },
    {
      courseimg: "course-26.jpg",
      avatar: "user1.jpg",
      title: "Personalized Learning",
      content: "Build Responsive Websites with HTML",
      students: "450",
      currentamt: "$650"
    },
    {
      courseimg: "course-22.jpg",
      avatar: "user5.jpg",
      title: "Personalized Learning",
      content: "Build Responsive Websites with HTML",
      students: "400",
      currentamt: "$650"
    },
    {
      courseimg: "course-23.jpg",
      avatar: "user6.jpg",
      title: "Pyhton Development",
      content: "The Complete Pyhton Development Course",
      students: "600",
      currentamt: "free"
    },
    {
      courseimg: "course-24.jpg",
      avatar: "user7.jpg",
      title: "Business Management",
      content: "Build Websites with HTML5 CSS3 Javascript",
      students: "400",
      currentamt: "$650"
    },
    {
      courseimg: "course-25.jpg",
      avatar: "user8.jpg",
      title: "Creative Arts & media",
      content: "Build Responsive Websites with HTML",
      students: "431",
      currentamt: "$3000"
    }
  ];
  tab6 = [
    {
      courseimg: "course-25.jpg",
      avatar: "user8.jpg",
      title: "Creative Arts & media",
      content: "Build Responsive Websites with HTML",
      students: "431",
      currentamt: "$3000"
    },
    {
      courseimg: "course-26.jpg",
      avatar: "user1.jpg",
      title: "Personalized Learning",
      content: "Build Responsive Websites with HTML",
      students: "450",
      currentamt: "$650"
    },
    {
      courseimg: "course-27.jpg",
      avatar: "user2.jpg",
      title: "Pyhton Development",
      content: "The Complete Web Developer PHP Course",
      students: "500",
      currentamt: "$650"
    },
    {
      courseimg: "course-20.jpg",
      avatar: "user3.jpg",
      title: "Business Management",
      content: "The Complete Business Management Course",
      students: "400",
      currentamt: "$300"
    },
    {
      courseimg: "course-21.jpg",
      avatar: "user4.jpg",
      title: "Creative Arts & media",
      content: "Build Creative Arts & media Course Completed",
      students: "250",
      currentamt: "$700"
    },
    {
      courseimg: "course-22.jpg",
      avatar: "user5.jpg",
      title: "Personalized Learning",
      content: "Build Responsive Websites with HTML",
      students: "400",
      currentamt: "$650"
    },
    {
      courseimg: "course-23.jpg",
      avatar: "user6.jpg",
      title: "Pyhton Development",
      content: "The Complete Pyhton Development Course",
      students: "600",
      currentamt: "free"
    },
    {
      courseimg: "course-24.jpg",
      avatar: "user7.jpg",
      title: "Business Management",
      content: "Build Websites with HTML5 CSS3 Javascript",
      students: "400",
      currentamt: "$650"
    }
  ];
  tab7 = [
    {
      courseimg: "course-26.jpg",
      avatar: "user1.jpg",
      title: "Personalized Learning",
      content: "Build Responsive Websites with HTML",
      students: "450",
      currentamt: "$650"
    },
    {
      courseimg: "course-27.jpg",
      avatar: "user2.jpg",
      title: "Pyhton Development",
      content: "The Complete Web Developer PHP Course",
      students: "500",
      currentamt: "$650"
    },
    {
      courseimg: "course-23.jpg",
      avatar: "user6.jpg",
      title: "Pyhton Development",
      content: "The Complete Pyhton Development Course",
      students: "600",
      currentamt: "free"
    },
    {
      courseimg: "course-24.jpg",
      avatar: "user7.jpg",
      title: "Business Management",
      content: "Build Websites with HTML5 CSS3 Javascript",
      students: "400",
      currentamt: "$650"
    },
    {
      courseimg: "course-25.jpg",
      avatar: "user8.jpg",
      title: "Creative Arts & media",
      content: "Build Responsive Websites with HTML",
      students: "431",
      currentamt: "$3000"
    },
    {
      courseimg: "course-20.jpg",
      avatar: "user3.jpg",
      title: "Business Management",
      content: "The Complete Business Management Course",
      students: "400",
      currentamt: "$300"
    },
    {
      courseimg: "course-21.jpg",
      avatar: "user4.jpg",
      title: "Creative Arts & media",
      content: "Build Creative Arts & media Course Completed",
      students: "250",
      currentamt: "$700"
    },
    {
      courseimg: "course-22.jpg",
      avatar: "user5.jpg",
      title: "Personalized Learning",
      content: "Build Responsive Websites with HTML",
      students: "400",
      currentamt: "$650"
    }
  ];
  trending_course = [
    {
      badge: "Personalized Learning",
      title: "Build Responsive Websites with HTML",
      students: "400",
      time: "6hr 30min",
      rate: "300",
      avator: "avatar-04.jpg",
      class: "trending-bg-one"
    },
    {
      badge: "Pyhton Development",
      title: "The Complete PHP Framework Course 2.0",
      students: "900",
      time: "9hr 30min",
      rate: "800",
      avator: "avatar-05.jpg",
      class: "trending-bg-two"
    },
    {
      badge: "Business Management",
      title: "The Complete Business Management Course",
      students: "400",
      time: "6hr 30min",
      rate: "300",
      avator: "avatar-06.jpg",
      class: "trending-bg-three"
    },
    {
      badge: "Creative Arts & media",
      title: "Build Creative Arts & Course Completed",
      students: "900",
      time: "4hr 30min",
      rate: "200",
      avator: "avatar-07.jpg",
      class: "trending-bg-four"
    },
    {
      badge: "Personalized Learning",
      title: "Build Responsive Websites with HTML",
      students: "600",
      time: "6hr 30min",
      rate: "200",
      avator: "avatar-08.jpg",
      class: "trending-bg-one"
    },
    {
      badge: "Pyhton Development",
      title: "The Complete PHP Framework Course 2.0",
      students: "800",
      time: "3hr 30min",
      rate: "800",
      avator: "avatar-09.jpg",
      class: "trending-bg-two"
    },
    {
      badge: "Business Management",
      title: "The Complete Business Management Course",
      students: "700",
      time: "4hr 30min",
      rate: "400",
      avator: "avatar-10.jpg",
      class: "trending-bg-three"
    },
    {
      badge: "Creative Arts & media",
      title: "Build Creative Arts & Course Completed",
      students: "600",
      time: "5hr 30min",
      rate: "400",
      avator: "avatar-02.jpg",
      class: "trending-bg-four"
    }
  ];
  swiper = [
    {
      rating: "4.1",
      avatar: "avatar-02.jpg",
      name: "Jeff J. Sparrow",
      role: "Designer"
    },
    {
      rating: "4.8",
      avatar: "avatar-05.jpg",
      name: "Noah Aarons",
      role: "Business Man"
    },
    {
      rating: "4.5",
      avatar: "avatar-01.jpg",
      name: "Martin Harn",
      role: "Docker Development"
    }
  ];
  static \u0275fac = function HomeData_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeData)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HomeData, factory: _HomeData.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeData, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/features/home-list/home5/home5.component.ts
var _c0 = () => ({ enableScrollSpy: true });
var _c1 = () => [1, 2, 3, 4];
var _c2 = () => [1, 2, 3, 4, 5];
function Home5Component_ng_template_2886_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 343)(1, "div", 344);
    \u0275\u0275element(2, "img", 345);
    \u0275\u0275elementEnd()();
  }
}
function Home5Component_ng_template_2887_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 343)(1, "div", 344);
    \u0275\u0275element(2, "img", 346);
    \u0275\u0275elementEnd()();
  }
}
function Home5Component_ng_template_2888_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 343)(1, "div", 344);
    \u0275\u0275element(2, "img", 347);
    \u0275\u0275elementEnd()();
  }
}
function Home5Component_ng_template_2889_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 343)(1, "div", 344);
    \u0275\u0275element(2, "img", 348);
    \u0275\u0275elementEnd()();
  }
}
function Home5Component_ng_template_2890_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 343)(1, "div", 344);
    \u0275\u0275element(2, "img", 349);
    \u0275\u0275elementEnd()();
  }
}
function Home5Component_ng_template_2891_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 343)(1, "div", 344);
    \u0275\u0275element(2, "img", 350);
    \u0275\u0275elementEnd()();
  }
}
function Home5Component_ng_container_2909_ng_template_1_i_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 364);
  }
}
function Home5Component_ng_container_2909_ng_template_1_i_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 365);
  }
}
function Home5Component_ng_container_2909_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 351)(1, "div", 352);
    \u0275\u0275element(2, "img", 353);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 354)(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 355)(7, "div", 356);
    \u0275\u0275template(8, Home5Component_ng_container_2909_ng_template_1_i_8_Template, 1, 0, "i", 357);
    \u0275\u0275pipe(9, "slice");
    \u0275\u0275template(10, Home5Component_ng_container_2909_ng_template_1_i_10_Template, 1, 0, "i", 358);
    \u0275\u0275pipe(11, "slice");
    \u0275\u0275elementStart(12, "p", 359);
    \u0275\u0275text(13);
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "ratings");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 360)(17, "div", 361);
    \u0275\u0275element(18, "img", 362);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 363)(20, "h6");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const testimonial_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(testimonial_r1.content);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(9, 8, \u0275\u0275pureFunction0(16, _c1), 0, testimonial_r1.rating));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(11, 12, \u0275\u0275pureFunction0(17, _c2), testimonial_r1.rating, 5));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(testimonial_r1.rating);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", \u0275\u0275interpolate(testimonial_r1.user.image), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(testimonial_r1.user.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(testimonial_r1.user.role);
  }
}
function Home5Component_ng_container_2909_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Home5Component_ng_container_2909_ng_template_1_Template, 24, 18, "ng-template", 309);
    \u0275\u0275elementContainerEnd();
  }
}
var Home5Component = class _Home5Component {
  common;
  router;
  data;
  renderer;
  selected = "1";
  counter = [];
  favourite = [];
  tab1 = [];
  tab2 = [];
  tab3 = [];
  tab4 = [];
  tab5 = [];
  tab6 = [];
  tab7 = [];
  trending_course = [];
  swiper = [];
  routes = routes;
  base = "";
  page = "";
  last = "";
  constructor(common, router, data, renderer) {
    this.common = common;
    this.router = router;
    this.data = data;
    this.renderer = renderer;
    this.counter = this.data.counter;
    this.favourite = this.data.favourite;
    this.tab1 = this.data.tab1;
    this.tab2 = this.data.tab2;
    this.tab3 = this.data.tab3;
    this.tab4 = this.data.tab4;
    this.tab5 = this.data.tab5;
    this.tab6 = this.data.tab6;
    this.tab7 = this.data.tab7;
    this.trending_course = this.data.trending_course;
    this.swiper = this.data.swiper;
    this.common.base.subscribe((base) => {
      this.base = base;
    });
    this.common.page.subscribe((page) => {
      this.page = page;
    });
    this.common.last.subscribe((last) => {
      this.last = last;
    });
    if (this.base == "home-three") {
      this.renderer.addClass(document.body, "select-home-three");
    }
  }
  ngOnInit() {
    AOS.init({
      duration: 1200,
      once: true
    });
  }
  customOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    // Equivalent to Swiper's pagination
    nav: true,
    // Equivalent to Swiper's navigation
    navText: ['<div class="testimonial-next-pre"><i class="fas fa-arrow-left"></i></div>', '<div class="testimonial-next-pre"><i class="fas fa-arrow-right"></i></div>'],
    // Custom navigation icons
    items: 1,
    // Equivalent to slidesPerView: 1
    margin: 10,
    // Equivalent to spaceBetween: 10
    center: true,
    // For coverflow-like effect
    stagePadding: 0,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1e3: { items: 1 }
    }
  };
  testimonials = [
    {
      content: "I\u2019ve become more organized, confident, and focused thanks to my life coach. They helped me set realistic goals and break them down into actionable steps. I\u2019ve accomplished so much already!",
      rating: 4.5,
      user: { name: "Jeff J. Sparrow", role: "Designer", image: "assets/img/user/user-01.jpg" }
    },
    {
      content: "As a writer, I\u2019ve learned so much about structure and storytelling from my mentor. Their feedback helped me tighten up my writing and make my characters more compelling.",
      rating: 4.5,
      user: { name: "Martin Harn", role: "Docker Development", image: "assets/img/user/user-02.jpg" }
    },
    {
      content: "I often felt like the mentor\u2019s answers were too detailed, which made it hard for me to keep up. Sometimes, a simpler explanation would have helped me understand things faster.",
      rating: 4.8,
      user: { name: "Noah Aarons", role: "Business Man", image: "assets/img/user/user-03.jpg" }
    }
  ];
  favouriteCarousel = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 5,
    arrows: false,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
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
  trendingcrouses = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
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
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
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
  brandoption2 = {
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
      1170: {
        items: 6,
        dots: false
      }
    }
  };
  //   config1: SwiperOptions = {
  // 	effect: "coverflow",
  // 	loop: false,
  // 	grabCursor: true,
  // 	centeredSlidesBounds:true,
  // 	centeredSlides: true,
  // 	slidesPerView: "auto",
  // 	initialSlide: 2,
  // 	navigation: {
  // 		prevEl: '.slide-prev-btn',
  // 		nextEl: '.slide-next-btn',
  // 	},
  // 	coverflowEffect: {
  // 	rotate: 0,
  // 	stretch: 0,
  // 	depth: 100,
  // 	modifier: 10,
  // 	slideShadows: true
  // 	},
  // 	pagination: {
  // 	el: ".swiper-pagination",
  // 	clickable: true
  // 	}
  //   }
  directPath() {
    this.router.navigate(["/pages/course/course-list"]);
  }
  toggleClass(slide) {
    slide.active = !slide.active;
  }
  ngOnDestroy() {
    this.renderer.removeClass(document.body, "select-home-three");
  }
  //   config: SwiperOptions = {
  // 	effect: 'coverflow',
  // 	direction: 'horizontal',
  // 	loop: false,
  // 	grabCursor: true,
  // 	centeredSlides: true,
  // 	slidesPerView: 'auto',
  // 	initialSlide: 2,
  // 	// spaceBetween: 100,
  // 	speed: 400,
  // 	navigation: {
  // 	  prevEl: '.slide-prev-btn',
  // 	  nextEl: '.slide-next-btn',
  // 	},
  // 	pagination: {
  // 	  clickable: true,
  // 	  el: '.swiper-pagination',
  // 	},
  // 	// scrollbar: { draggable: true },
  // 	coverflowEffect: {
  // 	  rotate: 0,
  // 	  stretch: 0,
  // 	  depth: 100,
  // 	  modifier: 10,
  // 	  slideShadows: true,
  // 	},
  //   };
  onSubmit() {
    this.router.navigate([routes.courseList]);
  }
  static \u0275fac = function Home5Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Home5Component)(\u0275\u0275directiveInject(CommonService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HomeData), \u0275\u0275directiveInject(Renderer2));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Home5Component, selectors: [["app-home5"]], decls: 3032, vars: 255, consts: [[1, "banner-five"], [1, "container"], [1, "row", "align-items-center"], ["data-aos", "fade-down", 1, "col-xl-6", "col-lg-7", "col-md-12", "d-flex", "col-12"], [1, "home-five-slide-face", "flex-fill"], [1, "home-five-slide-text"], [1, "text-white", "d-inline-block", "bg-secondary", "small", "rounded-pill", "px-3", "py-2", "mb-3", "mb-sm-4"], [1, "badge", "bg-white", "text-secondary", "rounded-pill", "me-1"], [1, "banner-three-content"], [1, "form", 3, "ngSubmit"], [1, "form-inner-three"], [1, "input-group", "justify-content-between"], [1, "d-flex", "flex-wrap", "gap-3"], [1, "drop-detail-three", "form-three-select"], ["placeholder", "Select category", 1, "custom-mat-select", "select"], ["value", "1"], [1, "d-flex", "align-items-center", "banner-search5", "flex-fill"], [1, "search-icon5"], [1, "fa-regular", "fa-building"], ["type", "email", "placeholder", "Search for Courses, Instructors", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "sub-btn"], [1, "fas", "fa-arrow-right"], ["data-aos", "fade-up", 1, "offset-lg-1", "col-lg-5", "col-12", "text-center"], [1, "banner-slide-img", "flex-fill", "aos"], ["src", "assets/img/hero/hero-6.png", "alt", "Img", 1, "img-fluid", "ps-lg-5"], [1, "section", "student-course", "student-course-five"], [1, "course-widget-three"], [1, "row", "row-gap-4"], ["data-aos", "fade-up", 1, "col-lg-3", "col-md-6", "d-flex"], [1, "course-details-three"], [1, "align-items-center"], [1, "course-count-three", "course-count", "ms-0"], [1, "course-img"], ["src", "assets/img/icon/course-01.svg", "alt", "Img", 1, "img-fluid"], [1, "course-content-three"], [1, "text-info"], [1, "counterUp", 3, "countUp", "options"], ["src", "assets/img/icon/course-02.svg", "alt", "Img", 1, "img-fluid"], [1, "text-warning"], ["src", "assets/img/icon/course-03.svg", "alt", "Img", 1, "img-fluid"], [1, "text-skyblue"], [1, "course-details-three", "mb-0"], [1, "course-count-three"], ["src", "assets/img/icon/course-04.svg", "alt", "Img", 1, "img-fluid"], [1, "course-content-three", "course-count"], [1, "text-success"], [1, "master-skill-three"], ["data-aos", "fade-up", 1, "col-xl-5", "col-lg-6", "col-md-12"], [1, "master-three-images"], [1, "master-img"], ["src", "assets/img/shapes/shape-10.svg", "alt", "img", 1, "img-fluid", "master-bg1"], ["src", "assets/img/shapes/shape-7.svg", "alt", "img", 1, "img-fluid", "master-bg2"], ["src", "assets/img/feature/feature-10.jpg", "alt", "img", 1, "img-fluid", "master-skill-image1"], [1, "text-end"], ["src", "assets/img/feature/feature-11.jpg", "alt", "img", 1, "img-fluid", "master-skill-image2"], ["data-aos", "fade-up", 1, "col-xl-7", "col-lg-6", "col-md-12"], [1, "master-skill-content"], ["data-aos", "fade-up", 1, "home-five-head"], ["data-aos", "fade-up", 1, "home-five-content"], [1, "skils-group"], ["data-aos", "fade-down", 1, "col-lg-6", "col-xs-12", "col-sm-6"], [1, "skils-icon-item"], [1, "skils-icon"], ["src", "assets/img/icon/career-01.svg", "alt", "certified", 1, "img-fluid"], [1, "skils-content"], [1, "mb-2"], [1, "mb-0"], ["data-aos", "fade-up", 1, "col-lg-6", "col-xs-12", "col-sm-6"], ["src", "assets/img/icon/career-02.svg", "alt", "Build skills", 1, "img-fluid"], ["src", "assets/img/icon/career-03.svg", "alt", "Stay Motivated", 1, "img-fluid"], ["src", "assets/img/icon/career-04.svg", "alt", "latest cloud", 1, "img-fluid"], [1, "home-five-favourite"], [1, "category-sec"], [1, "row"], ["data-aos", "fade-up", 1, "home-five-head", "section-header-title"], [1, "row", "align-items-center", "d-flex", "justify-content-between", "row-gap-4"], [1, "col-md-8", "col-sm-12"], [1, "col-md-4", "col-sm-12"], [1, "see-all", "text-end"], [3, "routerLink"], [1, "fas", "fa-arrow-right", "ms-2"], [1, "favourite-carousel"], [3, "config"], ["data-aos", "fade-down", "ngxSlickItem", "", 1, "categories-item", "categories-item-five"], [1, "favourite-item", "flex-fill"], [1, "categories-icon"], ["src", "assets/img/icon/favourite-01.svg", "alt", "Angular Development", 1, "img-fluid"], [1, "category-info"], [1, "instructors-info"], [1, "me-4"], [1, "instructors-list"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "", "data-bs-original-title", "leader 1"], ["src", "assets/img/user/user-13.jpg", "alt", "img"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "", "data-bs-original-title", "leader 2"], ["src", "assets/img/user/user-14.jpg", "alt", "img"], ["href", "javascript:void(0);", "data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "", "data-bs-original-title", "leader 3"], ["src", "assets/img/user/user-15.jpg", "alt", "img"], [1, "more-set"], ["href", "javascript:void(0);"], ["src", "assets/img/icon/favourite-02.svg", "alt", "Angular Development", 1, "img-fluid"], ["src", "assets/img/user/user-10.jpg", "alt", "img"], ["src", "assets/img/user/user-11.jpg", "alt", "img"], ["src", "assets/img/user/user-12.jpg", "alt", "img"], ["src", "assets/img/icon/favourite-03.svg", "alt", "NODE JS Development", 1, "img-fluid"], ["src", "assets/img/user/user-07.jpg", "alt", "img"], ["src", "assets/img/user/user-08.jpg", "alt", "img"], ["src", "assets/img/user/user-09.jpg", "alt", "img"], ["src", "assets/img/icon/favourite-04.svg", "alt", "NODE JS Development", 1, "img-fluid"], ["src", "assets/img/user/user-04.jpg", "alt", "img"], ["src", "assets/img/user/user-05.jpg", "alt", "img"], ["src", "assets/img/user/user-06.jpg", "alt", "img"], ["src", "assets/img/icon/favourite-05.svg", "alt", "Angular Development", 1, "img-fluid"], ["src", "assets/img/user/user-01.jpg", "alt", "img"], ["src", "assets/img/user/user-02.jpg", "alt", "img"], ["src", "assets/img/user/user-03.jpg", "alt", "img"], [1, "home-five-courses"], [1, "favourite-course-sec"], [1, "col-md-6"], [1, "all-corses-main"], [1, "tab-content"], ["role", "tablist", 1, "nav", "tablist-three"], ["data-bs-toggle", "tab", "href", "#alltab", "role", "tab", 1, "nav-tab", "active", "me-3"], ["data-bs-toggle", "tab", "href", "#mostpopulartab", "role", "tab", 1, "nav-tab", "me-3"], ["data-bs-toggle", "tab", "href", "#businesstab", "role", "tab", 1, "nav-tab", "me-3"], ["data-bs-toggle", "tab", "href", "#designtab", "role", "tab", 1, "nav-tab", "me-3"], ["data-bs-toggle", "tab", "href", "#programmingtab", "role", "tab", 1, "nav-tab", "me-3"], ["data-bs-toggle", "tab", "href", "#databasetab", "role", "tab", 1, "nav-tab", "me-3"], ["id", "alltab", "role", "tabpanel", 1, "tab-pane", "fade", "active", "show"], [1, "all-course"], ["data-aos", "fade-up", 1, "col-xl-3", "col-lg-6", "col-md-6", "col-12"], [1, "course-item", "course-item-five"], ["src", "assets/img/course/course-35.jpg", "alt", "Img", 1, "img-fluid"], [1, "course-content"], [1, "course-user-img"], ["src", "assets/img/user/user-02.jpg", "alt", "Img", 1, "img-fluid"], [1, "course-three-text"], [1, "title", "instructor-text"], [1, "student-counts-info", "d-flex", "align-items-center"], ["src", "assets/img/icon/student.svg", "alt", "Img"], [1, "ms-2"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "course-price"], [1, "d-flex", "align-items-center"], [1, "fa-regular", "fa-clock", "me-2"], ["src", "assets/img/course/course-34.jpg", "alt", "Img", 1, "img-fluid"], ["src", "assets/img/user/user-01.jpg", "alt", "Img", 1, "img-fluid"], ["src", "assets/img/course/course-28.jpg", "alt", "Img", 1, "img-fluid"], ["src", "assets/img/user/user-03.jpg", "alt", "Img", 1, "img-fluid"], ["src", "assets/img/course/course-29.jpg", "alt", "Img", 1, "img-fluid"], ["src", "assets/img/user/user-04.jpg", "alt", "Img", 1, "img-fluid"], ["src", "assets/img/course/course-30.jpg", "alt", "Img", 1, "img-fluid"], ["src", "assets/img/user/user-05.jpg", "alt", "Img", 1, "img-fluid"], ["src", "assets/img/course/course-31.jpg", "alt", "Img", 1, "img-fluid"], ["src", "assets/img/user/user-06.jpg", "alt", "Img", 1, "img-fluid"], ["src", "assets/img/course/course-32.jpg", "alt", "Img", 1, "img-fluid"], ["src", "assets/img/user/user-07.jpg", "alt", "Img", 1, "img-fluid"], ["src", "assets/img/course/course-33.jpg", "alt", "Img", 1, "img-fluid"], ["src", "assets/img/user/user-08.jpg", "alt", "Img", 1, "img-fluid"], ["id", "mostpopulartab", 1, "tab-pane", "fade"], [1, "course-box-three"], [1, "course-three-item"], [1, "course-three-img"], ["alt", "Img", "src", "assets/img/course/course-34.jpg", 1, "img-fluid"], [1, "heart-three"], [1, "fa-regular", "fa-heart"], [1, "course-three-content"], [1, "course-group-three"], [1, "group-three-img"], [1, "students-three-counts", "d-flex", "align-items-center"], [1, "price-three-group", "d-flex", "align-items-center", "justify-content-between", "justify-content-between"], [1, "price-three-view", "d-flex", "align-items-center"], [1, "course-price-three"], [1, "price-three-time", "d-inline-flex", "align-items-center"], ["alt", "Img", "src", "assets/img/course/course-35.jpg", 1, "img-fluid"], [1, "price-three-group", "d-flex", "align-items-center", "justify-content-between"], ["alt", "Img", "src", "assets/img/course/course-28.jpg", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/course/course-29.jpg", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/course/course-30.jpg", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/course/course-31.jpg", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/course/course-32.jpg", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/course/course-33.jpg", 1, "img-fluid"], ["id", "businesstab", 1, "tab-pane", "fade"], ["id", "designtab", 1, "tab-pane", "fade"], ["id", "musictab", 1, "tab-pane", "fade"], ["id", "programmingtab", 1, "tab-pane", "fade"], ["id", "databasetab", 1, "tab-pane", "fade"], [1, "text-center", "mt-3"], [1, "btn", "btn-secondary", 3, "routerLink"], [1, "home-five-transform"], ["data-aos", "fade-up", 1, "container"], [1, "row", "align-items-center", "row-gap-4"], [1, "col-lg-9", "col-md-8", "col-sm-12"], [1, "cta-content"], [1, "col-lg-3", "col-md-4", "col-sm-12"], [1, "transform-button-three"], [1, "home-five-goals"], [1, "row", "align-items-center", "justify-content-center", "row-gap-4"], ["data-aos", "fade-down", 1, "col-xl-3", "col-lg-12", "col-md-12"], [1, "acheive-goals-main"], ["data-aos", "fade-down", 1, "col-xl-3", "col-lg-4", "col-md-4", "col-12"], [1, "acheive-goals"], [1, "acheive-elips-one"], ["src", "assets/img/icon/ellipse-1.svg", "alt", "Img"], [1, "acheive-goals-content", "text-center", "course-count", "ms-0"], [1, "acheive-elips-two"], ["src", "assets/img/icon/ellipse-2.svg", "alt", "Img"], [1, "acheive-elips-three"], ["src", "assets/img/icon/ellipse-3.svg", "alt", "Img"], [1, "accelerate-cloud-three"], [1, "shapes-three-left"], ["src", "assets/img/shapes/shape-8.png", "alt", "Img", 1, "accelerate-three"], ["src", "assets/img/shapes/shape-9.png", "alt", "Img", 1, "accelerate-five"], ["data-aos", "fade-up", 1, "section-header-title", "d-none"], [1, "row", "align-items-center", "d-flex", "justify-content-between"], [1, "col-lg-5", "col-md-12"], [1, "home-five-head", "mb-4"], [1, "text-white"], [1, "col-lg-7", "col-md-12"], [1, "text-white", "ms-lg-5", "mb-4"], [1, "award-one"], ["data-aos", "fade-up", 1, "col-xl-5", "col-lg-6", "col-md-6", "col-12"], ["src", "./assets/img/bg/shape-04.svg", "alt", "img", 1, "img-fluid", "master-bg4"], ["src", "./assets/img/bg/shape-05.svg", "alt", "img", 1, "img-fluid", "master-bg5"], ["src", "assets/img/feature/feature-8.jpg", "alt", "img", 1, "img-fluid", "master-skill-image1"], ["src", "assets/img/feature/feature-9.jpg", "alt", "img", 1, "img-fluid", "master-skill-image2"], [1, "col-xl-7", "col-lg-6", "col-md-6", "col-12"], [1, "ms-lg-5", "ps-lg-5"], [1, "mb-3"], ["src", "assets/img/icon/award.svg", "alt", "certified"], [1, "text-warning", "my-4"], [1, "text-white", "mb-4"], [1, "list-unstyled", "text-white", "mb-5"], [1, "d-flex", "mb-3"], [1, "isax", "isax-tick-circle5", "text-warning", "fs-24", "me-2"], ["data-aos", "fade-up", 1, "d-flex", "mb-3"], [1, "learn-anything"], ["data-aos", "fade-up", 1, "col-xl-7", "col-lg-6", "col-md-6", "col-12"], [1, "me-5", "pe-5"], ["src", "assets/img/icon/time.svg", "alt", "certified"], [1, "text-skyblue", "my-4"], [1, "isax", "isax-tick-circle5", "text-skyblue", "fs-24", "me-2"], [1, "master-img", "mb-0"], ["src", "assets/img/feature/feature-12.jpg", "alt", "img", 1, "img-fluid", "master-skill-image1"], ["src", "assets/img/feature/feature-13.jpg", "alt", "img", 1, "img-fluid", "master-skill-image2"], [1, "development-carrer"], ["src", "assets/img/feature/feature-5.jpg", "alt", "img", 1, "img-fluid", "master-skill-image1"], ["src", "assets/img/feature/feature-6.jpg", "alt", "img", 1, "img-fluid", "master-skill-image2"], ["src", "assets/img/icon/winning.svg", "alt", "certified"], [1, "text-success", "my-4"], [1, "isax", "isax-tick-circle5", "text-success", "fs-24", "me-2"], [1, "home-five-trending"], [1, "col-md-6", "col-sm-12"], ["data-aos", "fade-up", 1, "home-five-trending-course"], ["ngxSlickItem", ""], [1, "trending-three-item"], [1, "trending-content-top", "trending-bg-one"], [1, "course-title-one"], [1, "trending-three-text"], [1, "trending-counts-info", "d-flex", "align-items-center", "justify-content-between"], [1, "trending-three-counts", "d-flex", "align-items-center"], ["src", "assets/img/icon/student-icon.svg", "alt", "student-icon"], [1, "trending-content-footer"], [1, "trending-price-group", "d-flex", "align-items-center", "justify-content-between"], [1, "trending-group-view"], [1, "trending-price-three"], [1, "trending-footer-img"], [1, "trending-content-top", "trending-bg-two"], ["src", "assets/img/icon/student-icon.svg", "alt", "Img"], [1, "trending-content-top", "trending-bg-three"], [1, "trending-content-top", "trending-bg-four"], ["ngxSlickItem", "", 1, "trending-three-item"], [1, "gallery-three"], ["src", "assets/img/shapes/shape-11.svg", "alt", "img", 1, "gallery-bg", "d-none", "d-lg-flex"], [1, "col-lg-6", "col-sm-12"], [1, "courses-gallery-three"], [1, "col-lg-5", "col-md-5"], [1, "col-lg-7", "col-md-7", "d-flex"], [1, "instructor-item", "instructor-item-five"], [1, "instructors-img"], ["src", "assets/img/instructor/instructor-13.jpg", "alt", "Instructor"], [1, "instructor-overlay"], [1, "position-absolute", "start-0", "top-0", "d-flex", "align-items-start", "w-100", "z-index-2", "p-3"], ["href", "javascript:void(0);", 1, "favourite"], [1, "isax", "isax-heart"], [1, "instructor-content"], [1, "view-link", 3, "routerLink"], [1, "col-lg-5", "col-md-5", "d-flex"], ["src", "assets/img/instructor/instructor-14.jpg", "alt", "Instructor"], ["src", "assets/img/instructor/instructor-15.jpg", "alt", "Instructor"], ["src", "assets/img/instructor/instructor-16.jpg", "alt", "Instructor"], [1, "col-lg-3", "col-md-3", "d-flex"], ["src", "assets/img/gallery/gallery-5.jpg", "alt", "Instructor"], [1, "col-lg-4", "col-md-4", "d-flex"], [1, "col-lg-12", "col-md-12", "d-flex"], ["src", "assets/img/instructor/instructor-17.jpg", "alt", "Instructor"], [1, "col-lg-6", "col-md-6", "d-flex"], ["src", "assets/img/instructor/instructor-18.jpg", "alt", "Instructor"], ["src", "assets/img/instructor/instructor-19.jpg", "alt", "Instructor"], [1, "home-five-become"], ["data-aos", "fade-up", 1, "col-lg-8", "col-md-8"], [1, "become-content-three"], ["data-aos", "fade-up", 1, "col-lg-4", "col-md-4"], [1, "btn", "btn-white", 3, "routerLink"], [1, "lead-companies-three"], [1, "home-five-head", "section-header-title", "aos-init", "aos-animate"], ["data-aos", "fade-up", 1, "col-lg-12"], ["data-aos", "fade-up", 1, "m-0", "p-0", "lead-group", "aos"], [1, "lead-group-slider", "owl-theme"], [3, "options"], ["carouselSlide", ""], [1, "testimonial-three"], [1, "testimonial-pattern"], ["alt", "Img", "src", "assets/img/bg/pattern-05.svg", 1, "pattern-left", "img-fluid"], [1, "testimonial-three-content"], ["data-aos", "fade-down", 1, "col-xl-6", "col-lg-12", "col-md-12"], [1, "become-content"], [1, "aos-init", "aos-animate"], ["href", "javascript:void(0);", "data-aos", "fade-up", 1, "btn", "btn-white", "aos-init", "aos-animate"], [1, "swiper-testimonial-three", "custom-swiper"], [4, "ngFor", "ngForOf"], [1, "latest-blog-three"], ["data-aos", "fade-up", 1, "home-five-head", "section-header-title", "pb-0"], [1, "col-lg-6", "col-md-8"], [1, "col-lg-6", "col-md-4"], [1, "latest-blog-main"], [1, "col-lg-4", "d-flex"], [1, "event-blog-three", "blog-three-one", "flex-fill"], [1, "blog-img-three"], ["alt", "Img", "src", "assets/img/blog/blog-34.jpg", 1, "img-fluid"], [1, "latest-blog-content"], [1, "event-three-title"], [1, "event-span-three", "d-flex", "align-items-center"], [1, "span-name-three", "badge-green"], [1, "blog-student-count"], [1, "fa-solid", "fa-calendar"], [1, "blog-user-top"], ["src", "assets/img/user/user-01.jpg", "alt", ""], [1, "col-lg-8"], [1, "event-blog-three", "blog-three-one"], ["alt", "Img", "src", "assets/img/blog/blog-36.jpg", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/blog/blog-37.jpg", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/blog/blog-38.jpg", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/blog/blog-39.jpg", 1, "img-fluid"], [1, "item"], [1, "lead-img"], ["alt", "Img", "src", "assets/img/client/client-33.svg", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/client/client-34.svg", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/client/client-35.svg", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/client/client-36.svg", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/client/client-37.svg", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/client/client-38.svg", 1, "img-fluid"], [1, "testimonial-item-five"], [1, "testimonial-quote"], ["alt", "Quote", "src", "assets/img/bg/quote.svg", 1, "quote", "img-fluid"], [1, "testimonial-content"], [1, "testimonial-ratings"], [1, "rating"], ["class", "fas fa-star filled", 4, "ngFor", "ngForOf"], ["class", "fas fa-star", 4, "ngFor", "ngForOf"], [1, "d-inline-block"], [1, "testimonial-users"], [1, "imgbx"], ["alt", "User", 1, "img-fluid", 3, "src"], [1, "d-block"], [1, "fas", "fa-star", "filled"], [1, "fas", "fa-star"]], template: function Home5Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "span", 6)(7, "span", 7);
      \u0275\u0275text(8, "New");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, "The Leader in Online Learning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "h1");
      \u0275\u0275text(11, "Engaging ");
      \u0275\u0275elementStart(12, "span");
      \u0275\u0275text(13, "&");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " Accessible Online Courses For All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p");
      \u0275\u0275text(16, "Our specialized online courses are designed to bring the classroom experience to you, no matter where you are.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 8)(18, "form", 9);
      \u0275\u0275listener("ngSubmit", function Home5Component_Template_form_ngSubmit_18_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(19, "div", 10)(20, "div", 11)(21, "div", 12)(22, "div", 13)(23, "mat-select", 14)(24, "mat-option", 15);
      \u0275\u0275text(25, "Select category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "mat-option", 15);
      \u0275\u0275text(27, "Angular");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "mat-option", 15);
      \u0275\u0275text(29, "Node Js");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "mat-option", 15);
      \u0275\u0275text(31, "React");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "mat-option", 15);
      \u0275\u0275text(33, "Python");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "div", 16)(35, "div", 17);
      \u0275\u0275element(36, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275element(37, "input", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "button", 20);
      \u0275\u0275element(39, "i", 21);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(40, "div", 22)(41, "div", 23);
      \u0275\u0275element(42, "img", 24);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(43, "section", 25)(44, "div", 1)(45, "div", 26)(46, "div", 27)(47, "div", 28)(48, "div", 29)(49, "div", 30)(50, "div", 31)(51, "div", 32);
      \u0275\u0275element(52, "img", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 34)(54, "h4", 35)(55, "span", 36);
      \u0275\u0275text(56, "10");
      \u0275\u0275elementEnd();
      \u0275\u0275text(57, "K");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "p");
      \u0275\u0275text(59, "Online Courses");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(60, "div", 28)(61, "div", 29)(62, "div", 30)(63, "div", 31)(64, "div", 32);
      \u0275\u0275element(65, "img", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 34)(67, "h4", 38)(68, "span", 36);
      \u0275\u0275text(69, "200");
      \u0275\u0275elementEnd();
      \u0275\u0275text(70, "+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "p");
      \u0275\u0275text(72, "Expert Tutors");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(73, "div", 28)(74, "div", 29)(75, "div", 30)(76, "div", 31)(77, "div", 32);
      \u0275\u0275element(78, "img", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "div", 34)(80, "h4", 40)(81, "span", 36);
      \u0275\u0275text(82, "6");
      \u0275\u0275elementEnd();
      \u0275\u0275text(83, "K+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "p");
      \u0275\u0275text(85, "Ceritified Courses");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(86, "div", 28)(87, "div", 41)(88, "div", 30)(89, "div", 42)(90, "div", 32);
      \u0275\u0275element(91, "img", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "div", 44)(93, "h4", 45)(94, "span", 36);
      \u0275\u0275text(95, "60");
      \u0275\u0275elementEnd();
      \u0275\u0275text(96, "K +");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "p");
      \u0275\u0275text(98, "Online Students");
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(99, "section", 46)(100, "div", 1)(101, "div", 2)(102, "div", 47)(103, "div", 48)(104, "div", 49);
      \u0275\u0275element(105, "img", 50)(106, "img", 51)(107, "img", 52);
      \u0275\u0275elementStart(108, "div", 53);
      \u0275\u0275element(109, "img", 54);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(110, "div", 55)(111, "div", 56)(112, "div", 57)(113, "h2");
      \u0275\u0275text(114, "Master the skills to drive your career");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(115, "div", 58)(116, "p");
      \u0275\u0275text(117, "Get certified, master modern tech skills, and level up your career whether you\u2019re starting out or a seasoned pro. 95% of eLearning learners report our hands-on content directly helped their careers.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(118, "div", 59)(119, "div", 27)(120, "div", 60)(121, "div", 61)(122, "div", 62);
      \u0275\u0275element(123, "img", 63);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "div", 64)(125, "h5", 65);
      \u0275\u0275text(126, "Certified Courses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "p", 66);
      \u0275\u0275text(128, "Get certified with 100+ certification courses");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(129, "div", 67)(130, "div", 61)(131, "div", 62);
      \u0275\u0275element(132, "img", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "div", 64)(134, "h5", 65);
      \u0275\u0275text(135, "Skill Building");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "p", 66);
      \u0275\u0275text(137, "Build skills your way, from labs to courses");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(138, "div", 67)(139, "div", 61)(140, "div", 62);
      \u0275\u0275element(141, "img", 69);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "div", 64)(143, "h5", 65);
      \u0275\u0275text(144, "Stay Inspired");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "p", 66);
      \u0275\u0275text(146, "Stay motivated with engaging instructors");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(147, "div", 67)(148, "div", 61)(149, "div", 62);
      \u0275\u0275element(150, "img", 70);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "div", 64)(152, "h5", 65);
      \u0275\u0275text(153, "Keep Upgrade");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "p", 66);
      \u0275\u0275text(155, "Keep up with the latest in cloud");
      \u0275\u0275elementEnd()()()()()()()()()()();
      \u0275\u0275elementStart(156, "section", 71)(157, "div", 1)(158, "div", 72)(159, "div", 73)(160, "div", 1)(161, "div", 74)(162, "div", 75)(163, "div", 76)(164, "h2");
      \u0275\u0275text(165, "Choose favourite Course from top Category");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(166, "div", 77)(167, "div", 78)(168, "a", 79);
      \u0275\u0275text(169, "View All");
      \u0275\u0275element(170, "i", 80);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(171, "div", 81)(172, "ngx-slick-carousel", 82)(173, "div", 83)(174, "div", 84)(175, "div", 85);
      \u0275\u0275element(176, "img", 86);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "div", 87)(178, "h3")(179, "a", 79);
      \u0275\u0275text(180, "Angular Development");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(181, "div", 88)(182, "p", 89);
      \u0275\u0275text(183, "Instructors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "ul", 90)(185, "li")(186, "a", 91);
      \u0275\u0275element(187, "img", 92);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(188, "li")(189, "a", 93);
      \u0275\u0275element(190, "img", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(191, "li")(192, "a", 95);
      \u0275\u0275element(193, "img", 96);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(194, "li", 97)(195, "a", 98);
      \u0275\u0275text(196, "80+");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(197, "div", 83)(198, "div", 84)(199, "div", 85);
      \u0275\u0275element(200, "img", 99);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(201, "div", 87)(202, "h3")(203, "a", 79);
      \u0275\u0275text(204, "Pyhton Development");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(205, "div", 88)(206, "p", 89);
      \u0275\u0275text(207, "Instructors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(208, "ul", 90)(209, "li")(210, "a", 91);
      \u0275\u0275element(211, "img", 100);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(212, "li")(213, "a", 93);
      \u0275\u0275element(214, "img", 101);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(215, "li")(216, "a", 95);
      \u0275\u0275element(217, "img", 102);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(218, "li", 97)(219, "a", 98);
      \u0275\u0275text(220, "80+");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(221, "div", 83)(222, "div", 84)(223, "div", 85);
      \u0275\u0275element(224, "img", 103);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "div", 87)(226, "h3")(227, "a", 79);
      \u0275\u0275text(228, "NODE JS Development");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(229, "div", 88)(230, "p", 89);
      \u0275\u0275text(231, "Instructors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "ul", 90)(233, "li")(234, "a", 91);
      \u0275\u0275element(235, "img", 104);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(236, "li")(237, "a", 93);
      \u0275\u0275element(238, "img", 105);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(239, "li")(240, "a", 95);
      \u0275\u0275element(241, "img", 106);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(242, "li", 97)(243, "a", 98);
      \u0275\u0275text(244, "80+");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(245, "div", 83)(246, "div", 84)(247, "div", 85);
      \u0275\u0275element(248, "img", 107);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(249, "div", 87)(250, "h3")(251, "a", 79);
      \u0275\u0275text(252, "Corephp Development");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(253, "div", 88)(254, "p", 89);
      \u0275\u0275text(255, "Instructors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(256, "ul", 90)(257, "li")(258, "a", 91);
      \u0275\u0275element(259, "img", 108);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(260, "li")(261, "a", 93);
      \u0275\u0275element(262, "img", 109);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(263, "li")(264, "a", 95);
      \u0275\u0275element(265, "img", 110);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(266, "li", 97)(267, "a", 98);
      \u0275\u0275text(268, "80+");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(269, "div", 83)(270, "div", 84)(271, "div", 85);
      \u0275\u0275element(272, "img", 111);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(273, "div", 87)(274, "h3")(275, "a", 79);
      \u0275\u0275text(276, "Laravel Development");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(277, "div", 88)(278, "p", 89);
      \u0275\u0275text(279, "Instructors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(280, "ul", 90)(281, "li")(282, "a", 91);
      \u0275\u0275element(283, "img", 112);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(284, "li")(285, "a", 93);
      \u0275\u0275element(286, "img", 113);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(287, "li")(288, "a", 95);
      \u0275\u0275element(289, "img", 114);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(290, "li", 97)(291, "a", 98);
      \u0275\u0275text(292, "80+");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(293, "div", 83)(294, "div", 84)(295, "div", 85);
      \u0275\u0275element(296, "img", 86);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(297, "div", 87)(298, "h3")(299, "a", 79);
      \u0275\u0275text(300, "Angular Development");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(301, "div", 88)(302, "p", 89);
      \u0275\u0275text(303, "Instructors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(304, "ul", 90)(305, "li")(306, "a", 91);
      \u0275\u0275element(307, "img", 92);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(308, "li")(309, "a", 93);
      \u0275\u0275element(310, "img", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(311, "li")(312, "a", 95);
      \u0275\u0275element(313, "img", 96);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(314, "li", 97)(315, "a", 98);
      \u0275\u0275text(316, "80+");
      \u0275\u0275elementEnd()()()()()()()()()()()()();
      \u0275\u0275elementStart(317, "section", 115)(318, "div", 1)(319, "div", 116)(320, "div", 73)(321, "div", 74)(322, "div", 75)(323, "div", 117)(324, "h2");
      \u0275\u0275text(325, "Featured Courses");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(326, "div", 117)(327, "div", 78)(328, "a", 79);
      \u0275\u0275text(329, "View All");
      \u0275\u0275element(330, "i", 80);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(331, "div", 118)(332, "div", 119)(333, "div", 120)(334, "a", 121);
      \u0275\u0275text(335, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(336, "a", 122);
      \u0275\u0275text(337, "Most popular");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(338, "a", 123);
      \u0275\u0275text(339, "Business");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(340, "a", 124);
      \u0275\u0275text(341, "Design");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(342, "a", 124);
      \u0275\u0275text(343, "Music");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(344, "a", 125);
      \u0275\u0275text(345, "Programming");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(346, "a", 126);
      \u0275\u0275text(347, "Database");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(348, "div", 119)(349, "div", 127)(350, "div", 128)(351, "div", 73)(352, "div", 129)(353, "div", 130)(354, "div", 32)(355, "a", 79);
      \u0275\u0275element(356, "img", 131);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(357, "div", 132)(358, "div", 133)(359, "a", 79);
      \u0275\u0275element(360, "img", 134);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(361, "div", 135)(362, "p");
      \u0275\u0275text(363, "Pyhton Development");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(364, "h3", 136)(365, "a", 79);
      \u0275\u0275text(366, "The Complete Web Developer PHP Course");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(367, "div", 137);
      \u0275\u0275element(368, "img", 138);
      \u0275\u0275elementStart(369, "p", 139);
      \u0275\u0275text(370, "500 Students");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(371, "div", 140)(372, "div", 141)(373, "h3");
      \u0275\u0275text(374, "$650 ");
      \u0275\u0275elementStart(375, "span");
      \u0275\u0275text(376, "$99.00");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(377, "div", 142);
      \u0275\u0275element(378, "i", 143);
      \u0275\u0275elementStart(379, "span");
      \u0275\u0275text(380, "6hr 30min");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(381, "div", 129)(382, "div", 130)(383, "div", 32)(384, "a", 79);
      \u0275\u0275element(385, "img", 144);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(386, "div", 132)(387, "div", 133)(388, "a", 79);
      \u0275\u0275element(389, "img", 145);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(390, "div", 135)(391, "p");
      \u0275\u0275text(392, "Web Design");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(393, "h3", 136)(394, "a", 79);
      \u0275\u0275text(395, "Build Responsive Websites with HTML");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(396, "div", 137);
      \u0275\u0275element(397, "img", 138);
      \u0275\u0275elementStart(398, "p", 139);
      \u0275\u0275text(399, "450 Students");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(400, "div", 140)(401, "div", 141)(402, "h3");
      \u0275\u0275text(403, "$650 ");
      \u0275\u0275elementStart(404, "span");
      \u0275\u0275text(405, "$99.00");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(406, "div", 142);
      \u0275\u0275element(407, "i", 143);
      \u0275\u0275elementStart(408, "span");
      \u0275\u0275text(409, "6hr 30min");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(410, "div", 129)(411, "div", 130)(412, "div", 32)(413, "a", 79);
      \u0275\u0275element(414, "img", 146);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(415, "div", 132)(416, "div", 133)(417, "a", 79);
      \u0275\u0275element(418, "img", 147);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(419, "div", 135)(420, "p");
      \u0275\u0275text(421, "Business Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(422, "h3", 136)(423, "a", 79);
      \u0275\u0275text(424, "The Complete Business Management Course");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(425, "div", 137);
      \u0275\u0275element(426, "img", 138);
      \u0275\u0275elementStart(427, "p", 139);
      \u0275\u0275text(428, "400 Students");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(429, "div", 140)(430, "div", 141)(431, "h3");
      \u0275\u0275text(432, "$300 ");
      \u0275\u0275elementStart(433, "span");
      \u0275\u0275text(434, " $99.00");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(435, "div", 142);
      \u0275\u0275element(436, "i", 143);
      \u0275\u0275elementStart(437, "span");
      \u0275\u0275text(438, "6hr 30min");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(439, "div", 129)(440, "div", 130)(441, "div", 32)(442, "a", 79);
      \u0275\u0275element(443, "img", 148);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(444, "div", 132)(445, "div", 133)(446, "a", 79);
      \u0275\u0275element(447, "img", 149);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(448, "div", 135)(449, "p");
      \u0275\u0275text(450, "Creative Arts & media");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(451, "h3", 136)(452, "a", 79);
      \u0275\u0275text(453, "Build Creative Arts & media Course Completed");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(454, "div", 137);
      \u0275\u0275element(455, "img", 138);
      \u0275\u0275elementStart(456, "p", 139);
      \u0275\u0275text(457, "250 Students");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(458, "div", 140)(459, "div", 141)(460, "h3");
      \u0275\u0275text(461, "$700 ");
      \u0275\u0275elementStart(462, "span");
      \u0275\u0275text(463, " $99.00");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(464, "div", 142);
      \u0275\u0275element(465, "i", 143);
      \u0275\u0275elementStart(466, "span");
      \u0275\u0275text(467, "6hr 30min");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(468, "div", 129)(469, "div", 130)(470, "div", 32)(471, "a", 79);
      \u0275\u0275element(472, "img", 150);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(473, "div", 132)(474, "div", 133)(475, "a", 79);
      \u0275\u0275element(476, "img", 151);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(477, "div", 135)(478, "p");
      \u0275\u0275text(479, "Personalized Learning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(480, "h3", 136)(481, "a", 79);
      \u0275\u0275text(482, "Build Responsive Websites with HTML");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(483, "div", 137);
      \u0275\u0275element(484, "img", 138);
      \u0275\u0275elementStart(485, "p", 139);
      \u0275\u0275text(486, "400 Students");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(487, "div", 140)(488, "div", 141)(489, "h3");
      \u0275\u0275text(490, "$650 ");
      \u0275\u0275elementStart(491, "span");
      \u0275\u0275text(492, " $99.00");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(493, "div", 142);
      \u0275\u0275element(494, "i", 143);
      \u0275\u0275elementStart(495, "span");
      \u0275\u0275text(496, "6hr 30min");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(497, "div", 129)(498, "div", 130)(499, "div", 32)(500, "a", 79);
      \u0275\u0275element(501, "img", 152);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(502, "div", 132)(503, "div", 133)(504, "a", 79);
      \u0275\u0275element(505, "img", 153);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(506, "div", 135)(507, "p");
      \u0275\u0275text(508, "Pyhton Development");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(509, "h3", 136)(510, "a", 79);
      \u0275\u0275text(511, "The Complete Pyhton Development Course");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(512, "div", 137);
      \u0275\u0275element(513, "img", 138);
      \u0275\u0275elementStart(514, "p", 139);
      \u0275\u0275text(515, "400 Students");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(516, "div", 140)(517, "div", 141)(518, "h3");
      \u0275\u0275text(519, "$650 ");
      \u0275\u0275elementStart(520, "span");
      \u0275\u0275text(521, " $99.00");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(522, "div", 142);
      \u0275\u0275element(523, "i", 143);
      \u0275\u0275elementStart(524, "span");
      \u0275\u0275text(525, "6hr 30min");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(526, "div", 129)(527, "div", 130)(528, "div", 32)(529, "a", 79);
      \u0275\u0275element(530, "img", 154);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(531, "div", 132)(532, "div", 133)(533, "a", 79);
      \u0275\u0275element(534, "img", 155);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(535, "div", 135)(536, "p");
      \u0275\u0275text(537, "Business Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(538, "h3", 136)(539, "a", 79);
      \u0275\u0275text(540, "Build Websites with HTML5 CSS3 Javascript");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(541, "div", 137);
      \u0275\u0275element(542, "img", 138);
      \u0275\u0275elementStart(543, "p", 139);
      \u0275\u0275text(544, "400 Students");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(545, "div", 140)(546, "div", 141)(547, "h3");
      \u0275\u0275text(548, "$650 ");
      \u0275\u0275elementStart(549, "span");
      \u0275\u0275text(550, " $99.00");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(551, "div", 142);
      \u0275\u0275element(552, "i", 143);
      \u0275\u0275elementStart(553, "span");
      \u0275\u0275text(554, "6hr 30min");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(555, "div", 129)(556, "div", 130)(557, "div", 32)(558, "a", 79);
      \u0275\u0275element(559, "img", 156);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(560, "div", 132)(561, "div", 133)(562, "a", 79);
      \u0275\u0275element(563, "img", 157);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(564, "div", 135)(565, "p");
      \u0275\u0275text(566, "Creative Arts & media");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(567, "h3", 136)(568, "a", 79);
      \u0275\u0275text(569, "Build Responsive Websites with HTML");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(570, "div", 137);
      \u0275\u0275element(571, "img", 138);
      \u0275\u0275elementStart(572, "p", 139);
      \u0275\u0275text(573, "300 Students");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(574, "div", 140)(575, "div", 141)(576, "h3");
      \u0275\u0275text(577, "$550 ");
      \u0275\u0275elementStart(578, "span");
      \u0275\u0275text(579, " $99.00");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(580, "div", 142);
      \u0275\u0275element(581, "i", 143);
      \u0275\u0275elementStart(582, "span");
      \u0275\u0275text(583, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(584, "div", 158)(585, "div", 128)(586, "div", 73)(587, "div", 129)(588, "div", 159)(589, "div", 160)(590, "div", 161)(591, "a", 79);
      \u0275\u0275element(592, "img", 162);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(593, "div", 163)(594, "a", 98);
      \u0275\u0275element(595, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(596, "div", 165)(597, "div", 166)(598, "div", 167)(599, "a", 79);
      \u0275\u0275element(600, "img", 145);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(601, "div", 135)(602, "p");
      \u0275\u0275text(603, "Web Design");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(604, "h3", 136)(605, "a", 79);
      \u0275\u0275text(606, "Build Responsive Websites with HTML");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(607, "div", 137)(608, "div", 168);
      \u0275\u0275element(609, "img", 138);
      \u0275\u0275elementStart(610, "p");
      \u0275\u0275text(611, "450 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(612, "div", 169)(613, "div", 170)(614, "div", 171)(615, "h3");
      \u0275\u0275text(616, "$650 ");
      \u0275\u0275elementStart(617, "span");
      \u0275\u0275text(618, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(619, "div", 172);
      \u0275\u0275element(620, "i", 143);
      \u0275\u0275elementStart(621, "span");
      \u0275\u0275text(622, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(623, "div", 129)(624, "div", 159)(625, "div", 160)(626, "div", 161)(627, "a", 79);
      \u0275\u0275element(628, "img", 173);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(629, "div", 163)(630, "a", 98);
      \u0275\u0275element(631, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(632, "div", 165)(633, "div", 166)(634, "div", 167)(635, "a", 79);
      \u0275\u0275element(636, "img", 134);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(637, "div", 135)(638, "p");
      \u0275\u0275text(639, "Pyhton Development");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(640, "h3", 136)(641, "a", 79);
      \u0275\u0275text(642, "The Complete Web Developer PHP Course");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(643, "div", 137)(644, "div", 168);
      \u0275\u0275element(645, "img", 138);
      \u0275\u0275elementStart(646, "p");
      \u0275\u0275text(647, "500 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(648, "div", 174)(649, "div", 170)(650, "div", 171)(651, "h3");
      \u0275\u0275text(652, "$650 ");
      \u0275\u0275elementStart(653, "span");
      \u0275\u0275text(654, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(655, "div", 172);
      \u0275\u0275element(656, "i", 143);
      \u0275\u0275elementStart(657, "span");
      \u0275\u0275text(658, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(659, "div", 129)(660, "div", 159)(661, "div", 160)(662, "div", 161)(663, "a", 79);
      \u0275\u0275element(664, "img", 175);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(665, "div", 163)(666, "a", 98);
      \u0275\u0275element(667, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(668, "div", 165)(669, "div", 166)(670, "div", 167)(671, "a", 79);
      \u0275\u0275element(672, "img", 147);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(673, "div", 135)(674, "p");
      \u0275\u0275text(675, "Business Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(676, "h3", 136)(677, "a", 79);
      \u0275\u0275text(678, "The Complete Business Management Course");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(679, "div", 137)(680, "div", 168);
      \u0275\u0275element(681, "img", 138);
      \u0275\u0275elementStart(682, "p");
      \u0275\u0275text(683, "400 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(684, "div", 174)(685, "div", 170)(686, "div", 171)(687, "h3");
      \u0275\u0275text(688, "$300 ");
      \u0275\u0275elementStart(689, "span");
      \u0275\u0275text(690, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(691, "div", 172);
      \u0275\u0275element(692, "i", 143);
      \u0275\u0275elementStart(693, "span");
      \u0275\u0275text(694, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(695, "div", 129)(696, "div", 159)(697, "div", 160)(698, "div", 161)(699, "a", 79);
      \u0275\u0275element(700, "img", 176);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(701, "div", 163)(702, "a", 98);
      \u0275\u0275element(703, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(704, "div", 165)(705, "div", 166)(706, "div", 167)(707, "a", 79);
      \u0275\u0275element(708, "img", 149);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(709, "div", 135)(710, "p");
      \u0275\u0275text(711, "Creative Arts & media");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(712, "h3", 136)(713, "a", 79);
      \u0275\u0275text(714, "Build Creative Arts & media Course Completed");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(715, "div", 137)(716, "div", 168);
      \u0275\u0275element(717, "img", 138);
      \u0275\u0275elementStart(718, "p");
      \u0275\u0275text(719, "250 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(720, "div", 174)(721, "div", 170)(722, "div", 171)(723, "h3");
      \u0275\u0275text(724, "$700 ");
      \u0275\u0275elementStart(725, "span");
      \u0275\u0275text(726, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(727, "div", 172);
      \u0275\u0275element(728, "i", 143);
      \u0275\u0275elementStart(729, "span");
      \u0275\u0275text(730, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(731, "div", 129)(732, "div", 159)(733, "div", 160)(734, "div", 161)(735, "a", 79);
      \u0275\u0275element(736, "img", 177);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(737, "div", 163)(738, "a", 98);
      \u0275\u0275element(739, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(740, "div", 165)(741, "div", 166)(742, "div", 167)(743, "a", 79);
      \u0275\u0275element(744, "img", 151);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(745, "div", 135)(746, "p");
      \u0275\u0275text(747, "Personalized Learning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(748, "h3", 136)(749, "a", 79);
      \u0275\u0275text(750, "Build Responsive Websites with HTML");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(751, "div", 137)(752, "div", 168);
      \u0275\u0275element(753, "img", 138);
      \u0275\u0275elementStart(754, "p");
      \u0275\u0275text(755, "400 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(756, "div", 174)(757, "div", 170)(758, "div", 171)(759, "h3");
      \u0275\u0275text(760, "$650 ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(761, "div", 172);
      \u0275\u0275element(762, "i", 143);
      \u0275\u0275elementStart(763, "span");
      \u0275\u0275text(764, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(765, "div", 129)(766, "div", 159)(767, "div", 160)(768, "div", 161)(769, "a", 79);
      \u0275\u0275element(770, "img", 178);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(771, "div", 163)(772, "a", 98);
      \u0275\u0275element(773, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(774, "div", 165)(775, "div", 166)(776, "div", 167)(777, "a", 79);
      \u0275\u0275element(778, "img", 153);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(779, "div", 135)(780, "p");
      \u0275\u0275text(781, "Pyhton Development");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(782, "h3", 136)(783, "a", 79);
      \u0275\u0275text(784, "The Complete Pyhton Development Course");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(785, "div", 137)(786, "div", 168);
      \u0275\u0275element(787, "img", 138);
      \u0275\u0275elementStart(788, "p");
      \u0275\u0275text(789, "400 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(790, "div", 174)(791, "div", 170)(792, "div", 171)(793, "h3");
      \u0275\u0275text(794, "Free ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(795, "div", 172);
      \u0275\u0275element(796, "i", 143);
      \u0275\u0275elementStart(797, "span");
      \u0275\u0275text(798, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(799, "div", 129)(800, "div", 159)(801, "div", 160)(802, "div", 161)(803, "a", 79);
      \u0275\u0275element(804, "img", 179);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(805, "div", 163)(806, "a", 98);
      \u0275\u0275element(807, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(808, "div", 165)(809, "div", 166)(810, "div", 167)(811, "a", 79);
      \u0275\u0275element(812, "img", 155);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(813, "div", 135)(814, "p");
      \u0275\u0275text(815, "Business Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(816, "h3", 136)(817, "a", 79);
      \u0275\u0275text(818, "Build Websites with HTML5 CSS3 Javascript");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(819, "div", 137)(820, "div", 168);
      \u0275\u0275element(821, "img", 138);
      \u0275\u0275elementStart(822, "p");
      \u0275\u0275text(823, "400 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(824, "div", 174)(825, "div", 170)(826, "div", 171)(827, "h3");
      \u0275\u0275text(828, "$650 ");
      \u0275\u0275elementStart(829, "span");
      \u0275\u0275text(830, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(831, "div", 172);
      \u0275\u0275element(832, "i", 143);
      \u0275\u0275elementStart(833, "span");
      \u0275\u0275text(834, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(835, "div", 129)(836, "div", 159)(837, "div", 160)(838, "div", 161)(839, "a", 79);
      \u0275\u0275element(840, "img", 180);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(841, "div", 163)(842, "a", 98);
      \u0275\u0275element(843, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(844, "div", 165)(845, "div", 166)(846, "div", 167)(847, "a", 79);
      \u0275\u0275element(848, "img", 157);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(849, "div", 135)(850, "p");
      \u0275\u0275text(851, "Creative Arts & media");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(852, "h3", 136)(853, "a", 79);
      \u0275\u0275text(854, "Build Responsive Websites with HTML");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(855, "div", 137)(856, "div", 168);
      \u0275\u0275element(857, "img", 138);
      \u0275\u0275elementStart(858, "p");
      \u0275\u0275text(859, "400 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(860, "div", 174)(861, "div", 170)(862, "div", 171)(863, "h3");
      \u0275\u0275text(864, "$300 ");
      \u0275\u0275elementStart(865, "span");
      \u0275\u0275text(866, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(867, "div", 172);
      \u0275\u0275element(868, "i", 143);
      \u0275\u0275elementStart(869, "span");
      \u0275\u0275text(870, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(871, "div", 181)(872, "div", 128)(873, "div", 73)(874, "div", 129)(875, "div", 159)(876, "div", 160)(877, "div", 161)(878, "a", 79);
      \u0275\u0275element(879, "img", 162);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(880, "div", 163)(881, "a", 98);
      \u0275\u0275element(882, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(883, "div", 165)(884, "div", 166)(885, "div", 167)(886, "a", 79);
      \u0275\u0275element(887, "img", 145);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(888, "div", 135)(889, "p");
      \u0275\u0275text(890, "Web Design");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(891, "h3", 136)(892, "a", 79);
      \u0275\u0275text(893, "Build Responsive Websites with HTML");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(894, "div", 137)(895, "div", 168);
      \u0275\u0275element(896, "img", 138);
      \u0275\u0275elementStart(897, "p");
      \u0275\u0275text(898, "450 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(899, "div", 169)(900, "div", 170)(901, "div", 171)(902, "h3");
      \u0275\u0275text(903, "$650 ");
      \u0275\u0275elementStart(904, "span");
      \u0275\u0275text(905, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(906, "div", 172);
      \u0275\u0275element(907, "i", 143);
      \u0275\u0275elementStart(908, "span");
      \u0275\u0275text(909, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(910, "div", 129)(911, "div", 159)(912, "div", 160)(913, "div", 161)(914, "a", 79);
      \u0275\u0275element(915, "img", 173);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(916, "div", 163)(917, "a", 98);
      \u0275\u0275element(918, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(919, "div", 165)(920, "div", 166)(921, "div", 167)(922, "a", 79);
      \u0275\u0275element(923, "img", 134);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(924, "div", 135)(925, "p");
      \u0275\u0275text(926, "Pyhton Development");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(927, "h3", 136)(928, "a", 79);
      \u0275\u0275text(929, "The Complete Web Developer PHP Course");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(930, "div", 137)(931, "div", 168);
      \u0275\u0275element(932, "img", 138);
      \u0275\u0275elementStart(933, "p");
      \u0275\u0275text(934, "500 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(935, "div", 174)(936, "div", 170)(937, "div", 171)(938, "h3");
      \u0275\u0275text(939, "$650 ");
      \u0275\u0275elementStart(940, "span");
      \u0275\u0275text(941, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(942, "div", 172);
      \u0275\u0275element(943, "i", 143);
      \u0275\u0275elementStart(944, "span");
      \u0275\u0275text(945, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(946, "div", 129)(947, "div", 159)(948, "div", 160)(949, "div", 161)(950, "a", 79);
      \u0275\u0275element(951, "img", 175);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(952, "div", 163)(953, "a", 98);
      \u0275\u0275element(954, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(955, "div", 165)(956, "div", 166)(957, "div", 167)(958, "a", 79);
      \u0275\u0275element(959, "img", 147);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(960, "div", 135)(961, "p");
      \u0275\u0275text(962, "Business Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(963, "h3", 136)(964, "a", 79);
      \u0275\u0275text(965, "The Complete Business Management Course");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(966, "div", 137)(967, "div", 168);
      \u0275\u0275element(968, "img", 138);
      \u0275\u0275elementStart(969, "p");
      \u0275\u0275text(970, "400 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(971, "div", 174)(972, "div", 170)(973, "div", 171)(974, "h3");
      \u0275\u0275text(975, "$300 ");
      \u0275\u0275elementStart(976, "span");
      \u0275\u0275text(977, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(978, "div", 172);
      \u0275\u0275element(979, "i", 143);
      \u0275\u0275elementStart(980, "span");
      \u0275\u0275text(981, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(982, "div", 129)(983, "div", 159)(984, "div", 160)(985, "div", 161)(986, "a", 79);
      \u0275\u0275element(987, "img", 176);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(988, "div", 163)(989, "a", 98);
      \u0275\u0275element(990, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(991, "div", 165)(992, "div", 166)(993, "div", 167)(994, "a", 79);
      \u0275\u0275element(995, "img", 149);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(996, "div", 135)(997, "p");
      \u0275\u0275text(998, "Creative Arts & media");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(999, "h3", 136)(1e3, "a", 79);
      \u0275\u0275text(1001, "Build Creative Arts & media Course Completed");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1002, "div", 137)(1003, "div", 168);
      \u0275\u0275element(1004, "img", 138);
      \u0275\u0275elementStart(1005, "p");
      \u0275\u0275text(1006, "250 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1007, "div", 174)(1008, "div", 170)(1009, "div", 171)(1010, "h3");
      \u0275\u0275text(1011, "$700 ");
      \u0275\u0275elementStart(1012, "span");
      \u0275\u0275text(1013, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1014, "div", 172);
      \u0275\u0275element(1015, "i", 143);
      \u0275\u0275elementStart(1016, "span");
      \u0275\u0275text(1017, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(1018, "div", 129)(1019, "div", 159)(1020, "div", 160)(1021, "div", 161)(1022, "a", 79);
      \u0275\u0275element(1023, "img", 177);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1024, "div", 163)(1025, "a", 98);
      \u0275\u0275element(1026, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1027, "div", 165)(1028, "div", 166)(1029, "div", 167)(1030, "a", 79);
      \u0275\u0275element(1031, "img", 151);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1032, "div", 135)(1033, "p");
      \u0275\u0275text(1034, "Personalized Learning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1035, "h3", 136)(1036, "a", 79);
      \u0275\u0275text(1037, "Build Responsive Websites with HTML");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1038, "div", 137)(1039, "div", 168);
      \u0275\u0275element(1040, "img", 138);
      \u0275\u0275elementStart(1041, "p");
      \u0275\u0275text(1042, "400 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1043, "div", 174)(1044, "div", 170)(1045, "div", 171)(1046, "h3");
      \u0275\u0275text(1047, "$650 ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1048, "div", 172);
      \u0275\u0275element(1049, "i", 143);
      \u0275\u0275elementStart(1050, "span");
      \u0275\u0275text(1051, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(1052, "div", 129)(1053, "div", 159)(1054, "div", 160)(1055, "div", 161)(1056, "a", 79);
      \u0275\u0275element(1057, "img", 178);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1058, "div", 163)(1059, "a", 98);
      \u0275\u0275element(1060, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1061, "div", 165)(1062, "div", 166)(1063, "div", 167)(1064, "a", 79);
      \u0275\u0275element(1065, "img", 153);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1066, "div", 135)(1067, "p");
      \u0275\u0275text(1068, "Pyhton Development");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1069, "h3", 136)(1070, "a", 79);
      \u0275\u0275text(1071, "The Complete Pyhton Development Course");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1072, "div", 137)(1073, "div", 168);
      \u0275\u0275element(1074, "img", 138);
      \u0275\u0275elementStart(1075, "p");
      \u0275\u0275text(1076, "400 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1077, "div", 174)(1078, "div", 170)(1079, "div", 171)(1080, "h3");
      \u0275\u0275text(1081, "Free ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1082, "div", 172);
      \u0275\u0275element(1083, "i", 143);
      \u0275\u0275elementStart(1084, "span");
      \u0275\u0275text(1085, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(1086, "div", 129)(1087, "div", 159)(1088, "div", 160)(1089, "div", 161)(1090, "a", 79);
      \u0275\u0275element(1091, "img", 179);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1092, "div", 163)(1093, "a", 98);
      \u0275\u0275element(1094, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1095, "div", 165)(1096, "div", 166)(1097, "div", 167)(1098, "a", 79);
      \u0275\u0275element(1099, "img", 155);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1100, "div", 135)(1101, "p");
      \u0275\u0275text(1102, "Business Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1103, "h3", 136)(1104, "a", 79);
      \u0275\u0275text(1105, "Build Websites with HTML5 CSS3 Javascript");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1106, "div", 137)(1107, "div", 168);
      \u0275\u0275element(1108, "img", 138);
      \u0275\u0275elementStart(1109, "p");
      \u0275\u0275text(1110, "400 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1111, "div", 174)(1112, "div", 170)(1113, "div", 171)(1114, "h3");
      \u0275\u0275text(1115, "$650 ");
      \u0275\u0275elementStart(1116, "span");
      \u0275\u0275text(1117, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1118, "div", 172);
      \u0275\u0275element(1119, "i", 143);
      \u0275\u0275elementStart(1120, "span");
      \u0275\u0275text(1121, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(1122, "div", 129)(1123, "div", 159)(1124, "div", 160)(1125, "div", 161)(1126, "a", 79);
      \u0275\u0275element(1127, "img", 180);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1128, "div", 163)(1129, "a", 98);
      \u0275\u0275element(1130, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1131, "div", 165)(1132, "div", 166)(1133, "div", 167)(1134, "a", 79);
      \u0275\u0275element(1135, "img", 157);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1136, "div", 135)(1137, "p");
      \u0275\u0275text(1138, "Creative Arts & media");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1139, "h3", 136)(1140, "a", 79);
      \u0275\u0275text(1141, "Build Responsive Websites with HTML");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1142, "div", 137)(1143, "div", 168);
      \u0275\u0275element(1144, "img", 138);
      \u0275\u0275elementStart(1145, "p");
      \u0275\u0275text(1146, "400 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1147, "div", 174)(1148, "div", 170)(1149, "div", 171)(1150, "h3");
      \u0275\u0275text(1151, "$300 ");
      \u0275\u0275elementStart(1152, "span");
      \u0275\u0275text(1153, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1154, "div", 172);
      \u0275\u0275element(1155, "i", 143);
      \u0275\u0275elementStart(1156, "span");
      \u0275\u0275text(1157, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(1158, "div", 182)(1159, "div", 128)(1160, "div", 73)(1161, "div", 129)(1162, "div", 159)(1163, "div", 160)(1164, "div", 161)(1165, "a", 79);
      \u0275\u0275element(1166, "img", 162);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1167, "div", 163)(1168, "a", 98);
      \u0275\u0275element(1169, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1170, "div", 165)(1171, "div", 166)(1172, "div", 167)(1173, "a", 79);
      \u0275\u0275element(1174, "img", 145);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1175, "div", 135)(1176, "p");
      \u0275\u0275text(1177, "Web Design");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1178, "h3", 136)(1179, "a", 79);
      \u0275\u0275text(1180, "Build Responsive Websites with HTML");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1181, "div", 137)(1182, "div", 168);
      \u0275\u0275element(1183, "img", 138);
      \u0275\u0275elementStart(1184, "p");
      \u0275\u0275text(1185, "450 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1186, "div", 169)(1187, "div", 170)(1188, "div", 171)(1189, "h3");
      \u0275\u0275text(1190, "$650 ");
      \u0275\u0275elementStart(1191, "span");
      \u0275\u0275text(1192, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1193, "div", 172);
      \u0275\u0275element(1194, "i", 143);
      \u0275\u0275elementStart(1195, "span");
      \u0275\u0275text(1196, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(1197, "div", 129)(1198, "div", 159)(1199, "div", 160)(1200, "div", 161)(1201, "a", 79);
      \u0275\u0275element(1202, "img", 173);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1203, "div", 163)(1204, "a", 98);
      \u0275\u0275element(1205, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1206, "div", 165)(1207, "div", 166)(1208, "div", 167)(1209, "a", 79);
      \u0275\u0275element(1210, "img", 134);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1211, "div", 135)(1212, "p");
      \u0275\u0275text(1213, "Pyhton Development");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1214, "h3", 136)(1215, "a", 79);
      \u0275\u0275text(1216, "The Complete Web Developer PHP Course");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1217, "div", 137)(1218, "div", 168);
      \u0275\u0275element(1219, "img", 138);
      \u0275\u0275elementStart(1220, "p");
      \u0275\u0275text(1221, "500 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1222, "div", 174)(1223, "div", 170)(1224, "div", 171)(1225, "h3");
      \u0275\u0275text(1226, "$650 ");
      \u0275\u0275elementStart(1227, "span");
      \u0275\u0275text(1228, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1229, "div", 172);
      \u0275\u0275element(1230, "i", 143);
      \u0275\u0275elementStart(1231, "span");
      \u0275\u0275text(1232, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(1233, "div", 129)(1234, "div", 159)(1235, "div", 160)(1236, "div", 161)(1237, "a", 79);
      \u0275\u0275element(1238, "img", 175);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1239, "div", 163)(1240, "a", 98);
      \u0275\u0275element(1241, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1242, "div", 165)(1243, "div", 166)(1244, "div", 167)(1245, "a", 79);
      \u0275\u0275element(1246, "img", 147);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1247, "div", 135)(1248, "p");
      \u0275\u0275text(1249, "Business Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1250, "h3", 136)(1251, "a", 79);
      \u0275\u0275text(1252, "The Complete Business Management Course");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1253, "div", 137)(1254, "div", 168);
      \u0275\u0275element(1255, "img", 138);
      \u0275\u0275elementStart(1256, "p");
      \u0275\u0275text(1257, "400 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1258, "div", 174)(1259, "div", 170)(1260, "div", 171)(1261, "h3");
      \u0275\u0275text(1262, "$300 ");
      \u0275\u0275elementStart(1263, "span");
      \u0275\u0275text(1264, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1265, "div", 172);
      \u0275\u0275element(1266, "i", 143);
      \u0275\u0275elementStart(1267, "span");
      \u0275\u0275text(1268, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(1269, "div", 129)(1270, "div", 159)(1271, "div", 160)(1272, "div", 161)(1273, "a", 79);
      \u0275\u0275element(1274, "img", 176);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1275, "div", 163)(1276, "a", 98);
      \u0275\u0275element(1277, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1278, "div", 165)(1279, "div", 166)(1280, "div", 167)(1281, "a", 79);
      \u0275\u0275element(1282, "img", 149);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1283, "div", 135)(1284, "p");
      \u0275\u0275text(1285, "Creative Arts & media");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1286, "h3", 136)(1287, "a", 79);
      \u0275\u0275text(1288, "Build Creative Arts & media Course Completed");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1289, "div", 137)(1290, "div", 168);
      \u0275\u0275element(1291, "img", 138);
      \u0275\u0275elementStart(1292, "p");
      \u0275\u0275text(1293, "250 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1294, "div", 174)(1295, "div", 170)(1296, "div", 171)(1297, "h3");
      \u0275\u0275text(1298, "$700 ");
      \u0275\u0275elementStart(1299, "span");
      \u0275\u0275text(1300, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1301, "div", 172);
      \u0275\u0275element(1302, "i", 143);
      \u0275\u0275elementStart(1303, "span");
      \u0275\u0275text(1304, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(1305, "div", 129)(1306, "div", 159)(1307, "div", 160)(1308, "div", 161)(1309, "a", 79);
      \u0275\u0275element(1310, "img", 177);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1311, "div", 163)(1312, "a", 98);
      \u0275\u0275element(1313, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1314, "div", 165)(1315, "div", 166)(1316, "div", 167)(1317, "a", 79);
      \u0275\u0275element(1318, "img", 151);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1319, "div", 135)(1320, "p");
      \u0275\u0275text(1321, "Personalized Learning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1322, "h3", 136)(1323, "a", 79);
      \u0275\u0275text(1324, "Build Responsive Websites with HTML");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1325, "div", 137)(1326, "div", 168);
      \u0275\u0275element(1327, "img", 138);
      \u0275\u0275elementStart(1328, "p");
      \u0275\u0275text(1329, "400 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1330, "div", 174)(1331, "div", 170)(1332, "div", 171)(1333, "h3");
      \u0275\u0275text(1334, "$650 ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1335, "div", 172);
      \u0275\u0275element(1336, "i", 143);
      \u0275\u0275elementStart(1337, "span");
      \u0275\u0275text(1338, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(1339, "div", 129)(1340, "div", 159)(1341, "div", 160)(1342, "div", 161)(1343, "a", 79);
      \u0275\u0275element(1344, "img", 178);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1345, "div", 163)(1346, "a", 98);
      \u0275\u0275element(1347, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1348, "div", 165)(1349, "div", 166)(1350, "div", 167)(1351, "a", 79);
      \u0275\u0275element(1352, "img", 153);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1353, "div", 135)(1354, "p");
      \u0275\u0275text(1355, "Pyhton Development");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1356, "h3", 136)(1357, "a", 79);
      \u0275\u0275text(1358, "The Complete Pyhton Development Course");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1359, "div", 137)(1360, "div", 168);
      \u0275\u0275element(1361, "img", 138);
      \u0275\u0275elementStart(1362, "p");
      \u0275\u0275text(1363, "400 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1364, "div", 174)(1365, "div", 170)(1366, "div", 171)(1367, "h3");
      \u0275\u0275text(1368, "Free ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1369, "div", 172);
      \u0275\u0275element(1370, "i", 143);
      \u0275\u0275elementStart(1371, "span");
      \u0275\u0275text(1372, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(1373, "div", 129)(1374, "div", 159)(1375, "div", 160)(1376, "div", 161)(1377, "a", 79);
      \u0275\u0275element(1378, "img", 179);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1379, "div", 163)(1380, "a", 98);
      \u0275\u0275element(1381, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1382, "div", 165)(1383, "div", 166)(1384, "div", 167)(1385, "a", 79);
      \u0275\u0275element(1386, "img", 155);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1387, "div", 135)(1388, "p");
      \u0275\u0275text(1389, "Business Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1390, "h3", 136)(1391, "a", 79);
      \u0275\u0275text(1392, "Build Websites with HTML5 CSS3 Javascript");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1393, "div", 137)(1394, "div", 168);
      \u0275\u0275element(1395, "img", 138);
      \u0275\u0275elementStart(1396, "p");
      \u0275\u0275text(1397, "400 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1398, "div", 174)(1399, "div", 170)(1400, "div", 171)(1401, "h3");
      \u0275\u0275text(1402, "$650 ");
      \u0275\u0275elementStart(1403, "span");
      \u0275\u0275text(1404, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1405, "div", 172);
      \u0275\u0275element(1406, "i", 143);
      \u0275\u0275elementStart(1407, "span");
      \u0275\u0275text(1408, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(1409, "div", 129)(1410, "div", 159)(1411, "div", 160)(1412, "div", 161)(1413, "a", 79);
      \u0275\u0275element(1414, "img", 180);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1415, "div", 163)(1416, "a", 98);
      \u0275\u0275element(1417, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1418, "div", 165)(1419, "div", 166)(1420, "div", 167)(1421, "a", 79);
      \u0275\u0275element(1422, "img", 157);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1423, "div", 135)(1424, "p");
      \u0275\u0275text(1425, "Creative Arts & media");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1426, "h3", 136)(1427, "a", 79);
      \u0275\u0275text(1428, "Build Responsive Websites with HTML");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1429, "div", 137)(1430, "div", 168);
      \u0275\u0275element(1431, "img", 138);
      \u0275\u0275elementStart(1432, "p");
      \u0275\u0275text(1433, "400 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1434, "div", 174)(1435, "div", 170)(1436, "div", 171)(1437, "h3");
      \u0275\u0275text(1438, "$300 ");
      \u0275\u0275elementStart(1439, "span");
      \u0275\u0275text(1440, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1441, "div", 172);
      \u0275\u0275element(1442, "i", 143);
      \u0275\u0275elementStart(1443, "span");
      \u0275\u0275text(1444, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(1445, "div", 183)(1446, "div", 128)(1447, "div", 73)(1448, "div", 129)(1449, "div", 159)(1450, "div", 160)(1451, "div", 161)(1452, "a", 79);
      \u0275\u0275element(1453, "img", 162);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1454, "div", 163)(1455, "a", 98);
      \u0275\u0275element(1456, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1457, "div", 165)(1458, "div", 166)(1459, "div", 167)(1460, "a", 79);
      \u0275\u0275element(1461, "img", 145);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1462, "div", 135)(1463, "p");
      \u0275\u0275text(1464, "Web Design");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1465, "h3", 136)(1466, "a", 79);
      \u0275\u0275text(1467, "Build Responsive Websites with HTML");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1468, "div", 137)(1469, "div", 168);
      \u0275\u0275element(1470, "img", 138);
      \u0275\u0275elementStart(1471, "p");
      \u0275\u0275text(1472, "450 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1473, "div", 169)(1474, "div", 170)(1475, "div", 171)(1476, "h3");
      \u0275\u0275text(1477, "$650 ");
      \u0275\u0275elementStart(1478, "span");
      \u0275\u0275text(1479, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1480, "div", 172);
      \u0275\u0275element(1481, "i", 143);
      \u0275\u0275elementStart(1482, "span");
      \u0275\u0275text(1483, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(1484, "div", 129)(1485, "div", 159)(1486, "div", 160)(1487, "div", 161)(1488, "a", 79);
      \u0275\u0275element(1489, "img", 173);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1490, "div", 163)(1491, "a", 98);
      \u0275\u0275element(1492, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1493, "div", 165)(1494, "div", 166)(1495, "div", 167)(1496, "a", 79);
      \u0275\u0275element(1497, "img", 134);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1498, "div", 135)(1499, "p");
      \u0275\u0275text(1500, "Pyhton Development");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1501, "h3", 136)(1502, "a", 79);
      \u0275\u0275text(1503, "The Complete Web Developer PHP Course");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1504, "div", 137)(1505, "div", 168);
      \u0275\u0275element(1506, "img", 138);
      \u0275\u0275elementStart(1507, "p");
      \u0275\u0275text(1508, "500 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1509, "div", 174)(1510, "div", 170)(1511, "div", 171)(1512, "h3");
      \u0275\u0275text(1513, "$650 ");
      \u0275\u0275elementStart(1514, "span");
      \u0275\u0275text(1515, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1516, "div", 172);
      \u0275\u0275element(1517, "i", 143);
      \u0275\u0275elementStart(1518, "span");
      \u0275\u0275text(1519, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(1520, "div", 129)(1521, "div", 159)(1522, "div", 160)(1523, "div", 161)(1524, "a", 79);
      \u0275\u0275element(1525, "img", 175);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1526, "div", 163)(1527, "a", 98);
      \u0275\u0275element(1528, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1529, "div", 165)(1530, "div", 166)(1531, "div", 167)(1532, "a", 79);
      \u0275\u0275element(1533, "img", 147);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1534, "div", 135)(1535, "p");
      \u0275\u0275text(1536, "Business Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1537, "h3", 136)(1538, "a", 79);
      \u0275\u0275text(1539, "The Complete Business Management Course");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1540, "div", 137)(1541, "div", 168);
      \u0275\u0275element(1542, "img", 138);
      \u0275\u0275elementStart(1543, "p");
      \u0275\u0275text(1544, "400 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1545, "div", 174)(1546, "div", 170)(1547, "div", 171)(1548, "h3");
      \u0275\u0275text(1549, "$300 ");
      \u0275\u0275elementStart(1550, "span");
      \u0275\u0275text(1551, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1552, "div", 172);
      \u0275\u0275element(1553, "i", 143);
      \u0275\u0275elementStart(1554, "span");
      \u0275\u0275text(1555, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(1556, "div", 129)(1557, "div", 159)(1558, "div", 160)(1559, "div", 161)(1560, "a", 79);
      \u0275\u0275element(1561, "img", 176);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1562, "div", 163)(1563, "a", 98);
      \u0275\u0275element(1564, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1565, "div", 165)(1566, "div", 166)(1567, "div", 167)(1568, "a", 79);
      \u0275\u0275element(1569, "img", 149);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1570, "div", 135)(1571, "p");
      \u0275\u0275text(1572, "Creative Arts & media");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1573, "h3", 136)(1574, "a", 79);
      \u0275\u0275text(1575, "Build Creative Arts & media Course Completed");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1576, "div", 137)(1577, "div", 168);
      \u0275\u0275element(1578, "img", 138);
      \u0275\u0275elementStart(1579, "p");
      \u0275\u0275text(1580, "250 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1581, "div", 174)(1582, "div", 170)(1583, "div", 171)(1584, "h3");
      \u0275\u0275text(1585, "$700 ");
      \u0275\u0275elementStart(1586, "span");
      \u0275\u0275text(1587, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1588, "div", 172);
      \u0275\u0275element(1589, "i", 143);
      \u0275\u0275elementStart(1590, "span");
      \u0275\u0275text(1591, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(1592, "div", 129)(1593, "div", 159)(1594, "div", 160)(1595, "div", 161)(1596, "a", 79);
      \u0275\u0275element(1597, "img", 177);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1598, "div", 163)(1599, "a", 98);
      \u0275\u0275element(1600, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1601, "div", 165)(1602, "div", 166)(1603, "div", 167)(1604, "a", 79);
      \u0275\u0275element(1605, "img", 151);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1606, "div", 135)(1607, "p");
      \u0275\u0275text(1608, "Personalized Learning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1609, "h3", 136)(1610, "a", 79);
      \u0275\u0275text(1611, "Build Responsive Websites with HTML");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1612, "div", 137)(1613, "div", 168);
      \u0275\u0275element(1614, "img", 138);
      \u0275\u0275elementStart(1615, "p");
      \u0275\u0275text(1616, "400 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1617, "div", 174)(1618, "div", 170)(1619, "div", 171)(1620, "h3");
      \u0275\u0275text(1621, "$650 ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1622, "div", 172);
      \u0275\u0275element(1623, "i", 143);
      \u0275\u0275elementStart(1624, "span");
      \u0275\u0275text(1625, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(1626, "div", 129)(1627, "div", 159)(1628, "div", 160)(1629, "div", 161)(1630, "a", 79);
      \u0275\u0275element(1631, "img", 178);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1632, "div", 163)(1633, "a", 98);
      \u0275\u0275element(1634, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1635, "div", 165)(1636, "div", 166)(1637, "div", 167)(1638, "a", 79);
      \u0275\u0275element(1639, "img", 153);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1640, "div", 135)(1641, "p");
      \u0275\u0275text(1642, "Pyhton Development");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1643, "h3", 136)(1644, "a", 79);
      \u0275\u0275text(1645, "The Complete Pyhton Development Course");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1646, "div", 137)(1647, "div", 168);
      \u0275\u0275element(1648, "img", 138);
      \u0275\u0275elementStart(1649, "p");
      \u0275\u0275text(1650, "400 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1651, "div", 174)(1652, "div", 170)(1653, "div", 171)(1654, "h3");
      \u0275\u0275text(1655, "Free ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1656, "div", 172);
      \u0275\u0275element(1657, "i", 143);
      \u0275\u0275elementStart(1658, "span");
      \u0275\u0275text(1659, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(1660, "div", 129)(1661, "div", 159)(1662, "div", 160)(1663, "div", 161)(1664, "a", 79);
      \u0275\u0275element(1665, "img", 179);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1666, "div", 163)(1667, "a", 98);
      \u0275\u0275element(1668, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1669, "div", 165)(1670, "div", 166)(1671, "div", 167)(1672, "a", 79);
      \u0275\u0275element(1673, "img", 155);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1674, "div", 135)(1675, "p");
      \u0275\u0275text(1676, "Business Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1677, "h3", 136)(1678, "a", 79);
      \u0275\u0275text(1679, "Build Websites with HTML5 CSS3 Javascript");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1680, "div", 137)(1681, "div", 168);
      \u0275\u0275element(1682, "img", 138);
      \u0275\u0275elementStart(1683, "p");
      \u0275\u0275text(1684, "400 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1685, "div", 174)(1686, "div", 170)(1687, "div", 171)(1688, "h3");
      \u0275\u0275text(1689, "$650 ");
      \u0275\u0275elementStart(1690, "span");
      \u0275\u0275text(1691, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1692, "div", 172);
      \u0275\u0275element(1693, "i", 143);
      \u0275\u0275elementStart(1694, "span");
      \u0275\u0275text(1695, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(1696, "div", 129)(1697, "div", 159)(1698, "div", 160)(1699, "div", 161)(1700, "a", 79);
      \u0275\u0275element(1701, "img", 180);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1702, "div", 163)(1703, "a", 98);
      \u0275\u0275element(1704, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1705, "div", 165)(1706, "div", 166)(1707, "div", 167)(1708, "a", 79);
      \u0275\u0275element(1709, "img", 157);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1710, "div", 135)(1711, "p");
      \u0275\u0275text(1712, "Creative Arts & media");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1713, "h3", 136)(1714, "a", 79);
      \u0275\u0275text(1715, "Build Responsive Websites with HTML");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1716, "div", 137)(1717, "div", 168);
      \u0275\u0275element(1718, "img", 138);
      \u0275\u0275elementStart(1719, "p");
      \u0275\u0275text(1720, "400 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1721, "div", 174)(1722, "div", 170)(1723, "div", 171)(1724, "h3");
      \u0275\u0275text(1725, "$300 ");
      \u0275\u0275elementStart(1726, "span");
      \u0275\u0275text(1727, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1728, "div", 172);
      \u0275\u0275element(1729, "i", 143);
      \u0275\u0275elementStart(1730, "span");
      \u0275\u0275text(1731, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(1732, "div", 184)(1733, "div", 128)(1734, "div", 73)(1735, "div", 129)(1736, "div", 159)(1737, "div", 160)(1738, "div", 161)(1739, "a", 79);
      \u0275\u0275element(1740, "img", 162);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1741, "div", 163)(1742, "a", 98);
      \u0275\u0275element(1743, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1744, "div", 165)(1745, "div", 166)(1746, "div", 167)(1747, "a", 79);
      \u0275\u0275element(1748, "img", 145);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1749, "div", 135)(1750, "p");
      \u0275\u0275text(1751, "Web Design");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1752, "h3", 136)(1753, "a", 79);
      \u0275\u0275text(1754, "Build Responsive Websites with HTML");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1755, "div", 137)(1756, "div", 168);
      \u0275\u0275element(1757, "img", 138);
      \u0275\u0275elementStart(1758, "p");
      \u0275\u0275text(1759, "450 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1760, "div", 169)(1761, "div", 170)(1762, "div", 171)(1763, "h3");
      \u0275\u0275text(1764, "$650 ");
      \u0275\u0275elementStart(1765, "span");
      \u0275\u0275text(1766, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1767, "div", 172);
      \u0275\u0275element(1768, "i", 143);
      \u0275\u0275elementStart(1769, "span");
      \u0275\u0275text(1770, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(1771, "div", 129)(1772, "div", 159)(1773, "div", 160)(1774, "div", 161)(1775, "a", 79);
      \u0275\u0275element(1776, "img", 173);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1777, "div", 163)(1778, "a", 98);
      \u0275\u0275element(1779, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1780, "div", 165)(1781, "div", 166)(1782, "div", 167)(1783, "a", 79);
      \u0275\u0275element(1784, "img", 134);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1785, "div", 135)(1786, "p");
      \u0275\u0275text(1787, "Pyhton Development");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1788, "h3", 136)(1789, "a", 79);
      \u0275\u0275text(1790, "The Complete Web Developer PHP Course");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1791, "div", 137)(1792, "div", 168);
      \u0275\u0275element(1793, "img", 138);
      \u0275\u0275elementStart(1794, "p");
      \u0275\u0275text(1795, "500 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1796, "div", 174)(1797, "div", 170)(1798, "div", 171)(1799, "h3");
      \u0275\u0275text(1800, "$650 ");
      \u0275\u0275elementStart(1801, "span");
      \u0275\u0275text(1802, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1803, "div", 172);
      \u0275\u0275element(1804, "i", 143);
      \u0275\u0275elementStart(1805, "span");
      \u0275\u0275text(1806, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(1807, "div", 129)(1808, "div", 159)(1809, "div", 160)(1810, "div", 161)(1811, "a", 79);
      \u0275\u0275element(1812, "img", 175);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1813, "div", 163)(1814, "a", 98);
      \u0275\u0275element(1815, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1816, "div", 165)(1817, "div", 166)(1818, "div", 167)(1819, "a", 79);
      \u0275\u0275element(1820, "img", 147);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1821, "div", 135)(1822, "p");
      \u0275\u0275text(1823, "Business Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1824, "h3", 136)(1825, "a", 79);
      \u0275\u0275text(1826, "The Complete Business Management Course");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1827, "div", 137)(1828, "div", 168);
      \u0275\u0275element(1829, "img", 138);
      \u0275\u0275elementStart(1830, "p");
      \u0275\u0275text(1831, "400 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1832, "div", 174)(1833, "div", 170)(1834, "div", 171)(1835, "h3");
      \u0275\u0275text(1836, "$300 ");
      \u0275\u0275elementStart(1837, "span");
      \u0275\u0275text(1838, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1839, "div", 172);
      \u0275\u0275element(1840, "i", 143);
      \u0275\u0275elementStart(1841, "span");
      \u0275\u0275text(1842, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(1843, "div", 129)(1844, "div", 159)(1845, "div", 160)(1846, "div", 161)(1847, "a", 79);
      \u0275\u0275element(1848, "img", 176);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1849, "div", 163)(1850, "a", 98);
      \u0275\u0275element(1851, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1852, "div", 165)(1853, "div", 166)(1854, "div", 167)(1855, "a", 79);
      \u0275\u0275element(1856, "img", 149);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1857, "div", 135)(1858, "p");
      \u0275\u0275text(1859, "Creative Arts & media");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1860, "h3", 136)(1861, "a", 79);
      \u0275\u0275text(1862, "Build Creative Arts & media Course Completed");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1863, "div", 137)(1864, "div", 168);
      \u0275\u0275element(1865, "img", 138);
      \u0275\u0275elementStart(1866, "p");
      \u0275\u0275text(1867, "250 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1868, "div", 174)(1869, "div", 170)(1870, "div", 171)(1871, "h3");
      \u0275\u0275text(1872, "$700 ");
      \u0275\u0275elementStart(1873, "span");
      \u0275\u0275text(1874, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1875, "div", 172);
      \u0275\u0275element(1876, "i", 143);
      \u0275\u0275elementStart(1877, "span");
      \u0275\u0275text(1878, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(1879, "div", 129)(1880, "div", 159)(1881, "div", 160)(1882, "div", 161)(1883, "a", 79);
      \u0275\u0275element(1884, "img", 177);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1885, "div", 163)(1886, "a", 98);
      \u0275\u0275element(1887, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1888, "div", 165)(1889, "div", 166)(1890, "div", 167)(1891, "a", 79);
      \u0275\u0275element(1892, "img", 151);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1893, "div", 135)(1894, "p");
      \u0275\u0275text(1895, "Personalized Learning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1896, "h3", 136)(1897, "a", 79);
      \u0275\u0275text(1898, "Build Responsive Websites with HTML");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1899, "div", 137)(1900, "div", 168);
      \u0275\u0275element(1901, "img", 138);
      \u0275\u0275elementStart(1902, "p");
      \u0275\u0275text(1903, "400 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1904, "div", 174)(1905, "div", 170)(1906, "div", 171)(1907, "h3");
      \u0275\u0275text(1908, "$650 ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1909, "div", 172);
      \u0275\u0275element(1910, "i", 143);
      \u0275\u0275elementStart(1911, "span");
      \u0275\u0275text(1912, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(1913, "div", 129)(1914, "div", 159)(1915, "div", 160)(1916, "div", 161)(1917, "a", 79);
      \u0275\u0275element(1918, "img", 178);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1919, "div", 163)(1920, "a", 98);
      \u0275\u0275element(1921, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1922, "div", 165)(1923, "div", 166)(1924, "div", 167)(1925, "a", 79);
      \u0275\u0275element(1926, "img", 153);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1927, "div", 135)(1928, "p");
      \u0275\u0275text(1929, "Pyhton Development");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1930, "h3", 136)(1931, "a", 79);
      \u0275\u0275text(1932, "The Complete Pyhton Development Course");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1933, "div", 137)(1934, "div", 168);
      \u0275\u0275element(1935, "img", 138);
      \u0275\u0275elementStart(1936, "p");
      \u0275\u0275text(1937, "400 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1938, "div", 174)(1939, "div", 170)(1940, "div", 171)(1941, "h3");
      \u0275\u0275text(1942, "Free ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1943, "div", 172);
      \u0275\u0275element(1944, "i", 143);
      \u0275\u0275elementStart(1945, "span");
      \u0275\u0275text(1946, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(1947, "div", 129)(1948, "div", 159)(1949, "div", 160)(1950, "div", 161)(1951, "a", 79);
      \u0275\u0275element(1952, "img", 179);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1953, "div", 163)(1954, "a", 98);
      \u0275\u0275element(1955, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1956, "div", 165)(1957, "div", 166)(1958, "div", 167)(1959, "a", 79);
      \u0275\u0275element(1960, "img", 155);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1961, "div", 135)(1962, "p");
      \u0275\u0275text(1963, "Business Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1964, "h3", 136)(1965, "a", 79);
      \u0275\u0275text(1966, "Build Websites with HTML5 CSS3 Javascript");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1967, "div", 137)(1968, "div", 168);
      \u0275\u0275element(1969, "img", 138);
      \u0275\u0275elementStart(1970, "p");
      \u0275\u0275text(1971, "400 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1972, "div", 174)(1973, "div", 170)(1974, "div", 171)(1975, "h3");
      \u0275\u0275text(1976, "$650 ");
      \u0275\u0275elementStart(1977, "span");
      \u0275\u0275text(1978, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1979, "div", 172);
      \u0275\u0275element(1980, "i", 143);
      \u0275\u0275elementStart(1981, "span");
      \u0275\u0275text(1982, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(1983, "div", 129)(1984, "div", 159)(1985, "div", 160)(1986, "div", 161)(1987, "a", 79);
      \u0275\u0275element(1988, "img", 180);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1989, "div", 163)(1990, "a", 98);
      \u0275\u0275element(1991, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1992, "div", 165)(1993, "div", 166)(1994, "div", 167)(1995, "a", 79);
      \u0275\u0275element(1996, "img", 157);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1997, "div", 135)(1998, "p");
      \u0275\u0275text(1999, "Creative Arts & media");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2e3, "h3", 136)(2001, "a", 79);
      \u0275\u0275text(2002, "Build Responsive Websites with HTML");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2003, "div", 137)(2004, "div", 168);
      \u0275\u0275element(2005, "img", 138);
      \u0275\u0275elementStart(2006, "p");
      \u0275\u0275text(2007, "400 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2008, "div", 174)(2009, "div", 170)(2010, "div", 171)(2011, "h3");
      \u0275\u0275text(2012, "$300 ");
      \u0275\u0275elementStart(2013, "span");
      \u0275\u0275text(2014, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2015, "div", 172);
      \u0275\u0275element(2016, "i", 143);
      \u0275\u0275elementStart(2017, "span");
      \u0275\u0275text(2018, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(2019, "div", 185)(2020, "div", 128)(2021, "div", 73)(2022, "div", 129)(2023, "div", 159)(2024, "div", 160)(2025, "div", 161)(2026, "a", 79);
      \u0275\u0275element(2027, "img", 162);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2028, "div", 163)(2029, "a", 98);
      \u0275\u0275element(2030, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2031, "div", 165)(2032, "div", 166)(2033, "div", 167)(2034, "a", 79);
      \u0275\u0275element(2035, "img", 145);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2036, "div", 135)(2037, "p");
      \u0275\u0275text(2038, "Web Design");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2039, "h3", 136)(2040, "a", 79);
      \u0275\u0275text(2041, "Build Responsive Websites with HTML");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2042, "div", 137)(2043, "div", 168);
      \u0275\u0275element(2044, "img", 138);
      \u0275\u0275elementStart(2045, "p");
      \u0275\u0275text(2046, "450 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2047, "div", 169)(2048, "div", 170)(2049, "div", 171)(2050, "h3");
      \u0275\u0275text(2051, "$650 ");
      \u0275\u0275elementStart(2052, "span");
      \u0275\u0275text(2053, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2054, "div", 172);
      \u0275\u0275element(2055, "i", 143);
      \u0275\u0275elementStart(2056, "span");
      \u0275\u0275text(2057, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(2058, "div", 129)(2059, "div", 159)(2060, "div", 160)(2061, "div", 161)(2062, "a", 79);
      \u0275\u0275element(2063, "img", 173);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2064, "div", 163)(2065, "a", 98);
      \u0275\u0275element(2066, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2067, "div", 165)(2068, "div", 166)(2069, "div", 167)(2070, "a", 79);
      \u0275\u0275element(2071, "img", 134);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2072, "div", 135)(2073, "p");
      \u0275\u0275text(2074, "Pyhton Development");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2075, "h3", 136)(2076, "a", 79);
      \u0275\u0275text(2077, "The Complete Web Developer PHP Course");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2078, "div", 137)(2079, "div", 168);
      \u0275\u0275element(2080, "img", 138);
      \u0275\u0275elementStart(2081, "p");
      \u0275\u0275text(2082, "500 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2083, "div", 174)(2084, "div", 170)(2085, "div", 171)(2086, "h3");
      \u0275\u0275text(2087, "$650 ");
      \u0275\u0275elementStart(2088, "span");
      \u0275\u0275text(2089, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2090, "div", 172);
      \u0275\u0275element(2091, "i", 143);
      \u0275\u0275elementStart(2092, "span");
      \u0275\u0275text(2093, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(2094, "div", 129)(2095, "div", 159)(2096, "div", 160)(2097, "div", 161)(2098, "a", 79);
      \u0275\u0275element(2099, "img", 175);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2100, "div", 163)(2101, "a", 98);
      \u0275\u0275element(2102, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2103, "div", 165)(2104, "div", 166)(2105, "div", 167)(2106, "a", 79);
      \u0275\u0275element(2107, "img", 147);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2108, "div", 135)(2109, "p");
      \u0275\u0275text(2110, "Business Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2111, "h3", 136)(2112, "a", 79);
      \u0275\u0275text(2113, "The Complete Business Management Course");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2114, "div", 137)(2115, "div", 168);
      \u0275\u0275element(2116, "img", 138);
      \u0275\u0275elementStart(2117, "p");
      \u0275\u0275text(2118, "400 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2119, "div", 174)(2120, "div", 170)(2121, "div", 171)(2122, "h3");
      \u0275\u0275text(2123, "$300 ");
      \u0275\u0275elementStart(2124, "span");
      \u0275\u0275text(2125, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2126, "div", 172);
      \u0275\u0275element(2127, "i", 143);
      \u0275\u0275elementStart(2128, "span");
      \u0275\u0275text(2129, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(2130, "div", 129)(2131, "div", 159)(2132, "div", 160)(2133, "div", 161)(2134, "a", 79);
      \u0275\u0275element(2135, "img", 176);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2136, "div", 163)(2137, "a", 98);
      \u0275\u0275element(2138, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2139, "div", 165)(2140, "div", 166)(2141, "div", 167)(2142, "a", 79);
      \u0275\u0275element(2143, "img", 149);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2144, "div", 135)(2145, "p");
      \u0275\u0275text(2146, "Creative Arts & media");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2147, "h3", 136)(2148, "a", 79);
      \u0275\u0275text(2149, "Build Creative Arts & media Course Completed");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2150, "div", 137)(2151, "div", 168);
      \u0275\u0275element(2152, "img", 138);
      \u0275\u0275elementStart(2153, "p");
      \u0275\u0275text(2154, "250 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2155, "div", 174)(2156, "div", 170)(2157, "div", 171)(2158, "h3");
      \u0275\u0275text(2159, "$700 ");
      \u0275\u0275elementStart(2160, "span");
      \u0275\u0275text(2161, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2162, "div", 172);
      \u0275\u0275element(2163, "i", 143);
      \u0275\u0275elementStart(2164, "span");
      \u0275\u0275text(2165, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(2166, "div", 129)(2167, "div", 159)(2168, "div", 160)(2169, "div", 161)(2170, "a", 79);
      \u0275\u0275element(2171, "img", 177);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2172, "div", 163)(2173, "a", 98);
      \u0275\u0275element(2174, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2175, "div", 165)(2176, "div", 166)(2177, "div", 167)(2178, "a", 79);
      \u0275\u0275element(2179, "img", 151);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2180, "div", 135)(2181, "p");
      \u0275\u0275text(2182, "Personalized Learning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2183, "h3", 136)(2184, "a", 79);
      \u0275\u0275text(2185, "Build Responsive Websites with HTML");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2186, "div", 137)(2187, "div", 168);
      \u0275\u0275element(2188, "img", 138);
      \u0275\u0275elementStart(2189, "p");
      \u0275\u0275text(2190, "400 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2191, "div", 174)(2192, "div", 170)(2193, "div", 171)(2194, "h3");
      \u0275\u0275text(2195, "$650 ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2196, "div", 172);
      \u0275\u0275element(2197, "i", 143);
      \u0275\u0275elementStart(2198, "span");
      \u0275\u0275text(2199, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(2200, "div", 129)(2201, "div", 159)(2202, "div", 160)(2203, "div", 161)(2204, "a", 79);
      \u0275\u0275element(2205, "img", 178);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2206, "div", 163)(2207, "a", 98);
      \u0275\u0275element(2208, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2209, "div", 165)(2210, "div", 166)(2211, "div", 167)(2212, "a", 79);
      \u0275\u0275element(2213, "img", 153);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2214, "div", 135)(2215, "p");
      \u0275\u0275text(2216, "Pyhton Development");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2217, "h3", 136)(2218, "a", 79);
      \u0275\u0275text(2219, "The Complete Pyhton Development Course");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2220, "div", 137)(2221, "div", 168);
      \u0275\u0275element(2222, "img", 138);
      \u0275\u0275elementStart(2223, "p");
      \u0275\u0275text(2224, "400 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2225, "div", 174)(2226, "div", 170)(2227, "div", 171)(2228, "h3");
      \u0275\u0275text(2229, "Free ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2230, "div", 172);
      \u0275\u0275element(2231, "i", 143);
      \u0275\u0275elementStart(2232, "span");
      \u0275\u0275text(2233, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(2234, "div", 129)(2235, "div", 159)(2236, "div", 160)(2237, "div", 161)(2238, "a", 79);
      \u0275\u0275element(2239, "img", 179);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2240, "div", 163)(2241, "a", 98);
      \u0275\u0275element(2242, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2243, "div", 165)(2244, "div", 166)(2245, "div", 167)(2246, "a", 79);
      \u0275\u0275element(2247, "img", 155);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2248, "div", 135)(2249, "p");
      \u0275\u0275text(2250, "Business Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2251, "h3", 136)(2252, "a", 79);
      \u0275\u0275text(2253, "Build Websites with HTML5 CSS3 Javascript");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2254, "div", 137)(2255, "div", 168);
      \u0275\u0275element(2256, "img", 138);
      \u0275\u0275elementStart(2257, "p");
      \u0275\u0275text(2258, "400 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2259, "div", 174)(2260, "div", 170)(2261, "div", 171)(2262, "h3");
      \u0275\u0275text(2263, "$650 ");
      \u0275\u0275elementStart(2264, "span");
      \u0275\u0275text(2265, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2266, "div", 172);
      \u0275\u0275element(2267, "i", 143);
      \u0275\u0275elementStart(2268, "span");
      \u0275\u0275text(2269, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(2270, "div", 129)(2271, "div", 159)(2272, "div", 160)(2273, "div", 161)(2274, "a", 79);
      \u0275\u0275element(2275, "img", 180);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2276, "div", 163)(2277, "a", 98);
      \u0275\u0275element(2278, "i", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2279, "div", 165)(2280, "div", 166)(2281, "div", 167)(2282, "a", 79);
      \u0275\u0275element(2283, "img", 157);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2284, "div", 135)(2285, "p");
      \u0275\u0275text(2286, "Creative Arts & media");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2287, "h3", 136)(2288, "a", 79);
      \u0275\u0275text(2289, "Build Responsive Websites with HTML");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2290, "div", 137)(2291, "div", 168);
      \u0275\u0275element(2292, "img", 138);
      \u0275\u0275elementStart(2293, "p");
      \u0275\u0275text(2294, "400 Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2295, "div", 174)(2296, "div", 170)(2297, "div", 171)(2298, "h3");
      \u0275\u0275text(2299, "$300 ");
      \u0275\u0275elementStart(2300, "span");
      \u0275\u0275text(2301, "$99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2302, "div", 172);
      \u0275\u0275element(2303, "i", 143);
      \u0275\u0275elementStart(2304, "span");
      \u0275\u0275text(2305, "6hr 30min");
      \u0275\u0275elementEnd()()()()()()()()()()();
      \u0275\u0275elementStart(2306, "div", 186)(2307, "a", 187);
      \u0275\u0275text(2308, "View all Courses");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(2309, "section", 188)(2310, "div", 189)(2311, "div", 190)(2312, "div", 191)(2313, "div", 192)(2314, "h2");
      \u0275\u0275text(2315, "Transform Access To Education");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2316, "p");
      \u0275\u0275text(2317, "Create an account to receive our newsletter, course recommendations and promotions.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2318, "div", 193)(2319, "div", 194)(2320, "a", 187);
      \u0275\u0275text(2321, "View all Courses");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2322, "section", 195)(2323, "div", 1)(2324, "div", 196)(2325, "div", 197)(2326, "div", 198)(2327, "h2");
      \u0275\u0275text(2328, "Acheive you Goals with DreamsLMS");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2329, "div", 199)(2330, "div", 200)(2331, "div", 201);
      \u0275\u0275element(2332, "img", 202);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2333, "div", 203)(2334, "h4")(2335, "span", 36);
      \u0275\u0275text(2336, "253,085");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2337, "p");
      \u0275\u0275text(2338, "Students Enrolled all over World");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2339, "div", 199)(2340, "div", 200)(2341, "div", 204);
      \u0275\u0275element(2342, "img", 205);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2343, "div", 203)(2344, "h4")(2345, "span", 36);
      \u0275\u0275text(2346, "1,205");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2347, "p");
      \u0275\u0275text(2348, "Total Courses on our Platform");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2349, "div", 199)(2350, "div", 200)(2351, "div", 206);
      \u0275\u0275element(2352, "img", 207);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2353, "div", 203)(2354, "h4")(2355, "span", 36);
      \u0275\u0275text(2356, "56");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2357, "p");
      \u0275\u0275text(2358, "Various Countries of	Students");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(2359, "section", 208)(2360, "div", 1)(2361, "div", 209);
      \u0275\u0275element(2362, "img", 210)(2363, "img", 211);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2364, "div", 212)(2365, "div", 213)(2366, "div", 214)(2367, "div", 215)(2368, "h2", 216);
      \u0275\u0275text(2369, "Accelerate Cloud Success ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2370, "div", 217)(2371, "p", 218);
      \u0275\u0275text(2372, "96% of eLearning for Business customers see improved results within six months. Whether you\u2019re a team of 10 or 10,000, faster cloud fluency starts here.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2373, "div", 219)(2374, "div", 2)(2375, "div", 220)(2376, "div", 49);
      \u0275\u0275element(2377, "img", 221)(2378, "img", 222)(2379, "img", 51)(2380, "img", 223);
      \u0275\u0275elementStart(2381, "div", 53);
      \u0275\u0275element(2382, "img", 224);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2383, "div", 225)(2384, "div", 226)(2385, "div", 227);
      \u0275\u0275element(2386, "img", 228);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2387, "h2", 229);
      \u0275\u0275text(2388, "Award Winning Course Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2389, "p", 230);
      \u0275\u0275text(2390, "An award-winning course management system (CMS) or program is typically recognized for its exceptional quality, innovation, and effectiveness in helping both instructors and students succeed.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2391, "ul", 231)(2392, "li", 232);
      \u0275\u0275element(2393, "i", 233);
      \u0275\u0275text(2394, "Interactive Tools for Engagement ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2395, "li", 232);
      \u0275\u0275element(2396, "i", 233);
      \u0275\u0275text(2397, "Customizable Course Creation ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2398, "li", 234);
      \u0275\u0275element(2399, "i", 233);
      \u0275\u0275text(2400, "Robust Analytics and Reporting ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2401, "li", 234);
      \u0275\u0275element(2402, "i", 233);
      \u0275\u0275text(2403, "Collaborative and Peer-to-Peer Learning ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2404, "li", 234);
      \u0275\u0275element(2405, "i", 233);
      \u0275\u0275text(2406, "The Most World Class Instructors ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2407, "div", 235)(2408, "div", 2)(2409, "div", 236)(2410, "div", 237)(2411, "div", 227);
      \u0275\u0275element(2412, "img", 238);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2413, "h2", 239);
      \u0275\u0275text(2414, "Learn anything from anywhere anytime");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2415, "p", 230);
      \u0275\u0275text(2416, "In today\u2019s fast-paced, digital world, the ability to learn anything, from anywhere, and at any time is more accessible than ever. Whether you are looking to expand your knowledge, gain new skills.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2417, "ul", 231)(2418, "li", 232);
      \u0275\u0275element(2419, "i", 240);
      \u0275\u0275text(2420, "Interactive Tools for Engagement ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2421, "li", 232);
      \u0275\u0275element(2422, "i", 240);
      \u0275\u0275text(2423, "Customizable Course Creation ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2424, "li", 234);
      \u0275\u0275element(2425, "i", 240);
      \u0275\u0275text(2426, "Robust Analytics and Reporting ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2427, "li", 234);
      \u0275\u0275element(2428, "i", 240);
      \u0275\u0275text(2429, "Collaborative and Peer-to-Peer Learning ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2430, "li", 234);
      \u0275\u0275element(2431, "i", 240);
      \u0275\u0275text(2432, "The Most World Class Instructors ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2433, "div", 220)(2434, "div", 241);
      \u0275\u0275element(2435, "img", 221)(2436, "img", 222)(2437, "img", 51)(2438, "img", 242);
      \u0275\u0275elementStart(2439, "div", 53);
      \u0275\u0275element(2440, "img", 243);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(2441, "div", 244)(2442, "div", 2)(2443, "div", 220)(2444, "div", 49);
      \u0275\u0275element(2445, "img", 221)(2446, "img", 222)(2447, "img", 51)(2448, "img", 245);
      \u0275\u0275elementStart(2449, "div", 53);
      \u0275\u0275element(2450, "img", 246);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2451, "div", 236)(2452, "div", 226)(2453, "div", 227);
      \u0275\u0275element(2454, "img", 247);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2455, "h2", 248);
      \u0275\u0275text(2456, "Certification for solid development of your Career");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2457, "p", 230);
      \u0275\u0275text(2458, "Certifications are a powerful way to enhance your skills, build credibility, and boost your career growth. In today\u2019s competitive job market, a professional certification.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2459, "ul", 231)(2460, "li", 232);
      \u0275\u0275element(2461, "i", 249);
      \u0275\u0275text(2462, "Demonstrates Expertise ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2463, "li", 232);
      \u0275\u0275element(2464, "i", 249);
      \u0275\u0275text(2465, "Boosts Your Credibility ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2466, "li", 234);
      \u0275\u0275element(2467, "i", 249);
      \u0275\u0275text(2468, "Improves Job Security ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2469, "li", 234);
      \u0275\u0275element(2470, "i", 249);
      \u0275\u0275text(2471, "Facilitates Career Advancement ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2472, "li", 234);
      \u0275\u0275element(2473, "i", 249);
      \u0275\u0275text(2474, "Fosters Personal Growth ");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(2475, "section", 250)(2476, "div", 1)(2477, "div", 73)(2478, "div", 74)(2479, "div", 75)(2480, "div", 117)(2481, "h2");
      \u0275\u0275text(2482, "Most Trending Courses");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2483, "div", 251)(2484, "div", 78)(2485, "a", 79);
      \u0275\u0275text(2486, "View All");
      \u0275\u0275element(2487, "i", 80);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(2488, "div", 252)(2489, "ngx-slick-carousel", 82)(2490, "div", 253)(2491, "div", 254)(2492, "div", 255)(2493, "div", 256)(2494, "a", 79);
      \u0275\u0275text(2495, "SEO, Marketing");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2496, "div", 257)(2497, "h3", 136)(2498, "a", 79);
      \u0275\u0275text(2499, "Digital Marketing Strategies for Successfull Business Growth");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2500, "p");
      \u0275\u0275text(2501, "Navigating the Tech World: The Ultimate Guide to Finding an IT Mentor ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2502, "div", 258)(2503, "div", 259);
      \u0275\u0275element(2504, "img", 260);
      \u0275\u0275elementStart(2505, "p");
      \u0275\u0275text(2506, "400 Students");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2507, "div", 172);
      \u0275\u0275element(2508, "i", 143);
      \u0275\u0275elementStart(2509, "span");
      \u0275\u0275text(2510, "6hr 30min");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2511, "div", 261)(2512, "div", 262)(2513, "div", 263)(2514, "div", 264)(2515, "h3");
      \u0275\u0275text(2516, "$300");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2517, "div", 265)(2518, "a", 79);
      \u0275\u0275element(2519, "img", 112);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2520, "div", 253)(2521, "div", 254)(2522, "div", 266)(2523, "div", 256)(2524, "a", 79);
      \u0275\u0275text(2525, "Personalised Learning");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2526, "div", 257)(2527, "h3", 136)(2528, "a", 79);
      \u0275\u0275text(2529, "Starting Your Own Business: From Idea to Launch");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2530, "p");
      \u0275\u0275text(2531, "Learn how mentorship can help guide your decision-making process");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2532, "div", 258)(2533, "div", 259);
      \u0275\u0275element(2534, "img", 267);
      \u0275\u0275elementStart(2535, "p");
      \u0275\u0275text(2536, "900 Students");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2537, "div", 172);
      \u0275\u0275element(2538, "i", 143);
      \u0275\u0275elementStart(2539, "span");
      \u0275\u0275text(2540, "9hr 30min");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2541, "div", 261)(2542, "div", 262)(2543, "div", 263)(2544, "div", 264)(2545, "h3");
      \u0275\u0275text(2546, "$800");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2547, "div", 265)(2548, "a", 79);
      \u0275\u0275element(2549, "img", 113);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2550, "div", 253)(2551, "div", 254)(2552, "div", 268)(2553, "div", 256)(2554, "a", 79);
      \u0275\u0275text(2555, "Finance");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2556, "div", 257)(2557, "h3", 136)(2558, "a", 79);
      \u0275\u0275text(2559, "Financial Literacy: Managing Your Money for Long-Term Growth");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2560, "p");
      \u0275\u0275text(2561, "The tech industry is vast and ever-changing, but a mentor can help ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2562, "div", 258)(2563, "div", 259);
      \u0275\u0275element(2564, "img", 267);
      \u0275\u0275elementStart(2565, "p");
      \u0275\u0275text(2566, "400 Students");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2567, "div", 172);
      \u0275\u0275element(2568, "i", 143);
      \u0275\u0275elementStart(2569, "span");
      \u0275\u0275text(2570, "6hr 30min");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2571, "div", 261)(2572, "div", 262)(2573, "div", 263)(2574, "div", 264)(2575, "h3");
      \u0275\u0275text(2576, "$300");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2577, "div", 265)(2578, "a", 79);
      \u0275\u0275element(2579, "img", 114);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2580, "div", 253)(2581, "div", 254)(2582, "div", 269)(2583, "div", 256)(2584, "a", 79);
      \u0275\u0275text(2585, "Business Management");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2586, "div", 257)(2587, "h3", 136)(2588, "a", 79);
      \u0275\u0275text(2589, "The Complete Web Developer PHP framework Course 2.0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2590, "p");
      \u0275\u0275text(2591, "Scaling a business requires more than just hard work\u2014it requires");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2592, "div", 258)(2593, "div", 259);
      \u0275\u0275element(2594, "img", 267);
      \u0275\u0275elementStart(2595, "p");
      \u0275\u0275text(2596, "900 Students");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2597, "div", 172);
      \u0275\u0275element(2598, "i", 143);
      \u0275\u0275elementStart(2599, "span");
      \u0275\u0275text(2600, "4hr 30min");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2601, "div", 261)(2602, "div", 262)(2603, "div", 263)(2604, "div", 264)(2605, "h3");
      \u0275\u0275text(2606, "$200");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2607, "div", 265)(2608, "a", 79);
      \u0275\u0275element(2609, "img", 108);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2610, "div", 253)(2611, "div", 270)(2612, "div", 255)(2613, "div", 256)(2614, "a", 79);
      \u0275\u0275text(2615, "SEO, Marketing");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2616, "div", 257)(2617, "h3", 136)(2618, "a", 79);
      \u0275\u0275text(2619, "Digital Marketing Strategies for Successfull Business Growth");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2620, "p");
      \u0275\u0275text(2621, "The tech industry is vast and ever-changing, but a mentor can help ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2622, "div", 258)(2623, "div", 259);
      \u0275\u0275element(2624, "img", 260);
      \u0275\u0275elementStart(2625, "p");
      \u0275\u0275text(2626, "400 Students");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2627, "div", 172);
      \u0275\u0275element(2628, "i", 143);
      \u0275\u0275elementStart(2629, "span");
      \u0275\u0275text(2630, "6hr 30min");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2631, "div", 261)(2632, "div", 262)(2633, "div", 263)(2634, "div", 264)(2635, "h3");
      \u0275\u0275text(2636, "$300");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2637, "div", 265)(2638, "a", 79);
      \u0275\u0275element(2639, "img", 109);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2640, "div", 253)(2641, "div", 254)(2642, "div", 266)(2643, "div", 256)(2644, "a", 79);
      \u0275\u0275text(2645, "Personalised Learning");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2646, "div", 257)(2647, "h3", 136)(2648, "a", 79);
      \u0275\u0275text(2649, "Financial Literacy: Managing Your Money for Long-Term");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2650, "p");
      \u0275\u0275text(2651, "Learn how mentorship can help guide your decision-making process ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2652, "div", 258)(2653, "div", 259);
      \u0275\u0275element(2654, "img", 267);
      \u0275\u0275elementStart(2655, "p");
      \u0275\u0275text(2656, "900 Students");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2657, "div", 172);
      \u0275\u0275element(2658, "i", 143);
      \u0275\u0275elementStart(2659, "span");
      \u0275\u0275text(2660, "9hr 30min");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2661, "div", 261)(2662, "div", 262)(2663, "div", 263)(2664, "div", 264)(2665, "h3");
      \u0275\u0275text(2666, "$800");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2667, "div", 265)(2668, "a", 79);
      \u0275\u0275element(2669, "img", 110);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2670, "div", 253)(2671, "div", 254)(2672, "div", 268)(2673, "div", 256)(2674, "a", 79);
      \u0275\u0275text(2675, "Finance");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2676, "div", 257)(2677, "h3", 136)(2678, "a", 79);
      \u0275\u0275text(2679, "Financial Literacy: Managing Your Money for Long-Term");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2680, "p");
      \u0275\u0275text(2681, "The tech industry is vast and ever-changing, but a mentor can help");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2682, "div", 258)(2683, "div", 259);
      \u0275\u0275element(2684, "img", 267);
      \u0275\u0275elementStart(2685, "p");
      \u0275\u0275text(2686, "400 Students");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2687, "div", 172);
      \u0275\u0275element(2688, "i", 143);
      \u0275\u0275elementStart(2689, "span");
      \u0275\u0275text(2690, "6hr 30min");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2691, "div", 261)(2692, "div", 262)(2693, "div", 263)(2694, "div", 264)(2695, "h3");
      \u0275\u0275text(2696, "$300");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2697, "div", 265)(2698, "a", 79);
      \u0275\u0275element(2699, "img", 104);
      \u0275\u0275elementEnd()()()()()()()()()()();
      \u0275\u0275elementStart(2700, "section", 271);
      \u0275\u0275element(2701, "img", 272);
      \u0275\u0275elementStart(2702, "div", 1)(2703, "div", 74)(2704, "div", 75)(2705, "div", 273)(2706, "h2");
      \u0275\u0275text(2707, "Courses Taught by Real Instructor");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2708, "div", 273)(2709, "div", 78)(2710, "a", 79);
      \u0275\u0275text(2711, "View all");
      \u0275\u0275element(2712, "i", 80);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(2713, "div", 274)(2714, "div", 73)(2715, "div", 275)(2716, "div", 73)(2717, "div", 276)(2718, "div", 277)(2719, "div", 278);
      \u0275\u0275element(2720, "img", 279);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2721, "div", 280)(2722, "div", 281)(2723, "a", 282);
      \u0275\u0275element(2724, "i", 283);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2725, "div", 284)(2726, "div")(2727, "h6")(2728, "a", 79);
      \u0275\u0275text(2729, "David");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2730, "p");
      \u0275\u0275text(2731, "Angular Js");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2732, "div")(2733, "a", 285);
      \u0275\u0275element(2734, "i", 21);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2735, "div", 286)(2736, "div", 277)(2737, "div", 278);
      \u0275\u0275element(2738, "img", 287);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2739, "div", 280)(2740, "div", 281)(2741, "a", 282);
      \u0275\u0275element(2742, "i", 283);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2743, "div", 284)(2744, "div")(2745, "h6")(2746, "a", 79);
      \u0275\u0275text(2747, "Maria");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2748, "p");
      \u0275\u0275text(2749, "Node Js");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2750, "div")(2751, "a", 285);
      \u0275\u0275element(2752, "i", 21);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2753, "div", 286)(2754, "div", 277)(2755, "div", 278);
      \u0275\u0275element(2756, "img", 288);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2757, "div", 280)(2758, "div", 281)(2759, "a", 282);
      \u0275\u0275element(2760, "i", 283);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2761, "div", 284)(2762, "div")(2763, "h6")(2764, "a", 79);
      \u0275\u0275text(2765, "Richardson");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2766, "p");
      \u0275\u0275text(2767, "React Js");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2768, "div")(2769, "a", 285);
      \u0275\u0275element(2770, "i", 21);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2771, "div", 276)(2772, "div", 277)(2773, "div", 278);
      \u0275\u0275element(2774, "img", 289);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2775, "div", 280)(2776, "div", 281)(2777, "a", 282);
      \u0275\u0275element(2778, "i", 283);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2779, "div", 284)(2780, "div")(2781, "h6")(2782, "a", 79);
      \u0275\u0275text(2783, "Patricia");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2784, "p");
      \u0275\u0275text(2785, "Vue Js");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2786, "div")(2787, "a", 285);
      \u0275\u0275element(2788, "i", 21);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(2789, "div", 290)(2790, "div", 277)(2791, "div", 278);
      \u0275\u0275element(2792, "img", 291);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2793, "div", 280)(2794, "div", 281)(2795, "a", 282);
      \u0275\u0275element(2796, "i", 283);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2797, "div", 284)(2798, "div")(2799, "h6")(2800, "a", 79);
      \u0275\u0275text(2801, "Hendriques");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2802, "p");
      \u0275\u0275text(2803, "Python Developer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2804, "div")(2805, "a", 285);
      \u0275\u0275element(2806, "i", 21);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2807, "div", 292)(2808, "div", 73)(2809, "div", 293)(2810, "div", 277)(2811, "div", 278);
      \u0275\u0275element(2812, "img", 294);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2813, "div", 280)(2814, "div", 281)(2815, "a", 282);
      \u0275\u0275element(2816, "i", 283);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2817, "div", 284)(2818, "div")(2819, "h6")(2820, "a", 79);
      \u0275\u0275text(2821, "Laura");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2822, "p");
      \u0275\u0275text(2823, "UI/UX Designer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2824, "div")(2825, "a", 285);
      \u0275\u0275element(2826, "i", 21);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2827, "div", 295)(2828, "div", 277)(2829, "div", 278);
      \u0275\u0275element(2830, "img", 296);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2831, "div", 280)(2832, "div", 281)(2833, "a", 282);
      \u0275\u0275element(2834, "i", 283);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2835, "div", 284)(2836, "div")(2837, "h6")(2838, "a", 79);
      \u0275\u0275text(2839, "Morgon");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2840, "p");
      \u0275\u0275text(2841, "Node Js");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2842, "div")(2843, "a", 285);
      \u0275\u0275element(2844, "i", 21);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2845, "div", 295)(2846, "div", 277)(2847, "div", 278);
      \u0275\u0275element(2848, "img", 297);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2849, "div", 280)(2850, "div", 281)(2851, "a", 282);
      \u0275\u0275element(2852, "i", 283);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2853, "div", 284)(2854, "div")(2855, "h6")(2856, "a", 79);
      \u0275\u0275text(2857, "Brook");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2858, "p");
      \u0275\u0275text(2859, "PHP Developer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2860, "div")(2861, "a", 285);
      \u0275\u0275element(2862, "i", 21);
      \u0275\u0275elementEnd()()()()()()()()()()()();
      \u0275\u0275elementStart(2863, "section", 298)(2864, "div", 1)(2865, "div", 190)(2866, "div", 299)(2867, "div", 300)(2868, "h2");
      \u0275\u0275text(2869, "Become An Instructor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2870, "p");
      \u0275\u0275text(2871, "Top instructors from around the world teach millions of students on DreamsLMS.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2872, "div", 301)(2873, "div", 53)(2874, "a", 302);
      \u0275\u0275text(2875, "Join Our Community");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(2876, "section", 303)(2877, "div", 1)(2878, "div", 304)(2879, "div", 213)(2880, "div", 305)(2881, "h2");
      \u0275\u0275text(2882, "500+ Leading Universities And Companies");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2883, "div", 306)(2884, "div", 307)(2885, "owl-carousel-o", 308);
      \u0275\u0275template(2886, Home5Component_ng_template_2886_Template, 3, 0, "ng-template", 309)(2887, Home5Component_ng_template_2887_Template, 3, 0, "ng-template", 309)(2888, Home5Component_ng_template_2888_Template, 3, 0, "ng-template", 309)(2889, Home5Component_ng_template_2889_Template, 3, 0, "ng-template", 309)(2890, Home5Component_ng_template_2890_Template, 3, 0, "ng-template", 309)(2891, Home5Component_ng_template_2891_Template, 3, 0, "ng-template", 309);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(2892, "section", 310)(2893, "div", 1)(2894, "div", 311);
      \u0275\u0275element(2895, "img", 312);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2896, "div", 313)(2897, "div", 190)(2898, "div", 314)(2899, "div", 315)(2900, "h2", 316);
      \u0275\u0275text(2901, "They Trusted us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2902, "h4", 316);
      \u0275\u0275text(2903, "We are a very happy because we have a happy customer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2904, "a", 317);
      \u0275\u0275text(2905, "Join Our Community");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2906, "div", 314)(2907, "div", 318)(2908, "owl-carousel-o", 308);
      \u0275\u0275template(2909, Home5Component_ng_container_2909_Template, 2, 0, "ng-container", 319);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(2910, "section", 320)(2911, "div", 1)(2912, "div", 321)(2913, "div", 75)(2914, "div", 322)(2915, "h2");
      \u0275\u0275text(2916, "Latest News & Events");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2917, "div", 323)(2918, "div", 78)(2919, "a", 79);
      \u0275\u0275text(2920, "View All");
      \u0275\u0275element(2921, "i", 80);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(2922, "div", 324)(2923, "div", 73)(2924, "div", 325)(2925, "div", 326)(2926, "div", 327)(2927, "a", 79);
      \u0275\u0275element(2928, "img", 328);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2929, "div", 329)(2930, "div", 330)(2931, "div", 331)(2932, "span", 332);
      \u0275\u0275text(2933, "Lifestyle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2934, "div", 333);
      \u0275\u0275element(2935, "i", 334);
      \u0275\u0275elementStart(2936, "span");
      \u0275\u0275text(2937, "09 Aug 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2938, "a", 79)(2939, "h5");
      \u0275\u0275text(2940, "Why an LMS is Essential for Modern Education");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2941, "div", 335)(2942, "a", 98);
      \u0275\u0275element(2943, "img", 336);
      \u0275\u0275text(2944, "David Benitez");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2945, "div", 337)(2946, "div", 73)(2947, "div", 117)(2948, "div", 338)(2949, "div", 327)(2950, "a", 79);
      \u0275\u0275element(2951, "img", 339);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2952, "div", 329)(2953, "div", 330)(2954, "div", 331)(2955, "span", 332);
      \u0275\u0275text(2956, "Productivity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2957, "div", 333);
      \u0275\u0275element(2958, "i", 334);
      \u0275\u0275elementStart(2959, "span");
      \u0275\u0275text(2960, "09 Aug 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2961, "a", 79)(2962, "h5");
      \u0275\u0275text(2963, "The Impact of LMS on Academic Journey Education");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2964, "div", 335)(2965, "a", 98);
      \u0275\u0275element(2966, "img", 336);
      \u0275\u0275text(2967, "David Benitez");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2968, "div", 117)(2969, "div", 338)(2970, "div", 327)(2971, "a", 79);
      \u0275\u0275element(2972, "img", 340);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2973, "div", 329)(2974, "div", 330)(2975, "div", 331)(2976, "span", 332);
      \u0275\u0275text(2977, "Productivity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2978, "div", 333);
      \u0275\u0275element(2979, "i", 334);
      \u0275\u0275elementStart(2980, "span");
      \u0275\u0275text(2981, "09 Aug 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(2982, "a", 79)(2983, "h5");
      \u0275\u0275text(2984, "Maximizing Academic Success with the Right LMS");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2985, "div", 335)(2986, "a", 98);
      \u0275\u0275element(2987, "img", 336);
      \u0275\u0275text(2988, "David Benitez");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(2989, "div", 117)(2990, "div", 338)(2991, "div", 327)(2992, "a", 79);
      \u0275\u0275element(2993, "img", 341);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(2994, "div", 329)(2995, "div", 330)(2996, "div", 331)(2997, "span", 332);
      \u0275\u0275text(2998, "UI /UX");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2999, "div", 333);
      \u0275\u0275element(3e3, "i", 334);
      \u0275\u0275elementStart(3001, "span");
      \u0275\u0275text(3002, "09 Aug 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(3003, "a", 79)(3004, "h5");
      \u0275\u0275text(3005, "Promoting Health & Well being in Schools");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(3006, "div", 335)(3007, "a", 98);
      \u0275\u0275element(3008, "img", 336);
      \u0275\u0275text(3009, "David Benitez");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(3010, "div", 117)(3011, "div", 338)(3012, "div", 327)(3013, "a", 79);
      \u0275\u0275element(3014, "img", 342);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3015, "div", 329)(3016, "div", 330)(3017, "div", 331)(3018, "span", 332);
      \u0275\u0275text(3019, "Development");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3020, "div", 333);
      \u0275\u0275element(3021, "i", 334);
      \u0275\u0275elementStart(3022, "span");
      \u0275\u0275text(3023, "09 Aug 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(3024, "a", 79)(3025, "h5");
      \u0275\u0275text(3026, "How to Build and Run a Pilot Mentoring Program");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(3027, "div", 335)(3028, "a", 98);
      \u0275\u0275element(3029, "img", 336);
      \u0275\u0275text(3030, "David Benitez");
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275element(3031, "app-footer");
    }
    if (rf & 2) {
      \u0275\u0275advance(55);
      \u0275\u0275property("countUp", 10)("options", \u0275\u0275pureFunction0(248, _c0));
      \u0275\u0275advance(13);
      \u0275\u0275property("countUp", 200)("options", \u0275\u0275pureFunction0(249, _c0));
      \u0275\u0275advance(13);
      \u0275\u0275property("countUp", 6)("options", \u0275\u0275pureFunction0(250, _c0));
      \u0275\u0275advance(13);
      \u0275\u0275property("countUp", 60)("options", \u0275\u0275pureFunction0(251, _c0));
      \u0275\u0275advance(74);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("config", ctx.favouriteCarousel);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.courseCategory);
      \u0275\u0275advance(24);
      \u0275\u0275property("routerLink", ctx.routes.courseCategory);
      \u0275\u0275advance(24);
      \u0275\u0275property("routerLink", ctx.routes.courseCategory);
      \u0275\u0275advance(24);
      \u0275\u0275property("routerLink", ctx.routes.courseCategory);
      \u0275\u0275advance(24);
      \u0275\u0275property("routerLink", ctx.routes.courseCategory);
      \u0275\u0275advance(24);
      \u0275\u0275property("routerLink", ctx.routes.courseCategory);
      \u0275\u0275advance(29);
      \u0275\u0275property("routerLink", ctx.routes.courseGrid);
      \u0275\u0275advance(27);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(19);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(19);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(19);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(19);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(19);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(19);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(19);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(23);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(20);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(20);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(25);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(20);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(20);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(25);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(20);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(20);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(25);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(20);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(20);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(25);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(20);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(20);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(25);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(20);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(20);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(19);
      \u0275\u0275property("routerLink", ctx.routes.courseGrid);
      \u0275\u0275advance(13);
      \u0275\u0275property("routerLink", ctx.routes.courseGrid);
      \u0275\u0275advance(15);
      \u0275\u0275property("countUp", 253085)("options", \u0275\u0275pureFunction0(252, _c0));
      \u0275\u0275advance(10);
      \u0275\u0275property("countUp", 1205)("options", \u0275\u0275pureFunction0(253, _c0));
      \u0275\u0275advance(10);
      \u0275\u0275property("countUp", 56)("options", \u0275\u0275pureFunction0(254, _c0));
      \u0275\u0275advance(130);
      \u0275\u0275property("routerLink", ctx.routes.courseGrid);
      \u0275\u0275advance(4);
      \u0275\u0275property("config", ctx.trendingcrouses);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(20);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(20);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(20);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(20);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(20);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(20);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(20);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(12);
      \u0275\u0275property("routerLink", ctx.routes.instructorList);
      \u0275\u0275advance(18);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(13);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(13);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(13);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(13);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(15);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(13);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(13);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(13);
      \u0275\u0275property("routerLink", ctx.routes.register);
      \u0275\u0275advance(11);
      \u0275\u0275property("options", ctx.brandoption2);
      \u0275\u0275advance(23);
      \u0275\u0275property("options", ctx.customOptions);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.testimonials);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.blog_grid);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.blog_grid);
      \u0275\u0275advance(11);
      \u0275\u0275property("routerLink", ctx.routes.blog_grid);
      \u0275\u0275advance(12);
      \u0275\u0275property("routerLink", ctx.routes.blog_grid);
      \u0275\u0275advance(11);
      \u0275\u0275property("routerLink", ctx.routes.blog_grid);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.blog_grid);
      \u0275\u0275advance(11);
      \u0275\u0275property("routerLink", ctx.routes.blog_grid);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.blog_grid);
      \u0275\u0275advance(11);
      \u0275\u0275property("routerLink", ctx.routes.blog_grid);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.blog_grid);
      \u0275\u0275advance(11);
      \u0275\u0275property("routerLink", ctx.routes.blog_grid);
    }
  }, dependencies: [CommonModule, NgForOf, FooterComponent, RouterLink, CarouselModule, CarouselComponent, CarouselSlideDirective, SlickCarouselModule, SlickCarouselComponent, SlickItemDirective, CountUpModule, CountUpDirective, MatSelectModule, MatSelect, MatOption, SlicePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Home5Component, [{
    type: Component,
    args: [{ selector: "app-home5", imports: [CommonModule, FooterComponent, RouterLink, CarouselModule, SlickCarouselModule, CountUpModule, MatSelectModule], encapsulation: ViewEncapsulation.None, template: '	<!-- Home Banner -->\n  <section class="banner-five">\n    <div class="container">\n      <div class="row align-items-center">\n        <div class="col-xl-6 col-lg-7 col-md-12 d-flex col-12" data-aos="fade-down">\n          <div class="home-five-slide-face flex-fill">\n            <div class="home-five-slide-text">\n              <span class="text-white d-inline-block bg-secondary small rounded-pill px-3 py-2 mb-3 mb-sm-4"><span class="badge bg-white text-secondary rounded-pill me-1">New</span>The Leader in Online Learning</span>\n              <h1>Engaging <span>&</span>  Accessible Online Courses For All</h1>\n              <p>Our specialized online courses are designed to bring the classroom experience to you, no matter where you are.</p>\n            </div>\n            <div class="banner-three-content">\n									<form class="form" (ngSubmit)="onSubmit()">\n										<div class="form-inner-three">\n											<div class="input-group justify-content-between">\n												<div class="d-flex flex-wrap gap-3">\n													<div class="drop-detail-three form-three-select">\n														<mat-select class="custom-mat-select select" placeholder="Select category">\n                        <mat-option value="1">Select category</mat-option>\n                        <mat-option value="1">Angular</mat-option>\n                        <mat-option value="1">Node Js</mat-option>\n                        <mat-option value="1">React</mat-option>\n                        <mat-option value="1">Python</mat-option>\n                      </mat-select>\n													</div>\n													<div class="d-flex align-items-center banner-search5 flex-fill">\n														<div class="search-icon5">\n															<i class="fa-regular fa-building"></i>\n														</div>\n														<input type="email" class="form-control" placeholder="Search for Courses, Instructors">\n													</div>\n												</div>\n												\n												<button class="btn btn-primary sub-btn" type="submit"><i class="fas fa-arrow-right"></i></button>\n											</div>\n										</div>\n									</form>\n								</div>\n          </div>\n        </div>\n        <div class="offset-lg-1 col-lg-5 col-12 text-center" data-aos="fade-up">\n          <div class="banner-slide-img flex-fill aos">\n            <img class="img-fluid ps-lg-5" src="assets/img/hero/hero-6.png" alt="Img">\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <!-- /Home Banner -->\n  \n  <!--Online Courses -->\n  <section class="section student-course student-course-five">\n    <div class="container">\n      <div class="course-widget-three">\n        <div class="row row-gap-4">\n          <div class="col-lg-3 col-md-6 d-flex" data-aos="fade-up">\n            <div class="course-details-three">\n              <div class="align-items-center">\n                <div class="course-count-three course-count ms-0">\n                  <div class="course-img">\n                    <img class="img-fluid" src="assets/img/icon/course-01.svg" alt="Img">\n                  </div>\n                  <div class="course-content-three">\n                    <h4 class="text-info"><span class="counterUp" [countUp]="10" [options]="{ enableScrollSpy: true }">10</span>K</h4>\n                    <p>Online Courses</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class="col-lg-3 col-md-6 d-flex" data-aos="fade-up">\n            <div class="course-details-three">\n              <div class="align-items-center">\n                <div class="course-count-three course-count ms-0">\n                  <div class="course-img">\n                    <img class="img-fluid" src="assets/img/icon/course-02.svg" alt="Img">\n                  </div>\n                  <div class="course-content-three">\n                    <h4 class="text-warning"><span class="counterUp" [countUp]="200" [options]="{ enableScrollSpy: true }">200</span>+</h4>\n                    <p>Expert Tutors</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class="col-lg-3 col-md-6 d-flex" data-aos="fade-up">\n            <div class="course-details-three">\n              <div class="align-items-center">\n                <div class="course-count-three course-count ms-0">\n                  <div class="course-img">\n                    <img class="img-fluid" src="assets/img/icon/course-03.svg" alt="Img">\n                  </div>\n                  <div class="course-content-three">\n                    <h4 class="text-skyblue"><span class="counterUp" [countUp]="6" [options]="{ enableScrollSpy: true }">6</span>K+</h4>\n                    <p>Ceritified Courses</p>\n                  </div>\n                </div>\n              </div>\n            </div>	\n          </div>\n          <div class="col-lg-3 col-md-6 d-flex" data-aos="fade-up">\n            <div class="course-details-three mb-0">\n              <div class="align-items-center">\n                <div class="course-count-three">\n                  <div class="course-img">\n                    <img class="img-fluid" src="assets/img/icon/course-04.svg" alt="Img">\n                  </div>\n                  <div class="course-content-three course-count">\n                    <h4 class="text-success"><span class="counterUp" [countUp]="60" [options]="{ enableScrollSpy: true }">60</span>K +</h4>\n                    <p>Online Students</p> \n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <!-- /Online Courses -->\n  \n  <!-- Master skills Career -->\n  <section class="master-skill-three">\n    <div class="container">\n      <div class="row align-items-center">		\n        <div class="col-xl-5 col-lg-6 col-md-12" data-aos="fade-up">\n          <div class="master-three-images">\n            <div class="master-img"> \n              <img class="img-fluid master-bg1" src="assets/img/shapes/shape-10.svg" alt="img">\n              <img class="img-fluid master-bg2" src="assets/img/shapes/shape-7.svg" alt="img">\n              <img class="img-fluid master-skill-image1" src="assets/img/feature/feature-10.jpg" alt="img">\n              <div class="text-end">\n              <img class="img-fluid master-skill-image2" src="assets/img/feature/feature-11.jpg" alt="img">\n                </div>\n            </div>\n          </div>\n        </div>						\n        <div class="col-xl-7 col-lg-6 col-md-12" data-aos="fade-up">\n          <div class="master-skill-content">\n          <div class="home-five-head" data-aos="fade-up">\n            <h2>Master the skills to drive your career</h2>\n          </div>\n          <div class="home-five-content" data-aos="fade-up">\n            <p>Get certified, master modern tech skills, and level up your career whether you\u2019re starting out or a seasoned pro. 95% of eLearning learners report our hands-on content directly helped their careers.</p>\n          </div>\n          <div class="skils-group">\n            <div class="row row-gap-4">\n              <div class="col-lg-6 col-xs-12 col-sm-6" data-aos="fade-down">\n                <div class="skils-icon-item">\n                  <div class="skils-icon">\n                    <img class="img-fluid" src="assets/img/icon/career-01.svg" alt="certified">\n                  </div>\n                  <div class="skils-content">\n                    <h5 class="mb-2">Certified Courses</h5>\n                    <p class="mb-0">Get certified with 100+ certification courses</p>\n                  </div>\n                </div>\n              </div>\n              <div class="col-lg-6 col-xs-12 col-sm-6" data-aos="fade-up">\n                <div class="skils-icon-item">\n                  <div class="skils-icon">\n                    <img class="img-fluid" src="assets/img/icon/career-02.svg" alt="Build skills">\n                  </div>\n                  <div class="skils-content">\n                    <h5 class="mb-2">Skill Building</h5>\n                    <p class="mb-0">Build skills your way, from labs to courses</p>\n                  </div>\n                </div>\n              </div>\n              <div class="col-lg-6 col-xs-12 col-sm-6" data-aos="fade-up">\n                <div class="skils-icon-item">\n                  <div class="skils-icon">\n                    <img class="img-fluid" src="assets/img/icon/career-03.svg" alt="Stay Motivated">\n                  </div>\n                  <div class="skils-content">\n                    <h5 class="mb-2">Stay Inspired</h5>\n                    <p class="mb-0">Stay motivated with engaging instructors</p>\n                  </div>\n                </div>\n              </div>\n              <div class="col-lg-6 col-xs-12 col-sm-6" data-aos="fade-up">\n                <div class="skils-icon-item">\n                  <div class="skils-icon">\n                    <img class="img-fluid" src="assets/img/icon/career-04.svg" alt="latest cloud">\n                  </div>\n                  <div class="skils-content">\n                    <h5 class="mb-2">Keep Upgrade</h5>\n                    <p class="mb-0">Keep up with the latest in cloud</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n             </div>\n        </div>\n      </div>		\n    </div>\n  </section>\n  <!-- /Master skills Career -->\n  \n  <!-- Favourite Course -->\n  <section class="home-five-favourite">\n    <div class="container">\n      <div class="category-sec">\n        <div class="row">\n          <div class="container">\n            <div class="home-five-head section-header-title" data-aos="fade-up">\n              <div class="row align-items-center d-flex justify-content-between row-gap-4">\n                <div class="col-md-8 col-sm-12">\n                  <h2>Choose favourite Course from top Category</h2>\n                </div>\n                <div class="col-md-4 col-sm-12">\n                  <div class="see-all text-end">											\n                    <a [routerLink]="routes.courseDetails">View All<i class="fas fa-arrow-right ms-2"></i></a>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="favourite-carousel">\n              <ngx-slick-carousel [config]="favouriteCarousel">\n                <div class="categories-item categories-item-five" data-aos="fade-down" ngxSlickItem>		\n                  <div class="favourite-item flex-fill">			\n                  <div class="categories-icon">\n                    <img class="img-fluid" src="assets/img/icon/favourite-01.svg" alt="Angular Development">\n                  </div>\n                  <div class="category-info">\n                    <h3><a [routerLink]="routes.courseCategory">Angular Development</a></h3>\n                  </div>\n                  <div class="instructors-info">\n                    <p class="me-4">Instructors</p>\n                    <ul class="instructors-list">\n                      <li>\n                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="leader 1"><img src="assets/img/user/user-13.jpg" alt="img"></a>\n                      </li>\n                      <li>\n                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="leader 2"><img src="assets/img/user/user-14.jpg" alt="img"></a>\n                      </li>\n                      <li>\n                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="leader 3"><img src="assets/img/user/user-15.jpg" alt="img"></a>\n                      </li>\n                      <li class="more-set">\n                        <a href="javascript:void(0);">80+</a>\n                      </li>\n                    </ul>\n                  </div>\n                  </div>\n                </div>\n                <div class="categories-item categories-item-five" data-aos="fade-down" ngxSlickItem>		\n                  <div class="favourite-item flex-fill">			\n                  <div class="categories-icon">\n                    <img class="img-fluid" src="assets/img/icon/favourite-02.svg" alt="Angular Development">\n                  </div>\n                  <div class="category-info">\n                    <h3><a [routerLink]="routes.courseCategory">Pyhton Development</a></h3>\n                  </div>\n                  <div class="instructors-info">\n                    <p class="me-4">Instructors</p>\n                    <ul class="instructors-list">\n                      <li>\n                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="leader 1"><img src="assets/img/user/user-10.jpg" alt="img"></a>\n                      </li>\n                      <li>\n                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="leader 2"><img src="assets/img/user/user-11.jpg" alt="img"></a>\n                      </li>\n                      <li>\n                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="leader 3"><img src="assets/img/user/user-12.jpg" alt="img"></a>\n                      </li>\n                      <li class="more-set">\n                        <a href="javascript:void(0);">80+</a>\n                      </li>\n                    </ul>\n                  </div>\n                  </div>\n                </div>\n                <div class="categories-item categories-item-five" data-aos="fade-down" ngxSlickItem>							\n                  <div class="favourite-item flex-fill">\n                    <div class="categories-icon">\n                      <img class="img-fluid" src="assets/img/icon/favourite-03.svg" alt="NODE JS Development">\n                    </div>\n                    <div class="category-info">\n                      <h3><a [routerLink]="routes.courseCategory">NODE JS Development</a></h3>\n                    </div>\n                    <div class="instructors-info">\n                      <p class="me-4">Instructors</p>\n                      <ul class="instructors-list">\n                        <li>\n                          <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="leader 1"><img src="assets/img/user/user-07.jpg" alt="img"></a>\n                        </li>\n                        <li>\n                          <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="leader 2"><img src="assets/img/user/user-08.jpg" alt="img"></a>\n                        </li>\n                        <li>\n                          <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="leader 3"><img src="assets/img/user/user-09.jpg" alt="img"></a>\n                        </li>\n                        <li class="more-set">\n                          <a href="javascript:void(0);">80+</a>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                </div>\n                <div class="categories-item categories-item-five" data-aos="fade-down" ngxSlickItem>							\n                  <div class="favourite-item flex-fill">\n                    <div class="categories-icon">\n                      <img class="img-fluid" src="assets/img/icon/favourite-04.svg" alt="NODE JS Development">\n                    </div>\n                    <div class="category-info">\n                      <h3><a [routerLink]="routes.courseCategory">Corephp Development</a></h3>\n                    </div>\n                    <div class="instructors-info">\n                      <p class="me-4">Instructors</p>\n                      <ul class="instructors-list">\n                        <li>\n                          <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="leader 1"><img src="assets/img/user/user-04.jpg" alt="img"></a>\n                        </li>\n                        <li>\n                          <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="leader 2"><img src="assets/img/user/user-05.jpg" alt="img"></a>\n                        </li>\n                        <li>\n                          <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="leader 3"><img src="assets/img/user/user-06.jpg" alt="img"></a>\n                        </li>\n                        <li class="more-set">\n                          <a href="javascript:void(0);">80+</a>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                </div>\n                <div class="categories-item categories-item-five" data-aos="fade-down" ngxSlickItem>								\n                  <div class="favourite-item flex-fill">\n                    <div class="categories-icon">\n                      <img class="img-fluid" src="assets/img/icon/favourite-05.svg" alt="Angular Development">\n                    </div>\n                    <div class="category-info">\n                      <h3><a [routerLink]="routes.courseCategory">Laravel Development</a></h3>\n                    </div>\n                    <div class="instructors-info">\n                      <p class="me-4">Instructors</p>\n                      <ul class="instructors-list">\n                        <li>\n                          <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="leader 1"><img src="assets/img/user/user-01.jpg" alt="img"></a>\n                        </li>\n                        <li>\n                          <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="leader 2"><img src="assets/img/user/user-02.jpg" alt="img"></a>\n                        </li>\n                        <li>\n                          <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="leader 3"><img src="assets/img/user/user-03.jpg" alt="img"></a>\n                        </li>\n                        <li class="more-set">\n                          <a href="javascript:void(0);">80+</a>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                </div>\n                <div class="categories-item categories-item-five" data-aos="fade-down" ngxSlickItem>\n                  <div class="favourite-item flex-fill">						\n                  <div class="categories-icon">\n                    <img class="img-fluid" src="assets/img/icon/favourite-01.svg" alt="Angular Development">\n                  </div>\n                  <div class="category-info">\n                    <h3><a [routerLink]="routes.courseCategory">Angular Development</a></h3>\n                  </div>\n                  <div class="instructors-info">\n                    <p class="me-4">Instructors</p>\n                    <ul class="instructors-list">\n                      <li>\n                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="leader 1"><img src="assets/img/user/user-13.jpg" alt="img"></a>\n                      </li>\n                      <li>\n                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="leader 2"><img src="assets/img/user/user-14.jpg" alt="img"></a>\n                      </li>\n                      <li>\n                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="leader 3"><img src="assets/img/user/user-15.jpg" alt="img"></a>\n                      </li>\n                      <li class="more-set">\n                        <a href="javascript:void(0);">80+</a>\n                      </li>\n                    </ul>\n                  </div>\n                  </div>\n                </div>\n              </ngx-slick-carousel>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- /Favourite Course -->\n    </div>\n  </section>			\n  <!-- Feature Course -->	\n  \n  <!-- Courses -->\n  <section class="home-five-courses">\n    <div class="container">\n      <div class="favourite-course-sec">\n        <div class="row">\n          <div class="home-five-head section-header-title" data-aos="fade-up"> \n            <div class="row align-items-center d-flex justify-content-between row-gap-4">\n              <div class="col-md-6">\n                <h2>Featured Courses</h2>\n              </div>\n              <div class="col-md-6">\n                <div class="see-all text-end">											\n                  <a [routerLink]="routes.courseGrid">View All<i class="fas fa-arrow-right ms-2"></i></a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class="all-corses-main">\n            <div class="tab-content">\n              <div class="nav tablist-three" role="tablist">										\n                <a class="nav-tab active me-3" data-bs-toggle="tab" href="#alltab" role="tab">All</a>				\n                <a class="nav-tab me-3" data-bs-toggle="tab" href="#mostpopulartab" role="tab">Most popular</a>\n\n                <a class="nav-tab me-3" data-bs-toggle="tab" href="#businesstab" role="tab">Business</a>\n\n                <a class="nav-tab me-3" data-bs-toggle="tab" href="#designtab" role="tab">Design</a>\n\n                <a class="nav-tab me-3" data-bs-toggle="tab" href="#designtab" role="tab">Music</a>\n\n                <a class="nav-tab me-3" data-bs-toggle="tab" href="#programmingtab" role="tab">Programming</a>\n\n                <a class="nav-tab me-3" data-bs-toggle="tab" href="#databasetab" role="tab">Database</a>\n                \n              </div>\n    \n              <div class="tab-content">\n\n                <!-- All -->\n                <div class="tab-pane fade active show" id="alltab" role="tabpanel">\n                  <div class="all-course">\n                    <div class="row">\n\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-item course-item-five">\n                          <div class="course-img">\n                            <a [routerLink]="routes.instructorProfile"><img src="assets/img/course/course-35.jpg" alt="Img" class="img-fluid"></a>\n                          </div>\n                          <div class="course-content">\n                            <div class="course-user-img">\n                              <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-02.jpg" alt="Img" class="img-fluid"></a>\n                            </div>\n                            <div class="course-three-text">\n                              <p>Pyhton Development</p>\n                              <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">The Complete Web Developer PHP Course</a></h3>\n                            </div>\n                            <div class="student-counts-info d-flex align-items-center">\n                              <img src="assets/img/icon/student.svg" alt="Img">\n                              <p class="ms-2">500 Students</p>\n                            </div>\n                            <div class="d-flex align-items-center justify-content-between">\n                              <div class="course-price">\n                                <h3>$650 <span>$99.00</span></h3>\n                              </div>\n                              <div class="d-flex align-items-center">\n                                <i class="fa-regular fa-clock me-2"></i>\n                                <span>6hr 30min</span>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-item course-item-five">\n                          <div class="course-img">\n                            <a [routerLink]="routes.instructorProfile"><img src="assets/img/course/course-34.jpg" alt="Img" class="img-fluid"></a>\n                          </div>\n                          <div class="course-content">\n                            <div class="course-user-img">\n                              <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-01.jpg" alt="Img" class="img-fluid"></a>\n                            </div>\n                            <div class="course-three-text">\n                              <p>Web Design</p>\n                              <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Build Responsive Websites with HTML</a></h3>\n                            </div>\n                            <div class="student-counts-info d-flex align-items-center">\n                              <img src="assets/img/icon/student.svg" alt="Img">\n                              <p class="ms-2">450 Students</p>\n                            </div>\n                            <div class="d-flex align-items-center justify-content-between">\n                              <div class="course-price">\n                                <h3>$650 <span>$99.00</span></h3>\n                              </div>\n                              <div class="d-flex align-items-center">\n                                <i class="fa-regular fa-clock me-2"></i>\n                                <span>6hr 30min</span>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      \n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-item course-item-five">\n                          <div class="course-img">\n                            <a [routerLink]="routes.instructorProfile"><img src="assets/img/course/course-28.jpg" alt="Img" class="img-fluid"></a>\n                          </div>\n                          <div class="course-content">\n                            <div class="course-user-img">\n                              <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-03.jpg" alt="Img" class="img-fluid"></a>\n                            </div>\n                            <div class="course-three-text">\n                              <p>Business Management</p>\n                              <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">The Complete Business Management Course</a></h3>\n                            </div>\n                            <div class="student-counts-info d-flex align-items-center">\n                              <img src="assets/img/icon/student.svg" alt="Img">\n                              <p class="ms-2">400 Students</p>\n                            </div>\n                            <div class="d-flex align-items-center justify-content-between">\n                              <div class="course-price">\n                                <h3>$300 <span> $99.00</span></h3>\n                              </div>\n                              <div class="d-flex align-items-center">\n                                <i class="fa-regular fa-clock me-2"></i>\n                                <span>6hr 30min</span>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-item course-item-five">\n                          <div class="course-img">\n                            <a [routerLink]="routes.instructorProfile"><img src="assets/img/course/course-29.jpg" alt="Img" class="img-fluid"></a>\n                          </div>\n                          <div class="course-content">\n                            <div class="course-user-img">\n                              <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-04.jpg" alt="Img" class="img-fluid"></a>\n                            </div>\n                            <div class="course-three-text">\n                              <p>Creative Arts & media</p>\n                              <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Build Creative Arts & media Course Completed</a></h3>\n                            </div>\n                            <div class="student-counts-info d-flex align-items-center">\n                              <img src="assets/img/icon/student.svg" alt="Img">\n                              <p class="ms-2">250 Students</p>\n                            </div>\n                            <div class="d-flex align-items-center justify-content-between">\n                              <div class="course-price">\n                                <h3>$700 <span> $99.00</span></h3>\n                              </div>\n                              <div class="d-flex align-items-center">\n                                <i class="fa-regular fa-clock me-2"></i>\n                                <span>6hr 30min</span>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-item course-item-five">\n                          <div class="course-img">\n                            <a [routerLink]="routes.instructorProfile"><img src="assets/img/course/course-30.jpg" alt="Img" class="img-fluid"></a>\n                          </div>\n                          <div class="course-content">\n                            <div class="course-user-img">\n                              <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-05.jpg" alt="Img" class="img-fluid"></a>\n                            </div>\n                            <div class="course-three-text">\n                              <p>Personalized Learning</p>\n                              <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Build Responsive Websites with HTML</a></h3>\n                            </div>\n                            <div class="student-counts-info d-flex align-items-center">\n                              <img src="assets/img/icon/student.svg" alt="Img">\n                              <p class="ms-2">400 Students</p>\n                            </div>\n                            <div class="d-flex align-items-center justify-content-between">\n                              <div class="course-price">\n                                <h3>$650 <span> $99.00</span></h3>\n                              </div>\n                              <div class="d-flex align-items-center">\n                                <i class="fa-regular fa-clock me-2"></i>\n                                <span>6hr 30min</span>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-item course-item-five">\n                          <div class="course-img">\n                            <a [routerLink]="routes.instructorProfile"><img src="assets/img/course/course-31.jpg" alt="Img" class="img-fluid"></a>\n                          </div>\n                          <div class="course-content">\n                            <div class="course-user-img">\n                              <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-06.jpg" alt="Img" class="img-fluid"></a>\n                            </div>\n                            <div class="course-three-text">\n                              <p>Pyhton Development</p>\n                              <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">The Complete Pyhton Development Course</a></h3>\n                            </div>\n                            <div class="student-counts-info d-flex align-items-center">\n                              <img src="assets/img/icon/student.svg" alt="Img">\n                              <p class="ms-2">400 Students</p>\n                            </div>\n                            <div class="d-flex align-items-center justify-content-between">\n                              <div class="course-price">\n                                <h3>$650 <span> $99.00</span></h3>\n                              </div>\n                              <div class="d-flex align-items-center">\n                                <i class="fa-regular fa-clock me-2"></i>\n                                <span>6hr 30min</span>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-item course-item-five">\n                          <div class="course-img">\n                            <a [routerLink]="routes.instructorProfile"><img src="assets/img/course/course-32.jpg" alt="Img" class="img-fluid"></a>\n                          </div>\n                          <div class="course-content">\n                            <div class="course-user-img">\n                              <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-07.jpg" alt="Img" class="img-fluid"></a>\n                            </div>\n                            <div class="course-three-text">\n                              <p>Business Management</p>\n                              <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Build Websites with HTML5 CSS3 Javascript</a></h3>\n                            </div>\n                            <div class="student-counts-info d-flex align-items-center">\n                              <img src="assets/img/icon/student.svg" alt="Img">\n                              <p class="ms-2">400 Students</p>\n                            </div>\n                            <div class="d-flex align-items-center justify-content-between">\n                              <div class="course-price">\n                                <h3>$650 <span> $99.00</span></h3>\n                              </div>\n                              <div class="d-flex align-items-center">\n                                <i class="fa-regular fa-clock me-2"></i>\n                                <span>6hr 30min</span>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-item course-item-five">\n                          <div class="course-img">\n                            <a [routerLink]="routes.instructorProfile"><img src="assets/img/course/course-33.jpg" alt="Img" class="img-fluid"></a>\n                          </div>\n                          <div class="course-content">\n                            <div class="course-user-img">\n                              <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-08.jpg" alt="Img" class="img-fluid"></a>\n                            </div>\n                            <div class="course-three-text">\n                              <p>Creative Arts & media</p>\n                              <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Build Responsive Websites with HTML</a></h3>\n                            </div>\n                            <div class="student-counts-info d-flex align-items-center">\n                              <img src="assets/img/icon/student.svg" alt="Img">\n                              <p class="ms-2">300 Students</p>\n                            </div>\n                            <div class="d-flex align-items-center justify-content-between">\n                              <div class="course-price">\n                                <h3>$550 <span> $99.00</span></h3>\n                              </div>\n                              <div class="d-flex align-items-center">\n                                <i class="fa-regular fa-clock me-2"></i>\n                                <span>6hr 30min</span>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                    </div>\n                  </div>\n                </div>\n                <!-- /All -->\n    \n                <!-- Most popular -->\n                <div class="tab-pane fade" id="mostpopulartab" >\n                  <div class="all-course">\n                    <div class="row">\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-34.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-01.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">																		\n                                  <p>Web Design</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Build Responsive Websites with HTML</a></h3>\n                              \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>450 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$650 <span>$99.00</span></h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-35.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-02.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">\n                                  <p>Pyhton Development</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">The Complete Web Developer PHP Course</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>500 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$650 <span>$99.00</span></h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-28.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-03.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">\n                                  <p>Business Management</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">The Complete Business Management Course</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>400 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$300 <span>$99.00</span></h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-29.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-04.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">\n                                  <p>Creative Arts & media</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Build Creative Arts & media Course Completed</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>250 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$700 <span>$99.00</span></h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-30.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-05.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">\n                                  <p>Personalized Learning</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Build Responsive Websites with HTML</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>400 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$650 </h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-31.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-06.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">\n                                  <p>Pyhton Development</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">The Complete Pyhton Development Course</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>400 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>Free </h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-32.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-07.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">\n                                  <p>Business Management</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Build Websites with HTML5 CSS3 Javascript</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>400 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$650 <span>$99.00</span></h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-33.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-08.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">																		\n                                  <p>Creative Arts & media</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Build Responsive Websites with HTML</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>400 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$300 <span>$99.00</span></h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                    </div>\n                  </div>\n                </div>\n                <!-- /Most popular -->\n                \n                <!-- Business -->\n                <div class="tab-pane fade" id="businesstab">\n                  <div class="all-course">\n                    <div class="row">\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-34.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-01.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">																		\n                                  <p>Web Design</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Build Responsive Websites with HTML</a></h3>\n                              \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>450 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$650 <span>$99.00</span></h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-35.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-02.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">\n                                  <p>Pyhton Development</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">The Complete Web Developer PHP Course</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>500 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$650 <span>$99.00</span></h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-28.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-03.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">\n                                  <p>Business Management</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">The Complete Business Management Course</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>400 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$300 <span>$99.00</span></h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-29.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-04.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">\n                                  <p>Creative Arts & media</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Build Creative Arts & media Course Completed</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>250 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$700 <span>$99.00</span></h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-30.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-05.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">\n                                  <p>Personalized Learning</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Build Responsive Websites with HTML</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>400 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$650 </h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-31.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-06.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">\n                                  <p>Pyhton Development</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">The Complete Pyhton Development Course</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>400 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>Free </h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-32.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-07.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">\n                                  <p>Business Management</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Build Websites with HTML5 CSS3 Javascript</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>400 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$650 <span>$99.00</span></h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-33.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-08.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">																		\n                                  <p>Creative Arts & media</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Build Responsive Websites with HTML</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>400 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$300 <span>$99.00</span></h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                    </div>\n                  </div>\n                </div>\n                <!-- /Business -->\n\n                <!-- Design -->\n                <div class="tab-pane fade" id="designtab">\n                  <div class="all-course">\n                    <div class="row">\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-34.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-01.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">																		\n                                  <p>Web Design</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Build Responsive Websites with HTML</a></h3>\n                              \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>450 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$650 <span>$99.00</span></h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-35.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-02.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">\n                                  <p>Pyhton Development</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">The Complete Web Developer PHP Course</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>500 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$650 <span>$99.00</span></h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-28.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-03.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">\n                                  <p>Business Management</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">The Complete Business Management Course</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>400 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$300 <span>$99.00</span></h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-29.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-04.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">\n                                  <p>Creative Arts & media</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Build Creative Arts & media Course Completed</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>250 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$700 <span>$99.00</span></h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-30.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-05.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">\n                                  <p>Personalized Learning</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Build Responsive Websites with HTML</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>400 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$650 </h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-31.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-06.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">\n                                  <p>Pyhton Development</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">The Complete Pyhton Development Course</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>400 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>Free </h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-32.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-07.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">\n                                  <p>Business Management</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Build Websites with HTML5 CSS3 Javascript</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>400 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$650 <span>$99.00</span></h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-33.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-08.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">																		\n                                  <p>Creative Arts & media</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Build Responsive Websites with HTML</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>400 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$300 <span>$99.00</span></h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                    </div>\n                  </div>\n                </div>\n                <!-- /Design -->\n    \n                <!-- Music -->\n                <div class="tab-pane fade" id="musictab">\n                  <div class="all-course">\n                    <div class="row">\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-34.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-01.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">																		\n                                  <p>Web Design</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Build Responsive Websites with HTML</a></h3>\n                              \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>450 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$650 <span>$99.00</span></h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-35.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-02.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">\n                                  <p>Pyhton Development</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">The Complete Web Developer PHP Course</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>500 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$650 <span>$99.00</span></h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-28.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-03.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">\n                                  <p>Business Management</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">The Complete Business Management Course</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>400 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$300 <span>$99.00</span></h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-29.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-04.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">\n                                  <p>Creative Arts & media</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Build Creative Arts & media Course Completed</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>250 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$700 <span>$99.00</span></h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-30.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-05.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">\n                                  <p>Personalized Learning</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Build Responsive Websites with HTML</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>400 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$650 </h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-31.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-06.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">\n                                  <p>Pyhton Development</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">The Complete Pyhton Development Course</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>400 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>Free </h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-32.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-07.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">\n                                  <p>Business Management</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Build Websites with HTML5 CSS3 Javascript</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>400 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$650 <span>$99.00</span></h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-33.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-08.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">																		\n                                  <p>Creative Arts & media</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Build Responsive Websites with HTML</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>400 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$300 <span>$99.00</span></h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                    </div>\n                  </div>\n                </div>\n                <!-- /Music -->\n                \n                <!-- Programmiing -->\n                <div class="tab-pane fade" id="programmingtab">\n                  <div class="all-course">\n                    <div class="row">\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-34.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-01.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">																		\n                                  <p>Web Design</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Build Responsive Websites with HTML</a></h3>\n                              \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>450 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$650 <span>$99.00</span></h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-35.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-02.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">\n                                  <p>Pyhton Development</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">The Complete Web Developer PHP Course</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>500 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$650 <span>$99.00</span></h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-28.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-03.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">\n                                  <p>Business Management</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">The Complete Business Management Course</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>400 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$300 <span>$99.00</span></h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-29.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-04.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">\n                                  <p>Creative Arts & media</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Build Creative Arts & media Course Completed</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>250 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$700 <span>$99.00</span></h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-30.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-05.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">\n                                  <p>Personalized Learning</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Build Responsive Websites with HTML</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>400 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$650 </h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-31.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-06.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">\n                                  <p>Pyhton Development</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">The Complete Pyhton Development Course</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>400 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>Free </h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-32.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-07.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">\n                                  <p>Business Management</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Build Websites with HTML5 CSS3 Javascript</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>400 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$650 <span>$99.00</span></h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-33.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-08.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">																		\n                                  <p>Creative Arts & media</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Build Responsive Websites with HTML</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>400 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$300 <span>$99.00</span></h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                    </div>\n                  </div>\n                </div>\n                <!-- /Programmiing -->\n\n                <!-- Database -->\n                <div class="tab-pane fade" id="databasetab">\n                  <div class="all-course">\n                    <div class="row">\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-34.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-01.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">																		\n                                  <p>Web Design</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Build Responsive Websites with HTML</a></h3>\n                              \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>450 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$650 <span>$99.00</span></h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-35.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-02.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">\n                                  <p>Pyhton Development</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">The Complete Web Developer PHP Course</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>500 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$650 <span>$99.00</span></h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-28.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-03.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">\n                                  <p>Business Management</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">The Complete Business Management Course</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>400 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$300 <span>$99.00</span></h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-29.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-04.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">\n                                  <p>Creative Arts & media</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Build Creative Arts & media Course Completed</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>250 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$700 <span>$99.00</span></h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-30.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-05.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">\n                                  <p>Personalized Learning</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Build Responsive Websites with HTML</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>400 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$650 </h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-31.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-06.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">\n                                  <p>Pyhton Development</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">The Complete Pyhton Development Course</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>400 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>Free </h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-32.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-07.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">\n                                  <p>Business Management</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Build Websites with HTML5 CSS3 Javascript</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>400 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$650 <span>$99.00</span></h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                      <!-- Col -->\n                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n                        <div class="course-box-three">\n                          <div class="course-three-item">\n                            <div class="course-three-img">\n                              <a [routerLink]="routes.courseDetails">\n                                <img class="img-fluid" alt="Img" src="assets/img/course/course-33.jpg">\n                              </a>													\n                              <div class="heart-three">\n                                <a href="javascript:void(0);"><i class="fa-regular fa-heart"></i></a>\n                              </div>\n                            </div>\n                            <div class="course-three-content">	\n                              <div class="course-group-three">\n                                <div class="group-three-img">\n                                  <a [routerLink]="routes.instructorProfile"><img src="assets/img/user/user-08.jpg" alt="Img" class="img-fluid"></a>\n                                </div>\n                              </div>\n\n                              <div class="course-three-text">																		\n                                  <p>Creative Arts & media</p>\n                                  <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Build Responsive Websites with HTML</a></h3>\n                                \n                              </div>\n                              \n                              <div class="student-counts-info d-flex align-items-center">\n                                <div class="students-three-counts d-flex align-items-center">\n                                  <img src="assets/img/icon/student.svg" alt="Img">\n                                  <p>400 Students</p>\n                                </div>\n                              </div>\n          \n                              <div class="price-three-group d-flex align-items-center justify-content-between">\n                                <div class="price-three-view d-flex align-items-center">\n                                  <div class="course-price-three">\n                                    <h3>$300 <span>$99.00</span></h3>\n                                  </div>\n                                </div>\n                                <div class="price-three-time d-inline-flex align-items-center">\n                                  <i class="fa-regular fa-clock me-2"></i>\n                                  <span>6hr 30min</span>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /Col -->\n\n                    </div>\n                  </div>\n                </div>\n                <!-- /Database -->\n\n              </div>\n              <div class="text-center mt-3">\n                <a [routerLink]="routes.courseGrid" class="btn btn-secondary">View all Courses</a>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </section>\n  <!-- /Courses -->	\n  \n        <!-- Call to Action -->\n        <section class="home-five-transform">\n            <div class="container" data-aos="fade-up">\n                <div class="row align-items-center row-gap-4">\n                    <div class="col-lg-9 col-md-8 col-sm-12">\n                        <div class="cta-content">\n                            <h2>Transform Access To Education</h2>\n            <p>Create an account to receive our newsletter, course recommendations and promotions.</p>\n                        </div>\n                    </div>\n                    <div class="col-lg-3 col-md-4 col-sm-12">\n                        <div class="transform-button-three">\n                            <a [routerLink]="routes.courseGrid" class="btn btn-secondary">View all Courses</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n        <!-- Call to Action -->\n\n  <!-- Acheive you Goals  -->\n  <section class="home-five-goals">\n            <div class="container">\n                <div class="row align-items-center justify-content-center row-gap-4">\n\n        <!-- Col -->\n                    <div class="col-xl-3 col-lg-12 col-md-12" data-aos="fade-down">\n          <div class="acheive-goals-main">\n            <h2>Acheive you Goals  with DreamsLMS</h2>\n          </div>\n        </div>\n        <!-- /Col -->\n\n        <!-- Col -->\n        <div class="col-xl-3 col-lg-4 col-md-4 col-12" data-aos="fade-down">\n          <div class="acheive-goals">\n            <div class="acheive-elips-one">\n              <img src="assets/img/icon/ellipse-1.svg" alt="Img">\n            </div>\n            <div class="acheive-goals-content text-center course-count ms-0">\n              <h4><span class="counterUp" [countUp]="253085" [options]="{ enableScrollSpy: true }">253,085</span></h4>\n              <p>Students Enrolled all over World</p>\n            </div>\n          </div>\n        </div>\n        <!-- /Col -->\n\n        <!-- Col -->\n        <div class="col-xl-3 col-lg-4 col-md-4 col-12" data-aos="fade-down">\n          <div class="acheive-goals">\n            <div class="acheive-elips-two">\n              <img src="assets/img/icon/ellipse-2.svg" alt="Img">\n            </div>\n            <div class="acheive-goals-content text-center course-count ms-0">\n              <h4><span class="counterUp" [countUp]="1205" [options]="{ enableScrollSpy: true }">1,205</span></h4>\n              <p>Total Courses on our Platform</p>\n            </div>\n          </div>\n        </div>\n        <!-- /Col -->\n\n        <!-- Col -->\n        <div class="col-xl-3 col-lg-4 col-md-4 col-12" data-aos="fade-down">\n          <div class="acheive-goals">\n            <div class="acheive-elips-three">\n              <img src="assets/img/icon/ellipse-3.svg" alt="Img">\n            </div>\n            <div class="acheive-goals-content text-center course-count ms-0">\n              <h4><span class="counterUp" [countUp]="56" [options]="{ enableScrollSpy: true }">56</span></h4>\n              <p>Various Countries of	Students</p>\n            </div>\n          </div>\n        </div>\n        <!-- /Col -->\n\n      </div>\n    </div>\n  </section>\n  <!-- /Acheive you Goals  -->				\n\n  <!-- Accelerate cloud -->\n  <section class="accelerate-cloud-three">\n    <div class="container">\n      <div class="shapes-three-left">\n        <img class="accelerate-three" src="assets/img/shapes/shape-8.png" alt="Img">\n        <img class="accelerate-five" src="assets/img/shapes/shape-9.png" alt="Img">\n      </div>\n      <div class="section-header-title d-none" data-aos="fade-up">\n        <div class="row align-items-center d-flex justify-content-between">\n          <div class="col-lg-5 col-md-12">\n            <div class="home-five-head mb-4">\n              <h2 class="text-white">Accelerate Cloud Success </h2>\n            </div>\n          </div>\n          <div class="col-lg-7 col-md-12">\n            <p class="text-white ms-lg-5 mb-4">96% of eLearning for Business customers see improved results within six months. Whether you\u2019re a team of 10 or 10,000, faster cloud fluency starts here.</p>\n          </div>\n        </div>\n      </div>\n\n      <!-- Award Winning -->\n      <div class="award-one">\n        <div class="row align-items-center">		\n          <div class="col-xl-5 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n            <div class="master-img"> \n              <img class="img-fluid master-bg4" src="./assets/img/bg/shape-04.svg" alt="img">\n              <img class="img-fluid master-bg5" src="./assets/img/bg/shape-05.svg" alt="img">\n              <img class="img-fluid master-bg2" src="assets/img/shapes/shape-7.svg" alt="img">\n              <img class="img-fluid master-skill-image1" src="assets/img/feature/feature-8.jpg" alt="img">\n              <div class="text-end">\n                <img class="img-fluid master-skill-image2" src="assets/img/feature/feature-9.jpg" alt="img">\n                </div>\n            </div>\n          </div>							\n          <div class="col-xl-7 col-lg-6 col-md-6 col-12">\n            <div class="ms-lg-5 ps-lg-5">\n              <div class="mb-3">\n                <img src="assets/img/icon/award.svg" alt="certified">\n              </div>\n              <h2 class="text-warning my-4">Award Winning Course Management</h2>\n              <p class="text-white mb-4">An award-winning course management system (CMS) or program is typically recognized for its exceptional quality, innovation, and effectiveness in helping both instructors and students succeed.</p>\n              <!-- List -->\n              <ul class="list-unstyled text-white mb-5">\n                <li class="d-flex mb-3">\n                  <i class="isax isax-tick-circle5 text-warning fs-24 me-2"></i>Interactive Tools for Engagement\n                </li>\n                <li class="d-flex mb-3">\n                  <i class="isax isax-tick-circle5 text-warning fs-24 me-2"></i>Customizable Course Creation\n                </li>\n                <li class="d-flex mb-3" data-aos="fade-up">\n                  <i class="isax isax-tick-circle5 text-warning fs-24 me-2"></i>Robust Analytics and Reporting\n                </li>\n                <li class="d-flex mb-3" data-aos="fade-up">\n                  <i class="isax isax-tick-circle5 text-warning fs-24 me-2"></i>Collaborative and Peer-to-Peer Learning\n                </li>\n                <li class="d-flex mb-3" data-aos="fade-up">\n                  <i class="isax isax-tick-circle5 text-warning fs-24 me-2"></i>The Most World Class Instructors\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- /Award Winning -->		\n\n      <!-- Learn Anything -->\n      <div class="learn-anything">\n        <div class="row align-items-center">\n          \n          <div class="col-xl-7 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n            <div class="me-5 pe-5">\n              <div class="mb-3">\n                <img src="assets/img/icon/time.svg" alt="certified">\n              </div>\n              <h2 class="text-skyblue my-4">Learn anything from anywhere anytime</h2>\n              <p class="text-white mb-4">In today\u2019s fast-paced, digital world, the ability to learn anything, from anywhere, and at any time is more accessible than ever. Whether you are looking to expand your knowledge, gain new skills.</p>\n              <!-- List -->\n              <ul class="list-unstyled text-white mb-5">\n                <li class="d-flex mb-3">\n                  <i class="isax isax-tick-circle5 text-skyblue fs-24 me-2"></i>Interactive Tools for Engagement\n                </li>\n                <li class="d-flex mb-3">\n                  <i class="isax isax-tick-circle5 text-skyblue fs-24 me-2"></i>Customizable Course Creation\n                </li>\n                <li class="d-flex mb-3" data-aos="fade-up">\n                  <i class="isax isax-tick-circle5 text-skyblue fs-24 me-2"></i>Robust Analytics and Reporting\n                </li>\n                <li class="d-flex mb-3" data-aos="fade-up">\n                  <i class="isax isax-tick-circle5 text-skyblue fs-24 me-2"></i>Collaborative and Peer-to-Peer Learning\n                </li>\n                <li class="d-flex mb-3" data-aos="fade-up">\n                  <i class="isax isax-tick-circle5 text-skyblue fs-24 me-2"></i>The Most World Class Instructors\n                </li>\n              </ul>\n            </div>\n          </div>\n              \n          <div class="col-xl-5 col-lg-6 col-md-6 col-12"  data-aos="fade-up">\n            <div class="master-img mb-0"> \n              <img class="img-fluid master-bg4" src="./assets/img/bg/shape-04.svg" alt="img">\n              <img class="img-fluid master-bg5" src="./assets/img/bg/shape-05.svg" alt="img">\n              <img class="img-fluid master-bg2" src="assets/img/shapes/shape-7.svg" alt="img">\n              <img class="img-fluid master-skill-image1" src="assets/img/feature/feature-12.jpg" alt="img">\n              <div class="text-end">\n                <img class="img-fluid master-skill-image2" src="assets/img/feature/feature-13.jpg" alt="img">\n                </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- /Learn Anything -->\n      \n      <!-- development-carrer-->\n      <div class="development-carrer">\n        <div class="row align-items-center">		\n          <div class="col-xl-5 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n            <div class="master-img"> \n              <img class="img-fluid master-bg4" src="./assets/img/bg/shape-04.svg" alt="img">\n              <img class="img-fluid master-bg5" src="./assets/img/bg/shape-05.svg" alt="img">\n              <img class="img-fluid master-bg2" src="assets/img/shapes/shape-7.svg" alt="img">\n              <img class="img-fluid master-skill-image1" src="assets/img/feature/feature-5.jpg" alt="img">\n              <div class="text-end">\n                <img class="img-fluid master-skill-image2" src="assets/img/feature/feature-6.jpg" alt="img">\n                </div>\n            </div>\n          </div>\n          \n          <div class="col-xl-7 col-lg-6 col-md-6 col-12" data-aos="fade-up">\n            <div class="ms-lg-5 ps-lg-5">\n              <div class="mb-3">\n                <img src="assets/img/icon/winning.svg" alt="certified">\n              </div>\n              <h2 class="text-success my-4">Certification for solid development of your Career</h2>\n              <p class="text-white mb-4">Certifications are a powerful way to enhance your skills, build credibility, and boost your career growth. In today\u2019s competitive job market, a professional certification.</p>\n              <!-- List -->\n              <ul class="list-unstyled text-white mb-5">\n                <li class="d-flex mb-3">\n                  <i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>Demonstrates Expertise\n                </li>\n                <li class="d-flex mb-3">\n                  <i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>Boosts Your Credibility\n                </li>\n                <li class="d-flex mb-3" data-aos="fade-up">\n                  <i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>Improves Job Security\n                </li>\n                <li class="d-flex mb-3" data-aos="fade-up">\n                  <i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>Facilitates Career Advancement\n                </li>\n                <li class="d-flex mb-3" data-aos="fade-up">\n                  <i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>Fosters Personal Growth\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- /development-carrer -->\n\n    </div>\n  </section>\n  <!-- Accelerate cloud -->\n\n  <!-- Trending Courses  Three -->\n  <section class="home-five-trending">\n    <div class="container">\n      <div class="row">\n        <div class="home-five-head section-header-title" data-aos="fade-up">\n          <div class="row align-items-center d-flex justify-content-between row-gap-4">\n            <div class="col-md-6">\n              <h2>Most Trending Courses</h2>\n            </div>\n            <div class="col-md-6 col-sm-12">\n              <div class="see-all text-end">											\n                <a [routerLink]="routes.courseGrid">View All<i class="fas fa-arrow-right ms-2"></i></a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class="home-five-trending-course" data-aos="fade-up">\n          <ngx-slick-carousel [config]="trendingcrouses">\n\n            <div ngxSlickItem>\n              <!-- Carousel Item -->\n              <div class="trending-three-item" >\n                <div class="trending-content-top trending-bg-one">\n                  <div class="course-title-one">\n                    <a [routerLink]="routes.courseDetails">SEO, Marketing</a>\n                  </div>\n                  <div class="trending-three-text">										\n                    <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Digital Marketing Strategies for Successfull Business Growth</a></h3>\n                    <p>Navigating the Tech World: The Ultimate Guide to Finding an IT Mentor\n                      </p>\n                  </div>\n                  \n                  <div class="trending-counts-info d-flex align-items-center justify-content-between">\n                    <div class="trending-three-counts d-flex align-items-center">\n                      <img src="assets/img/icon/student-icon.svg" alt="student-icon">\n                      <p>400 Students</p>\n                    </div>\n                    <div class="price-three-time d-inline-flex align-items-center">\n                      <i class="fa-regular fa-clock me-2"></i>\n                      <span>6hr 30min</span>\n                    </div>\n                  </div>										\n                </div>\n                <div class="trending-content-footer">\n                  <div class="trending-price-group d-flex align-items-center justify-content-between">\n                    <div class="trending-group-view">\n                      <div class="trending-price-three">\n                        <h3>$300</h3>\n                      </div>\n                    </div>\n                    <div class="trending-footer-img">\n                      <a [routerLink]="routes.courseDetails"><img src="assets/img/user/user-01.jpg" alt="img"></a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- /Carousel Item -->\n            </div>\n            <div ngxSlickItem>\n\n              <!-- Carousel Item -->\n              <div class="trending-three-item">\n                <div class="trending-content-top trending-bg-two">\n                  <div class="course-title-one">\n                    <a [routerLink]="routes.courseDetails">Personalised Learning</a>\n                  </div>\n                  <div class="trending-three-text">										\n                    <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Starting Your Own Business: From Idea to Launch</a></h3>\n                    <p>Learn how mentorship can help guide your decision-making process</p>\n                  </div>\n                  \n                  <div class="trending-counts-info d-flex align-items-center justify-content-between">\n                    <div class="trending-three-counts d-flex align-items-center">\n                      <img src="assets/img/icon/student-icon.svg" alt="Img">\n                      <p>900 Students</p>\n                    </div>\n                    <div class="price-three-time d-inline-flex align-items-center">\n                      <i class="fa-regular fa-clock me-2"></i>\n                      <span>9hr 30min</span>\n                    </div>\n                  </div>										\n                </div>\n                <div class="trending-content-footer">\n                  <div class="trending-price-group d-flex align-items-center justify-content-between">\n                    <div class="trending-group-view">\n                      <div class="trending-price-three">\n                        <h3>$800</h3>\n                      </div>\n                    </div>\n                    <div class="trending-footer-img">\n                      <a [routerLink]="routes.courseDetails"><img src="assets/img/user/user-02.jpg" alt="img"></a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- /Carousel Item -->\n            </div>\n            <div ngxSlickItem>\n\n              <!-- Carousel Item -->\n              <div class="trending-three-item">\n                <div class="trending-content-top trending-bg-three">\n                  <div class="course-title-one">\n                    <a [routerLink]="routes.courseDetails">Finance</a>\n                  </div>\n                  <div class="trending-three-text">									\n                    <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Financial Literacy: Managing Your Money for Long-Term Growth</a></h3>										\n                    <p>The tech industry is vast and ever-changing, but a mentor can help\n                    </p>\n                  </div>\n                  \n                  <div class="trending-counts-info d-flex align-items-center justify-content-between">\n                    <div class="trending-three-counts d-flex align-items-center">\n                      <img src="assets/img/icon/student-icon.svg" alt="Img">\n                      <p>400 Students</p>\n                    </div>\n                    <div class="price-three-time d-inline-flex align-items-center">\n                      <i class="fa-regular fa-clock me-2"></i>\n                      <span>6hr 30min</span>\n                    </div>\n                  </div>										\n                </div>\n                <div class="trending-content-footer">\n                  <div class="trending-price-group d-flex align-items-center justify-content-between">\n                    <div class="trending-group-view">\n                      <div class="trending-price-three">\n                        <h3>$300</h3>\n                      </div>\n                    </div>\n                    <div class="trending-footer-img">\n                      <a [routerLink]="routes.courseDetails"><img src="assets/img/user/user-03.jpg" alt="img"></a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- /Carousel Item -->\n            </div>\n            <div ngxSlickItem>\n\n              <!-- Carousel Item -->\n              <div class="trending-three-item">\n                <div class="trending-content-top trending-bg-four">\n                  <div class="course-title-one">\n                    <a [routerLink]="routes.courseDetails">Business Management</a>\n                  </div>\n                  <div class="trending-three-text">			\n                    <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">The Complete Web Developer PHP framework Course 2.0</a></h3>										\n                    <p>Scaling a business requires more than just hard work\u2014it requires</p>\n                  </div>\n                  \n                  <div class="trending-counts-info d-flex align-items-center justify-content-between">\n                    <div class="trending-three-counts d-flex align-items-center">\n                      <img src="assets/img/icon/student-icon.svg" alt="Img">\n                      <p>900 Students</p>\n                    </div>\n                    <div class="price-three-time d-inline-flex align-items-center">\n                      <i class="fa-regular fa-clock me-2"></i>\n                      <span>4hr 30min</span>\n                    </div>\n                  </div>										\n                </div>\n                <div class="trending-content-footer">\n                  <div class="trending-price-group d-flex align-items-center justify-content-between">\n                    <div class="trending-group-view">\n                      <div class="trending-price-three">\n                        <h3>$200</h3>\n                      </div>\n                    </div>\n                    <div class="trending-footer-img">\n                      <a [routerLink]="routes.courseDetails"><img src="assets/img/user/user-04.jpg" alt="img"></a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- /Carousel Item -->\n            </div>\n            <div ngxSlickItem>\n\n              <!-- Carousel Item -->\n              <div class="trending-three-item" ngxSlickItem>\n                <div class="trending-content-top trending-bg-one">\n                  <div class="course-title-one">\n                    <a [routerLink]="routes.courseDetails">SEO, Marketing</a>\n                  </div>\n                  <div class="trending-three-text">				\n                    <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Digital Marketing Strategies for Successfull Business Growth</a></h3>									\n                    <p>The tech industry is vast and ever-changing, but a mentor can help\n                    </p>\n                  </div>\n                  \n                  <div class="trending-counts-info d-flex align-items-center justify-content-between">\n                    <div class="trending-three-counts d-flex align-items-center">\n                      <img src="assets/img/icon/student-icon.svg" alt="student-icon">\n                      <p>400 Students</p>\n                    </div>\n                    <div class="price-three-time d-inline-flex align-items-center">\n                      <i class="fa-regular fa-clock me-2"></i>\n                      <span>6hr 30min</span>\n                    </div>\n                  </div>										\n                </div>\n                <div class="trending-content-footer">\n                  <div class="trending-price-group d-flex align-items-center justify-content-between">\n                    <div class="trending-group-view">\n                      <div class="trending-price-three">\n                        <h3>$300</h3>\n                      </div>\n                    </div>\n                    <div class="trending-footer-img">\n                      <a [routerLink]="routes.courseDetails"><img src="assets/img/user/user-05.jpg" alt="img"></a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- /Carousel Item -->\n            </div>\n            <div ngxSlickItem>\n\n              <!-- Carousel Item -->\n              <div class="trending-three-item">\n                <div class="trending-content-top trending-bg-two">\n                  <div class="course-title-one">\n                    <a [routerLink]="routes.courseDetails">Personalised Learning</a>\n                  </div>\n                  <div class="trending-three-text">						\n                    <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Financial Literacy: Managing Your Money for Long-Term</a></h3>\n                    <p>Learn how mentorship can help guide your decision-making process </p>\n                  </div>									\n                  <div class="trending-counts-info d-flex align-items-center justify-content-between">\n                    <div class="trending-three-counts d-flex align-items-center">\n                      <img src="assets/img/icon/student-icon.svg" alt="Img">\n                      <p>900 Students</p>\n                    </div>\n                    <div class="price-three-time d-inline-flex align-items-center">\n                      <i class="fa-regular fa-clock me-2"></i>\n                      <span>9hr 30min</span>\n                    </div>\n                  </div>										\n                </div>\n                <div class="trending-content-footer">\n                  <div class="trending-price-group d-flex align-items-center justify-content-between">\n                    <div class="trending-group-view">\n                      <div class="trending-price-three">\n                        <h3>$800</h3>\n                      </div>\n                    </div>\n                    <div class="trending-footer-img">\n                      <a [routerLink]="routes.courseDetails"><img src="assets/img/user/user-06.jpg" alt="img"></a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- /Carousel Item -->\n            </div>\n            <div ngxSlickItem>\n\n              <!-- Carousel Item -->\n              <div class="trending-three-item">\n                <div class="trending-content-top trending-bg-three">\n                  <div class="course-title-one">\n                    <a [routerLink]="routes.courseDetails">Finance</a>\n                  </div>\n                  <div class="trending-three-text">							\n                    <h3 class="title instructor-text"><a [routerLink]="routes.courseDetails">Financial Literacy: Managing Your Money for Long-Term</a></h3>\n                    <p>The tech industry is vast and ever-changing, but a mentor can help</p>\n                  </div>\n                  \n                  <div class="trending-counts-info d-flex align-items-center justify-content-between">\n                    <div class="trending-three-counts d-flex align-items-center">\n                      <img src="assets/img/icon/student-icon.svg" alt="Img">\n                      <p>400 Students</p>\n                    </div>\n                    <div class="price-three-time d-inline-flex align-items-center">\n                      <i class="fa-regular fa-clock me-2"></i>\n                      <span>6hr 30min</span>\n                    </div>\n                  </div>										\n                </div>\n                <div class="trending-content-footer">\n                  <div class="trending-price-group d-flex align-items-center justify-content-between">\n                    <div class="trending-group-view">\n                      <div class="trending-price-three">\n                        <h3>$300</h3>\n                      </div>\n                    </div>\n                    <div class="trending-footer-img">\n                      <a [routerLink]="routes.courseDetails"><img src="assets/img/user/user-07.jpg" alt="img"></a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- /Carousel Item -->\n            </div>\n          </ngx-slick-carousel>\n\n        </div>\n      </div>\n      <!-- /Favourite Course -->\n    </div>\n  </section>			\n  <!-- Feature Course -->\n\n  <section class="gallery-three">\n    <img class="gallery-bg d-none d-lg-flex" src="assets/img/shapes/shape-11.svg" alt="img">\n    <div class="container">\n      <div class="home-five-head section-header-title" data-aos="fade-up">\n        <div class="row align-items-center d-flex justify-content-between row-gap-4">\n          <div class="col-lg-6 col-sm-12">\n            <h2>Courses Taught by Real Instructor</h2>\n          </div>\n          <div class="col-lg-6 col-sm-12">\n            <div class="see-all text-end">											\n              <a [routerLink]="routes.instructorList">View all<i class="fas fa-arrow-right ms-2"></i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="courses-gallery-three">\n        <div class="row">\n          <!-- Col -->\n          <div class="col-lg-5 col-md-5">\n            <div class="row">\n              <div class="col-lg-7 col-md-7 d-flex">\n                <div class="instructor-item instructor-item-five">\n                  <div class="instructors-img">\n                    <img src="assets/img/instructor/instructor-13.jpg" alt="Instructor">\n                  </div>\n                  <div class="instructor-overlay">\n                    <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">\n                      <a href="javascript:void(0);" class="favourite"><i class="isax isax-heart"></i></a>\n                    </div>\n                    <div class="instructor-content">\n                      <div>\n                        <h6><a [routerLink]="routes.instructorDetails">David</a></h6>\n                        <p>Angular Js</p>\n                      </div>	\n                      <div>														\n                        <a [routerLink]="routes.instructorDetails" class="view-link">\n                          <i class="fas fa-arrow-right"></i>\n                        </a>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class="col-lg-5 col-md-5 d-flex">\n                <div class="instructor-item instructor-item-five">\n                  <div class="instructors-img">\n                    <img src="assets/img/instructor/instructor-14.jpg" alt="Instructor">\n                  </div>\n                  <div class="instructor-overlay">\n                    <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">\n                      <a href="javascript:void(0);" class="favourite"><i class="isax isax-heart"></i></a>\n                    </div>\n                    <div class="instructor-content">\n                      <div>\n                        <h6><a [routerLink]="routes.instructorDetails">Maria</a></h6>\n                        <p>Node Js</p>\n                      </div>	\n                      <div>														\n                        <a [routerLink]="routes.instructorDetails" class="view-link">\n                          <i class="fas fa-arrow-right"></i>\n                        </a>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class="col-lg-5 col-md-5 d-flex">\n                <div class="instructor-item instructor-item-five">\n                  <div class="instructors-img">\n                    <img src="assets/img/instructor/instructor-15.jpg" alt="Instructor">\n                  </div>\n                  <div class="instructor-overlay">\n                    <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">\n                      <a href="javascript:void(0);" class="favourite"><i class="isax isax-heart"></i></a>\n                    </div>\n                    <div class="instructor-content">\n                      <div>\n                        <h6><a [routerLink]="routes.instructorDetails">Richardson</a></h6>\n                        <p>React Js</p>\n                      </div>	\n                      <div>														\n                        <a [routerLink]="routes.instructorDetails" class="view-link">\n                          <i class="fas fa-arrow-right"></i>\n                        </a>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class="col-lg-7 col-md-7 d-flex">\n                <div class="instructor-item instructor-item-five">\n                  <div class="instructors-img">\n                    <img src="assets/img/instructor/instructor-16.jpg" alt="Instructor">\n                  </div>\n                  <div class="instructor-overlay">\n                    <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">\n                      <a href="javascript:void(0);" class="favourite"><i class="isax isax-heart"></i></a>\n                    </div>\n                    <div class="instructor-content">\n                      <div>\n                        <h6><a [routerLink]="routes.instructorDetails">Patricia</a></h6>\n                        <p>Vue Js</p>\n                      </div>	\n                      <div>														\n                        <a [routerLink]="routes.instructorDetails" class="view-link">\n                          <i class="fas fa-arrow-right"></i>\n                        </a>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- /Col -->\n\n          <!-- Col -->\n          <div class="col-lg-3 col-md-3 d-flex">\n            <div class="instructor-item instructor-item-five">\n              <div class="instructors-img">\n                <img src="assets/img/gallery/gallery-5.jpg" alt="Instructor">\n              </div>\n              <div class="instructor-overlay">\n                <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">\n                  <a href="javascript:void(0);" class="favourite"><i class="isax isax-heart"></i></a>\n                </div>\n                <div class="instructor-content">\n                  <div>\n                    <h6><a [routerLink]="routes.instructorDetails">Hendriques</a></h6>\n                    <p>Python Developer</p>\n                  </div>	\n                  <div>														\n                    <a [routerLink]="routes.instructorDetails" class="view-link">\n                      <i class="fas fa-arrow-right"></i>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- /Col -->\n\n          <!-- Col -->\n          <div class="col-lg-4 col-md-4 d-flex">\n            <div class="row">\n              <div class="col-lg-12 col-md-12 d-flex">\n                <div class="instructor-item instructor-item-five">\n                  <div class="instructors-img">\n                    <img src="assets/img/instructor/instructor-17.jpg" alt="Instructor">\n                  </div>\n                  <div class="instructor-overlay">\n                    <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">\n                      <a href="javascript:void(0);" class="favourite"><i class="isax isax-heart"></i></a>\n                    </div>\n                    <div class="instructor-content">\n                      <div>\n                        <h6><a [routerLink]="routes.instructorDetails">Laura</a></h6>\n                        <p>UI/UX Designer</p>\n                      </div>	\n                      <div>														\n                        <a [routerLink]="routes.instructorDetails" class="view-link">\n                          <i class="fas fa-arrow-right"></i>\n                        </a>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class="col-lg-6 col-md-6 d-flex">\n                <div class="instructor-item instructor-item-five">\n                  <div class="instructors-img">\n                    <img src="assets/img/instructor/instructor-18.jpg" alt="Instructor">\n                  </div>\n                  <div class="instructor-overlay">\n                    <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">\n                      <a href="javascript:void(0);" class="favourite"><i class="isax isax-heart"></i></a>\n                    </div>\n                    <div class="instructor-content">\n                      <div>\n                        <h6><a [routerLink]="routes.instructorDetails">Morgon</a></h6>\n                        <p>Node Js</p>\n                      </div>	\n                      <div>														\n                        <a [routerLink]="routes.instructorDetails" class="view-link">\n                          <i class="fas fa-arrow-right"></i>\n                        </a>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class="col-lg-6 col-md-6 d-flex">\n                <div class="instructor-item instructor-item-five">\n                  <div class="instructors-img">\n                    <img src="assets/img/instructor/instructor-19.jpg" alt="Instructor">\n                  </div>\n                  <div class="instructor-overlay">\n                    <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">\n                      <a href="javascript:void(0);" class="favourite"><i class="isax isax-heart"></i></a>\n                    </div>\n                    <div class="instructor-content">\n                      <div>\n                        <h6><a [routerLink]="routes.instructorDetails">Brook</a></h6>\n                        <p>PHP Developer</p>\n                      </div>	\n                      <div>														\n                        <a [routerLink]="routes.instructorDetails" class="view-link">\n                          <i class="fas fa-arrow-right"></i>\n                        </a>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- /Col -->\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- Become An Instructor -->\n  <section class="home-five-become">\n            <div class="container">\n                <div class="row align-items-center row-gap-4">\n                    <div class="col-lg-8 col-md-8"  data-aos="fade-up">\n                        <div class="become-content-three">\n                            <h2>Become An Instructor</h2>\n            <p>Top instructors from around the world teach millions of students on DreamsLMS.</p>\n                        </div>\n                    </div>\n                    <div class="col-lg-4 col-md-4"  data-aos="fade-up">\n                        <div class="text-end">\n                            <a [routerLink]="routes.register" class="btn btn-white">Join Our Community</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n  <!-- /Become An Instructor -->\n\n  <!-- Leading Companies -->\n  <section class="lead-companies-three">\n    <div class="container">\n      <div class="home-five-head section-header-title aos-init aos-animate">\n        <div class="row align-items-center d-flex justify-content-between">\n          <div class="col-lg-12"  data-aos="fade-up">\n            <h2>500+ Leading Universities And Companies</h2>\n          </div>\n        </div>\n      </div>\n      <div class="m-0 p-0 lead-group aos" data-aos="fade-up">\n        <div class="lead-group-slider owl-theme">\n          <owl-carousel-o [options]="brandoption2">\n            <ng-template carouselSlide>\n              <div class="item">\n                <div class="lead-img">\n                  <img class="img-fluid" alt="Img" src="assets/img/client/client-33.svg">\n                </div>\n              </div>\n            </ng-template>\n            <ng-template carouselSlide>\n              <div class="item">\n                <div class="lead-img">\n                  <img class="img-fluid" alt="Img" src="assets/img/client/client-34.svg">\n                </div>\n              </div>\n            </ng-template>\n            <ng-template carouselSlide>\n              <div class="item">\n                <div class="lead-img">\n                  <img class="img-fluid" alt="Img" src="assets/img/client/client-35.svg">\n                </div>\n              </div>\n            </ng-template>\n            <ng-template carouselSlide>\n              <div class="item">\n                <div class="lead-img">\n                  <img class="img-fluid" alt="Img" src="assets/img/client/client-36.svg">\n                </div>\n              </div>\n            </ng-template>\n            <ng-template carouselSlide>\n              <div class="item">\n                <div class="lead-img">\n                  <img class="img-fluid" alt="Img" src="assets/img/client/client-37.svg">\n                </div>\n              </div>\n            </ng-template>\n            <ng-template carouselSlide>\n              <div class="item">\n                <div class="lead-img">\n                  <img class="img-fluid" alt="Img" src="assets/img/client/client-38.svg">\n                </div>\n              </div>							\n            </ng-template>\n          </owl-carousel-o>\n        </div>\n      </div>\n    </div>\n  </section>\n  <!-- /Leading Companies -->\n\n  <!-- Testimonial -->\n  <section class="testimonial-three">\n    <div class="container">\n      <div class="testimonial-pattern">\n        <img class="pattern-left img-fluid" alt="Img" src="assets/img/bg/pattern-05.svg">\n      </div>\n      <div class="testimonial-three-content">\n        <div class="row align-items-center row-gap-4">\n          <div class="col-xl-6 col-lg-12 col-md-12" data-aos="fade-down">\n            <div class="become-content">\n              <h2 class="aos-init aos-animate">They Trusted us</h2>\n              <h4 class="aos-init aos-animate">We are a very happy because we have a happy customer</h4>\n            </div>\n\n            <!-- View all Testimonail -->\n            <a href="javascript:void(0);" class="btn btn-white aos-init aos-animate" data-aos="fade-up">Join Our Community</a>\n            <!-- View all Testimonail -->\n\n          </div>\n          <div class="col-xl-6 col-lg-12 col-md-12" data-aos="fade-down">\n            <div class="swiper-testimonial-three custom-swiper">\n\n            <owl-carousel-o [options]="customOptions">\n    <ng-container *ngFor="let testimonial of testimonials">\n      <ng-template carouselSlide>\n        <div class="testimonial-item-five">\n          <div class="testimonial-quote">\n            <img class="quote img-fluid" alt="Quote" src="assets/img/bg/quote.svg">\n          </div>\n          <div class="testimonial-content">\n            <p>{{ testimonial.content }}</p>\n          </div>\n          <div class="testimonial-ratings">\n            <div class="rating">\n              <i class="fas fa-star filled" *ngFor="let star of [1, 2, 3, 4] | slice:0:testimonial.rating"></i>\n              <i class="fas fa-star" *ngFor="let star of [1, 2, 3, 4, 5] | slice:testimonial.rating:5"></i>\n              <p class="d-inline-block">{{ testimonial.rating }}<span>ratings</span></p>\n            </div>\n          </div>\n          <div class="testimonial-users">\n            <div class="imgbx">\n              <img class="img-fluid" alt="User" src="{{ testimonial.user.image }}">\n            </div>\n            <div class="d-block">\n              <h6>{{ testimonial.user.name }}</h6>\n              <p>{{ testimonial.user.role }}</p>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n    </ng-container>\n  </owl-carousel-o>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <!--/Testimonial -->\n\n  <!-- Latest Blog -->\n  <section class="latest-blog-three">\n    <div class="container">\n      <div class="home-five-head section-header-title pb-0" data-aos="fade-up">\n        <div class="row align-items-center d-flex justify-content-between row-gap-4">\n          <div class="col-lg-6 col-md-8">\n            <h2>Latest News & Events</h2>\n          </div>\n          <div class="col-lg-6 col-md-4">\n            <div class="see-all text-end">											\n              <a [routerLink]="routes.blog_grid">View All<i class="fas fa-arrow-right ms-2"></i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="latest-blog-main">\n        <div class="row">\n          <div class="col-lg-4 d-flex">								\n            <div class="event-blog-three blog-three-one flex-fill" >\n              <div class="blog-img-three">\n                <a [routerLink]="routes.blog_grid">\n                  <img class="img-fluid" alt="Img" src="assets/img/blog/blog-34.jpg">\n                </a>\n              </div>\n              <div class="latest-blog-content">\n                <div class="event-three-title">\n                  <div class="event-span-three d-flex align-items-center">\n                    <span class="span-name-three badge-green">Lifestyle</span>\n                    <div class="blog-student-count">\n                      <i class="fa-solid fa-calendar"></i>\n                      <span>09 Aug 2025</span>\n                    </div>\n                  </div>\n                  <a [routerLink]="routes.blog_grid">\n                    <h5>Why an LMS is Essential for Modern Education</h5>\n                  </a>\n                </div>\n              </div>\n              <div class="blog-user-top">\n                <a href="javascript:void(0);"><img src="assets/img/user/user-01.jpg" alt="">David Benitez</a>\n              </div>\n            </div>\n          </div>\n          <div class="col-lg-8">\n            <div class="row">\n              <div class="col-md-6">\n                <div class="event-blog-three blog-three-one" >\n                  <div class="blog-img-three">\n                    <a [routerLink]="routes.blog_grid">\n                      <img class="img-fluid" alt="Img" src="assets/img/blog/blog-36.jpg">\n                    </a>\n                  </div>\n                  <div class="latest-blog-content">\n                    <div class="event-three-title">\n                      <div class="event-span-three d-flex align-items-center">\n                        <span class="span-name-three badge-green">Productivity</span>\n                        <div class="blog-student-count">\n                          <i class="fa-solid fa-calendar"></i>\n                          <span>09 Aug 2025</span>\n                        </div>\n                      </div>\n                      <a [routerLink]="routes.blog_grid">\n                        <h5>The Impact of LMS on Academic Journey Education</h5>\n                      </a>\n                    </div>\n                  </div>\n                  <div class="blog-user-top">\n                    <a href="javascript:void(0);"><img src="assets/img/user/user-01.jpg" alt="">David Benitez</a>\n                  </div>\n                </div>\n              </div>\n              <div class="col-md-6">\n                <div class="event-blog-three blog-three-one" >\n                  <div class="blog-img-three">\n                    <a [routerLink]="routes.blog_grid">\n                      <img class="img-fluid" alt="Img" src="assets/img/blog/blog-37.jpg">\n                    </a>\n                  </div>\n                  <div class="latest-blog-content">\n                    <div class="event-three-title">\n                      <div class="event-span-three d-flex align-items-center">\n                        <span class="span-name-three badge-green">Productivity</span>\n                        <div class="blog-student-count">\n                          <i class="fa-solid fa-calendar"></i>\n                          <span>09 Aug 2025</span>\n                        </div>\n                      </div>\n                      <a [routerLink]="routes.blog_grid">\n                        <h5>Maximizing Academic Success with the Right LMS</h5>\n                      </a>\n                    </div>\n                  </div>\n                  <div class="blog-user-top">\n                    <a href="javascript:void(0);"><img src="assets/img/user/user-01.jpg" alt="">David Benitez</a>\n                  </div>\n                </div>\n              </div>\n              <div class="col-md-6">\n                <div class="event-blog-three blog-three-one" >\n                  <div class="blog-img-three">\n                    <a [routerLink]="routes.blog_grid">\n                      <img class="img-fluid" alt="Img" src="assets/img/blog/blog-38.jpg">\n                    </a>\n                  </div>\n                  <div class="latest-blog-content">\n                    <div class="event-three-title">\n                      <div class="event-span-three d-flex align-items-center">\n                        <span class="span-name-three badge-green">UI /UX</span>\n                        <div class="blog-student-count">\n                          <i class="fa-solid fa-calendar"></i>\n                          <span>09 Aug 2025</span>\n                        </div>\n                      </div>\n                      <a [routerLink]="routes.blog_grid">\n                        <h5>Promoting Health & Well being in Schools</h5>\n                      </a>\n                    </div>\n                  </div>\n                  <div class="blog-user-top">\n                    <a href="javascript:void(0);"><img src="assets/img/user/user-01.jpg" alt="">David Benitez</a>\n                  </div>\n                </div>\n              </div>\n              <div class="col-md-6">\n                <div class="event-blog-three blog-three-one" >\n                  <div class="blog-img-three">\n                    <a [routerLink]="routes.blog_grid">\n                      <img class="img-fluid" alt="Img" src="assets/img/blog/blog-39.jpg">\n                    </a>\n                  </div>\n                  <div class="latest-blog-content">\n                    <div class="event-three-title">\n                      <div class="event-span-three d-flex align-items-center">\n                        <span class="span-name-three badge-green">Development</span>\n                        <div class="blog-student-count">\n                          <i class="fa-solid fa-calendar"></i>\n                          <span>09 Aug 2025</span>\n                        </div>\n                      </div>\n                      <a [routerLink]="routes.blog_grid">\n                        <h5>How to Build and Run a Pilot Mentoring Program</h5>\n                      </a>\n                    </div>\n                  </div>\n                  <div class="blog-user-top">\n                    <a href="javascript:void(0);"><img src="assets/img/user/user-01.jpg" alt="">David Benitez</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>	\n        </div>\n      </div>\n    </div>\n  </section>\n  <!-- /Latest Blog -->\n\n  <app-footer/>' }]
  }], () => [{ type: CommonService }, { type: Router }, { type: HomeData }, { type: Renderer2 }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Home5Component, { className: "Home5Component", filePath: "src/app/features/home-list/home5/home5.component.ts", lineNumber: 46 });
})();
export {
  Home5Component
};
//# sourceMappingURL=chunk-VYTJFUZJ.js.map
