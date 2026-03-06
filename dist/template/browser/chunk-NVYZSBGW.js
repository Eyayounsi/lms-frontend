import {
  routes_default
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
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/coming-soon/coming-soon.component.ts
var ComingSoonComponent = class _ComingSoonComponent {
  routes = routes_default;
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  countdownExpired = false;
  email = "";
  // Declare the 'email' property
  countdownInterval;
  ngOnInit() {
    this.setCountdown();
  }
  ngOnDestroy() {
    clearInterval(this.countdownInterval);
  }
  setCountdown() {
    const currentDate = /* @__PURE__ */ new Date();
    currentDate.setDate(currentDate.getDate() + 30);
    const countdownDate = currentDate.getTime();
    this.countdownInterval = setInterval(() => {
      const todayDate = (/* @__PURE__ */ new Date()).getTime();
      const distance = countdownDate - todayDate;
      this.days = Math.floor(distance / (1e3 * 60 * 60 * 24));
      this.hours = Math.floor(distance % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
      this.minutes = Math.floor(distance % (1e3 * 60 * 60) / (1e3 * 60));
      this.seconds = Math.floor(distance % (1e3 * 60) / 1e3);
      if (distance < 0) {
        clearInterval(this.countdownInterval);
        this.countdownExpired = true;
      }
    }, 1e3);
  }
  static \u0275fac = function ComingSoonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComingSoonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComingSoonComponent, selectors: [["app-coming-soon"]], decls: 58, vars: 5, consts: [[1, "error-page", "min-vh-100"], [1, "main-wrapper"], [1, "error-box", "coming-soon-content"], ["src", "assets/img/error/img-01.svg", "alt", "img", 1, "img-fluid", "bg-01"], ["src", "assets/img/error/img-02.svg", "alt", "img", 1, "img-fluid", "bg-02"], ["src", "assets/img/error/img-03.svg", "alt", "img", 1, "img-fluid", "bg-03"], ["src", "assets/img/error/img-04.svg", "alt", "img", 1, "img-fluid", "bg-04"], ["src", "assets/img/error/img-05.svg", "alt", "img", 1, "img-fluid", "bg-05"], ["src", "assets/img/error/img-06.svg", "alt", "img", 1, "img-fluid", "bg-06"], [1, "error-logo"], [3, "routerLink"], ["src", "assets/img/logo.svg", "alt", "Logo", 1, "img-fluid"], [1, "coming-soon-topic"], [1, "h2", "mb-3"], [1, "text-secondary", "ms-1"], [1, "coming-soon-timer"], [1, "days"], [1, "seperate-dot"], [1, "hours"], [1, "minutes"], [1, "seconds"], [1, "error-box-img", "coming-soon-img"], ["src", "assets/img/error/coming-soon.svg", "alt", "Img", 1, "img-fluid"], [1, "mt-5"], [1, "bg-white", "border", "rounded-2", "p-2", "mt-2", "mb-3"], [1, "input-group"], ["type", "email", "placeholder", "Enter your email", 1, "form-control", "focus-shadow-none", "border-0", "me-1"], ["type", "button", 1, "btn", "btn-secondary", "rounded-2", "mb-0"], [1, "d-flex", "align-items-center", "justify-content-center"], ["href", "javascript:void(0);", 1, "coming-soon", "media-btn", "rounded-circle", "d-inline-flex", "align-items-center", "justify-content-center", "me-2"], [1, "fa-brands", "fa-facebook-f"], [1, "fa-brands", "fa-instagram"], [1, "fa-brands", "fa-x-twitter"], ["href", "javascript:void(0);", 1, "coming-soon", "media-btn", "rounded-circle", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "fa-brands", "fa-linkedin-in"]], template: function ComingSoonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "img", 3)(4, "img", 4)(5, "img", 5)(6, "img", 6)(7, "img", 7)(8, "img", 8);
      \u0275\u0275elementStart(9, "div", 9)(10, "a", 10);
      \u0275\u0275element(11, "img", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 12)(13, "h3", 13);
      \u0275\u0275text(14, " We are Coming");
      \u0275\u0275elementStart(15, "span", 14);
      \u0275\u0275text(16, " Soon!!!");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "p");
      \u0275\u0275text(18, "Stay tuned for something amazing");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "ul", 15)(20, "li")(21, "span", 16);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275text(23, "days ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "li", 17);
      \u0275\u0275elementStart(25, "li")(26, "span", 18);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd();
      \u0275\u0275text(28, "Hrs ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(29, "li", 17);
      \u0275\u0275elementStart(30, "li")(31, "span", 19);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd();
      \u0275\u0275text(33, "Min ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(34, "li", 17);
      \u0275\u0275elementStart(35, "li")(36, "span", 20);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd();
      \u0275\u0275text(38, "Sec ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 21);
      \u0275\u0275element(40, "img", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "form", 23)(42, "b");
      \u0275\u0275text(43, "Notify me when the website is launched");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 24)(45, "div", 25);
      \u0275\u0275element(46, "input", 26);
      \u0275\u0275elementStart(47, "button", 27);
      \u0275\u0275text(48, " Notify Me! ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(49, "div", 28)(50, "a", 29);
      \u0275\u0275element(51, "i", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "a", 29);
      \u0275\u0275element(53, "i", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "a", 29);
      \u0275\u0275element(55, "i", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "a", 33);
      \u0275\u0275element(57, "i", 34);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.home);
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate(ctx.days);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.hours);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.minutes);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.seconds);
    }
  }, dependencies: [CommonModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComingSoonComponent, [{
    type: Component,
    args: [{ selector: "app-coming-soon", imports: [CommonModule, RouterLink], template: '<div class="error-page min-vh-100">\n    <div class="main-wrapper">\n      <div class="error-box coming-soon-content">\n        <img src="assets/img/error/img-01.svg" alt="img" class="img-fluid bg-01" />\n        <img src="assets/img/error/img-02.svg" alt="img" class="img-fluid bg-02" />\n        <img src="assets/img/error/img-03.svg" alt="img" class="img-fluid bg-03" />\n        <img src="assets/img/error/img-04.svg" alt="img" class="img-fluid bg-04" />\n        <img src="assets/img/error/img-05.svg" alt="img" class="img-fluid bg-05" />\n        <img src="assets/img/error/img-06.svg" alt="img" class="img-fluid bg-06" />\n        <div class="error-logo">\n          <a [routerLink]="routes.home">\n            <img src="assets/img/logo.svg" class="img-fluid" alt="Logo" />\n          </a>\n        </div>\n        <div class="coming-soon-topic">\n          <h3 class="h2 mb-3">\n            We are Coming<span class="text-secondary ms-1"> Soon!!!</span>\n          </h3>\n          <p>Stay tuned for something amazing</p>\n        </div>\n        <ul class="coming-soon-timer">\n          <li>\n            <span class="days">{{ days }}</span\n            >days\n          </li>\n          <li class="seperate-dot"></li>\n          <li>\n            <span class="hours">{{ hours }}</span\n            >Hrs\n          </li>\n          <li class="seperate-dot"></li>\n          <li>\n            <span class="minutes">{{ minutes }}</span\n            >Min\n          </li>\n          <li class="seperate-dot"></li>\n          <li>\n            <span class="seconds">{{ seconds }}</span\n            >Sec\n          </li>\n        </ul>\n        <div class="error-box-img coming-soon-img">\n          <img src="assets/img/error/coming-soon.svg" alt="Img" class="img-fluid" />\n        </div>\n        <form class="mt-5">\n          <b>Notify me when the website is launched</b>\n          <div class="bg-white border rounded-2 p-2 mt-2 mb-3">\n            <div class="input-group">\n              <input\n                class="form-control focus-shadow-none border-0 me-1"\n                type="email"\n                placeholder="Enter your email"\n              />\n              <button type="button" class="btn btn-secondary rounded-2 mb-0">\n                Notify Me!\n              </button>\n            </div>\n          </div>\n        </form>\n        <div class="d-flex align-items-center justify-content-center">\n          <a\n            href="javascript:void(0);"\n            class="coming-soon media-btn rounded-circle d-inline-flex align-items-center justify-content-center me-2"\n            ><i class="fa-brands fa-facebook-f"></i\n          ></a>\n          <a\n            href="javascript:void(0);"\n            class="coming-soon media-btn rounded-circle d-inline-flex align-items-center justify-content-center me-2"\n            ><i class="fa-brands fa-instagram"></i\n          ></a>\n          <a\n            href="javascript:void(0);"\n            class="coming-soon media-btn rounded-circle d-inline-flex align-items-center justify-content-center me-2"\n            ><i class="fa-brands fa-x-twitter"></i\n          ></a>\n          <a\n            href="javascript:void(0);"\n            class="coming-soon media-btn rounded-circle d-inline-flex align-items-center justify-content-center"\n            ><i class="fa-brands fa-linkedin-in"></i\n          ></a>\n        </div>\n      </div>\n  </div>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComingSoonComponent, { className: "ComingSoonComponent", filePath: "src/app/features/pages/coming-soon/coming-soon.component.ts", lineNumber: 16 });
})();
export {
  ComingSoonComponent
};
//# sourceMappingURL=chunk-NVYZSBGW.js.map
