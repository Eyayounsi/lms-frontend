"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[8810],{

/***/ 88810:
/*!*********************************************************************************!*\
  !*** ./src/app/features/student/student-referral/student-referral.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StudentReferralComponent: () => (/* binding */ StudentReferralComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/routes/routes */ 92643);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _shared_service_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/custom-pagination/custom-pagination.component */ 38888);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/service/data/data.service */ 30098);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 85422);
/* harmony import */ var _shared_service_custom_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/service/custom-pagination/pagination.service */ 37002);









function StudentReferralComponent_For_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td")(2, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "td")(5, "div", 4)(6, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "a", 51)(9, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " refid=345re667877k960");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td")(16, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r1.referredId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r1.routes.instructorDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinterpolate1"]("assets/img/user/", data_r1.img), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r1.routes.instructorDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r1.referrals);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", data_r1.url, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r1.visits);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r1.totalEarned);
  }
}
let StudentReferralComponent = /*#__PURE__*/(() => {
  class StudentReferralComponent {
    data;
    router;
    pagination;
    routes = _shared_service_routes_routes__WEBPACK_IMPORTED_MODULE_1__.routes;
    bsValue = new Date();
    bsRangeValue;
    maxDate = new Date();
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
    searchDataValue = '';
    constructor(data, router, pagination) {
      this.data = data;
      this.router = router;
      this.pagination = pagination;
      this.maxDate.setDate(this.maxDate.getDate() + 7);
      this.bsRangeValue = [this.bsValue, this.maxDate];
      this.data.getStudentRefferal().subscribe(apiRes => {
        this.actualData = apiRes.data;
        this.pagination.tablePageSize.subscribe(res => {
          if (this.router.url == this.routes.students_referral) {
            this.getTableData({
              skip: res.skip,
              limit: res.limit
            });
            this.pageSize = res.pageSize;
          }
        });
      });
    }
    getTableData(pageOption) {
      this.data.getStudentRefferal().subscribe(apiRes => {
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
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__.MatTableDataSource(this.actualData);
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
      if (value == '') {
        this.tableData = this.tableDataCopy;
      } else {
        this.dataSource.filter = value.trim().toLowerCase();
        this.tableData = this.dataSource.filteredData;
      }
    }
    sortData(sort) {
      const data = this.tableData.slice();
      if (!sort.active || sort.direction === '') {
        this.tableData = data;
      } else {
        this.tableData = data.sort((a, b) => {
          const aValue = a[sort.active];
          const bValue = b[sort.active];
          return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
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
    static ɵfac = function StudentReferralComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || StudentReferralComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_service_data_data_service__WEBPACK_IMPORTED_MODULE_6__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_service_custom_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_8__.PaginationService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: StudentReferralComponent,
      selectors: [["app-student-referral"]],
      decls: 122,
      vars: 0,
      consts: [[1, "page-title", "d-flex", "align-items-center", "justify-content-between"], [1, "row"], [1, "col-xl-4", "col-md-6"], [1, "student-info", "bg-skyblue-transparent", "referral-card", "border-0"], [1, "d-flex", "align-items-center"], [1, "referral-icon", "bg-skyblue", "me-3"], ["src", "assets/img/icon/dollar-circle.svg", "alt", ""], [1, "mb-1", "text-gray-5", "fw-normal"], [1, "fs-20", "fw-semibold", "mb-1", "d-block", "text-skyblue"], [1, "fs-13"], [1, "student-info", "border-0", "bg-secondary-transparent", "referral-card"], [1, "referral-icon", "bg-secondary", "me-3"], ["src", "assets/img/icon/wallet.svg", "alt", ""], [1, "fs-20", "fw-semibold", "mb-1", "d-block", "text-secondary"], [1, "student-info", "border-0", "bg-info-transparent", "referral-card"], [1, "referral-icon", "bg-info", "me-3"], [1, "fs-20", "fw-semibold", "mb-1", "d-block", "text-info"], [1, "col-xl-6", "d-flex"], [1, "card", "flex-fill"], [1, "card-body"], [1, "mb-3", "fs-18"], [1, "mb-2"], [1, "mb-3"], ["type", "text", "value", "https://dreamslmscourse.com/refer/?refid=345re667877k9", 1, "form-control"], ["href", "javascript:void(0);", 1, "btn", "btn-secondary", "rounded-pill"], [1, "mb-4"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", "data-bs-target", "#withdraw_request", 1, "btn", "btn-secondary", "rounded-pill"], [1, "table-responsive", "custom-table"], [1, "table"], [1, "thead-light"], ["id", "withdraw_request", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "custom-btn-close"], [1, "isax", "isax-close-circle5"], [1, "modal-body"], [1, "card", "withdraw-item"], [1, "col-lg-6"], [1, "mb-1"], [1, "form-label"], [1, "text-danger"], ["type", "text", "placeholder", "$", 1, "form-control"], [1, "d-flex", "align-items-center", "pt-1"], [1, "isax", "isax-info-circle", "me-1"], [1, "modal-footer"], ["href", "javascript:void(0);", "data-bs-dismiss", "modal", 1, "btn", "bg-gray-100", "rounded-pill", "me-2"], ["type", "submit", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "rounded-pill"], ["href", "javascript:void(0);", 1, "text-primary"], [1, "avatar", "avatar-md", "avatar-rounded", "flex-shrink-0", "me-2", 3, "routerLink"], ["alt", "", 3, "src"], [3, "routerLink"], [1, "fs-14"], ["href", "javascript:void(0);", 1, "action-icon"], [1, "isax", "isax-document-copy4"]],
      template: function StudentReferralComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Referrals");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "img", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div")(10, "h6", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Net Earnings");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "$12,000");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "p", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Earning this month");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 2)(17, "div", 10)(18, "div", 4)(19, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div")(22, "h6", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Balance");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "$15,000");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "p", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "In the Wallet");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 2)(29, "div", 14)(30, "div", 4)(31, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div")(34, "h6", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "No of Referrals");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "10");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "p", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "In this month");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 1)(41, "div", 17)(42, "div", 18)(43, "div", 19)(44, "h5", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Your Referral Link");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "p", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "You can earn easily money by copy and share");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](49, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "a", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Copy link");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 17)(53, "div", 18)(54, "div", 19)(55, "h5", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Withdraw Money");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "ul", 25)(58, "li", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, " Withdraw securely to your bank account. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, " Commision is $25 per transaction under $10,000 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "Withdraw Money");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 27)(65, "table", 28)(66, "thead", 29)(67, "tr")(68, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, "Referred ID");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "Referrals");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "URL");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](74, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "Visits");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, "Total Earned");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](80, StudentReferralComponent_For_81_Template, 22, 9, "tr", null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](82, "app-custom-pagination");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div", 30)(84, "div", 31)(85, "div", 32)(86, "div", 33)(87, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, "Withdrawal Request");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "button", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](90, "i", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "form")(92, "div", 36)(93, "div", 37)(94, "div", 19)(95, "div", 1)(96, "div", 38)(97, "div")(98, "p", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99, "Withdrawal Balance");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](101, "$15000");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "div", 38)(103, "div")(104, "p", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](105, "Selected ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](107, "PayPal");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "div", 22)(109, "label", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](110, "Amount ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "span", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](112, " *");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](113, "input", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "p", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](115, "i", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](116, " Minimum withdraw amount is $50 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "div", 45)(118, "a", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](119, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "button", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](121, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](80);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.tableData);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _shared_service_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_4__.CustomPaginationComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return StudentReferralComponent;
})();

/***/ })

}]);
//# sourceMappingURL=8810.js.map