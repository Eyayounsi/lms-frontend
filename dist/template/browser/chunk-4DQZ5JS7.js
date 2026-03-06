import {
  C,
  F,
  FilterMatchMode,
  G,
  PrimeTemplate,
  SharedModule,
  Y,
  a,
  c,
  g,
  i,
  k,
  l,
  m,
  re,
  s,
  z
} from "./chunk-QVKUTSJU.js";
import {
  AuthService
} from "./chunk-WRYOR7DN.js";
import "./chunk-MFSRU4HL.js";
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
import {
  DefaultValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-VF2E3YWR.js";
import {
  Router,
  RouterLink
} from "./chunk-TPKO67I6.js";
import "./chunk-QFZWCWB7.js";
import "./chunk-PXFMCAI3.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
  isPlatformBrowser,
  isPlatformServer
} from "./chunk-YBJXKBE2.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  Output,
  PLATFORM_ID,
  Renderer2,
  Subject,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  effect,
  forwardRef,
  inject,
  input,
  setClassMetadata,
  signal,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5DE2SIVI.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// node_modules/@primeuix/utils/dist/classnames/index.mjs
function f(...e) {
  if (e) {
    let t2 = [];
    for (let i3 = 0; i3 < e.length; i3++) {
      let n2 = e[i3];
      if (!n2) continue;
      let s4 = typeof n2;
      if (s4 === "string" || s4 === "number") t2.push(n2);
      else if (s4 === "object") {
        let c4 = Array.isArray(n2) ? [f(...n2)] : Object.entries(n2).map(([r, o]) => o ? r : void 0);
        t2 = c4.length ? t2.concat(c4.filter((r) => !!r)) : t2;
      }
    }
    return t2.join(" ").trim();
  }
}

// node_modules/@primeuix/utils/dist/dom/index.mjs
function x(t2) {
  for (let e of document == null ? void 0 : document.styleSheets) try {
    for (let o of e == null ? void 0 : e.cssRules) for (let n2 of o == null ? void 0 : o.style) if (t2.test(n2)) return { name: n2, value: o.style.getPropertyValue(n2).trim() };
  } catch (o) {
  }
  return null;
}
function c2(t2) {
  return typeof Element != "undefined" ? t2 instanceof Element : t2 !== null && typeof t2 == "object" && t2.nodeType === 1 && typeof t2.nodeName == "string";
}
function A(t2, e = {}) {
  if (c2(t2)) {
    let o = (n2, r) => {
      var l3, d2;
      let i3 = (l3 = t2 == null ? void 0 : t2.$attrs) != null && l3[n2] ? [(d2 = t2 == null ? void 0 : t2.$attrs) == null ? void 0 : d2[n2]] : [];
      return [r].flat().reduce((s4, a2) => {
        if (a2 != null) {
          let u2 = typeof a2;
          if (u2 === "string" || u2 === "number") s4.push(a2);
          else if (u2 === "object") {
            let p2 = Array.isArray(a2) ? o(n2, a2) : Object.entries(a2).map(([f2, g2]) => n2 === "style" && (g2 || g2 === 0) ? `${f2.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${g2}` : g2 ? f2 : void 0);
            s4 = p2.length ? s4.concat(p2.filter((f2) => !!f2)) : s4;
          }
        }
        return s4;
      }, i3);
    };
    Object.entries(e).forEach(([n2, r]) => {
      if (r != null) {
        let i3 = n2.match(/^on(.+)/);
        i3 ? t2.addEventListener(i3[1].toLowerCase(), r) : n2 === "p-bind" || n2 === "pBind" ? A(t2, r) : (r = n2 === "class" ? [...new Set(o("class", r))].join(" ").trim() : n2 === "style" ? o("style", r).join(";").trim() : r, (t2.$attrs = t2.$attrs || {}) && (t2.$attrs[n2] = r), t2.setAttribute(n2, r));
      }
    });
  }
}
function _t(t2, e = "", o) {
  c2(t2) && o !== null && o !== void 0 && t2.setAttribute(e, o);
}

// node_modules/@primeuix/utils/dist/eventbus/index.mjs
function s2() {
  let r = /* @__PURE__ */ new Map();
  return { on(e, t2) {
    let n2 = r.get(e);
    return n2 ? n2.push(t2) : n2 = [t2], r.set(e, n2), this;
  }, off(e, t2) {
    let n2 = r.get(e);
    return n2 && n2.splice(n2.indexOf(t2) >>> 0, 1), this;
  }, emit(e, t2) {
    let n2 = r.get(e);
    n2 && n2.forEach((i3) => {
      i3(t2);
    });
  }, clear() {
    r.clear();
  } };
}

// node_modules/@primeuix/utils/dist/mergeprops/index.mjs
var p = Object.defineProperty;
var i2 = Object.getOwnPropertySymbols;
var x2 = Object.prototype.hasOwnProperty;
var c3 = Object.prototype.propertyIsEnumerable;
var d = (t2, e, a2) => e in t2 ? p(t2, e, { enumerable: true, configurable: true, writable: true, value: a2 }) : t2[e] = a2;
var n = (t2, e) => {
  for (var a2 in e || (e = {})) x2.call(e, a2) && d(t2, a2, e[a2]);
  if (i2) for (var a2 of i2(e)) c3.call(e, a2) && d(t2, a2, e[a2]);
  return t2;
};
function u(...t2) {
  if (t2) {
    let e = [];
    for (let a2 = 0; a2 < t2.length; a2++) {
      let o = t2[a2];
      if (!o) continue;
      let r = typeof o;
      if (r === "string" || r === "number") e.push(o);
      else if (r === "object") {
        let s4 = Array.isArray(o) ? [u(...o)] : Object.entries(o).map(([f2, m2]) => m2 ? f2 : void 0);
        e = s4.length ? e.concat(s4.filter((f2) => !!f2)) : e;
      }
    }
    return e.join(" ").trim();
  }
}
function l2(t2) {
  return typeof t2 == "function" && "call" in t2 && "apply" in t2;
}
function w(...t2) {
  return t2 == null ? void 0 : t2.reduce((e, a2 = {}) => {
    for (let o in a2) {
      let r = a2[o];
      if (o === "style") e.style = n(n({}, e.style), a2.style);
      else if (o === "class" || o === "className") e[o] = u(e[o], a2[o]);
      else if (l2(r)) {
        let s4 = e[o];
        e[o] = s4 ? (...f2) => {
          s4(...f2), r(...f2);
        } : r;
      } else e[o] = r;
    }
    return e;
  }, {});
}

// node_modules/@primeuix/utils/dist/uuid/index.mjs
var t = {};
function s3(n2 = "pui_id_") {
  return Object.hasOwn(t, n2) || (t[n2] = 0), t[n2]++, `${n2}${t[n2]}`;
}

