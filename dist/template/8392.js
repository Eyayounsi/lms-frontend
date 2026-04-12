"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[8392],{

/***/ 729:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/typeahead.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Typeahead: () => (/* binding */ Typeahead)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 52575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 98764);
/* harmony import */ var _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./keycodes2.mjs */ 78159);



const DEFAULT_TYPEAHEAD_DEBOUNCE_INTERVAL_MS = 200;
/**
 * Selects items based on keyboard inputs. Implements the typeahead functionality of
 * `role="listbox"` or `role="tree"` and other related roles.
 */
class Typeahead {
  _letterKeyStream = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  _items = [];
  _selectedItemIndex = -1;
  /** Buffer for the letters that the user has pressed */
  _pressedLetters = [];
  _skipPredicateFn;
  _selectedItem = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  selectedItem = this._selectedItem;
  constructor(initialItems, config) {
    const typeAheadInterval = typeof config?.debounceInterval === 'number' ? config.debounceInterval : DEFAULT_TYPEAHEAD_DEBOUNCE_INTERVAL_MS;
    if (config?.skipPredicate) {
      this._skipPredicateFn = config.skipPredicate;
    }
    if ((typeof ngDevMode === 'undefined' || ngDevMode) && initialItems.length && initialItems.some(item => typeof item.getLabel !== 'function')) {
      throw new Error('KeyManager items in typeahead mode must implement the `getLabel` method.');
    }
    this.setItems(initialItems);
    this._setupKeyHandler(typeAheadInterval);
  }
  destroy() {
    this._pressedLetters = [];
    this._letterKeyStream.complete();
    this._selectedItem.complete();
  }
  setCurrentSelectedItemIndex(index) {
    this._selectedItemIndex = index;
  }
  setItems(items) {
    this._items = items;
  }
  handleKey(event) {
    const keyCode = event.keyCode;
    // Attempt to use the `event.key` which also maps it to the user's keyboard language,
    // otherwise fall back to resolving alphanumeric characters via the keyCode.
    if (event.key && event.key.length === 1) {
      this._letterKeyStream.next(event.key.toLocaleUpperCase());
    } else if (keyCode >= _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_5__.A && keyCode <= _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_5__.Z || keyCode >= _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_5__.ZERO && keyCode <= _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_5__.NINE) {
      this._letterKeyStream.next(String.fromCharCode(keyCode));
    }
  }
  /** Gets whether the user is currently typing into the manager using the typeahead feature. */
  isTyping() {
    return this._pressedLetters.length > 0;
  }
  /** Resets the currently stored sequence of typed letters. */
  reset() {
    this._pressedLetters = [];
  }
  _setupKeyHandler(typeAheadInterval) {
    // Debounce the presses of non-navigational keys, collect the ones that correspond to letters
    // and convert those letters back into a string. Afterwards find the first item that starts
    // with that string and select it.
    this._letterKeyStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(letter => this._pressedLetters.push(letter)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.debounceTime)(typeAheadInterval), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(() => this._pressedLetters.length > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => this._pressedLetters.join('').toLocaleUpperCase())).subscribe(inputString => {
      // Start at 1 because we want to start searching at the item immediately
      // following the current active item.
      for (let i = 1; i < this._items.length + 1; i++) {
        const index = (this._selectedItemIndex + i) % this._items.length;
        const item = this._items[index];
        if (!this._skipPredicateFn?.(item) && item.getLabel?.().toLocaleUpperCase().trim().indexOf(inputString) === 0) {
          this._selectedItem.next(item);
          break;
        }
      }
      this._pressedLetters = [];
    });
  }
}


/***/ }),

/***/ 1805:
/*!***********************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/structural-styles.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _StructuralStylesLoader: () => (/* binding */ _StructuralStylesLoader)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 12481);



/**
 * Component used to load structural styles for focus indicators.
 * @docs-private
 */
let _StructuralStylesLoader = /*#__PURE__*/(() => {
  class _StructuralStylesLoader {
    static ɵfac = function _StructuralStylesLoader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StructuralStylesLoader)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: _StructuralStylesLoader,
      selectors: [["structural-styles"]],
      decls: 0,
      vars: 0,
      template: function _StructuralStylesLoader_Template(rf, ctx) {},
      styles: [".mat-focus-indicator{position:relative}.mat-focus-indicator::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;display:var(--mat-focus-indicator-display, none);border-width:var(--mat-focus-indicator-border-width, 3px);border-style:var(--mat-focus-indicator-border-style, solid);border-color:var(--mat-focus-indicator-border-color, transparent);border-radius:var(--mat-focus-indicator-border-radius, 4px)}.mat-focus-indicator:focus::before{content:\"\"}@media(forced-colors: active){html{--mat-focus-indicator-display: block}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return _StructuralStylesLoader;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ }),

/***/ 9122:
/*!******************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/focus-key-manager.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FocusKeyManager: () => (/* binding */ FocusKeyManager)
/* harmony export */ });
/* harmony import */ var _list_key_manager_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-key-manager.mjs */ 17314);

class FocusKeyManager extends _list_key_manager_mjs__WEBPACK_IMPORTED_MODULE_0__.ListKeyManager {
  _origin = 'program';
  /**
   * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
   * @param origin Focus origin to be used when focusing items.
   */
  setFocusOrigin(origin) {
    this._origin = origin;
    return this;
  }
  setActiveItem(item) {
    super.setActiveItem(item);
    if (this.activeItem) {
      this.activeItem.focus(this._origin);
    }
  }
}


/***/ }),

/***/ 17314:
/*!*****************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/list-key-manager.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListKeyManager: () => (/* binding */ ListKeyManager)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 53705);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _typeahead_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./typeahead.mjs */ 729);
/* harmony import */ var _keycodes_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./keycodes.mjs */ 74879);
/* harmony import */ var _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./keycodes2.mjs */ 78159);






/**
 * This class manages keyboard events for selectable lists. If you pass it a query list
 * of items, it will set the active item correctly when arrow events occur.
 */
class ListKeyManager {
  _items;
  _activeItemIndex = /*#__PURE__*/(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(-1, ...(ngDevMode ? [{
    debugName: "_activeItemIndex"
  }] : []));
  _activeItem = /*#__PURE__*/(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null, ...(ngDevMode ? [{
    debugName: "_activeItem"
  }] : []));
  _wrap = false;
  _typeaheadSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription.EMPTY;
  _itemChangesSubscription;
  _vertical = true;
  _horizontal;
  _allowedModifierKeys = [];
  _homeAndEnd = false;
  _pageUpAndDown = {
    enabled: false,
    delta: 10
  };
  _effectRef;
  _typeahead;
  /**
   * Predicate function that can be used to check whether an item should be skipped
   * by the key manager. By default, disabled items are skipped.
   */
  _skipPredicateFn = item => item.disabled;
  constructor(_items, injector) {
    this._items = _items;
    // We allow for the items to be an array because, in some cases, the consumer may
    // not have access to a QueryList of the items they want to manage (e.g. when the
    // items aren't being collected via `ViewChildren` or `ContentChildren`).
    if (_items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__.QueryList) {
      this._itemChangesSubscription = _items.changes.subscribe(newItems => this._itemsChanged(newItems.toArray()));
    } else if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isSignal)(_items)) {
      if (!injector && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw new Error('ListKeyManager constructed with a signal must receive an injector');
      }
      this._effectRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.effect)(() => this._itemsChanged(_items()), ...(ngDevMode ? [{
        debugName: "_effectRef",
        injector
      }] : [{
        injector
      }]));
    }
  }
  /**
   * Stream that emits any time the TAB key is pressed, so components can react
   * when focus is shifted off of the list.
   */
  tabOut = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  /** Stream that emits whenever the active item of the list manager changes. */
  change = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  /**
   * Sets the predicate function that determines which items should be skipped by the
   * list key manager.
   * @param predicate Function that determines whether the given item should be skipped.
   */
  skipPredicate(predicate) {
    this._skipPredicateFn = predicate;
    return this;
  }
  /**
   * Configures wrapping mode, which determines whether the active item will wrap to
   * the other end of list when there are no more items in the given direction.
   * @param shouldWrap Whether the list should wrap when reaching the end.
   */
  withWrap(shouldWrap = true) {
    this._wrap = shouldWrap;
    return this;
  }
  /**
   * Configures whether the key manager should be able to move the selection vertically.
   * @param enabled Whether vertical selection should be enabled.
   */
  withVerticalOrientation(enabled = true) {
    this._vertical = enabled;
    return this;
  }
  /**
   * Configures the key manager to move the selection horizontally.
   * Passing in `null` will disable horizontal movement.
   * @param direction Direction in which the selection can be moved.
   */
  withHorizontalOrientation(direction) {
    this._horizontal = direction;
    return this;
  }
  /**
   * Modifier keys which are allowed to be held down and whose default actions will be prevented
   * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
   */
  withAllowedModifierKeys(keys) {
    this._allowedModifierKeys = keys;
    return this;
  }
  /**
   * Turns on typeahead mode which allows users to set the active item by typing.
   * @param debounceInterval Time to wait after the last keystroke before setting the active item.
   */
  withTypeAhead(debounceInterval = 200) {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      const items = this._getItemsArray();
      if (items.length > 0 && items.some(item => typeof item.getLabel !== 'function')) {
        throw Error('ListKeyManager items in typeahead mode must implement the `getLabel` method.');
      }
    }
    this._typeaheadSubscription.unsubscribe();
    const items = this._getItemsArray();
    this._typeahead = new _typeahead_mjs__WEBPACK_IMPORTED_MODULE_5__.Typeahead(items, {
      debounceInterval: typeof debounceInterval === 'number' ? debounceInterval : undefined,
      skipPredicate: item => this._skipPredicateFn(item)
    });
    this._typeaheadSubscription = this._typeahead.selectedItem.subscribe(item => {
      this.setActiveItem(item);
    });
    return this;
  }
  /** Cancels the current typeahead sequence. */
  cancelTypeahead() {
    this._typeahead?.reset();
    return this;
  }
  /**
   * Configures the key manager to activate the first and last items
   * respectively when the Home or End key is pressed.
   * @param enabled Whether pressing the Home or End key activates the first/last item.
   */
  withHomeAndEnd(enabled = true) {
    this._homeAndEnd = enabled;
    return this;
  }
  /**
   * Configures the key manager to activate every 10th, configured or first/last element in up/down direction
   * respectively when the Page-Up or Page-Down key is pressed.
   * @param enabled Whether pressing the Page-Up or Page-Down key activates the first/last item.
   * @param delta Whether pressing the Home or End key activates the first/last item.
   */
  withPageUpDown(enabled = true, delta = 10) {
    this._pageUpAndDown = {
      enabled,
      delta
    };
    return this;
  }
  setActiveItem(item) {
    const previousActiveItem = this._activeItem();
    this.updateActiveItem(item);
    if (this._activeItem() !== previousActiveItem) {
      this.change.next(this._activeItemIndex());
    }
  }
  /**
   * Sets the active item depending on the key event passed in.
   * @param event Keyboard event to be used for determining which element should be active.
   */
  onKeydown(event) {
    const keyCode = event.keyCode;
    const modifiers = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'];
    const isModifierAllowed = modifiers.every(modifier => {
      return !event[modifier] || this._allowedModifierKeys.indexOf(modifier) > -1;
    });
    switch (keyCode) {
      case _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_7__.TAB:
        this.tabOut.next();
        return;
      case _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_7__.DOWN_ARROW:
        if (this._vertical && isModifierAllowed) {
          this.setNextItemActive();
          break;
        } else {
          return;
        }
      case _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_7__.UP_ARROW:
        if (this._vertical && isModifierAllowed) {
          this.setPreviousItemActive();
          break;
        } else {
          return;
        }
      case _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_7__.RIGHT_ARROW:
        if (this._horizontal && isModifierAllowed) {
          this._horizontal === 'rtl' ? this.setPreviousItemActive() : this.setNextItemActive();
          break;
        } else {
          return;
        }
      case _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_7__.LEFT_ARROW:
        if (this._horizontal && isModifierAllowed) {
          this._horizontal === 'rtl' ? this.setNextItemActive() : this.setPreviousItemActive();
          break;
        } else {
          return;
        }
      case _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_7__.HOME:
        if (this._homeAndEnd && isModifierAllowed) {
          this.setFirstItemActive();
          break;
        } else {
          return;
        }
      case _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_7__.END:
        if (this._homeAndEnd && isModifierAllowed) {
          this.setLastItemActive();
          break;
        } else {
          return;
        }
      case _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_7__.PAGE_UP:
        if (this._pageUpAndDown.enabled && isModifierAllowed) {
          const targetIndex = this._activeItemIndex() - this._pageUpAndDown.delta;
          this._setActiveItemByIndex(targetIndex > 0 ? targetIndex : 0, 1);
          break;
        } else {
          return;
        }
      case _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_7__.PAGE_DOWN:
        if (this._pageUpAndDown.enabled && isModifierAllowed) {
          const targetIndex = this._activeItemIndex() + this._pageUpAndDown.delta;
          const itemsLength = this._getItemsArray().length;
          this._setActiveItemByIndex(targetIndex < itemsLength ? targetIndex : itemsLength - 1, -1);
          break;
        } else {
          return;
        }
      default:
        if (isModifierAllowed || (0,_keycodes_mjs__WEBPACK_IMPORTED_MODULE_6__.hasModifierKey)(event, 'shiftKey')) {
          this._typeahead?.handleKey(event);
        }
        // Note that we return here, in order to avoid preventing
        // the default action of non-navigational keys.
        return;
    }
    this._typeahead?.reset();
    event.preventDefault();
  }
  /** Index of the currently active item. */
  get activeItemIndex() {
    return this._activeItemIndex();
  }
  /** The active item. */
  get activeItem() {
    return this._activeItem();
  }
  /** Gets whether the user is currently typing into the manager using the typeahead feature. */
  isTyping() {
    return !!this._typeahead && this._typeahead.isTyping();
  }
  /** Sets the active item to the first enabled item in the list. */
  setFirstItemActive() {
    this._setActiveItemByIndex(0, 1);
  }
  /** Sets the active item to the last enabled item in the list. */
  setLastItemActive() {
    this._setActiveItemByIndex(this._getItemsArray().length - 1, -1);
  }
  /** Sets the active item to the next enabled item in the list. */
  setNextItemActive() {
    this._activeItemIndex() < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
  }
  /** Sets the active item to a previous enabled item in the list. */
  setPreviousItemActive() {
    this._activeItemIndex() < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1);
  }
  updateActiveItem(item) {
    const itemArray = this._getItemsArray();
    const index = typeof item === 'number' ? item : itemArray.indexOf(item);
    const activeItem = itemArray[index];
    // Explicitly check for `null` and `undefined` because other falsy values are valid.
    this._activeItem.set(activeItem == null ? null : activeItem);
    this._activeItemIndex.set(index);
    this._typeahead?.setCurrentSelectedItemIndex(index);
  }
  /** Cleans up the key manager. */
  destroy() {
    this._typeaheadSubscription.unsubscribe();
    this._itemChangesSubscription?.unsubscribe();
    this._effectRef?.destroy();
    this._typeahead?.destroy();
    this.tabOut.complete();
    this.change.complete();
  }
  /**
   * This method sets the active item, given a list of items and the delta between the
   * currently active item and the new active item. It will calculate differently
   * depending on whether wrap mode is turned on.
   */
  _setActiveItemByDelta(delta) {
    this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
  }
  /**
   * Sets the active item properly given "wrap" mode. In other words, it will continue to move
   * down the list until it finds an item that is not disabled, and it will wrap if it
   * encounters either end of the list.
   */
  _setActiveInWrapMode(delta) {
    const items = this._getItemsArray();
    for (let i = 1; i <= items.length; i++) {
      const index = (this._activeItemIndex() + delta * i + items.length) % items.length;
      const item = items[index];
      if (!this._skipPredicateFn(item)) {
        this.setActiveItem(index);
        return;
      }
    }
  }
  /**
   * Sets the active item properly given the default mode. In other words, it will
   * continue to move down the list until it finds an item that is not disabled. If
   * it encounters either end of the list, it will stop and not wrap.
   */
  _setActiveInDefaultMode(delta) {
    this._setActiveItemByIndex(this._activeItemIndex() + delta, delta);
  }
  /**
   * Sets the active item to the first enabled item starting at the index specified. If the
   * item is disabled, it will move in the fallbackDelta direction until it either
   * finds an enabled item or encounters the end of the list.
   */
  _setActiveItemByIndex(index, fallbackDelta) {
    const items = this._getItemsArray();
    if (!items[index]) {
      return;
    }
    while (this._skipPredicateFn(items[index])) {
      index += fallbackDelta;
      if (!items[index]) {
        return;
      }
    }
    this.setActiveItem(index);
  }
  /** Returns the items as an array. */
  _getItemsArray() {
    if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isSignal)(this._items)) {
      return this._items();
    }
    return this._items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__.QueryList ? this._items.toArray() : this._items;
  }
  /** Callback for when the items have changed. */
  _itemsChanged(newItems) {
    this._typeahead?.setItems(newItems);
    const activeItem = this._activeItem();
    if (activeItem) {
      const newIndex = newItems.indexOf(activeItem);
      if (newIndex > -1 && newIndex !== this._activeItemIndex()) {
        this._activeItemIndex.set(newIndex);
        this._typeahead?.setCurrentSelectedItemIndex(newIndex);
      }
    }
  }
}


