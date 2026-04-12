"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[4728],{

/***/ 35365:
/*!***************************************************!*\
  !*** ./src/app/shared/utils/avatar-image.util.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveAvatarImage: () => (/* binding */ resolveAvatarImage)
/* harmony export */ });
const AVATAR_API_ROOT = 'http://localhost:8081';
function resolveAvatarImage(path, fallback = '') {
  if (!path || !String(path).trim()) {
    return fallback;
  }
  const raw = String(path).trim().replace(/\\/g, '/');
  if (/^(https?:)?\/\//i.test(raw) || raw.startsWith('data:image')) {
    return raw;
  }
  if (raw.startsWith('assets/')) {
    return raw;
  }
  if (raw.startsWith('preset:')) {
    return `assets/img/course-img/${raw.replace('preset:', '')}`;
  }
  if (raw.startsWith('/')) {
    return `${AVATAR_API_ROOT}${raw}`;
  }
  if (raw.startsWith('api/')) {
    return `${AVATAR_API_ROOT}/${raw}`;
  }
  if (raw.includes('/')) {
    return `${AVATAR_API_ROOT}/${raw}`;
  }
  return `${AVATAR_API_ROOT}/api/files/${raw}`;
}

/***/ }),

/***/ 54728:
/*!*********************************************************************!*\
  !*** ./src/app/features/student/student-qa/student-qa.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StudentQaComponent: () => (/* binding */ StudentQaComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _shared_utils_avatar_image_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/utils/avatar-image.util */ 35365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_service_qa_qa_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/service/qa/qa.service */ 9490);
/* harmony import */ var _shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/service/course/course.service */ 4856);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 54285);









