"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[7697],{

/***/ 60504:
/*!*******************************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/dispose-view-repeater-strategy.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _DisposeViewRepeaterStrategy: () => (/* binding */ _DisposeViewRepeaterStrategy)
/* harmony export */ });
/* harmony import */ var _recycle_view_repeater_strategy_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recycle-view-repeater-strategy.mjs */ 41572);


/**
 * A repeater that destroys views when they are removed from a
 * `ViewContainerRef`. When new items are inserted into the container,
 * the repeater will always construct a new embedded view for each item.
 *
 * @template T The type for the embedded view's $implicit property.
 * @template R The type for the item in each IterableDiffer change record.
 * @template C The type for the context passed to each embedded view.
 */
class _DisposeViewRepeaterStrategy {
  applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
    changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
      let view;
      let operation;
      if (record.previousIndex == null) {
        const insertContext = itemContextFactory(record, adjustedPreviousIndex, currentIndex);
        view = viewContainerRef.createEmbeddedView(insertContext.templateRef, insertContext.context, insertContext.index);
        operation = _recycle_view_repeater_strategy_mjs__WEBPACK_IMPORTED_MODULE_0__._ViewRepeaterOperation.INSERTED;
      } else if (currentIndex == null) {
        viewContainerRef.remove(adjustedPreviousIndex);
        operation = _recycle_view_repeater_strategy_mjs__WEBPACK_IMPORTED_MODULE_0__._ViewRepeaterOperation.REMOVED;
      } else {
        view = viewContainerRef.get(adjustedPreviousIndex);
        viewContainerRef.move(view, currentIndex);
        operation = _recycle_view_repeater_strategy_mjs__WEBPACK_IMPORTED_MODULE_0__._ViewRepeaterOperation.MOVED;
      }
      if (itemViewChanged) {
        itemViewChanged({
          context: view?.context,
          operation,
          record
        });
      }
    });
  }
  detach() {}
}


/***/ }),

/***/ 77697:
/*!***********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/table.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatCell: () => (/* binding */ MatCell),
/* harmony export */   MatCellDef: () => (/* binding */ MatCellDef),
/* harmony export */   MatColumnDef: () => (/* binding */ MatColumnDef),
/* harmony export */   MatFooterCell: () => (/* binding */ MatFooterCell),
/* harmony export */   MatFooterCellDef: () => (/* binding */ MatFooterCellDef),
/* harmony export */   MatFooterRow: () => (/* binding */ MatFooterRow),
/* harmony export */   MatFooterRowDef: () => (/* binding */ MatFooterRowDef),
/* harmony export */   MatHeaderCell: () => (/* binding */ MatHeaderCell),
/* harmony export */   MatHeaderCellDef: () => (/* binding */ MatHeaderCellDef),
/* harmony export */   MatHeaderRow: () => (/* binding */ MatHeaderRow),
/* harmony export */   MatHeaderRowDef: () => (/* binding */ MatHeaderRowDef),
/* harmony export */   MatNoDataRow: () => (/* binding */ MatNoDataRow),
/* harmony export */   MatRecycleRows: () => (/* binding */ MatRecycleRows),
/* harmony export */   MatRow: () => (/* binding */ MatRow),
/* harmony export */   MatRowDef: () => (/* binding */ MatRowDef),
/* harmony export */   MatTable: () => (/* binding */ MatTable),
/* harmony export */   MatTableDataSource: () => (/* binding */ MatTableDataSource),
/* harmony export */   MatTableModule: () => (/* binding */ MatTableModule),
/* harmony export */   MatTextColumn: () => (/* binding */ MatTextColumn)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ 90198);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ 41572);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ 98092);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/collections */ 60504);
/* harmony import */ var _common_module_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common-module.mjs */ 80097);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 63617);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/coercion */ 26338);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 70271);











/**
 * Enables the recycle view repeater strategy, which reduces rendering latency. Not compatible with
 * tables that animate rows.
 */
const _c0 = [[["caption"]], [["colgroup"], ["col"]], "*"];
const _c1 = ["caption", "colgroup, col", "*"];
function MatTable_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0, 2);
  }
}
function MatTable_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "thead", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tbody", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](3, 3)(4, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "tfoot", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](6, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function MatTable_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, 1)(1, 3)(2, 4)(3, 5);
  }
}
function MatTextColumn_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("text-align", ctx_r0.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.headerText, " ");
  }
}
function MatTextColumn_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("text-align", ctx_r0.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.dataAccessor(data_r2, ctx_r0.name), " ");
  }
}
let MatRecycleRows = /*#__PURE__*/(() => {
  class MatRecycleRows {
    static ɵfac = function MatRecycleRows_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatRecycleRows)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatRecycleRows,
      selectors: [["mat-table", "recycleRows", ""], ["table", "mat-table", "", "recycleRows", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__._VIEW_REPEATER_STRATEGY,
        useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__._RecycleViewRepeaterStrategy
      }])]
    });
  }
  return MatRecycleRows;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatTable = /*#__PURE__*/(() => {
  class MatTable extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.CdkTable {
    /** Overrides the sticky CSS class set by the `CdkTable`. */
    stickyCssClass = 'mat-mdc-table-sticky';
    /** Overrides the need to add position: sticky on every sticky cell element in `CdkTable`. */
    needsPositionStickyOnElement = false;
    static ɵfac = /* @__PURE__ */(() => {
      let ɵMatTable_BaseFactory;
      return function MatTable_Factory(__ngFactoryType__) {
        return (ɵMatTable_BaseFactory || (ɵMatTable_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatTable)))(__ngFactoryType__ || MatTable);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatTable,
      selectors: [["mat-table"], ["table", "mat-table", ""]],
      hostAttrs: [1, "mat-mdc-table", "mdc-data-table__table"],
      hostVars: 2,
      hostBindings: function MatTable_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mdc-table-fixed-layout", ctx.fixedLayout);
        }
      },
      exportAs: ["matTable"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.CdkTable,
        useExisting: MatTable
      }, {
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.CDK_TABLE,
        useExisting: MatTable
      },
      // TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
      //  is only included in the build if used.
      {
        provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__._VIEW_REPEATER_STRATEGY,
        useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__._DisposeViewRepeaterStrategy
      },
      // Prevent nested tables from seeing this table's StickyPositioningListener.
      {
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.STICKY_POSITIONING_LISTENER,
        useValue: null
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c1,
      decls: 5,
      vars: 2,
      consts: [["role", "rowgroup"], ["headerRowOutlet", ""], ["role", "rowgroup", 1, "mdc-data-table__content"], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
      template: function MatTable_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditionalCreate"](2, MatTable_Conditional_2_Template, 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditionalCreate"](3, MatTable_Conditional_3_Template, 7, 0)(4, MatTable_Conditional_4_Template, 4, 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx._isServer ? 2 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx._isNativeHtmlTable ? 3 : 4);
        }
      },
      dependencies: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.HeaderRowOutlet, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.DataRowOutlet, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.NoDataRowOutlet, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.FooterRowOutlet],
      styles: [".mat-mdc-table-sticky{position:sticky !important}mat-table{display:block}mat-header-row{min-height:var(--mat-table-header-container-height, 56px)}mat-row{min-height:var(--mat-table-row-item-container-height, 52px)}mat-footer-row{min-height:var(--mat-table-footer-container-height, 52px)}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}.mat-mdc-table{min-width:100%;border:0;border-spacing:0;table-layout:auto;white-space:normal;background-color:var(--mat-table-background-color, var(--mat-sys-surface))}.mdc-data-table__cell{box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell{text-align:right}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:0 16px}.mat-mdc-header-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-header-container-height, 56px);color:var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));line-height:var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));font-size:var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));font-weight:var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500))}.mat-mdc-row{height:var(--mat-table-row-item-container-height, 52px);color:var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)))}.mat-mdc-row,.mdc-data-table__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));line-height:var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));font-weight:var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-footer-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-footer-container-height, 52px);color:var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));line-height:var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));font-weight:var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));letter-spacing:var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking))}.mat-mdc-header-cell{border-bottom-color:var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));font-weight:inherit;line-height:inherit;box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mat-mdc-header-cell{text-align:right}.mdc-data-table__row:last-child>.mat-mdc-header-cell{border-bottom:none}.mat-mdc-cell{border-bottom-color:var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));line-height:inherit}.mdc-data-table__row:last-child>.mat-mdc-cell{border-bottom:none}.mat-mdc-footer-cell{letter-spacing:var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking))}mat-row.mat-mdc-row,mat-header-row.mat-mdc-header-row,mat-footer-row.mat-mdc-footer-row{border-bottom:none}.mat-mdc-table tbody,.mat-mdc-table tfoot,.mat-mdc-table thead,.mat-mdc-cell,.mat-mdc-footer-cell,.mat-mdc-header-row,.mat-mdc-row,.mat-mdc-footer-row,.mat-mdc-table .mat-mdc-header-cell{background:inherit}.mat-mdc-table mat-header-row.mat-mdc-header-row,.mat-mdc-table mat-row.mat-mdc-row,.mat-mdc-table mat-footer-row.mat-mdc-footer-cell{height:unset}mat-header-cell.mat-mdc-header-cell,mat-cell.mat-mdc-cell,mat-footer-cell.mat-mdc-footer-cell{align-self:stretch}\n"],
      encapsulation: 2
    });
  }
  return MatTable;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Cell definition for the mat-table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