/***/ }),

/***/ 22810:
/*!*****************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/coercion/private.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   coerceObservable: () => (/* binding */ coerceObservable)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 72551);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 59452);


/**
 * Given either an Observable or non-Observable value, returns either the original
 * Observable, or wraps it in an Observable that emits the non-Observable value.
 */
function coerceObservable(data) {
  if (!(0,rxjs__WEBPACK_IMPORTED_MODULE_0__.isObservable)(data)) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(data);
  }
  return data;
}


/***/ }),

/***/ 47338:
/*!*****************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/tree-key-manager.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TREE_KEY_MANAGER: () => (/* binding */ TREE_KEY_MANAGER),
/* harmony export */   TREE_KEY_MANAGER_FACTORY: () => (/* binding */ TREE_KEY_MANAGER_FACTORY),
/* harmony export */   TREE_KEY_MANAGER_FACTORY_PROVIDER: () => (/* binding */ TREE_KEY_MANAGER_FACTORY_PROVIDER),
/* harmony export */   TreeKeyManager: () => (/* binding */ TreeKeyManager)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 72551);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 64334);
/* harmony import */ var _typeahead_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./typeahead.mjs */ 729);
/* harmony import */ var _coercion_private_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./coercion/private.mjs */ 22810);






/**
 * This class manages keyboard events for trees. If you pass it a QueryList or other list of tree
 * items, it will set the active item, focus, handle expansion and typeahead correctly when
 * keyboard events occur.
 */
class TreeKeyManager {
  /** The index of the currently active (focused) item. */
  _activeItemIndex = -1;
  /** The currently active (focused) item. */
  _activeItem = null;
  /** Whether or not we activate the item when it's focused. */
  _shouldActivationFollowFocus = false;
  /**
   * The orientation that the tree is laid out in. In `rtl` mode, the behavior of Left and
   * Right arrow are switched.
   */
  _horizontalOrientation = 'ltr';
  /**
   * Predicate function that can be used to check whether an item should be skipped
   * by the key manager.
   *
   * The default value for this doesn't skip any elements in order to keep tree items focusable
   * when disabled. This aligns with ARIA guidelines:
   * https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#focusabilityofdisabledcontrols.
   */
  _skipPredicateFn = _item => false;
  /** Function to determine equivalent items. */
  _trackByFn = item => item;
  /** Synchronous cache of the items to manage. */
  _items = [];
  _typeahead;
  _typeaheadSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription.EMPTY;
  _hasInitialFocused = false;
  _initializeFocus() {
    if (this._hasInitialFocused || this._items.length === 0) {
      return;
    }
    let activeIndex = 0;
    for (let i = 0; i < this._items.length; i++) {
      if (!this._skipPredicateFn(this._items[i]) && !this._isItemDisabled(this._items[i])) {
        activeIndex = i;
        break;
      }
    }
    const activeItem = this._items[activeIndex];
    // Use `makeFocusable` here, because we want the item to just be focusable, not actually
    // capture the focus since the user isn't interacting with it. See #29628.
    if (activeItem.makeFocusable) {
      this._activeItem?.unfocus();
      this._activeItemIndex = activeIndex;
      this._activeItem = activeItem;
      this._typeahead?.setCurrentSelectedItemIndex(activeIndex);
      activeItem.makeFocusable();
    } else {
      // Backwards compatibility for items that don't implement `makeFocusable`.
      this.focusItem(activeIndex);
    }
    this._hasInitialFocused = true;
  }
  /**
   *
   * @param items List of TreeKeyManager options. Can be synchronous or asynchronous.
   * @param config Optional configuration options. By default, use 'ltr' horizontal orientation. By
   * default, do not skip any nodes. By default, key manager only calls `focus` method when items
   * are focused and does not call `activate`. If `typeaheadDefaultInterval` is `true`, use a
   * default interval of 200ms.
   */
  constructor(items, config) {
    // We allow for the items to be an array or Observable because, in some cases, the consumer may
    // not have access to a QueryList of the items they want to manage (e.g. when the
    // items aren't being collected via `ViewChildren` or `ContentChildren`).
    if (items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__.QueryList) {
      this._items = items.toArray();
      items.changes.subscribe(newItems => {
        this._items = newItems.toArray();
        this._typeahead?.setItems(this._items);
        this._updateActiveItemIndex(this._items);
        this._initializeFocus();
      });
    } else if ((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.isObservable)(items)) {
      items.subscribe(newItems => {
        this._items = newItems;
        this._typeahead?.setItems(newItems);
        this._updateActiveItemIndex(newItems);
        this._initializeFocus();
      });
    } else {
      this._items = items;
      this._initializeFocus();
    }
    if (typeof config.shouldActivationFollowFocus === 'boolean') {
      this._shouldActivationFollowFocus = config.shouldActivationFollowFocus;
    }
    if (config.horizontalOrientation) {
      this._horizontalOrientation = config.horizontalOrientation;
    }
    if (config.skipPredicate) {
      this._skipPredicateFn = config.skipPredicate;
    }
    if (config.trackBy) {
      this._trackByFn = config.trackBy;
    }
    if (typeof config.typeAheadDebounceInterval !== 'undefined') {
      this._setTypeAhead(config.typeAheadDebounceInterval);
    }
  }
  /** Stream that emits any time the focused item changes. */
  change = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  /** Cleans up the key manager. */
  destroy() {
    this._typeaheadSubscription.unsubscribe();
    this._typeahead?.destroy();
    this.change.complete();
  }
  /**
   * Handles a keyboard event on the tree.
   * @param event Keyboard event that represents the user interaction with the tree.
   */
  onKeydown(event) {
    const key = event.key;
    switch (key) {
      case 'Tab':
        // Return early here, in order to allow Tab to actually tab out of the tree
        return;
      case 'ArrowDown':
        this._focusNextItem();
        break;
      case 'ArrowUp':
        this._focusPreviousItem();
        break;
      case 'ArrowRight':
        this._horizontalOrientation === 'rtl' ? this._collapseCurrentItem() : this._expandCurrentItem();
        break;
      case 'ArrowLeft':
        this._horizontalOrientation === 'rtl' ? this._expandCurrentItem() : this._collapseCurrentItem();
        break;
      case 'Home':
        this._focusFirstItem();
        break;
      case 'End':
        this._focusLastItem();
        break;
      case 'Enter':
      case ' ':
        this._activateCurrentItem();
        break;
      default:
        if (event.key === '*') {
          this._expandAllItemsAtCurrentItemLevel();
          break;
        }
        this._typeahead?.handleKey(event);
        // Return here, in order to avoid preventing the default action of non-navigational
        // keys or resetting the buffer of pressed letters.
        return;
    }
    // Reset the typeahead since the user has used a navigational key.
    this._typeahead?.reset();
    event.preventDefault();
  }
  /** Index of the currently active item. */
  getActiveItemIndex() {
    return this._activeItemIndex;
  }
  /** The currently active item. */
  getActiveItem() {
    return this._activeItem;
  }
  /** Focus the first available item. */
  _focusFirstItem() {
    this.focusItem(this._findNextAvailableItemIndex(-1));
  }
  /** Focus the last available item. */
  _focusLastItem() {
    this.focusItem(this._findPreviousAvailableItemIndex(this._items.length));
  }
  /** Focus the next available item. */
  _focusNextItem() {
    this.focusItem(this._findNextAvailableItemIndex(this._activeItemIndex));
  }
  /** Focus the previous available item. */
  _focusPreviousItem() {
    this.focusItem(this._findPreviousAvailableItemIndex(this._activeItemIndex));
  }
  focusItem(itemOrIndex, options = {}) {
    // Set default options
    options.emitChangeEvent ??= true;
    let index = typeof itemOrIndex === 'number' ? itemOrIndex : this._items.findIndex(item => this._trackByFn(item) === this._trackByFn(itemOrIndex));
    if (index < 0 || index >= this._items.length) {
      return;
    }
    const activeItem = this._items[index];
    // If we're just setting the same item, don't re-call activate or focus
    if (this._activeItem !== null && this._trackByFn(activeItem) === this._trackByFn(this._activeItem)) {
      return;
    }
    const previousActiveItem = this._activeItem;
    this._activeItem = activeItem ?? null;
    this._activeItemIndex = index;
    this._typeahead?.setCurrentSelectedItemIndex(index);
    this._activeItem?.focus();
    previousActiveItem?.unfocus();
    if (options.emitChangeEvent) {
      this.change.next(this._activeItem);
    }
    if (this._shouldActivationFollowFocus) {
      this._activateCurrentItem();
    }
  }
  _updateActiveItemIndex(newItems) {
    const activeItem = this._activeItem;
    if (!activeItem) {
      return;
    }
    const newIndex = newItems.findIndex(item => this._trackByFn(item) === this._trackByFn(activeItem));
    if (newIndex > -1 && newIndex !== this._activeItemIndex) {
      this._activeItemIndex = newIndex;
      this._typeahead?.setCurrentSelectedItemIndex(newIndex);
    }
  }
  _setTypeAhead(debounceInterval) {
    this._typeahead = new _typeahead_mjs__WEBPACK_IMPORTED_MODULE_7__.Typeahead(this._items, {
      debounceInterval: typeof debounceInterval === 'number' ? debounceInterval : undefined,
      skipPredicate: item => this._skipPredicateFn(item)
    });
    this._typeaheadSubscription = this._typeahead.selectedItem.subscribe(item => {
      this.focusItem(item);
    });
  }
  _findNextAvailableItemIndex(startingIndex) {
    for (let i = startingIndex + 1; i < this._items.length; i++) {
      if (!this._skipPredicateFn(this._items[i])) {
        return i;
      }
    }
    return startingIndex;
  }
  _findPreviousAvailableItemIndex(startingIndex) {
    for (let i = startingIndex - 1; i >= 0; i--) {
      if (!this._skipPredicateFn(this._items[i])) {
        return i;
      }
    }
    return startingIndex;
  }
  /**
   * If the item is already expanded, we collapse the item. Otherwise, we will focus the parent.
   */
  _collapseCurrentItem() {
    if (!this._activeItem) {
      return;
    }
    if (this._isCurrentItemExpanded()) {
      this._activeItem.collapse();
    } else {
      const parent = this._activeItem.getParent();
      if (!parent || this._skipPredicateFn(parent)) {
        return;
      }
      this.focusItem(parent);
    }
  }
  /**
   * If the item is already collapsed, we expand the item. Otherwise, we will focus the first child.
   */
  _expandCurrentItem() {
    if (!this._activeItem) {
      return;
    }
    if (!this._isCurrentItemExpanded()) {
      this._activeItem.expand();
    } else {
      (0,_coercion_private_mjs__WEBPACK_IMPORTED_MODULE_8__.coerceObservable)(this._activeItem.getChildren()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(children => {
        const firstChild = children.find(child => !this._skipPredicateFn(child));
        if (!firstChild) {
          return;
        }
        this.focusItem(firstChild);
      });
    }
  }
  _isCurrentItemExpanded() {
    if (!this._activeItem) {
      return false;
    }
    return typeof this._activeItem.isExpanded === 'boolean' ? this._activeItem.isExpanded : this._activeItem.isExpanded();
  }
  _isItemDisabled(item) {
    return typeof item.isDisabled === 'boolean' ? item.isDisabled : item.isDisabled?.();
  }
  /** For all items that are the same level as the current item, we expand those items. */
  _expandAllItemsAtCurrentItemLevel() {
    if (!this._activeItem) {
      return;
    }
    const parent = this._activeItem.getParent();
    let itemsToExpand;
    if (!parent) {
      itemsToExpand = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(this._items.filter(item => item.getParent() === null));
    } else {
      itemsToExpand = (0,_coercion_private_mjs__WEBPACK_IMPORTED_MODULE_8__.coerceObservable)(parent.getChildren());
    }
    itemsToExpand.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(items => {
      for (const item of items) {
        item.expand();
      }
    });
  }
  _activateCurrentItem() {
    this._activeItem?.activate();
  }
}
/**
 * @docs-private
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 */
function TREE_KEY_MANAGER_FACTORY() {
  return (items, options) => new TreeKeyManager(items, options);
}
/** Injection token that determines the key manager to use. */
const TREE_KEY_MANAGER = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('tree-key-manager', {
  providedIn: 'root',
  factory: TREE_KEY_MANAGER_FACTORY
});
/**
 * @docs-private
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 */
const TREE_KEY_MANAGER_FACTORY_PROVIDER = {
  provide: TREE_KEY_MANAGER,
  useFactory: TREE_KEY_MANAGER_FACTORY
};


/***/ }),

