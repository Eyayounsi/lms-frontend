import {
  environment
} from "./chunk-MFSRU4HL.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-VF2E3YWR.js";
import {
  HttpClient
} from "./chunk-PXFMCAI3.js";
import {
  CommonModule,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-YBJXKBE2.js";
import {
  Component,
  Injectable,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/shared/service/order/order.service.ts
var OrderService = class _OrderService {
  http;
  api = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getMyOrders() {
    return this.http.get(`${this.api}/student/orders`);
  }
  static \u0275fac = function OrderService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrderService, factory: _OrderService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/student/student-order-history/student-order-history.component.ts
function StudentOrderHistoryComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 19);
    \u0275\u0275listener("click", function StudentOrderHistoryComponent_div_3_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.errorMessage = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.errorMessage, " ");
  }
}
function StudentOrderHistoryComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 10)(2, "div", 21)(3, "div", 22)(4, "span", 23);
    \u0275\u0275element(5, "i", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "p", 25);
    \u0275\u0275text(8, "Total d\xE9pens\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h5", 26);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(12, "div", 10)(13, "div", 21)(14, "div", 22)(15, "span", 27);
    \u0275\u0275element(16, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div")(18, "p", 25);
    \u0275\u0275text(19, "Cours achet\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "h5", 29);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(11, 2, ctx_r1.getTotalSpent(), "1.2-2"), " \u20AC");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.orders.length);
  }
}
function StudentOrderHistoryComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "div", 31);
    \u0275\u0275elementStart(2, "p", 32);
    \u0275\u0275text(3, "Chargement des commandes...");
    \u0275\u0275elementEnd()();
  }
}
function StudentOrderHistoryComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "i", 33);
    \u0275\u0275elementStart(2, "h5", 34);
    \u0275\u0275text(3, "Aucune commande trouv\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 35);
    \u0275\u0275text(5, "Vos achats de cours appara\xEEtront ici.");
    \u0275\u0275elementEnd()();
  }
}
function StudentOrderHistoryComponent_div_31_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 41);
    \u0275\u0275element(5, "img", 42);
    \u0275\u0275elementStart(6, "span", 43);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "td", 35);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 44);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 45);
    \u0275\u0275element(17, "i", 46);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", order_r3.enrollmentId);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r1.getImageUrl(order_r3.courseCoverImage), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r3.courseTitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r3.instructorName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(order_r3.purchaseDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(14, 8, order_r3.amount, "1.2-2"), " \u20AC");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.getStatusClass(order_r3.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getStatusLabel(order_r3.status), " ");
  }
}
function StudentOrderHistoryComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "table", 37)(2, "thead", 38)(3, "tr")(4, "th");
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Instructeur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Montant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Statut");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, StudentOrderHistoryComponent_div_31_tr_17_Template, 19, 11, "tr", 39);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r1.filteredOrders);
  }
}
var StudentOrderHistoryComponent = class _StudentOrderHistoryComponent {
  orderService;
  orders = [];
  filteredOrders = [];
  loading = true;
  errorMessage = "";
  searchValue = "";
  statusFilter = "";
  constructor(orderService) {
    this.orderService = orderService;
  }
  ngOnInit() {
    this.loadOrders();
  }
  loadOrders() {
    this.loading = true;
    this.orderService.getMyOrders().subscribe({
      next: (data) => {
        this.orders = data;
        this.filteredOrders = data;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = "Erreur lors du chargement des commandes.";
        this.loading = false;
      }
    });
  }
  applyFilters() {
    let result = [...this.orders];
    if (this.statusFilter) {
      result = result.filter((o) => o.status === this.statusFilter);
    }
    if (this.searchValue.trim()) {
      const q = this.searchValue.toLowerCase();
      result = result.filter((o) => o.courseTitle.toLowerCase().includes(q) || o.instructorName.toLowerCase().includes(q) || String(o.enrollmentId).includes(q));
    }
    this.filteredOrders = result;
  }
  getImageUrl(path) {
    if (!path)
      return "assets/img/course/course-01.jpg";
    const clean = path.startsWith("/") ? path : "/" + path;
    return `${environment.apiUrl.replace("/api", "")}${clean}`;
  }
  formatDate(dateStr) {
    if (!dateStr)
      return "-";
    return new Date(dateStr).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  }
  getStatusClass(status) {
    switch (status) {
      case "COMPLETED":
        return "bg-success";
      case "PENDING":
        return "bg-warning text-dark";
      case "REFUNDED":
        return "bg-danger";
      default:
        return "bg-secondary";
    }
  }
  getStatusLabel(status) {
    switch (status) {
      case "COMPLETED":
        return "Compl\xE9t\xE9";
      case "PENDING":
        return "En attente";
      case "REFUNDED":
        return "Rembours\xE9";
      default:
        return status;
    }
  }
  getTotalSpent() {
    return this.orders.reduce((sum, o) => sum + (o.amount || 0), 0);
  }
  static \u0275fac = function StudentOrderHistoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentOrderHistoryComponent)(\u0275\u0275directiveInject(OrderService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentOrderHistoryComponent, selectors: [["app-student-order-history"]], decls: 32, vars: 7, consts: [[1, "page-title", "d-flex", "align-items-center", "justify-content-between"], ["class", "alert alert-danger alert-dismissible fade show", 4, "ngIf"], ["class", "row mb-3", 4, "ngIf"], [1, "row"], [1, "col-md-8"], [1, "mb-3"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle", "btn", "rounded", "border", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1", 3, "click"], [1, "col-md-4"], [1, "input-icon", "mb-3"], [1, "input-icon-addon"], [1, "isax", "isax-search-normal-14"], ["type", "search", "placeholder", "Rechercher...", 1, "form-control", "form-control-md", 3, "ngModelChange", "ngModel"], ["class", "text-center py-5", 4, "ngIf"], ["class", "table-responsive custom-table", 4, "ngIf"], [1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "isax", "isax-close-circle", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], [1, "row", "mb-3"], [1, "card", "bg-light"], [1, "card-body", "py-3", "d-flex", "align-items-center"], [1, "earnings-icon", "bg-success", "me-3"], [1, "isax", "isax-dollar-circle4"], [1, "mb-0", "text-muted", "small"], [1, "fw-bold", "text-success", "mb-0"], [1, "earnings-icon", "bg-primary", "me-3"], [1, "isax", "isax-book-1"], [1, "fw-bold", "text-primary", "mb-0"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "mt-2", "text-muted"], [1, "isax", "isax-shopping-cart", 2, "font-size", "3rem", "color", "#ccc"], [1, "text-muted", "mt-3"], [1, "text-muted"], [1, "table-responsive", "custom-table"], [1, "table"], [1, "thead-light"], [4, "ngFor", "ngForOf"], [1, "text-muted", "small"], [1, "d-flex", "align-items-center"], ["alt", "", 1, "rounded", "me-2", 2, "width", "48px", "height", "36px", "object-fit", "cover", 3, "src"], [1, "fw-medium"], [1, "fw-semibold"], [1, "badge", "d-inline-flex", "align-items-center", 3, "ngClass"], [1, "fa-solid", "fa-circle", "fs-10", "me-1"]], template: function StudentOrderHistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h5");
      \u0275\u0275text(2, "Historique des commandes");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(3, StudentOrderHistoryComponent_div_3_Template, 4, 1, "div", 1)(4, StudentOrderHistoryComponent_div_4_Template, 22, 5, "div", 2);
      \u0275\u0275elementStart(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "a", 7);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "ul", 8)(12, "li")(13, "a", 9);
      \u0275\u0275listener("click", function StudentOrderHistoryComponent_Template_a_click_13_listener() {
        ctx.statusFilter = "";
        return ctx.applyFilters();
      });
      \u0275\u0275text(14, "Tous");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "li")(16, "a", 9);
      \u0275\u0275listener("click", function StudentOrderHistoryComponent_Template_a_click_16_listener() {
        ctx.statusFilter = "COMPLETED";
        return ctx.applyFilters();
      });
      \u0275\u0275text(17, "Compl\xE9t\xE9");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "li")(19, "a", 9);
      \u0275\u0275listener("click", function StudentOrderHistoryComponent_Template_a_click_19_listener() {
        ctx.statusFilter = "PENDING";
        return ctx.applyFilters();
      });
      \u0275\u0275text(20, "En attente");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "li")(22, "a", 9);
      \u0275\u0275listener("click", function StudentOrderHistoryComponent_Template_a_click_22_listener() {
        ctx.statusFilter = "REFUNDED";
        return ctx.applyFilters();
      });
      \u0275\u0275text(23, "Rembours\xE9");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(24, "div", 10)(25, "div", 11)(26, "span", 12);
      \u0275\u0275element(27, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "input", 14);
      \u0275\u0275twoWayListener("ngModelChange", function StudentOrderHistoryComponent_Template_input_ngModelChange_28_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchValue, $event) || (ctx.searchValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function StudentOrderHistoryComponent_Template_input_ngModelChange_28_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(29, StudentOrderHistoryComponent_div_29_Template, 4, 0, "div", 15)(30, StudentOrderHistoryComponent_div_30_Template, 6, 0, "div", 15)(31, StudentOrderHistoryComponent_div_31_Template, 18, 1, "div", 16);
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.orders.length > 0);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.statusFilter ? ctx.getStatusLabel(ctx.statusFilter) : "Tous les statuts", " ");
      \u0275\u0275advance(18);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchValue);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredOrders.length === 0 && !ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredOrders.length > 0);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentOrderHistoryComponent, [{
    type: Component,
    args: [{ selector: "app-student-order-history", imports: [CommonModule, FormsModule], template: `
    <div class="page-title d-flex align-items-center justify-content-between">
        <h5>Historique des commandes</h5>
    </div>

    <!-- Alerte erreur -->
    <div *ngIf="errorMessage" class="alert alert-danger alert-dismissible fade show">
        <i class="isax isax-close-circle me-2"></i>{{ errorMessage }}
        <button type="button" class="btn-close" (click)="errorMessage = ''"></button>
    </div>

    <!-- Stat total -->
    <div *ngIf="!loading && orders.length > 0" class="row mb-3">
        <div class="col-md-4">
            <div class="card bg-light">
                <div class="card-body py-3 d-flex align-items-center">
                    <span class="earnings-icon bg-success me-3"><i class="isax isax-dollar-circle4"></i></span>
                    <div>
                        <p class="mb-0 text-muted small">Total d\xE9pens\xE9</p>
                        <h5 class="fw-bold text-success mb-0">{{ getTotalSpent() | number:'1.2-2' }} \u20AC</h5>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card bg-light">
                <div class="card-body py-3 d-flex align-items-center">
                    <span class="earnings-icon bg-primary me-3"><i class="isax isax-book-1"></i></span>
                    <div>
                        <p class="mb-0 text-muted small">Cours achet\xE9s</p>
                        <h5 class="fw-bold text-primary mb-0">{{ orders.length }}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Filtres -->
    <div class="row">
        <div class="col-md-8">
            <div class="mb-3">
                <div class="dropdown">
                    <a href="javascript:void(0);" class="dropdown-toggle btn rounded border d-inline-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
                        {{ statusFilter ? getStatusLabel(statusFilter) : 'Tous les statuts' }}
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end p-3">
                        <li><a href="javascript:void(0);" class="dropdown-item rounded-1" (click)="statusFilter = ''; applyFilters()">Tous</a></li>
                        <li><a href="javascript:void(0);" class="dropdown-item rounded-1" (click)="statusFilter = 'COMPLETED'; applyFilters()">Compl\xE9t\xE9</a></li>
                        <li><a href="javascript:void(0);" class="dropdown-item rounded-1" (click)="statusFilter = 'PENDING'; applyFilters()">En attente</a></li>
                        <li><a href="javascript:void(0);" class="dropdown-item rounded-1" (click)="statusFilter = 'REFUNDED'; applyFilters()">Rembours\xE9</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="input-icon mb-3">
                <span class="input-icon-addon">
                    <i class="isax isax-search-normal-14"></i>
                </span>
                <input [(ngModel)]="searchValue" (ngModelChange)="applyFilters()" type="search" class="form-control form-control-md" placeholder="Rechercher...">
            </div>
        </div>
    </div>

    <!-- Chargement -->
    <div *ngIf="loading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status"></div>
        <p class="mt-2 text-muted">Chargement des commandes...</p>
    </div>

    <!-- Aucune commande -->
    <div *ngIf="!loading && filteredOrders.length === 0 && !errorMessage" class="text-center py-5">
        <i class="isax isax-shopping-cart" style="font-size:3rem; color:#ccc"></i>
        <h5 class="text-muted mt-3">Aucune commande trouv\xE9e</h5>
        <p class="text-muted">Vos achats de cours appara\xEEtront ici.</p>
    </div>

    <!-- Table -->
    <div *ngIf="!loading && filteredOrders.length > 0" class="table-responsive custom-table">
        <table class="table">
            <thead class="thead-light">
                <tr>
                    <th>#</th>
                    <th>Cours</th>
                    <th>Instructeur</th>
                    <th>Date</th>
                    <th>Montant</th>
                    <th>Statut</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let order of filteredOrders; let i = index">
                    <td class="text-muted small">#{{ order.enrollmentId }}</td>
                    <td>
                        <div class="d-flex align-items-center">
                            <img [src]="getImageUrl(order.courseCoverImage)" alt=""
                                 class="rounded me-2" style="width:48px;height:36px;object-fit:cover;">
                            <span class="fw-medium">{{ order.courseTitle }}</span>
                        </div>
                    </td>
                    <td class="text-muted">{{ order.instructorName }}</td>
                    <td>{{ formatDate(order.purchaseDate) }}</td>
                    <td class="fw-semibold">{{ order.amount | number:'1.2-2' }} \u20AC</td>
                    <td>
                        <span class="badge d-inline-flex align-items-center" [ngClass]="getStatusClass(order.status)">
                            <i class="fa-solid fa-circle fs-10 me-1"></i>{{ getStatusLabel(order.status) }}
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
` }]
  }], () => [{ type: OrderService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentOrderHistoryComponent, { className: "StudentOrderHistoryComponent", filePath: "src/app/features/student/student-order-history/student-order-history.component.ts", lineNumber: 13 });
})();
export {
  StudentOrderHistoryComponent
};
//# sourceMappingURL=chunk-N4A7D7SO.js.map
