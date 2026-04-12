"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[2076],{

/***/ 6238:
/*!*********************************************************!*\
  !*** ./src/app/shared/service/ticket/ticket.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TicketService: () => (/* binding */ TicketService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 63855);



let TicketService = /*#__PURE__*/(() => {
  class TicketService {
    http;
    api = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    constructor(http) {
      this.http = http;
    }
    getMyTickets() {
      return this.http.get(`${this.api}/user/tickets`);
    }
    createTicket(data) {
      return this.http.post(`${this.api}/user/tickets`, data);
    }
    updateTicket(id, data) {
      return this.http.put(`${this.api}/user/tickets/${id}`, data);
    }
    deleteTicket(id) {
      return this.http.delete(`${this.api}/user/tickets/${id}`);
    }
    static ɵfac = function TicketService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TicketService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: TicketService,
      factory: TicketService.ɵfac,
      providedIn: 'root'
    });
  }
  return TicketService;
})();

/***/ }),

/***/ 6816:
/*!************************************************************************!*\
  !*** ./src/app/features/superadmin/services/superadmin-api.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuperAdminApiService: () => (/* binding */ SuperAdminApiService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 63855);



let SuperAdminApiService = /*#__PURE__*/(() => {
  class SuperAdminApiService {
    http;
    apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    constructor(http) {
      this.http = http;
    }
    // ─── Stats ────────────────────────────────────────────────────────────────
    getSuperStats() {
      return this.http.get(`${this.apiUrl}/superadmin/stats`);
    }
    getAdminStats() {
      return this.http.get(`${this.apiUrl}/admin/stats`);
    }
    // ─── Users ────────────────────────────────────────────────────────────────
    getAllUsers() {
      return this.http.get(`${this.apiUrl}/superadmin/users`);
    }
    deleteUser(id) {
      return this.http.delete(`${this.apiUrl}/superadmin/users/${id}`, {
        responseType: 'text'
      });
    }
    toggleBlock(id) {
      return this.http.put(`${this.apiUrl}/superadmin/users/${id}/toggle-block`, {});
    }
    changeUserRole(id, role) {
      return this.http.put(`${this.apiUrl}/superadmin/users/${id}/change-role?role=${role}`, {});
    }
    createAccount(data) {
      return this.http.post(`${this.apiUrl}/superadmin/users/create-account`, data);
    }
    addSecondaryRole(userId, role) {
      return this.http.post(`${this.apiUrl}/superadmin/users/${userId}/secondary-roles/${role}`, {});
    }
    removeSecondaryRole(userId, role) {
      return this.http.delete(`${this.apiUrl}/superadmin/users/${userId}/secondary-roles/${role}`);
    }
    static ɵfac = function SuperAdminApiService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SuperAdminApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: SuperAdminApiService,
      factory: SuperAdminApiService.ɵfac,
      providedIn: 'root'
    });
  }
  return SuperAdminApiService;
})();

/***/ }),

/***/ 7512:
/*!*****************************************************!*\
  !*** ./src/app/shared/service/quiz/quiz.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuizService: () => (/* binding */ QuizService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 63855);



