import {
  routes
} from "./chunk-E6TQA5KL.js";
import {
  RouterLink
} from "./chunk-TPKO67I6.js";
import "./chunk-QFZWCWB7.js";
import "./chunk-PXFMCAI3.js";
import "./chunk-YBJXKBE2.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/instructor/students-grid/students-grid.component.ts
var StudentsGridComponent = class _StudentsGridComponent {
  routes = routes;
  static \u0275fac = function StudentsGridComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentsGridComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentsGridComponent, selectors: [["app-students-grid"]], decls: 180, vars: 14, consts: [[1, "page-title", "d-flex", "align-items-center", "justify-content-between"], [1, "fw-bold"], [1, "d-flex", "align-items-center", "list-icons"], [1, "me-2", 3, "routerLink"], [1, "isax", "isax-task"], [1, "active", 3, "routerLink"], [1, "isax", "isax-element-3"], [1, "row", "justify-content-end"], [1, "col-md-4"], [1, "input-icon", "mb-3"], [1, "input-icon-addon"], [1, "isax", "isax-search-normal-14"], ["type", "email", "placeholder", "Search", 1, "form-control", "form-control-md"], [1, "row"], [1, "col-xl-4", "col-md-6"], [1, "card"], [1, "card-body"], [1, "mb-3"], [3, "routerLink"], ["src", "assets/img/students/student-01.jpg", "alt", "", 1, "rounded-3"], [1, "d-flex", "align-items-center", "justify-content-between", "border-bottom", "mb-3", "pb-3"], [1, "mb-2", "fw-bold"], [1, "text-info", "d-inline-flex", "align-items-center"], [1, "isax", "isax-location", "me-1"], ["href", "javascript:void(0);", 1, "text-info", "text-decoration-underline", "stu-loc"], ["href", "javascript:void(0);", 1, "avatar", "avatar-md", "avatar-rounded", "border"], [1, "isax", "isax-messages", "text-gray-9", "fs-14"], [1, "d-flex", "align-items-center", "justify-content-between", "fs-14"], [1, "d-inline-flex", "align-items-center"], [1, "isax", "isax-calendar-add5", "text-primary", "me-1"], [1, "isax", "isax-teacher5", "text-secondary", "me-1"], ["src", "assets/img/students/student-02.jpg", "alt", "", 1, "rounded-3"], ["src", "assets/img/students/student-03.jpg", "alt", "", 1, "rounded-3"], ["src", "assets/img/students/student-04.jpg", "alt", "", 1, "rounded-3"], ["src", "assets/img/students/student-05.jpg", "alt", "", 1, "rounded-3"], ["src", "assets/img/students/student-06.jpg", "alt", "", 1, "rounded-3"], [1, "row", "align-items-center"], [1, "col-md-2"], [1, "pagination-text"], [1, "col-md-10"], [1, "pagination", "lms-page", "justify-content-center", "justify-content-md-end", "mt-2", "mt-md-0"], [1, "page-item", "prev"], ["href", "javascript:void(0)", "tabindex", "-1", 1, "page-link"], [1, "fas", "fa-angle-left"], [1, "page-item", "first-page", "active"], ["href", "javascript:void(0)", 1, "page-link"], [1, "page-item"], [1, "page-item", "next"], [1, "fas", "fa-angle-right"]], template: function StudentsGridComponent_Template(rf, ctx) {
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
      \u0275\u0275element(13, "input", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 13)(15, "div", 14)(16, "div", 15)(17, "div", 16)(18, "div", 17)(19, "a", 18);
      \u0275\u0275element(20, "img", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 20)(22, "div")(23, "h5", 21)(24, "a", 18);
      \u0275\u0275text(25, "Ronald Richard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "span", 22);
      \u0275\u0275element(27, "i", 23);
      \u0275\u0275elementStart(28, "a", 24);
      \u0275\u0275text(29, "Newyork");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "a", 25);
      \u0275\u0275element(31, "i", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 27)(33, "span", 28);
      \u0275\u0275element(34, "i", 29);
      \u0275\u0275text(35, "22 Aug 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "span", 28);
      \u0275\u0275element(37, "i", 30);
      \u0275\u0275text(38, "10 Courses");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(39, "div", 14)(40, "div", 15)(41, "div", 16)(42, "div", 17)(43, "a", 18);
      \u0275\u0275element(44, "img", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 20)(46, "div")(47, "h5", 21)(48, "a", 18);
      \u0275\u0275text(49, "Mona Nancy");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "span", 22);
      \u0275\u0275element(51, "i", 23);
      \u0275\u0275elementStart(52, "a", 24);
      \u0275\u0275text(53, "Los Angels");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(54, "a", 25);
      \u0275\u0275element(55, "i", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "div", 27)(57, "span", 28);
      \u0275\u0275element(58, "i", 29);
      \u0275\u0275text(59, "15 Jul 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "span", 28);
      \u0275\u0275element(61, "i", 30);
      \u0275\u0275text(62, "08 Courses");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(63, "div", 14)(64, "div", 15)(65, "div", 16)(66, "div", 17)(67, "a", 18);
      \u0275\u0275element(68, "img", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div", 20)(70, "div")(71, "h5", 21)(72, "a", 18);
      \u0275\u0275text(73, "Patrick Alleman");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "span", 22);
      \u0275\u0275element(75, "i", 23);
      \u0275\u0275elementStart(76, "a", 24);
      \u0275\u0275text(77, "Alabama");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(78, "a", 25);
      \u0275\u0275element(79, "i", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "div", 27)(81, "span", 28);
      \u0275\u0275element(82, "i", 29);
      \u0275\u0275text(83, "18 Jun 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "span", 28);
      \u0275\u0275element(85, "i", 30);
      \u0275\u0275text(86, "12 Courses");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(87, "div", 14)(88, "div", 15)(89, "div", 16)(90, "div", 17)(91, "a", 18);
      \u0275\u0275element(92, "img", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "div", 20)(94, "div")(95, "h5", 21)(96, "a", 18);
      \u0275\u0275text(97, "Olive Paxson");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "span", 22);
      \u0275\u0275element(99, "i", 23);
      \u0275\u0275elementStart(100, "a", 24);
      \u0275\u0275text(101, "Brisbane");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(102, "a", 25);
      \u0275\u0275element(103, "i", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "div", 27)(105, "span", 28);
      \u0275\u0275element(106, "i", 29);
      \u0275\u0275text(107, "03 May 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "span", 28);
      \u0275\u0275element(109, "i", 30);
      \u0275\u0275text(110, "07 Courses");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(111, "div", 14)(112, "div", 15)(113, "div", 16)(114, "div", 17)(115, "a", 18);
      \u0275\u0275element(116, "img", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(117, "div", 20)(118, "div")(119, "h5", 21)(120, "a", 18);
      \u0275\u0275text(121, "Chris Thomas");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "span", 22);
      \u0275\u0275element(123, "i", 23);
      \u0275\u0275elementStart(124, "a", 24);
      \u0275\u0275text(125, "Newyork");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(126, "a", 25);
      \u0275\u0275element(127, "i", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(128, "div", 27)(129, "span", 28);
      \u0275\u0275element(130, "i", 29);
      \u0275\u0275text(131, "14 Apr 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "span", 28);
      \u0275\u0275element(133, "i", 30);
      \u0275\u0275text(134, "04 Courses");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(135, "div", 14)(136, "div", 15)(137, "div", 16)(138, "div", 17)(139, "a", 18);
      \u0275\u0275element(140, "img", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(141, "div", 20)(142, "div")(143, "h5", 21)(144, "a", 18);
      \u0275\u0275text(145, "Joyce Perron");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(146, "span", 22);
      \u0275\u0275element(147, "i", 23);
      \u0275\u0275elementStart(148, "a", 24);
      \u0275\u0275text(149, "Ontoro");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(150, "a", 25);
      \u0275\u0275element(151, "i", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(152, "div", 27)(153, "span", 28);
      \u0275\u0275element(154, "i", 29);
      \u0275\u0275text(155, "17 Mar 2025");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "span", 28);
      \u0275\u0275element(157, "i", 30);
      \u0275\u0275text(158, "06 Courses");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(159, "div", 36)(160, "div", 37)(161, "p", 38);
      \u0275\u0275text(162, "Page 1 of 2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(163, "div", 39)(164, "ul", 40)(165, "li", 41)(166, "a", 42);
      \u0275\u0275element(167, "i", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(168, "li", 44)(169, "a", 45);
      \u0275\u0275text(170, "1");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(171, "li", 46)(172, "a", 45);
      \u0275\u0275text(173, "2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(174, "li", 46)(175, "a", 45);
      \u0275\u0275text(176, "3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(177, "li", 47)(178, "a", 45);
      \u0275\u0275element(179, "i", 48);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.studentsList);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.studentsGrid);
      \u0275\u0275advance(13);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(19);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(19);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(19);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(19);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(19);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentsGridComponent, [{
    type: Component,
    args: [{ selector: "app-students-grid", imports: [RouterLink], template: '\n\n                <div class="page-title d-flex align-items-center justify-content-between">\n                    <h5 class="fw-bold">Students</h5>\n                    <div class="d-flex align-items-center list-icons">\n                        <a [routerLink]="routes.studentsList" class="me-2"><i class="isax isax-task"></i></a>\n                        <a [routerLink]="routes.studentsGrid" class="active"><i class="isax isax-element-3"></i></a>\n                        \n                    </div>\n                </div>\n                <div class="row justify-content-end">\n                    <div class="col-md-4">\n                        <div class="input-icon mb-3">\n                            <span class="input-icon-addon">\n                                <i class="isax isax-search-normal-14"></i>\n                            </span>\n                            <input type="email" class="form-control form-control-md" placeholder="Search">\n                        </div>\n                    </div>\n                </div>\n                <div class="row">\n                    <div class="col-xl-4 col-md-6">\n                        <div class="card">\n                            <div class="card-body">\n                                <div class="mb-3">\n                                    <a [routerLink]="routes.studentsDetails"><img src="assets/img/students/student-01.jpg" class="rounded-3" alt=""></a>\n                                </div>\n                                <div class="d-flex align-items-center justify-content-between border-bottom mb-3 pb-3">\n                                    <div>\n                                        <h5 class="mb-2 fw-bold"><a [routerLink]="routes.studentsDetails">Ronald Richard</a></h5>\n                                        <span class="text-info d-inline-flex align-items-center"><i class="isax isax-location me-1"></i><a href="javascript:void(0);" class="text-info text-decoration-underline stu-loc">Newyork</a></span>\n                                    </div>\n                                    <a href="javascript:void(0);" class="avatar avatar-md avatar-rounded border"><i class="isax isax-messages text-gray-9 fs-14"></i></a>\n                                </div>\n                                <div class="d-flex align-items-center justify-content-between fs-14">\n                                    <span class="d-inline-flex align-items-center"><i class="isax isax-calendar-add5 text-primary me-1"></i>22 Aug 2025</span>\n                                    <span class="d-inline-flex align-items-center"><i class="isax isax-teacher5 text-secondary me-1"></i>10 Courses</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="col-xl-4 col-md-6">\n                        <div class="card">\n                            <div class="card-body">\n                                <div class="mb-3">\n                                    <a [routerLink]="routes.studentsDetails"><img src="assets/img/students/student-02.jpg" class="rounded-3" alt=""></a>\n                                </div>\n                                <div class="d-flex align-items-center justify-content-between border-bottom mb-3 pb-3">\n                                    <div>\n                                        <h5 class="mb-2 fw-bold"><a [routerLink]="routes.studentsDetails">Mona Nancy</a></h5>\n                                        <span class="text-info d-inline-flex align-items-center"><i class="isax isax-location me-1"></i><a href="javascript:void(0);" class="text-info text-decoration-underline stu-loc">Los Angels</a></span>\n                                    </div>\n                                    <a href="javascript:void(0);" class="avatar avatar-md avatar-rounded border"><i class="isax isax-messages text-gray-9 fs-14"></i></a>\n                                </div>\n                                <div class="d-flex align-items-center justify-content-between fs-14">\n                                    <span class="d-inline-flex align-items-center"><i class="isax isax-calendar-add5 text-primary me-1"></i>15 Jul 2025</span>\n                                    <span class="d-inline-flex align-items-center"><i class="isax isax-teacher5 text-secondary me-1"></i>08 Courses</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="col-xl-4 col-md-6">\n                        <div class="card">\n                            <div class="card-body">\n                                <div class="mb-3">\n                                    <a [routerLink]="routes.studentsDetails"><img src="assets/img/students/student-03.jpg" class="rounded-3" alt=""></a>\n                                </div>\n                                <div class="d-flex align-items-center justify-content-between border-bottom mb-3 pb-3">\n                                    <div>\n                                        <h5 class="mb-2 fw-bold"><a [routerLink]="routes.studentsDetails">Patrick Alleman</a></h5>\n                                        <span class="text-info d-inline-flex align-items-center"><i class="isax isax-location me-1"></i><a href="javascript:void(0);" class="text-info text-decoration-underline stu-loc">Alabama</a></span>\n                                    </div>\n                                    <a href="javascript:void(0);" class="avatar avatar-md avatar-rounded border"><i class="isax isax-messages text-gray-9 fs-14"></i></a>\n                                </div>\n                                <div class="d-flex align-items-center justify-content-between fs-14">\n                                    <span class="d-inline-flex align-items-center"><i class="isax isax-calendar-add5 text-primary me-1"></i>18 Jun 2025</span>\n                                    <span class="d-inline-flex align-items-center"><i class="isax isax-teacher5 text-secondary me-1"></i>12 Courses</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="col-xl-4 col-md-6">\n                        <div class="card">\n                            <div class="card-body">\n                                <div class="mb-3">\n                                    <a [routerLink]="routes.studentsDetails"><img src="assets/img/students/student-04.jpg" class="rounded-3" alt=""></a>\n                                </div>\n                                <div class="d-flex align-items-center justify-content-between border-bottom mb-3 pb-3">\n                                    <div>\n                                        <h5 class="mb-2 fw-bold"><a [routerLink]="routes.studentsDetails">Olive Paxson</a></h5>\n                                        <span class="text-info d-inline-flex align-items-center"><i class="isax isax-location me-1"></i><a href="javascript:void(0);" class="text-info text-decoration-underline stu-loc">Brisbane</a></span>\n                                    </div>\n                                    <a href="javascript:void(0);" class="avatar avatar-md avatar-rounded border"><i class="isax isax-messages text-gray-9 fs-14"></i></a>\n                                </div>\n                                <div class="d-flex align-items-center justify-content-between fs-14">\n                                    <span class="d-inline-flex align-items-center"><i class="isax isax-calendar-add5 text-primary me-1"></i>03 May 2025</span>\n                                    <span class="d-inline-flex align-items-center"><i class="isax isax-teacher5 text-secondary me-1"></i>07 Courses</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="col-xl-4 col-md-6">\n                        <div class="card">\n                            <div class="card-body">\n                                <div class="mb-3">\n                                    <a [routerLink]="routes.studentsDetails"><img src="assets/img/students/student-05.jpg" class="rounded-3" alt=""></a>\n                                </div>\n                                <div class="d-flex align-items-center justify-content-between border-bottom mb-3 pb-3">\n                                    <div>\n                                        <h5 class="mb-2 fw-bold"><a [routerLink]="routes.studentsDetails">Chris Thomas</a></h5>\n                                        <span class="text-info d-inline-flex align-items-center"><i class="isax isax-location me-1"></i><a href="javascript:void(0);" class="text-info text-decoration-underline stu-loc">Newyork</a></span>\n                                    </div>\n                                    <a href="javascript:void(0);" class="avatar avatar-md avatar-rounded border"><i class="isax isax-messages text-gray-9 fs-14"></i></a>\n                                </div>\n                                <div class="d-flex align-items-center justify-content-between fs-14">\n                                    <span class="d-inline-flex align-items-center"><i class="isax isax-calendar-add5 text-primary me-1"></i>14 Apr 2025</span>\n                                    <span class="d-inline-flex align-items-center"><i class="isax isax-teacher5 text-secondary me-1"></i>04 Courses</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="col-xl-4 col-md-6">\n                        <div class="card">\n                            <div class="card-body">\n                                <div class="mb-3">\n                                    <a [routerLink]="routes.studentsDetails"><img src="assets/img/students/student-06.jpg" class="rounded-3" alt=""></a>\n                                </div>\n                                <div class="d-flex align-items-center justify-content-between border-bottom mb-3 pb-3">\n                                    <div>\n                                        <h5 class="mb-2 fw-bold"><a [routerLink]="routes.studentsDetails">Joyce Perron</a></h5>\n                                        <span class="text-info d-inline-flex align-items-center"><i class="isax isax-location me-1"></i><a href="javascript:void(0);" class="text-info text-decoration-underline stu-loc">Ontoro</a></span>\n                                    </div>\n                                    <a href="javascript:void(0);" class="avatar avatar-md avatar-rounded border"><i class="isax isax-messages text-gray-9 fs-14"></i></a>\n                                </div>\n                                <div class="d-flex align-items-center justify-content-between fs-14">\n                                    <span class="d-inline-flex align-items-center"><i class="isax isax-calendar-add5 text-primary me-1"></i>17 Mar 2025</span>\n                                    <span class="d-inline-flex align-items-center"><i class="isax isax-teacher5 text-secondary me-1"></i>06 Courses</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- /pagination -->\n                <div class="row align-items-center">\n                    <div class="col-md-2">\n                    <p class="pagination-text">Page 1 of 2</p>\n                    </div>\n                    <div class="col-md-10">\n                        <ul class="pagination lms-page justify-content-center justify-content-md-end mt-2 mt-md-0">\n                            <li class="page-item prev">\n                                <a class="page-link" href="javascript:void(0)" tabindex="-1"><i class="fas fa-angle-left"></i></a>\n                            </li>\n                            <li class="page-item first-page active">\n                                <a class="page-link" href="javascript:void(0)">1</a>\n                            </li>\n                            <li class="page-item">\n                                <a class="page-link" href="javascript:void(0)">2</a>\n                            </li>\n                            <li class="page-item">\n                                <a class="page-link" href="javascript:void(0)">3</a>\n                            </li>\n                            <li class="page-item next">\n                                <a class="page-link" href="javascript:void(0)"><i class="fas fa-angle-right"></i></a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n                <!-- /pagination -->\n                                                \n\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentsGridComponent, { className: "StudentsGridComponent", filePath: "src/app/features/instructor/students-grid/students-grid.component.ts", lineNumber: 11 });
})();
export {
  StudentsGridComponent
};
//# sourceMappingURL=chunk-7RIXPM4T.js.map
