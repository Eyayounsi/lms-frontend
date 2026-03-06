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
  SlickCarouselModule
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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-5DE2SIVI.js";
import {
  __toESM
} from "./chunk-TXDUYLVM.js";

// src/app/features/home-list/home4/home4.component.ts
var AOS = __toESM(require_aos());

// src/app/features/home-list/home4/components/footer/footer.component.ts
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
  }, dependencies: [CommonModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer", imports: [CommonModule, RouterLink], template: '<footer class="footer">\n	<div class="footer-bg">\n		<img src="assets/img/bg/footer-bg-01.png" class="footer-bg-1" alt="">\n		<img src="assets/img/bg/footer-bg-02.png" class="footer-bg-2" alt="">\n	</div>\n	<div class="footer-top">\n		<div class="container">\n			<div class="row row-gap-4">\n				<div class="col-lg-4">\n					<div class="footer-about">\n						<div class="footer-logo">\n							<img src="assets/img/logo.svg" alt="">\n						</div>\n						<p>Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.</p>\n						<div class="d-flex align-items-center">\n							<a href="javascript:void(0);" class="me-2"><img src="assets/img/icon/appstore.svg" alt=""></a>\n							<a href="javascript:void(0);"><img src="assets/img/icon/googleplay.svg" alt=""></a>\n						</div>\n					</div>\n				</div>\n				<div class="col-lg-8">\n					<div class="row row-gap-4">\n						<div class="col-lg-3">\n							<div class="footer-widget footer-menu">\n								<h5 class="footer-title">For Instructor</h5>\n								<ul>\n									<li><a [routerLink]="routes.courseGrid">Search Mentors</a></li>\n									<li><a [routerLink]="routes.login">Login</a></li>\n									<li><a [routerLink]="routes.register">Register</a></li>\n									<li><a [routerLink]="routes.courseList">Booking</a></li>\n									<li><a [routerLink]="routes.students_Dashboard">Students Dashboard</a></li>\n								</ul>\n							</div>\n						</div>\n						<div class="col-lg-3">\n							<div class="footer-widget footer-menu">\n								<h5 class="footer-title">For Student</h5>\n								<ul>\n									<li><a href="javascript:void(0);">Appointments</a></li>\n									<li><a [routerLink]="routes.instructorMessage">Chat</a></li>\n									<li><a [routerLink]="routes.login">Login</a></li>\n									<li><a [routerLink]="routes.register">Register</a></li>\n									<li><a [routerLink]="routes.instructor_dashboard">Instructor Dashboard</a></li>\n								</ul>\n							</div>\n						</div>\n						<div class="col-lg-6">\n							<div class="footer-widget footer-contact">\n								<h5 class="footer-title">Newsletter</h5>\n								<div class="subscribe-input">\n									<form action="javascript:void(0);">\n										<input type="email" class="form-control" placeholder="Enter your Email Address">\n										<button type="submit" class="btn btn-primary btn-sm inline-flex align-items-center"><i class="isax isax-send-2 me-1"></i>Subscribe</button>\n									</form>\n								</div>\n								<div class="footer-contact-info">\n									<div class="footer-address d-flex align-items-center">\n										<img src="assets/img/icon/icon-20.svg" alt="Img" class="img-fluid me-2">\n										<p> 3556  Beech Street, San Francisco,<br> California, CA 94108 </p>\n									</div>\n									<div class="footer-address d-flex align-items-center">\n										<img src="assets/img/icon/icon-19.svg" alt="Img" class="img-fluid me-2">\n										<p>dreamslms&#64;example.com</p>\n									</div>\n									<div class="footer-address d-flex align-items-center">\n										<img src="assets/img/icon/icon-21.svg" alt="Img" class="img-fluid me-2">\n										<p>+19 123-456-7890</p>\n									</div>\n								</div>\n							</div>\n						</div>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>	\n	<div class="footer-bottom">\n		<div class="container">\n			<div class="row row-gap-2">\n				<div class="col-md-6">\n					<div class="text-center text-md-start">\n						<p class="text-white">Copyright &copy; 2025 DreamsLMS. All rights reserved.</p>\n					</div>\n				</div>\n				<div class="col-md-6">\n					<div>\n						<ul class="d-flex align-items-center justify-content-center justify-content-md-end footer-link">\n							<li><a [routerLink]="routes.page_term_condition">Terms & Conditions</a></li>\n							<li><a [routerLink]="routes.page_privacy_policy">Privacy Policy</a></li>\n						</ul>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n</footer>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/features/home-list/home4/components/footer/footer.component.ts", lineNumber: 12 });
})();

// src/app/features/home-list/home4/components/data.ts
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

