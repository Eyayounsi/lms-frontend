import {
  MatPaginatorModule
} from "./chunk-FMFFEBQA.js";
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
import {
  FormsModule,
  NgControlStatusGroup,
  NgForm,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/instructor/instructor-assignment/instructor-assignment.component.ts
var _c0 = () => ({ adaptivePosition: true });
function InstructorAssignmentComponent_For_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div")(3, "h6", 53)(4, "a", 63);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 64);
    \u0275\u0275element(14, "i", 65);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td")(17, "div", 66)(18, "a", 67);
    \u0275\u0275element(19, "i", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "a", 69);
    \u0275\u0275element(21, "i", 70);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(data_r1.assignmentName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Course: ", data_r1.course);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.totalMarks);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.totalSubmit);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", data_r1.status === "Published" ? "bg-success" : "bg-skyblue");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.status);
  }
}
var InstructorAssignmentComponent = class _InstructorAssignmentComponent {
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
    this.data.getInstructorAssignment().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.instructorAssignment) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getInstructorAssignment().subscribe((apiRes) => {
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
  static \u0275fac = function InstructorAssignmentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorAssignmentComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorAssignmentComponent, selectors: [["app-instructor-assignment"]], decls: 240, vars: 4, consts: [[1, "page-title", "d-flex", "align-items-center", "justify-content-between"], [1, "fw-bold"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#add_assignment", 1, "btn", "btn-secondary", "d-flex", "align-items-center"], [1, "isax", "isax-add-circle", "me-1"], [1, "row"], [1, "col-md-8"], [1, "mb-3"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle", "text-gray-6", "btn", "rounded", "border", "d-inline-flex", "align-items-center"], [1, "dropdown-menu", "dropdown-menu-end", "p-3"], ["href", "javascript:void(0);", 1, "dropdown-item", "rounded-1"], [1, "col-md-4"], [1, "input-icon", "mb-3"], [1, "input-icon-addon"], [1, "isax", "isax-search-normal-14"], ["type", "email", "placeholder", "Search", 1, "form-control", "form-control-md"], [1, "table-responsive", "custom-table"], [1, "table"], [1, "thead-light"], ["id", "add_assignment", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "custom-btn-close"], [1, "isax", "isax-close-circle5"], [1, "modal-body", "pb-0"], [1, "col-md-12"], [1, "form-label"], [1, "text-danger"], ["placeholder", "Select", 1, "custom-mat-select", "select"], ["value", "1"], ["type", "text", 1, "form-control"], ["placeholder", "Enter Description", 1, "form-control"], ["rows", "4", 1, "form-control"], [1, "col-md-6"], [1, "mb-3", "ngxdate"], [1, "input-icon-end", "position-relative"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate", "placeholder", "dd/mm/yyyy", 1, "form-control", "datetimepicker", 3, "bsConfig"], [1, "isax", "isax-calendar"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "bg-gray-100", "rounded-pill", "me-2"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "rounded-pill"], ["id", "edit_assignment", 1, "modal", "fade"], [1, "modal-body"], ["placeholder", "Information About UI/UX Design Degree", 1, "custom-mat-select", "select"], ["type", "text", "value", "Building Your First Landing Page", 1, "form-control"], [1, "form-control"], [1, "mb-3", "mb-md-0", "ngxdate1"], ["type", "text", "bsDatepicker", "", "container", ".ngxdate1", "placeholder", "dd/mm/yyyy", "value", "02-05-2024", 1, "form-control", "datetimepicker", 3, "bsConfig"], [1, "mb-0"], ["placeholder", "Published", 1, "custom-mat-select", "select"], ["id", "view_assignment", 1, "modal", "fade"], [1, "mb-4"], [1, "mb-1"], ["id", "delete_modal", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-body", "text-center", "custom-modal-body"], [1, "avatar", "avatar-lg", "bg-danger-transparent", "rounded-circle", "mb-2"], [1, "isax", "isax-trash", "fs-24", "text-danger"], [1, "mb-2"], [1, "d-flex", "align-items-center", "justify-content-center"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "bg-gray-100", "rounded-pill", "me-2"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "rounded-pill"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#view_assignment"], [1, "badge", "badge-sm", "d-inline-flex", "align-items-center", "me-1", 3, "ngClass"], [1, "fa-solid", "fa-circle", "fs-5", "me-1"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "d-inline-flex", "fs-14", "me-1", "action-icon"], ["data-bs-toggle", "modal", "data-bs-target", "#edit_assignment", 1, "isax", "isax-edit-2"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#delete_modal", 1, "d-inline-flex", "fs-14", "action-icon"], [1, "isax", "isax-trash"]], template: function InstructorAssignmentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h5", 1);
      \u0275\u0275text(2, "Assignments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div")(4, "a", 2);
      \u0275\u0275element(5, "i", 3);
      \u0275\u0275text(6, "Add Assignment ");
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
      \u0275\u0275element(24, "input", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 16)(26, "table", 17)(27, "thead", 18)(28, "tr")(29, "th");
      \u0275\u0275text(30, "Assignment Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "th");
      \u0275\u0275text(32, "Total Marks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th");
      \u0275\u0275text(34, "Total Submit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "th");
      \u0275\u0275text(36, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275element(37, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "tbody");
      \u0275\u0275repeaterCreate(39, InstructorAssignmentComponent_For_40_Template, 22, 6, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "div", 19)(42, "div", 20)(43, "div", 21)(44, "div", 22)(45, "h5", 1);
      \u0275\u0275text(46, "Add New Assignments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "button", 23);
      \u0275\u0275element(48, "i", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "form")(50, "div", 25)(51, "div", 4)(52, "div", 26)(53, "div", 6)(54, "label", 27);
      \u0275\u0275text(55, "Course ");
      \u0275\u0275elementStart(56, "span", 28);
      \u0275\u0275text(57, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "mat-select", 29)(59, "mat-option", 30);
      \u0275\u0275text(60, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "mat-option", 30);
      \u0275\u0275text(62, "Information About UI/UX Design Degree");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "mat-option", 30);
      \u0275\u0275text(64, "Wordpress for Beginners - Master Wordpress Quickly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "mat-option", 30);
      \u0275\u0275text(66, "Introduction to Python Programming");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(67, "div", 26)(68, "div", 6)(69, "label", 27);
      \u0275\u0275text(70, "Assingment Title ");
      \u0275\u0275elementStart(71, "span", 28);
      \u0275\u0275text(72, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(73, "input", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "div", 26)(75, "div", 6)(76, "label", 27);
      \u0275\u0275text(77, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(78, "textarea", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "div", 26)(80, "div", 6)(81, "label", 27);
      \u0275\u0275text(82, "Instructions ");
      \u0275\u0275elementStart(83, "span", 28);
      \u0275\u0275text(84, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "textarea", 33);
      \u0275\u0275text(86, "Enter Instructions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(87, "div", 34)(88, "div", 35)(89, "label", 27);
      \u0275\u0275text(90, "Last Date ");
      \u0275\u0275elementStart(91, "span", 28);
      \u0275\u0275text(92, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "div", 36);
      \u0275\u0275element(94, "input", 37);
      \u0275\u0275elementStart(95, "span", 13);
      \u0275\u0275element(96, "i", 38);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(97, "div", 34)(98, "div", 6)(99, "label", 27);
      \u0275\u0275text(100, "Status ");
      \u0275\u0275elementStart(101, "span", 28);
      \u0275\u0275text(102, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "mat-select", 29)(104, "mat-option", 30);
      \u0275\u0275text(105, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "mat-option", 30);
      \u0275\u0275text(107, "Published");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "mat-option", 30);
      \u0275\u0275text(109, "Draft");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(110, "div", 39)(111, "button", 40);
      \u0275\u0275text(112, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "button", 41);
      \u0275\u0275text(114, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(115, "div", 42)(116, "div", 20)(117, "div", 21)(118, "div", 22)(119, "h5", 1);
      \u0275\u0275text(120, "Edit Assignments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "button", 23);
      \u0275\u0275element(122, "i", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(123, "form")(124, "div", 43)(125, "div", 4)(126, "div", 26)(127, "div", 6)(128, "label", 27);
      \u0275\u0275text(129, "Course ");
      \u0275\u0275elementStart(130, "span", 28);
      \u0275\u0275text(131, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(132, "mat-select", 44)(133, "mat-option", 30);
      \u0275\u0275text(134, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "mat-option", 30);
      \u0275\u0275text(136, "Information About UI/UX Design Degree");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "mat-option", 30);
      \u0275\u0275text(138, "Wordpress for Beginners - Master Wordpress Quickly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "mat-option", 30);
      \u0275\u0275text(140, "Introduction to Python Programming");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(141, "div", 26)(142, "div", 6)(143, "label", 27);
      \u0275\u0275text(144, "Assingment Title ");
      \u0275\u0275elementStart(145, "span", 28);
      \u0275\u0275text(146, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(147, "input", 45);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(148, "div", 26)(149, "div", 6)(150, "label", 27);
      \u0275\u0275text(151, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "textarea", 46);
      \u0275\u0275text(153, "Enter Description");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(154, "div", 26)(155, "div", 6)(156, "label", 27);
      \u0275\u0275text(157, "Instructions ");
      \u0275\u0275elementStart(158, "span", 28);
      \u0275\u0275text(159, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(160, "textarea", 33);
      \u0275\u0275text(161, "Enter Instructions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(162, "div", 34)(163, "div", 47)(164, "label", 27);
      \u0275\u0275text(165, "Last Date ");
      \u0275\u0275elementStart(166, "span", 28);
      \u0275\u0275text(167, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(168, "div", 36);
      \u0275\u0275element(169, "input", 48);
      \u0275\u0275elementStart(170, "span", 13);
      \u0275\u0275element(171, "i", 38);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(172, "div", 34)(173, "div", 49)(174, "label", 27);
      \u0275\u0275text(175, "Status ");
      \u0275\u0275elementStart(176, "span", 28);
      \u0275\u0275text(177, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(178, "mat-select", 50)(179, "mat-option", 30);
      \u0275\u0275text(180, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(181, "mat-option", 30);
      \u0275\u0275text(182, "Published");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(183, "mat-option", 30);
      \u0275\u0275text(184, "Draft");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(185, "div", 39)(186, "button", 40);
      \u0275\u0275text(187, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "button", 41);
      \u0275\u0275text(189, "Submit");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(190, "div", 51)(191, "div", 20)(192, "div", 21)(193, "div", 22)(194, "h5", 1);
      \u0275\u0275text(195, "Assignments Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "button", 23);
      \u0275\u0275element(197, "i", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(198, "div", 43)(199, "div", 52)(200, "h6", 53);
      \u0275\u0275text(201, "Course");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "p");
      \u0275\u0275text(203, "Introduction to Programming - Python & Java");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(204, "div", 52)(205, "h6", 53);
      \u0275\u0275text(206, "Title");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(207, "p");
      \u0275\u0275text(208, "Guest Lecture Announcement");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(209, "div", 52)(210, "h6", 53);
      \u0275\u0275text(211, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(212, "p");
      \u0275\u0275text(213, "I am excited to inform you that we will be having a guest lecture from , an expert . This will be an excellent opportunity to gain insight into and ask any questions you might have. Please make every effort to attend, as participation will count towards. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(214, "div", 52)(215, "h6", 53);
      \u0275\u0275text(216, "Instructions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(217, "p");
      \u0275\u0275text(218, 'Explain the specific instructions or requirements for the assignment. For example, "The assignment should be 3-5 pages long, formatted in APA style. You must use at least 5 peer-reviewed articles. ');
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(219, "div", 49)(220, "h6", 53);
      \u0275\u0275text(221, "Last Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(222, "p");
      \u0275\u0275text(223, "26 Jul 2025");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(224, "div", 54)(225, "div", 55)(226, "div", 21)(227, "div", 56)(228, "span", 57);
      \u0275\u0275element(229, "i", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(230, "div")(231, "h4", 59);
      \u0275\u0275text(232, "Delete Assignments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(233, "p", 6);
      \u0275\u0275text(234, "Are you sure you want to delete assignments?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(235, "div", 60)(236, "a", 61);
      \u0275\u0275text(237, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(238, "a", 62);
      \u0275\u0275text(239, "Yes, Delete");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(39);
      \u0275\u0275repeater(ctx.tableData);
      \u0275\u0275advance(55);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(2, _c0));
      \u0275\u0275advance(75);
      \u0275\u0275property("bsConfig", \u0275\u0275pureFunction0(3, _c0));
    }
  }, dependencies: [CommonModule, NgClass, MatTableModule, MatSortModule, MatPaginatorModule, MatSelectModule, MatSelect, MatOption, BsDatepickerModule, BsDatepickerDirective, BsDatepickerInputDirective, FormsModule, \u0275NgNoValidate, NgControlStatusGroup, NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorAssignmentComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-assignment", imports: [CommonModule, MatTableModule, MatSortModule, MatPaginatorModule, MatSelectModule, BsDatepickerModule, FormsModule], template: `
    <div class="page-title d-flex align-items-center justify-content-between">
        <h5 class="fw-bold">Assignments</h5>
        <div>
            <a href="javascript:void(0);" class="btn btn-secondary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add_assignment">
                <i class="isax isax-add-circle me-1"></i>Add Assignment
            </a>
        </div>
    </div>
    <div class="row">
        <div class="col-md-8">
            <div class="mb-3">
                <div class="dropdown">
                    <a href="javascript:void(0);" class="dropdown-toggle text-gray-6 btn  rounded border d-inline-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
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
                <input type="email" class="form-control form-control-md" placeholder="Search">
            </div>
        </div>
    </div>
    <div class="table-responsive custom-table">
        <table class="table">
            <thead class="thead-light">
                <tr>
                    <th>Assignment Name</th>
                    <th>Total Marks</th>
                    <th>Total Submit</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                @for (data of tableData;track data){

                    <tr>
                        <td>
                            <div>
                                <h6 class="mb-1"><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_assignment">{{data.assignmentName}}</a></h6>
                                <p>Course: {{data.course}}</p>
                            </div>
                        </td>
                        <td>{{data.totalMarks}}</td>
                        <td>{{data.totalSubmit}}</td>
                        <td><span class="badge badge-sm d-inline-flex align-items-center me-1" [ngClass]="data.status==='Published'?'bg-success':'bg-skyblue'"><i class="fa-solid fa-circle fs-5 me-1"></i>{{data.status}}</span></td>
                        <td>
                            <div class="d-flex align-items-center">
                                <a href="javascript:void(0);" class="d-inline-flex fs-14 me-1 action-icon"><i class="isax isax-edit-2" data-bs-toggle="modal" data-bs-target="#edit_assignment"></i></a>
                                <a href="javascript:void(0);" class="d-inline-flex fs-14 action-icon" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="isax isax-trash"></i></a>
                            </div>
                        </td>
                    </tr>
                }
                
            </tbody>
        </table>
    </div>

    <!-- Add Assignment -->
			<div class="modal fade" id="add_assignment">
				<div class="modal-dialog modal-dialog-centered modal-lg">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="fw-bold">Add New Assignments</h5>
							<button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
								<i class="isax isax-close-circle5"></i>
							</button>
						</div>
						<form>
							<div class="modal-body pb-0">
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
											<label class="form-label">Assingment Title <span class="text-danger"> *</span></label>
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
										<div class="mb-3">
											<label class="form-label">Instructions <span class="text-danger"> *</span></label>
											<textarea rows="4" class="form-control">Enter Instructions</textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="mb-3 ngxdate">
											<label class="form-label">Last Date <span class="text-danger"> *</span></label>
											<div class="input-icon-end position-relative ">
												<input type="text" class="form-control datetimepicker" bsDatepicker container=".ngxdate" [bsConfig]="{ adaptivePosition: true }" placeholder="dd/mm/yyyy">
												<span class="input-icon-addon">
													<i class="isax isax-calendar"></i>
												</span>
											</div>
										</div>
									</div>
									<div class="col-md-6">
										<div class="mb-3">
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
			<!-- /Add Assignment -->

			<!-- Edit Assignment -->
			<div class="modal fade" id="edit_assignment">
				<div class="modal-dialog modal-dialog-centered modal-lg">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="fw-bold">Edit Assignments</h5>
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
											<label class="form-label">Assingment Title <span class="text-danger"> *</span></label>
											<input type="text" class="form-control" value="Building Your First Landing Page">
										</div>
									</div>
									<div class="col-md-12">
										<div class="mb-3">
											<label class="form-label">Description</label>
											<textarea class="form-control">Enter Description</textarea>
										</div>
									</div>
									<div class="col-md-12">
										<div class="mb-3">
											<label class="form-label">Instructions <span class="text-danger"> *</span></label>
											<textarea rows="4" class="form-control">Enter Instructions</textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="mb-3 mb-md-0 ngxdate1">
											<label class="form-label">Last Date <span class="text-danger"> *</span></label>
											<div class="input-icon-end position-relative">
												<input type="text" class="form-control datetimepicker" bsDatepicker container=".ngxdate1" [bsConfig]="{ adaptivePosition: true }" placeholder="dd/mm/yyyy" value="02-05-2024">
												<span class="input-icon-addon">
													<i class="isax isax-calendar"></i>
												</span>
											</div>
										</div>
									</div>
									<div class="col-md-6">
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
								<button class="btn btn-secondary rounded-pill" type="submit" data-bs-dismiss="modal">Submit</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<!-- /Edit Assignment -->

			<!-- Assignment Details -->
			<div class="modal fade" id="view_assignment">
				<div class="modal-dialog modal-dialog-centered modal-lg">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="fw-bold">Assignments Details</h5>
							<button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
								<i class="isax isax-close-circle5"></i>
							</button>
						</div>
						<div class="modal-body">
							<div class="mb-4">
								<h6 class="mb-1">Course</h6>
								<p>Introduction to Programming - Python & Java</p>
							</div>
							<div class="mb-4">
								<h6 class="mb-1">Title</h6>
								<p>Guest Lecture Announcement</p>
							</div>
							<div class="mb-4">
								<h6 class="mb-1">Description</h6>
								<p>I am excited to inform you that we will be having a guest lecture from , an expert . 
									This will be an excellent opportunity to gain insight into and ask any questions you might have. 
									Please make every effort to attend, as participation will count towards.
								</p>
							</div>
							<div class="mb-4">
								<h6 class="mb-1">Instructions</h6>
								<p>Explain the specific instructions or requirements for the assignment. For example, 
									"The assignment should be 3-5 
									pages long, formatted in APA style. You must use at least 5 peer-reviewed articles.
								</p>
							</div>
							<div class="mb-0">
								<h6 class="mb-1">Last Date</h6>
								<p>26 Jul 2025</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /Assignment Details -->

			<!-- Delete Modal -->
			<div class="modal fade" id="delete_modal">
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						<div class="modal-body text-center custom-modal-body">
							<span class="avatar avatar-lg bg-danger-transparent rounded-circle mb-2">
								<i class="isax isax-trash fs-24 text-danger"></i>
							</span>
							<div>
								<h4 class="mb-2">Delete Assignments</h4>
								<p class="mb-3">Are you sure you want to delete assignments?</p>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorAssignmentComponent, { className: "InstructorAssignmentComponent", filePath: "src/app/features/instructor/instructor-assignment/instructor-assignment.component.ts", lineNumber: 21 });
})();
export {
  InstructorAssignmentComponent
};
//# sourceMappingURL=chunk-3UI3IIKK.js.map
