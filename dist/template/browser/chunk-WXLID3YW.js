import {
  MessageService
} from "./chunk-ZJTZEPHA.js";
import {
  CommonService
} from "./chunk-CDB6UHUA.js";
import {
  BlockedService
} from "./chunk-7S53S3ES.js";
import {
  AuthService
} from "./chunk-WRYOR7DN.js";
import {
  environment
} from "./chunk-MFSRU4HL.js";
import {
  DataService
} from "./chunk-44KX7P7T.js";
import {
  SlickCarouselModule
} from "./chunk-PRTCGMFX.js";
import {
  routes
} from "./chunk-E6TQA5KL.js";
import "./chunk-VF2E3YWR.js";
import {
  NavigationStart,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet
} from "./chunk-TPKO67I6.js";
import "./chunk-QFZWCWB7.js";
import {
  HttpClient
} from "./chunk-PXFMCAI3.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  TitleCasePipe
} from "./chunk-YBJXKBE2.js";
import {
  BehaviorSubject,
  Component,
  ElementRef,
  HostListener,
  Injectable,
  Renderer2,
  RendererFactory2,
  ViewChild,
  interval,
  map,
  setClassMetadata,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction4,
  ɵɵpureFunction7,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/shared/service/sidebar/sidebar.service.ts
var SidebarService = class _SidebarService {
  common;
  renderer;
  base = "";
  page = "";
  last = "";
  toogleSidebar = new BehaviorSubject(localStorage.getItem("sidebarPosition") === "true" ? "true" : "false");
  themeColors = new BehaviorSubject(localStorage.getItem("themeColor") || "light-mode");
  constructor(rendererFactory, common) {
    this.common = common;
    this.renderer = rendererFactory.createRenderer(null, null);
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
  openSidebar() {
    if (localStorage.getItem("sidebarPosition")) {
      localStorage.removeItem("sidebarPosition");
      this.toogleSidebar.next("false");
    } else {
      localStorage.setItem("sidebarPosition", "true");
      this.toogleSidebar.next("true");
    }
  }
  closeSidebar() {
    this.toogleSidebar.next("false");
    localStorage.removeItem("sidebarPosition");
  }
  changeThemeColor(themeColors) {
    this.themeColors.next(themeColors);
    localStorage.setItem("themeColor", themeColors);
    this.renderer.setAttribute(document.documentElement, "class", themeColors === "light-mode" ? "light-mode" : "dark-mode");
  }
  static \u0275fac = function SidebarService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarService)(\u0275\u0275inject(RendererFactory2), \u0275\u0275inject(CommonService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SidebarService, factory: _SidebarService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: RendererFactory2 }, { type: CommonService }], null);
})();

