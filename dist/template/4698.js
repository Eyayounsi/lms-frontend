"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[4698],{

/***/ 4698:
/*!*******************************************************************************!*\
  !*** ./src/app/features/student/student-message/student-message.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StudentMessageComponent: () => (/* binding */ StudentMessageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_message_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/message/message.service */ 40376);
/* harmony import */ var _shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/service/course/course.service */ 4856);
/* harmony import */ var _shared_service_message_message_realtime_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/service/message/message-realtime.service */ 85718);








const _c0 = ["messagesContainer"];
function StudentMessageComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function StudentMessageComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19)(1, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "No conversations yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function StudentMessageComponent_a_15_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const conv_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](conv_r2.unreadCount);
  }
}
function StudentMessageComponent_a_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StudentMessageComponent_a_15_Template_a_click_0_listener() {
      const conv_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.openConversation(conv_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 23)(2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div")(5, "h6", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, StudentMessageComponent_a_15_span_7_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const conv_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", (ctx_r2.activeConversation == null ? null : ctx_r2.activeConversation.conversationId) === conv_r2.conversationId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", conv_r2.otherParticipantAvatar || "assets/img/user/user-01.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", conv_r2.otherParticipantName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", conv_r2.unreadCount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 6, conv_r2.lastMessageAt, "shortTime"));
  }
}
function StudentMessageComponent_ng_container_16_a_4_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 39);
  }
}
function StudentMessageComponent_ng_container_16_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StudentMessageComponent_ng_container_16_a_4_Template_a_click_0_listener() {
      const inst_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.contactInstructor(inst_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 35)(4, "h6", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "small", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "D\u00E9marrer une conversation");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, StudentMessageComponent_ng_container_16_a_4_span_8_Template, 1, 0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const inst_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", inst_r5.avatar || "assets/img/user/user-01.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](inst_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.startingConv);
  }
}
function StudentMessageComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 30)(2, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Contacter un instructeur");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, StudentMessageComponent_ng_container_16_a_4_Template, 9, 3, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.instructors);
  }
}
function StudentMessageComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 40)(1, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Select a conversation to start chatting");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function StudentMessageComponent_div_19_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function StudentMessageComponent_div_19_ng_container_13_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 58)(1, "ul")(2, "li", 59)(3, "div", 60)(4, "div", 61)(5, "div", 62)(6, "div", 63)(7, "div", 64)(8, "div", 23)(9, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div")(13, "div", 66)(14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
  }
  if (rf & 2) {
    const msg_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](11, 2, msg_r7.sentAt, "shortTime"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](msg_r7.content);
  }
}
function StudentMessageComponent_div_19_ng_container_13_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 67)(1, "div", 68)(2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 60)(5, "div", 70)(6, "h6", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 61)(14, "div", 63)(15, "div", 23)(16, "div", 73)(17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const msg_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r2.activeConversation.otherParticipantAvatar || "assets/img/user/user-01.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.activeConversation.otherParticipantName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](12, 4, msg_r7.sentAt, "shortTime"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](msg_r7.content);
  }
}
function StudentMessageComponent_div_19_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, StudentMessageComponent_div_19_ng_container_13_li_1_Template, 16, 5, "li", 56)(2, StudentMessageComponent_div_19_ng_container_13_li_2_Template, 19, 7, "li", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const msg_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.isSent(msg_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.isSent(msg_r7));
  }
}
function StudentMessageComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42)(1, "div", 43)(2, "div", 44)(3, "div", 45)(4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div")(7, "h6", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 48, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, StudentMessageComponent_div_19_div_11_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ul", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, StudentMessageComponent_div_19_ng_container_13_Template, 3, 2, "ng-container", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 51)(15, "div", 23)(16, "div", 52)(17, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function StudentMessageComponent_div_19_Template_input_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r2.newMessage, $event) || (ctx_r2.newMessage = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown.enter", function StudentMessageComponent_div_19_Template_input_keydown_enter_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.sendMessage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div")(19, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StudentMessageComponent_div_19_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.sendMessage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r2.activeConversation.otherParticipantAvatar || "assets/img/user/user-01.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.activeConversation.otherParticipantName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.loadingMessages);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.messages);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.newMessage);
  }
}
let StudentMessageComponent = /*#__PURE__*/(() => {
  class StudentMessageComponent {
    messageService;
    courseService;
    messageRealtimeService;
    messagesContainer;
    conversations = [];
    activeConversation = null;
    messages = [];
    newMessage = '';
    loading = true;
    loadingMessages = false;
    currentUserId = 0;
    // Instructeurs suggérés (depuis les cours inscrits)
    instructors = [];
    startingConv = false;
    realtimeSub;
    subscribedConversationId = null;
    shouldScrollToBottom = false;
    constructor(messageService, courseService, messageRealtimeService) {
      this.messageService = messageService;
      this.courseService = courseService;
      this.messageRealtimeService = messageRealtimeService;
      this.currentUserId = parseInt(localStorage.getItem('id') || '0', 10);
    }
    ngOnInit() {
      this.messageRealtimeService.connect();
      this.realtimeSub = this.messageRealtimeService.events$.subscribe(event => this.handleRealtimeEvent(event));
      this.loadConversations();
      this.loadInstructors();
    }
    ngOnDestroy() {
      this.realtimeSub?.unsubscribe();
      if (this.subscribedConversationId) {
        this.messageRealtimeService.unsubscribeConversation(this.subscribedConversationId);
        this.subscribedConversationId = null;
      }
    }
    ngAfterViewChecked() {
      if (this.shouldScrollToBottom) {
        this.scrollMessagesToBottom();
        this.shouldScrollToBottom = false;
      }
    }
    loadInstructors() {
      this.courseService.getMyEnrolledCourses().subscribe({
        next: courses => {
          const map = new Map();
          for (const c of courses) {
            if (c.instructorId && !map.has(c.instructorId)) {
              map.set(c.instructorId, {
                id: c.instructorId,
                name: c.instructorName || 'Instructeur',
                avatar: c.instructorAvatar || ''
              });
            }
          }
          this.instructors = Array.from(map.values());
        },
        error: () => {}
      });
    }
    contactInstructor(instructor) {
      this.startingConv = true;
      this.messageService.getOrCreateConversation(instructor.id).subscribe({
        next: conv => {
          this.startingConv = false;
          // Refresh conversations then open the new one
          this.messageService.getConversations().subscribe({
            next: data => {
              this.conversations = data;
              const found = data.find(c => c.conversationId === conv.conversationId || c.conversationId === conv.id);
              if (found) {
                this.openConversation(found);
              }
            }
          });
        },
        error: () => {
          this.startingConv = false;
        }
      });
    }
    loadConversations() {
      this.loading = true;
      this.messageService.getConversations().subscribe({
        next: data => {
          this.conversations = data;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
    openConversation(conv) {
      if (this.subscribedConversationId && this.subscribedConversationId !== conv.conversationId) {
        this.messageRealtimeService.unsubscribeConversation(this.subscribedConversationId);
      }
      this.activeConversation = conv;
      this.loadingMessages = true;
      this.messageService.getMessages(conv.conversationId).subscribe({
        next: data => {
          this.messages = data;
          this.loadingMessages = false;
          this.requestScrollToBottom();
        },
        error: () => {
          this.loadingMessages = false;
        }
      });
      this.messageRealtimeService.subscribeConversation(conv.conversationId);
      this.subscribedConversationId = conv.conversationId;
      if (conv.unreadCount > 0) {
        this.messageService.markAsRead(conv.conversationId).subscribe();
        conv.unreadCount = 0;
      }
    }
    sendMessage() {
      if (!this.newMessage.trim() || !this.activeConversation) return;
      const content = this.newMessage.trim();
      this.newMessage = '';
      this.messageService.sendMessage(this.activeConversation.conversationId, {
        content,
        messageType: 'TEXT'
      }).subscribe({
        next: msg => {
          this.upsertMessage(msg);
          this.updateConversationPreview(msg, this.activeConversation?.conversationId);
          this.requestScrollToBottom();
        }
      });
    }
    isSent(msg) {
      return msg.senderId === this.currentUserId;
    }
    handleRealtimeEvent(event) {
      if (!event || event.type !== 'MESSAGE_CREATED' || !event.conversationId || !event.message) {
        return;
      }
      const msg = event.message;
      const conversationId = event.conversationId;
      if (this.activeConversation?.conversationId === conversationId) {
        this.upsertMessage(msg);
        this.requestScrollToBottom();
        if (msg.senderId !== this.currentUserId) {
          this.messageService.markAsRead(conversationId).subscribe();
          this.activeConversation.unreadCount = 0;
        }
      } else {
        const conv = this.conversations.find(c => c.conversationId === conversationId);
        if (conv && msg.senderId !== this.currentUserId) {
          conv.unreadCount = (conv.unreadCount || 0) + 1;
        }
      }
      this.updateConversationPreview(msg, conversationId);
      this.moveConversationToTop(conversationId);
    }
    upsertMessage(msg) {
      if (!this.messages.some(m => m.id === msg.id)) {
        this.messages.push(msg);
      }
    }
    updateConversationPreview(msg, conversationId) {
      if (!conversationId) return;
      const conv = this.conversations.find(c => c.conversationId === conversationId);
      if (!conv) return;
      conv.lastMessage = msg.content;
      conv.lastMessageAt = msg.sentAt;
      conv.lastMessageIsOwn = msg.senderId === this.currentUserId;
    }
    moveConversationToTop(conversationId) {
      const index = this.conversations.findIndex(c => c.conversationId === conversationId);
      if (index <= 0) return;
      const [conv] = this.conversations.splice(index, 1);
      this.conversations.unshift(conv);
    }
    requestScrollToBottom() {
      this.shouldScrollToBottom = true;
    }
    scrollMessagesToBottom() {
      const el = this.messagesContainer?.nativeElement;
      if (!el) return;
      el.scrollTop = el.scrollHeight;
      setTimeout(() => {
        el.scrollTop = el.scrollHeight;
      }, 0);
    }
    static ɵfac = function StudentMessageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || StudentMessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_service_message_message_service__WEBPACK_IMPORTED_MODULE_4__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_5__.CourseService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_service_message_message_realtime_service__WEBPACK_IMPORTED_MODULE_6__.MessageRealtimeService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: StudentMessageComponent,
      selectors: [["app-student-message"]],
      viewQuery: function StudentMessageComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.messagesContainer = _t.first);
        }
      },
      decls: 20,
      vars: 6,
      consts: [["messagesContainer", ""], [1, "student-message"], [1, "page-title"], [1, "row"], [1, "col-lg-5"], [1, "chat-cont-left"], [1, "chat-card", "mb-0", "flex-fill"], [1, "chat-header"], [1, "input-icon"], [1, "input-icon-addon"], [1, "isax", "isax-search-normal-1", "fs-14"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-md"], [1, "chat-body", "chat-users-list", "chat-scroll"], ["class", "text-center py-3", 4, "ngIf"], ["href", "javascript:void(0);", "class", "d-flex justify-content-between align-items-center chat-member", 3, "active", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "col-lg-7", "chat-cont-right", "chat-window-long"], ["class", "d-flex align-items-center justify-content-center h-100", 4, "ngIf"], ["class", "chat-two-card chat-window mb-0 shadow-none flex-fill", 4, "ngIf"], [1, "text-center", "py-3"], [1, "spinner-border", "spinner-border-sm", "text-primary"], [1, "text-muted", "mb-0", "fs-14"], ["href", "javascript:void(0);", 1, "d-flex", "justify-content-between", "align-items-center", "chat-member", 3, "click"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-lg", "avatar-rounded", "flex-shrink-0", "me-2"], ["alt", "User Image", 3, "src"], [1, "fs-16", "fw-medium", "mb-1", "d-flex", "align-items-center"], ["class", "msg-count badge badge-secondary d-flex align-items-center justify-content-center rounded-circle ms-2", 4, "ngIf"], [1, "fs-14", "text-gray-6", "text-truncate"], [1, "msg-count", "badge", "badge-secondary", "d-flex", "align-items-center", "justify-content-center", "rounded-circle", "ms-2"], [1, "px-3", "pt-3", "pb-1"], [1, "text-muted", "fw-semibold", "text-uppercase", 2, "font-size", "11px"], ["href", "javascript:void(0);", "class", "d-flex align-items-center chat-member", 3, "click", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0);", 1, "d-flex", "align-items-center", "chat-member", 3, "click"], ["alt", "", 3, "src"], [1, "flex-grow-1"], [1, "fs-15", "fw-medium", "mb-0"], [1, "text-muted", "fs-13"], ["class", "spinner-border spinner-border-sm text-primary ms-2", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "text-primary", "ms-2"], [1, "d-flex", "align-items-center", "justify-content-center", "h-100"], [1, "text-muted"], [1, "chat-two-card", "chat-window", "mb-0", "shadow-none", "flex-fill"], [1, "border-0", "p-0", "position-relative"], [1, "msg_head"], [1, "d-flex", "bd-highlight", "align-items-center"], ["alt", "User", 3, "src"], [1, "fs-16", "mb-1"], [1, "msg_card_body", "chat-scroll"], [1, "list-unstyled", "p-0"], [4, "ngFor", "ngForOf"], [1, "chat-footer", "border-0", "pt-0"], [1, "chat-input", "me-2"], ["placeholder", "Type your message here...", 1, "form-control", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "btn", "btn-secondary", "btn_send", 3, "click"], ["aria-hidden", "true", 1, "isax", "isax-send-1", "text-white"], ["class", "sent-message-group", 4, "ngIf"], ["class", "media received", 4, "ngIf"], [1, "sent-message-group"], [1, "media", "sent", "d-flex", "align-items-end"], [1, "media-body", "flex-grow-1"], [1, "msg-box"], [1, "d-flex", "align-items-end", "justify-content-end", "mb-1"], [1, "position-relative"], [1, "d-flex", "align-items-center", "justify-content-end", "mb-1"], [1, "mb-0"], [1, "sent-message"], [1, "media", "received"], [1, "d-flex", "align-items-end", "mb-1"], [1, "avatar", "avatar-md", "avatar-rounded", "flex-shrink-0", "me-2"], [1, "d-flex", "align-items-center", "mb-1"], [1, "fs-14", "fw-normal"], [1, "fa-solid", "fa-circle", "text-gray-1", "fs-7", "mx-1"], [1, "received-message", "me-2"]],
      template: function StudentMessageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "h5", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Messages");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, StudentMessageComponent_div_13_Template, 2, 0, "div", 13)(14, StudentMessageComponent_div_14_Template, 3, 0, "div", 13)(15, StudentMessageComponent_a_15_Template, 11, 9, "a", 14)(16, StudentMessageComponent_ng_container_16_Template, 5, 1, "ng-container", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, StudentMessageComponent_div_18_Template, 3, 0, "div", 17)(19, StudentMessageComponent_div_19_Template, 21, 5, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.conversations.length === 0 && ctx.instructors.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.conversations);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.instructors.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.activeConversation);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.activeConversation);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe],
      styles: ["@charset \"UTF-8\";\n\n\n.sent-message[_ngcontent-%COMP%] {\n  background: #4a1d96 !important;\n  color: #ffffff !important;\n  border-radius: 12px 12px 0 12px;\n  padding: 8px 14px;\n}\n.sent-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc3R1ZGVudC9zdHVkZW50LW1lc3NhZ2Uvc3R1ZGVudC1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQix3Q0FBQTtBQUNBO0VBQ0UsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7QUFFRjtBQUFFO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBQUVKIiwic291cmNlc0NvbnRlbnQiOlsiLyogU3R1ZGVudCBzZW50IG1lc3NhZ2VzIMOiwoDClCBkYXJrIHB1cnBsZSAqL1xyXG4uc2VudC1tZXNzYWdlIHtcclxuICBiYWNrZ3JvdW5kOiAjNGExZDk2ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHggMCAxMnB4O1xyXG4gIHBhZGRpbmc6IDhweCAxNHB4O1xyXG5cclxuICBwIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return StudentMessageComponent;
})();

/***/ })

}]);
//# sourceMappingURL=4698.js.map