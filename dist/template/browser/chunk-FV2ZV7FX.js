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
  MatSortModule
} from "./chunk-K7YQ4LBE.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-YSUELB2P.js";
import "./chunk-7Q3BJUUO.js";
import "./chunk-Z42TT3Y4.js";
import "./chunk-LTXOSFWN.js";
import "./chunk-K5NRG4TQ.js";
import "./chunk-PZXI3ZTH.js";
import {
  BsDatepickerDirective,
  BsDatepickerInputDirective,
  BsDatepickerModule
} from "./chunk-X7KXZKIQ.js";
import "./chunk-RE3U2CBZ.js";
import {
  DataService
} from "./chunk-44KX7P7T.js";
import {
  routes
} from "./chunk-E6TQA5KL.js";
import "./chunk-VF2E3YWR.js";
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
  ɵɵtextInterpolate
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/instructor/settings/instructor-plans/instructor-plans.component.ts
var _c0 = () => ({ adaptivePosition: true });
function InstructorPlansComponent_For_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 104);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "a", 180);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 181);
    \u0275\u0275element(17, "i", 128);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td")(20, "div", 182)(21, "a", 183);
    \u0275\u0275element(22, "i", 184);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "a", 185);
    \u0275\u0275element(24, "i", 186);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r1.orderId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r1.planName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.paymentMethod);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.subscribedOn);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.lastDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.amount);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r1.status === "Pending" ? "bg-skyblue" : data_r1.status === "Cancelled" ? "bg-danger" : "bg-success");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.status);
  }
}
var InstructorPlansComponent = class _InstructorPlansComponent {
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
    this.data.getInstructionPlan().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.instructorPlans) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getInstructionPlan().subscribe((apiRes) => {
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
  password = [false, false];
  // Add more as needed
  togglePassword(index) {
    this.password[index] = !this.password[index];
  }
  static \u0275fac = function InstructorPlansComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorPlansComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorPlansComponent, selectors: [["app-instructor-plans"]], decls: 845, vars: 8, consts: [[1, "row"], [1, "col-xl-5"], [1, "card", "mb-3"], [1, "card-body"], [1, "d-flex", "justify-content-between", "align-items-center", "border-bottom", "pb-3"], [1, "fs-18"], ["href", "javascript:void(0);", 1, "btn", "download-btn", "fs-12"], [1, "d-flex", "align-items-center", "justify-content-between", "border-bottom", "mb-3", "py-4"], [1, "mb-1"], [1, "fs-14"], [1, "justify-content-end", "d-flex", "row-gap-2", "flex-wrap"], ["type", "button", 1, "btn", "bg-gray-100", "rounded-pill", "me-1", "fs-12"], ["data-bs-toggle", "modal", "data-bs-target", "#pricing-plan", "type", "submit", 1, "btn", "btn-secondary", "rounded-pill", "fs-12"], [1, "col-xl-7"], [1, "card", "saved-card-items", "p-0", "mb-3"], [1, "d-flex", "flex-wrap", "gap-2", "justify-content-between", "align-items-center", "border-bottom", "mb-3", "pb-3"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_new_card", 1, "btn", "btn-secondary", "fs-12"], [1, "isax", "isax-add-circle", "me-1"], [1, "row", "row-gap-3"], [1, "col-sm-6", "px-2"], [1, "border", "rounded", "p-3"], [1, "d-flex", "align-items-center", "mb-3"], [1, "border", "p-2", "rounded", "flex-shrink-0", "me-2"], ["src", "./assets/img/icons/visa-logo.svg", "alt", "img"], [1, "d-flex", "align-items-center", "justify-content-between"], ["href", "javascript:void(0);", 1, "btn", "btn-secondary", "fs-12"], [1, "d-flex", "gap-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_card", 1, "fs-14", "text-gray-5", "action-icon"], [1, "isax", "isax-edit"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "fs-14", "text-gray-5", "action-icon"], [1, "isax", "isax-trash"], ["src", "./assets/img/icons/Mastercard.svg", "alt", "img"], [1, "d-flex", "align-items-center", "justify-content-between", "mt-4"], ["href", "javascript:void(0);", 1, "fs-14", "text-secondary", "text-decoration-underline", "fw-normal"], [1, "d-flex", "flex-wrap", "gap-2", "align-items-center", "justify-content-between", "p-3"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle", "text-gray-6", "btn", "rounded", "border", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "table-responsive", "custom-table"], [1, "table"], [1, "thead-light"], ["id", "pricing-plan", 1, "modal", "fade", "pricing-modal"], [1, "modal-dialog", "modal-dialog-centered", "modal-xl"], [1, "modal-content"], [1, "modal-header"], [1, "fw-bold"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "custom-btn-close"], [1, "isax", "isax-close-circle5"], [1, "modal-body"], [1, "enable-item", "mb-3", "d-flex", "align-items-center", "justify-content-center", "text-gray-9"], [1, "mb-0", "me-2", "fs-14"], [1, "form-check", "form-switch", "check-on", "m-0"], ["type", "checkbox", "id", "flexSwitchCheckChecked", 1, "form-check-input"], [1, "mb-0", "ms-2", "fs-14"], [1, "row", "row-gap-4"], [1, "col-xl-4", "col-lg-6", "d-flex"], [1, "pricing-item", "flex-fill"], [1, "mb-2"], [1, "mb-2", "text-primary"], [1, "me-1"], [1, "fw-normal"], [1, "border-top", "pt-3", "mt-3"], [1, "d-flex", "align-items-center", "mb-2"], [1, "fa-solid", "fa-circle", "fs-5", "me-2"], [1, "d-flex", "align-items-center", "mb-0"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#pricing-plan-two", 1, "btn", "btn-secondary", "w-100", "mt-3"], [1, "isax", "isax-arrow-right-3", "fs-10", "ms-1"], ["id", "pricing-plan-two", 1, "modal", "fade", "pricing-modal"], [1, "col-lg-8"], [1, "pay-meth"], [1, "fs-18", "mb-3"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills"], ["role", "presentation", 1, "nav-item", "mb-3"], ["id", "pills-home-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-home", "type", "button", "role", "tab", "aria-controls", "pills-home", "aria-selected", "true", 1, "nav-link", "active"], ["id", "pills-profile-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-profile", "type", "button", "role", "tab", "aria-controls", "pills-profile", "aria-selected", "false", 1, "nav-link"], ["id", "pills-contact-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-contact", "type", "button", "role", "tab", "aria-controls", "pills-contact", "aria-selected", "false", 1, "nav-link"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-home", "role", "tabpanel", "aria-labelledby", "pills-home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "col-lg-6"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], ["type", "text", 1, "form-control"], [1, "mt-2"], [1, "col-lg-12"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], ["id", "pills-profile", "role", "tabpanel", "aria-labelledby", "pills-profile-tab", 1, "tab-pane", "fade"], ["type", "email", 1, "form-control"], [1, "position-relative"], [1, "pass-inputs", "form-control", 3, "type"], ["tabindex", "0", 1, "isax", "toggle-password", 3, "click", "keydown.enter", "ngClass"], ["id", "pills-contact", "role", "tabpanel", "aria-labelledby", "pills-contact-tab", 1, "tab-pane", "fade"], [1, "d-flex", "justify-content-end"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#successful-modal", 1, "btn", "btn-secondary"], [1, "col-lg-4"], [1, "subscription-details"], [1, "text-gray-9", "float-end", "fw-medium"], ["id", "successful-modal", 1, "modal", "fade", "successful-modal"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-body", "text-center", "custom-modal-body"], [1, "avatar", "avatar-lg", "bg-success", "rounded-circle", "mb-3"], [1, "fa-solid", "fa-check", "fs-14", "text-white"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view_invoice", 1, "text-primary"], [1, "d-flex", "align-items-center", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#pricing-plan", 1, "btn", "bg-gray-100", "rounded-pill", "me-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view_invoice", 1, "btn", "btn-secondary", "rounded-pill"], ["id", "view_invoice", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "border-bottom", "mb-3"], [1, "row", "justify-content-between", "align-items-center", "flex-wrap", "row-gap-4"], [1, "col-md-6"], [1, "mb-2", "invoice-logo-white"], ["src", "assets/img/logo.svg", "alt", "logo", 1, "img-fluid"], [1, "text-end", "mb-3"], [1, "text-default", "mb-1", "text-secondary", "fs-16"], [1, "text-gray-9"], [1, "row", "g-4"], [1, "col-lg-5"], [1, "mb-3", "d-flex"], [1, "mb-2", "fs-16"], [1, "fs-14", "mb-1"], ["href", "javascript:void(0);"], [1, "col-lg-2"], [1, "mb-3", "text-end"], [1, "mb-1", "d-block"], [1, "badge", "bg-success", "badge-md", "d-inline-flex", "align-items-center", "fs-10", "fw-normal", "mb-4"], [1, "fa-solid", "fa-circle", "fs-5", "me-1"], ["src", "assets/img/icon/qr.svg", "alt", "QR", 1, "img-fluid"], [1, "table-responsive"], [1, "table", "invoice-table"], [1, "w-50", "bg-light-400"], [1, "text-center", "bg-light-400"], [1, "text-end", "bg-light-400"], [1, "text-gray-9", "fw-semibold"], [1, "text-gray", "text-center"], [1, "text-gray", "text-end"], [1, "border-bottom", "mb-3", "pb-3"], [1, "d-flex", "justify-content-between", "align-items-center", "border-bottom", "my-2", "pb-2", "pe-3"], [1, "text-gray", "mb-0"], [1, "text-gray-9", "fw-medium"], [1, "mb-0"], [1, "text-gray-9", "fs-14", "fw-medium"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3", "pe-3"], [1, "text-gray-9", "fs-14", "fw-medium", "mb-2"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2", "pe-3"], [1, "fs-16"], [1, "row", "align-items-center", "gy-3"], [1, "col-lg-9"], [1, "mb-1", "fs-16"], [1, "col-md-3"], [1, "text-end", "pe-4", "mb-2"], ["src", "assets/img/sign.svg", "alt", "sign", 1, "img-fluid"], [1, "text-end"], [1, "fs-16", "pe-3", "mb-2"], ["id", "add_new_card", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-md"], [1, "modal-body", "pb-0"], [1, "col-md-12"], [1, "mb-3", "add-card-date", "ngxdate"], [1, "input-icon", "position-relative", "calender-input"], [1, "input-icon-addon"], [1, "isax", "isax-calendar"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate", "placeholder", "dd/mm/yyyy", 1, "form-control", "datetimepicker", 3, "bsConfig"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "bg-gray-100", "rounded-pill", "me-2"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "rounded-pill"], ["id", "edit_card", 1, "modal", "fade"], ["placeholder", "Credit Card", 1, "custom-mat-select", "select"], ["type", "text", "value", "9834 7923 4098 1568", 1, "form-control"], [1, "mb-3", "add-card-date", "ngxdate1"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate1", "placeholder", "dd/mm/yyyy", "value", "02/25", 1, "form-control", "datetimepicker", 3, "bsConfig"], ["type", "text", "value", "725", 1, "form-control"], ["type", "text", "value", "Eugene Andre", 1, "form-control"], ["id", "delete_modal", 1, "modal", "fade"], [1, "avatar", "avatar-lg", "bg-secondary-transparent", "rounded-circle", "mb-2"], [1, "isax", "isax-trash", "fs-24", "text-danger"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "bg-gray-100", "rounded-pill", "me-2"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "rounded-pill"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#pricing-plan", 1, "fw-medium"], [1, "badge", "badge-sm", "fs-10", "rounded-pill", "d-inline-flex", "align-items-center", "me-1", 3, "ngClass"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view_invoice", 1, "d-inline-flex", "fs-14", "me-1", "action-icon"], [1, "isax", "isax-eye"], ["href", "javascript:void(0);", 1, "d-inline-flex", "fs-14", "action-icon"], [1, "isax", "isax-import"]], template: function InstructorPlansComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
      \u0275\u0275text(6, "Active Plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "a", 6);
      \u0275\u0275text(8, "Download PDF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 7)(10, "div")(11, "h6", 8);
      \u0275\u0275text(12, "Standard Plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "span", 9);
      \u0275\u0275text(14, "Valid till:\xA0May 2025 - Jun 2025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "h4");
      \u0275\u0275text(16, "$199");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 10)(18, "button", 11);
      \u0275\u0275text(19, "Cancel Subscription");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "button", 12);
      \u0275\u0275text(21, "Update Plan");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(22, "div", 13)(23, "div", 14)(24, "div", 3)(25, "div", 15)(26, "h5", 5);
      \u0275\u0275text(27, "Saved Cards");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "a", 16);
      \u0275\u0275element(29, "i", 17);
      \u0275\u0275text(30, "Add New Card");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 18)(32, "div", 19)(33, "div", 20)(34, "div", 21)(35, "div", 22);
      \u0275\u0275element(36, "img", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div")(38, "h6");
      \u0275\u0275text(39, "Credit Card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "small");
      \u0275\u0275text(41, "Visa \u2022\u2022\u2022\u2022 1568");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "div", 24)(43, "a", 25);
      \u0275\u0275text(44, "Default");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 26)(46, "a", 27);
      \u0275\u0275element(47, "i", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "a", 29);
      \u0275\u0275element(49, "i", 30);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(50, "div", 19)(51, "div", 20)(52, "div", 21)(53, "div", 22);
      \u0275\u0275element(54, "img", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div")(56, "h6");
      \u0275\u0275text(57, "Debit Card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "small");
      \u0275\u0275text(59, "\u2022\u2022\u2022\u2022 1279");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(60, "div", 32)(61, "a", 33);
      \u0275\u0275text(62, "Set as Default");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 26)(64, "a", 27);
      \u0275\u0275element(65, "i", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "a", 29);
      \u0275\u0275element(67, "i", 30);
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(68, "div", 34)(69, "h5", 5);
      \u0275\u0275text(70, "Transaction History");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "div", 35)(72, "a", 36);
      \u0275\u0275text(73, " Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "ul", 37)(75, "li")(76, "a", 38);
      \u0275\u0275text(77, "Paid");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "li")(79, "a", 38);
      \u0275\u0275text(80, "Pending");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "li")(82, "a", 38);
      \u0275\u0275text(83, "Cancelled");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(84, "div", 39)(85, "table", 40)(86, "thead", 41)(87, "tr")(88, "th");
      \u0275\u0275text(89, "Order ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "th");
      \u0275\u0275text(91, "Plan Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "th");
      \u0275\u0275text(93, "Payment Method");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "th");
      \u0275\u0275text(95, "Subscribed On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "th");
      \u0275\u0275text(97, "Last Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "th");
      \u0275\u0275text(99, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "th");
      \u0275\u0275text(101, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(102, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "tbody");
      \u0275\u0275repeaterCreate(104, InstructorPlansComponent_For_105_Template, 25, 8, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(106, "app-custom-pagination");
      \u0275\u0275elementStart(107, "div", 42)(108, "div", 43)(109, "div", 44)(110, "div", 45)(111, "h5", 46);
      \u0275\u0275text(112, "Pricing Plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "button", 47);
      \u0275\u0275element(114, "i", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(115, "div", 49)(116, "div", 50)(117, "label", 51);
      \u0275\u0275text(118, "Monthly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "div", 52);
      \u0275\u0275element(120, "input", 53);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "label", 54);
      \u0275\u0275text(122, "Annualy");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(123, "div", 55)(124, "div", 56)(125, "div", 57)(126, "h5", 58);
      \u0275\u0275text(127, "Basic");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "h1", 59)(129, "sup", 60);
      \u0275\u0275text(130, "$");
      \u0275\u0275elementEnd();
      \u0275\u0275text(131, "99");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "h6", 61);
      \u0275\u0275text(133, "Ideal for individuals or small teams starting with online education.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "div", 62)(135, "p", 63);
      \u0275\u0275element(136, "i", 64);
      \u0275\u0275text(137, "10 active courses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "p", 63);
      \u0275\u0275element(139, "i", 64);
      \u0275\u0275text(140, "Basic course creation tools");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "p", 63);
      \u0275\u0275element(142, "i", 64);
      \u0275\u0275text(143, "Student progress tracking");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "p", 63);
      \u0275\u0275element(145, "i", 64);
      \u0275\u0275text(146, "1 GB storage");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "p", 63);
      \u0275\u0275element(148, "i", 64);
      \u0275\u0275text(149, "Email notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "p", 65);
      \u0275\u0275element(151, "i", 64);
      \u0275\u0275text(152, "Community support");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(153, "a", 66);
      \u0275\u0275text(154, "Choose Plan");
      \u0275\u0275element(155, "i", 67);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(156, "div", 56)(157, "div", 57)(158, "h5", 58);
      \u0275\u0275text(159, "Standard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "h1", 59)(161, "sup", 60);
      \u0275\u0275text(162, "$");
      \u0275\u0275elementEnd();
      \u0275\u0275text(163, "199");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "h6", 61);
      \u0275\u0275text(165, "Ideal for growing institutions that need advanced tools and greater flexibility.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "div", 62)(167, "p", 63);
      \u0275\u0275element(168, "i", 64);
      \u0275\u0275text(169, "Access to 20 courses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "p", 63);
      \u0275\u0275element(171, "i", 64);
      \u0275\u0275text(172, "Custom course certificates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "p", 63);
      \u0275\u0275element(174, "i", 64);
      \u0275\u0275text(175, "Basic analytics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "p", 63);
      \u0275\u0275element(177, "i", 64);
      \u0275\u0275text(178, "10 GB storage");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "p", 63);
      \u0275\u0275element(180, "i", 64);
      \u0275\u0275text(181, "Course scheduling");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "p", 65);
      \u0275\u0275element(183, "i", 64);
      \u0275\u0275text(184, "Priority email and chat support");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(185, "a", 66);
      \u0275\u0275text(186, "Choose Plan");
      \u0275\u0275element(187, "i", 67);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(188, "div", 56)(189, "div", 57)(190, "h5", 58);
      \u0275\u0275text(191, "Premium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "h1", 59)(193, "sup", 60);
      \u0275\u0275text(194, "$");
      \u0275\u0275elementEnd();
      \u0275\u0275text(195, "299");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "h6", 61);
      \u0275\u0275text(197, "Designed for large-scale learning with robust features and custom branding.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "div", 62)(199, "p", 63);
      \u0275\u0275element(200, "i", 64);
      \u0275\u0275text(201, "Unlimited courses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "p", 63);
      \u0275\u0275element(203, "i", 64);
      \u0275\u0275text(204, "Advanced course creation tools");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "p", 63);
      \u0275\u0275element(206, "i", 64);
      \u0275\u0275text(207, "Detailed student analytics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(208, "p", 63);
      \u0275\u0275element(209, "i", 64);
      \u0275\u0275text(210, "100 GB storage");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(211, "p", 63);
      \u0275\u0275element(212, "i", 64);
      \u0275\u0275text(213, "Integration with third-party tools");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(214, "p", 65);
      \u0275\u0275element(215, "i", 64);
      \u0275\u0275text(216, "Completion certificates");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(217, "a", 66);
      \u0275\u0275text(218, "Choose Plan");
      \u0275\u0275element(219, "i", 67);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(220, "div", 68)(221, "div", 43)(222, "div", 44)(223, "div", 45)(224, "h5", 46);
      \u0275\u0275text(225, "Pricing Plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(226, "button", 47);
      \u0275\u0275element(227, "i", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(228, "div", 49)(229, "form")(230, "div", 18)(231, "div", 69)(232, "div", 70)(233, "h5", 71);
      \u0275\u0275text(234, "Payment Method");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(235, "ul", 72)(236, "li", 73)(237, "button", 74);
      \u0275\u0275text(238, "Debit or Credit Card");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(239, "li", 73)(240, "button", 75);
      \u0275\u0275text(241, "PayPal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(242, "li", 73)(243, "button", 76);
      \u0275\u0275text(244, "Stripe");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(245, "div", 77)(246, "div", 78)(247, "div", 0)(248, "div", 79)(249, "div", 80)(250, "label", 81);
      \u0275\u0275text(251, "Name on Card");
      \u0275\u0275elementStart(252, "span", 82);
      \u0275\u0275text(253, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(254, "input", 83);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(255, "div", 79)(256, "div", 80)(257, "label", 81);
      \u0275\u0275text(258, "Card Number");
      \u0275\u0275elementStart(259, "span", 82);
      \u0275\u0275text(260, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(261, "input", 83);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(262, "div", 79)(263, "div", 80)(264, "label", 81);
      \u0275\u0275text(265, "Expiration Date");
      \u0275\u0275elementStart(266, "span", 82);
      \u0275\u0275text(267, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(268, "input", 83);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(269, "div", 79)(270, "div", 80)(271, "label", 81);
      \u0275\u0275text(272, "CVV");
      \u0275\u0275elementStart(273, "span", 82);
      \u0275\u0275text(274, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(275, "input", 83);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(276, "hr", 84);
      \u0275\u0275elementStart(277, "h5", 71);
      \u0275\u0275text(278, "Billing Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(279, "div", 0)(280, "div", 85)(281, "div", 80)(282, "label", 81);
      \u0275\u0275text(283, "Address");
      \u0275\u0275elementStart(284, "span", 82);
      \u0275\u0275text(285, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(286, "input", 83);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(287, "div", 79)(288, "div", 80)(289, "label", 81);
      \u0275\u0275text(290, "Country");
      \u0275\u0275elementStart(291, "span", 82);
      \u0275\u0275text(292, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(293, "mat-select", 86)(294, "mat-option", 87);
      \u0275\u0275text(295, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(296, "mat-option", 87);
      \u0275\u0275text(297, "USA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(298, "mat-option", 87);
      \u0275\u0275text(299, "Canada");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(300, "mat-option", 87);
      \u0275\u0275text(301, "Germany");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(302, "mat-option", 87);
      \u0275\u0275text(303, "France");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(304, "div", 79)(305, "div", 80)(306, "label", 81);
      \u0275\u0275text(307, "State");
      \u0275\u0275elementStart(308, "span", 82);
      \u0275\u0275text(309, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(310, "mat-select", 86)(311, "mat-option", 87);
      \u0275\u0275text(312, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(313, "mat-option", 87);
      \u0275\u0275text(314, "California");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(315, "mat-option", 87);
      \u0275\u0275text(316, "New York");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(317, "mat-option", 87);
      \u0275\u0275text(318, "Texas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(319, "mat-option", 87);
      \u0275\u0275text(320, "Florida");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(321, "div", 79)(322, "div", 80)(323, "label", 81);
      \u0275\u0275text(324, "City");
      \u0275\u0275elementStart(325, "span", 82);
      \u0275\u0275text(326, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(327, "mat-select", 86)(328, "mat-option", 87);
      \u0275\u0275text(329, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(330, "mat-option", 87);
      \u0275\u0275text(331, "Los Angeles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(332, "mat-option", 87);
      \u0275\u0275text(333, "San Diego");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(334, "mat-option", 87);
      \u0275\u0275text(335, "Fresno");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(336, "mat-option", 87);
      \u0275\u0275text(337, "San Francisco");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(338, "div", 79)(339, "div", 80)(340, "label", 81);
      \u0275\u0275text(341, "Postal Code ");
      \u0275\u0275elementStart(342, "span", 82);
      \u0275\u0275text(343, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(344, "input", 83);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(345, "div", 88)(346, "div", 0)(347, "div", 79)(348, "div", 80)(349, "label", 81);
      \u0275\u0275text(350, "Email Address");
      \u0275\u0275elementStart(351, "span", 82);
      \u0275\u0275text(352, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(353, "input", 89);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(354, "div", 79)(355, "div", 80)(356, "label", 81);
      \u0275\u0275text(357, "Password");
      \u0275\u0275elementStart(358, "span", 82);
      \u0275\u0275text(359, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(360, "div", 90);
      \u0275\u0275element(361, "input", 91);
      \u0275\u0275elementStart(362, "span", 92);
      \u0275\u0275listener("click", function InstructorPlansComponent_Template_span_click_362_listener() {
        return ctx.togglePassword(1);
      })("keydown.enter", function InstructorPlansComponent_Template_span_keydown_enter_362_listener() {
        return ctx.togglePassword(1);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(363, "hr", 84);
      \u0275\u0275elementStart(364, "h5", 71);
      \u0275\u0275text(365, "Billing Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(366, "div", 0)(367, "div", 85)(368, "div", 80)(369, "label", 81);
      \u0275\u0275text(370, "Address");
      \u0275\u0275elementStart(371, "span", 82);
      \u0275\u0275text(372, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(373, "input", 83);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(374, "div", 79)(375, "div", 80)(376, "label", 81);
      \u0275\u0275text(377, "Country");
      \u0275\u0275elementStart(378, "span", 82);
      \u0275\u0275text(379, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(380, "mat-select", 86)(381, "mat-option", 87);
      \u0275\u0275text(382, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(383, "mat-option", 87);
      \u0275\u0275text(384, "USA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(385, "mat-option", 87);
      \u0275\u0275text(386, "Canada");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(387, "mat-option", 87);
      \u0275\u0275text(388, "Germany");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(389, "mat-option", 87);
      \u0275\u0275text(390, "France");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(391, "div", 79)(392, "div", 80)(393, "label", 81);
      \u0275\u0275text(394, "State");
      \u0275\u0275elementStart(395, "span", 82);
      \u0275\u0275text(396, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(397, "mat-select", 86)(398, "mat-option", 87);
      \u0275\u0275text(399, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(400, "mat-option", 87);
      \u0275\u0275text(401, "California");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(402, "mat-option", 87);
      \u0275\u0275text(403, "New York");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(404, "mat-option", 87);
      \u0275\u0275text(405, "Texas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(406, "mat-option", 87);
      \u0275\u0275text(407, "Florida");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(408, "div", 79)(409, "div", 80)(410, "label", 81);
      \u0275\u0275text(411, "City");
      \u0275\u0275elementStart(412, "span", 82);
      \u0275\u0275text(413, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(414, "mat-select", 86)(415, "mat-option", 87);
      \u0275\u0275text(416, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(417, "mat-option", 87);
      \u0275\u0275text(418, "Los Angeles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(419, "mat-option", 87);
      \u0275\u0275text(420, "San Diego");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(421, "mat-option", 87);
      \u0275\u0275text(422, "Fresno");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(423, "mat-option", 87);
      \u0275\u0275text(424, "San Francisco");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(425, "div", 79)(426, "div", 80)(427, "label", 81);
      \u0275\u0275text(428, "Postal Code ");
      \u0275\u0275elementStart(429, "span", 82);
      \u0275\u0275text(430, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(431, "input", 83);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(432, "div", 93)(433, "div", 0)(434, "div", 79)(435, "div", 80)(436, "label", 81);
      \u0275\u0275text(437, "Email Address");
      \u0275\u0275elementStart(438, "span", 82);
      \u0275\u0275text(439, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(440, "input", 89);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(441, "div", 79)(442, "div", 80)(443, "label", 81);
      \u0275\u0275text(444, "Password");
      \u0275\u0275elementStart(445, "span", 82);
      \u0275\u0275text(446, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(447, "div", 90);
      \u0275\u0275element(448, "input", 91);
      \u0275\u0275elementStart(449, "span", 92);
      \u0275\u0275listener("click", function InstructorPlansComponent_Template_span_click_449_listener() {
        return ctx.togglePassword(2);
      })("keydown.enter", function InstructorPlansComponent_Template_span_keydown_enter_449_listener() {
        return ctx.togglePassword(2);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(450, "hr", 84);
      \u0275\u0275elementStart(451, "h5", 71);
      \u0275\u0275text(452, "Billing Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(453, "div", 0)(454, "div", 85)(455, "div", 80)(456, "label", 81);
      \u0275\u0275text(457, "Address");
      \u0275\u0275elementStart(458, "span", 82);
      \u0275\u0275text(459, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(460, "input", 83);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(461, "div", 79)(462, "div", 80)(463, "label", 81);
      \u0275\u0275text(464, "Country");
      \u0275\u0275elementStart(465, "span", 82);
      \u0275\u0275text(466, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(467, "mat-select", 86)(468, "mat-option", 87);
      \u0275\u0275text(469, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(470, "mat-option", 87);
      \u0275\u0275text(471, "USA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(472, "mat-option", 87);
      \u0275\u0275text(473, "Canada");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(474, "mat-option", 87);
      \u0275\u0275text(475, "Germany");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(476, "mat-option", 87);
      \u0275\u0275text(477, "France");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(478, "div", 79)(479, "div", 80)(480, "label", 81);
      \u0275\u0275text(481, "State");
      \u0275\u0275elementStart(482, "span", 82);
      \u0275\u0275text(483, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(484, "mat-select", 86)(485, "mat-option", 87);
      \u0275\u0275text(486, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(487, "mat-option", 87);
      \u0275\u0275text(488, "California");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(489, "mat-option", 87);
      \u0275\u0275text(490, "New York");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(491, "mat-option", 87);
      \u0275\u0275text(492, "Texas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(493, "mat-option", 87);
      \u0275\u0275text(494, "Florida");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(495, "div", 79)(496, "div", 80)(497, "label", 81);
      \u0275\u0275text(498, "City");
      \u0275\u0275elementStart(499, "span", 82);
      \u0275\u0275text(500, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(501, "mat-select", 86)(502, "mat-option", 87);
      \u0275\u0275text(503, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(504, "mat-option", 87);
      \u0275\u0275text(505, "Los Angeles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(506, "mat-option", 87);
      \u0275\u0275text(507, "San Diego");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(508, "mat-option", 87);
      \u0275\u0275text(509, "Fresno");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(510, "mat-option", 87);
      \u0275\u0275text(511, "San Francisco");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(512, "div", 79)(513, "div", 80)(514, "label", 81);
      \u0275\u0275text(515, "Postal Code ");
      \u0275\u0275elementStart(516, "span", 82);
      \u0275\u0275text(517, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(518, "input", 83);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(519, "div", 94)(520, "a", 95);
      \u0275\u0275text(521, "Proceed to Pay $99.00");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(522, "div", 96)(523, "div", 97)(524, "h5", 71);
      \u0275\u0275text(525, "Subscription Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(526, "p", 58);
      \u0275\u0275text(527, "Plan Name: ");
      \u0275\u0275elementStart(528, "span", 98);
      \u0275\u0275text(529, "Basic");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(530, "p", 58);
      \u0275\u0275text(531, "Plan Amount: ");
      \u0275\u0275elementStart(532, "span", 98);
      \u0275\u0275text(533, "$99.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(534, "p", 58);
      \u0275\u0275text(535, "Tax: ");
      \u0275\u0275elementStart(536, "span", 98);
      \u0275\u0275text(537, "$0.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(538, "p");
      \u0275\u0275text(539, "Total: ");
      \u0275\u0275elementStart(540, "span", 98);
      \u0275\u0275text(541, "$99.00");
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(542, "div", 99)(543, "div", 100)(544, "div", 44)(545, "div", 101)(546, "span", 102);
      \u0275\u0275element(547, "i", 103);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(548, "div")(549, "h5", 8);
      \u0275\u0275text(550, "Payment Successful");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(551, "p", 80);
      \u0275\u0275text(552, "Your purchase of the Basic Plan has been completed with reference number ");
      \u0275\u0275elementStart(553, "a", 104);
      \u0275\u0275text(554, "#INV1245");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(555, "div", 105)(556, "a", 106);
      \u0275\u0275text(557, "Back to Plans");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(558, "a", 107);
      \u0275\u0275text(559, "View Details");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(560, "div", 108)(561, "div", 109)(562, "div", 44)(563, "div", 45)(564, "h5");
      \u0275\u0275text(565, "Invoice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(566, "button", 47);
      \u0275\u0275element(567, "i", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(568, "div", 49)(569, "div", 110)(570, "div", 111)(571, "div", 112)(572, "div", 113);
      \u0275\u0275element(573, "img", 114);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(574, "p", 58);
      \u0275\u0275text(575, "3099 Kennedy Court Framingham, MA 01702");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(576, "div", 112)(577, "div", 115)(578, "h6", 116);
      \u0275\u0275text(579, "#OI0010");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(580, "p", 8);
      \u0275\u0275text(581, "Created Date : ");
      \u0275\u0275elementStart(582, "span", 117);
      \u0275\u0275text(583, "Aug 25, 2025");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(584, "p");
      \u0275\u0275text(585, "Due Date : ");
      \u0275\u0275elementStart(586, "span", 117);
      \u0275\u0275text(587, "Aug 30, 2025");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(588, "div", 110)(589, "div", 118)(590, "div", 119)(591, "span", 120);
      \u0275\u0275text(592, "From");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(593, "div")(594, "h6", 121);
      \u0275\u0275text(595, "Thomas Lawler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(596, "p", 122);
      \u0275\u0275text(597, "2077 Chicago Avenue Orosi, CA 93647");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(598, "p", 122);
      \u0275\u0275text(599, "Email :thomaslawler@example.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(600, "p", 9);
      \u0275\u0275text(601, "Phone : +1 987 654 3210");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(602, "div", 119)(603, "span", 120);
      \u0275\u0275text(604, "To");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(605, "div")(606, "h6", 58);
      \u0275\u0275text(607, "Ronald Richard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(608, "p", 122);
      \u0275\u0275text(609, "3103 Trainer Avenue Peoria, IL 61602");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(610, "p", 122);
      \u0275\u0275text(611, "Email : ");
      \u0275\u0275elementStart(612, "a", 123);
      \u0275\u0275text(613, "adre3@example.com");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(614, "p", 9);
      \u0275\u0275text(615, "Phone : ");
      \u0275\u0275elementStart(616, "a", 123);
      \u0275\u0275text(617, "+1 987 471 6589");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(618, "div", 124)(619, "div", 125)(620, "span", 126);
      \u0275\u0275text(621, "Payment Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(622, "span", 127);
      \u0275\u0275element(623, "i", 128);
      \u0275\u0275text(624, "Completed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(625, "div");
      \u0275\u0275element(626, "img", 129);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(627, "div")(628, "div", 130)(629, "table", 131)(630, "thead", 41)(631, "tr")(632, "th", 132);
      \u0275\u0275text(633, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(634, "th", 133);
      \u0275\u0275text(635, "Qty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(636, "th", 134);
      \u0275\u0275text(637, "Cost");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(638, "th", 134);
      \u0275\u0275text(639, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(640, "th", 134);
      \u0275\u0275text(641, "Total");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(642, "tbody")(643, "tr")(644, "td")(645, "p", 135);
      \u0275\u0275text(646, "Basic Plan");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(647, "td", 136);
      \u0275\u0275text(648, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(649, "td", 137);
      \u0275\u0275text(650, "$120");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(651, "td", 137);
      \u0275\u0275text(652, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(653, "td", 137);
      \u0275\u0275text(654, "$120");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(655, "div", 138)(656, "div", 0);
      \u0275\u0275element(657, "div", 112);
      \u0275\u0275elementStart(658, "div", 112)(659, "div", 139)(660, "p", 140);
      \u0275\u0275text(661, "Sub Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(662, "p", 141);
      \u0275\u0275text(663, "$120");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(664, "div", 139)(665, "p", 142);
      \u0275\u0275text(666, "Discount (0%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(667, "p", 143);
      \u0275\u0275text(668, "$0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(669, "div", 144)(670, "p", 142);
      \u0275\u0275text(671, "VAT (5%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(672, "p", 145);
      \u0275\u0275text(673, "$0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(674, "div", 146)(675, "h6", 147);
      \u0275\u0275text(676, "Total Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(677, "h6", 147);
      \u0275\u0275text(678, "$120");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(679, "p");
      \u0275\u0275text(680, " Amount in Words : Dollar One Hundred Twenty ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(681, "div", 148)(682, "div", 149)(683, "div", 80)(684, "h6", 150);
      \u0275\u0275text(685, "Notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(686, "p");
      \u0275\u0275text(687, "Invoice for course purchase, covering course fee.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(688, "div")(689, "h6", 150);
      \u0275\u0275text(690, "Terms and Conditions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(691, "p");
      \u0275\u0275text(692, "Full payment grants non-transferable access to the course.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(693, "div", 151)(694, "div", 152);
      \u0275\u0275element(695, "img", 153);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(696, "div", 154)(697, "h6", 155);
      \u0275\u0275text(698, "Ted M. Davis");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(699, "p");
      \u0275\u0275text(700, "Assistant Manager");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(701, "div", 156)(702, "div", 157)(703, "div", 44)(704, "div", 45)(705, "h5");
      \u0275\u0275text(706, "Add New Card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(707, "button", 47);
      \u0275\u0275element(708, "i", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(709, "form")(710, "div", 158)(711, "div", 0)(712, "div", 159)(713, "div", 80)(714, "label", 81);
      \u0275\u0275text(715, "Payment Method");
      \u0275\u0275elementStart(716, "span", 82);
      \u0275\u0275text(717, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(718, "mat-select", 86)(719, "mat-option", 87);
      \u0275\u0275text(720, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(721, "mat-option", 87);
      \u0275\u0275text(722, "Credit Card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(723, "mat-option", 87);
      \u0275\u0275text(724, "Debit Card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(725, "mat-option", 87);
      \u0275\u0275text(726, "Paypal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(727, "mat-option", 87);
      \u0275\u0275text(728, "Stripe");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(729, "div", 159)(730, "div", 80)(731, "label", 81);
      \u0275\u0275text(732, "Card Number");
      \u0275\u0275elementStart(733, "span", 82);
      \u0275\u0275text(734, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(735, "input", 83);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(736, "div", 112)(737, "div", 160)(738, "label", 81);
      \u0275\u0275text(739, "Expiration Date");
      \u0275\u0275elementStart(740, "span", 82);
      \u0275\u0275text(741, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(742, "div", 161)(743, "span", 162);
      \u0275\u0275element(744, "i", 163);
      \u0275\u0275elementEnd();
      \u0275\u0275element(745, "input", 164);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(746, "div", 112)(747, "div", 80)(748, "label", 81);
      \u0275\u0275text(749, "CVV");
      \u0275\u0275elementStart(750, "span", 82);
      \u0275\u0275text(751, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(752, "input", 83);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(753, "div", 159)(754, "div", 80)(755, "label", 81);
      \u0275\u0275text(756, "Name on Card");
      \u0275\u0275elementStart(757, "span", 82);
      \u0275\u0275text(758, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(759, "input", 83);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(760, "div", 165)(761, "button", 166);
      \u0275\u0275text(762, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(763, "button", 167);
      \u0275\u0275text(764, "Add Card");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(765, "div", 168)(766, "div", 157)(767, "div", 44)(768, "div", 45)(769, "h5");
      \u0275\u0275text(770, "Edit Card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(771, "button", 47);
      \u0275\u0275element(772, "i", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(773, "form")(774, "div", 158)(775, "div", 0)(776, "div", 159)(777, "div", 80)(778, "label", 81);
      \u0275\u0275text(779, "Payment Method");
      \u0275\u0275elementStart(780, "span", 82);
      \u0275\u0275text(781, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(782, "mat-select", 169)(783, "mat-option", 87);
      \u0275\u0275text(784, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(785, "mat-option", 87);
      \u0275\u0275text(786, "Credit Card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(787, "mat-option", 87);
      \u0275\u0275text(788, "Debit Card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(789, "mat-option", 87);
      \u0275\u0275text(790, "Paypal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(791, "mat-option", 87);
      \u0275\u0275text(792, "Stripe");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(793, "div", 159)(794, "div", 80)(795, "label", 81);
      \u0275\u0275text(796, "Card Number");
      \u0275\u0275elementStart(797, "span", 82);
      \u0275\u0275text(798, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(799, "input", 170);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(800, "div", 112)(801, "div", 171)(802, "label", 81);
      \u0275\u0275text(803, "Expiration Date");
      \u0275\u0275elementStart(804, "span", 82);
      \u0275\u0275text(805, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(806, "div", 161)(807, "span", 162);
      \u0275\u0275element(808, "i", 163);
      \u0275\u0275elementEnd();
      \u0275\u0275element(809, "input", 172);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(810, "div", 112)(811, "div", 80)(812, "label", 81);
      \u0275\u0275text(813, "CVV");
      \u0275\u0275elementStart(814, "span", 82);
      \u0275\u0275text(815, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(816, "input", 173);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(817, "div", 159)(818, "div", 80)(819, "label", 81);
      \u0275\u0275text(820, "Name on Card");
      \u0275\u0275elementStart(821, "span", 82);
      \u0275\u0275text(822, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(823, "input", 174);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(824, "div", 165)(825, "button", 166);
      \u0275\u0275text(826, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(827, "button", 167);
      \u0275\u0275text(828, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(829, "div", 175)(830, "div", 100)(831, "div", 44)(832, "div", 101)(833, "span", 176);
      \u0275\u0275element(834, "i", 177);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(835, "div")(836, "h4", 58);
      \u0275\u0275text(837, "Delete Card");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(838, "p", 80);
      \u0275\u0275text(839, "Are you sure you want to delete card?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(840, "div", 105)(841, "a", 178);
      \u0275\u0275text(842, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(843, "a", 179);
      \u0275\u0275text(844, "Yes, Remove All");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(104);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(257);
      \u0275\u0275property("type", ctx.password[1] ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.password[1] ? "isax-eye" : "isax-eye-slash");
      \u0275\u0275advance(86);
      \u0275\u0275property("type", ctx.password[2] ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.password[2] ? "isax-eye" : "isax-eye-slash");
      \u0275\u0275advance(296);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(6, _c0));
      \u0275\u0275advance(64);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(7, _c0));
    }
  }, dependencies: [CommonModule, NgClass, MatTableModule, MatSortModule, MatPaginatorModule, MatSelectModule, MatSelect, MatOption, CustomPaginationComponent, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorPlansComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-plans", imports: [CommonModule, MatTableModule, MatSortModule, MatPaginatorModule, MatSelectModule, CustomPaginationComponent, BsDatepickerModule], template: `<div class="row">
    <div class="col-xl-5">
      <div class="card mb-3">
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center border-bottom pb-3">
            <h5 class="fs-18">Active Plan</h5>
            <a href="javascript:void(0);" class="btn download-btn fs-12">Download PDF</a>
        </div>
        <div class="d-flex align-items-center justify-content-between border-bottom mb-3 py-4">
        <div>
          <h6 class="mb-1">Standard Plan</h6>
          <span class="fs-14">Valid till:\xA0May 2025 - Jun 2025</span>
        </div>
        <h4>$199</h4>
        </div>
        <div class="justify-content-end d-flex row-gap-2 flex-wrap">
            <button class="btn bg-gray-100 rounded-pill me-1 fs-12" type="button">Cancel Subscription</button>
            <button class="btn btn-secondary rounded-pill fs-12" data-bs-toggle="modal" data-bs-target="#pricing-plan" type="submit">Update Plan</button>
        </div>
      </div>
      </div>
    </div>
    <div class="col-xl-7">
        <div class="card saved-card-items p-0 mb-3">
        <div class="card-body">
            <div class="d-flex flex-wrap gap-2 justify-content-between align-items-center border-bottom mb-3 pb-3">
                <h5 class="fs-18">Saved Cards</h5>
                <a href="javascript:void(0);" class="btn btn-secondary fs-12" data-bs-toggle="modal" data-bs-target="#add_new_card"><i class="isax isax-add-circle me-1"></i>Add New Card</a>
            </div>
            <div class="row row-gap-3">
                <div class="col-sm-6 px-2">
                   <div class="border rounded p-3">
                    <div class="d-flex align-items-center mb-3">
                        <div class="border p-2 rounded flex-shrink-0 me-2">
                        <img src="./assets/img/icons/visa-logo.svg" alt="img">
                        </div>
                        <div>
                            <h6>Credit Card</h6>
                            <small>Visa \u2022\u2022\u2022\u2022 1568</small>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <a href="javascript:void(0);" class="btn btn-secondary fs-12">Default</a>
                        <div class="d-flex gap-2">
                            <a href="javascript:void(0);" class="fs-14 text-gray-5 action-icon" data-bs-toggle="modal" data-bs-target="#edit_card"><i class="isax isax-edit"></i></a>
                            <a href="javascript:void(0);" class="fs-14 text-gray-5 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash"></i></a>
                        </div>
                    </div>
                   </div>
                </div>
                <div class="col-sm-6 px-2">
                    <div class="border rounded p-3">
                        <div class="d-flex align-items-center mb-3">
                            <div class="border p-2 rounded flex-shrink-0 me-2">
                            <img src="./assets/img/icons/Mastercard.svg" alt="img">
                            </div>
                            <div>
                                <h6>Debit Card</h6>
                                <small>\u2022\u2022\u2022\u2022 1279</small>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mt-4">
                            <a href="javascript:void(0);" class="fs-14 text-secondary text-decoration-underline fw-normal">Set as Default</a>
                            <div class="d-flex gap-2">
                                <a href="javascript:void(0);" class="fs-14 text-gray-5 action-icon" data-bs-toggle="modal" data-bs-target="#edit_card"><i class="isax isax-edit"></i></a>
                                <a href="javascript:void(0);" class="fs-14 text-gray-5 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash"></i></a>
                            </div>
                        </div>
                       </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</div>
<div class="d-flex flex-wrap gap-2 align-items-center justify-content-between p-3">
  <h5 class="fs-18">Transaction History</h5>
  <div class="dropdown">
    <a href="javascript:void(0);" class="dropdown-toggle text-gray-6 btn rounded border d-inline-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
        Status
    </a>
    <ul class="dropdown-menu dropdown-menu-end p-3">
        <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Paid</a>
        </li>
        <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Pending</a>
        </li>
        <li>
            <a href="javascript:void(0);" class="dropdown-item rounded-1">Cancelled</a>
        </li>
    </ul>
</div>
</div> 
<div class="table-responsive custom-table">
    <table class="table">
        <thead class="thead-light">
            <tr>
                <th>Order ID</th>
                <th>Plan Name</th>
                <th>Payment Method</th>
                <th>Subscribed On</th>
                <th>Last Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            @for (data of tableData;track data){
            <tr>
                <td><a href="javascript:void(0);" class="text-primary" data-bs-toggle="modal" data-bs-target="#view_invoice">{{data.orderId}}</a></td>
                <td><a href="javascript:void(0);" class="fw-medium" data-bs-toggle="modal" data-bs-target="#pricing-plan">{{data.planName}}</a></td>
                <td>{{data.paymentMethod}}</td>
                <td>{{data.subscribedOn}}</td>
                <td>{{data.lastDate}}</td>
                <td>{{data.amount}}</td>
                <td><span class="badge badge-sm fs-10 rounded-pill d-inline-flex align-items-center me-1" [ngClass]="data.status==='Pending'?'bg-skyblue':data.status==='Cancelled'?'bg-danger':'bg-success'"><i class="fa-solid fa-circle fs-5 me-1"></i>{{data.status}}</span></td>
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


<!-- pricing plan -->
<div class="modal fade pricing-modal" id="pricing-plan">
    <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="fw-bold">Pricing Plan</h5>
                <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                    <i class="isax isax-close-circle5"></i>
                </button>
            </div>
                <div class="modal-body">
                    <div class="enable-item mb-3 d-flex align-items-center justify-content-center text-gray-9">
                        <label class="mb-0 me-2 fs-14">Monthly</label>
                        <div class="form-check form-switch check-on m-0">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked">
                        </div>
                        <label class="mb-0 ms-2 fs-14">Annualy</label>
                    </div>
                    <div class="row row-gap-4">
                        <div class="col-xl-4 col-lg-6 d-flex">
                            <div class="pricing-item flex-fill">
                                    <h5 class="mb-2">Basic</h5>
                                    <h1 class="mb-2 text-primary"><sup class="me-1">$</sup>99</h1>
                                    <h6 class="fw-normal">Ideal for individuals or small teams starting with online education.</h6>
                                    <div class="border-top pt-3 mt-3">
                                    <p class="d-flex align-items-center mb-2"><i class="fa-solid fa-circle fs-5 me-2"></i>10 active courses</p>
                                    <p class="d-flex align-items-center mb-2"><i class="fa-solid fa-circle fs-5 me-2"></i>Basic course creation tools</p>
                                    <p class="d-flex align-items-center mb-2"><i class="fa-solid fa-circle fs-5 me-2"></i>Student progress tracking</p>
                                    <p class="d-flex align-items-center mb-2"><i class="fa-solid fa-circle fs-5 me-2"></i>1 GB storage</p>
                                    <p class="d-flex align-items-center mb-2"><i class="fa-solid fa-circle fs-5 me-2"></i>Email notifications</p>
                                    <p class="d-flex align-items-center mb-0"><i class="fa-solid fa-circle fs-5 me-2"></i>Community support</p>
                                    </div>
                                    <a href="javascript:void(0);" class="btn btn-secondary w-100 mt-3" data-bs-toggle="modal" data-bs-target="#pricing-plan-two">Choose Plan<i class="isax isax-arrow-right-3 fs-10 ms-1"></i></a>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 d-flex">
                            <div class="pricing-item flex-fill">
                                    <h5 class="mb-2">Standard</h5>
                                    <h1 class="mb-2 text-primary"><sup class="me-1">$</sup>199</h1>
                                    <h6 class="fw-normal">Ideal for growing institutions that need advanced tools and greater flexibility.</h6>
                                    <div class="border-top pt-3 mt-3">
                                    <p class="d-flex align-items-center mb-2"><i class="fa-solid fa-circle fs-5 me-2"></i>Access to 20 courses</p>
                                    <p class="d-flex align-items-center mb-2"><i class="fa-solid fa-circle fs-5 me-2"></i>Custom course certificates</p>
                                    <p class="d-flex align-items-center mb-2"><i class="fa-solid fa-circle fs-5 me-2"></i>Basic analytics</p>
                                    <p class="d-flex align-items-center mb-2"><i class="fa-solid fa-circle fs-5 me-2"></i>10 GB storage</p>
                                    <p class="d-flex align-items-center mb-2"><i class="fa-solid fa-circle fs-5 me-2"></i>Course scheduling</p>
                                    <p class="d-flex align-items-center mb-0"><i class="fa-solid fa-circle fs-5 me-2"></i>Priority email and chat support</p>
                                    </div>
                                    <a href="javascript:void(0);" class="btn btn-secondary w-100 mt-3" data-bs-toggle="modal" data-bs-target="#pricing-plan-two">Choose Plan<i class="isax isax-arrow-right-3 fs-10 ms-1"></i></a>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 d-flex">
                            <div class="pricing-item flex-fill">
                                    <h5 class="mb-2">Premium</h5>
                                    <h1 class="mb-2 text-primary"><sup class="me-1">$</sup>299</h1>
                                    <h6 class="fw-normal">Designed for large-scale learning with robust features and custom branding.</h6>
                                    <div class="border-top pt-3 mt-3">
                                    <p class="d-flex align-items-center mb-2"><i class="fa-solid fa-circle fs-5 me-2"></i>Unlimited courses</p>
                                    <p class="d-flex align-items-center mb-2"><i class="fa-solid fa-circle fs-5 me-2"></i>Advanced course creation tools</p>
                                    <p class="d-flex align-items-center mb-2"><i class="fa-solid fa-circle fs-5 me-2"></i>Detailed student analytics</p>
                                    <p class="d-flex align-items-center mb-2"><i class="fa-solid fa-circle fs-5 me-2"></i>100 GB storage</p>
                                    <p class="d-flex align-items-center mb-2"><i class="fa-solid fa-circle fs-5 me-2"></i>Integration with third-party tools</p>
                                    <p class="d-flex align-items-center mb-0"><i class="fa-solid fa-circle fs-5 me-2"></i>Completion certificates</p>
                                    </div>
                                    <a href="javascript:void(0);" class="btn btn-secondary w-100 mt-3" data-bs-toggle="modal" data-bs-target="#pricing-plan-two">Choose Plan<i class="isax isax-arrow-right-3 fs-10 ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</div>
<!-- pricing plan -->

            <!-- pricing plan -->
            <div class="modal fade pricing-modal" id="pricing-plan-two">
                <div class="modal-dialog modal-dialog-centered modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="fw-bold">Pricing Plan</h5>
                            <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <i class="isax isax-close-circle5"></i>
                            </button>
                        </div>
                            <div class="modal-body">
                                <form>
                               <div class="row row-gap-3">
                                <div class="col-lg-8">
                                 <div class="pay-meth">
                                    <h5 class="fs-18 mb-3">Payment Method</h5>
                                    <ul class="nav nav-pills" id="pills-tab" role="tablist">
                                        <li class="nav-item mb-3" role="presentation">
                                            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Debit or Credit Card</button>
                                        </li>
                                        <li class="nav-item mb-3" role="presentation">
                                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">PayPal</button>
                                        </li>
                                        <li class="nav-item mb-3" role="presentation">
                                            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Stripe</button>
                                        </li>
                                     </ul>
                                     <div class="tab-content" id="pills-tabContent">
                                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                     <div class="row">
                                        <div class="col-lg-6">
                                            <div class="mb-3">
                                                <label class="form-label">Name on Card<span class="text-danger"> *</span></label>
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>			
                                        <div class="col-lg-6">
                                            <div class="mb-3">
                                                <label class="form-label">Card Number<span class="text-danger"> *</span></label>
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="mb-3">
                                                <label class="form-label">Expiration Date<span class="text-danger"> *</span></label>
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="mb-3">
                                                <label class="form-label">CVV<span class="text-danger"> *</span></label>
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                    </div>
                                    <hr class="mt-2">
                                    <h5 class="fs-18 mb-3">Billing Address</h5>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="mb-3">
                                                <label class="form-label">Address<span class="text-danger"> *</span></label>
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="mb-3">
                                                <label class="form-label">Country<span class="text-danger"> *</span></label>
                                                <mat-select class="custom-mat-select select" placeholder="Select">
                                                    <mat-option value="1">Select</mat-option>
                                                    <mat-option value="1">USA</mat-option>
                                                    <mat-option value="1">Canada</mat-option>
                                                    <mat-option value="1">Germany</mat-option>
                                                    <mat-option value="1">France</mat-option>
                                                </mat-select>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="mb-3">
                                                <label class="form-label">State<span class="text-danger"> *</span></label>
                                                <mat-select class="custom-mat-select select" placeholder="Select">
                                                    <mat-option value="1">Select</mat-option>
                                                    <mat-option value="1">California</mat-option>
                                                    <mat-option value="1">New York</mat-option>
                                                    <mat-option value="1">Texas</mat-option>
                                                    <mat-option value="1">Florida</mat-option>
                                                </mat-select>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="mb-3">
                                                <label class="form-label">City<span class="text-danger"> *</span></label>
                                                <mat-select class="custom-mat-select select" placeholder="Select">
                                                    <mat-option value="1">Select</mat-option>
                                                    <mat-option value="1">Los Angeles</mat-option>
                                                    <mat-option value="1">San Diego</mat-option>
                                                    <mat-option value="1">Fresno</mat-option>
                                                    <mat-option value="1">San Francisco</mat-option>
                                                </mat-select>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="mb-3">
                                                <label class="form-label">Postal Code <span class="text-danger"> *</span></label>
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                    </div>
                                        </div>
                                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Email Address<span class="text-danger"> *</span></label>
                                                        <input type="email" class="form-control">
                                                    </div>
                                                </div>			
                                                <div class="col-lg-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Password<span class="text-danger"> *</span></label>
                                                        <div class="position-relative">
                                                            <input  [type]="password[1] ? 'text' : 'password'"
                                                            class="pass-inputs form-control">
                                                            <span
                                                            class="isax toggle-password"
                                                            [ngClass]="password[1] ? 'isax-eye' : 'isax-eye-slash'"
                                                            (click)="togglePassword(1)"
                                                            (keydown.enter)="togglePassword(1)"
                                                            tabindex="0"
                                                          ></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr class="mt-2">
                                            <h5 class="fs-18 mb-3">Billing Address</h5>
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div class="mb-3">
                                                        <label class="form-label">Address<span class="text-danger"> *</span></label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Country<span class="text-danger"> *</span></label>
                                                        <mat-select class="custom-mat-select select" placeholder="Select">
                                                            <mat-option value="1">Select</mat-option>
                                                            <mat-option value="1">USA</mat-option>
                                                            <mat-option value="1">Canada</mat-option>
                                                            <mat-option value="1">Germany</mat-option>
                                                            <mat-option value="1">France</mat-option>
                                                        </mat-select>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">State<span class="text-danger"> *</span></label>
                                                        <mat-select class="custom-mat-select select" placeholder="Select">
                                                            <mat-option value="1">Select</mat-option>
                                                            <mat-option value="1">California</mat-option>
                                                            <mat-option value="1">New York</mat-option>
                                                            <mat-option value="1">Texas</mat-option>
                                                            <mat-option value="1">Florida</mat-option>
                                                        </mat-select>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">City<span class="text-danger"> *</span></label>
                                                        <mat-select class="custom-mat-select select" placeholder="Select">
                                                            <mat-option value="1">Select</mat-option>
                                                            <mat-option value="1">Los Angeles</mat-option>
                                                            <mat-option value="1">San Diego</mat-option>
                                                            <mat-option value="1">Fresno</mat-option>
                                                            <mat-option value="1">San Francisco</mat-option>
                                                        </mat-select>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Postal Code <span class="text-danger"> *</span></label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Email Address<span class="text-danger"> *</span></label>
                                                        <input type="email" class="form-control">
                                                    </div>
                                                </div>			
                                                <div class="col-lg-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Password<span class="text-danger"> *</span></label>
                                                        <div class="position-relative">
                                                            <input  [type]="password[2] ? 'text' : 'password'"
                                                                class="pass-inputs form-control">
                                                                <span
                                                                class="isax toggle-password"
                                                                [ngClass]="password[2] ? 'isax-eye' : 'isax-eye-slash'"
                                                                (click)="togglePassword(2)"
                                                                (keydown.enter)="togglePassword(2)"
                                                                tabindex="0"
                                                            ></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr class="mt-2">
                                            <h5 class="fs-18 mb-3">Billing Address</h5>
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div class="mb-3">
                                                        <label class="form-label">Address<span class="text-danger"> *</span></label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Country<span class="text-danger"> *</span></label>
                                                        <mat-select class="custom-mat-select select" placeholder="Select">
                                                            <mat-option value="1">Select</mat-option>
                                                            <mat-option value="1">USA</mat-option>
                                                            <mat-option value="1">Canada</mat-option>
                                                            <mat-option value="1">Germany</mat-option>
                                                            <mat-option value="1">France</mat-option>
                                                        </mat-select>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">State<span class="text-danger"> *</span></label>
                                                        <mat-select class="custom-mat-select select" placeholder="Select">
                                                            <mat-option value="1">Select</mat-option>
                                                            <mat-option value="1">California</mat-option>
                                                            <mat-option value="1">New York</mat-option>
                                                            <mat-option value="1">Texas</mat-option>
                                                            <mat-option value="1">Florida</mat-option>
                                                        </mat-select>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">City<span class="text-danger"> *</span></label>
                                                        <mat-select class="custom-mat-select select" placeholder="Select">
                                                            <mat-option value="1">Select</mat-option>
                                                            <mat-option value="1">Los Angeles</mat-option>
                                                            <mat-option value="1">San Diego</mat-option>
                                                            <mat-option value="1">Fresno</mat-option>
                                                            <mat-option value="1">San Francisco</mat-option>
                                                        </mat-select>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Postal Code <span class="text-danger"> *</span></label>
                                                        <input type="text" class="form-control">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-end">
                                        <a href="javascript:void(0);" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#successful-modal">Proceed to Pay $99.00</a>
                                    </div>
                                 </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="subscription-details">
                                        <h5 class="fs-18 mb-3">Subscription Details</h5>
                                        <p class="mb-2">Plan Name: <span class="text-gray-9 float-end fw-medium">Basic</span></p>
                                        <p class="mb-2">Plan Amount: <span class="text-gray-9 float-end fw-medium">$99.00</span></p>
                                        <p class="mb-2">Tax: <span class="text-gray-9 float-end fw-medium">$0.00</span></p>
                                        <p>Total: <span class="text-gray-9 float-end fw-medium">$99.00</span></p>
                                    </div>
                                </div>
                               </div>
                            </form>
                            </div>
                    </div>
                </div>
            </div>
            <!-- pricing plan -->

            <div class="modal fade successful-modal" id="successful-modal">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body text-center custom-modal-body">
                            <span class="avatar avatar-lg bg-success rounded-circle mb-3">
                                <i class="fa-solid fa-check fs-14 text-white"></i>											
                            </span>
                            <div>
                                <h5 class="mb-1">Payment Successful</h5>
                                <p class="mb-3">Your purchase of the Basic Plan has been completed with reference number <a href="javascript:void(0);" class="text-primary" data-bs-toggle="modal" data-bs-target="#view_invoice">#INV1245</a></p>
                                <div class="d-flex align-items-center justify-content-center">
                                    <a href="javascript:void(0);" class="btn bg-gray-100 rounded-pill me-2" data-bs-toggle="modal" data-bs-target="#pricing-plan">Back to Plans</a>
                                    <a href="javascript:void(0);" class="btn btn-secondary rounded-pill" data-bs-toggle="modal" data-bs-target="#view_invoice">View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- View Invoice -->
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
                                                    <p class="text-gray-9 fw-semibold">Basic Plan</p>
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
                                        <p>Invoice for course purchase, covering course fee.</p>
                                    </div>
                                    <div>
                                        <h6 class="mb-1 fs-16">Terms and Conditions</h6>
                                        <p>Full payment grants non-transferable access to the course.</p>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="text-end pe-4 mb-2">
                                        <img src="assets/img/sign.svg" class="img-fluid" alt="sign">
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
            </div>
            <!-- /View Invoice -->

            <!-- add new card -->
            <div class="modal fade" id="add_new_card">
                <div class="modal-dialog modal-dialog-centered modal-md">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5>Add New Card</h5>
                            <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <i class="isax isax-close-circle5"></i>
                            </button>
                        </div>
                        <form>
                            <div class="modal-body pb-0">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="mb-3">
                                            <label class="form-label">Payment Method<span class="text-danger"> *</span></label>
                                            <mat-select class="custom-mat-select select" placeholder="Select"> 
                                                <mat-option value="1">Select</mat-option>
                                                <mat-option value="1">Credit Card</mat-option>
                                                <mat-option value="1">Debit Card</mat-option>
                                                <mat-option value="1">Paypal</mat-option>
                                                <mat-option value="1">Stripe</mat-option>
                                            </mat-select>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="mb-3">
                                            <label class="form-label">Card Number<span class="text-danger"> *</span></label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>	
                                    <div class="col-md-6">
                                        <div class="mb-3 add-card-date ngxdate">
                                            <label class="form-label">Expiration Date<span class="text-danger"> *</span></label>
                                            <div class="input-icon position-relative calender-input">
                                                <span class="input-icon-addon">
                                                    <i class="isax isax-calendar"></i>
                                                </span>
                                                <input type="text" class="form-control datetimepicker" bsDatepicker container=".ngxdate" [bsConfig]="{ adaptivePosition: true }" placeholder="dd/mm/yyyy">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="form-label">CVV<span class="text-danger"> *</span></label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>	
                                    <div class="col-md-12">
                                        <div class="mb-3">
                                            <label class="form-label">Name on Card<span class="text-danger"> *</span></label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>								
                            
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button class="btn bg-gray-100 rounded-pill me-2" type="button" data-bs-dismiss="modal">Cancel</button>
                                <button class="btn btn-secondary rounded-pill" type="submit" data-bs-dismiss="modal">Add Card</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- add new card -->

                <!-- edit card -->
                <div class="modal fade" id="edit_card">
                    <div class="modal-dialog modal-dialog-centered modal-md">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5>Edit Card</h5>
                                <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                                    <i class="isax isax-close-circle5"></i>
                                </button>
                            </div>
                            <form>
                                <div class="modal-body pb-0">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="mb-3">
                                                <label class="form-label">Payment Method<span class="text-danger"> *</span></label>
                                                <mat-select class="custom-mat-select select" placeholder="Credit Card"> 
                                                    <mat-option value="1">Select</mat-option>
                                                    <mat-option value="1">Credit Card</mat-option>
                                                    <mat-option value="1">Debit Card</mat-option>
                                                    <mat-option value="1">Paypal</mat-option>
                                                    <mat-option value="1">Stripe</mat-option>
                                                </mat-select>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="mb-3">
                                                <label class="form-label">Card Number<span class="text-danger"> *</span></label>
                                                <input type="text" class="form-control" value="9834 7923 4098 1568">
                                            </div>
                                        </div>	
                                        <div class="col-md-6">
                                            <div class="mb-3 add-card-date ngxdate1">
                                                <label class="form-label">Expiration Date<span class="text-danger"> *</span></label>
                                                <div class="input-icon position-relative calender-input">
                                                    <span class="input-icon-addon">
                                                        <i class="isax isax-calendar"></i>
                                                    </span>
                                                    <input type="text" class="form-control datetimepicker" bsDatepicker container=".ngxdate1" [bsConfig]="{ adaptivePosition: true }" placeholder="dd/mm/yyyy" value="02/25">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label class="form-label">CVV<span class="text-danger"> *</span></label>
                                                <input type="text" class="form-control" value="725">
                                            </div>
                                        </div>	
                                        <div class="col-md-12">
                                            <div class="mb-3">
                                                <label class="form-label">Name on Card<span class="text-danger"> *</span></label>
                                                <input type="text" class="form-control" value="Eugene Andre">
                                            </div>
                                        </div>								
                                
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button class="btn bg-gray-100 rounded-pill me-2" type="button" data-bs-dismiss="modal">Cancel</button>
                                    <button class="btn btn-secondary rounded-pill" type="submit" data-bs-dismiss="modal">Save Changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <!-- edit card -->

            <!-- Delete Modal -->
            <div class="modal fade" id="delete_modal">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body text-center custom-modal-body">
                            <span class="avatar avatar-lg bg-secondary-transparent rounded-circle mb-2">
                                <i class="isax isax-trash fs-24 text-danger"></i>
                            </span>
                            <div>
                                <h4 class="mb-2">Delete Card</h4>
                                <p class="mb-3">Are you sure you want to delete card?</p>
                                <div class="d-flex align-items-center justify-content-center">
                                    <a href="javascript:void(0);" class="btn bg-gray-100 rounded-pill me-2" data-bs-dismiss="modal">Cancel</a>
                                    <a href="javascript:void(0);" class="btn btn-secondary rounded-pill" data-bs-dismiss="modal">Yes, Remove All</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Delete Modal -->` }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorPlansComponent, { className: "InstructorPlansComponent", filePath: "src/app/features/instructor/settings/instructor-plans/instructor-plans.component.ts", lineNumber: 21 });
})();
export {
  InstructorPlansComponent
};
//# sourceMappingURL=chunk-FV2ZV7FX.js.map