// src/app/features/layouts/header/header.component.ts
var _c0 = ["stickyMenu"];
var _c1 = (a0) => ({ "home-six": a0 });
var _c2 = (a0, a1, a2, a3, a4, a5, a6) => ({ "header-one": a0, "header-two": a1, "header-three": a2, "position-fixed": a3, "header-four": a4, "header-two header-five position-fixed": a5, "fixed": a6 });
var _c3 = (a0) => ({ "active": a0 });
var _c4 = (a0) => ({ "activate": a0 });
var _c5 = (a0) => ({ "custom-last": a0 });
var _c6 = (a0) => ({ "opened": a0 });
var _c7 = (a0) => ({ "submenu": a0 });
var _c8 = (a0) => ({ display: a0 });
function HeaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 3)(2, "div", 49)(3, "div", 50)(4, "div", 51)(5, "p", 52);
    \u0275\u0275element(6, "i", 53);
    \u0275\u0275text(7, "1442 Crosswind Drive Madisonville");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 54);
    \u0275\u0275element(9, "i", 55);
    \u0275\u0275text(10, "+1 45887 77874");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 50)(12, "div", 56)(13, "div", 57)(14, "a", 58);
    \u0275\u0275element(15, "img", 28);
    \u0275\u0275text(16, "ENG ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "ul", 29)(18, "li")(19, "a", 30);
    \u0275\u0275element(20, "img", 28);
    \u0275\u0275text(21, "ENG ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "li")(23, "a", 30);
    \u0275\u0275element(24, "img", 31);
    \u0275\u0275text(25, "ARA ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "li")(27, "a", 30);
    \u0275\u0275element(28, "img", 32);
    \u0275\u0275text(29, "FRE ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(30, "div", 59)(31, "a", 34);
    \u0275\u0275text(32, " USD ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "ul", 29)(34, "li")(35, "a", 35);
    \u0275\u0275text(36, "USD");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "li")(38, "a", 35);
    \u0275\u0275text(39, "YEN");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "li")(41, "a", 35);
    \u0275\u0275text(42, "EURO");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "ul", 60)(44, "li", 61)(45, "a", 62);
    \u0275\u0275element(46, "i", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "li", 61)(48, "a", 62);
    \u0275\u0275element(49, "i", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "li", 61)(51, "a", 62);
    \u0275\u0275element(52, "i", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "li", 61)(54, "a", 62);
    \u0275\u0275element(55, "i", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "li")(57, "a", 62);
    \u0275\u0275element(58, "i", 67);
    \u0275\u0275elementEnd()()()()()()()();
  }
}
function HeaderComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275element(1, "i", 68);
    \u0275\u0275elementEnd();
  }
}
function HeaderComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275element(1, "span")(2, "span")(3, "span");
    \u0275\u0275elementEnd();
  }
}
function HeaderComponent_a_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 69);
    \u0275\u0275element(1, "img", 70);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", ctx_r0.routes.home);
  }
}
function HeaderComponent_a_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 69);
    \u0275\u0275element(1, "img", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", ctx_r0.routes.home);
  }
}
function HeaderComponent_ng_container_21_Conditional_1_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78)(1, "div", 79)(2, "div", 80)(3, "a", 81);
    \u0275\u0275element(4, "img", 82);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 83)(6, "a", 81);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const menu_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r0.base === menu_r3.base);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", menu_r3.route);
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/home/", menu_r3.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", menu_r3.route);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(menu_r3.menuValue);
  }
}
function HeaderComponent_ng_container_21_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 73);
    \u0275\u0275listener("mouseenter", function HeaderComponent_ng_container_21_Conditional_1_Template_li_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.isHovered = true);
    })("mouseleave", function HeaderComponent_ng_container_21_Conditional_1_Template_li_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.isHovered = false);
    });
    \u0275\u0275elementStart(1, "a", 74);
    \u0275\u0275listener("click", function HeaderComponent_ng_container_21_Conditional_1_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openSubMenu());
    });
    \u0275\u0275text(2);
    \u0275\u0275element(3, "i", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 76)(5, "li")(6, "div", 77)(7, "div", 49);
    \u0275\u0275repeaterCreate(8, HeaderComponent_ng_container_21_Conditional_1_For_9_Template, 8, 7, "div", 78, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const mainMenus_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.base === mainMenus_r4.base || ctx_r0.base === mainMenus_r4.base2 || ctx_r0.base === mainMenus_r4.base3 || ctx_r0.base === mainMenus_r4.base4 || ctx_r0.base === mainMenus_r4.base5 || ctx_r0.base === mainMenus_r4.base6);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c7, ctx_r0.isDropdownOpen));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", mainMenus_r4.tittle, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(7, _c8, ctx_r0.isDropdownOpen ? "block" : ""));
    \u0275\u0275advance(4);
    \u0275\u0275repeater(mainMenus_r4.menu);
  }
}
function HeaderComponent_ng_container_21_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 84)(1, "a", 85);
    \u0275\u0275text(2);
    \u0275\u0275element(3, "i", 75);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mainMenus_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.base === mainMenus_r4.base);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", mainMenus_r4.route);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", mainMenus_r4.tittle, " ");
  }
}
function HeaderComponent_ng_container_21_Conditional_3_For_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 85);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const menu_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r0.page === menu_r7.page);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", menu_r7.route);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(menu_r7.menuValue);
  }
}
function HeaderComponent_ng_container_21_Conditional_3_For_6_Conditional_1_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 85);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const subMenu_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("active", ctx_r0.page === subMenu_r9.page);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", subMenu_r9.route);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(subMenu_r9.menuValue);
  }
}
function HeaderComponent_ng_container_21_Conditional_3_For_6_Conditional_1_For_5_Conditional_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 85);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const subMenu2_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(7);
    \u0275\u0275classProp("active", ctx_r0.page === subMenu2_r10.page);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", subMenu2_r10.route);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(subMenu2_r10.menuValue);
  }
}
function HeaderComponent_ng_container_21_Conditional_3_For_6_Conditional_1_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 84)(1, "a", 62);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 88);
    \u0275\u0275repeaterCreate(4, HeaderComponent_ng_container_21_Conditional_3_For_6_Conditional_1_For_5_Conditional_1_For_5_Template, 3, 4, "li", 87, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const subMenu_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("active", ctx_r0.page === subMenu_r9.page || ctx_r0.page === subMenu_r9.page1 || ctx_r0.page === subMenu_r9.page2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(subMenu_r9.menuValue);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(subMenu_r9.subMenus);
  }
}
function HeaderComponent_ng_container_21_Conditional_3_For_6_Conditional_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HeaderComponent_ng_container_21_Conditional_3_For_6_Conditional_1_For_5_Conditional_0_Template, 3, 4, "li", 87);
    \u0275\u0275conditionalCreate(1, HeaderComponent_ng_container_21_Conditional_3_For_6_Conditional_1_For_5_Conditional_1_Template, 6, 3, "li", 72);
  }
  if (rf & 2) {
    const subMenu_r9 = ctx.$implicit;
    \u0275\u0275conditional(subMenu_r9.hasSubRoute === false ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(subMenu_r9.hasSubRoute === true ? 1 : -1);
  }
}
function HeaderComponent_ng_container_21_Conditional_3_For_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 84)(1, "a", 74);
    \u0275\u0275listener("click", function HeaderComponent_ng_container_21_Conditional_3_For_6_Conditional_1_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const i_r6 = \u0275\u0275nextContext(3).index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openSubMenu1(i_r6));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 86);
    \u0275\u0275repeaterCreate(4, HeaderComponent_ng_container_21_Conditional_3_For_6_Conditional_1_For_5_Template, 2, 2, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const menu_r7 = \u0275\u0275nextContext().$implicit;
    const i_r6 = \u0275\u0275nextContext(2).index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.page === menu_r7.base || ctx_r0.page === menu_r7.base1 || ctx_r0.page === menu_r7.base2 || ctx_r0.page === menu_r7.base3 || ctx_r0.page === menu_r7.base4 || ctx_r0.page === menu_r7.base5 || ctx_r0.page === menu_r7.base6 || ctx_r0.page === menu_r7.base7);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c7, ctx_r0.isDropdownOpen1 === i_r6));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(menu_r7.menuValue);
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(7, _c8, ctx_r0.isDropdownOpen1 === i_r6 ? "block" : ""));
    \u0275\u0275advance();
    \u0275\u0275repeater(menu_r7.subMenus);
  }
}
function HeaderComponent_ng_container_21_Conditional_3_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HeaderComponent_ng_container_21_Conditional_3_For_6_Conditional_0_Template, 3, 4, "li", 87);
    \u0275\u0275conditionalCreate(1, HeaderComponent_ng_container_21_Conditional_3_For_6_Conditional_1_Template, 6, 9, "li", 72);
  }
  if (rf & 2) {
    const menu_r7 = ctx.$implicit;
    \u0275\u0275conditional(menu_r7.hasSubRoute === false ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(menu_r7.hasSubRoute === true ? 1 : -1);
  }
}
function HeaderComponent_ng_container_21_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 84)(1, "a", 74);
    \u0275\u0275listener("click", function HeaderComponent_ng_container_21_Conditional_3_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const i_r6 = \u0275\u0275nextContext().index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleSubMenu(i_r6));
    });
    \u0275\u0275text(2);
    \u0275\u0275element(3, "i", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 86);
    \u0275\u0275repeaterCreate(5, HeaderComponent_ng_container_21_Conditional_3_For_6_Template, 2, 2, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r10 = \u0275\u0275nextContext();
    const mainMenus_r4 = ctx_r10.$implicit;
    const i_r6 = ctx_r10.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.base === mainMenus_r4.base || ctx_r0.base === mainMenus_r4.base2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c7, ctx_r0.openDropdownIndex === i_r6));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", mainMenus_r4.tittle, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(7, _c8, ctx_r0.openDropdownIndex === i_r6 ? "block" : ""));
    \u0275\u0275advance();
    \u0275\u0275repeater(mainMenus_r4.menu);
  }
}
function HeaderComponent_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275conditionalCreate(1, HeaderComponent_ng_container_21_Conditional_1_Template, 10, 9, "li", 71);
    \u0275\u0275conditionalCreate(2, HeaderComponent_ng_container_21_Conditional_2_Template, 4, 4, "li", 72);
    \u0275\u0275conditionalCreate(3, HeaderComponent_ng_container_21_Conditional_3_Template, 7, 9, "li", 72);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const mainMenus_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(mainMenus_r4.separateRoute === false && mainMenus_r4.tittle === "Home" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(mainMenus_r4.separateRoute === true ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(mainMenus_r4.separateRoute === false && mainMenus_r4.tittle !== "Home" ? 3 : -1);
  }
}
function HeaderComponent_ng_container_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 89);
    \u0275\u0275element(2, "i", 90);
    \u0275\u0275text(3, "Sign In");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 91);
    \u0275\u0275element(5, "i", 92);
    \u0275\u0275text(6, "Register");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r0.routes.login);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r0.routes.register);
  }
}
function HeaderComponent_ng_container_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 93)(2, "div", 94);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 95);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 96);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "titlecase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "a", 97);
    \u0275\u0275element(11, "i", 98);
    \u0275\u0275text(12, "Mon Profil ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a", 97);
    \u0275\u0275element(14, "i", 99);
    \u0275\u0275text(15, "Mon Dashboard ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "a", 100);
    \u0275\u0275listener("click", function HeaderComponent_ng_container_73_Template_a_click_16_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.doLogout());
    });
    \u0275\u0275element(17, "i", 101);
    \u0275\u0275text(18, "D\xE9connexion ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.userInitials);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.userName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 5, ctx_r0.userRole));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r0.profileRoute);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r0.dashboardRoute);
  }
}
function HeaderComponent_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102)(1, "a", 103);
    \u0275\u0275element(2, "img", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 29)(4, "li")(5, "a", 30);
    \u0275\u0275element(6, "img", 28);
    \u0275\u0275text(7, "ENG ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "li")(9, "a", 30);
    \u0275\u0275element(10, "img", 31);
    \u0275\u0275text(11, "ARA ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "li")(13, "a", 30);
    \u0275\u0275element(14, "img", 32);
    \u0275\u0275text(15, "FRE ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 105)(17, "a", 106);
    \u0275\u0275element(18, "i", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "ul", 29)(20, "li")(21, "a", 35);
    \u0275\u0275text(22, "USD");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "li")(24, "a", 35);
    \u0275\u0275text(25, "YEN");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "li")(27, "a", 35);
    \u0275\u0275text(28, "EURO");
    \u0275\u0275elementEnd()()()();
  }
}
function HeaderComponent_ng_container_87_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 112);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.unreadMsgCount > 99 ? "99+" : ctx_r0.unreadMsgCount, " ");
  }
}
function HeaderComponent_ng_container_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 108)(2, "a", 109);
    \u0275\u0275element(3, "i", 110);
    \u0275\u0275template(4, HeaderComponent_ng_container_87_span_4_Template, 2, 1, "span", 111);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r0.dashboardRoute);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.unreadMsgCount > 0);
  }
}
function HeaderComponent_Conditional_88_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 113);
    \u0275\u0275text(2, " Sign In ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 114);
    \u0275\u0275text(4, " Register ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r0.routes.login);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r0.routes.register);
  }
}
function HeaderComponent_Conditional_88_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 115)(2, "button", 116);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_88_ng_container_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleProfileDropdown());
    });
    \u0275\u0275elementStart(3, "div", 117);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ul", 118)(6, "li", 119)(7, "p", 120);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 96);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "li")(13, "a", 121);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_88_ng_container_1_Template_a_click_13_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.isProfileDropdownOpen = false);
    });
    \u0275\u0275element(14, "i", 98);
    \u0275\u0275text(15, "Mon Profil");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "li")(17, "a", 121);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_88_ng_container_1_Template_a_click_17_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.isProfileDropdownOpen = false);
    });
    \u0275\u0275element(18, "i", 99);
    \u0275\u0275text(19, "Mon Dashboard");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "li");
    \u0275\u0275element(21, "hr", 122);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "li")(23, "a", 123);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_88_ng_container_1_Template_a_click_23_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.doLogout());
    });
    \u0275\u0275element(24, "i", 124);
    \u0275\u0275text(25, "D\xE9connexion");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("show", ctx_r0.isProfileDropdownOpen);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.userInitials);
    \u0275\u0275advance();
    \u0275\u0275classProp("show", ctx_r0.isProfileDropdownOpen);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.userName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, ctx_r0.userRole));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r0.profileRoute);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", ctx_r0.dashboardRoute);
  }
}
function HeaderComponent_Conditional_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, HeaderComponent_Conditional_88_ng_container_0_Template, 5, 2, "ng-container", 37)(1, HeaderComponent_Conditional_88_ng_container_1_Template, 26, 11, "ng-container", 37);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", !ctx_r0.isLoggedIn);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoggedIn);
  }
}
function HeaderComponent_Conditional_89_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 125);
    \u0275\u0275element(2, "i", 126);
    \u0275\u0275text(3, "Sign In ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 114);
    \u0275\u0275element(5, "i", 92);
    \u0275\u0275text(6, "Register ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r0.routes.login);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r0.routes.register);
  }
}
function HeaderComponent_Conditional_89_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 115)(2, "button", 127);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_89_ng_container_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleProfileDropdown());
    });
    \u0275\u0275elementStart(3, "div", 128);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 129);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "ul", 118)(8, "li", 119)(9, "p", 120);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 96);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "li")(15, "a", 121);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_89_ng_container_1_Template_a_click_15_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.isProfileDropdownOpen = false);
    });
    \u0275\u0275element(16, "i", 98);
    \u0275\u0275text(17, "Mon Profil");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "li")(19, "a", 121);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_89_ng_container_1_Template_a_click_19_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.isProfileDropdownOpen = false);
    });
    \u0275\u0275element(20, "i", 99);
    \u0275\u0275text(21, "Mon Dashboard");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "li");
    \u0275\u0275element(23, "hr", 122);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "li")(25, "a", 123);
    \u0275\u0275listener("click", function HeaderComponent_Conditional_89_ng_container_1_Template_a_click_25_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.doLogout());
    });
    \u0275\u0275element(26, "i", 124);
    \u0275\u0275text(27, "D\xE9connexion");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("show", ctx_r0.isProfileDropdownOpen);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.userInitials);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.userName);
    \u0275\u0275advance();
    \u0275\u0275classProp("show", ctx_r0.isProfileDropdownOpen);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.userName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 10, ctx_r0.userRole));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r0.profileRoute);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", ctx_r0.dashboardRoute);
  }
}
function HeaderComponent_Conditional_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, HeaderComponent_Conditional_89_ng_container_0_Template, 7, 2, "ng-container", 37)(1, HeaderComponent_Conditional_89_ng_container_1_Template, 28, 12, "ng-container", 37);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", !ctx_r0.isLoggedIn);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoggedIn);
  }
}
function HeaderComponent_div_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40)(2, "a", 41);
    \u0275\u0275listener("click", function HeaderComponent_div_90_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.sidebarService.changeThemeColor("dark-mode"));
    });
    \u0275\u0275element(3, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 43);
    \u0275\u0275listener("click", function HeaderComponent_div_90_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.sidebarService.changeThemeColor("light-mode"));
    });
    \u0275\u0275element(5, "i", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 130)(7, "a", 58);
    \u0275\u0275element(8, "img", 28);
    \u0275\u0275text(9, "ENG ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ul", 29)(11, "li")(12, "a", 30);
    \u0275\u0275element(13, "img", 28);
    \u0275\u0275text(14, "ENG ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "li")(16, "a", 30);
    \u0275\u0275element(17, "img", 31);
    \u0275\u0275text(18, "ARA ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "li")(20, "a", 30);
    \u0275\u0275element(21, "img", 32);
    \u0275\u0275text(22, "FRE ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "div", 131)(24, "a", 34);
    \u0275\u0275text(25, " USD ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ul", 29)(27, "li")(28, "a", 35);
    \u0275\u0275text(29, "USD");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "li")(31, "a", 35);
    \u0275\u0275text(32, "YEN");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "li")(34, "a", 35);
    \u0275\u0275text(35, "EURO");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "a", 113);
    \u0275\u0275text(37, " Sign In ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "a", 114);
    \u0275\u0275text(39, " Register ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c4, ctx_r0.themeColor === "light-mode"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c4, ctx_r0.themeColor === "dark-mode"));
    \u0275\u0275advance(32);
    \u0275\u0275property("routerLink", ctx_r0.routes.login);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r0.routes.register);
  }
}
var HeaderComponent = class _HeaderComponent {
  common;
  data;
  sidebarService;
  renderer;
  el;
  authService;
  router;
  messageService;
  routes = routes;
  menuElement;
  headerpage = false;
  sticky = false;
  elementPosition;
  headerClass = true;
  isHovered = false;
  isFixed = false;
  isOpened = false;
  isDropdownOpen = false;
  isDropdownOpen1 = null;
  base = "";
  page = "";
  last = "";
  headerMenuactive = "";
  openDropdownIndex = null;
  themeColor = "light-mode";
  islight = true;
  isdark = false;
  showDark = false;
  white_bg = false;
  // ── User state ──
  isLoggedIn = false;
  userName = "";
  userRole = "";
  isProfileDropdownOpen = false;
  unreadMsgCount = 0;
  pollSub;
  get userInitials() {
    if (!this.userName)
      return "U";
    return this.userName.split(" ").map((p) => p.charAt(0)).join("").toUpperCase().slice(0, 2);
  }
  get dashboardRoute() {
    if (this.userRole === "INSTRUCTOR")
      return "/instructor/instructor-dashboard";
    if (this.userRole === "STUDENT")
      return "/student/student-dashboard";
    if (this.userRole === "ADMIN")
      return "/admin/admin-dashboard";
    return "/";
  }
  get profileRoute() {
    if (this.userRole === "INSTRUCTOR")
      return "/instructor/settings/instructor-settings";
    if (this.userRole === "STUDENT")
      return "/student/student-profile";
    return "/";
  }
  doLogout() {
    this.isProfileDropdownOpen = false;
    this.authService.logout();
  }
  toggleProfileDropdown() {
    this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
  }
  sidebar;
  constructor(common, data, sidebarService, renderer, el, authService, router, messageService) {
    this.common = common;
    this.data = data;
    this.sidebarService = sidebarService;
    this.renderer = renderer;
    this.el = el;
    this.authService = authService;
    this.router = router;
    this.messageService = messageService;
    this.common.base.subscribe((res) => {
      this.base = res;
      this.renderer.removeClass(document.documentElement, "menu-opened");
      this.isOpened = false;
    });
    this.common.page.subscribe((res) => {
      this.page = res;
      this.renderer.removeClass(document.documentElement, "menu-opened");
      this.isOpened = false;
    });
    this.common.last.subscribe((res) => {
      this.last = res;
    });
    this.sidebar = this.data.sideBar;
    this.sidebarService.themeColors.subscribe((res) => {
      this.themeColor = res;
    });
  }
  onWindowScroll() {
    this.isFixed = window.pageYOffset > 40;
  }
  toggleSidebar() {
    this.sidebarService.openSidebar();
    this.isOpened = !this.isOpened;
    if (this.isOpened === true) {
      this.renderer.addClass(document.documentElement, "menu-opened");
    } else {
      this.renderer.removeClass(document.documentElement, "menu-opened");
    }
  }
  hideSidebar() {
    this.sidebarService.closeSidebar();
    this.isOpened = false;
    this.renderer.removeClass(document.documentElement, "menu-opened");
  }
  themeMode = "light_mode";
  isDarkMode = false;
  // toggleMode(isDark: boolean) {
  //   this.isDarkMode = isDark;
  //   this.applyTheme();
  // }
  openSubMenu() {
    this.isDropdownOpen = !this.isDropdownOpen;
    this.openDropdownIndex = null;
  }
  openSubMenu1(index) {
    this.isDropdownOpen1 = this.isDropdownOpen1 === index ? null : index;
  }
  toggleSubMenu(index) {
    this.openDropdownIndex = this.openDropdownIndex === index ? null : index;
    this.isDropdownOpen = false;
  }
  switchTheme() {
    this.isdark = !this.isdark;
    this.islight = !this.islight;
  }
  ngOnInit() {
    const themeColor = localStorage.getItem("themeColor") || "light-mode";
    this.sidebarService.changeThemeColor(themeColor);
    this.isLoggedIn = !!localStorage.getItem("token");
    this.userName = localStorage.getItem("fullName") || "Utilisateur";
    this.userRole = localStorage.getItem("role") || "";
    if (this.isLoggedIn) {
      this.refreshUnreadCount();
      this.pollSub = interval(3e4).pipe(switchMap(() => this.messageService.getUnreadCount())).subscribe({
        next: (res) => {
          this.unreadMsgCount = res?.count ?? res ?? 0;
        },
        error: () => {
        }
      });
    }
  }
  ngOnDestroy() {
    this.pollSub?.unsubscribe();
  }
  refreshUnreadCount() {
    this.messageService.getUnreadCount().subscribe({
      next: (res) => {
        this.unreadMsgCount = res?.count ?? res ?? 0;
      },
      error: () => {
      }
    });
  }
  static \u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderComponent)(\u0275\u0275directiveInject(CommonService), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(SidebarService), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.menuElement = _t.first);
    }
  }, hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("scroll", function HeaderComponent_scroll_HostBindingHandler() {
        return ctx.onWindowScroll();
      }, \u0275\u0275resolveWindow);
    }
  }, decls: 92, vars: 47, consts: [["class", "header-topbar text-center", 4, "ngIf"], [3, "ngClass"], [1, "", 3, "ngClass"], [1, "container"], [1, "header-nav"], [1, "navbar-header"], ["id", "mobile_btn", "href", "javascript:void(0);", 3, "click"], [1, "bar-icon"], [1, "navbar-logo"], ["class", "logo-white header-logo", 3, "routerLink", 4, "ngIf"], [1, "logo-dark", "header-logo", 3, "routerLink"], ["src", "assets/img/logo-white.svg", "alt", "Logo", 1, "logo"], [1, "main-menu-wrapper", 3, "ngClass"], [1, "menu-header"], [1, "menu-logo", 3, "routerLink"], ["src", "assets/img/logo.svg", "alt", "Logo", 1, "img-fluid"], ["id", "menu_close", "href", "javascript:void(0);", 1, "menu-close", 3, "click"], [1, "fas", "fa-times"], [1, "main-nav", 3, "ngClass"], [4, "ngFor", "ngForOf"], [1, "menu-dropdown"], [1, "cart-item"], [1, "icon-btn"], [1, "position-relative", 3, "routerLink"], [1, "isax", "isax-shopping-cart5"], [1, "count-icon", "bg-success", "p-1", "rounded-pill", "text-white", "fs-10", "fw-bold"], [1, "dropdown", "flag-dropdown", "mb-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle", "d-flex", "align-items-center"], ["src", "assets/img/flags/us-flag.svg", "alt", "flag", 1, "me-2"], [1, "dropdown-menu", "p-2", "mt-2"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded", "d-flex", "align-items-center"], ["src", "assets/img/flags/arab-flag.svg", "alt", "flag", 1, "me-2"], ["src", "assets/img/flags/france-flag.svg", "alt", "flag", 1, "me-2"], [1, "dropdown", "mb-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded"], [1, "menu-login"], [4, "ngIf"], [3, "hidden"], [1, "header-btn", "d-flex", "align-items-center"], [1, "icon-btn", "me-2"], ["href", "javascript:void(0);", "id", "dark-mode-toggle", 1, "theme-toggle", 3, "click", "ngClass"], [1, "isax", "isax-sun-15"], ["href", "javascript:void(0);", "id", "light-mode-toggle", 1, "theme-toggle", 3, "click", "ngClass"], [1, "isax", "isax-moon"], [1, "icon-btn", "me-3", 3, "ngClass"], ["class", "header-btn d-flex align-items-center", 4, "ngIf"], [1, "sidebar-overlay", 3, "click", "ngClass"], [1, "header-topbar", "text-center"], [1, "row"], [1, "col-lg-6"], [1, "d-flex", "align-items-center", "justify-content-center", "justify-content-lg-start"], [1, "d-flex", "align-items-center", "fw-medium", "fs-14", "mb-2", "me-3"], [1, "isax", "isax-location5", "me-2"], [1, "d-flex", "align-items-center", "fw-medium", "fs-14", "mb-2"], [1, "isax", "isax-call-calling5", "me-2"], [1, "d-flex", "align-items-center", "justify-content-center", "justify-content-lg-end"], [1, "dropdown", "flag-dropdown", "mb-2", "me-3"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle", "d-inline-flex", "align-items-center"], [1, "dropdown", "mb-2", "me-3"], [1, "social-icon", "d-flex", "align-items-center", "mb-2"], [1, "me-2"], ["href", "javascript:void(0);"], [1, "fa-brands", "fa-facebook-f"], [1, "fa-brands", "fa-instagram"], [1, "fa-brands", "fa-x-twitter"], [1, "fa-brands", "fa-youtube"], [1, "fa-brands", "fa-linkedin"], [1, "isax", "isax-menu"], [1, "logo-white", "header-logo", 3, "routerLink"], ["src", "assets/img/logo.svg", "alt", "Logo", 1, "logo"], [1, "has-submenu", "megamenu", 3, "active"], [1, "has-submenu", 3, "active"], [1, "has-submenu", "megamenu", 3, "mouseenter", "mouseleave"], ["href", "javascript:void(0);", 3, "click", "ngClass"], [1, "fas", "fa-chevron-down"], [1, "submenu", "mega-submenu", 3, "ngStyle"], [1, "megamenu-wrapper"], [1, "col-lg-2"], [1, "single-demo"], [1, "demo-img"], [1, "inner-demo-img", 3, "routerLink"], ["alt", "img", 1, "img-fluid", 3, "src"], [1, "demo-info"], [1, "has-submenu"], [3, "routerLink"], [1, "submenu", 3, "ngStyle"], [3, "active"], [1, "submenu"], [1, "btn", "btn-primary", "w-100", "mb-2", 3, "routerLink"], [1, "isax", "isax-user", "me-2"], [1, "btn", "btn-secondary", "w-100", 3, "routerLink"], [1, "isax", "isax-user-edit", "me-2"], [1, "d-flex", "align-items-center", "gap-2", "p-2", "rounded-3", "bg-light", "mb-2"], [1, "user-avatar-circle", 2, "width", "40px", "height", "40px", "border-radius", "50%", "background", "linear-gradient(135deg,#6366f1,#8b5cf6)", "color", "#fff", "display", "flex", "align-items", "center", "justify-content", "center", "font-weight", "700", "font-size", "14px", "flex-shrink", "0"], [1, "mb-0", "fw-semibold", "fs-14", "text-truncate", 2, "max-width", "160px"], [1, "badge", "bg-primary-subtle", "text-primary", "small"], [1, "dropdown-item", "rounded", "py-2", "px-2", "d-flex", "align-items-center", "gap-2", "mb-1", 3, "routerLink"], [1, "isax", "isax-user-square", "fs-18", "text-primary"], [1, "isax", "isax-home-2", "fs-18", "text-success"], ["href", "javascript:void(0);", 1, "btn", "btn-outline-danger", "w-100", "mt-2", 3, "click"], [1, "isax", "isax-logout", "me-2"], [1, "dropdown", "flag-dropdown", "icon-btn", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "d-inline-flex", "align-items-center"], ["src", "assets/img/flags/us-flag.svg", "alt", "flag"], [1, "dropdown", "icon-btn", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false"], [1, "isax", "isax-dollar-circle4"], [1, "icon-btn", "me-3", "position-relative"], ["title", "Messages", 1, "position-relative", 3, "routerLink"], [1, "isax", "isax-messages-35", "fs-20"], ["style", "position:absolute;top:-6px;right:-8px;background:#4a1d96;color:#fff;border-radius:50%;font-size:10px;font-weight:700;min-width:18px;height:18px;display:flex;align-items:center;justify-content:center;padding:0 3px;", 4, "ngIf"], [2, "position", "absolute", "top", "-6px", "right", "-8px", "background", "#4a1d96", "color", "#fff", "border-radius", "50%", "font-size", "10px", "font-weight", "700", "min-width", "18px", "height", "18px", "display", "flex", "align-items", "center", "justify-content", "center", "padding", "0 3px"], [1, "btn", "btn-primary", "d-inline-flex", "align-items-center", "me-2", 3, "routerLink"], [1, "btn", "btn-secondary", "me-0", 3, "routerLink"], [1, "dropdown", "me-0"], [1, "btn", "p-0", "border-0", "bg-transparent", 2, "outline", "none", 3, "click"], [2, "width", "40px", "height", "40px", "border-radius", "50%", "background", "linear-gradient(135deg,#6366f1,#8b5cf6)", "color", "#fff", "display", "flex", "align-items", "center", "justify-content", "center", "font-weight", "700", "font-size", "14px"], [1, "dropdown-menu", "dropdown-menu-end", "p-2", "mt-2", 2, "min-width", "220px", "border-radius", "12px", "box-shadow", "0 8px 32px rgba(0,0,0,.13)"], [1, "px-3", "py-2", "border-bottom", "mb-1"], [1, "mb-0", "fw-semibold"], [1, "dropdown-item", "rounded", "d-flex", "align-items-center", "gap-2", "py-2", 3, "click", "routerLink"], [1, "dropdown-divider"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded", "d-flex", "align-items-center", "gap-2", "py-2", "text-danger", 3, "click"], [1, "isax", "isax-logout", "fs-18"], [1, "btn", "btn-light", "d-inline-flex", "align-items-center", "me-2", 3, "routerLink"], [1, "isax", "isax-lock-circle", "me-2"], [1, "btn", "p-0", "border-0", "bg-transparent", "d-flex", "align-items-center", "gap-2", 2, "outline", "none", 3, "click"], [2, "width", "38px", "height", "38px", "border-radius", "50%", "background", "linear-gradient(135deg,#6366f1,#8b5cf6)", "color", "#fff", "display", "flex", "align-items", "center", "justify-content", "center", "font-weight", "700", "font-size", "13px", "flex-shrink", "0"], [1, "d-none", "d-lg-inline", "fw-medium", "fs-14"], [1, "dropdown", "flag-dropdown", "me-3"], [1, "dropdown", "me-3"]], template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, HeaderComponent_div_0_Template, 59, 0, "div", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "header", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "a", 6);
      \u0275\u0275listener("click", function HeaderComponent_Template_a_click_6_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275conditionalCreate(7, HeaderComponent_Conditional_7_Template, 2, 0, "span", 7)(8, HeaderComponent_Conditional_8_Template, 4, 0, "span", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 8);
      \u0275\u0275template(10, HeaderComponent_a_10_Template, 2, 1, "a", 9)(11, HeaderComponent_a_11_Template, 2, 1, "a", 9);
      \u0275\u0275elementStart(12, "a", 10);
      \u0275\u0275element(13, "img", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 12)(15, "div", 13)(16, "a", 14);
      \u0275\u0275element(17, "img", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "a", 16);
      \u0275\u0275listener("click", function HeaderComponent_Template_a_click_18_listener() {
        return ctx.hideSidebar();
      });
      \u0275\u0275element(19, "i", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "ul", 18);
      \u0275\u0275template(21, HeaderComponent_ng_container_21_Template, 4, 3, "ng-container", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 20)(23, "div", 21)(24, "h6");
      \u0275\u0275text(25, "Cart & Wishlist");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 22)(27, "a", 23);
      \u0275\u0275element(28, "i", 24);
      \u0275\u0275elementStart(29, "span", 25);
      \u0275\u0275text(30, "1");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(31, "div", 26)(32, "a", 27);
      \u0275\u0275element(33, "img", 28);
      \u0275\u0275text(34, "ENG ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "ul", 29)(36, "li")(37, "a", 30);
      \u0275\u0275element(38, "img", 28);
      \u0275\u0275text(39, "ENG ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "li")(41, "a", 30);
      \u0275\u0275element(42, "img", 31);
      \u0275\u0275text(43, "ARA ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "li")(45, "a", 30);
      \u0275\u0275element(46, "img", 32);
      \u0275\u0275text(47, "FRE ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(48, "div", 33)(49, "a", 34);
      \u0275\u0275text(50, " USD ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "ul", 29)(52, "li")(53, "a", 35);
      \u0275\u0275text(54, "USD");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "li")(56, "a", 35);
      \u0275\u0275text(57, "YEN");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "li")(59, "a", 35);
      \u0275\u0275text(60, "EURO");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(61, "div", 33)(62, "a", 34);
      \u0275\u0275text(63, " Light ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "ul", 29)(65, "li")(66, "a", 35);
      \u0275\u0275text(67, "Light");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "li")(69, "a", 35);
      \u0275\u0275text(70, "Dark");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(71, "div", 36);
      \u0275\u0275template(72, HeaderComponent_ng_container_72_Template, 7, 2, "ng-container", 37)(73, HeaderComponent_ng_container_73_Template, 19, 7, "ng-container", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "div", 38)(75, "div", 39);
      \u0275\u0275conditionalCreate(76, HeaderComponent_Conditional_76_Template, 29, 0);
      \u0275\u0275elementStart(77, "div", 40)(78, "a", 41);
      \u0275\u0275listener("click", function HeaderComponent_Template_a_click_78_listener() {
        return ctx.sidebarService.changeThemeColor("dark-mode");
      });
      \u0275\u0275element(79, "i", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "a", 43);
      \u0275\u0275listener("click", function HeaderComponent_Template_a_click_80_listener() {
        return ctx.sidebarService.changeThemeColor("light-mode");
      });
      \u0275\u0275element(81, "i", 44);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "div", 45)(83, "a", 23);
      \u0275\u0275element(84, "i", 24);
      \u0275\u0275elementStart(85, "span", 25);
      \u0275\u0275text(86, "1");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(87, HeaderComponent_ng_container_87_Template, 5, 2, "ng-container", 37);
      \u0275\u0275conditionalCreate(88, HeaderComponent_Conditional_88_Template, 2, 2);
      \u0275\u0275conditionalCreate(89, HeaderComponent_Conditional_89_Template, 2, 2);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(90, HeaderComponent_div_90_Template, 40, 8, "div", 46);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(91, "div", 47);
      \u0275\u0275listener("click", function HeaderComponent_Template_div_click_91_listener() {
        return ctx.hideSidebar();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.base === "index-two" || ctx.base === "courses" || ctx.base === "pages");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(25, _c1, ctx.base === "index-six"));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction7(27, _c2, ctx.base === "index", ctx.base === "index-two" || ctx.base === "courses", ctx.base === "index-three" || ctx.base === "index-six", ctx.base === "index-three", ctx.base === "index-four", ctx.base === "index-five", ctx.isFixed));
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.base.includes("index") ? 7 : 8);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.base === "index-two" || ctx.base === "index-three" || ctx.base === "index-four" || ctx.base === "index-five" || ctx.base === "index-six" || ctx.base === "courses" || ctx.base === "pages" || ctx.base === "blog");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.base === "index");
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", ctx.routes.home);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(35, _c3, ctx.isHovered));
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.home);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(37, _c3, ctx.isHovered));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.sidebar);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.cart);
      \u0275\u0275advance(45);
      \u0275\u0275property("ngIf", !ctx.isLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("hidden", ctx.base === "index-three" || ctx.base === "index-four");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.base === "index" || ctx.base === "index-two" || ctx.base === "index-three" || ctx.base === "index-four" || ctx.base === "index-five" || ctx.base === "index-six" ? 76 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(39, _c4, ctx.themeColor === "light-mode"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(41, _c4, ctx.themeColor === "dark-mode"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(43, _c5, ctx.base === "index-six"));
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", ctx.routes.cart);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.isLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.base === "index" || ctx.base === "index-six" ? 88 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.base === "index-two" || ctx.base === "courses" || ctx.base === "pages" || ctx.base === "blog" ? 89 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.base === "index-three" || ctx.base === "index-four");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(45, _c6, ctx.isOpened));
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgStyle, RouterLink, TitleCasePipe], styles: ["\n\n.disply-none[_ngcontent-%COMP%] {\n  display: none;\n}\n.disply-block[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=header.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{ selector: "app-header", imports: [CommonModule, RouterLink], template: `<!-- Header Topbar-->
<div *ngIf="base==='index-two' || base==='courses' || base==='pages'" class="header-topbar text-center">
<div class="container">
    <div class="row">
        <div class="col-lg-6">
            <div class="d-flex align-items-center justify-content-center justify-content-lg-start">
                <p class="d-flex align-items-center fw-medium fs-14 mb-2 me-3"><i class="isax isax-location5 me-2"></i>1442 Crosswind Drive Madisonville</p>
                <p class="d-flex align-items-center fw-medium fs-14 mb-2"><i class="isax isax-call-calling5 me-2"></i>+1 45887 77874</p>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="d-flex align-items-center justify-content-center justify-content-lg-end">
                <div class="dropdown flag-dropdown mb-2 me-3">
                    <a href="javascript:void(0);" class="dropdown-toggle d-inline-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="assets/img/flags/us-flag.svg" class="me-2" alt="flag">ENG
                    </a>
                    <ul class="dropdown-menu p-2 mt-2">
                        <li>
                            <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">
                                <img src="assets/img/flags/us-flag.svg" class="me-2" alt="flag">ENG
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">
                                <img src="assets/img/flags/arab-flag.svg" class="me-2" alt="flag">ARA
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">
                                <img src="assets/img/flags/france-flag.svg" class="me-2" alt="flag">FRE
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="dropdown mb-2 me-3">
                    <a href="javascript:void(0);" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        USD
                    </a>
                    <ul class="dropdown-menu p-2 mt-2">
                        <li><a class="dropdown-item rounded" href="javascript:void(0);">USD</a></li>
                        <li><a class="dropdown-item rounded" href="javascript:void(0);">YEN</a></li>
                        <li><a class="dropdown-item rounded" href="javascript:void(0);">EURO</a></li>
                    </ul>
                </div>
                <ul class="social-icon d-flex align-items-center mb-2">
                    <li class="me-2">
                        <a href="javascript:void(0);"><i class="fa-brands fa-facebook-f"></i></a>
                    </li>
                    <li class="me-2">
                        <a href="javascript:void(0);"><i class="fa-brands fa-instagram"></i></a>
                    </li>
                    <li class="me-2">
                        <a href="javascript:void(0);"><i class="fa-brands fa-x-twitter"></i></a>
                    </li>
                    <li class="me-2">
                        <a href="javascript:void(0);"><i class="fa-brands fa-youtube"></i></a>
                    </li>
                    <li>
                        <a href="javascript:void(0);"><i class="fa-brands fa-linkedin"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</div>
<!-- /Header Topbar-->

<!-- Header -->
 <div [ngClass]="{'home-six':base==='index-six'}">

   <header
     class=""
     [ngClass]="{
         'header-one':base==='index',
         'header-two':base==='index-two'|| base==='courses',
         'header-three':base==='index-three' || base==='index-six',
         'position-fixed':base==='index-three',
         'header-four':base==='index-four',
         'header-two header-five position-fixed':base==='index-five',
         'fixed': isFixed,
     }"
     > 
     <div class="container">
       <div class="header-nav">
         <div class="navbar-header">
           <a id="mobile_btn" href="javascript:void(0);"  (click)="toggleSidebar()">
            @if(base.includes('index')){
             <span class="bar-icon">
               <i class="isax isax-menu"></i>
             </span>
            }
            @else{
              <span class="bar-icon">
									<span></span>
									<span></span>
									<span></span>
								</span>
            }
           </a>
           <div class="navbar-logo">
             <a *ngIf="base==='index-two' || base==='index-three' || base==='index-four' || base==='index-five' || base==='index-six' || base==='courses' || base==='pages' || base==='blog'" class="logo-white header-logo" [routerLink]="routes.home">
               <img src="assets/img/logo.svg" class="logo" alt="Logo">
             </a>
             <a *ngIf="base==='index'" class="logo-white header-logo" [routerLink]="routes.home">
               <img src="assets/img/logo-white.svg" class="logo" alt="Logo">
             </a>
             <a  class="logo-dark header-logo" [routerLink]="routes.home">
               <img src="assets/img/logo-white.svg" class="logo" alt="Logo">
             </a>
           </div>
         </div>
         <div class="main-menu-wrapper" [ngClass]="{ 'active': isHovered }">								
           <div class="menu-header">
             <a [routerLink]="routes.home" class="menu-logo">
               <img src="assets/img/logo.svg" class="img-fluid" alt="Logo">
             </a>
             <a id="menu_close" class="menu-close" href="javascript:void(0);" (click)="hideSidebar()">
               <i class="fas fa-times"></i>
             </a>
           </div>
           <ul class="main-nav" [ngClass]="{ 'active': isHovered }">
             <ng-container *ngFor="let mainMenus of sidebar, let i = index">
               @if(mainMenus.separateRoute === false && mainMenus.tittle === 'Home'){
               <li class="has-submenu megamenu"  [class.active]="base===mainMenus.base || base===mainMenus.base2 || base===mainMenus.base3 || base===mainMenus.base4 || base===mainMenus.base5 || base===mainMenus.base6" (mouseenter)="isHovered = true"  (mouseleave)="isHovered = false">
                 <a href="javascript:void(0);" [ngClass]="{'submenu':isDropdownOpen}" (click)="openSubMenu()">{{mainMenus.tittle}} <i class="fas fa-chevron-down"></i></a>
                 <ul class="submenu mega-submenu" [ngStyle]="{ display: isDropdownOpen ? 'block' : '' }">
                   <li>
                     <div class="megamenu-wrapper">
                       <div class="row">
                         @for (menu of mainMenus.menu;track menu){
                           <div class="col-lg-2">
                             <div class="single-demo" [class.active]="base===menu.base">
                               <div class="demo-img">
                                 <a [routerLink]="menu.route" class="inner-demo-img"><img src="assets/img/home/{{menu.img}}" class="img-fluid " alt="img"></a>
                               </div>
                               <div class="demo-info">
                                 <a [routerLink]="menu.route" class="inner-demo-img">{{menu.menuValue}}</a>
                               </div>
                             </div>
                           </div>
                         }
                         
                       </div>
                     </div>
                   </li>
                 </ul>
               </li>
               }
             @if (mainMenus.separateRoute === true) {
             <li class="has-submenu" [class.active]="base ===mainMenus.base">
               <a [routerLink]="mainMenus.route">{{ mainMenus.tittle }} <i class="fas fa-chevron-down"></i></a>
             </li>
               }
               @if (mainMenus.separateRoute === false && mainMenus.tittle!=='Home') {
                 <li class="has-submenu" [class.active]="base === mainMenus.base || base=== mainMenus.base2">
                   <a href="javascript:void(0);" [ngClass]="{'submenu':openDropdownIndex === i}" (click)="toggleSubMenu(i)">{{ mainMenus.tittle }} <i class="fas fa-chevron-down"></i></a>
                   <ul class="submenu" [ngStyle]="{ display: openDropdownIndex === i ? 'block' : '' }">
                     @for (menu of mainMenus.menu; track menu) {
                         @if (menu.hasSubRoute === false) {
                         <li [class.active]="page===menu.page">
                           <a [routerLink]="menu.route">{{ menu.menuValue }}</a>
                         </li>
                         }
                         @if (menu.hasSubRoute === true) {
                           <li class="has-submenu" [class.active]="page===menu.base || page===menu.base1 || page===menu.base2 || page===menu.base3 || page===menu.base4
                           || page===menu.base5 || page===menu.base6 || page===menu.base7">
                             <a href="javascript:void(0);" [ngClass]="{'submenu':isDropdownOpen1 === i}" (click)="openSubMenu1(i)">{{ menu.menuValue }}</a>
                             <ul class="submenu" [ngStyle]="{ display: isDropdownOpen1 === i ? 'block' : '' }">
                               @for (subMenu of menu.subMenus; track subMenu) {
                                 @if(subMenu.hasSubRoute===false){
                                   <li [class.active]="page===subMenu.page"><a [routerLink]="subMenu.route">{{ subMenu.menuValue }}</a></li>
                                 }
                                 @if(subMenu.hasSubRoute===true){
                                   <li class="has-submenu" [class.active]="page===subMenu.page || page===subMenu.page1 || page===subMenu.page2">
                                     <a href="javascript:void(0);">{{ subMenu.menuValue }}</a>
                                     <ul class="submenu">
                                       @for (subMenu2 of subMenu.subMenus; track subMenu2){
                                       <li [class.active]="page===subMenu2.page"><a [routerLink]="subMenu2.route" >{{subMenu2.menuValue}}</a></li>
                                       }
                                     </ul>
                                   </li>
                                 }
                               }
                             </ul>
                           </li>
                         }
                         }
                   </ul>
                   </li>
                 }
               </ng-container>
           </ul>
           <div class="menu-dropdown">
             <div class="cart-item">
               <h6>Cart & Wishlist</h6>                                
               <div class="icon-btn">
                 <a [routerLink]="routes.cart" class="position-relative">
                   <i class="isax isax-shopping-cart5"></i>
                   <span class="count-icon bg-success p-1 rounded-pill text-white fs-10 fw-bold">1</span>
                 </a>
               </div>
             </div>
             <div class="dropdown flag-dropdown mb-2">
               <a href="javascript:void(0);" class="dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
                 <img src="assets/img/flags/us-flag.svg" class="me-2" alt="flag">ENG
               </a>
               <ul class="dropdown-menu p-2 mt-2">
                 <li>
                   <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">
                     <img src="assets/img/flags/us-flag.svg" class="me-2" alt="flag">ENG
                   </a>
                 </li>
                 <li>
                   <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">
                     <img src="assets/img/flags/arab-flag.svg" class="me-2" alt="flag">ARA
                   </a>
                 </li>
                 <li>
                   <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">
                     <img src="assets/img/flags/france-flag.svg" class="me-2" alt="flag">FRE
                   </a>
                 </li>
               </ul>
             </div>
             <div class="dropdown mb-2">
               <a href="javascript:void(0);" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                 USD
               </a>
               <ul class="dropdown-menu p-2 mt-2">
                 <li><a class="dropdown-item rounded" href="javascript:void(0);">USD</a></li>
                 <li><a class="dropdown-item rounded" href="javascript:void(0);">YEN</a></li>
                 <li><a class="dropdown-item rounded" href="javascript:void(0);">EURO</a></li>
               </ul>
             </div>
             <div class="dropdown mb-2">
               <a href="javascript:void(0);" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                 Light
               </a>
               <ul class="dropdown-menu p-2 mt-2">
                 <li><a class="dropdown-item rounded" href="javascript:void(0);">Light</a></li>
                 <li><a class="dropdown-item rounded" href="javascript:void(0);">Dark</a></li>
               </ul>
             </div>
           </div>
           <div class="menu-login">
             <ng-container *ngIf="!isLoggedIn">
               <a [routerLink]="routes.login" class="btn btn-primary w-100 mb-2"><i class="isax isax-user me-2"></i>Sign In</a>
               <a [routerLink]="routes.register" class="btn btn-secondary w-100"><i class="isax isax-user-edit me-2"></i>Register</a>
             </ng-container>
             <ng-container *ngIf="isLoggedIn">
               <div class="d-flex align-items-center gap-2 p-2 rounded-3 bg-light mb-2">
                 <div class="user-avatar-circle" style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">{{ userInitials }}</div>
                 <div>
                   <p class="mb-0 fw-semibold fs-14 text-truncate" style="max-width:160px;">{{ userName }}</p>
                   <span class="badge bg-primary-subtle text-primary small">{{ userRole | titlecase }}</span>
                 </div>
               </div>
               <a [routerLink]="profileRoute" class="dropdown-item rounded py-2 px-2 d-flex align-items-center gap-2 mb-1">
                 <i class="isax isax-user-square fs-18 text-primary"></i>Mon Profil
               </a>
               <a [routerLink]="dashboardRoute" class="dropdown-item rounded py-2 px-2 d-flex align-items-center gap-2 mb-1">
                 <i class="isax isax-home-2 fs-18 text-success"></i>Mon Dashboard
               </a>
               <a href="javascript:void(0);" class="btn btn-outline-danger w-100 mt-2" (click)="doLogout()">
                 <i class="isax isax-logout me-2"></i>D\xE9connexion
               </a>
             </ng-container>
           </div>
         </div>
         <div [hidden]="base ==='index-three'|| base==='index-four'">
           <div class="header-btn d-flex align-items-center">			
         @if(base==='index' || base==='index-two' || base==='index-three' || base==='index-four' || base==='index-five' || base==='index-six'){
               <div class="dropdown flag-dropdown icon-btn me-2">
                 <a href="javascript:void(0);" class="d-inline-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
                   <img src="assets/img/flags/us-flag.svg" alt="flag">
                 </a>
                 <ul class="dropdown-menu p-2 mt-2">
                   <li>
                     <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">
                       <img src="assets/img/flags/us-flag.svg" class="me-2" alt="flag">ENG
                     </a>
                   </li>
                   <li>
                     <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">
                       <img src="assets/img/flags/arab-flag.svg" class="me-2" alt="flag">ARA
                     </a>
                   </li>
                   <li>
                     <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">
                       <img src="assets/img/flags/france-flag.svg" class="me-2" alt="flag">FRE
                     </a>
                   </li>
                 </ul>
               </div>
               <div class="dropdown icon-btn me-2">
                 <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
                   <i class="isax isax-dollar-circle4"></i>
                 </a>
                 <ul class="dropdown-menu p-2 mt-2">
                   <li><a class="dropdown-item rounded" href="javascript:void(0);">USD</a></li>
                   <li><a class="dropdown-item rounded" href="javascript:void(0);">YEN</a></li>
                   <li><a class="dropdown-item rounded" href="javascript:void(0);">EURO</a></li>
                 </ul>
               </div>
             }				
             <div class="icon-btn me-2">
               <a href="javascript:void(0);" id="dark-mode-toggle" class="theme-toggle" [ngClass]="{'activate' : themeColor==='light-mode'}" (click)="sidebarService.changeThemeColor('dark-mode')" >
                 <i class="isax isax-sun-15"></i>
               </a>
               <a href="javascript:void(0);" id="light-mode-toggle" class="theme-toggle" [ngClass]="{'activate' : themeColor==='dark-mode'}" (click)="sidebarService.changeThemeColor('light-mode')" >
                 <i class="isax isax-moon"></i>
               </a>
             </div>
             <div class="icon-btn me-3" [ngClass]="{'custom-last':base==='index-six'}">
               <a [routerLink]="routes.cart" class="position-relative">
                 <i class="isax isax-shopping-cart5"></i>
                 <span class="count-icon bg-success p-1 rounded-pill text-white fs-10 fw-bold">1</span>
               </a>
             </div>
             <ng-container *ngIf="isLoggedIn">
               <div class="icon-btn me-3 position-relative">
                 <a [routerLink]="dashboardRoute" class="position-relative" title="Messages">
                   <i class="isax isax-messages-35 fs-20"></i>
                   <span *ngIf="unreadMsgCount > 0"
                     style="position:absolute;top:-6px;right:-8px;background:#4a1d96;color:#fff;border-radius:50%;font-size:10px;font-weight:700;min-width:18px;height:18px;display:flex;align-items:center;justify-content:center;padding:0 3px;">
                     {{ unreadMsgCount > 99 ? '99+' : unreadMsgCount }}
                   </span>
                 </a>
               </div>
             </ng-container>
           @if(base==='index' || base==='index-six'){
              <ng-container *ngIf="!isLoggedIn">
                <a [routerLink]="routes.login" class="btn btn-primary d-inline-flex align-items-center me-2">
                  Sign In
                </a>
                <a [routerLink]="routes.register" class="btn btn-secondary me-0">
                  Register
                </a>
              </ng-container>
              <ng-container *ngIf="isLoggedIn">
                <div class="dropdown me-0" [class.show]="isProfileDropdownOpen">
                  <button class="btn p-0 border-0 bg-transparent" (click)="toggleProfileDropdown()" style="outline:none;">
                    <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;">{{ userInitials }}</div>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end p-2 mt-2" [class.show]="isProfileDropdownOpen" style="min-width:220px;border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,.13);">
                    <li class="px-3 py-2 border-bottom mb-1">
                      <p class="mb-0 fw-semibold">{{ userName }}</p>
                      <span class="badge bg-primary-subtle text-primary small">{{ userRole | titlecase }}</span>
                    </li>
                    <li><a class="dropdown-item rounded d-flex align-items-center gap-2 py-2" [routerLink]="profileRoute" (click)="isProfileDropdownOpen=false"><i class="isax isax-user-square fs-18 text-primary"></i>Mon Profil</a></li>
                    <li><a class="dropdown-item rounded d-flex align-items-center gap-2 py-2" [routerLink]="dashboardRoute" (click)="isProfileDropdownOpen=false"><i class="isax isax-home-2 fs-18 text-success"></i>Mon Dashboard</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item rounded d-flex align-items-center gap-2 py-2 text-danger" href="javascript:void(0);" (click)="doLogout()"><i class="isax isax-logout fs-18"></i>D\xE9connexion</a></li>
                  </ul>
                </div>
              </ng-container>
            }
           @if(base === 'index-two' || base==='courses' || base==='pages'|| base==='blog'){
            <ng-container *ngIf="!isLoggedIn">
              <a [routerLink]="routes.login" class="btn btn-light d-inline-flex align-items-center me-2">
                <i class="isax isax-lock-circle me-2"></i>Sign In
              </a>
              <a [routerLink]="routes.register" class="btn btn-secondary me-0">
                <i class="isax isax-user-edit me-2"></i>Register
              </a>
            </ng-container>
            <ng-container *ngIf="isLoggedIn">
              <div class="dropdown me-0" [class.show]="isProfileDropdownOpen">
                <button class="btn p-0 border-0 bg-transparent d-flex align-items-center gap-2" (click)="toggleProfileDropdown()" style="outline:none;">
                  <div style="width:38px;height:38px;border-radius:50%;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">{{ userInitials }}</div>
                  <span class="d-none d-lg-inline fw-medium fs-14">{{ userName }}</span>
                </button>
                <ul class="dropdown-menu dropdown-menu-end p-2 mt-2" [class.show]="isProfileDropdownOpen" style="min-width:220px;border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,.13);">
                  <li class="px-3 py-2 border-bottom mb-1">
                    <p class="mb-0 fw-semibold">{{ userName }}</p>
                    <span class="badge bg-primary-subtle text-primary small">{{ userRole | titlecase }}</span>
                  </li>
                  <li><a class="dropdown-item rounded d-flex align-items-center gap-2 py-2" [routerLink]="profileRoute" (click)="isProfileDropdownOpen=false"><i class="isax isax-user-square fs-18 text-primary"></i>Mon Profil</a></li>
                  <li><a class="dropdown-item rounded d-flex align-items-center gap-2 py-2" [routerLink]="dashboardRoute" (click)="isProfileDropdownOpen=false"><i class="isax isax-home-2 fs-18 text-success"></i>Mon Dashboard</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item rounded d-flex align-items-center gap-2 py-2 text-danger" href="javascript:void(0);" (click)="doLogout()"><i class="isax isax-logout fs-18"></i>D\xE9connexion</a></li>
                </ul>
              </div>
            </ng-container>
           }
           </div>
         </div>
       
         <div *ngIf="base==='index-three' || base==='index-four'" class="header-btn d-flex align-items-center">
           <div class="icon-btn me-2">
             <a href="javascript:void(0);" id="dark-mode-toggle" class="theme-toggle" [ngClass]="{'activate' : themeColor==='light-mode'}" (click)="sidebarService.changeThemeColor('dark-mode')" >
               <i class="isax isax-sun-15"></i>
             </a>
             <a href="javascript:void(0);" id="light-mode-toggle" class="theme-toggle" [ngClass]="{'activate' : themeColor==='dark-mode'}" (click)="sidebarService.changeThemeColor('light-mode')" >
               <i class="isax isax-moon"></i>
             </a>
           </div>
           
           <div class="dropdown flag-dropdown me-3">
             <a href="javascript:void(0);" class="dropdown-toggle d-inline-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
               <img src="assets/img/flags/us-flag.svg" class="me-2" alt="flag">ENG
             </a>
             <ul class="dropdown-menu p-2 mt-2">
               <li>
                 <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">
                   <img src="assets/img/flags/us-flag.svg" class="me-2" alt="flag">ENG
                 </a>
               </li>
               <li>
                 <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">
                   <img src="assets/img/flags/arab-flag.svg" class="me-2" alt="flag">ARA
                 </a>
               </li>
               <li>
                 <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">
                   <img src="assets/img/flags/france-flag.svg" class="me-2" alt="flag">FRE
                 </a>
               </li>
             </ul>
           </div>
           <div class="dropdown me-3">
             <a href="javascript:void(0);" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
               USD
             </a>
             <ul class="dropdown-menu p-2 mt-2" style="">
               <li><a class="dropdown-item rounded" href="javascript:void(0);">USD</a></li>
               <li><a class="dropdown-item rounded" href="javascript:void(0);">YEN</a></li>
               <li><a class="dropdown-item rounded" href="javascript:void(0);">EURO</a></li>
             </ul>
           </div>
           <a [routerLink]="routes.login" class="btn btn-primary d-inline-flex align-items-center me-2">
             Sign In
           </a>
           <a [routerLink]="routes.register" class="btn btn-secondary me-0">
             Register
           </a>
         </div>
       </div>
     </div>
   
       </header>
 </div>
    <!-- /Header -->
    <div class="sidebar-overlay" [ngClass]="{'opened':isOpened}" (click)="hideSidebar()"></div>`, styles: ["/* src/app/features/layouts/header/header.component.scss */\n.disply-none {\n  display: none;\n}\n.disply-block {\n  display: block;\n}\n/*# sourceMappingURL=header.component.css.map */\n"] }]
  }], () => [{ type: CommonService }, { type: DataService }, { type: SidebarService }, { type: Renderer2 }, { type: ElementRef }, { type: AuthService }, { type: Router }, { type: MessageService }], { menuElement: [{
    type: ViewChild,
    args: ["stickyMenu"]
  }], onWindowScroll: [{
    type: HostListener,
    args: ["window:scroll", []]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src/app/features/layouts/header/header.component.ts", lineNumber: 20 });
})();

// src/app/shared/service/notification/notification.service.ts
var NotificationService = class _NotificationService {
  http;
  api = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getMyNotifications() {
    return this.http.get(`${this.api}/notifications`);
  }
  getUnreadCount() {
    return this.http.get(`${this.api}/notifications/unread-count`).pipe(map((res) => res.count));
  }
  markAsRead(id) {
    return this.http.put(`${this.api}/notifications/${id}/read`, {});
  }
  markAllAsRead() {
    return this.http.put(`${this.api}/notifications/read-all`, {});
  }
  static \u0275fac = function NotificationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/layouts/admin-header/admin-header.component.ts
var _c02 = ["stickyMenu"];
var _c12 = (a0) => ({ "active": a0 });
var _c22 = (a0) => ({ "activate": a0 });
var _c32 = (a0) => ({ "opened": a0 });
var _c42 = (a0) => ({ "submenu": a0 });
var _c52 = (a0) => ({ display: a0 });
function AdminHeaderComponent_ng_container_80_Conditional_1_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "div", 87)(2, "div", 88)(3, "a", 89);
    \u0275\u0275element(4, "img", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 91)(6, "a", 89);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const menu_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.base === menu_r3.base);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", menu_r3.route);
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/home/", menu_r3.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", menu_r3.route);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(menu_r3.menuValue);
  }
}
function AdminHeaderComponent_ng_container_80_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 81);
    \u0275\u0275listener("mouseenter", function AdminHeaderComponent_ng_container_80_Conditional_1_Template_li_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.isHovered = true);
    })("mouseleave", function AdminHeaderComponent_ng_container_80_Conditional_1_Template_li_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.isHovered = false);
    });
    \u0275\u0275elementStart(1, "a", 82);
    \u0275\u0275listener("click", function AdminHeaderComponent_ng_container_80_Conditional_1_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openSubMenu());
    });
    \u0275\u0275text(2);
    \u0275\u0275element(3, "i", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 84)(5, "li")(6, "div", 85)(7, "div", 2);
    \u0275\u0275repeaterCreate(8, AdminHeaderComponent_ng_container_80_Conditional_1_For_9_Template, 8, 7, "div", 86, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const mainMenus_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.base === mainMenus_r4.base || ctx_r1.base === mainMenus_r4.base2 || ctx_r1.base === mainMenus_r4.base3 || ctx_r1.base === mainMenus_r4.base4 || ctx_r1.base === mainMenus_r4.base5 || ctx_r1.base === mainMenus_r4.base6);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c42, ctx_r1.isDropdownOpen));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", mainMenus_r4.tittle, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(7, _c52, ctx_r1.isDropdownOpen ? "block" : ""));
    \u0275\u0275advance(4);
    \u0275\u0275repeater(mainMenus_r4.menu);
  }
}
function AdminHeaderComponent_ng_container_80_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 92)(1, "a", 93);
    \u0275\u0275text(2);
    \u0275\u0275element(3, "i", 83);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mainMenus_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.base === mainMenus_r4.base);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", mainMenus_r4.route);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", mainMenus_r4.tittle, " ");
  }
}
function AdminHeaderComponent_ng_container_80_Conditional_3_For_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 93);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const menu_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r1.page === menu_r7.page);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", menu_r7.route);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(menu_r7.menuValue);
  }
}
function AdminHeaderComponent_ng_container_80_Conditional_3_For_6_Conditional_1_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 93);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const subMenu_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("active", ctx_r1.page === subMenu_r9.page);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", subMenu_r9.route);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(subMenu_r9.menuValue);
  }
}
function AdminHeaderComponent_ng_container_80_Conditional_3_For_6_Conditional_1_For_5_Conditional_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 93);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const subMenu2_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275classProp("active", ctx_r1.page === subMenu2_r10.page);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", subMenu2_r10.route);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(subMenu2_r10.menuValue);
  }
}
function AdminHeaderComponent_ng_container_80_Conditional_3_For_6_Conditional_1_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 92)(1, "a", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 96);
    \u0275\u0275repeaterCreate(4, AdminHeaderComponent_ng_container_80_Conditional_3_For_6_Conditional_1_For_5_Conditional_1_For_5_Template, 3, 4, "li", 95, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const subMenu_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("active", ctx_r1.page === subMenu_r9.page || ctx_r1.page === subMenu_r9.page1 || ctx_r1.page === subMenu_r9.page2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(subMenu_r9.menuValue);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(subMenu_r9.subMenus);
  }
}
function AdminHeaderComponent_ng_container_80_Conditional_3_For_6_Conditional_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AdminHeaderComponent_ng_container_80_Conditional_3_For_6_Conditional_1_For_5_Conditional_0_Template, 3, 4, "li", 95);
    \u0275\u0275conditionalCreate(1, AdminHeaderComponent_ng_container_80_Conditional_3_For_6_Conditional_1_For_5_Conditional_1_Template, 6, 3, "li", 80);
  }
  if (rf & 2) {
    const subMenu_r9 = ctx.$implicit;
    \u0275\u0275conditional(subMenu_r9.hasSubRoute === false ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(subMenu_r9.hasSubRoute === true ? 1 : -1);
  }
}
function AdminHeaderComponent_ng_container_80_Conditional_3_For_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 92)(1, "a", 82);
    \u0275\u0275listener("click", function AdminHeaderComponent_ng_container_80_Conditional_3_For_6_Conditional_1_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const i_r6 = \u0275\u0275nextContext(3).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openSubMenu1(i_r6));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 94);
    \u0275\u0275repeaterCreate(4, AdminHeaderComponent_ng_container_80_Conditional_3_For_6_Conditional_1_For_5_Template, 2, 2, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const menu_r7 = \u0275\u0275nextContext().$implicit;
    const i_r6 = \u0275\u0275nextContext(2).index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.page === menu_r7.base || ctx_r1.page === menu_r7.base1 || ctx_r1.page === menu_r7.base2 || ctx_r1.page === menu_r7.base3 || ctx_r1.page === menu_r7.base4 || ctx_r1.page === menu_r7.base5 || ctx_r1.page === menu_r7.base6 || ctx_r1.page === menu_r7.base7 || ctx_r1.page === menu_r7.base8 || ctx_r1.page === menu_r7.base9 || ctx_r1.page === menu_r7.base10 || ctx_r1.page === menu_r7.base11 || ctx_r1.page === menu_r7.base12 || ctx_r1.page === menu_r7.base13 || ctx_r1.page === menu_r7.base14 || ctx_r1.page === menu_r7.base15);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c42, ctx_r1.isDropdownOpen1 === i_r6));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(menu_r7.menuValue);
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(7, _c52, ctx_r1.isDropdownOpen1 === i_r6 ? "block" : ""));
    \u0275\u0275advance();
    \u0275\u0275repeater(menu_r7.subMenus);
  }
}
function AdminHeaderComponent_ng_container_80_Conditional_3_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AdminHeaderComponent_ng_container_80_Conditional_3_For_6_Conditional_0_Template, 3, 4, "li", 95);
    \u0275\u0275conditionalCreate(1, AdminHeaderComponent_ng_container_80_Conditional_3_For_6_Conditional_1_Template, 6, 9, "li", 80);
  }
  if (rf & 2) {
    const menu_r7 = ctx.$implicit;
    \u0275\u0275conditional(menu_r7.hasSubRoute === false ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(menu_r7.hasSubRoute === true ? 1 : -1);
  }
}
function AdminHeaderComponent_ng_container_80_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 92)(1, "a", 82);
    \u0275\u0275listener("click", function AdminHeaderComponent_ng_container_80_Conditional_3_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const i_r6 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSubMenu(i_r6));
    });
    \u0275\u0275text(2);
    \u0275\u0275element(3, "i", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 94);
    \u0275\u0275repeaterCreate(5, AdminHeaderComponent_ng_container_80_Conditional_3_For_6_Template, 2, 2, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r10 = \u0275\u0275nextContext();
    const mainMenus_r4 = ctx_r10.$implicit;
    const i_r6 = ctx_r10.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.base === mainMenus_r4.base || ctx_r1.base === mainMenus_r4.base2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c42, ctx_r1.openDropdownIndex === i_r6));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", mainMenus_r4.tittle, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(7, _c52, ctx_r1.openDropdownIndex === i_r6 ? "block" : ""));
    \u0275\u0275advance();
    \u0275\u0275repeater(mainMenus_r4.menu);
  }
}
function AdminHeaderComponent_ng_container_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275conditionalCreate(1, AdminHeaderComponent_ng_container_80_Conditional_1_Template, 10, 9, "li", 79);
    \u0275\u0275conditionalCreate(2, AdminHeaderComponent_ng_container_80_Conditional_2_Template, 4, 4, "li", 80);
    \u0275\u0275conditionalCreate(3, AdminHeaderComponent_ng_container_80_Conditional_3_Template, 7, 9, "li", 80);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const mainMenus_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(mainMenus_r4.tittle === "Home" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(mainMenus_r4.separateRoute === true ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(mainMenus_r4.separateRoute === false && mainMenus_r4.tittle !== "Home" ? 3 : -1);
  }
}
function AdminHeaderComponent_span_151_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 97);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.unreadCount > 9 ? "9+" : ctx_r1.unreadCount, " ");
  }
}
function AdminHeaderComponent_button_156_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 98);
    \u0275\u0275listener("click", function AdminHeaderComponent_button_156_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.markAllNotifsAsRead());
    });
    \u0275\u0275text(1, " Tout marquer lu ");
    \u0275\u0275elementEnd();
  }
}
function AdminHeaderComponent_div_157_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99);
    \u0275\u0275element(1, "i", 100);
    \u0275\u0275elementStart(2, "p", 101);
    \u0275\u0275text(3, "Aucune notification");
    \u0275\u0275elementEnd()();
  }
}
function AdminHeaderComponent_a_158_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 109);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const notif_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(notif_r14.message);
  }
}
function AdminHeaderComponent_a_158_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 110);
  }
}
function AdminHeaderComponent_a_158_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 102);
    \u0275\u0275listener("click", function AdminHeaderComponent_a_158_Template_a_click_0_listener() {
      const notif_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.markNotifAsRead(notif_r14));
    });
    \u0275\u0275elementStart(1, "span", 103);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 104)(4, "p", 105);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AdminHeaderComponent_a_158_p_6_Template, 2, 1, "p", 106);
    \u0275\u0275elementStart(7, "span", 107);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, AdminHeaderComponent_a_158_span_9_Template, 1, 0, "span", 108);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const notif_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background", notif_r14.read ? "" : "rgba(var(--bs-primary-rgb),0.06)");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("isax ", ctx_r1.getNotifIcon(notif_r14.type)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(notif_r14.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", notif_r14.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatNotifDate(notif_r14.createdAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !notif_r14.read);
  }
}
function AdminHeaderComponent_div_159_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 111)(1, "a", 112)(2, "span", 113);
    \u0275\u0275element(3, "img", 114);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 115)(5, "div", 116)(6, "div", 113);
    \u0275\u0275element(7, "img", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "h6");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "ul", 117)(14, "li")(15, "a", 118);
    \u0275\u0275element(16, "i", 119);
    \u0275\u0275text(17, "Mon Profil");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "li")(19, "a", 118);
    \u0275\u0275element(20, "i", 120);
    \u0275\u0275text(21, "Courses");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "li")(23, "a", 121);
    \u0275\u0275element(24, "i", 122);
    \u0275\u0275text(25, "Earnings");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "li")(27, "a", 118);
    \u0275\u0275element(28, "i", 123);
    \u0275\u0275text(29, "Payouts");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "li")(31, "a", 118);
    \u0275\u0275element(32, "i", 124);
    \u0275\u0275text(33, "Messages");
    \u0275\u0275elementStart(34, "span", 125);
    \u0275\u0275text(35, "2");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "li")(37, "a", 118);
    \u0275\u0275element(38, "i", 126);
    \u0275\u0275text(39, "Settings");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 127)(41, "a", 118);
    \u0275\u0275element(42, "i", 128);
    \u0275\u0275text(43, "Log in as Student");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "a", 129);
    \u0275\u0275listener("click", function AdminHeaderComponent_div_159_Template_a_click_44_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLogout());
    });
    \u0275\u0275element(45, "i", 130);
    \u0275\u0275text(46, "Logout");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.userName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.userEmail);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r1.routes.instructorSettings);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", ctx_r1.routes.instructorCourse);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", ctx_r1.routes.instructorEarning);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", ctx_r1.routes.instructor_payouts);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", ctx_r1.routes.instructorMessage);
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", ctx_r1.routes.instructorSettings);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", ctx_r1.routes.login);
  }
}
function AdminHeaderComponent_div_160_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 111)(1, "a", 131)(2, "span", 113);
    \u0275\u0275element(3, "img", 132);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 133)(5, "div", 116)(6, "div", 113);
    \u0275\u0275element(7, "img", 132);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "h6");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "ul", 117)(14, "li")(15, "a", 118);
    \u0275\u0275element(16, "i", 119);
    \u0275\u0275text(17, "Mon Profil");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "li")(19, "a", 118);
    \u0275\u0275element(20, "i", 134);
    \u0275\u0275text(21, "Quiz Attempts");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "li")(23, "a", 121);
    \u0275\u0275element(24, "i", 135);
    \u0275\u0275text(25, "Order History");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "li")(27, "a", 118);
    \u0275\u0275element(28, "i", 124);
    \u0275\u0275text(29, "Messages");
    \u0275\u0275elementStart(30, "span", 125);
    \u0275\u0275text(31, "2");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "li")(33, "a", 118);
    \u0275\u0275element(34, "i", 126);
    \u0275\u0275text(35, "Settings");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 127)(37, "a", 118);
    \u0275\u0275element(38, "i", 128);
    \u0275\u0275text(39, "Log in as Instructor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "a", 129);
    \u0275\u0275listener("click", function AdminHeaderComponent_div_160_Template_a_click_40_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLogout());
    });
    \u0275\u0275element(41, "i", 130);
    \u0275\u0275text(42, "Logout");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.userName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.userEmail);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r1.routes.studentSettings);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", ctx_r1.routes.studentQuiz);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", ctx_r1.routes.studentOrderHistory);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", ctx_r1.routes.studentsMessage);
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", ctx_r1.routes.studentSettings);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", ctx_r1.routes.login);
  }
}
function AdminHeaderComponent_div_161_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 111)(1, "a", 112)(2, "span", 113);
    \u0275\u0275element(3, "img", 114);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 115)(5, "div", 116)(6, "div", 113);
    \u0275\u0275element(7, "img", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "h6");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "ul", 117)(14, "li")(15, "a", 118);
    \u0275\u0275element(16, "i", 126);
    \u0275\u0275text(17, "Mon Profil");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 127)(19, "a", 129);
    \u0275\u0275listener("click", function AdminHeaderComponent_div_161_Template_a_click_19_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLogout());
    });
    \u0275\u0275element(20, "i", 130);
    \u0275\u0275text(21, "D\xE9connexion");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.userName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.userEmail);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r1.routes.adminSettings);
  }
}
function AdminHeaderComponent_div_162_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 111)(1, "a", 112)(2, "span", 113);
    \u0275\u0275element(3, "img", 114);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 115)(5, "div", 116)(6, "div", 113);
    \u0275\u0275element(7, "img", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "h6");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "ul", 117)(14, "li")(15, "a", 118);
    \u0275\u0275element(16, "i", 126);
    \u0275\u0275text(17, "Mon Profil");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 127)(19, "a", 129);
    \u0275\u0275listener("click", function AdminHeaderComponent_div_162_Template_a_click_19_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLogout());
    });
    \u0275\u0275element(20, "i", 130);
    \u0275\u0275text(21, "D\xE9connexion");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.userName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.userEmail);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r1.routes.recruiterSettings);
  }
}
var AdminHeaderComponent = class _AdminHeaderComponent {
  common;
  data;
  sidebarService;
  renderer;
  authService;
  notificationService;
  routes = routes;
  menuElement;
  headerpage = false;
  sticky = false;
  elementPosition;
  headerClass = true;
  isHovered = false;
  isFixed = false;
  isOpened = false;
  isDropdownOpen = false;
  isDropdownOpen1 = null;
  base = "";
  page = "";
  last = "";
  headerMenuactive = "";
  openDropdownIndex = null;
  themeColor = "light-mode";
  islight = true;
  isdark = false;
  sidebar;
  onWindowScroll() {
    this.isFixed = window.pageYOffset > 40;
  }
  toggleSidebar() {
    this.sidebarService.openSidebar();
    this.isOpened = !this.isOpened;
    if (this.isOpened === true) {
      this.renderer.addClass(document.documentElement, "menu-opened");
    } else {
      this.renderer.removeClass(document.documentElement, "menu-opened");
    }
  }
  hideSidebar() {
    this.sidebarService.closeSidebar();
    this.isOpened = false;
    this.renderer.removeClass(document.documentElement, "menu-opened");
  }
  openSubMenu() {
    this.isDropdownOpen = !this.isDropdownOpen;
    this.openDropdownIndex = null;
  }
  openSubMenu1(index) {
    this.isDropdownOpen1 = this.isDropdownOpen1 === index ? null : index;
  }
  toggleSubMenu(index) {
    this.openDropdownIndex = this.openDropdownIndex === index ? null : index;
    this.isDropdownOpen = false;
  }
  switchTheme() {
    this.isdark = !this.isdark;
    this.islight = !this.islight;
  }
  userName = "";
  userEmail = "";
  // Notifications
  notifications = [];
  unreadCount = 0;
  notifInterval;
  constructor(common, data, sidebarService, renderer, authService, notificationService) {
    this.common = common;
    this.data = data;
    this.sidebarService = sidebarService;
    this.renderer = renderer;
    this.authService = authService;
    this.notificationService = notificationService;
    this.common.base.subscribe((res) => {
      this.base = res;
    });
    this.common.page.subscribe((res) => {
      this.page = res;
    });
    this.common.last.subscribe((res) => {
      this.last = res;
    });
    this.sidebar = this.data.sideBar;
    this.sidebarService.themeColors.subscribe((res) => {
      this.themeColor = res;
    });
  }
  ngOnInit() {
    const themeColor = localStorage.getItem("themeColor") || "light-mode";
    this.sidebarService.changeThemeColor(themeColor);
    this.userName = localStorage.getItem("fullName") || "Utilisateur";
    this.userEmail = localStorage.getItem("email") || "";
    this.loadNotifications();
    this.notifInterval = setInterval(() => this.loadNotifications(), 6e4);
  }
  ngOnDestroy() {
    if (this.notifInterval)
      clearInterval(this.notifInterval);
  }
  loadNotifications() {
    const token = localStorage.getItem("token");
    if (!token)
      return;
    this.notificationService.getMyNotifications().subscribe({
      next: (data) => {
        this.notifications = data.slice(0, 10);
        this.unreadCount = data.filter((n) => !n.read).length;
      },
      error: () => {
      }
    });
  }
  markNotifAsRead(notif) {
    if (!notif.read) {
      this.notificationService.markAsRead(notif.id).subscribe({
        next: () => {
          notif.read = true;
          this.unreadCount = Math.max(0, this.unreadCount - 1);
        },
        error: () => {
        }
      });
    }
  }
  markAllNotifsAsRead() {
    this.notificationService.markAllAsRead().subscribe({
      next: () => {
        this.notifications.forEach((n) => n.read = true);
        this.unreadCount = 0;
      },
      error: () => {
      }
    });
  }
  getNotifIcon(type) {
    switch (type) {
      case "PURCHASE_CONFIRMED":
        return "isax-shopping-cart";
      case "COURSE_APPROVED":
        return "isax-tick-circle";
      case "COURSE_REJECTED":
        return "isax-close-circle";
      case "CERTIFICATE_ISSUED":
        return "isax-award";
      case "NEW_REVENUE":
        return "isax-dollar-circle";
      default:
        return "isax-notification";
    }
  }
  formatNotifDate(dateStr) {
    if (!dateStr)
      return "";
    const d = new Date(dateStr);
    const now = /* @__PURE__ */ new Date();
    const diffMs = now.getTime() - d.getTime();
    const diffMin = Math.floor(diffMs / 6e4);
    if (diffMin < 1)
      return "\xE0 l'instant";
    if (diffMin < 60)
      return `il y a ${diffMin} min`;
    const diffH = Math.floor(diffMin / 60);
    if (diffH < 24)
      return `il y a ${diffH}h`;
    return d.toLocaleDateString("fr-FR");
  }
  onLogout() {
    this.authService.logout();
  }
  static \u0275fac = function AdminHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminHeaderComponent)(\u0275\u0275directiveInject(CommonService), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(SidebarService), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NotificationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminHeaderComponent, selectors: [["app-admin-header"]], viewQuery: function AdminHeaderComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.menuElement = _t.first);
    }
  }, hostBindings: function AdminHeaderComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("scroll", function AdminHeaderComponent_scroll_HostBindingHandler() {
        return ctx.onWindowScroll();
      }, \u0275\u0275resolveWindow);
    }
  }, decls: 164, vars: 31, consts: [[1, "header-topbar", "text-center"], [1, "container"], [1, "row"], [1, "col-lg-6"], [1, "d-flex", "align-items-center", "justify-content-center", "justify-content-lg-start"], [1, "d-flex", "align-items-center", "fw-medium", "fs-14", "mb-2", "me-3"], [1, "isax", "isax-location5", "me-2"], [1, "d-flex", "align-items-center", "fw-medium", "fs-14", "mb-2"], [1, "isax", "isax-call-calling5", "me-2"], [1, "d-flex", "align-items-center", "justify-content-center", "justify-content-lg-end"], [1, "dropdown", "flag-dropdown", "mb-2", "me-3"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle", "d-inline-flex", "align-items-center"], ["src", "assets/img/flags/us-flag.svg", "alt", "flag", 1, "me-2"], [1, "dropdown-menu", "p-2", "mt-2"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded", "d-flex", "align-items-center"], ["src", "assets/img/flags/arab-flag.svg", "alt", "flag", 1, "me-2"], ["src", "assets/img/flags/france-flag.svg", "alt", "flag", 1, "me-2"], [1, "dropdown", "mb-2", "me-3"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded"], [1, "social-icon", "d-flex", "align-items-center", "mb-2"], [1, "me-2"], ["href", "javascript:void(0);"], [1, "fa-brands", "fa-facebook-f"], [1, "fa-brands", "fa-instagram"], [1, "fa-brands", "fa-x-twitter"], [1, "fa-brands", "fa-youtube"], [1, "fa-brands", "fa-linkedin"], [1, "header-two"], [1, "header-nav"], [1, "navbar-header"], ["id", "mobile_btn", "href", "javascript:void(0);", 3, "click"], [1, "bar-icon"], [1, "navbar-logo"], [1, "logo-white", "header-logo", 3, "routerLink"], ["src", "assets/img/logo.svg", "alt", "Logo", 1, "logo"], [1, "logo-dark", "header-logo", 3, "routerLink"], ["src", "assets/img/logo-white.svg", "alt", "Logo", 1, "logo"], [1, "main-menu-wrapper", 3, "ngClass"], [1, "menu-header"], [1, "menu-logo", 3, "routerLink"], ["src", "assets/img/logo.svg", "alt", "Logo", 1, "img-fluid"], ["id", "menu_close", "href", "javascript:void(0);", 1, "menu-close", 3, "click"], [1, "fas", "fa-times"], [1, "main-nav", 3, "ngClass"], [4, "ngFor", "ngForOf"], [1, "menu-dropdown"], [1, "cart-item"], [1, "icon-btn"], [1, "position-relative", 3, "routerLink"], [1, "isax", "isax-shopping-cart5"], [1, "count-icon", "bg-success", "p-1", "rounded-pill", "text-white", "fs-10", "fw-bold"], [1, "dropdown", "flag-dropdown", "mb-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle", "d-flex", "align-items-center"], [1, "dropdown", "mb-2"], [1, "menu-login"], [1, "btn", "btn-primary", "w-100", "mb-2", 3, "routerLink"], [1, "isax", "isax-user", "me-2"], [1, "btn", "btn-secondary", "w-100", 3, "routerLink"], [1, "isax", "isax-user-edit", "me-2"], [1, "header-btn", "d-flex", "align-items-center"], [1, "icon-btn", "me-2"], ["href", "javascript:void(0);", "id", "dark-mode-toggle", 1, "theme-toggle", 3, "click", "ngClass"], [1, "isax", "isax-sun-15"], ["href", "javascript:void(0);", "id", "light-mode-toggle", 1, "theme-toggle", 3, "click", "ngClass"], [1, "isax", "isax-moon"], [1, "icon-btn", "me-3"], [1, "dropdown", "icon-btn", "me-3", "notification-dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "position-relative"], [1, "isax", "isax-notification"], ["class", "count-icon bg-danger p-1 rounded-pill text-white fs-10 fw-bold", "style", "min-width:16px;text-align:center;", 4, "ngIf"], [1, "dropdown-menu", "dropdown-menu-end", "p-0", 2, "width", "320px", "max-height", "420px", "overflow-y", "auto"], [1, "d-flex", "justify-content-between", "align-items-center", "px-3", "py-2", "border-bottom", "bg-light"], [1, "mb-0", "fw-semibold"], ["class", "btn btn-link btn-sm p-0 text-primary text-decoration-none", 3, "click", 4, "ngIf"], ["class", "text-center py-4 text-muted", 4, "ngIf"], ["href", "javascript:void(0);", "class", "d-flex align-items-start px-3 py-2 border-bottom text-decoration-none", 3, "background", "click", 4, "ngFor", "ngForOf"], ["class", "dropdown profile-dropdown", 4, "ngIf"], [1, "sidebar-overlay", 3, "click", "ngClass"], [1, "has-submenu", "megamenu", 3, "active"], [1, "has-submenu", 3, "active"], [1, "has-submenu", "megamenu", 3, "mouseenter", "mouseleave"], ["href", "javascript:void(0);", 3, "click", "ngClass"], [1, "isax", "isax-add"], [1, "submenu", "mega-submenu", 3, "ngStyle"], [1, "megamenu-wrapper"], [1, "col-lg-2"], [1, "single-demo"], [1, "demo-img"], [1, "inner-demo-img", 3, "routerLink"], ["alt", "img", 1, "img-fluid", 3, "src"], [1, "demo-info"], [1, "has-submenu"], [3, "routerLink"], [1, "submenu", 3, "ngStyle"], [3, "active"], [1, "submenu"], [1, "count-icon", "bg-danger", "p-1", "rounded-pill", "text-white", "fs-10", "fw-bold", 2, "min-width", "16px", "text-align", "center"], [1, "btn", "btn-link", "btn-sm", "p-0", "text-primary", "text-decoration-none", 3, "click"], [1, "text-center", "py-4", "text-muted"], [1, "isax", "isax-notification", 2, "font-size", "2rem", "opacity", "0.3"], [1, "mt-2", "mb-0", "small"], ["href", "javascript:void(0);", 1, "d-flex", "align-items-start", "px-3", "py-2", "border-bottom", "text-decoration-none", 3, "click"], [1, "me-3", "mt-1", 2, "font-size", "1.3rem", "opacity", "0.75"], [1, "flex-grow-1", "overflow-hidden"], [1, "mb-0", "fw-medium", "text-dark", "small", 2, "white-space", "normal", "line-height", "1.3"], ["class", "mb-0 text-muted", "style", "font-size:11px;white-space:normal;", 4, "ngIf"], [1, "text-muted", 2, "font-size", "10px"], ["class", "rounded-circle bg-primary ms-2 flex-shrink-0", "style", "width:8px;height:8px;margin-top:6px;", 4, "ngIf"], [1, "mb-0", "text-muted", 2, "font-size", "11px", "white-space", "normal"], [1, "rounded-circle", "bg-primary", "ms-2", "flex-shrink-0", 2, "width", "8px", "height", "8px", "margin-top", "6px"], [1, "dropdown", "profile-dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", 1, "d-flex", "align-items-center"], [1, "avatar"], ["src", "assets/img/user/user-01.jpg", "alt", "Img", 1, "img-fluid", "rounded-circle"], [1, "dropdown-menu", "dropdown-menu-end"], [1, "profile-header", "d-flex", "align-items-center"], [1, "profile-body"], [1, "dropdown-item", "d-inline-flex", "align-items-center", "rounded", "fw-medium", 3, "routerLink"], [1, "isax", "isax-security-user", "me-2"], [1, "isax", "isax-teacher", "me-2"], [1, "dropdown-item", "d-inline-flex", "align-items-center", "rounded", "fw-medium2", 3, "routerLink"], [1, "isax", "isax-dollar-circle", "me-2"], [1, "isax", "isax-coin", "me-2"], [1, "isax", "isax-messages-3", "me-2"], [1, "message-count"], [1, "isax", "isax-setting-2", "me-2"], [1, "profile-footer"], [1, "isax", "isax-arrow-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-secondary", "d-inline-flex", "align-items-center", "justify-content-center", "w-100", 3, "click"], [1, "isax", "isax-logout", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "true", 1, "d-flex", "align-items-center"], ["src", "assets/img/user/user-02.jpg", "alt", "Img", 1, "img-fluid", "rounded-circle"], ["data-popper-placement", "bottom-end", 1, "dropdown-menu", "dropdown-menu-end", 2, "position", "absolute", "inset", "0px 0px auto auto", "margin", "0px", "transform", "translate3d(0px, 37.7778px, 0px)"], [1, "isax", "isax-award", "me-2"], [1, "isax", "isax-shopping-cart", "me-2"]], template: function AdminHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "p", 5);
      \u0275\u0275element(6, "i", 6);
      \u0275\u0275text(7, "1442 Crosswind Drive Madisonville");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 7);
      \u0275\u0275element(9, "i", 8);
      \u0275\u0275text(10, "+1 45887 77874");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 3)(12, "div", 9)(13, "div", 10)(14, "a", 11);
      \u0275\u0275element(15, "img", 12);
      \u0275\u0275text(16, "ENG ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "ul", 13)(18, "li")(19, "a", 14);
      \u0275\u0275element(20, "img", 12);
      \u0275\u0275text(21, "ENG ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "li")(23, "a", 14);
      \u0275\u0275element(24, "img", 15);
      \u0275\u0275text(25, "ARA ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "li")(27, "a", 14);
      \u0275\u0275element(28, "img", 16);
      \u0275\u0275text(29, "FRE ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(30, "div", 17)(31, "a", 18);
      \u0275\u0275text(32, " USD ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "ul", 13)(34, "li")(35, "a", 19);
      \u0275\u0275text(36, "USD");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "li")(38, "a", 19);
      \u0275\u0275text(39, "YEN");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "li")(41, "a", 19);
      \u0275\u0275text(42, "EURO");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(43, "ul", 20)(44, "li", 21)(45, "a", 22);
      \u0275\u0275element(46, "i", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "li", 21)(48, "a", 22);
      \u0275\u0275element(49, "i", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "li", 21)(51, "a", 22);
      \u0275\u0275element(52, "i", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "li", 21)(54, "a", 22);
      \u0275\u0275element(55, "i", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "li")(57, "a", 22);
      \u0275\u0275element(58, "i", 27);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(59, "header", 28)(60, "div", 1)(61, "div", 29)(62, "div", 30)(63, "a", 31);
      \u0275\u0275listener("click", function AdminHeaderComponent_Template_a_click_63_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275elementStart(64, "span", 32);
      \u0275\u0275element(65, "span")(66, "span")(67, "span");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "div", 33)(69, "a", 34);
      \u0275\u0275element(70, "img", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "a", 36);
      \u0275\u0275element(72, "img", 37);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(73, "div", 38)(74, "div", 39)(75, "a", 40);
      \u0275\u0275element(76, "img", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "a", 42);
      \u0275\u0275listener("click", function AdminHeaderComponent_Template_a_click_77_listener() {
        return ctx.hideSidebar();
      });
      \u0275\u0275element(78, "i", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "ul", 44);
      \u0275\u0275template(80, AdminHeaderComponent_ng_container_80_Template, 4, 3, "ng-container", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "div", 46)(82, "div", 47)(83, "h6");
      \u0275\u0275text(84, "Cart & Wishlist");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "div", 48)(86, "a", 49);
      \u0275\u0275element(87, "i", 50);
      \u0275\u0275elementStart(88, "span", 51);
      \u0275\u0275text(89, "1");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(90, "div", 52)(91, "a", 53);
      \u0275\u0275element(92, "img", 12);
      \u0275\u0275text(93, "ENG ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "ul", 13)(95, "li")(96, "a", 14);
      \u0275\u0275element(97, "img", 12);
      \u0275\u0275text(98, "ENG ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "li")(100, "a", 14);
      \u0275\u0275element(101, "img", 15);
      \u0275\u0275text(102, "ARA ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "li")(104, "a", 14);
      \u0275\u0275element(105, "img", 16);
      \u0275\u0275text(106, "FRE ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(107, "div", 54)(108, "a", 18);
      \u0275\u0275text(109, " USD ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "ul", 13)(111, "li")(112, "a", 19);
      \u0275\u0275text(113, "USD");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(114, "li")(115, "a", 19);
      \u0275\u0275text(116, "YEN");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(117, "li")(118, "a", 19);
      \u0275\u0275text(119, "EURO");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(120, "div", 54)(121, "a", 18);
      \u0275\u0275text(122, " Light ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "ul", 13)(124, "li")(125, "a", 19);
      \u0275\u0275text(126, "Light");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(127, "li")(128, "a", 19);
      \u0275\u0275text(129, "Dark");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(130, "div", 55)(131, "a", 56);
      \u0275\u0275element(132, "i", 57);
      \u0275\u0275text(133, "Sign In");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "a", 58);
      \u0275\u0275element(135, "i", 59);
      \u0275\u0275text(136, "Register");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(137, "div", 60)(138, "div", 61)(139, "a", 62);
      \u0275\u0275listener("click", function AdminHeaderComponent_Template_a_click_139_listener() {
        return ctx.sidebarService.changeThemeColor("dark-mode");
      });
      \u0275\u0275element(140, "i", 63);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "a", 64);
      \u0275\u0275listener("click", function AdminHeaderComponent_Template_a_click_141_listener() {
        return ctx.sidebarService.changeThemeColor("light-mode");
      });
      \u0275\u0275element(142, "i", 65);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(143, "div", 66)(144, "a", 49);
      \u0275\u0275element(145, "i", 50);
      \u0275\u0275elementStart(146, "span", 51);
      \u0275\u0275text(147, "1");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(148, "div", 67)(149, "a", 68);
      \u0275\u0275element(150, "i", 69);
      \u0275\u0275template(151, AdminHeaderComponent_span_151_Template, 2, 1, "span", 70);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "div", 71)(153, "div", 72)(154, "h6", 73);
      \u0275\u0275text(155, "Notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275template(156, AdminHeaderComponent_button_156_Template, 2, 0, "button", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275template(157, AdminHeaderComponent_div_157_Template, 4, 0, "div", 75)(158, AdminHeaderComponent_a_158_Template, 10, 9, "a", 76);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(159, AdminHeaderComponent_div_159_Template, 47, 9, "div", 77)(160, AdminHeaderComponent_div_160_Template, 43, 8, "div", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275template(161, AdminHeaderComponent_div_161_Template, 22, 3, "div", 77)(162, AdminHeaderComponent_div_162_Template, 22, 3, "div", 77);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(163, "div", 78);
      \u0275\u0275listener("click", function AdminHeaderComponent_Template_div_click_163_listener() {
        return ctx.hideSidebar();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(69);
      \u0275\u0275property("routerLink", ctx.routes.home);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.home);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(21, _c12, ctx.isHovered));
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.home);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(23, _c12, ctx.isHovered));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.sidebar);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.cart);
      \u0275\u0275advance(45);
      \u0275\u0275property("routerLink", ctx.routes.login);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.register);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(25, _c22, ctx.themeColor === "light-mode"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(27, _c22, ctx.themeColor === "dark-mode"));
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.cart);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.unreadCount > 0);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.unreadCount > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.notifications.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.notifications);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.base === "instructor");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.base === "student");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.base === "admin");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.base === "recruiter");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(29, _c32, ctx.isOpened));
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgStyle, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminHeaderComponent, [{
    type: Component,
    args: [{ selector: "app-admin-header", imports: [CommonModule, RouterLink], template: `

<!-- Header Topbar-->
<div class="header-topbar text-center">
  <div class="container">
      <div class="row">
          <div class="col-lg-6">
              <div class="d-flex align-items-center justify-content-center justify-content-lg-start">
                  <p class="d-flex align-items-center fw-medium fs-14 mb-2 me-3"><i class="isax isax-location5 me-2"></i>1442 Crosswind Drive Madisonville</p>
                  <p class="d-flex align-items-center fw-medium fs-14 mb-2"><i class="isax isax-call-calling5 me-2"></i>+1 45887 77874</p>
              </div>
          </div>
          <div class="col-lg-6">
              <div class="d-flex align-items-center justify-content-center justify-content-lg-end">
                  <div class="dropdown flag-dropdown mb-2 me-3">
                      <a href="javascript:void(0);" class="dropdown-toggle d-inline-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
                          <img src="assets/img/flags/us-flag.svg" class="me-2" alt="flag">ENG
                      </a>
                      <ul class="dropdown-menu p-2 mt-2">
                          <li>
                              <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">
                                  <img src="assets/img/flags/us-flag.svg" class="me-2" alt="flag">ENG
                              </a>
                          </li>
                          <li>
                              <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">
                                  <img src="assets/img/flags/arab-flag.svg" class="me-2" alt="flag">ARA
                              </a>
                          </li>
                          <li>
                              <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">
                                  <img src="assets/img/flags/france-flag.svg" class="me-2" alt="flag">FRE
                              </a>
                          </li>
                      </ul>
                  </div>
                  <div class="dropdown mb-2 me-3">
                      <a href="javascript:void(0);" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                          USD
                      </a>
                      <ul class="dropdown-menu p-2 mt-2">
                          <li><a class="dropdown-item rounded" href="javascript:void(0);">USD</a></li>
                          <li><a class="dropdown-item rounded" href="javascript:void(0);">YEN</a></li>
                          <li><a class="dropdown-item rounded" href="javascript:void(0);">EURO</a></li>
                      </ul>
                  </div>
                  <ul class="social-icon d-flex align-items-center mb-2">
                      <li class="me-2">
                          <a href="javascript:void(0);"><i class="fa-brands fa-facebook-f"></i></a>
                      </li>
                      <li class="me-2">
                          <a href="javascript:void(0);"><i class="fa-brands fa-instagram"></i></a>
                      </li>
                      <li class="me-2">
                          <a href="javascript:void(0);"><i class="fa-brands fa-x-twitter"></i></a>
                      </li>
                      <li class="me-2">
                          <a href="javascript:void(0);"><i class="fa-brands fa-youtube"></i></a>
                      </li>
                      <li>
                          <a href="javascript:void(0);"><i class="fa-brands fa-linkedin"></i></a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
  </div>
  <!-- /Header Topbar-->

<!-- Header -->
<header
  class="header-two"
  > 
  <div class="container">
    <div class="header-nav">
      <div class="navbar-header">
        <a id="mobile_btn" href="javascript:void(0);"  (click)="toggleSidebar()">
          <span class="bar-icon">
									<span></span>
									<span></span>
									<span></span>
								</span>
        </a>
        <div class="navbar-logo">
          <a class="logo-white header-logo" [routerLink]="routes.home">
            <img src="assets/img/logo.svg" class="logo" alt="Logo">
          </a>
          <a class="logo-dark header-logo" [routerLink]="routes.home">
            <img src="assets/img/logo-white.svg" class="logo" alt="Logo">
          </a>
        </div>
      </div>
      <div class="main-menu-wrapper" [ngClass]="{ 'active': isHovered }">								
        <div class="menu-header">
          <a [routerLink]="routes.home" class="menu-logo">
            <img src="assets/img/logo.svg" class="img-fluid" alt="Logo">
          </a>
          <a id="menu_close" class="menu-close" href="javascript:void(0);" (click)="hideSidebar()">
            <i class="fas fa-times"></i>
          </a>
        </div>
        <ul class="main-nav" [ngClass]="{ 'active': isHovered }">
          <ng-container *ngFor="let mainMenus of sidebar, let i = index">
            @if(mainMenus.tittle === 'Home'){
            <li class="has-submenu megamenu"  [class.active]="base===mainMenus.base || base===mainMenus.base2 || base===mainMenus.base3 || base===mainMenus.base4 || base===mainMenus.base5 || base===mainMenus.base6" (mouseenter)="isHovered = true"  (mouseleave)="isHovered = false">
              <a href="javascript:void(0);" [ngClass]="{'submenu':isDropdownOpen}" (click)="openSubMenu()">{{mainMenus.tittle}} <i class="isax isax-add"></i></a>
              <ul class="submenu mega-submenu" [ngStyle]="{ display: isDropdownOpen ? 'block' : '' }">
                <li>
                  <div class="megamenu-wrapper">
                    <div class="row">
                      @for (menu of mainMenus.menu;track menu){
                        <div class="col-lg-2">
                          <div class="single-demo" [class.active]="base===menu.base">
                            <div class="demo-img">
                              <a [routerLink]="menu.route" class="inner-demo-img"><img src="assets/img/home/{{menu.img}}" class="img-fluid " alt="img"></a>
                            </div>
                            <div class="demo-info">
                              <a [routerLink]="menu.route" class="inner-demo-img">{{menu.menuValue}}</a>
                            </div>
                          </div>
                        </div>
                      }
                      
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          }
          @if (mainMenus.separateRoute === true) {
          <li class="has-submenu" [class.active]="base ===mainMenus.base">
            <a [routerLink]="mainMenus.route">{{ mainMenus.tittle }} <i class="isax isax-add"></i></a>
          </li>
            }
            @if (mainMenus.separateRoute === false && mainMenus.tittle!=='Home') {
              <li class="has-submenu" [class.active]="base === mainMenus.base || base=== mainMenus.base2">
                <a href="javascript:void(0);" [ngClass]="{'submenu':openDropdownIndex === i}" (click)="toggleSubMenu(i)">{{ mainMenus.tittle }} <i class="isax isax-add"></i></a>
                <ul class="submenu" [ngStyle]="{ display: openDropdownIndex === i ? 'block' : '' }">
                  @for (menu of mainMenus.menu; track menu) {
                      @if (menu.hasSubRoute === false) {
                      <li [class.active]="page===menu.page">
                        <a [routerLink]="menu.route">{{ menu.menuValue }}</a>
                      </li>
                      }
                      @if (menu.hasSubRoute === true) {
                        <li class="has-submenu" [class.active]="page===menu.base || page===menu.base1 || page===menu.base2 || page===menu.base3 || page===menu.base4
                        || page===menu.base5 || page===menu.base6 || page===menu.base7 || page===menu.base8 || page===menu.base9 || page===menu.base10 || page===menu.base11 || page===menu.base12 || page===menu.base13 || page===menu.base14 || page===menu.base15">
                          <a href="javascript:void(0);" [ngClass]="{'submenu':isDropdownOpen1 === i}" (click)="openSubMenu1(i)">{{ menu.menuValue }}</a>
                          <ul class="submenu" [ngStyle]="{ display: isDropdownOpen1 === i ? 'block' : '' }">
                            @for (subMenu of menu.subMenus; track subMenu) {
                              @if(subMenu.hasSubRoute===false){
                                <li [class.active]="page===subMenu.page"><a [routerLink]="subMenu.route">{{ subMenu.menuValue }}</a></li>
                              }
                              @if(subMenu.hasSubRoute===true){
                                <li class="has-submenu" [class.active]="page===subMenu.page || page===subMenu.page1 || page===subMenu.page2">
                                  <a href="javascript:void(0);">{{ subMenu.menuValue }}</a>
                                  <ul class="submenu">
                                    @for (subMenu2 of subMenu.subMenus; track subMenu2){
                                    <li [class.active]="page===subMenu2.page"><a [routerLink]="subMenu2.route" >{{subMenu2.menuValue}}</a></li>
                                    }
                                  </ul>
                                </li>
                              }
                            }
                          </ul>
                        </li>
                      }
                      }
                </ul>
                </li>
              }
            </ng-container>
        </ul>
        <div class="menu-dropdown">
          <div class="cart-item">
            <h6>Cart & Wishlist</h6>                                
            <div class="icon-btn">
              <a [routerLink]="routes.cart" class="position-relative">
                <i class="isax isax-shopping-cart5"></i>
                <span class="count-icon bg-success p-1 rounded-pill text-white fs-10 fw-bold">1</span>
              </a>
            </div>
          </div>
          <div class="dropdown flag-dropdown mb-2">
            <a href="javascript:void(0);" class="dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="assets/img/flags/us-flag.svg" class="me-2" alt="flag">ENG
            </a>
            <ul class="dropdown-menu p-2 mt-2">
              <li>
                <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">
                  <img src="assets/img/flags/us-flag.svg" class="me-2" alt="flag">ENG
                </a>
              </li>
              <li>
                <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">
                  <img src="assets/img/flags/arab-flag.svg" class="me-2" alt="flag">ARA
                </a>
              </li>
              <li>
                <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">
                  <img src="assets/img/flags/france-flag.svg" class="me-2" alt="flag">FRE
                </a>
              </li>
            </ul>
          </div>
          <div class="dropdown mb-2">
            <a href="javascript:void(0);" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              USD
            </a>
            <ul class="dropdown-menu p-2 mt-2">
              <li><a class="dropdown-item rounded" href="javascript:void(0);">USD</a></li>
              <li><a class="dropdown-item rounded" href="javascript:void(0);">YEN</a></li>
              <li><a class="dropdown-item rounded" href="javascript:void(0);">EURO</a></li>
            </ul>
          </div>
          <div class="dropdown mb-2">
            <a href="javascript:void(0);" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Light
            </a>
            <ul class="dropdown-menu p-2 mt-2">
              <li><a class="dropdown-item rounded" href="javascript:void(0);">Light</a></li>
              <li><a class="dropdown-item rounded" href="javascript:void(0);">Dark</a></li>
            </ul>
          </div>
        </div>
        <div class="menu-login">
          <a [routerLink]="routes.login" class="btn btn-primary w-100 mb-2"><i class="isax isax-user me-2"></i>Sign In</a>
          <a [routerLink]="routes.register" class="btn btn-secondary w-100"><i class="isax isax-user-edit me-2"></i>Register</a>
        </div>
      </div>
      <div class="header-btn d-flex align-items-center">
        <div class="icon-btn me-2">
          <a href="javascript:void(0);" id="dark-mode-toggle" class="theme-toggle" [ngClass]="{'activate' : themeColor==='light-mode'}" (click)="sidebarService.changeThemeColor('dark-mode')" >
            <i class="isax isax-sun-15"></i>
          </a>
          <a href="javascript:void(0);" id="light-mode-toggle" class="theme-toggle" [ngClass]="{'activate' : themeColor==='dark-mode'}" (click)="sidebarService.changeThemeColor('light-mode')" >
            <i class="isax isax-moon"></i>
          </a>
        </div>
        <div class="icon-btn me-3">
          <a [routerLink]="routes.cart" class="position-relative">
            <i class="isax isax-shopping-cart5"></i>
            <span class="count-icon bg-success p-1 rounded-pill text-white fs-10 fw-bold">1</span>
          </a>
        </div>

        <!-- Notification Bell -->
        <div class="dropdown icon-btn me-3 notification-dropdown">
          <a href="javascript:void(0);" class="position-relative" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="isax isax-notification"></i>
            <span *ngIf="unreadCount > 0"
                  class="count-icon bg-danger p-1 rounded-pill text-white fs-10 fw-bold"
                  style="min-width:16px;text-align:center;">
              {{ unreadCount > 9 ? '9+' : unreadCount }}
            </span>
          </a>
          <div class="dropdown-menu dropdown-menu-end p-0" style="width:320px;max-height:420px;overflow-y:auto;">
            <div class="d-flex justify-content-between align-items-center px-3 py-2 border-bottom bg-light">
              <h6 class="mb-0 fw-semibold">Notifications</h6>
              <button *ngIf="unreadCount > 0"
                      class="btn btn-link btn-sm p-0 text-primary text-decoration-none"
                      (click)="markAllNotifsAsRead()">
                Tout marquer lu
              </button>
            </div>
            <div *ngIf="notifications.length === 0" class="text-center py-4 text-muted">
              <i class="isax isax-notification" style="font-size:2rem;opacity:0.3"></i>
              <p class="mt-2 mb-0 small">Aucune notification</p>
            </div>
            <a *ngFor="let notif of notifications"
               href="javascript:void(0);"
               (click)="markNotifAsRead(notif)"
               class="d-flex align-items-start px-3 py-2 border-bottom text-decoration-none"
               [style.background]="notif.read ? '' : 'rgba(var(--bs-primary-rgb),0.06)'">
              <span class="me-3 mt-1" style="font-size:1.3rem;opacity:0.75;">
                <i class="isax {{ getNotifIcon(notif.type) }}"></i>
              </span>
              <div class="flex-grow-1 overflow-hidden">
                <p class="mb-0 fw-medium text-dark small" style="white-space:normal;line-height:1.3">{{ notif.title }}</p>
                <p *ngIf="notif.message" class="mb-0 text-muted" style="font-size:11px;white-space:normal;">{{ notif.message }}</p>
                <span class="text-muted" style="font-size:10px;">{{ formatNotifDate(notif.createdAt) }}</span>
              </div>
              <span *ngIf="!notif.read"
                    class="rounded-circle bg-primary ms-2 flex-shrink-0"
                    style="width:8px;height:8px;margin-top:6px;"></span>
            </a>
          </div>
        </div>
        <!-- /Notification Bell -->

        <div *ngIf="base==='instructor'" class="dropdown profile-dropdown">
                          <a href="javascript:void(0);" class="d-flex align-items-center" data-bs-toggle="dropdown">
                              <span class="avatar">
              <img src="assets/img/user/user-01.jpg" alt="Img" class="img-fluid rounded-circle">
            </span>
                          </a>
                          <div class="dropdown-menu dropdown-menu-end">
            <div class="profile-header d-flex align-items-center">
              <div class="avatar">
                <img src="assets/img/user/user-01.jpg" alt="Img" class="img-fluid rounded-circle">
              </div>
              <div>
                <h6>{{ userName }}</h6>
                <p>{{ userEmail }}</p>
              </div>
            </div>
            <ul class="profile-body">
              <li>
                <a class="dropdown-item d-inline-flex align-items-center rounded fw-medium" [routerLink]="routes.instructorSettings"><i class="isax isax-security-user me-2"></i>Mon Profil</a>
              </li>
              <li>
                <a class="dropdown-item d-inline-flex align-items-center rounded fw-medium" [routerLink]="routes.instructorCourse"><i class="isax isax-teacher me-2"></i>Courses</a>
              </li>
              <li>
                <a class="dropdown-item d-inline-flex align-items-center rounded fw-medium2" [routerLink]="routes.instructorEarning"><i class="isax isax-dollar-circle me-2"></i>Earnings</a>
              </li>
              <li>
                <a class="dropdown-item d-inline-flex align-items-center rounded fw-medium" [routerLink]="routes.instructor_payouts"><i class="isax isax-coin me-2"></i>Payouts</a>
              </li>
              <li>
                <a class="dropdown-item d-inline-flex align-items-center rounded fw-medium" [routerLink]="routes.instructorMessage"><i class="isax isax-messages-3 me-2"></i>Messages<span class="message-count">2</span></a>
              </li>
              <li>
                <a class="dropdown-item d-inline-flex align-items-center rounded fw-medium" [routerLink]="routes.instructorSettings"><i class="isax isax-setting-2 me-2"></i>Settings</a>
              </li>										
            </ul>
            <div class="profile-footer">
              <a [routerLink]="routes.login" class="dropdown-item d-inline-flex align-items-center rounded fw-medium"><i class="isax isax-arrow-2 me-2"></i>Log in as Student</a>
              <a href="javascript:void(0)" (click)="onLogout()" class="btn btn-secondary d-inline-flex align-items-center justify-content-center w-100"><i class="isax isax-logout me-2"></i>Logout</a>
            </div>
                          </div>
        </div>
        <div *ngIf="base==='student'" class="dropdown profile-dropdown">
          <a href="javascript:void(0);" class="d-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="true">
              <span class="avatar">
              <img src="assets/img/user/user-02.jpg" alt="Img" class="img-fluid rounded-circle">
              </span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end" style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate3d(0px, 37.7778px, 0px);" data-popper-placement="bottom-end">
              <div class="profile-header d-flex align-items-center">
              <div class="avatar">
              <img src="assets/img/user/user-02.jpg" alt="Img" class="img-fluid rounded-circle">
              </div>
              <div>
              <h6>{{ userName }}</h6>
              <p>{{ userEmail }}</p>
              </div>
              </div>
              <ul class="profile-body">
              <li>
              <a class="dropdown-item d-inline-flex align-items-center rounded fw-medium" [routerLink]="routes.studentSettings"><i class="isax isax-security-user me-2"></i>Mon Profil</a>
              </li>
              <li>
              <a class="dropdown-item d-inline-flex align-items-center rounded fw-medium" [routerLink]="routes.studentQuiz"><i class="isax isax-award me-2"></i>Quiz Attempts</a>
              </li>
              <li>
              <a class="dropdown-item d-inline-flex align-items-center rounded fw-medium2" [routerLink]="routes.studentOrderHistory"><i class="isax isax-shopping-cart me-2"></i>Order History</a>
              </li>
              <li>
              <a class="dropdown-item d-inline-flex align-items-center rounded fw-medium" [routerLink]="routes.studentsMessage"><i class="isax isax-messages-3 me-2"></i>Messages<span class="message-count">2</span></a>
              </li>
              <li>
              <a class="dropdown-item d-inline-flex align-items-center rounded fw-medium" [routerLink]="routes.studentSettings"><i class="isax isax-setting-2 me-2"></i>Settings</a>
              </li>										
              </ul>
              <div class="profile-footer">
              <a class="dropdown-item d-inline-flex align-items-center rounded fw-medium" [routerLink]="routes.login"><i class="isax isax-arrow-2 me-2"></i>Log in as Instructor</a>
              <a href="javascript:void(0)" (click)="onLogout()" class="btn btn-secondary d-inline-flex align-items-center justify-content-center w-100"><i class="isax isax-logout me-2"></i>Logout</a>
              </div>
          </div>
      </div>
      </div>
        <!-- Admin Profile Dropdown -->
        <div *ngIf="base==='admin'" class="dropdown profile-dropdown">
          <a href="javascript:void(0);" class="d-flex align-items-center" data-bs-toggle="dropdown">
            <span class="avatar">
              <img src="assets/img/user/user-01.jpg" alt="Img" class="img-fluid rounded-circle">
            </span>
          </a>
          <div class="dropdown-menu dropdown-menu-end">
            <div class="profile-header d-flex align-items-center">
              <div class="avatar">
                <img src="assets/img/user/user-01.jpg" alt="Img" class="img-fluid rounded-circle">
              </div>
              <div>
                <h6>{{ userName }}</h6>
                <p>{{ userEmail }}</p>
              </div>
            </div>
            <ul class="profile-body">
              <li>
                <a class="dropdown-item d-inline-flex align-items-center rounded fw-medium" [routerLink]="routes.adminSettings"><i class="isax isax-setting-2 me-2"></i>Mon Profil</a>
              </li>
            </ul>
            <div class="profile-footer">
              <a href="javascript:void(0)" (click)="onLogout()" class="btn btn-secondary d-inline-flex align-items-center justify-content-center w-100"><i class="isax isax-logout me-2"></i>D&eacute;connexion</a>
            </div>
          </div>
        </div>
        <!-- /Admin Profile Dropdown -->
        <!-- Recruiter Profile Dropdown -->
        <div *ngIf="base==='recruiter'" class="dropdown profile-dropdown">
          <a href="javascript:void(0);" class="d-flex align-items-center" data-bs-toggle="dropdown">
            <span class="avatar">
              <img src="assets/img/user/user-01.jpg" alt="Img" class="img-fluid rounded-circle">
            </span>
          </a>
          <div class="dropdown-menu dropdown-menu-end">
            <div class="profile-header d-flex align-items-center">
              <div class="avatar">
                <img src="assets/img/user/user-01.jpg" alt="Img" class="img-fluid rounded-circle">
              </div>
              <div>
                <h6>{{ userName }}</h6>
                <p>{{ userEmail }}</p>
              </div>
            </div>
            <ul class="profile-body">
              <li>
                <a class="dropdown-item d-inline-flex align-items-center rounded fw-medium" [routerLink]="routes.recruiterSettings"><i class="isax isax-setting-2 me-2"></i>Mon Profil</a>
              </li>
            </ul>
            <div class="profile-footer">
              <a href="javascript:void(0)" (click)="onLogout()" class="btn btn-secondary d-inline-flex align-items-center justify-content-center w-100"><i class="isax isax-logout me-2"></i>D&eacute;connexion</a>
            </div>
          </div>
        </div>
        <!-- /Recruiter Profile Dropdown -->
      </div>
    </div>

    </header>
    <!-- /Header -->
    <div class="sidebar-overlay" [ngClass]="{'opened':isOpened}" (click)="hideSidebar()"></div>` }]
  }], () => [{ type: CommonService }, { type: DataService }, { type: SidebarService }, { type: Renderer2 }, { type: AuthService }, { type: NotificationService }], { menuElement: [{
    type: ViewChild,
    args: ["stickyMenu"]
  }], onWindowScroll: [{
    type: HostListener,
    args: ["window:scroll", []]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminHeaderComponent, { className: "AdminHeaderComponent", filePath: "src/app/features/layouts/admin-header/admin-header.component.ts", lineNumber: 18 });
})();

// src/app/features/features.component.ts
var _c03 = (a0, a1, a2, a3) => ({ "home-3": a0, "home-4": a1, "home-five": a2, "index-six": a3 });
function FeaturesComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header");
  }
}
function FeaturesComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-admin-header");
  }
}
function FeaturesComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275element(3, "i", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4", 5);
    \u0275\u0275text(5, "Compte bloqu\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 7);
    \u0275\u0275listener("click", function FeaturesComponent_Conditional_5_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBlockedLogout());
    });
    \u0275\u0275element(9, "i", 8);
    \u0275\u0275text(10, "Se d\xE9connecter ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.blockedMessage);
  }
}
var FeaturesComponent = class _FeaturesComponent {
  Router;
  sidebar;
  common;
  sidebarService;
  blockedService;
  authService;
  showMiniSidebar = false;
  base = "";
  page = "";
  last = "";
  isuserHeader;
  themeMode = "";
  darkTheme = false;
  isAdminHeader;
  showDark = false;
  mainFooter;
  routeStatus;
  routeStatusSub;
  renderer;
  showBackToTop = false;
  // Modal compte bloqué
  blockedMessage = null;
  blockedSub;
  pingInterval = null;
  onWindowScroll() {
    this.showBackToTop = window.scrollY > 200;
  }
  // Scroll to the top of the page
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  constructor(Router2, sidebar, common, sidebarService, blockedService, authService) {
    this.Router = Router2;
    this.sidebar = sidebar;
    this.common = common;
    this.sidebarService = sidebarService;
    this.blockedService = blockedService;
    this.authService = authService;
    this.common.base.subscribe((res) => {
      this.base = res;
      this.scrollToTop();
    });
    this.common.page.subscribe((res) => {
      this.page = res;
      this.scrollToTop();
    });
    this.common.last.subscribe((res) => {
      this.last = res;
    });
    this.Router.events.subscribe((data) => {
      if (data instanceof NavigationStart) {
        this.setRouting(data);
      }
    });
    this.setRouting(this.Router);
    this.common.isAdminHeader.subscribe((res) => {
      this.isAdminHeader = res;
    });
    this.common.isuserHeader.subscribe((res) => {
      this.isuserHeader = res;
    });
    this.common.mainFooter.subscribe((res) => {
      this.mainFooter = res;
    });
    this.sidebar.toogleSidebar.subscribe((res) => {
      if (res == "true") {
        this.showMiniSidebar = true;
      } else {
        this.showMiniSidebar = false;
      }
    });
  }
  setRouting(data) {
    this.routeStatus = data.url.split("/")[1]?.split("?")[0];
    this.routeStatusSub = data.url.split("/")[2]?.split("?")[0];
    this.common.base.next(data.url.split("/")[1]?.split("?")[0]);
    this.common.page.next(data.url.split("/")[2]?.split("?")[0]);
    this.common.last.next(data.url.split("/")[3]?.split("?")[0]);
    if (this.routeStatus == "index" || this.routeStatus == "index-two" || this.routeStatus == "index-three" || this.routeStatus == "index-four" || this.routeStatus == "index-five" || this.routeStatus == "index-six") {
      this.common.isuserHeader.next(true);
      this.common.isAdminHeader.next(false);
      this.common.mainFooter.next(false);
    } else {
      this.common.mainFooter.next(true);
    }
    if (this.routeStatus == "instructor" || this.routeStatus == "student" || this.routeStatus == "admin" || this.routeStatus == "recruiter") {
      this.common.isuserHeader.next(false);
      this.common.isAdminHeader.next(true);
    } else {
      this.common.isuserHeader.next(true);
      this.common.isAdminHeader.next(false);
    }
  }
  ngOnInit() {
    this.blockedSub = this.blockedService.blocked$.subscribe((msg) => {
      this.blockedMessage = msg;
    });
    this.pingInterval = setInterval(() => {
      if (this.authService.isLoggedIn()) {
        this.authService.ping().subscribe({
          error: () => {
          }
          // 423 est géré par blockedInterceptor automatiquement
        });
      }
    }, 3e4);
  }
  onBlockedLogout() {
    if (this.blockedMessage) {
      localStorage.setItem("blockedMessage", this.blockedMessage);
    }
    this.blockedService.clear();
    this.blockedMessage = null;
    this.authService.logout();
  }
  ngOnDestroy() {
    this.sidebarService.changeThemeColor("light-mode");
    if (this.blockedSub)
      this.blockedSub.unsubscribe();
    if (this.pingInterval)
      clearInterval(this.pingInterval);
  }
  static \u0275fac = function FeaturesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeaturesComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SidebarService), \u0275\u0275directiveInject(CommonService), \u0275\u0275directiveInject(SidebarService), \u0275\u0275directiveInject(BlockedService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeaturesComponent, selectors: [["app-features"]], hostBindings: function FeaturesComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("scroll", function FeaturesComponent_scroll_HostBindingHandler() {
        return ctx.onWindowScroll();
      }, \u0275\u0275resolveWindow);
    }
  }, decls: 6, vars: 9, consts: [[1, "main-wrapper", 3, "ngClass"], [1, "blocked-overlay"], [1, "blocked-modal"], [1, "blocked-icon"], [1, "ti", "ti-ban"], [1, "blocked-title"], [1, "blocked-text"], [1, "btn", "btn-danger", "w-100", "mt-2", 3, "click"], [1, "ti", "ti-logout", "me-2"]], template: function FeaturesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, FeaturesComponent_Conditional_1_Template, 1, 0, "app-header");
      \u0275\u0275conditionalCreate(2, FeaturesComponent_Conditional_2_Template, 1, 0, "app-admin-header");
      \u0275\u0275elementStart(3, "div");
      \u0275\u0275element(4, "router-outlet");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(5, FeaturesComponent_Conditional_5_Template, 11, 1, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(4, _c03, ctx.base === "index-three", ctx.base === "index-four", ctx.base === "index-five", ctx.base === "index-six"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isuserHeader ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isAdminHeader ? 2 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.blockedMessage ? 5 : -1);
    }
  }, dependencies: [CommonModule, NgClass, RouterModule, RouterOutlet, HeaderComponent, AdminHeaderComponent, SlickCarouselModule], styles: ["\n\n.blocked-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.65);\n  z-index: 99999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.blocked-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 2.5rem 2rem;\n  max-width: 400px;\n  width: 90%;\n  text-align: center;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  animation: _ngcontent-%COMP%_popIn 0.25s ease-out;\n}\n.blocked-icon[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  background: #fee2e2;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 1.25rem;\n}\n.blocked-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #dc2626;\n}\n.blocked-title[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 0.75rem;\n}\n.blocked-text[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin-bottom: 0.5rem;\n  line-height: 1.6;\n}\n@keyframes _ngcontent-%COMP%_popIn {\n  from {\n    transform: scale(0.85);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=features.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeaturesComponent, [{
    type: Component,
    args: [{ selector: "app-features", imports: [CommonModule, RouterModule, HeaderComponent, AdminHeaderComponent, SlickCarouselModule], template: `<!-- Main Wrapper -->
<div
  class="main-wrapper"
  [ngClass]="{
     'home-3':base==='index-three','home-4':base==='index-four' ,'home-five':base==='index-five','index-six':base==='index-six'
  }"
  >

    @if (isuserHeader) {
      <app-header></app-header>
    }
  
    @if (isAdminHeader) {
      <app-admin-header></app-admin-header>
    }
    <div>
      <router-outlet></router-outlet>
    </div>