/***/ 51289:
/*!*****************************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/activedescendant-key-manager.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActiveDescendantKeyManager: () => (/* binding */ ActiveDescendantKeyManager)
/* harmony export */ });
/* harmony import */ var _list_key_manager_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-key-manager.mjs */ 17314);

class ActiveDescendantKeyManager extends _list_key_manager_mjs__WEBPACK_IMPORTED_MODULE_0__.ListKeyManager {
  setActiveItem(index) {
    if (this.activeItem) {
      this.activeItem.setInactiveStyles();
    }
    super.setActiveItem(index);
    if (this.activeItem) {
      this.activeItem.setActiveStyles();
    }
  }
}


/***/ }),

/***/ 51935:
/*!***************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/animation.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationCurves: () => (/* binding */ AnimationCurves),
/* harmony export */   AnimationDurations: () => (/* binding */ AnimationDurations),
/* harmony export */   MATERIAL_ANIMATIONS: () => (/* binding */ MATERIAL_ANIMATIONS),
/* harmony export */   _animationsDisabled: () => (/* binding */ _animationsDisabled),
/* harmony export */   _getAnimationsState: () => (/* binding */ _getAnimationsState)
/* harmony export */ });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ 27797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 12481);



/** Injection token used to configure the animations in Angular Material. */
const MATERIAL_ANIMATIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('MATERIAL_ANIMATIONS');
/**
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 * @docs-private
 */
let AnimationCurves = /*#__PURE__*/(() => {
  class AnimationCurves {
    static STANDARD_CURVE = 'cubic-bezier(0.4,0.0,0.2,1)';
    static DECELERATION_CURVE = 'cubic-bezier(0.0,0.0,0.2,1)';
    static ACCELERATION_CURVE = 'cubic-bezier(0.4,0.0,1,1)';
    static SHARP_CURVE = 'cubic-bezier(0.4,0.0,0.6,1)';
  }
  return AnimationCurves;
})();
/**
 * @deprecated No longer used, will be removed.
 * @breaking-change 21.0.0
 * @docs-private
 */
let AnimationDurations = /*#__PURE__*/(() => {
  class AnimationDurations {
    static COMPLEX = '375ms';
    static ENTERING = '225ms';
    static EXITING = '195ms';
  }
  return AnimationDurations;
})();
let reducedMotion = null;
/**
 * Gets the the configured animations state.
 * @docs-private
 */
function _getAnimationsState() {
  if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(MATERIAL_ANIMATIONS, {
    optional: true
  })?.animationsDisabled || (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ANIMATION_MODULE_TYPE, {
    optional: true
  }) === 'NoopAnimations') {
    return 'di-disabled';
  }
  reducedMotion ??= (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__.MediaMatcher).matchMedia('(prefers-reduced-motion)').matches;
  return reducedMotion ? 'reduced-motion' : 'enabled';
}
/**
 * Returns whether animations have been disabled by DI. Must be called in a DI context.
 * @docs-private
 */
function _animationsDisabled() {
  return _getAnimationsState() !== 'enabled';
}


/***/ }),

/***/ 54149:
/*!*************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/id-generator.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _IdGenerator: () => (/* binding */ _IdGenerator)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 12481);



/**
 * Keeps track of the ID count per prefix. This helps us make the IDs a bit more deterministic
 * like they were before the service was introduced. Note that ideally we wouldn't have to do
 * this, but there are some internal tests that rely on the IDs.
 */
const counters = {};
/** Service that generates unique IDs for DOM nodes. */
let _IdGenerator = /*#__PURE__*/(() => {
  class _IdGenerator {
    _appId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_ID);
    /**
     * Generates a unique ID with a specific prefix.
     * @param prefix Prefix to add to the ID.
     */
    getId(prefix) {
      // Omit the app ID if it's the default `ng`. Since the vast majority of pages have one
      // Angular app on them, we can reduce the amount of breakages by not adding it.
      if (this._appId !== 'ng') {
        prefix += this._appId;
      }
      if (!counters.hasOwnProperty(prefix)) {
        counters[prefix] = 0;
      }
      return `${prefix}${counters[prefix]++}`;
    }
    static ɵfac = function _IdGenerator_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IdGenerator)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: _IdGenerator,
      factory: _IdGenerator.ɵfac,
      providedIn: 'root'
    });
  }
  return _IdGenerator;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ }),

/***/ 56423:
/*!**************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/focus-monitor.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdkMonitorFocus: () => (/* binding */ CdkMonitorFocus),
/* harmony export */   FOCUS_MONITOR_DEFAULT_OPTIONS: () => (/* binding */ FOCUS_MONITOR_DEFAULT_OPTIONS),
/* harmony export */   FocusMonitor: () => (/* binding */ FocusMonitor),
/* harmony export */   FocusMonitorDetectionMode: () => (/* binding */ FocusMonitorDetectionMode),
/* harmony export */   INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS: () => (/* binding */ INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS),
/* harmony export */   INPUT_MODALITY_DETECTOR_OPTIONS: () => (/* binding */ INPUT_MODALITY_DETECTOR_OPTIONS),
/* harmony export */   InputModalityDetector: () => (/* binding */ InputModalityDetector)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 91817);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 47470);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 33900);
/* harmony import */ var _fake_event_detection_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fake-event-detection.mjs */ 61780);
/* harmony import */ var _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./keycodes2.mjs */ 78159);
/* harmony import */ var _shadow_dom_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shadow-dom.mjs */ 70297);
/* harmony import */ var _platform2_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./platform2.mjs */ 37579);
/* harmony import */ var _passive_listeners_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./passive-listeners.mjs */ 93585);
/* harmony import */ var _element_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./element.mjs */ 26338);











/**
 * Injectable options for the InputModalityDetector. These are shallowly merged with the default
 * options.
 */
const INPUT_MODALITY_DETECTOR_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('cdk-input-modality-detector-options');
/**
 * Default options for the InputModalityDetector.
 *
 * Modifier keys are ignored by default (i.e. when pressed won't cause the service to detect
 * keyboard input modality) for two reasons:
 *
 * 1. Modifier keys are commonly used with mouse to perform actions such as 'right click' or 'open
 *    in new tab', and are thus less representative of actual keyboard interaction.
 * 2. VoiceOver triggers some keyboard events when linearly navigating with Control + Option (but
 *    confusingly not with Caps Lock). Thus, to have parity with other screen readers, we ignore
 *    these keys so as to not update the input modality.
 *
 * Note that we do not by default ignore the right Meta key on Safari because it has the same key
 * code as the ContextMenu key on other browsers. When we switch to using event.key, we can
 * distinguish between the two.
 */
const INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS = {
  ignoreKeys: [_keycodes2_mjs__WEBPACK_IMPORTED_MODULE_9__.ALT, _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_9__.CONTROL, _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_9__.MAC_META, _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_9__.META, _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_9__.SHIFT]
};
/**
 * The amount of time needed to pass after a touchstart event in order for a subsequent mousedown
 * event to be attributed as mouse and not touch.
 *
 * This is the value used by AngularJS Material. Through trial and error (on iPhone 6S) they found
 * that a value of around 650ms seems appropriate.
 */
const TOUCH_BUFFER_MS = 650;
/**
 * Event listener options that enable capturing and also mark the listener as passive if the browser
 * supports it.
 */
const modalityEventListenerOptions = {
  passive: true,
  capture: true
};
/**
 * Service that detects the user's input modality.
 *
 * This service does not update the input modality when a user navigates with a screen reader
 * (e.g. linear navigation with VoiceOver, object navigation / browse mode with NVDA, virtual PC
 * cursor mode with JAWS). This is in part due to technical limitations (i.e. keyboard events do not
 * fire as expected in these modes) but is also arguably the correct behavior. Navigating with a
 * screen reader is akin to visually scanning a page, and should not be interpreted as actual user
 * input interaction.
 *
 * When a user is not navigating but *interacting* with a screen reader, this service attempts to
 * update the input modality to keyboard, but in general this service's behavior is largely
 * undefined.
 */
let InputModalityDetector = /*#__PURE__*/(() => {
  class InputModalityDetector {
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_platform2_mjs__WEBPACK_IMPORTED_MODULE_11__.Platform);
    _listenerCleanups;
    /** Emits whenever an input modality is detected. */
    modalityDetected;
    /** Emits when the input modality changes. */
    modalityChanged;
    /** The most recently detected input modality. */
    get mostRecentModality() {
      return this._modality.value;
    }
    /**
     * The most recently detected input modality event target. Is null if no input modality has been
     * detected or if the associated event target is null for some unknown reason.
     */
    _mostRecentTarget = null;
    /** The underlying BehaviorSubject that emits whenever an input modality is detected. */
    _modality = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    /** Options for this InputModalityDetector. */
    _options;
    /**
     * The timestamp of the last touch input modality. Used to determine whether mousedown events
     * should be attributed to mouse or touch.
     */
    _lastTouchMs = 0;
    /**
     * Handles keydown events. Must be an arrow function in order to preserve the context when it gets
     * bound.
     */
    _onKeydown = event => {
      // If this is one of the keys we should ignore, then ignore it and don't update the input
      // modality to keyboard.
      if (this._options?.ignoreKeys?.some(keyCode => keyCode === event.keyCode)) {
        return;
      }
      this._modality.next('keyboard');
      this._mostRecentTarget = (0,_shadow_dom_mjs__WEBPACK_IMPORTED_MODULE_10__._getEventTarget)(event);
    };
    /**
     * Handles mousedown events. Must be an arrow function in order to preserve the context when it
     * gets bound.
     */
    _onMousedown = event => {
      // Touches trigger both touch and mouse events, so we need to distinguish between mouse events
      // that were triggered via mouse vs touch. To do so, check if the mouse event occurs closely
      // after the previous touch event.
      if (Date.now() - this._lastTouchMs < TOUCH_BUFFER_MS) {
        return;
      }
      // Fake mousedown events are fired by some screen readers when controls are activated by the
      // screen reader. Attribute them to keyboard input modality.
      this._modality.next((0,_fake_event_detection_mjs__WEBPACK_IMPORTED_MODULE_8__.isFakeMousedownFromScreenReader)(event) ? 'keyboard' : 'mouse');
      this._mostRecentTarget = (0,_shadow_dom_mjs__WEBPACK_IMPORTED_MODULE_10__._getEventTarget)(event);
    };
    /**
     * Handles touchstart events. Must be an arrow function in order to preserve the context when it
     * gets bound.
     */
    _onTouchstart = event => {
      // Same scenario as mentioned in _onMousedown, but on touch screen devices, fake touchstart
      // events are fired. Again, attribute to keyboard input modality.
      if ((0,_fake_event_detection_mjs__WEBPACK_IMPORTED_MODULE_8__.isFakeTouchstartFromScreenReader)(event)) {
        this._modality.next('keyboard');
        return;
      }
      // Store the timestamp of this touch event, as it's used to distinguish between mouse events
      // triggered via mouse vs touch.
      this._lastTouchMs = Date.now();
      this._modality.next('touch');
      this._mostRecentTarget = (0,_shadow_dom_mjs__WEBPACK_IMPORTED_MODULE_10__._getEventTarget)(event);
    };
    constructor() {
      const ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone);
      const document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT);
      const options = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(INPUT_MODALITY_DETECTOR_OPTIONS, {
        optional: true
      });
      this._options = {
        ...INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS,
        ...options
      };
      // Skip the first emission as it's null.
      this.modalityDetected = this._modality.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.skip)(1));
      this.modalityChanged = this.modalityDetected.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.distinctUntilChanged)());
      // If we're not in a browser, this service should do nothing, as there's no relevant input
      // modality to detect.
      if (this._platform.isBrowser) {
        const renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.RendererFactory2).createRenderer(null, null);
        this._listenerCleanups = ngZone.runOutsideAngular(() => {
          return [renderer.listen(document, 'keydown', this._onKeydown, modalityEventListenerOptions), renderer.listen(document, 'mousedown', this._onMousedown, modalityEventListenerOptions), renderer.listen(document, 'touchstart', this._onTouchstart, modalityEventListenerOptions)];
        });
      }
    }
    ngOnDestroy() {
      this._modality.complete();
      this._listenerCleanups?.forEach(cleanup => cleanup());
    }
    static ɵfac = function InputModalityDetector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InputModalityDetector)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: InputModalityDetector,
      factory: InputModalityDetector.ɵfac,
      providedIn: 'root'
    });
  }
  return InputModalityDetector;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Detection mode used for attributing the origin of a focus event. */
