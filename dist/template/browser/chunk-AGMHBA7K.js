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
  NgIf,
  NgStyle
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/student/student-qa/student-qa.component.ts
var _c0 = (a0) => ({ "display": a0 });
var _c1 = () => ({ "transform": "rotate(118deg)" });
var _c2 = () => ({ "transform": "rotate(180deg)" });
function StudentQaComponent_fieldset_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "fieldset", 89)(1, "div", 3)(2, "h5");
    \u0275\u0275text(3, "My Quiz Attempts");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "div", 12);
    \u0275\u0275element(13, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "h5", 14);
    \u0275\u0275text(15, "Information About UI/UX Design Degree");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 15)(17, "div", 16)(18, "p", 17);
    \u0275\u0275element(19, "i", 18);
    \u0275\u0275text(20, " 00:02:21 ");
    \u0275\u0275elementStart(21, "span", 19);
    \u0275\u0275text(22, " / 00:03:00");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(23, "div", 20)(24, "div", 21)(25, "span", 22);
    \u0275\u0275text(26, "Quiz Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, "Question 1 out of 5");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 23);
    \u0275\u0275element(30, "div", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 25)(32, "h6", 20);
    \u0275\u0275text(33, "What does UI stand for?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 26);
    \u0275\u0275element(35, "input", 91);
    \u0275\u0275elementStart(36, "label", 92);
    \u0275\u0275text(37, " User Intention ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 26);
    \u0275\u0275element(39, "input", 93);
    \u0275\u0275elementStart(40, "label", 94);
    \u0275\u0275text(41, " User Interface ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 26);
    \u0275\u0275element(43, "input", 95);
    \u0275\u0275elementStart(44, "label", 96);
    \u0275\u0275text(45, " Universal Interaction ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 33);
    \u0275\u0275element(47, "input", 97);
    \u0275\u0275elementStart(48, "label", 98);
    \u0275\u0275text(49, " Usability Information ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(50, "div", 99)(51, "button", 39);
    \u0275\u0275listener("click", function StudentQaComponent_fieldset_1_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.next());
    });
    \u0275\u0275text(52, "Next");
    \u0275\u0275element(53, "i", 40);
    \u0275\u0275elementEnd()()()()();
  }
}
var StudentQaComponent = class _StudentQaComponent {
  routes = routes;
  current = 1;
  next() {
    if (this.current < 6) {
      this.current += 1;
    }
  }
  previous() {
    if (this.current > 1) {
      this.current -= 1;
    }
  }
  static \u0275fac = function StudentQaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentQaComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentQaComponent, selectors: [["app-student-qa"]], decls: 279, vars: 25, consts: [[1, "quiz-wizard"], ["id", "first-field", 4, "ngIf"], [3, "ngStyle"], [1, "page-title", "d-flex", "align-items-center", "justify-content-between"], [1, "quiz-attempt-card", "border-0"], [1, "quiz-attempt-body", "p-0"], [1, "border", "p-3", "mb-3", "rounded-2"], [1, "bg-light", "border", "p-3", "mb-3", "rounded-2", "flex-wrap"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "mb-2", "mb-md-0"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-lg", "me-3", "flex-shrink-0"], ["src", "assets/img/students/quiz.jpg", "alt", "", 1, "img-fluid", "rounded-3"], [1, "fs-18"], [1, "col-md-4"], [1, "text-md-end"], [1, "d-inline-flex", "align-items-center", "mb-0"], [1, "isax", "isax-clock", "me-1"], [1, "text-dark", "ms-1"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-1"], [1, "fw-semibold", "text-gray-9"], [1, "progress", "progress-xs", "flex-grow-1", "mb-1"], ["role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", "rounded", 2, "width", "40%"], [1, "mb-0"], [1, "form-check", "mb-2"], ["type", "radio", "name", "qusetion-2", "id", "Radio-sm-5", 1, "form-check-input"], ["for", "Radio-sm-5", 1, "form-check-label"], ["type", "radio", "name", "qusetion-2", "id", "Radio-sm-6", 1, "form-check-input"], ["for", "Radio-sm-6", 1, "form-check-label"], ["type", "radio", "name", "qusetion-2", "id", "Radio-sm-7", 1, "form-check-input"], ["for", "Radio-sm-7", 1, "form-check-label"], [1, "form-check", "mb-0"], ["type", "radio", "name", "qusetion-2", "id", "Radio-sm-8", 1, "form-check-input"], ["for", "Radio-sm-8", 1, "form-check-label"], [1, "d-flex", "align-items-center", "justify-content-between"], ["href", "javascript:void(0);", 1, "btn", "bg-gray-100", "d-inline-flex", "rounded-pill", "align-items-center", "prev_btn", "me-1", 3, "click"], [1, "isax", "isax-arrow-left-2", "me-1", "fs-10"], ["type", "button", 1, "btn", "btn-secondary", "rounded-pill", "next_btn", 3, "click"], [1, "isax", "isax-arrow-right-3", "ms-1", "fs-10"], ["role", "progressbar", "aria-valuenow", "60", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", "rounded", 2, "width", "60%"], ["type", "radio", "name", "qusetion-3", "id", "Radio-sm-9", 1, "form-check-input"], ["for", "Radio-sm-9", 1, "form-check-label"], ["type", "radio", "name", "qusetion-3", "id", "Radio-sm-10", 1, "form-check-input"], ["for", "Radio-sm-10", 1, "form-check-label"], ["type", "radio", "name", "qusetion-3", "id", "Radio-sm-11", 1, "form-check-input"], ["for", "Radio-sm-11", 1, "form-check-label"], ["type", "radio", "name", "qusetion-3", "id", "Radio-sm-12", 1, "form-check-input"], ["for", "Radio-sm-12", 1, "form-check-label"], [1, "fw-bold", "text-gray-9"], ["role", "progressbar", "aria-valuenow", "80", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", "rounded", 2, "width", "80%"], ["type", "radio", "name", "qusetion-4", "id", "Radio-sm-13", 1, "form-check-input"], ["for", "Radio-sm-13", 1, "form-check-label"], ["type", "radio", "name", "qusetion-4", "id", "Radio-sm-14", 1, "form-check-input"], ["for", "Radio-sm-14", 1, "form-check-label"], ["type", "radio", "name", "qusetion-4", "id", "Radio-sm-15", 1, "form-check-input"], ["for", "Radio-sm-15", 1, "form-check-label"], ["type", "radio", "name", "qusetion-4", "id", "Radio-sm-16", 1, "form-check-input"], ["for", "Radio-sm-16", 1, "form-check-label"], ["href", "javascript:void(0);", 1, "btn", "btn-light", "d-inline-flex", "rounded-pill", "align-items-center", "prev_btn", "me-1", 3, "click"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", "rounded", 2, "width", "100%"], ["type", "radio", "name", "qusetion-4", "id", "Radio-sm-17", 1, "form-check-input"], ["for", "Radio-sm-17", 1, "form-check-label"], ["type", "radio", "name", "qusetion-4", "id", "Radio-sm-18", 1, "form-check-input"], ["for", "Radio-sm-18", 1, "form-check-label"], ["type", "radio", "name", "qusetion-4", "id", "Radio-sm-19", 1, "form-check-input"], ["for", "Radio-sm-19", 1, "form-check-label"], ["type", "radio", "name", "qusetion-4", "id", "Radio-sm-20", 1, "form-check-input"], ["for", "Radio-sm-20", 1, "form-check-label"], [1, "card"], [1, "card-body"], [1, "quiz-circle-progress", "m-0", "mb-3"], ["data-value", "80", 1, "circle-progress", "mb-2"], [1, "progress-left"], [1, "progress-bar", "border-success", 3, "ngStyle"], [1, "progress-right"], [1, "progress-value", "text-success", "fw-bold", "fs-24"], [1, "text-center", "fs-14"], [1, "text-center", "mb-3"], [1, "mb-1"], [1, "fs-14"], [1, "d-flex", "align-items-center", "justify-content-center"], [1, "btn", "btn-secondary", "rounded-pill", 3, "routerLink"], [1, "quiz-attempt-card"], [1, "quiz-attempt-body"], ["data-value", "20", 1, "circle-progress", "mb-2"], [1, "progress-bar", "border-danger"], [1, "progress-value", "text-danger", "fw-bold", "fs-24"], ["id", "first-field"], ["role", "progressbar", "aria-valuenow", "20", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", "rounded", 2, "width", "20%"], ["type", "radio", "name", "qusetion-1", "id", "Radio-sm-1", 1, "form-check-input"], ["for", "Radio-sm-1", 1, "form-check-label"], ["type", "radio", "name", "qusetion-1", "id", "Radio-sm-2", 1, "form-check-input"], ["for", "Radio-sm-2", 1, "form-check-label"], ["type", "radio", "name", "qusetion-1", "id", "Radio-sm-3", 1, "form-check-input"], ["for", "Radio-sm-3", 1, "form-check-label"], ["type", "radio", "name", "qusetion-1", "id", "Radio-sm-4", 1, "form-check-input"], ["for", "Radio-sm-4", 1, "form-check-label"], [1, "text-end"]], template: function StudentQaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, StudentQaComponent_fieldset_1_Template, 54, 0, "fieldset", 1);
      \u0275\u0275elementStart(2, "fieldset", 2)(3, "div", 3)(4, "h5");
      \u0275\u0275text(5, "My Quiz Attempts");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "div", 12);
      \u0275\u0275element(15, "img", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "h5", 14);
      \u0275\u0275text(17, "Information About UI/UX Design Degree");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(18, "div", 15)(19, "div", 16)(20, "p", 17);
      \u0275\u0275element(21, "i", 18);
      \u0275\u0275text(22, " 00:02:21 ");
      \u0275\u0275elementStart(23, "span", 19);
      \u0275\u0275text(24, " / 00:03:00");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(25, "div", 20)(26, "div", 21)(27, "span", 22);
      \u0275\u0275text(28, "Quiz Progress");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span");
      \u0275\u0275text(30, "Question 2 out of 5");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 23);
      \u0275\u0275element(32, "div", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 25)(34, "h6", 20);
      \u0275\u0275text(35, "Which of the following is a principle of UX design?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 26);
      \u0275\u0275element(37, "input", 27);
      \u0275\u0275elementStart(38, "label", 28);
      \u0275\u0275text(39, " Minimalistic Design ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 26);
      \u0275\u0275element(41, "input", 29);
      \u0275\u0275elementStart(42, "label", 30);
      \u0275\u0275text(43, " User-Centered Design ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 26);
      \u0275\u0275element(45, "input", 31);
      \u0275\u0275elementStart(46, "label", 32);
      \u0275\u0275text(47, " Gradient Usage ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 33);
      \u0275\u0275element(49, "input", 34);
      \u0275\u0275elementStart(50, "label", 35);
      \u0275\u0275text(51, " Typography Hierarchy ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(52, "div", 36)(53, "a", 37);
      \u0275\u0275listener("click", function StudentQaComponent_Template_a_click_53_listener() {
        return ctx.previous();
      });
      \u0275\u0275element(54, "i", 38);
      \u0275\u0275text(55, "Previous");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "button", 39);
      \u0275\u0275listener("click", function StudentQaComponent_Template_button_click_56_listener() {
        return ctx.next();
      });
      \u0275\u0275text(57, "Next");
      \u0275\u0275element(58, "i", 40);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(59, "fieldset", 2)(60, "div", 3)(61, "h5");
      \u0275\u0275text(62, "My Quiz Attempts");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "div", 4)(64, "div", 5)(65, "div", 6)(66, "div", 7)(67, "div", 8)(68, "div", 9)(69, "div", 10)(70, "div", 11)(71, "div", 12);
      \u0275\u0275element(72, "img", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "h5", 14);
      \u0275\u0275text(74, "Information About UI/UX Design Degree");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(75, "div", 15)(76, "div", 16)(77, "p", 17);
      \u0275\u0275element(78, "i", 18);
      \u0275\u0275text(79, " 00:02:21 ");
      \u0275\u0275elementStart(80, "span", 19);
      \u0275\u0275text(81, " / 00:03:00");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(82, "div", 20)(83, "div", 21)(84, "span", 22);
      \u0275\u0275text(85, "Quiz Progress");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "span");
      \u0275\u0275text(87, "Question 3 out of 5");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "div", 23);
      \u0275\u0275element(89, "div", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "div", 25)(91, "h6", 20);
      \u0275\u0275text(92, "Which tool is commonly used for wireframing?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "div", 26);
      \u0275\u0275element(94, "input", 42);
      \u0275\u0275elementStart(95, "label", 43);
      \u0275\u0275text(96, " Adobe Photoshop ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "div", 26);
      \u0275\u0275element(98, "input", 44);
      \u0275\u0275elementStart(99, "label", 45);
      \u0275\u0275text(100, " Figma ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "div", 26);
      \u0275\u0275element(102, "input", 46);
      \u0275\u0275elementStart(103, "label", 47);
      \u0275\u0275text(104, " Visual Studio Code ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "div", 33);
      \u0275\u0275element(106, "input", 48);
      \u0275\u0275elementStart(107, "label", 49);
      \u0275\u0275text(108, " GitHub ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(109, "div", 36)(110, "a", 37);
      \u0275\u0275listener("click", function StudentQaComponent_Template_a_click_110_listener() {
        return ctx.previous();
      });
      \u0275\u0275element(111, "i", 38);
      \u0275\u0275text(112, "Previous");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "button", 39);
      \u0275\u0275listener("click", function StudentQaComponent_Template_button_click_113_listener() {
        return ctx.next();
      });
      \u0275\u0275text(114, "Next");
      \u0275\u0275element(115, "i", 40);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(116, "fieldset", 2)(117, "div", 3)(118, "h5");
      \u0275\u0275text(119, "My Quiz Attempts");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(120, "div", 4)(121, "div", 5)(122, "div", 6)(123, "div", 7)(124, "div", 8)(125, "div", 9)(126, "div", 10)(127, "div", 11)(128, "div", 12);
      \u0275\u0275element(129, "img", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "h5", 14);
      \u0275\u0275text(131, "Information About UI/UX Design Degree");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(132, "div", 15)(133, "div", 16)(134, "p", 17);
      \u0275\u0275element(135, "i", 18);
      \u0275\u0275text(136, " 00:02:21 ");
      \u0275\u0275elementStart(137, "span", 19);
      \u0275\u0275text(138, " / 00:03:00");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(139, "div", 20)(140, "div", 21)(141, "span", 50);
      \u0275\u0275text(142, "Quiz Progress");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "span");
      \u0275\u0275text(144, "Question 4 out of 5");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(145, "div", 23);
      \u0275\u0275element(146, "div", 51);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(147, "div", 25)(148, "h6", 20);
      \u0275\u0275text(149, "What is a wireframe?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "div", 26);
      \u0275\u0275element(151, "input", 52);
      \u0275\u0275elementStart(152, "label", 53);
      \u0275\u0275text(153, " A detailed, interactive prototype ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(154, "div", 26);
      \u0275\u0275element(155, "input", 54);
      \u0275\u0275elementStart(156, "label", 55);
      \u0275\u0275text(157, " A low-fidelity representation of a design ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(158, "div", 26);
      \u0275\u0275element(159, "input", 56);
      \u0275\u0275elementStart(160, "label", 57);
      \u0275\u0275text(161, " The codebase of a website ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(162, "div", 33);
      \u0275\u0275element(163, "input", 58);
      \u0275\u0275elementStart(164, "label", 59);
      \u0275\u0275text(165, " A high-fidelity design concept ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(166, "div", 36)(167, "a", 60);
      \u0275\u0275listener("click", function StudentQaComponent_Template_a_click_167_listener() {
        return ctx.previous();
      });
      \u0275\u0275element(168, "i", 38);
      \u0275\u0275text(169, "Back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "button", 39);
      \u0275\u0275listener("click", function StudentQaComponent_Template_button_click_170_listener() {
        return ctx.next();
      });
      \u0275\u0275text(171, "Next");
      \u0275\u0275element(172, "i", 40);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(173, "fieldset", 2)(174, "div", 3)(175, "h5");
      \u0275\u0275text(176, "My Quiz Attempts");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(177, "div", 4)(178, "div", 5)(179, "div", 6)(180, "div", 7)(181, "div", 8)(182, "div", 9)(183, "div", 10)(184, "div", 11)(185, "div", 12);
      \u0275\u0275element(186, "img", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "h5", 14);
      \u0275\u0275text(188, "Information About UI/UX Design Degree");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(189, "div", 15)(190, "div", 16)(191, "p", 17);
      \u0275\u0275element(192, "i", 18);
      \u0275\u0275text(193, " 00:02:21 ");
      \u0275\u0275elementStart(194, "span", 19);
      \u0275\u0275text(195, " / 00:03:00");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(196, "div", 20)(197, "div", 21)(198, "span", 50);
      \u0275\u0275text(199, "Quiz Progress");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "span");
      \u0275\u0275text(201, "Question 5 out of 5");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(202, "div", 23);
      \u0275\u0275element(203, "div", 61);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(204, "div", 25)(205, "h6", 20);
      \u0275\u0275text(206, "What is the primary goal of UX design?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(207, "div", 26);
      \u0275\u0275element(208, "input", 62);
      \u0275\u0275elementStart(209, "label", 63);
      \u0275\u0275text(210, " To create a visually appealing design ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(211, "div", 26);
      \u0275\u0275element(212, "input", 64);
      \u0275\u0275elementStart(213, "label", 65);
      \u0275\u0275text(214, " To enhance user satisfaction and usability ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(215, "div", 26);
      \u0275\u0275element(216, "input", 66);
      \u0275\u0275elementStart(217, "label", 67);
      \u0275\u0275text(218, " To develop complex navigation flows ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(219, "div", 33);
      \u0275\u0275element(220, "input", 68);
      \u0275\u0275elementStart(221, "label", 69);
      \u0275\u0275text(222, " To optimize code performance ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(223, "div", 36)(224, "a", 37);
      \u0275\u0275listener("click", function StudentQaComponent_Template_a_click_224_listener() {
        return ctx.previous();
      });
      \u0275\u0275element(225, "i", 38);
      \u0275\u0275text(226, "Back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "button", 39);
      \u0275\u0275listener("click", function StudentQaComponent_Template_button_click_227_listener() {
        return ctx.next();
      });
      \u0275\u0275text(228, "Finish");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(229, "fieldset", 2)(230, "div", 3)(231, "h5");
      \u0275\u0275text(232, "My Quiz Attempts");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(233, "div", 70)(234, "div", 71)(235, "div", 72)(236, "div", 73)(237, "span", 74);
      \u0275\u0275element(238, "span", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(239, "span", 76);
      \u0275\u0275element(240, "span", 75);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(241, "div", 77);
      \u0275\u0275text(242, "80%");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(243, "p", 78);
      \u0275\u0275text(244, "Pass Score : 80%");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(245, "div", 79)(246, "h6", 80);
      \u0275\u0275text(247, "Congratulations! You Passed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(248, "p", 81);
      \u0275\u0275text(249, "You\u2019ve successfully passed the quiz. Keep up the great work!");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(250, "div", 82)(251, "a", 83);
      \u0275\u0275element(252, "i", 38);
      \u0275\u0275text(253, "Back to Dashboard");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(254, "fieldset", 2)(255, "div", 3)(256, "h5");
      \u0275\u0275text(257, "My Quiz Attempts");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(258, "div", 84)(259, "div", 85)(260, "div", 72)(261, "div", 86)(262, "span", 74);
      \u0275\u0275element(263, "span", 87);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(264, "span", 76);
      \u0275\u0275element(265, "span", 87);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(266, "div", 88);
      \u0275\u0275text(267, "20%");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(268, "p", 78);
      \u0275\u0275text(269, "Pass Score : 20%");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(270, "div", 79)(271, "h6", 80);
      \u0275\u0275text(272, "Sorry, You Didn't Pass This Time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(273, "p", 81);
      \u0275\u0275text(274, "Don't worry, learn from this attempt and come back stronger next time!");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(275, "div", 82)(276, "a", 83);
      \u0275\u0275element(277, "i", 38);
      \u0275\u0275text(278, "Back to Dashboard");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.current === 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(11, _c0, ctx.current === 2 ? "block" : ""));
      \u0275\u0275advance(57);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(13, _c0, ctx.current === 3 ? "block" : ""));
      \u0275\u0275advance(57);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(15, _c0, ctx.current === 4 ? "block" : ""));
      \u0275\u0275advance(57);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(17, _c0, ctx.current === 5 ? "block" : ""));
      \u0275\u0275advance(56);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(19, _c0, ctx.current === 6 ? "block" : ""));
      \u0275\u0275advance(9);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction0(21, _c1));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction0(22, _c2));
      \u0275\u0275advance(11);
      \u0275\u0275property("routerLink", ctx.routes.students_Dashboard);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(23, _c0, ctx.current === 7 ? "block" : ""));
      \u0275\u0275advance(22);
      \u0275\u0275property("routerLink", ctx.routes.students_Dashboard);
    }
  }, dependencies: [CommonModule, NgIf, NgStyle, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentQaComponent, [{
    type: Component,
    args: [{ selector: "app-student-qa", imports: [CommonModule, RouterLink], template: `<div class="quiz-wizard">
    <fieldset id="first-field" *ngIf="current === 1">
        <div class="page-title d-flex align-items-center justify-content-between">
            <h5>My Quiz Attempts</h5>
        </div>
        <div class="quiz-attempt-card border-0">
            <div class="quiz-attempt-body p-0">
                <div class="border p-3 mb-3 rounded-2">
                <div class="bg-light border p-3 mb-3 rounded-2 flex-wrap">
                    <div class="row align-items-center">
                        <div class="col-md-8">
                            <div class="mb-2 mb-md-0">
                                <div class="d-flex align-items-center">
                                    <div class="avatar avatar-lg me-3 flex-shrink-0">
                                        <img class="img-fluid rounded-3" src="assets/img/students/quiz.jpg" alt="">
                                    </div>
                                    <h5 class="fs-18">Information About UI/UX Design Degree</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="text-md-end">
                                <p class="d-inline-flex align-items-center mb-0">
                                    <i class="isax isax-clock me-1"></i>
                                    00:02:21 
                                    <span class="text-dark ms-1"> / 00:03:00</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <div class="d-flex align-items-center justify-content-between mb-1">
                        <span class="fw-semibold text-gray-9">Quiz Progress</span>
                        <span>Question 1 out of 5</span>
                    </div>
                    <div class="progress progress-xs  flex-grow-1 mb-1">
                        <div class="progress-bar bg-success rounded" role="progressbar" style="width: 20%;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="mb-0">
                    <h6 class="mb-3">What does UI stand for?</h6>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="radio" name="qusetion-1" id="Radio-sm-1">
                        <label class="form-check-label" for="Radio-sm-1">
                            User Intention
                        </label>
                    </div>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="radio" name="qusetion-1" id="Radio-sm-2">
                        <label class="form-check-label" for="Radio-sm-2">
                            User Interface
                        </label>
                    </div>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="radio" name="qusetion-1" id="Radio-sm-3">
                        <label class="form-check-label" for="Radio-sm-3">
                            Universal Interaction
                        </label>
                    </div>
                    <div class="form-check mb-0">
                        <input class="form-check-input" type="radio" name="qusetion-1" id="Radio-sm-4">
                        <label class="form-check-label" for="Radio-sm-4">
                            Usability Information
                        </label>
                    </div>
                </div>
            </div>
                <div class="text-end">
                    <button type="button" class="btn btn-secondary rounded-pill next_btn" (click)="next()">Next<i class="isax isax-arrow-right-3 ms-1 fs-10"></i></button>
                </div>
            </div>
        </div>
    
    </fieldset>

    <fieldset [ngStyle]="{'display':current===2?'block':''}">
        <div class="page-title d-flex align-items-center justify-content-between">
            <h5>My Quiz Attempts</h5>
        </div>
        <div class="quiz-attempt-card border-0">								
            <div class="quiz-attempt-body p-0">
                <div class="border p-3 mb-3 rounded-2">
                    <div class="bg-light border p-3 mb-3 rounded-2 flex-wrap">
                        <div class="row align-items-center">
                            <div class="col-md-8">
                                <div class="mb-2 mb-md-0">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar avatar-lg me-3 flex-shrink-0">
                                            <img class="img-fluid rounded-3" src="assets/img/students/quiz.jpg" alt="">
                                        </div>
                                        <h5 class="fs-18">Information About UI/UX Design Degree</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="text-md-end">
                                    <p class="d-inline-flex align-items-center mb-0">
                                        <i class="isax isax-clock me-1"></i>
                                        00:02:21 
                                        <span class="text-dark ms-1"> / 00:03:00</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                <div class="mb-3">
                    <div class="d-flex align-items-center justify-content-between mb-1">
                        <span class="fw-semibold text-gray-9">Quiz Progress</span>
                        <span>Question 2 out of 5</span>
                    </div>
                    <div class="progress progress-xs  flex-grow-1 mb-1">
                        <div class="progress-bar bg-success rounded" role="progressbar" style="width: 40%;" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="mb-0">
                    <h6 class="mb-3">Which of the following is a principle of UX design?</h6>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="radio" name="qusetion-2" id="Radio-sm-5">
                        <label class="form-check-label" for="Radio-sm-5">
                            Minimalistic Design
                        </label>
                    </div>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="radio" name="qusetion-2" id="Radio-sm-6">
                        <label class="form-check-label" for="Radio-sm-6">
                            User-Centered Design
                        </label>
                    </div>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="radio" name="qusetion-2" id="Radio-sm-7">
                        <label class="form-check-label" for="Radio-sm-7">
                            Gradient Usage
                        </label>
                    </div>
                    <div class="form-check mb-0">
                        <input class="form-check-input" type="radio" name="qusetion-2" id="Radio-sm-8">
                        <label class="form-check-label" for="Radio-sm-8">
                            Typography Hierarchy
                        </label>
                    </div>
                </div>
            </div>
                <div class="d-flex align-items-center justify-content-between">
                    <a href="javascript:void(0);" class="btn bg-gray-100 d-inline-flex rounded-pill align-items-center prev_btn me-1" (click)="previous()"><i class="isax isax-arrow-left-2 me-1 fs-10"></i>Previous</a>
                    <button type="button" class="btn btn-secondary rounded-pill next_btn" (click)="next()">Next<i class="isax isax-arrow-right-3 ms-1 fs-10"></i></button>
                </div>
            </div>
        </div>
    </fieldset>
    <fieldset  [ngStyle]="{'display':current===3?'block':''}">
        <div class="page-title d-flex align-items-center justify-content-between">
            <h5>My Quiz Attempts</h5>
        </div>
        <div class="quiz-attempt-card border-0">						
            <div class="quiz-attempt-body p-0">
                <div class="border p-3 mb-3 rounded-2">
                    <div class="bg-light border p-3 mb-3 rounded-2 flex-wrap">
                        <div class="row align-items-center">
                            <div class="col-md-8">
                                <div class="mb-2 mb-md-0">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar avatar-lg me-3 flex-shrink-0">
                                            <img class="img-fluid rounded-3" src="assets/img/students/quiz.jpg" alt="">
                                        </div>
                                        <h5 class="fs-18">Information About UI/UX Design Degree</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="text-md-end">
                                    <p class="d-inline-flex align-items-center mb-0">
                                        <i class="isax isax-clock me-1"></i>
                                        00:02:21 
                                        <span class="text-dark ms-1"> / 00:03:00</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                <div class="mb-3">
                    <div class="d-flex align-items-center justify-content-between mb-1">
                        <span class="fw-semibold text-gray-9">Quiz Progress</span>
                        <span>Question 3 out of 5</span>
                    </div>
                    <div class="progress progress-xs  flex-grow-1 mb-1">
                        <div class="progress-bar bg-success rounded" role="progressbar" style="width: 60%;" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="mb-0">
                    <h6 class="mb-3">Which tool is commonly used for wireframing?</h6>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="radio" name="qusetion-3" id="Radio-sm-9">
                        <label class="form-check-label" for="Radio-sm-9">
                            Adobe Photoshop
                        </label>
                    </div>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="radio" name="qusetion-3" id="Radio-sm-10">
                        <label class="form-check-label" for="Radio-sm-10">
                            Figma
                        </label>
                    </div>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="radio" name="qusetion-3" id="Radio-sm-11">
                        <label class="form-check-label" for="Radio-sm-11">
                            Visual Studio Code
                        </label>
                    </div>
                    <div class="form-check mb-0">
                        <input class="form-check-input" type="radio" name="qusetion-3" id="Radio-sm-12">
                        <label class="form-check-label" for="Radio-sm-12">
                            GitHub
                        </label>
                    </div>
                </div>
                 </div>
                <div class="d-flex align-items-center justify-content-between">
                    <a href="javascript:void(0);" class="btn bg-gray-100 d-inline-flex rounded-pill align-items-center prev_btn me-1" (click)="previous()"><i class="isax isax-arrow-left-2 me-1 fs-10"></i>Previous</a>
                    <button type="button" class="btn btn-secondary rounded-pill next_btn" (click)="next()">Next<i class="isax isax-arrow-right-3 ms-1 fs-10"></i></button>
                </div>
            </div>
        </div>
    </fieldset>
    <fieldset  [ngStyle]="{'display':current===4?'block':''}">
        <div class="page-title d-flex align-items-center justify-content-between">
            <h5>My Quiz Attempts</h5>
        </div>
        <div class="quiz-attempt-card border-0">
            <div class="quiz-attempt-body p-0">
                <div class="border p-3 mb-3 rounded-2">
                    <div class="bg-light border p-3 mb-3 rounded-2 flex-wrap">
                        <div class="row align-items-center">
                            <div class="col-md-8">
                                <div class="mb-2 mb-md-0">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar avatar-lg me-3 flex-shrink-0">
                                            <img class="img-fluid rounded-3" src="assets/img/students/quiz.jpg" alt="">
                                        </div>
                                        <h5 class="fs-18">Information About UI/UX Design Degree</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="text-md-end">
                                    <p class="d-inline-flex align-items-center mb-0">
                                        <i class="isax isax-clock me-1"></i>
                                        00:02:21 
                                        <span class="text-dark ms-1"> / 00:03:00</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                <div class="mb-3">
                    <div class="d-flex align-items-center justify-content-between mb-1">
                        <span class="fw-bold text-gray-9">Quiz Progress</span>
                        <span>Question 4 out of 5</span>
                    </div>
                    <div class="progress progress-xs  flex-grow-1 mb-1">
                        <div class="progress-bar bg-success rounded" role="progressbar" style="width: 80%;" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="mb-0">
                    <h6 class="mb-3">What is a wireframe?</h6>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="radio" name="qusetion-4" id="Radio-sm-13">
                        <label class="form-check-label" for="Radio-sm-13">
                            A detailed, interactive prototype
                        </label>
                    </div>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="radio" name="qusetion-4" id="Radio-sm-14">
                        <label class="form-check-label" for="Radio-sm-14">
                            A low-fidelity representation of a design
                        </label>
                    </div>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="radio" name="qusetion-4" id="Radio-sm-15">
                        <label class="form-check-label" for="Radio-sm-15">
                            The codebase of a website
                        </label>
                    </div>
                    <div class="form-check mb-0">
                        <input class="form-check-input" type="radio" name="qusetion-4" id="Radio-sm-16">
                        <label class="form-check-label" for="Radio-sm-16">
                            A high-fidelity design concept
                        </label>
                    </div>
                </div>
               </div>
                <div class="d-flex align-items-center justify-content-between">
                    <a href="javascript:void(0);" class="btn btn-light d-inline-flex rounded-pill align-items-center prev_btn me-1" (click)="previous()"><i class="isax isax-arrow-left-2 me-1 fs-10"></i>Back</a>
                    <button type="button" class="btn btn-secondary rounded-pill next_btn" (click)="next()">Next<i class="isax isax-arrow-right-3 ms-1 fs-10"></i></button>
                </div>
            </div>
        </div>
    </fieldset>
    <fieldset  [ngStyle]="{'display':current===5?'block':''}">
        <div class="page-title d-flex align-items-center justify-content-between">
            <h5>My Quiz Attempts</h5>
        </div>
        <div class="quiz-attempt-card border-0">								
            <div class="quiz-attempt-body p-0">
                <div class="border p-3 mb-3 rounded-2">
                    <div class="bg-light border p-3 mb-3 rounded-2 flex-wrap">
                        <div class="row align-items-center">
                            <div class="col-md-8">
                                <div class="mb-2 mb-md-0">
                                    <div class="d-flex align-items-center">
                                        <div class="avatar avatar-lg me-3 flex-shrink-0">
                                            <img class="img-fluid rounded-3" src="assets/img/students/quiz.jpg" alt="">
                                        </div>
                                        <h5 class="fs-18">Information About UI/UX Design Degree</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="text-md-end">
                                    <p class="d-inline-flex align-items-center mb-0">
                                        <i class="isax isax-clock me-1"></i>
                                        00:02:21 
                                        <span class="text-dark ms-1"> / 00:03:00</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                <div class="mb-3">
                    <div class="d-flex align-items-center justify-content-between mb-1">
                        <span class="fw-bold text-gray-9">Quiz Progress</span>
                        <span>Question 5 out of 5</span>
                    </div>
                    <div class="progress progress-xs  flex-grow-1 mb-1">
                        <div class="progress-bar bg-success rounded" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="mb-0">
                    <h6 class="mb-3">What is the primary goal of UX design?</h6>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="radio" name="qusetion-4" id="Radio-sm-17">
                        <label class="form-check-label" for="Radio-sm-17">
                            To create a visually appealing design
                        </label>
                    </div>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="radio" name="qusetion-4" id="Radio-sm-18">
                        <label class="form-check-label" for="Radio-sm-18">
                            To enhance user satisfaction and usability
                        </label>
                    </div>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="radio" name="qusetion-4" id="Radio-sm-19">
                        <label class="form-check-label" for="Radio-sm-19">
                            To develop complex navigation flows
                        </label>
                    </div>
                    <div class="form-check mb-0">
                        <input class="form-check-input" type="radio" name="qusetion-4" id="Radio-sm-20">
                        <label class="form-check-label" for="Radio-sm-20">
                            To optimize code performance
                        </label>
                    </div>
                </div>
            </div>
                <div class="d-flex align-items-center justify-content-between">
                    <a href="javascript:void(0);" class="btn bg-gray-100 d-inline-flex rounded-pill align-items-center prev_btn me-1" (click)="previous()"><i class="isax isax-arrow-left-2 me-1 fs-10"></i>Back</a>
                    <button type="button" class="btn btn-secondary rounded-pill next_btn" (click)="next()">Finish</button>
                </div>
            </div>
        </div>
    </fieldset>
    <fieldset  [ngStyle]="{'display':current===6?'block':''}">
        <div class="page-title d-flex align-items-center justify-content-between">
            <h5>My Quiz Attempts</h5>
        </div>
        <div class="card">							
            <div class="card-body">								
                <div class="quiz-circle-progress m-0 mb-3">
                    <div class="circle-progress mb-2"  data-value='80'>
                        <span class="progress-left">
                            <span class="progress-bar border-success" [ngStyle]="{'transform':'rotate(118deg)'}"></span>
                        </span>
                        <span class="progress-right">
                            <span class="progress-bar border-success" [ngStyle]="{'transform':'rotate(180deg)'}"></span>
                        </span>
                        <div class="progress-value text-success fw-bold fs-24">80%</div>
                    </div>
                    <p class="text-center fs-14">Pass Score : 80%</p>
                </div>
                <div class="text-center mb-3">
                    <h6 class="mb-1">Congratulations! You Passed</h6>
                    <p class="fs-14">You\u2019ve successfully passed the quiz. Keep up the great work!</p>
                </div>
                <div class="d-flex align-items-center justify-content-center">
                    <a [routerLink]="routes.students_Dashboard" class="btn btn-secondary rounded-pill"><i class="isax isax-arrow-left-2 me-1 fs-10"></i>Back to Dashboard</a>
                </div>
            </div>
        </div>
    </fieldset>
    <fieldset  [ngStyle]="{'display':current===7?'block':''}">
        <div class="page-title d-flex align-items-center justify-content-between">
            <h5>My Quiz Attempts</h5>
        </div>
        <div class="quiz-attempt-card">					
            <div class="quiz-attempt-body">							
                <div class="quiz-circle-progress m-0 mb-3">
                    <div class="circle-progress mb-2"  data-value='20'>
                        <span class="progress-left">
                            <span class="progress-bar border-danger"></span>
                        </span>
                        <span class="progress-right">
                            <span class="progress-bar border-danger"></span>
                        </span>
                        <div class="progress-value text-danger fw-bold fs-24">20%</div>
                    </div>
                    <p class="text-center fs-14">Pass Score : 20%</p>
                </div>
                <div class="text-center mb-3">
                    <h6 class="mb-1">Sorry, You Didn't Pass This Time</h6>
                    <p class="fs-14">Don't worry, learn from this attempt and come back stronger next time!</p>
                </div>
                <div class="d-flex align-items-center justify-content-center">
                    <a [routerLink]="routes.students_Dashboard" class="btn btn-secondary rounded-pill"><i class="isax isax-arrow-left-2 me-1 fs-10"></i>Back to Dashboard</a>
                </div>
            </div>
        </div>
    </fieldset>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentQaComponent, { className: "StudentQaComponent", filePath: "src/app/features/student/student-qa/student-qa.component.ts", lineNumber: 11 });
})();
export {
  StudentQaComponent
};
//# sourceMappingURL=chunk-AGMHBA7K.js.map
