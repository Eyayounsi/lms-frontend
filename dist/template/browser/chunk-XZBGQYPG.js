import {
  CustomPaginationComponent
} from "./chunk-PUV6J7XP.js";
import {
  MatTableDataSource,
  PaginationService
} from "./chunk-CUBDUMMA.js";
import {
  MatSort,
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

// src/app/features/student/student-tickets/student-tickets.component.ts
var _c0 = () => ({ standalone: true });
function StudentTicketsComponent_For_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 85);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 86);
    \u0275\u0275element(10, "i", 72);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span", 86);
    \u0275\u0275element(16, "i", 72);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "div", 8)(20, "a", 87);
    \u0275\u0275element(21, "i", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "a", 89);
    \u0275\u0275element(23, "i", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "a", 91);
    \u0275\u0275element(25, "i", 92);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r1.ticketId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.subject);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r1.priority === "High" ? "bg-soft-danger" : data_r1.priority === "Medium" ? "bg-soft-skyblue" : "bg-soft-success");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.priority);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.category);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r1.status === "Opened" ? "bg-purple" : data_r1.status === "Inprogress" ? "bg-warning" : "bg-success");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.status);
  }
}
var StudentTicketsComponent = class _StudentTicketsComponent {
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
    this.data.getInstructionTicket().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.students_tickets) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getInstructionTicket().subscribe((apiRes) => {
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
  static \u0275fac = function StudentTicketsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentTicketsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentTicketsComponent, selectors: [["app-student-tickets"]], decls: 324, vars: 3, consts: [[1, "tickets"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "page-title"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_ticket", 1, "btn", "btn-secondary", "rounded-pill"], [1, "isax", "isax-add-circle", "me-2", "fs-10"], [1, "row"], [1, "col-md-6", "col-xl-4"], [1, "card"], [1, "card-body"], [1, "d-flex", "align-items-center"], [1, "icon-box", "bg-primary-transparent", "me-3", "flex-shrink-0"], ["src", "assets/img/icon/graduation.svg", "alt", ""], [1, "mb-1"], [1, "fw-bold"], [1, "icon-box", "bg-secondary-transparent", "me-3", "flex-shrink-0"], ["src", "assets/img/icon/book.svg", "alt", ""], [1, "student-info"], [1, "icon-box", "bg-success-transparent", "me-3", "flex-shrink-0"], ["src", "assets/img/icon/bookmark.svg", "alt", ""], [1, "d-block"], [1, "fs-24", "mt-1"], [1, "row", "align-items-center", "mb-2"], [1, "col-md-8"], [1, "d-flex", "align-items-center", "flex-wrap"], [1, "mb-3"], [1, "dropdown", "me-3"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle", "text-gray-6", "btn", "rounded", "border", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "dropdown"], [1, "col-md-4"], [1, "input-icon", "mb-3"], [1, "input-icon-addon"], [1, "isax", "isax-search-normal-14"], ["type", "search", "placeholder", "Search", 1, "form-control", "form-control-md", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "table-responsive", "custom-table"], ["matSort", "", 1, "table", 3, "matSortChange"], [1, "thead-light"], ["id", "add_ticket", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "custom-btn-close"], [1, "isax", "isax-close-circle5"], [1, "modal-body"], [1, "col-md-12"], [1, "form-label"], [1, "text-danger"], ["type", "text", 1, "form-control"], [1, "col-md-6"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], [1, "summernote"], [1, "file-upload", "drag-file", "w-100", "d-flex", "align-items-center", "justify-content-center", "flex-column"], [1, "upload-img", "mb-2"], [1, "isax", "isax-folder5", "fs-24"], [1, "mb-1", "text-gray-9", "fw-medium"], [1, "mb-2", "fs-12"], ["type", "file", "accept", "video/image"], [1, "btn", "mt-2", "btn-secondary", "rounded-pill"], [1, "isax", "isax-document-upload", "me-1"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "bg-gray-100", "rounded-pill", "me-2"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "rounded-pill"], ["id", "edit_ticket", 1, "modal", "fade"], ["type", "text", "value", "Issue with Course Notification Emails", 1, "form-control"], ["placeholder", "Mailing Issues", 1, "custom-mat-select", "select"], ["placeholder", "High", 1, "custom-mat-select", "select"], ["id", "ticket_details", 1, "modal", "fade"], [1, "d-inline-flex", "align-items-center"], [1, "text-primary", "fs-14", "ms-2"], [1, "d-flex", "align-items-center", "justify-content-end"], [1, "badge", "badge-sm", "bg-purple", "d-inline-flex", "align-items-center", "me-2"], [1, "fa-solid", "fa-circle", "fs-5", "me-1"], [1, "col-lg-4"], [1, "badge", "bg-soft-danger", "badge-sm", "d-inline-flex", "align-items-center"], [1, "col-lg-12"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-body", "text-center", "custom-modal-body"], [1, "avatar", "avatar-lg", "bg-danger-transparent", "rounded-circle", "mb-2"], [1, "isax", "isax-trash", "fs-24", "text-danger"], [1, "mb-2"], [1, "d-flex", "align-items-center", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "bg-gray-100", "rounded-pill", "me-2"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "rounded-pill"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#ticket_details", 1, "text-primary"], [1, "badge", "badge-sm", "d-inline-flex", "align-items-center", 3, "ngClass"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#ticket_details", 1, "d-inline-flex", "fs-14", "me-1", "action-icon"], [1, "isax", "isax-eye"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#edit_ticket", 1, "d-inline-flex", "fs-14", "me-2", "action-icon"], [1, "isax", "isax-edit-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "d-inline-flex", "fs-14", "action-icon"], [1, "isax", "isax-trash"]], template: function StudentTicketsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5");
      \u0275\u0275text(3, "Support Tickets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "a", 2);
      \u0275\u0275element(5, "i", 3);
      \u0275\u0275text(6, "Add Ticket");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "span", 9);
      \u0275\u0275element(13, "img", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div")(15, "p", 11);
      \u0275\u0275text(16, "Total Tickets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "h4", 12);
      \u0275\u0275text(18, "50");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(19, "div", 5)(20, "div", 6)(21, "div", 7)(22, "div", 8)(23, "span", 13);
      \u0275\u0275element(24, "img", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div")(26, "p", 11);
      \u0275\u0275text(27, "Opened Tickets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "h4", 12);
      \u0275\u0275text(29, "30");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(30, "div", 5)(31, "div", 15)(32, "div", 8)(33, "span", 16);
      \u0275\u0275element(34, "img", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div")(36, "span", 18);
      \u0275\u0275text(37, "Closed Tickets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "h4", 19);
      \u0275\u0275text(39, "25");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(40, "div", 20)(41, "div", 21)(42, "div", 22)(43, "div", 23)(44, "div", 24)(45, "a", 25);
      \u0275\u0275text(46, " Category ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "ul", 26)(48, "li")(49, "a", 27);
      \u0275\u0275text(50, "Mailing Issues");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "li")(52, "a", 27);
      \u0275\u0275text(53, "Language Issues");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "li")(55, "a", 27);
      \u0275\u0275text(56, "Installation Error");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(57, "div", 23)(58, "div", 24)(59, "a", 25);
      \u0275\u0275text(60, " Priority ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "ul", 26)(62, "li")(63, "a", 27);
      \u0275\u0275text(64, "High");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "li")(66, "a", 27);
      \u0275\u0275text(67, "Low");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "li")(69, "a", 27);
      \u0275\u0275text(70, "Medium");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(71, "div", 23)(72, "div", 28)(73, "a", 25);
      \u0275\u0275text(74, " Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "ul", 26)(76, "li")(77, "a", 27);
      \u0275\u0275text(78, "Opened");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "li")(80, "a", 27);
      \u0275\u0275text(81, "Inprogress");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "li")(83, "a", 27);
      \u0275\u0275text(84, "Closed");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(85, "div", 29)(86, "div", 30)(87, "span", 31);
      \u0275\u0275element(88, "i", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "input", 33);
      \u0275\u0275twoWayListener("ngModelChange", function StudentTicketsComponent_Template_input_ngModelChange_89_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function StudentTicketsComponent_Template_input_ngModelChange_89_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(90, "div", 34)(91, "table", 35);
      \u0275\u0275listener("matSortChange", function StudentTicketsComponent_Template_table_matSortChange_91_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(92, "thead", 36)(93, "tr")(94, "th");
      \u0275\u0275text(95, "Ticket ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "th");
      \u0275\u0275text(97, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "th");
      \u0275\u0275text(99, "Subject");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "th");
      \u0275\u0275text(101, "Priority");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "th");
      \u0275\u0275text(103, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "th");
      \u0275\u0275text(105, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(106, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "tbody");
      \u0275\u0275repeaterCreate(108, StudentTicketsComponent_For_109_Template, 26, 8, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(110, "app-custom-pagination");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "div", 37)(112, "div", 38)(113, "div", 39)(114, "div", 40)(115, "h5", 12);
      \u0275\u0275text(116, "Add Ticket");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "button", 41);
      \u0275\u0275element(118, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(119, "form")(120, "div", 43)(121, "div", 4)(122, "div", 44)(123, "div", 23)(124, "label", 45);
      \u0275\u0275text(125, "Ticket Title ");
      \u0275\u0275elementStart(126, "span", 46);
      \u0275\u0275text(127, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(128, "input", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(129, "div", 48)(130, "div", 23)(131, "label", 45);
      \u0275\u0275text(132, "Category ");
      \u0275\u0275elementStart(133, "span", 46);
      \u0275\u0275text(134, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(135, "mat-select", 49)(136, "mat-option", 50);
      \u0275\u0275text(137, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "mat-option", 50);
      \u0275\u0275text(139, "Mailing Issues");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "mat-option", 50);
      \u0275\u0275text(141, "Language Issues");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "mat-option", 50);
      \u0275\u0275text(143, "Installation Error");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(144, "div", 48)(145, "div", 23)(146, "label", 45);
      \u0275\u0275text(147, "Priority ");
      \u0275\u0275elementStart(148, "span", 46);
      \u0275\u0275text(149, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(150, "mat-select", 49)(151, "mat-option", 50);
      \u0275\u0275text(152, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "mat-option", 50);
      \u0275\u0275text(154, "High");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "mat-option", 50);
      \u0275\u0275text(156, "Low");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "mat-option", 50);
      \u0275\u0275text(158, "Medium");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(159, "div", 44)(160, "div", 23)(161, "label", 45);
      \u0275\u0275text(162, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(163, "div", 51)(164, "p");
      \u0275\u0275text(165, "Enter Ticket Detail");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(166, "div", 44)(167, "div", 23)(168, "label", 45);
      \u0275\u0275text(169, "Attachments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "div", 52)(171, "span", 53);
      \u0275\u0275element(172, "i", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "p", 55);
      \u0275\u0275text(174, "Drag and drop your files");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "p", 56);
      \u0275\u0275text(176, "Accept File Type: doc,docx,jpg,jpeg,png,txt,pdf");
      \u0275\u0275elementEnd();
      \u0275\u0275element(177, "input", 57);
      \u0275\u0275elementStart(178, "span", 58);
      \u0275\u0275element(179, "i", 59);
      \u0275\u0275text(180, "Upload");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(181, "div", 60)(182, "button", 61);
      \u0275\u0275text(183, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "button", 62);
      \u0275\u0275text(185, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(186, "div", 63)(187, "div", 38)(188, "div", 39)(189, "div", 40)(190, "h5", 12);
      \u0275\u0275text(191, "Edit Ticket");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "button", 41);
      \u0275\u0275element(193, "i", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(194, "form")(195, "div", 43)(196, "div", 4)(197, "div", 44)(198, "div", 23)(199, "label", 45);
      \u0275\u0275text(200, "Ticket Title ");
      \u0275\u0275elementStart(201, "span", 46);
      \u0275\u0275text(202, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(203, "input", 64);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(204, "div", 48)(205, "div", 23)(206, "label", 45);
      \u0275\u0275text(207, "Category ");
      \u0275\u0275elementStart(208, "span", 46);
      \u0275\u0275text(209, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(210, "mat-select", 65)(211, "mat-option", 50);
      \u0275\u0275text(212, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "mat-option", 50);
      \u0275\u0275text(214, "Mailing Issues");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "mat-option", 50);
      \u0275\u0275text(216, "Language Issues");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(217, "mat-option", 50);
      \u0275\u0275text(218, "Installation Error");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(219, "div", 48)(220, "div", 23)(221, "label", 45);
      \u0275\u0275text(222, "Priority ");
      \u0275\u0275elementStart(223, "span", 46);
      \u0275\u0275text(224, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(225, "mat-select", 66)(226, "mat-option", 50);
      \u0275\u0275text(227, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "mat-option", 50);
      \u0275\u0275text(229, "High");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(230, "mat-option", 50);
      \u0275\u0275text(231, "Low");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "mat-option", 50);
      \u0275\u0275text(233, "Medium");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(234, "div", 44)(235, "div", 23)(236, "label", 45);
      \u0275\u0275text(237, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(238, "div", 51)(239, "p");
      \u0275\u0275text(240, "Enter Ticket Detail");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(241, "div", 44)(242, "div", 23)(243, "label", 45);
      \u0275\u0275text(244, "Attachments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(245, "div", 52)(246, "span", 53);
      \u0275\u0275element(247, "i", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(248, "p", 55);
      \u0275\u0275text(249, "Drag and drop your files");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(250, "p", 56);
      \u0275\u0275text(251, "Accept File Type: doc,docx,jpg,jpeg,png,txt,pdf");
      \u0275\u0275elementEnd();
      \u0275\u0275element(252, "input", 57);
      \u0275\u0275elementStart(253, "span", 58);
      \u0275\u0275element(254, "i", 59);
      \u0275\u0275text(255, "Upload");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(256, "div", 60)(257, "button", 61);
      \u0275\u0275text(258, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(259, "button", 62);
      \u0275\u0275text(260, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(261, "div", 67)(262, "div", 38)(263, "div", 39)(264, "div", 40)(265, "h5", 68);
      \u0275\u0275text(266, "Ticket Details ");
      \u0275\u0275elementStart(267, "span", 69);
      \u0275\u0275text(268, "#TIC010");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(269, "div", 70)(270, "span", 71);
      \u0275\u0275element(271, "i", 72);
      \u0275\u0275text(272, "Opened");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(273, "button", 41);
      \u0275\u0275element(274, "i", 42);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(275, "div", 43)(276, "div", 4)(277, "div", 73)(278, "div", 23)(279, "h6", 11);
      \u0275\u0275text(280, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(281, "p");
      \u0275\u0275text(282, "Mailing Issues");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(283, "div", 73)(284, "div", 23)(285, "h6", 11);
      \u0275\u0275text(286, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(287, "p");
      \u0275\u0275text(288, "26 Jul 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(289, "div", 73)(290, "div", 23)(291, "h6", 11);
      \u0275\u0275text(292, "Priority");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(293, "span", 74);
      \u0275\u0275element(294, "i", 72);
      \u0275\u0275text(295, "High");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(296, "div", 75)(297, "div", 23)(298, "h6", 11);
      \u0275\u0275text(299, "Subject");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(300, "p");
      \u0275\u0275text(301, "Issue with Course Notification Emails");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(302, "div", 75)(303, "div")(304, "h6", 11);
      \u0275\u0275text(305, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(306, "p");
      \u0275\u0275text(307, "I am not receiving important emails from the LMS platform, such as course notifications, enrollment confirmations, or assignment updates. Additionally, some students have reported that they are not receiving emails about live classes or announcements. This issue is affecting communication and timely updates for both instructors and students. Please investigate and resolve this issue as soon as possible. ");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(308, "div", 76)(309, "div", 77)(310, "div", 39)(311, "div", 78)(312, "span", 79);
      \u0275\u0275element(313, "i", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(314, "div")(315, "h4", 81);
      \u0275\u0275text(316, "Delete Ticket");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(317, "p", 23);
      \u0275\u0275text(318, "Are you sure you want to delete ticket?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(319, "div", 82)(320, "a", 83);
      \u0275\u0275text(321, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(322, "a", 84);
      \u0275\u0275text(323, "Yes, Remove All");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(89);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(2, _c0));
      \u0275\u0275advance(19);
      \u0275\u0275repeater(ctx.tableData);
    }
  }, dependencies: [CommonModule, NgClass, MatSortModule, MatSort, MatSelectModule, MatSelect, MatOption, CustomPaginationComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentTicketsComponent, [{
    type: Component,
    args: [{ selector: "app-student-tickets", imports: [CommonModule, MatSortModule, MatSelectModule, CustomPaginationComponent, FormsModule], template: `
<div class="tickets">
    <div class="d-flex align-items-center justify-content-between flex-wrap page-title">
    <h5>Support Tickets</h5>
    <a href="javascript:void(0);" class="btn btn-secondary rounded-pill" data-bs-toggle="modal" data-bs-target="#add_ticket"><i class="isax isax-add-circle me-2 fs-10"></i>Add Ticket</a>
    </div> 
    <div class="row">
        <div class="col-md-6 col-xl-4">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex align-items-center">
                        <span class="icon-box bg-primary-transparent me-3 flex-shrink-0">
                            <img src="assets/img/icon/graduation.svg" alt="">
                        </span>
                        <div>
                            <p class="mb-1">Total Tickets</p>
                            <h4 class="fw-bold">50</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-xl-4">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex align-items-center">
                        <span class="icon-box bg-secondary-transparent me-3 flex-shrink-0">
                            <img src="assets/img/icon/book.svg" alt="">
                        </span>
                        <div>
                            <p class="mb-1">Opened Tickets</p>
                            <h4 class="fw-bold">30</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-xl-4">
            <div class="student-info">
                <div class="d-flex align-items-center">
                    <span class="icon-box bg-success-transparent me-3 flex-shrink-0">
                        <img src="assets/img/icon/bookmark.svg" alt="">
                    </span>
                    <div>
                        <span class="d-block">Closed Tickets</span>
                        <h4 class="fs-24 mt-1">25</h4>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    <div class="row align-items-center mb-2">
        <div class="col-md-8">
            <div class="d-flex align-items-center flex-wrap">
                <div class="mb-3">
                    <div class="dropdown me-3">
                        <a href="javascript:void(0);" class="dropdown-toggle text-gray-6 btn  rounded border d-inline-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
                            Category
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item rounded-1">Mailing Issues</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item rounded-1">Language Issues</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item rounded-1">Installation Error</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="mb-3">
                    <div class="dropdown me-3">
                        <a href="javascript:void(0);" class="dropdown-toggle text-gray-6 btn  rounded border d-inline-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
                            Priority
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item rounded-1">High</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item rounded-1">Low</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item rounded-1">Medium</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="mb-3">
                    <div class="dropdown">
                        <a href="javascript:void(0);" class="dropdown-toggle text-gray-6 btn  rounded border d-inline-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
                            Status
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item rounded-1">Opened</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item rounded-1">Inprogress</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item rounded-1">Closed</a>
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
    <div class="table-responsive custom-table">
        <table matSort (matSortChange)="sortData($event)" class="table">
            <thead class="thead-light">
                <tr>
                    <th>Ticket ID</th>
                    <th>Date</th>
                    <th>Subject</th>
                    <th>Priority</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                @for (data of tableData;track data){
                <tr>
                    <td><a href="javascript:void(0);" class="text-primary" data-bs-toggle="modal" data-bs-target="#ticket_details">{{data.ticketId}}</a></td>
                    <td>{{data.date}}</td>
                    <td>{{data.subject}}</td>
                    <td><span class="badge badge-sm d-inline-flex align-items-center" [ngClass]="data.priority==='High'?'bg-soft-danger':data.priority==='Medium'?'bg-soft-skyblue':'bg-soft-success'"><i class="fa-solid fa-circle fs-5 me-1"></i>{{data.priority}}</span></td>
                    <td>{{data.category}}</td>
                    <td><span class="badge badge-sm d-inline-flex align-items-center" [ngClass]="data.status==='Opened'?'bg-purple':data.status==='Inprogress'?'bg-warning':'bg-success'"><i class="fa-solid fa-circle fs-5 me-1"></i>{{data.status}}</span></td>
                    <td>
                        <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="d-inline-flex fs-14 me-1 action-icon" data-bs-toggle="modal" data-bs-target="#ticket_details"><i class="isax isax-eye"></i></a>
                            <a href="javascript:void(0);" class="d-inline-flex fs-14 me-2 action-icon" data-bs-toggle="modal" data-bs-target="#edit_ticket"><i class="isax isax-edit-2"></i></a>
                            <a href="javascript:void(0);" class="d-inline-flex fs-14 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash"></i></a>
                        </div>
                    </td>
                </tr>
            }
                
            </tbody>
        </table>
    </div>
    <app-custom-pagination/>                 
</div>


            <!-- Add Ticket -->
        <div class="modal fade" id="add_ticket">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="fw-bold">Add Ticket</h5>
                        <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <i class="isax isax-close-circle5"></i>
                        </button>
                    </div>
                    <form>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="mb-3">
                                        <label class="form-label">Ticket Title <span class="text-danger"> *</span></label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Category <span class="text-danger"> *</span></label>
                                        <mat-select class="custom-mat-select select" placeholder="Select">
                                            <mat-option value="1">Select</mat-option>
                                            <mat-option value="1">Mailing Issues</mat-option>
                                            <mat-option value="1">Language Issues</mat-option>
                                            <mat-option value="1">Installation Error</mat-option>
                                        </mat-select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Priority <span class="text-danger"> *</span></label>
                                        <mat-select class="custom-mat-select select" placeholder="Select">
                                            <mat-option value="1">Select</mat-option>
                                            <mat-option value="1">High</mat-option>
                                            <mat-option value="1">Low</mat-option>
                                            <mat-option value="1">Medium</mat-option>
                                        </mat-select>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="mb-3">
                                        <label class="form-label">Description</label>
                                        <div class="summernote"><p>Enter Ticket Detail</p></div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="mb-3">
                                        <label class="form-label">Attachments</label>
                                        <div class="file-upload drag-file w-100 d-flex align-items-center justify-content-center flex-column">
                                            <span class="upload-img mb-2"><i class="isax isax-folder5 fs-24"></i></span>
                                            <p class="mb-1 text-gray-9 fw-medium">Drag and drop your files</p>
                                            <p class="mb-2 fs-12">Accept File Type: doc,docx,jpg,jpeg,png,txt,pdf</p>
                                            <input type="file" accept="video/image">
                                            <span class="btn mt-2 btn-secondary rounded-pill"><i class="isax isax-document-upload me-1"></i>Upload</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn bg-gray-100 rounded-pill me-2" type="button" data-bs-dismiss="modal">Cancel</button>
                            <button class="btn btn-secondary rounded-pill" type="submit" data-bs-dismiss="modal">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- /Add Ticket -->

        <!-- Edit Ticket -->
        <div class="modal fade" id="edit_ticket">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="fw-bold">Edit Ticket</h5>
                        <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <i class="isax isax-close-circle5"></i>
                        </button>
                    </div>
                    <form>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="mb-3">
                                        <label class="form-label">Ticket Title <span class="text-danger"> *</span></label>
                                        <input type="text" class="form-control" value="Issue with Course Notification Emails">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Category <span class="text-danger"> *</span></label>
                                        <mat-select class="custom-mat-select select" placeholder="Mailing Issues">
                                            <mat-option value="1">Select</mat-option>
                                            <mat-option value="1">Mailing Issues</mat-option>
                                            <mat-option value="1">Language Issues</mat-option>
                                            <mat-option value="1">Installation Error</mat-option>
                                        </mat-select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label">Priority <span class="text-danger"> *</span></label>
                                        <mat-select class="custom-mat-select select" placeholder="High">
                                            <mat-option value="1">Select</mat-option>
                                            <mat-option value="1">High</mat-option>
                                            <mat-option value="1">Low</mat-option>
                                            <mat-option value="1">Medium</mat-option>
                                        </mat-select>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="mb-3">
                                        <label class="form-label">Description</label>
                                        <div class="summernote"><p>Enter Ticket Detail</p></div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="mb-3">
                                        <label class="form-label">Attachments</label>
                                        <div class="file-upload drag-file w-100 d-flex align-items-center justify-content-center flex-column">
                                            <span class="upload-img mb-2"><i class="isax isax-folder5 fs-24"></i></span>
                                            <p class="mb-1 text-gray-9 fw-medium">Drag and drop your files</p>
                                            <p class="mb-2 fs-12">Accept File Type: doc,docx,jpg,jpeg,png,txt,pdf</p>
                                            <input type="file" accept="video/image">
                                            <span class="btn mt-2 btn-secondary rounded-pill"><i class="isax isax-document-upload me-1"></i>Upload</span>
                                        </div>
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
        <!-- /Edit Ticket -->

        <!-- Ticket Details -->
        <div class="modal fade" id="ticket_details">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="d-inline-flex align-items-center">Ticket Details <span class="text-primary fs-14 ms-2">#TIC010</span></h5>
                        <div class="d-flex align-items-center justify-content-end">
                            <span class="badge badge-sm bg-purple d-inline-flex align-items-center me-2"><i class="fa-solid fa-circle fs-5 me-1"></i>Opened</span>
                            <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <i class="isax isax-close-circle5"></i>
                            </button>
                        </div>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="mb-3">
                                    <h6 class="mb-1">Category</h6>
                                    <p>Mailing Issues</p>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="mb-3">
                                    <h6 class="mb-1">Date</h6>
                                    <p>26 Jul 2025</p>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="mb-3">
                                    <h6 class="mb-1">Priority</h6>
                                    <span class="badge bg-soft-danger badge-sm d-inline-flex align-items-center"><i class="fa-solid fa-circle fs-5 me-1"></i>High</span>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="mb-3">
                                    <h6 class="mb-1">Subject</h6>
                                    <p>Issue with Course Notification Emails</p>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div>
                                    <h6 class="mb-1">Description</h6>
                                    <p>I am not receiving important emails from the LMS platform, such as course notifications, 
                                        enrollment confirmations, or assignment updates. Additionally, some 
                                        students have reported that they are not receiving emails about live classes or announcements.
                                        This issue is affecting communication and timely updates for both instructors and students. 
                                        Please investigate and resolve this issue as soon as possible.
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Ticket Details -->

        <!-- Delete Modal -->
        <div class="modal fade" id="delete_modal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body text-center custom-modal-body">
                        <span class="avatar avatar-lg bg-danger-transparent rounded-circle mb-2">
                            <i class="isax isax-trash fs-24 text-danger"></i>
                        </span>
                        <div>
                            <h4 class="mb-2">Delete Ticket</h4>
                            <p class="mb-3">Are you sure you want to delete ticket?</p>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentTicketsComponent, { className: "StudentTicketsComponent", filePath: "src/app/features/student/student-tickets/student-tickets.component.ts", lineNumber: 19 });
})();
export {
  StudentTicketsComponent
};
//# sourceMappingURL=chunk-XZBGQYPG.js.map
