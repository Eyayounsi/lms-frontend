"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[6694],{

/***/ 36694:
/*!****************************************************************************************************!*\
  !*** ./src/app/features/student/settings/student-notifications/student-notifications.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StudentNotificationsComponent: () => (/* binding */ StudentNotificationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 12481);




function StudentNotificationsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Sauvegard\u00C3\u00A9 \u00E2\u0153\u201C");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const STORAGE_KEY = 'student_notification_prefs';
const DEFAULTS = {
  studentQuestions: true,
  feedbackReceived: true,
  quizResults: false,
  forumActivity: false,
  courseEnrolment: true,
  assignmentSubmission: true,
  courseComments: false,
  courseReminders: false
};
let StudentNotificationsComponent = /*#__PURE__*/(() => {
  class StudentNotificationsComponent {
    prefs = {
      ...DEFAULTS
    };
    saved = false;
    ngOnInit() {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        try {
          this.prefs = {
            ...DEFAULTS,
            ...JSON.parse(raw)
          };
        } catch {/* ignore */}
      }
    }
    onToggle() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.prefs));
      this.saved = true;
      setTimeout(() => this.saved = false, 2000);
    }
    toggleAllGeneral() {
      const allOn = this.prefs.studentQuestions && this.prefs.feedbackReceived && this.prefs.quizResults && this.prefs.forumActivity;
      this.prefs.studentQuestions = !allOn;
      this.prefs.feedbackReceived = !allOn;
      this.prefs.quizResults = !allOn;
      this.prefs.forumActivity = !allOn;
      this.onToggle();
    }
    toggleAllEmail() {
      const allOn = this.prefs.courseEnrolment && this.prefs.assignmentSubmission && this.prefs.courseComments && this.prefs.courseReminders;
      this.prefs.courseEnrolment = !allOn;
      this.prefs.assignmentSubmission = !allOn;
      this.prefs.courseComments = !allOn;
      this.prefs.courseReminders = !allOn;
      this.onToggle();
    }
    static ɵfac = function StudentNotificationsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || StudentNotificationsComponent)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: StudentNotificationsComponent,
      selectors: [["app-student-notifications"]],
      decls: 78,
      vars: 9,
      consts: [[1, "d-flex", "justify-content-between", "align-items-center", "border-bottom", "pb-4", "mb-4"], [1, "fs-18", "mb-0"], [1, "badge", "bg-soft-success", "ms-2", "fs-12", "fw-normal"], ["type", "button", 1, "btn", "btn-sm", "btn-dark", 3, "click"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "form-check", "form-switch", "form-check-md", "mb-0", "ms-3"], ["type", "checkbox", "id", "pref_studentQuestions", "name", "studentQuestions", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["type", "checkbox", "id", "pref_feedbackReceived", "name", "feedbackReceived", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["type", "checkbox", "id", "pref_quizResults", "name", "quizResults", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["type", "checkbox", "id", "pref_forumActivity", "name", "forumActivity", 1, "form-check-input", 3, "ngModelChange", "ngModel"], [1, "text-center", "my-5"], ["type", "checkbox", "id", "pref_courseEnrolment", "name", "courseEnrolment", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["type", "checkbox", "id", "pref_assignmentSubmission", "name", "assignmentSubmission", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["type", "checkbox", "id", "pref_courseComments", "name", "courseComments", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["type", "checkbox", "id", "pref_courseReminders", "name", "courseReminders", 1, "form-check-input", 3, "ngModelChange", "ngModel"]],
      template: function StudentNotificationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form")(1, "div", 0)(2, "h5", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " General Notifications ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditionalCreate"](4, StudentNotificationsComponent_Conditional_4_Template, 2, 0, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StudentNotificationsComponent_Template_button_click_5_listener() {
            return ctx.toggleAllGeneral();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Toggle all");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4)(8, "div")(9, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Student Questions");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "small");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Notify me when a student asks a question in the Q&A section");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5)(14, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function StudentNotificationsComponent_Template_input_ngModelChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.prefs.studentQuestions, $event) || (ctx.prefs.studentQuestions = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function StudentNotificationsComponent_Template_input_ngModelChange_14_listener() {
            return ctx.onToggle();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 4)(16, "div")(17, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Feedback Received");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "small");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Notify me when I receive feedback from students");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 5)(22, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function StudentNotificationsComponent_Template_input_ngModelChange_22_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.prefs.feedbackReceived, $event) || (ctx.prefs.feedbackReceived = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function StudentNotificationsComponent_Template_input_ngModelChange_22_listener() {
            return ctx.onToggle();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 4)(24, "div")(25, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Quiz/Exam Results Submission");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "small");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Notify me when quiz or exam results are submitted");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 5)(30, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function StudentNotificationsComponent_Template_input_ngModelChange_30_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.prefs.quizResults, $event) || (ctx.prefs.quizResults = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function StudentNotificationsComponent_Template_input_ngModelChange_30_listener() {
            return ctx.onToggle();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 4)(32, "div")(33, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Forum Activity");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "small");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Notify me about new posts or replies in course discussion forums.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 5)(38, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function StudentNotificationsComponent_Template_input_ngModelChange_38_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.prefs.forumActivity, $event) || (ctx.prefs.forumActivity = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function StudentNotificationsComponent_Template_input_ngModelChange_38_listener() {
            return ctx.onToggle();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "form")(41, "div", 0)(42, "h5", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Email Notifications");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StudentNotificationsComponent_Template_button_click_44_listener() {
            return ctx.toggleAllEmail();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Toggle all");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 4)(47, "div")(48, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Course Enrolment");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "small");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Send me emails when I enroll in a new course");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 5)(53, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function StudentNotificationsComponent_Template_input_ngModelChange_53_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.prefs.courseEnrolment, $event) || (ctx.prefs.courseEnrolment = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function StudentNotificationsComponent_Template_input_ngModelChange_53_listener() {
            return ctx.onToggle();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 4)(55, "div")(56, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Assignment Submission");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "small");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Send me email whenever an assignment is submitted");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 5)(61, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function StudentNotificationsComponent_Template_input_ngModelChange_61_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.prefs.assignmentSubmission, $event) || (ctx.prefs.assignmentSubmission = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function StudentNotificationsComponent_Template_input_ngModelChange_61_listener() {
            return ctx.onToggle();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 4)(63, "div")(64, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Course Comments");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "small");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Get notified about comments and replies to your comments.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 5)(69, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function StudentNotificationsComponent_Template_input_ngModelChange_69_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.prefs.courseComments, $event) || (ctx.prefs.courseComments = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function StudentNotificationsComponent_Template_input_ngModelChange_69_listener() {
            return ctx.onToggle();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 4)(71, "div")(72, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Course Reminders");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "small");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Receive reminders to stay updated on your scheduled sessions.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 5)(77, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function StudentNotificationsComponent_Template_input_ngModelChange_77_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.prefs.courseReminders, $event) || (ctx.prefs.courseReminders = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function StudentNotificationsComponent_Template_input_ngModelChange_77_listener() {
            return ctx.onToggle();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.saved ? 4 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.prefs.studentQuestions);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.prefs.feedbackReceived);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.prefs.quizResults);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.prefs.forumActivity);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.prefs.courseEnrolment);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.prefs.assignmentSubmission);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.prefs.courseComments);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.prefs.courseReminders);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return StudentNotificationsComponent;
})();

/***/ })

}]);
//# sourceMappingURL=6694.js.map