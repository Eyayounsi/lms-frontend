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
import "./chunk-YBJXKBE2.js";
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

// src/app/features/instructor/settings/settings.component.ts
var SettingsComponent = class _SettingsComponent {
  routes = routes;
  static \u0275fac = function SettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], decls: 29, vars: 8, consts: [[1, "mb-3"], [1, "settings-nav", "d-flex", "align-items-center", "flex-wrap", "border", "bg-light-900", "rounded"], ["routerLinkActive", "active", 3, "routerLink"]], template: function SettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h5");
      \u0275\u0275text(2, "Settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "ul", 1)(4, "li")(5, "a", 2);
      \u0275\u0275text(6, "Profile");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "li")(8, "a", 2);
      \u0275\u0275text(9, "Security");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "li")(11, "a", 2);
      \u0275\u0275text(12, "Plans");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "li")(14, "a", 2);
      \u0275\u0275text(15, "Social Profiles");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "li")(17, "a", 2);
      \u0275\u0275text(18, "Linked Accounts");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "li")(20, "a", 2);
      \u0275\u0275text(21, "Notifications");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "li")(23, "a", 2);
      \u0275\u0275text(24, "Integrations");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "li")(26, "a", 2);
      \u0275\u0275text(27, "Withdraw");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(28, "router-outlet");
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.instructorSettings);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorChangePassword);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorPlans);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorSocialProfiles);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorLinkedAccounts);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorSettingNotifications);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorIntegrations);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorSettingWithdraw);
    }
  }, dependencies: [RouterModule, RouterOutlet, RouterLink, RouterLinkActive], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsComponent, [{
    type: Component,
    args: [{ selector: "app-settings", imports: [RouterModule, RouterLinkActive], template: '<div class="mb-3">\n    <h5>Settings</h5>\n</div>				\n    <ul class="settings-nav d-flex align-items-center flex-wrap border bg-light-900 rounded">\n        <li><a [routerLink]="routes.instructorSettings" routerLinkActive="active">Profile</a></li>\n        <li><a [routerLink]="routes.instructorChangePassword" routerLinkActive="active">Security</a></li>\n        <li><a [routerLink]="routes.instructorPlans" routerLinkActive="active">Plans</a></li>\n        <li><a [routerLink]="routes.instructorSocialProfiles" routerLinkActive="active">Social Profiles</a></li>\n        <li><a [routerLink]="routes.instructorLinkedAccounts" routerLinkActive="active">Linked Accounts</a></li>\n        <li><a [routerLink]="routes.instructorSettingNotifications" routerLinkActive="active">Notifications</a></li>\n        <li><a [routerLink]="routes.instructorIntegrations" routerLinkActive="active">Integrations</a></li>\n        <li><a [routerLink]="routes.instructorSettingWithdraw" routerLinkActive="active">Withdraw</a></li>\n    </ul>\n\n<router-outlet></router-outlet> \n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src/app/features/instructor/settings/settings.component.ts", lineNumber: 11 });
})();
export {
  SettingsComponent
};
//# sourceMappingURL=chunk-AMTTXGVO.js.map
