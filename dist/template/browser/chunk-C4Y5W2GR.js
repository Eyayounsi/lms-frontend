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
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-5DE2SIVI.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/features/superadmin/superadmin-dashboard/superadmin-dashboard.component.ts
var _c0 = ["donutChart"];
var _c1 = ["barChart"];
var _c2 = ["lineChart"];
var _c3 = () => [1, 2, 3, 4];
var _forTrack0 = ($index, $item) => $item.key;
function SuperadminDashboardComponent_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "div", 15);
    \u0275\u0275element(3, "div", 16)(4, "div", 17)(5, "div", 18);
    \u0275\u0275elementEnd()()();
  }
}
function SuperadminDashboardComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, SuperadminDashboardComponent_Conditional_15_For_2_Template, 6, 0, "div", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c3));
  }
}
function SuperadminDashboardComponent_Conditional_16_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "apx-chart", 55);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("series", ctx_r1.donutSeries)("chart", ctx_r1.donutOptions.chart)("labels", ctx_r1.donutOptions.labels)("colors", ctx_r1.donutOptions.colors)("legend", ctx_r1.donutOptions.legend)("dataLabels", ctx_r1.donutOptions.dataLabels)("plotOptions", ctx_r1.donutOptions.plotOptions)("tooltip", ctx_r1.donutOptions.tooltip)("responsive", ctx_r1.donutOptions.responsive);
  }
}
function SuperadminDashboardComponent_Conditional_16_For_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 79)(2, "div", 80)(3, "div", 81);
    \u0275\u0275element(4, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 82);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 83)(8, "h4", 71);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "small", 59);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 84);
    \u0275\u0275element(14, "div", 85);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const entry_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("border-color", ctx_r1.getRoleColor(entry_r3.key) + "!important");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r1.getRoleColor(entry_r3.key) + "20");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getRoleIcon(entry_r3.key));
    \u0275\u0275styleProp("color", ctx_r1.getRoleColor(entry_r3.key));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getRoleLabel(entry_r3.key));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r1.getRoleColor(entry_r3.key));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(entry_r3.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.stats.totalUsers > 0 ? \u0275\u0275pipeBind2(12, 17, +entry_r3.value / ctx_r1.stats.totalUsers * 100, "1.0-0") : 0, "% ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", (ctx_r1.stats.totalUsers > 0 ? +entry_r3.value / ctx_r1.stats.totalUsers * 100 : 0) + "%")("background-color", ctx_r1.getRoleColor(entry_r3.key));
  }
}
function SuperadminDashboardComponent_Conditional_16_Template(rf, ctx) {
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
    \u0275\u0275elementStart(13, "div", 26)(14, "div", 27);
    \u0275\u0275element(15, "div", 28);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(16, "div", 13)(17, "div", 29)(18, "div", 15)(19, "div", 20)(20, "div", 30);
    \u0275\u0275element(21, "i", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 32);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "h2", 33);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p", 25);
    \u0275\u0275text(28, "Comptes actifs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 26)(30, "div", 27);
    \u0275\u0275element(31, "div", 34);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(32, "div", 13)(33, "div", 35)(34, "div", 15)(35, "div", 20)(36, "div", 36);
    \u0275\u0275element(37, "i", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 38);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "h2", 39);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "p", 25);
    \u0275\u0275text(44, "Comptes bloqu\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 26)(46, "div", 27);
    \u0275\u0275element(47, "div", 40);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(48, "div", 13)(49, "div", 41)(50, "div", 15)(51, "div", 20)(52, "div", 42);
    \u0275\u0275element(53, "i", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span", 44);
    \u0275\u0275text(55, "Ce mois");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "h2", 45);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "p", 25);
    \u0275\u0275text(59, "Nouvelles inscriptions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 26)(61, "div", 27);
    \u0275\u0275element(62, "div", 46);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(63, "div", 12)(64, "div", 47)(65, "div", 48)(66, "div", 49)(67, "div", 50)(68, "div")(69, "h6", 24);
    \u0275\u0275text(70, "Statut des Comptes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "p", 51);
    \u0275\u0275text(72, "Actifs vs Bloqu\xE9s");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "span", 52);
    \u0275\u0275element(74, "i", 53);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(75, "div", 54);
    \u0275\u0275conditionalCreate(76, SuperadminDashboardComponent_Conditional_16_Conditional_76_Template, 1, 9, "apx-chart", 55);
    \u0275\u0275elementStart(77, "div", 56)(78, "div", 57);
    \u0275\u0275element(79, "span", 58);
    \u0275\u0275elementStart(80, "small", 59);
    \u0275\u0275text(81);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "div", 57);
    \u0275\u0275element(83, "span", 60);
    \u0275\u0275elementStart(84, "small", 59);
    \u0275\u0275text(85);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(86, "div", 61)(87, "div", 48)(88, "div", 49)(89, "div", 50)(90, "div")(91, "h6", 24);
    \u0275\u0275text(92, "R\xE9partition par R\xF4le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "p", 51);
    \u0275\u0275text(94, "Distribution des utilisateurs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "span", 62);
    \u0275\u0275element(96, "i", 63);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(97, "div", 15)(98, "div", 64);
    \u0275\u0275repeaterCreate(99, SuperadminDashboardComponent_Conditional_16_For_100_Template, 15, 20, "div", 65, _forTrack0);
    \u0275\u0275pipe(101, "keyvalue");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(102, "div", 12)(103, "div", 47)(104, "div", 14)(105, "div", 49)(106, "div", 50)(107, "div")(108, "h6", 24);
    \u0275\u0275text(109, "Histogramme des R\xF4les");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "p", 51);
    \u0275\u0275text(111, "Nombre d'utilisateurs par r\xF4le");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(112, "span", 66);
    \u0275\u0275element(113, "i", 67);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(114, "div", 54);
    \u0275\u0275element(115, "apx-chart", 68);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(116, "div", 61)(117, "div", 14)(118, "div", 49)(119, "div", 50)(120, "div")(121, "h6", 24);
    \u0275\u0275text(122, "Inscriptions (12 derniers mois)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "p", 51);
    \u0275\u0275text(124, "\xC9volution des nouvelles inscriptions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(125, "span", 62);
    \u0275\u0275element(126, "i", 69);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(127, "div", 54);
    \u0275\u0275element(128, "apx-chart", 70);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(129, "div", 64)(130, "div", 1)(131, "div", 14)(132, "div", 49)(133, "h6", 71);
    \u0275\u0275text(134, "Acc\xE8s Rapides");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(135, "div", 15)(136, "div", 64)(137, "div", 72)(138, "a", 73)(139, "div", 21);
    \u0275\u0275element(140, "i", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(141, "div")(142, "p", 74);
    \u0275\u0275text(143, "G\xE9rer les Utilisateurs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(144, "small", 59);
    \u0275\u0275text(145, "Bloquer, promouvoir, supprimer");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(146, "i", 75);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(147, "div", 72)(148, "a", 73)(149, "div", 42);
    \u0275\u0275element(150, "i", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "div")(152, "p", 74);
    \u0275\u0275text(153, "Mon Profil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(154, "small", 59);
    \u0275\u0275text(155, "Modifier mes informations");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(156, "i", 75);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(157, "div", 72)(158, "div", 77);
    \u0275\u0275listener("click", function SuperadminDashboardComponent_Conditional_16_Template_div_click_158_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadStats());
    });
    \u0275\u0275elementStart(159, "div", 30);
    \u0275\u0275element(160, "i", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(161, "div")(162, "p", 74);
    \u0275\u0275text(163, "Actualiser les Stats");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(164, "small", 59);
    \u0275\u0275text(165, "Recharger les donn\xE9es");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(166, "i", 75);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275classProp("counter-animate", !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.stats.totalUsers);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1(" ", ctx_r1.stats.totalUsers > 0 ? \u0275\u0275pipeBind2(24, 38, ctx_r1.stats.activeUsers / ctx_r1.stats.totalUsers * 100, "1.0-0") : 0, "% ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.stats.activeUsers);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", (ctx_r1.stats.totalUsers > 0 ? ctx_r1.stats.activeUsers / ctx_r1.stats.totalUsers * 100 : 0) + "%");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.stats.totalUsers > 0 ? \u0275\u0275pipeBind2(40, 41, ctx_r1.stats.blockedUsers / ctx_r1.stats.totalUsers * 100, "1.0-0") : 0, "% ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.stats.blockedUsers);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", (ctx_r1.stats.totalUsers > 0 ? ctx_r1.stats.blockedUsers / ctx_r1.stats.totalUsers * 100 : 0) + "%");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.newThisMonth);
    \u0275\u0275advance(19);
    \u0275\u0275conditional(ctx_r1.donutSeries.length > 0 ? 76 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Actifs (", ctx_r1.stats.activeUsers, ")");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Bloqu\xE9s (", ctx_r1.stats.blockedUsers, ")");
    \u0275\u0275advance(14);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(101, 44, ctx_r1.stats.usersByRole));
    \u0275\u0275advance(16);
    \u0275\u0275property("series", ctx_r1.barSeries)("chart", ctx_r1.barOptions.chart)("plotOptions", ctx_r1.barOptions.plotOptions)("colors", ctx_r1.barOptions.colors)("dataLabels", ctx_r1.barOptions.dataLabels)("xaxis", ctx_r1.barOptions.xaxis)("yaxis", ctx_r1.barOptions.yaxis)("grid", ctx_r1.barOptions.grid)("tooltip", ctx_r1.barOptions.tooltip)("legend", ctx_r1.barOptions.legend);
    \u0275\u0275advance(13);
    \u0275\u0275property("series", ctx_r1.lineSeries)("chart", ctx_r1.lineOptions.chart)("colors", ctx_r1.lineOptions.colors)("fill", ctx_r1.lineOptions.fill)("stroke", ctx_r1.lineOptions.stroke)("markers", ctx_r1.lineOptions.markers)("xaxis", ctx_r1.lineOptions.xaxis)("yaxis", ctx_r1.lineOptions.yaxis)("grid", ctx_r1.lineOptions.grid)("tooltip", ctx_r1.lineOptions.tooltip)("dataLabels", ctx_r1.lineOptions.dataLabels);
    \u0275\u0275advance(10);
    \u0275\u0275property("routerLink", ctx_r1.routes.superadmin_users);
    \u0275\u0275advance(10);
    \u0275\u0275property("routerLink", ctx_r1.routes.superadminSettings);
  }
}
var SuperadminDashboardComponent = class _SuperadminDashboardComponent {
  superAdminApi;
  cdr;
  donutChart;
  barChart;
  lineChart;
  routes = routes;
  userName = localStorage.getItem("fullName") || "Super Administrateur";
  // Stats brutes
  stats = null;
  loading = true;
  newThisMonth = 0;
  // ─── Donut : Actifs vs Bloqués ────────────────────────────────────────────
  donutSeries = [];
  donutOptions = {
    chart: { type: "donut", height: 280, animations: { enabled: true } },
    labels: ["Actifs", "Bloqu\xE9s"],
    colors: ["#22c55e", "#ef4444"],
    legend: { position: "bottom" },
    dataLabels: { enabled: true, formatter: (val) => `${val.toFixed(1)}%` },
    plotOptions: { pie: { donut: { size: "65%", labels: {
      show: true,
      total: { show: true, label: "Total", fontSize: "16px", fontWeight: "700", color: "#374151" }
    } } } },
    tooltip: { y: { formatter: (val) => `${val} utilisateur(s)` } },
    responsive: [{ breakpoint: 480, options: { chart: { width: 220 }, legend: { position: "bottom" } } }]
  };
  // ─── Bar : Utilisateurs par rôle ─────────────────────────────────────────
  barSeries = [];
  barOptions = {
    chart: {
      type: "bar",
      height: 300,
      toolbar: { show: false },
      animations: { enabled: true, easing: "easeinout", speed: 600 }
    },
    plotOptions: { bar: { borderRadius: 6, columnWidth: "50%", distributed: true } },
    colors: ["#6366f1", "#22c55e", "#ef4444", "#f59e0b", "#8b5cf6"],
    dataLabels: { enabled: true, style: { fontWeight: "bold" } },
    xaxis: { categories: [], labels: { style: { fontWeight: "600", fontSize: "12px" } } },
    yaxis: { title: { text: "Nombre d'utilisateurs", style: { fontWeight: "600" } } },
    grid: { borderColor: "#f1f5f9", strokeDashArray: 4 },
    tooltip: { y: { formatter: (val) => `${val} utilisateur(s)` } },
    legend: { show: false }
  };
  // ─── Line : Inscriptions par mois ────────────────────────────────────────
  lineSeries = [];
  lineOptions = {
    chart: {
      type: "area",
      height: 280,
      toolbar: { show: false },
      animations: { enabled: true, easing: "linear", speed: 800 }
    },
    colors: ["#f59e0b"],
    fill: { type: "gradient", gradient: { shadeIntensity: 1, opacityFrom: 0.55, opacityTo: 0.05, stops: [0, 90, 100] } },
    stroke: { curve: "smooth", width: 3 },
    markers: { size: 5, colors: ["#f59e0b"], strokeColors: "#fff", strokeWidth: 2, hover: { size: 7 } },
    xaxis: { categories: [], labels: { rotate: -45, style: { fontSize: "11px" } } },
    yaxis: { min: 0, labels: { formatter: (v) => Math.round(v).toString() } },
    grid: { borderColor: "#f1f5f9", strokeDashArray: 4 },
    tooltip: { x: { show: true }, y: { formatter: (val) => `${val} inscription(s)` } },
    dataLabels: { enabled: false }
  };
  constructor(superAdminApi, cdr) {
    this.superAdminApi = superAdminApi;
    this.cdr = cdr;
  }
  ngOnInit() {
    this.loadStats();
  }
  loadStats() {
    this.loading = true;
    this.superAdminApi.getSuperStats().subscribe({
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
      INSTRUCTOR: "Instructeurs",
      ADMIN: "Admins",
      RECRUITER: "Recruteurs",
      SUPERADMIN: "SuperAdmin"
    };
    const roles = Object.keys(data.usersByRole ?? {});
    const roleValues = roles.map((r) => data.usersByRole[r] ?? 0);
    this.barSeries = [{ name: "Utilisateurs", data: roleValues }];
    this.barOptions = __spreadProps(__spreadValues({}, this.barOptions), {
      xaxis: __spreadProps(__spreadValues({}, this.barOptions.xaxis), { categories: roles.map((r) => roleLabels[r] || r) })
    });
    const months = Object.keys(data.registrationsByMonth ?? {});
    const monthValues = months.map((m) => data.registrationsByMonth[m] ?? 0);
    const now = /* @__PURE__ */ new Date();
    const currentKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
    this.newThisMonth = data.registrationsByMonth?.[currentKey] ?? 0;
    this.lineSeries = [{ name: "Inscriptions", data: monthValues }];
    this.lineOptions = __spreadProps(__spreadValues({}, this.lineOptions), {
      xaxis: __spreadProps(__spreadValues({}, this.lineOptions.xaxis), {
        categories: months.map((m) => {
          const [year, month] = m.split("-");
          return new Date(parseInt(year), parseInt(month) - 1).toLocaleDateString("fr-FR", { month: "short", year: "2-digit" });
        })
      })
    });
  }
  getRoleIcon(role) {
    const icons = {
      STUDENT: "ti ti-school",
      INSTRUCTOR: "ti ti-chalkboard",
      ADMIN: "ti ti-shield",
      RECRUITER: "ti ti-briefcase",
      SUPERADMIN: "ti ti-crown"
    };
    return icons[role] || "ti ti-user";
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
  static \u0275fac = function SuperadminDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuperadminDashboardComponent)(\u0275\u0275directiveInject(SuperAdminApiService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperadminDashboardComponent, selectors: [["app-superadmin-dashboard"]], viewQuery: function SuperadminDashboardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
      \u0275\u0275viewQuery(_c2, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.donutChart = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.barChart = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.lineChart = _t.first);
    }
  }, decls: 17, vars: 3, consts: [[1, "row", "mb-4"], [1, "col-12"], [1, "card", "border-0", "sa-banner"], [1, "card-body", "d-flex", "align-items-center", "gap-3", "py-4"], [1, "sa-avatar-ring", "flex-shrink-0"], [1, "sa-avatar"], [1, "ti", "ti-crown", "fs-28", "text-white"], [1, "flex-grow-1"], [1, "mb-1", "text-white", "fw-bold"], [1, "mb-0", "text-white", "opacity-75", "small"], [1, "btn", "btn-light", "btn-sm", 3, "click"], [1, "ti", "ti-refresh", "me-1"], [1, "row", "g-3", "mb-4"], [1, "col-sm-6", "col-xl-3"], [1, "card", "border-0"], [1, "card-body"], [1, "skeleton", "skeleton-line", "w-50", "mb-2"], [1, "skeleton", "skeleton-line", "w-75", "mb-3", 2, "height", "32px"], [1, "skeleton", "skeleton-line", "w-100"], [1, "card", "border-0", "stat-card", "stat-card--primary"], [1, "d-flex", "align-items-start", "justify-content-between", "mb-3"], [1, "stat-icon-box", "bg-primary-transparent"], [1, "ti", "ti-users", "fs-22", "text-primary"], [1, "badge", "bg-primary-transparent", "text-primary", "small"], [1, "fw-bold", "mb-1"], [1, "text-muted", "mb-0", "small"], [1, "mt-2"], [1, "progress", 2, "height", "4px"], [1, "progress-bar", "bg-primary", 2, "width", "100%"], [1, "card", "border-0", "stat-card", "stat-card--success"], [1, "stat-icon-box", "bg-success-transparent"], [1, "ti", "ti-circle-check", "fs-22", "text-success"], [1, "badge", "bg-success-transparent", "text-success", "small"], [1, "fw-bold", "mb-1", "text-success"], [1, "progress-bar", "bg-success"], [1, "card", "border-0", "stat-card", "stat-card--danger"], [1, "stat-icon-box", "bg-danger-transparent"], [1, "ti", "ti-ban", "fs-22", "text-danger"], [1, "badge", "bg-danger-transparent", "text-danger", "small"], [1, "fw-bold", "mb-1", "text-danger"], [1, "progress-bar", "bg-danger"], [1, "card", "border-0", "stat-card", "stat-card--warning"], [1, "stat-icon-box", "bg-warning-transparent"], [1, "ti", "ti-user-plus", "fs-22", "text-warning"], [1, "badge", "bg-warning-transparent", "text-warning", "small"], [1, "fw-bold", "mb-1", "text-warning"], [1, "progress-bar", "bg-warning", 2, "width", "60%"], [1, "col-lg-5"], [1, "card", "border-0", "h-100"], [1, "card-header", "bg-transparent", "border-0", "pb-0"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "text-muted", "small", "mb-0"], [1, "icon-box", "bg-primary-transparent"], [1, "ti", "ti-chart-pie", "text-primary"], [1, "card-body", "pt-2"], [3, "series", "chart", "labels", "colors", "legend", "dataLabels", "plotOptions", "tooltip", "responsive"], [1, "d-flex", "justify-content-center", "gap-4", "mt-2"], [1, "d-flex", "align-items-center", "gap-2"], [1, "legend-dot", "bg-success"], [1, "text-muted"], [1, "legend-dot", "bg-danger"], [1, "col-lg-7"], [1, "icon-box", "bg-warning-transparent"], [1, "ti", "ti-category", "text-warning"], [1, "row", "g-3"], [1, "col-6"], [1, "icon-box", "bg-indigo-transparent"], [1, "ti", "ti-chart-bar", "text-indigo"], [3, "series", "chart", "plotOptions", "colors", "dataLabels", "xaxis", "yaxis", "grid", "tooltip", "legend"], [1, "ti", "ti-trending-up", "text-warning"], [3, "series", "chart", "colors", "fill", "stroke", "markers", "xaxis", "yaxis", "grid", "tooltip", "dataLabels"], [1, "fw-bold", "mb-0"], [1, "col-md-4"], [1, "quick-action-card", "d-flex", "align-items-center", "gap-3", "p-3", "rounded-3", "text-decoration-none", 3, "routerLink"], [1, "fw-semibold", "mb-0", "text-dark"], [1, "ti", "ti-arrow-right", "ms-auto", "text-muted"], [1, "ti", "ti-settings", "fs-22", "text-warning"], [1, "quick-action-card", "d-flex", "align-items-center", "gap-3", "p-3", "rounded-3", 2, "cursor", "pointer", 3, "click"], [1, "ti", "ti-refresh", "fs-22", "text-success"], [1, "role-stat-card", "p-3", "rounded-3", "border"], [1, "d-flex", "align-items-center", "gap-2", "mb-2"], [1, "role-icon-mini", "rounded-2", "d-flex", "align-items-center", "justify-content-center"], [1, "small", "fw-semibold"], [1, "d-flex", "align-items-end", "justify-content-between"], [1, "progress", "mt-2", 2, "height", "3px"], [1, "progress-bar"]], template: function SuperadminDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
      \u0275\u0275element(6, "i", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 7)(8, "h4", 8);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 9);
      \u0275\u0275text(11, "Tableau de bord Super-Administrateur \u2014 Vue globale de la plateforme");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "button", 10);
      \u0275\u0275listener("click", function SuperadminDashboardComponent_Template_button_click_12_listener() {
        return ctx.loadStats();
      });
      \u0275\u0275element(13, "i", 11);
      \u0275\u0275text(14, "Actualiser ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275conditionalCreate(15, SuperadminDashboardComponent_Conditional_15_Template, 3, 1, "div", 12);
      \u0275\u0275conditionalCreate(16, SuperadminDashboardComponent_Conditional_16_Template, 167, 46);
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1("Bienvenue, ", ctx.userName, " \u{1F451}");
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loading ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading && ctx.stats ? 16 : -1);
    }
  }, dependencies: [CommonModule, RouterLink, NgApexchartsModule, ChartComponent, DecimalPipe, KeyValuePipe], styles: ['\n\n.sa-banner[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b 0%,\n      #d97706 50%,\n      #b45309 100%) !important;\n  position: relative;\n  overflow: hidden;\n}\n.sa-banner[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -10%;\n  width: 300px;\n  height: 300px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.07);\n}\n.sa-banner[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -40%;\n  right: 20%;\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.05);\n}\n.sa-avatar-ring[_ngcontent-%COMP%] {\n  padding: 3px;\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n}\n.sa-avatar[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stat-card[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  border-radius: 12px !important;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08) !important;\n}\n.stat-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.stat-icon-box[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.role-stat-card[_ngcontent-%COMP%] {\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n  background: #fff;\n}\n.role-stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);\n}\n.role-icon-mini[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  flex-shrink: 0;\n  font-size: 15px;\n}\n.legend-dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  display: inline-block;\n  flex-shrink: 0;\n}\n.quick-action-card[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e8edf1;\n  transition: all 0.2s ease;\n}\n.quick-action-card[_ngcontent-%COMP%]:hover {\n  background: #f0f4ff;\n  border-color: #c7d2fe;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.08);\n}\n.skeleton[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #f0f4f8 25%,\n      #e0e8f0 50%,\n      #f0f4f8 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.4s infinite;\n  border-radius: 6px;\n  display: block;\n}\n.skeleton-line[_ngcontent-%COMP%] {\n  height: 16px;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04) !important;\n}\n.card-header[_ngcontent-%COMP%] {\n  border-radius: 12px 12px 0 0 !important;\n}\n.icon-box[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=superadmin-dashboard.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperadminDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-superadmin-dashboard", standalone: true, imports: [CommonModule, RouterLink, NgApexchartsModule], template: `<!-- Banni\xE8re SuperAdmin -->\r
<div class="row mb-4">\r
  <div class="col-12">\r
    <div class="card border-0 sa-banner">\r
      <div class="card-body d-flex align-items-center gap-3 py-4">\r
        <div class="sa-avatar-ring flex-shrink-0">\r
          <div class="sa-avatar">\r
            <i class="ti ti-crown fs-28 text-white"></i>\r
          </div>\r
        </div>\r
        <div class="flex-grow-1">\r
          <h4 class="mb-1 text-white fw-bold">Bienvenue, {{ userName }} \u{1F451}</h4>\r
          <p class="mb-0 text-white opacity-75 small">Tableau de bord Super-Administrateur \u2014 Vue globale de la plateforme</p>\r
        </div>\r
        <button class="btn btn-light btn-sm" (click)="loadStats()">\r
          <i class="ti ti-refresh me-1"></i>Actualiser\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Skeleton Loader -->\r
@if (loading) {\r
  <div class="row g-3 mb-4">\r
    @for (i of [1,2,3,4]; track i) {\r
      <div class="col-sm-6 col-xl-3">\r
        <div class="card border-0">\r
          <div class="card-body">\r
            <div class="skeleton skeleton-line w-50 mb-2"></div>\r
            <div class="skeleton skeleton-line w-75 mb-3" style="height:32px"></div>\r
            <div class="skeleton skeleton-line w-100"></div>\r
          </div>\r
        </div>\r
      </div>\r
    }\r
  </div>\r
}\r
\r
@if (!loading && stats) {\r
  <!-- \u2500\u2500\u2500 Cartes de Statistics \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="row g-3 mb-4">\r
\r
    <!-- Total Utilisateurs -->\r
    <div class="col-sm-6 col-xl-3">\r
      <div class="card border-0 stat-card stat-card--primary">\r
        <div class="card-body">\r
          <div class="d-flex align-items-start justify-content-between mb-3">\r
            <div class="stat-icon-box bg-primary-transparent">\r
              <i class="ti ti-users fs-22 text-primary"></i>\r
            </div>\r
            <span class="badge bg-primary-transparent text-primary small">Total</span>\r
          </div>\r
          <h2 class="fw-bold mb-1" [class.counter-animate]="!loading">{{ stats.totalUsers }}</h2>\r
          <p class="text-muted mb-0 small">Utilisateurs enregistr\xE9s</p>\r
          <div class="mt-2">\r
            <div class="progress" style="height:4px">\r
              <div class="progress-bar bg-primary" style="width:100%"></div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Utilisateurs Actifs -->\r
    <div class="col-sm-6 col-xl-3">\r
      <div class="card border-0 stat-card stat-card--success">\r
        <div class="card-body">\r
          <div class="d-flex align-items-start justify-content-between mb-3">\r
            <div class="stat-icon-box bg-success-transparent">\r
              <i class="ti ti-circle-check fs-22 text-success"></i>\r
            </div>\r
            <span class="badge bg-success-transparent text-success small">\r
              {{ stats.totalUsers > 0 ? ((stats.activeUsers / stats.totalUsers) * 100 | number:'1.0-0') : 0 }}%\r
            </span>\r
          </div>\r
          <h2 class="fw-bold mb-1 text-success">{{ stats.activeUsers }}</h2>\r
          <p class="text-muted mb-0 small">Comptes actifs</p>\r
          <div class="mt-2">\r
            <div class="progress" style="height:4px">\r
              <div class="progress-bar bg-success"\r
                [style.width]="(stats.totalUsers > 0 ? (stats.activeUsers / stats.totalUsers * 100) : 0) + '%'">\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Utilisateurs Bloqu\xE9s -->\r
    <div class="col-sm-6 col-xl-3">\r
      <div class="card border-0 stat-card stat-card--danger">\r
        <div class="card-body">\r
          <div class="d-flex align-items-start justify-content-between mb-3">\r
            <div class="stat-icon-box bg-danger-transparent">\r
              <i class="ti ti-ban fs-22 text-danger"></i>\r
            </div>\r
            <span class="badge bg-danger-transparent text-danger small">\r
              {{ stats.totalUsers > 0 ? ((stats.blockedUsers / stats.totalUsers) * 100 | number:'1.0-0') : 0 }}%\r
            </span>\r
          </div>\r
          <h2 class="fw-bold mb-1 text-danger">{{ stats.blockedUsers }}</h2>\r
          <p class="text-muted mb-0 small">Comptes bloqu\xE9s</p>\r
          <div class="mt-2">\r
            <div class="progress" style="height:4px">\r
              <div class="progress-bar bg-danger"\r
                [style.width]="(stats.totalUsers > 0 ? (stats.blockedUsers / stats.totalUsers * 100) : 0) + '%'">\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Nouveaux ce mois -->\r
    <div class="col-sm-6 col-xl-3">\r
      <div class="card border-0 stat-card stat-card--warning">\r
        <div class="card-body">\r
          <div class="d-flex align-items-start justify-content-between mb-3">\r
            <div class="stat-icon-box bg-warning-transparent">\r
              <i class="ti ti-user-plus fs-22 text-warning"></i>\r
            </div>\r
            <span class="badge bg-warning-transparent text-warning small">Ce mois</span>\r
          </div>\r
          <h2 class="fw-bold mb-1 text-warning">{{ newThisMonth }}</h2>\r
          <p class="text-muted mb-0 small">Nouvelles inscriptions</p>\r
          <div class="mt-2">\r
            <div class="progress" style="height:4px">\r
              <div class="progress-bar bg-warning" style="width:60%"></div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
  </div>\r
\r
  <!-- \u2500\u2500\u2500 Ligne 2 : Donut + R\xE9partition par r\xF4le \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="row g-3 mb-4">\r
\r
    <!-- Donut Chart : Statuts -->\r
    <div class="col-lg-5">\r
      <div class="card border-0 h-100">\r
        <div class="card-header bg-transparent border-0 pb-0">\r
          <div class="d-flex align-items-center justify-content-between">\r
            <div>\r
              <h6 class="fw-bold mb-1">Statut des Comptes</h6>\r
              <p class="text-muted small mb-0">Actifs vs Bloqu\xE9s</p>\r
            </div>\r
            <span class="icon-box bg-primary-transparent">\r
              <i class="ti ti-chart-pie text-primary"></i>\r
            </span>\r
          </div>\r
        </div>\r
        <div class="card-body pt-2">\r
          @if (donutSeries.length > 0) {\r
            <apx-chart\r
              [series]="donutSeries"\r
              [chart]="donutOptions.chart"\r
              [labels]="donutOptions.labels"\r
              [colors]="donutOptions.colors"\r
              [legend]="donutOptions.legend"\r
              [dataLabels]="donutOptions.dataLabels"\r
              [plotOptions]="donutOptions.plotOptions"\r
              [tooltip]="donutOptions.tooltip"\r
              [responsive]="donutOptions.responsive">\r
            </apx-chart>\r
          }\r
          <!-- L\xE9gende manuelle -->\r
          <div class="d-flex justify-content-center gap-4 mt-2">\r
            <div class="d-flex align-items-center gap-2">\r
              <span class="legend-dot bg-success"></span>\r
              <small class="text-muted">Actifs ({{ stats.activeUsers }})</small>\r
            </div>\r
            <div class="d-flex align-items-center gap-2">\r
              <span class="legend-dot bg-danger"></span>\r
              <small class="text-muted">Bloqu\xE9s ({{ stats.blockedUsers }})</small>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Cartes R\xF4les -->\r
    <div class="col-lg-7">\r
      <div class="card border-0 h-100">\r
        <div class="card-header bg-transparent border-0 pb-0">\r
          <div class="d-flex align-items-center justify-content-between">\r
            <div>\r
              <h6 class="fw-bold mb-1">R\xE9partition par R\xF4le</h6>\r
              <p class="text-muted small mb-0">Distribution des utilisateurs</p>\r
            </div>\r
            <span class="icon-box bg-warning-transparent">\r
              <i class="ti ti-category text-warning"></i>\r
            </span>\r
          </div>\r
        </div>\r
        <div class="card-body">\r
          <div class="row g-3">\r
            @for (entry of stats.usersByRole | keyvalue; track entry.key) {\r
              <div class="col-6">\r
                <div class="role-stat-card p-3 rounded-3 border"\r
                     [style.border-color]="getRoleColor(entry.key) + '!important'">\r
                  <div class="d-flex align-items-center gap-2 mb-2">\r
                    <div class="role-icon-mini rounded-2 d-flex align-items-center justify-content-center"\r
                         [style.background]="getRoleColor(entry.key) + '20'">\r
                      <i [class]="getRoleIcon(entry.key)" [style.color]="getRoleColor(entry.key)"></i>\r
                    </div>\r
                    <span class="small fw-semibold">{{ getRoleLabel(entry.key) }}</span>\r
                  </div>\r
                  <div class="d-flex align-items-end justify-content-between">\r
                    <h4 class="fw-bold mb-0" [style.color]="getRoleColor(entry.key)">{{ entry.value }}</h4>\r
                    <small class="text-muted">\r
                      {{ stats.totalUsers > 0 ? ((+entry.value / stats.totalUsers) * 100 | number:'1.0-0') : 0 }}%\r
                    </small>\r
                  </div>\r
                  <div class="progress mt-2" style="height:3px">\r
                    <div class="progress-bar"\r
                         [style.width]="(stats.totalUsers > 0 ? (+entry.value / stats.totalUsers * 100) : 0) + '%'"\r
                         [style.background-color]="getRoleColor(entry.key)">\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            }\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
  </div>\r
\r
  <!-- \u2500\u2500\u2500 Ligne 3 : Bar chart + Line chart \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="row g-3 mb-4">\r
\r
    <!-- Bar Chart : Par r\xF4le -->\r
    <div class="col-lg-5">\r
      <div class="card border-0">\r
        <div class="card-header bg-transparent border-0 pb-0">\r
          <div class="d-flex align-items-center justify-content-between">\r
            <div>\r
              <h6 class="fw-bold mb-1">Histogramme des R\xF4les</h6>\r
              <p class="text-muted small mb-0">Nombre d'utilisateurs par r\xF4le</p>\r
            </div>\r
            <span class="icon-box bg-indigo-transparent">\r
              <i class="ti ti-chart-bar text-indigo"></i>\r
            </span>\r
          </div>\r
        </div>\r
        <div class="card-body pt-2">\r
          <apx-chart\r
            [series]="barSeries"\r
            [chart]="barOptions.chart"\r
            [plotOptions]="barOptions.plotOptions"\r
            [colors]="barOptions.colors"\r
            [dataLabels]="barOptions.dataLabels"\r
            [xaxis]="barOptions.xaxis"\r
            [yaxis]="barOptions.yaxis"\r
            [grid]="barOptions.grid"\r
            [tooltip]="barOptions.tooltip"\r
            [legend]="barOptions.legend">\r
          </apx-chart>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Line/Area Chart : Inscriptions par mois -->\r
    <div class="col-lg-7">\r
      <div class="card border-0">\r
        <div class="card-header bg-transparent border-0 pb-0">\r
          <div class="d-flex align-items-center justify-content-between">\r
            <div>\r
              <h6 class="fw-bold mb-1">Inscriptions (12 derniers mois)</h6>\r
              <p class="text-muted small mb-0">\xC9volution des nouvelles inscriptions</p>\r
            </div>\r
            <span class="icon-box bg-warning-transparent">\r
              <i class="ti ti-trending-up text-warning"></i>\r
            </span>\r
          </div>\r
        </div>\r
        <div class="card-body pt-2">\r
          <apx-chart\r
            [series]="lineSeries"\r
            [chart]="lineOptions.chart"\r
            [colors]="lineOptions.colors"\r
            [fill]="lineOptions.fill"\r
            [stroke]="lineOptions.stroke"\r
            [markers]="lineOptions.markers"\r
            [xaxis]="lineOptions.xaxis"\r
            [yaxis]="lineOptions.yaxis"\r
            [grid]="lineOptions.grid"\r
            [tooltip]="lineOptions.tooltip"\r
            [dataLabels]="lineOptions.dataLabels">\r
          </apx-chart>\r
        </div>\r
      </div>\r
    </div>\r
\r
  </div>\r
\r
  <!-- \u2500\u2500\u2500 Acc\xE8s rapides \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="row g-3">\r
    <div class="col-12">\r
      <div class="card border-0">\r
        <div class="card-header bg-transparent border-0 pb-0">\r
          <h6 class="fw-bold mb-0">Acc\xE8s Rapides</h6>\r
        </div>\r
        <div class="card-body">\r
          <div class="row g-3">\r
            <div class="col-md-4">\r
              <a [routerLink]="routes.superadmin_users"\r
                 class="quick-action-card d-flex align-items-center gap-3 p-3 rounded-3 text-decoration-none">\r
                <div class="stat-icon-box bg-primary-transparent">\r
                  <i class="ti ti-users fs-22 text-primary"></i>\r
                </div>\r
                <div>\r
                  <p class="fw-semibold mb-0 text-dark">G\xE9rer les Utilisateurs</p>\r
                  <small class="text-muted">Bloquer, promouvoir, supprimer</small>\r
                </div>\r
                <i class="ti ti-arrow-right ms-auto text-muted"></i>\r
              </a>\r
            </div>\r
            <div class="col-md-4">\r
              <a [routerLink]="routes.superadminSettings"\r
                 class="quick-action-card d-flex align-items-center gap-3 p-3 rounded-3 text-decoration-none">\r
                <div class="stat-icon-box bg-warning-transparent">\r
                  <i class="ti ti-settings fs-22 text-warning"></i>\r
                </div>\r
                <div>\r
                  <p class="fw-semibold mb-0 text-dark">Mon Profil</p>\r
                  <small class="text-muted">Modifier mes informations</small>\r
                </div>\r
                <i class="ti ti-arrow-right ms-auto text-muted"></i>\r
              </a>\r
            </div>\r
            <div class="col-md-4">\r
              <div class="quick-action-card d-flex align-items-center gap-3 p-3 rounded-3" (click)="loadStats()" style="cursor:pointer">\r
                <div class="stat-icon-box bg-success-transparent">\r
                  <i class="ti ti-refresh fs-22 text-success"></i>\r
                </div>\r
                <div>\r
                  <p class="fw-semibold mb-0 text-dark">Actualiser les Stats</p>\r
                  <small class="text-muted">Recharger les donn\xE9es</small>\r
                </div>\r
                <i class="ti ti-arrow-right ms-auto text-muted"></i>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
}\r
`, styles: ['/* src/app/features/superadmin/superadmin-dashboard/superadmin-dashboard.component.scss */\n.sa-banner {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b 0%,\n      #d97706 50%,\n      #b45309 100%) !important;\n  position: relative;\n  overflow: hidden;\n}\n.sa-banner::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -10%;\n  width: 300px;\n  height: 300px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.07);\n}\n.sa-banner::after {\n  content: "";\n  position: absolute;\n  bottom: -40%;\n  right: 20%;\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.05);\n}\n.sa-avatar-ring {\n  padding: 3px;\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n}\n.sa-avatar {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stat-card {\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  border-radius: 12px !important;\n}\n.stat-card:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08) !important;\n}\n.stat-card h2 {\n  font-size: 2rem;\n}\n.stat-icon-box {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.role-stat-card {\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n  background: #fff;\n}\n.role-stat-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);\n}\n.role-icon-mini {\n  width: 30px;\n  height: 30px;\n  flex-shrink: 0;\n  font-size: 15px;\n}\n.legend-dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  display: inline-block;\n  flex-shrink: 0;\n}\n.quick-action-card {\n  background: #f8fafc;\n  border: 1px solid #e8edf1;\n  transition: all 0.2s ease;\n}\n.quick-action-card:hover {\n  background: #f0f4ff;\n  border-color: #c7d2fe;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.08);\n}\n.skeleton {\n  background:\n    linear-gradient(\n      90deg,\n      #f0f4f8 25%,\n      #e0e8f0 50%,\n      #f0f4f8 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.4s infinite;\n  border-radius: 6px;\n  display: block;\n}\n.skeleton-line {\n  height: 16px;\n}\n@keyframes shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.card {\n  border-radius: 12px !important;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04) !important;\n}\n.card-header {\n  border-radius: 12px 12px 0 0 !important;\n}\n.icon-box {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=superadmin-dashboard.component.css.map */\n'] }]
  }], () => [{ type: SuperAdminApiService }, { type: ChangeDetectorRef }], { donutChart: [{
    type: ViewChild,
    args: ["donutChart"]
  }], barChart: [{
    type: ViewChild,
    args: ["barChart"]
  }], lineChart: [{
    type: ViewChild,
    args: ["lineChart"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperadminDashboardComponent, { className: "SuperadminDashboardComponent", filePath: "src/app/features/superadmin/superadmin-dashboard/superadmin-dashboard.component.ts", lineNumber: 23 });
})();
export {
  SuperadminDashboardComponent
};
//# sourceMappingURL=chunk-C4Y5W2GR.js.map
