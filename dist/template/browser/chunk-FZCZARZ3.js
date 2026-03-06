import {
  ProfileService
} from "./chunk-TQDXDFIT.js";
import "./chunk-MFSRU4HL.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-TPKO67I6.js";
import "./chunk-QFZWCWB7.js";
import "./chunk-PXFMCAI3.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-YBJXKBE2.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/pages/instructor-details/instructor-details.component.ts
var _c0 = (a0) => ["/course/course-details", a0];
function InstructorDetailsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementEnd();
  }
}
function InstructorDetailsComponent_div_2_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "a", 42);
    \u0275\u0275element(2, "i", 43);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r0.instructor.facebookUrl, \u0275\u0275sanitizeUrl);
  }
}
function InstructorDetailsComponent_div_2_span_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "a", 42);
    \u0275\u0275element(2, "i", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r0.instructor.instagramUrl, \u0275\u0275sanitizeUrl);
  }
}
function InstructorDetailsComponent_div_2_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "a", 42);
    \u0275\u0275element(2, "i", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r0.instructor.twitterUrl, \u0275\u0275sanitizeUrl);
  }
}
function InstructorDetailsComponent_div_2_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "a", 42);
    \u0275\u0275element(2, "i", 46);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r0.instructor.youtubeUrl, \u0275\u0275sanitizeUrl);
  }
}
function InstructorDetailsComponent_div_2_span_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "a", 47);
    \u0275\u0275element(2, "i", 48);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r0.instructor.linkedinUrl, \u0275\u0275sanitizeUrl);
  }
}
function InstructorDetailsComponent_div_2_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "h5", 34);
    \u0275\u0275text(3, "About Me");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 34);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.instructor.aboutMe);
  }
}
function InstructorDetailsComponent_div_2_div_41_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "div")(2, "h6", 52);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const edu_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(edu_r2.degree);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", edu_r2.school, " - (", edu_r2.year, ")");
  }
}
function InstructorDetailsComponent_div_2_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "h5", 34);
    \u0275\u0275text(3, "Education");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 49);
    \u0275\u0275template(5, InstructorDetailsComponent_div_2_div_41_div_5_Template, 6, 3, "div", 50);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r0.education);
  }
}
function InstructorDetailsComponent_div_2_div_42_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "span", 55);
    \u0275\u0275element(2, "i", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "h6", 52);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const exp_r3 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(exp_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", exp_r3.company, " - (", exp_r3.period, ")");
  }
}
function InstructorDetailsComponent_div_2_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "h5", 34);
    \u0275\u0275text(3, "Experience");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, InstructorDetailsComponent_div_2_div_42_div_4_Template, 8, 3, "div", 53);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.experience);
  }
}
function InstructorDetailsComponent_div_2_div_43_div_5_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4.categoryName);
  }
}
function InstructorDetailsComponent_div_2_div_43_div_5_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4.level);
  }
}
function InstructorDetailsComponent_div_2_div_43_div_5_h6_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6", 77);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("$", c_r4.price);
  }
}
function InstructorDetailsComponent_div_2_div_43_div_5_h6_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6", 78);
    \u0275\u0275text(1, "Free");
    \u0275\u0275elementEnd();
  }
}
function InstructorDetailsComponent_div_2_div_43_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61)(2, "div", 62)(3, "a", 63);
    \u0275\u0275element(4, "img", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 65);
    \u0275\u0275template(6, InstructorDetailsComponent_div_2_div_43_div_5_span_6_Template, 2, 1, "span", 66)(7, InstructorDetailsComponent_div_2_div_43_div_5_span_7_Template, 2, 1, "span", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h5", 67)(9, "a", 63);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 25);
    \u0275\u0275element(12, "i", 68);
    \u0275\u0275elementStart(13, "p", 69);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "i", 70);
    \u0275\u0275elementStart(16, "p", 69);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 71);
    \u0275\u0275template(19, InstructorDetailsComponent_div_2_div_43_div_5_h6_19_Template, 2, 1, "h6", 72)(20, InstructorDetailsComponent_div_2_div_43_div_5_h6_20_Template, 2, 0, "h6", 73);
    \u0275\u0275elementStart(21, "a", 74);
    \u0275\u0275text(22, "View Course");
    \u0275\u0275element(23, "i", 75);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c0, c_r4.id));
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.getThumbnailUrl(c_r4.thumbnail), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", c_r4.categoryName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r4.level);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(13, _c0, c_r4.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", c_r4.studentCount, " Students");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", c_r4.lessonCount, " Lessons");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", c_r4.price > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r4.price === 0);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c0, c_r4.id));
  }
}
function InstructorDetailsComponent_div_2_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 58)(2, "h5", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 6);
    \u0275\u0275template(5, InstructorDetailsComponent_div_2_div_43_div_5_Template, 24, 17, "div", 59);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Courses (", ctx_r0.courses.length, ")");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.courses);
  }
}
function InstructorDetailsComponent_div_2_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "span", 79);
    \u0275\u0275element(2, "i", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "h6", 81);
    \u0275\u0275text(5, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 81);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.instructor.email);
  }
}
function InstructorDetailsComponent_div_2_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "span", 79);
    \u0275\u0275element(2, "i", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "h6", 83);
    \u0275\u0275text(5, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 84);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.instructor.address);
  }
}
function InstructorDetailsComponent_div_2_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "span", 79);
    \u0275\u0275element(2, "i", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "h6", 83);
    \u0275\u0275text(5, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 81);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.instructor.phone);
  }
}
function InstructorDetailsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "div", 8)(4, "div", 9)(5, "div", 10)(6, "a", 11);
    \u0275\u0275element(7, "img", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 13)(9, "div", 14)(10, "div", 15)(11, "h6", 16)(12, "a", 11);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 17)(15, "a", 18);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 19);
    \u0275\u0275element(18, "i", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 21);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div")(22, "p");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 22)(25, "div", 23)(26, "span", 24)(27, "span", 25);
    \u0275\u0275element(28, "i", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 25)(31, "span", 25);
    \u0275\u0275element(32, "i", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 25);
    \u0275\u0275template(35, InstructorDetailsComponent_div_2_span_35_Template, 3, 1, "span", 28)(36, InstructorDetailsComponent_div_2_span_36_Template, 3, 1, "span", 28)(37, InstructorDetailsComponent_div_2_span_37_Template, 3, 1, "span", 28)(38, InstructorDetailsComponent_div_2_span_38_Template, 3, 1, "span", 28)(39, InstructorDetailsComponent_div_2_span_39_Template, 3, 1, "span", 28);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(40, InstructorDetailsComponent_div_2_div_40_Template, 6, 1, "div", 29)(41, InstructorDetailsComponent_div_2_div_41_Template, 6, 1, "div", 29)(42, InstructorDetailsComponent_div_2_div_42_Template, 5, 1, "div", 29)(43, InstructorDetailsComponent_div_2_div_43_Template, 6, 2, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 31)(45, "div", 32)(46, "div", 33)(47, "h5", 34);
    \u0275\u0275text(48, "Contact Details");
    \u0275\u0275elementEnd();
    \u0275\u0275template(49, InstructorDetailsComponent_div_2_div_49_Template, 8, 1, "div", 35)(50, InstructorDetailsComponent_div_2_div_50_Template, 8, 1, "div", 35)(51, InstructorDetailsComponent_div_2_div_51_Template, 8, 1, "div", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 32)(53, "div", 33)(54, "h5", 34);
    \u0275\u0275text(55, "Statistics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 37);
    \u0275\u0275element(57, "i", 38);
    \u0275\u0275elementStart(58, "span");
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 37);
    \u0275\u0275element(61, "i", 39);
    \u0275\u0275elementStart(62, "span");
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 37);
    \u0275\u0275element(65, "i", 40);
    \u0275\u0275elementStart(66, "span");
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 25);
    \u0275\u0275element(69, "i", 41);
    \u0275\u0275elementStart(70, "span");
    \u0275\u0275text(71);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("src", ctx_r0.getAvatarUrl(ctx_r0.instructor.avatarPath), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.instructor.fullName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.instructor.designation || "Instructor");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r0.instructor.averageRating, " (", ctx_r0.instructor.totalReviews, " Reviews)");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.instructor.bio || "No bio available.");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.instructor.totalLessons, "+ Lesson ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.instructor.totalStudents, " Students ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.instructor.facebookUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.instructor.instagramUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.instructor.twitterUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.instructor.youtubeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.instructor.linkedinUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.instructor.aboutMe);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.education.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.experience.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.courses.length > 0);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r0.instructor.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.instructor.address);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.instructor.phone);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r0.instructor.totalCourses, " Courses");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.instructor.totalStudents, " Students");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.instructor.totalLessons, " Lessons");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r0.instructor.averageRating, " (", ctx_r0.instructor.totalReviews, " Reviews)");
  }
}
var InstructorDetailsComponent = class _InstructorDetailsComponent {
  route;
  profileService;
  instructor = null;
  courses = [];
  education = [];
  experience = [];
  loading = true;
  constructor(route, profileService) {
    this.route = route;
    this.profileService = profileService;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("instructorId");
    if (id) {
      this.loadInstructor(+id);
    }
  }
  loadInstructor(id) {
    this.loading = true;
    this.profileService.getInstructorProfile(id).subscribe({
      next: (data) => {
        this.instructor = data;
        this.courses = data.courses || [];
        try {
          this.education = JSON.parse(data.educationJson || "[]");
        } catch {
          this.education = [];
        }
        try {
          this.experience = JSON.parse(data.experienceJson || "[]");
        } catch {
          this.experience = [];
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  getAvatarUrl(path) {
    if (!path)
      return "assets/img/user/user-61.jpg";
    if (path.startsWith("http"))
      return path;
    return "http://localhost:8081/" + (path.startsWith("/") ? path.substring(1) : path);
  }
  getThumbnailUrl(path) {
    if (!path)
      return "assets/img/course/course-02.jpg";
    if (path.startsWith("http"))
      return path;
    return "http://localhost:8081/" + (path.startsWith("/") ? path.substring(1) : path);
  }
  static \u0275fac = function InstructorDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InstructorDetailsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ProfileService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstructorDetailsComponent, selectors: [["app-instructor-details"]], decls: 3, vars: 2, consts: [[1, "instructor-detail-content"], ["class", "text-center py-5", 4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "container"], [1, "row"], [1, "col-lg-8"], [1, "card", "bg-light", "mb-4"], [1, "card-body", "instructor-details"], [1, "instructor-img"], ["href", "javascript:void(0);"], ["alt", "img", 1, "img-fluid", 3, "src"], [1, "flex-fill"], [1, "pb-3", "border-bottom", "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-1"], [1, "fw-bold"], [1, "d-flex", "align-items-center", "mb-1"], ["href", "javascript:void(0);", 1, "fs-14", "me-2"], [1, "me-2"], [1, "fa-solid", "fa-star", "text-warning"], [1, "fs-14"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap"], [1, "d-flex", "align-items-center", "counts-details"], [1, "d-flex", "align-items-center", "me-4"], [1, "d-flex", "align-items-center"], [1, "isax", "isax-book-saved5", "fs-16", "text-secondary", "me-2"], [1, "isax", "isax-profile-2user5", "fs-16", "text-secondary", "me-2"], [4, "ngIf"], ["class", "card", 4, "ngIf"], ["class", "card border-0", 4, "ngIf"], [1, "col-lg-4"], [1, "card"], [1, "card-body"], [1, "mb-3"], ["class", "d-flex align-items-center mb-4", 4, "ngIf"], ["class", "d-flex align-items-center", 4, "ngIf"], [1, "d-flex", "align-items-center", "mb-3"], [1, "isax", "isax-book-saved5", "fs-20", "text-secondary", "me-2"], [1, "isax", "isax-profile-2user5", "fs-20", "text-secondary", "me-2"], [1, "isax", "isax-book", "fs-20", "text-secondary", "me-2"], [1, "fa-solid", "fa-star", "text-warning", "fs-20", "me-2"], ["target", "_blank", 1, "rounded-circle", "d-inline-flex", "align-items-center", "justify-content-center", "me-2", 3, "href"], [1, "fa-brands", "fa-facebook-f"], [1, "fa-brands", "fa-instagram"], [1, "fa-brands", "fa-x-twitter"], [1, "fa-brands", "fa-youtube"], ["target", "_blank", 1, "rounded-circle", "d-inline-flex", "align-items-center", "justify-content-center", 3, "href"], [1, "fa-brands", "fa-linkedin-in"], [1, "education-flow"], ["class", "ps-4 pb-4 timeline-flow", 4, "ngFor", "ngForOf"], [1, "ps-4", "pb-4", "timeline-flow"], [1, "mb-1"], ["class", "d-flex align-items-center mb-4", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "mb-4"], [1, "bg-light", "border", "avatar", "avatar-lg", "text-gray-9", "flex-shrink-0", "me-3"], [1, "isax", "isax-briefcase"], [1, "card", "border-0"], [1, "card-body", "p-0"], ["class", "col-md-6 mb-3", 4, "ngFor", "ngForOf"], [1, "col-md-6", "mb-3"], [1, "course-item", "course-item-three"], [1, "course-carousal-img", "position-relative", "overflow-hidden", "rounded-3", "mb-3"], [3, "routerLink"], ["alt", "img", 1, "img-fluid", "rounded-3", 3, "src"], [1, "d-flex", "flex-wrap", "align-items-center", "justify-content-between"], ["class", "tag-btn", 4, "ngIf"], [1, "mt-3", "mb-2", "text-truncate", "line-clamb-2"], [1, "isax", "isax-profile-2user5", "fs-14", "text-muted", "me-1"], [1, "ms-1", "small"], [1, "isax", "isax-book-saved5", "fs-14", "text-muted", "ms-3", "me-1"], [1, "d-flex", "justify-content-between", "mt-3", "align-items-center"], ["class", "fs-16 text-secondary", 4, "ngIf"], ["class", "fs-16 text-success", 4, "ngIf"], [1, "btn", "view-course-btn", 3, "routerLink"], [1, "fs-8", "fas", "fa-angle-right", "ms-2"], [1, "tag-btn"], [1, "fs-16", "text-secondary"], [1, "fs-16", "text-success"], [1, "contact-icon", "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "me-3"], [1, "fa-regular", "fa-envelope"], [1, "mb-0"], [1, "isax", "isax-location"], [1, "fs-16", "fw-medium", "text-gray-9", "mb-0"], [1, "mb-0", "text-truncate"], [1, "isax", "isax-call"]], template: function InstructorDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, InstructorDetailsComponent_div_1_Template, 2, 0, "div", 1)(2, InstructorDetailsComponent_div_2_Template, 72, 25, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.instructor && !ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InstructorDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-instructor-details", imports: [CommonModule, RouterLink], template: `<div class="instructor-detail-content">

    <!-- Loading -->
    <div *ngIf="loading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status"></div>
    </div>

    <div class="container" *ngIf="instructor && !loading">
        <div class="row">
            <div class="col-lg-8">
                <div class="card bg-light mb-4">
                    <div class="card-body instructor-details">
                        <div class="instructor-img">
                            <a href="javascript:void(0);">
                                <img [src]="getAvatarUrl(instructor.avatarPath)" alt="img" class="img-fluid">
                            </a>
                        </div>
                        <div class="flex-fill">
                            <div class="pb-3 border-bottom mb-3">
                                <div class="d-flex align-items-center justify-content-between mb-1">
                                    <h6 class="fw-bold"><a href="javascript:void(0);">{{ instructor.fullName }}</a></h6>
                                </div>
                                <div class="d-flex align-items-center mb-1">
                                    <a href="javascript:void(0);" class="fs-14 me-2">{{ instructor.designation || 'Instructor' }}</a>
                                    <span class="me-2">
                                        <i class="fa-solid fa-star text-warning"></i>
                                    </span>
                                    <span class="fs-14">{{ instructor.averageRating }} ({{ instructor.totalReviews }} Reviews)</span>
                                </div>
                                <div>
                                    <p>{{ instructor.bio || 'No bio available.' }}</p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center justify-content-between flex-wrap">
                                <div class="d-flex align-items-center counts-details">
                                    <span class="d-flex align-items-center me-4">
                                        <span class="d-flex align-items-center"><i class="isax isax-book-saved5 fs-16 text-secondary me-2"></i></span>
                                        {{ instructor.totalLessons }}+ Lesson
                                    </span>
                                    <span class="d-flex align-items-center">
                                        <span class="d-flex align-items-center"><i class="isax isax-profile-2user5 fs-16 text-secondary me-2"></i></span>
                                        {{ instructor.totalStudents }} Students
                                    </span>
                                </div>
                                <div class="d-flex align-items-center">
                                    <span *ngIf="instructor.facebookUrl">
                                        <a [href]="instructor.facebookUrl" target="_blank" class="rounded-circle d-inline-flex align-items-center justify-content-center me-2">
                                            <i class="fa-brands fa-facebook-f"></i>
                                        </a>
                                    </span>
                                    <span *ngIf="instructor.instagramUrl">
                                        <a [href]="instructor.instagramUrl" target="_blank" class="rounded-circle d-inline-flex align-items-center justify-content-center me-2">
                                            <i class="fa-brands fa-instagram"></i>
                                        </a>
                                    </span>
                                    <span *ngIf="instructor.twitterUrl">
                                        <a [href]="instructor.twitterUrl" target="_blank" class="rounded-circle d-inline-flex align-items-center justify-content-center me-2">
                                            <i class="fa-brands fa-x-twitter"></i>
                                        </a>
                                    </span>
                                    <span *ngIf="instructor.youtubeUrl">
                                        <a [href]="instructor.youtubeUrl" target="_blank" class="rounded-circle d-inline-flex align-items-center justify-content-center me-2">
                                            <i class="fa-brands fa-youtube"></i>
                                        </a>
                                    </span>
                                    <span *ngIf="instructor.linkedinUrl">
                                        <a [href]="instructor.linkedinUrl" target="_blank" class="rounded-circle d-inline-flex align-items-center justify-content-center">
                                            <i class="fa-brands fa-linkedin-in"></i>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card" *ngIf="instructor.aboutMe">
                    <div class="card-body">
                        <h5 class="mb-3">About Me</h5>
                        <p class="mb-3">{{ instructor.aboutMe }}</p>
                    </div>
                </div>

                <div class="card" *ngIf="education.length > 0">
                    <div class="card-body">
                        <h5 class="mb-3">Education</h5>
                        <div class="education-flow">
                            <div class="ps-4 pb-4 timeline-flow" *ngFor="let edu of education">
                                <div>
                                    <h6 class="mb-1">{{ edu.degree }}</h6>
                                    <p class="fs-14">{{ edu.school }} - ({{ edu.year }})</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card" *ngIf="experience.length > 0">
                    <div class="card-body">
                        <h5 class="mb-3">Experience</h5>
                        <div class="d-flex align-items-center mb-4" *ngFor="let exp of experience">
                            <span class="bg-light border avatar avatar-lg text-gray-9 flex-shrink-0 me-3"><i class="isax isax-briefcase"></i></span>
                            <div>
                                <h6 class="mb-1">{{ exp.title }}</h6>
                                <p>{{ exp.company }} - ({{ exp.period }})</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card border-0" *ngIf="courses.length > 0">
                    <div class="card-body p-0">
                        <h5 class="mb-3">Courses ({{ courses.length }})</h5>
                        <div class="row">
                            <div class="col-md-6 mb-3" *ngFor="let c of courses">
                                <div class="course-item course-item-three">
                                    <div class="course-carousal-img position-relative overflow-hidden rounded-3 mb-3">
                                        <a [routerLink]="['/course/course-details', c.id]"><img class="img-fluid rounded-3" [src]="getThumbnailUrl(c.thumbnail)" alt="img"></a>
                                    </div>
                                    <div class="d-flex flex-wrap align-items-center justify-content-between">
                                        <span class="tag-btn" *ngIf="c.categoryName">{{ c.categoryName }}</span>
                                        <span class="tag-btn" *ngIf="c.level">{{ c.level }}</span>
                                    </div>
                                    <h5 class="mt-3 mb-2 text-truncate line-clamb-2">
                                        <a [routerLink]="['/course/course-details', c.id]">{{ c.title }}</a>
                                    </h5>
                                    <div class="d-flex align-items-center">
                                        <i class="isax isax-profile-2user5 fs-14 text-muted me-1"></i>
                                        <p class="ms-1 small">{{ c.studentCount }} Students</p>
                                        <i class="isax isax-book-saved5 fs-14 text-muted ms-3 me-1"></i>
                                        <p class="ms-1 small">{{ c.lessonCount }} Lessons</p>
                                    </div>
                                    <div class="d-flex justify-content-between mt-3 align-items-center">
                                        <h6 class="fs-16 text-secondary" *ngIf="c.price > 0">\${{ c.price }}</h6>
                                        <h6 class="fs-16 text-success" *ngIf="c.price === 0">Free</h6>
                                        <a [routerLink]="['/course/course-details', c.id]" class="btn view-course-btn">View Course<i class="fs-8 fas fa-angle-right ms-2"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="col-lg-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="mb-3">Contact Details</h5>
                        <div class="d-flex align-items-center mb-4" *ngIf="instructor.email">
                            <span class="contact-icon rounded-circle d-flex align-items-center justify-content-center me-3">
                                <i class="fa-regular fa-envelope"></i>
                            </span>
                            <div>
                                <h6 class="mb-0">Email</h6>
                                <p class="mb-0">{{ instructor.email }}</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center mb-4" *ngIf="instructor.address">
                            <span class="contact-icon rounded-circle d-flex align-items-center justify-content-center me-3">
                                <i class="isax isax-location"></i>
                            </span>
                            <div>
                                <h6 class="fs-16 fw-medium text-gray-9 mb-0">Address</h6>
                                <p class="mb-0 text-truncate">{{ instructor.address }}</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center" *ngIf="instructor.phone">
                            <span class="contact-icon rounded-circle d-flex align-items-center justify-content-center me-3">
                                <i class="isax isax-call"></i>
                            </span>
                            <div>
                                <h6 class="fs-16 fw-medium text-gray-9 mb-0">Phone</h6>
                                <p class="mb-0">{{ instructor.phone }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">
                        <h5 class="mb-3">Statistics</h5>
                        <div class="d-flex align-items-center mb-3">
                            <i class="isax isax-book-saved5 fs-20 text-secondary me-2"></i>
                            <span>{{ instructor.totalCourses }} Courses</span>
                        </div>
                        <div class="d-flex align-items-center mb-3">
                            <i class="isax isax-profile-2user5 fs-20 text-secondary me-2"></i>
                            <span>{{ instructor.totalStudents }} Students</span>
                        </div>
                        <div class="d-flex align-items-center mb-3">
                            <i class="isax isax-book fs-20 text-secondary me-2"></i>
                            <span>{{ instructor.totalLessons }} Lessons</span>
                        </div>
                        <div class="d-flex align-items-center">
                            <i class="fa-solid fa-star text-warning fs-20 me-2"></i>
                            <span>{{ instructor.averageRating }} ({{ instructor.totalReviews }} Reviews)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>\r
` }]
  }], () => [{ type: ActivatedRoute }, { type: ProfileService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstructorDetailsComponent, { className: "InstructorDetailsComponent", filePath: "src/app/features/pages/instructor-details/instructor-details.component.ts", lineNumber: 12 });
})();
export {
  InstructorDetailsComponent
};
//# sourceMappingURL=chunk-FZCZARZ3.js.map
