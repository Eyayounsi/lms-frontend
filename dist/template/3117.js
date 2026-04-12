"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([[3117],{

/***/ 33117:
/*!***************************************************************!*\
  !*** ./node_modules/ng-apexcharts/fesm2022/ng-apexcharts.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartComponent: () => (/* binding */ ChartComponent),
/* harmony export */   NgApexchartsModule: () => (/* binding */ NgApexchartsModule)
/* harmony export */ });
/* harmony import */ var C_Users_USER_Desktop_projet_LMS_template_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);




const _c0 = ["chart"];
let ChartComponent = /*#__PURE__*/(() => {
  var _staticBlock;
  class ChartComponent {
    constructor() {
      this.chart = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)(...(ngDevMode ? [undefined, {
        debugName: "chart"
      }] : []));
      this.annotations = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)(...(ngDevMode ? [undefined, {
        debugName: "annotations"
      }] : []));
      this.colors = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)(...(ngDevMode ? [undefined, {
        debugName: "colors"
      }] : []));
      this.dataLabels = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)(...(ngDevMode ? [undefined, {
        debugName: "dataLabels"
      }] : []));
      this.series = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)(...(ngDevMode ? [undefined, {
        debugName: "series"
      }] : []));
      this.stroke = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)(...(ngDevMode ? [undefined, {
        debugName: "stroke"
      }] : []));
      this.labels = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)(...(ngDevMode ? [undefined, {
        debugName: "labels"
      }] : []));
      this.legend = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)(...(ngDevMode ? [undefined, {
        debugName: "legend"
      }] : []));
      this.markers = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)(...(ngDevMode ? [undefined, {
        debugName: "markers"
      }] : []));
      this.noData = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)(...(ngDevMode ? [undefined, {
        debugName: "noData"
      }] : []));
      this.parsing = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)(...(ngDevMode ? [undefined, {
        debugName: "parsing"
      }] : []));
      this.fill = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)(...(ngDevMode ? [undefined, {
        debugName: "fill"
      }] : []));
      this.tooltip = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)(...(ngDevMode ? [undefined, {
        debugName: "tooltip"
      }] : []));
      this.plotOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)(...(ngDevMode ? [undefined, {
        debugName: "plotOptions"
      }] : []));
      this.responsive = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)(...(ngDevMode ? [undefined, {
        debugName: "responsive"
      }] : []));
      this.xaxis = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)(...(ngDevMode ? [undefined, {
        debugName: "xaxis"
      }] : []));
      this.yaxis = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)(...(ngDevMode ? [undefined, {
        debugName: "yaxis"
      }] : []));
      this.forecastDataPoints = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)(...(ngDevMode ? [undefined, {
        debugName: "forecastDataPoints"
      }] : []));
      this.grid = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)(...(ngDevMode ? [undefined, {
        debugName: "grid"
      }] : []));
      this.states = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)(...(ngDevMode ? [undefined, {
        debugName: "states"
      }] : []));
      this.title = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)(...(ngDevMode ? [undefined, {
        debugName: "title"
      }] : []));
      this.subtitle = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)(...(ngDevMode ? [undefined, {
        debugName: "subtitle"
      }] : []));
      this.theme = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)(...(ngDevMode ? [undefined, {
        debugName: "theme"
      }] : []));
      this.autoUpdateSeries = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)(true, ...(ngDevMode ? [{
        debugName: "autoUpdateSeries"
      }] : []));
      this.chartReady = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.output)();
      // If consumers need to capture the `chartInstance` for use, consumers
      // can access the component instance through `viewChild` and use `computed`
      // or `effect` on `component.chartInstance()` to monitor its changes and
      // recompute effects or computations whenever `chartInstance` is updated.
      this.chartInstance = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(null, ...(ngDevMode ? [{
        debugName: "chartInstance"
      }] : []));
      this.chartElement = _angular_core__WEBPACK_IMPORTED_MODULE_3__.viewChild.required("chart");
      this.ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone);
      this.isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID));
      this._destroyed = false;
      this._injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector);
      this.waitingForConnectedRef = null;
    }
    ngOnChanges(changes) {
      if (!this.isBrowser) return;
      this.hydrate(changes);
    }
    ngOnDestroy() {
      this.destroy();
      this._destroyed = true;
    }
    /** Determine if the host element is connected to the document */
    get isConnected() {
      return this.chartElement()?.nativeElement.isConnected;
    }
    hydrate(changes) {
      if (this.waitingForConnectedRef) {
        return;
      }
      const shouldUpdateSeries = this.chartInstance() && this.autoUpdateSeries() && Object.keys(changes).filter(c => c !== "series").length === 0;
      if (shouldUpdateSeries) {
        this.updateSeries(this.series(), true);
        return;
      }
      // Create the chart after the layout is finalized and ready to be measured.
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.afterNextRender)({
        read: () => this.createElement()
      }, {
        injector: this._injector
      });
    }
    createElement() {
      var _this = this;
      return (0,C_Users_USER_Desktop_projet_LMS_template_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const {
          default: ApexCharts
        } = yield __webpack_require__.e(/*! import() */ 5337).then(__webpack_require__.bind(__webpack_require__, /*! apexcharts */ 95337));
        window.ApexCharts ||= ApexCharts;
        if (_this._destroyed) return;
        if (!_this.isConnected) {
          _this.waitForConnected();
          return;
        }
        const options = {};
        const properties = ["annotations", "chart", "colors", "dataLabels", "series", "stroke", "labels", "legend", "fill", "tooltip", "plotOptions", "responsive", "markers", "noData", "parsing", "xaxis", "yaxis", "forecastDataPoints", "grid", "states", "title", "subtitle", "theme"];
        properties.forEach(property => {
          const value = _this[property]();
          if (value) {
            options[property] = value;
          }
        });
        _this.destroy();
        const chartInstance = _this.ngZone.runOutsideAngular(() => new ApexCharts(_this.chartElement().nativeElement, options));
        _this.chartInstance.set(chartInstance);
        _this.render();
        _this.chartReady.emit({
          chartObj: chartInstance
        });
      })();
    }
    render() {
      if (this.isConnected) {
        return this.ngZone.runOutsideAngular(() => this.chartInstance()?.render());
      } else {
        this.waitForConnected();
      }
    }
    updateOptions(options, redrawPaths, animate, updateSyncedCharts) {
      return this.ngZone.runOutsideAngular(() => this.chartInstance()?.updateOptions(options, redrawPaths, animate, updateSyncedCharts));
    }
    updateSeries(newSeries, animate) {
      return this.ngZone.runOutsideAngular(() => this.chartInstance()?.updateSeries(newSeries, animate));
    }
    appendSeries(newSeries, animate) {
      this.ngZone.runOutsideAngular(() => this.chartInstance()?.appendSeries(newSeries, animate));
    }
    appendData(newData) {
      this.ngZone.runOutsideAngular(() => this.chartInstance()?.appendData(newData));
    }
    highlightSeries(seriesName) {
      return this.ngZone.runOutsideAngular(() => this.chartInstance()?.highlightSeries(seriesName));
    }
    toggleSeries(seriesName) {
      return this.ngZone.runOutsideAngular(() => this.chartInstance()?.toggleSeries(seriesName));
    }
    showSeries(seriesName) {
      this.ngZone.runOutsideAngular(() => this.chartInstance()?.showSeries(seriesName));
    }
    hideSeries(seriesName) {
      this.ngZone.runOutsideAngular(() => this.chartInstance()?.hideSeries(seriesName));
    }
    resetSeries() {
      this.ngZone.runOutsideAngular(() => this.chartInstance()?.resetSeries());
    }
    zoomX(min, max) {
      this.ngZone.runOutsideAngular(() => this.chartInstance()?.zoomX(min, max));
    }
    toggleDataPointSelection(seriesIndex, dataPointIndex) {
      this.ngZone.runOutsideAngular(() => this.chartInstance()?.toggleDataPointSelection(seriesIndex, dataPointIndex));
    }
    destroy() {
      this.chartInstance()?.destroy();
      this.chartInstance.set(null);
    }
    setLocale(localeName) {
      this.ngZone.runOutsideAngular(() => this.chartInstance()?.setLocale(localeName));
    }
    paper() {
      this.ngZone.runOutsideAngular(() => this.chartInstance()?.paper());
    }
    addXaxisAnnotation(options, pushToMemory, context) {
      this.ngZone.runOutsideAngular(() => this.chartInstance()?.addXaxisAnnotation(options, pushToMemory, context));
    }
    addYaxisAnnotation(options, pushToMemory, context) {
      this.ngZone.runOutsideAngular(() => this.chartInstance()?.addYaxisAnnotation(options, pushToMemory, context));
    }
    addPointAnnotation(options, pushToMemory, context) {
      this.ngZone.runOutsideAngular(() => this.chartInstance()?.addPointAnnotation(options, pushToMemory, context));
    }
    removeAnnotation(id, options) {
      this.ngZone.runOutsideAngular(() => this.chartInstance()?.removeAnnotation(id, options));
    }
    clearAnnotations(options) {
      this.ngZone.runOutsideAngular(() => this.chartInstance()?.clearAnnotations(options));
    }
    dataURI(options) {
      return this.chartInstance()?.dataURI(options);
    }
    waitForConnected() {
      if (this.waitingForConnectedRef) {
        return;
      }
      this.waitingForConnectedRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.afterEveryRender)({
        read: () => {
          if (this.isConnected) {
            this.waitingForConnectedRef.destroy();
            this.waitingForConnectedRef = null;
            this.createElement();
          }
        }
      }, {
        injector: this._injector
      });
    }
    /** @nocollapse */
    /** @nocollapse */
    static #_ = _staticBlock = () => (this.ɵfac = function ChartComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ChartComponent)();
    }, this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ChartComponent,
      selectors: [["apx-chart"]],
      viewQuery: function ChartComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuerySignal"](ctx.chartElement, _c0, 5);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryAdvance"]();
        }
      },
      inputs: {
        chart: [1, "chart"],
        annotations: [1, "annotations"],
        colors: [1, "colors"],
        dataLabels: [1, "dataLabels"],
        series: [1, "series"],
        stroke: [1, "stroke"],
        labels: [1, "labels"],
        legend: [1, "legend"],
        markers: [1, "markers"],
        noData: [1, "noData"],
        parsing: [1, "parsing"],
        fill: [1, "fill"],
        tooltip: [1, "tooltip"],
        plotOptions: [1, "plotOptions"],
        responsive: [1, "responsive"],
        xaxis: [1, "xaxis"],
        yaxis: [1, "yaxis"],
        forecastDataPoints: [1, "forecastDataPoints"],
        grid: [1, "grid"],
        states: [1, "states"],
        title: [1, "title"],
        subtitle: [1, "subtitle"],
        theme: [1, "theme"],
        autoUpdateSeries: [1, "autoUpdateSeries"]
      },
      outputs: {
        chartReady: "chartReady"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
      decls: 2,
      vars: 0,
      consts: [["chart", ""]],
      template: function ChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElement"](0, "div", null, 0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    }));
  }
  _staticBlock();
  return ChartComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const declarations = [ChartComponent];
let NgApexchartsModule = /*#__PURE__*/(() => {
  var _staticBlock2;
  class NgApexchartsModule {
    static #_ = _staticBlock2 = () => (/** @nocollapse */this.ɵfac = function NgApexchartsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NgApexchartsModule)();
    }
    /** @nocollapse */, this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: NgApexchartsModule
    })
    /** @nocollapse */, this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({}));
  }
  _staticBlock2();
  return NgApexchartsModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/*
 * Public API Surface of ng-apexcharts
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=3117.js.map