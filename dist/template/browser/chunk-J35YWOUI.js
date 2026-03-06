import {
  MessageService
} from "./chunk-ZJTZEPHA.js";
import {
  CommonService
} from "./chunk-CDB6UHUA.js";
import {
  SharedModule
} from "./chunk-QVKUTSJU.js";
import {
  AuthService
} from "./chunk-WRYOR7DN.js";
import "./chunk-MFSRU4HL.js";
import {
  routes
} from "./chunk-E6TQA5KL.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-VF2E3YWR.js";
import {
  NavigationStart,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-TPKO67I6.js";
import {
  DomSanitizer
} from "./chunk-QFZWCWB7.js";
import "./chunk-PXFMCAI3.js";
import {
  CommonModule,
  NgClass,
  NgIf,
  TitleCasePipe
} from "./chunk-YBJXKBE2.js";
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  Input,
  NgModule,
  Optional,
  SecurityContext,
  interval,
  setClassMetadata,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// node_modules/angular-feather/fesm2015/angular-feather.js
var _c0 = ["*"];
var Icons = class {
  constructor(icons2) {
    this.icons = icons2;
  }
};
function uppercamelcase(str) {
  return str.toLowerCase().replace(/(?:^\w|[A-Z]|\b\w)/g, (firstLetter) => {
    return firstLetter.toUpperCase();
  }).replace(/[-_]/g, "");
}
var FeatherComponent = class {
  constructor(elem, changeDetector, icons2, sanitizer) {
    this.elem = elem;
    this.changeDetector = changeDetector;
    this.icons = icons2;
    this.sanitizer = sanitizer;
  }
  ngOnChanges(changes) {
    const icons2 = Object.assign({}, ...this.icons);
    const svg = icons2[uppercamelcase(changes.name.currentValue)] || "";
    if (!svg) {
      console.warn(`Icon not found: ${changes.name.currentValue}
Refer to documentation on https://github.com/michaelbazos/angular-feather`);
    }
    this.elem.nativeElement.innerHTML = this.sanitizer.sanitize(SecurityContext.HTML, this.sanitizer.bypassSecurityTrustHtml(svg));
    this.changeDetector.markForCheck();
  }
};
FeatherComponent.\u0275fac = function FeatherComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FeatherComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Icons), \u0275\u0275directiveInject(DomSanitizer));
};
FeatherComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: FeatherComponent,
  selectors: [["i-feather"], ["feather-icon"]],
  inputs: {
    name: "name"
  },
  standalone: false,
  features: [\u0275\u0275NgOnChangesFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function FeatherComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  styles: ["[_nghost-%COMP%]{display:inline-block;width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:2px;stroke-linecap:round;stroke-linejoin:round}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeatherComponent, [{
    type: Component,
    args: [{
      selector: "i-feather, feather-icon",
      templateUrl: "./feather.component.html",
      styleUrls: ["./feather.component.scss"]
    }]
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: ChangeDetectorRef,
      decorators: [{
        type: Inject,
        args: [ChangeDetectorRef]
      }]
    }, {
      type: Icons,
      decorators: [{
        type: Inject,
        args: [Icons]
      }]
    }, {
      type: DomSanitizer,
      decorators: [{
        type: Inject,
        args: [DomSanitizer]
      }]
    }];
  }, {
    name: [{
      type: Input
    }]
  });
})();
var FeatherModule = class _FeatherModule {
  constructor(icons2) {
    this.icons = icons2;
    if (!this.icons) {
      throw new Error(`No icon provided. Make sure to use 'FeatherModule.pick({ ... })' when importing the module
Refer to documentation on https://github.com/michaelbazos/angular-feather`);
    }
  }
  static pick(icons2) {
    return {
      ngModule: _FeatherModule,
      providers: [{
        provide: Icons,
        multi: true,
        useValue: icons2
      }]
    };
  }
};
FeatherModule.\u0275fac = function FeatherModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FeatherModule)(\u0275\u0275inject(Icons, 8));
};
FeatherModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: FeatherModule,
  declarations: [FeatherComponent],
  exports: [FeatherComponent]
});
FeatherModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeatherModule, [{
    type: NgModule,
    args: [{
      declarations: [FeatherComponent],
      exports: [FeatherComponent]
    }]
  }], function() {
    return [{
      type: Icons,
      decorators: [{
        type: Optional
      }]
    }];
  }, null);
})();

// node_modules/angular-feather/fesm2015/angular-feather-icons.js
var Bell = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-bell">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
</svg>`;
var BookOpen = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-book-open">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
</svg>`;
var Book = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-book">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
</svg>`;
var Calendar = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-calendar">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
</svg>`;
var Check = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-check">
    <polyline points="20 6 9 17 4 12"></polyline>
</svg>`;
var Clipboard = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-clipboard">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
</svg>`;
var CornerUpLeft = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-corner-up-left">
    <polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
