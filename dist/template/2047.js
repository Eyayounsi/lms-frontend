"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[2047],{

/***/ 22047:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/sort.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_SORT_DEFAULT_OPTIONS: () => (/* binding */ MAT_SORT_DEFAULT_OPTIONS),
/* harmony export */   MAT_SORT_HEADER_INTL_PROVIDER: () => (/* binding */ MAT_SORT_HEADER_INTL_PROVIDER),
/* harmony export */   MAT_SORT_HEADER_INTL_PROVIDER_FACTORY: () => (/* binding */ MAT_SORT_HEADER_INTL_PROVIDER_FACTORY),
/* harmony export */   MatSort: () => (/* binding */ MatSort),
/* harmony export */   MatSortHeader: () => (/* binding */ MatSortHeader),
/* harmony export */   MatSortHeaderIntl: () => (/* binding */ MatSortHeaderIntl),
/* harmony export */   MatSortModule: () => (/* binding */ MatSortModule),
/* harmony export */   matSortAnimations: () => (/* binding */ matSortAnimations)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ 56423);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ 72102);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ 78159);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 56042);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 63617);
/* harmony import */ var _angular_cdk_private__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/private */ 86739);
/* harmony import */ var _animation_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./animation.mjs */ 51935);
/* harmony import */ var _structural_styles_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./structural-styles.mjs */ 1805);
/* harmony import */ var _common_module_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common-module.mjs */ 80097);












/** @docs-private */
const _c0 = ["mat-sort-header", ""];
const _c1 = ["*"];
function MatSortHeader_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](1, "svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElement"](2, "path", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]()();
  }
}
function getSortDuplicateSortableIdError(id) {
  return Error(`Cannot have two MatSortables with the same id (${id}).`);
}
/** @docs-private */
function getSortHeaderNotContainedWithinSortError() {
  return Error(`MatSortHeader must be placed within a parent element with the MatSort directive.`);
}
/** @docs-private */
function getSortHeaderMissingIdError() {
  return Error(`MatSortHeader must be provided with a unique id.`);
}
/** @docs-private */
function getSortInvalidDirectionError(direction) {
  return Error(`${direction} is not a valid sort direction ('asc' or 'desc').`);
}

