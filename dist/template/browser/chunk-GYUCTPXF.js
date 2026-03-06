import {
  MessageService
} from "./chunk-ZJTZEPHA.js";
import {
  CourseService
} from "./chunk-C7JGHRMX.js";
import "./chunk-MFSRU4HL.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-VF2E3YWR.js";
import "./chunk-PXFMCAI3.js";
import {
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf
} from "./chunk-YBJXKBE2.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/student/student-message/student-message.component.ts
function StudentMessageComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "div", 19);
    \u0275\u0275elementEnd();
  }
}
function StudentMessageComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "p", 20);
    \u0275\u0275text(2, "No conversations yet");
    \u0275\u0275elementEnd()();
  }
}
function StudentMessageComponent_a_15_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const conv_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(conv_r2.unreadCount);
  }
}
function StudentMessageComponent_a_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 21);
    \u0275\u0275listener("click", function StudentMessageComponent_a_15_Template_a_click_0_listener() {
      const conv_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openConversation(conv_r2));
    });
    \u0275\u0275elementStart(1, "div", 22)(2, "div", 23);
    \u0275\u0275element(3, "img", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h6", 25);
    \u0275\u0275text(6);
    \u0275\u0275template(7, StudentMessageComponent_a_15_span_7_Template, 2, 1, "span", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 27);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const conv_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", (ctx_r2.activeConversation == null ? null : ctx_r2.activeConversation.conversationId) === conv_r2.conversationId);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", conv_r2.otherParticipantAvatar || "assets/img/user/user-01.jpg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", conv_r2.otherParticipantName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", conv_r2.unreadCount > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 6, conv_r2.lastMessageAt, "shortTime"));
  }
}
function StudentMessageComponent_ng_container_16_a_4_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 38);
  }
}
function StudentMessageComponent_ng_container_16_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 32);
    \u0275\u0275listener("click", function StudentMessageComponent_ng_container_16_a_4_Template_a_click_0_listener() {
      const inst_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.contactInstructor(inst_r5));
    });
    \u0275\u0275elementStart(1, "div", 23);
    \u0275\u0275element(2, "img", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 34)(4, "h6", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small", 36);
    \u0275\u0275text(7, "D\xE9marrer une conversation");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, StudentMessageComponent_ng_container_16_a_4_span_8_Template, 1, 0, "span", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const inst_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", inst_r5.avatar || "assets/img/user/user-01.jpg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(inst_r5.name);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.startingConv);
  }
}
function StudentMessageComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 29)(2, "small", 30);
    \u0275\u0275text(3, "Contacter un instructeur");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, StudentMessageComponent_ng_container_16_a_4_Template, 9, 3, "a", 31);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.instructors);
  }
}
function StudentMessageComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "p", 40);
    \u0275\u0275text(2, "Select a conversation to start chatting");
    \u0275\u0275elementEnd()();
  }
}
function StudentMessageComponent_div_19_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "div", 19);
    \u0275\u0275elementEnd();
  }
}
function StudentMessageComponent_div_19_ng_container_12_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 57)(1, "ul")(2, "li", 58)(3, "div", 59)(4, "div", 60)(5, "div", 61)(6, "div", 62)(7, "div", 63)(8, "div", 22)(9, "p", 64);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div")(13, "div", 65)(14, "p");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()()()()()()()();
  }
  if (rf & 2) {
    const msg_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 2, msg_r7.sentAt, "shortTime"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(msg_r7.content);
  }
}
function StudentMessageComponent_div_19_ng_container_12_li_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 66)(1, "div", 67)(2, "div", 68);
    \u0275\u0275element(3, "img", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 59)(5, "div", 69)(6, "h6", 70);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 22);
    \u0275\u0275element(9, "i", 71);
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 60)(14, "div", 62)(15, "div", 22)(16, "div", 72)(17, "p");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    const msg_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r2.activeConversation.otherParticipantAvatar || "assets/img/user/user-01.jpg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.activeConversation.otherParticipantName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 4, msg_r7.sentAt, "shortTime"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(msg_r7.content);
  }
}
function StudentMessageComponent_div_19_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, StudentMessageComponent_div_19_ng_container_12_li_1_Template, 16, 5, "li", 55)(2, StudentMessageComponent_div_19_ng_container_12_li_2_Template, 19, 7, "li", 56);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const msg_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isSent(msg_r7));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isSent(msg_r7));
  }
}
function StudentMessageComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42)(2, "div", 43)(3, "div", 44)(4, "div", 23);
    \u0275\u0275element(5, "img", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "h6", 46);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(9, "div", 47);
    \u0275\u0275template(10, StudentMessageComponent_div_19_div_10_Template, 2, 0, "div", 12);
    \u0275\u0275elementStart(11, "ul", 48);
    \u0275\u0275template(12, StudentMessageComponent_div_19_ng_container_12_Template, 3, 2, "ng-container", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 50)(14, "div", 22)(15, "div", 51)(16, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function StudentMessageComponent_div_19_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newMessage, $event) || (ctx_r2.newMessage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function StudentMessageComponent_div_19_Template_input_keydown_enter_16_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sendMessage());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div")(18, "button", 53);
    \u0275\u0275listener("click", function StudentMessageComponent_div_19_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sendMessage());
    });
    \u0275\u0275element(19, "i", 54);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("src", ctx_r2.activeConversation.otherParticipantAvatar || "assets/img/user/user-01.jpg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.activeConversation.otherParticipantName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.loadingMessages);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.messages);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newMessage);
  }
}
var StudentMessageComponent = class _StudentMessageComponent {
  messageService;
  courseService;
  conversations = [];
  activeConversation = null;
  messages = [];
  newMessage = "";
  loading = true;
  loadingMessages = false;
  currentUserId = 0;
  // Instructeurs suggérés (depuis les cours inscrits)
  instructors = [];
  startingConv = false;
  constructor(messageService, courseService) {
    this.messageService = messageService;
    this.courseService = courseService;
    this.currentUserId = parseInt(localStorage.getItem("id") || "0", 10);
  }
  ngOnInit() {
    this.loadConversations();
    this.loadInstructors();
  }
  loadInstructors() {
    this.courseService.getMyEnrolledCourses().subscribe({
      next: (courses) => {
        const map = /* @__PURE__ */ new Map();
        for (const c of courses) {
          if (c.instructorId && !map.has(c.instructorId)) {
            map.set(c.instructorId, {
              id: c.instructorId,
              name: c.instructorName || "Instructeur",
              avatar: c.instructorAvatar || ""
            });
          }
        }
        this.instructors = Array.from(map.values());
      },
      error: () => {
      }
    });
  }
  contactInstructor(instructor) {
    this.startingConv = true;
    this.messageService.getOrCreateConversation(instructor.id).subscribe({
      next: (conv) => {
        this.startingConv = false;
        this.messageService.getConversations().subscribe({
          next: (data) => {
            this.conversations = data;
            const found = data.find((c) => c.conversationId === conv.conversationId || c.conversationId === conv.id);
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
      next: (data) => {
        this.conversations = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  openConversation(conv) {
    this.activeConversation = conv;
    this.loadingMessages = true;
    this.messageService.getMessages(conv.conversationId).subscribe({
      next: (data) => {
        this.messages = data;
        this.loadingMessages = false;
      },
      error: () => {
        this.loadingMessages = false;
      }
    });
    if (conv.unreadCount > 0) {
      this.messageService.markAsRead(conv.conversationId).subscribe();
      conv.unreadCount = 0;
    }
  }
  sendMessage() {
    if (!this.newMessage.trim() || !this.activeConversation)
      return;
    const content = this.newMessage.trim();
    this.newMessage = "";
    this.messageService.sendMessage(this.activeConversation.conversationId, { content, messageType: "TEXT" }).subscribe({
      next: (msg) => {
        this.messages.push(msg);
      }
    });
  }
  isSent(msg) {
    return msg.senderId === this.currentUserId;
  }
  static \u0275fac = function StudentMessageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentMessageComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(CourseService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentMessageComponent, selectors: [["app-student-message"]], decls: 20, vars: 6, consts: [[1, "student-message"], [1, "page-title"], [1, "row"], [1, "col-lg-5"], [1, "chat-cont-left"], [1, "chat-card", "mb-0", "flex-fill"], [1, "chat-header"], [1, "input-icon"], [1, "input-icon-addon"], [1, "isax", "isax-search-normal-1", "fs-14"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-md"], [1, "chat-body", "chat-users-list", "chat-scroll"], ["class", "text-center py-3", 4, "ngIf"], ["href", "javascript:void(0);", "class", "d-flex justify-content-between align-items-center chat-member", 3, "active", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "col-lg-7", "chat-cont-right", "chat-window-long"], ["class", "d-flex align-items-center justify-content-center h-100", 4, "ngIf"], ["class", "chat-two-card chat-window mb-0 shadow-none flex-fill", 4, "ngIf"], [1, "text-center", "py-3"], [1, "spinner-border", "spinner-border-sm", "text-primary"], [1, "text-muted", "mb-0", "fs-14"], ["href", "javascript:void(0);", 1, "d-flex", "justify-content-between", "align-items-center", "chat-member", 3, "click"], [1, "d-flex", "align-items-center"], [1, "avatar", "avatar-lg", "avatar-rounded", "flex-shrink-0", "me-2"], ["alt", "User Image", 3, "src"], [1, "fs-16", "fw-medium", "mb-1", "d-flex", "align-items-center"], ["class", "msg-count badge badge-secondary d-flex align-items-center justify-content-center rounded-circle ms-2", 4, "ngIf"], [1, "fs-14", "text-gray-6", "text-truncate"], [1, "msg-count", "badge", "badge-secondary", "d-flex", "align-items-center", "justify-content-center", "rounded-circle", "ms-2"], [1, "px-3", "pt-3", "pb-1"], [1, "text-muted", "fw-semibold", "text-uppercase", 2, "font-size", "11px"], ["href", "javascript:void(0);", "class", "d-flex align-items-center chat-member", 3, "click", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0);", 1, "d-flex", "align-items-center", "chat-member", 3, "click"], ["alt", "", 3, "src"], [1, "flex-grow-1"], [1, "fs-15", "fw-medium", "mb-0"], [1, "text-muted", "fs-13"], ["class", "spinner-border spinner-border-sm text-primary ms-2", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "text-primary", "ms-2"], [1, "d-flex", "align-items-center", "justify-content-center", "h-100"], [1, "text-muted"], [1, "chat-two-card", "chat-window", "mb-0", "shadow-none", "flex-fill"], [1, "border-0", "p-0", "position-relative"], [1, "msg_head"], [1, "d-flex", "bd-highlight", "align-items-center"], ["alt", "User", 3, "src"], [1, "fs-16", "mb-1"], [1, "msg_card_body", "chat-scroll"], [1, "list-unstyled", "p-0"], [4, "ngFor", "ngForOf"], [1, "chat-footer", "border-0", "pt-0"], [1, "chat-input", "me-2"], ["placeholder", "Type your message here...", 1, "form-control", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "btn", "btn-secondary", "btn_send", 3, "click"], ["aria-hidden", "true", 1, "isax", "isax-send-1", "text-white"], ["class", "sent-message-group", 4, "ngIf"], ["class", "media received", 4, "ngIf"], [1, "sent-message-group"], [1, "media", "sent", "d-flex", "align-items-end"], [1, "media-body", "flex-grow-1"], [1, "msg-box"], [1, "d-flex", "align-items-end", "justify-content-end", "mb-1"], [1, "position-relative"], [1, "d-flex", "align-items-center", "justify-content-end", "mb-1"], [1, "mb-0"], [1, "sent-message"], [1, "media", "received"], [1, "d-flex", "align-items-end", "mb-1"], [1, "avatar", "avatar-md", "avatar-rounded", "flex-shrink-0", "me-2"], [1, "d-flex", "align-items-center", "mb-1"], [1, "fs-14", "fw-normal"], [1, "fa-solid", "fa-circle", "text-gray-1", "fs-7", "mx-1"], [1, "received-message", "me-2"]], template: function StudentMessageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h5", 1);
      \u0275\u0275text(2, "Messages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "span", 8);
      \u0275\u0275element(10, "i", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "input", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 11);
      \u0275\u0275template(13, StudentMessageComponent_div_13_Template, 2, 0, "div", 12)(14, StudentMessageComponent_div_14_Template, 3, 0, "div", 12)(15, StudentMessageComponent_a_15_Template, 11, 9, "a", 13)(16, StudentMessageComponent_ng_container_16_Template, 5, 1, "ng-container", 14);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(17, "div", 15);
      \u0275\u0275template(18, StudentMessageComponent_div_18_Template, 3, 0, "div", 16)(19, StudentMessageComponent_div_19_Template, 20, 5, "div", 17);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.conversations.length === 0 && ctx.instructors.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.conversations);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.instructors.length > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.activeConversation);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeConversation);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DatePipe], styles: ['@charset "UTF-8";\n\n\n\n.sent-message[_ngcontent-%COMP%] {\n  background: #4a1d96 !important;\n  color: #ffffff !important;\n  border-radius: 12px 12px 0 12px;\n  padding: 8px 14px;\n}\n.sent-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=student-message.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentMessageComponent, [{
    type: Component,
    args: [{ selector: "app-student-message", imports: [CommonModule, FormsModule, DatePipe], template: `<div class="student-message">
    <h5 class="page-title">Messages</h5>
    <div class="row">

        <!-- Chat User List -->
        <div class="col-lg-5">
        <div class="chat-cont-left">
            <div class="chat-card mb-0 flex-fill">
                <div class="chat-header">
                    <div class="input-icon">
                        <span class="input-icon-addon">
                            <i class="isax isax-search-normal-1 fs-14"></i>
                        </span>
                        <input type="text" class="form-control form-control-md" placeholder="Search">
                    </div>
                </div>
                <div class="chat-body chat-users-list chat-scroll">
                    <div *ngIf="loading" class="text-center py-3">
                        <div class="spinner-border spinner-border-sm text-primary"></div>
                    </div>
                    <div *ngIf="!loading && conversations.length === 0 && instructors.length === 0" class="text-center py-3">
                        <p class="text-muted mb-0 fs-14">No conversations yet</p>
                    </div>
                    <a href="javascript:void(0);" class="d-flex justify-content-between align-items-center chat-member"
                       *ngFor="let conv of conversations"
                       [class.active]="activeConversation?.conversationId === conv.conversationId"
                       (click)="openConversation(conv)">
                        <div class="d-flex align-items-center">
                            <div class="avatar avatar-lg avatar-rounded flex-shrink-0 me-2">
                                <img [src]="conv.otherParticipantAvatar || 'assets/img/user/user-01.jpg'" alt="User Image">
                            </div>
                            <div>
                                <h6 class="fs-16 fw-medium mb-1 d-flex align-items-center">
                                    {{ conv.otherParticipantName }}
                                    <span *ngIf="conv.unreadCount > 0" class="msg-count badge badge-secondary d-flex align-items-center justify-content-center rounded-circle ms-2">{{ conv.unreadCount }}</span>
                                </h6>
                                <p class="fs-14 text-gray-6 text-truncate">{{ conv.lastMessageAt | date:'shortTime' }}</p>
                            </div>
                        </div>
                    </a>

                    <!-- Instructeurs sugg\xE9r\xE9s (si pas encore de conversation avec eux) -->
                    <ng-container *ngIf="instructors.length > 0">
                        <div class="px-3 pt-3 pb-1">
                            <small class="text-muted fw-semibold text-uppercase" style="font-size:11px;">Contacter un instructeur</small>
                        </div>
                        <a href="javascript:void(0);" class="d-flex align-items-center chat-member"
                           *ngFor="let inst of instructors"
                           (click)="contactInstructor(inst)">
                            <div class="avatar avatar-lg avatar-rounded flex-shrink-0 me-2">
                                <img [src]="inst.avatar || 'assets/img/user/user-01.jpg'" alt="">
                            </div>
                            <div class="flex-grow-1">
                                <h6 class="fs-15 fw-medium mb-0">{{ inst.name }}</h6>
                                <small class="text-muted fs-13">D\xE9marrer une conversation</small>
                            </div>
                            <span *ngIf="startingConv" class="spinner-border spinner-border-sm text-primary ms-2"></span>
                        </a>
                    </ng-container>
                </div>
            </div>
        </div>
        </div>
        <!-- /Chat User List -->

        <!-- Chat Content -->
        <div class="col-lg-7 chat-cont-right chat-window-long">
            <div *ngIf="!activeConversation" class="d-flex align-items-center justify-content-center h-100">
                <p class="text-muted">Select a conversation to start chatting</p>
            </div>

            <div *ngIf="activeConversation" class="chat-two-card chat-window mb-0 shadow-none flex-fill">
                <div class="border-0 p-0 position-relative">
                    <div class="msg_head">
                        <div class="d-flex bd-highlight align-items-center">
                            <div class="avatar avatar-lg avatar-rounded flex-shrink-0 me-2">
                                <img [src]="activeConversation.otherParticipantAvatar || 'assets/img/user/user-01.jpg'" alt="User">
                            </div>
                            <div>
                                <h6 class="fs-16 mb-1">{{ activeConversation.otherParticipantName }}</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="msg_card_body chat-scroll">
                    <div *ngIf="loadingMessages" class="text-center py-3">
                        <div class="spinner-border spinner-border-sm text-primary"></div>
                    </div>
                    <ul class="list-unstyled p-0">
                        <ng-container *ngFor="let msg of messages">
                            <!-- Sent -->
                            <li *ngIf="isSent(msg)" class="sent-message-group">
                                <ul>
                                    <li class="media sent d-flex align-items-end">
                                        <div class="media-body flex-grow-1">
                                            <div class="msg-box">
                                                <div class="d-flex align-items-end justify-content-end mb-1">
                                                    <div class="position-relative">
                                                        <div class="d-flex align-items-center justify-content-end mb-1">
                                                            <div class="d-flex align-items-center">
                                                                <p class="mb-0">{{ msg.sentAt | date:'shortTime' }}</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div class="sent-message">
                                                                <p>{{ msg.content }}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <!-- Received -->
                            <li *ngIf="!isSent(msg)" class="media received">
                                <div class="d-flex align-items-end mb-1">
                                    <div class="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                                        <img [src]="activeConversation.otherParticipantAvatar || 'assets/img/user/user-01.jpg'" alt="">
                                    </div>
                                    <div class="media-body flex-grow-1">
                                        <div class="d-flex align-items-center mb-1">
                                            <h6 class="fs-14 fw-normal">{{ activeConversation.otherParticipantName }}</h6>
                                            <div class="d-flex align-items-center">
                                                <i class="fa-solid fa-circle text-gray-1 fs-7 mx-1"></i>
                                                <p>{{ msg.sentAt | date:'shortTime' }}</p>
                                            </div>
                                        </div>
                                        <div class="msg-box">
                                            <div class="position-relative">
                                                <div class="d-flex align-items-center">
                                                    <div class="received-message me-2">
                                                        <p>{{ msg.content }}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ng-container>
                    </ul>
                </div>
                <div class="chat-footer border-0 pt-0">
                    <div class="d-flex align-items-center">
                        <div class="chat-input me-2">
                            <input class="form-control" placeholder="Type your message here..." [(ngModel)]="newMessage" (keydown.enter)="sendMessage()">
                        </div>
                        <div>
                            <button class="btn btn-secondary btn_send" (click)="sendMessage()"><i class="isax isax-send-1 text-white" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Chat Content -->
    </div>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/student/student-message/student-message.component.scss */\n.sent-message {\n  background: #4a1d96 !important;\n  color: #ffffff !important;\n  border-radius: 12px 12px 0 12px;\n  padding: 8px 14px;\n}\n.sent-message p {\n  color: #ffffff !important;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=student-message.component.css.map */\n'] }]
  }], () => [{ type: MessageService }, { type: CourseService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentMessageComponent, { className: "StudentMessageComponent", filePath: "src/app/features/student/student-message/student-message.component.ts", lineNumber: 13 });
})();
export {
  StudentMessageComponent
};
//# sourceMappingURL=chunk-GYUCTPXF.js.map