</svg>`;
var CreditCard = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-credit-card">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>
</svg>`;
var DollarSign = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-dollar-sign">
    <line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>`;
var Download = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-download">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>
</svg>`;
var Edit = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-edit">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
</svg>`;
var EyeOff = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-eye-off">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>
</svg>`;
var Eye = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-eye">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>
</svg>`;
var Facebook = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-facebook">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>`;
var Filter = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-filter">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
</svg>`;
var Grid = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-grid">
    <rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>
</svg>`;
var Heart = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-heart">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
</svg>`;
var Home = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-home">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
</svg>`;
var Instagram = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-instagram">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
</svg>`;
var Linkedin = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-linkedin">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
</svg>`;
var List = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-list">
    <line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>
</svg>`;
var Lock = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-lock">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>`;
var LogOut = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-log-out">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>
</svg>`;
var MapPin = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-map-pin">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
</svg>`;
var Moon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-moon">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
</svg>`;
var MoreVertical = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-more-vertical">
    <circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>
</svg>`;
var PieChart = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-pie-chart">
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>
</svg>`;
var Power = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-power">
    <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>
</svg>`;
var RefreshCw = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-refresh-cw">
    <polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
</svg>`;
var Search = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-search">
    <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
</svg>`;
var Server = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-server">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>
</svg>`;
var Settings = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-settings">
    <circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
</svg>`;
var Share2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-share-2">
    <circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
</svg>`;
var ShoppingBag = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-shopping-bag">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>
</svg>`;
var Star = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-star">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>`;
var Trash2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-trash-2">
    <polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>
