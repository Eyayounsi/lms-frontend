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

// src/app/features/pages/about-us/about-us.component.ts
var AboutUsComponent = class _AboutUsComponent {
  routes = routes;
  instructorSlider = {
    lazyLoad: "ondemand",
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3e3,
    autoplaySpeed: 1800,
    arrows: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };
  testimonialSlider = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  static \u0275fac = function AboutUsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AboutUsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutUsComponent, selectors: [["app-about-us"]], decls: 327, vars: 10, consts: [[1, "about-section-two", "pb-0"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6"], [1, "p-3", "p-sm-4", "position-relative"], [1, "position-absolute", "top-0", "start-0", "z-n1"], ["src", "assets/img/shapes/shape-1.svg", "alt", "img"], [1, "position-absolute", "bottom-0", "end-0", "z-n1"], ["src", "assets/img/shapes/shape-2.svg", "alt", "img"], [1, "position-absolute", "bottom-0", "start-0", "mb-md-5", "ms-md-n5"], ["src", "assets/img/icons/icon-1.svg", "alt", "img"], ["src", "./assets/img/about/about-2.svg", "alt", "img", 1, "img-fluid", "img-radius"], [1, "ps-0", "ps-lg-2", "pt-4", "pt-lg-0", "ps-xl-5"], [1, "section-header"], [1, "fw-medium", "text-secondary", "text-decoration-underline", "mb-2", "d-inline-block"], [1, "d-flex", "align-items-center", "about-us-banner"], [1, "bg-primary-transparent", "rounded-3", "p-2", "about-icon", "d-flex", "justify-content-center", "align-items-center"], [1, "isax", "isax-book-1", "fs-24"], [1, "ps-3"], [1, "mb-2"], [1, "bg-secondary-transparent", "rounded-3", "p-2", "about-icon", "d-flex", "justify-content-center", "align-items-center"], [1, "isax", "isax-bookmark5", "fs-24"], [1, "benefit-section"], [1, "section-header", "text-center"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "card", "shadow-sm"], [1, "card-body", "p-4"], [1, "position-absolute", "top-0", "end-0", "mt-n3", "me-n4"], ["src", "./assets/img/shapes/bg-1.png", "alt", "img"], [1, "p-4", "rounded-pill", "bg-primary-transparent", "d-inline-flex"], [1, "mt-3", "mb-1"], ["src", "assets/img/shapes/bg-2.png", "alt", "img"], [1, "p-4", "rounded-pill", "bg-secondary-transparent", "d-inline-flex"], ["src", "assets/img/shapes/bg-3.png", "alt", "img"], [1, "p-4", "rounded-pill", "bg-skyblue-transparent", "d-inline-flex"], [1, "isax", "isax-chart-26", "fs-24"], [1, "client-section"], [1, "fw-medium", "text-center", "mb-4"], [1, "text-decoration-underline", "text-secondary"], [1, "institutions-slider", "lazy", "slider"], [3, "config"], ["ngxSlickItem", "", 1, "institutions-items", "p-1"], ["src", "./assets/img/client/01.svg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/client/02.svg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/client/03.svg", "alt", "img", 1, "img-fluid"], [1, "institutions-items", "p-1"], ["src", "./assets/img/client/04.svg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/client/05.svg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/client/06.svg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/client/07.svg", "alt", "img", 1, "img-fluid"], [1, "counter-sec"], [1, "row", "gy-3"], [1, "col-xl-3", "col-md-6"], [1, "card", "border-0", "mb-0"], [1, "card-body"], [1, "d-flex", "align-items-center"], [1, "counter-icon"], ["src", "./assets/img/icons/counter-icon1.svg", "alt", "img"], [1, "count-content"], [1, "text-info"], [1, "count-digit"], ["src", "./assets/img/icons/counter-icon2.svg", "alt", "img"], [1, "text-warning"], ["src", "./assets/img/icons/counter-icon3.svg", "alt", "img"], [1, "text-skyblue"], [1, "card-body", "d-flex", "align-items-center"], ["src", "./assets/img/icons/counter-icon4.svg", "alt", "img"], [1, "text-lightgreen"], [1, "testimonials-section", "text-center"], [1, "testimonials-slider", "lazy", "mt-4"], ["ngxSlickItem", ""], [1, "testimonials-item", "rounded-3", "bg-white"], [1, "position-relative", "d-inline-flex", "mb-2"], [1, "avatar", "rounded-circle", "avatar-xxl", "border", "border-white", "border-3"], [3, "routerLink"], ["src", "./assets/img/user/user-41.jpg", "alt", "img", 1, "img-fluid", "rounded-circle"], [1, "isax", "isax-quote-up5", "bg-secondary", "quote", "rounded-pill", "fs-16", "p-1"], [1, "mb-1"], [1, "fs-14", "mb-3"], [1, "mb-3", "text-truncate", "line-clamb-2"], [1, "fa-solid", "fa-star", "text-warning"], ["src", "./assets/img/user/user-42.jpg", "alt", "img", 1, "img-fluid", "rounded-circle"], ["src", "./assets/img/user/user-43.jpg", "alt", "img", 1, "img-fluid", "rounded-circle"], [1, "faq-section"], [1, "col-lg-5", "pe-md-5"], [1, "position-relative"], ["src", "assets/img/about/about-1.jpg", "alt", "img", 1, "img-fluid", "rounded-4"], [1, "bg-warning", "text-center", "p-3", "rounded-5", "position-absolute", "top-0", "end-0", "z-index-1", "d-none", "d-sm-block", "my-3", "mx-3"], [1, "isax", "isax-message-question5", "heading-color", "fs-46"], [1, "col-lg-7"], [1, "faq-content"], ["id", "accordioncustomicon1Example", 1, "accordion", "accordion-customicon1", "accordions-items-seperate"], ["data-aos", "fade-up", 1, "accordion-item"], ["id", "headingcustomicon1One", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1One", "aria-expanded", "true", "aria-controls", "collapsecustomicon1One", 1, "accordion-button"], [1, "isax", "isax-add", "fs-20", "fw-semibold", "ms-1"], ["id", "collapsecustomicon1One", "aria-labelledby", "headingcustomicon1One", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body", "pt-0"], ["data-aos", "fade-up", "data-aos-delay", "250", 1, "accordion-item"], ["id", "headingcustomicon1Two", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1Two", "aria-expanded", "false", "aria-controls", "collapsecustomicon1One", 1, "accordion-button", "collapsed"], ["id", "collapsecustomicon1Two", "aria-labelledby", "headingcustomicon1Two", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse"], ["id", "headingcustomicon1Three", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1Three", "aria-expanded", "false", "aria-controls", "collapsecustomicon1One", 1, "accordion-button", "collapsed"], ["id", "collapsecustomicon1Three", "aria-labelledby", "headingcustomicon1Three", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse"], ["id", "headingcustomicon1Four", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1Four", "aria-expanded", "false", "aria-controls", "collapsecustomicon1One", 1, "accordion-button", "collapsed"], ["id", "collapsecustomicon1Four", "aria-labelledby", "headingcustomicon1Four", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse"], ["id", "headingcustomicon1Five", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1Five", "aria-expanded", "false", "aria-controls", "collapsecustomicon1One", 1, "accordion-button", "collapsed"], ["id", "collapsecustomicon1Five", "aria-labelledby", "headingcustomicon1Five", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse"]], template: function AboutUsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
      \u0275\u0275element(6, "img", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 7);
      \u0275\u0275element(8, "img", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 9);
      \u0275\u0275element(10, "img", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "img", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 3)(13, "div", 12)(14, "div", 13)(15, "span", 14);
      \u0275\u0275text(16, "About");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "h2");
      \u0275\u0275text(18, "Empowering Learning, Inspiring Growth");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p");
      \u0275\u0275text(20, "At DreamsLMS, we make education accessible to all with interactive courses and expert-led content. Learn anytime, anywhere, and achieve your goals seamlessly.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 15)(22, "div")(23, "span", 16);
      \u0275\u0275element(24, "i", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 18)(26, "h6", 19);
      \u0275\u0275text(27, "Learn from anywhere");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "p");
      \u0275\u0275text(29, "Learning from anywhere has become a transform aspect of modern education, allowing individuals.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "div", 15)(31, "div")(32, "span", 20);
      \u0275\u0275element(33, "i", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 18)(35, "h6", 19);
      \u0275\u0275text(36, "Expert Mentors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "p");
      \u0275\u0275text(38, "Expert mentors are invaluable assets in any field, providing seasoned guidance knowledge.");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(39, "section", 22)(40, "div", 1)(41, "div", 23)(42, "span", 14);
      \u0275\u0275text(43, "Our Benefits");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "h2");
      \u0275\u0275text(45, "Master the Skills to Drive your Career");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "p");
      \u0275\u0275text(47, "The right course, guided by an expert mentor, can provide invaluable insights, practical skills.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 24)(49, "div", 25)(50, "div", 26)(51, "div", 27)(52, "div", 28);
      \u0275\u0275element(53, "img", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 30);
      \u0275\u0275element(55, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "h5", 31);
      \u0275\u0275text(57, "Flexible Learning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "p");
      \u0275\u0275text(59, "We believe that high-quality education should be accessible to everyone. Our pricing form in models are designed.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(60, "div", 25)(61, "div", 26)(62, "div", 27)(63, "div", 28);
      \u0275\u0275element(64, "img", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 33);
      \u0275\u0275element(66, "i", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "h5", 31);
      \u0275\u0275text(68, "Lifetime Access");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "p");
      \u0275\u0275text(70, "When you enroll in our courses, you\u2019re not just signing up for a temporary learning to experience you\u2019re making.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(71, "div", 25)(72, "div", 26)(73, "div", 27)(74, "div", 28);
      \u0275\u0275element(75, "img", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "div", 35);
      \u0275\u0275element(77, "i", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "h5", 31);
      \u0275\u0275text(79, "Expert Instruction");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "p");
      \u0275\u0275text(81, "Our instructors are seasoned professionals with years of experience in their respective fields & Experts advice");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(82, "section", 37)(83, "div", 1)(84, "h6", 38);
      \u0275\u0275text(85, "Trusted by ");
      \u0275\u0275elementStart(86, "span", 39);
      \u0275\u0275text(87, "20+");
      \u0275\u0275elementEnd();
      \u0275\u0275text(88, " Institutions Around the World");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "div", 40)(90, "ngx-slick-carousel", 41)(91, "div", 42);
      \u0275\u0275element(92, "img", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "div", 42);
      \u0275\u0275element(94, "img", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "div", 42);
      \u0275\u0275element(96, "img", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "div", 46);
      \u0275\u0275element(98, "img", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "div", 42);
      \u0275\u0275element(100, "img", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "div", 42);
      \u0275\u0275element(102, "img", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "div", 42);
      \u0275\u0275element(104, "img", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "div", 42);
      \u0275\u0275element(106, "img", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "div", 42);
      \u0275\u0275element(108, "img", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "div", 42);
      \u0275\u0275element(110, "img", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "div", 42);
      \u0275\u0275element(112, "img", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "div", 42);
      \u0275\u0275element(114, "img", 49);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(115, "section", 51)(116, "div", 1)(117, "div", 52)(118, "div", 53)(119, "div", 54)(120, "div", 55)(121, "div", 56)(122, "div", 57);
      \u0275\u0275element(123, "img", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "div", 59)(125, "h4", 60)(126, "span", 61);
      \u0275\u0275text(127, "10");
      \u0275\u0275elementEnd();
      \u0275\u0275text(128, "K");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "p");
      \u0275\u0275text(130, "Online Courses");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(131, "div", 53)(132, "div", 54)(133, "div", 55)(134, "div", 56)(135, "div", 57);
      \u0275\u0275element(136, "img", 62);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "div", 59)(138, "h4", 63)(139, "span", 61);
      \u0275\u0275text(140, "200");
      \u0275\u0275elementEnd();
      \u0275\u0275text(141, "+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "p");
      \u0275\u0275text(143, "Expert Tutors");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(144, "div", 53)(145, "div", 54)(146, "div", 55)(147, "div", 56)(148, "div", 57);
      \u0275\u0275element(149, "img", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "div", 59)(151, "h4", 65)(152, "span", 61);
      \u0275\u0275text(153, "6");
      \u0275\u0275elementEnd();
      \u0275\u0275text(154, "K+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "p");
      \u0275\u0275text(156, "Certified Courses");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(157, "div", 53)(158, "div", 54)(159, "div", 66)(160, "div", 57);
      \u0275\u0275element(161, "img", 67);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "div", 59)(163, "h4", 68)(164, "span", 61);
      \u0275\u0275text(165, "60");
      \u0275\u0275elementEnd();
      \u0275\u0275text(166, "K+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "p");
      \u0275\u0275text(168, "Online Students");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(169, "section", 69)(170, "div", 1)(171, "div", 23)(172, "span", 14);
      \u0275\u0275text(173, "Featured Instructors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "h2");
      \u0275\u0275text(175, "Top Class & Professional Instructors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "p");
      \u0275\u0275text(177, "Words from Those Who\u2019ve Experienced Real Growth.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(178, "div", 70)(179, "ngx-slick-carousel", 41)(180, "div", 71)(181, "div")(182, "div", 72)(183, "div", 73)(184, "div", 74)(185, "a", 75);
      \u0275\u0275element(186, "img", 76);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(187, "i", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "h6", 78)(189, "a", 75);
      \u0275\u0275text(190, "Brenda Slaton");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(191, "p", 79);
      \u0275\u0275text(192, "Designer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "p", 80);
      \u0275\u0275text(194, "This mentor helped me understand concepts that I had been struggling with for weeks.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "div");
      \u0275\u0275element(196, "i", 81)(197, "i", 81)(198, "i", 81)(199, "i", 81)(200, "i", 81);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(201, "div", 71)(202, "div")(203, "div", 72)(204, "div", 73)(205, "div", 74)(206, "a", 75);
      \u0275\u0275element(207, "img", 82);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(208, "i", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "h6", 78)(210, "a", 75);
      \u0275\u0275text(211, "Adrian Dennis");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(212, "p", 79);
      \u0275\u0275text(213, "Developer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(214, "p", 80);
      \u0275\u0275text(215, "I\u2019ve learned so much from my mentor\u2019s personal experience.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(216, "div");
      \u0275\u0275element(217, "i", 81)(218, "i", 81)(219, "i", 81)(220, "i", 81)(221, "i", 81);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(222, "div", 71)(223, "div")(224, "div", 72)(225, "div", 73)(226, "div", 74)(227, "a", 75);
      \u0275\u0275element(228, "img", 83);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(229, "i", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(230, "h6", 78)(231, "a", 75);
      \u0275\u0275text(232, "Adrian Coztanza");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(233, "p", 79);
      \u0275\u0275text(234, "Architect");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(235, "p", 80);
      \u0275\u0275text(236, "The advice was useful, but I wish my mentor had been more available for follow-up discussions.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(237, "div");
      \u0275\u0275element(238, "i", 81)(239, "i", 81)(240, "i", 81)(241, "i", 81)(242, "i", 81);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(243, "div", 71)(244, "div")(245, "div", 72)(246, "div", 73)(247, "div", 74)(248, "a", 75);
      \u0275\u0275element(249, "img", 83);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(250, "i", 77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(251, "h6", 78)(252, "a", 75);
      \u0275\u0275text(253, "Adrian Coztanza");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(254, "p", 79);
      \u0275\u0275text(255, "Architect");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(256, "p", 80);
      \u0275\u0275text(257, "The advice was useful, but I wish my mentor had been more available for follow-up discussions.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(258, "div");
      \u0275\u0275element(259, "i", 81)(260, "i", 81)(261, "i", 81)(262, "i", 81)(263, "i", 81);
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(264, "section", 84)(265, "div", 1)(266, "div", 2)(267, "div", 85)(268, "div", 86);
      \u0275\u0275element(269, "img", 87);
      \u0275\u0275elementStart(270, "div", 88);
      \u0275\u0275element(271, "i", 89);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(272, "div", 90)(273, "div", 13)(274, "span", 14);
      \u0275\u0275text(275, "FAQs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(276, "h2");
      \u0275\u0275text(277, "Frequently Asked Questions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(278, "p");
      \u0275\u0275text(279, "Explore detailed answers to the most common questions about our platform.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(280, "div", 91)(281, "div", 92)(282, "div", 93)(283, "h2", 94)(284, "a", 95);
      \u0275\u0275text(285, " What\u2019s DreamLMS want to give you? ");
      \u0275\u0275element(286, "i", 96);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(287, "div", 97)(288, "div", 98)(289, "p");
      \u0275\u0275text(290, "DreamLMS aims to provide you with a comprehensive and intuitive learning platform that enhances your educational experience.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(291, "div", 99)(292, "h2", 100)(293, "a", 101);
      \u0275\u0275text(294, " Why choose us for your education? ");
      \u0275\u0275element(295, "i", 96);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(296, "div", 102)(297, "div", 98)(298, "p");
      \u0275\u0275text(299, "DreamLMS aims to provide you with a comprehensive and intuitive learning platform that enhances your educational experience.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(300, "div", 99)(301, "h2", 103)(302, "a", 104);
      \u0275\u0275text(303, " How We Provide Service For you? ");
      \u0275\u0275element(304, "i", 96);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(305, "div", 105)(306, "div", 98)(307, "p");
      \u0275\u0275text(308, "DreamLMS aims to provide you with a comprehensive and intuitive learning platform that enhances your educational experience.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(309, "div", 99)(310, "h2", 106)(311, "a", 107);
      \u0275\u0275text(312, " Do you have a monthly plan? ");
      \u0275\u0275element(313, "i", 96);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(314, "div", 108)(315, "div", 98)(316, "p");
      \u0275\u0275text(317, "DreamLMS aims to provide you with a comprehensive and intuitive learning platform that enhances your educational experience.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(318, "div", 99)(319, "h2", 109)(320, "a", 110);
      \u0275\u0275text(321, " Are you Affordable For Your Course ");
      \u0275\u0275element(322, "i", 96);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(323, "div", 111)(324, "div", 98)(325, "p");
      \u0275\u0275text(326, "DreamLMS aims to provide you with a comprehensive and intuitive learning platform that enhances your educational experience.");
      \u0275\u0275elementEnd()()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(90);
      \u0275\u0275property("config", ctx.instructorSlider);
      \u0275\u0275advance(89);
      \u0275\u0275property("config", ctx.testimonialSlider);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(17);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(17);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(17);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.instructorDetails);
    }
  }, dependencies: [CommonModule, RouterLink, SlickCarouselModule, SlickCarouselComponent, SlickItemDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutUsComponent, [{
    type: Component,
    args: [{ selector: "app-about-us", imports: [CommonModule, RouterLink, SlickCarouselModule], template: '<!-- about -->\n<section class="about-section-two pb-0">\n    <div class="container">\n        <div class="row align-items-center">\n            <div class="col-lg-6">\n            <div class="p-3 p-sm-4 position-relative">\n                <div class="position-absolute top-0 start-0 z-n1">\n                    <img src="assets/img/shapes/shape-1.svg" alt="img">\n                </div>\n                <div class="position-absolute bottom-0 end-0 z-n1">\n                    <img src="assets/img/shapes/shape-2.svg" alt="img">\n                </div>\n                <div class="position-absolute bottom-0 start-0 mb-md-5 ms-md-n5">\n                    <img src="assets/img/icons/icon-1.svg" alt="img">\n                </div>\n                <img class="img-fluid img-radius" src="./assets/img/about/about-2.svg" alt="img">\n            </div>\n            </div>\n            <div class="col-lg-6">\n                <div class="ps-0 ps-lg-2 pt-4 pt-lg-0 ps-xl-5">\n                    <div class="section-header">\n                        <span class="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">About</span>\n                        <h2>Empowering Learning, Inspiring Growth</h2>\n                        <p>At DreamsLMS, we make education accessible to all with interactive courses and expert-led content. Learn anytime, anywhere, and achieve your goals seamlessly.</p>\n                    </div>\n                    <div class="d-flex align-items-center about-us-banner">\n                        <div>\n                            <span class="bg-primary-transparent rounded-3 p-2 about-icon d-flex justify-content-center align-items-center">\n                                <i class="isax isax-book-1 fs-24"></i>\n                            </span>\n                        </div>\n                        <div class="ps-3">\n                            <h6 class="mb-2">Learn from anywhere</h6>\n                            <p>Learning from anywhere has become a transform aspect of modern education, allowing individuals.</p>\n                        </div>\n                    </div>\n                    <div class="d-flex align-items-center about-us-banner">\n                        <div>\n                            <span class="bg-secondary-transparent rounded-3 p-2 about-icon d-flex justify-content-center align-items-center">\n                                <i class="isax isax-bookmark5 fs-24"></i>\n                            </span>\n                        </div>\n                        <div class="ps-3">\n                            <h6 class="mb-2">Expert Mentors</h6>\n                            <p>Expert mentors are invaluable assets in any field, providing seasoned guidance knowledge.</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- about -->\n\n<!-- benefits -->\n<section class="benefit-section">\n    <div class="container">\n        <div class="section-header text-center">\n            <span class="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">Our Benefits</span>\n            <h2>Master the Skills to Drive your Career</h2>\n            <p>The right course, guided by an expert mentor, can provide invaluable insights, practical skills.</p>\n        </div>\n        <div class="row">\n            <div class="col-lg-4 col-md-6">\n                <div class="card shadow-sm">\n                    <div class="card-body p-4">\n                        <div class="position-absolute top-0 end-0 mt-n3 me-n4">\n                            <img src="./assets/img/shapes/bg-1.png" alt="img">\n                        </div>\n                        <div class="p-4 rounded-pill bg-primary-transparent d-inline-flex">\n                            <i class="isax isax-book-1 fs-24"></i>\n                        </div>\n                        <h5 class="mt-3 mb-1">Flexible Learning</h5>\n                        <p>We believe that high-quality education should be accessible to everyone. Our pricing form in models are designed.</p>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-4 col-md-6">\n                <div class="card shadow-sm">\n                    <div class="card-body p-4">\n                        <div class="position-absolute top-0 end-0 mt-n3 me-n4">\n                            <img src="assets/img/shapes/bg-2.png" alt="img">\n                        </div>\n                        <div class="p-4 rounded-pill bg-secondary-transparent d-inline-flex">\n                            <i class="isax isax-bookmark5 fs-24"></i>\n                        </div>\n                        <h5 class="mt-3 mb-1">Lifetime Access</h5>\n                        <p>When you enroll in our courses, you\u2019re not just signing up for a temporary learning to experience you\u2019re making.</p>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-4 col-md-6">\n                <div class="card shadow-sm">\n                    <div class="card-body p-4">\n                        <div class="position-absolute top-0 end-0 mt-n3 me-n4">\n                            <img src="assets/img/shapes/bg-3.png" alt="img">\n                        </div>\n                        <div class="p-4 rounded-pill bg-skyblue-transparent d-inline-flex">\n                            <i class="isax isax-chart-26 fs-24"></i>\n                        </div>\n                        <h5 class="mt-3 mb-1">Expert Instruction</h5>\n                        <p>Our instructors are seasoned professionals with years of experience in their respective fields & Experts advice</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- benefits -->\n\n<!-- institutions -->\n<section class="client-section">\n    <div class="container">\n    <h6 class="fw-medium text-center mb-4">Trusted by <span class="text-decoration-underline text-secondary">20+</span> Institutions Around the World</h6>\n    <div class="institutions-slider lazy slider">\n        <ngx-slick-carousel [config]="instructorSlider">\n            <div class="institutions-items p-1" ngxSlickItem>\n                <img class="img-fluid" src="./assets/img/client/01.svg" alt="img">\n            </div>\n            <div class="institutions-items p-1" ngxSlickItem>\n                <img class="img-fluid" src="./assets/img/client/02.svg" alt="img">\n            </div>\n            <div class="institutions-items p-1" ngxSlickItem>\n                <img class="img-fluid" src="./assets/img/client/03.svg" alt="img">\n            </div>\n            <div class="institutions-items p-1">\n                <img class="img-fluid" src="./assets/img/client/04.svg" alt="img">\n            </div>\n            <div class="institutions-items p-1" ngxSlickItem>\n                <img class="img-fluid" src="./assets/img/client/05.svg" alt="img">\n            </div>\n            <div class="institutions-items p-1" ngxSlickItem>\n                <img class="img-fluid" src="./assets/img/client/06.svg" alt="img">\n            </div>\n            <div class="institutions-items p-1" ngxSlickItem>\n                <img class="img-fluid" src="./assets/img/client/07.svg" alt="img">\n            </div>\n            <div class="institutions-items p-1" ngxSlickItem>\n                <img class="img-fluid" src="./assets/img/client/02.svg" alt="img">\n            </div>\n            <div class="institutions-items p-1" ngxSlickItem>\n                <img class="img-fluid" src="./assets/img/client/03.svg" alt="img">\n            </div>\n            <div class="institutions-items p-1" ngxSlickItem>\n                <img class="img-fluid" src="./assets/img/client/04.svg" alt="img">\n            </div>\n            <div class="institutions-items p-1" ngxSlickItem>\n                <img class="img-fluid" src="./assets/img/client/05.svg" alt="img">\n            </div>\n            <div class="institutions-items p-1" ngxSlickItem>\n                <img class="img-fluid" src="./assets/img/client/06.svg" alt="img">\n            </div>\n        </ngx-slick-carousel>\n    </div>\n    </div>\n</section>\n<!-- institutions -->\n\n<!-- counter -->\n<section class="counter-sec">\n    <div class="container">\n        <div class="row gy-3">\n            <div class="col-xl-3 col-md-6">\n                <div class="card border-0 mb-0">\n                    <div class="card-body">\n                        <div class="d-flex align-items-center">\n                            <div class="counter-icon">\n                                <img src="./assets/img/icons/counter-icon1.svg" alt="img">\n                            </div>\n                            <div class="count-content">\n                                <h4 class="text-info"><span class="count-digit">10</span>K</h4>\n                                <p>Online Courses</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-xl-3 col-md-6">\n                <div class="card border-0 mb-0">\n                    <div class="card-body">\n                        <div class="d-flex align-items-center">\n                            <div class="counter-icon">\n                                <img src="./assets/img/icons/counter-icon2.svg" alt="img">\n                            </div>\n                            <div class="count-content">\n                                <h4 class="text-warning"><span class="count-digit">200</span>+</h4>\n                                <p>Expert Tutors</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-xl-3 col-md-6">\n                <div class="card border-0 mb-0">\n                    <div class="card-body">\n                        <div class="d-flex align-items-center">\n                            <div class="counter-icon">\n                                <img src="./assets/img/icons/counter-icon3.svg" alt="img">\n                            </div>\n                            <div class="count-content">\n                                <h4 class="text-skyblue"><span class="count-digit">6</span>K+</h4>\n                                <p>Certified Courses</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-xl-3 col-md-6">\n                <div class="card border-0 mb-0">\n                    <div class="card-body d-flex align-items-center">\n                        <div class="counter-icon">\n                        <img src="./assets/img/icons/counter-icon4.svg" alt="img">\n                        </div>\n                        <div class="count-content">\n                        <h4 class="text-lightgreen"><span class="count-digit">60</span>K+</h4>\n                            <p>Online Students</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- counter -->\n\n<!-- testimonials -->\n<section class="testimonials-section text-center">\n    <div class="container">\n        <div class="section-header text-center">\n            <span class="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">Featured Instructors</span>\n            <h2>Top Class & Professional Instructors</h2>\n            <p>Words from Those Who\u2019ve Experienced Real Growth.</p>\n        </div>\n        <div class="testimonials-slider lazy mt-4">\n            <ngx-slick-carousel [config]="testimonialSlider">\n                <div ngxSlickItem>\n                    <div>\n                        <div class="testimonials-item rounded-3 bg-white">\n                            <div class="position-relative d-inline-flex mb-2">\n                                <div class="avatar rounded-circle avatar-xxl border border-white border-3">\n                                    <a [routerLink]="routes.instructorDetails"><img class="img-fluid rounded-circle" src="./assets/img/user/user-41.jpg" alt="img"></a>\n                                </div>\n                                <i class="isax isax-quote-up5 bg-secondary quote rounded-pill fs-16 p-1"></i>\n                            </div>\n                            <h6 class="mb-1"><a [routerLink]="routes.instructorDetails">Brenda Slaton</a></h6>\n                            <p class="fs-14 mb-3">Designer</p>\n                            <p class="mb-3 text-truncate line-clamb-2">This mentor helped me understand concepts that I had been struggling with for weeks.</p>\n                            <div>\n                                <i class="fa-solid fa-star text-warning"></i>\n                                <i class="fa-solid fa-star text-warning"></i>\n                                <i class="fa-solid fa-star text-warning"></i>\n                                <i class="fa-solid fa-star text-warning"></i>\n                                <i class="fa-solid fa-star text-warning"></i>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div ngxSlickItem>\n                    <div>\n                        <div class="testimonials-item rounded-3 bg-white">\n                            <div class="position-relative d-inline-flex mb-2">\n                                <div class="avatar rounded-circle avatar-xxl border border-white border-3">\n                                    <a [routerLink]="routes.instructorDetails"><img class="img-fluid rounded-circle" src="./assets/img/user/user-42.jpg" alt="img"></a>\n                                </div>\n                                <i class="isax isax-quote-up5 bg-secondary quote rounded-pill fs-16 p-1"></i>\n                            </div>\n                            <h6 class="mb-1"><a [routerLink]="routes.instructorDetails">Adrian Dennis</a></h6>\n                            <p class="fs-14 mb-3">Developer</p>\n                            <p class="mb-3 text-truncate line-clamb-2">I\u2019ve learned so much from my mentor\u2019s personal experience.</p>\n                            <div>\n                                <i class="fa-solid fa-star text-warning"></i>\n                                <i class="fa-solid fa-star text-warning"></i>\n                                <i class="fa-solid fa-star text-warning"></i>\n                                <i class="fa-solid fa-star text-warning"></i>\n                                <i class="fa-solid fa-star text-warning"></i>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div ngxSlickItem>\n                    <div>\n                        <div class="testimonials-item rounded-3 bg-white">\n                            <div class="position-relative d-inline-flex mb-2">\n                                <div class="avatar rounded-circle avatar-xxl border border-white border-3">\n                                    <a [routerLink]="routes.instructorDetails"><img class="img-fluid rounded-circle" src="./assets/img/user/user-43.jpg" alt="img"></a>\n                                </div>\n                                <i class="isax isax-quote-up5 bg-secondary quote rounded-pill fs-16 p-1"></i>\n                            </div>\n                            <h6 class="mb-1"><a [routerLink]="routes.instructorDetails">Adrian Coztanza</a></h6>\n                            <p class="fs-14 mb-3">Architect</p>\n                            <p class="mb-3 text-truncate line-clamb-2">The advice was useful, but I wish my mentor had been more available for follow-up discussions.</p>\n                            <div>\n                                <i class="fa-solid fa-star text-warning"></i>\n                                <i class="fa-solid fa-star text-warning"></i>\n                                <i class="fa-solid fa-star text-warning"></i>\n                                <i class="fa-solid fa-star text-warning"></i>\n                                <i class="fa-solid fa-star text-warning"></i>\n                            </div>\n                        </div>  \n                    </div>\n                </div>\n                <div ngxSlickItem>\n                    <div>\n                        <div class="testimonials-item rounded-3 bg-white">\n                            <div class="position-relative d-inline-flex mb-2">\n                                <div class="avatar rounded-circle avatar-xxl border border-white border-3">\n                                    <a [routerLink]="routes.instructorDetails"><img class="img-fluid rounded-circle" src="./assets/img/user/user-43.jpg" alt="img"></a>\n                                </div>\n                                <i class="isax isax-quote-up5 bg-secondary quote rounded-pill fs-16 p-1"></i>\n                            </div>\n                            <h6 class="mb-1"><a [routerLink]="routes.instructorDetails">Adrian Coztanza</a></h6>\n                            <p class="fs-14 mb-3">Architect</p>\n                            <p class="mb-3 text-truncate line-clamb-2">The advice was useful, but I wish my mentor had been more available for follow-up discussions.</p>\n                            <div>\n                                <i class="fa-solid fa-star text-warning"></i>\n                                <i class="fa-solid fa-star text-warning"></i>\n                                <i class="fa-solid fa-star text-warning"></i>\n                                <i class="fa-solid fa-star text-warning"></i>\n                                <i class="fa-solid fa-star text-warning"></i>\n                            </div>\n                        </div>  \n                    </div>  \n                </div> \n            </ngx-slick-carousel>\n        </div>\n    </div>\n</section>\n<!-- testimonials -->\n\n<!-- faq -->\n<section class="faq-section">\n    <div class="container">\n        <div class="row align-items-center">\n            <div class="col-lg-5 pe-md-5">\n                <div class="position-relative">\n                    <img class="img-fluid rounded-4" src="assets/img/about/about-1.jpg" alt="img">\n                    <div class="bg-warning text-center p-3 rounded-5 position-absolute top-0 end-0 z-index-1 d-none d-sm-block my-3 mx-3">\n                        <i class="isax isax-message-question5 heading-color fs-46"></i>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-7">\n                <div class="section-header">\n                    <span class="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">FAQs</span>\n                    <h2>Frequently Asked Questions</h2>\n                    <p>Explore detailed answers to the most common questions about our platform.</p>\n                </div>\n                <div class="faq-content">\n                    <div class="accordion accordion-customicon1 accordions-items-seperate" id="accordioncustomicon1Example">\n                        <div class="accordion-item" data-aos="fade-up">\n                            <h2 class="accordion-header" id="headingcustomicon1One">\n                                <a href="javascript:void(0);" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapsecustomicon1One" aria-expanded="true" aria-controls="collapsecustomicon1One">\n                                What\u2019s DreamLMS want to give you? <i class="isax isax-add fs-20 fw-semibold ms-1"></i>\n                                </a>\n                            </h2>\n                            <div id="collapsecustomicon1One" class="accordion-collapse collapse show" aria-labelledby="headingcustomicon1One" data-bs-parent="#accordioncustomicon1Example">\n                                <div class="accordion-body pt-0">\n                                <p>DreamLMS aims to provide you with a comprehensive and intuitive learning platform that enhances your educational experience.</p>                                     \n                                </div>\n                            </div>\n                        </div>\n                        <div class="accordion-item" data-aos="fade-up" data-aos-delay="250">\n                            <h2 class="accordion-header" id="headingcustomicon1Two">\n                            <a href="javascript:void(0);" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapsecustomicon1Two" aria-expanded="false" aria-controls="collapsecustomicon1One">\n                                Why choose us for your education? <i class="isax isax-add fs-20 fw-semibold ms-1"></i>\n                            </a>\n                            </h2>\n                            <div id="collapsecustomicon1Two" class="accordion-collapse collapse" aria-labelledby="headingcustomicon1Two" data-bs-parent="#accordioncustomicon1Example">\n                            <div class="accordion-body pt-0">\n                                <p>DreamLMS aims to provide you with a comprehensive and intuitive learning platform that enhances your educational experience.</p>                                     \n                            </div>\n                            </div>\n                        </div>\n                        <div class="accordion-item" data-aos="fade-up" data-aos-delay="250">\n                            <h2 class="accordion-header" id="headingcustomicon1Three">\n                            <a href="javascript:void(0);" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapsecustomicon1Three" aria-expanded="false" aria-controls="collapsecustomicon1One">\n                            How We Provide Service For you? <i class="isax isax-add fs-20 fw-semibold ms-1"></i>\n                            </a>\n                            </h2>\n                            <div id="collapsecustomicon1Three" class="accordion-collapse collapse" aria-labelledby="headingcustomicon1Three" data-bs-parent="#accordioncustomicon1Example">\n                            <div class="accordion-body pt-0">\n                                <p>DreamLMS aims to provide you with a comprehensive and intuitive learning platform that enhances your educational experience.</p>                                     \n                            </div>\n                            </div>\n                        </div>\n                        <div class="accordion-item" data-aos="fade-up" data-aos-delay="250">\n                            <h2 class="accordion-header" id="headingcustomicon1Four">\n                            <a href="javascript:void(0);" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapsecustomicon1Four" aria-expanded="false" aria-controls="collapsecustomicon1One">\n                                Do you have a monthly plan? <i class="isax isax-add fs-20 fw-semibold ms-1"></i>\n                            </a>\n                            </h2>\n                            <div id="collapsecustomicon1Four" class="accordion-collapse collapse" aria-labelledby="headingcustomicon1Four" data-bs-parent="#accordioncustomicon1Example">\n                            <div class="accordion-body pt-0">\n                                <p>DreamLMS aims to provide you with a comprehensive and intuitive learning platform that enhances your educational experience.</p>                                     \n                            </div>\n                            </div>\n                        </div>\n                        <div class="accordion-item" data-aos="fade-up" data-aos-delay="250">\n                            <h2 class="accordion-header" id="headingcustomicon1Five">\n                            <a href="javascript:void(0);" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapsecustomicon1Five" aria-expanded="false" aria-controls="collapsecustomicon1One">\n                            Are you Affordable For Your Course <i class="isax isax-add fs-20 fw-semibold ms-1"></i>\n                            </a>\n                            </h2>\n                            <div id="collapsecustomicon1Five" class="accordion-collapse collapse" aria-labelledby="headingcustomicon1Five" data-bs-parent="#accordioncustomicon1Example">\n                            <div class="accordion-body pt-0">\n                                <p>DreamLMS aims to provide you with a comprehensive and intuitive learning platform that enhances your educational experience.</p>                                     \n                            </div>\n                            </div>\n                        </div>\n                                                    \n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- faq -->' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutUsComponent, { className: "AboutUsComponent", filePath: "src/app/features/pages/about-us/about-us.component.ts", lineNumber: 13 });
})();
export {
  AboutUsComponent
};
//# sourceMappingURL=chunk-DDIV64VE.js.map