var FocusMonitorDetectionMode = /*#__PURE__*/function (FocusMonitorDetectionMode) {
  /**
   * Any mousedown, keydown, or touchstart event that happened in the previous
   * tick or the current tick will be used to assign a focus event's origin (to
   * either mouse, keyboard, or touch). This is the default option.
   */
  FocusMonitorDetectionMode[FocusMonitorDetectionMode["IMMEDIATE"] = 0] = "IMMEDIATE";
  /**
   * A focus event's origin is always attributed to the last corresponding
   * mousedown, keydown, or touchstart event, no matter how long ago it occurred.
   */
  FocusMonitorDetectionMode[FocusMonitorDetectionMode["EVENTUAL"] = 1] = "EVENTUAL";
  return FocusMonitorDetectionMode;
}(FocusMonitorDetectionMode || {});
/** InjectionToken for FocusMonitorOptions. */
const FOCUS_MONITOR_DEFAULT_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('cdk-focus-monitor-default-options');
/**
 * Event listener options that enable capturing and also
 * mark the listener as passive if the browser supports it.
 */
const captureEventListenerOptions = /*#__PURE__*/(0,_passive_listeners_mjs__WEBPACK_IMPORTED_MODULE_12__.normalizePassiveListenerOptions)({
  passive: true,
  capture: true
});
/** Monitors mouse and keyboard events to determine the cause of focus events. */
let FocusMonitor = /*#__PURE__*/(() => {
  class FocusMonitor {
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone);
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_platform2_mjs__WEBPACK_IMPORTED_MODULE_11__.Platform);
    _inputModalityDetector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(InputModalityDetector);
    /** The focus origin that the next focus event is a result of. */
    _origin = null;
    /** The FocusOrigin of the last focus event tracked by the FocusMonitor. */
    _lastFocusOrigin;
    /** Whether the window has just been focused. */
    _windowFocused = false;
    /** The timeout id of the window focus timeout. */
    _windowFocusTimeoutId;
    /** The timeout id of the origin clearing timeout. */
    _originTimeoutId;
    /**
     * Whether the origin was determined via a touch interaction. Necessary as properly attributing
     * focus events to touch interactions requires special logic.
     */
    _originFromTouchInteraction = false;
    /** Map of elements being monitored to their info. */
    _elementInfo = new Map();
    /** The number of elements currently being monitored. */
    _monitoredElementCount = 0;
    /**
     * Keeps track of the root nodes to which we've currently bound a focus/blur handler,
     * as well as the number of monitored elements that they contain. We have to treat focus/blur
     * handlers differently from the rest of the events, because the browser won't emit events
     * to the document when focus moves inside of a shadow root.
     */
    _rootNodeFocusListenerCount = new Map();
    /**
     * The specified detection mode, used for attributing the origin of a focus
     * event.
     */
    _detectionMode;
    /**
     * Event listener for `focus` events on the window.
     * Needs to be an arrow function in order to preserve the context when it gets bound.
     */
    _windowFocusListener = () => {
      // Make a note of when the window regains focus, so we can
      // restore the origin info for the focused element.
      this._windowFocused = true;
      this._windowFocusTimeoutId = setTimeout(() => this._windowFocused = false);
    };
    /** Used to reference correct document/window */
    _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT);
    /** Subject for stopping our InputModalityDetector subscription. */
    _stopInputModalityDetector = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    constructor() {
      const options = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(FOCUS_MONITOR_DEFAULT_OPTIONS, {
        optional: true
      });
      this._detectionMode = options?.detectionMode || FocusMonitorDetectionMode.IMMEDIATE;
    }
    /**
     * Event listener for `focus` and 'blur' events on the document.
     * Needs to be an arrow function in order to preserve the context when it gets bound.
     */
    _rootNodeFocusAndBlurListener = event => {
      const target = (0,_shadow_dom_mjs__WEBPACK_IMPORTED_MODULE_10__._getEventTarget)(event);
      // We need to walk up the ancestor chain in order to support `checkChildren`.
      for (let element = target; element; element = element.parentElement) {
        if (event.type === 'focus') {
          this._onFocus(event, element);
        } else {
          this._onBlur(event, element);
        }
      }
    };
    monitor(element, checkChildren = false) {
      const nativeElement = (0,_element_mjs__WEBPACK_IMPORTED_MODULE_13__.coerceElement)(element);
      // Do nothing if we're not on the browser platform or the passed in node isn't an element.
      if (!this._platform.isBrowser || nativeElement.nodeType !== 1) {
        // Note: we don't want the observable to emit at all so we don't pass any parameters.
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)();
      }
      // If the element is inside the shadow DOM, we need to bind our focus/blur listeners to
      // the shadow root, rather than the `document`, because the browser won't emit focus events
      // to the `document`, if focus is moving within the same shadow root.
      const rootNode = (0,_shadow_dom_mjs__WEBPACK_IMPORTED_MODULE_10__._getShadowRoot)(nativeElement) || this._document;
      const cachedInfo = this._elementInfo.get(nativeElement);
      // Check if we're already monitoring this element.
      if (cachedInfo) {
        if (checkChildren) {
          // TODO(COMP-318): this can be problematic, because it'll turn all non-checkChildren
          // observers into ones that behave as if `checkChildren` was turned on. We need a more
          // robust solution.
          cachedInfo.checkChildren = true;
        }
        return cachedInfo.subject;
      }
      // Create monitored element info.
      const info = {
        checkChildren: checkChildren,
        subject: new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject(),
        rootNode
      };
      this._elementInfo.set(nativeElement, info);
      this._registerGlobalListeners(info);
      return info.subject;
    }
    stopMonitoring(element) {
      const nativeElement = (0,_element_mjs__WEBPACK_IMPORTED_MODULE_13__.coerceElement)(element);
      const elementInfo = this._elementInfo.get(nativeElement);
      if (elementInfo) {
        elementInfo.subject.complete();
        this._setClasses(nativeElement);
        this._elementInfo.delete(nativeElement);
        this._removeGlobalListeners(elementInfo);
      }
    }
    focusVia(element, origin, options) {
      const nativeElement = (0,_element_mjs__WEBPACK_IMPORTED_MODULE_13__.coerceElement)(element);
      const focusedElement = this._document.activeElement;
      // If the element is focused already, calling `focus` again won't trigger the event listener
      // which means that the focus classes won't be updated. If that's the case, update the classes
      // directly without waiting for an event.
      if (nativeElement === focusedElement) {
        this._getClosestElementsInfo(nativeElement).forEach(([currentElement, info]) => this._originChanged(currentElement, origin, info));
      } else {
        this._setOrigin(origin);
        // `focus` isn't available on the server
        if (typeof nativeElement.focus === 'function') {
          nativeElement.focus(options);
        }
      }
    }
    ngOnDestroy() {
      this._elementInfo.forEach((_info, element) => this.stopMonitoring(element));
    }
    /** Use defaultView of injected document if available or fallback to global window reference */
    _getWindow() {
      return this._document.defaultView || window;
    }
    _getFocusOrigin(focusEventTarget) {
      if (this._origin) {
        // If the origin was realized via a touch interaction, we need to perform additional checks
        // to determine whether the focus origin should be attributed to touch or program.
        if (this._originFromTouchInteraction) {
          return this._shouldBeAttributedToTouch(focusEventTarget) ? 'touch' : 'program';
        } else {
          return this._origin;
        }
      }
      // If the window has just regained focus, we can restore the most recent origin from before the
      // window blurred. Otherwise, we've reached the point where we can't identify the source of the
      // focus. This typically means one of two things happened:
      //
      // 1) The element was programmatically focused, or
      // 2) The element was focused via screen reader navigation (which generally doesn't fire
      //    events).
      //
      // Because we can't distinguish between these two cases, we default to setting `program`.
      if (this._windowFocused && this._lastFocusOrigin) {
        return this._lastFocusOrigin;
      }
      // If the interaction is coming from an input label, we consider it a mouse interactions.
      // This is a special case where focus moves on `click`, rather than `mousedown` which breaks
      // our detection, because all our assumptions are for `mousedown`. We need to handle this
      // special case, because it's very common for checkboxes and radio buttons.
      if (focusEventTarget && this._isLastInteractionFromInputLabel(focusEventTarget)) {
        return 'mouse';
      }
      return 'program';
    }
    /**
     * Returns whether the focus event should be attributed to touch. Recall that in IMMEDIATE mode, a
     * touch origin isn't immediately reset at the next tick (see _setOrigin). This means that when we
     * handle a focus event following a touch interaction, we need to determine whether (1) the focus
     * event was directly caused by the touch interaction or (2) the focus event was caused by a
     * subsequent programmatic focus call triggered by the touch interaction.
     * @param focusEventTarget The target of the focus event under examination.
     */
    _shouldBeAttributedToTouch(focusEventTarget) {
      // Please note that this check is not perfect. Consider the following edge case:
      //
      // <div #parent tabindex="0">
      //   <div #child tabindex="0" (click)="#parent.focus()"></div>
      // </div>
      //
      // Suppose there is a FocusMonitor in IMMEDIATE mode attached to #parent. When the user touches
      // #child, #parent is programmatically focused. This code will attribute the focus to touch
      // instead of program. This is a relatively minor edge-case that can be worked around by using
      // focusVia(parent, 'program') to focus #parent.
      return this._detectionMode === FocusMonitorDetectionMode.EVENTUAL || !!focusEventTarget?.contains(this._inputModalityDetector._mostRecentTarget);
    }
    /**
     * Sets the focus classes on the element based on the given focus origin.
     * @param element The element to update the classes on.
     * @param origin The focus origin.
     */
    _setClasses(element, origin) {
      element.classList.toggle('cdk-focused', !!origin);
      element.classList.toggle('cdk-touch-focused', origin === 'touch');
      element.classList.toggle('cdk-keyboard-focused', origin === 'keyboard');
      element.classList.toggle('cdk-mouse-focused', origin === 'mouse');
      element.classList.toggle('cdk-program-focused', origin === 'program');
    }
    /**
     * Updates the focus origin. If we're using immediate detection mode, we schedule an async
     * function to clear the origin at the end of a timeout. The duration of the timeout depends on
     * the origin being set.
     * @param origin The origin to set.
     * @param isFromInteraction Whether we are setting the origin from an interaction event.
     */
    _setOrigin(origin, isFromInteraction = false) {
      this._ngZone.runOutsideAngular(() => {
        this._origin = origin;
        this._originFromTouchInteraction = origin === 'touch' && isFromInteraction;
        // If we're in IMMEDIATE mode, reset the origin at the next tick (or in `TOUCH_BUFFER_MS` ms
        // for a touch event). We reset the origin at the next tick because Firefox focuses one tick
        // after the interaction event. We wait `TOUCH_BUFFER_MS` ms before resetting the origin for
        // a touch event because when a touch event is fired, the associated focus event isn't yet in
        // the event queue. Before doing so, clear any pending timeouts.
        if (this._detectionMode === FocusMonitorDetectionMode.IMMEDIATE) {
          clearTimeout(this._originTimeoutId);
          const ms = this._originFromTouchInteraction ? TOUCH_BUFFER_MS : 1;
          this._originTimeoutId = setTimeout(() => this._origin = null, ms);
        }
      });
    }
    /**
     * Handles focus events on a registered element.
     * @param event The focus event.
     * @param element The monitored element.
     */
    _onFocus(event, element) {
      // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
      // focus event affecting the monitored element. If we want to use the origin of the first event
      // instead we should check for the cdk-focused class here and return if the element already has
      // it. (This only matters for elements that have includesChildren = true).
      // If we are not counting child-element-focus as focused, make sure that the event target is the
      // monitored element itself.
      const elementInfo = this._elementInfo.get(element);
      const focusEventTarget = (0,_shadow_dom_mjs__WEBPACK_IMPORTED_MODULE_10__._getEventTarget)(event);
      if (!elementInfo || !elementInfo.checkChildren && element !== focusEventTarget) {
        return;
      }
      this._originChanged(element, this._getFocusOrigin(focusEventTarget), elementInfo);
    }
    /**
     * Handles blur events on a registered element.
     * @param event The blur event.
     * @param element The monitored element.
     */
    _onBlur(event, element) {
      // If we are counting child-element-focus as focused, make sure that we aren't just blurring in
      // order to focus another child of the monitored element.
      const elementInfo = this._elementInfo.get(element);
      if (!elementInfo || elementInfo.checkChildren && event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) {
        return;
      }
      this._setClasses(element);
      this._emitOrigin(elementInfo, null);
    }
    _emitOrigin(info, origin) {
      if (info.subject.observers.length) {
        this._ngZone.run(() => info.subject.next(origin));
      }
    }
    _registerGlobalListeners(elementInfo) {
      if (!this._platform.isBrowser) {
        return;
      }
      const rootNode = elementInfo.rootNode;
      const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode) || 0;
      if (!rootNodeFocusListeners) {
        this._ngZone.runOutsideAngular(() => {
          rootNode.addEventListener('focus', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
          rootNode.addEventListener('blur', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        });
      }
      this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners + 1);
      // Register global listeners when first element is monitored.
      if (++this._monitoredElementCount === 1) {
        // Note: we listen to events in the capture phase so we
        // can detect them even if the user stops propagation.
        this._ngZone.runOutsideAngular(() => {
          const window = this._getWindow();
          window.addEventListener('focus', this._windowFocusListener);
        });
        // The InputModalityDetector is also just a collection of global listeners.
        this._inputModalityDetector.modalityDetected.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._stopInputModalityDetector)).subscribe(modality => {
          this._setOrigin(modality, true /* isFromInteraction */);
        });
      }
    }
    _removeGlobalListeners(elementInfo) {
      const rootNode = elementInfo.rootNode;
      if (this._rootNodeFocusListenerCount.has(rootNode)) {
        const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode);
        if (rootNodeFocusListeners > 1) {
          this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners - 1);
        } else {
          rootNode.removeEventListener('focus', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
          rootNode.removeEventListener('blur', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
          this._rootNodeFocusListenerCount.delete(rootNode);
        }
      }
      // Unregister global listeners when last element is unmonitored.
      if (! --this._monitoredElementCount) {
        const window = this._getWindow();
        window.removeEventListener('focus', this._windowFocusListener);
        // Equivalently, stop our InputModalityDetector subscription.
        this._stopInputModalityDetector.next();
        // Clear timeouts for all potentially pending timeouts to prevent the leaks.
        clearTimeout(this._windowFocusTimeoutId);
        clearTimeout(this._originTimeoutId);
      }
    }
    /** Updates all the state on an element once its focus origin has changed. */
    _originChanged(element, origin, elementInfo) {
      this._setClasses(element, origin);
      this._emitOrigin(elementInfo, origin);
      this._lastFocusOrigin = origin;
    }
    /**
     * Collects the `MonitoredElementInfo` of a particular element and
     * all of its ancestors that have enabled `checkChildren`.
     * @param element Element from which to start the search.
     */
    _getClosestElementsInfo(element) {
      const results = [];
      this._elementInfo.forEach((info, currentElement) => {
        if (currentElement === element || info.checkChildren && currentElement.contains(element)) {
          results.push([currentElement, info]);
        }
      });
      return results;
    }
    /**
     * Returns whether an interaction is likely to have come from the user clicking the `label` of
     * an `input` or `textarea` in order to focus it.
     * @param focusEventTarget Target currently receiving focus.
     */
    _isLastInteractionFromInputLabel(focusEventTarget) {
      const {
        _mostRecentTarget: mostRecentTarget,
        mostRecentModality
      } = this._inputModalityDetector;
      // If the last interaction used the mouse on an element contained by one of the labels
      // of an `input`/`textarea` that is currently focused, it is very likely that the
      // user redirected focus using the label.
      if (mostRecentModality !== 'mouse' || !mostRecentTarget || mostRecentTarget === focusEventTarget || focusEventTarget.nodeName !== 'INPUT' && focusEventTarget.nodeName !== 'TEXTAREA' || focusEventTarget.disabled) {
        return false;
      }
      const labels = focusEventTarget.labels;
      if (labels) {
        for (let i = 0; i < labels.length; i++) {
          if (labels[i].contains(mostRecentTarget)) {
            return true;
          }
        }
      }
      return false;
    }
    static ɵfac = function FocusMonitor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FocusMonitor)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FocusMonitor,
      factory: FocusMonitor.ɵfac,
      providedIn: 'root'
    });
  }
  return FocusMonitor;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Directive that determines how a particular element was focused (via keyboard, mouse, touch, or
 * programmatically) and adds corresponding classes to the element.
 *
 * There are two variants of this directive:
 * 1) cdkMonitorElementFocus: does not consider an element to be focused if one of its children is
 *    focused.
 * 2) cdkMonitorSubtreeFocus: considers an element focused if it or any of its children are focused.
 */
