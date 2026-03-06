import {
  MessageService
} from "./chunk-ZJTZEPHA.js";
import {
  CommonService
} from "./chunk-CDB6UHUA.js";
import {
  AuthService
} from "./chunk-WRYOR7DN.js";
import "./chunk-MFSRU4HL.js";
import {
  routes
} from "./chunk-E6TQA5KL.js";
import {
  NavigationStart,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-TPKO67I6.js";
import "./chunk-QFZWCWB7.js";
import "./chunk-PXFMCAI3.js";
import {
  CommonModule,
  NgIf,
  TitleCasePipe
} from "./chunk-YBJXKBE2.js";
import {
  Component,
  interval,
  setClassMetadata,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/student/common/student-sidebar/student-sidebar.component.ts
function StudentSidebarComponent_span_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", ctx_r0.unreadMsgCount > 99 ? "99" : ctx_r0.unreadMsgCount);
  }
}
var StudentSidebarComponent = class _StudentSidebarComponent {
  common;
  authService;
  messageService;
  routes = routes;
  base = "";
  page = "";
  last = "";
  unreadMsgCount = 0;
  pollSub;
  constructor(common, authService, messageService) {
    this.common = common;
    this.authService = authService;
    this.messageService = messageService;
    this.common.base.subscribe((base) => {
      this.base = base;
    });
    this.common.page.subscribe((page) => {
      this.page = page;
    });
    this.common.last.subscribe((last) => {
      this.last = last;
    });
  }
  ngOnInit() {
    this.refreshCount();
    this.pollSub = interval(3e4).pipe(switchMap(() => this.messageService.getUnreadCount())).subscribe({
      next: (res) => {
        this.unreadMsgCount = res?.count ?? res ?? 0;
      },
      error: () => {
      }
    });
  }
  ngOnDestroy() {
    this.pollSub?.unsubscribe();
  }
  refreshCount() {
    this.messageService.getUnreadCount().subscribe({
      next: (res) => {
        this.unreadMsgCount = res?.count ?? res ?? 0;
      },
      error: () => {
      }
    });
  }
  onLogout() {
    this.authService.logout();
  }
  static \u0275fac = function StudentSidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentSidebarComponent)(\u0275\u0275directiveInject(CommonService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentSidebarComponent, selectors: [["app-student-sidebar"]], decls: 67, vars: 18, consts: [[1, "settings-sidebar"], [1, "mb-3"], [1, "mb-3", "pb-1"], ["routerLinkActive", "active", 1, "d-inline-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-grid-35", "me-2"], [1, "fa-solid", "fa-user", "me-2"], [1, "isax", "isax-teacher5", "me-2"], [1, "fa-solid", "fa-graduation-cap", "me-2"], [1, "isax", "isax-note-215", "me-2"], [1, "isax", "isax-heart5", "me-2"], [1, "isax", "isax-star5", "me-2"], [1, "d-inline-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-award5", "me-2"], [1, "isax", "isax-shopping-cart5", "me-2"], [1, "isax", "isax-tag-user5", "me-2"], ["routerLinkActive", "active", 1, "d-inline-flex", "align-items-center", "justify-content-between", "w-100", 3, "routerLink"], [1, "d-flex", "align-items-center"], [1, "isax", "isax-messages-35", "me-2"], ["class", "badge rounded-pill ms-1", "style", "background:#4a1d96;color:#fff;font-size:10px;", 4, "ngIf"], [1, "isax", "isax-ticket5", "me-2"], [1, "isax", "isax-setting-25", "me-2"], ["href", "javascript:void(0)", 1, "d-inline-flex", "align-items-center", 3, "click"], [1, "isax", "isax-logout5", "me-2"], [1, "badge", "rounded-pill", "ms-1", 2, "background", "#4a1d96", "color", "#fff", "font-size", "10px"]], template: function StudentSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h6", 1);
      \u0275\u0275text(3, "Main Menu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "ul", 2)(5, "li")(6, "a", 3);
      \u0275\u0275element(7, "i", 4);
      \u0275\u0275text(8, "Dashboard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "li")(10, "a", 3);
      \u0275\u0275element(11, "i", 5);
      \u0275\u0275text(12, "My Profile");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "li")(14, "a", 3);
      \u0275\u0275element(15, "i", 6);
      \u0275\u0275text(16, "Enrolled Courses");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "li")(18, "a", 3);
      \u0275\u0275element(19, "i", 7);
      \u0275\u0275text(20, "Mes Cours Achet\xE9s");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "li")(22, "a", 3);
      \u0275\u0275element(23, "i", 8);
      \u0275\u0275text(24, "My Certificates");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "li")(26, "a", 3);
      \u0275\u0275element(27, "i", 9);
      \u0275\u0275text(28, "Wishlist");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "li")(30, "a", 3);
      \u0275\u0275element(31, "i", 10);
      \u0275\u0275text(32, "Reviews");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "li")(34, "a", 11);
      \u0275\u0275element(35, "i", 12);
      \u0275\u0275text(36, "My Quiz Attempts");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "li")(38, "a", 3);
      \u0275\u0275element(39, "i", 13);
      \u0275\u0275text(40, "Order History");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "li")(42, "a", 3);
      \u0275\u0275element(43, "i", 14);
      \u0275\u0275text(44, "Referrals");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "li")(46, "a", 15)(47, "span", 16);
      \u0275\u0275element(48, "i", 17);
      \u0275\u0275text(49, "Messages");
      \u0275\u0275elementEnd();
      \u0275\u0275template(50, StudentSidebarComponent_span_50_Template, 2, 1, "span", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "li")(52, "a", 3);
      \u0275\u0275element(53, "i", 19);
      \u0275\u0275text(54, "Support Tickets");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(55, "hr");
      \u0275\u0275elementStart(56, "h6", 1);
      \u0275\u0275text(57, "Account Settings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "ul")(59, "li")(60, "a", 11);
      \u0275\u0275element(61, "i", 20);
      \u0275\u0275text(62, "Settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "li")(64, "a", 21);
      \u0275\u0275listener("click", function StudentSidebarComponent_Template_a_click_64_listener() {
        return ctx.onLogout();
      });
      \u0275\u0275element(65, "i", 22);
      \u0275\u0275text(66, "Logout");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.students_Dashboard);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.students_profile);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.studentCourses);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.studentMyCourses);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.student_Certificate);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.studentWishlist);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.studentReviews);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.page === "student-quiz" || ctx.page === "student-quiz-questions");
      \u0275\u0275property("routerLink", ctx.routes.studentQuiz);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.studentOrderHistory);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.students_referral);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.studentsMessage);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.unreadMsgCount > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.students_tickets);
      \u0275\u0275advance(8);
      \u0275\u0275classProp("active", ctx.last === "student-settings" || ctx.last === "student-change-password" || ctx.last === "student-social-profile" || ctx.last === "student-linked-accounts" || ctx.last === "student-notifications" || ctx.last === "student-billing-address");
      \u0275\u0275property("routerLink", ctx.routes.studentSettings);
    }
  }, dependencies: [CommonModule, NgIf, RouterModule, RouterLink, RouterLinkActive], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentSidebarComponent, [{
    type: Component,
    args: [{ selector: "app-student-sidebar", imports: [CommonModule, RouterModule], template: `<div class="settings-sidebar">
    <div>
        <h6 class="mb-3">Main Menu</h6>
        <ul class="mb-3 pb-1">
            <li>
                <a [routerLink]="routes.students_Dashboard" class="d-inline-flex align-items-center" routerLinkActive="active"><i class="isax isax-grid-35 me-2"></i>Dashboard</a>
            </li>
            <li>
                <a [routerLink]="routes.students_profile" class="d-inline-flex align-items-center" routerLinkActive="active"><i class="fa-solid fa-user me-2"></i>My Profile</a>
            </li>
            <li>
                <a [routerLink]="routes.studentCourses" class="d-inline-flex align-items-center" routerLinkActive="active"><i class="isax isax-teacher5 me-2"></i>Enrolled Courses</a>
            </li>
            <li>
                <a [routerLink]="routes.studentMyCourses" class="d-inline-flex align-items-center" routerLinkActive="active"><i class="fa-solid fa-graduation-cap me-2"></i>Mes Cours Achet\xE9s</a>
            </li>
            <li>
                <a [routerLink]="routes.student_Certificate" class="d-inline-flex align-items-center" routerLinkActive="active"><i class="isax isax-note-215 me-2"></i>My Certificates</a>
            </li>
            <li>
                <a [routerLink]="routes.studentWishlist" class="d-inline-flex align-items-center" routerLinkActive="active"><i class="isax isax-heart5 me-2"></i>Wishlist</a>
            </li>
            <li>
                <a [routerLink]="routes.studentReviews" class="d-inline-flex align-items-center" routerLinkActive="active"><i class="isax isax-star5 me-2"></i>Reviews</a>
            </li>
            <li>
                <a [routerLink]="routes.studentQuiz" class="d-inline-flex align-items-center" [class.active]="page==='student-quiz'||page==='student-quiz-questions'"><i class="isax isax-award5 me-2"></i>My Quiz Attempts</a>
            </li>
            <li>
                <a [routerLink]="routes.studentOrderHistory" class="d-inline-flex align-items-center" routerLinkActive="active"><i class="isax isax-shopping-cart5 me-2"></i>Order History</a>
            </li>
            <li>
                <a [routerLink]="routes.students_referral" class="d-inline-flex align-items-center" routerLinkActive="active"><i class="isax isax-tag-user5 me-2"></i>Referrals</a>
            </li>
            <li>
                <a [routerLink]="routes.studentsMessage" class="d-inline-flex align-items-center justify-content-between w-100" routerLinkActive="active">
                  <span class="d-flex align-items-center"><i class="isax isax-messages-35 me-2"></i>Messages</span>
                  <span *ngIf="unreadMsgCount > 0" class="badge rounded-pill ms-1" style="background:#4a1d96;color:#fff;font-size:10px;">+{{ unreadMsgCount > 99 ? '99' : unreadMsgCount }}</span>
                </a>
            </li>
            <li>
                <a [routerLink]="routes.students_tickets" class="d-inline-flex align-items-center" routerLinkActive="active"><i class="isax isax-ticket5 me-2"></i>Support Tickets</a>
            </li>
        </ul>
        <hr>
        <h6 class="mb-3">Account Settings</h6>
        <ul>
            <li>
                <a [routerLink]="routes.studentSettings" class="d-inline-flex align-items-center" [class.active]="last==='student-settings'||last==='student-change-password' ||last==='student-social-profile' || last==='student-linked-accounts' || last==='student-notifications' || last==='student-billing-address'" ><i class="isax isax-setting-25 me-2"></i>Settings</a>
            </li>
            <li>
                <a href="javascript:void(0)" (click)="onLogout()" class="d-inline-flex align-items-center"><i class="isax isax-logout5 me-2"></i>Logout</a>
            </li>
        </ul>
    </div>
</div>` }]
  }], () => [{ type: CommonService }, { type: AuthService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentSidebarComponent, { className: "StudentSidebarComponent", filePath: "src/app/features/student/common/student-sidebar/student-sidebar.component.ts", lineNumber: 18 });
})();