/** Injection token to be used to override the default options for `mat-sort`. */
const MAT_SORT_DEFAULT_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_SORT_DEFAULT_OPTIONS');
/** Container for MatSortables to manage the sort state and provide default sort parameters. */
let MatSort = /*#__PURE__*/(() => {
  class MatSort {
    _defaultOptions;
    _initializedStream = new rxjs__WEBPACK_IMPORTED_MODULE_7__.ReplaySubject(1);
    /** Collection of all registered sortables that this directive manages. */
    sortables = new Map();
    /** Used to notify any child components listening to state changes. */
    _stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    /** The id of the most recently sorted MatSortable. */
    active;
    /**
     * The direction to set when an MatSortable is initially sorted.
     * May be overridden by the MatSortable's sort start.
     */
    start = 'asc';
    /** The sort direction of the currently active MatSortable. */
    get direction() {
      return this._direction;
    }
    set direction(direction) {
      if (direction && direction !== 'asc' && direction !== 'desc' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getSortInvalidDirectionError(direction);
      }
      this._direction = direction;
    }
    _direction = '';
    /**
     * Whether to disable the user from clearing the sort by finishing the sort direction cycle.
     * May be overridden by the MatSortable's disable clear input.
     */
    disableClear;
    /** Whether the sortable is disabled. */
    disabled = false;
    /** Event emitted when the user changes either the active sort or sort direction. */
    sortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /** Emits when the paginator is initialized. */
    initialized = this._initializedStream;
    constructor(_defaultOptions) {
      this._defaultOptions = _defaultOptions;
    }
    /**
     * Register function to be used by the contained MatSortables. Adds the MatSortable to the
     * collection of MatSortables.
     */
    register(sortable) {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!sortable.id) {
          throw getSortHeaderMissingIdError();
        }
        if (this.sortables.has(sortable.id)) {
          throw getSortDuplicateSortableIdError(sortable.id);
        }
      }
      this.sortables.set(sortable.id, sortable);
    }
    /**
     * Unregister function to be used by the contained MatSortables. Removes the MatSortable from the
     * collection of contained MatSortables.
     */
    deregister(sortable) {
      this.sortables.delete(sortable.id);
    }
    /** Sets the active sort id and determines the new sort direction. */
    sort(sortable) {
      if (this.active != sortable.id) {
        this.active = sortable.id;
        this.direction = sortable.start ? sortable.start : this.start;
      } else {
        this.direction = this.getNextSortDirection(sortable);
      }
      this.sortChange.emit({
        active: this.active,
        direction: this.direction
      });
    }
    /** Returns the next sort direction of the active sortable, checking for potential overrides. */
    getNextSortDirection(sortable) {
      if (!sortable) {
        return '';
      }
      // Get the sort direction cycle with the potential sortable overrides.
      const disableClear = sortable?.disableClear ?? this.disableClear ?? !!this._defaultOptions?.disableClear;
      let sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear);
      // Get and return the next direction in the cycle
      let nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;
      if (nextDirectionIndex >= sortDirectionCycle.length) {
        nextDirectionIndex = 0;
      }
      return sortDirectionCycle[nextDirectionIndex];
    }
    ngOnInit() {
      this._initializedStream.next();
    }
    ngOnChanges() {
      this._stateChanges.next();
    }
    ngOnDestroy() {
      this._stateChanges.complete();
      this._initializedStream.complete();
    }
    static ɵfac = function MatSort_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatSort)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_SORT_DEFAULT_OPTIONS, 8));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatSort,
      selectors: [["", "matSort", ""]],
      hostAttrs: [1, "mat-sort"],
      inputs: {
        active: [0, "matSortActive", "active"],
        start: [0, "matSortStart", "start"],
        direction: [0, "matSortDirection", "direction"],
        disableClear: [2, "matSortDisableClear", "disableClear", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute],
        disabled: [2, "matSortDisabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute]
      },
      outputs: {
        sortChange: "matSortChange"
      },
      exportAs: ["matSort"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
  }
  return MatSort;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Returns the sort direction cycle to use given the provided parameters of order and clear. */
function getSortDirectionCycle(start, disableClear) {
  let sortOrder = ['asc', 'desc'];
  if (start == 'desc') {
    sortOrder.reverse();
  }
  if (!disableClear) {
    sortOrder.push('');
  }
  return sortOrder;
}

/**
 * To modify the labels and text displayed, create a new instance of MatSortHeaderIntl and
 * include it in a custom provider.
 */
let MatSortHeaderIntl = /*#__PURE__*/(() => {
  class MatSortHeaderIntl {
    /**
     * Stream that emits whenever the labels here are changed. Use this to notify
     * components if the labels have changed after initialization.
     */
    changes = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    static ɵfac = function MatSortHeaderIntl_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatSortHeaderIntl)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MatSortHeaderIntl,
      factory: MatSortHeaderIntl.ɵfac,
      providedIn: 'root'
    });
  }
  return MatSortHeaderIntl;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @docs-private
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 */
function MAT_SORT_HEADER_INTL_PROVIDER_FACTORY(parentIntl) {
  return parentIntl || new MatSortHeaderIntl();
}
/**
 * @docs-private
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 */
const MAT_SORT_HEADER_INTL_PROVIDER = {
  // If there is already an MatSortHeaderIntl available, use that. Otherwise, provide a new one.
  provide: MatSortHeaderIntl,
  deps: [[/*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional(), /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.SkipSelf(), MatSortHeaderIntl]],
  useFactory: MAT_SORT_HEADER_INTL_PROVIDER_FACTORY
};

/**
 * Applies sorting behavior (click to change sort) and styles to an element, including an
 * arrow to display the current sort direction.
 *
 * Must be provided with an id and contained within a parent MatSort directive.
 *
 * If used on header cells in a CdkTable, it will automatically default its id from its containing
 * column definition.
 */
let MatSortHeader = /*#__PURE__*/(() => {
  class MatSortHeader {
    _intl = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MatSortHeaderIntl);
    _sort = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MatSort, {
      optional: true
    });
    _columnDef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)('MAT_SORT_HEADER_COLUMN_DEF', {
      optional: true
    });
    _changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef);
    _focusMonitor = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.FocusMonitor);
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
    _ariaDescriber = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.AriaDescriber, {
      optional: true
    });
    _renderChanges;
    _animationsDisabled = (0,_animation_mjs__WEBPACK_IMPORTED_MODULE_10__._animationsDisabled)();
    /**
     * Indicates which state was just cleared from the sort header.
     * Will be reset on the next interaction. Used for coordinating animations.
     */
    _recentlyCleared = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null, ...(ngDevMode ? [{
      debugName: "_recentlyCleared"
    }] : []));
    /**
     * The element with role="button" inside this component's view. We need this
     * in order to apply a description with AriaDescriber.
     */
    _sortButton;
    /**
     * ID of this sort header. If used within the context of a CdkColumnDef, this will default to
     * the column's name.
     */
    id;
    /** Sets the position of the arrow that displays when sorted. */
    arrowPosition = 'after';
    /** Overrides the sort start value of the containing MatSort for this MatSortable. */
    start;
    /** whether the sort header is disabled. */
    disabled = false;
    /**
     * Description applied to MatSortHeader's button element with aria-describedby. This text should
     * describe the action that will occur when the user clicks the sort header.
     */
    get sortActionDescription() {
      return this._sortActionDescription;
    }
    set sortActionDescription(value) {
      this._updateSortActionDescription(value);
    }
    // Default the action description to "Sort" because it's better than nothing.
    // Without a description, the button's label comes from the sort header text content,
    // which doesn't give any indication that it performs a sorting operation.
    _sortActionDescription = 'Sort';
    /** Overrides the disable clear value of the containing MatSort for this MatSortable. */
    disableClear;
    constructor() {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_private__WEBPACK_IMPORTED_MODULE_9__._CdkPrivateStyleLoader).load(_structural_styles_mjs__WEBPACK_IMPORTED_MODULE_11__._StructuralStylesLoader);
      const defaultOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MAT_SORT_DEFAULT_OPTIONS, {
        optional: true
      });
      // Note that we use a string token for the `_columnDef`, because the value is provided both by
      // `material/table` and `cdk/table` and we can't have the CDK depending on Material,
      // and we want to avoid having the sort header depending on the CDK table because
      // of this single reference.
      if (!this._sort && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getSortHeaderNotContainedWithinSortError();
      }
      if (defaultOptions?.arrowPosition) {
        this.arrowPosition = defaultOptions?.arrowPosition;
      }
    }
    ngOnInit() {
      if (!this.id && this._columnDef) {
        this.id = this._columnDef.name;
      }
      this._sort.register(this);
      this._renderChanges = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(this._sort._stateChanges, this._sort.sortChange).subscribe(() => this._changeDetectorRef.markForCheck());
      this._sortButton = this._elementRef.nativeElement.querySelector('.mat-sort-header-container');
      this._updateSortActionDescription(this._sortActionDescription);
    }
    ngAfterViewInit() {
      // We use the focus monitor because we also want to style
      // things differently based on the focus origin.
      this._focusMonitor.monitor(this._elementRef, true).subscribe(() => {
        // We need the delay here, because we can trigger a signal write error if the header
        // has a signal bound to `disabled` which causes it to be blurred (see #31723.)
        Promise.resolve().then(() => this._recentlyCleared.set(null));
      });
    }
    ngOnDestroy() {
      this._focusMonitor.stopMonitoring(this._elementRef);
      this._sort.deregister(this);
      this._renderChanges?.unsubscribe();
      if (this._sortButton) {
        this._ariaDescriber?.removeDescription(this._sortButton, this._sortActionDescription);
      }
    }
    /** Triggers the sort on this sort header and removes the indicator hint. */
    _toggleOnInteraction() {
      if (!this._isDisabled()) {
        const wasSorted = this._isSorted();
        const prevDirection = this._sort.direction;
        this._sort.sort(this);
        this._recentlyCleared.set(wasSorted && !this._isSorted() ? prevDirection : null);
      }
    }
    _handleKeydown(event) {
      if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__.SPACE || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__.ENTER) {
        event.preventDefault();
        this._toggleOnInteraction();
      }
    }
    /** Whether this MatSortHeader is currently sorted in either ascending or descending order. */
    _isSorted() {
      return this._sort.active == this.id && (this._sort.direction === 'asc' || this._sort.direction === 'desc');
    }
    _isDisabled() {
      return this._sort.disabled || this.disabled;
    }
    /**
     * Gets the aria-sort attribute that should be applied to this sort header. If this header
     * is not sorted, returns null so that the attribute is removed from the host element. Aria spec
     * says that the aria-sort property should only be present on one header at a time, so removing
     * ensures this is true.
     */
    _getAriaSortAttribute() {
      if (!this._isSorted()) {
        return 'none';
      }
      return this._sort.direction == 'asc' ? 'ascending' : 'descending';
    }
    /** Whether the arrow inside the sort header should be rendered. */
    _renderArrow() {
      return !this._isDisabled() || this._isSorted();
    }
    _updateSortActionDescription(newDescription) {
      // We use AriaDescriber for the sort button instead of setting an `aria-label` because some
      // screen readers (notably VoiceOver) will read both the column header *and* the button's label
      // for every *cell* in the table, creating a lot of unnecessary noise.
      // If _sortButton is undefined, the component hasn't been initialized yet so there's
      // nothing to update in the DOM.
      if (this._sortButton) {
        // removeDescription will no-op if there is no existing message.
        // TODO(jelbourn): remove optional chaining when AriaDescriber is required.
        this._ariaDescriber?.removeDescription(this._sortButton, this._sortActionDescription);
        this._ariaDescriber?.describe(this._sortButton, newDescription);
      }
      this._sortActionDescription = newDescription;
    }
    static ɵfac = function MatSortHeader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatSortHeader)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatSortHeader,
      selectors: [["", "mat-sort-header", ""]],
      hostAttrs: [1, "mat-sort-header"],
      hostVars: 3,
      hostBindings: function MatSortHeader_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatSortHeader_click_HostBindingHandler() {
            return ctx._toggleOnInteraction();
          })("keydown", function MatSortHeader_keydown_HostBindingHandler($event) {
            return ctx._handleKeydown($event);
          })("mouseleave", function MatSortHeader_mouseleave_HostBindingHandler() {
            return ctx._recentlyCleared.set(null);
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-sort", ctx._getAriaSortAttribute());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-sort-header-disabled", ctx._isDisabled());
        }
      },
      inputs: {
        id: [0, "mat-sort-header", "id"],
        arrowPosition: "arrowPosition",
        start: "start",
        disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute],
        sortActionDescription: "sortActionDescription",
        disableClear: [2, "disableClear", "disableClear", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute]
      },
      exportAs: ["matSortHeader"],
      attrs: _c0,
      ngContentSelectors: _c1,
      decls: 4,
      vars: 17,
      consts: [[1, "mat-sort-header-container", "mat-focus-indicator"], [1, "mat-sort-header-content"], [1, "mat-sort-header-arrow"], ["viewBox", "0 -960 960 960", "focusable", "false", "aria-hidden", "true"], ["d", "M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z"]],
      template: function MatSortHeader_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditionalCreate"](3, MatSortHeader_Conditional_3_Template, 3, 0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-sort-header-sorted", ctx._isSorted())("mat-sort-header-position-before", ctx.arrowPosition === "before")("mat-sort-header-descending", ctx._sort.direction === "desc")("mat-sort-header-ascending", ctx._sort.direction === "asc")("mat-sort-header-recently-cleared-ascending", ctx._recentlyCleared() === "asc")("mat-sort-header-recently-cleared-descending", ctx._recentlyCleared() === "desc")("mat-sort-header-animations-disabled", ctx._animationsDisabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx._isDisabled() ? null : 0)("role", ctx._isDisabled() ? null : "button");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx._renderArrow() ? 3 : -1);
        }
      },
      styles: [".mat-sort-header{cursor:pointer}.mat-sort-header-disabled{cursor:default}.mat-sort-header-container{display:flex;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-container::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-sort-header-content{display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}@keyframes _mat-sort-header-recently-cleared-ascending{from{transform:translateY(0);opacity:1}to{transform:translateY(-25%);opacity:0}}@keyframes _mat-sort-header-recently-cleared-descending{from{transform:translateY(0) rotate(180deg);opacity:1}to{transform:translateY(25%) rotate(180deg);opacity:0}}.mat-sort-header-arrow{height:12px;width:12px;position:relative;transition:transform 225ms cubic-bezier(0.4, 0, 0.2, 1),opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;overflow:visible;color:var(--mat-sort-arrow-color, var(--mat-sys-on-surface))}.mat-sort-header.cdk-keyboard-focused .mat-sort-header-arrow,.mat-sort-header.cdk-program-focused .mat-sort-header-arrow,.mat-sort-header:hover .mat-sort-header-arrow{opacity:.54}.mat-sort-header .mat-sort-header-sorted .mat-sort-header-arrow{opacity:1}.mat-sort-header-descending .mat-sort-header-arrow{transform:rotate(180deg)}.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow{transform:translateY(-25%)}.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow{transition:none;animation:_mat-sort-header-recently-cleared-ascending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards}.mat-sort-header-recently-cleared-descending .mat-sort-header-arrow{transition:none;animation:_mat-sort-header-recently-cleared-descending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards}.mat-sort-header-animations-disabled .mat-sort-header-arrow{transition-duration:0ms;animation-duration:0ms}.mat-sort-header-arrow svg{width:24px;height:24px;fill:currentColor;position:absolute;top:50%;left:50%;margin:-12px 0 0 -12px;transform:translateZ(0)}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MatSortHeader;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatSortModule = /*#__PURE__*/(() => {
  class MatSortModule {
    static ɵfac = function MatSortModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatSortModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MatSortModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      providers: [MAT_SORT_HEADER_INTL_PROVIDER],
      imports: [_common_module_mjs__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule]
    });
  }
  return MatSortModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Animations used by MatSort.
 * @docs-private
 * @deprecated No longer being used, to be removed.
 * @breaking-change 21.0.0
 */