let CdkMonitorFocus = /*#__PURE__*/(() => {
  class CdkMonitorFocus {
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
    _focusMonitor = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(FocusMonitor);
    _monitorSubscription;
    _focusOrigin = null;
    cdkFocusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    constructor() {}
    get focusOrigin() {
      return this._focusOrigin;
    }
    ngAfterViewInit() {
      const element = this._elementRef.nativeElement;
      this._monitorSubscription = this._focusMonitor.monitor(element, element.nodeType === 1 && element.hasAttribute('cdkMonitorSubtreeFocus')).subscribe(origin => {
        this._focusOrigin = origin;
        this.cdkFocusChange.emit(origin);
      });
    }
    ngOnDestroy() {
      this._focusMonitor.stopMonitoring(this._elementRef);
      if (this._monitorSubscription) {
        this._monitorSubscription.unsubscribe();
      }
    }
    static ɵfac = function CdkMonitorFocus_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkMonitorFocus)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkMonitorFocus,
      selectors: [["", "cdkMonitorElementFocus", ""], ["", "cdkMonitorSubtreeFocus", ""]],
      outputs: {
        cdkFocusChange: "cdkFocusChange"
      },
      exportAs: ["cdkMonitorFocus"]
    });
  }
  return CdkMonitorFocus;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ }),

/***/ 61780:
/*!*********************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/fake-event-detection.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFakeMousedownFromScreenReader: () => (/* binding */ isFakeMousedownFromScreenReader),
/* harmony export */   isFakeTouchstartFromScreenReader: () => (/* binding */ isFakeTouchstartFromScreenReader)
/* harmony export */ });
/** Gets whether an event could be a faked `mousedown` event dispatched by a screen reader. */
function isFakeMousedownFromScreenReader(event) {
  // Some screen readers will dispatch a fake `mousedown` event when pressing enter or space on
  // a clickable element. We can distinguish these events when `event.buttons` is zero, or
  // `event.detail` is zero depending on the browser:
  // - `event.buttons` works on Firefox, but fails on Chrome.
  // - `detail` works on Chrome, but fails on Firefox.
  return event.buttons === 0 || event.detail === 0;
}
/** Gets whether an event could be a faked `touchstart` event dispatched by a screen reader. */
function isFakeTouchstartFromScreenReader(event) {
  const touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0];
  // A fake `touchstart` can be distinguished from a real one by looking at the `identifier`
  // which is typically >= 0 on a real device versus -1 from a screen reader. Just to be safe,
  // we can also look at `radiusX` and `radiusY`. This behavior was observed against a Windows 10
  // device with a touch screen running NVDA v2020.4 and Firefox 85 or Chrome 88.
  return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
}


/***/ }),

/***/ 72102:
/*!*****************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/a11y.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A11yModule: () => (/* reexport safe */ _a11y_module_mjs__WEBPACK_IMPORTED_MODULE_1__.A11yModule),
/* harmony export */   ActiveDescendantKeyManager: () => (/* reexport safe */ _activedescendant_key_manager_mjs__WEBPACK_IMPORTED_MODULE_8__.ActiveDescendantKeyManager),
/* harmony export */   AriaDescriber: () => (/* binding */ AriaDescriber),
/* harmony export */   CDK_DESCRIBEDBY_HOST_ATTRIBUTE: () => (/* binding */ CDK_DESCRIBEDBY_HOST_ATTRIBUTE),
/* harmony export */   CDK_DESCRIBEDBY_ID_PREFIX: () => (/* binding */ CDK_DESCRIBEDBY_ID_PREFIX),
/* harmony export */   CdkAriaLive: () => (/* reexport safe */ _a11y_module_mjs__WEBPACK_IMPORTED_MODULE_1__.CdkAriaLive),
/* harmony export */   CdkMonitorFocus: () => (/* reexport safe */ _focus_monitor_mjs__WEBPACK_IMPORTED_MODULE_0__.CdkMonitorFocus),
/* harmony export */   CdkTrapFocus: () => (/* reexport safe */ _a11y_module_mjs__WEBPACK_IMPORTED_MODULE_1__.CdkTrapFocus),
/* harmony export */   ConfigurableFocusTrap: () => (/* binding */ ConfigurableFocusTrap),
/* harmony export */   ConfigurableFocusTrapFactory: () => (/* binding */ ConfigurableFocusTrapFactory),
/* harmony export */   EventListenerFocusTrapInertStrategy: () => (/* binding */ EventListenerFocusTrapInertStrategy),
/* harmony export */   FOCUS_MONITOR_DEFAULT_OPTIONS: () => (/* reexport safe */ _focus_monitor_mjs__WEBPACK_IMPORTED_MODULE_0__.FOCUS_MONITOR_DEFAULT_OPTIONS),
/* harmony export */   FOCUS_TRAP_INERT_STRATEGY: () => (/* binding */ FOCUS_TRAP_INERT_STRATEGY),
/* harmony export */   FocusKeyManager: () => (/* reexport safe */ _focus_key_manager_mjs__WEBPACK_IMPORTED_MODULE_9__.FocusKeyManager),
/* harmony export */   FocusMonitor: () => (/* reexport safe */ _focus_monitor_mjs__WEBPACK_IMPORTED_MODULE_0__.FocusMonitor),
/* harmony export */   FocusMonitorDetectionMode: () => (/* reexport safe */ _focus_monitor_mjs__WEBPACK_IMPORTED_MODULE_0__.FocusMonitorDetectionMode),
/* harmony export */   FocusTrap: () => (/* reexport safe */ _a11y_module_mjs__WEBPACK_IMPORTED_MODULE_1__.FocusTrap),
/* harmony export */   FocusTrapFactory: () => (/* reexport safe */ _a11y_module_mjs__WEBPACK_IMPORTED_MODULE_1__.FocusTrapFactory),
/* harmony export */   HighContrastMode: () => (/* reexport safe */ _a11y_module_mjs__WEBPACK_IMPORTED_MODULE_1__.HighContrastMode),
/* harmony export */   HighContrastModeDetector: () => (/* reexport safe */ _a11y_module_mjs__WEBPACK_IMPORTED_MODULE_1__.HighContrastModeDetector),
/* harmony export */   INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS: () => (/* reexport safe */ _focus_monitor_mjs__WEBPACK_IMPORTED_MODULE_0__.INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS),
/* harmony export */   INPUT_MODALITY_DETECTOR_OPTIONS: () => (/* reexport safe */ _focus_monitor_mjs__WEBPACK_IMPORTED_MODULE_0__.INPUT_MODALITY_DETECTOR_OPTIONS),
/* harmony export */   InputModalityDetector: () => (/* reexport safe */ _focus_monitor_mjs__WEBPACK_IMPORTED_MODULE_0__.InputModalityDetector),
/* harmony export */   InteractivityChecker: () => (/* reexport safe */ _a11y_module_mjs__WEBPACK_IMPORTED_MODULE_1__.InteractivityChecker),
/* harmony export */   IsFocusableConfig: () => (/* reexport safe */ _a11y_module_mjs__WEBPACK_IMPORTED_MODULE_1__.IsFocusableConfig),
/* harmony export */   LIVE_ANNOUNCER_DEFAULT_OPTIONS: () => (/* reexport safe */ _a11y_module_mjs__WEBPACK_IMPORTED_MODULE_1__.LIVE_ANNOUNCER_DEFAULT_OPTIONS),
/* harmony export */   LIVE_ANNOUNCER_ELEMENT_TOKEN: () => (/* reexport safe */ _a11y_module_mjs__WEBPACK_IMPORTED_MODULE_1__.LIVE_ANNOUNCER_ELEMENT_TOKEN),
/* harmony export */   LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY: () => (/* reexport safe */ _a11y_module_mjs__WEBPACK_IMPORTED_MODULE_1__.LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY),
/* harmony export */   ListKeyManager: () => (/* reexport safe */ _list_key_manager_mjs__WEBPACK_IMPORTED_MODULE_10__.ListKeyManager),
/* harmony export */   LiveAnnouncer: () => (/* reexport safe */ _a11y_module_mjs__WEBPACK_IMPORTED_MODULE_1__.LiveAnnouncer),
/* harmony export */   MESSAGES_CONTAINER_ID: () => (/* binding */ MESSAGES_CONTAINER_ID),
/* harmony export */   NOOP_TREE_KEY_MANAGER_FACTORY: () => (/* binding */ NOOP_TREE_KEY_MANAGER_FACTORY),
/* harmony export */   NOOP_TREE_KEY_MANAGER_FACTORY_PROVIDER: () => (/* binding */ NOOP_TREE_KEY_MANAGER_FACTORY_PROVIDER),
/* harmony export */   NoopTreeKeyManager: () => (/* binding */ NoopTreeKeyManager),
/* harmony export */   TREE_KEY_MANAGER: () => (/* reexport safe */ _tree_key_manager_mjs__WEBPACK_IMPORTED_MODULE_12__.TREE_KEY_MANAGER),
/* harmony export */   TREE_KEY_MANAGER_FACTORY: () => (/* reexport safe */ _tree_key_manager_mjs__WEBPACK_IMPORTED_MODULE_12__.TREE_KEY_MANAGER_FACTORY),
/* harmony export */   TREE_KEY_MANAGER_FACTORY_PROVIDER: () => (/* reexport safe */ _tree_key_manager_mjs__WEBPACK_IMPORTED_MODULE_12__.TREE_KEY_MANAGER_FACTORY_PROVIDER),
/* harmony export */   TreeKeyManager: () => (/* reexport safe */ _tree_key_manager_mjs__WEBPACK_IMPORTED_MODULE_12__.TreeKeyManager),
/* harmony export */   _IdGenerator: () => (/* reexport safe */ _id_generator_mjs__WEBPACK_IMPORTED_MODULE_2__._IdGenerator),
/* harmony export */   addAriaReferencedId: () => (/* binding */ addAriaReferencedId),
/* harmony export */   getAriaReferenceIds: () => (/* binding */ getAriaReferenceIds),
/* harmony export */   isFakeMousedownFromScreenReader: () => (/* reexport safe */ _fake_event_detection_mjs__WEBPACK_IMPORTED_MODULE_13__.isFakeMousedownFromScreenReader),
/* harmony export */   isFakeTouchstartFromScreenReader: () => (/* reexport safe */ _fake_event_detection_mjs__WEBPACK_IMPORTED_MODULE_13__.isFakeTouchstartFromScreenReader),
/* harmony export */   removeAriaReferencedId: () => (/* binding */ removeAriaReferencedId)
/* harmony export */ });
/* harmony import */ var _focus_monitor_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./focus-monitor.mjs */ 56423);
/* harmony import */ var _a11y_module_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./a11y-module.mjs */ 79935);
/* harmony import */ var _id_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./id-generator.mjs */ 54149);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _platform2_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./platform2.mjs */ 37579);
/* harmony import */ var _style_loader_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style-loader.mjs */ 86739);
/* harmony import */ var _private_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./private.mjs */ 9227);
/* harmony import */ var _activedescendant_key_manager_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./activedescendant-key-manager.mjs */ 51289);
/* harmony import */ var _focus_key_manager_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./focus-key-manager.mjs */ 9122);
/* harmony import */ var _list_key_manager_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./list-key-manager.mjs */ 17314);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var _tree_key_manager_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tree-key-manager.mjs */ 47338);
/* harmony import */ var _fake_event_detection_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fake-event-detection.mjs */ 61780);





