// src/app/features/student/student.component.ts
function StudentComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 2)(2, "div", 21)(3, "div", 58)(4, "div", 59)(5, "h2", 60);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "nav", 61)(9, "ol", 62)(10, "li", 63)(11, "a", 14);
    \u0275\u0275text(12, "Home");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "li", 64);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "titlecase");
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 3, ctx_r0.last));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", ctx_r0.routes.home);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 5, ctx_r0.last));
  }
}
var StudentComponent = class _StudentComponent {
  router;
  routes = routes;
  last = "";
  constructor(router) {
    this.router = router;
    this.updateLastFromUrl(this.router.url);
    this.router.events.subscribe((data) => {
      if (data instanceof NavigationStart) {
        this.updateLastFromUrl(data.url);
      }
    });
  }
  updateLastFromUrl(url) {
    const parts = url.split("/");
    const lastPart = parts[2]?.replace("student-", "").trim();
    if (lastPart === "profile") {
      this.last = "My Profile";
    } else if (lastPart === "courses") {
      this.last = "Enrolled Courses";
    } else if (lastPart === "chat") {
      this.last = "Messages";
    } else if (lastPart === "quiz") {
      this.last = "My Quiz Attempts";
    } else if (lastPart === "qa") {
      this.last = "Question & Answer";
    } else if (lastPart === "tickets") {
      this.last = "Support Tickets";
    } else if (lastPart === "certificate") {
      this.last = "My Certificates";
    } else if (lastPart === "quiz-questions") {
      this.last = "My Quiz Attempts";
    } else {
      this.last = lastPart;
    }
  }
  static \u0275fac = function StudentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentComponent, selectors: [["app-student"]], decls: 133, vars: 16, consts: [[1, "breadcrumb-bar", "text-center"], [1, "content"], [1, "container"], [1, "profile-card", "overflow-hidden", "bg-blue-gradient2", "mb-5", "p-5"], [1, "profile-card-bg"], ["src", "assets/img/bg/card-bg-01.png", "alt", "", 1, "profile-card-bg-1"], [1, "row", "align-items-center", "row-gap-3"], [1, "col-lg-6"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-xxl", "avatar-rounded", "me-3", "border", "border-white", "border-2", "position-relative"], ["src", "assets/img/user/user-02.jpg", "alt", ""], [1, "verify-tick"], [1, "isax", "isax-verify5"], [1, "mb-1", "text-white", "d-inline-flex", "align-items-center"], [3, "routerLink"], [1, "link-light", "fs-16", "ms-2", 3, "routerLink"], [1, "isax", "isax-edit-2"], [1, "text-light"], [1, "d-flex", "align-items-center", "justify-content-lg-end", "flex-wrap", "gap-2"], [1, "btn", "btn-white", "rounded-pill", "me-3", 3, "routerLink"], [1, "btn", "btn-secondary", "rounded-pill", 3, "routerLink"], [1, "row"], [1, "col-lg-3"], [1, "col-lg-9"], [1, "footer"], [1, "footer-bg"], ["src", "assets/img/bg/footer-bg-01.png", "alt", "", 1, "footer-bg-1"], ["src", "assets/img/bg/footer-bg-02.png", "alt", "", 1, "footer-bg-2"], [1, "footer-top"], [1, "row", "row-gap-4"], [1, "col-lg-4"], [1, "footer-about"], [1, "footer-logo"], ["src", "assets/img/logo.svg", "alt", ""], ["href", "javascript:void(0);", 1, "me-2"], ["src", "assets/img/icon/appstore.svg", "alt", ""], ["href", "javascript:void(0);"], ["src", "assets/img/icon/googleplay.svg", "alt", ""], [1, "col-lg-8"], [1, "footer-widget", "footer-menu"], [1, "footer-title"], [1, "footer-widget", "footer-contact"], [1, "subscribe-input"], ["action", "javascript:void(0);"], ["type", "email", "placeholder", "Enter your Email Address", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", "inline-flex", "align-items-center"], [1, "isax", "isax-send-2", "me-1"], [1, "footer-contact-info"], [1, "footer-address", "d-flex", "align-items-center"], ["src", "assets/img/icon/icon-20.svg", "alt", "Img", 1, "img-fluid", "me-2"], ["src", "assets/img/icon/icon-19.svg", "alt", "Img", 1, "img-fluid", "me-2"], ["src", "assets/img/icon/icon-21.svg", "alt", "Img", 1, "img-fluid", "me-2"], [1, "footer-bottom"], [1, "row", "row-gap-2"], [1, "col-md-6"], [1, "text-center", "text-md-start"], [1, "text-white"], [1, "d-flex", "align-items-center", "justify-content-center", "justify-content-md-end", "footer-link"], [1, "col-md-12", "col-12"], [1, "breadcrumb-list"], [1, "breadcrumb-title"], ["aria-label", "breadcrumb", 1, "page-breadcrumb"], [1, "breadcrumb", "justify-content-center", "mb-0"], [1, "breadcrumb-item"], ["aria-current", "page", 1, "breadcrumb-item", "active"]], template: function StudentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, StudentComponent_Conditional_0_Template, 16, 7, "div", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "img", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "span", 9);
      \u0275\u0275element(10, "img", 10);
      \u0275\u0275elementStart(11, "span", 11);
      \u0275\u0275element(12, "i", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div")(14, "h5", 13)(15, "a", 14);
      \u0275\u0275text(16, "Ronald Richard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "a", 15);
      \u0275\u0275element(18, "i", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "p", 17);
      \u0275\u0275text(20, "Student");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 7)(22, "div", 18)(23, "a", 19);
      \u0275\u0275text(24, "Become an Instructor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "a", 20);
      \u0275\u0275text(26, "Instructor Dashboard");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(27, "div", 21)(28, "div", 22);
      \u0275\u0275element(29, "app-student-sidebar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 23);
      \u0275\u0275element(31, "router-outlet");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(32, "footer", 24)(33, "div", 25);
      \u0275\u0275element(34, "img", 26)(35, "img", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 28)(37, "div", 2)(38, "div", 29)(39, "div", 30)(40, "div", 31)(41, "div", 32);
      \u0275\u0275element(42, "img", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "p");
      \u0275\u0275text(44, "Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 8)(46, "a", 34);
      \u0275\u0275element(47, "img", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "a", 36);
      \u0275\u0275element(49, "img", 37);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(50, "div", 38)(51, "div", 29)(52, "div", 22)(53, "div", 39)(54, "h5", 40);
      \u0275\u0275text(55, "For Instructor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "ul")(57, "li")(58, "a", 14);
      \u0275\u0275text(59, "Search Mentors");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "li")(61, "a", 14);
      \u0275\u0275text(62, "Login");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "li")(64, "a", 14);
      \u0275\u0275text(65, "Register");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "li")(67, "a", 14);
      \u0275\u0275text(68, "Booking");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "li")(70, "a", 14);
      \u0275\u0275text(71, "Students Dashboard");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(72, "div", 22)(73, "div", 39)(74, "h5", 40);
      \u0275\u0275text(75, "For Student");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "ul")(77, "li")(78, "a", 36);
      \u0275\u0275text(79, "Appointments");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "li")(81, "a", 14);
      \u0275\u0275text(82, "Chat");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "li")(84, "a", 14);
      \u0275\u0275text(85, "Login");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "li")(87, "a", 14);
      \u0275\u0275text(88, "Register");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "li")(90, "a", 14);
      \u0275\u0275text(91, "Instructor Dashboard");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(92, "div", 7)(93, "div", 41)(94, "h5", 40);
      \u0275\u0275text(95, "Newsletter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "div", 42)(97, "form", 43);
      \u0275\u0275element(98, "input", 44);
      \u0275\u0275elementStart(99, "button", 45);
      \u0275\u0275element(100, "i", 46);
      \u0275\u0275text(101, "Subscribe");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(102, "div", 47)(103, "div", 48);
      \u0275\u0275element(104, "img", 49);
      \u0275\u0275elementStart(105, "p");
      \u0275\u0275text(106, " 3556 Beech Street, San Francisco,");
      \u0275\u0275element(107, "br");
      \u0275\u0275text(108, " California, CA 94108 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(109, "div", 48);
      \u0275\u0275element(110, "img", 50);
      \u0275\u0275elementStart(111, "p");
      \u0275\u0275text(112, "dreamslms@example.com");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(113, "div", 48);
      \u0275\u0275element(114, "img", 51);
      \u0275\u0275elementStart(115, "p");
      \u0275\u0275text(116, "+19 123-456-7890");
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(117, "div", 52)(118, "div", 2)(119, "div", 53)(120, "div", 54)(121, "div", 55)(122, "p", 56);
      \u0275\u0275text(123, "Copyright \xA9 2025 DreamsLMS. All rights reserved.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(124, "div", 54)(125, "div")(126, "ul", 57)(127, "li")(128, "a", 14);
      \u0275\u0275text(129, "Terms & Conditions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(130, "li")(131, "a", 14);
      \u0275\u0275text(132, "Privacy Policy");
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.last !== "view" ? 0 : -1);
      \u0275\u0275advance(15);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.becomeAnExpert);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.instructor_dashboard);
      \u0275\u0275advance(33);
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
  }, dependencies: [CommonModule, RouterModule, RouterOutlet, RouterLink, StudentSidebarComponent, TitleCasePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentComponent, [{
    type: Component,
    args: [{ selector: "app-student", imports: [CommonModule, RouterModule, StudentSidebarComponent], template: `<!-- Breadcrumb -->
@if (last !== 'view') {
  <div class="breadcrumb-bar text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-12">
          <div class="breadcrumb-list">
            <h2 class="breadcrumb-title">{{ last | titlecase }}</h2>
            <nav aria-label="breadcrumb" class="page-breadcrumb">
              <ol class="breadcrumb justify-content-center mb-0">
                <li class="breadcrumb-item"><a [routerLink] = "routes.home">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">{{ last | titlecase }}</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
}
<!-- /Breadcrumb -->
<div class="content">
  <div class="container">
  <!-- profile box -->
  <div class="profile-card overflow-hidden bg-blue-gradient2 mb-5 p-5">
      <div class="profile-card-bg">
          <img src="assets/img/bg/card-bg-01.png" class="profile-card-bg-1" alt="">
      </div>
          <div class="row align-items-center row-gap-3">
              <div class="col-lg-6">
                  <div class="d-flex align-items-center">
                      <span class="avatar avatar-xxl avatar-rounded me-3 border border-white border-2 position-relative">
                          <img src="assets/img/user/user-02.jpg" alt="">
                          <span class="verify-tick"><i class="isax isax-verify5"></i></span>
                      </span>
                      <div>
                          <h5 class="mb-1 text-white d-inline-flex align-items-center"><a [routerLink]="routes.studentsDetails">Ronald Richard</a><a [routerLink]="routes.instructorProfile" class="link-light fs-16 ms-2"><i class="isax isax-edit-2"></i></a></h5>
                          <p class="text-light">Student</p>
                      </div>
                  </div>
              </div>
              <div class="col-lg-6">
                  <div class="d-flex align-items-center justify-content-lg-end flex-wrap gap-2">
                      <a [routerLink]="routes.becomeAnExpert" class="btn btn-white rounded-pill me-3">Become an Instructor</a>
                      <a [routerLink]="routes.instructor_dashboard" class="btn btn-secondary rounded-pill">Instructor Dashboard</a>
                  </div>
              </div>
          </div>
  </div>
  <!-- profile box -->
      <div class="row">
          <!-- sidebar -->
          <div class="col-lg-3 ">
              <app-student-sidebar/>
          </div>
          <!-- sidebar -->
          <div class="col-lg-9">
              <router-outlet></router-outlet>
          </div>
      </div>
  </div>
</div>

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
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentComponent, { className: "StudentComponent", filePath: "src/app/features/student/student.component.ts", lineNumber: 14 });
})();
export {
  StudentComponent
};
//# sourceMappingURL=chunk-NPAKKF7Y.js.map
