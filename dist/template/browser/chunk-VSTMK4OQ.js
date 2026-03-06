import {
  routes
} from "./chunk-E6TQA5KL.js";
import {
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtext
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/student/student-courses/student-courses.component.ts
var _c0 = (a0) => ({ "selected": a0 });
var StudentCoursesComponent = class _StudentCoursesComponent {
  routes = routes;
  isSelected = [false];
  iconSelect(index) {
    this.isSelected[index] = !this.isSelected[index];
  }
  static \u0275fac = function StudentCoursesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentCoursesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentCoursesComponent, selectors: [["app-student-courses"]], decls: 586, vars: 144, consts: [[1, "page-title", "d-flex", "flex-wrap", "gap-3", "align-items-center", "justify-content-between"], [1, "tab-list"], ["role", "tablist", 1, "nav", "mb-0", "gap-2"], ["role", "presentation", 1, "nav-item", "mb-0"], ["href", "javascript:void(0);", "data-bs-toggle", "tab", "data-bs-target", "#enroll-courses", "aria-selected", "true", "role", "tab", 1, "active"], ["href", "javascript:void(0);", "data-bs-toggle", "tab", "data-bs-target", "#active-courses", "aria-selected", "false", "role", "tab", "tabindex", "-1", 1, ""], ["href", "javascript:void(0);", "data-bs-toggle", "tab", "data-bs-target", "#complete-courses", "aria-selected", "false", "role", "tab", "tabindex", "-1", 1, ""], [1, "tab-content"], ["id", "enroll-courses", "role", "tabpanel", 1, "tab-pane", "fade", "active", "show"], [1, "row"], [1, "col-xl-4", "col-md-6"], [1, "course-item-two", "course-item", "mx-0"], [1, "course-img"], [3, "routerLink"], ["src", "assets/img/course/course-01.jpg", "alt", "img", 1, "img-fluid"], [1, "position-absolute", "start-0", "top-0", "d-flex", "align-items-start", "w-100", "z-index-2", "p-3"], [1, "badge", "text-bg-danger"], ["href", "javascript:void(0);", 1, "fav-icon", "ms-auto", 3, "click", "ngClass"], [1, "isax", "isax-heart"], [1, "course-content"], [1, "d-flex", "justify-content-between", "mb-2"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-sm", 3, "routerLink"], ["src", "assets/img/user/user-29.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-sm", "rounded-circle"], [1, "ms-2"], [1, "link-default", "fs-14", 3, "routerLink"], [1, "badge", "badge-light", "rounded-pill", "bg-light", "d-inline-flex", "align-items-center", "fs-13", "fw-medium", "mb-0"], [1, "title", "mb-2"], [1, "d-flex", "align-items-center", "mb-3"], [1, "fa-solid", "fa-star", "text-warning", "me-2"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "text-secondary", "mb-0"], [1, "btn", "btn-dark", "btn-sm", "d-inline-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-arrow-right-3", "ms-1"], ["src", "assets/img/course/course-02.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/user/user-30.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-sm", "rounded-circle"], ["src", "assets/img/course/course-03.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/user/user-31.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-sm", "rounded-circle"], ["src", "assets/img/course/course-04.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/user/user-32.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-sm", "rounded-circle"], ["src", "assets/img/course/course-05.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/course/course-06.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/user/user-33.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-sm", "rounded-circle"], ["src", "assets/img/course/course-07.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/user/user-34.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-sm", "rounded-circle"], ["src", "assets/img/course/course-08.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/user/user-35.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-sm", "rounded-circle"], ["src", "assets/img/course/course-09.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/user/user-36.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-sm", "rounded-circle"], ["id", "active-courses", "role", "tabpanel", 1, "tab-pane", "fade"], ["id", "complete-courses", "role", "tabpanel", 1, "tab-pane", "fade"], [1, "row", "align-items-center", "mt-2"], [1, "col-md-2"], [1, "pagination-text"], [1, "col-md-10"], [1, "pagination", "lms-page", "justify-content-center", "justify-content-md-end", "mt-2", "mt-md-0"], [1, "page-item", "prev"], ["href", "javascript:void(0)", "tabindex", "-1", 1, "page-link"], [1, "fas", "fa-angle-left"], [1, "page-item", "first-page", "active"], ["href", "javascript:void(0)", 1, "page-link"], [1, "page-item"], [1, "page-item", "next"], [1, "fas", "fa-angle-right"]], template: function StudentCoursesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h5");
      \u0275\u0275text(2, "Enrolled Courses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 1)(4, "ul", 2)(5, "li", 3)(6, "a", 4);
      \u0275\u0275text(7, "Enrolled (09)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "li", 3)(9, "a", 5);
      \u0275\u0275text(10, "Active (06)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "li", 3)(12, "a", 6);
      \u0275\u0275text(13, "Completed (03)");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(14, "div", 7)(15, "div", 8)(16, "div", 9)(17, "div", 10)(18, "div", 11)(19, "div", 12)(20, "a", 13);
      \u0275\u0275element(21, "img", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 15)(23, "div", 16);
      \u0275\u0275text(24, "15% off");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "a", 17);
      \u0275\u0275listener("click", function StudentCoursesComponent_Template_a_click_25_listener() {
        return ctx.iconSelect(1);
      });
      \u0275\u0275element(26, "i", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 19)(28, "div", 20)(29, "div", 21)(30, "a", 22);
      \u0275\u0275element(31, "img", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 24)(33, "a", 25);
      \u0275\u0275text(34, "Brenda Slaton");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "span", 26);
      \u0275\u0275text(36, " Design ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "h6", 27)(38, "a", 13);
      \u0275\u0275text(39, "Information About UI/UX Design Degree");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "p", 28);
      \u0275\u0275element(41, "i", 29);
      \u0275\u0275text(42, "4.9 (200 Reviews)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 30)(44, "h5", 31);
      \u0275\u0275text(45, "$120");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "a", 32);
      \u0275\u0275text(47, "View Course");
      \u0275\u0275element(48, "i", 33);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(49, "div", 10)(50, "div", 11)(51, "div", 12)(52, "a", 13);
      \u0275\u0275element(53, "img", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 15)(55, "a", 17);
      \u0275\u0275listener("click", function StudentCoursesComponent_Template_a_click_55_listener() {
        return ctx.iconSelect(2);
      });
      \u0275\u0275element(56, "i", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(57, "div", 19)(58, "div", 20)(59, "div", 21)(60, "a", 22);
      \u0275\u0275element(61, "img", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 24)(63, "a", 25);
      \u0275\u0275text(64, "Ana Reyes");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "span", 26);
      \u0275\u0275text(66, " Wordpress ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "h6", 27)(68, "a", 13);
      \u0275\u0275text(69, "Wordpress for Beginners - Master Wordpress Quickly");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "p", 28);
      \u0275\u0275element(71, "i", 29);
      \u0275\u0275text(72, "4.4 (160 Reviews)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "div", 30)(74, "h5", 31);
      \u0275\u0275text(75, "$140");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "a", 32);
      \u0275\u0275text(77, "View Course");
      \u0275\u0275element(78, "i", 33);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(79, "div", 10)(80, "div", 11)(81, "div", 12)(82, "a", 13);
      \u0275\u0275element(83, "img", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div", 15)(85, "a", 17);
      \u0275\u0275listener("click", function StudentCoursesComponent_Template_a_click_85_listener() {
        return ctx.iconSelect(3);
      });
      \u0275\u0275element(86, "i", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(87, "div", 19)(88, "div", 20)(89, "div", 21)(90, "a", 22);
      \u0275\u0275element(91, "img", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "div", 24)(93, "a", 25);
      \u0275\u0275text(94, "Andrew Pirtle");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(95, "span", 26);
      \u0275\u0275text(96, " Design ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "h6", 27)(98, "a", 13);
      \u0275\u0275text(99, "Sketch from A to Z (2024): Become an app designer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "p", 28);
      \u0275\u0275element(101, "i", 29);
      \u0275\u0275text(102, "4.4 (160 Reviews)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "div", 30)(104, "h5", 31);
      \u0275\u0275text(105, "$140");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "a", 32);
      \u0275\u0275text(107, "View Course");
      \u0275\u0275element(108, "i", 33);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(109, "div", 10)(110, "div", 11)(111, "div", 12)(112, "a", 13);
      \u0275\u0275element(113, "img", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "div", 15)(115, "a", 17);
      \u0275\u0275listener("click", function StudentCoursesComponent_Template_a_click_115_listener() {
        return ctx.iconSelect(4);
      });
      \u0275\u0275element(116, "i", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(117, "div", 19)(118, "div", 20)(119, "div", 21)(120, "a", 22);
      \u0275\u0275element(121, "img", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "div", 24)(123, "a", 25);
      \u0275\u0275text(124, "Christy Garner");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(125, "span", 26);
      \u0275\u0275text(126, " Programming ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(127, "h6", 27)(128, "a", 13);
      \u0275\u0275text(129, "Build Responsive Real World Websites with Crash Course");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(130, "p", 28);
      \u0275\u0275element(131, "i", 29);
      \u0275\u0275text(132, "4.2 (220 Reviews)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "div", 30)(134, "h5", 31);
      \u0275\u0275text(135, "$200");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "a", 32);
      \u0275\u0275text(137, "View Course");
      \u0275\u0275element(138, "i", 33);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(139, "div", 10)(140, "div", 11)(141, "div", 12)(142, "a", 13);
      \u0275\u0275element(143, "img", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "div", 15)(145, "a", 17);
      \u0275\u0275listener("click", function StudentCoursesComponent_Template_a_click_145_listener() {
        return ctx.iconSelect(5);
      });
      \u0275\u0275element(146, "i", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(147, "div", 19)(148, "div", 20)(149, "div", 21)(150, "a", 22);
      \u0275\u0275element(151, "img", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "div", 24)(153, "a", 25);
      \u0275\u0275text(154, "Justin Gregory");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(155, "span", 26);
      \u0275\u0275text(156, " Programming ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(157, "h6", 27)(158, "a", 13);
      \u0275\u0275text(159, "Learn JavaScript and Express to become a Expert");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(160, "p", 28);
      \u0275\u0275element(161, "i", 29);
      \u0275\u0275text(162, "4.4 (180 Reviews)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(163, "div", 30)(164, "h5", 31);
      \u0275\u0275text(165, "$130");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "a", 32);
      \u0275\u0275text(167, "View Course");
      \u0275\u0275element(168, "i", 33);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(169, "div", 10)(170, "div", 11)(171, "div", 12)(172, "a", 13);
      \u0275\u0275element(173, "img", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "div", 15)(175, "a", 17);
      \u0275\u0275listener("click", function StudentCoursesComponent_Template_a_click_175_listener() {
        return ctx.iconSelect(6);
      });
      \u0275\u0275element(176, "i", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(177, "div", 19)(178, "div", 20)(179, "div", 21)(180, "a", 22);
      \u0275\u0275element(181, "img", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "div", 24)(183, "a", 25);
      \u0275\u0275text(184, "Carolyn Hines");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(185, "span", 26);
      \u0275\u0275text(186, " Programming ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(187, "h6", 27)(188, "a", 13);
      \u0275\u0275text(189, "Introduction to Python Programming");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(190, "p", 28);
      \u0275\u0275element(191, "i", 29);
      \u0275\u0275text(192, "4.4 (180 Reviews)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "div", 30)(194, "h5", 31);
      \u0275\u0275text(195, "$130");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "a", 32);
      \u0275\u0275text(197, "View Course");
      \u0275\u0275element(198, "i", 33);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(199, "div", 10)(200, "div", 11)(201, "div", 12)(202, "a", 13);
      \u0275\u0275element(203, "img", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "div", 15)(205, "a", 17);
      \u0275\u0275listener("click", function StudentCoursesComponent_Template_a_click_205_listener() {
        return ctx.iconSelect(7);
      });
      \u0275\u0275element(206, "i", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(207, "div", 19)(208, "div", 20)(209, "div", 21)(210, "a", 22);
      \u0275\u0275element(211, "img", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(212, "div", 24)(213, "a", 25);
      \u0275\u0275text(214, "Rafael Miller");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(215, "span", 26);
      \u0275\u0275text(216, " Programming ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(217, "h6", 27)(218, "a", 13);
      \u0275\u0275text(219, "Build Responsive Websites with HTML5 and CSS3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(220, "p", 28);
      \u0275\u0275element(221, "i", 29);
      \u0275\u0275text(222, "4.4 (180 Reviews)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "div", 30)(224, "h5", 31);
      \u0275\u0275text(225, "$170");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(226, "a", 32);
      \u0275\u0275text(227, "View Course");
      \u0275\u0275element(228, "i", 33);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(229, "div", 10)(230, "div", 11)(231, "div", 12)(232, "a", 13);
      \u0275\u0275element(233, "img", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(234, "div", 15)(235, "a", 17);
      \u0275\u0275listener("click", function StudentCoursesComponent_Template_a_click_235_listener() {
        return ctx.iconSelect(8);
      });
      \u0275\u0275element(236, "i", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(237, "div", 19)(238, "div", 20)(239, "div", 21)(240, "a", 22);
      \u0275\u0275element(241, "img", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(242, "div", 24)(243, "a", 25);
      \u0275\u0275text(244, "Nancy Duarte");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(245, "span", 26);
      \u0275\u0275text(246, " Design ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(247, "h6", 27)(248, "a", 13);
      \u0275\u0275text(249, "Information About Photoshop Design Degree");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(250, "p", 28);
      \u0275\u0275element(251, "i", 29);
      \u0275\u0275text(252, "4.4 (180 Reviews)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(253, "div", 30)(254, "h5", 31);
      \u0275\u0275text(255, "$170");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(256, "a", 32);
      \u0275\u0275text(257, "View Course");
      \u0275\u0275element(258, "i", 33);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(259, "div", 10)(260, "div", 11)(261, "div", 12)(262, "a", 13);
      \u0275\u0275element(263, "img", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(264, "div", 15)(265, "a", 17);
      \u0275\u0275listener("click", function StudentCoursesComponent_Template_a_click_265_listener() {
        return ctx.iconSelect(9);
      });
      \u0275\u0275element(266, "i", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(267, "div", 19)(268, "div", 20)(269, "div", 21)(270, "a", 22);
      \u0275\u0275element(271, "img", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(272, "div", 24)(273, "a", 25);
      \u0275\u0275text(274, "James Kagan");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(275, "span", 26);
      \u0275\u0275text(276, " Design ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(277, "h6", 27)(278, "a", 13);
      \u0275\u0275text(279, "C# Developers Double Your Coding with Visual Studio");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(280, "p", 28);
      \u0275\u0275element(281, "i", 29);
      \u0275\u0275text(282, "4.4 (180 Reviews)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(283, "div", 30)(284, "h5", 31);
      \u0275\u0275text(285, "$180");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(286, "a", 32);
      \u0275\u0275text(287, "View Course");
      \u0275\u0275element(288, "i", 33);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(289, "div", 49)(290, "div", 9)(291, "div", 10)(292, "div", 11)(293, "div", 12)(294, "a", 13);
      \u0275\u0275element(295, "img", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(296, "div", 15)(297, "div", 16);
      \u0275\u0275text(298, "15% off");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(299, "a", 17);
      \u0275\u0275listener("click", function StudentCoursesComponent_Template_a_click_299_listener() {
        return ctx.iconSelect(10);
      });
      \u0275\u0275element(300, "i", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(301, "div", 19)(302, "div", 20)(303, "div", 21)(304, "a", 22);
      \u0275\u0275element(305, "img", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(306, "div", 24)(307, "a", 25);
      \u0275\u0275text(308, "Brenda Slaton");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(309, "span", 26);
      \u0275\u0275text(310, " Design ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(311, "h6", 27)(312, "a", 13);
      \u0275\u0275text(313, "Information About UI/UX Design Degree");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(314, "p", 28);
      \u0275\u0275element(315, "i", 29);
      \u0275\u0275text(316, "4.9 (200 Reviews)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(317, "div", 30)(318, "h5", 31);
      \u0275\u0275text(319, "$120");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(320, "a", 32);
      \u0275\u0275text(321, "View Course");
      \u0275\u0275element(322, "i", 33);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(323, "div", 10)(324, "div", 11)(325, "div", 12)(326, "a", 13);
      \u0275\u0275element(327, "img", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(328, "div", 15)(329, "a", 17);
      \u0275\u0275listener("click", function StudentCoursesComponent_Template_a_click_329_listener() {
        return ctx.iconSelect(11);
      });
      \u0275\u0275element(330, "i", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(331, "div", 19)(332, "div", 20)(333, "div", 21)(334, "a", 22);
      \u0275\u0275element(335, "img", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(336, "div", 24)(337, "a", 25);
      \u0275\u0275text(338, "Ana Reyes");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(339, "span", 26);
      \u0275\u0275text(340, " Wordpress ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(341, "h6", 27)(342, "a", 13);
      \u0275\u0275text(343, "Wordpress for Beginners - Master Wordpress Quickly");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(344, "p", 28);
      \u0275\u0275element(345, "i", 29);
      \u0275\u0275text(346, "4.4 (160 Reviews)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(347, "div", 30)(348, "h5", 31);
      \u0275\u0275text(349, "$140");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(350, "a", 32);
      \u0275\u0275text(351, "View Course");
      \u0275\u0275element(352, "i", 33);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(353, "div", 10)(354, "div", 11)(355, "div", 12)(356, "a", 13);
      \u0275\u0275element(357, "img", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(358, "div", 15)(359, "a", 17);
      \u0275\u0275listener("click", function StudentCoursesComponent_Template_a_click_359_listener() {
        return ctx.iconSelect(12);
      });
      \u0275\u0275element(360, "i", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(361, "div", 19)(362, "div", 20)(363, "div", 21)(364, "a", 22);
      \u0275\u0275element(365, "img", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(366, "div", 24)(367, "a", 25);
      \u0275\u0275text(368, "Andrew Pirtle");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(369, "span", 26);
      \u0275\u0275text(370, " Design ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(371, "h6", 27)(372, "a", 13);
      \u0275\u0275text(373, "Sketch from A to Z (2024): Become an app designer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(374, "p", 28);
      \u0275\u0275element(375, "i", 29);
      \u0275\u0275text(376, "4.4 (160 Reviews)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(377, "div", 30)(378, "h5", 31);
      \u0275\u0275text(379, "$140");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(380, "a", 32);
      \u0275\u0275text(381, "View Course");
      \u0275\u0275element(382, "i", 33);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(383, "div", 10)(384, "div", 11)(385, "div", 12)(386, "a", 13);
      \u0275\u0275element(387, "img", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(388, "div", 15)(389, "a", 17);
      \u0275\u0275listener("click", function StudentCoursesComponent_Template_a_click_389_listener() {
        return ctx.iconSelect(13);
      });
      \u0275\u0275element(390, "i", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(391, "div", 19)(392, "div", 20)(393, "div", 21)(394, "a", 22);
      \u0275\u0275element(395, "img", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(396, "div", 24)(397, "a", 25);
      \u0275\u0275text(398, "Christy Garner");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(399, "span", 26);
      \u0275\u0275text(400, " Programming ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(401, "h6", 27)(402, "a", 13);
      \u0275\u0275text(403, "Build Responsive Real World Websites with Crash Course");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(404, "p", 28);
      \u0275\u0275element(405, "i", 29);
      \u0275\u0275text(406, "4.2 (220 Reviews)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(407, "div", 30)(408, "h5", 31);
      \u0275\u0275text(409, "$200");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(410, "a", 32);
      \u0275\u0275text(411, "View Course");
      \u0275\u0275element(412, "i", 33);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(413, "div", 10)(414, "div", 11)(415, "div", 12)(416, "a", 13);
      \u0275\u0275element(417, "img", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(418, "div", 15)(419, "a", 17);
      \u0275\u0275listener("click", function StudentCoursesComponent_Template_a_click_419_listener() {
        return ctx.iconSelect(14);
      });
      \u0275\u0275element(420, "i", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(421, "div", 19)(422, "div", 20)(423, "div", 21)(424, "a", 22);
      \u0275\u0275element(425, "img", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(426, "div", 24)(427, "a", 25);
      \u0275\u0275text(428, "Justin Gregory");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(429, "span", 26);
      \u0275\u0275text(430, " Programming ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(431, "h6", 27)(432, "a", 13);
      \u0275\u0275text(433, "Learn JavaScript and Express to become a Expert");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(434, "p", 28);
      \u0275\u0275element(435, "i", 29);
      \u0275\u0275text(436, "4.4 (180 Reviews)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(437, "div", 30)(438, "h5", 31);
      \u0275\u0275text(439, "$130");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(440, "a", 32);
      \u0275\u0275text(441, "View Course");
      \u0275\u0275element(442, "i", 33);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(443, "div", 10)(444, "div", 11)(445, "div", 12)(446, "a", 13);
      \u0275\u0275element(447, "img", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(448, "div", 15)(449, "a", 17);
      \u0275\u0275listener("click", function StudentCoursesComponent_Template_a_click_449_listener() {
        return ctx.iconSelect(15);
      });
      \u0275\u0275element(450, "i", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(451, "div", 19)(452, "div", 20)(453, "div", 21)(454, "a", 22);
      \u0275\u0275element(455, "img", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(456, "div", 24)(457, "a", 25);
      \u0275\u0275text(458, "Carolyn Hines");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(459, "span", 26);
      \u0275\u0275text(460, " Programming ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(461, "h6", 27)(462, "a", 13);
      \u0275\u0275text(463, "Introduction to Python Programming");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(464, "p", 28);
      \u0275\u0275element(465, "i", 29);
      \u0275\u0275text(466, "4.4 (180 Reviews)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(467, "div", 30)(468, "h5", 31);
      \u0275\u0275text(469, "$130");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(470, "a", 32);
      \u0275\u0275text(471, "View Course");
      \u0275\u0275element(472, "i", 33);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(473, "div", 50)(474, "div", 9)(475, "div", 10)(476, "div", 11)(477, "div", 12)(478, "a", 13);
      \u0275\u0275element(479, "img", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(480, "div", 15)(481, "a", 17);
      \u0275\u0275listener("click", function StudentCoursesComponent_Template_a_click_481_listener() {
        return ctx.iconSelect(16);
      });
      \u0275\u0275element(482, "i", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(483, "div", 19)(484, "div", 20)(485, "div", 21)(486, "a", 22);
      \u0275\u0275element(487, "img", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(488, "div", 24)(489, "a", 25);
      \u0275\u0275text(490, "Christy Garner");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(491, "span", 26);
      \u0275\u0275text(492, " Programming ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(493, "h6", 27)(494, "a", 13);
      \u0275\u0275text(495, "Build Responsive Real World Websites with Crash Course");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(496, "p", 28);
      \u0275\u0275element(497, "i", 29);
      \u0275\u0275text(498, "4.2 (220 Reviews)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(499, "div", 30)(500, "h5", 31);
      \u0275\u0275text(501, "$200");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(502, "a", 32);
      \u0275\u0275text(503, "View Course");
      \u0275\u0275element(504, "i", 33);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(505, "div", 10)(506, "div", 11)(507, "div", 12)(508, "a", 13);
      \u0275\u0275element(509, "img", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(510, "div", 15)(511, "a", 17);
      \u0275\u0275listener("click", function StudentCoursesComponent_Template_a_click_511_listener() {
        return ctx.iconSelect(17);
      });
      \u0275\u0275element(512, "i", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(513, "div", 19)(514, "div", 20)(515, "div", 21)(516, "a", 22);
      \u0275\u0275element(517, "img", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(518, "div", 24)(519, "a", 25);
      \u0275\u0275text(520, "Justin Gregory");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(521, "span", 26);
      \u0275\u0275text(522, " Programming ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(523, "h6", 27)(524, "a", 13);
      \u0275\u0275text(525, "Learn JavaScript and Express to become a Expert");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(526, "p", 28);
      \u0275\u0275element(527, "i", 29);
      \u0275\u0275text(528, "4.4 (180 Reviews)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(529, "div", 30)(530, "h5", 31);
      \u0275\u0275text(531, "$130");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(532, "a", 32);
      \u0275\u0275text(533, "View Course");
      \u0275\u0275element(534, "i", 33);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(535, "div", 10)(536, "div", 11)(537, "div", 12)(538, "a", 13);
      \u0275\u0275element(539, "img", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(540, "div", 15)(541, "a", 17);
      \u0275\u0275listener("click", function StudentCoursesComponent_Template_a_click_541_listener() {
        return ctx.iconSelect(18);
      });
      \u0275\u0275element(542, "i", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(543, "div", 19)(544, "div", 20)(545, "div", 21)(546, "a", 22);
      \u0275\u0275element(547, "img", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(548, "div", 24)(549, "a", 25);
      \u0275\u0275text(550, "Carolyn Hines");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(551, "span", 26);
      \u0275\u0275text(552, " Programming ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(553, "h6", 27)(554, "a", 13);
      \u0275\u0275text(555, "Introduction to Python Programming");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(556, "p", 28);
      \u0275\u0275element(557, "i", 29);
      \u0275\u0275text(558, "4.4 (180 Reviews)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(559, "div", 30)(560, "h5", 31);
      \u0275\u0275text(561, "$130");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(562, "a", 32);
      \u0275\u0275text(563, "View Course");
      \u0275\u0275element(564, "i", 33);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(565, "div", 51)(566, "div", 52)(567, "p", 53);
      \u0275\u0275text(568, "Page 1 of 2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(569, "div", 54)(570, "ul", 55)(571, "li", 56)(572, "a", 57);
      \u0275\u0275element(573, "i", 58);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(574, "li", 59)(575, "a", 60);
      \u0275\u0275text(576, "1");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(577, "li", 61)(578, "a", 60);
      \u0275\u0275text(579, "2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(580, "li", 61)(581, "a", 60);
      \u0275\u0275text(582, "3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(583, "li", 62)(584, "a", 60);
      \u0275\u0275element(585, "i", 63);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(20);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(108, _c0, ctx.isSelected[1]));
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(110, _c0, ctx.isSelected[2]));
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(112, _c0, ctx.isSelected[3]));
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(114, _c0, ctx.isSelected[4]));
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(116, _c0, ctx.isSelected[5]));
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(118, _c0, ctx.isSelected[6]));
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(120, _c0, ctx.isSelected[7]));
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(122, _c0, ctx.isSelected[8]));
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(124, _c0, ctx.isSelected[9]));
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(126, _c0, ctx.isSelected[10]));
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(128, _c0, ctx.isSelected[11]));
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(130, _c0, ctx.isSelected[12]));
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(132, _c0, ctx.isSelected[13]));
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(134, _c0, ctx.isSelected[14]));
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(136, _c0, ctx.isSelected[15]));
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(138, _c0, ctx.isSelected[16]));
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(140, _c0, ctx.isSelected[17]));
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(142, _c0, ctx.isSelected[18]));
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
    }
  }, dependencies: [CommonModule, NgClass, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentCoursesComponent, [{
    type: Component,
    args: [{ selector: "app-student-courses", imports: [CommonModule, RouterLink], template: `
    <div class="page-title d-flex flex-wrap gap-3 align-items-center justify-content-between">
        <h5>Enrolled Courses</h5>
        <div class="tab-list">
            <ul class="nav mb-0 gap-2" role="tablist">
                <li class="nav-item mb-0" role="presentation">
                    <a href="javascript:void(0);" class="active" data-bs-toggle="tab" data-bs-target="#enroll-courses" aria-selected="true" role="tab">Enrolled (09)</a>
                </li>
                <li class="nav-item mb-0" role="presentation">
                    <a href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#active-courses" aria-selected="false" role="tab" class="" tabindex="-1">Active (06)</a>
                </li>
                <li class="nav-item mb-0" role="presentation">
                    <a href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#complete-courses" aria-selected="false" role="tab" class="" tabindex="-1">Completed (03)</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="tab-content">
        <div class="tab-pane fade active show" id="enroll-courses" role="tabpanel">
            <div class="row">
                <div class="col-xl-4 col-md-6">
                    <div class="course-item-two course-item mx-0">
                        <div class="course-img">
                            <a [routerLink]="routes.courseDetails">
                                <img src="assets/img/course/course-01.jpg" alt="img" class="img-fluid">  
                            </a>
                            <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                                <div class="badge text-bg-danger">15% off</div>
                                <a href="javascript:void(0);" class="fav-icon ms-auto" [ngClass]="{'selected':isSelected[1]}" (click)="iconSelect(1)"><i class="isax isax-heart"></i></a>
                            </div>
                        </div>
                        <div class="course-content">
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <a [routerLink]="routes.instructorDetails" class="avatar avatar-sm">
                                        <img src="assets/img/user/user-29.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">
                                    </a>
                                    <div class="ms-2">
                                        <a [routerLink]="routes.instructorDetails" class="link-default fs-14">Brenda Slaton</a>
                                    </div>
                                </div>
                                <span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                                    Design
                                </span>
                            </div>
                            <h6 class="title mb-2"><a [routerLink]="routes.courseDetails">Information About UI/UX Design Degree</a></h6>
                            <p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.9 (200 Reviews)</p>
                            <div class="d-flex align-items-center justify-content-between">
                                <h5 class="text-secondary mb-0">$120</h5>
                                <a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="isax isax-arrow-right-3 ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div class="course-item-two course-item mx-0">
                        <div class="course-img">
                            <a [routerLink]="routes.courseDetails">
                                <img src="assets/img/course/course-02.jpg" alt="img" class="img-fluid">  
                            </a>
                            <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                                <a href="javascript:void(0);" class="fav-icon ms-auto" [ngClass]="{'selected':isSelected[2]}" (click)="iconSelect(2)"><i class="isax isax-heart"></i></a>
                            </div>
                        </div>
                        <div class="course-content">
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <a [routerLink]="routes.instructorDetails" class="avatar avatar-sm">
                                        <img src="assets/img/user/user-30.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">
                                    </a>
                                    <div class="ms-2">
                                        <a [routerLink]="routes.instructorDetails" class="link-default fs-14">Ana Reyes</a>
                                    </div>
                                </div>
                                <span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                                    Wordpress
                                </span>
                            </div>
                            <h6 class="title mb-2"><a [routerLink]="routes.courseDetails">Wordpress for Beginners - Master Wordpress Quickly</a></h6>
                            <p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.4 (160 Reviews)</p>
                            <div class="d-flex align-items-center justify-content-between">
                                <h5 class="text-secondary mb-0">$140</h5>
                                <a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="isax isax-arrow-right-3 ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div class="course-item-two course-item mx-0">
                        <div class="course-img">
                            <a [routerLink]="routes.courseDetails">
                                <img src="assets/img/course/course-03.jpg" alt="img" class="img-fluid">  
                            </a>
                            <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                                <a href="javascript:void(0);" class="fav-icon ms-auto" [ngClass]="{'selected':isSelected[3]}" (click)="iconSelect(3)"><i class="isax isax-heart"></i></a>
                            </div>
                        </div>
                        <div class="course-content">
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <a [routerLink]="routes.instructorDetails" class="avatar avatar-sm">
                                        <img src="assets/img/user/user-31.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">
                                    </a>
                                    <div class="ms-2">
                                        <a [routerLink]="routes.instructorDetails" class="link-default fs-14">Andrew Pirtle</a>
                                    </div>
                                </div>
                                <span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                                    Design
                                </span>
                            </div>
                            <h6 class="title mb-2"><a [routerLink]="routes.courseDetails">Sketch from A to Z (2024): Become an app designer</a></h6>
                            <p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.4 (160 Reviews)</p>
                            <div class="d-flex align-items-center justify-content-between">
                                <h5 class="text-secondary mb-0">$140</h5>
                                <a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="isax isax-arrow-right-3 ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div class="course-item-two course-item mx-0">
                        <div class="course-img">
                            <a [routerLink]="routes.courseDetails">
                                <img src="assets/img/course/course-04.jpg" alt="img" class="img-fluid">  
                            </a>
                            <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                                <a href="javascript:void(0);" class="fav-icon ms-auto" [ngClass]="{'selected':isSelected[4]}" (click)="iconSelect(4)"><i class="isax isax-heart"></i></a>
                            </div>
                        </div>
                        <div class="course-content">
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <a [routerLink]="routes.instructorDetails" class="avatar avatar-sm">
                                        <img src="assets/img/user/user-32.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">
                                    </a>
                                    <div class="ms-2">
                                        <a [routerLink]="routes.instructorDetails" class="link-default fs-14">Christy Garner</a>
                                    </div>
                                </div>
                                <span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                                    Programming
                                </span>
                            </div>
                            <h6 class="title mb-2"><a [routerLink]="routes.courseDetails">Build Responsive Real World Websites with Crash Course</a></h6>
                            <p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.2 (220 Reviews)</p>
                            <div class="d-flex align-items-center justify-content-between">
                                <h5 class="text-secondary mb-0">$200</h5>
                                <a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="isax isax-arrow-right-3 ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div class="course-item-two course-item mx-0">
                        <div class="course-img">
                            <a [routerLink]="routes.courseDetails">
                                <img src="assets/img/course/course-05.jpg" alt="img" class="img-fluid">  
                            </a>
                            <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                                <a href="javascript:void(0);" class="fav-icon ms-auto" [ngClass]="{'selected':isSelected[5]}" (click)="iconSelect(5)"><i class="isax isax-heart"></i></a>
                            </div>
                        </div>
                        <div class="course-content">
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <a [routerLink]="routes.instructorDetails" class="avatar avatar-sm">
                                        <img src="assets/img/user/user-32.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">
                                    </a>
                                    <div class="ms-2">
                                        <a [routerLink]="routes.instructorDetails" class="link-default fs-14">Justin Gregory</a>
                                    </div>
                                </div>
                                <span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                                    Programming
                                </span>
                            </div>
                            <h6 class="title mb-2"><a [routerLink]="routes.courseDetails">Learn JavaScript and Express to become a Expert</a></h6>
                            <p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.4 (180 Reviews)</p>
                            <div class="d-flex align-items-center justify-content-between">
                                <h5 class="text-secondary mb-0">$130</h5>
                                <a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="isax isax-arrow-right-3 ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div class="course-item-two course-item mx-0">
                        <div class="course-img">
                            <a [routerLink]="routes.courseDetails">
                                <img src="assets/img/course/course-06.jpg" alt="img" class="img-fluid">  
                            </a>
                            <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                                <a href="javascript:void(0);" class="fav-icon ms-auto" [ngClass]="{'selected':isSelected[6]}" (click)="iconSelect(6)"><i class="isax isax-heart"></i></a>
                            </div>
                        </div>
                        <div class="course-content">
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <a [routerLink]="routes.instructorDetails" class="avatar avatar-sm">
                                        <img src="assets/img/user/user-33.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">
                                    </a>
                                    <div class="ms-2">
                                        <a [routerLink]="routes.instructorDetails" class="link-default fs-14">Carolyn Hines</a>
                                    </div>
                                </div>
                                <span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                                    Programming
                                </span>
                            </div>
                            <h6 class="title mb-2"><a [routerLink]="routes.courseDetails">Introduction to Python Programming</a></h6>
                            <p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.4 (180 Reviews)</p>
                            <div class="d-flex align-items-center justify-content-between">
                                <h5 class="text-secondary mb-0">$130</h5>
                                <a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="isax isax-arrow-right-3 ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div class="course-item-two course-item mx-0">
                        <div class="course-img">
                            <a [routerLink]="routes.courseDetails">
                                <img src="assets/img/course/course-07.jpg" alt="img" class="img-fluid">  
                            </a>
                            <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                                <a href="javascript:void(0);" class="fav-icon ms-auto" [ngClass]="{'selected':isSelected[7]}" (click)="iconSelect(7)"><i class="isax isax-heart"></i></a>
                            </div>
                        </div>
                        <div class="course-content">
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <a [routerLink]="routes.instructorDetails" class="avatar avatar-sm">
                                        <img src="assets/img/user/user-34.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">
                                    </a>
                                    <div class="ms-2">
                                        <a [routerLink]="routes.instructorDetails" class="link-default fs-14">Rafael Miller</a>
                                    </div>
                                </div>
                                <span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                                    Programming
                                </span>
                            </div>
                            <h6 class="title mb-2"><a [routerLink]="routes.courseDetails">Build Responsive Websites with HTML5 and CSS3</a></h6>
                            <p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.4 (180 Reviews)</p>
                            <div class="d-flex align-items-center justify-content-between">
                                <h5 class="text-secondary mb-0">$170</h5>
                                <a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="isax isax-arrow-right-3 ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div class="course-item-two course-item mx-0">
                        <div class="course-img">
                            <a [routerLink]="routes.courseDetails">
                                <img src="assets/img/course/course-08.jpg" alt="img" class="img-fluid">  
                            </a>
                            <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                                <a href="javascript:void(0);" class="fav-icon ms-auto" [ngClass]="{'selected':isSelected[8]}" (click)="iconSelect(8)"><i class="isax isax-heart"></i></a>
                            </div>
                        </div>
                        <div class="course-content">
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <a [routerLink]="routes.instructorDetails" class="avatar avatar-sm">
                                        <img src="assets/img/user/user-35.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">
                                    </a>
                                    <div class="ms-2">
                                        <a [routerLink]="routes.instructorDetails" class="link-default fs-14">Nancy Duarte</a>
                                    </div>
                                </div>
                                <span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                                    Design
                                </span>
                            </div>
                            <h6 class="title mb-2"><a [routerLink]="routes.courseDetails">Information About Photoshop Design Degree</a></h6>
                            <p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.4 (180 Reviews)</p>
                            <div class="d-flex align-items-center justify-content-between">
                                <h5 class="text-secondary mb-0">$170</h5>
                                <a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="isax isax-arrow-right-3 ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div class="course-item-two course-item mx-0">
                        <div class="course-img">
                            <a [routerLink]="routes.courseDetails">
                                <img src="assets/img/course/course-09.jpg" alt="img" class="img-fluid">  
                            </a>
                            <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                                <a href="javascript:void(0);" class="fav-icon ms-auto" [ngClass]="{'selected':isSelected[9]}" (click)="iconSelect(9)"><i class="isax isax-heart"></i></a>
                            </div>
                        </div>
                        <div class="course-content">
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <a [routerLink]="routes.instructorDetails" class="avatar avatar-sm">
                                        <img src="assets/img/user/user-36.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">
                                    </a>
                                    <div class="ms-2">
                                        <a [routerLink]="routes.instructorDetails" class="link-default fs-14">James Kagan</a>
                                    </div>
                                </div>
                                <span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                                    Design
                                </span>
                            </div>
                            <h6 class="title mb-2"><a [routerLink]="routes.courseDetails">C# Developers Double Your Coding with Visual Studio</a></h6>
                            <p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.4 (180 Reviews)</p>
                            <div class="d-flex align-items-center justify-content-between">
                                <h5 class="text-secondary mb-0">$180</h5>
                                <a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="isax isax-arrow-right-3 ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-pane fade" id="active-courses" role="tabpanel">
            <div class="row">								
                <div class="col-xl-4 col-md-6">
                    <div class="course-item-two course-item mx-0">
                        <div class="course-img">
                            <a [routerLink]="routes.courseDetails">
                                <img src="assets/img/course/course-01.jpg" alt="img" class="img-fluid">  
                            </a>
                            <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                                <div class="badge text-bg-danger">15% off</div>
                                <a href="javascript:void(0);" class="fav-icon ms-auto" [ngClass]="{'selected':isSelected[10]}" (click)="iconSelect(10)"><i class="isax isax-heart"></i></a>
                            </div>
                        </div>
                        <div class="course-content">
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <a [routerLink]="routes.instructorDetails" class="avatar avatar-sm">
                                        <img src="assets/img/user/user-29.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">
                                    </a>
                                    <div class="ms-2">
                                        <a [routerLink]="routes.instructorDetails" class="link-default fs-14">Brenda Slaton</a>
                                    </div>
                                </div>
                                <span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                                    Design
                                </span>
                            </div>
                            <h6 class="title mb-2"><a [routerLink]="routes.courseDetails">Information About UI/UX Design Degree</a></h6>
                            <p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.9 (200 Reviews)</p>
                            <div class="d-flex align-items-center justify-content-between">
                                <h5 class="text-secondary mb-0">$120</h5>
                                <a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="isax isax-arrow-right-3 ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div class="course-item-two course-item mx-0">
                        <div class="course-img">
                            <a [routerLink]="routes.courseDetails">
                                <img src="assets/img/course/course-02.jpg" alt="img" class="img-fluid">  
                            </a>
                            <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                                <a href="javascript:void(0);" class="fav-icon ms-auto" [ngClass]="{'selected':isSelected[11]}" (click)="iconSelect(11)"><i class="isax isax-heart"></i></a>
                            </div>
                        </div>
                        <div class="course-content">
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <a [routerLink]="routes.instructorDetails" class="avatar avatar-sm">
                                        <img src="assets/img/user/user-30.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">
                                    </a>
                                    <div class="ms-2">
                                        <a [routerLink]="routes.instructorDetails" class="link-default fs-14">Ana Reyes</a>
                                    </div>
                                </div>
                                <span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                                    Wordpress
                                </span>
                            </div>
                            <h6 class="title mb-2"><a [routerLink]="routes.courseDetails">Wordpress for Beginners - Master Wordpress Quickly</a></h6>
                            <p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.4 (160 Reviews)</p>
                            <div class="d-flex align-items-center justify-content-between">
                                <h5 class="text-secondary mb-0">$140</h5>
                                <a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="isax isax-arrow-right-3 ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div class="course-item-two course-item mx-0">
                        <div class="course-img">
                            <a [routerLink]="routes.courseDetails">
                                <img src="assets/img/course/course-03.jpg" alt="img" class="img-fluid">  
                            </a>
                            <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                                <a href="javascript:void(0);" class="fav-icon ms-auto" [ngClass]="{'selected':isSelected[12]}" (click)="iconSelect(12)"><i class="isax isax-heart"></i></a>
                            </div>
                        </div>
                        <div class="course-content">
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <a [routerLink]="routes.instructorDetails" class="avatar avatar-sm">
                                        <img src="assets/img/user/user-31.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">
                                    </a>
                                    <div class="ms-2">
                                        <a [routerLink]="routes.instructorDetails" class="link-default fs-14">Andrew Pirtle</a>
                                    </div>
                                </div>
                                <span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                                    Design
                                </span>
                            </div>
                            <h6 class="title mb-2"><a [routerLink]="routes.courseDetails">Sketch from A to Z (2024): Become an app designer</a></h6>
                            <p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.4 (160 Reviews)</p>
                            <div class="d-flex align-items-center justify-content-between">
                                <h5 class="text-secondary mb-0">$140</h5>
                                <a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="isax isax-arrow-right-3 ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div class="course-item-two course-item mx-0">
                        <div class="course-img">
                            <a [routerLink]="routes.courseDetails">
                                <img src="assets/img/course/course-04.jpg" alt="img" class="img-fluid">  
                            </a>
                            <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                                <a href="javascript:void(0);" class="fav-icon ms-auto" [ngClass]="{'selected':isSelected[13]}" (click)="iconSelect(13)"><i class="isax isax-heart"></i></a>
                            </div>
                        </div>
                        <div class="course-content">
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <a [routerLink]="routes.instructorDetails" class="avatar avatar-sm">
                                        <img src="assets/img/user/user-32.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">
                                    </a>
                                    <div class="ms-2">
                                        <a [routerLink]="routes.instructorDetails" class="link-default fs-14">Christy Garner</a>
                                    </div>
                                </div>
                                <span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                                    Programming
                                </span>
                            </div>
                            <h6 class="title mb-2"><a [routerLink]="routes.courseDetails">Build Responsive Real World Websites with Crash Course</a></h6>
                            <p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.2 (220 Reviews)</p>
                            <div class="d-flex align-items-center justify-content-between">
                                <h5 class="text-secondary mb-0">$200</h5>
                                <a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="isax isax-arrow-right-3 ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div class="course-item-two course-item mx-0">
                        <div class="course-img">
                            <a [routerLink]="routes.courseDetails">
                                <img src="assets/img/course/course-05.jpg" alt="img" class="img-fluid">  
                            </a>
                            <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                                <a href="javascript:void(0);" class="fav-icon ms-auto" [ngClass]="{'selected':isSelected[14]}" (click)="iconSelect(14)"><i class="isax isax-heart"></i></a>
                            </div>
                        </div>
                        <div class="course-content">
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <a [routerLink]="routes.instructorDetails" class="avatar avatar-sm">
                                        <img src="assets/img/user/user-32.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">
                                    </a>
                                    <div class="ms-2">
                                        <a [routerLink]="routes.instructorDetails" class="link-default fs-14">Justin Gregory</a>
                                    </div>
                                </div>
                                <span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                                    Programming
                                </span>
                            </div>
                            <h6 class="title mb-2"><a [routerLink]="routes.courseDetails">Learn JavaScript and Express to become a Expert</a></h6>
                            <p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.4 (180 Reviews)</p>
                            <div class="d-flex align-items-center justify-content-between">
                                <h5 class="text-secondary mb-0">$130</h5>
                                <a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="isax isax-arrow-right-3 ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div class="course-item-two course-item mx-0">
                        <div class="course-img">
                            <a [routerLink]="routes.courseDetails">
                                <img src="assets/img/course/course-06.jpg" alt="img" class="img-fluid">  
                            </a>
                            <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                                <a href="javascript:void(0);" class="fav-icon ms-auto" [ngClass]="{'selected':isSelected[15]}" (click)="iconSelect(15)"><i class="isax isax-heart"></i></a>
                            </div>
                        </div>
                        <div class="course-content">
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <a [routerLink]="routes.instructorDetails" class="avatar avatar-sm">
                                        <img src="assets/img/user/user-33.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">
                                    </a>
                                    <div class="ms-2">
                                        <a [routerLink]="routes.instructorDetails" class="link-default fs-14">Carolyn Hines</a>
                                    </div>
                                </div>
                                <span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                                    Programming
                                </span>
                            </div>
                            <h6 class="title mb-2"><a [routerLink]="routes.courseDetails">Introduction to Python Programming</a></h6>
                            <p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.4 (180 Reviews)</p>
                            <div class="d-flex align-items-center justify-content-between">
                                <h5 class="text-secondary mb-0">$130</h5>
                                <a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="isax isax-arrow-right-3 ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-pane fade" id="complete-courses" role="tabpanel">
            <div class="row">								
                <div class="col-xl-4 col-md-6">
                    <div class="course-item-two course-item mx-0">
                        <div class="course-img">
                            <a [routerLink]="routes.courseDetails">
                                <img src="assets/img/course/course-04.jpg" alt="img" class="img-fluid">  
                            </a>
                            <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                                <a href="javascript:void(0);" class="fav-icon ms-auto" [ngClass]="{'selected':isSelected[16]}" (click)="iconSelect(16)"><i class="isax isax-heart"></i></a>
                            </div>
                        </div>
                        <div class="course-content">
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <a [routerLink]="routes.instructorDetails" class="avatar avatar-sm">
                                        <img src="assets/img/user/user-32.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">
                                    </a>
                                    <div class="ms-2">
                                        <a [routerLink]="routes.instructorDetails" class="link-default fs-14">Christy Garner</a>
                                    </div>
                                </div>
                                <span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                                    Programming
                                </span>
                            </div>
                            <h6 class="title mb-2"><a [routerLink]="routes.courseDetails">Build Responsive Real World Websites with Crash Course</a></h6>
                            <p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.2 (220 Reviews)</p>
                            <div class="d-flex align-items-center justify-content-between">
                                <h5 class="text-secondary mb-0">$200</h5>
                                <a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="isax isax-arrow-right-3 ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div class="course-item-two course-item mx-0">
                        <div class="course-img">
                            <a [routerLink]="routes.courseDetails">
                                <img src="assets/img/course/course-05.jpg" alt="img" class="img-fluid">  
                            </a>
                            <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                                <a href="javascript:void(0);" class="fav-icon ms-auto" [ngClass]="{'selected':isSelected[17]}" (click)="iconSelect(17)"><i class="isax isax-heart"></i></a>
                            </div>
                        </div>
                        <div class="course-content">
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <a [routerLink]="routes.instructorDetails" class="avatar avatar-sm">
                                        <img src="assets/img/user/user-32.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">
                                    </a>
                                    <div class="ms-2">
                                        <a [routerLink]="routes.instructorDetails" class="link-default fs-14">Justin Gregory</a>
                                    </div>
                                </div>
                                <span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                                    Programming
                                </span>
                            </div>
                            <h6 class="title mb-2"><a [routerLink]="routes.courseDetails">Learn JavaScript and Express to become a Expert</a></h6>
                            <p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.4 (180 Reviews)</p>
                            <div class="d-flex align-items-center justify-content-between">
                                <h5 class="text-secondary mb-0">$130</h5>
                                <a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="isax isax-arrow-right-3 ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6">
                    <div class="course-item-two course-item mx-0">
                        <div class="course-img">
                            <a [routerLink]="routes.courseDetails">
                                <img src="assets/img/course/course-06.jpg" alt="img" class="img-fluid">  
                            </a>
                            <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                                <a href="javascript:void(0);" class="fav-icon ms-auto" [ngClass]="{'selected':isSelected[18]}" (click)="iconSelect(18)"><i class="isax isax-heart"></i></a>
                            </div>
                        </div>
                        <div class="course-content">
                            <div class="d-flex justify-content-between mb-2">
                                <div class="d-flex align-items-center">
                                    <a [routerLink]="routes.instructorDetails" class="avatar avatar-sm">
                                        <img src="assets/img/user/user-33.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">
                                    </a>
                                    <div class="ms-2">
                                        <a [routerLink]="routes.instructorDetails" class="link-default fs-14">Carolyn Hines</a>
                                    </div>
                                </div>
                                <span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                                    Programming
                                </span>
                            </div>
                            <h6 class="title mb-2"><a [routerLink]="routes.courseDetails">Introduction to Python Programming</a></h6>
                            <p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.4 (180 Reviews)</p>
                            <div class="d-flex align-items-center justify-content-between">
                                <h5 class="text-secondary mb-0">$130</h5>
                                <a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="isax isax-arrow-right-3 ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /pagination -->
    <div class="row align-items-center mt-2">
        <div class="col-md-2">
          <p class="pagination-text">Page 1 of 2</p>
        </div>
        <div class="col-md-10">
            <ul class="pagination lms-page justify-content-center justify-content-md-end mt-2 mt-md-0">
                <li class="page-item prev">
                    <a class="page-link" href="javascript:void(0)" tabindex="-1"><i class="fas fa-angle-left"></i></a>
                </li>
                <li class="page-item first-page active">
                    <a class="page-link" href="javascript:void(0)">1</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="javascript:void(0)">2</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="javascript:void(0)">3</a>
                </li>
                <li class="page-item next">
                    <a class="page-link" href="javascript:void(0)"><i class="fas fa-angle-right"></i></a>
                </li>
            </ul>
        </div>
    </div>
    <!-- /pagination -->` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentCoursesComponent, { className: "StudentCoursesComponent", filePath: "src/app/features/student/student-courses/student-courses.component.ts", lineNumber: 12 });
})();
export {
  StudentCoursesComponent
};
//# sourceMappingURL=chunk-VSTMK4OQ.js.map
