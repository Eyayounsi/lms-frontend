import {
  SafeUrlPipe
} from "./chunk-5AFZJH43.js";
import {
  ToastrService
} from "./chunk-OUV4FBMT.js";
import {
  CourseService
} from "./chunk-C7JGHRMX.js";
import {
  environment
} from "./chunk-MFSRU4HL.js";
import {
  routes
} from "./chunk-E6TQA5KL.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-VF2E3YWR.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-TPKO67I6.js";
import {
  DomSanitizer
} from "./chunk-QFZWCWB7.js";
import {
  HttpClient
} from "./chunk-PXFMCAI3.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-YBJXKBE2.js";
import {
  Component,
  Injectable,
  Pipe,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/shared/pipe/safe-html.pipe.ts
var SafeHtmlPipe = class _SafeHtmlPipe {
  sanitizer;
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(html) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  static \u0275fac = function SafeHtmlPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SafeHtmlPipe)(\u0275\u0275directiveInject(DomSanitizer, 16));
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "safeHtml", type: _SafeHtmlPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SafeHtmlPipe, [{
    type: Pipe,
    args: [{
      name: "safeHtml",
      standalone: true
    }]
  }], () => [{ type: DomSanitizer }], null);
})();

// src/app/shared/service/note/note.service.ts
var NoteService = class _NoteService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getCourseNote(courseId) {
    return this.http.get(`${this.apiUrl}/student/notes/course/${courseId}`);
  }
  saveCourseNote(courseId, content) {
    return this.http.put(`${this.apiUrl}/student/notes/course/${courseId}`, { content });
  }
  getLessonNote(lessonId) {
    return this.http.get(`${this.apiUrl}/student/notes/lesson/${lessonId}`);
  }
  saveLessonNote(lessonId, content) {
    return this.http.put(`${this.apiUrl}/student/notes/lesson/${lessonId}`, { content });
  }
  static \u0275fac = function NoteService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoteService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NoteService, factory: _NoteService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoteService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/shared/service/qa/qa.service.ts
var QaService = class _QaService {
  http;
  apiUrl = environment.apiUrl;
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
    return this.http.delete(`${this.apiUrl}/user/qa/questions/${questionId}`, { responseType: "text" });
  }
  updateQuestion(questionId, data) {
    return this.http.put(`${this.apiUrl}/user/qa/questions/${questionId}`, data);
  }
  // Réponses
  answerQuestion(questionId, data) {
    return this.http.post(`${this.apiUrl}/user/qa/questions/${questionId}/answers`, data);
  }
  deleteAnswer(answerId) {
    return this.http.delete(`${this.apiUrl}/user/qa/answers/${answerId}`, { responseType: "text" });
  }
  updateAnswer(answerId, data) {
    return this.http.put(`${this.apiUrl}/user/qa/answers/${answerId}`, data);
  }
  static \u0275fac = function QaService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QaService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _QaService, factory: _QaService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QaService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/courses/course-watch/course-watch.component.ts