let QuizService = /*#__PURE__*/(() => {
  class QuizService {
    http;
    apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    constructor(http) {
      this.http = http;
    }
    // ═══════════════════════════════════════════════════════════════════════
    //  INSTRUCTOR
    // ═══════════════════════════════════════════════════════════════════════
    getInstructorQuizzes() {
      return this.http.get(`${this.apiUrl}/instructor/quiz`);
    }
    getQuizzesByCourse(courseId) {
      return this.http.get(`${this.apiUrl}/instructor/quiz/course/${courseId}`);
    }
    getQuizByLesson(lessonId) {
      return this.http.get(`${this.apiUrl}/instructor/quiz/lesson/${lessonId}`);
    }
    createQuiz(data) {
      return this.http.post(`${this.apiUrl}/instructor/quiz`, data);
    }
    updateQuiz(quizId, data) {
      return this.http.put(`${this.apiUrl}/instructor/quiz/${quizId}`, data);
    }
    deleteQuiz(quizId) {
      return this.http.delete(`${this.apiUrl}/instructor/quiz/${quizId}`, {
        responseType: 'text'
      });
    }
    // Questions
    getQuestions(quizId) {
      return this.http.get(`${this.apiUrl}/instructor/quiz/${quizId}/questions`);
    }
    addQuestion(quizId, data) {
      return this.http.post(`${this.apiUrl}/instructor/quiz/${quizId}/questions`, data);
    }
    updateQuestion(questionId, data) {
      return this.http.put(`${this.apiUrl}/instructor/quiz/questions/${questionId}`, data);
    }
    deleteQuestion(questionId) {
      return this.http.delete(`${this.apiUrl}/instructor/quiz/questions/${questionId}`, {
        responseType: 'text'
      });
    }
    // Résultats
    getQuizResults(quizId) {
      return this.http.get(`${this.apiUrl}/instructor/quiz/${quizId}/results`);
    }
    getAttemptDetailInstructor(attemptId) {
      return this.http.get(`${this.apiUrl}/instructor/quiz/attempt/${attemptId}`);
    }
    // ═══════════════════════════════════════════════════════════════════════
    //  STUDENT
    // ═══════════════════════════════════════════════════════════════════════
    getStudentQuizzes(courseId) {
      return this.http.get(`${this.apiUrl}/student/quiz/course/${courseId}`);
    }
    getAllStudentQuizzes() {
      return this.http.get(`${this.apiUrl}/student/quiz/all`);
    }
    startQuiz(quizId) {
      return this.http.get(`${this.apiUrl}/student/quiz/${quizId}/start`);
    }
    submitQuiz(quizId, data) {
      return this.http.post(`${this.apiUrl}/student/quiz/${quizId}/submit`, data);
    }
    getAttemptDetailStudent(attemptId) {
      return this.http.get(`${this.apiUrl}/student/quiz/attempt/${attemptId}`);
    }
    static ɵfac = function QuizService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || QuizService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: QuizService,
      factory: QuizService.ɵfac,
      providedIn: 'root'
    });
  }
  return QuizService;
})();

/***/ }),

/***/ 9490:
/*!*************************************************!*\
  !*** ./src/app/shared/service/qa/qa.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QaService: () => (/* binding */ QaService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 63855);



let QaService = /*#__PURE__*/(() => {
  class QaService {
    http;
    apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    constructor(http) {
      this.http = http;
    }
    // Questions
    askQuestion(data) {
      return this.http.post(`${this.apiUrl}/user/qa/questions`, data);
    }
    getQuestionsByCourse(courseId) {
      return this.http.get(`${this.apiUrl}/user/qa/course/${courseId}`);
    }
    getQuestionsByLesson(lessonId) {
      return this.http.get(`${this.apiUrl}/user/qa/lesson/${lessonId}`);
    }
    getQuestionDetail(questionId) {
      return this.http.get(`${this.apiUrl}/user/qa/questions/${questionId}`);
    }
    deleteQuestion(questionId) {
      return this.http.delete(`${this.apiUrl}/user/qa/questions/${questionId}`, {
        responseType: 'text'
      });
    }
    updateQuestion(questionId, data) {
      return this.http.put(`${this.apiUrl}/user/qa/questions/${questionId}`, data);
    }
    /** Toutes les questions posées par l'utilisateur connecté */
    getMyQuestions() {
      return this.http.get(`${this.apiUrl}/user/qa/my-questions`);
    }
    // Réponses
    answerQuestion(questionId, data) {
      return this.http.post(`${this.apiUrl}/user/qa/questions/${questionId}/answers`, data);
    }
    deleteAnswer(answerId) {
      return this.http.delete(`${this.apiUrl}/user/qa/answers/${answerId}`, {
        responseType: 'text'
      });
    }
    updateAnswer(answerId, data) {
      return this.http.put(`${this.apiUrl}/user/qa/answers/${answerId}`, data);
    }
    static ɵfac = function QaService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || QaService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: QaService,
      factory: QaService.ɵfac,
      providedIn: 'root'
    });
  }
  return QaService;
})();

/***/ }),

/***/ 19240:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/interval.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   interval: () => (/* binding */ interval)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 18473);
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer */ 14876);


function interval(period = 0, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  if (period < 0) {
    period = 0;
  }
  return (0,_timer__WEBPACK_IMPORTED_MODULE_1__.timer)(period, period, scheduler);
}

/***/ }),

/***/ 23181:
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/avatar-fallback/avatar-fallback.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AvatarFallbackComponent: () => (/* binding */ AvatarFallbackComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 12481);


function AvatarFallbackComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](0, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomListener"]("error", function AvatarFallbackComponent_Conditional_0_Template_img_error_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onImageError());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomProperty"]("src", ctx_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", ctx_r1.name);
  }
}
function AvatarFallbackComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("avatar-fallback " + ctx_r1.sizeClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background", ctx_r1.backgroundGradient)("width", ctx_r1.sizePixels, "px")("height", ctx_r1.sizePixels, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.getInitial(ctx_r1.name), " ");
  }
}
let AvatarFallbackComponent = /*#__PURE__*/(() => {
  class AvatarFallbackComponent {
    imageUrl = null;
    name = 'User';
    size = 'md';
    sizeMap = {
      sm: 32,
      md: 48,
      lg: 120,
      xl: 160
    };
    // Gradient violet comme dans le header
    backgroundGradient = 'linear-gradient(135deg, #6366f1, #8b5cf6)';
    get sizePixels() {
      return this.sizeMap[this.size] || this.sizeMap['md'];
    }
    get sizeClass() {
      return this.size;
    }
    getInitial(name) {
      return name && name.length > 0 ? name.charAt(0).toUpperCase() : '?';
    }
    onImageError() {
      this.imageUrl = null;
    }
    static ɵfac = function AvatarFallbackComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AvatarFallbackComponent)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AvatarFallbackComponent,
      selectors: [["app-avatar-fallback"]],
      inputs: {
        imageUrl: "imageUrl",
        name: "name",
        size: "size"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "avatar-image", 3, "src", "alt"], [3, "class", "background", "width", "height"], [1, "avatar-image", 3, "error", "src", "alt"]],
      template: function AvatarFallbackComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditionalCreate"](0, AvatarFallbackComponent_Conditional_0_Template, 1, 2, "img", 0)(1, AvatarFallbackComponent_Conditional_1_Template, 2, 9, "div", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.imageUrl ? 0 : 1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule],
      styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n}\n\n.avatar-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n  display: block;\n}\n\n.avatar-fallback[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n  font-family: inherit;\n}\n\n.avatar-fallback.sm[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.avatar-fallback.md[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.avatar-fallback.lg[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.avatar-fallback.xl[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYXZhdGFyLWZhbGxiYWNrL2F2YXRhci1mYWxsYmFjay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxxQkFBQTtBQUFOOztBQUdJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUFOOztBQUdJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUFOOztBQUdJO0VBQ0UsZUFBQTtBQUFOOztBQUdJO0VBQ0UsZUFBQTtBQUFOOztBQUdJO0VBQ0UsZUFBQTtBQUFOOztBQUdJO0VBQ0UsZUFBQTtBQUFOIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cblxuICAgIC5hdmF0YXItaW1hZ2Uge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5hdmF0YXItZmFsbGJhY2sge1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgfVxuXG4gICAgLmF2YXRhci1mYWxsYmFjay5zbSB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuXG4gICAgLmF2YXRhci1mYWxsYmFjay5tZCB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgLmF2YXRhci1mYWxsYmFjay5sZyB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuXG4gICAgLmF2YXRhci1mYWxsYmFjay54bCB7XG4gICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return AvatarFallbackComponent;
})();

/***/ }),

/***/ 27890:
/*!**********************************************!*\
  !*** ./src/app/shared/pipe/safe-url.pipe.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SafeUrlPipe: () => (/* binding */ SafeUrlPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 80436);


let SafeUrlPipe = /*#__PURE__*/(() => {
  class SafeUrlPipe {
    sanitizer;
    constructor(sanitizer) {
      this.sanitizer = sanitizer;
    }
    transform(url) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    static ɵfac = function SafeUrlPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SafeUrlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
    };
    static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "safeUrl",
      type: SafeUrlPipe,
      pure: true
    });
  }
  return SafeUrlPipe;
})();

/***/ }),

/***/ 28768:
/*!***************************************************************!*\
  !*** ./src/app/shared/service/detection/detection.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetectionService: () => (/* binding */ DetectionService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 63855);