</svg>`;
var Twitter = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-twitter">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
</svg>`;
var UserPlus = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-user-plus">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>
</svg>`;
var User = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-user">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
</svg>`;
var Users = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-users">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>`;
var Youtube = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-youtube">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
</svg>`;

// src/app/shared/module/feather.module.ts
var icons = {
  Home,
  Book,
  Star,
  PieChart,
  ShoppingBag,
  Users,
  DollarSign,
  Server,
  Settings,
  User,
  RefreshCw,
  Bell,
  Lock,
  Trash2,
  Power,
  Eye,
  EyeOff,
  CornerUpLeft,
  Grid,
  List,
  Search,
  Filter,
  Heart,
  Share2,
  UserPlus,
  Calendar,
  CreditCard,
  Clipboard,
  LogOut,
  Moon,
  Check,
  MoreVertical,
  Download,
  Edit,
  MapPin,
  BookOpen,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube
};
var FeatherIconModule = class _FeatherIconModule {
  static \u0275fac = function FeatherIconModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeatherIconModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FeatherIconModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [FeatherModule.pick(icons), FeatherModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeatherIconModule, [{
    type: NgModule,
    args: [{
      imports: [FeatherModule.pick(icons)],
      exports: [FeatherModule]
    }]
  }], null, null);
})();

// src/app/features/instructor/common/instructor-sidebar/instructor-sidebar.component.ts
var _c02 = (a0) => ({ "active": a0 });
function InstructorSidebarComponent_span_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", ctx_r0.unreadMsgCount > 99 ? "99" : ctx_r0.unreadMsgCount);
  }
}
var InstructorSidebarComponent = class _InstructorSidebarComponent {
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
  static \u0275fac = function InstructorSidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorSidebarComponent)(\u0275\u0275directiveInject(CommonService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorSidebarComponent, selectors: [["app-instructor-sidebar"]], decls: 79, vars: 26, consts: [[1, "settings-sidebar", "mb-lg-0"], [1, "mb-3"], [1, "mb-3", "pb-1"], ["routerLinkActive", "active", 1, "d-inline-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-grid-35", "me-2"], [1, "fa-solid", "fa-user", "me-2"], [1, "isax", "isax-teacher5", "me-2"], [1, "fa-solid", "fa-book", "me-2"], [1, "isax", "isax-volume-high5", "me-2"], [1, "isax", "isax-clipboard-text5", "me-2"], [1, "d-inline-flex", "align-items-center", 3, "routerLink", "ngClass"], [1, "isax", "isax-profile-2user5", "me-2"], [1, "isax", "isax-award5", "me-2"], [1, "isax", "isax-medal-star5", "me-2"], [1, "isax", "isax-note-215", "me-2"], [1, "isax", "isax-wallet-add5", "me-2"], [1, "isax", "isax-coin-15", "me-2"], [1, "isax", "isax-shopping-cart5", "me-2"], ["routerLinkActive", "active", 1, "d-inline-flex", "align-items-center", "justify-content-between", "w-100", 3, "routerLink"], [1, "d-flex", "align-items-center"], [1, "isax", "isax-messages-35", "me-2"], ["class", "badge rounded-pill ms-1", "style", "background:#4a1d96;color:#fff;font-size:10px;", 4, "ngIf"], [1, "isax", "isax-ticket5", "me-2"], [1, "isax", "isax-setting-25", "me-2"], ["href", "javascript:void(0)", 1, "d-inline-flex", "align-items-center", 3, "click"], [1, "isax", "isax-logout5", "me-2"], [1, "badge", "rounded-pill", "ms-1", 2, "background", "#4a1d96", "color", "#fff", "font-size", "10px"]], template: function InstructorSidebarComponent_Template(rf, ctx) {
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
      \u0275\u0275text(16, "Courses");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "li")(18, "a", 3);
      \u0275\u0275element(19, "i", 7);
      \u0275\u0275text(20, "Mes Cours");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "li")(22, "a", 3);
      \u0275\u0275element(23, "i", 8);
      \u0275\u0275text(24, "Announcements");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "li")(26, "a", 3);
      \u0275\u0275element(27, "i", 9);
      \u0275\u0275text(28, "Assignments");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "li")(30, "a", 10);
      \u0275\u0275element(31, "i", 11);
      \u0275\u0275text(32, "Students");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "li")(34, "a", 10);
      \u0275\u0275element(35, "i", 12);
      \u0275\u0275text(36, "Quiz");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "li")(38, "a", 3);
      \u0275\u0275element(39, "i", 13);
      \u0275\u0275text(40, "Quiz Results");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "li")(42, "a", 3);
      \u0275\u0275element(43, "i", 14);
      \u0275\u0275text(44, "Certificates");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "li")(46, "a", 3);
      \u0275\u0275element(47, "i", 15);
      \u0275\u0275text(48, "Earnings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "li")(50, "a", 3);
      \u0275\u0275element(51, "i", 16);
      \u0275\u0275text(52, "Payout");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "li")(54, "a", 3);
      \u0275\u0275element(55, "i", 17);
      \u0275\u0275text(56, "Statements");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "li")(58, "a", 18)(59, "span", 19);
      \u0275\u0275element(60, "i", 20);
      \u0275\u0275text(61, "Messages");
      \u0275\u0275elementEnd();
      \u0275\u0275template(62, InstructorSidebarComponent_span_62_Template, 2, 1, "span", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "li")(64, "a", 3);
      \u0275\u0275element(65, "i", 22);
      \u0275\u0275text(66, "Support Tickets");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(67, "hr");
      \u0275\u0275elementStart(68, "h6", 1);
      \u0275\u0275text(69, "Account Settings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "ul")(71, "li")(72, "a", 10);
      \u0275\u0275element(73, "i", 23);
      \u0275\u0275text(74, "Settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "li")(76, "a", 24);
      \u0275\u0275listener("click", function InstructorSidebarComponent_Template_a_click_76_listener() {
        return ctx.onLogout();
      });
      \u0275\u0275element(77, "i", 25);
      \u0275\u0275text(78, "Logout");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.instructor_dashboard);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorCourse);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorMyCourses);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorAnnouncements);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorAssignment);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.studentsGrid)("ngClass", \u0275\u0275pureFunction1(20, _c02, ctx.page === "students-list" || ctx.page === "students-grid"));
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorQuiz)("ngClass", \u0275\u0275pureFunction1(22, _c02, ctx.page === "instructor-quiz" || ctx.page === "instructor-quiz-questions"));
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorQuizResult);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorCertificate);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorEarning);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructor_payouts);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorStatements);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorMessage);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.unreadMsgCount > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.instructor_tickets);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorSettings)("ngClass", \u0275\u0275pureFunction1(24, _c02, ctx.last === "instructor-settings" || ctx.last === "instructor-change-password" || ctx.last === "instructor-plans" || ctx.last === "instructor-social-profiles" || ctx.last === "instructor-linked-accounts" || ctx.last === "instructor-setting-notifications" || ctx.last === "instructor-integrations" || ctx.last === "instructor-setting-withdraw"));
    }
  }, dependencies: [CommonModule, NgClass, NgIf, RouterLink, RouterLinkActive], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorSidebarComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-sidebar", imports: [CommonModule, RouterLink, RouterLinkActive], template: `<div class="settings-sidebar mb-lg-0 ">
    <div>
        <h6 class="mb-3">Main Menu</h6>
        <ul class="mb-3 pb-1">
            <li>
                <a [routerLink]="routes.instructor_dashboard" class="d-inline-flex align-items-center" routerLinkActive="active"><i class="isax isax-grid-35 me-2"></i>Dashboard</a>
            </li>
            <li>
                <a [routerLink]="routes.instructorProfile" class="d-inline-flex align-items-center" routerLinkActive="active"><i class="fa-solid fa-user me-2"></i>My Profile</a>
            </li>
            <li>
                <a [routerLink]="routes.instructorCourse" class="d-inline-flex align-items-center" routerLinkActive="active"><i class="isax isax-teacher5 me-2"></i>Courses</a>
            </li>
            <li>
                <a [routerLink]="routes.instructorMyCourses" class="d-inline-flex align-items-center" routerLinkActive="active"><i class="fa-solid fa-book me-2"></i>Mes Cours</a>
            </li>
            <li>
                <a [routerLink]="routes.instructorAnnouncements" class="d-inline-flex align-items-center" routerLinkActive="active"><i class="isax isax-volume-high5 me-2"></i>Announcements</a>
            </li>
            <li>
                <a [routerLink]="routes.instructorAssignment" class="d-inline-flex align-items-center" routerLinkActive="active"><i class="isax isax-clipboard-text5 me-2"></i>Assignments</a>
            </li>
            <li>
                <a [routerLink]="routes.studentsGrid" [ngClass]="{'active':page==='students-list' || page==='students-grid'}" class="d-inline-flex align-items-center" ><i class="isax isax-profile-2user5 me-2"></i>Students</a>
            </li>
            <li>
                <a [routerLink]="routes.instructorQuiz" [ngClass]="{'active':page==='instructor-quiz' || page==='instructor-quiz-questions'}" class="d-inline-flex align-items-center"><i class="isax isax-award5 me-2"></i>Quiz</a>
            </li>
            <li>
                <a [routerLink]="routes.instructorQuizResult" class="d-inline-flex align-items-center" routerLinkActive="active"><i class="isax isax-medal-star5 me-2"></i>Quiz Results</a>
            </li>
            <li>
                <a [routerLink]="routes.instructorCertificate" class="d-inline-flex align-items-center" routerLinkActive="active"><i class="isax isax-note-215 me-2"></i>Certificates</a>
            </li>
            <li>
                <a [routerLink]="routes.instructorEarning" class="d-inline-flex align-items-center" routerLinkActive="active"><i class="isax isax-wallet-add5 me-2"></i>Earnings</a>
            </li>
            <li>
                <a [routerLink]="routes.instructor_payouts" class="d-inline-flex align-items-center" routerLinkActive="active"><i class="isax isax-coin-15 me-2"></i>Payout</a>
            </li>
            <li>
                <a [routerLink]="routes.instructorStatements" class="d-inline-flex align-items-center" routerLinkActive="active"><i class="isax isax-shopping-cart5 me-2"></i>Statements</a>
            </li>
            <li>
                <a [routerLink]="routes.instructorMessage" class="d-inline-flex align-items-center justify-content-between w-100" routerLinkActive="active">
                  <span class="d-flex align-items-center"><i class="isax isax-messages-35 me-2"></i>Messages</span>
                  <span *ngIf="unreadMsgCount > 0" class="badge rounded-pill ms-1" style="background:#4a1d96;color:#fff;font-size:10px;">+{{ unreadMsgCount > 99 ? '99' : unreadMsgCount }}</span>
                </a>
            </li>
            <li>
                <a [routerLink]="routes.instructor_tickets" class="d-inline-flex align-items-center" routerLinkActive="active"><i class="isax isax-ticket5 me-2"></i>Support Tickets</a>
            </li>
        </ul>
        <hr>
        <h6 class="mb-3">Account Settings</h6>
        <ul>
            <li>
                <a [routerLink]="routes.instructorSettings" 
                [ngClass]="{'active':last==='instructor-settings' || last==='instructor-change-password' || last==='instructor-plans' 
                || last === 'instructor-social-profiles' || last === 'instructor-linked-accounts' || last === 'instructor-setting-notifications' || last === 'instructor-integrations' || last === 'instructor-setting-withdraw'
                }" 
                class="d-inline-flex align-items-center"><i class="isax isax-setting-25 me-2"></i>Settings</a>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorSidebarComponent, { className: "InstructorSidebarComponent", filePath: "src/app/features/instructor/common/instructor-sidebar/instructor-sidebar.component.ts", lineNumber: 17 });
})();