/** IDs are delimited by an empty space, as per the spec. */
const ID_DELIMITER = ' ';
/**
 * Adds the given ID to the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 */
function addAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  if (ids.some(existingId => existingId.trim() === id)) {
    return;
  }
  ids.push(id);
  el.setAttribute(attr, ids.join(ID_DELIMITER));
}
/**
 * Removes the given ID from the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 */
function removeAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  const filteredIds = ids.filter(val => val !== id);
  if (filteredIds.length) {
    el.setAttribute(attr, filteredIds.join(ID_DELIMITER));
  } else {
    el.removeAttribute(attr);
  }
}
/**
 * Gets the list of IDs referenced by the given ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 */
function getAriaReferenceIds(el, attr) {
  // Get string array of all individual ids (whitespace delimited) in the attribute value
  const attrValue = el.getAttribute(attr);
  return attrValue?.match(/\S+/g) ?? [];
}

/**
 * ID used for the body container where all messages are appended.
 * @deprecated No longer being used. To be removed.
 * @breaking-change 14.0.0
 */
const MESSAGES_CONTAINER_ID = 'cdk-describedby-message-container';
/**
 * ID prefix used for each created message element.
 * @deprecated To be turned into a private variable.
 * @breaking-change 14.0.0
 */
const CDK_DESCRIBEDBY_ID_PREFIX = 'cdk-describedby-message';
/**
 * Attribute given to each host element that is described by a message element.
 * @deprecated To be turned into a private variable.
 * @breaking-change 14.0.0
 */
const CDK_DESCRIBEDBY_HOST_ATTRIBUTE = 'cdk-describedby-host';
/** Global incremental identifier for each registered message element. */
let nextId = 0;
/**
 * Utility that creates visually hidden elements with a message content. Useful for elements that
 * want to use aria-describedby to further describe themselves without adding additional visual
 * content.
 */
let AriaDescriber = /*#__PURE__*/(() => {
  class AriaDescriber {
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_platform2_mjs__WEBPACK_IMPORTED_MODULE_5__.Platform);
    _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT);
    /** Map of all registered message elements that have been placed into the document. */
    _messageRegistry = new Map();
    /** Container for all registered messages. */
    _messagesContainer = null;
    /** Unique ID for the service. */
    _id = `${nextId++}`;
    constructor() {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_style_loader_mjs__WEBPACK_IMPORTED_MODULE_6__._CdkPrivateStyleLoader).load(_private_mjs__WEBPACK_IMPORTED_MODULE_7__._VisuallyHiddenLoader);
      this._id = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.APP_ID) + '-' + nextId++;
    }
    describe(hostElement, message, role) {
      if (!this._canBeDescribed(hostElement, message)) {
        return;
      }
      const key = getKey(message, role);
      if (typeof message !== 'string') {
        // We need to ensure that the element has an ID.
        setMessageId(message, this._id);
        this._messageRegistry.set(key, {
          messageElement: message,
          referenceCount: 0
        });
      } else if (!this._messageRegistry.has(key)) {
        this._createMessageElement(message, role);
      }
      if (!this._isElementDescribedByMessage(hostElement, key)) {
        this._addMessageReference(hostElement, key);
      }
    }
    removeDescription(hostElement, message, role) {
      if (!message || !this._isElementNode(hostElement)) {
        return;
      }
      const key = getKey(message, role);
      if (this._isElementDescribedByMessage(hostElement, key)) {
        this._removeMessageReference(hostElement, key);
      }
      // If the message is a string, it means that it's one that we created for the
      // consumer so we can remove it safely, otherwise we should leave it in place.
      if (typeof message === 'string') {
        const registeredMessage = this._messageRegistry.get(key);
        if (registeredMessage && registeredMessage.referenceCount === 0) {
          this._deleteMessageElement(key);
        }
      }
      if (this._messagesContainer?.childNodes.length === 0) {
        this._messagesContainer.remove();
        this._messagesContainer = null;
      }
    }
    /** Unregisters all created message elements and removes the message container. */
    ngOnDestroy() {
      const describedElements = this._document.querySelectorAll(`[${CDK_DESCRIBEDBY_HOST_ATTRIBUTE}="${this._id}"]`);
      for (let i = 0; i < describedElements.length; i++) {
        this._removeCdkDescribedByReferenceIds(describedElements[i]);
        describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
      }
      this._messagesContainer?.remove();
      this._messagesContainer = null;
      this._messageRegistry.clear();
    }
    /**
     * Creates a new element in the visually hidden message container element with the message
     * as its content and adds it to the message registry.
     */
    _createMessageElement(message, role) {
      const messageElement = this._document.createElement('div');
      setMessageId(messageElement, this._id);
      messageElement.textContent = message;
      if (role) {
        messageElement.setAttribute('role', role);
      }
      this._createMessagesContainer();
      this._messagesContainer.appendChild(messageElement);
      this._messageRegistry.set(getKey(message, role), {
        messageElement,
        referenceCount: 0
      });
    }
    /** Deletes the message element from the global messages container. */
    _deleteMessageElement(key) {
      this._messageRegistry.get(key)?.messageElement?.remove();
      this._messageRegistry.delete(key);
    }
    /** Creates the global container for all aria-describedby messages. */
    _createMessagesContainer() {
      if (this._messagesContainer) {
        return;
      }
      const containerClassName = 'cdk-describedby-message-container';
      const serverContainers = this._document.querySelectorAll(`.${containerClassName}[platform="server"]`);
      for (let i = 0; i < serverContainers.length; i++) {
        // When going from the server to the client, we may end up in a situation where there's
        // already a container on the page, but we don't have a reference to it. Clear the
        // old container so we don't get duplicates. Doing this, instead of emptying the previous
        // container, should be slightly faster.
        serverContainers[i].remove();
      }
      const messagesContainer = this._document.createElement('div');
      // We add `visibility: hidden` in order to prevent text in this container from
      // being searchable by the browser's Ctrl + F functionality.
      // Screen-readers will still read the description for elements with aria-describedby even
      // when the description element is not visible.
      messagesContainer.style.visibility = 'hidden';
      // Even though we use `visibility: hidden`, we still apply `cdk-visually-hidden` so that
      // the description element doesn't impact page layout.
      messagesContainer.classList.add(containerClassName);
      messagesContainer.classList.add('cdk-visually-hidden');
      if (!this._platform.isBrowser) {
        messagesContainer.setAttribute('platform', 'server');
      }
      this._document.body.appendChild(messagesContainer);
      this._messagesContainer = messagesContainer;
    }
    /** Removes all cdk-describedby messages that are hosted through the element. */
    _removeCdkDescribedByReferenceIds(element) {
      // Remove all aria-describedby reference IDs that are prefixed by CDK_DESCRIBEDBY_ID_PREFIX
      const originalReferenceIds = getAriaReferenceIds(element, 'aria-describedby').filter(id => id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0);
      element.setAttribute('aria-describedby', originalReferenceIds.join(' '));
    }
    /**
     * Adds a message reference to the element using aria-describedby and increments the registered
     * message's reference count.
     */
    _addMessageReference(element, key) {
      const registeredMessage = this._messageRegistry.get(key);
      // Add the aria-describedby reference and set the
      // describedby_host attribute to mark the element.
      addAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
      element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, this._id);
      registeredMessage.referenceCount++;
    }
    /**
     * Removes a message reference from the element using aria-describedby
     * and decrements the registered message's reference count.
     */
    _removeMessageReference(element, key) {
      const registeredMessage = this._messageRegistry.get(key);
      registeredMessage.referenceCount--;
      removeAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
      element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
    }
    /** Returns true if the element has been described by the provided message ID. */
    _isElementDescribedByMessage(element, key) {
      const referenceIds = getAriaReferenceIds(element, 'aria-describedby');
      const registeredMessage = this._messageRegistry.get(key);
      const messageId = registeredMessage && registeredMessage.messageElement.id;
      return !!messageId && referenceIds.indexOf(messageId) != -1;
    }
    /** Determines whether a message can be described on a particular element. */
    _canBeDescribed(element, message) {
      if (!this._isElementNode(element)) {
        return false;
      }
      if (message && typeof message === 'object') {
        // We'd have to make some assumptions about the description element's text, if the consumer
        // passed in an element. Assume that if an element is passed in, the consumer has verified
        // that it can be used as a description.
        return true;
      }
      const trimmedMessage = message == null ? '' : `${message}`.trim();
      const ariaLabel = element.getAttribute('aria-label');
      // We shouldn't set descriptions if they're exactly the same as the `aria-label` of the
      // element, because screen readers will end up reading out the same text twice in a row.
      return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
    }
    /** Checks whether a node is an Element node. */
    _isElementNode(element) {
      return element.nodeType === this._document.ELEMENT_NODE;
    }
    static ɵfac = function AriaDescriber_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AriaDescriber)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: AriaDescriber,
      factory: AriaDescriber.ɵfac,
      providedIn: 'root'
    });
  }
  return AriaDescriber;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Gets a key that can be used to look messages up in the registry. */
function getKey(message, role) {
  return typeof message === 'string' ? `${role || ''}/${message}` : message;
}
/** Assigns a unique ID to an element, if it doesn't have one already. */
function setMessageId(element, serviceId) {
  if (!element.id) {
    element.id = `${CDK_DESCRIBEDBY_ID_PREFIX}-${serviceId}-${nextId++}`;
  }
}

// NoopTreeKeyManager is a "noop" implementation of TreeKeyMangerStrategy. Methods are noops. Does
// not emit to streams.
//
// Used for applications built before TreeKeyManager to opt-out of TreeKeyManager and revert to
// legacy behavior.
/**
 * @docs-private
 *
 * Opt-out of Tree of key manager behavior.
 *
 * When provided, Tree has same focus management behavior as before TreeKeyManager was introduced.
 *  - Tree does not respond to keyboard interaction
 *  - Tree node allows tabindex to be set by Input binding
 *  - Tree node allows tabindex to be set by attribute binding
 *
 * @deprecated NoopTreeKeyManager deprecated. Use TreeKeyManager or inject a
 * TreeKeyManagerStrategy instead. To be removed in a future version.
 *
 * @breaking-change 21.0.0
 */
class NoopTreeKeyManager {
  _isNoopTreeKeyManager = true;
  // Provide change as required by TreeKeyManagerStrategy. NoopTreeKeyManager is a "noop"
  // implementation that does not emit to streams.
  change = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
  destroy() {
    this.change.complete();
  }
  onKeydown() {
    // noop
  }
  getActiveItemIndex() {
    // Always return null. NoopTreeKeyManager is a "noop" implementation that does not maintain
    // the active item.
    return null;
  }
  getActiveItem() {
    // Always return null. NoopTreeKeyManager is a "noop" implementation that does not maintain
    // the active item.
    return null;
  }
  focusItem() {
    // noop
  }
}
/**
 * @docs-private
 *
 * Opt-out of Tree of key manager behavior.
 *
 * When provided, Tree has same focus management behavior as before TreeKeyManager was introduced.
 *  - Tree does not respond to keyboard interaction
 *  - Tree node allows tabindex to be set by Input binding
 *  - Tree node allows tabindex to be set by attribute binding
 *
 * @deprecated NoopTreeKeyManager deprecated. Use TreeKeyManager or inject a
 * TreeKeyManagerStrategy instead. To be removed in a future version.
 *
 * @breaking-change 21.0.0
 */
function NOOP_TREE_KEY_MANAGER_FACTORY() {
  return () => new NoopTreeKeyManager();
}
/**
 * @docs-private
 *
 * Opt-out of Tree of key manager behavior.
 *
 * When provided, Tree has same focus management behavior as before TreeKeyManager was introduced.
 *  - Tree does not respond to keyboard interaction
 *  - Tree node allows tabindex to be set by Input binding
 *  - Tree node allows tabindex to be set by attribute binding
 *
 * @deprecated NoopTreeKeyManager deprecated. Use TreeKeyManager or inject a
 * TreeKeyManagerStrategy instead. To be removed in a future version.
 *
 * @breaking-change 21.0.0
 */
const NOOP_TREE_KEY_MANAGER_FACTORY_PROVIDER = {
  provide: _tree_key_manager_mjs__WEBPACK_IMPORTED_MODULE_12__.TREE_KEY_MANAGER,
  useFactory: NOOP_TREE_KEY_MANAGER_FACTORY
};