let DetectionService = /*#__PURE__*/(() => {
  class DetectionService {
    http;
    apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
    ws = null;
    wsUrl = 'ws://localhost:5001/ws/detect';
    /** Observable that emits each detection result from the WebSocket */
    detection$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    /** Whether the WebSocket is currently connected */
    connected = false;
    constructor(http) {
      this.http = http;
    }
    // ═══ WebSocket ═══
    connectWebSocket() {
      if (this.ws && this.ws.readyState === WebSocket.OPEN) return;
      this.ws = new WebSocket(this.wsUrl);
      this.ws.onopen = () => {
        this.connected = true;
        console.log('[CV] WebSocket connected');
      };
      this.ws.onmessage = event => {
        try {
          const result = JSON.parse(event.data);
          this.detection$.next(result);
        } catch (e) {
          console.error('[CV] Failed to parse detection result', e);
        }
      };
      this.ws.onerror = err => {
        console.error('[CV] WebSocket error', err);
      };
      this.ws.onclose = () => {
        this.connected = false;
        console.log('[CV] WebSocket disconnected');
      };
    }
    sendFrame(base64Frame) {
      if (this.ws && this.ws.readyState === WebSocket.OPEN) {
        this.ws.send(JSON.stringify({
          frame: base64Frame
        }));
      }
    }
    disconnectWebSocket() {
      if (this.ws) {
        this.ws.close();
        this.ws = null;
        this.connected = false;
      }
    }
    // ═══ REST API — Student ═══
    saveRemark(body) {
      return this.http.post(`${this.apiUrl}/detection-remarks`, body);
    }
    getMyRemarks(courseId) {
      return this.http.get(`${this.apiUrl}/detection-remarks/my`, {
        params: {
          courseId: courseId.toString()
        }
      });
    }
    // ═══ REST API — Admin ═══
    getAdminSummary() {
      return this.http.get(`${this.apiUrl}/admin/detection-remarks/summary`);
    }
    getRemarksByStudent(studentId) {
      return this.http.get(`${this.apiUrl}/admin/detection-remarks/by-student`, {
        params: {
          studentId: studentId.toString()
        }
      });
    }
    getRemarksByCourse(courseId) {
      return this.http.get(`${this.apiUrl}/admin/detection-remarks/by-course`, {
        params: {
          courseId: courseId.toString()
        }
      });
    }
    getRemarksByStudentAndCourse(studentId, courseId) {
      return this.http.get(`${this.apiUrl}/admin/detection-remarks/by-student-course`, {
        params: {
          studentId: studentId.toString(),
          courseId: courseId.toString()
        }
      });
    }
    // ═══ REST API — Instructor ═══
    getInstructorRemarksByCourse(courseId) {
      return this.http.get(`${this.apiUrl}/instructor/detection-remarks/by-course`, {
        params: {
          courseId: courseId.toString()
        }
      });
    }
    getInstructorRemarksByStudentCourse(studentId, courseId) {
      return this.http.get(`${this.apiUrl}/instructor/detection-remarks/by-student-course`, {
        params: {
          studentId: studentId.toString(),
          courseId: courseId.toString()
        }
      });
    }
    static ɵfac = function DetectionService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DetectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: DetectionService,
      factory: DetectionService.ɵfac,
      providedIn: 'root'
    });
  }
  return DetectionService;
})();

/***/ }),

/***/ 31224:
/*!*******************************************************************!*\
  !*** ./src/app/shared/service/certificate/certificate.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CertificateService: () => (/* binding */ CertificateService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 63855);



let CertificateService = /*#__PURE__*/(() => {
  class CertificateService {
    http;
    api = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    constructor(http) {
      this.http = http;
    }
    getMyCertificates() {
      return this.http.get(`${this.api}/student/certificates`);
    }
    generateCertificate(courseId) {
      return this.http.post(`${this.api}/student/certificates/generate/${courseId}`, {});
    }
    getCertificateById(id) {
      return this.http.get(`${this.api}/student/certificates/${id}`);
    }
    /** Public — no auth needed */
    verifyByCode(code) {
      return this.http.get(`${this.api}/courses/certificates/verify/${code}`);
    }
    /** Instructor — list all certs issued for instructor's courses */
    getInstructorCertificates() {
      return this.http.get(`${this.api}/instructor/certificates`);
    }
    static ɵfac = function CertificateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CertificateService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CertificateService,
      factory: CertificateService.ɵfac,
      providedIn: 'root'
    });
  }
  return CertificateService;
})();

