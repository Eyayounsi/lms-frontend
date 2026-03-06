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
  CommonService
} from "./chunk-CDB6UHUA.js";
import {
  Swiper,
  createElement,
  elementTransitionEnd,
  getSlideTransformEl,
  getWindow,
  nextTick,
  now
} from "./chunk-LUFWWOYJ.js";
import {
  CourseService
} from "./chunk-C7JGHRMX.js";
import "./chunk-MFSRU4HL.js";
import {
  DataService
} from "./chunk-44KX7P7T.js";
import {
  SlickCarouselComponent,
  SlickCarouselModule,
  SlickItemDirective
} from "./chunk-PRTCGMFX.js";
import {
  routes
} from "./chunk-E6TQA5KL.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-VF2E3YWR.js";
import {
  Router,
  RouterLink
} from "./chunk-TPKO67I6.js";
import "./chunk-QFZWCWB7.js";
import "./chunk-PXFMCAI3.js";
import {
  CommonModule,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-YBJXKBE2.js";
import {
  Component,
  ViewEncapsulation,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5DE2SIVI.js";
import {
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-TXDUYLVM.js";

// src/app/features/home-list/home/home.component.ts
var AOS = __toESM(require_aos());

// node_modules/swiper/modules/mousewheel.mjs
function Mousewheel(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const window2 = getWindow();
  extendParams({
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarget: "container",
      thresholdDelta: null,
      thresholdTime: null,
      noMousewheelClass: "swiper-no-mousewheel"
    }
  });
  swiper.mousewheel = {
    enabled: false
  };
  let timeout;
  let lastScrollTime = now();
  let lastEventBeforeSnap;
  const recentWheelEvents = [];
  function normalize(e) {
    const PIXEL_STEP = 10;
    const LINE_HEIGHT = 40;
    const PAGE_HEIGHT = 800;
    let sX = 0;
    let sY = 0;
    let pX = 0;
    let pY = 0;
    if ("detail" in e) {
      sY = e.detail;
    }
    if ("wheelDelta" in e) {
      sY = -e.wheelDelta / 120;
    }
    if ("wheelDeltaY" in e) {
      sY = -e.wheelDeltaY / 120;
    }
    if ("wheelDeltaX" in e) {
      sX = -e.wheelDeltaX / 120;
    }
    if ("axis" in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }
    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;
    if ("deltaY" in e) {
      pY = e.deltaY;
    }
    if ("deltaX" in e) {
      pX = e.deltaX;
    }
    if (e.shiftKey && !pX) {
      pX = pY;
      pY = 0;
    }
    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) {
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    }
    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }
    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }
    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  }
  function handleMouseEnter() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = true;
  }
  function handleMouseLeave() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = false;
  }
  function animateSlider(newEvent) {
    if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
      return false;
    }
    if (swiper.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
      return false;
    }
    if (newEvent.delta >= 6 && now() - lastScrollTime < 60) {
      return true;
    }
    if (newEvent.direction < 0) {
      if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
        swiper.slideNext();
        emit("scroll", newEvent.raw);
      }
    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
      swiper.slidePrev();
      emit("scroll", newEvent.raw);
    }
    lastScrollTime = new window2.Date().getTime();
    return false;
  }
  function releaseScroll(newEvent) {
    const params = swiper.params.mousewheel;
    if (newEvent.direction < 0) {
      if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
        return true;
      }
    } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
      return true;
    }
    return false;
  }
  function handle(event2) {
    let e = event2;
    let disableParentSwiper = true;
    if (!swiper.enabled) return;
    if (event2.target.closest(`.${swiper.params.mousewheel.noMousewheelClass}`)) return;
    const params = swiper.params.mousewheel;
    if (swiper.params.cssMode) {
      e.preventDefault();
    }
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== "container") {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    const targetElContainsTarget = targetEl && targetEl.contains(e.target);
    if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;
    if (e.originalEvent) e = e.originalEvent;
    let delta = 0;
    const rtlFactor = swiper.rtlTranslate ? -1 : 1;
    const data = normalize(e);
    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;
        else return true;
      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;
      else return true;
    } else {
      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
    }
    if (delta === 0) return true;
    if (params.invert) delta = -delta;
    let positions = swiper.getTranslate() + delta * params.sensitivity;
    if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
    if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();
    disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
    if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
    if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
      const newEvent = {
        time: now(),
        delta: Math.abs(delta),
        direction: Math.sign(delta),
        raw: event2
      };
      if (recentWheelEvents.length >= 2) {
        recentWheelEvents.shift();
      }
      const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
      recentWheelEvents.push(newEvent);
      if (prevEvent) {
        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
          animateSlider(newEvent);
        }
      } else {
        animateSlider(newEvent);
      }
      if (releaseScroll(newEvent)) {
        return true;
      }
    } else {
      const newEvent = {
        time: now(),
        delta: Math.abs(delta),
        direction: Math.sign(delta)
      };
      const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
      if (!ignoreWheelEvents) {
        lastEventBeforeSnap = void 0;
        let position = swiper.getTranslate() + delta * params.sensitivity;
        const wasBeginning = swiper.isBeginning;
        const wasEnd = swiper.isEnd;
        if (position >= swiper.minTranslate()) position = swiper.minTranslate();
        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
          swiper.updateSlidesClasses();
        }
        if (swiper.params.loop) {
          swiper.loopFix({
            direction: newEvent.direction < 0 ? "next" : "prev",
            byMousewheel: true
          });
        }
        if (swiper.params.freeMode.sticky) {
          clearTimeout(timeout);
          timeout = void 0;
          if (recentWheelEvents.length >= 15) {
            recentWheelEvents.shift();
          }
          const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
          const firstEvent = recentWheelEvents[0];
          recentWheelEvents.push(newEvent);
          if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
            recentWheelEvents.splice(0);
          } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
            const snapToThreshold = delta > 0 ? 0.8 : 0.2;
            lastEventBeforeSnap = newEvent;
            recentWheelEvents.splice(0);
            timeout = nextTick(() => {
              if (swiper.destroyed || !swiper.params) return;
              swiper.slideToClosest(swiper.params.speed, true, void 0, snapToThreshold);
            }, 0);
          }
          if (!timeout) {
            timeout = nextTick(() => {
              if (swiper.destroyed || !swiper.params) return;
              const snapToThreshold = 0.5;
              lastEventBeforeSnap = newEvent;
              recentWheelEvents.splice(0);
              swiper.slideToClosest(swiper.params.speed, true, void 0, snapToThreshold);
            }, 500);
          }
        }
        if (!ignoreWheelEvents) emit("scroll", e);
        if (swiper.params.autoplay && swiper.params.autoplay.disableOnInteraction) swiper.autoplay.stop();
        if (params.releaseOnEdges && (position === swiper.minTranslate() || position === swiper.maxTranslate())) {
          return true;
        }
      }
    }
    if (e.preventDefault) e.preventDefault();
    else e.returnValue = false;
    return false;
  }
  function events(method) {
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== "container") {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    targetEl[method]("mouseenter", handleMouseEnter);
    targetEl[method]("mouseleave", handleMouseLeave);
    targetEl[method]("wheel", handle);
  }
  function enable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.removeEventListener("wheel", handle);
      return true;
    }
    if (swiper.mousewheel.enabled) return false;
    events("addEventListener");
    swiper.mousewheel.enabled = true;
    return true;
  }
  function disable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.addEventListener(event, handle);
      return true;
    }
    if (!swiper.mousewheel.enabled) return false;
    events("removeEventListener");
    swiper.mousewheel.enabled = false;
    return true;
  }
  on("init", () => {
    if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
      disable();
    }
    if (swiper.params.mousewheel.enabled) enable();
  });
  on("destroy", () => {
    if (swiper.params.cssMode) {
      enable();
    }
    if (swiper.mousewheel.enabled) disable();
  });
  Object.assign(swiper.mousewheel, {
    enable,
    disable
  });
}

// node_modules/swiper/shared/effect-init.mjs
function effectInit(params) {
  const {
    effect,
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams,
    perspective,
    recreateShadows,
    getEffectParams
  } = params;
  on("beforeInit", () => {
    if (swiper.params.effect !== effect) return;
    swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
    if (perspective && perspective()) {
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
    }
    const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
    Object.assign(swiper.params, overwriteParamsResult);
    Object.assign(swiper.originalParams, overwriteParamsResult);
  });
  on("setTranslate _virtualUpdated", () => {
    if (swiper.params.effect !== effect) return;
    setTranslate();
  });
  on("setTransition", (_s, duration) => {
    if (swiper.params.effect !== effect) return;
    setTransition(duration);
  });
  on("transitionEnd", () => {
    if (swiper.params.effect !== effect) return;
    if (recreateShadows) {
      if (!getEffectParams || !getEffectParams().slideShadows) return;
      swiper.slides.forEach((slideEl) => {
        slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl) => shadowEl.remove());
      });
      recreateShadows();
    }
  });
  let requireUpdateOnVirtual;
  on("virtualUpdate", () => {
    if (swiper.params.effect !== effect) return;
    if (!swiper.slides.length) {
      requireUpdateOnVirtual = true;
    }
    requestAnimationFrame(() => {
      if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
        setTranslate();
        requireUpdateOnVirtual = false;
      }
    });
  });
}

// node_modules/swiper/shared/effect-target.mjs
function effectTarget(effectParams, slideEl) {
  const transformEl = getSlideTransformEl(slideEl);
  if (transformEl !== slideEl) {
    transformEl.style.backfaceVisibility = "hidden";
    transformEl.style["-webkit-backface-visibility"] = "hidden";
  }
  return transformEl;
}

// node_modules/swiper/shared/effect-virtual-transition-end.mjs
function effectVirtualTransitionEnd(_ref) {
  let {
    swiper,
    duration,
    transformElements,
    allSlides
  } = _ref;
  const {
    activeIndex
  } = swiper;
  const getSlide = (el) => {
    if (!el.parentElement) {
      const slide = swiper.slides.find((slideEl) => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode);
      return slide;
    }
    return el.parentElement;
  };
  if (swiper.params.virtualTranslate && duration !== 0) {
    let eventTriggered = false;
    let transitionEndTarget;
    if (allSlides) {
      transitionEndTarget = transformElements;
    } else {
      transitionEndTarget = transformElements.filter((transformEl) => {
        const el = transformEl.classList.contains("swiper-slide-transform") ? getSlide(transformEl) : transformEl;
        return swiper.getSlideIndex(el) === activeIndex;
      });
    }
    transitionEndTarget.forEach((el) => {
      elementTransitionEnd(el, () => {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        const evt = new window.CustomEvent("transitionend", {
          bubbles: true,
          cancelable: true
        });
        swiper.wrapperEl.dispatchEvent(evt);
      });
    });
  }
}