</div>

<!-- ===== MODAL COMPTE BLOQU\xC9 ===== -->
@if (blockedMessage) {
  <div class="blocked-overlay">
    <div class="blocked-modal">
      <div class="blocked-icon">
        <i class="ti ti-ban"></i>
      </div>
      <h4 class="blocked-title">Compte bloqu\xE9</h4>
      <p class="blocked-text">{{ blockedMessage }}</p>
      <button class="btn btn-danger w-100 mt-2" (click)="onBlockedLogout()">
        <i class="ti ti-logout me-2"></i>Se d\xE9connecter
      </button>
    </div>
  </div>
}
`, styles: ["/* src/app/features/features.component.scss */\n.blocked-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.65);\n  z-index: 99999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.blocked-modal {\n  background: #fff;\n  border-radius: 16px;\n  padding: 2.5rem 2rem;\n  max-width: 400px;\n  width: 90%;\n  text-align: center;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  animation: popIn 0.25s ease-out;\n}\n.blocked-icon {\n  width: 72px;\n  height: 72px;\n  background: #fee2e2;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 1.25rem;\n}\n.blocked-icon i {\n  font-size: 2rem;\n  color: #dc2626;\n}\n.blocked-title {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #111827;\n  margin-bottom: 0.75rem;\n}\n.blocked-text {\n  color: #6b7280;\n  margin-bottom: 0.5rem;\n  line-height: 1.6;\n}\n@keyframes popIn {\n  from {\n    transform: scale(0.85);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=features.component.css.map */\n"] }]
  }], () => [{ type: Router }, { type: SidebarService }, { type: CommonService }, { type: SidebarService }, { type: BlockedService }, { type: AuthService }], { onWindowScroll: [{
    type: HostListener,
    args: ["window:scroll", []]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeaturesComponent, { className: "FeaturesComponent", filePath: "src/app/features/features.component.ts", lineNumber: 20 });
})();
export {
  FeaturesComponent
};
//# sourceMappingURL=chunk-WXLID3YW.js.map