/***/ }),

/***/ 39511:
/*!******************************************************!*\
  !*** ./src/app/shared/pipe/capitalize-words.pipe.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CapitalizeWordsPipe: () => (/* binding */ CapitalizeWordsPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 12481);

let CapitalizeWordsPipe = /*#__PURE__*/(() => {
  class CapitalizeWordsPipe {
    transform(value) {
      if (!value) {
        return '';
      }
      return value.split('-') // Split the string by hyphens
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(' '); // Join the words with spaces
    }
    static ɵfac = function CapitalizeWordsPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CapitalizeWordsPipe)();
    };
    static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "capitalizeWords",
      type: CapitalizeWordsPipe,
      pure: true
    });
  }
  return CapitalizeWordsPipe;
})();

/***/ }),

/***/ 40376:
/*!***********************************************************!*\
  !*** ./src/app/shared/service/message/message.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageService: () => (/* binding */ MessageService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 63855);



let MessageService = /*#__PURE__*/(() => {
  class MessageService {
    http;
    apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    constructor(http) {
      this.http = http;
    }
    getConversations() {
      return this.http.get(`${this.apiUrl}/user/messages/conversations`);
    }
    getOrCreateConversation(otherUserId) {
      return this.http.post(`${this.apiUrl}/user/messages/conversations/${otherUserId}`, {});
    }
    getMessages(conversationId) {
      return this.http.get(`${this.apiUrl}/user/messages/conversations/${conversationId}/messages`);
    }
    sendMessage(conversationId, data) {
      return this.http.post(`${this.apiUrl}/user/messages/conversations/${conversationId}/messages`, data);
    }
    markAsRead(conversationId) {
      return this.http.put(`${this.apiUrl}/user/messages/conversations/${conversationId}/read`, {}, {
        responseType: 'text'
      });
    }
    getUnreadCount() {
      return this.http.get(`${this.apiUrl}/user/messages/unread-count`);
    }
    static ɵfac = function MessageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: MessageService,
      factory: MessageService.ɵfac,
      providedIn: 'root'
    });
  }
  return MessageService;
})();

/***/ }),

/***/ 52492:
/*!***************************************************************!*\
  !*** ./src/app/shared/service/challenge/challenge.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChallengeService: () => (/* binding */ ChallengeService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 63855);



let ChallengeService = /*#__PURE__*/(() => {
  class ChallengeService {
    http;
    apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    constructor(http) {
      this.http = http;
    }
    getChallenges() {
      return this.http.get(`${this.apiUrl}/student/challenges`);
    }
    exchangePoints(tier) {
      return this.http.post(`${this.apiUrl}/student/challenges/exchange`, {
        tier
      });
    }
    getCoupons() {
      return this.http.get(`${this.apiUrl}/student/challenges/coupons`);
    }
    validateCoupon(couponCode) {
      return this.http.post(`${this.apiUrl}/student/challenges/validate-coupon`, {
        couponCode
      });
    }
    static ɵfac = function ChallengeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ChallengeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ChallengeService,
      factory: ChallengeService.ɵfac,
      providedIn: 'root'
    });
  }
  return ChallengeService;
})();

/***/ }),

/***/ 57554:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/service/notification/notification-actions.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationActionsService: () => (/* binding */ NotificationActionsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34205);


let NotificationActionsService = /*#__PURE__*/(() => {
  class NotificationActionsService {
    actions$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    triggerMarkAllAsRead() {
      this.actions$.next('mark-all-read');
    }
    triggerDeleteAll() {
      this.actions$.next('delete-all');
    }
    static ɵfac = function NotificationActionsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NotificationActionsService)();
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: NotificationActionsService,
      factory: NotificationActionsService.ɵfac,
      providedIn: 'root'
    });
  }
  return NotificationActionsService;
})();

/***/ }),

/***/ 60452:
/*!***************************************************************!*\
  !*** ./src/app/shared/service/analytics/analytics.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyticsService: () => (/* binding */ AnalyticsService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 63855);



