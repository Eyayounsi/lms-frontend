import {
  SlickCarouselComponent,
  SlickCarouselModule,
  SlickItemDirective
} from "./chunk-PRTCGMFX.js";
import {
  routes
} from "./chunk-E6TQA5KL.js";
import "./chunk-VF2E3YWR.js";
import {
  RouterLink
} from "./chunk-TPKO67I6.js";
import "./chunk-QFZWCWB7.js";
import "./chunk-PXFMCAI3.js";
import {
  CommonModule
} from "./chunk-YBJXKBE2.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-5DE2SIVI.js";
import "./chunk-TXDUYLVM.js";

// src/app/features/instructor/students-details/students-details.component.ts
var StudentsDetailsComponent = class _StudentsDetailsComponent {
  routes = routes;
  courseCarousel = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  };
  static \u0275fac = function StudentsDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentsDetailsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentsDetailsComponent, selectors: [["app-students-details"]], decls: 271, vars: 25, consts: [[1, "content", "instructor-detail-content"], [1, "container"], [1, "instructor-profile"], [1, "instructor-profile-bg"], ["src", "assets/img/bg/card-bg-01.png", "alt", "", 1, "instructor-profile-bg-1"], [1, "row", "align-items-center", "row-gap-3"], [1, "col-md-6"], [1, "d-flex", "align-items-center"], [1, "avatar", "flex-shrink-0", "avatar-xxl", "avatar-rounded", "me-3", "border", "border-white", "border-3", "position-relative"], ["src", "assets/img/user/user-01.jpg", "alt", "img"], [1, "verify-tick"], [1, "isax", "isax-verify5"], [1, "mb-1", "text-white", "d-inline-flex", "align-items-center"], [1, "link-light", "fs-16", "ms-2", 3, "routerLink"], [1, "isax", "isax-edit-2"], [1, "text-light"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-3", "justify-content-md-end"], [1, "btn", "btn-white", "rounded-pill", 3, "routerLink"], [1, "btn", "btn-secondary", "rounded-pill", 3, "routerLink"], [1, "d-flex", "align-items-center", "mb-3", 3, "routerLink"], [1, "isax", "isax-arrow-left", "me-1", "fw-bold"], [1, "row"], [1, "col-lg-8"], [1, "instructor-details-item1", "mb-4"], [1, "instructor-details"], [1, "instructor-img"], ["href", "javascript:void(0);"], ["src", "assets/img/students/student-01.jpg", "alt", "img", 1, "img-fluid"], [1, "flex-fill"], [1, "pb-3", "border-bottom", "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-1"], [1, "fs-18", "fw-bold"], [1, "d-flex", "align-items-center", "mb-1"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-wrap"], [1, "d-flex", "align-items-center", "counts-details", "mb-0"], [1, "d-flex", "align-items-center", "me-4"], [1, "isax", "isax-book5", "text-primary", "me-1"], ["href", "javascript:void(0);", 1, "rounded-circle", "d-inline-flex", "align-items-center", "justify-content-center", "p-1", "me-2"], [1, "fa-brands", "fa-facebook-f"], [1, "fa-brands", "fa-instagram"], [1, "fa-brands", "fa-x-twitter"], [1, "fa-brands", "fa-youtube"], ["href", "javascript:void(0);", 1, "rounded-circle", "d-inline-flex", "align-items-center", "justify-content-center"], [1, "fa-brands", "fa-linkedin-in"], [1, "about-me-card", "bg-white"], [1, "about-me-body"], [1, "page-title", "fs-18", "fw-bold"], [1, "mb-2"], ["href", "javascript:void(0);", 1, "text-secondary", "text-decoration-underline", "fs-14"], [1, "education-card"], [1, "education-body"], [1, "fs-18", "fw-bold", "page-title"], [1, "education-flow"], [1, "ps-4", "pb-3", "timeline-flow"], [1, "fs-16", "mb-1"], [1, "ps-4", "timeline-flow"], [1, "mb-1"], [1, "enrolled-courses-card", "mb-4", "mb-lg-0"], [1, "enrolled-courses-body"], [1, "page-title"], [1, "mb-0", "fs-18", "fw-bold"], [1, "course-carousal", "student-details-carousal"], [3, "config"], ["ngxSlickItem", "", 1, "course-item-two", "course-item", "mx-2"], [1, "course-img"], [3, "routerLink"], ["src", "assets/img/course/course-01.jpg", "alt", "img", 1, "img-fluid"], [1, "position-absolute", "start-0", "top-0", "d-flex", "align-items-start", "w-100", "z-index-2", "p-3"], [1, "badge", "text-bg-danger"], ["href", "javascript:void(0);", 1, "fav-icon", "ms-auto"], [1, "isax", "isax-heart"], [1, "course-content"], [1, "d-flex", "justify-content-between", "mb-2"], [1, "avatar", "avatar-sm", 3, "routerLink"], ["src", "assets/img/user/user-29.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-sm", "rounded-circle"], [1, "ms-2"], [1, "link-default", "fs-14", 3, "routerLink"], [1, "badge", "badge-light", "rounded-pill", "bg-light", "d-inline-flex", "align-items-center", "fs-13", "fw-medium", "mb-0"], [1, "title", "mb-2"], [1, "d-flex", "align-items-center", "mb-3"], [1, "fa-solid", "fa-star", "text-warning", "me-2"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "text-secondary", "mb-0"], [1, "btn", "btn-dark", "btn-sm", "d-inline-flex", "align-items-center", 3, "routerLink"], [1, "isax", "isax-arrow-right-3", "ms-1"], ["src", "assets/img/course/course-02.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/user/user-30.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-sm", "rounded-circle"], ["src", "assets/img/course/course-03.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/user/user-31.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-sm", "rounded-circle"], ["src", "assets/img/course/course-04.jpg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/user/user-32.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-sm", "rounded-circle"], [1, "col-lg-4"], [1, "certification-card"], [1, "certification-body"], [1, "mb-3", "fw-bold"], [1, "certificate-img", "rounded-circle", "me-2"], ["src", "assets/img/certificates/certificate-01.svg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/certificates/certificate-02.svg", "alt", "img", 1, "img-fluid"], ["src", "assets/img/certificates/certificate-03.svg", "alt", "img", 1, "img-fluid"], [1, "certificate-img", "rounded-circle"], [1, "contact-card", "border-0", "mb-0"], [1, "contact-details-body"], [1, "d-flex", "align-items-center", "mb-4"], [1, "contact-icon", "flex-shrink-0", "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "me-3"], [1, "fa-regular", "fa-envelope"], [1, "mb-0"], [1, "fs-14", "mb-0"], [1, "isax", "isax-location"], [1, "fs-14", "mb-0", "text-truncate"], [1, "isax", "isax-call"]], template: function StudentsDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "img", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "span", 8);
      \u0275\u0275element(9, "img", 9);
      \u0275\u0275elementStart(10, "span", 10);
      \u0275\u0275element(11, "i", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div")(13, "h5", 12);
      \u0275\u0275text(14, "Eugene Andre");
      \u0275\u0275elementStart(15, "a", 13);
      \u0275\u0275element(16, "i", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "p", 15);
      \u0275\u0275text(18, "Instructor");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(19, "div", 6)(20, "div", 16)(21, "a", 17);
      \u0275\u0275text(22, "Add New Course");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "a", 18);
      \u0275\u0275text(24, "Student Dashboard");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(25, "a", 19);
      \u0275\u0275element(26, "i", 20);
      \u0275\u0275text(27, "Back to List");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 21)(29, "div", 22)(30, "div", 23)(31, "div", 24)(32, "div", 25)(33, "a", 26);
      \u0275\u0275element(34, "img", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 28)(36, "div", 29)(37, "div", 30)(38, "h6", 31)(39, "a", 26);
      \u0275\u0275text(40, "Thompson Hicks");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "div", 32)(42, "p");
      \u0275\u0275text(43, "Joined on : 24 May 2024");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div")(45, "p");
      \u0275\u0275text(46, "Hello! I'm Thompson Hicks. I'm passionate about developing innovative software solutions, analyzing classic literature. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "div", 33)(48, "div", 34)(49, "div", 35)(50, "span", 7);
      \u0275\u0275element(51, "i", 36);
      \u0275\u0275text(52, "10 Courses");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "div", 7)(54, "span")(55, "a", 37);
      \u0275\u0275element(56, "i", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "span")(58, "a", 37);
      \u0275\u0275element(59, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "span")(61, "a", 37);
      \u0275\u0275element(62, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "span")(64, "a", 37);
      \u0275\u0275element(65, "i", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "span")(67, "a", 42);
      \u0275\u0275element(68, "i", 43);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(69, "div", 44)(70, "div", 45)(71, "h6", 46);
      \u0275\u0275text(72, "About Me");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "p", 47);
      \u0275\u0275text(74, "Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience. Infinite patience. No shortcuts. Even if the client is being careless. Some quick example text to build on the card title and bulk the card's content Moltin gives you platform.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "a", 48);
      \u0275\u0275text(76, "Read More");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(77, "div", 49)(78, "div", 50)(79, "h6", 51);
      \u0275\u0275text(80, "Education");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "div", 52)(82, "div", 53)(83, "div")(84, "h6", 54);
      \u0275\u0275text(85, "BCA - Bachelor of Computer Applications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "p");
      \u0275\u0275text(87, "International University - (2004 - 2010)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(88, "div", 53)(89, "div")(90, "h6", 54);
      \u0275\u0275text(91, "MCA - Master of Computer Application");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "p");
      \u0275\u0275text(93, "International University - (2010 - 2012)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(94, "div", 55)(95, "div")(96, "h6", 56);
      \u0275\u0275text(97, "Design Communication Visual");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "p");
      \u0275\u0275text(99, "International University - (2012-2015)");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(100, "div", 57)(101, "div", 58)(102, "div", 59)(103, "h6", 60);
      \u0275\u0275text(104, "Enrolled Courses");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "div", 61)(106, "ngx-slick-carousel", 62)(107, "div")(108, "div", 63)(109, "div", 64)(110, "a", 65);
      \u0275\u0275element(111, "img", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "div", 67)(113, "div", 68);
      \u0275\u0275text(114, "15% off");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "a", 69);
      \u0275\u0275element(116, "i", 70);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(117, "div", 71)(118, "div", 72)(119, "div", 7)(120, "a", 73);
      \u0275\u0275element(121, "img", 74);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "div", 75)(123, "a", 76);
      \u0275\u0275text(124, "Brenda Slaton");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(125, "span", 77);
      \u0275\u0275text(126, " Design ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(127, "h6", 78)(128, "a", 65);
      \u0275\u0275text(129, "Information About UI/UX Design Degree");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(130, "p", 79);
      \u0275\u0275element(131, "i", 80);
      \u0275\u0275text(132, "4.9 (200 Reviews)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "div", 81)(134, "h5", 82);
      \u0275\u0275text(135, "$120");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "a", 83);
      \u0275\u0275text(137, "View Course");
      \u0275\u0275element(138, "i", 84);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(139, "div")(140, "div", 63)(141, "div", 64)(142, "a", 65);
      \u0275\u0275element(143, "img", 85);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "div", 67)(145, "a", 69);
      \u0275\u0275element(146, "i", 70);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(147, "div", 71)(148, "div", 72)(149, "div", 7)(150, "a", 73);
      \u0275\u0275element(151, "img", 86);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "div", 75)(153, "a", 76);
      \u0275\u0275text(154, "Ana Reyes");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(155, "span", 77);
      \u0275\u0275text(156, " Wordpress ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(157, "h6", 78)(158, "a", 65);
      \u0275\u0275text(159, "Wordpress for Beginners - Master Wordpress Quickly");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(160, "p", 79);
      \u0275\u0275element(161, "i", 80);
      \u0275\u0275text(162, "4.4 (160 Reviews)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(163, "div", 81)(164, "h5", 82);
      \u0275\u0275text(165, "$140");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "a", 83);
      \u0275\u0275text(167, "View Course");
      \u0275\u0275element(168, "i", 84);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(169, "div")(170, "div", 63)(171, "div", 64)(172, "a", 65);
      \u0275\u0275element(173, "img", 87);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "div", 67)(175, "a", 69);
      \u0275\u0275element(176, "i", 70);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(177, "div", 71)(178, "div", 72)(179, "div", 7)(180, "a", 73);
      \u0275\u0275element(181, "img", 88);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "div", 75)(183, "a", 76);
      \u0275\u0275text(184, "Andrew Pirtle");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(185, "span", 77);
      \u0275\u0275text(186, " Design ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(187, "h6", 78)(188, "a", 65);
      \u0275\u0275text(189, "Sketch from A to Z (2024): Become an app designer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(190, "p", 79);
      \u0275\u0275element(191, "i", 80);
      \u0275\u0275text(192, "4.4 (160 Reviews)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "div", 81)(194, "h5", 82);
      \u0275\u0275text(195, "$140");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "a", 83);
      \u0275\u0275text(197, "View Course");
      \u0275\u0275element(198, "i", 84);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(199, "div")(200, "div", 63)(201, "div", 64)(202, "a", 65);
      \u0275\u0275element(203, "img", 89);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "div", 67)(205, "a", 69);
      \u0275\u0275element(206, "i", 70);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(207, "div", 71)(208, "div", 72)(209, "div", 7)(210, "a", 73);
      \u0275\u0275element(211, "img", 90);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(212, "div", 75)(213, "a", 76);
      \u0275\u0275text(214, "Christy Garner");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(215, "span", 77);
      \u0275\u0275text(216, " Programming ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(217, "h6", 78)(218, "a", 65);
      \u0275\u0275text(219, "Build Responsive Real World Websites with Crash Course");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(220, "p", 79);
      \u0275\u0275element(221, "i", 80);
      \u0275\u0275text(222, "4.2 (220 Reviews)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "div", 81)(224, "h5", 82);
      \u0275\u0275text(225, "$200");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(226, "a", 83);
      \u0275\u0275text(227, "View Course");
      \u0275\u0275element(228, "i", 84);
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(229, "div", 91)(230, "div", 92)(231, "div", 93)(232, "h5", 94);
      \u0275\u0275text(233, "Certifications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(234, "div", 7)(235, "div", 95);
      \u0275\u0275element(236, "img", 96);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(237, "div", 95);
      \u0275\u0275element(238, "img", 97);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(239, "div", 95);
      \u0275\u0275element(240, "img", 98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(241, "div", 99);
      \u0275\u0275element(242, "img", 96);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(243, "div", 100)(244, "div", 101)(245, "h5", 94);
      \u0275\u0275text(246, "Contact Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(247, "div", 102)(248, "span", 103);
      \u0275\u0275element(249, "i", 104);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(250, "div")(251, "h6", 105);
      \u0275\u0275text(252, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(253, "p", 106);
      \u0275\u0275text(254, "jennywilson@example.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(255, "div", 102)(256, "span", 103);
      \u0275\u0275element(257, "i", 107);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(258, "div")(259, "h6", 105);
      \u0275\u0275text(260, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(261, "p", 108);
      \u0275\u0275text(262, "877 Ferry Street, Huntsville, Alabama");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(263, "div", 7)(264, "span", 103);
      \u0275\u0275element(265, "i", 109);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(266, "div")(267, "h6", 105);
      \u0275\u0275text(268, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(269, "p", 106);
      \u0275\u0275text(270, "+1(452) 125-6789");
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275property("routerLink", ctx.routes.instructorProfile);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.addCourse);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.students_Dashboard);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.studentsList);
      \u0275\u0275advance(81);
      \u0275\u0275property("config", ctx.courseCarousel);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(5);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseDetails);
    }
  }, dependencies: [RouterLink, CommonModule, SlickCarouselModule, SlickCarouselComponent, SlickItemDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentsDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-students-details", imports: [RouterLink, CommonModule, SlickCarouselModule], template: `<div class="content instructor-detail-content">
    <div class="container">
        <div class="instructor-profile">
            <div class="instructor-profile-bg">
                <img src="assets/img/bg/card-bg-01.png" class="instructor-profile-bg-1" alt="">
            </div>
            <div class="row align-items-center row-gap-3">
                    <div class="col-md-6">
                        <div class="d-flex align-items-center">
                            <span class="avatar flex-shrink-0 avatar-xxl avatar-rounded me-3 border border-white border-3 position-relative">
                                <img src="assets/img/user/user-01.jpg" alt="img">
                                <span class="verify-tick"><i class="isax isax-verify5"></i></span>
                            </span>
                            <div>
                                <h5 class="mb-1 text-white d-inline-flex align-items-center">Eugene Andre<a [routerLink]="routes.instructorProfile" class="link-light fs-16 ms-2"><i class="isax isax-edit-2"></i></a></h5>
                                <p class="text-light">Instructor</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="d-flex align-items-center flex-wrap gap-3 justify-content-md-end">
                            <a [routerLink]="routes.addCourse" class="btn btn-white rounded-pill">Add New Course</a>
                            <a [routerLink]="routes.students_Dashboard" class="btn btn-secondary rounded-pill">Student Dashboard</a>
                        </div>
                    </div>
            </div>
        </div>
        <a [routerLink]="routes.studentsList" class="d-flex align-items-center mb-3"><i class="isax isax-arrow-left me-1 fw-bold"></i>Back to List</a>
        <div class="row">
            <div class="col-lg-8">
                <div class="instructor-details-item1 mb-4">
                        <div class="instructor-details">
                            <div class="instructor-img">
                                <a href="javascript:void(0);">
                                    <img src="assets/img/students/student-01.jpg" alt="img" class="img-fluid">
                                </a>
                            </div>
                            <div class="flex-fill">
                                <div class="pb-3 border-bottom mb-3">
                                    <div class="d-flex align-items-center justify-content-between mb-1">
                                        <h6 class="fs-18 fw-bold"><a href="javascript:void(0);">Thompson Hicks</a></h6>
                                    </div>
                                    <div class="d-flex align-items-center mb-1">
                                        <p>Joined on : 24 May 2024</p>
                                    </div>
                                    <div>
                                        <p>Hello! I'm Thompson Hicks. I'm passionate about developing innovative software solutions, analyzing classic literature. </p>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between flex-wrap">
                                    <div class="d-flex align-items-center counts-details mb-0">
                                        <div class="d-flex align-items-center me-4">
                                            <span class="d-flex align-items-center"><i class="isax isax-book5 text-primary me-1"></i>10 Courses</span>														
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <span>
                                            <a href="javascript:void(0);" class="rounded-circle d-inline-flex align-items-center justify-content-center p-1 me-2">
                                                <i class="fa-brands fa-facebook-f"></i>
                                            </a>
                                        </span>
                                        <span>
                                            <a href="javascript:void(0);" class="rounded-circle d-inline-flex align-items-center justify-content-center p-1 me-2">
                                                <i class="fa-brands fa-instagram"></i>
                                            </a>
                                        </span>
                                        <span>
                                            <a href="javascript:void(0);" class="rounded-circle d-inline-flex align-items-center justify-content-center p-1 me-2">
                                                <i class="fa-brands fa-x-twitter"></i>
                                            </a>
                                        </span>
                                        <span>
                                            <a href="javascript:void(0);" class="rounded-circle d-inline-flex align-items-center justify-content-center p-1 me-2">
                                                <i class="fa-brands fa-youtube"></i>
                                            </a>
                                        </span>
                                        <span>
                                            <a href="javascript:void(0);" class="rounded-circle d-inline-flex align-items-center justify-content-center">
                                                <i class="fa-brands fa-linkedin-in"></i>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>

                <div class="about-me-card bg-white">
                    <div class="about-me-body">
                        <h6 class="page-title fs-18 fw-bold">About Me</h6>
                        <p class="mb-2">Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience. Infinite patience. No shortcuts. Even if the client is being careless. Some quick example text to build on the card title and bulk the card's content Moltin gives you platform.</p>
                        <a href="javascript:void(0);" class="text-secondary text-decoration-underline fs-14">Read More</a>
                    </div>
                </div>

                <div class="education-card">
                    <div class="education-body">
                        <h6 class="fs-18 fw-bold page-title">Education</h6>
                        <div class="education-flow">
                            <div class="ps-4 pb-3 timeline-flow">
                                <div>
                                    <h6 class="fs-16 mb-1">BCA - Bachelor of Computer Applications</h6>
                                    <p>International University - (2004 - 2010)</p>
                                </div>
                            </div>
                            <div class="ps-4 pb-3 timeline-flow">
                                <div>
                                    <h6 class="fs-16 mb-1">MCA - Master of Computer Application</h6>
                                    <p>International University - (2010 - 2012)</p>
                                </div>
                            </div>
                            <div class="ps-4 timeline-flow">
                                <div>
                                    <h6 class="mb-1">Design Communication Visual</h6>
                                    <p>International University - (2012-2015)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="enrolled-courses-card mb-4 mb-lg-0">
                    <div class="enrolled-courses-body">
                        <div class="page-title">
                            <h6 class="mb-0 fs-18 fw-bold">Enrolled Courses</h6>
                        </div>									
                        <div class="course-carousal student-details-carousal">
                            <ngx-slick-carousel [config]="courseCarousel">

                                <div>
                                    <div class="course-item-two course-item mx-2" ngxSlickItem>
                                        <div class="course-img">
                                            <a [routerLink]="routes.courseDetails">
                                                <img src="assets/img/course/course-01.jpg" alt="img" class="img-fluid">  
                                            </a>
                                            <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                                                <div class="badge text-bg-danger">15% off</div>
                                                <a href="javascript:void(0);" class="fav-icon ms-auto"><i class="isax isax-heart"></i></a>
                                            </div>
                                        </div>
                                        <div class="course-content">
                                            <div class="d-flex justify-content-between mb-2">
                                                <div class="d-flex align-items-center">
                                                    <a [routerLink]="routes.instructorDetails" class="avatar avatar-sm">
                                                        <img src="assets/img/user/user-29.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">
                                                    </a>
                                                    <div class="ms-2">
                                                        <a [routerLink]="routes.instructorDetails" class="link-default fs-14">Brenda Slaton</a>
                                                    </div>
                                                </div>
                                                <span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                                                    Design
                                                </span>
                                            </div>
                                            <h6 class="title mb-2"><a [routerLink]="routes.courseDetails">Information About UI/UX Design Degree</a></h6>
                                            <p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.9 (200 Reviews)</p>
                                            <div class="d-flex align-items-center justify-content-between">
                                                <h5 class="text-secondary mb-0">$120</h5>
                                                <a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="isax isax-arrow-right-3 ms-1"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="course-item-two course-item mx-2" ngxSlickItem>
                                        <div class="course-img">
                                            <a [routerLink]="routes.courseDetails">
                                                <img src="assets/img/course/course-02.jpg" alt="img" class="img-fluid">  
                                            </a>
                                            <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                                                <a href="javascript:void(0);" class="fav-icon ms-auto"><i class="isax isax-heart"></i></a>
                                            </div>
                                        </div>
                                        <div class="course-content">
                                            <div class="d-flex justify-content-between mb-2">
                                                <div class="d-flex align-items-center">
                                                    <a [routerLink]="routes.instructorDetails" class="avatar avatar-sm">
                                                        <img src="assets/img/user/user-30.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">
                                                    </a>
                                                    <div class="ms-2">
                                                        <a [routerLink]="routes.instructorDetails" class="link-default fs-14">Ana Reyes</a>
                                                    </div>
                                                </div>
                                                <span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                                                    Wordpress
                                                </span>
                                            </div>
                                            <h6 class="title mb-2"><a [routerLink]="routes.courseDetails">Wordpress for Beginners - Master Wordpress Quickly</a></h6>
                                            <p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.4 (160 Reviews)</p>
                                            <div class="d-flex align-items-center justify-content-between">
                                                <h5 class="text-secondary mb-0">$140</h5>
                                                <a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="isax isax-arrow-right-3 ms-1"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="course-item-two course-item mx-2" ngxSlickItem>
                                        <div class="course-img">
                                            <a [routerLink]="routes.courseDetails">
                                                <img src="assets/img/course/course-03.jpg" alt="img" class="img-fluid">  
                                            </a>
                                            <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                                                <a href="javascript:void(0);" class="fav-icon ms-auto"><i class="isax isax-heart"></i></a>
                                            </div>
                                        </div>
                                        <div class="course-content">
                                            <div class="d-flex justify-content-between mb-2">
                                                <div class="d-flex align-items-center">
                                                    <a [routerLink]="routes.instructorDetails" class="avatar avatar-sm">
                                                        <img src="assets/img/user/user-31.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">
                                                    </a>
                                                    <div class="ms-2">
                                                        <a [routerLink]="routes.instructorDetails" class="link-default fs-14">Andrew Pirtle</a>
                                                    </div>
                                                </div>
                                                <span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                                                    Design
                                                </span>
                                            </div>
                                            <h6 class="title mb-2"><a [routerLink]="routes.courseDetails">Sketch from A to Z (2024): Become an app designer</a></h6>
                                            <p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.4 (160 Reviews)</p>
                                            <div class="d-flex align-items-center justify-content-between">
                                                <h5 class="text-secondary mb-0">$140</h5>
                                                <a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="isax isax-arrow-right-3 ms-1"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="course-item-two course-item mx-2" ngxSlickItem>
                                        <div class="course-img">
                                            <a [routerLink]="routes.courseDetails">
                                                <img src="assets/img/course/course-04.jpg" alt="img" class="img-fluid">  
                                            </a>
                                            <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                                                <a href="javascript:void(0);" class="fav-icon ms-auto"><i class="isax isax-heart"></i></a>
                                            </div>
                                        </div>
                                        <div class="course-content">
                                            <div class="d-flex justify-content-between mb-2">
                                                <div class="d-flex align-items-center">
                                                    <a [routerLink]="routes.instructorDetails" class="avatar avatar-sm">
                                                        <img src="assets/img/user/user-32.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">
                                                    </a>
                                                    <div class="ms-2">
                                                        <a [routerLink]="routes.instructorDetails" class="link-default fs-14">Christy Garner</a>
                                                    </div>
                                                </div>
                                                <span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                                                    Programming
                                                </span>
                                            </div>
                                            <h6 class="title mb-2"><a [routerLink]="routes.courseDetails">Build Responsive Real World Websites with Crash Course</a></h6>
                                            <p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.2 (220 Reviews)</p>
                                            <div class="d-flex align-items-center justify-content-between">
                                                <h5 class="text-secondary mb-0">$200</h5>
                                                <a [routerLink]="routes.courseDetails" class="btn btn-dark btn-sm d-inline-flex align-items-center">View Course<i class="isax isax-arrow-right-3 ms-1"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ngx-slick-carousel>
                        </div>
                    </div>
                </div>

            </div>

            <div class="col-lg-4">
                <div class="certification-card">
                    <div class="certification-body">
                        <h5 class="mb-3 fw-bold">Certifications</h5>
                        <div class="d-flex align-items-center">
                            <div class="certificate-img rounded-circle me-2">
                                <img src="assets/img/certificates/certificate-01.svg" alt="img" class="img-fluid">
                            </div>
                            <div class="certificate-img rounded-circle me-2">
                                <img src="assets/img/certificates/certificate-02.svg" alt="img" class="img-fluid">
                            </div>
                            <div class="certificate-img rounded-circle me-2">
                                <img src="assets/img/certificates/certificate-03.svg" alt="img" class="img-fluid">
                            </div>
                            <div class="certificate-img rounded-circle">
                                <img src="assets/img/certificates/certificate-01.svg" alt="img" class="img-fluid">
                            </div>
                        </div>
                    </div>
                </div>


                <div class="contact-card border-0 mb-0">
                    <div class="contact-details-body">
                        <h5 class="mb-3 fw-bold">Contact Details</h5>
                        <div class="d-flex align-items-center mb-4">
                            <span class="contact-icon flex-shrink-0 rounded-circle d-flex align-items-center justify-content-center me-3">
                                <i class="fa-regular fa-envelope"></i>
                            </span>
                            <div>
                                <h6 class="mb-0">Email</h6>
                                <p class="fs-14 mb-0">jennywilson&#64;example.com</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center mb-4">
                            <span class="contact-icon flex-shrink-0 rounded-circle d-flex align-items-center justify-content-center me-3">
                                <i class="isax isax-location"></i>
                            </span>
                            <div>
                                <h6 class="mb-0">Address</h6>
                                <p class="fs-14 mb-0 text-truncate">877 Ferry Street, Huntsville, Alabama</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center">
                            <span class="contact-icon flex-shrink-0 rounded-circle d-flex align-items-center justify-content-center me-3">
                                <i class="isax isax-call"></i>
                            </span>
                            <div>
                                <h6 class="mb-0">Phone</h6>
                                <p class="fs-14 mb-0">+1(452) 125-6789</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentsDetailsComponent, { className: "StudentsDetailsComponent", filePath: "src/app/features/instructor/students-details/students-details.component.ts", lineNumber: 13 });
})();
export {
  StudentsDetailsComponent
};
//# sourceMappingURL=chunk-GSZ47WUD.js.map
