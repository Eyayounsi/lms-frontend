import {
  CourseService
} from "./chunk-C7JGHRMX.js";
import "./chunk-MFSRU4HL.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-VF2E3YWR.js";
import {
  RouterModule
} from "./chunk-TPKO67I6.js";
import "./chunk-QFZWCWB7.js";
import "./chunk-PXFMCAI3.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf,
  SlicePipe
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
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

// src/app/features/instructor/instructor-my-courses/instructor-my-courses.component.ts
function InstructorMyCoursesComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "i", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 12);
    \u0275\u0275listener("click", function InstructorMyCoursesComponent_div_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.successMessage = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.successMessage, " ");
  }
}
function InstructorMyCoursesComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "i", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 12);
    \u0275\u0275listener("click", function InstructorMyCoursesComponent_div_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.errorMessage = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.errorMessage, " ");
  }
}
function InstructorMyCoursesComponent_div_8_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 35);
  }
}
function InstructorMyCoursesComponent_div_8_i_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 36);
  }
}
function InstructorMyCoursesComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "h5", 3);
    \u0275\u0275element(3, "i", 17);
    \u0275\u0275text(4, "Cr\xE9er un nouveau cours");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 18)(6, "div", 19)(7, "div", 20)(8, "label", 21);
    \u0275\u0275text(9, "Titre du cours *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorMyCoursesComponent_div_8_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourse.title, $event) || (ctx_r1.newCourse.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 23)(12, "label", 21);
    \u0275\u0275text(13, "Niveau");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "select", 24);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorMyCoursesComponent_div_8_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourse.level, $event) || (ctx_r1.newCourse.level = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(15, "option", 25);
    \u0275\u0275text(16, "D\xE9butant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 26);
    \u0275\u0275text(18, "Interm\xE9diaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 27);
    \u0275\u0275text(20, "Avanc\xE9");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 28)(22, "label", 21);
    \u0275\u0275text(23, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "textarea", 29);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorMyCoursesComponent_div_8_Template_textarea_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourse.description, $event) || (ctx_r1.newCourse.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 23)(26, "label", 21);
    \u0275\u0275text(27, "Prix (\u20AC)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorMyCoursesComponent_div_8_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newCourse.price, $event) || (ctx_r1.newCourse.price = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 31)(30, "button", 32);
    \u0275\u0275listener("click", function InstructorMyCoursesComponent_div_8_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createCourse());
    });
    \u0275\u0275template(31, InstructorMyCoursesComponent_div_8_span_31_Template, 1, 0, "span", 33)(32, InstructorMyCoursesComponent_div_8_i_32_Template, 1, 0, "i", 34);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCourse.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCourse.level);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCourse.description);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCourse.price);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.creating || !ctx_r1.newCourse.title.trim());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.creating);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.creating);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.creating ? "Cr\xE9ation..." : "Cr\xE9er le cours", " ");
  }
}
function InstructorMyCoursesComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "span", 39);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 40);
    \u0275\u0275text(5, "Chargement de vos cours...");
    \u0275\u0275elementEnd()();
  }
}
function InstructorMyCoursesComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275element(1, "i", 41);
    \u0275\u0275elementStart(2, "h5", 42);
    \u0275\u0275text(3, "Vous n'avez pas encore de cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 42);
    \u0275\u0275text(5, 'Cliquez sur "Nouveau Cours" pour commencer');
    \u0275\u0275elementEnd()();
  }
}
function InstructorMyCoursesComponent_div_11_div_1_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275element(1, "i", 65);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const course_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", course_r6.rejectionReason, " ");
  }
}
function InstructorMyCoursesComponent_div_11_div_1_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275listener("click", function InstructorMyCoursesComponent_div_11_div_1_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const course_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteCourse(course_r6));
    });
    \u0275\u0275element(1, "i", 67);
    \u0275\u0275elementEnd();
  }
}
function InstructorMyCoursesComponent_div_11_div_1_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 68);
    \u0275\u0275listener("click", function InstructorMyCoursesComponent_div_11_div_1_button_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const course_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.archiveCourse(course_r6));
    });
    \u0275\u0275element(1, "i", 69);
    \u0275\u0275elementEnd();
  }
}
function InstructorMyCoursesComponent_div_11_div_1_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70)(1, "button", 71);
    \u0275\u0275listener("click", function InstructorMyCoursesComponent_div_11_div_1_div_28_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const course_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submitForReview(course_r6));
    });
    \u0275\u0275element(2, "i", 72);
    \u0275\u0275text(3, "Publier \xE0 l'admin ");
    \u0275\u0275elementEnd()();
  }
}
function InstructorMyCoursesComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46)(2, "div", 47);
    \u0275\u0275element(3, "img", 48);
    \u0275\u0275elementStart(4, "span", 49);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 50)(7, "h6", 51);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 52);
    \u0275\u0275element(10, "i", 53);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 54);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 55)(16, "span", 56);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "small", 42);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, InstructorMyCoursesComponent_div_11_div_1_div_22_Template, 3, 1, "div", 57);
    \u0275\u0275elementStart(23, "div", 58)(24, "button", 59);
    \u0275\u0275listener("click", function InstructorMyCoursesComponent_div_11_div_1_Template_button_click_24_listener() {
      const course_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDetail(course_r6));
    });
    \u0275\u0275element(25, "i", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, InstructorMyCoursesComponent_div_11_div_1_button_26_Template, 2, 0, "button", 61)(27, InstructorMyCoursesComponent_div_11_div_1_button_27_Template, 2, 0, "button", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, InstructorMyCoursesComponent_div_11_div_1_div_28_Template, 4, 0, "div", 63);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const course_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("alt", \u0275\u0275interpolate(course_r6.title))("src", ctx_r1.getImageUrl(course_r6.coverImage), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getStatusBadgeClass(course_r6.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusLabel(course_r6.status), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(course_r6.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.getLevelLabel(course_r6.level), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (course_r6.description == null ? null : course_r6.description.length) > 80 ? \u0275\u0275pipeBind3(14, 14, course_r6.description, 0, 80) + "..." : course_r6.description, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(18, 18, course_r6.price, "1.2-2"), " \u20AC");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 21, course_r6.createdAt, "dd/MM/yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", course_r6.status === "REJECTED" && course_r6.rejectionReason);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", course_r6.status === "DRAFT");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", course_r6.status === "PUBLISHED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", course_r6.status === "DRAFT" || course_r6.status === "REJECTED");
  }
}
function InstructorMyCoursesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275template(1, InstructorMyCoursesComponent_div_11_div_1_Template, 29, 24, "div", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.courses);
  }
}
function InstructorMyCoursesComponent_div_12_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 86);
    \u0275\u0275text(1, " Nouveau cours ");
    \u0275\u0275elementEnd();
  }
}
function InstructorMyCoursesComponent_div_12_div_9_div_1_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275element(1, "i", 106);
    \u0275\u0275text(2, " Toute modification soumettra ce cours \xE0 une ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "nouvelle validation admin");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " avant d'\xEAtre remis en ligne. ");
    \u0275\u0275elementEnd();
  }
}
function InstructorMyCoursesComponent_div_12_div_9_div_1_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 107);
    \u0275\u0275listener("click", function InstructorMyCoursesComponent_div_12_div_9_div_1_button_30_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.startEdit());
    });
    \u0275\u0275element(1, "i", 108);
    \u0275\u0275text(2, "Modifier ");
    \u0275\u0275elementEnd();
  }
}
function InstructorMyCoursesComponent_div_12_div_9_div_1_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109);
    \u0275\u0275element(1, "i", 110);
    \u0275\u0275elementStart(2, "div")(3, "strong");
    \u0275\u0275text(4, "Prochaines \xE9tapes pour compl\xE9ter votre cours :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ol", 111)(6, "li");
    \u0275\u0275text(7, "Ajoutez une ou plusieurs ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9, "sections");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " (chapitres) ci-dessous");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "li");
    \u0275\u0275text(12, "Dans chaque section, ajoutez des ");
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14, "le\xE7ons");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "li");
    \u0275\u0275text(16, "Uploadez des ");
    \u0275\u0275elementStart(17, "strong");
    \u0275\u0275text(18, "vid\xE9os");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " et/ou ");
    \u0275\u0275elementStart(20, "strong");
    \u0275\u0275text(21, "PDF");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " pour chaque le\xE7on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "li");
    \u0275\u0275text(24, "Quand tout est pr\xEAt, cliquez ");
    \u0275\u0275elementStart(25, "strong");
    \u0275\u0275text(26, `"Publier \xE0 l'admin"`);
    \u0275\u0275elementEnd()()()()();
  }
}
function InstructorMyCoursesComponent_div_12_div_9_div_1_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 112);
    \u0275\u0275listener("click", function InstructorMyCoursesComponent_div_12_div_9_div_1_button_37_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleAddSection(ctx_r1.selectedCourse.id));
    });
    \u0275\u0275element(1, "i", 113);
    \u0275\u0275text(2, "Ajouter une section ");
    \u0275\u0275elementEnd();
  }
}
function InstructorMyCoursesComponent_div_12_div_9_div_1_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 114)(1, "div", 115)(2, "input", 116);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorMyCoursesComponent_div_12_div_9_div_1_div_38_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.newSectionTitle, $event) || (ctx_r1.newSectionTitle = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 32);
    \u0275\u0275listener("click", function InstructorMyCoursesComponent_div_12_div_9_div_1_div_38_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.addSection(ctx_r1.selectedCourse.id));
    });
    \u0275\u0275element(4, "i", 117);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 118);
    \u0275\u0275listener("click", function InstructorMyCoursesComponent_div_12_div_9_div_1_div_38_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleAddSection(ctx_r1.selectedCourse.id));
    });
    \u0275\u0275element(6, "i", 119);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newSectionTitle);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.newSectionTitle.trim());
  }
}
function InstructorMyCoursesComponent_div_12_div_9_div_1_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120);
    \u0275\u0275text(1, " Aucune section. Ajoutez-en une pour commencer. ");
    \u0275\u0275elementEnd();
  }
}
function InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 142);
  }
}
function InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 143);
  }
}
function InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_i_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 144);
  }
}
function InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 145);
    \u0275\u0275text(1, "Vid\xE9o");
    \u0275\u0275elementEnd();
  }
}
function InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 124);
    \u0275\u0275text(1, "PDF");
    \u0275\u0275elementEnd();
  }
}
function InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 146);
    \u0275\u0275text(1, "Article");
    \u0275\u0275elementEnd();
  }
}
function InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_div_17_label_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 149);
    \u0275\u0275element(1, "i", 150);
    \u0275\u0275elementStart(2, "input", 151);
    \u0275\u0275listener("change", function InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_div_17_label_1_Template_input_change_2_listener($event) {
      \u0275\u0275restoreView(_r17);
      const lesson_r16 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.onVideoUpload($event, lesson_r16.id));
    });
    \u0275\u0275elementEnd()();
  }
}
function InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_div_17_label_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 152);
    \u0275\u0275element(1, "i", 153);
    \u0275\u0275elementStart(2, "input", 154);
    \u0275\u0275listener("change", function InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_div_17_label_2_Template_input_change_2_listener($event) {
      \u0275\u0275restoreView(_r18);
      const lesson_r16 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.onPdfUpload($event, lesson_r16.id));
    });
    \u0275\u0275elementEnd()();
  }
}
function InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 137);
    \u0275\u0275template(1, InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_div_17_label_1_Template, 3, 0, "label", 147)(2, InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_div_17_label_2_Template, 3, 0, "label", 148);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lesson_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", lesson_r16.lessonType === "VIDEO" || !lesson_r16.lessonType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", lesson_r16.lessonType === "PDF");
  }
}
function InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_div_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 157);
    \u0275\u0275element(1, "div", 158);
    \u0275\u0275elementEnd();
  }
}
function InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_div_18_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 163);
    \u0275\u0275text(1, "Aucune ressource.");
    \u0275\u0275elementEnd();
  }
}
function InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_div_18_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 164)(1, "a", 165);
    \u0275\u0275element(2, "i", 166);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 167);
    \u0275\u0275listener("click", function InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_div_18_div_2_div_2_Template_button_click_4_listener() {
      const res_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const lesson_r16 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.deleteResource(res_r20.id, lesson_r16.id));
    });
    \u0275\u0275element(5, "i", 168);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const res_r20 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("href", res_r20.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", res_r20.title, " ");
  }
}
function InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_div_18_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 169)(1, "div", 170)(2, "input", 171);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_div_18_div_2_div_3_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r21);
      const lesson_r16 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r1.newResourceForm[lesson_r16.id].title, $event) || (ctx_r1.newResourceForm[lesson_r16.id].title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 170)(4, "input", 172);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_div_18_div_2_div_3_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r21);
      const lesson_r16 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r1.newResourceForm[lesson_r16.id].url, $event) || (ctx_r1.newResourceForm[lesson_r16.id].url = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 173)(6, "button", 174);
    \u0275\u0275listener("click", function InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_div_18_div_2_div_3_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r21);
      const lesson_r16 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.addResource(lesson_r16.id));
    });
    \u0275\u0275element(7, "i", 117);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 175);
    \u0275\u0275listener("click", function InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_div_18_div_2_div_3_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r21);
      const lesson_r16 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.toggleAddResource(lesson_r16.id));
    });
    \u0275\u0275element(9, "i", 119);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const lesson_r16 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newResourceForm[lesson_r16.id].title);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newResourceForm[lesson_r16.id].url);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !(ctx_r1.newResourceForm[lesson_r16.id] == null ? null : ctx_r1.newResourceForm[lesson_r16.id].title == null ? null : ctx_r1.newResourceForm[lesson_r16.id].title.trim()) || !(ctx_r1.newResourceForm[lesson_r16.id] == null ? null : ctx_r1.newResourceForm[lesson_r16.id].url == null ? null : ctx_r1.newResourceForm[lesson_r16.id].url.trim()));
  }
}
function InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_div_18_div_2_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 176);
    \u0275\u0275listener("click", function InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_div_18_div_2_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const lesson_r16 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.toggleAddResource(lesson_r16.id));
    });
    \u0275\u0275element(1, "i", 113);
    \u0275\u0275text(2, "Ajouter une ressource ");
    \u0275\u0275elementEnd();
  }
}
function InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_div_18_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_div_18_div_2_div_1_Template, 2, 0, "div", 159)(2, InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_div_18_div_2_div_2_Template, 6, 2, "div", 160)(3, InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_div_18_div_2_div_3_Template, 10, 3, "div", 161)(4, InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_div_18_div_2_button_4_Template, 3, 0, "button", 162);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lesson_r16 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.lessonResources[lesson_r16.id] == null ? null : ctx_r1.lessonResources[lesson_r16.id].length) === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.lessonResources[lesson_r16.id]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.addingResourceTo === lesson_r16.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.addingResourceTo !== lesson_r16.id);
  }
}
function InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 155);
    \u0275\u0275template(1, InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_div_18_div_1_Template, 2, 0, "div", 156)(2, InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_div_18_div_2_Template, 5, 4, "div", 88);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lesson_r16 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingResourcesMap[lesson_r16.id]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingResourcesMap[lesson_r16.id]);
  }
}
function InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 128)(1, "div", 129)(2, "div");
    \u0275\u0275template(3, InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_i_3_Template, 1, 0, "i", 130)(4, InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_i_4_Template, 1, 0, "i", 131)(5, InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_i_5_Template, 1, 0, "i", 132);
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementStart(9, "span", 133);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_span_11_Template, 2, 0, "span", 134)(12, InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_span_12_Template, 2, 0, "span", 135)(13, InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_span_13_Template, 2, 0, "span", 136);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 137)(15, "button", 138);
    \u0275\u0275listener("click", function InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_Template_button_click_15_listener() {
      const lesson_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.toggleLessonResources(lesson_r16.id));
    });
    \u0275\u0275element(16, "i", 139);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_div_17_Template, 3, 2, "div", 140);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_div_18_Template, 3, 2, "div", 141);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lesson_r16 = ctx.$implicit;
    const j_r23 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", lesson_r16.lessonType === "VIDEO" || !lesson_r16.lessonType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", lesson_r16.lessonType === "TEXT");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", lesson_r16.lessonType === "PDF");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", j_r23 + 1, ".");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", lesson_r16.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lesson_r16.lessonType || "VIDEO");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", lesson_r16.videoUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", lesson_r16.pdfUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", lesson_r16.articleContent);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.selectedCourse.status === "DRAFT" || ctx_r1.selectedCourse.status === "REJECTED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.expandedResourceLessonId === lesson_r16.id);
  }
}
function InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 179)(1, "div", 180)(2, "div", 170)(3, "label", 181);
    \u0275\u0275text(4, "Titre de la le\xE7on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 182);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_11_div_1_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(6);
      \u0275\u0275twoWayBindingSet(ctx_r1.newLessonTitle, $event) || (ctx_r1.newLessonTitle = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 183)(7, "label", 181);
    \u0275\u0275text(8, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "select", 184);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_11_div_1_Template_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(6);
      \u0275\u0275twoWayBindingSet(ctx_r1.newLessonType, $event) || (ctx_r1.newLessonType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(10, "option", 185);
    \u0275\u0275text(11, "Vid\xE9o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 186);
    \u0275\u0275text(13, "Texte / Article");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 187);
    \u0275\u0275text(15, "PDF");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 188)(17, "button", 189);
    \u0275\u0275listener("click", function InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_11_div_1_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r24);
      const section_r25 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.addLesson(section_r25.id));
    });
    \u0275\u0275element(18, "i", 190);
    \u0275\u0275text(19, "Ajouter ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 191);
    \u0275\u0275listener("click", function InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_11_div_1_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r24);
      const section_r25 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleAddLesson(section_r25.id));
    });
    \u0275\u0275element(21, "i", 119);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newLessonTitle);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newLessonType);
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", !ctx_r1.newLessonTitle.trim());
  }
}
function InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_11_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 192);
    \u0275\u0275listener("click", function InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_11_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r26);
      const section_r25 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleAddLesson(section_r25.id));
    });
    \u0275\u0275element(1, "i", 113);
    \u0275\u0275text(2, "Ajouter une le\xE7on ");
    \u0275\u0275elementEnd();
  }
}
function InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275template(1, InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_11_div_1_Template, 22, 3, "div", 177)(2, InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_11_button_2_Template, 3, 0, "button", 178);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r25 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.addingLessonToSectionId === section_r25.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.addingLessonToSectionId !== section_r25.id);
  }
}
function InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121)(1, "h2", 122)(2, "button", 123)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "span", 124);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 125)(9, "div", 126);
    \u0275\u0275template(10, InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_10_Template, 19, 11, "div", 127)(11, InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_div_11_Template, 3, 2, "div", 63);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const section_r25 = ctx.$implicit;
    const i_r27 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("collapsed", i_r27 > 0);
    \u0275\u0275attribute("data-bs-target", "#section" + section_r25.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Section ", i_r27 + 1, ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xA0", section_r25.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (section_r25.lessons == null ? null : section_r25.lessons.length) || 0, " le\xE7on(s)");
    \u0275\u0275advance();
    \u0275\u0275classProp("show", i_r27 === 0);
    \u0275\u0275property("id", "section" + section_r25.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", section_r25.lessons);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCourse.status === "DRAFT" || ctx_r1.selectedCourse.status === "REJECTED");
  }
}
function InstructorMyCoursesComponent_div_12_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 89)(2, "div", 23);
    \u0275\u0275element(3, "img", 90);
    \u0275\u0275elementStart(4, "div", 70)(5, "label", 91);
    \u0275\u0275element(6, "i", 92);
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "input", 93);
    \u0275\u0275listener("change", function InstructorMyCoursesComponent_div_12_div_9_div_1_Template_input_change_8_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onCoverUpload($event, ctx_r1.selectedCourse.id));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "div", 20)(10, "p")(11, "strong");
    \u0275\u0275text(12, "Statut:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 94);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "p")(16, "strong");
    \u0275\u0275text(17, "Niveau:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p")(20, "strong");
    \u0275\u0275text(21, "Prix:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p")(25, "strong");
    \u0275\u0275text(26, "Description:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "p", 42);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, InstructorMyCoursesComponent_div_12_div_9_div_1_div_29_Template, 6, 0, "div", 95)(30, InstructorMyCoursesComponent_div_12_div_9_div_1_button_30_Template, 3, 0, "button", 96);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(31, "hr");
    \u0275\u0275template(32, InstructorMyCoursesComponent_div_12_div_9_div_1_div_32_Template, 27, 0, "div", 97);
    \u0275\u0275elementStart(33, "div", 98)(34, "h6", 3);
    \u0275\u0275element(35, "i", 99);
    \u0275\u0275text(36, "Sections & Le\xE7ons");
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, InstructorMyCoursesComponent_div_12_div_9_div_1_button_37_Template, 3, 0, "button", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, InstructorMyCoursesComponent_div_12_div_9_div_1_div_38_Template, 7, 2, "div", 101)(39, InstructorMyCoursesComponent_div_12_div_9_div_1_div_39_Template, 2, 0, "div", 102);
    \u0275\u0275elementStart(40, "div", 103);
    \u0275\u0275template(41, InstructorMyCoursesComponent_div_12_div_9_div_1_div_41_Template, 12, 11, "div", 104);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r1.getImageUrl(ctx_r1.selectedCourse.coverImage), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.uploadingCover ? "Upload..." : "Changer la couverture", " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", ctx_r1.getStatusBadgeClass(ctx_r1.selectedCourse.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusLabel(ctx_r1.selectedCourse.status), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getLevelLabel(ctx_r1.selectedCourse.level));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(23, 14, ctx_r1.selectedCourse.price, "1.2-2"), " \u20AC");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.selectedCourse.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCourse.status === "PUBLISHED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedCourse.status === "DRAFT" || ctx_r1.selectedCourse.status === "REJECTED" || ctx_r1.selectedCourse.status === "PUBLISHED");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedCourse.status === "DRAFT" && !(ctx_r1.selectedCourse.sections == null ? null : ctx_r1.selectedCourse.sections.length));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.selectedCourse.status === "DRAFT" || ctx_r1.selectedCourse.status === "REJECTED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.addingSectionToCourseId === ctx_r1.selectedCourse.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.selectedCourse.sections == null ? null : ctx_r1.selectedCourse.sections.length) === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.selectedCourse.sections);
  }
}
function InstructorMyCoursesComponent_div_12_div_9_div_2_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 199);
    \u0275\u0275element(1, "i", 106);
    \u0275\u0275text(2, "Ce cours sera soumis \xE0 une nouvelle approbation. ");
    \u0275\u0275elementEnd();
  }
}
function InstructorMyCoursesComponent_div_12_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 19)(2, "div", 20)(3, "label", 21);
    \u0275\u0275text(4, "Titre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 193);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorMyCoursesComponent_div_12_div_9_div_2_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.editCourse.title, $event) || (ctx_r1.editCourse.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 23)(7, "label", 21);
    \u0275\u0275text(8, "Niveau");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "select", 24);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorMyCoursesComponent_div_12_div_9_div_2_Template_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.editCourse.level, $event) || (ctx_r1.editCourse.level = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(10, "option", 25);
    \u0275\u0275text(11, "D\xE9butant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 26);
    \u0275\u0275text(13, "Interm\xE9diaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 27);
    \u0275\u0275text(15, "Avanc\xE9");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 28)(17, "label", 21);
    \u0275\u0275text(18, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "textarea", 194);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorMyCoursesComponent_div_12_div_9_div_2_Template_textarea_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.editCourse.description, $event) || (ctx_r1.editCourse.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 23)(21, "label", 21);
    \u0275\u0275text(22, "Prix (\u20AC)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 195);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorMyCoursesComponent_div_12_div_9_div_2_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.editCourse.price, $event) || (ctx_r1.editCourse.price = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 31)(25, "button", 196);
    \u0275\u0275listener("click", function InstructorMyCoursesComponent_div_12_div_9_div_2_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editMode = false);
    });
    \u0275\u0275text(26, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, InstructorMyCoursesComponent_div_12_div_9_div_2_div_27_Template, 3, 0, "div", 197);
    \u0275\u0275elementStart(28, "button", 198);
    \u0275\u0275listener("click", function InstructorMyCoursesComponent_div_12_div_9_div_2_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveEdit());
    });
    \u0275\u0275element(29, "i", 190);
    \u0275\u0275text(30, "Enregistrer ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editCourse.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editCourse.level);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editCourse.description);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editCourse.price);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", (ctx_r1.selectedCourse == null ? null : ctx_r1.selectedCourse.status) === "PUBLISHED");
  }
}
function InstructorMyCoursesComponent_div_12_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275template(1, InstructorMyCoursesComponent_div_12_div_9_div_1_Template, 42, 17, "div", 88)(2, InstructorMyCoursesComponent_div_12_div_9_div_2_Template, 31, 5, "div", 88);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.editMode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.editMode);
  }
}
function InstructorMyCoursesComponent_div_12_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 200);
    \u0275\u0275listener("click", function InstructorMyCoursesComponent_div_12_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.submitForReview(ctx_r1.selectedCourse);
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275element(1, "i", 72);
    \u0275\u0275text(2, "Publier \xE0 l'admin ");
    \u0275\u0275elementEnd();
  }
}
function InstructorMyCoursesComponent_div_12_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 118);
    \u0275\u0275listener("click", function InstructorMyCoursesComponent_div_12_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.archiveCourse(ctx_r1.selectedCourse));
    });
    \u0275\u0275element(1, "i", 201);
    \u0275\u0275text(2, "Archiver ");
    \u0275\u0275elementEnd();
  }
}
function InstructorMyCoursesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 74)(2, "div", 75)(3, "div", 76)(4, "h5", 77);
    \u0275\u0275element(5, "i", 78);
    \u0275\u0275text(6);
    \u0275\u0275template(7, InstructorMyCoursesComponent_div_12_span_7_Template, 2, 0, "span", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 80);
    \u0275\u0275listener("click", function InstructorMyCoursesComponent_div_12_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, InstructorMyCoursesComponent_div_12_div_9_Template, 3, 2, "div", 81);
    \u0275\u0275elementStart(10, "div", 82);
    \u0275\u0275template(11, InstructorMyCoursesComponent_div_12_button_11_Template, 3, 0, "button", 83)(12, InstructorMyCoursesComponent_div_12_button_12_Template, 3, 0, "button", 84);
    \u0275\u0275elementStart(13, "button", 85);
    \u0275\u0275listener("click", function InstructorMyCoursesComponent_div_12_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275text(14, "Fermer");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedCourse == null ? null : ctx_r1.selectedCourse.title, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.selectedCourse == null ? null : ctx_r1.selectedCourse.status) === "DRAFT" && !(ctx_r1.selectedCourse == null ? null : ctx_r1.selectedCourse.sections == null ? null : ctx_r1.selectedCourse.sections.length));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedCourse);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.editMode && ((ctx_r1.selectedCourse == null ? null : ctx_r1.selectedCourse.status) === "DRAFT" || (ctx_r1.selectedCourse == null ? null : ctx_r1.selectedCourse.status) === "REJECTED"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.editMode && (ctx_r1.selectedCourse == null ? null : ctx_r1.selectedCourse.status) === "PUBLISHED");
  }
}
var InstructorMyCoursesComponent = class _InstructorMyCoursesComponent {
  courseService;
  courses = [];
  loading = true;
  errorMessage = "";
  // Formulaire de création
  showCreateForm = false;
  newCourse = { title: "", description: "", price: 0, level: "BEGINNER" };
  creating = false;
  // Modal de détail / édition
  selectedCourse = null;
  showDetailModal = false;
  editMode = false;
  editCourse = { title: "", description: "", price: 0, level: "" };
  // Section / Leçon
  newSectionTitle = "";
  newLessonTitle = "";
  newLessonType = "VIDEO";
  addingSectionToCourseId = null;
  addingLessonToSectionId = null;
  // Upload
  uploadingCover = false;
  uploadingVideo = false;
  uploadingPdf = false;
  // Ressources des leçons
  expandedResourceLessonId = null;
  lessonResources = {};
  loadingResourcesMap = {};
  newResourceForm = {};
  addingResourceTo = null;
  // Messages
  successMessage = "";
  constructor(courseService) {
    this.courseService = courseService;
  }
  ngOnInit() {
    this.loadCourses();
  }
  loadCourses() {
    this.loading = true;
    this.courseService.getMyCourses().subscribe({
      next: (data) => {
        this.courses = data;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = "Erreur lors du chargement des cours";
        this.loading = false;
        console.error(err);
      }
    });
  }
  // ════════════════════════════════════
  //  CRÉATION
  // ════════════════════════════════════
  toggleCreateForm() {
    this.showCreateForm = !this.showCreateForm;
    this.newCourse = { title: "", description: "", price: 0, level: "BEGINNER" };
  }
  createCourse() {
    if (!this.newCourse.title.trim())
      return;
    this.creating = true;
    this.courseService.createCourse(this.newCourse).subscribe({
      next: (course) => {
        this.showSuccess("Cours cr\xE9\xE9 ! Ajoutez maintenant les sections et les le\xE7ons.");
        this.showCreateForm = false;
        this.creating = false;
        this.newCourse = { title: "", description: "", price: 0, level: "BEGINNER" };
        this.loadCourses();
        this.openDetail(course);
      },
      error: (err) => {
        this.errorMessage = err.error?.message || "Erreur lors de la cr\xE9ation";
        this.creating = false;
      }
    });
  }
  // ════════════════════════════════════
  //  DÉTAIL / ÉDITION
  // ════════════════════════════════════
  openDetail(course) {
    this.courseService.getMyCourse(course.id).subscribe({
      next: (data) => {
        this.selectedCourse = data;
        this.showDetailModal = true;
        this.editMode = false;
      },
      error: (err) => console.error(err)
    });
  }
  closeDetail() {
    this.showDetailModal = false;
    this.selectedCourse = null;
    this.editMode = false;
  }
  startEdit() {
    this.editMode = true;
    this.editCourse = {
      title: this.selectedCourse.title,
      description: this.selectedCourse.description,
      price: this.selectedCourse.price,
      level: this.selectedCourse.level
    };
  }
  saveEdit() {
    this.courseService.updateCourse(this.selectedCourse.id, this.editCourse).subscribe({
      next: () => {
        this.showSuccess("Cours mis \xE0 jour !");
        this.editMode = false;
        this.openDetail(this.selectedCourse);
        this.loadCourses();
      },
      error: (err) => this.errorMessage = err.error?.message || "Erreur"
    });
  }
  // ════════════════════════════════════
  //  ACTIONS
  // ════════════════════════════════════
  submitForReview(course) {
    if (confirm("Soumettre ce cours pour validation par un administrateur ?")) {
      this.courseService.submitForReview(course.id).subscribe({
        next: () => {
          this.showSuccess("Cours soumis pour validation !");
          this.loadCourses();
        },
        error: (err) => this.errorMessage = err.error?.message || "Erreur"
      });
    }
  }
  deleteCourse(course) {
    if (confirm(`Supprimer le cours "${course.title}" ? Cette action est irr\xE9versible.`)) {
      this.courseService.deleteCourse(course.id).subscribe({
        next: () => {
          this.showSuccess("Cours supprim\xE9 !");
          this.loadCourses();
          this.closeDetail();
        },
        error: (err) => this.errorMessage = err.error?.message || "Erreur"
      });
    }
  }
  // ════════════════════════════════════
  //  SECTIONS
  // ════════════════════════════════════
  toggleAddSection(courseId) {
    this.addingSectionToCourseId = this.addingSectionToCourseId === courseId ? null : courseId;
    this.newSectionTitle = "";
  }
  addSection(courseId) {
    if (!this.newSectionTitle.trim())
      return;
    this.courseService.addSection(courseId, { title: this.newSectionTitle }).subscribe({
      next: () => {
        this.showSuccess("Section ajout\xE9e !");
        this.newSectionTitle = "";
        this.addingSectionToCourseId = null;
        if (this.selectedCourse?.id === courseId) {
          this.openDetail(this.selectedCourse);
        }
      },
      error: (err) => this.errorMessage = err.error?.message || "Erreur"
    });
  }
  // ════════════════════════════════════
  //  LEÇONS
  // ════════════════════════════════════
  toggleAddLesson(sectionId) {
    this.addingLessonToSectionId = this.addingLessonToSectionId === sectionId ? null : sectionId;
    this.newLessonTitle = "";
    this.newLessonType = "VIDEO";
  }
  addLesson(sectionId) {
    if (!this.newLessonTitle.trim())
      return;
    this.courseService.addLesson(sectionId, { title: this.newLessonTitle, lessonType: this.newLessonType }).subscribe({
      next: () => {
        this.showSuccess("Le\xE7on ajout\xE9e !");
        this.newLessonTitle = "";
        this.addingLessonToSectionId = null;
        if (this.selectedCourse) {
          this.openDetail(this.selectedCourse);
        }
      },
      error: (err) => this.errorMessage = err.error?.message || "Erreur"
    });
  }
  // ════════════════════════════════════
  //  UPLOADS
  // ════════════════════════════════════
  onCoverUpload(event, courseId) {
    const file = event.target.files[0];
    if (!file)
      return;
    this.uploadingCover = true;
    this.courseService.uploadCoverImage(courseId, file).subscribe({
      next: () => {
        this.showSuccess("Image de couverture upload\xE9e !");
        this.uploadingCover = false;
        if (this.selectedCourse?.id === courseId) {
          this.openDetail(this.selectedCourse);
        }
        this.loadCourses();
      },
      error: (err) => {
        this.errorMessage = err.error?.message || "Erreur upload";
        this.uploadingCover = false;
      }
    });
  }
  onVideoUpload(event, lessonId) {
    const file = event.target.files[0];
    if (!file)
      return;
    this.uploadingVideo = true;
    this.courseService.uploadLessonVideo(lessonId, file).subscribe({
      next: () => {
        this.showSuccess("Vid\xE9o upload\xE9e !");
        this.uploadingVideo = false;
        if (this.selectedCourse) {
          this.openDetail(this.selectedCourse);
        }
      },
      error: (err) => {
        this.errorMessage = err.error?.message || "Erreur upload vid\xE9o";
        this.uploadingVideo = false;
      }
    });
  }
  onPdfUpload(event, lessonId) {
    const file = event.target.files[0];
    if (!file)
      return;
    this.uploadingPdf = true;
    this.courseService.uploadLessonPdf(lessonId, file).subscribe({
      next: () => {
        this.showSuccess("PDF upload\xE9 !");
        this.uploadingPdf = false;
        if (this.selectedCourse) {
          this.openDetail(this.selectedCourse);
        }
      },
      error: (err) => {
        this.errorMessage = err.error?.message || "Erreur upload PDF";
        this.uploadingPdf = false;
      }
    });
  }
  // ════════════════════════════════════
  //  UTILITAIRES
  // ════════════════════════════════════
  getStatusBadgeClass(status) {
    switch (status) {
      case "DRAFT":
        return "bg-secondary";
      case "PENDING":
        return "bg-warning text-dark";
      case "PUBLISHED":
        return "bg-success";
      case "REJECTED":
        return "bg-danger";
      default:
        return "bg-secondary";
    }
  }
  getStatusLabel(status) {
    switch (status) {
      case "DRAFT":
        return "Brouillon";
      case "PENDING":
        return "En attente";
      case "PUBLISHED":
        return "Publi\xE9";
      case "REJECTED":
        return "Rejet\xE9";
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
  showSuccess(msg) {
    this.successMessage = msg;
    this.errorMessage = "";
    setTimeout(() => this.successMessage = "", 3e3);
  }
  archiveCourse(course) {
    if (!confirm(`Archiver le cours "${course.title}" ? Il ne sera plus visible par les \xE9tudiants.`))
      return;
    this.courseService.archiveCourse(course.id).subscribe({
      next: () => {
        this.showSuccess("Cours archiv\xE9.");
        this.loadCourses();
        this.closeDetail();
      },
      error: (e) => {
        this.errorMessage = e?.error?.message || "Erreur lors de l'archivage.";
      }
    });
  }
  toggleLessonResources(lessonId) {
    if (this.expandedResourceLessonId === lessonId) {
      this.expandedResourceLessonId = null;
    } else {
      this.expandedResourceLessonId = lessonId;
      if (!this.lessonResources[lessonId]) {
        this.loadLessonResources(lessonId);
      }
    }
  }
  loadLessonResources(lessonId) {
    this.loadingResourcesMap[lessonId] = true;
    this.courseService.getLessonResources(lessonId).subscribe({
      next: (data) => {
        this.lessonResources[lessonId] = data;
        this.loadingResourcesMap[lessonId] = false;
      },
      error: () => {
        this.loadingResourcesMap[lessonId] = false;
      }
    });
  }
  toggleAddResource(lessonId) {
    if (this.addingResourceTo === lessonId) {
      this.addingResourceTo = null;
    } else {
      this.addingResourceTo = lessonId;
      if (!this.newResourceForm[lessonId]) {
        this.newResourceForm[lessonId] = { title: "", url: "", type: "LINK" };
      }
    }
  }
  addResource(lessonId) {
    const form = this.newResourceForm[lessonId];
    if (!form?.title?.trim() || !form?.url?.trim())
      return;
    this.courseService.addLessonResource(lessonId, form).subscribe({
      next: (res) => {
        if (!this.lessonResources[lessonId])
          this.lessonResources[lessonId] = [];
        this.lessonResources[lessonId].push(res);
        this.newResourceForm[lessonId] = { title: "", url: "", type: "LINK" };
        this.addingResourceTo = null;
        this.showSuccess("Ressource ajout\xE9e !");
      },
      error: (e) => {
        this.errorMessage = e?.error?.message || "Erreur lors de l'ajout.";
      }
    });
  }
  deleteResource(resourceId, lessonId) {
    if (!confirm("Supprimer cette ressource ?"))
      return;
    this.courseService.deleteLessonResource(resourceId).subscribe({
      next: () => {
        this.lessonResources[lessonId] = this.lessonResources[lessonId].filter((r) => r.id !== resourceId);
        this.showSuccess("Ressource supprim\xE9e.");
      },
      error: (e) => {
        this.errorMessage = e?.error?.message || "Erreur.";
      }
    });
  }
  getImageUrl(path) {
    if (!path)
      return "assets/img/course/course-01.jpg";
    return `http://localhost:8081/${path}`;
  }
  static \u0275fac = function InstructorMyCoursesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorMyCoursesComponent)(\u0275\u0275directiveInject(CourseService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorMyCoursesComponent, selectors: [["app-instructor-my-courses"]], decls: 13, vars: 8, consts: [["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "mb-0"], [1, "btn", "btn-primary", 3, "click"], [1, "fa-solid", "fa-plus", "me-2"], ["class", "card mb-4", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "modal fade show d-block", "tabindex", "-1", "style", "background-color: rgba(0,0,0,0.5);", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], [1, "fa-solid", "fa-check-circle", "me-2"], ["type", "button", 1, "btn-close", 3, "click"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "fa-solid", "fa-exclamation-circle", "me-2"], [1, "card", "mb-4"], [1, "card-header", "bg-primary", "text-white"], [1, "fa-solid", "fa-plus-circle", "me-2"], [1, "card-body"], [1, "row", "g-3"], [1, "col-md-8"], [1, "form-label"], ["type", "text", "placeholder", "Ex: Introduction \xE0 Angular 18", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-4"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "BEGINNER"], ["value", "INTERMEDIATE"], ["value", "ADVANCED"], [1, "col-12"], ["rows", "3", "placeholder", "D\xE9crivez votre cours...", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "step", "0.01", "placeholder", "29.99", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-12", "text-end"], [1, "btn", "btn-success", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "fa-solid fa-check me-2", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "fa-solid", "fa-check", "me-2"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-2", "text-muted"], [1, "fa-solid", "fa-book-open", "fa-3x", "text-muted", "mb-3"], [1, "text-muted"], [1, "row"], ["class", "col-md-6 col-lg-4 mb-4", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-lg-4", "mb-4"], [1, "card", "h-100", "course-card", "shadow-sm"], [1, "course-img-wrapper", "position-relative"], [1, "card-img-top", 2, "height", "180px", "object-fit", "cover", 3, "src", "alt"], [1, "badge", "position-absolute", "top-0", "end-0", "m-2", 3, "ngClass"], [1, "card-body", "d-flex", "flex-column"], [1, "card-title"], [1, "text-muted", "small", "mb-2"], [1, "fa-solid", "fa-signal", "me-1"], [1, "text-muted", "small", "flex-grow-1"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "fw-bold", "text-primary", "fs-5"], ["class", "alert alert-danger py-1 px-2 small mb-2", 4, "ngIf"], [1, "d-flex", "gap-1", "flex-wrap"], ["title", "Voir / Modifier", 1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "fa-solid", "fa-eye"], ["class", "btn btn-sm btn-outline-danger", "title", "Supprimer", 3, "click", 4, "ngIf"], ["class", "btn btn-sm btn-outline-secondary", "title", "Archiver", 3, "click", 4, "ngIf"], ["class", "mt-2", 4, "ngIf"], [1, "alert", "alert-danger", "py-1", "px-2", "small", "mb-2"], [1, "fa-solid", "fa-exclamation-triangle", "me-1"], ["title", "Supprimer", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "fa-solid", "fa-trash"], ["title", "Archiver", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "fa-solid", "fa-archive"], [1, "mt-2"], [1, "btn", "btn-success", "btn-sm", "w-100", 3, "click"], [1, "fa-solid", "fa-paper-plane", "me-1"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block", 2, "background-color", "rgba(0,0,0,0.5)"], [1, "modal-dialog", "modal-xl", "modal-dialog-scrollable"], [1, "modal-content"], [1, "modal-header", "bg-primary", "text-white"], [1, "modal-title"], [1, "fa-solid", "fa-book", "me-2"], ["class", "badge bg-warning text-dark ms-2 small fw-normal", 4, "ngIf"], ["type", "button", 1, "btn-close", "btn-close-white", 3, "click"], ["class", "modal-body", 4, "ngIf"], [1, "modal-footer"], ["class", "btn btn-success me-auto", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-secondary", 3, "click", 4, "ngIf"], [1, "btn", "btn-secondary", 3, "click"], [1, "badge", "bg-warning", "text-dark", "ms-2", "small", "fw-normal"], [1, "modal-body"], [4, "ngIf"], [1, "row", "mb-3"], ["alt", "cover", 1, "img-fluid", "rounded", 3, "src"], [1, "btn", "btn-sm", "btn-outline-primary", "w-100"], [1, "fa-solid", "fa-camera", "me-1"], ["type", "file", "accept", "image/*", "hidden", "", 3, "change"], [1, "badge", 3, "ngClass"], ["class", "alert alert-warning py-2 px-3 small mb-2", 4, "ngIf"], ["class", "btn btn-sm btn-warning", 3, "click", 4, "ngIf"], ["class", "alert alert-info d-flex gap-2 mb-3", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "fa-solid", "fa-list", "me-2"], ["class", "btn btn-sm btn-primary", 3, "click", 4, "ngIf"], ["class", "mb-3", 4, "ngIf"], ["class", "text-muted text-center py-3", 4, "ngIf"], ["id", "sectionsAccordion", 1, "accordion"], ["class", "accordion-item", 4, "ngFor", "ngForOf"], [1, "alert", "alert-warning", "py-2", "px-3", "small", "mb-2"], [1, "fa-solid", "fa-triangle-exclamation", "me-1"], [1, "btn", "btn-sm", "btn-warning", 3, "click"], [1, "fa-solid", "fa-pen", "me-1"], [1, "alert", "alert-info", "d-flex", "gap-2", "mb-3"], [1, "fa-solid", "fa-circle-info", "fs-5", "mt-1", "flex-shrink-0"], [1, "mb-0", "mt-1", "ps-3", "small"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "fa-solid", "fa-plus", "me-1"], [1, "mb-3"], [1, "input-group"], ["type", "text", "placeholder", "Titre de la section", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "fa-solid", "fa-check"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "fa-solid", "fa-times"], [1, "text-muted", "text-center", "py-3"], [1, "accordion-item"], [1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", 1, "accordion-button"], [1, "badge", "bg-info", "ms-2"], [1, "accordion-collapse", "collapse", 3, "id"], [1, "accordion-body"], ["class", "border-bottom", 4, "ngFor", "ngForOf"], [1, "border-bottom"], [1, "d-flex", "align-items-center", "justify-content-between", "p-2"], ["class", "fa-solid fa-play-circle text-success me-2", 4, "ngIf"], ["class", "fa-solid fa-file-lines text-info me-2", 4, "ngIf"], ["class", "fa-solid fa-file-pdf text-danger me-2", 4, "ngIf"], [1, "badge", "bg-secondary", "ms-2", 2, "font-size", "10px"], ["class", "badge bg-success ms-2", 4, "ngIf"], ["class", "badge bg-info ms-2", 4, "ngIf"], ["class", "badge bg-warning ms-2", 4, "ngIf"], [1, "d-flex", "gap-1"], ["title", "Ressources", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "fa-solid", "fa-paperclip"], ["class", "d-flex gap-1", 4, "ngIf"], ["class", "bg-light px-3 py-2", 4, "ngIf"], [1, "fa-solid", "fa-play-circle", "text-success", "me-2"], [1, "fa-solid", "fa-file-lines", "text-info", "me-2"], [1, "fa-solid", "fa-file-pdf", "text-danger", "me-2"], [1, "badge", "bg-success", "ms-2"], [1, "badge", "bg-warning", "ms-2"], ["class", "btn btn-sm btn-outline-success", "title", "Upload vid\xE9o", 4, "ngIf"], ["class", "btn btn-sm btn-outline-info", "title", "Upload PDF", 4, "ngIf"], ["title", "Upload vid\xE9o", 1, "btn", "btn-sm", "btn-outline-success"], [1, "fa-solid", "fa-video"], ["type", "file", "accept", "video/*", "hidden", "", 3, "change"], ["title", "Upload PDF", 1, "btn", "btn-sm", "btn-outline-info"], [1, "fa-solid", "fa-file-pdf"], ["type", "file", "accept", ".pdf", "hidden", "", 3, "change"], [1, "bg-light", "px-3", "py-2"], ["class", "text-center py-1", 4, "ngIf"], [1, "text-center", "py-1"], [1, "spinner-border", "spinner-border-sm", "text-secondary"], ["class", "text-muted small mb-1", 4, "ngIf"], ["class", "d-flex align-items-center justify-content-between mb-1", 4, "ngFor", "ngForOf"], ["class", "row g-1 mt-1", 4, "ngIf"], ["class", "btn btn-sm btn-outline-primary mt-1 py-0", 3, "click", 4, "ngIf"], [1, "text-muted", "small", "mb-1"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-1"], ["target", "_blank", 1, "small", 3, "href"], [1, "fa-solid", "fa-link", "me-1"], [1, "btn", "btn-sm", "btn-outline-danger", "py-0", "px-1", 3, "click"], [1, "fa-solid", "fa-trash", 2, "font-size", "10px"], [1, "row", "g-1", "mt-1"], [1, "col-5"], ["placeholder", "Titre", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["placeholder", "URL", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "col-2", "d-flex", "gap-1"], [1, "btn", "btn-sm", "btn-success", "px-1", 3, "click", "disabled"], [1, "btn", "btn-sm", "btn-outline-secondary", "px-1", 3, "click"], [1, "btn", "btn-sm", "btn-outline-primary", "mt-1", "py-0", 3, "click"], ["class", "card card-body p-2 mb-2", 4, "ngIf"], ["class", "btn btn-sm btn-outline-primary mt-1", 3, "click", 4, "ngIf"], [1, "card", "card-body", "p-2", "mb-2"], [1, "row", "g-2", "align-items-end"], [1, "form-label", "small", "mb-1"], ["type", "text", "placeholder", "Titre de la le\xE7on", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "col-3"], [1, "form-select", "form-select-sm", 3, "ngModelChange", "ngModel"], ["value", "VIDEO"], ["value", "TEXT"], ["value", "PDF"], [1, "col-4", "d-flex", "gap-1"], [1, "btn", "btn-sm", "btn-success", 3, "click", "disabled"], [1, "fa-solid", "fa-check", "me-1"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "btn", "btn-sm", "btn-outline-primary", "mt-1", 3, "click"], ["type", "text", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "4", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "step", "0.01", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-secondary", "me-2", 3, "click"], ["class", "alert alert-warning small py-2 px-3 d-inline-block me-2 mb-0", 4, "ngIf"], [1, "btn", "btn-success", 3, "click"], [1, "alert", "alert-warning", "small", "py-2", "px-3", "d-inline-block", "me-2", "mb-0"], [1, "btn", "btn-success", "me-auto", 3, "click"], [1, "fa-solid", "fa-archive", "me-1"]], template: function InstructorMyCoursesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, InstructorMyCoursesComponent_div_0_Template, 4, 1, "div", 0)(1, InstructorMyCoursesComponent_div_1_Template, 4, 1, "div", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "h4", 3);
      \u0275\u0275text(4, "Mes Cours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 4);
      \u0275\u0275listener("click", function InstructorMyCoursesComponent_Template_button_click_5_listener() {
        return ctx.toggleCreateForm();
      });
      \u0275\u0275element(6, "i", 5);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, InstructorMyCoursesComponent_div_8_Template, 34, 8, "div", 6)(9, InstructorMyCoursesComponent_div_9_Template, 6, 0, "div", 7)(10, InstructorMyCoursesComponent_div_10_Template, 6, 0, "div", 7)(11, InstructorMyCoursesComponent_div_11_Template, 2, 1, "div", 8)(12, InstructorMyCoursesComponent_div_12_Template, 15, 5, "div", 9);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", ctx.showCreateForm ? "Annuler" : "Nouveau Cours", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showCreateForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.courses.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.courses.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showDetailModal);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel, RouterModule, SlicePipe, DecimalPipe, DatePipe], styles: ["\n\n.course-card[_ngcontent-%COMP%] {\n  transition: transform 0.2s, box-shadow 0.2s;\n  border: 1px solid #e0e0e0;\n}\n.course-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1) !important;\n}\n.course-img-wrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-radius: 0.375rem 0.375rem 0 0;\n}\n.modal.show[_ngcontent-%COMP%] {\n  z-index: 1050;\n}\n.accordion-button[_ngcontent-%COMP%]:not(.collapsed) {\n  background-color: #e7f1ff;\n  color: #0d6efd;\n}\n/*# sourceMappingURL=instructor-my-courses.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorMyCoursesComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-my-courses", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `<!-- Messages -->\r
        <div *ngIf="successMessage" class="alert alert-success alert-dismissible fade show" role="alert">\r
          <i class="fa-solid fa-check-circle me-2"></i>{{ successMessage }}\r
          <button type="button" class="btn-close" (click)="successMessage = ''"></button>\r
        </div>\r
        <div *ngIf="errorMessage" class="alert alert-danger alert-dismissible fade show" role="alert">\r
          <i class="fa-solid fa-exclamation-circle me-2"></i>{{ errorMessage }}\r
          <button type="button" class="btn-close" (click)="errorMessage = ''"></button>\r
        </div>\r
\r
        <!-- Header -->\r
        <div class="d-flex justify-content-between align-items-center mb-4">\r
          <h4 class="mb-0">Mes Cours</h4>\r
          <button class="btn btn-primary" (click)="toggleCreateForm()">\r
            <i class="fa-solid fa-plus me-2"></i>{{ showCreateForm ? 'Annuler' : 'Nouveau Cours' }}\r
          </button>\r
        </div>\r
\r
        <!-- Formulaire de cr\xE9ation -->\r
        <div *ngIf="showCreateForm" class="card mb-4">\r
          <div class="card-header bg-primary text-white">\r
            <h5 class="mb-0"><i class="fa-solid fa-plus-circle me-2"></i>Cr\xE9er un nouveau cours</h5>\r
          </div>\r
          <div class="card-body">\r
            <div class="row g-3">\r
              <div class="col-md-8">\r
                <label class="form-label">Titre du cours *</label>\r
                <input type="text" class="form-control" [(ngModel)]="newCourse.title" \r
                       placeholder="Ex: Introduction \xE0 Angular 18">\r
              </div>\r
              <div class="col-md-4">\r
                <label class="form-label">Niveau</label>\r
                <select class="form-select" [(ngModel)]="newCourse.level">\r
                  <option value="BEGINNER">D\xE9butant</option>\r
                  <option value="INTERMEDIATE">Interm\xE9diaire</option>\r
                  <option value="ADVANCED">Avanc\xE9</option>\r
                </select>\r
              </div>\r
              <div class="col-12">\r
                <label class="form-label">Description</label>\r
                <textarea class="form-control" rows="3" [(ngModel)]="newCourse.description"\r
                          placeholder="D\xE9crivez votre cours..."></textarea>\r
              </div>\r
              <div class="col-md-4">\r
                <label class="form-label">Prix (\u20AC)</label>\r
                <input type="number" class="form-control" [(ngModel)]="newCourse.price" \r
                       min="0" step="0.01" placeholder="29.99">\r
              </div>\r
              <div class="col-12 text-end">\r
                <button class="btn btn-success" (click)="createCourse()" [disabled]="creating || !newCourse.title.trim()">\r
                  <span *ngIf="creating" class="spinner-border spinner-border-sm me-2"></span>\r
                  <i *ngIf="!creating" class="fa-solid fa-check me-2"></i>\r
                  {{ creating ? 'Cr\xE9ation...' : 'Cr\xE9er le cours' }}\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Loading -->\r
        <div *ngIf="loading" class="text-center py-5">\r
          <div class="spinner-border text-primary" role="status">\r
            <span class="visually-hidden">Chargement...</span>\r
          </div>\r
          <p class="mt-2 text-muted">Chargement de vos cours...</p>\r
        </div>\r
\r
        <!-- Liste vide -->\r
        <div *ngIf="!loading && courses.length === 0" class="text-center py-5">\r
          <i class="fa-solid fa-book-open fa-3x text-muted mb-3"></i>\r
          <h5 class="text-muted">Vous n'avez pas encore de cours</h5>\r
          <p class="text-muted">Cliquez sur "Nouveau Cours" pour commencer</p>\r
        </div>\r
\r
        <!-- Grille des cours -->\r
        <div class="row" *ngIf="!loading && courses.length > 0">\r
          <div class="col-md-6 col-lg-4 mb-4" *ngFor="let course of courses">\r
            <div class="card h-100 course-card shadow-sm">\r
              <!-- Image -->\r
              <div class="course-img-wrapper position-relative">\r
                <img [src]="getImageUrl(course.coverImage)" class="card-img-top" \r
                     alt="{{ course.title }}" style="height: 180px; object-fit: cover;">\r
                <span class="badge position-absolute top-0 end-0 m-2" \r
                      [ngClass]="getStatusBadgeClass(course.status)">\r
                  {{ getStatusLabel(course.status) }}\r
                </span>\r
              </div>\r
              \r
              <!-- Corps -->\r
              <div class="card-body d-flex flex-column">\r
                <h6 class="card-title">{{ course.title }}</h6>\r
                <p class="text-muted small mb-2">\r
                  <i class="fa-solid fa-signal me-1"></i>{{ getLevelLabel(course.level) }}\r
                </p>\r
                <p class="text-muted small flex-grow-1">\r
                  {{ course.description?.length > 80 ? (course.description | slice:0:80) + '...' : course.description }}\r
                </p>\r
                \r
                <!-- Prix -->\r
                <div class="d-flex justify-content-between align-items-center mb-2">\r
                  <span class="fw-bold text-primary fs-5">{{ course.price | number:'1.2-2' }} \u20AC</span>\r
                  <small class="text-muted">{{ course.createdAt | date:'dd/MM/yyyy' }}</small>\r
                </div>\r
\r
                <!-- Raison du rejet -->\r
                <div *ngIf="course.status === 'REJECTED' && course.rejectionReason" \r
                     class="alert alert-danger py-1 px-2 small mb-2">\r
                  <i class="fa-solid fa-exclamation-triangle me-1"></i>\r
                  {{ course.rejectionReason }}\r
                </div>\r
\r
                <!-- Boutons -->\r
                <div class="d-flex gap-1 flex-wrap">\r
                  <button class="btn btn-sm btn-outline-primary" (click)="openDetail(course)"\r
                          title="Voir / Modifier">\r
                    <i class="fa-solid fa-eye"></i>\r
                  </button>\r
                  <button *ngIf="course.status === 'DRAFT'" \r
                          class="btn btn-sm btn-outline-danger" (click)="deleteCourse(course)"\r
                          title="Supprimer">\r
                    <i class="fa-solid fa-trash"></i>\r
                  </button>\r
                  <button *ngIf="course.status === 'PUBLISHED'"\r
                          class="btn btn-sm btn-outline-secondary" (click)="archiveCourse(course)"\r
                          title="Archiver">\r
                    <i class="fa-solid fa-archive"></i>\r
                  </button>\r
                </div>\r
\r
                <!-- Bouton Publier \xE0 l'admin (DRAFT ou REJECTED) -->\r
                <div class="mt-2" *ngIf="course.status === 'DRAFT' || course.status === 'REJECTED'">\r
                  <button class="btn btn-success btn-sm w-100" (click)="submitForReview(course)">\r
                    <i class="fa-solid fa-paper-plane me-1"></i>Publier \xE0 l'admin\r
                  </button>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
        <!--  MODAL D\xC9TAIL / \xC9DITION DU COURS       -->\r
        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
        <div *ngIf="showDetailModal" class="modal fade show d-block" tabindex="-1" \r
             style="background-color: rgba(0,0,0,0.5);">\r
          <div class="modal-dialog modal-xl modal-dialog-scrollable">\r
            <div class="modal-content">\r
              \r
              <!-- Header -->\r
              <div class="modal-header bg-primary text-white">\r
                <h5 class="modal-title">\r
                  <i class="fa-solid fa-book me-2"></i>{{ selectedCourse?.title }}\r
                  <span class="badge bg-warning text-dark ms-2 small fw-normal"\r
                        *ngIf="selectedCourse?.status === 'DRAFT' && !selectedCourse?.sections?.length">\r
                    Nouveau cours\r
                  </span>\r
                </h5>\r
                <button type="button" class="btn-close btn-close-white" (click)="closeDetail()"></button>\r
              </div>\r
\r
              <!-- Body -->\r
              <div class="modal-body" *ngIf="selectedCourse">\r
\r
                <!-- Mode LECTURE -->\r
                <div *ngIf="!editMode">\r
                  <div class="row mb-3">\r
                    <div class="col-md-4">\r
                      <img [src]="getImageUrl(selectedCourse.coverImage)" class="img-fluid rounded" alt="cover">\r
                      <div class="mt-2">\r
                        <label class="btn btn-sm btn-outline-primary w-100">\r
                          <i class="fa-solid fa-camera me-1"></i>\r
                          {{ uploadingCover ? 'Upload...' : 'Changer la couverture' }}\r
                          <input type="file" accept="image/*" hidden (change)="onCoverUpload($event, selectedCourse.id)">\r
                        </label>\r
                      </div>\r
                    </div>\r
                    <div class="col-md-8">\r
                      <p><strong>Statut:</strong> \r
                        <span class="badge" [ngClass]="getStatusBadgeClass(selectedCourse.status)">\r
                          {{ getStatusLabel(selectedCourse.status) }}\r
                        </span>\r
                      </p>\r
                      <p><strong>Niveau:</strong> {{ getLevelLabel(selectedCourse.level) }}</p>\r
                      <p><strong>Prix:</strong> {{ selectedCourse.price | number:'1.2-2' }} \u20AC</p>\r
                      <p><strong>Description:</strong></p>\r
                      <p class="text-muted">{{ selectedCourse.description }}</p>\r
\r
                      <!-- Avertissement pour les cours publi\xE9s -->\r
                      <div *ngIf="selectedCourse.status === 'PUBLISHED'" class="alert alert-warning py-2 px-3 small mb-2">\r
                        <i class="fa-solid fa-triangle-exclamation me-1"></i>\r
                        Toute modification soumettra ce cours \xE0 une <strong>nouvelle validation admin</strong> avant d'\xEAtre remis en ligne.\r
                      </div>\r
\r
                      <button class="btn btn-sm btn-warning" (click)="startEdit()"\r
                              *ngIf="selectedCourse.status === 'DRAFT' || selectedCourse.status === 'REJECTED' || selectedCourse.status === 'PUBLISHED'">\r
                        <i class="fa-solid fa-pen me-1"></i>Modifier\r
                      </button>\r
                    </div>\r
                  </div>\r
\r
                  <hr>\r
\r
                  <!-- Guide \xE9tape par \xE9tape pour un nouveau cours -->\r
                  <div *ngIf="selectedCourse.status === 'DRAFT' && !selectedCourse.sections?.length"\r
                       class="alert alert-info d-flex gap-2 mb-3">\r
                    <i class="fa-solid fa-circle-info fs-5 mt-1 flex-shrink-0"></i>\r
                    <div>\r
                      <strong>Prochaines \xE9tapes pour compl\xE9ter votre cours :</strong>\r
                      <ol class="mb-0 mt-1 ps-3 small">\r
                        <li>Ajoutez une ou plusieurs <strong>sections</strong> (chapitres) ci-dessous</li>\r
                        <li>Dans chaque section, ajoutez des <strong>le\xE7ons</strong></li>\r
                        <li>Uploadez des <strong>vid\xE9os</strong> et/ou <strong>PDF</strong> pour chaque le\xE7on</li>\r
                        <li>Quand tout est pr\xEAt, cliquez <strong>"Publier \xE0 l'admin"</strong></li>\r
                      </ol>\r
                    </div>\r
                  </div>\r
\r
                  <!-- SECTIONS & LE\xC7ONS -->\r
                  <div class="d-flex justify-content-between align-items-center mb-3">\r
                    <h6 class="mb-0"><i class="fa-solid fa-list me-2"></i>Sections & Le\xE7ons</h6>\r
                    <button class="btn btn-sm btn-primary" (click)="toggleAddSection(selectedCourse.id)"\r
                            *ngIf="selectedCourse.status === 'DRAFT' || selectedCourse.status === 'REJECTED'">\r
                      <i class="fa-solid fa-plus me-1"></i>Ajouter une section\r
                    </button>\r
                  </div>\r
\r
                  <!-- Form ajout section -->\r
                  <div *ngIf="addingSectionToCourseId === selectedCourse.id" class="mb-3">\r
                    <div class="input-group">\r
                      <input type="text" class="form-control" [(ngModel)]="newSectionTitle" placeholder="Titre de la section">\r
                      <button class="btn btn-success" (click)="addSection(selectedCourse.id)" [disabled]="!newSectionTitle.trim()">\r
                        <i class="fa-solid fa-check"></i>\r
                      </button>\r
                      <button class="btn btn-outline-secondary" (click)="toggleAddSection(selectedCourse.id)">\r
                        <i class="fa-solid fa-times"></i>\r
                      </button>\r
                    </div>\r
                  </div>\r
\r
                  <!-- Liste des sections -->\r
                  <div *ngIf="selectedCourse.sections?.length === 0" class="text-muted text-center py-3">\r
                    Aucune section. Ajoutez-en une pour commencer.\r
                  </div>\r
\r
                  <div class="accordion" id="sectionsAccordion">\r
                    <div class="accordion-item" *ngFor="let section of selectedCourse.sections; let i = index">\r
                      <h2 class="accordion-header">\r
                        <button class="accordion-button" [class.collapsed]="i > 0" type="button" \r
                                data-bs-toggle="collapse" [attr.data-bs-target]="'#section' + section.id">\r
                          <strong>Section {{ i+1 }}:</strong>&nbsp;{{ section.title }}\r
                          <span class="badge bg-info ms-2">{{ section.lessons?.length || 0 }} le\xE7on(s)</span>\r
                        </button>\r
                      </h2>\r
                      <div [id]="'section' + section.id" class="accordion-collapse collapse" [class.show]="i === 0">\r
                        <div class="accordion-body">\r
                          \r
                          <!-- Le\xE7ons -->\r
                          <div *ngFor="let lesson of section.lessons; let j = index" class="border-bottom">\r
                            <div class="d-flex align-items-center justify-content-between p-2">\r
                              <div>\r
                                <i class="fa-solid fa-play-circle text-success me-2" *ngIf="lesson.lessonType === 'VIDEO' || !lesson.lessonType"></i>\r
                                <i class="fa-solid fa-file-lines text-info me-2" *ngIf="lesson.lessonType === 'TEXT'"></i>\r
                                <i class="fa-solid fa-file-pdf text-danger me-2" *ngIf="lesson.lessonType === 'PDF'"></i>\r
                                <strong>{{ j+1 }}.</strong> {{ lesson.title }}\r
                                <span class="badge bg-secondary ms-2" style="font-size:10px">{{ lesson.lessonType || 'VIDEO' }}</span>\r
                                <span *ngIf="lesson.videoUrl" class="badge bg-success ms-2">Vid\xE9o</span>\r
                                <span *ngIf="lesson.pdfUrl" class="badge bg-info ms-2">PDF</span>\r
                                <span *ngIf="lesson.articleContent" class="badge bg-warning ms-2">Article</span>\r
                              </div>\r
                              <div class="d-flex gap-1">\r
                                <button class="btn btn-sm btn-outline-secondary" title="Ressources"\r
                                        (click)="toggleLessonResources(lesson.id)">\r
                                  <i class="fa-solid fa-paperclip"></i>\r
                                </button>\r
                                <div class="d-flex gap-1" *ngIf="selectedCourse.status === 'DRAFT' || selectedCourse.status === 'REJECTED'">\r
                                  <label class="btn btn-sm btn-outline-success" title="Upload vid\xE9o"\r
                                         *ngIf="lesson.lessonType === 'VIDEO' || !lesson.lessonType">\r
                                    <i class="fa-solid fa-video"></i>\r
                                    <input type="file" accept="video/*" hidden (change)="onVideoUpload($event, lesson.id)">\r
                                  </label>\r
                                  <label class="btn btn-sm btn-outline-info" title="Upload PDF"\r
                                         *ngIf="lesson.lessonType === 'PDF'">\r
                                    <i class="fa-solid fa-file-pdf"></i>\r
                                    <input type="file" accept=".pdf" hidden (change)="onPdfUpload($event, lesson.id)">\r
                                  </label>\r
                                </div>\r
                              </div>\r
                            </div>\r
\r
                            <!-- Panneau Ressources -->\r
                            <div *ngIf="expandedResourceLessonId === lesson.id" class="bg-light px-3 py-2">\r
                              <div *ngIf="loadingResourcesMap[lesson.id]" class="text-center py-1">\r
                                <div class="spinner-border spinner-border-sm text-secondary"></div>\r
                              </div>\r
                              <div *ngIf="!loadingResourcesMap[lesson.id]">\r
                                <div *ngIf="lessonResources[lesson.id]?.length === 0" class="text-muted small mb-1">Aucune ressource.</div>\r
                                <div *ngFor="let res of lessonResources[lesson.id]" class="d-flex align-items-center justify-content-between mb-1">\r
                                  <a [href]="res.url" target="_blank" class="small">\r
                                    <i class="fa-solid fa-link me-1"></i>{{ res.title }}\r
                                  </a>\r
                                  <button class="btn btn-sm btn-outline-danger py-0 px-1" (click)="deleteResource(res.id, lesson.id)">\r
                                    <i class="fa-solid fa-trash" style="font-size:10px"></i>\r
                                  </button>\r
                                </div>\r
                                <!-- Formulaire ajout -->\r
                                <div *ngIf="addingResourceTo === lesson.id" class="row g-1 mt-1">\r
                                  <div class="col-5">\r
                                    <input class="form-control form-control-sm" [(ngModel)]="newResourceForm[lesson.id].title" placeholder="Titre">\r
                                  </div>\r
                                  <div class="col-5">\r
                                    <input class="form-control form-control-sm" [(ngModel)]="newResourceForm[lesson.id].url" placeholder="URL">\r
                                  </div>\r
                                  <div class="col-2 d-flex gap-1">\r
                                    <button class="btn btn-sm btn-success px-1" (click)="addResource(lesson.id)"\r
                                            [disabled]="!newResourceForm[lesson.id]?.title?.trim() || !newResourceForm[lesson.id]?.url?.trim()">\r
                                      <i class="fa-solid fa-check"></i>\r
                                    </button>\r
                                    <button class="btn btn-sm btn-outline-secondary px-1" (click)="toggleAddResource(lesson.id)">\r
                                      <i class="fa-solid fa-times"></i>\r
                                    </button>\r
                                  </div>\r
                                </div>\r
                                <button *ngIf="addingResourceTo !== lesson.id" class="btn btn-sm btn-outline-primary mt-1 py-0"\r
                                        (click)="toggleAddResource(lesson.id)">\r
                                  <i class="fa-solid fa-plus me-1"></i>Ajouter une ressource\r
                                </button>\r
                              </div>\r
                            </div>\r
                          </div>\r
\r
                          <!-- Ajouter le\xE7on -->\r
                          <div class="mt-2" *ngIf="selectedCourse.status === 'DRAFT' || selectedCourse.status === 'REJECTED'">\r
                            <div *ngIf="addingLessonToSectionId === section.id" class="card card-body p-2 mb-2">\r
                              <div class="row g-2 align-items-end">\r
                                <div class="col-5">\r
                                  <label class="form-label small mb-1">Titre de la le\xE7on</label>\r
                                  <input type="text" class="form-control form-control-sm" [(ngModel)]="newLessonTitle" \r
                                         placeholder="Titre de la le\xE7on">\r
                                </div>\r
                                <div class="col-3">\r
                                  <label class="form-label small mb-1">Type</label>\r
                                  <select class="form-select form-select-sm" [(ngModel)]="newLessonType">\r
                                    <option value="VIDEO">Vid\xE9o</option>\r
                                    <option value="TEXT">Texte / Article</option>\r
                                    <option value="PDF">PDF</option>\r
                                  </select>\r
                                </div>\r
                                <div class="col-4 d-flex gap-1">\r
                                  <button class="btn btn-sm btn-success" (click)="addLesson(section.id)" [disabled]="!newLessonTitle.trim()">\r
                                    <i class="fa-solid fa-check me-1"></i>Ajouter\r
                                  </button>\r
                                  <button class="btn btn-sm btn-outline-secondary" (click)="toggleAddLesson(section.id)">\r
                                    <i class="fa-solid fa-times"></i>\r
                                  </button>\r
                                </div>\r
                              </div>\r
                            </div>\r
                            <button *ngIf="addingLessonToSectionId !== section.id" \r
                                    class="btn btn-sm btn-outline-primary mt-1" (click)="toggleAddLesson(section.id)">\r
                              <i class="fa-solid fa-plus me-1"></i>Ajouter une le\xE7on\r
                            </button>\r
                          </div>\r
\r
                        </div>\r
                      </div>\r
                    </div>\r
                  </div>\r
\r
                </div>\r
\r
                <!-- Mode \xC9DITION -->\r
                <div *ngIf="editMode">\r
                  <div class="row g-3">\r
                    <div class="col-md-8">\r
                      <label class="form-label">Titre</label>\r
                      <input type="text" class="form-control" [(ngModel)]="editCourse.title">\r
                    </div>\r
                    <div class="col-md-4">\r
                      <label class="form-label">Niveau</label>\r
                      <select class="form-select" [(ngModel)]="editCourse.level">\r
                        <option value="BEGINNER">D\xE9butant</option>\r
                        <option value="INTERMEDIATE">Interm\xE9diaire</option>\r
                        <option value="ADVANCED">Avanc\xE9</option>\r
                      </select>\r
                    </div>\r
                    <div class="col-12">\r
                      <label class="form-label">Description</label>\r
                      <textarea class="form-control" rows="4" [(ngModel)]="editCourse.description"></textarea>\r
                    </div>\r
                    <div class="col-md-4">\r
                      <label class="form-label">Prix (\u20AC)</label>\r
                      <input type="number" class="form-control" [(ngModel)]="editCourse.price" min="0" step="0.01">\r
                    </div>\r
                    <div class="col-12 text-end">\r
                      <button class="btn btn-secondary me-2" (click)="editMode = false">Annuler</button>\r
                      <div *ngIf="selectedCourse?.status === 'PUBLISHED'" class="alert alert-warning small py-2 px-3 d-inline-block me-2 mb-0">\r
                        <i class="fa-solid fa-triangle-exclamation me-1"></i>Ce cours sera soumis \xE0 une nouvelle approbation.\r
                      </div>\r
                      <button class="btn btn-success" (click)="saveEdit()">\r
                        <i class="fa-solid fa-check me-1"></i>Enregistrer\r
                      </button>\r
                    </div>\r
                  </div>\r
                </div>\r
\r
              </div>\r
\r
              <!-- Footer -->\r
              <div class="modal-footer">\r
                <button *ngIf="!editMode && (selectedCourse?.status === 'DRAFT' || selectedCourse?.status === 'REJECTED')"\r
                        class="btn btn-success me-auto" (click)="submitForReview(selectedCourse); closeDetail()">\r
                  <i class="fa-solid fa-paper-plane me-1"></i>Publier \xE0 l'admin\r
                </button>\r
                <button *ngIf="!editMode && selectedCourse?.status === 'PUBLISHED'"\r
                        class="btn btn-outline-secondary" (click)="archiveCourse(selectedCourse)">\r
                  <i class="fa-solid fa-archive me-1"></i>Archiver\r
                </button>\r
                <button class="btn btn-secondary" (click)="closeDetail()">Fermer</button>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
`, styles: ["/* src/app/features/instructor/instructor-my-courses/instructor-my-courses.component.scss */\n.course-card {\n  transition: transform 0.2s, box-shadow 0.2s;\n  border: 1px solid #e0e0e0;\n}\n.course-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1) !important;\n}\n.course-img-wrapper {\n  overflow: hidden;\n  border-radius: 0.375rem 0.375rem 0 0;\n}\n.modal.show {\n  z-index: 1050;\n}\n.accordion-button:not(.collapsed) {\n  background-color: #e7f1ff;\n  color: #0d6efd;\n}\n/*# sourceMappingURL=instructor-my-courses.component.css.map */\n"] }]
  }], () => [{ type: CourseService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorMyCoursesComponent, { className: "InstructorMyCoursesComponent", filePath: "src/app/features/instructor/instructor-my-courses/instructor-my-courses.component.ts", lineNumber: 14 });
})();
export {
  InstructorMyCoursesComponent
};
//# sourceMappingURL=chunk-P6BGDXAU.js.map