let AnalyticsService = /*#__PURE__*/(() => {
  class AnalyticsService {
    http;
    apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    constructor(http) {
      this.http = http;
    }
    /** Analytics pédagogiques Instructor */
    getInstructorAnalytics() {
      return this.http.get(`${this.apiUrl}/instructor/analytics`);
    }
    /** Analytics stratégiques Admin */
    getAdminAnalytics() {
      return this.http.get(`${this.apiUrl}/admin/analytics`);
    }
    static ɵfac = function AnalyticsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AnalyticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AnalyticsService,
      factory: AnalyticsService.ɵfac,
      providedIn: 'root'
    });
  }
  return AnalyticsService;
})();

/***/ }),

/***/ 64280:
/*!***************************************************************!*\
  !*** ./src/app/shared/service/recruiter/recruiter.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecruiterService: () => (/* binding */ RecruiterService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 63855);



let RecruiterService = /*#__PURE__*/(() => {
  class RecruiterService {
    http;
    apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    constructor(http) {
      this.http = http;
    }
    // ── Stats & Profiles ──────────────────────────────────────────────────────
    getStats() {
      return this.http.get(`${this.apiUrl}/recruiter/stats`);
    }
    getSharedProfiles() {
      return this.http.get(`${this.apiUrl}/recruiter/shared-profiles`);
    }
    // ── Certified Students ────────────────────────────────────────────────────
    getCertifiedStudents(search = '') {
      const params = search ? `?search=${encodeURIComponent(search)}` : '';
      return this.http.get(`${this.apiUrl}/recruiter/certified-students${params}`);
    }
    // ── Job Offers ────────────────────────────────────────────────────────────
    getJobOffers() {
      return this.http.get(`${this.apiUrl}/recruiter/job-offers`);
    }
    /** Toutes les offres ACTIVE publiées — accessible aux étudiants */
    getPublicJobOffers(type) {
      const params = type ? `?type=${encodeURIComponent(type)}` : '';
      return this.http.get(`${this.apiUrl}/student/job-offers${params}`);
    }
    createJobOffer(data) {
      return this.http.post(`${this.apiUrl}/recruiter/job-offers`, data);
    }
    updateJobOffer(id, data) {
      return this.http.put(`${this.apiUrl}/recruiter/job-offers/${id}`, data);
    }
    deleteJobOffer(id) {
      return this.http.delete(`${this.apiUrl}/recruiter/job-offers/${id}`);
    }
    // ── Messaging ─────────────────────────────────────────────────────────────
    getConversations() {
      return this.http.get(`${this.apiUrl}/recruiter/conversations`);
    }
    startConversation(studentId) {
      return this.http.post(`${this.apiUrl}/recruiter/conversations/${studentId}`, {});
    }
    getMessages(conversationId) {
      return this.http.get(`${this.apiUrl}/recruiter/conversations/${conversationId}/messages`);
    }
    sendMessage(conversationId, content) {
      return this.http.post(`${this.apiUrl}/recruiter/conversations/${conversationId}/messages`, {
        content
      });
    }
    static ɵfac = function RecruiterService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RecruiterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: RecruiterService,
      factory: RecruiterService.ɵfac,
      providedIn: 'root'
    });
  }
  return RecruiterService;
})();

/***/ }),

/***/ 85718:
/*!********************************************************************!*\
  !*** ./src/app/shared/service/message/message-realtime.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageRealtimeService: () => (/* binding */ MessageRealtimeService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 34205);



