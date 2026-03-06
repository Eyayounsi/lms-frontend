import {
  routes
} from "./chunk-E6TQA5KL.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/instructor/settings/instructor-setting-notifications/instructor-setting-notifications.component.ts
var InstructorSettingNotificationsComponent = class _InstructorSettingNotificationsComponent {
  routes = routes;
  static \u0275fac = function InstructorSettingNotificationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorSettingNotificationsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorSettingNotificationsComponent, selectors: [["app-instructor-setting-notifications"]], decls: 85, vars: 0, consts: [[1, "d-flex", "justify-content-between", "align-items-center", "border-bottom", "pb-4", "mb-4"], [1, "fs-18", "mb-0"], ["type", "button", 1, "btn", "btn-sm", "btn-dark"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "form-check", "form-switch", "form-check-md", "mb-0", "ms-3"], ["type", "checkbox", "id", "checkPrivacy1", "checked", "", 1, "form-check-input"], ["type", "checkbox", "id", "7", "checked", "", 1, "form-check-input"], ["type", "checkbox", "id", "4", 1, "form-check-input"], ["type", "checkbox", "id", "5", 1, "form-check-input"], [1, "text-center", "my-5"], ["type", "checkbox", "id", "checkPrivacy6", "checked", "", 1, "form-check-input"], ["type", "checkbox", "id", "checkPrivacy7", "checked", "", 1, "form-check-input"], ["type", "checkbox", "id", "8", 1, "form-check-input"], ["type", "checkbox", "id", "9", 1, "form-check-input"], ["type", "checkbox", "id", "17", 1, "form-check-input"]], template: function InstructorSettingNotificationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "form")(1, "div", 0)(2, "h5", 1);
      \u0275\u0275text(3, "General Notifications");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "button", 2);
      \u0275\u0275text(5, "Toggle all");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(6, "div", 3)(7, "div")(8, "h6");
      \u0275\u0275text(9, "Student Questions");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(10, "small");
      \u0275\u0275text(11, "Notify me when a student asks a question in the Q&A section");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(12, "div", 4);
      \u0275\u0275domElement(13, "input", 5);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(14, "div", 3)(15, "div")(16, "h6");
      \u0275\u0275text(17, "Feedback Received");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(18, "small");
      \u0275\u0275text(19, "Notify me when receive feedback from students");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(20, "div", 4);
      \u0275\u0275domElement(21, "input", 6);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(22, "div", 3)(23, "div")(24, "h6");
      \u0275\u0275text(25, "Quiz/Exam Results Submission");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(26, "small");
      \u0275\u0275text(27, "Notify me when quiz or exam results are submitted");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(28, "div", 4);
      \u0275\u0275domElement(29, "input", 7);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(30, "div", 3)(31, "div")(32, "h6");
      \u0275\u0275text(33, "Forum Activity");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(34, "small");
      \u0275\u0275text(35, "Notify me about new posts or replies in course discussion forums.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(36, "div", 4);
      \u0275\u0275domElement(37, "input", 8);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElement(38, "div", 9);
      \u0275\u0275domElementStart(39, "form")(40, "div", 0)(41, "h5", 1);
      \u0275\u0275text(42, "Email Notifications");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(43, "button", 2);
      \u0275\u0275text(44, "Toggle all");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(45, "div", 3)(46, "div")(47, "h6");
      \u0275\u0275text(48, "Course Enrolment");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(49, "small");
      \u0275\u0275text(50, "Send me emails when a new student enrolls the course");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(51, "div", 4);
      \u0275\u0275domElement(52, "input", 10);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(53, "div", 3)(54, "div")(55, "h6");
      \u0275\u0275text(56, "Assignment Submission");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(57, "small");
      \u0275\u0275text(58, "Send me email whenever an assignment is submitted by a student");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(59, "div", 4);
      \u0275\u0275domElement(60, "input", 11);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(61, "div", 3)(62, "div")(63, "h6");
      \u0275\u0275text(64, "Course Comments");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(65, "small");
      \u0275\u0275text(66, "Get notified about comments on your posts and replies to your comments.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(67, "div", 4);
      \u0275\u0275domElement(68, "input", 12);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(69, "div", 3)(70, "div")(71, "h6");
      \u0275\u0275text(72, "Course Reminders");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(73, "small");
      \u0275\u0275text(74, "Receive booking assistance reminders to stay updated on your scheduled sessions.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(75, "div", 4);
      \u0275\u0275domElement(76, "input", 13);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(77, "div", 3)(78, "div")(79, "h6");
      \u0275\u0275text(80, "System Updates");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(81, "small");
      \u0275\u0275text(82, "Send me emails about updates to the LMS platform ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(83, "div", 4);
      \u0275\u0275domElement(84, "input", 14);
      \u0275\u0275domElementEnd()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorSettingNotificationsComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-setting-notifications", imports: [], template: '<form>\n    <!-- Title -->\n    <div class="d-flex justify-content-between align-items-center border-bottom pb-4 mb-4">\n        <h5 class="fs-18 mb-0">General Notifications</h5>\n        <button class="btn btn-sm btn-dark" type="button">Toggle all</button>\n    </div>\n\n    <!-- Item -->\n    <div class="d-flex justify-content-between align-items-center mb-4">\n        <!-- Content -->\n        <div>\n            <h6>Student Questions</h6>\n            <small>Notify me when a student asks a question in the Q&A section</small>\n        </div>\n        <!-- Switch -->\n        <div class="form-check form-switch form-check-md mb-0 ms-3">\n            <input class="form-check-input" type="checkbox" id="checkPrivacy1" checked="">\n        </div>\n    </div>\n\n    <!-- Item -->\n    <div class="d-flex justify-content-between align-items-center mb-4">\n        <!-- Content -->\n        <div>\n            <h6>Feedback Received</h6>\n            <small>Notify me when receive feedback from students</small>\n        </div>\n        <!-- Switch -->\n        <div class="form-check form-switch form-check-md mb-0 ms-3">\n            <input class="form-check-input" type="checkbox" id="7" checked="">\n        </div>\n    </div>\n\n    <!-- Item -->\n    <div class="d-flex justify-content-between align-items-center mb-4">\n        <!-- Content -->\n        <div>\n            <h6>Quiz/Exam Results Submission</h6>\n            <small>Notify me when quiz or exam results are submitted</small>\n        </div>\n        <!-- Switch -->\n        <div class="form-check form-switch form-check-md mb-0 ms-3">\n            <input class="form-check-input" type="checkbox" id="4">\n        </div>\n    </div>\n\n    <!-- Item -->\n    <div class="d-flex justify-content-between align-items-center mb-4">\n        <!-- Content -->\n        <div>\n            <h6>Forum Activity</h6>\n            <small>Notify me about new posts or replies in course discussion forums.</small>\n        </div>\n        <!-- Switch -->\n        <div class="form-check form-switch form-check-md mb-0 ms-3">\n            <input class="form-check-input" type="checkbox" id="5">\n        </div>\n    </div>\n    \n</form>\n<div class="text-center my-5"></div>\n<form>\n    <!-- Title -->\n    <div class="d-flex justify-content-between align-items-center border-bottom pb-4 mb-4">\n        <h5 class="fs-18 mb-0">Email Notifications</h5>\n        <button class="btn btn-sm btn-dark" type="button">Toggle all</button>\n    </div>\n\n    <!-- Item -->\n    <div class="d-flex justify-content-between align-items-center mb-4">\n        <!-- Content -->\n        <div>\n            <h6>Course Enrolment</h6>\n            <small>Send me emails when a new student enrolls the course</small>\n        </div>\n        <!-- Switch -->\n        <div class="form-check form-switch form-check-md mb-0 ms-3">\n            <input class="form-check-input" type="checkbox" id="checkPrivacy6" checked="">\n        </div>\n    </div>\n\n    <!-- Item -->\n    <div class="d-flex justify-content-between align-items-center mb-4">\n        <!-- Content -->\n        <div>\n            <h6>Assignment Submission</h6>\n            <small>Send me email whenever an assignment is submitted by a student</small>\n        </div>\n        <!-- Switch -->\n        <div class="form-check form-switch form-check-md mb-0 ms-3">\n            <input class="form-check-input" type="checkbox" id="checkPrivacy7" checked="">\n        </div>\n    </div>\n\n    <!-- Item -->\n    <div class="d-flex justify-content-between align-items-center mb-4">\n        <!-- Content -->\n        <div>\n            <h6>Course Comments</h6>\n            <small>Get notified about comments on your posts and replies to your comments.</small>\n        </div>\n        <!-- Switch -->\n        <div class="form-check form-switch form-check-md mb-0 ms-3">\n            <input class="form-check-input" type="checkbox" id="8">\n        </div>\n    </div>\n\n    <!-- Item -->\n    <div class="d-flex justify-content-between align-items-center mb-4">\n        <!-- Content -->\n        <div>\n            <h6>Course Reminders</h6>\n            <small>Receive booking assistance reminders to stay updated on your scheduled sessions.</small>\n        </div>\n        <!-- Switch -->\n        <div class="form-check form-switch form-check-md mb-0 ms-3">\n            <input class="form-check-input" type="checkbox" id="9">\n        </div>\n    </div>\n\n    <!-- Item -->\n    <div class="d-flex justify-content-between align-items-center mb-4">\n        <!-- Content -->\n        <div>\n            <h6>System Updates</h6>\n            <small>Send me emails about updates to the LMS platform </small>\n        </div>\n        <!-- Switch -->\n        <div class="form-check form-switch form-check-md mb-0 ms-3">\n            <input class="form-check-input" type="checkbox" id="17">\n        </div>\n    </div>\n</form>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorSettingNotificationsComponent, { className: "InstructorSettingNotificationsComponent", filePath: "src/app/features/instructor/settings/instructor-setting-notifications/instructor-setting-notifications.component.ts", lineNumber: 10 });
})();
export {
  InstructorSettingNotificationsComponent
};
//# sourceMappingURL=chunk-6AU7767E.js.map