const matSortAnimations = {
  // Represents:
  // trigger('indicator', [
  //   state('active-asc, asc', style({transform: 'translateY(0px)'})),
  //   // 10px is the height of the sort indicator, minus the width of the pointers
  //   state('active-desc, desc', style({transform: 'translateY(10px)'})),
  //   transition('active-asc <=> active-desc', animate(SORT_ANIMATION_TRANSITION)),
  // ])
  /** Animation that moves the sort indicator. */
  indicator: {
    type: 7,
    name: 'indicator',
    definitions: [{
      type: 0,
      name: 'active-asc, asc',
      styles: {
        type: 6,
        styles: {
          transform: 'translateY(0px)'
        },
        offset: null
      }
    }, {
      type: 0,
      name: 'active-desc, desc',
      styles: {
        type: 6,
        styles: {
          transform: 'translateY(10px)'
        },
        offset: null
      }
    }, {
      type: 1,
      expr: 'active-asc <=> active-desc',
      animation: {
        type: 4,
        styles: null,
        timings: '225ms cubic-bezier(0.4,0.0,0.2,1)'
      },
      options: null
    }],
    options: {}
  },
  // Represents:
  // trigger('leftPointer', [
  //   state('active-asc, asc', style({transform: 'rotate(-45deg)'})),
  //   state('active-desc, desc', style({transform: 'rotate(45deg)'})),
  //   transition('active-asc <=> active-desc', animate(SORT_ANIMATION_TRANSITION)),
  // ])
  /** Animation that rotates the left pointer of the indicator based on the sorting direction. */
  leftPointer: {
    type: 7,
    name: 'leftPointer',
    definitions: [{
      type: 0,
      name: 'active-asc, asc',
      styles: {
        type: 6,
        styles: {
          transform: 'rotate(-45deg)'
        },
        offset: null
      }
    }, {
      type: 0,
      name: 'active-desc, desc',
      styles: {
        type: 6,
        styles: {
          transform: 'rotate(45deg)'
        },
        offset: null
      }
    }, {
      type: 1,
      expr: 'active-asc <=> active-desc',
      animation: {
        type: 4,
        styles: null,
        timings: '225ms cubic-bezier(0.4,0.0,0.2,1)'
      },
      options: null
    }],
    options: {}
  },
  // Represents:
  // trigger('rightPointer', [
  //   state('active-asc, asc', style({transform: 'rotate(45deg)'})),
  //   state('active-desc, desc', style({transform: 'rotate(-45deg)'})),
  //   transition('active-asc <=> active-desc', animate(SORT_ANIMATION_TRANSITION)),
  // ])
  /** Animation that rotates the right pointer of the indicator based on the sorting direction. */
  rightPointer: {
    type: 7,
    name: 'rightPointer',
    definitions: [{
      type: 0,
      name: 'active-asc, asc',
      styles: {
        type: 6,
        styles: {
          transform: 'rotate(45deg)'
        },
        offset: null
      }
    }, {
      type: 0,
      name: 'active-desc, desc',
      styles: {
        type: 6,
        styles: {
          transform: 'rotate(-45deg)'
        },
        offset: null
      }
    }, {
      type: 1,
      expr: 'active-asc <=> active-desc',
      animation: {
        type: 4,
        styles: null,
        timings: '225ms cubic-bezier(0.4,0.0,0.2,1)'
      },
      options: null
    }],
    options: {}
  },
  // Represents:
  // trigger('arrowOpacity', [
  //   state('desc-to-active, asc-to-active, active', style({opacity: 1})),
  //   state('desc-to-hint, asc-to-hint, hint', style({opacity: 0.54})),
  //   state(
  //     'hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void',
  //     style({opacity: 0}),
  //   ),
  //   // Transition between all states except for immediate transitions
  //   transition('* => asc, * => desc, * => active, * => hint, * => void', animate('0ms')),
  //   transition('* <=> *', animate(SORT_ANIMATION_TRANSITION)),
  // ])
  /** Animation that controls the arrow opacity. */
  arrowOpacity: {
    type: 7,
    name: 'arrowOpacity',
    definitions: [{
      type: 0,
      name: 'desc-to-active, asc-to-active, active',
      styles: {
        type: 6,
        styles: {
          'opacity': 1
        },
        offset: null
      }
    }, {
      type: 0,
      name: 'desc-to-hint, asc-to-hint, hint',
      styles: {
        type: 6,
        styles: {
          'opacity': 0.54
        },
        offset: null
      }
    }, {
      type: 0,
      name: 'hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void',
      styles: {
        type: 6,
        styles: {
          'opacity': 0
        },
        offset: null
      }
    }, {
      type: 1,
      expr: '* => asc, * => desc, * => active, * => hint, * => void',
      animation: {
        type: 4,
        styles: null,
        timings: '0ms'
      },
      options: null
    }, {
      type: 1,
      expr: '* <=> *',
      animation: {
        type: 4,
        styles: null,
        timings: '225ms cubic-bezier(0.4,0.0,0.2,1)'
      },
      options: null
    }],
    options: {}
  },
  // Represents:
  // trigger('arrowPosition', [
  //   // Hidden Above => Hint Center
  //   transition(
  //     '* => desc-to-hint, * => desc-to-active',
  //     animate(
  //       SORT_ANIMATION_TRANSITION,
  //       keyframes([style({transform: 'translateY(-25%)'}), style({transform: 'translateY(0)'})]),
  //     ),
  //   ),
  //   // Hint Center => Hidden Below
  //   transition(
  //     '* => hint-to-desc, * => active-to-desc',
  //     animate(
  //       SORT_ANIMATION_TRANSITION,
  //       keyframes([style({transform: 'translateY(0)'}), style({transform: 'translateY(25%)'})]),
  //     ),
  //   ),
  //   // Hidden Below => Hint Center
  //   transition(
  //     '* => asc-to-hint, * => asc-to-active',
  //     animate(
  //       SORT_ANIMATION_TRANSITION,
  //       keyframes([style({transform: 'translateY(25%)'}), style({transform: 'translateY(0)'})]),
  //     ),
  //   ),
  //   // Hint Center => Hidden Above
  //   transition(
  //     '* => hint-to-asc, * => active-to-asc',
  //     animate(
  //       SORT_ANIMATION_TRANSITION,
  //       keyframes([style({transform: 'translateY(0)'}), style({transform: 'translateY(-25%)'})]),
  //     ),
  //   ),
  //   state(
  //     'desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active',
  //     style({transform: 'translateY(0)'}),
  //   ),
  //   state('hint-to-desc, active-to-desc, desc', style({transform: 'translateY(-25%)'})),
  //   state('hint-to-asc, active-to-asc, asc', style({transform: 'translateY(25%)'})),
  // ])
  /**
   * Animation for the translation of the arrow as a whole. States are separated into two
   * groups: ones with animations and others that are immediate. Immediate states are asc, desc,
   * peek, and active. The other states define a specific animation (source-to-destination)
   * and are determined as a function of their prev user-perceived state and what the next state
   * should be.
   */
  arrowPosition: {
    type: 7,
    name: 'arrowPosition',
    definitions: [{
      type: 1,
      expr: '* => desc-to-hint, * => desc-to-active',
      animation: {
        type: 4,
        styles: {
          type: 5,
          'steps': [{
            type: 6,
            styles: {
              transform: 'translateY(-25%)'
            },
            offset: null
          }, {
            type: 6,
            styles: {
              transform: 'translateY(0)'
            },
            offset: null
          }]
        },
        timings: '225ms cubic-bezier(0.4,0.0,0.2,1)'
      },
      options: null
    }, {
      type: 1,
      expr: '* => hint-to-desc, * => active-to-desc',
      animation: {
        type: 4,
        styles: {
          type: 5,
          'steps': [{
            type: 6,
            styles: {
              transform: 'translateY(0)'
            },
            offset: null
          }, {
            type: 6,
            styles: {
              transform: 'translateY(25%)'
            },
            offset: null
          }]
        },
        timings: '225ms cubic-bezier(0.4,0.0,0.2,1)'
      },
      options: null
    }, {
      type: 1,
      expr: '* => asc-to-hint, * => asc-to-active',
      animation: {
        type: 4,
        styles: {
          type: 5,
          'steps': [{
            type: 6,
            styles: {
              transform: 'translateY(25%)'
            },
            offset: null
          }, {
            type: 6,
            styles: {
              transform: 'translateY(0)'
            },
            offset: null
          }]
        },
        timings: '225ms cubic-bezier(0.4,0.0,0.2,1)'
      },
      options: null
    }, {
      type: 1,
      expr: '* => hint-to-asc, * => active-to-asc',
      animation: {
        type: 4,
        styles: {
          type: 5,
          'steps': [{
            type: 6,
            styles: {
              transform: 'translateY(0)'
            },
            offset: null
          }, {
            type: 6,
            styles: {
              transform: 'translateY(-25%)'
            },
            offset: null
          }]
        },
        timings: '225ms cubic-bezier(0.4,0.0,0.2,1)'
      },
      options: null
    }, {
      type: 0,
      name: 'desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active',
      styles: {
        type: 6,
        styles: {
          transform: 'translateY(0)'
        },
        offset: null
      }
    }, {
      type: 0,
      name: 'hint-to-desc, active-to-desc, desc',
      styles: {
        type: 6,
        styles: {
          transform: 'translateY(-25%)'
        },
        offset: null
      }
    }, {
      type: 0,
      name: 'hint-to-asc, active-to-asc, asc',
      styles: {
        type: 6,
        styles: {
          transform: 'translateY(25%)'
        },
        offset: null
      }
    }],
    options: {}
  },
  // Represents:
  // trigger('allowChildren', [
  //   transition('* <=> *', [query('@*', animateChild(), {optional: true})]),
  // ])
  /** Necessary trigger that calls animate on children animations. */
  allowChildren: {
    type: 7,
    name: 'allowChildren',
    definitions: [{
      type: 1,
      expr: '* <=> *',
      animation: [{
        type: 11,
        selector: '@*',
        animation: {
          type: 9,
          options: null
        },
        options: {
          optional: true
        }
      }],
      options: null
    }],
    options: {}
  }
};


/***/ })

}]);
//# sourceMappingURL=2047.js.map