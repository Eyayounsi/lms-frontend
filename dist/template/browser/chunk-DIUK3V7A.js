import {
  CarouselComponent,
  CarouselModule,
  CarouselSlideDirective
} from "./chunk-DB7VBWQD.js";
import {
  CountUpModule
} from "./chunk-HCPHENTX.js";
import {
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
  DataService
} from "./chunk-44KX7P7T.js";
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
  CommonModule
} from "./chunk-YBJXKBE2.js";
import {
  Component,
  Injectable,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-5DE2SIVI.js";
import {
  __toESM
} from "./chunk-TXDUYLVM.js";

// src/app/features/home-list/home2/home2.component.ts
var AOS = __toESM(require_aos());

// src/app/features/home-list/home2/components/footer/footer.component.ts
var FooterComponent = class _FooterComponent {
  routes = routes;
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 101, vars: 11, consts: [[1, "footer"], [1, "footer-bg"], ["src", "assets/img/bg/footer-bg-01.png", "alt", "", 1, "footer-bg-1"], ["src", "assets/img/bg/footer-bg-02.png", "alt", "", 1, "footer-bg-2"], [1, "footer-top"], [1, "container"], [1, "row", "row-gap-4"], [1, "col-lg-4"], [1, "footer-about"], [1, "footer-logo"], ["src", "assets/img/logo.svg", "alt", ""], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "me-2"], ["src", "assets/img/icon/appstore.svg", "alt", ""], ["href", "javascript:void(0);"], ["src", "assets/img/icon/googleplay.svg", "alt", ""], [1, "col-lg-8"], [1, "col-lg-3"], [1, "footer-widget", "footer-menu"], [1, "footer-title"], [3, "routerLink"], [1, "col-lg-6"], [1, "footer-widget", "footer-contact"], [1, "subscribe-input"], ["action", "javascript:void(0);"], ["type", "email", "placeholder", "Enter your Email Address", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", "inline-flex", "align-items-center"], [1, "isax", "isax-send-2", "me-1"], [1, "footer-contact-info"], [1, "footer-address", "d-flex", "align-items-center"], ["src", "assets/img/icon/icon-20.svg", "alt", "Img", 1, "img-fluid", "me-2"], ["src", "assets/img/icon/icon-19.svg", "alt", "Img", 1, "img-fluid", "me-2"], ["src", "assets/img/icon/icon-21.svg", "alt", "Img", 1, "img-fluid", "me-2"], [1, "footer-bottom"], [1, "row", "row-gap-2"], [1, "col-md-6"], [1, "text-center", "text-md-start"], [1, "text-white"], [1, "d-flex", "align-items-center", "justify-content-center", "justify-content-md-end", "footer-link"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1);
      \u0275\u0275element(2, "img", 2)(3, "img", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9);
      \u0275\u0275element(10, "img", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p");
      \u0275\u0275text(12, "Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 11)(14, "a", 12);
      \u0275\u0275element(15, "img", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "a", 14);
      \u0275\u0275element(17, "img", 15);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(18, "div", 16)(19, "div", 6)(20, "div", 17)(21, "div", 18)(22, "h5", 19);
      \u0275\u0275text(23, "For Instructor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "ul")(25, "li")(26, "a", 20);
      \u0275\u0275text(27, "Search Mentors");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "li")(29, "a", 20);
      \u0275\u0275text(30, "Login");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "li")(32, "a", 20);
      \u0275\u0275text(33, "Register");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "li")(35, "a", 20);
      \u0275\u0275text(36, "Booking");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "li")(38, "a", 20);
      \u0275\u0275text(39, "Students Dashboard");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(40, "div", 17)(41, "div", 18)(42, "h5", 19);
      \u0275\u0275text(43, "For Student");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "ul")(45, "li")(46, "a", 14);
      \u0275\u0275text(47, "Appointments");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "li")(49, "a", 20);
      \u0275\u0275text(50, "Chat");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "li")(52, "a", 20);
      \u0275\u0275text(53, "Login");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "li")(55, "a", 20);
      \u0275\u0275text(56, "Register");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "li")(58, "a", 20);
      \u0275\u0275text(59, "Instructor Dashboard");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(60, "div", 21)(61, "div", 22)(62, "h5", 19);
      \u0275\u0275text(63, "Newsletter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div", 23)(65, "form", 24);
      \u0275\u0275element(66, "input", 25);
      \u0275\u0275elementStart(67, "button", 26);
      \u0275\u0275element(68, "i", 27);
      \u0275\u0275text(69, "Subscribe");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(70, "div", 28)(71, "div", 29);
      \u0275\u0275element(72, "img", 30);
      \u0275\u0275elementStart(73, "p");
      \u0275\u0275text(74, " 3556 Beech Street, San Francisco,");
      \u0275\u0275element(75, "br");
      \u0275\u0275text(76, " California, CA 94108 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "div", 29);
      \u0275\u0275element(78, "img", 31);
      \u0275\u0275elementStart(79, "p");
      \u0275\u0275text(80, "dreamslms@example.com");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "div", 29);
      \u0275\u0275element(82, "img", 32);
      \u0275\u0275elementStart(83, "p");
      \u0275\u0275text(84, "+19 123-456-7890");
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(85, "div", 33)(86, "div", 5)(87, "div", 34)(88, "div", 35)(89, "div", 36)(90, "p", 37);
      \u0275\u0275text(91, "Copyright \xA9 2025 DreamsLMS. All rights reserved.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(92, "div", 35)(93, "div")(94, "ul", 38)(95, "li")(96, "a", 20);
      \u0275\u0275text(97, "Terms & Conditions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "li")(99, "a", 20);
      \u0275\u0275text(100, "Privacy Policy");
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(26);
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
  }, dependencies: [CommonModule, RouterLink], styles: ["\n\n.footer-two[_ngcontent-%COMP%]   i-feather[_ngcontent-%COMP%] {\n  width: 17px;\n}\n/*# sourceMappingURL=footer.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer", imports: [CommonModule, RouterLink], template: '<footer class="footer">\n	<div class="footer-bg">\n		<img src="assets/img/bg/footer-bg-01.png" class="footer-bg-1" alt="">\n		<img src="assets/img/bg/footer-bg-02.png" class="footer-bg-2" alt="">\n	</div>\n	<div class="footer-top">\n		<div class="container">\n			<div class="row row-gap-4">\n				<div class="col-lg-4">\n					<div class="footer-about">\n						<div class="footer-logo">\n							<img src="assets/img/logo.svg" alt="">\n						</div>\n						<p>Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.</p>\n						<div class="d-flex align-items-center">\n							<a href="javascript:void(0);" class="me-2"><img src="assets/img/icon/appstore.svg" alt=""></a>\n							<a href="javascript:void(0);"><img src="assets/img/icon/googleplay.svg" alt=""></a>\n						</div>\n					</div>\n				</div>\n				<div class="col-lg-8">\n					<div class="row row-gap-4">\n						<div class="col-lg-3">\n							<div class="footer-widget footer-menu">\n								<h5 class="footer-title">For Instructor</h5>\n								<ul>\n									<li><a [routerLink]="routes.courseGrid">Search Mentors</a></li>\n									<li><a [routerLink]="routes.login">Login</a></li>\n									<li><a [routerLink]="routes.register">Register</a></li>\n									<li><a [routerLink]="routes.courseList">Booking</a></li>\n									<li><a [routerLink]="routes.students_Dashboard">Students Dashboard</a></li>\n								</ul>\n							</div>\n						</div>\n						<div class="col-lg-3">\n							<div class="footer-widget footer-menu">\n								<h5 class="footer-title">For Student</h5>\n								<ul>\n									<li><a href="javascript:void(0);">Appointments</a></li>\n									<li><a [routerLink]="routes.instructorMessage">Chat</a></li>\n									<li><a [routerLink]="routes.login">Login</a></li>\n									<li><a [routerLink]="routes.register">Register</a></li>\n									<li><a [routerLink]="routes.instructor_dashboard">Instructor Dashboard</a></li>\n								</ul>\n							</div>\n						</div>\n						<div class="col-lg-6">\n							<div class="footer-widget footer-contact">\n								<h5 class="footer-title">Newsletter</h5>\n								<div class="subscribe-input">\n									<form action="javascript:void(0);">\n										<input type="email" class="form-control" placeholder="Enter your Email Address">\n										<button type="submit" class="btn btn-primary btn-sm inline-flex align-items-center"><i class="isax isax-send-2 me-1"></i>Subscribe</button>\n									</form>\n								</div>\n								<div class="footer-contact-info">\n									<div class="footer-address d-flex align-items-center">\n										<img src="assets/img/icon/icon-20.svg" alt="Img" class="img-fluid me-2">\n										<p> 3556  Beech Street, San Francisco,<br> California, CA 94108 </p>\n									</div>\n									<div class="footer-address d-flex align-items-center">\n										<img src="assets/img/icon/icon-19.svg" alt="Img" class="img-fluid me-2">\n										<p>dreamslms&#64;example.com</p>\n									</div>\n									<div class="footer-address d-flex align-items-center">\n										<img src="assets/img/icon/icon-21.svg" alt="Img" class="img-fluid me-2">\n										<p>+19 123-456-7890</p>\n									</div>\n								</div>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n	<div class="footer-bottom">\n		<div class="container">\n			<div class="row row-gap-2">\n				<div class="col-md-6">\n					<div class="text-center text-md-start">\n						<p class="text-white">Copyright &copy; 2025 DreamsLMS. All rights reserved.</p>\n					</div>\n				</div>\n				<div class="col-md-6">\n					<div>\n						<ul class="d-flex align-items-center justify-content-center justify-content-md-end footer-link">\n							<li><a [routerLink]="routes.page_term_condition">Terms & Conditions</a></li>\n							<li><a [routerLink]="routes.page_privacy_policy">Privacy Policy</a></li>\n						</ul>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n</footer>', styles: ["/* src/app/features/home-list/home2/components/footer/footer.component.scss */\n.footer-two i-feather {\n  width: 17px;\n}\n/*# sourceMappingURL=footer.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/features/home-list/home2/components/footer/footer.component.ts", lineNumber: 13 });
})();

