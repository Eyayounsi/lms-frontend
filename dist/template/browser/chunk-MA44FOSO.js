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
  DataService
} from "./chunk-44KX7P7T.js";
import {
  routes
} from "./chunk-E6TQA5KL.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-VF2E3YWR.js";
import {
  Router,
  RouterLink
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
  ɵɵnextContext,
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

// src/app/features/instructor/instructor-statements/instructor-statements.component.ts
var _c0 = () => ({ standalone: true });
function InstructorStatementsComponent_For_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 75)(2, "a", 76);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "a", 77);
    \u0275\u0275text(6);
    \u0275\u0275element(7, "br");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 78);
    \u0275\u0275element(17, "i", 47);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td")(20, "div", 5)(21, "a", 79);
    \u0275\u0275element(22, "i", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "a", 81);
    \u0275\u0275element(24, "i", 82);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r1.orderId);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r1.routes.courseDetails);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r1.course);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.break);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.amount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.paymentMethod);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r1.status === "Completed" ? " bg-success" : "bg-info");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.status);
  }
}
var InstructorStatementsComponent = class _InstructorStatementsComponent {
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
    this.data.getInstructionStatement().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.instructorStatements) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getInstructionStatement().subscribe((apiRes) => {
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
  static \u0275fac = function InstructorStatementsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorStatementsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorStatementsComponent, selectors: [["app-instructor-statements"]], decls: 199, vars: 3, consts: [[1, "statements"], [1, "page-title"], [1, "table-top"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "d-flex", "align-items-center"], [1, "mb-3"], [1, "dropdown", "me-3"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle", "btn", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "col-md-4"], [1, "input-icon", "mb-3"], [1, "input-icon-addon"], [1, "isax", "isax-search-normal-14"], ["type", "search", "placeholder", "Search", 1, "form-control", "form-control-md", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "table-responsive", "custom-table"], ["matSort", "", 1, "table", 3, "matSortChange"], [1, "thead-light"], ["id", "view_invoice", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "custom-btn-close"], [1, "isax", "isax-close-circle5"], [1, "modal-body"], [1, "border-bottom", "mb-3"], [1, "row", "justify-content-between", "align-items-center", "flex-wrap", "row-gap-4"], [1, "col-md-6"], [1, "mb-2", "invoice-logo-white"], ["src", "assets/img/logo.svg", "alt", "logo", 1, "img-fluid"], [1, "mb-2"], [1, "text-end", "mb-3"], [1, "text-default", "mb-1", "text-secondary", "fs-16"], [1, "mb-1"], [1, "text-gray-9"], [1, "row", "g-4"], [1, "col-lg-5"], [1, "mb-3", "d-flex"], [1, "mb-2", "fs-16"], [1, "fs-14", "mb-1"], [1, "fs-14"], ["href", "javascript:void(0);"], [1, "col-lg-2"], [1, "mb-3", "text-end"], [1, "mb-1", "d-block"], [1, "badge", "bg-success", "badge-md", "d-inline-flex", "align-items-center", "fs-10", "fw-normal", "mb-4"], [1, "fa-solid", "fa-circle", "fs-5", "me-1"], ["src", "assets/img/icon/qr.svg", "alt", "QR", 1, "img-fluid"], [1, "table-responsive"], [1, "table", "invoice-table"], [1, "w-50", "bg-light-400"], [1, "text-center", "bg-light-400"], [1, "text-end", "bg-light-400"], [1, "text-gray", "text-center"], [1, "text-gray", "text-end"], [1, "border-bottom", "mb-3", "pb-3"], [1, "row"], [1, "d-flex", "justify-content-between", "align-items-center", "border-bottom", "my-2", "pb-2", "pe-3"], [1, "text-gray", "mb-0"], [1, "text-gray-9", "fw-medium"], [1, "mb-0"], [1, "text-gray-9", "fs-14", "fw-medium"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3", "pe-3"], [1, "text-gray-9", "fs-14", "fw-medium", "mb-2"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2", "pe-3"], [1, "fs-16"], [1, "row", "align-items-center", "gy-3"], [1, "col-lg-9"], [1, "mb-1", "fs-16"], [1, "col-md-3"], [1, "text-end", "pe-4", "mb-2"], ["src", "assets/img/icons/sign.svg", "alt", "sign", 1, "img-fluid"], [1, "text-end"], [1, "fs-16", "pe-3", "mb-2"], [1, "order"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view_invoice"], [3, "routerLink"], [1, "badge", "badge-sm", "d-inline-flex", "align-items-center", 3, "ngClass"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view_invoice", 1, "d-inline-flex", "fs-14", "me-1", "action-icon"], [1, "isax", "isax-eye"], ["href", "javascript:void(0);", 1, "d-inline-flex", "fs-14", "action-icon"], [1, "isax", "isax-import"]], template: function InstructorStatementsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h5", 1);
      \u0275\u0275text(2, "Statements");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "a", 8);
      \u0275\u0275text(10, " Payment Method ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "ul", 9)(12, "li")(13, "a", 10);
      \u0275\u0275text(14, "Paypal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "li")(16, "a", 10);
      \u0275\u0275text(17, "Bank Transfer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "li")(19, "a", 10);
      \u0275\u0275text(20, "Stripe");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(21, "div", 6)(22, "div", 7)(23, "a", 8);
      \u0275\u0275text(24, " Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "ul", 9)(26, "li")(27, "a", 10);
      \u0275\u0275text(28, "Completed");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "li")(30, "a", 10);
      \u0275\u0275text(31, "Pending");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(32, "div", 11)(33, "div", 12)(34, "span", 13);
      \u0275\u0275element(35, "i", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorStatementsComponent_Template_input_ngModelChange_36_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function InstructorStatementsComponent_Template_input_ngModelChange_36_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(37, "div", 16)(38, "table", 17);
      \u0275\u0275listener("matSortChange", function InstructorStatementsComponent_Template_table_matSortChange_38_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(39, "thead", 18)(40, "tr")(41, "th");
      \u0275\u0275text(42, "Order ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "th");
      \u0275\u0275text(44, "Course");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "th");
      \u0275\u0275text(46, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "th");
      \u0275\u0275text(48, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "th");
      \u0275\u0275text(50, "Payment Method");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "th");
      \u0275\u0275text(52, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(53, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "tbody");
      \u0275\u0275repeaterCreate(55, InstructorStatementsComponent_For_56_Template, 25, 9, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(57, "app-custom-pagination");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 19)(59, "div", 20)(60, "div", 21)(61, "div", 22)(62, "h5");
      \u0275\u0275text(63, "Invoice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "button", 23);
      \u0275\u0275element(65, "i", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 25)(67, "div", 26)(68, "div", 27)(69, "div", 28)(70, "div", 29);
      \u0275\u0275element(71, "img", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "p", 31);
      \u0275\u0275text(73, "3099 Kennedy Court Framingham, MA 01702");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "div", 28)(75, "div", 32)(76, "h6", 33);
      \u0275\u0275text(77, "#OI0010");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "p", 34);
      \u0275\u0275text(79, "Created Date : ");
      \u0275\u0275elementStart(80, "span", 35);
      \u0275\u0275text(81, "Aug 25, 2025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "p");
      \u0275\u0275text(83, "Due Date : ");
      \u0275\u0275elementStart(84, "span", 35);
      \u0275\u0275text(85, "Aug 30, 2025");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(86, "div", 26)(87, "div", 36)(88, "div", 37)(89, "span", 38);
      \u0275\u0275text(90, "From");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "div")(92, "h6", 39);
      \u0275\u0275text(93, "Thomas Lawler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "p", 40);
      \u0275\u0275text(95, "2077 Chicago Avenue Orosi, CA 93647");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "p", 40);
      \u0275\u0275text(97, "Email :thomaslawler@example.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "p", 41);
      \u0275\u0275text(99, "Phone : +1 987 654 3210");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(100, "div", 37)(101, "span", 38);
      \u0275\u0275text(102, "To");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "div")(104, "h6", 31);
      \u0275\u0275text(105, "Ronald Richard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "p", 40);
      \u0275\u0275text(107, "3103 Trainer Avenue Peoria, IL 61602");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "p", 40);
      \u0275\u0275text(109, "Email : ");
      \u0275\u0275elementStart(110, "a", 42);
      \u0275\u0275text(111, "adre3@example.com");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(112, "p", 41);
      \u0275\u0275text(113, "Phone : ");
      \u0275\u0275elementStart(114, "a", 42);
      \u0275\u0275text(115, "+1 987 471 6589");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(116, "div", 43)(117, "div", 44)(118, "span", 45);
      \u0275\u0275text(119, "Payment Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "span", 46);
      \u0275\u0275element(121, "i", 47);
      \u0275\u0275text(122, "Completed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "div");
      \u0275\u0275element(124, "img", 48);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(125, "div")(126, "div", 49)(127, "table", 50)(128, "thead", 18)(129, "tr")(130, "th", 51);
      \u0275\u0275text(131, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "th", 52);
      \u0275\u0275text(133, "Qty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "th", 53);
      \u0275\u0275text(135, "Cost");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "th", 53);
      \u0275\u0275text(137, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "th", 53);
      \u0275\u0275text(139, "Total");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(140, "tbody")(141, "tr")(142, "td")(143, "p", 35);
      \u0275\u0275text(144, "Information About UI/UX Design Degree");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(145, "td", 54);
      \u0275\u0275text(146, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "td", 55);
      \u0275\u0275text(148, "$120");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "td", 55);
      \u0275\u0275text(150, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "td", 55);
      \u0275\u0275text(152, "$120");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(153, "div", 56)(154, "div", 57);
      \u0275\u0275element(155, "div", 28);
      \u0275\u0275elementStart(156, "div", 28)(157, "div", 58)(158, "p", 59);
      \u0275\u0275text(159, "Sub Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "p", 60);
      \u0275\u0275text(161, "$120");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(162, "div", 58)(163, "p", 61);
      \u0275\u0275text(164, "Discount (0%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "p", 62);
      \u0275\u0275text(166, "$0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(167, "div", 63)(168, "p", 61);
      \u0275\u0275text(169, "VAT (5%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "p", 64);
      \u0275\u0275text(171, "$0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(172, "div", 65)(173, "h6", 66);
      \u0275\u0275text(174, "Total Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "h6", 66);
      \u0275\u0275text(176, "$120");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(177, "p");
      \u0275\u0275text(178, " Amount in Words : Dollar One Hundred Twenty ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(179, "div", 67)(180, "div", 68)(181, "div", 6)(182, "h6", 69);
      \u0275\u0275text(183, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "p");
      \u0275\u0275text(185, "Invoice for course purchase, covering course fee, discounts, and applicable taxes.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(186, "div")(187, "h6", 69);
      \u0275\u0275text(188, "Terms and Conditions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(189, "p");
      \u0275\u0275text(190, "Full payment grants non-transferable access to the course, subject to the provider\u2019s refund policy. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(191, "div", 70)(192, "div", 71);
      \u0275\u0275element(193, "img", 72);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(194, "div", 73)(195, "h6", 74);
      \u0275\u0275text(196, "Ted M. Davis");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(197, "p");
      \u0275\u0275text(198, "Assistant Manager");
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(36);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(2, _c0));
      \u0275\u0275advance(19);
      \u0275\u0275repeater(ctx.tableData);
    }
  }, dependencies: [CommonModule, NgClass, MatTableModule, MatSortModule, MatSort, MatPaginatorModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink, MatSelectModule, CustomPaginationComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorStatementsComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-statements", imports: [CommonModule, MatTableModule, MatSortModule, MatPaginatorModule, FormsModule, RouterLink, MatSelectModule, CustomPaginationComponent], template: `
    <div class="statements">
    <h5 class="page-title">Statements</h5>
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
                                <a href="javascript:void(0);" class="dropdown-item rounded-1">Completed</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item rounded-1">Pending</a>
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
                <th>Order ID</th>
                <th>Course</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>Status</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            @for (data of tableData;track data){
            <tr>
                <td class="order"><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_invoice">{{data.orderId}}</a></td>
                <td><a [routerLink]="routes.courseDetails">{{data.course}}<br>{{data.break}}</a></td>
                <td>{{data.date}}</td>
                <td>{{data.amount}}</td>
                <td>{{data.paymentMethod}}</td>
                <td><span class="badge badge-sm d-inline-flex align-items-center" [ngClass]="data.status==='Completed'?' bg-success':'bg-info'"><i class="fa-solid fa-circle fs-5 me-1"></i>{{data.status}}</span></td>
                <td>
                    <div class="d-flex align-items-center">
                        <a href="javascript:void(0);" class="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#view_invoice"><i class="isax isax-eye"></i></a>
                        <a href="javascript:void(0);" class="d-inline-flex fs-14 action-icon"><i class="isax isax-import"></i></a>
                    </div>
                </td>
            </tr>
        }
            
        </tbody>
    </table>
</div>
<app-custom-pagination/>
</div>


<div class="modal fade" id="view_invoice">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5>Invoice</h5>
                <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                    <i class="isax isax-close-circle5"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="border-bottom mb-3">
                    <div class="row justify-content-between align-items-center flex-wrap row-gap-4">
                        <div class="col-md-6">
                            <div class="mb-2 invoice-logo-white">
                                <img src="assets/img/logo.svg" class="img-fluid" alt="logo">
                            </div>
                            <p class="mb-2">3099 Kennedy Court Framingham, MA 01702</p>
                        </div>
                        <div class="col-md-6">
                            <div class=" text-end mb-3">
                                <h6 class="text-default mb-1 text-secondary fs-16">#OI0010</h6>
                                <p class="mb-1">Created Date : <span class="text-gray-9">Aug 25, 2025</span> </p>
                                <p>Due Date : <span class="text-gray-9">Aug 30, 2025</span> </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border-bottom mb-3">
                    <div class="row g-4">
                        <div class="col-lg-5">
                            <span class="mb-3 d-flex">From</span>
                            <div>
                                <h6 class="mb-2 fs-16">Thomas Lawler</h6>
                                <p class="fs-14 mb-1">2077 Chicago Avenue Orosi, CA 93647</p>
                                <p class="fs-14 mb-1">Email :thomaslawler&#64;example.com</p>
                                <p class="fs-14">Phone : +1 987 654 3210</p>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <span class="mb-3 d-flex">To</span>
                            <div>
                                <h6 class="mb-2">Ronald Richard</h6>
                                <p class="fs-14 mb-1">3103 Trainer Avenue Peoria, IL 61602</p>
                                <p class="fs-14 mb-1">Email : <a href="javascript:void(0);">adre3&#64;example.com</a></p>
                                <p class="fs-14">Phone : <a href="javascript:void(0);">+1 987 471 6589</a></p>
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <div class="mb-3 text-end">
                                <span class="mb-1 d-block">Payment Status</span>
                                <span class="badge bg-success badge-md d-inline-flex align-items-center fs-10 fw-normal mb-4"><i class="fa-solid fa-circle fs-5 me-1"></i>Completed</span>
                                <div>
                                    <img src="assets/img/icon/qr.svg" class="img-fluid" alt="QR">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="table-responsive">
                        <table class="table invoice-table">
                            <thead class="thead-light">
                                <tr>
                                    <th class="w-50 bg-light-400">Description</th>
                                    <th class="text-center bg-light-400">Qty</th>
                                    <th class="text-end bg-light-400">Cost</th>
                                    <th class="text-end bg-light-400">Discount</th>
                                    <th class="text-end bg-light-400">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <p class="text-gray-9">Information About UI/UX Design Degree</p>
                                    </td>
                                    <td class="text-gray text-center">1</td>
                                    <td class="text-gray text-end">$120</td>
                                    <td class="text-gray text-end">$0</td>
                                    <td class="text-gray text-end">$120</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="border-bottom mb-3 pb-3">
                    <div class="row">
                        <div class="col-md-6"></div>
                        <div class="col-md-6">
                            <div class="d-flex justify-content-between align-items-center border-bottom my-2 pb-2 pe-3">
                                <p class="text-gray mb-0">Sub Total</p>
                                <p class="text-gray-9 fw-medium">$120</p>
                            </div>
                            <div class="d-flex justify-content-between align-items-center border-bottom my-2 pb-2 pe-3">
                                <p class="mb-0">Discount (0%)</p>
                                <p class="text-gray-9 fs-14 fw-medium">$0</p>
                            </div>
                            <div class="d-flex justify-content-between align-items-center mb-3 pe-3">
                                <p class="mb-0">VAT (5%)</p>
                                <p class="text-gray-9 fs-14 fw-medium mb-2">$0</p>
                            </div>
                            <div class="d-flex justify-content-between align-items-center mb-2 pe-3">
                                <h6 class="fs-16">Total Amount</h6>
                                <h6 class="fs-16">$120</h6>
                            </div>
                            <p>
                                Amount in Words : Dollar One Hundred Twenty 
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center gy-3">
                    <div class="col-lg-9">
                        <div class="mb-3">
                            <h6 class="mb-1 fs-16">Notes</h6>
                            <p>Invoice for course purchase, covering course fee, discounts, and applicable taxes.</p>
                        </div>
                        <div>
                            <h6 class="mb-1 fs-16">Terms and Conditions</h6>
                            <p>Full payment grants non-transferable access to the course, subject to the provider\u2019s refund policy. </p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="text-end pe-4 mb-2">
                            <img src="assets/img/icons/sign.svg" class="img-fluid" alt="sign">
                        </div>
                        <div class="text-end">
                            <h6 class="fs-16 pe-3 mb-2">Ted M. Davis</h6>
                            <p>Assistant Manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>` }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorStatementsComponent, { className: "InstructorStatementsComponent", filePath: "src/app/features/instructor/instructor-statements/instructor-statements.component.ts", lineNumber: 21 });
})();
export {
  InstructorStatementsComponent
};
//# sourceMappingURL=chunk-MA44FOSO.js.map
