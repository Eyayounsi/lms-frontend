import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-VDIDEWKD.js";
import {
  SuperAdminApiService
} from "./chunk-VHGRD3QT.js";
import "./chunk-MFSRU4HL.js";
import {
  routes
} from "./chunk-E6TQA5KL.js";
import {
  RouterLink
} from "./chunk-TPKO67I6.js";
import "./chunk-QFZWCWB7.js";
import "./chunk-PXFMCAI3.js";
import {
  CommonModule,
  DecimalPipe,
  KeyValuePipe
} from "./chunk-YBJXKBE2.js";
import {
  ChangeDetectorRef,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5DE2SIVI.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/features/admin/admin-dashboard/admin-dashboard.component.ts
var _c0 = () => [1, 2, 3, 4];
var _forTrack0 = ($index, $item) => $item.key;
function AdminDashboardComponent_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "div", 15);
    \u0275\u0275element(3, "div", 16)(4, "div", 17)(5, "div", 18);
    \u0275\u0275elementEnd()()();
  }
}
function AdminDashboardComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, AdminDashboardComponent_Conditional_15_For_2_Template, 6, 0, "div", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function AdminDashboardComponent_Conditional_16_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "apx-chart", 47);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("series", ctx_r1.donutSeries)("chart", ctx_r1.donutOptions.chart)("labels", ctx_r1.donutOptions.labels)("colors", ctx_r1.donutOptions.colors)("legend", ctx_r1.donutOptions.legend)("dataLabels", ctx_r1.donutOptions.dataLabels)("plotOptions", ctx_r1.donutOptions.plotOptions)("tooltip", ctx_r1.donutOptions.tooltip);
  }
}
function AdminDashboardComponent_Conditional_16_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "apx-chart", 50);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("series", ctx_r1.barSeries)("chart", ctx_r1.barOptions.chart)("plotOptions", ctx_r1.barOptions.plotOptions)("colors", ctx_r1.barOptions.colors)("dataLabels", ctx_r1.barOptions.dataLabels)("xaxis", ctx_r1.barOptions.xaxis)("yaxis", ctx_r1.barOptions.yaxis)("grid", ctx_r1.barOptions.grid)("legend", ctx_r1.barOptions.legend)("tooltip", ctx_r1.barOptions.tooltip);
  }
}
function AdminDashboardComponent_Conditional_16_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "apx-chart", 53);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("series", ctx_r1.lineSeries)("chart", ctx_r1.lineOptions.chart)("colors", ctx_r1.lineOptions.colors)("fill", ctx_r1.lineOptions.fill)("stroke", ctx_r1.lineOptions.stroke)("markers", ctx_r1.lineOptions.markers)("xaxis", ctx_r1.lineOptions.xaxis)("yaxis", ctx_r1.lineOptions.yaxis)("grid", ctx_r1.lineOptions.grid)("dataLabels", ctx_r1.lineOptions.dataLabels)("tooltip", ctx_r1.lineOptions.tooltip);
  }
}
function AdminDashboardComponent_Conditional_16_For_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "div", 64);
    \u0275\u0275element(2, "span", 65);
    \u0275\u0275elementStart(3, "small", 66);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 67);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r1.getRoleColor(entry_r3.key));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getRoleLabel(entry_r3.key));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.getRoleColor(entry_r3.key) + "20")("color", ctx_r1.getRoleColor(entry_r3.key));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(entry_r3.value);
  }
}
function AdminDashboardComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "div", 19)(3, "div", 15)(4, "div", 20)(5, "div", 21);
    \u0275\u0275element(6, "i", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 23);
    \u0275\u0275text(8, "Total");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "h2", 24);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 25);
    \u0275\u0275text(12, "Utilisateurs enregistr\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 26);
    \u0275\u0275element(14, "div", 27);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "div", 13)(16, "div", 19)(17, "div", 15)(18, "div", 20)(19, "div", 28);
    \u0275\u0275element(20, "i", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 30);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "h2", 31);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p", 25);
    \u0275\u0275text(27, "Comptes actifs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 26);
    \u0275\u0275element(29, "div", 32);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(30, "div", 13)(31, "div", 19)(32, "div", 15)(33, "div", 20)(34, "div", 33);
    \u0275\u0275element(35, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 35);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "h2", 36);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "p", 25);
    \u0275\u0275text(42, "Comptes bloqu\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 26);
    \u0275\u0275element(44, "div", 37);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(45, "div", 13)(46, "div", 19)(47, "div", 15)(48, "div", 20)(49, "div", 38);
    \u0275\u0275element(50, "i", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 40);
    \u0275\u0275text(52, "Ce mois");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "h2", 41);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "p", 25);
    \u0275\u0275text(56, "Nouvelles inscriptions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 26);
    \u0275\u0275element(58, "div", 42);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(59, "div", 12)(60, "div", 43)(61, "div", 14)(62, "div", 44)(63, "h6", 24);
    \u0275\u0275element(64, "i", 45);
    \u0275\u0275text(65, "Statut des Comptes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 46);
    \u0275\u0275conditionalCreate(67, AdminDashboardComponent_Conditional_16_Conditional_67_Template, 1, 8, "apx-chart", 47);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(68, "div", 48)(69, "div", 14)(70, "div", 44)(71, "h6", 24);
    \u0275\u0275element(72, "i", 49);
    \u0275\u0275text(73, "Utilisateurs par R\xF4le");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 46);
    \u0275\u0275conditionalCreate(75, AdminDashboardComponent_Conditional_16_Conditional_75_Template, 1, 10, "apx-chart", 50);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(76, "div", 51)(77, "div", 48)(78, "div", 14)(79, "div", 44)(80, "h6", 24);
    \u0275\u0275element(81, "i", 52);
    \u0275\u0275text(82, "Inscriptions (12 derniers mois)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "div", 46);
    \u0275\u0275conditionalCreate(84, AdminDashboardComponent_Conditional_16_Conditional_84_Template, 1, 11, "apx-chart", 53);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(85, "div", 43)(86, "div", 54)(87, "div", 44)(88, "h6", 24);
    \u0275\u0275element(89, "i", 55);
    \u0275\u0275text(90, "Actions Rapides");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "div", 15)(92, "a", 56)(93, "div", 21);
    \u0275\u0275element(94, "i", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "div", 7)(96, "p", 57);
    \u0275\u0275text(97, "G\xE9rer les Utilisateurs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "small", 58);
    \u0275\u0275text(99, "Bloquer, supprimer, modifier");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(100, "i", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "div", 60);
    \u0275\u0275listener("click", function AdminDashboardComponent_Conditional_16_Template_div_click_101_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadStats());
    });
    \u0275\u0275elementStart(102, "div", 28);
    \u0275\u0275element(103, "i", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "div", 7)(105, "p", 57);
    \u0275\u0275text(106, "Rafra\xEEchir les Donn\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "small", 58);
    \u0275\u0275text(108, "Recharger les statistiques");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(109, "i", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275element(110, "hr", 62);
    \u0275\u0275repeaterCreate(111, AdminDashboardComponent_Conditional_16_For_112_Template, 7, 8, "div", 63, _forTrack0);
    \u0275\u0275pipe(113, "keyvalue");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.stats.totalUsers);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", ctx_r1.stats.totalUsers > 0 ? \u0275\u0275pipeBind2(23, 14, ctx_r1.stats.activeUsers / ctx_r1.stats.totalUsers * 100, "1.0-0") : 0, "% ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.stats.activeUsers);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", (ctx_r1.stats.totalUsers > 0 ? ctx_r1.stats.activeUsers / ctx_r1.stats.totalUsers * 100 : 0) + "%");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.stats.totalUsers > 0 ? \u0275\u0275pipeBind2(38, 17, ctx_r1.stats.blockedUsers / ctx_r1.stats.totalUsers * 100, "1.0-0") : 0, "% ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.stats.blockedUsers);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", (ctx_r1.stats.totalUsers > 0 ? ctx_r1.stats.blockedUsers / ctx_r1.stats.totalUsers * 100 : 0) + "%");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.newThisMonth);
    \u0275\u0275advance(13);
    \u0275\u0275conditional(ctx_r1.donutSeries.length > 0 ? 67 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r1.barSeries.length > 0 ? 75 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.lineSeries.length > 0 ? 84 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275property("routerLink", ctx_r1.routes.admin_users);
    \u0275\u0275advance(19);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(113, 20, ctx_r1.stats.usersByRole));
  }
}
var AdminDashboardComponent = class _AdminDashboardComponent {
  superAdminApi;
  cdr;
  routes = routes;
  userName = "";
  userRole = "";
  stats = null;
  loading = true;
  newThisMonth = 0;
  // ─── Donut Chart ──────────────────────────────────────────────────────────
  donutSeries = [];
  donutOptions = {
    chart: { type: "donut", height: 260, animations: { enabled: true } },
    labels: ["Actifs", "Bloqu\xE9s"],
    colors: ["#22c55e", "#ef4444"],
    legend: { position: "bottom" },
    dataLabels: { enabled: true, formatter: (val) => `${val.toFixed(1)}%` },
    plotOptions: { pie: { donut: { size: "65%", labels: {
      show: true,
      total: { show: true, label: "Total", fontSize: "14px", fontWeight: "700" }
    } } } },
    tooltip: { y: { formatter: (val) => `${val} utilisateur(s)` } }
  };
  // ─── Bar Chart ────────────────────────────────────────────────────────────
  barSeries = [];
  barOptions = {
    chart: { type: "bar", height: 260, toolbar: { show: false } },
    plotOptions: { bar: { borderRadius: 5, columnWidth: "55%", distributed: true } },
    colors: ["#6366f1", "#22c55e", "#ef4444", "#f59e0b", "#8b5cf6"],
    dataLabels: { enabled: true, style: { fontWeight: "bold", fontSize: "11px" } },
    xaxis: { categories: [] },
    yaxis: { title: { text: "Utilisateurs" } },
    grid: { borderColor: "#f1f5f9", strokeDashArray: 4 },
    legend: { show: false },
    tooltip: { y: { formatter: (val) => `${val} utilisateur(s)` } }
  };
  // ─── Line Chart ───────────────────────────────────────────────────────────
  lineSeries = [];
  lineOptions = {
    chart: { type: "area", height: 240, toolbar: { show: false } },
    colors: ["#ef4444"],
    fill: { type: "gradient", gradient: { opacityFrom: 0.5, opacityTo: 0.05 } },
    stroke: { curve: "smooth", width: 3 },
    markers: { size: 4, colors: ["#ef4444"], strokeColors: "#fff", strokeWidth: 2 },
    xaxis: { categories: [], labels: { rotate: -40, style: { fontSize: "10px" } } },
    yaxis: { min: 0, labels: { formatter: (v) => Math.round(v).toString() } },
    grid: { borderColor: "#f1f5f9", strokeDashArray: 4 },
    dataLabels: { enabled: false },
    tooltip: { y: { formatter: (val) => `${val} inscription(s)` } }
  };
  constructor(superAdminApi, cdr) {
    this.superAdminApi = superAdminApi;
    this.cdr = cdr;
  }
  ngOnInit() {
    this.userName = localStorage.getItem("fullName") || "Administrateur";
    this.userRole = localStorage.getItem("role") || "";
    this.loadStats();
  }
  loadStats() {
    this.loading = true;
    this.superAdminApi.getAdminStats().subscribe({
      next: (data) => {
        this.stats = data;
        this.buildCharts(data);
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  buildCharts(data) {
    this.donutSeries = [data.activeUsers ?? 0, data.blockedUsers ?? 0];
    const roleLabels = {
      STUDENT: "\xC9tudiants",
      INSTRUCTOR: "Instruct.",
      ADMIN: "Admins",
      RECRUITER: "Recruteurs",
      SUPERADMIN: "SuperAdmin"
    };
    const roles = Object.keys(data.usersByRole ?? {});
    this.barSeries = [{ name: "Utilisateurs", data: roles.map((r) => data.usersByRole[r] ?? 0) }];
    this.barOptions = __spreadProps(__spreadValues({}, this.barOptions), {
      xaxis: __spreadProps(__spreadValues({}, this.barOptions.xaxis), { categories: roles.map((r) => roleLabels[r] || r) })
    });
    const months = Object.keys(data.registrationsByMonth ?? {});
    const now = /* @__PURE__ */ new Date();
    const currentKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
    this.newThisMonth = data.registrationsByMonth?.[currentKey] ?? 0;
    this.lineSeries = [{ name: "Inscriptions", data: months.map((m) => data.registrationsByMonth[m] ?? 0) }];
    this.lineOptions = __spreadProps(__spreadValues({}, this.lineOptions), {
      xaxis: __spreadProps(__spreadValues({}, this.lineOptions.xaxis), {
        categories: months.map((m) => {
          const [y, mo] = m.split("-");
          return new Date(parseInt(y), parseInt(mo) - 1).toLocaleDateString("fr-FR", { month: "short", year: "2-digit" });
        })
      })
    });
  }
  getRoleColor(role) {
    const colors = {
      STUDENT: "#6366f1",
      INSTRUCTOR: "#22c55e",
      ADMIN: "#ef4444",
      RECRUITER: "#f59e0b",
      SUPERADMIN: "#8b5cf6"
    };
    return colors[role] || "#6b7280";
  }
  getRoleLabel(role) {
    const labels = {
      STUDENT: "\xC9tudiants",
      INSTRUCTOR: "Instructeurs",
      ADMIN: "Admins",
      RECRUITER: "Recruteurs",
      SUPERADMIN: "Super Admins"
    };
    return labels[role] || role;
  }
  static \u0275fac = function AdminDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminDashboardComponent)(\u0275\u0275directiveInject(SuperAdminApiService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], decls: 17, vars: 3, consts: [[1, "row", "mb-4"], [1, "col-12"], [1, "card", "border-0", "admin-banner"], [1, "card-body", "d-flex", "align-items-center", "gap-3", "py-4"], [1, "admin-avatar-ring", "flex-shrink-0"], [1, "admin-avatar"], [1, "ti", "ti-shield-check", "fs-24", "text-white"], [1, "flex-grow-1"], [1, "mb-1", "text-white", "fw-bold"], [1, "mb-0", "text-white", "opacity-75", "small"], [1, "btn", "btn-light", "btn-sm", 3, "click"], [1, "ti", "ti-refresh", "me-1"], [1, "row", "g-3", "mb-4"], [1, "col-sm-6", "col-xl-3"], [1, "card", "border-0"], [1, "card-body"], [1, "skeleton", "skeleton-line", "w-50", "mb-2"], [1, "skeleton", "skeleton-line", "w-75", "mb-3", 2, "height", "28px"], [1, "skeleton", "skeleton-line", "w-100"], [1, "card", "border-0", "stat-card"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-3"], [1, "stat-icon", "bg-primary-transparent"], [1, "ti", "ti-users", "fs-20", "text-primary"], [1, "badge", "bg-primary-transparent", "text-primary"], [1, "fw-bold", "mb-1"], [1, "text-muted", "small", "mb-2"], [1, "progress", 2, "height", "4px"], [1, "progress-bar", "bg-primary", 2, "width", "100%"], [1, "stat-icon", "bg-success-transparent"], [1, "ti", "ti-circle-check", "fs-20", "text-success"], [1, "badge", "bg-success-transparent", "text-success"], [1, "fw-bold", "mb-1", "text-success"], [1, "progress-bar", "bg-success"], [1, "stat-icon", "bg-danger-transparent"], [1, "ti", "ti-ban", "fs-20", "text-danger"], [1, "badge", "bg-danger-transparent", "text-danger"], [1, "fw-bold", "mb-1", "text-danger"], [1, "progress-bar", "bg-danger"], [1, "stat-icon", "bg-warning-transparent"], [1, "ti", "ti-user-plus", "fs-20", "text-warning"], [1, "badge", "bg-warning-transparent", "text-warning"], [1, "fw-bold", "mb-1", "text-warning"], [1, "progress-bar", "bg-warning", 2, "width", "60%"], [1, "col-lg-5"], [1, "card-header", "bg-transparent", "border-0", "pb-0"], [1, "ti", "ti-chart-pie", "me-2", "text-danger"], [1, "card-body", "pt-2"], [3, "series", "chart", "labels", "colors", "legend", "dataLabels", "plotOptions", "tooltip"], [1, "col-lg-7"], [1, "ti", "ti-chart-bar", "me-2", "text-primary"], [3, "series", "chart", "plotOptions", "colors", "dataLabels", "xaxis", "yaxis", "grid", "legend", "tooltip"], [1, "row", "g-3"], [1, "ti", "ti-trending-up", "me-2", "text-danger"], [3, "series", "chart", "colors", "fill", "stroke", "markers", "xaxis", "yaxis", "grid", "dataLabels", "tooltip"], [1, "card", "border-0", "h-100"], [1, "ti", "ti-bolt", "me-2", "text-warning"], [1, "quick-link", "d-flex", "align-items-center", "gap-3", "p-3", "rounded-3", "mb-3", "text-decoration-none", 3, "routerLink"], [1, "fw-semibold", "mb-0", "text-dark", "small"], [1, "text-muted"], [1, "ti", "ti-chevron-right", "text-muted"], [1, "quick-link", "d-flex", "align-items-center", "gap-3", "p-3", "rounded-3", "mb-3", 2, "cursor", "pointer", 3, "click"], [1, "ti", "ti-refresh", "fs-20", "text-success"], [1, "my-2"], [1, "d-flex", "align-items-center", "justify-content-between", "py-2", "border-bottom"], [1, "d-flex", "align-items-center", "gap-2"], [1, "role-dot"], [1, "fw-semibold"], [1, "badge"]], template: function AdminDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
      \u0275\u0275element(6, "i", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 7)(8, "h4", 8);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 9);
      \u0275\u0275text(11, "Tableau de bord Administrateur \u2014 Gestion de la plateforme");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "button", 10);
      \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_12_listener() {
        return ctx.loadStats();
      });
      \u0275\u0275element(13, "i", 11);
      \u0275\u0275text(14, "Actualiser ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275conditionalCreate(15, AdminDashboardComponent_Conditional_15_Template, 3, 1, "div", 12);
      \u0275\u0275conditionalCreate(16, AdminDashboardComponent_Conditional_16_Template, 114, 22);
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1("Bienvenue, ", ctx.userName, " \u{1F6E1}\uFE0F");
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loading ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading && ctx.stats ? 16 : -1);
    }
  }, dependencies: [CommonModule, RouterLink, NgApexchartsModule, ChartComponent, DecimalPipe, KeyValuePipe], styles: ['\n\n.admin-banner[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 50%,\n      #b91c1c 100%) !important;\n  position: relative;\n  overflow: hidden;\n}\n.admin-banner[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -10%;\n  width: 250px;\n  height: 250px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.06);\n}\n.admin-avatar-ring[_ngcontent-%COMP%] {\n  padding: 3px;\n  background: rgba(255, 255, 255, 0.25);\n  border-radius: 50%;\n}\n.admin-avatar[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stat-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08) !important;\n}\n.stat-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.9rem;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.quick-link[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e8edf1;\n  transition: all 0.2s ease;\n}\n.quick-link[_ngcontent-%COMP%]:hover {\n  background: #fff0f0;\n  border-color: #fca5a5;\n  transform: translateX(3px);\n}\n.role-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n}\n.skeleton[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #f0f4f8 25%,\n      #e0e8f0 50%,\n      #f0f4f8 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.4s infinite;\n  border-radius: 6px;\n  display: block;\n}\n.skeleton-line[_ngcontent-%COMP%] {\n  height: 16px;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-admin-dashboard", standalone: true, imports: [CommonModule, RouterLink, NgApexchartsModule], template: `<!-- Banni\xE8re Admin -->\r
<div class="row mb-4">\r
  <div class="col-12">\r
    <div class="card border-0 admin-banner">\r
      <div class="card-body d-flex align-items-center gap-3 py-4">\r
        <div class="admin-avatar-ring flex-shrink-0">\r
          <div class="admin-avatar">\r
            <i class="ti ti-shield-check fs-24 text-white"></i>\r
          </div>\r
        </div>\r
        <div class="flex-grow-1">\r
          <h4 class="mb-1 text-white fw-bold">Bienvenue, {{ userName }} \u{1F6E1}\uFE0F</h4>\r
          <p class="mb-0 text-white opacity-75 small">Tableau de bord Administrateur \u2014 Gestion de la plateforme</p>\r
        </div>\r
        <button class="btn btn-light btn-sm" (click)="loadStats()">\r
          <i class="ti ti-refresh me-1"></i>Actualiser\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Skeleton -->\r
@if (loading) {\r
  <div class="row g-3 mb-4">\r
    @for (i of [1,2,3,4]; track i) {\r
      <div class="col-sm-6 col-xl-3">\r
        <div class="card border-0">\r
          <div class="card-body">\r
            <div class="skeleton skeleton-line w-50 mb-2"></div>\r
            <div class="skeleton skeleton-line w-75 mb-3" style="height:28px"></div>\r
            <div class="skeleton skeleton-line w-100"></div>\r
          </div>\r
        </div>\r
      </div>\r
    }\r
  </div>\r
}\r
\r
@if (!loading && stats) {\r
  <!-- \u2500\u2500\u2500 Cartes Stats \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="row g-3 mb-4">\r
    <div class="col-sm-6 col-xl-3">\r
      <div class="card border-0 stat-card">\r
        <div class="card-body">\r
          <div class="d-flex justify-content-between align-items-start mb-3">\r
            <div class="stat-icon bg-primary-transparent">\r
              <i class="ti ti-users fs-20 text-primary"></i>\r
            </div>\r
            <span class="badge bg-primary-transparent text-primary">Total</span>\r
          </div>\r
          <h2 class="fw-bold mb-1">{{ stats.totalUsers }}</h2>\r
          <p class="text-muted small mb-2">Utilisateurs enregistr\xE9s</p>\r
          <div class="progress" style="height:4px"><div class="progress-bar bg-primary" style="width:100%"></div></div>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="col-sm-6 col-xl-3">\r
      <div class="card border-0 stat-card">\r
        <div class="card-body">\r
          <div class="d-flex justify-content-between align-items-start mb-3">\r
            <div class="stat-icon bg-success-transparent">\r
              <i class="ti ti-circle-check fs-20 text-success"></i>\r
            </div>\r
            <span class="badge bg-success-transparent text-success">\r
              {{ stats.totalUsers > 0 ? ((stats.activeUsers / stats.totalUsers) * 100 | number:'1.0-0') : 0 }}%\r
            </span>\r
          </div>\r
          <h2 class="fw-bold mb-1 text-success">{{ stats.activeUsers }}</h2>\r
          <p class="text-muted small mb-2">Comptes actifs</p>\r
          <div class="progress" style="height:4px">\r
            <div class="progress-bar bg-success"\r
              [style.width]="(stats.totalUsers > 0 ? stats.activeUsers/stats.totalUsers*100 : 0) + '%'"></div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="col-sm-6 col-xl-3">\r
      <div class="card border-0 stat-card">\r
        <div class="card-body">\r
          <div class="d-flex justify-content-between align-items-start mb-3">\r
            <div class="stat-icon bg-danger-transparent">\r
              <i class="ti ti-ban fs-20 text-danger"></i>\r
            </div>\r
            <span class="badge bg-danger-transparent text-danger">\r
              {{ stats.totalUsers > 0 ? ((stats.blockedUsers / stats.totalUsers) * 100 | number:'1.0-0') : 0 }}%\r
            </span>\r
          </div>\r
          <h2 class="fw-bold mb-1 text-danger">{{ stats.blockedUsers }}</h2>\r
          <p class="text-muted small mb-2">Comptes bloqu\xE9s</p>\r
          <div class="progress" style="height:4px">\r
            <div class="progress-bar bg-danger"\r
              [style.width]="(stats.totalUsers > 0 ? stats.blockedUsers/stats.totalUsers*100 : 0) + '%'"></div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="col-sm-6 col-xl-3">\r
      <div class="card border-0 stat-card">\r
        <div class="card-body">\r
          <div class="d-flex justify-content-between align-items-start mb-3">\r
            <div class="stat-icon bg-warning-transparent">\r
              <i class="ti ti-user-plus fs-20 text-warning"></i>\r
            </div>\r
            <span class="badge bg-warning-transparent text-warning">Ce mois</span>\r
          </div>\r
          <h2 class="fw-bold mb-1 text-warning">{{ newThisMonth }}</h2>\r
          <p class="text-muted small mb-2">Nouvelles inscriptions</p>\r
          <div class="progress" style="height:4px"><div class="progress-bar bg-warning" style="width:60%"></div></div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500\u2500 Donut + Bar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="row g-3 mb-4">\r
    <div class="col-lg-5">\r
      <div class="card border-0">\r
        <div class="card-header bg-transparent border-0 pb-0">\r
          <h6 class="fw-bold mb-1"><i class="ti ti-chart-pie me-2 text-danger"></i>Statut des Comptes</h6>\r
        </div>\r
        <div class="card-body pt-2">\r
          @if (donutSeries.length > 0) {\r
            <apx-chart\r
              [series]="donutSeries" [chart]="donutOptions.chart" [labels]="donutOptions.labels"\r
              [colors]="donutOptions.colors" [legend]="donutOptions.legend"\r
              [dataLabels]="donutOptions.dataLabels" [plotOptions]="donutOptions.plotOptions"\r
              [tooltip]="donutOptions.tooltip">\r
            </apx-chart>\r
          }\r
        </div>\r
      </div>\r
    </div>\r
    <div class="col-lg-7">\r
      <div class="card border-0">\r
        <div class="card-header bg-transparent border-0 pb-0">\r
          <h6 class="fw-bold mb-1"><i class="ti ti-chart-bar me-2 text-primary"></i>Utilisateurs par R\xF4le</h6>\r
        </div>\r
        <div class="card-body pt-2">\r
          @if (barSeries.length > 0) {\r
            <apx-chart\r
              [series]="barSeries" [chart]="barOptions.chart" [plotOptions]="barOptions.plotOptions"\r
              [colors]="barOptions.colors" [dataLabels]="barOptions.dataLabels"\r
              [xaxis]="barOptions.xaxis" [yaxis]="barOptions.yaxis"\r
              [grid]="barOptions.grid" [legend]="barOptions.legend" [tooltip]="barOptions.tooltip">\r
            </apx-chart>\r
          }\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500\u2500 Line + Actions \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="row g-3">\r
    <div class="col-lg-7">\r
      <div class="card border-0">\r
        <div class="card-header bg-transparent border-0 pb-0">\r
          <h6 class="fw-bold mb-1"><i class="ti ti-trending-up me-2 text-danger"></i>Inscriptions (12 derniers mois)</h6>\r
        </div>\r
        <div class="card-body pt-2">\r
          @if (lineSeries.length > 0) {\r
            <apx-chart\r
              [series]="lineSeries" [chart]="lineOptions.chart" [colors]="lineOptions.colors"\r
              [fill]="lineOptions.fill" [stroke]="lineOptions.stroke" [markers]="lineOptions.markers"\r
              [xaxis]="lineOptions.xaxis" [yaxis]="lineOptions.yaxis"\r
              [grid]="lineOptions.grid" [dataLabels]="lineOptions.dataLabels" [tooltip]="lineOptions.tooltip">\r
            </apx-chart>\r
          }\r
        </div>\r
      </div>\r
    </div>\r
    <div class="col-lg-5">\r
      <div class="card border-0 h-100">\r
        <div class="card-header bg-transparent border-0 pb-0">\r
          <h6 class="fw-bold mb-1"><i class="ti ti-bolt me-2 text-warning"></i>Actions Rapides</h6>\r
        </div>\r
        <div class="card-body">\r
          <a [routerLink]="routes.admin_users"\r
             class="quick-link d-flex align-items-center gap-3 p-3 rounded-3 mb-3 text-decoration-none">\r
            <div class="stat-icon bg-primary-transparent">\r
              <i class="ti ti-users fs-20 text-primary"></i>\r
            </div>\r
            <div class="flex-grow-1">\r
              <p class="fw-semibold mb-0 text-dark small">G\xE9rer les Utilisateurs</p>\r
              <small class="text-muted">Bloquer, supprimer, modifier</small>\r
            </div>\r
            <i class="ti ti-chevron-right text-muted"></i>\r
          </a>\r
          <div class="quick-link d-flex align-items-center gap-3 p-3 rounded-3 mb-3"\r
               (click)="loadStats()" style="cursor:pointer">\r
            <div class="stat-icon bg-success-transparent">\r
              <i class="ti ti-refresh fs-20 text-success"></i>\r
            </div>\r
            <div class="flex-grow-1">\r
              <p class="fw-semibold mb-0 text-dark small">Rafra\xEEchir les Donn\xE9es</p>\r
              <small class="text-muted">Recharger les statistiques</small>\r
            </div>\r
            <i class="ti ti-chevron-right text-muted"></i>\r
          </div>\r
          <hr class="my-2">\r
          <!-- R\xE9sum\xE9 par r\xF4le -->\r
          @for (entry of stats.usersByRole | keyvalue; track entry.key) {\r
            <div class="d-flex align-items-center justify-content-between py-2 border-bottom">\r
              <div class="d-flex align-items-center gap-2">\r
                <span class="role-dot" [style.background]="getRoleColor(entry.key)"></span>\r
                <small class="fw-semibold">{{ getRoleLabel(entry.key) }}</small>\r
              </div>\r
              <span class="badge" [style.background]="getRoleColor(entry.key) + '20'"\r
                    [style.color]="getRoleColor(entry.key)">{{ entry.value }}</span>\r
            </div>\r
          }\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
}\r
`, styles: ['/* src/app/features/admin/admin-dashboard/admin-dashboard.component.scss */\n.admin-banner {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444 0%,\n      #dc2626 50%,\n      #b91c1c 100%) !important;\n  position: relative;\n  overflow: hidden;\n}\n.admin-banner::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -10%;\n  width: 250px;\n  height: 250px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.06);\n}\n.admin-avatar-ring {\n  padding: 3px;\n  background: rgba(255, 255, 255, 0.25);\n  border-radius: 50%;\n}\n.admin-avatar {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stat-card {\n  border-radius: 12px !important;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.stat-card:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08) !important;\n}\n.stat-card h2 {\n  font-size: 1.9rem;\n}\n.stat-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.quick-link {\n  background: #f8fafc;\n  border: 1px solid #e8edf1;\n  transition: all 0.2s ease;\n}\n.quick-link:hover {\n  background: #fff0f0;\n  border-color: #fca5a5;\n  transform: translateX(3px);\n}\n.role-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n}\n.skeleton {\n  background:\n    linear-gradient(\n      90deg,\n      #f0f4f8 25%,\n      #e0e8f0 50%,\n      #f0f4f8 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.4s infinite;\n  border-radius: 6px;\n  display: block;\n}\n.skeleton-line {\n  height: 16px;\n}\n@keyframes shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.card {\n  border-radius: 12px !important;\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */\n'] }]
  }], () => [{ type: SuperAdminApiService }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src/app/features/admin/admin-dashboard/admin-dashboard.component.ts", lineNumber: 15 });
})();
export {
  AdminDashboardComponent
};
//# sourceMappingURL=chunk-M432B666.js.map
