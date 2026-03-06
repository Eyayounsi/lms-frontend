import {
  PaginationService
} from "./chunk-CUBDUMMA.js";
import {
  CommonModule,
  NgClass
} from "./chunk-YBJXKBE2.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-5DE2SIVI.js";

// src/app/shared/service/custom-pagination/custom-pagination.component.ts
var _c0 = (a0) => ({ disabled: a0 });
function CustomPaginationComponent_For_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 13);
    \u0275\u0275listener("click", function CustomPaginationComponent_For_11_Conditional_3_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.moveToPage(ctx_r2.currentPage - 2));
    })("keydown", function CustomPaginationComponent_For_11_Conditional_3_Template_li_keydown_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.moveToPage(ctx_r2.currentPage - 2));
    });
    \u0275\u0275elementStart(1, "a", 14);
    \u0275\u0275text(2, " ... ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("hidden", ctx_r2.currentPage === 1);
  }
}
function CustomPaginationComponent_For_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 13);
    \u0275\u0275listener("click", function CustomPaginationComponent_For_11_Conditional_4_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.moveToPage(ctx_r2.currentPage + 2));
    })("keydown", function CustomPaginationComponent_For_11_Conditional_4_Template_li_keydown_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.moveToPage(ctx_r2.currentPage + 2));
    });
    \u0275\u0275elementStart(1, "a", 14);
    \u0275\u0275text(2, " ... ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("hidden", ctx_r2.currentPage >= ctx_r2.pageNumberArray[ctx_r2.pageNumberArray.length - 2] || ctx_r2.totalData < ctx_r2.serialNumberArray[ctx_r2.serialNumberArray.length - 1]);
  }
}
function CustomPaginationComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 6)(1, "a", 11);
    \u0275\u0275listener("click", function CustomPaginationComponent_For_11_Template_a_click_1_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.moveToPage(item_r2));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(3, CustomPaginationComponent_For_11_Conditional_3_Template, 3, 1, "li", 12);
    \u0275\u0275conditionalCreate(4, CustomPaginationComponent_For_11_Conditional_4_Template, 3, 1, "li", 12);
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const \u0275$index_20_r6 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", item_r2 === ctx_r2.currentPage);
    \u0275\u0275property("ngClass", ctx_r2.pageNumberArray[ctx_r2.currentPage - 2] > item_r2 && item_r2 !== 1 && ctx_r2.pageNumberArray.length > 6 || ctx_r2.pageNumberArray[ctx_r2.currentPage] < item_r2 && item_r2 !== 1 && ctx_r2.pageNumberArray.length > 6 && ctx_r2.pageNumberArray.length !== item_r2 ? "hide-page-no" : "show-page-no");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r2, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_20_r6 === 0 && ctx_r2.pageNumberArray.length > 6 && ctx_r2.currentPage > 2 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_20_r6 === ctx_r2.pageNumberArray.length - 2 && ctx_r2.pageNumberArray.length > 6 ? 4 : -1);
  }
}
var CustomPaginationComponent = class _CustomPaginationComponent {
  pagination;
  pageSize = 10;
  tableData = [];
  // pagination variables
  lastIndex = 0;
  totalData = 0;
  skip = 0;
  limit = this.pageSize;
  pageIndex = 0;
  serialNumberArray = [];
  currentPage = 1;
  pageNumberArray = [];
  pageSelection = [];
  totalPages = 0;
  //** / pagination variables
  constructor(pagination) {
    this.pagination = pagination;
    this.tableData = [];
    this.pagination.calculatePageSize.subscribe((res) => {
      this.calculateTotalPages(res.totalData, res.pageSize, res.tableData, res.serialNumberArray);
      this.pageSize = res.pageSize;
    });
    this.pagination.changePagesize.subscribe((res) => {
      this.changePageSize(res.pageSize);
    });
  }
  getMoreData(event) {
    if (event == "next") {
      this.currentPage++;
      this.pageIndex = this.currentPage - 1;
      this.limit += this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.pagination.tablePageSize.next({
        skip: this.skip,
        limit: this.limit,
        pageSize: this.pageSize
      });
    } else if (event == "previous") {
      this.currentPage--;
      this.pageIndex = this.currentPage - 1;
      this.limit -= this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.pagination.tablePageSize.next({
        skip: this.skip,
        limit: this.limit,
        pageSize: this.pageSize
      });
    }
  }
  moveToPage(pageNumber) {
    this.currentPage = pageNumber;
    this.skip = this.pageSelection[pageNumber - 1].skip;
    this.limit = this.pageSelection[pageNumber - 1].limit;
    if (pageNumber > this.currentPage) {
      this.pageIndex = pageNumber - 1;
    } else if (pageNumber < this.currentPage) {
      this.pageIndex = pageNumber + 1;
    }
    this.pagination.tablePageSize.next({
      skip: this.skip,
      limit: this.limit,
      pageSize: this.pageSize
    });
  }
  changePageSize(pageSize) {
    this.pageSelection = [];
    this.limit = pageSize;
    this.skip = 0;
    this.currentPage = 1;
    this.pagination.tablePageSize.next({
      skip: this.skip,
      limit: this.limit,
      pageSize: this.pageSize
    });
  }
  calculateTotalPages(totalData, pageSize, tableData, serialNumberArray) {
    this.tableData = tableData;
    this.pageNumberArray = [];
    this.serialNumberArray = serialNumberArray;
    this.totalData = totalData;
    this.totalPages = totalData / pageSize;
    if (this.totalPages % 1 != 0) {
      this.totalPages = Math.trunc(this.totalPages + 1);
    }
    for (let i = 1; i <= this.totalPages; i++) {
      const limit = pageSize * i;
      const skip = limit - pageSize;
      this.pageNumberArray.push(i);
      this.pageSelection.push({ skip, limit });
    }
  }
  static \u0275fac = function CustomPaginationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomPaginationComponent)(\u0275\u0275directiveInject(PaginationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomPaginationComponent, selectors: [["app-custom-pagination"]], decls: 15, vars: 6, consts: [[1, "row", "align-items-center", "mt-4"], [1, "col-md-2"], [1, "fs-14", "fw-500", "text-center", "text-md-start"], [1, "col-md-10"], [1, "pagination_section"], [1, "pagination"], [1, "page-item", 3, "ngClass"], ["tabindex", "1", 1, "page-link", 3, "click", "keydown"], [1, "fas", "fa-angle-left"], [1, "page-item", "next", 3, "ngClass"], [1, "fas", "fa-angle-right"], ["href", "javascript:void(0);", 1, "page-link", 3, "click"], ["tabindex", "1", 1, "page-item", 3, "hidden"], ["tabindex", "1", 1, "page-item", 3, "click", "keydown", "hidden"], ["href", "javascript:void(0);", 1, "page-link"]], template: function CustomPaginationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p", 2);
      \u0275\u0275text(3, "Page 1 of 2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "ul", 5)(7, "li", 6)(8, "a", 7);
      \u0275\u0275listener("click", function CustomPaginationComponent_Template_a_click_8_listener() {
        return ctx.getMoreData("previous");
      })("keydown", function CustomPaginationComponent_Template_a_keydown_8_listener() {
        return ctx.getMoreData("previous");
      });
      \u0275\u0275element(9, "i", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275repeaterCreate(10, CustomPaginationComponent_For_11_Template, 5, 6, null, null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementStart(12, "li", 9)(13, "a", 7);
      \u0275\u0275listener("click", function CustomPaginationComponent_Template_a_click_13_listener() {
        return ctx.getMoreData("next");
      })("keydown", function CustomPaginationComponent_Template_a_keydown_13_listener() {
        return ctx.getMoreData("next");
      });
      \u0275\u0275element(14, "i", 10);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c0, ctx.currentPage === 1));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.pageNumberArray);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c0, ctx.currentPage === ctx.pageNumberArray[ctx.pageNumberArray.length - 1] || ctx.tableData.length === 0));
    }
  }, dependencies: [CommonModule, NgClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomPaginationComponent, [{
    type: Component,
    args: [{ selector: "app-custom-pagination", imports: [CommonModule], template: `<div class="row align-items-center mt-4">
  <div class="col-md-2">
    <p class="fs-14 fw-500 text-center text-md-start">Page 1 of 2</p>
</div>

    <div class="col-md-10">
      <div class="pagination_section">
        <ul class="pagination">
          <li class="page-item" [ngClass]="{
              disabled: currentPage === 1
            }">
            <a (click)="getMoreData('previous')" (keydown)="getMoreData('previous')" tabindex="1" class="page-link"><i class="fas fa-angle-left"></i></a>

          </li>

          @for (item of pageNumberArray; track item; let i = $index) {
          <li class="page-item" [class.active]="item === currentPage" [ngClass]="
                (pageNumberArray[currentPage - 2] > item &&
                  item !==  1 &&
                  pageNumberArray.length > 6) ||
                (pageNumberArray[currentPage] < item &&
                  item !==  1 &&
                  pageNumberArray.length > 6 &&
                  pageNumberArray.length !==  item)
                  ? 'hide-page-no'
                  : 'show-page-no'
              ">
            <a (click)="moveToPage(item)" class="page-link" href="javascript:void(0);">
              {{ item }}
            </a>
          </li>
          @if (i === 0 && pageNumberArray.length > 6 && currentPage > 2) {
          <li class="page-item" [hidden]="currentPage === 1" (click)="moveToPage(currentPage - 2)" (keydown)="moveToPage(currentPage - 2)" tabindex="1">
            <a class="page-link" href="javascript:void(0);"> ... </a>
          </li>
          }
          @if (
          i === pageNumberArray.length - 2 && pageNumberArray.length > 6
          ) {
          <li [hidden]="
                currentPage >= pageNumberArray[pageNumberArray.length - 2] ||
                totalData < serialNumberArray[serialNumberArray.length - 1]
              " class="page-item" (click)="moveToPage(currentPage + 2)" (keydown)="moveToPage(currentPage + 2)" tabindex="1">
            <a class="page-link" href="javascript:void(0);"> ... </a>
          </li>
          }
          }

          <li class="page-item next" [ngClass]="{
              disabled:
                currentPage === pageNumberArray[pageNumberArray.length - 1] ||
                tableData.length === 0
            }">
            <a (click)="getMoreData('next')" (keydown)="getMoreData('next')" tabindex="1" class="page-link" ><i class="fas fa-angle-right"></i></a>
          </li>
        </ul>
      </div>
    </div>
</div>` }]
  }], () => [{ type: PaginationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomPaginationComponent, { className: "CustomPaginationComponent", filePath: "src/app/shared/service/custom-pagination/custom-pagination.component.ts", lineNumber: 16 });
})();

export {
  CustomPaginationComponent
};
//# sourceMappingURL=chunk-PUV6J7XP.js.map
