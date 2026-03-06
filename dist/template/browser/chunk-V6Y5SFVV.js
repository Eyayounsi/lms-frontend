import {
  MatPaginatorModule
} from "./chunk-FMFFEBQA.js";
import {
  CustomPaginationComponent
} from "./chunk-PUV6J7XP.js";
import {
  MatTableDataSource,
  MatTableModule,
  PaginationService
} from "./chunk-CUBDUMMA.js";
import {
  MatSort,
  MatSortModule
} from "./chunk-K7YQ4LBE.js";
import {
  MatSelectModule
} from "./chunk-YSUELB2P.js";
import "./chunk-7Q3BJUUO.js";
import "./chunk-Z42TT3Y4.js";
import "./chunk-LTXOSFWN.js";
import "./chunk-K5NRG4TQ.js";
import "./chunk-PZXI3ZTH.js";
import {
  BsDatepickerModule
} from "./chunk-X7KXZKIQ.js";
import "./chunk-RE3U2CBZ.js";
import {
  DataService
} from "./chunk-44KX7P7T.js";
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
  Router
} from "./chunk-TPKO67I6.js";
import "./chunk-QFZWCWB7.js";
import "./chunk-PXFMCAI3.js";
import {
  CommonModule,
  NgClass
} from "./chunk-YBJXKBE2.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/instructor/instructor-payouts/instructor-payouts.component.ts
var _c0 = () => ({ standalone: true });
function InstructorPayoutsComponent_For_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 64);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span", 65);
    \u0275\u0275element(12, "i", 66);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.amount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.paymentMethod);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r1.status === "Paid" ? "bg-success" : data_r1.status === "Pending" ? "bg-info" : "bg-danger");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.status);
  }
}
var InstructorPayoutsComponent = class _InstructorPayoutsComponent {
  data;
  router;
  pagination;
  routes = routes;
  // pagination variables
  pageSize = 10;
  tableData = [];
  tableDataCopy = [];
  actualData = [];
  currentPage = 1;
  skip = 0;
  limit = this.pageSize;
  serialNumberArray = [];
  totalData = 0;
  pageSelection = [];
  dataSource;
  searchDataValue = "";
  constructor(data, router, pagination) {
    this.data = data;
    this.router = router;
    this.pagination = pagination;
    this.data.getPayout().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.instructor_payouts) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getPayout().subscribe((apiRes) => {
      this.tableData = [];
      this.tableDataCopy = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res, index) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData.push(res);
          this.tableDataCopy.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource(this.actualData);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        tableDataCopy: this.tableDataCopy,
        serialNumberArray: this.serialNumberArray
      });
    });
  }
  searchData(value) {
    if (value == "") {
      this.tableData = this.tableDataCopy;
    } else {
      this.dataSource.filter = value.trim().toLowerCase();
      this.tableData = this.dataSource.filteredData;
    }
  }
  sortData(sort) {
    const data = this.tableData.slice();
    if (!sort.active || sort.direction === "") {
      this.tableData = data;
    } else {
      this.tableData = data.sort((a, b) => {
        const aValue = a[sort.active];
        const bValue = b[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === "asc" ? 1 : -1);
      });
    }
  }
  changePageSize(pageSize) {
    this.pageSelection = [];
    this.limit = pageSize;
    this.skip = 0;
    this.currentPage = 1;
    this.pagination.tablePageSize.next({
      skip: this.skip,
      limit: this.limit,
      pageSize: this.pageSize
    });
  }
  static \u0275fac = function InstructorPayoutsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorPayoutsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorPayoutsComponent, selectors: [["app-instructor-payouts"]], decls: 137, vars: 3, consts: [[1, "payouts"], [1, "alert", "alert-warning", "alert-dismissible", "d-flex", "fade", "show", "mb-4"], [1, "isax", "isax-information4", "flex-shrink-0", "me-2"], ["type", "button", "data-bs-dismiss", "alert", "aria-label", "Close", 1, "btn-close"], [1, "isax", "isax-close-circle5"], [1, "row", "mb-4"], [1, "col-xl-5"], [1, "earning-this-month", "border"], ["src", "./assets/img/shapes/withdraw-bg1.svg", "alt", "img", 1, "earning-bg1"], ["src", "./assets/img/shapes/withdraw-bg2.svg", "alt", "img", 1, "earning-bg2"], [1, "flex-shrink-0", "earn-img"], ["src", "./assets/img/icons/icon-2.svg", "alt", "img", 1, "img-fluid"], [1, "ps-3"], [1, "mb-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#withdraw-req", 1, "btn", "btn-dark"], [1, "col-xl-7"], [1, "mb-3"], [1, "payment-method"], [1, "row", "g-3"], [1, "col-lg-6"], ["type", "radio", "name", "btnradio", "id", "btnradio1", "checked", "", 1, "btn-check"], ["for", "btnradio1", 1, "btn", "bg-white", "btn-check-label", "w-100", "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "align-items-center"], [1, "check-outer", "me-2"], ["src", "assets/img/icons/paypal.svg", "alt", "img"], ["type", "radio", "name", "btnradio", "id", "btnradio2", 1, "btn-check"], ["for", "btnradio2", 1, "btn", "btn-check-label", "bg-white", "w-100", "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "align-items-center", "fs-16", "fw-medium"], [1, "page-title"], [1, "table-top"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "dropdown", "me-3"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle", "btn", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "col-md-4"], [1, "input-icon", "mb-3"], [1, "input-icon-addon"], [1, "isax", "isax-search-normal-14"], ["type", "search", "placeholder", "Search", 1, "form-control", "form-control-md", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "table-responsive", "custom-table"], ["matSort", "", 1, "table", 3, "matSortChange"], [1, "thead-light"], ["id", "withdraw-req", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-md"], [1, "modal-content"], [1, "modal-header"], [1, "fw-bold"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "custom-btn-close"], [1, "modal-body", "pb-0"], [1, "card", "mb-3"], [1, "card-body"], [1, "row"], [1, "col-6"], [1, "fs-16"], [1, "form-label"], [1, "text-danger", "ms-1"], ["type", "text", "value", "$ ", 1, "form-control"], [1, "form-info"], [1, "isax", "isax-info-circle"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "bg-gray-100", "rounded-pill", "me-2"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "rounded-pill"], ["href", "javascript:void(0);", 1, "text-primary"], [1, "badge", "badge-sm", "d-inline-flex", "align-items-center", 3, "ngClass"], [1, "fa-solid", "fa-circle", "fs-5", "me-1"]], template: function InstructorPayoutsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "i", 2);
      \u0275\u0275text(3, 'Your selected payout method was confirmed on Next Payout on 15 Jan, 2025 for "payout@example.com" ');
      \u0275\u0275elementStart(4, "button", 3);
      \u0275\u0275element(5, "i", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "div", 7);
      \u0275\u0275element(9, "img", 8)(10, "img", 9);
      \u0275\u0275elementStart(11, "div", 10);
      \u0275\u0275element(12, "img", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 12)(14, "h6", 13);
      \u0275\u0275text(15, "Earning this month");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "h5");
      \u0275\u0275text(17, "$8,420");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p");
      \u0275\u0275text(19, "Update your payout in settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "a", 14);
      \u0275\u0275text(21, "Withdraw");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 15)(23, "h6", 16);
      \u0275\u0275text(24, "Select Payment Gateway for Payout");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 17)(26, "div", 18)(27, "div", 19)(28, "div");
      \u0275\u0275element(29, "input", 20);
      \u0275\u0275elementStart(30, "label", 21)(31, "span", 22)(32, "span", 23);
      \u0275\u0275element(33, "i");
      \u0275\u0275elementEnd();
      \u0275\u0275element(34, "img", 24);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(35, "div", 19)(36, "div");
      \u0275\u0275element(37, "input", 25);
      \u0275\u0275elementStart(38, "label", 26)(39, "span", 27)(40, "span", 23);
      \u0275\u0275element(41, "i");
      \u0275\u0275elementEnd();
      \u0275\u0275text(42, "Bank Transfer");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(43, "h5", 28);
      \u0275\u0275text(44, "Payouts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 29)(46, "div", 30)(47, "div", 31)(48, "div", 22)(49, "div", 16)(50, "div", 32)(51, "a", 33);
      \u0275\u0275text(52, " Payment Method ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "ul", 34)(54, "li")(55, "a", 35);
      \u0275\u0275text(56, "Paypal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "li")(58, "a", 35);
      \u0275\u0275text(59, "Bank Transfer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "li")(61, "a", 35);
      \u0275\u0275text(62, "Stripe");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(63, "div", 16)(64, "div", 32)(65, "a", 33);
      \u0275\u0275text(66, " Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "ul", 34)(68, "li")(69, "a", 35);
      \u0275\u0275text(70, "Paid");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "li")(72, "a", 35);
      \u0275\u0275text(73, "Pending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "li")(75, "a", 35);
      \u0275\u0275text(76, "Cancel");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(77, "div", 36)(78, "div", 37)(79, "span", 38);
      \u0275\u0275element(80, "i", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "input", 40);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorPayoutsComponent_Template_input_ngModelChange_81_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function InstructorPayoutsComponent_Template_input_ngModelChange_81_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(82, "div", 41)(83, "table", 42);
      \u0275\u0275listener("matSortChange", function InstructorPayoutsComponent_Template_table_matSortChange_83_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(84, "thead", 43)(85, "tr")(86, "th");
      \u0275\u0275text(87, "ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "th");
      \u0275\u0275text(89, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "th");
      \u0275\u0275text(91, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "th");
      \u0275\u0275text(93, "Payment Method");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "th");
      \u0275\u0275text(95, "Status");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(96, "tbody");
      \u0275\u0275repeaterCreate(97, InstructorPayoutsComponent_For_98_Template, 14, 6, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(99, "app-custom-pagination");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "div", 44)(101, "div", 45)(102, "div", 46)(103, "div", 47)(104, "h5", 48);
      \u0275\u0275text(105, "Withdrawal Request");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "button", 49);
      \u0275\u0275element(107, "i", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "form")(109, "div", 50)(110, "div", 51)(111, "div", 52)(112, "div", 53)(113, "div", 54)(114, "p", 13);
      \u0275\u0275text(115, "Withdrawal Balance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "h6", 55);
      \u0275\u0275text(117, "$5340");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(118, "div", 54)(119, "p", 13);
      \u0275\u0275text(120, "Selected");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "h6", 55);
      \u0275\u0275text(122, "PayPal");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(123, "div", 16)(124, "label", 56);
      \u0275\u0275text(125, "Amount");
      \u0275\u0275elementStart(126, "span", 57);
      \u0275\u0275text(127, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(128, "input", 58);
      \u0275\u0275elementStart(129, "p", 59);
      \u0275\u0275element(130, "i", 60);
      \u0275\u0275text(131, "Minimum withdraw amount is $50");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(132, "div", 61)(133, "button", 62);
      \u0275\u0275text(134, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "button", 63);
      \u0275\u0275text(136, "Submit");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(81);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(2, _c0));
      \u0275\u0275advance(16);
      \u0275\u0275repeater(ctx.tableData);
    }
  }, dependencies: [CommonModule, NgClass, MatTableModule, MatSortModule, MatSort, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatPaginatorModule, MatSelectModule, BsDatepickerModule, CustomPaginationComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorPayoutsComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-payouts", imports: [CommonModule, MatTableModule, MatSortModule, FormsModule, MatPaginatorModule, MatSelectModule, BsDatepickerModule, CustomPaginationComponent], template: `
    <div class="payouts">
    <div class="alert alert-warning alert-dismissible d-flex fade show mb-4">
        <i class="isax isax-information4 flex-shrink-0 me-2"></i>Your selected payout method was confirmed on Next Payout on 15 Jan, 2025 for "payout&#64;example.com"
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="isax isax-close-circle5"></i></button>
    </div>
    <div class="row mb-4">
        <div class="col-xl-5">
        <div class="earning-this-month border">
            <img src="./assets/img/shapes/withdraw-bg1.svg" class="earning-bg1" alt="img">
            <img src="./assets/img/shapes/withdraw-bg2.svg" class="earning-bg2" alt="img">
            <div class="flex-shrink-0 earn-img">
                <img class="img-fluid" src="./assets/img/icons/icon-2.svg" alt="img">
            </div>
        <div class="ps-3">
            <h6 class="mb-2">Earning this month</h6>
            <h5>$8,420</h5>
            <p>Update your payout in settings</p>
        </div>
        <a href="javascript:void(0);" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#withdraw-req">Withdraw</a>
        </div>
        </div>
        <div class="col-xl-7">
            <h6 class="mb-3">Select Payment Gateway for Payout</h6> 
            <div class="payment-method">
                <div class="row g-3">
                    <div class="col-lg-6">
                        <div>
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" checked="">
                            <label class="btn bg-white btn-check-label w-100 d-flex justify-content-between align-items-center" for="btnradio1">
                                <span class="d-flex align-items-center"><span class="check-outer me-2"><i></i></span><img src="assets/img/icons/paypal.svg" alt="img"></span>
                                
                            </label>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div>
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio2">
                            <label class="btn btn-check-label bg-white w-100 d-flex justify-content-between align-items-center" for="btnradio2">
                                <span class="d-flex align-items-center fs-16 fw-medium"><span class="check-outer me-2"><i></i></span>Bank Transfer</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>                           
        </div>
    </div>
    <h5 class="page-title">Payouts</h5>
    <div class="table-top">
    <div class="row align-items-center">
        <div class="col-md-8">
            <div class="d-flex align-items-center">
                <div class="mb-3">
                    <div class="dropdown me-3">
                        <a href="javascript:void(0);" class="dropdown-toggle btn d-inline-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
                            Payment Method
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item rounded-1">Paypal</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item rounded-1">Bank Transfer</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item rounded-1">Stripe</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="mb-3">
                    <div class="dropdown me-3">
                        <a href="javascript:void(0);" class="dropdown-toggle btn d-inline-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
                        Status
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item rounded-1">Paid</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item rounded-1">Pending</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item rounded-1">Cancel</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="input-icon mb-3">
                <span class="input-icon-addon">
                    <i class="isax isax-search-normal-14"></i>
                </span>
                <input  [(ngModel)]="searchDataValue" [ngModelOptions]="{ standalone: true }" type="search" (ngModelChange)="searchData(searchDataValue)" class="form-control form-control-md" placeholder="Search">
            </div>
        </div>
    </div>
   </div>
   <div class="table-responsive custom-table">
    <table matSort (matSortChange)="sortData($event)" class="table">
        <thead class="thead-light">
            <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            @for (data of tableData;track data){
            <tr>
                <td><a href="javascript:void(0);" class="text-primary">{{data.id}}</a></td>
                <td>{{data.date}}</td>
                <td>{{data.amount}}</td>
                <td>{{data.paymentMethod}}</td>
                <td><span class="badge badge-sm d-inline-flex align-items-center" [ngClass]="data.status==='Paid'?'bg-success':data.status==='Pending'?'bg-info':'bg-danger'"><i class="fa-solid fa-circle fs-5 me-1"></i>{{data.status}}</span></td>
            </tr>
        }
        </tbody>
    </table>
</div>
            <!-- /pagination -->
    <app-custom-pagination/>
    <!-- /pagination -->
</div>

<div class="modal fade" id="withdraw-req">
    <div class="modal-dialog modal-dialog-centered modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="fw-bold">Withdrawal Request</h5>
                <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                    <i class="isax isax-close-circle5"></i>
                </button>
            </div>
            <form>
                <div class="modal-body pb-0">
                    <div class="card mb-3">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-6">
                                    <p class="mb-2">Withdrawal Balance</p>
                                    <h6 class="fs-16">$5340</h6>
                                </div>
                                <div class="col-6">
                                    <p class="mb-2">Selected</p>
                                    <h6 class="fs-16">PayPal</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Amount<span class="text-danger ms-1">*</span></label>
                        <input type="text" class="form-control" value="$ ">
                        <p class="form-info"><i class="isax isax-info-circle"></i>Minimum withdraw amount is $50</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn bg-gray-100 rounded-pill me-2" type="button" data-bs-dismiss="modal">Cancel</button>
                    <button class="btn btn-secondary rounded-pill" type="submit" data-bs-dismiss="modal">Submit</button>
                </div>
            </form>
        </div>
    </div>
</div>` }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorPayoutsComponent, { className: "InstructorPayoutsComponent", filePath: "src/app/features/instructor/instructor-payouts/instructor-payouts.component.ts", lineNumber: 23 });
})();
export {
  InstructorPayoutsComponent
};
//# sourceMappingURL=chunk-V6Y5SFVV.js.map