// src/app/features/home-list/home4/home4.component.ts
var _c0 = () => ({ enableScrollSpy: true });
function Home4Component_ng_template_754_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 242)(1, "div", 243)(2, "div", 244)(3, "h3");
    \u0275\u0275text(4, "Helps us to improve our productivity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.High-definition video is video of higher resolution and quality than standard-definition.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 245)(8, "div", 246)(9, "h5", 247);
    \u0275\u0275text(10, "William George");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h6", 247);
    \u0275\u0275text(12, "CEO & Chairman");
    \u0275\u0275elementEnd()()()()();
  }
}
function Home4Component_ng_template_755_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 242)(1, "div", 243)(2, "div", 244)(3, "h3");
    \u0275\u0275text(4, "Helps us to improve our productivity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 245)(8, "div", 246)(9, "h5", 247);
    \u0275\u0275text(10, "Julian Adrose");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h6", 247);
    \u0275\u0275text(12, "Manager");
    \u0275\u0275elementEnd()()()()();
  }
}
function Home4Component_ng_template_761_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 242)(1, "div", 248);
    \u0275\u0275element(2, "img", 249);
    \u0275\u0275elementEnd()();
  }
}
function Home4Component_ng_template_762_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 242)(1, "div", 248);
    \u0275\u0275element(2, "img", 250);
    \u0275\u0275elementEnd()();
  }
}
function Home4Component_ng_template_763_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 242)(1, "div", 248);
    \u0275\u0275element(2, "img", 251);
    \u0275\u0275elementEnd()();
  }
}
function Home4Component_ng_template_764_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 242)(1, "div", 248);
    \u0275\u0275element(2, "img", 252);
    \u0275\u0275elementEnd()();
  }
}
function Home4Component_ng_template_765_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 242)(1, "div", 248);
    \u0275\u0275element(2, "img", 253);
    \u0275\u0275elementEnd()();
  }
}
function Home4Component_ng_template_766_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 242)(1, "div", 248);
    \u0275\u0275element(2, "img", 254);
    \u0275\u0275elementEnd()();
  }
}
var Home4Component = class _Home4Component {
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
  constructor(router, data) {
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
  realReviews = {
    loop: true,
    margin: 15,
    dots: false,
    nav: true,
    navText: ['<i class="fa-sharp fa-solid fa-arrow-left-long"></i>', '<i class="fa-sharp fa-solid fa-arrow-right-long"></i>'],
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 1
      },
      768: {
        items: 1
      },
      1e3: {
        items: 1
      },
      1300: {
        items: 1
      }
    }
  };
  leadGroup = {
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
  toggleClass(slide) {
    slide.favourite = !slide.favourite;
  }
  directPath() {
    this.router.navigate(["/pages/course/course-list"]);
  }
  onSubmit() {
    this.router.navigate([routes.courseList]);
  }
  static \u0275fac = function Home4Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Home4Component)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HomeData));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Home4Component, selectors: [["app-home4"]], decls: 826, vars: 62, consts: [[1, "banner-section-four", "d-flex", "align-items-center"], [1, "container"], [1, "row", "align-items-center"], ["data-aos", "fade-up", 1, "col-lg-6", "col-12"], [1, "home-slide-face"], [1, "banner-content"], [1, "banner-form"], ["name", "store", "id", "store", "method", "post", 1, "form", 3, "ngSubmit"], [1, "form-inner1"], [1, "input-group"], [1, "drop-detail", "home5-select", "border-end"], ["placeholder", "Select Category", "name", "storeID", 1, "custom-mat-select", "select"], ["value", "0"], ["value", "1"], ["type", "text", "placeholder", "Search for Courses, Instructors", 1, "form-control"], ["type", "submit", 1, "btn", "btn-secondary", "sub-btn1"], [1, "fa-solid", "fa-magnifying-glass", "me-2"], [1, "trust-user"], [1, "rating"], [1, "fas", "fa-star", "filled"], [1, "col-lg-6"], [1, "banner-image"], [1, "row", "position-relative"], [1, "logo-cover"], ["src", "assets/img/icons/icon-30.svg", "alt", "img", "data-aos", "zoom-in", 1, "img-fluid", "img-05", "d-none", "d-xl-flex", "aos"], [1, "col-md-6", "d-flex"], [1, "flex-fill"], ["src", "assets/img/hero/hero-3.jpg", "alt", "img", "data-aos", "fade-bottm", 1, "img-fluid", "h-100", "flex-fill", "img-01", "aos"], [1, "col-md-6", "d-flex", "flex-column"], [1, "flex-fill", "mb-3"], ["src", "assets/img/hero/hero-4.jpg", "alt", "img", "data-aos", "fade-down", 1, "img-fluid", "img-02", "aos"], ["src", "assets/img/hero/hero-5.jpg", "alt", "img", "data-aos", "fade-up", 1, "img-fluid", "img-03", "aos"], [1, "shapes"], ["src", "assets/img/bg/bg-10.png", "alt", "Img", 1, "shapes-one"], ["src", "assets/img/bg/bg-11.png", "alt", "Img", 1, "shapes-two"], ["src", "assets/img/bg/bg-12.png", "alt", "Img", 1, "shapes-middle"], [1, "vision-section"], [1, "row", "row-gap-4"], [1, "col-xl-3", "col-lg-6", "d-flex"], [1, "vision-item", "flex-fill"], [1, "vision-icon", "border"], ["src", "assets/img/icons/vision-icon-01.svg", "alt", "img"], ["src", "assets/img/icons/vision-icon-02.svg", "alt", "img"], ["src", "assets/img/icons/vision-icon-03.svg", "alt", "img"], ["src", "assets/img/icons/vision-icon-04.svg", "alt", "img"], [1, "about-section"], [1, "row", "align-items-center", "row-gap-4"], ["data-aos", "fade-up", 1, "col-lg-7", "wow", "fadeInLeft", "order-lg-1", "order-xs-2", "order-sm-2"], [1, "section-header"], [1, "fw-medium", "text-secondary", "fs-18", "fw-bold", "mb-2", "d-inline-block"], [1, "mb-0"], [1, "about-content"], [1, "about-img"], [1, "col-md-4"], ["src", "assets/img/about/about-3.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/about/about-4.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/about/about-5.jpg", "alt", "img", 1, "img-fluid"], [1, "btn", "btn-secondary", "btn-xl", 3, "routerLink"], [1, "col-lg-5", "order-lg-2", "order-xs-1", "order-sm-1"], [1, "stylist-gallery"], ["data-aos", "fade-down", 1, "col-lg-6", "col-md-6", "col-sm-12", "col-12"], [1, "about-image", "border", "count-one", "d-flex", "align-items-center", "justify-content-center", "flex-fill", "project-details"], [1, "about-count"], [1, "course-img"], ["src", "assets/img/icons/count-one.svg", "alt", "Img"], [1, "count-content-three", "course-count", "ms-0"], [1, "counterUp", 3, "countUp", "options"], [1, "about-image", "border", "count-two", "d-flex", "align-items-center", "justify-content-center", "flex-fill", "project-details"], ["src", "assets/img/icons/count-two.svg", "alt", "Img"], ["data-aos", "fade-bottm", "data-wow-delay", "1.5", 1, "col-lg-6", "col-md-6", "col-sm-12", "col-12"], [1, "about-image", "border", "count-three", "d-flex", "align-items-center", "justify-content-center", "flex-fill", "project-details"], ["src", "assets/img/icons/count-three.svg", "alt", "Img"], ["data-aos", "fade-top", "data-wow-delay", "0.5", 1, "col-lg-6", "col-md-6", "col-sm-12", "col-12"], [1, "about-image", "border", "count-four", "d-flex", "align-items-center", "justify-content-center", "flex-fill", "project-details"], ["src", "assets/img/icons/count-four.svg", "alt", "Img"], [1, "about-bg"], ["src", "assets/img/bg/bg-8.png", "alt", "img", 1, "about-02"], ["src", "assets/img/bg/bg-7.png", "alt", "img", 1, "about-01"], ["src", "assets/img/bg/bg-9.png", "alt", "img", 1, "about-03"], [1, "topcategory-sec"], [1, "section-header", "text-center"], [1, "row"], ["data-aos", "fade-down", 1, "col-xl-3", "col-lg-6", "col-md-6", "col-sm-12", "d-flex"], [1, "categories-item", "categories-item-four", "flex-fill"], [1, "categories-icon"], ["src", "assets/img/icons/category-1.svg", "alt", "Angular Development"], [1, "title"], [3, "routerLink"], ["src", "assets/img/icons/category-9.svg", "alt", "Python Development"], ["src", "assets/img/icons/category-icon10.svg", "alt", "Node Js Development"], ["src", "assets/img/icons/category-11.svg", "alt", "PHP Development"], ["src", "assets/img/icons/category-5.svg", "alt", "Docker Development"], ["src", "assets/img/icons/category-6.svg", "alt", "Swift Development"], ["src", "assets/img/icons/category-7.svg", "alt", "Photography"], [1, "col-xl-3", "col-lg-6", "col-md-6", "col-sm-12", "d-flex"], ["data-aos", "fade-up", 1, "categories-item", "categories-item-four", "flex-fill"], ["src", "assets/img/icons/category-8.svg", "alt", "Business"], ["data-aos", "fade-down", 1, "more-details", "text-center"], [1, "featured-courses-sec"], [1, "patter-bg"], ["src", "assets/img/bg/bg-13.png", "alt", "Img", 1, "patter-one"], [1, "featured-courses-two"], ["data-aos", "fade-down", 1, "col-xl-4", "col-lg-6", "col-md-6", "col-sm-12", "d-flex"], [1, "course-item", "course-item-four", "mx-0"], ["alt", "Img", "src", "assets/img/course/course-10.jpg", 1, "img-fluid"], [1, "position-absolute", "start-0", "top-0", "d-flex", "align-items-start", "w-100", "z-index-2", "p-2"], ["href", "javascript:void(0);", 1, "course-name"], [1, "course-content"], [1, "ms-2"], [1, "user-info"], [1, "user-name"], [1, "link-info", 3, "routerLink"], [1, "course-level"], [1, "course-info"], [1, "course-time"], [1, "fa-regular", "fa-clock", "me-2"], [1, "price"], ["alt", "Img", "src", "assets/img/course/course-11.jpg", 1, "img-fluid"], [1, "course-level", "text-warning"], ["alt", "Img", "src", "assets/img/course/course-12.jpg", 1, "img-fluid"], [1, "course-level", "text-purple"], ["alt", "Img", "src", "assets/img/course/course-13.jpg", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/course/course-14.jpg", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/course/course-15.jpg", 1, "img-fluid"], [1, "course-level", "text-pink"], ["data-aos", "fade-up", 1, "col-lg-12"], [1, "more-details", "text-center"], [1, "master-skills-sec", "pt-0"], [1, "col-lg-7", "mx-auto"], [1, "course-info-two"], [1, "skills-item"], [1, "skills-wrap"], [1, "row", "row-gap-4", "align-items-center"], ["data-aos", "fade-up", 1, "col-xl-5", "col-lg-6", "col-md-12", "order-lg-0", "order-md-0", "order-0"], [1, "list-unstyled", "heading-color", "mb-4"], [1, "d-flex", "mb-3"], [1, "isax", "isax-tick-circle5", "text-success", "fs-24", "me-2"], [1, "d-flex", "mb-3", "aos-init", "aos-animate"], ["data-aos", "fade-up", 1, "col-xl-7", "col-lg-6", "col-md-12", "order-lg-1", "order-md-1", "order-1"], [1, "join-mentor-img"], ["src", "assets/img/feature/feature-18.jpg", "alt", "Img", 1, "img-fluid", "rounded-4"], [1, "joing-icon-award", "bg-warning"], ["src", "assets/img/icons/award-01.svg", "alt", "Img", 1, "img-fluid"], [1, "skills-wrap", "skill-center"], ["data-aos", "fade-up", 1, "col-xl-7", "col-lg-7", "col-md-12", "order-lg-2", "order-md-3", "order-3"], ["src", "assets/img/feature/feature-19.jpg", "alt", "Img", 1, "img-fluid", "rounded-4"], [1, "joing-icon-award", "bg-success"], ["src", "assets/img/icons/award-02.svg", "alt", "Img", 1, "img-fluid"], ["data-aos", "fade-up", 1, "col-xl-5", "col-lg-5", "col-md-12", "order-lg-3", "order-md-2", "order-2"], [1, "d-flex", "mb-3", "aos-init"], ["data-aos", "fade-up", 1, "col-xl-5", "col-lg-7", "col-md-12", "order-lg-4", "order-md-4", "order-4"], ["data-aos", "fade-up", 1, "col-xl-7", "col-lg-5", "col-md-12", "order-lg-5", "order-md-5", "order-5"], ["src", "assets/img/feature/feature-20.jpg", "alt", "Img", 1, "img-fluid", "rounded-4"], [1, "joing-icon-award", "bg-secondary"], ["src", "assets/img/icons/award-03.svg", "alt", "Img", 1, "img-fluid"], [1, "testimonial-sec"], [1, "testimonial-two-img"], ["src", "assets/img/bg/bg-14.png", "alt", "Img", 1, "img-fluid"], [1, "testimonial-subhead-two"], ["data-aos", "fade-down", 1, "col-md-12"], [1, "testimonial-inner"], ["data-aos", "fade-down"], [1, "row", "text-center"], ["data-aos", "fade-up", 1, "col-md-4", "col-sm-12"], [1, "course-count-two", "course-count", "border"], [1, "counterUp", "text-secondary"], [1, "counterUp", "text-success"], [1, "counterUp", "text-primary"], [1, "knowledge-sec"], [1, "container-fluid"], [1, "col-lg-6", "col-sm-12", "ps-0"], [1, "featured-img-1"], ["data-aos", "fade-up", 1, "col-lg-6", "col-sm-12", "p-0"], [1, "joing-group"], [1, "mb-2"], [1, "joing-list"], ["data-aos", "fade-bottom"], [1, "joing-header"], [1, "joing-icon", "bg-primary"], ["src", "assets/img/icons/joing-01.svg", "alt", "Img", 1, "img-fluid"], [1, "joing-content"], [1, "joing-icon", "bg-warning"], ["src", "assets/img/icons/joing-02.svg", "alt", "Img", 1, "img-fluid"], [1, "joing-icon", "bg-success"], ["src", "assets/img/icons/joing-03.svg", "alt", "Img", 1, "img-fluid"], [1, "joing-content", "aos"], ["data-aos", "fade-bottom", 1, "mb-0"], [1, "joing-icon", "bg-secondary"], ["src", "assets/img/icons/joing-04.svg", "alt", "Img", 1, "img-fluid"], [1, "feature-instructors-sec"], ["data-aos", "fade-up", 1, "section-header", "text-center"], [1, "featured-instructor-two"], ["data-aos", "fade-up", 1, "col-xl-3", "col-lg-6", "col-md-6", "col-sm-12"], [1, "instructor-item", "instructor-item-four"], [1, "instructors-img"], ["tabindex", "0", 3, "routerLink"], ["alt", "Img", "src", "assets/img/instructor/instructor-01.jpg", 1, "img-fluid"], [1, "featured-img"], ["src", "assets/img/icons/category-1.svg", "alt", "Img", 1, "img-fluid"], ["href", "javascript:void(0);", 1, "favourite", "ms-auto"], [1, "isax", "isax-heart"], [1, "instructor-content"], [1, "designation"], [1, "student-count"], [1, "fa-solid", "fa-user-group", "me-2"], ["alt", "Img", "src", "assets/img/instructor/instructor-02.jpg", 1, "img-fluid"], ["src", "assets/img/icons/category-2.svg", "alt", "Img", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/instructor/instructor-03.jpg", 1, "img-fluid"], ["src", "assets/img/icons/category-3.svg", "alt", "Img", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/instructor/instructor-04.jpg", 1, "img-fluid"], ["src", "assets/img/icons/category-4.svg", "alt", "Img", 1, "img-fluid"], [1, "col-lg-12"], ["data-aos", "fade-up", 1, "more-details", "text-center"], [1, "real-reviews-sec"], [1, "real-reviews-group"], ["data-aos", "fade-up", 1, "col-lg-6", "col-md-12", "col-sm-12"], [1, "reviews-img"], ["src", "assets/img/feature/feature-21.jpg", "alt", "Img", 1, "img-fluid", "rounded-4"], [1, "review-icon"], ["src", "assets/img/icons/review.svg", "alt", "img"], ["data-aos", "fade-up", 1, "col-lg-6", "col-md-12", "col-md-12"], [1, "real-reviews", "owl-theme"], [3, "options"], ["carouselSlide", ""], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "owl-nav", "slide-nav-8", "nav-control"], [1, "client-two-carousel"], [1, "lead-group-slider", "owl-theme"], ["src", "assets/img/bg/bg-9.png", "alt", "img", 1, "review-bg"], [1, "latest-blog-sec"], [1, "row", "justify-content-center"], ["data-aos", "fade-down", 1, "col-xl-4", "col-lg-6", "col-md-6"], [1, "event-blog-main"], [1, "latest-blog-img"], ["alt", "Img", "src", "assets/img/blog/blog-31.jpg", 1, "img-fluid"], [1, "blog-content"], [1, "category-name", 3, "routerLink"], [1, "blog-date"], [1, "isax", "isax-calendar-1", "me-1"], ["alt", "Img", "src", "assets/img/blog/blog-32.jpg", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/blog/blog-33.jpg", 1, "img-fluid"], ["src", "assets/img/bg/blog-bg.png", "alt", "img", 1, "blog-bg"], [1, "item"], [1, "real-reviews-grid"], [1, "review-content"], [1, "review-top"], [1, "review-info"], ["data-aos", "fade-up"], [1, "lead-img"], ["alt", "img", "src", "assets/img/client/16.svg", 1, "img-fluid"], ["alt", "img", "src", "assets/img/client/17.svg", 1, "img-fluid"], ["alt", "img", "src", "assets/img/client/18.svg", 1, "img-fluid"], ["alt", "img", "src", "assets/img/client/19.svg", 1, "img-fluid"], ["alt", "img", "src", "assets/img/client/20.svg", 1, "img-fluid"], ["alt", "img", "src", "assets/img/client/21.svg", 1, "img-fluid"]], template: function Home4Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h6");
      \u0275\u0275text(7, "The Leader in Online Learning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "h1");
      \u0275\u0275text(9, "Engaging & Accessible Online Courses For All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p");
      \u0275\u0275text(11, "Our specialized online courses are designed to bring the classroom experience to you, no matter where you are.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 6)(13, "form", 7);
      \u0275\u0275listener("ngSubmit", function Home4Component_Template_form_ngSubmit_13_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(14, "div", 8)(15, "div", 9)(16, "span", 10)(17, "mat-select", 11)(18, "mat-option", 12);
      \u0275\u0275text(19, "Select Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "mat-option", 13);
      \u0275\u0275text(21, "Development");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "mat-option", 13);
      \u0275\u0275text(23, "Marketing");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(24, "input", 14);
      \u0275\u0275elementStart(25, "button", 15);
      \u0275\u0275element(26, "i", 16);
      \u0275\u0275text(27, "Search");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(28, "div", 17)(29, "p");
      \u0275\u0275text(30, "Trusted by over 15K Users worldwide since 2024");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 18);
      \u0275\u0275element(32, "i", 19)(33, "i", 19)(34, "i", 19)(35, "i", 19)(36, "i", 19);
      \u0275\u0275elementStart(37, "span");
      \u0275\u0275text(38, "4.9 / 200 Review");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(39, "div", 20)(40, "div", 21)(41, "div", 22)(42, "div", 23);
      \u0275\u0275element(43, "img", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 25)(45, "div", 26);
      \u0275\u0275element(46, "img", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 28)(48, "div", 29);
      \u0275\u0275element(49, "img", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 26);
      \u0275\u0275element(51, "img", 31);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(52, "div", 32);
      \u0275\u0275element(53, "img", 33)(54, "img", 34)(55, "img", 35);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(56, "div", 36)(57, "div", 1)(58, "div", 37)(59, "div", 38)(60, "div", 39)(61, "span", 40);
      \u0275\u0275element(62, "img", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "p");
      \u0275\u0275text(64, "Get certified with 100+ certification courses");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "div", 38)(66, "div", 39)(67, "span", 40);
      \u0275\u0275element(68, "img", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "p");
      \u0275\u0275text(70, "Keep up with the latest in cloud");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(71, "div", 38)(72, "div", 39)(73, "span", 40);
      \u0275\u0275element(74, "img", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "p");
      \u0275\u0275text(76, "Build skills your way, from labs to courses");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(77, "div", 38)(78, "div", 39)(79, "span", 40);
      \u0275\u0275element(80, "img", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "p");
      \u0275\u0275text(82, "Stay motivated with engaging instructors");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(83, "section", 45)(84, "div", 1)(85, "div", 46)(86, "div", 47)(87, "div", 48)(88, "span", 49);
      \u0275\u0275text(89, "Learn with DreamLMS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "h2", 50);
      \u0275\u0275text(91, "Get Trained By Experts & Professionals around the World");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "div", 51)(93, "p");
      \u0275\u0275text(94, "Mentor is essential for personal and professional growth. This blog discusses the key benefits of professional mentoring, including skill development, networking, and career advancement, while also offering strategies for finding the right mentor.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "div", 52)(96, "div", 37)(97, "div", 53);
      \u0275\u0275element(98, "img", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "div", 53);
      \u0275\u0275element(100, "img", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "div", 53);
      \u0275\u0275element(102, "img", 56);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(103, "a", 57);
      \u0275\u0275text(104, "Learn more");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(105, "div", 58)(106, "div", 59)(107, "div", 37)(108, "div", 60)(109, "div", 61)(110, "div", 62)(111, "div", 63);
      \u0275\u0275element(112, "img", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "div", 65)(114, "h4")(115, "span", 66);
      \u0275\u0275text(116, "10");
      \u0275\u0275elementEnd();
      \u0275\u0275text(117, "K");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "p", 50);
      \u0275\u0275text(119, "Online Courses");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(120, "div", 60)(121, "div", 67)(122, "div", 62)(123, "div", 63);
      \u0275\u0275element(124, "img", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "div", 65)(126, "h4")(127, "span", 66);
      \u0275\u0275text(128, "215");
      \u0275\u0275elementEnd();
      \u0275\u0275text(129, "+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "p", 50);
      \u0275\u0275text(131, "Expert Tutors");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(132, "div", 69)(133, "div", 70)(134, "div", 62)(135, "div", 63);
      \u0275\u0275element(136, "img", 71);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "div", 65)(138, "h4")(139, "span", 66);
      \u0275\u0275text(140, "10");
      \u0275\u0275elementEnd();
      \u0275\u0275text(141, "K");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "p", 50);
      \u0275\u0275text(143, "Ceritified Courses");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(144, "div", 72)(145, "div", 73)(146, "div", 62)(147, "div", 63);
      \u0275\u0275element(148, "img", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "div", 65)(150, "h4")(151, "span", 66);
      \u0275\u0275text(152, "10");
      \u0275\u0275elementEnd();
      \u0275\u0275text(153, "K");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "p", 50);
      \u0275\u0275text(155, "Online Students");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(156, "div", 75);
      \u0275\u0275element(157, "img", 76);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(158, "div", 75);
      \u0275\u0275element(159, "img", 77)(160, "img", 78);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(161, "section", 79)(162, "div", 1)(163, "div", 80)(164, "span", 49);
      \u0275\u0275text(165, "Favourite Course");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "h2");
      \u0275\u0275text(167, "Top Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "p");
      \u0275\u0275text(169, "Discover our featured courses, specially curated to help you gain in-demand skills");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(170, "div", 81)(171, "div", 82)(172, "div", 83)(173, "div", 84);
      \u0275\u0275element(174, "img", 85);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "h5", 86)(176, "a", 87);
      \u0275\u0275text(177, "Angular Development");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(178, "p");
      \u0275\u0275text(179, "220 Instructors");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(180, "div", 82)(181, "div", 83)(182, "div", 84);
      \u0275\u0275element(183, "img", 88);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "h5", 86)(185, "a", 87);
      \u0275\u0275text(186, "Nodeman Development");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(187, "p");
      \u0275\u0275text(188, "124 Instructors");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(189, "div", 82)(190, "div", 83)(191, "div", 84);
      \u0275\u0275element(192, "img", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "h5", 86)(194, "a", 87);
      \u0275\u0275text(195, "Node Js Development");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(196, "p");
      \u0275\u0275text(197, "120 Instructors");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(198, "div", 82)(199, "div", 83)(200, "div", 84);
      \u0275\u0275element(201, "img", 90);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "h5", 86)(203, "a", 87);
      \u0275\u0275text(204, "AWS Development");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(205, "p");
      \u0275\u0275text(206, "285 Instructors");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(207, "div", 82)(208, "div", 83)(209, "div", 84);
      \u0275\u0275element(210, "img", 91);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(211, "h5", 86)(212, "a", 87);
      \u0275\u0275text(213, "Strapi CMS");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(214, "p");
      \u0275\u0275text(215, "99 Instructors");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(216, "div", 82)(217, "div", 83)(218, "div", 84);
      \u0275\u0275element(219, "img", 92);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "h5", 86)(221, "a", 87);
      \u0275\u0275text(222, "Swift Development");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(223, "p");
      \u0275\u0275text(224, "64 Instructors");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(225, "div", 82)(226, "div", 83)(227, "div", 84);
      \u0275\u0275element(228, "img", 93);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(229, "h5", 86)(230, "a", 87);
      \u0275\u0275text(231, "VUE JS Development");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(232, "p");
      \u0275\u0275text(233, "32 Instructors");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(234, "div", 94)(235, "div", 95)(236, "div", 84);
      \u0275\u0275element(237, "img", 96);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(238, "h5", 86)(239, "a", 87);
      \u0275\u0275text(240, "ApostropheCMS");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(241, "p");
      \u0275\u0275text(242, "21 Instructors");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(243, "div", 97)(244, "a", 57);
      \u0275\u0275text(245, "View all Category");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(246, "section", 98)(247, "div", 99);
      \u0275\u0275element(248, "img", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(249, "div", 1)(250, "div", 80)(251, "span", 49);
      \u0275\u0275text(252, "What\u2019s New");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(253, "h2");
      \u0275\u0275text(254, "Featured Courses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(255, "p");
      \u0275\u0275text(256, "Get certified, master modern tech skills, and level up your career");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(257, "div", 101)(258, "div", 81)(259, "div", 102)(260, "div", 103)(261, "div", 63)(262, "a", 87);
      \u0275\u0275element(263, "img", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(264, "div", 105)(265, "a", 106);
      \u0275\u0275text(266, "PHP");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(267, "div", 107)(268, "div", 18);
      \u0275\u0275element(269, "i", 19)(270, "i", 19)(271, "i", 19)(272, "i", 19)(273, "i", 19);
      \u0275\u0275elementStart(274, "span", 108);
      \u0275\u0275text(275, "203 reviews");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(276, "h3", 86)(277, "a", 87);
      \u0275\u0275text(278, "The Complete Web Developer PHP framework Course 2.0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(279, "div", 109)(280, "p", 110)(281, "a", 111);
      \u0275\u0275text(282, "Emily Williams");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(283, "p", 112);
      \u0275\u0275text(284, "Expert");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(285, "div", 113)(286, "p", 114);
      \u0275\u0275element(287, "i", 115);
      \u0275\u0275text(288, "6hr 30min");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(289, "h5", 116);
      \u0275\u0275text(290, "$400 ");
      \u0275\u0275elementStart(291, "span");
      \u0275\u0275text(292, "$99.00");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(293, "div", 102)(294, "div", 103)(295, "div", 63)(296, "a", 87);
      \u0275\u0275element(297, "img", 117);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(298, "div", 105)(299, "a", 106);
      \u0275\u0275text(300, "Self Improvements");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(301, "div", 107)(302, "div", 18);
      \u0275\u0275element(303, "i", 19)(304, "i", 19)(305, "i", 19)(306, "i", 19)(307, "i", 19);
      \u0275\u0275elementStart(308, "span", 108);
      \u0275\u0275text(309, "5.0 (22 Reviews)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(310, "h3", 86)(311, "a", 87);
      \u0275\u0275text(312, "Building Your Personal Brand: Tips for Career Success");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(313, "div", 109)(314, "p", 110)(315, "a", 111);
      \u0275\u0275text(316, "Brook Salaine");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(317, "p", 118);
      \u0275\u0275text(318, "Intermediate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(319, "div", 113)(320, "p", 114);
      \u0275\u0275element(321, "i", 115);
      \u0275\u0275text(322, "1hr 20min ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(323, "h5", 116);
      \u0275\u0275text(324, "$125");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(325, "div", 102)(326, "div", 103)(327, "div", 63)(328, "a", 87);
      \u0275\u0275element(329, "img", 119);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(330, "div", 105)(331, "a", 106);
      \u0275\u0275text(332, "Finance");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(333, "div", 107)(334, "div", 18);
      \u0275\u0275element(335, "i", 19)(336, "i", 19)(337, "i", 19)(338, "i", 19)(339, "i", 19);
      \u0275\u0275elementStart(340, "span", 108);
      \u0275\u0275text(341, "4.0 (15 Reviwes) ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(342, "h3", 86)(343, "a", 87);
      \u0275\u0275text(344, "Strength Training 101: Building a Solid Foundation");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(345, "div", 109)(346, "p", 110)(347, "a", 111);
      \u0275\u0275text(348, "Mark Richardson");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(349, "p", 120);
      \u0275\u0275text(350, "Basic");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(351, "div", 113)(352, "p", 114);
      \u0275\u0275element(353, "i", 115);
      \u0275\u0275text(354, "2hr 30min ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(355, "h5", 116);
      \u0275\u0275text(356, "$3560");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(357, "div", 102)(358, "div", 103)(359, "div", 63)(360, "a", 87);
      \u0275\u0275element(361, "img", 121);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(362, "div", 105)(363, "a", 106);
      \u0275\u0275text(364, "SEO");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(365, "div", 107)(366, "div", 18);
      \u0275\u0275element(367, "i", 19)(368, "i", 19)(369, "i", 19)(370, "i", 19)(371, "i", 19);
      \u0275\u0275elementStart(372, "span", 108);
      \u0275\u0275text(373, "203 reviews");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(374, "h3", 86)(375, "a", 87);
      \u0275\u0275text(376, "Digital Marketing Strategies for Business Growth");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(377, "div", 109)(378, "p", 110)(379, "a", 111);
      \u0275\u0275text(380, "Laura Bennett");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(381, "p", 120);
      \u0275\u0275text(382, "Basic");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(383, "div", 113)(384, "p", 114);
      \u0275\u0275element(385, "i", 115);
      \u0275\u0275text(386, "6hr 30min");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(387, "h5", 116);
      \u0275\u0275text(388, "$350 ");
      \u0275\u0275elementStart(389, "span");
      \u0275\u0275text(390, "$699.00");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(391, "div", 102)(392, "div", 103)(393, "div", 63)(394, "a", 87);
      \u0275\u0275element(395, "img", 122);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(396, "div", 105)(397, "a", 106);
      \u0275\u0275text(398, "Development");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(399, "div", 107)(400, "div", 18);
      \u0275\u0275element(401, "i", 19)(402, "i", 19)(403, "i", 19)(404, "i", 19)(405, "i", 19);
      \u0275\u0275elementStart(406, "span", 108);
      \u0275\u0275text(407, "5.0 (05 Reviews)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(408, "h3", 86)(409, "a", 87);
      \u0275\u0275text(410, "Web Development for Beginners: HTML, CSS, and JavaScript");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(411, "div", 109)(412, "p", 110)(413, "a", 111);
      \u0275\u0275text(414, "David Morgan");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(415, "p", 112);
      \u0275\u0275text(416, "Expert");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(417, "div", 113)(418, "p", 114);
      \u0275\u0275element(419, "i", 115);
      \u0275\u0275text(420, "1hr 15min ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(421, "h5", 116);
      \u0275\u0275text(422, "$150");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(423, "div", 102)(424, "div", 103)(425, "div", 63)(426, "a", 87);
      \u0275\u0275element(427, "img", 123);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(428, "div", 105)(429, "a", 106);
      \u0275\u0275text(430, "PHP");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(431, "div", 107)(432, "div", 18);
      \u0275\u0275element(433, "i", 19)(434, "i", 19)(435, "i", 19)(436, "i", 19)(437, "i", 19);
      \u0275\u0275elementStart(438, "span", 108);
      \u0275\u0275text(439, "203 reviews");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(440, "h3", 86)(441, "a", 87);
      \u0275\u0275text(442, "Photography Basics: Understanding Composition and Lighting");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(443, "div", 109)(444, "p", 110)(445, "a", 111);
      \u0275\u0275text(446, "Maria Lopez");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(447, "p", 124);
      \u0275\u0275text(448, "Advanced");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(449, "div", 113)(450, "p", 114);
      \u0275\u0275element(451, "i", 115);
      \u0275\u0275text(452, "2hr 40min ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(453, "h5", 116);
      \u0275\u0275text(454, "$250");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(455, "div", 125)(456, "div", 126)(457, "a", 57);
      \u0275\u0275text(458, "View all Courses ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(459, "section", 127)(460, "div", 1)(461, "div", 81)(462, "div", 128)(463, "div", 80)(464, "span", 49);
      \u0275\u0275text(465, "What\u2019s New");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(466, "h2");
      \u0275\u0275text(467, "Master the skills to drive your career");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(468, "p");
      \u0275\u0275text(469, "Get certified, master modern tech skills, and level up your career \u2014 whether you\u2019re starting out or a seasoned pro. 95% of eLearning learners report.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(470, "div", 129)(471, "div", 130)(472, "div", 131)(473, "div", 132)(474, "div", 133)(475, "h3");
      \u0275\u0275text(476, "Award Winning Course Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(477, "p");
      \u0275\u0275text(478, "An award-winning course management system (CMS) or program is typically recognized for its exceptional quality, innovation, and effectiveness in helping both instructors and students succeed.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(479, "ul", 134)(480, "li", 135);
      \u0275\u0275element(481, "i", 136);
      \u0275\u0275text(482, "Interactive Tools for Engagement ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(483, "li", 135);
      \u0275\u0275element(484, "i", 136);
      \u0275\u0275text(485, "Customizable Course Creation ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(486, "li", 137);
      \u0275\u0275element(487, "i", 136);
      \u0275\u0275text(488, "Robust Analytics and Reporting ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(489, "li", 137);
      \u0275\u0275element(490, "i", 136);
      \u0275\u0275text(491, "Collaborative and Peer to Peer Learning ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(492, "li", 137);
      \u0275\u0275element(493, "i", 136);
      \u0275\u0275text(494, "The Most World Class Instructors ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(495, "div", 138)(496, "div", 139);
      \u0275\u0275element(497, "img", 140);
      \u0275\u0275elementStart(498, "div", 141);
      \u0275\u0275element(499, "img", 142);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(500, "div", 130)(501, "div", 143)(502, "div", 132)(503, "div", 144)(504, "div", 139);
      \u0275\u0275element(505, "img", 145);
      \u0275\u0275elementStart(506, "div", 146);
      \u0275\u0275element(507, "img", 147);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(508, "div", 148)(509, "h3");
      \u0275\u0275text(510, "Learn anything from anywhere anytime");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(511, "p");
      \u0275\u0275text(512, "In today\u2019s fast-paced, digital world, the ability to learn anything, from anywhere, and at any time is more accessible than ever. Whether you are looking to expand your knowledge, gain new skills.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(513, "ul", 134)(514, "li", 135);
      \u0275\u0275element(515, "i", 136);
      \u0275\u0275text(516, "Access to a World of Knowledge ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(517, "li", 135);
      \u0275\u0275element(518, "i", 136);
      \u0275\u0275text(519, "Diverse Learning Formats ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(520, "li", 149);
      \u0275\u0275element(521, "i", 136);
      \u0275\u0275text(522, "Learn at Your Own Pace ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(523, "li", 149);
      \u0275\u0275element(524, "i", 136);
      \u0275\u0275text(525, "Affordable and Flexible Pricing ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(526, "li", 149);
      \u0275\u0275element(527, "i", 136);
      \u0275\u0275text(528, "The Most World Class Instructors ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(529, "div", 130)(530, "div", 131)(531, "div", 132)(532, "div", 150)(533, "h3");
      \u0275\u0275text(534, "Certification for solid development of your Career");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(535, "p");
      \u0275\u0275text(536, "Certifications are a powerful way to enhance your skills, build credibility, and boost your career growth. In today\u2019s competitive job market, a professional certification");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(537, "ul", 134)(538, "li", 135);
      \u0275\u0275element(539, "i", 136);
      \u0275\u0275text(540, "Demonstrates Expertise ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(541, "li", 135);
      \u0275\u0275element(542, "i", 136);
      \u0275\u0275text(543, "Boosts Your Credibility ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(544, "li", 149);
      \u0275\u0275element(545, "i", 136);
      \u0275\u0275text(546, "Improves Job Security ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(547, "li", 149);
      \u0275\u0275element(548, "i", 136);
      \u0275\u0275text(549, "Facilitates Career Advancement ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(550, "li", 149);
      \u0275\u0275element(551, "i", 136);
      \u0275\u0275text(552, "Fosters Personal Growth ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(553, "div", 151)(554, "div", 139);
      \u0275\u0275element(555, "img", 152);
      \u0275\u0275elementStart(556, "div", 153);
      \u0275\u0275element(557, "img", 154);
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(558, "section", 155)(559, "div", 1)(560, "div", 156);
      \u0275\u0275element(561, "img", 157);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(562, "div", 158)(563, "div", 159)(564, "div", 160)(565, "div", 80)(566, "h2", 161);
      \u0275\u0275text(567, "Join over 5 Million Students");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(568, "p");
      \u0275\u0275text(569, "Get certified, master modern tech skills, and level up your career ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(570, "div", 162)(571, "div", 163)(572, "div", 164)(573, "h4")(574, "span", 165);
      \u0275\u0275text(575, "253,085");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(576, "p");
      \u0275\u0275text(577, "Students Enrolled");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(578, "div", 163)(579, "div", 164)(580, "h4")(581, "span", 166);
      \u0275\u0275text(582, "1,205");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(583, "p");
      \u0275\u0275text(584, "Total Courses");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(585, "div", 163)(586, "div", 164)(587, "h4")(588, "span", 167);
      \u0275\u0275text(589, "253,085");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(590, "p");
      \u0275\u0275text(591, "Students Worldwide");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(592, "div", 168)(593, "div", 169)(594, "div", 2)(595, "div", 170);
      \u0275\u0275element(596, "div", 171);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(597, "div", 172)(598, "div", 173)(599, "div", 48)(600, "h2", 174);
      \u0275\u0275text(601, "Want to share your knowledge? Join us a Mentor");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(602, "div", 175)(603, "ul")(604, "li", 176)(605, "div", 177)(606, "span", 178);
      \u0275\u0275element(607, "img", 179);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(608, "div", 180)(609, "h5", 86);
      \u0275\u0275text(610, "Project Management Professional");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(611, "p");
      \u0275\u0275text(612, "A globally recognized certification for project managers, PMP validates your ability to lead projects efficiently from start to finish. ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(613, "li", 176)(614, "div", 177)(615, "span", 181);
      \u0275\u0275element(616, "img", 182);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(617, "div", 180)(618, "h5", 86);
      \u0275\u0275text(619, "Fosters Personal Growth");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(620, "p");
      \u0275\u0275text(621, "Pursuing certifications pushes you to learn new things and grow professionally, increasing your confidence and job satisfaction.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(622, "li", 176)(623, "div", 177)(624, "span", 183);
      \u0275\u0275element(625, "img", 184);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(626, "div", 185)(627, "h5", 86);
      \u0275\u0275text(628, "Build skills your way, from labs to courses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(629, "p");
      \u0275\u0275text(630, "Courses come in various formats, including video tutorials, interactive assignments, quizzes, reading materials, and hands-on projects");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(631, "li", 186)(632, "div", 177)(633, "span", 187);
      \u0275\u0275element(634, "img", 188);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(635, "div", 185)(636, "h5", 86);
      \u0275\u0275text(637, "Get certified with 100+ certification courses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(638, "p");
      \u0275\u0275text(639, "Employers often value certifications when it comes to promotions and internal career advancement opportunities.");
      \u0275\u0275elementEnd()()()()()()()()()()();
      \u0275\u0275elementStart(640, "div", 189)(641, "div", 1)(642, "div", 190)(643, "span", 49);
      \u0275\u0275text(644, "New Courses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(645, "h2");
      \u0275\u0275text(646, "Featured Instructor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(647, "p");
      \u0275\u0275text(648, "95% of eLearning learners report our hands-on content directly helped their careers.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(649, "div", 191)(650, "div", 81)(651, "div", 192)(652, "div", 193)(653, "div", 194)(654, "a", 195);
      \u0275\u0275element(655, "img", 196);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(656, "div", 105)(657, "div", 197);
      \u0275\u0275element(658, "img", 198);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(659, "a", 199);
      \u0275\u0275element(660, "i", 200);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(661, "div", 201)(662, "h5", 86)(663, "a", 87);
      \u0275\u0275text(664, "Julian Adrose");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(665, "span", 202);
      \u0275\u0275text(666, "Angular Expert");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(667, "div", 203);
      \u0275\u0275element(668, "i", 204);
      \u0275\u0275elementStart(669, "span");
      \u0275\u0275text(670, "50 Students");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(671, "div", 192)(672, "div", 193)(673, "div", 194)(674, "a", 195);
      \u0275\u0275element(675, "img", 205);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(676, "div", 105)(677, "div", 197);
      \u0275\u0275element(678, "img", 206);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(679, "a", 199);
      \u0275\u0275element(680, "i", 200);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(681, "div", 201)(682, "h5", 86)(683, "a", 87);
      \u0275\u0275text(684, "Gallegos");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(685, "span", 202);
      \u0275\u0275text(686, "Angular Expert");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(687, "div", 203);
      \u0275\u0275element(688, "i", 204);
      \u0275\u0275elementStart(689, "span");
      \u0275\u0275text(690, "70 Students");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(691, "div", 192)(692, "div", 193)(693, "div", 194)(694, "a", 195);
      \u0275\u0275element(695, "img", 207);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(696, "div", 105)(697, "div", 197);
      \u0275\u0275element(698, "img", 208);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(699, "a", 199);
      \u0275\u0275element(700, "i", 200);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(701, "div", 201)(702, "h5", 86)(703, "a", 87);
      \u0275\u0275text(704, "Kristi");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(705, "span", 202);
      \u0275\u0275text(706, "Node Js");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(707, "div", 203);
      \u0275\u0275element(708, "i", 204);
      \u0275\u0275elementStart(709, "span");
      \u0275\u0275text(710, "60 Students");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(711, "div", 192)(712, "div", 193)(713, "div", 194)(714, "a", 195);
      \u0275\u0275element(715, "img", 209);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(716, "div", 105)(717, "div", 197);
      \u0275\u0275element(718, "img", 210);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(719, "a", 199);
      \u0275\u0275element(720, "i", 200);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(721, "div", 201)(722, "h5", 86)(723, "a", 87);
      \u0275\u0275text(724, "Pinero");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(725, "span", 202);
      \u0275\u0275text(726, "Python");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(727, "div", 203);
      \u0275\u0275element(728, "i", 204);
      \u0275\u0275elementStart(729, "span");
      \u0275\u0275text(730, "40 Students");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(731, "div", 211)(732, "div", 212)(733, "a", 57);
      \u0275\u0275text(734, "View all Instructors");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(735, "section", 213)(736, "div", 1)(737, "div", 190)(738, "span", 49);
      \u0275\u0275text(739, "Check out these real reviews");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(740, "h2");
      \u0275\u0275text(741, "Users love us Don't take it from us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(742, "p");
      \u0275\u0275text(743, "95% of eLearning learners report our hands-on content directly helped their careers.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(744, "div", 214)(745, "div", 2)(746, "div", 215)(747, "div", 216);
      \u0275\u0275element(748, "img", 217);
      \u0275\u0275elementStart(749, "span", 218);
      \u0275\u0275element(750, "img", 219);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(751, "div", 220)(752, "div", 221)(753, "owl-carousel-o", 222);
      \u0275\u0275template(754, Home4Component_ng_template_754_Template, 13, 0, "ng-template", 223)(755, Home4Component_ng_template_755_Template, 13, 0, "ng-template", 223);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(756, "div", 224);
      \u0275\u0275element(757, "div", 225);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(758, "div", 226)(759, "div", 227)(760, "owl-carousel-o", 222);
      \u0275\u0275template(761, Home4Component_ng_template_761_Template, 3, 0, "ng-template", 223)(762, Home4Component_ng_template_762_Template, 3, 0, "ng-template", 223)(763, Home4Component_ng_template_763_Template, 3, 0, "ng-template", 223)(764, Home4Component_ng_template_764_Template, 3, 0, "ng-template", 223)(765, Home4Component_ng_template_765_Template, 3, 0, "ng-template", 223)(766, Home4Component_ng_template_766_Template, 3, 0, "ng-template", 223);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(767, "img", 228);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(768, "section", 229)(769, "div", 1)(770, "div", 190)(771, "span", 49);
      \u0275\u0275text(772, "News & Events");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(773, "h2");
      \u0275\u0275text(774, "Our Latest Updates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(775, "p");
      \u0275\u0275text(776, "Dont Miss Stay Updated with the Latest Articles and Insights");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(777, "div", 230)(778, "div", 231)(779, "div", 232)(780, "div", 233)(781, "a", 87);
      \u0275\u0275element(782, "img", 234);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(783, "div", 235)(784, "a", 236);
      \u0275\u0275text(785, "LMS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(786, "h4", 86)(787, "a", 87);
      \u0275\u0275text(788, "Promoting Health & Well being in Schools");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(789, "p", 237);
      \u0275\u0275element(790, "i", 238);
      \u0275\u0275text(791, "14 Sep 2022");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(792, "div", 231)(793, "div", 232)(794, "div", 233)(795, "a", 87);
      \u0275\u0275element(796, "img", 239);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(797, "div", 235)(798, "a", 236);
      \u0275\u0275text(799, "Sales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(800, "h4", 86)(801, "a", 87);
      \u0275\u0275text(802, "Why an LMS is Essential for Modern Education");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(803, "p", 237);
      \u0275\u0275element(804, "i", 238);
      \u0275\u0275text(805, "14 Sep 2022");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(806, "div", 231)(807, "div", 232)(808, "div", 233)(809, "a", 87);
      \u0275\u0275element(810, "img", 240);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(811, "div", 235)(812, "a", 236);
      \u0275\u0275text(813, "Website Design");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(814, "h4", 86)(815, "a", 87);
      \u0275\u0275text(816, "11 Tips to Help You Get New Clients with the design");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(817, "p", 237);
      \u0275\u0275element(818, "i", 238);
      \u0275\u0275text(819, "14 Sep 2022");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(820, "div", 211)(821, "div", 97)(822, "a", 57);
      \u0275\u0275text(823, "View all Updates");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(824, "img", 241);
      \u0275\u0275elementEnd();
      \u0275\u0275element(825, "app-footer");
    }
    if (rf & 2) {
      \u0275\u0275advance(103);
      \u0275\u0275property("routerLink", ctx.routes.courseList);
      \u0275\u0275advance(12);
      \u0275\u0275property("countUp", 10)("options", \u0275\u0275pureFunction0(58, _c0));
      \u0275\u0275advance(12);
      \u0275\u0275property("countUp", 215)("options", \u0275\u0275pureFunction0(59, _c0));
      \u0275\u0275advance(12);
      \u0275\u0275property("countUp", 10)("options", \u0275\u0275pureFunction0(60, _c0));
      \u0275\u0275advance(12);
      \u0275\u0275property("countUp", 10)("options", \u0275\u0275pureFunction0(61, _c0));
      \u0275\u0275advance(25);
      \u0275\u0275property("routerLink", ctx.routes.courseCategory);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.courseCategory);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.courseCategory);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.courseCategory);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.courseCategory);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.courseCategory);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.courseCategory);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.courseCategory);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseCategory3);
      \u0275\u0275advance(18);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(15);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(15);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(15);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(13);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(15);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(13);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(15);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(15);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(15);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(13);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(15);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(12);
      \u0275\u0275property("routerLink", ctx.routes.courseList);
      \u0275\u0275advance(197);
      \u0275\u0275property("routerLink", ctx.routes.instructorList);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(11);
      \u0275\u0275property("routerLink", ctx.routes.instructorList);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(11);
      \u0275\u0275property("routerLink", ctx.routes.instructorList);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(11);
      \u0275\u0275property("routerLink", ctx.routes.instructorList);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.instructorList);
      \u0275\u0275advance(20);
      \u0275\u0275property("options", ctx.realReviews);
      \u0275\u0275advance(7);
      \u0275\u0275property("options", ctx.leadGroup);
      \u0275\u0275advance(21);
      \u0275\u0275property("routerLink", ctx.routes.blog_details);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.blog_details);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.blog_details);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.blog_details);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.blog_details);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.blog_grid);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.blog_details);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.blog_details);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.blog_details);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.blog_grid);
    }
  }, dependencies: [CommonModule, FooterComponent, RouterLink, CarouselModule, CarouselComponent, CarouselSlideDirective, SlickCarouselModule, CountUpModule, CountUpDirective, MatSelectModule, MatSelect, MatOption], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Home4Component, [{
    type: Component,
    args: [{ selector: "app-home4", imports: [CommonModule, FooterComponent, RouterLink, CarouselModule, SlickCarouselModule, CountUpModule, MatSelectModule], template: `
<!-- Home Banner -->
<section class="banner-section-four d-flex align-items-center">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-6 col-12" data-aos="fade-up">
        <div class="home-slide-face">
          <div class="banner-content">
            <h6>The Leader in Online Learning</h6>
            <h1>Engaging &  Accessible Online Courses For All</h1>
            <p>Our specialized online courses are designed to bring the classroom experience to you, no matter where you are.</p>
          </div>
          <div class="banner-form">
            <form class="form" name="store" id="store" method="post" (ngSubmit)="onSubmit()">
              <div class="form-inner1">
                <div class="input-group">
                  <span class="drop-detail home5-select border-end">
                    <mat-select class="custom-mat-select select" placeholder="Select Category" name="storeID">
                      <mat-option value="0">Select Category</mat-option>
                      <mat-option value="1">Development</mat-option>
                      <mat-option value="1">Marketing</mat-option>
                    </mat-select>
                  </span>
                  <input type="text" class="form-control" placeholder="Search for Courses, Instructors">
                  <button class="btn btn-secondary sub-btn1" type="submit"><i class="fa-solid fa-magnifying-glass me-2"></i>Search</button>
                </div>
              </div>
            </form>
          </div>
          <div class="trust-user">
            <p>Trusted by over 15K Users worldwide since 2024</p>
            <div class="rating">							
              <i class="fas fa-star filled"></i>
              <i class="fas fa-star filled"></i>
              <i class="fas fa-star filled"></i>
              <i class="fas fa-star filled"></i>
              <i class="fas fa-star filled"></i>									
              <span>4.9 / 200 Review</span>	
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="banner-image">
          <div class="row position-relative">
            <div class="logo-cover">
              <img src="assets/img/icons/icon-30.svg" alt="img" class="img-fluid img-05 d-none d-xl-flex aos" data-aos="zoom-in">
            </div>
            <div class="col-md-6 d-flex">
              <div class="flex-fill">
                <img src="assets/img/hero/hero-3.jpg" alt="img" class="img-fluid h-100 flex-fill img-01 aos" data-aos="fade-bottm">
              </div>
            </div>
            <div class="col-md-6 d-flex flex-column">
              <div class="flex-fill mb-3">
                <img src="assets/img/hero/hero-4.jpg" alt="img" class="img-fluid img-02 aos" data-aos="fade-down">
              </div>
              <div class="flex-fill">
                <img src="assets/img/hero/hero-5.jpg" alt="img" class="img-fluid img-03 aos" data-aos="fade-up">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Shapes -->
    <div class="shapes">
      <img class="shapes-one" src="assets/img/bg/bg-10.png" alt="Img">
      <img class="shapes-two" src="assets/img/bg/bg-11.png" alt="Img">
      <img class="shapes-middle" src="assets/img/bg/bg-12.png" alt="Img">
    </div>
    <!-- /Shapes -->
  </div>
</section>
<!-- /Home Banner -->

				<!-- Vision Section -->
				<div class="vision-section">
					<div class="container">
						<div class="row row-gap-4">
							<div class="col-xl-3 col-lg-6 d-flex">
								<div class="vision-item flex-fill">
									<span class="vision-icon border">
										<img src="assets/img/icons/vision-icon-01.svg" alt="img">
									</span>
									<p>Get certified with 100+ certification courses</p>
								</div>
							</div>
							<div class="col-xl-3 col-lg-6 d-flex">
								<div class="vision-item flex-fill">
									<span class="vision-icon border">
										<img src="assets/img/icons/vision-icon-02.svg" alt="img">
									</span>
									<p>Keep up with the latest in cloud</p>
								</div>
							</div>
							<div class="col-xl-3 col-lg-6 d-flex">
								<div class="vision-item flex-fill">
									<span class="vision-icon border">
										<img src="assets/img/icons/vision-icon-03.svg" alt="img">
									</span>
									<p>Build skills your way, from labs to courses</p>
								</div>
							</div>
							<div class="col-xl-3 col-lg-6 d-flex">
								<div class="vision-item flex-fill">
									<span class="vision-icon border">
										<img src="assets/img/icons/vision-icon-04.svg" alt="img">
									</span>
									<p>Stay motivated with engaging instructors</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- /Vision Section -->

				<!-- About Section -->
				<section class="about-section">
					<div class="container">
						<div class="row align-items-center row-gap-4">
							<div class="col-lg-7 wow fadeInLeft order-lg-1 order-xs-2 order-sm-2" data-aos="fade-up">
								<div class="section-header">
									<span class="fw-medium text-secondary fs-18 fw-bold mb-2 d-inline-block">Learn with DreamLMS</span>
									<h2 class="mb-0">Get Trained By Experts & Professionals around the World</h2>
								</div>
								<div class="about-content">
									<p>Mentor is essential for personal and professional growth. This blog discusses the key benefits of professional mentoring, including skill development, networking, and career advancement, while also offering strategies for finding the right mentor.</p>
									<div class="about-img">
										<div class="row row-gap-4">
											<div class="col-md-4">
												<img src="assets/img/about/about-3.jpg" class="img-fluid" alt="img">
											</div>
											<div class="col-md-4">
												<img src="assets/img/about/about-4.jpg" class="img-fluid" alt="img">
											</div>
											<div class="col-md-4">
												<img src="assets/img/about/about-5.jpg" class="img-fluid" alt="img">
											</div>
										</div>
									</div>
									<a [routerLink]="routes.courseList" class="btn btn-secondary btn-xl">Learn more</a>
								</div>							
							</div>
			
							<div class="col-lg-5 order-lg-2 order-xs-1 order-sm-1">
								<div class="stylist-gallery">
									<div class="row row-gap-4">
										<div class="col-lg-6 col-md-6 col-sm-12 col-12" data-aos="fade-down">
											<div class="about-image border count-one d-flex align-items-center justify-content-center flex-fill project-details">
												<div class="about-count">
													<div class="course-img">
														<img src="assets/img/icons/count-one.svg" alt="Img">
													</div>
													<div class="count-content-three course-count ms-0">
														<h4><span class="counterUp" [countUp]="10" [options]="{ enableScrollSpy: true }">10</span>K</h4>
														<p class="mb-0">Online Courses</p>
													</div>
												</div>
											</div>
										</div>
										<div class="col-lg-6 col-md-6 col-sm-12 col-12" data-aos="fade-down">
											<div class="about-image border count-two d-flex align-items-center justify-content-center flex-fill project-details">
												<div class="about-count">
													<div class="course-img">
														<img src="assets/img/icons/count-two.svg" alt="Img">
													</div>
													<div class="count-content-three course-count ms-0">
														<h4><span class="counterUp" [countUp]="215" [options]="{ enableScrollSpy: true }">215</span>+</h4>
														<p class="mb-0">Expert Tutors</p>
													</div>
												</div>
											</div>
										</div>
										<div class="col-lg-6 col-md-6 col-sm-12 col-12"  data-aos="fade-bottm" data-wow-delay="1.5">
											<div class="about-image border count-three d-flex align-items-center justify-content-center flex-fill project-details">
												<div class="about-count">
													<div class="course-img">
														<img src="assets/img/icons/count-three.svg" alt="Img">
													</div>
													<div class="count-content-three course-count ms-0">
														<h4><span class="counterUp" [countUp]="10" [options]="{ enableScrollSpy: true }">10</span>K</h4>
														<p class="mb-0">Ceritified Courses</p>
													</div>
												</div>
											</div>
										</div>
										<div class="col-lg-6 col-md-6 col-sm-12 col-12" data-aos="fade-top" data-wow-delay="0.5">
											<div class="about-image border count-four d-flex align-items-center justify-content-center flex-fill project-details">
												<div class="about-count">
													<div class="course-img">
														<img src="assets/img/icons/count-four.svg" alt="Img">
													</div>
													<div class="count-content-three course-count ms-0">
														<h4><span class="counterUp" [countUp]="10" [options]="{ enableScrollSpy: true }">10</span>K</h4>
														<p class="mb-0">Online Students</p> 
													</div>
												</div>
											</div>
										</div>
									</div>									
									<div class="about-bg">
										<img src="assets/img/bg/bg-8.png" alt="img" class="about-02">
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="about-bg">
						<img src="assets/img/bg/bg-7.png" alt="img" class="about-01">						
						<img src="assets/img/bg/bg-9.png" alt="img" class="about-03">
					</div>
				</section>
				<!-- /About us -->

				<!-- Top Categories -->
				<section class="topcategory-sec">
					<div class="container">
						<div class="section-header text-center">
							<span class="fw-medium text-secondary fs-18 fw-bold mb-2 d-inline-block">Favourite Course</span>
							<h2>Top Category</h2>
							<p>Discover our featured courses, specially curated to help you gain in-demand skills</p>
						</div>
						<div class="row">
								
							<div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex" data-aos="fade-down">
								<div class="categories-item categories-item-four flex-fill">
									<div class="categories-icon">
										<img src="assets/img/icons/category-1.svg" alt="Angular Development">
									</div>
									<h5 class="title"><a [routerLink]="routes.courseCategory">Angular Development</a></h5>
									<p>220 Instructors</p>
								</div>
							</div>
							
							<div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex" data-aos="fade-down">
								<div class="categories-item categories-item-four flex-fill">
									<div class="categories-icon">
										<img src="assets/img/icons/category-9.svg" alt="Python Development">
									</div>
									<h5 class="title"><a [routerLink]="routes.courseCategory">Nodeman Development</a></h5>
									<p>124 Instructors</p>
								</div>
							</div>						
							
							<div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex" data-aos="fade-down">
								<div class="categories-item categories-item-four flex-fill">
									<div class="categories-icon">
										<img src="assets/img/icons/category-icon10.svg" alt="Node Js Development">
									</div>
									<h5 class="title"><a [routerLink]="routes.courseCategory">Node Js Development</a></h5>
									<p>120 Instructors</p>
								</div>
							</div>
							
							<div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex" data-aos="fade-down">
								<div class="categories-item categories-item-four flex-fill">
									<div class="categories-icon">
										<img src="assets/img/icons/category-11.svg" alt="PHP Development">
									</div>
									<h5 class="title"><a [routerLink]="routes.courseCategory">AWS Development</a></h5>
									<p>285 Instructors</p>
								</div>
							</div>
	
							<div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex" data-aos="fade-down">
								<div class="categories-item categories-item-four flex-fill">
									<div class="categories-icon">
										<img src="assets/img/icons/category-5.svg" alt="Docker Development">
									</div>
									<h5 class="title"><a [routerLink]="routes.courseCategory">Strapi CMS</a></h5>
									<p>99 Instructors</p>
								</div>
							</div>
	
							<div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex" data-aos="fade-down">
								<div class="categories-item categories-item-four flex-fill">
									<div class="categories-icon">
										<img src="assets/img/icons/category-6.svg" alt="Swift Development">
									</div>
									<h5 class="title"><a [routerLink]="routes.courseCategory">Swift Development</a></h5>
									<p>64 Instructors</p>
								</div>
							</div>
	
							<div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex" data-aos="fade-down">
								<div class="categories-item categories-item-four flex-fill">
									<div class="categories-icon">
										<img src="assets/img/icons/category-7.svg" alt="Photography">
									</div>
									<h5 class="title"><a [routerLink]="routes.courseCategory">VUE JS Development</a></h5>
									<p>32 Instructors</p>
								</div>
							</div>
	
							<div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex">
								<div class="categories-item categories-item-four flex-fill" data-aos="fade-up">
									<div class="categories-icon">
										<img src="assets/img/icons/category-8.svg" alt="Business">
									</div>
									<h5 class="title"><a [routerLink]="routes.courseCategory">ApostropheCMS</a></h5>
									<p>21 Instructors</p>
								</div>
							</div>	
						</div>				
						<!-- View all Category -->
						<div class="more-details text-center" data-aos="fade-down">
							<a [routerLink]="routes.courseCategory3" class="btn btn-secondary btn-xl">View all Category</a>
						</div>
						<!-- /View all Category -->
					</div>
				</section>	
				<!-- /Top Categories -->	
			
				<!-- Feature Course -->		
				<section class="featured-courses-sec">				
					<div class="patter-bg">
						<img class="patter-one" src="assets/img/bg/bg-13.png" alt="Img">
					</div>
					<div class="container">
						<div class="section-header text-center">
							<span class="fw-medium text-secondary fs-18 fw-bold mb-2 d-inline-block">What\u2019s New</span>
							<h2>Featured Courses</h2>
							<p>Get certified, master modern tech skills, and level up your career</p>
						</div>
						<div class="featured-courses-two">
							<div class="row">

								<!-- Featured Courses -->
								<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 d-flex" data-aos="fade-down">
									<div class="course-item course-item-four mx-0">
										<div class="course-img">
											<a [routerLink]="routes.courseDetails">
												<img class="img-fluid" alt="Img" src="assets/img/course/course-10.jpg">
											</a>
											<div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
												<a href="javascript:void(0);" class="course-name">PHP</a>
											</div>
										</div>
										<div class="course-content">	
											<div class="rating">							
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<span class="ms-2">203 reviews</span>
											</div>												
											<h3 class="title"><a [routerLink]="routes.courseDetails">The Complete Web Developer PHP framework Course 2.0</a></h3>
											<div class="user-info">
												<p class="user-name"><a [routerLink]="routes.instructorDetails" class="link-info">Emily Williams</a></p>
												<p class="course-level">Expert</p>
											</div>
											<div class="course-info">
												<p class="course-time"><i class="fa-regular fa-clock me-2"></i>6hr 30min</p>
												<h5 class="price">$400 <span>$99.00</span></h5>
											</div>
										</div>
									</div>
								</div>
								<!-- /Featured Courses -->

								<!-- Featured Courses -->
								<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 d-flex" data-aos="fade-down">
									<div class="course-item course-item-four mx-0">
										<div class="course-img">
											<a [routerLink]="routes.courseDetails">
												<img class="img-fluid" alt="Img" src="assets/img/course/course-11.jpg">
											</a>
											<div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
												<a href="javascript:void(0);" class="course-name">Self Improvements</a>
											</div>
										</div>
										<div class="course-content">	
											<div class="rating">							
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<span class="ms-2">5.0 (22 Reviews)</span>
											</div>												
											<h3 class="title"><a [routerLink]="routes.courseDetails">Building Your Personal Brand: Tips for Career Success</a></h3>
											<div class="user-info">
												<p class="user-name"><a [routerLink]="routes.instructorDetails"  class="link-info">Brook Salaine</a></p>
												<p class="course-level text-warning">Intermediate</p>
											</div>
											<div class="course-info">
												<p class="course-time"><i class="fa-regular fa-clock me-2"></i>1hr 20min
												</p>
												<h5 class="price">$125</h5>
											</div>
										</div>
									</div>
								</div>
								<!-- /Featured Courses -->

								<!-- Featured Courses -->
								<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 d-flex" data-aos="fade-down">
									<div class="course-item course-item-four mx-0">
										<div class="course-img">
											<a [routerLink]="routes.courseDetails">
												<img class="img-fluid" alt="Img" src="assets/img/course/course-12.jpg">
											</a>
											<div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
												<a href="javascript:void(0);" class="course-name">Finance</a>
											</div>
										</div>
										<div class="course-content">	
											<div class="rating">							
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<span class="ms-2">4.0 (15 Reviwes) </span>
											</div>												
											<h3 class="title"><a [routerLink]="routes.courseDetails">Strength Training 101: Building a Solid Foundation</a></h3>
											<div class="user-info">
												<p class="user-name"><a [routerLink]="routes.instructorDetails"  class="link-info">Mark Richardson</a></p>
												<p class="course-level text-purple">Basic</p>
											</div>
											<div class="course-info">
												<p class="course-time"><i class="fa-regular fa-clock me-2"></i>2hr 30min
												</p>
												<h5 class="price">$3560</h5>
											</div>
										</div>
									</div>
								</div>
								<!-- /Featured Courses -->

								<!-- Featured Courses -->
								<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 d-flex" data-aos="fade-down">
									<div class="course-item course-item-four mx-0">
										<div class="course-img">
											<a [routerLink]="routes.courseDetails">
												<img class="img-fluid" alt="Img" src="assets/img/course/course-13.jpg">
											</a>
											<div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
												<a href="javascript:void(0);" class="course-name">SEO</a>
											</div>
										</div>
										<div class="course-content">	
											<div class="rating">							
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<span class="ms-2">203 reviews</span>
											</div>												
											<h3 class="title"><a [routerLink]="routes.courseDetails">Digital Marketing Strategies for Business Growth</a></h3>
											<div class="user-info">
												<p class="user-name"><a [routerLink]="routes.instructorDetails"  class="link-info">Laura Bennett</a></p>
												<p class="course-level text-purple">Basic</p>
											</div>
											<div class="course-info">
												<p class="course-time"><i class="fa-regular fa-clock me-2"></i>6hr 30min</p>
												<h5 class="price">$350 <span>$699.00</span></h5>
											</div>
										</div>
									</div>
								</div>
								<!-- /Featured Courses -->

								<!-- Featured Courses -->
								<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 d-flex" data-aos="fade-down">
									<div class="course-item course-item-four mx-0">
										<div class="course-img">
											<a [routerLink]="routes.courseDetails">
												<img class="img-fluid" alt="Img" src="assets/img/course/course-14.jpg">
											</a>
											<div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
												<a href="javascript:void(0);" class="course-name">Development</a>
											</div>
										</div>
										<div class="course-content">	
											<div class="rating">							
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<span class="ms-2">5.0 (05 Reviews)</span>
											</div>												
											<h3 class="title"><a [routerLink]="routes.courseDetails">Web Development for Beginners: HTML, CSS, and JavaScript</a></h3>
											<div class="user-info">
												<p class="user-name"><a [routerLink]="routes.instructorDetails"  class="link-info">David Morgan</a></p>
												<p class="course-level">Expert</p>
											</div>
											<div class="course-info">
												<p class="course-time"><i class="fa-regular fa-clock me-2"></i>1hr 15min
												</p>
												<h5 class="price">$150</h5>
											</div>
										</div>
									</div>
								</div>
								<!-- /Featured Courses -->

								<!-- Featured Courses -->
								<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 d-flex" data-aos="fade-down">
									<div class="course-item course-item-four mx-0">
										<div class="course-img">
											<a [routerLink]="routes.courseDetails">
												<img class="img-fluid" alt="Img" src="assets/img/course/course-15.jpg">
											</a>
											<div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
												<a href="javascript:void(0);" class="course-name">PHP</a>
											</div>
										</div>
										<div class="course-content">	
											<div class="rating">							
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<span class="ms-2">203 reviews</span>
											</div>												
											<h3 class="title"><a [routerLink]="routes.courseDetails">Photography Basics: Understanding Composition and Lighting</a></h3>
											<div class="user-info">
												<p class="user-name"><a [routerLink]="routes.instructorDetails"  class="link-info">Maria Lopez</a></p>
												<p class="course-level text-pink">Advanced</p>
											</div>
											<div class="course-info">
												<p class="course-time"><i class="fa-regular fa-clock me-2"></i>2hr 40min
												</p>
												<h5 class="price">$250</h5>
											</div>
										</div>
									</div>
								</div>
								<!-- /Featured Courses -->				

							</div>
						</div>
						<!-- View all  Courses -->
						<div class="col-lg-12" data-aos="fade-up">
							<div class="more-details text-center">
								<a [routerLink]="routes.courseList" class="btn btn-secondary btn-xl">View all  Courses </a>
							</div>
						</div>
						<!-- /View all  Courses -->
					</div>
				</section>	
				<!-- /Feature Course -->

				<!-- Master Skills -->
				<section class="master-skills-sec pt-0">
					<div class="container">	
						<div class="row">
							<div class="col-lg-7 mx-auto">
								<div class="section-header text-center">
									<span class="fw-medium text-secondary fs-18 fw-bold mb-2 d-inline-block">What\u2019s New</span>
									<h2>Master the skills to drive your career</h2>
									<p>Get certified, master modern tech skills, and level up your career \u2014 whether you\u2019re starting out or a seasoned pro. 95% of eLearning learners report.</p>
								</div>
							</div>
						</div>
						<!-- Course Info-->
						<div class="course-info-two">
							<div class="skills-item">
								<div class="skills-wrap">
									<div class="row row-gap-4 align-items-center">
		
										<!-- Master skills Content -->
										<div class="col-xl-5 col-lg-6 col-md-12 order-lg-0 order-md-0 order-0" data-aos="fade-up">
											<h3>Award Winning Course Management</h3>
											<p>An award-winning course management system (CMS) or program is typically recognized for its exceptional quality, innovation, and effectiveness in helping both instructors and students succeed.</p>
											
											<ul class="list-unstyled heading-color mb-4">
												<li class="d-flex mb-3">
													<i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>Interactive Tools for Engagement
												</li>
												<li class="d-flex mb-3">
													<i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>Customizable Course Creation
												</li>
												<li class="d-flex mb-3 aos-init aos-animate">
													<i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>Robust Analytics and Reporting
												</li>
												<li class="d-flex mb-3 aos-init aos-animate">
													<i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>Collaborative and Peer to Peer Learning
												</li>
												<li class="d-flex mb-3 aos-init aos-animate">
													<i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>The Most World Class Instructors
												</li>
											</ul>
										</div>
										<!-- /Master skills Content -->
										
										<!-- Master skills Image -->
										<div class="col-xl-7 col-lg-6 col-md-12 order-lg-1 order-md-1 order-1" data-aos="fade-up">
											<div class="join-mentor-img">
												<img src="assets/img/feature/feature-18.jpg" alt="Img" class="img-fluid rounded-4">								
												<div class="joing-icon-award bg-warning">
													<img src="assets/img/icons/award-01.svg" alt="Img" class="img-fluid">
												</div>
											</div>
										</div>
										<!-- /Master skills Image -->
									</div>
	
								</div>
							</div>

							<div class="skills-item">
								<div class="skills-wrap skill-center">
	
									<div class="row  row-gap-4 align-items-center">
										<!-- Master skills Content -->
										<div class="col-xl-7 col-lg-7 col-md-12 order-lg-2 order-md-3 order-3" data-aos="fade-up">
											<div class="join-mentor-img">
												<img src="assets/img/feature/feature-19.jpg" alt="Img" class="img-fluid rounded-4">								
												<div class="joing-icon-award bg-success">
													<img src="assets/img/icons/award-02.svg" alt="Img" class="img-fluid">
												</div>
											</div>
										</div>
										<!-- /Master skills Content -->
										
										<!-- Master skills Image -->
										<div class="col-xl-5 col-lg-5 col-md-12 order-lg-3 order-md-2 order-2" data-aos="fade-up"> 
											<h3>Learn anything from anywhere anytime</h3>
											<p>In today\u2019s fast-paced, digital world, the ability to learn anything, from anywhere, and at any time is more accessible than ever. Whether you are looking to expand your knowledge, gain new skills.</p>
											<ul class="list-unstyled heading-color mb-4">
												<li class="d-flex mb-3">
													<i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>Access to a World of Knowledge
												</li>
												<li class="d-flex mb-3">
													<i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>Diverse Learning Formats
												</li>
												<li class="d-flex mb-3 aos-init">
													<i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>Learn at Your Own Pace
												</li>
												<li class="d-flex mb-3 aos-init">
													<i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>Affordable and Flexible Pricing
												</li>
												<li class="d-flex mb-3 aos-init">
													<i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>The Most World Class Instructors
												</li>
											</ul>
										</div>
										<!-- /Master skills Image -->
									</div>
								</div>
							</div>

							<div class="skills-item">
								<div class="skills-wrap">
	
									<div class="row row-gap-4 align-items-center">
	
										<!-- Master skills Content -->
										<div class="col-xl-5 col-lg-7 col-md-12 order-lg-4 order-md-4 order-4" data-aos="fade-up"> 
											<h3>Certification for solid development of your Career</h3>
											<p>Certifications are a powerful way to enhance your skills, build credibility, and boost your career growth. In today\u2019s competitive job market, a professional certification</p>
											<ul class="list-unstyled heading-color mb-4">
												<li class="d-flex mb-3">
													<i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>Demonstrates Expertise
												</li>
												<li class="d-flex mb-3">
													<i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>Boosts Your Credibility
												</li>
												<li class="d-flex mb-3 aos-init">
													<i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>Improves Job Security
												</li>
												<li class="d-flex mb-3 aos-init">
													<i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>Facilitates Career Advancement
												</li>
												<li class="d-flex mb-3 aos-init">
													<i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>Fosters Personal Growth
												</li>
											</ul>
										</div>
										<!-- /Master skills Content -->
										
										<!-- Master skills Image -->
										<div class="col-xl-7 col-lg-5 col-md-12 order-lg-5 order-md-5 order-5" data-aos="fade-up"> 
											<div class="join-mentor-img">
												<img src="assets/img/feature/feature-20.jpg" alt="Img" class="img-fluid rounded-4">								
												<div class="joing-icon-award bg-secondary">
													<img src="assets/img/icons/award-03.svg" alt="Img" class="img-fluid">
												</div>
											</div>
										</div>								
										<!-- /Master skills Image -->
	
									</div>
	
								</div>
							</div>
						</div>
						<!-- /Course Info -->
					</div>
				</section>
				<!-- /Master Skills -->

				<!-- Testimonial -->
				<section class="testimonial-sec">
					<div class="container">
						<div class="testimonial-two-img">
							<img src="assets/img/bg/bg-14.png" alt="Img" class="img-fluid">
						</div>
						<div class="testimonial-subhead-two">
							<div class="col-md-12" data-aos="fade-down">						
								<div class="testimonial-inner">						
									<div class="section-header text-center">
										<h2 data-aos="fade-down">Join over 5 Million Students</h2>
										<p>Get certified, master modern tech skills, and level up your career </p>
									</div>
									<div class="row text-center">
										<div class="col-md-4 col-sm-12" data-aos="fade-up">
											<div class="course-count-two course-count border">
												<h4><span class="counterUp text-secondary">253,085</span></h4>
												<p>Students Enrolled</p>
											</div>
										</div>
										<div class="col-md-4 col-sm-12" data-aos="fade-up">
											<div class="course-count-two  course-count border">
												<h4><span class="counterUp text-success">1,205</span></h4>
												<p>Total Courses</p>
											</div>
										</div>
										<div class="col-md-4 col-sm-12" data-aos="fade-up">
											<div class="course-count-two  course-count border">
												<h4><span class="counterUp text-primary" >253,085</span></h4>
												<p>Students Worldwide</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<!-- /Testimonial -->

				<!-- Share your knowledge -->
				<div class="knowledge-sec">
					<div class="container-fluid">
						<div class="row align-items-center">
							<div class="col-lg-6 col-sm-12 ps-0">
								<div class="featured-img-1"></div>
							</div>
							<div class="col-lg-6 col-sm-12 p-0" data-aos="fade-up">
								<div class="joing-group">
									<div class="section-header">
										<h2 class="mb-2">Want to share your knowledge? Join us a Mentor</h2>
									</div>
									<div class="joing-list">
										<ul>
											<li data-aos="fade-bottom">
												<div class="joing-header">
													<span class="joing-icon bg-primary">
														<img src="assets/img/icons/joing-01.svg" alt="Img" class="img-fluid">
													</span>
													<div class="joing-content">
														<h5 class="title">Project Management Professional</h5>														
														<p>A globally recognized certification for project managers, PMP validates your ability to lead projects efficiently from start to finish. </p>
													</div>
												</div>
											</li>
											<li data-aos="fade-bottom">
												<div class="joing-header">
													<span class="joing-icon bg-warning">
														<img src="assets/img/icons/joing-02.svg" alt="Img" class="img-fluid">
													</span>
													<div class="joing-content">
														<h5 class="title">Fosters Personal Growth</h5>
														<p>Pursuing certifications pushes you to learn new things and grow professionally, increasing your confidence and job satisfaction.</p>
													</div>
												</div>
											</li>
											<li data-aos="fade-bottom">
												<div class="joing-header">
													<span class="joing-icon bg-success">
														<img src="assets/img/icons/joing-03.svg" alt="Img" class="img-fluid">
													</span>
													<div class="joing-content aos">
														<h5 class="title">Build skills your way, from labs to courses</h5>
														<p>Courses come in various formats, including video tutorials, interactive assignments, quizzes, reading materials, and hands-on projects</p>
													</div>
												</div>
											</li>
											<li data-aos="fade-bottom" class="mb-0">
												<div class="joing-header">
													<span class="joing-icon bg-secondary">
														<img src="assets/img/icons/joing-04.svg" alt="Img" class="img-fluid">
													</span>
													<div class="joing-content aos">
														<h5 class="title">Get certified with 100+ certification courses</h5>
														<p>Employers often value certifications when it comes to promotions and internal career advancement opportunities.</p>
													</div>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- /Share your knowledge -->

				<!-- Feature Instructors -->
				<div class="feature-instructors-sec">
					<div class="container">
						<div class="section-header text-center" data-aos="fade-up">
							<span class="fw-medium text-secondary fs-18 fw-bold mb-2 d-inline-block">New Courses</span>
							<h2>Featured Instructor</h2>
							<p>95% of eLearning learners report our hands-on content directly helped their careers.</p>
						</div>
						<!-- Featured Instructor -->
						<div class="featured-instructor-two">
							<div class="row">
								<div class="col-xl-3 col-lg-6 col-md-6 col-sm-12" data-aos="fade-up">
									<div class="instructor-item instructor-item-four">
										<div class="instructors-img ">
											<a [routerLink]="routes.instructorList" tabindex="0">
												<img class="img-fluid" alt="Img" src="assets/img/instructor/instructor-01.jpg">
											</a>
											<div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
												<div class="featured-img">
													<img src="assets/img/icons/category-1.svg" alt="Img" class="img-fluid">
												</div>
												<a href="javascript:void(0);" class="favourite ms-auto">
													<i class="isax isax-heart"></i>
												</a>
											</div>
										</div>
										<div class="instructor-content">
											<h5 class="title">
												<a [routerLink]="routes.instructorDetails">Julian Adrose</a>
											</h5>
											<span class="designation">Angular Expert</span>
											<div class="student-count">
												<i class="fa-solid fa-user-group me-2"></i><span>50 Students</span>
											</div>
										</div>
									</div>
								</div>
								<div class="col-xl-3 col-lg-6 col-md-6 col-sm-12" data-aos="fade-up">
									<div class="instructor-item instructor-item-four">
										<div class="instructors-img ">
											<a [routerLink]="routes.instructorList" tabindex="0">
												<img class="img-fluid" alt="Img" src="assets/img/instructor/instructor-02.jpg">
											</a>
											<div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
												<div class="featured-img">
													<img src="assets/img/icons/category-2.svg" alt="Img" class="img-fluid">
												</div>
												<a href="javascript:void(0);" class="favourite ms-auto">
													<i class="isax isax-heart"></i>
												</a>
											</div>
										</div>
										<div class="instructor-content">
											<h5 class="title">
												<a [routerLink]="routes.instructorDetails">Gallegos</a>
											</h5>
											<span class="designation">Angular Expert</span>
											<div class="student-count">
												<i class="fa-solid fa-user-group me-2"></i><span>70 Students</span>
											</div>
										</div>
									</div>
								</div>
								<div class="col-xl-3 col-lg-6 col-md-6 col-sm-12" data-aos="fade-up">
									<div class="instructor-item instructor-item-four">
										<div class="instructors-img ">
											<a [routerLink]="routes.instructorList" tabindex="0">
												<img class="img-fluid" alt="Img" src="assets/img/instructor/instructor-03.jpg">
											</a>
											<div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
												<div class="featured-img">
													<img src="assets/img/icons/category-3.svg" alt="Img" class="img-fluid">
												</div>
												<a href="javascript:void(0);" class="favourite ms-auto">
													<i class="isax isax-heart"></i>
												</a>
											</div>
										</div>
										<div class="instructor-content">
											<h5 class="title">
												<a [routerLink]="routes.instructorDetails">Kristi</a>
											</h5>
											<span class="designation">Node Js</span>
											<div class="student-count">
												<i class="fa-solid fa-user-group me-2"></i><span>60 Students</span>
											</div>
										</div>
									</div>
								</div>
								<div class="col-xl-3 col-lg-6 col-md-6 col-sm-12" data-aos="fade-up">
									<div class="instructor-item instructor-item-four">
										<div class="instructors-img ">
											<a [routerLink]="routes.instructorList" tabindex="0">
												<img class="img-fluid" alt="Img" src="assets/img/instructor/instructor-04.jpg">
											</a>
											<div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
												<div class="featured-img">
													<img src="assets/img/icons/category-4.svg" alt="Img" class="img-fluid">
												</div>
												<a href="javascript:void(0);" class="favourite ms-auto">
													<i class="isax isax-heart"></i>
												</a>
											</div>
										</div>
										<div class="instructor-content">
											<h5 class="title">
												<a [routerLink]="routes.instructorDetails">Pinero</a>
											</h5>
											<span class="designation">Python</span>
											<div class="student-count">
												<i class="fa-solid fa-user-group me-2"></i><span>40 Students</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- /Featured Instructor -->
						
						<!-- View all Category -->
						<div class="col-lg-12">
							<div class="more-details text-center" data-aos="fade-up">
								<a [routerLink]="routes.instructorList" class="btn btn-secondary btn-xl">View all Instructors</a>
							</div>
						</div>
						<!-- /View all Category -->
					</div>
				</div>
				<!-- /Feature Instructors -->	
			
				<!-- Leading Companies -->
				<section class="real-reviews-sec">
					<div class="container">
						<div class="section-header text-center" data-aos="fade-up">
							<span class="fw-medium text-secondary fs-18 fw-bold mb-2 d-inline-block">Check out these real reviews</span>
							<h2>Users love us Don't take it from us</h2>
							<p>95% of eLearning learners report our hands-on content directly helped their careers.</p>
						</div>
						<div class="real-reviews-group">						
							<div class="row align-items-center">
								<div class="col-lg-6 col-md-12 col-sm-12"  data-aos="fade-up">
									<div class="reviews-img">
										<img src="assets/img/feature/feature-21.jpg" alt="Img" class="img-fluid rounded-4">
										<span class="review-icon">
											<img src="assets/img/icons/review.svg" alt="img">
										</span>
									</div>
								</div>
								<div class="col-lg-6 col-md-12 col-md-12"  data-aos="fade-up">
									<div class=" real-reviews owl-theme">
                    <owl-carousel-o [options]="realReviews">
                      <ng-template carouselSlide>

                        <div class="item">
                          <div class="real-reviews-grid">
                            <div class="review-content">
                              <h3>Helps us to improve our productivity</h3>
                              <p>High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.High-definition video is video of higher resolution and quality than standard-definition.</p>
                            </div>
                            <div class="review-top">
                              <div class="review-info">
                                <h5 data-aos="fade-up">William George</h5>
                                <h6 data-aos="fade-up">CEO & Chairman</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ng-template>
                      <ng-template carouselSlide>

                        <div class="item">
                          <div class="real-reviews-grid">
                            <div class="review-content">
                              <h3>Helps us to improve our productivity</h3>
                              <p>High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.</p>
                            </div>
                            <div class="review-top">
                              <div class="review-info">
                                <h5 data-aos="fade-up">Julian Adrose</h5>
                                <h6 data-aos="fade-up">Manager</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ng-template>
                    </owl-carousel-o>
									</div>
									<div class="d-flex justify-content-between align-items-center">
										<div class="owl-nav slide-nav-8 nav-control"></div>
									</div>
								</div>
							</div>
						</div>

						<div class="client-two-carousel">
							<div class="lead-group-slider owl-theme">
                <owl-carousel-o [options]="leadGroup">
                  <ng-template carouselSlide>
                    <div class="item">
                      <div class="lead-img">
                        <img class="img-fluid" alt="img" src="assets/img/client/16.svg">
                      </div>
                    </div>
                  </ng-template>
                  <ng-template carouselSlide>
                    <div class="item">
                      <div class="lead-img">
                        <img class="img-fluid" alt="img" src="assets/img/client/17.svg">
                      </div>
                    </div>
                  </ng-template>
                  <ng-template carouselSlide>
                    <div class="item">
                      <div class="lead-img">
                        <img class="img-fluid" alt="img" src="assets/img/client/18.svg">
                      </div>
                    </div>
                  </ng-template>
                  <ng-template carouselSlide>
                    <div class="item">
                      <div class="lead-img">
                        <img class="img-fluid" alt="img" src="assets/img/client/19.svg">
                      </div>
                    </div>
                  </ng-template>
                  <ng-template carouselSlide>
                    <div class="item">
                      <div class="lead-img">
                        <img class="img-fluid" alt="img" src="assets/img/client/20.svg">
                      </div>
                    </div>
                  </ng-template>
                  <ng-template carouselSlide>
                    <div class="item">
                      <div class="lead-img">
                        <img class="img-fluid" alt="img" src="assets/img/client/21.svg">
                      </div>
                    </div>							
                  </ng-template>
                </owl-carousel-o>
							</div>
						</div>
					</div>
					<img src="assets/img/bg/bg-9.png" alt="img" class="review-bg">
				</section>
				<!-- /Leading Companies -->
			
				<!-- Latest Blog -->
				<section class="latest-blog-sec">
					<div class="container">
						<div class="section-header text-center" data-aos="fade-up">
							<span class="fw-medium text-secondary fs-18 fw-bold mb-2 d-inline-block">News & Events</span>
							<h2>Our Latest Updates</h2>
							<p>Dont Miss Stay Updated with the Latest Articles and Insights</p>
						</div>
						<div class="row justify-content-center">
							<div class="col-xl-4 col-lg-6 col-md-6" data-aos="fade-down">	
								<div class="event-blog-main">
									<div class="latest-blog-img">
										<a [routerLink]="routes.blog_details">
											<img class="img-fluid" alt="Img" src="assets/img/blog/blog-31.jpg">
										</a>
									</div>
									<div class="blog-content">
										<a [routerLink]="routes.blog_details" class="category-name">LMS</a>
										<h4 class="title"><a [routerLink]="routes.blog_details">Promoting Health & Well being in Schools</a></h4>
										<p class="blog-date"><i class="isax isax-calendar-1 me-1"></i>14 Sep 2022</p>
									</div>
								</div>
							</div>
							<div class="col-xl-4 col-lg-6 col-md-6" data-aos="fade-down">	
								<div class="event-blog-main">
									<div class="latest-blog-img">
										<a [routerLink]="routes.blog_details">
											<img class="img-fluid" alt="Img" src="assets/img/blog/blog-32.jpg">
										</a>
									</div>
									<div class="blog-content">
										<a [routerLink]="routes.blog_details" class="category-name">Sales</a>
										<h4 class="title"><a [routerLink]="routes.blog_grid">Why an LMS is Essential for Modern Education</a></h4>
										<p class="blog-date"><i class="isax isax-calendar-1 me-1"></i>14 Sep 2022</p>
									</div>
								</div>
							</div>
							<div class="col-xl-4 col-lg-6 col-md-6" data-aos="fade-down">	
								<div class="event-blog-main">
									<div class="latest-blog-img">
										<a [routerLink]="routes.blog_details">
											<img class="img-fluid" alt="Img" src="assets/img/blog/blog-33.jpg">
										</a>
									</div>
									<div class="blog-content">
										<a [routerLink]="routes.blog_details" class="category-name">Website Design</a>
										<h4 class="title"><a [routerLink]="routes.blog_details">11 Tips to Help You Get New Clients with the design</a></h4>
										<p class="blog-date"><i class="isax isax-calendar-1 me-1"></i>14 Sep 2022</p>
									</div>
								</div>
							</div>
						</div>
						<!-- View all  Events -->
						<div class="col-lg-12">
							<div class="more-details text-center" data-aos="fade-down">
								<a [routerLink]="routes.blog_grid" class="btn btn-secondary btn-xl">View all Updates</a>
							</div>
						</div>
						<!-- /View all  Events -->
					</div>
					<img src="assets/img/bg/blog-bg.png" alt="img" class="blog-bg">
				</section>	
				<!-- /Latest Blog -->

        <app-footer/>` }]
  }], () => [{ type: Router }, { type: HomeData }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Home4Component, { className: "Home4Component", filePath: "src/app/features/home-list/home4/home4.component.ts", lineNumber: 32 });
})();
export {
  Home4Component
};
//# sourceMappingURL=chunk-GV57GPQP.js.map