let MatCellDef = /*#__PURE__*/(() => {
  class MatCellDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.CdkCellDef {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵMatCellDef_BaseFactory;
      return function MatCellDef_Factory(__ngFactoryType__) {
        return (ɵMatCellDef_BaseFactory || (ɵMatCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatCellDef)))(__ngFactoryType__ || MatCellDef);
      };
    })();
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatCellDef,
      selectors: [["", "matCellDef", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.CdkCellDef,
        useExisting: MatCellDef
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return MatCellDef;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Header cell definition for the mat-table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
let MatHeaderCellDef = /*#__PURE__*/(() => {
  class MatHeaderCellDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.CdkHeaderCellDef {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵMatHeaderCellDef_BaseFactory;
      return function MatHeaderCellDef_Factory(__ngFactoryType__) {
        return (ɵMatHeaderCellDef_BaseFactory || (ɵMatHeaderCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatHeaderCellDef)))(__ngFactoryType__ || MatHeaderCellDef);
      };
    })();
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatHeaderCellDef,
      selectors: [["", "matHeaderCellDef", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.CdkHeaderCellDef,
        useExisting: MatHeaderCellDef
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return MatHeaderCellDef;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Footer cell definition for the mat-table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
let MatFooterCellDef = /*#__PURE__*/(() => {
  class MatFooterCellDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.CdkFooterCellDef {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵMatFooterCellDef_BaseFactory;
      return function MatFooterCellDef_Factory(__ngFactoryType__) {
        return (ɵMatFooterCellDef_BaseFactory || (ɵMatFooterCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatFooterCellDef)))(__ngFactoryType__ || MatFooterCellDef);
      };
    })();
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatFooterCellDef,
      selectors: [["", "matFooterCellDef", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.CdkFooterCellDef,
        useExisting: MatFooterCellDef
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return MatFooterCellDef;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Column definition for the mat-table.
 * Defines a set of cells available for a table column.
 */
let MatColumnDef = /*#__PURE__*/(() => {
  class MatColumnDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.CdkColumnDef {
    /** Unique name for this column. */
    get name() {
      return this._name;
    }
    set name(name) {
      this._setNameInput(name);
    }
    /**
     * Add "mat-column-" prefix in addition to "cdk-column-" prefix.
     * In the future, this will only add "mat-column-" and columnCssClassName
     * will change from type string[] to string.
     * @docs-private
     */
    _updateColumnCssClassName() {
      super._updateColumnCssClassName();
      this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`);
    }
    static ɵfac = /* @__PURE__ */(() => {
      let ɵMatColumnDef_BaseFactory;
      return function MatColumnDef_Factory(__ngFactoryType__) {
        return (ɵMatColumnDef_BaseFactory || (ɵMatColumnDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatColumnDef)))(__ngFactoryType__ || MatColumnDef);
      };
    })();
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatColumnDef,
      selectors: [["", "matColumnDef", ""]],
      inputs: {
        name: [0, "matColumnDef", "name"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.CdkColumnDef,
        useExisting: MatColumnDef
      }, {
        provide: 'MAT_SORT_HEADER_COLUMN_DEF',
        useExisting: MatColumnDef
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return MatColumnDef;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Header cell template container that adds the right classes and role. */
let MatHeaderCell = /*#__PURE__*/(() => {
  class MatHeaderCell extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.CdkHeaderCell {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵMatHeaderCell_BaseFactory;
      return function MatHeaderCell_Factory(__ngFactoryType__) {
        return (ɵMatHeaderCell_BaseFactory || (ɵMatHeaderCell_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatHeaderCell)))(__ngFactoryType__ || MatHeaderCell);
      };
    })();
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatHeaderCell,
      selectors: [["mat-header-cell"], ["th", "mat-header-cell", ""]],
      hostAttrs: ["role", "columnheader", 1, "mat-mdc-header-cell", "mdc-data-table__header-cell"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return MatHeaderCell;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Footer cell template container that adds the right classes and role. */
let MatFooterCell = /*#__PURE__*/(() => {
  class MatFooterCell extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.CdkFooterCell {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵMatFooterCell_BaseFactory;
      return function MatFooterCell_Factory(__ngFactoryType__) {
        return (ɵMatFooterCell_BaseFactory || (ɵMatFooterCell_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatFooterCell)))(__ngFactoryType__ || MatFooterCell);
      };
    })();
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatFooterCell,
      selectors: [["mat-footer-cell"], ["td", "mat-footer-cell", ""]],
      hostAttrs: [1, "mat-mdc-footer-cell", "mdc-data-table__cell"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return MatFooterCell;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Cell template container that adds the right classes and role. */
let MatCell = /*#__PURE__*/(() => {
  class MatCell extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.CdkCell {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵMatCell_BaseFactory;
      return function MatCell_Factory(__ngFactoryType__) {
        return (ɵMatCell_BaseFactory || (ɵMatCell_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatCell)))(__ngFactoryType__ || MatCell);
      };
    })();
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatCell,
      selectors: [["mat-cell"], ["td", "mat-cell", ""]],
      hostAttrs: [1, "mat-mdc-cell", "mdc-data-table__cell"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return MatCell;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

// We can't reuse `CDK_ROW_TEMPLATE` because it's incompatible with local compilation mode.
const ROW_TEMPLATE = `<ng-container cdkCellOutlet></ng-container>`;
/**
 * Header row definition for the mat-table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
let MatHeaderRowDef = /*#__PURE__*/(() => {
  class MatHeaderRowDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.CdkHeaderRowDef {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵMatHeaderRowDef_BaseFactory;
      return function MatHeaderRowDef_Factory(__ngFactoryType__) {
        return (ɵMatHeaderRowDef_BaseFactory || (ɵMatHeaderRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatHeaderRowDef)))(__ngFactoryType__ || MatHeaderRowDef);
      };
    })();
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatHeaderRowDef,
      selectors: [["", "matHeaderRowDef", ""]],
      inputs: {
        columns: [0, "matHeaderRowDef", "columns"],
        sticky: [2, "matHeaderRowDefSticky", "sticky", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.CdkHeaderRowDef,
        useExisting: MatHeaderRowDef
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return MatHeaderRowDef;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Footer row definition for the mat-table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */
let MatFooterRowDef = /*#__PURE__*/(() => {
  class MatFooterRowDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.CdkFooterRowDef {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵMatFooterRowDef_BaseFactory;
      return function MatFooterRowDef_Factory(__ngFactoryType__) {
        return (ɵMatFooterRowDef_BaseFactory || (ɵMatFooterRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatFooterRowDef)))(__ngFactoryType__ || MatFooterRowDef);
      };
    })();
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatFooterRowDef,
      selectors: [["", "matFooterRowDef", ""]],
      inputs: {
        columns: [0, "matFooterRowDef", "columns"],
        sticky: [2, "matFooterRowDefSticky", "sticky", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.CdkFooterRowDef,
        useExisting: MatFooterRowDef
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return MatFooterRowDef;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Data row definition for the mat-table.
 * Captures the data row's template and other properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 */
let MatRowDef = /*#__PURE__*/(() => {
  class MatRowDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.CdkRowDef {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵMatRowDef_BaseFactory;
      return function MatRowDef_Factory(__ngFactoryType__) {
        return (ɵMatRowDef_BaseFactory || (ɵMatRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatRowDef)))(__ngFactoryType__ || MatRowDef);
      };
    })();
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatRowDef,
      selectors: [["", "matRowDef", ""]],
      inputs: {
        columns: [0, "matRowDefColumns", "columns"],
        when: [0, "matRowDefWhen", "when"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.CdkRowDef,
        useExisting: MatRowDef
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return MatRowDef;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Header template container that contains the cell outlet. Adds the right class and role. */
let MatHeaderRow = /*#__PURE__*/(() => {
  class MatHeaderRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.CdkHeaderRow {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵMatHeaderRow_BaseFactory;
      return function MatHeaderRow_Factory(__ngFactoryType__) {
        return (ɵMatHeaderRow_BaseFactory || (ɵMatHeaderRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatHeaderRow)))(__ngFactoryType__ || MatHeaderRow);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatHeaderRow,
      selectors: [["mat-header-row"], ["tr", "mat-header-row", ""]],
      hostAttrs: ["role", "row", 1, "mat-mdc-header-row", "mdc-data-table__header-row"],
      exportAs: ["matHeaderRow"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.CdkHeaderRow,
        useExisting: MatHeaderRow
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 0,
      consts: [["cdkCellOutlet", ""]],
      template: function MatHeaderRow_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, 0);
        }
      },
      dependencies: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.CdkCellOutlet],
      encapsulation: 2
    });
  }
  return MatHeaderRow;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Footer template container that contains the cell outlet. Adds the right class and role. */
let MatFooterRow = /*#__PURE__*/(() => {
  class MatFooterRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.CdkFooterRow {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵMatFooterRow_BaseFactory;
      return function MatFooterRow_Factory(__ngFactoryType__) {
        return (ɵMatFooterRow_BaseFactory || (ɵMatFooterRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatFooterRow)))(__ngFactoryType__ || MatFooterRow);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatFooterRow,
      selectors: [["mat-footer-row"], ["tr", "mat-footer-row", ""]],
      hostAttrs: ["role", "row", 1, "mat-mdc-footer-row", "mdc-data-table__row"],
      exportAs: ["matFooterRow"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.CdkFooterRow,
        useExisting: MatFooterRow
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 0,
      consts: [["cdkCellOutlet", ""]],
      template: function MatFooterRow_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, 0);
        }
      },
      dependencies: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.CdkCellOutlet],
      encapsulation: 2
    });
  }
  return MatFooterRow;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Data row template container that contains the cell outlet. Adds the right class and role. */
let MatRow = /*#__PURE__*/(() => {
  class MatRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.CdkRow {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵMatRow_BaseFactory;
      return function MatRow_Factory(__ngFactoryType__) {
        return (ɵMatRow_BaseFactory || (ɵMatRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatRow)))(__ngFactoryType__ || MatRow);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatRow,
      selectors: [["mat-row"], ["tr", "mat-row", ""]],
      hostAttrs: ["role", "row", 1, "mat-mdc-row", "mdc-data-table__row"],
      exportAs: ["matRow"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.CdkRow,
        useExisting: MatRow
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 0,
      consts: [["cdkCellOutlet", ""]],
      template: function MatRow_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, 0);
        }
      },
      dependencies: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.CdkCellOutlet],
      encapsulation: 2
    });
  }
  return MatRow;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Row that can be used to display a message when no data is shown in the table. */
let MatNoDataRow = /*#__PURE__*/(() => {
  class MatNoDataRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.CdkNoDataRow {
    _cellSelector = 'td, mat-cell, [mat-cell], .mat-cell';
    constructor() {
      super();
      this._contentClassNames.push('mat-mdc-no-data-row', 'mat-mdc-row', 'mdc-data-table__row');
      this._cellClassNames.push('mat-mdc-cell', 'mdc-data-table__cell', 'mat-no-data-cell');
    }
    static ɵfac = function MatNoDataRow_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatNoDataRow)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatNoDataRow,
      selectors: [["ng-template", "matNoDataRow", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.CdkNoDataRow,
        useExisting: MatNoDataRow
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return MatNoDataRow;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Column that simply shows text content for the header and row cells. Assumes that the table
 * is using the native table implementation (`<table>`).
 *
 * By default, the name of this column will be the header text and data property accessor.
 * The header text can be overridden with the `headerText` input. Cell values can be overridden with
 * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
 * input.
 */
let MatTextColumn = /*#__PURE__*/(() => {
  class MatTextColumn extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.CdkTextColumn {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵMatTextColumn_BaseFactory;
      return function MatTextColumn_Factory(__ngFactoryType__) {
        return (ɵMatTextColumn_BaseFactory || (ɵMatTextColumn_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatTextColumn)))(__ngFactoryType__ || MatTextColumn);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatTextColumn,
      selectors: [["mat-text-column"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 3,
      vars: 0,
      consts: [["matColumnDef", ""], ["mat-header-cell", "", 3, "text-align", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "text-align", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""]],
      template: function MatTextColumn_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MatTextColumn_th_1_Template, 2, 3, "th", 1)(2, MatTextColumn_td_2_Template, 2, 3, "td", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }
      },
      dependencies: [MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell],
      encapsulation: 2
    });
  }
  return MatTextColumn;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const EXPORTED_DECLARATIONS = [
// Table
MatTable, MatRecycleRows,
// Template defs
MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef,
// Cell directives
MatHeaderCell, MatCell, MatFooterCell,
// Row directives
MatHeaderRow, MatRow, MatFooterRow, MatNoDataRow, MatTextColumn];
let MatTableModule = /*#__PURE__*/(() => {
  class MatTableModule {
    static ɵfac = function MatTableModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MatTableModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MatTableModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_common_module_mjs__WEBPACK_IMPORTED_MODULE_7__.MatCommonModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__.CdkTableModule, _common_module_mjs__WEBPACK_IMPORTED_MODULE_7__.MatCommonModule]
    });
  }
  return MatTableModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Corresponds to `Number.MAX_SAFE_INTEGER`. Moved out into a variable here due to
 * flaky browser support and the value not being defined in Closure's typings.
 */
const MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Data source that accepts a client-side data array and includes native support of filtering,
 * sorting (using MatSort), and pagination (using MatPaginator).
 *
 * Allows for sort customization by overriding sortingDataAccessor, which defines how data
 * properties are accessed. Also allows for filter customization by overriding filterPredicate,
 * which defines how row data is converted to a string for filter matching.
 *
 * **Note:** This class is meant to be a simple data source to help you get started. As such
 * it isn't equipped to handle some more advanced cases like robust i18n support or server-side
 * interactions. If your app needs to support more advanced use cases, consider implementing your
 * own `DataSource`.
 */
class MatTableDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.DataSource {
  /** Stream that emits when a new data array is set on the data source. */
  _data;
  /** Stream emitting render data to the table (depends on ordered data changes). */
  _renderData = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject([]);
  /** Stream that emits when a new filter string is set on the data source. */
  _filter = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject('');
  /** Used to react to internal changes of the paginator that are made by the data source itself. */
  _internalPageChanges = /*#__PURE__*/new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
  /**
   * Subscription to the changes that should trigger an update to the table's rendered rows, such
   * as filtering, sorting, pagination, or base data changes.
   */
  _renderChangesSubscription = null;
  /**
   * The filtered set of data that has been matched by the filter string, or all the data if there
   * is no filter. Useful for knowing the set of data the table represents.
   * For example, a 'selectAll()' function would likely want to select the set of filtered data
   * shown to the user rather than all the data.
   */
  filteredData;
  /** Array of data that should be rendered by the table, where each object represents one row. */
  get data() {
    return this._data.value;
  }
  set data(data) {
    data = Array.isArray(data) ? data : [];
    this._data.next(data);
    // Normally the `filteredData` is updated by the re-render
    // subscription, but that won't happen if it's inactive.
    if (!this._renderChangesSubscription) {
      this._filterData(data);
    }
  }
  /**
   * Filter term that should be used to filter out objects from the data array. To override how
   * data objects match to this filter string, provide a custom function for filterPredicate.
   */
  get filter() {
    return this._filter.value;
  }
  set filter(filter) {
    this._filter.next(filter);
    // Normally the `filteredData` is updated by the re-render
    // subscription, but that won't happen if it's inactive.
    if (!this._renderChangesSubscription) {
      this._filterData(this.data);
    }
  }
  /**
   * Instance of the MatSort directive used by the table to control its sorting. Sort changes
   * emitted by the MatSort will trigger an update to the table's rendered data.
   */
  get sort() {
    return this._sort;
  }
  set sort(sort) {
    this._sort = sort;
    this._updateChangeSubscription();
  }
  _sort;
  /**
   * Instance of the paginator component used by the table to control what page of the data is
   * displayed. Page changes emitted by the paginator will trigger an update to the
   * table's rendered data.
   *
   * Note that the data source uses the paginator's properties to calculate which page of data
   * should be displayed. If the paginator receives its properties as template inputs,
   * e.g. `[pageLength]=100` or `[pageIndex]=1`, then be sure that the paginator's view has been
   * initialized before assigning it to this data source.
   */
  get paginator() {
    return this._paginator;
  }
  set paginator(paginator) {
    this._paginator = paginator;
    this._updateChangeSubscription();
  }
  _paginator;
  /**
   * Data accessor function that is used for accessing data properties for sorting through
   * the default sortData function.
   * This default function assumes that the sort header IDs (which defaults to the column name)
   * matches the data's properties (e.g. column Xyz represents data['Xyz']).
   * May be set to a custom function for different behavior.
   * @param data Data object that is being accessed.
   * @param sortHeaderId The name of the column that represents the data.
   */
  sortingDataAccessor = (data, sortHeaderId) => {
    const value = data[sortHeaderId];
    if ((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__._isNumberValue)(value)) {
      const numberValue = Number(value);
      // Numbers beyond `MAX_SAFE_INTEGER` can't be compared reliably so we leave them as strings.
      // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
      return numberValue < MAX_SAFE_INTEGER ? numberValue : value;
    }
    return value;
  };
  /**
   * Gets a sorted copy of the data array based on the state of the MatSort. Called
   * after changes are made to the filtered data or when sort changes are emitted from MatSort.
   * By default, the function retrieves the active sort and its direction and compares data
   * by retrieving data using the sortingDataAccessor. May be overridden for a custom implementation
   * of data ordering.
   * @param data The array of data that should be sorted.
   * @param sort The connected MatSort that holds the current sort state.
   */
  sortData = (data, sort) => {
    const active = sort.active;
    const direction = sort.direction;
    if (!active || direction == '') {
      return data;
    }
    return data.sort((a, b) => {
      let valueA = this.sortingDataAccessor(a, active);
      let valueB = this.sortingDataAccessor(b, active);
      // If there are data in the column that can be converted to a number,
      // it must be ensured that the rest of the data
      // is of the same type so as not to order incorrectly.
      const valueAType = typeof valueA;
      const valueBType = typeof valueB;
      if (valueAType !== valueBType) {
        if (valueAType === 'number') {
          valueA += '';
        }
        if (valueBType === 'number') {
          valueB += '';
        }
      }
      // If both valueA and valueB exist (truthy), then compare the two. Otherwise, check if
      // one value exists while the other doesn't. In this case, existing value should come last.
      // This avoids inconsistent results when comparing values to undefined/null.
      // If neither value exists, return 0 (equal).
      let comparatorResult = 0;
      if (valueA != null && valueB != null) {
        // Check if one value is greater than the other; if equal, comparatorResult should remain 0.
        if (valueA > valueB) {
          comparatorResult = 1;
        } else if (valueA < valueB) {
          comparatorResult = -1;
        }
      } else if (valueA != null) {
        comparatorResult = 1;
      } else if (valueB != null) {
        comparatorResult = -1;
      }
      return comparatorResult * (direction == 'asc' ? 1 : -1);
    });
  };
  /**
   * Checks if a data object matches the data source's filter string. By default, each data object
   * is converted to a string of its properties and returns true if the filter has
   * at least one occurrence in that string. By default, the filter string has its whitespace
   * trimmed and the match is case-insensitive. May be overridden for a custom implementation of
   * filter matching.
   * @param data Data object used to check against the filter.
   * @param filter Filter string that has been set on the data source.
   * @returns Whether the filter matches against the data
   */
  filterPredicate = (data, filter) => {
    // Transform the filter by converting it to lowercase and removing whitespace.
    const transformedFilter = filter.trim().toLowerCase();
    // Loops over the values in the array and returns true if any of them match the filter string
    return Object.values(data).some(value => `${value}`.toLowerCase().includes(transformedFilter));
  };
  constructor(initialData = []) {
    super();
    this._data = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(initialData);
    this._updateChangeSubscription();
  }
  /**
   * Subscribe to changes that should trigger an update to the table's rendered rows. When the
   * changes occur, process the current state of the filter, sort, and pagination along with
   * the provided base data and send it to the table for rendering.
   */
  _updateChangeSubscription() {
    // Sorting and/or pagination should be watched if sort and/or paginator are provided.
    // The events should emit whenever the component emits a change or initializes, or if no
    // component is provided, a stream with just a null event should be provided.
    // The `sortChange` and `pageChange` acts as a signal to the combineLatests below so that the
    // pipeline can progress to the next step. Note that the value from these streams are not used,
    // they purely act as a signal to progress in the pipeline.
    const sortChange = this._sort ? (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)(this._sort.sortChange, this._sort.initialized) : (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(null);
    const pageChange = this._paginator ? (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)(this._paginator.page, this._internalPageChanges, this._paginator.initialized) : (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(null);
    const dataStream = this._data;
    // Watch for base data or filter changes to provide a filtered set of data.
    const filteredData = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([dataStream, this._filter]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(([data]) => this._filterData(data)));
    // Watch for filtered data or sort changes to provide an ordered set of data.
    const orderedData = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([filteredData, sortChange]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(([data]) => this._orderData(data)));
    // Watch for ordered data or page changes to provide a paged set of data.
    const paginatedData = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([orderedData, pageChange]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(([data]) => this._pageData(data)));
    // Watched for paged data changes and send the result to the table to render.
    this._renderChangesSubscription?.unsubscribe();
    this._renderChangesSubscription = paginatedData.subscribe(data => this._renderData.next(data));
  }
  /**
   * Returns a filtered data array where each filter object contains the filter string within
   * the result of the filterPredicate function. If no filter is set, returns the data array
   * as provided.
   */
  _filterData(data) {
    // If there is a filter string, filter out data that does not contain it.
    // Each data object is converted to a string using the function defined by filterPredicate.
    // May be overridden for customization.
    this.filteredData = this.filter == null || this.filter === '' ? data : data.filter(obj => this.filterPredicate(obj, this.filter));
    if (this.paginator) {
      this._updatePaginator(this.filteredData.length);
    }
    return this.filteredData;
  }
  /**
   * Returns a sorted copy of the data if MatSort has a sort applied, otherwise just returns the
   * data array as provided. Uses the default data accessor for data lookup, unless a
   * sortDataAccessor function is defined.
   */
  _orderData(data) {
    // If there is no active sort or direction, return the data without trying to sort.
    if (!this.sort) {
      return data;
    }
    return this.sortData(data.slice(), this.sort);
  }
  /**
   * Returns a paged slice of the provided data array according to the provided paginator's page
   * index and length. If there is no paginator provided, returns the data array as provided.
   */
  _pageData(data) {
    if (!this.paginator) {
      return data;
    }
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.slice(startIndex, startIndex + this.paginator.pageSize);
  }
  /**
   * Updates the paginator to reflect the length of the filtered data, and makes sure that the page
   * index does not exceed the paginator's last page. Values are changed in a resolved promise to
   * guard against making property changes within a round of change detection.
   */
  _updatePaginator(filteredDataLength) {
    Promise.resolve().then(() => {
      const paginator = this.paginator;
      if (!paginator) {
        return;
      }
      paginator.length = filteredDataLength;
      // If the page index is set beyond the page, reduce it to the last page.
      if (paginator.pageIndex > 0) {
        const lastPageIndex = Math.ceil(paginator.length / paginator.pageSize) - 1 || 0;
        const newPageIndex = Math.min(paginator.pageIndex, lastPageIndex);
        if (newPageIndex !== paginator.pageIndex) {
          paginator.pageIndex = newPageIndex;
          // Since the paginator only emits after user-generated changes,
          // we need our own stream so we know to should re-render the data.
          this._internalPageChanges.next();
        }
      }
    });
  }
  /**
   * Used by the MatTable. Called when it connects to the data source.
   * @docs-private
   */
  connect() {
    if (!this._renderChangesSubscription) {
      this._updateChangeSubscription();
    }
    return this._renderData;
  }
  /**
   * Used by the MatTable. Called when it disconnects from the data source.
   * @docs-private
   */
  disconnect() {
    this._renderChangesSubscription?.unsubscribe();
    this._renderChangesSubscription = null;
  }
}


/***/ }),

/***/ 90198:
/*!******************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/table.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseCdkCell: () => (/* binding */ BaseCdkCell),
/* harmony export */   BaseRowDef: () => (/* binding */ BaseRowDef),
/* harmony export */   CDK_ROW_TEMPLATE: () => (/* binding */ CDK_ROW_TEMPLATE),
/* harmony export */   CDK_TABLE: () => (/* binding */ CDK_TABLE),
/* harmony export */   CdkCell: () => (/* binding */ CdkCell),
/* harmony export */   CdkCellDef: () => (/* binding */ CdkCellDef),
/* harmony export */   CdkCellOutlet: () => (/* binding */ CdkCellOutlet),
/* harmony export */   CdkColumnDef: () => (/* binding */ CdkColumnDef),
/* harmony export */   CdkFooterCell: () => (/* binding */ CdkFooterCell),
/* harmony export */   CdkFooterCellDef: () => (/* binding */ CdkFooterCellDef),
/* harmony export */   CdkFooterRow: () => (/* binding */ CdkFooterRow),
/* harmony export */   CdkFooterRowDef: () => (/* binding */ CdkFooterRowDef),
/* harmony export */   CdkHeaderCell: () => (/* binding */ CdkHeaderCell),
/* harmony export */   CdkHeaderCellDef: () => (/* binding */ CdkHeaderCellDef),
/* harmony export */   CdkHeaderRow: () => (/* binding */ CdkHeaderRow),
/* harmony export */   CdkHeaderRowDef: () => (/* binding */ CdkHeaderRowDef),
/* harmony export */   CdkNoDataRow: () => (/* binding */ CdkNoDataRow),
/* harmony export */   CdkRecycleRows: () => (/* binding */ CdkRecycleRows),
/* harmony export */   CdkRow: () => (/* binding */ CdkRow),
/* harmony export */   CdkRowDef: () => (/* binding */ CdkRowDef),
/* harmony export */   CdkTable: () => (/* binding */ CdkTable),
/* harmony export */   CdkTableModule: () => (/* binding */ CdkTableModule),
/* harmony export */   CdkTextColumn: () => (/* binding */ CdkTextColumn),
/* harmony export */   DataRowOutlet: () => (/* binding */ DataRowOutlet),
/* harmony export */   DataSource: () => (/* reexport safe */ _data_source_mjs__WEBPACK_IMPORTED_MODULE_0__.DataSource),
/* harmony export */   FooterRowOutlet: () => (/* binding */ FooterRowOutlet),
/* harmony export */   HeaderRowOutlet: () => (/* binding */ HeaderRowOutlet),
/* harmony export */   NoDataRowOutlet: () => (/* binding */ NoDataRowOutlet),
/* harmony export */   STICKY_POSITIONING_LISTENER: () => (/* binding */ STICKY_POSITIONING_LISTENER),
/* harmony export */   TEXT_COLUMN_OPTIONS: () => (/* binding */ TEXT_COLUMN_OPTIONS)
/* harmony export */ });
/* harmony import */ var _data_source_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-source.mjs */ 98092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 72551);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 33900);
/* harmony import */ var _recycle_view_repeater_strategy_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recycle-view-repeater-strategy.mjs */ 41572);
/* harmony import */ var _dispose_view_repeater_strategy_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dispose-view-repeater-strategy.mjs */ 60504);
/* harmony import */ var _directionality_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directionality.mjs */ 17170);
/* harmony import */ var _platform2_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./platform2.mjs */ 37579);
/* harmony import */ var _scrolling_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./scrolling.mjs */ 79975);

const _c0 = [[["caption"]], [["colgroup"], ["col"]], "*"];
const _c1 = ["caption", "colgroup, col", "*"];
function CdkTable_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0, 2);
  }
}
function CdkTable_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "thead", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "tbody", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](3, 2)(4, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "tfoot", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](6, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CdkTable_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, 1)(1, 2)(2, 3)(3, 4);
  }
}
function CdkTextColumn_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("text-align", ctx_r0.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.headerText, " ");
  }
}
function CdkTextColumn_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("text-align", ctx_r0.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.dataAccessor(data_r2, ctx_r0.name), " ");
  }
}















/**
 * Used to provide a table to some of the sub-components without causing a circular dependency.
 * @docs-private
 */
const CDK_TABLE = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('CDK_TABLE');
/** Injection token that can be used to specify the text column options. */
const TEXT_COLUMN_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('text-column-options');

/**
 * Cell definition for a CDK table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
let CdkCellDef = /*#__PURE__*/(() => {
  class CdkCellDef {
    /** @docs-private */
    template = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef);
    constructor() {}
    static ɵfac = function CdkCellDef_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkCellDef)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: CdkCellDef,
      selectors: [["", "cdkCellDef", ""]]
    });
  }
  return CdkCellDef;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Header cell definition for a CDK table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
let CdkHeaderCellDef = /*#__PURE__*/(() => {
  class CdkHeaderCellDef {
    /** @docs-private */
    template = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef);
    constructor() {}
    static ɵfac = function CdkHeaderCellDef_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkHeaderCellDef)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: CdkHeaderCellDef,
      selectors: [["", "cdkHeaderCellDef", ""]]
    });
  }
  return CdkHeaderCellDef;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Footer cell definition for a CDK table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
let CdkFooterCellDef = /*#__PURE__*/(() => {
  class CdkFooterCellDef {
    /** @docs-private */
    template = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef);
    constructor() {}
    static ɵfac = function CdkFooterCellDef_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkFooterCellDef)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: CdkFooterCellDef,
      selectors: [["", "cdkFooterCellDef", ""]]
    });
  }
  return CdkFooterCellDef;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Column definition for the CDK table.
 * Defines a set of cells available for a table column.
 */
let CdkColumnDef = /*#__PURE__*/(() => {
  class CdkColumnDef {
    _table = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(CDK_TABLE, {
      optional: true
    });
    _hasStickyChanged = false;
    /** Unique name for this column. */
    get name() {
      return this._name;
    }
    set name(name) {
      this._setNameInput(name);
    }
    _name;
    /** Whether the cell is sticky. */
    get sticky() {
      return this._sticky;
    }
    set sticky(value) {
      if (value !== this._sticky) {
        this._sticky = value;
        this._hasStickyChanged = true;
      }
    }
    _sticky = false;
    /**
     * Whether this column should be sticky positioned on the end of the row. Should make sure
     * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
     * has been changed.
     */
    get stickyEnd() {
      return this._stickyEnd;
    }
    set stickyEnd(value) {
      if (value !== this._stickyEnd) {
        this._stickyEnd = value;
        this._hasStickyChanged = true;
      }
    }
    _stickyEnd = false;
    /** @docs-private */
    cell;
    /** @docs-private */
    headerCell;
    /** @docs-private */
    footerCell;
    /**
     * Transformed version of the column name that can be used as part of a CSS classname. Excludes
     * all non-alphanumeric characters and the special characters '-' and '_'. Any characters that
     * do not match are replaced by the '-' character.
     */
    cssClassFriendlyName;
    /**
     * Class name for cells in this column.
     * @docs-private
     */
    _columnCssClassName;
    constructor() {}
    /** Whether the sticky state has changed. */
    hasStickyChanged() {
      const hasStickyChanged = this._hasStickyChanged;
      this.resetStickyChanged();
      return hasStickyChanged;
    }
    /** Resets the sticky changed state. */
    resetStickyChanged() {
      this._hasStickyChanged = false;
    }
    /**
     * Overridable method that sets the css classes that will be added to every cell in this
     * column.
     * In the future, columnCssClassName will change from type string[] to string and this
     * will set a single string value.
     * @docs-private
     */
    _updateColumnCssClassName() {
      this._columnCssClassName = [`cdk-column-${this.cssClassFriendlyName}`];
    }
    /**
     * This has been extracted to a util because of TS 4 and VE.
     * View Engine doesn't support property rename inheritance.
     * TS 4.0 doesn't allow properties to override accessors or vice-versa.
     * @docs-private
     */
    _setNameInput(value) {
      // If the directive is set without a name (updated programmatically), then this setter will
      // trigger with an empty string and should not overwrite the programmatically set value.
      if (value) {
        this._name = value;
        this.cssClassFriendlyName = value.replace(/[^a-z0-9_-]/gi, '-');
        this._updateColumnCssClassName();
      }
    }
    static ɵfac = function CdkColumnDef_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkColumnDef)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: CdkColumnDef,
      selectors: [["", "cdkColumnDef", ""]],
      contentQueries: function CdkColumnDef_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, CdkCellDef, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, CdkHeaderCellDef, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, CdkFooterCellDef, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.cell = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.headerCell = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.footerCell = _t.first);
        }
      },
      inputs: {
        name: [0, "cdkColumnDef", "name"],
        sticky: [2, "sticky", "sticky", _angular_core__WEBPACK_IMPORTED_MODULE_3__.booleanAttribute],
        stickyEnd: [2, "stickyEnd", "stickyEnd", _angular_core__WEBPACK_IMPORTED_MODULE_3__.booleanAttribute]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
        provide: 'MAT_SORT_HEADER_COLUMN_DEF',
        useExisting: CdkColumnDef
      }])]
    });
  }
  return CdkColumnDef;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Base class for the cells. Adds a CSS classname that identifies the column it renders in. */
class BaseCdkCell {
  constructor(columnDef, elementRef) {
    elementRef.nativeElement.classList.add(...columnDef._columnCssClassName);
  }
}
/** Header cell template container that adds the right classes and role. */
let CdkHeaderCell = /*#__PURE__*/(() => {
  class CdkHeaderCell extends BaseCdkCell {
    constructor() {
      super((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(CdkColumnDef), (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef));
    }
    static ɵfac = function CdkHeaderCell_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkHeaderCell)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: CdkHeaderCell,
      selectors: [["cdk-header-cell"], ["th", "cdk-header-cell", ""]],
      hostAttrs: ["role", "columnheader", 1, "cdk-header-cell"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return CdkHeaderCell;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Footer cell template container that adds the right classes and role. */
let CdkFooterCell = /*#__PURE__*/(() => {
  class CdkFooterCell extends BaseCdkCell {
    constructor() {
      const columnDef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(CdkColumnDef);
      const elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef);
      super(columnDef, elementRef);
      const role = columnDef._table?._getCellRole();
      if (role) {
        elementRef.nativeElement.setAttribute('role', role);
      }
    }
    static ɵfac = function CdkFooterCell_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkFooterCell)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: CdkFooterCell,
      selectors: [["cdk-footer-cell"], ["td", "cdk-footer-cell", ""]],
      hostAttrs: [1, "cdk-footer-cell"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return CdkFooterCell;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Cell template container that adds the right classes and role. */
let CdkCell = /*#__PURE__*/(() => {
  class CdkCell extends BaseCdkCell {
    constructor() {
      const columnDef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(CdkColumnDef);
      const elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef);
      super(columnDef, elementRef);
      const role = columnDef._table?._getCellRole();
      if (role) {
        elementRef.nativeElement.setAttribute('role', role);
      }
    }
    static ɵfac = function CdkCell_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkCell)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: CdkCell,
      selectors: [["cdk-cell"], ["td", "cdk-cell", ""]],
      hostAttrs: [1, "cdk-cell"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return CdkCell;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * The row template that can be used by the mat-table. Should not be used outside of the
 * material library.
 */
const CDK_ROW_TEMPLATE = `<ng-container cdkCellOutlet></ng-container>`;
/**
 * Base class for the CdkHeaderRowDef and CdkRowDef that handles checking their columns inputs
 * for changes and notifying the table.
 */
let BaseRowDef = /*#__PURE__*/(() => {
  class BaseRowDef {
    template = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef);
    _differs = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.IterableDiffers);
    /** The columns to be displayed on this row. */
    columns;
    /** Differ used to check if any changes were made to the columns. */
    _columnsDiffer;
    constructor() {}
    ngOnChanges(changes) {
      // Create a new columns differ if one does not yet exist. Initialize it based on initial value
      // of the columns property or an empty array if none is provided.
      if (!this._columnsDiffer) {
        const columns = changes['columns'] && changes['columns'].currentValue || [];
        this._columnsDiffer = this._differs.find(columns).create();
        this._columnsDiffer.diff(columns);
      }
    }
    /**
     * Returns the difference between the current columns and the columns from the last diff, or null
     * if there is no difference.
     */
    getColumnsDiff() {
      return this._columnsDiffer.diff(this.columns);
    }
    /** Gets this row def's relevant cell template from the provided column def. */
    extractCellTemplate(column) {
      if (this instanceof CdkHeaderRowDef) {
        return column.headerCell.template;
      }
      if (this instanceof CdkFooterRowDef) {
        return column.footerCell.template;
      } else {
        return column.cell.template;
      }
    }
    static ɵfac = function BaseRowDef_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BaseRowDef)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: BaseRowDef,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
    });
  }
  return BaseRowDef;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Header row definition for the CDK table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
let CdkHeaderRowDef = /*#__PURE__*/(() => {
  class CdkHeaderRowDef extends BaseRowDef {
    _table = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(CDK_TABLE, {
      optional: true
    });
    _hasStickyChanged = false;
    /** Whether the row is sticky. */
    get sticky() {
      return this._sticky;
    }
    set sticky(value) {
      if (value !== this._sticky) {
        this._sticky = value;
        this._hasStickyChanged = true;
      }
    }
    _sticky = false;
    constructor() {
      super((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef), (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.IterableDiffers));
    }
    // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
    // Explicitly define it so that the method is called as part of the Angular lifecycle.
    ngOnChanges(changes) {
      super.ngOnChanges(changes);
    }
    /** Whether the sticky state has changed. */
    hasStickyChanged() {
      const hasStickyChanged = this._hasStickyChanged;
      this.resetStickyChanged();
      return hasStickyChanged;
    }
    /** Resets the sticky changed state. */
    resetStickyChanged() {
      this._hasStickyChanged = false;
    }
    static ɵfac = function CdkHeaderRowDef_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkHeaderRowDef)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: CdkHeaderRowDef,
      selectors: [["", "cdkHeaderRowDef", ""]],
      inputs: {
        columns: [0, "cdkHeaderRowDef", "columns"],
        sticky: [2, "cdkHeaderRowDefSticky", "sticky", _angular_core__WEBPACK_IMPORTED_MODULE_3__.booleanAttribute]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
    });
  }
  return CdkHeaderRowDef;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Footer row definition for the CDK table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */
let CdkFooterRowDef = /*#__PURE__*/(() => {
  class CdkFooterRowDef extends BaseRowDef {
    _table = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(CDK_TABLE, {
      optional: true
    });
    _hasStickyChanged = false;
    /** Whether the row is sticky. */
    get sticky() {
      return this._sticky;
    }
    set sticky(value) {
      if (value !== this._sticky) {
        this._sticky = value;
        this._hasStickyChanged = true;
      }
    }
    _sticky = false;
    constructor() {
      super((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef), (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.IterableDiffers));
    }
    // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
    // Explicitly define it so that the method is called as part of the Angular lifecycle.
    ngOnChanges(changes) {
      super.ngOnChanges(changes);
    }
    /** Whether the sticky state has changed. */
    hasStickyChanged() {
      const hasStickyChanged = this._hasStickyChanged;
      this.resetStickyChanged();
      return hasStickyChanged;
    }
    /** Resets the sticky changed state. */
    resetStickyChanged() {
      this._hasStickyChanged = false;
    }
    static ɵfac = function CdkFooterRowDef_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkFooterRowDef)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: CdkFooterRowDef,
      selectors: [["", "cdkFooterRowDef", ""]],
      inputs: {
        columns: [0, "cdkFooterRowDef", "columns"],
        sticky: [2, "cdkFooterRowDefSticky", "sticky", _angular_core__WEBPACK_IMPORTED_MODULE_3__.booleanAttribute]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
    });
  }
  return CdkFooterRowDef;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Data row definition for the CDK table.
 * Captures the header row's template and other row properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 */
let CdkRowDef = /*#__PURE__*/(() => {
  class CdkRowDef extends BaseRowDef {
    _table = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(CDK_TABLE, {
      optional: true
    });
    /**
     * Function that should return true if this row template should be used for the provided index
     * and row data. If left undefined, this row will be considered the default row template to use
     * when no other when functions return true for the data.
     * For every row, there must be at least one when function that passes or an undefined to default.
     */
    when;
    constructor() {
      // TODO(andrewseguin): Add an input for providing a switch function to determine
      //   if this template should be used.
      super((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef), (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.IterableDiffers));
    }
    static ɵfac = function CdkRowDef_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkRowDef)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: CdkRowDef,
      selectors: [["", "cdkRowDef", ""]],
      inputs: {
        columns: [0, "cdkRowDefColumns", "columns"],
        when: [0, "cdkRowDefWhen", "when"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
    });
  }
  return CdkRowDef;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Outlet for rendering cells inside of a row or header row.
 * @docs-private
 */
let CdkCellOutlet = /*#__PURE__*/(() => {
  class CdkCellOutlet {
    _viewContainer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef);
    /** The ordered list of cells to render within this outlet's view container */
    cells;
    /** The data context to be provided to each cell */
    context;
    /**
     * Static property containing the latest constructed instance of this class.
     * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
     * createEmbeddedView. After one of these components are created, this property will provide
     * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
     * construct the cells with the provided context.
     */
    static mostRecentCellOutlet = null;
    constructor() {
      CdkCellOutlet.mostRecentCellOutlet = this;
    }
    ngOnDestroy() {
      // If this was the last outlet being rendered in the view, remove the reference
      // from the static property after it has been destroyed to avoid leaking memory.
      if (CdkCellOutlet.mostRecentCellOutlet === this) {
        CdkCellOutlet.mostRecentCellOutlet = null;
      }
    }
    static ɵfac = function CdkCellOutlet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkCellOutlet)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: CdkCellOutlet,
      selectors: [["", "cdkCellOutlet", ""]]
    });
  }
  return CdkCellOutlet;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Header template container that contains the cell outlet. Adds the right class and role. */
let CdkHeaderRow = /*#__PURE__*/(() => {
  class CdkHeaderRow {
    static ɵfac = function CdkHeaderRow_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkHeaderRow)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: CdkHeaderRow,
      selectors: [["cdk-header-row"], ["tr", "cdk-header-row", ""]],
      hostAttrs: ["role", "row", 1, "cdk-header-row"],
      decls: 1,
      vars: 0,
      consts: [["cdkCellOutlet", ""]],
      template: function CdkHeaderRow_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, 0);
        }
      },
      dependencies: [CdkCellOutlet],
      encapsulation: 2
    });
  }
  return CdkHeaderRow;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Footer template container that contains the cell outlet. Adds the right class and role. */
let CdkFooterRow = /*#__PURE__*/(() => {
  class CdkFooterRow {
    static ɵfac = function CdkFooterRow_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkFooterRow)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: CdkFooterRow,
      selectors: [["cdk-footer-row"], ["tr", "cdk-footer-row", ""]],
      hostAttrs: ["role", "row", 1, "cdk-footer-row"],
      decls: 1,
      vars: 0,
      consts: [["cdkCellOutlet", ""]],
      template: function CdkFooterRow_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, 0);
        }
      },
      dependencies: [CdkCellOutlet],
      encapsulation: 2
    });
  }
  return CdkFooterRow;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Data row template container that contains the cell outlet. Adds the right class and role. */
let CdkRow = /*#__PURE__*/(() => {
  class CdkRow {
    static ɵfac = function CdkRow_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkRow)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: CdkRow,
      selectors: [["cdk-row"], ["tr", "cdk-row", ""]],
      hostAttrs: ["role", "row", 1, "cdk-row"],
      decls: 1,
      vars: 0,
      consts: [["cdkCellOutlet", ""]],
      template: function CdkRow_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, 0);
        }
      },
      dependencies: [CdkCellOutlet],
      encapsulation: 2
    });
  }
  return CdkRow;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Row that can be used to display a message when no data is shown in the table. */
let CdkNoDataRow = /*#__PURE__*/(() => {
  class CdkNoDataRow {
    templateRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef);
    _contentClassNames = ['cdk-no-data-row', 'cdk-row'];
    _cellClassNames = ['cdk-cell', 'cdk-no-data-cell'];
    _cellSelector = 'td, cdk-cell, [cdk-cell], .cdk-cell';
    constructor() {}
    static ɵfac = function CdkNoDataRow_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkNoDataRow)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: CdkNoDataRow,
      selectors: [["ng-template", "cdkNoDataRow", ""]]
    });
  }
  return CdkNoDataRow;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Directions that can be used when setting sticky positioning.
 * @docs-private
 */
/**
 * List of all possible directions that can be used for sticky positioning.
 * @docs-private
 */
const STICKY_DIRECTIONS = ['top', 'bottom', 'left', 'right'];
/**
 * Applies and removes sticky positioning styles to the `CdkTable` rows and columns cells.
 * @docs-private
 */
class StickyStyler {
  _isNativeHtmlTable;
  _stickCellCss;
  _isBrowser;
  _needsPositionStickyOnElement;
  direction;
  _positionListener;
  _tableInjector;
  _elemSizeCache = /*#__PURE__*/new WeakMap();
  _resizeObserver = globalThis?.ResizeObserver ? /*#__PURE__*/new globalThis.ResizeObserver(entries => this._updateCachedSizes(entries)) : null;
  _updatedStickyColumnsParamsToReplay = [];
  _stickyColumnsReplayTimeout = null;
  _cachedCellWidths = [];
  _borderCellCss;
  _destroyed = false;
  /**
   * @param _isNativeHtmlTable Whether the sticky logic should be based on a table
   *     that uses the native `<table>` element.
   * @param _stickCellCss The CSS class that will be applied to every row/cell that has
   *     sticky positioning applied.
   * @param direction The directionality context of the table (ltr/rtl); affects column positioning
   *     by reversing left/right positions.
   * @param _isBrowser Whether the table is currently being rendered on the server or the client.
   * @param _needsPositionStickyOnElement Whether we need to specify position: sticky on cells
   *     using inline styles. If false, it is assumed that position: sticky is included in
   *     the component stylesheet for _stickCellCss.
   * @param _positionListener A listener that is notified of changes to sticky rows/columns
   *     and their dimensions.
   * @param _tableInjector The table's Injector.
   */
  constructor(_isNativeHtmlTable, _stickCellCss, _isBrowser = true, _needsPositionStickyOnElement = true, direction, _positionListener, _tableInjector) {
    this._isNativeHtmlTable = _isNativeHtmlTable;
    this._stickCellCss = _stickCellCss;
    this._isBrowser = _isBrowser;
    this._needsPositionStickyOnElement = _needsPositionStickyOnElement;
    this.direction = direction;
    this._positionListener = _positionListener;
    this._tableInjector = _tableInjector;
    this._borderCellCss = {
      'top': `${_stickCellCss}-border-elem-top`,
      'bottom': `${_stickCellCss}-border-elem-bottom`,
      'left': `${_stickCellCss}-border-elem-left`,
      'right': `${_stickCellCss}-border-elem-right`
    };
  }
  /**
   * Clears the sticky positioning styles from the row and its cells by resetting the `position`
   * style, setting the zIndex to 0, and unsetting each provided sticky direction.
   * @param rows The list of rows that should be cleared from sticking in the provided directions
   * @param stickyDirections The directions that should no longer be set as sticky on the rows.
   */
  clearStickyPositioning(rows, stickyDirections) {
    if (stickyDirections.includes('left') || stickyDirections.includes('right')) {
      this._removeFromStickyColumnReplayQueue(rows);
    }
    const elementsToClear = [];
    for (const row of rows) {
      // If the row isn't an element (e.g. if it's an `ng-container`),
      // it won't have inline styles or `children` so we skip it.
      if (row.nodeType !== row.ELEMENT_NODE) {
        continue;
      }
      elementsToClear.push(row, ...Array.from(row.children));
    }
    // Coalesce with sticky row/column updates (and potentially other changes like column resize).
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.afterNextRender)({
      write: () => {
        for (const element of elementsToClear) {
          this._removeStickyStyle(element, stickyDirections);
        }
      }
    }, {
      injector: this._tableInjector
    });
  }
  /**
   * Applies sticky left and right positions to the cells of each row according to the sticky
   * states of the rendered column definitions.
   * @param rows The rows that should have its set of cells stuck according to the sticky states.
   * @param stickyStartStates A list of boolean states where each state represents whether the cell
   *     in this index position should be stuck to the start of the row.
   * @param stickyEndStates A list of boolean states where each state represents whether the cell
   *     in this index position should be stuck to the end of the row.
   * @param recalculateCellWidths Whether the sticky styler should recalculate the width of each
   *     column cell. If `false` cached widths will be used instead.
   * @param replay Whether to enqueue this call for replay after a ResizeObserver update.
   */
  updateStickyColumns(rows, stickyStartStates, stickyEndStates, recalculateCellWidths = true, replay = true) {
    // Don't cache any state if none of the columns are sticky.
    if (!rows.length || !this._isBrowser || !(stickyStartStates.some(state => state) || stickyEndStates.some(state => state))) {
      this._positionListener?.stickyColumnsUpdated({
        sizes: []
      });
      this._positionListener?.stickyEndColumnsUpdated({
        sizes: []
      });
      return;
    }
    // Coalesce with sticky row updates (and potentially other changes like column resize).
    const firstRow = rows[0];
    const numCells = firstRow.children.length;
    const isRtl = this.direction === 'rtl';
    const start = isRtl ? 'right' : 'left';
    const end = isRtl ? 'left' : 'right';
    const lastStickyStart = stickyStartStates.lastIndexOf(true);
    const firstStickyEnd = stickyEndStates.indexOf(true);
    let cellWidths;
    let startPositions;
    let endPositions;
    if (replay) {
      this._updateStickyColumnReplayQueue({
        rows: [...rows],
        stickyStartStates: [...stickyStartStates],
        stickyEndStates: [...stickyEndStates]
      });
    }
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.afterNextRender)({
      earlyRead: () => {
        cellWidths = this._getCellWidths(firstRow, recalculateCellWidths);
        startPositions = this._getStickyStartColumnPositions(cellWidths, stickyStartStates);
        endPositions = this._getStickyEndColumnPositions(cellWidths, stickyEndStates);
      },
      write: () => {
        for (const row of rows) {
          for (let i = 0; i < numCells; i++) {
            const cell = row.children[i];
            if (stickyStartStates[i]) {
              this._addStickyStyle(cell, start, startPositions[i], i === lastStickyStart);
            }
            if (stickyEndStates[i]) {
              this._addStickyStyle(cell, end, endPositions[i], i === firstStickyEnd);
            }
          }
        }
        if (this._positionListener && cellWidths.some(w => !!w)) {
          this._positionListener.stickyColumnsUpdated({
            sizes: lastStickyStart === -1 ? [] : cellWidths.slice(0, lastStickyStart + 1).map((width, index) => stickyStartStates[index] ? width : null)
          });
          this._positionListener.stickyEndColumnsUpdated({
            sizes: firstStickyEnd === -1 ? [] : cellWidths.slice(firstStickyEnd).map((width, index) => stickyEndStates[index + firstStickyEnd] ? width : null).reverse()
          });
        }
      }
    }, {
      injector: this._tableInjector
    });
  }
  /**
   * Applies sticky positioning to the row's cells if using the native table layout, and to the
   * row itself otherwise.
   * @param rowsToStick The list of rows that should be stuck according to their corresponding
   *     sticky state and to the provided top or bottom position.
   * @param stickyStates A list of boolean states where each state represents whether the row
   *     should be stuck in the particular top or bottom position.
   * @param position The position direction in which the row should be stuck if that row should be
   *     sticky.
   *
   */
  stickRows(rowsToStick, stickyStates, position) {
    // Since we can't measure the rows on the server, we can't stick the rows properly.
    if (!this._isBrowser) {
      return;
    }
    // If positioning the rows to the bottom, reverse their order when evaluating the sticky
    // position such that the last row stuck will be "bottom: 0px" and so on. Note that the
    // sticky states need to be reversed as well.
    const rows = position === 'bottom' ? rowsToStick.slice().reverse() : rowsToStick;
    const states = position === 'bottom' ? stickyStates.slice().reverse() : stickyStates;
    // Measure row heights all at once before adding sticky styles to reduce layout thrashing.
    const stickyOffsets = [];
    const stickyCellHeights = [];
    const elementsToStick = [];
    // Coalesce with other sticky row updates (top/bottom), sticky columns updates
    // (and potentially other changes like column resize).
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.afterNextRender)({
      earlyRead: () => {
        for (let rowIndex = 0, stickyOffset = 0; rowIndex < rows.length; rowIndex++) {
          if (!states[rowIndex]) {
            continue;
          }
          stickyOffsets[rowIndex] = stickyOffset;
          const row = rows[rowIndex];
          elementsToStick[rowIndex] = this._isNativeHtmlTable ? Array.from(row.children) : [row];
          const height = this._retrieveElementSize(row).height;
          stickyOffset += height;
          stickyCellHeights[rowIndex] = height;
        }
      },
      write: () => {
        const borderedRowIndex = states.lastIndexOf(true);
        for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
          if (!states[rowIndex]) {
            continue;
          }
          const offset = stickyOffsets[rowIndex];
          const isBorderedRowIndex = rowIndex === borderedRowIndex;
          for (const element of elementsToStick[rowIndex]) {
            this._addStickyStyle(element, position, offset, isBorderedRowIndex);
          }
        }
        if (position === 'top') {
          this._positionListener?.stickyHeaderRowsUpdated({
            sizes: stickyCellHeights,
            offsets: stickyOffsets,
            elements: elementsToStick
          });
        } else {
          this._positionListener?.stickyFooterRowsUpdated({
            sizes: stickyCellHeights,
            offsets: stickyOffsets,
            elements: elementsToStick
          });
        }
      }
    }, {
      injector: this._tableInjector
    });
  }
  /**
   * When using the native table in Safari, sticky footer cells do not stick. The only way to stick
   * footer rows is to apply sticky styling to the tfoot container. This should only be done if
   * all footer rows are sticky. If not all footer rows are sticky, remove sticky positioning from
   * the tfoot element.
   */
  updateStickyFooterContainer(tableElement, stickyStates) {
    if (!this._isNativeHtmlTable) {
      return;
    }
    // Coalesce with other sticky updates (and potentially other changes like column resize).
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.afterNextRender)({
      write: () => {
        const tfoot = tableElement.querySelector('tfoot');
        if (tfoot) {
          if (stickyStates.some(state => !state)) {
            this._removeStickyStyle(tfoot, ['bottom']);
          } else {
            this._addStickyStyle(tfoot, 'bottom', 0, false);
          }
        }
      }
    }, {
      injector: this._tableInjector
    });
  }
  /** Triggered by the table's OnDestroy hook. */
  destroy() {
    if (this._stickyColumnsReplayTimeout) {
      clearTimeout(this._stickyColumnsReplayTimeout);
    }
    this._resizeObserver?.disconnect();
    this._destroyed = true;
  }
  /**
   * Removes the sticky style on the element by removing the sticky cell CSS class, re-evaluating
   * the zIndex, removing each of the provided sticky directions, and removing the
   * sticky position if there are no more directions.
   */
  _removeStickyStyle(element, stickyDirections) {
    if (!element.classList.contains(this._stickCellCss)) {
      return;
    }
    for (const dir of stickyDirections) {
      element.style[dir] = '';
      element.classList.remove(this._borderCellCss[dir]);
    }
    // If the element no longer has any more sticky directions, remove sticky positioning and
    // the sticky CSS class.
    // Short-circuit checking element.style[dir] for stickyDirections as they
    // were already removed above.
    const hasDirection = STICKY_DIRECTIONS.some(dir => stickyDirections.indexOf(dir) === -1 && element.style[dir]);
    if (hasDirection) {
      element.style.zIndex = this._getCalculatedZIndex(element);
    } else {
      // When not hasDirection, _getCalculatedZIndex will always return ''.
      element.style.zIndex = '';
      if (this._needsPositionStickyOnElement) {
        element.style.position = '';
      }
      element.classList.remove(this._stickCellCss);
    }
  }
  /**
   * Adds the sticky styling to the element by adding the sticky style class, changing position
   * to be sticky (and -webkit-sticky), setting the appropriate zIndex, and adding a sticky
   * direction and value.
   */
  _addStickyStyle(element, dir, dirValue, isBorderElement) {
    element.classList.add(this._stickCellCss);
    if (isBorderElement) {
      element.classList.add(this._borderCellCss[dir]);
    }
    element.style[dir] = `${dirValue}px`;
    element.style.zIndex = this._getCalculatedZIndex(element);
    if (this._needsPositionStickyOnElement) {
      element.style.cssText += 'position: -webkit-sticky; position: sticky; ';
    }
  }
  /**
   * Calculate what the z-index should be for the element, depending on what directions (top,
   * bottom, left, right) have been set. It should be true that elements with a top direction
   * should have the highest index since these are elements like a table header. If any of those
   * elements are also sticky in another direction, then they should appear above other elements
   * that are only sticky top (e.g. a sticky column on a sticky header). Bottom-sticky elements
   * (e.g. footer rows) should then be next in the ordering such that they are below the header
   * but above any non-sticky elements. Finally, left/right sticky elements (e.g. sticky columns)
   * should minimally increment so that they are above non-sticky elements but below top and bottom
   * elements.
   */
  _getCalculatedZIndex(element) {
    const zIndexIncrements = {
      top: 100,
      bottom: 10,
      left: 1,
      right: 1
    };
    let zIndex = 0;
    // Use `Iterable` instead of `Array` because TypeScript, as of 3.6.3,
    // loses the array generic type in the `for of`. But we *also* have to use `Array` because
    // typescript won't iterate over an `Iterable` unless you compile with `--downlevelIteration`
    for (const dir of STICKY_DIRECTIONS) {
      if (element.style[dir]) {
        zIndex += zIndexIncrements[dir];
      }
    }
    return zIndex ? `${zIndex}` : '';
  }
  /** Gets the widths for each cell in the provided row. */
  _getCellWidths(row, recalculateCellWidths = true) {
    if (!recalculateCellWidths && this._cachedCellWidths.length) {
      return this._cachedCellWidths;
    }
    const cellWidths = [];
    const firstRowCells = row.children;
    for (let i = 0; i < firstRowCells.length; i++) {
      const cell = firstRowCells[i];
      cellWidths.push(this._retrieveElementSize(cell).width);
    }
    this._cachedCellWidths = cellWidths;
    return cellWidths;
  }
  /**
   * Determines the left and right positions of each sticky column cell, which will be the
   * accumulation of all sticky column cell widths to the left and right, respectively.
   * Non-sticky cells do not need to have a value set since their positions will not be applied.
   */
  _getStickyStartColumnPositions(widths, stickyStates) {
    const positions = [];
    let nextPosition = 0;
    for (let i = 0; i < widths.length; i++) {
      if (stickyStates[i]) {
        positions[i] = nextPosition;
        nextPosition += widths[i];
      }
    }
    return positions;
  }
  /**
   * Determines the left and right positions of each sticky column cell, which will be the
   * accumulation of all sticky column cell widths to the left and right, respectively.
   * Non-sticky cells do not need to have a value set since their positions will not be applied.
   */
  _getStickyEndColumnPositions(widths, stickyStates) {
    const positions = [];
    let nextPosition = 0;
    for (let i = widths.length; i > 0; i--) {
      if (stickyStates[i]) {
        positions[i] = nextPosition;
        nextPosition += widths[i];
      }
    }
    return positions;
  }
  /**
   * Retreives the most recently observed size of the specified element from the cache, or
   * meaures it directly if not yet cached.
   */
  _retrieveElementSize(element) {
    const cachedSize = this._elemSizeCache.get(element);
    if (cachedSize) {
      return cachedSize;
    }
    const clientRect = element.getBoundingClientRect();
    const size = {
      width: clientRect.width,
      height: clientRect.height
    };
    if (!this._resizeObserver) {
      return size;
    }
    this._elemSizeCache.set(element, size);
    this._resizeObserver.observe(element, {
      box: 'border-box'
    });
    return size;
  }
  /**
   * Conditionally enqueue the requested sticky update and clear previously queued updates
   * for the same rows.
   */
  _updateStickyColumnReplayQueue(params) {
    this._removeFromStickyColumnReplayQueue(params.rows);
    // No need to replay if a flush is pending.
    if (!this._stickyColumnsReplayTimeout) {
      this._updatedStickyColumnsParamsToReplay.push(params);
    }
  }
  /** Remove updates for the specified rows from the queue. */
  _removeFromStickyColumnReplayQueue(rows) {
    const rowsSet = new Set(rows);
    for (const update of this._updatedStickyColumnsParamsToReplay) {
      update.rows = update.rows.filter(row => !rowsSet.has(row));
    }
    this._updatedStickyColumnsParamsToReplay = this._updatedStickyColumnsParamsToReplay.filter(update => !!update.rows.length);
  }
  /** Update _elemSizeCache with the observed sizes. */
  _updateCachedSizes(entries) {
    let needsColumnUpdate = false;
    for (const entry of entries) {
      const newEntry = entry.borderBoxSize?.length ? {
        width: entry.borderBoxSize[0].inlineSize,
        height: entry.borderBoxSize[0].blockSize
      } : {
        width: entry.contentRect.width,
        height: entry.contentRect.height
      };
      if (newEntry.width !== this._elemSizeCache.get(entry.target)?.width && isCell(entry.target)) {
        needsColumnUpdate = true;
      }
      this._elemSizeCache.set(entry.target, newEntry);
    }
    if (needsColumnUpdate && this._updatedStickyColumnsParamsToReplay.length) {
      if (this._stickyColumnsReplayTimeout) {
        clearTimeout(this._stickyColumnsReplayTimeout);
      }
      this._stickyColumnsReplayTimeout = setTimeout(() => {
        if (this._destroyed) {
          return;
        }
        for (const update of this._updatedStickyColumnsParamsToReplay) {
          this.updateStickyColumns(update.rows, update.stickyStartStates, update.stickyEndStates, true, false);
        }
        this._updatedStickyColumnsParamsToReplay = [];
        this._stickyColumnsReplayTimeout = null;
      }, 0);
    }
  }
}
function isCell(element) {
  return ['cdk-cell', 'cdk-header-cell', 'cdk-footer-cell'].some(klass => element.classList.contains(klass));
}

/**
 * Returns an error to be thrown when attempting to find an nonexistent column.
 * @param id Id whose lookup failed.
 * @docs-private
 */
function getTableUnknownColumnError(id) {
  return Error(`Could not find column with id "${id}".`);
}
/**
 * Returns an error to be thrown when two column definitions have the same name.
 * @docs-private
 */
function getTableDuplicateColumnNameError(name) {
  return Error(`Duplicate column definition name provided: "${name}".`);
}
/**
 * Returns an error to be thrown when there are multiple rows that are missing a when function.
 * @docs-private
 */
function getTableMultipleDefaultRowDefsError() {
  return Error(`There can only be one default row without a when predicate function. ` + 'Or set `multiTemplateDataRows`.');
}
/**
 * Returns an error to be thrown when there are no matching row defs for a particular set of data.
 * @docs-private
 */
function getTableMissingMatchingRowDefError(data) {
  return Error(`Could not find a matching row definition for the ` + `provided row data: ${JSON.stringify(data)}`);
}
/**
 * Returns an error to be thrown when there is no row definitions present in the content.
 * @docs-private
 */
function getTableMissingRowDefsError() {
  return Error('Missing definitions for header, footer, and row; ' + 'cannot determine which columns should be rendered.');
}
/**
 * Returns an error to be thrown when the data source does not match the compatible types.
 * @docs-private
 */
function getTableUnknownDataSourceError() {
  return Error(`Provided data source did not match an array, Observable, or DataSource`);
}
/**
 * Returns an error to be thrown when the text column cannot find a parent table to inject.
 * @docs-private
 */
function getTableTextColumnMissingParentTableError() {
  return Error(`Text column could not find a parent table for registration.`);
}
/**
 * Returns an error to be thrown when a table text column doesn't have a name.
 * @docs-private
 */
function getTableTextColumnMissingNameError() {
  return Error(`Table text column must have a name.`);
}

/** The injection token used to specify the StickyPositioningListener. */
const STICKY_POSITIONING_LISTENER = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('CDK_SPL');

/**
 * Enables the recycle view repeater strategy, which reduces rendering latency. Not compatible with
 * tables that animate rows.
 */
let CdkRecycleRows = /*#__PURE__*/(() => {
  class CdkRecycleRows {
    static ɵfac = function CdkRecycleRows_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkRecycleRows)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: CdkRecycleRows,
      selectors: [["cdk-table", "recycleRows", ""], ["table", "cdk-table", "", "recycleRows", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
        provide: _recycle_view_repeater_strategy_mjs__WEBPACK_IMPORTED_MODULE_9__._VIEW_REPEATER_STRATEGY,
        useClass: _recycle_view_repeater_strategy_mjs__WEBPACK_IMPORTED_MODULE_9__._RecycleViewRepeaterStrategy
      }])]
    });
  }
  return CdkRecycleRows;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Provides a handle for the table to grab the view container's ng-container to insert data rows.
 * @docs-private
 */
let DataRowOutlet = /*#__PURE__*/(() => {
  class DataRowOutlet {
    viewContainer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef);
    elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef);
    constructor() {
      const table = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(CDK_TABLE);
      table._rowOutlet = this;
      table._outletAssigned();
    }
    static ɵfac = function DataRowOutlet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DataRowOutlet)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: DataRowOutlet,
      selectors: [["", "rowOutlet", ""]]
    });
  }
  return DataRowOutlet;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Provides a handle for the table to grab the view container's ng-container to insert the header.
 * @docs-private
 */
let HeaderRowOutlet = /*#__PURE__*/(() => {
  class HeaderRowOutlet {
    viewContainer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef);
    elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef);
    constructor() {
      const table = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(CDK_TABLE);
      table._headerRowOutlet = this;
      table._outletAssigned();
    }
    static ɵfac = function HeaderRowOutlet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HeaderRowOutlet)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: HeaderRowOutlet,
      selectors: [["", "headerRowOutlet", ""]]
    });
  }
  return HeaderRowOutlet;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Provides a handle for the table to grab the view container's ng-container to insert the footer.
 * @docs-private
 */
let FooterRowOutlet = /*#__PURE__*/(() => {
  class FooterRowOutlet {
    viewContainer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef);
    elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef);
    constructor() {
      const table = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(CDK_TABLE);
      table._footerRowOutlet = this;
      table._outletAssigned();
    }
    static ɵfac = function FooterRowOutlet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FooterRowOutlet)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: FooterRowOutlet,
      selectors: [["", "footerRowOutlet", ""]]
    });
  }
  return FooterRowOutlet;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Provides a handle for the table to grab the view
 * container's ng-container to insert the no data row.
 * @docs-private
 */
let NoDataRowOutlet = /*#__PURE__*/(() => {
  class NoDataRowOutlet {
    viewContainer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef);
    elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef);
    constructor() {
      const table = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(CDK_TABLE);
      table._noDataRowOutlet = this;
      table._outletAssigned();
    }
    static ɵfac = function NoDataRowOutlet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NoDataRowOutlet)();
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: NoDataRowOutlet,
      selectors: [["", "noDataRowOutlet", ""]]
    });
  }
  return NoDataRowOutlet;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * A data table that can render a header row, data rows, and a footer row.
 * Uses the dataSource input to determine the data to be rendered. The data can be provided either
 * as a data array, an Observable stream that emits the data array to render, or a DataSource with a
 * connect function that will return an Observable stream that emits the data array to render.
 */
let CdkTable = /*#__PURE__*/(() => {
  class CdkTable {
    _differs = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.IterableDiffers);
    _changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef);
    _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef);
    _dir = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_directionality_mjs__WEBPACK_IMPORTED_MODULE_11__.Directionality, {
      optional: true
    });
    _platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_platform2_mjs__WEBPACK_IMPORTED_MODULE_12__.Platform);
    _viewRepeater = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_recycle_view_repeater_strategy_mjs__WEBPACK_IMPORTED_MODULE_9__._VIEW_REPEATER_STRATEGY);
    _viewportRuler = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_scrolling_mjs__WEBPACK_IMPORTED_MODULE_13__.ViewportRuler);
    _stickyPositioningListener = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(STICKY_POSITIONING_LISTENER, {
      optional: true,
      skipSelf: true
    });
    _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT);
    /** Latest data provided by the data source. */
    _data;
    /** Subject that emits when the component has been destroyed. */
    _onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    /** List of the rendered rows as identified by their `RenderRow` object. */
    _renderRows;
    /** Subscription that listens for the data provided by the data source. */
    _renderChangeSubscription;
    /**
     * Map of all the user's defined columns (header, data, and footer cell template) identified by
     * name. Collection populated by the column definitions gathered by `ContentChildren` as well as
     * any custom column definitions added to `_customColumnDefs`.
     */
    _columnDefsByName = new Map();
    /**
     * Set of all row definitions that can be used by this table. Populated by the rows gathered by
     * using `ContentChildren` as well as any custom row definitions added to `_customRowDefs`.
     */
    _rowDefs;
    /**
     * Set of all header row definitions that can be used by this table. Populated by the rows
     * gathered by using `ContentChildren` as well as any custom row definitions added to
     * `_customHeaderRowDefs`.
     */
    _headerRowDefs;
    /**
     * Set of all row definitions that can be used by this table. Populated by the rows gathered by
     * using `ContentChildren` as well as any custom row definitions added to
     * `_customFooterRowDefs`.
     */
    _footerRowDefs;
    /** Differ used to find the changes in the data provided by the data source. */
    _dataDiffer;
    /** Stores the row definition that does not have a when predicate. */
    _defaultRowDef;
    /**
     * Column definitions that were defined outside of the direct content children of the table.
     * These will be defined when, e.g., creating a wrapper around the cdkTable that has
     * column definitions as *its* content child.
     */
    _customColumnDefs = new Set();
    /**
     * Data row definitions that were defined outside of the direct content children of the table.
     * These will be defined when, e.g., creating a wrapper around the cdkTable that has
     * built-in data rows as *its* content child.
     */
    _customRowDefs = new Set();
    /**
     * Header row definitions that were defined outside of the direct content children of the table.
     * These will be defined when, e.g., creating a wrapper around the cdkTable that has
     * built-in header rows as *its* content child.
     */
    _customHeaderRowDefs = new Set();
    /**
     * Footer row definitions that were defined outside of the direct content children of the table.
     * These will be defined when, e.g., creating a wrapper around the cdkTable that has a
     * built-in footer row as *its* content child.
     */
    _customFooterRowDefs = new Set();
    /** No data row that was defined outside of the direct content children of the table. */
    _customNoDataRow;
    /**
     * Whether the header row definition has been changed. Triggers an update to the header row after
     * content is checked. Initialized as true so that the table renders the initial set of rows.
     */
    _headerRowDefChanged = true;
    /**
     * Whether the footer row definition has been changed. Triggers an update to the footer row after
     * content is checked. Initialized as true so that the table renders the initial set of rows.
     */
    _footerRowDefChanged = true;
    /**
     * Whether the sticky column styles need to be updated. Set to `true` when the visible columns
     * change.
     */
    _stickyColumnStylesNeedReset = true;
    /**
     * Whether the sticky styler should recalculate cell widths when applying sticky styles. If
     * `false`, cached values will be used instead. This is only applicable to tables with
     * `_fixedLayout` enabled. For other tables, cell widths will always be recalculated.
     */
    _forceRecalculateCellWidths = true;
    /**
     * Cache of the latest rendered `RenderRow` objects as a map for easy retrieval when constructing
     * a new list of `RenderRow` objects for rendering rows. Since the new list is constructed with
     * the cached `RenderRow` objects when possible, the row identity is preserved when the data
     * and row template matches, which allows the `IterableDiffer` to check rows by reference
     * and understand which rows are added/moved/removed.
     *
     * Implemented as a map of maps where the first key is the `data: T` object and the second is the
     * `CdkRowDef<T>` object. With the two keys, the cache points to a `RenderRow<T>` object that
     * contains an array of created pairs. The array is necessary to handle cases where the data
     * array contains multiple duplicate data objects and each instantiated `RenderRow` must be
     * stored.
     */
    _cachedRenderRowsMap = new Map();
    /** Whether the table is applied to a native `<table>`. */
    _isNativeHtmlTable;
    /**
     * Utility class that is responsible for applying the appropriate sticky positioning styles to
     * the table's rows and cells.
     */
    _stickyStyler;
    /**
     * CSS class added to any row or cell that has sticky positioning applied. May be overridden by
     * table subclasses.
     */
    stickyCssClass = 'cdk-table-sticky';
    /**
     * Whether to manually add position: sticky to all sticky cell elements. Not needed if
     * the position is set in a selector associated with the value of stickyCssClass. May be
     * overridden by table subclasses
     */
    needsPositionStickyOnElement = true;
    /** Whether the component is being rendered on the server. */
    _isServer;
    /** Whether the no data row is currently showing anything. */
    _isShowingNoDataRow = false;
    /** Whether the table has rendered out all the outlets for the first time. */
    _hasAllOutlets = false;
    /** Whether the table is done initializing. */
    _hasInitialized = false;
    /** Aria role to apply to the table's cells based on the table's own role. */
    _getCellRole() {
      // Perform this lazily in case the table's role was updated by a directive after construction.
      if (this._cellRoleInternal === undefined) {
        // Note that we set `role="cell"` even on native `td` elements,
        // because some browsers seem to require it. See #29784.
        const tableRole = this._elementRef.nativeElement.getAttribute('role');
        return tableRole === 'grid' || tableRole === 'treegrid' ? 'gridcell' : 'cell';
      }
      return this._cellRoleInternal;
    }
    _cellRoleInternal = undefined;
    /**
     * Tracking function that will be used to check the differences in data changes. Used similarly
     * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
     * relative to the function to know if a row should be added/removed/moved.
     * Accepts a function that takes two parameters, `index` and `item`.
     */
    get trackBy() {
      return this._trackByFn;
    }
    set trackBy(fn) {
      if ((typeof ngDevMode === 'undefined' || ngDevMode) && fn != null && typeof fn !== 'function') {
        console.warn(`trackBy must be a function, but received ${JSON.stringify(fn)}.`);
      }
      this._trackByFn = fn;
    }
    _trackByFn;
    /**
     * The table's source of data, which can be provided in three ways (in order of complexity):
     *   - Simple data array (each object represents one table row)
     *   - Stream that emits a data array each time the array changes
     *   - `DataSource` object that implements the connect/disconnect interface.
     *
     * If a data array is provided, the table must be notified when the array's objects are
     * added, removed, or moved. This can be done by calling the `renderRows()` function which will
     * render the diff since the last table render. If the data array reference is changed, the table
     * will automatically trigger an update to the rows.
     *
     * When providing an Observable stream, the table will trigger an update automatically when the
     * stream emits a new array of data.
     *
     * Finally, when providing a `DataSource` object, the table will use the Observable stream
     * provided by the connect function and trigger updates when that stream emits new data array
     * values. During the table's ngOnDestroy or when the data source is removed from the table, the
     * table will call the DataSource's `disconnect` function (may be useful for cleaning up any
     * subscriptions registered during the connect process).
     */
    get dataSource() {
      return this._dataSource;
    }
    set dataSource(dataSource) {
      if (this._dataSource !== dataSource) {
        this._switchDataSource(dataSource);
      }
    }
    _dataSource;
    /**
     * Whether to allow multiple rows per data object by evaluating which rows evaluate their 'when'
     * predicate to true. If `multiTemplateDataRows` is false, which is the default value, then each
     * dataobject will render the first row that evaluates its when predicate to true, in the order
     * defined in the table, or otherwise the default row which does not have a when predicate.
     */
    get multiTemplateDataRows() {
      return this._multiTemplateDataRows;
    }
    set multiTemplateDataRows(value) {
      this._multiTemplateDataRows = value;
      // In Ivy if this value is set via a static attribute (e.g. <table multiTemplateDataRows>),
      // this setter will be invoked before the row outlet has been defined hence the null check.
      if (this._rowOutlet && this._rowOutlet.viewContainer.length) {
        this._forceRenderDataRows();
        this.updateStickyColumnStyles();
      }
    }
    _multiTemplateDataRows = false;
    /**
     * Whether to use a fixed table layout. Enabling this option will enforce consistent column widths
     * and optimize rendering sticky styles for native tables. No-op for flex tables.
     */
    get fixedLayout() {
      return this._fixedLayout;
    }
    set fixedLayout(value) {
      this._fixedLayout = value;
      // Toggling `fixedLayout` may change column widths. Sticky column styles should be recalculated.
      this._forceRecalculateCellWidths = true;
      this._stickyColumnStylesNeedReset = true;
    }
    _fixedLayout = false;
    /**
     * Emits when the table completes rendering a set of data rows based on the latest data from the
     * data source, even if the set of rows is empty.
     */
    contentChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    // TODO(andrewseguin): Remove max value as the end index
    //   and instead calculate the view on init and scroll.
    /**
     * Stream containing the latest information on what rows are being displayed on screen.
     * Can be used by the data source to as a heuristic of what data should be provided.
     *
     * @docs-private
     */
    viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject({
      start: 0,
      end: Number.MAX_VALUE
    });
    // Outlets in the table's template where the header, data rows, and footer will be inserted.
    _rowOutlet;
    _headerRowOutlet;
    _footerRowOutlet;
    _noDataRowOutlet;
    /**
     * The column definitions provided by the user that contain what the header, data, and footer
     * cells should render for each column.
     */
    _contentColumnDefs;
    /** Set of data row definitions that were provided to the table as content children. */
    _contentRowDefs;
    /** Set of header row definitions that were provided to the table as content children. */
    _contentHeaderRowDefs;
    /** Set of footer row definitions that were provided to the table as content children. */
    _contentFooterRowDefs;
    /** Row definition that will only be rendered if there's no data in the table. */
    _noDataRow;
    _injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector);
    constructor() {
      const role = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(new _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostAttributeToken('role'), {
        optional: true
      });
      if (!role) {
        this._elementRef.nativeElement.setAttribute('role', 'table');
      }
      this._isServer = !this._platform.isBrowser;
      this._isNativeHtmlTable = this._elementRef.nativeElement.nodeName === 'TABLE';
      // Set up the trackBy function so that it uses the `RenderRow` as its identity by default. If
      // the user has provided a custom trackBy, return the result of that function as evaluated
      // with the values of the `RenderRow`'s data and index.
      this._dataDiffer = this._differs.find([]).create((_i, dataRow) => {
        return this.trackBy ? this.trackBy(dataRow.dataIndex, dataRow.data) : dataRow;
      });
    }
    ngOnInit() {
      this._setupStickyStyler();
      this._viewportRuler.change().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._onDestroy)).subscribe(() => {
        this._forceRecalculateCellWidths = true;
      });
    }
    ngAfterContentInit() {
      this._hasInitialized = true;
    }
    ngAfterContentChecked() {
      // Only start re-rendering in `ngAfterContentChecked` after the first render.
      if (this._canRender()) {
        this._render();
      }
    }
    ngOnDestroy() {
      this._stickyStyler?.destroy();
      [this._rowOutlet?.viewContainer, this._headerRowOutlet?.viewContainer, this._footerRowOutlet?.viewContainer, this._cachedRenderRowsMap, this._customColumnDefs, this._customRowDefs, this._customHeaderRowDefs, this._customFooterRowDefs, this._columnDefsByName].forEach(def => {
        def?.clear();
      });
      this._headerRowDefs = [];
      this._footerRowDefs = [];
      this._defaultRowDef = null;
      this._onDestroy.next();
      this._onDestroy.complete();
      if ((0,_data_source_mjs__WEBPACK_IMPORTED_MODULE_0__.isDataSource)(this.dataSource)) {
        this.dataSource.disconnect(this);
      }
    }
    /**
     * Renders rows based on the table's latest set of data, which was either provided directly as an
     * input or retrieved through an Observable stream (directly or from a DataSource).
     * Checks for differences in the data since the last diff to perform only the necessary
     * changes (add/remove/move rows).
     *
     * If the table's data source is a DataSource or Observable, this will be invoked automatically
     * each time the provided Observable stream emits a new data array. Otherwise if your data is
     * an array, this function will need to be called to render any changes.
     */
    renderRows() {
      this._renderRows = this._getAllRenderRows();
      const changes = this._dataDiffer.diff(this._renderRows);
      if (!changes) {
        this._updateNoDataRow();
        this.contentChanged.next();
        return;
      }
      const viewContainer = this._rowOutlet.viewContainer;
      this._viewRepeater.applyChanges(changes, viewContainer, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record.item, currentIndex), record => record.item.data, change => {
        if (change.operation === _recycle_view_repeater_strategy_mjs__WEBPACK_IMPORTED_MODULE_9__._ViewRepeaterOperation.INSERTED && change.context) {
          this._renderCellTemplateForItem(change.record.item.rowDef, change.context);
        }
      });
      // Update the meta context of a row's context data (index, count, first, last, ...)
      this._updateRowIndexContext();
      // Update rows that did not get added/removed/moved but may have had their identity changed,
      // e.g. if trackBy matched data on some property but the actual data reference changed.
      changes.forEachIdentityChange(record => {
        const rowView = viewContainer.get(record.currentIndex);
        rowView.context.$implicit = record.item.data;
      });
      this._updateNoDataRow();
      this.contentChanged.next();
      this.updateStickyColumnStyles();
    }
    /** Adds a column definition that was not included as part of the content children. */
    addColumnDef(columnDef) {
      this._customColumnDefs.add(columnDef);
    }
    /** Removes a column definition that was not included as part of the content children. */
    removeColumnDef(columnDef) {
      this._customColumnDefs.delete(columnDef);
    }
    /** Adds a row definition that was not included as part of the content children. */
    addRowDef(rowDef) {
      this._customRowDefs.add(rowDef);
    }
    /** Removes a row definition that was not included as part of the content children. */
    removeRowDef(rowDef) {
      this._customRowDefs.delete(rowDef);
    }
    /** Adds a header row definition that was not included as part of the content children. */
    addHeaderRowDef(headerRowDef) {
      this._customHeaderRowDefs.add(headerRowDef);
      this._headerRowDefChanged = true;
    }
    /** Removes a header row definition that was not included as part of the content children. */
    removeHeaderRowDef(headerRowDef) {
      this._customHeaderRowDefs.delete(headerRowDef);
      this._headerRowDefChanged = true;
    }
    /** Adds a footer row definition that was not included as part of the content children. */
    addFooterRowDef(footerRowDef) {
      this._customFooterRowDefs.add(footerRowDef);
      this._footerRowDefChanged = true;
    }
    /** Removes a footer row definition that was not included as part of the content children. */
    removeFooterRowDef(footerRowDef) {
      this._customFooterRowDefs.delete(footerRowDef);
      this._footerRowDefChanged = true;
    }
    /** Sets a no data row definition that was not included as a part of the content children. */
    setNoDataRow(noDataRow) {
      this._customNoDataRow = noDataRow;
    }
    /**
     * Updates the header sticky styles. First resets all applied styles with respect to the cells
     * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
     * automatically called when the header row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     */
    updateStickyHeaderRowStyles() {
      const headerRows = this._getRenderedRows(this._headerRowOutlet);
      // Hide the thead element if there are no header rows. This is necessary to satisfy
      // overzealous a11y checkers that fail because the `rowgroup` element does not contain
      // required child `row`.
      if (this._isNativeHtmlTable) {
        const thead = closestTableSection(this._headerRowOutlet, 'thead');
        if (thead) {
          thead.style.display = headerRows.length ? '' : 'none';
        }
      }
      const stickyStates = this._headerRowDefs.map(def => def.sticky);
      this._stickyStyler.clearStickyPositioning(headerRows, ['top']);
      this._stickyStyler.stickRows(headerRows, stickyStates, 'top');
      // Reset the dirty state of the sticky input change since it has been used.
      this._headerRowDefs.forEach(def => def.resetStickyChanged());
    }
    /**
     * Updates the footer sticky styles. First resets all applied styles with respect to the cells
     * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
     * automatically called when the footer row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     */
    updateStickyFooterRowStyles() {
      const footerRows = this._getRenderedRows(this._footerRowOutlet);
      // Hide the tfoot element if there are no footer rows. This is necessary to satisfy
      // overzealous a11y checkers that fail because the `rowgroup` element does not contain
      // required child `row`.
      if (this._isNativeHtmlTable) {
        const tfoot = closestTableSection(this._footerRowOutlet, 'tfoot');
        if (tfoot) {
          tfoot.style.display = footerRows.length ? '' : 'none';
        }
      }
      const stickyStates = this._footerRowDefs.map(def => def.sticky);
      this._stickyStyler.clearStickyPositioning(footerRows, ['bottom']);
      this._stickyStyler.stickRows(footerRows, stickyStates, 'bottom');
      this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, stickyStates);
      // Reset the dirty state of the sticky input change since it has been used.
      this._footerRowDefs.forEach(def => def.resetStickyChanged());
    }
    /**
     * Updates the column sticky styles. First resets all applied styles with respect to the cells
     * sticking to the left and right. Then sticky styles are added for the left and right according
     * to the column definitions for each cell in each row. This is automatically called when
     * the data source provides a new set of data or when a column definition changes its sticky
     * input. May be called manually for cases where the cell content changes outside of these events.
     */
    updateStickyColumnStyles() {
      const headerRows = this._getRenderedRows(this._headerRowOutlet);
      const dataRows = this._getRenderedRows(this._rowOutlet);
      const footerRows = this._getRenderedRows(this._footerRowOutlet);
      // For tables not using a fixed layout, the column widths may change when new rows are rendered.
      // In a table using a fixed layout, row content won't affect column width, so sticky styles
      // don't need to be cleared unless either the sticky column config changes or one of the row
      // defs change.
      if (this._isNativeHtmlTable && !this._fixedLayout || this._stickyColumnStylesNeedReset) {
        // Clear the left and right positioning from all columns in the table across all rows since
        // sticky columns span across all table sections (header, data, footer)
        this._stickyStyler.clearStickyPositioning([...headerRows, ...dataRows, ...footerRows], ['left', 'right']);
        this._stickyColumnStylesNeedReset = false;
      }
      // Update the sticky styles for each header row depending on the def's sticky state
      headerRows.forEach((headerRow, i) => {
        this._addStickyColumnStyles([headerRow], this._headerRowDefs[i]);
      });
      // Update the sticky styles for each data row depending on its def's sticky state
      this._rowDefs.forEach(rowDef => {
        // Collect all the rows rendered with this row definition.
        const rows = [];
        for (let i = 0; i < dataRows.length; i++) {
          if (this._renderRows[i].rowDef === rowDef) {
            rows.push(dataRows[i]);
          }
        }
        this._addStickyColumnStyles(rows, rowDef);
      });
      // Update the sticky styles for each footer row depending on the def's sticky state
      footerRows.forEach((footerRow, i) => {
        this._addStickyColumnStyles([footerRow], this._footerRowDefs[i]);
      });
      // Reset the dirty state of the sticky input change since it has been used.
      Array.from(this._columnDefsByName.values()).forEach(def => def.resetStickyChanged());
    }
    /** Invoked whenever an outlet is created and has been assigned to the table. */
    _outletAssigned() {
      // Trigger the first render once all outlets have been assigned. We do it this way, as
      // opposed to waiting for the next `ngAfterContentChecked`, because we don't know when
      // the next change detection will happen.
      // Also we can't use queries to resolve the outlets, because they're wrapped in a
      // conditional, so we have to rely on them being assigned via DI.
      if (!this._hasAllOutlets && this._rowOutlet && this._headerRowOutlet && this._footerRowOutlet && this._noDataRowOutlet) {
        this._hasAllOutlets = true;
        // In some setups this may fire before `ngAfterContentInit`
        // so we need a check here. See #28538.
        if (this._canRender()) {
          this._render();
        }
      }
    }
    /** Whether the table has all the information to start rendering. */
    _canRender() {
      return this._hasAllOutlets && this._hasInitialized;
    }
    /** Renders the table if its state has changed. */
    _render() {
      // Cache the row and column definitions gathered by ContentChildren and programmatic injection.
      this._cacheRowDefs();
      this._cacheColumnDefs();
      // Make sure that the user has at least added header, footer, or data row def.
      if (!this._headerRowDefs.length && !this._footerRowDefs.length && !this._rowDefs.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getTableMissingRowDefsError();
      }
      // Render updates if the list of columns have been changed for the header, row, or footer defs.
      const columnsChanged = this._renderUpdatedColumns();
      const rowDefsChanged = columnsChanged || this._headerRowDefChanged || this._footerRowDefChanged;
      // Ensure sticky column styles are reset if set to `true` elsewhere.
      this._stickyColumnStylesNeedReset = this._stickyColumnStylesNeedReset || rowDefsChanged;
      this._forceRecalculateCellWidths = rowDefsChanged;
      // If the header row definition has been changed, trigger a render to the header row.
      if (this._headerRowDefChanged) {
        this._forceRenderHeaderRows();
        this._headerRowDefChanged = false;
      }
      // If the footer row definition has been changed, trigger a render to the footer row.
      if (this._footerRowDefChanged) {
        this._forceRenderFooterRows();
        this._footerRowDefChanged = false;
      }
      // If there is a data source and row definitions, connect to the data source unless a
      // connection has already been made.
      if (this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription) {
        this._observeRenderChanges();
      } else if (this._stickyColumnStylesNeedReset) {
        // In the above case, _observeRenderChanges will result in updateStickyColumnStyles being
        // called when it row data arrives. Otherwise, we need to call it proactively.
        this.updateStickyColumnStyles();
      }
      this._checkStickyStates();
    }
    /**
     * Get the list of RenderRow objects to render according to the current list of data and defined
     * row definitions. If the previous list already contained a particular pair, it should be reused
     * so that the differ equates their references.
     */
    _getAllRenderRows() {
      const renderRows = [];
      // Store the cache and create a new one. Any re-used RenderRow objects will be moved into the
      // new cache while unused ones can be picked up by garbage collection.
      const prevCachedRenderRows = this._cachedRenderRowsMap;
      this._cachedRenderRowsMap = new Map();
      if (!this._data) {
        return renderRows;
      }
      // For each data object, get the list of rows that should be rendered, represented by the
      // respective `RenderRow` object which is the pair of `data` and `CdkRowDef`.
      for (let i = 0; i < this._data.length; i++) {
        let data = this._data[i];
        const renderRowsForData = this._getRenderRowsForData(data, i, prevCachedRenderRows.get(data));
        if (!this._cachedRenderRowsMap.has(data)) {
          this._cachedRenderRowsMap.set(data, new WeakMap());
        }
        for (let j = 0; j < renderRowsForData.length; j++) {
          let renderRow = renderRowsForData[j];
          const cache = this._cachedRenderRowsMap.get(renderRow.data);
          if (cache.has(renderRow.rowDef)) {
            cache.get(renderRow.rowDef).push(renderRow);
          } else {
            cache.set(renderRow.rowDef, [renderRow]);
          }
          renderRows.push(renderRow);
        }
      }
      return renderRows;
    }
    /**
     * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
     * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
     * `(T, CdkRowDef)` pair.
     */
    _getRenderRowsForData(data, dataIndex, cache) {
      const rowDefs = this._getRowDefs(data, dataIndex);
      return rowDefs.map(rowDef => {
        const cachedRenderRows = cache && cache.has(rowDef) ? cache.get(rowDef) : [];
        if (cachedRenderRows.length) {
          const dataRow = cachedRenderRows.shift();
          dataRow.dataIndex = dataIndex;
          return dataRow;
        } else {
          return {
            data,
            rowDef,
            dataIndex
          };
        }
      });
    }
    /** Update the map containing the content's column definitions. */
    _cacheColumnDefs() {
      this._columnDefsByName.clear();
      const columnDefs = mergeArrayAndSet(this._getOwnDefs(this._contentColumnDefs), this._customColumnDefs);
      columnDefs.forEach(columnDef => {
        if (this._columnDefsByName.has(columnDef.name) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw getTableDuplicateColumnNameError(columnDef.name);
        }
        this._columnDefsByName.set(columnDef.name, columnDef);
      });
    }
    /** Update the list of all available row definitions that can be used. */
    _cacheRowDefs() {
      this._headerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentHeaderRowDefs), this._customHeaderRowDefs);
      this._footerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentFooterRowDefs), this._customFooterRowDefs);
      this._rowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentRowDefs), this._customRowDefs);
      // After all row definitions are determined, find the row definition to be considered default.
      const defaultRowDefs = this._rowDefs.filter(def => !def.when);
      if (!this.multiTemplateDataRows && defaultRowDefs.length > 1 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getTableMultipleDefaultRowDefsError();
      }
      this._defaultRowDef = defaultRowDefs[0];
    }
    /**
     * Check if the header, data, or footer rows have changed what columns they want to display or
     * whether the sticky states have changed for the header or footer. If there is a diff, then
     * re-render that section.
     */
    _renderUpdatedColumns() {
      const columnsDiffReducer = (acc, def) => {
        // The differ should be run for every column, even if `acc` is already
        // true (see #29922)
        const diff = !!def.getColumnsDiff();
        return acc || diff;
      };
      // Force re-render data rows if the list of column definitions have changed.
      const dataColumnsChanged = this._rowDefs.reduce(columnsDiffReducer, false);
      if (dataColumnsChanged) {
        this._forceRenderDataRows();
      }
      // Force re-render header/footer rows if the list of column definitions have changed.
      const headerColumnsChanged = this._headerRowDefs.reduce(columnsDiffReducer, false);
      if (headerColumnsChanged) {
        this._forceRenderHeaderRows();
      }
      const footerColumnsChanged = this._footerRowDefs.reduce(columnsDiffReducer, false);
      if (footerColumnsChanged) {
        this._forceRenderFooterRows();
      }
      return dataColumnsChanged || headerColumnsChanged || footerColumnsChanged;
    }
    /**
     * Switch to the provided data source by resetting the data and unsubscribing from the current
     * render change subscription if one exists. If the data source is null, interpret this by
     * clearing the row outlet. Otherwise start listening for new data.
     */
    _switchDataSource(dataSource) {
      this._data = [];
      if ((0,_data_source_mjs__WEBPACK_IMPORTED_MODULE_0__.isDataSource)(this.dataSource)) {
        this.dataSource.disconnect(this);
      }
      // Stop listening for data from the previous data source.
      if (this._renderChangeSubscription) {
        this._renderChangeSubscription.unsubscribe();
        this._renderChangeSubscription = null;
      }
      if (!dataSource) {
        if (this._dataDiffer) {
          this._dataDiffer.diff([]);
        }
        if (this._rowOutlet) {
          this._rowOutlet.viewContainer.clear();
        }
      }
      this._dataSource = dataSource;
    }
    /** Set up a subscription for the data provided by the data source. */
    _observeRenderChanges() {
      // If no data source has been set, there is nothing to observe for changes.
      if (!this.dataSource) {
        return;
      }
      let dataStream;
      if ((0,_data_source_mjs__WEBPACK_IMPORTED_MODULE_0__.isDataSource)(this.dataSource)) {
        dataStream = this.dataSource.connect(this);
      } else if ((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.isObservable)(this.dataSource)) {
        dataStream = this.dataSource;
      } else if (Array.isArray(this.dataSource)) {
        dataStream = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(this.dataSource);
      }
      if (dataStream === undefined && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getTableUnknownDataSourceError();
      }
      this._renderChangeSubscription = dataStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._onDestroy)).subscribe(data => {
        this._data = data || [];
        this.renderRows();
      });
    }
    /**
     * Clears any existing content in the header row outlet and creates a new embedded view
     * in the outlet using the header row definition.
     */
    _forceRenderHeaderRows() {
      // Clear the header row outlet if any content exists.
      if (this._headerRowOutlet.viewContainer.length > 0) {
        this._headerRowOutlet.viewContainer.clear();
      }
      this._headerRowDefs.forEach((def, i) => this._renderRow(this._headerRowOutlet, def, i));
      this.updateStickyHeaderRowStyles();
    }
    /**
     * Clears any existing content in the footer row outlet and creates a new embedded view
     * in the outlet using the footer row definition.
     */
    _forceRenderFooterRows() {
      // Clear the footer row outlet if any content exists.
      if (this._footerRowOutlet.viewContainer.length > 0) {
        this._footerRowOutlet.viewContainer.clear();
      }
      this._footerRowDefs.forEach((def, i) => this._renderRow(this._footerRowOutlet, def, i));
      this.updateStickyFooterRowStyles();
    }
    /** Adds the sticky column styles for the rows according to the columns' stick states. */
    _addStickyColumnStyles(rows, rowDef) {
      const columnDefs = Array.from(rowDef?.columns || []).map(columnName => {
        const columnDef = this._columnDefsByName.get(columnName);
        if (!columnDef && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw getTableUnknownColumnError(columnName);
        }
        return columnDef;
      });
      const stickyStartStates = columnDefs.map(columnDef => columnDef.sticky);
      const stickyEndStates = columnDefs.map(columnDef => columnDef.stickyEnd);
      this._stickyStyler.updateStickyColumns(rows, stickyStartStates, stickyEndStates, !this._fixedLayout || this._forceRecalculateCellWidths);
    }
    /** Gets the list of rows that have been rendered in the row outlet. */
    _getRenderedRows(rowOutlet) {
      const renderedRows = [];
      for (let i = 0; i < rowOutlet.viewContainer.length; i++) {
        const viewRef = rowOutlet.viewContainer.get(i);
        renderedRows.push(viewRef.rootNodes[0]);
      }
      return renderedRows;
    }
    /**
     * Get the matching row definitions that should be used for this row data. If there is only
     * one row definition, it is returned. Otherwise, find the row definitions that has a when
     * predicate that returns true with the data. If none return true, return the default row
     * definition.
     */
    _getRowDefs(data, dataIndex) {
      if (this._rowDefs.length == 1) {
        return [this._rowDefs[0]];
      }
      let rowDefs = [];
      if (this.multiTemplateDataRows) {
        rowDefs = this._rowDefs.filter(def => !def.when || def.when(dataIndex, data));
      } else {
        let rowDef = this._rowDefs.find(def => def.when && def.when(dataIndex, data)) || this._defaultRowDef;
        if (rowDef) {
          rowDefs.push(rowDef);
        }
      }
      if (!rowDefs.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getTableMissingMatchingRowDefError(data);
      }
      return rowDefs;
    }
    _getEmbeddedViewArgs(renderRow, index) {
      const rowDef = renderRow.rowDef;
      const context = {
        $implicit: renderRow.data
      };
      return {
        templateRef: rowDef.template,
        context,
        index
      };
    }
    /**
     * Creates a new row template in the outlet and fills it with the set of cell templates.
     * Optionally takes a context to provide to the row and cells, as well as an optional index
     * of where to place the new row template in the outlet.
     */
    _renderRow(outlet, rowDef, index, context = {}) {
      // TODO(andrewseguin): enforce that one outlet was instantiated from createEmbeddedView
      const view = outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);
      this._renderCellTemplateForItem(rowDef, context);
      return view;
    }
    _renderCellTemplateForItem(rowDef, context) {
      for (let cellTemplate of this._getCellTemplates(rowDef)) {
        if (CdkCellOutlet.mostRecentCellOutlet) {
          CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
        }
      }
      this._changeDetectorRef.markForCheck();
    }
    /**
     * Updates the index-related context for each row to reflect any changes in the index of the rows,
     * e.g. first/last/even/odd.
     */
    _updateRowIndexContext() {
      const viewContainer = this._rowOutlet.viewContainer;
      for (let renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
        const viewRef = viewContainer.get(renderIndex);
        const context = viewRef.context;
        context.count = count;
        context.first = renderIndex === 0;
        context.last = renderIndex === count - 1;
        context.even = renderIndex % 2 === 0;
        context.odd = !context.even;
        if (this.multiTemplateDataRows) {
          context.dataIndex = this._renderRows[renderIndex].dataIndex;
          context.renderIndex = renderIndex;
        } else {
          context.index = this._renderRows[renderIndex].dataIndex;
        }
      }
    }
    /** Gets the column definitions for the provided row def. */
    _getCellTemplates(rowDef) {
      if (!rowDef || !rowDef.columns) {
        return [];
      }
      return Array.from(rowDef.columns, columnId => {
        const column = this._columnDefsByName.get(columnId);
        if (!column && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw getTableUnknownColumnError(columnId);
        }
        return rowDef.extractCellTemplate(column);
      });
    }
    /**
     * Forces a re-render of the data rows. Should be called in cases where there has been an input
     * change that affects the evaluation of which rows should be rendered, e.g. toggling
     * `multiTemplateDataRows` or adding/removing row definitions.
     */
    _forceRenderDataRows() {
      this._dataDiffer.diff([]);
      this._rowOutlet.viewContainer.clear();
      this.renderRows();
    }
    /**
     * Checks if there has been a change in sticky states since last check and applies the correct
     * sticky styles. Since checking resets the "dirty" state, this should only be performed once
     * during a change detection and after the inputs are settled (after content check).
     */
    _checkStickyStates() {
      const stickyCheckReducer = (acc, d) => {
        return acc || d.hasStickyChanged();
      };
      // Note that the check needs to occur for every definition since it notifies the definition
      // that it can reset its dirty state. Using another operator like `some` may short-circuit
      // remaining definitions and leave them in an unchecked state.
      if (this._headerRowDefs.reduce(stickyCheckReducer, false)) {
        this.updateStickyHeaderRowStyles();
      }
      if (this._footerRowDefs.reduce(stickyCheckReducer, false)) {
        this.updateStickyFooterRowStyles();
      }
      if (Array.from(this._columnDefsByName.values()).reduce(stickyCheckReducer, false)) {
        this._stickyColumnStylesNeedReset = true;
        this.updateStickyColumnStyles();
      }
    }
    /**
     * Creates the sticky styler that will be used for sticky rows and columns. Listens
     * for directionality changes and provides the latest direction to the styler. Re-applies column
     * stickiness when directionality changes.
     */
    _setupStickyStyler() {
      const direction = this._dir ? this._dir.value : 'ltr';
      this._stickyStyler = new StickyStyler(this._isNativeHtmlTable, this.stickyCssClass, this._platform.isBrowser, this.needsPositionStickyOnElement, direction, this._stickyPositioningListener, this._injector);
      (this._dir ? this._dir.change : (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._onDestroy)).subscribe(value => {
        this._stickyStyler.direction = value;
        this.updateStickyColumnStyles();
      });
    }
    /** Filters definitions that belong to this table from a QueryList. */
    _getOwnDefs(items) {
      return items.filter(item => !item._table || item._table === this);
    }
    /** Creates or removes the no data row, depending on whether any data is being shown. */
    _updateNoDataRow() {
      const noDataRow = this._customNoDataRow || this._noDataRow;
      if (!noDataRow) {
        return;
      }
      const shouldShow = this._rowOutlet.viewContainer.length === 0;
      if (shouldShow === this._isShowingNoDataRow) {
        return;
      }
      const container = this._noDataRowOutlet.viewContainer;
      if (shouldShow) {
        const view = container.createEmbeddedView(noDataRow.templateRef);
        const rootNode = view.rootNodes[0];
        // Only add the attributes if we have a single root node since it's hard
        // to figure out which one to add it to when there are multiple.
        if (view.rootNodes.length === 1 && rootNode?.nodeType === this._document.ELEMENT_NODE) {
          rootNode.setAttribute('role', 'row');
          rootNode.classList.add(...noDataRow._contentClassNames);
          const cells = rootNode.querySelectorAll(noDataRow._cellSelector);
          for (let i = 0; i < cells.length; i++) {
            cells[i].classList.add(...noDataRow._cellClassNames);
          }
        }
      } else {
        container.clear();
      }
      this._isShowingNoDataRow = shouldShow;
      this._changeDetectorRef.markForCheck();
    }
    static ɵfac = function CdkTable_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkTable)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: CdkTable,
      selectors: [["cdk-table"], ["table", "cdk-table", ""]],
      contentQueries: function CdkTable_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, CdkNoDataRow, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, CdkColumnDef, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, CdkRowDef, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, CdkHeaderRowDef, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, CdkFooterRowDef, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._noDataRow = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._contentColumnDefs = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._contentRowDefs = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._contentHeaderRowDefs = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._contentFooterRowDefs = _t);
        }
      },
      hostAttrs: [1, "cdk-table"],
      hostVars: 2,
      hostBindings: function CdkTable_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("cdk-table-fixed-layout", ctx.fixedLayout);
        }
      },
      inputs: {
        trackBy: "trackBy",
        dataSource: "dataSource",
        multiTemplateDataRows: [2, "multiTemplateDataRows", "multiTemplateDataRows", _angular_core__WEBPACK_IMPORTED_MODULE_3__.booleanAttribute],
        fixedLayout: [2, "fixedLayout", "fixedLayout", _angular_core__WEBPACK_IMPORTED_MODULE_3__.booleanAttribute]
      },
      outputs: {
        contentChanged: "contentChanged"
      },
      exportAs: ["cdkTable"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
        provide: CDK_TABLE,
        useExisting: CdkTable
      }, {
        provide: _recycle_view_repeater_strategy_mjs__WEBPACK_IMPORTED_MODULE_9__._VIEW_REPEATER_STRATEGY,
        useClass: _dispose_view_repeater_strategy_mjs__WEBPACK_IMPORTED_MODULE_10__._DisposeViewRepeaterStrategy
      },
      // Prevent nested tables from seeing this table's StickyPositioningListener.
      {
        provide: STICKY_POSITIONING_LISTENER,
        useValue: null
      }])],
      ngContentSelectors: _c1,
      decls: 5,
      vars: 2,
      consts: [["role", "rowgroup"], ["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
      template: function CdkTable_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditionalCreate"](2, CdkTable_Conditional_2_Template, 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditionalCreate"](3, CdkTable_Conditional_3_Template, 7, 0)(4, CdkTable_Conditional_4_Template, 4, 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx._isServer ? 2 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx._isNativeHtmlTable ? 3 : 4);
        }
      },
      dependencies: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
      styles: [".cdk-table-fixed-layout{table-layout:fixed}\n"],
      encapsulation: 2
    });
  }
  return CdkTable;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Utility function that gets a merged list of the entries in an array and values of a Set. */
function mergeArrayAndSet(array, set) {
  return array.concat(Array.from(set));
}
/**
 * Finds the closest table section to an outlet. We can't use `HTMLElement.closest` for this,
 * because the node representing the outlet is a comment.
 */
function closestTableSection(outlet, section) {
  const uppercaseSection = section.toUpperCase();
  let current = outlet.viewContainer.element.nativeElement;
  while (current) {
    // 1 is an element node.
    const nodeName = current.nodeType === 1 ? current.nodeName : null;
    if (nodeName === uppercaseSection) {
      return current;
    } else if (nodeName === 'TABLE') {
      // Stop traversing past the `table` node.
      break;
    }
    current = current.parentNode;
  }
  return null;
}

/**
 * Column that simply shows text content for the header and row cells. Assumes that the table
 * is using the native table implementation (`<table>`).
 *
 * By default, the name of this column will be the header text and data property accessor.
 * The header text can be overridden with the `headerText` input. Cell values can be overridden with
 * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
 * input.
 */
let CdkTextColumn = /*#__PURE__*/(() => {
  class CdkTextColumn {
    _table = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(CdkTable, {
      optional: true
    });
    _options = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(TEXT_COLUMN_OPTIONS, {
      optional: true
    });
    /** Column name that should be used to reference this column. */
    get name() {
      return this._name;
    }
    set name(name) {
      this._name = name;
      // With Ivy, inputs can be initialized before static query results are
      // available. In that case, we defer the synchronization until "ngOnInit" fires.
      this._syncColumnDefName();
    }
    _name;
    /**
     * Text label that should be used for the column header. If this property is not
     * set, the header text will default to the column name with its first letter capitalized.
     */
    headerText;
    /**
     * Accessor function to retrieve the data rendered for each cell. If this
     * property is not set, the data cells will render the value found in the data's property matching
     * the column's name. For example, if the column is named `id`, then the rendered value will be
     * value defined by the data's `id` property.
     */
    dataAccessor;
    /** Alignment of the cell values. */
    justify = 'start';
    /** @docs-private */
    columnDef;
    /**
     * The column cell is provided to the column during `ngOnInit` with a static query.
     * Normally, this will be retrieved by the column using `ContentChild`, but that assumes the
     * column definition was provided in the same view as the table, which is not the case with this
     * component.
     * @docs-private
     */
    cell;
    /**
     * The column headerCell is provided to the column during `ngOnInit` with a static query.
     * Normally, this will be retrieved by the column using `ContentChild`, but that assumes the
     * column definition was provided in the same view as the table, which is not the case with this
     * component.
     * @docs-private
     */
    headerCell;
    constructor() {
      this._options = this._options || {};
    }
    ngOnInit() {
      this._syncColumnDefName();
      if (this.headerText === undefined) {
        this.headerText = this._createDefaultHeaderText();
      }
      if (!this.dataAccessor) {
        this.dataAccessor = this._options.defaultDataAccessor || ((data, name) => data[name]);
      }
      if (this._table) {
        // Provide the cell and headerCell directly to the table with the static `ViewChild` query,
        // since the columnDef will not pick up its content by the time the table finishes checking
        // its content and initializing the rows.
        this.columnDef.cell = this.cell;
        this.columnDef.headerCell = this.headerCell;
        this._table.addColumnDef(this.columnDef);
      } else if (typeof ngDevMode === 'undefined' || ngDevMode) {
        throw getTableTextColumnMissingParentTableError();
      }
    }
    ngOnDestroy() {
      if (this._table) {
        this._table.removeColumnDef(this.columnDef);
      }
    }
    /**
     * Creates a default header text. Use the options' header text transformation function if one
     * has been provided. Otherwise simply capitalize the column name.
     */
    _createDefaultHeaderText() {
      const name = this.name;
      if (!name && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getTableTextColumnMissingNameError();
      }
      if (this._options && this._options.defaultHeaderTextTransform) {
        return this._options.defaultHeaderTextTransform(name);
      }
      return name[0].toUpperCase() + name.slice(1);
    }
    /** Synchronizes the column definition name with the text column name. */
    _syncColumnDefName() {
      if (this.columnDef) {
        this.columnDef.name = this.name;
      }
    }
    static ɵfac = function CdkTextColumn_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkTextColumn)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: CdkTextColumn,
      selectors: [["cdk-text-column"]],
      viewQuery: function CdkTextColumn_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](CdkColumnDef, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](CdkCellDef, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](CdkHeaderCellDef, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.columnDef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.cell = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.headerCell = _t.first);
        }
      },
      inputs: {
        name: "name",
        headerText: "headerText",
        dataAccessor: "dataAccessor",
        justify: "justify"
      },
      decls: 3,
      vars: 0,
      consts: [["cdkColumnDef", ""], ["cdk-header-cell", "", 3, "text-align", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 3, "text-align", 4, "cdkCellDef"], ["cdk-header-cell", ""], ["cdk-cell", ""]],
      template: function CdkTextColumn_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CdkTextColumn_th_1_Template, 2, 3, "th", 1)(2, CdkTextColumn_td_2_Template, 2, 3, "td", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }
      },
      dependencies: [CdkColumnDef, CdkHeaderCellDef, CdkHeaderCell, CdkCellDef, CdkCell],
      encapsulation: 2
    });
  }
  return CdkTextColumn;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const EXPORTED_DECLARATIONS = [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, CdkRecycleRows, NoDataRowOutlet];
let CdkTableModule = /*#__PURE__*/(() => {
  class CdkTableModule {
    static ɵfac = function CdkTableModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CdkTableModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: CdkTableModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_scrolling_mjs__WEBPACK_IMPORTED_MODULE_13__.ScrollingModule]
    });
  }
  return CdkTableModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();


/***/ })

}]);
//# sourceMappingURL=7697.js.map