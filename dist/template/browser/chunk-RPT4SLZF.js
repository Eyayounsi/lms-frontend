import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-VDIDEWKD.js";
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
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-VF2E3YWR.js";
import {
  RouterLink
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
  SlicePipe,
  TitleCasePipe
} from "./chunk-YBJXKBE2.js";
import {
  Component,
  ViewChild,
  forkJoin,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/instructor/instructor-dashboard/instructor-dashboard.component.ts
var _c0 = ["chart"];
var _c1 = () => ["/instructor/instructor-my-courses"];
var _c2 = (a0) => ({ id: a0 });
function InstructorDashboardComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275elementEnd();
  }
}
function InstructorDashboardComponent_ng_container_1_apx_chart_143_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "apx-chart", 69);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("series", ctx_r1.enrollmentChart.series)("chart", ctx_r1.enrollmentChart.chart)("xaxis", ctx_r1.enrollmentChart.xaxis)("yaxis", ctx_r1.enrollmentChart.yaxis)("plotOptions", ctx_r1.enrollmentChart.plotOptions)("fill", ctx_r1.enrollmentChart.fill)("colors", ctx_r1.enrollmentChart.colors)("dataLabels", ctx_r1.enrollmentChart.dataLabels)("grid", ctx_r1.enrollmentChart.grid)("legend", ctx_r1.enrollmentChart.legend)("tooltip", ctx_r1.enrollmentChart.tooltip);
  }
}
function InstructorDashboardComponent_ng_container_1_apx_chart_152_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "apx-chart", 70);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("series", ctx_r1.completionDonut.series)("chart", ctx_r1.completionDonut.chart)("labels", ctx_r1.completionDonut.labels)("colors", ctx_r1.completionDonut.colors)("legend", ctx_r1.completionDonut.legend)("dataLabels", ctx_r1.completionDonut.dataLabels)("responsive", ctx_r1.completionDonut.responsive)("plotOptions", ctx_r1.completionDonut.plotOptions)("tooltip", ctx_r1.completionDonut.tooltip);
  }
}
function InstructorDashboardComponent_ng_container_1_div_153_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275element(1, "i", 72);
    \u0275\u0275text(2, " Aucun \xE9tudiant inscrit ");
    \u0275\u0275elementEnd();
  }
}
function InstructorDashboardComponent_ng_container_1_apx_chart_166_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "apx-chart", 73);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("series", ctx_r1.revenueChart.series)("chart", ctx_r1.revenueChart.chart)("xaxis", ctx_r1.revenueChart.xaxis)("yaxis", ctx_r1.revenueChart.yaxis)("stroke", ctx_r1.revenueChart.stroke)("fill", ctx_r1.revenueChart.fill)("colors", ctx_r1.revenueChart.colors)("dataLabels", ctx_r1.revenueChart.dataLabels)("grid", ctx_r1.revenueChart.grid)("tooltip", ctx_r1.revenueChart.tooltip);
  }
}
function InstructorDashboardComponent_ng_container_1_apx_chart_175_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "apx-chart", 74);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("series", ctx_r1.statusChart.series)("chart", ctx_r1.statusChart.chart)("xaxis", ctx_r1.statusChart.xaxis)("plotOptions", ctx_r1.statusChart.plotOptions)("colors", ctx_r1.statusChart.colors)("dataLabels", ctx_r1.statusChart.dataLabels)("grid", ctx_r1.statusChart.grid)("legend", ctx_r1.statusChart.legend)("tooltip", ctx_r1.statusChart.tooltip);
  }
}
function InstructorDashboardComponent_ng_container_1_div_183_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275element(1, "i", 75);
    \u0275\u0275text(2, "Aucun cours cr\xE9\xE9. ");
    \u0275\u0275elementEnd();
  }
}
function InstructorDashboardComponent_ng_container_1_div_184_tr_15_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275element(1, "i", 91);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, c_r3.averageRating, "1.1-1"), " ");
  }
}
function InstructorDashboardComponent_ng_container_1_div_184_tr_15_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 83);
    \u0275\u0275text(1, "\u2013");
    \u0275\u0275elementEnd();
  }
}
function InstructorDashboardComponent_ng_container_1_div_184_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 80);
    \u0275\u0275element(3, "img", 81);
    \u0275\u0275elementStart(4, "div")(5, "p", 82);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 83);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "td")(10, "span", 84);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275template(13, InstructorDashboardComponent_ng_container_1_div_184_tr_15_span_13_Template, 4, 4, "span", 85)(14, InstructorDashboardComponent_ng_container_1_div_184_tr_15_span_14_Template, 2, 0, "span", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 87);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "a", 88);
    \u0275\u0275element(20, "i", 89);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", c_r3.coverImageUrl || "assets/img/course/course-01.jpg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((c_r3.category == null ? null : c_r3.category.name) || "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r3.enrollmentCount || 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", c_r3.averageRating);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !c_r3.averageRating);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getStatusBadge(c_r3.courseStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStatusLabel(c_r3.courseStatus));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c1))("queryParams", \u0275\u0275pureFunction1(11, _c2, c_r3.id));
  }
}
function InstructorDashboardComponent_ng_container_1_div_184_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "table", 77)(2, "thead", 78)(3, "tr")(4, "th");
    \u0275\u0275text(5, "Cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "\xC9tudiants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Note");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, InstructorDashboardComponent_ng_container_1_div_184_tr_15_Template, 21, 13, "tr", 79);
    \u0275\u0275pipe(16, "slice");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(16, 1, ctx_r1.courses, 0, 8));
  }
}
function InstructorDashboardComponent_ng_container_1_option_198_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275property("ngValue", c_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4.title);
  }
}
function InstructorDashboardComponent_ng_container_1_div_199_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275element(1, "i", 93);
    \u0275\u0275elementStart(2, "p", 94);
    \u0275\u0275text(3, "Aucun \xE9tudiant inscrit pour le moment.");
    \u0275\u0275elementEnd()();
  }
}
function InstructorDashboardComponent_ng_container_1_div_200_tr_15_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 105);
    \u0275\u0275element(1, "i", 106);
    \u0275\u0275text(2, "Compl\xE9t\xE9 ");
    \u0275\u0275elementEnd();
  }
}
function InstructorDashboardComponent_ng_container_1_div_200_tr_15_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 107);
    \u0275\u0275element(1, "i", 108);
    \u0275\u0275text(2, "En cours ");
    \u0275\u0275elementEnd();
  }
}
function InstructorDashboardComponent_ng_container_1_div_200_tr_15_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 109);
    \u0275\u0275text(1, " Non commenc\xE9 ");
    \u0275\u0275elementEnd();
  }
}
function InstructorDashboardComponent_ng_container_1_div_200_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 80)(3, "div", 95);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "p", 82);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 83);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td")(11, "span", 96);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "span", 97);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 98)(18, "div", 80)(19, "div", 99);
    \u0275\u0275element(20, "div", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 101);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275template(25, InstructorDashboardComponent_ng_container_1_div_200_tr_15_span_25_Template, 3, 0, "span", 102)(26, InstructorDashboardComponent_ng_container_1_div_200_tr_15_span_26_Template, 3, 0, "span", 103)(27, InstructorDashboardComponent_ng_container_1_div_200_tr_15_span_27_Template, 2, 0, "span", 104);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const s_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (s_r5.studentName == null ? null : (tmp_4_0 = s_r5.studentName.charAt(0)) == null ? null : tmp_4_0.toUpperCase()) || "E", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r5.studentName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r5.studentEmail);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r5.courseTitle);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 12, s_r5.enrolledAt, "dd/MM/yyyy"));
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", s_r5.completionPercentage || 0, "%");
    \u0275\u0275property("ngClass", ctx_r1.getProgressClass(s_r5.completionPercentage));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(23, 15, s_r5.completionPercentage || 0, "1.0-0"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", s_r5.completed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !s_r5.completed && (s_r5.completionPercentage || 0) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !s_r5.completed && !(s_r5.completionPercentage || 0));
  }
}
function InstructorDashboardComponent_ng_container_1_div_200_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 110);
    \u0275\u0275text(2, "Aucun r\xE9sultat pour cette recherche.");
    \u0275\u0275elementEnd()();
  }
}
function InstructorDashboardComponent_ng_container_1_div_200_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "table", 77)(2, "thead", 78)(3, "tr")(4, "th");
    \u0275\u0275text(5, "\xC9tudiant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Inscrit le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Statut");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, InstructorDashboardComponent_ng_container_1_div_200_tr_15_Template, 28, 18, "tr", 79)(16, InstructorDashboardComponent_ng_container_1_div_200_tr_16_Template, 3, 0, "tr", 1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r1.filteredStudents);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredStudents.length === 0);
  }
}
function InstructorDashboardComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "div", 7)(5, "div", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "h4", 9);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 10);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 11)(14, "div")(15, "div", 12);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 13);
    \u0275\u0275text(18, "\xC9tudiants");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(19, "div", 14);
    \u0275\u0275elementStart(20, "div")(21, "div", 12);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 13);
    \u0275\u0275text(24, "Cours");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(25, "div", 14);
    \u0275\u0275elementStart(26, "div")(27, "div", 12);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 13);
    \u0275\u0275text(31, "Revenus");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(32, "div", 15)(33, "div", 16)(34, "div", 17)(35, "div", 18)(36, "div", 19)(37, "span", 20);
    \u0275\u0275element(38, "i", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 22);
    \u0275\u0275text(40, "Total");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "h3", 23);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "p", 24);
    \u0275\u0275text(44, "Cours cr\xE9\xE9s");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(45, "div", 16)(46, "div", 17)(47, "div", 18)(48, "div", 19)(49, "span", 25);
    \u0275\u0275element(50, "i", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 27);
    \u0275\u0275text(52, "Publi\xE9s");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "h3", 23);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "p", 24);
    \u0275\u0275text(56, "Cours publi\xE9s");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(57, "div", 16)(58, "div", 17)(59, "div", 18)(60, "div", 19)(61, "span", 28);
    \u0275\u0275element(62, "i", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "span", 30);
    \u0275\u0275text(64, "Total");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "h3", 23);
    \u0275\u0275text(66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "p", 24);
    \u0275\u0275text(68, "\xC9tudiants inscrits");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(69, "div", 16)(70, "div", 17)(71, "div", 18)(72, "div", 19)(73, "span", 31);
    \u0275\u0275element(74, "i", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "span", 33);
    \u0275\u0275text(76, "Ce mois");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "h3", 23);
    \u0275\u0275text(78);
    \u0275\u0275pipe(79, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "p", 24);
    \u0275\u0275text(81, "Revenus du mois");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(82, "div", 16)(83, "div", 17)(84, "div", 18)(85, "div", 19)(86, "span", 34);
    \u0275\u0275element(87, "i", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "span", 36);
    \u0275\u0275text(89, "Total");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "h3", 23);
    \u0275\u0275text(91);
    \u0275\u0275pipe(92, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "p", 24);
    \u0275\u0275text(94, "Revenus totaux");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(95, "div", 16)(96, "div", 17)(97, "div", 18)(98, "div", 19)(99, "span", 37);
    \u0275\u0275element(100, "i", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "span", 39);
    \u0275\u0275text(102, "Avg");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "h3", 23);
    \u0275\u0275text(104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "p", 24);
    \u0275\u0275text(106, "Note moyenne");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(107, "div", 16)(108, "div", 17)(109, "div", 18)(110, "div", 19)(111, "span", 40);
    \u0275\u0275element(112, "i", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "span", 42);
    \u0275\u0275text(114, "Taux");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(115, "h3", 23);
    \u0275\u0275text(116);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "p", 24);
    \u0275\u0275text(118, "Taux de compl\xE9tion");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(119, "div", 16)(120, "div", 17)(121, "div", 18)(122, "div", 19)(123, "span", 43);
    \u0275\u0275element(124, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "span", 45);
    \u0275\u0275text(126, "Attente");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(127, "h3", 23);
    \u0275\u0275text(128);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "p", 24);
    \u0275\u0275text(130, "Cours en attente");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(131, "div", 15)(132, "div", 46)(133, "div", 17)(134, "div", 18)(135, "div", 19)(136, "div")(137, "h6", 47);
    \u0275\u0275text(138, "\xC9tudiants par cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "p", 48);
    \u0275\u0275text(140, "Top cours les plus populaires");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(141, "span", 49);
    \u0275\u0275text(142, "Inscriptions");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(143, InstructorDashboardComponent_ng_container_1_apx_chart_143_Template, 1, 11, "apx-chart", 50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(144, "div", 51)(145, "div", 17)(146, "div", 18)(147, "div", 52)(148, "h6", 47);
    \u0275\u0275text(149, "Progression des \xE9tudiants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(150, "p", 48);
    \u0275\u0275text(151, "Distribution de la compl\xE9tion");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(152, InstructorDashboardComponent_ng_container_1_apx_chart_152_Template, 1, 9, "apx-chart", 53)(153, InstructorDashboardComponent_ng_container_1_div_153_Template, 3, 0, "div", 54);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(154, "div", 15)(155, "div", 46)(156, "div", 17)(157, "div", 18)(158, "div", 19)(159, "div")(160, "h6", 47);
    \u0275\u0275text(161, "\xC9volution des revenus");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(162, "p", 48);
    \u0275\u0275text(163, "6 derniers mois");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(164, "span", 55);
    \u0275\u0275text(165, "Revenus");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(166, InstructorDashboardComponent_ng_container_1_apx_chart_166_Template, 1, 10, "apx-chart", 56);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(167, "div", 51)(168, "div", 17)(169, "div", 18)(170, "div", 52)(171, "h6", 47);
    \u0275\u0275text(172, "Statut des cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(173, "p", 48);
    \u0275\u0275text(174, "R\xE9partition par statut");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(175, InstructorDashboardComponent_ng_container_1_apx_chart_175_Template, 1, 9, "apx-chart", 57);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(176, "div", 58)(177, "div", 18)(178, "div", 19)(179, "h6", 47);
    \u0275\u0275text(180, "Mes cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(181, "a", 59);
    \u0275\u0275text(182, "Voir tout");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(183, InstructorDashboardComponent_ng_container_1_div_183_Template, 3, 0, "div", 54)(184, InstructorDashboardComponent_ng_container_1_div_184_Template, 17, 5, "div", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(185, "div", 61)(186, "div", 18)(187, "div", 62)(188, "div")(189, "h6", 47);
    \u0275\u0275text(190, "Mes \xE9tudiants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(191, "p", 48);
    \u0275\u0275text(192);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(193, "div", 63)(194, "input", 64);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorDashboardComponent_ng_container_1_Template_input_ngModelChange_194_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchStudent, $event) || (ctx_r1.searchStudent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(195, "select", 65);
    \u0275\u0275twoWayListener("ngModelChange", function InstructorDashboardComponent_ng_container_1_Template_select_ngModelChange_195_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filterCourse, $event) || (ctx_r1.filterCourse = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(196, "option", 66);
    \u0275\u0275text(197, "Tous les cours");
    \u0275\u0275elementEnd();
    \u0275\u0275template(198, InstructorDashboardComponent_ng_container_1_option_198_Template, 2, 2, "option", 67);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(199, InstructorDashboardComponent_ng_container_1_div_199_Template, 4, 0, "div", 68)(200, InstructorDashboardComponent_ng_container_1_div_200_Template, 17, 2, "div", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.userName.charAt(0).toUpperCase(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Bonjour, ", ctx_r1.userName, " \u{1F44B}");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 29, ctx_r1.userRole));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.totalStudents);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.totalCourses);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20AC", \u0275\u0275pipeBind2(29, 31, ctx_r1.totalRevenue, "1.0-0"));
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r1.totalCourses);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.publishedCourses);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.totalStudents);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("\u20AC", \u0275\u0275pipeBind2(79, 34, ctx_r1.currentMonthRevenue, "1.0-2"));
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1("\u20AC", \u0275\u0275pipeBind2(92, 37, ctx_r1.totalRevenue, "1.0-2"));
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r1.avgRating || "\u2013");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("", ctx_r1.completionRate, "%");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.pendingCourses);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngIf", ctx_r1.enrollmentChart);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.completionDonut);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.students.length === 0);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", ctx_r1.revenueChart);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.statusChart);
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", ctx_r1.routes.instructorMyCourses);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.courses.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.courses.length > 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r1.students.length, " inscription(s) au total");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchStudent);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filterCourse);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.courses);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.students.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.students.length > 0);
  }
}
var InstructorDashboardComponent = class _InstructorDashboardComponent {
  courseService;
  routes = routes;
  chart;
  // ── User info ──
  userName = "";
  userRole = "";
  // ── Stats cards ──
  totalCourses = 0;
  publishedCourses = 0;
  pendingCourses = 0;
  totalStudents = 0;
  totalRevenue = 0;
  currentMonthRevenue = 0;
  avgRating = 0;
  completionRate = 0;
  // ── Raw data ──
  courses = [];
  students = [];
  revenueData = null;
  loading = true;
  // ── Student table filter ──
  searchStudent = "";
  filterCourse = 0;
  get filteredStudents() {
    return this.students.filter((s) => {
      const matchSearch = !this.searchStudent || (s.studentName || "").toLowerCase().includes(this.searchStudent.toLowerCase()) || (s.studentEmail || "").toLowerCase().includes(this.searchStudent.toLowerCase());
      const matchCourse = !this.filterCourse || s.courseId === this.filterCourse;
      return matchSearch && matchCourse;
    });
  }
  // ── Charts ──
  enrollmentChart;
  revenueChart;
  completionDonut;
  statusChart;
  constructor(courseService) {
    this.courseService = courseService;
  }
  ngOnInit() {
    this.userName = localStorage.getItem("fullName") || "Instructor";
    this.userRole = localStorage.getItem("role") || "";
    forkJoin({
      courses: this.courseService.getMyCourses(),
      students: this.courseService.getInstructorStudents(),
      revenue: this.courseService.getInstructorRevenue()
    }).subscribe({
      next: ({ courses, students, revenue }) => {
        this.courses = courses || [];
        this.students = students || [];
        this.revenueData = revenue;
        this.computeStats();
        this.buildCharts();
        this.loading = false;
      },
      error: () => {
        this.courseService.getMyCourses().subscribe({
          next: (courses) => {
            this.courses = courses || [];
            this.totalStudents = this.courses.reduce((s, c) => s + (c.enrollmentCount || 0), 0);
            this.computeStats();
            this.buildCharts();
            this.loading = false;
          },
          error: () => {
            this.loading = false;
          }
        });
      }
    });
  }
  computeStats() {
    this.totalCourses = this.courses.length;
    this.publishedCourses = this.courses.filter((c) => c.courseStatus === "PUBLISHED").length;
    this.pendingCourses = this.courses.filter((c) => c.courseStatus === "PENDING_REVIEW").length;
    if (this.revenueData) {
      this.totalStudents = this.revenueData.totalStudents || 0;
      this.totalRevenue = parseFloat(this.revenueData.totalRevenue) || 0;
      this.currentMonthRevenue = parseFloat(this.revenueData.currentMonthRevenue) || 0;
    } else {
      this.totalStudents = this.courses.reduce((s, c) => s + (c.enrollmentCount || 0), 0);
    }
    if (this.students.length > 0) {
      const completed = this.students.filter((s) => s.completed).length;
      this.completionRate = Math.round(completed / this.students.length * 100);
    }
    const rated = this.courses.filter((c) => c.averageRating && c.averageRating > 0);
    if (rated.length > 0) {
      this.avgRating = Math.round(rated.reduce((s, c) => s + c.averageRating, 0) / rated.length * 10) / 10;
    }
  }
  buildCharts() {
    const top = [...this.courses].sort((a, b) => (b.enrollmentCount || 0) - (a.enrollmentCount || 0)).slice(0, 8);
    this.enrollmentChart = {
      chart: { type: "bar", height: 300, toolbar: { show: false } },
      plotOptions: { bar: { borderRadius: 6, horizontal: false, columnWidth: "55%" } },
      series: [{ name: "\xC9tudiants", data: top.map((c) => c.enrollmentCount || 0) }],
      xaxis: {
        categories: top.map((c) => (c.title?.length > 15 ? c.title.substring(0, 13) + "\u2026" : c.title) || "Cours"),
        labels: { style: { fontSize: "11px" } }
      },
      yaxis: { labels: { offsetX: -10 } },
      colors: ["#6366f1"],
      fill: {
        type: "gradient",
        gradient: { shade: "light", type: "vertical", shadeIntensity: 0.3, gradientToColors: ["#8b5cf6"], stops: [0, 100] }
      },
      dataLabels: { enabled: false },
      grid: { borderColor: "#e5e7eb", strokeDashArray: 4 },
      legend: { show: false },
      tooltip: { y: { formatter: (v) => v + " \xE9tudiants" } }
    };
    const monthly = this.revenueData?.monthly || [];
    const lastMonths = this.generateLastMonths(6);
    const revenueMap = new Map(monthly.map((m) => [m.month, parseFloat(m.revenue) || 0]));
    this.revenueChart = {
      chart: { type: "area", height: 280, toolbar: { show: false } },
      series: [{ name: "Revenus (\u20AC)", data: lastMonths.map((m) => revenueMap.get(m) || 0) }],
      stroke: { curve: "smooth", width: 3 },
      xaxis: { categories: lastMonths.map((m) => this.formatMonth(m)), labels: { style: { fontSize: "11px" } } },
      yaxis: { labels: { formatter: (v) => "\u20AC" + v.toFixed(0) } },
      colors: ["#06b6d4"],
      fill: { type: "gradient", gradient: { shadeIntensity: 1, opacityFrom: 0.45, opacityTo: 0.05 } },
      dataLabels: { enabled: false },
      grid: { borderColor: "#e5e7eb", strokeDashArray: 4 },
      tooltip: { y: { formatter: (v) => "\u20AC" + v.toFixed(2) } }
    };
    const completedCount = this.students.filter((s) => s.completed).length;
    const inProgressCount = this.students.filter((s) => !s.completed && (s.completionPercentage || 0) > 0).length;
    const notStartedCount = this.students.filter((s) => !s.completed && !(s.completionPercentage || 0)).length;
    this.completionDonut = {
      chart: { type: "donut", height: 260 },
      series: [completedCount || 0, inProgressCount || 0, notStartedCount || 0],
      labels: ["Compl\xE9t\xE9", "En cours", "Non commenc\xE9"],
      colors: ["#10b981", "#f59e0b", "#6b7280"],
      legend: { position: "bottom", fontSize: "13px" },
      dataLabels: { enabled: true },
      responsive: [{ breakpoint: 480, options: { chart: { height: 220 } } }],
      plotOptions: { pie: { donut: { size: "60%" } } },
      tooltip: { y: { formatter: (v) => v + " \xE9tudiants" } }
    };
    const statusCounts = [
      this.courses.filter((c) => c.courseStatus === "PUBLISHED").length,
      this.courses.filter((c) => c.courseStatus === "PENDING_REVIEW").length,
      this.courses.filter((c) => c.courseStatus === "DRAFT").length,
      this.courses.filter((c) => c.courseStatus === "ARCHIVED").length
    ];
    this.statusChart = {
      chart: { type: "bar", height: 200, toolbar: { show: false } },
      plotOptions: { bar: {
        borderRadius: 4,
        horizontal: true,
        barHeight: "55%",
        distributed: true
      } },
      series: [{ name: "Cours", data: statusCounts }],
      xaxis: { categories: ["Publi\xE9", "En attente", "Brouillon", "Archiv\xE9"], labels: { style: { fontSize: "12px" } } },
      colors: ["#10b981", "#f59e0b", "#9ca3af", "#ef4444"],
      dataLabels: { enabled: true },
      grid: { borderColor: "#e5e7eb", strokeDashArray: 3 },
      legend: { show: false },
      tooltip: { y: { formatter: (v) => v + " cours" } }
    };
  }
  generateLastMonths(n) {
    const months = [];
    const now = /* @__PURE__ */ new Date();
    for (let i = n - 1; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, "0");
      months.push(`${y}-${m}`);
    }
    return months;
  }
  formatMonth(m) {
    const [, mo] = m.split("-");
    const names = ["Jan", "F\xE9v", "Mar", "Avr", "Mai", "Jun", "Jul", "Ao\xFB", "Sep", "Oct", "Nov", "D\xE9c"];
    return names[parseInt(mo) - 1];
  }
  getProgressClass(pct) {
    if (!pct)
      return "bg-secondary";
    if (pct >= 100)
      return "bg-success";
    if (pct >= 50)
      return "bg-primary";
    return "bg-warning";
  }
  getStatusBadge(status) {
    const map = {
      PUBLISHED: "bg-success-transparent text-success",
      PENDING_REVIEW: "bg-warning-transparent text-warning",
      DRAFT: "bg-secondary-transparent text-secondary",
      ARCHIVED: "bg-danger-transparent text-danger"
    };
    return map[status] || "bg-light text-dark";
  }
  getStatusLabel(status) {
    const map = {
      PUBLISHED: "Publi\xE9",
      PENDING_REVIEW: "En attente",
      DRAFT: "Brouillon",
      ARCHIVED: "Archiv\xE9"
    };
    return map[status] || status;
  }
  static \u0275fac = function InstructorDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorDashboardComponent)(\u0275\u0275directiveInject(CourseService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorDashboardComponent, selectors: [["app-instructor-dashboard"]], viewQuery: function InstructorDashboardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chart = _t.first);
    }
  }, decls: 2, vars: 2, consts: [["class", "d-flex justify-content-center align-items-center py-5", 4, "ngIf"], [4, "ngIf"], [1, "d-flex", "justify-content-center", "align-items-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "row", "mb-4"], [1, "col-12"], [1, "card", "border-0", 2, "background", "linear-gradient(135deg,#6366f1,#8b5cf6)", "border-radius", "16px"], [1, "card-body", "d-flex", "align-items-center", "gap-3", "py-4"], [2, "width", "56px", "height", "56px", "border-radius", "50%", "background", "rgba(255,255,255,.2)", "display", "flex", "align-items", "center", "justify-content", "center", "font-size", "22px", "font-weight", "700", "color", "#fff", "flex-shrink", "0"], [1, "mb-1", "text-white", "fw-bold"], [1, "badge", "bg-white", "text-primary"], [1, "ms-auto", "d-none", "d-md-flex", "gap-3", "text-white", "text-end"], [1, "fs-22", "fw-bold"], [1, "fs-12", "opacity-75"], [1, "vr", "opacity-25"], [1, "row", "g-3", "mb-4"], [1, "col-6", "col-xl-3"], [1, "card", "border-0", "h-100"], [1, "card-body"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "icon-box", "bg-primary-transparent"], [1, "ti", "ti-book", "fs-20", "text-primary"], [1, "badge", "bg-primary-transparent", "text-primary", "small"], [1, "fw-bold", "mb-1"], [1, "text-muted", "mb-0", "small"], [1, "icon-box", "bg-success-transparent"], [1, "ti", "ti-rocket", "fs-20", "text-success"], [1, "badge", "bg-success-transparent", "text-success", "small"], [1, "icon-box", "bg-info-transparent"], [1, "ti", "ti-users", "fs-20", "text-info"], [1, "badge", "bg-info-transparent", "text-info", "small"], [1, "icon-box", "bg-warning-transparent"], [1, "ti", "ti-currency-euro", "fs-20", "text-warning"], [1, "badge", "bg-warning-transparent", "text-warning", "small"], [1, "icon-box", 2, "background", "rgba(16,185,129,.12)"], [1, "ti", "ti-chart-bar", "fs-20", 2, "color", "#10b981"], [1, "badge", "small", 2, "background", "rgba(16,185,129,.12)", "color", "#10b981"], [1, "icon-box", 2, "background", "rgba(245,158,11,.12)"], [1, "ti", "ti-star", "fs-20", 2, "color", "#f59e0b"], [1, "badge", "small", 2, "background", "rgba(245,158,11,.12)", "color", "#f59e0b"], [1, "icon-box", 2, "background", "rgba(99,102,241,.12)"], [1, "ti", "ti-trophy", "fs-20", 2, "color", "#6366f1"], [1, "badge", "small", 2, "background", "rgba(99,102,241,.12)", "color", "#6366f1"], [1, "icon-box", "bg-danger-transparent"], [1, "ti", "ti-clock", "fs-20", "text-danger"], [1, "badge", "bg-danger-transparent", "text-danger", "small"], [1, "col-lg-8"], [1, "fw-bold", "mb-0"], [1, "text-muted", "small", "mb-0"], [1, "badge", "bg-primary-transparent", "text-primary"], [3, "series", "chart", "xaxis", "yaxis", "plotOptions", "fill", "colors", "dataLabels", "grid", "legend", "tooltip", 4, "ngIf"], [1, "col-lg-4"], [1, "mb-3"], [3, "series", "chart", "labels", "colors", "legend", "dataLabels", "responsive", "plotOptions", "tooltip", 4, "ngIf"], ["class", "text-center py-4 text-muted", 4, "ngIf"], [1, "badge", 2, "background", "rgba(6,182,212,.12)", "color", "#06b6d4"], [3, "series", "chart", "xaxis", "yaxis", "stroke", "fill", "colors", "dataLabels", "grid", "tooltip", 4, "ngIf"], [3, "series", "chart", "xaxis", "plotOptions", "colors", "dataLabels", "grid", "legend", "tooltip", 4, "ngIf"], [1, "card", "border-0", "mb-4"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "routerLink"], ["class", "table-responsive", 4, "ngIf"], [1, "card", "border-0"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-2", "mb-3"], [1, "d-flex", "gap-2", "flex-wrap"], ["type", "text", "placeholder", "Rechercher un \xE9tudiant...", 1, "form-control", "form-control-sm", 2, "min-width", "200px", 3, "ngModelChange", "ngModel"], [1, "form-select", "form-select-sm", 2, "min-width", "160px", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "text-center py-5 text-muted", 4, "ngIf"], [3, "series", "chart", "xaxis", "yaxis", "plotOptions", "fill", "colors", "dataLabels", "grid", "legend", "tooltip"], [3, "series", "chart", "labels", "colors", "legend", "dataLabels", "responsive", "plotOptions", "tooltip"], [1, "text-center", "py-4", "text-muted"], [1, "ti", "ti-users", "fs-32", "d-block", "mb-2"], [3, "series", "chart", "xaxis", "yaxis", "stroke", "fill", "colors", "dataLabels", "grid", "tooltip"], [3, "series", "chart", "xaxis", "plotOptions", "colors", "dataLabels", "grid", "legend", "tooltip"], [1, "ti", "ti-book", "fs-32", "d-block", "mb-2"], [1, "table-responsive"], [1, "table", "table-hover", "align-middle", "mb-0"], [1, "table-light"], [4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "gap-2"], ["alt", "", 2, "width", "48px", "height", "36px", "object-fit", "cover", "border-radius", "6px", 3, "src"], [1, "fw-medium", "mb-0", "fs-14"], [1, "text-muted", "fs-12"], [1, "fw-semibold"], ["class", "d-flex align-items-center gap-1 text-warning fs-13", 4, "ngIf"], ["class", "text-muted fs-12", 4, "ngIf"], [1, "badge", "small", 3, "ngClass"], [1, "btn", "btn-xs", "btn-outline-secondary", "me-1", 3, "routerLink", "queryParams"], [1, "ti", "ti-edit", "fs-12"], [1, "d-flex", "align-items-center", "gap-1", "text-warning", "fs-13"], [1, "ti", "ti-star-filled"], [1, "text-center", "py-5", "text-muted"], [1, "ti", "ti-users", "fs-40", "d-block", "mb-3"], [1, "mb-0"], [2, "width", "36px", "height", "36px", "border-radius", "50%", "background", "linear-gradient(135deg,#6366f1,#8b5cf6)", "color", "#fff", "display", "flex", "align-items", "center", "justify-content", "center", "font-weight", "700", "font-size", "13px", "flex-shrink", "0"], [1, "fs-13"], [1, "fs-12", "text-muted"], [2, "min-width", "140px"], [1, "progress", "flex-fill", 2, "height", "6px", "border-radius", "3px"], [1, "progress-bar", 3, "ngClass"], [1, "fs-12", "fw-semibold", 2, "min-width", "34px"], ["class", "badge bg-success-transparent text-success", 4, "ngIf"], ["class", "badge bg-warning-transparent text-warning", 4, "ngIf"], ["class", "badge bg-secondary-transparent text-secondary", 4, "ngIf"], [1, "badge", "bg-success-transparent", "text-success"], [1, "ti", "ti-circle-check", "me-1"], [1, "badge", "bg-warning-transparent", "text-warning"], [1, "ti", "ti-loader", "me-1"], [1, "badge", "bg-secondary-transparent", "text-secondary"], ["colspan", "5", 1, "text-center", "text-muted", "py-4"]], template: function InstructorDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, InstructorDashboardComponent_div_0_Template, 2, 0, "div", 0)(1, InstructorDashboardComponent_ng_container_1_Template, 201, 40, "ng-container", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterLink, NgApexchartsModule, ChartComponent, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, SlicePipe, DecimalPipe, TitleCasePipe, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-dashboard", imports: [CommonModule, RouterLink, NgApexchartsModule, FormsModule], template: `<!-- Loading spinner -->\r
<div *ngIf="loading" class="d-flex justify-content-center align-items-center py-5">\r
  <div class="spinner-border text-primary" role="status"></div>\r
</div>\r
\r
<ng-container *ngIf="!loading">\r
\r
<!-- Welcome Banner -->\r
<div class="row mb-4">\r
  <div class="col-12">\r
    <div class="card border-0" style="background: linear-gradient(135deg,#6366f1,#8b5cf6);border-radius:16px;">\r
      <div class="card-body d-flex align-items-center gap-3 py-4">\r
        <div style="width:56px;height:56px;border-radius:50%;background:rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:700;color:#fff;flex-shrink:0;">\r
          {{ userName.charAt(0).toUpperCase() }}\r
        </div>\r
        <div>\r
          <h4 class="mb-1 text-white fw-bold">Bonjour, {{ userName }} \u{1F44B}</h4>\r
          <span class="badge bg-white text-primary">{{ userRole | titlecase }}</span>\r
        </div>\r
        <div class="ms-auto d-none d-md-flex gap-3 text-white text-end">\r
          <div>\r
            <div class="fs-22 fw-bold">{{ totalStudents }}</div>\r
            <div class="fs-12 opacity-75">\xC9tudiants</div>\r
          </div>\r
          <div class="vr opacity-25"></div>\r
          <div>\r
            <div class="fs-22 fw-bold">{{ totalCourses }}</div>\r
            <div class="fs-12 opacity-75">Cours</div>\r
          </div>\r
          <div class="vr opacity-25"></div>\r
          <div>\r
            <div class="fs-22 fw-bold">\u20AC{{ totalRevenue | number:'1.0-0' }}</div>\r
            <div class="fs-12 opacity-75">Revenus</div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Stats Cards -->\r
<div class="row g-3 mb-4">\r
  <div class="col-6 col-xl-3">\r
    <div class="card border-0 h-100">\r
      <div class="card-body">\r
        <div class="d-flex align-items-center justify-content-between mb-3">\r
          <span class="icon-box bg-primary-transparent">\r
            <i class="ti ti-book fs-20 text-primary"></i>\r
          </span>\r
          <span class="badge bg-primary-transparent text-primary small">Total</span>\r
        </div>\r
        <h3 class="fw-bold mb-1">{{ totalCourses }}</h3>\r
        <p class="text-muted mb-0 small">Cours cr\xE9\xE9s</p>\r
      </div>\r
    </div>\r
  </div>\r
  <div class="col-6 col-xl-3">\r
    <div class="card border-0 h-100">\r
      <div class="card-body">\r
        <div class="d-flex align-items-center justify-content-between mb-3">\r
          <span class="icon-box bg-success-transparent">\r
            <i class="ti ti-rocket fs-20 text-success"></i>\r
          </span>\r
          <span class="badge bg-success-transparent text-success small">Publi\xE9s</span>\r
        </div>\r
        <h3 class="fw-bold mb-1">{{ publishedCourses }}</h3>\r
        <p class="text-muted mb-0 small">Cours publi\xE9s</p>\r
      </div>\r
    </div>\r
  </div>\r
  <div class="col-6 col-xl-3">\r
    <div class="card border-0 h-100">\r
      <div class="card-body">\r
        <div class="d-flex align-items-center justify-content-between mb-3">\r
          <span class="icon-box bg-info-transparent">\r
            <i class="ti ti-users fs-20 text-info"></i>\r
          </span>\r
          <span class="badge bg-info-transparent text-info small">Total</span>\r
        </div>\r
        <h3 class="fw-bold mb-1">{{ totalStudents }}</h3>\r
        <p class="text-muted mb-0 small">\xC9tudiants inscrits</p>\r
      </div>\r
    </div>\r
  </div>\r
  <div class="col-6 col-xl-3">\r
    <div class="card border-0 h-100">\r
      <div class="card-body">\r
        <div class="d-flex align-items-center justify-content-between mb-3">\r
          <span class="icon-box bg-warning-transparent">\r
            <i class="ti ti-currency-euro fs-20 text-warning"></i>\r
          </span>\r
          <span class="badge bg-warning-transparent text-warning small">Ce mois</span>\r
        </div>\r
        <h3 class="fw-bold mb-1">\u20AC{{ currentMonthRevenue | number:'1.0-2' }}</h3>\r
        <p class="text-muted mb-0 small">Revenus du mois</p>\r
      </div>\r
    </div>\r
  </div>\r
  <div class="col-6 col-xl-3">\r
    <div class="card border-0 h-100">\r
      <div class="card-body">\r
        <div class="d-flex align-items-center justify-content-between mb-3">\r
          <span class="icon-box" style="background:rgba(16,185,129,.12);">\r
            <i class="ti ti-chart-bar fs-20" style="color:#10b981;"></i>\r
          </span>\r
          <span class="badge small" style="background:rgba(16,185,129,.12);color:#10b981;">Total</span>\r
        </div>\r
        <h3 class="fw-bold mb-1">\u20AC{{ totalRevenue | number:'1.0-2' }}</h3>\r
        <p class="text-muted mb-0 small">Revenus totaux</p>\r
      </div>\r
    </div>\r
  </div>\r
  <div class="col-6 col-xl-3">\r
    <div class="card border-0 h-100">\r
      <div class="card-body">\r
        <div class="d-flex align-items-center justify-content-between mb-3">\r
          <span class="icon-box" style="background:rgba(245,158,11,.12);">\r
            <i class="ti ti-star fs-20" style="color:#f59e0b;"></i>\r
          </span>\r
          <span class="badge small" style="background:rgba(245,158,11,.12);color:#f59e0b;">Avg</span>\r
        </div>\r
        <h3 class="fw-bold mb-1">{{ avgRating || '\u2013' }}</h3>\r
        <p class="text-muted mb-0 small">Note moyenne</p>\r
      </div>\r
    </div>\r
  </div>\r
  <div class="col-6 col-xl-3">\r
    <div class="card border-0 h-100">\r
      <div class="card-body">\r
        <div class="d-flex align-items-center justify-content-between mb-3">\r
          <span class="icon-box" style="background:rgba(99,102,241,.12);">\r
            <i class="ti ti-trophy fs-20" style="color:#6366f1;"></i>\r
          </span>\r
          <span class="badge small" style="background:rgba(99,102,241,.12);color:#6366f1;">Taux</span>\r
        </div>\r
        <h3 class="fw-bold mb-1">{{ completionRate }}%</h3>\r
        <p class="text-muted mb-0 small">Taux de compl\xE9tion</p>\r
      </div>\r
    </div>\r
  </div>\r
  <div class="col-6 col-xl-3">\r
    <div class="card border-0 h-100">\r
      <div class="card-body">\r
        <div class="d-flex align-items-center justify-content-between mb-3">\r
          <span class="icon-box bg-danger-transparent">\r
            <i class="ti ti-clock fs-20 text-danger"></i>\r
          </span>\r
          <span class="badge bg-danger-transparent text-danger small">Attente</span>\r
        </div>\r
        <h3 class="fw-bold mb-1">{{ pendingCourses }}</h3>\r
        <p class="text-muted mb-0 small">Cours en attente</p>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Charts Row 1 -->\r
<div class="row g-3 mb-4">\r
  <div class="col-lg-8">\r
    <div class="card border-0 h-100">\r
      <div class="card-body">\r
        <div class="d-flex align-items-center justify-content-between mb-3">\r
          <div>\r
            <h6 class="fw-bold mb-0">\xC9tudiants par cours</h6>\r
            <p class="text-muted small mb-0">Top cours les plus populaires</p>\r
          </div>\r
          <span class="badge bg-primary-transparent text-primary">Inscriptions</span>\r
        </div>\r
        <apx-chart *ngIf="enrollmentChart"\r
          [series]="enrollmentChart.series"\r
          [chart]="enrollmentChart.chart"\r
          [xaxis]="enrollmentChart.xaxis"\r
          [yaxis]="enrollmentChart.yaxis"\r
          [plotOptions]="enrollmentChart.plotOptions"\r
          [fill]="enrollmentChart.fill"\r
          [colors]="enrollmentChart.colors"\r
          [dataLabels]="enrollmentChart.dataLabels"\r
          [grid]="enrollmentChart.grid"\r
          [legend]="enrollmentChart.legend"\r
          [tooltip]="enrollmentChart.tooltip"\r
        ></apx-chart>\r
      </div>\r
    </div>\r
  </div>\r
  <div class="col-lg-4">\r
    <div class="card border-0 h-100">\r
      <div class="card-body">\r
        <div class="mb-3">\r
          <h6 class="fw-bold mb-0">Progression des \xE9tudiants</h6>\r
          <p class="text-muted small mb-0">Distribution de la compl\xE9tion</p>\r
        </div>\r
        <apx-chart *ngIf="completionDonut"\r
          [series]="completionDonut.series"\r
          [chart]="completionDonut.chart"\r
          [labels]="completionDonut.labels"\r
          [colors]="completionDonut.colors"\r
          [legend]="completionDonut.legend"\r
          [dataLabels]="completionDonut.dataLabels"\r
          [responsive]="completionDonut.responsive"\r
          [plotOptions]="completionDonut.plotOptions"\r
          [tooltip]="completionDonut.tooltip"\r
        ></apx-chart>\r
        <div *ngIf="students.length === 0" class="text-center py-4 text-muted">\r
          <i class="ti ti-users fs-32 d-block mb-2"></i>\r
          Aucun \xE9tudiant inscrit\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Charts Row 2 -->\r
<div class="row g-3 mb-4">\r
  <div class="col-lg-8">\r
    <div class="card border-0 h-100">\r
      <div class="card-body">\r
        <div class="d-flex align-items-center justify-content-between mb-3">\r
          <div>\r
            <h6 class="fw-bold mb-0">\xC9volution des revenus</h6>\r
            <p class="text-muted small mb-0">6 derniers mois</p>\r
          </div>\r
          <span class="badge" style="background:rgba(6,182,212,.12);color:#06b6d4;">Revenus</span>\r
        </div>\r
        <apx-chart *ngIf="revenueChart"\r
          [series]="revenueChart.series"\r
          [chart]="revenueChart.chart"\r
          [xaxis]="revenueChart.xaxis"\r
          [yaxis]="revenueChart.yaxis"\r
          [stroke]="revenueChart.stroke"\r
          [fill]="revenueChart.fill"\r
          [colors]="revenueChart.colors"\r
          [dataLabels]="revenueChart.dataLabels"\r
          [grid]="revenueChart.grid"\r
          [tooltip]="revenueChart.tooltip"\r
        ></apx-chart>\r
      </div>\r
    </div>\r
  </div>\r
  <div class="col-lg-4">\r
    <div class="card border-0 h-100">\r
      <div class="card-body">\r
        <div class="mb-3">\r
          <h6 class="fw-bold mb-0">Statut des cours</h6>\r
          <p class="text-muted small mb-0">R\xE9partition par statut</p>\r
        </div>\r
        <apx-chart *ngIf="statusChart"\r
          [series]="statusChart.series"\r
          [chart]="statusChart.chart"\r
          [xaxis]="statusChart.xaxis"\r
          [plotOptions]="statusChart.plotOptions"\r
          [colors]="statusChart.colors"\r
          [dataLabels]="statusChart.dataLabels"\r
          [grid]="statusChart.grid"\r
          [legend]="statusChart.legend"\r
          [tooltip]="statusChart.tooltip"\r
        ></apx-chart>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- My Courses Table -->\r
<div class="card border-0 mb-4">\r
  <div class="card-body">\r
    <div class="d-flex align-items-center justify-content-between mb-3">\r
      <h6 class="fw-bold mb-0">Mes cours</h6>\r
      <a [routerLink]="routes.instructorMyCourses" class="btn btn-sm btn-outline-primary">Voir tout</a>\r
    </div>\r
    <div *ngIf="courses.length === 0" class="text-center py-4 text-muted">\r
      <i class="ti ti-book fs-32 d-block mb-2"></i>Aucun cours cr\xE9\xE9.\r
    </div>\r
    <div class="table-responsive" *ngIf="courses.length > 0">\r
      <table class="table table-hover align-middle mb-0">\r
        <thead class="table-light">\r
          <tr>\r
            <th>Cours</th>\r
            <th>\xC9tudiants</th>\r
            <th>Note</th>\r
            <th>Statut</th>\r
            <th>Actions</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let c of courses | slice:0:8">\r
            <td>\r
              <div class="d-flex align-items-center gap-2">\r
                <img [src]="c.coverImageUrl || 'assets/img/course/course-01.jpg'" alt="" style="width:48px;height:36px;object-fit:cover;border-radius:6px;">\r
                <div>\r
                  <p class="fw-medium mb-0 fs-14">{{ c.title }}</p>\r
                  <span class="text-muted fs-12">{{ c.category?.name || '' }}</span>\r
                </div>\r
              </div>\r
            </td>\r
            <td><span class="fw-semibold">{{ c.enrollmentCount || 0 }}</span></td>\r
            <td>\r
              <span *ngIf="c.averageRating" class="d-flex align-items-center gap-1 text-warning fs-13">\r
                <i class="ti ti-star-filled"></i> {{ c.averageRating | number:'1.1-1' }}\r
              </span>\r
              <span *ngIf="!c.averageRating" class="text-muted fs-12">\u2013</span>\r
            </td>\r
            <td>\r
              <span class="badge small" [ngClass]="getStatusBadge(c.courseStatus)">{{ getStatusLabel(c.courseStatus) }}</span>\r
            </td>\r
            <td>\r
              <a [routerLink]="['/instructor/instructor-my-courses']" [queryParams]="{id: c.id}" class="btn btn-xs btn-outline-secondary me-1">\r
                <i class="ti ti-edit fs-12"></i>\r
              </a>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- Students Table -->\r
<div class="card border-0">\r
  <div class="card-body">\r
    <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">\r
      <div>\r
        <h6 class="fw-bold mb-0">Mes \xE9tudiants</h6>\r
        <p class="text-muted small mb-0">{{ students.length }} inscription(s) au total</p>\r
      </div>\r
      <div class="d-flex gap-2 flex-wrap">\r
        <input type="text" class="form-control form-control-sm"\r
               placeholder="Rechercher un \xE9tudiant..."\r
               [(ngModel)]="searchStudent" style="min-width:200px;">\r
        <select class="form-select form-select-sm" [(ngModel)]="filterCourse" style="min-width:160px;">\r
          <option [ngValue]="0">Tous les cours</option>\r
          <option *ngFor="let c of courses" [ngValue]="c.id">{{ c.title }}</option>\r
        </select>\r
      </div>\r
    </div>\r
\r
    <div *ngIf="students.length === 0" class="text-center py-5 text-muted">\r
      <i class="ti ti-users fs-40 d-block mb-3"></i>\r
      <p class="mb-0">Aucun \xE9tudiant inscrit pour le moment.</p>\r
    </div>\r
\r
    <div class="table-responsive" *ngIf="students.length > 0">\r
      <table class="table table-hover align-middle mb-0">\r
        <thead class="table-light">\r
          <tr>\r
            <th>\xC9tudiant</th>\r
            <th>Cours</th>\r
            <th>Inscrit le</th>\r
            <th>Progression</th>\r
            <th>Statut</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let s of filteredStudents">\r
            <td>\r
              <div class="d-flex align-items-center gap-2">\r
                <div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">\r
                  {{ s.studentName?.charAt(0)?.toUpperCase() || 'E' }}\r
                </div>\r
                <div>\r
                  <p class="fw-medium mb-0 fs-14">{{ s.studentName }}</p>\r
                  <span class="text-muted fs-12">{{ s.studentEmail }}</span>\r
                </div>\r
              </div>\r
            </td>\r
            <td><span class="fs-13">{{ s.courseTitle }}</span></td>\r
            <td><span class="fs-12 text-muted">{{ s.enrolledAt | date:'dd/MM/yyyy' }}</span></td>\r
            <td style="min-width:140px;">\r
              <div class="d-flex align-items-center gap-2">\r
                <div class="progress flex-fill" style="height:6px;border-radius:3px;">\r
                  <div class="progress-bar" [ngClass]="getProgressClass(s.completionPercentage)"\r
                    [style.width.%]="s.completionPercentage || 0"></div>\r
                </div>\r
                <span class="fs-12 fw-semibold" style="min-width:34px;">{{ (s.completionPercentage || 0) | number:'1.0-0' }}%</span>\r
              </div>\r
            </td>\r
            <td>\r
              <span *ngIf="s.completed" class="badge bg-success-transparent text-success">\r
                <i class="ti ti-circle-check me-1"></i>Compl\xE9t\xE9\r
              </span>\r
              <span *ngIf="!s.completed && (s.completionPercentage || 0) > 0" class="badge bg-warning-transparent text-warning">\r
                <i class="ti ti-loader me-1"></i>En cours\r
              </span>\r
              <span *ngIf="!s.completed && !(s.completionPercentage || 0)" class="badge bg-secondary-transparent text-secondary">\r
                Non commenc\xE9\r
              </span>\r
            </td>\r
          </tr>\r
          <tr *ngIf="filteredStudents.length === 0">\r
            <td colspan="5" class="text-center text-muted py-4">Aucun r\xE9sultat pour cette recherche.</td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </div>\r
</div>\r
\r
</ng-container>\r
\r
` }]
  }], () => [{ type: CourseService }], { chart: [{
    type: ViewChild,
    args: ["chart"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorDashboardComponent, { className: "InstructorDashboardComponent", filePath: "src/app/features/instructor/instructor-dashboard/instructor-dashboard.component.ts", lineNumber: 40 });
})();
export {
  InstructorDashboardComponent
};
//# sourceMappingURL=chunk-RPT4SLZF.js.map