// node_modules/swiper/shared/create-shadow.mjs
function createShadow(suffix, slideEl, side) {
  const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ""}${suffix ? ` swiper-slide-shadow-${suffix}` : ""}`;
  const shadowContainer = getSlideTransformEl(slideEl);
  let shadowEl = shadowContainer.querySelector(`.${shadowClass.split(" ").join(".")}`);
  if (!shadowEl) {
    shadowEl = createElement("div", shadowClass.split(" "));
    shadowContainer.append(shadowEl);
  }
  return shadowEl;
}

// node_modules/swiper/modules/effect-cards.mjs
function EffectCards(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    cardsEffect: {
      slideShadows: true,
      rotate: true,
      perSlideRotate: 2,
      perSlideOffset: 8
    }
  });
  const setTranslate = () => {
    const {
      slides,
      activeIndex,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.cardsEffect;
    const {
      startTranslate,
      isTouched
    } = swiper.touchEventsData;
    const currentTranslate = rtl ? -swiper.translate : swiper.translate;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const slideProgress = slideEl.progress;
      const progress = Math.min(Math.max(slideProgress, -4), 4);
      let offset = slideEl.swiperSlideOffset;
      if (swiper.params.centeredSlides && !swiper.params.cssMode) {
        swiper.wrapperEl.style.transform = `translateX(${swiper.minTranslate()}px)`;
      }
      if (swiper.params.centeredSlides && swiper.params.cssMode) {
        offset -= slides[0].swiperSlideOffset;
      }
      let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let tY = 0;
      const tZ = -100 * Math.abs(progress);
      let scale = 1;
      let rotate = -params.perSlideRotate * progress;
      let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
      const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
      const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
      const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
      if (isSwipeToNext || isSwipeToPrev) {
        const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
        rotate += -28 * progress * subProgress;
        scale += -0.5 * subProgress;
        tXAdd += 96 * subProgress;
        tY = `${-25 * subProgress * Math.abs(progress)}%`;
      }
      if (progress < 0) {
        tX = `calc(${tX}px ${rtl ? "-" : "+"} (${tXAdd * Math.abs(progress)}%))`;
      } else if (progress > 0) {
        tX = `calc(${tX}px ${rtl ? "-" : "+"} (-${tXAdd * Math.abs(progress)}%))`;
      } else {
        tX = `${tX}px`;
      }
      if (!swiper.isHorizontal()) {
        const prevY = tY;
        tY = tX;
        tX = prevY;
      }
      const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
      const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rtl ? -rotate : rotate : 0}deg)
        scale(${scaleString})
      `;
      if (params.slideShadows) {
        let shadowEl = slideEl.querySelector(".swiper-slide-shadow");
        if (!shadowEl) {
          shadowEl = createShadow("cards", slideEl);
        }
        if (shadowEl) shadowEl.style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
      }
      slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.transform = transform;
    }
  };
  const setTransition = (duration) => {
    const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
    transformElements.forEach((el) => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll(".swiper-slide-shadow").forEach((shadowEl) => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements
    });
  };
  effectInit({
    effect: "cards",
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      _loopSwapReset: false,
      watchSlidesProgress: true,
      loopAdditionalSlides: swiper.params.cardsEffect.rotate ? 3 : 2,
      centeredSlides: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

// src/app/features/layouts/footer/footer.component.ts
var Aos = __toESM(require_aos());

// src/app/features/layouts/footer/footer-top-container/footer-top-container.component.ts
var FooterTopContainerComponent = class _FooterTopContainerComponent {
  routes = routes;
  static \u0275fac = function FooterTopContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterTopContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterTopContainerComponent, selectors: [["app-footer-top-container"]], decls: 89, vars: 9, consts: [[1, "container"], [1, "row", "row-gap-4"], [1, "col-lg-4"], [1, "footer-about"], [1, "footer-logo"], ["src", "assets/img/logo-white.svg", "alt", ""], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "me-2"], ["src", "assets/img/icon/appstore.svg", "alt", ""], ["href", "javascript:void(0);"], ["src", "assets/img/icon/googleplay.svg", "alt", ""], [1, "col-lg-5"], [1, "col-lg-4", "col-md-4"], [1, "footer-widget", "footer-menu"], [1, "footer-title"], [3, "routerLink"], ["href", "javscript:void(0);"], [1, "col-lg-3"], [1, "footer-widget", "footer-contact"], [1, "footer-newsletter"], ["action", "javascript:void(0);"], [1, "subscribe-form"], [1, "isax", "isax-message-text"], ["type", "email", "placeholder", "Email Address", 1, "form-control"], ["type", "submit", 1, "btn", "btn-secondary", "btn-xl", "w-100"]], template: function FooterTopContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "img", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6)(9, "a", 7);
      \u0275\u0275element(10, "img", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 9);
      \u0275\u0275element(12, "img", 10);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(13, "div", 11)(14, "div", 1)(15, "div", 12)(16, "div", 13)(17, "h5", 14);
      \u0275\u0275text(18, "Support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "ul")(20, "li")(21, "a", 15);
      \u0275\u0275text(22, "Education");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "li")(24, "a", 15);
      \u0275\u0275text(25, "Enroll Course");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "li")(27, "a", 16);
      \u0275\u0275text(28, "Orders");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "li")(30, "a", 15);
      \u0275\u0275text(31, "Payments");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "li")(33, "a", 15);
      \u0275\u0275text(34, "Blogs");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(35, "div", 12)(36, "div", 13)(37, "h5", 14);
      \u0275\u0275text(38, "About");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "ul")(40, "li")(41, "a", 15);
      \u0275\u0275text(42, "Categories");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "li")(44, "a", 15);
      \u0275\u0275text(45, "Courses");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "li")(47, "a", 15);
      \u0275\u0275text(48, "About Us");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "li")(50, "a", 15);
      \u0275\u0275text(51, "Faq");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "li")(53, "a", 15);
      \u0275\u0275text(54, "Contacts");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(55, "div", 12)(56, "div", 13)(57, "h5", 14);
      \u0275\u0275text(58, "Useful Links");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "ul")(60, "li")(61, "a", 9);
      \u0275\u0275text(62, "Our values");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "li")(64, "a", 9);
      \u0275\u0275text(65, "Our advisory board");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "li")(67, "a", 9);
      \u0275\u0275text(68, "Our partners");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "li")(70, "a", 9);
      \u0275\u0275text(71, "Become a partner");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "li")(73, "a", 9);
      \u0275\u0275text(74, "Work at Future Learn");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(75, "div", 17)(76, "div", 18)(77, "h5", 14);
      \u0275\u0275text(78, "Subscribe Newsletter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "div", 19)(80, "p");
      \u0275\u0275text(81, "Sign up to get updates & news.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "form", 20)(83, "div", 21)(84, "span");
      \u0275\u0275element(85, "i", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275element(86, "input", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "button", 24);
      \u0275\u0275text(88, "Subscribe");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(21);
      \u0275\u0275property("routerLink", ctx.routes.courseGrid);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.addCourse);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.page_pricing_plan);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.blog_grid);
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", ctx.routes.courseCategory);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.courseList);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.aboutUs);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.page_faq);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.contactUs);
    }
  }, dependencies: [CommonModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterTopContainerComponent, [{
    type: Component,
    args: [{ selector: "app-footer-top-container", imports: [CommonModule, RouterLink], template: '<div class="container">\n    <div class="row row-gap-4">\n        <div class="col-lg-4">\n            <div class="footer-about">\n                <div class="footer-logo">\n                    <img src="assets/img/logo-white.svg" alt="">\n                </div>\n                <p>Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.</p>\n                <div class="d-flex align-items-center">\n                    <a href="javascript:void(0);" class="me-2"><img src="assets/img/icon/appstore.svg" alt=""></a>\n                    <a href="javascript:void(0);"><img src="assets/img/icon/googleplay.svg" alt=""></a>\n                </div>\n            </div>\n        </div>\n        <div class="col-lg-5">\n            <div class="row row-gap-4">\n                <div class="col-lg-4 col-md-4">\n                    <div class="footer-widget footer-menu">\n                        <h5 class="footer-title">Support</h5>\n                        <ul>\n                            <li><a [routerLink]="routes.courseGrid">Education</a></li>\n                            <li><a [routerLink]="routes.addCourse">Enroll Course</a></li>\n                            <li><a href="javscript:void(0);">Orders</a></li>\n                            <li><a [routerLink]="routes.page_pricing_plan">Payments</a></li>\n                            <li><a [routerLink]="routes.blog_grid">Blogs</a></li>\n                        </ul>\n                    </div>\n                </div>\n                <div class="col-lg-4 col-md-4">\n                    <div class="footer-widget footer-menu">\n                        <h5 class="footer-title">About</h5>\n                        <ul>\n                            <li><a [routerLink]="routes.courseCategory">Categories</a></li>\n                            <li><a [routerLink]="routes.courseList">Courses</a></li>\n                            <li><a [routerLink]="routes.aboutUs">About Us</a></li>\n                            <li><a [routerLink]="routes.page_faq">Faq</a></li>\n                            <li><a [routerLink]="routes.contactUs">Contacts</a></li>\n                        </ul>\n                    </div>\n                </div>\n                <div class="col-lg-4 col-md-4">\n                    <div class="footer-widget footer-menu">\n                        <h5 class="footer-title">Useful Links</h5>\n                        <ul>\n                            <li><a href="javascript:void(0);">Our values</a></li>\n                            <li><a href="javascript:void(0);">Our advisory board</a></li>\n                            <li><a href="javascript:void(0);">Our partners</a></li>\n                            <li><a href="javascript:void(0);">Become a partner</a></li>\n                            <li><a href="javascript:void(0);">Work at Future Learn</a></li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>							\n        <div class="col-lg-3">\n            <div class="footer-widget footer-contact">\n                <h5 class="footer-title">Subscribe Newsletter</h5>\n                <div class="footer-newsletter">\n                    <p>Sign up to get updates & news.</p>							\n                    <form action="javascript:void(0);">\n                        <div class="subscribe-form">\n                            <span>\n                                <i class="isax isax-message-text"></i>\n                            </span>\n                            <input type="email" class="form-control" placeholder="Email Address">\n                        </div>\n                        <button type="submit" class="btn btn-secondary btn-xl w-100">Subscribe</button>		\n                    </form>	\n                </div>	\n            </div>\n        </div>\n    </div>\n</div>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterTopContainerComponent, { className: "FooterTopContainerComponent", filePath: "src/app/features/layouts/footer/footer-top-container/footer-top-container.component.ts", lineNumber: 12 });
})();

// src/app/features/layouts/footer/footer.component.ts
var FooterComponent = class _FooterComponent {
  common;
  base = "";
  routes = routes;
  constructor(common) {
    this.common = common;
    this.common.base.subscribe((res) => {
      this.base = res;
    });
  }
  ngOnInit() {
    Aos.init({
      duration: 1500,
      once: true
    });
  }
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)(\u0275\u0275directiveInject(CommonService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 33, vars: 2, consts: [[1, "footer", "footer-one"], ["data-aos", "fade-up", "data-aos-duration", "1500", 1, "footer-top", "aos"], [1, "footer-bottom"], [1, "container"], [1, "row", "row-gap-2"], [1, "col-lg-5"], [1, "text-center", "text-lg-start"], [1, "text-secondary"], [1, "col-lg-4"], [1, "d-flex", "align-items-center", "justify-content-center", "footer-link"], [3, "routerLink"], [1, "col-lg-3"], [1, "social-icon"], ["href", "javascript:void(0);"], [1, "fa-brands", "fa-facebook-f"], [1, "fa-brands", "fa-instagram"], [1, "fa-brands", "fa-x-twitter"], [1, "fa-brands", "fa-youtube"], [1, "fa-brands", "fa-linkedin"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1);
      \u0275\u0275element(2, "app-footer-top-container");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "p");
      \u0275\u0275text(9, "Copyright 2025 \xA9 ");
      \u0275\u0275elementStart(10, "span", 7);
      \u0275\u0275text(11, "DreamsLMS");
      \u0275\u0275elementEnd();
      \u0275\u0275text(12, ". All right reserved.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 8)(14, "ul", 9)(15, "li")(16, "a", 10);
      \u0275\u0275text(17, "Terms & Conditions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "li")(19, "a", 10);
      \u0275\u0275text(20, "Privacy Policy");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 11)(22, "div", 12)(23, "a", 13);
      \u0275\u0275element(24, "i", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "a", 13);
      \u0275\u0275element(26, "i", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "a", 13);
      \u0275\u0275element(28, "i", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "a", 13);
      \u0275\u0275element(30, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "a", 13);
      \u0275\u0275element(32, "i", 18);
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275property("routerLink", ctx.routes.page_term_condition);
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", ctx.routes.page_privacy_policy);
    }
  }, dependencies: [CommonModule, RouterLink, FooterTopContainerComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer", imports: [CommonModule, RouterLink, FooterTopContainerComponent], template: '<!-- Footer -->\n<footer class="footer footer-one">\n\n  <!-- Footer Top -->\n\n    <div class="footer-top aos" data-aos="fade-up" data-aos-duration="1500">\n      <app-footer-top-container></app-footer-top-container>\n    </div>\n\n\n  <!-- /Footer Top -->\n\n  <!-- Footer Bottom -->\n  <div class="footer-bottom">\n    <div class="container">\n      <div class="row row-gap-2">\n        <div class="col-lg-5">\n          <div class="text-center text-lg-start">									\n            <p>Copyright 2025 \xA9 <span class="text-secondary">DreamsLMS</span>. All right reserved.</p>\n          </div>\n        </div>\n        <div class="col-lg-4">\n          <ul class="d-flex align-items-center justify-content-center footer-link">\n            <li><a [routerLink]="routes.page_term_condition">Terms & Conditions</a></li>\n            <li><a [routerLink]="routes.page_privacy_policy">Privacy Policy</a></li>\n          </ul>\n        </div>\n        <div class="col-lg-3">\n          <div class="social-icon">\n            <a href="javascript:void(0);"><i class="fa-brands fa-facebook-f"></i></a>\n            <a href="javascript:void(0);"><i class="fa-brands fa-instagram"></i></a>\n            <a href="javascript:void(0);"><i class="fa-brands fa-x-twitter"></i></a>\n            <a href="javascript:void(0);"><i class="fa-brands fa-youtube"></i></a>\n            <a href="javascript:void(0);"><i class="fa-brands fa-linkedin"></i></a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /Footer Bottom -->\n\n</footer>\n<!-- /Footer -->\n' }]
  }], () => [{ type: CommonService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/features/layouts/footer/footer.component.ts", lineNumber: 15 });
})();

// src/app/features/home-list/home/home.component.ts
var _c0 = (a0) => ({ "selected": a0 });
var _c1 = (a0, a1) => [a0, a1];
function HomeComponent_li_27_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 225);
  }
  if (rf & 2) {
    const cat_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(cat_r3.icon);
  }
}
function HomeComponent_li_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 223);
    \u0275\u0275listener("click", function HomeComponent_li_27_Template_a_click_1_listener() {
      const cat_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectCategory(cat_r3.id, cat_r3.name));
    });
    \u0275\u0275template(2, HomeComponent_li_27_i_2_Template, 1, 2, "i", 224);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", cat_r3.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", cat_r3.name, " ");
  }
}
function HomeComponent_li_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 226);
    \u0275\u0275text(2, "Chargement...");
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_div_69_p_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 249);
    \u0275\u0275element(1, "i", 250);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const course_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(3, 2, course_r6.averageRating, "1.1-1"), " (", course_r6.reviewCount || 0, " avis) ");
  }
}
function HomeComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 227)(1, "div", 228)(2, "div", 229)(3, "div", 230);
    \u0275\u0275element(4, "img", 231);
    \u0275\u0275elementStart(5, "div", 232)(6, "a", 233);
    \u0275\u0275element(7, "i", 234);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 235)(9, "div", 236)(10, "div", 237)(11, "a", 238);
    \u0275\u0275element(12, "img", 239);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 240)(14, "a", 241);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "span", 242);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "h6", 108)(19, "a", 243);
    \u0275\u0275listener("click", function HomeComponent_div_69_Template_a_click_19_listener() {
      const course_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.goToCourseDetail(course_r6.id));
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, HomeComponent_div_69_p_21_Template, 4, 5, "p", 244);
    \u0275\u0275elementStart(22, "div", 245)(23, "h6", 246);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "a", 247);
    \u0275\u0275listener("click", function HomeComponent_div_69_Template_a_click_25_listener() {
      const course_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.goToCourseDetail(course_r6.id));
    });
    \u0275\u0275text(26, "Voir le cours");
    \u0275\u0275element(27, "i", 248);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const course_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("z-index", 3 - i_r7);
    \u0275\u0275classProp("swiper-slide-active", i_r7 === 0)("swiper-slide-next", i_r7 === 1);
    \u0275\u0275advance(4);
    \u0275\u0275property("alt", \u0275\u0275interpolate(course_r6.title))("src", ctx_r3.getImageUrl(course_r6.coverImage), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(8);
    \u0275\u0275property("src", ctx_r3.getAvatarUrl(course_r6.instructorAvatar), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(course_r6.instructorName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", course_r6.categoryName || "Cours", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(course_r6.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", course_r6.averageRating);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatPrice(course_r6), " ");
  }
}
function HomeComponent_div_160_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 255);
    \u0275\u0275element(1, "i", 256);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(cat_r9.icon);
  }
}
function HomeComponent_div_160_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 257);
  }
}
function HomeComponent_div_160_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 135)(1, "div", 251);
    \u0275\u0275template(2, HomeComponent_div_160_div_2_Template, 2, 2, "div", 252)(3, HomeComponent_div_160_img_3_Template, 1, 0, "img", 253);
    \u0275\u0275elementStart(4, "h6", 254)(5, "a", 243);
    \u0275\u0275listener("click", function HomeComponent_div_160_Template_a_click_5_listener() {
      const cat_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectCategory(cat_r9.id, cat_r9.name));
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const cat_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", cat_r9.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !cat_r9.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cat_r9.name);
  }
}
function HomeComponent_div_215_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 269)(1, "span", 270);
    \u0275\u0275element(2, "i", 271);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const course_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 1, course_r11.averageRating, "1.1-1"));
  }
}
function HomeComponent_div_215_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 135)(1, "div", 258)(2, "div", 230)(3, "a", 243);
    \u0275\u0275listener("click", function HomeComponent_div_215_Template_a_click_3_listener() {
      const course_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.goToCourseDetail(course_r11.id));
    });
    \u0275\u0275element(4, "img", 231);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 232)(6, "span", 259);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 245)(9, "span", 260);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 261);
    \u0275\u0275listener("click", function HomeComponent_div_215_Template_a_click_11_listener() {
      const i_r12 = \u0275\u0275restoreView(_r10).index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.iconSelect(i_r12 + 1));
    });
    \u0275\u0275element(12, "i", 234);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 262)(14, "h5")(15, "a", 243);
    \u0275\u0275listener("click", function HomeComponent_div_215_Template_a_click_15_listener() {
      const course_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.goToCourseDetail(course_r11.id));
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 263)(18, "div", 264)(19, "span", 265)(20, "a", 214);
    \u0275\u0275element(21, "img", 266);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "a", 214);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, HomeComponent_div_215_div_24_Template, 5, 4, "div", 267);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "a", 268);
    \u0275\u0275listener("click", function HomeComponent_div_215_Template_a_click_25_listener() {
      const course_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.goToCourseDetail(course_r11.id));
    });
    \u0275\u0275text(26, "Voir le cours");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const course_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("alt", \u0275\u0275interpolate(course_r11.title))("src", ctx_r3.getImageUrl(course_r11.coverImage), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.formatPrice(course_r11));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(course_r11.categoryName || "Cours");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c0, ctx_r3.isSelected[i_r12 + 1]));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(course_r11.title);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", ctx_r3.getAvatarUrl(course_r11.instructorAvatar), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(course_r11.instructorName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", course_r11.averageRating);
  }
}
function HomeComponent_div_362_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 278);
    \u0275\u0275element(1, "i", 279);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const inst_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(inst_r13.avgRating);
  }
}
function HomeComponent_div_362_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 135)(1, "div", 272)(2, "div", 273)(3, "a", 274);
    \u0275\u0275element(4, "img", 275);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 276)(6, "div")(7, "h3", 254)(8, "a", 161);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 164);
    \u0275\u0275text(11, "Instructeur");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, HomeComponent_div_362_p_12_Template, 3, 1, "p", 277);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const inst_r13 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(6, _c1, ctx_r3.routes.instructorDetails, inst_r13.id));
    \u0275\u0275advance();
    \u0275\u0275property("alt", inst_r13.name)("src", ctx_r3.getAvatarUrl(inst_r13.avatar), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(9, _c1, ctx_r3.routes.instructorDetails, inst_r13.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(inst_r13.name);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", inst_r13.avgRating);
  }
}
Swiper.use([EffectCards, Mousewheel]);
var HomeComponent = class _HomeComponent {
  DataService;
  router;
  courseService;
  routes = routes;
  isSelected = [false];
  searchTerm = "";
  categories = [];
  selectedCategoryName = "S\xE9lectionner";
  featuredCourses = [];
  topInstructors = [];
  bannerCourses = [];
  constructor(DataService2, router, courseService) {
    this.DataService = DataService2;
    this.router = router;
    this.courseService = courseService;
  }
  onSubmit() {
    const q = this.searchTerm.trim();
    if (q) {
      this.router.navigate(["/courses/course-list-public"], { queryParams: { search: q } });
    } else {
      this.router.navigate(["/courses/course-list-public"]);
    }
  }
  selectCategory(catId, catName) {
    this.selectedCategoryName = catName;
    this.router.navigate(["/courses/course-list-public"], { queryParams: { categoryId: catId } });
  }
  //   config: SwiperOptions = {
  //     effect: 'cards',
  //     loop: false,
  //     grabCursor: true,
  //     slidesPerView: 'auto',
  //   };
  bannercard = [];
  slideConfig = {
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
  topCourseSlider = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
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
  featureCourseSlider2 = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  brandSlide = {
    dots: false,
    infinite: true,
    speed: 2e3,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  instructorSlider = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScrol: 1
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
  settings = {
    counter: false,
    plugins: [lg_zoom_es5_default, lg_video_es5_default]
  };
  lightGallery;
  needRefresh = false;
  ngAfterViewChecked() {
    if (this.needRefresh) {
      this.lightGallery.refresh();
      this.needRefresh = false;
    }
  }
  onInit = (detail) => {
    this.lightGallery = detail.instance;
  };
  ngOnInit() {
    AOS.init({ duration: 1200, once: true });
    this.courseService.getCategories().subscribe({
      next: (cats) => {
        this.categories = cats;
      },
      error: () => {
      }
    });
    this.courseService.getPublishedCourses().subscribe({
      next: (courses) => {
        this.featuredCourses = courses.slice(0, 8);
        this.bannerCourses = courses.slice(0, 3);
        const map = /* @__PURE__ */ new Map();
        for (const c of courses) {
          if (!c.instructorId)
            continue;
          if (!map.has(c.instructorId)) {
            map.set(c.instructorId, {
              id: c.instructorId,
              name: c.instructorName || "Instructeur",
              avatar: c.instructorAvatar,
              totalRating: 0,
              ratingCount: 0
            });
          }
          const inst = map.get(c.instructorId);
          if (c.averageRating) {
            inst.totalRating += c.averageRating;
            inst.ratingCount++;
          }
        }
        this.topInstructors = Array.from(map.values()).map((i) => __spreadProps(__spreadValues({}, i), {
          avgRating: i.ratingCount > 0 ? (i.totalRating / i.ratingCount).toFixed(1) : null
        })).slice(0, 8);
      },
      error: () => {
      }
    });
  }
  toggleClass(slide) {
    slide.active = !slide.active;
  }
  directPath() {
    this.router.navigate(["/pages/course/course-list"]);
  }
  iconSelect(index) {
    this.isSelected[index] = !this.isSelected[index];
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
  formatPrice(course) {
    const price = +(course.effectivePrice ?? course.price ?? 0);
    return price === 0 ? "Gratuit" : price.toFixed(2) + " \u20AC";
  }
  goToCourseDetail(courseId) {
    this.router.navigate(["/courses/course-details-2"], { queryParams: { courseId } });
  }
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(CourseService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 651, vars: 41, consts: [["slickModal", "slick-carousel"], [1, "banner-section"], ["src", "assets/img/bg/bg-15.png", "alt", "img", 1, "img-fluid", "d-none", "d-lg-flex", "banner-bg1"], ["src", "assets/img/bg/bg-16.png", "alt", "img", 1, "img-fluid", "d-none", "d-lg-flex", "banner-bg2"], ["src", "assets/img/bg/bg-17.png", "alt", "img", 1, "img-fluid", "d-none", "d-lg-flex", "banner-bg3"], ["src", "assets/img/bg/bg-18.png", "alt", "img", 1, "img-fluid", "d-none", "d-lg-flex", "banner-bg4"], [1, "container"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-xl-7", "col-lg-7"], [1, "banner-content", "pe-xxl-5"], [1, "hero-title"], [1, "mb-4", "text-white"], [1, "fs-lg", "text-center", "text-md-start", "pb-2", "pb-md-3", "mb-4"], [1, "banner-search", 3, "ngSubmit"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "hero-dropdown"], [1, "isax", "isax-arrow-down5", "fs-12"], [1, "dropdown-menu", "p-1"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["type", "text", "name", "search", "placeholder", "Search for Courses, Instructors", 1, "border-0", "form-control", "p-0", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-secondary", "ms-auto"], [1, "isax", "isax-arrow-right-1"], [1, "d-flex", "align-items-center", "gap-4", "justify-content-lg-between", "justify-content-center", "flex-wrap"], [1, "counter-item"], [1, "counter-icon", "flex-shrink-0"], ["src", "assets/img/icons/icon-32.svg", "alt", "img"], [1, "count-content"], [1, "text-purple"], [1, "count-digit"], ["src", "assets/img/icons/icon-33.svg", "alt", "img"], [1, "text-skyblue"], ["src", "assets/img/icons/icon-34.svg", "alt", "img"], [1, "text-success"], [1, "col-xl-4", "col-lg-5"], [1, "banner-image", "pe-0"], [1, "swiper", "swiper-slider-banner", "w-auto"], [1, "swiper-wrapper"], [1, "swiper", "swiper-cards", "swiper-3d", "swiper-initialized", "swiper-horizontal", "swiper-pointer-events", "swiper-watch-progress"], ["class", "swiper-slide ng-star-inserted swiper-slide-visible", 3, "swiper-slide-active", "swiper-slide-next", "z-index", 4, "ngFor", "ngForOf"], [1, "benefit-section"], [1, "section-header", "text-center"], [1, "fw-medium", "text-secondary", "text-decoration-underline", "mb-2", "d-inline-block"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "card", "shadow-sm"], [1, "card-body", "p-4"], [1, "position-absolute", "top-0", "end-0", "mt-n3", "me-n4"], ["src", "./assets/img/shapes/bg-1.png", "alt", "img"], [1, "p-4", "rounded-pill", "bg-primary-transparent", "d-inline-flex"], [1, "isax", "isax-book-1", "fs-24"], [1, "mt-3", "mb-1"], ["src", "assets/img/shapes/bg-2.png", "alt", "img"], [1, "p-4", "rounded-pill", "bg-secondary-transparent", "d-inline-flex"], [1, "isax", "isax-bookmark5", "fs-24"], ["src", "assets/img/shapes/bg-3.png", "alt", "img"], [1, "p-4", "rounded-pill", "bg-skyblue-transparent", "d-inline-flex"], [1, "isax", "isax-chart-26", "fs-24"], [1, "client-section"], [1, "fw-medium", "text-center", "mb-4"], [1, "text-decoration-underline", "text-secondary"], [1, "institutions-slider", "lazy", "slider"], [3, "config"], ["ngxSlickItem", "", 1, "institutions-items", "p-1"], ["src", "./assets/img/client/01.svg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/client/02.svg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/client/03.svg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/client/04.svg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/client/05.svg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/client/06.svg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/client/07.svg", "alt", "img", 1, "img-fluid"], [1, "top-courses-sec"], ["src", "./assets/img/bg/bg-20.png", "alt", "img", 1, "top-courses-bg"], [1, "top-courses-slider", "lazy"], ["ngxSlickItem", "", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "btn-md", 3, "routerLink"], [1, "trust-sec"], [1, "video-showcase"], ["src", "assets/img/feature/feature-1.jpg", "alt", "banner", 1, "img-fluid", "w-100", "rounded-2"], [1, "video-play"], ["size", "1400-933", 3, "settings", "onInit"], ["src", "https://www.youtube.com/embed/1trvO6dqQUI"], [1, "isax", "isax-play5"], [1, "trust-content"], ["src", "./assets/img/bg/bg-19.png", "alt", "img", 1, "w-100", "trust-bg"], [1, "row", "justify-content-between"], [1, "col-md-4"], [1, "d-flex", "align-items-center", "flex-wrap", "mt-5", "gap-2"], [1, "btn", "btn-secondary", 3, "routerLink"], [1, "btn", "btn-dark", 3, "routerLink"], [1, "col-md-7"], [1, "col-md-6"], [1, "text-white", "mb-2"], [1, "text-white", "mb-5"], [1, "d-flex", "align-items-center", "bg-white", "user-goal", "p-2"], [1, "avatar", "avatar-lg", "flex-shrink-0"], ["src", "./assets/img/user/user-28.jpg", "alt", "img", 1, "rounded-pill"], [1, "text-gray-9", "mb-0"], [1, "featured-courses-section"], [1, "feature-course-slider-2"], [1, "d-flex", "align-items-center", "justify-content-center"], [1, "community-to-learn"], [1, "row", "align-items-center"], [1, "col-lg-6"], [1, "section-header"], [1, "community-item", "d-flex", "align-items-center"], [1, "community-icon-1"], [1, "isax", "isax-book-saved5"], [1, "mb-2"], [1, "mb-0"], [1, "community-icon-2"], [1, "isax", "isax-bookmark5"], [1, "community-icon-3"], [1, "isax", "isax-chart-26"], [1, "d-flex", "align-items-center", "gap-2"], [1, "btn", "btn-secondary", "btn-md", 3, "routerLink"], [1, "btn", "btn-dark", "btn-md", 3, "routerLink"], [1, "community-img", "d-none", "d-lg-flex"], ["src", "assets/img/shapes/shape-5.png", "alt", "img", 1, "img-fluid", "community-img-01"], ["src", "assets/img/shapes/shape-6.png", "alt", "img", 1, "img-fluid", "community-img-02"], ["src", "assets/img/feature/feature-2.jpg", "alt", "img", 1, "img-fluid", "community-img-03"], ["src", "assets/img/feature/feature-3.jpg", "alt", "img", 1, "img-fluid", "community-img-04"], ["src", "assets/img/shapes/shape-7.svg", "alt", "img", 1, "img-fluid", "community-img-05"], [1, "community-count", "p-2"], [1, "enrolled-list"], [1, "avatar-list-stacked", "mb-2"], [1, "avatar", "avatar-rounded"], ["src", "assets/img/user/user-01.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/user/user-03.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/user/user-07.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/user/user-08.jpg", "alt", "img", 1, "border", "border-white"], ["src", "assets/img/user/user-06.jpg", "alt", "img"], [1, "text-secondary"], [1, "cliets-section-one"], [1, "brand-slide"], ["ngxSlickItem", ""], ["src", "assets/img/client/08.svg", "alt", "img"], ["src", "assets/img/client/09.svg", "alt", "img"], ["src", "assets/img/client/10.svg", "alt", "img"], ["src", "assets/img/client/11.svg", "alt", "img"], ["src", "assets/img/client/12.svg", "alt", "img"], ["src", "assets/img/client/13.svg", "alt", "img"], [1, "how-it-works-sec-two"], ["data-aos", "fade-up", 1, "me-5"], ["src", "assets/img/feature/feature-27.jpg", "alt", "img", 1, "img-fluid", "rounded-5"], ["data-aos", "fade-up", 1, "how-it-works-content", "aos"], [1, "mb-1"], [1, "d-flex", "align-items-center", "works-items"], [1, "count"], [1, "d-flex", "align-items-center", "works-items", "mb-0", "pb-0", "border-0"], [1, "featured-instructor-sec"], ["data-aos", "fade-up", 1, "section-header", "text-center"], [1, "fw-medium", "text-light", "text-decoration-underline", "mb-2", "d-inline-block"], [1, "text-white"], [1, "text-light"], [1, "featured-instructor-slider", "lazy"], [1, "testimonials-section", "testimonials-sec-one", "text-center"], [1, "testimonials-slider", "lazy", "mt-4", 3, "config"], ["data-aos", "flip-right", 1, "testimonials-item", "rounded-3", "bg-white"], [1, "position-relative", "d-inline-flex", "m-auto"], [1, "avatar", "rounded-circle", "avatar-xxl", "border", "border-white", "border-3"], [3, "routerLink"], ["src", "./assets/img/user/user-41.jpg", "alt", "img", 1, "img-fluid", "rounded-circle"], [1, "isax", "isax-quote-up5", "bg-secondary", "quote", "rounded-pill", "fs-16", "p-1"], [1, "designation"], [1, "mb-3", "text-truncate", "line-clamb-2"], [1, "fa-solid", "fa-star", "text-warning"], ["src", "./assets/img/user/user-42.jpg", "alt", "img", 1, "img-fluid", "rounded-circle"], ["src", "./assets/img/user/user-43.jpg", "alt", "img", 1, "img-fluid", "rounded-circle"], [1, "testimonials-item", "rounded-3", "bg-white"], [1, "faq-section", "faq-banner-bg"], ["src", "assets/img/bg/bg-21.svg", "alt", "img", 1, "d-lg-flex", "d-none", "faq-bg2"], ["src", "assets/img/bg/bg-22.svg", "alt", "img", 1, "d-lg-flex", "d-none", "faq-bg3"], ["data-aos", "fade-up", 1, "faq-img"], ["src", "assets/img/feature/feature-4.jpg", "alt", "img", 1, "img-fluid", "rounded-5"], [1, "isax", "isax-message-question5"], [1, "faq-content"], ["data-aos", "fade-up", 1, "section-header"], ["id", "accordioncustomicon1Example", 1, "accordion", "accordion-customicon1", "accordions-items-seperate"], ["data-aos", "fade-up", 1, "accordion-item"], ["id", "headingcustomicon1One", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1One", "aria-expanded", "true", "aria-controls", "collapsecustomicon1One", 1, "accordion-button"], [1, "isax", "isax-add", "fs-20", "fw-semibold", "ms-1"], ["id", "collapsecustomicon1One", "aria-labelledby", "headingcustomicon1One", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body", "pt-0"], ["data-aos", "fade-up", "data-aos-delay", "250", 1, "accordion-item"], ["id", "headingcustomicon1Two", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1Two", "aria-expanded", "false", "aria-controls", "collapsecustomicon1One", 1, "accordion-button", "collapsed"], ["id", "collapsecustomicon1Two", "aria-labelledby", "headingcustomicon1Two", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse"], ["id", "headingcustomicon1Three", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1Three", "aria-expanded", "false", "aria-controls", "collapsecustomicon1One", 1, "accordion-button", "collapsed"], ["id", "collapsecustomicon1Three", "aria-labelledby", "headingcustomicon1Three", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse"], ["id", "headingcustomicon1Four", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1Four", "aria-expanded", "false", "aria-controls", "collapsecustomicon1One", 1, "accordion-button", "collapsed"], ["id", "collapsecustomicon1Four", "aria-labelledby", "headingcustomicon1Four", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse"], ["id", "headingcustomicon1Five", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1Five", "aria-expanded", "false", "aria-controls", "collapsecustomicon1One", 1, "accordion-button", "collapsed"], ["id", "collapsecustomicon1Five", "aria-labelledby", "headingcustomicon1Five", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse"], ["id", "headingcustomicon1Six", 1, "accordion-header"], ["href", "javascript:void(0);", "data-bs-toggle", "collapse", "data-bs-target", "#collapsecustomicon1Six", "aria-expanded", "false", "aria-controls", "collapsecustomicon1One", 1, "accordion-button", "collapsed"], ["id", "collapsecustomicon1Six", "aria-labelledby", "headingcustomicon1Six", "data-bs-parent", "#accordioncustomicon1Example", 1, "accordion-collapse", "collapse"], [1, "latest-blog-three", "latest-blog-five"], [1, "latest-blog-main"], [1, "col-lg-4"], ["data-aos", "fade-up", 1, "event-blog-three", "blog-three-one"], [1, "blog-img-three"], ["alt", "Img", "src", "assets/img/blog/blog-35.jpg", 1, "img-fluid"], [1, "latest-blog-content"], [1, "event-three-title"], [1, "event-span-three", "d-flex", "align-items-center"], [1, "category"], [1, "blog-date"], [1, "fa-solid", "fa-calendar"], [1, "blog-user-top"], ["href", "javascript:void(0);"], ["src", "assets/img/user/user-01.jpg", "alt", ""], [1, "col-lg-8"], ["alt", "Img", "src", "assets/img/blog/blog-36.jpg", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/blog/blog-38.jpg", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/blog/blog-37.jpg", 1, "img-fluid"], ["alt", "Img", "src", "assets/img/blog/blog-39.jpg", 1, "img-fluid"], [1, "text-center"], ["data-aos", "fade-up", 1, "btn", "btn-view-all", 3, "routerLink"], ["href", "javascript:void(0);", 1, "dropdown-item", 3, "click"], ["class", "me-2", 3, "class", 4, "ngIf"], [1, "me-2"], [1, "dropdown-item", "text-muted"], [1, "swiper-slide", "ng-star-inserted", "swiper-slide-visible"], [1, "swiper-slide"], [1, "course-item-two", "course-item", "mb-0"], [1, "course-img"], [1, "img-fluid", 3, "src", "alt"], [1, "position-absolute", "start-0", "top-0", "d-flex", "align-items-start", "w-100", "z-index-2", "p-2"], ["href", "javascript:void(0);", 1, "fav-icon"], [1, "isax", "isax-heart"], [1, "course-content"], [1, "d-flex", "justify-content-between", "mb-2"], [1, "d-flex", "align-items-center"], ["href", "javascript:void(0);", 1, "avatar", "avatar-sm"], ["alt", "img", 1, "img-fluid", "avatar", "avatar-sm", "rounded-circle", 3, "src"], [1, "ms-2"], ["href", "javascript:void(0);", 1, "link-default", "fs-14"], [1, "badge", "badge-light", "rounded-pill", "bg-light", "d-inline-flex", "align-items-center", "fs-13", "fw-medium"], ["href", "javascript:void(0);", 3, "click"], ["class", "d-flex align-items-center mb-3", 4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "text-secondary", "fs-16", "fw-semi-bold", "mb-0"], ["href", "javascript:void(0);", 1, "btn", "btn-dark", "btn-sm", "d-inline-flex", "align-items-center", 3, "click"], [1, "isax", "isax-arrow-right-3", "ms-1"], [1, "d-flex", "align-items-center", "mb-3"], [1, "ti", "ti-star-filled", "text-warning", "me-2"], [1, "categories-item", "categories-item-three", "mb-0"], ["class", "category-icon mx-auto d-flex align-items-center justify-content-center rounded-circle bg-light", "style", "width:72px;height:72px", 4, "ngIf"], ["class", "mx-auto", "src", "assets/img/category/icons/icon-6.svg", "alt", "img", 4, "ngIf"], [1, "title"], [1, "category-icon", "mx-auto", "d-flex", "align-items-center", "justify-content-center", "rounded-circle", "bg-light", 2, "width", "72px", "height", "72px"], [2, "font-size", "32px"], ["src", "assets/img/category/icons/icon-6.svg", "alt", "img", 1, "mx-auto"], [1, "course-item"], [1, "price-badge", "ms-auto"], [1, "badge", "badge-md", "badge-soft-info", "rounded-pill"], ["href", "javascript:void(0);", 1, "fav-icon", 3, "click", "ngClass"], [1, "pb-3", "border-bottom", "mb-3"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "course-rating"], [1, "course-user"], ["alt", "img", 1, "img-fluid", 3, "src"], ["class", "d-flex", 4, "ngIf"], ["href", "javascript:void(0);", 1, "btn", "buy-course-btn", 3, "click"], [1, "d-flex"], [1, "d-flex", "align-items-center", "rating"], [1, "fa-solid", "fa-star", "text-warning", "me-2"], ["data-aos", "flip-left", 1, "instructor-item", "instructor-item-three", "mb-0"], [1, "instructors-img"], ["tabindex", "0", 3, "routerLink"], [1, "img-fluid", 3, "alt", "src"], [1, "instructor-content"], ["class", "rating", 4, "ngIf"], [1, "rating"], [1, "fas", "fa-star", "me-1"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "section", 1);
      \u0275\u0275element(1, "img", 2)(2, "img", 3)(3, "img", 4)(4, "img", 5);
      \u0275\u0275elementStart(5, "div", 6)(6, "div", 7)(7, "div", 8)(8, "div", 9)(9, "span", 10);
      \u0275\u0275text(10, "The Leader in Online Learning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "h1", 11);
      \u0275\u0275text(12, " Find the Best ");
      \u0275\u0275elementStart(13, "span");
      \u0275\u0275text(14, "Courses");
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, " from the Best ");
      \u0275\u0275elementStart(16, "span");
      \u0275\u0275text(17, "Mentors");
      \u0275\u0275elementEnd();
      \u0275\u0275text(18, " Around the World ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p", 12);
      \u0275\u0275text(20, " Our specialized online courses are designed to bring the classroom experience to you, no matter where you are. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "form", 13);
      \u0275\u0275listener("ngSubmit", function HomeComponent_Template_form_ngSubmit_21_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(22, "div", 14)(23, "a", 15);
      \u0275\u0275text(24);
      \u0275\u0275element(25, "i", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "ul", 17);
      \u0275\u0275template(27, HomeComponent_li_27_Template, 4, 2, "li", 18)(28, HomeComponent_li_28_Template, 3, 0, "li", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "input", 20);
      \u0275\u0275twoWayListener("ngModelChange", function HomeComponent_Template_input_ngModelChange_29_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "button", 21);
      \u0275\u0275element(31, "i", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 23)(33, "div", 24)(34, "div", 25);
      \u0275\u0275element(35, "img", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 27)(37, "h5", 28)(38, "span", 29);
      \u0275\u0275text(39, "10");
      \u0275\u0275elementEnd();
      \u0275\u0275text(40, "K ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "p");
      \u0275\u0275text(42, "Online Courses");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(43, "div", 24)(44, "div", 25);
      \u0275\u0275element(45, "img", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 27)(47, "h5", 31)(48, "span", 29);
      \u0275\u0275text(49, "6");
      \u0275\u0275elementEnd();
      \u0275\u0275text(50, "K ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "p");
      \u0275\u0275text(52, "Certified Courses");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "div", 24)(54, "div", 25);
      \u0275\u0275element(55, "img", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 27)(57, "h5", 33)(58, "span", 29);
      \u0275\u0275text(59, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275text(60, "K ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "p");
      \u0275\u0275text(62, "Experienced Tutors");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(63, "div", 34)(64, "div", 35)(65, "div", 36)(66, "div", 37)(67, "div", 38)(68, "div", 37);
      \u0275\u0275template(69, HomeComponent_div_69_Template, 28, 15, "div", 39);
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275elementStart(70, "section", 40)(71, "div", 6)(72, "div", 41)(73, "span", 42);
      \u0275\u0275text(74, "Our Benefits");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "h2");
      \u0275\u0275text(76, "Master the Skills to Drive your Career");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "p");
      \u0275\u0275text(78, " The right course, guided by an expert mentor, can provide invaluable insights, practical skills. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "div", 43)(80, "div", 44)(81, "div", 45)(82, "div", 46)(83, "div", 47);
      \u0275\u0275element(84, "img", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "div", 49);
      \u0275\u0275element(86, "i", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "h5", 51);
      \u0275\u0275text(88, "Flexible Learning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "p");
      \u0275\u0275text(90, " We believe that high-quality education should be accessible to everyone. Our pricing form in models are designed. ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(91, "div", 44)(92, "div", 45)(93, "div", 46)(94, "div", 47);
      \u0275\u0275element(95, "img", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "div", 53);
      \u0275\u0275element(97, "i", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "h5", 51);
      \u0275\u0275text(99, "Lifetime Access");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "p");
      \u0275\u0275text(101, " When you enroll in our courses, you\u2019re not just signing up for a temporary learning to experience you\u2019re making. ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(102, "div", 44)(103, "div", 45)(104, "div", 46)(105, "div", 47);
      \u0275\u0275element(106, "img", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "div", 56);
      \u0275\u0275element(108, "i", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "h5", 51);
      \u0275\u0275text(110, "Expert Instruction");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "p");
      \u0275\u0275text(112, " Our instructors are seasoned professionals with years of experience in their respective fields & Experts advice ");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(113, "section", 58)(114, "div", 6)(115, "h6", 59);
      \u0275\u0275text(116, " Trusted by ");
      \u0275\u0275elementStart(117, "span", 60);
      \u0275\u0275text(118, "20+");
      \u0275\u0275elementEnd();
      \u0275\u0275text(119, " Institutions Around the World ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "div", 61)(121, "ngx-slick-carousel", 62, 0)(123, "div", 63);
      \u0275\u0275element(124, "img", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "div", 63);
      \u0275\u0275element(126, "img", 65);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "div", 63);
      \u0275\u0275element(128, "img", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "div", 63);
      \u0275\u0275element(130, "img", 67);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "div", 63);
      \u0275\u0275element(132, "img", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "div", 63);
      \u0275\u0275element(134, "img", 69);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "div", 63);
      \u0275\u0275element(136, "img", 70);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "div", 63);
      \u0275\u0275element(138, "img", 65);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "div", 63);
      \u0275\u0275element(140, "img", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "div", 63);
      \u0275\u0275element(142, "img", 67);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "div", 63);
      \u0275\u0275element(144, "img", 68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "div", 63);
      \u0275\u0275element(146, "img", 69);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(147, "section", 71);
      \u0275\u0275element(148, "img", 72);
      \u0275\u0275elementStart(149, "div", 6)(150, "div", 41)(151, "span", 42);
      \u0275\u0275text(152, "Our Categories");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "h2");
      \u0275\u0275text(154, "Top Courses & Categories");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "p");
      \u0275\u0275text(156, " The right course, guided by an expert mentor, can provide invaluable insights, practical skills ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(157, "div", 73)(158, "ngx-slick-carousel", 62, 0);
      \u0275\u0275template(160, HomeComponent_div_160_Template, 7, 3, "div", 74);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(161, "a", 75);
      \u0275\u0275text(162, "Voir toutes les cat\xE9gories");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(163, "section", 76)(164, "div", 6)(165, "div", 77);
      \u0275\u0275element(166, "img", 78);
      \u0275\u0275elementStart(167, "div", 79)(168, "lightgallery", 80)(169, "a", 81);
      \u0275\u0275element(170, "i", 82);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(171, "div", 83);
      \u0275\u0275element(172, "img", 84);
      \u0275\u0275elementStart(173, "div", 85)(174, "div", 86)(175, "h4");
      \u0275\u0275text(176, " Trusted by the 15,000+ happy students and online users since 2000 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "div", 87)(178, "a", 88);
      \u0275\u0275text(179, "Enroll as Student");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "a", 89);
      \u0275\u0275text(181, "Apply as Tutor");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(182, "div", 90)(183, "div", 43)(184, "div", 91)(185, "h4", 92);
      \u0275\u0275text(186, "9.8/10");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "h5", 92);
      \u0275\u0275text(188, "Course Approval Score");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(189, "p", 93);
      \u0275\u0275text(190, " Achieving a complete course approval score is a significant. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(191, "div", 91)(192, "h4", 92);
      \u0275\u0275text(193, "13k");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(194, "h5", 92);
      \u0275\u0275text(195, "Satisfied Students Worldwide");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "p", 93);
      \u0275\u0275text(197, " Satisfied students worldwide share a common thread of happiness. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(198, "div", 94)(199, "div", 95);
      \u0275\u0275element(200, "img", 96);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(201, "p", 97);
      \u0275\u0275text(202, " \u201CAll courses are incredibly help people to achieve their goals\u201D ");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(203, "section", 98)(204, "div", 6)(205, "div", 41)(206, "span", 42);
      \u0275\u0275text(207, "Featured Courses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(208, "h2");
      \u0275\u0275text(209, "What\u2019s New in DreamsLMS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "p");
      \u0275\u0275text(211, " Discover our featured courses, specially curated to help you gain in-demand skills ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(212, "div", 99)(213, "ngx-slick-carousel", 62, 0);
      \u0275\u0275template(215, HomeComponent_div_215_Template, 27, 12, "div", 74);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(216, "div", 100)(217, "a", 75);
      \u0275\u0275text(218, "Voir tous les cours");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(219, "section", 101)(220, "div", 6)(221, "div", 102)(222, "div", 103)(223, "div", 104)(224, "span", 42);
      \u0275\u0275text(225, "Advanced Learning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(226, "h2");
      \u0275\u0275text(227, "Creating a community of learners.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "p");
      \u0275\u0275text(229, " We're dedicated to transforming education by providing a diverse range of high-quality courses that cater to learners of all levels. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(230, "div", 105)(231, "span", 106);
      \u0275\u0275element(232, "i", 107);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(233, "div")(234, "h5", 108);
      \u0275\u0275text(235, "Learn from anywhere");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(236, "p", 109);
      \u0275\u0275text(237, " Learning from anywhere has become a transform aspect of modern education, allowing individuals. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(238, "div", 105)(239, "span", 110);
      \u0275\u0275element(240, "i", 111);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(241, "div")(242, "h5", 108);
      \u0275\u0275text(243, "Expert Mentors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(244, "p", 109);
      \u0275\u0275text(245, " Learning from anywhere has become a transform aspect of modern education, allowing individuals. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(246, "div", 105)(247, "span", 112);
      \u0275\u0275element(248, "i", 113);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(249, "div")(250, "h5", 108);
      \u0275\u0275text(251, "Learn in demand skills");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(252, "p", 109);
      \u0275\u0275text(253, " In today's rapidly evolving job market, learning in demand skills is crucial for career advancement. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(254, "div", 114)(255, "a", 115);
      \u0275\u0275text(256, "Enroll as Student");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(257, "a", 116);
      \u0275\u0275text(258, "Apply as Tutor");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(259, "div", 103)(260, "div", 117);
      \u0275\u0275element(261, "img", 118)(262, "img", 119)(263, "img", 120)(264, "img", 121)(265, "img", 122);
      \u0275\u0275elementStart(266, "div", 123)(267, "div", 124)(268, "div", 125)(269, "span", 126);
      \u0275\u0275element(270, "img", 127);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(271, "span", 126);
      \u0275\u0275element(272, "img", 128);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(273, "span", 126);
      \u0275\u0275element(274, "img", 129);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(275, "span", 126);
      \u0275\u0275element(276, "img", 130);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(277, "span", 126);
      \u0275\u0275element(278, "img", 131);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(279, "p", 109)(280, "span", 132);
      \u0275\u0275text(281, "35K+");
      \u0275\u0275elementEnd();
      \u0275\u0275text(282, " Students Enrolled ");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(283, "div", 133)(284, "div", 134)(285, "ngx-slick-carousel", 62, 0)(287, "div", 135);
      \u0275\u0275element(288, "img", 136);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(289, "div");
      \u0275\u0275element(290, "img", 137);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(291, "div", 135);
      \u0275\u0275element(292, "img", 138);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(293, "div", 135);
      \u0275\u0275element(294, "img", 139);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(295, "div", 135);
      \u0275\u0275element(296, "img", 140);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(297, "div", 135);
      \u0275\u0275element(298, "img", 141);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(299, "div", 135);
      \u0275\u0275element(300, "img", 136);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(301, "div", 135);
      \u0275\u0275element(302, "img", 137);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(303, "div", 142)(304, "div", 6)(305, "div", 102)(306, "div", 103)(307, "div", 143);
      \u0275\u0275element(308, "img", 144);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(309, "div", 103)(310, "div", 145)(311, "div", 104)(312, "span", 42);
      \u0275\u0275text(313, "How it Works");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(314, "h2", 146);
      \u0275\u0275text(315, "Start your Learning Journey Today!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(316, "p");
      \u0275\u0275text(317, " Unlock Your Potential and Achieve Your Dreams with Our Comprehensive Learning Resources! ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(318, "div", 147)(319, "span", 148);
      \u0275\u0275text(320, "01");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(321, "div")(322, "h5", 146);
      \u0275\u0275text(323, "Sign-Up or Register");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(324, "p");
      \u0275\u0275text(325, " Once you're on the website's homepage, look for the Sign-Up, Register, or Create Account button. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(326, "div", 147)(327, "span", 148);
      \u0275\u0275text(328, "02");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(329, "div")(330, "h5", 146);
      \u0275\u0275text(331, "Complete Your Profile");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(332, "p");
      \u0275\u0275text(333, " After verifying your email, you may be asked to complete additional profile information. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(334, "div", 147)(335, "span", 148);
      \u0275\u0275text(336, "03");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(337, "div")(338, "h5", 146);
      \u0275\u0275text(339, "Choose Courses or Programs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(340, "p");
      \u0275\u0275text(341, " Depending on the website, after registration, you might be able to browse and choose courses or programs to enroll in. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(342, "div", 149)(343, "span", 148);
      \u0275\u0275text(344, "04");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(345, "div")(346, "h5", 146);
      \u0275\u0275text(347, "Access Your Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(348, "p");
      \u0275\u0275text(349, " Should have access to the website\u2019s features, such as enrolling in courses, materials, or tracking progress. ");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(350, "div", 150)(351, "div", 6)(352, "div", 151)(353, "span", 152);
      \u0275\u0275text(354, "Featured Instructors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(355, "h2", 153);
      \u0275\u0275text(356, "Top Class & Professional Instructors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(357, "p", 154);
      \u0275\u0275text(358, " Empowering Change: Stories from Those Who Took the Leap ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(359, "div", 155)(360, "ngx-slick-carousel", 62, 0);
      \u0275\u0275template(362, HomeComponent_div_362_Template, 13, 12, "div", 74);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(363, "div", 156)(364, "div", 6)(365, "div", 151)(366, "span", 42);
      \u0275\u0275text(367, "Featured Instructors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(368, "h2");
      \u0275\u0275text(369, "Top Class & Professional Instructors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(370, "p");
      \u0275\u0275text(371, "Words from Those Who\u2019ve Experienced Real Growth");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(372, "div")(373, "ngx-slick-carousel", 157, 0)(375, "div", 135)(376, "div", 158)(377, "div", 159)(378, "div", 160)(379, "a", 161);
      \u0275\u0275element(380, "img", 162);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(381, "i", 163);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(382, "h6", 146)(383, "a", 161);
      \u0275\u0275text(384, "Brenda Slaton");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(385, "p", 164);
      \u0275\u0275text(386, "Designer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(387, "p", 165);
      \u0275\u0275text(388, " This mentor helped me understand concepts that I had been struggling with for weeks. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(389, "div");
      \u0275\u0275element(390, "i", 166)(391, "i", 166)(392, "i", 166)(393, "i", 166)(394, "i", 166);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(395, "div", 135)(396, "div", 158)(397, "div", 159)(398, "div", 160)(399, "a", 161);
      \u0275\u0275element(400, "img", 167);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(401, "i", 163);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(402, "h6", 146)(403, "a", 161);
      \u0275\u0275text(404, "Adrian Dennis");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(405, "p", 164);
      \u0275\u0275text(406, "Developer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(407, "p", 165);
      \u0275\u0275text(408, " I\u2019ve learned so much from my mentor\u2019s personal experience. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(409, "div");
      \u0275\u0275element(410, "i", 166)(411, "i", 166)(412, "i", 166)(413, "i", 166)(414, "i", 166);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(415, "div", 135)(416, "div", 158)(417, "div", 159)(418, "div", 160)(419, "a", 161);
      \u0275\u0275element(420, "img", 168);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(421, "i", 163);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(422, "h6", 146)(423, "a", 161);
      \u0275\u0275text(424, "Adrian Coztanza");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(425, "p", 164);
      \u0275\u0275text(426, "Architect");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(427, "p", 165);
      \u0275\u0275text(428, " The advice was useful, but I wish my mentor had been more available for follow-up discussions. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(429, "div");
      \u0275\u0275element(430, "i", 166)(431, "i", 166)(432, "i", 166)(433, "i", 166)(434, "i", 166);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(435, "div", 135)(436, "div", 169)(437, "div", 159)(438, "div", 160)(439, "a", 161);
      \u0275\u0275element(440, "img", 168);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(441, "i", 163);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(442, "h6", 146)(443, "a", 161);
      \u0275\u0275text(444, "Adrian Coztanza");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(445, "p", 164);
      \u0275\u0275text(446, "Architect");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(447, "p", 165);
      \u0275\u0275text(448, " The advice was useful, but I wish my mentor had been more available for follow-up discussions. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(449, "div");
      \u0275\u0275element(450, "i", 166)(451, "i", 166)(452, "i", 166)(453, "i", 166)(454, "i", 166);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(455, "div", 170);
      \u0275\u0275element(456, "img", 171)(457, "img", 172);
      \u0275\u0275elementStart(458, "div", 6)(459, "div", 102)(460, "div", 103)(461, "div", 173);
      \u0275\u0275element(462, "img", 174);
      \u0275\u0275elementStart(463, "span");
      \u0275\u0275element(464, "i", 175);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(465, "div", 103)(466, "div", 176)(467, "div", 177)(468, "span", 42);
      \u0275\u0275text(469, "Your Questions are Answered");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(470, "h2", 146);
      \u0275\u0275text(471, "Frequently Asked Questions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(472, "p");
      \u0275\u0275text(473, " Explore detailed answers to the most common questions about our platform. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(474, "div", 178)(475, "div", 179)(476, "h2", 180)(477, "a", 181);
      \u0275\u0275text(478, " How do I enroll in a course? ");
      \u0275\u0275element(479, "i", 182);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(480, "div", 183)(481, "div", 184)(482, "p");
      \u0275\u0275text(483, " Many websites offer a Certificate of Completion for paid courses. Free courses may or may not include a certificate, depending on the platform\u2019s policies. ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(484, "div", 185)(485, "h2", 186)(486, "a", 187);
      \u0275\u0275text(487, " How long do I have access to a course? ");
      \u0275\u0275element(488, "i", 182);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(489, "div", 188)(490, "div", 184)(491, "p");
      \u0275\u0275text(492, " Many websites offer a Certificate of Completion for paid courses. Free courses may or may not include a certificate, depending on the platform\u2019s policies. ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(493, "div", 185)(494, "h2", 189)(495, "a", 190);
      \u0275\u0275text(496, " What payment methods are accepted? ");
      \u0275\u0275element(497, "i", 182);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(498, "div", 191)(499, "div", 184)(500, "p");
      \u0275\u0275text(501, " Many websites offer a Certificate of Completion for paid courses. Free courses may or may not include a certificate, depending on the platform\u2019s policies. ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(502, "div", 185)(503, "h2", 192)(504, "a", 193);
      \u0275\u0275text(505, " Will I receive a certificate after completing a course? ");
      \u0275\u0275element(506, "i", 182);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(507, "div", 194)(508, "div", 184)(509, "p");
      \u0275\u0275text(510, " Many websites offer a Certificate of Completion for paid courses. Free courses may or may not include a certificate, depending on the platform\u2019s policies. ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(511, "div", 185)(512, "h2", 195)(513, "a", 196);
      \u0275\u0275text(514, " What is the purpose of this DreamLMS ? ");
      \u0275\u0275element(515, "i", 182);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(516, "div", 197)(517, "div", 184)(518, "p");
      \u0275\u0275text(519, " Many websites offer a Certificate of Completion for paid courses. Free courses may or may not include a certificate, depending on the platform\u2019s policies. ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(520, "div", 185)(521, "h2", 198)(522, "a", 199);
      \u0275\u0275text(523, " What can I do with my certificate? ");
      \u0275\u0275element(524, "i", 182);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(525, "div", 200)(526, "div", 184)(527, "p");
      \u0275\u0275text(528, " Many websites offer a Certificate of Completion for paid courses. Free courses may or may not include a certificate, depending on the platform\u2019s policies. ");
      \u0275\u0275elementEnd()()()()()()()()()();
      \u0275\u0275elementStart(529, "section", 201)(530, "div", 6)(531, "div", 151)(532, "span", 42);
      \u0275\u0275text(533, "Articles & Updates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(534, "h2");
      \u0275\u0275text(535, "Our\xA0Recent Blog & Articles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(536, "p");
      \u0275\u0275text(537, " Explore curated content to enlighten, entertain and engage global readers. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(538, "div", 202)(539, "div", 43)(540, "div", 203)(541, "div", 204)(542, "div", 205)(543, "a", 161);
      \u0275\u0275element(544, "img", 206);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(545, "div", 207)(546, "div", 208)(547, "div", 209)(548, "span", 210);
      \u0275\u0275text(549, "Lifestyle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(550, "div", 211);
      \u0275\u0275element(551, "i", 212);
      \u0275\u0275elementStart(552, "span");
      \u0275\u0275text(553, "09 Aug 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(554, "a", 161)(555, "h5");
      \u0275\u0275text(556, "Why an LMS is Essential for Modern Education");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(557, "div", 213)(558, "a", 214);
      \u0275\u0275element(559, "img", 215);
      \u0275\u0275text(560, "David Benitez");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(561, "div", 216)(562, "div", 43)(563, "div", 91)(564, "div", 204)(565, "div", 205)(566, "a", 161);
      \u0275\u0275element(567, "img", 217);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(568, "div", 207)(569, "div", 208)(570, "div", 209)(571, "span", 210);
      \u0275\u0275text(572, "Productivity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(573, "div", 211);
      \u0275\u0275element(574, "i", 212);
      \u0275\u0275elementStart(575, "span");
      \u0275\u0275text(576, "09 Aug 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(577, "h5")(578, "a", 161);
      \u0275\u0275text(579, "The Impact of LMS on Academic Journey Education");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(580, "div", 213)(581, "a", 214);
      \u0275\u0275element(582, "img", 215);
      \u0275\u0275text(583, "David Benitez");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(584, "div", 91)(585, "div", 204)(586, "div", 205)(587, "a", 161);
      \u0275\u0275element(588, "img", 218);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(589, "div", 207)(590, "div", 208)(591, "div", 209)(592, "span", 210);
      \u0275\u0275text(593, "Productivity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(594, "div", 211);
      \u0275\u0275element(595, "i", 212);
      \u0275\u0275elementStart(596, "span");
      \u0275\u0275text(597, "09 Aug 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(598, "h5")(599, "a", 161);
      \u0275\u0275text(600, "Maximizing Academic Success with the Right LMS");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(601, "div", 213)(602, "a", 214);
      \u0275\u0275element(603, "img", 215);
      \u0275\u0275text(604, "David Benitez");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(605, "div", 91)(606, "div", 204)(607, "div", 205)(608, "a", 161);
      \u0275\u0275element(609, "img", 219);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(610, "div", 207)(611, "div", 208)(612, "div", 209)(613, "span", 210);
      \u0275\u0275text(614, "UI /UX");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(615, "div", 211);
      \u0275\u0275element(616, "i", 212);
      \u0275\u0275elementStart(617, "span");
      \u0275\u0275text(618, "09 Aug 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(619, "h5")(620, "a", 161);
      \u0275\u0275text(621, "Promoting Health & Well being in Schools");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(622, "div", 213)(623, "a", 214);
      \u0275\u0275element(624, "img", 215);
      \u0275\u0275text(625, "David Benitez");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(626, "div", 91)(627, "div", 204)(628, "div", 205)(629, "a", 161);
      \u0275\u0275element(630, "img", 220);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(631, "div", 207)(632, "div", 208)(633, "div", 209)(634, "span", 210);
      \u0275\u0275text(635, "Development");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(636, "div", 211);
      \u0275\u0275element(637, "i", 212);
      \u0275\u0275elementStart(638, "span");
      \u0275\u0275text(639, "09 Aug 2025");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(640, "h5")(641, "a", 161);
      \u0275\u0275text(642, "How to Build and Run a Pilot Mentoring Program");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(643, "div", 213)(644, "a", 214);
      \u0275\u0275element(645, "img", 215);
      \u0275\u0275text(646, "David Benitez");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(647, "div", 221)(648, "a", 222);
      \u0275\u0275text(649, "View All Articles");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(650, "app-footer");
    }
    if (rf & 2) {
      \u0275\u0275advance(24);
      \u0275\u0275textInterpolate1(" ", ctx.selectedCategoryName, " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.categories.length === 0);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(40);
      \u0275\u0275property("ngForOf", ctx.bannerCourses);
      \u0275\u0275advance(52);
      \u0275\u0275property("config", ctx.slideConfig);
      \u0275\u0275advance(37);
      \u0275\u0275property("config", ctx.topCourseSlider);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", "/courses/course-list-public");
      \u0275\u0275advance(7);
      \u0275\u0275property("settings", ctx.settings)("onInit", ctx.onInit);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.login);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.becomeAnExpert);
      \u0275\u0275advance(33);
      \u0275\u0275property("config", ctx.featureCourseSlider2);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.featuredCourses);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", "/courses/course-list-public");
      \u0275\u0275advance(38);
      \u0275\u0275property("routerLink", ctx.routes.login);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.becomeAnExpert);
      \u0275\u0275advance(28);
      \u0275\u0275property("config", ctx.brandSlide);
      \u0275\u0275advance(75);
      \u0275\u0275property("config", ctx.instructorSlider);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.topInstructors);
      \u0275\u0275advance(11);
      \u0275\u0275property("config", ctx.testimonialSlider);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(16);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(16);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(16);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", ctx.routes.studentsDetails);
      \u0275\u0275advance(100);
      \u0275\u0275property("routerLink", ctx.routes.blog_grid);
      \u0275\u0275advance(11);
      \u0275\u0275property("routerLink", ctx.routes.blog_grid);
      \u0275\u0275advance(12);
      \u0275\u0275property("routerLink", ctx.routes.blog_details);
      \u0275\u0275advance(12);
      \u0275\u0275property("routerLink", ctx.routes.blog_grid);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.blog_grid);
      \u0275\u0275advance(12);
      \u0275\u0275property("routerLink", ctx.routes.blog_grid);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.blog_grid);
      \u0275\u0275advance(12);
      \u0275\u0275property("routerLink", ctx.routes.blog_grid);
      \u0275\u0275advance(9);
      \u0275\u0275property("routerLink", ctx.routes.blog_grid);
      \u0275\u0275advance(12);
      \u0275\u0275property("routerLink", ctx.routes.blog_grid);
      \u0275\u0275advance(7);
      \u0275\u0275property("routerLink", ctx.routes.blog_grid);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FooterComponent, RouterLink, SlickCarouselModule, SlickCarouselComponent, SlickItemDirective, LightgalleryModule, LightgalleryComponent, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, DecimalPipe], styles: ["/* src/app/features/home-list/home/home.component.scss */\n/*# sourceMappingURL=home.component.css.map */\n"], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", imports: [CommonModule, FooterComponent, RouterLink, SlickCarouselModule, LightgalleryModule, FormsModule], encapsulation: ViewEncapsulation.None, template: `<!-- banner -->
<section class="banner-section">
  <img class="img-fluid d-none d-lg-flex banner-bg1" src="assets/img/bg/bg-15.png" alt="img" />
  <img class="img-fluid d-none d-lg-flex banner-bg2" src="assets/img/bg/bg-16.png" alt="img" />
  <img class="img-fluid d-none d-lg-flex banner-bg3" src="assets/img/bg/bg-17.png" alt="img" />
  <img class="img-fluid d-none d-lg-flex banner-bg4" src="assets/img/bg/bg-18.png" alt="img" />
  <div class="container">
    <div class="row align-items-center justify-content-between">
      <div class="col-xl-7 col-lg-7">
        <div class="banner-content pe-xxl-5">
          <span class="hero-title">The Leader in Online Learning</span>
          <h1 class="mb-4 text-white">
            Find the Best <span>Courses</span> from the Best
            <span>Mentors</span> Around the World
          </h1>
          <p class="fs-lg text-center text-md-start pb-2 pb-md-3 mb-4">
            Our specialized online courses are designed to bring the classroom
            experience to you, no matter where you are.
          </p>
          <form class="banner-search" (ngSubmit)="onSubmit()">
            <div class="dropdown">
              <a class="hero-dropdown" href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
                {{ selectedCategoryName }} <i class="isax isax-arrow-down5 fs-12"></i>
              </a>
              <ul class="dropdown-menu p-1">
                <li *ngFor="let cat of categories">
                  <a class="dropdown-item" href="javascript:void(0);"
                     (click)="selectCategory(cat.id, cat.name)">
                    <i *ngIf="cat.icon" [class]="cat.icon" class="me-2"></i>{{ cat.name }}
                  </a>
                </li>
                <li *ngIf="categories.length === 0">
                  <a class="dropdown-item text-muted">Chargement...</a>
                </li>
              </ul>
            </div>
            <input type="text" name="search" [(ngModel)]="searchTerm" class="border-0 form-control p-0"
              placeholder="Search for Courses, Instructors" />
            <button type="submit" class="btn btn-secondary ms-auto">
              <i class="isax isax-arrow-right-1"></i>
            </button>
          </form>
          <div class="d-flex align-items-center gap-4 justify-content-lg-between justify-content-center flex-wrap">
            <div class="counter-item">
              <div class="counter-icon flex-shrink-0">
                <img src="assets/img/icons/icon-32.svg" alt="img" />
              </div>
              <div class="count-content">
                <h5 class="text-purple">
                  <span class="count-digit">10</span>K
                </h5>
                <p>Online Courses</p>
              </div>
            </div>
            <div class="counter-item">
              <div class="counter-icon flex-shrink-0">
                <img src="assets/img/icons/icon-33.svg" alt="img" />
              </div>
              <div class="count-content">
                <h5 class="text-skyblue">
                  <span class="count-digit">6</span>K
                </h5>
                <p>Certified Courses</p>
              </div>
            </div>
            <div class="counter-item">
              <div class="counter-icon flex-shrink-0">
                <img src="assets/img/icons/icon-34.svg" alt="img" />
              </div>
              <div class="count-content">
                <h5 class="text-success">
                  <span class="count-digit">2</span>K
                </h5>
                <p>Experienced Tutors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-5">
        <div class="banner-image pe-0">
          <div class="swiper swiper-slider-banner w-auto">
            <div class="swiper-wrapper">
              <div class="swiper swiper-cards swiper-3d swiper-initialized swiper-horizontal swiper-pointer-events swiper-watch-progress" >
                <div class="swiper-wrapper">
                  <div *ngFor="let course of bannerCourses; let i = index"
                    class="swiper-slide ng-star-inserted swiper-slide-visible"
                    [class.swiper-slide-active]="i === 0"
                    [class.swiper-slide-next]="i === 1"
                    [style.z-index]="3 - i">

                    <div class="swiper-slide">
                      <div class="course-item-two course-item mb-0">
                        <div class="course-img">
                          <img [src]="getImageUrl(course.coverImage)" alt="{{ course.title }}" class="img-fluid" />
                          <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                            <a href="javascript:void(0);" class="fav-icon">
                              <i class="isax isax-heart"></i>
                            </a>
                          </div>
                        </div>
                        <div class="course-content">
                          <div class="d-flex justify-content-between mb-2">
                            <div class="d-flex align-items-center">
                              <a href="javascript:void(0);" class="avatar avatar-sm">
                                <img [src]="getAvatarUrl(course.instructorAvatar)" alt="img"
                                  class="img-fluid avatar avatar-sm rounded-circle" />
                              </a>
                              <div class="ms-2">
                                <a href="javascript:void(0);" class="link-default fs-14">{{ course.instructorName }}</a>
                              </div>
                            </div>
                            <span
                              class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium">
                              {{ course.categoryName || 'Cours' }}
                            </span>
                          </div>
                          <h6 class="mb-2">
                            <a href="javascript:void(0);" (click)="goToCourseDetail(course.id)">{{ course.title }}</a>
                          </h6>
                          <p class="d-flex align-items-center mb-3" *ngIf="course.averageRating">
                            <i class="ti ti-star-filled text-warning me-2"></i>
                            {{ course.averageRating | number:'1.1-1' }} ({{ course.reviewCount || 0 }} avis)
                          </p>
                          <div class="d-flex align-items-center justify-content-between">
                            <h6 class="text-secondary fs-16 fw-semi-bold mb-0">
                             {{ formatPrice(course) }}
                            </h6>
                            <a href="javascript:void(0);" (click)="goToCourseDetail(course.id)" class="btn btn-dark btn-sm d-inline-flex align-items-center">Voir le cours<i
                                class="isax isax-arrow-right-3 ms-1"></i></a>
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
      </div>
    </div>
  </div>
</section>
<!-- banner -->

<!-- benefits -->
<section class="benefit-section">
  <div class="container">
    <div class="section-header text-center">
      <span class="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">Our Benefits</span>
      <h2>Master the Skills to Drive your Career</h2>
      <p>
        The right course, guided by an expert mentor, can provide invaluable
        insights, practical skills.
      </p>
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-6">
        <div class="card shadow-sm">
          <div class="card-body p-4">
            <div class="position-absolute top-0 end-0 mt-n3 me-n4">
              <img src="./assets/img/shapes/bg-1.png" alt="img" />
            </div>
            <div class="p-4 rounded-pill bg-primary-transparent d-inline-flex">
              <i class="isax isax-book-1 fs-24"></i>
            </div>
            <h5 class="mt-3 mb-1">Flexible Learning</h5>
            <p>
              We believe that high-quality education should be accessible to
              everyone. Our pricing form in models are designed.
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="card shadow-sm">
          <div class="card-body p-4">
            <div class="position-absolute top-0 end-0 mt-n3 me-n4">
              <img src="assets/img/shapes/bg-2.png" alt="img" />
            </div>
            <div class="p-4 rounded-pill bg-secondary-transparent d-inline-flex">
              <i class="isax isax-bookmark5 fs-24"></i>
            </div>
            <h5 class="mt-3 mb-1">Lifetime Access</h5>
            <p>
              When you enroll in our courses, you\u2019re not just signing up for a
              temporary learning to experience you\u2019re making.
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="card shadow-sm">
          <div class="card-body p-4">
            <div class="position-absolute top-0 end-0 mt-n3 me-n4">
              <img src="assets/img/shapes/bg-3.png" alt="img" />
            </div>
            <div class="p-4 rounded-pill bg-skyblue-transparent d-inline-flex">
              <i class="isax isax-chart-26 fs-24"></i>
            </div>
            <h5 class="mt-3 mb-1">Expert Instruction</h5>
            <p>
              Our instructors are seasoned professionals with years of
              experience in their respective fields & Experts advice
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- benefits -->

<!-- institutions -->
<section class="client-section">
  <div class="container">
    <h6 class="fw-medium text-center mb-4">
      Trusted by
      <span class="text-decoration-underline text-secondary">20+</span>
      Institutions Around the World
    </h6>
    <div class="institutions-slider lazy slider">
      <ngx-slick-carousel #slickModal="slick-carousel" [config]="slideConfig">
        <div class="institutions-items p-1" ngxSlickItem>
          <img class="img-fluid" src="./assets/img/client/01.svg" alt="img" />
        </div>
        <div class="institutions-items p-1" ngxSlickItem>
          <img class="img-fluid" src="./assets/img/client/02.svg" alt="img" />
        </div>
        <div class="institutions-items p-1" ngxSlickItem>
          <img class="img-fluid" src="./assets/img/client/03.svg" alt="img" />
        </div>
        <div class="institutions-items p-1" ngxSlickItem>
          <img class="img-fluid" src="./assets/img/client/04.svg" alt="img" />
        </div>
        <div class="institutions-items p-1" ngxSlickItem>
          <img class="img-fluid" src="./assets/img/client/05.svg" alt="img" />
        </div>
        <div class="institutions-items p-1" ngxSlickItem>
          <img class="img-fluid" src="./assets/img/client/06.svg" alt="img" />
        </div>
        <div class="institutions-items p-1" ngxSlickItem>
          <img class="img-fluid" src="./assets/img/client/07.svg" alt="img" />
        </div>
        <div class="institutions-items p-1" ngxSlickItem>
          <img class="img-fluid" src="./assets/img/client/02.svg" alt="img" />
        </div>
        <div class="institutions-items p-1" ngxSlickItem>
          <img class="img-fluid" src="./assets/img/client/03.svg" alt="img" />
        </div>
        <div class="institutions-items p-1" ngxSlickItem>
          <img class="img-fluid" src="./assets/img/client/04.svg" alt="img" />
        </div>
        <div class="institutions-items p-1" ngxSlickItem>
          <img class="img-fluid" src="./assets/img/client/05.svg" alt="img" />
        </div>
        <div class="institutions-items p-1" ngxSlickItem>
          <img class="img-fluid" src="./assets/img/client/06.svg" alt="img" />
        </div>
      </ngx-slick-carousel>
     
    </div>
  </div>
</section>
<!-- institutions -->

<!-- top courses -->
<section class="top-courses-sec">
  <img class="top-courses-bg" src="./assets/img/bg/bg-20.png" alt="img" />
  <div class="container">
    <div class="section-header text-center">
      <span class="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">Our Categories</span>
      <h2>Top Courses & Categories</h2>
      <p>
        The right course, guided by an expert mentor, can provide invaluable
        insights, practical skills
      </p>
    </div>
    <div class="top-courses-slider lazy">
      <ngx-slick-carousel #slickModal="slick-carousel" [config]="topCourseSlider">
        <div ngxSlickItem *ngFor="let cat of categories">
          <div class="categories-item categories-item-three mb-0">
            <div class="category-icon mx-auto d-flex align-items-center justify-content-center rounded-circle bg-light" style="width:72px;height:72px" *ngIf="cat.icon">
              <i [class]="cat.icon" style="font-size:32px"></i>
            </div>
            <img class="mx-auto" src="assets/img/category/icons/icon-6.svg" alt="img" *ngIf="!cat.icon" />
            <h6 class="title">
              <a href="javascript:void(0);" (click)="selectCategory(cat.id, cat.name)">{{ cat.name }}</a>
            </h6>
          </div>
        </div>
      </ngx-slick-carousel>
      
    </div>
    <a [routerLink]="'/courses/course-list-public'" class="btn btn-primary btn-md">Voir toutes les cat\xE9gories</a>
  </div>
</section>
<!-- /top courses -->

<!-- trust -->
<section class="trust-sec">
  <div class="container">
    <div class="video-showcase">
      <img src="assets/img/feature/feature-1.jpg" class="img-fluid w-100 rounded-2" alt="banner" />
      <div class="video-play">
        <lightgallery [settings]="settings" [onInit]="onInit" size="1400-933">   
          <a src="https://www.youtube.com/embed/1trvO6dqQUI"><i class="isax isax-play5"></i></a>
      </lightgallery>
      </div>
    </div>
    <div class="trust-content">
      <img src="./assets/img/bg/bg-19.png" alt="img" class="w-100 trust-bg" />
      <div class="row justify-content-between">
        <div class="col-md-4">
          <h4>
            Trusted by the 15,000+ happy students and online users since 2000
          </h4>
          <div class="d-flex align-items-center flex-wrap mt-5 gap-2">
            <a [routerLink]="routes.login" class="btn btn-secondary">Enroll as Student</a>
            <a [routerLink]="routes.becomeAnExpert" class="btn btn-dark">Apply as Tutor</a>
          </div>
        </div>
        <div class="col-md-7">
          <div class="row">
            <div class="col-md-6">
              <h4 class="text-white mb-2">9.8/10</h4>
              <h5 class="text-white mb-2">Course Approval Score</h5>
              <p class="text-white mb-5">
                Achieving a complete course approval score is a significant.
              </p>
            </div>
            <div class="col-md-6">
              <h4 class="text-white mb-2">13k</h4>
              <h5 class="text-white mb-2">Satisfied Students Worldwide</h5>
              <p class="text-white mb-5">
                Satisfied students worldwide share a common thread of happiness.
              </p>
            </div>
          </div>
          <div class="d-flex align-items-center bg-white user-goal p-2">
            <div class="avatar avatar-lg flex-shrink-0">
              <img class="rounded-pill" src="./assets/img/user/user-28.jpg" alt="img" />
            </div>
            <p class="text-gray-9 mb-0">
              \u201CAll courses are incredibly help people to achieve their goals\u201D
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- /trust -->

<!-- featured course -->
<section class="featured-courses-section">
  <div class="container">
    <div class="section-header text-center">
      <span class="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">Featured Courses</span>
      <h2>What\u2019s New in DreamsLMS</h2>
      <p>
        Discover our featured courses, specially curated to help you gain
        in-demand skills
      </p>
    </div>
    <div class="feature-course-slider-2">
      <ngx-slick-carousel #slickModal="slick-carousel" [config]="featureCourseSlider2">
        <div ngxSlickItem *ngFor="let course of featuredCourses; let i = index">
          <div class="course-item">
            <div class="course-img">
              <a href="javascript:void(0);" (click)="goToCourseDetail(course.id)">
                <img [src]="getImageUrl(course.coverImage)" alt="{{ course.title }}" class="img-fluid" />
              </a>
              <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                <span class="price-badge ms-auto">{{ formatPrice(course) }}</span>
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <span class="badge badge-md badge-soft-info rounded-pill">{{ course.categoryName || 'Cours' }}</span>
              <a href="javascript:void(0);" class="fav-icon" [ngClass]="{'selected':isSelected[i+1]}" (click)="iconSelect(i+1)"><i class="isax isax-heart"></i></a>
            </div>
            <div class="pb-3 border-bottom mb-3">
              <h5>
                <a href="javascript:void(0);" (click)="goToCourseDetail(course.id)">{{ course.title }}</a>
              </h5>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-4">
              <div class="course-rating">
                <span class="course-user"><a href="javascript:void(0);"><img [src]="getAvatarUrl(course.instructorAvatar)" alt="img"
                      class="img-fluid" /></a></span>
                <a href="javascript:void(0);">{{ course.instructorName }}</a>
              </div>
              <div class="d-flex" *ngIf="course.averageRating">
                <span class="d-flex align-items-center rating"><i
                    class="fa-solid fa-star text-warning me-2"></i>{{ course.averageRating | number:'1.1-1' }}</span>
              </div>
            </div>
            <a href="javascript:void(0);" (click)="goToCourseDetail(course.id)" class="btn buy-course-btn">Voir le cours</a>
          </div>
        </div>
      </ngx-slick-carousel>
    </div>
    <div class="d-flex align-items-center justify-content-center">
      <a [routerLink]="'/courses/course-list-public'" class="btn btn-primary btn-md">Voir tous les cours</a>
    </div>
  </div>
</section>
<!-- /featured course -->

<!-- community-to-learn -->
<section class="community-to-learn">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-6">
        <div class="section-header">
          <span class="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">Advanced Learning</span>
          <h2>Creating a community of learners.</h2>
          <p>
            We're dedicated to transforming education by providing a diverse
            range of high-quality courses that cater to learners of all levels.
          </p>
        </div>
        <div class="community-item d-flex align-items-center">
          <span class="community-icon-1">
            <i class="isax isax-book-saved5"></i>
          </span>
          <div>
            <h5 class="mb-2">Learn from anywhere</h5>
            <p class="mb-0">
              Learning from anywhere has become a transform aspect of modern
              education, allowing individuals.
            </p>
          </div>
        </div>
        <div class="community-item d-flex align-items-center">
          <span class="community-icon-2">
            <i class="isax isax-bookmark5"></i>
          </span>
          <div>
            <h5 class="mb-2">Expert Mentors</h5>
            <p class="mb-0">
              Learning from anywhere has become a transform aspect of modern
              education, allowing individuals.
            </p>
          </div>
        </div>
        <div class="community-item d-flex align-items-center">
          <span class="community-icon-3">
            <i class="isax isax-chart-26"></i>
          </span>
          <div>
            <h5 class="mb-2">Learn in demand skills</h5>
            <p class="mb-0">
              In today's rapidly evolving job market, learning in demand skills
              is crucial for career advancement.
            </p>
          </div>
        </div>
        <div class="d-flex align-items-center gap-2">
          <a [routerLink]="routes.login" class="btn btn-secondary btn-md">Enroll as Student</a>
          <a [routerLink]="routes.becomeAnExpert" class="btn btn-dark btn-md">Apply as Tutor</a>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="community-img d-none d-lg-flex">
          <img src="assets/img/shapes/shape-5.png" alt="img" class="img-fluid community-img-01" />
          <img src="assets/img/shapes/shape-6.png" alt="img" class="img-fluid community-img-02" />
          <img src="assets/img/feature/feature-2.jpg" alt="img" class="img-fluid community-img-03" />
          <img src="assets/img/feature/feature-3.jpg" alt="img" class="img-fluid community-img-04" />
          <img src="assets/img/shapes/shape-7.svg" alt="img" class="img-fluid community-img-05" />
          <div class="community-count p-2">
            <div class="enrolled-list">
              <div class="avatar-list-stacked mb-2">
                <span class="avatar avatar-rounded">
                  <img class="border border-white" src="assets/img/user/user-01.jpg" alt="img" />
                </span>
                <span class="avatar avatar-rounded">
                  <img class="border border-white" src="assets/img/user/user-03.jpg" alt="img" />
                </span>
                <span class="avatar avatar-rounded">
                  <img class="border border-white" src="assets/img/user/user-07.jpg" alt="img" />
                </span>
                <span class="avatar avatar-rounded">
                  <img class="border border-white" src="assets/img/user/user-08.jpg" alt="img" />
                </span>
                <span class="avatar avatar-rounded">
                  <img src="assets/img/user/user-06.jpg" alt="img" />
                </span>
              </div>
              <p class="mb-0">
                <span class="text-secondary">35K+</span> Students Enrolled
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- /community-to-learn -->

<!-- client -->
<div class="cliets-section-one">
  <div class="brand-slide">
    <ngx-slick-carousel #slickModal="slick-carousel" [config]="brandSlide">

      <div ngxSlickItem>
        <img src="assets/img/client/08.svg" alt="img" />
      </div>
      <div>
        <img src="assets/img/client/09.svg" alt="img" />
      </div>
      <div ngxSlickItem>
        <img src="assets/img/client/10.svg" alt="img" />
      </div>
      <div ngxSlickItem>
        <img src="assets/img/client/11.svg" alt="img" />
      </div>
      <div ngxSlickItem>
        <img src="assets/img/client/12.svg" alt="img" />
      </div>
      <div ngxSlickItem>
        <img src="assets/img/client/13.svg" alt="img" />
      </div>
      <div ngxSlickItem>
        <img src="assets/img/client/08.svg" alt="img" />
      </div>
      <div ngxSlickItem>
        <img src="assets/img/client/09.svg" alt="img" />
      </div>
    </ngx-slick-carousel>
  </div>
</div>
<!-- /client -->

<!-- how it works -->
<div class="how-it-works-sec-two">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-6">
        <div class="me-5" data-aos="fade-up">
          <img src="assets/img/feature/feature-27.jpg" class="img-fluid rounded-5" alt="img" />
        </div>
      </div>
      <div class="col-lg-6">
        <div class="how-it-works-content aos" data-aos="fade-up">
          <div class="section-header">
            <span class="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">How it Works</span>
            <h2 class="mb-1">Start your Learning Journey Today!</h2>
            <p>
              Unlock Your Potential and Achieve Your Dreams with Our
              Comprehensive Learning Resources!
            </p>
          </div>
          <div class="d-flex align-items-center works-items">
            <span class="count">01</span>
            <div>
              <h5 class="mb-1">Sign-Up or Register</h5>
              <p>
                Once you're on the website's homepage, look for the Sign-Up,
                Register, or Create Account button.
              </p>
            </div>
          </div>
          <div class="d-flex align-items-center works-items">
            <span class="count">02</span>
            <div>
              <h5 class="mb-1">Complete Your Profile</h5>
              <p>
                After verifying your email, you may be asked to complete
                additional profile information.
              </p>
            </div>
          </div>
          <div class="d-flex align-items-center works-items">
            <span class="count">03</span>
            <div>
              <h5 class="mb-1">Choose Courses or Programs</h5>
              <p>
                Depending on the website, after registration, you might be able
                to browse and choose courses or programs to enroll in.
              </p>
            </div>
          </div>
          <div class="d-flex align-items-center works-items mb-0 pb-0 border-0">
            <span class="count">04</span>
            <div>
              <h5 class="mb-1">Access Your Account</h5>
              <p>
                Should have access to the website\u2019s features, such as enrolling
                in courses, materials, or tracking progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- how it works -->

<!-- featured instructor -->
<div class="featured-instructor-sec">
  <div class="container">
    <div class="section-header text-center" data-aos="fade-up">
      <span class="fw-medium text-light text-decoration-underline mb-2 d-inline-block">Featured Instructors</span>
      <h2 class="text-white">Top Class & Professional Instructors</h2>
      <p class="text-light">
        Empowering Change: Stories from Those Who Took the Leap
      </p>
    </div>
    <div class="featured-instructor-slider lazy">
      <ngx-slick-carousel #slickModal="slick-carousel" [config]="instructorSlider">
        <div ngxSlickItem *ngFor="let inst of topInstructors">
          <div class="instructor-item instructor-item-three mb-0" data-aos="flip-left">
            <div class="instructors-img">
              <a [routerLink]="[routes.instructorDetails, inst.id]" tabindex="0">
                <img class="img-fluid" [alt]="inst.name" [src]="getAvatarUrl(inst.avatar)" />
              </a>
            </div>
            <div class="instructor-content">
              <div>
                <h3 class="title">
                  <a [routerLink]="[routes.instructorDetails, inst.id]">{{ inst.name }}</a>
                </h3>
                <span class="designation">Instructeur</span>
              </div>
              <p class="rating" *ngIf="inst.avgRating"><i class="fas fa-star me-1"></i>{{ inst.avgRating }}</p>
            </div>
          </div>
        </div>
      </ngx-slick-carousel>
    </div>
  </div>
</div>
<!-- featured instructor -->

<!-- testimonials -->
<div class="testimonials-section testimonials-sec-one text-center">
  <div class="container">
    <div class="section-header text-center" data-aos="fade-up">
      <span class="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">Featured Instructors</span>
      <h2>Top Class & Professional Instructors</h2>
      <p>Words from Those Who\u2019ve Experienced Real Growth</p>
    </div>
    <div >
      <ngx-slick-carousel class="testimonials-slider lazy mt-4" #slickModal="slick-carousel" [config]="testimonialSlider">
        <div ngxSlickItem>
          <div class="testimonials-item rounded-3 bg-white" data-aos="flip-right">
            <div class="position-relative d-inline-flex m-auto">
              <div class="avatar rounded-circle avatar-xxl border border-white border-3">
                <a [routerLink]="routes.studentsDetails"><img class="img-fluid rounded-circle" src="./assets/img/user/user-41.jpg"
                    alt="img" /></a>
              </div>
              <i class="isax isax-quote-up5 bg-secondary quote rounded-pill fs-16 p-1"></i>
            </div>
            <h6 class="mb-1"><a [routerLink]="routes.studentsDetails">Brenda Slaton</a></h6>
            <p class="designation">Designer</p>
            <p class="mb-3 text-truncate line-clamb-2">
              This mentor helped me understand concepts that I had been struggling
              with for weeks.
            </p>
            <div>
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star text-warning"></i>
            </div>
          </div>
        </div>
        <div ngxSlickItem>
          <div class="testimonials-item rounded-3 bg-white" data-aos="flip-right">
            <div class="position-relative d-inline-flex m-auto">
              <div class="avatar rounded-circle avatar-xxl border border-white border-3">
                <a [routerLink]="routes.studentsDetails"><img class="img-fluid rounded-circle" src="./assets/img/user/user-42.jpg"
                    alt="img" /></a>
              </div>
              <i class="isax isax-quote-up5 bg-secondary quote rounded-pill fs-16 p-1"></i>
            </div>
            <h6 class="mb-1"><a [routerLink]="routes.studentsDetails">Adrian Dennis</a></h6>
            <p class="designation">Developer</p>
            <p class="mb-3 text-truncate line-clamb-2">
              I\u2019ve learned so much from my mentor\u2019s personal experience.
            </p>
            <div>
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star text-warning"></i>
            </div>
          </div>
        </div>
        <div ngxSlickItem>
          <div class="testimonials-item rounded-3 bg-white" data-aos="flip-right">
            <div class="position-relative d-inline-flex m-auto">
              <div class="avatar rounded-circle avatar-xxl border border-white border-3">
                <a [routerLink]="routes.studentsDetails"><img class="img-fluid rounded-circle" src="./assets/img/user/user-43.jpg"
                    alt="img" /></a>
              </div>
              <i class="isax isax-quote-up5 bg-secondary quote rounded-pill fs-16 p-1"></i>
            </div>
            <h6 class="mb-1">
              <a [routerLink]="routes.studentsDetails">Adrian Coztanza</a>
            </h6>
            <p class="designation">Architect</p>
            <p class="mb-3 text-truncate line-clamb-2">
              The advice was useful, but I wish my mentor had been more available
              for follow-up discussions.
            </p>
            <div>
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star text-warning"></i>
            </div>
          </div>
        </div>
        <div ngxSlickItem>
          <div class="testimonials-item rounded-3 bg-white">
            <div class="position-relative d-inline-flex m-auto">
              <div class="avatar rounded-circle avatar-xxl border border-white border-3">
                <a [routerLink]="routes.studentsDetails"><img class="img-fluid rounded-circle" src="./assets/img/user/user-43.jpg"
                    alt="img" /></a>
              </div>
              <i class="isax isax-quote-up5 bg-secondary quote rounded-pill fs-16 p-1"></i>
            </div>
            <h6 class="mb-1">
              <a [routerLink]="routes.studentsDetails">Adrian Coztanza</a>
            </h6>
            <p class="designation">Architect</p>
            <p class="mb-3 text-truncate line-clamb-2">
              The advice was useful, but I wish my mentor had been more available
              for follow-up discussions.
            </p>
            <div>
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star text-warning"></i>
            </div>
          </div>
        </div>
      </ngx-slick-carousel>
    </div>
  </div>
</div>
<!-- testimonials -->

<!-- faq -->
<div class="faq-section faq-banner-bg">
  <img src="assets/img/bg/bg-21.svg" alt="img" class="d-lg-flex d-none faq-bg2" />
  <img src="assets/img/bg/bg-22.svg" alt="img" class="d-lg-flex d-none faq-bg3" />
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-6">
        <div class="faq-img" data-aos="fade-up">
          <img class="img-fluid rounded-5" src="assets/img/feature/feature-4.jpg" alt="img" />
          <span><i class="isax isax-message-question5"></i></span>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="faq-content">
          <div class="section-header" data-aos="fade-up">
            <span class="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">Your Questions are
              Answered</span>
            <h2 class="mb-1">Frequently Asked Questions</h2>
            <p>
              Explore detailed answers to the most common questions about our
              platform.
            </p>
          </div>
          <div class="accordion accordion-customicon1 accordions-items-seperate" id="accordioncustomicon1Example">
            <div class="accordion-item" data-aos="fade-up">
              <h2 class="accordion-header" id="headingcustomicon1One">
                <a href="javascript:void(0);" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapsecustomicon1One"
                  aria-expanded="true" aria-controls="collapsecustomicon1One">
                  How do I enroll in a course?
                  <i class="isax isax-add fs-20 fw-semibold ms-1"></i>
                </a>
              </h2>
              <div id="collapsecustomicon1One" class="accordion-collapse collapse show"
                aria-labelledby="headingcustomicon1One" data-bs-parent="#accordioncustomicon1Example">
                <div class="accordion-body pt-0">
                  <p>
                    Many websites offer a Certificate of Completion for paid
                    courses. Free courses may or may not include a certificate,
                    depending on the platform\u2019s policies.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item" data-aos="fade-up" data-aos-delay="250">
              <h2 class="accordion-header" id="headingcustomicon1Two">
                <a href="javascript:void(0);" class="accordion-button collapsed" data-bs-toggle="collapse"
                  data-bs-target="#collapsecustomicon1Two" aria-expanded="false" aria-controls="collapsecustomicon1One">
                  How long do I have access to a course?
                  <i class="isax isax-add fs-20 fw-semibold ms-1"></i>
                </a>
              </h2>
              <div id="collapsecustomicon1Two" class="accordion-collapse collapse"
                aria-labelledby="headingcustomicon1Two" data-bs-parent="#accordioncustomicon1Example">
                <div class="accordion-body pt-0">
                  <p>
                    Many websites offer a Certificate of Completion for paid
                    courses. Free courses may or may not include a certificate,
                    depending on the platform\u2019s policies.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item" data-aos="fade-up" data-aos-delay="250">
              <h2 class="accordion-header" id="headingcustomicon1Three">
                <a href="javascript:void(0);" class="accordion-button collapsed" data-bs-toggle="collapse"
                  data-bs-target="#collapsecustomicon1Three" aria-expanded="false"
                  aria-controls="collapsecustomicon1One">
                  What payment methods are accepted?
                  <i class="isax isax-add fs-20 fw-semibold ms-1"></i>
                </a>
              </h2>
              <div id="collapsecustomicon1Three" class="accordion-collapse collapse"
                aria-labelledby="headingcustomicon1Three" data-bs-parent="#accordioncustomicon1Example">
                <div class="accordion-body pt-0">
                  <p>
                    Many websites offer a Certificate of Completion for paid
                    courses. Free courses may or may not include a certificate,
                    depending on the platform\u2019s policies.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item" data-aos="fade-up" data-aos-delay="250">
              <h2 class="accordion-header" id="headingcustomicon1Four">
                <a href="javascript:void(0);" class="accordion-button collapsed" data-bs-toggle="collapse"
                  data-bs-target="#collapsecustomicon1Four" aria-expanded="false"
                  aria-controls="collapsecustomicon1One">
                  Will I receive a certificate after completing a course?
                  <i class="isax isax-add fs-20 fw-semibold ms-1"></i>
                </a>
              </h2>
              <div id="collapsecustomicon1Four" class="accordion-collapse collapse"
                aria-labelledby="headingcustomicon1Four" data-bs-parent="#accordioncustomicon1Example">
                <div class="accordion-body pt-0">
                  <p>
                    Many websites offer a Certificate of Completion for paid
                    courses. Free courses may or may not include a certificate,
                    depending on the platform\u2019s policies.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item" data-aos="fade-up" data-aos-delay="250">
              <h2 class="accordion-header" id="headingcustomicon1Five">
                <a href="javascript:void(0);" class="accordion-button collapsed" data-bs-toggle="collapse"
                  data-bs-target="#collapsecustomicon1Five" aria-expanded="false"
                  aria-controls="collapsecustomicon1One">
                  What is the purpose of this DreamLMS ?
                  <i class="isax isax-add fs-20 fw-semibold ms-1"></i>
                </a>
              </h2>
              <div id="collapsecustomicon1Five" class="accordion-collapse collapse"
                aria-labelledby="headingcustomicon1Five" data-bs-parent="#accordioncustomicon1Example">
                <div class="accordion-body pt-0">
                  <p>
                    Many websites offer a Certificate of Completion for paid
                    courses. Free courses may or may not include a certificate,
                    depending on the platform\u2019s policies.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item" data-aos="fade-up" data-aos-delay="250">
              <h2 class="accordion-header" id="headingcustomicon1Six">
                <a href="javascript:void(0);" class="accordion-button collapsed" data-bs-toggle="collapse"
                  data-bs-target="#collapsecustomicon1Six" aria-expanded="false" aria-controls="collapsecustomicon1One">
                  What can I do with my certificate?
                  <i class="isax isax-add fs-20 fw-semibold ms-1"></i>
                </a>
              </h2>
              <div id="collapsecustomicon1Six" class="accordion-collapse collapse"
                aria-labelledby="headingcustomicon1Six" data-bs-parent="#accordioncustomicon1Example">
                <div class="accordion-body pt-0">
                  <p>
                    Many websites offer a Certificate of Completion for paid
                    courses. Free courses may or may not include a certificate,
                    depending on the platform\u2019s policies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- faq -->

<!-- Latest Blog -->
<section class="latest-blog-three latest-blog-five">
  <div class="container">
    <div class="section-header text-center" data-aos="fade-up">
      <span class="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">Articles & Updates</span>
      <h2>Our\xA0Recent Blog & Articles</h2>
      <p>
        Explore curated content to enlighten, entertain and engage global
        readers.
      </p>
    </div>
    <div class="latest-blog-main">
      <div class="row">
        <div class="col-lg-4">
          <div class="event-blog-three blog-three-one" data-aos="fade-up">
            <div class="blog-img-three">
              <a [routerLink]="routes.blog_grid">
                <img class="img-fluid" alt="Img" src="assets/img/blog/blog-35.jpg" />
              </a>
            </div>
            <div class="latest-blog-content">
              <div class="event-three-title">
                <div class="event-span-three d-flex align-items-center">
                  <span class="category">Lifestyle</span>
                  <div class="blog-date">
                    <i class="fa-solid fa-calendar"></i><span>09 Aug 2025</span>
                  </div>
                </div>
                <a [routerLink]="routes.blog_grid">
                  <h5>Why an LMS is Essential for Modern Education</h5>
                </a>
              </div>
            </div>
            <div class="blog-user-top">
              <a href="javascript:void(0);"><img src="assets/img/user/user-01.jpg" alt="" />David
                Benitez</a>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="row">
            <div class="col-md-6">
              <div class="event-blog-three blog-three-one" data-aos="fade-up">
                <div class="blog-img-three">
                  <a [routerLink]="routes.blog_details">
                    <img class="img-fluid" alt="Img" src="assets/img/blog/blog-36.jpg" />
                  </a>
                </div>
                <div class="latest-blog-content">
                  <div class="event-three-title">
                    <div class="event-span-three d-flex align-items-center">
                      <span class="category">Productivity</span>
                      <div class="blog-date">
                        <i class="fa-solid fa-calendar"></i>
                        <span>09 Aug 2025</span>
                      </div>
                    </div>
                    <h5>
                      <a [routerLink]="routes.blog_grid">The Impact of LMS on Academic Journey Education</a>
                    </h5>
                  </div>
                </div>
                <div class="blog-user-top">
                  <a href="javascript:void(0);"><img src="assets/img/user/user-01.jpg" alt="" />David
                    Benitez</a>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="event-blog-three blog-three-one" data-aos="fade-up">
                <div class="blog-img-three">
                  <a [routerLink]="routes.blog_grid">
                    <img class="img-fluid" alt="Img" src="assets/img/blog/blog-38.jpg" />
                  </a>
                </div>
                <div class="latest-blog-content">
                  <div class="event-three-title">
                    <div class="event-span-three d-flex align-items-center">
                      <span class="category">Productivity</span>
                      <div class="blog-date">
                        <i class="fa-solid fa-calendar"></i><span>09 Aug 2025</span>
                      </div>
                    </div>
                    <h5>
                      <a [routerLink]="routes.blog_grid">Maximizing Academic Success with the Right LMS</a>
                    </h5>
                  </div>
                </div>
                <div class="blog-user-top">
                  <a href="javascript:void(0);"><img src="assets/img/user/user-01.jpg" alt="" />David
                    Benitez</a>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="event-blog-three blog-three-one" data-aos="fade-up">
                <div class="blog-img-three">
                  <a [routerLink]="routes.blog_grid">
                    <img class="img-fluid" alt="Img" src="assets/img/blog/blog-37.jpg" />
                  </a>
                </div>
                <div class="latest-blog-content">
                  <div class="event-three-title">
                    <div class="event-span-three d-flex align-items-center">
                      <span class="category">UI /UX</span>
                      <div class="blog-date">
                        <i class="fa-solid fa-calendar"></i><span>09 Aug 2025</span>
                      </div>
                    </div>
                    <h5>
                      <a [routerLink]="routes.blog_grid">Promoting Health & Well being in Schools</a>
                    </h5>
                  </div>
                </div>
                <div class="blog-user-top">
                  <a href="javascript:void(0);"><img src="assets/img/user/user-01.jpg" alt="" />David
                    Benitez</a>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="event-blog-three blog-three-one" data-aos="fade-up">
                <div class="blog-img-three">
                  <a [routerLink]="routes.blog_grid">
                    <img class="img-fluid" alt="Img" src="assets/img/blog/blog-39.jpg" />
                  </a>
                </div>
                <div class="latest-blog-content">
                  <div class="event-three-title">
                    <div class="event-span-three d-flex align-items-center">
                      <span class="category">Development</span>
                      <div class="blog-date">
                        <i class="fa-solid fa-calendar"></i><span>09 Aug 2025</span>
                      </div>
                    </div>
                    <h5>
                      <a [routerLink]="routes.blog_grid">How to Build and Run a Pilot Mentoring Program</a>
                    </h5>
                  </div>
                </div>
                <div class="blog-user-top">
                  <a href="javascript:void(0);"><img src="assets/img/user/user-01.jpg" alt="" />David
                    Benitez</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">
      <a class="btn btn-view-all" data-aos="fade-up" [routerLink]="routes.blog_grid">View All Articles</a>
    </div>
  </div>
</section>
<!-- /Latest Blog -->


  <app-footer></app-footer>
`, styles: ["/* src/app/features/home-list/home/home.component.scss */\n/*# sourceMappingURL=home.component.css.map */\n"] }]
  }], () => [{ type: DataService }, { type: Router }, { type: CourseService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/features/home-list/home/home.component.ts", lineNumber: 35 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-56QCUMX7.js.map