const _forTrack0 = ($index, $item) => $item.id;
function StudentQaComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17)(1, "div", 41)(2, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Chargement...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function StudentQaComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h6", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Vous n'avez encore pos\u00C3\u00A9 aucune question.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Utilisez le bouton ci-dessus pour poser votre premi\u00C3\u00A8re question.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function StudentQaComponent_Conditional_43_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", q_r2.lessonTitle, " ");
  }
}
function StudentQaComponent_Conditional_43_For_2_Conditional_23_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Aucune r\u00C3\u00A9ponse pour le moment. L'instructeur sera notifi\u00C3\u00A9. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function StudentQaComponent_Conditional_43_For_2_Conditional_23_For_9_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Instructeur");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function StudentQaComponent_Conditional_43_For_2_Conditional_23_For_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 70)(1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 74)(4, "div", 75)(5, "strong", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](7, StudentQaComponent_Conditional_43_For_2_Conditional_23_For_9_Conditional_7_Template, 2, 0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const answer_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r2.getAvatarUrl(answer_r4.authorAvatar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", answer_r4.authorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](answer_r4.authorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](answer_r4.instructorAnswer ? 7 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](10, 6, answer_r4.createdAt, "dd MMM yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](answer_r4.body);
  }
}
function StudentQaComponent_Conditional_43_For_2_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 63)(1, "div", 65)(2, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h6", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "R\u00C3\u00A9ponses ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](7, StudentQaComponent_Conditional_43_For_2_Conditional_23_Conditional_7_Template, 3, 0, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](8, StudentQaComponent_Conditional_43_For_2_Conditional_23_For_9_Template, 13, 9, "div", 70, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](q_r2.body);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](!q_r2.answers || q_r2.answers.length === 0 ? 7 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](q_r2.answers);
  }
}
function StudentQaComponent_Conditional_43_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 45)(1, "div", 46)(2, "div", 47)(3, "div", 48)(4, "h6", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 50)(7, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](10, StudentQaComponent_Conditional_43_For_2_Conditional_10_Template, 3, 1, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 58)(19, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StudentQaComponent_Conditional_43_For_2_Template_button_click_19_listener() {
      const q_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.toggleExpand(q_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StudentQaComponent_Conditional_43_For_2_Template_button_click_21_listener() {
      const q_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.deleteQuestion(q_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](23, StudentQaComponent_Conditional_43_For_2_Conditional_23_Template, 10, 2, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const q_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](q_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", q_r2.courseName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](q_r2.lessonTitle ? 10 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](14, 10, q_r2.createdAt, "dd MMM yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", q_r2.answerCount > 0 ? "bg-soft-success text-success" : "bg-soft-warning text-warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", q_r2.answerCount, " r\u00C3\u00A9ponse", q_r2.answerCount !== 1 ? "s" : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx_r2.expandedId === q_r2.id ? "R\u00C3\u00A9duire" : "Voir les r\u00C3\u00A9ponses");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r2.expandedId === q_r2.id ? "isax-arrow-up-3" : "isax-arrow-down-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx_r2.expandedId === q_r2.id ? 23 : -1);
  }
}
function StudentQaComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](1, StudentQaComponent_Conditional_43_For_2_Template, 24, 13, "div", 45, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx_r2.questions);
  }
}
function StudentQaComponent_For_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const course_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", course_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](course_r5.title);
  }
}
function StudentQaComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Vous devez \u00C3\u00AAtre inscrit \u00C3\u00A0 un cours pour poser une question.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function StudentQaComponent_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 40);
  }
}
let StudentQaComponent = /*#__PURE__*/(() => {
  class StudentQaComponent {
    qaService;
    courseService;
    toastr;
    questions = [];
    enrolledCourses = [];
    loading = false;
    expandedId = null;
    selectedQuestion = null;
    // Formulaire nouvelle question
    questionForm = {
      courseId: '',
      title: '',
      body: ''
    };
    submitting = false;
    constructor(qaService, courseService, toastr) {
      this.qaService = qaService;
      this.courseService = courseService;
      this.toastr = toastr;
    }
    ngOnInit() {
      this.loadMyQuestions();
      this.loadEnrolledCourses();
    }
    loadMyQuestions() {
      this.loading = true;
      this.qaService.getMyQuestions().subscribe({
        next: data => {
          this.questions = data;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
          this.toastr.error('Impossible de charger vos questions.');
        }
      });
    }
    loadEnrolledCourses() {
      this.courseService.getMyEnrolledCourses().subscribe({
        next: courses => {
          this.enrolledCourses = courses;
        },
        error: () => {}
      });
    }
    toggleExpand(question) {
      this.expandedId = this.expandedId === question.id ? null : question.id;
    }
    openAskModal() {
      this.questionForm = {
        courseId: '',
        title: '',
        body: ''
      };
      const el = document.getElementById('ask_question_modal');
      if (el) new bootstrap.Modal(el).show();
    }
    onAskQuestion() {
      if (!this.questionForm.courseId || !this.questionForm.title.trim() || !this.questionForm.body.trim()) {
        this.toastr.warning('Veuillez remplir tous les champs obligatoires.');
        return;
      }
      this.submitting = true;
      this.qaService.askQuestion({
        courseId: Number(this.questionForm.courseId),
        title: this.questionForm.title.trim(),
        body: this.questionForm.body.trim()
      }).subscribe({
        next: q => {
          this.questions.unshift(q);
          this.submitting = false;
          this.toastr.success('Question posée avec succès !');
          const el = document.getElementById('ask_question_modal');
          if (el) bootstrap.Modal.getInstance(el)?.hide();
        },
        error: err => {
          this.submitting = false;
          this.toastr.error(err?.error || 'Erreur lors de l\'envoi de la question.');
        }
      });
    }
    deleteQuestion(question) {
      if (!confirm(`Supprimer la question "${question.title}" ?`)) return;
      this.qaService.deleteQuestion(question.id).subscribe({
        next: () => {
          this.questions = this.questions.filter(q => q.id !== question.id);
          if (this.expandedId === question.id) this.expandedId = null;
          this.toastr.success('Question supprimée.');
        },
        error: err => this.toastr.error(err?.error || 'Erreur lors de la suppression.')
      });
    }
    get totalQuestions() {
      return this.questions.length;
    }
    get answeredCount() {
      return this.questions.filter(q => q.answerCount > 0).length;
    }
    get unansweredCount() {
      return this.questions.filter(q => q.answerCount === 0).length;
    }
    getAvatarUrl(path) {
      return (0,_shared_utils_avatar_image_util__WEBPACK_IMPORTED_MODULE_2__.resolveAvatarImage)(path, 'assets/img/user/user-01.jpg');
    }
    static ɵfac = function StudentQaComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || StudentQaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_service_qa_qa_service__WEBPACK_IMPORTED_MODULE_5__.QaService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_service_course_course_service__WEBPACK_IMPORTED_MODULE_6__.CourseService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: StudentQaComponent,
      selectors: [["app-student-qa"]],
      decls: 84,
      vars: 12,
      consts: [[1, "student-qa"], [1, "page-title", "d-flex", "align-items-center", "justify-content-between"], [1, "btn", "btn-secondary", "rounded-pill", 3, "click"], [1, "isax", "isax-add-circle", "me-2", "fs-10"], [1, "row", "mb-4"], [1, "col-md-4"], [1, "card"], [1, "card-body"], [1, "d-flex", "align-items-center"], [1, "icon-box", "bg-primary-transparent", "me-3", "flex-shrink-0"], ["src", "assets/img/icon/graduation.svg", "alt", ""], [1, "mb-1"], [1, "fw-bold"], [1, "icon-box", "bg-success-transparent", "me-3", "flex-shrink-0"], ["src", "assets/img/icon/bookmark.svg", "alt", ""], [1, "icon-box", "bg-warning-transparent", "me-3", "flex-shrink-0"], ["src", "assets/img/icon/book.svg", "alt", ""], [1, "text-center", "py-5"], [1, "questions-list"], ["id", "ask_question_modal", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "custom-btn-close"], [1, "isax", "isax-close-circle5"], [3, "ngSubmit"], [1, "modal-body"], [1, "row"], [1, "col-md-12", "mb-3"], [1, "form-label"], [1, "text-danger"], ["name", "courseId", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "", "disabled", ""], [3, "value"], [1, "text-muted"], ["type", "text", "name", "qtitle", "placeholder", "Ex: Comment fonctionne les closures en JavaScript ?", "maxlength", "255", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "5", "name", "qbody", "placeholder", "D\u00C3\u00A9crivez votre question en d\u00C3\u00A9tail...", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "bg-gray-100", "rounded-pill", "me-2"], ["type", "submit", 1, "btn", "btn-secondary", "rounded-pill", 3, "disabled"], [1, "spinner-border", "spinner-border-sm", "me-1"], ["role", "status", 1, "spinner-border", "text-secondary"], [1, "visually-hidden"], ["src", "assets/img/icon/graduation.svg", "alt", "", 1, "mb-3", 2, "width", "56px", "opacity", ".5"], [1, "text-muted", "fs-14"], [1, "card", "mb-3", "border"], [1, "card-body", "pb-2"], [1, "d-flex", "align-items-start", "justify-content-between"], [1, "flex-grow-1", "me-3"], [1, "mb-1", "fw-semibold", "text-dark"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], [1, "badge", "bg-soft-primary", "text-primary"], [1, "isax", "isax-book-1", "me-1", "fs-10"], [1, "badge", "bg-soft-secondary", "text-secondary"], [1, "text-muted", "fs-12"], [1, "isax", "isax-clock", "me-1", "fs-10"], [1, "badge", 3, "ngClass"], [1, "isax", "isax-message", "me-1", "fs-10"], [1, "d-flex", "align-items-center", "gap-2", "flex-shrink-0"], [1, "btn", "btn-sm", "btn-light", "border", "rounded-pill", 3, "click", "title"], [1, "isax", "fs-14", 3, "ngClass"], ["title", "Supprimer", 1, "btn", "btn-sm", "btn-light", "border", "rounded-pill", "text-danger", 3, "click"], [1, "isax", "isax-trash", "fs-14"], [1, "mt-3", "border-top", "pt-3"], [1, "isax", "isax-video-play", "me-1", "fs-10"], [1, "bg-light", "rounded", "p-3", "mb-3"], [1, "mb-0", "text-gray-8"], [1, "fs-14", "fw-semibold", "mb-3"], [1, "isax", "isax-message-text", "me-2"], [1, "text-muted", "fs-13", "ps-2"], [1, "d-flex", "align-items-start", "mb-3"], [1, "isax", "isax-info-circle", "me-1"], [1, "avatar", "avatar-sm", "me-3", "flex-shrink-0"], [1, "img-fluid", "rounded-circle", 3, "src", "alt"], [1, "flex-grow-1", "bg-white", "border", "rounded", "p-3"], [1, "d-flex", "align-items-center", "mb-1"], [1, "fs-14", "me-2"], [1, "badge", "bg-secondary", "fs-11"], [1, "text-muted", "fs-12", "ms-auto"]],
      template: function StudentQaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Mes Questions (Q&A)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StudentQaComponent_Template_button_click_4_listener() {
            return ctx.openAskModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Poser une question ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "img", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div")(15, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Total Questions");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "h4", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 5)(20, "div", 6)(21, "div", 7)(22, "div", 8)(23, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "img", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div")(26, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "R\u00C3\u00A9pondues");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "h4", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 5)(31, "div", 6)(32, "div", 7)(33, "div", 8)(34, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "img", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div")(37, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Sans r\u00C3\u00A9ponse");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "h4", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](41, StudentQaComponent_Conditional_41_Template, 4, 0, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](42, StudentQaComponent_Conditional_42_Template, 6, 0, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](43, StudentQaComponent_Conditional_43_Template, 3, 0, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 19)(45, "div", 20)(46, "div", 21)(47, "div", 22)(48, "h5", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Poser une Question");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](51, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "form", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function StudentQaComponent_Template_form_ngSubmit_52_listener() {
            return ctx.onAskQuestion();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 26)(54, "div", 27)(55, "div", 28)(56, "label", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Cours ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "span", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "select", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function StudentQaComponent_Template_select_ngModelChange_60_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.questionForm.courseId, $event) || (ctx.questionForm.courseId = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "option", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "S\u00C3\u00A9lectionner un cours");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](63, StudentQaComponent_For_64_Template, 2, 2, "option", 33, _forTrack0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](65, StudentQaComponent_Conditional_65_Template, 2, 0, "small", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 28)(67, "label", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "Titre de la question ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "span", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "input", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function StudentQaComponent_Template_input_ngModelChange_71_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.questionForm.title, $event) || (ctx.questionForm.title = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 28)(73, "label", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "Description ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "span", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "textarea", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function StudentQaComponent_Template_textarea_ngModelChange_77_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.questionForm.body, $event) || (ctx.questionForm.body = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 37)(79, "button", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, "Annuler");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "button", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](82, StudentQaComponent_Conditional_82_Template, 1, 0, "span", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, " Envoyer la question ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.totalQuestions);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.answeredCount);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.unansweredCount);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.loading ? 41 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](!ctx.loading && ctx.questions.length === 0 ? 42 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](!ctx.loading && ctx.questions.length > 0 ? 43 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.questionForm.courseId);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx.enrolledCourses);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.enrolledCourses.length === 0 ? 65 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.questionForm.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.questionForm.body);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.submitting);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.submitting ? 82 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return StudentQaComponent;
})();

/***/ })

}]);
//# sourceMappingURL=4728.js.map