// node_modules/@primeuix/styled/dist/index.mjs
var rt = Object.defineProperty;
var st = Object.defineProperties;
var nt = Object.getOwnPropertyDescriptors;
var F2 = Object.getOwnPropertySymbols;
var xe = Object.prototype.hasOwnProperty;
var be = Object.prototype.propertyIsEnumerable;
var _e = (e, t2, r) => t2 in e ? rt(e, t2, { enumerable: true, configurable: true, writable: true, value: r }) : e[t2] = r;
var h = (e, t2) => {
  for (var r in t2 || (t2 = {})) xe.call(t2, r) && _e(e, r, t2[r]);
  if (F2) for (var r of F2(t2)) be.call(t2, r) && _e(e, r, t2[r]);
  return e;
};
var $ = (e, t2) => st(e, nt(t2));
var v = (e, t2) => {
  var r = {};
  for (var s4 in e) xe.call(e, s4) && t2.indexOf(s4) < 0 && (r[s4] = e[s4]);
  if (e != null && F2) for (var s4 of F2(e)) t2.indexOf(s4) < 0 && be.call(e, s4) && (r[s4] = e[s4]);
  return r;
};
var at = s2();
var N = at;
var k2 = /{([^}]*)}/g;
var ne = /(\d+\s+[\+\-\*\/]\s+\d+)/g;
var ie = /var\([^)]+\)/g;
function oe(e) {
  return a(e) ? e.replace(/[A-Z]/g, (t2, r) => r === 0 ? t2 : "." + t2.toLowerCase()).toLowerCase() : e;
}
function ve(e) {
  return i(e) && e.hasOwnProperty("$value") && e.hasOwnProperty("$type") ? e.$value : e;
}
function dt(e) {
  return e.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function Q(e = "", t2 = "") {
  return dt(`${a(e, false) && a(t2, false) ? `${e}-` : e}${t2}`);
}
function ae(e = "", t2 = "") {
  return `--${Q(e, t2)}`;
}
function ht(e = "") {
  let t2 = (e.match(/{/g) || []).length, r = (e.match(/}/g) || []).length;
  return (t2 + r) % 2 !== 0;
}
function Y2(e, t2 = "", r = "", s4 = [], i3) {
  if (a(e)) {
    let a2 = e.trim();
    if (ht(a2)) return;
    if (G(a2, k2)) {
      let n2 = a2.replaceAll(k2, (l3) => {
        let c4 = l3.replace(/{|}/g, "").split(".").filter((m2) => !s4.some((d2) => G(m2, d2)));
        return `var(${ae(r, re(c4.join("-")))}${s(i3) ? `, ${i3}` : ""})`;
      });
      return G(n2.replace(ie, "0"), ne) ? `calc(${n2})` : n2;
    }
    return a2;
  } else if (z(e)) return e;
}
function Re(e, t2, r) {
  a(t2, false) && e.push(`${t2}:${r};`);
}
function C2(e, t2) {
  return e ? `${e}{${t2}}` : "";
}
function le(e, t2) {
  if (e.indexOf("dt(") === -1) return e;
  function r(n2, l3) {
    let o = [], c4 = 0, m2 = "", d2 = null, u2 = 0;
    for (; c4 <= n2.length; ) {
      let g2 = n2[c4];
      if ((g2 === '"' || g2 === "'" || g2 === "`") && n2[c4 - 1] !== "\\" && (d2 = d2 === g2 ? null : g2), !d2 && (g2 === "(" && u2++, g2 === ")" && u2--, (g2 === "," || c4 === n2.length) && u2 === 0)) {
        let f2 = m2.trim();
        f2.startsWith("dt(") ? o.push(le(f2, l3)) : o.push(s4(f2)), m2 = "", c4++;
        continue;
      }
      g2 !== void 0 && (m2 += g2), c4++;
    }
    return o;
  }
  function s4(n2) {
    let l3 = n2[0];
    if ((l3 === '"' || l3 === "'" || l3 === "`") && n2[n2.length - 1] === l3) return n2.slice(1, -1);
    let o = Number(n2);
    return isNaN(o) ? n2 : o;
  }
  let i3 = [], a2 = [];
  for (let n2 = 0; n2 < e.length; n2++) if (e[n2] === "d" && e.slice(n2, n2 + 3) === "dt(") a2.push(n2), n2 += 2;
  else if (e[n2] === ")" && a2.length > 0) {
    let l3 = a2.pop();
    a2.length === 0 && i3.push([l3, n2]);
  }
  if (!i3.length) return e;
  for (let n2 = i3.length - 1; n2 >= 0; n2--) {
    let [l3, o] = i3[n2], c4 = e.slice(l3 + 3, o), m2 = r(c4, t2), d2 = t2(...m2);
    e = e.slice(0, l3) + d2 + e.slice(o + 1);
  }
  return e;
}
var E = (...e) => ue(S.getTheme(), ...e);
var ue = (e = {}, t2, r, s4) => {
  if (t2) {
    let { variable: i3, options: a2 } = S.defaults || {}, { prefix: n2, transform: l3 } = (e == null ? void 0 : e.options) || a2 || {}, o = G(t2, k2) ? t2 : `{${t2}}`;
    return s4 === "value" || l(s4) && l3 === "strict" ? S.getTokenValue(t2) : Y2(o, void 0, n2, [i3.excludedKeyRegex], r);
  }
  return "";
};
function ar(e, ...t2) {
  if (e instanceof Array) {
    let r = e.reduce((s4, i3, a2) => {
      var n2;
      return s4 + i3 + ((n2 = m(t2[a2], { dt: E })) != null ? n2 : "");
    }, "");
    return le(r, E);
  }
  return m(e, { dt: E });
}
function de(e, t2 = {}) {
  let r = S.defaults.variable, { prefix: s4 = r.prefix, selector: i3 = r.selector, excludedKeyRegex: a2 = r.excludedKeyRegex } = t2, n2 = [], l3 = [], o = [{ node: e, path: s4 }];
  for (; o.length; ) {
    let { node: m2, path: d2 } = o.pop();
    for (let u2 in m2) {
      let g2 = m2[u2], f2 = ve(g2), p2 = G(u2, a2) ? Q(d2) : Q(d2, re(u2));
      if (i(f2)) o.push({ node: f2, path: p2 });
      else {
        let y = ae(p2), R = Y2(f2, p2, s4, [a2]);
        Re(l3, y, R);
        let T = p2;
        s4 && T.startsWith(s4 + "-") && (T = T.slice(s4.length + 1)), n2.push(T.replace(/-/g, "."));
      }
    }
  }
  let c4 = l3.join("");
  return { value: l3, tokens: n2, declarations: c4, css: C2(i3, c4) };
}
var b = { regex: { rules: { class: { pattern: /^\.([a-zA-Z][\w-]*)$/, resolve(e) {
  return { type: "class", selector: e, matched: this.pattern.test(e.trim()) };
} }, attr: { pattern: /^\[(.*)\]$/, resolve(e) {
  return { type: "attr", selector: `:root${e},:host${e}`, matched: this.pattern.test(e.trim()) };
} }, media: { pattern: /^@media (.*)$/, resolve(e) {
  return { type: "media", selector: e, matched: this.pattern.test(e.trim()) };
} }, system: { pattern: /^system$/, resolve(e) {
  return { type: "system", selector: "@media (prefers-color-scheme: dark)", matched: this.pattern.test(e.trim()) };
} }, custom: { resolve(e) {
  return { type: "custom", selector: e, matched: true };
} } }, resolve(e) {
  let t2 = Object.keys(this.rules).filter((r) => r !== "custom").map((r) => this.rules[r]);
  return [e].flat().map((r) => {
    var s4;
    return (s4 = t2.map((i3) => i3.resolve(r)).find((i3) => i3.matched)) != null ? s4 : this.rules.custom.resolve(r);
  });
} }, _toVariables(e, t2) {
  return de(e, { prefix: t2 == null ? void 0 : t2.prefix });
}, getCommon({ name: e = "", theme: t2 = {}, params: r, set: s4, defaults: i3 }) {
  var R, T, j, O, M, z2, V;
  let { preset: a2, options: n2 } = t2, l3, o, c4, m2, d2, u2, g2;
  if (s(a2) && n2.transform !== "strict") {
    let { primitive: L, semantic: te, extend: re2 } = a2, f2 = te || {}, { colorScheme: K } = f2, A2 = v(f2, ["colorScheme"]), x3 = re2 || {}, { colorScheme: X } = x3, G2 = v(x3, ["colorScheme"]), p2 = K || {}, { dark: U } = p2, B = v(p2, ["dark"]), y = X || {}, { dark: I } = y, H = v(y, ["dark"]), W = s(L) ? this._toVariables({ primitive: L }, n2) : {}, q = s(A2) ? this._toVariables({ semantic: A2 }, n2) : {}, Z = s(B) ? this._toVariables({ light: B }, n2) : {}, pe = s(U) ? this._toVariables({ dark: U }, n2) : {}, fe = s(G2) ? this._toVariables({ semantic: G2 }, n2) : {}, ye = s(H) ? this._toVariables({ light: H }, n2) : {}, Se = s(I) ? this._toVariables({ dark: I }, n2) : {}, [Me, ze] = [(R = W.declarations) != null ? R : "", W.tokens], [Ke, Xe] = [(T = q.declarations) != null ? T : "", q.tokens || []], [Ge, Ue] = [(j = Z.declarations) != null ? j : "", Z.tokens || []], [Be, Ie] = [(O = pe.declarations) != null ? O : "", pe.tokens || []], [He, We] = [(M = fe.declarations) != null ? M : "", fe.tokens || []], [qe, Ze] = [(z2 = ye.declarations) != null ? z2 : "", ye.tokens || []], [Fe, Je] = [(V = Se.declarations) != null ? V : "", Se.tokens || []];
    l3 = this.transformCSS(e, Me, "light", "variable", n2, s4, i3), o = ze;
    let Qe = this.transformCSS(e, `${Ke}${Ge}`, "light", "variable", n2, s4, i3), Ye = this.transformCSS(e, `${Be}`, "dark", "variable", n2, s4, i3);
    c4 = `${Qe}${Ye}`, m2 = [.../* @__PURE__ */ new Set([...Xe, ...Ue, ...Ie])];
    let et = this.transformCSS(e, `${He}${qe}color-scheme:light`, "light", "variable", n2, s4, i3), tt = this.transformCSS(e, `${Fe}color-scheme:dark`, "dark", "variable", n2, s4, i3);
    d2 = `${et}${tt}`, u2 = [.../* @__PURE__ */ new Set([...We, ...Ze, ...Je])], g2 = m(a2.css, { dt: E });
  }
  return { primitive: { css: l3, tokens: o }, semantic: { css: c4, tokens: m2 }, global: { css: d2, tokens: u2 }, style: g2 };
}, getPreset({ name: e = "", preset: t2 = {}, options: r, params: s4, set: i3, defaults: a2, selector: n2 }) {
  var f2, x3, p2;
  let l3, o, c4;
  if (s(t2) && r.transform !== "strict") {
    let y = e.replace("-directive", ""), m2 = t2, { colorScheme: R, extend: T, css: j } = m2, O = v(m2, ["colorScheme", "extend", "css"]), d2 = T || {}, { colorScheme: M } = d2, z2 = v(d2, ["colorScheme"]), u2 = R || {}, { dark: V } = u2, L = v(u2, ["dark"]), g2 = M || {}, { dark: te } = g2, re2 = v(g2, ["dark"]), K = s(O) ? this._toVariables({ [y]: h(h({}, O), z2) }, r) : {}, A2 = s(L) ? this._toVariables({ [y]: h(h({}, L), re2) }, r) : {}, X = s(V) ? this._toVariables({ [y]: h(h({}, V), te) }, r) : {}, [G2, U] = [(f2 = K.declarations) != null ? f2 : "", K.tokens || []], [B, I] = [(x3 = A2.declarations) != null ? x3 : "", A2.tokens || []], [H, W] = [(p2 = X.declarations) != null ? p2 : "", X.tokens || []], q = this.transformCSS(y, `${G2}${B}`, "light", "variable", r, i3, a2, n2), Z = this.transformCSS(y, H, "dark", "variable", r, i3, a2, n2);
    l3 = `${q}${Z}`, o = [.../* @__PURE__ */ new Set([...U, ...I, ...W])], c4 = m(j, { dt: E });
  }
  return { css: l3, tokens: o, style: c4 };
}, getPresetC({ name: e = "", theme: t2 = {}, params: r, set: s4, defaults: i3 }) {
  var o;
  let { preset: a2, options: n2 } = t2, l3 = (o = a2 == null ? void 0 : a2.components) == null ? void 0 : o[e];
  return this.getPreset({ name: e, preset: l3, options: n2, params: r, set: s4, defaults: i3 });
}, getPresetD({ name: e = "", theme: t2 = {}, params: r, set: s4, defaults: i3 }) {
  var c4, m2;
  let a2 = e.replace("-directive", ""), { preset: n2, options: l3 } = t2, o = ((c4 = n2 == null ? void 0 : n2.components) == null ? void 0 : c4[a2]) || ((m2 = n2 == null ? void 0 : n2.directives) == null ? void 0 : m2[a2]);
  return this.getPreset({ name: a2, preset: o, options: l3, params: r, set: s4, defaults: i3 });
}, applyDarkColorScheme(e) {
  return !(e.darkModeSelector === "none" || e.darkModeSelector === false);
}, getColorSchemeOption(e, t2) {
  var r;
  return this.applyDarkColorScheme(e) ? this.regex.resolve(e.darkModeSelector === true ? t2.options.darkModeSelector : (r = e.darkModeSelector) != null ? r : t2.options.darkModeSelector) : [];
}, getLayerOrder(e, t2 = {}, r, s4) {
  let { cssLayer: i3 } = t2;
  return i3 ? `@layer ${m(i3.order || i3.name || "primeui", r)}` : "";
}, getCommonStyleSheet({ name: e = "", theme: t2 = {}, params: r, props: s4 = {}, set: i3, defaults: a2 }) {
  let n2 = this.getCommon({ name: e, theme: t2, params: r, set: i3, defaults: a2 }), l3 = Object.entries(s4).reduce((o, [c4, m2]) => o.push(`${c4}="${m2}"`) && o, []).join(" ");
  return Object.entries(n2 || {}).reduce((o, [c4, m2]) => {
    if (i(m2) && Object.hasOwn(m2, "css")) {
      let d2 = Y(m2.css), u2 = `${c4}-variables`;
      o.push(`<style type="text/css" data-primevue-style-id="${u2}" ${l3}>${d2}</style>`);
    }
    return o;
  }, []).join("");
}, getStyleSheet({ name: e = "", theme: t2 = {}, params: r, props: s4 = {}, set: i3, defaults: a2 }) {
  var c4;
  let n2 = { name: e, theme: t2, params: r, set: i3, defaults: a2 }, l3 = (c4 = e.includes("-directive") ? this.getPresetD(n2) : this.getPresetC(n2)) == null ? void 0 : c4.css, o = Object.entries(s4).reduce((m2, [d2, u2]) => m2.push(`${d2}="${u2}"`) && m2, []).join(" ");
  return l3 ? `<style type="text/css" data-primevue-style-id="${e}-variables" ${o}>${Y(l3)}</style>` : "";
}, createTokens(e = {}, t2, r = "", s4 = "", i3 = {}) {
  let a2 = function(l3, o = {}, c4 = []) {
    if (c4.includes(this.path)) return console.warn(`Circular reference detected at ${this.path}`), { colorScheme: l3, path: this.path, paths: o, value: void 0 };
    c4.push(this.path), o.name = this.path, o.binding || (o.binding = {});
    let m2 = this.value;
    if (typeof this.value == "string" && k2.test(this.value)) {
      let u2 = this.value.trim().replace(k2, (g2) => {
        var y;
        let f2 = g2.slice(1, -1), x3 = this.tokens[f2];
        if (!x3) return console.warn(`Token not found for path: ${f2}`), "__UNRESOLVED__";
        let p2 = x3.computed(l3, o, c4);
        return Array.isArray(p2) && p2.length === 2 ? `light-dark(${p2[0].value},${p2[1].value})` : (y = p2 == null ? void 0 : p2.value) != null ? y : "__UNRESOLVED__";
      });
      m2 = ne.test(u2.replace(ie, "0")) ? `calc(${u2})` : u2;
    }
    return l(o.binding) && delete o.binding, c4.pop(), { colorScheme: l3, path: this.path, paths: o, value: m2.includes("__UNRESOLVED__") ? void 0 : m2 };
  }, n2 = (l3, o, c4) => {
    Object.entries(l3).forEach(([m2, d2]) => {
      let u2 = G(m2, t2.variable.excludedKeyRegex) ? o : o ? `${o}.${oe(m2)}` : oe(m2), g2 = c4 ? `${c4}.${m2}` : m2;
      i(d2) ? n2(d2, u2, g2) : (i3[u2] || (i3[u2] = { paths: [], computed: (f2, x3 = {}, p2 = []) => {
        if (i3[u2].paths.length === 1) return i3[u2].paths[0].computed(i3[u2].paths[0].scheme, x3.binding, p2);
        if (f2 && f2 !== "none") for (let y = 0; y < i3[u2].paths.length; y++) {
          let R = i3[u2].paths[y];
          if (R.scheme === f2) return R.computed(f2, x3.binding, p2);
        }
        return i3[u2].paths.map((y) => y.computed(y.scheme, x3[y.scheme], p2));
      } }), i3[u2].paths.push({ path: g2, value: d2, scheme: g2.includes("colorScheme.light") ? "light" : g2.includes("colorScheme.dark") ? "dark" : "none", computed: a2, tokens: i3 }));
    });
  };
  return n2(e, r, s4), i3;
}, getTokenValue(e, t2, r) {
  var l3;
  let i3 = ((o) => o.split(".").filter((m2) => !G(m2.toLowerCase(), r.variable.excludedKeyRegex)).join("."))(t2), a2 = t2.includes("colorScheme.light") ? "light" : t2.includes("colorScheme.dark") ? "dark" : void 0, n2 = [(l3 = e[i3]) == null ? void 0 : l3.computed(a2)].flat().filter((o) => o);
  return n2.length === 1 ? n2[0].value : n2.reduce((o = {}, c4) => {
    let u2 = c4, { colorScheme: m2 } = u2, d2 = v(u2, ["colorScheme"]);
    return o[m2] = d2, o;
  }, void 0);
}, getSelectorRule(e, t2, r, s4) {
  return r === "class" || r === "attr" ? C2(s(t2) ? `${e}${t2},${e} ${t2}` : e, s4) : C2(e, C2(t2 != null ? t2 : ":root,:host", s4));
}, transformCSS(e, t2, r, s4, i3 = {}, a2, n2, l3) {
  if (s(t2)) {
    let { cssLayer: o } = i3;
    if (s4 !== "style") {
      let c4 = this.getColorSchemeOption(i3, n2);
      t2 = r === "dark" ? c4.reduce((m2, { type: d2, selector: u2 }) => (s(u2) && (m2 += u2.includes("[CSS]") ? u2.replace("[CSS]", t2) : this.getSelectorRule(u2, l3, d2, t2)), m2), "") : C2(l3 != null ? l3 : ":root,:host", t2);
    }
    if (o) {
      let c4 = { name: "primeui", order: "primeui" };
      i(o) && (c4.name = m(o.name, { name: e, type: s4 })), s(c4.name) && (t2 = C2(`@layer ${c4.name}`, t2), a2 == null || a2.layerNames(c4.name));
    }
    return t2;
  }
  return "";
} };
var S = { defaults: { variable: { prefix: "p", selector: ":root,:host", excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi }, options: { prefix: "p", darkModeSelector: "system", cssLayer: false } }, _theme: void 0, _layerNames: /* @__PURE__ */ new Set(), _loadedStyleNames: /* @__PURE__ */ new Set(), _loadingStyles: /* @__PURE__ */ new Set(), _tokens: {}, update(e = {}) {
  let { theme: t2 } = e;
  t2 && (this._theme = $(h({}, t2), { options: h(h({}, this.defaults.options), t2.options) }), this._tokens = b.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
}, get theme() {
  return this._theme;
}, get preset() {
  var e;
  return ((e = this.theme) == null ? void 0 : e.preset) || {};
}, get options() {
  var e;
  return ((e = this.theme) == null ? void 0 : e.options) || {};
}, get tokens() {
  return this._tokens;
}, getTheme() {
  return this.theme;
}, setTheme(e) {
  this.update({ theme: e }), N.emit("theme:change", e);
}, getPreset() {
  return this.preset;
}, setPreset(e) {
  this._theme = $(h({}, this.theme), { preset: e }), this._tokens = b.createTokens(e, this.defaults), this.clearLoadedStyleNames(), N.emit("preset:change", e), N.emit("theme:change", this.theme);
}, getOptions() {
  return this.options;
}, setOptions(e) {
  this._theme = $(h({}, this.theme), { options: e }), this.clearLoadedStyleNames(), N.emit("options:change", e), N.emit("theme:change", this.theme);
}, getLayerNames() {
  return [...this._layerNames];
}, setLayerNames(e) {
  this._layerNames.add(e);
}, getLoadedStyleNames() {
  return this._loadedStyleNames;
}, isStyleNameLoaded(e) {
  return this._loadedStyleNames.has(e);
}, setLoadedStyleName(e) {
  this._loadedStyleNames.add(e);
}, deleteLoadedStyleName(e) {
  this._loadedStyleNames.delete(e);
}, clearLoadedStyleNames() {
  this._loadedStyleNames.clear();
}, getTokenValue(e) {
  return b.getTokenValue(this.tokens, e, this.defaults);
}, getCommon(e = "", t2) {
  return b.getCommon({ name: e, theme: this.theme, params: t2, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getComponent(e = "", t2) {
  let r = { name: e, theme: this.theme, params: t2, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return b.getPresetC(r);
}, getDirective(e = "", t2) {
  let r = { name: e, theme: this.theme, params: t2, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return b.getPresetD(r);
}, getCustomPreset(e = "", t2, r, s4) {
  let i3 = { name: e, preset: t2, options: this.options, selector: r, params: s4, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return b.getPreset(i3);
}, getLayerOrderCSS(e = "") {
  return b.getLayerOrder(e, this.options, { names: this.getLayerNames() }, this.defaults);
}, transformCSS(e = "", t2, r = "style", s4) {
  return b.transformCSS(e, t2, s4, r, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
}, getCommonStyleSheet(e = "", t2, r = {}) {
  return b.getCommonStyleSheet({ name: e, theme: this.theme, params: t2, props: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getStyleSheet(e, t2, r = {}) {
  return b.getStyleSheet({ name: e, theme: this.theme, params: t2, props: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, onStyleMounted(e) {
  this._loadingStyles.add(e);
}, onStyleUpdated(e) {
  this._loadingStyles.add(e);
}, onStyleLoaded(e, { name: t2 }) {
  this._loadingStyles.size && (this._loadingStyles.delete(t2), N.emit(`theme:${t2}:load`, e), !this._loadingStyles.size && N.emit("theme:load"));
} };

// node_modules/@primeuix/styles/dist/base/index.mjs
var style = "\n    *,\n    ::before,\n    ::after {\n        box-sizing: border-box;\n    }\n\n    /* Non vue overlay animations */\n    .p-connected-overlay {\n        opacity: 0;\n        transform: scaleY(0.8);\n        transition:\n            transform 0.12s cubic-bezier(0, 0, 0.2, 1),\n            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);\n    }\n\n    .p-connected-overlay-visible {\n        opacity: 1;\n        transform: scaleY(1);\n    }\n\n    .p-connected-overlay-hidden {\n        opacity: 0;\n        transform: scaleY(1);\n        transition: opacity 0.1s linear;\n    }\n\n    /* Vue based overlay animations */\n    .p-connected-overlay-enter-from {\n        opacity: 0;\n        transform: scaleY(0.8);\n    }\n\n    .p-connected-overlay-leave-to {\n        opacity: 0;\n    }\n\n    .p-connected-overlay-enter-active {\n        transition:\n            transform 0.12s cubic-bezier(0, 0, 0.2, 1),\n            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);\n    }\n\n    .p-connected-overlay-leave-active {\n        transition: opacity 0.1s linear;\n    }\n\n    /* Toggleable Content */\n    .p-toggleable-content-enter-from,\n    .p-toggleable-content-leave-to {\n        max-height: 0;\n    }\n\n    .p-toggleable-content-enter-to,\n    .p-toggleable-content-leave-from {\n        max-height: 1000px;\n    }\n\n    .p-toggleable-content-leave-active {\n        overflow: hidden;\n        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);\n    }\n\n    .p-toggleable-content-enter-active {\n        overflow: hidden;\n        transition: max-height 1s ease-in-out;\n    }\n\n    .p-disabled,\n    .p-disabled * {\n        cursor: default;\n        pointer-events: none;\n        user-select: none;\n    }\n\n    .p-disabled,\n    .p-component:disabled {\n        opacity: dt('disabled.opacity');\n    }\n\n    .pi {\n        font-size: dt('icon.size');\n    }\n\n    .p-icon {\n        width: dt('icon.size');\n        height: dt('icon.size');\n    }\n\n    .p-overlay-mask {\n        background: dt('mask.background');\n        color: dt('mask.color');\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n\n    .p-overlay-mask-enter {\n        animation: p-overlay-mask-enter-animation dt('mask.transition.duration') forwards;\n    }\n\n    .p-overlay-mask-leave {\n        animation: p-overlay-mask-leave-animation dt('mask.transition.duration') forwards;\n    }\n\n    @keyframes p-overlay-mask-enter-animation {\n        from {\n            background: transparent;\n        }\n        to {\n            background: dt('mask.background');\n        }\n    }\n    @keyframes p-overlay-mask-leave-animation {\n        from {\n            background: dt('mask.background');\n        }\n        to {\n            background: transparent;\n        }\n    }\n";

// node_modules/primeng/fesm2022/primeng-usestyle.mjs
var _id = 0;
var UseStyle = class _UseStyle {
  document = inject(DOCUMENT);
  use(css2, options = {}) {
    let isLoaded = false;
    let cssRef = css2;
    let styleRef = null;
    const {
      immediate = true,
      manual = false,
      name = `style_${++_id}`,
      id = void 0,
      media = void 0,
      nonce = void 0,
      first = false,
      props = {}
    } = options;
    if (!this.document) return;
    styleRef = this.document.querySelector(`style[data-primeng-style-id="${name}"]`) || id && this.document.getElementById(id) || this.document.createElement("style");
    if (styleRef) {
      if (!styleRef.isConnected) {
        cssRef = css2;
        const HEAD = this.document.head;
        _t(styleRef, "nonce", nonce);
        first && HEAD.firstChild ? HEAD.insertBefore(styleRef, HEAD.firstChild) : HEAD.appendChild(styleRef);
        A(styleRef, {
          type: "text/css",
          media,
          nonce,
          "data-primeng-style-id": name
        });
      }
      if (styleRef.textContent !== cssRef) {
        styleRef.textContent = cssRef;
      }
    }
    return {
      id,
      name,
      el: styleRef,
      css: cssRef
    };
  }
  static \u0275fac = function UseStyle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UseStyle)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _UseStyle,
    factory: _UseStyle.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UseStyle, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-base.mjs
var base = {
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  getLoadedStyleNames() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded(name) {
    return this._loadedStyleNames.has(name);
  },
  setLoadedStyleName(name) {
    this._loadedStyleNames.add(name);
  },
  deleteLoadedStyleName(name) {
    this._loadedStyleNames.delete(name);
  },
  clearLoadedStyleNames() {
    this._loadedStyleNames.clear();
  }
};
var css = (
  /*css*/
  `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: dt('scrollbar.width');
}
`
);
var BaseStyle = class _BaseStyle {
  name = "base";
  useStyle = inject(UseStyle);
  css = void 0;
  style = void 0;
  classes = {};
  inlineStyles = {};
  load = (style5, options = {}, transform = (cs) => cs) => {
    const computedStyle = transform(ar`${m(style5, {
      dt: E
    })}`);
    return computedStyle ? this.useStyle.use(Y(computedStyle), __spreadValues({
      name: this.name
    }, options)) : {};
  };
  loadCSS = (options = {}) => {
    return this.load(this.css, options);
  };
  loadStyle = (options = {}, style5 = "") => {
    return this.load(this.style, options, (computedStyle = "") => S.transformCSS(options.name || this.name, `${computedStyle}${ar`${style5}`}`));
  };
  loadBaseCSS = (options = {}) => {
    return this.load(css, options);
  };
  loadBaseStyle = (options = {}, style$1 = "") => {
    return this.load(style, options, (computedStyle = "") => S.transformCSS(options.name || this.name, `${computedStyle}${ar`${style$1}`}`));
  };
  getCommonTheme = (params) => {
    return S.getCommon(this.name, params);
  };
  getComponentTheme = (params) => {
    return S.getComponent(this.name, params);
  };
  getPresetTheme = (preset, selector, params) => {
    return S.getCustomPreset(this.name, preset, selector, params);
  };
  getLayerOrderThemeCSS = () => {
    return S.getLayerOrderCSS(this.name);
  };
  getStyleSheet = (extendedCSS = "", props = {}) => {
    if (this.css) {
      const _css = m(this.css, {
        dt: E
      });
      const _style = Y(ar`${_css}${extendedCSS}`);
      const _props = Object.entries(props).reduce((acc, [k3, v2]) => acc.push(`${k3}="${v2}"`) && acc, []).join(" ");
      return `<style type="text/css" data-primeng-style-id="${this.name}" ${_props}>${_style}</style>`;
    }
    return "";
  };
  getCommonThemeStyleSheet = (params, props = {}) => {
    return S.getCommonStyleSheet(this.name, params, props);
  };
  getThemeStyleSheet = (params, props = {}) => {
    let css2 = [S.getStyleSheet(this.name, params, props)];
    if (this.style) {
      const name = this.name === "base" ? "global-style" : `${this.name}-style`;
      const _css = ar`${m(this.style, {
        dt: E
      })}`;
      const _style = Y(S.transformCSS(name, _css));
      const _props = Object.entries(props).reduce((acc, [k3, v2]) => acc.push(`${k3}="${v2}"`) && acc, []).join(" ");
      css2.push(`<style type="text/css" data-primeng-style-id="${name}" ${_props}>${_style}</style>`);
    }
    return css2.join("");
  };
  static \u0275fac = function BaseStyle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BaseStyle)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BaseStyle,
    factory: _BaseStyle.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseStyle, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-config.mjs
var ThemeProvider = class _ThemeProvider {
  // @todo define type for theme
  theme = signal(void 0, ...ngDevMode ? [{
    debugName: "theme"
  }] : []);
  csp = signal({
    nonce: void 0
  }, ...ngDevMode ? [{
    debugName: "csp"
  }] : []);
  isThemeChanged = false;
  document = inject(DOCUMENT);
  baseStyle = inject(BaseStyle);
  constructor() {
    effect(() => {
      N.on("theme:change", (newTheme) => {
        untracked(() => {
          this.isThemeChanged = true;
          this.theme.set(newTheme);
        });
      });
    });
    effect(() => {
      const themeValue = this.theme();
      if (this.document && themeValue) {
        if (!this.isThemeChanged) {
          this.onThemeChange(themeValue);
        }
        this.isThemeChanged = false;
      }
    });
  }
  ngOnDestroy() {
    S.clearLoadedStyleNames();
    N.clear();
  }
  onThemeChange(value) {
    S.setTheme(value);
    if (this.document) {
      this.loadCommonTheme();
    }
  }
  loadCommonTheme() {
    if (this.theme() === "none") return;
    if (!S.isStyleNameLoaded("common")) {
      const {
        primitive,
        semantic,
        global,
        style: style5
      } = this.baseStyle.getCommonTheme?.() || {};
      const styleOptions = {
        nonce: this.csp?.()?.nonce
      };
      this.baseStyle.load(primitive?.css, __spreadValues({
        name: "primitive-variables"
      }, styleOptions));
      this.baseStyle.load(semantic?.css, __spreadValues({
        name: "semantic-variables"
      }, styleOptions));
      this.baseStyle.load(global?.css, __spreadValues({
        name: "global-variables"
      }, styleOptions));
      this.baseStyle.loadBaseStyle(__spreadValues({
        name: "global-style"
      }, styleOptions), style5);
      S.setLoadedStyleName("common");
    }
  }
  setThemeConfig(config) {
    const {
      theme,
      csp
    } = config || {};
    if (theme) this.theme.set(theme);
    if (csp) this.csp.set(csp);
  }
  static \u0275fac = function ThemeProvider_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeProvider)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ThemeProvider,
    factory: _ThemeProvider.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeProvider, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var PrimeNG = class _PrimeNG extends ThemeProvider {
  ripple = signal(false, ...ngDevMode ? [{
    debugName: "ripple"
  }] : []);
  platformId = inject(PLATFORM_ID);
  /**
   * @deprecated Since v20. Use `inputVariant` instead.
   */
  inputStyle = signal(null, ...ngDevMode ? [{
    debugName: "inputStyle"
  }] : []);
  inputVariant = signal(null, ...ngDevMode ? [{
    debugName: "inputVariant"
  }] : []);
  overlayAppendTo = signal("self", ...ngDevMode ? [{
    debugName: "overlayAppendTo"
  }] : []);
  overlayOptions = {};
  csp = signal({
    nonce: void 0
  }, ...ngDevMode ? [{
    debugName: "csp"
  }] : []);
  /**
   * Indicates whether the component should be rendered without styles.
   *
   * @experimental
   * This property is not yet implemented. It will be available in a future release.
   */
  unstyled = signal(void 0, ...ngDevMode ? [{
    debugName: "unstyled"
  }] : []);
  pt = signal(void 0, ...ngDevMode ? [{
    debugName: "pt"
  }] : []);
  ptOptions = signal(void 0, ...ngDevMode ? [{
    debugName: "ptOptions"
  }] : []);
  filterMatchModeOptions = {
    text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
    numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
    date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
  };
  translation = {
    startsWith: "Starts with",
    contains: "Contains",
    notContains: "Not contains",
    endsWith: "Ends with",
    equals: "Equals",
    notEquals: "Not equals",
    noFilter: "No Filter",
    lt: "Less than",
    lte: "Less than or equal to",
    gt: "Greater than",
    gte: "Greater than or equal to",
    is: "Is",
    isNot: "Is not",
    before: "Before",
    after: "After",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dateBefore: "Date is before",
    dateAfter: "Date is after",
    clear: "Clear",
    apply: "Apply",
    matchAll: "Match All",
    matchAny: "Match Any",
    addRule: "Add Rule",
    removeRule: "Remove Rule",
    accept: "Yes",
    reject: "No",
    choose: "Choose",
    completed: "Completed",
    upload: "Upload",
    cancel: "Cancel",
    pending: "Pending",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    chooseYear: "Choose Year",
    chooseMonth: "Choose Month",
    chooseDate: "Choose Date",
    prevDecade: "Previous Decade",
    nextDecade: "Next Decade",
    prevYear: "Previous Year",
    nextYear: "Next Year",
    prevMonth: "Previous Month",
    nextMonth: "Next Month",
    prevHour: "Previous Hour",
    nextHour: "Next Hour",
    prevMinute: "Previous Minute",
    nextMinute: "Next Minute",
    prevSecond: "Previous Second",
    nextSecond: "Next Second",
    am: "am",
    pm: "pm",
    dateFormat: "mm/dd/yy",
    firstDayOfWeek: 0,
    today: "Today",
    weekHeader: "Wk",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
    passwordPrompt: "Enter a password",
    emptyMessage: "No results found",
    searchMessage: "Search results are available",
    selectionMessage: "{0} items selected",
    emptySelectionMessage: "No selected item",
    emptySearchMessage: "No results found",
    emptyFilterMessage: "No results found",
    fileChosenMessage: "Files",
    noFileChosenMessage: "No file chosen",
    aria: {
      trueLabel: "True",
      falseLabel: "False",
      nullLabel: "Not Selected",
      star: "1 star",
      stars: "{star} stars",
      selectAll: "All items selected",
      unselectAll: "All items unselected",
      close: "Close",
      previous: "Previous",
      next: "Next",
      navigation: "Navigation",
      scrollTop: "Scroll Top",
      moveTop: "Move Top",
      moveUp: "Move Up",
      moveDown: "Move Down",
      moveBottom: "Move Bottom",
      moveToTarget: "Move to Target",
      moveToSource: "Move to Source",
      moveAllToTarget: "Move All to Target",
      moveAllToSource: "Move All to Source",
      pageLabel: "{page}",
      firstPageLabel: "First Page",
      lastPageLabel: "Last Page",
      nextPageLabel: "Next Page",
      prevPageLabel: "Previous Page",
      rowsPerPageLabel: "Rows per page",
      previousPageLabel: "Previous Page",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      selectRow: "Row Selected",
      unselectRow: "Row Unselected",
      expandRow: "Row Expanded",
      collapseRow: "Row Collapsed",
      showFilterMenu: "Show Filter Menu",
      hideFilterMenu: "Hide Filter Menu",
      filterOperator: "Filter Operator",
      filterConstraint: "Filter Constraint",
      editRow: "Row Edit",
      saveEdit: "Save Edit",
      cancelEdit: "Cancel Edit",
      listView: "List View",
      gridView: "Grid View",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      rotateRight: "Rotate Right",
      rotateLeft: "Rotate Left",
      listLabel: "Option List",
      selectColor: "Select a color",
      removeLabel: "Remove",
      browseFiles: "Browse Files",
      maximizeLabel: "Maximize",
      minimizeLabel: "Minimize"
    }
  };
  zIndex = {
    modal: 1100,
    overlay: 1e3,
    menu: 1e3,
    tooltip: 1100
  };
  translationSource = new Subject();
  translationObserver = this.translationSource.asObservable();
  getTranslation(key) {
    return this.translation[key];
  }
  setTranslation(value) {
    this.translation = __spreadValues(__spreadValues({}, this.translation), value);
    this.translationSource.next(this.translation);
  }
  setConfig(config) {
    const {
      csp,
      ripple,
      inputStyle,
      inputVariant,
      theme,
      overlayOptions,
      translation,
      filterMatchModeOptions,
      overlayAppendTo,
      zIndex,
      ptOptions,
      pt,
      unstyled
    } = config || {};
    if (csp) this.csp.set(csp);
    if (overlayAppendTo) this.overlayAppendTo.set(overlayAppendTo);
    if (ripple) this.ripple.set(ripple);
    if (inputStyle) this.inputStyle.set(inputStyle);
    if (inputVariant) this.inputVariant.set(inputVariant);
    if (overlayOptions) this.overlayOptions = overlayOptions;
    if (translation) this.setTranslation(translation);
    if (filterMatchModeOptions) this.filterMatchModeOptions = filterMatchModeOptions;
    if (zIndex) this.zIndex = zIndex;
    if (pt) this.pt.set(pt);
    if (ptOptions) this.ptOptions.set(ptOptions);
    if (unstyled) this.unstyled.set(unstyled);
    if (theme) this.setThemeConfig({
      theme,
      csp
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PrimeNG_BaseFactory;
    return function PrimeNG_Factory(__ngFactoryType__) {
      return (\u0275PrimeNG_BaseFactory || (\u0275PrimeNG_BaseFactory = \u0275\u0275getInheritedFactory(_PrimeNG)))(__ngFactoryType__ || _PrimeNG);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PrimeNG,
    factory: _PrimeNG.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrimeNG, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var PRIME_NG_CONFIG = new InjectionToken("PRIME_NG_CONFIG");

// node_modules/primeng/fesm2022/primeng-basecomponent.mjs
var BaseComponentStyle = class _BaseComponentStyle extends BaseStyle {
  name = "common";
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BaseComponentStyle_BaseFactory;
    return function BaseComponentStyle_Factory(__ngFactoryType__) {
      return (\u0275BaseComponentStyle_BaseFactory || (\u0275BaseComponentStyle_BaseFactory = \u0275\u0275getInheritedFactory(_BaseComponentStyle)))(__ngFactoryType__ || _BaseComponentStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BaseComponentStyle,
    factory: _BaseComponentStyle.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseComponentStyle, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var PARENT_INSTANCE = new InjectionToken("PARENT_INSTANCE");
var BaseComponent = class _BaseComponent {
  document = inject(DOCUMENT);
  platformId = inject(PLATFORM_ID);
  el = inject(ElementRef);
  injector = inject(Injector);
  cd = inject(ChangeDetectorRef);
  renderer = inject(Renderer2);
  config = inject(PrimeNG);
  $parentInstance = inject(PARENT_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  baseComponentStyle = inject(BaseComponentStyle);
  baseStyle = inject(BaseStyle);
  scopedStyleEl;
  parent = this.$params.parent;
  cn = f;
  _themeScopedListener;
  /******************** Inputs ********************/
  /**
   * Defines scoped design tokens of the component.
   * @defaultValue undefined
   * @group Props
   */
  dt = input(...ngDevMode ? [void 0, {
    debugName: "dt"
  }] : []);
  /**
   * Indicates whether the component should be rendered without styles.
   *
   * @experimental
   * This property is not yet implemented. It will be available in a future release.
   */
  unstyled = input(...ngDevMode ? [void 0, {
    debugName: "unstyled"
  }] : []);
  /**
   * Used to pass attributes to DOM elements inside the component.
   * @defaultValue undefined
   * @group Props
   */
  pt = input(...ngDevMode ? [void 0, {
    debugName: "pt"
  }] : []);
  /**
   * Used to configure passthrough(pt) options of the component.
   * @group Props
   * @defaultValue undefined
   */
  ptOptions = input(...ngDevMode ? [void 0, {
    debugName: "ptOptions"
  }] : []);
  /******************** Computed ********************/
  $attrSelector = s3("pc");
  get $name() {
    return this["componentName"] || this.constructor?.name?.replace(/^_/, "") || "UnknownComponent";
  }
  get $hostName() {
    return this["hostName"];
  }
  $unstyled = computed(() => {
    return this.unstyled() !== void 0 ? this.unstyled() : this.config?.unstyled() || false;
  }, ...ngDevMode ? [{
    debugName: "$unstyled"
  }] : []);
  $pt = computed(() => {
    return m(this.pt() || this.directivePT(), this.$params);
  }, ...ngDevMode ? [{
    debugName: "$pt"
  }] : []);
  directivePT = signal(void 0, ...ngDevMode ? [{
    debugName: "directivePT"
  }] : []);
  get $globalPT() {
    return this._getPT(this.config?.pt(), void 0, (value) => m(value, this.$params));
  }
  get $defaultPT() {
    return this._getPT(this.config?.pt(), void 0, (value) => this._getOptionValue(value, this.$hostName || this.$name, this.$params) || m(value, this.$params));
  }
  get $style() {
    return __spreadValues(__spreadValues({
      theme: void 0,
      css: void 0,
      classes: void 0,
      inlineStyles: void 0
    }, (this._getHostInstance(this) || {}).$style), this["_componentStyle"]);
  }
  get $styleOptions() {
    return {
      nonce: this.config?.csp().nonce
    };
  }
  get $params() {
    const parentInstance = this._getHostInstance(this) || this.$parentInstance;
    return {
      instance: this,
      parent: {
        instance: parentInstance
      }
    };
  }
  /******************** Lifecycle Hooks ********************/
  onInit() {
  }
  onChanges(changes) {
  }
  onDoCheck() {
  }
  onAfterContentInit() {
  }
  onAfterContentChecked() {
  }
  onAfterViewInit() {
  }
  onAfterViewChecked() {
  }
  onDestroy() {
  }
  /******************** Angular Lifecycle Hooks ********************/
  constructor() {
    effect((onCleanup) => {
      if (this.document && !isPlatformServer(this.platformId)) {
        N.off("theme:change", this._themeScopedListener);
        if (this.dt()) {
          this._loadScopedThemeStyles(this.dt());
          this._themeScopedListener = () => this._loadScopedThemeStyles(this.dt());
          this._themeChangeListener(this._themeScopedListener);
        } else {
          this._unloadScopedThemeStyles();
        }
      }
      onCleanup(() => {
        N.off("theme:change", this._themeScopedListener);
      });
    });
    effect((onCleanup) => {
      if (this.document && !isPlatformServer(this.platformId)) {
        N.off("theme:change", this._loadCoreStyles);
        if (!this.$unstyled()) {
          this._loadCoreStyles();
          this._themeChangeListener(this._loadCoreStyles);
        }
      }
      onCleanup(() => {
        N.off("theme:change", this._loadCoreStyles);
      });
    });
    this._hook("onBeforeInit");
  }
  /**
   * ⚠ Do not override ngOnInit!
   *
   * Use 'onInit()' in subclasses instead.
   */
  ngOnInit() {
    this._loadCoreStyles();
    this._loadStyles();
    this.onInit();
    this._hook("onInit");
  }
  /**
   * ⚠ Do not override ngOnChanges!
   *
   * Use 'onChanges(changes: SimpleChanges)' in subclasses instead.
   */
  ngOnChanges(changes) {
    this.onChanges(changes);
    this._hook("onChanges", changes);
  }
  /**
   * ⚠ Do not override ngDoCheck!
   *
   * Use 'onDoCheck()' in subclasses instead.
   */
  ngDoCheck() {
    this.onDoCheck();
    this._hook("onDoCheck");
  }
  /**
   * ⚠ Do not override ngAfterContentInit!
   *
   * Use 'onAfterContentInit()' in subclasses instead.
   */
  ngAfterContentInit() {
    this.onAfterContentInit();
    this._hook("onAfterContentInit");
  }
  /**
   * ⚠ Do not override ngAfterContentChecked!
   *
   * Use 'onAfterContentChecked()' in subclasses instead.
   */
  ngAfterContentChecked() {
    this.onAfterContentChecked();
    this._hook("onAfterContentChecked");
  }
  /**
   * ⚠ Do not override ngAfterViewInit!
   *
   * Use 'onAfterViewInit()' in subclasses instead.
   */
  ngAfterViewInit() {
    this.el?.nativeElement?.setAttribute(this.$attrSelector, "");
    this.onAfterViewInit();
    this._hook("onAfterViewInit");
  }
  /**
   * ⚠ Do not override ngAfterViewChecked!
   *
   * Use 'onAfterViewChecked()' in subclasses instead.
   */
  ngAfterViewChecked() {
    this.onAfterViewChecked();
    this._hook("onAfterViewChecked");
  }
  /**
   * ⚠ Do not override ngOnDestroy!
   *
   * Use 'onDestroy()' in subclasses instead.
   */
  ngOnDestroy() {
    this._removeThemeListeners();
    this._unloadScopedThemeStyles();
    this.onDestroy();
    this._hook("onDestroy");
  }
  /******************** Methods ********************/
  _mergeProps(fn, ...args) {
    return c(fn) ? fn(...args) : w(...args);
  }
  _getHostInstance(instance) {
    return instance ? this.$hostName ? this.$name === this.$hostName ? instance : this._getHostInstance(instance.$parentInstance) : instance.$parentInstance : void 0;
  }
  _getPropValue(name) {
    return this[name] || this._getHostInstance(this)?.[name];
  }
  _getOptionValue(options, key = "", params = {}) {
    return F(options, key, params);
  }
  _hook(hookName, ...args) {
    if (!this.$hostName) {
      const selfHook = this._usePT(this._getPT(this.$pt(), this.$name), this._getOptionValue, `hooks.${hookName}`);
      const defaultHook = this._useDefaultPT(this._getOptionValue, `hooks.${hookName}`);
      selfHook?.(...args);
      defaultHook?.(...args);
    }
  }
  /********** Load Styles **********/
  _load() {
    if (!base.isStyleNameLoaded("base")) {
      this.baseStyle.loadBaseCSS(this.$styleOptions);
      this._loadGlobalStyles();
      base.setLoadedStyleName("base");
    }
    this._loadThemeStyles();
  }
  _loadStyles() {
    this._load();
    this._themeChangeListener(() => this._load());
  }
  _loadGlobalStyles() {
    const globalCSS = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
    s(globalCSS) && this.baseStyle.load(globalCSS, __spreadValues({
      name: "global"
    }, this.$styleOptions));
  }
  _loadCoreStyles() {
    if (!base.isStyleNameLoaded(this.$style?.name) && this.$style?.name) {
      this.baseComponentStyle.loadCSS(this.$styleOptions);
      this.$style.loadCSS(this.$styleOptions);
      base.setLoadedStyleName(this.$style.name);
    }
  }
  _loadThemeStyles() {
    if (this.$unstyled() || this.config?.theme() === "none") return;
    if (!S.isStyleNameLoaded("common")) {
      const {
        primitive,
        semantic,
        global,
        style: style5
      } = this.$style?.getCommonTheme?.() || {};
      this.baseStyle.load(primitive?.css, __spreadValues({
        name: "primitive-variables"
      }, this.$styleOptions));
      this.baseStyle.load(semantic?.css, __spreadValues({
        name: "semantic-variables"
      }, this.$styleOptions));
      this.baseStyle.load(global?.css, __spreadValues({
        name: "global-variables"
      }, this.$styleOptions));
      this.baseStyle.loadBaseStyle(__spreadValues({
        name: "global-style"
      }, this.$styleOptions), style5);
      S.setLoadedStyleName("common");
    }
    if (!S.isStyleNameLoaded(this.$style?.name) && this.$style?.name) {
      const {
        css: css2,
        style: style5
      } = this.$style?.getComponentTheme?.() || {};
      this.$style?.load(css2, __spreadValues({
        name: `${this.$style?.name}-variables`
      }, this.$styleOptions));
      this.$style?.loadStyle(__spreadValues({
        name: `${this.$style?.name}-style`
      }, this.$styleOptions), style5);
      S.setLoadedStyleName(this.$style?.name);
    }
    if (!S.isStyleNameLoaded("layer-order")) {
      const layerOrder = this.$style?.getLayerOrderThemeCSS?.();
      this.baseStyle.load(layerOrder, __spreadValues({
        name: "layer-order",
        first: true
      }, this.$styleOptions));
      S.setLoadedStyleName("layer-order");
    }
  }
  _loadScopedThemeStyles(preset) {
    const {
      css: css2
    } = this.$style?.getPresetTheme?.(preset, `[${this.$attrSelector}]`) || {};
    const scopedStyle = this.$style?.load(css2, __spreadValues({
      name: `${this.$attrSelector}-${this.$style?.name}`
    }, this.$styleOptions));
    this.scopedStyleEl = scopedStyle?.el;
  }
  _unloadScopedThemeStyles() {
    this.scopedStyleEl?.remove();
  }
  _themeChangeListener(callback = () => {
  }) {
    base.clearLoadedStyleNames();
    N.on("theme:change", callback.bind(this));
  }
  _removeThemeListeners() {
    N.off("theme:change", this._loadCoreStyles);
    N.off("theme:change", this._load);
    N.off("theme:change", this._themeScopedListener);
  }
  /********** Passthrough **********/
  _getPTValue(obj = {}, key = "", params = {}, searchInDefaultPT = true) {
    const searchOut = /./g.test(key) && !!params[key.split(".")[0]];
    const {
      mergeSections = true,
      mergeProps: useMergeProps = false
    } = this._getPropValue("ptOptions")?.() || this.config?.["ptOptions"]?.() || {};
    const global = searchInDefaultPT ? searchOut ? this._useGlobalPT(this._getPTClassValue, key, params) : this._useDefaultPT(this._getPTClassValue, key, params) : void 0;
    const self = searchOut ? void 0 : this._usePT(this._getPT(obj, this.$hostName || this.$name), this._getPTClassValue, key, __spreadProps(__spreadValues({}, params), {
      global: global || {}
    }));
    const datasets = this._getPTDatasets(key);
    return mergeSections || !mergeSections && self ? useMergeProps ? this._mergeProps(useMergeProps, global, self, datasets) : __spreadValues(__spreadValues(__spreadValues({}, global), self), datasets) : __spreadValues(__spreadValues({}, self), datasets);
  }
  _getPTDatasets(key = "") {
    const datasetPrefix = "data-pc-";
    const isExtended = key === "root" && s(this.$pt()?.["data-pc-section"]);
    return key !== "transition" && __spreadProps(__spreadValues({}, key === "root" && __spreadProps(__spreadValues({
      [`${datasetPrefix}name`]: g(isExtended ? this.$pt()?.["data-pc-section"] : this.$name)
    }, isExtended && {
      [`${datasetPrefix}extend`]: g(this.$name)
    }), {
      [`${this.$attrSelector}`]: ""
      // @todo - use `data-pc-id: this.$attrSelector` instead.
    })), {
      [`${datasetPrefix}section`]: g(key.includes(".") ? key.split(".").at(-1) ?? "" : key)
    });
  }
  _getPTClassValue(options, key, params) {
    const value = this._getOptionValue(options, key, params);
    return a(value) || C(value) ? {
      class: value
    } : value;
  }
  _getPT(pt, key = "", callback) {
    const getValue = (value, checkSameKey = false) => {
      const computedValue = callback ? callback(value) : value;
      const _key = g(key);
      const _cKey = g(this.$hostName || this.$name);
      return (checkSameKey ? _key !== _cKey ? computedValue?.[_key] : void 0 : computedValue?.[_key]) ?? computedValue;
    };
    return pt?.hasOwnProperty("_usept") ? {
      _usept: pt["_usept"],
      originalValue: getValue(pt.originalValue),
      value: getValue(pt.value)
    } : getValue(pt, true);
  }
  _usePT(pt, callback, key, params) {
    const fn = (value) => callback?.call(this, value, key, params);
    if (pt?.hasOwnProperty("_usept")) {
      const {
        mergeSections = true,
        mergeProps: useMergeProps = false
      } = pt["_usept"] || this.config?.["ptOptions"]() || {};
      const originalValue = fn(pt.originalValue);
      const value = fn(pt.value);
      if (originalValue === void 0 && value === void 0) return void 0;
      else if (a(value)) return value;
      else if (a(originalValue)) return originalValue;
      return mergeSections || !mergeSections && value ? useMergeProps ? this._mergeProps(useMergeProps, originalValue, value) : __spreadValues(__spreadValues({}, originalValue), value) : value;
    }
    return fn(pt);
  }
  _useGlobalPT(callback, key, params) {
    return this._usePT(this.$globalPT, callback, key, params);
  }
  _useDefaultPT(callback, key, params) {
    return this._usePT(this.$defaultPT, callback, key, params);
  }
  /******************** Exposed API ********************/
  ptm(key = "", params = {}) {
    return this._getPTValue(this.$pt(), key, __spreadValues(__spreadValues({}, this.$params), params));
  }
  ptms(keys, params = {}) {
    return keys.reduce((acc, arg) => {
      acc = w(acc, this.ptm(arg, params)) || {};
      return acc;
    }, {});
  }
  ptmo(obj = {}, key = "", params = {}) {
    return this._getPTValue(obj, key, __spreadValues({
      instance: this
    }, params), false);
  }
  cx(key, params = {}) {
    return !this.$unstyled() ? f(this._getOptionValue(this.$style.classes, key, __spreadValues(__spreadValues({}, this.$params), params))) : void 0;
  }
  sx(key = "", when = true, params = {}) {
    if (when) {
      const self = this._getOptionValue(this.$style.inlineStyles, key, __spreadValues(__spreadValues({}, this.$params), params));
      const base2 = this._getOptionValue(this.baseComponentStyle.inlineStyles, key, __spreadValues(__spreadValues({}, this.$params), params));
      return __spreadValues(__spreadValues({}, base2), self);
    }
    return void 0;
  }
  static \u0275fac = function BaseComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BaseComponent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BaseComponent,
    inputs: {
      dt: [1, "dt"],
      unstyled: [1, "unstyled"],
      pt: [1, "pt"],
      ptOptions: [1, "ptOptions"]
    },
    features: [\u0275\u0275ProvidersFeature([BaseComponentStyle, BaseStyle]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseComponent, [{
    type: Directive,
    args: [{
      standalone: true,
      providers: [BaseComponentStyle, BaseStyle]
    }]
  }], () => [], null);
})();

// node_modules/primeng/fesm2022/primeng-dom.mjs
var DomHandler = class _DomHandler {
  static zindex = 1e3;
  static calculatedScrollbarWidth = null;
  static calculatedScrollbarHeight = null;
  static browser;
  static addClass(element, className) {
    if (element && className) {
      if (element.classList)
        element.classList.add(className);
      else
        element.className += " " + className;
    }
  }
  static addMultipleClasses(element, className) {
    if (element && className) {
      if (element.classList) {
        let styles = className.trim().split(" ");
        for (let i3 = 0; i3 < styles.length; i3++) {
          element.classList.add(styles[i3]);
        }
      } else {
        let styles = className.split(" ");
        for (let i3 = 0; i3 < styles.length; i3++) {
          element.className += " " + styles[i3];
        }
      }
    }
  }
  static removeClass(element, className) {
    if (element && className) {
      if (element.classList)
        element.classList.remove(className);
      else
        element.className = element.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
  }
  static removeMultipleClasses(element, classNames) {
    if (element && classNames) {
      [classNames].flat().filter(Boolean).forEach((cNames) => cNames.split(" ").forEach((className) => this.removeClass(element, className)));
    }
  }
  static hasClass(element, className) {
    if (element && className) {
      if (element.classList)
        return element.classList.contains(className);
      else
        return new RegExp("(^| )" + className + "( |$)", "gi").test(element.className);
    }
    return false;
  }
  static siblings(element) {
    return Array.prototype.filter.call(element.parentNode.children, function(child) {
      return child !== element;
    });
  }
  static find(element, selector) {
    return Array.from(element.querySelectorAll(selector));
  }
  static findSingle(element, selector) {
    return this.isElement(element) ? element.querySelector(selector) : null;
  }
  static index(element) {
    let children = element.parentNode.childNodes;
    let num = 0;
    for (var i3 = 0; i3 < children.length; i3++) {
      if (children[i3] == element)
        return num;
      if (children[i3].nodeType == 1)
        num++;
    }
    return -1;
  }
  static indexWithinGroup(element, attributeName) {
    let children = element.parentNode ? element.parentNode.childNodes : [];
    let num = 0;
    for (var i3 = 0; i3 < children.length; i3++) {
      if (children[i3] == element)
        return num;
      if (children[i3].attributes && children[i3].attributes[attributeName] && children[i3].nodeType == 1)
        num++;
    }
    return -1;
  }
  static appendOverlay(overlay, target, appendTo = "self") {
    if (appendTo !== "self" && overlay && target) {
      this.appendChild(overlay, target);
    }
  }
  static alignOverlay(overlay, target, appendTo = "self", calculateMinWidth = true) {
    if (overlay && target) {
      if (calculateMinWidth) {
        overlay.style.minWidth = `${_DomHandler.getOuterWidth(target)}px`;
      }
      if (appendTo === "self") {
        this.relativePosition(overlay, target);
      } else {
        this.absolutePosition(overlay, target);
      }
    }
  }
  static relativePosition(element, target, gutter = true) {
    const getClosestRelativeElement = (el) => {
      if (!el)
        return;
      return getComputedStyle(el).getPropertyValue("position") === "relative" ? el : getClosestRelativeElement(el.parentElement);
    };
    const elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
    const targetHeight = target.offsetHeight;
    const targetOffset = target.getBoundingClientRect();
    const windowScrollTop = this.getWindowScrollTop();
    const windowScrollLeft = this.getWindowScrollLeft();
    const viewport = this.getViewport();
    const relativeElement = getClosestRelativeElement(element);
    const relativeElementOffset = relativeElement?.getBoundingClientRect() || {
      top: -1 * windowScrollTop,
      left: -1 * windowScrollLeft
    };
    let top, left, origin2 = "top";
    if (targetOffset.top + targetHeight + elementDimensions.height > viewport.height) {
      top = targetOffset.top - relativeElementOffset.top - elementDimensions.height;
      origin2 = "bottom";
      if (targetOffset.top + top < 0) {
        top = -1 * targetOffset.top;
      }
    } else {
      top = targetHeight + targetOffset.top - relativeElementOffset.top;
      origin2 = "top";
    }
    const horizontalOverflow = targetOffset.left + elementDimensions.width - viewport.width;
    const targetLeftOffsetInSpaceOfRelativeElement = targetOffset.left - relativeElementOffset.left;
    if (elementDimensions.width > viewport.width) {
      left = (targetOffset.left - relativeElementOffset.left) * -1;
    } else if (horizontalOverflow > 0) {
      left = targetLeftOffsetInSpaceOfRelativeElement - horizontalOverflow;
    } else {
      left = targetOffset.left - relativeElementOffset.left;
    }
    element.style.top = top + "px";
    element.style.left = left + "px";
    element.style.transformOrigin = origin2;
    if (gutter) {
      const gutterValue = x(/-anchor-gutter$/)?.value;
      element.style.marginTop = origin2 === "bottom" ? `calc(${gutterValue ?? "2px"} * -1)` : gutterValue ?? "";
    }
  }
  static absolutePosition(element, target, gutter = true) {
    const elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
    const elementOuterHeight = elementDimensions.height;
    const elementOuterWidth = elementDimensions.width;
    const targetOuterHeight = target.offsetHeight;
    const targetOuterWidth = target.offsetWidth;
    const targetOffset = target.getBoundingClientRect();
    const windowScrollTop = this.getWindowScrollTop();
    const windowScrollLeft = this.getWindowScrollLeft();
    const viewport = this.getViewport();
    let top, left;
    if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
      top = targetOffset.top + windowScrollTop - elementOuterHeight;
      element.style.transformOrigin = "bottom";
      if (top < 0) {
        top = windowScrollTop;
      }
    } else {
      top = targetOuterHeight + targetOffset.top + windowScrollTop;
      element.style.transformOrigin = "top";
    }
    if (targetOffset.left + elementOuterWidth > viewport.width)
      left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);
    else
      left = targetOffset.left + windowScrollLeft;
    element.style.top = top + "px";
    element.style.left = left + "px";
    gutter && (element.style.marginTop = origin === "bottom" ? "calc(var(--p-anchor-gutter) * -1)" : "calc(var(--p-anchor-gutter))");
  }
  static getParents(element, parents = []) {
    return element["parentNode"] === null ? parents : this.getParents(element.parentNode, parents.concat([element.parentNode]));
  }
  static getScrollableParents(element) {
    let scrollableParents = [];
    if (element) {
      let parents = this.getParents(element);
      const overflowRegex = /(auto|scroll)/;
      const overflowCheck = (node) => {
        let styleDeclaration = window["getComputedStyle"](node, null);
        return overflowRegex.test(styleDeclaration.getPropertyValue("overflow")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowX")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowY"));
      };
      for (let parent of parents) {
        let scrollSelectors = parent.nodeType === 1 && parent.dataset["scrollselectors"];
        if (scrollSelectors) {
          let selectors = scrollSelectors.split(",");
          for (let selector of selectors) {
            let el = this.findSingle(parent, selector);
            if (el && overflowCheck(el)) {
              scrollableParents.push(el);
            }
          }
        }
        if (parent.nodeType !== 9 && overflowCheck(parent)) {
          scrollableParents.push(parent);
        }
      }
    }
    return scrollableParents;
  }
  static getHiddenElementOuterHeight(element) {
    element.style.visibility = "hidden";
    element.style.display = "block";
    let elementHeight = element.offsetHeight;
    element.style.display = "none";
    element.style.visibility = "visible";
    return elementHeight;
  }
  static getHiddenElementOuterWidth(element) {
    element.style.visibility = "hidden";
    element.style.display = "block";
    let elementWidth = element.offsetWidth;
    element.style.display = "none";
    element.style.visibility = "visible";
    return elementWidth;
  }
  static getHiddenElementDimensions(element) {
    let dimensions = {};
    element.style.visibility = "hidden";
    element.style.display = "block";
    dimensions.width = element.offsetWidth;
    dimensions.height = element.offsetHeight;
    element.style.display = "none";
    element.style.visibility = "visible";
    return dimensions;
  }
  static scrollInView(container, item) {
    let borderTopValue = getComputedStyle(container).getPropertyValue("borderTopWidth");
    let borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
    let paddingTopValue = getComputedStyle(container).getPropertyValue("paddingTop");
    let paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
    let containerRect = container.getBoundingClientRect();
    let itemRect = item.getBoundingClientRect();
    let offset = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
    let scroll = container.scrollTop;
    let elementHeight = container.clientHeight;
    let itemHeight = this.getOuterHeight(item);
    if (offset < 0) {
      container.scrollTop = scroll + offset;
    } else if (offset + itemHeight > elementHeight) {
      container.scrollTop = scroll + offset - elementHeight + itemHeight;
    }
  }
  static fadeIn(element, duration) {
    element.style.opacity = 0;
    let last = +/* @__PURE__ */ new Date();
    let opacity = 0;
    let tick = function() {
      opacity = +element.style.opacity.replace(",", ".") + ((/* @__PURE__ */ new Date()).getTime() - last) / duration;
      element.style.opacity = opacity;
      last = +/* @__PURE__ */ new Date();
      if (+opacity < 1) {
        if (window.requestAnimationFrame)
          window.requestAnimationFrame(tick);
        else
          setTimeout(tick, 16);
      }
    };
    tick();
  }
  static fadeOut(element, ms) {
    var opacity = 1, interval = 50, duration = ms, gap = interval / duration;
    let fading = setInterval(() => {
      opacity = opacity - gap;
      if (opacity <= 0) {
        opacity = 0;
        clearInterval(fading);
      }
      element.style.opacity = opacity;
    }, interval);
  }
  static getWindowScrollTop() {
    let doc = document.documentElement;
    return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  }
  static getWindowScrollLeft() {
    let doc = document.documentElement;
    return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  }
  static matches(element, selector) {
    var p2 = Element.prototype;
    var f2 = p2["matches"] || p2.webkitMatchesSelector || p2["mozMatchesSelector"] || p2["msMatchesSelector"] || function(s4) {
      return [].indexOf.call(document.querySelectorAll(s4), this) !== -1;
    };
    return f2.call(element, selector);
  }
  static getOuterWidth(el, margin) {
    let width = el.offsetWidth;
    if (margin) {
      let style5 = getComputedStyle(el);
      width += parseFloat(style5.marginLeft) + parseFloat(style5.marginRight);
    }
    return width;
  }
  static getHorizontalPadding(el) {
    let style5 = getComputedStyle(el);
    return parseFloat(style5.paddingLeft) + parseFloat(style5.paddingRight);
  }
  static getHorizontalMargin(el) {
    let style5 = getComputedStyle(el);
    return parseFloat(style5.marginLeft) + parseFloat(style5.marginRight);
  }
  static innerWidth(el) {
    let width = el.offsetWidth;
    let style5 = getComputedStyle(el);
    width += parseFloat(style5.paddingLeft) + parseFloat(style5.paddingRight);
    return width;
  }
  static width(el) {
    let width = el.offsetWidth;
    let style5 = getComputedStyle(el);
    width -= parseFloat(style5.paddingLeft) + parseFloat(style5.paddingRight);
    return width;
  }
  static getInnerHeight(el) {
    let height = el.offsetHeight;
    let style5 = getComputedStyle(el);
    height += parseFloat(style5.paddingTop) + parseFloat(style5.paddingBottom);
    return height;
  }
  static getOuterHeight(el, margin) {
    let height = el.offsetHeight;
    if (margin) {
      let style5 = getComputedStyle(el);
      height += parseFloat(style5.marginTop) + parseFloat(style5.marginBottom);
    }
    return height;
  }
  static getHeight(el) {
    let height = el.offsetHeight;
    let style5 = getComputedStyle(el);
    height -= parseFloat(style5.paddingTop) + parseFloat(style5.paddingBottom) + parseFloat(style5.borderTopWidth) + parseFloat(style5.borderBottomWidth);
    return height;
  }
  static getWidth(el) {
    let width = el.offsetWidth;
    let style5 = getComputedStyle(el);
    width -= parseFloat(style5.paddingLeft) + parseFloat(style5.paddingRight) + parseFloat(style5.borderLeftWidth) + parseFloat(style5.borderRightWidth);
    return width;
  }
  static getViewport() {
    let win = window, d2 = document, e = d2.documentElement, g2 = d2.getElementsByTagName("body")[0], w2 = win.innerWidth || e.clientWidth || g2.clientWidth, h2 = win.innerHeight || e.clientHeight || g2.clientHeight;
    return { width: w2, height: h2 };
  }
  static getOffset(el) {
    var rect = el.getBoundingClientRect();
    return {
      top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
      left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
    };
  }
  static replaceElementWith(element, replacementElement) {
    let parentNode = element.parentNode;
    if (!parentNode)
      throw `Can't replace element`;
    return parentNode.replaceChild(replacementElement, element);
  }
  static getUserAgent() {
    if (navigator && this.isClient()) {
      return navigator.userAgent;
    }
  }
  static isIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0) {
      return true;
    }
    var trident = ua.indexOf("Trident/");
    if (trident > 0) {
      var rv = ua.indexOf("rv:");
      return true;
    }
    var edge = ua.indexOf("Edge/");
    if (edge > 0) {
      return true;
    }
    return false;
  }
  static isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window["MSStream"];
  }
  static isAndroid() {
    return /(android)/i.test(navigator.userAgent);
  }
  static isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }
  static appendChild(element, target) {
    if (this.isElement(target))
      target.appendChild(element);
    else if (target && target.el && target.el.nativeElement)
      target.el.nativeElement.appendChild(element);
    else
      throw "Cannot append " + target + " to " + element;
  }
  static removeChild(element, target) {
    if (this.isElement(target))
      target.removeChild(element);
    else if (target.el && target.el.nativeElement)
      target.el.nativeElement.removeChild(element);
    else
      throw "Cannot remove " + element + " from " + target;
  }
  static removeElement(element) {
    if (!("remove" in Element.prototype))
      element.parentNode?.removeChild(element);
    else
      element.remove();
  }
  static isElement(obj) {
    return typeof HTMLElement === "object" ? obj instanceof HTMLElement : obj && typeof obj === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string";
  }
  static calculateScrollbarWidth(el) {
    if (el) {
      let style5 = getComputedStyle(el);
      return el.offsetWidth - el.clientWidth - parseFloat(style5.borderLeftWidth) - parseFloat(style5.borderRightWidth);
    } else {
      if (this.calculatedScrollbarWidth !== null)
        return this.calculatedScrollbarWidth;
      let scrollDiv = document.createElement("div");
      scrollDiv.className = "p-scrollbar-measure";
      document.body.appendChild(scrollDiv);
      let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      this.calculatedScrollbarWidth = scrollbarWidth;
      return scrollbarWidth;
    }
  }
  static calculateScrollbarHeight() {
    if (this.calculatedScrollbarHeight !== null)
      return this.calculatedScrollbarHeight;
    let scrollDiv = document.createElement("div");
    scrollDiv.className = "p-scrollbar-measure";
    document.body.appendChild(scrollDiv);
    let scrollbarHeight = scrollDiv.offsetHeight - scrollDiv.clientHeight;
    document.body.removeChild(scrollDiv);
    this.calculatedScrollbarWidth = scrollbarHeight;
    return scrollbarHeight;
  }
  static invokeElementMethod(element, methodName, args) {
    element[methodName].apply(element, args);
  }
  static clearSelection() {
    if (window.getSelection && window.getSelection()) {
      if (window.getSelection()?.empty) {
        window.getSelection()?.empty();
      } else if (window.getSelection()?.removeAllRanges && (window.getSelection()?.rangeCount || 0) > 0 && (window.getSelection()?.getRangeAt(0)?.getClientRects()?.length || 0) > 0) {
        window.getSelection()?.removeAllRanges();
      }
    } else if (document["selection"] && document["selection"].empty) {
      try {
        document["selection"].empty();
      } catch (error) {
      }
    }
  }
  static getBrowser() {
    if (!this.browser) {
      let matched = this.resolveUserAgent();
      this.browser = {};
      if (matched.browser) {
        this.browser[matched.browser] = true;
        this.browser["version"] = matched.version;
      }
      if (this.browser["chrome"]) {
        this.browser["webkit"] = true;
      } else if (this.browser["webkit"]) {
        this.browser["safari"] = true;
      }
    }
    return this.browser;
  }
  static resolveUserAgent() {
    let ua = navigator.userAgent.toLowerCase();
    let match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
    return {
      browser: match[1] || "",
      version: match[2] || "0"
    };
  }
  static isInteger(value) {
    if (Number.isInteger) {
      return Number.isInteger(value);
    } else {
      return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
    }
  }
  static isHidden(element) {
    return !element || element.offsetParent === null;
  }
  static isVisible(element) {
    return element && element.offsetParent != null;
  }
  static isExist(element) {
    return element !== null && typeof element !== "undefined" && element.nodeName && element.parentNode;
  }
  static focus(element, options) {
    element && document.activeElement !== element && element.focus(options);
  }
  static getFocusableSelectorString(selector = "") {
    return `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector}`;
  }
  static getFocusableElements(element, selector = "") {
    let focusableElements = this.find(element, this.getFocusableSelectorString(selector));
    let visibleFocusableElements = [];
    for (let focusableElement of focusableElements) {
      const computedStyle = getComputedStyle(focusableElement);
      if (this.isVisible(focusableElement) && computedStyle.display != "none" && computedStyle.visibility != "hidden")
        visibleFocusableElements.push(focusableElement);
    }
    return visibleFocusableElements;
  }
  static getFocusableElement(element, selector = "") {
    let focusableElement = this.findSingle(element, this.getFocusableSelectorString(selector));
    if (focusableElement) {
      const computedStyle = getComputedStyle(focusableElement);
      if (this.isVisible(focusableElement) && computedStyle.display != "none" && computedStyle.visibility != "hidden")
        return focusableElement;
    }
    return null;
  }
  static getFirstFocusableElement(element, selector = "") {
    const focusableElements = this.getFocusableElements(element, selector);
    return focusableElements.length > 0 ? focusableElements[0] : null;
  }
  static getLastFocusableElement(element, selector) {
    const focusableElements = this.getFocusableElements(element, selector);
    return focusableElements.length > 0 ? focusableElements[focusableElements.length - 1] : null;
  }
  static getNextFocusableElement(element, reverse = false) {
    const focusableElements = _DomHandler.getFocusableElements(element);
    let index = 0;
    if (focusableElements && focusableElements.length > 0) {
      const focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);
      if (reverse) {
        if (focusedIndex == -1 || focusedIndex === 0) {
          index = focusableElements.length - 1;
        } else {
          index = focusedIndex - 1;
        }
      } else if (focusedIndex != -1 && focusedIndex !== focusableElements.length - 1) {
        index = focusedIndex + 1;
      }
    }
    return focusableElements[index];
  }
  static generateZIndex() {
    this.zindex = this.zindex || 999;
    return ++this.zindex;
  }
  static getSelection() {
    if (window.getSelection)
      return window.getSelection()?.toString();
    else if (document.getSelection)
      return document.getSelection()?.toString();
    else if (document["selection"])
      return document["selection"].createRange().text;
    return null;
  }
  static getTargetElement(target, el) {
    if (!target)
      return null;
    switch (target) {
      case "document":
        return document;
      case "window":
        return window;
      case "@next":
        return el?.nextElementSibling;
      case "@prev":
        return el?.previousElementSibling;
      case "@parent":
        return el?.parentElement;
      case "@grandparent":
        return el?.parentElement?.parentElement;
      default:
        const type = typeof target;
        if (type === "string") {
          return document.querySelector(target);
        } else if (type === "object" && target.hasOwnProperty("nativeElement")) {
          return this.isExist(target.nativeElement) ? target.nativeElement : void 0;
        }
        const isFunction = (obj) => !!(obj && obj.constructor && obj.call && obj.apply);
        const element = isFunction(target) ? target() : target;
        return element && element.nodeType === 9 || this.isExist(element) ? element : null;
    }
  }
  static isClient() {
    return !!(typeof window !== "undefined" && window.document && window.document.createElement);
  }
  static getAttribute(element, name) {
    if (element) {
      const value = element.getAttribute(name);
      if (!isNaN(value)) {
        return +value;
      }
      if (value === "true" || value === "false") {
        return value === "true";
      }
      return value;
    }
    return void 0;
  }
  static calculateBodyScrollbarWidth() {
    return window.innerWidth - document.documentElement.offsetWidth;
  }
  static blockBodyScroll(className = "p-overflow-hidden") {
    document.body.style.setProperty("--scrollbar-width", this.calculateBodyScrollbarWidth() + "px");
    this.addClass(document.body, className);
  }
  static unblockBodyScroll(className = "p-overflow-hidden") {
    document.body.style.removeProperty("--scrollbar-width");
    this.removeClass(document.body, className);
  }
  static createElement(type, attributes = {}, ...children) {
    if (type) {
      const element = document.createElement(type);
      this.setAttributes(element, attributes);
      element.append(...children);
      return element;
    }
    return void 0;
  }
  static setAttribute(element, attribute = "", value) {
    if (this.isElement(element) && value !== null && value !== void 0) {
      element.setAttribute(attribute, value);
    }
  }
  static setAttributes(element, attributes = {}) {
    if (this.isElement(element)) {
      const computedStyles = (rule, value) => {
        const styles = element?.$attrs?.[rule] ? [element?.$attrs?.[rule]] : [];
        return [value].flat().reduce((cv, v2) => {
          if (v2 !== null && v2 !== void 0) {
            const type = typeof v2;
            if (type === "string" || type === "number") {
              cv.push(v2);
            } else if (type === "object") {
              const _cv = Array.isArray(v2) ? computedStyles(rule, v2) : Object.entries(v2).map(([_k, _v]) => rule === "style" && (!!_v || _v === 0) ? `${_k.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${_v}` : !!_v ? _k : void 0);
              cv = _cv.length ? cv.concat(_cv.filter((c4) => !!c4)) : cv;
            }
          }
          return cv;
        }, styles);
      };
      Object.entries(attributes).forEach(([key, value]) => {
        if (value !== void 0 && value !== null) {
          const matchedEvent = key.match(/^on(.+)/);
          if (matchedEvent) {
            element.addEventListener(matchedEvent[1].toLowerCase(), value);
          } else if (key === "pBind") {
            this.setAttributes(element, value);
          } else {
            value = key === "class" ? [...new Set(computedStyles("class", value))].join(" ").trim() : key === "style" ? computedStyles("style", value).join(";").trim() : value;
            (element.$attrs = element.$attrs || {}) && (element.$attrs[key] = value);
            element.setAttribute(key, value);
          }
        }
      });
    }
  }
  static isFocusableElement(element, selector = "") {
    return this.isElement(element) ? element.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector}`) : false;
  }
};

// node_modules/primeng/fesm2022/primeng-autofocus.mjs
var AutoFocus = class _AutoFocus extends BaseComponent {
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus = false;
  focused = false;
  platformId = inject(PLATFORM_ID);
  document = inject(DOCUMENT);
  host = inject(ElementRef);
  onAfterContentChecked() {
    if (this.autofocus === false) {
      this.host.nativeElement.removeAttribute("autofocus");
    } else {
      this.host.nativeElement.setAttribute("autofocus", true);
    }
    if (!this.focused) {
      this.autoFocus();
    }
  }
  onAfterViewChecked() {
    if (!this.focused) {
      this.autoFocus();
    }
  }
  autoFocus() {
    if (isPlatformBrowser(this.platformId) && this.autofocus) {
      setTimeout(() => {
        const focusableElements = DomHandler.getFocusableElements(this.host?.nativeElement);
        if (focusableElements.length === 0) {
          this.host.nativeElement.focus();
        }
        if (focusableElements.length > 0) {
          focusableElements[0].focus();
        }
        this.focused = true;
      });
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AutoFocus_BaseFactory;
    return function AutoFocus_Factory(__ngFactoryType__) {
      return (\u0275AutoFocus_BaseFactory || (\u0275AutoFocus_BaseFactory = \u0275\u0275getInheritedFactory(_AutoFocus)))(__ngFactoryType__ || _AutoFocus);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AutoFocus,
    selectors: [["", "pAutoFocus", ""]],
    inputs: {
      autofocus: [0, "pAutoFocus", "autofocus"]
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoFocus, [{
    type: Directive,
    args: [{
      selector: "[pAutoFocus]",
      standalone: true
    }]
  }], null, {
    autofocus: [{
      type: Input,
      args: ["pAutoFocus"]
    }]
  });
})();
var AutoFocusModule = class _AutoFocusModule {
  static \u0275fac = function AutoFocusModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AutoFocusModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _AutoFocusModule,
    imports: [AutoFocus],
    exports: [AutoFocus]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoFocusModule, [{
    type: NgModule,
    args: [{
      imports: [AutoFocus],
      exports: [AutoFocus]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-basemodelholder.mjs
var BaseModelHolder = class _BaseModelHolder extends BaseComponent {
  modelValue = signal(void 0, ...ngDevMode ? [{
    debugName: "modelValue"
  }] : []);
  $filled = computed(() => s(this.modelValue()), ...ngDevMode ? [{
    debugName: "$filled"
  }] : []);
  writeModelValue(value) {
    this.modelValue.set(value);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BaseModelHolder_BaseFactory;
    return function BaseModelHolder_Factory(__ngFactoryType__) {
      return (\u0275BaseModelHolder_BaseFactory || (\u0275BaseModelHolder_BaseFactory = \u0275\u0275getInheritedFactory(_BaseModelHolder)))(__ngFactoryType__ || _BaseModelHolder);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BaseModelHolder,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseModelHolder, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-baseeditableholder.mjs
var BaseEditableHolder = class _BaseEditableHolder extends BaseModelHolder {
  /**
   * There must be a value (if set).
   * @defaultValue false
   * @group Props
   */
  required = input(void 0, ...ngDevMode ? [{
    debugName: "required",
    transform: booleanAttribute
  }] : [{
    transform: booleanAttribute
  }]);
  /**
   * When present, it specifies that the component should have invalid state style.
   * @defaultValue false
   * @group Props
   */
  invalid = input(void 0, ...ngDevMode ? [{
    debugName: "invalid",
    transform: booleanAttribute
  }] : [{
    transform: booleanAttribute
  }]);
  /**
   * When present, it specifies that the component should have disabled state style.
   * @defaultValue false
   * @group Props
   */
  disabled = input(void 0, ...ngDevMode ? [{
    debugName: "disabled",
    transform: booleanAttribute
  }] : [{
    transform: booleanAttribute
  }]);
  /**
   * When present, it specifies that the name of the input.
   * @defaultValue undefined
   * @group Props
   */
  name = input(...ngDevMode ? [void 0, {
    debugName: "name"
  }] : []);
  _disabled = signal(false, ...ngDevMode ? [{
    debugName: "_disabled"
  }] : []);
  $disabled = computed(() => this.disabled() || this._disabled(), ...ngDevMode ? [{
    debugName: "$disabled"
  }] : []);
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  writeDisabledState(value) {
    this._disabled.set(value);
  }
  writeControlValue(value, setModelValue) {
  }
  /**** Angular ControlValueAccessors ****/
  writeValue(value) {
    this.writeControlValue(value, this.writeModelValue.bind(this));
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.writeDisabledState(val);
    this.cd.markForCheck();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BaseEditableHolder_BaseFactory;
    return function BaseEditableHolder_Factory(__ngFactoryType__) {
      return (\u0275BaseEditableHolder_BaseFactory || (\u0275BaseEditableHolder_BaseFactory = \u0275\u0275getInheritedFactory(_BaseEditableHolder)))(__ngFactoryType__ || _BaseEditableHolder);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BaseEditableHolder,
    inputs: {
      required: [1, "required"],
      invalid: [1, "invalid"],
      disabled: [1, "disabled"],
      name: [1, "name"]
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseEditableHolder, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-bind.mjs
var Bind = class _Bind {
  el;
  renderer;
  /**
   * Dynamic attributes, properties, and event listeners to be applied to the host element.
   * @group Props
   */
  pBind = input(void 0, ...ngDevMode ? [{
    debugName: "pBind"
  }] : []);
  _attrs = signal(void 0, ...ngDevMode ? [{
    debugName: "_attrs"
  }] : []);
  attrs = computed(() => this._attrs() || this.pBind(), ...ngDevMode ? [{
    debugName: "attrs"
  }] : []);
  styles = computed(() => this.attrs()?.style, ...ngDevMode ? [{
    debugName: "styles"
  }] : []);
  classes = computed(() => f(this.attrs()?.class), ...ngDevMode ? [{
    debugName: "classes"
  }] : []);
  listeners = [];
  constructor(el, renderer) {
    this.el = el;
    this.renderer = renderer;
    effect(() => {
      const _a = this.attrs() || {}, {
        style: style5,
        class: className
      } = _a, rest = __objRest(_a, [
        "style",
        "class"
      ]);
      for (const [key, value] of Object.entries(rest)) {
        if (key.startsWith("on") && typeof value === "function") {
          const eventName = key.slice(2).toLowerCase();
          if (!this.listeners.some((l3) => l3.eventName === eventName)) {
            const unlisten = this.renderer.listen(this.el.nativeElement, eventName, value);
            this.listeners.push({
              eventName,
              unlisten
            });
          }
        } else if (value === null || value === void 0) {
          this.renderer.removeAttribute(this.el.nativeElement, key);
        } else {
          this.renderer.setAttribute(this.el.nativeElement, key, value.toString());
          if (key in this.el.nativeElement) {
            this.el.nativeElement[key] = value;
          }
        }
      }
    });
  }
  ngOnDestroy() {
    this.clearListeners();
  }
  setAttrs(attrs) {
    if (!k(this._attrs(), attrs)) {
      this._attrs.set(attrs);
    }
  }
  clearListeners() {
    this.listeners.forEach(({
      unlisten
    }) => unlisten());
    this.listeners = [];
  }
  static \u0275fac = function Bind_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Bind)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _Bind,
    selectors: [["", "pBind", ""]],
    hostVars: 4,
    hostBindings: function Bind_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.styles());
        \u0275\u0275classMap(ctx.classes());
      }
    },
    inputs: {
      pBind: [1, "pBind"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Bind, [{
    type: Directive,
    args: [{
      selector: "[pBind]",
      standalone: true,
      host: {
        "[style]": "styles()",
        "[class]": "classes()"
      }
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], null);
})();
var BindModule = class _BindModule {
  static \u0275fac = function BindModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BindModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BindModule,
    imports: [Bind],
    exports: [Bind]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BindModule, [{
    type: NgModule,
    args: [{
      imports: [Bind],
      exports: [Bind]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-fluid.mjs
var _c0 = ["*"];
var classes = {
  root: "p-fluid"
};
var FluidStyle = class _FluidStyle extends BaseStyle {
  name = "fluid";
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FluidStyle_BaseFactory;
    return function FluidStyle_Factory(__ngFactoryType__) {
      return (\u0275FluidStyle_BaseFactory || (\u0275FluidStyle_BaseFactory = \u0275\u0275getInheritedFactory(_FluidStyle)))(__ngFactoryType__ || _FluidStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _FluidStyle,
    factory: _FluidStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FluidStyle, [{
    type: Injectable
  }], null, null);
})();
var FluidClasses;
(function(FluidClasses2) {
  FluidClasses2["root"] = "p-fluid";
})(FluidClasses || (FluidClasses = {}));
var FLUID_INSTANCE = new InjectionToken("FLUID_INSTANCE");
var Fluid = class _Fluid extends BaseComponent {
  $pcFluid = inject(FLUID_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  _componentStyle = inject(FluidStyle);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Fluid_BaseFactory;
    return function Fluid_Factory(__ngFactoryType__) {
      return (\u0275Fluid_BaseFactory || (\u0275Fluid_BaseFactory = \u0275\u0275getInheritedFactory(_Fluid)))(__ngFactoryType__ || _Fluid);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Fluid,
    selectors: [["p-fluid"]],
    hostVars: 2,
    hostBindings: function Fluid_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    features: [\u0275\u0275ProvidersFeature([FluidStyle, {
      provide: FLUID_INSTANCE,
      useExisting: _Fluid
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Fluid
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function Fluid_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Fluid, [{
    type: Component,
    args: [{
      selector: "p-fluid",
      template: ` <ng-content></ng-content> `,
      standalone: true,
      imports: [CommonModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [FluidStyle, {
        provide: FLUID_INSTANCE,
        useExisting: Fluid
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Fluid
      }],
      host: {
        "[class]": "cx('root')"
      },
      hostDirectives: [Bind]
    }]
  }], null, null);
})();
var FluidModule = class _FluidModule {
  static \u0275fac = function FluidModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FluidModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _FluidModule,
    imports: [Fluid],
    exports: [Fluid]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Fluid]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FluidModule, [{
    type: NgModule,
    args: [{
      imports: [Fluid],
      exports: [Fluid]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/inputtext/index.mjs
var style2 = "\n    .p-inputtext {\n        font-family: inherit;\n        font-feature-settings: inherit;\n        font-size: 1rem;\n        color: dt('inputtext.color');\n        background: dt('inputtext.background');\n        padding-block: dt('inputtext.padding.y');\n        padding-inline: dt('inputtext.padding.x');\n        border: 1px solid dt('inputtext.border.color');\n        transition:\n            background dt('inputtext.transition.duration'),\n            color dt('inputtext.transition.duration'),\n            border-color dt('inputtext.transition.duration'),\n            outline-color dt('inputtext.transition.duration'),\n            box-shadow dt('inputtext.transition.duration');\n        appearance: none;\n        border-radius: dt('inputtext.border.radius');\n        outline-color: transparent;\n        box-shadow: dt('inputtext.shadow');\n    }\n\n    .p-inputtext:enabled:hover {\n        border-color: dt('inputtext.hover.border.color');\n    }\n\n    .p-inputtext:enabled:focus {\n        border-color: dt('inputtext.focus.border.color');\n        box-shadow: dt('inputtext.focus.ring.shadow');\n        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');\n        outline-offset: dt('inputtext.focus.ring.offset');\n    }\n\n    .p-inputtext.p-invalid {\n        border-color: dt('inputtext.invalid.border.color');\n    }\n\n    .p-inputtext.p-variant-filled {\n        background: dt('inputtext.filled.background');\n    }\n\n    .p-inputtext.p-variant-filled:enabled:hover {\n        background: dt('inputtext.filled.hover.background');\n    }\n\n    .p-inputtext.p-variant-filled:enabled:focus {\n        background: dt('inputtext.filled.focus.background');\n    }\n\n    .p-inputtext:disabled {\n        opacity: 1;\n        background: dt('inputtext.disabled.background');\n        color: dt('inputtext.disabled.color');\n    }\n\n    .p-inputtext::placeholder {\n        color: dt('inputtext.placeholder.color');\n    }\n\n    .p-inputtext.p-invalid::placeholder {\n        color: dt('inputtext.invalid.placeholder.color');\n    }\n\n    .p-inputtext-sm {\n        font-size: dt('inputtext.sm.font.size');\n        padding-block: dt('inputtext.sm.padding.y');\n        padding-inline: dt('inputtext.sm.padding.x');\n    }\n\n    .p-inputtext-lg {\n        font-size: dt('inputtext.lg.font.size');\n        padding-block: dt('inputtext.lg.padding.y');\n        padding-inline: dt('inputtext.lg.padding.x');\n    }\n\n    .p-inputtext-fluid {\n        width: 100%;\n    }\n";

// node_modules/primeng/fesm2022/primeng-inputtext.mjs
var style3 = (
  /*css*/
  `
    ${style2}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`
);
var classes2 = {
  root: ({
    instance
  }) => ["p-inputtext p-component", {
    "p-filled": instance.$filled(),
    "p-inputtext-sm": instance.pSize === "small",
    "p-inputtext-lg": instance.pSize === "large",
    "p-invalid": instance.invalid(),
    "p-variant-filled": instance.$variant() === "filled",
    "p-inputtext-fluid": instance.hasFluid
  }]
};
var InputTextStyle = class _InputTextStyle extends BaseStyle {
  name = "inputtext";
  style = style3;
  classes = classes2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InputTextStyle_BaseFactory;
    return function InputTextStyle_Factory(__ngFactoryType__) {
      return (\u0275InputTextStyle_BaseFactory || (\u0275InputTextStyle_BaseFactory = \u0275\u0275getInheritedFactory(_InputTextStyle)))(__ngFactoryType__ || _InputTextStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InputTextStyle,
    factory: _InputTextStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputTextStyle, [{
    type: Injectable
  }], null, null);
})();
var InputTextClasses;
(function(InputTextClasses2) {
  InputTextClasses2["root"] = "p-inputtext";
})(InputTextClasses || (InputTextClasses = {}));
var INPUTTEXT_INSTANCE = new InjectionToken("INPUTTEXT_INSTANCE");
var InputText = class _InputText extends BaseModelHolder {
  hostName = "";
  ptInputText = input(...ngDevMode ? [void 0, {
    debugName: "ptInputText"
  }] : []);
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  $pcInputText = inject(INPUTTEXT_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  ngControl = inject(NgControl, {
    optional: true,
    self: true
  });
  pcFluid = inject(Fluid, {
    optional: true,
    host: true,
    skipSelf: true
  });
  /**
   * Defines the size of the component.
   * @group Props
   */
  pSize;
  /**
   * Specifies the input variant of the component.
   * @defaultValue undefined
   * @group Props
   */
  variant = input(...ngDevMode ? [void 0, {
    debugName: "variant"
  }] : []);
  /**
   * Spans 100% width of the container when enabled.
   * @defaultValue undefined
   * @group Props
   */
  fluid = input(void 0, ...ngDevMode ? [{
    debugName: "fluid",
    transform: booleanAttribute
  }] : [{
    transform: booleanAttribute
  }]);
  /**
   * When present, it specifies that the component should have invalid state style.
   * @defaultValue false
   * @group Props
   */
  invalid = input(void 0, ...ngDevMode ? [{
    debugName: "invalid",
    transform: booleanAttribute
  }] : [{
    transform: booleanAttribute
  }]);
  $variant = computed(() => this.variant() || this.config.inputStyle() || this.config.inputVariant(), ...ngDevMode ? [{
    debugName: "$variant"
  }] : []);
  _componentStyle = inject(InputTextStyle);
  constructor() {
    super();
    effect(() => {
      this.ptInputText() && this.directivePT.set(this.ptInputText());
    });
  }
  onAfterViewInit() {
    this.writeModelValue(this.ngControl?.value ?? this.el.nativeElement.value);
    this.cd.detectChanges();
  }
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("root"));
  }
  onDoCheck() {
    this.writeModelValue(this.ngControl?.value ?? this.el.nativeElement.value);
  }
  onInput() {
    this.writeModelValue(this.ngControl?.value ?? this.el.nativeElement.value);
  }
  get hasFluid() {
    return this.fluid() ?? !!this.pcFluid;
  }
  static \u0275fac = function InputText_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputText)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _InputText,
    selectors: [["", "pInputText", ""]],
    hostVars: 2,
    hostBindings: function InputText_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function InputText_input_HostBindingHandler($event) {
          return ctx.onInput($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      hostName: "hostName",
      ptInputText: [1, "ptInputText"],
      pSize: "pSize",
      variant: [1, "variant"],
      fluid: [1, "fluid"],
      invalid: [1, "invalid"]
    },
    features: [\u0275\u0275ProvidersFeature([InputTextStyle, {
      provide: INPUTTEXT_INSTANCE,
      useExisting: _InputText
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _InputText
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputText, [{
    type: Directive,
    args: [{
      selector: "[pInputText]",
      standalone: true,
      host: {
        "[class]": "cx('root')"
      },
      providers: [InputTextStyle, {
        provide: INPUTTEXT_INSTANCE,
        useExisting: InputText
      }, {
        provide: PARENT_INSTANCE,
        useExisting: InputText
      }],
      hostDirectives: [Bind]
    }]
  }], () => [], {
    hostName: [{
      type: Input
    }],
    pSize: [{
      type: Input,
      args: ["pSize"]
    }],
    onInput: [{
      type: HostListener,
      args: ["input", ["$event"]]
    }]
  });
})();
var InputTextModule = class _InputTextModule {
  static \u0275fac = function InputTextModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputTextModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _InputTextModule,
    imports: [InputText],
    exports: [InputText]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputTextModule, [{
    type: NgModule,
    args: [{
      imports: [InputText],
      exports: [InputText]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/inputotp/index.mjs
var style4 = "\n    .p-inputotp {\n        display: flex;\n        align-items: center;\n        gap: dt('inputotp.gap');\n    }\n\n    .p-inputotp-input {\n        text-align: center;\n        width: dt('inputotp.input.width');\n    }\n\n    .p-inputotp-input.p-inputtext-sm {\n        text-align: center;\n        width: dt('inputotp.input.sm.width');\n    }\n\n    .p-inputotp-input.p-inputtext-lg {\n        text-align: center;\n        width: dt('inputotp.input.lg.width');\n    }\n";

// node_modules/primeng/fesm2022/primeng-inputotp.mjs
var _c02 = ["input"];
var _c1 = (a0, a1, a2) => ({
  $implicit: a0,
  events: a1,
  index: a2
});
function InputOtp_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "input", 2);
    \u0275\u0275listener("input", function InputOtp_ng_container_0_ng_container_1_Template_input_input_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const i_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInput($event, i_r2 - 1));
    })("focus", function InputOtp_ng_container_0_ng_container_1_Template_input_focus_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onInputFocus($event));
    })("blur", function InputOtp_ng_container_0_ng_container_1_Template_input_blur_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onInputBlur($event));
    })("paste", function InputOtp_ng_container_0_ng_container_1_Template_input_paste_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onPaste($event));
    })("keydown", function InputOtp_ng_container_0_ng_container_1_Template_input_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onKeyDown($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const i_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.cn(ctx_r2.cx("pcInputText"), ctx_r2.styleClass));
    \u0275\u0275property("value", ctx_r2.getModelValue(i_r2))("pSize", ctx_r2.size())("variant", ctx_r2.$variant())("invalid", ctx_r2.invalid())("pAutoFocus", ctx_r2.getAutofocus(i_r2))("pt", ctx_r2.ptm("pcInputText"));
    \u0275\u0275attribute("maxlength", i_r2 === 1 ? ctx_r2.length : 1)("type", ctx_r2.inputType)("name", ctx_r2.name())("tabindex", ctx_r2.tabindex)("required", ctx_r2.required() ? "" : void 0)("readonly", ctx_r2.readonly ? "" : void 0)("disabled", ctx_r2.$disabled() ? "" : void 0);
  }
}
function InputOtp_ng_container_0_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function InputOtp_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, InputOtp_ng_container_0_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const i_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.inputTemplate || ctx_r2._inputTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction3(2, _c1, ctx_r2.getToken(i_r2 - 1), ctx_r2.getTemplateEvents(i_r2 - 1), i_r2));
  }
}
function InputOtp_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, InputOtp_ng_container_0_ng_container_1_Template, 2, 15, "ng-container", 1)(2, InputOtp_ng_container_0_ng_container_2_Template, 2, 6, "ng-container", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.inputTemplate && !ctx_r2._inputTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.inputTemplate || ctx_r2._inputTemplate);
  }
}
var classes3 = {
  root: "p-inputotp p-component",
  pcInputText: "p-inputotp-input"
};
var InputOtpStyle = class _InputOtpStyle extends BaseStyle {
  name = "inputotp";
  style = style4;
  classes = classes3;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InputOtpStyle_BaseFactory;
    return function InputOtpStyle_Factory(__ngFactoryType__) {
      return (\u0275InputOtpStyle_BaseFactory || (\u0275InputOtpStyle_BaseFactory = \u0275\u0275getInheritedFactory(_InputOtpStyle)))(__ngFactoryType__ || _InputOtpStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InputOtpStyle,
    factory: _InputOtpStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputOtpStyle, [{
    type: Injectable
  }], null, null);
})();
var InputOtpClasses;
(function(InputOtpClasses2) {
  InputOtpClasses2["root"] = "p-inputotp";
  InputOtpClasses2["pcInputText"] = "p-inputotp-input";
})(InputOtpClasses || (InputOtpClasses = {}));
var INPUTOTP_INSTANCE = new InjectionToken("INPUTOTP_INSTANCE");
var INPUT_OTP_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputOtp),
  multi: true
};
var InputOtp = class _InputOtp extends BaseEditableHolder {
  _componentStyle = inject(InputOtpStyle);
  $pcInputOtp = inject(INPUTOTP_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * When present, it specifies that an input field is read-only.
   * @group Props
   */
  readonly;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = null;
  /**
   * Number of characters to initiate.
   * @group Props
   */
  length = 4;
  /**
   * Style class of the input element.
   * @group Props
   */
  styleClass;
  /**
   * Mask pattern.
   * @group Props
   */
  mask = false;
  /**
   * When present, it specifies that an input field is integer-only.
   * @group Props
   */
  integerOnly = false;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Specifies the input variant of the component.
   * @defaultValue undefined
   * @group Props
   */
  variant = input(...ngDevMode ? [void 0, {
    debugName: "variant"
  }] : []);
  /**
   * Specifies the size of the component.
   * @defaultValue undefined
   * @group Props
   */
  size = input(...ngDevMode ? [void 0, {
    debugName: "size"
  }] : []);
  /**
   * Callback to invoke on value change.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Callback to invoke when the component receives focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when the component loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Input template.
   * @param {InputOtpInputTemplateContext} context - Context of the template
   * @see {@link InputOtpInputTemplateContext}
   * @group Templates
   */
  inputTemplate;
  templates;
  _inputTemplate;
  tokens = [];
  value;
  $variant = computed(() => this.variant() || this.config.inputStyle() || this.config.inputVariant(), ...ngDevMode ? [{
    debugName: "$variant"
  }] : []);
  get inputMode() {
    return this.integerOnly ? "numeric" : "text";
  }
  get inputType() {
    return this.mask ? "password" : "text";
  }
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "input":
          this._inputTemplate = item.template;
          break;
        default:
          this._inputTemplate = item.template;
          break;
      }
    });
  }
  getToken(index) {
    return this.tokens[index];
  }
  getTemplateEvents(index) {
    return {
      input: (event) => this.onInput(event, index),
      keydown: (event) => this.onKeyDown(event),
      focus: (event) => this.onFocus.emit(event),
      blur: (event) => this.onBlur.emit(event),
      paste: (event) => this.onPaste(event)
    };
  }
  onInput(event, index) {
    const value = event.target.value;
    if (index === 0 && value.length > 1) {
      this.handleOnPaste(value, event);
      event.stopPropagation();
      return;
    }
    this.tokens[index] = value;
    this.updateModel(event);
    if (event.inputType === "deleteContentBackward") {
      this.moveToPrev(event);
    } else if (event.inputType === "insertText" || event.inputType === "deleteContentForward") {
      this.moveToNext(event);
    }
  }
  updateModel(event) {
    const newValue = this.tokens.join("");
    this.writeModelValue(newValue);
    this.onModelChange(newValue);
    this.onChange.emit({
      originalEvent: event,
      value: newValue
    });
  }
  updateTokens() {
    if (this.value !== null && this.value !== void 0) {
      if (Array.isArray(this.value)) {
        this.tokens = [...this.value];
      } else {
        this.tokens = this.value.toString().split("");
      }
    } else {
      this.tokens = [];
    }
  }
  getModelValue(i3) {
    return this.tokens[i3 - 1] || "";
  }
  getAutofocus(i3) {
    if (i3 === 1) {
      return this.autofocus || false;
    }
    return false;
  }
  moveToPrev(event) {
    let prevInput = this.findPrevInput(event.target);
    if (prevInput) {
      prevInput.focus();
      prevInput.select();
    }
  }
  moveToNext(event) {
    let nextInput = this.findNextInput(event.target);
    if (nextInput) {
      nextInput.focus();
      nextInput.select();
    }
  }
  findNextInput(element) {
    let nextElement = element.nextElementSibling;
    if (!nextElement) return;
    return nextElement.nodeName === "INPUT" ? nextElement : this.findNextInput(nextElement);
  }
  findPrevInput(element) {
    let prevElement = element.previousElementSibling;
    if (!prevElement) return;
    return prevElement.nodeName === "INPUT" ? prevElement : this.findPrevInput(prevElement);
  }
  onInputFocus(event) {
    event.target.select();
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.onBlur.emit(event);
  }
  onKeyDown(event) {
    if (event.altKey || event.ctrlKey || event.metaKey) {
      return;
    }
    switch (event.code) {
      case "ArrowLeft":
        this.moveToPrev(event);
        event.preventDefault();
        break;
      case "ArrowUp":
      case "ArrowDown":
        event.preventDefault();
        break;
      case "Backspace":
        if (event.target.value.length === 0) {
          this.moveToPrev(event);
          event.preventDefault();
        }
        break;
      case "ArrowRight":
        this.moveToNext(event);
        event.preventDefault();
        break;
      default:
        if (this.integerOnly && !(Number(event.key) >= 0 && Number(event.key) <= 9) || this.tokens.join("").length >= this.length && event.code !== "Delete") {
          event.preventDefault();
        }
        break;
    }
  }
  onPaste(event) {
    if (!this.$disabled() && !this.readonly) {
      let paste = event.clipboardData.getData("text");
      if (paste.length) {
        this.handleOnPaste(paste, event);
      }
      event.preventDefault();
    }
  }
  handleOnPaste(paste, event) {
    let pastedCode = paste.substring(0, this.length + 1);
    if (!this.integerOnly || !isNaN(pastedCode)) {
      this.tokens = pastedCode.split("");
      this.updateModel(event);
    }
  }
  getRange(n2) {
    return Array.from({
      length: n2
    }, (_, index) => index + 1);
  }
  trackByFn(index) {
    return index;
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value, setModelValue) {
    if (value) {
      if (Array.isArray(value) && value.length > 0) {
        this.value = value.slice(0, this.length);
      } else {
        this.value = value.toString().split("").slice(0, this.length);
      }
    } else {
      this.value = value;
    }
    setModelValue(this.value);
    this.updateTokens();
    this.cd.markForCheck();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InputOtp_BaseFactory;
    return function InputOtp_Factory(__ngFactoryType__) {
      return (\u0275InputOtp_BaseFactory || (\u0275InputOtp_BaseFactory = \u0275\u0275getInheritedFactory(_InputOtp)))(__ngFactoryType__ || _InputOtp);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _InputOtp,
    selectors: [["p-inputOtp"], ["p-inputotp"], ["p-input-otp"]],
    contentQueries: function InputOtp_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c02, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t2;
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.inputTemplate = _t2.first);
        \u0275\u0275queryRefresh(_t2 = \u0275\u0275loadQuery()) && (ctx.templates = _t2);
      }
    },
    hostVars: 2,
    hostBindings: function InputOtp_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      readonly: [2, "readonly", "readonly", booleanAttribute],
      tabindex: "tabindex",
      length: "length",
      styleClass: "styleClass",
      mask: "mask",
      integerOnly: "integerOnly",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      variant: [1, "variant"],
      size: [1, "size"]
    },
    outputs: {
      onChange: "onChange",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    features: [\u0275\u0275ProvidersFeature([INPUT_OTP_VALUE_ACCESSOR, InputOtpStyle, {
      provide: INPUTOTP_INSTANCE,
      useExisting: _InputOtp
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _InputOtp
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 2,
    consts: [[4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], ["type", "text", "pInputText", "", 3, "input", "focus", "blur", "paste", "keydown", "value", "pSize", "variant", "invalid", "pAutoFocus", "pt"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function InputOtp_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, InputOtp_ng_container_0_Template, 3, 2, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngForOf", ctx.getRange(ctx.length))("ngForTrackBy", ctx.trackByFn);
      }
    },
    dependencies: [CommonModule, NgForOf, NgIf, NgTemplateOutlet, InputText, AutoFocus, SharedModule, BindModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputOtp, [{
    type: Component,
    args: [{
      selector: "p-inputOtp, p-inputotp, p-input-otp",
      standalone: true,
      imports: [CommonModule, InputText, AutoFocus, SharedModule, BindModule],
      template: `
        <ng-container *ngFor="let i of getRange(length); trackBy: trackByFn">
            <ng-container *ngIf="!inputTemplate && !_inputTemplate">
                <input
                    type="text"
                    pInputText
                    [value]="getModelValue(i)"
                    [attr.maxlength]="i === 1 ? length : 1"
                    [attr.type]="inputType"
                    [class]="cn(cx('pcInputText'), styleClass)"
                    [pSize]="size()"
                    [variant]="$variant()"
                    [invalid]="invalid()"
                    [attr.name]="name()"
                    [attr.tabindex]="tabindex"
                    [attr.required]="required() ? '' : undefined"
                    [attr.readonly]="readonly ? '' : undefined"
                    [attr.disabled]="$disabled() ? '' : undefined"
                    (input)="onInput($event, i - 1)"
                    (focus)="onInputFocus($event)"
                    (blur)="onInputBlur($event)"
                    (paste)="onPaste($event)"
                    (keydown)="onKeyDown($event)"
                    [pAutoFocus]="getAutofocus(i)"
                    [pt]="ptm('pcInputText')"
                />
            </ng-container>
            <ng-container *ngIf="inputTemplate || _inputTemplate">
                <ng-container *ngTemplateOutlet="inputTemplate || _inputTemplate; context: { $implicit: getToken(i - 1), events: getTemplateEvents(i - 1), index: i }"> </ng-container>
            </ng-container>
        </ng-container>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [INPUT_OTP_VALUE_ACCESSOR, InputOtpStyle, {
        provide: INPUTOTP_INSTANCE,
        useExisting: InputOtp
      }, {
        provide: PARENT_INSTANCE,
        useExisting: InputOtp
      }],
      hostDirectives: [Bind],
      host: {
        "[class]": "cx('root')"
      }
    }]
  }], null, {
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabindex: [{
      type: Input
    }],
    length: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    mask: [{
      type: Input
    }],
    integerOnly: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onChange: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    inputTemplate: [{
      type: ContentChild,
      args: ["input", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var InputOtpModule = class _InputOtpModule {
  static \u0275fac = function InputOtpModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputOtpModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _InputOtpModule,
    imports: [InputOtp, SharedModule],
    exports: [InputOtp, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [InputOtp, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputOtpModule, [{
    type: NgModule,
    args: [{
      imports: [InputOtp, SharedModule],
      exports: [InputOtp, SharedModule]
    }]
  }], null, null);
})();

// src/app/auth/otp/otp.component.ts
function OtpComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 38)(2, "div", 39);
    \u0275\u0275element(3, "img", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 41)(5, "h3", 42);
    \u0275\u0275text(6);
    \u0275\u0275element(7, "br");
    \u0275\u0275text(8);
    \u0275\u0275elementStart(9, "span", 43);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const slide_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", slide_r1.img, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", slide_r1.content1, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slide_r1.content2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slide_r1.content3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", slide_r1.content4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slide_r1.paragraph);
  }
}
function OtpComponent_span_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Verify & Proceed");
    \u0275\u0275element(2, "i", 44);
    \u0275\u0275elementEnd();
  }
}
function OtpComponent_span_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Loading...");
    \u0275\u0275elementEnd();
  }
}
function OtpComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function OtpComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.successMessage, " ");
  }
}
var OtpComponent = class _OtpComponent {
  DataService;
  authService;
  router;
  routes = routes;
  otpCode = "";
  newPassword = "";
  email = "";
  welcomeLogin = [];
  password = false;
  isLoading = false;
  errorMessage = "";
  successMessage = "";
  togglePassword() {
    this.password = !this.password;
  }
  // Masquer l'email pour la sécurité
  maskEmail() {
    if (!this.email)
      return "";
    const parts = this.email.split("@");
    if (parts.length !== 2)
      return this.email;
    const username = parts[0];
    const domain = parts[1];
    const maskedUsername = username.substring(0, 2) + "***" + username.substring(username.length - 2);
    return maskedUsername + "@" + domain;
  }
  authSlider = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
  constructor(DataService2, authService, router) {
    this.DataService = DataService2;
    this.authService = authService;
    this.router = router;
    this.welcomeLogin = this.DataService.welcomeLogin;
  }
  ngOnInit() {
    this.email = this.authService.getResetEmail();
    if (!this.email) {
      this.router.navigate([routes.forgot_password]);
    }
  }
  // Méthode appelée lors de la soumission du formulaire
  submitVerifyOtp() {
    this.errorMessage = "";
    this.successMessage = "";
    if (!this.otpCode || !this.otpCode.trim()) {
      this.errorMessage = "Veuillez entrer le code OTP";
      return;
    }
    if (this.otpCode.length !== 6 || !/^\d+$/.test(this.otpCode)) {
      this.errorMessage = "Le code OTP doit contenir exactement 6 chiffres";
      return;
    }
    if (!this.newPassword || !this.newPassword.trim()) {
      this.errorMessage = "Veuillez entrer un nouveau mot de passe";
      return;
    }
    if (this.newPassword.length < 6) {
      this.errorMessage = "Le mot de passe doit faire au moins 6 caract\xE8res";
      return;
    }
    this.isLoading = true;
    const payload = {
      email: this.email,
      otpCode: this.otpCode,
      newPassword: this.newPassword
    };
    this.authService.verifyOtp(payload).subscribe({
      next: (response) => {
        console.log("\u2705 [SUCCESS] R\xE9ponse brute:", response);
        console.log("\u2705 [SUCCESS] Type:", typeof response);
        this.isLoading = false;
        let message = "";
        if (response && typeof response === "object" && response.message) {
          message = response.message;
          console.log('\u2705 Format d\xE9tect\xE9: JSON avec "message"');
        } else if (typeof response === "string" && response.trim()) {
          message = response;
          console.log("\u2705 Format d\xE9tect\xE9: Texte brut");
        } else if (response && typeof response === "object") {
          message = JSON.stringify(response);
          console.log("\u2705 Format d\xE9tect\xE9: Objet JSON (converti)");
        } else {
          message = "Mot de passe r\xE9initialis\xE9 avec succ\xE8s!";
          console.log("\u2705 Format d\xE9tect\xE9: Vide (fallback)");
        }
        console.log("\u2705 Message final:", message);
        this.successMessage = message;
        setTimeout(() => {
          this.router.navigate([routes.login]);
        }, 1500);
      },
      error: (error) => {
        console.error("\u274C [ERROR FULL]:", error);
        console.error("\u274C Status:", error.status);
        console.error("\u274C Error:", error.error);
        console.error("\u274C Message:", error.message);
        this.isLoading = false;
        let errorMsg = "Une erreur est survenue. Veuillez r\xE9essayer.";
        if (error.error && typeof error.error === "string") {
          errorMsg = error.error;
        } else if (error.error && error.error.message) {
          errorMsg = error.error.message;
        } else if (error.message) {
          errorMsg = error.message;
        }
        this.errorMessage = errorMsg;
      }
    });
  }
  directIndex() {
    this.router.navigate([routes.instructor_dashboard]);
  }
  static \u0275fac = function OtpComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OtpComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OtpComponent, selectors: [["app-otp"]], decls: 50, vars: 15, consts: [[1, "main-wrapper"], [1, "login-content"], [1, "row"], [1, "col-md-6", "login-bg", "d-none", "d-lg-flex"], [1, "login-carousel"], [3, "config"], ["ngxSlickItem", ""], [1, "col-md-6", "login-wrap-bg"], [1, "login-wrapper"], [1, "loginbox"], [1, "w-100"], [1, "d-flex", "align-items-center", "justify-content-between", "login-header"], ["src", "assets/img/logo.svg", "alt", "Logo", 1, "img-fluid"], [1, "link-1", 3, "routerLink"], [1, "topic"], [1, "fs-32", "fw-bold", "mb-3"], [1, "fs-14", "fw-normal", "mb-0"], [1, "mb-3", "pb-3", 3, "ngSubmit"], [1, "d-flex", "align-items-center", "justify-content-center", "mb-3"], ["name", "otpCode", "required", "", 3, "ngModelChange", "ngModel", "length", "integerOnly"], [1, "mb-3", "position-relative"], [1, "form-label"], [1, "text-danger", "ms-1"], [1, "position-relative"], ["name", "newPassword", "required", "", 1, "form-control", "form-control-lg", 3, "ngModelChange", "type", "ngModel"], [2, "cursor", "pointer", 3, "click"], [1, "timer-cover", "d-flex", "align-items-center", "justify-content-center"], [1, "badge", "badge-soft-danger", "rounded-pill", "d-flex", "align-items-center"], [1, "isax", "isax-clock", "me-1"], ["id", "otp_timer"], [1, "ms-1"], [1, "d-grid"], ["type", "submit", 1, "btn", "btn-secondary", "btn-lg", 3, "disabled"], [4, "ngIf"], ["class", "alert alert-danger mt-3", "role", "alert", 4, "ngIf"], ["class", "alert alert-success mt-3", "role", "alert", 4, "ngIf"], [1, "fs-14", "fw-normal", "d-flex", "align-items-center", "justify-content-center"], ["href", "javascript:void(0);", 1, "link-2", "ms-1"], [1, "login-carousel-section", "mb-3"], [1, "login-banner"], ["alt", "Logo", 1, "img-fluid", 3, "src"], [1, "mentor-course", "text-center"], [1, "mb-2"], [1, "text-secondary"], [1, "isax", "isax-arrow-right-3", "ms-1"], ["role", "alert", 1, "alert", "alert-danger", "mt-3"], ["role", "alert", 1, "alert", "alert-success", "mt-3"]], template: function OtpComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "ngx-slick-carousel", 5);
      \u0275\u0275repeaterCreate(6, OtpComponent_For_7_Template, 14, 6, "div", 6, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 11);
      \u0275\u0275element(13, "img", 12);
      \u0275\u0275elementStart(14, "a", 13);
      \u0275\u0275text(15, "Back to Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 14)(17, "h1", 15);
      \u0275\u0275text(18, "Email OTP");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p", 16);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "form", 17);
      \u0275\u0275listener("ngSubmit", function OtpComponent_Template_form_ngSubmit_21_listener() {
        return ctx.submitVerifyOtp();
      });
      \u0275\u0275elementStart(22, "div", 18)(23, "p-inputotp", 19);
      \u0275\u0275twoWayListener("ngModelChange", function OtpComponent_Template_p_inputotp_ngModelChange_23_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.otpCode, $event) || (ctx.otpCode = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 20)(25, "label", 21);
      \u0275\u0275text(26, "New Password");
      \u0275\u0275elementStart(27, "span", 22);
      \u0275\u0275text(28, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 23)(30, "input", 24);
      \u0275\u0275twoWayListener("ngModelChange", function OtpComponent_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.newPassword, $event) || (ctx.newPassword = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "span", 25);
      \u0275\u0275listener("click", function OtpComponent_Template_span_click_31_listener() {
        return ctx.togglePassword();
      });
      \u0275\u0275element(32, "i");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "div", 26)(34, "div", 27);
      \u0275\u0275element(35, "i", 28);
      \u0275\u0275elementStart(36, "span", 29);
      \u0275\u0275text(37, "09:59");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "span", 30);
      \u0275\u0275text(39, "s");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "div", 31)(41, "button", 32);
      \u0275\u0275template(42, OtpComponent_span_42_Template, 3, 0, "span", 33)(43, OtpComponent_span_43_Template, 2, 0, "span", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(44, OtpComponent_div_44_Template, 2, 1, "div", 34)(45, OtpComponent_div_45_Template, 2, 1, "div", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 36);
      \u0275\u0275text(47, " Didn\u2019t get the OTP?");
      \u0275\u0275elementStart(48, "a", 37);
      \u0275\u0275text(49, " Resend OTP");
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("config", ctx.authSlider);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.welcomeLogin);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.home);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("OTP sent to your Email Address ending ", ctx.maskEmail());
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.otpCode);
      \u0275\u0275property("length", 6)("integerOnly", true);
      \u0275\u0275advance(7);
      \u0275\u0275property("type", ctx.password ? "text" : "password");
      \u0275\u0275twoWayProperty("ngModel", ctx.newPassword);
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.password ? "isax isax-eye input-icon text-gray-7 fs-14" : "isax isax-eye-slash input-icon text-gray-7 fs-14");
      \u0275\u0275advance(9);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterLink, InputOtpModule, InputOtp, SlickCarouselModule, SlickCarouselComponent, SlickItemDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OtpComponent, [{
    type: Component,
    args: [{ selector: "app-otp", imports: [CommonModule, FormsModule, RouterLink, InputOtpModule, SlickCarouselModule], template: `<div class="main-wrapper">
    <div class="login-content">
        <div class="row">
            <!-- Login Banner -->
            <div class="col-md-6 login-bg d-none d-lg-flex">
                <div class="login-carousel">
                  <ngx-slick-carousel [config]="authSlider">
                    @for (slide of welcomeLogin; track slide) {
                      <div ngxSlickItem>
                        <div class="login-carousel-section mb-3">
                            <div class="login-banner">
                                <img [src]="slide.img" class="img-fluid" alt="Logo">
                            </div>
                            <div class="mentor-course text-center">
                                <h3 class="mb-2">{{slide.content1}} <br>{{slide.content2}}<span class="text-secondary">{{slide.content3}}</span> {{slide.content4}}</h3>
                                <p>{{slide.paragraph}}</p>
                            </div>
                        </div>
                    </div>
                    }
                  </ngx-slick-carousel>
                    
                    
                </div>
            </div>
            <!-- /Login Banner -->

            <div class="col-md-6 login-wrap-bg">
                <!-- Login -->
                <div class="login-wrapper">
                    <div class="loginbox">
                        <div class="w-100">
                            <div class="d-flex align-items-center justify-content-between login-header">
                                <img src="assets/img/logo.svg" class="img-fluid" alt="Logo">
                                <a [routerLink]="routes.home" class="link-1">Back to Home</a>
                            </div>
                            <div class="topic">
                                <h1 class="fs-32 fw-bold mb-3">Email OTP</h1>
                                <p class="fs-14 fw-normal mb-0">OTP sent to your Email Address ending {{maskEmail()}}</p>
                            </div>
                            <form (ngSubmit)="submitVerifyOtp()" class="mb-3 pb-3">
                                <div class="d-flex align-items-center justify-content-center mb-3">
                                    <p-inputotp [(ngModel)]="otpCode" name="otpCode" [length]="6" [integerOnly]="true" required/>
                                </div>
                                <div class="mb-3 position-relative">
                                    <label class="form-label">New Password<span class="text-danger ms-1">*</span></label>
                                    <div class="position-relative">
                                        <input 
                                            [type]="password ? 'text' : 'password'" 
                                            class="form-control form-control-lg"
                                            [(ngModel)]="newPassword"
                                            name="newPassword"
                                            required>
                                        <span (click)="togglePassword()" style="cursor: pointer;">
                                            <i [class]="password ? 'isax isax-eye input-icon text-gray-7 fs-14' : 'isax isax-eye-slash input-icon text-gray-7 fs-14'"></i>
                                        </span>
                                    </div>
                                </div>
                                <div class="timer-cover d-flex align-items-center justify-content-center">
                                    <div class="badge badge-soft-danger rounded-pill d-flex align-items-center"><i class="isax isax-clock me-1"></i><span id="otp_timer">09:59</span> <span class="ms-1">s</span></div>
                                </div>
                                <div class="d-grid">
                                    <button class="btn btn-secondary btn-lg" type="submit" [disabled]="isLoading">
                                        <span *ngIf="!isLoading">Verify & Proceed<i class="isax isax-arrow-right-3 ms-1"></i></span>
                                        <span *ngIf="isLoading">Loading...</span>
                                    </button>
                                </div>
                                <div *ngIf="errorMessage" class="alert alert-danger mt-3" role="alert">
                                    {{ errorMessage }}
                                </div>
                                <div *ngIf="successMessage" class="alert alert-success mt-3" role="alert">
                                    {{ successMessage }}
                                </div>
                            </form>

                            <div class="fs-14 fw-normal d-flex align-items-center justify-content-center">
                                Didn\u2019t get the OTP?<a href="javascript:void(0);" class="link-2 ms-1"> Resend OTP</a>
                            </div>

                            <!-- /Login -->

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>` }]
  }], () => [{ type: DataService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OtpComponent, { className: "OtpComponent", filePath: "src/app/auth/otp/otp.component.ts", lineNumber: 19 });
})();
export {
  OtpComponent
};
//# sourceMappingURL=chunk-4DQZ5JS7.js.map
