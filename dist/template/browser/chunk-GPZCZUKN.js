import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-VDIDEWKD.js";
import {
  environment
} from "./chunk-MFSRU4HL.js";
import {
  routes
} from "./chunk-E6TQA5KL.js";
import {
  HttpClient
} from "./chunk-PXFMCAI3.js";
import {
  CommonModule,
  DecimalPipe,
  NgForOf,
  NgIf
} from "./chunk-YBJXKBE2.js";
import {
  Component,
  Injectable,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/shared/service/revenue/instructor-revenue.service.ts
var InstructorRevenueService = class _InstructorRevenueService {
  http;
  api = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getMyRevenueDashboard() {
    return this.http.get(`${this.api}/instructor/revenue`);
  }
  static \u0275fac = function InstructorRevenueService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorRevenueService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _InstructorRevenueService, factory: _InstructorRevenueService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorRevenueService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/instructor/instructor-earnings/instructor-earnings.component.ts
var _c0 = ["chart"];
function InstructorEarningsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "i", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.errorMessage, " ");
  }
}
function InstructorEarningsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 7);
    \u0275\u0275elementStart(2, "p", 8);
    \u0275\u0275text(3, "Chargement des revenus...");
    \u0275\u0275elementEnd()();
  }
}
function InstructorEarningsComponent_ng_container_5_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "div", 29)(3, "h5");
    \u0275\u0275text(4, "Revenus par cours");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 12);
    \u0275\u0275element(6, "apx-chart", 30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("series", ctx_r0.earningChart.series)("chart", ctx_r0.earningChart.chart)("xaxis", ctx_r0.earningChart.xaxis)("yaxis", ctx_r0.earningChart.yaxis)("dataLabels", ctx_r0.earningChart.dataLabels)("plotOptions", ctx_r0.earningChart.plotOptions)("colors", ctx_r0.earningChart.colors)("tooltip", ctx_r0.earningChart.tooltip);
  }
}
function InstructorEarningsComponent_ng_container_5_div_44_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 37);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.courseTitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.totalSales);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(7, 4, item_r2.totalRevenue, "1.2-2"), " \u20AC");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(10, 7, item_r2.instructorRevenue, "1.2-2"), " \u20AC");
  }
}
function InstructorEarningsComponent_ng_container_5_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 29)(2, "h5");
    \u0275\u0275text(3, "D\xE9tail par cours");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 12)(5, "div", 32)(6, "table", 33)(7, "thead", 34)(8, "tr")(9, "th");
    \u0275\u0275text(10, "Cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Ventes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Revenu brut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Ma part (70%)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275template(18, InstructorEarningsComponent_ng_container_5_div_44_tr_18_Template, 11, 10, "tr", 35);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r0.revenue.byCourse);
  }
}
function InstructorEarningsComponent_ng_container_5_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "i", 38);
    \u0275\u0275elementStart(2, "h5", 39);
    \u0275\u0275text(3, "Aucun revenu pour l'instant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 40);
    \u0275\u0275text(5, "Vos revenus s'afficheront ici lorsque des \xE9tudiants acheteront vos cours.");
    \u0275\u0275elementEnd()();
  }
}
function InstructorEarningsComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 9)(2, "div", 10)(3, "div", 11)(4, "div", 12)(5, "div", 13)(6, "span", 14);
    \u0275\u0275element(7, "i", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 16)(9, "h6", 17);
    \u0275\u0275text(10, "Revenu total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h5", 18);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p");
    \u0275\u0275text(15, "Depuis le d\xE9but");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "div", 13)(20, "span", 19);
    \u0275\u0275element(21, "i", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 16)(23, "h6", 17);
    \u0275\u0275text(24, "Ce mois-ci");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "h5", 21);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p");
    \u0275\u0275text(29, "Revenu du mois en cours");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(30, "div", 10)(31, "div", 11)(32, "div", 12)(33, "div", 13)(34, "span", 22);
    \u0275\u0275element(35, "i", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 16)(37, "h6", 17);
    \u0275\u0275text(38, "Ventes totales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "h5", 24);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "p");
    \u0275\u0275text(42, "Inscriptions pay\xE9es");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275template(43, InstructorEarningsComponent_ng_container_5_div_43_Template, 7, 8, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275template(44, InstructorEarningsComponent_ng_container_5_div_44_Template, 19, 1, "div", 26)(45, InstructorEarningsComponent_ng_container_5_div_45_Template, 6, 0, "div", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(13, 6, (ctx_r0.revenue == null ? null : ctx_r0.revenue.totalRevenue) || 0, "1.2-2"), " \u20AC");
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(27, 9, (ctx_r0.revenue == null ? null : ctx_r0.revenue.monthlyRevenue) || 0, "1.2-2"), " \u20AC");
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate((ctx_r0.revenue == null ? null : ctx_r0.revenue.totalSales) || 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (ctx_r0.revenue == null ? null : ctx_r0.revenue.byCourse) && ctx_r0.revenue.byCourse.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.revenue == null ? null : ctx_r0.revenue.byCourse) && ctx_r0.revenue.byCourse.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.revenue || ctx_r0.revenue.totalSales === 0);
  }
}
var InstructorEarningsComponent = class _InstructorEarningsComponent {
  revenueService;
  routes = routes;
  chart;
  earningChart;
  revenue = null;
  loading = true;
  errorMessage = "";
  constructor(revenueService) {
    this.revenueService = revenueService;
  }
  ngOnInit() {
    this.revenueService.getMyRevenueDashboard().subscribe({
      next: (data) => {
        this.revenue = data;
        this.loading = false;
        this.buildChart(data.byCourse);
      },
      error: () => {
        this.errorMessage = "Erreur lors du chargement des revenus.";
        this.loading = false;
        this.buildChart([]);
      }
    });
  }
  buildChart(byCourse) {
    const labels = byCourse.map((c) => c.courseTitle.length > 20 ? c.courseTitle.substring(0, 20) + "..." : c.courseTitle);
    const values = byCourse.map((c) => Number(c.instructorRevenue.toFixed(2)));
    const chartLabels = labels.length > 0 ? labels : ["Aucun cours"];
    const chartValues = values.length > 0 ? values : [0];
    this.earningChart = {
      series: [{ name: "Revenu (\u20AC)", data: chartValues }],
      chart: { height: 273, type: "bar", toolbar: { show: false } },
      colors: ["#FF4667"],
      dataLabels: { enabled: false },
      plotOptions: { bar: { borderRadius: 4, horizontal: false } },
      xaxis: { categories: chartLabels },
      yaxis: { labels: { formatter: (val) => val + " \u20AC" } },
      tooltip: { y: { formatter: (val) => val + " \u20AC" } }
    };
  }
  static \u0275fac = function InstructorEarningsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorEarningsComponent)(\u0275\u0275directiveInject(InstructorRevenueService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorEarningsComponent, selectors: [["app-instructor-earnings"]], viewQuery: function InstructorEarningsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
    }
  }, decls: 6, vars: 3, consts: [[1, "page-title", "d-flex", "align-items-center", "justify-content-between"], ["class", "alert alert-warning", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], [4, "ngIf"], [1, "alert", "alert-warning"], [1, "isax", "isax-info-circle", "me-2"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "mt-2", "text-muted"], [1, "row"], [1, "col-xl-4", "col-md-6"], [1, "card", "bg-light"], [1, "card-body"], [1, "d-flex", "align-items-center"], [1, "earnings-icon", "bg-success"], [1, "isax", "isax-dollar-circle4"], [1, "ms-3"], [1, "mb-1"], [1, "fw-bold", "text-success", "mb-1"], [1, "earnings-icon", "bg-secondary"], [1, "isax", "isax-calendar-1"], [1, "fw-bold", "text-secondary", "mb-1"], [1, "earnings-icon", "bg-info"], [1, "isax", "isax-profile-tick5"], [1, "fw-bold", "text-info", "mb-1"], ["class", "col-md-12", 4, "ngIf"], ["class", "card mb-0", 4, "ngIf"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [3, "series", "chart", "xaxis", "yaxis", "dataLabels", "plotOptions", "colors", "tooltip"], [1, "card", "mb-0"], [1, "table-responsive", "custom-table"], [1, "table"], [1, "thead-light"], [4, "ngFor", "ngForOf"], [1, "fw-medium"], [1, "text-success", "fw-semibold"], [1, "isax", "isax-dollar-circle", 2, "font-size", "3rem", "color", "#ccc"], [1, "text-muted", "mt-3"], [1, "text-muted"]], template: function InstructorEarningsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h5");
      \u0275\u0275text(2, "Mes Revenus");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(3, InstructorEarningsComponent_div_3_Template, 3, 1, "div", 1)(4, InstructorEarningsComponent_div_4_Template, 4, 0, "div", 2)(5, InstructorEarningsComponent_ng_container_5_Template, 46, 12, "ng-container", 3);
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, NgApexchartsModule, ChartComponent, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorEarningsComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-earnings", imports: [CommonModule, NgApexchartsModule], template: `
    <div class="page-title d-flex align-items-center justify-content-between">
        <h5>Mes Revenus</h5>
    </div>

    <!-- Erreur -->
    <div *ngIf="errorMessage" class="alert alert-warning">
        <i class="isax isax-info-circle me-2"></i>{{ errorMessage }}
    </div>

    <!-- Chargement -->
    <div *ngIf="loading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status"></div>
        <p class="mt-2 text-muted">Chargement des revenus...</p>
    </div>

    <ng-container *ngIf="!loading">

    <!-- Cartes KPI -->
    <div class="row">
        <div class="col-xl-4 col-md-6">
            <div class="card bg-light">
                <div class="card-body">
                    <div class="d-flex align-items-center">
                        <span class="earnings-icon bg-success">
                            <i class="isax isax-dollar-circle4"></i>
                        </span>
                        <div class="ms-3">
                            <h6 class="mb-1">Revenu total</h6>
                            <h5 class="fw-bold text-success mb-1">{{ (revenue?.totalRevenue || 0) | number:'1.2-2' }} \u20AC</h5>
                            <p>Depuis le d\xE9but</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-md-6">
            <div class="card bg-light">
                <div class="card-body">
                    <div class="d-flex align-items-center">
                        <span class="earnings-icon bg-secondary">
                            <i class="isax isax-calendar-1"></i>
                        </span>
                        <div class="ms-3">
                            <h6 class="mb-1">Ce mois-ci</h6>
                            <h5 class="fw-bold text-secondary mb-1">{{ (revenue?.monthlyRevenue || 0) | number:'1.2-2' }} \u20AC</h5>
                            <p>Revenu du mois en cours</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-md-6">
            <div class="card bg-light">
                <div class="card-body">
                    <div class="d-flex align-items-center">
                        <span class="earnings-icon bg-info">
                            <i class="isax isax-profile-tick5"></i>
                        </span>
                        <div class="ms-3">
                            <h6 class="mb-1">Ventes totales</h6>
                            <h5 class="fw-bold text-info mb-1">{{ revenue?.totalSales || 0 }}</h5>
                            <p>Inscriptions pay\xE9es</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Graphique revenus par cours -->
        <div class="col-md-12" *ngIf="revenue?.byCourse && revenue!.byCourse.length > 0">
            <div class="card">
                <div class="card-header">
                    <h5>Revenus par cours</h5>
                </div>
                <div class="card-body">
                    <apx-chart
                        [series]="earningChart.series"
                        [chart]="earningChart.chart"
                        [xaxis]="earningChart.xaxis"
                        [yaxis]="earningChart.yaxis"
                        [dataLabels]="earningChart.dataLabels"
                        [plotOptions]="earningChart.plotOptions"
                        [colors]="earningChart.colors"
                        [tooltip]="earningChart.tooltip"
                    ></apx-chart>
                </div>
            </div>
        </div>
    </div>

    <!-- Table d\xE9tail par cours -->
    <div class="card mb-0" *ngIf="revenue?.byCourse && revenue!.byCourse.length > 0">
        <div class="card-header">
            <h5>D\xE9tail par cours</h5>
        </div>
        <div class="card-body">
            <div class="table-responsive custom-table">
                <table class="table">
                    <thead class="thead-light">
                        <tr>
                            <th>Cours</th>
                            <th>Ventes</th>
                            <th>Revenu brut</th>
                            <th>Ma part (70%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr *ngFor="let item of revenue!.byCourse">
                            <td class="fw-medium">{{ item.courseTitle }}</td>
                            <td>{{ item.totalSales }}</td>
                            <td>{{ item.totalRevenue | number:'1.2-2' }} \u20AC</td>
                            <td class="text-success fw-semibold">{{ item.instructorRevenue | number:'1.2-2' }} \u20AC</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- Aucun revenu -->
    <div *ngIf="!revenue || revenue.totalSales === 0" class="text-center py-5">
        <i class="isax isax-dollar-circle" style="font-size:3rem;color:#ccc"></i>
        <h5 class="text-muted mt-3">Aucun revenu pour l'instant</h5>
        <p class="text-muted">Vos revenus s'afficheront ici lorsque des \xE9tudiants acheteront vos cours.</p>
    </div>

    </ng-container>
` }]
  }], () => [{ type: InstructorRevenueService }], { chart: [{
    type: ViewChild,
    args: ["chart"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorEarningsComponent, { className: "InstructorEarningsComponent", filePath: "src/app/features/instructor/instructor-earnings/instructor-earnings.component.ts", lineNumber: 30 });
})();
export {
  InstructorEarningsComponent
};
//# sourceMappingURL=chunk-GPZCZUKN.js.map