/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class uses a strategy pattern that determines how it traps focus.
 * See FocusTrapInertStrategy.
 */
class ConfigurableFocusTrap extends _a11y_module_mjs__WEBPACK_IMPORTED_MODULE_1__.FocusTrap {
  _focusTrapManager;
  _inertStrategy;
  /** Whether the FocusTrap is enabled. */
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    this._enabled = value;
    if (this._enabled) {
      this._focusTrapManager.register(this);
    } else {
      this._focusTrapManager.deregister(this);
    }
  }
  constructor(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config, injector) {
    super(_element, _checker, _ngZone, _document, config.defer, injector);
    this._focusTrapManager = _focusTrapManager;
    this._inertStrategy = _inertStrategy;
    this._focusTrapManager.register(this);
  }
  /** Notifies the FocusTrapManager that this FocusTrap will be destroyed. */
  destroy() {
    this._focusTrapManager.deregister(this);
    super.destroy();
  }
  /** @docs-private Implemented as part of ManagedFocusTrap. */
  _enable() {
    this._inertStrategy.preventFocus(this);
    this.toggleAnchors(true);
  }
  /** @docs-private Implemented as part of ManagedFocusTrap. */
  _disable() {
    this._inertStrategy.allowFocus(this);
    this.toggleAnchors(false);
  }
}

/**
 * Lightweight FocusTrapInertStrategy that adds a document focus event
 * listener to redirect focus back inside the FocusTrap.
 */
class EventListenerFocusTrapInertStrategy {
  /** Focus event handler. */
  _listener = null;
  /** Adds a document event listener that keeps focus inside the FocusTrap. */
  preventFocus(focusTrap) {
    // Ensure there's only one listener per document
    if (this._listener) {
      focusTrap._document.removeEventListener('focus', this._listener, true);
    }
    this._listener = e => this._trapFocus(focusTrap, e);
    focusTrap._ngZone.runOutsideAngular(() => {
      focusTrap._document.addEventListener('focus', this._listener, true);
    });
  }
  /** Removes the event listener added in preventFocus. */
  allowFocus(focusTrap) {
    if (!this._listener) {
      return;
    }
    focusTrap._document.removeEventListener('focus', this._listener, true);
    this._listener = null;
  }
  /**
   * Refocuses the first element in the FocusTrap if the focus event target was outside
   * the FocusTrap.
   *
   * This is an event listener callback. The event listener is added in runOutsideAngular,
   * so all this code runs outside Angular as well.
   */
  _trapFocus(focusTrap, event) {
    const target = event.target;
    const focusTrapRoot = focusTrap._element;
    // Don't refocus if target was in an overlay, because the overlay might be associated
    // with an element inside the FocusTrap, ex. mat-select.
    if (target && !focusTrapRoot.contains(target) && !target.closest?.('div.cdk-overlay-pane')) {
      // Some legacy FocusTrap usages have logic that focuses some element on the page
      // just before FocusTrap is destroyed. For backwards compatibility, wait
      // to be sure FocusTrap is still enabled before refocusing.
      setTimeout(() => {
        // Check whether focus wasn't put back into the focus trap while the timeout was pending.
        if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
          focusTrap.focusFirstTabbableElement();
        }
      });
    }
  }
}

/** The injection token used to specify the inert strategy. */
const FOCUS_TRAP_INERT_STRATEGY = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_3__.InjectionToken('FOCUS_TRAP_INERT_STRATEGY');

/** Injectable that ensures only the most recently enabled FocusTrap is active. */
let FocusTrapManager = /*#__PURE__*/(() => {
  class FocusTrapManager {
    // A stack of the FocusTraps on the page. Only the FocusTrap at the
    // top of the stack is active.
    _focusTrapStack = [];
    /**
     * Disables the FocusTrap at the top of the stack, and then pushes
     * the new FocusTrap onto the stack.
     */
    register(focusTrap) {
      // Dedupe focusTraps that register multiple times.
      this._focusTrapStack = this._focusTrapStack.filter(ft => ft !== focusTrap);
      let stack = this._focusTrapStack;
      if (stack.length) {
        stack[stack.length - 1]._disable();
      }
      stack.push(focusTrap);
      focusTrap._enable();
    }
    /**
     * Removes the FocusTrap from the stack, and activates the
     * FocusTrap that is the new top of the stack.
     */
    deregister(focusTrap) {
      focusTrap._disable();
      const stack = this._focusTrapStack;
      const i = stack.indexOf(focusTrap);
      if (i !== -1) {
        stack.splice(i, 1);
        if (stack.length) {
          stack[stack.length - 1]._enable();
        }
      }
    }
    static ɵfac = function FocusTrapManager_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FocusTrapManager)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: FocusTrapManager,
      factory: FocusTrapManager.ɵfac,
      providedIn: 'root'
    });
  }
  return FocusTrapManager;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Factory that allows easy instantiation of configurable focus traps. */
let ConfigurableFocusTrapFactory = /*#__PURE__*/(() => {
  class ConfigurableFocusTrapFactory {
    _checker = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_a11y_module_mjs__WEBPACK_IMPORTED_MODULE_1__.InteractivityChecker);
    _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone);
    _focusTrapManager = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(FocusTrapManager);
    _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT);
    _inertStrategy;
    _injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector);
    constructor() {
      const inertStrategy = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(FOCUS_TRAP_INERT_STRATEGY, {
        optional: true
      });
      // TODO split up the strategies into different modules, similar to DateAdapter.
      this._inertStrategy = inertStrategy || new EventListenerFocusTrapInertStrategy();
    }
    create(element, config = {
      defer: false
    }) {
      let configObject;
      if (typeof config === 'boolean') {
        configObject = {
          defer: config
        };
      } else {
        configObject = config;
      }
      return new ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, configObject, this._injector);
    }
    static ɵfac = function ConfigurableFocusTrapFactory_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ConfigurableFocusTrapFactory)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: ConfigurableFocusTrapFactory,
      factory: ConfigurableFocusTrapFactory.ɵfac,
      providedIn: 'root'
    });
  }
  return ConfigurableFocusTrapFactory;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ }),

/***/ 74879:
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/keycodes.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   ALT: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.ALT),
/* harmony export */   APOSTROPHE: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.APOSTROPHE),
/* harmony export */   AT_SIGN: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.AT_SIGN),
/* harmony export */   B: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.B),
/* harmony export */   BACKSLASH: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.BACKSLASH),
/* harmony export */   BACKSPACE: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.BACKSPACE),
/* harmony export */   C: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.C),
/* harmony export */   CAPS_LOCK: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.CAPS_LOCK),
/* harmony export */   CLOSE_SQUARE_BRACKET: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.CLOSE_SQUARE_BRACKET),
/* harmony export */   COMMA: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.COMMA),
/* harmony export */   CONTEXT_MENU: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.CONTEXT_MENU),
/* harmony export */   CONTROL: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.CONTROL),
/* harmony export */   D: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.D),
/* harmony export */   DASH: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.DASH),
/* harmony export */   DELETE: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.DELETE),
/* harmony export */   DOWN_ARROW: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.DOWN_ARROW),
/* harmony export */   E: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.E),
/* harmony export */   EIGHT: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.EIGHT),
/* harmony export */   END: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.END),
/* harmony export */   ENTER: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.ENTER),
/* harmony export */   EQUALS: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.EQUALS),
/* harmony export */   ESCAPE: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.ESCAPE),
/* harmony export */   F: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.F),
/* harmony export */   F1: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.F1),
/* harmony export */   F10: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.F10),
/* harmony export */   F11: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.F11),
/* harmony export */   F12: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.F12),
/* harmony export */   F2: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.F2),
/* harmony export */   F3: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.F3),
/* harmony export */   F4: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.F4),
/* harmony export */   F5: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.F5),
/* harmony export */   F6: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.F6),
/* harmony export */   F7: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.F7),
/* harmony export */   F8: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.F8),
/* harmony export */   F9: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.F9),
/* harmony export */   FF_EQUALS: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.FF_EQUALS),
/* harmony export */   FF_MINUS: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.FF_MINUS),
/* harmony export */   FF_MUTE: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.FF_MUTE),
/* harmony export */   FF_SEMICOLON: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.FF_SEMICOLON),
/* harmony export */   FF_VOLUME_DOWN: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.FF_VOLUME_DOWN),
/* harmony export */   FF_VOLUME_UP: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.FF_VOLUME_UP),
/* harmony export */   FIRST_MEDIA: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.FIRST_MEDIA),
/* harmony export */   FIVE: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.FIVE),
/* harmony export */   FOUR: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.FOUR),
/* harmony export */   G: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.G),
/* harmony export */   H: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.H),
/* harmony export */   HOME: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.HOME),
/* harmony export */   I: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.I),
/* harmony export */   INSERT: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.INSERT),
/* harmony export */   J: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.J),
/* harmony export */   K: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.K),
/* harmony export */   L: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.L),
/* harmony export */   LAST_MEDIA: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.LAST_MEDIA),
/* harmony export */   LEFT_ARROW: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.LEFT_ARROW),
/* harmony export */   M: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.M),
/* harmony export */   MAC_ENTER: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.MAC_ENTER),
/* harmony export */   MAC_META: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.MAC_META),
/* harmony export */   MAC_WK_CMD_LEFT: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.MAC_WK_CMD_LEFT),
/* harmony export */   MAC_WK_CMD_RIGHT: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.MAC_WK_CMD_RIGHT),
/* harmony export */   META: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.META),
/* harmony export */   MUTE: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.MUTE),
/* harmony export */   N: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.N),
/* harmony export */   NINE: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.NINE),
/* harmony export */   NUMPAD_DIVIDE: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_DIVIDE),
/* harmony export */   NUMPAD_EIGHT: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_EIGHT),
/* harmony export */   NUMPAD_FIVE: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_FIVE),
/* harmony export */   NUMPAD_FOUR: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_FOUR),
/* harmony export */   NUMPAD_MINUS: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_MINUS),
/* harmony export */   NUMPAD_MULTIPLY: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_MULTIPLY),
/* harmony export */   NUMPAD_NINE: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_NINE),
/* harmony export */   NUMPAD_ONE: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_ONE),
/* harmony export */   NUMPAD_PERIOD: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_PERIOD),
/* harmony export */   NUMPAD_PLUS: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_PLUS),
/* harmony export */   NUMPAD_SEVEN: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_SEVEN),
/* harmony export */   NUMPAD_SIX: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_SIX),
/* harmony export */   NUMPAD_THREE: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_THREE),
/* harmony export */   NUMPAD_TWO: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_TWO),
/* harmony export */   NUMPAD_ZERO: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.NUMPAD_ZERO),
/* harmony export */   NUM_CENTER: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.NUM_CENTER),
/* harmony export */   NUM_LOCK: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.NUM_LOCK),
/* harmony export */   O: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.O),
/* harmony export */   ONE: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.ONE),
/* harmony export */   OPEN_SQUARE_BRACKET: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.OPEN_SQUARE_BRACKET),
/* harmony export */   P: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.P),
/* harmony export */   PAGE_DOWN: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.PAGE_DOWN),
/* harmony export */   PAGE_UP: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.PAGE_UP),
/* harmony export */   PAUSE: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.PAUSE),
/* harmony export */   PERIOD: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.PERIOD),
/* harmony export */   PLUS_SIGN: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.PLUS_SIGN),
/* harmony export */   PRINT_SCREEN: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.PRINT_SCREEN),
/* harmony export */   Q: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.Q),
/* harmony export */   QUESTION_MARK: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.QUESTION_MARK),
/* harmony export */   R: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.R),
/* harmony export */   RIGHT_ARROW: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.RIGHT_ARROW),
/* harmony export */   S: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.S),
/* harmony export */   SCROLL_LOCK: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.SCROLL_LOCK),
/* harmony export */   SEMICOLON: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.SEMICOLON),
/* harmony export */   SEVEN: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.SEVEN),
/* harmony export */   SHIFT: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.SHIFT),
/* harmony export */   SINGLE_QUOTE: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.SINGLE_QUOTE),
/* harmony export */   SIX: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.SIX),
/* harmony export */   SLASH: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.SLASH),
/* harmony export */   SPACE: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.SPACE),
/* harmony export */   T: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.T),
/* harmony export */   TAB: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.TAB),
/* harmony export */   THREE: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.THREE),
/* harmony export */   TILDE: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.TILDE),
/* harmony export */   TWO: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.TWO),
/* harmony export */   U: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.U),
/* harmony export */   UP_ARROW: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.UP_ARROW),
/* harmony export */   V: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.V),
/* harmony export */   VOLUME_DOWN: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.VOLUME_DOWN),
/* harmony export */   VOLUME_UP: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.VOLUME_UP),
/* harmony export */   W: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.W),
/* harmony export */   X: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.X),
/* harmony export */   Y: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.Y),
/* harmony export */   Z: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   ZERO: () => (/* reexport safe */ _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__.ZERO),
/* harmony export */   hasModifierKey: () => (/* binding */ hasModifierKey)
/* harmony export */ });
/* harmony import */ var _keycodes2_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keycodes2.mjs */ 78159);


/**
 * Checks whether a modifier key is pressed.
 * @param event Event to be checked.
 */
function hasModifierKey(event, ...modifiers) {
  if (modifiers.length) {
    return modifiers.some(modifier => event[modifier]);
  }
  return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}


/***/ }),