let MessageRealtimeService = /*#__PURE__*/(() => {
  class MessageRealtimeService {
    ws = null;
    reconnectTimer = null;
    shouldReconnect = true;
    subscribedConversationIds = new Set();
    eventsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    events$ = this.eventsSubject.asObservable();
    connectedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
    connected$ = this.connectedSubject.asObservable();
    connect() {
      if (this.ws && (this.ws.readyState === WebSocket.OPEN || this.ws.readyState === WebSocket.CONNECTING)) {
        return;
      }
      const token = localStorage.getItem('token');
      if (!token) {
        return;
      }
      this.shouldReconnect = true;
      const wsUrl = this.buildWsUrl(token);
      this.ws = new WebSocket(wsUrl);
      this.ws.onopen = () => {
        this.connectedSubject.next(true);
        this.flushSubscriptions();
      };
      this.ws.onmessage = event => {
        try {
          const payload = JSON.parse(event.data);
          this.eventsSubject.next(payload);
        } catch {}
      };
      this.ws.onclose = () => {
        this.connectedSubject.next(false);
        this.ws = null;
        this.scheduleReconnect();
      };
      this.ws.onerror = () => {
        this.connectedSubject.next(false);
      };
    }
    disconnect() {
      this.shouldReconnect = false;
      if (this.reconnectTimer) {
        clearTimeout(this.reconnectTimer);
        this.reconnectTimer = null;
      }
      if (this.ws) {
        this.ws.close();
        this.ws = null;
      }
      this.connectedSubject.next(false);
    }
    subscribeConversation(conversationId) {
      if (!conversationId) {
        return;
      }
      this.subscribedConversationIds.add(conversationId);
      this.send({
        type: 'SUBSCRIBE',
        conversationId
      });
    }
    unsubscribeConversation(conversationId) {
      if (!conversationId) {
        return;
      }
      this.subscribedConversationIds.delete(conversationId);
      this.send({
        type: 'UNSUBSCRIBE',
        conversationId
      });
    }
    flushSubscriptions() {
      for (const id of this.subscribedConversationIds) {
        this.send({
          type: 'SUBSCRIBE',
          conversationId: id
        });
      }
    }
    send(payload) {
      if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
        return;
      }
      this.ws.send(JSON.stringify(payload));
    }
    scheduleReconnect() {
      if (!this.shouldReconnect || this.reconnectTimer) {
        return;
      }
      this.reconnectTimer = setTimeout(() => {
        this.reconnectTimer = null;
        this.connect();
      }, 2000);
    }
    buildWsUrl(token) {
      const apiUrl = (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl || '').replace(/\/+$/, '');
      const baseUrl = apiUrl.endsWith('/api') ? apiUrl.slice(0, -4) : apiUrl;
      const wsBase = baseUrl.startsWith('https://') ? baseUrl.replace('https://', 'wss://') : baseUrl.replace('http://', 'ws://');
      return `${wsBase}/ws/messages?token=${encodeURIComponent(token)}`;
    }
    static ɵfac = function MessageRealtimeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MessageRealtimeService)();
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: MessageRealtimeService,
      factory: MessageRealtimeService.ɵfac,
      providedIn: 'root'
    });
  }
  return MessageRealtimeService;
})();

/***/ }),

/***/ 98428:
/*!***********************************************************!*\
  !*** ./src/app/shared/service/profile/profile.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileService: () => (/* binding */ ProfileService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 63855);



/**
 * Service de gestion du profil utilisateur.
 */
let ProfileService = /*#__PURE__*/(() => {
  class ProfileService {
    http;
    apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    constructor(http) {
      this.http = http;
    }
    // Récupérer le profil depuis le backend
    getProfile() {
      return this.http.get(`${this.apiUrl}/user/profile`);
    }
    // Mettre à jour le profil (tous les champs)
    updateProfile(data) {
      return this.http.put(`${this.apiUrl}/user/profile`, data);
    }
    // Uploader l'avatar
    uploadAvatar(file) {
      const formData = new FormData();
      formData.append('file', file, file.name);
      // Compatibilité backend: certains endpoints peuvent attendre 'avatar'
      formData.append('avatar', file, file.name);
      return this.http.post(`${this.apiUrl}/user/avatar`, formData);
    }
    // Supprimer l'avatar
    deleteAvatar() {
      return this.http.delete(`${this.apiUrl}/user/avatar`);
    }
    // Profil public d'un instructeur (sans auth)
    getInstructorProfile(instructorId) {
      return this.http.get(`${this.apiUrl}/public/instructor/${instructorId}`);
    }
    // Changer le mot de passe (exige l'ancien)
    changePassword(data) {
      return this.http.put(`${this.apiUrl}/user/change-password`, data, {
        responseType: 'text'
      });
    }
    // Supprimer le compte (exige le mot de passe)
    deleteAccount(password) {
      return this.http.delete(`${this.apiUrl}/user/account`, {
        params: {
          password
        },
        responseType: 'text'
      });
    }
    // Activer/désactiver le partage du profil avec les recruteurs
    toggleShareWithRecruiters(share) {
      return this.http.put(`${this.apiUrl}/user/share-profile`, {
        share
      }, {
        responseType: 'text'
      });
    }
    static ɵfac = function ProfileService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ProfileService,
      factory: ProfileService.ɵfac,
      providedIn: 'root'
    });
  }
  return ProfileService;
})();

/***/ })

}]);
//# sourceMappingURL=common.js.map