import {
  LightgalleryComponent,
  LightgalleryModule,
  lg_video_es5_default,
  lg_zoom_es5_default
} from "./chunk-OGKCRQHW.js";
import {
  require_aos
} from "./chunk-ZVJUVWF7.js";
import {
  CourseService
} from "./chunk-C7JGHRMX.js";
import "./chunk-MFSRU4HL.js";
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
import "./chunk-QFZWCWB7.js";
import "./chunk-PXFMCAI3.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgForOf,
  NgIf
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5DE2SIVI.js";
import {
  __toESM
} from "./chunk-TXDUYLVM.js";

// src/app/features/courses/course-details-2/course-details-2.component.ts
var import_aos = __toESM(require_aos());
function CourseDetails2Component_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 5);
    \u0275\u0275elementStart(2, "p", 6);
    \u0275\u0275text(3, "Chargement du cours...");
    \u0275\u0275elementEnd()();
  }
}
function CourseDetails2Component_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "p", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 9);
    \u0275\u0275text(4, "Voir tous les cours");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r0.routes.courseListPublic);
  }
}
function CourseDetails2Component_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 77);
    \u0275\u0275listener("click", function CourseDetails2Component_ng_container_2_div_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.successMessage = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
  }
}
function CourseDetails2Component_ng_container_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 77);
    \u0275\u0275listener("click", function CourseDetails2Component_ng_container_2_div_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.errorMessage = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function CourseDetails2Component_ng_container_2_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "i", 79);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-warning", s_r4 <= (ctx_r0.course.averageRating || 0))("text-white", s_r4 > (ctx_r0.course.averageRating || 0));
  }
}
function CourseDetails2Component_ng_container_2_ng_container_51_li_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 82);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const obj_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(obj_r5);
  }
}
function CourseDetails2Component_ng_container_2_ng_container_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h6", 39);
    \u0275\u0275text(2, "Ce que vous apprendrez");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 80);
    \u0275\u0275template(4, CourseDetails2Component_ng_container_2_ng_container_51_li_4_Template, 2, 1, "li", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.course.objectives);
  }
}
function CourseDetails2Component_ng_container_2_ng_container_52_li_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 82);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const req_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(req_r6);
  }
}
function CourseDetails2Component_ng_container_2_ng_container_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h6", 83);
    \u0275\u0275text(2, "Pr\xE9requis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 84);
    \u0275\u0275template(4, CourseDetails2Component_ng_container_2_ng_container_52_li_4_Template, 2, 1, "li", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.course.requirements);
  }
}
function CourseDetails2Component_ng_container_2_div_60_div_1_li_8_a_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 98);
    \u0275\u0275text(1, "Aper\xE7u");
    \u0275\u0275elementEnd();
  }
}
function CourseDetails2Component_ng_container_2_div_60_div_1_li_8_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 47);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lesson_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, lesson_r7.durationSeconds, "1.0-0"), "s ");
  }
}
function CourseDetails2Component_ng_container_2_div_60_div_1_li_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 94)(1, "p", 47);
    \u0275\u0275element(2, "img", 95);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 96);
    \u0275\u0275template(5, CourseDetails2Component_ng_container_2_div_60_div_1_li_8_a_5_Template, 2, 0, "a", 97)(6, CourseDetails2Component_ng_container_2_div_60_div_1_li_8_p_6_Template, 3, 4, "p", 63);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lesson_r7 = ctx.$implicit;
    const li_r8 = ctx.last;
    \u0275\u0275classProp("pb-0", li_r8);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", lesson_r7.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", lesson_r7.isFreePreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", lesson_r7.durationSeconds);
  }
}
function CourseDetails2Component_ng_container_2_div_60_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87)(1, "h2", 88)(2, "button", 89);
    \u0275\u0275text(3);
    \u0275\u0275element(4, "i", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 91)(6, "div", 92)(7, "ul");
    \u0275\u0275template(8, CourseDetails2Component_ng_container_2_div_60_div_1_li_8_Template, 7, 5, "li", 93);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const section_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("mb-0", i_r10 === ctx_r0.course.sections.length - 1);
    \u0275\u0275advance();
    \u0275\u0275property("id", "heading-" + i_r10);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-bs-target", "#collapse-" + i_r10)("aria-controls", "collapse-" + i_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", section_r9.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "collapse-" + i_r10);
    \u0275\u0275attribute("aria-labelledby", "heading-" + i_r10);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", section_r9.lessons);
  }
}
function CourseDetails2Component_ng_container_2_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275template(1, CourseDetails2Component_ng_container_2_div_60_div_1_Template, 9, 9, "div", 86);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.course.sections);
  }
}
function CourseDetails2Component_ng_container_2_ng_template_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 99);
    \u0275\u0275text(1, "Aucune section disponible.");
    \u0275\u0275elementEnd();
  }
}
function CourseDetails2Component_ng_container_2_ng_container_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "i", 79);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const s_r11 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-warning", s_r11 <= (ctx_r0.course.averageRating || 0));
  }
}
function CourseDetails2Component_ng_container_2_div_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275element(1, "div", 101);
    \u0275\u0275elementEnd();
  }
}
function CourseDetails2Component_ng_container_2_ng_container_90_div_1_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "i", 112);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const s_r12 = ctx.$implicit;
    const r_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("text-warning", s_r12 <= r_r13.rating)("text-muted", s_r12 > r_r13.rating);
  }
}
function CourseDetails2Component_ng_container_2_ng_container_90_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104)(1, "div", 105);
    \u0275\u0275element(2, "img", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 107)(4, "div", 108)(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 109);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 110);
    \u0275\u0275template(11, CourseDetails2Component_ng_container_2_ng_container_90_div_1_ng_container_11_Template, 2, 4, "ng-container", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 111);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r13 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.getAvatarUrl(r_r13.studentAvatar), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(r_r13.studentName || "\xC9tudiant");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 5, r_r13.createdAt, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.stars);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r13.comment);
  }
}
function CourseDetails2Component_ng_container_2_ng_container_90_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 99);
    \u0275\u0275text(1, "Aucun avis pour le moment.");
    \u0275\u0275elementEnd();
  }
}
function CourseDetails2Component_ng_container_2_ng_container_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CourseDetails2Component_ng_container_2_ng_container_90_div_1_Template, 14, 8, "div", 102)(2, CourseDetails2Component_ng_container_2_ng_container_90_p_2_Template, 2, 0, "p", 103);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.reviews);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.reviews.length === 0);
  }
}
function CourseDetails2Component_ng_container_2_ng_container_91_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "i", 118);
    \u0275\u0275listener("click", function CourseDetails2Component_ng_container_2_ng_container_91_ng_container_5_Template_i_click_1_listener() {
      const s_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.myRating = s_r16);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const s_r16 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-warning", s_r16 <= ctx_r0.myRating)("text-muted", s_r16 > ctx_r0.myRating);
  }
}
function CourseDetails2Component_ng_container_2_ng_container_91_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 119);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("text-success", ctx_r0.reviewMsg.includes("!"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.reviewMsg);
  }
}
function CourseDetails2Component_ng_container_2_ng_container_91_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 120);
  }
}
function CourseDetails2Component_ng_container_2_ng_container_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "hr");
    \u0275\u0275elementStart(2, "h6", 39);
    \u0275\u0275text(3, "Laisser un avis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 113);
    \u0275\u0275template(5, CourseDetails2Component_ng_container_2_ng_container_91_ng_container_5_Template, 2, 4, "ng-container", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "textarea", 114);
    \u0275\u0275twoWayListener("ngModelChange", function CourseDetails2Component_ng_container_2_ng_container_91_Template_textarea_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.myComment, $event) || (ctx_r0.myComment = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, CourseDetails2Component_ng_container_2_ng_container_91_p_7_Template, 2, 3, "p", 115);
    \u0275\u0275elementStart(8, "button", 116);
    \u0275\u0275listener("click", function CourseDetails2Component_ng_container_2_ng_container_91_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.submitReview());
    });
    \u0275\u0275template(9, CourseDetails2Component_ng_container_2_ng_container_91_span_9_Template, 1, 0, "span", 117);
    \u0275\u0275text(10, " Publier l'avis ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r0.stars);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.myComment);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.reviewMsg);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.submitingReview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.submitingReview);
  }
}
function CourseDetails2Component_ng_container_2_p_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 121);
    \u0275\u0275text(1, " Inscrivez-vous au cours pour laisser un avis. ");
    \u0275\u0275elementEnd();
  }
}
function CourseDetails2Component_ng_container_2_p_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 121)(1, "a", 122);
    \u0275\u0275text(2, "Connectez-vous");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " pour laisser un avis. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r0.routes.login);
  }
}
function CourseDetails2Component_ng_container_2_p_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 47)(1, "span", 123);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 8);
    \u0275\u0275text(5, "En promo");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(3, 1, ctx_r0.course.price, "1.2-2"), " \u20AC");
  }
}
function CourseDetails2Component_ng_container_2_ng_container_108_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 124);
    \u0275\u0275listener("click", function CourseDetails2Component_ng_container_2_ng_container_108_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.watchCourse());
    });
    \u0275\u0275element(2, "i", 125);
    \u0275\u0275text(3, " Continuer le cours ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function CourseDetails2Component_ng_container_2_ng_container_109_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 120);
  }
}
function CourseDetails2Component_ng_container_2_ng_container_109_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 126);
    \u0275\u0275listener("click", function CourseDetails2Component_ng_container_2_ng_container_109_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.enrollFree());
    });
    \u0275\u0275template(2, CourseDetails2Component_ng_container_2_ng_container_109_span_2_Template, 1, 0, "span", 117);
    \u0275\u0275text(3, " S'inscrire gratuitement ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.buyingCourse);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.buyingCourse);
  }
}
function CourseDetails2Component_ng_container_2_ng_container_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 127);
    \u0275\u0275element(2, "i", 128);
    \u0275\u0275text(3, "Se connecter pour s'inscrire ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", ctx_r0.routes.login);
  }
}
function CourseDetails2Component_ng_container_2_ng_container_111_a_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 136);
    \u0275\u0275element(1, "i", 137);
    \u0275\u0275text(2, "Voir le panier ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("routerLink", ctx_r0.routes.cart);
  }
}
function CourseDetails2Component_ng_container_2_ng_container_111_button_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 120);
  }
}
function CourseDetails2Component_ng_container_2_ng_container_111_button_3_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 140);
  }
}
function CourseDetails2Component_ng_container_2_ng_container_111_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 138);
    \u0275\u0275listener("click", function CourseDetails2Component_ng_container_2_ng_container_111_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.addToCart());
    });
    \u0275\u0275template(1, CourseDetails2Component_ng_container_2_ng_container_111_button_3_span_1_Template, 1, 0, "span", 117)(2, CourseDetails2Component_ng_container_2_ng_container_111_button_3_i_2_Template, 1, 0, "i", 139);
    \u0275\u0275text(3, "Panier ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r0.addingToCart);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.addingToCart);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.addingToCart);
  }
}
function CourseDetails2Component_ng_container_2_ng_container_111_button_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 120);
  }
}
function CourseDetails2Component_ng_container_2_ng_container_111_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 141);
    \u0275\u0275listener("click", function CourseDetails2Component_ng_container_2_ng_container_111_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.buyCourse());
    });
    \u0275\u0275template(1, CourseDetails2Component_ng_container_2_ng_container_111_button_7_span_1_Template, 1, 0, "span", 117);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r0.buyingCourse);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.buyingCourse);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Acheter ", ctx_r0.formatPrice(), " ");
  }
}
function CourseDetails2Component_ng_container_2_ng_container_111_a_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 142);
    \u0275\u0275element(1, "i", 128);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("routerLink", ctx_r0.routes.login);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Se connecter pour acheter ", ctx_r0.formatPrice(), " ");
  }
}
function CourseDetails2Component_ng_container_2_ng_container_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 129);
    \u0275\u0275template(2, CourseDetails2Component_ng_container_2_ng_container_111_a_2_Template, 3, 1, "a", 130)(3, CourseDetails2Component_ng_container_2_ng_container_111_button_3_Template, 4, 3, "button", 131);
    \u0275\u0275elementStart(4, "a", 132);
    \u0275\u0275element(5, "i", 133);
    \u0275\u0275text(6, "Partager ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, CourseDetails2Component_ng_container_2_ng_container_111_button_7_Template, 3, 3, "button", 134)(8, CourseDetails2Component_ng_container_2_ng_container_111_a_8_Template, 3, 2, "a", 135);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.isInCart);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isInCart);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.isLoggedIn);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoggedIn);
  }
}
function CourseDetails2Component_ng_container_2_div_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 143)(1, "small", 99)(2, "a", 122);
    \u0275\u0275text(3, "Connectez-vous");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " pour vous inscrire ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r0.routes.login);
  }
}
function CourseDetails2Component_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CourseDetails2Component_ng_container_2_div_1_Template, 3, 1, "div", 10)(2, CourseDetails2Component_ng_container_2_div_2_Template, 3, 1, "div", 11);
    \u0275\u0275elementStart(3, "section", 12)(4, "div", 13)(5, "div", 14)(6, "div", 15)(7, "h1", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 17);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 18)(12, "p", 19);
    \u0275\u0275element(13, "img", 20);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 19);
    \u0275\u0275element(16, "img", 21);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 22);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 23);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 24)(23, "div", 25)(24, "div", 26);
    \u0275\u0275element(25, "img", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 28)(27, "h6", 29);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p", 30);
    \u0275\u0275text(30, "Instructeur");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 31);
    \u0275\u0275template(32, CourseDetails2Component_ng_container_2_ng_container_32_Template, 2, 4, "ng-container", 32);
    \u0275\u0275elementStart(33, "p", 30)(34, "span", 33);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(38, "section", 34)(39, "div", 13)(40, "div", 14)(41, "div", 15)(42, "div", 35)(43, "div", 36)(44, "div", 37)(45, "h5", 38);
    \u0275\u0275text(46, "Aper\xE7u");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "h6", 39);
    \u0275\u0275text(48, "Description du cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "p");
    \u0275\u0275text(50);
    \u0275\u0275elementEnd();
    \u0275\u0275template(51, CourseDetails2Component_ng_container_2_ng_container_51_Template, 5, 1, "ng-container", 3)(52, CourseDetails2Component_ng_container_2_ng_container_52_Template, 5, 1, "ng-container", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 36)(54, "div", 37)(55, "div", 40)(56, "h5", 41);
    \u0275\u0275text(57, "Contenu du cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "h6", 42);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(60, CourseDetails2Component_ng_container_2_div_60_Template, 2, 1, "div", 43)(61, CourseDetails2Component_ng_container_2_ng_template_61_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 36)(64, "div", 37)(65, "h5", 38);
    \u0275\u0275text(66, "\xC0 propos de l'instructeur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div", 44)(68, "div", 45)(69, "div", 26);
    \u0275\u0275element(70, "img", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 28)(72, "h5", 46);
    \u0275\u0275text(73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "p", 47);
    \u0275\u0275text(75, "Instructeur");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(76, "div", 45);
    \u0275\u0275template(77, CourseDetails2Component_ng_container_2_ng_container_77_Template, 2, 2, "ng-container", 32);
    \u0275\u0275elementStart(78, "p", 47);
    \u0275\u0275text(79);
    \u0275\u0275pipe(80, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(81, "div", 48)(82, "p", 49);
    \u0275\u0275element(83, "img", 50);
    \u0275\u0275text(84);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(85, "div", 36)(86, "div", 37)(87, "h5", 38);
    \u0275\u0275text(88);
    \u0275\u0275elementEnd();
    \u0275\u0275template(89, CourseDetails2Component_ng_container_2_div_89_Template, 2, 0, "div", 51)(90, CourseDetails2Component_ng_container_2_ng_container_90_Template, 3, 2, "ng-container", 3)(91, CourseDetails2Component_ng_container_2_ng_container_91_Template, 11, 5, "ng-container", 3)(92, CourseDetails2Component_ng_container_2_p_92_Template, 2, 0, "p", 52)(93, CourseDetails2Component_ng_container_2_p_93_Template, 4, 1, "p", 52);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(94, "div", 53)(95, "div", 54)(96, "div", 36)(97, "div", 37)(98, "div", 55)(99, "lightgallery", 56)(100, "a", 57);
    \u0275\u0275element(101, "img", 58);
    \u0275\u0275elementStart(102, "div", 59);
    \u0275\u0275element(103, "i", 60);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(104, "div", 61)(105, "h2", 62);
    \u0275\u0275text(106);
    \u0275\u0275elementEnd();
    \u0275\u0275template(107, CourseDetails2Component_ng_container_2_p_107_Template, 6, 4, "p", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275template(108, CourseDetails2Component_ng_container_2_ng_container_108_Template, 4, 0, "ng-container", 3)(109, CourseDetails2Component_ng_container_2_ng_container_109_Template, 4, 2, "ng-container", 3)(110, CourseDetails2Component_ng_container_2_ng_container_110_Template, 4, 1, "ng-container", 3)(111, CourseDetails2Component_ng_container_2_ng_container_111_Template, 9, 4, "ng-container", 3)(112, CourseDetails2Component_ng_container_2_div_112_Template, 5, 1, "div", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(113, "div", 36)(114, "div", 37)(115, "h5", 65);
    \u0275\u0275text(116, "Inclus");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "p");
    \u0275\u0275element(118, "img", 66);
    \u0275\u0275text(119, "Acc\xE8s \xE0 vie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "p");
    \u0275\u0275element(121, "img", 67);
    \u0275\u0275text(122, "Acc\xE8s mobile et TV");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "p", 47);
    \u0275\u0275element(124, "img", 68);
    \u0275\u0275text(125, "Certificat de compl\xE9tion");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(126, "div", 69)(127, "div", 70)(128, "h5", 65);
    \u0275\u0275text(129, "Caract\xE9ristiques");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "ul")(131, "li")(132, "p", 47);
    \u0275\u0275element(133, "img", 71);
    \u0275\u0275text(134);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(135, "li")(136, "p", 47);
    \u0275\u0275element(137, "img", 72);
    \u0275\u0275text(138);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(139, "li")(140, "p", 47);
    \u0275\u0275element(141, "img", 73);
    \u0275\u0275text(142);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(143, "li")(144, "p", 47);
    \u0275\u0275element(145, "img", 74);
    \u0275\u0275text(146);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(147, "li")(148, "p", 47);
    \u0275\u0275element(149, "i", 75);
    \u0275\u0275text(150);
    \u0275\u0275elementEnd()()()()()()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const noSections_r21 = \u0275\u0275reference(62);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.successMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.errorMessage);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.course.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.course.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.getTotalLessons(), " le\xE7ons ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.course.enrollmentCount || 0, " \xE9tudiants inscrits ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.course.categoryName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getLevelLabel(ctx_r0.course.level));
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r0.getAvatarUrl(ctx_r0.course.instructorAvatar), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.course.instructorName);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.stars);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 45, ctx_r0.course.averageRating || 0, "1.1-1"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" (", ctx_r0.course.reviewCount || 0, ") ");
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r0.course.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.course.objectives == null ? null : ctx_r0.course.objectives.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.course.requirements == null ? null : ctx_r0.course.requirements.length);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r0.getTotalLessons(), " le\xE7ons");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.course.sections == null ? null : ctx_r0.course.sections.length)("ngIfElse", noSections_r21);
    \u0275\u0275advance(10);
    \u0275\u0275property("src", ctx_r0.getAvatarUrl(ctx_r0.course.instructorAvatar), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.course.instructorName);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.stars);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(80, 48, ctx_r0.course.averageRating || 0, "1.1-1"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.getTotalLessons(), " le\xE7ons ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Avis (", ctx_r0.reviews.length, ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loadingReviews);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingReviews);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoggedIn && ctx_r0.isEnrolled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoggedIn && !ctx_r0.isEnrolled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoggedIn);
    \u0275\u0275advance(6);
    \u0275\u0275property("settings", ctx_r0.settings)("onInit", ctx_r0.onInit);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.getImageUrl(ctx_r0.course.coverImage), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatPrice());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.course.onSale && ctx_r0.course.price > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isEnrolled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isEnrolled && ctx_r0.isCourseFree() && ctx_r0.isLoggedIn);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isEnrolled && ctx_r0.isCourseFree() && !ctx_r0.isLoggedIn);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isEnrolled && !ctx_r0.isCourseFree());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoggedIn);
    \u0275\u0275advance(22);
    \u0275\u0275textInterpolate1("Inscrits : ", ctx_r0.course.enrollmentCount || 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Sections : ", (ctx_r0.course.sections == null ? null : ctx_r0.course.sections.length) || 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Le\xE7ons : ", ctx_r0.getTotalLessons());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Niveau : ", ctx_r0.getLevelLabel(ctx_r0.course.level));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Langue : ", ctx_r0.course.language || "Fran\xE7ais");
  }
}
var CourseDetails2Component = class _CourseDetails2Component {
  route;
  router;
  courseService;
  routes = routes;
  stars = [1, 2, 3, 4, 5];
  // LightGallery
  settings = { counter: false, plugins: [lg_zoom_es5_default, lg_video_es5_default] };
  lightGallery;
  needRefresh = false;
  ngAfterViewChecked() {
    if (this.needRefresh) {
      this.lightGallery?.refresh();
      this.needRefresh = false;
    }
  }
  onInit = (detail) => {
    this.lightGallery = detail.instance;
  };
  // Data
  course = null;
  loading = true;
  errorMessage = "";
  successMessage = "";
  // Reviews
  reviews = [];
  loadingReviews = false;
  // Review form (student only)
  myRating = 5;
  myComment = "";
  submitingReview = false;
  reviewMsg = "";
  // Auth
  isLoggedIn = false;
  isEnrolled = false;
  isInCart = false;
  buyingCourse = false;
  addingToCart = false;
  constructor(route, router, courseService) {
    this.route = route;
    this.router = router;
    this.courseService = courseService;
  }
  ngOnInit() {
    import_aos.default.init({ duration: 1200, once: true });
    this.isLoggedIn = !!localStorage.getItem("token");
    this.route.queryParams.subscribe((params) => {
      const courseId = params["courseId"];
      if (courseId) {
        this.loadCourse(+courseId);
      } else {
        this.loading = false;
        this.errorMessage = "Aucun cours sp\xE9cifi\xE9.";
      }
    });
  }
  loadCourse(courseId) {
    this.loading = true;
    this.courseService.getCourseDetail(courseId).subscribe({
      next: (data) => {
        this.course = data;
        this.loading = false;
        this.needRefresh = true;
        this.loadReviews(courseId);
        if (this.isLoggedIn) {
          const role = localStorage.getItem("role") || "";
          const isStudent = role.includes("STUDENT");
          if (isStudent) {
            this.courseService.getMyEnrolledCourses().subscribe({
              next: (items) => {
                this.isEnrolled = items.some((c) => c.id === courseId);
              },
              error: () => {
              }
            });
            this.courseService.getCart().subscribe({
              next: (cartItems) => {
                this.isInCart = cartItems.some((c) => c.courseId === courseId);
              },
              error: () => {
              }
            });
          }
        }
      },
      error: () => {
        this.errorMessage = "Cours introuvable.";
        this.loading = false;
      }
    });
  }
  loadReviews(courseId) {
    this.loadingReviews = true;
    this.courseService.getCourseReviews(courseId).subscribe({
      next: (data) => {
        this.reviews = data;
        this.loadingReviews = false;
      },
      error: () => {
        this.loadingReviews = false;
      }
    });
  }
  submitReview() {
    if (!this.isLoggedIn) {
      this.router.navigate(["/auth/login"]);
      return;
    }
    this.submitingReview = true;
    this.courseService.upsertReview(this.course.id, { rating: this.myRating, comment: this.myComment }).subscribe({
      next: () => {
        this.submitingReview = false;
        this.reviewMsg = "Avis publi\xE9 !";
        this.myComment = "";
        this.loadReviews(this.course.id);
        setTimeout(() => this.reviewMsg = "", 3e3);
      },
      error: (e) => {
        this.submitingReview = false;
        this.reviewMsg = e.error?.message || "Erreur.";
      }
    });
  }
  // Utilities
  getTotalLessons() {
    if (!this.course?.sections)
      return 0;
    return this.course.sections.reduce((sum, s) => sum + (s.lessons?.length ?? 0), 0);
  }
  formatPrice() {
    if (!this.course)
      return "";
    const price = +(this.course.effectivePrice ?? this.course.price ?? 0);
    return price === 0 ? "Gratuit" : price.toFixed(2) + " \u20AC";
  }
  isCourseFree() {
    return +(this.course?.effectivePrice ?? this.course?.price ?? 0) === 0;
  }
  enrollFree() {
    if (!this.isLoggedIn) {
      this.router.navigate(["/auth/login"]);
      return;
    }
    this.buyingCourse = true;
    this.courseService.enrollFree(this.course.id).subscribe({
      next: () => {
        this.buyingCourse = false;
        this.isEnrolled = true;
        this.showSuccess("Inscription r\xE9ussie ! Vous pouvez maintenant acc\xE9der au cours.");
      },
      error: (e) => {
        this.buyingCourse = false;
        this.errorMessage = e.error?.message || "Erreur lors de l'inscription.";
        setTimeout(() => this.errorMessage = "", 5e3);
      }
    });
  }
  buyCourse() {
    if (!this.isLoggedIn) {
      this.router.navigate(["/auth/login"]);
      return;
    }
    this.buyingCourse = true;
    this.courseService.createCheckoutSession(this.course.id).subscribe({
      next: (r) => {
        window.location.href = r.url;
      },
      error: (e) => {
        this.buyingCourse = false;
        this.errorMessage = e.error?.error || "Erreur lors du paiement.";
        setTimeout(() => this.errorMessage = "", 5e3);
      }
    });
  }
  addToCart() {
    if (!this.isLoggedIn) {
      const cart = JSON.parse(localStorage.getItem("guest_cart") || "[]");
      if (!cart.some((c) => c.id === this.course.id)) {
        cart.push({
          id: this.course.id,
          title: this.course.title,
          coverImage: this.course.coverImage,
          price: this.course.price,
          effectivePrice: this.course.effectivePrice,
          instructorName: this.course.instructorName
        });
        localStorage.setItem("guest_cart", JSON.stringify(cart));
        this.showSuccess("Ajout\xE9 au panier ! Connectez-vous pour finaliser l'achat.");
      } else {
        this.showSuccess("Ce cours est d\xE9j\xE0 dans votre panier.");
      }
      return;
    }
    const role = localStorage.getItem("role") || "";
    if (!role.includes("STUDENT")) {
      this.router.navigate([this.routes.login]);
      return;
    }
    if (this.isEnrolled) {
      this.watchCourse();
      return;
    }
    if (this.isInCart) {
      this.router.navigate([this.routes.cart]);
      return;
    }
    this.addingToCart = true;
    this.courseService.addToCart(this.course.id).subscribe({
      next: () => {
        this.addingToCart = false;
        this.isInCart = true;
        this.showSuccess("Ajout\xE9 au panier !");
      },
      error: (e) => {
        this.addingToCart = false;
        const status = e.status;
        if (status === 500 || status === 409 || status === 400) {
          this.isInCart = true;
          this.router.navigate([this.routes.cart]);
        } else {
          this.errorMessage = e.error?.message || "Erreur lors de l'ajout au panier";
          setTimeout(() => this.errorMessage = "", 5e3);
        }
      }
    });
  }
  watchCourse() {
    this.router.navigate([this.routes.courseWatch], { queryParams: { courseId: this.course.id } });
  }
  getLevelLabel(l) {
    const m = { BEGINNER: "D\xE9butant", INTERMEDIATE: "Interm\xE9diaire", ADVANCED: "Avanc\xE9" };
    return m[l] ?? l;
  }
  getImageUrl(path) {
    if (!path)
      return "assets/img/course/course-01.jpg";
    return `http://localhost:8081/${path}`;
  }
  getAvatarUrl(path) {
    if (!path)
      return "assets/img/avatar/avatar10.jpg";
    return `http://localhost:8081/${path}`;
  }
  showSuccess(msg) {
    this.successMessage = msg;
    setTimeout(() => this.successMessage = "", 3e3);
  }
  static \u0275fac = function CourseDetails2Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CourseDetails2Component)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(CourseService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CourseDetails2Component, selectors: [["app-course-details-2"]], decls: 3, vars: 3, consts: [["noSections", ""], ["class", "text-center py-5", 4, "ngIf"], ["class", "container py-5 text-center", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "py-5"], [1, "spinner-border", "text-primary"], [1, "mt-2"], [1, "container", "py-5", "text-center"], [1, "text-danger"], [1, "btn", "btn-primary", 3, "routerLink"], ["class", "alert alert-success alert-dismissible mx-3 mt-2", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible mx-3 mt-2", "role", "alert", 4, "ngIf"], [1, "inner-banner"], [1, "container"], [1, "row"], [1, "col-lg-8"], [1, "text-white", "mb-3", "mb-sm-2"], [1, "text-white", "fs-14", "mb-3"], [1, "d-flex", "align-items-center", "gap-2", "gap-sm-3", "gap-xl-4", "flex-wrap", "justify-content-md-start", "justify-content-center"], [1, "fw-medium", "text-white", "d-flex", "align-items-center", "mb-0"], ["src", "./assets/img/icons/book.svg", "alt", "img", 1, "me-2"], ["src", "./assets/img/icons/people.svg", "alt", "img", 1, "me-2"], [1, "badge", "badge-sm", "rounded-pill", "bg-warning", "fs-12"], [1, "badge", "badge-sm", "rounded-pill", "bg-info", "fs-12"], [1, "d-sm-flex", "align-items-center", "justify-content-sm-between", "mt-5"], [1, "d-flex", "text-start", "align-items-center", "justify-content-sm-start", "justify-content-center"], [1, "avatar", "avatar-lg"], ["alt", "instructor", 1, "rounded-circle", 3, "src"], [1, "ms-2"], [1, "fs-18", "text-white"], [1, "text-white", "fs-14"], [1, "d-flex", "mt-sm-0", "mt-2", "align-items-center", "justify-content-sm-start", "justify-content-center"], [4, "ngFor", "ngForOf"], [1, "text-warning"], [1, "course-details"], [1, "course-page-content"], [1, "card"], [1, "card-body"], [1, "subs-title", "mb-3"], [1, "mb-3"], [1, "d-flex", "justify-content-between", "flex-wrap"], [1, "subs-title", "mb-2", "mb-sm-3"], [1, "text-gray-7", "mb-3"], ["class", "accordion accordion-customicon1 accordions-items-seperate p-0", "id", "courseAccordion", 4, "ngIf", "ngIfElse"], [1, "d-flex", "align-items-center", "justify-content-between", "mt-4", "gap-2", "flex-wrap"], [1, "d-flex", "align-items-center"], [1, "fs-18", "fw-semibold"], [1, "mb-0"], [1, "course-info", "align-items-center", "d-flex", "gap-2", "gap-xl-3", "mt-3", "mb-3", "flex-wrap"], [1, "fw-medium", "d-flex", "align-items-center", "fs-14", "mb-0"], ["src", "./assets/img/icons/book2.svg", "alt", "img", 1, "me-2"], ["class", "text-center py-3", 4, "ngIf"], ["class", "text-muted fs-13 mt-2", 4, "ngIf"], [1, "col-lg-4"], [1, "course-sidebar-sec"], [1, "position-relative", "mb-4"], ["size", "1400-933", 3, "settings", "onInit"], ["href", "https://www.youtube.com/embed/1trvO6dqQUI", "id", "openVideoBtn", "target", "_blank"], ["alt", "course cover", 1, "img-fluid", 3, "src"], [1, "play-icon"], [1, "ti", "ti-player-play-filled", "fs-28"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "text-success", "fs-30"], ["class", "mb-0", 4, "ngIf"], ["class", "mt-2 text-center", 4, "ngIf"], [1, "subs-title"], ["src", "./assets/img/icons/key.svg", "alt", "img", 1, "me-2"], ["src", "./assets/img/icons/monitor-mobbile.svg", "alt", "img", 1, "me-2"], ["src", "./assets/img/icons/teacher.svg", "alt", "img", 1, "me-2"], [1, "cou-features-card"], [1, "cou-features"], ["src", "./assets/img/icons/people2.svg", "alt", "img", 1, "me-2"], ["src", "./assets/img/icons/note.svg", "alt", "img", 1, "me-2"], ["src", "./assets/img/icons/play3.svg", "alt", "img", 1, "me-2"], ["src", "./assets/img/icons/chart.svg", "alt", "img", 1, "me-2"], [1, "fa-solid", "fa-globe", "me-2"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "mx-3", "mt-2"], ["type", "button", 1, "btn-close", 3, "click"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "mx-3", "mt-2"], [1, "fa-solid", "fa-star", "me-1"], [1, "custom-list"], ["class", "list-items", 4, "ngFor", "ngForOf"], [1, "list-items"], [1, "mb-3", "mt-4"], [1, "custom-list", "mb-0"], ["id", "courseAccordion", 1, "accordion", "accordion-customicon1", "accordions-items-seperate", "p-0"], ["class", "accordion-item", 3, "mb-0", 4, "ngFor", "ngForOf"], [1, "accordion-item"], [1, "accordion-header", 3, "id"], ["type", "button", "data-bs-toggle", "collapse", "aria-expanded", "false", 1, "accordion-button", "collapsed"], [1, "fa-solid", "fa-chevron-down"], ["data-bs-parent", "#courseAccordion", 1, "accordion-collapse", "collapse", 3, "id"], [1, "accordion-body", "p-0"], ["class", "p-4 px-3 d-flex justify-content-between", 3, "pb-0", 4, "ngFor", "ngForOf"], [1, "p-4", "px-3", "d-flex", "justify-content-between"], ["src", "./assets/img/icons/play.svg", "alt", "", 1, "me-2"], [1, "d-flex", "gap-xl-5", "gap-3"], ["href", "javascript:void(0);", "class", "preview-link", 4, "ngIf"], ["href", "javascript:void(0);", 1, "preview-link"], [1, "text-muted"], [1, "text-center", "py-3"], [1, "spinner-border", "spinner-border-sm", "text-primary"], ["class", "d-flex mb-4", 4, "ngFor", "ngForOf"], ["class", "text-muted", 4, "ngIf"], [1, "d-flex", "mb-4"], [1, "avatar", "me-3"], ["alt", "avatar", 1, "rounded-circle", 2, "width", "40px", "height", "40px", "object-fit", "cover", 3, "src"], [1, "flex-grow-1"], [1, "d-flex", "align-items-center", "gap-2", "mb-1"], [1, "text-muted", "fs-12"], [1, "mb-1"], [1, "mb-0", "fs-14"], [1, "fa-solid", "fa-star", "fs-12"], [1, "mb-2"], ["rows", "3", "placeholder", "Votre commentaire...", 1, "form-control", "mb-2", "fs-14", 3, "ngModelChange", "ngModel"], ["class", "fs-14", 3, "text-success", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], [1, "fa-solid", "fa-star", "fs-18", "me-1", "cursor-pointer", 2, "cursor", "pointer", 3, "click"], [1, "fs-14"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "text-muted", "fs-13", "mt-2"], [3, "routerLink"], [1, "text-decoration-line-through", "me-2"], [1, "btn", "btn-success", "w-100", "mb-3", "btn-enroll", 3, "click"], [1, "ti", "ti-player-play", "me-1"], [1, "btn", "btn-primary", "w-100", "mb-3", "btn-enroll", 3, "click", "disabled"], [1, "btn", "btn-primary", "w-100", "mb-3", "btn-enroll", 3, "routerLink"], [1, "ti", "ti-login", "me-1"], [1, "d-flex", "justify-content-between", "gap-3", "wishlist-btns", "mb-3"], ["class", "btn d-flex btn-wish flex-grow-1 text-success", 3, "routerLink", 4, "ngIf"], ["class", "btn d-flex btn-wish flex-grow-1", 3, "disabled", "click", 4, "ngIf"], ["href", "javascript:void(0);", 1, "btn", "d-flex", "btn-wish"], [1, "ti", "ti-share", "me-1", "fs-18"], ["class", "btn btn-primary w-100 btn-enroll", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-primary w-100 btn-enroll", 3, "routerLink", 4, "ngIf"], [1, "btn", "d-flex", "btn-wish", "flex-grow-1", "text-success", 3, "routerLink"], [1, "ti", "ti-shopping-cart-check", "me-1", "fs-18"], [1, "btn", "d-flex", "btn-wish", "flex-grow-1", 3, "click", "disabled"], ["class", "ti ti-shopping-cart me-1 fs-18", 4, "ngIf"], [1, "ti", "ti-shopping-cart", "me-1", "fs-18"], [1, "btn", "btn-primary", "w-100", "btn-enroll", 3, "click", "disabled"], [1, "btn", "btn-primary", "w-100", "btn-enroll", 3, "routerLink"], [1, "mt-2", "text-center"]], template: function CourseDetails2Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CourseDetails2Component_div_0_Template, 4, 0, "div", 1)(1, CourseDetails2Component_div_1_Template, 5, 2, "div", 2)(2, CourseDetails2Component_ng_container_2_Template, 151, 51, "ng-container", 3);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.errorMessage && !ctx.course);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.course);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, LightgalleryModule, LightgalleryComponent, DecimalPipe, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CourseDetails2Component, [{
    type: Component,
    args: [{ selector: "app-course-details-2", imports: [CommonModule, RouterLink, FormsModule, LightgalleryModule], template: `<!-- Loading state -->
<div *ngIf="loading" class="text-center py-5">
  <div class="spinner-border text-primary"></div>
  <p class="mt-2">Chargement du cours...</p>
</div>

<!-- Error state -->
<div *ngIf="!loading && errorMessage && !course" class="container py-5 text-center">
  <p class="text-danger">{{ errorMessage }}</p>
  <a [routerLink]="routes.courseListPublic" class="btn btn-primary">Voir tous les cours</a>
</div>

<!-- Main content -->
<ng-container *ngIf="!loading && course">

  <!-- Alerts -->
  <div *ngIf="successMessage" class="alert alert-success alert-dismissible mx-3 mt-2" role="alert">
    {{ successMessage }}
    <button type="button" class="btn-close" (click)="successMessage=''"></button>
  </div>
  <div *ngIf="errorMessage" class="alert alert-danger alert-dismissible mx-3 mt-2" role="alert">
    {{ errorMessage }}
    <button type="button" class="btn-close" (click)="errorMessage=''"></button>
  </div>

  <!-- banner -->
  <section class="inner-banner">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <h1 class="text-white mb-3 mb-sm-2">{{ course.title }}</h1>
          <p class="text-white fs-14 mb-3">{{ course.description }}</p>
          <div class="d-flex align-items-center gap-2 gap-sm-3 gap-xl-4 flex-wrap justify-content-md-start justify-content-center">
            <p class="fw-medium text-white d-flex align-items-center mb-0">
              <img class="me-2" src="./assets/img/icons/book.svg" alt="img">{{ getTotalLessons() }} le\xE7ons
            </p>
            <p class="fw-medium text-white d-flex align-items-center mb-0">
              <img class="me-2" src="./assets/img/icons/people.svg" alt="img">{{ course.enrollmentCount || 0 }} \xE9tudiants inscrits
            </p>
            <span class="badge badge-sm rounded-pill bg-warning fs-12">{{ course.categoryName }}</span>
            <span class="badge badge-sm rounded-pill bg-info fs-12">{{ getLevelLabel(course.level) }}</span>
          </div>
          <div class="d-sm-flex align-items-center justify-content-sm-between mt-5">
            <div class="d-flex text-start align-items-center justify-content-sm-start justify-content-center">
              <div class="avatar avatar-lg">
                <img class="rounded-circle" [src]="getAvatarUrl(course.instructorAvatar)" alt="instructor">
              </div>
              <div class="ms-2">
                <h6 class="fs-18 text-white">{{ course.instructorName }}</h6>
                <p class="text-white fs-14">Instructeur</p>
              </div>
            </div>
            <div class="d-flex mt-sm-0 mt-2 align-items-center justify-content-sm-start justify-content-center">
              <ng-container *ngFor="let s of stars">
                <i class="fa-solid fa-star me-1"
                   [class.text-warning]="s <= (course.averageRating || 0)"
                   [class.text-white]="s > (course.averageRating || 0)"></i>
              </ng-container>
              <p class="text-white fs-14">
                <span class="text-warning">{{ (course.averageRating || 0) | number:'1.1-1' }}</span>
                ({{ course.reviewCount || 0 }})
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /banner -->

  <!-- Course detail -->
  <section class="course-details">
    <div class="container">
      <div class="row">
        <!-- Main column -->
        <div class="col-lg-8">
          <div class="course-page-content">

            <!-- Overview -->
            <div class="card">
              <div class="card-body">
                <h5 class="subs-title mb-3">Aper\xE7u</h5>
                <h6 class="mb-3">Description du cours</h6>
                <p>{{ course.description }}</p>

                <ng-container *ngIf="course.objectives?.length">
                  <h6 class="mb-3">Ce que vous apprendrez</h6>
                  <ul class="custom-list">
                    <li *ngFor="let obj of course.objectives" class="list-items">{{ obj }}</li>
                  </ul>
                </ng-container>

                <ng-container *ngIf="course.requirements?.length">
                  <h6 class="mb-3 mt-4">Pr\xE9requis</h6>
                  <ul class="custom-list mb-0">
                    <li *ngFor="let req of course.requirements" class="list-items">{{ req }}</li>
                  </ul>
                </ng-container>
              </div>
            </div>

            <!-- Course Content -->
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between flex-wrap">
                  <h5 class="subs-title mb-2 mb-sm-3">Contenu du cours</h5>
                  <h6 class="text-gray-7 mb-3">{{ getTotalLessons() }} le\xE7ons</h6>
                </div>
                <div *ngIf="course.sections?.length; else noSections"
                     class="accordion accordion-customicon1 accordions-items-seperate p-0"
                     id="courseAccordion">
                  <div *ngFor="let section of course.sections; let i = index"
                       class="accordion-item" [class.mb-0]="i === course.sections.length - 1">
                    <h2 class="accordion-header" [id]="'heading-' + i">
                      <button class="accordion-button collapsed" type="button"
                              data-bs-toggle="collapse"
                              [attr.data-bs-target]="'#collapse-' + i"
                              aria-expanded="false"
                              [attr.aria-controls]="'collapse-' + i">
                        {{ section.title }}
                        <i class="fa-solid fa-chevron-down"></i>
                      </button>
                    </h2>
                    <div [id]="'collapse-' + i"
                         class="accordion-collapse collapse"
                         [attr.aria-labelledby]="'heading-' + i"
                         data-bs-parent="#courseAccordion">
                      <div class="accordion-body p-0">
                        <ul>
                          <li *ngFor="let lesson of section.lessons; let li = last"
                              class="p-4 px-3 d-flex justify-content-between"
                              [class.pb-0]="li">
                            <p class="mb-0">
                              <img class="me-2" src="./assets/img/icons/play.svg" alt>
                              {{ lesson.title }}
                            </p>
                            <div class="d-flex gap-xl-5 gap-3">
                              <a href="javascript:void(0);" *ngIf="lesson.isFreePreview" class="preview-link">Aper\xE7u</a>
                              <p class="mb-0" *ngIf="lesson.durationSeconds">
                                {{ lesson.durationSeconds | number:'1.0-0' }}s
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <ng-template #noSections>
                  <p class="text-muted">Aucune section disponible.</p>
                </ng-template>
              </div>
            </div>

            <!-- About instructor -->
            <div class="card">
              <div class="card-body">
                <h5 class="subs-title mb-3">\xC0 propos de l'instructeur</h5>
                <div class="d-flex align-items-center justify-content-between mt-4 gap-2 flex-wrap">
                  <div class="d-flex align-items-center">
                    <div class="avatar avatar-lg">
                      <img class="rounded-circle" [src]="getAvatarUrl(course.instructorAvatar)" alt="instructor">
                    </div>
                    <div class="ms-2">
                      <h5 class="fs-18 fw-semibold">{{ course.instructorName }}</h5>
                      <p class="mb-0">Instructeur</p>
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <ng-container *ngFor="let s of stars">
                      <i class="fa-solid fa-star me-1"
                         [class.text-warning]="s <= (course.averageRating || 0)"></i>
                    </ng-container>
                    <p class="mb-0">{{ (course.averageRating || 0) | number:'1.1-1' }}</p>
                  </div>
                </div>
                <div class="course-info align-items-center d-flex gap-2 gap-xl-3 mt-3 mb-3 flex-wrap">
                  <p class="fw-medium d-flex align-items-center fs-14 mb-0">
                    <img class="me-2" src="./assets/img/icons/book2.svg" alt="img">{{ getTotalLessons() }} le\xE7ons
                  </p>
                </div>
              </div>
            </div>

            <!-- Reviews -->
            <div class="card">
              <div class="card-body">
                <h5 class="subs-title mb-3">Avis ({{ reviews.length }})</h5>

                <!-- existing reviews list -->
                <div *ngIf="loadingReviews" class="text-center py-3">
                  <div class="spinner-border spinner-border-sm text-primary"></div>
                </div>
                <ng-container *ngIf="!loadingReviews">
                  <div *ngFor="let r of reviews" class="d-flex mb-4">
                    <div class="avatar me-3">
                      <img class="rounded-circle" [src]="getAvatarUrl(r.studentAvatar)" alt="avatar"
                           style="width:40px;height:40px;object-fit:cover;">
                    </div>
                    <div class="flex-grow-1">
                      <div class="d-flex align-items-center gap-2 mb-1">
                        <strong>{{ r.studentName || '\xC9tudiant' }}</strong>
                        <span class="text-muted fs-12">{{ r.createdAt | date:'dd/MM/yyyy' }}</span>
                      </div>
                      <div class="mb-1">
                        <ng-container *ngFor="let s of stars">
                          <i class="fa-solid fa-star fs-12"
                             [class.text-warning]="s <= r.rating"
                             [class.text-muted]="s > r.rating"></i>
                        </ng-container>
                      </div>
                      <p class="mb-0 fs-14">{{ r.comment }}</p>
                    </div>
                  </div>
                  <p *ngIf="reviews.length === 0" class="text-muted">Aucun avis pour le moment.</p>
                </ng-container>

                <!-- Leave a review form (enrolled students only) -->
                <ng-container *ngIf="isLoggedIn && isEnrolled">
                  <hr>
                  <h6 class="mb-3">Laisser un avis</h6>
                  <div class="mb-2">
                    <ng-container *ngFor="let s of stars">
                      <i class="fa-solid fa-star fs-18 me-1 cursor-pointer"
                         [class.text-warning]="s <= myRating"
                         [class.text-muted]="s > myRating"
                         (click)="myRating = s" style="cursor:pointer;"></i>
                    </ng-container>
                  </div>
                  <textarea class="form-control mb-2 fs-14" rows="3"
                            [(ngModel)]="myComment"
                            placeholder="Votre commentaire..."></textarea>
                  <p *ngIf="reviewMsg" [class.text-success]="reviewMsg.includes('!')" class="fs-14">{{ reviewMsg }}</p>
                  <button class="btn btn-primary" (click)="submitReview()" [disabled]="submitingReview">
                    <span *ngIf="submitingReview" class="spinner-border spinner-border-sm me-1"></span>
                    Publier l'avis
                  </button>
                </ng-container>
                <p *ngIf="isLoggedIn && !isEnrolled" class="text-muted fs-13 mt-2">
                  Inscrivez-vous au cours pour laisser un avis.
                </p>
                <p *ngIf="!isLoggedIn" class="text-muted fs-13 mt-2">
                  <a [routerLink]="routes.login">Connectez-vous</a> pour laisser un avis.
                </p>
              </div>
            </div>

          </div>
        </div>

        <!-- Sidebar -->
        <div class="col-lg-4">
          <div class="course-sidebar-sec">

            <!-- Price & CTA card -->
            <div class="card">
              <div class="card-body">
                <div class="position-relative mb-4">
                  <lightgallery [settings]="settings" [onInit]="onInit" size="1400-933">
                    <a href="https://www.youtube.com/embed/1trvO6dqQUI" id="openVideoBtn" target="_blank">
                      <img class="img-fluid" [src]="getImageUrl(course.coverImage)" alt="course cover">
                      <div class="play-icon">
                        <i class="ti ti-player-play-filled fs-28"></i>
                      </div>
                    </a>
                  </lightgallery>
                </div>

                <!-- Price display -->
                <div class="d-flex justify-content-between align-items-center mb-4">
                  <h2 class="text-success fs-30">{{ formatPrice() }}</h2>
                  <p *ngIf="course.onSale && course.price > 0" class="mb-0">
                    <span class="text-decoration-line-through me-2">{{ course.price | number:'1.2-2' }} \u20AC</span>
                    <span class="text-danger">En promo</span>
                  </p>
                </div>

                <!-- CTA buttons -->
                <!-- Already enrolled -->
                <ng-container *ngIf="isEnrolled">
                  <button class="btn btn-success w-100 mb-3 btn-enroll" (click)="watchCourse()">
                    <i class="ti ti-player-play me-1"></i> Continuer le cours
                  </button>
                </ng-container>

                <!-- Free course not enrolled -->
                <ng-container *ngIf="!isEnrolled && isCourseFree() && isLoggedIn">
                  <button class="btn btn-primary w-100 mb-3 btn-enroll"
                          (click)="enrollFree()" [disabled]="buyingCourse">
                    <span *ngIf="buyingCourse" class="spinner-border spinner-border-sm me-1"></span>
                    S'inscrire gratuitement
                  </button>
                </ng-container>
                <ng-container *ngIf="!isEnrolled && isCourseFree() && !isLoggedIn">
                  <a [routerLink]="routes.login" class="btn btn-primary w-100 mb-3 btn-enroll">
                    <i class="ti ti-login me-1"></i>Se connecter pour s'inscrire
                  </a>
                </ng-container>

                <!-- Paid course not enrolled -->
                <ng-container *ngIf="!isEnrolled && !isCourseFree()">
                  <div class="d-flex justify-content-between gap-3 wishlist-btns mb-3">
                    <!-- Already in cart -->
                    <a *ngIf="isInCart"
                       [routerLink]="routes.cart"
                       class="btn d-flex btn-wish flex-grow-1 text-success">
                      <i class="ti ti-shopping-cart-check me-1 fs-18"></i>Voir le panier
                    </a>
                    <!-- Not yet in cart -->
                    <button *ngIf="!isInCart"
                            class="btn d-flex btn-wish flex-grow-1"
                            (click)="addToCart()" [disabled]="addingToCart">
                      <span *ngIf="addingToCart" class="spinner-border spinner-border-sm me-1"></span>
                      <i *ngIf="!addingToCart" class="ti ti-shopping-cart me-1 fs-18"></i>Panier
                    </button>
                    <a class="btn d-flex btn-wish" href="javascript:void(0);">
                      <i class="ti ti-share me-1 fs-18"></i>Partager
                    </a>
                  </div>
                  <button *ngIf="isLoggedIn" class="btn btn-primary w-100 btn-enroll"
                          (click)="buyCourse()" [disabled]="buyingCourse">
                    <span *ngIf="buyingCourse" class="spinner-border spinner-border-sm me-1"></span>
                    Acheter  {{ formatPrice() }}
                  </button>
                  <a *ngIf="!isLoggedIn" [routerLink]="routes.login" class="btn btn-primary w-100 btn-enroll">
                    <i class="ti ti-login me-1"></i>Se connecter pour acheter {{ formatPrice() }}
                  </a>
                </ng-container>

                <!-- Not logged in -->
                <div *ngIf="!isLoggedIn" class="mt-2 text-center">
                  <small class="text-muted">
                    <a [routerLink]="routes.login">Connectez-vous</a> pour vous inscrire
                  </small>
                </div>
              </div>
            </div>

            <!-- Includes card -->
            <div class="card">
              <div class="card-body">
                <h5 class="subs-title">Inclus</h5>
                <p><img class="me-2" src="./assets/img/icons/key.svg" alt="img">Acc\xE8s \xE0 vie</p>
                <p><img class="me-2" src="./assets/img/icons/monitor-mobbile.svg" alt="img">Acc\xE8s mobile et TV</p>
                <p class="mb-0"><img class="me-2" src="./assets/img/icons/teacher.svg" alt="img">Certificat de compl\xE9tion</p>
              </div>
            </div>

            <!-- Course Features card -->
            <div class="cou-features-card">
              <div class="cou-features">
                <h5 class="subs-title">Caract\xE9ristiques</h5>
                <ul>
                  <li><p class="mb-0"><img class="me-2" src="./assets/img/icons/people2.svg" alt="img">Inscrits : {{ course.enrollmentCount || 0 }}</p></li>
                  <li><p class="mb-0"><img class="me-2" src="./assets/img/icons/note.svg" alt="img">Sections : {{ course.sections?.length || 0 }}</p></li>
                  <li><p class="mb-0"><img class="me-2" src="./assets/img/icons/play3.svg" alt="img">Le\xE7ons : {{ getTotalLessons() }}</p></li>
                  <li><p class="mb-0"><img class="me-2" src="./assets/img/icons/chart.svg" alt="img">Niveau : {{ getLevelLabel(course.level) }}</p></li>
                  <li><p class="mb-0"><i class="fa-solid fa-globe me-2"></i>Langue : {{ course.language || 'Fran\xE7ais' }}</p></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Course detail -->

</ng-container>
` }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: CourseService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CourseDetails2Component, { className: "CourseDetails2Component", filePath: "src/app/features/courses/course-details-2/course-details-2.component.ts", lineNumber: 19 });
})();
export {
  CourseDetails2Component
};
//# sourceMappingURL=chunk-AHYJC2ZM.js.map