// src/app/features/home-list/home2/components/data.ts
var HomeData = class _HomeData {
  Category = [
    {
      title: "Angular Development",
      instructors: "40",
      img: "1"
    },
    {
      title: "Python Development",
      instructors: "20",
      img: "2"
    },
    {
      title: "Node Js Development",
      instructors: "120",
      img: "3"
    },
    {
      title: "PHP Development",
      instructors: "40",
      img: "4"
    },
    {
      title: "Docker Development",
      instructors: "40",
      img: "5"
    },
    {
      title: "Swift Development",
      instructors: "40",
      img: "6"
    },
    {
      title: "Photography",
      instructors: "40",
      img: "7"
    },
    {
      title: "Business",
      instructors: "40",
      img: "8"
    }
  ];
  Featured_Courses = [
    {
      title: "PHP",
      id: 1,
      reviews: "203",
      course: "The Complete Web Developer PHP framework Course 2.0",
      author: "Russell T. Johnson"
    },
    {
      title: "Wordpress",
      id: 2,
      reviews: "243",
      course: "Wordpress for Beginners - Master Wordpress Quickly",
      author: "Cristofer Nolen"
    },
    {
      title: "Angular",
      id: 3,
      reviews: "243",
      course: "Learn Angular Fundamentals From beginning to advance lavel",
      author: "Cristofer Nolen"
    },
    {
      title: "HTML5",
      id: 4,
      reviews: "243",
      course: "Build Responsive Real World Websites with HTML5 and CSS3",
      author: "Cristofer Nolen"
    },
    {
      title: "C#",
      id: 5,
      reviews: "243",
      course: "C# Developers Double Your Coding Speed with Visual Studio",
      author: "Cristofer Nolen"
    },
    {
      title: "UI/UX",
      id: 6,
      reviews: "234",
      course: "Information About UI/UX Design Degree",
      author: "Cristofer Nolen"
    }
  ];
  trending_Courses = [
    {
      id: 1,
      title: "Wordpress",
      reviews: "333",
      course: "Wordpress for Beginners - Master Wordpress Quickly"
    },
    {
      id: 2,
      title: "C#",
      reviews: "235",
      course: "C# Developers Double Your Coding Speed with Visual Studio"
    },
    {
      id: 3,
      title: "Angular",
      reviews: "674",
      course: "Learn Angular Fundamentals From beginning to advance lavel"
    },
    {
      id: 4,
      title: "HTML5",
      reviews: "123",
      course: "Build Responsive Real World Websites with HTML5 and CSS3"
    }
  ];
  feature_instructors = [
    {
      id: 1,
      name: "Julian Adrose",
      title: "Angular Expert",
      students: "50"
    },
    {
      id: 2,
      name: "Gallegos",
      title: "Docker",
      students: "70"
    },
    {
      id: 3,
      name: "Kristi",
      title: "Node Js",
      students: "60"
    },
    {
      id: 4,
      name: "Pinero",
      title: "Python",
      students: "80"
    }
  ];
  real_reviews = [
    {
      title: "Helps us to improve our productivity",
      para: "High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.",
      name: "William George",
      role: "CEO & Chairman"
    },
    {
      title: "Helps us to improve our productivity",
      para: "High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.",
      name: "Gallegos",
      role: "CEO & MD"
    },
    {
      title: "Helps us to improve our productivity",
      para: "High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.",
      name: "Julian Adrose",
      role: "Manager"
    }
  ];
  blog = [
    {
      id: 1,
      badge: "Marketing",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "Jun 15, 2022"
    },
    {
      id: 2,
      badge: "Sales",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "Jun 15, 2022"
    },
    {
      id: 3,
      badge: "Marketing",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "Jun 15, 2022"
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

// src/app/features/home-list/home2/home2.component.ts
function Home2Component_ng_template_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 250)(1, "div", 251)(2, "span", 252);
    \u0275\u0275element(3, "i", 253);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h5", 254)(5, "a", 84);
    \u0275\u0275text(6, "Management");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 51);
    \u0275\u0275text(8, "156 Courses");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", ctx_r0.routes.courseCategory);
  }
}
function Home2Component_ng_template_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 250)(1, "div", 251)(2, "span", 252);
    \u0275\u0275element(3, "i", 255);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h5", 254)(5, "a", 84);
    \u0275\u0275text(6, "IT & Softwares");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 51);
    \u0275\u0275text(8, "214 Courses");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", ctx_r0.routes.courseCategory);
  }
}
function Home2Component_ng_template_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 250)(1, "div", 251)(2, "span", 252);
    \u0275\u0275element(3, "i", 256);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h5", 254)(5, "a", 84);
    \u0275\u0275text(6, "Marketing");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 51);
    \u0275\u0275text(8, "174 Courses");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", ctx_r0.routes.courseCategory);
  }
}
function Home2Component_ng_template_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 250)(1, "div", 251)(2, "div", 257)(3, "span", 252);
    \u0275\u0275element(4, "i", 258);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h5", 254)(6, "a", 84);
    \u0275\u0275text(7, "Productivity");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 51);
    \u0275\u0275text(9, "126 Courses");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", ctx_r0.routes.courseCategory);
  }
}
function Home2Component_ng_template_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 250)(1, "div", 251)(2, "div", 257)(3, "span", 252);
    \u0275\u0275element(4, "i", 259);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h5", 254)(6, "a", 84);
    \u0275\u0275text(7, "Lifestyles");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 51);
    \u0275\u0275text(9, "214 Courses");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", ctx_r0.routes.courseCategory);
  }
}
function Home2Component_ng_template_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 250)(1, "div", 251)(2, "div", 257)(3, "span", 252);
    \u0275\u0275element(4, "i", 260);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h5", 254)(6, "a", 84);
    \u0275\u0275text(7, "Design");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 51);
    \u0275\u0275text(9, "161 Courses");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", ctx_r0.routes.courseCategory);
  }
}
function Home2Component_ng_template_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 250)(1, "div", 251)(2, "div", 257)(3, "span", 252);
    \u0275\u0275element(4, "i", 256);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h5", 254)(6, "a", 84);
    \u0275\u0275text(7, "Marketing");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 51);
    \u0275\u0275text(9, "174 Courses");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", ctx_r0.routes.courseCategory);
  }
}
function Home2Component_ng_template_369_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 250)(1, "div", 261)(2, "div", 86)(3, "a", 262);
    \u0275\u0275element(4, "i", 88);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 263)(6, "a", 84);
    \u0275\u0275element(7, "img", 264);
    \u0275\u0275elementStart(8, "span", 265);
    \u0275\u0275element(9, "img", 266);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 267)(11, "h3", 73)(12, "a", 84);
    \u0275\u0275text(13, "Joyce Pence");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "span", 268);
    \u0275\u0275text(15, "Lead Designer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 172);
    \u0275\u0275element(17, "i", 269);
    \u0275\u0275text(18, "4.8 (157 Reviews) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 270)(20, "a", 271);
    \u0275\u0275element(21, "i", 272);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "a", 271);
    \u0275\u0275element(23, "i", 273);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "a", 271);
    \u0275\u0275element(25, "i", 274);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "a", 271);
    \u0275\u0275element(27, "i", 275);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "a", 271);
    \u0275\u0275element(29, "i", 276);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", ctx_r0.routes.instructorDetails);
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", ctx_r0.routes.instructorDetails);
  }
}
function Home2Component_ng_template_370_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 250)(1, "div", 261)(2, "div", 86)(3, "a", 262);
    \u0275\u0275element(4, "i", 88);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 263)(6, "a", 84);
    \u0275\u0275element(7, "img", 277);
    \u0275\u0275elementStart(8, "span", 265);
    \u0275\u0275element(9, "img", 266);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 267)(11, "h3", 73)(12, "a", 84);
    \u0275\u0275text(13, "Edith Dorsey");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "span", 268);
    \u0275\u0275text(15, "Accountant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 172);
    \u0275\u0275element(17, "i", 269);
    \u0275\u0275text(18, "4.9 (20 Reviews) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 270)(20, "a", 271);
    \u0275\u0275element(21, "i", 272);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "a", 271);
    \u0275\u0275element(23, "i", 273);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "a", 271);
    \u0275\u0275element(25, "i", 274);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "a", 271);
    \u0275\u0275element(27, "i", 275);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "a", 271);
    \u0275\u0275element(29, "i", 276);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", ctx_r0.routes.instructorDetails);
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", ctx_r0.routes.instructorDetails);
  }
}
function Home2Component_ng_template_371_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 250)(1, "div", 261)(2, "div", 86)(3, "a", 262);
    \u0275\u0275element(4, "i", 88);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 263)(6, "a", 84);
    \u0275\u0275element(7, "img", 278);
    \u0275\u0275elementStart(8, "span", 265);
    \u0275\u0275element(9, "img", 266);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 267)(11, "h3", 73)(12, "a", 84);
    \u0275\u0275text(13, "Ruben Holmesr");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "span", 268);
    \u0275\u0275text(15, "Architect");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 172);
    \u0275\u0275element(17, "i", 269);
    \u0275\u0275text(18, "4.8 (157 Reviews) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 270)(20, "a", 271);
    \u0275\u0275element(21, "i", 272);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "a", 271);
    \u0275\u0275element(23, "i", 273);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "a", 271);
    \u0275\u0275element(25, "i", 274);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "a", 271);
    \u0275\u0275element(27, "i", 275);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "a", 271);
    \u0275\u0275element(29, "i", 276);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", ctx_r0.routes.instructorDetails);
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", ctx_r0.routes.instructorDetails);
  }
}
function Home2Component_ng_template_372_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 250)(1, "div", 261)(2, "div", 86)(3, "a", 262);
    \u0275\u0275element(4, "i", 88);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 263)(6, "a", 84);
    \u0275\u0275element(7, "img", 279);
    \u0275\u0275elementStart(8, "span", 265);
    \u0275\u0275element(9, "img", 266);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 267)(11, "h3", 73)(12, "a", 84);
    \u0275\u0275text(13, "Carol Magner");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "span", 268);
    \u0275\u0275text(15, "Lead Designer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 172);
    \u0275\u0275element(17, "i", 269);
    \u0275\u0275text(18, "5.0 (218 Reviews) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 270)(20, "a", 271);
    \u0275\u0275element(21, "i", 272);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "a", 271);
    \u0275\u0275element(23, "i", 273);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "a", 271);
    \u0275\u0275element(25, "i", 274);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "a", 271);
    \u0275\u0275element(27, "i", 275);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "a", 271);
    \u0275\u0275element(29, "i", 276);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", ctx_r0.routes.instructorDetails);
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", ctx_r0.routes.instructorDetails);
  }
}
function Home2Component_ng_template_373_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 250)(1, "div", 261)(2, "div", 86)(3, "a", 262);
    \u0275\u0275element(4, "i", 88);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 263)(6, "a", 84);
    \u0275\u0275element(7, "img", 277);
    \u0275\u0275elementStart(8, "span", 265);
    \u0275\u0275element(9, "img", 266);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 267)(11, "h3", 73)(12, "a", 84);
    \u0275\u0275text(13, "Edith Dorsey");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "span", 268);
    \u0275\u0275text(15, "Accountant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 172);
    \u0275\u0275element(17, "i", 269);
    \u0275\u0275text(18, "4.9 (20 Reviews) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 270)(20, "a", 271);
    \u0275\u0275element(21, "i", 272);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "a", 271);
    \u0275\u0275element(23, "i", 273);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "a", 271);
    \u0275\u0275element(25, "i", 274);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "a", 271);
    \u0275\u0275element(27, "i", 275);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "a", 271);
    \u0275\u0275element(29, "i", 276);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", ctx_r0.routes.instructorDetails);
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", ctx_r0.routes.instructorDetails);
  }
}
function Home2Component_ng_template_445_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 280);
    \u0275\u0275element(1, "img", 281);
    \u0275\u0275elementEnd();
  }
}
function Home2Component_ng_template_446_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 280);
    \u0275\u0275element(1, "img", 282);
    \u0275\u0275elementEnd();
  }
}
function Home2Component_ng_template_447_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 280);
    \u0275\u0275element(1, "img", 283);
    \u0275\u0275elementEnd();
  }
}
function Home2Component_ng_template_448_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 280);
    \u0275\u0275element(1, "img", 284);
    \u0275\u0275elementEnd();
  }
}
function Home2Component_ng_template_449_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 280);
    \u0275\u0275element(1, "img", 285);
    \u0275\u0275elementEnd();
  }
}
function Home2Component_ng_template_450_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 280);
    \u0275\u0275element(1, "img", 286);
    \u0275\u0275elementEnd();
  }
}
function Home2Component_ng_template_451_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 280);
    \u0275\u0275element(1, "img", 287);
    \u0275\u0275elementEnd();
  }
}
function Home2Component_ng_template_452_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 280);
    \u0275\u0275element(1, "img", 288);
    \u0275\u0275elementEnd();
  }
}
var Home2Component = class _Home2Component {
  DataService;
  router;
  data;
  routes = routes;
  selected = "1";
  universitiesCompanies = [];
  Category = [];
  Featured_Courses = [];
  trending_Courses = [];
  feature_instructors = [];
  real_reviews = [];
  blog = [];
  constructor(DataService2, router, data) {
    this.DataService = DataService2;
    this.router = router;
    this.data = data;
    this.Category = this.data.Category;
    this.Featured_Courses = this.data.Featured_Courses;
    this.trending_Courses = this.data.trending_Courses;
    this.feature_instructors = this.data.feature_instructors;
    this.real_reviews = this.data.real_reviews;
    this.blog = this.data.blog;
  }
  ngOnInit() {
    AOS.init({
      duration: 1200,
      once: true
    });
  }
  categoryCarousel = {
    loop: true,
    margin: 16,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    smartSpeed: 1e3,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 5
      },
      1200: {
        items: 6
      },
      1400: {
        items: 6
      }
    }
  };
  instructorCarousel = {
    loop: true,
    margin: 24,
    nav: false,
    dots: true,
    autoplay: false,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    smartSpeed: 1e3,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      },
      1040: {
        items: 4
      },
      1400: {
        items: 4
      }
    }
  };
  brandCarousel = {
    loop: true,
    margin: 24,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3e3,
    autoplayHoverPause: true,
    smartSpeed: 1e3,
    responsive: {
      0: {
        items: 2
      },
      576: {
        items: 3
      },
      768: {
        items: 4
      },
      992: {
        items: 4
      },
      1200: {
        items: 6
      },
      1400: {
        items: 6
      }
    }
  };
  courseSlider = {
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
  toggleClass(slide) {
    slide.favourite = !slide.favourite;
  }
  directPath() {
    this.router.navigate(["/pages/course/course-list"]);
  }
  static \u0275fac = function Home2Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Home2Component)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HomeData));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Home2Component, selectors: [["app-home2"]], decls: 736, vars: 44, consts: [["slickModal", "slick-carousel"], [1, "banner-section-two"], [1, "container", "position-relative"], ["src", "assets/img/banner/star-01.png", "alt", "img", 1, "img-fluid", "star-01"], ["src", "assets/img/banner/star-02.png", "alt", "img", 1, "img-fluid", "star-02"], ["src", "assets/img/banner/star-03.png", "alt", "img", 1, "img-fluid", "star-03"], ["src", "assets/img/banner/star-04.png", "alt", "img", 1, "img-fluid", "star-04"], ["src", "assets/img/banner/star-05.png", "alt", "img", 1, "img-fluid", "star-05"], ["src", "assets/img/icons/banner-book.svg", "alt", "img", 1, "img-fluid", "star-06", "d-none", "d-xl-flex"], ["src", "assets/img/icons/banner-icon-03.svg", "alt", "img", 1, "img-fluid", "star-07", "d-none", "d-xl-flex"], ["src", "assets/img/icons/banner-icon-01.svg", "alt", "img", 1, "img-fluid", "star-08", "d-none", "d-xl-flex"], ["src", "assets/img/icons/banner-icon-02.svg", "alt", "img", 1, "img-fluid", "star-09", "d-none", "d-xl-flex"], ["src", "assets/img/icons/banner-icon-04.svg", "alt", "img", 1, "img-fluid", "star-10", "d-none", "d-xl-flex"], ["src", "assets/img/banner/soft-star.png", "alt", "img", 1, "img-fluid", "star-11", "d-none", "d-xl-flex"], [1, "row", "align-items-end"], [1, "col-lg-6"], [1, "d-flex", "align-items-center", "position-relative", "banner-content"], ["data-aos", "zoom-in", 1, "aos"], [1, "banner-info"], [1, "d-inline-flex", "fw-semibold", "text-uppercase", "mb-3"], [1, "mb-4"], [1, "position-relative", "banner-title"], ["src", "assets/img/banner/banner-text-bg.png", "alt", "img", 1, "img-fluid", "position-absolute", "title-bg"], [1, "banner-form"], [1, "d-sm-flex", "align-items-center"], [1, "dropdown"], ["data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "dropdown-toggle", "d-flex", "align-items-center"], [1, "isax", "isax-book", "me-2"], [1, "dropdown-menu", "p-2"], ["href", "javascript:void(0);", 1, "dropdown-item", "d-flex", "align-items-center", "p-2"], ["type", "text", "placeholder", "Search Courses, Instructors", 1, "form-control", "border-0"], [1, "rounded-pill", "btn", "btn-primary", "btn-xl"], [1, "ms-sm-3", "mt-2", "mt-sm-0"], [1, "list-inline", "mb-0"], [1, "list-inline-item", "me-0"], [1, "fas", "fa-star", "text-warning"], [1, "fas", "fa-star-half-alt", "text-warning"], [1, "list-inline-item", "heading-color", "fw-bold", "me-0"], [1, "banner-img-section"], ["src", "assets/img/banner/banner-bg-01.png", "alt", "img", "data-aos", "fade-up", "data-aos-easing", "linear", "data-aos-duration", "500", 1, "img-fluid", "banner-bg-01", "d-none", "d-xl-flex", "aos"], ["src", "assets/img/banner/banner-bg-02.png", "alt", "img", "data-aos", "fade-up", "data-aos-easing", "linear", "data-aos-duration", "600", 1, "img-fluid", "banner-bg-02", "d-none", "d-xl-flex", "aos"], ["src", "assets/img/hero/hero-1.png", "alt", "img", "data-aos", "fade-up", "data-aos-easing", "linear", "data-aos-duration", "900", 1, "img-fluid", "banner-bg-03", "aos"], ["data-aos", "fade-down", 1, "enrolled-list-cover", "aos"], [1, "enrolled-list"], [1, "avatar-list-stacked"], [1, "avatar", "avatar-rounded"], ["src", "assets/img/user/user-01.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/user/user-03.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/user/user-07.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/user/user-08.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/user/user-06.jpg", "alt", "img"], [1, "mb-0"], [1, "text-secondary"], ["data-aos", "fade-down", 1, "course-count", "d-inline-flex", "align-items-center", "aos"], [1, "counter-icon"], [1, "ti", "ti-list-details"], [1, "text-white"], [1, "text-light", "mb-0"], [1, "favorite-course"], [1, "container"], ["data-aos", "fade-up", 1, "section-header", "text-center", "aos"], [1, "section-badge"], [1, "nav-bottom", "px-1", "category-carousel"], [3, "options"], ["carouselSlide", ""], ["src", "assets/img/bg/category-bg-1.png", "alt", "img", 1, "bg-01"], [1, "benefits-section"], [1, "section-badge", "text-white"], ["data-aos", "fade-up", 1, "row", "justify-content-center", "row-gap-4", "aos"], [1, "col-md-6", "col-lg-4"], [1, "benefits-item"], [1, "benefits-img"], ["src", "assets/img/icons/benefit-icon-01.svg", "alt", "img", 1, "img-fluid"], [1, "title"], ["src", "assets/img/icons/benefit-icon-02.svg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/icons/benefit-icon-03.svg", "alt", "img", 1, "img-fluid"], [1, "feature-section", "position-relative"], ["src", "assets/img/bg/feature-bg-01.png", "alt", "img", 1, "bg-star-01", "img-fluid"], ["src", "assets/img/bg/feature-bg-02.png", "alt", "img", 1, "bg-star-02", "img-fluid"], [1, "course-slider-slick"], [3, "config"], ["ngxSlickItem", "", 1, "item"], [1, "course-item-two", "course-item"], [1, "course-img"], [3, "routerLink"], ["src", "assets/img/course/course-22.jpg", "alt", "img", 1, "img-fluid"], [1, "position-absolute", "start-0", "top-0", "d-flex", "align-items-start", "w-100", "z-index-2", "p-2"], ["href", "javascript:void(0);", 1, "fav-icon"], [1, "isax", "isax-heart"], ["href", "javascript:void(0);", 1, "brand-icon", "ms-auto"], ["src", "assets/img/icons/course-01.svg", "alt", "img", 1, "img-fluid"], [1, "course-content"], [1, "d-flex", "justify-content-between", "mb-2"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-sm", 3, "routerLink"], ["src", "assets/img/user/user-29.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-sm", "rounded-circle"], [1, "ms-2"], [1, "link-default", "fs-14", 3, "routerLink"], [1, "badge", "badge-light", "rounded-pill", "bg-light", "d-inline-flex", "align-items-center", "fs-13", "fw-medium", "mb-0"], [1, "title", "mb-2"], [1, "d-flex", "align-items-center", "mb-3"], [1, "ti", "ti-star-filled", "text-warning", "me-2"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "text-secondary", "fs-16", "fw-semi-bold", "mb-0"], [1, "btn", "btn-dark", "btn-sm", "d-inline-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-arrow-right-3", "ms-1"], ["src", "assets/img/course/course-23.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/user/user-50.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-sm", "rounded-circle"], ["src", "assets/img/course/course-24.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/featured-courses/react.svg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/user/user-23.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-sm", "rounded-circle"], ["src", "assets/img/course/course-25.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/featured-courses/Clip-path-group.svg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/user/user-20.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-sm", "rounded-circle"], [1, "counter-trending-cover"], [1, "counter-section"], [1, "text-light"], [1, "row", "row-gap-4"], [1, "col-md-6", "col-lg-3", "d-flex"], ["data-aos", "fade-up", 1, "counter-item", "text-center", "flex-fill"], ["data-aos", "fade-up", 1, "counter-item", "aos", "text-center", "flex-fill"], ["data-aos", "fade-up", 1, "counter-item", "no-border", "aos", "text-center", "flex-fill"], ["src", "assets/img/bg/count-icon.png", "alt", "img", 1, "img-fluid", "counter-bg-01", "d-none", "d-lg-flex"], ["src", "assets/img/icons/banner-icon-03.svg", "alt", "img", 1, "img-fluid", "counter-bg-02", "d-none", "d-lg-flex"], [1, "trending-instruction"], [1, "instructor-carousel", "owl-theme", "nav-bottom"], ["src", "assets/img/bg/instructor-bg-1.png", "alt", "img", 1, "instructor-bg"], [1, "subsribe-section"], ["src", "assets/img/icons/banner-icon-03.svg", "alt", "img", 1, "img-fluid", "bg-05", "d-none", "d-lg-flex"], [1, "row"], [1, "contact-section"], ["data-aos", "fade-up", 1, "mb-4", "aos"], [1, "text-white", "mb-1"], [1, "text-light", "fs-16"], ["action", "#", 1, "subcribe-form"], [1, "isax", "isax-message-text"], ["type", "email", "placeholder", "Email Address", 1, "form-control"], ["type", "submit", 1, "btn", "btn-secondary", "btn-xl"], [1, "col-lg-6", "position-relative"], ["src", "assets/img/bg/subscribe-bg-01.png", "alt", "img", "data-aos", "fade-down", 1, "img-fluid", "bg-01", "d-none", "d-lg-flex", "aos"], ["src", "assets/img/feature/feature-22.png", "alt", "img", "data-aos", "fade-down", 1, "img-fluid", "bg-02", "d-none", "d-lg-flex", "aos"], ["src", "assets/img/icons/subscribe-icon-02.svg", "alt", "img", 1, "img-fluid", "bg-03", "d-none", "d-lg-flex"], ["src", "assets/img/icons/subscribe-icon-01.svg", "alt", "img", 1, "img-fluid", "bg-04", "d-none", "d-lg-flex"], [1, "skill-section"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-lg-6", "col-xl-7"], [1, "skill-image"], [1, "row", "position-relative"], ["src", "assets/img/bg/book-bg.png", "alt", "img", 1, "img-fluid", "img-04", "d-none", "d-xl-flex"], ["src", "assets/img/icons/icon-31.png", "alt", "img", 1, "img-fluid", "img-05", "d-none", "d-xl-flex"], [1, "col-md-6", "d-flex"], [1, "flex-fill"], ["src", "assets/img/feature/feature-26.jpg", "alt", "img", "data-aos", "fade-right", 1, "img-fluid", "flex-fill", "img-01", "aos"], [1, "col-md-6"], [1, "mb-3"], ["src", "assets/img/feature/feature-27.jpg", "alt", "img", "data-aos", "fade-down", 1, "img-fluid", "img-02", "aos"], ["src", "assets/img/feature/feature-28.jpg", "alt", "img", "data-aos", "fade-up", 1, "img-fluid", "img-03", "aos"], ["data-aos", "fade-up", 1, "col-lg-6", "col-xl-5", "aos"], [1, "skill-content"], [1, "skill-list", "mb-4"], [1, "isax", "isax-tick-circle5", "text-success", "fs-24", "me-2"], [1, "btn", "btn-dark", "btn-xl", "rounded-pill", "d-inline-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-arrow-right-3", "ms-2"], [1, "cliets-section"], [1, "owl-theme", "brand-carousel"], [1, "about-us"], [1, "about-us-content"], ["data-aos", "fade-up", 1, "col-lg-7", "aos"], ["data-aos", "fade-up", 1, "about-us-head", "aos"], ["id", "review-carousel", 1, "owl-carousel", "owl-theme", "nav-bottom"], [1, "item", "flex-fill"], [1, "review-item"], [1, "rating"], [1, "ti", "ti-star-filled", "selected"], [1, "d-flex", "align-items-center", "review-user"], [1, "me-2"], ["src", "assets/img/user/user-06.jpg", "alt", "img", 1, "img-fluid"], [1, "fw-medium"], ["src", "assets/img/user/user-12.jpg", "alt", "img", 1, "img-fluid"], [1, "col-lg-5"], [1, "img-section"], ["src", "assets/img/feature/feature-23.jpg", "alt", "img", "data-aos", "zoom-in", 1, "img-fluid", "about-img", "aos"], ["data-aos", "fade-down", 1, "enrolled-list-cover", "d-none", "d-xl-flex", "aos"], ["src", "assets/img/user/user-35.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/user/user-09.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/user/user-06.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/user/user-36.jpg", "alt", "img"], [1, "mb-0", "text-light", "fw-bold", "text-center"], ["src", "assets/img/bg/arrow.png", "alt", "img", 1, "img-fluid", "arrow", "d-none", "d-xl-flex"], [1, "apply-role-section"], ["data-aos", "fade-right", 1, "role-item", "aos"], [1, "col-xl-6"], [1, "mb-2"], [1, "btn", "btn-primary", "rounded-pill", "d-inline-flex", "align-items-center", 3, "routerLink"], ["src", "assets/img/instructor/instructor.png", "alt", "img", 1, "img-fluid", "role-img", "d-none", "d-xl-flex"], ["data-aos", "fade-up", 1, "role-item", "student-bg", "aos"], [1, "btn", "btn-secondary", "rounded-pill", "d-inline-flex", "align-items-center", 3, "routerLink"], ["src", "assets/img/students/student.png", "alt", "img", 1, "img-fluid", "role-img", "d-none", "d-xl-flex"], ["src", "assets/img/bg/about-bg-01.png", "alt", "img", 1, "img-fluid", "about-bg-01", "d-none", "d-xl-flex"], ["src", "assets/img/bg/about-bg-02.png", "alt", "img", 1, "img-fluid", "about-bg-02", "d-none", "d-xl-flex"], [1, "faq-section"], [1, "row", "align-items-center"], [1, "col-lg-5", "pe-md-5"], [1, "position-relative"], ["src", "assets/img/about/about-1.jpg", "alt", "img", 1, "img-fluid", "rounded-4"], [1, "bg-warning", "text-center", "p-3", "rounded-5", "position-absolute", "top-0", "end-0", "z-index-1", "d-none", "d-sm-block", "my-3", "mx-3"], [1, "isax", "isax-message-question5", "heading-color", "fs-46"], [1, "col-lg-7"], [1, "section-header"], [1, "fw-medium", "text-secondary", "mb-2", "d-inline-block", "section-badge"], ["id", "accordioncustomicon1Example", 1, "accordion", "accordion-customicon1", "accordions-items-seperate"], ["data-aos", "fade-up", 1, "accordion-item"], ["id", "headingcustomicon1One", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1One", "aria-expanded", "true", "aria-controls", "collapsecustomicon1One", 1, "accordion-button"], [1, "isax", "isax-add", "fs-20", "fw-semibold", "ms-1"], ["id", "collapsecustomicon1One", "aria-labelledby", "headingcustomicon1One", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body", "pt-0"], ["data-aos", "fade-up", "data-aos-delay", "250", 1, "accordion-item"], ["id", "headingcustomicon1Two", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1Two", "aria-expanded", "false", "aria-controls", "collapsecustomicon1One", 1, "accordion-button", "collapsed"], ["id", "collapsecustomicon1Two", "aria-labelledby", "headingcustomicon1Two", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse"], ["id", "headingcustomicon1Three", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1Three", "aria-expanded", "false", "aria-controls", "collapsecustomicon1One", 1, "accordion-button", "collapsed"], ["id", "collapsecustomicon1Three", "aria-labelledby", "headingcustomicon1Three", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse"], ["id", "headingcustomicon1Four", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1Four", "aria-expanded", "false", "aria-controls", "collapsecustomicon1One", 1, "accordion-button", "collapsed"], ["id", "collapsecustomicon1Four", "aria-labelledby", "headingcustomicon1Four", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse"], ["id", "headingcustomicon1Five", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1Five", "aria-expanded", "false", "aria-controls", "collapsecustomicon1One", 1, "accordion-button", "collapsed"], ["id", "collapsecustomicon1Five", "aria-labelledby", "headingcustomicon1Five", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse"], [1, "blog-section", "position-relative"], [1, "row", "row-gap-4", "justify-content-center"], [1, "col-lg-4", "col-md-6"], ["data-aos", "zoom-in", 1, "blog-card", "aos"], [1, "blog-img"], ["src", "assets/img/blog/blog-22.jpg", "alt", "img", 1, "img-fluid"], [1, "blog-content"], [1, "blog-user", "d-flex", "align-items-center", "justify-content-between"], ["href", "javascript:void(0);", 1, "avatar", "me-2"], ["src", "assets/img/user/user-42.jpg", "alt", "img", 1, "img-fluid"], [1, "mb-0", "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "fw-medium", "ms-1"], [1, "isax", "isax-calendar-1", "text-gray-7"], [1, "blog-card"], ["src", "assets/img/blog/blog-23.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/user/user-36.jpg", "alt", "img", 1, "img-fluid"], [1, "isax", "isax-calendar-1", "text-gray-72"], ["src", "assets/img/blog/blog-24.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/user/user-53.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/bg/feature-bg-02.png", "alt", "img", 1, "img-fluid", "blog-bg-01"], ["data-aos", "flip-right", 1, "item", "aos"], [1, "categories-item"], [1, "categories-img"], [1, "isax", "isax-archive5", "fs-36", "text-primary"], [1, "fw-semi-bold", "mb-1"], [1, "isax", "isax-airpod5", "fs-36", "text-primary"], [1, "isax", "isax-bag-tick-25", "fs-36", "text-primary"], [1, "card-body", "text-center"], [1, "isax", "isax-additem5", "fs-36", "text-primary"], [1, "isax", "isax-dcube5", "fs-36", "text-primary"], [1, "isax", "isax-bezier5", "fs-36", "text-primary"], [1, "instructor-item"], ["href", "javascript:void(0);", 1, "favourite", "ms-auto"], [1, "instructor-img"], ["src", "assets/img/instructor/instructor-05.jpg", "alt", "img"], [1, "verify"], ["src", "assets/img/icons/verify-icon.svg", "alt", "img", 1, "img-fluid"], [1, "instructor-content"], [1, "designation"], [1, "fas", "fa-star", "me-1"], [1, "instructor-social"], ["href", "javascript:void(0);"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-instagram"], [1, "fab", "fa-x-twitter"], [1, "fab", "fa-youtube"], [1, "fab", "fa-linkedin"], ["src", "assets/img/instructor/instructor-06.jpg", "alt", "img"], ["src", "assets/img/instructor/instructor-07.jpg", "alt", "img"], ["src", "assets/img/instructor/instructor-08.jpg", "alt", "img"], [1, "item"], ["src", "assets/img/client/08.svg", "alt", "img"], ["src", "assets/img/client/09.svg", "alt", "img"], ["src", "assets/img/client/10.svg", "alt", "img"], ["src", "assets/img/client/11.svg", "alt", "img"], ["src", "assets/img/client/12.svg", "alt", "img"], ["src", "assets/img/client/13.svg", "alt", "img"], ["src", "assets/img/client/14.svg", "alt", "img"], ["src", "assets/img/client/15.svg", "alt", "img"]], template: function Home2Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
      \u0275\u0275element(2, "img", 3)(3, "img", 4)(4, "img", 5)(5, "img", 6)(6, "img", 7)(7, "img", 8)(8, "img", 9)(9, "img", 10)(10, "img", 11)(11, "img", 12)(12, "img", 13);
      \u0275\u0275elementStart(13, "div", 14)(14, "div", 15)(15, "div", 16)(16, "div", 17)(17, "div", 18)(18, "span", 19);
      \u0275\u0275text(19, "The Leader in Online Learning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "h1", 20);
      \u0275\u0275text(21, "Engaging & Accessible ");
      \u0275\u0275elementStart(22, "span", 21);
      \u0275\u0275text(23, "Online ");
      \u0275\u0275element(24, "img", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275text(25, " Courses For All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 23)(27, "div", 24)(28, "div", 25)(29, "a", 26);
      \u0275\u0275element(30, "i", 27);
      \u0275\u0275text(31, " Category ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "ul", 28)(33, "li")(34, "a", 29);
      \u0275\u0275text(35, " Design ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "li")(37, "a", 29);
      \u0275\u0275text(38, " Marketing ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "li")(40, "a", 29);
      \u0275\u0275text(41, " Framer Developer ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "li")(43, "a", 29);
      \u0275\u0275text(44, " Figma Developer ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(45, "span");
      \u0275\u0275element(46, "input", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "button", 31);
      \u0275\u0275text(48, "Search");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "div", 24)(50, "div", 32)(51, "ul", 33)(52, "li", 34);
      \u0275\u0275element(53, "i", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "li", 34);
      \u0275\u0275element(55, "i", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "li", 34);
      \u0275\u0275element(57, "i", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "li", 34);
      \u0275\u0275element(59, "i", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "li", 34);
      \u0275\u0275element(61, "i", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "li", 37);
      \u0275\u0275text(63, "4.5 / 5.0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "small");
      \u0275\u0275text(65, "From 500+ reviews");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(66, "div", 15)(67, "div", 38);
      \u0275\u0275element(68, "img", 39)(69, "img", 40)(70, "img", 41);
      \u0275\u0275elementStart(71, "div", 42)(72, "div", 43)(73, "div", 44)(74, "span", 45);
      \u0275\u0275element(75, "img", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "span", 45);
      \u0275\u0275element(77, "img", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "span", 45);
      \u0275\u0275element(79, "img", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "span", 45);
      \u0275\u0275element(81, "img", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "span", 45);
      \u0275\u0275element(83, "img", 50);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "p", 51)(85, "span", 52);
      \u0275\u0275text(86, "35K+");
      \u0275\u0275elementEnd();
      \u0275\u0275text(87, " Students Enrolled");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(88, "div", 53)(89, "span", 54);
      \u0275\u0275element(90, "i", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "div")(92, "h4", 56);
      \u0275\u0275text(93, "50+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "p", 57);
      \u0275\u0275text(95, "Courses");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(96, "div", 58)(97, "div", 59)(98, "div", 60)(99, "span", 61);
      \u0275\u0275text(100, " Favourite Course ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "h2");
      \u0275\u0275text(102, "Top Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "p");
      \u0275\u0275text(104, "The right course, guided by an expert mentor, can provide invaluable insights, practical skills");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "div", 62)(106, "owl-carousel-o", 63);
      \u0275\u0275template(107, Home2Component_ng_template_107_Template, 9, 1, "ng-template", 64)(108, Home2Component_ng_template_108_Template, 9, 1, "ng-template", 64)(109, Home2Component_ng_template_109_Template, 9, 1, "ng-template", 64)(110, Home2Component_ng_template_110_Template, 10, 1, "ng-template", 64)(111, Home2Component_ng_template_111_Template, 10, 1, "ng-template", 64)(112, Home2Component_ng_template_112_Template, 10, 1, "ng-template", 64)(113, Home2Component_ng_template_113_Template, 10, 1, "ng-template", 64);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(114, "img", 65);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "div", 66)(116, "div", 59)(117, "div", 60)(118, "div", 67);
      \u0275\u0275text(119, " Our Benefits ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "h2", 56);
      \u0275\u0275text(121, "Master the skills to drive your career");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "p", 56);
      \u0275\u0275text(123, "The right course, guided by an expert mentor, can provide invaluable insights, practical skills");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(124, "div", 68)(125, "div", 69)(126, "div", 70)(127, "div", 71);
      \u0275\u0275element(128, "img", 72);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "h5", 73);
      \u0275\u0275text(130, "Stay motivated with instructors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "p", 57);
      \u0275\u0275text(132, "Stay motivated with engaging instructors on our platform, guiding you through every course.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(133, "div", 69)(134, "div", 70)(135, "div", 71);
      \u0275\u0275element(136, "img", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "h5", 73);
      \u0275\u0275text(138, "Get certified on courses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "p", 57);
      \u0275\u0275text(140, "Get certified, master modern tech skills, and level up your career whether you\u2019re starting.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(141, "div", 69)(142, "div", 70)(143, "div", 71);
      \u0275\u0275element(144, "img", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "h5", 73);
      \u0275\u0275text(146, "Build skills on your way");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "p", 57);
      \u0275\u0275text(148, "Build skills your way with hands-on labs and immersive courses, tailored to fit.");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(149, "div", 76)(150, "div", 59);
      \u0275\u0275element(151, "img", 77)(152, "img", 78);
      \u0275\u0275elementStart(153, "div", 60)(154, "span", 61);
      \u0275\u0275text(155, " What\u2019s New ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "h2");
      \u0275\u0275text(157, "Featured Courses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "p");
      \u0275\u0275text(159, "Discover our featured courses, specially curated to help you gain in-demand skills");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(160, "div", 79)(161, "ngx-slick-carousel", 80, 0)(163, "div", 81)(164, "div", 82)(165, "div", 83)(166, "a", 84);
      \u0275\u0275element(167, "img", 85);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "div", 86)(169, "a", 87);
      \u0275\u0275element(170, "i", 88);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "a", 89);
      \u0275\u0275element(172, "img", 90);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(173, "div", 91)(174, "div", 92)(175, "div", 93)(176, "a", 94);
      \u0275\u0275element(177, "img", 95);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "div", 96)(179, "a", 97);
      \u0275\u0275text(180, "Brenda Slaton");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(181, "span", 98);
      \u0275\u0275text(182, " Design ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(183, "h6", 99)(184, "a", 84);
      \u0275\u0275text(185, "Information About UI/UX Design Degree Course");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(186, "p", 100);
      \u0275\u0275element(187, "i", 101);
      \u0275\u0275text(188, "4.9 (200 Reviews)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(189, "div", 102)(190, "h6", 103);
      \u0275\u0275text(191, "$120");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "a", 104);
      \u0275\u0275text(193, "Add to Cart");
      \u0275\u0275element(194, "i", 105);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(195, "div", 81)(196, "div", 82)(197, "div", 83)(198, "a", 84);
      \u0275\u0275element(199, "img", 106);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "div", 86)(201, "a", 87);
      \u0275\u0275element(202, "i", 88);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(203, "a", 89);
      \u0275\u0275element(204, "img", 90);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(205, "div", 91)(206, "div", 92)(207, "div", 93)(208, "a", 94);
      \u0275\u0275element(209, "img", 107);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "div", 96)(211, "a", 97);
      \u0275\u0275text(212, "David Benitz");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(213, "span", 98);
      \u0275\u0275text(214, " Productivity ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(215, "h6", 99)(216, "a", 84);
      \u0275\u0275text(217, "The Complete Business and Management Course");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(218, "p", 100);
      \u0275\u0275element(219, "i", 101);
      \u0275\u0275text(220, "5.0 (210 Reviews)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "div", 102)(222, "h6", 103);
      \u0275\u0275text(223, "$168");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(224, "a", 104);
      \u0275\u0275text(225, "Add to Cart");
      \u0275\u0275element(226, "i", 105);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(227, "div", 81)(228, "div", 82)(229, "div", 83)(230, "a", 84);
      \u0275\u0275element(231, "img", 108);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "div", 86)(233, "a", 87);
      \u0275\u0275element(234, "i", 88);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(235, "a", 89);
      \u0275\u0275element(236, "img", 109);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(237, "div", 91)(238, "div", 92)(239, "div", 93)(240, "a", 94);
      \u0275\u0275element(241, "img", 110);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(242, "div", 96)(243, "a", 97);
      \u0275\u0275text(244, "Calvin Johnsen");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(245, "span", 98);
      \u0275\u0275text(246, " Development ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(247, "h6", 99)(248, "a", 84);
      \u0275\u0275text(249, "Learn & Create ReactJS Tech Fundamentals Apps");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(250, "p", 100);
      \u0275\u0275element(251, "i", 101);
      \u0275\u0275text(252, "5.0 (154 Reviews)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(253, "div", 102)(254, "h6", 103);
      \u0275\u0275text(255, "$147");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(256, "a", 104);
      \u0275\u0275text(257, "Add to Cart");
      \u0275\u0275element(258, "i", 105);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(259, "div", 81)(260, "div", 82)(261, "div", 83)(262, "a", 84);
      \u0275\u0275element(263, "img", 111);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(264, "div", 86)(265, "a", 87);
      \u0275\u0275element(266, "i", 88);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(267, "a", 89);
      \u0275\u0275element(268, "img", 112);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(269, "div", 91)(270, "div", 92)(271, "div", 93)(272, "a", 94);
      \u0275\u0275element(273, "img", 113);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(274, "div", 96)(275, "a", 97);
      \u0275\u0275text(276, "Edith Dorsey");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(277, "span", 98);
      \u0275\u0275text(278, " Lifestyles ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(279, "h6", 99)(280, "a", 84);
      \u0275\u0275text(281, "Build Creative Arts & media Course Completed");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(282, "p", 100);
      \u0275\u0275element(283, "i", 101);
      \u0275\u0275text(284, "4.9 (178 Reviews)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(285, "div", 102)(286, "h6", 103);
      \u0275\u0275text(287, "$190");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(288, "a", 104);
      \u0275\u0275text(289, "Add to Cart");
      \u0275\u0275element(290, "i", 105);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(291, "div", 81)(292, "div", 82)(293, "div", 83)(294, "a", 84);
      \u0275\u0275element(295, "img", 85);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(296, "div", 86)(297, "a", 87);
      \u0275\u0275element(298, "i", 88);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(299, "a", 89);
      \u0275\u0275element(300, "img", 90);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(301, "div", 91)(302, "div", 92)(303, "div", 93)(304, "a", 94);
      \u0275\u0275element(305, "img", 107);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(306, "div", 96)(307, "a", 97);
      \u0275\u0275text(308, "David Benitz");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(309, "span", 98);
      \u0275\u0275text(310, " Productivity ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(311, "h6", 99)(312, "a", 84);
      \u0275\u0275text(313, "The Complete Business and Management Course");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(314, "p", 100);
      \u0275\u0275element(315, "i", 101);
      \u0275\u0275text(316, "5.0 (210 Reviews)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(317, "div", 102)(318, "h6", 103);
      \u0275\u0275text(319, "$168");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(320, "a", 104);
      \u0275\u0275text(321, "Add to Cart");
      \u0275\u0275element(322, "i", 105);
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(323, "section", 114)(324, "div", 59)(325, "div", 115)(326, "div", 60)(327, "h2", 56);
      \u0275\u0275text(328, "Acheive you Goals with DreamsLMS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(329, "p", 116);
      \u0275\u0275text(330, "96% of eLearning for Business customers see improved results within six months. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(331, "div", 117)(332, "div", 118)(333, "div", 119)(334, "h2", 56);
      \u0275\u0275text(335, "253,085");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(336, "p", 56);
      \u0275\u0275text(337, "Students Enrolled all over World");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(338, "div", 118)(339, "div", 119)(340, "h2", 56);
      \u0275\u0275text(341, "1,205");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(342, "p", 56);
      \u0275\u0275text(343, "Total Courses on our Platform");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(344, "div", 118)(345, "div", 120)(346, "h2", 56);
      \u0275\u0275text(347, "56");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(348, "p", 56);
      \u0275\u0275text(349, "Countries of Students");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(350, "div", 118)(351, "div", 121)(352, "h2", 56);
      \u0275\u0275text(353, "968");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(354, "p", 56);
      \u0275\u0275text(355, "Expert Tutors From Various Fields");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(356, "img", 122)(357, "img", 123);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(358, "div", 2)(359, "div", 124)(360, "div", 60)(361, "span", 61);
      \u0275\u0275text(362, " Trending Instructors ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(363, "h2");
      \u0275\u0275text(364, "Top Class & Professional Instructors ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(365, "p");
      \u0275\u0275text(366, " Empowering Change: Stories from Those Who Took the Leap");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(367, "div", 125)(368, "owl-carousel-o", 63);
      \u0275\u0275template(369, Home2Component_ng_template_369_Template, 30, 2, "ng-template", 64)(370, Home2Component_ng_template_370_Template, 30, 2, "ng-template", 64)(371, Home2Component_ng_template_371_Template, 30, 2, "ng-template", 64)(372, Home2Component_ng_template_372_Template, 30, 2, "ng-template", 64)(373, Home2Component_ng_template_373_Template, 30, 2, "ng-template", 64);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(374, "img", 126);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(375, "div", 127)(376, "div", 2);
      \u0275\u0275element(377, "img", 128);
      \u0275\u0275elementStart(378, "div", 129)(379, "div", 15)(380, "div", 130)(381, "div", 131)(382, "h2", 132);
      \u0275\u0275text(383, "Transform Access To Education");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(384, "p", 133);
      \u0275\u0275text(385, "Create Account to Receive Our Newsletter, Course Recommend & Promotions.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(386, "form", 134)(387, "span");
      \u0275\u0275element(388, "i", 135);
      \u0275\u0275elementEnd();
      \u0275\u0275element(389, "input", 136);
      \u0275\u0275elementStart(390, "button", 137);
      \u0275\u0275text(391, "Subcribe");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(392, "div", 138);
      \u0275\u0275element(393, "img", 139)(394, "img", 140)(395, "img", 141)(396, "img", 142);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(397, "div", 143)(398, "div", 59)(399, "div", 144)(400, "div", 145)(401, "div", 146)(402, "div", 147);
      \u0275\u0275element(403, "img", 148)(404, "img", 149);
      \u0275\u0275elementStart(405, "div", 150)(406, "div", 151);
      \u0275\u0275element(407, "img", 152);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(408, "div", 153)(409, "div", 154);
      \u0275\u0275element(410, "img", 155);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(411, "div");
      \u0275\u0275element(412, "img", 156);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(413, "div", 157)(414, "div", 158)(415, "h2");
      \u0275\u0275text(416, "Master the Skills To Drive Your Career");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(417, "p");
      \u0275\u0275text(418, "Get certified, master modern tech skills, and level up your career whether you\u2019re starting out or a seasoned pro. 95% of eLearning learners report our hands-on content directly helped their careers.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(419, "div", 159)(420, "p", 93);
      \u0275\u0275element(421, "i", 160);
      \u0275\u0275text(422, "Access Your Class anywhere ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(423, "p", 93);
      \u0275\u0275element(424, "i", 160);
      \u0275\u0275text(425, "Flexible Course Plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(426, "p", 93);
      \u0275\u0275element(427, "i", 160);
      \u0275\u0275text(428, "Quality Assurance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(429, "p", 93);
      \u0275\u0275element(430, "i", 160);
      \u0275\u0275text(431, "Cost-Effectiveness");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(432, "p", 93);
      \u0275\u0275element(433, "i", 160);
      \u0275\u0275text(434, "The Most World Class Instructors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(435, "p", 93);
      \u0275\u0275element(436, "i", 160);
      \u0275\u0275text(437, "Quality Assurance");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(438, "a", 161);
      \u0275\u0275text(439, "Get Started");
      \u0275\u0275element(440, "i", 162);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(441, "div", 163)(442, "div")(443, "div", 164)(444, "owl-carousel-o", 63);
      \u0275\u0275template(445, Home2Component_ng_template_445_Template, 2, 0, "ng-template", 64)(446, Home2Component_ng_template_446_Template, 2, 0, "ng-template", 64)(447, Home2Component_ng_template_447_Template, 2, 0, "ng-template", 64)(448, Home2Component_ng_template_448_Template, 2, 0, "ng-template", 64)(449, Home2Component_ng_template_449_Template, 2, 0, "ng-template", 64)(450, Home2Component_ng_template_450_Template, 2, 0, "ng-template", 64)(451, Home2Component_ng_template_451_Template, 2, 0, "ng-template", 64)(452, Home2Component_ng_template_452_Template, 2, 0, "ng-template", 64);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(453, "div", 165)(454, "div", 59)(455, "div", 166)(456, "div", 144)(457, "div", 167)(458, "div", 168)(459, "h2");
      \u0275\u0275text(460, "What People Say About Us \u2764\uFE0F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(461, "p");
      \u0275\u0275text(462, "Read what our satisfied clients have to say about their experiences with our platform.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(463, "div", 169)(464, "div", 170)(465, "div", 171)(466, "div", 172)(467, "span");
      \u0275\u0275element(468, "i", 173);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(469, "span");
      \u0275\u0275element(470, "i", 173);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(471, "span");
      \u0275\u0275element(472, "i", 173);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(473, "span");
      \u0275\u0275element(474, "i", 173);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(475, "span");
      \u0275\u0275element(476, "i", 173);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(477, "h5", 73);
      \u0275\u0275text(478, '"Transformed My Career"');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(479, "p");
      \u0275\u0275text(480, "As an employer, the platform exceeded my expectations. We swiftly found top-tier talent for our company.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(481, "div", 174)(482, "div", 175)(483, "a", 84);
      \u0275\u0275element(484, "img", 176);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(485, "div")(486, "h6", 177)(487, "a", 84);
      \u0275\u0275text(488, "Brenda Slaton");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(489, "p", 51);
      \u0275\u0275text(490, "Designer");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(491, "div", 170)(492, "div", 171)(493, "div", 172)(494, "span");
      \u0275\u0275element(495, "i", 173);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(496, "span");
      \u0275\u0275element(497, "i", 173);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(498, "span");
      \u0275\u0275element(499, "i", 173);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(500, "span");
      \u0275\u0275element(501, "i", 173);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(502, "span");
      \u0275\u0275element(503, "i", 173);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(504, "h5", 73);
      \u0275\u0275text(505, '"Enhanced My Study"');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(506, "p");
      \u0275\u0275text(507, "The LMS made managing my coursework simple and engaging, with everything I need easily accessible and organized.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(508, "div", 174)(509, "div", 175)(510, "a", 84);
      \u0275\u0275element(511, "img", 178);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(512, "div")(513, "h6", 177)(514, "a", 84);
      \u0275\u0275text(515, "Adrian Dennis");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(516, "p", 51);
      \u0275\u0275text(517, "Designer");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(518, "div", 170)(519, "div", 171)(520, "div", 172)(521, "span");
      \u0275\u0275element(522, "i", 173);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(523, "span");
      \u0275\u0275element(524, "i", 173);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(525, "span");
      \u0275\u0275element(526, "i", 173);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(527, "span");
      \u0275\u0275element(528, "i", 173);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(529, "span");
      \u0275\u0275element(530, "i", 173);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(531, "h5", 73);
      \u0275\u0275text(532, '"Transformed My Career"');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(533, "p");
      \u0275\u0275text(534, "As an employer, the platform exceeded my expectations. We swiftly found top-tier talent for our company.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(535, "div", 174)(536, "div", 175)(537, "a", 84);
      \u0275\u0275element(538, "img", 176);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(539, "div")(540, "h6", 177)(541, "a", 84);
      \u0275\u0275text(542, "Brenda Slaton");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(543, "p", 51);
      \u0275\u0275text(544, "Designer");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(545, "div", 179)(546, "div", 180);
      \u0275\u0275element(547, "img", 181);
      \u0275\u0275elementStart(548, "div", 182)(549, "div", 43)(550, "div", 44)(551, "span", 45);
      \u0275\u0275element(552, "img", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(553, "span", 45);
      \u0275\u0275element(554, "img", 183);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(555, "span", 45);
      \u0275\u0275element(556, "img", 184);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(557, "span", 45);
      \u0275\u0275element(558, "img", 185);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(559, "span", 45);
      \u0275\u0275element(560, "img", 186);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(561, "p", 187)(562, "span", 52);
      \u0275\u0275text(563, "200+ ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(564, "Reviews");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(565, "img", 188);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(566, "div", 189)(567, "div", 117)(568, "div", 153)(569, "div", 190)(570, "div", 129)(571, "div", 191)(572, "h5", 192);
      \u0275\u0275text(573, "Become an Instructor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(574, "p", 20);
      \u0275\u0275text(575, "Top global instructors teach millions of students on Mentoring.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(576, "a", 193);
      \u0275\u0275text(577, "Apply Now");
      \u0275\u0275element(578, "i", 162);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(579, "div");
      \u0275\u0275element(580, "img", 194);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(581, "div", 153)(582, "div", 195)(583, "div", 129)(584, "div", 191)(585, "h5", 192);
      \u0275\u0275text(586, "Become a Student");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(587, "p", 20);
      \u0275\u0275text(588, "Start your educational journey with us and access a wealth of resources ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(589, "a", 196);
      \u0275\u0275text(590, "Enroll Now");
      \u0275\u0275element(591, "i", 162);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(592, "div");
      \u0275\u0275element(593, "img", 197);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275element(594, "img", 198)(595, "img", 199);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(596, "section", 200)(597, "div", 59)(598, "div", 201)(599, "div", 202)(600, "div", 203);
      \u0275\u0275element(601, "img", 204);
      \u0275\u0275elementStart(602, "div", 205);
      \u0275\u0275element(603, "i", 206);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(604, "div", 207)(605, "div", 208)(606, "span", 209);
      \u0275\u0275text(607, "FAQs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(608, "h2");
      \u0275\u0275text(609, "Frequently Asked Questions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(610, "p");
      \u0275\u0275text(611, "Explore detailed answers to the most common questions about our platform.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(612, "div", 210)(613, "div", 211)(614, "h2", 212)(615, "a", 213);
      \u0275\u0275text(616, " What\u2019s DreamLMS want to give you? ");
      \u0275\u0275element(617, "i", 214);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(618, "div", 215)(619, "div", 216)(620, "p");
      \u0275\u0275text(621, "DreamLMS aims to provide you with a comprehensive and intuitive learning platform that enhances your educational experience.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(622, "div", 217)(623, "h2", 218)(624, "a", 219);
      \u0275\u0275text(625, " Why choose us for your education? ");
      \u0275\u0275element(626, "i", 214);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(627, "div", 220)(628, "div", 216)(629, "p");
      \u0275\u0275text(630, "DreamLMS aims to provide you with a comprehensive and intuitive learning platform that enhances your educational experience.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(631, "div", 217)(632, "h2", 221)(633, "a", 222);
      \u0275\u0275text(634, " How We Provide Service For you? ");
      \u0275\u0275element(635, "i", 214);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(636, "div", 223)(637, "div", 216)(638, "p");
      \u0275\u0275text(639, "DreamLMS aims to provide you with a comprehensive and intuitive learning platform that enhances your educational experience.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(640, "div", 217)(641, "h2", 224)(642, "a", 225);
      \u0275\u0275text(643, " Do you have a monthly plan? ");
      \u0275\u0275element(644, "i", 214);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(645, "div", 226)(646, "div", 216)(647, "p");
      \u0275\u0275text(648, "DreamLMS aims to provide you with a comprehensive and intuitive learning platform that enhances your educational experience.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(649, "div", 217)(650, "h2", 227)(651, "a", 228);
      \u0275\u0275text(652, " Are you Affordable For Your Course ");
      \u0275\u0275element(653, "i", 214);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(654, "div", 229)(655, "div", 216)(656, "p");
      \u0275\u0275text(657, "DreamLMS aims to provide you with a comprehensive and intuitive learning platform that enhances your educational experience.");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(658, "div", 230)(659, "div", 59)(660, "div", 60)(661, "span", 61);
      \u0275\u0275text(662, " Blog ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(663, "h2");
      \u0275\u0275text(664, "Latest Articles & News");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(665, "p");
      \u0275\u0275text(666, "Explore curated content to enlighten, entertain and engage global readers.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(667, "div", 231)(668, "div", 232)(669, "div", 233)(670, "div", 234)(671, "a", 84);
      \u0275\u0275element(672, "img", 235);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(673, "div", 236)(674, "h5")(675, "a", 84);
      \u0275\u0275text(676, "Mastering Programming with a Technical Mentor");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(677, "p");
      \u0275\u0275text(678, "Learning to code can be overwhelming, but a mentor can make the journey smoother....");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(679, "div", 237)(680, "div", 93)(681, "a", 238);
      \u0275\u0275element(682, "img", 239);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(683, "p", 240);
      \u0275\u0275text(684, "by ");
      \u0275\u0275elementStart(685, "a", 241);
      \u0275\u0275text(686, "Reni Sarow");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(687, "p", 93);
      \u0275\u0275element(688, "i", 242);
      \u0275\u0275text(689, "09 Aug 2025");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(690, "div", 232)(691, "div", 243)(692, "div", 234)(693, "a", 84);
      \u0275\u0275element(694, "img", 244);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(695, "div", 236)(696, "h5")(697, "a", 84);
      \u0275\u0275text(698, "How to Level Up Your Coding Skills with the Help of a Mentor");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(699, "p");
      \u0275\u0275text(700, "Whether you're a beginner or an advanced coder, this blog will explore how....");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(701, "div", 237)(702, "div", 93)(703, "a", 238);
      \u0275\u0275element(704, "img", 245);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(705, "p", 240);
      \u0275\u0275text(706, "by ");
      \u0275\u0275elementStart(707, "a", 241);
      \u0275\u0275text(708, "Chris Daniel");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(709, "p", 93);
      \u0275\u0275element(710, "i", 246);
      \u0275\u0275text(711, "15 Jul 2025");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(712, "div", 232)(713, "div", 243)(714, "div", 234)(715, "a", 84);
      \u0275\u0275element(716, "img", 247);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(717, "div", 236)(718, "h5")(719, "a", 84);
      \u0275\u0275text(720, "Navigating the Tech World: The Ultimate Guide");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(721, "p");
      \u0275\u0275text(722, " The tech industry is vast and ever-changing, but a mentor can help you stay ahead.....");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(723, "div", 237)(724, "div", 93)(725, "a", 238);
      \u0275\u0275element(726, "img", 248);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(727, "p", 240);
      \u0275\u0275text(728, "by ");
      \u0275\u0275elementStart(729, "a", 241);
      \u0275\u0275text(730, "Andrew");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(731, "p", 93);
      \u0275\u0275element(732, "i", 242);
      \u0275\u0275text(733, "15 Jan 2025");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275element(734, "img", 249);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(735, "app-footer");
    }
    if (rf & 2) {
      \u0275\u0275advance(106);
      \u0275\u0275property("options", ctx.categoryCarousel);
      \u0275\u0275advance(55);
      \u0275\u0275property("config", ctx.courseSlider);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.cart);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.cart);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.cart);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.cart);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.cart);
      \u0275\u0275advance(48);
      \u0275\u0275property("options", ctx.instructorCarousel);
      \u0275\u0275advance(70);
      \u0275\u0275property("routerLink", ctx.routes.courseList);
      \u0275\u0275advance(6);
      \u0275\u0275property("options", ctx.brandCarousel);
      \u0275\u0275advance(39);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(23);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(23);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(35);
      \u0275\u0275property("routerLink", ctx.routes.becomeAnExpert);
      \u0275\u0275advance(13);
      \u0275\u0275property("routerLink", ctx.routes.studentsList);
      \u0275\u0275advance(82);
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
    }
  }, dependencies: [CommonModule, FooterComponent, RouterLink, CarouselModule, CarouselComponent, CarouselSlideDirective, SlickCarouselModule, SlickCarouselComponent, SlickItemDirective, CountUpModule, MatSelectModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Home2Component, [{
    type: Component,
    args: [{ selector: "app-home2", imports: [CommonModule, FooterComponent, RouterLink, CarouselModule, SlickCarouselModule, CountUpModule, MatSelectModule], template: `<!-- Banner section -->
<div class="banner-section-two">
    <div class="container position-relative">
        <img src="assets/img/banner/star-01.png" alt="img" class="img-fluid star-01">
        <img src="assets/img/banner/star-02.png" alt="img" class="img-fluid star-02">
        <img src="assets/img/banner/star-03.png" alt="img" class="img-fluid star-03">
        <img src="assets/img/banner/star-04.png" alt="img" class="img-fluid star-04">
        <img src="assets/img/banner/star-05.png" alt="img" class="img-fluid star-05">
        <img src="assets/img/icons/banner-book.svg" alt="img" class="img-fluid star-06 d-none d-xl-flex">
        <img src="assets/img/icons/banner-icon-03.svg" alt="img" class="img-fluid star-07 d-none d-xl-flex">
        <img src="assets/img/icons/banner-icon-01.svg" alt="img" class="img-fluid star-08 d-none d-xl-flex">
        <img src="assets/img/icons/banner-icon-02.svg" alt="img" class="img-fluid star-09 d-none d-xl-flex">
        <img src="assets/img/icons/banner-icon-04.svg" alt="img" class="img-fluid star-10 d-none d-xl-flex">
        <img src="assets/img/banner/soft-star.png" alt="img" class="img-fluid star-11 d-none d-xl-flex">
        <div class="row align-items-end">
            <div class="col-lg-6">
                <div class="d-flex align-items-center position-relative banner-content">
                    <div class="aos" data-aos="zoom-in">
                        <div class="banner-info">
                            <span class="d-inline-flex fw-semibold text-uppercase mb-3">The Leader in Online
                                Learning</span>
                            <h1 class="mb-4">Engaging & Accessible <span class="position-relative banner-title">Online
                                    <img src="assets/img/banner/banner-text-bg.png" alt="img"
                                        class="img-fluid position-absolute title-bg"></span> Courses For All</h1>
                            <div class="banner-form">
                                <div class="d-sm-flex align-items-center">
                                    <div class="dropdown">
                                        <a class="btn dropdown-toggle d-flex align-items-center"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="isax isax-book me-2"></i>
                                            Category
                                        </a>
                                        <ul class="dropdown-menu p-2">
                                            <li>
                                                <a class="dropdown-item d-flex align-items-center p-2"
                                                    href="javascript:void(0);">
                                                    Design
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item d-flex align-items-center p-2"
                                                    href="javascript:void(0);">
                                                    Marketing
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item d-flex align-items-center p-2"
                                                    href="javascript:void(0);">
                                                    Framer Developer
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item d-flex align-items-center p-2"
                                                    href="javascript:void(0);">
                                                    Figma Developer
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <span>
                                        <input type="text" placeholder="Search Courses, Instructors"
                                            class="form-control border-0">
                                    </span>
                                </div>
                                <button class="rounded-pill btn btn-primary btn-xl">Search</button>
                            </div>
                        </div>
                        <div class="d-sm-flex align-items-center">

                            <!-- Rating star and content -->
                            <div class="ms-sm-3 mt-2 mt-sm-0">
                                <!-- Star -->
                                <ul class="list-inline mb-0">
                                    <li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
                                    <li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
                                    <li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
                                    <li class="list-inline-item me-0"><i class="fas fa-star text-warning"></i></li>
                                    <li class="list-inline-item me-0"><i class="fas fa-star-half-alt text-warning"></i>
                                    </li>
                                    <li class="list-inline-item heading-color fw-bold me-0">4.5 / 5.0</li>
                                </ul>
                                <small>From 500+ reviews</small>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="banner-img-section">
                    <img src="assets/img/banner/banner-bg-01.png" alt="img"
                        class="img-fluid banner-bg-01 d-none d-xl-flex aos" data-aos="fade-up" data-aos-easing="linear"
                        data-aos-duration="500">
                    <img src="assets/img/banner/banner-bg-02.png" alt="img"
                        class="img-fluid banner-bg-02 d-none d-xl-flex aos" data-aos="fade-up" data-aos-easing="linear"
                        data-aos-duration="600">
                    <img src="assets/img/hero/hero-1.png" alt="img" class="img-fluid banner-bg-03 aos"
                        data-aos="fade-up" data-aos-easing="linear" data-aos-duration="900">
                    <div class="enrolled-list-cover aos" data-aos="fade-down">
                        <div class="enrolled-list">
                            <div class="avatar-list-stacked">
                                <span class="avatar avatar-rounded">
                                    <img class="border border-white" src="assets/img/user/user-01.jpg" alt="img">
                                </span>
                                <span class="avatar avatar-rounded">
                                    <img class="border border-white" src="assets/img/user/user-03.jpg" alt="img">
                                </span>
                                <span class="avatar avatar-rounded">
                                    <img class="border border-white" src="assets/img/user/user-07.jpg" alt="img">
                                </span>
                                <span class="avatar avatar-rounded">
                                    <img class="border border-white" src="assets/img/user/user-08.jpg" alt="img">
                                </span>
                                <span class="avatar avatar-rounded">
                                    <img src="assets/img/user/user-06.jpg" alt="img">
                                </span>
                            </div>
                            <p class="mb-0"><span class="text-secondary">35K+</span> Students Enrolled</p>
                        </div>
                    </div>
                    <div class="course-count d-inline-flex align-items-center aos" data-aos="fade-down">
                        <span class="counter-icon"><i class="ti ti-list-details"></i></span>
                        <div>
                            <h4 class="text-white">50+</h4>
                            <p class="text-light mb-0">Courses</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /Banner section -->

<!-- favorite  section -->
<div class="favorite-course">
    <div class="container">
        <div class="section-header text-center aos" data-aos="fade-up">
            <span class="section-badge">
                Favourite Course
            </span>
            <h2>Top Category</h2>
            <p>The right course, guided by an expert mentor, can provide invaluable insights, practical skills</p>
        </div>
        <div class="nav-bottom px-1 category-carousel">
            <owl-carousel-o [options]="categoryCarousel">
                <ng-template carouselSlide>
                    <div class="item aos" data-aos="flip-right">
                        <div class="categories-item">
                            <span class="categories-img">
                                <i class="isax isax-archive5 fs-36 text-primary"></i>
                            </span>
                            <h5 class="fw-semi-bold mb-1"><a [routerLink]="routes.courseCategory">Management</a></h5>
                            <p class="mb-0">156 Courses</p>
                        </div>
                    </div>
                </ng-template>
                <ng-template carouselSlide>
                    <div class="item aos" data-aos="flip-right">
                        <div class="categories-item">
                            <span class="categories-img">
                                <i class="isax isax-airpod5 fs-36 text-primary"></i>
                            </span>
                            <h5 class="fw-semi-bold mb-1"><a [routerLink]="routes.courseCategory">IT & Softwares</a></h5>
                            <p class="mb-0">214 Courses</p>
                        </div>
                    </div>
                </ng-template>
                <ng-template carouselSlide>
                    <div class="item aos" data-aos="flip-right">
                        <div class="categories-item">
                            <span class="categories-img">
                                <i class="isax isax-bag-tick-25 fs-36 text-primary"></i>
                            </span>
                            <h5 class="fw-semi-bold mb-1"><a [routerLink]="routes.courseCategory">Marketing</a></h5>
                            <p class="mb-0">174 Courses</p>
                        </div>
                    </div>
                </ng-template>
                <ng-template carouselSlide>
                    <div class="item aos" data-aos="flip-right">
                        <div class="categories-item">
                            <div class="card-body text-center">
                                <span class="categories-img">
                                    <i class="isax isax-additem5 fs-36 text-primary"></i>
                                </span>
                                <h5 class="fw-semi-bold mb-1"><a [routerLink]="routes.courseCategory">Productivity</a></h5>
                                <p class="mb-0">126 Courses</p>
                            </div>
                        </div>
                    </div>
                </ng-template>
                <ng-template carouselSlide>
                    <div class="item aos" data-aos="flip-right">
                        <div class="categories-item">
                            <div class="card-body text-center">
                                <span class="categories-img">
                                    <i class="isax isax-dcube5 fs-36 text-primary"></i>
                                </span>
                                <h5 class="fw-semi-bold mb-1"><a [routerLink]="routes.courseCategory">Lifestyles</a></h5>
                                <p class="mb-0">214 Courses</p>
                            </div>
                        </div>
                    </div>
                </ng-template>
                <ng-template carouselSlide>
                    <div class="item aos" data-aos="flip-right">
                        <div class="categories-item">
                            <div class="card-body text-center">
                                <span class="categories-img">
                                    <i class="isax isax-bezier5 fs-36 text-primary"></i>
                                </span>
                                <h5 class="fw-semi-bold mb-1"><a [routerLink]="routes.courseCategory">Design</a></h5>
                                <p class="mb-0">161 Courses</p>
                            </div>
                        </div>
                    </div>
                </ng-template>
                <ng-template carouselSlide>
                    <div class="item aos" data-aos="flip-right">
                        <div class="categories-item">
                            <div class="card-body text-center">
                                <span class="categories-img">
                                    <i class="isax isax-bag-tick-25 fs-36 text-primary"></i>
                                </span>
                                <h5 class="fw-semi-bold mb-1"><a [routerLink]="routes.courseCategory">Marketing</a></h5>
                                <p class="mb-0">174 Courses</p>
                            </div>
                        </div>
                    </div>
                </ng-template>
            </owl-carousel-o>
        </div>
    </div>
    <img src="assets/img/bg/category-bg-1.png" alt="img" class="bg-01">
</div>
<!-- /favorite  section -->

<!-- our benefits -->
<div class="benefits-section">
    <div class="container">
        <div class="section-header text-center aos" data-aos="fade-up">
            <div class="section-badge text-white">
                Our Benefits
            </div>
            <h2 class="text-white">Master the skills to drive your career</h2>
            <p class="text-white">The right course, guided by an expert mentor, can provide invaluable insights,
                practical skills</p>
        </div>
        <div class="row justify-content-center row-gap-4 aos" data-aos="fade-up">
            <div class="col-md-6 col-lg-4">
                <div class="benefits-item">
                    <div class="benefits-img">
                        <img src="assets/img/icons/benefit-icon-01.svg" alt="img" class="img-fluid">
                    </div>
                    <h5 class="title">Stay motivated with instructors</h5>
                    <p class="text-light mb-0">Stay motivated with engaging instructors on our platform, guiding you
                        through every course.</p>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="benefits-item">
                    <div class="benefits-img">
                        <img src="assets/img/icons/benefit-icon-02.svg" alt="img" class="img-fluid">
                    </div>
                    <h5 class="title">Get certified on courses</h5>
                    <p class="text-light mb-0">Get certified, master modern tech skills, and level up your career
                        whether you\u2019re starting.</p>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="benefits-item">
                    <div class="benefits-img">
                        <img src="assets/img/icons/benefit-icon-03.svg" alt="img" class="img-fluid">
                    </div>
                    <h5 class="title">Build skills on your way</h5>
                    <p class="text-light mb-0">Build skills your way with hands-on labs and immersive courses, tailored
                        to fit.</p>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /our benefits -->

<!-- whats new -->
<div class="feature-section position-relative">
    <div class="container">
        <img src="assets/img/bg/feature-bg-01.png" alt="img" class="bg-star-01 img-fluid">
        <img src="assets/img/bg/feature-bg-02.png" alt="img" class="bg-star-02 img-fluid">
        <div class="section-header text-center aos" data-aos="fade-up">
            <span class="section-badge">
                What\u2019s New
            </span>
            <h2>Featured Courses</h2>
            <p>Discover our featured courses, specially curated to help you gain in-demand skills</p>
        </div>
        <div class="course-slider-slick">
            <ngx-slick-carousel #slickModal="slick-carousel" [config]="courseSlider">

                <div class="item" ngxSlickItem>
                    <div class="course-item-two course-item">
                        <div class="course-img">
                            <a [routerLink]="routes.courseDetails">
                                <img src="assets/img/course/course-22.jpg" alt="img" class="img-fluid">
                            </a>
                            <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                                <a href="javascript:void(0);" class="fav-icon"><i class="isax isax-heart"></i></a>
                                <a href="javascript:void(0);" class="brand-icon ms-auto">
                                    <img src="assets/img/icons/course-01.svg" alt="img" class="img-fluid">
                                </a>
                            </div>
                        </div>
                        <div class="course-content">
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <a [routerLink]="routes.instructorDetails" class="avatar avatar-sm">
                                        <img src="assets/img/user/user-29.jpg" alt="img"
                                            class="img-fluid avatar avatar-sm rounded-circle">
                                    </a>
                                    <div class="ms-2">
                                        <a [routerLink]="routes.instructorDetails" class="link-default fs-14">Brenda Slaton</a>
                                    </div>
                                </div>
                                <span
                                    class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                                    Design
                                </span>
                            </div>
                            <h6 class="title mb-2"><a [routerLink]="routes.courseDetails">Information About UI/UX Design Degree
                                    Course</a></h6>
                            <p class="d-flex align-items-center mb-3"><i class="ti ti-star-filled text-warning me-2"></i>4.9
                                (200 Reviews)</p>
                            <div class="d-flex align-items-center justify-content-between">
                                <h6 class="text-secondary fs-16 fw-semi-bold mb-0">$120</h6>
                                <a [routerLink]="routes.cart" class="btn btn-dark btn-sm d-inline-flex align-items-center">Add to
                                    Cart<i class="isax isax-arrow-right-3 ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item" ngxSlickItem>
                    <div class="course-item-two course-item">
                        <div class="course-img">
                            <a [routerLink]="routes.courseDetails">
                                <img src="assets/img/course/course-23.jpg" alt="img" class="img-fluid">
                            </a>
                            <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                                <a href="javascript:void(0);" class="fav-icon"><i class="isax isax-heart"></i></a>
                                <a href="javascript:void(0);" class="brand-icon ms-auto">
                                    <img src="assets/img/icons/course-01.svg" alt="img" class="img-fluid">
                                </a>
                            </div>
                        </div>
                        <div class="course-content">
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <a [routerLink]="routes.instructorDetails" class="avatar avatar-sm">
                                        <img src="assets/img/user/user-50.jpg" alt="img"
                                            class="img-fluid avatar avatar-sm rounded-circle">
                                    </a>
                                    <div class="ms-2">
                                        <a [routerLink]="routes.instructorDetails" class="link-default fs-14">David Benitz</a>
                                    </div>
                                </div>
                                <span
                                    class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                                    Productivity
                                </span>
                            </div>
                            <h6 class="title mb-2"><a [routerLink]="routes.courseDetails">The Complete Business and Management
                                    Course</a></h6>
                            <p class="d-flex align-items-center mb-3"><i class="ti ti-star-filled text-warning me-2"></i>5.0
                                (210 Reviews)</p>
                            <div class="d-flex align-items-center justify-content-between">
                                <h6 class="text-secondary fs-16 fw-semi-bold mb-0">$168</h6>
                                <a [routerLink]="routes.cart" class="btn btn-dark btn-sm d-inline-flex align-items-center">Add to
                                    Cart<i class="isax isax-arrow-right-3 ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item" ngxSlickItem>
                    <div class="course-item-two course-item">
                        <div class="course-img">
                            <a [routerLink]="routes.courseDetails">
                                <img src="assets/img/course/course-24.jpg" alt="img" class="img-fluid">
                            </a>
                            <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                                <a href="javascript:void(0);" class="fav-icon"><i class="isax isax-heart"></i></a>
                                <a href="javascript:void(0);" class="brand-icon ms-auto">
                                    <img src="assets/img/featured-courses/react.svg" alt="img" class="img-fluid">
                                </a>
                            </div>
                        </div>
                        <div class="course-content">
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <a [routerLink]="routes.instructorDetails" class="avatar avatar-sm">
                                        <img src="assets/img/user/user-23.jpg" alt="img"
                                            class="img-fluid avatar avatar-sm rounded-circle">
                                    </a>
                                    <div class="ms-2">
                                        <a [routerLink]="routes.instructorDetails" class="link-default fs-14">Calvin Johnsen</a>
                                    </div>
                                </div>
                                <span
                                    class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                                    Development
                                </span>
                            </div>
                            <h6 class="title mb-2"><a [routerLink]="routes.courseDetails">Learn & Create ReactJS Tech Fundamentals
                                    Apps</a></h6>
                            <p class="d-flex align-items-center mb-3"><i class="ti ti-star-filled text-warning me-2"></i>5.0
                                (154 Reviews)</p>
                            <div class="d-flex align-items-center justify-content-between">
                                <h6 class="text-secondary fs-16 fw-semi-bold mb-0">$147</h6>
                                <a [routerLink]="routes.cart" class="btn btn-dark btn-sm d-inline-flex align-items-center">Add to
                                    Cart<i class="isax isax-arrow-right-3 ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item" ngxSlickItem>
                    <div class="course-item-two course-item">
                        <div class="course-img">
                            <a [routerLink]="routes.courseDetails">
                                <img src="assets/img/course/course-25.jpg" alt="img" class="img-fluid">
                            </a>
                            <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                                <a href="javascript:void(0);" class="fav-icon"><i class="isax isax-heart"></i></a>
                                <a href="javascript:void(0);" class="brand-icon ms-auto">
                                    <img src="assets/img/featured-courses/Clip-path-group.svg" alt="img" class="img-fluid">
                                </a>
                            </div>
                        </div>
                        <div class="course-content">
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <a [routerLink]="routes.instructorDetails" class="avatar avatar-sm">
                                        <img src="assets/img/user/user-20.jpg" alt="img"
                                            class="img-fluid avatar avatar-sm rounded-circle">
                                    </a>
                                    <div class="ms-2">
                                        <a [routerLink]="routes.instructorDetails" class="link-default fs-14">Edith Dorsey</a>
                                    </div>
                                </div>
                                <span
                                    class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                                    Lifestyles
                                </span>
                            </div>
                            <h6 class="title mb-2"><a [routerLink]="routes.courseDetails">Build Creative Arts & media Course
                                    Completed</a></h6>
                            <p class="d-flex align-items-center mb-3"><i class="ti ti-star-filled text-warning me-2"></i>4.9
                                (178 Reviews)</p>
                            <div class="d-flex align-items-center justify-content-between">
                                <h6 class="text-secondary fs-16 fw-semi-bold mb-0">$190</h6>
                                <a [routerLink]="routes.cart" class="btn btn-dark btn-sm d-inline-flex align-items-center">Add to
                                    Cart<i class="isax isax-arrow-right-3 ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item" ngxSlickItem>
                    <div class="course-item-two course-item">
                        <div class="course-img">
                            <a [routerLink]="routes.courseDetails">
                                <img src="assets/img/course/course-22.jpg" alt="img" class="img-fluid">
                            </a>
                            <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                                <a href="javascript:void(0);" class="fav-icon"><i class="isax isax-heart"></i></a>
                                <a href="javascript:void(0);" class="brand-icon ms-auto">
                                    <img src="assets/img/icons/course-01.svg" alt="img" class="img-fluid">
                                </a>
                            </div>
                        </div>
                        <div class="course-content">
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <a [routerLink]="routes.instructorDetails" class="avatar avatar-sm">
                                        <img src="assets/img/user/user-50.jpg" alt="img"
                                            class="img-fluid avatar avatar-sm rounded-circle">
                                    </a>
                                    <div class="ms-2">
                                        <a [routerLink]="routes.instructorDetails" class="link-default fs-14">David Benitz</a>
                                    </div>
                                </div>
                                <span
                                    class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                                    Productivity
                                </span>
                            </div>
                            <h6 class="title mb-2"><a [routerLink]="routes.courseDetails">The Complete Business and Management
                                    Course</a></h6>
                            <p class="d-flex align-items-center mb-3"><i class="ti ti-star-filled text-warning me-2"></i>5.0
                                (210 Reviews)</p>
                            <div class="d-flex align-items-center justify-content-between">
                                <h6 class="text-secondary fs-16 fw-semi-bold mb-0">$168</h6>
                                <a [routerLink]="routes.cart" class="btn btn-dark btn-sm d-inline-flex align-items-center">Add to
                                    Cart<i class="isax isax-arrow-right-3 ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </ngx-slick-carousel>
        </div>

    </div>
</div>
<!-- /whats new -->

<!-- counter trending section -->
<section class="counter-trending-cover">
    <div class="container">
        <div class="counter-section">
            <div class="section-header text-center aos" data-aos="fade-up">
                <h2 class="text-white">Acheive you Goals with DreamsLMS</h2>
                <p class="text-light">96% of eLearning for Business customers see improved results within six months.
                </p>
            </div>
            <div class="row row-gap-4">
                <div class="col-md-6 col-lg-3 d-flex">
                    <div class="counter-item text-center flex-fill" data-aos="fade-up">
                        <h2 class="text-white">253,085</h2>
                        <p class="text-white">Students Enrolled all over World</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 d-flex">
                    <div class="counter-item text-center flex-fill" data-aos="fade-up">
                        <h2 class="text-white">1,205</h2>
                        <p class="text-white">Total Courses on our Platform</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 d-flex">
                    <div class="counter-item aos text-center flex-fill" data-aos="fade-up">
                        <h2 class="text-white">56</h2>
                        <p class="text-white">Countries of Students</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 d-flex">
                    <div class="counter-item no-border aos text-center flex-fill" data-aos="fade-up">
                        <h2 class="text-white">968</h2>
                        <p class="text-white">Expert Tutors From Various Fields</p>
                    </div>
                </div>
            </div>
            <img src="assets/img/bg/count-icon.png" alt="img" class="img-fluid counter-bg-01 d-none d-lg-flex">
            <img src="assets/img/icons/banner-icon-03.svg" alt="img" class="img-fluid counter-bg-02 d-none d-lg-flex">
        </div>
    </div>
    <div class="container position-relative">
        <div class="trending-instruction">
            <div class="section-header text-center aos" data-aos="fade-up">
                <span class="section-badge">
                    Trending Instructors
                </span>
                <h2>Top Class & Professional Instructors </h2>
                <p> Empowering Change: Stories from Those Who Took the Leap</p>
            </div>
            <div class="instructor-carousel owl-theme nav-bottom">
                <owl-carousel-o [options]="instructorCarousel">
                    <ng-template carouselSlide>
                        <div class="item aos" data-aos="flip-right">
                            <div class="instructor-item">
                                <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                                    <a href="javascript:void(0);" class="favourite ms-auto">
                                        <i class="isax isax-heart"></i>
                                    </a>
                                </div>
                                <div class="instructor-img">
                                    <a [routerLink]="routes.instructorDetails">
                                        <img src="assets/img/instructor/instructor-05.jpg" alt="img">
                                        <span class="verify">
                                            <img src="assets/img/icons/verify-icon.svg" alt="img" class="img-fluid">
                                        </span>
                                    </a>
                                </div>
                                <div class="instructor-content">
                                    <h3 class="title">
                                        <a [routerLink]="routes.instructorDetails">Joyce Pence</a>
                                    </h3>
                                    <span class="designation">Lead Designer</span>
                                    <p class="rating">
                                        <i class="fas fa-star me-1"></i>4.8 (157 Reviews)
                                    </p>
                                    <div class="instructor-social">
                                        <a href="javascript:void(0);">
                                            <i class="fab fa-facebook-f"></i>
                                        </a>
                                        <a href="javascript:void(0);">
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                        <a href="javascript:void(0);">
                                            <i class="fab fa-x-twitter"></i>
                                        </a>
                                        <a href="javascript:void(0);">
                                            <i class="fab fa-youtube"></i>
                                        </a>
                                        <a href="javascript:void(0);">
                                            <i class="fab fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ng-template>
                    <ng-template carouselSlide>
                        <div class="item aos" data-aos="flip-right">
                            <div class="instructor-item">
                                <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                                    <a href="javascript:void(0);" class="favourite ms-auto">
                                        <i class="isax isax-heart"></i>
                                    </a>
                                </div>
                                <div class="instructor-img">
                                    <a [routerLink]="routes.instructorDetails">
                                        <img src="assets/img/instructor/instructor-06.jpg" alt="img">
                                        <span class="verify">
                                            <img src="assets/img/icons/verify-icon.svg" alt="img" class="img-fluid">
                                        </span>
                                    </a>
                                </div>
                                <div class="instructor-content">
                                    <h3 class="title">
                                        <a [routerLink]="routes.instructorDetails">Edith Dorsey</a>
                                    </h3>
                                    <span class="designation">Accountant</span>
                                    <p class="rating">
                                        <i class="fas fa-star me-1"></i>4.9 (20 Reviews)
                                    </p>
                                    <div class="instructor-social">
                                        <a href="javascript:void(0);">
                                            <i class="fab fa-facebook-f"></i>
                                        </a>
                                        <a href="javascript:void(0);">
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                        <a href="javascript:void(0);">
                                            <i class="fab fa-x-twitter"></i>
                                        </a>
                                        <a href="javascript:void(0);">
                                            <i class="fab fa-youtube"></i>
                                        </a>
                                        <a href="javascript:void(0);">
                                            <i class="fab fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ng-template>
                    <ng-template carouselSlide>
                        <div class="item aos" data-aos="flip-right">
                            <div class="instructor-item">
                                <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                                    <a href="javascript:void(0);" class="favourite ms-auto">
                                        <i class="isax isax-heart"></i>
                                    </a>
                                </div>
                                <div class="instructor-img">
                                    <a [routerLink]="routes.instructorDetails">
                                        <img src="assets/img/instructor/instructor-07.jpg" alt="img">
                                        <span class="verify">
                                            <img src="assets/img/icons/verify-icon.svg" alt="img" class="img-fluid">
                                        </span>
                                    </a>
                                </div>
                                <div class="instructor-content">
                                    <h3 class="title">
                                        <a [routerLink]="routes.instructorDetails">Ruben Holmesr</a>
                                    </h3>
                                    <span class="designation">Architect</span>
                                    <p class="rating">
                                        <i class="fas fa-star me-1"></i>4.8 (157 Reviews)
                                    </p>
                                    <div class="instructor-social">
                                        <a href="javascript:void(0);">
                                            <i class="fab fa-facebook-f"></i>
                                        </a>
                                        <a href="javascript:void(0);">
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                        <a href="javascript:void(0);">
                                            <i class="fab fa-x-twitter"></i>
                                        </a>
                                        <a href="javascript:void(0);">
                                            <i class="fab fa-youtube"></i>
                                        </a>
                                        <a href="javascript:void(0);">
                                            <i class="fab fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ng-template>
                    <ng-template carouselSlide>
                        <div class="item aos" data-aos="flip-right">
                            <div class="instructor-item">
                                <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                                    <a href="javascript:void(0);" class="favourite ms-auto">
                                        <i class="isax isax-heart"></i>
                                    </a>
                                </div>
                                <div class="instructor-img">
                                    <a [routerLink]="routes.instructorDetails">
                                        <img src="assets/img/instructor/instructor-08.jpg" alt="img">
                                        <span class="verify">
                                            <img src="assets/img/icons/verify-icon.svg" alt="img" class="img-fluid">
                                        </span>
                                    </a>
                                </div>
                                <div class="instructor-content">
                                    <h3 class="title">
                                        <a [routerLink]="routes.instructorDetails">Carol Magner</a>
                                    </h3>
                                    <span class="designation">Lead Designer</span>
                                    <p class="rating">
                                        <i class="fas fa-star me-1"></i>5.0 (218 Reviews)
                                    </p>
                                    <div class="instructor-social">
                                        <a href="javascript:void(0);">
                                            <i class="fab fa-facebook-f"></i>
                                        </a>
                                        <a href="javascript:void(0);">
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                        <a href="javascript:void(0);">
                                            <i class="fab fa-x-twitter"></i>
                                        </a>
                                        <a href="javascript:void(0);">
                                            <i class="fab fa-youtube"></i>
                                        </a>
                                        <a href="javascript:void(0);">
                                            <i class="fab fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ng-template>
                    <ng-template carouselSlide>
                        <div class="item aos" data-aos="flip-right">
                            <div class="instructor-item">
                                <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                                    <a href="javascript:void(0);" class="favourite ms-auto">
                                        <i class="isax isax-heart"></i>
                                    </a>
                                </div>
                                <div class="instructor-img">
                                    <a [routerLink]="routes.instructorDetails">
                                        <img src="assets/img/instructor/instructor-06.jpg" alt="img">
                                        <span class="verify">
                                            <img src="assets/img/icons/verify-icon.svg" alt="img" class="img-fluid">
                                        </span>
                                    </a>
                                </div>
                                <div class="instructor-content">
                                    <h3 class="title">
                                        <a [routerLink]="routes.instructorDetails">Edith Dorsey</a>
                                    </h3>
                                    <span class="designation">Accountant</span>
                                    <p class="rating">
                                        <i class="fas fa-star me-1"></i>4.9 (20 Reviews)
                                    </p>
                                    <div class="instructor-social">
                                        <a href="javascript:void(0);">
                                            <i class="fab fa-facebook-f"></i>
                                        </a>
                                        <a href="javascript:void(0);">
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                        <a href="javascript:void(0);">
                                            <i class="fab fa-x-twitter"></i>
                                        </a>
                                        <a href="javascript:void(0);">
                                            <i class="fab fa-youtube"></i>
                                        </a>
                                        <a href="javascript:void(0);">
                                            <i class="fab fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ng-template>
                </owl-carousel-o>
            </div>
        </div>
    </div>
    <img src="assets/img/bg/instructor-bg-1.png" alt="img" class="instructor-bg">
</section>
<!-- /counter trending section -->

<!-- subscribe section -->
<div class="subsribe-section">
    <div class="container position-relative">
        <img src="assets/img/icons/banner-icon-03.svg" alt="img" class="img-fluid bg-05  d-none d-lg-flex">
        <div class="row">
            <div class="col-lg-6">
                <div class="contact-section">
                    <div class="mb-4 aos" data-aos="fade-up">
                        <h2 class="text-white mb-1">Transform Access To Education</h2>
                        <p class="text-light fs-16">Create Account to Receive Our Newsletter, Course Recommend &
                            Promotions.</p>
                    </div>
                    <form action="#" class="subcribe-form">
                        <span>
                            <i class="isax isax-message-text"></i>
                        </span>
                        <input type="email" placeholder="Email Address" class="form-control">
                        <button type="submit" class="btn btn-secondary btn-xl">Subcribe</button>
                    </form>
                </div>
            </div>
            <div class="col-lg-6 position-relative">
                <img src="assets/img/bg/subscribe-bg-01.png" alt="img" class="img-fluid bg-01 d-none d-lg-flex aos"
                    data-aos="fade-down">
                <img src="assets/img/feature/feature-22.png" alt="img" class="img-fluid bg-02 d-none d-lg-flex aos"
                    data-aos="fade-down">
                <img src="assets/img/icons/subscribe-icon-02.svg" alt="img" class="img-fluid bg-03 d-none d-lg-flex">
                <img src="assets/img/icons/subscribe-icon-01.svg" alt="img" class="img-fluid bg-04 d-none d-lg-flex">
            </div>
        </div>
    </div>
</div>
<!-- /subscribe section -->

<!-- master skill -->
<div class="skill-section">
    <div class="container">
        <div class="row align-items-center justify-content-between">
            <div class="col-lg-6 col-xl-7">
                <div class="skill-image">
                    <div class="row position-relative">
                        <img src="assets/img/bg/book-bg.png" alt="img" class="img-fluid img-04 d-none d-xl-flex">
                        <img src="assets/img/icons/icon-31.png" alt="img" class="img-fluid img-05 d-none d-xl-flex">
                        <div class="col-md-6 d-flex">
                            <div class="flex-fill">
                                <img src="assets/img/feature/feature-26.jpg" alt="img"
                                    class="img-fluid flex-fill img-01 aos" data-aos="fade-right">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <img src="assets/img/feature/feature-27.jpg" alt="img" class="img-fluid img-02 aos"
                                    data-aos="fade-down">
                            </div>
                            <div>
                                <img src="assets/img/feature/feature-28.jpg" alt="img" class="img-fluid img-03 aos"
                                    data-aos="fade-up">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-xl-5 aos" data-aos="fade-up">
                <div class="skill-content">
                    <h2>Master the Skills To Drive Your Career</h2>
                    <p>Get certified, master modern tech skills, and level up your career whether you\u2019re starting out or
                        a seasoned pro. 95% of eLearning learners report our hands-on content directly helped their
                        careers.</p>
                    <div class="skill-list mb-4">
                        <p class="d-flex align-items-center"><i
                                class="isax isax-tick-circle5 text-success fs-24 me-2"></i>Access Your Class anywhere
                        </p>
                        <p class="d-flex align-items-center"><i
                                class="isax isax-tick-circle5 text-success fs-24 me-2"></i>Flexible Course Plan</p>
                        <p class="d-flex align-items-center"><i
                                class="isax isax-tick-circle5 text-success fs-24 me-2"></i>Quality Assurance</p>
                        <p class="d-flex align-items-center"><i
                                class="isax isax-tick-circle5 text-success fs-24 me-2"></i>Cost-Effectiveness</p>
                        <p class="d-flex align-items-center"><i
                                class="isax isax-tick-circle5 text-success fs-24 me-2"></i>The Most World Class
                            Instructors</p>
                        <p class="d-flex align-items-center"><i
                                class="isax isax-tick-circle5 text-success fs-24 me-2"></i>Quality Assurance</p>
                    </div>
                    <a [routerLink]="routes.courseList"
                        class="btn btn-dark btn-xl rounded-pill d-inline-flex align-items-center">Get Started<i
                            class="isax isax-arrow-right-3 ms-2"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /master skill -->

<!-- client -->
<div class="cliets-section">
    <div>
        <div class="owl-theme brand-carousel">
            <owl-carousel-o [options]="brandCarousel">
                <ng-template carouselSlide>
                    <div class="item">
                        <img src="assets/img/client/08.svg" alt="img">
                    </div>
                </ng-template>
                <ng-template carouselSlide>
                    <div class="item">
                        <img src="assets/img/client/09.svg" alt="img">
                    </div>
                </ng-template>
                <ng-template carouselSlide>
                    <div class="item">
                        <img src="assets/img/client/10.svg" alt="img">
                    </div>
                </ng-template>
                <ng-template carouselSlide>
                    <div class="item">
                        <img src="assets/img/client/11.svg" alt="img">
                    </div>
                </ng-template>
                <ng-template carouselSlide>
                    <div class="item">
                        <img src="assets/img/client/12.svg" alt="img">
                    </div>
                </ng-template>
                <ng-template carouselSlide>
                    <div class="item">
                        <img src="assets/img/client/13.svg" alt="img">
                    </div>
                </ng-template>
                <ng-template carouselSlide>
                    <div class="item">
                        <img src="assets/img/client/14.svg" alt="img">
                    </div>
                </ng-template>
                <ng-template carouselSlide>
                    <div class="item">
                        <img src="assets/img/client/15.svg" alt="img">
                    </div>
                </ng-template>
            </owl-carousel-o>
        </div>
    </div>
</div>
<!-- /client -->

<!-- about us -->
<div class="about-us">
    <div class="container">
        <div class="about-us-content">
            <div class="row align-items-center justify-content-between">
                <div class="col-lg-7 aos" data-aos="fade-up">
                    <div class="about-us-head aos" data-aos="fade-up">
                        <h2>What People Say About Us \u2764\uFE0F</h2>
                        <p>Read what our satisfied clients have to say about their experiences with our platform.</p>
                    </div>
                    <div class="owl-carousel owl-theme nav-bottom" id="review-carousel">
                        <div class="item flex-fill">
                            <div class="review-item">
                                <div class="rating">
                                    <span><i class="ti ti-star-filled selected"></i></span>
                                    <span><i class="ti ti-star-filled selected"></i></span>
                                    <span><i class="ti ti-star-filled selected"></i></span>
                                    <span><i class="ti ti-star-filled selected"></i></span>
                                    <span><i class="ti ti-star-filled selected"></i></span>
                                </div>
                                <h5 class="title">"Transformed My Career"</h5>
                                <p>As an employer, the platform exceeded my expectations. We swiftly found top-tier
                                    talent for our company.</p>
                                <div class="d-flex align-items-center review-user">
                                    <div class="me-2">
                                        <a [routerLink]="routes.studentsDetails">
                                            <img src="assets/img/user/user-06.jpg" alt="img" class="img-fluid">
                                        </a>
                                    </div>
                                    <div>
                                        <h6 class=" fw-medium"><a [routerLink]="routes.studentsDetails">Brenda Slaton</a></h6>
                                        <p class="mb-0">Designer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item flex-fill">
                            <div class="review-item">
                                <div class="rating">
                                    <span><i class="ti ti-star-filled selected"></i></span>
                                    <span><i class="ti ti-star-filled selected"></i></span>
                                    <span><i class="ti ti-star-filled selected"></i></span>
                                    <span><i class="ti ti-star-filled selected"></i></span>
                                    <span><i class="ti ti-star-filled selected"></i></span>
                                </div>
                                <h5 class="title">"Enhanced My Study"</h5>
                                <p>The LMS made managing my coursework simple and engaging, with everything I need
                                    easily accessible and organized.</p>
                                <div class="d-flex align-items-center review-user">
                                    <div class="me-2">
                                        <a [routerLink]="routes.studentsDetails">
                                            <img src="assets/img/user/user-12.jpg" alt="img" class="img-fluid">
                                        </a>
                                    </div>
                                    <div>
                                        <h6 class=" fw-medium"><a [routerLink]="routes.studentsDetails">Adrian Dennis</a></h6>
                                        <p class="mb-0">Designer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item flex-fill">
                            <div class="review-item">
                                <div class="rating">
                                    <span><i class="ti ti-star-filled selected"></i></span>
                                    <span><i class="ti ti-star-filled selected"></i></span>
                                    <span><i class="ti ti-star-filled selected"></i></span>
                                    <span><i class="ti ti-star-filled selected"></i></span>
                                    <span><i class="ti ti-star-filled selected"></i></span>
                                </div>
                                <h5 class="title">"Transformed My Career"</h5>
                                <p>As an employer, the platform exceeded my expectations. We swiftly found top-tier
                                    talent for our company.</p>
                                <div class="d-flex align-items-center review-user">
                                    <div class="me-2">
                                        <a [routerLink]="routes.studentsDetails">
                                            <img src="assets/img/user/user-06.jpg" alt="img" class="img-fluid">
                                        </a>
                                    </div>
                                    <div>
                                        <h6 class=" fw-medium"><a [routerLink]="routes.studentsDetails">Brenda Slaton</a></h6>
                                        <p class="mb-0">Designer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="img-section">
                        <img src="assets/img/feature/feature-23.jpg" alt="img" class="img-fluid about-img aos"
                            data-aos="zoom-in">
                        <div class="enrolled-list-cover d-none d-xl-flex aos" data-aos="fade-down">
                            <div class="enrolled-list">
                                <div class="avatar-list-stacked">
                                    <span class="avatar avatar-rounded">
                                        <img class="border border-white" src="assets/img/user/user-01.jpg" alt="img">
                                    </span>
                                    <span class="avatar avatar-rounded">
                                        <img class="border border-white" src="assets/img/user/user-35.jpg" alt="img">
                                    </span>
                                    <span class="avatar avatar-rounded">
                                        <img class="border border-white" src="assets/img/user/user-09.jpg" alt="img">
                                    </span>
                                    <span class="avatar avatar-rounded">
                                        <img class="border border-white" src="assets/img/user/user-06.jpg" alt="img">
                                    </span>
                                    <span class="avatar avatar-rounded">
                                        <img src="assets/img/user/user-36.jpg" alt="img">
                                    </span>
                                </div>
                                <p class="mb-0 text-light fw-bold text-center"><span class="text-secondary">200+
                                    </span>Reviews</p>
                            </div>
                        </div>
                        <img src="assets/img/bg/arrow.png" alt="img" class="img-fluid arrow d-none d-xl-flex">
                    </div>
                </div>
            </div>
        </div>
        <div class="apply-role-section">
            <div class="row row-gap-4">
                <div class="col-md-6">
                    <div class="role-item aos" data-aos="fade-right">
                        <div class="row">
                            <div class="col-xl-6">
                                <h5 class="mb-2">Become an Instructor</h5>
                                <p class="mb-4">Top global instructors teach millions of students on Mentoring.</p>
                                <a [routerLink]="routes.becomeAnExpert"
                                    class="btn btn-primary rounded-pill d-inline-flex align-items-center">Apply Now<i
                                        class="isax isax-arrow-right-3 ms-2"></i></a>
                            </div>
                            <div>
                                <img src="assets/img/instructor/instructor.png" alt="img"
                                    class="img-fluid role-img d-none d-xl-flex">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="role-item student-bg aos" data-aos="fade-up">
                        <div class="row">
                            <div class="col-xl-6">
                                <h5 class="mb-2">Become a Student</h5>
                                <p class="mb-4">Start your educational journey with us and access a wealth of resources
                                </p>
                                <a [routerLink]="routes.studentsList"
                                    class="btn btn-secondary rounded-pill d-inline-flex align-items-center">Enroll Now<i
                                        class="isax isax-arrow-right-3 ms-2"></i></a>
                            </div>
                            <div>
                                <img src="assets/img/students/student.png" alt="img"
                                    class="img-fluid role-img d-none d-xl-flex">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img src="assets/img/bg/about-bg-01.png" alt="img" class="img-fluid about-bg-01 d-none d-xl-flex">
        <img src="assets/img/bg/about-bg-02.png" alt="img" class="img-fluid about-bg-02 d-none d-xl-flex">
    </div>
</div>
<!-- /about us -->

<!-- faq -->
<section class="faq-section">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-5 pe-md-5">
                <div class="position-relative">
                    <img class="img-fluid rounded-4" src="assets/img/about/about-1.jpg" alt="img">
                    <div
                        class="bg-warning text-center p-3 rounded-5 position-absolute top-0 end-0 z-index-1 d-none d-sm-block my-3 mx-3">
                        <i class="isax isax-message-question5 heading-color fs-46"></i>
                    </div>
                </div>
            </div>
            <div class="col-lg-7">
                <div class="section-header">
                    <span class="fw-medium text-secondary mb-2 d-inline-block section-badge">FAQs</span>
                    <h2>Frequently Asked Questions</h2>
                    <p>Explore detailed answers to the most common questions about our platform.</p>
                </div>
                <div class="accordion accordion-customicon1 accordions-items-seperate" id="accordioncustomicon1Example">
                    <div class="accordion-item" data-aos="fade-up">
                        <h2 class="accordion-header" id="headingcustomicon1One">
                            <a href="javascript:void(0);" class="accordion-button" data-bs-toggle="collapse"
                                data-bs-target="#collapsecustomicon1One" aria-expanded="true"
                                aria-controls="collapsecustomicon1One">
                                What\u2019s DreamLMS want to give you? <i class="isax isax-add fs-20 fw-semibold ms-1"></i>
                            </a>
                        </h2>
                        <div id="collapsecustomicon1One" class="accordion-collapse collapse show"
                            aria-labelledby="headingcustomicon1One" data-bs-parent="#accordioncustomicon1Example">
                            <div class="accordion-body pt-0">
                                <p>DreamLMS aims to provide you with a comprehensive and intuitive learning platform
                                    that enhances your educational experience.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" data-aos="fade-up" data-aos-delay="250">
                        <h2 class="accordion-header" id="headingcustomicon1Two">
                            <a href="javascript:void(0);" class="accordion-button collapsed" data-bs-toggle="collapse"
                                data-bs-target="#collapsecustomicon1Two" aria-expanded="false"
                                aria-controls="collapsecustomicon1One">
                                Why choose us for your education? <i class="isax isax-add fs-20 fw-semibold ms-1"></i>
                            </a>
                        </h2>
                        <div id="collapsecustomicon1Two" class="accordion-collapse collapse"
                            aria-labelledby="headingcustomicon1Two" data-bs-parent="#accordioncustomicon1Example">
                            <div class="accordion-body pt-0">
                                <p>DreamLMS aims to provide you with a comprehensive and intuitive learning platform
                                    that enhances your educational experience.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" data-aos="fade-up" data-aos-delay="250">
                        <h2 class="accordion-header" id="headingcustomicon1Three">
                            <a href="javascript:void(0);" class="accordion-button collapsed" data-bs-toggle="collapse"
                                data-bs-target="#collapsecustomicon1Three" aria-expanded="false"
                                aria-controls="collapsecustomicon1One">
                                How We Provide Service For you? <i class="isax isax-add fs-20 fw-semibold ms-1"></i>
                            </a>
                        </h2>
                        <div id="collapsecustomicon1Three" class="accordion-collapse collapse"
                            aria-labelledby="headingcustomicon1Three" data-bs-parent="#accordioncustomicon1Example">
                            <div class="accordion-body pt-0">
                                <p>DreamLMS aims to provide you with a comprehensive and intuitive learning platform
                                    that enhances your educational experience.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" data-aos="fade-up" data-aos-delay="250">
                        <h2 class="accordion-header" id="headingcustomicon1Four">
                            <a href="javascript:void(0);" class="accordion-button collapsed" data-bs-toggle="collapse"
                                data-bs-target="#collapsecustomicon1Four" aria-expanded="false"
                                aria-controls="collapsecustomicon1One">
                                Do you have a monthly plan? <i class="isax isax-add fs-20 fw-semibold ms-1"></i>
                            </a>
                        </h2>
                        <div id="collapsecustomicon1Four" class="accordion-collapse collapse"
                            aria-labelledby="headingcustomicon1Four" data-bs-parent="#accordioncustomicon1Example">
                            <div class="accordion-body pt-0">
                                <p>DreamLMS aims to provide you with a comprehensive and intuitive learning platform
                                    that enhances your educational experience.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" data-aos="fade-up" data-aos-delay="250">
                        <h2 class="accordion-header" id="headingcustomicon1Five">
                            <a href="javascript:void(0);" class="accordion-button collapsed" data-bs-toggle="collapse"
                                data-bs-target="#collapsecustomicon1Five" aria-expanded="false"
                                aria-controls="collapsecustomicon1One">
                                Are you Affordable For Your Course <i class="isax isax-add fs-20 fw-semibold ms-1"></i>
                            </a>
                        </h2>
                        <div id="collapsecustomicon1Five" class="accordion-collapse collapse"
                            aria-labelledby="headingcustomicon1Five" data-bs-parent="#accordioncustomicon1Example">
                            <div class="accordion-body pt-0">
                                <p>DreamLMS aims to provide you with a comprehensive and intuitive learning platform
                                    that enhances your educational experience.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>
<!-- faq -->

<!-- blog section -->
<div class="blog-section position-relative">
    <div class="container">
        <div class="section-header text-center aos" data-aos="fade-up">
            <span class="section-badge">
                Blog
            </span>
            <h2>Latest Articles & News</h2>
            <p>Explore curated content to enlighten, entertain and engage global readers.</p>
        </div>
        <div class="row row-gap-4 justify-content-center">
            <div class="col-lg-4 col-md-6">
                <div class="blog-card aos" data-aos="zoom-in">
                    <div class="blog-img">
                        <a [routerLink]="routes.blog_details"><img src="assets/img/blog/blog-22.jpg" alt="img"
                                class="img-fluid"></a>
                    </div>
                    <div class="blog-content">
                        <h5><a [routerLink]="routes.blog_details">Mastering Programming with a Technical Mentor</a></h5>
                        <p>Learning to code can be overwhelming, but a mentor can make the journey smoother....</p>
                        <div class="blog-user d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center">
                                <a href="javascript:void(0);" class="avatar me-2">
                                    <img src="assets/img/user/user-42.jpg" alt="img" class="img-fluid">
                                </a>
                                <p class="mb-0 d-flex align-items-center">by <a href="javascript:void(0);"
                                        class="fw-medium ms-1">Reni Sarow</a></p>
                            </div>
                            <p class="d-flex align-items-center"><i class="isax isax-calendar-1 text-gray-7"></i>09 Aug
                                2025</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="blog-card">
                    <div class="blog-img">
                        <a [routerLink]="routes.blog_details"><img src="assets/img/blog/blog-23.jpg" alt="img"
                                class="img-fluid"></a>
                    </div>
                    <div class="blog-content">
                        <h5><a [routerLink]="routes.blog_details">How to Level Up Your Coding Skills with the Help of a Mentor</a>
                        </h5>
                        <p>Whether you're a beginner or an advanced coder, this blog will explore how....</p>
                        <div class="blog-user d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center">
                                <a href="javascript:void(0);" class="avatar me-2">
                                    <img src="assets/img/user/user-36.jpg" alt="img" class="img-fluid">
                                </a>
                                <p class="mb-0 d-flex align-items-center">by <a href="javascript:void(0);"
                                        class="fw-medium ms-1">Chris Daniel</a></p>
                            </div>
                            <p class="d-flex align-items-center"><i class="isax isax-calendar-1 text-gray-72"></i>15 Jul
                                2025</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="blog-card">
                    <div class="blog-img">
                        <a [routerLink]="routes.blog_details"><img src="assets/img/blog/blog-24.jpg" alt="img"
                                class="img-fluid"></a>
                    </div>
                    <div class="blog-content">
                        <h5><a [routerLink]="routes.blog_details">Navigating the Tech World: The Ultimate Guide</a></h5>
                        <p> The tech industry is vast and ever-changing, but a mentor can help you stay ahead.....</p>
                        <div class="blog-user d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center">
                                <a href="javascript:void(0);" class="avatar me-2">
                                    <img src="assets/img/user/user-53.jpg" alt="img" class="img-fluid">
                                </a>
                                <p class="mb-0 d-flex align-items-center">by <a href="javascript:void(0);"
                                        class="fw-medium ms-1">Andrew</a></p>
                            </div>
                            <p class="d-flex align-items-center"><i class="isax isax-calendar-1 text-gray-7"></i>15 Jan
                                2025</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img src="assets/img/bg/feature-bg-02.png" alt="img" class="img-fluid blog-bg-01">
    </div>
</div>
<!-- /blog section -->

<app-footer></app-footer>` }]
  }], () => [{ type: DataService }, { type: Router }, { type: HomeData }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Home2Component, { className: "Home2Component", filePath: "src/app/features/home-list/home2/home2.component.ts", lineNumber: 33 });
})();
export {
  Home2Component
};
//# sourceMappingURL=chunk-DIUK3V7A.js.map
