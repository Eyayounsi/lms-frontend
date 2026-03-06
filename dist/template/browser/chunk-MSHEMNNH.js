import {
  routes
} from "./chunk-E6TQA5KL.js";
import {
  RouterLink,
  RouterLinkActive,
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/student/settings/settings.component.ts
var SettingsComponent = class _SettingsComponent {
  routes = routes;
  static \u0275fac = function SettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], decls: 23, vars: 6, consts: [[1, "mb-3"], [1, "settings-nav", "d-flex", "align-items-center", "flex-wrap", "border", "bg-light-900", "rounded"], ["routerLinkActive", "active", 3, "routerLink"]], template: function SettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h5");
      \u0275\u0275text(2, "Settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "ul", 1)(4, "li")(5, "a", 2);
      \u0275\u0275text(6, "Edit Profile");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "li")(8, "a", 2);
      \u0275\u0275text(9, "Security");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "li")(11, "a", 2);
      \u0275\u0275text(12, "Social Profiles");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "li")(14, "a", 2);
      \u0275\u0275text(15, "Linked Accounts");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "li")(17, "a", 2);
      \u0275\u0275text(18, "Notifications");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "li")(20, "a", 2);
      \u0275\u0275text(21, "Billing Address");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(22, "router-outlet");
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.studentSettings);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.studentChangePassword);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.students_social_profile);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.studentLinkedAccount);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.studentNotification);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.studentBillingAddress);
    }
  }, dependencies: [CommonModule, RouterModule, RouterOutlet, RouterLink, RouterLinkActive], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsComponent, [{
    type: Component,
    args: [{ selector: "app-settings", imports: [CommonModule, RouterModule, RouterLinkActive], template: '\n<div class="mb-3">\n    <h5>Settings</h5>\n</div>				\n    <ul class="settings-nav d-flex align-items-center flex-wrap border bg-light-900 rounded">\n        <li><a [routerLink]="routes.studentSettings" routerLinkActive="active">Edit Profile</a></li>\n        <li><a [routerLink]="routes.studentChangePassword" routerLinkActive="active">Security</a></li>\n        <li><a [routerLink]="routes.students_social_profile" routerLinkActive="active">Social Profiles</a></li>\n        <li><a [routerLink]="routes.studentLinkedAccount" routerLinkActive="active">Linked Accounts</a></li>\n        <li><a [routerLink]="routes.studentNotification" routerLinkActive="active">Notifications</a></li>\n        <li><a [routerLink]="routes.studentBillingAddress" routerLinkActive="active">Billing Address</a></li>\n    </ul>\n<router-outlet></router-outlet>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src/app/features/student/settings/settings.component.ts", lineNumber: 12 });
})();
export {
  SettingsComponent
};
//# sourceMappingURL=chunk-MSHEMNNH.js.map