/***/ 78159:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/keycodes2.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ A),
/* harmony export */   ALT: () => (/* binding */ ALT),
/* harmony export */   APOSTROPHE: () => (/* binding */ APOSTROPHE),
/* harmony export */   AT_SIGN: () => (/* binding */ AT_SIGN),
/* harmony export */   B: () => (/* binding */ B),
/* harmony export */   BACKSLASH: () => (/* binding */ BACKSLASH),
/* harmony export */   BACKSPACE: () => (/* binding */ BACKSPACE),
/* harmony export */   C: () => (/* binding */ C),
/* harmony export */   CAPS_LOCK: () => (/* binding */ CAPS_LOCK),
/* harmony export */   CLOSE_SQUARE_BRACKET: () => (/* binding */ CLOSE_SQUARE_BRACKET),
/* harmony export */   COMMA: () => (/* binding */ COMMA),
/* harmony export */   CONTEXT_MENU: () => (/* binding */ CONTEXT_MENU),
/* harmony export */   CONTROL: () => (/* binding */ CONTROL),
/* harmony export */   D: () => (/* binding */ D),
/* harmony export */   DASH: () => (/* binding */ DASH),
/* harmony export */   DELETE: () => (/* binding */ DELETE),
/* harmony export */   DOWN_ARROW: () => (/* binding */ DOWN_ARROW),
/* harmony export */   E: () => (/* binding */ E),
/* harmony export */   EIGHT: () => (/* binding */ EIGHT),
/* harmony export */   END: () => (/* binding */ END),
/* harmony export */   ENTER: () => (/* binding */ ENTER),
/* harmony export */   EQUALS: () => (/* binding */ EQUALS),
/* harmony export */   ESCAPE: () => (/* binding */ ESCAPE),
/* harmony export */   F: () => (/* binding */ F),
/* harmony export */   F1: () => (/* binding */ F1),
/* harmony export */   F10: () => (/* binding */ F10),
/* harmony export */   F11: () => (/* binding */ F11),
/* harmony export */   F12: () => (/* binding */ F12),
/* harmony export */   F2: () => (/* binding */ F2),
/* harmony export */   F3: () => (/* binding */ F3),
/* harmony export */   F4: () => (/* binding */ F4),
/* harmony export */   F5: () => (/* binding */ F5),
/* harmony export */   F6: () => (/* binding */ F6),
/* harmony export */   F7: () => (/* binding */ F7),
/* harmony export */   F8: () => (/* binding */ F8),
/* harmony export */   F9: () => (/* binding */ F9),
/* harmony export */   FF_EQUALS: () => (/* binding */ FF_EQUALS),
/* harmony export */   FF_MINUS: () => (/* binding */ FF_MINUS),
/* harmony export */   FF_MUTE: () => (/* binding */ FF_MUTE),
/* harmony export */   FF_SEMICOLON: () => (/* binding */ FF_SEMICOLON),
/* harmony export */   FF_VOLUME_DOWN: () => (/* binding */ FF_VOLUME_DOWN),
/* harmony export */   FF_VOLUME_UP: () => (/* binding */ FF_VOLUME_UP),
/* harmony export */   FIRST_MEDIA: () => (/* binding */ FIRST_MEDIA),
/* harmony export */   FIVE: () => (/* binding */ FIVE),
/* harmony export */   FOUR: () => (/* binding */ FOUR),
/* harmony export */   G: () => (/* binding */ G),
/* harmony export */   H: () => (/* binding */ H),
/* harmony export */   HOME: () => (/* binding */ HOME),
/* harmony export */   I: () => (/* binding */ I),
/* harmony export */   INSERT: () => (/* binding */ INSERT),
/* harmony export */   J: () => (/* binding */ J),
/* harmony export */   K: () => (/* binding */ K),
/* harmony export */   L: () => (/* binding */ L),
/* harmony export */   LAST_MEDIA: () => (/* binding */ LAST_MEDIA),
/* harmony export */   LEFT_ARROW: () => (/* binding */ LEFT_ARROW),
/* harmony export */   M: () => (/* binding */ M),
/* harmony export */   MAC_ENTER: () => (/* binding */ MAC_ENTER),
/* harmony export */   MAC_META: () => (/* binding */ MAC_META),
/* harmony export */   MAC_WK_CMD_LEFT: () => (/* binding */ MAC_WK_CMD_LEFT),
/* harmony export */   MAC_WK_CMD_RIGHT: () => (/* binding */ MAC_WK_CMD_RIGHT),
/* harmony export */   META: () => (/* binding */ META),
/* harmony export */   MUTE: () => (/* binding */ MUTE),
/* harmony export */   N: () => (/* binding */ N),
/* harmony export */   NINE: () => (/* binding */ NINE),
/* harmony export */   NUMPAD_DIVIDE: () => (/* binding */ NUMPAD_DIVIDE),
/* harmony export */   NUMPAD_EIGHT: () => (/* binding */ NUMPAD_EIGHT),
/* harmony export */   NUMPAD_FIVE: () => (/* binding */ NUMPAD_FIVE),
/* harmony export */   NUMPAD_FOUR: () => (/* binding */ NUMPAD_FOUR),
/* harmony export */   NUMPAD_MINUS: () => (/* binding */ NUMPAD_MINUS),
/* harmony export */   NUMPAD_MULTIPLY: () => (/* binding */ NUMPAD_MULTIPLY),
/* harmony export */   NUMPAD_NINE: () => (/* binding */ NUMPAD_NINE),
/* harmony export */   NUMPAD_ONE: () => (/* binding */ NUMPAD_ONE),
/* harmony export */   NUMPAD_PERIOD: () => (/* binding */ NUMPAD_PERIOD),
/* harmony export */   NUMPAD_PLUS: () => (/* binding */ NUMPAD_PLUS),
/* harmony export */   NUMPAD_SEVEN: () => (/* binding */ NUMPAD_SEVEN),
/* harmony export */   NUMPAD_SIX: () => (/* binding */ NUMPAD_SIX),
/* harmony export */   NUMPAD_THREE: () => (/* binding */ NUMPAD_THREE),
/* harmony export */   NUMPAD_TWO: () => (/* binding */ NUMPAD_TWO),
/* harmony export */   NUMPAD_ZERO: () => (/* binding */ NUMPAD_ZERO),
/* harmony export */   NUM_CENTER: () => (/* binding */ NUM_CENTER),
/* harmony export */   NUM_LOCK: () => (/* binding */ NUM_LOCK),
/* harmony export */   O: () => (/* binding */ O),
/* harmony export */   ONE: () => (/* binding */ ONE),
/* harmony export */   OPEN_SQUARE_BRACKET: () => (/* binding */ OPEN_SQUARE_BRACKET),
/* harmony export */   P: () => (/* binding */ P),
/* harmony export */   PAGE_DOWN: () => (/* binding */ PAGE_DOWN),
/* harmony export */   PAGE_UP: () => (/* binding */ PAGE_UP),
/* harmony export */   PAUSE: () => (/* binding */ PAUSE),
/* harmony export */   PERIOD: () => (/* binding */ PERIOD),
/* harmony export */   PLUS_SIGN: () => (/* binding */ PLUS_SIGN),
/* harmony export */   PRINT_SCREEN: () => (/* binding */ PRINT_SCREEN),
/* harmony export */   Q: () => (/* binding */ Q),
/* harmony export */   QUESTION_MARK: () => (/* binding */ QUESTION_MARK),
/* harmony export */   R: () => (/* binding */ R),
/* harmony export */   RIGHT_ARROW: () => (/* binding */ RIGHT_ARROW),
/* harmony export */   S: () => (/* binding */ S),
/* harmony export */   SCROLL_LOCK: () => (/* binding */ SCROLL_LOCK),
/* harmony export */   SEMICOLON: () => (/* binding */ SEMICOLON),
/* harmony export */   SEVEN: () => (/* binding */ SEVEN),
/* harmony export */   SHIFT: () => (/* binding */ SHIFT),
/* harmony export */   SINGLE_QUOTE: () => (/* binding */ SINGLE_QUOTE),
/* harmony export */   SIX: () => (/* binding */ SIX),
/* harmony export */   SLASH: () => (/* binding */ SLASH),
/* harmony export */   SPACE: () => (/* binding */ SPACE),
/* harmony export */   T: () => (/* binding */ T),
/* harmony export */   TAB: () => (/* binding */ TAB),
/* harmony export */   THREE: () => (/* binding */ THREE),
/* harmony export */   TILDE: () => (/* binding */ TILDE),
/* harmony export */   TWO: () => (/* binding */ TWO),
/* harmony export */   U: () => (/* binding */ U),
/* harmony export */   UP_ARROW: () => (/* binding */ UP_ARROW),
/* harmony export */   V: () => (/* binding */ V),
/* harmony export */   VOLUME_DOWN: () => (/* binding */ VOLUME_DOWN),
/* harmony export */   VOLUME_UP: () => (/* binding */ VOLUME_UP),
/* harmony export */   W: () => (/* binding */ W),
/* harmony export */   X: () => (/* binding */ X),
/* harmony export */   Y: () => (/* binding */ Y),
/* harmony export */   Z: () => (/* binding */ Z),
/* harmony export */   ZERO: () => (/* binding */ ZERO)
/* harmony export */ });
const MAC_ENTER = 3;
const BACKSPACE = 8;
const TAB = 9;
const NUM_CENTER = 12;
const ENTER = 13;
const SHIFT = 16;
const CONTROL = 17;
const ALT = 18;
const PAUSE = 19;
const CAPS_LOCK = 20;
const ESCAPE = 27;
const SPACE = 32;
const PAGE_UP = 33;
const PAGE_DOWN = 34;
const END = 35;
const HOME = 36;
const LEFT_ARROW = 37;
const UP_ARROW = 38;
const RIGHT_ARROW = 39;
const DOWN_ARROW = 40;
const PLUS_SIGN = 43;
const PRINT_SCREEN = 44;
const INSERT = 45;
const DELETE = 46;
const ZERO = 48;
const ONE = 49;
const TWO = 50;
const THREE = 51;
const FOUR = 52;
const FIVE = 53;
const SIX = 54;
const SEVEN = 55;
const EIGHT = 56;
const NINE = 57;
const FF_SEMICOLON = 59; // Firefox (Gecko) fires this for semicolon instead of 186
const FF_EQUALS = 61; // Firefox (Gecko) fires this for equals instead of 187
const QUESTION_MARK = 63;
const AT_SIGN = 64;
const A = 65;
const B = 66;
const C = 67;
const D = 68;
const E = 69;
const F = 70;
const G = 71;
const H = 72;
const I = 73;
const J = 74;
const K = 75;
const L = 76;
const M = 77;
const N = 78;
const O = 79;
const P = 80;
const Q = 81;
const R = 82;
const S = 83;
const T = 84;
const U = 85;
const V = 86;
const W = 87;
const X = 88;
const Y = 89;
const Z = 90;
const META = 91; // WIN_KEY_LEFT
const MAC_WK_CMD_LEFT = 91;
const MAC_WK_CMD_RIGHT = 93;
const CONTEXT_MENU = 93;
const NUMPAD_ZERO = 96;
const NUMPAD_ONE = 97;
const NUMPAD_TWO = 98;
const NUMPAD_THREE = 99;
const NUMPAD_FOUR = 100;
const NUMPAD_FIVE = 101;
const NUMPAD_SIX = 102;
const NUMPAD_SEVEN = 103;
const NUMPAD_EIGHT = 104;
const NUMPAD_NINE = 105;
const NUMPAD_MULTIPLY = 106;
const NUMPAD_PLUS = 107;
const NUMPAD_MINUS = 109;
const NUMPAD_PERIOD = 110;
const NUMPAD_DIVIDE = 111;
const F1 = 112;
const F2 = 113;
const F3 = 114;
const F4 = 115;
const F5 = 116;
const F6 = 117;
const F7 = 118;
const F8 = 119;
const F9 = 120;
const F10 = 121;
const F11 = 122;
const F12 = 123;
const NUM_LOCK = 144;
const SCROLL_LOCK = 145;
const FIRST_MEDIA = 166;
const FF_MINUS = 173;
const MUTE = 173; // Firefox (Gecko) fires 181 for MUTE
const VOLUME_DOWN = 174; // Firefox (Gecko) fires 182 for VOLUME_DOWN
const VOLUME_UP = 175; // Firefox (Gecko) fires 183 for VOLUME_UP
const FF_MUTE = 181;
const FF_VOLUME_DOWN = 182;
const LAST_MEDIA = 183;
const FF_VOLUME_UP = 183;
const SEMICOLON = 186; // Firefox (Gecko) fires 59 for SEMICOLON
const EQUALS = 187; // Firefox (Gecko) fires 61 for EQUALS
const COMMA = 188;
const DASH = 189; // Firefox (Gecko) fires 173 for DASH/MINUS
const PERIOD = 190;
const SLASH = 191;
const APOSTROPHE = 192;
const TILDE = 192;
const OPEN_SQUARE_BRACKET = 219;
const BACKSLASH = 220;
const CLOSE_SQUARE_BRACKET = 221;
const SINGLE_QUOTE = 222;
const MAC_META = 224;


/***/ }),

/***/ 93585:
/*!******************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/passive-listeners.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizePassiveListenerOptions: () => (/* binding */ normalizePassiveListenerOptions),
/* harmony export */   supportsPassiveEventListeners: () => (/* binding */ supportsPassiveEventListeners)
/* harmony export */ });
/** Cached result of whether the user's browser supports passive event listeners. */
let supportsPassiveEvents;
/**
 * Checks whether the user's browser supports passive event listeners.
 * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
 */
function supportsPassiveEventListeners() {
  if (supportsPassiveEvents == null && typeof window !== 'undefined') {
    try {
      window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
        get: () => supportsPassiveEvents = true
      }));
    } finally {
      supportsPassiveEvents = supportsPassiveEvents || false;
    }
  }
  return supportsPassiveEvents;
}
/**
 * Normalizes an `AddEventListener` object to something that can be passed
 * to `addEventListener` on any browser, no matter whether it supports the
 * `options` parameter.
 * @param options Object to be normalized.
 */
function normalizePassiveListenerOptions(options) {
  return supportsPassiveEventListeners() ? options : !!options.capture;
}


/***/ })

}]);
//# sourceMappingURL=8392.js.map