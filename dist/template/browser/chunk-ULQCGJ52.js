import {
  CustomPaginationComponent
} from "./chunk-PUV6J7XP.js";
import {
  MatTableDataSource,
  PaginationService
} from "./chunk-CUBDUMMA.js";
import "./chunk-7Q3BJUUO.js";
import "./chunk-LTXOSFWN.js";
import "./chunk-PZXI3ZTH.js";
import {
  DataService
} from "./chunk-44KX7P7T.js";
import {
  routes
} from "./chunk-E6TQA5KL.js";
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/student/student-referral/student-referral.component.ts
function StudentReferralComponent_For_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div", 4)(6, "a", 49);
    \u0275\u0275element(7, "img", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 51)(9, "p", 52);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275element(13, "br");
    \u0275\u0275text(14, " refid=345re667877k960");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "a", 53);
    \u0275\u0275element(17, "i", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r1.referredId);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", ctx_r1.routes.instructorDetails);
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275interpolate1("assets/img/user/", data_r1.img), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r1.routes.instructorDetails);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.referrals);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", data_r1.url, " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(data_r1.visits);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r1.totalEarned);
  }
}
var StudentReferralComponent = class _StudentReferralComponent {
  data;
  router;
  pagination;
  routes = routes;
  bsValue = /* @__PURE__ */ new Date();
  bsRangeValue;
  maxDate = /* @__PURE__ */ new Date();
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
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
    this.data.getStudentRefferal().subscribe((apiRes) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res) => {
        if (this.router.url == this.routes.students_referral) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  getTableData(pageOption) {
    this.data.getStudentRefferal().subscribe((apiRes) => {
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
  static \u0275fac = function StudentReferralComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentReferralComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentReferralComponent, selectors: [["app-student-referral"]], decls: 122, vars: 0, consts: [[1, "page-title", "d-flex", "align-items-center", "justify-content-between"], [1, "row"], [1, "col-xl-4", "col-md-6"], [1, "student-info", "bg-skyblue-transparent", "referral-card", "border-0"], [1, "d-flex", "align-items-center"], [1, "referral-icon", "bg-skyblue", "me-3"], ["src", "assets/img/icon/dollar-circle.svg", "alt", ""], [1, "mb-1", "text-gray-5", "fw-normal"], [1, "fs-20", "fw-semibold", "mb-1", "d-block", "text-skyblue"], [1, "fs-13"], [1, "student-info", "border-0", "bg-secondary-transparent", "referral-card"], [1, "referral-icon", "bg-secondary", "me-3"], ["src", "assets/img/icon/wallet.svg", "alt", ""], [1, "fs-20", "fw-semibold", "mb-1", "d-block", "text-secondary"], [1, "student-info", "border-0", "bg-info-transparent", "referral-card"], [1, "referral-icon", "bg-info", "me-3"], [1, "fs-20", "fw-semibold", "mb-1", "d-block", "text-info"], [1, "col-xl-6", "d-flex"], [1, "card", "flex-fill"], [1, "card-body"], [1, "mb-3", "fs-18"], [1, "mb-2"], [1, "mb-3"], ["type", "text", "value", "https://dreamslmscourse.com/refer/?refid=345re667877k9", 1, "form-control"], ["href", "javascript:void(0);", 1, "btn", "btn-secondary", "rounded-pill"], [1, "mb-4"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#withdraw_request", 1, "btn", "btn-secondary", "rounded-pill"], [1, "table-responsive", "custom-table"], [1, "table"], [1, "thead-light"], ["id", "withdraw_request", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "custom-btn-close"], [1, "isax", "isax-close-circle5"], [1, "modal-body"], [1, "card", "withdraw-item"], [1, "col-lg-6"], [1, "mb-1"], [1, "form-label"], [1, "text-danger"], ["type", "text", "placeholder", "$", 1, "form-control"], [1, "d-flex", "align-items-center", "pt-1"], [1, "isax", "isax-info-circle", "me-1"], [1, "modal-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "bg-gray-100", "rounded-pill", "me-2"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "rounded-pill"], ["href", "javascript:void(0);", 1, "text-primary"], [1, "avatar", "avatar-md", "avatar-rounded", "flex-shrink-0", "me-2", 3, "routerLink"], ["alt", "", 3, "src"], [3, "routerLink"], [1, "fs-14"], ["href", "javascript:void(0);", 1, "action-icon"], [1, "isax", "isax-document-copy4"]], template: function StudentReferralComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h5");
      \u0275\u0275text(2, "Referrals");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5);
      \u0275\u0275element(8, "img", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div")(10, "h6", 7);
      \u0275\u0275text(11, "Net Earnings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "span", 8);
      \u0275\u0275text(13, "$12,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p", 9);
      \u0275\u0275text(15, "Earning this month");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(16, "div", 2)(17, "div", 10)(18, "div", 4)(19, "div", 11);
      \u0275\u0275element(20, "img", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div")(22, "h6", 7);
      \u0275\u0275text(23, "Balance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "span", 13);
      \u0275\u0275text(25, "$15,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "p", 9);
      \u0275\u0275text(27, "In the Wallet");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(28, "div", 2)(29, "div", 14)(30, "div", 4)(31, "div", 15);
      \u0275\u0275element(32, "img", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div")(34, "h6", 7);
      \u0275\u0275text(35, "No of Referrals");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "span", 16);
      \u0275\u0275text(37, "10");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "p", 9);
      \u0275\u0275text(39, "In this month");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(40, "div", 1)(41, "div", 17)(42, "div", 18)(43, "div", 19)(44, "h5", 20);
      \u0275\u0275text(45, "Your Referral Link");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "p", 21);
      \u0275\u0275text(47, "You can earn easily money by copy and share");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 22);
      \u0275\u0275element(49, "input", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "a", 24);
      \u0275\u0275text(51, "Copy link");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(52, "div", 17)(53, "div", 18)(54, "div", 19)(55, "h5", 20);
      \u0275\u0275text(56, "Withdraw Money");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "ul", 25)(58, "li", 21);
      \u0275\u0275text(59, " Withdraw securely to your bank account. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "li");
      \u0275\u0275text(61, " Commision is $25 per transaction under $10,000 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "a", 26);
      \u0275\u0275text(63, "Withdraw Money");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(64, "div", 27)(65, "table", 28)(66, "thead", 29)(67, "tr")(68, "th");
      \u0275\u0275text(69, "Referred ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "th");
      \u0275\u0275text(71, "Referrals");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "th");
      \u0275\u0275text(73, "URL");
      \u0275\u0275elementEnd();
      \u0275\u0275element(74, "th");
      \u0275\u0275elementStart(75, "th");
      \u0275\u0275text(76, "Visits");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "th");
      \u0275\u0275text(78, "Total Earned");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(79, "tbody");
      \u0275\u0275repeaterCreate(80, StudentReferralComponent_For_81_Template, 22, 9, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(82, "app-custom-pagination");
      \u0275\u0275elementStart(83, "div", 30)(84, "div", 31)(85, "div", 32)(86, "div", 33)(87, "h5");
      \u0275\u0275text(88, "Withdrawal Request");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "button", 34);
      \u0275\u0275element(90, "i", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "form")(92, "div", 36)(93, "div", 37)(94, "div", 19)(95, "div", 1)(96, "div", 38)(97, "div")(98, "p", 39);
      \u0275\u0275text(99, "Withdrawal Balance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "h6");
      \u0275\u0275text(101, "$15000");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(102, "div", 38)(103, "div")(104, "p", 39);
      \u0275\u0275text(105, "Selected ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "h6");
      \u0275\u0275text(107, "PayPal");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(108, "div", 22)(109, "label", 40);
      \u0275\u0275text(110, "Amount ");
      \u0275\u0275elementStart(111, "span", 41);
      \u0275\u0275text(112, " *");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(113, "input", 42);
      \u0275\u0275elementStart(114, "p", 43);
      \u0275\u0275element(115, "i", 44);
      \u0275\u0275text(116, " Minimum withdraw amount is $50 ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(117, "div", 45)(118, "a", 46);
      \u0275\u0275text(119, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "button", 47);
      \u0275\u0275text(121, "Submit");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(80);
      \u0275\u0275repeater(ctx.tableData);
    }
  }, dependencies: [CommonModule, RouterLink, CustomPaginationComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentReferralComponent, [{
    type: Component,
    args: [{ selector: "app-student-referral", imports: [CommonModule, RouterLink, CustomPaginationComponent], template: '\n    <div class="page-title d-flex align-items-center justify-content-between">\n        <h5>Referrals</h5>\n    </div>\n    <div class="row">\n        <div class="col-xl-4 col-md-6">\n            <div class="student-info bg-skyblue-transparent referral-card border-0">\n                <div class="d-flex align-items-center">\n                    <div class="referral-icon bg-skyblue me-3">\n                        <img src="assets/img/icon/dollar-circle.svg" alt="">\n                    </div>\n                    <div>\n                        <h6 class="mb-1 text-gray-5 fw-normal">Net Earnings</h6>\n                        <span class="fs-20 fw-semibold mb-1 d-block text-skyblue">$12,000</span>\n                        <p class="fs-13">Earning this month</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="col-xl-4 col-md-6">\n            <div class="student-info border-0 bg-secondary-transparent referral-card">\n                <div class="d-flex align-items-center">\n                    <div class="referral-icon bg-secondary me-3">\n                        <img src="assets/img/icon/wallet.svg" alt="">\n                    </div>\n                    <div>\n                        <h6 class="mb-1 text-gray-5 fw-normal">Balance</h6>\n                        <span class="fs-20 fw-semibold mb-1 d-block text-secondary">$15,000</span>\n                        <p class="fs-13">In the Wallet</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="col-xl-4 col-md-6">\n            <div class="student-info border-0 bg-info-transparent referral-card">\n                <div class="d-flex align-items-center">\n                    <div class="referral-icon bg-info me-3">\n                        <img src="assets/img/icon/wallet.svg" alt="">\n                    </div>\n                    <div>\n                        <h6 class="mb-1 text-gray-5 fw-normal">No of Referrals</h6>\n                        <span class="fs-20 fw-semibold mb-1 d-block text-info">10</span>\n                        <p class="fs-13">In this month</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="row">\n        <div class="col-xl-6 d-flex">\n            <div class="card flex-fill">\n                <div class="card-body">\n                    <h5 class="mb-3 fs-18">Your Referral Link</h5>\n                    <p class="mb-2">You can earn easily money by copy and share</p>\n                    <div class="mb-3">\n                        <input type="text" class="form-control" value="https://dreamslmscourse.com/refer/?refid=345re667877k9">\n                    </div>\n                    <a href="javascript:void(0);" class="btn btn-secondary rounded-pill">Copy link</a>\n                </div>\n            </div>\n        </div>\n        <div class="col-xl-6 d-flex">\n            <div class="card flex-fill">\n                <div class="card-body">\n                    <h5 class="mb-3 fs-18">Withdraw Money</h5>\n                    <ul class="mb-4">\n                        <li class="mb-2">\n                            Withdraw securely to your bank account.\n                        </li>\n                        <li>\n                        Commision is $25 per transaction under $10,000\n                        </li>\n                    </ul>\n                    <a href="javascript:void(0);" class="btn btn-secondary rounded-pill" data-bs-toggle="modal" data-bs-target="#withdraw_request">Withdraw Money</a>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="table-responsive custom-table">\n        <table class="table">\n            <thead class="thead-light">\n                <tr>\n                    <th>Referred ID</th>\n                    <th>Referrals</th>\n                    <th>URL</th>\n                    <th></th>\n                    <th>Visits</th>\n                    <th>Total Earned</th>\n                </tr>\n            </thead>\n            <tbody>\n                @for (data of tableData;track data){\n                <tr>\n                    <td><a href="javascript:void(0);" class="text-primary">{{data.referredId}}</a></td>\n                    <td>\n                        <div class="d-flex align-items-center">\n                            <a [routerLink]="routes.instructorDetails" class="avatar avatar-md avatar-rounded flex-shrink-0 me-2">\n                                <img src="assets/img/user/{{data.img}}" alt="">\n                            </a>\n                            <a [routerLink]="routes.instructorDetails"><p class="fs-14">{{data.referrals}}</p></a>\n                        </div>\n                    </td>\n                    <td>{{data.url}} <br> refid=345re667877k960</td>\n                    <td><a href="javascript:void(0);" class="action-icon"><i class="isax isax-document-copy4"></i></a></td>\n                    <td>{{data.visits}}</td>\n                    <td>{{data.totalEarned}}</td>\n                </tr>\n                 }\n            </tbody>\n        </table>\n    </div>\n        <!-- /pagination -->\n       <app-custom-pagination/>\n        <!-- /pagination -->\n\n\n        			<!-- View Invoice -->\n			<div class="modal fade" id="withdraw_request">\n				<div class="modal-dialog modal-dialog-centered">\n					<div class="modal-content">\n						<div class="modal-header">\n							<h5>Withdrawal Request</h5>\n							<button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">\n								<i class="isax isax-close-circle5"></i>\n							</button>\n						</div>\n						<form>\n							<div class="modal-body">\n								<div class="card withdraw-item">\n									<div class="card-body">\n										<div class="row">\n											<div class="col-lg-6">\n												<div>\n													<p class="mb-1">Withdrawal Balance</p>\n													<h6>$15000</h6>\n												</div>\n											</div>\n											<div class="col-lg-6">\n												<div>\n													<p class="mb-1">Selected </p>\n													<h6>PayPal</h6>\n												</div>\n											</div>\n										</div>\n									</div>\n								</div>\n								<div class="mb-3">\n									<label class="form-label">Amount <span class="text-danger"> *</span></label>\n									<input type="text" class="form-control" placeholder="$">\n									<p class="d-flex align-items-center pt-1">\n										<i class="isax isax-info-circle me-1"></i>\n										Minimum withdraw amount is $50\n									</p>\n								</div>\n							</div>\n							<div class="modal-footer">\n								<a href="javascript:void(0);" class="btn bg-gray-100 rounded-pill me-2" data-bs-dismiss="modal">Cancel</a>\n								<button class="btn btn-secondary rounded-pill" type="submit" data-bs-dismiss="modal">Submit</button>\n							</div>\n						</form>\n					</div>\n				</div>\n			</div>\n			<!-- /View Invoice -->' }]
  }], () => [{ type: DataService }, { type: Router }, { type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentReferralComponent, { className: "StudentReferralComponent", filePath: "src/app/features/student/student-referral/student-referral.component.ts", lineNumber: 19 });
})();
export {
  StudentReferralComponent
};
//# sourceMappingURL=chunk-ULQCGJ52.js.map