var _c0 = ["videoPlayer"];
var _c1 = () => ["/student/student-dashboard"];
var _c2 = (a0, a1, a2) => ({ "isax-play-circle text-primary": a0, "isax-play-circle5 text-muted": a1, "isax-document text-danger": a2 });
var _c3 = (a0, a1, a2, a3) => ({ "bg-success": a0, "bg-primary": a1, "bg-warning text-dark": a2, "bg-danger text-white": a3 });
var _c4 = (a0, a1, a2, a3) => ({ "isax-tick-circle5": a0, "isax-video-circle5": a1, "isax-note-2": a2, "isax-document": a3 });
function CourseWatchComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "div", 12);
    \u0275\u0275elementStart(2, "p", 13);
    \u0275\u0275text(3, "Chargement du cours...");
    \u0275\u0275elementEnd()();
  }
}
function CourseWatchComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "a", 15);
    \u0275\u0275text(3, "Retour aux cours");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMsg, " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r0.routes.courseListPublic);
  }
}
function CourseWatchComponent_div_4_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Last activity: ", \u0275\u0275pipeBind2(2, 1, ctx_r0.courseProgress.lastAccessedAt, "mediumDate"), " ");
  }
}
function CourseWatchComponent_div_4_div_20_div_16_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 61);
  }
}
function CourseWatchComponent_div_4_div_20_div_16_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 62);
  }
  if (rf & 2) {
    const lesson_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(1, _c2, lesson_r4.id === ctx_r0.activeLessonId && lesson_r4.lessonType !== "PDF", lesson_r4.id !== ctx_r0.activeLessonId && lesson_r4.lessonType !== "PDF", lesson_r4.lessonType === "PDF"));
  }
}
function CourseWatchComponent_div_4_div_20_div_16_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1, "Quiz");
    \u0275\u0275elementEnd();
  }
}
function CourseWatchComponent_div_4_div_20_div_16_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1, "Article");
    \u0275\u0275elementEnd();
  }
}
function CourseWatchComponent_div_4_div_20_div_16_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275text(1, "PDF");
    \u0275\u0275elementEnd();
  }
}
function CourseWatchComponent_div_4_div_20_div_16_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lesson_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.formatDuration(lesson_r4.durationSeconds));
  }
}
function CourseWatchComponent_div_4_div_20_div_16_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 67);
  }
}
function CourseWatchComponent_div_4_div_20_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275listener("click", function CourseWatchComponent_div_4_div_20_div_16_Template_div_click_0_listener() {
      const lesson_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectLesson(lesson_r4.id));
    });
    \u0275\u0275elementStart(1, "div", 50)(2, "span", 51);
    \u0275\u0275template(3, CourseWatchComponent_div_4_div_20_div_16_i_3_Template, 1, 0, "i", 52)(4, CourseWatchComponent_div_4_div_20_div_16_ng_template_4_Template, 1, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 53)(7, "p", 54);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 55);
    \u0275\u0275template(10, CourseWatchComponent_div_4_div_20_div_16_span_10_Template, 2, 0, "span", 56)(11, CourseWatchComponent_div_4_div_20_div_16_span_11_Template, 2, 0, "span", 57)(12, CourseWatchComponent_div_4_div_20_div_16_span_12_Template, 2, 0, "span", 58)(13, CourseWatchComponent_div_4_div_20_div_16_span_13_Template, 2, 1, "span", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, CourseWatchComponent_div_4_div_20_div_16_span_14_Template, 1, 0, "span", 60);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lesson_r4 = ctx.$implicit;
    const notDoneIcon_r5 = \u0275\u0275reference(5);
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("cw-lesson-row--active", lesson_r4.id === ctx_r0.activeLessonId)("cw-lesson-row--done", ctx_r0.isLessonDone(lesson_r4.id) && lesson_r4.id !== ctx_r0.activeLessonId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.isLessonDone(lesson_r4.id))("ngIfElse", notDoneIcon_r5);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("fw-semibold", lesson_r4.id === ctx_r0.activeLessonId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(lesson_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", lesson_r4.hasQuiz);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", lesson_r4.lessonType === "TEXT");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", lesson_r4.lessonType === "PDF");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", lesson_r4.durationSeconds);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", lesson_r4.id === ctx_r0.activeLessonId);
  }
}
function CourseWatchComponent_div_4_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "div", 38)(3, "div", 39)(4, "div", 40)(5, "div")(6, "span", 41);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h6", 42);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 43);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 44);
    \u0275\u0275element(13, "div", 45);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "div", 46)(15, "div", 47);
    \u0275\u0275template(16, CourseWatchComponent_div_4_div_20_div_16_Template, 15, 14, "div", 48);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const section_r6 = ctx.$implicit;
    const si_r7 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-bs-target", "#cw-sec-" + si_r7);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Section ", si_r7 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(section_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.getSectionProgress(section_r6), "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.getSectionProgress(section_r6), "%");
    \u0275\u0275classProp("bg-success", ctx_r0.getSectionProgress(section_r6) === 100)("bg-primary", ctx_r0.getSectionProgress(section_r6) < 100);
    \u0275\u0275advance();
    \u0275\u0275property("id", "cw-sec-" + si_r7);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", section_r6.lessons);
  }
}
function CourseWatchComponent_div_4_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275element(1, "div", 12);
    \u0275\u0275elementEnd();
  }
}
function CourseWatchComponent_div_4_ng_container_24_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 83);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.activeLesson.description);
  }
}
function CourseWatchComponent_div_4_ng_container_24_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "video", 85, 2);
    \u0275\u0275listener("ended", function CourseWatchComponent_div_4_ng_container_24_div_10_div_1_Template_video_ended_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onVideoEnd());
    })("pause", function CourseWatchComponent_div_4_ng_container_24_div_10_div_1_Template_video_pause_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.saveCurrentProgress());
    })("timeupdate", function CourseWatchComponent_div_4_ng_container_24_div_10_div_1_Template_video_timeupdate_1_listener() {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView(null);
    });
    \u0275\u0275text(3, " Votre navigateur ne supporte pas la balise video. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.getMediaUrl(ctx_r0.activeLesson.videoUrl), \u0275\u0275sanitizeUrl);
  }
}
function CourseWatchComponent_div_4_ng_container_24_div_10_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "div", 87);
    \u0275\u0275element(2, "i", 88);
    \u0275\u0275elementStart(3, "p", 42);
    \u0275\u0275text(4, "Vid\xE9o non disponible");
    \u0275\u0275elementEnd()()();
  }
}
function CourseWatchComponent_div_4_ng_container_24_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, CourseWatchComponent_div_4_ng_container_24_div_10_div_1_Template, 4, 1, "div", 84)(2, CourseWatchComponent_div_4_ng_container_24_div_10_ng_template_2_Template, 5, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const noVideo_r10 = \u0275\u0275reference(3);
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeLesson.videoUrl)("ngIfElse", noVideo_r10);
  }
}
function CourseWatchComponent_div_4_ng_container_24_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "iframe", 89);
    \u0275\u0275pipe(2, "safeUrl");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275pipeBind1(2, 1, ctx_r0.getMediaUrl(ctx_r0.activeLesson.pdfUrl)), \u0275\u0275sanitizeResourceUrl);
  }
}
function CourseWatchComponent_div_4_ng_container_24_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 92);
    \u0275\u0275pipe(1, "safeHtml");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, ctx_r0.activeLesson.articleContent), \u0275\u0275sanitizeHtml);
  }
}
function CourseWatchComponent_div_4_ng_container_24_div_12_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 93);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.activeLesson.description || "Contenu textuel de la le\xE7on.");
  }
}
function CourseWatchComponent_div_4_ng_container_24_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90);
    \u0275\u0275template(1, CourseWatchComponent_div_4_ng_container_24_div_12_div_1_Template, 2, 3, "div", 91)(2, CourseWatchComponent_div_4_ng_container_24_div_12_ng_template_2_Template, 2, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const textFallback_r11 = \u0275\u0275reference(3);
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeLesson.articleContent)("ngIfElse", textFallback_r11);
  }
}
function CourseWatchComponent_div_4_ng_container_24_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94)(1, "div", 95)(2, "div", 96);
    \u0275\u0275element(3, "i", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 98)(5, "p", 99);
    \u0275\u0275text(6, "Quiz associ\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h6", 100);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.activeLesson.quizTitle || "Quiz de la le\xE7on");
  }
}
function CourseWatchComponent_div_4_ng_container_24_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "i", 101);
    \u0275\u0275text(2, "Faire le Quiz ");
    \u0275\u0275elementContainerEnd();
  }
}
function CourseWatchComponent_div_4_ng_container_24_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, " Suivant ");
    \u0275\u0275element(2, "i", 102);
    \u0275\u0275elementContainerEnd();
  }
}
function CourseWatchComponent_div_4_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 69)(2, "div", 70)(3, "div")(4, "h5", 71);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, CourseWatchComponent_div_4_ng_container_24_p_6_Template, 2, 1, "p", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 73);
    \u0275\u0275element(8, "i", 74);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(10, CourseWatchComponent_div_4_ng_container_24_div_10_Template, 4, 2, "div", 10)(11, CourseWatchComponent_div_4_ng_container_24_div_11_Template, 3, 3, "div", 10)(12, CourseWatchComponent_div_4_ng_container_24_div_12_Template, 4, 2, "div", 75)(13, CourseWatchComponent_div_4_ng_container_24_div_13_Template, 9, 1, "div", 76);
    \u0275\u0275elementStart(14, "div", 77)(15, "button", 78);
    \u0275\u0275listener("click", function CourseWatchComponent_div_4_ng_container_24_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToPrevLesson());
    });
    \u0275\u0275element(16, "i", 79);
    \u0275\u0275text(17, "Pr\xE9c\xE9dent ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 80);
    \u0275\u0275listener("click", function CourseWatchComponent_div_4_ng_container_24_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.markCompleted());
    });
    \u0275\u0275element(19, "i", 81);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 82);
    \u0275\u0275listener("click", function CourseWatchComponent_div_4_ng_container_24_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToNextOrQuiz());
    });
    \u0275\u0275template(22, CourseWatchComponent_div_4_ng_container_24_ng_container_22_Template, 3, 0, "ng-container", 10)(23, CourseWatchComponent_div_4_ng_container_24_ng_container_23_Template, 3, 0, "ng-container", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.activeLesson.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeLesson.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(22, _c3, ctx_r0.lessonCompleted, !ctx_r0.lessonCompleted && ctx_r0.activeLesson.lessonType !== "TEXT" && ctx_r0.activeLesson.lessonType !== "PDF", !ctx_r0.lessonCompleted && ctx_r0.activeLesson.lessonType === "TEXT", !ctx_r0.lessonCompleted && ctx_r0.activeLesson.lessonType === "PDF"));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(27, _c4, ctx_r0.lessonCompleted, !ctx_r0.lessonCompleted && ctx_r0.activeLesson.lessonType !== "TEXT" && ctx_r0.activeLesson.lessonType !== "PDF", !ctx_r0.lessonCompleted && ctx_r0.activeLesson.lessonType === "TEXT", !ctx_r0.lessonCompleted && ctx_r0.activeLesson.lessonType === "PDF"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.lessonCompleted ? "Termin\xE9" : ctx_r0.activeLesson.lessonType === "TEXT" ? "Article" : ctx_r0.activeLesson.lessonType === "PDF" ? "PDF" : "Vid\xE9o", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeLesson.lessonType === "VIDEO" || !ctx_r0.activeLesson.lessonType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeLesson.lessonType === "PDF" && ctx_r0.activeLesson.pdfUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeLesson.lessonType === "TEXT");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeLesson.hasQuiz);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r0.lessonCompleted);
    \u0275\u0275advance();
    \u0275\u0275classProp("isax-tick-circle5", ctx_r0.lessonCompleted)("isax-tick-circle", !ctx_r0.lessonCompleted);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.lessonCompleted ? "Termin\xE9 \u2713" : "Marquer comme termin\xE9", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("cw-nav-btn--quiz", ctx_r0.activeLesson.hasQuiz)("cw-nav-btn--next", !ctx_r0.activeLesson.hasQuiz);
    \u0275\u0275property("disabled", !ctx_r0.lessonCompleted);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeLesson.hasQuiz);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.activeLesson.hasQuiz);
  }
}
function CourseWatchComponent_div_4_div_25_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 112);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.reviews.length);
  }
}
function CourseWatchComponent_div_4_div_25_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.qaQuestions.length);
  }
}
function CourseWatchComponent_div_4_div_25_div_16_ng_container_1_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.activeLesson.description);
  }
}
function CourseWatchComponent_div_4_div_25_div_16_ng_container_1_ng_container_5_li_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 118);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const obj_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(obj_r13);
  }
}
function CourseWatchComponent_div_4_div_25_div_16_ng_container_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 20)(2, "h6", 115);
    \u0275\u0275text(3, "What You'll Learn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 116);
    \u0275\u0275template(5, CourseWatchComponent_div_4_div_25_div_16_ng_container_1_ng_container_5_li_5_Template, 2, 1, "li", 117);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r0.course.objectives);
  }
}
function CourseWatchComponent_div_4_div_25_div_16_ng_container_1_ng_container_6_li_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 118);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const req_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(req_r14);
  }
}
function CourseWatchComponent_div_4_div_25_div_16_ng_container_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 42)(2, "h6", 115);
    \u0275\u0275text(3, "Requirements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 116);
    \u0275\u0275template(5, CourseWatchComponent_div_4_div_25_div_16_ng_container_1_ng_container_6_li_5_Template, 2, 1, "li", 117);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r0.course.requirements);
  }
}
function CourseWatchComponent_div_4_div_25_div_16_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 20)(2, "h6", 114);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, CourseWatchComponent_div_4_div_25_div_16_ng_container_1_p_4_Template, 2, 1, "p", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CourseWatchComponent_div_4_div_25_div_16_ng_container_1_ng_container_5_Template, 6, 1, "ng-container", 10)(6, CourseWatchComponent_div_4_div_25_div_16_ng_container_1_ng_container_6_Template, 6, 1, "ng-container", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.activeLesson.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeLesson.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.course.objectives == null ? null : ctx_r0.course.objectives.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.course.requirements == null ? null : ctx_r0.course.requirements.length);
  }
}
function CourseWatchComponent_div_4_div_25_div_16_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119);
    \u0275\u0275element(1, "i", 120);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "S\xE9lectionnez une le\xE7on dans le panneau de gauche pour commencer.");
    \u0275\u0275elementEnd()();
  }
}
function CourseWatchComponent_div_4_div_25_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, CourseWatchComponent_div_4_div_25_div_16_ng_container_1_Template, 7, 4, "ng-container", 84)(2, CourseWatchComponent_div_4_div_25_div_16_ng_template_2_Template, 4, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const noLessonOverview_r15 = \u0275\u0275reference(3);
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeLesson)("ngIfElse", noLessonOverview_r15);
  }
}
function CourseWatchComponent_div_4_div_25_div_17_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 138);
    \u0275\u0275listener("click", function CourseWatchComponent_div_4_div_25_div_17_div_1_span_5_Template_span_click_0_listener() {
      const s_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.myRating = s_r18);
    });
    \u0275\u0275element(1, "i", 139);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r18 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("text-warning", s_r18 <= ctx_r0.myRating)("text-muted", s_r18 > ctx_r0.myRating);
  }
}
function CourseWatchComponent_div_4_div_25_div_17_div_1_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 140);
    \u0275\u0275listener("click", function CourseWatchComponent_div_4_div_25_div_17_div_1_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.deleteMyReview());
    });
    \u0275\u0275element(1, "i", 141);
    \u0275\u0275text(2, "Supprimer ");
    \u0275\u0275elementEnd();
  }
}
function CourseWatchComponent_div_4_div_25_div_17_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 142);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.reviewMsg);
  }
}
function CourseWatchComponent_div_4_div_25_div_17_div_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 143);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.reviewError);
  }
}
function CourseWatchComponent_div_4_div_25_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 125)(1, "h6", 126);
    \u0275\u0275element(2, "i", 127);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 128);
    \u0275\u0275template(5, CourseWatchComponent_div_4_div_25_div_17_div_1_span_5_Template, 2, 4, "span", 129);
    \u0275\u0275elementStart(6, "span", 130);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "textarea", 131);
    \u0275\u0275twoWayListener("ngModelChange", function CourseWatchComponent_div_4_div_25_div_17_div_1_Template_textarea_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r0.myComment, $event) || (ctx_r0.myComment = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 132)(10, "button", 133);
    \u0275\u0275listener("click", function CourseWatchComponent_div_4_div_25_div_17_div_1_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.submitReview());
    });
    \u0275\u0275element(11, "i", 134);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, CourseWatchComponent_div_4_div_25_div_17_div_1_button_13_Template, 3, 0, "button", 135);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, CourseWatchComponent_div_4_div_25_div_17_div_1_div_14_Template, 2, 1, "div", 136)(15, CourseWatchComponent_div_4_div_25_div_17_div_1_div_15_Template, 2, 1, "div", 137);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.myReview ? "Modifier mon avis" : "Laisser un avis", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.stars);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.myRating, "/5");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.myComment);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.reviewSubmitting);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.reviewSubmitting ? "Envoi..." : ctx_r0.myReview ? "Modifier" : "Publier", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.myReview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.reviewMsg);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.reviewError);
  }
}
function CourseWatchComponent_div_4_div_25_div_17_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 144);
    \u0275\u0275element(1, "i", 145);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Terminez le cours \xE0 100% pour laisser un avis.");
    \u0275\u0275elementEnd()();
  }
}
function CourseWatchComponent_div_4_div_25_div_17_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 146);
    \u0275\u0275element(1, "i", 147);
    \u0275\u0275elementStart(2, "p", 42);
    \u0275\u0275text(3, "Aucun avis pour l'instant.");
    \u0275\u0275elementEnd()();
  }
}
function CourseWatchComponent_div_4_div_25_div_17_div_4_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 159);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r20 = ctx.$implicit;
    const review_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(s_r20 <= review_r21.rating ? "fa fa-star text-warning" : "fa fa-star-o text-muted");
  }
}
function CourseWatchComponent_div_4_div_25_div_17_div_4_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 160);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const review_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(review_r21.comment);
  }
}
function CourseWatchComponent_div_4_div_25_div_17_div_4_p_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 161);
    \u0275\u0275text(1, "Aucun commentaire.");
    \u0275\u0275elementEnd();
  }
}
function CourseWatchComponent_div_4_div_25_div_17_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 148)(1, "div", 149);
    \u0275\u0275element(2, "img", 150);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 151)(4, "div", 152)(5, "strong", 153);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 154);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 25);
    \u0275\u0275template(11, CourseWatchComponent_div_4_div_25_div_17_div_4_span_11_Template, 2, 2, "span", 155);
    \u0275\u0275elementStart(12, "span", 156);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, CourseWatchComponent_div_4_div_25_div_17_div_4_p_14_Template, 2, 1, "p", 157)(15, CourseWatchComponent_div_4_div_25_div_17_div_4_p_15_Template, 2, 0, "p", 158);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const review_r21 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", review_r21.studentAvatar ? "http://localhost:8081/" + review_r21.studentAvatar : "assets/img/profiles/avatar-02.jpg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(review_r21.studentName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 7, review_r21.createdAt, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.stars);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", review_r21.rating, "/5)");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", review_r21.comment);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !review_r21.comment);
  }
}
function CourseWatchComponent_div_4_div_25_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, CourseWatchComponent_div_4_div_25_div_17_div_1_Template, 16, 9, "div", 121)(2, CourseWatchComponent_div_4_div_25_div_17_div_2_Template, 4, 0, "div", 122)(3, CourseWatchComponent_div_4_div_25_div_17_div_3_Template, 4, 0, "div", 123)(4, CourseWatchComponent_div_4_div_25_div_17_div_4_Template, 16, 10, "div", 124);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isCourseDone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isCourseDone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.reviews.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.reviews);
  }
}
function CourseWatchComponent_div_4_div_25_div_18_small_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 168);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (le\xE7on : ", ctx_r0.activeLesson.title, ")");
  }
}
function CourseWatchComponent_div_4_div_25_div_18_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 169);
    \u0275\u0275element(1, "div", 170);
    \u0275\u0275elementEnd();
  }
}
function CourseWatchComponent_div_4_div_25_div_18_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 146);
    \u0275\u0275element(1, "i", 171);
    \u0275\u0275elementStart(2, "p", 42);
    \u0275\u0275text(3, "Aucune question pour l'instant. Soyez le premier !");
    \u0275\u0275elementEnd()();
  }
}
function CourseWatchComponent_div_4_div_25_div_18_div_13_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.qaActiveQuestion.body);
  }
}
function CourseWatchComponent_div_4_div_25_div_18_div_13_div_14_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 190);
    \u0275\u0275text(1, "Instructeur");
    \u0275\u0275elementEnd();
  }
}
function CourseWatchComponent_div_4_div_25_div_18_div_13_div_14_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 191);
    \u0275\u0275listener("click", function CourseWatchComponent_div_4_div_25_div_18_div_13_div_14_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      const ans_r25 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.startEditAnswer(ans_r25));
    });
    \u0275\u0275element(1, "i", 192);
    \u0275\u0275elementEnd();
  }
}
function CourseWatchComponent_div_4_div_25_div_18_div_13_div_14_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 193);
    \u0275\u0275listener("click", function CourseWatchComponent_div_4_div_25_div_18_div_13_div_14_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r26);
      const ans_r25 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.deleteAnswer(ans_r25.id));
    });
    \u0275\u0275element(1, "i", 194);
    \u0275\u0275elementEnd();
  }
}
function CourseWatchComponent_div_4_div_25_div_18_div_13_div_14_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "textarea", 195);
    \u0275\u0275twoWayListener("ngModelChange", function CourseWatchComponent_div_4_div_25_div_18_div_13_div_14_ng_container_14_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext(6);
      \u0275\u0275twoWayBindingSet(ctx_r0.editAnswerBody, $event) || (ctx_r0.editAnswerBody = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 196)(3, "button", 133);
    \u0275\u0275listener("click", function CourseWatchComponent_div_4_div_25_div_18_div_13_div_14_ng_container_14_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r27);
      const ans_r25 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.saveEditAnswer(ans_r25.id));
    });
    \u0275\u0275element(4, "i", 197);
    \u0275\u0275text(5, "Enregistrer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 198);
    \u0275\u0275listener("click", function CourseWatchComponent_div_4_div_25_div_18_div_13_div_14_ng_container_14_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r0.cancelEditAnswer());
    });
    \u0275\u0275text(7, "Annuler");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editAnswerBody);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r0.editAnswerBody.trim());
  }
}
function CourseWatchComponent_div_4_div_25_div_18_div_13_div_14_p_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 160);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ans_r25 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ans_r25.body);
  }
}
function CourseWatchComponent_div_4_div_25_div_18_div_13_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 184)(1, "div", 149)(2, "div", 185);
    \u0275\u0275element(3, "img", 186);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 151)(5, "div", 152)(6, "strong", 153);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, CourseWatchComponent_div_4_div_25_div_18_div_13_div_14_span_8_Template, 2, 0, "span", 187);
    \u0275\u0275elementStart(9, "span", 154);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, CourseWatchComponent_div_4_div_25_div_18_div_13_div_14_button_12_Template, 2, 0, "button", 188)(13, CourseWatchComponent_div_4_div_25_div_18_div_13_div_14_button_13_Template, 2, 0, "button", 189);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, CourseWatchComponent_div_4_div_25_div_18_div_13_div_14_ng_container_14_Template, 8, 2, "ng-container", 10)(15, CourseWatchComponent_div_4_div_25_div_18_div_13_div_14_p_15_Template, 2, 1, "p", 157);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ans_r25 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ans_r25.authorName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ans_r25.instructorAnswer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 7, ans_r25.createdAt, "mediumDate"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ans_r25.authorId === ctx_r0.currentUserId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ans_r25.authorId === ctx_r0.currentUserId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.editingAnswerId === ans_r25.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.editingAnswerId !== ans_r25.id);
  }
}
function CourseWatchComponent_div_4_div_25_div_18_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 172)(1, "div", 173)(2, "div")(3, "h6", 174);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 175);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, CourseWatchComponent_div_4_div_25_div_18_div_13_p_8_Template, 2, 1, "p", 176);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 177);
    \u0275\u0275listener("click", function CourseWatchComponent_div_4_div_25_div_18_div_13_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.closeQuestionDetail());
    });
    \u0275\u0275element(10, "i", 178);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "hr");
    \u0275\u0275elementStart(12, "h6", 179);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, CourseWatchComponent_div_4_div_25_div_18_div_13_div_14_Template, 16, 10, "div", 180);
    \u0275\u0275elementStart(15, "div", 181)(16, "input", 182);
    \u0275\u0275twoWayListener("ngModelChange", function CourseWatchComponent_div_4_div_25_div_18_div_13_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r0.qaAnswerText, $event) || (ctx_r0.qaAnswerText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 133);
    \u0275\u0275listener("click", function CourseWatchComponent_div_4_div_25_div_18_div_13_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.submitAnswer());
    });
    \u0275\u0275element(18, "i", 183);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.qaActiveQuestion.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Par ", ctx_r0.qaActiveQuestion.authorName, " \u2014 ", \u0275\u0275pipeBind2(7, 8, ctx_r0.qaActiveQuestion.createdAt, "mediumDate"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.qaActiveQuestion.body);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("R\xE9ponses (", (ctx_r0.qaActiveQuestion.answers == null ? null : ctx_r0.qaActiveQuestion.answers.length) || 0, ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.qaActiveQuestion.answers);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.qaAnswerText);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.qaAnswerSubmitting || !ctx_r0.qaAnswerText.trim());
  }
}
function CourseWatchComponent_div_4_div_25_div_18_div_14_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 151)(2, "input", 199);
    \u0275\u0275twoWayListener("ngModelChange", function CourseWatchComponent_div_4_div_25_div_18_div_14_ng_container_1_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r0.editQuestionTitle, $event) || (ctx_r0.editQuestionTitle = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "textarea", 200);
    \u0275\u0275twoWayListener("ngModelChange", function CourseWatchComponent_div_4_div_25_div_18_div_14_ng_container_1_Template_textarea_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r0.editQuestionBody, $event) || (ctx_r0.editQuestionBody = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 196)(5, "button", 133);
    \u0275\u0275listener("click", function CourseWatchComponent_div_4_div_25_div_18_div_14_ng_container_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r28);
      const q_r29 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.saveEditQuestion(q_r29.id));
    });
    \u0275\u0275element(6, "i", 197);
    \u0275\u0275text(7, "Enregistrer ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 198);
    \u0275\u0275listener("click", function CourseWatchComponent_div_4_div_25_div_18_div_14_ng_container_1_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.cancelEditQuestion());
    });
    \u0275\u0275text(9, "Annuler");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editQuestionTitle);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editQuestionBody);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r0.editQuestionTitle.trim());
  }
}
function CourseWatchComponent_div_4_div_25_div_18_div_14_ng_container_2_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 210);
    \u0275\u0275listener("click", function CourseWatchComponent_div_4_div_25_div_18_div_14_ng_container_2_button_13_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r31);
      const q_r29 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.startEditQuestion(q_r29, $event));
    });
    \u0275\u0275element(1, "i", 211);
    \u0275\u0275elementEnd();
  }
}
function CourseWatchComponent_div_4_div_25_div_18_div_14_ng_container_2_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 212);
    \u0275\u0275listener("click", function CourseWatchComponent_div_4_div_25_div_18_div_14_ng_container_2_button_14_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r32);
      const q_r29 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.deleteQuestion(q_r29.id, $event));
    });
    \u0275\u0275element(1, "i", 213);
    \u0275\u0275elementEnd();
  }
}
function CourseWatchComponent_div_4_div_25_div_18_div_14_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 201);
    \u0275\u0275listener("click", function CourseWatchComponent_div_4_div_25_div_18_div_14_ng_container_2_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r30);
      const q_r29 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.openQuestionDetail(q_r29));
    });
    \u0275\u0275elementStart(2, "div", 202);
    \u0275\u0275element(3, "i", 203);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 204);
    \u0275\u0275listener("click", function CourseWatchComponent_div_4_div_25_div_18_div_14_ng_container_2_Template_div_click_4_listener() {
      \u0275\u0275restoreView(_r30);
      const q_r29 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.openQuestionDetail(q_r29));
    });
    \u0275\u0275elementStart(5, "h6", 205);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 175);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 206);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 207);
    \u0275\u0275template(13, CourseWatchComponent_div_4_div_25_div_18_div_14_ng_container_2_button_13_Template, 2, 0, "button", 208)(14, CourseWatchComponent_div_4_div_25_div_18_div_14_ng_container_2_button_14_Template, 2, 0, "button", 209);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const q_r29 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(q_r29.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", q_r29.authorName, " \u2014 ", \u0275\u0275pipeBind2(9, 6, q_r29.createdAt, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", q_r29.answerCount || 0, " r\xE9ponse(s)");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", q_r29.authorId === ctx_r0.currentUserId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r29.authorId === ctx_r0.currentUserId);
  }
}
function CourseWatchComponent_div_4_div_25_div_18_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 148);
    \u0275\u0275template(1, CourseWatchComponent_div_4_div_25_div_18_div_14_ng_container_1_Template, 10, 3, "ng-container", 10)(2, CourseWatchComponent_div_4_div_25_div_18_div_14_ng_container_2_Template, 15, 9, "ng-container", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r29 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.editingQuestionId === q_r29.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.editingQuestionId !== q_r29.id);
  }
}
function CourseWatchComponent_div_4_div_25_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 125)(2, "h6", 126);
    \u0275\u0275element(3, "i", 162);
    \u0275\u0275text(4, "Poser une question ");
    \u0275\u0275template(5, CourseWatchComponent_div_4_div_25_div_18_small_5_Template, 2, 1, "small", 163);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 164);
    \u0275\u0275twoWayListener("ngModelChange", function CourseWatchComponent_div_4_div_25_div_18_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.qaNewTitle, $event) || (ctx_r0.qaNewTitle = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "textarea", 165);
    \u0275\u0275twoWayListener("ngModelChange", function CourseWatchComponent_div_4_div_25_div_18_Template_textarea_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.qaNewBody, $event) || (ctx_r0.qaNewBody = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 133);
    \u0275\u0275listener("click", function CourseWatchComponent_div_4_div_25_div_18_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.submitQuestion());
    });
    \u0275\u0275element(9, "i", 134);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, CourseWatchComponent_div_4_div_25_div_18_div_11_Template, 2, 0, "div", 166)(12, CourseWatchComponent_div_4_div_25_div_18_div_12_Template, 4, 0, "div", 123)(13, CourseWatchComponent_div_4_div_25_div_18_div_13_Template, 19, 11, "div", 167)(14, CourseWatchComponent_div_4_div_25_div_18_div_14_Template, 3, 2, "div", 124);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.activeLesson);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.qaNewTitle);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.qaNewBody);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.qaSubmitting || !ctx_r0.qaNewTitle.trim());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.qaSubmitting ? "Envoi..." : "Publier", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.qaLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.qaLoading && ctx_r0.qaQuestions.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.qaActiveQuestion);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.qaQuestions);
  }
}
function CourseWatchComponent_div_4_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 103)(1, "ul", 104)(2, "li", 105)(3, "a", 106);
    \u0275\u0275listener("click", function CourseWatchComponent_div_4_div_25_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.activeTab = "overview");
    });
    \u0275\u0275text(4, "Overview");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "li", 105)(6, "a", 106);
    \u0275\u0275listener("click", function CourseWatchComponent_div_4_div_25_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.activeTab = "reviews";
      return \u0275\u0275resetView(ctx_r0.loadReviews());
    });
    \u0275\u0275element(7, "i", 107);
    \u0275\u0275text(8, "Avis ");
    \u0275\u0275template(9, CourseWatchComponent_div_4_div_25_span_9_Template, 2, 1, "span", 108);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "li", 105)(11, "a", 106);
    \u0275\u0275listener("click", function CourseWatchComponent_div_4_div_25_Template_a_click_11_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.activeTab = "qa";
      return \u0275\u0275resetView(ctx_r0.loadQaQuestions());
    });
    \u0275\u0275element(12, "i", 109);
    \u0275\u0275text(13, "Q&A ");
    \u0275\u0275template(14, CourseWatchComponent_div_4_div_25_span_14_Template, 2, 1, "span", 110);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 111);
    \u0275\u0275template(16, CourseWatchComponent_div_4_div_25_div_16_Template, 4, 2, "div", 10)(17, CourseWatchComponent_div_4_div_25_div_17_Template, 5, 4, "div", 10)(18, CourseWatchComponent_div_4_div_25_div_18_Template, 15, 9, "div", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r0.activeTab === "overview");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r0.activeTab === "reviews");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.reviews.length);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0.activeTab === "qa");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.qaQuestions.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.activeTab === "overview");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeTab === "reviews");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeTab === "qa");
  }
}
function CourseWatchComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "div", 19)(4, "div", 20)(5, "a", 21);
    \u0275\u0275listener("click", function CourseWatchComponent_div_4_Template_a_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.backToCourse());
    });
    \u0275\u0275element(6, "i", 22);
    \u0275\u0275text(7, "Back to Courses ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 23);
    \u0275\u0275element(9, "i", 24);
    \u0275\u0275text(10, "Tableau de bord ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "h3");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 20)(14, "p", 25);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 26);
    \u0275\u0275element(17, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, CourseWatchComponent_div_4_span_18_Template, 3, 4, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 29);
    \u0275\u0275template(20, CourseWatchComponent_div_4_div_20_Template, 17, 12, "div", 30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 31)(22, "div", 32);
    \u0275\u0275template(23, CourseWatchComponent_div_4_div_23_Template, 2, 0, "div", 33)(24, CourseWatchComponent_div_4_ng_container_24_Template, 24, 32, "ng-container", 10)(25, CourseWatchComponent_div_4_div_25_Template, 19, 11, "div", 34);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c1));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.course.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.completionPercent, "% Complete");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.completionPercent, "%");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.courseProgress == null ? null : ctx_r0.courseProgress.lastAccessedAt);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.sections);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.loading && ctx_r0.course);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loading && ctx_r0.activeLesson);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.course && !ctx_r0.loading);
  }
}
function CourseWatchComponent_ng_container_5_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 238);
  }
}
function CourseWatchComponent_ng_container_5_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 178);
  }
}
function CourseWatchComponent_ng_container_5_small_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 235);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2014 ", ctx_r0.activeLesson.title);
  }
}
function CourseWatchComponent_ng_container_5_small_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 239);
    \u0275\u0275text(1, "\u2014 aucune le\xE7on");
    \u0275\u0275elementEnd();
  }
}
function CourseWatchComponent_ng_container_5_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 240);
    \u0275\u0275element(1, "i", 197);
    \u0275\u0275text(2, "Sauvegard\xE9 ! ");
    \u0275\u0275elementEnd();
  }
}
function CourseWatchComponent_ng_container_5_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 240);
    \u0275\u0275element(1, "i", 197);
    \u0275\u0275text(2, "Sauvegard\xE9 ! ");
    \u0275\u0275elementEnd();
  }
}
function CourseWatchComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 214);
    \u0275\u0275listener("click", function CourseWatchComponent_ng_container_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleNotesPanel());
    });
    \u0275\u0275template(2, CourseWatchComponent_ng_container_5_i_2_Template, 1, 0, "i", 215)(3, CourseWatchComponent_ng_container_5_i_3_Template, 1, 0, "i", 216);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 217)(5, "div", 218)(6, "div", 132);
    \u0275\u0275element(7, "i", 219);
    \u0275\u0275elementStart(8, "span", 220);
    \u0275\u0275text(9, "Mes Notes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 221);
    \u0275\u0275listener("click", function CourseWatchComponent_ng_container_5_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showNotesPanel = false);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 222)(12, "div", 223)(13, "div", 224);
    \u0275\u0275element(14, "i", 225);
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "Le\xE7on actuelle");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, CourseWatchComponent_ng_container_5_small_17_Template, 2, 1, "small", 226)(18, CourseWatchComponent_ng_container_5_small_18_Template, 2, 0, "small", 227);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "textarea", 228);
    \u0275\u0275twoWayListener("ngModelChange", function CourseWatchComponent_ng_container_5_Template_textarea_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.lessonNote, $event) || (ctx_r0.lessonNote = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 229)(21, "button", 230);
    \u0275\u0275listener("click", function CourseWatchComponent_ng_container_5_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveLessonNote());
    });
    \u0275\u0275element(22, "i", 231);
    \u0275\u0275text(23, "Sauvegarder ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, CourseWatchComponent_ng_container_5_span_24_Template, 3, 0, "span", 232);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(25, "hr", 233);
    \u0275\u0275elementStart(26, "div", 223)(27, "div", 224);
    \u0275\u0275element(28, "i", 234);
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30, "Ce cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "small", 235);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "textarea", 236);
    \u0275\u0275twoWayListener("ngModelChange", function CourseWatchComponent_ng_container_5_Template_textarea_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.courseNote, $event) || (ctx_r0.courseNote = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 229)(35, "button", 237);
    \u0275\u0275listener("click", function CourseWatchComponent_ng_container_5_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveNote());
    });
    \u0275\u0275element(36, "i", 231);
    \u0275\u0275text(37, "Sauvegarder ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, CourseWatchComponent_ng_container_5_span_38_Template, 3, 0, "span", 232);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("notes-fab--open", ctx_r0.showNotesPanel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.showNotesPanel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showNotesPanel);
    \u0275\u0275advance();
    \u0275\u0275classProp("notes-panel--visible", ctx_r0.showNotesPanel);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", ctx_r0.activeLesson);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.activeLesson);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.lessonNote);
    \u0275\u0275property("disabled", !ctx_r0.activeLesson);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r0.activeLesson);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.lessonNoteSaved);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("\u2014 ", ctx_r0.course.title);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.courseNote);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.courseNoteSaved);
  }
}
var CourseWatchComponent = class _CourseWatchComponent {
  route;
  router;
  courseService;
  noteService;
  qaService;
  toastr;
  videoRef;
  routes = routes;
  //  IDs depuis query params
  courseId = null;
  activeLessonId = null;
  //  Données du cours
  course = null;
  sections = [];
  allLessons = [];
  activeLesson = null;
  //  Progression
  courseProgress = null;
  lessonProgress = null;
  lessonCompleted = false;
  completedLessons = /* @__PURE__ */ new Set();
  // track across navigation
  //  Autosave timer
  saveInterval = null;
  SAVE_INTERVAL_MS = 3e4;
  //  UI
  loading = true;
  errorMsg = "";
  activeTab = "overview";
  //  Reviews
  reviews = [];
  myReview = null;
  myRating = 5;
  myComment = "";
  reviewSubmitting = false;
  reviewMsg = "";
  reviewError = "";
  stars = [1, 2, 3, 4, 5];
  //  Notes personnelles (localStorage)
  courseNote = "";
  // note globale du cours
  lessonNote = "";
  // note de la leçon active
  courseNoteSaved = false;
  lessonNoteSaved = false;
  showNotesPanel = false;
  noteSaveTimer = null;
  lessonNoteSaveTimer = null;
  // ═══ Q&A ═══
  currentUserId = 0;
  qaQuestions = [];
  qaLoading = false;
  qaNewTitle = "";
  qaNewBody = "";
  qaSubmitting = false;
  qaActiveQuestion = null;
  qaAnswerText = "";
  qaAnswerSubmitting = false;
  // ═══ Q&A Edit ═══
  editingQuestionId = null;
  editQuestionTitle = "";
  editQuestionBody = "";
  editingAnswerId = null;
  editAnswerBody = "";
  constructor(route, router, courseService, noteService, qaService, toastr) {
    this.route = route;
    this.router = router;
    this.courseService = courseService;
    this.noteService = noteService;
    this.qaService = qaService;
    this.toastr = toastr;
  }
  ngOnInit() {
    this.currentUserId = parseInt(localStorage.getItem("id") || "0", 10);
    this.route.queryParams.subscribe((params) => {
      const cId = params["courseId"];
      const lId = params["lessonId"];
      if (cId) {
        this.courseId = +cId;
        this.loadCourseContent(lId ? +lId : null);
      } else {
        this.errorMsg = "Aucun cours sp\xE9cifi\xE9.";
        this.loading = false;
      }
    });
  }
  ngOnDestroy() {
    this.saveCurrentProgress();
    this.clearSaveInterval();
    if (this.noteSaveTimer)
      clearTimeout(this.noteSaveTimer);
    if (this.lessonNoteSaveTimer)
      clearTimeout(this.lessonNoteSaveTimer);
  }
  //  Chargement 
  loadCourseContent(firstLessonId) {
    if (!this.courseId)
      return;
    this.courseService.getCourseContent(this.courseId).subscribe({
      next: (data) => {
        this.course = data;
        this.sections = data.sections || [];
        this.allLessons = this.sections.flatMap((s) => s.lessons || []);
        this.noteService.getCourseNote(this.courseId).subscribe({
          next: (n) => {
            this.courseNote = n?.content || "";
          },
          error: () => {
            this.courseNote = "";
          }
        });
        const lessonToLoad = firstLessonId || data.lastLessonId || (this.allLessons[0]?.id ?? null);
        if (lessonToLoad) {
          this.selectLesson(lessonToLoad);
        } else {
          this.loading = false;
        }
      },
      error: (e) => {
        if (e?.status === 403 || e?.status === 400) {
          this.errorMsg = e?.error?.message || "Vous devez acheter ce cours pour y acc\xE9der.";
        } else {
          this.errorMsg = "Erreur lors du chargement du cours.";
        }
        this.loading = false;
      }
    });
    this.courseService.getCourseProgress(this.courseId).subscribe({
      next: (progress) => this.courseProgress = progress,
      error: () => {
      }
    });
    this.loadReviews();
  }
  //  Sélection d'une leçon
  selectLesson(lessonId) {
    this.activeLessonId = lessonId;
    this.activeLesson = this.allLessons.find((l) => l.id === lessonId) || null;
    this.lessonCompleted = false;
    this.loading = true;
    this.lessonNoteSaved = false;
    this.courseNoteSaved = false;
    this.noteService.getLessonNote(lessonId).subscribe({
      next: (n) => {
        this.lessonNote = n?.content || "";
      },
      error: () => {
        this.lessonNote = "";
      }
    });
    this.clearSaveInterval();
    this.courseService.getLessonProgress(lessonId).subscribe({
      next: (progress) => {
        this.lessonProgress = progress;
        this.lessonCompleted = progress?.isCompleted || false;
        if (this.lessonCompleted)
          this.completedLessons.add(lessonId);
        this.loading = false;
        if (this.activeLesson?.lessonType !== "PDF") {
          setTimeout(() => {
            const video = this.videoRef?.nativeElement;
            if (video && progress?.watchedSeconds > 0) {
              video.currentTime = progress.watchedSeconds;
            }
          }, 200);
        }
        this.startAutoSave();
      },
      error: () => {
        this.lessonProgress = null;
        this.loading = false;
        this.startAutoSave();
      }
    });
  }
  //  Autosave toutes les 30 secondes 
  startAutoSave() {
    if (this.activeLesson?.lessonType === "VIDEO") {
      this.saveInterval = setInterval(() => {
        this.saveCurrentProgress();
      }, this.SAVE_INTERVAL_MS);
    }
  }
  clearSaveInterval() {
    if (this.saveInterval) {
      clearInterval(this.saveInterval);
      this.saveInterval = null;
    }
  }
  saveCurrentProgress() {
    if (!this.activeLessonId)
      return;
    const video = this.videoRef?.nativeElement;
    const watched = video ? Math.floor(video.currentTime) : 0;
    this.courseService.saveProgress(this.activeLessonId, watched).subscribe({
      next: () => {
      },
      error: () => {
      }
    });
  }
  //  Fin de la vidéo 
  onVideoEnd() {
    if (!this.activeLessonId)
      return;
    this.courseService.markLessonCompleted(this.activeLessonId).subscribe({
      next: (progress) => {
        this.lessonCompleted = true;
        this.lessonProgress = progress;
        if (this.activeLessonId)
          this.completedLessons.add(this.activeLessonId);
        this.courseService.getCourseProgress(this.courseId).subscribe({
          next: (cp) => this.courseProgress = cp,
          error: () => {
          }
        });
      },
      error: () => {
      }
    });
  }
  //  Marquer manuellement comme terminé 
  markCompleted() {
    this.onVideoEnd();
  }
  //  Aller à la leçon suivante
  goToNextLesson() {
    if (!this.activeLessonId)
      return;
    const idx = this.allLessons.findIndex((l) => l.id === this.activeLessonId);
    if (idx >= 0 && idx < this.allLessons.length - 1) {
      this.selectLesson(this.allLessons[idx + 1].id);
    }
  }
  //  Aller au quiz ou à la leçon suivante selon le contexte
  goToNextOrQuiz() {
    if (!this.activeLesson)
      return;
    if (this.activeLesson.hasQuiz && this.activeLesson.quizId) {
      this.router.navigate(["/student/student-quiz-questions", this.activeLesson.quizId], { queryParams: { courseId: this.courseId } });
    } else {
      this.goToNextLesson();
    }
  }
  goToPrevLesson() {
    if (!this.activeLessonId)
      return;
    const idx = this.allLessons.findIndex((l) => l.id === this.activeLessonId);
    if (idx > 0) {
      this.selectLesson(this.allLessons[idx - 1].id);
    }
  }
  //  Utilitaires
  isLessonDone(lessonId) {
    return this.completedLessons.has(lessonId);
  }
  lessonStatus(lesson) {
    if (lesson.id === this.activeLessonId)
      return "active";
    if (this.completedLessons.has(lesson.id))
      return "completed";
    return "default";
  }
  getSectionProgress(section) {
    const lessons = section.lessons || [];
    if (!lessons.length)
      return 0;
    const done = lessons.filter((l) => this.completedLessons.has(l.id)).length;
    return Math.round(done / lessons.length * 100);
  }
  get completionPercent() {
    return this.courseProgress?.completionPercentage || 0;
  }
  formatDuration(seconds) {
    if (!seconds)
      return "";
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  }
  getMediaUrl(path) {
    if (!path)
      return "";
    if (path.startsWith("http"))
      return path;
    const clean = path.startsWith("/") ? path : "/" + path;
    return `http://localhost:8081${clean}`;
  }
  getSectionForLesson(lessonId) {
    return this.sections.find((s) => s.lessons?.some((l) => l.id === lessonId));
  }
  isLessonCompleted(lessonId) {
    return this.activeLessonId === lessonId && this.lessonCompleted;
  }
  backToCourse() {
    if (this.courseId) {
      this.router.navigate([this.routes.courseListPublic]);
    }
  }
  // ═══════════════════════════════════════════════════════════════════════
  //  REVIEWS
  // ═══════════════════════════════════════════════════════════════════════
  loadReviews() {
    if (!this.courseId)
      return;
    this.courseService.getCourseReviews(this.courseId).subscribe({
      next: (data) => {
        this.reviews = data;
        const saved = localStorage.getItem(`my-review-course-${this.courseId}`);
        if (saved) {
          try {
            const parsed = JSON.parse(saved);
            this.myReview = parsed;
            this.myRating = parsed.rating || 5;
            this.myComment = parsed.comment || "";
          } catch {
            this.myReview = null;
          }
        }
      },
      error: () => {
      }
    });
  }
  submitReview() {
    if (!this.courseId || this.myRating < 1)
      return;
    this.reviewSubmitting = true;
    this.reviewMsg = "";
    this.reviewError = "";
    this.courseService.upsertReview(this.courseId, { rating: this.myRating, comment: this.myComment }).subscribe({
      next: (saved) => {
        this.reviewSubmitting = false;
        this.myReview = saved;
        this.reviewMsg = "Votre avis a \xE9t\xE9 publi\xE9 avec succ\xE8s !";
        localStorage.setItem(`my-review-course-${this.courseId}`, JSON.stringify(saved));
        this.loadReviews();
        setTimeout(() => this.reviewMsg = "", 3e3);
      },
      error: () => {
        this.reviewSubmitting = false;
        this.reviewError = "Erreur lors de la publication. Veuillez r\xE9essayer.";
      }
    });
  }
  deleteMyReview() {
    if (!this.courseId)
      return;
    this.courseService.deleteReview(this.courseId).subscribe({
      next: () => {
        this.myReview = null;
        this.myRating = 5;
        this.myComment = "";
        localStorage.removeItem(`my-review-course-${this.courseId}`);
        this.toastr.success("Avis supprim\xE9 avec succ\xE8s.");
        this.loadReviews();
      },
      error: (err) => {
        if (err.status === 400 || err.status === 404) {
          this.myReview = null;
          this.myRating = 5;
          this.myComment = "";
          localStorage.removeItem(`my-review-course-${this.courseId}`);
          this.reviewError = "";
          this.loadReviews();
        } else {
          this.reviewError = "Erreur lors de la suppression. Veuillez r\xE9essayer.";
        }
      }
    });
  }
  get isCourseDone() {
    return this.completionPercent >= 100;
  }
  // ═══════════════════════════════════════════════════════════════════════
  //  NOTES PERSONNELLES (localStorage)
  // ═══════════════════════════════════════════════════════════════════════
  saveNote() {
    if (!this.courseId)
      return;
    this.noteService.saveCourseNote(this.courseId, this.courseNote).subscribe({
      next: () => {
        this.courseNoteSaved = true;
        this.toastr.success("Note du cours sauvegard\xE9e");
        if (this.noteSaveTimer)
          clearTimeout(this.noteSaveTimer);
        this.noteSaveTimer = setTimeout(() => this.courseNoteSaved = false, 2500);
      },
      error: () => {
      }
    });
  }
  saveLessonNote() {
    if (!this.activeLessonId)
      return;
    this.noteService.saveLessonNote(this.activeLessonId, this.lessonNote).subscribe({
      next: () => {
        this.lessonNoteSaved = true;
        this.toastr.success("Note de le\xE7on sauvegard\xE9e");
        if (this.lessonNoteSaveTimer)
          clearTimeout(this.lessonNoteSaveTimer);
        this.lessonNoteSaveTimer = setTimeout(() => this.lessonNoteSaved = false, 2500);
      },
      error: () => {
      }
    });
  }
  // ═══════════════════════════════════════════════════════════════════════
  //  Q&A par leçon / cours
  // ═══════════════════════════════════════════════════════════════════════
  loadQaQuestions() {
    if (!this.courseId)
      return;
    this.qaLoading = true;
    this.qaService.getQuestionsByCourse(this.courseId).subscribe({
      next: (data) => {
        this.qaQuestions = data;
        this.qaLoading = false;
      },
      error: () => {
        this.qaLoading = false;
      }
    });
  }
  submitQuestion() {
    if (!this.courseId || !this.qaNewTitle.trim())
      return;
    this.qaSubmitting = true;
    this.qaService.askQuestion({
      courseId: this.courseId,
      lessonId: this.activeLessonId || void 0,
      title: this.qaNewTitle.trim(),
      body: this.qaNewBody.trim()
    }).subscribe({
      next: () => {
        this.qaNewTitle = "";
        this.qaNewBody = "";
        this.qaSubmitting = false;
        this.toastr.success("Question publi\xE9e !");
        this.loadQaQuestions();
      },
      error: () => {
        this.qaSubmitting = false;
      }
    });
  }
  openQuestionDetail(q) {
    this.qaActiveQuestion = null;
    this.qaAnswerText = "";
    this.qaService.getQuestionDetail(q.id).subscribe({
      next: (detail) => {
        this.qaActiveQuestion = detail;
      }
    });
  }
  closeQuestionDetail() {
    this.qaActiveQuestion = null;
    this.qaAnswerText = "";
  }
  submitAnswer() {
    if (!this.qaActiveQuestion || !this.qaAnswerText.trim())
      return;
    this.qaAnswerSubmitting = true;
    this.qaService.answerQuestion(this.qaActiveQuestion.id, { body: this.qaAnswerText.trim() }).subscribe({
      next: () => {
        this.qaAnswerSubmitting = false;
        this.qaAnswerText = "";
        this.toastr.success("R\xE9ponse publi\xE9e !");
        this.openQuestionDetail(this.qaActiveQuestion);
        this.loadQaQuestions();
      },
      error: () => {
        this.qaAnswerSubmitting = false;
      }
    });
  }
  deleteQuestion(questionId, event) {
    event.stopPropagation();
    if (!confirm("Supprimer cette question ?"))
      return;
    this.qaService.deleteQuestion(questionId).subscribe({
      next: () => {
        this.toastr.success("Question supprim\xE9e.");
        if (this.qaActiveQuestion?.id === questionId)
          this.qaActiveQuestion = null;
        this.loadQaQuestions();
      },
      error: () => this.toastr.error("Erreur lors de la suppression.")
    });
  }
  deleteAnswer(answerId) {
    if (!confirm("Supprimer cette r\xE9ponse ?"))
      return;
    this.qaService.deleteAnswer(answerId).subscribe({
      next: () => {
        this.toastr.success("R\xE9ponse supprim\xE9e.");
        this.openQuestionDetail(this.qaActiveQuestion);
      },
      error: () => this.toastr.error("Erreur lors de la suppression.")
    });
  }
  // ═══ Q&A Edit ═══
  startEditQuestion(q, event) {
    event.stopPropagation();
    this.editingQuestionId = q.id;
    this.editQuestionTitle = q.title;
    this.editQuestionBody = q.body || "";
  }
  cancelEditQuestion() {
    this.editingQuestionId = null;
    this.editQuestionTitle = "";
    this.editQuestionBody = "";
  }
  saveEditQuestion(questionId) {
    if (!this.editQuestionTitle.trim())
      return;
    this.qaService.updateQuestion(questionId, {
      title: this.editQuestionTitle.trim(),
      body: this.editQuestionBody.trim()
    }).subscribe({
      next: () => {
        this.toastr.success("Question modifi\xE9e.");
        this.cancelEditQuestion();
        this.loadQaQuestions();
      },
      error: () => this.toastr.error("Erreur lors de la modification.")
    });
  }
  startEditAnswer(ans) {
    this.editingAnswerId = ans.id;
    this.editAnswerBody = ans.body || "";
  }
  cancelEditAnswer() {
    this.editingAnswerId = null;
    this.editAnswerBody = "";
  }
  saveEditAnswer(answerId) {
    if (!this.editAnswerBody.trim())
      return;
    this.qaService.updateAnswer(answerId, { body: this.editAnswerBody.trim() }).subscribe({
      next: () => {
        this.toastr.success("R\xE9ponse modifi\xE9e.");
        this.cancelEditAnswer();
        this.openQuestionDetail(this.qaActiveQuestion);
      },
      error: () => this.toastr.error("Erreur lors de la modification.")
    });
  }
  toggleNotesPanel() {
    this.showNotesPanel = !this.showNotesPanel;
  }
  static \u0275fac = function CourseWatchComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CourseWatchComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(CourseService), \u0275\u0275directiveInject(NoteService), \u0275\u0275directiveInject(QaService), \u0275\u0275directiveInject(ToastrService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CourseWatchComponent, selectors: [["app-course-watch"]], viewQuery: function CourseWatchComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.videoRef = _t.first);
    }
  }, decls: 6, vars: 4, consts: [["notDoneIcon", ""], ["noVideo", ""], ["videoPlayer", ""], ["textFallback", ""], ["noLessonOverview", ""], [1, "content", "pt-0"], [1, "container-fluid"], ["class", "text-center py-5", 4, "ngIf"], ["class", "alert alert-danger m-3", 4, "ngIf"], ["class", "course-watch-section", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "mt-2"], [1, "alert", "alert-danger", "m-3"], [1, "alert-link", "ms-2", 3, "routerLink"], [1, "course-watch-section"], [1, "row"], [1, "col-lg-4", "border-end"], [1, "progress-overview-section"], [1, "mb-4"], ["href", "javascript:void(0);", 1, "back-to-course", 3, "click"], [1, "isax", "isax-arrow-left", "me-1"], [1, "back-to-course", "d-block", "mt-2", 3, "routerLink"], [1, "isax", "isax-home", "me-1"], [1, "mb-1"], ["role", "progressbar", 1, "progress", "progress-xs", "mb-2"], [1, "progress-bar", "bg-success"], ["class", "fw-medium text-muted small", 4, "ngIf"], ["id", "accordionCourseWatch", 1, "accordions-items-seperate"], ["class", "accordion-item", 4, "ngFor", "ngForOf"], [1, "col-lg-8"], [1, "course-watch-content"], ["class", "text-center py-4", 4, "ngIf"], ["class", "mt-3", 4, "ngIf"], [1, "fw-medium", "text-muted", "small"], [1, "accordion-item"], [1, "accordion-header"], ["role", "button", "data-bs-toggle", "collapse", "aria-expanded", "true", 1, "accordion-button"], [1, "w-100"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "d-block", "mb-1", "text-muted", "small"], [1, "mb-0"], [1, "cw-section-pct", "text-muted", "small", "ms-2"], [1, "progress", "mt-2", 2, "height", "3px", "border-radius", "4px"], [1, "progress-bar", 2, "transition", "width .4s ease"], [1, "accordion-collapse", "collapse", "show", 3, "id"], [1, "accordion-body"], ["class", "cw-lesson-row", 3, "cw-lesson-row--active", "cw-lesson-row--done", "click", 4, "ngFor", "ngForOf"], [1, "cw-lesson-row", 3, "click"], [1, "d-flex", "align-items-start", "gap-2"], [1, "cw-lesson-icon", "flex-shrink-0"], ["class", "isax isax-tick-circle5 text-success fs-18", 4, "ngIf", "ngIfElse"], [1, "flex-grow-1", "min-w-0"], [1, "cw-lesson-title", "mb-0"], [1, "d-flex", "flex-wrap", "gap-1", "mt-1"], ["class", "cw-badge-quiz", 4, "ngIf"], ["class", "cw-badge-type cw-badge-type--text", 4, "ngIf"], ["class", "cw-badge-type cw-badge-type--pdf", 4, "ngIf"], ["class", "cw-badge-duration text-muted", 4, "ngIf"], ["class", "cw-active-dot", 4, "ngIf"], [1, "isax", "isax-tick-circle5", "text-success", "fs-18"], [1, "isax", "fs-18", 3, "ngClass"], [1, "cw-badge-quiz"], [1, "cw-badge-type", "cw-badge-type--text"], [1, "cw-badge-type", "cw-badge-type--pdf"], [1, "cw-badge-duration", "text-muted"], [1, "cw-active-dot"], [1, "text-center", "py-4"], [1, "cw-content-header", "mb-3"], [1, "d-flex", "align-items-start", "justify-content-between", "gap-2"], [1, "fw-bold", "mb-1"], ["class", "text-muted small mb-0", 4, "ngIf"], [1, "badge", "rounded-pill", "flex-shrink-0", "mt-1", 3, "ngClass"], [1, "isax", "me-1", 3, "ngClass"], ["class", "p-3 bg-light rounded mb-3", 4, "ngIf"], ["class", "cw-quiz-card mb-3", 4, "ngIf"], [1, "cw-nav-bar", "mb-3"], [1, "cw-nav-btn", "cw-nav-btn--prev", 3, "click"], [1, "isax", "isax-arrow-left-2", "me-1"], [1, "cw-nav-btn", "cw-nav-btn--complete", 3, "click", "disabled"], [1, "isax", "me-1"], [1, "cw-nav-btn", 3, "click", "disabled"], [1, "text-muted", "small", "mb-0"], [4, "ngIf", "ngIfElse"], ["controls", "", 1, "w-100", "rounded", "mb-2", 2, "max-height", "450px", "background", "#000", 3, "ended", "pause", "timeupdate", "src"], [1, "bg-dark", "text-white", "d-flex", "align-items-center", "justify-content-center", "rounded", "mb-2", 2, "height", "300px"], [1, "text-center"], [1, "isax", "isax-video-circle5", "fs-48", "d-block", "mb-2", "opacity-50"], [1, "w-100", "rounded", "mb-2", 2, "height", "500px", "border", "none", 3, "src"], [1, "p-3", "bg-light", "rounded", "mb-3"], ["class", "article-content", 3, "innerHTML", 4, "ngIf", "ngIfElse"], [1, "article-content", 3, "innerHTML"], [1, "mb-0", "text-muted"], [1, "cw-quiz-card", "mb-3"], [1, "cw-quiz-card__inner"], [1, "cw-quiz-card__icon"], [1, "isax", "isax-medal-star"], [1, "cw-quiz-card__body"], [1, "cw-quiz-card__label"], [1, "cw-quiz-card__title"], [1, "isax", "isax-medal-star", "me-1"], [1, "isax", "isax-arrow-right-3", "ms-1"], [1, "mt-3"], ["role", "tablist", 1, "nav-tabs", "mb-4", "nav-justified", "border-0", "nav-style-1", "d-sm-flex", "d-block"], [1, "nav-item"], ["href", "javascript:void(0);", 1, "btn", "nav-link", 3, "click"], [1, "isax", "isax-star", "me-1"], ["class", "badge bg-warning text-dark ms-1 small", 4, "ngIf"], [1, "isax", "isax-message-question", "me-1"], ["class", "badge bg-info text-white ms-1 small", 4, "ngIf"], [1, "tab-content"], [1, "badge", "bg-warning", "text-dark", "ms-1", "small"], [1, "badge", "bg-info", "text-white", "ms-1", "small"], [1, "fs-18", "fw-semibold", "mb-1"], [1, "fs-18", "fw-semibold", "mb-2"], [1, "list-unstyled", "what-you-learn", "ms-4", 2, "list-style-type", "disc"], ["class", "mb-2", 4, "ngFor", "ngForOf"], [1, "mb-2"], [1, "text-center", "py-4", "text-muted"], [1, "isax", "isax-play-circle5", "fs-48", "d-block", "mb-2"], ["class", "card border-0 bg-light rounded-3 p-3 mb-4", 4, "ngIf"], ["class", "alert alert-info d-flex align-items-center gap-2 mb-4", 4, "ngIf"], ["class", "text-center py-3 text-muted", 4, "ngIf"], ["class", "d-flex gap-3 mb-3 pb-3 border-bottom", 4, "ngFor", "ngForOf"], [1, "card", "border-0", "bg-light", "rounded-3", "p-3", "mb-4"], [1, "fw-semibold", "mb-3"], [1, "isax", "isax-edit", "me-1"], [1, "mb-2", "d-flex", "gap-1", "align-items-center"], ["class", "fs-22", "style", "cursor:pointer;", 3, "text-warning", "text-muted", "click", 4, "ngFor", "ngForOf"], [1, "small", "text-muted", "ms-2"], ["rows", "3", "placeholder", "Partagez votre exp\xE9rience avec ce cours...", 1, "form-control", "mb-2", 3, "ngModelChange", "ngModel"], [1, "d-flex", "align-items-center", "gap-2"], [1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"], [1, "isax", "isax-send-2", "me-1"], ["class", "btn btn-outline-danger btn-sm", 3, "click", 4, "ngIf"], ["class", "alert alert-success mt-2 mb-0 py-1 px-2 small", 4, "ngIf"], ["class", "alert alert-danger mt-2 mb-0 py-1 px-2 small", 4, "ngIf"], [1, "fs-22", 2, "cursor", "pointer", 3, "click"], [1, "fa", "fa-star"], [1, "btn", "btn-outline-danger", "btn-sm", 3, "click"], [1, "isax", "isax-trash", "me-1"], [1, "alert", "alert-success", "mt-2", "mb-0", "py-1", "px-2", "small"], [1, "alert", "alert-danger", "mt-2", "mb-0", "py-1", "px-2", "small"], [1, "alert", "alert-info", "d-flex", "align-items-center", "gap-2", "mb-4"], [1, "isax", "isax-info-circle", "fs-18"], [1, "text-center", "py-3", "text-muted"], [1, "isax", "isax-star5", "fs-36", "d-block", "mb-2"], [1, "d-flex", "gap-3", "mb-3", "pb-3", "border-bottom"], [1, "flex-shrink-0"], ["width", "44", "height", "44", "alt", "", 1, "rounded-circle", 2, "object-fit", "cover", 3, "src"], [1, "flex-grow-1"], [1, "d-flex", "align-items-center", "gap-2", "mb-1"], [1, "small"], [1, "text-muted", "small"], [4, "ngFor", "ngForOf"], [1, "small", "text-muted", "ms-1"], ["class", "mb-0 small", 4, "ngIf"], ["class", "mb-0 small text-muted fst-italic", 4, "ngIf"], [2, "font-size", "14px"], [1, "mb-0", "small"], [1, "mb-0", "small", "text-muted", "fst-italic"], [1, "isax", "isax-message-add", "me-1"], ["class", "text-muted fw-normal", 4, "ngIf"], ["type", "text", "placeholder", "Titre de la question", 1, "form-control", "mb-2", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "D\xE9taillez votre question (optionnel)...", 1, "form-control", "mb-2", 3, "ngModelChange", "ngModel"], ["class", "text-center py-3", 4, "ngIf"], ["class", "card border rounded-3 p-3 mb-4", 4, "ngIf"], [1, "text-muted", "fw-normal"], [1, "text-center", "py-3"], [1, "spinner-border", "spinner-border-sm", "text-primary"], [1, "isax", "isax-message-question", "fs-36", "d-block", "mb-2"], [1, "card", "border", "rounded-3", "p-3", "mb-4"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-3"], [1, "fw-semibold", "mb-1"], [1, "text-muted", "small", "mb-1"], ["class", "mb-0", 4, "ngIf"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "isax", "isax-close-circle"], [1, "small", "fw-semibold", "mb-2"], ["class", "d-flex gap-2 mb-3 pb-2 border-bottom", 4, "ngFor", "ngForOf"], [1, "d-flex", "gap-2", "mt-2"], ["type", "text", "placeholder", "Votre r\xE9ponse...", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "isax", "isax-send-2"], [1, "d-flex", "gap-2", "mb-3", "pb-2", "border-bottom"], [1, "avatar", "avatar-sm", "avatar-rounded"], ["src", "assets/img/profiles/avatar-02.jpg", "alt", ""], ["class", "badge bg-primary small", 4, "ngIf"], ["class", "btn btn-link btn-sm p-0 ms-auto text-primary", "title", "Modifier", 3, "click", 4, "ngIf"], ["class", "btn btn-link btn-sm p-0 text-danger", "title", "Supprimer", 3, "click", 4, "ngIf"], [1, "badge", "bg-primary", "small"], ["title", "Modifier", 1, "btn", "btn-link", "btn-sm", "p-0", "ms-auto", "text-primary", 3, "click"], [1, "isax", "isax-edit", "fs-14"], ["title", "Supprimer", 1, "btn", "btn-link", "btn-sm", "p-0", "text-danger", 3, "click"], [1, "isax", "isax-trash", "fs-14"], ["rows", "2", 1, "form-control", "form-control-sm", "mb-2", 3, "ngModelChange", "ngModel"], [1, "d-flex", "gap-2"], [1, "isax", "isax-tick-circle", "me-1"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], ["type", "text", "placeholder", "Titre", 1, "form-control", "form-control-sm", "mb-2", 3, "ngModelChange", "ngModel"], ["rows", "2", "placeholder", "D\xE9tails (optionnel)", 1, "form-control", "form-control-sm", "mb-2", 3, "ngModelChange", "ngModel"], [1, "flex-shrink-0", 2, "cursor", "pointer", 3, "click"], [1, "avatar", "avatar-md", "avatar-rounded", "bg-light", "d-flex", "align-items-center", "justify-content-center"], [1, "isax", "isax-message-question", "fs-20", "text-primary"], [1, "flex-grow-1", 2, "cursor", "pointer", 3, "click"], [1, "fs-14", "fw-medium", "mb-1"], [1, "badge", "bg-light", "text-dark", "small"], [1, "flex-shrink-0", "d-flex", "align-items-start", "gap-1"], ["class", "btn btn-link btn-sm p-0 text-primary", "title", "Modifier ma question", 3, "click", 4, "ngIf"], ["class", "btn btn-link btn-sm p-0 text-danger", "title", "Supprimer ma question", 3, "click", 4, "ngIf"], ["title", "Modifier ma question", 1, "btn", "btn-link", "btn-sm", "p-0", "text-primary", 3, "click"], [1, "isax", "isax-edit", "fs-15"], ["title", "Supprimer ma question", 1, "btn", "btn-link", "btn-sm", "p-0", "text-danger", 3, "click"], [1, "isax", "isax-trash", "fs-15"], ["title", "Mes Notes", 1, "notes-fab", 3, "click"], ["class", "isax isax-note", 4, "ngIf"], ["class", "isax isax-close-circle", 4, "ngIf"], [1, "notes-panel"], [1, "notes-panel__header"], [1, "isax", "isax-note-2", "fs-18"], [1, "fw-semibold"], [1, "btn-close", "btn-close-white", "btn-sm", 3, "click"], [1, "notes-panel__body"], [1, "notes-panel__section"], [1, "notes-panel__section-title"], [1, "isax", "isax-video-play", "fs-14", "me-1"], ["class", "text-truncate ms-1 opacity-75", 4, "ngIf"], ["class", "opacity-50", 4, "ngIf"], ["rows", "5", "placeholder", "Notes pour cette le\xE7on...", 1, "notes-panel__textarea", 3, "ngModelChange", "ngModel", "disabled"], [1, "notes-panel__actions"], [1, "btn", "btn-sm", "btn-primary", 3, "click", "disabled"], [1, "isax", "isax-save-2", "me-1"], ["class", "notes-saved-msg", 4, "ngIf"], [1, "notes-panel__divider"], [1, "isax", "isax-book", "fs-14", "me-1"], [1, "text-truncate", "ms-1", "opacity-75"], ["rows", "5", "placeholder", "Notes g\xE9n\xE9rales pour ce cours...", 1, "notes-panel__textarea", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "isax", "isax-note"], [1, "opacity-50"], [1, "notes-saved-msg"]], template: function CourseWatchComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
      \u0275\u0275template(2, CourseWatchComponent_div_2_Template, 4, 0, "div", 7)(3, CourseWatchComponent_div_3_Template, 4, 2, "div", 8)(4, CourseWatchComponent_div_4_Template, 26, 11, "div", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(5, CourseWatchComponent_ng_container_5_Template, 39, 15, "ng-container", 10);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading && !ctx.course);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMsg);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.course && !ctx.errorMsg);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.course);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink, DatePipe, SafeUrlPipe, SafeHtmlPipe], styles: ['\n\n.notes-fab[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 28px;\n  right: 28px;\n  z-index: 1050;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  color: #fff;\n  font-size: 1.4rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 18px rgba(99, 102, 241, 0.45);\n  cursor: pointer;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.notes-fab[_ngcontent-%COMP%]:hover {\n  transform: scale(1.08);\n  box-shadow: 0 6px 24px rgba(99, 102, 241, 0.55);\n}\n.notes-fab--open[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #f97316);\n  box-shadow: 0 4px 18px rgba(239, 68, 68, 0.4);\n}\n.notes-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 96px;\n  right: 28px;\n  z-index: 1049;\n  width: 360px;\n  max-height: calc(100vh - 130px);\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.16);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  transform: translateY(20px) scale(0.97);\n  opacity: 0;\n  pointer-events: none;\n  transition: transform 0.25s ease, opacity 0.25s ease;\n}\n.notes-panel--visible[_ngcontent-%COMP%] {\n  transform: translateY(0) scale(1);\n  opacity: 1;\n  pointer-events: all;\n}\n.notes-panel__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  color: #fff;\n  flex-shrink: 0;\n}\n.notes-panel__body[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  padding: 16px;\n  flex: 1;\n}\n.notes-panel__section[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.notes-panel__section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: #6366f1;\n  margin-bottom: 8px;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.notes-panel__section-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #64748b;\n  font-weight: 400;\n  text-transform: none;\n  letter-spacing: 0;\n}\n.notes-panel__textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 10px 12px;\n  font-size: 0.875rem;\n  resize: vertical;\n  transition: border-color 0.15s;\n  background: #f8fafc;\n  color: #1e293b;\n}\n.notes-panel__textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #6366f1;\n  background: #fff;\n}\n.notes-panel__textarea[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.notes-panel__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 8px;\n}\n.notes-panel__divider[_ngcontent-%COMP%] {\n  border-color: #e2e8f0;\n  margin: 14px 0;\n}\n.notes-saved-msg[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #22c55e;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 480px) {\n  .notes-panel[_ngcontent-%COMP%] {\n    right: 12px;\n    left: 12px;\n    width: auto;\n    bottom: 88px;\n  }\n  .notes-fab[_ngcontent-%COMP%] {\n    bottom: 16px;\n    right: 16px;\n  }\n}\n.cw-lesson-row[_ngcontent-%COMP%] {\n  display: block;\n  padding: 10px 12px;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: background 0.18s ease, box-shadow 0.18s ease;\n  margin-bottom: 6px;\n}\n.cw-lesson-row[_ngcontent-%COMP%]:hover {\n  background: #f1f5ff;\n}\n.cw-lesson-row--active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ede9fe,\n      #f0fdf4);\n  border-left: 3px solid #6366f1;\n  box-shadow: 0 2px 10px rgba(99, 102, 241, 0.1);\n}\n.cw-lesson-row--active[_ngcontent-%COMP%]   .cw-lesson-title[_ngcontent-%COMP%] {\n  color: #6366f1;\n}\n.cw-lesson-row--done[_ngcontent-%COMP%]:not(.cw-lesson-row--active) {\n  opacity: 0.75;\n}\n.cw-lesson-row--done[_ngcontent-%COMP%]:not(.cw-lesson-row--active)   .cw-lesson-title[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.cw-lesson-title[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.35;\n  color: #1e293b;\n  transition: color 0.15s;\n}\n.cw-lesson-icon[_ngcontent-%COMP%] {\n  margin-top: 1px;\n}\n.cw-active-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #6366f1;\n  flex-shrink: 0;\n  margin-top: 6px;\n  animation: _ngcontent-%COMP%_pulse-dot 1.8s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse-dot {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.55);\n  }\n  50% {\n    box-shadow: 0 0 0 5px rgba(99, 102, 241, 0);\n  }\n}\n.cw-badge-quiz[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 10px;\n  font-weight: 700;\n  padding: 1px 7px;\n  border-radius: 20px;\n  background: #6f42c1;\n  color: #fff;\n  letter-spacing: 0.3px;\n}\n.cw-badge-type[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 10px;\n  font-weight: 600;\n  padding: 1px 7px;\n  border-radius: 20px;\n}\n.cw-badge-type--text[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.cw-badge-type--pdf[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.cw-badge-duration[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.cw-section-pct[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.cw-content-header[_ngcontent-%COMP%] {\n  padding: 14px 0 10px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.cw-content-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  line-height: 1.35;\n}\n.cw-quiz-card[_ngcontent-%COMP%] {\n  background: #f5f3ff;\n  border: 1.5px solid #c4b5fd;\n  border-radius: 10px;\n  overflow: hidden;\n  transition: box-shadow 0.2s ease;\n}\n.cw-quiz-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 3px 12px rgba(99, 102, 241, 0.14);\n}\n.cw-quiz-card__inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 14px;\n}\n.cw-quiz-card__icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.cw-quiz-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.cw-quiz-card__label[_ngcontent-%COMP%] {\n  font-size: 9px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.7px;\n  color: #7c3aed;\n  margin-bottom: 1px;\n}\n.cw-quiz-card__title[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin-bottom: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cw-nav-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  padding: 12px 0;\n  border-top: 1px solid #e2e8f0;\n}\n.cw-nav-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px 16px;\n  border-radius: 30px;\n  border: none;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.cw-nav-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n  transform: none !important;\n}\n.cw-nav-btn[_ngcontent-%COMP%]:not(:disabled):hover {\n  transform: translateY(-1px);\n}\n.cw-nav-btn--prev[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.cw-nav-btn--prev[_ngcontent-%COMP%]:not(:disabled):hover {\n  background: #e2e8f0;\n}\n.cw-nav-btn--complete[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669);\n  color: #fff;\n  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.35);\n}\n.cw-nav-btn--complete[_ngcontent-%COMP%]:disabled {\n  background: #d1fae5;\n  color: #6ee7b7;\n  box-shadow: none;\n}\n.cw-nav-btn--next[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.cw-nav-btn--next[_ngcontent-%COMP%]:not(:disabled):hover {\n  background: #e2e8f0;\n}\n.cw-nav-btn--quiz[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #d97706);\n  color: #fff;\n  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.4);\n}\n.cw-nav-btn--quiz[_ngcontent-%COMP%]:not(:disabled):hover {\n  box-shadow: 0 6px 18px rgba(245, 158, 11, 0.5);\n}\n.article-content[_ngcontent-%COMP%] {\n  font-size: 0.97rem;\n  line-height: 1.8;\n  color: #1e293b;\n}\n.article-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  margin: 1.4rem 0 0.5rem;\n}\n.article-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin: 1.2rem 0 0.45rem;\n  border-bottom: 2px solid #e2e8f0;\n  padding-bottom: 0.25rem;\n}\n.article-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 600;\n  margin: 1rem 0 0.4rem;\n}\n.article-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0.85rem 0 0.35rem;\n}\n.article-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0.9rem;\n}\n.article-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n.article-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  padding-left: 1.6rem;\n  margin-bottom: 0.9rem;\n}\n.article-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem;\n}\n.article-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.article-content[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n.article-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #6366f1;\n  text-decoration: underline;\n}\n.article-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #4f46e5;\n}\n.article-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 4px;\n  font-size: 0.875em;\n  font-family:\n    "Cascadia Code",\n    "Fira Code",\n    "Consolas",\n    monospace;\n  color: #c7254e;\n  white-space: nowrap;\n}\n.article-content[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  border-left: 4px solid #6366f1;\n  background: #f8f7ff;\n  padding: 10px 18px;\n  margin: 1rem 0;\n  border-radius: 0 6px 6px 0;\n  color: #4b5563;\n  font-style: italic;\n}\n.article-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  display: block;\n  margin: 1rem auto;\n  border-radius: 8px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n}\n.article-content[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border: none;\n  border-top: 2px solid #e2e8f0;\n  margin: 1.5rem 0;\n}\n@media (max-width: 768px) {\n  .cw-quiz-card__inner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n  .cw-quiz-card__btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .cw-nav-bar[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .cw-nav-btn[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 120px;\n    font-size: 0.78rem;\n    padding: 7px 10px;\n  }\n}\n/*# sourceMappingURL=course-watch.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CourseWatchComponent, [{
    type: Component,
    args: [{ selector: "app-course-watch", standalone: true, imports: [CommonModule, FormsModule, RouterLink, SafeUrlPipe, SafeHtmlPipe], template: `<!-- Course watch -->
<div class="content pt-0">
  <div class="container-fluid">

    <!-- Loading -->
    <div *ngIf="loading && !course" class="text-center py-5">
      <div class="spinner-border text-primary" role="status"></div>
      <p class="mt-2">Chargement du cours...</p>
    </div>

    <!-- Error -->
    <div *ngIf="errorMsg" class="alert alert-danger m-3">
      {{ errorMsg }}
      <a [routerLink]="routes.courseListPublic" class="alert-link ms-2">Retour aux cours</a>
    </div>

    <div class="course-watch-section" *ngIf="course && !errorMsg">
      <div class="row">

        <!--  SIDEBAR GAUCHE  -->
        <div class="col-lg-4 border-end">
          <div class="progress-overview-section">

            <div class="mb-4">
              <a href="javascript:void(0);" class="back-to-course" (click)="backToCourse()">
                <i class="isax isax-arrow-left me-1"></i>Back to Courses
              </a>
              <a [routerLink]="['/student/student-dashboard']" class="back-to-course d-block mt-2">
                <i class="isax isax-home me-1"></i>Tableau de bord
              </a>
            </div>

            <h3>{{ course.title }}</h3>

            <div class="mb-4">
              <p class="mb-1">{{ completionPercent }}% Complete</p>
              <div class="progress progress-xs mb-2" role="progressbar">
                <div class="progress-bar bg-success" [style.width.%]="completionPercent"></div>
              </div>
              <span class="fw-medium text-muted small" *ngIf="courseProgress?.lastAccessedAt">
                Last activity: {{ courseProgress.lastAccessedAt | date:'mediumDate' }}
              </span>
            </div>

            <!-- Sections accord\xE9on dynamique -->
            <div class="accordions-items-seperate" id="accordionCourseWatch">
              <div class="accordion-item" *ngFor="let section of sections; let si = index">
                <div class="accordion-header">
                  <div class="accordion-button" role="button"
                       data-bs-toggle="collapse" [attr.data-bs-target]="'#cw-sec-' + si"
                       aria-expanded="true">
                    <div class="w-100">
                      <div class="d-flex align-items-center justify-content-between">
                        <div>
                          <span class="d-block mb-1 text-muted small">Section {{ si + 1 }}</span>
                          <h6 class="mb-0">{{ section.title }}</h6>
                        </div>
                        <span class="cw-section-pct text-muted small ms-2">{{ getSectionProgress(section) }}%</span>
                      </div>
                      <div class="progress mt-2" style="height:3px;border-radius:4px;">
                        <div class="progress-bar" [class.bg-success]="getSectionProgress(section)===100"
                             [class.bg-primary]="getSectionProgress(section)<100"
                             [style.width.%]="getSectionProgress(section)"
                             style="transition:width .4s ease;"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div [id]="'cw-sec-' + si" class="accordion-collapse collapse show">
                  <div class="accordion-body">
                    <div class="cw-lesson-row"
                         *ngFor="let lesson of section.lessons"
                         [class.cw-lesson-row--active]="lesson.id === activeLessonId"
                         [class.cw-lesson-row--done]="isLessonDone(lesson.id) && lesson.id !== activeLessonId"
                         (click)="selectLesson(lesson.id)">
                      <div class="d-flex align-items-start gap-2">
                        <!-- Status icon -->
                        <span class="cw-lesson-icon flex-shrink-0">
                          <i class="isax isax-tick-circle5 text-success fs-18"
                             *ngIf="isLessonDone(lesson.id); else notDoneIcon"></i>
                          <ng-template #notDoneIcon>
                            <i class="isax fs-18"
                               [ngClass]="{
                                 'isax-play-circle text-primary': lesson.id === activeLessonId && lesson.lessonType !== 'PDF',
                                 'isax-play-circle5 text-muted': lesson.id !== activeLessonId && lesson.lessonType !== 'PDF',
                                 'isax-document text-danger': lesson.lessonType === 'PDF'
                               }"></i>
                          </ng-template>
                        </span>
                        <!-- Title + badges -->
                        <div class="flex-grow-1 min-w-0">
                          <p class="cw-lesson-title mb-0"
                             [class.fw-semibold]="lesson.id === activeLessonId">{{ lesson.title }}</p>
                          <div class="d-flex flex-wrap gap-1 mt-1">
                            <span *ngIf="lesson.hasQuiz" class="cw-badge-quiz">Quiz</span>
                            <span *ngIf="lesson.lessonType === 'TEXT'" class="cw-badge-type cw-badge-type--text">Article</span>
                            <span *ngIf="lesson.lessonType === 'PDF'" class="cw-badge-type cw-badge-type--pdf">PDF</span>
                            <span *ngIf="lesson.durationSeconds" class="cw-badge-duration text-muted">{{ formatDuration(lesson.durationSeconds) }}</span>
                          </div>
                        </div>
                        <!-- Active indicator -->
                        <span *ngIf="lesson.id === activeLessonId" class="cw-active-dot"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!--  CONTENU PRINCIPAL  -->
        <div class="col-lg-8">
          <div class="course-watch-content">

            <!-- Spinner pendant le chargement de le\xE7on -->
            <div *ngIf="loading && course" class="text-center py-4">
              <div class="spinner-border text-primary" role="status"></div>
            </div>

            <ng-container *ngIf="!loading && activeLesson">

              <!-- Lesson header -->
              <div class="cw-content-header mb-3">
                <div class="d-flex align-items-start justify-content-between gap-2">
                  <div>
                    <h5 class="fw-bold mb-1">{{ activeLesson.title }}</h5>
                    <p class="text-muted small mb-0" *ngIf="activeLesson.description">{{ activeLesson.description }}</p>
                  </div>
                  <span class="badge rounded-pill flex-shrink-0 mt-1"
                        [ngClass]="{
                          'bg-success': lessonCompleted,
                          'bg-primary': !lessonCompleted && activeLesson.lessonType !== 'TEXT' && activeLesson.lessonType !== 'PDF',
                          'bg-warning text-dark': !lessonCompleted && activeLesson.lessonType === 'TEXT',
                          'bg-danger text-white': !lessonCompleted && activeLesson.lessonType === 'PDF'
                        }">
                    <i class="isax me-1"
                       [ngClass]="{
                         'isax-tick-circle5': lessonCompleted,
                         'isax-video-circle5': !lessonCompleted && activeLesson.lessonType !== 'TEXT' && activeLesson.lessonType !== 'PDF',
                         'isax-note-2': !lessonCompleted && activeLesson.lessonType === 'TEXT',
                         'isax-document': !lessonCompleted && activeLesson.lessonType === 'PDF'
                       }"></i>
                    {{ lessonCompleted ? 'Termin\xE9' : activeLesson.lessonType === 'TEXT' ? 'Article' : activeLesson.lessonType === 'PDF' ? 'PDF' : 'Vid\xE9o' }}
                  </span>
                </div>
              </div>
              <div *ngIf="activeLesson.lessonType === 'VIDEO' || !activeLesson.lessonType">
                <div *ngIf="activeLesson.videoUrl; else noVideo">
                  <video #videoPlayer class="w-100 rounded mb-2" controls
                         [src]="getMediaUrl(activeLesson.videoUrl)"
                         (ended)="onVideoEnd()"
                         (pause)="saveCurrentProgress()"
                         (timeupdate)="null"
                         style="max-height: 450px; background:#000;">
                    Votre navigateur ne supporte pas la balise video.
                  </video>
                </div>
                <ng-template #noVideo>
                  <div class="bg-dark text-white d-flex align-items-center justify-content-center rounded mb-2"
                       style="height:300px;">
                    <div class="text-center">
                      <i class="isax isax-video-circle5 fs-48 d-block mb-2 opacity-50"></i>
                      <p class="mb-0">Vid\xE9o non disponible</p>
                    </div>
                  </div>
                </ng-template>
              </div>

              <!--  PDF viewer  -->
              <div *ngIf="activeLesson.lessonType === 'PDF' && activeLesson.pdfUrl">
                <iframe [src]="getMediaUrl(activeLesson.pdfUrl) | safeUrl" class="w-100 rounded mb-2"
                        style="height:500px; border:none;"></iframe>
              </div>

              <!--  Texte / Article  -->
              <div *ngIf="activeLesson.lessonType === 'TEXT'" class="p-3 bg-light rounded mb-3">
                <div *ngIf="activeLesson.articleContent; else textFallback"
                     [innerHTML]="activeLesson.articleContent | safeHtml"
                     class="article-content"></div>
                <ng-template #textFallback>
                  <p class="mb-0 text-muted">{{ activeLesson.description || 'Contenu textuel de la le\xE7on.' }}</p>
                </ng-template>
              </div>

              <!-- Quiz li\xE9 \xE0 cette le\xE7on -->
              <div *ngIf="activeLesson.hasQuiz" class="cw-quiz-card mb-3">
                <div class="cw-quiz-card__inner">
                  <div class="cw-quiz-card__icon">
                    <i class="isax isax-medal-star"></i>
                  </div>
                  <div class="cw-quiz-card__body">
                    <p class="cw-quiz-card__label">Quiz associ\xE9</p>
                    <h6 class="cw-quiz-card__title">{{ activeLesson.quizTitle || 'Quiz de la le\xE7on' }}</h6>
                  </div>
                </div>
              </div>

              <!-- Navigation -->
              <div class="cw-nav-bar mb-3">
                <button class="cw-nav-btn cw-nav-btn--prev" (click)="goToPrevLesson()">
                  <i class="isax isax-arrow-left-2 me-1"></i>Pr\xE9c\xE9dent
                </button>
                <button class="cw-nav-btn cw-nav-btn--complete" (click)="markCompleted()"
                        [disabled]="lessonCompleted">
                  <i class="isax me-1"
                     [class.isax-tick-circle5]="lessonCompleted"
                     [class.isax-tick-circle]="!lessonCompleted"></i>
                  {{ lessonCompleted ? 'Termin\xE9 \u2713' : 'Marquer comme termin\xE9' }}
                </button>
                <button class="cw-nav-btn" (click)="goToNextOrQuiz()"
                        [disabled]="!lessonCompleted"
                        [class.cw-nav-btn--quiz]="activeLesson.hasQuiz"
                        [class.cw-nav-btn--next]="!activeLesson.hasQuiz">
                  <ng-container *ngIf="activeLesson.hasQuiz">
                    <i class="isax isax-medal-star me-1"></i>Faire le Quiz
                  </ng-container>
                  <ng-container *ngIf="!activeLesson.hasQuiz">
                    Suivant <i class="isax isax-arrow-right-3 ms-1"></i>
                  </ng-container>
                </button>
              </div>

            </ng-container>

            <!-- ============================================================
                 ONGLETS COURS (toujours affich\xE9s d\xE8s que le cours est charg\xE9)
                 ============================================================ -->
            <div *ngIf="course && !loading" class="mt-3">

              <ul class="nav-tabs mb-4 nav-justified border-0 nav-style-1 d-sm-flex d-block" role="tablist">
                <li class="nav-item">
                  <a class="btn nav-link" [class.active]="activeTab === 'overview'"
                     (click)="activeTab = 'overview'" href="javascript:void(0);">Overview</a>
                </li>
                <li class="nav-item">
                  <a class="btn nav-link" [class.active]="activeTab === 'reviews'"
                     (click)="activeTab = 'reviews'; loadReviews()" href="javascript:void(0);">
                    <i class="isax isax-star me-1"></i>Avis
                    <span *ngIf="reviews.length" class="badge bg-warning text-dark ms-1 small">{{ reviews.length }}</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="btn nav-link" [class.active]="activeTab === 'qa'"
                     (click)="activeTab = 'qa'; loadQaQuestions()" href="javascript:void(0);">
                    <i class="isax isax-message-question me-1"></i>Q&amp;A
                    <span *ngIf="qaQuestions.length" class="badge bg-info text-white ms-1 small">{{ qaQuestions.length }}</span>
                  </a>
                </li>
              </ul>

              <div class="tab-content">

                <!-- Overview -->
                <div *ngIf="activeTab === 'overview'">
                  <ng-container *ngIf="activeLesson; else noLessonOverview">
                    <div class="mb-4">
                      <h6 class="fs-18 fw-semibold mb-1">{{ activeLesson.title }}</h6>
                      <p *ngIf="activeLesson.description">{{ activeLesson.description }}</p>
                    </div>
                    <ng-container *ngIf="course.objectives?.length">
                      <div class="mb-4">
                        <h6 class="fs-18 fw-semibold mb-2">What You'll Learn</h6>
                        <ul class="list-unstyled what-you-learn ms-4" style="list-style-type: disc;">
                          <li class="mb-2" *ngFor="let obj of course.objectives">{{ obj }}</li>
                        </ul>
                      </div>
                    </ng-container>
                    <ng-container *ngIf="course.requirements?.length">
                      <div class="mb-0">
                        <h6 class="fs-18 fw-semibold mb-2">Requirements</h6>
                        <ul class="list-unstyled what-you-learn ms-4" style="list-style-type: disc;">
                          <li class="mb-2" *ngFor="let req of course.requirements">{{ req }}</li>
                        </ul>
                      </div>
                    </ng-container>
                  </ng-container>
                  <ng-template #noLessonOverview>
                    <div class="text-center py-4 text-muted">
                      <i class="isax isax-play-circle5 fs-48 d-block mb-2"></i>
                      <p>S\xE9lectionnez une le\xE7on dans le panneau de gauche pour commencer.</p>
                    </div>
                  </ng-template>
                </div>

                <!-- Avis (par cours) -->
                <div *ngIf="activeTab === 'reviews'">

                  <!-- Formulaire si cours termin\xE9 -->
                  <div *ngIf="isCourseDone" class="card border-0 bg-light rounded-3 p-3 mb-4">
                    <h6 class="fw-semibold mb-3">
                      <i class="isax isax-edit me-1"></i>
                      {{ myReview ? 'Modifier mon avis' : 'Laisser un avis' }}
                    </h6>
                    <div class="mb-2 d-flex gap-1 align-items-center">
                      <span *ngFor="let s of stars"
                            class="fs-22" style="cursor:pointer;"
                            [class.text-warning]="s <= myRating"
                            [class.text-muted]="s > myRating"
                            (click)="myRating = s">
                        <i class="fa fa-star"></i>
                      </span>
                      <span class="small text-muted ms-2">{{ myRating }}/5</span>
                    </div>
                    <textarea class="form-control mb-2" rows="3"
                              [(ngModel)]="myComment"
                              placeholder="Partagez votre exp\xE9rience avec ce cours..."></textarea>
                    <div class="d-flex align-items-center gap-2">
                      <button class="btn btn-primary btn-sm" [disabled]="reviewSubmitting" (click)="submitReview()">
                        <i class="isax isax-send-2 me-1"></i>
                        {{ reviewSubmitting ? 'Envoi...' : (myReview ? 'Modifier' : 'Publier') }}
                      </button>
                      <button *ngIf="myReview" class="btn btn-outline-danger btn-sm" (click)="deleteMyReview()">
                        <i class="isax isax-trash me-1"></i>Supprimer
                      </button>
                    </div>
                    <div *ngIf="reviewMsg" class="alert alert-success mt-2 mb-0 py-1 px-2 small">{{ reviewMsg }}</div>
                    <div *ngIf="reviewError" class="alert alert-danger mt-2 mb-0 py-1 px-2 small">{{ reviewError }}</div>
                  </div>

                  <!-- Message si cours non termin\xE9 -->
                  <div *ngIf="!isCourseDone" class="alert alert-info d-flex align-items-center gap-2 mb-4">
                    <i class="isax isax-info-circle fs-18"></i>
                    <span>Terminez le cours \xE0 100% pour laisser un avis.</span>
                  </div>

                  <!-- Liste des avis -->
                  <div *ngIf="reviews.length === 0" class="text-center py-3 text-muted">
                    <i class="isax isax-star5 fs-36 d-block mb-2"></i>
                    <p class="mb-0">Aucun avis pour l'instant.</p>
                  </div>

                  <div *ngFor="let review of reviews" class="d-flex gap-3 mb-3 pb-3 border-bottom">
                    <div class="flex-shrink-0">
                      <img [src]="review.studentAvatar ? 'http://localhost:8081/' + review.studentAvatar : 'assets/img/profiles/avatar-02.jpg'"
                           class="rounded-circle" width="44" height="44"
                           style="object-fit:cover;" alt="">
                    </div>
                    <div class="flex-grow-1">
                      <div class="d-flex align-items-center gap-2 mb-1">
                        <strong class="small">{{ review.studentName }}</strong>
                        <span class="text-muted small">{{ review.createdAt | date:'mediumDate' }}</span>
                      </div>
                      <div class="mb-1">
                        <span *ngFor="let s of stars">
                          <i [class]="s <= review.rating ? 'fa fa-star text-warning' : 'fa fa-star-o text-muted'"
                             style="font-size:14px;"></i>
                        </span>
                        <span class="small text-muted ms-1">({{ review.rating }}/5)</span>
                      </div>
                      <p *ngIf="review.comment" class="mb-0 small">{{ review.comment }}</p>
                      <p *ngIf="!review.comment" class="mb-0 small text-muted fst-italic">Aucun commentaire.</p>
                    </div>
                  </div>

                </div>

                <!-- Q&A Tab -->
                <div *ngIf="activeTab === 'qa'">

                  <!-- Poser une question -->
                  <div class="card border-0 bg-light rounded-3 p-3 mb-4">
                    <h6 class="fw-semibold mb-3">
                      <i class="isax isax-message-add me-1"></i>Poser une question
                      <small class="text-muted fw-normal" *ngIf="activeLesson"> (le\xE7on : {{ activeLesson.title }})</small>
                    </h6>
                    <input type="text" class="form-control mb-2" [(ngModel)]="qaNewTitle" placeholder="Titre de la question">
                    <textarea class="form-control mb-2" rows="3" [(ngModel)]="qaNewBody" placeholder="D\xE9taillez votre question (optionnel)..."></textarea>
                    <button class="btn btn-primary btn-sm" [disabled]="qaSubmitting || !qaNewTitle.trim()" (click)="submitQuestion()">
                      <i class="isax isax-send-2 me-1"></i>{{ qaSubmitting ? 'Envoi...' : 'Publier' }}
                    </button>
                  </div>

                  <!-- Liste des questions -->
                  <div *ngIf="qaLoading" class="text-center py-3">
                    <div class="spinner-border spinner-border-sm text-primary"></div>
                  </div>
                  <div *ngIf="!qaLoading && qaQuestions.length === 0" class="text-center py-3 text-muted">
                    <i class="isax isax-message-question fs-36 d-block mb-2"></i>
                    <p class="mb-0">Aucune question pour l'instant. Soyez le premier !</p>
                  </div>

                  <!-- Question Detail Modal -->
                  <div *ngIf="qaActiveQuestion" class="card border rounded-3 p-3 mb-4">
                    <div class="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <h6 class="fw-semibold mb-1">{{ qaActiveQuestion.title }}</h6>
                        <p class="text-muted small mb-1">Par {{ qaActiveQuestion.authorName }} \u2014 {{ qaActiveQuestion.createdAt | date:'mediumDate' }}</p>
                        <p *ngIf="qaActiveQuestion.body" class="mb-0">{{ qaActiveQuestion.body }}</p>
                      </div>
                      <button class="btn btn-sm btn-outline-secondary" (click)="closeQuestionDetail()">
                        <i class="isax isax-close-circle"></i>
                      </button>
                    </div>
                    <hr>
                    <h6 class="small fw-semibold mb-2">R\xE9ponses ({{ qaActiveQuestion.answers?.length || 0 }})</h6>
                    <div *ngFor="let ans of qaActiveQuestion.answers" class="d-flex gap-2 mb-3 pb-2 border-bottom">
                      <div class="flex-shrink-0">
                        <div class="avatar avatar-sm avatar-rounded">
                          <img src="assets/img/profiles/avatar-02.jpg" alt="">
                        </div>
                      </div>
                      <div class="flex-grow-1">
                        <div class="d-flex align-items-center gap-2 mb-1">
                          <strong class="small">{{ ans.authorName }}</strong>
                          <span *ngIf="ans.instructorAnswer" class="badge bg-primary small">Instructeur</span>
                          <span class="text-muted small">{{ ans.createdAt | date:'mediumDate' }}</span>
                          <button *ngIf="ans.authorId === currentUserId" class="btn btn-link btn-sm p-0 ms-auto text-primary"
                                  title="Modifier" (click)="startEditAnswer(ans)">
                            <i class="isax isax-edit fs-14"></i>
                          </button>
                          <button *ngIf="ans.authorId === currentUserId" class="btn btn-link btn-sm p-0 text-danger"
                                  title="Supprimer" (click)="deleteAnswer(ans.id)">
                            <i class="isax isax-trash fs-14"></i>
                          </button>
                        </div>
                        <!-- Mode \xE9dition r\xE9ponse -->
                        <ng-container *ngIf="editingAnswerId === ans.id">
                          <textarea class="form-control form-control-sm mb-2" rows="2" [(ngModel)]="editAnswerBody"></textarea>
                          <div class="d-flex gap-2">
                            <button class="btn btn-primary btn-sm" (click)="saveEditAnswer(ans.id)" [disabled]="!editAnswerBody.trim()">
                              <i class="isax isax-tick-circle me-1"></i>Enregistrer
                            </button>
                            <button class="btn btn-outline-secondary btn-sm" (click)="cancelEditAnswer()">Annuler</button>
                          </div>
                        </ng-container>
                        <!-- Mode affichage normal -->
                        <p *ngIf="editingAnswerId !== ans.id" class="mb-0 small">{{ ans.body }}</p>
                      </div>
                    </div>
                    <!-- R\xE9pondre -->
                    <div class="d-flex gap-2 mt-2">
                      <input type="text" class="form-control form-control-sm" [(ngModel)]="qaAnswerText" placeholder="Votre r\xE9ponse...">
                      <button class="btn btn-primary btn-sm" [disabled]="qaAnswerSubmitting || !qaAnswerText.trim()" (click)="submitAnswer()">
                        <i class="isax isax-send-2"></i>
                      </button>
                    </div>
                  </div>

                  <!-- Questions List -->
                  <div *ngFor="let q of qaQuestions" class="d-flex gap-3 mb-3 pb-3 border-bottom">

                    <!-- Mode \xE9dition de question -->
                    <ng-container *ngIf="editingQuestionId === q.id">
                      <div class="flex-grow-1">
                        <input type="text" class="form-control form-control-sm mb-2" [(ngModel)]="editQuestionTitle" placeholder="Titre">
                        <textarea class="form-control form-control-sm mb-2" rows="2" [(ngModel)]="editQuestionBody" placeholder="D\xE9tails (optionnel)"></textarea>
                        <div class="d-flex gap-2">
                          <button class="btn btn-primary btn-sm" (click)="saveEditQuestion(q.id)" [disabled]="!editQuestionTitle.trim()">
                            <i class="isax isax-tick-circle me-1"></i>Enregistrer
                          </button>
                          <button class="btn btn-outline-secondary btn-sm" (click)="cancelEditQuestion()">Annuler</button>
                        </div>
                      </div>
                    </ng-container>

                    <!-- Mode affichage normal -->
                    <ng-container *ngIf="editingQuestionId !== q.id">
                      <div class="flex-shrink-0" style="cursor:pointer;" (click)="openQuestionDetail(q)">
                        <div class="avatar avatar-md avatar-rounded bg-light d-flex align-items-center justify-content-center">
                          <i class="isax isax-message-question fs-20 text-primary"></i>
                        </div>
                      </div>
                      <div class="flex-grow-1" style="cursor:pointer;" (click)="openQuestionDetail(q)">
                        <h6 class="fs-14 fw-medium mb-1">{{ q.title }}</h6>
                        <p class="text-muted small mb-1">{{ q.authorName }} \u2014 {{ q.createdAt | date:'mediumDate' }}</p>
                        <span class="badge bg-light text-dark small">{{ q.answerCount || 0 }} r\xE9ponse(s)</span>
                      </div>
                      <div class="flex-shrink-0 d-flex align-items-start gap-1">
                        <button *ngIf="q.authorId === currentUserId" class="btn btn-link btn-sm p-0 text-primary"
                                title="Modifier ma question" (click)="startEditQuestion(q, $event)">
                          <i class="isax isax-edit fs-15"></i>
                        </button>
                        <button *ngIf="q.authorId === currentUserId" class="btn btn-link btn-sm p-0 text-danger"
                                title="Supprimer ma question" (click)="deleteQuestion(q.id, $event)">
                          <i class="isax isax-trash fs-15"></i>
                        </button>
                      </div>
                    </ng-container>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</div>
<!-- /Course watch -->

<!-- ================================================================
     FLOATING NOTES BUTTON (chatbot style) \u2014 visible si cours charg\xE9
     ================================================================ -->
<ng-container *ngIf="course">

  <!-- Bouton flottant -->
  <button class="notes-fab" (click)="toggleNotesPanel()"
          title="Mes Notes" [class.notes-fab--open]="showNotesPanel">
    <i class="isax isax-note" *ngIf="!showNotesPanel"></i>
    <i class="isax isax-close-circle" *ngIf="showNotesPanel"></i>
  </button>

  <!-- Panneau Notes -->
  <div class="notes-panel" [class.notes-panel--visible]="showNotesPanel">

    <!-- Header du panneau -->
    <div class="notes-panel__header">
      <div class="d-flex align-items-center gap-2">
        <i class="isax isax-note-2 fs-18"></i>
        <span class="fw-semibold">Mes Notes</span>
      </div>
      <button class="btn-close btn-close-white btn-sm" (click)="showNotesPanel = false"></button>
    </div>

    <!-- Corps du panneau -->
    <div class="notes-panel__body">

      <!-- Note par le\xE7on -->
      <div class="notes-panel__section">
        <div class="notes-panel__section-title">
          <i class="isax isax-video-play fs-14 me-1"></i>
          <span>Le\xE7on actuelle</span>
          <small class="text-truncate ms-1 opacity-75" *ngIf="activeLesson">\u2014 {{ activeLesson.title }}</small>
          <small class="opacity-50" *ngIf="!activeLesson">\u2014 aucune le\xE7on</small>
        </div>
        <textarea class="notes-panel__textarea"
                  rows="5"
                  [(ngModel)]="lessonNote"
                  [disabled]="!activeLesson"
                  placeholder="Notes pour cette le\xE7on..."></textarea>
        <div class="notes-panel__actions">
          <button class="btn btn-sm btn-primary" (click)="saveLessonNote()" [disabled]="!activeLesson">
            <i class="isax isax-save-2 me-1"></i>Sauvegarder
          </button>
          <span class="notes-saved-msg" *ngIf="lessonNoteSaved">
            <i class="isax isax-tick-circle me-1"></i>Sauvegard\xE9 !
          </span>
        </div>
      </div>

      <hr class="notes-panel__divider">

      <!-- Note par cours -->
      <div class="notes-panel__section">
        <div class="notes-panel__section-title">
          <i class="isax isax-book fs-14 me-1"></i>
          <span>Ce cours</span>
          <small class="text-truncate ms-1 opacity-75">\u2014 {{ course.title }}</small>
        </div>
        <textarea class="notes-panel__textarea"
                  rows="5"
                  [(ngModel)]="courseNote"
                  placeholder="Notes g\xE9n\xE9rales pour ce cours..."></textarea>
        <div class="notes-panel__actions">
          <button class="btn btn-sm btn-primary" (click)="saveNote()">
            <i class="isax isax-save-2 me-1"></i>Sauvegarder
          </button>
          <span class="notes-saved-msg" *ngIf="courseNoteSaved">
            <i class="isax isax-tick-circle me-1"></i>Sauvegard\xE9 !
          </span>
        </div>
      </div>

    </div>
  </div>

</ng-container>`, styles: ['/* src/app/features/courses/course-watch/course-watch.component.scss */\n.notes-fab {\n  position: fixed;\n  bottom: 28px;\n  right: 28px;\n  z-index: 1050;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  color: #fff;\n  font-size: 1.4rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 18px rgba(99, 102, 241, 0.45);\n  cursor: pointer;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.notes-fab:hover {\n  transform: scale(1.08);\n  box-shadow: 0 6px 24px rgba(99, 102, 241, 0.55);\n}\n.notes-fab--open {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #f97316);\n  box-shadow: 0 4px 18px rgba(239, 68, 68, 0.4);\n}\n.notes-panel {\n  position: fixed;\n  bottom: 96px;\n  right: 28px;\n  z-index: 1049;\n  width: 360px;\n  max-height: calc(100vh - 130px);\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.16);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  transform: translateY(20px) scale(0.97);\n  opacity: 0;\n  pointer-events: none;\n  transition: transform 0.25s ease, opacity 0.25s ease;\n}\n.notes-panel--visible {\n  transform: translateY(0) scale(1);\n  opacity: 1;\n  pointer-events: all;\n}\n.notes-panel__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  color: #fff;\n  flex-shrink: 0;\n}\n.notes-panel__body {\n  overflow-y: auto;\n  padding: 16px;\n  flex: 1;\n}\n.notes-panel__section {\n  margin-bottom: 4px;\n}\n.notes-panel__section-title {\n  display: flex;\n  align-items: center;\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: #6366f1;\n  margin-bottom: 8px;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.notes-panel__section-title small {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #64748b;\n  font-weight: 400;\n  text-transform: none;\n  letter-spacing: 0;\n}\n.notes-panel__textarea {\n  width: 100%;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 10px 12px;\n  font-size: 0.875rem;\n  resize: vertical;\n  transition: border-color 0.15s;\n  background: #f8fafc;\n  color: #1e293b;\n}\n.notes-panel__textarea:focus {\n  outline: none;\n  border-color: #6366f1;\n  background: #fff;\n}\n.notes-panel__textarea:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.notes-panel__actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 8px;\n}\n.notes-panel__divider {\n  border-color: #e2e8f0;\n  margin: 14px 0;\n}\n.notes-saved-msg {\n  font-size: 0.8rem;\n  color: #22c55e;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 480px) {\n  .notes-panel {\n    right: 12px;\n    left: 12px;\n    width: auto;\n    bottom: 88px;\n  }\n  .notes-fab {\n    bottom: 16px;\n    right: 16px;\n  }\n}\n.cw-lesson-row {\n  display: block;\n  padding: 10px 12px;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: background 0.18s ease, box-shadow 0.18s ease;\n  margin-bottom: 6px;\n}\n.cw-lesson-row:hover {\n  background: #f1f5ff;\n}\n.cw-lesson-row--active {\n  background:\n    linear-gradient(\n      135deg,\n      #ede9fe,\n      #f0fdf4);\n  border-left: 3px solid #6366f1;\n  box-shadow: 0 2px 10px rgba(99, 102, 241, 0.1);\n}\n.cw-lesson-row--active .cw-lesson-title {\n  color: #6366f1;\n}\n.cw-lesson-row--done:not(.cw-lesson-row--active) {\n  opacity: 0.75;\n}\n.cw-lesson-row--done:not(.cw-lesson-row--active) .cw-lesson-title {\n  color: #64748b;\n}\n.cw-lesson-title {\n  font-size: 0.875rem;\n  line-height: 1.35;\n  color: #1e293b;\n  transition: color 0.15s;\n}\n.cw-lesson-icon {\n  margin-top: 1px;\n}\n.cw-active-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #6366f1;\n  flex-shrink: 0;\n  margin-top: 6px;\n  animation: pulse-dot 1.8s ease-in-out infinite;\n}\n@keyframes pulse-dot {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.55);\n  }\n  50% {\n    box-shadow: 0 0 0 5px rgba(99, 102, 241, 0);\n  }\n}\n.cw-badge-quiz {\n  display: inline-block;\n  font-size: 10px;\n  font-weight: 700;\n  padding: 1px 7px;\n  border-radius: 20px;\n  background: #6f42c1;\n  color: #fff;\n  letter-spacing: 0.3px;\n}\n.cw-badge-type {\n  display: inline-block;\n  font-size: 10px;\n  font-weight: 600;\n  padding: 1px 7px;\n  border-radius: 20px;\n}\n.cw-badge-type--text {\n  background: #fff3cd;\n  color: #856404;\n}\n.cw-badge-type--pdf {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.cw-badge-duration {\n  font-size: 11px;\n}\n.cw-section-pct {\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.cw-content-header {\n  padding: 14px 0 10px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.cw-content-header h5 {\n  font-size: 1.1rem;\n  line-height: 1.35;\n}\n.cw-quiz-card {\n  background: #f5f3ff;\n  border: 1.5px solid #c4b5fd;\n  border-radius: 10px;\n  overflow: hidden;\n  transition: box-shadow 0.2s ease;\n}\n.cw-quiz-card:hover {\n  box-shadow: 0 3px 12px rgba(99, 102, 241, 0.14);\n}\n.cw-quiz-card__inner {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 14px;\n}\n.cw-quiz-card__icon {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.cw-quiz-card__body {\n  flex: 1;\n  min-width: 0;\n}\n.cw-quiz-card__label {\n  font-size: 9px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.7px;\n  color: #7c3aed;\n  margin-bottom: 1px;\n}\n.cw-quiz-card__title {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #1e293b;\n  margin-bottom: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cw-nav-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  padding: 12px 0;\n  border-top: 1px solid #e2e8f0;\n}\n.cw-nav-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px 16px;\n  border-radius: 30px;\n  border: none;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.cw-nav-btn:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n  transform: none !important;\n}\n.cw-nav-btn:not(:disabled):hover {\n  transform: translateY(-1px);\n}\n.cw-nav-btn--prev {\n  background: #f1f5f9;\n  color: #475569;\n}\n.cw-nav-btn--prev:not(:disabled):hover {\n  background: #e2e8f0;\n}\n.cw-nav-btn--complete {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669);\n  color: #fff;\n  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.35);\n}\n.cw-nav-btn--complete:disabled {\n  background: #d1fae5;\n  color: #6ee7b7;\n  box-shadow: none;\n}\n.cw-nav-btn--next {\n  background: #f1f5f9;\n  color: #475569;\n}\n.cw-nav-btn--next:not(:disabled):hover {\n  background: #e2e8f0;\n}\n.cw-nav-btn--quiz {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #d97706);\n  color: #fff;\n  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.4);\n}\n.cw-nav-btn--quiz:not(:disabled):hover {\n  box-shadow: 0 6px 18px rgba(245, 158, 11, 0.5);\n}\n.article-content {\n  font-size: 0.97rem;\n  line-height: 1.8;\n  color: #1e293b;\n}\n.article-content h1 {\n  font-size: 1.75rem;\n  font-weight: 700;\n  margin: 1.4rem 0 0.5rem;\n}\n.article-content h2 {\n  font-size: 1.4rem;\n  font-weight: 700;\n  margin: 1.2rem 0 0.45rem;\n  border-bottom: 2px solid #e2e8f0;\n  padding-bottom: 0.25rem;\n}\n.article-content h3 {\n  font-size: 1.15rem;\n  font-weight: 600;\n  margin: 1rem 0 0.4rem;\n}\n.article-content h4 {\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0.85rem 0 0.35rem;\n}\n.article-content p {\n  margin-bottom: 0.9rem;\n}\n.article-content ul,\n.article-content ol {\n  padding-left: 1.6rem;\n  margin-bottom: 0.9rem;\n}\n.article-content li {\n  margin-bottom: 0.3rem;\n}\n.article-content strong {\n  font-weight: 700;\n}\n.article-content em {\n  font-style: italic;\n}\n.article-content a {\n  color: #6366f1;\n  text-decoration: underline;\n}\n.article-content a:hover {\n  color: #4f46e5;\n}\n.article-content code {\n  background: #f1f5f9;\n  padding: 2px 7px;\n  border-radius: 4px;\n  font-size: 0.875em;\n  font-family:\n    "Cascadia Code",\n    "Fira Code",\n    "Consolas",\n    monospace;\n  color: #c7254e;\n  white-space: nowrap;\n}\n.article-content blockquote {\n  border-left: 4px solid #6366f1;\n  background: #f8f7ff;\n  padding: 10px 18px;\n  margin: 1rem 0;\n  border-radius: 0 6px 6px 0;\n  color: #4b5563;\n  font-style: italic;\n}\n.article-content img {\n  max-width: 100%;\n  height: auto;\n  display: block;\n  margin: 1rem auto;\n  border-radius: 8px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n}\n.article-content hr {\n  border: none;\n  border-top: 2px solid #e2e8f0;\n  margin: 1.5rem 0;\n}\n@media (max-width: 768px) {\n  .cw-quiz-card__inner {\n    flex-direction: column;\n    text-align: center;\n  }\n  .cw-quiz-card__btn {\n    width: 100%;\n    justify-content: center;\n  }\n  .cw-nav-bar {\n    flex-wrap: wrap;\n  }\n  .cw-nav-btn {\n    flex: 1;\n    min-width: 120px;\n    font-size: 0.78rem;\n    padding: 7px 10px;\n  }\n}\n/*# sourceMappingURL=course-watch.component.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: CourseService }, { type: NoteService }, { type: QaService }, { type: ToastrService }], { videoRef: [{
    type: ViewChild,
    args: ["videoPlayer"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CourseWatchComponent, { className: "CourseWatchComponent", filePath: "src/app/features/courses/course-watch/course-watch.component.ts", lineNumber: 22 });
})();
export {
  CourseWatchComponent
};
//# sourceMappingURL=chunk-YBM3OBMO.js.map
