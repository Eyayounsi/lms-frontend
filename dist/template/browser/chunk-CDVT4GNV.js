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
import "./chunk-7Q3BJUUO.js";
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
  CommonModule
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
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/instructor/students-list/students-list.component.ts
var _c0 = () => ({ standalone: true });
function StudentsListComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div", 17)(6, "a", 18);
    \u0275\u0275element(7, "img", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 5)(9, "p", 20);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "div", 17)(15, "div", 21);
    \u0275\u0275element(16, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 23);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "div", 17)(23, "a", 24);
    \u0275\u0275element(24, "i", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "a", 26);
    \u0275\u0275element(26, "i", 27);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r1.routes.studentsDetails);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(data_r1.studentId);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r1.routes.studentsDetails);
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/user/", data_r1.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r1.routes.studentsDetails);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.studentName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.enrollDate);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", data_r1.progress);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.progress);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.courses);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r1.routes.studentsDetails);
  }
}
var StudentsListComponent = class _StudentsListComponent {
  data;
  router;
  pagination;
  routes = routes;
  //pagination variables
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
    this.data.getStudentList().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.studentsList) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getStudentList().subscribe((apiRes) => {
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
  static \u0275fac = function StudentsListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentsListComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentsListComponent, selectors: [["app-students-list"]], decls: 33, vars: 5, consts: [[1, "page-title", "d-flex", "align-items-center", "justify-content-between"], [1, "fw-bold"], [1, "d-flex", "align-items-center", "list-icons"], [1, "active", "me-2", 3, "routerLink"], [1, "isax", "isax-task"], [3, "routerLink"], [1, "isax", "isax-element-3"], [1, "row", "justify-content-end"], [1, "col-md-4"], [1, "input-icon", "mb-3"], [1, "input-icon-addon"], [1, "isax", "isax-search-normal-14"], ["type", "search", "placeholder", "Search", 1, "form-control", "form-control-md", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "table-responsive", "custom-table"], ["matSort", "", 1, "table", 3, "matSortChange"], [1, "thead-light"], [1, "text-primary", 3, "routerLink"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-md", "avatar-rounded", "flex-shrink-0", "me-2", 3, "routerLink"], ["alt", "", 3, "src"], [1, "fs-14"], ["role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress", "progress-xs", "flex-shrink-0", 2, "height", "4px", "width", "110px"], [1, "progress-bar", "bg-success"], [1, "ms-2"], [1, "d-inline-flex", "fs-14", "me-1", "action-icon", 3, "routerLink"], [1, "isax", "isax-eye"], ["href", "javascript:void(0);", 1, "d-inline-flex", "fs-14", "action-icon"], [1, "isax", "isax-messages-3"]], template: function StudentsListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h5", 1);
      \u0275\u0275text(2, "Students");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "a", 3);
      \u0275\u0275element(5, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "a", 5);
      \u0275\u0275element(7, "i", 6);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "span", 10);
      \u0275\u0275element(12, "i", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function StudentsListComponent_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchDataValue, $event) || (ctx.searchDataValue = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function StudentsListComponent_Template_input_ngModelChange_13_listener() {
        return ctx.searchData(ctx.searchDataValue);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(14, "div", 13)(15, "table", 14);
      \u0275\u0275listener("matSortChange", function StudentsListComponent_Template_table_matSortChange_15_listener($event) {
        return ctx.sortData($event);
      });
      \u0275\u0275elementStart(16, "thead", 15)(17, "tr")(18, "th");
      \u0275\u0275text(19, "Student ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "th");
      \u0275\u0275text(21, "Student Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th");
      \u0275\u0275text(23, "Enroll Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th");
      \u0275\u0275text(25, "Progress");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th");
      \u0275\u0275text(27, "Courses");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "tbody");
      \u0275\u0275repeaterCreate(30, StudentsListComponent_For_31_Template, 27, 13, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(32, "app-custom-pagination");
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.studentsList);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.studentsGrid);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDataValue);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(4, _c0));
      \u0275\u0275advance(17);
      \u0275\u0275repeater(ctx.tableData);
    }
  }, dependencies: [RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, CommonModule, MatSortModule, MatSort, CustomPaginationComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentsListComponent, [{
    type: Component,
    args: [{ selector: "app-students-list", imports: [RouterLink, FormsModule, CommonModule, MatSortModule, CustomPaginationComponent], template: '\n    <div class="page-title d-flex align-items-center justify-content-between">\n        <h5 class="fw-bold">Students</h5>\n        <div class="d-flex align-items-center list-icons">\n            <a [routerLink]="routes.studentsList" class="active me-2"><i class="isax isax-task"></i></a>\n            <a [routerLink]="routes.studentsGrid"><i class="isax isax-element-3"></i></a>\n        </div>\n    </div>\n    <div class="row justify-content-end">\n        <div class="col-md-4">\n            <div class="input-icon mb-3">\n                <span class="input-icon-addon">\n                    <i class="isax isax-search-normal-14"></i>\n                </span>\n                <input  [(ngModel)]="searchDataValue" [ngModelOptions]="{ standalone: true }" type="search" (ngModelChange)="searchData(searchDataValue)" class="form-control form-control-md" placeholder="Search">\n            </div>\n        </div>\n    </div>\n    <div class="table-responsive custom-table">\n        <table matSort (matSortChange)="sortData($event)" class="table">\n            <thead class="thead-light">\n                <tr>\n                    <th>Student ID</th>\n                    <th>Student Name</th>\n                    <th>Enroll Date</th>\n                    <th>Progress</th>\n                    <th>Courses</th>\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody>\n                @for (data of tableData;track data){\n                <tr>\n                    <td><a [routerLink]="routes.studentsDetails" class="text-primary">{{data.studentId}}</a></td>\n                    <td>\n                        <div class="d-flex align-items-center">\n                            <a [routerLink]="routes.studentsDetails" class="avatar avatar-md avatar-rounded flex-shrink-0 me-2">\n                                <img src="assets/img/user/{{data.img}}" alt="">\n                            </a>\n                            <a [routerLink]="routes.studentsDetails"><p class="fs-14">{{data.studentName}}</p></a>\n                        </div>\n                    </td>\n                    <td>{{data.enrollDate}}</td>\n                    <td>\n                        <div class="d-flex align-items-center">\n                            <div class="progress progress-xs flex-shrink-0" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="height: 4px;width: 110px">\n                                <div class="progress-bar bg-success" [style.width]="data.progress"></div>\n                            </div>\n                            <span class="ms-2">{{data.progress}}</span>\n                        </div>\n                    </td>\n                    <td>{{data.courses}}</td>\n                    <td>\n                        <div class="d-flex align-items-center">\n                            <a [routerLink]="routes.studentsDetails" class="d-inline-flex fs-14 me-1 action-icon"><i class="isax isax-eye"></i></a>\n                            <a href="javascript:void(0);" class="d-inline-flex fs-14 action-icon"><i class="isax isax-messages-3"></i></a>\n                        </div>\n                    </td>\n                </tr>\n                }\n            </tbody>\n        </table>\n    </div>\n    <!-- /pagination -->\n    <app-custom-pagination/>\n    <!-- /pagination -->\n' }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentsListComponent, { className: "StudentsListComponent", filePath: "src/app/features/instructor/students-list/students-list.component.ts", lineNumber: 19 });
})();
export {
  StudentsListComponent
};
//# sourceMappingURL=chunk-CDVT4GNV.js.map
