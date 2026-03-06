import {
  CourseService
} from "./chunk-C7JGHRMX.js";
import "./chunk-MFSRU4HL.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-TPKO67I6.js";
import {
  DomSanitizer
} from "./chunk-QFZWCWB7.js";
import "./chunk-PXFMCAI3.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-YBJXKBE2.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
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
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/instructor/instructor-course-detail/instructor-course-detail.component.ts
function InstructorCourseDetailComponent_h4_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 17);
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.course.title, " ");
  }
}
function InstructorCourseDetailComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "i", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.errorMessage, " ");
  }
}
function InstructorCourseDetailComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "div", 22);
    \u0275\u0275elementStart(2, "p", 23);
    \u0275\u0275text(3, "Chargement du cours...");
    \u0275\u0275elementEnd()();
  }
}
function InstructorCourseDetailComponent_div_8_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 78);
    \u0275\u0275element(1, "i", 79);
    \u0275\u0275text(2, "Modification en attente ");
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseDetailComponent_div_8_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275element(1, "i", 81);
    \u0275\u0275text(2, "Mis en avant ");
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseDetailComponent_div_8_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(2, 1, ctx_r0.course.price, "1.2-2"), " \u20AC");
  }
}
function InstructorCourseDetailComponent_div_8_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 82);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 83);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(3, 2, ctx_r0.course.price, "1.2-2"), " \u20AC");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(6, 5, ctx_r0.course.effectivePrice, "1.2-2"), " \u20AC");
  }
}
function InstructorCourseDetailComponent_div_8_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "i", 84);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Publi\xE9 le :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 1, ctx_r0.course.publishedAt, "dd/MM/yyyy"), " ");
  }
}
function InstructorCourseDetailComponent_div_8_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275element(1, "i", 86);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Modification en attente :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Vous avez soumis des modifications pour ce cours. Elles sont en attente de validation par l'administration. Le cours reste visible dans sa version actuelle pour les \xE9tudiants. ");
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseDetailComponent_div_8_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275element(1, "i", 88);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Modification rejet\xE9e :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.course.editRejectionReason, " ");
  }
}
function InstructorCourseDetailComponent_div_8_div_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275element(1, "i", 90);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Cours rejet\xE9 :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.course.rejectionReason, " ");
  }
}
function InstructorCourseDetailComponent_div_8_div_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91)(1, "strong", 92);
    \u0275\u0275text(2, "Objectifs :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 93);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.course.objectives);
  }
}
function InstructorCourseDetailComponent_div_8_div_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong", 92);
    \u0275\u0275text(2, "Pr\xE9requis :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 93);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.course.requirements);
  }
}
function InstructorCourseDetailComponent_div_8_p_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 40);
    \u0275\u0275text(1, "Non sp\xE9cifi\xE9.");
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseDetailComponent_div_8_div_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275element(1, "i", 95);
    \u0275\u0275text(2, " Aucune section ajout\xE9e. ");
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseDetailComponent_div_8_div_102_div_12_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 112);
    \u0275\u0275text(1, "Gratuit");
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseDetailComponent_div_8_div_102_div_12_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 113);
    \u0275\u0275listener("click", function InstructorCourseDetailComponent_div_8_div_102_div_12_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const lesson_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openPreview(lesson_r4.videoUrl, "video"));
    });
    \u0275\u0275element(1, "i", 114);
    \u0275\u0275text(2, "Vid\xE9o ");
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseDetailComponent_div_8_div_102_div_12_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 115);
    \u0275\u0275listener("click", function InstructorCourseDetailComponent_div_8_div_102_div_12_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const lesson_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openPreview(lesson_r4.pdfUrl, "pdf"));
    });
    \u0275\u0275element(1, "i", 116);
    \u0275\u0275text(2, "PDF ");
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseDetailComponent_div_8_div_102_div_12_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 117);
    \u0275\u0275text(1, "Aucun fichier");
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseDetailComponent_div_8_div_102_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105)(1, "div", 36);
    \u0275\u0275element(2, "i", 106);
    \u0275\u0275elementStart(3, "span")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, InstructorCourseDetailComponent_div_8_div_102_div_12_span_7_Template, 2, 0, "span", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 108);
    \u0275\u0275template(9, InstructorCourseDetailComponent_div_8_div_102_div_12_button_9_Template, 3, 0, "button", 109)(10, InstructorCourseDetailComponent_div_8_div_102_div_12_button_10_Template, 3, 0, "button", 110)(11, InstructorCourseDetailComponent_div_8_div_102_div_12_span_11_Template, 2, 0, "span", 111);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lesson_r4 = ctx.$implicit;
    const j_r6 = ctx.index;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", j_r6 + 1, ".");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", lesson_r4.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", lesson_r4.free);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", lesson_r4.videoUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", lesson_r4.pdfUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !lesson_r4.videoUrl && !lesson_r4.pdfUrl);
  }
}
function InstructorCourseDetailComponent_div_8_div_102_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275text(1, " Aucune le\xE7on dans cette section. ");
    \u0275\u0275elementEnd();
  }
}
function InstructorCourseDetailComponent_div_8_div_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96)(1, "h2", 97)(2, "button", 98)(3, "div", 36)(4, "span", 99);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 100);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 101)(11, "div", 102);
    \u0275\u0275template(12, InstructorCourseDetailComponent_div_8_div_102_div_12_Template, 12, 6, "div", 103)(13, InstructorCourseDetailComponent_div_8_div_102_div_13_Template, 2, 0, "div", 104);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const section_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275classProp("collapsed", i_r8 > 0);
    \u0275\u0275attribute("data-bs-target", "#section" + section_r7.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(i_r8 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(section_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (section_r7.lessons == null ? null : section_r7.lessons.length) || 0, " le\xE7on(s)");
    \u0275\u0275advance();
    \u0275\u0275classProp("show", i_r8 === 0);
    \u0275\u0275property("id", "section" + section_r7.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", section_r7.lessons);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(section_r7.lessons == null ? null : section_r7.lessons.length));
  }
}
function InstructorCourseDetailComponent_div_8_span_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275element(3, "i", 119);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r0.course.averageRating, "1.1-1"), " / 5 ");
  }
}
function InstructorCourseDetailComponent_div_8_div_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120);
    \u0275\u0275element(1, "div", 121);
    \u0275\u0275elementStart(2, "span", 122);
    \u0275\u0275text(3, "Chargement des avis...");
    \u0275\u0275elementEnd()();
  }
}
function InstructorCourseDetailComponent_div_8_div_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 123);
    \u0275\u0275element(1, "i", 124);
    \u0275\u0275elementStart(2, "p", 125);
    \u0275\u0275text(3, "Aucun avis pour ce cours.");
    \u0275\u0275elementEnd()();
  }
}
function InstructorCourseDetailComponent_div_8_div_115_i_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 132);
  }
  if (rf & 2) {
    const s_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(s_r9 <= (ctx_r0.course.averageRating || 0) ? "fa fa-star text-warning" : "fa fa-star text-muted opacity-25");
  }
}
function InstructorCourseDetailComponent_div_8_div_115_div_11_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 143);
  }
  if (rf & 2) {
    const review_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r0.getImageUrl(review_r10.studentAvatar), \u0275\u0275sanitizeUrl);
  }
}
function InstructorCourseDetailComponent_div_8_div_115_div_11_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 144);
  }
}
function InstructorCourseDetailComponent_div_8_div_115_div_11_i_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 145);
  }
  if (rf & 2) {
    const s_r11 = ctx.$implicit;
    const review_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(s_r11 <= review_r10.rating ? "fa fa-star text-warning" : "fa fa-star text-muted opacity-25");
  }
}
function InstructorCourseDetailComponent_div_8_div_115_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 133)(1, "div", 134)(2, "div", 135);
    \u0275\u0275template(3, InstructorCourseDetailComponent_div_8_div_115_div_11_img_3_Template, 1, 1, "img", 136)(4, InstructorCourseDetailComponent_div_8_div_115_div_11_i_4_Template, 1, 0, "i", 137);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 138)(6, "div", 139)(7, "strong", 92);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275template(10, InstructorCourseDetailComponent_div_8_div_115_div_11_i_10_Template, 1, 2, "i", 140);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "small", 141);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "p", 142);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const review_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", review_r10.studentAvatar);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !review_r10.studentAvatar);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(review_r10.studentName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.getStarsArray(5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 6, review_r10.createdAt, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(review_r10.comment || "(Aucun commentaire)");
  }
}
function InstructorCourseDetailComponent_div_8_div_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 126)(2, "div", 127)(3, "h2", 128);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 129);
    \u0275\u0275template(7, InstructorCourseDetailComponent_div_8_div_115_i_7_Template, 1, 2, "i", 130);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small", 40);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(10, "hr");
    \u0275\u0275template(11, InstructorCourseDetailComponent_div_8_div_115_div_11_Template, 16, 9, "div", 131);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.course.averageRating ? \u0275\u0275pipeBind2(5, 4, ctx_r0.course.averageRating, "1.1-1") : "-");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.getStarsArray(5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.course.reviewCount, " \xE9valuation(s)");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.reviews);
  }
}
function InstructorCourseDetailComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 24)(2, "div", 25)(3, "div", 26)(4, "div", 27);
    \u0275\u0275element(5, "img", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 29)(7, "div", 30)(8, "h4", 17);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 31);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, InstructorCourseDetailComponent_div_8_span_12_Template, 3, 0, "span", 32)(13, InstructorCourseDetailComponent_div_8_span_13_Template, 3, 0, "span", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 34)(15, "div", 35)(16, "div", 36)(17, "div", 37);
    \u0275\u0275element(18, "i", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div")(20, "div", 39);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "small", 40);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "div", 35)(26, "div", 36)(27, "div", 41);
    \u0275\u0275element(28, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div");
    \u0275\u0275template(30, InstructorCourseDetailComponent_div_8_div_30_Template, 3, 4, "div", 43)(31, InstructorCourseDetailComponent_div_8_div_31_Template, 7, 8, "div", 7);
    \u0275\u0275elementStart(32, "small", 40);
    \u0275\u0275text(33, "Prix");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "div", 35)(35, "div", 36)(36, "div", 44);
    \u0275\u0275element(37, "i", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div")(39, "div", 39);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "small", 40);
    \u0275\u0275text(42, "Dur\xE9e");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(43, "div", 46)(44, "div", 47);
    \u0275\u0275element(45, "i", 48);
    \u0275\u0275elementStart(46, "strong");
    \u0275\u0275text(47, "Niveau :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 47);
    \u0275\u0275element(50, "i", 49);
    \u0275\u0275elementStart(51, "strong");
    \u0275\u0275text(52, "Langue :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 47);
    \u0275\u0275element(55, "i", 50);
    \u0275\u0275elementStart(56, "strong");
    \u0275\u0275text(57, "Cat\xE9gorie :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 47);
    \u0275\u0275element(60, "i", 51);
    \u0275\u0275elementStart(61, "strong");
    \u0275\u0275text(62, "Cr\xE9\xE9 le :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(65, InstructorCourseDetailComponent_div_8_div_65_Template, 6, 4, "div", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "button", 53);
    \u0275\u0275listener("click", function InstructorCourseDetailComponent_div_8_Template_button_click_66_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.editCourse());
    });
    \u0275\u0275element(67, "i", 54);
    \u0275\u0275text(68, "Modifier le cours ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(69, InstructorCourseDetailComponent_div_8_div_69_Template, 5, 0, "div", 55)(70, InstructorCourseDetailComponent_div_8_div_70_Template, 5, 1, "div", 56)(71, InstructorCourseDetailComponent_div_8_div_71_Template, 5, 1, "div", 57);
    \u0275\u0275elementStart(72, "div", 58)(73, "div", 59)(74, "div", 60)(75, "div", 61)(76, "h6", 17);
    \u0275\u0275element(77, "i", 62);
    \u0275\u0275text(78, "Description");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div", 25)(80, "p", 63);
    \u0275\u0275text(81);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(82, "div", 59)(83, "div", 60)(84, "div", 61)(85, "h6", 17);
    \u0275\u0275element(86, "i", 64);
    \u0275\u0275text(87, "Objectifs & Pr\xE9requis");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "div", 25);
    \u0275\u0275template(89, InstructorCourseDetailComponent_div_8_div_89_Template, 5, 1, "div", 65)(90, InstructorCourseDetailComponent_div_8_div_90_Template, 5, 1, "div", 7)(91, InstructorCourseDetailComponent_div_8_p_91_Template, 2, 0, "p", 66);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(92, "div", 24)(93, "div", 67)(94, "h6", 17);
    \u0275\u0275element(95, "i", 68);
    \u0275\u0275text(96, "Contenu du cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "span", 69);
    \u0275\u0275text(98);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "div", 25);
    \u0275\u0275template(100, InstructorCourseDetailComponent_div_8_div_100_Template, 3, 0, "div", 70);
    \u0275\u0275elementStart(101, "div", 71);
    \u0275\u0275template(102, InstructorCourseDetailComponent_div_8_div_102_Template, 14, 11, "div", 72);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(103, "div", 24)(104, "div", 67)(105, "h6", 17);
    \u0275\u0275element(106, "i", 73);
    \u0275\u0275text(107, "Avis & \xC9valuations ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "div", 74);
    \u0275\u0275template(109, InstructorCourseDetailComponent_div_8_span_109_Template, 4, 4, "span", 43);
    \u0275\u0275elementStart(110, "span", 75);
    \u0275\u0275text(111);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(112, "div", 25);
    \u0275\u0275template(113, InstructorCourseDetailComponent_div_8_div_113_Template, 4, 0, "div", 76)(114, InstructorCourseDetailComponent_div_8_div_114_Template, 4, 0, "div", 77)(115, InstructorCourseDetailComponent_div_8_div_115_Template, 12, 7, "div", 7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("src", ctx_r0.getImageUrl(ctx_r0.course.coverImage), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.course.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.getStatusBadgeClass(ctx_r0.course.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getStatusLabel(ctx_r0.course.status), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.course.hasPendingEdit);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.course.featured);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.course.averageRating ? \u0275\u0275pipeBind2(22, 31, ctx_r0.course.averageRating, "1.1-1") : "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.course.reviewCount || 0, " avis");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !ctx_r0.course.onSale);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.course.onSale);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.formatDuration(ctx_r0.course.totalDurationSeconds));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getLevelLabel(ctx_r0.course.level), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.course.language || "-", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.course.categoryName || "-", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(64, 34, ctx_r0.course.createdAt, "dd/MM/yyyy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.course.publishedAt);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.course.hasPendingEdit);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.course.editRejectionReason);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.course.rejectionReason && ctx_r0.course.status === "REJECTED");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.course.description || "Aucune description.");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r0.course.objectives);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.course.requirements);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.course.objectives && !ctx_r0.course.requirements);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", (ctx_r0.course.sections == null ? null : ctx_r0.course.sections.length) || 0, " section(s)");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !(ctx_r0.course.sections == null ? null : ctx_r0.course.sections.length));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.course.sections);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r0.course.averageRating);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.reviews.length, " avis");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.loadingReviews);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingReviews && ctx_r0.reviews.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingReviews && ctx_r0.reviews.length > 0);
  }
}
function InstructorCourseDetailComponent_video_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "video", 146);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.previewUrl, \u0275\u0275sanitizeUrl);
  }
}
function InstructorCourseDetailComponent_iframe_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iframe", 147);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.safePreviewUrl, \u0275\u0275sanitizeResourceUrl);
  }
}
var InstructorCourseDetailComponent = class _InstructorCourseDetailComponent {
  route;
  router;
  courseService;
  sanitizer;
  course = null;
  reviews = [];
  loading = true;
  loadingReviews = true;
  errorMessage = "";
  courseId;
  constructor(route, router, courseService, sanitizer) {
    this.route = route;
    this.router = router;
    this.courseService = courseService;
    this.sanitizer = sanitizer;
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.courseId = +params["courseId"];
      if (this.courseId) {
        this.loadCourse();
        this.loadReviews();
      } else {
        this.errorMessage = "Aucun cours sp\xE9cifi\xE9";
        this.loading = false;
        this.loadingReviews = false;
      }
    });
  }
  loadCourse() {
    this.loading = true;
    this.courseService.getMyCourse(this.courseId).subscribe({
      next: (data) => {
        this.course = data;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = err.error?.message || "Erreur lors du chargement du cours";
        this.loading = false;
      }
    });
  }
  loadReviews() {
    this.loadingReviews = true;
    this.courseService.getInstructorCourseReviews(this.courseId).subscribe({
      next: (data) => {
        this.reviews = data;
        this.loadingReviews = false;
      },
      error: () => {
        this.reviews = [];
        this.loadingReviews = false;
      }
    });
  }
  goBack() {
    this.router.navigate(["/instructor/instructor-course"]);
  }
  editCourse() {
    this.router.navigate(["/courses/add-course"], { queryParams: { id: this.courseId } });
  }
  // ── Prévisualisation médias ──────────────────────────────────
  previewUrl = "";
  previewType = "video";
  openPreview(url, type) {
    this.previewUrl = this.getFileUrl(url);
    this.previewType = type;
    const el = document.getElementById("mediaPreviewModal");
    if (el) {
      new bootstrap.Modal(el).show();
    }
  }
  get safePreviewUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.previewUrl);
  }
  // ── Helpers ──────────────────────────────────────────────────
  getImageUrl(path) {
    if (!path)
      return "assets/img/course/course-01.jpg";
    const clean = path.startsWith("/") ? path : "/" + path;
    return `http://localhost:8081${clean}`;
  }
  getFileUrl(path) {
    if (!path)
      return "#";
    const clean = path.startsWith("/") ? path : "/" + path;
    return `http://localhost:8081${clean}`;
  }
  getStatusBadgeClass(status) {
    switch (status) {
      case "PUBLISHED":
        return "bg-success";
      case "PENDING":
        return "bg-warning text-dark";
      case "DRAFT":
        return "bg-secondary";
      case "REJECTED":
        return "bg-danger";
      case "ARCHIVED":
        return "bg-dark";
      default:
        return "bg-secondary";
    }
  }
  getStatusLabel(status) {
    switch (status) {
      case "PUBLISHED":
        return "Publi\xE9";
      case "PENDING":
        return "En attente";
      case "DRAFT":
        return "Brouillon";
      case "REJECTED":
        return "Rejet\xE9";
      case "ARCHIVED":
        return "Archiv\xE9";
      default:
        return status;
    }
  }
  getLevelLabel(level) {
    switch (level) {
      case "BEGINNER":
        return "D\xE9butant";
      case "INTERMEDIATE":
        return "Interm\xE9diaire";
      case "ADVANCED":
        return "Avanc\xE9";
      default:
        return level;
    }
  }
  formatDuration(totalSeconds) {
    if (!totalSeconds)
      return "0 min";
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor(totalSeconds % 3600 / 60);
    if (hours > 0)
      return `${hours}h ${minutes}min`;
    return `${minutes} min`;
  }
  getStarsArray(rating) {
    return [1, 2, 3, 4, 5];
  }
  static \u0275fac = function InstructorCourseDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorCourseDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(CourseService), \u0275\u0275directiveInject(DomSanitizer));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorCourseDetailComponent, selectors: [["app-instructor-course-detail"]], decls: 20, vars: 9, consts: [[1, "page-content"], [1, "d-flex", "align-items-center", "gap-3", "mb-4"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "fa-solid", "fa-arrow-left", "me-1"], ["class", "mb-0", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], [4, "ngIf"], ["id", "mediaPreviewModal", "tabindex", "-1", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-xl", "modal-dialog-centered"], [1, "modal-content", "bg-dark"], [1, "modal-header", "border-0", "pb-0"], [1, "modal-title", "text-white"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn-close", "btn-close-white"], [1, "modal-body", "p-2"], ["controls", "", "style", "width:100%; max-height:70vh; background:#000;", "class", "rounded", 3, "src", 4, "ngIf"], ["style", "width:100%; height:70vh; border:none;", "class", "rounded", 3, "src", 4, "ngIf"], [1, "mb-0"], [1, "fa-solid", "fa-book", "me-2", "text-primary"], [1, "alert", "alert-danger"], [1, "fa-solid", "fa-exclamation-circle", "me-2"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "mt-2", "text-muted"], [1, "card", "mb-4", "shadow-sm"], [1, "card-body"], [1, "row"], [1, "col-md-4"], ["alt", "cover", 1, "img-fluid", "rounded", "shadow-sm", 2, "width", "100%", "height", "220px", "object-fit", "cover", 3, "src"], [1, "col-md-8"], [1, "d-flex", "align-items-center", "gap-2", "mb-2"], [1, "badge", 3, "ngClass"], ["class", "badge bg-primary", 4, "ngIf"], ["class", "badge bg-warning text-dark", 4, "ngIf"], [1, "row", "g-3", "mb-3"], [1, "col-auto"], [1, "d-flex", "align-items-center", "gap-2"], [1, "bg-warning", "bg-opacity-10", "rounded-circle", "d-flex", "align-items-center", "justify-content-center", 2, "width", "40px", "height", "40px"], [1, "fa-solid", "fa-star", "text-warning"], [1, "fw-bold"], [1, "text-muted"], [1, "bg-primary", "bg-opacity-10", "rounded-circle", "d-flex", "align-items-center", "justify-content-center", 2, "width", "40px", "height", "40px"], [1, "fa-solid", "fa-euro-sign", "text-primary"], ["class", "fw-bold", 4, "ngIf"], [1, "bg-success", "bg-opacity-10", "rounded-circle", "d-flex", "align-items-center", "justify-content-center", 2, "width", "40px", "height", "40px"], [1, "fa-solid", "fa-clock", "text-success"], [1, "row", "small", "text-muted"], [1, "col-6", "col-md-4", "mb-2"], [1, "fa-solid", "fa-signal", "me-1"], [1, "fa-solid", "fa-globe", "me-1"], [1, "fa-solid", "fa-folder", "me-1"], [1, "fa-solid", "fa-calendar", "me-1"], ["class", "col-6 col-md-4 mb-2", 4, "ngIf"], [1, "btn", "btn-outline-primary", "btn-sm", "mt-2", 3, "click"], [1, "fa-solid", "fa-pen", "me-1"], ["class", "alert alert-info mb-4", 4, "ngIf"], ["class", "alert alert-warning mb-4", 4, "ngIf"], ["class", "alert alert-danger mb-4", 4, "ngIf"], [1, "row", "mb-4"], [1, "col-md-6"], [1, "card", "h-100", "shadow-sm"], [1, "card-header", "bg-light"], [1, "fa-solid", "fa-align-left", "me-2"], [1, "text-muted", 2, "white-space", "pre-line"], [1, "fa-solid", "fa-bullseye", "me-2"], ["class", "mb-3", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "card-header", "bg-light", "d-flex", "justify-content-between", "align-items-center"], [1, "fa-solid", "fa-list-ol", "me-2"], [1, "badge", "bg-info"], ["class", "text-muted text-center py-3", 4, "ngIf"], ["id", "courseSectionsAccordion", 1, "accordion"], ["class", "accordion-item", 4, "ngFor", "ngForOf"], [1, "fa-solid", "fa-star", "me-2", "text-warning"], [1, "d-flex", "align-items-center", "gap-3"], [1, "badge", "bg-secondary"], ["class", "text-center py-3", 4, "ngIf"], ["class", "text-center py-4", 4, "ngIf"], [1, "badge", "bg-primary"], [1, "fa-solid", "fa-pen-to-square", "me-1"], [1, "badge", "bg-warning", "text-dark"], [1, "fa-solid", "fa-star", "me-1"], [1, "text-decoration-line-through", "text-muted", "me-1"], [1, "fw-bold", "text-danger"], [1, "fa-solid", "fa-check-circle", "me-1"], [1, "alert", "alert-info", "mb-4"], [1, "fa-solid", "fa-info-circle", "me-2"], [1, "alert", "alert-warning", "mb-4"], [1, "fa-solid", "fa-exclamation-triangle", "me-2"], [1, "alert", "alert-danger", "mb-4"], [1, "fa-solid", "fa-ban", "me-2"], [1, "mb-3"], [1, "small"], [1, "text-muted", "small", "mt-1", 2, "white-space", "pre-line"], [1, "text-muted", "text-center", "py-3"], [1, "fa-solid", "fa-inbox", "fa-2x", "mb-2", "d-block"], [1, "accordion-item"], [1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", 1, "accordion-button"], [1, "badge", "bg-secondary", "rounded-pill"], [1, "badge", "bg-info", "ms-2"], [1, "accordion-collapse", "collapse", 3, "id"], [1, "accordion-body", "p-0"], ["class", "d-flex justify-content-between align-items-center px-3 py-2 border-bottom", 4, "ngFor", "ngForOf"], ["class", "text-muted text-center py-2 small", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center", "px-3", "py-2", "border-bottom"], [1, "fa-solid", "fa-play-circle", "text-primary"], ["class", "badge bg-success", 4, "ngIf"], [1, "d-flex", "gap-2"], ["type", "button", "class", "btn btn-sm btn-outline-success", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-sm btn-outline-info", 3, "click", 4, "ngIf"], ["class", "text-muted small", 4, "ngIf"], [1, "badge", "bg-success"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-success", 3, "click"], [1, "fa-solid", "fa-video", "me-1"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-info", 3, "click"], [1, "fa-solid", "fa-file-pdf", "me-1"], [1, "text-muted", "small"], [1, "text-muted", "text-center", "py-2", "small"], [1, "fa", "fa-star", "text-warning", "ms-1"], [1, "text-center", "py-3"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "text-warning"], [1, "ms-2", "text-muted"], [1, "text-center", "py-4"], [1, "fa-solid", "fa-comment-slash", "fa-2x", "text-muted", "mb-2", "d-block"], [1, "text-muted", "mb-0"], [1, "row", "mb-3"], [1, "col-md-4", "text-center"], [1, "mb-0", "text-warning"], [1, "mb-1"], ["style", "font-size: 16px;", 3, "class", 4, "ngFor", "ngForOf"], ["class", "d-flex gap-3 py-3 border-bottom", 4, "ngFor", "ngForOf"], [2, "font-size", "16px"], [1, "d-flex", "gap-3", "py-3", "border-bottom"], [1, "flex-shrink-0"], [1, "bg-primary", "bg-opacity-10", "rounded-circle", "d-flex", "align-items-center", "justify-content-center", 2, "width", "45px", "height", "45px"], ["class", "rounded-circle", "style", "width:45px; height:45px; object-fit:cover;", "alt", "", 3, "src", 4, "ngIf"], ["class", "fa-solid fa-user text-primary", 4, "ngIf"], [1, "flex-grow-1"], [1, "d-flex", "align-items-center", "gap-2", "mb-1"], ["style", "font-size: 12px;", 3, "class", 4, "ngFor", "ngForOf"], [1, "text-muted", "ms-auto"], [1, "mb-0", "text-muted", "small"], ["alt", "", 1, "rounded-circle", 2, "width", "45px", "height", "45px", "object-fit", "cover", 3, "src"], [1, "fa-solid", "fa-user", "text-primary"], [2, "font-size", "12px"], ["controls", "", 1, "rounded", 2, "width", "100%", "max-height", "70vh", "background", "#000", 3, "src"], [1, "rounded", 2, "width", "100%", "height", "70vh", "border", "none", 3, "src"]], template: function InstructorCourseDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function InstructorCourseDetailComponent_Template_button_click_2_listener() {
        return ctx.goBack();
      });
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275text(4, "Retour ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, InstructorCourseDetailComponent_h4_5_Template, 3, 1, "h4", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, InstructorCourseDetailComponent_div_6_Template, 3, 1, "div", 5)(7, InstructorCourseDetailComponent_div_7_Template, 4, 0, "div", 6)(8, InstructorCourseDetailComponent_div_8_Template, 116, 37, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "h6", 12);
      \u0275\u0275element(14, "i");
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275element(16, "button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 14);
      \u0275\u0275template(18, InstructorCourseDetailComponent_video_18_Template, 1, 1, "video", 15)(19, InstructorCourseDetailComponent_iframe_19_Template, 1, 1, "iframe", 16);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.course);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.course);
      \u0275\u0275advance(6);
      \u0275\u0275classMap(ctx.previewType === "video" ? "fa-solid fa-video me-2" : "fa-solid fa-file-pdf me-2");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.previewType === "video" ? "Pr\xE9visualisation vid\xE9o" : "Pr\xE9visualisation PDF", " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.previewType === "video" && ctx.previewUrl);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.previewType === "pdf" && ctx.previewUrl);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, DatePipe], styles: ["\n\n/*# sourceMappingURL=instructor-course-detail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorCourseDetailComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-course-detail", standalone: true, imports: [CommonModule], template: `<div class="page-content">\r
\r
  <!-- Bouton retour + titre -->\r
  <div class="d-flex align-items-center gap-3 mb-4">\r
    <button class="btn btn-outline-secondary btn-sm" (click)="goBack()">\r
      <i class="fa-solid fa-arrow-left me-1"></i>Retour\r
    </button>\r
    <h4 class="mb-0" *ngIf="course">\r
      <i class="fa-solid fa-book me-2 text-primary"></i>{{ course.title }}\r
    </h4>\r
  </div>\r
\r
  <!-- Erreur -->\r
  <div *ngIf="errorMessage" class="alert alert-danger">\r
    <i class="fa-solid fa-exclamation-circle me-2"></i>{{ errorMessage }}\r
  </div>\r
\r
  <!-- Loading -->\r
  <div *ngIf="loading" class="text-center py-5">\r
    <div class="spinner-border text-primary" role="status"></div>\r
    <p class="mt-2 text-muted">Chargement du cours...</p>\r
  </div>\r
\r
  <!-- Contenu principal -->\r
  <div *ngIf="!loading && course">\r
\r
    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
    <!--  EN-T\xCATE DU COURS                         -->\r
    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
    <div class="card mb-4 shadow-sm">\r
      <div class="card-body">\r
        <div class="row">\r
          <!-- Image de couverture -->\r
          <div class="col-md-4">\r
            <img [src]="getImageUrl(course.coverImage)" class="img-fluid rounded shadow-sm"\r
                 style="width: 100%; height: 220px; object-fit: cover;" alt="cover">\r
          </div>\r
          <!-- Infos principales -->\r
          <div class="col-md-8">\r
            <div class="d-flex align-items-center gap-2 mb-2">\r
              <h4 class="mb-0">{{ course.title }}</h4>\r
              <span class="badge" [ngClass]="getStatusBadgeClass(course.status)">\r
                {{ getStatusLabel(course.status) }}\r
              </span>\r
              <span *ngIf="course.hasPendingEdit" class="badge bg-primary">\r
                <i class="fa-solid fa-pen-to-square me-1"></i>Modification en attente\r
              </span>\r
              <span *ngIf="course.featured" class="badge bg-warning text-dark">\r
                <i class="fa-solid fa-star me-1"></i>Mis en avant\r
              </span>\r
            </div>\r
\r
            <!-- Stats rapides -->\r
            <div class="row g-3 mb-3">\r
              <div class="col-auto">\r
                <div class="d-flex align-items-center gap-2">\r
                  <div class="bg-warning bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center"\r
                       style="width:40px; height:40px;">\r
                    <i class="fa-solid fa-star text-warning"></i>\r
                  </div>\r
                  <div>\r
                    <div class="fw-bold">{{ course.averageRating ? (course.averageRating | number:'1.1-1') : '-' }}</div>\r
                    <small class="text-muted">{{ course.reviewCount || 0 }} avis</small>\r
                  </div>\r
                </div>\r
              </div>\r
              <div class="col-auto">\r
                <div class="d-flex align-items-center gap-2">\r
                  <div class="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center"\r
                       style="width:40px; height:40px;">\r
                    <i class="fa-solid fa-euro-sign text-primary"></i>\r
                  </div>\r
                  <div>\r
                    <div class="fw-bold" *ngIf="!course.onSale">{{ course.price | number:'1.2-2' }} \u20AC</div>\r
                    <div *ngIf="course.onSale">\r
                      <span class="text-decoration-line-through text-muted me-1">{{ course.price | number:'1.2-2' }} \u20AC</span>\r
                      <span class="fw-bold text-danger">{{ course.effectivePrice | number:'1.2-2' }} \u20AC</span>\r
                    </div>\r
                    <small class="text-muted">Prix</small>\r
                  </div>\r
                </div>\r
              </div>\r
              <div class="col-auto">\r
                <div class="d-flex align-items-center gap-2">\r
                  <div class="bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center"\r
                       style="width:40px; height:40px;">\r
                    <i class="fa-solid fa-clock text-success"></i>\r
                  </div>\r
                  <div>\r
                    <div class="fw-bold">{{ formatDuration(course.totalDurationSeconds) }}</div>\r
                    <small class="text-muted">Dur\xE9e</small>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- Infos d\xE9taill\xE9es -->\r
            <div class="row small text-muted">\r
              <div class="col-6 col-md-4 mb-2">\r
                <i class="fa-solid fa-signal me-1"></i><strong>Niveau :</strong> {{ getLevelLabel(course.level) }}\r
              </div>\r
              <div class="col-6 col-md-4 mb-2">\r
                <i class="fa-solid fa-globe me-1"></i><strong>Langue :</strong> {{ course.language || '-' }}\r
              </div>\r
              <div class="col-6 col-md-4 mb-2">\r
                <i class="fa-solid fa-folder me-1"></i><strong>Cat\xE9gorie :</strong> {{ course.categoryName || '-' }}\r
              </div>\r
              <div class="col-6 col-md-4 mb-2">\r
                <i class="fa-solid fa-calendar me-1"></i><strong>Cr\xE9\xE9 le :</strong> {{ course.createdAt | date:'dd/MM/yyyy' }}\r
              </div>\r
              <div class="col-6 col-md-4 mb-2" *ngIf="course.publishedAt">\r
                <i class="fa-solid fa-check-circle me-1"></i><strong>Publi\xE9 le :</strong> {{ course.publishedAt | date:'dd/MM/yyyy' }}\r
              </div>\r
            </div>\r
\r
            <!-- Bouton modifier -->\r
            <button class="btn btn-outline-primary btn-sm mt-2" (click)="editCourse()">\r
              <i class="fa-solid fa-pen me-1"></i>Modifier le cours\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Messages d'alerte -->\r
    <div *ngIf="course.hasPendingEdit" class="alert alert-info mb-4">\r
      <i class="fa-solid fa-info-circle me-2"></i>\r
      <strong>Modification en attente :</strong> Vous avez soumis des modifications pour ce cours. Elles sont en attente de validation par l'administration. Le cours reste visible dans sa version actuelle pour les \xE9tudiants.\r
    </div>\r
\r
    <div *ngIf="course.editRejectionReason" class="alert alert-warning mb-4">\r
      <i class="fa-solid fa-exclamation-triangle me-2"></i>\r
      <strong>Modification rejet\xE9e :</strong> {{ course.editRejectionReason }}\r
    </div>\r
\r
    <div *ngIf="course.rejectionReason && course.status === 'REJECTED'" class="alert alert-danger mb-4">\r
      <i class="fa-solid fa-ban me-2"></i>\r
      <strong>Cours rejet\xE9 :</strong> {{ course.rejectionReason }}\r
    </div>\r
\r
    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
    <!--  DESCRIPTION & OBJECTIFS                  -->\r
    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
    <div class="row mb-4">\r
      <div class="col-md-6">\r
        <div class="card h-100 shadow-sm">\r
          <div class="card-header bg-light">\r
            <h6 class="mb-0"><i class="fa-solid fa-align-left me-2"></i>Description</h6>\r
          </div>\r
          <div class="card-body">\r
            <p class="text-muted" style="white-space: pre-line">{{ course.description || 'Aucune description.' }}</p>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="col-md-6">\r
        <div class="card h-100 shadow-sm">\r
          <div class="card-header bg-light">\r
            <h6 class="mb-0"><i class="fa-solid fa-bullseye me-2"></i>Objectifs & Pr\xE9requis</h6>\r
          </div>\r
          <div class="card-body">\r
            <div *ngIf="course.objectives" class="mb-3">\r
              <strong class="small">Objectifs :</strong>\r
              <p class="text-muted small mt-1" style="white-space: pre-line">{{ course.objectives }}</p>\r
            </div>\r
            <div *ngIf="course.requirements">\r
              <strong class="small">Pr\xE9requis :</strong>\r
              <p class="text-muted small mt-1" style="white-space: pre-line">{{ course.requirements }}</p>\r
            </div>\r
            <p *ngIf="!course.objectives && !course.requirements" class="text-muted">Non sp\xE9cifi\xE9.</p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
    <!--  CONTENU DU COURS (SECTIONS / LE\xC7ONS)     -->\r
    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
    <div class="card mb-4 shadow-sm">\r
      <div class="card-header bg-light d-flex justify-content-between align-items-center">\r
        <h6 class="mb-0"><i class="fa-solid fa-list-ol me-2"></i>Contenu du cours</h6>\r
        <span class="badge bg-info">{{ course.sections?.length || 0 }} section(s)</span>\r
      </div>\r
      <div class="card-body">\r
        <div *ngIf="!course.sections?.length" class="text-muted text-center py-3">\r
          <i class="fa-solid fa-inbox fa-2x mb-2 d-block"></i>\r
          Aucune section ajout\xE9e.\r
        </div>\r
\r
        <div class="accordion" id="courseSectionsAccordion">\r
          <div class="accordion-item" *ngFor="let section of course.sections; let i = index">\r
            <h2 class="accordion-header">\r
              <button class="accordion-button" [class.collapsed]="i > 0" type="button"\r
                      data-bs-toggle="collapse" [attr.data-bs-target]="'#section' + section.id">\r
                <div class="d-flex align-items-center gap-2">\r
                  <span class="badge bg-secondary rounded-pill">{{ i + 1 }}</span>\r
                  <strong>{{ section.title }}</strong>\r
                  <span class="badge bg-info ms-2">{{ section.lessons?.length || 0 }} le\xE7on(s)</span>\r
                </div>\r
              </button>\r
            </h2>\r
            <div [id]="'section' + section.id" class="accordion-collapse collapse" [class.show]="i === 0">\r
              <div class="accordion-body p-0">\r
                <div *ngFor="let lesson of section.lessons; let j = index"\r
                     class="d-flex justify-content-between align-items-center px-3 py-2 border-bottom">\r
                  <div class="d-flex align-items-center gap-2">\r
                    <i class="fa-solid fa-play-circle text-primary"></i>\r
                    <span><strong>{{ j + 1 }}.</strong> {{ lesson.title }}</span>\r
                    <span *ngIf="lesson.free" class="badge bg-success">Gratuit</span>\r
                  </div>\r
                  <div class="d-flex gap-2">\r
                    <button *ngIf="lesson.videoUrl" type="button"\r
                            (click)="openPreview(lesson.videoUrl, 'video')"\r
                            class="btn btn-sm btn-outline-success">\r
                      <i class="fa-solid fa-video me-1"></i>Vid\xE9o\r
                    </button>\r
                    <button *ngIf="lesson.pdfUrl" type="button"\r
                            (click)="openPreview(lesson.pdfUrl, 'pdf')"\r
                            class="btn btn-sm btn-outline-info">\r
                      <i class="fa-solid fa-file-pdf me-1"></i>PDF\r
                    </button>\r
                    <span *ngIf="!lesson.videoUrl && !lesson.pdfUrl" class="text-muted small">Aucun fichier</span>\r
                  </div>\r
                </div>\r
                <div *ngIf="!section.lessons?.length" class="text-muted text-center py-2 small">\r
                  Aucune le\xE7on dans cette section.\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
    <!--  AVIS & \xC9VALUATIONS                       -->\r
    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
    <div class="card mb-4 shadow-sm">\r
      <div class="card-header bg-light d-flex justify-content-between align-items-center">\r
        <h6 class="mb-0">\r
          <i class="fa-solid fa-star me-2 text-warning"></i>Avis & \xC9valuations\r
        </h6>\r
        <div class="d-flex align-items-center gap-3">\r
          <span *ngIf="course.averageRating" class="fw-bold">\r
            {{ course.averageRating | number:'1.1-1' }} / 5\r
            <i class="fa fa-star text-warning ms-1"></i>\r
          </span>\r
          <span class="badge bg-secondary">{{ reviews.length }} avis</span>\r
        </div>\r
      </div>\r
      <div class="card-body">\r
        <!-- Loading reviews -->\r
        <div *ngIf="loadingReviews" class="text-center py-3">\r
          <div class="spinner-border spinner-border-sm text-warning" role="status"></div>\r
          <span class="ms-2 text-muted">Chargement des avis...</span>\r
        </div>\r
\r
        <!-- Aucun avis -->\r
        <div *ngIf="!loadingReviews && reviews.length === 0" class="text-center py-4">\r
          <i class="fa-solid fa-comment-slash fa-2x text-muted mb-2 d-block"></i>\r
          <p class="text-muted mb-0">Aucun avis pour ce cours.</p>\r
        </div>\r
\r
        <!-- Liste des avis -->\r
        <div *ngIf="!loadingReviews && reviews.length > 0">\r
          <!-- R\xE9sum\xE9 des notes -->\r
          <div class="row mb-3">\r
            <div class="col-md-4 text-center">\r
              <h2 class="mb-0 text-warning">{{ course.averageRating ? (course.averageRating | number:'1.1-1') : '-' }}</h2>\r
              <div class="mb-1">\r
                <i *ngFor="let s of getStarsArray(5)"\r
                   [class]="s <= (course.averageRating || 0) ? 'fa fa-star text-warning' : 'fa fa-star text-muted opacity-25'"\r
                   style="font-size: 16px;"></i>\r
              </div>\r
              <small class="text-muted">{{ course.reviewCount }} \xE9valuation(s)</small>\r
            </div>\r
          </div>\r
\r
          <hr>\r
\r
          <!-- Avis individuels -->\r
          <div *ngFor="let review of reviews" class="d-flex gap-3 py-3 border-bottom">\r
            <!-- Avatar -->\r
            <div class="flex-shrink-0">\r
              <div class="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center"\r
                   style="width: 45px; height: 45px;">\r
                <img *ngIf="review.studentAvatar" [src]="getImageUrl(review.studentAvatar)"\r
                     class="rounded-circle" style="width:45px; height:45px; object-fit:cover;" alt="">\r
                <i *ngIf="!review.studentAvatar" class="fa-solid fa-user text-primary"></i>\r
              </div>\r
            </div>\r
            <!-- Contenu -->\r
            <div class="flex-grow-1">\r
              <div class="d-flex align-items-center gap-2 mb-1">\r
                <strong class="small">{{ review.studentName }}</strong>\r
                <span>\r
                  <i *ngFor="let s of getStarsArray(5)"\r
                     [class]="s <= review.rating ? 'fa fa-star text-warning' : 'fa fa-star text-muted opacity-25'"\r
                     style="font-size: 12px;"></i>\r
                </span>\r
                <small class="text-muted ms-auto">{{ review.createdAt | date:'dd/MM/yyyy' }}</small>\r
              </div>\r
              <p class="mb-0 text-muted small">{{ review.comment || '(Aucun commentaire)' }}</p>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
  </div>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<!--  MODAL PR\xC9VISUALISATION M\xC9DIA                          -->\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="modal fade" id="mediaPreviewModal" tabindex="-1" aria-hidden="true">\r
  <div class="modal-dialog modal-xl modal-dialog-centered">\r
    <div class="modal-content bg-dark">\r
      <div class="modal-header border-0 pb-0">\r
        <h6 class="modal-title text-white">\r
          <i [class]="previewType === 'video' ? 'fa-solid fa-video me-2' : 'fa-solid fa-file-pdf me-2'"></i>\r
          {{ previewType === 'video' ? 'Pr\xE9visualisation vid\xE9o' : 'Pr\xE9visualisation PDF' }}\r
        </h6>\r
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>\r
      </div>\r
      <div class="modal-body p-2">\r
        <!-- Vid\xE9o -->\r
        <video *ngIf="previewType === 'video' && previewUrl"\r
               [src]="previewUrl" controls\r
               style="width:100%; max-height:70vh; background:#000;"\r
               class="rounded">\r
        </video>\r
        <!-- PDF -->\r
        <iframe *ngIf="previewType === 'pdf' && previewUrl"\r
                [src]="safePreviewUrl"\r
                style="width:100%; height:70vh; border:none;"\r
                class="rounded">\r
        </iframe>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/instructor/instructor-course-detail/instructor-course-detail.component.scss */\n/*# sourceMappingURL=instructor-course-detail.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: CourseService }, { type: DomSanitizer }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorCourseDetailComponent, { className: "InstructorCourseDetailComponent", filePath: "src/app/features/instructor/instructor-course-detail/instructor-course-detail.component.ts", lineNumber: 16 });
})();
export {
  InstructorCourseDetailComponent
};
//# sourceMappingURL=chunk-TZ32M3VY.js.map
