import {
  MatPaginatorModule
} from "./chunk-FMFFEBQA.js";
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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/instructor/instructor-announcements/instructor-announcements.component.ts
var _c0 = () => ({ standalone: true });
function InstructorAnnouncementsComponent_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div")(5, "h6", 43)(6, "a", 53);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "td")(11, "span", 54);
    \u0275\u0275element(12, "i", 55);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "div", 56)(16, "a", 57);
    \u0275\u0275element(17, "i", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "a", 59);
    \u0275\u0275element(19, "i", 60);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.date);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(data_r1.announcement);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Course: ", data_r1.course);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r1.status === "Published" ? "bg-success" : "bg-skyblue");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.status);
  }
}
var InstructorAnnouncementsComponent = class _InstructorAnnouncementsComponent {
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
    this.data.getInstructorAnnouncement().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.instructorAnnouncements) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getInstructorAnnouncement().subscribe((apiRes) => {
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
  static \u0275fac = function InstructorAnnouncementsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorAnnouncementsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorAnnouncementsComponent, selectors: [["app-instructor-announcements"]], decls: 197, vars: 3, consts: [[1, "page-title", "d-flex", "align-items-center", "justify-content-between"], [1, "fw-bold"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_announcement", 1, "btn", "btn-secondary", "d-flex", "align-items-center"], [1, "isax", "isax-add-circle", "me-1"], [1, "row"], [1, "col-md-8"], [1, "mb-3"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle", "btn", "rounded", "border", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "col-md-4"], [1, "input-icon", "mb-3"], [1, "input-icon-addon"], [1, "isax", "isax-search-normal-14"], ["type", "search", "placeholder", "Search", 1, "form-control", "form-control-md", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "table-responsive", "custom-table"], ["matSort", "", 1, "table", 3, "matSortChange"], [1, "thead-light"], ["id", "add_announcement", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "custom-btn-close"], [1, "isax", "isax-close-circle5"], [1, "modal-body"], [1, "col-md-12"], [1, "form-label"], [1, "text-danger"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], ["type", "text", 1, "form-control"], ["placeholder", "Enter Description", 1, "form-control"], [1, "mb-0"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "bg-gray-100", "rounded-pill", "me-2"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "rounded-pill"], ["id", "edit_announcement", 1, "modal", "fade"], ["placeholder", "Information About UI/UX Design Degree", 1, "custom-mat-select", "select"], ["type", "text", "value", "Welcome to Introduction to Programming", 1, "form-control"], [1, "form-control"], ["placeholder", "Published", 1, "custom-mat-select", "select"], ["id", "view_announcement", 1, "modal", "fade"], [1, "mb-1"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-body", "text-center", "custom-modal-body"], [1, "avatar", "avatar-lg", "bg-danger-transparent", "rounded-circle", "mb-2"], [1, "isax", "isax-trash", "fs-24", "text-danger"], [1, "mb-2"], [1, "d-flex", "align-items-center", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "bg-gray-100", "rounded-pill", "me-2"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "rounded-pill"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view_announcement"], [1, "badge", "badge-sm", "d-inline-flex", "align-items-center", 3, "ngClass"], [1, "fa-solid", "fa-circle", "fs-5", "me-1"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "d-inline-flex", "fs-14", "me-1", "action-icon"], ["data-bs-toggle", "modal", "data-bs-target", "#edit_announcement", 1, "isax", "isax-edit-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "d-inline-flex", "fs-14", "action-icon"], [1, "isax", "isax-trash"]], template: function InstructorAnnouncementsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h5", 1);
      \u0275\u0275text(2, "Announcements");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div")(4, "a", 2);
      \u0275\u0275element(5, "i", 3);
      \u0275\u0275text(6, "Add Announcement ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "a", 8);
      \u0275\u0275text(12, " Status ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "ul", 9)(14, "li")(15, "a", 10);
      \u0275\u0275text(16, "Published");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "li")(18, "a", 10);
      \u0275\u0275text(19, "Draft");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(20, "div", 11)(21, "div", 12)(22, "span", 13);
      \u0275\u0275element(23, "i", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function InstructorAnnouncementsComponent_Template_input_ngModelChange_24_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function InstructorAnnouncementsComponent_Template_input_ngModelChange_24_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(25, "div", 16)(26, "table", 17);
      \u0275\u0275listener("matSortChange", function InstructorAnnouncementsComponent_Template_table_matSortChange_26_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(27, "thead", 18)(28, "tr")(29, "th");
      \u0275\u0275text(30, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "th");
      \u0275\u0275text(32, "Announcements");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th");
      \u0275\u0275text(34, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "tbody");
      \u0275\u0275repeaterCreate(37, InstructorAnnouncementsComponent_For_38_Template, 20, 5, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "div", 19)(40, "div", 20)(41, "div", 21)(42, "div", 22)(43, "h5", 1);
      \u0275\u0275text(44, "Add New Announcement");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "button", 23);
      \u0275\u0275element(46, "i", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "form")(48, "div", 25)(49, "div", 4)(50, "div", 26)(51, "div", 6)(52, "label", 27);
      \u0275\u0275text(53, "Course ");
      \u0275\u0275elementStart(54, "span", 28);
      \u0275\u0275text(55, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "mat-select", 29)(57, "mat-option", 30);
      \u0275\u0275text(58, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "mat-option", 30);
      \u0275\u0275text(60, "Information About UI/UX Design Degree");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "mat-option", 30);
      \u0275\u0275text(62, "Wordpress for Beginners - Master Wordpress Quickly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "mat-option", 30);
      \u0275\u0275text(64, "Introduction to Python Programming");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(65, "div", 26)(66, "div", 6)(67, "label", 27);
      \u0275\u0275text(68, "Announcement Title ");
      \u0275\u0275elementStart(69, "span", 28);
      \u0275\u0275text(70, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(71, "input", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div", 26)(73, "div", 6)(74, "label", 27);
      \u0275\u0275text(75, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(76, "textarea", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "div", 26)(78, "div", 33)(79, "label", 27);
      \u0275\u0275text(80, "Status ");
      \u0275\u0275elementStart(81, "span", 28);
      \u0275\u0275text(82, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "mat-select", 29)(84, "mat-option", 30);
      \u0275\u0275text(85, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "mat-option", 30);
      \u0275\u0275text(87, "Published");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "mat-option", 30);
      \u0275\u0275text(89, "Draft");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(90, "div", 34)(91, "button", 35);
      \u0275\u0275text(92, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "button", 36);
      \u0275\u0275text(94, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(95, "div", 37)(96, "div", 20)(97, "div", 21)(98, "div", 22)(99, "h5", 1);
      \u0275\u0275text(100, "Edit Announcement");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "button", 23);
      \u0275\u0275element(102, "i", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "form")(104, "div", 25)(105, "div", 4)(106, "div", 26)(107, "div", 6)(108, "label", 27);
      \u0275\u0275text(109, "Course ");
      \u0275\u0275elementStart(110, "span", 28);
      \u0275\u0275text(111, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(112, "mat-select", 38)(113, "mat-option", 30);
      \u0275\u0275text(114, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "mat-option", 30);
      \u0275\u0275text(116, "Information About UI/UX Design Degree");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "mat-option", 30);
      \u0275\u0275text(118, "Wordpress for Beginners - Master Wordpress Quickly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "mat-option", 30);
      \u0275\u0275text(120, "Introduction to Python Programming");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(121, "div", 26)(122, "div", 6)(123, "label", 27);
      \u0275\u0275text(124, "Announcement Title ");
      \u0275\u0275elementStart(125, "span", 28);
      \u0275\u0275text(126, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(127, "input", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(128, "div", 26)(129, "div", 6)(130, "label", 27);
      \u0275\u0275text(131, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "textarea", 40);
      \u0275\u0275text(133, "Enter Description");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(134, "div", 26)(135, "div", 33)(136, "label", 27);
      \u0275\u0275text(137, "Status ");
      \u0275\u0275elementStart(138, "span", 28);
      \u0275\u0275text(139, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(140, "mat-select", 41)(141, "mat-option", 30);
      \u0275\u0275text(142, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "mat-option", 30);
      \u0275\u0275text(144, "Published");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "mat-option", 30);
      \u0275\u0275text(146, "Draft");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(147, "div", 34)(148, "button", 35);
      \u0275\u0275text(149, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "button", 36);
      \u0275\u0275text(151, "Save Changes");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(152, "div", 42)(153, "div", 20)(154, "div", 21)(155, "div", 22)(156, "h5", 1);
      \u0275\u0275text(157, "Announcement Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "button", 23);
      \u0275\u0275element(159, "i", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(160, "div", 25)(161, "div", 6)(162, "h6", 43);
      \u0275\u0275text(163, "Course");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "p");
      \u0275\u0275text(165, "Introduction to Programming - Python & Java");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(166, "div", 6)(167, "h6", 43);
      \u0275\u0275text(168, "Title");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "p");
      \u0275\u0275text(170, "Guest Lecture Announcement");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(171, "div", 6)(172, "h6", 43);
      \u0275\u0275text(173, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "p");
      \u0275\u0275text(175, "I am excited to inform you that we will be having a guest lecture from , an expert . This will be an excellent opportunity to gain insight into and ask any questions you might have. Please make every effort to attend, as participation will count towards. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(176, "div", 33)(177, "h6", 43);
      \u0275\u0275text(178, "Added On");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "p");
      \u0275\u0275text(180, "26 Jul 2025, 01:30 PM");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(181, "div", 44)(182, "div", 45)(183, "div", 21)(184, "div", 46)(185, "span", 47);
      \u0275\u0275element(186, "i", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "div")(188, "h4", 49);
      \u0275\u0275text(189, "Delete Announcements");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(190, "p", 6);
      \u0275\u0275text(191, "Are you sure you want to delete announcements?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "div", 50)(193, "a", 51);
      \u0275\u0275text(194, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "a", 52);
      \u0275\u0275text(196, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(24);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(2, _c0));
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.tableData);
    }
  }, dependencies: [CommonModule, NgClass, MatTableModule, MatSortModule, MatSort, MatPaginatorModule, MatSelectModule, MatSelect, MatOption, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorAnnouncementsComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-announcements", imports: [CommonModule, MatTableModule, MatSortModule, MatPaginatorModule, MatSelectModule, FormsModule], template: `
    <div class="page-title d-flex align-items-center justify-content-between">
        <h5 class="fw-bold">Announcements</h5>
        <div>
            <a href="javascript:void(0);" class="btn btn-secondary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_announcement">
                <i class="isax isax-add-circle me-1"></i>Add Announcement
            </a>
        </div>
    </div>
    <div class="row">
        <div class="col-md-8">
            <div class="mb-3">
                <div class="dropdown">
                    <a href="javascript:void(0);" class="dropdown-toggle btn rounded border d-inline-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
                        Status
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end p-3">
                        <li>
                            <a href="javascript:void(0);" class="dropdown-item rounded-1">Published</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="dropdown-item rounded-1">Draft</a>
                        </li>
                    </ul>
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
        <table matSort (matSortChange)="sortData($event)"  class="table">
            <thead class="thead-light">
                <tr>
                    <th>Date</th>
                    <th>Announcements</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                @for (data of tableData;track data){
                    <tr>
                        <td>{{data.date}}</td>
                        <td>
                            <div>
                                <h6 class="mb-1"><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_announcement">{{data.announcement}}</a></h6>
                                <p>Course: {{data.course}}</p>
                            </div>
                        </td>
                        <td><span class="badge badge-sm d-inline-flex align-items-center" [ngClass]="data.status==='Published'?'bg-success':'bg-skyblue'"><i class="fa-solid fa-circle fs-5 me-1"></i>{{data.status}}</span></td>
                        <td>
                            <div class="d-flex align-items-center">
                                <a href="javascript:void(0);" class="d-inline-flex fs-14 me-1 action-icon"><i class="isax isax-edit-2" data-bs-toggle="modal" data-bs-target="#edit_announcement"></i></a>
                                <a href="javascript:void(0);" class="d-inline-flex fs-14 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash"></i></a>
                            </div>
                        </td>
                    </tr>
                }
            </tbody>
        </table>
    </div>


			<!-- Add Announcement -->
			<div class="modal fade" id="add_announcement">
				<div class="modal-dialog modal-dialog-centered modal-lg">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="fw-bold">Add New Announcement</h5>
							<button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
								<i class="isax isax-close-circle5"></i>
							</button>
						</div>
						<form>
							<div class="modal-body">
								<div class="row">
									<div class="col-md-12">
										<div class="mb-3">
											<label class="form-label">Course <span class="text-danger"> *</span></label>
											<mat-select class="custom-mat-select select" placeholder="Select">
												<mat-option value="1">Select</mat-option>
												<mat-option value="1">Information About UI/UX Design Degree</mat-option>
												<mat-option value="1">Wordpress for Beginners - Master Wordpress Quickly</mat-option>
												<mat-option value="1">Introduction to Python Programming</mat-option>
											</mat-select>
										</div>
									</div>
									<div class="col-md-12">
										<div class="mb-3">
											<label class="form-label">Announcement Title <span class="text-danger"> *</span></label>
											<input type="text" class="form-control">
										</div>
									</div>
									<div class="col-md-12">
										<div class="mb-3">
											<label class="form-label">Description</label>
											<textarea class="form-control" placeholder="Enter Description"></textarea>
										</div>
									</div>
									<div class="col-md-12">
										<div class="mb-0">
											<label class="form-label">Status <span class="text-danger"> *</span></label>
											<mat-select class="custom-mat-select select" placeholder="Select">
												<mat-option value="1">Select</mat-option>
												<mat-option value="1">Published</mat-option>
												<mat-option value="1">Draft</mat-option>
											</mat-select>
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
			<!-- /Add Announcement -->

			<!-- Edit Announcement -->
			<div class="modal fade" id="edit_announcement">
				<div class="modal-dialog modal-dialog-centered modal-lg">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="fw-bold">Edit Announcement</h5>
							<button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
								<i class="isax isax-close-circle5"></i>
							</button>
						</div>
						<form>
							<div class="modal-body">
								<div class="row">
									<div class="col-md-12">
										<div class="mb-3">
											<label class="form-label">Course <span class="text-danger"> *</span></label>
											<mat-select class="custom-mat-select select" placeholder="Information About UI/UX Design Degree">
												<mat-option value="1">Select</mat-option>
												<mat-option value="1">Information About UI/UX Design Degree</mat-option>
												<mat-option value="1">Wordpress for Beginners - Master Wordpress Quickly</mat-option>
												<mat-option value="1">Introduction to Python Programming</mat-option>
											</mat-select>
										</div>
									</div>
									<div class="col-md-12">
										<div class="mb-3">
											<label class="form-label">Announcement Title <span class="text-danger"> *</span></label>
											<input type="text" class="form-control" value="Welcome to Introduction to Programming">
										</div>
									</div>
									<div class="col-md-12">
										<div class="mb-3">
											<label class="form-label">Description</label>
											<textarea class="form-control">Enter Description</textarea>
										</div>
									</div>
									<div class="col-md-12">
										<div class="mb-0">
											<label class="form-label">Status <span class="text-danger"> *</span></label>
											<mat-select class="custom-mat-select select" placeholder="Published">
												<mat-option value="1">Select</mat-option>
												<mat-option value="1">Published</mat-option>
												<mat-option value="1">Draft</mat-option>
											</mat-select>
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
			<!-- /Edit Announcement -->

			<!-- Announcement Details -->
			<div class="modal fade" id="view_announcement">
				<div class="modal-dialog modal-dialog-centered modal-lg">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="fw-bold">Announcement Details</h5>
							<button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
								<i class="isax isax-close-circle5"></i>
							</button>
						</div>
						<div class="modal-body">
							<div class="mb-3">
								<h6 class="mb-1">Course</h6>
								<p>Introduction to Programming - Python & Java</p>
							</div>
							<div class="mb-3">
								<h6 class="mb-1">Title</h6>
								<p>Guest Lecture Announcement</p>
							</div>
							<div class="mb-3">
								<h6 class="mb-1">Description</h6>
								<p>I am excited to inform you that we will be having a guest lecture from , an expert . 
									This will be an excellent opportunity to gain insight into and ask any questions you might have. 
									Please make every effort to attend, as participation will count towards.
								</p>
							</div>
							<div class="mb-0">
								<h6 class="mb-1">Added On</h6>
								<p>26 Jul 2025, 01:30 PM</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /Announcement Details -->

			<!-- Delete Modal -->
			<div class="modal fade" id="delete_modal">
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						<div class="modal-body text-center custom-modal-body">
							<span class="avatar avatar-lg bg-danger-transparent rounded-circle mb-2">
								<i class="isax isax-trash fs-24 text-danger"></i>
							</span>
							<div>
								<h4 class="mb-2">Delete Announcements</h4>
								<p class="mb-3">Are you sure you want to delete announcements?</p>
								<div class="d-flex align-items-center justify-content-center">
									<a href="javascript:void(0);" class="btn bg-gray-100 rounded-pill me-2" data-bs-dismiss="modal">Cancel</a>
									<a href="javascript:void(0);" class="btn btn-secondary rounded-pill" data-bs-dismiss="modal">Yes, Delete</a>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorAnnouncementsComponent, { className: "InstructorAnnouncementsComponent", filePath: "src/app/features/instructor/instructor-announcements/instructor-announcements.component.ts", lineNumber: 20 });
})();
export {
  InstructorAnnouncementsComponent
};
//# sourceMappingURL=chunk-GHHIXOQG.js.map
