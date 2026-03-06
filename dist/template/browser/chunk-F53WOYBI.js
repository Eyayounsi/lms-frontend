import {
  require_sweetalert2_all
} from "./chunk-GO5GBTKS.js";
import {
  SafeUrlPipe
} from "./chunk-5AFZJH43.js";
import {
  CourseService
} from "./chunk-C7JGHRMX.js";
import "./chunk-MFSRU4HL.js";
import {
  routes
} from "./chunk-E6TQA5KL.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RadioControlValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-VF2E3YWR.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-TPKO67I6.js";
import "./chunk-QFZWCWB7.js";
import "./chunk-PXFMCAI3.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle
} from "./chunk-YBJXKBE2.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5DE2SIVI.js";
import {
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-TXDUYLVM.js";

// src/app/features/courses/add-course/add-course.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = (a0, a1) => ({ "progress-active": a0, "progress-activated": a1 });
var _c1 = (a0) => ({ "display": a0 });
function AddCourseComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 184);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 185);
    \u0275\u0275listener("click", function AddCourseComponent_div_5_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.errorMsg = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMsg, " ");
  }
}
function AddCourseComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 186);
    \u0275\u0275element(1, "i", 187);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 185);
    \u0275\u0275listener("click", function AddCourseComponent_div_6_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.successMsg = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.successMsg, " ");
  }
}
function AddCourseComponent_option_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r4 = ctx.$implicit;
    \u0275\u0275property("ngValue", cat_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r4.name);
  }
}
function AddCourseComponent_div_128_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 188)(2, "input", 189);
    \u0275\u0275twoWayListener("ngModelChange", function AddCourseComponent_div_128_Template_input_ngModelChange_2_listener($event) {
      const i_r6 = \u0275\u0275restoreView(_r5).index;
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.objectives[i_r6], $event) || (ctx_r1.objectives[i_r6] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 190);
    \u0275\u0275listener("click", function AddCourseComponent_div_128_Template_a_click_3_listener() {
      const i_r6 = \u0275\u0275restoreView(_r5).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeObjective(i_r6));
    });
    \u0275\u0275element(4, "i", 191);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r6 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.objectives[i_r6]);
  }
}
function AddCourseComponent_div_137_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 188)(2, "input", 192);
    \u0275\u0275twoWayListener("ngModelChange", function AddCourseComponent_div_137_Template_input_ngModelChange_2_listener($event) {
      const i_r8 = \u0275\u0275restoreView(_r7).index;
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.requirements[i_r8], $event) || (ctx_r1.requirements[i_r8] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 190);
    \u0275\u0275listener("click", function AddCourseComponent_div_137_Template_a_click_3_listener() {
      const i_r8 = \u0275\u0275restoreView(_r7).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeRequirement(i_r8));
    });
    \u0275\u0275element(4, "i", 191);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r8 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.requirements[i_r8]);
  }
}
function AddCourseComponent_span_149_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 193);
  }
}
function AddCourseComponent_div_164_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "img", 194);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.coverPreview, \u0275\u0275sanitizeUrl);
  }
}
function AddCourseComponent_div_165_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 195)(2, "div", 196);
    \u0275\u0275element(3, "i", 197);
    \u0275\u0275elementStart(4, "p", 198);
    \u0275\u0275text(5, "Upload Image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 199);
    \u0275\u0275text(7, "JPEG, PNG, WebP max 2 MB");
    \u0275\u0275elementEnd()()()();
  }
}
function AddCourseComponent_span_177_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 193);
  }
}
function AddCourseComponent_div_191_div_10_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 229);
  }
}
function AddCourseComponent_div_191_div_10_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 230);
  }
}
function AddCourseComponent_div_191_div_10_i_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 231);
  }
}
function AddCourseComponent_div_191_div_10_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 232);
    \u0275\u0275text(1, "Free");
    \u0275\u0275elementEnd();
  }
}
function AddCourseComponent_div_191_div_10_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 233);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lesson_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDuration(lesson_r11.durationSeconds), " ");
  }
}
function AddCourseComponent_div_191_div_10_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 232);
    \u0275\u0275element(1, "i", 234);
    \u0275\u0275text(2, "Vid\xE9o ");
    \u0275\u0275elementEnd();
  }
}
function AddCourseComponent_div_191_div_10_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 235);
    \u0275\u0275element(1, "i", 236);
    \u0275\u0275text(2, "PDF ");
    \u0275\u0275elementEnd();
  }
}
function AddCourseComponent_div_191_div_10_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 237);
    \u0275\u0275element(1, "i", 238);
    \u0275\u0275text(2, "Article ");
    \u0275\u0275elementEnd();
  }
}
function AddCourseComponent_div_191_div_10_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 239);
    \u0275\u0275element(1, "i", 240);
    \u0275\u0275text(2, "Quiz ");
    \u0275\u0275elementEnd();
  }
}
function AddCourseComponent_div_191_div_10_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 241);
    \u0275\u0275listener("click", function AddCourseComponent_div_191_div_10_button_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const lesson_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteContent(lesson_r11, "video"));
    });
    \u0275\u0275element(1, "i", 191);
    \u0275\u0275elementEnd();
  }
}
function AddCourseComponent_div_191_div_10_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 242);
    \u0275\u0275listener("click", function AddCourseComponent_div_191_div_10_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const lesson_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteContent(lesson_r11, "pdf"));
    });
    \u0275\u0275element(1, "i", 191);
    \u0275\u0275elementEnd();
  }
}
function AddCourseComponent_div_191_div_10_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 243);
    \u0275\u0275listener("click", function AddCourseComponent_div_191_div_10_button_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const lesson_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteContent(lesson_r11, "article"));
    });
    \u0275\u0275element(1, "i", 191);
    \u0275\u0275elementEnd();
  }
}
function AddCourseComponent_div_191_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 211)(1, "div", 75)(2, "span");
    \u0275\u0275template(3, AddCourseComponent_div_191_div_10_i_3_Template, 1, 0, "i", 212)(4, AddCourseComponent_div_191_div_10_i_4_Template, 1, 0, "i", 213)(5, AddCourseComponent_div_191_div_10_i_5_Template, 1, 0, "i", 214);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 215);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, AddCourseComponent_div_191_div_10_span_8_Template, 2, 0, "span", 216)(9, AddCourseComponent_div_191_div_10_span_9_Template, 2, 1, "span", 217)(10, AddCourseComponent_div_191_div_10_span_10_Template, 3, 0, "span", 216)(11, AddCourseComponent_div_191_div_10_span_11_Template, 3, 0, "span", 218)(12, AddCourseComponent_div_191_div_10_span_12_Template, 3, 0, "span", 219)(13, AddCourseComponent_div_191_div_10_span_13_Template, 3, 0, "span", 220);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 221)(15, "button", 222);
    \u0275\u0275listener("click", function AddCourseComponent_div_191_div_10_Template_button_click_15_listener() {
      const lesson_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openPreview(lesson_r11));
    });
    \u0275\u0275element(16, "i", 223);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 224);
    \u0275\u0275listener("click", function AddCourseComponent_div_191_div_10_Template_button_click_17_listener() {
      const lesson_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.triggerVideoUpload(lesson_r11.id));
    });
    \u0275\u0275element(18, "i", 108);
    \u0275\u0275elementStart(19, "span", 225);
    \u0275\u0275text(20, "Vid\xE9o");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, AddCourseComponent_div_191_div_10_button_21_Template, 2, 0, "button", 226);
    \u0275\u0275elementStart(22, "button", 224);
    \u0275\u0275listener("click", function AddCourseComponent_div_191_div_10_Template_button_click_22_listener() {
      const lesson_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.triggerPdfUpload(lesson_r11.id));
    });
    \u0275\u0275element(23, "i", 116);
    \u0275\u0275elementStart(24, "span", 225);
    \u0275\u0275text(25, "PDF");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, AddCourseComponent_div_191_div_10_button_26_Template, 2, 0, "button", 227);
    \u0275\u0275elementStart(27, "button", 224);
    \u0275\u0275listener("click", function AddCourseComponent_div_191_div_10_Template_button_click_27_listener() {
      const lesson_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openArticleEditor(lesson_r11));
    });
    \u0275\u0275element(28, "i", 118);
    \u0275\u0275elementStart(29, "span", 225);
    \u0275\u0275text(30, "Article");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(31, AddCourseComponent_div_191_div_10_button_31_Template, 2, 0, "button", 228);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lesson_r11 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", lesson_r11.lessonType === "VIDEO" || !lesson_r11.lessonType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", lesson_r11.lessonType === "TEXT");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", lesson_r11.lessonType === "PDF");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lesson_r11.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", lesson_r11.free);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", lesson_r11.durationSeconds);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", lesson_r11.videoUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", lesson_r11.pdfUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", lesson_r11.articleContent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", lesson_r11.hasQuiz);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("btn-success", lesson_r11.videoUrl)("btn-outline-success", !lesson_r11.videoUrl);
    \u0275\u0275property("title", \u0275\u0275interpolate(lesson_r11.videoUrl ? "Remplacer la vid\xE9o" : "Ajouter une vid\xE9o"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", lesson_r11.videoUrl);
    \u0275\u0275advance();
    \u0275\u0275classProp("btn-info", lesson_r11.pdfUrl)("btn-outline-info", !lesson_r11.pdfUrl);
    \u0275\u0275property("title", \u0275\u0275interpolate(lesson_r11.pdfUrl ? "Remplacer le PDF" : "Ajouter un PDF"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", lesson_r11.pdfUrl);
    \u0275\u0275advance();
    \u0275\u0275classProp("btn-warning", lesson_r11.articleContent)("btn-outline-warning", !lesson_r11.articleContent);
    \u0275\u0275property("title", \u0275\u0275interpolate(lesson_r11.articleContent ? "Modifier l'article" : "R\xE9diger un article"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", lesson_r11.articleContent);
  }
}
function AddCourseComponent_div_191_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 200)(1, "h2", 201)(2, "a", 202)(3, "span", 203);
    \u0275\u0275element(4, "i", 204);
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "span", 205);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "div", 206)(9, "div", 207);
    \u0275\u0275template(10, AddCourseComponent_div_191_div_10_Template, 32, 31, "div", 208);
    \u0275\u0275elementStart(11, "div", 209)(12, "button", 65);
    \u0275\u0275listener("click", function AddCourseComponent_div_191_Template_button_click_12_listener() {
      const section_r15 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddLessonModal(section_r15.id));
    });
    \u0275\u0275element(13, "i", 210);
    \u0275\u0275text(14, "Add Lesson ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const section_r15 = ctx.$implicit;
    const si_r16 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-bs-target", "#sec" + si_r16);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", section_r15.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (section_r15.lessons == null ? null : section_r15.lessons.length) || 0, " le\xE7ons");
    \u0275\u0275advance();
    \u0275\u0275property("id", "sec" + si_r16);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", section_r15.lessons);
  }
}
function AddCourseComponent_div_192_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 244);
    \u0275\u0275element(1, "i", 245);
    \u0275\u0275text(2, ' Aucune section pour le moment. Cliquez sur "Add New Section" pour commencer. ');
    \u0275\u0275elementEnd();
  }
}
function AddCourseComponent_ng_container_254_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 250);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.discountPercent, "% de r\xE9duction");
  }
}
function AddCourseComponent_ng_container_254_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 246)(2, "label", 21);
    \u0275\u0275text(3, "Discount Price (\u20AC)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 247);
    \u0275\u0275twoWayListener("ngModelChange", function AddCourseComponent_ng_container_254_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.step5.discountPrice, $event) || (ctx_r1.step5.discountPrice = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AddCourseComponent_ng_container_254_span_5_Template, 2, 1, "span", 248);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 83)(7, "label", 21);
    \u0275\u0275text(8, "Discount ends at");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 249);
    \u0275\u0275twoWayListener("ngModelChange", function AddCourseComponent_ng_container_254_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.step5.discountEndsAt, $event) || (ctx_r1.step5.discountEndsAt = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.step5.discountPrice);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.discountPercent > 0);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.step5.discountEndsAt);
  }
}
function AddCourseComponent_span_262_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 193);
  }
}
function AddCourseComponent_i_263_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 251);
  }
}
function AddCourseComponent_span_266_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 193);
  }
}
function AddCourseComponent_i_267_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 252);
  }
}
function AddCourseComponent_div_317_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 83)(1, "label", 21);
    \u0275\u0275text(2, "URL Vid\xE9o embed ");
    \u0275\u0275elementStart(3, "span", 253);
    \u0275\u0275text(4, "(optionnel)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "input", 254);
    \u0275\u0275twoWayListener("ngModelChange", function AddCourseComponent_div_317_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newLesson.videoUrl, $event) || (ctx_r1.newLesson.videoUrl = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newLesson.videoUrl);
  }
}
function AddCourseComponent_ng_container_328_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 255);
    \u0275\u0275element(2, "i", 238);
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "L'\xE9diteur s'ouvrira automatiquement.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function AddCourseComponent_span_373_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 256);
    \u0275\u0275element(1, "i", 257);
    \u0275\u0275text(2, "Sauvegard\xE9 ");
    \u0275\u0275elementEnd();
  }
}
function AddCourseComponent_div_429_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 261)(1, "h6", 262)(2, "span", 263);
    \u0275\u0275element(3, "i", 234);
    \u0275\u0275text(4, "Vid\xE9o");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "video", 264);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", ctx_r1.getFileUrl(ctx_r1.previewLesson.videoUrl), \u0275\u0275sanitizeUrl);
  }
}
function AddCourseComponent_div_429_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 261)(1, "h6", 262)(2, "span", 265);
    \u0275\u0275element(3, "i", 236);
    \u0275\u0275text(4, "PDF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 266);
    \u0275\u0275element(6, "i", 267);
    \u0275\u0275text(7, "Ouvrir dans un onglet ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "iframe", 268);
    \u0275\u0275pipe(9, "safeUrl");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("href", ctx_r1.getFileUrl(ctx_r1.previewLesson.pdfUrl), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", \u0275\u0275pipeBind1(9, 2, ctx_r1.getFileUrl(ctx_r1.previewLesson.pdfUrl)), \u0275\u0275sanitizeResourceUrl);
  }
}
function AddCourseComponent_div_429_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 261)(1, "h6", 262)(2, "span", 269);
    \u0275\u0275element(3, "i", 270);
    \u0275\u0275text(4, "Article");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 271);
    \u0275\u0275text(6, "Les blocs de code affichent un bouton ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8, "Ex\xE9cuter");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(9, "div", 272);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275property("innerHTML", ctx_r1.previewLesson.articleContent, \u0275\u0275sanitizeHtml);
  }
}
function AddCourseComponent_div_429_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 273);
    \u0275\u0275element(1, "i", 245);
    \u0275\u0275text(2, " Aucun contenu disponible. Utilisez les boutons Vid\xE9o / PDF / Article dans le curriculum pour ajouter du contenu \xE0 cette le\xE7on. ");
    \u0275\u0275elementEnd();
  }
}
function AddCourseComponent_div_429_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 258);
    \u0275\u0275template(1, AddCourseComponent_div_429_div_1_Template, 6, 1, "div", 259)(2, AddCourseComponent_div_429_div_2_Template, 10, 4, "div", 259)(3, AddCourseComponent_div_429_div_3_Template, 10, 1, "div", 259)(4, AddCourseComponent_div_429_div_4_Template, 3, 0, "div", 260);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.previewLesson.videoUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.previewLesson.pdfUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.previewLesson.articleContent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.previewLesson.videoUrl && !ctx_r1.previewLesson.pdfUrl && !ctx_r1.previewLesson.articleContent);
  }
}
var AddCourseComponent = class _AddCourseComponent {
  courseService;
  router;
  route;
  routes = routes;
  //  Wizard step 
  selectedFieldSet = [0];
  //  Statut 
  loading = false;
  errorMsg = "";
  successMsg = "";
  //  Données persistées côté backend (ID du cours créé) 
  courseId = null;
  //  Étape 1 : Informations de base 
  categories = [];
  step1 = {
    title: "",
    description: "",
    shortDescription: "",
    categoryId: null,
    level: "BEGINNER",
    language: "Fran\xE7ais",
    featured: false
  };
  objectives = [""];
  requirements = [""];
  //  Étape 2 : Médias 
  coverFile = null;
  coverPreview = null;
  introVideoUrl = "";
  //  Étape 3 : Curriculum 
  sections = [];
  newSectionTitle = "";
  newLesson = {
    sectionId: null,
    title: "",
    type: "VIDEO",
    videoUrl: "",
    isFree: false
  };
  //  Étape 5 : Tarification 
  step5 = {
    price: 0,
    isFree: false,
    hasDiscount: false,
    discountPrice: null,
    discountEndsAt: ""
  };
  isEditMode = false;
  courseStatus = "";
  // DRAFT | PENDING_REVIEW | PUBLISHED | REJECTED
  constructor(courseService, router, route) {
    this.courseService = courseService;
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    this.courseService.getCategories().subscribe({
      next: (cats) => this.categories = cats,
      error: () => this.categories = []
    });
    this.route.queryParams.subscribe((params) => {
      if (params["id"]) {
        this.courseId = +params["id"];
        this.isEditMode = true;
        this.loadCourseForEdit();
      }
    });
  }
  loadCourseForEdit() {
    if (!this.courseId)
      return;
    this.loading = true;
    this.courseService.getMyCourse(this.courseId).subscribe({
      next: (course) => {
        this.loading = false;
        this.step1 = {
          title: course.title || "",
          description: course.description || "",
          shortDescription: course.shortDescription || "",
          categoryId: course.categoryId || null,
          level: course.level || "BEGINNER",
          language: course.language || "Fran\xE7ais",
          featured: !!course.featured
        };
        const objLines = course.objectives ? course.objectives.split("\n").filter((o) => o.trim()) : [];
        this.objectives = objLines.length ? objLines : [""];
        const reqLines = course.requirements ? course.requirements.split("\n").filter((r) => r.trim()) : [];
        this.requirements = reqLines.length ? reqLines : [""];
        this.step5.price = course.price || 0;
        this.step5.isFree = !course.price || course.price === 0;
        this.sections = course.sections || [];
        this.courseStatus = course.status || "";
        if (this.courseStatus === "PENDING") {
          import_sweetalert2.default.fire({
            icon: "info",
            title: "Cours en attente de validation",
            html: "Ce cours est actuellement <b>en attente de validation</b> par un administrateur.<br>Aucune modification n'est possible tant que la validation n'a pas \xE9t\xE9 effectu\xE9e.",
            confirmButtonText: "OK",
            confirmButtonColor: "#6c63ff"
          }).then(() => this.router.navigate([this.routes.instructorCourse]));
        }
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  ngOnDestroy() {
  }
  //  Utilitaires 
  addObjective() {
    this.objectives.push("");
  }
  removeObjective(i) {
    if (this.objectives.length > 1)
      this.objectives.splice(i, 1);
  }
  addRequirement() {
    this.requirements.push("");
  }
  removeRequirement(i) {
    if (this.requirements.length > 1)
      this.requirements.splice(i, 1);
  }
  trackByIndex(i) {
    return i;
  }
  //  Étape 1  créer le cours 
  saveStep1() {
    if (!this.step1.title.trim()) {
      this.errorMsg = "Le titre du cours est obligatoire.";
      return;
    }
    this.errorMsg = "";
    this.loading = true;
    const payload = {
      title: this.step1.title,
      description: this.step1.description,
      shortDescription: this.step1.shortDescription,
      categoryId: this.step1.categoryId,
      level: this.step1.level,
      language: this.step1.language,
      featured: this.step1.featured,
      objectives: this.objectives.filter((o) => o.trim()).join("\n"),
      requirements: this.requirements.filter((r) => r.trim()).join("\n"),
      price: 0
    };
    if (this.courseId) {
      this.courseService.updateCourse(this.courseId, payload).subscribe({
        next: () => {
          this.loading = false;
          this.selectedFieldSet[0] = 1;
        },
        error: (e) => {
          this.loading = false;
          this.errorMsg = e?.error?.message || "Erreur lors de la mise \xE0 jour.";
        }
      });
    } else {
      this.courseService.createCourse(payload).subscribe({
        next: (course) => {
          this.courseId = course.id;
          this.loading = false;
          this.selectedFieldSet[0] = 1;
        },
        error: (e) => {
          this.loading = false;
          this.errorMsg = e?.error?.message || "Erreur lors de la cr\xE9ation.";
        }
      });
    }
  }
  //  Étape 2  upload couverture 
  onCoverSelected(event) {
    const input = event.target;
    if (input.files && input.files[0]) {
      this.coverFile = input.files[0];
      const reader = new FileReader();
      reader.onload = (e) => this.coverPreview = e.target?.result;
      reader.readAsDataURL(this.coverFile);
    }
  }
  saveStep2() {
    if (!this.courseId) {
      this.selectedFieldSet[0] = 0;
      return;
    }
    if (!this.coverFile) {
      this.selectedFieldSet[0] = 2;
      this.loadCurriculum();
      return;
    }
    this.loading = true;
    this.courseService.uploadCoverImage(this.courseId, this.coverFile).subscribe({
      next: () => {
        this.loading = false;
        this.selectedFieldSet[0] = 2;
        this.loadCurriculum();
      },
      error: (e) => {
        this.loading = false;
        this.errorMsg = e?.error?.message || "Erreur lors de l'upload.";
      }
    });
  }
  //  Étape 3 : Curriculum 
  loadCurriculum() {
    if (!this.courseId)
      return;
    this.courseService.getMyCourse(this.courseId).subscribe({
      next: (c) => this.sections = c.sections || [],
      error: () => this.sections = []
    });
  }
  openAddSectionModal() {
    this.newSectionTitle = "";
    const el = document.getElementById("add-topic");
    if (el) {
      const modal = new bootstrap.Modal(el);
      modal.show();
    }
  }
  confirmAddSection() {
    if (!this.newSectionTitle.trim() || !this.courseId)
      return;
    this.courseService.addSection(this.courseId, { title: this.newSectionTitle }).subscribe({
      next: (sec) => {
        this.sections.push(__spreadProps(__spreadValues({}, sec), { lessons: [] }));
        this.newSectionTitle = "";
      },
      error: () => {
      }
    });
  }
  openAddLessonModal(sectionId) {
    this.newLesson = { sectionId, title: "", type: "VIDEO", videoUrl: "", isFree: false };
    const el = document.getElementById("add-lesson");
    if (el) {
      const modal = new bootstrap.Modal(el);
      modal.show();
    }
  }
  confirmAddLesson() {
    if (!this.newLesson.title.trim() || !this.newLesson.sectionId)
      return;
    const lessonPayload = {
      title: this.newLesson.title,
      lessonType: this.newLesson.type,
      isFree: this.newLesson.isFree
    };
    if (this.newLesson.type === "VIDEO" && this.newLesson.videoUrl.trim()) {
      lessonPayload.videoUrl = this.newLesson.videoUrl.trim();
    }
    const selectedType = this.newLesson.type;
    this.courseService.addLesson(this.newLesson.sectionId, lessonPayload).subscribe({
      next: (lesson) => {
        if (!lesson.lessonType || lesson.lessonType === "VIDEO" && selectedType !== "VIDEO") {
          lesson.lessonType = selectedType;
        }
        const section = this.sections.find((s) => s.id === this.newLesson.sectionId);
        if (section)
          section.lessons = [...section.lessons || [], lesson];
        if (selectedType === "TEXT") {
          setTimeout(() => this.openArticleEditor(lesson), 600);
        }
      },
      error: () => {
      }
    });
  }
  //  Upload vidéo pour une leçon
  triggerVideoUpload(lessonId) {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "video/*";
    input.onchange = (e) => {
      const file = e.target.files?.[0];
      if (!file)
        return;
      this.loading = true;
      this.courseService.uploadLessonVideo(lessonId, file).subscribe({
        next: () => {
          this.loading = false;
          this.successMsg = "Vid\xE9o upload\xE9e !";
          this.loadCurriculum();
        },
        error: (err) => {
          this.loading = false;
          this.errorMsg = err.error?.message || "Erreur upload vid\xE9o";
        }
      });
    };
    input.click();
  }
  //  Upload PDF pour une leçon
  triggerPdfUpload(lessonId) {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/pdf";
    input.onchange = (e) => {
      const file = e.target.files?.[0];
      if (!file)
        return;
      this.loading = true;
      this.courseService.uploadLessonPdf(lessonId, file).subscribe({
        next: () => {
          this.loading = false;
          this.successMsg = "PDF upload\xE9 !";
          this.loadCurriculum();
        },
        error: (err) => {
          this.loading = false;
          this.errorMsg = err.error?.message || "Erreur upload PDF";
        }
      });
    };
    input.click();
  }
  //  Étape 4  mise à jour objectives/requirements 
  saveStep4() {
    if (!this.courseId) {
      this.selectedFieldSet[0] = 4;
      return;
    }
    this.loading = true;
    const payload = {
      title: this.step1.title,
      description: this.step1.description,
      shortDescription: this.step1.shortDescription,
      categoryId: this.step1.categoryId,
      level: this.step1.level,
      language: this.step1.language,
      featured: this.step1.featured,
      objectives: this.objectives.filter((o) => o.trim()).join("\n"),
      requirements: this.requirements.filter((r) => r.trim()).join("\n"),
      price: this.step5.isFree ? 0 : this.step5.price || 0
    };
    this.courseService.updateCourse(this.courseId, payload).subscribe({
      next: () => {
        this.loading = false;
        this.selectedFieldSet[0] = 4;
      },
      error: (e) => {
        this.loading = false;
        this.errorMsg = e?.error?.message || "Erreur.";
      }
    });
  }
  //  Étape 5  tarification + soumettre / sauvegarder brouillon
  /** Affiche une alerte SweetAlert2 de confirmation avant d'enregistrer le brouillon */
  saveDraft() {
    if (!this.courseId)
      return;
    import_sweetalert2.default.fire({
      icon: "info",
      title: "Enregistrer comme brouillon",
      html: `Le cours sera enregistr\xE9 en <b>brouillon</b>.<br>
             <span style="color:#6c757d;font-size:0.9em">Il ne sera pas publi\xE9 tant qu'il n'est pas soumis pour validation.</span>`,
      confirmButtonText: "Enregistrer",
      cancelButtonText: "Annuler",
      confirmButtonColor: "#0dcaf0",
      cancelButtonColor: "#6c757d",
      showCancelButton: true,
      timer: 1e4,
      timerProgressBar: true,
      allowOutsideClick: false,
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this._doSaveDraft();
      }
    });
  }
  /** Logique réelle de sauvegarde brouillon — appelée après confirmation Swal */
  _doSaveDraft() {
    this.errorMsg = "";
    this.loading = true;
    const payload = {
      title: this.step1.title,
      description: this.step1.description,
      shortDescription: this.step1.shortDescription,
      categoryId: this.step1.categoryId,
      level: this.step1.level,
      language: this.step1.language,
      featured: this.step1.featured,
      objectives: this.objectives.filter((o) => o.trim()).join("\n"),
      requirements: this.requirements.filter((r) => r.trim()).join("\n"),
      price: this.step5.isFree ? 0 : this.step5.price || 0,
      discountPrice: this.step5.hasDiscount && this.step5.discountPrice ? this.step5.discountPrice : null,
      discountEndsAt: this.step5.hasDiscount && this.step5.discountEndsAt ? this.step5.discountEndsAt : null
    };
    this.courseService.updateCourse(this.courseId, payload).subscribe({
      next: () => {
        this.loading = false;
        import_sweetalert2.default.fire({
          icon: "success",
          title: "Brouillon enregistr\xE9 !",
          text: "Votre cours a \xE9t\xE9 sauvegard\xE9. Vous pourrez le soumettre quand il sera pr\xEAt.",
          confirmButtonText: "Mes cours",
          confirmButtonColor: "#198754",
          timer: 4e3,
          timerProgressBar: true
        }).then(() => this.router.navigate([this.routes.instructorMyCourses]));
      },
      error: (e) => {
        this.loading = false;
        this.errorMsg = e?.error?.message || "Erreur lors de la sauvegarde.";
      }
    });
  }
  get discountPercent() {
    if (!this.step5.price || !this.step5.discountPrice)
      return 0;
    return Math.round((1 - this.step5.discountPrice / this.step5.price) * 100);
  }
  /** Affiche une alerte SweetAlert2 de confirmation avant de soumettre pour révision */
  submitCourse() {
    if (!this.courseId)
      return;
    if (this.courseStatus === "PENDING_REVIEW") {
      import_sweetalert2.default.fire({
        icon: "info",
        title: "D\xE9j\xE0 soumis",
        text: "Ce cours est d\xE9j\xE0 en attente de validation par un administrateur. Vous serez notifi\xE9 une fois qu'il est approuv\xE9.",
        confirmButtonColor: "#6c63ff"
      });
      return;
    }
    const emptySections = [];
    for (const sec of this.sections) {
      const hasContent = (sec.lessons || []).some((l) => l.videoUrl || l.pdfUrl || l.articleContent);
      if (!hasContent)
        emptySections.push(sec.title);
    }
    if (this.sections.length === 0) {
      import_sweetalert2.default.fire({ icon: "error", title: "Curriculum vide", text: "Ajoutez au moins une section et une le\xE7on avant de soumettre." });
      return;
    }
    if (emptySections.length > 0) {
      import_sweetalert2.default.fire({
        icon: "warning",
        title: "Section(s) sans contenu",
        html: `Les sections suivantes n'ont aucune le\xE7on avec contenu :<br><br>
               <b>${emptySections.map((s) => `\xAB\xA0${s}\xA0\xBB`).join("<br>")}</b><br><br>
               Ajoutez au moins une vid\xE9o, un PDF ou un article par section.`,
        confirmButtonText: "Retour au curriculum",
        confirmButtonColor: "#e53e3e"
      }).then(() => this.selectedFieldSet[0] = 2);
      return;
    }
    const isPublished = this.courseStatus === "PUBLISHED";
    import_sweetalert2.default.fire({
      icon: "warning",
      title: isPublished ? "Soumettre les modifications ?" : "Soumettre pour validation ?",
      html: isPublished ? `Vos modifications seront soumises pour validation par l'administrateur.<br>
           <b>Le cours restera visible aux \xE9tudiants</b> pendant l'examen.` : `Une fois soumis, <b>vous ne pourrez plus modifier ce cours</b><br>
             tant qu'il est en attente de validation par l'administrateur.`,
      confirmButtonText: '<i class="isax isax-send me-1"></i> Confirmer',
      cancelButtonText: "Annuler",
      confirmButtonColor: "#d63384",
      cancelButtonColor: "#6c757d",
      showCancelButton: true,
      timer: 1e4,
      timerProgressBar: true,
      allowOutsideClick: false,
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this._doSubmitCourse();
      }
    });
  }
  /** Logique réelle de soumission — appelée après confirmation Swal */
  _doSubmitCourse() {
    this.loading = true;
    const isPublished = this.courseStatus === "PUBLISHED";
    const payload = {
      title: this.step1.title,
      description: this.step1.description,
      shortDescription: this.step1.shortDescription,
      categoryId: this.step1.categoryId,
      level: this.step1.level,
      language: this.step1.language,
      featured: this.step1.featured,
      objectives: this.objectives.filter((o) => o.trim()).join("\n"),
      requirements: this.requirements.filter((r) => r.trim()).join("\n"),
      price: this.step5.isFree ? 0 : this.step5.price,
      discountPrice: this.step5.hasDiscount && this.step5.discountPrice ? this.step5.discountPrice : null,
      discountEndsAt: this.step5.hasDiscount && this.step5.discountEndsAt ? this.step5.discountEndsAt : null
    };
    this.courseService.updateCourse(this.courseId, payload).subscribe({
      next: () => {
        if (isPublished) {
          this.loading = false;
          import_sweetalert2.default.fire({
            icon: "success",
            title: "Modifications soumises",
            text: "Vos modifications ont \xE9t\xE9 enregistr\xE9es et soumises pour validation. L'administrateur les examinera prochainement. Le cours reste visible aux \xE9tudiants en attendant.",
            confirmButtonColor: "#6c63ff"
          });
          return;
        }
        this.courseService.submitForReview(this.courseId).subscribe({
          next: () => {
            this.loading = false;
            this.courseStatus = "PENDING_REVIEW";
            const el = document.getElementById("success");
            if (el) {
              const modal = new bootstrap.Modal(el);
              modal.show();
            }
          },
          error: (e) => {
            this.loading = false;
            this.errorMsg = e?.error?.message || "Erreur lors de la soumission.";
          }
        });
      },
      error: (e) => {
        this.loading = false;
        this.errorMsg = e?.error?.message || "Erreur lors de la mise \xE0 jour.";
      }
    });
  }
  formatDuration(seconds) {
    if (!seconds)
      return "";
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${s.toString().padStart(2, "0")}s`;
  }
  // ─── Lesson preview ─────────────────────────────────────────────────────────────────
  previewLesson = null;
  openPreview(lesson) {
    this.previewLesson = lesson;
    setTimeout(() => {
      const el = document.getElementById("lesson_preview_modal");
      if (!el)
        return;
      const modal = bootstrap.Modal.getInstance(el) || new bootstrap.Modal(el);
      el.addEventListener("shown.bs.modal", () => {
        const body = el.querySelector(".article-preview-body");
        if (body)
          this._initCodeBlocks(body);
      }, { once: true });
      modal.show();
    }, 50);
  }
  getFileUrl(path) {
    if (!path)
      return "#";
    const clean = path.startsWith("/") ? path : "/" + path;
    return "http://localhost:8081" + clean;
  }
  // ─── Article editor (Quill.js) ───────────────────────────────────────────
  articleLesson = null;
  articleSaving = false;
  articleSaved = false;
  _quill = null;
  // Quill instance, initialized on first modal open
  openArticleEditor(lesson) {
    this.articleLesson = lesson;
    this.articleSaved = false;
    const el = document.getElementById("article_editor_modal");
    if (!el)
      return;
    const bsModal = bootstrap.Modal.getInstance(el) || new bootstrap.Modal(el);
    if (this._quill) {
      this._quill.root.innerHTML = "";
      if (lesson.articleContent) {
        this._quill.clipboard.dangerouslyPasteHTML(lesson.articleContent);
      }
      bsModal.show();
      return;
    }
    el.addEventListener("shown.bs.modal", () => {
      const Quill = window.Quill;
      if (!Quill || this._quill)
        return;
      this._quill = new Quill("#quill-editor-container", {
        theme: "snow",
        modules: { toolbar: "#ql-article-toolbar" },
        placeholder: "R\xE9digez votre article ici\u2026"
      });
      if (lesson.articleContent) {
        this._quill.clipboard.dangerouslyPasteHTML(lesson.articleContent);
      }
    }, { once: true });
    bsModal.show();
  }
  // ─── Suppression de contenu d'une leçon ─────────────────────────────
  deleteContent(lesson, type) {
    const labels = { video: "vid\xE9o", pdf: "PDF", article: "article" };
    import_sweetalert2.default.fire({
      icon: "warning",
      title: `Supprimer la ${labels[type]} ?`,
      text: `Cette action est irr\xE9versible. La ${labels[type]} de la le\xE7on \xAB ${lesson.title} \xBB sera d\xE9finitivement supprim\xE9e.`,
      showCancelButton: true,
      confirmButtonText: "Supprimer",
      cancelButtonText: "Annuler",
      confirmButtonColor: "#e53e3e",
      cancelButtonColor: "#6c757d",
      reverseButtons: true
    }).then((result) => {
      if (!result.isConfirmed)
        return;
      const obs = type === "video" ? this.courseService.deleteLessonVideo(lesson.id) : type === "pdf" ? this.courseService.deleteLessonPdf(lesson.id) : this.courseService.deleteLessonArticle(lesson.id);
      obs.subscribe({
        next: (updated) => {
          lesson.videoUrl = updated.videoUrl ?? null;
          lesson.pdfUrl = updated.pdfUrl ?? null;
          lesson.articleContent = updated.articleContent ?? null;
          lesson.lessonType = updated.lessonType ?? "VIDEO";
        },
        error: (e) => {
          import_sweetalert2.default.fire({ icon: "error", title: "Erreur", text: e?.error?.message || "Impossible de supprimer le contenu." });
        }
      });
    });
  }
  saveArticle() {
    if (!this._quill || !this.articleLesson)
      return;
    const content = this._quill.root.innerHTML;
    this.articleSaving = true;
    this.courseService.saveArticleContent(this.articleLesson.id, content).subscribe({
      next: (_) => {
        this.articleLesson.articleContent = content;
        this.articleLesson.lessonType = "TEXT";
        for (const sec of this.sections) {
          const idx = (sec.lessons || []).findIndex((l) => l.id === this.articleLesson.id);
          if (idx >= 0) {
            sec.lessons[idx] = __spreadProps(__spreadValues({}, sec.lessons[idx]), { articleContent: content, lessonType: "TEXT" });
            break;
          }
        }
        this.articleSaving = false;
        this.articleSaved = true;
      },
      error: () => {
        this.articleSaving = false;
      }
    });
  }
  // ─── Shared code-block enhancer (article preview: instructor + admin) ────
  _initCodeBlocks(container) {
    const preBlocks = Array.from(container.querySelectorAll("pre:not([data-cb-enhanced])"));
    preBlocks.forEach((pre) => this._enhanceBlock(pre, pre.querySelector("code") || pre));
    const codeBlocks = Array.from(container.querySelectorAll("code:not(pre code):not([data-cb-enhanced])"));
    codeBlocks.forEach((code) => {
      code.style.display = "block";
      this._enhanceBlock(code, code);
    });
    if (preBlocks.length === 0 && codeBlocks.length === 0) {
      const text = container.textContent || "";
      if (/console\.|function |=>|var |let |const |<script|<div|document\.|window\.|import |export /.test(text)) {
        const banner = document.createElement("div");
        banner.setAttribute("data-cb-enhanced", "true");
        banner.style.cssText = "background:#2d2d2d;border:1px solid #3a3a3a;border-radius:6px;padding:10px 14px;display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;gap:12px;";
        banner.innerHTML = '<span style="font-size:12px;color:#aaa;font-family:monospace;"><i class="fa-solid fa-triangle-exclamation" style="color:#ffb74d;margin-right:6px"></i>Aucun bloc de code formel \u2014 le texte semble contenir du code.</span>';
        const runAll = document.createElement("button");
        runAll.innerHTML = '<i class="fa-solid fa-play" style="margin-right:5px"></i>Ex\xE9cuter comme JS';
        runAll.style.cssText = "font-size:11px;padding:4px 12px;border:1px solid #4caf50;background:transparent;color:#4caf50;border-radius:4px;cursor:pointer;white-space:nowrap;flex-shrink:0;";
        runAll.addEventListener("click", () => {
          let w = container.querySelector(".cb-smart-wrapper");
          if (!w) {
            w = document.createElement("div");
            w.className = "cb-smart-wrapper";
            container.appendChild(w);
          }
          this._runCode(text, "js", w);
        });
        banner.appendChild(runAll);
        container.insertBefore(banner, container.firstChild);
      }
    }
  }
  _enhanceBlock(blockEl, codeEl) {
    blockEl.setAttribute("data-cb-enhanced", "true");
    const raw = codeEl.textContent || "";
    if (!raw.trim())
      return;
    const classStr = (codeEl.className || "") + " " + (blockEl.className || "");
    const langMatch = classStr.match(/language-(\w+)|lang-(\w+)/i);
    const dataLang = blockEl.getAttribute("data-lang") || codeEl.getAttribute("data-lang") || "";
    const lang = langMatch ? (langMatch[1] || langMatch[2]).toLowerCase() : dataLang || "js";
    const isRunnable = true;
    const wrapper = document.createElement("div");
    wrapper.className = "cb-card mb-3 rounded overflow-hidden";
    wrapper.style.cssText = "border:1px solid #3a3a3a;";
    blockEl.parentNode?.insertBefore(wrapper, blockEl);
    wrapper.appendChild(blockEl);
    blockEl.style.cssText = "background:#1e1e1e;color:#d4d4d4;margin:0;padding:14px 18px;font-size:13px;line-height:1.65;overflow-x:auto;white-space:pre;font-family:monospace;";
    const bar = document.createElement("div");
    bar.style.cssText = "background:#2d2d2d;display:flex;justify-content:space-between;align-items:center;padding:5px 14px;gap:8px;";
    const badge = document.createElement("span");
    badge.textContent = lang.toUpperCase();
    badge.style.cssText = "font-size:10px;font-family:monospace;color:#aaa;letter-spacing:1px;";
    bar.appendChild(badge);
    const btnRow = document.createElement("div");
    btnRow.style.cssText = "display:flex;gap:6px;";
    if (isRunnable) {
      const runBtn = document.createElement("button");
      runBtn.innerHTML = '<i class="fa-solid fa-play" style="margin-right:4px"></i>Ex\xE9cuter';
      runBtn.style.cssText = "font-size:11px;padding:3px 10px;border:1px solid #4caf50;background:transparent;color:#4caf50;border-radius:4px;cursor:pointer;";
      runBtn.addEventListener("click", () => this._runCode(raw, lang, wrapper));
      btnRow.appendChild(runBtn);
    }
    const copyBtn = document.createElement("button");
    copyBtn.innerHTML = '<i class="fa-solid fa-copy" style="margin-right:4px"></i>Copier';
    copyBtn.style.cssText = "font-size:11px;padding:3px 10px;border:1px solid #888;background:transparent;color:#ccc;border-radius:4px;cursor:pointer;";
    copyBtn.addEventListener("click", () => {
      const fallback = () => {
        const t = document.createElement("textarea");
        t.value = raw;
        document.body.appendChild(t);
        t.select();
        document.execCommand("copy");
        document.body.removeChild(t);
      };
      navigator.clipboard?.writeText(raw).then(() => {
      }, fallback) ?? fallback();
      copyBtn.innerHTML = '<i class="fa-solid fa-check" style="margin-right:4px"></i>Copi\xE9 !';
      copyBtn.style.color = "#4ec9b0";
      copyBtn.style.borderColor = "#4ec9b0";
      setTimeout(() => {
        copyBtn.innerHTML = '<i class="fa-solid fa-copy" style="margin-right:4px"></i>Copier';
        copyBtn.style.color = "#ccc";
        copyBtn.style.borderColor = "#888";
      }, 2e3);
    });
    btnRow.appendChild(copyBtn);
    bar.appendChild(btnRow);
    wrapper.insertBefore(bar, blockEl);
  }
  _runCode(code, lang, wrapper) {
    wrapper.querySelector(".cb-runner")?.remove();
    const runner = document.createElement("div");
    runner.className = "cb-runner";
    runner.style.cssText = "border-top:1px solid #333;";
    const hdr = document.createElement("div");
    hdr.style.cssText = "display:flex;justify-content:space-between;align-items:center;padding:4px 14px;background:#111;";
    const X = document.createElement("button");
    X.textContent = "\u2715";
    X.style.cssText = "background:none;border:none;color:#888;cursor:pointer;font-size:14px;line-height:1;";
    X.addEventListener("click", () => runner.remove());
    if (lang === "html") {
      hdr.innerHTML = '<span style="font-size:12px;color:#aaa"><i class="fa-solid fa-display" style="color:#64b5f6;margin-right:6px"></i>Rendu HTML</span>';
      hdr.appendChild(X);
      runner.appendChild(hdr);
      const frame = document.createElement("iframe");
      frame.srcdoc = code;
      frame.setAttribute("sandbox", "allow-scripts allow-same-origin");
      frame.style.cssText = "width:100%;height:300px;border:none;background:#fff;display:block;";
      runner.appendChild(frame);
    } else if (["js", "javascript", "ts", "typescript"].includes(lang)) {
      hdr.innerHTML = '<span style="font-size:12px;color:#aaa"><i class="fa-solid fa-terminal" style="color:#a5d6a7;margin-right:6px"></i>Console (natif)</span>';
      hdr.appendChild(X);
      runner.appendChild(hdr);
      const out = document.createElement("div");
      out.style.cssText = "background:#0d0d0d;font-family:monospace;font-size:13px;padding:12px 16px;min-height:60px;max-height:240px;overflow-y:auto;";
      const logs = [];
      const orig = { log: console.log, error: console.error, warn: console.warn };
      const esc = (x) => (typeof x === "object" ? JSON.stringify(x, null, 2) : String(x)).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      console.log = (...a) => {
        orig.log(...a);
        logs.push(`<span style="color:#4ec9b0">${a.map(esc).join(" ")}</span>`);
      };
      console.error = (...a) => {
        orig.error(...a);
        logs.push(`<span style="color:#f44336">\u274C ${a.map(esc).join(" ")}</span>`);
      };
      console.warn = (...a) => {
        orig.warn(...a);
        logs.push(`<span style="color:#ffb74d">\u26A0\uFE0F ${a.map(esc).join(" ")}</span>`);
      };
      try {
        new Function(code)();
      } catch (e) {
        logs.push(`<span style="color:#f44336">\u274C ${esc(e.message)}</span>`);
      } finally {
        Object.assign(console, orig);
      }
      out.innerHTML = logs.length ? logs.join("<br>") : '<span style="color:#555">// Aucune sortie console</span>';
      runner.appendChild(out);
    } else {
      hdr.innerHTML = `<span style="font-size:12px;color:#aaa"><i class="fa-solid fa-cloud" style="color:#64b5f6;margin-right:6px"></i>Piston \u2014 ${lang.toUpperCase()}</span>`;
      hdr.appendChild(X);
      runner.appendChild(hdr);
      const out = document.createElement("div");
      out.style.cssText = "background:#0d0d0d;font-family:monospace;font-size:13px;padding:12px 16px;min-height:60px;max-height:240px;overflow-y:auto;";
      runner.appendChild(out);
      this._runWithPiston(code, lang, out);
    }
    wrapper.appendChild(runner);
  }
  // ─── Piston integration ───────────────────────────────────────────────
  //  Maps our language identifiers to Piston [language, version] tuples.
  //  See https://emkc.org/api/v2/piston/runtimes for the full list.
  PISTON_LANGS = {
    python: ["python", "3.10.0"],
    py: ["python", "3.10.0"],
    java: ["java", "15.0.2"],
    c: ["c", "10.2.0"],
    cpp: ["c++", "10.2.0"],
    bash: ["bash", "5.1.0"],
    sh: ["bash", "5.1.0"],
    php: ["php", "8.0.0"],
    ruby: ["ruby", "3.0.0"],
    rb: ["ruby", "3.0.0"],
    rust: ["rust", "1.50.0"],
    rs: ["rust", "1.50.0"],
    go: ["go", "1.16.2"],
    kotlin: ["kotlin", "1.6.0"],
    kt: ["kotlin", "1.6.0"],
    swift: ["swift", "5.3.3"],
    csharp: ["csharp", "6.12.0"],
    cs: ["csharp", "6.12.0"],
    r: ["r", "4.1.1"],
    sql: ["sqlite3", "3.36.0"]
  };
  _runWithPiston(code, lang, out) {
    const mapping = this.PISTON_LANGS[lang];
    const html = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>");
    if (!mapping) {
      out.innerHTML = `<span style="color:#ffb74d">\u26A0\uFE0F Langage "${lang}" non configur\xE9 pour l'ex\xE9cution.</span>`;
      return;
    }
    const [pistonLang, pistonVer] = mapping;
    out.innerHTML = '<span style="color:#aaa"><i class="fa-solid fa-spinner fa-spin" style="margin-right:6px"></i>Ex\xE9cution via Piston\u2026</span>';
    fetch("https://emkc.org/api/v2/piston/execute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        language: pistonLang,
        version: pistonVer,
        files: [{ content: code }]
      })
    }).then((r) => {
      if (!r.ok)
        throw new Error(`HTTP ${r.status}`);
      return r.json();
    }).then((res) => {
      const stdout = (res?.run?.stdout || "").trim();
      const stderr = (res?.run?.stderr || "").trim();
      const compile = (res?.compile?.stderr || "").trim();
      const parts = [];
      if (compile)
        parts.push(`<span style="color:#ff7043">\u2699\uFE0F Erreur de compilation:<br>${html(compile)}</span>`);
      if (stdout)
        parts.push(`<span style="color:#4ec9b0">${html(stdout)}</span>`);
      if (stderr)
        parts.push(`<span style="color:#f44336">\u274C ${html(stderr)}</span>`);
      if (!parts.length)
        parts.push('<span style="color:#555">// Aucune sortie</span>');
      out.innerHTML = parts.join("<br>");
    }).catch((e) => {
      out.innerHTML = `<span style="color:#f44336">\u274C Piston inaccessible : ${e.message}</span>`;
    });
  }
  static \u0275fac = function AddCourseComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddCourseComponent)(\u0275\u0275directiveInject(CourseService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddCourseComponent, selectors: [["app-add-course"]], decls: 433, vars: 88, consts: [[1, "content"], [1, "container"], [1, "row"], [1, "col-lg-10", "mx-auto"], [1, "add-course-item"], ["class", "alert alert-danger alert-dismissible fade show mb-3", "role", "alert", 4, "ngIf"], ["class", "alert alert-success alert-dismissible fade show mb-3", "role", "alert", 4, "ngIf"], [1, "wizard"], ["id", "progressbar2", 1, "form-wizard-steps"], [3, "ngClass"], [1, "profile-step"], [1, "dot-active", "mb-2"], [1, "number"], [1, "tickmark"], [1, "fa-solid", "fa-check"], [1, "step-section"], [1, "initialization-form-set"], [1, "form-inner", "wizard-form-card", 3, "ngStyle"], [1, "title"], [1, "col-md-12"], [1, "input-block"], [1, "form-label"], [1, "text-danger", "ms-1"], ["type", "text", "placeholder", "Enter course title", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-4"], [1, "form-select", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["value", "BEGINNER"], ["value", "INTERMEDIATE"], ["value", "ADVANCED"], ["value", "EXPERT"], ["value", "Fran\xE7ais"], ["value", "English"], ["value", "Arabe"], ["value", "Deutsch"], ["type", "text", "placeholder", "Brief summary (shown in course cards)", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "5", "placeholder", "Detailed description of the course...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-6"], [1, "bg-light", "border", "p-4", "rounded-3"], [1, "mb-2"], ["class", "input-block", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "d-flex", "align-items-center", "justify-content-end"], ["href", "javascript:void(0);", 1, "d-flex", "align-items-center", "add-new-topic", 3, "click"], [1, "isax", "isax-add", "me-1"], [1, "col-md-6", "mt-3"], [1, "form-check", "form-switch", "form-check-md", "mb-0"], ["type", "checkbox", "id", "checkFeature", 1, "form-check-input", "form-checked-success", 3, "ngModelChange", "ngModel"], ["for", "checkFeature", 1, "form-check-label"], [1, "add-form-btn", "widget-next-btn", "submit-btn", "d-flex", "justify-content-end", "mb-0"], [1, "btn", "main-btn", "next_btns", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], [1, "isax", "isax-arrow-right-3", "ms-1"], ["type", "file", "accept", "image/jpeg,image/png,image/webp", 1, "form-control", 3, "change"], ["class", "col-md-12", 4, "ngIf"], [1, "col-md-12", "mt-3"], ["type", "text", "placeholder", "https://youtube.com/embed/...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "add-form-btn", "widget-next-btn", "submit-btn"], [1, "btn-left"], [1, "btn", "btn-light", "main-btn", "prev_btns", "d-flex", "align-items-center", 3, "click"], [1, "isax", "isax-arrow-left-2", "me-1"], [1, "btn", "btn-secondary", "main-btn", "next_btns", "d-flex", "align-items-center", 3, "click", "disabled"], [1, "row", "align-items-center", "row-gap-2"], [1, "mb-0"], [1, "col-md-6", "text-md-end"], [1, "btn", "add-edit-btn", "d-inline-flex", "align-items-center", 3, "click"], [1, "isax", "isax-add-circle5", "me-1"], ["id", "accordionCurriculum", 1, "accordions-items-seperate"], ["class", "accordion-item", 4, "ngFor", "ngForOf"], ["class", "text-center text-muted py-4", 4, "ngIf"], [1, "btn", "btn-light", "main-btn", "prev_btns", 3, "click"], [1, "btn", "btn-secondary", "main-btn", "next_btns", 3, "click"], ["type", "text", "placeholder", "javascript, react, angular (s\xE9par\xE9s par des virgules)", 1, "form-control"], [1, "fs-13", "text-gray-6", "mt-1", "d-block"], ["rows", "3", "placeholder", "Notes pour le validateur...", 1, "form-control"], [1, "d-flex", "align-items-center"], [1, "form-check", "form-check-md", "d-flex", "align-items-center"], ["type", "checkbox", "checked", "", "id", "licenseCheck", 1, "form-check-input"], ["for", "licenseCheck", 1, "form-check-label", "ms-2"], [1, "col-12"], [1, "d-flex", "align-items-center", "mb-3"], ["type", "checkbox", "id", "freeCheck", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "freeCheck", 1, "form-check-label", "ms-2"], [1, "input-block", "mb-3"], ["type", "number", "min", "0", "step", "0.01", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "checkbox", "id", "discountCheck", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "discountCheck", 1, "form-check-label", "ms-2"], [4, "ngIf"], [1, "btn-left", "d-flex", "gap-2"], [1, "btn", "main-btn", "d-flex", "align-items-center", 2, "background", "#fff", "color", "#374151", "border", "1.5px solid #9ca3af", "font-weight", "500", 3, "click", "disabled"], ["class", "isax isax-save me-1", 4, "ngIf"], [1, "btn", "btn-secondary", "main-btn", "d-flex", "align-items-center", 3, "click", "disabled"], ["class", "isax isax-send me-1", 4, "ngIf"], ["id", "add-topic", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn-close", "custom-btn-close"], [1, "isax", "isax-close-circle5"], [1, "modal-body"], ["type", "text", "placeholder", "Ex: Introduction", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "me-2", "btn-light"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["id", "add-lesson", "tabindex", "-1", 1, "modal", "fade"], ["type", "text", "placeholder", "Ex: Introduction to HTML", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "text-muted", "fs-12", "ms-1"], ["value", "VIDEO"], [1, "isax", "isax-video-circle"], ["value", "TEXT"], ["value", "PDF"], ["class", "input-block mb-3", 4, "ngIf"], [1, "alert", "alert-light", "border", "py-2", "fs-13", "mb-3"], [1, "d-flex", "align-items-center", "gap-2", "mb-1"], [1, "btn", "btn-success", "btn-sm", "py-0", "px-1", "disabled"], [1, "btn", "btn-info", "btn-sm", "py-0", "px-1", "disabled"], [1, "isax", "isax-document"], [1, "btn", "btn-warning", "btn-sm", "py-0", "px-1", "disabled"], [1, "isax", "isax-edit"], [1, "form-check", "me-3"], ["type", "radio", "name", "lessonAccess", "id", "freeLesson", 1, "form-check-input", 3, "ngModelChange", "value", "ngModel"], ["for", "freeLesson", 1, "form-check-label"], [1, "form-check"], ["type", "radio", "name", "lessonAccess", "id", "premiumLesson", 1, "form-check-input", 3, "ngModelChange", "value", "ngModel"], ["for", "premiumLesson", 1, "form-check-label"], ["id", "success", "tabindex", "-1", 1, "modal", "fade", "modal-default"], [1, "modal-body", "p-4"], [1, "text-center"], [1, "text-success", "h1", "mb-2"], [1, "isax", "isax-tick-circle5"], [1, "mb-3"], [1, "d-flex", "align-items-center", "justify-content-center", "gap-2", "flex-wrap"], ["data-bs-dismiss", "modal", 1, "btn", "btn-secondary", 3, "routerLink"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-secondary", 3, "routerLink"], ["id", "article_editor_modal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-fullscreen"], [1, "modal-content", 2, "display", "flex", "flex-direction", "column", "height", "100dvh", "overflow", "hidden"], [1, "d-flex", "align-items-center", "justify-content-between", "px-4", "py-2", "flex-shrink-0", 2, "background", "linear-gradient(135deg,#1a1d2e 0%,#2d3250 100%)"], [1, "d-flex", "align-items-center", "gap-3"], [2, "width", "34px", "height", "34px", "border-radius", "8px", "background", "rgba(255,255,255,.12)", "display", "flex", "align-items", "center", "justify-content", "center"], [1, "fa-solid", "fa-pen-nib", "text-white", 2, "font-size", "14px"], [2, "font-size", "10px", "color", "rgba(255,255,255,.45)", "letter-spacing", "1px", "text-transform", "uppercase"], [1, "text-white", "fw-semibold", 2, "font-size", "15px"], [1, "d-flex", "align-items-center", "gap-2"], ["class", "text-success", "style", "font-size:12px;", 4, "ngIf"], [1, "btn", "btn-sm", "btn-light", 3, "click", "disabled"], [1, "fa-solid", "fa-floppy-disk", "me-1"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Fermer", 1, "btn-close", "btn-close-white"], ["id", "ql-article-toolbar"], [1, "ql-formats"], [1, "ql-header"], ["value", "1"], ["value", "2"], ["value", "3"], ["selected", ""], ["title", "Gras", 1, "ql-bold"], ["title", "Italique", 1, "ql-italic"], ["title", "Soulign\xE9", 1, "ql-underline"], ["title", "Barr\xE9", 1, "ql-strike"], ["title", "Citation", 1, "ql-blockquote"], ["value", "ordered", "title", "Liste num\xE9rot\xE9e", 1, "ql-list"], ["value", "bullet", "title", "Liste \xE0 puces", 1, "ql-list"], ["value", "-1", 1, "ql-indent"], ["value", "+1", 1, "ql-indent"], ["title", "Couleur du texte", 1, "ql-color"], ["title", "Couleur de fond", 1, "ql-background"], ["title", "Lien", 1, "ql-link"], ["title", "Image", 1, "ql-image"], [1, "ql-align"], ["value", "center"], ["value", "right"], ["value", "justify"], ["title", "Effacer mise en forme", 1, "ql-clean"], [1, "flex-grow-1", 2, "overflow", "hidden", "min-height", "0", "background", "#fff"], ["id", "quill-editor-container", 2, "height", "100%"], ["id", "lesson_preview_modal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-xl", "modal-dialog-centered"], [1, "modal-header", "py-2"], [1, "fw-bold", "mb-0"], [1, "isax", "isax-eye", "me-2", "text-secondary"], [1, "text-muted", "fw-normal"], ["class", "modal-body", "style", "max-height:80vh;overflow-y:auto", 4, "ngIf"], [1, "modal-footer", "py-2"], ["data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "btn-sm"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show", "mb-3"], ["type", "button", 1, "btn-close", 3, "click"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show", "mb-3"], [1, "fa-solid", "fa-check-circle", "me-2"], [1, "d-flex", "align-items-center", "add-new-input"], ["type", "text", "placeholder", "Learning objective", 1, "form-control", 3, "ngModelChange", "ngModel"], ["href", "javascript:void(0);", 1, "link-trash", 3, "click"], [1, "isax", "isax-trash"], ["type", "text", "placeholder", "Prerequisite", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "spinner-border", "spinner-border-sm", "me-1"], ["alt", "Cover preview", 1, "img-fluid", "rounded", "mb-3", 2, "max-height", "300px", "object-fit", "cover", 3, "src"], [1, "upload-img-section", "d-flex", "align-items-center", "justify-content-center"], [1, "upload-content", "text-center"], [1, "isax", "isax-image5", "text-secondary", "fs-24"], [1, "fw-medium", "mb-1", "mt-2"], [1, "text-muted", "small"], [1, "accordion-item"], [1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "aria-expanded", "true", 1, "accordion-button"], [1, "d-flex", "align-items-center", "mb-0"], [1, "isax", "isax-menu-15", "me-2"], [1, "badge", "bg-secondary", "ms-2"], [1, "accordion-collapse", "collapse", "show", 3, "id"], [1, "accordion-body"], ["class", "d-flex align-items-center justify-content-between bg-white p-2 border rounded-3 mb-2", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "justify-content-between", "mt-2"], [1, "isax", "isax-add-circle5", "me-2"], [1, "d-flex", "align-items-center", "justify-content-between", "bg-white", "p-2", "border", "rounded-3", "mb-2"], ["class", "isax isax-play-circle5 text-success fs-24 me-1", 4, "ngIf"], ["class", "isax isax-document-text fs-24 me-1 text-info", 4, "ngIf"], ["class", "isax isax-document fs-24 me-1 text-danger", 4, "ngIf"], [1, "fw-medium", "text-gray-5", "mb-0"], ["class", "badge bg-success ms-2", 4, "ngIf"], ["class", "ms-2 text-muted small", 4, "ngIf"], ["class", "badge bg-info ms-2", 4, "ngIf"], ["class", "badge bg-warning ms-2", 4, "ngIf"], ["class", "badge ms-2", "style", "background:#6f42c1;color:#fff", 4, "ngIf"], [1, "d-flex", "gap-1", "flex-wrap"], ["title", "Aper\xE7u de la le\xE7on", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "isax", "isax-eye"], [1, "btn", "btn-sm", "d-flex", "align-items-center", "gap-1", 3, "click", "title"], [1, "d-none", "d-lg-inline", 2, "font-size", "11px"], ["class", "btn btn-sm btn-outline-danger", "title", "Supprimer la vid\xE9o", 3, "click", 4, "ngIf"], ["class", "btn btn-sm btn-outline-danger", "title", "Supprimer le PDF", 3, "click", 4, "ngIf"], ["class", "btn btn-sm btn-outline-danger", "title", "Supprimer l'article", 3, "click", 4, "ngIf"], [1, "isax", "isax-play-circle5", "text-success", "fs-24", "me-1"], [1, "isax", "isax-document-text", "fs-24", "me-1", "text-info"], [1, "isax", "isax-document", "fs-24", "me-1", "text-danger"], [1, "badge", "bg-success", "ms-2"], [1, "ms-2", "text-muted", "small"], [1, "isax", "isax-video-circle", "me-1"], [1, "badge", "bg-info", "ms-2"], [1, "isax", "isax-document", "me-1"], [1, "badge", "bg-warning", "ms-2"], [1, "isax", "isax-document-text", "me-1"], [1, "badge", "ms-2", 2, "background", "#6f42c1", "color", "#fff"], [1, "isax", "isax-message-question5", "me-1"], ["title", "Supprimer la vid\xE9o", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], ["title", "Supprimer le PDF", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], ["title", "Supprimer l'article", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "text-center", "text-muted", "py-4"], [1, "isax", "isax-document-text", "fs-32", "d-block", "mb-2"], [1, "input-block", "mb-2"], ["type", "number", "min", "0", "step", "0.01", 1, "form-control", "mb-1", 3, "ngModelChange", "ngModel"], ["class", "text-success fw-medium", 4, "ngIf"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "text-success", "fw-medium"], [1, "isax", "isax-save", "me-1"], [1, "isax", "isax-send", "me-1"], [1, "text-muted", "fs-12"], ["type", "text", "placeholder", "https://youtube.com/watch?v=...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "text-success"], [1, "text-success", 2, "font-size", "12px"], [1, "fa-solid", "fa-circle-check", "me-1"], [1, "modal-body", 2, "max-height", "80vh", "overflow-y", "auto"], ["class", "mb-4", 4, "ngIf"], ["class", "text-center text-muted py-5", 4, "ngIf"], [1, "mb-4"], [1, "d-flex", "align-items-center", "gap-2", "mb-2"], [1, "badge", "bg-success"], ["controls", "", 1, "w-100", "rounded", 2, "max-height", "420px", "background", "#000", 3, "src"], [1, "badge", "bg-danger"], ["target", "_blank", 1, "btn", "btn-sm", "btn-outline-danger", 3, "href"], [1, "isax", "isax-export", "me-1"], [1, "w-100", "rounded", 2, "height", "500px", "border", "1px solid #dee2e6", 3, "src"], [1, "badge", "bg-warning", "text-dark"], [1, "isax", "isax-edit", "me-1"], [1, "text-muted", 2, "font-size", "11px", "font-weight", "400"], [1, "article-preview-body", "p-4", "bg-light", "rounded", "border", 2, "font-size", "15px", "line-height", "1.7", 3, "innerHTML"], [1, "text-center", "text-muted", "py-5"]], template: function AddCourseComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275template(5, AddCourseComponent_div_5_Template, 3, 1, "div", 5)(6, AddCourseComponent_div_6_Template, 4, 1, "div", 6);
      \u0275\u0275elementStart(7, "div", 7)(8, "ul", 8)(9, "li", 9)(10, "div", 10)(11, "span", 11)(12, "span", 12);
      \u0275\u0275text(13, "01");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "span", 13);
      \u0275\u0275element(15, "i", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 15)(17, "p");
      \u0275\u0275text(18, "Course Information");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(19, "li", 9)(20, "div", 10)(21, "span", 11)(22, "span", 12);
      \u0275\u0275text(23, "02");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "span", 13);
      \u0275\u0275element(25, "i", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 15)(27, "p");
      \u0275\u0275text(28, "Course Media");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(29, "li", 9)(30, "div", 10)(31, "span", 11)(32, "span", 12);
      \u0275\u0275text(33, "03");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span", 13);
      \u0275\u0275element(35, "i", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 15)(37, "p");
      \u0275\u0275text(38, "Curriculum");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(39, "li", 9)(40, "div", 10)(41, "span", 11)(42, "span", 12);
      \u0275\u0275text(43, "04");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "span", 13);
      \u0275\u0275element(45, "i", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 15)(47, "p");
      \u0275\u0275text(48, "Additional information");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(49, "li", 9)(50, "div", 10)(51, "span", 11)(52, "span", 12);
      \u0275\u0275text(53, "05");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "span", 13);
      \u0275\u0275element(55, "i", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "div", 15)(57, "p");
      \u0275\u0275text(58, "Pricing");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(59, "div", 16)(60, "fieldset", 17)(61, "div", 18)(62, "h5");
      \u0275\u0275text(63, "Basic Information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div", 2)(65, "div", 19)(66, "div", 20)(67, "label", 21);
      \u0275\u0275text(68, "Course Title");
      \u0275\u0275elementStart(69, "span", 22);
      \u0275\u0275text(70, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "input", 23);
      \u0275\u0275twoWayListener("ngModelChange", function AddCourseComponent_Template_input_ngModelChange_71_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.step1.title, $event) || (ctx.step1.title = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(72, "div", 24)(73, "div", 20)(74, "label", 21);
      \u0275\u0275text(75, "Course Category");
      \u0275\u0275elementStart(76, "span", 22);
      \u0275\u0275text(77, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "select", 25);
      \u0275\u0275twoWayListener("ngModelChange", function AddCourseComponent_Template_select_ngModelChange_78_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.step1.categoryId, $event) || (ctx.step1.categoryId = $event);
        return $event;
      });
      \u0275\u0275elementStart(79, "option", 26);
      \u0275\u0275text(80, "-- Select --");
      \u0275\u0275elementEnd();
      \u0275\u0275template(81, AddCourseComponent_option_81_Template, 2, 2, "option", 27);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(82, "div", 24)(83, "div", 20)(84, "label", 21);
      \u0275\u0275text(85, "Course Level");
      \u0275\u0275elementStart(86, "span", 22);
      \u0275\u0275text(87, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "select", 25);
      \u0275\u0275twoWayListener("ngModelChange", function AddCourseComponent_Template_select_ngModelChange_88_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.step1.level, $event) || (ctx.step1.level = $event);
        return $event;
      });
      \u0275\u0275elementStart(89, "option", 28);
      \u0275\u0275text(90, "Beginner");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "option", 29);
      \u0275\u0275text(92, "Intermediate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "option", 30);
      \u0275\u0275text(94, "Advanced");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "option", 31);
      \u0275\u0275text(96, "Expert");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(97, "div", 24)(98, "div", 20)(99, "label", 21);
      \u0275\u0275text(100, "Language");
      \u0275\u0275elementStart(101, "span", 22);
      \u0275\u0275text(102, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "select", 25);
      \u0275\u0275twoWayListener("ngModelChange", function AddCourseComponent_Template_select_ngModelChange_103_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.step1.language, $event) || (ctx.step1.language = $event);
        return $event;
      });
      \u0275\u0275elementStart(104, "option", 32);
      \u0275\u0275text(105, "Fran\xE7ais");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "option", 33);
      \u0275\u0275text(107, "English");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "option", 34);
      \u0275\u0275text(109, "Arabe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "option", 35);
      \u0275\u0275text(111, "Deutsch");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(112, "div", 19)(113, "div", 20)(114, "label", 21);
      \u0275\u0275text(115, "Short Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "input", 36);
      \u0275\u0275twoWayListener("ngModelChange", function AddCourseComponent_Template_input_ngModelChange_116_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.step1.shortDescription, $event) || (ctx.step1.shortDescription = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(117, "div", 19)(118, "div", 20)(119, "label", 21);
      \u0275\u0275text(120, "Course Description");
      \u0275\u0275elementStart(121, "span", 22);
      \u0275\u0275text(122, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(123, "textarea", 37);
      \u0275\u0275twoWayListener("ngModelChange", function AddCourseComponent_Template_textarea_ngModelChange_123_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.step1.description, $event) || (ctx.step1.description = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(124, "div", 38)(125, "div", 39)(126, "h6", 40);
      \u0275\u0275text(127, "What will students learn?");
      \u0275\u0275elementEnd();
      \u0275\u0275template(128, AddCourseComponent_div_128_Template, 5, 1, "div", 41);
      \u0275\u0275elementStart(129, "div", 42)(130, "a", 43);
      \u0275\u0275listener("click", function AddCourseComponent_Template_a_click_130_listener() {
        return ctx.addObjective();
      });
      \u0275\u0275element(131, "i", 44);
      \u0275\u0275text(132, " Add New Item ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(133, "div", 38)(134, "div", 39)(135, "h6", 40);
      \u0275\u0275text(136, "Requirements");
      \u0275\u0275elementEnd();
      \u0275\u0275template(137, AddCourseComponent_div_137_Template, 5, 1, "div", 41);
      \u0275\u0275elementStart(138, "div", 42)(139, "a", 43);
      \u0275\u0275listener("click", function AddCourseComponent_Template_a_click_139_listener() {
        return ctx.addRequirement();
      });
      \u0275\u0275element(140, "i", 44);
      \u0275\u0275text(141, " Add New Item ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(142, "div", 45)(143, "div", 46)(144, "input", 47);
      \u0275\u0275twoWayListener("ngModelChange", function AddCourseComponent_Template_input_ngModelChange_144_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.step1.featured, $event) || (ctx.step1.featured = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "label", 48);
      \u0275\u0275text(146, "Feature this course on the homepage");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(147, "div", 49)(148, "button", 50);
      \u0275\u0275listener("click", function AddCourseComponent_Template_button_click_148_listener() {
        return ctx.saveStep1();
      });
      \u0275\u0275template(149, AddCourseComponent_span_149_Template, 1, 0, "span", 51);
      \u0275\u0275text(150, " Next ");
      \u0275\u0275element(151, "i", 52);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(152, "fieldset", 17)(153, "div", 18)(154, "h5");
      \u0275\u0275text(155, "Course Media");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "p");
      \u0275\u0275text(157, "Upload a cover image for your course. Accepted: JPEG, PNG, WebP (max 2 MB)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(158, "div", 2)(159, "div", 19)(160, "div", 20)(161, "label", 21);
      \u0275\u0275text(162, "Course Thumbnail");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(163, "input", 53);
      \u0275\u0275listener("change", function AddCourseComponent_Template_input_change_163_listener($event) {
        return ctx.onCoverSelected($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(164, AddCourseComponent_div_164_Template, 2, 1, "div", 54)(165, AddCourseComponent_div_165_Template, 8, 0, "div", 54);
      \u0275\u0275elementStart(166, "div", 55)(167, "label", 21);
      \u0275\u0275text(168, "Intro Video URL (optional)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "input", 56);
      \u0275\u0275twoWayListener("ngModelChange", function AddCourseComponent_Template_input_ngModelChange_169_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.introVideoUrl, $event) || (ctx.introVideoUrl = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(170, "div", 57)(171, "div", 58)(172, "button", 59);
      \u0275\u0275listener("click", function AddCourseComponent_Template_button_click_172_listener() {
        return ctx.selectedFieldSet[0] = 0;
      });
      \u0275\u0275element(173, "i", 60);
      \u0275\u0275text(174, "Prev ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(175, "div", 58)(176, "button", 61);
      \u0275\u0275listener("click", function AddCourseComponent_Template_button_click_176_listener() {
        return ctx.saveStep2();
      });
      \u0275\u0275template(177, AddCourseComponent_span_177_Template, 1, 0, "span", 51);
      \u0275\u0275text(178, " Next ");
      \u0275\u0275element(179, "i", 52);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(180, "fieldset", 17)(181, "div", 18)(182, "div", 62)(183, "div", 38)(184, "h5", 63);
      \u0275\u0275text(185, "Curriculum");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(186, "div", 64)(187, "button", 65);
      \u0275\u0275listener("click", function AddCourseComponent_Template_button_click_187_listener() {
        return ctx.openAddSectionModal();
      });
      \u0275\u0275element(188, "i", 66);
      \u0275\u0275text(189, " Add New Section ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(190, "div", 67);
      \u0275\u0275template(191, AddCourseComponent_div_191_Template, 15, 5, "div", 68)(192, AddCourseComponent_div_192_Template, 3, 0, "div", 69);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "div", 57)(194, "div", 58)(195, "button", 70);
      \u0275\u0275listener("click", function AddCourseComponent_Template_button_click_195_listener() {
        return ctx.selectedFieldSet[0] = 1;
      });
      \u0275\u0275element(196, "i", 60);
      \u0275\u0275text(197, "Prev ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(198, "div", 58)(199, "button", 71);
      \u0275\u0275listener("click", function AddCourseComponent_Template_button_click_199_listener() {
        return ctx.selectedFieldSet[0] = 3;
      });
      \u0275\u0275text(200, " Next ");
      \u0275\u0275element(201, "i", 52);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(202, "fieldset", 17)(203, "div", 18)(204, "h5");
      \u0275\u0275text(205, "Additional Information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(206, "div", 2)(207, "div", 19)(208, "div", 20)(209, "label", 21);
      \u0275\u0275text(210, "Tags");
      \u0275\u0275elementEnd();
      \u0275\u0275element(211, "input", 72);
      \u0275\u0275elementStart(212, "span", 73);
      \u0275\u0275text(213, "Maximum 14 mots-cl\xE9s en minuscules.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(214, "div", 19)(215, "div", 20)(216, "label", 21);
      \u0275\u0275text(217, "Message to reviewer");
      \u0275\u0275elementEnd();
      \u0275\u0275element(218, "textarea", 74);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(219, "div", 19)(220, "div", 75)(221, "div", 76);
      \u0275\u0275element(222, "input", 77);
      \u0275\u0275elementStart(223, "label", 78);
      \u0275\u0275text(224, " All assets used in this course are either my own work or properly licensed. I have full rights to sell this content. ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(225, "div", 57)(226, "div", 58)(227, "button", 70);
      \u0275\u0275listener("click", function AddCourseComponent_Template_button_click_227_listener() {
        return ctx.selectedFieldSet[0] = 2;
      });
      \u0275\u0275element(228, "i", 60);
      \u0275\u0275text(229, "Prev ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(230, "div", 58)(231, "button", 71);
      \u0275\u0275listener("click", function AddCourseComponent_Template_button_click_231_listener() {
        return ctx.selectedFieldSet[0] = 4;
      });
      \u0275\u0275text(232, " Next ");
      \u0275\u0275element(233, "i", 52);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(234, "fieldset", 17)(235, "div", 18)(236, "h5");
      \u0275\u0275text(237, "Pricing");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(238, "div", 2)(239, "div", 79)(240, "div", 80)(241, "div", 76)(242, "input", 81);
      \u0275\u0275twoWayListener("ngModelChange", function AddCourseComponent_Template_input_ngModelChange_242_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.step5.isFree, $event) || (ctx.step5.isFree = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(243, "label", 82);
      \u0275\u0275text(244, "This is a free course");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(245, "div", 83)(246, "label", 21);
      \u0275\u0275text(247, "Course Price (\u20AC)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(248, "input", 84);
      \u0275\u0275twoWayListener("ngModelChange", function AddCourseComponent_Template_input_ngModelChange_248_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.step5.price, $event) || (ctx.step5.price = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(249, "div", 80)(250, "div", 76)(251, "input", 85);
      \u0275\u0275twoWayListener("ngModelChange", function AddCourseComponent_Template_input_ngModelChange_251_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.step5.hasDiscount, $event) || (ctx.step5.hasDiscount = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(252, "label", 86);
      \u0275\u0275text(253, "Apply a discount price");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(254, AddCourseComponent_ng_container_254_Template, 10, 3, "ng-container", 87);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(255, "div", 57)(256, "div", 58)(257, "button", 70);
      \u0275\u0275listener("click", function AddCourseComponent_Template_button_click_257_listener() {
        return ctx.selectedFieldSet[0] = 3;
      });
      \u0275\u0275element(258, "i", 60);
      \u0275\u0275text(259, "Prev ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(260, "div", 88)(261, "button", 89);
      \u0275\u0275listener("click", function AddCourseComponent_Template_button_click_261_listener() {
        return ctx.saveDraft();
      });
      \u0275\u0275template(262, AddCourseComponent_span_262_Template, 1, 0, "span", 51)(263, AddCourseComponent_i_263_Template, 1, 0, "i", 90);
      \u0275\u0275text(264, " Enregistrer brouillon ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(265, "button", 91);
      \u0275\u0275listener("click", function AddCourseComponent_Template_button_click_265_listener() {
        return ctx.submitCourse();
      });
      \u0275\u0275template(266, AddCourseComponent_span_266_Template, 1, 0, "span", 51)(267, AddCourseComponent_i_267_Template, 1, 0, "i", 92);
      \u0275\u0275text(268, " Soumettre pour r\xE9vision ");
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(269, "div", 93)(270, "div", 94)(271, "div", 95)(272, "div", 96)(273, "h5");
      \u0275\u0275text(274, "Add New Section");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(275, "button", 97);
      \u0275\u0275element(276, "i", 98);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(277, "div", 99)(278, "div", 20)(279, "label", 21);
      \u0275\u0275text(280, "Section Title");
      \u0275\u0275elementStart(281, "span", 22);
      \u0275\u0275text(282, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(283, "input", 100);
      \u0275\u0275twoWayListener("ngModelChange", function AddCourseComponent_Template_input_ngModelChange_283_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.newSectionTitle, $event) || (ctx.newSectionTitle = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(284, "div", 101)(285, "button", 102);
      \u0275\u0275text(286, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(287, "button", 103);
      \u0275\u0275listener("click", function AddCourseComponent_Template_button_click_287_listener() {
        return ctx.confirmAddSection();
      });
      \u0275\u0275text(288, " Ajouter ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(289, "div", 104)(290, "div", 94)(291, "div", 95)(292, "div", 96)(293, "h5");
      \u0275\u0275text(294, "New Lesson");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(295, "button", 97);
      \u0275\u0275element(296, "i", 98);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(297, "div", 99)(298, "div", 83)(299, "label", 21);
      \u0275\u0275text(300, "Lesson Title");
      \u0275\u0275elementStart(301, "span", 22);
      \u0275\u0275text(302, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(303, "input", 105);
      \u0275\u0275twoWayListener("ngModelChange", function AddCourseComponent_Template_input_ngModelChange_303_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.newLesson.title, $event) || (ctx.newLesson.title = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(304, "div", 83)(305, "label", 21);
      \u0275\u0275text(306, " Ic\xF4ne principale ");
      \u0275\u0275elementStart(307, "span", 106);
      \u0275\u0275text(308, "\u2014 utilis\xE9e dans le curriculum");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(309, "select", 25);
      \u0275\u0275twoWayListener("ngModelChange", function AddCourseComponent_Template_select_ngModelChange_309_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.newLesson.type, $event) || (ctx.newLesson.type = $event);
        return $event;
      });
      \u0275\u0275elementStart(310, "option", 107);
      \u0275\u0275element(311, "i", 108);
      \u0275\u0275text(312, " Vid\xE9o");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(313, "option", 109);
      \u0275\u0275text(314, "Article / Texte");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(315, "option", 110);
      \u0275\u0275text(316, "PDF");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(317, AddCourseComponent_div_317_Template, 6, 1, "div", 111);
      \u0275\u0275elementStart(318, "div", 112)(319, "div", 113)(320, "span", 114);
      \u0275\u0275element(321, "i", 108);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(322, "span", 115);
      \u0275\u0275element(323, "i", 116);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(324, "span", 117);
      \u0275\u0275element(325, "i", 118);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(326, "strong");
      \u0275\u0275text(327, "Multi-contenu support\xE9");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(328, AddCourseComponent_ng_container_328_Template, 5, 0, "ng-container", 87);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(329, "div", 75)(330, "div", 119)(331, "input", 120);
      \u0275\u0275twoWayListener("ngModelChange", function AddCourseComponent_Template_input_ngModelChange_331_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.newLesson.isFree, $event) || (ctx.newLesson.isFree = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(332, "label", 121);
      \u0275\u0275text(333, "Free Preview");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(334, "div", 122)(335, "input", 123);
      \u0275\u0275twoWayListener("ngModelChange", function AddCourseComponent_Template_input_ngModelChange_335_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.newLesson.isFree, $event) || (ctx.newLesson.isFree = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(336, "label", 124);
      \u0275\u0275text(337, "Premium");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(338, "div", 101)(339, "button", 102);
      \u0275\u0275text(340, "Annuler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(341, "button", 103);
      \u0275\u0275listener("click", function AddCourseComponent_Template_button_click_341_listener() {
        return ctx.confirmAddLesson();
      });
      \u0275\u0275text(342, "Ajouter");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(343, "div", 125)(344, "div", 94)(345, "div", 95)(346, "div", 126)(347, "div", 127)(348, "div", 128);
      \u0275\u0275element(349, "i", 129);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(350, "h5", 40);
      \u0275\u0275text(351, "Cours soumis avec succ\xE8s !");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(352, "p", 130);
      \u0275\u0275text(353, "Votre cours est maintenant en cours de r\xE9vision. Une fois approuv\xE9, il sera mis en ligne.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(354, "div", 131)(355, "a", 132);
      \u0275\u0275element(356, "i", 60);
      \u0275\u0275text(357, "Back to Dashboard ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(358, "a", 133);
      \u0275\u0275text(359, " My Courses ");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(360, "div", 134)(361, "div", 135)(362, "div", 136)(363, "div", 137)(364, "div", 138)(365, "div", 139);
      \u0275\u0275element(366, "i", 140);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(367, "div")(368, "div", 141);
      \u0275\u0275text(369, "R\xE9daction");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(370, "div", 142);
      \u0275\u0275text(371);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(372, "div", 143);
      \u0275\u0275template(373, AddCourseComponent_span_373_Template, 3, 0, "span", 144);
      \u0275\u0275elementStart(374, "button", 145);
      \u0275\u0275listener("click", function AddCourseComponent_Template_button_click_374_listener() {
        return ctx.saveArticle();
      });
      \u0275\u0275element(375, "i", 146);
      \u0275\u0275text(376);
      \u0275\u0275elementEnd();
      \u0275\u0275element(377, "button", 147);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(378, "div", 148)(379, "span", 149)(380, "select", 150)(381, "option", 151);
      \u0275\u0275text(382, "Titre\xA01");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(383, "option", 152);
      \u0275\u0275text(384, "Titre\xA02");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(385, "option", 153);
      \u0275\u0275text(386, "Titre\xA03");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(387, "option", 154);
      \u0275\u0275text(388, "Normal");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(389, "span", 149);
      \u0275\u0275element(390, "button", 155)(391, "button", 156)(392, "button", 157)(393, "button", 158);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(394, "span", 149);
      \u0275\u0275element(395, "button", 159);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(396, "span", 149);
      \u0275\u0275element(397, "button", 160)(398, "button", 161);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(399, "span", 149);
      \u0275\u0275element(400, "button", 162)(401, "button", 163);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(402, "span", 149);
      \u0275\u0275element(403, "select", 164)(404, "select", 165);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(405, "span", 149);
      \u0275\u0275element(406, "button", 166)(407, "button", 167);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(408, "span", 149)(409, "select", 168);
      \u0275\u0275element(410, "option", 154)(411, "option", 169)(412, "option", 170)(413, "option", 171);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(414, "span", 149);
      \u0275\u0275element(415, "button", 172);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(416, "div", 173);
      \u0275\u0275element(417, "div", 174);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(418, "div", 175)(419, "div", 176)(420, "div", 95)(421, "div", 177)(422, "h5", 178);
      \u0275\u0275element(423, "i", 179);
      \u0275\u0275text(424, " Aper\xE7u \u2014 ");
      \u0275\u0275elementStart(425, "span", 180);
      \u0275\u0275text(426);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(427, "button", 97);
      \u0275\u0275element(428, "i", 98);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(429, AddCourseComponent_div_429_Template, 5, 4, "div", 181);
      \u0275\u0275elementStart(430, "div", 182)(431, "button", 183);
      \u0275\u0275text(432, "Fermer");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.errorMsg);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMsg);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(63, _c0, ctx.selectedFieldSet[0] === 0, ctx.selectedFieldSet[0] > 0));
      \u0275\u0275advance(10);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(66, _c0, ctx.selectedFieldSet[0] === 1, ctx.selectedFieldSet[0] > 1));
      \u0275\u0275advance(10);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(69, _c0, ctx.selectedFieldSet[0] === 2, ctx.selectedFieldSet[0] > 2));
      \u0275\u0275advance(10);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(72, _c0, ctx.selectedFieldSet[0] === 3, ctx.selectedFieldSet[0] > 3));
      \u0275\u0275advance(10);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(75, _c0, ctx.selectedFieldSet[0] === 4, ctx.selectedFieldSet[0] > 4));
      \u0275\u0275advance(11);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(78, _c1, ctx.selectedFieldSet[0] === 0 ? "block" : "none"));
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.step1.title);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.step1.categoryId);
      \u0275\u0275advance();
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.step1.level);
      \u0275\u0275advance(15);
      \u0275\u0275twoWayProperty("ngModel", ctx.step1.language);
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.step1.shortDescription);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.step1.description);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.objectives)("ngForTrackBy", ctx.trackByIndex);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngForOf", ctx.requirements)("ngForTrackBy", ctx.trackByIndex);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.step1.featured);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(80, _c1, ctx.selectedFieldSet[0] === 1 ? "block" : "none"));
      \u0275\u0275advance(12);
      \u0275\u0275property("ngIf", ctx.coverPreview);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.coverPreview);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.introVideoUrl);
      \u0275\u0275advance(7);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(82, _c1, ctx.selectedFieldSet[0] === 2 ? "block" : "none"));
      \u0275\u0275advance(11);
      \u0275\u0275property("ngForOf", ctx.sections);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.sections.length === 0);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(84, _c1, ctx.selectedFieldSet[0] === 3 ? "block" : "none"));
      \u0275\u0275advance(32);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(86, _c1, ctx.selectedFieldSet[0] === 4 ? "block" : "none"));
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.step5.isFree);
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("display", ctx.step5.isFree ? "none" : "block");
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.step5.price);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.step5.hasDiscount);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.step5.hasDiscount);
      \u0275\u0275advance(7);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance(16);
      \u0275\u0275twoWayProperty("ngModel", ctx.newSectionTitle);
      \u0275\u0275advance(20);
      \u0275\u0275twoWayProperty("ngModel", ctx.newLesson.title);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.newLesson.type);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.newLesson.type === "VIDEO");
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", ctx.newLesson.type === "TEXT");
      \u0275\u0275advance(3);
      \u0275\u0275property("value", true);
      \u0275\u0275twoWayProperty("ngModel", ctx.newLesson.isFree);
      \u0275\u0275advance(4);
      \u0275\u0275property("value", false);
      \u0275\u0275twoWayProperty("ngModel", ctx.newLesson.isFree);
      \u0275\u0275advance(20);
      \u0275\u0275property("routerLink", ctx.routes.instructor_dashboard);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorMyCourses);
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate(ctx.articleLesson == null ? null : ctx.articleLesson.title);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.articleSaved);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.articleSaving);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.articleSaving ? "Sauvegarde\u2026" : "Sauvegarder", " ");
      \u0275\u0275advance(50);
      \u0275\u0275textInterpolate(ctx.previewLesson == null ? null : ctx.previewLesson.title);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.previewLesson);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgStyle, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, MinValidator, NgModel, RouterLink, SafeUrlPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddCourseComponent, [{
    type: Component,
    args: [{ selector: "app-add-course", standalone: true, imports: [CommonModule, FormsModule, RouterLink, SafeUrlPipe], template: `<!-- Course add -->
<div class="content">
  <div class="container">
    <div class="row">
      <div class="col-lg-10 mx-auto">
        <div class="add-course-item">

          <!-- Alert -->
          <div *ngIf="errorMsg" class="alert alert-danger alert-dismissible fade show mb-3" role="alert">
            {{ errorMsg }}
            <button type="button" class="btn-close" (click)="errorMsg=''"></button>
          </div>
          <div *ngIf="successMsg" class="alert alert-success alert-dismissible fade show mb-3" role="alert">
            <i class="fa-solid fa-check-circle me-2"></i>{{ successMsg }}
            <button type="button" class="btn-close" (click)="successMsg=''"></button>
          </div>

          <!-- Wizard steps -->
          <div class="wizard">
            <ul class="form-wizard-steps" id="progressbar2">
              <li [ngClass]="{ 'progress-active': selectedFieldSet[0] === 0, 'progress-activated': selectedFieldSet[0] > 0 }">
                <div class="profile-step">
                  <span class="dot-active mb-2">
                    <span class="number">01</span>
                    <span class="tickmark"><i class="fa-solid fa-check"></i></span>
                  </span>
                  <div class="step-section"><p>Course Information</p></div>
                </div>
              </li>
              <li [ngClass]="{ 'progress-active': selectedFieldSet[0] === 1, 'progress-activated': selectedFieldSet[0] > 1 }">
                <div class="profile-step">
                  <span class="dot-active mb-2">
                    <span class="number">02</span>
                    <span class="tickmark"><i class="fa-solid fa-check"></i></span>
                  </span>
                  <div class="step-section"><p>Course Media</p></div>
                </div>
              </li>
              <li [ngClass]="{ 'progress-active': selectedFieldSet[0] === 2, 'progress-activated': selectedFieldSet[0] > 2 }">
                <div class="profile-step">
                  <span class="dot-active mb-2">
                    <span class="number">03</span>
                    <span class="tickmark"><i class="fa-solid fa-check"></i></span>
                  </span>
                  <div class="step-section"><p>Curriculum</p></div>
                </div>
              </li>
              <li [ngClass]="{ 'progress-active': selectedFieldSet[0] === 3, 'progress-activated': selectedFieldSet[0] > 3 }">
                <div class="profile-step">
                  <span class="dot-active mb-2">
                    <span class="number">04</span>
                    <span class="tickmark"><i class="fa-solid fa-check"></i></span>
                  </span>
                  <div class="step-section"><p>Additional information</p></div>
                </div>
              </li>
              <li [ngClass]="{ 'progress-active': selectedFieldSet[0] === 4, 'progress-activated': selectedFieldSet[0] > 4 }">
                <div class="profile-step">
                  <span class="dot-active mb-2">
                    <span class="number">05</span>
                    <span class="tickmark"><i class="fa-solid fa-check"></i></span>
                  </span>
                  <div class="step-section"><p>Pricing</p></div>
                </div>
              </li>
            </ul>
          </div>

          <div class="initialization-form-set">

            <!--  \xC9TAPE 1 : Informations de base  -->
            <fieldset class="form-inner wizard-form-card" [ngStyle]="{'display': selectedFieldSet[0] === 0 ? 'block' : 'none'}">
              <div class="title"><h5>Basic Information</h5></div>
              <div class="row">

                <div class="col-md-12">
                  <div class="input-block">
                    <label class="form-label">Course Title<span class="text-danger ms-1">*</span></label>
                    <input type="text" class="form-control" [(ngModel)]="step1.title" placeholder="Enter course title">
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="input-block">
                    <label class="form-label">Course Category<span class="text-danger ms-1">*</span></label>
                    <select class="form-select" [(ngModel)]="step1.categoryId">
                      <option [ngValue]="null">-- Select --</option>
                      <option *ngFor="let cat of categories" [ngValue]="cat.id">{{ cat.name }}</option>
                    </select>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="input-block">
                    <label class="form-label">Course Level<span class="text-danger ms-1">*</span></label>
                    <select class="form-select" [(ngModel)]="step1.level">
                      <option value="BEGINNER">Beginner</option>
                      <option value="INTERMEDIATE">Intermediate</option>
                      <option value="ADVANCED">Advanced</option>
                      <option value="EXPERT">Expert</option>
                    </select>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="input-block">
                    <label class="form-label">Language<span class="text-danger ms-1">*</span></label>
                    <select class="form-select" [(ngModel)]="step1.language">
                      <option value="Fran\xE7ais">Fran\xE7ais</option>
                      <option value="English">English</option>
                      <option value="Arabe">Arabe</option>
                      <option value="Deutsch">Deutsch</option>
                    </select>
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="input-block">
                    <label class="form-label">Short Description</label>
                    <input type="text" class="form-control" [(ngModel)]="step1.shortDescription" placeholder="Brief summary (shown in course cards)">
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="input-block">
                    <label class="form-label">Course Description<span class="text-danger ms-1">*</span></label>
                    <textarea class="form-control" rows="5" [(ngModel)]="step1.description" placeholder="Detailed description of the course..."></textarea>
                  </div>
                </div>

                <!-- Objectives -->
                <div class="col-md-6">
                  <div class="bg-light border p-4 rounded-3">
                    <h6 class="mb-2">What will students learn?</h6>
                    <div class="input-block" *ngFor="let obj of objectives; let i = index; trackBy: trackByIndex">
                      <div class="d-flex align-items-center add-new-input">
                        <input type="text" class="form-control" [(ngModel)]="objectives[i]" placeholder="Learning objective">
                        <a href="javascript:void(0);" class="link-trash" (click)="removeObjective(i)"><i class="isax isax-trash"></i></a>
                      </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-end">
                      <a href="javascript:void(0);" class="d-flex align-items-center add-new-topic" (click)="addObjective()">
                        <i class="isax isax-add me-1"></i> Add New Item
                      </a>
                    </div>
                  </div>
                </div>

                <!-- Requirements -->
                <div class="col-md-6">
                  <div class="bg-light border p-4 rounded-3">
                    <h6 class="mb-2">Requirements</h6>
                    <div class="input-block" *ngFor="let req of requirements; let i = index; trackBy: trackByIndex">
                      <div class="d-flex align-items-center add-new-input">
                        <input type="text" class="form-control" [(ngModel)]="requirements[i]" placeholder="Prerequisite">
                        <a href="javascript:void(0);" class="link-trash" (click)="removeRequirement(i)"><i class="isax isax-trash"></i></a>
                      </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-end">
                      <a href="javascript:void(0);" class="d-flex align-items-center add-new-topic" (click)="addRequirement()">
                        <i class="isax isax-add me-1"></i> Add New Item
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 mt-3">
                  <div class="form-check form-switch form-check-md mb-0">
                    <input class="form-check-input form-checked-success" type="checkbox" id="checkFeature" [(ngModel)]="step1.featured">
                    <label class="form-check-label" for="checkFeature">Feature this course on the homepage</label>
                  </div>
                </div>
              </div>

              <div class="add-form-btn widget-next-btn submit-btn d-flex justify-content-end mb-0">
                <button class="btn main-btn next_btns" (click)="saveStep1()" [disabled]="loading">
                  <span *ngIf="loading" class="spinner-border spinner-border-sm me-1"></span>
                  Next <i class="isax isax-arrow-right-3 ms-1"></i>
                </button>
              </div>
            </fieldset>

            <!--  \xC9TAPE 2 : M\xE9dias  -->
            <fieldset class="form-inner wizard-form-card" [ngStyle]="{'display': selectedFieldSet[0] === 1 ? 'block' : 'none'}">
              <div class="title">
                <h5>Course Media</h5>
                <p>Upload a cover image for your course. Accepted: JPEG, PNG, WebP (max 2 MB)</p>
              </div>
              <div class="row">

                <div class="col-md-12">
                  <div class="input-block">
                    <label class="form-label">Course Thumbnail</label>
                    <input type="file" class="form-control" accept="image/jpeg,image/png,image/webp" (change)="onCoverSelected($event)">
                  </div>
                </div>

                <div class="col-md-12" *ngIf="coverPreview">
                  <img [src]="coverPreview" class="img-fluid rounded mb-3" style="max-height:300px;object-fit:cover;" alt="Cover preview">
                </div>

                <div class="col-md-12" *ngIf="!coverPreview">
                  <div class="upload-img-section d-flex align-items-center justify-content-center">
                    <div class="upload-content text-center">
                      <i class="isax isax-image5 text-secondary fs-24"></i>
                      <p class="fw-medium mb-1 mt-2">Upload Image</p>
                      <span class="text-muted small">JPEG, PNG, WebP  max 2 MB</span>
                    </div>
                  </div>
                </div>

                <div class="col-md-12 mt-3">
                  <label class="form-label">Intro Video URL (optional)</label>
                  <input type="text" class="form-control" [(ngModel)]="introVideoUrl" placeholder="https://youtube.com/embed/...">
                </div>
              </div>

              <div class="add-form-btn widget-next-btn submit-btn">
                <div class="btn-left">
                  <button class="btn btn-light main-btn prev_btns d-flex align-items-center" (click)="selectedFieldSet[0] = 0">
                    <i class="isax isax-arrow-left-2 me-1"></i>Prev
                  </button>
                </div>
                <div class="btn-left">
                  <button class="btn btn-secondary main-btn next_btns d-flex align-items-center" (click)="saveStep2()" [disabled]="loading">
                    <span *ngIf="loading" class="spinner-border spinner-border-sm me-1"></span>
                    Next <i class="isax isax-arrow-right-3 ms-1"></i>
                  </button>
                </div>
              </div>
            </fieldset>

            <!--  \xC9TAPE 3 : Curriculum  -->
            <fieldset class="form-inner wizard-form-card" [ngStyle]="{'display': selectedFieldSet[0] === 2 ? 'block' : 'none'}">
              <div class="title">
                <div class="row align-items-center row-gap-2">
                  <div class="col-md-6"><h5 class="mb-0">Curriculum</h5></div>
                  <div class="col-md-6 text-md-end">
                    <button class="btn add-edit-btn d-inline-flex align-items-center" (click)="openAddSectionModal()">
                      <i class="isax isax-add-circle5 me-1"></i> Add New Section
                    </button>
                  </div>
                </div>
              </div>

              <!-- Dynamic sections -->
              <div class="accordions-items-seperate" id="accordionCurriculum">
                <div class="accordion-item" *ngFor="let section of sections; let si = index">
                  <h2 class="accordion-header">
                    <a href="javascript:void(0);" class="accordion-button"
                       data-bs-toggle="collapse" [attr.data-bs-target]="'#sec' + si"
                       aria-expanded="true">
                      <span class="d-flex align-items-center mb-0">
                        <i class="isax isax-menu-15 me-2"></i>
                        {{ section.title }}
                        <span class="badge bg-secondary ms-2">{{ section.lessons?.length || 0 }} le\xE7ons</span>
                      </span>
                    </a>
                  </h2>
                  <div [id]="'sec' + si" class="accordion-collapse collapse show">
                    <div class="accordion-body">
                      <div class="d-flex align-items-center justify-content-between bg-white p-2 border rounded-3 mb-2"
                           *ngFor="let lesson of section.lessons">
                        <div class="d-flex align-items-center">
                          <span>
                            <i class="isax isax-play-circle5 text-success fs-24 me-1"
                               *ngIf="lesson.lessonType === 'VIDEO' || !lesson.lessonType"></i>
                            <i class="isax isax-document-text fs-24 me-1 text-info"
                               *ngIf="lesson.lessonType === 'TEXT'"></i>
                            <i class="isax isax-document fs-24 me-1 text-danger"
                               *ngIf="lesson.lessonType === 'PDF'"></i>
                          </span>
                          <p class="fw-medium text-gray-5 mb-0">{{ lesson.title }}</p>
                          <span class="badge bg-success ms-2" *ngIf="lesson.free">Free</span>
                          <span class="ms-2 text-muted small" *ngIf="lesson.durationSeconds">
                            {{ formatDuration(lesson.durationSeconds) }}
                          </span>
                          <span class="badge bg-success ms-2" *ngIf="lesson.videoUrl">
                            <i class="isax isax-video-circle me-1"></i>Vid\xE9o
                          </span>
                          <span class="badge bg-info ms-2" *ngIf="lesson.pdfUrl">
                            <i class="isax isax-document me-1"></i>PDF
                          </span>
                          <span class="badge bg-warning ms-2" *ngIf="lesson.articleContent">
                            <i class="isax isax-document-text me-1"></i>Article
                          </span>
                          <span class="badge ms-2" style="background:#6f42c1;color:#fff" *ngIf="lesson.hasQuiz">
                            <i class="isax isax-message-question5 me-1"></i>Quiz
                          </span>
                        </div>
                        <!-- Boutons de contenu \u2014 toujours visibles (multi-contenu par le\xE7on) -->
                        <!-- Rempli = contenu existant \xB7 Outline = pas encore de contenu -->
                        <div class="d-flex gap-1 flex-wrap">
                          <!-- Aper\xE7u contenu (toujours visible) -->
                          <button class="btn btn-sm btn-outline-secondary" title="Aper\xE7u de la le\xE7on"
                                  (click)="openPreview(lesson)">
                            <i class="isax isax-eye"></i>
                          </button>
                          <button class="btn btn-sm d-flex align-items-center gap-1"
                                  [class.btn-success]="lesson.videoUrl"
                                  [class.btn-outline-success]="!lesson.videoUrl"
                                  title="{{ lesson.videoUrl ? 'Remplacer la vid\xE9o' : 'Ajouter une vid\xE9o' }}"
                                  (click)="triggerVideoUpload(lesson.id)">
                            <i class="isax isax-video-circle"></i>
                            <span class="d-none d-lg-inline" style="font-size:11px">Vid\xE9o</span>
                          </button>
                          <!-- Supprimer vid\xE9o -->
                          <button *ngIf="lesson.videoUrl"
                                  class="btn btn-sm btn-outline-danger" title="Supprimer la vid\xE9o"
                                  (click)="deleteContent(lesson, 'video')">
                            <i class="isax isax-trash"></i>
                          </button>
                          <button class="btn btn-sm d-flex align-items-center gap-1"
                                  [class.btn-info]="lesson.pdfUrl"
                                  [class.btn-outline-info]="!lesson.pdfUrl"
                                  title="{{ lesson.pdfUrl ? 'Remplacer le PDF' : 'Ajouter un PDF' }}"
                                  (click)="triggerPdfUpload(lesson.id)">
                            <i class="isax isax-document"></i>
                            <span class="d-none d-lg-inline" style="font-size:11px">PDF</span>
                          </button>
                          <!-- Supprimer PDF -->
                          <button *ngIf="lesson.pdfUrl"
                                  class="btn btn-sm btn-outline-danger" title="Supprimer le PDF"
                                  (click)="deleteContent(lesson, 'pdf')">
                            <i class="isax isax-trash"></i>
                          </button>
                          <button class="btn btn-sm d-flex align-items-center gap-1"
                                  [class.btn-warning]="lesson.articleContent"
                                  [class.btn-outline-warning]="!lesson.articleContent"
                                  title="{{ lesson.articleContent ? 'Modifier l\\'article' : 'R\xE9diger un article' }}"
                                  (click)="openArticleEditor(lesson)">
                            <i class="isax isax-edit"></i>
                            <span class="d-none d-lg-inline" style="font-size:11px">Article</span>
                          </button>
                          <!-- Supprimer article -->
                          <button *ngIf="lesson.articleContent"
                                  class="btn btn-sm btn-outline-danger" title="Supprimer l'article"
                                  (click)="deleteContent(lesson, 'article')">
                            <i class="isax isax-trash"></i>
                          </button>
                        </div>
                      </div>
                      <div class="d-flex align-items-center justify-content-between mt-2">
                        <button class="btn add-edit-btn d-inline-flex align-items-center" (click)="openAddLessonModal(section.id)">
                          <i class="isax isax-add-circle5 me-2"></i>Add Lesson
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div *ngIf="sections.length === 0" class="text-center text-muted py-4">
                  <i class="isax isax-document-text fs-32 d-block mb-2"></i>
                  Aucune section pour le moment. Cliquez sur "Add New Section" pour commencer.
                </div>
              </div>

              <div class="add-form-btn widget-next-btn submit-btn">
                <div class="btn-left">
                  <button class="btn btn-light main-btn prev_btns" (click)="selectedFieldSet[0] = 1">
                    <i class="isax isax-arrow-left-2 me-1"></i>Prev
                  </button>
                </div>
                <div class="btn-left">
                  <button class="btn btn-secondary main-btn next_btns" (click)="selectedFieldSet[0] = 3">
                    Next <i class="isax isax-arrow-right-3 ms-1"></i>
                  </button>
                </div>
              </div>
            </fieldset>

            <!--  \xC9TAPE 4 : Additional Info  -->
            <fieldset class="form-inner wizard-form-card" [ngStyle]="{'display': selectedFieldSet[0] === 3 ? 'block' : 'none'}">
              <div class="title"><h5>Additional Information</h5></div>
              <div class="row">
                <div class="col-md-12">
                  <div class="input-block">
                    <label class="form-label">Tags</label>
                    <input type="text" class="form-control" placeholder="javascript, react, angular (s\xE9par\xE9s par des virgules)">
                    <span class="fs-13 text-gray-6 mt-1 d-block">Maximum 14 mots-cl\xE9s en minuscules.</span>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="input-block">
                    <label class="form-label">Message to reviewer</label>
                    <textarea class="form-control" rows="3" placeholder="Notes pour le validateur..."></textarea>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="d-flex align-items-center">
                    <div class="form-check form-check-md d-flex align-items-center">
                      <input class="form-check-input" type="checkbox" checked id="licenseCheck">
                      <label class="form-check-label ms-2" for="licenseCheck">
                        All assets used in this course are either my own work or properly licensed. I have full rights to sell this content.
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="add-form-btn widget-next-btn submit-btn">
                <div class="btn-left">
                  <button class="btn btn-light main-btn prev_btns" (click)="selectedFieldSet[0] = 2">
                    <i class="isax isax-arrow-left-2 me-1"></i>Prev
                  </button>
                </div>
                <div class="btn-left">
                  <button class="btn btn-secondary main-btn next_btns" (click)="selectedFieldSet[0] = 4">
                    Next <i class="isax isax-arrow-right-3 ms-1"></i>
                  </button>
                </div>
              </div>
            </fieldset>

            <!--  \xC9TAPE 5 : Pricing  -->
            <fieldset class="form-inner wizard-form-card" [ngStyle]="{'display': selectedFieldSet[0] === 4 ? 'block' : 'none'}">
              <div class="title"><h5>Pricing</h5></div>
              <div class="row">
                <div class="col-12">
                  <div class="d-flex align-items-center mb-3">
                    <div class="form-check form-check-md d-flex align-items-center">
                      <input class="form-check-input" type="checkbox" id="freeCheck" [(ngModel)]="step5.isFree">
                      <label class="form-check-label ms-2" for="freeCheck">This is a free course</label>
                    </div>
                  </div>

                  <div class="input-block mb-3" [style.display]="step5.isFree ? 'none' : 'block'">
                    <label class="form-label">Course Price (\u20AC)</label>
                    <input type="number" class="form-control" [(ngModel)]="step5.price" min="0" step="0.01">
                  </div>

                  <div class="d-flex align-items-center mb-3">
                    <div class="form-check form-check-md d-flex align-items-center">
                      <input class="form-check-input" type="checkbox" id="discountCheck" [(ngModel)]="step5.hasDiscount">
                      <label class="form-check-label ms-2" for="discountCheck">Apply a discount price</label>
                    </div>
                  </div>

                  <ng-container *ngIf="step5.hasDiscount">
                    <div class="input-block mb-2">
                      <label class="form-label">Discount Price (\u20AC)</label>
                      <input type="number" class="form-control mb-1" [(ngModel)]="step5.discountPrice" min="0" step="0.01">
                      <span class="text-success fw-medium" *ngIf="discountPercent > 0">{{ discountPercent }}% de r\xE9duction</span>
                    </div>
                    <div class="input-block mb-3">
                      <label class="form-label">Discount ends at</label>
                      <input type="date" class="form-control" [(ngModel)]="step5.discountEndsAt">
                    </div>
                  </ng-container>
                </div>
              </div>

              <div class="add-form-btn widget-next-btn submit-btn">
                <div class="btn-left">
                  <button class="btn btn-light main-btn prev_btns" (click)="selectedFieldSet[0] = 3">
                    <i class="isax isax-arrow-left-2 me-1"></i>Prev
                  </button>
                </div>
                <div class="btn-left d-flex gap-2">
                  <!-- Sauvegarder sans soumettre -->
                  <button class="btn main-btn d-flex align-items-center"
                          style="background:#fff;color:#374151;border:1.5px solid #9ca3af;font-weight:500"
                          (click)="saveDraft()" [disabled]="loading">
                    <span *ngIf="loading" class="spinner-border spinner-border-sm me-1"></span>
                    <i *ngIf="!loading" class="isax isax-save me-1"></i>
                    Enregistrer brouillon
                  </button>
                  <!-- Soumettre pour r\xE9vision admin (validation stricte) -->
                  <button class="btn btn-secondary main-btn d-flex align-items-center"
                          (click)="submitCourse()" [disabled]="loading">
                    <span *ngIf="loading" class="spinner-border spinner-border-sm me-1"></span>
                    <i *ngIf="!loading" class="isax isax-send me-1"></i>
                    Soumettre pour r\xE9vision
                  </button>
                </div>
              </div>
            </fieldset>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Modal: Add Section -->
<div class="modal fade" id="add-topic" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5>Add New Section</h5>
        <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal">
          <i class="isax isax-close-circle5"></i>
        </button>
      </div>
      <div class="modal-body">
        <div class="input-block">
          <label class="form-label">Section Title<span class="text-danger ms-1">*</span></label>
          <input type="text" class="form-control" [(ngModel)]="newSectionTitle" placeholder="Ex: Introduction">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn me-2 btn-light" data-bs-dismiss="modal">Annuler</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" (click)="confirmAddSection()">
          Ajouter
        </button>
      </div>
    </div>
  </div>
</div>

<!-- Modal: Add Lesson -->
<div class="modal fade" id="add-lesson" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5>New Lesson</h5>
        <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal">
          <i class="isax isax-close-circle5"></i>
        </button>
      </div>
      <div class="modal-body">
        <div class="input-block mb-3">
          <label class="form-label">Lesson Title<span class="text-danger ms-1">*</span></label>
          <input type="text" class="form-control" [(ngModel)]="newLesson.title" placeholder="Ex: Introduction to HTML">
        </div>
        <div class="input-block mb-3">
          <label class="form-label">
            Ic\xF4ne principale
            <span class="text-muted fs-12 ms-1">\u2014 utilis\xE9e dans le curriculum</span>
          </label>
          <select class="form-select" [(ngModel)]="newLesson.type">
            <option value="VIDEO"><i class="isax isax-video-circle"></i> Vid\xE9o</option>
            <option value="TEXT">Article / Texte</option>
            <option value="PDF">PDF</option>
          </select>
        </div>
        <!-- URL embed vid\xE9o (optionnel, affich\xE9 si type VIDEO) -->
        <div class="input-block mb-3" *ngIf="newLesson.type === 'VIDEO'">
          <label class="form-label">URL Vid\xE9o embed <span class="text-muted fs-12">(optionnel)</span></label>
          <input type="text" class="form-control" [(ngModel)]="newLesson.videoUrl" placeholder="https://youtube.com/watch?v=...">
        </div>
        <!-- Note multi-contenu -->
        <div class="alert alert-light border py-2 fs-13 mb-3">
          <div class="d-flex align-items-center gap-2 mb-1">
            <span class="btn btn-success btn-sm py-0 px-1 disabled"><i class="isax isax-video-circle"></i></span>
            <span class="btn btn-info btn-sm py-0 px-1 disabled"><i class="isax isax-document"></i></span>
            <span class="btn btn-warning btn-sm py-0 px-1 disabled"><i class="isax isax-edit"></i></span>
            <strong>Multi-contenu support\xE9</strong>
          </div>
          <ng-container *ngIf="newLesson.type === 'TEXT'"><span class="text-success"><i class="isax isax-document-text me-1"></i><strong>L'\xE9diteur s'ouvrira automatiquement.</strong></span></ng-container>
        </div>
        <div class="d-flex align-items-center">
          <div class="form-check me-3">
            <input class="form-check-input" type="radio" name="lessonAccess" id="freeLesson" [value]="true" [(ngModel)]="newLesson.isFree">
            <label class="form-check-label" for="freeLesson">Free Preview</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="lessonAccess" id="premiumLesson" [value]="false" [(ngModel)]="newLesson.isFree">
            <label class="form-check-label" for="premiumLesson">Premium</label>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn me-2 btn-light" data-bs-dismiss="modal">Annuler</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" (click)="confirmAddLesson()">Ajouter</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal: Success -->
<div class="modal fade modal-default" id="success" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body p-4">
        <div class="text-center">
          <div class="text-success h1 mb-2">
            <i class="isax isax-tick-circle5"></i>
          </div>
          <h5 class="mb-2">Cours soumis avec succ\xE8s !</h5>
          <p class="mb-3">Votre cours est maintenant en cours de r\xE9vision. Une fois approuv\xE9, il sera mis en ligne.</p>
          <div class="d-flex align-items-center justify-content-center gap-2 flex-wrap">
            <a [routerLink]="routes.instructor_dashboard" class="btn btn-secondary" data-bs-dismiss="modal">
              <i class="isax isax-arrow-left-2 me-1"></i>Back to Dashboard
            </a>
            <a [routerLink]="routes.instructorMyCourses" class="btn btn-outline-secondary" data-bs-dismiss="modal">
              My Courses
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 ARTICLE EDITOR MODAL (Quill.js) \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="modal fade" id="article_editor_modal" tabindex="-1">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content" style="display:flex;flex-direction:column;height:100dvh;overflow:hidden;">

      <!-- \u2500\u2500 Header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      <div class="d-flex align-items-center justify-content-between px-4 py-2 flex-shrink-0"
           style="background:linear-gradient(135deg,#1a1d2e 0%,#2d3250 100%);">
        <div class="d-flex align-items-center gap-3">
          <div style="width:34px;height:34px;border-radius:8px;background:rgba(255,255,255,.12);display:flex;align-items:center;justify-content:center;">
            <i class="fa-solid fa-pen-nib text-white" style="font-size:14px;"></i>
          </div>
          <div>
            <div style="font-size:10px;color:rgba(255,255,255,.45);letter-spacing:1px;text-transform:uppercase">R\xE9daction</div>
            <div class="text-white fw-semibold" style="font-size:15px;">{{ articleLesson?.title }}</div>
          </div>
        </div>
        <div class="d-flex align-items-center gap-2">
          <span *ngIf="articleSaved" class="text-success" style="font-size:12px;">
            <i class="fa-solid fa-circle-check me-1"></i>Sauvegard\xE9
          </span>
          <button class="btn btn-sm btn-light" (click)="saveArticle()" [disabled]="articleSaving">
            <i class="fa-solid fa-floppy-disk me-1"></i>{{ articleSaving ? 'Sauvegarde\u2026' : 'Sauvegarder' }}
          </button>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Fermer"></button>
        </div>
      </div>

      <!-- \u2500\u2500 Quill Toolbar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      <div id="ql-article-toolbar">
        <span class="ql-formats">
          <select class="ql-header">
            <option value="1">Titre\xA01</option>
            <option value="2">Titre\xA02</option>
            <option value="3">Titre\xA03</option>
            <option selected>Normal</option>
          </select>
        </span>
        <span class="ql-formats">
          <button class="ql-bold"      title="Gras"></button>
          <button class="ql-italic"    title="Italique"></button>
          <button class="ql-underline" title="Soulign\xE9"></button>
          <button class="ql-strike"    title="Barr\xE9"></button>
        </span>
        <span class="ql-formats">
          <button class="ql-blockquote" title="Citation"></button>
        </span>
        <span class="ql-formats">
          <button class="ql-list" value="ordered" title="Liste num\xE9rot\xE9e"></button>
          <button class="ql-list" value="bullet"  title="Liste \xE0 puces"></button>
        </span>
        <span class="ql-formats">
          <button class="ql-indent" value="-1"></button>
          <button class="ql-indent" value="+1"></button>
        </span>
        <span class="ql-formats">
          <select class="ql-color"      title="Couleur du texte"></select>
          <select class="ql-background" title="Couleur de fond"></select>
        </span>
        <span class="ql-formats">
          <button class="ql-link"  title="Lien"></button>
          <button class="ql-image" title="Image"></button>
        </span>
        <span class="ql-formats">
          <select class="ql-align">
            <option selected></option>
            <option value="center"></option>
            <option value="right"></option>
            <option value="justify"></option>
          </select>
        </span>
        <span class="ql-formats">
          <button class="ql-clean" title="Effacer mise en forme"></button>
        </span>
      </div>

      <!-- \u2500\u2500 Quill Editor area \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      <div class="flex-grow-1" style="overflow:hidden;min-height:0;background:#fff;">
        <div id="quill-editor-container" style="height:100%;"></div>
      </div>

    </div>
  </div>
</div>
<!-- / Article Editor Modal -->

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 LESSON PREVIEW MODAL \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="modal fade" id="lesson_preview_modal" tabindex="-1">
  <div class="modal-dialog modal-xl modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header py-2">
        <h5 class="fw-bold mb-0">
          <i class="isax isax-eye me-2 text-secondary"></i>
          Aper\xE7u \u2014 <span class="text-muted fw-normal">{{ previewLesson?.title }}</span>
        </h5>
        <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal">
          <i class="isax isax-close-circle5"></i>
        </button>
      </div>
      <div class="modal-body" *ngIf="previewLesson" style="max-height:80vh;overflow-y:auto">

        <!-- Vid\xE9o -->
        <div *ngIf="previewLesson.videoUrl" class="mb-4">
          <h6 class="d-flex align-items-center gap-2 mb-2">
            <span class="badge bg-success"><i class="isax isax-video-circle me-1"></i>Vid\xE9o</span>
          </h6>
          <video class="w-100 rounded" controls [src]="getFileUrl(previewLesson.videoUrl)"
                 style="max-height:420px;background:#000;"></video>
        </div>

        <!-- PDF -->
        <div *ngIf="previewLesson.pdfUrl" class="mb-4">
          <h6 class="d-flex align-items-center gap-2 mb-2">
            <span class="badge bg-danger"><i class="isax isax-document me-1"></i>PDF</span>
            <a [href]="getFileUrl(previewLesson.pdfUrl)" target="_blank"
               class="btn btn-sm btn-outline-danger">
              <i class="isax isax-export me-1"></i>Ouvrir dans un onglet
            </a>
          </h6>
          <iframe [src]="getFileUrl(previewLesson.pdfUrl) | safeUrl"
                  class="w-100 rounded" style="height:500px;border:1px solid #dee2e6;"></iframe>
        </div>

        <!-- Article -->
        <div *ngIf="previewLesson.articleContent" class="mb-4">
          <h6 class="d-flex align-items-center gap-2 mb-2">
            <span class="badge bg-warning text-dark"><i class="isax isax-edit me-1"></i>Article</span>
            <span class="text-muted" style="font-size:11px;font-weight:400;">Les blocs de code affichent un bouton <strong>Ex\xE9cuter</strong></span>
          </h6>
          <div class="article-preview-body p-4 bg-light rounded border"
               [innerHTML]="previewLesson.articleContent"
               style="font-size:15px;line-height:1.7"></div>
        </div>

        <!-- Aucun contenu -->
        <div *ngIf="!previewLesson.videoUrl && !previewLesson.pdfUrl && !previewLesson.articleContent"
             class="text-center text-muted py-5">
          <i class="isax isax-document-text fs-32 d-block mb-2"></i>
          Aucun contenu disponible. Utilisez les boutons Vid\xE9o / PDF / Article
          dans le curriculum pour ajouter du contenu \xE0 cette le\xE7on.
        </div>

      </div>
      <div class="modal-footer py-2">
        <button class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Fermer</button>
      </div>
    </div>
  </div>
</div>
<!-- / Lesson Preview Modal -->` }]
  }], () => [{ type: CourseService }, { type: Router }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddCourseComponent, { className: "AddCourseComponent", filePath: "src/app/features/courses/add-course/add-course.component.ts", lineNumber: 19 });
})();
export {
  AddCourseComponent
};
//# sourceMappingURL=chunk-F53WOYBI.js.map