// src/app/features/instructor/instructor.component.ts
function InstructorComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 22)(2, "div", 56)(3, "div", 57)(4, "div", 58)(5, "h2", 59);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "nav", 60)(9, "ol", 61)(10, "li", 62)(11, "a", 37);
    \u0275\u0275text(12, "Home");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "li", 63);
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
function InstructorComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 22)(2, "div", 64)(3, "div", 65);
    \u0275\u0275element(4, "img", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 67)(6, "div", 52)(7, "div", 28)(8, "span", 68);
    \u0275\u0275element(9, "img", 69);
    \u0275\u0275elementStart(10, "span", 70);
    \u0275\u0275element(11, "i", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div")(13, "h5", 72);
    \u0275\u0275text(14, "Eugene Andre");
    \u0275\u0275elementStart(15, "a", 73);
    \u0275\u0275element(16, "i", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "p", 75);
    \u0275\u0275text(18, "Instructor");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "div", 52)(20, "div", 76)(21, "a", 77);
    \u0275\u0275text(22, "Add New Course");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "a", 78);
    \u0275\u0275text(24, "Student Dashboard");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(25, "div", 56);
    \u0275\u0275element(26, "app-instructor-sidebar", 34);
    \u0275\u0275elementStart(27, "div", 79);
    \u0275\u0275element(28, "router-outlet");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275property("routerLink", ctx_r0.routes.instructorProfile);
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", ctx_r0.routes.addCourse);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r0.routes.students_Dashboard);
  }
}
function InstructorComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}
function InstructorComponent_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 80);
  }
}
function InstructorComponent_i_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 81);
  }
}
function InstructorComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275element(1, "i", 83);
    \u0275\u0275text(2, "Sauvegard\xE9 ");
    \u0275\u0275elementEnd();
  }
}
var InstructorComponent = class _InstructorComponent {
  router;
  routes = routes;
  last = "";
  // ── Notes ──────────────────────────────────────────────────────────────────
  showNotesPanel = false;
  instructorNote = "";
  noteSaved = false;
  noteSaveTimer;
  ngOnInit() {
    this.instructorNote = localStorage.getItem("instructor-general-note") ?? "";
  }
  ngOnDestroy() {
    clearTimeout(this.noteSaveTimer);
  }
  toggleNotesPanel() {
    this.showNotesPanel = !this.showNotesPanel;
  }
  saveNote() {
    localStorage.setItem("instructor-general-note", this.instructorNote);
    this.noteSaved = true;
    clearTimeout(this.noteSaveTimer);
    this.noteSaveTimer = setTimeout(() => {
      this.noteSaved = false;
    }, 2e3);
  }
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
    const lastPart = parts[2]?.replace("instructor-", "").trim();
    this.last = parts[2];
    if (lastPart === "profile") {
      this.last = "My Profile";
    } else if (lastPart === "course") {
      this.last = "My Courses";
    } else if (lastPart === "chat") {
      this.last = "Messages";
    } else if (lastPart === "quiz-attempts") {
      this.last = "My Quiz Attempts";
    } else if (lastPart === "qa") {
      this.last = "Question & Answer";
    } else if (lastPart === "quiz-results") {
      this.last = "Quiz Results";
    } else if (lastPart === "students-grid") {
      this.last = "Students Grid";
    } else if (lastPart === "students-list") {
      this.last = "Students List";
    } else if (lastPart === "quiz-questions") {
      this.last = "Quiz Questions";
    } else {
      this.last = lastPart;
    }
  }
  static \u0275fac = function InstructorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorComponent, selectors: [["app-instructor"]], decls: 121, vars: 22, consts: [[1, "breadcrumb-bar", "text-center"], [1, "content"], ["title", "Mes Notes", 1, "notes-fab", 3, "click"], ["class", "isax isax-note", 4, "ngIf"], ["class", "isax isax-close-circle", 4, "ngIf"], [1, "notes-panel"], [1, "notes-panel__header"], [1, "d-flex", "align-items-center", "gap-2"], [1, "isax", "isax-note-2", "fs-18"], [1, "fw-semibold"], [1, "btn-close", "btn-close-white", "btn-sm", 3, "click"], [1, "notes-panel__body"], [1, "notes-panel__section"], [1, "notes-panel__section-title"], [1, "isax", "isax-clipboard-text", "me-1"], ["rows", "10", "placeholder", "Notez vos id\xE9es, rappels, t\xE2ches...", 1, "notes-panel__textarea", 3, "ngModelChange", "input", "ngModel"], ["class", "notes-saved-msg mt-1", 4, "ngIf"], [1, "footer"], [1, "footer-bg"], ["src", "assets/img/bg/footer-bg-01.png", "alt", "", 1, "footer-bg-1"], ["src", "assets/img/bg/footer-bg-02.png", "alt", "", 1, "footer-bg-2"], [1, "footer-top"], [1, "container"], [1, "row", "row-gap-4"], [1, "col-lg-4"], [1, "footer-about"], [1, "footer-logo"], ["src", "assets/img/logo.svg", "alt", ""], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "me-2"], ["src", "assets/img/icon/appstore.svg", "alt", ""], ["href", "javascript:void(0);"], ["src", "assets/img/icon/googleplay.svg", "alt", ""], [1, "col-lg-8"], [1, "col-lg-3"], [1, "footer-widget", "footer-menu"], [1, "footer-title"], [3, "routerLink"], [1, "col-lg-6"], [1, "footer-widget", "footer-contact"], [1, "subscribe-input"], ["action", "javascript:void(0);"], ["type", "email", "placeholder", "Enter your Email Address", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", "inline-flex", "align-items-center"], [1, "isax", "isax-send-2", "me-1"], [1, "footer-contact-info"], [1, "footer-address", "d-flex", "align-items-center"], ["src", "assets/img/icon/icon-20.svg", "alt", "Img", 1, "img-fluid", "me-2"], ["src", "assets/img/icon/icon-19.svg", "alt", "Img", 1, "img-fluid", "me-2"], ["src", "assets/img/icon/icon-21.svg", "alt", "Img", 1, "img-fluid", "me-2"], [1, "footer-bottom"], [1, "row", "row-gap-2"], [1, "col-md-6"], [1, "text-center", "text-md-start"], [1, "text-white"], [1, "d-flex", "align-items-center", "justify-content-center", "justify-content-md-end", "footer-link"], [1, "row"], [1, "col-md-12", "col-12"], [1, "breadcrumb-list"], [1, "breadcrumb-title"], ["aria-label", "breadcrumb", 1, "page-breadcrumb"], [1, "breadcrumb", "justify-content-center", "mb-0"], [1, "breadcrumb-item"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "instructor-profile"], [1, "instructor-profile-bg"], ["src", "assets/img/bg/card-bg-01.png", "alt", "", 1, "instructor-profile-bg-1"], [1, "row", "align-items-center", "row-gap-3"], [1, "avatar", "flex-shrink-0", "avatar-xxl", "avatar-rounded", "me-3", "border", "border-white", "border-3", "position-relative"], ["src", "assets/img/user/user-01.jpg", "alt", "img"], [1, "verify-tick"], [1, "isax", "isax-verify5"], [1, "mb-1", "text-white", "d-inline-flex", "align-items-center"], [1, "link-light", "fs-16", "ms-2", 3, "routerLink"], [1, "isax", "isax-edit-2"], [1, "text-light"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-3", "justify-content-md-end"], [1, "btn", "btn-white", "rounded-pill", 3, "routerLink"], [1, "btn", "btn-secondary", "rounded-pill", 3, "routerLink"], [1, "col-lg-9"], [1, "isax", "isax-note"], [1, "isax", "isax-close-circle"], [1, "notes-saved-msg", "mt-1"], [1, "fa-solid", "fa-circle-check", "me-1"]], template: function InstructorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, InstructorComponent_Conditional_0_Template, 16, 7, "div", 0);
      \u0275\u0275conditionalCreate(1, InstructorComponent_Conditional_1_Template, 29, 3, "div", 1);
      \u0275\u0275conditionalCreate(2, InstructorComponent_Conditional_2_Template, 1, 0, "router-outlet");
      \u0275\u0275elementStart(3, "button", 2);
      \u0275\u0275listener("click", function InstructorComponent_Template_button_click_3_listener() {
        return ctx.toggleNotesPanel();
      });
      \u0275\u0275template(4, InstructorComponent_i_4_Template, 1, 0, "i", 3)(5, InstructorComponent_i_5_Template, 1, 0, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "div", 7);
      \u0275\u0275element(9, "i", 8);
      \u0275\u0275elementStart(10, "span", 9);
      \u0275\u0275text(11, "Mes Notes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "button", 10);
      \u0275\u0275listener("click", function InstructorComponent_Template_button_click_12_listener() {
        return ctx.showNotesPanel = false;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 11)(14, "div", 12)(15, "div", 13);
      \u0275\u0275element(16, "i", 14);
      \u0275\u0275text(17, "Notes g\xE9n\xE9rales ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "textarea", 15);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorComponent_Template_textarea_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.instructorNote, $event) || (ctx.instructorNote = $event);
        return $event;
      });
      \u0275\u0275listener("input", function InstructorComponent_Template_textarea_input_18_listener() {
        return ctx.saveNote();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(19, InstructorComponent_div_19_Template, 3, 0, "div", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "footer", 17)(21, "div", 18);
      \u0275\u0275element(22, "img", 19)(23, "img", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 21)(25, "div", 22)(26, "div", 23)(27, "div", 24)(28, "div", 25)(29, "div", 26);
      \u0275\u0275element(30, "img", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "p");
      \u0275\u0275text(32, "Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 28)(34, "a", 29);
      \u0275\u0275element(35, "img", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "a", 31);
      \u0275\u0275element(37, "img", 32);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(38, "div", 33)(39, "div", 23)(40, "div", 34)(41, "div", 35)(42, "h5", 36);
      \u0275\u0275text(43, "For Instructor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "ul")(45, "li")(46, "a", 37);
      \u0275\u0275text(47, "Search Mentors");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "li")(49, "a", 37);
      \u0275\u0275text(50, "Login");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "li")(52, "a", 37);
      \u0275\u0275text(53, "Register");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "li")(55, "a", 37);
      \u0275\u0275text(56, "Booking");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "li")(58, "a", 37);
      \u0275\u0275text(59, "Students Dashboard");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(60, "div", 34)(61, "div", 35)(62, "h5", 36);
      \u0275\u0275text(63, "For Student");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "ul")(65, "li")(66, "a", 31);
      \u0275\u0275text(67, "Appointments");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "li")(69, "a", 37);
      \u0275\u0275text(70, "Chat");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "li")(72, "a", 37);
      \u0275\u0275text(73, "Login");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "li")(75, "a", 37);
      \u0275\u0275text(76, "Register");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "li")(78, "a", 37);
      \u0275\u0275text(79, "Instructor Dashboard");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(80, "div", 38)(81, "div", 39)(82, "h5", 36);
      \u0275\u0275text(83, "Newsletter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div", 40)(85, "form", 41);
      \u0275\u0275element(86, "input", 42);
      \u0275\u0275elementStart(87, "button", 43);
      \u0275\u0275element(88, "i", 44);
      \u0275\u0275text(89, "Subscribe");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(90, "div", 45)(91, "div", 46);
      \u0275\u0275element(92, "img", 47);
      \u0275\u0275elementStart(93, "p");
      \u0275\u0275text(94, " 3556 Beech Street, San Francisco,");
      \u0275\u0275element(95, "br");
      \u0275\u0275text(96, " California, CA 94108 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "div", 46);
      \u0275\u0275element(98, "img", 48);
      \u0275\u0275elementStart(99, "p");
      \u0275\u0275text(100, "dreamslms@example.com");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "div", 46);
      \u0275\u0275element(102, "img", 49);
      \u0275\u0275elementStart(103, "p");
      \u0275\u0275text(104, "+19 123-456-7890");
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(105, "div", 50)(106, "div", 22)(107, "div", 51)(108, "div", 52)(109, "div", 53)(110, "p", 54);
      \u0275\u0275text(111, "Copyright \xA9 2025 DreamsLMS. All rights reserved.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(112, "div", 52)(113, "div")(114, "ul", 55)(115, "li")(116, "a", 37);
      \u0275\u0275text(117, "Terms & Conditions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(118, "li")(119, "a", 37);
      \u0275\u0275text(120, "Privacy Policy");
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.last !== "view" ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.last !== "students-details" ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.last === "students-details" ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("notes-fab--open", ctx.showNotesPanel);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.showNotesPanel);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showNotesPanel);
      \u0275\u0275advance();
      \u0275\u0275classProp("notes-panel--visible", ctx.showNotesPanel);
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.instructorNote);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.noteSaved);
      \u0275\u0275advance(27);
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
  }, dependencies: [
    CommonModule,
    NgIf,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
    NgForm,
    FeatherIconModule,
    RouterModule,
    RouterOutlet,
    RouterLink,
    SharedModule,
    InstructorSidebarComponent,
    TitleCasePipe
  ], styles: ["\n\n.notes-fab[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 28px;\n  right: 28px;\n  z-index: 1050;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  color: #fff;\n  font-size: 1.4rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 18px rgba(99, 102, 241, 0.45);\n  cursor: pointer;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.notes-fab[_ngcontent-%COMP%]:hover {\n  transform: scale(1.08);\n  box-shadow: 0 6px 24px rgba(99, 102, 241, 0.55);\n}\n.notes-fab--open[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #f97316);\n  box-shadow: 0 4px 18px rgba(239, 68, 68, 0.4);\n}\n.notes-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 96px;\n  right: 28px;\n  z-index: 1049;\n  width: 360px;\n  max-height: calc(100vh - 130px);\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.16);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  transform: translateY(20px) scale(0.97);\n  opacity: 0;\n  pointer-events: none;\n  transition: transform 0.25s ease, opacity 0.25s ease;\n}\n.notes-panel--visible[_ngcontent-%COMP%] {\n  transform: translateY(0) scale(1);\n  opacity: 1;\n  pointer-events: auto;\n}\n.notes-panel__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  color: #fff;\n  flex-shrink: 0;\n}\n.notes-panel__body[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  overflow-y: auto;\n  flex: 1;\n}\n.notes-panel__section[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.notes-panel__section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.notes-panel__section-title[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #64748b;\n  margin-bottom: 6px;\n}\n.notes-panel__textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 10px 12px;\n  font-size: 0.875rem;\n  resize: vertical;\n  min-height: 120px;\n  outline: none;\n  transition: border-color 0.2s;\n}\n.notes-panel__textarea[_ngcontent-%COMP%]:focus {\n  border-color: #6366f1;\n}\n.notes-panel__divider[_ngcontent-%COMP%] {\n  border-color: #e2e8f0;\n  margin: 14px 0;\n}\n.notes-saved-msg[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #22c55e;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 480px) {\n  .notes-panel[_ngcontent-%COMP%] {\n    right: 12px;\n    left: 12px;\n    width: auto;\n    bottom: 88px;\n  }\n  .notes-fab[_ngcontent-%COMP%] {\n    bottom: 16px;\n    right: 16px;\n  }\n}\n/*# sourceMappingURL=instructor.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorComponent, [{
    type: Component,
    args: [{ selector: "app-instructor", imports: [
      CommonModule,
      FormsModule,
      FeatherIconModule,
      RouterModule,
      SharedModule,
      InstructorSidebarComponent
    ], template: `<!-- Breadcrumb -->
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
 @if(last !== 'students-details' ){
<div class="content" >
  <div class="container">
      <div class="instructor-profile">
          <div class="instructor-profile-bg">
              <img src="assets/img/bg/card-bg-01.png" class="instructor-profile-bg-1" alt="">
          </div>
          <div class="row align-items-center row-gap-3">
                  <div class="col-md-6">
                      <div class="d-flex align-items-center">
                          <span class="avatar flex-shrink-0 avatar-xxl avatar-rounded me-3 border border-white border-3 position-relative">
                              <img src="assets/img/user/user-01.jpg" alt="img">
                              <span class="verify-tick"><i class="isax isax-verify5"></i></span>
                          </span>
                          <div>
                              <h5 class="mb-1 text-white d-inline-flex align-items-center">Eugene Andre<a [routerLink]="routes.instructorProfile" class="link-light fs-16 ms-2"><i class="isax isax-edit-2"></i></a></h5>
                              <p class="text-light">Instructor</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="d-flex align-items-center flex-wrap gap-3 justify-content-md-end">
                          <a [routerLink]="routes.addCourse" class="btn btn-white rounded-pill">Add New Course</a>
                          <a [routerLink]="routes.students_Dashboard" class="btn btn-secondary rounded-pill">Student Dashboard</a>
                      </div>
                  </div>
          </div>
      </div>
      <div class="row">

          <!-- sidebar -->
          <app-instructor-sidebar
              class="col-lg-3 "></app-instructor-sidebar>
          <!-- /Sidebar -->

          <!-- Instructor Dashboard -->
          <div class="col-lg-9">
            <router-outlet></router-outlet>
          </div>
          <!-- Instructor Dashboard -->

      </div>
  </div>
</div>
 }
@if(last === 'students-details'){
    <router-outlet></router-outlet>
}

<!-- ================================================================
     FLOATING NOTES BUTTON (bloc-notes instructeur)
     ================================================================ -->
<!-- Bouton flottant -->
<button class="notes-fab" (click)="toggleNotesPanel()"
        title="Mes Notes" [class.notes-fab--open]="showNotesPanel">
  <i class="isax isax-note" *ngIf="!showNotesPanel"></i>
  <i class="isax isax-close-circle" *ngIf="showNotesPanel"></i>
</button>

<!-- Panneau Notes -->
<div class="notes-panel" [class.notes-panel--visible]="showNotesPanel">

  <!-- Header -->
  <div class="notes-panel__header">
    <div class="d-flex align-items-center gap-2">
      <i class="isax isax-note-2 fs-18"></i>
      <span class="fw-semibold">Mes Notes</span>
    </div>
    <button class="btn-close btn-close-white btn-sm" (click)="showNotesPanel = false"></button>
  </div>

  <!-- Corps -->
  <div class="notes-panel__body">
    <div class="notes-panel__section">
      <div class="notes-panel__section-title">
        <i class="isax isax-clipboard-text me-1"></i>Notes g\xE9n\xE9rales
      </div>
      <textarea class="notes-panel__textarea" rows="10"
                placeholder="Notez vos id\xE9es, rappels, t\xE2ches..."
                [(ngModel)]="instructorNote"
                (input)="saveNote()"></textarea>
      <div *ngIf="noteSaved" class="notes-saved-msg mt-1">
        <i class="fa-solid fa-circle-check me-1"></i>Sauvegard\xE9
      </div>
    </div>
  </div>

</div>
<!-- /Bloc-notes instructeur -->

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
<!-- /Footer -->`, styles: ["/* src/app/features/instructor/instructor.component.scss */\n.notes-fab {\n  position: fixed;\n  bottom: 28px;\n  right: 28px;\n  z-index: 1050;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  color: #fff;\n  font-size: 1.4rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 18px rgba(99, 102, 241, 0.45);\n  cursor: pointer;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.notes-fab:hover {\n  transform: scale(1.08);\n  box-shadow: 0 6px 24px rgba(99, 102, 241, 0.55);\n}\n.notes-fab--open {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #f97316);\n  box-shadow: 0 4px 18px rgba(239, 68, 68, 0.4);\n}\n.notes-panel {\n  position: fixed;\n  bottom: 96px;\n  right: 28px;\n  z-index: 1049;\n  width: 360px;\n  max-height: calc(100vh - 130px);\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.16);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  transform: translateY(20px) scale(0.97);\n  opacity: 0;\n  pointer-events: none;\n  transition: transform 0.25s ease, opacity 0.25s ease;\n}\n.notes-panel--visible {\n  transform: translateY(0) scale(1);\n  opacity: 1;\n  pointer-events: auto;\n}\n.notes-panel__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  color: #fff;\n  flex-shrink: 0;\n}\n.notes-panel__body {\n  padding: 14px 16px;\n  overflow-y: auto;\n  flex: 1;\n}\n.notes-panel__section {\n  margin-bottom: 18px;\n}\n.notes-panel__section:last-child {\n  margin-bottom: 0;\n}\n.notes-panel__section-title {\n  font-size: 0.78rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #64748b;\n  margin-bottom: 6px;\n}\n.notes-panel__textarea {\n  width: 100%;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 10px 12px;\n  font-size: 0.875rem;\n  resize: vertical;\n  min-height: 120px;\n  outline: none;\n  transition: border-color 0.2s;\n}\n.notes-panel__textarea:focus {\n  border-color: #6366f1;\n}\n.notes-panel__divider {\n  border-color: #e2e8f0;\n  margin: 14px 0;\n}\n.notes-saved-msg {\n  font-size: 0.8rem;\n  color: #22c55e;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 480px) {\n  .notes-panel {\n    right: 12px;\n    left: 12px;\n    width: auto;\n    bottom: 88px;\n  }\n  .notes-fab {\n    bottom: 16px;\n    right: 16px;\n  }\n}\n/*# sourceMappingURL=instructor.component.css.map */\n"] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorComponent, { className: "InstructorComponent", filePath: "src/app/features/instructor/instructor.component.ts", lineNumber: 23 });
})();
export {
  InstructorComponent
};
//# sourceMappingURL=chunk-J35YWOUI.js.map
