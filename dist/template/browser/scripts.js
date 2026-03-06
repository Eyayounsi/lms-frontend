/*! For license information please see quill.js.LICENSE.txt */
!(function(t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Quill = e() : t.Quill = e();
})(self, (function() {
  return (function() {
    var t = { 9698: function(t2, e2, n2) {
      "use strict";
      n2.d(e2, { Ay: function() {
        return c;
      }, Ji: function() {
        return d;
      }, mG: function() {
        return h;
      }, zo: function() {
        return u;
      } });
      var r2 = n2(6003), i = n2(5232), s = n2.n(i), o = n2(3036), l = n2(4850), a = n2(5508);
      class c extends r2.BlockBlot {
        cache = {};
        delta() {
          return null == this.cache.delta && (this.cache.delta = h(this)), this.cache.delta;
        }
        deleteAt(t3, e3) {
          super.deleteAt(t3, e3), this.cache = {};
        }
        formatAt(t3, e3, n3, i2) {
          e3 <= 0 || (this.scroll.query(n3, r2.Scope.BLOCK) ? t3 + e3 === this.length() && this.format(n3, i2) : super.formatAt(t3, Math.min(e3, this.length() - t3 - 1), n3, i2), this.cache = {});
        }
        insertAt(t3, e3, n3) {
          if (null != n3) return super.insertAt(t3, e3, n3), void (this.cache = {});
          if (0 === e3.length) return;
          const r3 = e3.split("\n"), i2 = r3.shift();
          i2.length > 0 && (t3 < this.length() - 1 || null == this.children.tail ? super.insertAt(Math.min(t3, this.length() - 1), i2) : this.children.tail.insertAt(this.children.tail.length(), i2), this.cache = {});
          let s2 = this;
          r3.reduce(((t4, e4) => (s2 = s2.split(t4, true), s2.insertAt(0, e4), e4.length)), t3 + i2.length);
        }
        insertBefore(t3, e3) {
          const { head: n3 } = this.children;
          super.insertBefore(t3, e3), n3 instanceof o.A && n3.remove(), this.cache = {};
        }
        length() {
          return null == this.cache.length && (this.cache.length = super.length() + 1), this.cache.length;
        }
        moveChildren(t3, e3) {
          super.moveChildren(t3, e3), this.cache = {};
        }
        optimize(t3) {
          super.optimize(t3), this.cache = {};
        }
        path(t3) {
          return super.path(t3, true);
        }
        removeChild(t3) {
          super.removeChild(t3), this.cache = {};
        }
        split(t3) {
          let e3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (e3 && (0 === t3 || t3 >= this.length() - 1)) {
            const e4 = this.clone();
            return 0 === t3 ? (this.parent.insertBefore(e4, this), this) : (this.parent.insertBefore(e4, this.next), e4);
          }
          const n3 = super.split(t3, e3);
          return this.cache = {}, n3;
        }
      }
      c.blotName = "block", c.tagName = "P", c.defaultChild = o.A, c.allowedChildren = [o.A, l.A, r2.EmbedBlot, a.A];
      class u extends r2.EmbedBlot {
        attach() {
          super.attach(), this.attributes = new r2.AttributorStore(this.domNode);
        }
        delta() {
          return new (s())().insert(this.value(), { ...this.formats(), ...this.attributes.values() });
        }
        format(t3, e3) {
          const n3 = this.scroll.query(t3, r2.Scope.BLOCK_ATTRIBUTE);
          null != n3 && this.attributes.attribute(n3, e3);
        }
        formatAt(t3, e3, n3, r3) {
          this.format(n3, r3);
        }
        insertAt(t3, e3, n3) {
          if (null != n3) return void super.insertAt(t3, e3, n3);
          const r3 = e3.split("\n"), i2 = r3.pop(), s2 = r3.map(((t4) => {
            const e4 = this.scroll.create(c.blotName);
            return e4.insertAt(0, t4), e4;
          })), o2 = this.split(t3);
          s2.forEach(((t4) => {
            this.parent.insertBefore(t4, o2);
          })), i2 && this.parent.insertBefore(this.scroll.create("text", i2), o2);
        }
      }
      function h(t3) {
        let e3 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return t3.descendants(r2.LeafBlot).reduce(((t4, n3) => 0 === n3.length() ? t4 : t4.insert(n3.value(), d(n3, {}, e3))), new (s())()).insert("\n", d(t3));
      }
      function d(t3) {
        let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n3 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return null == t3 ? e3 : ("formats" in t3 && "function" == typeof t3.formats && (e3 = { ...e3, ...t3.formats() }, n3 && delete e3["code-token"]), null == t3.parent || "scroll" === t3.parent.statics.blotName || t3.parent.statics.scope !== t3.statics.scope ? e3 : d(t3.parent, e3, n3));
      }
      u.scope = r2.Scope.BLOCK_BLOT;
    }, 3036: function(t2, e2, n2) {
      "use strict";
      var r2 = n2(6003);
      class i extends r2.EmbedBlot {
        static value() {
        }
        optimize() {
          (this.prev || this.next) && this.remove();
        }
        length() {
          return 0;
        }
        value() {
          return "";
        }
      }
      i.blotName = "break", i.tagName = "BR", e2.A = i;
    }, 580: function(t2, e2, n2) {
      "use strict";
      var r2 = n2(6003);
      class i extends r2.ContainerBlot {
      }
      e2.A = i;
    }, 4541: function(t2, e2, n2) {
      "use strict";
      var r2 = n2(6003), i = n2(5508);
      class s extends r2.EmbedBlot {
        static blotName = "cursor";
        static className = "ql-cursor";
        static tagName = "span";
        static CONTENTS = "\uFEFF";
        static value() {
        }
        constructor(t3, e3, n3) {
          super(t3, e3), this.selection = n3, this.textNode = document.createTextNode(s.CONTENTS), this.domNode.appendChild(this.textNode), this.savedLength = 0;
        }
        detach() {
          null != this.parent && this.parent.removeChild(this);
        }
        format(t3, e3) {
          if (0 !== this.savedLength) return void super.format(t3, e3);
          let n3 = this, i2 = 0;
          for (; null != n3 && n3.statics.scope !== r2.Scope.BLOCK_BLOT; ) i2 += n3.offset(n3.parent), n3 = n3.parent;
          null != n3 && (this.savedLength = s.CONTENTS.length, n3.optimize(), n3.formatAt(i2, s.CONTENTS.length, t3, e3), this.savedLength = 0);
        }
        index(t3, e3) {
          return t3 === this.textNode ? 0 : super.index(t3, e3);
        }
        length() {
          return this.savedLength;
        }
        position() {
          return [this.textNode, this.textNode.data.length];
        }
        remove() {
          super.remove(), this.parent = null;
        }
        restore() {
          if (this.selection.composing || null == this.parent) return null;
          const t3 = this.selection.getNativeRange();
          for (; null != this.domNode.lastChild && this.domNode.lastChild !== this.textNode; ) this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
          const e3 = this.prev instanceof i.A ? this.prev : null, n3 = e3 ? e3.length() : 0, r3 = this.next instanceof i.A ? this.next : null, o = r3 ? r3.text : "", { textNode: l } = this, a = l.data.split(s.CONTENTS).join("");
          let c;
          if (l.data = s.CONTENTS, e3) c = e3, (a || r3) && (e3.insertAt(e3.length(), a + o), r3 && r3.remove());
          else if (r3) c = r3, r3.insertAt(0, a);
          else {
            const t4 = document.createTextNode(a);
            c = this.scroll.create(t4), this.parent.insertBefore(c, this);
          }
          if (this.remove(), t3) {
            const i2 = (t4, i3) => e3 && t4 === e3.domNode ? i3 : t4 === l ? n3 + i3 - 1 : r3 && t4 === r3.domNode ? n3 + a.length + i3 : null, s2 = i2(t3.start.node, t3.start.offset), o2 = i2(t3.end.node, t3.end.offset);
            if (null !== s2 && null !== o2) return { startNode: c.domNode, startOffset: s2, endNode: c.domNode, endOffset: o2 };
          }
          return null;
        }
        update(t3, e3) {
          if (t3.some(((t4) => "characterData" === t4.type && t4.target === this.textNode))) {
            const t4 = this.restore();
            t4 && (e3.range = t4);
          }
        }
        optimize(t3) {
          super.optimize(t3);
          let { parent: e3 } = this;
          for (; e3; ) {
            if ("A" === e3.domNode.tagName) {
              this.savedLength = s.CONTENTS.length, e3.isolate(this.offset(e3), this.length()).unwrap(), this.savedLength = 0;
              break;
            }
            e3 = e3.parent;
          }
        }
        value() {
          return "";
        }
      }
      e2.A = s;
    }, 746: function(t2, e2, n2) {
      "use strict";
      var r2 = n2(6003), i = n2(5508);
      const s = "\uFEFF";
      class o extends r2.EmbedBlot {
        constructor(t3, e3) {
          super(t3, e3), this.contentNode = document.createElement("span"), this.contentNode.setAttribute("contenteditable", "false"), Array.from(this.domNode.childNodes).forEach(((t4) => {
            this.contentNode.appendChild(t4);
          })), this.leftGuard = document.createTextNode(s), this.rightGuard = document.createTextNode(s), this.domNode.appendChild(this.leftGuard), this.domNode.appendChild(this.contentNode), this.domNode.appendChild(this.rightGuard);
        }
        index(t3, e3) {
          return t3 === this.leftGuard ? 0 : t3 === this.rightGuard ? 1 : super.index(t3, e3);
        }
        restore(t3) {
          let e3, n3 = null;
          const r3 = t3.data.split(s).join("");
          if (t3 === this.leftGuard) if (this.prev instanceof i.A) {
            const t4 = this.prev.length();
            this.prev.insertAt(t4, r3), n3 = { startNode: this.prev.domNode, startOffset: t4 + r3.length };
          } else e3 = document.createTextNode(r3), this.parent.insertBefore(this.scroll.create(e3), this), n3 = { startNode: e3, startOffset: r3.length };
          else t3 === this.rightGuard && (this.next instanceof i.A ? (this.next.insertAt(0, r3), n3 = { startNode: this.next.domNode, startOffset: r3.length }) : (e3 = document.createTextNode(r3), this.parent.insertBefore(this.scroll.create(e3), this.next), n3 = { startNode: e3, startOffset: r3.length }));
          return t3.data = s, n3;
        }
        update(t3, e3) {
          t3.forEach(((t4) => {
            if ("characterData" === t4.type && (t4.target === this.leftGuard || t4.target === this.rightGuard)) {
              const n3 = this.restore(t4.target);
              n3 && (e3.range = n3);
            }
          }));
        }
      }
      e2.A = o;
    }, 4850: function(t2, e2, n2) {
      "use strict";
      var r2 = n2(6003), i = n2(3036), s = n2(5508);
      class o extends r2.InlineBlot {
        static allowedChildren = [o, i.A, r2.EmbedBlot, s.A];
        static order = ["cursor", "inline", "link", "underline", "strike", "italic", "bold", "script", "code"];
        static compare(t3, e3) {
          const n3 = o.order.indexOf(t3), r3 = o.order.indexOf(e3);
          return n3 >= 0 || r3 >= 0 ? n3 - r3 : t3 === e3 ? 0 : t3 < e3 ? -1 : 1;
        }
        formatAt(t3, e3, n3, i2) {
          if (o.compare(this.statics.blotName, n3) < 0 && this.scroll.query(n3, r2.Scope.BLOT)) {
            const r3 = this.isolate(t3, e3);
            i2 && r3.wrap(n3, i2);
          } else super.formatAt(t3, e3, n3, i2);
        }
        optimize(t3) {
          if (super.optimize(t3), this.parent instanceof o && o.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
            const t4 = this.parent.isolate(this.offset(), this.length());
            this.moveChildren(t4), t4.wrap(this);
          }
        }
      }
      e2.A = o;
    }, 5508: function(t2, e2, n2) {
      "use strict";
      n2.d(e2, { A: function() {
        return i;
      }, X: function() {
        return o;
      } });
      var r2 = n2(6003);
      class i extends r2.TextBlot {
      }
      const s = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
      function o(t3) {
        return t3.replace(/[&<>"']/g, ((t4) => s[t4]));
      }
    }, 3729: function(t2, e2, n2) {
      "use strict";
      n2.d(e2, { default: function() {
        return R;
      } });
      var r2 = n2(6142), i = n2(9698), s = n2(3036), o = n2(580), l = n2(4541), a = n2(746), c = n2(4850), u = n2(6003), h = n2(5232), d = n2.n(h), f = n2(5374);
      function p(t3) {
        return t3 instanceof i.Ay || t3 instanceof i.zo;
      }
      function g(t3) {
        return "function" == typeof t3.updateContent;
      }
      class m extends u.ScrollBlot {
        static blotName = "scroll";
        static className = "ql-editor";
        static tagName = "DIV";
        static defaultChild = i.Ay;
        static allowedChildren = [i.Ay, i.zo, o.A];
        constructor(t3, e3, n3) {
          let { emitter: r3 } = n3;
          super(t3, e3), this.emitter = r3, this.batch = false, this.optimize(), this.enable(), this.domNode.addEventListener("dragstart", ((t4) => this.handleDragStart(t4)));
        }
        batchStart() {
          Array.isArray(this.batch) || (this.batch = []);
        }
        batchEnd() {
          if (!this.batch) return;
          const t3 = this.batch;
          this.batch = false, this.update(t3);
        }
        emitMount(t3) {
          this.emitter.emit(f.A.events.SCROLL_BLOT_MOUNT, t3);
        }
        emitUnmount(t3) {
          this.emitter.emit(f.A.events.SCROLL_BLOT_UNMOUNT, t3);
        }
        emitEmbedUpdate(t3, e3) {
          this.emitter.emit(f.A.events.SCROLL_EMBED_UPDATE, t3, e3);
        }
        deleteAt(t3, e3) {
          const [n3, r3] = this.line(t3), [o2] = this.line(t3 + e3);
          if (super.deleteAt(t3, e3), null != o2 && n3 !== o2 && r3 > 0) {
            if (n3 instanceof i.zo || o2 instanceof i.zo) return void this.optimize();
            const t4 = o2.children.head instanceof s.A ? null : o2.children.head;
            n3.moveChildren(o2, t4), n3.remove();
          }
          this.optimize();
        }
        enable() {
          let t3 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.domNode.setAttribute("contenteditable", t3 ? "true" : "false");
        }
        formatAt(t3, e3, n3, r3) {
          super.formatAt(t3, e3, n3, r3), this.optimize();
        }
        insertAt(t3, e3, n3) {
          if (t3 >= this.length()) if (null == n3 || null == this.scroll.query(e3, u.Scope.BLOCK)) {
            const t4 = this.scroll.create(this.statics.defaultChild.blotName);
            this.appendChild(t4), null == n3 && e3.endsWith("\n") ? t4.insertAt(0, e3.slice(0, -1), n3) : t4.insertAt(0, e3, n3);
          } else {
            const t4 = this.scroll.create(e3, n3);
            this.appendChild(t4);
          }
          else super.insertAt(t3, e3, n3);
          this.optimize();
        }
        insertBefore(t3, e3) {
          if (t3.statics.scope === u.Scope.INLINE_BLOT) {
            const n3 = this.scroll.create(this.statics.defaultChild.blotName);
            n3.appendChild(t3), super.insertBefore(n3, e3);
          } else super.insertBefore(t3, e3);
        }
        insertContents(t3, e3) {
          const n3 = this.deltaToRenderBlocks(e3.concat(new (d())().insert("\n"))), r3 = n3.pop();
          if (null == r3) return;
          this.batchStart();
          const s2 = n3.shift();
          if (s2) {
            const e4 = "block" === s2.type && (0 === s2.delta.length() || !this.descendant(i.zo, t3)[0] && t3 < this.length()), n4 = "block" === s2.type ? s2.delta : new (d())().insert({ [s2.key]: s2.value });
            b(this, t3, n4);
            const r4 = "block" === s2.type ? 1 : 0, o3 = t3 + n4.length() + r4;
            e4 && this.insertAt(o3 - 1, "\n");
            const l3 = (0, i.Ji)(this.line(t3)[0]), a2 = h.AttributeMap.diff(l3, s2.attributes) || {};
            Object.keys(a2).forEach(((t4) => {
              this.formatAt(o3 - 1, 1, t4, a2[t4]);
            })), t3 = o3;
          }
          let [o2, l2] = this.children.find(t3);
          n3.length && (o2 && (o2 = o2.split(l2), l2 = 0), n3.forEach(((t4) => {
            if ("block" === t4.type) b(this.createBlock(t4.attributes, o2 || void 0), 0, t4.delta);
            else {
              const e4 = this.create(t4.key, t4.value);
              this.insertBefore(e4, o2 || void 0), Object.keys(t4.attributes).forEach(((n4) => {
                e4.format(n4, t4.attributes[n4]);
              }));
            }
          }))), "block" === r3.type && r3.delta.length() && b(this, o2 ? o2.offset(o2.scroll) + l2 : this.length(), r3.delta), this.batchEnd(), this.optimize();
        }
        isEnabled() {
          return "true" === this.domNode.getAttribute("contenteditable");
        }
        leaf(t3) {
          const e3 = this.path(t3).pop();
          if (!e3) return [null, -1];
          const [n3, r3] = e3;
          return n3 instanceof u.LeafBlot ? [n3, r3] : [null, -1];
        }
        line(t3) {
          return t3 === this.length() ? this.line(t3 - 1) : this.descendant(p, t3);
        }
        lines() {
          let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE;
          const n3 = (t4, e4, r3) => {
            let i2 = [], s2 = r3;
            return t4.children.forEachAt(e4, r3, ((t5, e5, r4) => {
              p(t5) ? i2.push(t5) : t5 instanceof u.ContainerBlot && (i2 = i2.concat(n3(t5, e5, s2))), s2 -= r4;
            })), i2;
          };
          return n3(this, t3, e3);
        }
        optimize() {
          let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          this.batch || (super.optimize(t3, e3), t3.length > 0 && this.emitter.emit(f.A.events.SCROLL_OPTIMIZE, t3, e3));
        }
        path(t3) {
          return super.path(t3).slice(1);
        }
        remove() {
        }
        update(t3) {
          if (this.batch) return void (Array.isArray(t3) && (this.batch = this.batch.concat(t3)));
          let e3 = f.A.sources.USER;
          "string" == typeof t3 && (e3 = t3), Array.isArray(t3) || (t3 = this.observer.takeRecords()), (t3 = t3.filter(((t4) => {
            let { target: e4 } = t4;
            const n3 = this.find(e4, true);
            return n3 && !g(n3);
          }))).length > 0 && this.emitter.emit(f.A.events.SCROLL_BEFORE_UPDATE, e3, t3), super.update(t3.concat([])), t3.length > 0 && this.emitter.emit(f.A.events.SCROLL_UPDATE, e3, t3);
        }
        updateEmbedAt(t3, e3, n3) {
          const [r3] = this.descendant(((t4) => t4 instanceof i.zo), t3);
          r3 && r3.statics.blotName === e3 && g(r3) && r3.updateContent(n3);
        }
        handleDragStart(t3) {
          t3.preventDefault();
        }
        deltaToRenderBlocks(t3) {
          const e3 = [];
          let n3 = new (d())();
          return t3.forEach(((t4) => {
            const r3 = t4?.insert;
            if (r3) if ("string" == typeof r3) {
              const i2 = r3.split("\n");
              i2.slice(0, -1).forEach(((r4) => {
                n3.insert(r4, t4.attributes), e3.push({ type: "block", delta: n3, attributes: t4.attributes ?? {} }), n3 = new (d())();
              }));
              const s2 = i2[i2.length - 1];
              s2 && n3.insert(s2, t4.attributes);
            } else {
              const i2 = Object.keys(r3)[0];
              if (!i2) return;
              this.query(i2, u.Scope.INLINE) ? n3.push(t4) : (n3.length() && e3.push({ type: "block", delta: n3, attributes: {} }), n3 = new (d())(), e3.push({ type: "blockEmbed", key: i2, value: r3[i2], attributes: t4.attributes ?? {} }));
            }
          })), n3.length() && e3.push({ type: "block", delta: n3, attributes: {} }), e3;
        }
        createBlock(t3, e3) {
          let n3;
          const r3 = {};
          Object.entries(t3).forEach(((t4) => {
            let [e4, i3] = t4;
            null != this.query(e4, u.Scope.BLOCK & u.Scope.BLOT) ? n3 = e4 : r3[e4] = i3;
          }));
          const i2 = this.create(n3 || this.statics.defaultChild.blotName, n3 ? t3[n3] : void 0);
          this.insertBefore(i2, e3 || void 0);
          const s2 = i2.length();
          return Object.entries(r3).forEach(((t4) => {
            let [e4, n4] = t4;
            i2.formatAt(0, s2, e4, n4);
          })), i2;
        }
      }
      function b(t3, e3, n3) {
        n3.reduce(((e4, n4) => {
          const r3 = h.Op.length(n4);
          let s2 = n4.attributes || {};
          if (null != n4.insert) {
            if ("string" == typeof n4.insert) {
              const r4 = n4.insert;
              t3.insertAt(e4, r4);
              const [o2] = t3.descendant(u.LeafBlot, e4), l2 = (0, i.Ji)(o2);
              s2 = h.AttributeMap.diff(l2, s2) || {};
            } else if ("object" == typeof n4.insert) {
              const r4 = Object.keys(n4.insert)[0];
              if (null == r4) return e4;
              if (t3.insertAt(e4, r4, n4.insert[r4]), null != t3.scroll.query(r4, u.Scope.INLINE)) {
                const [n5] = t3.descendant(u.LeafBlot, e4), r5 = (0, i.Ji)(n5);
                s2 = h.AttributeMap.diff(r5, s2) || {};
              }
            }
          }
          return Object.keys(s2).forEach(((n5) => {
            t3.formatAt(e4, r3, n5, s2[n5]);
          })), e4 + r3;
        }), e3);
      }
      var y = m, v = n2(5508), A = n2(584), x = n2(4266);
      class N extends x.A {
        static DEFAULTS = { delay: 1e3, maxStack: 100, userOnly: false };
        lastRecorded = 0;
        ignoreChange = false;
        stack = { undo: [], redo: [] };
        currentRange = null;
        constructor(t3, e3) {
          super(t3, e3), this.quill.on(r2.Ay.events.EDITOR_CHANGE, ((t4, e4, n3, i2) => {
            t4 === r2.Ay.events.SELECTION_CHANGE ? e4 && i2 !== r2.Ay.sources.SILENT && (this.currentRange = e4) : t4 === r2.Ay.events.TEXT_CHANGE && (this.ignoreChange || (this.options.userOnly && i2 !== r2.Ay.sources.USER ? this.transform(e4) : this.record(e4, n3)), this.currentRange = w(this.currentRange, e4));
          })), this.quill.keyboard.addBinding({ key: "z", shortKey: true }, this.undo.bind(this)), this.quill.keyboard.addBinding({ key: ["z", "Z"], shortKey: true, shiftKey: true }, this.redo.bind(this)), /Win/i.test(navigator.platform) && this.quill.keyboard.addBinding({ key: "y", shortKey: true }, this.redo.bind(this)), this.quill.root.addEventListener("beforeinput", ((t4) => {
            "historyUndo" === t4.inputType ? (this.undo(), t4.preventDefault()) : "historyRedo" === t4.inputType && (this.redo(), t4.preventDefault());
          }));
        }
        change(t3, e3) {
          if (0 === this.stack[t3].length) return;
          const n3 = this.stack[t3].pop();
          if (!n3) return;
          const i2 = this.quill.getContents(), s2 = n3.delta.invert(i2);
          this.stack[e3].push({ delta: s2, range: w(n3.range, s2) }), this.lastRecorded = 0, this.ignoreChange = true, this.quill.updateContents(n3.delta, r2.Ay.sources.USER), this.ignoreChange = false, this.restoreSelection(n3);
        }
        clear() {
          this.stack = { undo: [], redo: [] };
        }
        cutoff() {
          this.lastRecorded = 0;
        }
        record(t3, e3) {
          if (0 === t3.ops.length) return;
          this.stack.redo = [];
          let n3 = t3.invert(e3), r3 = this.currentRange;
          const i2 = Date.now();
          if (this.lastRecorded + this.options.delay > i2 && this.stack.undo.length > 0) {
            const t4 = this.stack.undo.pop();
            t4 && (n3 = n3.compose(t4.delta), r3 = t4.range);
          } else this.lastRecorded = i2;
          0 !== n3.length() && (this.stack.undo.push({ delta: n3, range: r3 }), this.stack.undo.length > this.options.maxStack && this.stack.undo.shift());
        }
        redo() {
          this.change("redo", "undo");
        }
        transform(t3) {
          E(this.stack.undo, t3), E(this.stack.redo, t3);
        }
        undo() {
          this.change("undo", "redo");
        }
        restoreSelection(t3) {
          if (t3.range) this.quill.setSelection(t3.range, r2.Ay.sources.USER);
          else {
            const e3 = (function(t4, e4) {
              const n3 = e4.reduce(((t5, e5) => t5 + (e5.delete || 0)), 0);
              let r3 = e4.length() - n3;
              return (function(t5, e5) {
                const n4 = e5.ops[e5.ops.length - 1];
                return null != n4 && (null != n4.insert ? "string" == typeof n4.insert && n4.insert.endsWith("\n") : null != n4.attributes && Object.keys(n4.attributes).some(((e6) => null != t5.query(e6, u.Scope.BLOCK))));
              })(t4, e4) && (r3 -= 1), r3;
            })(this.quill.scroll, t3.delta);
            this.quill.setSelection(e3, r2.Ay.sources.USER);
          }
        }
      }
      function E(t3, e3) {
        let n3 = e3;
        for (let e4 = t3.length - 1; e4 >= 0; e4 -= 1) {
          const r3 = t3[e4];
          t3[e4] = { delta: n3.transform(r3.delta, true), range: r3.range && w(r3.range, n3) }, n3 = r3.delta.transform(n3), 0 === t3[e4].delta.length() && t3.splice(e4, 1);
        }
      }
      function w(t3, e3) {
        if (!t3) return t3;
        const n3 = e3.transformPosition(t3.index);
        return { index: n3, length: e3.transformPosition(t3.index + t3.length) - n3 };
      }
      var q = n2(8123);
      class k extends x.A {
        constructor(t3, e3) {
          super(t3, e3), t3.root.addEventListener("drop", ((e4) => {
            e4.preventDefault();
            let n3 = null;
            if (document.caretRangeFromPoint) n3 = document.caretRangeFromPoint(e4.clientX, e4.clientY);
            else if (document.caretPositionFromPoint) {
              const t4 = document.caretPositionFromPoint(e4.clientX, e4.clientY);
              n3 = document.createRange(), n3.setStart(t4.offsetNode, t4.offset), n3.setEnd(t4.offsetNode, t4.offset);
            }
            const r3 = n3 && t3.selection.normalizeNative(n3);
            if (r3) {
              const n4 = t3.selection.normalizedToRange(r3);
              e4.dataTransfer?.files && this.upload(n4, e4.dataTransfer.files);
            }
          }));
        }
        upload(t3, e3) {
          const n3 = [];
          Array.from(e3).forEach(((t4) => {
            t4 && this.options.mimetypes?.includes(t4.type) && n3.push(t4);
          })), n3.length > 0 && this.options.handler.call(this, t3, n3);
        }
      }
      k.DEFAULTS = { mimetypes: ["image/png", "image/jpeg"], handler(t3, e3) {
        if (!this.quill.scroll.query("image")) return;
        const n3 = e3.map(((t4) => new Promise(((e4) => {
          const n4 = new FileReader();
          n4.onload = () => {
            e4(n4.result);
          }, n4.readAsDataURL(t4);
        }))));
        Promise.all(n3).then(((e4) => {
          const n4 = e4.reduce(((t4, e5) => t4.insert({ image: e5 })), new (d())().retain(t3.index).delete(t3.length));
          this.quill.updateContents(n4, f.A.sources.USER), this.quill.setSelection(t3.index + e4.length, f.A.sources.SILENT);
        }));
      } };
      var _ = k;
      const L = ["insertText", "insertReplacementText"];
      class S extends x.A {
        constructor(t3, e3) {
          super(t3, e3), t3.root.addEventListener("beforeinput", ((t4) => {
            this.handleBeforeInput(t4);
          })), /Android/i.test(navigator.userAgent) || t3.on(r2.Ay.events.COMPOSITION_BEFORE_START, (() => {
            this.handleCompositionStart();
          }));
        }
        deleteRange(t3) {
          (0, q.Xo)({ range: t3, quill: this.quill });
        }
        replaceText(t3) {
          let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          if (0 === t3.length) return false;
          if (e3) {
            const n3 = this.quill.getFormat(t3.index, 1);
            this.deleteRange(t3), this.quill.updateContents(new (d())().retain(t3.index).insert(e3, n3), r2.Ay.sources.USER);
          } else this.deleteRange(t3);
          return this.quill.setSelection(t3.index + e3.length, 0, r2.Ay.sources.SILENT), true;
        }
        handleBeforeInput(t3) {
          if (this.quill.composition.isComposing || t3.defaultPrevented || !L.includes(t3.inputType)) return;
          const e3 = t3.getTargetRanges ? t3.getTargetRanges()[0] : null;
          if (!e3 || true === e3.collapsed) return;
          const n3 = (function(t4) {
            return "string" == typeof t4.data ? t4.data : t4.dataTransfer?.types.includes("text/plain") ? t4.dataTransfer.getData("text/plain") : null;
          })(t3);
          if (null == n3) return;
          const r3 = this.quill.selection.normalizeNative(e3), i2 = r3 ? this.quill.selection.normalizedToRange(r3) : null;
          i2 && this.replaceText(i2, n3) && t3.preventDefault();
        }
        handleCompositionStart() {
          const t3 = this.quill.getSelection();
          t3 && this.replaceText(t3);
        }
      }
      var O = S;
      const T = /Mac/i.test(navigator.platform);
      class j extends x.A {
        isListening = false;
        selectionChangeDeadline = 0;
        constructor(t3, e3) {
          super(t3, e3), this.handleArrowKeys(), this.handleNavigationShortcuts();
        }
        handleArrowKeys() {
          this.quill.keyboard.addBinding({ key: ["ArrowLeft", "ArrowRight"], offset: 0, shiftKey: null, handler(t3, e3) {
            let { line: n3, event: i2 } = e3;
            if (!(n3 instanceof u.ParentBlot && n3.uiNode)) return true;
            const s2 = "rtl" === getComputedStyle(n3.domNode).direction;
            return !!(s2 && "ArrowRight" !== i2.key || !s2 && "ArrowLeft" !== i2.key) || (this.quill.setSelection(t3.index - 1, t3.length + (i2.shiftKey ? 1 : 0), r2.Ay.sources.USER), false);
          } });
        }
        handleNavigationShortcuts() {
          this.quill.root.addEventListener("keydown", ((t3) => {
            !t3.defaultPrevented && ((t4) => "ArrowLeft" === t4.key || "ArrowRight" === t4.key || "ArrowUp" === t4.key || "ArrowDown" === t4.key || "Home" === t4.key || !(!T || "a" !== t4.key || true !== t4.ctrlKey))(t3) && this.ensureListeningToSelectionChange();
          }));
        }
        ensureListeningToSelectionChange() {
          this.selectionChangeDeadline = Date.now() + 100, this.isListening || (this.isListening = true, document.addEventListener("selectionchange", (() => {
            this.isListening = false, Date.now() <= this.selectionChangeDeadline && this.handleSelectionChange();
          }), { once: true }));
        }
        handleSelectionChange() {
          const t3 = document.getSelection();
          if (!t3) return;
          const e3 = t3.getRangeAt(0);
          if (true !== e3.collapsed || 0 !== e3.startOffset) return;
          const n3 = this.quill.scroll.find(e3.startContainer);
          if (!(n3 instanceof u.ParentBlot && n3.uiNode)) return;
          const r3 = document.createRange();
          r3.setStartAfter(n3.uiNode), r3.setEndAfter(n3.uiNode), t3.removeAllRanges(), t3.addRange(r3);
        }
      }
      var C = j;
      r2.Ay.register({ "blots/block": i.Ay, "blots/block/embed": i.zo, "blots/break": s.A, "blots/container": o.A, "blots/cursor": l.A, "blots/embed": a.A, "blots/inline": c.A, "blots/scroll": y, "blots/text": v.A, "modules/clipboard": A.Ay, "modules/history": N, "modules/keyboard": q.Ay, "modules/uploader": _, "modules/input": O, "modules/uiNode": C });
      var R = r2.Ay;
    }, 5374: function(t2, e2, n2) {
      "use strict";
      n2.d(e2, { A: function() {
        return o;
      } });
      var r2 = n2(8920), i = n2(7356);
      const s = (0, n2(6078).A)("quill:events");
      ["selectionchange", "mousedown", "mouseup", "click"].forEach(((t3) => {
        document.addEventListener(t3, (function() {
          for (var t4 = arguments.length, e3 = new Array(t4), n3 = 0; n3 < t4; n3++) e3[n3] = arguments[n3];
          Array.from(document.querySelectorAll(".ql-container")).forEach(((t5) => {
            const n4 = i.A.get(t5);
            n4 && n4.emitter && n4.emitter.handleDOM(...e3);
          }));
        }));
      }));
      var o = class extends r2 {
        static events = { EDITOR_CHANGE: "editor-change", SCROLL_BEFORE_UPDATE: "scroll-before-update", SCROLL_BLOT_MOUNT: "scroll-blot-mount", SCROLL_BLOT_UNMOUNT: "scroll-blot-unmount", SCROLL_OPTIMIZE: "scroll-optimize", SCROLL_UPDATE: "scroll-update", SCROLL_EMBED_UPDATE: "scroll-embed-update", SELECTION_CHANGE: "selection-change", TEXT_CHANGE: "text-change", COMPOSITION_BEFORE_START: "composition-before-start", COMPOSITION_START: "composition-start", COMPOSITION_BEFORE_END: "composition-before-end", COMPOSITION_END: "composition-end" };
        static sources = { API: "api", SILENT: "silent", USER: "user" };
        constructor() {
          super(), this.domListeners = {}, this.on("error", s.error);
        }
        emit() {
          for (var t3 = arguments.length, e3 = new Array(t3), n3 = 0; n3 < t3; n3++) e3[n3] = arguments[n3];
          return s.log.call(s, ...e3), super.emit(...e3);
        }
        handleDOM(t3) {
          for (var e3 = arguments.length, n3 = new Array(e3 > 1 ? e3 - 1 : 0), r3 = 1; r3 < e3; r3++) n3[r3 - 1] = arguments[r3];
          (this.domListeners[t3.type] || []).forEach(((e4) => {
            let { node: r4, handler: i2 } = e4;
            (t3.target === r4 || r4.contains(t3.target)) && i2(t3, ...n3);
          }));
        }
        listenDOM(t3, e3, n3) {
          this.domListeners[t3] || (this.domListeners[t3] = []), this.domListeners[t3].push({ node: e3, handler: n3 });
        }
      };
    }, 7356: function(t2, e2) {
      "use strict";
      e2.A = /* @__PURE__ */ new WeakMap();
    }, 6078: function(t2, e2) {
      "use strict";
      const n2 = ["error", "warn", "log", "info"];
      let r2 = "warn";
      function i(t3) {
        if (r2 && n2.indexOf(t3) <= n2.indexOf(r2)) {
          for (var e3 = arguments.length, i2 = new Array(e3 > 1 ? e3 - 1 : 0), s2 = 1; s2 < e3; s2++) i2[s2 - 1] = arguments[s2];
          console[t3](...i2);
        }
      }
      function s(t3) {
        return n2.reduce(((e3, n3) => (e3[n3] = i.bind(console, n3, t3), e3)), {});
      }
      s.level = (t3) => {
        r2 = t3;
      }, i.level = s.level, e2.A = s;
    }, 4266: function(t2, e2) {
      "use strict";
      e2.A = class {
        static DEFAULTS = {};
        constructor(t3) {
          let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          this.quill = t3, this.options = e3;
        }
      };
    }, 6142: function(t2, e2, n2) {
      "use strict";
      n2.d(e2, { Ay: function() {
        return I;
      } });
      var r2 = n2(8347), i = n2(6003), s = n2(5232), o = n2.n(s), l = n2(3707), a = n2(5123), c = n2(9698), u = n2(3036), h = n2(4541), d = n2(5508), f = n2(8298);
      const p = /^[ -~]*$/;
      function g(t3, e3, n3) {
        if (0 === t3.length) {
          const [t4] = y(n3.pop());
          return e3 <= 0 ? `</li></${t4}>` : `</li></${t4}>${g([], e3 - 1, n3)}`;
        }
        const [{ child: r3, offset: i2, length: s2, indent: o2, type: l2 }, ...a2] = t3, [c2, u2] = y(l2);
        if (o2 > e3) return n3.push(l2), o2 === e3 + 1 ? `<${c2}><li${u2}>${m(r3, i2, s2)}${g(a2, o2, n3)}` : `<${c2}><li>${g(t3, e3 + 1, n3)}`;
        const h2 = n3[n3.length - 1];
        if (o2 === e3 && l2 === h2) return `</li><li${u2}>${m(r3, i2, s2)}${g(a2, o2, n3)}`;
        const [d2] = y(n3.pop());
        return `</li></${d2}>${g(t3, e3 - 1, n3)}`;
      }
      function m(t3, e3, n3) {
        let r3 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if ("html" in t3 && "function" == typeof t3.html) return t3.html(e3, n3);
        if (t3 instanceof d.A) return (0, d.X)(t3.value().slice(e3, e3 + n3)).replaceAll(" ", "&nbsp;");
        if (t3 instanceof i.ParentBlot) {
          if ("list-container" === t3.statics.blotName) {
            const r4 = [];
            return t3.children.forEachAt(e3, n3, ((t4, e4, n4) => {
              const i3 = "formats" in t4 && "function" == typeof t4.formats ? t4.formats() : {};
              r4.push({ child: t4, offset: e4, length: n4, indent: i3.indent || 0, type: i3.list });
            })), g(r4, -1, []);
          }
          const i2 = [];
          if (t3.children.forEachAt(e3, n3, ((t4, e4, n4) => {
            i2.push(m(t4, e4, n4));
          })), r3 || "list" === t3.statics.blotName) return i2.join("");
          const { outerHTML: s2, innerHTML: o2 } = t3.domNode, [l2, a2] = s2.split(`>${o2}<`);
          return "<table" === l2 ? `<table style="border: 1px solid #000;">${i2.join("")}<${a2}` : `${l2}>${i2.join("")}<${a2}`;
        }
        return t3.domNode instanceof Element ? t3.domNode.outerHTML : "";
      }
      function b(t3, e3) {
        return Object.keys(e3).reduce(((n3, r3) => {
          if (null == t3[r3]) return n3;
          const i2 = e3[r3];
          return i2 === t3[r3] ? n3[r3] = i2 : Array.isArray(i2) ? i2.indexOf(t3[r3]) < 0 ? n3[r3] = i2.concat([t3[r3]]) : n3[r3] = i2 : n3[r3] = [i2, t3[r3]], n3;
        }), {});
      }
      function y(t3) {
        const e3 = "ordered" === t3 ? "ol" : "ul";
        switch (t3) {
          case "checked":
            return [e3, ' data-list="checked"'];
          case "unchecked":
            return [e3, ' data-list="unchecked"'];
          default:
            return [e3, ""];
        }
      }
      function v(t3) {
        return t3.reduce(((t4, e3) => {
          if ("string" == typeof e3.insert) {
            const n3 = e3.insert.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
            return t4.insert(n3, e3.attributes);
          }
          return t4.push(e3);
        }), new (o())());
      }
      function A(t3, e3) {
        let { index: n3, length: r3 } = t3;
        return new f.Q(n3 + e3, r3);
      }
      var x = class {
        constructor(t3) {
          this.scroll = t3, this.delta = this.getDelta();
        }
        applyDelta(t3) {
          this.scroll.update();
          let e3 = this.scroll.length();
          this.scroll.batchStart();
          const n3 = v(t3), l2 = new (o())();
          return (function(t4) {
            const e4 = [];
            return t4.forEach(((t5) => {
              "string" == typeof t5.insert ? t5.insert.split("\n").forEach(((n4, r3) => {
                r3 && e4.push({ insert: "\n", attributes: t5.attributes }), n4 && e4.push({ insert: n4, attributes: t5.attributes });
              })) : e4.push(t5);
            })), e4;
          })(n3.ops.slice()).reduce(((t4, n4) => {
            const o2 = s.Op.length(n4);
            let a2 = n4.attributes || {}, u2 = false, h2 = false;
            if (null != n4.insert) {
              if (l2.retain(o2), "string" == typeof n4.insert) {
                const o3 = n4.insert;
                h2 = !o3.endsWith("\n") && (e3 <= t4 || !!this.scroll.descendant(c.zo, t4)[0]), this.scroll.insertAt(t4, o3);
                const [l3, u3] = this.scroll.line(t4);
                let d2 = (0, r2.A)({}, (0, c.Ji)(l3));
                if (l3 instanceof c.Ay) {
                  const [t5] = l3.descendant(i.LeafBlot, u3);
                  t5 && (d2 = (0, r2.A)(d2, (0, c.Ji)(t5)));
                }
                a2 = s.AttributeMap.diff(d2, a2) || {};
              } else if ("object" == typeof n4.insert) {
                const o3 = Object.keys(n4.insert)[0];
                if (null == o3) return t4;
                const l3 = null != this.scroll.query(o3, i.Scope.INLINE);
                if (l3) (e3 <= t4 || this.scroll.descendant(c.zo, t4)[0]) && (h2 = true);
                else if (t4 > 0) {
                  const [e4, n5] = this.scroll.descendant(i.LeafBlot, t4 - 1);
                  e4 instanceof d.A ? "\n" !== e4.value()[n5] && (u2 = true) : e4 instanceof i.EmbedBlot && e4.statics.scope === i.Scope.INLINE_BLOT && (u2 = true);
                }
                if (this.scroll.insertAt(t4, o3, n4.insert[o3]), l3) {
                  const [e4] = this.scroll.descendant(i.LeafBlot, t4);
                  if (e4) {
                    const t5 = (0, r2.A)({}, (0, c.Ji)(e4));
                    a2 = s.AttributeMap.diff(t5, a2) || {};
                  }
                }
              }
              e3 += o2;
            } else if (l2.push(n4), null !== n4.retain && "object" == typeof n4.retain) {
              const e4 = Object.keys(n4.retain)[0];
              if (null == e4) return t4;
              this.scroll.updateEmbedAt(t4, e4, n4.retain[e4]);
            }
            Object.keys(a2).forEach(((e4) => {
              this.scroll.formatAt(t4, o2, e4, a2[e4]);
            }));
            const f2 = u2 ? 1 : 0, p2 = h2 ? 1 : 0;
            return e3 += f2 + p2, l2.retain(f2), l2.delete(p2), t4 + o2 + f2 + p2;
          }), 0), l2.reduce(((t4, e4) => "number" == typeof e4.delete ? (this.scroll.deleteAt(t4, e4.delete), t4) : t4 + s.Op.length(e4)), 0), this.scroll.batchEnd(), this.scroll.optimize(), this.update(n3);
        }
        deleteText(t3, e3) {
          return this.scroll.deleteAt(t3, e3), this.update(new (o())().retain(t3).delete(e3));
        }
        formatLine(t3, e3) {
          let n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          this.scroll.update(), Object.keys(n3).forEach(((r4) => {
            this.scroll.lines(t3, Math.max(e3, 1)).forEach(((t4) => {
              t4.format(r4, n3[r4]);
            }));
          })), this.scroll.optimize();
          const r3 = new (o())().retain(t3).retain(e3, (0, l.A)(n3));
          return this.update(r3);
        }
        formatText(t3, e3) {
          let n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          Object.keys(n3).forEach(((r4) => {
            this.scroll.formatAt(t3, e3, r4, n3[r4]);
          }));
          const r3 = new (o())().retain(t3).retain(e3, (0, l.A)(n3));
          return this.update(r3);
        }
        getContents(t3, e3) {
          return this.delta.slice(t3, t3 + e3);
        }
        getDelta() {
          return this.scroll.lines().reduce(((t3, e3) => t3.concat(e3.delta())), new (o())());
        }
        getFormat(t3) {
          let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n3 = [], r3 = [];
          0 === e3 ? this.scroll.path(t3).forEach(((t4) => {
            const [e4] = t4;
            e4 instanceof c.Ay ? n3.push(e4) : e4 instanceof i.LeafBlot && r3.push(e4);
          })) : (n3 = this.scroll.lines(t3, e3), r3 = this.scroll.descendants(i.LeafBlot, t3, e3));
          const [s2, o2] = [n3, r3].map(((t4) => {
            const e4 = t4.shift();
            if (null == e4) return {};
            let n4 = (0, c.Ji)(e4);
            for (; Object.keys(n4).length > 0; ) {
              const e5 = t4.shift();
              if (null == e5) return n4;
              n4 = b((0, c.Ji)(e5), n4);
            }
            return n4;
          }));
          return { ...s2, ...o2 };
        }
        getHTML(t3, e3) {
          const [n3, r3] = this.scroll.line(t3);
          if (n3) {
            const i2 = n3.length();
            return n3.length() >= r3 + e3 && (0 !== r3 || e3 !== i2) ? m(n3, r3, e3, true) : m(this.scroll, t3, e3, true);
          }
          return "";
        }
        getText(t3, e3) {
          return this.getContents(t3, e3).filter(((t4) => "string" == typeof t4.insert)).map(((t4) => t4.insert)).join("");
        }
        insertContents(t3, e3) {
          const n3 = v(e3), r3 = new (o())().retain(t3).concat(n3);
          return this.scroll.insertContents(t3, n3), this.update(r3);
        }
        insertEmbed(t3, e3, n3) {
          return this.scroll.insertAt(t3, e3, n3), this.update(new (o())().retain(t3).insert({ [e3]: n3 }));
        }
        insertText(t3, e3) {
          let n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return e3 = e3.replace(/\r\n/g, "\n").replace(/\r/g, "\n"), this.scroll.insertAt(t3, e3), Object.keys(n3).forEach(((r3) => {
            this.scroll.formatAt(t3, e3.length, r3, n3[r3]);
          })), this.update(new (o())().retain(t3).insert(e3, (0, l.A)(n3)));
        }
        isBlank() {
          if (0 === this.scroll.children.length) return true;
          if (this.scroll.children.length > 1) return false;
          const t3 = this.scroll.children.head;
          if (t3?.statics.blotName !== c.Ay.blotName) return false;
          const e3 = t3;
          return !(e3.children.length > 1) && e3.children.head instanceof u.A;
        }
        removeFormat(t3, e3) {
          const n3 = this.getText(t3, e3), [r3, i2] = this.scroll.line(t3 + e3);
          let s2 = 0, l2 = new (o())();
          null != r3 && (s2 = r3.length() - i2, l2 = r3.delta().slice(i2, i2 + s2 - 1).insert("\n"));
          const a2 = this.getContents(t3, e3 + s2).diff(new (o())().insert(n3).concat(l2)), c2 = new (o())().retain(t3).concat(a2);
          return this.applyDelta(c2);
        }
        update(t3) {
          let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
          const r3 = this.delta;
          if (1 === e3.length && "characterData" === e3[0].type && e3[0].target.data.match(p) && this.scroll.find(e3[0].target)) {
            const i2 = this.scroll.find(e3[0].target), s2 = (0, c.Ji)(i2), l2 = i2.offset(this.scroll), a2 = e3[0].oldValue.replace(h.A.CONTENTS, ""), u2 = new (o())().insert(a2), d2 = new (o())().insert(i2.value()), f2 = n3 && { oldRange: A(n3.oldRange, -l2), newRange: A(n3.newRange, -l2) };
            t3 = new (o())().retain(l2).concat(u2.diff(d2, f2)).reduce(((t4, e4) => e4.insert ? t4.insert(e4.insert, s2) : t4.push(e4)), new (o())()), this.delta = r3.compose(t3);
          } else this.delta = this.getDelta(), t3 && (0, a.A)(r3.compose(t3), this.delta) || (t3 = r3.diff(this.delta, n3));
          return t3;
        }
      }, N = n2(5374), E = n2(7356), w = n2(6078), q = n2(4266), k = n2(746), _ = class {
        isComposing = false;
        constructor(t3, e3) {
          this.scroll = t3, this.emitter = e3, this.setupListeners();
        }
        setupListeners() {
          this.scroll.domNode.addEventListener("compositionstart", ((t3) => {
            this.isComposing || this.handleCompositionStart(t3);
          })), this.scroll.domNode.addEventListener("compositionend", ((t3) => {
            this.isComposing && queueMicrotask((() => {
              this.handleCompositionEnd(t3);
            }));
          }));
        }
        handleCompositionStart(t3) {
          const e3 = t3.target instanceof Node ? this.scroll.find(t3.target, true) : null;
          !e3 || e3 instanceof k.A || (this.emitter.emit(N.A.events.COMPOSITION_BEFORE_START, t3), this.scroll.batchStart(), this.emitter.emit(N.A.events.COMPOSITION_START, t3), this.isComposing = true);
        }
        handleCompositionEnd(t3) {
          this.emitter.emit(N.A.events.COMPOSITION_BEFORE_END, t3), this.scroll.batchEnd(), this.emitter.emit(N.A.events.COMPOSITION_END, t3), this.isComposing = false;
        }
      }, L = n2(9609);
      const S = (t3) => {
        const e3 = t3.getBoundingClientRect(), n3 = "offsetWidth" in t3 && Math.abs(e3.width) / t3.offsetWidth || 1, r3 = "offsetHeight" in t3 && Math.abs(e3.height) / t3.offsetHeight || 1;
        return { top: e3.top, right: e3.left + t3.clientWidth * n3, bottom: e3.top + t3.clientHeight * r3, left: e3.left };
      }, O = (t3) => {
        const e3 = parseInt(t3, 10);
        return Number.isNaN(e3) ? 0 : e3;
      }, T = (t3, e3, n3, r3, i2, s2) => t3 < n3 && e3 > r3 ? 0 : t3 < n3 ? -(n3 - t3 + i2) : e3 > r3 ? e3 - t3 > r3 - n3 ? t3 + i2 - n3 : e3 - r3 + s2 : 0;
      const j = ["block", "break", "cursor", "inline", "scroll", "text"];
      const C = (0, w.A)("quill"), R = new i.Registry();
      i.ParentBlot.uiClass = "ql-ui";
      class I {
        static DEFAULTS = { bounds: null, modules: { clipboard: true, keyboard: true, history: true, uploader: true }, placeholder: "", readOnly: false, registry: R, theme: "default" };
        static events = N.A.events;
        static sources = N.A.sources;
        static version = "2.0.3";
        static imports = { delta: o(), parchment: i, "core/module": q.A, "core/theme": L.A };
        static debug(t3) {
          true === t3 && (t3 = "log"), w.A.level(t3);
        }
        static find(t3) {
          let e3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return E.A.get(t3) || R.find(t3, e3);
        }
        static import(t3) {
          return null == this.imports[t3] && C.error(`Cannot import ${t3}. Are you sure it was registered?`), this.imports[t3];
        }
        static register() {
          if ("string" != typeof (arguments.length <= 0 ? void 0 : arguments[0])) {
            const t3 = arguments.length <= 0 ? void 0 : arguments[0], e3 = !!(arguments.length <= 1 ? void 0 : arguments[1]), n3 = "attrName" in t3 ? t3.attrName : t3.blotName;
            "string" == typeof n3 ? this.register(`formats/${n3}`, t3, e3) : Object.keys(t3).forEach(((n4) => {
              this.register(n4, t3[n4], e3);
            }));
          } else {
            const t3 = arguments.length <= 0 ? void 0 : arguments[0], e3 = arguments.length <= 1 ? void 0 : arguments[1], n3 = !!(arguments.length <= 2 ? void 0 : arguments[2]);
            null == this.imports[t3] || n3 || C.warn(`Overwriting ${t3} with`, e3), this.imports[t3] = e3, (t3.startsWith("blots/") || t3.startsWith("formats/")) && e3 && "boolean" != typeof e3 && "abstract" !== e3.blotName && R.register(e3), "function" == typeof e3.register && e3.register(R);
          }
        }
        constructor(t3) {
          let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.options = (function(t4, e4) {
            const n4 = B(t4);
            if (!n4) throw new Error("Invalid Quill container");
            const s3 = !e4.theme || e4.theme === I.DEFAULTS.theme ? L.A : I.import(`themes/${e4.theme}`);
            if (!s3) throw new Error(`Invalid theme ${e4.theme}. Did you register it?`);
            const { modules: o2, ...l3 } = I.DEFAULTS, { modules: a2, ...c2 } = s3.DEFAULTS;
            let u2 = M(e4.modules);
            null != u2 && u2.toolbar && u2.toolbar.constructor !== Object && (u2 = { ...u2, toolbar: { container: u2.toolbar } });
            const h2 = (0, r2.A)({}, M(o2), M(a2), u2), d2 = { ...l3, ...U(c2), ...U(e4) };
            let f2 = e4.registry;
            return f2 ? e4.formats && C.warn('Ignoring "formats" option because "registry" is specified') : f2 = e4.formats ? ((t5, e5, n5) => {
              const r3 = new i.Registry();
              return j.forEach(((t6) => {
                const n6 = e5.query(t6);
                n6 && r3.register(n6);
              })), t5.forEach(((t6) => {
                let i2 = e5.query(t6);
                i2 || n5.error(`Cannot register "${t6}" specified in "formats" config. Are you sure it was registered?`);
                let s4 = 0;
                for (; i2; ) if (r3.register(i2), i2 = "blotName" in i2 ? i2.requiredContainer ?? null : null, s4 += 1, s4 > 100) {
                  n5.error(`Cycle detected in registering blot requiredContainer: "${t6}"`);
                  break;
                }
              })), r3;
            })(e4.formats, d2.registry, C) : d2.registry, { ...d2, registry: f2, container: n4, theme: s3, modules: Object.entries(h2).reduce(((t5, e5) => {
              let [n5, i2] = e5;
              if (!i2) return t5;
              const s4 = I.import(`modules/${n5}`);
              return null == s4 ? (C.error(`Cannot load ${n5} module. Are you sure you registered it?`), t5) : { ...t5, [n5]: (0, r2.A)({}, s4.DEFAULTS || {}, i2) };
            }), {}), bounds: B(d2.bounds) };
          })(t3, e3), this.container = this.options.container, null == this.container) return void C.error("Invalid Quill container", t3);
          this.options.debug && I.debug(this.options.debug);
          const n3 = this.container.innerHTML.trim();
          this.container.classList.add("ql-container"), this.container.innerHTML = "", E.A.set(this.container, this), this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.emitter = new N.A();
          const s2 = i.ScrollBlot.blotName, l2 = this.options.registry.query(s2);
          if (!l2 || !("blotName" in l2)) throw new Error(`Cannot initialize Quill without "${s2}" blot`);
          if (this.scroll = new l2(this.options.registry, this.root, { emitter: this.emitter }), this.editor = new x(this.scroll), this.selection = new f.A(this.scroll, this.emitter), this.composition = new _(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.uploader = this.theme.addModule("uploader"), this.theme.addModule("input"), this.theme.addModule("uiNode"), this.theme.init(), this.emitter.on(N.A.events.EDITOR_CHANGE, ((t4) => {
            t4 === N.A.events.TEXT_CHANGE && this.root.classList.toggle("ql-blank", this.editor.isBlank());
          })), this.emitter.on(N.A.events.SCROLL_UPDATE, ((t4, e4) => {
            const n4 = this.selection.lastRange, [r3] = this.selection.getRange(), i2 = n4 && r3 ? { oldRange: n4, newRange: r3 } : void 0;
            D.call(this, (() => this.editor.update(null, e4, i2)), t4);
          })), this.emitter.on(N.A.events.SCROLL_EMBED_UPDATE, ((t4, e4) => {
            const n4 = this.selection.lastRange, [r3] = this.selection.getRange(), i2 = n4 && r3 ? { oldRange: n4, newRange: r3 } : void 0;
            D.call(this, (() => {
              const n5 = new (o())().retain(t4.offset(this)).retain({ [t4.statics.blotName]: e4 });
              return this.editor.update(n5, [], i2);
            }), I.sources.USER);
          })), n3) {
            const t4 = this.clipboard.convert({ html: `${n3}<p><br></p>`, text: "\n" });
            this.setContents(t4);
          }
          this.history.clear(), this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder), this.options.readOnly && this.disable(), this.allowReadOnlyEdits = false;
        }
        addContainer(t3) {
          let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if ("string" == typeof t3) {
            const e4 = t3;
            (t3 = document.createElement("div")).classList.add(e4);
          }
          return this.container.insertBefore(t3, e3), t3;
        }
        blur() {
          this.selection.setRange(null);
        }
        deleteText(t3, e3, n3) {
          return [t3, e3, , n3] = P(t3, e3, n3), D.call(this, (() => this.editor.deleteText(t3, e3)), n3, t3, -1 * e3);
        }
        disable() {
          this.enable(false);
        }
        editReadOnly(t3) {
          this.allowReadOnlyEdits = true;
          const e3 = t3();
          return this.allowReadOnlyEdits = false, e3;
        }
        enable() {
          let t3 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.scroll.enable(t3), this.container.classList.toggle("ql-disabled", !t3);
        }
        focus() {
          let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.selection.focus(), t3.preventScroll || this.scrollSelectionIntoView();
        }
        format(t3, e3) {
          let n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : N.A.sources.API;
          return D.call(this, (() => {
            const n4 = this.getSelection(true);
            let r3 = new (o())();
            if (null == n4) return r3;
            if (this.scroll.query(t3, i.Scope.BLOCK)) r3 = this.editor.formatLine(n4.index, n4.length, { [t3]: e3 });
            else {
              if (0 === n4.length) return this.selection.format(t3, e3), r3;
              r3 = this.editor.formatText(n4.index, n4.length, { [t3]: e3 });
            }
            return this.setSelection(n4, N.A.sources.SILENT), r3;
          }), n3);
        }
        formatLine(t3, e3, n3, r3, i2) {
          let s2;
          return [t3, e3, s2, i2] = P(t3, e3, n3, r3, i2), D.call(this, (() => this.editor.formatLine(t3, e3, s2)), i2, t3, 0);
        }
        formatText(t3, e3, n3, r3, i2) {
          let s2;
          return [t3, e3, s2, i2] = P(t3, e3, n3, r3, i2), D.call(this, (() => this.editor.formatText(t3, e3, s2)), i2, t3, 0);
        }
        getBounds(t3) {
          let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n3 = null;
          if (n3 = "number" == typeof t3 ? this.selection.getBounds(t3, e3) : this.selection.getBounds(t3.index, t3.length), !n3) return null;
          const r3 = this.container.getBoundingClientRect();
          return { bottom: n3.bottom - r3.top, height: n3.height, left: n3.left - r3.left, right: n3.right - r3.left, top: n3.top - r3.top, width: n3.width };
        }
        getContents() {
          let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getLength() - t3;
          return [t3, e3] = P(t3, e3), this.editor.getContents(t3, e3);
        }
        getFormat() {
          let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getSelection(true), e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return "number" == typeof t3 ? this.editor.getFormat(t3, e3) : this.editor.getFormat(t3.index, t3.length);
        }
        getIndex(t3) {
          return t3.offset(this.scroll);
        }
        getLength() {
          return this.scroll.length();
        }
        getLeaf(t3) {
          return this.scroll.leaf(t3);
        }
        getLine(t3) {
          return this.scroll.line(t3);
        }
        getLines() {
          let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE;
          return "number" != typeof t3 ? this.scroll.lines(t3.index, t3.length) : this.scroll.lines(t3, e3);
        }
        getModule(t3) {
          return this.theme.modules[t3];
        }
        getSelection() {
          return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this.focus(), this.update(), this.selection.getRange()[0];
        }
        getSemanticHTML() {
          let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e3 = arguments.length > 1 ? arguments[1] : void 0;
          return "number" == typeof t3 && (e3 = e3 ?? this.getLength() - t3), [t3, e3] = P(t3, e3), this.editor.getHTML(t3, e3);
        }
        getText() {
          let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e3 = arguments.length > 1 ? arguments[1] : void 0;
          return "number" == typeof t3 && (e3 = e3 ?? this.getLength() - t3), [t3, e3] = P(t3, e3), this.editor.getText(t3, e3);
        }
        hasFocus() {
          return this.selection.hasFocus();
        }
        insertEmbed(t3, e3, n3) {
          let r3 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : I.sources.API;
          return D.call(this, (() => this.editor.insertEmbed(t3, e3, n3)), r3, t3);
        }
        insertText(t3, e3, n3, r3, i2) {
          let s2;
          return [t3, , s2, i2] = P(t3, 0, n3, r3, i2), D.call(this, (() => this.editor.insertText(t3, e3, s2)), i2, t3, e3.length);
        }
        isEnabled() {
          return this.scroll.isEnabled();
        }
        off() {
          return this.emitter.off(...arguments);
        }
        on() {
          return this.emitter.on(...arguments);
        }
        once() {
          return this.emitter.once(...arguments);
        }
        removeFormat(t3, e3, n3) {
          return [t3, e3, , n3] = P(t3, e3, n3), D.call(this, (() => this.editor.removeFormat(t3, e3)), n3, t3);
        }
        scrollRectIntoView(t3) {
          ((t4, e3) => {
            const n3 = t4.ownerDocument;
            let r3 = e3, i2 = t4;
            for (; i2; ) {
              const t5 = i2 === n3.body, e4 = t5 ? { top: 0, right: window.visualViewport?.width ?? n3.documentElement.clientWidth, bottom: window.visualViewport?.height ?? n3.documentElement.clientHeight, left: 0 } : S(i2), o2 = getComputedStyle(i2), l2 = T(r3.left, r3.right, e4.left, e4.right, O(o2.scrollPaddingLeft), O(o2.scrollPaddingRight)), a2 = T(r3.top, r3.bottom, e4.top, e4.bottom, O(o2.scrollPaddingTop), O(o2.scrollPaddingBottom));
              if (l2 || a2) if (t5) n3.defaultView?.scrollBy(l2, a2);
              else {
                const { scrollLeft: t6, scrollTop: e5 } = i2;
                a2 && (i2.scrollTop += a2), l2 && (i2.scrollLeft += l2);
                const n4 = i2.scrollLeft - t6, s3 = i2.scrollTop - e5;
                r3 = { left: r3.left - n4, top: r3.top - s3, right: r3.right - n4, bottom: r3.bottom - s3 };
              }
              i2 = t5 || "fixed" === o2.position ? null : (s2 = i2).parentElement || s2.getRootNode().host || null;
            }
            var s2;
          })(this.root, t3);
        }
        scrollIntoView() {
          console.warn("Quill#scrollIntoView() has been deprecated and will be removed in the near future. Please use Quill#scrollSelectionIntoView() instead."), this.scrollSelectionIntoView();
        }
        scrollSelectionIntoView() {
          const t3 = this.selection.lastRange, e3 = t3 && this.selection.getBounds(t3.index, t3.length);
          e3 && this.scrollRectIntoView(e3);
        }
        setContents(t3) {
          let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : N.A.sources.API;
          return D.call(this, (() => {
            t3 = new (o())(t3);
            const e4 = this.getLength(), n3 = this.editor.deleteText(0, e4), r3 = this.editor.insertContents(0, t3), i2 = this.editor.deleteText(this.getLength() - 1, 1);
            return n3.compose(r3).compose(i2);
          }), e3);
        }
        setSelection(t3, e3, n3) {
          null == t3 ? this.selection.setRange(null, e3 || I.sources.API) : ([t3, e3, , n3] = P(t3, e3, n3), this.selection.setRange(new f.Q(Math.max(0, t3), e3), n3), n3 !== N.A.sources.SILENT && this.scrollSelectionIntoView());
        }
        setText(t3) {
          let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : N.A.sources.API;
          const n3 = new (o())().insert(t3);
          return this.setContents(n3, e3);
        }
        update() {
          let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N.A.sources.USER;
          const e3 = this.scroll.update(t3);
          return this.selection.update(t3), e3;
        }
        updateContents(t3) {
          let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : N.A.sources.API;
          return D.call(this, (() => (t3 = new (o())(t3), this.editor.applyDelta(t3))), e3, true);
        }
      }
      function B(t3) {
        return "string" == typeof t3 ? document.querySelector(t3) : t3;
      }
      function M(t3) {
        return Object.entries(t3 ?? {}).reduce(((t4, e3) => {
          let [n3, r3] = e3;
          return { ...t4, [n3]: true === r3 ? {} : r3 };
        }), {});
      }
      function U(t3) {
        return Object.fromEntries(Object.entries(t3).filter(((t4) => void 0 !== t4[1])));
      }
      function D(t3, e3, n3, r3) {
        if (!this.isEnabled() && e3 === N.A.sources.USER && !this.allowReadOnlyEdits) return new (o())();
        let i2 = null == n3 ? null : this.getSelection();
        const s2 = this.editor.delta, l2 = t3();
        if (null != i2 && (true === n3 && (n3 = i2.index), null == r3 ? i2 = z(i2, l2, e3) : 0 !== r3 && (i2 = z(i2, n3, r3, e3)), this.setSelection(i2, N.A.sources.SILENT)), l2.length() > 0) {
          const t4 = [N.A.events.TEXT_CHANGE, l2, s2, e3];
          this.emitter.emit(N.A.events.EDITOR_CHANGE, ...t4), e3 !== N.A.sources.SILENT && this.emitter.emit(...t4);
        }
        return l2;
      }
      function P(t3, e3, n3, r3, i2) {
        let s2 = {};
        return "number" == typeof t3.index && "number" == typeof t3.length ? "number" != typeof e3 ? (i2 = r3, r3 = n3, n3 = e3, e3 = t3.length, t3 = t3.index) : (e3 = t3.length, t3 = t3.index) : "number" != typeof e3 && (i2 = r3, r3 = n3, n3 = e3, e3 = 0), "object" == typeof n3 ? (s2 = n3, i2 = r3) : "string" == typeof n3 && (null != r3 ? s2[n3] = r3 : i2 = n3), [t3, e3, s2, i2 = i2 || N.A.sources.API];
      }
      function z(t3, e3, n3, r3) {
        const i2 = "number" == typeof n3 ? n3 : 0;
        if (null == t3) return null;
        let s2, o2;
        return e3 && "function" == typeof e3.transformPosition ? [s2, o2] = [t3.index, t3.index + t3.length].map(((t4) => e3.transformPosition(t4, r3 !== N.A.sources.USER))) : [s2, o2] = [t3.index, t3.index + t3.length].map(((t4) => t4 < e3 || t4 === e3 && r3 === N.A.sources.USER ? t4 : i2 >= 0 ? t4 + i2 : Math.max(e3, t4 + i2))), new f.Q(s2, o2 - s2);
      }
    }, 8298: function(t2, e2, n2) {
      "use strict";
      n2.d(e2, { Q: function() {
        return a;
      } });
      var r2 = n2(6003), i = n2(5123), s = n2(3707), o = n2(5374);
      const l = (0, n2(6078).A)("quill:selection");
      class a {
        constructor(t3) {
          let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          this.index = t3, this.length = e3;
        }
      }
      function c(t3, e3) {
        try {
          e3.parentNode;
        } catch (t4) {
          return false;
        }
        return t3.contains(e3);
      }
      e2.A = class {
        constructor(t3, e3) {
          this.emitter = e3, this.scroll = t3, this.composing = false, this.mouseDown = false, this.root = this.scroll.domNode, this.cursor = this.scroll.create("cursor", this), this.savedRange = new a(0, 0), this.lastRange = this.savedRange, this.lastNative = null, this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, (() => {
            this.mouseDown || this.composing || setTimeout(this.update.bind(this, o.A.sources.USER), 1);
          })), this.emitter.on(o.A.events.SCROLL_BEFORE_UPDATE, (() => {
            if (!this.hasFocus()) return;
            const t4 = this.getNativeRange();
            null != t4 && t4.start.node !== this.cursor.textNode && this.emitter.once(o.A.events.SCROLL_UPDATE, ((e4, n3) => {
              try {
                this.root.contains(t4.start.node) && this.root.contains(t4.end.node) && this.setNativeRange(t4.start.node, t4.start.offset, t4.end.node, t4.end.offset);
                const r3 = n3.some(((t5) => "characterData" === t5.type || "childList" === t5.type || "attributes" === t5.type && t5.target === this.root));
                this.update(r3 ? o.A.sources.SILENT : e4);
              } catch (t5) {
              }
            }));
          })), this.emitter.on(o.A.events.SCROLL_OPTIMIZE, ((t4, e4) => {
            if (e4.range) {
              const { startNode: t5, startOffset: n3, endNode: r3, endOffset: i2 } = e4.range;
              this.setNativeRange(t5, n3, r3, i2), this.update(o.A.sources.SILENT);
            }
          })), this.update(o.A.sources.SILENT);
        }
        handleComposition() {
          this.emitter.on(o.A.events.COMPOSITION_BEFORE_START, (() => {
            this.composing = true;
          })), this.emitter.on(o.A.events.COMPOSITION_END, (() => {
            if (this.composing = false, this.cursor.parent) {
              const t3 = this.cursor.restore();
              if (!t3) return;
              setTimeout((() => {
                this.setNativeRange(t3.startNode, t3.startOffset, t3.endNode, t3.endOffset);
              }), 1);
            }
          }));
        }
        handleDragging() {
          this.emitter.listenDOM("mousedown", document.body, (() => {
            this.mouseDown = true;
          })), this.emitter.listenDOM("mouseup", document.body, (() => {
            this.mouseDown = false, this.update(o.A.sources.USER);
          }));
        }
        focus() {
          this.hasFocus() || (this.root.focus({ preventScroll: true }), this.setRange(this.savedRange));
        }
        format(t3, e3) {
          this.scroll.update();
          const n3 = this.getNativeRange();
          if (null != n3 && n3.native.collapsed && !this.scroll.query(t3, r2.Scope.BLOCK)) {
            if (n3.start.node !== this.cursor.textNode) {
              const t4 = this.scroll.find(n3.start.node, false);
              if (null == t4) return;
              if (t4 instanceof r2.LeafBlot) {
                const e4 = t4.split(n3.start.offset);
                t4.parent.insertBefore(this.cursor, e4);
              } else t4.insertBefore(this.cursor, n3.start.node);
              this.cursor.attach();
            }
            this.cursor.format(t3, e3), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update();
          }
        }
        getBounds(t3) {
          let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const n3 = this.scroll.length();
          let r3;
          t3 = Math.min(t3, n3 - 1), e3 = Math.min(t3 + e3, n3 - 1) - t3;
          let [i2, s2] = this.scroll.leaf(t3);
          if (null == i2) return null;
          if (e3 > 0 && s2 === i2.length()) {
            const [e4] = this.scroll.leaf(t3 + 1);
            if (e4) {
              const [n4] = this.scroll.line(t3), [r4] = this.scroll.line(t3 + 1);
              n4 === r4 && (i2 = e4, s2 = 0);
            }
          }
          [r3, s2] = i2.position(s2, true);
          const o2 = document.createRange();
          if (e3 > 0) return o2.setStart(r3, s2), [i2, s2] = this.scroll.leaf(t3 + e3), null == i2 ? null : ([r3, s2] = i2.position(s2, true), o2.setEnd(r3, s2), o2.getBoundingClientRect());
          let l2, a2 = "left";
          if (r3 instanceof Text) {
            if (!r3.data.length) return null;
            s2 < r3.data.length ? (o2.setStart(r3, s2), o2.setEnd(r3, s2 + 1)) : (o2.setStart(r3, s2 - 1), o2.setEnd(r3, s2), a2 = "right"), l2 = o2.getBoundingClientRect();
          } else {
            if (!(i2.domNode instanceof Element)) return null;
            l2 = i2.domNode.getBoundingClientRect(), s2 > 0 && (a2 = "right");
          }
          return { bottom: l2.top + l2.height, height: l2.height, left: l2[a2], right: l2[a2], top: l2.top, width: 0 };
        }
        getNativeRange() {
          const t3 = document.getSelection();
          if (null == t3 || t3.rangeCount <= 0) return null;
          const e3 = t3.getRangeAt(0);
          if (null == e3) return null;
          const n3 = this.normalizeNative(e3);
          return l.info("getNativeRange", n3), n3;
        }
        getRange() {
          const t3 = this.scroll.domNode;
          if ("isConnected" in t3 && !t3.isConnected) return [null, null];
          const e3 = this.getNativeRange();
          return null == e3 ? [null, null] : [this.normalizedToRange(e3), e3];
        }
        hasFocus() {
          return document.activeElement === this.root || null != document.activeElement && c(this.root, document.activeElement);
        }
        normalizedToRange(t3) {
          const e3 = [[t3.start.node, t3.start.offset]];
          t3.native.collapsed || e3.push([t3.end.node, t3.end.offset]);
          const n3 = e3.map(((t4) => {
            const [e4, n4] = t4, i3 = this.scroll.find(e4, true), s3 = i3.offset(this.scroll);
            return 0 === n4 ? s3 : i3 instanceof r2.LeafBlot ? s3 + i3.index(e4, n4) : s3 + i3.length();
          })), i2 = Math.min(Math.max(...n3), this.scroll.length() - 1), s2 = Math.min(i2, ...n3);
          return new a(s2, i2 - s2);
        }
        normalizeNative(t3) {
          if (!c(this.root, t3.startContainer) || !t3.collapsed && !c(this.root, t3.endContainer)) return null;
          const e3 = { start: { node: t3.startContainer, offset: t3.startOffset }, end: { node: t3.endContainer, offset: t3.endOffset }, native: t3 };
          return [e3.start, e3.end].forEach(((t4) => {
            let { node: e4, offset: n3 } = t4;
            for (; !(e4 instanceof Text) && e4.childNodes.length > 0; ) if (e4.childNodes.length > n3) e4 = e4.childNodes[n3], n3 = 0;
            else {
              if (e4.childNodes.length !== n3) break;
              e4 = e4.lastChild, n3 = e4 instanceof Text ? e4.data.length : e4.childNodes.length > 0 ? e4.childNodes.length : e4.childNodes.length + 1;
            }
            t4.node = e4, t4.offset = n3;
          })), e3;
        }
        rangeToNative(t3) {
          const e3 = this.scroll.length(), n3 = (t4, n4) => {
            t4 = Math.min(e3 - 1, t4);
            const [r3, i2] = this.scroll.leaf(t4);
            return r3 ? r3.position(i2, n4) : [null, -1];
          };
          return [...n3(t3.index, false), ...n3(t3.index + t3.length, true)];
        }
        setNativeRange(t3, e3) {
          let n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t3, r3 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e3, i2 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (l.info("setNativeRange", t3, e3, n3, r3), null != t3 && (null == this.root.parentNode || null == t3.parentNode || null == n3.parentNode)) return;
          const s2 = document.getSelection();
          if (null != s2) if (null != t3) {
            this.hasFocus() || this.root.focus({ preventScroll: true });
            const { native: o2 } = this.getNativeRange() || {};
            if (null == o2 || i2 || t3 !== o2.startContainer || e3 !== o2.startOffset || n3 !== o2.endContainer || r3 !== o2.endOffset) {
              t3 instanceof Element && "BR" === t3.tagName && (e3 = Array.from(t3.parentNode.childNodes).indexOf(t3), t3 = t3.parentNode), n3 instanceof Element && "BR" === n3.tagName && (r3 = Array.from(n3.parentNode.childNodes).indexOf(n3), n3 = n3.parentNode);
              const i3 = document.createRange();
              i3.setStart(t3, e3), i3.setEnd(n3, r3), s2.removeAllRanges(), s2.addRange(i3);
            }
          } else s2.removeAllRanges(), this.root.blur();
        }
        setRange(t3) {
          let e3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.A.sources.API;
          if ("string" == typeof e3 && (n3 = e3, e3 = false), l.info("setRange", t3), null != t3) {
            const n4 = this.rangeToNative(t3);
            this.setNativeRange(...n4, e3);
          } else this.setNativeRange(null);
          this.update(n3);
        }
        update() {
          let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.A.sources.USER;
          const e3 = this.lastRange, [n3, r3] = this.getRange();
          if (this.lastRange = n3, this.lastNative = r3, null != this.lastRange && (this.savedRange = this.lastRange), !(0, i.A)(e3, this.lastRange)) {
            if (!this.composing && null != r3 && r3.native.collapsed && r3.start.node !== this.cursor.textNode) {
              const t4 = this.cursor.restore();
              t4 && this.setNativeRange(t4.startNode, t4.startOffset, t4.endNode, t4.endOffset);
            }
            const n4 = [o.A.events.SELECTION_CHANGE, (0, s.A)(this.lastRange), (0, s.A)(e3), t3];
            this.emitter.emit(o.A.events.EDITOR_CHANGE, ...n4), t3 !== o.A.sources.SILENT && this.emitter.emit(...n4);
          }
        }
      };
    }, 9609: function(t2, e2) {
      "use strict";
      class n2 {
        static DEFAULTS = { modules: {} };
        static themes = { default: n2 };
        modules = {};
        constructor(t3, e3) {
          this.quill = t3, this.options = e3;
        }
        init() {
          Object.keys(this.options.modules).forEach(((t3) => {
            null == this.modules[t3] && this.addModule(t3);
          }));
        }
        addModule(t3) {
          const e3 = this.quill.constructor.import(`modules/${t3}`);
          return this.modules[t3] = new e3(this.quill, this.options.modules[t3] || {}), this.modules[t3];
        }
      }
      e2.A = n2;
    }, 8276: function(t2, e2, n2) {
      "use strict";
      n2.d(e2, { Hu: function() {
        return l;
      }, gS: function() {
        return s;
      }, qh: function() {
        return o;
      } });
      var r2 = n2(6003);
      const i = { scope: r2.Scope.BLOCK, whitelist: ["right", "center", "justify"] }, s = new r2.Attributor("align", "align", i), o = new r2.ClassAttributor("align", "ql-align", i), l = new r2.StyleAttributor("align", "text-align", i);
    }, 9541: function(t2, e2, n2) {
      "use strict";
      n2.d(e2, { l: function() {
        return s;
      }, s: function() {
        return o;
      } });
      var r2 = n2(6003), i = n2(8638);
      const s = new r2.ClassAttributor("background", "ql-bg", { scope: r2.Scope.INLINE }), o = new i.a2("background", "background-color", { scope: r2.Scope.INLINE });
    }, 9404: function(t2, e2, n2) {
      "use strict";
      n2.d(e2, { Ay: function() {
        return h;
      }, Cy: function() {
        return d;
      }, EJ: function() {
        return u;
      } });
      var r2 = n2(9698), i = n2(3036), s = n2(4541), o = n2(4850), l = n2(5508), a = n2(580), c = n2(6142);
      class u extends a.A {
        static create(t3) {
          const e3 = super.create(t3);
          return e3.setAttribute("spellcheck", "false"), e3;
        }
        code(t3, e3) {
          return this.children.map(((t4) => t4.length() <= 1 ? "" : t4.domNode.innerText)).join("\n").slice(t3, t3 + e3);
        }
        html(t3, e3) {
          return `<pre>
${(0, l.X)(this.code(t3, e3))}
</pre>`;
        }
      }
      class h extends r2.Ay {
        static TAB = "  ";
        static register() {
          c.Ay.register(u);
        }
      }
      class d extends o.A {
      }
      d.blotName = "code", d.tagName = "CODE", h.blotName = "code-block", h.className = "ql-code-block", h.tagName = "DIV", u.blotName = "code-block-container", u.className = "ql-code-block-container", u.tagName = "DIV", u.allowedChildren = [h], h.allowedChildren = [l.A, i.A, s.A], h.requiredContainer = u;
    }, 8638: function(t2, e2, n2) {
      "use strict";
      n2.d(e2, { JM: function() {
        return o;
      }, a2: function() {
        return i;
      }, g3: function() {
        return s;
      } });
      var r2 = n2(6003);
      class i extends r2.StyleAttributor {
        value(t3) {
          let e3 = super.value(t3);
          return e3.startsWith("rgb(") ? (e3 = e3.replace(/^[^\d]+/, "").replace(/[^\d]+$/, ""), `#${e3.split(",").map(((t4) => `00${parseInt(t4, 10).toString(16)}`.slice(-2))).join("")}`) : e3;
        }
      }
      const s = new r2.ClassAttributor("color", "ql-color", { scope: r2.Scope.INLINE }), o = new i("color", "color", { scope: r2.Scope.INLINE });
    }, 7912: function(t2, e2, n2) {
      "use strict";
      n2.d(e2, { Mc: function() {
        return s;
      }, VL: function() {
        return l;
      }, sY: function() {
        return o;
      } });
      var r2 = n2(6003);
      const i = { scope: r2.Scope.BLOCK, whitelist: ["rtl"] }, s = new r2.Attributor("direction", "dir", i), o = new r2.ClassAttributor("direction", "ql-direction", i), l = new r2.StyleAttributor("direction", "direction", i);
    }, 6772: function(t2, e2, n2) {
      "use strict";
      n2.d(e2, { q: function() {
        return s;
      }, z: function() {
        return l;
      } });
      var r2 = n2(6003);
      const i = { scope: r2.Scope.INLINE, whitelist: ["serif", "monospace"] }, s = new r2.ClassAttributor("font", "ql-font", i);
      class o extends r2.StyleAttributor {
        value(t3) {
          return super.value(t3).replace(/["']/g, "");
        }
      }
      const l = new o("font", "font-family", i);
    }, 664: function(t2, e2, n2) {
      "use strict";
      n2.d(e2, { U: function() {
        return i;
      }, r: function() {
        return s;
      } });
      var r2 = n2(6003);
      const i = new r2.ClassAttributor("size", "ql-size", { scope: r2.Scope.INLINE, whitelist: ["small", "large", "huge"] }), s = new r2.StyleAttributor("size", "font-size", { scope: r2.Scope.INLINE, whitelist: ["10px", "18px", "32px"] });
    }, 584: function(t2, e2, n2) {
      "use strict";
      n2.d(e2, { Ay: function() {
        return S;
      }, hV: function() {
        return I;
      } });
      var r2 = n2(6003), i = n2(5232), s = n2.n(i), o = n2(9698), l = n2(6078), a = n2(4266), c = n2(6142), u = n2(8276), h = n2(9541), d = n2(9404), f = n2(8638), p = n2(7912), g = n2(6772), m = n2(664), b = n2(8123);
      const y = /font-weight:\s*normal/, v = ["P", "OL", "UL"], A = (t3) => t3 && v.includes(t3.tagName), x = /\bmso-list:[^;]*ignore/i, N = /\bmso-list:[^;]*\bl(\d+)/i, E = /\bmso-list:[^;]*\blevel(\d+)/i, w = [function(t3) {
        "urn:schemas-microsoft-com:office:word" === t3.documentElement.getAttribute("xmlns:w") && ((t4) => {
          const e3 = Array.from(t4.querySelectorAll("[style*=mso-list]")), n3 = [], r3 = [];
          e3.forEach(((t5) => {
            (t5.getAttribute("style") || "").match(x) ? n3.push(t5) : r3.push(t5);
          })), n3.forEach(((t5) => t5.parentNode?.removeChild(t5)));
          const i2 = t4.documentElement.innerHTML, s2 = r3.map(((t5) => ((t6, e4) => {
            const n4 = t6.getAttribute("style"), r4 = n4?.match(N);
            if (!r4) return null;
            const i3 = Number(r4[1]), s3 = n4?.match(E), o2 = s3 ? Number(s3[1]) : 1, l2 = new RegExp(`@list l${i3}:level${o2}\\s*\\{[^\\}]*mso-level-number-format:\\s*([\\w-]+)`, "i"), a2 = e4.match(l2);
            return { id: i3, indent: o2, type: a2 && "bullet" === a2[1] ? "bullet" : "ordered", element: t6 };
          })(t5, i2))).filter(((t5) => t5));
          for (; s2.length; ) {
            const t5 = [];
            let e4 = s2.shift();
            for (; e4; ) t5.push(e4), e4 = s2.length && s2[0]?.element === e4.element.nextElementSibling && s2[0].id === e4.id ? s2.shift() : null;
            const n4 = document.createElement("ul");
            t5.forEach(((t6) => {
              const e5 = document.createElement("li");
              e5.setAttribute("data-list", t6.type), t6.indent > 1 && e5.setAttribute("class", "ql-indent-" + (t6.indent - 1)), e5.innerHTML = t6.element.innerHTML, n4.appendChild(e5);
            }));
            const r4 = t5[0]?.element, { parentNode: i3 } = r4 ?? {};
            r4 && i3?.replaceChild(n4, r4), t5.slice(1).forEach(((t6) => {
              let { element: e5 } = t6;
              i3?.removeChild(e5);
            }));
          }
        })(t3);
      }, function(t3) {
        t3.querySelector('[id^="docs-internal-guid-"]') && (((t4) => {
          Array.from(t4.querySelectorAll('b[style*="font-weight"]')).filter(((t5) => t5.getAttribute("style")?.match(y))).forEach(((e3) => {
            const n3 = t4.createDocumentFragment();
            n3.append(...e3.childNodes), e3.parentNode?.replaceChild(n3, e3);
          }));
        })(t3), ((t4) => {
          Array.from(t4.querySelectorAll("br")).filter(((t5) => A(t5.previousElementSibling) && A(t5.nextElementSibling))).forEach(((t5) => {
            t5.parentNode?.removeChild(t5);
          }));
        })(t3));
      }];
      const q = (0, l.A)("quill:clipboard"), k = [[Node.TEXT_NODE, function(t3, e3, n3) {
        let r3 = t3.data;
        if ("O:P" === t3.parentElement?.tagName) return e3.insert(r3.trim());
        if (!R(t3)) {
          if (0 === r3.trim().length && r3.includes("\n") && !(function(t4, e4) {
            return t4.previousElementSibling && t4.nextElementSibling && !j(t4.previousElementSibling, e4) && !j(t4.nextElementSibling, e4);
          })(t3, n3)) return e3;
          r3 = r3.replace(/[^\S\u00a0]/g, " "), r3 = r3.replace(/ {2,}/g, " "), (null == t3.previousSibling && null != t3.parentElement && j(t3.parentElement, n3) || t3.previousSibling instanceof Element && j(t3.previousSibling, n3)) && (r3 = r3.replace(/^ /, "")), (null == t3.nextSibling && null != t3.parentElement && j(t3.parentElement, n3) || t3.nextSibling instanceof Element && j(t3.nextSibling, n3)) && (r3 = r3.replace(/ $/, "")), r3 = r3.replaceAll("\xA0", " ");
        }
        return e3.insert(r3);
      }], [Node.TEXT_NODE, M], ["br", function(t3, e3) {
        return T(e3, "\n") || e3.insert("\n"), e3;
      }], [Node.ELEMENT_NODE, M], [Node.ELEMENT_NODE, function(t3, e3, n3) {
        const i2 = n3.query(t3);
        if (null == i2) return e3;
        if (i2.prototype instanceof r2.EmbedBlot) {
          const e4 = {}, r3 = i2.value(t3);
          if (null != r3) return e4[i2.blotName] = r3, new (s())().insert(e4, i2.formats(t3, n3));
        } else if (i2.prototype instanceof r2.BlockBlot && !T(e3, "\n") && e3.insert("\n"), "blotName" in i2 && "formats" in i2 && "function" == typeof i2.formats) return O(e3, i2.blotName, i2.formats(t3, n3), n3);
        return e3;
      }], [Node.ELEMENT_NODE, function(t3, e3, n3) {
        const i2 = r2.Attributor.keys(t3), s2 = r2.ClassAttributor.keys(t3), o2 = r2.StyleAttributor.keys(t3), l2 = {};
        return i2.concat(s2).concat(o2).forEach(((e4) => {
          let i3 = n3.query(e4, r2.Scope.ATTRIBUTE);
          null != i3 && (l2[i3.attrName] = i3.value(t3), l2[i3.attrName]) || (i3 = _[e4], null == i3 || i3.attrName !== e4 && i3.keyName !== e4 || (l2[i3.attrName] = i3.value(t3) || void 0), i3 = L[e4], null == i3 || i3.attrName !== e4 && i3.keyName !== e4 || (i3 = L[e4], l2[i3.attrName] = i3.value(t3) || void 0));
        })), Object.entries(l2).reduce(((t4, e4) => {
          let [r3, i3] = e4;
          return O(t4, r3, i3, n3);
        }), e3);
      }], [Node.ELEMENT_NODE, function(t3, e3, n3) {
        const r3 = {}, i2 = t3.style || {};
        return "italic" === i2.fontStyle && (r3.italic = true), "underline" === i2.textDecoration && (r3.underline = true), "line-through" === i2.textDecoration && (r3.strike = true), (i2.fontWeight?.startsWith("bold") || parseInt(i2.fontWeight, 10) >= 700) && (r3.bold = true), e3 = Object.entries(r3).reduce(((t4, e4) => {
          let [r4, i3] = e4;
          return O(t4, r4, i3, n3);
        }), e3), parseFloat(i2.textIndent || 0) > 0 ? new (s())().insert("	").concat(e3) : e3;
      }], ["li", function(t3, e3, n3) {
        const r3 = n3.query(t3);
        if (null == r3 || "list" !== r3.blotName || !T(e3, "\n")) return e3;
        let i2 = -1, o2 = t3.parentNode;
        for (; null != o2; ) ["OL", "UL"].includes(o2.tagName) && (i2 += 1), o2 = o2.parentNode;
        return i2 <= 0 ? e3 : e3.reduce(((t4, e4) => e4.insert ? e4.attributes && "number" == typeof e4.attributes.indent ? t4.push(e4) : t4.insert(e4.insert, { indent: i2, ...e4.attributes || {} }) : t4), new (s())());
      }], ["ol, ul", function(t3, e3, n3) {
        const r3 = t3;
        let i2 = "OL" === r3.tagName ? "ordered" : "bullet";
        const s2 = r3.getAttribute("data-checked");
        return s2 && (i2 = "true" === s2 ? "checked" : "unchecked"), O(e3, "list", i2, n3);
      }], ["pre", function(t3, e3, n3) {
        const r3 = n3.query("code-block");
        return O(e3, "code-block", !r3 || !("formats" in r3) || "function" != typeof r3.formats || r3.formats(t3, n3), n3);
      }], ["tr", function(t3, e3, n3) {
        const r3 = "TABLE" === t3.parentElement?.tagName ? t3.parentElement : t3.parentElement?.parentElement;
        return null != r3 ? O(e3, "table", Array.from(r3.querySelectorAll("tr")).indexOf(t3) + 1, n3) : e3;
      }], ["b", B("bold")], ["i", B("italic")], ["strike", B("strike")], ["style", function() {
        return new (s())();
      }]], _ = [u.gS, p.Mc].reduce(((t3, e3) => (t3[e3.keyName] = e3, t3)), {}), L = [u.Hu, h.s, f.JM, p.VL, g.z, m.r].reduce(((t3, e3) => (t3[e3.keyName] = e3, t3)), {});
      class S extends a.A {
        static DEFAULTS = { matchers: [] };
        constructor(t3, e3) {
          super(t3, e3), this.quill.root.addEventListener("copy", ((t4) => this.onCaptureCopy(t4, false))), this.quill.root.addEventListener("cut", ((t4) => this.onCaptureCopy(t4, true))), this.quill.root.addEventListener("paste", this.onCapturePaste.bind(this)), this.matchers = [], k.concat(this.options.matchers ?? []).forEach(((t4) => {
            let [e4, n3] = t4;
            this.addMatcher(e4, n3);
          }));
        }
        addMatcher(t3, e3) {
          this.matchers.push([t3, e3]);
        }
        convert(t3) {
          let { html: e3, text: n3 } = t3, r3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (r3[d.Ay.blotName]) return new (s())().insert(n3 || "", { [d.Ay.blotName]: r3[d.Ay.blotName] });
          if (!e3) return new (s())().insert(n3 || "", r3);
          const i2 = this.convertHTML(e3);
          return T(i2, "\n") && (null == i2.ops[i2.ops.length - 1].attributes || r3.table) ? i2.compose(new (s())().retain(i2.length() - 1).delete(1)) : i2;
        }
        normalizeHTML(t3) {
          ((t4) => {
            t4.documentElement && w.forEach(((e3) => {
              e3(t4);
            }));
          })(t3);
        }
        convertHTML(t3) {
          const e3 = new DOMParser().parseFromString(t3, "text/html");
          this.normalizeHTML(e3);
          const n3 = e3.body, r3 = /* @__PURE__ */ new WeakMap(), [i2, s2] = this.prepareMatching(n3, r3);
          return I(this.quill.scroll, n3, i2, s2, r3);
        }
        dangerouslyPasteHTML(t3, e3) {
          let n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.Ay.sources.API;
          if ("string" == typeof t3) {
            const n4 = this.convert({ html: t3, text: "" });
            this.quill.setContents(n4, e3), this.quill.setSelection(0, c.Ay.sources.SILENT);
          } else {
            const r3 = this.convert({ html: e3, text: "" });
            this.quill.updateContents(new (s())().retain(t3).concat(r3), n3), this.quill.setSelection(t3 + r3.length(), c.Ay.sources.SILENT);
          }
        }
        onCaptureCopy(t3) {
          let e3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (t3.defaultPrevented) return;
          t3.preventDefault();
          const [n3] = this.quill.selection.getRange();
          if (null == n3) return;
          const { html: r3, text: i2 } = this.onCopy(n3, e3);
          t3.clipboardData?.setData("text/plain", i2), t3.clipboardData?.setData("text/html", r3), e3 && (0, b.Xo)({ range: n3, quill: this.quill });
        }
        normalizeURIList(t3) {
          return t3.split(/\r?\n/).filter(((t4) => "#" !== t4[0])).join("\n");
        }
        onCapturePaste(t3) {
          if (t3.defaultPrevented || !this.quill.isEnabled()) return;
          t3.preventDefault();
          const e3 = this.quill.getSelection(true);
          if (null == e3) return;
          const n3 = t3.clipboardData?.getData("text/html");
          let r3 = t3.clipboardData?.getData("text/plain");
          if (!n3 && !r3) {
            const e4 = t3.clipboardData?.getData("text/uri-list");
            e4 && (r3 = this.normalizeURIList(e4));
          }
          const i2 = Array.from(t3.clipboardData?.files || []);
          if (!n3 && i2.length > 0) this.quill.uploader.upload(e3, i2);
          else {
            if (n3 && i2.length > 0) {
              const t4 = new DOMParser().parseFromString(n3, "text/html");
              if (1 === t4.body.childElementCount && "IMG" === t4.body.firstElementChild?.tagName) return void this.quill.uploader.upload(e3, i2);
            }
            this.onPaste(e3, { html: n3, text: r3 });
          }
        }
        onCopy(t3) {
          const e3 = this.quill.getText(t3);
          return { html: this.quill.getSemanticHTML(t3), text: e3 };
        }
        onPaste(t3, e3) {
          let { text: n3, html: r3 } = e3;
          const i2 = this.quill.getFormat(t3.index), o2 = this.convert({ text: n3, html: r3 }, i2);
          q.log("onPaste", o2, { text: n3, html: r3 });
          const l2 = new (s())().retain(t3.index).delete(t3.length).concat(o2);
          this.quill.updateContents(l2, c.Ay.sources.USER), this.quill.setSelection(l2.length() - t3.length, c.Ay.sources.SILENT), this.quill.scrollSelectionIntoView();
        }
        prepareMatching(t3, e3) {
          const n3 = [], r3 = [];
          return this.matchers.forEach(((i2) => {
            const [s2, o2] = i2;
            switch (s2) {
              case Node.TEXT_NODE:
                r3.push(o2);
                break;
              case Node.ELEMENT_NODE:
                n3.push(o2);
                break;
              default:
                Array.from(t3.querySelectorAll(s2)).forEach(((t4) => {
                  if (e3.has(t4)) {
                    const n4 = e3.get(t4);
                    n4?.push(o2);
                  } else e3.set(t4, [o2]);
                }));
            }
          })), [n3, r3];
        }
      }
      function O(t3, e3, n3, r3) {
        return r3.query(e3) ? t3.reduce(((t4, r4) => {
          if (!r4.insert) return t4;
          if (r4.attributes && r4.attributes[e3]) return t4.push(r4);
          const i2 = n3 ? { [e3]: n3 } : {};
          return t4.insert(r4.insert, { ...i2, ...r4.attributes });
        }), new (s())()) : t3;
      }
      function T(t3, e3) {
        let n3 = "";
        for (let r3 = t3.ops.length - 1; r3 >= 0 && n3.length < e3.length; --r3) {
          const e4 = t3.ops[r3];
          if ("string" != typeof e4.insert) break;
          n3 = e4.insert + n3;
        }
        return n3.slice(-1 * e3.length) === e3;
      }
      function j(t3, e3) {
        if (!(t3 instanceof Element)) return false;
        const n3 = e3.query(t3);
        return !(n3 && n3.prototype instanceof r2.EmbedBlot) && ["address", "article", "blockquote", "canvas", "dd", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "iframe", "li", "main", "nav", "ol", "output", "p", "pre", "section", "table", "td", "tr", "ul", "video"].includes(t3.tagName.toLowerCase());
      }
      const C = /* @__PURE__ */ new WeakMap();
      function R(t3) {
        return null != t3 && (C.has(t3) || ("PRE" === t3.tagName ? C.set(t3, true) : C.set(t3, R(t3.parentNode))), C.get(t3));
      }
      function I(t3, e3, n3, r3, i2) {
        return e3.nodeType === e3.TEXT_NODE ? r3.reduce(((n4, r4) => r4(e3, n4, t3)), new (s())()) : e3.nodeType === e3.ELEMENT_NODE ? Array.from(e3.childNodes || []).reduce(((s2, o2) => {
          let l2 = I(t3, o2, n3, r3, i2);
          return o2.nodeType === e3.ELEMENT_NODE && (l2 = n3.reduce(((e4, n4) => n4(o2, e4, t3)), l2), l2 = (i2.get(o2) || []).reduce(((e4, n4) => n4(o2, e4, t3)), l2)), s2.concat(l2);
        }), new (s())()) : new (s())();
      }
      function B(t3) {
        return (e3, n3, r3) => O(n3, t3, true, r3);
      }
      function M(t3, e3, n3) {
        if (!T(e3, "\n")) {
          if (j(t3, n3) && (t3.childNodes.length > 0 || t3 instanceof HTMLParagraphElement)) return e3.insert("\n");
          if (e3.length() > 0 && t3.nextSibling) {
            let r3 = t3.nextSibling;
            for (; null != r3; ) {
              if (j(r3, n3)) return e3.insert("\n");
              const t4 = n3.query(r3);
              if (t4 && t4.prototype instanceof o.zo) return e3.insert("\n");
              r3 = r3.firstChild;
            }
          }
        }
        return e3;
      }
    }, 8123: function(t2, e2, n2) {
      "use strict";
      n2.d(e2, { Ay: function() {
        return f;
      }, Xo: function() {
        return v;
      } });
      var r2 = n2(5123), i = n2(3707), s = n2(5232), o = n2.n(s), l = n2(6003), a = n2(6142), c = n2(6078), u = n2(4266);
      const h = (0, c.A)("quill:keyboard"), d = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey";
      class f extends u.A {
        static match(t3, e3) {
          return !["altKey", "ctrlKey", "metaKey", "shiftKey"].some(((n3) => !!e3[n3] !== t3[n3] && null !== e3[n3])) && (e3.key === t3.key || e3.key === t3.which);
        }
        constructor(t3, e3) {
          super(t3, e3), this.bindings = {}, Object.keys(this.options.bindings).forEach(((t4) => {
            this.options.bindings[t4] && this.addBinding(this.options.bindings[t4]);
          })), this.addBinding({ key: "Enter", shiftKey: null }, this.handleEnter), this.addBinding({ key: "Enter", metaKey: null, ctrlKey: null, altKey: null }, (() => {
          })), /Firefox/i.test(navigator.userAgent) ? (this.addBinding({ key: "Backspace" }, { collapsed: true }, this.handleBackspace), this.addBinding({ key: "Delete" }, { collapsed: true }, this.handleDelete)) : (this.addBinding({ key: "Backspace" }, { collapsed: true, prefix: /^.?$/ }, this.handleBackspace), this.addBinding({ key: "Delete" }, { collapsed: true, suffix: /^.?$/ }, this.handleDelete)), this.addBinding({ key: "Backspace" }, { collapsed: false }, this.handleDeleteRange), this.addBinding({ key: "Delete" }, { collapsed: false }, this.handleDeleteRange), this.addBinding({ key: "Backspace", altKey: null, ctrlKey: null, metaKey: null, shiftKey: null }, { collapsed: true, offset: 0 }, this.handleBackspace), this.listen();
        }
        addBinding(t3) {
          let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const r3 = (function(t4) {
            if ("string" == typeof t4 || "number" == typeof t4) t4 = { key: t4 };
            else {
              if ("object" != typeof t4) return null;
              t4 = (0, i.A)(t4);
            }
            return t4.shortKey && (t4[d] = t4.shortKey, delete t4.shortKey), t4;
          })(t3);
          null != r3 ? ("function" == typeof e3 && (e3 = { handler: e3 }), "function" == typeof n3 && (n3 = { handler: n3 }), (Array.isArray(r3.key) ? r3.key : [r3.key]).forEach(((t4) => {
            const i2 = { ...r3, key: t4, ...e3, ...n3 };
            this.bindings[i2.key] = this.bindings[i2.key] || [], this.bindings[i2.key].push(i2);
          }))) : h.warn("Attempted to add invalid keyboard binding", r3);
        }
        listen() {
          this.quill.root.addEventListener("keydown", ((t3) => {
            if (t3.defaultPrevented || t3.isComposing) return;
            if (229 === t3.keyCode && ("Enter" === t3.key || "Backspace" === t3.key)) return;
            const e3 = (this.bindings[t3.key] || []).concat(this.bindings[t3.which] || []).filter(((e4) => f.match(t3, e4)));
            if (0 === e3.length) return;
            const n3 = a.Ay.find(t3.target, true);
            if (n3 && n3.scroll !== this.quill.scroll) return;
            const i2 = this.quill.getSelection();
            if (null == i2 || !this.quill.hasFocus()) return;
            const [s2, o2] = this.quill.getLine(i2.index), [c2, u2] = this.quill.getLeaf(i2.index), [h2, d2] = 0 === i2.length ? [c2, u2] : this.quill.getLeaf(i2.index + i2.length), p2 = c2 instanceof l.TextBlot ? c2.value().slice(0, u2) : "", g2 = h2 instanceof l.TextBlot ? h2.value().slice(d2) : "", m2 = { collapsed: 0 === i2.length, empty: 0 === i2.length && s2.length() <= 1, format: this.quill.getFormat(i2), line: s2, offset: o2, prefix: p2, suffix: g2, event: t3 };
            e3.some(((t4) => {
              if (null != t4.collapsed && t4.collapsed !== m2.collapsed) return false;
              if (null != t4.empty && t4.empty !== m2.empty) return false;
              if (null != t4.offset && t4.offset !== m2.offset) return false;
              if (Array.isArray(t4.format)) {
                if (t4.format.every(((t5) => null == m2.format[t5]))) return false;
              } else if ("object" == typeof t4.format && !Object.keys(t4.format).every(((e4) => true === t4.format[e4] ? null != m2.format[e4] : false === t4.format[e4] ? null == m2.format[e4] : (0, r2.A)(t4.format[e4], m2.format[e4])))) return false;
              return !(null != t4.prefix && !t4.prefix.test(m2.prefix) || null != t4.suffix && !t4.suffix.test(m2.suffix) || true === t4.handler.call(this, i2, m2, t4));
            })) && t3.preventDefault();
          }));
        }
        handleBackspace(t3, e3) {
          const n3 = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e3.prefix) ? 2 : 1;
          if (0 === t3.index || this.quill.getLength() <= 1) return;
          let r3 = {};
          const [i2] = this.quill.getLine(t3.index);
          let l2 = new (o())().retain(t3.index - n3).delete(n3);
          if (0 === e3.offset) {
            const [e4] = this.quill.getLine(t3.index - 1);
            if (e4 && !("block" === e4.statics.blotName && e4.length() <= 1)) {
              const e5 = i2.formats(), n4 = this.quill.getFormat(t3.index - 1, 1);
              if (r3 = s.AttributeMap.diff(e5, n4) || {}, Object.keys(r3).length > 0) {
                const e6 = new (o())().retain(t3.index + i2.length() - 2).retain(1, r3);
                l2 = l2.compose(e6);
              }
            }
          }
          this.quill.updateContents(l2, a.Ay.sources.USER), this.quill.focus();
        }
        handleDelete(t3, e3) {
          const n3 = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e3.suffix) ? 2 : 1;
          if (t3.index >= this.quill.getLength() - n3) return;
          let r3 = {};
          const [i2] = this.quill.getLine(t3.index);
          let l2 = new (o())().retain(t3.index).delete(n3);
          if (e3.offset >= i2.length() - 1) {
            const [e4] = this.quill.getLine(t3.index + 1);
            if (e4) {
              const n4 = i2.formats(), o2 = this.quill.getFormat(t3.index, 1);
              r3 = s.AttributeMap.diff(n4, o2) || {}, Object.keys(r3).length > 0 && (l2 = l2.retain(e4.length() - 1).retain(1, r3));
            }
          }
          this.quill.updateContents(l2, a.Ay.sources.USER), this.quill.focus();
        }
        handleDeleteRange(t3) {
          v({ range: t3, quill: this.quill }), this.quill.focus();
        }
        handleEnter(t3, e3) {
          const n3 = Object.keys(e3.format).reduce(((t4, n4) => (this.quill.scroll.query(n4, l.Scope.BLOCK) && !Array.isArray(e3.format[n4]) && (t4[n4] = e3.format[n4]), t4)), {}), r3 = new (o())().retain(t3.index).delete(t3.length).insert("\n", n3);
          this.quill.updateContents(r3, a.Ay.sources.USER), this.quill.setSelection(t3.index + 1, a.Ay.sources.SILENT), this.quill.focus();
        }
      }
      const p = { bindings: { bold: b("bold"), italic: b("italic"), underline: b("underline"), indent: { key: "Tab", format: ["blockquote", "indent", "list"], handler(t3, e3) {
        return !(!e3.collapsed || 0 === e3.offset) || (this.quill.format("indent", "+1", a.Ay.sources.USER), false);
      } }, outdent: { key: "Tab", shiftKey: true, format: ["blockquote", "indent", "list"], handler(t3, e3) {
        return !(!e3.collapsed || 0 === e3.offset) || (this.quill.format("indent", "-1", a.Ay.sources.USER), false);
      } }, "outdent backspace": { key: "Backspace", collapsed: true, shiftKey: null, metaKey: null, ctrlKey: null, altKey: null, format: ["indent", "list"], offset: 0, handler(t3, e3) {
        null != e3.format.indent ? this.quill.format("indent", "-1", a.Ay.sources.USER) : null != e3.format.list && this.quill.format("list", false, a.Ay.sources.USER);
      } }, "indent code-block": g(true), "outdent code-block": g(false), "remove tab": { key: "Tab", shiftKey: true, collapsed: true, prefix: /\t$/, handler(t3) {
        this.quill.deleteText(t3.index - 1, 1, a.Ay.sources.USER);
      } }, tab: { key: "Tab", handler(t3, e3) {
        if (e3.format.table) return true;
        this.quill.history.cutoff();
        const n3 = new (o())().retain(t3.index).delete(t3.length).insert("	");
        return this.quill.updateContents(n3, a.Ay.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(t3.index + 1, a.Ay.sources.SILENT), false;
      } }, "blockquote empty enter": { key: "Enter", collapsed: true, format: ["blockquote"], empty: true, handler() {
        this.quill.format("blockquote", false, a.Ay.sources.USER);
      } }, "list empty enter": { key: "Enter", collapsed: true, format: ["list"], empty: true, handler(t3, e3) {
        const n3 = { list: false };
        e3.format.indent && (n3.indent = false), this.quill.formatLine(t3.index, t3.length, n3, a.Ay.sources.USER);
      } }, "checklist enter": { key: "Enter", collapsed: true, format: { list: "checked" }, handler(t3) {
        const [e3, n3] = this.quill.getLine(t3.index), r3 = { ...e3.formats(), list: "checked" }, i2 = new (o())().retain(t3.index).insert("\n", r3).retain(e3.length() - n3 - 1).retain(1, { list: "unchecked" });
        this.quill.updateContents(i2, a.Ay.sources.USER), this.quill.setSelection(t3.index + 1, a.Ay.sources.SILENT), this.quill.scrollSelectionIntoView();
      } }, "header enter": { key: "Enter", collapsed: true, format: ["header"], suffix: /^$/, handler(t3, e3) {
        const [n3, r3] = this.quill.getLine(t3.index), i2 = new (o())().retain(t3.index).insert("\n", e3.format).retain(n3.length() - r3 - 1).retain(1, { header: null });
        this.quill.updateContents(i2, a.Ay.sources.USER), this.quill.setSelection(t3.index + 1, a.Ay.sources.SILENT), this.quill.scrollSelectionIntoView();
      } }, "table backspace": { key: "Backspace", format: ["table"], collapsed: true, offset: 0, handler() {
      } }, "table delete": { key: "Delete", format: ["table"], collapsed: true, suffix: /^$/, handler() {
      } }, "table enter": { key: "Enter", shiftKey: null, format: ["table"], handler(t3) {
        const e3 = this.quill.getModule("table");
        if (e3) {
          const [n3, r3, i2, s2] = e3.getTable(t3), l2 = (function(t4, e4, n4, r4) {
            return null == e4.prev && null == e4.next ? null == n4.prev && null == n4.next ? 0 === r4 ? -1 : 1 : null == n4.prev ? -1 : 1 : null == e4.prev ? -1 : null == e4.next ? 1 : null;
          })(0, r3, i2, s2);
          if (null == l2) return;
          let c2 = n3.offset();
          if (l2 < 0) {
            const e4 = new (o())().retain(c2).insert("\n");
            this.quill.updateContents(e4, a.Ay.sources.USER), this.quill.setSelection(t3.index + 1, t3.length, a.Ay.sources.SILENT);
          } else if (l2 > 0) {
            c2 += n3.length();
            const t4 = new (o())().retain(c2).insert("\n");
            this.quill.updateContents(t4, a.Ay.sources.USER), this.quill.setSelection(c2, a.Ay.sources.USER);
          }
        }
      } }, "table tab": { key: "Tab", shiftKey: null, format: ["table"], handler(t3, e3) {
        const { event: n3, line: r3 } = e3, i2 = r3.offset(this.quill.scroll);
        n3.shiftKey ? this.quill.setSelection(i2 - 1, a.Ay.sources.USER) : this.quill.setSelection(i2 + r3.length(), a.Ay.sources.USER);
      } }, "list autofill": { key: " ", shiftKey: null, collapsed: true, format: { "code-block": false, blockquote: false, table: false }, prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/, handler(t3, e3) {
        if (null == this.quill.scroll.query("list")) return true;
        const { length: n3 } = e3.prefix, [r3, i2] = this.quill.getLine(t3.index);
        if (i2 > n3) return true;
        let s2;
        switch (e3.prefix.trim()) {
          case "[]":
          case "[ ]":
            s2 = "unchecked";
            break;
          case "[x]":
            s2 = "checked";
            break;
          case "-":
          case "*":
            s2 = "bullet";
            break;
          default:
            s2 = "ordered";
        }
        this.quill.insertText(t3.index, " ", a.Ay.sources.USER), this.quill.history.cutoff();
        const l2 = new (o())().retain(t3.index - i2).delete(n3 + 1).retain(r3.length() - 2 - i2).retain(1, { list: s2 });
        return this.quill.updateContents(l2, a.Ay.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(t3.index - n3, a.Ay.sources.SILENT), false;
      } }, "code exit": { key: "Enter", collapsed: true, format: ["code-block"], prefix: /^$/, suffix: /^\s*$/, handler(t3) {
        const [e3, n3] = this.quill.getLine(t3.index);
        let r3 = 2, i2 = e3;
        for (; null != i2 && i2.length() <= 1 && i2.formats()["code-block"]; ) if (i2 = i2.prev, r3 -= 1, r3 <= 0) {
          const r4 = new (o())().retain(t3.index + e3.length() - n3 - 2).retain(1, { "code-block": null }).delete(1);
          return this.quill.updateContents(r4, a.Ay.sources.USER), this.quill.setSelection(t3.index - 1, a.Ay.sources.SILENT), false;
        }
        return true;
      } }, "embed left": m("ArrowLeft", false), "embed left shift": m("ArrowLeft", true), "embed right": m("ArrowRight", false), "embed right shift": m("ArrowRight", true), "table down": y(false), "table up": y(true) } };
      function g(t3) {
        return { key: "Tab", shiftKey: !t3, format: { "code-block": true }, handler(e3, n3) {
          let { event: r3 } = n3;
          const i2 = this.quill.scroll.query("code-block"), { TAB: s2 } = i2;
          if (0 === e3.length && !r3.shiftKey) return this.quill.insertText(e3.index, s2, a.Ay.sources.USER), void this.quill.setSelection(e3.index + s2.length, a.Ay.sources.SILENT);
          const o2 = 0 === e3.length ? this.quill.getLines(e3.index, 1) : this.quill.getLines(e3);
          let { index: l2, length: c2 } = e3;
          o2.forEach(((e4, n4) => {
            t3 ? (e4.insertAt(0, s2), 0 === n4 ? l2 += s2.length : c2 += s2.length) : e4.domNode.textContent.startsWith(s2) && (e4.deleteAt(0, s2.length), 0 === n4 ? l2 -= s2.length : c2 -= s2.length);
          })), this.quill.update(a.Ay.sources.USER), this.quill.setSelection(l2, c2, a.Ay.sources.SILENT);
        } };
      }
      function m(t3, e3) {
        return { key: t3, shiftKey: e3, altKey: null, ["ArrowLeft" === t3 ? "prefix" : "suffix"]: /^$/, handler(n3) {
          let { index: r3 } = n3;
          "ArrowRight" === t3 && (r3 += n3.length + 1);
          const [i2] = this.quill.getLeaf(r3);
          return !(i2 instanceof l.EmbedBlot && ("ArrowLeft" === t3 ? e3 ? this.quill.setSelection(n3.index - 1, n3.length + 1, a.Ay.sources.USER) : this.quill.setSelection(n3.index - 1, a.Ay.sources.USER) : e3 ? this.quill.setSelection(n3.index, n3.length + 1, a.Ay.sources.USER) : this.quill.setSelection(n3.index + n3.length + 1, a.Ay.sources.USER), 1));
        } };
      }
      function b(t3) {
        return { key: t3[0], shortKey: true, handler(e3, n3) {
          this.quill.format(t3, !n3.format[t3], a.Ay.sources.USER);
        } };
      }
      function y(t3) {
        return { key: t3 ? "ArrowUp" : "ArrowDown", collapsed: true, format: ["table"], handler(e3, n3) {
          const r3 = t3 ? "prev" : "next", i2 = n3.line, s2 = i2.parent[r3];
          if (null != s2) {
            if ("table-row" === s2.statics.blotName) {
              let t4 = s2.children.head, e4 = i2;
              for (; null != e4.prev; ) e4 = e4.prev, t4 = t4.next;
              const r4 = t4.offset(this.quill.scroll) + Math.min(n3.offset, t4.length() - 1);
              this.quill.setSelection(r4, 0, a.Ay.sources.USER);
            }
          } else {
            const e4 = i2.table()[r3];
            null != e4 && (t3 ? this.quill.setSelection(e4.offset(this.quill.scroll) + e4.length() - 1, 0, a.Ay.sources.USER) : this.quill.setSelection(e4.offset(this.quill.scroll), 0, a.Ay.sources.USER));
          }
          return false;
        } };
      }
      function v(t3) {
        let { quill: e3, range: n3 } = t3;
        const r3 = e3.getLines(n3);
        let i2 = {};
        if (r3.length > 1) {
          const t4 = r3[0].formats(), e4 = r3[r3.length - 1].formats();
          i2 = s.AttributeMap.diff(e4, t4) || {};
        }
        e3.deleteText(n3, a.Ay.sources.USER), Object.keys(i2).length > 0 && e3.formatLine(n3.index, 1, i2, a.Ay.sources.USER), e3.setSelection(n3.index, a.Ay.sources.SILENT);
      }
      f.DEFAULTS = p;
    }, 8920: function(t2) {
      "use strict";
      var e2 = Object.prototype.hasOwnProperty, n2 = "~";
      function r2() {
      }
      function i(t3, e3, n3) {
        this.fn = t3, this.context = e3, this.once = n3 || false;
      }
      function s(t3, e3, r3, s2, o2) {
        if ("function" != typeof r3) throw new TypeError("The listener must be a function");
        var l2 = new i(r3, s2 || t3, o2), a = n2 ? n2 + e3 : e3;
        return t3._events[a] ? t3._events[a].fn ? t3._events[a] = [t3._events[a], l2] : t3._events[a].push(l2) : (t3._events[a] = l2, t3._eventsCount++), t3;
      }
      function o(t3, e3) {
        0 == --t3._eventsCount ? t3._events = new r2() : delete t3._events[e3];
      }
      function l() {
        this._events = new r2(), this._eventsCount = 0;
      }
      Object.create && (r2.prototype = /* @__PURE__ */ Object.create(null), new r2().__proto__ || (n2 = false)), l.prototype.eventNames = function() {
        var t3, r3, i2 = [];
        if (0 === this._eventsCount) return i2;
        for (r3 in t3 = this._events) e2.call(t3, r3) && i2.push(n2 ? r3.slice(1) : r3);
        return Object.getOwnPropertySymbols ? i2.concat(Object.getOwnPropertySymbols(t3)) : i2;
      }, l.prototype.listeners = function(t3) {
        var e3 = n2 ? n2 + t3 : t3, r3 = this._events[e3];
        if (!r3) return [];
        if (r3.fn) return [r3.fn];
        for (var i2 = 0, s2 = r3.length, o2 = new Array(s2); i2 < s2; i2++) o2[i2] = r3[i2].fn;
        return o2;
      }, l.prototype.listenerCount = function(t3) {
        var e3 = n2 ? n2 + t3 : t3, r3 = this._events[e3];
        return r3 ? r3.fn ? 1 : r3.length : 0;
      }, l.prototype.emit = function(t3, e3, r3, i2, s2, o2) {
        var l2 = n2 ? n2 + t3 : t3;
        if (!this._events[l2]) return false;
        var a, c, u = this._events[l2], h = arguments.length;
        if (u.fn) {
          switch (u.once && this.removeListener(t3, u.fn, void 0, true), h) {
            case 1:
              return u.fn.call(u.context), true;
            case 2:
              return u.fn.call(u.context, e3), true;
            case 3:
              return u.fn.call(u.context, e3, r3), true;
            case 4:
              return u.fn.call(u.context, e3, r3, i2), true;
            case 5:
              return u.fn.call(u.context, e3, r3, i2, s2), true;
            case 6:
              return u.fn.call(u.context, e3, r3, i2, s2, o2), true;
          }
          for (c = 1, a = new Array(h - 1); c < h; c++) a[c - 1] = arguments[c];
          u.fn.apply(u.context, a);
        } else {
          var d, f = u.length;
          for (c = 0; c < f; c++) switch (u[c].once && this.removeListener(t3, u[c].fn, void 0, true), h) {
            case 1:
              u[c].fn.call(u[c].context);
              break;
            case 2:
              u[c].fn.call(u[c].context, e3);
              break;
            case 3:
              u[c].fn.call(u[c].context, e3, r3);
              break;
            case 4:
              u[c].fn.call(u[c].context, e3, r3, i2);
              break;
            default:
              if (!a) for (d = 1, a = new Array(h - 1); d < h; d++) a[d - 1] = arguments[d];
              u[c].fn.apply(u[c].context, a);
          }
        }
        return true;
      }, l.prototype.on = function(t3, e3, n3) {
        return s(this, t3, e3, n3, false);
      }, l.prototype.once = function(t3, e3, n3) {
        return s(this, t3, e3, n3, true);
      }, l.prototype.removeListener = function(t3, e3, r3, i2) {
        var s2 = n2 ? n2 + t3 : t3;
        if (!this._events[s2]) return this;
        if (!e3) return o(this, s2), this;
        var l2 = this._events[s2];
        if (l2.fn) l2.fn !== e3 || i2 && !l2.once || r3 && l2.context !== r3 || o(this, s2);
        else {
          for (var a = 0, c = [], u = l2.length; a < u; a++) (l2[a].fn !== e3 || i2 && !l2[a].once || r3 && l2[a].context !== r3) && c.push(l2[a]);
          c.length ? this._events[s2] = 1 === c.length ? c[0] : c : o(this, s2);
        }
        return this;
      }, l.prototype.removeAllListeners = function(t3) {
        var e3;
        return t3 ? (e3 = n2 ? n2 + t3 : t3, this._events[e3] && o(this, e3)) : (this._events = new r2(), this._eventsCount = 0), this;
      }, l.prototype.off = l.prototype.removeListener, l.prototype.addListener = l.prototype.on, l.prefixed = n2, l.EventEmitter = l, t2.exports = l;
    }, 5090: function(t2) {
      var e2 = -1, n2 = 1, r2 = 0;
      function i(t3, g2, m2, b2, y2) {
        if (t3 === g2) return t3 ? [[r2, t3]] : [];
        if (null != m2) {
          var A2 = (function(t4, e3, n3) {
            var r3 = "number" == typeof n3 ? { index: n3, length: 0 } : n3.oldRange, i2 = "number" == typeof n3 ? null : n3.newRange, s2 = t4.length, o2 = e3.length;
            if (0 === r3.length && (null === i2 || 0 === i2.length)) {
              var l2 = r3.index, a2 = t4.slice(0, l2), c2 = t4.slice(l2), u2 = i2 ? i2.index : null, h2 = l2 + o2 - s2;
              if ((null === u2 || u2 === h2) && !(h2 < 0 || h2 > o2)) {
                var d2 = e3.slice(0, h2);
                if ((g3 = e3.slice(h2)) === c2) {
                  var f2 = Math.min(l2, h2);
                  if ((b3 = a2.slice(0, f2)) === (A3 = d2.slice(0, f2))) return v(b3, a2.slice(f2), d2.slice(f2), c2);
                }
              }
              if (null === u2 || u2 === l2) {
                var p2 = l2, g3 = (d2 = e3.slice(0, p2), e3.slice(p2));
                if (d2 === a2) {
                  var m3 = Math.min(s2 - p2, o2 - p2);
                  if ((y3 = c2.slice(c2.length - m3)) === (x2 = g3.slice(g3.length - m3))) return v(a2, c2.slice(0, c2.length - m3), g3.slice(0, g3.length - m3), y3);
                }
              }
            }
            if (r3.length > 0 && i2 && 0 === i2.length) {
              var b3 = t4.slice(0, r3.index), y3 = t4.slice(r3.index + r3.length);
              if (!(o2 < (f2 = b3.length) + (m3 = y3.length))) {
                var A3 = e3.slice(0, f2), x2 = e3.slice(o2 - m3);
                if (b3 === A3 && y3 === x2) return v(b3, t4.slice(f2, s2 - m3), e3.slice(f2, o2 - m3), y3);
              }
            }
            return null;
          })(t3, g2, m2);
          if (A2) return A2;
        }
        var x = o(t3, g2), N = t3.substring(0, x);
        x = a(t3 = t3.substring(x), g2 = g2.substring(x));
        var E = t3.substring(t3.length - x), w = (function(t4, l2) {
          var c2;
          if (!t4) return [[n2, l2]];
          if (!l2) return [[e2, t4]];
          var u2 = t4.length > l2.length ? t4 : l2, h2 = t4.length > l2.length ? l2 : t4, d2 = u2.indexOf(h2);
          if (-1 !== d2) return c2 = [[n2, u2.substring(0, d2)], [r2, h2], [n2, u2.substring(d2 + h2.length)]], t4.length > l2.length && (c2[0][0] = c2[2][0] = e2), c2;
          if (1 === h2.length) return [[e2, t4], [n2, l2]];
          var f2 = (function(t5, e3) {
            var n3 = t5.length > e3.length ? t5 : e3, r3 = t5.length > e3.length ? e3 : t5;
            if (n3.length < 4 || 2 * r3.length < n3.length) return null;
            function i2(t6, e4, n4) {
              for (var r4, i3, s3, l4, c4 = t6.substring(n4, n4 + Math.floor(t6.length / 4)), u4 = -1, h4 = ""; -1 !== (u4 = e4.indexOf(c4, u4 + 1)); ) {
                var d4 = o(t6.substring(n4), e4.substring(u4)), f4 = a(t6.substring(0, n4), e4.substring(0, u4));
                h4.length < f4 + d4 && (h4 = e4.substring(u4 - f4, u4) + e4.substring(u4, u4 + d4), r4 = t6.substring(0, n4 - f4), i3 = t6.substring(n4 + d4), s3 = e4.substring(0, u4 - f4), l4 = e4.substring(u4 + d4));
              }
              return 2 * h4.length >= t6.length ? [r4, i3, s3, l4, h4] : null;
            }
            var s2, l3, c3, u3, h3, d3 = i2(n3, r3, Math.ceil(n3.length / 4)), f3 = i2(n3, r3, Math.ceil(n3.length / 2));
            return d3 || f3 ? (s2 = f3 ? d3 && d3[4].length > f3[4].length ? d3 : f3 : d3, t5.length > e3.length ? (l3 = s2[0], c3 = s2[1], u3 = s2[2], h3 = s2[3]) : (u3 = s2[0], h3 = s2[1], l3 = s2[2], c3 = s2[3]), [l3, c3, u3, h3, s2[4]]) : null;
          })(t4, l2);
          if (f2) {
            var p2 = f2[0], g3 = f2[1], m3 = f2[2], b3 = f2[3], y3 = f2[4], v2 = i(p2, m3), A3 = i(g3, b3);
            return v2.concat([[r2, y3]], A3);
          }
          return (function(t5, r3) {
            for (var i2 = t5.length, o2 = r3.length, l3 = Math.ceil((i2 + o2) / 2), a2 = l3, c3 = 2 * l3, u3 = new Array(c3), h3 = new Array(c3), d3 = 0; d3 < c3; d3++) u3[d3] = -1, h3[d3] = -1;
            u3[a2 + 1] = 0, h3[a2 + 1] = 0;
            for (var f3 = i2 - o2, p3 = f3 % 2 != 0, g4 = 0, m4 = 0, b4 = 0, y4 = 0, v3 = 0; v3 < l3; v3++) {
              for (var A4 = -v3 + g4; A4 <= v3 - m4; A4 += 2) {
                for (var x2 = a2 + A4, N2 = (_ = A4 === -v3 || A4 !== v3 && u3[x2 - 1] < u3[x2 + 1] ? u3[x2 + 1] : u3[x2 - 1] + 1) - A4; _ < i2 && N2 < o2 && t5.charAt(_) === r3.charAt(N2); ) _++, N2++;
                if (u3[x2] = _, _ > i2) m4 += 2;
                else if (N2 > o2) g4 += 2;
                else if (p3 && (q = a2 + f3 - A4) >= 0 && q < c3 && -1 !== h3[q] && _ >= (w2 = i2 - h3[q])) return s(t5, r3, _, N2);
              }
              for (var E2 = -v3 + b4; E2 <= v3 - y4; E2 += 2) {
                for (var w2, q = a2 + E2, k = (w2 = E2 === -v3 || E2 !== v3 && h3[q - 1] < h3[q + 1] ? h3[q + 1] : h3[q - 1] + 1) - E2; w2 < i2 && k < o2 && t5.charAt(i2 - w2 - 1) === r3.charAt(o2 - k - 1); ) w2++, k++;
                if (h3[q] = w2, w2 > i2) y4 += 2;
                else if (k > o2) b4 += 2;
                else if (!p3) {
                  var _;
                  if ((x2 = a2 + f3 - E2) >= 0 && x2 < c3 && -1 !== u3[x2]) {
                    if (N2 = a2 + (_ = u3[x2]) - x2, _ >= (w2 = i2 - w2)) return s(t5, r3, _, N2);
                  }
                }
              }
            }
            return [[e2, t5], [n2, r3]];
          })(t4, l2);
        })(t3 = t3.substring(0, t3.length - x), g2 = g2.substring(0, g2.length - x));
        return N && w.unshift([r2, N]), E && w.push([r2, E]), p(w, y2), b2 && (function(t4) {
          for (var i2 = false, s2 = [], o2 = 0, g3 = null, m3 = 0, b3 = 0, y3 = 0, v2 = 0, A3 = 0; m3 < t4.length; ) t4[m3][0] == r2 ? (s2[o2++] = m3, b3 = v2, y3 = A3, v2 = 0, A3 = 0, g3 = t4[m3][1]) : (t4[m3][0] == n2 ? v2 += t4[m3][1].length : A3 += t4[m3][1].length, g3 && g3.length <= Math.max(b3, y3) && g3.length <= Math.max(v2, A3) && (t4.splice(s2[o2 - 1], 0, [e2, g3]), t4[s2[o2 - 1] + 1][0] = n2, o2--, m3 = --o2 > 0 ? s2[o2 - 1] : -1, b3 = 0, y3 = 0, v2 = 0, A3 = 0, g3 = null, i2 = true)), m3++;
          for (i2 && p(t4), (function(t5) {
            function e3(t6, e4) {
              if (!t6 || !e4) return 6;
              var n4 = t6.charAt(t6.length - 1), r3 = e4.charAt(0), i4 = n4.match(c), s4 = r3.match(c), o4 = i4 && n4.match(u), l3 = s4 && r3.match(u), a2 = o4 && n4.match(h), p3 = l3 && r3.match(h), g5 = a2 && t6.match(d), m5 = p3 && e4.match(f);
              return g5 || m5 ? 5 : a2 || p3 ? 4 : i4 && !o4 && l3 ? 3 : o4 || l3 ? 2 : i4 || s4 ? 1 : 0;
            }
            for (var n3 = 1; n3 < t5.length - 1; ) {
              if (t5[n3 - 1][0] == r2 && t5[n3 + 1][0] == r2) {
                var i3 = t5[n3 - 1][1], s3 = t5[n3][1], o3 = t5[n3 + 1][1], l2 = a(i3, s3);
                if (l2) {
                  var p2 = s3.substring(s3.length - l2);
                  i3 = i3.substring(0, i3.length - l2), s3 = p2 + s3.substring(0, s3.length - l2), o3 = p2 + o3;
                }
                for (var g4 = i3, m4 = s3, b4 = o3, y4 = e3(i3, s3) + e3(s3, o3); s3.charAt(0) === o3.charAt(0); ) {
                  i3 += s3.charAt(0), s3 = s3.substring(1) + o3.charAt(0), o3 = o3.substring(1);
                  var v3 = e3(i3, s3) + e3(s3, o3);
                  v3 >= y4 && (y4 = v3, g4 = i3, m4 = s3, b4 = o3);
                }
                t5[n3 - 1][1] != g4 && (g4 ? t5[n3 - 1][1] = g4 : (t5.splice(n3 - 1, 1), n3--), t5[n3][1] = m4, b4 ? t5[n3 + 1][1] = b4 : (t5.splice(n3 + 1, 1), n3--));
              }
              n3++;
            }
          })(t4), m3 = 1; m3 < t4.length; ) {
            if (t4[m3 - 1][0] == e2 && t4[m3][0] == n2) {
              var x2 = t4[m3 - 1][1], N2 = t4[m3][1], E2 = l(x2, N2), w2 = l(N2, x2);
              E2 >= w2 ? (E2 >= x2.length / 2 || E2 >= N2.length / 2) && (t4.splice(m3, 0, [r2, N2.substring(0, E2)]), t4[m3 - 1][1] = x2.substring(0, x2.length - E2), t4[m3 + 1][1] = N2.substring(E2), m3++) : (w2 >= x2.length / 2 || w2 >= N2.length / 2) && (t4.splice(m3, 0, [r2, x2.substring(0, w2)]), t4[m3 - 1][0] = n2, t4[m3 - 1][1] = N2.substring(0, N2.length - w2), t4[m3 + 1][0] = e2, t4[m3 + 1][1] = x2.substring(w2), m3++), m3++;
            }
            m3++;
          }
        })(w), w;
      }
      function s(t3, e3, n3, r3) {
        var s2 = t3.substring(0, n3), o2 = e3.substring(0, r3), l2 = t3.substring(n3), a2 = e3.substring(r3), c2 = i(s2, o2), u2 = i(l2, a2);
        return c2.concat(u2);
      }
      function o(t3, e3) {
        if (!t3 || !e3 || t3.charAt(0) !== e3.charAt(0)) return 0;
        for (var n3 = 0, r3 = Math.min(t3.length, e3.length), i2 = r3, s2 = 0; n3 < i2; ) t3.substring(s2, i2) == e3.substring(s2, i2) ? s2 = n3 = i2 : r3 = i2, i2 = Math.floor((r3 - n3) / 2 + n3);
        return g(t3.charCodeAt(i2 - 1)) && i2--, i2;
      }
      function l(t3, e3) {
        var n3 = t3.length, r3 = e3.length;
        if (0 == n3 || 0 == r3) return 0;
        n3 > r3 ? t3 = t3.substring(n3 - r3) : n3 < r3 && (e3 = e3.substring(0, n3));
        var i2 = Math.min(n3, r3);
        if (t3 == e3) return i2;
        for (var s2 = 0, o2 = 1; ; ) {
          var l2 = t3.substring(i2 - o2), a2 = e3.indexOf(l2);
          if (-1 == a2) return s2;
          o2 += a2, 0 != a2 && t3.substring(i2 - o2) != e3.substring(0, o2) || (s2 = o2, o2++);
        }
      }
      function a(t3, e3) {
        if (!t3 || !e3 || t3.slice(-1) !== e3.slice(-1)) return 0;
        for (var n3 = 0, r3 = Math.min(t3.length, e3.length), i2 = r3, s2 = 0; n3 < i2; ) t3.substring(t3.length - i2, t3.length - s2) == e3.substring(e3.length - i2, e3.length - s2) ? s2 = n3 = i2 : r3 = i2, i2 = Math.floor((r3 - n3) / 2 + n3);
        return m(t3.charCodeAt(t3.length - i2)) && i2--, i2;
      }
      var c = /[^a-zA-Z0-9]/, u = /\s/, h = /[\r\n]/, d = /\n\r?\n$/, f = /^\r?\n\r?\n/;
      function p(t3, i2) {
        t3.push([r2, ""]);
        for (var s2, l2 = 0, c2 = 0, u2 = 0, h2 = "", d2 = ""; l2 < t3.length; ) if (l2 < t3.length - 1 && !t3[l2][1]) t3.splice(l2, 1);
        else switch (t3[l2][0]) {
          case n2:
            u2++, d2 += t3[l2][1], l2++;
            break;
          case e2:
            c2++, h2 += t3[l2][1], l2++;
            break;
          case r2:
            var f2 = l2 - u2 - c2 - 1;
            if (i2) {
              if (f2 >= 0 && y(t3[f2][1])) {
                var g2 = t3[f2][1].slice(-1);
                if (t3[f2][1] = t3[f2][1].slice(0, -1), h2 = g2 + h2, d2 = g2 + d2, !t3[f2][1]) {
                  t3.splice(f2, 1), l2--;
                  var m2 = f2 - 1;
                  t3[m2] && t3[m2][0] === n2 && (u2++, d2 = t3[m2][1] + d2, m2--), t3[m2] && t3[m2][0] === e2 && (c2++, h2 = t3[m2][1] + h2, m2--), f2 = m2;
                }
              }
              b(t3[l2][1]) && (g2 = t3[l2][1].charAt(0), t3[l2][1] = t3[l2][1].slice(1), h2 += g2, d2 += g2);
            }
            if (l2 < t3.length - 1 && !t3[l2][1]) {
              t3.splice(l2, 1);
              break;
            }
            if (h2.length > 0 || d2.length > 0) {
              h2.length > 0 && d2.length > 0 && (0 !== (s2 = o(d2, h2)) && (f2 >= 0 ? t3[f2][1] += d2.substring(0, s2) : (t3.splice(0, 0, [r2, d2.substring(0, s2)]), l2++), d2 = d2.substring(s2), h2 = h2.substring(s2)), 0 !== (s2 = a(d2, h2)) && (t3[l2][1] = d2.substring(d2.length - s2) + t3[l2][1], d2 = d2.substring(0, d2.length - s2), h2 = h2.substring(0, h2.length - s2)));
              var v2 = u2 + c2;
              0 === h2.length && 0 === d2.length ? (t3.splice(l2 - v2, v2), l2 -= v2) : 0 === h2.length ? (t3.splice(l2 - v2, v2, [n2, d2]), l2 = l2 - v2 + 1) : 0 === d2.length ? (t3.splice(l2 - v2, v2, [e2, h2]), l2 = l2 - v2 + 1) : (t3.splice(l2 - v2, v2, [e2, h2], [n2, d2]), l2 = l2 - v2 + 2);
            }
            0 !== l2 && t3[l2 - 1][0] === r2 ? (t3[l2 - 1][1] += t3[l2][1], t3.splice(l2, 1)) : l2++, u2 = 0, c2 = 0, h2 = "", d2 = "";
        }
        "" === t3[t3.length - 1][1] && t3.pop();
        var A2 = false;
        for (l2 = 1; l2 < t3.length - 1; ) t3[l2 - 1][0] === r2 && t3[l2 + 1][0] === r2 && (t3[l2][1].substring(t3[l2][1].length - t3[l2 - 1][1].length) === t3[l2 - 1][1] ? (t3[l2][1] = t3[l2 - 1][1] + t3[l2][1].substring(0, t3[l2][1].length - t3[l2 - 1][1].length), t3[l2 + 1][1] = t3[l2 - 1][1] + t3[l2 + 1][1], t3.splice(l2 - 1, 1), A2 = true) : t3[l2][1].substring(0, t3[l2 + 1][1].length) == t3[l2 + 1][1] && (t3[l2 - 1][1] += t3[l2 + 1][1], t3[l2][1] = t3[l2][1].substring(t3[l2 + 1][1].length) + t3[l2 + 1][1], t3.splice(l2 + 1, 1), A2 = true)), l2++;
        A2 && p(t3, i2);
      }
      function g(t3) {
        return t3 >= 55296 && t3 <= 56319;
      }
      function m(t3) {
        return t3 >= 56320 && t3 <= 57343;
      }
      function b(t3) {
        return m(t3.charCodeAt(0));
      }
      function y(t3) {
        return g(t3.charCodeAt(t3.length - 1));
      }
      function v(t3, i2, s2, o2) {
        return y(t3) || b(o2) ? null : (function(t4) {
          for (var e3 = [], n3 = 0; n3 < t4.length; n3++) t4[n3][1].length > 0 && e3.push(t4[n3]);
          return e3;
        })([[r2, t3], [e2, i2], [n2, s2], [r2, o2]]);
      }
      function A(t3, e3, n3, r3) {
        return i(t3, e3, n3, r3, true);
      }
      A.INSERT = n2, A.DELETE = e2, A.EQUAL = r2, t2.exports = A;
    }, 9629: function(t2, e2, n2) {
      t2 = n2.nmd(t2);
      var r2 = "__lodash_hash_undefined__", i = 9007199254740991, s = "[object Arguments]", o = "[object Boolean]", l = "[object Date]", a = "[object Function]", c = "[object GeneratorFunction]", u = "[object Map]", h = "[object Number]", d = "[object Object]", f = "[object Promise]", p = "[object RegExp]", g = "[object Set]", m = "[object String]", b = "[object Symbol]", y = "[object WeakMap]", v = "[object ArrayBuffer]", A = "[object DataView]", x = "[object Float32Array]", N = "[object Float64Array]", E = "[object Int8Array]", w = "[object Int16Array]", q = "[object Int32Array]", k = "[object Uint8Array]", _ = "[object Uint8ClampedArray]", L = "[object Uint16Array]", S = "[object Uint32Array]", O = /\w*$/, T = /^\[object .+?Constructor\]$/, j = /^(?:0|[1-9]\d*)$/, C = {};
      C[s] = C["[object Array]"] = C[v] = C[A] = C[o] = C[l] = C[x] = C[N] = C[E] = C[w] = C[q] = C[u] = C[h] = C[d] = C[p] = C[g] = C[m] = C[b] = C[k] = C[_] = C[L] = C[S] = true, C["[object Error]"] = C[a] = C[y] = false;
      var R = "object" == typeof n2.g && n2.g && n2.g.Object === Object && n2.g, I = "object" == typeof self && self && self.Object === Object && self, B = R || I || Function("return this")(), M = e2 && !e2.nodeType && e2, U = M && t2 && !t2.nodeType && t2, D = U && U.exports === M;
      function P(t3, e3) {
        return t3.set(e3[0], e3[1]), t3;
      }
      function z(t3, e3) {
        return t3.add(e3), t3;
      }
      function F(t3, e3, n3, r3) {
        var i2 = -1, s2 = t3 ? t3.length : 0;
        for (r3 && s2 && (n3 = t3[++i2]); ++i2 < s2; ) n3 = e3(n3, t3[i2], i2, t3);
        return n3;
      }
      function H(t3) {
        var e3 = false;
        if (null != t3 && "function" != typeof t3.toString) try {
          e3 = !!(t3 + "");
        } catch (t4) {
        }
        return e3;
      }
      function $(t3) {
        var e3 = -1, n3 = Array(t3.size);
        return t3.forEach((function(t4, r3) {
          n3[++e3] = [r3, t4];
        })), n3;
      }
      function V(t3, e3) {
        return function(n3) {
          return t3(e3(n3));
        };
      }
      function K(t3) {
        var e3 = -1, n3 = Array(t3.size);
        return t3.forEach((function(t4) {
          n3[++e3] = t4;
        })), n3;
      }
      var W, Z = Array.prototype, G = Function.prototype, X = Object.prototype, Q = B["__core-js_shared__"], J = (W = /[^.]+$/.exec(Q && Q.keys && Q.keys.IE_PROTO || "")) ? "Symbol(src)_1." + W : "", Y = G.toString, tt = X.hasOwnProperty, et = X.toString, nt = RegExp("^" + Y.call(tt).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), rt = D ? B.Buffer : void 0, it = B.Symbol, st = B.Uint8Array, ot = V(Object.getPrototypeOf, Object), lt = Object.create, at = X.propertyIsEnumerable, ct = Z.splice, ut = Object.getOwnPropertySymbols, ht = rt ? rt.isBuffer : void 0, dt = V(Object.keys, Object), ft = Bt(B, "DataView"), pt = Bt(B, "Map"), gt = Bt(B, "Promise"), mt = Bt(B, "Set"), bt = Bt(B, "WeakMap"), yt = Bt(Object, "create"), vt = zt(ft), At = zt(pt), xt = zt(gt), Nt = zt(mt), Et = zt(bt), wt = it ? it.prototype : void 0, qt = wt ? wt.valueOf : void 0;
      function kt(t3) {
        var e3 = -1, n3 = t3 ? t3.length : 0;
        for (this.clear(); ++e3 < n3; ) {
          var r3 = t3[e3];
          this.set(r3[0], r3[1]);
        }
      }
      function _t(t3) {
        var e3 = -1, n3 = t3 ? t3.length : 0;
        for (this.clear(); ++e3 < n3; ) {
          var r3 = t3[e3];
          this.set(r3[0], r3[1]);
        }
      }
      function Lt(t3) {
        var e3 = -1, n3 = t3 ? t3.length : 0;
        for (this.clear(); ++e3 < n3; ) {
          var r3 = t3[e3];
          this.set(r3[0], r3[1]);
        }
      }
      function St(t3) {
        this.__data__ = new _t(t3);
      }
      function Ot(t3, e3, n3) {
        var r3 = t3[e3];
        tt.call(t3, e3) && Ft(r3, n3) && (void 0 !== n3 || e3 in t3) || (t3[e3] = n3);
      }
      function Tt(t3, e3) {
        for (var n3 = t3.length; n3--; ) if (Ft(t3[n3][0], e3)) return n3;
        return -1;
      }
      function jt(t3, e3, n3, r3, i2, f2, y2) {
        var T2;
        if (r3 && (T2 = f2 ? r3(t3, i2, f2, y2) : r3(t3)), void 0 !== T2) return T2;
        if (!Wt(t3)) return t3;
        var j2 = Ht(t3);
        if (j2) {
          if (T2 = (function(t4) {
            var e4 = t4.length, n4 = t4.constructor(e4);
            return e4 && "string" == typeof t4[0] && tt.call(t4, "index") && (n4.index = t4.index, n4.input = t4.input), n4;
          })(t3), !e3) return (function(t4, e4) {
            var n4 = -1, r4 = t4.length;
            for (e4 || (e4 = Array(r4)); ++n4 < r4; ) e4[n4] = t4[n4];
            return e4;
          })(t3, T2);
        } else {
          var R2 = Ut(t3), I2 = R2 == a || R2 == c;
          if (Vt(t3)) return (function(t4, e4) {
            if (e4) return t4.slice();
            var n4 = new t4.constructor(t4.length);
            return t4.copy(n4), n4;
          })(t3, e3);
          if (R2 == d || R2 == s || I2 && !f2) {
            if (H(t3)) return f2 ? t3 : {};
            if (T2 = (function(t4) {
              return "function" != typeof t4.constructor || Pt(t4) ? {} : Wt(e4 = ot(t4)) ? lt(e4) : {};
              var e4;
            })(I2 ? {} : t3), !e3) return (function(t4, e4) {
              return Rt(t4, Mt(t4), e4);
            })(t3, (function(t4, e4) {
              return t4 && Rt(e4, Zt(e4), t4);
            })(T2, t3));
          } else {
            if (!C[R2]) return f2 ? t3 : {};
            T2 = (function(t4, e4, n4, r4) {
              var i3, s2 = t4.constructor;
              switch (e4) {
                case v:
                  return Ct(t4);
                case o:
                case l:
                  return new s2(+t4);
                case A:
                  return (function(t5, e5) {
                    var n5 = e5 ? Ct(t5.buffer) : t5.buffer;
                    return new t5.constructor(n5, t5.byteOffset, t5.byteLength);
                  })(t4, r4);
                case x:
                case N:
                case E:
                case w:
                case q:
                case k:
                case _:
                case L:
                case S:
                  return (function(t5, e5) {
                    var n5 = e5 ? Ct(t5.buffer) : t5.buffer;
                    return new t5.constructor(n5, t5.byteOffset, t5.length);
                  })(t4, r4);
                case u:
                  return (function(t5, e5, n5) {
                    return F(e5 ? n5($(t5), true) : $(t5), P, new t5.constructor());
                  })(t4, r4, n4);
                case h:
                case m:
                  return new s2(t4);
                case p:
                  return (function(t5) {
                    var e5 = new t5.constructor(t5.source, O.exec(t5));
                    return e5.lastIndex = t5.lastIndex, e5;
                  })(t4);
                case g:
                  return (function(t5, e5, n5) {
                    return F(e5 ? n5(K(t5), true) : K(t5), z, new t5.constructor());
                  })(t4, r4, n4);
                case b:
                  return i3 = t4, qt ? Object(qt.call(i3)) : {};
              }
            })(t3, R2, jt, e3);
          }
        }
        y2 || (y2 = new St());
        var B2 = y2.get(t3);
        if (B2) return B2;
        if (y2.set(t3, T2), !j2) var M2 = n3 ? (function(t4) {
          return (function(t5, e4, n4) {
            var r4 = e4(t5);
            return Ht(t5) ? r4 : (function(t6, e5) {
              for (var n5 = -1, r5 = e5.length, i3 = t6.length; ++n5 < r5; ) t6[i3 + n5] = e5[n5];
              return t6;
            })(r4, n4(t5));
          })(t4, Zt, Mt);
        })(t3) : Zt(t3);
        return (function(t4, e4) {
          for (var n4 = -1, r4 = t4 ? t4.length : 0; ++n4 < r4 && false !== e4(t4[n4], n4); ) ;
        })(M2 || t3, (function(i3, s2) {
          M2 && (i3 = t3[s2 = i3]), Ot(T2, s2, jt(i3, e3, n3, r3, s2, t3, y2));
        })), T2;
      }
      function Ct(t3) {
        var e3 = new t3.constructor(t3.byteLength);
        return new st(e3).set(new st(t3)), e3;
      }
      function Rt(t3, e3, n3, r3) {
        n3 || (n3 = {});
        for (var i2 = -1, s2 = e3.length; ++i2 < s2; ) {
          var o2 = e3[i2], l2 = r3 ? r3(n3[o2], t3[o2], o2, n3, t3) : void 0;
          Ot(n3, o2, void 0 === l2 ? t3[o2] : l2);
        }
        return n3;
      }
      function It(t3, e3) {
        var n3, r3, i2 = t3.__data__;
        return ("string" == (r3 = typeof (n3 = e3)) || "number" == r3 || "symbol" == r3 || "boolean" == r3 ? "__proto__" !== n3 : null === n3) ? i2["string" == typeof e3 ? "string" : "hash"] : i2.map;
      }
      function Bt(t3, e3) {
        var n3 = (function(t4, e4) {
          return null == t4 ? void 0 : t4[e4];
        })(t3, e3);
        return (function(t4) {
          return !(!Wt(t4) || (e4 = t4, J && J in e4)) && (Kt(t4) || H(t4) ? nt : T).test(zt(t4));
          var e4;
        })(n3) ? n3 : void 0;
      }
      kt.prototype.clear = function() {
        this.__data__ = yt ? yt(null) : {};
      }, kt.prototype.delete = function(t3) {
        return this.has(t3) && delete this.__data__[t3];
      }, kt.prototype.get = function(t3) {
        var e3 = this.__data__;
        if (yt) {
          var n3 = e3[t3];
          return n3 === r2 ? void 0 : n3;
        }
        return tt.call(e3, t3) ? e3[t3] : void 0;
      }, kt.prototype.has = function(t3) {
        var e3 = this.__data__;
        return yt ? void 0 !== e3[t3] : tt.call(e3, t3);
      }, kt.prototype.set = function(t3, e3) {
        return this.__data__[t3] = yt && void 0 === e3 ? r2 : e3, this;
      }, _t.prototype.clear = function() {
        this.__data__ = [];
      }, _t.prototype.delete = function(t3) {
        var e3 = this.__data__, n3 = Tt(e3, t3);
        return !(n3 < 0 || (n3 == e3.length - 1 ? e3.pop() : ct.call(e3, n3, 1), 0));
      }, _t.prototype.get = function(t3) {
        var e3 = this.__data__, n3 = Tt(e3, t3);
        return n3 < 0 ? void 0 : e3[n3][1];
      }, _t.prototype.has = function(t3) {
        return Tt(this.__data__, t3) > -1;
      }, _t.prototype.set = function(t3, e3) {
        var n3 = this.__data__, r3 = Tt(n3, t3);
        return r3 < 0 ? n3.push([t3, e3]) : n3[r3][1] = e3, this;
      }, Lt.prototype.clear = function() {
        this.__data__ = { hash: new kt(), map: new (pt || _t)(), string: new kt() };
      }, Lt.prototype.delete = function(t3) {
        return It(this, t3).delete(t3);
      }, Lt.prototype.get = function(t3) {
        return It(this, t3).get(t3);
      }, Lt.prototype.has = function(t3) {
        return It(this, t3).has(t3);
      }, Lt.prototype.set = function(t3, e3) {
        return It(this, t3).set(t3, e3), this;
      }, St.prototype.clear = function() {
        this.__data__ = new _t();
      }, St.prototype.delete = function(t3) {
        return this.__data__.delete(t3);
      }, St.prototype.get = function(t3) {
        return this.__data__.get(t3);
      }, St.prototype.has = function(t3) {
        return this.__data__.has(t3);
      }, St.prototype.set = function(t3, e3) {
        var n3 = this.__data__;
        if (n3 instanceof _t) {
          var r3 = n3.__data__;
          if (!pt || r3.length < 199) return r3.push([t3, e3]), this;
          n3 = this.__data__ = new Lt(r3);
        }
        return n3.set(t3, e3), this;
      };
      var Mt = ut ? V(ut, Object) : function() {
        return [];
      }, Ut = function(t3) {
        return et.call(t3);
      };
      function Dt(t3, e3) {
        return !!(e3 = null == e3 ? i : e3) && ("number" == typeof t3 || j.test(t3)) && t3 > -1 && t3 % 1 == 0 && t3 < e3;
      }
      function Pt(t3) {
        var e3 = t3 && t3.constructor;
        return t3 === ("function" == typeof e3 && e3.prototype || X);
      }
      function zt(t3) {
        if (null != t3) {
          try {
            return Y.call(t3);
          } catch (t4) {
          }
          try {
            return t3 + "";
          } catch (t4) {
          }
        }
        return "";
      }
      function Ft(t3, e3) {
        return t3 === e3 || t3 != t3 && e3 != e3;
      }
      (ft && Ut(new ft(new ArrayBuffer(1))) != A || pt && Ut(new pt()) != u || gt && Ut(gt.resolve()) != f || mt && Ut(new mt()) != g || bt && Ut(new bt()) != y) && (Ut = function(t3) {
        var e3 = et.call(t3), n3 = e3 == d ? t3.constructor : void 0, r3 = n3 ? zt(n3) : void 0;
        if (r3) switch (r3) {
          case vt:
            return A;
          case At:
            return u;
          case xt:
            return f;
          case Nt:
            return g;
          case Et:
            return y;
        }
        return e3;
      });
      var Ht = Array.isArray;
      function $t(t3) {
        return null != t3 && (function(t4) {
          return "number" == typeof t4 && t4 > -1 && t4 % 1 == 0 && t4 <= i;
        })(t3.length) && !Kt(t3);
      }
      var Vt = ht || function() {
        return false;
      };
      function Kt(t3) {
        var e3 = Wt(t3) ? et.call(t3) : "";
        return e3 == a || e3 == c;
      }
      function Wt(t3) {
        var e3 = typeof t3;
        return !!t3 && ("object" == e3 || "function" == e3);
      }
      function Zt(t3) {
        return $t(t3) ? (function(t4, e3) {
          var n3 = Ht(t4) || (function(t5) {
            return (function(t6) {
              return /* @__PURE__ */ (function(t7) {
                return !!t7 && "object" == typeof t7;
              })(t6) && $t(t6);
            })(t5) && tt.call(t5, "callee") && (!at.call(t5, "callee") || et.call(t5) == s);
          })(t4) ? (function(t5, e4) {
            for (var n4 = -1, r4 = Array(t5); ++n4 < t5; ) r4[n4] = e4(n4);
            return r4;
          })(t4.length, String) : [], r3 = n3.length, i2 = !!r3;
          for (var o2 in t4) !e3 && !tt.call(t4, o2) || i2 && ("length" == o2 || Dt(o2, r3)) || n3.push(o2);
          return n3;
        })(t3) : (function(t4) {
          if (!Pt(t4)) return dt(t4);
          var e3 = [];
          for (var n3 in Object(t4)) tt.call(t4, n3) && "constructor" != n3 && e3.push(n3);
          return e3;
        })(t3);
      }
      t2.exports = function(t3) {
        return jt(t3, true, true);
      };
    }, 4162: function(t2, e2, n2) {
      t2 = n2.nmd(t2);
      var r2 = "__lodash_hash_undefined__", i = 1, s = 2, o = 9007199254740991, l = "[object Arguments]", a = "[object Array]", c = "[object AsyncFunction]", u = "[object Boolean]", h = "[object Date]", d = "[object Error]", f = "[object Function]", p = "[object GeneratorFunction]", g = "[object Map]", m = "[object Number]", b = "[object Null]", y = "[object Object]", v = "[object Promise]", A = "[object Proxy]", x = "[object RegExp]", N = "[object Set]", E = "[object String]", w = "[object Undefined]", q = "[object WeakMap]", k = "[object ArrayBuffer]", _ = "[object DataView]", L = /^\[object .+?Constructor\]$/, S = /^(?:0|[1-9]\d*)$/, O = {};
      O["[object Float32Array]"] = O["[object Float64Array]"] = O["[object Int8Array]"] = O["[object Int16Array]"] = O["[object Int32Array]"] = O["[object Uint8Array]"] = O["[object Uint8ClampedArray]"] = O["[object Uint16Array]"] = O["[object Uint32Array]"] = true, O[l] = O[a] = O[k] = O[u] = O[_] = O[h] = O[d] = O[f] = O[g] = O[m] = O[y] = O[x] = O[N] = O[E] = O[q] = false;
      var T = "object" == typeof n2.g && n2.g && n2.g.Object === Object && n2.g, j = "object" == typeof self && self && self.Object === Object && self, C = T || j || Function("return this")(), R = e2 && !e2.nodeType && e2, I = R && t2 && !t2.nodeType && t2, B = I && I.exports === R, M = B && T.process, U = (function() {
        try {
          return M && M.binding && M.binding("util");
        } catch (t3) {
        }
      })(), D = U && U.isTypedArray;
      function P(t3, e3) {
        for (var n3 = -1, r3 = null == t3 ? 0 : t3.length; ++n3 < r3; ) if (e3(t3[n3], n3, t3)) return true;
        return false;
      }
      function z(t3) {
        var e3 = -1, n3 = Array(t3.size);
        return t3.forEach((function(t4, r3) {
          n3[++e3] = [r3, t4];
        })), n3;
      }
      function F(t3) {
        var e3 = -1, n3 = Array(t3.size);
        return t3.forEach((function(t4) {
          n3[++e3] = t4;
        })), n3;
      }
      var H, $, V, K = Array.prototype, W = Function.prototype, Z = Object.prototype, G = C["__core-js_shared__"], X = W.toString, Q = Z.hasOwnProperty, J = (H = /[^.]+$/.exec(G && G.keys && G.keys.IE_PROTO || "")) ? "Symbol(src)_1." + H : "", Y = Z.toString, tt = RegExp("^" + X.call(Q).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), et = B ? C.Buffer : void 0, nt = C.Symbol, rt = C.Uint8Array, it = Z.propertyIsEnumerable, st = K.splice, ot = nt ? nt.toStringTag : void 0, lt = Object.getOwnPropertySymbols, at = et ? et.isBuffer : void 0, ct = ($ = Object.keys, V = Object, function(t3) {
        return $(V(t3));
      }), ut = It(C, "DataView"), ht = It(C, "Map"), dt = It(C, "Promise"), ft = It(C, "Set"), pt = It(C, "WeakMap"), gt = It(Object, "create"), mt = Dt(ut), bt = Dt(ht), yt = Dt(dt), vt = Dt(ft), At = Dt(pt), xt = nt ? nt.prototype : void 0, Nt = xt ? xt.valueOf : void 0;
      function Et(t3) {
        var e3 = -1, n3 = null == t3 ? 0 : t3.length;
        for (this.clear(); ++e3 < n3; ) {
          var r3 = t3[e3];
          this.set(r3[0], r3[1]);
        }
      }
      function wt(t3) {
        var e3 = -1, n3 = null == t3 ? 0 : t3.length;
        for (this.clear(); ++e3 < n3; ) {
          var r3 = t3[e3];
          this.set(r3[0], r3[1]);
        }
      }
      function qt(t3) {
        var e3 = -1, n3 = null == t3 ? 0 : t3.length;
        for (this.clear(); ++e3 < n3; ) {
          var r3 = t3[e3];
          this.set(r3[0], r3[1]);
        }
      }
      function kt(t3) {
        var e3 = -1, n3 = null == t3 ? 0 : t3.length;
        for (this.__data__ = new qt(); ++e3 < n3; ) this.add(t3[e3]);
      }
      function _t(t3) {
        var e3 = this.__data__ = new wt(t3);
        this.size = e3.size;
      }
      function Lt(t3, e3) {
        for (var n3 = t3.length; n3--; ) if (Pt(t3[n3][0], e3)) return n3;
        return -1;
      }
      function St(t3) {
        return null == t3 ? void 0 === t3 ? w : b : ot && ot in Object(t3) ? (function(t4) {
          var e3 = Q.call(t4, ot), n3 = t4[ot];
          try {
            t4[ot] = void 0;
            var r3 = true;
          } catch (t5) {
          }
          var i2 = Y.call(t4);
          return r3 && (e3 ? t4[ot] = n3 : delete t4[ot]), i2;
        })(t3) : (function(t4) {
          return Y.call(t4);
        })(t3);
      }
      function Ot(t3) {
        return Wt(t3) && St(t3) == l;
      }
      function Tt(t3, e3, n3, r3, o2) {
        return t3 === e3 || (null == t3 || null == e3 || !Wt(t3) && !Wt(e3) ? t3 != t3 && e3 != e3 : (function(t4, e4, n4, r4, o3, c2) {
          var f2 = Ft(t4), p2 = Ft(e4), b2 = f2 ? a : Mt(t4), v2 = p2 ? a : Mt(e4), A2 = (b2 = b2 == l ? y : b2) == y, w2 = (v2 = v2 == l ? y : v2) == y, q2 = b2 == v2;
          if (q2 && Ht(t4)) {
            if (!Ht(e4)) return false;
            f2 = true, A2 = false;
          }
          if (q2 && !A2) return c2 || (c2 = new _t()), f2 || Zt(t4) ? jt(t4, e4, n4, r4, o3, c2) : (function(t5, e5, n5, r5, o4, l2, a2) {
            switch (n5) {
              case _:
                if (t5.byteLength != e5.byteLength || t5.byteOffset != e5.byteOffset) return false;
                t5 = t5.buffer, e5 = e5.buffer;
              case k:
                return !(t5.byteLength != e5.byteLength || !l2(new rt(t5), new rt(e5)));
              case u:
              case h:
              case m:
                return Pt(+t5, +e5);
              case d:
                return t5.name == e5.name && t5.message == e5.message;
              case x:
              case E:
                return t5 == e5 + "";
              case g:
                var c3 = z;
              case N:
                var f3 = r5 & i;
                if (c3 || (c3 = F), t5.size != e5.size && !f3) return false;
                var p3 = a2.get(t5);
                if (p3) return p3 == e5;
                r5 |= s, a2.set(t5, e5);
                var b3 = jt(c3(t5), c3(e5), r5, o4, l2, a2);
                return a2.delete(t5), b3;
              case "[object Symbol]":
                if (Nt) return Nt.call(t5) == Nt.call(e5);
            }
            return false;
          })(t4, e4, b2, n4, r4, o3, c2);
          if (!(n4 & i)) {
            var L2 = A2 && Q.call(t4, "__wrapped__"), S2 = w2 && Q.call(e4, "__wrapped__");
            if (L2 || S2) {
              var O2 = L2 ? t4.value() : t4, T2 = S2 ? e4.value() : e4;
              return c2 || (c2 = new _t()), o3(O2, T2, n4, r4, c2);
            }
          }
          return !!q2 && (c2 || (c2 = new _t()), (function(t5, e5, n5, r5, s2, o4) {
            var l2 = n5 & i, a2 = Ct(t5), c3 = a2.length;
            if (c3 != Ct(e5).length && !l2) return false;
            for (var u2 = c3; u2--; ) {
              var h2 = a2[u2];
              if (!(l2 ? h2 in e5 : Q.call(e5, h2))) return false;
            }
            var d2 = o4.get(t5);
            if (d2 && o4.get(e5)) return d2 == e5;
            var f3 = true;
            o4.set(t5, e5), o4.set(e5, t5);
            for (var p3 = l2; ++u2 < c3; ) {
              var g2 = t5[h2 = a2[u2]], m2 = e5[h2];
              if (r5) var b3 = l2 ? r5(m2, g2, h2, e5, t5, o4) : r5(g2, m2, h2, t5, e5, o4);
              if (!(void 0 === b3 ? g2 === m2 || s2(g2, m2, n5, r5, o4) : b3)) {
                f3 = false;
                break;
              }
              p3 || (p3 = "constructor" == h2);
            }
            if (f3 && !p3) {
              var y2 = t5.constructor, v3 = e5.constructor;
              y2 == v3 || !("constructor" in t5) || !("constructor" in e5) || "function" == typeof y2 && y2 instanceof y2 && "function" == typeof v3 && v3 instanceof v3 || (f3 = false);
            }
            return o4.delete(t5), o4.delete(e5), f3;
          })(t4, e4, n4, r4, o3, c2));
        })(t3, e3, n3, r3, Tt, o2));
      }
      function jt(t3, e3, n3, r3, o2, l2) {
        var a2 = n3 & i, c2 = t3.length, u2 = e3.length;
        if (c2 != u2 && !(a2 && u2 > c2)) return false;
        var h2 = l2.get(t3);
        if (h2 && l2.get(e3)) return h2 == e3;
        var d2 = -1, f2 = true, p2 = n3 & s ? new kt() : void 0;
        for (l2.set(t3, e3), l2.set(e3, t3); ++d2 < c2; ) {
          var g2 = t3[d2], m2 = e3[d2];
          if (r3) var b2 = a2 ? r3(m2, g2, d2, e3, t3, l2) : r3(g2, m2, d2, t3, e3, l2);
          if (void 0 !== b2) {
            if (b2) continue;
            f2 = false;
            break;
          }
          if (p2) {
            if (!P(e3, (function(t4, e4) {
              if (i2 = e4, !p2.has(i2) && (g2 === t4 || o2(g2, t4, n3, r3, l2))) return p2.push(e4);
              var i2;
            }))) {
              f2 = false;
              break;
            }
          } else if (g2 !== m2 && !o2(g2, m2, n3, r3, l2)) {
            f2 = false;
            break;
          }
        }
        return l2.delete(t3), l2.delete(e3), f2;
      }
      function Ct(t3) {
        return (function(t4, e3, n3) {
          var r3 = e3(t4);
          return Ft(t4) ? r3 : (function(t5, e4) {
            for (var n4 = -1, r4 = e4.length, i2 = t5.length; ++n4 < r4; ) t5[i2 + n4] = e4[n4];
            return t5;
          })(r3, n3(t4));
        })(t3, Gt, Bt);
      }
      function Rt(t3, e3) {
        var n3, r3, i2 = t3.__data__;
        return ("string" == (r3 = typeof (n3 = e3)) || "number" == r3 || "symbol" == r3 || "boolean" == r3 ? "__proto__" !== n3 : null === n3) ? i2["string" == typeof e3 ? "string" : "hash"] : i2.map;
      }
      function It(t3, e3) {
        var n3 = (function(t4, e4) {
          return null == t4 ? void 0 : t4[e4];
        })(t3, e3);
        return (function(t4) {
          return !(!Kt(t4) || (function(t5) {
            return !!J && J in t5;
          })(t4)) && ($t(t4) ? tt : L).test(Dt(t4));
        })(n3) ? n3 : void 0;
      }
      Et.prototype.clear = function() {
        this.__data__ = gt ? gt(null) : {}, this.size = 0;
      }, Et.prototype.delete = function(t3) {
        var e3 = this.has(t3) && delete this.__data__[t3];
        return this.size -= e3 ? 1 : 0, e3;
      }, Et.prototype.get = function(t3) {
        var e3 = this.__data__;
        if (gt) {
          var n3 = e3[t3];
          return n3 === r2 ? void 0 : n3;
        }
        return Q.call(e3, t3) ? e3[t3] : void 0;
      }, Et.prototype.has = function(t3) {
        var e3 = this.__data__;
        return gt ? void 0 !== e3[t3] : Q.call(e3, t3);
      }, Et.prototype.set = function(t3, e3) {
        var n3 = this.__data__;
        return this.size += this.has(t3) ? 0 : 1, n3[t3] = gt && void 0 === e3 ? r2 : e3, this;
      }, wt.prototype.clear = function() {
        this.__data__ = [], this.size = 0;
      }, wt.prototype.delete = function(t3) {
        var e3 = this.__data__, n3 = Lt(e3, t3);
        return !(n3 < 0 || (n3 == e3.length - 1 ? e3.pop() : st.call(e3, n3, 1), --this.size, 0));
      }, wt.prototype.get = function(t3) {
        var e3 = this.__data__, n3 = Lt(e3, t3);
        return n3 < 0 ? void 0 : e3[n3][1];
      }, wt.prototype.has = function(t3) {
        return Lt(this.__data__, t3) > -1;
      }, wt.prototype.set = function(t3, e3) {
        var n3 = this.__data__, r3 = Lt(n3, t3);
        return r3 < 0 ? (++this.size, n3.push([t3, e3])) : n3[r3][1] = e3, this;
      }, qt.prototype.clear = function() {
        this.size = 0, this.__data__ = { hash: new Et(), map: new (ht || wt)(), string: new Et() };
      }, qt.prototype.delete = function(t3) {
        var e3 = Rt(this, t3).delete(t3);
        return this.size -= e3 ? 1 : 0, e3;
      }, qt.prototype.get = function(t3) {
        return Rt(this, t3).get(t3);
      }, qt.prototype.has = function(t3) {
        return Rt(this, t3).has(t3);
      }, qt.prototype.set = function(t3, e3) {
        var n3 = Rt(this, t3), r3 = n3.size;
        return n3.set(t3, e3), this.size += n3.size == r3 ? 0 : 1, this;
      }, kt.prototype.add = kt.prototype.push = function(t3) {
        return this.__data__.set(t3, r2), this;
      }, kt.prototype.has = function(t3) {
        return this.__data__.has(t3);
      }, _t.prototype.clear = function() {
        this.__data__ = new wt(), this.size = 0;
      }, _t.prototype.delete = function(t3) {
        var e3 = this.__data__, n3 = e3.delete(t3);
        return this.size = e3.size, n3;
      }, _t.prototype.get = function(t3) {
        return this.__data__.get(t3);
      }, _t.prototype.has = function(t3) {
        return this.__data__.has(t3);
      }, _t.prototype.set = function(t3, e3) {
        var n3 = this.__data__;
        if (n3 instanceof wt) {
          var r3 = n3.__data__;
          if (!ht || r3.length < 199) return r3.push([t3, e3]), this.size = ++n3.size, this;
          n3 = this.__data__ = new qt(r3);
        }
        return n3.set(t3, e3), this.size = n3.size, this;
      };
      var Bt = lt ? function(t3) {
        return null == t3 ? [] : (t3 = Object(t3), (function(e3, n3) {
          for (var r3 = -1, i2 = null == e3 ? 0 : e3.length, s2 = 0, o2 = []; ++r3 < i2; ) {
            var l2 = e3[r3];
            a2 = l2, it.call(t3, a2) && (o2[s2++] = l2);
          }
          var a2;
          return o2;
        })(lt(t3)));
      } : function() {
        return [];
      }, Mt = St;
      function Ut(t3, e3) {
        return !!(e3 = null == e3 ? o : e3) && ("number" == typeof t3 || S.test(t3)) && t3 > -1 && t3 % 1 == 0 && t3 < e3;
      }
      function Dt(t3) {
        if (null != t3) {
          try {
            return X.call(t3);
          } catch (t4) {
          }
          try {
            return t3 + "";
          } catch (t4) {
          }
        }
        return "";
      }
      function Pt(t3, e3) {
        return t3 === e3 || t3 != t3 && e3 != e3;
      }
      (ut && Mt(new ut(new ArrayBuffer(1))) != _ || ht && Mt(new ht()) != g || dt && Mt(dt.resolve()) != v || ft && Mt(new ft()) != N || pt && Mt(new pt()) != q) && (Mt = function(t3) {
        var e3 = St(t3), n3 = e3 == y ? t3.constructor : void 0, r3 = n3 ? Dt(n3) : "";
        if (r3) switch (r3) {
          case mt:
            return _;
          case bt:
            return g;
          case yt:
            return v;
          case vt:
            return N;
          case At:
            return q;
        }
        return e3;
      });
      var zt = Ot(/* @__PURE__ */ (function() {
        return arguments;
      })()) ? Ot : function(t3) {
        return Wt(t3) && Q.call(t3, "callee") && !it.call(t3, "callee");
      }, Ft = Array.isArray, Ht = at || function() {
        return false;
      };
      function $t(t3) {
        if (!Kt(t3)) return false;
        var e3 = St(t3);
        return e3 == f || e3 == p || e3 == c || e3 == A;
      }
      function Vt(t3) {
        return "number" == typeof t3 && t3 > -1 && t3 % 1 == 0 && t3 <= o;
      }
      function Kt(t3) {
        var e3 = typeof t3;
        return null != t3 && ("object" == e3 || "function" == e3);
      }
      function Wt(t3) {
        return null != t3 && "object" == typeof t3;
      }
      var Zt = D ? /* @__PURE__ */ (function(t3) {
        return function(e3) {
          return t3(e3);
        };
      })(D) : function(t3) {
        return Wt(t3) && Vt(t3.length) && !!O[St(t3)];
      };
      function Gt(t3) {
        return null != (e3 = t3) && Vt(e3.length) && !$t(e3) ? (function(t4, e4) {
          var n3 = Ft(t4), r3 = !n3 && zt(t4), i2 = !n3 && !r3 && Ht(t4), s2 = !n3 && !r3 && !i2 && Zt(t4), o2 = n3 || r3 || i2 || s2, l2 = o2 ? (function(t5, e5) {
            for (var n4 = -1, r4 = Array(t5); ++n4 < t5; ) r4[n4] = e5(n4);
            return r4;
          })(t4.length, String) : [], a2 = l2.length;
          for (var c2 in t4) !e4 && !Q.call(t4, c2) || o2 && ("length" == c2 || i2 && ("offset" == c2 || "parent" == c2) || s2 && ("buffer" == c2 || "byteLength" == c2 || "byteOffset" == c2) || Ut(c2, a2)) || l2.push(c2);
          return l2;
        })(t3) : (function(t4) {
          if (n3 = (e4 = t4) && e4.constructor, e4 !== ("function" == typeof n3 && n3.prototype || Z)) return ct(t4);
          var e4, n3, r3 = [];
          for (var i2 in Object(t4)) Q.call(t4, i2) && "constructor" != i2 && r3.push(i2);
          return r3;
        })(t3);
        var e3;
      }
      t2.exports = function(t3, e3) {
        return Tt(t3, e3);
      };
    }, 1270: function(t2, e2, n2) {
      "use strict";
      Object.defineProperty(e2, "__esModule", { value: true });
      const r2 = n2(9629), i = n2(4162);
      var s;
      !(function(t3) {
        t3.compose = function(t4 = {}, e3 = {}, n3 = false) {
          "object" != typeof t4 && (t4 = {}), "object" != typeof e3 && (e3 = {});
          let i2 = r2(e3);
          n3 || (i2 = Object.keys(i2).reduce(((t5, e4) => (null != i2[e4] && (t5[e4] = i2[e4]), t5)), {}));
          for (const n4 in t4) void 0 !== t4[n4] && void 0 === e3[n4] && (i2[n4] = t4[n4]);
          return Object.keys(i2).length > 0 ? i2 : void 0;
        }, t3.diff = function(t4 = {}, e3 = {}) {
          "object" != typeof t4 && (t4 = {}), "object" != typeof e3 && (e3 = {});
          const n3 = Object.keys(t4).concat(Object.keys(e3)).reduce(((n4, r3) => (i(t4[r3], e3[r3]) || (n4[r3] = void 0 === e3[r3] ? null : e3[r3]), n4)), {});
          return Object.keys(n3).length > 0 ? n3 : void 0;
        }, t3.invert = function(t4 = {}, e3 = {}) {
          t4 = t4 || {};
          const n3 = Object.keys(e3).reduce(((n4, r3) => (e3[r3] !== t4[r3] && void 0 !== t4[r3] && (n4[r3] = e3[r3]), n4)), {});
          return Object.keys(t4).reduce(((n4, r3) => (t4[r3] !== e3[r3] && void 0 === e3[r3] && (n4[r3] = null), n4)), n3);
        }, t3.transform = function(t4, e3, n3 = false) {
          if ("object" != typeof t4) return e3;
          if ("object" != typeof e3) return;
          if (!n3) return e3;
          const r3 = Object.keys(e3).reduce(((n4, r4) => (void 0 === t4[r4] && (n4[r4] = e3[r4]), n4)), {});
          return Object.keys(r3).length > 0 ? r3 : void 0;
        };
      })(s || (s = {})), e2.default = s;
    }, 5232: function(t2, e2, n2) {
      "use strict";
      Object.defineProperty(e2, "__esModule", { value: true }), e2.AttributeMap = e2.OpIterator = e2.Op = void 0;
      const r2 = n2(5090), i = n2(9629), s = n2(4162), o = n2(1270);
      e2.AttributeMap = o.default;
      const l = n2(4123);
      e2.Op = l.default;
      const a = n2(7033);
      e2.OpIterator = a.default;
      const c = String.fromCharCode(0), u = (t3, e3) => {
        if ("object" != typeof t3 || null === t3) throw new Error("cannot retain a " + typeof t3);
        if ("object" != typeof e3 || null === e3) throw new Error("cannot retain a " + typeof e3);
        const n3 = Object.keys(t3)[0];
        if (!n3 || n3 !== Object.keys(e3)[0]) throw new Error(`embed types not matched: ${n3} != ${Object.keys(e3)[0]}`);
        return [n3, t3[n3], e3[n3]];
      };
      class h {
        constructor(t3) {
          Array.isArray(t3) ? this.ops = t3 : null != t3 && Array.isArray(t3.ops) ? this.ops = t3.ops : this.ops = [];
        }
        static registerEmbed(t3, e3) {
          this.handlers[t3] = e3;
        }
        static unregisterEmbed(t3) {
          delete this.handlers[t3];
        }
        static getHandler(t3) {
          const e3 = this.handlers[t3];
          if (!e3) throw new Error(`no handlers for embed type "${t3}"`);
          return e3;
        }
        insert(t3, e3) {
          const n3 = {};
          return "string" == typeof t3 && 0 === t3.length ? this : (n3.insert = t3, null != e3 && "object" == typeof e3 && Object.keys(e3).length > 0 && (n3.attributes = e3), this.push(n3));
        }
        delete(t3) {
          return t3 <= 0 ? this : this.push({ delete: t3 });
        }
        retain(t3, e3) {
          if ("number" == typeof t3 && t3 <= 0) return this;
          const n3 = { retain: t3 };
          return null != e3 && "object" == typeof e3 && Object.keys(e3).length > 0 && (n3.attributes = e3), this.push(n3);
        }
        push(t3) {
          let e3 = this.ops.length, n3 = this.ops[e3 - 1];
          if (t3 = i(t3), "object" == typeof n3) {
            if ("number" == typeof t3.delete && "number" == typeof n3.delete) return this.ops[e3 - 1] = { delete: n3.delete + t3.delete }, this;
            if ("number" == typeof n3.delete && null != t3.insert && (e3 -= 1, n3 = this.ops[e3 - 1], "object" != typeof n3)) return this.ops.unshift(t3), this;
            if (s(t3.attributes, n3.attributes)) {
              if ("string" == typeof t3.insert && "string" == typeof n3.insert) return this.ops[e3 - 1] = { insert: n3.insert + t3.insert }, "object" == typeof t3.attributes && (this.ops[e3 - 1].attributes = t3.attributes), this;
              if ("number" == typeof t3.retain && "number" == typeof n3.retain) return this.ops[e3 - 1] = { retain: n3.retain + t3.retain }, "object" == typeof t3.attributes && (this.ops[e3 - 1].attributes = t3.attributes), this;
            }
          }
          return e3 === this.ops.length ? this.ops.push(t3) : this.ops.splice(e3, 0, t3), this;
        }
        chop() {
          const t3 = this.ops[this.ops.length - 1];
          return t3 && "number" == typeof t3.retain && !t3.attributes && this.ops.pop(), this;
        }
        filter(t3) {
          return this.ops.filter(t3);
        }
        forEach(t3) {
          this.ops.forEach(t3);
        }
        map(t3) {
          return this.ops.map(t3);
        }
        partition(t3) {
          const e3 = [], n3 = [];
          return this.forEach(((r3) => {
            (t3(r3) ? e3 : n3).push(r3);
          })), [e3, n3];
        }
        reduce(t3, e3) {
          return this.ops.reduce(t3, e3);
        }
        changeLength() {
          return this.reduce(((t3, e3) => e3.insert ? t3 + l.default.length(e3) : e3.delete ? t3 - e3.delete : t3), 0);
        }
        length() {
          return this.reduce(((t3, e3) => t3 + l.default.length(e3)), 0);
        }
        slice(t3 = 0, e3 = 1 / 0) {
          const n3 = [], r3 = new a.default(this.ops);
          let i2 = 0;
          for (; i2 < e3 && r3.hasNext(); ) {
            let s2;
            i2 < t3 ? s2 = r3.next(t3 - i2) : (s2 = r3.next(e3 - i2), n3.push(s2)), i2 += l.default.length(s2);
          }
          return new h(n3);
        }
        compose(t3) {
          const e3 = new a.default(this.ops), n3 = new a.default(t3.ops), r3 = [], i2 = n3.peek();
          if (null != i2 && "number" == typeof i2.retain && null == i2.attributes) {
            let t4 = i2.retain;
            for (; "insert" === e3.peekType() && e3.peekLength() <= t4; ) t4 -= e3.peekLength(), r3.push(e3.next());
            i2.retain - t4 > 0 && n3.next(i2.retain - t4);
          }
          const l2 = new h(r3);
          for (; e3.hasNext() || n3.hasNext(); ) if ("insert" === n3.peekType()) l2.push(n3.next());
          else if ("delete" === e3.peekType()) l2.push(e3.next());
          else {
            const t4 = Math.min(e3.peekLength(), n3.peekLength()), r4 = e3.next(t4), i3 = n3.next(t4);
            if (i3.retain) {
              const a2 = {};
              if ("number" == typeof r4.retain) a2.retain = "number" == typeof i3.retain ? t4 : i3.retain;
              else if ("number" == typeof i3.retain) null == r4.retain ? a2.insert = r4.insert : a2.retain = r4.retain;
              else {
                const t5 = null == r4.retain ? "insert" : "retain", [e4, n4, s2] = u(r4[t5], i3.retain), o2 = h.getHandler(e4);
                a2[t5] = { [e4]: o2.compose(n4, s2, "retain" === t5) };
              }
              const c2 = o.default.compose(r4.attributes, i3.attributes, "number" == typeof r4.retain);
              if (c2 && (a2.attributes = c2), l2.push(a2), !n3.hasNext() && s(l2.ops[l2.ops.length - 1], a2)) {
                const t5 = new h(e3.rest());
                return l2.concat(t5).chop();
              }
            } else "number" == typeof i3.delete && ("number" == typeof r4.retain || "object" == typeof r4.retain && null !== r4.retain) && l2.push(i3);
          }
          return l2.chop();
        }
        concat(t3) {
          const e3 = new h(this.ops.slice());
          return t3.ops.length > 0 && (e3.push(t3.ops[0]), e3.ops = e3.ops.concat(t3.ops.slice(1))), e3;
        }
        diff(t3, e3) {
          if (this.ops === t3.ops) return new h();
          const n3 = [this, t3].map(((e4) => e4.map(((n4) => {
            if (null != n4.insert) return "string" == typeof n4.insert ? n4.insert : c;
            throw new Error("diff() called " + (e4 === t3 ? "on" : "with") + " non-document");
          })).join(""))), i2 = new h(), l2 = r2(n3[0], n3[1], e3, true), u2 = new a.default(this.ops), d = new a.default(t3.ops);
          return l2.forEach(((t4) => {
            let e4 = t4[1].length;
            for (; e4 > 0; ) {
              let n4 = 0;
              switch (t4[0]) {
                case r2.INSERT:
                  n4 = Math.min(d.peekLength(), e4), i2.push(d.next(n4));
                  break;
                case r2.DELETE:
                  n4 = Math.min(e4, u2.peekLength()), u2.next(n4), i2.delete(n4);
                  break;
                case r2.EQUAL:
                  n4 = Math.min(u2.peekLength(), d.peekLength(), e4);
                  const t5 = u2.next(n4), l3 = d.next(n4);
                  s(t5.insert, l3.insert) ? i2.retain(n4, o.default.diff(t5.attributes, l3.attributes)) : i2.push(l3).delete(n4);
              }
              e4 -= n4;
            }
          })), i2.chop();
        }
        eachLine(t3, e3 = "\n") {
          const n3 = new a.default(this.ops);
          let r3 = new h(), i2 = 0;
          for (; n3.hasNext(); ) {
            if ("insert" !== n3.peekType()) return;
            const s2 = n3.peek(), o2 = l.default.length(s2) - n3.peekLength(), a2 = "string" == typeof s2.insert ? s2.insert.indexOf(e3, o2) - o2 : -1;
            if (a2 < 0) r3.push(n3.next());
            else if (a2 > 0) r3.push(n3.next(a2));
            else {
              if (false === t3(r3, n3.next(1).attributes || {}, i2)) return;
              i2 += 1, r3 = new h();
            }
          }
          r3.length() > 0 && t3(r3, {}, i2);
        }
        invert(t3) {
          const e3 = new h();
          return this.reduce(((n3, r3) => {
            if (r3.insert) e3.delete(l.default.length(r3));
            else {
              if ("number" == typeof r3.retain && null == r3.attributes) return e3.retain(r3.retain), n3 + r3.retain;
              if (r3.delete || "number" == typeof r3.retain) {
                const i2 = r3.delete || r3.retain;
                return t3.slice(n3, n3 + i2).forEach(((t4) => {
                  r3.delete ? e3.push(t4) : r3.retain && r3.attributes && e3.retain(l.default.length(t4), o.default.invert(r3.attributes, t4.attributes));
                })), n3 + i2;
              }
              if ("object" == typeof r3.retain && null !== r3.retain) {
                const i2 = t3.slice(n3, n3 + 1), s2 = new a.default(i2.ops).next(), [l2, c2, d] = u(r3.retain, s2.insert), f = h.getHandler(l2);
                return e3.retain({ [l2]: f.invert(c2, d) }, o.default.invert(r3.attributes, s2.attributes)), n3 + 1;
              }
            }
            return n3;
          }), 0), e3.chop();
        }
        transform(t3, e3 = false) {
          if (e3 = !!e3, "number" == typeof t3) return this.transformPosition(t3, e3);
          const n3 = t3, r3 = new a.default(this.ops), i2 = new a.default(n3.ops), s2 = new h();
          for (; r3.hasNext() || i2.hasNext(); ) if ("insert" !== r3.peekType() || !e3 && "insert" === i2.peekType()) if ("insert" === i2.peekType()) s2.push(i2.next());
          else {
            const t4 = Math.min(r3.peekLength(), i2.peekLength()), n4 = r3.next(t4), l2 = i2.next(t4);
            if (n4.delete) continue;
            if (l2.delete) s2.push(l2);
            else {
              const r4 = n4.retain, i3 = l2.retain;
              let a2 = "object" == typeof i3 && null !== i3 ? i3 : t4;
              if ("object" == typeof r4 && null !== r4 && "object" == typeof i3 && null !== i3) {
                const t5 = Object.keys(r4)[0];
                if (t5 === Object.keys(i3)[0]) {
                  const n5 = h.getHandler(t5);
                  n5 && (a2 = { [t5]: n5.transform(r4[t5], i3[t5], e3) });
                }
              }
              s2.retain(a2, o.default.transform(n4.attributes, l2.attributes, e3));
            }
          }
          else s2.retain(l.default.length(r3.next()));
          return s2.chop();
        }
        transformPosition(t3, e3 = false) {
          e3 = !!e3;
          const n3 = new a.default(this.ops);
          let r3 = 0;
          for (; n3.hasNext() && r3 <= t3; ) {
            const i2 = n3.peekLength(), s2 = n3.peekType();
            n3.next(), "delete" !== s2 ? ("insert" === s2 && (r3 < t3 || !e3) && (t3 += i2), r3 += i2) : t3 -= Math.min(i2, t3 - r3);
          }
          return t3;
        }
      }
      h.Op = l.default, h.OpIterator = a.default, h.AttributeMap = o.default, h.handlers = {}, e2.default = h, t2.exports = h, t2.exports.default = h;
    }, 4123: function(t2, e2) {
      "use strict";
      var n2;
      Object.defineProperty(e2, "__esModule", { value: true }), (function(t3) {
        t3.length = function(t4) {
          return "number" == typeof t4.delete ? t4.delete : "number" == typeof t4.retain ? t4.retain : "object" == typeof t4.retain && null !== t4.retain ? 1 : "string" == typeof t4.insert ? t4.insert.length : 1;
        };
      })(n2 || (n2 = {})), e2.default = n2;
    }, 7033: function(t2, e2, n2) {
      "use strict";
      Object.defineProperty(e2, "__esModule", { value: true });
      const r2 = n2(4123);
      e2.default = class {
        constructor(t3) {
          this.ops = t3, this.index = 0, this.offset = 0;
        }
        hasNext() {
          return this.peekLength() < 1 / 0;
        }
        next(t3) {
          t3 || (t3 = 1 / 0);
          const e3 = this.ops[this.index];
          if (e3) {
            const n3 = this.offset, i = r2.default.length(e3);
            if (t3 >= i - n3 ? (t3 = i - n3, this.index += 1, this.offset = 0) : this.offset += t3, "number" == typeof e3.delete) return { delete: t3 };
            {
              const r3 = {};
              return e3.attributes && (r3.attributes = e3.attributes), "number" == typeof e3.retain ? r3.retain = t3 : "object" == typeof e3.retain && null !== e3.retain ? r3.retain = e3.retain : "string" == typeof e3.insert ? r3.insert = e3.insert.substr(n3, t3) : r3.insert = e3.insert, r3;
            }
          }
          return { retain: 1 / 0 };
        }
        peek() {
          return this.ops[this.index];
        }
        peekLength() {
          return this.ops[this.index] ? r2.default.length(this.ops[this.index]) - this.offset : 1 / 0;
        }
        peekType() {
          const t3 = this.ops[this.index];
          return t3 ? "number" == typeof t3.delete ? "delete" : "number" == typeof t3.retain || "object" == typeof t3.retain && null !== t3.retain ? "retain" : "insert" : "retain";
        }
        rest() {
          if (this.hasNext()) {
            if (0 === this.offset) return this.ops.slice(this.index);
            {
              const t3 = this.offset, e3 = this.index, n3 = this.next(), r3 = this.ops.slice(this.index);
              return this.offset = t3, this.index = e3, [n3].concat(r3);
            }
          }
          return [];
        }
      };
    }, 8820: function(t2, e2, n2) {
      "use strict";
      n2.d(e2, { A: function() {
        return l;
      } });
      var r2 = n2(8138), i = function(t3, e3) {
        for (var n3 = t3.length; n3--; ) if ((0, r2.A)(t3[n3][0], e3)) return n3;
        return -1;
      }, s = Array.prototype.splice;
      function o(t3) {
        var e3 = -1, n3 = null == t3 ? 0 : t3.length;
        for (this.clear(); ++e3 < n3; ) {
          var r3 = t3[e3];
          this.set(r3[0], r3[1]);
        }
      }
      o.prototype.clear = function() {
        this.__data__ = [], this.size = 0;
      }, o.prototype.delete = function(t3) {
        var e3 = this.__data__, n3 = i(e3, t3);
        return !(n3 < 0 || (n3 == e3.length - 1 ? e3.pop() : s.call(e3, n3, 1), --this.size, 0));
      }, o.prototype.get = function(t3) {
        var e3 = this.__data__, n3 = i(e3, t3);
        return n3 < 0 ? void 0 : e3[n3][1];
      }, o.prototype.has = function(t3) {
        return i(this.__data__, t3) > -1;
      }, o.prototype.set = function(t3, e3) {
        var n3 = this.__data__, r3 = i(n3, t3);
        return r3 < 0 ? (++this.size, n3.push([t3, e3])) : n3[r3][1] = e3, this;
      };
      var l = o;
    }, 2461: function(t2, e2, n2) {
      "use strict";
      var r2 = n2(2281), i = n2(5507), s = (0, r2.A)(i.A, "Map");
      e2.A = s;
    }, 3558: function(t2, e2, n2) {
      "use strict";
      n2.d(e2, { A: function() {
        return d;
      } });
      var r2 = (0, n2(2281).A)(Object, "create"), i = Object.prototype.hasOwnProperty, s = Object.prototype.hasOwnProperty;
      function o(t3) {
        var e3 = -1, n3 = null == t3 ? 0 : t3.length;
        for (this.clear(); ++e3 < n3; ) {
          var r3 = t3[e3];
          this.set(r3[0], r3[1]);
        }
      }
      o.prototype.clear = function() {
        this.__data__ = r2 ? r2(null) : {}, this.size = 0;
      }, o.prototype.delete = function(t3) {
        var e3 = this.has(t3) && delete this.__data__[t3];
        return this.size -= e3 ? 1 : 0, e3;
      }, o.prototype.get = function(t3) {
        var e3 = this.__data__;
        if (r2) {
          var n3 = e3[t3];
          return "__lodash_hash_undefined__" === n3 ? void 0 : n3;
        }
        return i.call(e3, t3) ? e3[t3] : void 0;
      }, o.prototype.has = function(t3) {
        var e3 = this.__data__;
        return r2 ? void 0 !== e3[t3] : s.call(e3, t3);
      }, o.prototype.set = function(t3, e3) {
        var n3 = this.__data__;
        return this.size += this.has(t3) ? 0 : 1, n3[t3] = r2 && void 0 === e3 ? "__lodash_hash_undefined__" : e3, this;
      };
      var l = o, a = n2(8820), c = n2(2461), u = function(t3, e3) {
        var n3, r3, i2 = t3.__data__;
        return ("string" == (r3 = typeof (n3 = e3)) || "number" == r3 || "symbol" == r3 || "boolean" == r3 ? "__proto__" !== n3 : null === n3) ? i2["string" == typeof e3 ? "string" : "hash"] : i2.map;
      };
      function h(t3) {
        var e3 = -1, n3 = null == t3 ? 0 : t3.length;
        for (this.clear(); ++e3 < n3; ) {
          var r3 = t3[e3];
          this.set(r3[0], r3[1]);
        }
      }
      h.prototype.clear = function() {
        this.size = 0, this.__data__ = { hash: new l(), map: new (c.A || a.A)(), string: new l() };
      }, h.prototype.delete = function(t3) {
        var e3 = u(this, t3).delete(t3);
        return this.size -= e3 ? 1 : 0, e3;
      }, h.prototype.get = function(t3) {
        return u(this, t3).get(t3);
      }, h.prototype.has = function(t3) {
        return u(this, t3).has(t3);
      }, h.prototype.set = function(t3, e3) {
        var n3 = u(this, t3), r3 = n3.size;
        return n3.set(t3, e3), this.size += n3.size == r3 ? 0 : 1, this;
      };
      var d = h;
    }, 2673: function(t2, e2, n2) {
      "use strict";
      n2.d(e2, { A: function() {
        return l;
      } });
      var r2 = n2(8820), i = n2(2461), s = n2(3558);
      function o(t3) {
        var e3 = this.__data__ = new r2.A(t3);
        this.size = e3.size;
      }
      o.prototype.clear = function() {
        this.__data__ = new r2.A(), this.size = 0;
      }, o.prototype.delete = function(t3) {
        var e3 = this.__data__, n3 = e3.delete(t3);
        return this.size = e3.size, n3;
      }, o.prototype.get = function(t3) {
        return this.__data__.get(t3);
      }, o.prototype.has = function(t3) {
        return this.__data__.has(t3);
      }, o.prototype.set = function(t3, e3) {
        var n3 = this.__data__;
        if (n3 instanceof r2.A) {
          var o2 = n3.__data__;
          if (!i.A || o2.length < 199) return o2.push([t3, e3]), this.size = ++n3.size, this;
          n3 = this.__data__ = new s.A(o2);
        }
        return n3.set(t3, e3), this.size = n3.size, this;
      };
      var l = o;
    }, 439: function(t2, e2, n2) {
      "use strict";
      var r2 = n2(5507).A.Symbol;
      e2.A = r2;
    }, 7218: function(t2, e2, n2) {
      "use strict";
      var r2 = n2(5507).A.Uint8Array;
      e2.A = r2;
    }, 6753: function(t2, e2, n2) {
      "use strict";
      n2.d(e2, { A: function() {
        return c;
      } });
      var r2 = n2(8412), i = n2(723), s = n2(776), o = n2(3767), l = n2(5755), a = Object.prototype.hasOwnProperty, c = function(t3, e3) {
        var n3 = (0, i.A)(t3), c2 = !n3 && (0, r2.A)(t3), u = !n3 && !c2 && (0, s.A)(t3), h = !n3 && !c2 && !u && (0, l.A)(t3), d = n3 || c2 || u || h, f = d ? (function(t4, e4) {
          for (var n4 = -1, r3 = Array(t4); ++n4 < t4; ) r3[n4] = e4(n4);
          return r3;
        })(t3.length, String) : [], p = f.length;
        for (var g in t3) !e3 && !a.call(t3, g) || d && ("length" == g || u && ("offset" == g || "parent" == g) || h && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || (0, o.A)(g, p)) || f.push(g);
        return f;
      };
    }, 802: function(t2, e2) {
      "use strict";
      e2.A = function(t3, e3) {
        for (var n2 = -1, r2 = e3.length, i = t3.length; ++n2 < r2; ) t3[i + n2] = e3[n2];
        return t3;
      };
    }, 6437: function(t2, e2, n2) {
      "use strict";
      var r2 = n2(6770), i = n2(8138), s = Object.prototype.hasOwnProperty;
      e2.A = function(t3, e3, n3) {
        var o = t3[e3];
        s.call(t3, e3) && (0, i.A)(o, n3) && (void 0 !== n3 || e3 in t3) || (0, r2.A)(t3, e3, n3);
      };
    }, 6770: function(t2, e2, n2) {
      "use strict";
      var r2 = n2(7889);
      e2.A = function(t3, e3, n3) {
        "__proto__" == e3 && r2.A ? (0, r2.A)(t3, e3, { configurable: true, enumerable: true, value: n3, writable: true }) : t3[e3] = n3;
      };
    }, 1381: function(t2, e2, n2) {
      "use strict";
      var r2 = n2(802), i = n2(723);
      e2.A = function(t3, e3, n3) {
        var s = e3(t3);
        return (0, i.A)(t3) ? s : (0, r2.A)(s, n3(t3));
      };
    }, 2159: function(t2, e2, n2) {
      "use strict";
      n2.d(e2, { A: function() {
        return u;
      } });
      var r2 = n2(439), i = Object.prototype, s = i.hasOwnProperty, o = i.toString, l = r2.A ? r2.A.toStringTag : void 0, a = Object.prototype.toString, c = r2.A ? r2.A.toStringTag : void 0, u = function(t3) {
        return null == t3 ? void 0 === t3 ? "[object Undefined]" : "[object Null]" : c && c in Object(t3) ? (function(t4) {
          var e3 = s.call(t4, l), n3 = t4[l];
          try {
            t4[l] = void 0;
            var r3 = true;
          } catch (t5) {
          }
          var i2 = o.call(t4);
          return r3 && (e3 ? t4[l] = n3 : delete t4[l]), i2;
        })(t3) : (function(t4) {
          return a.call(t4);
        })(t3);
      };
    }, 5771: function(t2, e2) {
      "use strict";
      e2.A = function(t3) {
        return function(e3) {
          return t3(e3);
        };
      };
    }, 2899: function(t2, e2, n2) {
      "use strict";
      var r2 = n2(7218);
      e2.A = function(t3) {
        var e3 = new t3.constructor(t3.byteLength);
        return new r2.A(e3).set(new r2.A(t3)), e3;
      };
    }, 3812: function(t2, e2, n2) {
      "use strict";
      var r2 = n2(5507), i = "object" == typeof exports && exports && !exports.nodeType && exports, s = i && "object" == typeof module && module && !module.nodeType && module, o = s && s.exports === i ? r2.A.Buffer : void 0, l = o ? o.allocUnsafe : void 0;
      e2.A = function(t3, e3) {
        if (e3) return t3.slice();
        var n3 = t3.length, r3 = l ? l(n3) : new t3.constructor(n3);
        return t3.copy(r3), r3;
      };
    }, 1827: function(t2, e2, n2) {
      "use strict";
      var r2 = n2(2899);
      e2.A = function(t3, e3) {
        var n3 = e3 ? (0, r2.A)(t3.buffer) : t3.buffer;
        return new t3.constructor(n3, t3.byteOffset, t3.length);
      };
    }, 4405: function(t2, e2) {
      "use strict";
      e2.A = function(t3, e3) {
        var n2 = -1, r2 = t3.length;
        for (e3 || (e3 = Array(r2)); ++n2 < r2; ) e3[n2] = t3[n2];
        return e3;
      };
    }, 9601: function(t2, e2, n2) {
      "use strict";
      var r2 = n2(6437), i = n2(6770);
      e2.A = function(t3, e3, n3, s) {
        var o = !n3;
        n3 || (n3 = {});
        for (var l = -1, a = e3.length; ++l < a; ) {
          var c = e3[l], u = s ? s(n3[c], t3[c], c, n3, t3) : void 0;
          void 0 === u && (u = t3[c]), o ? (0, i.A)(n3, c, u) : (0, r2.A)(n3, c, u);
        }
        return n3;
      };
    }, 7889: function(t2, e2, n2) {
      "use strict";
      var r2 = n2(2281), i = (function() {
        try {
          var t3 = (0, r2.A)(Object, "defineProperty");
          return t3({}, "", {}), t3;
        } catch (t4) {
        }
      })();
      e2.A = i;
    }, 9646: function(t2, e2) {
      "use strict";
      var n2 = "object" == typeof global && global && global.Object === Object && global;
      e2.A = n2;
    }, 2816: function(t2, e2, n2) {
      "use strict";
      var r2 = n2(1381), i = n2(9844), s = n2(3169);
      e2.A = function(t3) {
        return (0, r2.A)(t3, s.A, i.A);
      };
    }, 2281: function(t2, e2, n2) {
      "use strict";
      n2.d(e2, { A: function() {
        return m;
      } });
      var r2, i = n2(7572), s = n2(5507).A["__core-js_shared__"], o = (r2 = /[^.]+$/.exec(s && s.keys && s.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r2 : "", l = n2(659), a = n2(1543), c = /^\[object .+?Constructor\]$/, u = Function.prototype, h = Object.prototype, d = u.toString, f = h.hasOwnProperty, p = RegExp("^" + d.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), g = function(t3) {
        return !(!(0, l.A)(t3) || (e3 = t3, o && o in e3)) && ((0, i.A)(t3) ? p : c).test((0, a.A)(t3));
        var e3;
      }, m = function(t3, e3) {
        var n3 = (function(t4, e4) {
          return null == t4 ? void 0 : t4[e4];
        })(t3, e3);
        return g(n3) ? n3 : void 0;
      };
    }, 8769: function(t2, e2, n2) {
      "use strict";
      var r2 = (0, n2(2217).A)(Object.getPrototypeOf, Object);
      e2.A = r2;
    }, 9844: function(t2, e2, n2) {
      "use strict";
      n2.d(e2, { A: function() {
        return o;
      } });
      var r2 = n2(6935), i = Object.prototype.propertyIsEnumerable, s = Object.getOwnPropertySymbols, o = s ? function(t3) {
        return null == t3 ? [] : (t3 = Object(t3), (function(t4, e3) {
          for (var n3 = -1, r3 = null == t4 ? 0 : t4.length, i2 = 0, s2 = []; ++n3 < r3; ) {
            var o2 = t4[n3];
            e3(o2, n3, t4) && (s2[i2++] = o2);
          }
          return s2;
        })(s(t3), (function(e3) {
          return i.call(t3, e3);
        })));
      } : r2.A;
    }, 7995: function(t2, e2, n2) {
      "use strict";
      n2.d(e2, { A: function() {
        return E;
      } });
      var r2 = n2(2281), i = n2(5507), s = (0, r2.A)(i.A, "DataView"), o = n2(2461), l = (0, r2.A)(i.A, "Promise"), a = (0, r2.A)(i.A, "Set"), c = (0, r2.A)(i.A, "WeakMap"), u = n2(2159), h = n2(1543), d = "[object Map]", f = "[object Promise]", p = "[object Set]", g = "[object WeakMap]", m = "[object DataView]", b = (0, h.A)(s), y = (0, h.A)(o.A), v = (0, h.A)(l), A = (0, h.A)(a), x = (0, h.A)(c), N = u.A;
      (s && N(new s(new ArrayBuffer(1))) != m || o.A && N(new o.A()) != d || l && N(l.resolve()) != f || a && N(new a()) != p || c && N(new c()) != g) && (N = function(t3) {
        var e3 = (0, u.A)(t3), n3 = "[object Object]" == e3 ? t3.constructor : void 0, r3 = n3 ? (0, h.A)(n3) : "";
        if (r3) switch (r3) {
          case b:
            return m;
          case y:
            return d;
          case v:
            return f;
          case A:
            return p;
          case x:
            return g;
        }
        return e3;
      });
      var E = N;
    }, 1683: function(t2, e2, n2) {
      "use strict";
      n2.d(e2, { A: function() {
        return a;
      } });
      var r2 = n2(659), i = Object.create, s = /* @__PURE__ */ (function() {
        function t3() {
        }
        return function(e3) {
          if (!(0, r2.A)(e3)) return {};
          if (i) return i(e3);
          t3.prototype = e3;
          var n3 = new t3();
          return t3.prototype = void 0, n3;
        };
      })(), o = n2(8769), l = n2(501), a = function(t3) {
        return "function" != typeof t3.constructor || (0, l.A)(t3) ? {} : s((0, o.A)(t3));
      };
    }, 3767: function(t2, e2) {
      "use strict";
      var n2 = /^(?:0|[1-9]\d*)$/;
      e2.A = function(t3, e3) {
        var r2 = typeof t3;
        return !!(e3 = null == e3 ? 9007199254740991 : e3) && ("number" == r2 || "symbol" != r2 && n2.test(t3)) && t3 > -1 && t3 % 1 == 0 && t3 < e3;
      };
    }, 501: function(t2, e2) {
      "use strict";
      var n2 = Object.prototype;
      e2.A = function(t3) {
        var e3 = t3 && t3.constructor;
        return t3 === ("function" == typeof e3 && e3.prototype || n2);
      };
    }, 8795: function(t2, e2, n2) {
      "use strict";
      var r2 = n2(9646), i = "object" == typeof exports && exports && !exports.nodeType && exports, s = i && "object" == typeof module && module && !module.nodeType && module, o = s && s.exports === i && r2.A.process, l = (function() {
        try {
          return s && s.require && s.require("util").types || o && o.binding && o.binding("util");
        } catch (t3) {
        }
      })();
      e2.A = l;
    }, 2217: function(t2, e2) {
      "use strict";
      e2.A = function(t3, e3) {
        return function(n2) {
          return t3(e3(n2));
        };
      };
    }, 5507: function(t2, e2, n2) {
      "use strict";
      var r2 = n2(9646), i = "object" == typeof self && self && self.Object === Object && self, s = r2.A || i || Function("return this")();
      e2.A = s;
    }, 1543: function(t2, e2) {
      "use strict";
      var n2 = Function.prototype.toString;
      e2.A = function(t3) {
        if (null != t3) {
          try {
            return n2.call(t3);
          } catch (t4) {
          }
          try {
            return t3 + "";
          } catch (t4) {
          }
        }
        return "";
      };
    }, 3707: function(t2, e2, n2) {
      "use strict";
      n2.d(e2, { A: function() {
        return H;
      } });
      var r2 = n2(2673), i = n2(6437), s = n2(9601), o = n2(3169), l = n2(2624), a = n2(3812), c = n2(4405), u = n2(9844), h = n2(802), d = n2(8769), f = n2(6935), p = Object.getOwnPropertySymbols ? function(t3) {
        for (var e3 = []; t3; ) (0, h.A)(e3, (0, u.A)(t3)), t3 = (0, d.A)(t3);
        return e3;
      } : f.A, g = n2(2816), m = n2(1381), b = function(t3) {
        return (0, m.A)(t3, l.A, p);
      }, y = n2(7995), v = Object.prototype.hasOwnProperty, A = n2(2899), x = /\w*$/, N = n2(439), E = N.A ? N.A.prototype : void 0, w = E ? E.valueOf : void 0, q = n2(1827), k = function(t3, e3, n3) {
        var r3, i2, s2, o2 = t3.constructor;
        switch (e3) {
          case "[object ArrayBuffer]":
            return (0, A.A)(t3);
          case "[object Boolean]":
          case "[object Date]":
            return new o2(+t3);
          case "[object DataView]":
            return (function(t4, e4) {
              var n4 = e4 ? (0, A.A)(t4.buffer) : t4.buffer;
              return new t4.constructor(n4, t4.byteOffset, t4.byteLength);
            })(t3, n3);
          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return (0, q.A)(t3, n3);
          case "[object Map]":
          case "[object Set]":
            return new o2();
          case "[object Number]":
          case "[object String]":
            return new o2(t3);
          case "[object RegExp]":
            return (s2 = new (i2 = t3).constructor(i2.source, x.exec(i2))).lastIndex = i2.lastIndex, s2;
          case "[object Symbol]":
            return r3 = t3, w ? Object(w.call(r3)) : {};
        }
      }, _ = n2(1683), L = n2(723), S = n2(776), O = n2(7948), T = n2(5771), j = n2(8795), C = j.A && j.A.isMap, R = C ? (0, T.A)(C) : function(t3) {
        return (0, O.A)(t3) && "[object Map]" == (0, y.A)(t3);
      }, I = n2(659), B = j.A && j.A.isSet, M = B ? (0, T.A)(B) : function(t3) {
        return (0, O.A)(t3) && "[object Set]" == (0, y.A)(t3);
      }, U = "[object Arguments]", D = "[object Function]", P = "[object Object]", z = {};
      z[U] = z["[object Array]"] = z["[object ArrayBuffer]"] = z["[object DataView]"] = z["[object Boolean]"] = z["[object Date]"] = z["[object Float32Array]"] = z["[object Float64Array]"] = z["[object Int8Array]"] = z["[object Int16Array]"] = z["[object Int32Array]"] = z["[object Map]"] = z["[object Number]"] = z[P] = z["[object RegExp]"] = z["[object Set]"] = z["[object String]"] = z["[object Symbol]"] = z["[object Uint8Array]"] = z["[object Uint8ClampedArray]"] = z["[object Uint16Array]"] = z["[object Uint32Array]"] = true, z["[object Error]"] = z[D] = z["[object WeakMap]"] = false;
      var F = function t3(e3, n3, h2, d2, f2, m2) {
        var A2, x2 = 1 & n3, N2 = 2 & n3, E2 = 4 & n3;
        if (h2 && (A2 = f2 ? h2(e3, d2, f2, m2) : h2(e3)), void 0 !== A2) return A2;
        if (!(0, I.A)(e3)) return e3;
        var w2 = (0, L.A)(e3);
        if (w2) {
          if (A2 = (function(t4) {
            var e4 = t4.length, n4 = new t4.constructor(e4);
            return e4 && "string" == typeof t4[0] && v.call(t4, "index") && (n4.index = t4.index, n4.input = t4.input), n4;
          })(e3), !x2) return (0, c.A)(e3, A2);
        } else {
          var q2 = (0, y.A)(e3), O2 = q2 == D || "[object GeneratorFunction]" == q2;
          if ((0, S.A)(e3)) return (0, a.A)(e3, x2);
          if (q2 == P || q2 == U || O2 && !f2) {
            if (A2 = N2 || O2 ? {} : (0, _.A)(e3), !x2) return N2 ? (function(t4, e4) {
              return (0, s.A)(t4, p(t4), e4);
            })(e3, (function(t4, e4) {
              return t4 && (0, s.A)(e4, (0, l.A)(e4), t4);
            })(A2, e3)) : (function(t4, e4) {
              return (0, s.A)(t4, (0, u.A)(t4), e4);
            })(e3, (function(t4, e4) {
              return t4 && (0, s.A)(e4, (0, o.A)(e4), t4);
            })(A2, e3));
          } else {
            if (!z[q2]) return f2 ? e3 : {};
            A2 = k(e3, q2, x2);
          }
        }
        m2 || (m2 = new r2.A());
        var T2 = m2.get(e3);
        if (T2) return T2;
        m2.set(e3, A2), M(e3) ? e3.forEach((function(r3) {
          A2.add(t3(r3, n3, h2, r3, e3, m2));
        })) : R(e3) && e3.forEach((function(r3, i2) {
          A2.set(i2, t3(r3, n3, h2, i2, e3, m2));
        }));
        var j2 = E2 ? N2 ? b : g.A : N2 ? l.A : o.A, C2 = w2 ? void 0 : j2(e3);
        return (function(t4, e4) {
          for (var n4 = -1, r3 = null == t4 ? 0 : t4.length; ++n4 < r3 && false !== e4(t4[n4], n4, t4); ) ;
        })(C2 || e3, (function(r3, s2) {
          C2 && (r3 = e3[s2 = r3]), (0, i.A)(A2, s2, t3(r3, n3, h2, s2, e3, m2));
        })), A2;
      }, H = function(t3) {
        return F(t3, 5);
      };
    }, 8138: function(t2, e2) {
      "use strict";
      e2.A = function(t3, e3) {
        return t3 === e3 || t3 != t3 && e3 != e3;
      };
    }, 8412: function(t2, e2, n2) {
      "use strict";
      n2.d(e2, { A: function() {
        return u;
      } });
      var r2 = n2(2159), i = n2(7948), s = function(t3) {
        return (0, i.A)(t3) && "[object Arguments]" == (0, r2.A)(t3);
      }, o = Object.prototype, l = o.hasOwnProperty, a = o.propertyIsEnumerable, c = s(/* @__PURE__ */ (function() {
        return arguments;
      })()) ? s : function(t3) {
        return (0, i.A)(t3) && l.call(t3, "callee") && !a.call(t3, "callee");
      }, u = c;
    }, 723: function(t2, e2) {
      "use strict";
      var n2 = Array.isArray;
      e2.A = n2;
    }, 3628: function(t2, e2, n2) {
      "use strict";
      var r2 = n2(7572), i = n2(1628);
      e2.A = function(t3) {
        return null != t3 && (0, i.A)(t3.length) && !(0, r2.A)(t3);
      };
    }, 776: function(t2, e2, n2) {
      "use strict";
      n2.d(e2, { A: function() {
        return l;
      } });
      var r2 = n2(5507), i = "object" == typeof exports && exports && !exports.nodeType && exports, s = i && "object" == typeof module && module && !module.nodeType && module, o = s && s.exports === i ? r2.A.Buffer : void 0, l = (o ? o.isBuffer : void 0) || function() {
        return false;
      };
    }, 5123: function(t2, e2, n2) {
      "use strict";
      n2.d(e2, { A: function() {
        return S;
      } });
      var r2 = n2(2673), i = n2(3558);
      function s(t3) {
        var e3 = -1, n3 = null == t3 ? 0 : t3.length;
        for (this.__data__ = new i.A(); ++e3 < n3; ) this.add(t3[e3]);
      }
      s.prototype.add = s.prototype.push = function(t3) {
        return this.__data__.set(t3, "__lodash_hash_undefined__"), this;
      }, s.prototype.has = function(t3) {
        return this.__data__.has(t3);
      };
      var o = s, l = function(t3, e3) {
        for (var n3 = -1, r3 = null == t3 ? 0 : t3.length; ++n3 < r3; ) if (e3(t3[n3], n3, t3)) return true;
        return false;
      }, a = function(t3, e3, n3, r3, i2, s2) {
        var a2 = 1 & n3, c2 = t3.length, u2 = e3.length;
        if (c2 != u2 && !(a2 && u2 > c2)) return false;
        var h2 = s2.get(t3), d2 = s2.get(e3);
        if (h2 && d2) return h2 == e3 && d2 == t3;
        var f2 = -1, p2 = true, g2 = 2 & n3 ? new o() : void 0;
        for (s2.set(t3, e3), s2.set(e3, t3); ++f2 < c2; ) {
          var m2 = t3[f2], b2 = e3[f2];
          if (r3) var y2 = a2 ? r3(b2, m2, f2, e3, t3, s2) : r3(m2, b2, f2, t3, e3, s2);
          if (void 0 !== y2) {
            if (y2) continue;
            p2 = false;
            break;
          }
          if (g2) {
            if (!l(e3, (function(t4, e4) {
              if (o2 = e4, !g2.has(o2) && (m2 === t4 || i2(m2, t4, n3, r3, s2))) return g2.push(e4);
              var o2;
            }))) {
              p2 = false;
              break;
            }
          } else if (m2 !== b2 && !i2(m2, b2, n3, r3, s2)) {
            p2 = false;
            break;
          }
        }
        return s2.delete(t3), s2.delete(e3), p2;
      }, c = n2(439), u = n2(7218), h = n2(8138), d = function(t3) {
        var e3 = -1, n3 = Array(t3.size);
        return t3.forEach((function(t4, r3) {
          n3[++e3] = [r3, t4];
        })), n3;
      }, f = function(t3) {
        var e3 = -1, n3 = Array(t3.size);
        return t3.forEach((function(t4) {
          n3[++e3] = t4;
        })), n3;
      }, p = c.A ? c.A.prototype : void 0, g = p ? p.valueOf : void 0, m = n2(2816), b = Object.prototype.hasOwnProperty, y = n2(7995), v = n2(723), A = n2(776), x = n2(5755), N = "[object Arguments]", E = "[object Array]", w = "[object Object]", q = Object.prototype.hasOwnProperty, k = function(t3, e3, n3, i2, s2, o2) {
        var l2 = (0, v.A)(t3), c2 = (0, v.A)(e3), p2 = l2 ? E : (0, y.A)(t3), k2 = c2 ? E : (0, y.A)(e3), _2 = (p2 = p2 == N ? w : p2) == w, L2 = (k2 = k2 == N ? w : k2) == w, S2 = p2 == k2;
        if (S2 && (0, A.A)(t3)) {
          if (!(0, A.A)(e3)) return false;
          l2 = true, _2 = false;
        }
        if (S2 && !_2) return o2 || (o2 = new r2.A()), l2 || (0, x.A)(t3) ? a(t3, e3, n3, i2, s2, o2) : (function(t4, e4, n4, r3, i3, s3, o3) {
          switch (n4) {
            case "[object DataView]":
              if (t4.byteLength != e4.byteLength || t4.byteOffset != e4.byteOffset) return false;
              t4 = t4.buffer, e4 = e4.buffer;
            case "[object ArrayBuffer]":
              return !(t4.byteLength != e4.byteLength || !s3(new u.A(t4), new u.A(e4)));
            case "[object Boolean]":
            case "[object Date]":
            case "[object Number]":
              return (0, h.A)(+t4, +e4);
            case "[object Error]":
              return t4.name == e4.name && t4.message == e4.message;
            case "[object RegExp]":
            case "[object String]":
              return t4 == e4 + "";
            case "[object Map]":
              var l3 = d;
            case "[object Set]":
              var c3 = 1 & r3;
              if (l3 || (l3 = f), t4.size != e4.size && !c3) return false;
              var p3 = o3.get(t4);
              if (p3) return p3 == e4;
              r3 |= 2, o3.set(t4, e4);
              var m2 = a(l3(t4), l3(e4), r3, i3, s3, o3);
              return o3.delete(t4), m2;
            case "[object Symbol]":
              if (g) return g.call(t4) == g.call(e4);
          }
          return false;
        })(t3, e3, p2, n3, i2, s2, o2);
        if (!(1 & n3)) {
          var O = _2 && q.call(t3, "__wrapped__"), T = L2 && q.call(e3, "__wrapped__");
          if (O || T) {
            var j = O ? t3.value() : t3, C = T ? e3.value() : e3;
            return o2 || (o2 = new r2.A()), s2(j, C, n3, i2, o2);
          }
        }
        return !!S2 && (o2 || (o2 = new r2.A()), (function(t4, e4, n4, r3, i3, s3) {
          var o3 = 1 & n4, l3 = (0, m.A)(t4), a2 = l3.length;
          if (a2 != (0, m.A)(e4).length && !o3) return false;
          for (var c3 = a2; c3--; ) {
            var u2 = l3[c3];
            if (!(o3 ? u2 in e4 : b.call(e4, u2))) return false;
          }
          var h2 = s3.get(t4), d2 = s3.get(e4);
          if (h2 && d2) return h2 == e4 && d2 == t4;
          var f2 = true;
          s3.set(t4, e4), s3.set(e4, t4);
          for (var p3 = o3; ++c3 < a2; ) {
            var g2 = t4[u2 = l3[c3]], y2 = e4[u2];
            if (r3) var v2 = o3 ? r3(y2, g2, u2, e4, t4, s3) : r3(g2, y2, u2, t4, e4, s3);
            if (!(void 0 === v2 ? g2 === y2 || i3(g2, y2, n4, r3, s3) : v2)) {
              f2 = false;
              break;
            }
            p3 || (p3 = "constructor" == u2);
          }
          if (f2 && !p3) {
            var A2 = t4.constructor, x2 = e4.constructor;
            A2 == x2 || !("constructor" in t4) || !("constructor" in e4) || "function" == typeof A2 && A2 instanceof A2 && "function" == typeof x2 && x2 instanceof x2 || (f2 = false);
          }
          return s3.delete(t4), s3.delete(e4), f2;
        })(t3, e3, n3, i2, s2, o2));
      }, _ = n2(7948), L = function t3(e3, n3, r3, i2, s2) {
        return e3 === n3 || (null == e3 || null == n3 || !(0, _.A)(e3) && !(0, _.A)(n3) ? e3 != e3 && n3 != n3 : k(e3, n3, r3, i2, t3, s2));
      }, S = function(t3, e3) {
        return L(t3, e3);
      };
    }, 7572: function(t2, e2, n2) {
      "use strict";
      var r2 = n2(2159), i = n2(659);
      e2.A = function(t3) {
        if (!(0, i.A)(t3)) return false;
        var e3 = (0, r2.A)(t3);
        return "[object Function]" == e3 || "[object GeneratorFunction]" == e3 || "[object AsyncFunction]" == e3 || "[object Proxy]" == e3;
      };
    }, 1628: function(t2, e2) {
      "use strict";
      e2.A = function(t3) {
        return "number" == typeof t3 && t3 > -1 && t3 % 1 == 0 && t3 <= 9007199254740991;
      };
    }, 659: function(t2, e2) {
      "use strict";
      e2.A = function(t3) {
        var e3 = typeof t3;
        return null != t3 && ("object" == e3 || "function" == e3);
      };
    }, 7948: function(t2, e2) {
      "use strict";
      e2.A = function(t3) {
        return null != t3 && "object" == typeof t3;
      };
    }, 5755: function(t2, e2, n2) {
      "use strict";
      n2.d(e2, { A: function() {
        return u;
      } });
      var r2 = n2(2159), i = n2(1628), s = n2(7948), o = {};
      o["[object Float32Array]"] = o["[object Float64Array]"] = o["[object Int8Array]"] = o["[object Int16Array]"] = o["[object Int32Array]"] = o["[object Uint8Array]"] = o["[object Uint8ClampedArray]"] = o["[object Uint16Array]"] = o["[object Uint32Array]"] = true, o["[object Arguments]"] = o["[object Array]"] = o["[object ArrayBuffer]"] = o["[object Boolean]"] = o["[object DataView]"] = o["[object Date]"] = o["[object Error]"] = o["[object Function]"] = o["[object Map]"] = o["[object Number]"] = o["[object Object]"] = o["[object RegExp]"] = o["[object Set]"] = o["[object String]"] = o["[object WeakMap]"] = false;
      var l = n2(5771), a = n2(8795), c = a.A && a.A.isTypedArray, u = c ? (0, l.A)(c) : function(t3) {
        return (0, s.A)(t3) && (0, i.A)(t3.length) && !!o[(0, r2.A)(t3)];
      };
    }, 3169: function(t2, e2, n2) {
      "use strict";
      n2.d(e2, { A: function() {
        return a;
      } });
      var r2 = n2(6753), i = n2(501), s = (0, n2(2217).A)(Object.keys, Object), o = Object.prototype.hasOwnProperty, l = n2(3628), a = function(t3) {
        return (0, l.A)(t3) ? (0, r2.A)(t3) : (function(t4) {
          if (!(0, i.A)(t4)) return s(t4);
          var e3 = [];
          for (var n3 in Object(t4)) o.call(t4, n3) && "constructor" != n3 && e3.push(n3);
          return e3;
        })(t3);
      };
    }, 2624: function(t2, e2, n2) {
      "use strict";
      n2.d(e2, { A: function() {
        return c;
      } });
      var r2 = n2(6753), i = n2(659), s = n2(501), o = Object.prototype.hasOwnProperty, l = function(t3) {
        if (!(0, i.A)(t3)) return (function(t4) {
          var e4 = [];
          if (null != t4) for (var n4 in Object(t4)) e4.push(n4);
          return e4;
        })(t3);
        var e3 = (0, s.A)(t3), n3 = [];
        for (var r3 in t3) ("constructor" != r3 || !e3 && o.call(t3, r3)) && n3.push(r3);
        return n3;
      }, a = n2(3628), c = function(t3) {
        return (0, a.A)(t3) ? (0, r2.A)(t3, true) : l(t3);
      };
    }, 8347: function(t2, e2, n2) {
      "use strict";
      n2.d(e2, { A: function() {
        return $;
      } });
      var r2, i, s, o, l = n2(2673), a = n2(6770), c = n2(8138), u = function(t3, e3, n3) {
        (void 0 !== n3 && !(0, c.A)(t3[e3], n3) || void 0 === n3 && !(e3 in t3)) && (0, a.A)(t3, e3, n3);
      }, h = function(t3, e3, n3) {
        for (var r3 = -1, i2 = Object(t3), s2 = n3(t3), o2 = s2.length; o2--; ) {
          var l2 = s2[++r3];
          if (false === e3(i2[l2], l2, i2)) break;
        }
        return t3;
      }, d = n2(3812), f = n2(1827), p = n2(4405), g = n2(1683), m = n2(8412), b = n2(723), y = n2(3628), v = n2(7948), A = n2(776), x = n2(7572), N = n2(659), E = n2(2159), w = n2(8769), q = Function.prototype, k = Object.prototype, _ = q.toString, L = k.hasOwnProperty, S = _.call(Object), O = n2(5755), T = function(t3, e3) {
        if (("constructor" !== e3 || "function" != typeof t3[e3]) && "__proto__" != e3) return t3[e3];
      }, j = n2(9601), C = n2(2624), R = function(t3, e3, n3, r3, i2, s2, o2) {
        var l2, a2 = T(t3, n3), c2 = T(e3, n3), h2 = o2.get(c2);
        if (h2) u(t3, n3, h2);
        else {
          var q2 = s2 ? s2(a2, c2, n3 + "", t3, e3, o2) : void 0, k2 = void 0 === q2;
          if (k2) {
            var R2 = (0, b.A)(c2), I2 = !R2 && (0, A.A)(c2), B2 = !R2 && !I2 && (0, O.A)(c2);
            q2 = c2, R2 || I2 || B2 ? (0, b.A)(a2) ? q2 = a2 : (l2 = a2, (0, v.A)(l2) && (0, y.A)(l2) ? q2 = (0, p.A)(a2) : I2 ? (k2 = false, q2 = (0, d.A)(c2, true)) : B2 ? (k2 = false, q2 = (0, f.A)(c2, true)) : q2 = []) : (function(t4) {
              if (!(0, v.A)(t4) || "[object Object]" != (0, E.A)(t4)) return false;
              var e4 = (0, w.A)(t4);
              if (null === e4) return true;
              var n4 = L.call(e4, "constructor") && e4.constructor;
              return "function" == typeof n4 && n4 instanceof n4 && _.call(n4) == S;
            })(c2) || (0, m.A)(c2) ? (q2 = a2, (0, m.A)(a2) ? q2 = (function(t4) {
              return (0, j.A)(t4, (0, C.A)(t4));
            })(a2) : (0, N.A)(a2) && !(0, x.A)(a2) || (q2 = (0, g.A)(c2))) : k2 = false;
          }
          k2 && (o2.set(c2, q2), i2(q2, c2, r3, s2, o2), o2.delete(c2)), u(t3, n3, q2);
        }
      }, I = function t3(e3, n3, r3, i2, s2) {
        e3 !== n3 && h(n3, (function(o2, a2) {
          if (s2 || (s2 = new l.A()), (0, N.A)(o2)) R(e3, n3, a2, r3, t3, i2, s2);
          else {
            var c2 = i2 ? i2(T(e3, a2), o2, a2 + "", e3, n3, s2) : void 0;
            void 0 === c2 && (c2 = o2), u(e3, a2, c2);
          }
        }), C.A);
      }, B = function(t3) {
        return t3;
      }, M = Math.max, U = n2(7889), D = U.A ? function(t3, e3) {
        return (0, U.A)(t3, "toString", { configurable: true, enumerable: false, value: (n3 = e3, function() {
          return n3;
        }), writable: true });
        var n3;
      } : B, P = Date.now, z = (r2 = D, i = 0, s = 0, function() {
        var t3 = P(), e3 = 16 - (t3 - s);
        if (s = t3, e3 > 0) {
          if (++i >= 800) return arguments[0];
        } else i = 0;
        return r2.apply(void 0, arguments);
      }), F = function(t3, e3) {
        return z((function(t4, e4, n3) {
          return e4 = M(void 0 === e4 ? t4.length - 1 : e4, 0), function() {
            for (var r3 = arguments, i2 = -1, s2 = M(r3.length - e4, 0), o2 = Array(s2); ++i2 < s2; ) o2[i2] = r3[e4 + i2];
            i2 = -1;
            for (var l2 = Array(e4 + 1); ++i2 < e4; ) l2[i2] = r3[i2];
            return l2[e4] = n3(o2), (function(t5, e5, n4) {
              switch (n4.length) {
                case 0:
                  return t5.call(e5);
                case 1:
                  return t5.call(e5, n4[0]);
                case 2:
                  return t5.call(e5, n4[0], n4[1]);
                case 3:
                  return t5.call(e5, n4[0], n4[1], n4[2]);
              }
              return t5.apply(e5, n4);
            })(t4, this, l2);
          };
        })(t3, e3, B), t3 + "");
      }, H = n2(3767), $ = (o = function(t3, e3, n3) {
        I(t3, e3, n3);
      }, F((function(t3, e3) {
        var n3 = -1, r3 = e3.length, i2 = r3 > 1 ? e3[r3 - 1] : void 0, s2 = r3 > 2 ? e3[2] : void 0;
        for (i2 = o.length > 3 && "function" == typeof i2 ? (r3--, i2) : void 0, s2 && (function(t4, e4, n4) {
          if (!(0, N.A)(n4)) return false;
          var r4 = typeof e4;
          return !!("number" == r4 ? (0, y.A)(n4) && (0, H.A)(e4, n4.length) : "string" == r4 && e4 in n4) && (0, c.A)(n4[e4], t4);
        })(e3[0], e3[1], s2) && (i2 = r3 < 3 ? void 0 : i2, r3 = 1), t3 = Object(t3); ++n3 < r3; ) {
          var l2 = e3[n3];
          l2 && o(t3, l2, n3);
        }
        return t3;
      })));
    }, 6935: function(t2, e2) {
      "use strict";
      e2.A = function() {
        return [];
      };
    }, 6003: function(t2, e2, n2) {
      "use strict";
      n2.r(e2), n2.d(e2, { Attributor: function() {
        return i;
      }, AttributorStore: function() {
        return d;
      }, BlockBlot: function() {
        return w;
      }, ClassAttributor: function() {
        return c;
      }, ContainerBlot: function() {
        return k;
      }, EmbedBlot: function() {
        return _;
      }, InlineBlot: function() {
        return N;
      }, LeafBlot: function() {
        return m;
      }, ParentBlot: function() {
        return A;
      }, Registry: function() {
        return l;
      }, Scope: function() {
        return r2;
      }, ScrollBlot: function() {
        return O;
      }, StyleAttributor: function() {
        return h;
      }, TextBlot: function() {
        return j;
      } });
      var r2 = ((t3) => (t3[t3.TYPE = 3] = "TYPE", t3[t3.LEVEL = 12] = "LEVEL", t3[t3.ATTRIBUTE = 13] = "ATTRIBUTE", t3[t3.BLOT = 14] = "BLOT", t3[t3.INLINE = 7] = "INLINE", t3[t3.BLOCK = 11] = "BLOCK", t3[t3.BLOCK_BLOT = 10] = "BLOCK_BLOT", t3[t3.INLINE_BLOT = 6] = "INLINE_BLOT", t3[t3.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", t3[t3.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", t3[t3.ANY = 15] = "ANY", t3))(r2 || {});
      class i {
        constructor(t3, e3, n3 = {}) {
          this.attrName = t3, this.keyName = e3;
          const i2 = r2.TYPE & r2.ATTRIBUTE;
          this.scope = null != n3.scope ? n3.scope & r2.LEVEL | i2 : r2.ATTRIBUTE, null != n3.whitelist && (this.whitelist = n3.whitelist);
        }
        static keys(t3) {
          return Array.from(t3.attributes).map(((t4) => t4.name));
        }
        add(t3, e3) {
          return !!this.canAdd(t3, e3) && (t3.setAttribute(this.keyName, e3), true);
        }
        canAdd(t3, e3) {
          return null == this.whitelist || ("string" == typeof e3 ? this.whitelist.indexOf(e3.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(e3) > -1);
        }
        remove(t3) {
          t3.removeAttribute(this.keyName);
        }
        value(t3) {
          const e3 = t3.getAttribute(this.keyName);
          return this.canAdd(t3, e3) && e3 ? e3 : "";
        }
      }
      class s extends Error {
        constructor(t3) {
          super(t3 = "[Parchment] " + t3), this.message = t3, this.name = this.constructor.name;
        }
      }
      const o = class t3 {
        constructor() {
          this.attributes = {}, this.classes = {}, this.tags = {}, this.types = {};
        }
        static find(t4, e3 = false) {
          if (null == t4) return null;
          if (this.blots.has(t4)) return this.blots.get(t4) || null;
          if (e3) {
            let n3 = null;
            try {
              n3 = t4.parentNode;
            } catch {
              return null;
            }
            return this.find(n3, e3);
          }
          return null;
        }
        create(e3, n3, r3) {
          const i2 = this.query(n3);
          if (null == i2) throw new s(`Unable to create ${n3} blot`);
          const o2 = i2, l2 = n3 instanceof Node || n3.nodeType === Node.TEXT_NODE ? n3 : o2.create(r3), a2 = new o2(e3, l2, r3);
          return t3.blots.set(a2.domNode, a2), a2;
        }
        find(e3, n3 = false) {
          return t3.find(e3, n3);
        }
        query(t4, e3 = r2.ANY) {
          let n3;
          return "string" == typeof t4 ? n3 = this.types[t4] || this.attributes[t4] : t4 instanceof Text || t4.nodeType === Node.TEXT_NODE ? n3 = this.types.text : "number" == typeof t4 ? t4 & r2.LEVEL & r2.BLOCK ? n3 = this.types.block : t4 & r2.LEVEL & r2.INLINE && (n3 = this.types.inline) : t4 instanceof Element && ((t4.getAttribute("class") || "").split(/\s+/).some(((t5) => (n3 = this.classes[t5], !!n3))), n3 = n3 || this.tags[t4.tagName]), null == n3 ? null : "scope" in n3 && e3 & r2.LEVEL & n3.scope && e3 & r2.TYPE & n3.scope ? n3 : null;
        }
        register(...t4) {
          return t4.map(((t5) => {
            const e3 = "blotName" in t5, n3 = "attrName" in t5;
            if (!e3 && !n3) throw new s("Invalid definition");
            if (e3 && "abstract" === t5.blotName) throw new s("Cannot register abstract class");
            const r3 = e3 ? t5.blotName : n3 ? t5.attrName : void 0;
            return this.types[r3] = t5, n3 ? "string" == typeof t5.keyName && (this.attributes[t5.keyName] = t5) : e3 && (t5.className && (this.classes[t5.className] = t5), t5.tagName && (Array.isArray(t5.tagName) ? t5.tagName = t5.tagName.map(((t6) => t6.toUpperCase())) : t5.tagName = t5.tagName.toUpperCase(), (Array.isArray(t5.tagName) ? t5.tagName : [t5.tagName]).forEach(((e4) => {
              (null == this.tags[e4] || null == t5.className) && (this.tags[e4] = t5);
            })))), t5;
          }));
        }
      };
      o.blots = /* @__PURE__ */ new WeakMap();
      let l = o;
      function a(t3, e3) {
        return (t3.getAttribute("class") || "").split(/\s+/).filter(((t4) => 0 === t4.indexOf(`${e3}-`)));
      }
      const c = class extends i {
        static keys(t3) {
          return (t3.getAttribute("class") || "").split(/\s+/).map(((t4) => t4.split("-").slice(0, -1).join("-")));
        }
        add(t3, e3) {
          return !!this.canAdd(t3, e3) && (this.remove(t3), t3.classList.add(`${this.keyName}-${e3}`), true);
        }
        remove(t3) {
          a(t3, this.keyName).forEach(((e3) => {
            t3.classList.remove(e3);
          })), 0 === t3.classList.length && t3.removeAttribute("class");
        }
        value(t3) {
          const e3 = (a(t3, this.keyName)[0] || "").slice(this.keyName.length + 1);
          return this.canAdd(t3, e3) ? e3 : "";
        }
      };
      function u(t3) {
        const e3 = t3.split("-"), n3 = e3.slice(1).map(((t4) => t4[0].toUpperCase() + t4.slice(1))).join("");
        return e3[0] + n3;
      }
      const h = class extends i {
        static keys(t3) {
          return (t3.getAttribute("style") || "").split(";").map(((t4) => t4.split(":")[0].trim()));
        }
        add(t3, e3) {
          return !!this.canAdd(t3, e3) && (t3.style[u(this.keyName)] = e3, true);
        }
        remove(t3) {
          t3.style[u(this.keyName)] = "", t3.getAttribute("style") || t3.removeAttribute("style");
        }
        value(t3) {
          const e3 = t3.style[u(this.keyName)];
          return this.canAdd(t3, e3) ? e3 : "";
        }
      }, d = class {
        constructor(t3) {
          this.attributes = {}, this.domNode = t3, this.build();
        }
        attribute(t3, e3) {
          e3 ? t3.add(this.domNode, e3) && (null != t3.value(this.domNode) ? this.attributes[t3.attrName] = t3 : delete this.attributes[t3.attrName]) : (t3.remove(this.domNode), delete this.attributes[t3.attrName]);
        }
        build() {
          this.attributes = {};
          const t3 = l.find(this.domNode);
          if (null == t3) return;
          const e3 = i.keys(this.domNode), n3 = c.keys(this.domNode), s2 = h.keys(this.domNode);
          e3.concat(n3).concat(s2).forEach(((e4) => {
            const n4 = t3.scroll.query(e4, r2.ATTRIBUTE);
            n4 instanceof i && (this.attributes[n4.attrName] = n4);
          }));
        }
        copy(t3) {
          Object.keys(this.attributes).forEach(((e3) => {
            const n3 = this.attributes[e3].value(this.domNode);
            t3.format(e3, n3);
          }));
        }
        move(t3) {
          this.copy(t3), Object.keys(this.attributes).forEach(((t4) => {
            this.attributes[t4].remove(this.domNode);
          })), this.attributes = {};
        }
        values() {
          return Object.keys(this.attributes).reduce(((t3, e3) => (t3[e3] = this.attributes[e3].value(this.domNode), t3)), {});
        }
      }, f = class {
        constructor(t3, e3) {
          this.scroll = t3, this.domNode = e3, l.blots.set(e3, this), this.prev = null, this.next = null;
        }
        static create(t3) {
          if (null == this.tagName) throw new s("Blot definition missing tagName");
          let e3, n3;
          return Array.isArray(this.tagName) ? ("string" == typeof t3 ? (n3 = t3.toUpperCase(), parseInt(n3, 10).toString() === n3 && (n3 = parseInt(n3, 10))) : "number" == typeof t3 && (n3 = t3), e3 = "number" == typeof n3 ? document.createElement(this.tagName[n3 - 1]) : n3 && this.tagName.indexOf(n3) > -1 ? document.createElement(n3) : document.createElement(this.tagName[0])) : e3 = document.createElement(this.tagName), this.className && e3.classList.add(this.className), e3;
        }
        get statics() {
          return this.constructor;
        }
        attach() {
        }
        clone() {
          const t3 = this.domNode.cloneNode(false);
          return this.scroll.create(t3);
        }
        detach() {
          null != this.parent && this.parent.removeChild(this), l.blots.delete(this.domNode);
        }
        deleteAt(t3, e3) {
          this.isolate(t3, e3).remove();
        }
        formatAt(t3, e3, n3, i2) {
          const s2 = this.isolate(t3, e3);
          if (null != this.scroll.query(n3, r2.BLOT) && i2) s2.wrap(n3, i2);
          else if (null != this.scroll.query(n3, r2.ATTRIBUTE)) {
            const t4 = this.scroll.create(this.statics.scope);
            s2.wrap(t4), t4.format(n3, i2);
          }
        }
        insertAt(t3, e3, n3) {
          const r3 = null == n3 ? this.scroll.create("text", e3) : this.scroll.create(e3, n3), i2 = this.split(t3);
          this.parent.insertBefore(r3, i2 || void 0);
        }
        isolate(t3, e3) {
          const n3 = this.split(t3);
          if (null == n3) throw new Error("Attempt to isolate at end");
          return n3.split(e3), n3;
        }
        length() {
          return 1;
        }
        offset(t3 = this.parent) {
          return null == this.parent || this === t3 ? 0 : this.parent.children.offset(this) + this.parent.offset(t3);
        }
        optimize(t3) {
          this.statics.requiredContainer && !(this.parent instanceof this.statics.requiredContainer) && this.wrap(this.statics.requiredContainer.blotName);
        }
        remove() {
          null != this.domNode.parentNode && this.domNode.parentNode.removeChild(this.domNode), this.detach();
        }
        replaceWith(t3, e3) {
          const n3 = "string" == typeof t3 ? this.scroll.create(t3, e3) : t3;
          return null != this.parent && (this.parent.insertBefore(n3, this.next || void 0), this.remove()), n3;
        }
        split(t3, e3) {
          return 0 === t3 ? this : this.next;
        }
        update(t3, e3) {
        }
        wrap(t3, e3) {
          const n3 = "string" == typeof t3 ? this.scroll.create(t3, e3) : t3;
          if (null != this.parent && this.parent.insertBefore(n3, this.next || void 0), "function" != typeof n3.appendChild) throw new s(`Cannot wrap ${t3}`);
          return n3.appendChild(this), n3;
        }
      };
      f.blotName = "abstract";
      let p = f;
      const g = class extends p {
        static value(t3) {
          return true;
        }
        index(t3, e3) {
          return this.domNode === t3 || this.domNode.compareDocumentPosition(t3) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(e3, 1) : -1;
        }
        position(t3, e3) {
          let n3 = Array.from(this.parent.domNode.childNodes).indexOf(this.domNode);
          return t3 > 0 && (n3 += 1), [this.parent.domNode, n3];
        }
        value() {
          return { [this.statics.blotName]: this.statics.value(this.domNode) || true };
        }
      };
      g.scope = r2.INLINE_BLOT;
      const m = g;
      class b {
        constructor() {
          this.head = null, this.tail = null, this.length = 0;
        }
        append(...t3) {
          if (this.insertBefore(t3[0], null), t3.length > 1) {
            const e3 = t3.slice(1);
            this.append(...e3);
          }
        }
        at(t3) {
          const e3 = this.iterator();
          let n3 = e3();
          for (; n3 && t3 > 0; ) t3 -= 1, n3 = e3();
          return n3;
        }
        contains(t3) {
          const e3 = this.iterator();
          let n3 = e3();
          for (; n3; ) {
            if (n3 === t3) return true;
            n3 = e3();
          }
          return false;
        }
        indexOf(t3) {
          const e3 = this.iterator();
          let n3 = e3(), r3 = 0;
          for (; n3; ) {
            if (n3 === t3) return r3;
            r3 += 1, n3 = e3();
          }
          return -1;
        }
        insertBefore(t3, e3) {
          null != t3 && (this.remove(t3), t3.next = e3, null != e3 ? (t3.prev = e3.prev, null != e3.prev && (e3.prev.next = t3), e3.prev = t3, e3 === this.head && (this.head = t3)) : null != this.tail ? (this.tail.next = t3, t3.prev = this.tail, this.tail = t3) : (t3.prev = null, this.head = this.tail = t3), this.length += 1);
        }
        offset(t3) {
          let e3 = 0, n3 = this.head;
          for (; null != n3; ) {
            if (n3 === t3) return e3;
            e3 += n3.length(), n3 = n3.next;
          }
          return -1;
        }
        remove(t3) {
          this.contains(t3) && (null != t3.prev && (t3.prev.next = t3.next), null != t3.next && (t3.next.prev = t3.prev), t3 === this.head && (this.head = t3.next), t3 === this.tail && (this.tail = t3.prev), this.length -= 1);
        }
        iterator(t3 = this.head) {
          return () => {
            const e3 = t3;
            return null != t3 && (t3 = t3.next), e3;
          };
        }
        find(t3, e3 = false) {
          const n3 = this.iterator();
          let r3 = n3();
          for (; r3; ) {
            const i2 = r3.length();
            if (t3 < i2 || e3 && t3 === i2 && (null == r3.next || 0 !== r3.next.length())) return [r3, t3];
            t3 -= i2, r3 = n3();
          }
          return [null, 0];
        }
        forEach(t3) {
          const e3 = this.iterator();
          let n3 = e3();
          for (; n3; ) t3(n3), n3 = e3();
        }
        forEachAt(t3, e3, n3) {
          if (e3 <= 0) return;
          const [r3, i2] = this.find(t3);
          let s2 = t3 - i2;
          const o2 = this.iterator(r3);
          let l2 = o2();
          for (; l2 && s2 < t3 + e3; ) {
            const r4 = l2.length();
            t3 > s2 ? n3(l2, t3 - s2, Math.min(e3, s2 + r4 - t3)) : n3(l2, 0, Math.min(r4, t3 + e3 - s2)), s2 += r4, l2 = o2();
          }
        }
        map(t3) {
          return this.reduce(((e3, n3) => (e3.push(t3(n3)), e3)), []);
        }
        reduce(t3, e3) {
          const n3 = this.iterator();
          let r3 = n3();
          for (; r3; ) e3 = t3(e3, r3), r3 = n3();
          return e3;
        }
      }
      function y(t3, e3) {
        const n3 = e3.find(t3);
        if (n3) return n3;
        try {
          return e3.create(t3);
        } catch {
          const n4 = e3.create(r2.INLINE);
          return Array.from(t3.childNodes).forEach(((t4) => {
            n4.domNode.appendChild(t4);
          })), t3.parentNode && t3.parentNode.replaceChild(n4.domNode, t3), n4.attach(), n4;
        }
      }
      const v = class t3 extends p {
        constructor(t4, e3) {
          super(t4, e3), this.uiNode = null, this.build();
        }
        appendChild(t4) {
          this.insertBefore(t4);
        }
        attach() {
          super.attach(), this.children.forEach(((t4) => {
            t4.attach();
          }));
        }
        attachUI(e3) {
          null != this.uiNode && this.uiNode.remove(), this.uiNode = e3, t3.uiClass && this.uiNode.classList.add(t3.uiClass), this.uiNode.setAttribute("contenteditable", "false"), this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);
        }
        build() {
          this.children = new b(), Array.from(this.domNode.childNodes).filter(((t4) => t4 !== this.uiNode)).reverse().forEach(((t4) => {
            try {
              const e3 = y(t4, this.scroll);
              this.insertBefore(e3, this.children.head || void 0);
            } catch (t5) {
              if (t5 instanceof s) return;
              throw t5;
            }
          }));
        }
        deleteAt(t4, e3) {
          if (0 === t4 && e3 === this.length()) return this.remove();
          this.children.forEachAt(t4, e3, ((t5, e4, n3) => {
            t5.deleteAt(e4, n3);
          }));
        }
        descendant(e3, n3 = 0) {
          const [r3, i2] = this.children.find(n3);
          return null == e3.blotName && e3(r3) || null != e3.blotName && r3 instanceof e3 ? [r3, i2] : r3 instanceof t3 ? r3.descendant(e3, i2) : [null, -1];
        }
        descendants(e3, n3 = 0, r3 = Number.MAX_VALUE) {
          let i2 = [], s2 = r3;
          return this.children.forEachAt(n3, r3, ((n4, r4, o2) => {
            (null == e3.blotName && e3(n4) || null != e3.blotName && n4 instanceof e3) && i2.push(n4), n4 instanceof t3 && (i2 = i2.concat(n4.descendants(e3, r4, s2))), s2 -= o2;
          })), i2;
        }
        detach() {
          this.children.forEach(((t4) => {
            t4.detach();
          })), super.detach();
        }
        enforceAllowedChildren() {
          let e3 = false;
          this.children.forEach(((n3) => {
            e3 || this.statics.allowedChildren.some(((t4) => n3 instanceof t4)) || (n3.statics.scope === r2.BLOCK_BLOT ? (null != n3.next && this.splitAfter(n3), null != n3.prev && this.splitAfter(n3.prev), n3.parent.unwrap(), e3 = true) : n3 instanceof t3 ? n3.unwrap() : n3.remove());
          }));
        }
        formatAt(t4, e3, n3, r3) {
          this.children.forEachAt(t4, e3, ((t5, e4, i2) => {
            t5.formatAt(e4, i2, n3, r3);
          }));
        }
        insertAt(t4, e3, n3) {
          const [r3, i2] = this.children.find(t4);
          if (r3) r3.insertAt(i2, e3, n3);
          else {
            const t5 = null == n3 ? this.scroll.create("text", e3) : this.scroll.create(e3, n3);
            this.appendChild(t5);
          }
        }
        insertBefore(t4, e3) {
          null != t4.parent && t4.parent.children.remove(t4);
          let n3 = null;
          this.children.insertBefore(t4, e3 || null), t4.parent = this, null != e3 && (n3 = e3.domNode), (this.domNode.parentNode !== t4.domNode || this.domNode.nextSibling !== n3) && this.domNode.insertBefore(t4.domNode, n3), t4.attach();
        }
        length() {
          return this.children.reduce(((t4, e3) => t4 + e3.length()), 0);
        }
        moveChildren(t4, e3) {
          this.children.forEach(((n3) => {
            t4.insertBefore(n3, e3);
          }));
        }
        optimize(t4) {
          if (super.optimize(t4), this.enforceAllowedChildren(), null != this.uiNode && this.uiNode !== this.domNode.firstChild && this.domNode.insertBefore(this.uiNode, this.domNode.firstChild), 0 === this.children.length) if (null != this.statics.defaultChild) {
            const t5 = this.scroll.create(this.statics.defaultChild.blotName);
            this.appendChild(t5);
          } else this.remove();
        }
        path(e3, n3 = false) {
          const [r3, i2] = this.children.find(e3, n3), s2 = [[this, e3]];
          return r3 instanceof t3 ? s2.concat(r3.path(i2, n3)) : (null != r3 && s2.push([r3, i2]), s2);
        }
        removeChild(t4) {
          this.children.remove(t4);
        }
        replaceWith(e3, n3) {
          const r3 = "string" == typeof e3 ? this.scroll.create(e3, n3) : e3;
          return r3 instanceof t3 && this.moveChildren(r3), super.replaceWith(r3);
        }
        split(t4, e3 = false) {
          if (!e3) {
            if (0 === t4) return this;
            if (t4 === this.length()) return this.next;
          }
          const n3 = this.clone();
          return this.parent && this.parent.insertBefore(n3, this.next || void 0), this.children.forEachAt(t4, this.length(), ((t5, r3, i2) => {
            const s2 = t5.split(r3, e3);
            null != s2 && n3.appendChild(s2);
          })), n3;
        }
        splitAfter(t4) {
          const e3 = this.clone();
          for (; null != t4.next; ) e3.appendChild(t4.next);
          return this.parent && this.parent.insertBefore(e3, this.next || void 0), e3;
        }
        unwrap() {
          this.parent && this.moveChildren(this.parent, this.next || void 0), this.remove();
        }
        update(t4, e3) {
          const n3 = [], r3 = [];
          t4.forEach(((t5) => {
            t5.target === this.domNode && "childList" === t5.type && (n3.push(...t5.addedNodes), r3.push(...t5.removedNodes));
          })), r3.forEach(((t5) => {
            if (null != t5.parentNode && "IFRAME" !== t5.tagName && document.body.compareDocumentPosition(t5) & Node.DOCUMENT_POSITION_CONTAINED_BY) return;
            const e4 = this.scroll.find(t5);
            null != e4 && (null == e4.domNode.parentNode || e4.domNode.parentNode === this.domNode) && e4.detach();
          })), n3.filter(((t5) => t5.parentNode === this.domNode && t5 !== this.uiNode)).sort(((t5, e4) => t5 === e4 ? 0 : t5.compareDocumentPosition(e4) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1)).forEach(((t5) => {
            let e4 = null;
            null != t5.nextSibling && (e4 = this.scroll.find(t5.nextSibling));
            const n4 = y(t5, this.scroll);
            (n4.next !== e4 || null == n4.next) && (null != n4.parent && n4.parent.removeChild(this), this.insertBefore(n4, e4 || void 0));
          })), this.enforceAllowedChildren();
        }
      };
      v.uiClass = "";
      const A = v, x = class t3 extends A {
        static create(t4) {
          return super.create(t4);
        }
        static formats(e3, n3) {
          const r3 = n3.query(t3.blotName);
          if (null == r3 || e3.tagName !== r3.tagName) {
            if ("string" == typeof this.tagName) return true;
            if (Array.isArray(this.tagName)) return e3.tagName.toLowerCase();
          }
        }
        constructor(t4, e3) {
          super(t4, e3), this.attributes = new d(this.domNode);
        }
        format(e3, n3) {
          if (e3 !== this.statics.blotName || n3) {
            const t4 = this.scroll.query(e3, r2.INLINE);
            if (null == t4) return;
            t4 instanceof i ? this.attributes.attribute(t4, n3) : n3 && (e3 !== this.statics.blotName || this.formats()[e3] !== n3) && this.replaceWith(e3, n3);
          } else this.children.forEach(((e4) => {
            e4 instanceof t3 || (e4 = e4.wrap(t3.blotName, true)), this.attributes.copy(e4);
          })), this.unwrap();
        }
        formats() {
          const t4 = this.attributes.values(), e3 = this.statics.formats(this.domNode, this.scroll);
          return null != e3 && (t4[this.statics.blotName] = e3), t4;
        }
        formatAt(t4, e3, n3, i2) {
          null != this.formats()[n3] || this.scroll.query(n3, r2.ATTRIBUTE) ? this.isolate(t4, e3).format(n3, i2) : super.formatAt(t4, e3, n3, i2);
        }
        optimize(e3) {
          super.optimize(e3);
          const n3 = this.formats();
          if (0 === Object.keys(n3).length) return this.unwrap();
          const r3 = this.next;
          r3 instanceof t3 && r3.prev === this && (function(t4, e4) {
            if (Object.keys(t4).length !== Object.keys(e4).length) return false;
            for (const n4 in t4) if (t4[n4] !== e4[n4]) return false;
            return true;
          })(n3, r3.formats()) && (r3.moveChildren(this), r3.remove());
        }
        replaceWith(t4, e3) {
          const n3 = super.replaceWith(t4, e3);
          return this.attributes.copy(n3), n3;
        }
        update(t4, e3) {
          super.update(t4, e3), t4.some(((t5) => t5.target === this.domNode && "attributes" === t5.type)) && this.attributes.build();
        }
        wrap(e3, n3) {
          const r3 = super.wrap(e3, n3);
          return r3 instanceof t3 && this.attributes.move(r3), r3;
        }
      };
      x.allowedChildren = [x, m], x.blotName = "inline", x.scope = r2.INLINE_BLOT, x.tagName = "SPAN";
      const N = x, E = class t3 extends A {
        static create(t4) {
          return super.create(t4);
        }
        static formats(e3, n3) {
          const r3 = n3.query(t3.blotName);
          if (null == r3 || e3.tagName !== r3.tagName) {
            if ("string" == typeof this.tagName) return true;
            if (Array.isArray(this.tagName)) return e3.tagName.toLowerCase();
          }
        }
        constructor(t4, e3) {
          super(t4, e3), this.attributes = new d(this.domNode);
        }
        format(e3, n3) {
          const s2 = this.scroll.query(e3, r2.BLOCK);
          null != s2 && (s2 instanceof i ? this.attributes.attribute(s2, n3) : e3 !== this.statics.blotName || n3 ? n3 && (e3 !== this.statics.blotName || this.formats()[e3] !== n3) && this.replaceWith(e3, n3) : this.replaceWith(t3.blotName));
        }
        formats() {
          const t4 = this.attributes.values(), e3 = this.statics.formats(this.domNode, this.scroll);
          return null != e3 && (t4[this.statics.blotName] = e3), t4;
        }
        formatAt(t4, e3, n3, i2) {
          null != this.scroll.query(n3, r2.BLOCK) ? this.format(n3, i2) : super.formatAt(t4, e3, n3, i2);
        }
        insertAt(t4, e3, n3) {
          if (null == n3 || null != this.scroll.query(e3, r2.INLINE)) super.insertAt(t4, e3, n3);
          else {
            const r3 = this.split(t4);
            if (null == r3) throw new Error("Attempt to insertAt after block boundaries");
            {
              const t5 = this.scroll.create(e3, n3);
              r3.parent.insertBefore(t5, r3);
            }
          }
        }
        replaceWith(t4, e3) {
          const n3 = super.replaceWith(t4, e3);
          return this.attributes.copy(n3), n3;
        }
        update(t4, e3) {
          super.update(t4, e3), t4.some(((t5) => t5.target === this.domNode && "attributes" === t5.type)) && this.attributes.build();
        }
      };
      E.blotName = "block", E.scope = r2.BLOCK_BLOT, E.tagName = "P", E.allowedChildren = [N, E, m];
      const w = E, q = class extends A {
        checkMerge() {
          return null !== this.next && this.next.statics.blotName === this.statics.blotName;
        }
        deleteAt(t3, e3) {
          super.deleteAt(t3, e3), this.enforceAllowedChildren();
        }
        formatAt(t3, e3, n3, r3) {
          super.formatAt(t3, e3, n3, r3), this.enforceAllowedChildren();
        }
        insertAt(t3, e3, n3) {
          super.insertAt(t3, e3, n3), this.enforceAllowedChildren();
        }
        optimize(t3) {
          super.optimize(t3), this.children.length > 0 && null != this.next && this.checkMerge() && (this.next.moveChildren(this), this.next.remove());
        }
      };
      q.blotName = "container", q.scope = r2.BLOCK_BLOT;
      const k = q, _ = class extends m {
        static formats(t3, e3) {
        }
        format(t3, e3) {
          super.formatAt(0, this.length(), t3, e3);
        }
        formatAt(t3, e3, n3, r3) {
          0 === t3 && e3 === this.length() ? this.format(n3, r3) : super.formatAt(t3, e3, n3, r3);
        }
        formats() {
          return this.statics.formats(this.domNode, this.scroll);
        }
      }, L = { attributes: true, characterData: true, characterDataOldValue: true, childList: true, subtree: true }, S = class extends A {
        constructor(t3, e3) {
          super(null, e3), this.registry = t3, this.scroll = this, this.build(), this.observer = new MutationObserver(((t4) => {
            this.update(t4);
          })), this.observer.observe(this.domNode, L), this.attach();
        }
        create(t3, e3) {
          return this.registry.create(this, t3, e3);
        }
        find(t3, e3 = false) {
          const n3 = this.registry.find(t3, e3);
          return n3 ? n3.scroll === this ? n3 : e3 ? this.find(n3.scroll.domNode.parentNode, true) : null : null;
        }
        query(t3, e3 = r2.ANY) {
          return this.registry.query(t3, e3);
        }
        register(...t3) {
          return this.registry.register(...t3);
        }
        build() {
          null != this.scroll && super.build();
        }
        detach() {
          super.detach(), this.observer.disconnect();
        }
        deleteAt(t3, e3) {
          this.update(), 0 === t3 && e3 === this.length() ? this.children.forEach(((t4) => {
            t4.remove();
          })) : super.deleteAt(t3, e3);
        }
        formatAt(t3, e3, n3, r3) {
          this.update(), super.formatAt(t3, e3, n3, r3);
        }
        insertAt(t3, e3, n3) {
          this.update(), super.insertAt(t3, e3, n3);
        }
        optimize(t3 = [], e3 = {}) {
          super.optimize(e3);
          const n3 = e3.mutationsMap || /* @__PURE__ */ new WeakMap();
          let r3 = Array.from(this.observer.takeRecords());
          for (; r3.length > 0; ) t3.push(r3.pop());
          const i2 = (t4, e4 = true) => {
            null == t4 || t4 === this || null != t4.domNode.parentNode && (n3.has(t4.domNode) || n3.set(t4.domNode, []), e4 && i2(t4.parent));
          }, s2 = (t4) => {
            n3.has(t4.domNode) && (t4 instanceof A && t4.children.forEach(s2), n3.delete(t4.domNode), t4.optimize(e3));
          };
          let o2 = t3;
          for (let e4 = 0; o2.length > 0; e4 += 1) {
            if (e4 >= 100) throw new Error("[Parchment] Maximum optimize iterations reached");
            for (o2.forEach(((t4) => {
              const e5 = this.find(t4.target, true);
              null != e5 && (e5.domNode === t4.target && ("childList" === t4.type ? (i2(this.find(t4.previousSibling, false)), Array.from(t4.addedNodes).forEach(((t5) => {
                const e6 = this.find(t5, false);
                i2(e6, false), e6 instanceof A && e6.children.forEach(((t6) => {
                  i2(t6, false);
                }));
              }))) : "attributes" === t4.type && i2(e5.prev)), i2(e5));
            })), this.children.forEach(s2), o2 = Array.from(this.observer.takeRecords()), r3 = o2.slice(); r3.length > 0; ) t3.push(r3.pop());
          }
        }
        update(t3, e3 = {}) {
          t3 = t3 || this.observer.takeRecords();
          const n3 = /* @__PURE__ */ new WeakMap();
          t3.map(((t4) => {
            const e4 = this.find(t4.target, true);
            return null == e4 ? null : n3.has(e4.domNode) ? (n3.get(e4.domNode).push(t4), null) : (n3.set(e4.domNode, [t4]), e4);
          })).forEach(((t4) => {
            null != t4 && t4 !== this && n3.has(t4.domNode) && t4.update(n3.get(t4.domNode) || [], e3);
          })), e3.mutationsMap = n3, n3.has(this.domNode) && super.update(n3.get(this.domNode), e3), this.optimize(t3, e3);
        }
      };
      S.blotName = "scroll", S.defaultChild = w, S.allowedChildren = [w, k], S.scope = r2.BLOCK_BLOT, S.tagName = "DIV";
      const O = S, T = class t3 extends m {
        static create(t4) {
          return document.createTextNode(t4);
        }
        static value(t4) {
          return t4.data;
        }
        constructor(t4, e3) {
          super(t4, e3), this.text = this.statics.value(this.domNode);
        }
        deleteAt(t4, e3) {
          this.domNode.data = this.text = this.text.slice(0, t4) + this.text.slice(t4 + e3);
        }
        index(t4, e3) {
          return this.domNode === t4 ? e3 : -1;
        }
        insertAt(t4, e3, n3) {
          null == n3 ? (this.text = this.text.slice(0, t4) + e3 + this.text.slice(t4), this.domNode.data = this.text) : super.insertAt(t4, e3, n3);
        }
        length() {
          return this.text.length;
        }
        optimize(e3) {
          super.optimize(e3), this.text = this.statics.value(this.domNode), 0 === this.text.length ? this.remove() : this.next instanceof t3 && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove());
        }
        position(t4, e3 = false) {
          return [this.domNode, t4];
        }
        split(t4, e3 = false) {
          if (!e3) {
            if (0 === t4) return this;
            if (t4 === this.length()) return this.next;
          }
          const n3 = this.scroll.create(this.domNode.splitText(t4));
          return this.parent.insertBefore(n3, this.next || void 0), this.text = this.statics.value(this.domNode), n3;
        }
        update(t4, e3) {
          t4.some(((t5) => "characterData" === t5.type && t5.target === this.domNode)) && (this.text = this.statics.value(this.domNode));
        }
        value() {
          return this.text;
        }
      };
      T.blotName = "text", T.scope = r2.INLINE_BLOT;
      const j = T;
    } }, e = {};
    function n(r2) {
      var i = e[r2];
      if (void 0 !== i) return i.exports;
      var s = e[r2] = { id: r2, loaded: false, exports: {} };
      return t[r2](s, s.exports, n), s.loaded = true, s.exports;
    }
    n.n = function(t2) {
      var e2 = t2 && t2.__esModule ? function() {
        return t2.default;
      } : function() {
        return t2;
      };
      return n.d(e2, { a: e2 }), e2;
    }, n.d = function(t2, e2) {
      for (var r2 in e2) n.o(e2, r2) && !n.o(t2, r2) && Object.defineProperty(t2, r2, { enumerable: true, get: e2[r2] });
    }, n.g = (function() {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t2) {
        if ("object" == typeof window) return window;
      }
    })(), n.o = function(t2, e2) {
      return Object.prototype.hasOwnProperty.call(t2, e2);
    }, n.r = function(t2) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
    }, n.nmd = function(t2) {
      return t2.paths = [], t2.children || (t2.children = []), t2;
    };
    var r = {};
    return (function() {
      "use strict";
      n.d(r, { default: function() {
        return It;
      } });
      var t2 = n(3729), e2 = n(8276), i = n(7912), s = n(6003);
      class o extends s.ClassAttributor {
        add(t3, e3) {
          let n2 = 0;
          if ("+1" === e3 || "-1" === e3) {
            const r2 = this.value(t3) || 0;
            n2 = "+1" === e3 ? r2 + 1 : r2 - 1;
          } else "number" == typeof e3 && (n2 = e3);
          return 0 === n2 ? (this.remove(t3), true) : super.add(t3, n2.toString());
        }
        canAdd(t3, e3) {
          return super.canAdd(t3, e3) || super.canAdd(t3, parseInt(e3, 10));
        }
        value(t3) {
          return parseInt(super.value(t3), 10) || void 0;
        }
      }
      var l = new o("indent", "ql-indent", { scope: s.Scope.BLOCK, whitelist: [1, 2, 3, 4, 5, 6, 7, 8] }), a = n(9698);
      class c extends a.Ay {
        static blotName = "blockquote";
        static tagName = "blockquote";
      }
      var u = c;
      class h extends a.Ay {
        static blotName = "header";
        static tagName = ["H1", "H2", "H3", "H4", "H5", "H6"];
        static formats(t3) {
          return this.tagName.indexOf(t3.tagName) + 1;
        }
      }
      var d = h, f = n(580), p = n(6142);
      class g extends f.A {
      }
      g.blotName = "list-container", g.tagName = "OL";
      class m extends a.Ay {
        static create(t3) {
          const e3 = super.create();
          return e3.setAttribute("data-list", t3), e3;
        }
        static formats(t3) {
          return t3.getAttribute("data-list") || void 0;
        }
        static register() {
          p.Ay.register(g);
        }
        constructor(t3, e3) {
          super(t3, e3);
          const n2 = e3.ownerDocument.createElement("span"), r2 = (n3) => {
            if (!t3.isEnabled()) return;
            const r3 = this.statics.formats(e3, t3);
            "checked" === r3 ? (this.format("list", "unchecked"), n3.preventDefault()) : "unchecked" === r3 && (this.format("list", "checked"), n3.preventDefault());
          };
          n2.addEventListener("mousedown", r2), n2.addEventListener("touchstart", r2), this.attachUI(n2);
        }
        format(t3, e3) {
          t3 === this.statics.blotName && e3 ? this.domNode.setAttribute("data-list", e3) : super.format(t3, e3);
        }
      }
      m.blotName = "list", m.tagName = "LI", g.allowedChildren = [m], m.requiredContainer = g;
      var b = n(9541), y = n(8638), v = n(6772), A = n(664), x = n(4850);
      class N extends x.A {
        static blotName = "bold";
        static tagName = ["STRONG", "B"];
        static create() {
          return super.create();
        }
        static formats() {
          return true;
        }
        optimize(t3) {
          super.optimize(t3), this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName);
        }
      }
      var E = N;
      class w extends x.A {
        static blotName = "link";
        static tagName = "A";
        static SANITIZED_URL = "about:blank";
        static PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel", "sms"];
        static create(t3) {
          const e3 = super.create(t3);
          return e3.setAttribute("href", this.sanitize(t3)), e3.setAttribute("rel", "noopener noreferrer"), e3.setAttribute("target", "_blank"), e3;
        }
        static formats(t3) {
          return t3.getAttribute("href");
        }
        static sanitize(t3) {
          return q(t3, this.PROTOCOL_WHITELIST) ? t3 : this.SANITIZED_URL;
        }
        format(t3, e3) {
          t3 === this.statics.blotName && e3 ? this.domNode.setAttribute("href", this.constructor.sanitize(e3)) : super.format(t3, e3);
        }
      }
      function q(t3, e3) {
        const n2 = document.createElement("a");
        n2.href = t3;
        const r2 = n2.href.slice(0, n2.href.indexOf(":"));
        return e3.indexOf(r2) > -1;
      }
      class k extends x.A {
        static blotName = "script";
        static tagName = ["SUB", "SUP"];
        static create(t3) {
          return "super" === t3 ? document.createElement("sup") : "sub" === t3 ? document.createElement("sub") : super.create(t3);
        }
        static formats(t3) {
          return "SUB" === t3.tagName ? "sub" : "SUP" === t3.tagName ? "super" : void 0;
        }
      }
      var _ = k;
      class L extends x.A {
        static blotName = "underline";
        static tagName = "U";
      }
      var S = L, O = n(746);
      class T extends O.A {
        static blotName = "formula";
        static className = "ql-formula";
        static tagName = "SPAN";
        static create(t3) {
          if (null == window.katex) throw new Error("Formula module requires KaTeX.");
          const e3 = super.create(t3);
          return "string" == typeof t3 && (window.katex.render(t3, e3, { throwOnError: false, errorColor: "#f00" }), e3.setAttribute("data-value", t3)), e3;
        }
        static value(t3) {
          return t3.getAttribute("data-value");
        }
        html() {
          const { formula: t3 } = this.value();
          return `<span>${t3}</span>`;
        }
      }
      var j = T;
      const C = ["alt", "height", "width"];
      class R extends s.EmbedBlot {
        static blotName = "image";
        static tagName = "IMG";
        static create(t3) {
          const e3 = super.create(t3);
          return "string" == typeof t3 && e3.setAttribute("src", this.sanitize(t3)), e3;
        }
        static formats(t3) {
          return C.reduce(((e3, n2) => (t3.hasAttribute(n2) && (e3[n2] = t3.getAttribute(n2)), e3)), {});
        }
        static match(t3) {
          return /\.(jpe?g|gif|png)$/.test(t3) || /^data:image\/.+;base64/.test(t3);
        }
        static sanitize(t3) {
          return q(t3, ["http", "https", "data"]) ? t3 : "//:0";
        }
        static value(t3) {
          return t3.getAttribute("src");
        }
        format(t3, e3) {
          C.indexOf(t3) > -1 ? e3 ? this.domNode.setAttribute(t3, e3) : this.domNode.removeAttribute(t3) : super.format(t3, e3);
        }
      }
      var I = R;
      const B = ["height", "width"];
      class M extends a.zo {
        static blotName = "video";
        static className = "ql-video";
        static tagName = "IFRAME";
        static create(t3) {
          const e3 = super.create(t3);
          return e3.setAttribute("frameborder", "0"), e3.setAttribute("allowfullscreen", "true"), e3.setAttribute("src", this.sanitize(t3)), e3;
        }
        static formats(t3) {
          return B.reduce(((e3, n2) => (t3.hasAttribute(n2) && (e3[n2] = t3.getAttribute(n2)), e3)), {});
        }
        static sanitize(t3) {
          return w.sanitize(t3);
        }
        static value(t3) {
          return t3.getAttribute("src");
        }
        format(t3, e3) {
          B.indexOf(t3) > -1 ? e3 ? this.domNode.setAttribute(t3, e3) : this.domNode.removeAttribute(t3) : super.format(t3, e3);
        }
        html() {
          const { video: t3 } = this.value();
          return `<a href="${t3}">${t3}</a>`;
        }
      }
      var U = M, D = n(9404), P = n(5232), z = n.n(P), F = n(4266), H = n(3036), $ = n(4541), V = n(5508), K = n(584);
      const W = new s.ClassAttributor("code-token", "hljs", { scope: s.Scope.INLINE });
      class Z extends x.A {
        static formats(t3, e3) {
          for (; null != t3 && t3 !== e3.domNode; ) {
            if (t3.classList && t3.classList.contains(D.Ay.className)) return super.formats(t3, e3);
            t3 = t3.parentNode;
          }
        }
        constructor(t3, e3, n2) {
          super(t3, e3, n2), W.add(this.domNode, n2);
        }
        format(t3, e3) {
          t3 !== Z.blotName ? super.format(t3, e3) : e3 ? W.add(this.domNode, e3) : (W.remove(this.domNode), this.domNode.classList.remove(this.statics.className));
        }
        optimize() {
          super.optimize(...arguments), W.value(this.domNode) || this.unwrap();
        }
      }
      Z.blotName = "code-token", Z.className = "ql-token";
      class G extends D.Ay {
        static create(t3) {
          const e3 = super.create(t3);
          return "string" == typeof t3 && e3.setAttribute("data-language", t3), e3;
        }
        static formats(t3) {
          return t3.getAttribute("data-language") || "plain";
        }
        static register() {
        }
        format(t3, e3) {
          t3 === this.statics.blotName && e3 ? this.domNode.setAttribute("data-language", e3) : super.format(t3, e3);
        }
        replaceWith(t3, e3) {
          return this.formatAt(0, this.length(), Z.blotName, false), super.replaceWith(t3, e3);
        }
      }
      class X extends D.EJ {
        attach() {
          super.attach(), this.forceNext = false, this.scroll.emitMount(this);
        }
        format(t3, e3) {
          t3 === G.blotName && (this.forceNext = true, this.children.forEach(((n2) => {
            n2.format(t3, e3);
          })));
        }
        formatAt(t3, e3, n2, r2) {
          n2 === G.blotName && (this.forceNext = true), super.formatAt(t3, e3, n2, r2);
        }
        highlight(t3) {
          let e3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (null == this.children.head) return;
          const n2 = `${Array.from(this.domNode.childNodes).filter(((t4) => t4 !== this.uiNode)).map(((t4) => t4.textContent)).join("\n")}
`, r2 = G.formats(this.children.head.domNode);
          if (e3 || this.forceNext || this.cachedText !== n2) {
            if (n2.trim().length > 0 || null == this.cachedText) {
              const e4 = this.children.reduce(((t4, e5) => t4.concat((0, a.mG)(e5, false))), new (z())()), i2 = t3(n2, r2);
              e4.diff(i2).reduce(((t4, e5) => {
                let { retain: n3, attributes: r3 } = e5;
                return n3 ? (r3 && Object.keys(r3).forEach(((e6) => {
                  [G.blotName, Z.blotName].includes(e6) && this.formatAt(t4, n3, e6, r3[e6]);
                })), t4 + n3) : t4;
              }), 0);
            }
            this.cachedText = n2, this.forceNext = false;
          }
        }
        html(t3, e3) {
          const [n2] = this.children.find(t3);
          return `<pre data-language="${n2 ? G.formats(n2.domNode) : "plain"}">
${(0, V.X)(this.code(t3, e3))}
</pre>`;
        }
        optimize(t3) {
          if (super.optimize(t3), null != this.parent && null != this.children.head && null != this.uiNode) {
            const t4 = G.formats(this.children.head.domNode);
            t4 !== this.uiNode.value && (this.uiNode.value = t4);
          }
        }
      }
      X.allowedChildren = [G], G.requiredContainer = X, G.allowedChildren = [Z, $.A, V.A, H.A];
      class Q extends F.A {
        static register() {
          p.Ay.register(Z, true), p.Ay.register(G, true), p.Ay.register(X, true);
        }
        constructor(t3, e3) {
          if (super(t3, e3), null == this.options.hljs) throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
          this.languages = this.options.languages.reduce(((t4, e4) => {
            let { key: n2 } = e4;
            return t4[n2] = true, t4;
          }), {}), this.highlightBlot = this.highlightBlot.bind(this), this.initListener(), this.initTimer();
        }
        initListener() {
          this.quill.on(p.Ay.events.SCROLL_BLOT_MOUNT, ((t3) => {
            if (!(t3 instanceof X)) return;
            const e3 = this.quill.root.ownerDocument.createElement("select");
            this.options.languages.forEach(((t4) => {
              let { key: n2, label: r2 } = t4;
              const i2 = e3.ownerDocument.createElement("option");
              i2.textContent = r2, i2.setAttribute("value", n2), e3.appendChild(i2);
            })), e3.addEventListener("change", (() => {
              t3.format(G.blotName, e3.value), this.quill.root.focus(), this.highlight(t3, true);
            })), null == t3.uiNode && (t3.attachUI(e3), t3.children.head && (e3.value = G.formats(t3.children.head.domNode)));
          }));
        }
        initTimer() {
          let t3 = null;
          this.quill.on(p.Ay.events.SCROLL_OPTIMIZE, (() => {
            t3 && clearTimeout(t3), t3 = setTimeout((() => {
              this.highlight(), t3 = null;
            }), this.options.interval);
          }));
        }
        highlight() {
          let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, e3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.quill.selection.composing) return;
          this.quill.update(p.Ay.sources.USER);
          const n2 = this.quill.getSelection();
          (null == t3 ? this.quill.scroll.descendants(X) : [t3]).forEach(((t4) => {
            t4.highlight(this.highlightBlot, e3);
          })), this.quill.update(p.Ay.sources.SILENT), null != n2 && this.quill.setSelection(n2, p.Ay.sources.SILENT);
        }
        highlightBlot(t3) {
          let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "plain";
          if (e3 = this.languages[e3] ? e3 : "plain", "plain" === e3) return (0, V.X)(t3).split("\n").reduce(((t4, n3, r2) => (0 !== r2 && t4.insert("\n", { [D.Ay.blotName]: e3 }), t4.insert(n3))), new (z())());
          const n2 = this.quill.root.ownerDocument.createElement("div");
          return n2.classList.add(D.Ay.className), n2.innerHTML = ((t4, e4, n3) => {
            if ("string" == typeof t4.versionString) {
              const r2 = t4.versionString.split(".")[0];
              if (parseInt(r2, 10) >= 11) return t4.highlight(n3, { language: e4 }).value;
            }
            return t4.highlight(e4, n3).value;
          })(this.options.hljs, e3, t3), (0, K.hV)(this.quill.scroll, n2, [(t4, e4) => {
            const n3 = W.value(t4);
            return n3 ? e4.compose(new (z())().retain(e4.length(), { [Z.blotName]: n3 })) : e4;
          }], [(t4, n3) => t4.data.split("\n").reduce(((t5, n4, r2) => (0 !== r2 && t5.insert("\n", { [D.Ay.blotName]: e3 }), t5.insert(n4))), n3)], /* @__PURE__ */ new WeakMap());
        }
      }
      Q.DEFAULTS = { hljs: window.hljs, interval: 1e3, languages: [{ key: "plain", label: "Plain" }, { key: "bash", label: "Bash" }, { key: "cpp", label: "C++" }, { key: "cs", label: "C#" }, { key: "css", label: "CSS" }, { key: "diff", label: "Diff" }, { key: "xml", label: "HTML/XML" }, { key: "java", label: "Java" }, { key: "javascript", label: "JavaScript" }, { key: "markdown", label: "Markdown" }, { key: "php", label: "PHP" }, { key: "python", label: "Python" }, { key: "ruby", label: "Ruby" }, { key: "sql", label: "SQL" }] };
      class J extends a.Ay {
        static blotName = "table";
        static tagName = "TD";
        static create(t3) {
          const e3 = super.create();
          return t3 ? e3.setAttribute("data-row", t3) : e3.setAttribute("data-row", nt()), e3;
        }
        static formats(t3) {
          if (t3.hasAttribute("data-row")) return t3.getAttribute("data-row");
        }
        cellOffset() {
          return this.parent ? this.parent.children.indexOf(this) : -1;
        }
        format(t3, e3) {
          t3 === J.blotName && e3 ? this.domNode.setAttribute("data-row", e3) : super.format(t3, e3);
        }
        row() {
          return this.parent;
        }
        rowOffset() {
          return this.row() ? this.row().rowOffset() : -1;
        }
        table() {
          return this.row() && this.row().table();
        }
      }
      class Y extends f.A {
        static blotName = "table-row";
        static tagName = "TR";
        checkMerge() {
          if (super.checkMerge() && null != this.next.children.head) {
            const t3 = this.children.head.formats(), e3 = this.children.tail.formats(), n2 = this.next.children.head.formats(), r2 = this.next.children.tail.formats();
            return t3.table === e3.table && t3.table === n2.table && t3.table === r2.table;
          }
          return false;
        }
        optimize(t3) {
          super.optimize(t3), this.children.forEach(((t4) => {
            if (null == t4.next) return;
            const e3 = t4.formats(), n2 = t4.next.formats();
            if (e3.table !== n2.table) {
              const e4 = this.splitAfter(t4);
              e4 && e4.optimize(), this.prev && this.prev.optimize();
            }
          }));
        }
        rowOffset() {
          return this.parent ? this.parent.children.indexOf(this) : -1;
        }
        table() {
          return this.parent && this.parent.parent;
        }
      }
      class tt extends f.A {
        static blotName = "table-body";
        static tagName = "TBODY";
      }
      class et extends f.A {
        static blotName = "table-container";
        static tagName = "TABLE";
        balanceCells() {
          const t3 = this.descendants(Y), e3 = t3.reduce(((t4, e4) => Math.max(e4.children.length, t4)), 0);
          t3.forEach(((t4) => {
            new Array(e3 - t4.children.length).fill(0).forEach((() => {
              let e4;
              null != t4.children.head && (e4 = J.formats(t4.children.head.domNode));
              const n2 = this.scroll.create(J.blotName, e4);
              t4.appendChild(n2), n2.optimize();
            }));
          }));
        }
        cells(t3) {
          return this.rows().map(((e3) => e3.children.at(t3)));
        }
        deleteColumn(t3) {
          const [e3] = this.descendant(tt);
          null != e3 && null != e3.children.head && e3.children.forEach(((e4) => {
            const n2 = e4.children.at(t3);
            null != n2 && n2.remove();
          }));
        }
        insertColumn(t3) {
          const [e3] = this.descendant(tt);
          null != e3 && null != e3.children.head && e3.children.forEach(((e4) => {
            const n2 = e4.children.at(t3), r2 = J.formats(e4.children.head.domNode), i2 = this.scroll.create(J.blotName, r2);
            e4.insertBefore(i2, n2);
          }));
        }
        insertRow(t3) {
          const [e3] = this.descendant(tt);
          if (null == e3 || null == e3.children.head) return;
          const n2 = nt(), r2 = this.scroll.create(Y.blotName);
          e3.children.head.children.forEach((() => {
            const t4 = this.scroll.create(J.blotName, n2);
            r2.appendChild(t4);
          }));
          const i2 = e3.children.at(t3);
          e3.insertBefore(r2, i2);
        }
        rows() {
          const t3 = this.children.head;
          return null == t3 ? [] : t3.children.map(((t4) => t4));
        }
      }
      function nt() {
        return `row-${Math.random().toString(36).slice(2, 6)}`;
      }
      et.allowedChildren = [tt], tt.requiredContainer = et, tt.allowedChildren = [Y], Y.requiredContainer = tt, Y.allowedChildren = [J], J.requiredContainer = Y;
      class rt extends F.A {
        static register() {
          p.Ay.register(J), p.Ay.register(Y), p.Ay.register(tt), p.Ay.register(et);
        }
        constructor() {
          super(...arguments), this.listenBalanceCells();
        }
        balanceTables() {
          this.quill.scroll.descendants(et).forEach(((t3) => {
            t3.balanceCells();
          }));
        }
        deleteColumn() {
          const [t3, , e3] = this.getTable();
          null != e3 && (t3.deleteColumn(e3.cellOffset()), this.quill.update(p.Ay.sources.USER));
        }
        deleteRow() {
          const [, t3] = this.getTable();
          null != t3 && (t3.remove(), this.quill.update(p.Ay.sources.USER));
        }
        deleteTable() {
          const [t3] = this.getTable();
          if (null == t3) return;
          const e3 = t3.offset();
          t3.remove(), this.quill.update(p.Ay.sources.USER), this.quill.setSelection(e3, p.Ay.sources.SILENT);
        }
        getTable() {
          let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.quill.getSelection();
          if (null == t3) return [null, null, null, -1];
          const [e3, n2] = this.quill.getLine(t3.index);
          if (null == e3 || e3.statics.blotName !== J.blotName) return [null, null, null, -1];
          const r2 = e3.parent;
          return [r2.parent.parent, r2, e3, n2];
        }
        insertColumn(t3) {
          const e3 = this.quill.getSelection();
          if (!e3) return;
          const [n2, r2, i2] = this.getTable(e3);
          if (null == i2) return;
          const s2 = i2.cellOffset();
          n2.insertColumn(s2 + t3), this.quill.update(p.Ay.sources.USER);
          let o2 = r2.rowOffset();
          0 === t3 && (o2 += 1), this.quill.setSelection(e3.index + o2, e3.length, p.Ay.sources.SILENT);
        }
        insertColumnLeft() {
          this.insertColumn(0);
        }
        insertColumnRight() {
          this.insertColumn(1);
        }
        insertRow(t3) {
          const e3 = this.quill.getSelection();
          if (!e3) return;
          const [n2, r2, i2] = this.getTable(e3);
          if (null == i2) return;
          const s2 = r2.rowOffset();
          n2.insertRow(s2 + t3), this.quill.update(p.Ay.sources.USER), t3 > 0 ? this.quill.setSelection(e3, p.Ay.sources.SILENT) : this.quill.setSelection(e3.index + r2.children.length, e3.length, p.Ay.sources.SILENT);
        }
        insertRowAbove() {
          this.insertRow(0);
        }
        insertRowBelow() {
          this.insertRow(1);
        }
        insertTable(t3, e3) {
          const n2 = this.quill.getSelection();
          if (null == n2) return;
          const r2 = new Array(t3).fill(0).reduce(((t4) => {
            const n3 = new Array(e3).fill("\n").join("");
            return t4.insert(n3, { table: nt() });
          }), new (z())().retain(n2.index));
          this.quill.updateContents(r2, p.Ay.sources.USER), this.quill.setSelection(n2.index, p.Ay.sources.SILENT), this.balanceTables();
        }
        listenBalanceCells() {
          this.quill.on(p.Ay.events.SCROLL_OPTIMIZE, ((t3) => {
            t3.some(((t4) => !!["TD", "TR", "TBODY", "TABLE"].includes(t4.target.tagName) && (this.quill.once(p.Ay.events.TEXT_CHANGE, ((t5, e3, n2) => {
              n2 === p.Ay.sources.USER && this.balanceTables();
            })), true)));
          }));
        }
      }
      var it = rt;
      const st = (0, n(6078).A)("quill:toolbar");
      class ot extends F.A {
        constructor(t3, e3) {
          if (super(t3, e3), Array.isArray(this.options.container)) {
            const e4 = document.createElement("div");
            e4.setAttribute("role", "toolbar"), (function(t4, e5) {
              Array.isArray(e5[0]) || (e5 = [e5]), e5.forEach(((e6) => {
                const n2 = document.createElement("span");
                n2.classList.add("ql-formats"), e6.forEach(((t5) => {
                  if ("string" == typeof t5) lt(n2, t5);
                  else {
                    const e7 = Object.keys(t5)[0], r2 = t5[e7];
                    Array.isArray(r2) ? (function(t6, e8, n3) {
                      const r3 = document.createElement("select");
                      r3.classList.add(`ql-${e8}`), n3.forEach(((t7) => {
                        const e9 = document.createElement("option");
                        false !== t7 ? e9.setAttribute("value", String(t7)) : e9.setAttribute("selected", "selected"), r3.appendChild(e9);
                      })), t6.appendChild(r3);
                    })(n2, e7, r2) : lt(n2, e7, r2);
                  }
                })), t4.appendChild(n2);
              }));
            })(e4, this.options.container), t3.container?.parentNode?.insertBefore(e4, t3.container), this.container = e4;
          } else "string" == typeof this.options.container ? this.container = document.querySelector(this.options.container) : this.container = this.options.container;
          this.container instanceof HTMLElement ? (this.container.classList.add("ql-toolbar"), this.controls = [], this.handlers = {}, this.options.handlers && Object.keys(this.options.handlers).forEach(((t4) => {
            const e4 = this.options.handlers?.[t4];
            e4 && this.addHandler(t4, e4);
          })), Array.from(this.container.querySelectorAll("button, select")).forEach(((t4) => {
            this.attach(t4);
          })), this.quill.on(p.Ay.events.EDITOR_CHANGE, (() => {
            const [t4] = this.quill.selection.getRange();
            this.update(t4);
          }))) : st.error("Container required for toolbar", this.options);
        }
        addHandler(t3, e3) {
          this.handlers[t3] = e3;
        }
        attach(t3) {
          let e3 = Array.from(t3.classList).find(((t4) => 0 === t4.indexOf("ql-")));
          if (!e3) return;
          if (e3 = e3.slice(3), "BUTTON" === t3.tagName && t3.setAttribute("type", "button"), null == this.handlers[e3] && null == this.quill.scroll.query(e3)) return void st.warn("ignoring attaching to nonexistent format", e3, t3);
          const n2 = "SELECT" === t3.tagName ? "change" : "click";
          t3.addEventListener(n2, ((n3) => {
            let r2;
            if ("SELECT" === t3.tagName) {
              if (t3.selectedIndex < 0) return;
              const e4 = t3.options[t3.selectedIndex];
              r2 = !e4.hasAttribute("selected") && (e4.value || false);
            } else r2 = !t3.classList.contains("ql-active") && (t3.value || !t3.hasAttribute("value")), n3.preventDefault();
            this.quill.focus();
            const [i2] = this.quill.selection.getRange();
            if (null != this.handlers[e3]) this.handlers[e3].call(this, r2);
            else if (this.quill.scroll.query(e3).prototype instanceof s.EmbedBlot) {
              if (r2 = prompt(`Enter ${e3}`), !r2) return;
              this.quill.updateContents(new (z())().retain(i2.index).delete(i2.length).insert({ [e3]: r2 }), p.Ay.sources.USER);
            } else this.quill.format(e3, r2, p.Ay.sources.USER);
            this.update(i2);
          })), this.controls.push([e3, t3]);
        }
        update(t3) {
          const e3 = null == t3 ? {} : this.quill.getFormat(t3);
          this.controls.forEach(((n2) => {
            const [r2, i2] = n2;
            if ("SELECT" === i2.tagName) {
              let n3 = null;
              if (null == t3) n3 = null;
              else if (null == e3[r2]) n3 = i2.querySelector("option[selected]");
              else if (!Array.isArray(e3[r2])) {
                let t4 = e3[r2];
                "string" == typeof t4 && (t4 = t4.replace(/"/g, '\\"')), n3 = i2.querySelector(`option[value="${t4}"]`);
              }
              null == n3 ? (i2.value = "", i2.selectedIndex = -1) : n3.selected = true;
            } else if (null == t3) i2.classList.remove("ql-active"), i2.setAttribute("aria-pressed", "false");
            else if (i2.hasAttribute("value")) {
              const t4 = e3[r2], n3 = t4 === i2.getAttribute("value") || null != t4 && t4.toString() === i2.getAttribute("value") || null == t4 && !i2.getAttribute("value");
              i2.classList.toggle("ql-active", n3), i2.setAttribute("aria-pressed", n3.toString());
            } else {
              const t4 = null != e3[r2];
              i2.classList.toggle("ql-active", t4), i2.setAttribute("aria-pressed", t4.toString());
            }
          }));
        }
      }
      function lt(t3, e3, n2) {
        const r2 = document.createElement("button");
        r2.setAttribute("type", "button"), r2.classList.add(`ql-${e3}`), r2.setAttribute("aria-pressed", "false"), null != n2 ? (r2.value = n2, r2.setAttribute("aria-label", `${e3}: ${n2}`)) : r2.setAttribute("aria-label", e3), t3.appendChild(r2);
      }
      ot.DEFAULTS = {}, ot.DEFAULTS = { container: null, handlers: { clean() {
        const t3 = this.quill.getSelection();
        if (null != t3) if (0 === t3.length) {
          const t4 = this.quill.getFormat();
          Object.keys(t4).forEach(((t5) => {
            null != this.quill.scroll.query(t5, s.Scope.INLINE) && this.quill.format(t5, false, p.Ay.sources.USER);
          }));
        } else this.quill.removeFormat(t3.index, t3.length, p.Ay.sources.USER);
      }, direction(t3) {
        const { align: e3 } = this.quill.getFormat();
        "rtl" === t3 && null == e3 ? this.quill.format("align", "right", p.Ay.sources.USER) : t3 || "right" !== e3 || this.quill.format("align", false, p.Ay.sources.USER), this.quill.format("direction", t3, p.Ay.sources.USER);
      }, indent(t3) {
        const e3 = this.quill.getSelection(), n2 = this.quill.getFormat(e3), r2 = parseInt(n2.indent || 0, 10);
        if ("+1" === t3 || "-1" === t3) {
          let e4 = "+1" === t3 ? 1 : -1;
          "rtl" === n2.direction && (e4 *= -1), this.quill.format("indent", r2 + e4, p.Ay.sources.USER);
        }
      }, link(t3) {
        true === t3 && (t3 = prompt("Enter link URL:")), this.quill.format("link", t3, p.Ay.sources.USER);
      }, list(t3) {
        const e3 = this.quill.getSelection(), n2 = this.quill.getFormat(e3);
        "check" === t3 ? "checked" === n2.list || "unchecked" === n2.list ? this.quill.format("list", false, p.Ay.sources.USER) : this.quill.format("list", "unchecked", p.Ay.sources.USER) : this.quill.format("list", t3, p.Ay.sources.USER);
      } } };
      const at = '<svg viewbox="0 0 18 18"><polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"/><polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"/><line class="ql-stroke" x1="10" x2="8" y1="5" y2="13"/></svg>';
      var ct = { align: { "": '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"/></svg>', center: '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"/><line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"/></svg>', right: '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"/></svg>', justify: '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="3" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="3" y1="4" y2="4"/></svg>' }, background: '<svg viewbox="0 0 18 18"><g class="ql-fill ql-color-label"><polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"/><rect height="1" width="1" x="4" y="4"/><polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"/><rect height="1" width="1" x="2" y="6"/><rect height="1" width="1" x="3" y="5"/><rect height="1" width="1" x="4" y="7"/><polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"/><rect height="1" width="1" x="2" y="12"/><rect height="1" width="1" x="2" y="9"/><rect height="1" width="1" x="2" y="15"/><polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"/><rect height="1" width="1" x="3" y="8"/><path d="M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z"/><path d="M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z"/><path d="M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z"/><rect height="1" width="1" x="12" y="2"/><rect height="1" width="1" x="11" y="3"/><path d="M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z"/><rect height="1" width="1" x="2" y="3"/><rect height="1" width="1" x="6" y="2"/><rect height="1" width="1" x="3" y="2"/><rect height="1" width="1" x="5" y="3"/><rect height="1" width="1" x="9" y="2"/><rect height="1" width="1" x="15" y="14"/><polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"/><rect height="1" width="1" x="13" y="7"/><rect height="1" width="1" x="15" y="5"/><rect height="1" width="1" x="14" y="6"/><rect height="1" width="1" x="15" y="8"/><rect height="1" width="1" x="14" y="9"/><path d="M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z"/><rect height="1" width="1" x="14" y="3"/><polygon points="12 6.868 12 6 11.62 6 12 6.868"/><rect height="1" width="1" x="15" y="2"/><rect height="1" width="1" x="12" y="5"/><rect height="1" width="1" x="13" y="4"/><polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"/><rect height="1" width="1" x="9" y="14"/><rect height="1" width="1" x="8" y="15"/><path d="M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z"/><rect height="1" width="1" x="5" y="15"/><path d="M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z"/><rect height="1" width="1" x="11" y="15"/><path d="M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z"/><rect height="1" width="1" x="14" y="15"/><rect height="1" width="1" x="15" y="11"/></g><polyline class="ql-stroke" points="5.5 13 9 5 12.5 13"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="11" y2="11"/></svg>', blockquote: '<svg viewbox="0 0 18 18"><rect class="ql-fill ql-stroke" height="3" width="3" x="4" y="5"/><rect class="ql-fill ql-stroke" height="3" width="3" x="11" y="5"/><path class="ql-even ql-fill ql-stroke" d="M7,8c0,4.031-3,5-3,5"/><path class="ql-even ql-fill ql-stroke" d="M14,8c0,4.031-3,5-3,5"/></svg>', bold: '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"/><path class="ql-stroke" d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"/></svg>', clean: '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="5" x2="13" y1="3" y2="3"/><line class="ql-stroke" x1="6" x2="9.35" y1="12" y2="3"/><line class="ql-stroke" x1="11" x2="15" y1="11" y2="15"/><line class="ql-stroke" x1="15" x2="11" y1="11" y2="15"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="7" x="2" y="14"/></svg>', code: at, "code-block": at, color: '<svg viewbox="0 0 18 18"><line class="ql-color-label ql-stroke ql-transparent" x1="3" x2="15" y1="15" y2="15"/><polyline class="ql-stroke" points="5.5 11 9 3 12.5 11"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="9" y2="9"/></svg>', direction: { "": '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"/><line class="ql-stroke ql-fill" x1="15" x2="11" y1="4" y2="4"/><path class="ql-fill" d="M11,3a3,3,0,0,0,0,6h1V3H11Z"/><rect class="ql-fill" height="11" width="1" x="11" y="4"/><rect class="ql-fill" height="11" width="1" x="13" y="4"/></svg>', rtl: '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"/><line class="ql-stroke ql-fill" x1="9" x2="5" y1="4" y2="4"/><path class="ql-fill" d="M5,3A3,3,0,0,0,5,9H6V3H5Z"/><rect class="ql-fill" height="11" width="1" x="5" y="4"/><rect class="ql-fill" height="11" width="1" x="7" y="4"/></svg>' }, formula: '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z"/><rect class="ql-fill" height="1.6" rx="0.8" ry="0.8" width="5" x="5.15" y="6.2"/><path class="ql-fill" d="M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z"/></svg>', header: { 1: '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z"/></svg>', 2: '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>', 3: '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.65186,12.30664a2.6742,2.6742,0,0,1-2.915,2.68457,3.96592,3.96592,0,0,1-2.25537-.6709.56007.56007,0,0,1-.13232-.83594L11.64648,13c.209-.34082.48389-.36328.82471-.1543a2.32654,2.32654,0,0,0,1.12256.33008c.71484,0,1.12207-.35156,1.12207-.78125,0-.61523-.61621-.86816-1.46338-.86816H13.2085a.65159.65159,0,0,1-.68213-.41895l-.05518-.10937a.67114.67114,0,0,1,.14307-.78125l.71533-.86914a8.55289,8.55289,0,0,1,.68213-.7373V8.58887a3.93913,3.93913,0,0,1-.748.05469H11.9873a.54085.54085,0,0,1-.605-.60547V7.59863a.54085.54085,0,0,1,.605-.60547h3.75146a.53773.53773,0,0,1,.60547.59375v.17676a1.03723,1.03723,0,0,1-.27539.748L14.74854,10.0293A2.31132,2.31132,0,0,1,16.65186,12.30664ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>', 4: '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm7.05371,7.96582v.38477c0,.39648-.165.60547-.46191.60547h-.47314v1.29785a.54085.54085,0,0,1-.605.60547h-.69336a.54085.54085,0,0,1-.605-.60547V12.95605H11.333a.5412.5412,0,0,1-.60547-.60547v-.15332a1.199,1.199,0,0,1,.22021-.748l2.56348-4.05957a.7819.7819,0,0,1,.72607-.39648h1.27637a.54085.54085,0,0,1,.605.60547v3.7627h.33008A.54055.54055,0,0,1,17.05371,11.96582ZM14.28125,8.7207h-.022a4.18969,4.18969,0,0,1-.38525.81348l-1.188,1.80469v.02246h1.5293V9.60059A7.04058,7.04058,0,0,1,14.28125,8.7207Z"/></svg>', 5: '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.74023,12.18555a2.75131,2.75131,0,0,1-2.91553,2.80566,3.908,3.908,0,0,1-2.25537-.68164.54809.54809,0,0,1-.13184-.8252L11.73438,13c.209-.34082.48389-.36328.8252-.1543a2.23757,2.23757,0,0,0,1.1001.33008,1.01827,1.01827,0,0,0,1.1001-.96777c0-.61621-.53906-.97949-1.25439-.97949a2.15554,2.15554,0,0,0-.64893.09961,1.15209,1.15209,0,0,1-.814.01074l-.12109-.04395a.64116.64116,0,0,1-.45117-.71484l.231-3.00391a.56666.56666,0,0,1,.62744-.583H15.541a.54085.54085,0,0,1,.605.60547v.43945a.54085.54085,0,0,1-.605.60547H13.41748l-.04395.72559a1.29306,1.29306,0,0,1-.04395.30859h.022a2.39776,2.39776,0,0,1,.57227-.07715A2.53266,2.53266,0,0,1,16.74023,12.18555ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>', 6: '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M14.51758,9.64453a1.85627,1.85627,0,0,0-1.24316.38477H13.252a1.73532,1.73532,0,0,1,1.72754-1.4082,2.66491,2.66491,0,0,1,.5498.06641c.35254.05469.57227.01074.70508-.40723l.16406-.5166a.53393.53393,0,0,0-.373-.75977,4.83723,4.83723,0,0,0-1.17773-.14258c-2.43164,0-3.7627,2.17773-3.7627,4.43359,0,2.47559,1.60645,3.69629,3.19043,3.69629A2.70585,2.70585,0,0,0,16.96,12.19727,2.43861,2.43861,0,0,0,14.51758,9.64453Zm-.23047,3.58691c-.67187,0-1.22168-.81445-1.22168-1.45215,0-.47363.30762-.583.72559-.583.96875,0,1.27734.59375,1.27734,1.12207A.82182.82182,0,0,1,14.28711,13.23145ZM10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Z"/></svg>' }, italic: '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="13" y1="4" y2="4"/><line class="ql-stroke" x1="5" x2="11" y1="14" y2="14"/><line class="ql-stroke" x1="8" x2="10" y1="14" y2="4"/></svg>', image: '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="10" width="12" x="3" y="4"/><circle class="ql-fill" cx="6" cy="7" r="1"/><polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"/></svg>', indent: { "+1": '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"/></svg>', "-1": '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="5 7 5 11 3 9 5 7"/></svg>' }, link: '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="11" y1="7" y2="11"/><path class="ql-even ql-stroke" d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"/><path class="ql-even ql-stroke" d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"/></svg>', list: { bullet: '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="6" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="6" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="6" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="3" y1="4" y2="4"/><line class="ql-stroke" x1="3" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="3" y1="14" y2="14"/></svg>', check: '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="9" x2="15" y1="4" y2="4"/><polyline class="ql-stroke" points="3 4 4 5 6 3"/><line class="ql-stroke" x1="9" x2="15" y1="14" y2="14"/><polyline class="ql-stroke" points="3 14 4 15 6 13"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="3 9 4 10 6 8"/></svg>', ordered: '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="7" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="7" x2="15" y1="14" y2="14"/><line class="ql-stroke ql-thin" x1="2.5" x2="4.5" y1="5.5" y2="5.5"/><path class="ql-fill" d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"/><path class="ql-stroke ql-thin" d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"/><path class="ql-stroke ql-thin" d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"/></svg>' }, script: { sub: '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z"/><path class="ql-fill" d="M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z"/></svg>', super: '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z"/><path class="ql-fill" d="M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z"/></svg>' }, strike: '<svg viewbox="0 0 18 18"><line class="ql-stroke ql-thin" x1="15.5" x2="2.5" y1="8.5" y2="9.5"/><path class="ql-fill" d="M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z"/><path class="ql-fill" d="M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z"/></svg>', table: '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="2" width="3" x="5" y="5"/><rect class="ql-fill" height="2" width="4" x="9" y="5"/><g class="ql-fill ql-transparent"><rect height="2" width="3" x="5" y="8"/><rect height="2" width="4" x="9" y="8"/><rect height="2" width="3" x="5" y="11"/><rect height="2" width="4" x="9" y="11"/></g></svg>', underline: '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="12" x="3" y="15"/></svg>', video: '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="12" width="1" x="5" y="3"/><rect class="ql-fill" height="12" width="1" x="12" y="3"/><rect class="ql-fill" height="2" width="8" x="5" y="8"/><rect class="ql-fill" height="1" width="3" x="3" y="5"/><rect class="ql-fill" height="1" width="3" x="3" y="7"/><rect class="ql-fill" height="1" width="3" x="3" y="10"/><rect class="ql-fill" height="1" width="3" x="3" y="12"/><rect class="ql-fill" height="1" width="3" x="12" y="5"/><rect class="ql-fill" height="1" width="3" x="12" y="7"/><rect class="ql-fill" height="1" width="3" x="12" y="10"/><rect class="ql-fill" height="1" width="3" x="12" y="12"/></svg>' };
      let ut = 0;
      function ht(t3, e3) {
        t3.setAttribute(e3, `${!("true" === t3.getAttribute(e3))}`);
      }
      var dt = class {
        constructor(t3) {
          this.select = t3, this.container = document.createElement("span"), this.buildPicker(), this.select.style.display = "none", this.select.parentNode.insertBefore(this.container, this.select), this.label.addEventListener("mousedown", (() => {
            this.togglePicker();
          })), this.label.addEventListener("keydown", ((t4) => {
            switch (t4.key) {
              case "Enter":
                this.togglePicker();
                break;
              case "Escape":
                this.escape(), t4.preventDefault();
            }
          })), this.select.addEventListener("change", this.update.bind(this));
        }
        togglePicker() {
          this.container.classList.toggle("ql-expanded"), ht(this.label, "aria-expanded"), ht(this.options, "aria-hidden");
        }
        buildItem(t3) {
          const e3 = document.createElement("span");
          e3.tabIndex = "0", e3.setAttribute("role", "button"), e3.classList.add("ql-picker-item");
          const n2 = t3.getAttribute("value");
          return n2 && e3.setAttribute("data-value", n2), t3.textContent && e3.setAttribute("data-label", t3.textContent), e3.addEventListener("click", (() => {
            this.selectItem(e3, true);
          })), e3.addEventListener("keydown", ((t4) => {
            switch (t4.key) {
              case "Enter":
                this.selectItem(e3, true), t4.preventDefault();
                break;
              case "Escape":
                this.escape(), t4.preventDefault();
            }
          })), e3;
        }
        buildLabel() {
          const t3 = document.createElement("span");
          return t3.classList.add("ql-picker-label"), t3.innerHTML = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke" points="7 11 9 13 11 11 7 11"/><polygon class="ql-stroke" points="7 7 9 5 11 7 7 7"/></svg>', t3.tabIndex = "0", t3.setAttribute("role", "button"), t3.setAttribute("aria-expanded", "false"), this.container.appendChild(t3), t3;
        }
        buildOptions() {
          const t3 = document.createElement("span");
          t3.classList.add("ql-picker-options"), t3.setAttribute("aria-hidden", "true"), t3.tabIndex = "-1", t3.id = `ql-picker-options-${ut}`, ut += 1, this.label.setAttribute("aria-controls", t3.id), this.options = t3, Array.from(this.select.options).forEach(((e3) => {
            const n2 = this.buildItem(e3);
            t3.appendChild(n2), true === e3.selected && this.selectItem(n2);
          })), this.container.appendChild(t3);
        }
        buildPicker() {
          Array.from(this.select.attributes).forEach(((t3) => {
            this.container.setAttribute(t3.name, t3.value);
          })), this.container.classList.add("ql-picker"), this.label = this.buildLabel(), this.buildOptions();
        }
        escape() {
          this.close(), setTimeout((() => this.label.focus()), 1);
        }
        close() {
          this.container.classList.remove("ql-expanded"), this.label.setAttribute("aria-expanded", "false"), this.options.setAttribute("aria-hidden", "true");
        }
        selectItem(t3) {
          let e3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const n2 = this.container.querySelector(".ql-selected");
          t3 !== n2 && (null != n2 && n2.classList.remove("ql-selected"), null != t3 && (t3.classList.add("ql-selected"), this.select.selectedIndex = Array.from(t3.parentNode.children).indexOf(t3), t3.hasAttribute("data-value") ? this.label.setAttribute("data-value", t3.getAttribute("data-value")) : this.label.removeAttribute("data-value"), t3.hasAttribute("data-label") ? this.label.setAttribute("data-label", t3.getAttribute("data-label")) : this.label.removeAttribute("data-label"), e3 && (this.select.dispatchEvent(new Event("change")), this.close())));
        }
        update() {
          let t3;
          if (this.select.selectedIndex > -1) {
            const e4 = this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];
            t3 = this.select.options[this.select.selectedIndex], this.selectItem(e4);
          } else this.selectItem(null);
          const e3 = null != t3 && t3 !== this.select.querySelector("option[selected]");
          this.label.classList.toggle("ql-active", e3);
        }
      }, ft = class extends dt {
        constructor(t3, e3) {
          super(t3), this.label.innerHTML = e3, this.container.classList.add("ql-color-picker"), Array.from(this.container.querySelectorAll(".ql-picker-item")).slice(0, 7).forEach(((t4) => {
            t4.classList.add("ql-primary");
          }));
        }
        buildItem(t3) {
          const e3 = super.buildItem(t3);
          return e3.style.backgroundColor = t3.getAttribute("value") || "", e3;
        }
        selectItem(t3, e3) {
          super.selectItem(t3, e3);
          const n2 = this.label.querySelector(".ql-color-label"), r2 = t3 && t3.getAttribute("data-value") || "";
          n2 && ("line" === n2.tagName ? n2.style.stroke = r2 : n2.style.fill = r2);
        }
      }, pt = class extends dt {
        constructor(t3, e3) {
          super(t3), this.container.classList.add("ql-icon-picker"), Array.from(this.container.querySelectorAll(".ql-picker-item")).forEach(((t4) => {
            t4.innerHTML = e3[t4.getAttribute("data-value") || ""];
          })), this.defaultItem = this.container.querySelector(".ql-selected"), this.selectItem(this.defaultItem);
        }
        selectItem(t3, e3) {
          super.selectItem(t3, e3);
          const n2 = t3 || this.defaultItem;
          if (null != n2) {
            if (this.label.innerHTML === n2.innerHTML) return;
            this.label.innerHTML = n2.innerHTML;
          }
        }
      }, gt = class {
        constructor(t3, e3) {
          this.quill = t3, this.boundsContainer = e3 || document.body, this.root = t3.addContainer("ql-tooltip"), this.root.innerHTML = this.constructor.TEMPLATE, ((t4) => {
            const { overflowY: e4 } = getComputedStyle(t4, null);
            return "visible" !== e4 && "clip" !== e4;
          })(this.quill.root) && this.quill.root.addEventListener("scroll", (() => {
            this.root.style.marginTop = -1 * this.quill.root.scrollTop + "px";
          })), this.hide();
        }
        hide() {
          this.root.classList.add("ql-hidden");
        }
        position(t3) {
          const e3 = t3.left + t3.width / 2 - this.root.offsetWidth / 2, n2 = t3.bottom + this.quill.root.scrollTop;
          this.root.style.left = `${e3}px`, this.root.style.top = `${n2}px`, this.root.classList.remove("ql-flip");
          const r2 = this.boundsContainer.getBoundingClientRect(), i2 = this.root.getBoundingClientRect();
          let s2 = 0;
          if (i2.right > r2.right && (s2 = r2.right - i2.right, this.root.style.left = `${e3 + s2}px`), i2.left < r2.left && (s2 = r2.left - i2.left, this.root.style.left = `${e3 + s2}px`), i2.bottom > r2.bottom) {
            const e4 = i2.bottom - i2.top, r3 = t3.bottom - t3.top + e4;
            this.root.style.top = n2 - r3 + "px", this.root.classList.add("ql-flip");
          }
          return s2;
        }
        show() {
          this.root.classList.remove("ql-editing"), this.root.classList.remove("ql-hidden");
        }
      }, mt = n(8347), bt = n(5374), yt = n(9609);
      const vt = [false, "center", "right", "justify"], At = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"], xt = [false, "serif", "monospace"], Nt = ["1", "2", "3", false], Et = ["small", false, "large", "huge"];
      class wt extends yt.A {
        constructor(t3, e3) {
          super(t3, e3);
          const n2 = (e4) => {
            document.body.contains(t3.root) ? (null == this.tooltip || this.tooltip.root.contains(e4.target) || document.activeElement === this.tooltip.textbox || this.quill.hasFocus() || this.tooltip.hide(), null != this.pickers && this.pickers.forEach(((t4) => {
              t4.container.contains(e4.target) || t4.close();
            }))) : document.body.removeEventListener("click", n2);
          };
          t3.emitter.listenDOM("click", document.body, n2);
        }
        addModule(t3) {
          const e3 = super.addModule(t3);
          return "toolbar" === t3 && this.extendToolbar(e3), e3;
        }
        buildButtons(t3, e3) {
          Array.from(t3).forEach(((t4) => {
            (t4.getAttribute("class") || "").split(/\s+/).forEach(((n2) => {
              if (n2.startsWith("ql-") && (n2 = n2.slice(3), null != e3[n2])) if ("direction" === n2) t4.innerHTML = e3[n2][""] + e3[n2].rtl;
              else if ("string" == typeof e3[n2]) t4.innerHTML = e3[n2];
              else {
                const r2 = t4.value || "";
                null != r2 && e3[n2][r2] && (t4.innerHTML = e3[n2][r2]);
              }
            }));
          }));
        }
        buildPickers(t3, e3) {
          this.pickers = Array.from(t3).map(((t4) => {
            if (t4.classList.contains("ql-align") && (null == t4.querySelector("option") && kt(t4, vt), "object" == typeof e3.align)) return new pt(t4, e3.align);
            if (t4.classList.contains("ql-background") || t4.classList.contains("ql-color")) {
              const n2 = t4.classList.contains("ql-background") ? "background" : "color";
              return null == t4.querySelector("option") && kt(t4, At, "background" === n2 ? "#ffffff" : "#000000"), new ft(t4, e3[n2]);
            }
            return null == t4.querySelector("option") && (t4.classList.contains("ql-font") ? kt(t4, xt) : t4.classList.contains("ql-header") ? kt(t4, Nt) : t4.classList.contains("ql-size") && kt(t4, Et)), new dt(t4);
          })), this.quill.on(bt.A.events.EDITOR_CHANGE, (() => {
            this.pickers.forEach(((t4) => {
              t4.update();
            }));
          }));
        }
      }
      wt.DEFAULTS = (0, mt.A)({}, yt.A.DEFAULTS, { modules: { toolbar: { handlers: { formula() {
        this.quill.theme.tooltip.edit("formula");
      }, image() {
        let t3 = this.container.querySelector("input.ql-image[type=file]");
        null == t3 && (t3 = document.createElement("input"), t3.setAttribute("type", "file"), t3.setAttribute("accept", this.quill.uploader.options.mimetypes.join(", ")), t3.classList.add("ql-image"), t3.addEventListener("change", (() => {
          const e3 = this.quill.getSelection(true);
          this.quill.uploader.upload(e3, t3.files), t3.value = "";
        })), this.container.appendChild(t3)), t3.click();
      }, video() {
        this.quill.theme.tooltip.edit("video");
      } } } } });
      class qt extends gt {
        constructor(t3, e3) {
          super(t3, e3), this.textbox = this.root.querySelector('input[type="text"]'), this.listen();
        }
        listen() {
          this.textbox.addEventListener("keydown", ((t3) => {
            "Enter" === t3.key ? (this.save(), t3.preventDefault()) : "Escape" === t3.key && (this.cancel(), t3.preventDefault());
          }));
        }
        cancel() {
          this.hide(), this.restoreFocus();
        }
        edit() {
          let t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "link", e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this.root.classList.remove("ql-hidden"), this.root.classList.add("ql-editing"), null == this.textbox) return;
          null != e3 ? this.textbox.value = e3 : t3 !== this.root.getAttribute("data-mode") && (this.textbox.value = "");
          const n2 = this.quill.getBounds(this.quill.selection.savedRange);
          null != n2 && this.position(n2), this.textbox.select(), this.textbox.setAttribute("placeholder", this.textbox.getAttribute(`data-${t3}`) || ""), this.root.setAttribute("data-mode", t3);
        }
        restoreFocus() {
          this.quill.focus({ preventScroll: true });
        }
        save() {
          let { value: t3 } = this.textbox;
          switch (this.root.getAttribute("data-mode")) {
            case "link": {
              const { scrollTop: e3 } = this.quill.root;
              this.linkRange ? (this.quill.formatText(this.linkRange, "link", t3, bt.A.sources.USER), delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", t3, bt.A.sources.USER)), this.quill.root.scrollTop = e3;
              break;
            }
            case "video":
              t3 = (function(t4) {
                let e3 = t4.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || t4.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
                return e3 ? `${e3[1] || "https"}://www.youtube.com/embed/${e3[2]}?showinfo=0` : (e3 = t4.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? `${e3[1] || "https"}://player.vimeo.com/video/${e3[2]}/` : t4;
              })(t3);
            case "formula": {
              if (!t3) break;
              const e3 = this.quill.getSelection(true);
              if (null != e3) {
                const n2 = e3.index + e3.length;
                this.quill.insertEmbed(n2, this.root.getAttribute("data-mode"), t3, bt.A.sources.USER), "formula" === this.root.getAttribute("data-mode") && this.quill.insertText(n2 + 1, " ", bt.A.sources.USER), this.quill.setSelection(n2 + 2, bt.A.sources.USER);
              }
              break;
            }
          }
          this.textbox.value = "", this.hide();
        }
      }
      function kt(t3, e3) {
        let n2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        e3.forEach(((e4) => {
          const r2 = document.createElement("option");
          e4 === n2 ? r2.setAttribute("selected", "selected") : r2.setAttribute("value", String(e4)), t3.appendChild(r2);
        }));
      }
      var _t = n(8298);
      const Lt = [["bold", "italic", "link"], [{ header: 1 }, { header: 2 }, "blockquote"]];
      class St extends qt {
        static TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join("");
        constructor(t3, e3) {
          super(t3, e3), this.quill.on(bt.A.events.EDITOR_CHANGE, ((t4, e4, n2, r2) => {
            if (t4 === bt.A.events.SELECTION_CHANGE) if (null != e4 && e4.length > 0 && r2 === bt.A.sources.USER) {
              this.show(), this.root.style.left = "0px", this.root.style.width = "", this.root.style.width = `${this.root.offsetWidth}px`;
              const t5 = this.quill.getLines(e4.index, e4.length);
              if (1 === t5.length) {
                const t6 = this.quill.getBounds(e4);
                null != t6 && this.position(t6);
              } else {
                const n3 = t5[t5.length - 1], r3 = this.quill.getIndex(n3), i2 = Math.min(n3.length() - 1, e4.index + e4.length - r3), s2 = this.quill.getBounds(new _t.Q(r3, i2));
                null != s2 && this.position(s2);
              }
            } else document.activeElement !== this.textbox && this.quill.hasFocus() && this.hide();
          }));
        }
        listen() {
          super.listen(), this.root.querySelector(".ql-close").addEventListener("click", (() => {
            this.root.classList.remove("ql-editing");
          })), this.quill.on(bt.A.events.SCROLL_OPTIMIZE, (() => {
            setTimeout((() => {
              if (this.root.classList.contains("ql-hidden")) return;
              const t3 = this.quill.getSelection();
              if (null != t3) {
                const e3 = this.quill.getBounds(t3);
                null != e3 && this.position(e3);
              }
            }), 1);
          }));
        }
        cancel() {
          this.show();
        }
        position(t3) {
          const e3 = super.position(t3), n2 = this.root.querySelector(".ql-tooltip-arrow");
          return n2.style.marginLeft = "", 0 !== e3 && (n2.style.marginLeft = -1 * e3 - n2.offsetWidth / 2 + "px"), e3;
        }
      }
      class Ot extends wt {
        constructor(t3, e3) {
          null != e3.modules.toolbar && null == e3.modules.toolbar.container && (e3.modules.toolbar.container = Lt), super(t3, e3), this.quill.container.classList.add("ql-bubble");
        }
        extendToolbar(t3) {
          this.tooltip = new St(this.quill, this.options.bounds), null != t3.container && (this.tooltip.root.appendChild(t3.container), this.buildButtons(t3.container.querySelectorAll("button"), ct), this.buildPickers(t3.container.querySelectorAll("select"), ct));
        }
      }
      Ot.DEFAULTS = (0, mt.A)({}, wt.DEFAULTS, { modules: { toolbar: { handlers: { link(t3) {
        t3 ? this.quill.theme.tooltip.edit() : this.quill.format("link", false, p.Ay.sources.USER);
      } } } } });
      const Tt = [[{ header: ["1", "2", "3", false] }], ["bold", "italic", "underline", "link"], [{ list: "ordered" }, { list: "bullet" }], ["clean"]];
      class jt extends qt {
        static TEMPLATE = ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join("");
        preview = this.root.querySelector("a.ql-preview");
        listen() {
          super.listen(), this.root.querySelector("a.ql-action").addEventListener("click", ((t3) => {
            this.root.classList.contains("ql-editing") ? this.save() : this.edit("link", this.preview.textContent), t3.preventDefault();
          })), this.root.querySelector("a.ql-remove").addEventListener("click", ((t3) => {
            if (null != this.linkRange) {
              const t4 = this.linkRange;
              this.restoreFocus(), this.quill.formatText(t4, "link", false, bt.A.sources.USER), delete this.linkRange;
            }
            t3.preventDefault(), this.hide();
          })), this.quill.on(bt.A.events.SELECTION_CHANGE, ((t3, e3, n2) => {
            if (null != t3) {
              if (0 === t3.length && n2 === bt.A.sources.USER) {
                const [e4, n3] = this.quill.scroll.descendant(w, t3.index);
                if (null != e4) {
                  this.linkRange = new _t.Q(t3.index - n3, e4.length());
                  const r2 = w.formats(e4.domNode);
                  this.preview.textContent = r2, this.preview.setAttribute("href", r2), this.show();
                  const i2 = this.quill.getBounds(this.linkRange);
                  return void (null != i2 && this.position(i2));
                }
              } else delete this.linkRange;
              this.hide();
            }
          }));
        }
        show() {
          super.show(), this.root.removeAttribute("data-mode");
        }
      }
      class Ct extends wt {
        constructor(t3, e3) {
          null != e3.modules.toolbar && null == e3.modules.toolbar.container && (e3.modules.toolbar.container = Tt), super(t3, e3), this.quill.container.classList.add("ql-snow");
        }
        extendToolbar(t3) {
          null != t3.container && (t3.container.classList.add("ql-snow"), this.buildButtons(t3.container.querySelectorAll("button"), ct), this.buildPickers(t3.container.querySelectorAll("select"), ct), this.tooltip = new jt(this.quill, this.options.bounds), t3.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({ key: "k", shortKey: true }, ((e3, n2) => {
            t3.handlers.link.call(t3, !n2.format.link);
          })));
        }
      }
      Ct.DEFAULTS = (0, mt.A)({}, wt.DEFAULTS, { modules: { toolbar: { handlers: { link(t3) {
        if (t3) {
          const t4 = this.quill.getSelection();
          if (null == t4 || 0 === t4.length) return;
          let e3 = this.quill.getText(t4);
          /^\S+@\S+\.\S+$/.test(e3) && 0 !== e3.indexOf("mailto:") && (e3 = `mailto:${e3}`);
          const { tooltip: n2 } = this.quill.theme;
          n2.edit("link", e3);
        } else this.quill.format("link", false, p.Ay.sources.USER);
      } } } } });
      var Rt = Ct;
      t2.default.register({ "attributors/attribute/direction": i.Mc, "attributors/class/align": e2.qh, "attributors/class/background": b.l, "attributors/class/color": y.g3, "attributors/class/direction": i.sY, "attributors/class/font": v.q, "attributors/class/size": A.U, "attributors/style/align": e2.Hu, "attributors/style/background": b.s, "attributors/style/color": y.JM, "attributors/style/direction": i.VL, "attributors/style/font": v.z, "attributors/style/size": A.r }, true), t2.default.register({ "formats/align": e2.qh, "formats/direction": i.sY, "formats/indent": l, "formats/background": b.s, "formats/color": y.JM, "formats/font": v.q, "formats/size": A.U, "formats/blockquote": u, "formats/code-block": D.Ay, "formats/header": d, "formats/list": m, "formats/bold": E, "formats/code": D.Cy, "formats/italic": class extends E {
        static blotName = "italic";
        static tagName = ["EM", "I"];
      }, "formats/link": w, "formats/script": _, "formats/strike": class extends E {
        static blotName = "strike";
        static tagName = ["S", "STRIKE"];
      }, "formats/underline": S, "formats/formula": j, "formats/image": I, "formats/video": U, "modules/syntax": Q, "modules/table": it, "modules/toolbar": ot, "themes/bubble": Ot, "themes/snow": Rt, "ui/icons": ct, "ui/picker": dt, "ui/icon-picker": pt, "ui/color-picker": ft, "ui/tooltip": gt }, true);
      var It = t2.default;
    })(), r.default;
  })();
}));
/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function(e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, true) : function(e2) {
    if (!e2.document) throw new Error("jQuery requires a window with a document");
    return t(e2);
  } : t(e);
})("undefined" != typeof window ? window : this, function(ie, e) {
  "use strict";
  var oe = [], r = Object.getPrototypeOf, ae = oe.slice, g = oe.flat ? function(e2) {
    return oe.flat.call(e2);
  } : function(e2) {
    return oe.concat.apply([], e2);
  }, s = oe.push, se = oe.indexOf, n = {}, i = n.toString, ue = n.hasOwnProperty, o = ue.toString, a = o.call(Object), le = {}, v = function(e2) {
    return "function" == typeof e2 && "number" != typeof e2.nodeType && "function" != typeof e2.item;
  }, y = function(e2) {
    return null != e2 && e2 === e2.window;
  }, C = ie.document, u = { type: true, src: true, nonce: true, noModule: true };
  function m(e2, t2, n2) {
    var r2, i2, o2 = (n2 = n2 || C).createElement("script");
    if (o2.text = e2, t2) for (r2 in u) (i2 = t2[r2] || t2.getAttribute && t2.getAttribute(r2)) && o2.setAttribute(r2, i2);
    n2.head.appendChild(o2).parentNode.removeChild(o2);
  }
  function x(e2) {
    return null == e2 ? e2 + "" : "object" == typeof e2 || "function" == typeof e2 ? n[i.call(e2)] || "object" : typeof e2;
  }
  var t = "3.7.1", l = /HTML$/i, ce = function(e2, t2) {
    return new ce.fn.init(e2, t2);
  };
  function c(e2) {
    var t2 = !!e2 && "length" in e2 && e2.length, n2 = x(e2);
    return !v(e2) && !y(e2) && ("array" === n2 || 0 === t2 || "number" == typeof t2 && 0 < t2 && t2 - 1 in e2);
  }
  function fe(e2, t2) {
    return e2.nodeName && e2.nodeName.toLowerCase() === t2.toLowerCase();
  }
  ce.fn = ce.prototype = { jquery: t, constructor: ce, length: 0, toArray: function() {
    return ae.call(this);
  }, get: function(e2) {
    return null == e2 ? ae.call(this) : e2 < 0 ? this[e2 + this.length] : this[e2];
  }, pushStack: function(e2) {
    var t2 = ce.merge(this.constructor(), e2);
    return t2.prevObject = this, t2;
  }, each: function(e2) {
    return ce.each(this, e2);
  }, map: function(n2) {
    return this.pushStack(ce.map(this, function(e2, t2) {
      return n2.call(e2, t2, e2);
    }));
  }, slice: function() {
    return this.pushStack(ae.apply(this, arguments));
  }, first: function() {
    return this.eq(0);
  }, last: function() {
    return this.eq(-1);
  }, even: function() {
    return this.pushStack(ce.grep(this, function(e2, t2) {
      return (t2 + 1) % 2;
    }));
  }, odd: function() {
    return this.pushStack(ce.grep(this, function(e2, t2) {
      return t2 % 2;
    }));
  }, eq: function(e2) {
    var t2 = this.length, n2 = +e2 + (e2 < 0 ? t2 : 0);
    return this.pushStack(0 <= n2 && n2 < t2 ? [this[n2]] : []);
  }, end: function() {
    return this.prevObject || this.constructor();
  }, push: s, sort: oe.sort, splice: oe.splice }, ce.extend = ce.fn.extend = function() {
    var e2, t2, n2, r2, i2, o2, a2 = arguments[0] || {}, s2 = 1, u2 = arguments.length, l2 = false;
    for ("boolean" == typeof a2 && (l2 = a2, a2 = arguments[s2] || {}, s2++), "object" == typeof a2 || v(a2) || (a2 = {}), s2 === u2 && (a2 = this, s2--); s2 < u2; s2++) if (null != (e2 = arguments[s2])) for (t2 in e2) r2 = e2[t2], "__proto__" !== t2 && a2 !== r2 && (l2 && r2 && (ce.isPlainObject(r2) || (i2 = Array.isArray(r2))) ? (n2 = a2[t2], o2 = i2 && !Array.isArray(n2) ? [] : i2 || ce.isPlainObject(n2) ? n2 : {}, i2 = false, a2[t2] = ce.extend(l2, o2, r2)) : void 0 !== r2 && (a2[t2] = r2));
    return a2;
  }, ce.extend({ expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""), isReady: true, error: function(e2) {
    throw new Error(e2);
  }, noop: function() {
  }, isPlainObject: function(e2) {
    var t2, n2;
    return !(!e2 || "[object Object]" !== i.call(e2)) && (!(t2 = r(e2)) || "function" == typeof (n2 = ue.call(t2, "constructor") && t2.constructor) && o.call(n2) === a);
  }, isEmptyObject: function(e2) {
    var t2;
    for (t2 in e2) return false;
    return true;
  }, globalEval: function(e2, t2, n2) {
    m(e2, { nonce: t2 && t2.nonce }, n2);
  }, each: function(e2, t2) {
    var n2, r2 = 0;
    if (c(e2)) {
      for (n2 = e2.length; r2 < n2; r2++) if (false === t2.call(e2[r2], r2, e2[r2])) break;
    } else for (r2 in e2) if (false === t2.call(e2[r2], r2, e2[r2])) break;
    return e2;
  }, text: function(e2) {
    var t2, n2 = "", r2 = 0, i2 = e2.nodeType;
    if (!i2) while (t2 = e2[r2++]) n2 += ce.text(t2);
    return 1 === i2 || 11 === i2 ? e2.textContent : 9 === i2 ? e2.documentElement.textContent : 3 === i2 || 4 === i2 ? e2.nodeValue : n2;
  }, makeArray: function(e2, t2) {
    var n2 = t2 || [];
    return null != e2 && (c(Object(e2)) ? ce.merge(n2, "string" == typeof e2 ? [e2] : e2) : s.call(n2, e2)), n2;
  }, inArray: function(e2, t2, n2) {
    return null == t2 ? -1 : se.call(t2, e2, n2);
  }, isXMLDoc: function(e2) {
    var t2 = e2 && e2.namespaceURI, n2 = e2 && (e2.ownerDocument || e2).documentElement;
    return !l.test(t2 || n2 && n2.nodeName || "HTML");
  }, merge: function(e2, t2) {
    for (var n2 = +t2.length, r2 = 0, i2 = e2.length; r2 < n2; r2++) e2[i2++] = t2[r2];
    return e2.length = i2, e2;
  }, grep: function(e2, t2, n2) {
    for (var r2 = [], i2 = 0, o2 = e2.length, a2 = !n2; i2 < o2; i2++) !t2(e2[i2], i2) !== a2 && r2.push(e2[i2]);
    return r2;
  }, map: function(e2, t2, n2) {
    var r2, i2, o2 = 0, a2 = [];
    if (c(e2)) for (r2 = e2.length; o2 < r2; o2++) null != (i2 = t2(e2[o2], o2, n2)) && a2.push(i2);
    else for (o2 in e2) null != (i2 = t2(e2[o2], o2, n2)) && a2.push(i2);
    return g(a2);
  }, guid: 1, support: le }), "function" == typeof Symbol && (ce.fn[Symbol.iterator] = oe[Symbol.iterator]), ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e2, t2) {
    n["[object " + t2 + "]"] = t2.toLowerCase();
  });
  var pe = oe.pop, de = oe.sort, he = oe.splice, ge = "[\\x20\\t\\r\\n\\f]", ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$", "g");
  ce.contains = function(e2, t2) {
    var n2 = t2 && t2.parentNode;
    return e2 === n2 || !(!n2 || 1 !== n2.nodeType || !(e2.contains ? e2.contains(n2) : e2.compareDocumentPosition && 16 & e2.compareDocumentPosition(n2)));
  };
  var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function p(e2, t2) {
    return t2 ? "\0" === e2 ? "\uFFFD" : e2.slice(0, -1) + "\\" + e2.charCodeAt(e2.length - 1).toString(16) + " " : "\\" + e2;
  }
  ce.escapeSelector = function(e2) {
    return (e2 + "").replace(f, p);
  };
  var ye = C, me = s;
  !(function() {
    var e2, b2, w2, o2, a2, T2, r2, C2, d2, i2, k2 = me, S2 = ce.expando, E2 = 0, n2 = 0, s2 = W2(), c2 = W2(), u2 = W2(), h2 = W2(), l2 = function(e3, t3) {
      return e3 === t3 && (a2 = true), 0;
    }, f2 = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", t2 = "(?:\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", p2 = "\\[" + ge + "*(" + t2 + ")(?:" + ge + "*([*^$|!~]?=)" + ge + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + t2 + "))|)" + ge + "*\\]", g2 = ":(" + t2 + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + p2 + ")*)|.*)\\)|)", v2 = new RegExp(ge + "+", "g"), y2 = new RegExp("^" + ge + "*," + ge + "*"), m2 = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"), x2 = new RegExp(ge + "|>"), j2 = new RegExp(g2), A2 = new RegExp("^" + t2 + "$"), D2 = { ID: new RegExp("^#(" + t2 + ")"), CLASS: new RegExp("^\\.(" + t2 + ")"), TAG: new RegExp("^(" + t2 + "|[*])"), ATTR: new RegExp("^" + p2), PSEUDO: new RegExp("^" + g2), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ge + "*(even|odd|(([+-]|)(\\d*)n|)" + ge + "*(?:([+-]|)" + ge + "*(\\d+)|))" + ge + "*\\)|)", "i"), bool: new RegExp("^(?:" + f2 + ")$", "i"), needsContext: new RegExp("^" + ge + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ge + "*((?:-\\d)?\\d*)" + ge + "*\\)|)(?=[^-]|$)", "i") }, N2 = /^(?:input|select|textarea|button)$/i, q2 = /^h\d$/i, L2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, H2 = /[+~]/, O2 = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])", "g"), P2 = function(e3, t3) {
      var n3 = "0x" + e3.slice(1) - 65536;
      return t3 || (n3 < 0 ? String.fromCharCode(n3 + 65536) : String.fromCharCode(n3 >> 10 | 55296, 1023 & n3 | 56320));
    }, M2 = function() {
      V2();
    }, R2 = J2(function(e3) {
      return true === e3.disabled && fe(e3, "fieldset");
    }, { dir: "parentNode", next: "legend" });
    try {
      k2.apply(oe = ae.call(ye.childNodes), ye.childNodes), oe[ye.childNodes.length].nodeType;
    } catch (e3) {
      k2 = { apply: function(e4, t3) {
        me.apply(e4, ae.call(t3));
      }, call: function(e4) {
        me.apply(e4, ae.call(arguments, 1));
      } };
    }
    function I2(t3, e3, n3, r3) {
      var i3, o3, a3, s3, u3, l3, c3, f3 = e3 && e3.ownerDocument, p3 = e3 ? e3.nodeType : 9;
      if (n3 = n3 || [], "string" != typeof t3 || !t3 || 1 !== p3 && 9 !== p3 && 11 !== p3) return n3;
      if (!r3 && (V2(e3), e3 = e3 || T2, C2)) {
        if (11 !== p3 && (u3 = L2.exec(t3))) if (i3 = u3[1]) {
          if (9 === p3) {
            if (!(a3 = e3.getElementById(i3))) return n3;
            if (a3.id === i3) return k2.call(n3, a3), n3;
          } else if (f3 && (a3 = f3.getElementById(i3)) && I2.contains(e3, a3) && a3.id === i3) return k2.call(n3, a3), n3;
        } else {
          if (u3[2]) return k2.apply(n3, e3.getElementsByTagName(t3)), n3;
          if ((i3 = u3[3]) && e3.getElementsByClassName) return k2.apply(n3, e3.getElementsByClassName(i3)), n3;
        }
        if (!(h2[t3 + " "] || d2 && d2.test(t3))) {
          if (c3 = t3, f3 = e3, 1 === p3 && (x2.test(t3) || m2.test(t3))) {
            (f3 = H2.test(t3) && U2(e3.parentNode) || e3) == e3 && le.scope || ((s3 = e3.getAttribute("id")) ? s3 = ce.escapeSelector(s3) : e3.setAttribute("id", s3 = S2)), o3 = (l3 = Y2(t3)).length;
            while (o3--) l3[o3] = (s3 ? "#" + s3 : ":scope") + " " + Q2(l3[o3]);
            c3 = l3.join(",");
          }
          try {
            return k2.apply(n3, f3.querySelectorAll(c3)), n3;
          } catch (e4) {
            h2(t3, true);
          } finally {
            s3 === S2 && e3.removeAttribute("id");
          }
        }
      }
      return re2(t3.replace(ve, "$1"), e3, n3, r3);
    }
    function W2() {
      var r3 = [];
      return function e3(t3, n3) {
        return r3.push(t3 + " ") > b2.cacheLength && delete e3[r3.shift()], e3[t3 + " "] = n3;
      };
    }
    function F2(e3) {
      return e3[S2] = true, e3;
    }
    function $2(e3) {
      var t3 = T2.createElement("fieldset");
      try {
        return !!e3(t3);
      } catch (e4) {
        return false;
      } finally {
        t3.parentNode && t3.parentNode.removeChild(t3), t3 = null;
      }
    }
    function B2(t3) {
      return function(e3) {
        return fe(e3, "input") && e3.type === t3;
      };
    }
    function _2(t3) {
      return function(e3) {
        return (fe(e3, "input") || fe(e3, "button")) && e3.type === t3;
      };
    }
    function z2(t3) {
      return function(e3) {
        return "form" in e3 ? e3.parentNode && false === e3.disabled ? "label" in e3 ? "label" in e3.parentNode ? e3.parentNode.disabled === t3 : e3.disabled === t3 : e3.isDisabled === t3 || e3.isDisabled !== !t3 && R2(e3) === t3 : e3.disabled === t3 : "label" in e3 && e3.disabled === t3;
      };
    }
    function X2(a3) {
      return F2(function(o3) {
        return o3 = +o3, F2(function(e3, t3) {
          var n3, r3 = a3([], e3.length, o3), i3 = r3.length;
          while (i3--) e3[n3 = r3[i3]] && (e3[n3] = !(t3[n3] = e3[n3]));
        });
      });
    }
    function U2(e3) {
      return e3 && "undefined" != typeof e3.getElementsByTagName && e3;
    }
    function V2(e3) {
      var t3, n3 = e3 ? e3.ownerDocument || e3 : ye;
      return n3 != T2 && 9 === n3.nodeType && n3.documentElement && (r2 = (T2 = n3).documentElement, C2 = !ce.isXMLDoc(T2), i2 = r2.matches || r2.webkitMatchesSelector || r2.msMatchesSelector, r2.msMatchesSelector && ye != T2 && (t3 = T2.defaultView) && t3.top !== t3 && t3.addEventListener("unload", M2), le.getById = $2(function(e4) {
        return r2.appendChild(e4).id = ce.expando, !T2.getElementsByName || !T2.getElementsByName(ce.expando).length;
      }), le.disconnectedMatch = $2(function(e4) {
        return i2.call(e4, "*");
      }), le.scope = $2(function() {
        return T2.querySelectorAll(":scope");
      }), le.cssHas = $2(function() {
        try {
          return T2.querySelector(":has(*,:jqfake)"), false;
        } catch (e4) {
          return true;
        }
      }), le.getById ? (b2.filter.ID = function(e4) {
        var t4 = e4.replace(O2, P2);
        return function(e5) {
          return e5.getAttribute("id") === t4;
        };
      }, b2.find.ID = function(e4, t4) {
        if ("undefined" != typeof t4.getElementById && C2) {
          var n4 = t4.getElementById(e4);
          return n4 ? [n4] : [];
        }
      }) : (b2.filter.ID = function(e4) {
        var n4 = e4.replace(O2, P2);
        return function(e5) {
          var t4 = "undefined" != typeof e5.getAttributeNode && e5.getAttributeNode("id");
          return t4 && t4.value === n4;
        };
      }, b2.find.ID = function(e4, t4) {
        if ("undefined" != typeof t4.getElementById && C2) {
          var n4, r3, i3, o3 = t4.getElementById(e4);
          if (o3) {
            if ((n4 = o3.getAttributeNode("id")) && n4.value === e4) return [o3];
            i3 = t4.getElementsByName(e4), r3 = 0;
            while (o3 = i3[r3++]) if ((n4 = o3.getAttributeNode("id")) && n4.value === e4) return [o3];
          }
          return [];
        }
      }), b2.find.TAG = function(e4, t4) {
        return "undefined" != typeof t4.getElementsByTagName ? t4.getElementsByTagName(e4) : t4.querySelectorAll(e4);
      }, b2.find.CLASS = function(e4, t4) {
        if ("undefined" != typeof t4.getElementsByClassName && C2) return t4.getElementsByClassName(e4);
      }, d2 = [], $2(function(e4) {
        var t4;
        r2.appendChild(e4).innerHTML = "<a id='" + S2 + "' href='' disabled='disabled'></a><select id='" + S2 + "-\r\\' disabled='disabled'><option selected=''></option></select>", e4.querySelectorAll("[selected]").length || d2.push("\\[" + ge + "*(?:value|" + f2 + ")"), e4.querySelectorAll("[id~=" + S2 + "-]").length || d2.push("~="), e4.querySelectorAll("a#" + S2 + "+*").length || d2.push(".#.+[+~]"), e4.querySelectorAll(":checked").length || d2.push(":checked"), (t4 = T2.createElement("input")).setAttribute("type", "hidden"), e4.appendChild(t4).setAttribute("name", "D"), r2.appendChild(e4).disabled = true, 2 !== e4.querySelectorAll(":disabled").length && d2.push(":enabled", ":disabled"), (t4 = T2.createElement("input")).setAttribute("name", ""), e4.appendChild(t4), e4.querySelectorAll("[name='']").length || d2.push("\\[" + ge + "*name" + ge + "*=" + ge + `*(?:''|"")`);
      }), le.cssHas || d2.push(":has"), d2 = d2.length && new RegExp(d2.join("|")), l2 = function(e4, t4) {
        if (e4 === t4) return a2 = true, 0;
        var n4 = !e4.compareDocumentPosition - !t4.compareDocumentPosition;
        return n4 || (1 & (n4 = (e4.ownerDocument || e4) == (t4.ownerDocument || t4) ? e4.compareDocumentPosition(t4) : 1) || !le.sortDetached && t4.compareDocumentPosition(e4) === n4 ? e4 === T2 || e4.ownerDocument == ye && I2.contains(ye, e4) ? -1 : t4 === T2 || t4.ownerDocument == ye && I2.contains(ye, t4) ? 1 : o2 ? se.call(o2, e4) - se.call(o2, t4) : 0 : 4 & n4 ? -1 : 1);
      }), T2;
    }
    for (e2 in I2.matches = function(e3, t3) {
      return I2(e3, null, null, t3);
    }, I2.matchesSelector = function(e3, t3) {
      if (V2(e3), C2 && !h2[t3 + " "] && (!d2 || !d2.test(t3))) try {
        var n3 = i2.call(e3, t3);
        if (n3 || le.disconnectedMatch || e3.document && 11 !== e3.document.nodeType) return n3;
      } catch (e4) {
        h2(t3, true);
      }
      return 0 < I2(t3, T2, null, [e3]).length;
    }, I2.contains = function(e3, t3) {
      return (e3.ownerDocument || e3) != T2 && V2(e3), ce.contains(e3, t3);
    }, I2.attr = function(e3, t3) {
      (e3.ownerDocument || e3) != T2 && V2(e3);
      var n3 = b2.attrHandle[t3.toLowerCase()], r3 = n3 && ue.call(b2.attrHandle, t3.toLowerCase()) ? n3(e3, t3, !C2) : void 0;
      return void 0 !== r3 ? r3 : e3.getAttribute(t3);
    }, I2.error = function(e3) {
      throw new Error("Syntax error, unrecognized expression: " + e3);
    }, ce.uniqueSort = function(e3) {
      var t3, n3 = [], r3 = 0, i3 = 0;
      if (a2 = !le.sortStable, o2 = !le.sortStable && ae.call(e3, 0), de.call(e3, l2), a2) {
        while (t3 = e3[i3++]) t3 === e3[i3] && (r3 = n3.push(i3));
        while (r3--) he.call(e3, n3[r3], 1);
      }
      return o2 = null, e3;
    }, ce.fn.uniqueSort = function() {
      return this.pushStack(ce.uniqueSort(ae.apply(this)));
    }, (b2 = ce.expr = { cacheLength: 50, createPseudo: F2, match: D2, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: true }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: true }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e3) {
      return e3[1] = e3[1].replace(O2, P2), e3[3] = (e3[3] || e3[4] || e3[5] || "").replace(O2, P2), "~=" === e3[2] && (e3[3] = " " + e3[3] + " "), e3.slice(0, 4);
    }, CHILD: function(e3) {
      return e3[1] = e3[1].toLowerCase(), "nth" === e3[1].slice(0, 3) ? (e3[3] || I2.error(e3[0]), e3[4] = +(e3[4] ? e3[5] + (e3[6] || 1) : 2 * ("even" === e3[3] || "odd" === e3[3])), e3[5] = +(e3[7] + e3[8] || "odd" === e3[3])) : e3[3] && I2.error(e3[0]), e3;
    }, PSEUDO: function(e3) {
      var t3, n3 = !e3[6] && e3[2];
      return D2.CHILD.test(e3[0]) ? null : (e3[3] ? e3[2] = e3[4] || e3[5] || "" : n3 && j2.test(n3) && (t3 = Y2(n3, true)) && (t3 = n3.indexOf(")", n3.length - t3) - n3.length) && (e3[0] = e3[0].slice(0, t3), e3[2] = n3.slice(0, t3)), e3.slice(0, 3));
    } }, filter: { TAG: function(e3) {
      var t3 = e3.replace(O2, P2).toLowerCase();
      return "*" === e3 ? function() {
        return true;
      } : function(e4) {
        return fe(e4, t3);
      };
    }, CLASS: function(e3) {
      var t3 = s2[e3 + " "];
      return t3 || (t3 = new RegExp("(^|" + ge + ")" + e3 + "(" + ge + "|$)")) && s2(e3, function(e4) {
        return t3.test("string" == typeof e4.className && e4.className || "undefined" != typeof e4.getAttribute && e4.getAttribute("class") || "");
      });
    }, ATTR: function(n3, r3, i3) {
      return function(e3) {
        var t3 = I2.attr(e3, n3);
        return null == t3 ? "!=" === r3 : !r3 || (t3 += "", "=" === r3 ? t3 === i3 : "!=" === r3 ? t3 !== i3 : "^=" === r3 ? i3 && 0 === t3.indexOf(i3) : "*=" === r3 ? i3 && -1 < t3.indexOf(i3) : "$=" === r3 ? i3 && t3.slice(-i3.length) === i3 : "~=" === r3 ? -1 < (" " + t3.replace(v2, " ") + " ").indexOf(i3) : "|=" === r3 && (t3 === i3 || t3.slice(0, i3.length + 1) === i3 + "-"));
      };
    }, CHILD: function(d3, e3, t3, h3, g3) {
      var v3 = "nth" !== d3.slice(0, 3), y3 = "last" !== d3.slice(-4), m3 = "of-type" === e3;
      return 1 === h3 && 0 === g3 ? function(e4) {
        return !!e4.parentNode;
      } : function(e4, t4, n3) {
        var r3, i3, o3, a3, s3, u3 = v3 !== y3 ? "nextSibling" : "previousSibling", l3 = e4.parentNode, c3 = m3 && e4.nodeName.toLowerCase(), f3 = !n3 && !m3, p3 = false;
        if (l3) {
          if (v3) {
            while (u3) {
              o3 = e4;
              while (o3 = o3[u3]) if (m3 ? fe(o3, c3) : 1 === o3.nodeType) return false;
              s3 = u3 = "only" === d3 && !s3 && "nextSibling";
            }
            return true;
          }
          if (s3 = [y3 ? l3.firstChild : l3.lastChild], y3 && f3) {
            p3 = (a3 = (r3 = (i3 = l3[S2] || (l3[S2] = {}))[d3] || [])[0] === E2 && r3[1]) && r3[2], o3 = a3 && l3.childNodes[a3];
            while (o3 = ++a3 && o3 && o3[u3] || (p3 = a3 = 0) || s3.pop()) if (1 === o3.nodeType && ++p3 && o3 === e4) {
              i3[d3] = [E2, a3, p3];
              break;
            }
          } else if (f3 && (p3 = a3 = (r3 = (i3 = e4[S2] || (e4[S2] = {}))[d3] || [])[0] === E2 && r3[1]), false === p3) {
            while (o3 = ++a3 && o3 && o3[u3] || (p3 = a3 = 0) || s3.pop()) if ((m3 ? fe(o3, c3) : 1 === o3.nodeType) && ++p3 && (f3 && ((i3 = o3[S2] || (o3[S2] = {}))[d3] = [E2, p3]), o3 === e4)) break;
          }
          return (p3 -= g3) === h3 || p3 % h3 == 0 && 0 <= p3 / h3;
        }
      };
    }, PSEUDO: function(e3, o3) {
      var t3, a3 = b2.pseudos[e3] || b2.setFilters[e3.toLowerCase()] || I2.error("unsupported pseudo: " + e3);
      return a3[S2] ? a3(o3) : 1 < a3.length ? (t3 = [e3, e3, "", o3], b2.setFilters.hasOwnProperty(e3.toLowerCase()) ? F2(function(e4, t4) {
        var n3, r3 = a3(e4, o3), i3 = r3.length;
        while (i3--) e4[n3 = se.call(e4, r3[i3])] = !(t4[n3] = r3[i3]);
      }) : function(e4) {
        return a3(e4, 0, t3);
      }) : a3;
    } }, pseudos: { not: F2(function(e3) {
      var r3 = [], i3 = [], s3 = ne2(e3.replace(ve, "$1"));
      return s3[S2] ? F2(function(e4, t3, n3, r4) {
        var i4, o3 = s3(e4, null, r4, []), a3 = e4.length;
        while (a3--) (i4 = o3[a3]) && (e4[a3] = !(t3[a3] = i4));
      }) : function(e4, t3, n3) {
        return r3[0] = e4, s3(r3, null, n3, i3), r3[0] = null, !i3.pop();
      };
    }), has: F2(function(t3) {
      return function(e3) {
        return 0 < I2(t3, e3).length;
      };
    }), contains: F2(function(t3) {
      return t3 = t3.replace(O2, P2), function(e3) {
        return -1 < (e3.textContent || ce.text(e3)).indexOf(t3);
      };
    }), lang: F2(function(n3) {
      return A2.test(n3 || "") || I2.error("unsupported lang: " + n3), n3 = n3.replace(O2, P2).toLowerCase(), function(e3) {
        var t3;
        do {
          if (t3 = C2 ? e3.lang : e3.getAttribute("xml:lang") || e3.getAttribute("lang")) return (t3 = t3.toLowerCase()) === n3 || 0 === t3.indexOf(n3 + "-");
        } while ((e3 = e3.parentNode) && 1 === e3.nodeType);
        return false;
      };
    }), target: function(e3) {
      var t3 = ie.location && ie.location.hash;
      return t3 && t3.slice(1) === e3.id;
    }, root: function(e3) {
      return e3 === r2;
    }, focus: function(e3) {
      return e3 === (function() {
        try {
          return T2.activeElement;
        } catch (e4) {
        }
      })() && T2.hasFocus() && !!(e3.type || e3.href || ~e3.tabIndex);
    }, enabled: z2(false), disabled: z2(true), checked: function(e3) {
      return fe(e3, "input") && !!e3.checked || fe(e3, "option") && !!e3.selected;
    }, selected: function(e3) {
      return e3.parentNode && e3.parentNode.selectedIndex, true === e3.selected;
    }, empty: function(e3) {
      for (e3 = e3.firstChild; e3; e3 = e3.nextSibling) if (e3.nodeType < 6) return false;
      return true;
    }, parent: function(e3) {
      return !b2.pseudos.empty(e3);
    }, header: function(e3) {
      return q2.test(e3.nodeName);
    }, input: function(e3) {
      return N2.test(e3.nodeName);
    }, button: function(e3) {
      return fe(e3, "input") && "button" === e3.type || fe(e3, "button");
    }, text: function(e3) {
      var t3;
      return fe(e3, "input") && "text" === e3.type && (null == (t3 = e3.getAttribute("type")) || "text" === t3.toLowerCase());
    }, first: X2(function() {
      return [0];
    }), last: X2(function(e3, t3) {
      return [t3 - 1];
    }), eq: X2(function(e3, t3, n3) {
      return [n3 < 0 ? n3 + t3 : n3];
    }), even: X2(function(e3, t3) {
      for (var n3 = 0; n3 < t3; n3 += 2) e3.push(n3);
      return e3;
    }), odd: X2(function(e3, t3) {
      for (var n3 = 1; n3 < t3; n3 += 2) e3.push(n3);
      return e3;
    }), lt: X2(function(e3, t3, n3) {
      var r3;
      for (r3 = n3 < 0 ? n3 + t3 : t3 < n3 ? t3 : n3; 0 <= --r3; ) e3.push(r3);
      return e3;
    }), gt: X2(function(e3, t3, n3) {
      for (var r3 = n3 < 0 ? n3 + t3 : n3; ++r3 < t3; ) e3.push(r3);
      return e3;
    }) } }).pseudos.nth = b2.pseudos.eq, { radio: true, checkbox: true, file: true, password: true, image: true }) b2.pseudos[e2] = B2(e2);
    for (e2 in { submit: true, reset: true }) b2.pseudos[e2] = _2(e2);
    function G2() {
    }
    function Y2(e3, t3) {
      var n3, r3, i3, o3, a3, s3, u3, l3 = c2[e3 + " "];
      if (l3) return t3 ? 0 : l3.slice(0);
      a3 = e3, s3 = [], u3 = b2.preFilter;
      while (a3) {
        for (o3 in n3 && !(r3 = y2.exec(a3)) || (r3 && (a3 = a3.slice(r3[0].length) || a3), s3.push(i3 = [])), n3 = false, (r3 = m2.exec(a3)) && (n3 = r3.shift(), i3.push({ value: n3, type: r3[0].replace(ve, " ") }), a3 = a3.slice(n3.length)), b2.filter) !(r3 = D2[o3].exec(a3)) || u3[o3] && !(r3 = u3[o3](r3)) || (n3 = r3.shift(), i3.push({ value: n3, type: o3, matches: r3 }), a3 = a3.slice(n3.length));
        if (!n3) break;
      }
      return t3 ? a3.length : a3 ? I2.error(e3) : c2(e3, s3).slice(0);
    }
    function Q2(e3) {
      for (var t3 = 0, n3 = e3.length, r3 = ""; t3 < n3; t3++) r3 += e3[t3].value;
      return r3;
    }
    function J2(a3, e3, t3) {
      var s3 = e3.dir, u3 = e3.next, l3 = u3 || s3, c3 = t3 && "parentNode" === l3, f3 = n2++;
      return e3.first ? function(e4, t4, n3) {
        while (e4 = e4[s3]) if (1 === e4.nodeType || c3) return a3(e4, t4, n3);
        return false;
      } : function(e4, t4, n3) {
        var r3, i3, o3 = [E2, f3];
        if (n3) {
          while (e4 = e4[s3]) if ((1 === e4.nodeType || c3) && a3(e4, t4, n3)) return true;
        } else while (e4 = e4[s3]) if (1 === e4.nodeType || c3) if (i3 = e4[S2] || (e4[S2] = {}), u3 && fe(e4, u3)) e4 = e4[s3] || e4;
        else {
          if ((r3 = i3[l3]) && r3[0] === E2 && r3[1] === f3) return o3[2] = r3[2];
          if ((i3[l3] = o3)[2] = a3(e4, t4, n3)) return true;
        }
        return false;
      };
    }
    function K2(i3) {
      return 1 < i3.length ? function(e3, t3, n3) {
        var r3 = i3.length;
        while (r3--) if (!i3[r3](e3, t3, n3)) return false;
        return true;
      } : i3[0];
    }
    function Z2(e3, t3, n3, r3, i3) {
      for (var o3, a3 = [], s3 = 0, u3 = e3.length, l3 = null != t3; s3 < u3; s3++) (o3 = e3[s3]) && (n3 && !n3(o3, r3, i3) || (a3.push(o3), l3 && t3.push(s3)));
      return a3;
    }
    function ee2(d3, h3, g3, v3, y3, e3) {
      return v3 && !v3[S2] && (v3 = ee2(v3)), y3 && !y3[S2] && (y3 = ee2(y3, e3)), F2(function(e4, t3, n3, r3) {
        var i3, o3, a3, s3, u3 = [], l3 = [], c3 = t3.length, f3 = e4 || (function(e5, t4, n4) {
          for (var r4 = 0, i4 = t4.length; r4 < i4; r4++) I2(e5, t4[r4], n4);
          return n4;
        })(h3 || "*", n3.nodeType ? [n3] : n3, []), p3 = !d3 || !e4 && h3 ? f3 : Z2(f3, u3, d3, n3, r3);
        if (g3 ? g3(p3, s3 = y3 || (e4 ? d3 : c3 || v3) ? [] : t3, n3, r3) : s3 = p3, v3) {
          i3 = Z2(s3, l3), v3(i3, [], n3, r3), o3 = i3.length;
          while (o3--) (a3 = i3[o3]) && (s3[l3[o3]] = !(p3[l3[o3]] = a3));
        }
        if (e4) {
          if (y3 || d3) {
            if (y3) {
              i3 = [], o3 = s3.length;
              while (o3--) (a3 = s3[o3]) && i3.push(p3[o3] = a3);
              y3(null, s3 = [], i3, r3);
            }
            o3 = s3.length;
            while (o3--) (a3 = s3[o3]) && -1 < (i3 = y3 ? se.call(e4, a3) : u3[o3]) && (e4[i3] = !(t3[i3] = a3));
          }
        } else s3 = Z2(s3 === t3 ? s3.splice(c3, s3.length) : s3), y3 ? y3(null, t3, s3, r3) : k2.apply(t3, s3);
      });
    }
    function te2(e3) {
      for (var i3, t3, n3, r3 = e3.length, o3 = b2.relative[e3[0].type], a3 = o3 || b2.relative[" "], s3 = o3 ? 1 : 0, u3 = J2(function(e4) {
        return e4 === i3;
      }, a3, true), l3 = J2(function(e4) {
        return -1 < se.call(i3, e4);
      }, a3, true), c3 = [function(e4, t4, n4) {
        var r4 = !o3 && (n4 || t4 != w2) || ((i3 = t4).nodeType ? u3(e4, t4, n4) : l3(e4, t4, n4));
        return i3 = null, r4;
      }]; s3 < r3; s3++) if (t3 = b2.relative[e3[s3].type]) c3 = [J2(K2(c3), t3)];
      else {
        if ((t3 = b2.filter[e3[s3].type].apply(null, e3[s3].matches))[S2]) {
          for (n3 = ++s3; n3 < r3; n3++) if (b2.relative[e3[n3].type]) break;
          return ee2(1 < s3 && K2(c3), 1 < s3 && Q2(e3.slice(0, s3 - 1).concat({ value: " " === e3[s3 - 2].type ? "*" : "" })).replace(ve, "$1"), t3, s3 < n3 && te2(e3.slice(s3, n3)), n3 < r3 && te2(e3 = e3.slice(n3)), n3 < r3 && Q2(e3));
        }
        c3.push(t3);
      }
      return K2(c3);
    }
    function ne2(e3, t3) {
      var n3, v3, y3, m3, x3, r3, i3 = [], o3 = [], a3 = u2[e3 + " "];
      if (!a3) {
        t3 || (t3 = Y2(e3)), n3 = t3.length;
        while (n3--) (a3 = te2(t3[n3]))[S2] ? i3.push(a3) : o3.push(a3);
        (a3 = u2(e3, (v3 = o3, m3 = 0 < (y3 = i3).length, x3 = 0 < v3.length, r3 = function(e4, t4, n4, r4, i4) {
          var o4, a4, s3, u3 = 0, l3 = "0", c3 = e4 && [], f3 = [], p3 = w2, d3 = e4 || x3 && b2.find.TAG("*", i4), h3 = E2 += null == p3 ? 1 : Math.random() || 0.1, g3 = d3.length;
          for (i4 && (w2 = t4 == T2 || t4 || i4); l3 !== g3 && null != (o4 = d3[l3]); l3++) {
            if (x3 && o4) {
              a4 = 0, t4 || o4.ownerDocument == T2 || (V2(o4), n4 = !C2);
              while (s3 = v3[a4++]) if (s3(o4, t4 || T2, n4)) {
                k2.call(r4, o4);
                break;
              }
              i4 && (E2 = h3);
            }
            m3 && ((o4 = !s3 && o4) && u3--, e4 && c3.push(o4));
          }
          if (u3 += l3, m3 && l3 !== u3) {
            a4 = 0;
            while (s3 = y3[a4++]) s3(c3, f3, t4, n4);
            if (e4) {
              if (0 < u3) while (l3--) c3[l3] || f3[l3] || (f3[l3] = pe.call(r4));
              f3 = Z2(f3);
            }
            k2.apply(r4, f3), i4 && !e4 && 0 < f3.length && 1 < u3 + y3.length && ce.uniqueSort(r4);
          }
          return i4 && (E2 = h3, w2 = p3), c3;
        }, m3 ? F2(r3) : r3))).selector = e3;
      }
      return a3;
    }
    function re2(e3, t3, n3, r3) {
      var i3, o3, a3, s3, u3, l3 = "function" == typeof e3 && e3, c3 = !r3 && Y2(e3 = l3.selector || e3);
      if (n3 = n3 || [], 1 === c3.length) {
        if (2 < (o3 = c3[0] = c3[0].slice(0)).length && "ID" === (a3 = o3[0]).type && 9 === t3.nodeType && C2 && b2.relative[o3[1].type]) {
          if (!(t3 = (b2.find.ID(a3.matches[0].replace(O2, P2), t3) || [])[0])) return n3;
          l3 && (t3 = t3.parentNode), e3 = e3.slice(o3.shift().value.length);
        }
        i3 = D2.needsContext.test(e3) ? 0 : o3.length;
        while (i3--) {
          if (a3 = o3[i3], b2.relative[s3 = a3.type]) break;
          if ((u3 = b2.find[s3]) && (r3 = u3(a3.matches[0].replace(O2, P2), H2.test(o3[0].type) && U2(t3.parentNode) || t3))) {
            if (o3.splice(i3, 1), !(e3 = r3.length && Q2(o3))) return k2.apply(n3, r3), n3;
            break;
          }
        }
      }
      return (l3 || ne2(e3, c3))(r3, t3, !C2, n3, !t3 || H2.test(e3) && U2(t3.parentNode) || t3), n3;
    }
    G2.prototype = b2.filters = b2.pseudos, b2.setFilters = new G2(), le.sortStable = S2.split("").sort(l2).join("") === S2, V2(), le.sortDetached = $2(function(e3) {
      return 1 & e3.compareDocumentPosition(T2.createElement("fieldset"));
    }), ce.find = I2, ce.expr[":"] = ce.expr.pseudos, ce.unique = ce.uniqueSort, I2.compile = ne2, I2.select = re2, I2.setDocument = V2, I2.tokenize = Y2, I2.escape = ce.escapeSelector, I2.getText = ce.text, I2.isXML = ce.isXMLDoc, I2.selectors = ce.expr, I2.support = ce.support, I2.uniqueSort = ce.uniqueSort;
  })();
  var d = function(e2, t2, n2) {
    var r2 = [], i2 = void 0 !== n2;
    while ((e2 = e2[t2]) && 9 !== e2.nodeType) if (1 === e2.nodeType) {
      if (i2 && ce(e2).is(n2)) break;
      r2.push(e2);
    }
    return r2;
  }, h = function(e2, t2) {
    for (var n2 = []; e2; e2 = e2.nextSibling) 1 === e2.nodeType && e2 !== t2 && n2.push(e2);
    return n2;
  }, b = ce.expr.match.needsContext, w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function T(e2, n2, r2) {
    return v(n2) ? ce.grep(e2, function(e3, t2) {
      return !!n2.call(e3, t2, e3) !== r2;
    }) : n2.nodeType ? ce.grep(e2, function(e3) {
      return e3 === n2 !== r2;
    }) : "string" != typeof n2 ? ce.grep(e2, function(e3) {
      return -1 < se.call(n2, e3) !== r2;
    }) : ce.filter(n2, e2, r2);
  }
  ce.filter = function(e2, t2, n2) {
    var r2 = t2[0];
    return n2 && (e2 = ":not(" + e2 + ")"), 1 === t2.length && 1 === r2.nodeType ? ce.find.matchesSelector(r2, e2) ? [r2] : [] : ce.find.matches(e2, ce.grep(t2, function(e3) {
      return 1 === e3.nodeType;
    }));
  }, ce.fn.extend({ find: function(e2) {
    var t2, n2, r2 = this.length, i2 = this;
    if ("string" != typeof e2) return this.pushStack(ce(e2).filter(function() {
      for (t2 = 0; t2 < r2; t2++) if (ce.contains(i2[t2], this)) return true;
    }));
    for (n2 = this.pushStack([]), t2 = 0; t2 < r2; t2++) ce.find(e2, i2[t2], n2);
    return 1 < r2 ? ce.uniqueSort(n2) : n2;
  }, filter: function(e2) {
    return this.pushStack(T(this, e2 || [], false));
  }, not: function(e2) {
    return this.pushStack(T(this, e2 || [], true));
  }, is: function(e2) {
    return !!T(this, "string" == typeof e2 && b.test(e2) ? ce(e2) : e2 || [], false).length;
  } });
  var k, S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (ce.fn.init = function(e2, t2, n2) {
    var r2, i2;
    if (!e2) return this;
    if (n2 = n2 || k, "string" == typeof e2) {
      if (!(r2 = "<" === e2[0] && ">" === e2[e2.length - 1] && 3 <= e2.length ? [null, e2, null] : S.exec(e2)) || !r2[1] && t2) return !t2 || t2.jquery ? (t2 || n2).find(e2) : this.constructor(t2).find(e2);
      if (r2[1]) {
        if (t2 = t2 instanceof ce ? t2[0] : t2, ce.merge(this, ce.parseHTML(r2[1], t2 && t2.nodeType ? t2.ownerDocument || t2 : C, true)), w.test(r2[1]) && ce.isPlainObject(t2)) for (r2 in t2) v(this[r2]) ? this[r2](t2[r2]) : this.attr(r2, t2[r2]);
        return this;
      }
      return (i2 = C.getElementById(r2[2])) && (this[0] = i2, this.length = 1), this;
    }
    return e2.nodeType ? (this[0] = e2, this.length = 1, this) : v(e2) ? void 0 !== n2.ready ? n2.ready(e2) : e2(ce) : ce.makeArray(e2, this);
  }).prototype = ce.fn, k = ce(C);
  var E = /^(?:parents|prev(?:Until|All))/, j = { children: true, contents: true, next: true, prev: true };
  function A(e2, t2) {
    while ((e2 = e2[t2]) && 1 !== e2.nodeType) ;
    return e2;
  }
  ce.fn.extend({ has: function(e2) {
    var t2 = ce(e2, this), n2 = t2.length;
    return this.filter(function() {
      for (var e3 = 0; e3 < n2; e3++) if (ce.contains(this, t2[e3])) return true;
    });
  }, closest: function(e2, t2) {
    var n2, r2 = 0, i2 = this.length, o2 = [], a2 = "string" != typeof e2 && ce(e2);
    if (!b.test(e2)) {
      for (; r2 < i2; r2++) for (n2 = this[r2]; n2 && n2 !== t2; n2 = n2.parentNode) if (n2.nodeType < 11 && (a2 ? -1 < a2.index(n2) : 1 === n2.nodeType && ce.find.matchesSelector(n2, e2))) {
        o2.push(n2);
        break;
      }
    }
    return this.pushStack(1 < o2.length ? ce.uniqueSort(o2) : o2);
  }, index: function(e2) {
    return e2 ? "string" == typeof e2 ? se.call(ce(e2), this[0]) : se.call(this, e2.jquery ? e2[0] : e2) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
  }, add: function(e2, t2) {
    return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e2, t2))));
  }, addBack: function(e2) {
    return this.add(null == e2 ? this.prevObject : this.prevObject.filter(e2));
  } }), ce.each({ parent: function(e2) {
    var t2 = e2.parentNode;
    return t2 && 11 !== t2.nodeType ? t2 : null;
  }, parents: function(e2) {
    return d(e2, "parentNode");
  }, parentsUntil: function(e2, t2, n2) {
    return d(e2, "parentNode", n2);
  }, next: function(e2) {
    return A(e2, "nextSibling");
  }, prev: function(e2) {
    return A(e2, "previousSibling");
  }, nextAll: function(e2) {
    return d(e2, "nextSibling");
  }, prevAll: function(e2) {
    return d(e2, "previousSibling");
  }, nextUntil: function(e2, t2, n2) {
    return d(e2, "nextSibling", n2);
  }, prevUntil: function(e2, t2, n2) {
    return d(e2, "previousSibling", n2);
  }, siblings: function(e2) {
    return h((e2.parentNode || {}).firstChild, e2);
  }, children: function(e2) {
    return h(e2.firstChild);
  }, contents: function(e2) {
    return null != e2.contentDocument && r(e2.contentDocument) ? e2.contentDocument : (fe(e2, "template") && (e2 = e2.content || e2), ce.merge([], e2.childNodes));
  } }, function(r2, i2) {
    ce.fn[r2] = function(e2, t2) {
      var n2 = ce.map(this, i2, e2);
      return "Until" !== r2.slice(-5) && (t2 = e2), t2 && "string" == typeof t2 && (n2 = ce.filter(t2, n2)), 1 < this.length && (j[r2] || ce.uniqueSort(n2), E.test(r2) && n2.reverse()), this.pushStack(n2);
    };
  });
  var D = /[^\x20\t\r\n\f]+/g;
  function N(e2) {
    return e2;
  }
  function q(e2) {
    throw e2;
  }
  function L(e2, t2, n2, r2) {
    var i2;
    try {
      e2 && v(i2 = e2.promise) ? i2.call(e2).done(t2).fail(n2) : e2 && v(i2 = e2.then) ? i2.call(e2, t2, n2) : t2.apply(void 0, [e2].slice(r2));
    } catch (e3) {
      n2.apply(void 0, [e3]);
    }
  }
  ce.Callbacks = function(r2) {
    var e2, n2;
    r2 = "string" == typeof r2 ? (e2 = r2, n2 = {}, ce.each(e2.match(D) || [], function(e3, t3) {
      n2[t3] = true;
    }), n2) : ce.extend({}, r2);
    var i2, t2, o2, a2, s2 = [], u2 = [], l2 = -1, c2 = function() {
      for (a2 = a2 || r2.once, o2 = i2 = true; u2.length; l2 = -1) {
        t2 = u2.shift();
        while (++l2 < s2.length) false === s2[l2].apply(t2[0], t2[1]) && r2.stopOnFalse && (l2 = s2.length, t2 = false);
      }
      r2.memory || (t2 = false), i2 = false, a2 && (s2 = t2 ? [] : "");
    }, f2 = { add: function() {
      return s2 && (t2 && !i2 && (l2 = s2.length - 1, u2.push(t2)), (function n3(e3) {
        ce.each(e3, function(e4, t3) {
          v(t3) ? r2.unique && f2.has(t3) || s2.push(t3) : t3 && t3.length && "string" !== x(t3) && n3(t3);
        });
      })(arguments), t2 && !i2 && c2()), this;
    }, remove: function() {
      return ce.each(arguments, function(e3, t3) {
        var n3;
        while (-1 < (n3 = ce.inArray(t3, s2, n3))) s2.splice(n3, 1), n3 <= l2 && l2--;
      }), this;
    }, has: function(e3) {
      return e3 ? -1 < ce.inArray(e3, s2) : 0 < s2.length;
    }, empty: function() {
      return s2 && (s2 = []), this;
    }, disable: function() {
      return a2 = u2 = [], s2 = t2 = "", this;
    }, disabled: function() {
      return !s2;
    }, lock: function() {
      return a2 = u2 = [], t2 || i2 || (s2 = t2 = ""), this;
    }, locked: function() {
      return !!a2;
    }, fireWith: function(e3, t3) {
      return a2 || (t3 = [e3, (t3 = t3 || []).slice ? t3.slice() : t3], u2.push(t3), i2 || c2()), this;
    }, fire: function() {
      return f2.fireWith(this, arguments), this;
    }, fired: function() {
      return !!o2;
    } };
    return f2;
  }, ce.extend({ Deferred: function(e2) {
    var o2 = [["notify", "progress", ce.Callbacks("memory"), ce.Callbacks("memory"), 2], ["resolve", "done", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 1, "rejected"]], i2 = "pending", a2 = { state: function() {
      return i2;
    }, always: function() {
      return s2.done(arguments).fail(arguments), this;
    }, "catch": function(e3) {
      return a2.then(null, e3);
    }, pipe: function() {
      var i3 = arguments;
      return ce.Deferred(function(r2) {
        ce.each(o2, function(e3, t2) {
          var n2 = v(i3[t2[4]]) && i3[t2[4]];
          s2[t2[1]](function() {
            var e4 = n2 && n2.apply(this, arguments);
            e4 && v(e4.promise) ? e4.promise().progress(r2.notify).done(r2.resolve).fail(r2.reject) : r2[t2[0] + "With"](this, n2 ? [e4] : arguments);
          });
        }), i3 = null;
      }).promise();
    }, then: function(t2, n2, r2) {
      var u2 = 0;
      function l2(i3, o3, a3, s3) {
        return function() {
          var n3 = this, r3 = arguments, e3 = function() {
            var e4, t4;
            if (!(i3 < u2)) {
              if ((e4 = a3.apply(n3, r3)) === o3.promise()) throw new TypeError("Thenable self-resolution");
              t4 = e4 && ("object" == typeof e4 || "function" == typeof e4) && e4.then, v(t4) ? s3 ? t4.call(e4, l2(u2, o3, N, s3), l2(u2, o3, q, s3)) : (u2++, t4.call(e4, l2(u2, o3, N, s3), l2(u2, o3, q, s3), l2(u2, o3, N, o3.notifyWith))) : (a3 !== N && (n3 = void 0, r3 = [e4]), (s3 || o3.resolveWith)(n3, r3));
            }
          }, t3 = s3 ? e3 : function() {
            try {
              e3();
            } catch (e4) {
              ce.Deferred.exceptionHook && ce.Deferred.exceptionHook(e4, t3.error), u2 <= i3 + 1 && (a3 !== q && (n3 = void 0, r3 = [e4]), o3.rejectWith(n3, r3));
            }
          };
          i3 ? t3() : (ce.Deferred.getErrorHook ? t3.error = ce.Deferred.getErrorHook() : ce.Deferred.getStackHook && (t3.error = ce.Deferred.getStackHook()), ie.setTimeout(t3));
        };
      }
      return ce.Deferred(function(e3) {
        o2[0][3].add(l2(0, e3, v(r2) ? r2 : N, e3.notifyWith)), o2[1][3].add(l2(0, e3, v(t2) ? t2 : N)), o2[2][3].add(l2(0, e3, v(n2) ? n2 : q));
      }).promise();
    }, promise: function(e3) {
      return null != e3 ? ce.extend(e3, a2) : a2;
    } }, s2 = {};
    return ce.each(o2, function(e3, t2) {
      var n2 = t2[2], r2 = t2[5];
      a2[t2[1]] = n2.add, r2 && n2.add(function() {
        i2 = r2;
      }, o2[3 - e3][2].disable, o2[3 - e3][3].disable, o2[0][2].lock, o2[0][3].lock), n2.add(t2[3].fire), s2[t2[0]] = function() {
        return s2[t2[0] + "With"](this === s2 ? void 0 : this, arguments), this;
      }, s2[t2[0] + "With"] = n2.fireWith;
    }), a2.promise(s2), e2 && e2.call(s2, s2), s2;
  }, when: function(e2) {
    var n2 = arguments.length, t2 = n2, r2 = Array(t2), i2 = ae.call(arguments), o2 = ce.Deferred(), a2 = function(t3) {
      return function(e3) {
        r2[t3] = this, i2[t3] = 1 < arguments.length ? ae.call(arguments) : e3, --n2 || o2.resolveWith(r2, i2);
      };
    };
    if (n2 <= 1 && (L(e2, o2.done(a2(t2)).resolve, o2.reject, !n2), "pending" === o2.state() || v(i2[t2] && i2[t2].then))) return o2.then();
    while (t2--) L(i2[t2], a2(t2), o2.reject);
    return o2.promise();
  } });
  var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  ce.Deferred.exceptionHook = function(e2, t2) {
    ie.console && ie.console.warn && e2 && H.test(e2.name) && ie.console.warn("jQuery.Deferred exception: " + e2.message, e2.stack, t2);
  }, ce.readyException = function(e2) {
    ie.setTimeout(function() {
      throw e2;
    });
  };
  var O = ce.Deferred();
  function P() {
    C.removeEventListener("DOMContentLoaded", P), ie.removeEventListener("load", P), ce.ready();
  }
  ce.fn.ready = function(e2) {
    return O.then(e2)["catch"](function(e3) {
      ce.readyException(e3);
    }), this;
  }, ce.extend({ isReady: false, readyWait: 1, ready: function(e2) {
    (true === e2 ? --ce.readyWait : ce.isReady) || (ce.isReady = true) !== e2 && 0 < --ce.readyWait || O.resolveWith(C, [ce]);
  } }), ce.ready.then = O.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? ie.setTimeout(ce.ready) : (C.addEventListener("DOMContentLoaded", P), ie.addEventListener("load", P));
  var M = function(e2, t2, n2, r2, i2, o2, a2) {
    var s2 = 0, u2 = e2.length, l2 = null == n2;
    if ("object" === x(n2)) for (s2 in i2 = true, n2) M(e2, t2, s2, n2[s2], true, o2, a2);
    else if (void 0 !== r2 && (i2 = true, v(r2) || (a2 = true), l2 && (a2 ? (t2.call(e2, r2), t2 = null) : (l2 = t2, t2 = function(e3, t3, n3) {
      return l2.call(ce(e3), n3);
    })), t2)) for (; s2 < u2; s2++) t2(e2[s2], n2, a2 ? r2 : r2.call(e2[s2], s2, t2(e2[s2], n2)));
    return i2 ? e2 : l2 ? t2.call(e2) : u2 ? t2(e2[0], n2) : o2;
  }, R = /^-ms-/, I = /-([a-z])/g;
  function W(e2, t2) {
    return t2.toUpperCase();
  }
  function F(e2) {
    return e2.replace(R, "ms-").replace(I, W);
  }
  var $ = function(e2) {
    return 1 === e2.nodeType || 9 === e2.nodeType || !+e2.nodeType;
  };
  function B() {
    this.expando = ce.expando + B.uid++;
  }
  B.uid = 1, B.prototype = { cache: function(e2) {
    var t2 = e2[this.expando];
    return t2 || (t2 = {}, $(e2) && (e2.nodeType ? e2[this.expando] = t2 : Object.defineProperty(e2, this.expando, { value: t2, configurable: true }))), t2;
  }, set: function(e2, t2, n2) {
    var r2, i2 = this.cache(e2);
    if ("string" == typeof t2) i2[F(t2)] = n2;
    else for (r2 in t2) i2[F(r2)] = t2[r2];
    return i2;
  }, get: function(e2, t2) {
    return void 0 === t2 ? this.cache(e2) : e2[this.expando] && e2[this.expando][F(t2)];
  }, access: function(e2, t2, n2) {
    return void 0 === t2 || t2 && "string" == typeof t2 && void 0 === n2 ? this.get(e2, t2) : (this.set(e2, t2, n2), void 0 !== n2 ? n2 : t2);
  }, remove: function(e2, t2) {
    var n2, r2 = e2[this.expando];
    if (void 0 !== r2) {
      if (void 0 !== t2) {
        n2 = (t2 = Array.isArray(t2) ? t2.map(F) : (t2 = F(t2)) in r2 ? [t2] : t2.match(D) || []).length;
        while (n2--) delete r2[t2[n2]];
      }
      (void 0 === t2 || ce.isEmptyObject(r2)) && (e2.nodeType ? e2[this.expando] = void 0 : delete e2[this.expando]);
    }
  }, hasData: function(e2) {
    var t2 = e2[this.expando];
    return void 0 !== t2 && !ce.isEmptyObject(t2);
  } };
  var _ = new B(), z = new B(), X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, U = /[A-Z]/g;
  function V(e2, t2, n2) {
    var r2, i2;
    if (void 0 === n2 && 1 === e2.nodeType) if (r2 = "data-" + t2.replace(U, "-$&").toLowerCase(), "string" == typeof (n2 = e2.getAttribute(r2))) {
      try {
        n2 = "true" === (i2 = n2) || "false" !== i2 && ("null" === i2 ? null : i2 === +i2 + "" ? +i2 : X.test(i2) ? JSON.parse(i2) : i2);
      } catch (e3) {
      }
      z.set(e2, t2, n2);
    } else n2 = void 0;
    return n2;
  }
  ce.extend({ hasData: function(e2) {
    return z.hasData(e2) || _.hasData(e2);
  }, data: function(e2, t2, n2) {
    return z.access(e2, t2, n2);
  }, removeData: function(e2, t2) {
    z.remove(e2, t2);
  }, _data: function(e2, t2, n2) {
    return _.access(e2, t2, n2);
  }, _removeData: function(e2, t2) {
    _.remove(e2, t2);
  } }), ce.fn.extend({ data: function(n2, e2) {
    var t2, r2, i2, o2 = this[0], a2 = o2 && o2.attributes;
    if (void 0 === n2) {
      if (this.length && (i2 = z.get(o2), 1 === o2.nodeType && !_.get(o2, "hasDataAttrs"))) {
        t2 = a2.length;
        while (t2--) a2[t2] && 0 === (r2 = a2[t2].name).indexOf("data-") && (r2 = F(r2.slice(5)), V(o2, r2, i2[r2]));
        _.set(o2, "hasDataAttrs", true);
      }
      return i2;
    }
    return "object" == typeof n2 ? this.each(function() {
      z.set(this, n2);
    }) : M(this, function(e3) {
      var t3;
      if (o2 && void 0 === e3) return void 0 !== (t3 = z.get(o2, n2)) ? t3 : void 0 !== (t3 = V(o2, n2)) ? t3 : void 0;
      this.each(function() {
        z.set(this, n2, e3);
      });
    }, null, e2, 1 < arguments.length, null, true);
  }, removeData: function(e2) {
    return this.each(function() {
      z.remove(this, e2);
    });
  } }), ce.extend({ queue: function(e2, t2, n2) {
    var r2;
    if (e2) return t2 = (t2 || "fx") + "queue", r2 = _.get(e2, t2), n2 && (!r2 || Array.isArray(n2) ? r2 = _.access(e2, t2, ce.makeArray(n2)) : r2.push(n2)), r2 || [];
  }, dequeue: function(e2, t2) {
    t2 = t2 || "fx";
    var n2 = ce.queue(e2, t2), r2 = n2.length, i2 = n2.shift(), o2 = ce._queueHooks(e2, t2);
    "inprogress" === i2 && (i2 = n2.shift(), r2--), i2 && ("fx" === t2 && n2.unshift("inprogress"), delete o2.stop, i2.call(e2, function() {
      ce.dequeue(e2, t2);
    }, o2)), !r2 && o2 && o2.empty.fire();
  }, _queueHooks: function(e2, t2) {
    var n2 = t2 + "queueHooks";
    return _.get(e2, n2) || _.access(e2, n2, { empty: ce.Callbacks("once memory").add(function() {
      _.remove(e2, [t2 + "queue", n2]);
    }) });
  } }), ce.fn.extend({ queue: function(t2, n2) {
    var e2 = 2;
    return "string" != typeof t2 && (n2 = t2, t2 = "fx", e2--), arguments.length < e2 ? ce.queue(this[0], t2) : void 0 === n2 ? this : this.each(function() {
      var e3 = ce.queue(this, t2, n2);
      ce._queueHooks(this, t2), "fx" === t2 && "inprogress" !== e3[0] && ce.dequeue(this, t2);
    });
  }, dequeue: function(e2) {
    return this.each(function() {
      ce.dequeue(this, e2);
    });
  }, clearQueue: function(e2) {
    return this.queue(e2 || "fx", []);
  }, promise: function(e2, t2) {
    var n2, r2 = 1, i2 = ce.Deferred(), o2 = this, a2 = this.length, s2 = function() {
      --r2 || i2.resolveWith(o2, [o2]);
    };
    "string" != typeof e2 && (t2 = e2, e2 = void 0), e2 = e2 || "fx";
    while (a2--) (n2 = _.get(o2[a2], e2 + "queueHooks")) && n2.empty && (r2++, n2.empty.add(s2));
    return s2(), i2.promise(t2);
  } });
  var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Y = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"), Q = ["Top", "Right", "Bottom", "Left"], J = C.documentElement, K = function(e2) {
    return ce.contains(e2.ownerDocument, e2);
  }, Z = { composed: true };
  J.getRootNode && (K = function(e2) {
    return ce.contains(e2.ownerDocument, e2) || e2.getRootNode(Z) === e2.ownerDocument;
  });
  var ee = function(e2, t2) {
    return "none" === (e2 = t2 || e2).style.display || "" === e2.style.display && K(e2) && "none" === ce.css(e2, "display");
  };
  function te(e2, t2, n2, r2) {
    var i2, o2, a2 = 20, s2 = r2 ? function() {
      return r2.cur();
    } : function() {
      return ce.css(e2, t2, "");
    }, u2 = s2(), l2 = n2 && n2[3] || (ce.cssNumber[t2] ? "" : "px"), c2 = e2.nodeType && (ce.cssNumber[t2] || "px" !== l2 && +u2) && Y.exec(ce.css(e2, t2));
    if (c2 && c2[3] !== l2) {
      u2 /= 2, l2 = l2 || c2[3], c2 = +u2 || 1;
      while (a2--) ce.style(e2, t2, c2 + l2), (1 - o2) * (1 - (o2 = s2() / u2 || 0.5)) <= 0 && (a2 = 0), c2 /= o2;
      c2 *= 2, ce.style(e2, t2, c2 + l2), n2 = n2 || [];
    }
    return n2 && (c2 = +c2 || +u2 || 0, i2 = n2[1] ? c2 + (n2[1] + 1) * n2[2] : +n2[2], r2 && (r2.unit = l2, r2.start = c2, r2.end = i2)), i2;
  }
  var ne = {};
  function re(e2, t2) {
    for (var n2, r2, i2, o2, a2, s2, u2, l2 = [], c2 = 0, f2 = e2.length; c2 < f2; c2++) (r2 = e2[c2]).style && (n2 = r2.style.display, t2 ? ("none" === n2 && (l2[c2] = _.get(r2, "display") || null, l2[c2] || (r2.style.display = "")), "" === r2.style.display && ee(r2) && (l2[c2] = (u2 = a2 = o2 = void 0, a2 = (i2 = r2).ownerDocument, s2 = i2.nodeName, (u2 = ne[s2]) || (o2 = a2.body.appendChild(a2.createElement(s2)), u2 = ce.css(o2, "display"), o2.parentNode.removeChild(o2), "none" === u2 && (u2 = "block"), ne[s2] = u2)))) : "none" !== n2 && (l2[c2] = "none", _.set(r2, "display", n2)));
    for (c2 = 0; c2 < f2; c2++) null != l2[c2] && (e2[c2].style.display = l2[c2]);
    return e2;
  }
  ce.fn.extend({ show: function() {
    return re(this, true);
  }, hide: function() {
    return re(this);
  }, toggle: function(e2) {
    return "boolean" == typeof e2 ? e2 ? this.show() : this.hide() : this.each(function() {
      ee(this) ? ce(this).show() : ce(this).hide();
    });
  } });
  var xe, be, we = /^(?:checkbox|radio)$/i, Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, Ce = /^$|^module$|\/(?:java|ecma)script/i;
  xe = C.createDocumentFragment().appendChild(C.createElement("div")), (be = C.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), xe.appendChild(be), le.checkClone = xe.cloneNode(true).cloneNode(true).lastChild.checked, xe.innerHTML = "<textarea>x</textarea>", le.noCloneChecked = !!xe.cloneNode(true).lastChild.defaultValue, xe.innerHTML = "<option></option>", le.option = !!xe.lastChild;
  var ke = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
  function Se(e2, t2) {
    var n2;
    return n2 = "undefined" != typeof e2.getElementsByTagName ? e2.getElementsByTagName(t2 || "*") : "undefined" != typeof e2.querySelectorAll ? e2.querySelectorAll(t2 || "*") : [], void 0 === t2 || t2 && fe(e2, t2) ? ce.merge([e2], n2) : n2;
  }
  function Ee(e2, t2) {
    for (var n2 = 0, r2 = e2.length; n2 < r2; n2++) _.set(e2[n2], "globalEval", !t2 || _.get(t2[n2], "globalEval"));
  }
  ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead, ke.th = ke.td, le.option || (ke.optgroup = ke.option = [1, "<select multiple='multiple'>", "</select>"]);
  var je = /<|&#?\w+;/;
  function Ae(e2, t2, n2, r2, i2) {
    for (var o2, a2, s2, u2, l2, c2, f2 = t2.createDocumentFragment(), p2 = [], d2 = 0, h2 = e2.length; d2 < h2; d2++) if ((o2 = e2[d2]) || 0 === o2) if ("object" === x(o2)) ce.merge(p2, o2.nodeType ? [o2] : o2);
    else if (je.test(o2)) {
      a2 = a2 || f2.appendChild(t2.createElement("div")), s2 = (Te.exec(o2) || ["", ""])[1].toLowerCase(), u2 = ke[s2] || ke._default, a2.innerHTML = u2[1] + ce.htmlPrefilter(o2) + u2[2], c2 = u2[0];
      while (c2--) a2 = a2.lastChild;
      ce.merge(p2, a2.childNodes), (a2 = f2.firstChild).textContent = "";
    } else p2.push(t2.createTextNode(o2));
    f2.textContent = "", d2 = 0;
    while (o2 = p2[d2++]) if (r2 && -1 < ce.inArray(o2, r2)) i2 && i2.push(o2);
    else if (l2 = K(o2), a2 = Se(f2.appendChild(o2), "script"), l2 && Ee(a2), n2) {
      c2 = 0;
      while (o2 = a2[c2++]) Ce.test(o2.type || "") && n2.push(o2);
    }
    return f2;
  }
  var De = /^([^.]*)(?:\.(.+)|)/;
  function Ne() {
    return true;
  }
  function qe() {
    return false;
  }
  function Le(e2, t2, n2, r2, i2, o2) {
    var a2, s2;
    if ("object" == typeof t2) {
      for (s2 in "string" != typeof n2 && (r2 = r2 || n2, n2 = void 0), t2) Le(e2, s2, n2, r2, t2[s2], o2);
      return e2;
    }
    if (null == r2 && null == i2 ? (i2 = n2, r2 = n2 = void 0) : null == i2 && ("string" == typeof n2 ? (i2 = r2, r2 = void 0) : (i2 = r2, r2 = n2, n2 = void 0)), false === i2) i2 = qe;
    else if (!i2) return e2;
    return 1 === o2 && (a2 = i2, (i2 = function(e3) {
      return ce().off(e3), a2.apply(this, arguments);
    }).guid = a2.guid || (a2.guid = ce.guid++)), e2.each(function() {
      ce.event.add(this, t2, i2, r2, n2);
    });
  }
  function He(e2, r2, t2) {
    t2 ? (_.set(e2, r2, false), ce.event.add(e2, r2, { namespace: false, handler: function(e3) {
      var t3, n2 = _.get(this, r2);
      if (1 & e3.isTrigger && this[r2]) {
        if (n2) (ce.event.special[r2] || {}).delegateType && e3.stopPropagation();
        else if (n2 = ae.call(arguments), _.set(this, r2, n2), this[r2](), t3 = _.get(this, r2), _.set(this, r2, false), n2 !== t3) return e3.stopImmediatePropagation(), e3.preventDefault(), t3;
      } else n2 && (_.set(this, r2, ce.event.trigger(n2[0], n2.slice(1), this)), e3.stopPropagation(), e3.isImmediatePropagationStopped = Ne);
    } })) : void 0 === _.get(e2, r2) && ce.event.add(e2, r2, Ne);
  }
  ce.event = { global: {}, add: function(t2, e2, n2, r2, i2) {
    var o2, a2, s2, u2, l2, c2, f2, p2, d2, h2, g2, v2 = _.get(t2);
    if ($(t2)) {
      n2.handler && (n2 = (o2 = n2).handler, i2 = o2.selector), i2 && ce.find.matchesSelector(J, i2), n2.guid || (n2.guid = ce.guid++), (u2 = v2.events) || (u2 = v2.events = /* @__PURE__ */ Object.create(null)), (a2 = v2.handle) || (a2 = v2.handle = function(e3) {
        return "undefined" != typeof ce && ce.event.triggered !== e3.type ? ce.event.dispatch.apply(t2, arguments) : void 0;
      }), l2 = (e2 = (e2 || "").match(D) || [""]).length;
      while (l2--) d2 = g2 = (s2 = De.exec(e2[l2]) || [])[1], h2 = (s2[2] || "").split(".").sort(), d2 && (f2 = ce.event.special[d2] || {}, d2 = (i2 ? f2.delegateType : f2.bindType) || d2, f2 = ce.event.special[d2] || {}, c2 = ce.extend({ type: d2, origType: g2, data: r2, handler: n2, guid: n2.guid, selector: i2, needsContext: i2 && ce.expr.match.needsContext.test(i2), namespace: h2.join(".") }, o2), (p2 = u2[d2]) || ((p2 = u2[d2] = []).delegateCount = 0, f2.setup && false !== f2.setup.call(t2, r2, h2, a2) || t2.addEventListener && t2.addEventListener(d2, a2)), f2.add && (f2.add.call(t2, c2), c2.handler.guid || (c2.handler.guid = n2.guid)), i2 ? p2.splice(p2.delegateCount++, 0, c2) : p2.push(c2), ce.event.global[d2] = true);
    }
  }, remove: function(e2, t2, n2, r2, i2) {
    var o2, a2, s2, u2, l2, c2, f2, p2, d2, h2, g2, v2 = _.hasData(e2) && _.get(e2);
    if (v2 && (u2 = v2.events)) {
      l2 = (t2 = (t2 || "").match(D) || [""]).length;
      while (l2--) if (d2 = g2 = (s2 = De.exec(t2[l2]) || [])[1], h2 = (s2[2] || "").split(".").sort(), d2) {
        f2 = ce.event.special[d2] || {}, p2 = u2[d2 = (r2 ? f2.delegateType : f2.bindType) || d2] || [], s2 = s2[2] && new RegExp("(^|\\.)" + h2.join("\\.(?:.*\\.|)") + "(\\.|$)"), a2 = o2 = p2.length;
        while (o2--) c2 = p2[o2], !i2 && g2 !== c2.origType || n2 && n2.guid !== c2.guid || s2 && !s2.test(c2.namespace) || r2 && r2 !== c2.selector && ("**" !== r2 || !c2.selector) || (p2.splice(o2, 1), c2.selector && p2.delegateCount--, f2.remove && f2.remove.call(e2, c2));
        a2 && !p2.length && (f2.teardown && false !== f2.teardown.call(e2, h2, v2.handle) || ce.removeEvent(e2, d2, v2.handle), delete u2[d2]);
      } else for (d2 in u2) ce.event.remove(e2, d2 + t2[l2], n2, r2, true);
      ce.isEmptyObject(u2) && _.remove(e2, "handle events");
    }
  }, dispatch: function(e2) {
    var t2, n2, r2, i2, o2, a2, s2 = new Array(arguments.length), u2 = ce.event.fix(e2), l2 = (_.get(this, "events") || /* @__PURE__ */ Object.create(null))[u2.type] || [], c2 = ce.event.special[u2.type] || {};
    for (s2[0] = u2, t2 = 1; t2 < arguments.length; t2++) s2[t2] = arguments[t2];
    if (u2.delegateTarget = this, !c2.preDispatch || false !== c2.preDispatch.call(this, u2)) {
      a2 = ce.event.handlers.call(this, u2, l2), t2 = 0;
      while ((i2 = a2[t2++]) && !u2.isPropagationStopped()) {
        u2.currentTarget = i2.elem, n2 = 0;
        while ((o2 = i2.handlers[n2++]) && !u2.isImmediatePropagationStopped()) u2.rnamespace && false !== o2.namespace && !u2.rnamespace.test(o2.namespace) || (u2.handleObj = o2, u2.data = o2.data, void 0 !== (r2 = ((ce.event.special[o2.origType] || {}).handle || o2.handler).apply(i2.elem, s2)) && false === (u2.result = r2) && (u2.preventDefault(), u2.stopPropagation()));
      }
      return c2.postDispatch && c2.postDispatch.call(this, u2), u2.result;
    }
  }, handlers: function(e2, t2) {
    var n2, r2, i2, o2, a2, s2 = [], u2 = t2.delegateCount, l2 = e2.target;
    if (u2 && l2.nodeType && !("click" === e2.type && 1 <= e2.button)) {
      for (; l2 !== this; l2 = l2.parentNode || this) if (1 === l2.nodeType && ("click" !== e2.type || true !== l2.disabled)) {
        for (o2 = [], a2 = {}, n2 = 0; n2 < u2; n2++) void 0 === a2[i2 = (r2 = t2[n2]).selector + " "] && (a2[i2] = r2.needsContext ? -1 < ce(i2, this).index(l2) : ce.find(i2, this, null, [l2]).length), a2[i2] && o2.push(r2);
        o2.length && s2.push({ elem: l2, handlers: o2 });
      }
    }
    return l2 = this, u2 < t2.length && s2.push({ elem: l2, handlers: t2.slice(u2) }), s2;
  }, addProp: function(t2, e2) {
    Object.defineProperty(ce.Event.prototype, t2, { enumerable: true, configurable: true, get: v(e2) ? function() {
      if (this.originalEvent) return e2(this.originalEvent);
    } : function() {
      if (this.originalEvent) return this.originalEvent[t2];
    }, set: function(e3) {
      Object.defineProperty(this, t2, { enumerable: true, configurable: true, writable: true, value: e3 });
    } });
  }, fix: function(e2) {
    return e2[ce.expando] ? e2 : new ce.Event(e2);
  }, special: { load: { noBubble: true }, click: { setup: function(e2) {
    var t2 = this || e2;
    return we.test(t2.type) && t2.click && fe(t2, "input") && He(t2, "click", true), false;
  }, trigger: function(e2) {
    var t2 = this || e2;
    return we.test(t2.type) && t2.click && fe(t2, "input") && He(t2, "click"), true;
  }, _default: function(e2) {
    var t2 = e2.target;
    return we.test(t2.type) && t2.click && fe(t2, "input") && _.get(t2, "click") || fe(t2, "a");
  } }, beforeunload: { postDispatch: function(e2) {
    void 0 !== e2.result && e2.originalEvent && (e2.originalEvent.returnValue = e2.result);
  } } } }, ce.removeEvent = function(e2, t2, n2) {
    e2.removeEventListener && e2.removeEventListener(t2, n2);
  }, ce.Event = function(e2, t2) {
    if (!(this instanceof ce.Event)) return new ce.Event(e2, t2);
    e2 && e2.type ? (this.originalEvent = e2, this.type = e2.type, this.isDefaultPrevented = e2.defaultPrevented || void 0 === e2.defaultPrevented && false === e2.returnValue ? Ne : qe, this.target = e2.target && 3 === e2.target.nodeType ? e2.target.parentNode : e2.target, this.currentTarget = e2.currentTarget, this.relatedTarget = e2.relatedTarget) : this.type = e2, t2 && ce.extend(this, t2), this.timeStamp = e2 && e2.timeStamp || Date.now(), this[ce.expando] = true;
  }, ce.Event.prototype = { constructor: ce.Event, isDefaultPrevented: qe, isPropagationStopped: qe, isImmediatePropagationStopped: qe, isSimulated: false, preventDefault: function() {
    var e2 = this.originalEvent;
    this.isDefaultPrevented = Ne, e2 && !this.isSimulated && e2.preventDefault();
  }, stopPropagation: function() {
    var e2 = this.originalEvent;
    this.isPropagationStopped = Ne, e2 && !this.isSimulated && e2.stopPropagation();
  }, stopImmediatePropagation: function() {
    var e2 = this.originalEvent;
    this.isImmediatePropagationStopped = Ne, e2 && !this.isSimulated && e2.stopImmediatePropagation(), this.stopPropagation();
  } }, ce.each({ altKey: true, bubbles: true, cancelable: true, changedTouches: true, ctrlKey: true, detail: true, eventPhase: true, metaKey: true, pageX: true, pageY: true, shiftKey: true, view: true, "char": true, code: true, charCode: true, key: true, keyCode: true, button: true, buttons: true, clientX: true, clientY: true, offsetX: true, offsetY: true, pointerId: true, pointerType: true, screenX: true, screenY: true, targetTouches: true, toElement: true, touches: true, which: true }, ce.event.addProp), ce.each({ focus: "focusin", blur: "focusout" }, function(r2, i2) {
    function o2(e2) {
      if (C.documentMode) {
        var t2 = _.get(this, "handle"), n2 = ce.event.fix(e2);
        n2.type = "focusin" === e2.type ? "focus" : "blur", n2.isSimulated = true, t2(e2), n2.target === n2.currentTarget && t2(n2);
      } else ce.event.simulate(i2, e2.target, ce.event.fix(e2));
    }
    ce.event.special[r2] = { setup: function() {
      var e2;
      if (He(this, r2, true), !C.documentMode) return false;
      (e2 = _.get(this, i2)) || this.addEventListener(i2, o2), _.set(this, i2, (e2 || 0) + 1);
    }, trigger: function() {
      return He(this, r2), true;
    }, teardown: function() {
      var e2;
      if (!C.documentMode) return false;
      (e2 = _.get(this, i2) - 1) ? _.set(this, i2, e2) : (this.removeEventListener(i2, o2), _.remove(this, i2));
    }, _default: function(e2) {
      return _.get(e2.target, r2);
    }, delegateType: i2 }, ce.event.special[i2] = { setup: function() {
      var e2 = this.ownerDocument || this.document || this, t2 = C.documentMode ? this : e2, n2 = _.get(t2, i2);
      n2 || (C.documentMode ? this.addEventListener(i2, o2) : e2.addEventListener(r2, o2, true)), _.set(t2, i2, (n2 || 0) + 1);
    }, teardown: function() {
      var e2 = this.ownerDocument || this.document || this, t2 = C.documentMode ? this : e2, n2 = _.get(t2, i2) - 1;
      n2 ? _.set(t2, i2, n2) : (C.documentMode ? this.removeEventListener(i2, o2) : e2.removeEventListener(r2, o2, true), _.remove(t2, i2));
    } };
  }), ce.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e2, i2) {
    ce.event.special[e2] = { delegateType: i2, bindType: i2, handle: function(e3) {
      var t2, n2 = e3.relatedTarget, r2 = e3.handleObj;
      return n2 && (n2 === this || ce.contains(this, n2)) || (e3.type = r2.origType, t2 = r2.handler.apply(this, arguments), e3.type = i2), t2;
    } };
  }), ce.fn.extend({ on: function(e2, t2, n2, r2) {
    return Le(this, e2, t2, n2, r2);
  }, one: function(e2, t2, n2, r2) {
    return Le(this, e2, t2, n2, r2, 1);
  }, off: function(e2, t2, n2) {
    var r2, i2;
    if (e2 && e2.preventDefault && e2.handleObj) return r2 = e2.handleObj, ce(e2.delegateTarget).off(r2.namespace ? r2.origType + "." + r2.namespace : r2.origType, r2.selector, r2.handler), this;
    if ("object" == typeof e2) {
      for (i2 in e2) this.off(i2, t2, e2[i2]);
      return this;
    }
    return false !== t2 && "function" != typeof t2 || (n2 = t2, t2 = void 0), false === n2 && (n2 = qe), this.each(function() {
      ce.event.remove(this, e2, n2, t2);
    });
  } });
  var Oe = /<script|<style|<link/i, Pe = /checked\s*(?:[^=]|=\s*.checked.)/i, Me = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function Re(e2, t2) {
    return fe(e2, "table") && fe(11 !== t2.nodeType ? t2 : t2.firstChild, "tr") && ce(e2).children("tbody")[0] || e2;
  }
  function Ie(e2) {
    return e2.type = (null !== e2.getAttribute("type")) + "/" + e2.type, e2;
  }
  function We(e2) {
    return "true/" === (e2.type || "").slice(0, 5) ? e2.type = e2.type.slice(5) : e2.removeAttribute("type"), e2;
  }
  function Fe(e2, t2) {
    var n2, r2, i2, o2, a2, s2;
    if (1 === t2.nodeType) {
      if (_.hasData(e2) && (s2 = _.get(e2).events)) for (i2 in _.remove(t2, "handle events"), s2) for (n2 = 0, r2 = s2[i2].length; n2 < r2; n2++) ce.event.add(t2, i2, s2[i2][n2]);
      z.hasData(e2) && (o2 = z.access(e2), a2 = ce.extend({}, o2), z.set(t2, a2));
    }
  }
  function $e(n2, r2, i2, o2) {
    r2 = g(r2);
    var e2, t2, a2, s2, u2, l2, c2 = 0, f2 = n2.length, p2 = f2 - 1, d2 = r2[0], h2 = v(d2);
    if (h2 || 1 < f2 && "string" == typeof d2 && !le.checkClone && Pe.test(d2)) return n2.each(function(e3) {
      var t3 = n2.eq(e3);
      h2 && (r2[0] = d2.call(this, e3, t3.html())), $e(t3, r2, i2, o2);
    });
    if (f2 && (t2 = (e2 = Ae(r2, n2[0].ownerDocument, false, n2, o2)).firstChild, 1 === e2.childNodes.length && (e2 = t2), t2 || o2)) {
      for (s2 = (a2 = ce.map(Se(e2, "script"), Ie)).length; c2 < f2; c2++) u2 = e2, c2 !== p2 && (u2 = ce.clone(u2, true, true), s2 && ce.merge(a2, Se(u2, "script"))), i2.call(n2[c2], u2, c2);
      if (s2) for (l2 = a2[a2.length - 1].ownerDocument, ce.map(a2, We), c2 = 0; c2 < s2; c2++) u2 = a2[c2], Ce.test(u2.type || "") && !_.access(u2, "globalEval") && ce.contains(l2, u2) && (u2.src && "module" !== (u2.type || "").toLowerCase() ? ce._evalUrl && !u2.noModule && ce._evalUrl(u2.src, { nonce: u2.nonce || u2.getAttribute("nonce") }, l2) : m(u2.textContent.replace(Me, ""), u2, l2));
    }
    return n2;
  }
  function Be(e2, t2, n2) {
    for (var r2, i2 = t2 ? ce.filter(t2, e2) : e2, o2 = 0; null != (r2 = i2[o2]); o2++) n2 || 1 !== r2.nodeType || ce.cleanData(Se(r2)), r2.parentNode && (n2 && K(r2) && Ee(Se(r2, "script")), r2.parentNode.removeChild(r2));
    return e2;
  }
  ce.extend({ htmlPrefilter: function(e2) {
    return e2;
  }, clone: function(e2, t2, n2) {
    var r2, i2, o2, a2, s2, u2, l2, c2 = e2.cloneNode(true), f2 = K(e2);
    if (!(le.noCloneChecked || 1 !== e2.nodeType && 11 !== e2.nodeType || ce.isXMLDoc(e2))) for (a2 = Se(c2), r2 = 0, i2 = (o2 = Se(e2)).length; r2 < i2; r2++) s2 = o2[r2], u2 = a2[r2], void 0, "input" === (l2 = u2.nodeName.toLowerCase()) && we.test(s2.type) ? u2.checked = s2.checked : "input" !== l2 && "textarea" !== l2 || (u2.defaultValue = s2.defaultValue);
    if (t2) if (n2) for (o2 = o2 || Se(e2), a2 = a2 || Se(c2), r2 = 0, i2 = o2.length; r2 < i2; r2++) Fe(o2[r2], a2[r2]);
    else Fe(e2, c2);
    return 0 < (a2 = Se(c2, "script")).length && Ee(a2, !f2 && Se(e2, "script")), c2;
  }, cleanData: function(e2) {
    for (var t2, n2, r2, i2 = ce.event.special, o2 = 0; void 0 !== (n2 = e2[o2]); o2++) if ($(n2)) {
      if (t2 = n2[_.expando]) {
        if (t2.events) for (r2 in t2.events) i2[r2] ? ce.event.remove(n2, r2) : ce.removeEvent(n2, r2, t2.handle);
        n2[_.expando] = void 0;
      }
      n2[z.expando] && (n2[z.expando] = void 0);
    }
  } }), ce.fn.extend({ detach: function(e2) {
    return Be(this, e2, true);
  }, remove: function(e2) {
    return Be(this, e2);
  }, text: function(e2) {
    return M(this, function(e3) {
      return void 0 === e3 ? ce.text(this) : this.empty().each(function() {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e3);
      });
    }, null, e2, arguments.length);
  }, append: function() {
    return $e(this, arguments, function(e2) {
      1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Re(this, e2).appendChild(e2);
    });
  }, prepend: function() {
    return $e(this, arguments, function(e2) {
      if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
        var t2 = Re(this, e2);
        t2.insertBefore(e2, t2.firstChild);
      }
    });
  }, before: function() {
    return $e(this, arguments, function(e2) {
      this.parentNode && this.parentNode.insertBefore(e2, this);
    });
  }, after: function() {
    return $e(this, arguments, function(e2) {
      this.parentNode && this.parentNode.insertBefore(e2, this.nextSibling);
    });
  }, empty: function() {
    for (var e2, t2 = 0; null != (e2 = this[t2]); t2++) 1 === e2.nodeType && (ce.cleanData(Se(e2, false)), e2.textContent = "");
    return this;
  }, clone: function(e2, t2) {
    return e2 = null != e2 && e2, t2 = null == t2 ? e2 : t2, this.map(function() {
      return ce.clone(this, e2, t2);
    });
  }, html: function(e2) {
    return M(this, function(e3) {
      var t2 = this[0] || {}, n2 = 0, r2 = this.length;
      if (void 0 === e3 && 1 === t2.nodeType) return t2.innerHTML;
      if ("string" == typeof e3 && !Oe.test(e3) && !ke[(Te.exec(e3) || ["", ""])[1].toLowerCase()]) {
        e3 = ce.htmlPrefilter(e3);
        try {
          for (; n2 < r2; n2++) 1 === (t2 = this[n2] || {}).nodeType && (ce.cleanData(Se(t2, false)), t2.innerHTML = e3);
          t2 = 0;
        } catch (e4) {
        }
      }
      t2 && this.empty().append(e3);
    }, null, e2, arguments.length);
  }, replaceWith: function() {
    var n2 = [];
    return $e(this, arguments, function(e2) {
      var t2 = this.parentNode;
      ce.inArray(this, n2) < 0 && (ce.cleanData(Se(this)), t2 && t2.replaceChild(e2, this));
    }, n2);
  } }), ce.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e2, a2) {
    ce.fn[e2] = function(e3) {
      for (var t2, n2 = [], r2 = ce(e3), i2 = r2.length - 1, o2 = 0; o2 <= i2; o2++) t2 = o2 === i2 ? this : this.clone(true), ce(r2[o2])[a2](t2), s.apply(n2, t2.get());
      return this.pushStack(n2);
    };
  });
  var _e = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"), ze = /^--/, Xe = function(e2) {
    var t2 = e2.ownerDocument.defaultView;
    return t2 && t2.opener || (t2 = ie), t2.getComputedStyle(e2);
  }, Ue = function(e2, t2, n2) {
    var r2, i2, o2 = {};
    for (i2 in t2) o2[i2] = e2.style[i2], e2.style[i2] = t2[i2];
    for (i2 in r2 = n2.call(e2), t2) e2.style[i2] = o2[i2];
    return r2;
  }, Ve = new RegExp(Q.join("|"), "i");
  function Ge(e2, t2, n2) {
    var r2, i2, o2, a2, s2 = ze.test(t2), u2 = e2.style;
    return (n2 = n2 || Xe(e2)) && (a2 = n2.getPropertyValue(t2) || n2[t2], s2 && a2 && (a2 = a2.replace(ve, "$1") || void 0), "" !== a2 || K(e2) || (a2 = ce.style(e2, t2)), !le.pixelBoxStyles() && _e.test(a2) && Ve.test(t2) && (r2 = u2.width, i2 = u2.minWidth, o2 = u2.maxWidth, u2.minWidth = u2.maxWidth = u2.width = a2, a2 = n2.width, u2.width = r2, u2.minWidth = i2, u2.maxWidth = o2)), void 0 !== a2 ? a2 + "" : a2;
  }
  function Ye(e2, t2) {
    return { get: function() {
      if (!e2()) return (this.get = t2).apply(this, arguments);
      delete this.get;
    } };
  }
  !(function() {
    function e2() {
      if (l2) {
        u2.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l2.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", J.appendChild(u2).appendChild(l2);
        var e3 = ie.getComputedStyle(l2);
        n2 = "1%" !== e3.top, s2 = 12 === t2(e3.marginLeft), l2.style.right = "60%", o2 = 36 === t2(e3.right), r2 = 36 === t2(e3.width), l2.style.position = "absolute", i2 = 12 === t2(l2.offsetWidth / 3), J.removeChild(u2), l2 = null;
      }
    }
    function t2(e3) {
      return Math.round(parseFloat(e3));
    }
    var n2, r2, i2, o2, a2, s2, u2 = C.createElement("div"), l2 = C.createElement("div");
    l2.style && (l2.style.backgroundClip = "content-box", l2.cloneNode(true).style.backgroundClip = "", le.clearCloneStyle = "content-box" === l2.style.backgroundClip, ce.extend(le, { boxSizingReliable: function() {
      return e2(), r2;
    }, pixelBoxStyles: function() {
      return e2(), o2;
    }, pixelPosition: function() {
      return e2(), n2;
    }, reliableMarginLeft: function() {
      return e2(), s2;
    }, scrollboxSize: function() {
      return e2(), i2;
    }, reliableTrDimensions: function() {
      var e3, t3, n3, r3;
      return null == a2 && (e3 = C.createElement("table"), t3 = C.createElement("tr"), n3 = C.createElement("div"), e3.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t3.style.cssText = "box-sizing:content-box;border:1px solid", t3.style.height = "1px", n3.style.height = "9px", n3.style.display = "block", J.appendChild(e3).appendChild(t3).appendChild(n3), r3 = ie.getComputedStyle(t3), a2 = parseInt(r3.height, 10) + parseInt(r3.borderTopWidth, 10) + parseInt(r3.borderBottomWidth, 10) === t3.offsetHeight, J.removeChild(e3)), a2;
    } }));
  })();
  var Qe = ["Webkit", "Moz", "ms"], Je = C.createElement("div").style, Ke = {};
  function Ze(e2) {
    var t2 = ce.cssProps[e2] || Ke[e2];
    return t2 || (e2 in Je ? e2 : Ke[e2] = (function(e3) {
      var t3 = e3[0].toUpperCase() + e3.slice(1), n2 = Qe.length;
      while (n2--) if ((e3 = Qe[n2] + t3) in Je) return e3;
    })(e2) || e2);
  }
  var et = /^(none|table(?!-c[ea]).+)/, tt = { position: "absolute", visibility: "hidden", display: "block" }, nt = { letterSpacing: "0", fontWeight: "400" };
  function rt(e2, t2, n2) {
    var r2 = Y.exec(t2);
    return r2 ? Math.max(0, r2[2] - (n2 || 0)) + (r2[3] || "px") : t2;
  }
  function it(e2, t2, n2, r2, i2, o2) {
    var a2 = "width" === t2 ? 1 : 0, s2 = 0, u2 = 0, l2 = 0;
    if (n2 === (r2 ? "border" : "content")) return 0;
    for (; a2 < 4; a2 += 2) "margin" === n2 && (l2 += ce.css(e2, n2 + Q[a2], true, i2)), r2 ? ("content" === n2 && (u2 -= ce.css(e2, "padding" + Q[a2], true, i2)), "margin" !== n2 && (u2 -= ce.css(e2, "border" + Q[a2] + "Width", true, i2))) : (u2 += ce.css(e2, "padding" + Q[a2], true, i2), "padding" !== n2 ? u2 += ce.css(e2, "border" + Q[a2] + "Width", true, i2) : s2 += ce.css(e2, "border" + Q[a2] + "Width", true, i2));
    return !r2 && 0 <= o2 && (u2 += Math.max(0, Math.ceil(e2["offset" + t2[0].toUpperCase() + t2.slice(1)] - o2 - u2 - s2 - 0.5)) || 0), u2 + l2;
  }
  function ot(e2, t2, n2) {
    var r2 = Xe(e2), i2 = (!le.boxSizingReliable() || n2) && "border-box" === ce.css(e2, "boxSizing", false, r2), o2 = i2, a2 = Ge(e2, t2, r2), s2 = "offset" + t2[0].toUpperCase() + t2.slice(1);
    if (_e.test(a2)) {
      if (!n2) return a2;
      a2 = "auto";
    }
    return (!le.boxSizingReliable() && i2 || !le.reliableTrDimensions() && fe(e2, "tr") || "auto" === a2 || !parseFloat(a2) && "inline" === ce.css(e2, "display", false, r2)) && e2.getClientRects().length && (i2 = "border-box" === ce.css(e2, "boxSizing", false, r2), (o2 = s2 in e2) && (a2 = e2[s2])), (a2 = parseFloat(a2) || 0) + it(e2, t2, n2 || (i2 ? "border" : "content"), o2, r2, a2) + "px";
  }
  function at(e2, t2, n2, r2, i2) {
    return new at.prototype.init(e2, t2, n2, r2, i2);
  }
  ce.extend({ cssHooks: { opacity: { get: function(e2, t2) {
    if (t2) {
      var n2 = Ge(e2, "opacity");
      return "" === n2 ? "1" : n2;
    }
  } } }, cssNumber: { animationIterationCount: true, aspectRatio: true, borderImageSlice: true, columnCount: true, flexGrow: true, flexShrink: true, fontWeight: true, gridArea: true, gridColumn: true, gridColumnEnd: true, gridColumnStart: true, gridRow: true, gridRowEnd: true, gridRowStart: true, lineHeight: true, opacity: true, order: true, orphans: true, scale: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeMiterlimit: true, strokeOpacity: true }, cssProps: {}, style: function(e2, t2, n2, r2) {
    if (e2 && 3 !== e2.nodeType && 8 !== e2.nodeType && e2.style) {
      var i2, o2, a2, s2 = F(t2), u2 = ze.test(t2), l2 = e2.style;
      if (u2 || (t2 = Ze(s2)), a2 = ce.cssHooks[t2] || ce.cssHooks[s2], void 0 === n2) return a2 && "get" in a2 && void 0 !== (i2 = a2.get(e2, false, r2)) ? i2 : l2[t2];
      "string" === (o2 = typeof n2) && (i2 = Y.exec(n2)) && i2[1] && (n2 = te(e2, t2, i2), o2 = "number"), null != n2 && n2 == n2 && ("number" !== o2 || u2 || (n2 += i2 && i2[3] || (ce.cssNumber[s2] ? "" : "px")), le.clearCloneStyle || "" !== n2 || 0 !== t2.indexOf("background") || (l2[t2] = "inherit"), a2 && "set" in a2 && void 0 === (n2 = a2.set(e2, n2, r2)) || (u2 ? l2.setProperty(t2, n2) : l2[t2] = n2));
    }
  }, css: function(e2, t2, n2, r2) {
    var i2, o2, a2, s2 = F(t2);
    return ze.test(t2) || (t2 = Ze(s2)), (a2 = ce.cssHooks[t2] || ce.cssHooks[s2]) && "get" in a2 && (i2 = a2.get(e2, true, n2)), void 0 === i2 && (i2 = Ge(e2, t2, r2)), "normal" === i2 && t2 in nt && (i2 = nt[t2]), "" === n2 || n2 ? (o2 = parseFloat(i2), true === n2 || isFinite(o2) ? o2 || 0 : i2) : i2;
  } }), ce.each(["height", "width"], function(e2, u2) {
    ce.cssHooks[u2] = { get: function(e3, t2, n2) {
      if (t2) return !et.test(ce.css(e3, "display")) || e3.getClientRects().length && e3.getBoundingClientRect().width ? ot(e3, u2, n2) : Ue(e3, tt, function() {
        return ot(e3, u2, n2);
      });
    }, set: function(e3, t2, n2) {
      var r2, i2 = Xe(e3), o2 = !le.scrollboxSize() && "absolute" === i2.position, a2 = (o2 || n2) && "border-box" === ce.css(e3, "boxSizing", false, i2), s2 = n2 ? it(e3, u2, n2, a2, i2) : 0;
      return a2 && o2 && (s2 -= Math.ceil(e3["offset" + u2[0].toUpperCase() + u2.slice(1)] - parseFloat(i2[u2]) - it(e3, u2, "border", false, i2) - 0.5)), s2 && (r2 = Y.exec(t2)) && "px" !== (r2[3] || "px") && (e3.style[u2] = t2, t2 = ce.css(e3, u2)), rt(0, t2, s2);
    } };
  }), ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function(e2, t2) {
    if (t2) return (parseFloat(Ge(e2, "marginLeft")) || e2.getBoundingClientRect().left - Ue(e2, { marginLeft: 0 }, function() {
      return e2.getBoundingClientRect().left;
    })) + "px";
  }), ce.each({ margin: "", padding: "", border: "Width" }, function(i2, o2) {
    ce.cssHooks[i2 + o2] = { expand: function(e2) {
      for (var t2 = 0, n2 = {}, r2 = "string" == typeof e2 ? e2.split(" ") : [e2]; t2 < 4; t2++) n2[i2 + Q[t2] + o2] = r2[t2] || r2[t2 - 2] || r2[0];
      return n2;
    } }, "margin" !== i2 && (ce.cssHooks[i2 + o2].set = rt);
  }), ce.fn.extend({ css: function(e2, t2) {
    return M(this, function(e3, t3, n2) {
      var r2, i2, o2 = {}, a2 = 0;
      if (Array.isArray(t3)) {
        for (r2 = Xe(e3), i2 = t3.length; a2 < i2; a2++) o2[t3[a2]] = ce.css(e3, t3[a2], false, r2);
        return o2;
      }
      return void 0 !== n2 ? ce.style(e3, t3, n2) : ce.css(e3, t3);
    }, e2, t2, 1 < arguments.length);
  } }), ((ce.Tween = at).prototype = { constructor: at, init: function(e2, t2, n2, r2, i2, o2) {
    this.elem = e2, this.prop = n2, this.easing = i2 || ce.easing._default, this.options = t2, this.start = this.now = this.cur(), this.end = r2, this.unit = o2 || (ce.cssNumber[n2] ? "" : "px");
  }, cur: function() {
    var e2 = at.propHooks[this.prop];
    return e2 && e2.get ? e2.get(this) : at.propHooks._default.get(this);
  }, run: function(e2) {
    var t2, n2 = at.propHooks[this.prop];
    return this.options.duration ? this.pos = t2 = ce.easing[this.easing](e2, this.options.duration * e2, 0, 1, this.options.duration) : this.pos = t2 = e2, this.now = (this.end - this.start) * t2 + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n2 && n2.set ? n2.set(this) : at.propHooks._default.set(this), this;
  } }).init.prototype = at.prototype, (at.propHooks = { _default: { get: function(e2) {
    var t2;
    return 1 !== e2.elem.nodeType || null != e2.elem[e2.prop] && null == e2.elem.style[e2.prop] ? e2.elem[e2.prop] : (t2 = ce.css(e2.elem, e2.prop, "")) && "auto" !== t2 ? t2 : 0;
  }, set: function(e2) {
    ce.fx.step[e2.prop] ? ce.fx.step[e2.prop](e2) : 1 !== e2.elem.nodeType || !ce.cssHooks[e2.prop] && null == e2.elem.style[Ze(e2.prop)] ? e2.elem[e2.prop] = e2.now : ce.style(e2.elem, e2.prop, e2.now + e2.unit);
  } } }).scrollTop = at.propHooks.scrollLeft = { set: function(e2) {
    e2.elem.nodeType && e2.elem.parentNode && (e2.elem[e2.prop] = e2.now);
  } }, ce.easing = { linear: function(e2) {
    return e2;
  }, swing: function(e2) {
    return 0.5 - Math.cos(e2 * Math.PI) / 2;
  }, _default: "swing" }, ce.fx = at.prototype.init, ce.fx.step = {};
  var st, ut, lt, ct, ft = /^(?:toggle|show|hide)$/, pt = /queueHooks$/;
  function dt() {
    ut && (false === C.hidden && ie.requestAnimationFrame ? ie.requestAnimationFrame(dt) : ie.setTimeout(dt, ce.fx.interval), ce.fx.tick());
  }
  function ht() {
    return ie.setTimeout(function() {
      st = void 0;
    }), st = Date.now();
  }
  function gt(e2, t2) {
    var n2, r2 = 0, i2 = { height: e2 };
    for (t2 = t2 ? 1 : 0; r2 < 4; r2 += 2 - t2) i2["margin" + (n2 = Q[r2])] = i2["padding" + n2] = e2;
    return t2 && (i2.opacity = i2.width = e2), i2;
  }
  function vt(e2, t2, n2) {
    for (var r2, i2 = (yt.tweeners[t2] || []).concat(yt.tweeners["*"]), o2 = 0, a2 = i2.length; o2 < a2; o2++) if (r2 = i2[o2].call(n2, t2, e2)) return r2;
  }
  function yt(o2, e2, t2) {
    var n2, a2, r2 = 0, i2 = yt.prefilters.length, s2 = ce.Deferred().always(function() {
      delete u2.elem;
    }), u2 = function() {
      if (a2) return false;
      for (var e3 = st || ht(), t3 = Math.max(0, l2.startTime + l2.duration - e3), n3 = 1 - (t3 / l2.duration || 0), r3 = 0, i3 = l2.tweens.length; r3 < i3; r3++) l2.tweens[r3].run(n3);
      return s2.notifyWith(o2, [l2, n3, t3]), n3 < 1 && i3 ? t3 : (i3 || s2.notifyWith(o2, [l2, 1, 0]), s2.resolveWith(o2, [l2]), false);
    }, l2 = s2.promise({ elem: o2, props: ce.extend({}, e2), opts: ce.extend(true, { specialEasing: {}, easing: ce.easing._default }, t2), originalProperties: e2, originalOptions: t2, startTime: st || ht(), duration: t2.duration, tweens: [], createTween: function(e3, t3) {
      var n3 = ce.Tween(o2, l2.opts, e3, t3, l2.opts.specialEasing[e3] || l2.opts.easing);
      return l2.tweens.push(n3), n3;
    }, stop: function(e3) {
      var t3 = 0, n3 = e3 ? l2.tweens.length : 0;
      if (a2) return this;
      for (a2 = true; t3 < n3; t3++) l2.tweens[t3].run(1);
      return e3 ? (s2.notifyWith(o2, [l2, 1, 0]), s2.resolveWith(o2, [l2, e3])) : s2.rejectWith(o2, [l2, e3]), this;
    } }), c2 = l2.props;
    for (!(function(e3, t3) {
      var n3, r3, i3, o3, a3;
      for (n3 in e3) if (i3 = t3[r3 = F(n3)], o3 = e3[n3], Array.isArray(o3) && (i3 = o3[1], o3 = e3[n3] = o3[0]), n3 !== r3 && (e3[r3] = o3, delete e3[n3]), (a3 = ce.cssHooks[r3]) && "expand" in a3) for (n3 in o3 = a3.expand(o3), delete e3[r3], o3) n3 in e3 || (e3[n3] = o3[n3], t3[n3] = i3);
      else t3[r3] = i3;
    })(c2, l2.opts.specialEasing); r2 < i2; r2++) if (n2 = yt.prefilters[r2].call(l2, o2, c2, l2.opts)) return v(n2.stop) && (ce._queueHooks(l2.elem, l2.opts.queue).stop = n2.stop.bind(n2)), n2;
    return ce.map(c2, vt, l2), v(l2.opts.start) && l2.opts.start.call(o2, l2), l2.progress(l2.opts.progress).done(l2.opts.done, l2.opts.complete).fail(l2.opts.fail).always(l2.opts.always), ce.fx.timer(ce.extend(u2, { elem: o2, anim: l2, queue: l2.opts.queue })), l2;
  }
  ce.Animation = ce.extend(yt, { tweeners: { "*": [function(e2, t2) {
    var n2 = this.createTween(e2, t2);
    return te(n2.elem, e2, Y.exec(t2), n2), n2;
  }] }, tweener: function(e2, t2) {
    v(e2) ? (t2 = e2, e2 = ["*"]) : e2 = e2.match(D);
    for (var n2, r2 = 0, i2 = e2.length; r2 < i2; r2++) n2 = e2[r2], yt.tweeners[n2] = yt.tweeners[n2] || [], yt.tweeners[n2].unshift(t2);
  }, prefilters: [function(e2, t2, n2) {
    var r2, i2, o2, a2, s2, u2, l2, c2, f2 = "width" in t2 || "height" in t2, p2 = this, d2 = {}, h2 = e2.style, g2 = e2.nodeType && ee(e2), v2 = _.get(e2, "fxshow");
    for (r2 in n2.queue || (null == (a2 = ce._queueHooks(e2, "fx")).unqueued && (a2.unqueued = 0, s2 = a2.empty.fire, a2.empty.fire = function() {
      a2.unqueued || s2();
    }), a2.unqueued++, p2.always(function() {
      p2.always(function() {
        a2.unqueued--, ce.queue(e2, "fx").length || a2.empty.fire();
      });
    })), t2) if (i2 = t2[r2], ft.test(i2)) {
      if (delete t2[r2], o2 = o2 || "toggle" === i2, i2 === (g2 ? "hide" : "show")) {
        if ("show" !== i2 || !v2 || void 0 === v2[r2]) continue;
        g2 = true;
      }
      d2[r2] = v2 && v2[r2] || ce.style(e2, r2);
    }
    if ((u2 = !ce.isEmptyObject(t2)) || !ce.isEmptyObject(d2)) for (r2 in f2 && 1 === e2.nodeType && (n2.overflow = [h2.overflow, h2.overflowX, h2.overflowY], null == (l2 = v2 && v2.display) && (l2 = _.get(e2, "display")), "none" === (c2 = ce.css(e2, "display")) && (l2 ? c2 = l2 : (re([e2], true), l2 = e2.style.display || l2, c2 = ce.css(e2, "display"), re([e2]))), ("inline" === c2 || "inline-block" === c2 && null != l2) && "none" === ce.css(e2, "float") && (u2 || (p2.done(function() {
      h2.display = l2;
    }), null == l2 && (c2 = h2.display, l2 = "none" === c2 ? "" : c2)), h2.display = "inline-block")), n2.overflow && (h2.overflow = "hidden", p2.always(function() {
      h2.overflow = n2.overflow[0], h2.overflowX = n2.overflow[1], h2.overflowY = n2.overflow[2];
    })), u2 = false, d2) u2 || (v2 ? "hidden" in v2 && (g2 = v2.hidden) : v2 = _.access(e2, "fxshow", { display: l2 }), o2 && (v2.hidden = !g2), g2 && re([e2], true), p2.done(function() {
      for (r2 in g2 || re([e2]), _.remove(e2, "fxshow"), d2) ce.style(e2, r2, d2[r2]);
    })), u2 = vt(g2 ? v2[r2] : 0, r2, p2), r2 in v2 || (v2[r2] = u2.start, g2 && (u2.end = u2.start, u2.start = 0));
  }], prefilter: function(e2, t2) {
    t2 ? yt.prefilters.unshift(e2) : yt.prefilters.push(e2);
  } }), ce.speed = function(e2, t2, n2) {
    var r2 = e2 && "object" == typeof e2 ? ce.extend({}, e2) : { complete: n2 || !n2 && t2 || v(e2) && e2, duration: e2, easing: n2 && t2 || t2 && !v(t2) && t2 };
    return ce.fx.off ? r2.duration = 0 : "number" != typeof r2.duration && (r2.duration in ce.fx.speeds ? r2.duration = ce.fx.speeds[r2.duration] : r2.duration = ce.fx.speeds._default), null != r2.queue && true !== r2.queue || (r2.queue = "fx"), r2.old = r2.complete, r2.complete = function() {
      v(r2.old) && r2.old.call(this), r2.queue && ce.dequeue(this, r2.queue);
    }, r2;
  }, ce.fn.extend({ fadeTo: function(e2, t2, n2, r2) {
    return this.filter(ee).css("opacity", 0).show().end().animate({ opacity: t2 }, e2, n2, r2);
  }, animate: function(t2, e2, n2, r2) {
    var i2 = ce.isEmptyObject(t2), o2 = ce.speed(e2, n2, r2), a2 = function() {
      var e3 = yt(this, ce.extend({}, t2), o2);
      (i2 || _.get(this, "finish")) && e3.stop(true);
    };
    return a2.finish = a2, i2 || false === o2.queue ? this.each(a2) : this.queue(o2.queue, a2);
  }, stop: function(i2, e2, o2) {
    var a2 = function(e3) {
      var t2 = e3.stop;
      delete e3.stop, t2(o2);
    };
    return "string" != typeof i2 && (o2 = e2, e2 = i2, i2 = void 0), e2 && this.queue(i2 || "fx", []), this.each(function() {
      var e3 = true, t2 = null != i2 && i2 + "queueHooks", n2 = ce.timers, r2 = _.get(this);
      if (t2) r2[t2] && r2[t2].stop && a2(r2[t2]);
      else for (t2 in r2) r2[t2] && r2[t2].stop && pt.test(t2) && a2(r2[t2]);
      for (t2 = n2.length; t2--; ) n2[t2].elem !== this || null != i2 && n2[t2].queue !== i2 || (n2[t2].anim.stop(o2), e3 = false, n2.splice(t2, 1));
      !e3 && o2 || ce.dequeue(this, i2);
    });
  }, finish: function(a2) {
    return false !== a2 && (a2 = a2 || "fx"), this.each(function() {
      var e2, t2 = _.get(this), n2 = t2[a2 + "queue"], r2 = t2[a2 + "queueHooks"], i2 = ce.timers, o2 = n2 ? n2.length : 0;
      for (t2.finish = true, ce.queue(this, a2, []), r2 && r2.stop && r2.stop.call(this, true), e2 = i2.length; e2--; ) i2[e2].elem === this && i2[e2].queue === a2 && (i2[e2].anim.stop(true), i2.splice(e2, 1));
      for (e2 = 0; e2 < o2; e2++) n2[e2] && n2[e2].finish && n2[e2].finish.call(this);
      delete t2.finish;
    });
  } }), ce.each(["toggle", "show", "hide"], function(e2, r2) {
    var i2 = ce.fn[r2];
    ce.fn[r2] = function(e3, t2, n2) {
      return null == e3 || "boolean" == typeof e3 ? i2.apply(this, arguments) : this.animate(gt(r2, true), e3, t2, n2);
    };
  }), ce.each({ slideDown: gt("show"), slideUp: gt("hide"), slideToggle: gt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e2, r2) {
    ce.fn[e2] = function(e3, t2, n2) {
      return this.animate(r2, e3, t2, n2);
    };
  }), ce.timers = [], ce.fx.tick = function() {
    var e2, t2 = 0, n2 = ce.timers;
    for (st = Date.now(); t2 < n2.length; t2++) (e2 = n2[t2])() || n2[t2] !== e2 || n2.splice(t2--, 1);
    n2.length || ce.fx.stop(), st = void 0;
  }, ce.fx.timer = function(e2) {
    ce.timers.push(e2), ce.fx.start();
  }, ce.fx.interval = 13, ce.fx.start = function() {
    ut || (ut = true, dt());
  }, ce.fx.stop = function() {
    ut = null;
  }, ce.fx.speeds = { slow: 600, fast: 200, _default: 400 }, ce.fn.delay = function(r2, e2) {
    return r2 = ce.fx && ce.fx.speeds[r2] || r2, e2 = e2 || "fx", this.queue(e2, function(e3, t2) {
      var n2 = ie.setTimeout(e3, r2);
      t2.stop = function() {
        ie.clearTimeout(n2);
      };
    });
  }, lt = C.createElement("input"), ct = C.createElement("select").appendChild(C.createElement("option")), lt.type = "checkbox", le.checkOn = "" !== lt.value, le.optSelected = ct.selected, (lt = C.createElement("input")).value = "t", lt.type = "radio", le.radioValue = "t" === lt.value;
  var mt, xt = ce.expr.attrHandle;
  ce.fn.extend({ attr: function(e2, t2) {
    return M(this, ce.attr, e2, t2, 1 < arguments.length);
  }, removeAttr: function(e2) {
    return this.each(function() {
      ce.removeAttr(this, e2);
    });
  } }), ce.extend({ attr: function(e2, t2, n2) {
    var r2, i2, o2 = e2.nodeType;
    if (3 !== o2 && 8 !== o2 && 2 !== o2) return "undefined" == typeof e2.getAttribute ? ce.prop(e2, t2, n2) : (1 === o2 && ce.isXMLDoc(e2) || (i2 = ce.attrHooks[t2.toLowerCase()] || (ce.expr.match.bool.test(t2) ? mt : void 0)), void 0 !== n2 ? null === n2 ? void ce.removeAttr(e2, t2) : i2 && "set" in i2 && void 0 !== (r2 = i2.set(e2, n2, t2)) ? r2 : (e2.setAttribute(t2, n2 + ""), n2) : i2 && "get" in i2 && null !== (r2 = i2.get(e2, t2)) ? r2 : null == (r2 = ce.find.attr(e2, t2)) ? void 0 : r2);
  }, attrHooks: { type: { set: function(e2, t2) {
    if (!le.radioValue && "radio" === t2 && fe(e2, "input")) {
      var n2 = e2.value;
      return e2.setAttribute("type", t2), n2 && (e2.value = n2), t2;
    }
  } } }, removeAttr: function(e2, t2) {
    var n2, r2 = 0, i2 = t2 && t2.match(D);
    if (i2 && 1 === e2.nodeType) while (n2 = i2[r2++]) e2.removeAttribute(n2);
  } }), mt = { set: function(e2, t2, n2) {
    return false === t2 ? ce.removeAttr(e2, n2) : e2.setAttribute(n2, n2), n2;
  } }, ce.each(ce.expr.match.bool.source.match(/\w+/g), function(e2, t2) {
    var a2 = xt[t2] || ce.find.attr;
    xt[t2] = function(e3, t3, n2) {
      var r2, i2, o2 = t3.toLowerCase();
      return n2 || (i2 = xt[o2], xt[o2] = r2, r2 = null != a2(e3, t3, n2) ? o2 : null, xt[o2] = i2), r2;
    };
  });
  var bt = /^(?:input|select|textarea|button)$/i, wt = /^(?:a|area)$/i;
  function Tt(e2) {
    return (e2.match(D) || []).join(" ");
  }
  function Ct(e2) {
    return e2.getAttribute && e2.getAttribute("class") || "";
  }
  function kt(e2) {
    return Array.isArray(e2) ? e2 : "string" == typeof e2 && e2.match(D) || [];
  }
  ce.fn.extend({ prop: function(e2, t2) {
    return M(this, ce.prop, e2, t2, 1 < arguments.length);
  }, removeProp: function(e2) {
    return this.each(function() {
      delete this[ce.propFix[e2] || e2];
    });
  } }), ce.extend({ prop: function(e2, t2, n2) {
    var r2, i2, o2 = e2.nodeType;
    if (3 !== o2 && 8 !== o2 && 2 !== o2) return 1 === o2 && ce.isXMLDoc(e2) || (t2 = ce.propFix[t2] || t2, i2 = ce.propHooks[t2]), void 0 !== n2 ? i2 && "set" in i2 && void 0 !== (r2 = i2.set(e2, n2, t2)) ? r2 : e2[t2] = n2 : i2 && "get" in i2 && null !== (r2 = i2.get(e2, t2)) ? r2 : e2[t2];
  }, propHooks: { tabIndex: { get: function(e2) {
    var t2 = ce.find.attr(e2, "tabindex");
    return t2 ? parseInt(t2, 10) : bt.test(e2.nodeName) || wt.test(e2.nodeName) && e2.href ? 0 : -1;
  } } }, propFix: { "for": "htmlFor", "class": "className" } }), le.optSelected || (ce.propHooks.selected = { get: function(e2) {
    var t2 = e2.parentNode;
    return t2 && t2.parentNode && t2.parentNode.selectedIndex, null;
  }, set: function(e2) {
    var t2 = e2.parentNode;
    t2 && (t2.selectedIndex, t2.parentNode && t2.parentNode.selectedIndex);
  } }), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    ce.propFix[this.toLowerCase()] = this;
  }), ce.fn.extend({ addClass: function(t2) {
    var e2, n2, r2, i2, o2, a2;
    return v(t2) ? this.each(function(e3) {
      ce(this).addClass(t2.call(this, e3, Ct(this)));
    }) : (e2 = kt(t2)).length ? this.each(function() {
      if (r2 = Ct(this), n2 = 1 === this.nodeType && " " + Tt(r2) + " ") {
        for (o2 = 0; o2 < e2.length; o2++) i2 = e2[o2], n2.indexOf(" " + i2 + " ") < 0 && (n2 += i2 + " ");
        a2 = Tt(n2), r2 !== a2 && this.setAttribute("class", a2);
      }
    }) : this;
  }, removeClass: function(t2) {
    var e2, n2, r2, i2, o2, a2;
    return v(t2) ? this.each(function(e3) {
      ce(this).removeClass(t2.call(this, e3, Ct(this)));
    }) : arguments.length ? (e2 = kt(t2)).length ? this.each(function() {
      if (r2 = Ct(this), n2 = 1 === this.nodeType && " " + Tt(r2) + " ") {
        for (o2 = 0; o2 < e2.length; o2++) {
          i2 = e2[o2];
          while (-1 < n2.indexOf(" " + i2 + " ")) n2 = n2.replace(" " + i2 + " ", " ");
        }
        a2 = Tt(n2), r2 !== a2 && this.setAttribute("class", a2);
      }
    }) : this : this.attr("class", "");
  }, toggleClass: function(t2, n2) {
    var e2, r2, i2, o2, a2 = typeof t2, s2 = "string" === a2 || Array.isArray(t2);
    return v(t2) ? this.each(function(e3) {
      ce(this).toggleClass(t2.call(this, e3, Ct(this), n2), n2);
    }) : "boolean" == typeof n2 && s2 ? n2 ? this.addClass(t2) : this.removeClass(t2) : (e2 = kt(t2), this.each(function() {
      if (s2) for (o2 = ce(this), i2 = 0; i2 < e2.length; i2++) r2 = e2[i2], o2.hasClass(r2) ? o2.removeClass(r2) : o2.addClass(r2);
      else void 0 !== t2 && "boolean" !== a2 || ((r2 = Ct(this)) && _.set(this, "__className__", r2), this.setAttribute && this.setAttribute("class", r2 || false === t2 ? "" : _.get(this, "__className__") || ""));
    }));
  }, hasClass: function(e2) {
    var t2, n2, r2 = 0;
    t2 = " " + e2 + " ";
    while (n2 = this[r2++]) if (1 === n2.nodeType && -1 < (" " + Tt(Ct(n2)) + " ").indexOf(t2)) return true;
    return false;
  } });
  var St = /\r/g;
  ce.fn.extend({ val: function(n2) {
    var r2, e2, i2, t2 = this[0];
    return arguments.length ? (i2 = v(n2), this.each(function(e3) {
      var t3;
      1 === this.nodeType && (null == (t3 = i2 ? n2.call(this, e3, ce(this).val()) : n2) ? t3 = "" : "number" == typeof t3 ? t3 += "" : Array.isArray(t3) && (t3 = ce.map(t3, function(e4) {
        return null == e4 ? "" : e4 + "";
      })), (r2 = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) && "set" in r2 && void 0 !== r2.set(this, t3, "value") || (this.value = t3));
    })) : t2 ? (r2 = ce.valHooks[t2.type] || ce.valHooks[t2.nodeName.toLowerCase()]) && "get" in r2 && void 0 !== (e2 = r2.get(t2, "value")) ? e2 : "string" == typeof (e2 = t2.value) ? e2.replace(St, "") : null == e2 ? "" : e2 : void 0;
  } }), ce.extend({ valHooks: { option: { get: function(e2) {
    var t2 = ce.find.attr(e2, "value");
    return null != t2 ? t2 : Tt(ce.text(e2));
  } }, select: { get: function(e2) {
    var t2, n2, r2, i2 = e2.options, o2 = e2.selectedIndex, a2 = "select-one" === e2.type, s2 = a2 ? null : [], u2 = a2 ? o2 + 1 : i2.length;
    for (r2 = o2 < 0 ? u2 : a2 ? o2 : 0; r2 < u2; r2++) if (((n2 = i2[r2]).selected || r2 === o2) && !n2.disabled && (!n2.parentNode.disabled || !fe(n2.parentNode, "optgroup"))) {
      if (t2 = ce(n2).val(), a2) return t2;
      s2.push(t2);
    }
    return s2;
  }, set: function(e2, t2) {
    var n2, r2, i2 = e2.options, o2 = ce.makeArray(t2), a2 = i2.length;
    while (a2--) ((r2 = i2[a2]).selected = -1 < ce.inArray(ce.valHooks.option.get(r2), o2)) && (n2 = true);
    return n2 || (e2.selectedIndex = -1), o2;
  } } } }), ce.each(["radio", "checkbox"], function() {
    ce.valHooks[this] = { set: function(e2, t2) {
      if (Array.isArray(t2)) return e2.checked = -1 < ce.inArray(ce(e2).val(), t2);
    } }, le.checkOn || (ce.valHooks[this].get = function(e2) {
      return null === e2.getAttribute("value") ? "on" : e2.value;
    });
  });
  var Et = ie.location, jt = { guid: Date.now() }, At = /\?/;
  ce.parseXML = function(e2) {
    var t2, n2;
    if (!e2 || "string" != typeof e2) return null;
    try {
      t2 = new ie.DOMParser().parseFromString(e2, "text/xml");
    } catch (e3) {
    }
    return n2 = t2 && t2.getElementsByTagName("parsererror")[0], t2 && !n2 || ce.error("Invalid XML: " + (n2 ? ce.map(n2.childNodes, function(e3) {
      return e3.textContent;
    }).join("\n") : e2)), t2;
  };
  var Dt = /^(?:focusinfocus|focusoutblur)$/, Nt = function(e2) {
    e2.stopPropagation();
  };
  ce.extend(ce.event, { trigger: function(e2, t2, n2, r2) {
    var i2, o2, a2, s2, u2, l2, c2, f2, p2 = [n2 || C], d2 = ue.call(e2, "type") ? e2.type : e2, h2 = ue.call(e2, "namespace") ? e2.namespace.split(".") : [];
    if (o2 = f2 = a2 = n2 = n2 || C, 3 !== n2.nodeType && 8 !== n2.nodeType && !Dt.test(d2 + ce.event.triggered) && (-1 < d2.indexOf(".") && (d2 = (h2 = d2.split(".")).shift(), h2.sort()), u2 = d2.indexOf(":") < 0 && "on" + d2, (e2 = e2[ce.expando] ? e2 : new ce.Event(d2, "object" == typeof e2 && e2)).isTrigger = r2 ? 2 : 3, e2.namespace = h2.join("."), e2.rnamespace = e2.namespace ? new RegExp("(^|\\.)" + h2.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e2.result = void 0, e2.target || (e2.target = n2), t2 = null == t2 ? [e2] : ce.makeArray(t2, [e2]), c2 = ce.event.special[d2] || {}, r2 || !c2.trigger || false !== c2.trigger.apply(n2, t2))) {
      if (!r2 && !c2.noBubble && !y(n2)) {
        for (s2 = c2.delegateType || d2, Dt.test(s2 + d2) || (o2 = o2.parentNode); o2; o2 = o2.parentNode) p2.push(o2), a2 = o2;
        a2 === (n2.ownerDocument || C) && p2.push(a2.defaultView || a2.parentWindow || ie);
      }
      i2 = 0;
      while ((o2 = p2[i2++]) && !e2.isPropagationStopped()) f2 = o2, e2.type = 1 < i2 ? s2 : c2.bindType || d2, (l2 = (_.get(o2, "events") || /* @__PURE__ */ Object.create(null))[e2.type] && _.get(o2, "handle")) && l2.apply(o2, t2), (l2 = u2 && o2[u2]) && l2.apply && $(o2) && (e2.result = l2.apply(o2, t2), false === e2.result && e2.preventDefault());
      return e2.type = d2, r2 || e2.isDefaultPrevented() || c2._default && false !== c2._default.apply(p2.pop(), t2) || !$(n2) || u2 && v(n2[d2]) && !y(n2) && ((a2 = n2[u2]) && (n2[u2] = null), ce.event.triggered = d2, e2.isPropagationStopped() && f2.addEventListener(d2, Nt), n2[d2](), e2.isPropagationStopped() && f2.removeEventListener(d2, Nt), ce.event.triggered = void 0, a2 && (n2[u2] = a2)), e2.result;
    }
  }, simulate: function(e2, t2, n2) {
    var r2 = ce.extend(new ce.Event(), n2, { type: e2, isSimulated: true });
    ce.event.trigger(r2, null, t2);
  } }), ce.fn.extend({ trigger: function(e2, t2) {
    return this.each(function() {
      ce.event.trigger(e2, t2, this);
    });
  }, triggerHandler: function(e2, t2) {
    var n2 = this[0];
    if (n2) return ce.event.trigger(e2, t2, n2, true);
  } });
  var qt = /\[\]$/, Lt = /\r?\n/g, Ht = /^(?:submit|button|image|reset|file)$/i, Ot = /^(?:input|select|textarea|keygen)/i;
  function Pt(n2, e2, r2, i2) {
    var t2;
    if (Array.isArray(e2)) ce.each(e2, function(e3, t3) {
      r2 || qt.test(n2) ? i2(n2, t3) : Pt(n2 + "[" + ("object" == typeof t3 && null != t3 ? e3 : "") + "]", t3, r2, i2);
    });
    else if (r2 || "object" !== x(e2)) i2(n2, e2);
    else for (t2 in e2) Pt(n2 + "[" + t2 + "]", e2[t2], r2, i2);
  }
  ce.param = function(e2, t2) {
    var n2, r2 = [], i2 = function(e3, t3) {
      var n3 = v(t3) ? t3() : t3;
      r2[r2.length] = encodeURIComponent(e3) + "=" + encodeURIComponent(null == n3 ? "" : n3);
    };
    if (null == e2) return "";
    if (Array.isArray(e2) || e2.jquery && !ce.isPlainObject(e2)) ce.each(e2, function() {
      i2(this.name, this.value);
    });
    else for (n2 in e2) Pt(n2, e2[n2], t2, i2);
    return r2.join("&");
  }, ce.fn.extend({ serialize: function() {
    return ce.param(this.serializeArray());
  }, serializeArray: function() {
    return this.map(function() {
      var e2 = ce.prop(this, "elements");
      return e2 ? ce.makeArray(e2) : this;
    }).filter(function() {
      var e2 = this.type;
      return this.name && !ce(this).is(":disabled") && Ot.test(this.nodeName) && !Ht.test(e2) && (this.checked || !we.test(e2));
    }).map(function(e2, t2) {
      var n2 = ce(this).val();
      return null == n2 ? null : Array.isArray(n2) ? ce.map(n2, function(e3) {
        return { name: t2.name, value: e3.replace(Lt, "\r\n") };
      }) : { name: t2.name, value: n2.replace(Lt, "\r\n") };
    }).get();
  } });
  var Mt = /%20/g, Rt = /#.*$/, It = /([?&])_=[^&]*/, Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ft = /^(?:GET|HEAD)$/, $t = /^\/\//, Bt = {}, _t = {}, zt = "*/".concat("*"), Xt = C.createElement("a");
  function Ut(o2) {
    return function(e2, t2) {
      "string" != typeof e2 && (t2 = e2, e2 = "*");
      var n2, r2 = 0, i2 = e2.toLowerCase().match(D) || [];
      if (v(t2)) while (n2 = i2[r2++]) "+" === n2[0] ? (n2 = n2.slice(1) || "*", (o2[n2] = o2[n2] || []).unshift(t2)) : (o2[n2] = o2[n2] || []).push(t2);
    };
  }
  function Vt(t2, i2, o2, a2) {
    var s2 = {}, u2 = t2 === _t;
    function l2(e2) {
      var r2;
      return s2[e2] = true, ce.each(t2[e2] || [], function(e3, t3) {
        var n2 = t3(i2, o2, a2);
        return "string" != typeof n2 || u2 || s2[n2] ? u2 ? !(r2 = n2) : void 0 : (i2.dataTypes.unshift(n2), l2(n2), false);
      }), r2;
    }
    return l2(i2.dataTypes[0]) || !s2["*"] && l2("*");
  }
  function Gt(e2, t2) {
    var n2, r2, i2 = ce.ajaxSettings.flatOptions || {};
    for (n2 in t2) void 0 !== t2[n2] && ((i2[n2] ? e2 : r2 || (r2 = {}))[n2] = t2[n2]);
    return r2 && ce.extend(true, e2, r2), e2;
  }
  Xt.href = Et.href, ce.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Et.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol), global: true, processData: true, async: true, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": zt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": true, "text json": JSON.parse, "text xml": ce.parseXML }, flatOptions: { url: true, context: true } }, ajaxSetup: function(e2, t2) {
    return t2 ? Gt(Gt(e2, ce.ajaxSettings), t2) : Gt(ce.ajaxSettings, e2);
  }, ajaxPrefilter: Ut(Bt), ajaxTransport: Ut(_t), ajax: function(e2, t2) {
    "object" == typeof e2 && (t2 = e2, e2 = void 0), t2 = t2 || {};
    var c2, f2, p2, n2, d2, r2, h2, g2, i2, o2, v2 = ce.ajaxSetup({}, t2), y2 = v2.context || v2, m2 = v2.context && (y2.nodeType || y2.jquery) ? ce(y2) : ce.event, x2 = ce.Deferred(), b2 = ce.Callbacks("once memory"), w2 = v2.statusCode || {}, a2 = {}, s2 = {}, u2 = "canceled", T2 = { readyState: 0, getResponseHeader: function(e3) {
      var t3;
      if (h2) {
        if (!n2) {
          n2 = {};
          while (t3 = Wt.exec(p2)) n2[t3[1].toLowerCase() + " "] = (n2[t3[1].toLowerCase() + " "] || []).concat(t3[2]);
        }
        t3 = n2[e3.toLowerCase() + " "];
      }
      return null == t3 ? null : t3.join(", ");
    }, getAllResponseHeaders: function() {
      return h2 ? p2 : null;
    }, setRequestHeader: function(e3, t3) {
      return null == h2 && (e3 = s2[e3.toLowerCase()] = s2[e3.toLowerCase()] || e3, a2[e3] = t3), this;
    }, overrideMimeType: function(e3) {
      return null == h2 && (v2.mimeType = e3), this;
    }, statusCode: function(e3) {
      var t3;
      if (e3) if (h2) T2.always(e3[T2.status]);
      else for (t3 in e3) w2[t3] = [w2[t3], e3[t3]];
      return this;
    }, abort: function(e3) {
      var t3 = e3 || u2;
      return c2 && c2.abort(t3), l2(0, t3), this;
    } };
    if (x2.promise(T2), v2.url = ((e2 || v2.url || Et.href) + "").replace($t, Et.protocol + "//"), v2.type = t2.method || t2.type || v2.method || v2.type, v2.dataTypes = (v2.dataType || "*").toLowerCase().match(D) || [""], null == v2.crossDomain) {
      r2 = C.createElement("a");
      try {
        r2.href = v2.url, r2.href = r2.href, v2.crossDomain = Xt.protocol + "//" + Xt.host != r2.protocol + "//" + r2.host;
      } catch (e3) {
        v2.crossDomain = true;
      }
    }
    if (v2.data && v2.processData && "string" != typeof v2.data && (v2.data = ce.param(v2.data, v2.traditional)), Vt(Bt, v2, t2, T2), h2) return T2;
    for (i2 in (g2 = ce.event && v2.global) && 0 == ce.active++ && ce.event.trigger("ajaxStart"), v2.type = v2.type.toUpperCase(), v2.hasContent = !Ft.test(v2.type), f2 = v2.url.replace(Rt, ""), v2.hasContent ? v2.data && v2.processData && 0 === (v2.contentType || "").indexOf("application/x-www-form-urlencoded") && (v2.data = v2.data.replace(Mt, "+")) : (o2 = v2.url.slice(f2.length), v2.data && (v2.processData || "string" == typeof v2.data) && (f2 += (At.test(f2) ? "&" : "?") + v2.data, delete v2.data), false === v2.cache && (f2 = f2.replace(It, "$1"), o2 = (At.test(f2) ? "&" : "?") + "_=" + jt.guid++ + o2), v2.url = f2 + o2), v2.ifModified && (ce.lastModified[f2] && T2.setRequestHeader("If-Modified-Since", ce.lastModified[f2]), ce.etag[f2] && T2.setRequestHeader("If-None-Match", ce.etag[f2])), (v2.data && v2.hasContent && false !== v2.contentType || t2.contentType) && T2.setRequestHeader("Content-Type", v2.contentType), T2.setRequestHeader("Accept", v2.dataTypes[0] && v2.accepts[v2.dataTypes[0]] ? v2.accepts[v2.dataTypes[0]] + ("*" !== v2.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : v2.accepts["*"]), v2.headers) T2.setRequestHeader(i2, v2.headers[i2]);
    if (v2.beforeSend && (false === v2.beforeSend.call(y2, T2, v2) || h2)) return T2.abort();
    if (u2 = "abort", b2.add(v2.complete), T2.done(v2.success), T2.fail(v2.error), c2 = Vt(_t, v2, t2, T2)) {
      if (T2.readyState = 1, g2 && m2.trigger("ajaxSend", [T2, v2]), h2) return T2;
      v2.async && 0 < v2.timeout && (d2 = ie.setTimeout(function() {
        T2.abort("timeout");
      }, v2.timeout));
      try {
        h2 = false, c2.send(a2, l2);
      } catch (e3) {
        if (h2) throw e3;
        l2(-1, e3);
      }
    } else l2(-1, "No Transport");
    function l2(e3, t3, n3, r3) {
      var i3, o3, a3, s3, u3, l3 = t3;
      h2 || (h2 = true, d2 && ie.clearTimeout(d2), c2 = void 0, p2 = r3 || "", T2.readyState = 0 < e3 ? 4 : 0, i3 = 200 <= e3 && e3 < 300 || 304 === e3, n3 && (s3 = (function(e4, t4, n4) {
        var r4, i4, o4, a4, s4 = e4.contents, u4 = e4.dataTypes;
        while ("*" === u4[0]) u4.shift(), void 0 === r4 && (r4 = e4.mimeType || t4.getResponseHeader("Content-Type"));
        if (r4) {
          for (i4 in s4) if (s4[i4] && s4[i4].test(r4)) {
            u4.unshift(i4);
            break;
          }
        }
        if (u4[0] in n4) o4 = u4[0];
        else {
          for (i4 in n4) {
            if (!u4[0] || e4.converters[i4 + " " + u4[0]]) {
              o4 = i4;
              break;
            }
            a4 || (a4 = i4);
          }
          o4 = o4 || a4;
        }
        if (o4) return o4 !== u4[0] && u4.unshift(o4), n4[o4];
      })(v2, T2, n3)), !i3 && -1 < ce.inArray("script", v2.dataTypes) && ce.inArray("json", v2.dataTypes) < 0 && (v2.converters["text script"] = function() {
      }), s3 = (function(e4, t4, n4, r4) {
        var i4, o4, a4, s4, u4, l4 = {}, c3 = e4.dataTypes.slice();
        if (c3[1]) for (a4 in e4.converters) l4[a4.toLowerCase()] = e4.converters[a4];
        o4 = c3.shift();
        while (o4) if (e4.responseFields[o4] && (n4[e4.responseFields[o4]] = t4), !u4 && r4 && e4.dataFilter && (t4 = e4.dataFilter(t4, e4.dataType)), u4 = o4, o4 = c3.shift()) {
          if ("*" === o4) o4 = u4;
          else if ("*" !== u4 && u4 !== o4) {
            if (!(a4 = l4[u4 + " " + o4] || l4["* " + o4])) {
              for (i4 in l4) if ((s4 = i4.split(" "))[1] === o4 && (a4 = l4[u4 + " " + s4[0]] || l4["* " + s4[0]])) {
                true === a4 ? a4 = l4[i4] : true !== l4[i4] && (o4 = s4[0], c3.unshift(s4[1]));
                break;
              }
            }
            if (true !== a4) if (a4 && e4["throws"]) t4 = a4(t4);
            else try {
              t4 = a4(t4);
            } catch (e5) {
              return { state: "parsererror", error: a4 ? e5 : "No conversion from " + u4 + " to " + o4 };
            }
          }
        }
        return { state: "success", data: t4 };
      })(v2, s3, T2, i3), i3 ? (v2.ifModified && ((u3 = T2.getResponseHeader("Last-Modified")) && (ce.lastModified[f2] = u3), (u3 = T2.getResponseHeader("etag")) && (ce.etag[f2] = u3)), 204 === e3 || "HEAD" === v2.type ? l3 = "nocontent" : 304 === e3 ? l3 = "notmodified" : (l3 = s3.state, o3 = s3.data, i3 = !(a3 = s3.error))) : (a3 = l3, !e3 && l3 || (l3 = "error", e3 < 0 && (e3 = 0))), T2.status = e3, T2.statusText = (t3 || l3) + "", i3 ? x2.resolveWith(y2, [o3, l3, T2]) : x2.rejectWith(y2, [T2, l3, a3]), T2.statusCode(w2), w2 = void 0, g2 && m2.trigger(i3 ? "ajaxSuccess" : "ajaxError", [T2, v2, i3 ? o3 : a3]), b2.fireWith(y2, [T2, l3]), g2 && (m2.trigger("ajaxComplete", [T2, v2]), --ce.active || ce.event.trigger("ajaxStop")));
    }
    return T2;
  }, getJSON: function(e2, t2, n2) {
    return ce.get(e2, t2, n2, "json");
  }, getScript: function(e2, t2) {
    return ce.get(e2, void 0, t2, "script");
  } }), ce.each(["get", "post"], function(e2, i2) {
    ce[i2] = function(e3, t2, n2, r2) {
      return v(t2) && (r2 = r2 || n2, n2 = t2, t2 = void 0), ce.ajax(ce.extend({ url: e3, type: i2, dataType: r2, data: t2, success: n2 }, ce.isPlainObject(e3) && e3));
    };
  }), ce.ajaxPrefilter(function(e2) {
    var t2;
    for (t2 in e2.headers) "content-type" === t2.toLowerCase() && (e2.contentType = e2.headers[t2] || "");
  }), ce._evalUrl = function(e2, t2, n2) {
    return ce.ajax({ url: e2, type: "GET", dataType: "script", cache: true, async: false, global: false, converters: { "text script": function() {
    } }, dataFilter: function(e3) {
      ce.globalEval(e3, t2, n2);
    } });
  }, ce.fn.extend({ wrapAll: function(e2) {
    var t2;
    return this[0] && (v(e2) && (e2 = e2.call(this[0])), t2 = ce(e2, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && t2.insertBefore(this[0]), t2.map(function() {
      var e3 = this;
      while (e3.firstElementChild) e3 = e3.firstElementChild;
      return e3;
    }).append(this)), this;
  }, wrapInner: function(n2) {
    return v(n2) ? this.each(function(e2) {
      ce(this).wrapInner(n2.call(this, e2));
    }) : this.each(function() {
      var e2 = ce(this), t2 = e2.contents();
      t2.length ? t2.wrapAll(n2) : e2.append(n2);
    });
  }, wrap: function(t2) {
    var n2 = v(t2);
    return this.each(function(e2) {
      ce(this).wrapAll(n2 ? t2.call(this, e2) : t2);
    });
  }, unwrap: function(e2) {
    return this.parent(e2).not("body").each(function() {
      ce(this).replaceWith(this.childNodes);
    }), this;
  } }), ce.expr.pseudos.hidden = function(e2) {
    return !ce.expr.pseudos.visible(e2);
  }, ce.expr.pseudos.visible = function(e2) {
    return !!(e2.offsetWidth || e2.offsetHeight || e2.getClientRects().length);
  }, ce.ajaxSettings.xhr = function() {
    try {
      return new ie.XMLHttpRequest();
    } catch (e2) {
    }
  };
  var Yt = { 0: 200, 1223: 204 }, Qt = ce.ajaxSettings.xhr();
  le.cors = !!Qt && "withCredentials" in Qt, le.ajax = Qt = !!Qt, ce.ajaxTransport(function(i2) {
    var o2, a2;
    if (le.cors || Qt && !i2.crossDomain) return { send: function(e2, t2) {
      var n2, r2 = i2.xhr();
      if (r2.open(i2.type, i2.url, i2.async, i2.username, i2.password), i2.xhrFields) for (n2 in i2.xhrFields) r2[n2] = i2.xhrFields[n2];
      for (n2 in i2.mimeType && r2.overrideMimeType && r2.overrideMimeType(i2.mimeType), i2.crossDomain || e2["X-Requested-With"] || (e2["X-Requested-With"] = "XMLHttpRequest"), e2) r2.setRequestHeader(n2, e2[n2]);
      o2 = function(e3) {
        return function() {
          o2 && (o2 = a2 = r2.onload = r2.onerror = r2.onabort = r2.ontimeout = r2.onreadystatechange = null, "abort" === e3 ? r2.abort() : "error" === e3 ? "number" != typeof r2.status ? t2(0, "error") : t2(r2.status, r2.statusText) : t2(Yt[r2.status] || r2.status, r2.statusText, "text" !== (r2.responseType || "text") || "string" != typeof r2.responseText ? { binary: r2.response } : { text: r2.responseText }, r2.getAllResponseHeaders()));
        };
      }, r2.onload = o2(), a2 = r2.onerror = r2.ontimeout = o2("error"), void 0 !== r2.onabort ? r2.onabort = a2 : r2.onreadystatechange = function() {
        4 === r2.readyState && ie.setTimeout(function() {
          o2 && a2();
        });
      }, o2 = o2("abort");
      try {
        r2.send(i2.hasContent && i2.data || null);
      } catch (e3) {
        if (o2) throw e3;
      }
    }, abort: function() {
      o2 && o2();
    } };
  }), ce.ajaxPrefilter(function(e2) {
    e2.crossDomain && (e2.contents.script = false);
  }), ce.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e2) {
    return ce.globalEval(e2), e2;
  } } }), ce.ajaxPrefilter("script", function(e2) {
    void 0 === e2.cache && (e2.cache = false), e2.crossDomain && (e2.type = "GET");
  }), ce.ajaxTransport("script", function(n2) {
    var r2, i2;
    if (n2.crossDomain || n2.scriptAttrs) return { send: function(e2, t2) {
      r2 = ce("<script>").attr(n2.scriptAttrs || {}).prop({ charset: n2.scriptCharset, src: n2.url }).on("load error", i2 = function(e3) {
        r2.remove(), i2 = null, e3 && t2("error" === e3.type ? 404 : 200, e3.type);
      }), C.head.appendChild(r2[0]);
    }, abort: function() {
      i2 && i2();
    } };
  });
  var Jt, Kt = [], Zt = /(=)\?(?=&|$)|\?\?/;
  ce.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
    var e2 = Kt.pop() || ce.expando + "_" + jt.guid++;
    return this[e2] = true, e2;
  } }), ce.ajaxPrefilter("json jsonp", function(e2, t2, n2) {
    var r2, i2, o2, a2 = false !== e2.jsonp && (Zt.test(e2.url) ? "url" : "string" == typeof e2.data && 0 === (e2.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e2.data) && "data");
    if (a2 || "jsonp" === e2.dataTypes[0]) return r2 = e2.jsonpCallback = v(e2.jsonpCallback) ? e2.jsonpCallback() : e2.jsonpCallback, a2 ? e2[a2] = e2[a2].replace(Zt, "$1" + r2) : false !== e2.jsonp && (e2.url += (At.test(e2.url) ? "&" : "?") + e2.jsonp + "=" + r2), e2.converters["script json"] = function() {
      return o2 || ce.error(r2 + " was not called"), o2[0];
    }, e2.dataTypes[0] = "json", i2 = ie[r2], ie[r2] = function() {
      o2 = arguments;
    }, n2.always(function() {
      void 0 === i2 ? ce(ie).removeProp(r2) : ie[r2] = i2, e2[r2] && (e2.jsonpCallback = t2.jsonpCallback, Kt.push(r2)), o2 && v(i2) && i2(o2[0]), o2 = i2 = void 0;
    }), "script";
  }), le.createHTMLDocument = ((Jt = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Jt.childNodes.length), ce.parseHTML = function(e2, t2, n2) {
    return "string" != typeof e2 ? [] : ("boolean" == typeof t2 && (n2 = t2, t2 = false), t2 || (le.createHTMLDocument ? ((r2 = (t2 = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t2.head.appendChild(r2)) : t2 = C), o2 = !n2 && [], (i2 = w.exec(e2)) ? [t2.createElement(i2[1])] : (i2 = Ae([e2], t2, o2), o2 && o2.length && ce(o2).remove(), ce.merge([], i2.childNodes)));
    var r2, i2, o2;
  }, ce.fn.load = function(e2, t2, n2) {
    var r2, i2, o2, a2 = this, s2 = e2.indexOf(" ");
    return -1 < s2 && (r2 = Tt(e2.slice(s2)), e2 = e2.slice(0, s2)), v(t2) ? (n2 = t2, t2 = void 0) : t2 && "object" == typeof t2 && (i2 = "POST"), 0 < a2.length && ce.ajax({ url: e2, type: i2 || "GET", dataType: "html", data: t2 }).done(function(e3) {
      o2 = arguments, a2.html(r2 ? ce("<div>").append(ce.parseHTML(e3)).find(r2) : e3);
    }).always(n2 && function(e3, t3) {
      a2.each(function() {
        n2.apply(this, o2 || [e3.responseText, t3, e3]);
      });
    }), this;
  }, ce.expr.pseudos.animated = function(t2) {
    return ce.grep(ce.timers, function(e2) {
      return t2 === e2.elem;
    }).length;
  }, ce.offset = { setOffset: function(e2, t2, n2) {
    var r2, i2, o2, a2, s2, u2, l2 = ce.css(e2, "position"), c2 = ce(e2), f2 = {};
    "static" === l2 && (e2.style.position = "relative"), s2 = c2.offset(), o2 = ce.css(e2, "top"), u2 = ce.css(e2, "left"), ("absolute" === l2 || "fixed" === l2) && -1 < (o2 + u2).indexOf("auto") ? (a2 = (r2 = c2.position()).top, i2 = r2.left) : (a2 = parseFloat(o2) || 0, i2 = parseFloat(u2) || 0), v(t2) && (t2 = t2.call(e2, n2, ce.extend({}, s2))), null != t2.top && (f2.top = t2.top - s2.top + a2), null != t2.left && (f2.left = t2.left - s2.left + i2), "using" in t2 ? t2.using.call(e2, f2) : c2.css(f2);
  } }, ce.fn.extend({ offset: function(t2) {
    if (arguments.length) return void 0 === t2 ? this : this.each(function(e3) {
      ce.offset.setOffset(this, t2, e3);
    });
    var e2, n2, r2 = this[0];
    return r2 ? r2.getClientRects().length ? (e2 = r2.getBoundingClientRect(), n2 = r2.ownerDocument.defaultView, { top: e2.top + n2.pageYOffset, left: e2.left + n2.pageXOffset }) : { top: 0, left: 0 } : void 0;
  }, position: function() {
    if (this[0]) {
      var e2, t2, n2, r2 = this[0], i2 = { top: 0, left: 0 };
      if ("fixed" === ce.css(r2, "position")) t2 = r2.getBoundingClientRect();
      else {
        t2 = this.offset(), n2 = r2.ownerDocument, e2 = r2.offsetParent || n2.documentElement;
        while (e2 && (e2 === n2.body || e2 === n2.documentElement) && "static" === ce.css(e2, "position")) e2 = e2.parentNode;
        e2 && e2 !== r2 && 1 === e2.nodeType && ((i2 = ce(e2).offset()).top += ce.css(e2, "borderTopWidth", true), i2.left += ce.css(e2, "borderLeftWidth", true));
      }
      return { top: t2.top - i2.top - ce.css(r2, "marginTop", true), left: t2.left - i2.left - ce.css(r2, "marginLeft", true) };
    }
  }, offsetParent: function() {
    return this.map(function() {
      var e2 = this.offsetParent;
      while (e2 && "static" === ce.css(e2, "position")) e2 = e2.offsetParent;
      return e2 || J;
    });
  } }), ce.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t2, i2) {
    var o2 = "pageYOffset" === i2;
    ce.fn[t2] = function(e2) {
      return M(this, function(e3, t3, n2) {
        var r2;
        if (y(e3) ? r2 = e3 : 9 === e3.nodeType && (r2 = e3.defaultView), void 0 === n2) return r2 ? r2[i2] : e3[t3];
        r2 ? r2.scrollTo(o2 ? r2.pageXOffset : n2, o2 ? n2 : r2.pageYOffset) : e3[t3] = n2;
      }, t2, e2, arguments.length);
    };
  }), ce.each(["top", "left"], function(e2, n2) {
    ce.cssHooks[n2] = Ye(le.pixelPosition, function(e3, t2) {
      if (t2) return t2 = Ge(e3, n2), _e.test(t2) ? ce(e3).position()[n2] + "px" : t2;
    });
  }), ce.each({ Height: "height", Width: "width" }, function(a2, s2) {
    ce.each({ padding: "inner" + a2, content: s2, "": "outer" + a2 }, function(r2, o2) {
      ce.fn[o2] = function(e2, t2) {
        var n2 = arguments.length && (r2 || "boolean" != typeof e2), i2 = r2 || (true === e2 || true === t2 ? "margin" : "border");
        return M(this, function(e3, t3, n3) {
          var r3;
          return y(e3) ? 0 === o2.indexOf("outer") ? e3["inner" + a2] : e3.document.documentElement["client" + a2] : 9 === e3.nodeType ? (r3 = e3.documentElement, Math.max(e3.body["scroll" + a2], r3["scroll" + a2], e3.body["offset" + a2], r3["offset" + a2], r3["client" + a2])) : void 0 === n3 ? ce.css(e3, t3, i2) : ce.style(e3, t3, n3, i2);
        }, s2, n2 ? e2 : void 0, n2);
      };
    });
  }), ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e2, t2) {
    ce.fn[t2] = function(e3) {
      return this.on(t2, e3);
    };
  }), ce.fn.extend({ bind: function(e2, t2, n2) {
    return this.on(e2, null, t2, n2);
  }, unbind: function(e2, t2) {
    return this.off(e2, null, t2);
  }, delegate: function(e2, t2, n2, r2) {
    return this.on(t2, e2, n2, r2);
  }, undelegate: function(e2, t2, n2) {
    return 1 === arguments.length ? this.off(e2, "**") : this.off(t2, e2 || "**", n2);
  }, hover: function(e2, t2) {
    return this.on("mouseenter", e2).on("mouseleave", t2 || e2);
  } }), ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e2, n2) {
    ce.fn[n2] = function(e3, t2) {
      return 0 < arguments.length ? this.on(n2, null, e3, t2) : this.trigger(n2);
    };
  });
  var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  ce.proxy = function(e2, t2) {
    var n2, r2, i2;
    if ("string" == typeof t2 && (n2 = e2[t2], t2 = e2, e2 = n2), v(e2)) return r2 = ae.call(arguments, 2), (i2 = function() {
      return e2.apply(t2 || this, r2.concat(ae.call(arguments)));
    }).guid = e2.guid = e2.guid || ce.guid++, i2;
  }, ce.holdReady = function(e2) {
    e2 ? ce.readyWait++ : ce.ready(true);
  }, ce.isArray = Array.isArray, ce.parseJSON = JSON.parse, ce.nodeName = fe, ce.isFunction = v, ce.isWindow = y, ce.camelCase = F, ce.type = x, ce.now = Date.now, ce.isNumeric = function(e2) {
    var t2 = ce.type(e2);
    return ("number" === t2 || "string" === t2) && !isNaN(e2 - parseFloat(e2));
  }, ce.trim = function(e2) {
    return null == e2 ? "" : (e2 + "").replace(en, "$1");
  }, "function" == typeof define && define.amd && define("jquery", [], function() {
    return ce;
  });
  var tn = ie.jQuery, nn = ie.$;
  return ce.noConflict = function(e2) {
    return ie.$ === ce && (ie.$ = nn), e2 && ie.jQuery === ce && (ie.jQuery = tn), ce;
  }, "undefined" == typeof e && (ie.jQuery = ie.$ = ce), ce;
});
!(function(i) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery);
})(function(i) {
  "use strict";
  var e = window.Slick || {};
  (e = /* @__PURE__ */ (function() {
    var e2 = 0;
    return function(t, o) {
      var s, n = this;
      n.defaults = { accessibility: true, adaptiveHeight: false, appendArrows: i(t), appendDots: i(t), arrows: true, asNavFor: null, prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>', nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>', autoplay: false, autoplaySpeed: 3e3, centerMode: false, centerPadding: "50px", cssEase: "ease", customPaging: function(e3, t2) {
        return i('<button type="button" />').text(t2 + 1);
      }, dots: false, dotsClass: "slick-dots", draggable: true, easing: "linear", edgeFriction: 0.35, fade: false, focusOnSelect: false, focusOnChange: false, infinite: true, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: false, pauseOnHover: true, pauseOnFocus: true, pauseOnDotsHover: false, respondTo: "window", responsive: null, rows: 1, rtl: false, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: true, swipeToSlide: false, touchMove: true, touchThreshold: 5, useCSS: true, useTransform: true, variableWidth: false, vertical: false, verticalSwiping: false, waitForAnimate: true, zIndex: 1e3 }, n.initials = { animating: false, dragging: false, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, scrolling: false, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: false, slideOffset: 0, swipeLeft: null, swiping: false, $list: null, touchObject: {}, transformsEnabled: false, unslicked: false }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = false, n.focussed = false, n.interrupted = false, n.hidden = "hidden", n.paused = true, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = true, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e2++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(true);
    };
  })()).prototype.activateADA = function() {
    this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
  }, e.prototype.addSlide = e.prototype.slickAdd = function(e2, t, o) {
    var s = this;
    if ("boolean" == typeof t) o = t, t = null;
    else if (t < 0 || t >= s.slideCount) return false;
    s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e2).appendTo(s.$slideTrack) : o ? i(e2).insertBefore(s.$slides.eq(t)) : i(e2).insertAfter(s.$slides.eq(t)) : true === o ? i(e2).prependTo(s.$slideTrack) : i(e2).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(e3, t2) {
      i(t2).attr("data-slick-index", e3);
    }), s.$slidesCache = s.$slides, s.reinit();
  }, e.prototype.animateHeight = function() {
    var i2 = this;
    if (1 === i2.options.slidesToShow && true === i2.options.adaptiveHeight && false === i2.options.vertical) {
      var e2 = i2.$slides.eq(i2.currentSlide).outerHeight(true);
      i2.$list.animate({ height: e2 }, i2.options.speed);
    }
  }, e.prototype.animateSlide = function(e2, t) {
    var o = {}, s = this;
    s.animateHeight(), true === s.options.rtl && false === s.options.vertical && (e2 = -e2), false === s.transformsEnabled ? false === s.options.vertical ? s.$slideTrack.animate({ left: e2 }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({ top: e2 }, s.options.speed, s.options.easing, t) : false === s.cssTransitions ? (true === s.options.rtl && (s.currentLeft = -s.currentLeft), i({ animStart: s.currentLeft }).animate({ animStart: e2 }, { duration: s.options.speed, easing: s.options.easing, step: function(i2) {
      i2 = Math.ceil(i2), false === s.options.vertical ? (o[s.animType] = "translate(" + i2 + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i2 + "px)", s.$slideTrack.css(o));
    }, complete: function() {
      t && t.call();
    } })) : (s.applyTransition(), e2 = Math.ceil(e2), false === s.options.vertical ? o[s.animType] = "translate3d(" + e2 + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e2 + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function() {
      s.disableTransition(), t.call();
    }, s.options.speed));
  }, e.prototype.getNavTarget = function() {
    var e2 = this, t = e2.options.asNavFor;
    return t && null !== t && (t = i(t).not(e2.$slider)), t;
  }, e.prototype.asNavFor = function(e2) {
    var t = this.getNavTarget();
    null !== t && "object" == typeof t && t.each(function() {
      var t2 = i(this).slick("getSlick");
      t2.unslicked || t2.slideHandler(e2, true);
    });
  }, e.prototype.applyTransition = function(i2) {
    var e2 = this, t = {};
    false === e2.options.fade ? t[e2.transitionType] = e2.transformType + " " + e2.options.speed + "ms " + e2.options.cssEase : t[e2.transitionType] = "opacity " + e2.options.speed + "ms " + e2.options.cssEase, false === e2.options.fade ? e2.$slideTrack.css(t) : e2.$slides.eq(i2).css(t);
  }, e.prototype.autoPlay = function() {
    var i2 = this;
    i2.autoPlayClear(), i2.slideCount > i2.options.slidesToShow && (i2.autoPlayTimer = setInterval(i2.autoPlayIterator, i2.options.autoplaySpeed));
  }, e.prototype.autoPlayClear = function() {
    var i2 = this;
    i2.autoPlayTimer && clearInterval(i2.autoPlayTimer);
  }, e.prototype.autoPlayIterator = function() {
    var i2 = this, e2 = i2.currentSlide + i2.options.slidesToScroll;
    i2.paused || i2.interrupted || i2.focussed || (false === i2.options.infinite && (1 === i2.direction && i2.currentSlide + 1 === i2.slideCount - 1 ? i2.direction = 0 : 0 === i2.direction && (e2 = i2.currentSlide - i2.options.slidesToScroll, i2.currentSlide - 1 == 0 && (i2.direction = 1))), i2.slideHandler(e2));
  }, e.prototype.buildArrows = function() {
    var e2 = this;
    true === e2.options.arrows && (e2.$prevArrow = i(e2.options.prevArrow).addClass("slick-arrow"), e2.$nextArrow = i(e2.options.nextArrow).addClass("slick-arrow"), e2.slideCount > e2.options.slidesToShow ? (e2.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e2.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e2.htmlExpr.test(e2.options.prevArrow) && e2.$prevArrow.prependTo(e2.options.appendArrows), e2.htmlExpr.test(e2.options.nextArrow) && e2.$nextArrow.appendTo(e2.options.appendArrows), true !== e2.options.infinite && e2.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e2.$prevArrow.add(e2.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
  }, e.prototype.buildDots = function() {
    var e2, t, o = this;
    if (true === o.options.dots) {
      for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e2 = 0; e2 <= o.getDotCount(); e2 += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e2)));
      o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active");
    }
  }, e.prototype.buildOut = function() {
    var e2 = this;
    e2.$slides = e2.$slider.children(e2.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e2.slideCount = e2.$slides.length, e2.$slides.each(function(e3, t) {
      i(t).attr("data-slick-index", e3).data("originalStyling", i(t).attr("style") || "");
    }), e2.$slider.addClass("slick-slider"), e2.$slideTrack = 0 === e2.slideCount ? i('<div class="slick-track"/>').appendTo(e2.$slider) : e2.$slides.wrapAll('<div class="slick-track"/>').parent(), e2.$list = e2.$slideTrack.wrap('<div class="slick-list"/>').parent(), e2.$slideTrack.css("opacity", 0), true !== e2.options.centerMode && true !== e2.options.swipeToSlide || (e2.options.slidesToScroll = 1), i("img[data-lazy]", e2.$slider).not("[src]").addClass("slick-loading"), e2.setupInfinite(), e2.buildArrows(), e2.buildDots(), e2.updateDots(), e2.setSlideClasses("number" == typeof e2.currentSlide ? e2.currentSlide : 0), true === e2.options.draggable && e2.$list.addClass("draggable");
  }, e.prototype.buildRows = function() {
    var i2, e2, t, o, s, n, r, l = this;
    if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
      for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i2 = 0; i2 < s; i2++) {
        var d = document.createElement("div");
        for (e2 = 0; e2 < l.options.rows; e2++) {
          var a = document.createElement("div");
          for (t = 0; t < l.options.slidesPerRow; t++) {
            var c = i2 * r + (e2 * l.options.slidesPerRow + t);
            n.get(c) && a.appendChild(n.get(c));
          }
          d.appendChild(a);
        }
        o.appendChild(d);
      }
      l.$slider.empty().append(o), l.$slider.children().children().children().css({ width: 100 / l.options.slidesPerRow + "%", display: "inline-block" });
    }
  }, e.prototype.checkResponsive = function(e2, t) {
    var o, s, n, r = this, l = false, d = r.$slider.width(), a = window.innerWidth || i(window).width();
    if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
      s = null;
      for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (false === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
      null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), true === e2 && (r.currentSlide = r.options.initialSlide), r.refresh(e2)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), true === e2 && (r.currentSlide = r.options.initialSlide), r.refresh(e2)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, true === e2 && (r.currentSlide = r.options.initialSlide), r.refresh(e2), l = s), e2 || false === l || r.$slider.trigger("breakpoint", [r, l]);
    }
  }, e.prototype.changeSlide = function(e2, t) {
    var o, s, n, r = this, l = i(e2.currentTarget);
    switch (l.is("a") && e2.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e2.data.message) {
      case "previous":
        s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, false, t);
        break;
      case "next":
        s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, false, t);
        break;
      case "index":
        var d = 0 === e2.data.index ? 0 : e2.data.index || l.index() * r.options.slidesToScroll;
        r.slideHandler(r.checkNavigable(d), false, t), l.children().trigger("focus");
        break;
      default:
        return;
    }
  }, e.prototype.checkNavigable = function(i2) {
    var e2, t;
    if (e2 = this.getNavigableIndexes(), t = 0, i2 > e2[e2.length - 1]) i2 = e2[e2.length - 1];
    else for (var o in e2) {
      if (i2 < e2[o]) {
        i2 = t;
        break;
      }
      t = e2[o];
    }
    return i2;
  }, e.prototype.cleanUpEvents = function() {
    var e2 = this;
    e2.options.dots && null !== e2.$dots && (i("li", e2.$dots).off("click.slick", e2.changeSlide).off("mouseenter.slick", i.proxy(e2.interrupt, e2, true)).off("mouseleave.slick", i.proxy(e2.interrupt, e2, false)), true === e2.options.accessibility && e2.$dots.off("keydown.slick", e2.keyHandler)), e2.$slider.off("focus.slick blur.slick"), true === e2.options.arrows && e2.slideCount > e2.options.slidesToShow && (e2.$prevArrow && e2.$prevArrow.off("click.slick", e2.changeSlide), e2.$nextArrow && e2.$nextArrow.off("click.slick", e2.changeSlide), true === e2.options.accessibility && (e2.$prevArrow && e2.$prevArrow.off("keydown.slick", e2.keyHandler), e2.$nextArrow && e2.$nextArrow.off("keydown.slick", e2.keyHandler))), e2.$list.off("touchstart.slick mousedown.slick", e2.swipeHandler), e2.$list.off("touchmove.slick mousemove.slick", e2.swipeHandler), e2.$list.off("touchend.slick mouseup.slick", e2.swipeHandler), e2.$list.off("touchcancel.slick mouseleave.slick", e2.swipeHandler), e2.$list.off("click.slick", e2.clickHandler), i(document).off(e2.visibilityChange, e2.visibility), e2.cleanUpSlideEvents(), true === e2.options.accessibility && e2.$list.off("keydown.slick", e2.keyHandler), true === e2.options.focusOnSelect && i(e2.$slideTrack).children().off("click.slick", e2.selectHandler), i(window).off("orientationchange.slick.slick-" + e2.instanceUid, e2.orientationChange), i(window).off("resize.slick.slick-" + e2.instanceUid, e2.resize), i("[draggable!=true]", e2.$slideTrack).off("dragstart", e2.preventDefault), i(window).off("load.slick.slick-" + e2.instanceUid, e2.setPosition);
  }, e.prototype.cleanUpSlideEvents = function() {
    var e2 = this;
    e2.$list.off("mouseenter.slick", i.proxy(e2.interrupt, e2, true)), e2.$list.off("mouseleave.slick", i.proxy(e2.interrupt, e2, false));
  }, e.prototype.cleanUpRows = function() {
    var i2, e2 = this;
    e2.options.rows > 1 && ((i2 = e2.$slides.children().children()).removeAttr("style"), e2.$slider.empty().append(i2));
  }, e.prototype.clickHandler = function(i2) {
    false === this.shouldClick && (i2.stopImmediatePropagation(), i2.stopPropagation(), i2.preventDefault());
  }, e.prototype.destroy = function(e2) {
    var t = this;
    t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
      i(this).attr("style", i(this).data("originalStyling"));
    }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = true, e2 || t.$slider.trigger("destroy", [t]);
  }, e.prototype.disableTransition = function(i2) {
    var e2 = this, t = {};
    t[e2.transitionType] = "", false === e2.options.fade ? e2.$slideTrack.css(t) : e2.$slides.eq(i2).css(t);
  }, e.prototype.fadeSlide = function(i2, e2) {
    var t = this;
    false === t.cssTransitions ? (t.$slides.eq(i2).css({ zIndex: t.options.zIndex }), t.$slides.eq(i2).animate({ opacity: 1 }, t.options.speed, t.options.easing, e2)) : (t.applyTransition(i2), t.$slides.eq(i2).css({ opacity: 1, zIndex: t.options.zIndex }), e2 && setTimeout(function() {
      t.disableTransition(i2), e2.call();
    }, t.options.speed));
  }, e.prototype.fadeSlideOut = function(i2) {
    var e2 = this;
    false === e2.cssTransitions ? e2.$slides.eq(i2).animate({ opacity: 0, zIndex: e2.options.zIndex - 2 }, e2.options.speed, e2.options.easing) : (e2.applyTransition(i2), e2.$slides.eq(i2).css({ opacity: 0, zIndex: e2.options.zIndex - 2 }));
  }, e.prototype.filterSlides = e.prototype.slickFilter = function(i2) {
    var e2 = this;
    null !== i2 && (e2.$slidesCache = e2.$slides, e2.unload(), e2.$slideTrack.children(this.options.slide).detach(), e2.$slidesCache.filter(i2).appendTo(e2.$slideTrack), e2.reinit());
  }, e.prototype.focusHandler = function() {
    var e2 = this;
    e2.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(t) {
      t.stopImmediatePropagation();
      var o = i(this);
      setTimeout(function() {
        e2.options.pauseOnFocus && (e2.focussed = o.is(":focus"), e2.autoPlay());
      }, 0);
    });
  }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
    return this.currentSlide;
  }, e.prototype.getDotCount = function() {
    var i2 = this, e2 = 0, t = 0, o = 0;
    if (true === i2.options.infinite) if (i2.slideCount <= i2.options.slidesToShow) ++o;
    else for (; e2 < i2.slideCount; ) ++o, e2 = t + i2.options.slidesToScroll, t += i2.options.slidesToScroll <= i2.options.slidesToShow ? i2.options.slidesToScroll : i2.options.slidesToShow;
    else if (true === i2.options.centerMode) o = i2.slideCount;
    else if (i2.options.asNavFor) for (; e2 < i2.slideCount; ) ++o, e2 = t + i2.options.slidesToScroll, t += i2.options.slidesToScroll <= i2.options.slidesToShow ? i2.options.slidesToScroll : i2.options.slidesToShow;
    else o = 1 + Math.ceil((i2.slideCount - i2.options.slidesToShow) / i2.options.slidesToScroll);
    return o - 1;
  }, e.prototype.getLeft = function(i2) {
    var e2, t, o, s, n = this, r = 0;
    return n.slideOffset = 0, t = n.$slides.first().outerHeight(true), true === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, true === n.options.vertical && true === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i2 + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i2 > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i2 - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i2 - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i2 + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i2 + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i2 + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), true === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : true === n.options.centerMode && true === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : true === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e2 = false === n.options.vertical ? i2 * n.slideWidth * -1 + n.slideOffset : i2 * t * -1 + r, true === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || false === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i2) : n.$slideTrack.children(".slick-slide").eq(i2 + n.options.slidesToShow), e2 = true === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, true === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || false === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i2) : n.$slideTrack.children(".slick-slide").eq(i2 + n.options.slidesToShow + 1), e2 = true === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e2 += (n.$list.width() - o.outerWidth()) / 2)), e2;
  }, e.prototype.getOption = e.prototype.slickGetOption = function(i2) {
    return this.options[i2];
  }, e.prototype.getNavigableIndexes = function() {
    var i2, e2 = this, t = 0, o = 0, s = [];
    for (false === e2.options.infinite ? i2 = e2.slideCount : (t = -1 * e2.options.slidesToScroll, o = -1 * e2.options.slidesToScroll, i2 = 2 * e2.slideCount); t < i2; ) s.push(t), t = o + e2.options.slidesToScroll, o += e2.options.slidesToScroll <= e2.options.slidesToShow ? e2.options.slidesToScroll : e2.options.slidesToShow;
    return s;
  }, e.prototype.getSlick = function() {
    return this;
  }, e.prototype.getSlideCount = function() {
    var e2, t, o = this;
    return t = true === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, true === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(s, n) {
      if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e2 = n, false;
    }), Math.abs(i(e2).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll;
  }, e.prototype.goTo = e.prototype.slickGoTo = function(i2, e2) {
    this.changeSlide({ data: { message: "index", index: parseInt(i2) } }, e2);
  }, e.prototype.init = function(e2) {
    var t = this;
    i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(true), t.focusHandler()), e2 && t.$slider.trigger("init", [t]), true === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = false, t.autoPlay());
  }, e.prototype.initADA = function() {
    var e2 = this, t = Math.ceil(e2.slideCount / e2.options.slidesToShow), o = e2.getNavigableIndexes().filter(function(i2) {
      return i2 >= 0 && i2 < e2.slideCount;
    });
    e2.$slides.add(e2.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), null !== e2.$dots && (e2.$slides.not(e2.$slideTrack.find(".slick-cloned")).each(function(t2) {
      var s2 = o.indexOf(t2);
      i(this).attr({ role: "tabpanel", id: "slick-slide" + e2.instanceUid + t2, tabindex: -1 }), -1 !== s2 && i(this).attr({ "aria-describedby": "slick-slide-control" + e2.instanceUid + s2 });
    }), e2.$dots.attr("role", "tablist").find("li").each(function(s2) {
      var n2 = o[s2];
      i(this).attr({ role: "presentation" }), i(this).find("button").first().attr({ role: "tab", id: "slick-slide-control" + e2.instanceUid + s2, "aria-controls": "slick-slide" + e2.instanceUid + n2, "aria-label": s2 + 1 + " of " + t, "aria-selected": null, tabindex: "-1" });
    }).eq(e2.currentSlide).find("button").attr({ "aria-selected": "true", tabindex: "0" }).end());
    for (var s = e2.currentSlide, n = s + e2.options.slidesToShow; s < n; s++) e2.$slides.eq(s).attr("tabindex", 0);
    e2.activateADA();
  }, e.prototype.initArrowEvents = function() {
    var i2 = this;
    true === i2.options.arrows && i2.slideCount > i2.options.slidesToShow && (i2.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, i2.changeSlide), i2.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, i2.changeSlide), true === i2.options.accessibility && (i2.$prevArrow.on("keydown.slick", i2.keyHandler), i2.$nextArrow.on("keydown.slick", i2.keyHandler)));
  }, e.prototype.initDotEvents = function() {
    var e2 = this;
    true === e2.options.dots && (i("li", e2.$dots).on("click.slick", { message: "index" }, e2.changeSlide), true === e2.options.accessibility && e2.$dots.on("keydown.slick", e2.keyHandler)), true === e2.options.dots && true === e2.options.pauseOnDotsHover && i("li", e2.$dots).on("mouseenter.slick", i.proxy(e2.interrupt, e2, true)).on("mouseleave.slick", i.proxy(e2.interrupt, e2, false));
  }, e.prototype.initSlideEvents = function() {
    var e2 = this;
    e2.options.pauseOnHover && (e2.$list.on("mouseenter.slick", i.proxy(e2.interrupt, e2, true)), e2.$list.on("mouseleave.slick", i.proxy(e2.interrupt, e2, false)));
  }, e.prototype.initializeEvents = function() {
    var e2 = this;
    e2.initArrowEvents(), e2.initDotEvents(), e2.initSlideEvents(), e2.$list.on("touchstart.slick mousedown.slick", { action: "start" }, e2.swipeHandler), e2.$list.on("touchmove.slick mousemove.slick", { action: "move" }, e2.swipeHandler), e2.$list.on("touchend.slick mouseup.slick", { action: "end" }, e2.swipeHandler), e2.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, e2.swipeHandler), e2.$list.on("click.slick", e2.clickHandler), i(document).on(e2.visibilityChange, i.proxy(e2.visibility, e2)), true === e2.options.accessibility && e2.$list.on("keydown.slick", e2.keyHandler), true === e2.options.focusOnSelect && i(e2.$slideTrack).children().on("click.slick", e2.selectHandler), i(window).on("orientationchange.slick.slick-" + e2.instanceUid, i.proxy(e2.orientationChange, e2)), i(window).on("resize.slick.slick-" + e2.instanceUid, i.proxy(e2.resize, e2)), i("[draggable!=true]", e2.$slideTrack).on("dragstart", e2.preventDefault), i(window).on("load.slick.slick-" + e2.instanceUid, e2.setPosition), i(e2.setPosition);
  }, e.prototype.initUI = function() {
    var i2 = this;
    true === i2.options.arrows && i2.slideCount > i2.options.slidesToShow && (i2.$prevArrow.show(), i2.$nextArrow.show()), true === i2.options.dots && i2.slideCount > i2.options.slidesToShow && i2.$dots.show();
  }, e.prototype.keyHandler = function(i2) {
    var e2 = this;
    i2.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i2.keyCode && true === e2.options.accessibility ? e2.changeSlide({ data: { message: true === e2.options.rtl ? "next" : "previous" } }) : 39 === i2.keyCode && true === e2.options.accessibility && e2.changeSlide({ data: { message: true === e2.options.rtl ? "previous" : "next" } }));
  }, e.prototype.lazyLoad = function() {
    function e2(e3) {
      i("img[data-lazy]", e3).each(function() {
        var e4 = i(this), t2 = i(this).attr("data-lazy"), o2 = i(this).attr("data-srcset"), s2 = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"), r2 = document.createElement("img");
        r2.onload = function() {
          e4.animate({ opacity: 0 }, 100, function() {
            o2 && (e4.attr("srcset", o2), s2 && e4.attr("sizes", s2)), e4.attr("src", t2).animate({ opacity: 1 }, 200, function() {
              e4.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
            }), n.$slider.trigger("lazyLoaded", [n, e4, t2]);
          });
        }, r2.onerror = function() {
          e4.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e4, t2]);
        }, r2.src = t2;
      });
    }
    var t, o, s, n = this;
    if (true === n.options.centerMode ? true === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), true === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad) for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
    e2(t), n.slideCount <= n.options.slidesToShow ? e2(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e2(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e2(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow));
  }, e.prototype.loadSlider = function() {
    var i2 = this;
    i2.setPosition(), i2.$slideTrack.css({ opacity: 1 }), i2.$slider.removeClass("slick-loading"), i2.initUI(), "progressive" === i2.options.lazyLoad && i2.progressiveLazyLoad();
  }, e.prototype.next = e.prototype.slickNext = function() {
    this.changeSlide({ data: { message: "next" } });
  }, e.prototype.orientationChange = function() {
    var i2 = this;
    i2.checkResponsive(), i2.setPosition();
  }, e.prototype.pause = e.prototype.slickPause = function() {
    var i2 = this;
    i2.autoPlayClear(), i2.paused = true;
  }, e.prototype.play = e.prototype.slickPlay = function() {
    var i2 = this;
    i2.autoPlay(), i2.options.autoplay = true, i2.paused = false, i2.focussed = false, i2.interrupted = false;
  }, e.prototype.postSlide = function(e2) {
    var t = this;
    t.unslicked || (t.$slider.trigger("afterChange", [t, e2]), t.animating = false, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), true === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
  }, e.prototype.prev = e.prototype.slickPrev = function() {
    this.changeSlide({ data: { message: "previous" } });
  }, e.prototype.preventDefault = function(i2) {
    i2.preventDefault();
  }, e.prototype.progressiveLazyLoad = function(e2) {
    e2 = e2 || 1;
    var t, o, s, n, r, l = this, d = i("img[data-lazy]", l.$slider);
    d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function() {
      s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), true === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad();
    }, r.onerror = function() {
      e2 < 3 ? setTimeout(function() {
        l.progressiveLazyLoad(e2 + 1);
      }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad());
    }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l]);
  }, e.prototype.refresh = function(e2) {
    var t, o, s = this;
    o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(true), i.extend(s, s.initials, { currentSlide: t }), s.init(), e2 || s.changeSlide({ data: { message: "index", index: t } }, false);
  }, e.prototype.registerBreakpoints = function() {
    var e2, t, o, s = this, n = s.options.responsive || null;
    if ("array" === i.type(n) && n.length) {
      s.respondTo = s.options.respondTo || "window";
      for (e2 in n) if (o = s.breakpoints.length - 1, n.hasOwnProperty(e2)) {
        for (t = n[e2].breakpoint; o >= 0; ) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
        s.breakpoints.push(t), s.breakpointSettings[t] = n[e2].settings;
      }
      s.breakpoints.sort(function(i2, e3) {
        return s.options.mobileFirst ? i2 - e3 : e3 - i2;
      });
    }
  }, e.prototype.reinit = function() {
    var e2 = this;
    e2.$slides = e2.$slideTrack.children(e2.options.slide).addClass("slick-slide"), e2.slideCount = e2.$slides.length, e2.currentSlide >= e2.slideCount && 0 !== e2.currentSlide && (e2.currentSlide = e2.currentSlide - e2.options.slidesToScroll), e2.slideCount <= e2.options.slidesToShow && (e2.currentSlide = 0), e2.registerBreakpoints(), e2.setProps(), e2.setupInfinite(), e2.buildArrows(), e2.updateArrows(), e2.initArrowEvents(), e2.buildDots(), e2.updateDots(), e2.initDotEvents(), e2.cleanUpSlideEvents(), e2.initSlideEvents(), e2.checkResponsive(false, true), true === e2.options.focusOnSelect && i(e2.$slideTrack).children().on("click.slick", e2.selectHandler), e2.setSlideClasses("number" == typeof e2.currentSlide ? e2.currentSlide : 0), e2.setPosition(), e2.focusHandler(), e2.paused = !e2.options.autoplay, e2.autoPlay(), e2.$slider.trigger("reInit", [e2]);
  }, e.prototype.resize = function() {
    var e2 = this;
    i(window).width() !== e2.windowWidth && (clearTimeout(e2.windowDelay), e2.windowDelay = window.setTimeout(function() {
      e2.windowWidth = i(window).width(), e2.checkResponsive(), e2.unslicked || e2.setPosition();
    }, 50));
  }, e.prototype.removeSlide = e.prototype.slickRemove = function(i2, e2, t) {
    var o = this;
    if (i2 = "boolean" == typeof i2 ? true === (e2 = i2) ? 0 : o.slideCount - 1 : true === e2 ? --i2 : i2, o.slideCount < 1 || i2 < 0 || i2 > o.slideCount - 1) return false;
    o.unload(), true === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i2).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit();
  }, e.prototype.setCSS = function(i2) {
    var e2, t, o = this, s = {};
    true === o.options.rtl && (i2 = -i2), e2 = "left" == o.positionProp ? Math.ceil(i2) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i2) + "px" : "0px", s[o.positionProp] = i2, false === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, false === o.cssTransitions ? (s[o.animType] = "translate(" + e2 + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e2 + ", " + t + ", 0px)", o.$slideTrack.css(s)));
  }, e.prototype.setDimensions = function() {
    var i2 = this;
    false === i2.options.vertical ? true === i2.options.centerMode && i2.$list.css({ padding: "0px " + i2.options.centerPadding }) : (i2.$list.height(i2.$slides.first().outerHeight(true) * i2.options.slidesToShow), true === i2.options.centerMode && i2.$list.css({ padding: i2.options.centerPadding + " 0px" })), i2.listWidth = i2.$list.width(), i2.listHeight = i2.$list.height(), false === i2.options.vertical && false === i2.options.variableWidth ? (i2.slideWidth = Math.ceil(i2.listWidth / i2.options.slidesToShow), i2.$slideTrack.width(Math.ceil(i2.slideWidth * i2.$slideTrack.children(".slick-slide").length))) : true === i2.options.variableWidth ? i2.$slideTrack.width(5e3 * i2.slideCount) : (i2.slideWidth = Math.ceil(i2.listWidth), i2.$slideTrack.height(Math.ceil(i2.$slides.first().outerHeight(true) * i2.$slideTrack.children(".slick-slide").length)));
    var e2 = i2.$slides.first().outerWidth(true) - i2.$slides.first().width();
    false === i2.options.variableWidth && i2.$slideTrack.children(".slick-slide").width(i2.slideWidth - e2);
  }, e.prototype.setFade = function() {
    var e2, t = this;
    t.$slides.each(function(o, s) {
      e2 = t.slideWidth * o * -1, true === t.options.rtl ? i(s).css({ position: "relative", right: e2, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 }) : i(s).css({ position: "relative", left: e2, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 });
    }), t.$slides.eq(t.currentSlide).css({ zIndex: t.options.zIndex - 1, opacity: 1 });
  }, e.prototype.setHeight = function() {
    var i2 = this;
    if (1 === i2.options.slidesToShow && true === i2.options.adaptiveHeight && false === i2.options.vertical) {
      var e2 = i2.$slides.eq(i2.currentSlide).outerHeight(true);
      i2.$list.css("height", e2);
    }
  }, e.prototype.setOption = e.prototype.slickSetOption = function() {
    var e2, t, o, s, n, r = this, l = false;
    if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;
    else if ("multiple" === n) i.each(o, function(i2, e3) {
      r.options[i2] = e3;
    });
    else if ("responsive" === n) for (t in s) if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];
    else {
      for (e2 = r.options.responsive.length - 1; e2 >= 0; ) r.options.responsive[e2].breakpoint === s[t].breakpoint && r.options.responsive.splice(e2, 1), e2--;
      r.options.responsive.push(s[t]);
    }
    l && (r.unload(), r.reinit());
  }, e.prototype.setPosition = function() {
    var i2 = this;
    i2.setDimensions(), i2.setHeight(), false === i2.options.fade ? i2.setCSS(i2.getLeft(i2.currentSlide)) : i2.setFade(), i2.$slider.trigger("setPosition", [i2]);
  }, e.prototype.setProps = function() {
    var i2 = this, e2 = document.body.style;
    i2.positionProp = true === i2.options.vertical ? "top" : "left", "top" === i2.positionProp ? i2.$slider.addClass("slick-vertical") : i2.$slider.removeClass("slick-vertical"), void 0 === e2.WebkitTransition && void 0 === e2.MozTransition && void 0 === e2.msTransition || true === i2.options.useCSS && (i2.cssTransitions = true), i2.options.fade && ("number" == typeof i2.options.zIndex ? i2.options.zIndex < 3 && (i2.options.zIndex = 3) : i2.options.zIndex = i2.defaults.zIndex), void 0 !== e2.OTransform && (i2.animType = "OTransform", i2.transformType = "-o-transform", i2.transitionType = "OTransition", void 0 === e2.perspectiveProperty && void 0 === e2.webkitPerspective && (i2.animType = false)), void 0 !== e2.MozTransform && (i2.animType = "MozTransform", i2.transformType = "-moz-transform", i2.transitionType = "MozTransition", void 0 === e2.perspectiveProperty && void 0 === e2.MozPerspective && (i2.animType = false)), void 0 !== e2.webkitTransform && (i2.animType = "webkitTransform", i2.transformType = "-webkit-transform", i2.transitionType = "webkitTransition", void 0 === e2.perspectiveProperty && void 0 === e2.webkitPerspective && (i2.animType = false)), void 0 !== e2.msTransform && (i2.animType = "msTransform", i2.transformType = "-ms-transform", i2.transitionType = "msTransition", void 0 === e2.msTransform && (i2.animType = false)), void 0 !== e2.transform && false !== i2.animType && (i2.animType = "transform", i2.transformType = "transform", i2.transitionType = "transition"), i2.transformsEnabled = i2.options.useTransform && null !== i2.animType && false !== i2.animType;
  }, e.prototype.setSlideClasses = function(i2) {
    var e2, t, o, s, n = this;
    if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i2).addClass("slick-current"), true === n.options.centerMode) {
      var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
      e2 = Math.floor(n.options.slidesToShow / 2), true === n.options.infinite && (i2 >= e2 && i2 <= n.slideCount - 1 - e2 ? n.$slides.slice(i2 - e2 + r, i2 + e2 + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i2, t.slice(o - e2 + 1 + r, o + e2 + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i2 ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i2 === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i2).addClass("slick-center");
    } else i2 >= 0 && i2 <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i2, i2 + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = true === n.options.infinite ? n.options.slidesToShow + i2 : i2, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i2 < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
    "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad();
  }, e.prototype.setupInfinite = function() {
    var e2, t, o, s = this;
    if (true === s.options.fade && (s.options.centerMode = false), true === s.options.infinite && false === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
      for (o = true === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e2 = s.slideCount; e2 > s.slideCount - o; e2 -= 1) t = e2 - 1, i(s.$slides[t]).clone(true).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
      for (e2 = 0; e2 < o + s.slideCount; e2 += 1) t = e2, i(s.$slides[t]).clone(true).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
      s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
        i(this).attr("id", "");
      });
    }
  }, e.prototype.interrupt = function(i2) {
    var e2 = this;
    i2 || e2.autoPlay(), e2.interrupted = i2;
  }, e.prototype.selectHandler = function(e2) {
    var t = this, o = i(e2.target).is(".slick-slide") ? i(e2.target) : i(e2.target).parents(".slick-slide"), s = parseInt(o.attr("data-slick-index"));
    s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, false, true) : t.slideHandler(s);
  }, e.prototype.slideHandler = function(i2, e2, t) {
    var o, s, n, r, l, d = null, a = this;
    if (e2 = e2 || false, !(true === a.animating && true === a.options.waitForAnimate || true === a.options.fade && a.currentSlide === i2)) if (false === e2 && a.asNavFor(i2), o = i2, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, false === a.options.infinite && false === a.options.centerMode && (i2 < 0 || i2 > a.getDotCount() * a.options.slidesToScroll)) false === a.options.fade && (o = a.currentSlide, true !== t ? a.animateSlide(r, function() {
      a.postSlide(o);
    }) : a.postSlide(o));
    else if (false === a.options.infinite && true === a.options.centerMode && (i2 < 0 || i2 > a.slideCount - a.options.slidesToScroll)) false === a.options.fade && (o = a.currentSlide, true !== t ? a.animateSlide(r, function() {
      a.postSlide(o);
    }) : a.postSlide(o));
    else {
      if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = true, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), true === a.options.fade) return true !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function() {
        a.postSlide(s);
      })) : a.postSlide(s), void a.animateHeight();
      true !== t ? a.animateSlide(d, function() {
        a.postSlide(s);
      }) : a.postSlide(s);
    }
  }, e.prototype.startLoad = function() {
    var i2 = this;
    true === i2.options.arrows && i2.slideCount > i2.options.slidesToShow && (i2.$prevArrow.hide(), i2.$nextArrow.hide()), true === i2.options.dots && i2.slideCount > i2.options.slidesToShow && i2.$dots.hide(), i2.$slider.addClass("slick-loading");
  }, e.prototype.swipeDirection = function() {
    var i2, e2, t, o, s = this;
    return i2 = s.touchObject.startX - s.touchObject.curX, e2 = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e2, i2), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? false === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? false === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? false === s.options.rtl ? "right" : "left" : true === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical";
  }, e.prototype.swipeEnd = function(i2) {
    var e2, t, o = this;
    if (o.dragging = false, o.swiping = false, o.scrolling) return o.scrolling = false, false;
    if (o.interrupted = false, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return false;
    if (true === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
      switch (t = o.swipeDirection()) {
        case "left":
        case "down":
          e2 = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
          break;
        case "right":
        case "up":
          e2 = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1;
      }
      "vertical" != t && (o.slideHandler(e2), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]));
    } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {});
  }, e.prototype.swipeHandler = function(i2) {
    var e2 = this;
    if (!(false === e2.options.swipe || "ontouchend" in document && false === e2.options.swipe || false === e2.options.draggable && -1 !== i2.type.indexOf("mouse"))) switch (e2.touchObject.fingerCount = i2.originalEvent && void 0 !== i2.originalEvent.touches ? i2.originalEvent.touches.length : 1, e2.touchObject.minSwipe = e2.listWidth / e2.options.touchThreshold, true === e2.options.verticalSwiping && (e2.touchObject.minSwipe = e2.listHeight / e2.options.touchThreshold), i2.data.action) {
      case "start":
        e2.swipeStart(i2);
        break;
      case "move":
        e2.swipeMove(i2);
        break;
      case "end":
        e2.swipeEnd(i2);
    }
  }, e.prototype.swipeMove = function(i2) {
    var e2, t, o, s, n, r, l = this;
    return n = void 0 !== i2.originalEvent ? i2.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e2 = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i2.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i2.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = true, false) : (true === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i2.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = true, i2.preventDefault()), s = (false === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), true === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = false, false === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = true), false === l.options.vertical ? l.swipeLeft = e2 + o * s : l.swipeLeft = e2 + o * (l.$list.height() / l.listWidth) * s, true === l.options.verticalSwiping && (l.swipeLeft = e2 + o * s), true !== l.options.fade && false !== l.options.touchMove && (true === l.animating ? (l.swipeLeft = null, false) : void l.setCSS(l.swipeLeft))));
  }, e.prototype.swipeStart = function(i2) {
    var e2, t = this;
    if (t.interrupted = true, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, false;
    void 0 !== i2.originalEvent && void 0 !== i2.originalEvent.touches && (e2 = i2.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e2 ? e2.pageX : i2.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e2 ? e2.pageY : i2.clientY, t.dragging = true;
  }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
    var i2 = this;
    null !== i2.$slidesCache && (i2.unload(), i2.$slideTrack.children(this.options.slide).detach(), i2.$slidesCache.appendTo(i2.$slideTrack), i2.reinit());
  }, e.prototype.unload = function() {
    var e2 = this;
    i(".slick-cloned", e2.$slider).remove(), e2.$dots && e2.$dots.remove(), e2.$prevArrow && e2.htmlExpr.test(e2.options.prevArrow) && e2.$prevArrow.remove(), e2.$nextArrow && e2.htmlExpr.test(e2.options.nextArrow) && e2.$nextArrow.remove(), e2.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
  }, e.prototype.unslick = function(i2) {
    var e2 = this;
    e2.$slider.trigger("unslick", [e2, i2]), e2.destroy();
  }, e.prototype.updateArrows = function() {
    var i2 = this;
    Math.floor(i2.options.slidesToShow / 2), true === i2.options.arrows && i2.slideCount > i2.options.slidesToShow && !i2.options.infinite && (i2.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i2.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i2.currentSlide ? (i2.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i2.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i2.currentSlide >= i2.slideCount - i2.options.slidesToShow && false === i2.options.centerMode ? (i2.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i2.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i2.currentSlide >= i2.slideCount - 1 && true === i2.options.centerMode && (i2.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i2.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
  }, e.prototype.updateDots = function() {
    var i2 = this;
    null !== i2.$dots && (i2.$dots.find("li").removeClass("slick-active").end(), i2.$dots.find("li").eq(Math.floor(i2.currentSlide / i2.options.slidesToScroll)).addClass("slick-active"));
  }, e.prototype.visibility = function() {
    var i2 = this;
    i2.options.autoplay && (document[i2.hidden] ? i2.interrupted = true : i2.interrupted = false);
  }, i.fn.slick = function() {
    var i2, t, o = this, s = arguments[0], n = Array.prototype.slice.call(arguments, 1), r = o.length;
    for (i2 = 0; i2 < r; i2++) if ("object" == typeof s || void 0 === s ? o[i2].slick = new e(o[i2], s) : t = o[i2].slick[s].apply(o[i2].slick, n), void 0 !== t) return t;
    return o;
  };
});
!(function(e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t();
})(this, function() {
  return (function(e) {
    function t(o) {
      if (n[o]) return n[o].exports;
      var i = n[o] = { exports: {}, id: o, loaded: false };
      return e[o].call(i.exports, i, i.exports, t), i.loaded = true, i.exports;
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "dist/", t(0);
  })([function(e, t, n) {
    "use strict";
    function o(e2) {
      return e2 && e2.__esModule ? e2 : { default: e2 };
    }
    var i = Object.assign || function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n2 = arguments[t2];
        for (var o2 in n2) Object.prototype.hasOwnProperty.call(n2, o2) && (e2[o2] = n2[o2]);
      }
      return e2;
    }, r = n(1), a = (o(r), n(6)), u = o(a), c = n(7), s = o(c), f = n(8), d = o(f), l = n(9), p = o(l), m = n(10), b = o(m), v = n(11), y = o(v), g = n(14), h = o(g), w = [], k = false, x = { offset: 120, delay: 0, easing: "ease", duration: 400, disable: false, once: false, startEvent: "DOMContentLoaded", throttleDelay: 99, debounceDelay: 50, disableMutationObserver: false }, j = function() {
      var e2 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      if (e2 && (k = true), k) return w = (0, y.default)(w, x), (0, b.default)(w, x.once), w;
    }, O = function() {
      w = (0, h.default)(), j();
    }, M = function() {
      w.forEach(function(e2, t2) {
        e2.node.removeAttribute("data-aos"), e2.node.removeAttribute("data-aos-easing"), e2.node.removeAttribute("data-aos-duration"), e2.node.removeAttribute("data-aos-delay");
      });
    }, S = function(e2) {
      return e2 === true || "mobile" === e2 && p.default.mobile() || "phone" === e2 && p.default.phone() || "tablet" === e2 && p.default.tablet() || "function" == typeof e2 && e2() === true;
    }, _ = function(e2) {
      x = i(x, e2), w = (0, h.default)();
      var t2 = document.all && !window.atob;
      return S(x.disable) || t2 ? M() : (x.disableMutationObserver || d.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), x.disableMutationObserver = true), document.querySelector("body").setAttribute("data-aos-easing", x.easing), document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), "DOMContentLoaded" === x.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? j(true) : "load" === x.startEvent ? window.addEventListener(x.startEvent, function() {
        j(true);
      }) : document.addEventListener(x.startEvent, function() {
        j(true);
      }), window.addEventListener("resize", (0, s.default)(j, x.debounceDelay, true)), window.addEventListener("orientationchange", (0, s.default)(j, x.debounceDelay, true)), window.addEventListener("scroll", (0, u.default)(function() {
        (0, b.default)(w, x.once);
      }, x.throttleDelay)), x.disableMutationObserver || d.default.ready("[data-aos]", O), w);
    };
    e.exports = { init: _, refresh: j, refreshHard: O };
  }, function(e, t) {
  }, , , , , function(e, t) {
    (function(t2) {
      "use strict";
      function n(e2, t3, n2) {
        function o2(t4) {
          var n3 = b2, o3 = v2;
          return b2 = v2 = void 0, k2 = t4, g2 = e2.apply(o3, n3);
        }
        function r2(e3) {
          return k2 = e3, h2 = setTimeout(f2, t3), M ? o2(e3) : g2;
        }
        function a2(e3) {
          var n3 = e3 - w2, o3 = e3 - k2, i2 = t3 - n3;
          return S ? j(i2, y2 - o3) : i2;
        }
        function c2(e3) {
          var n3 = e3 - w2, o3 = e3 - k2;
          return void 0 === w2 || n3 >= t3 || n3 < 0 || S && o3 >= y2;
        }
        function f2() {
          var e3 = O();
          return c2(e3) ? d2(e3) : void (h2 = setTimeout(f2, a2(e3)));
        }
        function d2(e3) {
          return h2 = void 0, _ && b2 ? o2(e3) : (b2 = v2 = void 0, g2);
        }
        function l2() {
          void 0 !== h2 && clearTimeout(h2), k2 = 0, b2 = w2 = v2 = h2 = void 0;
        }
        function p2() {
          return void 0 === h2 ? g2 : d2(O());
        }
        function m2() {
          var e3 = O(), n3 = c2(e3);
          if (b2 = arguments, v2 = this, w2 = e3, n3) {
            if (void 0 === h2) return r2(w2);
            if (S) return h2 = setTimeout(f2, t3), o2(w2);
          }
          return void 0 === h2 && (h2 = setTimeout(f2, t3)), g2;
        }
        var b2, v2, y2, g2, h2, w2, k2 = 0, M = false, S = false, _ = true;
        if ("function" != typeof e2) throw new TypeError(s);
        return t3 = u(t3) || 0, i(n2) && (M = !!n2.leading, S = "maxWait" in n2, y2 = S ? x(u(n2.maxWait) || 0, t3) : y2, _ = "trailing" in n2 ? !!n2.trailing : _), m2.cancel = l2, m2.flush = p2, m2;
      }
      function o(e2, t3, o2) {
        var r2 = true, a2 = true;
        if ("function" != typeof e2) throw new TypeError(s);
        return i(o2) && (r2 = "leading" in o2 ? !!o2.leading : r2, a2 = "trailing" in o2 ? !!o2.trailing : a2), n(e2, t3, { leading: r2, maxWait: t3, trailing: a2 });
      }
      function i(e2) {
        var t3 = "undefined" == typeof e2 ? "undefined" : c(e2);
        return !!e2 && ("object" == t3 || "function" == t3);
      }
      function r(e2) {
        return !!e2 && "object" == ("undefined" == typeof e2 ? "undefined" : c(e2));
      }
      function a(e2) {
        return "symbol" == ("undefined" == typeof e2 ? "undefined" : c(e2)) || r(e2) && k.call(e2) == d;
      }
      function u(e2) {
        if ("number" == typeof e2) return e2;
        if (a(e2)) return f;
        if (i(e2)) {
          var t3 = "function" == typeof e2.valueOf ? e2.valueOf() : e2;
          e2 = i(t3) ? t3 + "" : t3;
        }
        if ("string" != typeof e2) return 0 === e2 ? e2 : +e2;
        e2 = e2.replace(l, "");
        var n2 = m.test(e2);
        return n2 || b.test(e2) ? v(e2.slice(2), n2 ? 2 : 8) : p.test(e2) ? f : +e2;
      }
      var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e2) {
        return typeof e2;
      } : function(e2) {
        return e2 && "function" == typeof Symbol && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
      }, s = "Expected a function", f = NaN, d = "[object Symbol]", l = /^\s+|\s+$/g, p = /^[-+]0x[0-9a-f]+$/i, m = /^0b[01]+$/i, b = /^0o[0-7]+$/i, v = parseInt, y = "object" == ("undefined" == typeof t2 ? "undefined" : c(t2)) && t2 && t2.Object === Object && t2, g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self, h = y || g || Function("return this")(), w = Object.prototype, k = w.toString, x = Math.max, j = Math.min, O = function() {
        return h.Date.now();
      };
      e.exports = o;
    }).call(t, /* @__PURE__ */ (function() {
      return this;
    })());
  }, function(e, t) {
    (function(t2) {
      "use strict";
      function n(e2, t3, n2) {
        function i2(t4) {
          var n3 = b2, o2 = v2;
          return b2 = v2 = void 0, O = t4, g2 = e2.apply(o2, n3);
        }
        function r2(e3) {
          return O = e3, h2 = setTimeout(f2, t3), M ? i2(e3) : g2;
        }
        function u2(e3) {
          var n3 = e3 - w2, o2 = e3 - O, i3 = t3 - n3;
          return S ? x(i3, y2 - o2) : i3;
        }
        function s2(e3) {
          var n3 = e3 - w2, o2 = e3 - O;
          return void 0 === w2 || n3 >= t3 || n3 < 0 || S && o2 >= y2;
        }
        function f2() {
          var e3 = j();
          return s2(e3) ? d2(e3) : void (h2 = setTimeout(f2, u2(e3)));
        }
        function d2(e3) {
          return h2 = void 0, _ && b2 ? i2(e3) : (b2 = v2 = void 0, g2);
        }
        function l2() {
          void 0 !== h2 && clearTimeout(h2), O = 0, b2 = w2 = v2 = h2 = void 0;
        }
        function p2() {
          return void 0 === h2 ? g2 : d2(j());
        }
        function m2() {
          var e3 = j(), n3 = s2(e3);
          if (b2 = arguments, v2 = this, w2 = e3, n3) {
            if (void 0 === h2) return r2(w2);
            if (S) return h2 = setTimeout(f2, t3), i2(w2);
          }
          return void 0 === h2 && (h2 = setTimeout(f2, t3)), g2;
        }
        var b2, v2, y2, g2, h2, w2, O = 0, M = false, S = false, _ = true;
        if ("function" != typeof e2) throw new TypeError(c);
        return t3 = a(t3) || 0, o(n2) && (M = !!n2.leading, S = "maxWait" in n2, y2 = S ? k(a(n2.maxWait) || 0, t3) : y2, _ = "trailing" in n2 ? !!n2.trailing : _), m2.cancel = l2, m2.flush = p2, m2;
      }
      function o(e2) {
        var t3 = "undefined" == typeof e2 ? "undefined" : u(e2);
        return !!e2 && ("object" == t3 || "function" == t3);
      }
      function i(e2) {
        return !!e2 && "object" == ("undefined" == typeof e2 ? "undefined" : u(e2));
      }
      function r(e2) {
        return "symbol" == ("undefined" == typeof e2 ? "undefined" : u(e2)) || i(e2) && w.call(e2) == f;
      }
      function a(e2) {
        if ("number" == typeof e2) return e2;
        if (r(e2)) return s;
        if (o(e2)) {
          var t3 = "function" == typeof e2.valueOf ? e2.valueOf() : e2;
          e2 = o(t3) ? t3 + "" : t3;
        }
        if ("string" != typeof e2) return 0 === e2 ? e2 : +e2;
        e2 = e2.replace(d, "");
        var n2 = p.test(e2);
        return n2 || m.test(e2) ? b(e2.slice(2), n2 ? 2 : 8) : l.test(e2) ? s : +e2;
      }
      var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e2) {
        return typeof e2;
      } : function(e2) {
        return e2 && "function" == typeof Symbol && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
      }, c = "Expected a function", s = NaN, f = "[object Symbol]", d = /^\s+|\s+$/g, l = /^[-+]0x[0-9a-f]+$/i, p = /^0b[01]+$/i, m = /^0o[0-7]+$/i, b = parseInt, v = "object" == ("undefined" == typeof t2 ? "undefined" : u(t2)) && t2 && t2.Object === Object && t2, y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self, g = v || y || Function("return this")(), h = Object.prototype, w = h.toString, k = Math.max, x = Math.min, j = function() {
        return g.Date.now();
      };
      e.exports = n;
    }).call(t, /* @__PURE__ */ (function() {
      return this;
    })());
  }, function(e, t) {
    "use strict";
    function n(e2) {
      var t2 = void 0, o2 = void 0, i2 = void 0;
      for (t2 = 0; t2 < e2.length; t2 += 1) {
        if (o2 = e2[t2], o2.dataset && o2.dataset.aos) return true;
        if (i2 = o2.children && n(o2.children)) return true;
      }
      return false;
    }
    function o() {
      return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    }
    function i() {
      return !!o();
    }
    function r(e2, t2) {
      var n2 = window.document, i2 = o(), r2 = new i2(a);
      u = t2, r2.observe(n2.documentElement, { childList: true, subtree: true, removedNodes: true });
    }
    function a(e2) {
      e2 && e2.forEach(function(e3) {
        var t2 = Array.prototype.slice.call(e3.addedNodes), o2 = Array.prototype.slice.call(e3.removedNodes), i2 = t2.concat(o2);
        if (n(i2)) return u();
      });
    }
    Object.defineProperty(t, "__esModule", { value: true });
    var u = function() {
    };
    t.default = { isSupported: i, ready: r };
  }, function(e, t) {
    "use strict";
    function n(e2, t2) {
      if (!(e2 instanceof t2)) throw new TypeError("Cannot call a class as a function");
    }
    function o() {
      return navigator.userAgent || navigator.vendor || window.opera || "";
    }
    Object.defineProperty(t, "__esModule", { value: true });
    var i = /* @__PURE__ */ (function() {
      function e2(e3, t2) {
        for (var n2 = 0; n2 < t2.length; n2++) {
          var o2 = t2[n2];
          o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e3, o2.key, o2);
        }
      }
      return function(t2, n2, o2) {
        return n2 && e2(t2.prototype, n2), o2 && e2(t2, o2), t2;
      };
    })(), r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, s = (function() {
      function e2() {
        n(this, e2);
      }
      return i(e2, [{ key: "phone", value: function() {
        var e3 = o();
        return !(!r.test(e3) && !a.test(e3.substr(0, 4)));
      } }, { key: "mobile", value: function() {
        var e3 = o();
        return !(!u.test(e3) && !c.test(e3.substr(0, 4)));
      } }, { key: "tablet", value: function() {
        return this.mobile() && !this.phone();
      } }]), e2;
    })();
    t.default = new s();
  }, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    var n = function(e2, t2, n2) {
      var o2 = e2.node.getAttribute("data-aos-once");
      t2 > e2.position ? e2.node.classList.add("aos-animate") : "undefined" != typeof o2 && ("false" === o2 || !n2 && "true" !== o2) && e2.node.classList.remove("aos-animate");
    }, o = function(e2, t2) {
      var o2 = window.pageYOffset, i = window.innerHeight;
      e2.forEach(function(e3, r) {
        n(e3, i + o2, t2);
      });
    };
    t.default = o;
  }, function(e, t, n) {
    "use strict";
    function o(e2) {
      return e2 && e2.__esModule ? e2 : { default: e2 };
    }
    Object.defineProperty(t, "__esModule", { value: true });
    var i = n(12), r = o(i), a = function(e2, t2) {
      return e2.forEach(function(e3, n2) {
        e3.node.classList.add("aos-init"), e3.position = (0, r.default)(e3.node, t2.offset);
      }), e2;
    };
    t.default = a;
  }, function(e, t, n) {
    "use strict";
    function o(e2) {
      return e2 && e2.__esModule ? e2 : { default: e2 };
    }
    Object.defineProperty(t, "__esModule", { value: true });
    var i = n(13), r = o(i), a = function(e2, t2) {
      var n2 = 0, o2 = 0, i2 = window.innerHeight, a2 = { offset: e2.getAttribute("data-aos-offset"), anchor: e2.getAttribute("data-aos-anchor"), anchorPlacement: e2.getAttribute("data-aos-anchor-placement") };
      switch (a2.offset && !isNaN(a2.offset) && (o2 = parseInt(a2.offset)), a2.anchor && document.querySelectorAll(a2.anchor) && (e2 = document.querySelectorAll(a2.anchor)[0]), n2 = (0, r.default)(e2).top, a2.anchorPlacement) {
        case "top-bottom":
          break;
        case "center-bottom":
          n2 += e2.offsetHeight / 2;
          break;
        case "bottom-bottom":
          n2 += e2.offsetHeight;
          break;
        case "top-center":
          n2 += i2 / 2;
          break;
        case "bottom-center":
          n2 += i2 / 2 + e2.offsetHeight;
          break;
        case "center-center":
          n2 += i2 / 2 + e2.offsetHeight / 2;
          break;
        case "top-top":
          n2 += i2;
          break;
        case "bottom-top":
          n2 += e2.offsetHeight + i2;
          break;
        case "center-top":
          n2 += e2.offsetHeight / 2 + i2;
      }
      return a2.anchorPlacement || a2.offset || isNaN(t2) || (o2 = t2), n2 + o2;
    };
    t.default = a;
  }, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    var n = function(e2) {
      for (var t2 = 0, n2 = 0; e2 && !isNaN(e2.offsetLeft) && !isNaN(e2.offsetTop); ) t2 += e2.offsetLeft - ("BODY" != e2.tagName ? e2.scrollLeft : 0), n2 += e2.offsetTop - ("BODY" != e2.tagName ? e2.scrollTop : 0), e2 = e2.offsetParent;
      return { top: n2, left: t2 };
    };
    t.default = n;
  }, function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true });
    var n = function(e2) {
      return e2 = e2 || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e2, function(e3) {
        return { node: e3 };
      });
    };
    t.default = n;
  }]);
});
/*!
  * Bootstrap v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!(function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e();
})(this, function() {
  "use strict";
  const t = /* @__PURE__ */ new Map(), e = { set(e2, i2, n2) {
    t.has(e2) || t.set(e2, /* @__PURE__ */ new Map());
    const s2 = t.get(e2);
    s2.has(i2) || 0 === s2.size ? s2.set(i2, n2) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s2.keys())[0]}.`);
  }, get: (e2, i2) => t.has(e2) && t.get(e2).get(i2) || null, remove(e2, i2) {
    if (!t.has(e2)) return;
    const n2 = t.get(e2);
    n2.delete(i2), 0 === n2.size && t.delete(e2);
  } }, i = "transitionend", n = (t2) => (t2 && window.CSS && window.CSS.escape && (t2 = t2.replace(/#([^\s"#']+)/g, (t3, e2) => `#${CSS.escape(e2)}`)), t2), s = (t2) => null == t2 ? `${t2}` : Object.prototype.toString.call(t2).match(/\s([a-z]+)/i)[1].toLowerCase(), o = (t2) => {
    t2.dispatchEvent(new Event(i));
  }, r = (t2) => !(!t2 || "object" != typeof t2) && (void 0 !== t2.jquery && (t2 = t2[0]), void 0 !== t2.nodeType), a = (t2) => r(t2) ? t2.jquery ? t2[0] : t2 : "string" == typeof t2 && t2.length > 0 ? document.querySelector(n(t2)) : null, l = (t2) => {
    if (!r(t2) || 0 === t2.getClientRects().length) return false;
    const e2 = "visible" === getComputedStyle(t2).getPropertyValue("visibility"), i2 = t2.closest("details:not([open])");
    if (!i2) return e2;
    if (i2 !== t2) {
      const e3 = t2.closest("summary");
      if (e3 && e3.parentNode !== i2) return false;
      if (null === e3) return false;
    }
    return e2;
  }, c = (t2) => !t2 || t2.nodeType !== Node.ELEMENT_NODE || !!t2.classList.contains("disabled") || (void 0 !== t2.disabled ? t2.disabled : t2.hasAttribute("disabled") && "false" !== t2.getAttribute("disabled")), h = (t2) => {
    if (!document.documentElement.attachShadow) return null;
    if ("function" == typeof t2.getRootNode) {
      const e2 = t2.getRootNode();
      return e2 instanceof ShadowRoot ? e2 : null;
    }
    return t2 instanceof ShadowRoot ? t2 : t2.parentNode ? h(t2.parentNode) : null;
  }, d = () => {
  }, u = (t2) => {
    t2.offsetHeight;
  }, f = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, p = [], m = () => "rtl" === document.documentElement.dir, g = (t2) => {
    var e2;
    e2 = () => {
      const e3 = f();
      if (e3) {
        const i2 = t2.NAME, n2 = e3.fn[i2];
        e3.fn[i2] = t2.jQueryInterface, e3.fn[i2].Constructor = t2, e3.fn[i2].noConflict = () => (e3.fn[i2] = n2, t2.jQueryInterface);
      }
    }, "loading" === document.readyState ? (p.length || document.addEventListener("DOMContentLoaded", () => {
      for (const t3 of p) t3();
    }), p.push(e2)) : e2();
  }, _ = (t2, e2 = [], i2 = t2) => "function" == typeof t2 ? t2.call(...e2) : i2, b = (t2, e2, n2 = true) => {
    if (!n2) return void _(t2);
    const s2 = ((t3) => {
      if (!t3) return 0;
      let { transitionDuration: e3, transitionDelay: i2 } = window.getComputedStyle(t3);
      const n3 = Number.parseFloat(e3), s3 = Number.parseFloat(i2);
      return n3 || s3 ? (e3 = e3.split(",")[0], i2 = i2.split(",")[0], 1e3 * (Number.parseFloat(e3) + Number.parseFloat(i2))) : 0;
    })(e2) + 5;
    let r2 = false;
    const a2 = ({ target: n3 }) => {
      n3 === e2 && (r2 = true, e2.removeEventListener(i, a2), _(t2));
    };
    e2.addEventListener(i, a2), setTimeout(() => {
      r2 || o(e2);
    }, s2);
  }, v = (t2, e2, i2, n2) => {
    const s2 = t2.length;
    let o2 = t2.indexOf(e2);
    return -1 === o2 ? !i2 && n2 ? t2[s2 - 1] : t2[0] : (o2 += i2 ? 1 : -1, n2 && (o2 = (o2 + s2) % s2), t2[Math.max(0, Math.min(o2, s2 - 1))]);
  }, y = /[^.]*(?=\..*)\.|.*/, w = /\..*/, A = /::\d+$/, E = {};
  let T = 1;
  const C = { mouseenter: "mouseover", mouseleave: "mouseout" }, O = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
  function x(t2, e2) {
    return e2 && `${e2}::${T++}` || t2.uidEvent || T++;
  }
  function k(t2) {
    const e2 = x(t2);
    return t2.uidEvent = e2, E[e2] = E[e2] || {}, E[e2];
  }
  function L(t2, e2, i2 = null) {
    return Object.values(t2).find((t3) => t3.callable === e2 && t3.delegationSelector === i2);
  }
  function S(t2, e2, i2) {
    const n2 = "string" == typeof e2, s2 = n2 ? i2 : e2 || i2;
    let o2 = N(t2);
    return O.has(o2) || (o2 = t2), [n2, s2, o2];
  }
  function D(t2, e2, i2, n2, s2) {
    if ("string" != typeof e2 || !t2) return;
    let [o2, r2, a2] = S(e2, i2, n2);
    if (e2 in C) {
      const t3 = (t4) => function(e3) {
        if (!e3.relatedTarget || e3.relatedTarget !== e3.delegateTarget && !e3.delegateTarget.contains(e3.relatedTarget)) return t4.call(this, e3);
      };
      r2 = t3(r2);
    }
    const l2 = k(t2), c2 = l2[a2] || (l2[a2] = {}), h2 = L(c2, r2, o2 ? i2 : null);
    if (h2) return void (h2.oneOff = h2.oneOff && s2);
    const d2 = x(r2, e2.replace(y, "")), u2 = o2 ? /* @__PURE__ */ (function(t3, e3, i3) {
      return function n3(s3) {
        const o3 = t3.querySelectorAll(e3);
        for (let { target: r3 } = s3; r3 && r3 !== this; r3 = r3.parentNode) for (const a3 of o3) if (a3 === r3) return j(s3, { delegateTarget: r3 }), n3.oneOff && P.off(t3, s3.type, e3, i3), i3.apply(r3, [s3]);
      };
    })(t2, i2, r2) : /* @__PURE__ */ (function(t3, e3) {
      return function i3(n3) {
        return j(n3, { delegateTarget: t3 }), i3.oneOff && P.off(t3, n3.type, e3), e3.apply(t3, [n3]);
      };
    })(t2, r2);
    u2.delegationSelector = o2 ? i2 : null, u2.callable = r2, u2.oneOff = s2, u2.uidEvent = d2, c2[d2] = u2, t2.addEventListener(a2, u2, o2);
  }
  function $(t2, e2, i2, n2, s2) {
    const o2 = L(e2[i2], n2, s2);
    o2 && (t2.removeEventListener(i2, o2, Boolean(s2)), delete e2[i2][o2.uidEvent]);
  }
  function I(t2, e2, i2, n2) {
    const s2 = e2[i2] || {};
    for (const [o2, r2] of Object.entries(s2)) o2.includes(n2) && $(t2, e2, i2, r2.callable, r2.delegationSelector);
  }
  function N(t2) {
    return t2 = t2.replace(w, ""), C[t2] || t2;
  }
  const P = { on(t2, e2, i2, n2) {
    D(t2, e2, i2, n2, false);
  }, one(t2, e2, i2, n2) {
    D(t2, e2, i2, n2, true);
  }, off(t2, e2, i2, n2) {
    if ("string" != typeof e2 || !t2) return;
    const [s2, o2, r2] = S(e2, i2, n2), a2 = r2 !== e2, l2 = k(t2), c2 = l2[r2] || {}, h2 = e2.startsWith(".");
    if (void 0 === o2) {
      if (h2) for (const i3 of Object.keys(l2)) I(t2, l2, i3, e2.slice(1));
      for (const [i3, n3] of Object.entries(c2)) {
        const s3 = i3.replace(A, "");
        a2 && !e2.includes(s3) || $(t2, l2, r2, n3.callable, n3.delegationSelector);
      }
    } else {
      if (!Object.keys(c2).length) return;
      $(t2, l2, r2, o2, s2 ? i2 : null);
    }
  }, trigger(t2, e2, i2) {
    if ("string" != typeof e2 || !t2) return null;
    const n2 = f();
    let s2 = null, o2 = true, r2 = true, a2 = false;
    e2 !== N(e2) && n2 && (s2 = n2.Event(e2, i2), n2(t2).trigger(s2), o2 = !s2.isPropagationStopped(), r2 = !s2.isImmediatePropagationStopped(), a2 = s2.isDefaultPrevented());
    const l2 = j(new Event(e2, { bubbles: o2, cancelable: true }), i2);
    return a2 && l2.preventDefault(), r2 && t2.dispatchEvent(l2), l2.defaultPrevented && s2 && s2.preventDefault(), l2;
  } };
  function j(t2, e2 = {}) {
    for (const [i2, n2] of Object.entries(e2)) try {
      t2[i2] = n2;
    } catch (e3) {
      Object.defineProperty(t2, i2, { configurable: true, get: () => n2 });
    }
    return t2;
  }
  function M(t2) {
    if ("true" === t2) return true;
    if ("false" === t2) return false;
    if (t2 === Number(t2).toString()) return Number(t2);
    if ("" === t2 || "null" === t2) return null;
    if ("string" != typeof t2) return t2;
    try {
      return JSON.parse(decodeURIComponent(t2));
    } catch (e2) {
      return t2;
    }
  }
  function F(t2) {
    return t2.replace(/[A-Z]/g, (t3) => `-${t3.toLowerCase()}`);
  }
  const H = { setDataAttribute(t2, e2, i2) {
    t2.setAttribute(`data-bs-${F(e2)}`, i2);
  }, removeDataAttribute(t2, e2) {
    t2.removeAttribute(`data-bs-${F(e2)}`);
  }, getDataAttributes(t2) {
    if (!t2) return {};
    const e2 = {}, i2 = Object.keys(t2.dataset).filter((t3) => t3.startsWith("bs") && !t3.startsWith("bsConfig"));
    for (const n2 of i2) {
      let i3 = n2.replace(/^bs/, "");
      i3 = i3.charAt(0).toLowerCase() + i3.slice(1), e2[i3] = M(t2.dataset[n2]);
    }
    return e2;
  }, getDataAttribute: (t2, e2) => M(t2.getAttribute(`data-bs-${F(e2)}`)) };
  class W {
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
    _getConfig(t2) {
      return t2 = this._mergeConfigObj(t2), t2 = this._configAfterMerge(t2), this._typeCheckConfig(t2), t2;
    }
    _configAfterMerge(t2) {
      return t2;
    }
    _mergeConfigObj(t2, e2) {
      const i2 = r(e2) ? H.getDataAttribute(e2, "config") : {};
      return { ...this.constructor.Default, ..."object" == typeof i2 ? i2 : {}, ...r(e2) ? H.getDataAttributes(e2) : {}, ..."object" == typeof t2 ? t2 : {} };
    }
    _typeCheckConfig(t2, e2 = this.constructor.DefaultType) {
      for (const [i2, n2] of Object.entries(e2)) {
        const e3 = t2[i2], o2 = r(e3) ? "element" : s(e3);
        if (!new RegExp(n2).test(o2)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i2}" provided type "${o2}" but expected type "${n2}".`);
      }
    }
  }
  class B extends W {
    constructor(t2, i2) {
      super(), (t2 = a(t2)) && (this._element = t2, this._config = this._getConfig(i2), e.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      e.remove(this._element, this.constructor.DATA_KEY), P.off(this._element, this.constructor.EVENT_KEY);
      for (const t2 of Object.getOwnPropertyNames(this)) this[t2] = null;
    }
    _queueCallback(t2, e2, i2 = true) {
      b(t2, e2, i2);
    }
    _getConfig(t2) {
      return t2 = this._mergeConfigObj(t2, this._element), t2 = this._configAfterMerge(t2), this._typeCheckConfig(t2), t2;
    }
    static getInstance(t2) {
      return e.get(a(t2), this.DATA_KEY);
    }
    static getOrCreateInstance(t2, e2 = {}) {
      return this.getInstance(t2) || new this(t2, "object" == typeof e2 ? e2 : null);
    }
    static get VERSION() {
      return "5.3.8";
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(t2) {
      return `${t2}${this.EVENT_KEY}`;
    }
  }
  const z = (t2) => {
    let e2 = t2.getAttribute("data-bs-target");
    if (!e2 || "#" === e2) {
      let i2 = t2.getAttribute("href");
      if (!i2 || !i2.includes("#") && !i2.startsWith(".")) return null;
      i2.includes("#") && !i2.startsWith("#") && (i2 = `#${i2.split("#")[1]}`), e2 = i2 && "#" !== i2 ? i2.trim() : null;
    }
    return e2 ? e2.split(",").map((t3) => n(t3)).join(",") : null;
  }, R = { find: (t2, e2 = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e2, t2)), findOne: (t2, e2 = document.documentElement) => Element.prototype.querySelector.call(e2, t2), children: (t2, e2) => [].concat(...t2.children).filter((t3) => t3.matches(e2)), parents(t2, e2) {
    const i2 = [];
    let n2 = t2.parentNode.closest(e2);
    for (; n2; ) i2.push(n2), n2 = n2.parentNode.closest(e2);
    return i2;
  }, prev(t2, e2) {
    let i2 = t2.previousElementSibling;
    for (; i2; ) {
      if (i2.matches(e2)) return [i2];
      i2 = i2.previousElementSibling;
    }
    return [];
  }, next(t2, e2) {
    let i2 = t2.nextElementSibling;
    for (; i2; ) {
      if (i2.matches(e2)) return [i2];
      i2 = i2.nextElementSibling;
    }
    return [];
  }, focusableChildren(t2) {
    const e2 = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t3) => `${t3}:not([tabindex^="-"])`).join(",");
    return this.find(e2, t2).filter((t3) => !c(t3) && l(t3));
  }, getSelectorFromElement(t2) {
    const e2 = z(t2);
    return e2 && R.findOne(e2) ? e2 : null;
  }, getElementFromSelector(t2) {
    const e2 = z(t2);
    return e2 ? R.findOne(e2) : null;
  }, getMultipleElementsFromSelector(t2) {
    const e2 = z(t2);
    return e2 ? R.find(e2) : [];
  } }, q = (t2, e2 = "hide") => {
    const i2 = `click.dismiss${t2.EVENT_KEY}`, n2 = t2.NAME;
    P.on(document, i2, `[data-bs-dismiss="${n2}"]`, function(i3) {
      if (["A", "AREA"].includes(this.tagName) && i3.preventDefault(), c(this)) return;
      const s2 = R.getElementFromSelector(this) || this.closest(`.${n2}`);
      t2.getOrCreateInstance(s2)[e2]();
    });
  }, V = ".bs.alert", K = `close${V}`, Q = `closed${V}`;
  class X extends B {
    static get NAME() {
      return "alert";
    }
    close() {
      if (P.trigger(this._element, K).defaultPrevented) return;
      this._element.classList.remove("show");
      const t2 = this._element.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(), this._element, t2);
    }
    _destroyElement() {
      this._element.remove(), P.trigger(this._element, Q), this.dispose();
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = X.getOrCreateInstance(this);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2) throw new TypeError(`No method named "${t2}"`);
          e2[t2](this);
        }
      });
    }
  }
  q(X, "close"), g(X);
  const Y = '[data-bs-toggle="button"]';
  class U extends B {
    static get NAME() {
      return "button";
    }
    toggle() {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = U.getOrCreateInstance(this);
        "toggle" === t2 && e2[t2]();
      });
    }
  }
  P.on(document, "click.bs.button.data-api", Y, (t2) => {
    t2.preventDefault();
    const e2 = t2.target.closest(Y);
    U.getOrCreateInstance(e2).toggle();
  }), g(U);
  const G = ".bs.swipe", J = `touchstart${G}`, Z = `touchmove${G}`, tt = `touchend${G}`, et = `pointerdown${G}`, it = `pointerup${G}`, nt = { endCallback: null, leftCallback: null, rightCallback: null }, st = { endCallback: "(function|null)", leftCallback: "(function|null)", rightCallback: "(function|null)" };
  class ot extends W {
    constructor(t2, e2) {
      super(), this._element = t2, t2 && ot.isSupported() && (this._config = this._getConfig(e2), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents());
    }
    static get Default() {
      return nt;
    }
    static get DefaultType() {
      return st;
    }
    static get NAME() {
      return "swipe";
    }
    dispose() {
      P.off(this._element, G);
    }
    _start(t2) {
      this._supportPointerEvents ? this._eventIsPointerPenTouch(t2) && (this._deltaX = t2.clientX) : this._deltaX = t2.touches[0].clientX;
    }
    _end(t2) {
      this._eventIsPointerPenTouch(t2) && (this._deltaX = t2.clientX - this._deltaX), this._handleSwipe(), _(this._config.endCallback);
    }
    _move(t2) {
      this._deltaX = t2.touches && t2.touches.length > 1 ? 0 : t2.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      const t2 = Math.abs(this._deltaX);
      if (t2 <= 40) return;
      const e2 = t2 / this._deltaX;
      this._deltaX = 0, e2 && _(e2 > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
      this._supportPointerEvents ? (P.on(this._element, et, (t2) => this._start(t2)), P.on(this._element, it, (t2) => this._end(t2)), this._element.classList.add("pointer-event")) : (P.on(this._element, J, (t2) => this._start(t2)), P.on(this._element, Z, (t2) => this._move(t2)), P.on(this._element, tt, (t2) => this._end(t2)));
    }
    _eventIsPointerPenTouch(t2) {
      return this._supportPointerEvents && ("pen" === t2.pointerType || "touch" === t2.pointerType);
    }
    static isSupported() {
      return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    }
  }
  const rt = ".bs.carousel", at = ".data-api", lt = "ArrowLeft", ct = "ArrowRight", ht = "next", dt = "prev", ut = "left", ft = "right", pt = `slide${rt}`, mt = `slid${rt}`, gt = `keydown${rt}`, _t = `mouseenter${rt}`, bt = `mouseleave${rt}`, vt = `dragstart${rt}`, yt = `load${rt}${at}`, wt = `click${rt}${at}`, At = "carousel", Et = "active", Tt = ".active", Ct = ".carousel-item", Ot = Tt + Ct, xt = { [lt]: ft, [ct]: ut }, kt = { interval: 5e3, keyboard: true, pause: "hover", ride: false, touch: true, wrap: true }, Lt = { interval: "(number|boolean)", keyboard: "boolean", pause: "(string|boolean)", ride: "(boolean|string)", touch: "boolean", wrap: "boolean" };
  class St extends B {
    constructor(t2, e2) {
      super(t2, e2), this._interval = null, this._activeElement = null, this._isSliding = false, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = R.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === At && this.cycle();
    }
    static get Default() {
      return kt;
    }
    static get DefaultType() {
      return Lt;
    }
    static get NAME() {
      return "carousel";
    }
    next() {
      this._slide(ht);
    }
    nextWhenVisible() {
      !document.hidden && l(this._element) && this.next();
    }
    prev() {
      this._slide(dt);
    }
    pause() {
      this._isSliding && o(this._element), this._clearInterval();
    }
    cycle() {
      this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
    }
    _maybeEnableCycle() {
      this._config.ride && (this._isSliding ? P.one(this._element, mt, () => this.cycle()) : this.cycle());
    }
    to(t2) {
      const e2 = this._getItems();
      if (t2 > e2.length - 1 || t2 < 0) return;
      if (this._isSliding) return void P.one(this._element, mt, () => this.to(t2));
      const i2 = this._getItemIndex(this._getActive());
      if (i2 === t2) return;
      const n2 = t2 > i2 ? ht : dt;
      this._slide(n2, e2[t2]);
    }
    dispose() {
      this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
    }
    _configAfterMerge(t2) {
      return t2.defaultInterval = t2.interval, t2;
    }
    _addEventListeners() {
      this._config.keyboard && P.on(this._element, gt, (t2) => this._keydown(t2)), "hover" === this._config.pause && (P.on(this._element, _t, () => this.pause()), P.on(this._element, bt, () => this._maybeEnableCycle())), this._config.touch && ot.isSupported() && this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      for (const t3 of R.find(".carousel-item img", this._element)) P.on(t3, vt, (t4) => t4.preventDefault());
      const t2 = { leftCallback: () => this._slide(this._directionToOrder(ut)), rightCallback: () => this._slide(this._directionToOrder(ft)), endCallback: () => {
        "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval));
      } };
      this._swipeHelper = new ot(this._element, t2);
    }
    _keydown(t2) {
      if (/input|textarea/i.test(t2.target.tagName)) return;
      const e2 = xt[t2.key];
      e2 && (t2.preventDefault(), this._slide(this._directionToOrder(e2)));
    }
    _getItemIndex(t2) {
      return this._getItems().indexOf(t2);
    }
    _setActiveIndicatorElement(t2) {
      if (!this._indicatorsElement) return;
      const e2 = R.findOne(Tt, this._indicatorsElement);
      e2.classList.remove(Et), e2.removeAttribute("aria-current");
      const i2 = R.findOne(`[data-bs-slide-to="${t2}"]`, this._indicatorsElement);
      i2 && (i2.classList.add(Et), i2.setAttribute("aria-current", "true"));
    }
    _updateInterval() {
      const t2 = this._activeElement || this._getActive();
      if (!t2) return;
      const e2 = Number.parseInt(t2.getAttribute("data-bs-interval"), 10);
      this._config.interval = e2 || this._config.defaultInterval;
    }
    _slide(t2, e2 = null) {
      if (this._isSliding) return;
      const i2 = this._getActive(), n2 = t2 === ht, s2 = e2 || v(this._getItems(), i2, n2, this._config.wrap);
      if (s2 === i2) return;
      const o2 = this._getItemIndex(s2), r2 = (e3) => P.trigger(this._element, e3, { relatedTarget: s2, direction: this._orderToDirection(t2), from: this._getItemIndex(i2), to: o2 });
      if (r2(pt).defaultPrevented) return;
      if (!i2 || !s2) return;
      const a2 = Boolean(this._interval);
      this.pause(), this._isSliding = true, this._setActiveIndicatorElement(o2), this._activeElement = s2;
      const l2 = n2 ? "carousel-item-start" : "carousel-item-end", c2 = n2 ? "carousel-item-next" : "carousel-item-prev";
      s2.classList.add(c2), u(s2), i2.classList.add(l2), s2.classList.add(l2), this._queueCallback(() => {
        s2.classList.remove(l2, c2), s2.classList.add(Et), i2.classList.remove(Et, c2, l2), this._isSliding = false, r2(mt);
      }, i2, this._isAnimated()), a2 && this.cycle();
    }
    _isAnimated() {
      return this._element.classList.contains("slide");
    }
    _getActive() {
      return R.findOne(Ot, this._element);
    }
    _getItems() {
      return R.find(Ct, this._element);
    }
    _clearInterval() {
      this._interval && (clearInterval(this._interval), this._interval = null);
    }
    _directionToOrder(t2) {
      return m() ? t2 === ut ? dt : ht : t2 === ut ? ht : dt;
    }
    _orderToDirection(t2) {
      return m() ? t2 === dt ? ut : ft : t2 === dt ? ft : ut;
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = St.getOrCreateInstance(this, t2);
        if ("number" != typeof t2) {
          if ("string" == typeof t2) {
            if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2) throw new TypeError(`No method named "${t2}"`);
            e2[t2]();
          }
        } else e2.to(t2);
      });
    }
  }
  P.on(document, wt, "[data-bs-slide], [data-bs-slide-to]", function(t2) {
    const e2 = R.getElementFromSelector(this);
    if (!e2 || !e2.classList.contains(At)) return;
    t2.preventDefault();
    const i2 = St.getOrCreateInstance(e2), n2 = this.getAttribute("data-bs-slide-to");
    return n2 ? (i2.to(n2), void i2._maybeEnableCycle()) : "next" === H.getDataAttribute(this, "slide") ? (i2.next(), void i2._maybeEnableCycle()) : (i2.prev(), void i2._maybeEnableCycle());
  }), P.on(window, yt, () => {
    const t2 = R.find('[data-bs-ride="carousel"]');
    for (const e2 of t2) St.getOrCreateInstance(e2);
  }), g(St);
  const Dt = ".bs.collapse", $t = `show${Dt}`, It = `shown${Dt}`, Nt = `hide${Dt}`, Pt = `hidden${Dt}`, jt = `click${Dt}.data-api`, Mt = "show", Ft = "collapse", Ht = "collapsing", Wt = `:scope .${Ft} .${Ft}`, Bt = '[data-bs-toggle="collapse"]', zt = { parent: null, toggle: true }, Rt = { parent: "(null|element)", toggle: "boolean" };
  class qt extends B {
    constructor(t2, e2) {
      super(t2, e2), this._isTransitioning = false, this._triggerArray = [];
      const i2 = R.find(Bt);
      for (const t3 of i2) {
        const e3 = R.getSelectorFromElement(t3), i3 = R.find(e3).filter((t4) => t4 === this._element);
        null !== e3 && i3.length && this._triggerArray.push(t3);
      }
      this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
    }
    static get Default() {
      return zt;
    }
    static get DefaultType() {
      return Rt;
    }
    static get NAME() {
      return "collapse";
    }
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._isShown()) return;
      let t2 = [];
      if (this._config.parent && (t2 = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t3) => t3 !== this._element).map((t3) => qt.getOrCreateInstance(t3, { toggle: false }))), t2.length && t2[0]._isTransitioning) return;
      if (P.trigger(this._element, $t).defaultPrevented) return;
      for (const e3 of t2) e3.hide();
      const e2 = this._getDimension();
      this._element.classList.remove(Ft), this._element.classList.add(Ht), this._element.style[e2] = 0, this._addAriaAndCollapsedClass(this._triggerArray, true), this._isTransitioning = true;
      const i2 = `scroll${e2[0].toUpperCase() + e2.slice(1)}`;
      this._queueCallback(() => {
        this._isTransitioning = false, this._element.classList.remove(Ht), this._element.classList.add(Ft, Mt), this._element.style[e2] = "", P.trigger(this._element, It);
      }, this._element, true), this._element.style[e2] = `${this._element[i2]}px`;
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) return;
      if (P.trigger(this._element, Nt).defaultPrevented) return;
      const t2 = this._getDimension();
      this._element.style[t2] = `${this._element.getBoundingClientRect()[t2]}px`, u(this._element), this._element.classList.add(Ht), this._element.classList.remove(Ft, Mt);
      for (const t3 of this._triggerArray) {
        const e2 = R.getElementFromSelector(t3);
        e2 && !this._isShown(e2) && this._addAriaAndCollapsedClass([t3], false);
      }
      this._isTransitioning = true, this._element.style[t2] = "", this._queueCallback(() => {
        this._isTransitioning = false, this._element.classList.remove(Ht), this._element.classList.add(Ft), P.trigger(this._element, Pt);
      }, this._element, true);
    }
    _isShown(t2 = this._element) {
      return t2.classList.contains(Mt);
    }
    _configAfterMerge(t2) {
      return t2.toggle = Boolean(t2.toggle), t2.parent = a(t2.parent), t2;
    }
    _getDimension() {
      return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
    }
    _initializeChildren() {
      if (!this._config.parent) return;
      const t2 = this._getFirstLevelChildren(Bt);
      for (const e2 of t2) {
        const t3 = R.getElementFromSelector(e2);
        t3 && this._addAriaAndCollapsedClass([e2], this._isShown(t3));
      }
    }
    _getFirstLevelChildren(t2) {
      const e2 = R.find(Wt, this._config.parent);
      return R.find(t2, this._config.parent).filter((t3) => !e2.includes(t3));
    }
    _addAriaAndCollapsedClass(t2, e2) {
      if (t2.length) for (const i2 of t2) i2.classList.toggle("collapsed", !e2), i2.setAttribute("aria-expanded", e2);
    }
    static jQueryInterface(t2) {
      const e2 = {};
      return "string" == typeof t2 && /show|hide/.test(t2) && (e2.toggle = false), this.each(function() {
        const i2 = qt.getOrCreateInstance(this, e2);
        if ("string" == typeof t2) {
          if (void 0 === i2[t2]) throw new TypeError(`No method named "${t2}"`);
          i2[t2]();
        }
      });
    }
  }
  P.on(document, jt, Bt, function(t2) {
    ("A" === t2.target.tagName || t2.delegateTarget && "A" === t2.delegateTarget.tagName) && t2.preventDefault();
    for (const t3 of R.getMultipleElementsFromSelector(this)) qt.getOrCreateInstance(t3, { toggle: false }).toggle();
  }), g(qt);
  var Vt = "top", Kt = "bottom", Qt = "right", Xt = "left", Yt = "auto", Ut = [Vt, Kt, Qt, Xt], Gt = "start", Jt = "end", Zt = "clippingParents", te = "viewport", ee = "popper", ie = "reference", ne = Ut.reduce(function(t2, e2) {
    return t2.concat([e2 + "-" + Gt, e2 + "-" + Jt]);
  }, []), se = [].concat(Ut, [Yt]).reduce(function(t2, e2) {
    return t2.concat([e2, e2 + "-" + Gt, e2 + "-" + Jt]);
  }, []), oe = "beforeRead", re = "read", ae = "afterRead", le = "beforeMain", ce = "main", he = "afterMain", de = "beforeWrite", ue = "write", fe = "afterWrite", pe = [oe, re, ae, le, ce, he, de, ue, fe];
  function me(t2) {
    return t2 ? (t2.nodeName || "").toLowerCase() : null;
  }
  function ge(t2) {
    if (null == t2) return window;
    if ("[object Window]" !== t2.toString()) {
      var e2 = t2.ownerDocument;
      return e2 && e2.defaultView || window;
    }
    return t2;
  }
  function _e(t2) {
    return t2 instanceof ge(t2).Element || t2 instanceof Element;
  }
  function be(t2) {
    return t2 instanceof ge(t2).HTMLElement || t2 instanceof HTMLElement;
  }
  function ve(t2) {
    return "undefined" != typeof ShadowRoot && (t2 instanceof ge(t2).ShadowRoot || t2 instanceof ShadowRoot);
  }
  const ye = { name: "applyStyles", enabled: true, phase: "write", fn: function(t2) {
    var e2 = t2.state;
    Object.keys(e2.elements).forEach(function(t3) {
      var i2 = e2.styles[t3] || {}, n2 = e2.attributes[t3] || {}, s2 = e2.elements[t3];
      be(s2) && me(s2) && (Object.assign(s2.style, i2), Object.keys(n2).forEach(function(t4) {
        var e3 = n2[t4];
        false === e3 ? s2.removeAttribute(t4) : s2.setAttribute(t4, true === e3 ? "" : e3);
      }));
    });
  }, effect: function(t2) {
    var e2 = t2.state, i2 = { popper: { position: e2.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
    return Object.assign(e2.elements.popper.style, i2.popper), e2.styles = i2, e2.elements.arrow && Object.assign(e2.elements.arrow.style, i2.arrow), function() {
      Object.keys(e2.elements).forEach(function(t3) {
        var n2 = e2.elements[t3], s2 = e2.attributes[t3] || {}, o2 = Object.keys(e2.styles.hasOwnProperty(t3) ? e2.styles[t3] : i2[t3]).reduce(function(t4, e3) {
          return t4[e3] = "", t4;
        }, {});
        be(n2) && me(n2) && (Object.assign(n2.style, o2), Object.keys(s2).forEach(function(t4) {
          n2.removeAttribute(t4);
        }));
      });
    };
  }, requires: ["computeStyles"] };
  function we(t2) {
    return t2.split("-")[0];
  }
  var Ae = Math.max, Ee = Math.min, Te = Math.round;
  function Ce() {
    var t2 = navigator.userAgentData;
    return null != t2 && t2.brands && Array.isArray(t2.brands) ? t2.brands.map(function(t3) {
      return t3.brand + "/" + t3.version;
    }).join(" ") : navigator.userAgent;
  }
  function Oe() {
    return !/^((?!chrome|android).)*safari/i.test(Ce());
  }
  function xe(t2, e2, i2) {
    void 0 === e2 && (e2 = false), void 0 === i2 && (i2 = false);
    var n2 = t2.getBoundingClientRect(), s2 = 1, o2 = 1;
    e2 && be(t2) && (s2 = t2.offsetWidth > 0 && Te(n2.width) / t2.offsetWidth || 1, o2 = t2.offsetHeight > 0 && Te(n2.height) / t2.offsetHeight || 1);
    var r2 = (_e(t2) ? ge(t2) : window).visualViewport, a2 = !Oe() && i2, l2 = (n2.left + (a2 && r2 ? r2.offsetLeft : 0)) / s2, c2 = (n2.top + (a2 && r2 ? r2.offsetTop : 0)) / o2, h2 = n2.width / s2, d2 = n2.height / o2;
    return { width: h2, height: d2, top: c2, right: l2 + h2, bottom: c2 + d2, left: l2, x: l2, y: c2 };
  }
  function ke(t2) {
    var e2 = xe(t2), i2 = t2.offsetWidth, n2 = t2.offsetHeight;
    return Math.abs(e2.width - i2) <= 1 && (i2 = e2.width), Math.abs(e2.height - n2) <= 1 && (n2 = e2.height), { x: t2.offsetLeft, y: t2.offsetTop, width: i2, height: n2 };
  }
  function Le(t2, e2) {
    var i2 = e2.getRootNode && e2.getRootNode();
    if (t2.contains(e2)) return true;
    if (i2 && ve(i2)) {
      var n2 = e2;
      do {
        if (n2 && t2.isSameNode(n2)) return true;
        n2 = n2.parentNode || n2.host;
      } while (n2);
    }
    return false;
  }
  function Se(t2) {
    return ge(t2).getComputedStyle(t2);
  }
  function De(t2) {
    return ["table", "td", "th"].indexOf(me(t2)) >= 0;
  }
  function $e(t2) {
    return ((_e(t2) ? t2.ownerDocument : t2.document) || window.document).documentElement;
  }
  function Ie(t2) {
    return "html" === me(t2) ? t2 : t2.assignedSlot || t2.parentNode || (ve(t2) ? t2.host : null) || $e(t2);
  }
  function Ne(t2) {
    return be(t2) && "fixed" !== Se(t2).position ? t2.offsetParent : null;
  }
  function Pe(t2) {
    for (var e2 = ge(t2), i2 = Ne(t2); i2 && De(i2) && "static" === Se(i2).position; ) i2 = Ne(i2);
    return i2 && ("html" === me(i2) || "body" === me(i2) && "static" === Se(i2).position) ? e2 : i2 || (function(t3) {
      var e3 = /firefox/i.test(Ce());
      if (/Trident/i.test(Ce()) && be(t3) && "fixed" === Se(t3).position) return null;
      var i3 = Ie(t3);
      for (ve(i3) && (i3 = i3.host); be(i3) && ["html", "body"].indexOf(me(i3)) < 0; ) {
        var n2 = Se(i3);
        if ("none" !== n2.transform || "none" !== n2.perspective || "paint" === n2.contain || -1 !== ["transform", "perspective"].indexOf(n2.willChange) || e3 && "filter" === n2.willChange || e3 && n2.filter && "none" !== n2.filter) return i3;
        i3 = i3.parentNode;
      }
      return null;
    })(t2) || e2;
  }
  function je(t2) {
    return ["top", "bottom"].indexOf(t2) >= 0 ? "x" : "y";
  }
  function Me(t2, e2, i2) {
    return Ae(t2, Ee(e2, i2));
  }
  function Fe(t2) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t2);
  }
  function He(t2, e2) {
    return e2.reduce(function(e3, i2) {
      return e3[i2] = t2, e3;
    }, {});
  }
  const We = { name: "arrow", enabled: true, phase: "main", fn: function(t2) {
    var e2, i2 = t2.state, n2 = t2.name, s2 = t2.options, o2 = i2.elements.arrow, r2 = i2.modifiersData.popperOffsets, a2 = we(i2.placement), l2 = je(a2), c2 = [Xt, Qt].indexOf(a2) >= 0 ? "height" : "width";
    if (o2 && r2) {
      var h2 = (function(t3, e3) {
        return Fe("number" != typeof (t3 = "function" == typeof t3 ? t3(Object.assign({}, e3.rects, { placement: e3.placement })) : t3) ? t3 : He(t3, Ut));
      })(s2.padding, i2), d2 = ke(o2), u2 = "y" === l2 ? Vt : Xt, f2 = "y" === l2 ? Kt : Qt, p2 = i2.rects.reference[c2] + i2.rects.reference[l2] - r2[l2] - i2.rects.popper[c2], m2 = r2[l2] - i2.rects.reference[l2], g2 = Pe(o2), _2 = g2 ? "y" === l2 ? g2.clientHeight || 0 : g2.clientWidth || 0 : 0, b2 = p2 / 2 - m2 / 2, v2 = h2[u2], y2 = _2 - d2[c2] - h2[f2], w2 = _2 / 2 - d2[c2] / 2 + b2, A2 = Me(v2, w2, y2), E2 = l2;
      i2.modifiersData[n2] = ((e2 = {})[E2] = A2, e2.centerOffset = A2 - w2, e2);
    }
  }, effect: function(t2) {
    var e2 = t2.state, i2 = t2.options.element, n2 = void 0 === i2 ? "[data-popper-arrow]" : i2;
    null != n2 && ("string" != typeof n2 || (n2 = e2.elements.popper.querySelector(n2))) && Le(e2.elements.popper, n2) && (e2.elements.arrow = n2);
  }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
  function Be(t2) {
    return t2.split("-")[1];
  }
  var ze = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function Re(t2) {
    var e2, i2 = t2.popper, n2 = t2.popperRect, s2 = t2.placement, o2 = t2.variation, r2 = t2.offsets, a2 = t2.position, l2 = t2.gpuAcceleration, c2 = t2.adaptive, h2 = t2.roundOffsets, d2 = t2.isFixed, u2 = r2.x, f2 = void 0 === u2 ? 0 : u2, p2 = r2.y, m2 = void 0 === p2 ? 0 : p2, g2 = "function" == typeof h2 ? h2({ x: f2, y: m2 }) : { x: f2, y: m2 };
    f2 = g2.x, m2 = g2.y;
    var _2 = r2.hasOwnProperty("x"), b2 = r2.hasOwnProperty("y"), v2 = Xt, y2 = Vt, w2 = window;
    if (c2) {
      var A2 = Pe(i2), E2 = "clientHeight", T2 = "clientWidth";
      A2 === ge(i2) && "static" !== Se(A2 = $e(i2)).position && "absolute" === a2 && (E2 = "scrollHeight", T2 = "scrollWidth"), (s2 === Vt || (s2 === Xt || s2 === Qt) && o2 === Jt) && (y2 = Kt, m2 -= (d2 && A2 === w2 && w2.visualViewport ? w2.visualViewport.height : A2[E2]) - n2.height, m2 *= l2 ? 1 : -1), s2 !== Xt && (s2 !== Vt && s2 !== Kt || o2 !== Jt) || (v2 = Qt, f2 -= (d2 && A2 === w2 && w2.visualViewport ? w2.visualViewport.width : A2[T2]) - n2.width, f2 *= l2 ? 1 : -1);
    }
    var C2, O2 = Object.assign({ position: a2 }, c2 && ze), x2 = true === h2 ? (function(t3, e3) {
      var i3 = t3.x, n3 = t3.y, s3 = e3.devicePixelRatio || 1;
      return { x: Te(i3 * s3) / s3 || 0, y: Te(n3 * s3) / s3 || 0 };
    })({ x: f2, y: m2 }, ge(i2)) : { x: f2, y: m2 };
    return f2 = x2.x, m2 = x2.y, l2 ? Object.assign({}, O2, ((C2 = {})[y2] = b2 ? "0" : "", C2[v2] = _2 ? "0" : "", C2.transform = (w2.devicePixelRatio || 1) <= 1 ? "translate(" + f2 + "px, " + m2 + "px)" : "translate3d(" + f2 + "px, " + m2 + "px, 0)", C2)) : Object.assign({}, O2, ((e2 = {})[y2] = b2 ? m2 + "px" : "", e2[v2] = _2 ? f2 + "px" : "", e2.transform = "", e2));
  }
  const qe = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: function(t2) {
    var e2 = t2.state, i2 = t2.options, n2 = i2.gpuAcceleration, s2 = void 0 === n2 || n2, o2 = i2.adaptive, r2 = void 0 === o2 || o2, a2 = i2.roundOffsets, l2 = void 0 === a2 || a2, c2 = { placement: we(e2.placement), variation: Be(e2.placement), popper: e2.elements.popper, popperRect: e2.rects.popper, gpuAcceleration: s2, isFixed: "fixed" === e2.options.strategy };
    null != e2.modifiersData.popperOffsets && (e2.styles.popper = Object.assign({}, e2.styles.popper, Re(Object.assign({}, c2, { offsets: e2.modifiersData.popperOffsets, position: e2.options.strategy, adaptive: r2, roundOffsets: l2 })))), null != e2.modifiersData.arrow && (e2.styles.arrow = Object.assign({}, e2.styles.arrow, Re(Object.assign({}, c2, { offsets: e2.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: l2 })))), e2.attributes.popper = Object.assign({}, e2.attributes.popper, { "data-popper-placement": e2.placement });
  }, data: {} };
  var Ve = { passive: true };
  const Ke = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
  }, effect: function(t2) {
    var e2 = t2.state, i2 = t2.instance, n2 = t2.options, s2 = n2.scroll, o2 = void 0 === s2 || s2, r2 = n2.resize, a2 = void 0 === r2 || r2, l2 = ge(e2.elements.popper), c2 = [].concat(e2.scrollParents.reference, e2.scrollParents.popper);
    return o2 && c2.forEach(function(t3) {
      t3.addEventListener("scroll", i2.update, Ve);
    }), a2 && l2.addEventListener("resize", i2.update, Ve), function() {
      o2 && c2.forEach(function(t3) {
        t3.removeEventListener("scroll", i2.update, Ve);
      }), a2 && l2.removeEventListener("resize", i2.update, Ve);
    };
  }, data: {} };
  var Qe = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function Xe(t2) {
    return t2.replace(/left|right|bottom|top/g, function(t3) {
      return Qe[t3];
    });
  }
  var Ye = { start: "end", end: "start" };
  function Ue(t2) {
    return t2.replace(/start|end/g, function(t3) {
      return Ye[t3];
    });
  }
  function Ge(t2) {
    var e2 = ge(t2);
    return { scrollLeft: e2.pageXOffset, scrollTop: e2.pageYOffset };
  }
  function Je(t2) {
    return xe($e(t2)).left + Ge(t2).scrollLeft;
  }
  function Ze(t2) {
    var e2 = Se(t2), i2 = e2.overflow, n2 = e2.overflowX, s2 = e2.overflowY;
    return /auto|scroll|overlay|hidden/.test(i2 + s2 + n2);
  }
  function ti(t2) {
    return ["html", "body", "#document"].indexOf(me(t2)) >= 0 ? t2.ownerDocument.body : be(t2) && Ze(t2) ? t2 : ti(Ie(t2));
  }
  function ei(t2, e2) {
    var i2;
    void 0 === e2 && (e2 = []);
    var n2 = ti(t2), s2 = n2 === (null == (i2 = t2.ownerDocument) ? void 0 : i2.body), o2 = ge(n2), r2 = s2 ? [o2].concat(o2.visualViewport || [], Ze(n2) ? n2 : []) : n2, a2 = e2.concat(r2);
    return s2 ? a2 : a2.concat(ei(Ie(r2)));
  }
  function ii(t2) {
    return Object.assign({}, t2, { left: t2.x, top: t2.y, right: t2.x + t2.width, bottom: t2.y + t2.height });
  }
  function ni(t2, e2, i2) {
    return e2 === te ? ii((function(t3, e3) {
      var i3 = ge(t3), n2 = $e(t3), s2 = i3.visualViewport, o2 = n2.clientWidth, r2 = n2.clientHeight, a2 = 0, l2 = 0;
      if (s2) {
        o2 = s2.width, r2 = s2.height;
        var c2 = Oe();
        (c2 || !c2 && "fixed" === e3) && (a2 = s2.offsetLeft, l2 = s2.offsetTop);
      }
      return { width: o2, height: r2, x: a2 + Je(t3), y: l2 };
    })(t2, i2)) : _e(e2) ? (function(t3, e3) {
      var i3 = xe(t3, false, "fixed" === e3);
      return i3.top = i3.top + t3.clientTop, i3.left = i3.left + t3.clientLeft, i3.bottom = i3.top + t3.clientHeight, i3.right = i3.left + t3.clientWidth, i3.width = t3.clientWidth, i3.height = t3.clientHeight, i3.x = i3.left, i3.y = i3.top, i3;
    })(e2, i2) : ii((function(t3) {
      var e3, i3 = $e(t3), n2 = Ge(t3), s2 = null == (e3 = t3.ownerDocument) ? void 0 : e3.body, o2 = Ae(i3.scrollWidth, i3.clientWidth, s2 ? s2.scrollWidth : 0, s2 ? s2.clientWidth : 0), r2 = Ae(i3.scrollHeight, i3.clientHeight, s2 ? s2.scrollHeight : 0, s2 ? s2.clientHeight : 0), a2 = -n2.scrollLeft + Je(t3), l2 = -n2.scrollTop;
      return "rtl" === Se(s2 || i3).direction && (a2 += Ae(i3.clientWidth, s2 ? s2.clientWidth : 0) - o2), { width: o2, height: r2, x: a2, y: l2 };
    })($e(t2)));
  }
  function si(t2) {
    var e2, i2 = t2.reference, n2 = t2.element, s2 = t2.placement, o2 = s2 ? we(s2) : null, r2 = s2 ? Be(s2) : null, a2 = i2.x + i2.width / 2 - n2.width / 2, l2 = i2.y + i2.height / 2 - n2.height / 2;
    switch (o2) {
      case Vt:
        e2 = { x: a2, y: i2.y - n2.height };
        break;
      case Kt:
        e2 = { x: a2, y: i2.y + i2.height };
        break;
      case Qt:
        e2 = { x: i2.x + i2.width, y: l2 };
        break;
      case Xt:
        e2 = { x: i2.x - n2.width, y: l2 };
        break;
      default:
        e2 = { x: i2.x, y: i2.y };
    }
    var c2 = o2 ? je(o2) : null;
    if (null != c2) {
      var h2 = "y" === c2 ? "height" : "width";
      switch (r2) {
        case Gt:
          e2[c2] = e2[c2] - (i2[h2] / 2 - n2[h2] / 2);
          break;
        case Jt:
          e2[c2] = e2[c2] + (i2[h2] / 2 - n2[h2] / 2);
      }
    }
    return e2;
  }
  function oi(t2, e2) {
    void 0 === e2 && (e2 = {});
    var i2 = e2, n2 = i2.placement, s2 = void 0 === n2 ? t2.placement : n2, o2 = i2.strategy, r2 = void 0 === o2 ? t2.strategy : o2, a2 = i2.boundary, l2 = void 0 === a2 ? Zt : a2, c2 = i2.rootBoundary, h2 = void 0 === c2 ? te : c2, d2 = i2.elementContext, u2 = void 0 === d2 ? ee : d2, f2 = i2.altBoundary, p2 = void 0 !== f2 && f2, m2 = i2.padding, g2 = void 0 === m2 ? 0 : m2, _2 = Fe("number" != typeof g2 ? g2 : He(g2, Ut)), b2 = u2 === ee ? ie : ee, v2 = t2.rects.popper, y2 = t2.elements[p2 ? b2 : u2], w2 = (function(t3, e3, i3, n3) {
      var s3 = "clippingParents" === e3 ? (function(t4) {
        var e4 = ei(Ie(t4)), i4 = ["absolute", "fixed"].indexOf(Se(t4).position) >= 0 && be(t4) ? Pe(t4) : t4;
        return _e(i4) ? e4.filter(function(t5) {
          return _e(t5) && Le(t5, i4) && "body" !== me(t5);
        }) : [];
      })(t3) : [].concat(e3), o3 = [].concat(s3, [i3]), r3 = o3[0], a3 = o3.reduce(function(e4, i4) {
        var s4 = ni(t3, i4, n3);
        return e4.top = Ae(s4.top, e4.top), e4.right = Ee(s4.right, e4.right), e4.bottom = Ee(s4.bottom, e4.bottom), e4.left = Ae(s4.left, e4.left), e4;
      }, ni(t3, r3, n3));
      return a3.width = a3.right - a3.left, a3.height = a3.bottom - a3.top, a3.x = a3.left, a3.y = a3.top, a3;
    })(_e(y2) ? y2 : y2.contextElement || $e(t2.elements.popper), l2, h2, r2), A2 = xe(t2.elements.reference), E2 = si({ reference: A2, element: v2, placement: s2 }), T2 = ii(Object.assign({}, v2, E2)), C2 = u2 === ee ? T2 : A2, O2 = { top: w2.top - C2.top + _2.top, bottom: C2.bottom - w2.bottom + _2.bottom, left: w2.left - C2.left + _2.left, right: C2.right - w2.right + _2.right }, x2 = t2.modifiersData.offset;
    if (u2 === ee && x2) {
      var k2 = x2[s2];
      Object.keys(O2).forEach(function(t3) {
        var e3 = [Qt, Kt].indexOf(t3) >= 0 ? 1 : -1, i3 = [Vt, Kt].indexOf(t3) >= 0 ? "y" : "x";
        O2[t3] += k2[i3] * e3;
      });
    }
    return O2;
  }
  function ri(t2, e2) {
    void 0 === e2 && (e2 = {});
    var i2 = e2, n2 = i2.placement, s2 = i2.boundary, o2 = i2.rootBoundary, r2 = i2.padding, a2 = i2.flipVariations, l2 = i2.allowedAutoPlacements, c2 = void 0 === l2 ? se : l2, h2 = Be(n2), d2 = h2 ? a2 ? ne : ne.filter(function(t3) {
      return Be(t3) === h2;
    }) : Ut, u2 = d2.filter(function(t3) {
      return c2.indexOf(t3) >= 0;
    });
    0 === u2.length && (u2 = d2);
    var f2 = u2.reduce(function(e3, i3) {
      return e3[i3] = oi(t2, { placement: i3, boundary: s2, rootBoundary: o2, padding: r2 })[we(i3)], e3;
    }, {});
    return Object.keys(f2).sort(function(t3, e3) {
      return f2[t3] - f2[e3];
    });
  }
  const ai = { name: "flip", enabled: true, phase: "main", fn: function(t2) {
    var e2 = t2.state, i2 = t2.options, n2 = t2.name;
    if (!e2.modifiersData[n2]._skip) {
      for (var s2 = i2.mainAxis, o2 = void 0 === s2 || s2, r2 = i2.altAxis, a2 = void 0 === r2 || r2, l2 = i2.fallbackPlacements, c2 = i2.padding, h2 = i2.boundary, d2 = i2.rootBoundary, u2 = i2.altBoundary, f2 = i2.flipVariations, p2 = void 0 === f2 || f2, m2 = i2.allowedAutoPlacements, g2 = e2.options.placement, _2 = we(g2), b2 = l2 || (_2 !== g2 && p2 ? (function(t3) {
        if (we(t3) === Yt) return [];
        var e3 = Xe(t3);
        return [Ue(t3), e3, Ue(e3)];
      })(g2) : [Xe(g2)]), v2 = [g2].concat(b2).reduce(function(t3, i3) {
        return t3.concat(we(i3) === Yt ? ri(e2, { placement: i3, boundary: h2, rootBoundary: d2, padding: c2, flipVariations: p2, allowedAutoPlacements: m2 }) : i3);
      }, []), y2 = e2.rects.reference, w2 = e2.rects.popper, A2 = /* @__PURE__ */ new Map(), E2 = true, T2 = v2[0], C2 = 0; C2 < v2.length; C2++) {
        var O2 = v2[C2], x2 = we(O2), k2 = Be(O2) === Gt, L2 = [Vt, Kt].indexOf(x2) >= 0, S2 = L2 ? "width" : "height", D2 = oi(e2, { placement: O2, boundary: h2, rootBoundary: d2, altBoundary: u2, padding: c2 }), $2 = L2 ? k2 ? Qt : Xt : k2 ? Kt : Vt;
        y2[S2] > w2[S2] && ($2 = Xe($2));
        var I2 = Xe($2), N2 = [];
        if (o2 && N2.push(D2[x2] <= 0), a2 && N2.push(D2[$2] <= 0, D2[I2] <= 0), N2.every(function(t3) {
          return t3;
        })) {
          T2 = O2, E2 = false;
          break;
        }
        A2.set(O2, N2);
      }
      if (E2) for (var P2 = function(t3) {
        var e3 = v2.find(function(e4) {
          var i3 = A2.get(e4);
          if (i3) return i3.slice(0, t3).every(function(t4) {
            return t4;
          });
        });
        if (e3) return T2 = e3, "break";
      }, j2 = p2 ? 3 : 1; j2 > 0 && "break" !== P2(j2); j2--) ;
      e2.placement !== T2 && (e2.modifiersData[n2]._skip = true, e2.placement = T2, e2.reset = true);
    }
  }, requiresIfExists: ["offset"], data: { _skip: false } };
  function li(t2, e2, i2) {
    return void 0 === i2 && (i2 = { x: 0, y: 0 }), { top: t2.top - e2.height - i2.y, right: t2.right - e2.width + i2.x, bottom: t2.bottom - e2.height + i2.y, left: t2.left - e2.width - i2.x };
  }
  function ci(t2) {
    return [Vt, Qt, Kt, Xt].some(function(e2) {
      return t2[e2] >= 0;
    });
  }
  const hi = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: function(t2) {
    var e2 = t2.state, i2 = t2.name, n2 = e2.rects.reference, s2 = e2.rects.popper, o2 = e2.modifiersData.preventOverflow, r2 = oi(e2, { elementContext: "reference" }), a2 = oi(e2, { altBoundary: true }), l2 = li(r2, n2), c2 = li(a2, s2, o2), h2 = ci(l2), d2 = ci(c2);
    e2.modifiersData[i2] = { referenceClippingOffsets: l2, popperEscapeOffsets: c2, isReferenceHidden: h2, hasPopperEscaped: d2 }, e2.attributes.popper = Object.assign({}, e2.attributes.popper, { "data-popper-reference-hidden": h2, "data-popper-escaped": d2 });
  } }, di = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: function(t2) {
    var e2 = t2.state, i2 = t2.options, n2 = t2.name, s2 = i2.offset, o2 = void 0 === s2 ? [0, 0] : s2, r2 = se.reduce(function(t3, i3) {
      return t3[i3] = (function(t4, e3, i4) {
        var n3 = we(t4), s3 = [Xt, Vt].indexOf(n3) >= 0 ? -1 : 1, o3 = "function" == typeof i4 ? i4(Object.assign({}, e3, { placement: t4 })) : i4, r3 = o3[0], a3 = o3[1];
        return r3 = r3 || 0, a3 = (a3 || 0) * s3, [Xt, Qt].indexOf(n3) >= 0 ? { x: a3, y: r3 } : { x: r3, y: a3 };
      })(i3, e2.rects, o2), t3;
    }, {}), a2 = r2[e2.placement], l2 = a2.x, c2 = a2.y;
    null != e2.modifiersData.popperOffsets && (e2.modifiersData.popperOffsets.x += l2, e2.modifiersData.popperOffsets.y += c2), e2.modifiersData[n2] = r2;
  } }, ui = { name: "popperOffsets", enabled: true, phase: "read", fn: function(t2) {
    var e2 = t2.state, i2 = t2.name;
    e2.modifiersData[i2] = si({ reference: e2.rects.reference, element: e2.rects.popper, placement: e2.placement });
  }, data: {} }, fi = { name: "preventOverflow", enabled: true, phase: "main", fn: function(t2) {
    var e2 = t2.state, i2 = t2.options, n2 = t2.name, s2 = i2.mainAxis, o2 = void 0 === s2 || s2, r2 = i2.altAxis, a2 = void 0 !== r2 && r2, l2 = i2.boundary, c2 = i2.rootBoundary, h2 = i2.altBoundary, d2 = i2.padding, u2 = i2.tether, f2 = void 0 === u2 || u2, p2 = i2.tetherOffset, m2 = void 0 === p2 ? 0 : p2, g2 = oi(e2, { boundary: l2, rootBoundary: c2, padding: d2, altBoundary: h2 }), _2 = we(e2.placement), b2 = Be(e2.placement), v2 = !b2, y2 = je(_2), w2 = "x" === y2 ? "y" : "x", A2 = e2.modifiersData.popperOffsets, E2 = e2.rects.reference, T2 = e2.rects.popper, C2 = "function" == typeof m2 ? m2(Object.assign({}, e2.rects, { placement: e2.placement })) : m2, O2 = "number" == typeof C2 ? { mainAxis: C2, altAxis: C2 } : Object.assign({ mainAxis: 0, altAxis: 0 }, C2), x2 = e2.modifiersData.offset ? e2.modifiersData.offset[e2.placement] : null, k2 = { x: 0, y: 0 };
    if (A2) {
      if (o2) {
        var L2, S2 = "y" === y2 ? Vt : Xt, D2 = "y" === y2 ? Kt : Qt, $2 = "y" === y2 ? "height" : "width", I2 = A2[y2], N2 = I2 + g2[S2], P2 = I2 - g2[D2], j2 = f2 ? -T2[$2] / 2 : 0, M2 = b2 === Gt ? E2[$2] : T2[$2], F2 = b2 === Gt ? -T2[$2] : -E2[$2], H2 = e2.elements.arrow, W2 = f2 && H2 ? ke(H2) : { width: 0, height: 0 }, B2 = e2.modifiersData["arrow#persistent"] ? e2.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 }, z2 = B2[S2], R2 = B2[D2], q2 = Me(0, E2[$2], W2[$2]), V2 = v2 ? E2[$2] / 2 - j2 - q2 - z2 - O2.mainAxis : M2 - q2 - z2 - O2.mainAxis, K2 = v2 ? -E2[$2] / 2 + j2 + q2 + R2 + O2.mainAxis : F2 + q2 + R2 + O2.mainAxis, Q2 = e2.elements.arrow && Pe(e2.elements.arrow), X2 = Q2 ? "y" === y2 ? Q2.clientTop || 0 : Q2.clientLeft || 0 : 0, Y2 = null != (L2 = null == x2 ? void 0 : x2[y2]) ? L2 : 0, U2 = I2 + K2 - Y2, G2 = Me(f2 ? Ee(N2, I2 + V2 - Y2 - X2) : N2, I2, f2 ? Ae(P2, U2) : P2);
        A2[y2] = G2, k2[y2] = G2 - I2;
      }
      if (a2) {
        var J2, Z2 = "x" === y2 ? Vt : Xt, tt2 = "x" === y2 ? Kt : Qt, et2 = A2[w2], it2 = "y" === w2 ? "height" : "width", nt2 = et2 + g2[Z2], st2 = et2 - g2[tt2], ot2 = -1 !== [Vt, Xt].indexOf(_2), rt2 = null != (J2 = null == x2 ? void 0 : x2[w2]) ? J2 : 0, at2 = ot2 ? nt2 : et2 - E2[it2] - T2[it2] - rt2 + O2.altAxis, lt2 = ot2 ? et2 + E2[it2] + T2[it2] - rt2 - O2.altAxis : st2, ct2 = f2 && ot2 ? (function(t3, e3, i3) {
          var n3 = Me(t3, e3, i3);
          return n3 > i3 ? i3 : n3;
        })(at2, et2, lt2) : Me(f2 ? at2 : nt2, et2, f2 ? lt2 : st2);
        A2[w2] = ct2, k2[w2] = ct2 - et2;
      }
      e2.modifiersData[n2] = k2;
    }
  }, requiresIfExists: ["offset"] };
  function pi(t2, e2, i2) {
    void 0 === i2 && (i2 = false);
    var n2, s2, o2 = be(e2), r2 = be(e2) && (function(t3) {
      var e3 = t3.getBoundingClientRect(), i3 = Te(e3.width) / t3.offsetWidth || 1, n3 = Te(e3.height) / t3.offsetHeight || 1;
      return 1 !== i3 || 1 !== n3;
    })(e2), a2 = $e(e2), l2 = xe(t2, r2, i2), c2 = { scrollLeft: 0, scrollTop: 0 }, h2 = { x: 0, y: 0 };
    return (o2 || !o2 && !i2) && (("body" !== me(e2) || Ze(a2)) && (c2 = (n2 = e2) !== ge(n2) && be(n2) ? { scrollLeft: (s2 = n2).scrollLeft, scrollTop: s2.scrollTop } : Ge(n2)), be(e2) ? ((h2 = xe(e2, true)).x += e2.clientLeft, h2.y += e2.clientTop) : a2 && (h2.x = Je(a2))), { x: l2.left + c2.scrollLeft - h2.x, y: l2.top + c2.scrollTop - h2.y, width: l2.width, height: l2.height };
  }
  function mi(t2) {
    var e2 = /* @__PURE__ */ new Map(), i2 = /* @__PURE__ */ new Set(), n2 = [];
    function s2(t3) {
      i2.add(t3.name), [].concat(t3.requires || [], t3.requiresIfExists || []).forEach(function(t4) {
        if (!i2.has(t4)) {
          var n3 = e2.get(t4);
          n3 && s2(n3);
        }
      }), n2.push(t3);
    }
    return t2.forEach(function(t3) {
      e2.set(t3.name, t3);
    }), t2.forEach(function(t3) {
      i2.has(t3.name) || s2(t3);
    }), n2;
  }
  var gi = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function _i() {
    for (var t2 = arguments.length, e2 = new Array(t2), i2 = 0; i2 < t2; i2++) e2[i2] = arguments[i2];
    return !e2.some(function(t3) {
      return !(t3 && "function" == typeof t3.getBoundingClientRect);
    });
  }
  function bi(t2) {
    void 0 === t2 && (t2 = {});
    var e2 = t2, i2 = e2.defaultModifiers, n2 = void 0 === i2 ? [] : i2, s2 = e2.defaultOptions, o2 = void 0 === s2 ? gi : s2;
    return function(t3, e3, i3) {
      void 0 === i3 && (i3 = o2);
      var s3, r2, a2 = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, gi, o2), modifiersData: {}, elements: { reference: t3, popper: e3 }, attributes: {}, styles: {} }, l2 = [], c2 = false, h2 = { state: a2, setOptions: function(i4) {
        var s4 = "function" == typeof i4 ? i4(a2.options) : i4;
        d2(), a2.options = Object.assign({}, o2, a2.options, s4), a2.scrollParents = { reference: _e(t3) ? ei(t3) : t3.contextElement ? ei(t3.contextElement) : [], popper: ei(e3) };
        var r3, c3, u2 = (function(t4) {
          var e4 = mi(t4);
          return pe.reduce(function(t5, i5) {
            return t5.concat(e4.filter(function(t6) {
              return t6.phase === i5;
            }));
          }, []);
        })((r3 = [].concat(n2, a2.options.modifiers), c3 = r3.reduce(function(t4, e4) {
          var i5 = t4[e4.name];
          return t4[e4.name] = i5 ? Object.assign({}, i5, e4, { options: Object.assign({}, i5.options, e4.options), data: Object.assign({}, i5.data, e4.data) }) : e4, t4;
        }, {}), Object.keys(c3).map(function(t4) {
          return c3[t4];
        })));
        return a2.orderedModifiers = u2.filter(function(t4) {
          return t4.enabled;
        }), a2.orderedModifiers.forEach(function(t4) {
          var e4 = t4.name, i5 = t4.options, n3 = void 0 === i5 ? {} : i5, s5 = t4.effect;
          if ("function" == typeof s5) {
            var o3 = s5({ state: a2, name: e4, instance: h2, options: n3 });
            l2.push(o3 || function() {
            });
          }
        }), h2.update();
      }, forceUpdate: function() {
        if (!c2) {
          var t4 = a2.elements, e4 = t4.reference, i4 = t4.popper;
          if (_i(e4, i4)) {
            a2.rects = { reference: pi(e4, Pe(i4), "fixed" === a2.options.strategy), popper: ke(i4) }, a2.reset = false, a2.placement = a2.options.placement, a2.orderedModifiers.forEach(function(t5) {
              return a2.modifiersData[t5.name] = Object.assign({}, t5.data);
            });
            for (var n3 = 0; n3 < a2.orderedModifiers.length; n3++) if (true !== a2.reset) {
              var s4 = a2.orderedModifiers[n3], o3 = s4.fn, r3 = s4.options, l3 = void 0 === r3 ? {} : r3, d3 = s4.name;
              "function" == typeof o3 && (a2 = o3({ state: a2, options: l3, name: d3, instance: h2 }) || a2);
            } else a2.reset = false, n3 = -1;
          }
        }
      }, update: (s3 = function() {
        return new Promise(function(t4) {
          h2.forceUpdate(), t4(a2);
        });
      }, function() {
        return r2 || (r2 = new Promise(function(t4) {
          Promise.resolve().then(function() {
            r2 = void 0, t4(s3());
          });
        })), r2;
      }), destroy: function() {
        d2(), c2 = true;
      } };
      if (!_i(t3, e3)) return h2;
      function d2() {
        l2.forEach(function(t4) {
          return t4();
        }), l2 = [];
      }
      return h2.setOptions(i3).then(function(t4) {
        !c2 && i3.onFirstUpdate && i3.onFirstUpdate(t4);
      }), h2;
    };
  }
  var vi = bi(), yi = bi({ defaultModifiers: [Ke, ui, qe, ye] }), wi = bi({ defaultModifiers: [Ke, ui, qe, ye, di, ai, fi, We, hi] });
  const Ai = Object.freeze(Object.defineProperty({ __proto__: null, afterMain: he, afterRead: ae, afterWrite: fe, applyStyles: ye, arrow: We, auto: Yt, basePlacements: Ut, beforeMain: le, beforeRead: oe, beforeWrite: de, bottom: Kt, clippingParents: Zt, computeStyles: qe, createPopper: wi, createPopperBase: vi, createPopperLite: yi, detectOverflow: oi, end: Jt, eventListeners: Ke, flip: ai, hide: hi, left: Xt, main: ce, modifierPhases: pe, offset: di, placements: se, popper: ee, popperGenerator: bi, popperOffsets: ui, preventOverflow: fi, read: re, reference: ie, right: Qt, start: Gt, top: Vt, variationPlacements: ne, viewport: te, write: ue }, Symbol.toStringTag, { value: "Module" })), Ei = "dropdown", Ti = ".bs.dropdown", Ci = ".data-api", Oi = "ArrowUp", xi = "ArrowDown", ki = `hide${Ti}`, Li = `hidden${Ti}`, Si = `show${Ti}`, Di = `shown${Ti}`, $i = `click${Ti}${Ci}`, Ii = `keydown${Ti}${Ci}`, Ni = `keyup${Ti}${Ci}`, Pi = "show", ji = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', Mi = `${ji}.${Pi}`, Fi = ".dropdown-menu", Hi = m() ? "top-end" : "top-start", Wi = m() ? "top-start" : "top-end", Bi = m() ? "bottom-end" : "bottom-start", zi = m() ? "bottom-start" : "bottom-end", Ri = m() ? "left-start" : "right-start", qi = m() ? "right-start" : "left-start", Vi = { autoClose: true, boundary: "clippingParents", display: "dynamic", offset: [0, 2], popperConfig: null, reference: "toggle" }, Ki = { autoClose: "(boolean|string)", boundary: "(string|element)", display: "string", offset: "(array|string|function)", popperConfig: "(null|object|function)", reference: "(string|element|object)" };
  class Qi extends B {
    constructor(t2, e2) {
      super(t2, e2), this._popper = null, this._parent = this._element.parentNode, this._menu = R.next(this._element, Fi)[0] || R.prev(this._element, Fi)[0] || R.findOne(Fi, this._parent), this._inNavbar = this._detectNavbar();
    }
    static get Default() {
      return Vi;
    }
    static get DefaultType() {
      return Ki;
    }
    static get NAME() {
      return Ei;
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (c(this._element) || this._isShown()) return;
      const t2 = { relatedTarget: this._element };
      if (!P.trigger(this._element, Si, t2).defaultPrevented) {
        if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) for (const t3 of [].concat(...document.body.children)) P.on(t3, "mouseover", d);
        this._element.focus(), this._element.setAttribute("aria-expanded", true), this._menu.classList.add(Pi), this._element.classList.add(Pi), P.trigger(this._element, Di, t2);
      }
    }
    hide() {
      if (c(this._element) || !this._isShown()) return;
      const t2 = { relatedTarget: this._element };
      this._completeHide(t2);
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
    }
    _completeHide(t2) {
      if (!P.trigger(this._element, ki, t2).defaultPrevented) {
        if ("ontouchstart" in document.documentElement) for (const t3 of [].concat(...document.body.children)) P.off(t3, "mouseover", d);
        this._popper && this._popper.destroy(), this._menu.classList.remove(Pi), this._element.classList.remove(Pi), this._element.setAttribute("aria-expanded", "false"), H.removeDataAttribute(this._menu, "popper"), P.trigger(this._element, Li, t2);
      }
    }
    _getConfig(t2) {
      if ("object" == typeof (t2 = super._getConfig(t2)).reference && !r(t2.reference) && "function" != typeof t2.reference.getBoundingClientRect) throw new TypeError(`${Ei.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      return t2;
    }
    _createPopper() {
      if (void 0 === Ai) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");
      let t2 = this._element;
      "parent" === this._config.reference ? t2 = this._parent : r(this._config.reference) ? t2 = a(this._config.reference) : "object" == typeof this._config.reference && (t2 = this._config.reference);
      const e2 = this._getPopperConfig();
      this._popper = wi(t2, this._menu, e2);
    }
    _isShown() {
      return this._menu.classList.contains(Pi);
    }
    _getPlacement() {
      const t2 = this._parent;
      if (t2.classList.contains("dropend")) return Ri;
      if (t2.classList.contains("dropstart")) return qi;
      if (t2.classList.contains("dropup-center")) return "top";
      if (t2.classList.contains("dropdown-center")) return "bottom";
      const e2 = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t2.classList.contains("dropup") ? e2 ? Wi : Hi : e2 ? zi : Bi;
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
    _getOffset() {
      const { offset: t2 } = this._config;
      return "string" == typeof t2 ? t2.split(",").map((t3) => Number.parseInt(t3, 10)) : "function" == typeof t2 ? (e2) => t2(e2, this._element) : t2;
    }
    _getPopperConfig() {
      const t2 = { placement: this._getPlacement(), modifiers: [{ name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "offset", options: { offset: this._getOffset() } }] };
      return (this._inNavbar || "static" === this._config.display) && (H.setDataAttribute(this._menu, "popper", "static"), t2.modifiers = [{ name: "applyStyles", enabled: false }]), { ...t2, ..._(this._config.popperConfig, [void 0, t2]) };
    }
    _selectMenuItem({ key: t2, target: e2 }) {
      const i2 = R.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t3) => l(t3));
      i2.length && v(i2, e2, t2 === xi, !i2.includes(e2)).focus();
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = Qi.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2]) throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      });
    }
    static clearMenus(t2) {
      if (2 === t2.button || "keyup" === t2.type && "Tab" !== t2.key) return;
      const e2 = R.find(Mi);
      for (const i2 of e2) {
        const e3 = Qi.getInstance(i2);
        if (!e3 || false === e3._config.autoClose) continue;
        const n2 = t2.composedPath(), s2 = n2.includes(e3._menu);
        if (n2.includes(e3._element) || "inside" === e3._config.autoClose && !s2 || "outside" === e3._config.autoClose && s2) continue;
        if (e3._menu.contains(t2.target) && ("keyup" === t2.type && "Tab" === t2.key || /input|select|option|textarea|form/i.test(t2.target.tagName))) continue;
        const o2 = { relatedTarget: e3._element };
        "click" === t2.type && (o2.clickEvent = t2), e3._completeHide(o2);
      }
    }
    static dataApiKeydownHandler(t2) {
      const e2 = /input|textarea/i.test(t2.target.tagName), i2 = "Escape" === t2.key, n2 = [Oi, xi].includes(t2.key);
      if (!n2 && !i2) return;
      if (e2 && !i2) return;
      t2.preventDefault();
      const s2 = this.matches(ji) ? this : R.prev(this, ji)[0] || R.next(this, ji)[0] || R.findOne(ji, t2.delegateTarget.parentNode), o2 = Qi.getOrCreateInstance(s2);
      if (n2) return t2.stopPropagation(), o2.show(), void o2._selectMenuItem(t2);
      o2._isShown() && (t2.stopPropagation(), o2.hide(), s2.focus());
    }
  }
  P.on(document, Ii, ji, Qi.dataApiKeydownHandler), P.on(document, Ii, Fi, Qi.dataApiKeydownHandler), P.on(document, $i, Qi.clearMenus), P.on(document, Ni, Qi.clearMenus), P.on(document, $i, ji, function(t2) {
    t2.preventDefault(), Qi.getOrCreateInstance(this).toggle();
  }), g(Qi);
  const Xi = "backdrop", Yi = "show", Ui = `mousedown.bs.${Xi}`, Gi = { className: "modal-backdrop", clickCallback: null, isAnimated: false, isVisible: true, rootElement: "body" }, Ji = { className: "string", clickCallback: "(function|null)", isAnimated: "boolean", isVisible: "boolean", rootElement: "(element|string)" };
  class Zi extends W {
    constructor(t2) {
      super(), this._config = this._getConfig(t2), this._isAppended = false, this._element = null;
    }
    static get Default() {
      return Gi;
    }
    static get DefaultType() {
      return Ji;
    }
    static get NAME() {
      return Xi;
    }
    show(t2) {
      if (!this._config.isVisible) return void _(t2);
      this._append();
      const e2 = this._getElement();
      this._config.isAnimated && u(e2), e2.classList.add(Yi), this._emulateAnimation(() => {
        _(t2);
      });
    }
    hide(t2) {
      this._config.isVisible ? (this._getElement().classList.remove(Yi), this._emulateAnimation(() => {
        this.dispose(), _(t2);
      })) : _(t2);
    }
    dispose() {
      this._isAppended && (P.off(this._element, Ui), this._element.remove(), this._isAppended = false);
    }
    _getElement() {
      if (!this._element) {
        const t2 = document.createElement("div");
        t2.className = this._config.className, this._config.isAnimated && t2.classList.add("fade"), this._element = t2;
      }
      return this._element;
    }
    _configAfterMerge(t2) {
      return t2.rootElement = a(t2.rootElement), t2;
    }
    _append() {
      if (this._isAppended) return;
      const t2 = this._getElement();
      this._config.rootElement.append(t2), P.on(t2, Ui, () => {
        _(this._config.clickCallback);
      }), this._isAppended = true;
    }
    _emulateAnimation(t2) {
      b(t2, this._getElement(), this._config.isAnimated);
    }
  }
  const tn = ".bs.focustrap", en = `focusin${tn}`, nn = `keydown.tab${tn}`, sn = "backward", on = { autofocus: true, trapElement: null }, rn = { autofocus: "boolean", trapElement: "element" };
  class an extends W {
    constructor(t2) {
      super(), this._config = this._getConfig(t2), this._isActive = false, this._lastTabNavDirection = null;
    }
    static get Default() {
      return on;
    }
    static get DefaultType() {
      return rn;
    }
    static get NAME() {
      return "focustrap";
    }
    activate() {
      this._isActive || (this._config.autofocus && this._config.trapElement.focus(), P.off(document, tn), P.on(document, en, (t2) => this._handleFocusin(t2)), P.on(document, nn, (t2) => this._handleKeydown(t2)), this._isActive = true);
    }
    deactivate() {
      this._isActive && (this._isActive = false, P.off(document, tn));
    }
    _handleFocusin(t2) {
      const { trapElement: e2 } = this._config;
      if (t2.target === document || t2.target === e2 || e2.contains(t2.target)) return;
      const i2 = R.focusableChildren(e2);
      0 === i2.length ? e2.focus() : this._lastTabNavDirection === sn ? i2[i2.length - 1].focus() : i2[0].focus();
    }
    _handleKeydown(t2) {
      "Tab" === t2.key && (this._lastTabNavDirection = t2.shiftKey ? sn : "forward");
    }
  }
  const ln = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", cn = ".sticky-top", hn = "padding-right", dn = "margin-right";
  class un {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      const t2 = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t2);
    }
    hide() {
      const t2 = this.getWidth();
      this._disableOverFlow(), this._setElementAttributes(this._element, hn, (e2) => e2 + t2), this._setElementAttributes(ln, hn, (e2) => e2 + t2), this._setElementAttributes(cn, dn, (e2) => e2 - t2);
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, hn), this._resetElementAttributes(ln, hn), this._resetElementAttributes(cn, dn);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
    }
    _setElementAttributes(t2, e2, i2) {
      const n2 = this.getWidth();
      this._applyManipulationCallback(t2, (t3) => {
        if (t3 !== this._element && window.innerWidth > t3.clientWidth + n2) return;
        this._saveInitialAttribute(t3, e2);
        const s2 = window.getComputedStyle(t3).getPropertyValue(e2);
        t3.style.setProperty(e2, `${i2(Number.parseFloat(s2))}px`);
      });
    }
    _saveInitialAttribute(t2, e2) {
      const i2 = t2.style.getPropertyValue(e2);
      i2 && H.setDataAttribute(t2, e2, i2);
    }
    _resetElementAttributes(t2, e2) {
      this._applyManipulationCallback(t2, (t3) => {
        const i2 = H.getDataAttribute(t3, e2);
        null !== i2 ? (H.removeDataAttribute(t3, e2), t3.style.setProperty(e2, i2)) : t3.style.removeProperty(e2);
      });
    }
    _applyManipulationCallback(t2, e2) {
      if (r(t2)) e2(t2);
      else for (const i2 of R.find(t2, this._element)) e2(i2);
    }
  }
  const fn = ".bs.modal", pn = `hide${fn}`, mn = `hidePrevented${fn}`, gn = `hidden${fn}`, _n = `show${fn}`, bn = `shown${fn}`, vn = `resize${fn}`, yn = `click.dismiss${fn}`, wn = `mousedown.dismiss${fn}`, An = `keydown.dismiss${fn}`, En = `click${fn}.data-api`, Tn = "modal-open", Cn = "show", On = "modal-static", xn = { backdrop: true, focus: true, keyboard: true }, kn = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
  class Ln extends B {
    constructor(t2, e2) {
      super(t2, e2), this._dialog = R.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = false, this._isTransitioning = false, this._scrollBar = new un(), this._addEventListeners();
    }
    static get Default() {
      return xn;
    }
    static get DefaultType() {
      return kn;
    }
    static get NAME() {
      return "modal";
    }
    toggle(t2) {
      return this._isShown ? this.hide() : this.show(t2);
    }
    show(t2) {
      this._isShown || this._isTransitioning || P.trigger(this._element, _n, { relatedTarget: t2 }).defaultPrevented || (this._isShown = true, this._isTransitioning = true, this._scrollBar.hide(), document.body.classList.add(Tn), this._adjustDialog(), this._backdrop.show(() => this._showElement(t2)));
    }
    hide() {
      this._isShown && !this._isTransitioning && (P.trigger(this._element, pn).defaultPrevented || (this._isShown = false, this._isTransitioning = true, this._focustrap.deactivate(), this._element.classList.remove(Cn), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated())));
    }
    dispose() {
      P.off(window, fn), P.off(this._dialog, fn), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new Zi({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() });
    }
    _initializeFocusTrap() {
      return new an({ trapElement: this._element });
    }
    _showElement(t2) {
      document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
      const e2 = R.findOne(".modal-body", this._dialog);
      e2 && (e2.scrollTop = 0), u(this._element), this._element.classList.add(Cn), this._queueCallback(() => {
        this._config.focus && this._focustrap.activate(), this._isTransitioning = false, P.trigger(this._element, bn, { relatedTarget: t2 });
      }, this._dialog, this._isAnimated());
    }
    _addEventListeners() {
      P.on(this._element, An, (t2) => {
        "Escape" === t2.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition());
      }), P.on(window, vn, () => {
        this._isShown && !this._isTransitioning && this._adjustDialog();
      }), P.on(this._element, wn, (t2) => {
        P.one(this._element, yn, (e2) => {
          this._element === t2.target && this._element === e2.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition());
        });
      });
    }
    _hideModal() {
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = false, this._backdrop.hide(() => {
        document.body.classList.remove(Tn), this._resetAdjustments(), this._scrollBar.reset(), P.trigger(this._element, gn);
      });
    }
    _isAnimated() {
      return this._element.classList.contains("fade");
    }
    _triggerBackdropTransition() {
      if (P.trigger(this._element, mn).defaultPrevented) return;
      const t2 = this._element.scrollHeight > document.documentElement.clientHeight, e2 = this._element.style.overflowY;
      "hidden" === e2 || this._element.classList.contains(On) || (t2 || (this._element.style.overflowY = "hidden"), this._element.classList.add(On), this._queueCallback(() => {
        this._element.classList.remove(On), this._queueCallback(() => {
          this._element.style.overflowY = e2;
        }, this._dialog);
      }, this._dialog), this._element.focus());
    }
    _adjustDialog() {
      const t2 = this._element.scrollHeight > document.documentElement.clientHeight, e2 = this._scrollBar.getWidth(), i2 = e2 > 0;
      if (i2 && !t2) {
        const t3 = m() ? "paddingLeft" : "paddingRight";
        this._element.style[t3] = `${e2}px`;
      }
      if (!i2 && t2) {
        const t3 = m() ? "paddingRight" : "paddingLeft";
        this._element.style[t3] = `${e2}px`;
      }
    }
    _resetAdjustments() {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }
    static jQueryInterface(t2, e2) {
      return this.each(function() {
        const i2 = Ln.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === i2[t2]) throw new TypeError(`No method named "${t2}"`);
          i2[t2](e2);
        }
      });
    }
  }
  P.on(document, En, '[data-bs-toggle="modal"]', function(t2) {
    const e2 = R.getElementFromSelector(this);
    ["A", "AREA"].includes(this.tagName) && t2.preventDefault(), P.one(e2, _n, (t3) => {
      t3.defaultPrevented || P.one(e2, gn, () => {
        l(this) && this.focus();
      });
    });
    const i2 = R.findOne(".modal.show");
    i2 && Ln.getInstance(i2).hide(), Ln.getOrCreateInstance(e2).toggle(this);
  }), q(Ln), g(Ln);
  const Sn = ".bs.offcanvas", Dn = ".data-api", $n = `load${Sn}${Dn}`, In = "show", Nn = "showing", Pn = "hiding", jn = ".offcanvas.show", Mn = `show${Sn}`, Fn = `shown${Sn}`, Hn = `hide${Sn}`, Wn = `hidePrevented${Sn}`, Bn = `hidden${Sn}`, zn = `resize${Sn}`, Rn = `click${Sn}${Dn}`, qn = `keydown.dismiss${Sn}`, Vn = { backdrop: true, keyboard: true, scroll: false }, Kn = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };
  class Qn extends B {
    constructor(t2, e2) {
      super(t2, e2), this._isShown = false, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
    }
    static get Default() {
      return Vn;
    }
    static get DefaultType() {
      return Kn;
    }
    static get NAME() {
      return "offcanvas";
    }
    toggle(t2) {
      return this._isShown ? this.hide() : this.show(t2);
    }
    show(t2) {
      this._isShown || P.trigger(this._element, Mn, { relatedTarget: t2 }).defaultPrevented || (this._isShown = true, this._backdrop.show(), this._config.scroll || new un().hide(), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.classList.add(Nn), this._queueCallback(() => {
        this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(In), this._element.classList.remove(Nn), P.trigger(this._element, Fn, { relatedTarget: t2 });
      }, this._element, true));
    }
    hide() {
      this._isShown && (P.trigger(this._element, Hn).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = false, this._element.classList.add(Pn), this._backdrop.hide(), this._queueCallback(() => {
        this._element.classList.remove(In, Pn), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new un().reset(), P.trigger(this._element, Bn);
      }, this._element, true)));
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    _initializeBackDrop() {
      const t2 = Boolean(this._config.backdrop);
      return new Zi({ className: "offcanvas-backdrop", isVisible: t2, isAnimated: true, rootElement: this._element.parentNode, clickCallback: t2 ? () => {
        "static" !== this._config.backdrop ? this.hide() : P.trigger(this._element, Wn);
      } : null });
    }
    _initializeFocusTrap() {
      return new an({ trapElement: this._element });
    }
    _addEventListeners() {
      P.on(this._element, qn, (t2) => {
        "Escape" === t2.key && (this._config.keyboard ? this.hide() : P.trigger(this._element, Wn));
      });
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = Qn.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2) throw new TypeError(`No method named "${t2}"`);
          e2[t2](this);
        }
      });
    }
  }
  P.on(document, Rn, '[data-bs-toggle="offcanvas"]', function(t2) {
    const e2 = R.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName) && t2.preventDefault(), c(this)) return;
    P.one(e2, Bn, () => {
      l(this) && this.focus();
    });
    const i2 = R.findOne(jn);
    i2 && i2 !== e2 && Qn.getInstance(i2).hide(), Qn.getOrCreateInstance(e2).toggle(this);
  }), P.on(window, $n, () => {
    for (const t2 of R.find(jn)) Qn.getOrCreateInstance(t2).show();
  }), P.on(window, zn, () => {
    for (const t2 of R.find("[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !== getComputedStyle(t2).position && Qn.getOrCreateInstance(t2).hide();
  }), q(Qn), g(Qn);
  const Xn = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], dd: [], div: [], dl: [], dt: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, Yn = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), Un = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, Gn = (t2, e2) => {
    const i2 = t2.nodeName.toLowerCase();
    return e2.includes(i2) ? !Yn.has(i2) || Boolean(Un.test(t2.nodeValue)) : e2.filter((t3) => t3 instanceof RegExp).some((t3) => t3.test(i2));
  }, Jn = { allowList: Xn, content: {}, extraClass: "", html: false, sanitize: true, sanitizeFn: null, template: "<div></div>" }, Zn = { allowList: "object", content: "object", extraClass: "(string|function)", html: "boolean", sanitize: "boolean", sanitizeFn: "(null|function)", template: "string" }, ts = { entry: "(string|element|function|null)", selector: "(string|element)" };
  class es extends W {
    constructor(t2) {
      super(), this._config = this._getConfig(t2);
    }
    static get Default() {
      return Jn;
    }
    static get DefaultType() {
      return Zn;
    }
    static get NAME() {
      return "TemplateFactory";
    }
    getContent() {
      return Object.values(this._config.content).map((t2) => this._resolvePossibleFunction(t2)).filter(Boolean);
    }
    hasContent() {
      return this.getContent().length > 0;
    }
    changeContent(t2) {
      return this._checkContent(t2), this._config.content = { ...this._config.content, ...t2 }, this;
    }
    toHtml() {
      const t2 = document.createElement("div");
      t2.innerHTML = this._maybeSanitize(this._config.template);
      for (const [e3, i3] of Object.entries(this._config.content)) this._setContent(t2, i3, e3);
      const e2 = t2.children[0], i2 = this._resolvePossibleFunction(this._config.extraClass);
      return i2 && e2.classList.add(...i2.split(" ")), e2;
    }
    _typeCheckConfig(t2) {
      super._typeCheckConfig(t2), this._checkContent(t2.content);
    }
    _checkContent(t2) {
      for (const [e2, i2] of Object.entries(t2)) super._typeCheckConfig({ selector: e2, entry: i2 }, ts);
    }
    _setContent(t2, e2, i2) {
      const n2 = R.findOne(i2, t2);
      n2 && ((e2 = this._resolvePossibleFunction(e2)) ? r(e2) ? this._putElementInTemplate(a(e2), n2) : this._config.html ? n2.innerHTML = this._maybeSanitize(e2) : n2.textContent = e2 : n2.remove());
    }
    _maybeSanitize(t2) {
      return this._config.sanitize ? (function(t3, e2, i2) {
        if (!t3.length) return t3;
        if (i2 && "function" == typeof i2) return i2(t3);
        const n2 = new window.DOMParser().parseFromString(t3, "text/html"), s2 = [].concat(...n2.body.querySelectorAll("*"));
        for (const t4 of s2) {
          const i3 = t4.nodeName.toLowerCase();
          if (!Object.keys(e2).includes(i3)) {
            t4.remove();
            continue;
          }
          const n3 = [].concat(...t4.attributes), s3 = [].concat(e2["*"] || [], e2[i3] || []);
          for (const e3 of n3) Gn(e3, s3) || t4.removeAttribute(e3.nodeName);
        }
        return n2.body.innerHTML;
      })(t2, this._config.allowList, this._config.sanitizeFn) : t2;
    }
    _resolvePossibleFunction(t2) {
      return _(t2, [void 0, this]);
    }
    _putElementInTemplate(t2, e2) {
      if (this._config.html) return e2.innerHTML = "", void e2.append(t2);
      e2.textContent = t2.textContent;
    }
  }
  const is = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), ns = "fade", ss = "show", os = ".tooltip-inner", rs = ".modal", as = "hide.bs.modal", ls = "hover", cs = "focus", hs = "click", ds = { AUTO: "auto", TOP: "top", RIGHT: m() ? "left" : "right", BOTTOM: "bottom", LEFT: m() ? "right" : "left" }, us = { allowList: Xn, animation: true, boundary: "clippingParents", container: false, customClass: "", delay: 0, fallbackPlacements: ["top", "right", "bottom", "left"], html: false, offset: [0, 6], placement: "top", popperConfig: null, sanitize: true, sanitizeFn: null, selector: false, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', title: "", trigger: "hover focus" }, fs = { allowList: "object", animation: "boolean", boundary: "(string|element)", container: "(string|element|boolean)", customClass: "(string|function)", delay: "(number|object)", fallbackPlacements: "array", html: "boolean", offset: "(array|string|function)", placement: "(string|function)", popperConfig: "(null|object|function)", sanitize: "boolean", sanitizeFn: "(null|function)", selector: "(string|boolean)", template: "string", title: "(string|element|function)", trigger: "string" };
  class ps extends B {
    constructor(t2, e2) {
      if (void 0 === Ai) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");
      super(t2, e2), this._isEnabled = true, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
    }
    static get Default() {
      return us;
    }
    static get DefaultType() {
      return fs;
    }
    static get NAME() {
      return "tooltip";
    }
    enable() {
      this._isEnabled = true;
    }
    disable() {
      this._isEnabled = false;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle() {
      this._isEnabled && (this._isShown() ? this._leave() : this._enter());
    }
    dispose() {
      clearTimeout(this._timeout), P.off(this._element.closest(rs), as, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
    }
    show() {
      if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
      if (!this._isWithContent() || !this._isEnabled) return;
      const t2 = P.trigger(this._element, this.constructor.eventName("show")), e2 = (h(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
      if (t2.defaultPrevented || !e2) return;
      this._disposePopper();
      const i2 = this._getTipElement();
      this._element.setAttribute("aria-describedby", i2.getAttribute("id"));
      const { container: n2 } = this._config;
      if (this._element.ownerDocument.documentElement.contains(this.tip) || (n2.append(i2), P.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(i2), i2.classList.add(ss), "ontouchstart" in document.documentElement) for (const t3 of [].concat(...document.body.children)) P.on(t3, "mouseover", d);
      this._queueCallback(() => {
        P.trigger(this._element, this.constructor.eventName("shown")), false === this._isHovered && this._leave(), this._isHovered = false;
      }, this.tip, this._isAnimated());
    }
    hide() {
      if (this._isShown() && !P.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
        if (this._getTipElement().classList.remove(ss), "ontouchstart" in document.documentElement) for (const t2 of [].concat(...document.body.children)) P.off(t2, "mouseover", d);
        this._activeTrigger[hs] = false, this._activeTrigger[cs] = false, this._activeTrigger[ls] = false, this._isHovered = null, this._queueCallback(() => {
          this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), P.trigger(this._element, this.constructor.eventName("hidden")));
        }, this.tip, this._isAnimated());
      }
    }
    update() {
      this._popper && this._popper.update();
    }
    _isWithContent() {
      return Boolean(this._getTitle());
    }
    _getTipElement() {
      return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
    }
    _createTipElement(t2) {
      const e2 = this._getTemplateFactory(t2).toHtml();
      if (!e2) return null;
      e2.classList.remove(ns, ss), e2.classList.add(`bs-${this.constructor.NAME}-auto`);
      const i2 = ((t3) => {
        do {
          t3 += Math.floor(1e6 * Math.random());
        } while (document.getElementById(t3));
        return t3;
      })(this.constructor.NAME).toString();
      return e2.setAttribute("id", i2), this._isAnimated() && e2.classList.add(ns), e2;
    }
    setContent(t2) {
      this._newContent = t2, this._isShown() && (this._disposePopper(), this.show());
    }
    _getTemplateFactory(t2) {
      return this._templateFactory ? this._templateFactory.changeContent(t2) : this._templateFactory = new es({ ...this._config, content: t2, extraClass: this._resolvePossibleFunction(this._config.customClass) }), this._templateFactory;
    }
    _getContentForTemplate() {
      return { [os]: this._getTitle() };
    }
    _getTitle() {
      return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
    }
    _initializeOnDelegatedTarget(t2) {
      return this.constructor.getOrCreateInstance(t2.delegateTarget, this._getDelegateConfig());
    }
    _isAnimated() {
      return this._config.animation || this.tip && this.tip.classList.contains(ns);
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(ss);
    }
    _createPopper(t2) {
      const e2 = _(this._config.placement, [this, t2, this._element]), i2 = ds[e2.toUpperCase()];
      return wi(this._element, t2, this._getPopperConfig(i2));
    }
    _getOffset() {
      const { offset: t2 } = this._config;
      return "string" == typeof t2 ? t2.split(",").map((t3) => Number.parseInt(t3, 10)) : "function" == typeof t2 ? (e2) => t2(e2, this._element) : t2;
    }
    _resolvePossibleFunction(t2) {
      return _(t2, [this._element, this._element]);
    }
    _getPopperConfig(t2) {
      const e2 = { placement: t2, modifiers: [{ name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } }, { name: "offset", options: { offset: this._getOffset() } }, { name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } }, { name: "preSetPlacement", enabled: true, phase: "beforeMain", fn: (t3) => {
        this._getTipElement().setAttribute("data-popper-placement", t3.state.placement);
      } }] };
      return { ...e2, ..._(this._config.popperConfig, [void 0, e2]) };
    }
    _setListeners() {
      const t2 = this._config.trigger.split(" ");
      for (const e2 of t2) if ("click" === e2) P.on(this._element, this.constructor.eventName("click"), this._config.selector, (t3) => {
        const e3 = this._initializeOnDelegatedTarget(t3);
        e3._activeTrigger[hs] = !(e3._isShown() && e3._activeTrigger[hs]), e3.toggle();
      });
      else if ("manual" !== e2) {
        const t3 = e2 === ls ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"), i2 = e2 === ls ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
        P.on(this._element, t3, this._config.selector, (t4) => {
          const e3 = this._initializeOnDelegatedTarget(t4);
          e3._activeTrigger["focusin" === t4.type ? cs : ls] = true, e3._enter();
        }), P.on(this._element, i2, this._config.selector, (t4) => {
          const e3 = this._initializeOnDelegatedTarget(t4);
          e3._activeTrigger["focusout" === t4.type ? cs : ls] = e3._element.contains(t4.relatedTarget), e3._leave();
        });
      }
      this._hideModalHandler = () => {
        this._element && this.hide();
      }, P.on(this._element.closest(rs), as, this._hideModalHandler);
    }
    _fixTitle() {
      const t2 = this._element.getAttribute("title");
      t2 && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t2), this._element.setAttribute("data-bs-original-title", t2), this._element.removeAttribute("title"));
    }
    _enter() {
      this._isShown() || this._isHovered ? this._isHovered = true : (this._isHovered = true, this._setTimeout(() => {
        this._isHovered && this.show();
      }, this._config.delay.show));
    }
    _leave() {
      this._isWithActiveTrigger() || (this._isHovered = false, this._setTimeout(() => {
        this._isHovered || this.hide();
      }, this._config.delay.hide));
    }
    _setTimeout(t2, e2) {
      clearTimeout(this._timeout), this._timeout = setTimeout(t2, e2);
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(true);
    }
    _getConfig(t2) {
      const e2 = H.getDataAttributes(this._element);
      for (const t3 of Object.keys(e2)) is.has(t3) && delete e2[t3];
      return t2 = { ...e2, ..."object" == typeof t2 && t2 ? t2 : {} }, t2 = this._mergeConfigObj(t2), t2 = this._configAfterMerge(t2), this._typeCheckConfig(t2), t2;
    }
    _configAfterMerge(t2) {
      return t2.container = false === t2.container ? document.body : a(t2.container), "number" == typeof t2.delay && (t2.delay = { show: t2.delay, hide: t2.delay }), "number" == typeof t2.title && (t2.title = t2.title.toString()), "number" == typeof t2.content && (t2.content = t2.content.toString()), t2;
    }
    _getDelegateConfig() {
      const t2 = {};
      for (const [e2, i2] of Object.entries(this._config)) this.constructor.Default[e2] !== i2 && (t2[e2] = i2);
      return t2.selector = false, t2.trigger = "manual", t2;
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = ps.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2]) throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      });
    }
  }
  g(ps);
  const ms = ".popover-header", gs = ".popover-body", _s = { ...ps.Default, content: "", offset: [0, 8], placement: "right", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>', trigger: "click" }, bs = { ...ps.DefaultType, content: "(null|string|element|function)" };
  class vs extends ps {
    static get Default() {
      return _s;
    }
    static get DefaultType() {
      return bs;
    }
    static get NAME() {
      return "popover";
    }
    _isWithContent() {
      return this._getTitle() || this._getContent();
    }
    _getContentForTemplate() {
      return { [ms]: this._getTitle(), [gs]: this._getContent() };
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = vs.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2]) throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      });
    }
  }
  g(vs);
  const ys = ".bs.scrollspy", ws = `activate${ys}`, As = `click${ys}`, Es = `load${ys}.data-api`, Ts = "active", Cs = "[href]", Os = ".nav-link", xs = `${Os}, .nav-item > ${Os}, .list-group-item`, ks = { offset: null, rootMargin: "0px 0px -25%", smoothScroll: false, target: null, threshold: [0.1, 0.5, 1] }, Ls = { offset: "(number|null)", rootMargin: "string", smoothScroll: "boolean", target: "element", threshold: "array" };
  class Ss extends B {
    constructor(t2, e2) {
      super(t2, e2), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }, this.refresh();
    }
    static get Default() {
      return ks;
    }
    static get DefaultType() {
      return Ls;
    }
    static get NAME() {
      return "scrollspy";
    }
    refresh() {
      this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
      for (const t2 of this._observableSections.values()) this._observer.observe(t2);
    }
    dispose() {
      this._observer.disconnect(), super.dispose();
    }
    _configAfterMerge(t2) {
      return t2.target = a(t2.target) || document.body, t2.rootMargin = t2.offset ? `${t2.offset}px 0px -30%` : t2.rootMargin, "string" == typeof t2.threshold && (t2.threshold = t2.threshold.split(",").map((t3) => Number.parseFloat(t3))), t2;
    }
    _maybeEnableSmoothScroll() {
      this._config.smoothScroll && (P.off(this._config.target, As), P.on(this._config.target, As, Cs, (t2) => {
        const e2 = this._observableSections.get(t2.target.hash);
        if (e2) {
          t2.preventDefault();
          const i2 = this._rootElement || window, n2 = e2.offsetTop - this._element.offsetTop;
          if (i2.scrollTo) return void i2.scrollTo({ top: n2, behavior: "smooth" });
          i2.scrollTop = n2;
        }
      }));
    }
    _getNewObserver() {
      const t2 = { root: this._rootElement, threshold: this._config.threshold, rootMargin: this._config.rootMargin };
      return new IntersectionObserver((t3) => this._observerCallback(t3), t2);
    }
    _observerCallback(t2) {
      const e2 = (t3) => this._targetLinks.get(`#${t3.target.id}`), i2 = (t3) => {
        this._previousScrollData.visibleEntryTop = t3.target.offsetTop, this._process(e2(t3));
      }, n2 = (this._rootElement || document.documentElement).scrollTop, s2 = n2 >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = n2;
      for (const o2 of t2) {
        if (!o2.isIntersecting) {
          this._activeTarget = null, this._clearActiveClass(e2(o2));
          continue;
        }
        const t3 = o2.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (s2 && t3) {
          if (i2(o2), !n2) return;
        } else s2 || t3 || i2(o2);
      }
    }
    _initializeTargetsAndObservables() {
      this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
      const t2 = R.find(Cs, this._config.target);
      for (const e2 of t2) {
        if (!e2.hash || c(e2)) continue;
        const t3 = R.findOne(decodeURI(e2.hash), this._element);
        l(t3) && (this._targetLinks.set(decodeURI(e2.hash), e2), this._observableSections.set(e2.hash, t3));
      }
    }
    _process(t2) {
      this._activeTarget !== t2 && (this._clearActiveClass(this._config.target), this._activeTarget = t2, t2.classList.add(Ts), this._activateParents(t2), P.trigger(this._element, ws, { relatedTarget: t2 }));
    }
    _activateParents(t2) {
      if (t2.classList.contains("dropdown-item")) R.findOne(".dropdown-toggle", t2.closest(".dropdown")).classList.add(Ts);
      else for (const e2 of R.parents(t2, ".nav, .list-group")) for (const t3 of R.prev(e2, xs)) t3.classList.add(Ts);
    }
    _clearActiveClass(t2) {
      t2.classList.remove(Ts);
      const e2 = R.find(`${Cs}.${Ts}`, t2);
      for (const t3 of e2) t3.classList.remove(Ts);
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = Ss.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2) throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      });
    }
  }
  P.on(window, Es, () => {
    for (const t2 of R.find('[data-bs-spy="scroll"]')) Ss.getOrCreateInstance(t2);
  }), g(Ss);
  const Ds = ".bs.tab", $s = `hide${Ds}`, Is = `hidden${Ds}`, Ns = `show${Ds}`, Ps = `shown${Ds}`, js = `click${Ds}`, Ms = `keydown${Ds}`, Fs = `load${Ds}`, Hs = "ArrowLeft", Ws = "ArrowRight", Bs = "ArrowUp", zs = "ArrowDown", Rs = "Home", qs = "End", Vs = "active", Ks = "fade", Qs = "show", Xs = ".dropdown-toggle", Ys = `:not(${Xs})`, Us = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', Gs = `.nav-link${Ys}, .list-group-item${Ys}, [role="tab"]${Ys}, ${Us}`, Js = `.${Vs}[data-bs-toggle="tab"], .${Vs}[data-bs-toggle="pill"], .${Vs}[data-bs-toggle="list"]`;
  class Zs extends B {
    constructor(t2) {
      super(t2), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), P.on(this._element, Ms, (t3) => this._keydown(t3)));
    }
    static get NAME() {
      return "tab";
    }
    show() {
      const t2 = this._element;
      if (this._elemIsActive(t2)) return;
      const e2 = this._getActiveElem(), i2 = e2 ? P.trigger(e2, $s, { relatedTarget: t2 }) : null;
      P.trigger(t2, Ns, { relatedTarget: e2 }).defaultPrevented || i2 && i2.defaultPrevented || (this._deactivate(e2, t2), this._activate(t2, e2));
    }
    _activate(t2, e2) {
      t2 && (t2.classList.add(Vs), this._activate(R.getElementFromSelector(t2)), this._queueCallback(() => {
        "tab" === t2.getAttribute("role") ? (t2.removeAttribute("tabindex"), t2.setAttribute("aria-selected", true), this._toggleDropDown(t2, true), P.trigger(t2, Ps, { relatedTarget: e2 })) : t2.classList.add(Qs);
      }, t2, t2.classList.contains(Ks)));
    }
    _deactivate(t2, e2) {
      t2 && (t2.classList.remove(Vs), t2.blur(), this._deactivate(R.getElementFromSelector(t2)), this._queueCallback(() => {
        "tab" === t2.getAttribute("role") ? (t2.setAttribute("aria-selected", false), t2.setAttribute("tabindex", "-1"), this._toggleDropDown(t2, false), P.trigger(t2, Is, { relatedTarget: e2 })) : t2.classList.remove(Qs);
      }, t2, t2.classList.contains(Ks)));
    }
    _keydown(t2) {
      if (![Hs, Ws, Bs, zs, Rs, qs].includes(t2.key)) return;
      t2.stopPropagation(), t2.preventDefault();
      const e2 = this._getChildren().filter((t3) => !c(t3));
      let i2;
      if ([Rs, qs].includes(t2.key)) i2 = e2[t2.key === Rs ? 0 : e2.length - 1];
      else {
        const n2 = [Ws, zs].includes(t2.key);
        i2 = v(e2, t2.target, n2, true);
      }
      i2 && (i2.focus({ preventScroll: true }), Zs.getOrCreateInstance(i2).show());
    }
    _getChildren() {
      return R.find(Gs, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find((t2) => this._elemIsActive(t2)) || null;
    }
    _setInitialAttributes(t2, e2) {
      this._setAttributeIfNotExists(t2, "role", "tablist");
      for (const t3 of e2) this._setInitialAttributesOnChild(t3);
    }
    _setInitialAttributesOnChild(t2) {
      t2 = this._getInnerElement(t2);
      const e2 = this._elemIsActive(t2), i2 = this._getOuterElement(t2);
      t2.setAttribute("aria-selected", e2), i2 !== t2 && this._setAttributeIfNotExists(i2, "role", "presentation"), e2 || t2.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t2, "role", "tab"), this._setInitialAttributesOnTargetPanel(t2);
    }
    _setInitialAttributesOnTargetPanel(t2) {
      const e2 = R.getElementFromSelector(t2);
      e2 && (this._setAttributeIfNotExists(e2, "role", "tabpanel"), t2.id && this._setAttributeIfNotExists(e2, "aria-labelledby", `${t2.id}`));
    }
    _toggleDropDown(t2, e2) {
      const i2 = this._getOuterElement(t2);
      if (!i2.classList.contains("dropdown")) return;
      const n2 = (t3, n3) => {
        const s2 = R.findOne(t3, i2);
        s2 && s2.classList.toggle(n3, e2);
      };
      n2(Xs, Vs), n2(".dropdown-menu", Qs), i2.setAttribute("aria-expanded", e2);
    }
    _setAttributeIfNotExists(t2, e2, i2) {
      t2.hasAttribute(e2) || t2.setAttribute(e2, i2);
    }
    _elemIsActive(t2) {
      return t2.classList.contains(Vs);
    }
    _getInnerElement(t2) {
      return t2.matches(Gs) ? t2 : R.findOne(Gs, t2);
    }
    _getOuterElement(t2) {
      return t2.closest(".nav-item, .list-group-item") || t2;
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = Zs.getOrCreateInstance(this);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2) throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      });
    }
  }
  P.on(document, js, Us, function(t2) {
    ["A", "AREA"].includes(this.tagName) && t2.preventDefault(), c(this) || Zs.getOrCreateInstance(this).show();
  }), P.on(window, Fs, () => {
    for (const t2 of R.find(Js)) Zs.getOrCreateInstance(t2);
  }), g(Zs);
  const to = ".bs.toast", eo = `mouseover${to}`, io = `mouseout${to}`, no = `focusin${to}`, so = `focusout${to}`, oo = `hide${to}`, ro = `hidden${to}`, ao = `show${to}`, lo = `shown${to}`, co = "hide", ho = "show", uo = "showing", fo = { animation: "boolean", autohide: "boolean", delay: "number" }, po = { animation: true, autohide: true, delay: 5e3 };
  class mo extends B {
    constructor(t2, e2) {
      super(t2, e2), this._timeout = null, this._hasMouseInteraction = false, this._hasKeyboardInteraction = false, this._setListeners();
    }
    static get Default() {
      return po;
    }
    static get DefaultType() {
      return fo;
    }
    static get NAME() {
      return "toast";
    }
    show() {
      P.trigger(this._element, ao).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(co), u(this._element), this._element.classList.add(ho, uo), this._queueCallback(() => {
        this._element.classList.remove(uo), P.trigger(this._element, lo), this._maybeScheduleHide();
      }, this._element, this._config.animation));
    }
    hide() {
      this.isShown() && (P.trigger(this._element, oo).defaultPrevented || (this._element.classList.add(uo), this._queueCallback(() => {
        this._element.classList.add(co), this._element.classList.remove(uo, ho), P.trigger(this._element, ro);
      }, this._element, this._config.animation)));
    }
    dispose() {
      this._clearTimeout(), this.isShown() && this._element.classList.remove(ho), super.dispose();
    }
    isShown() {
      return this._element.classList.contains(ho);
    }
    _maybeScheduleHide() {
      this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
        this.hide();
      }, this._config.delay)));
    }
    _onInteraction(t2, e2) {
      switch (t2.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = e2;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = e2;
      }
      if (e2) return void this._clearTimeout();
      const i2 = t2.relatedTarget;
      this._element === i2 || this._element.contains(i2) || this._maybeScheduleHide();
    }
    _setListeners() {
      P.on(this._element, eo, (t2) => this._onInteraction(t2, true)), P.on(this._element, io, (t2) => this._onInteraction(t2, false)), P.on(this._element, no, (t2) => this._onInteraction(t2, true)), P.on(this._element, so, (t2) => this._onInteraction(t2, false));
    }
    _clearTimeout() {
      clearTimeout(this._timeout), this._timeout = null;
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = mo.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2]) throw new TypeError(`No method named "${t2}"`);
          e2[t2](this);
        }
      });
    }
  }
  return q(mo), g(mo), { Alert: X, Button: U, Carousel: St, Collapse: qt, Dropdown: Qi, Modal: Ln, Offcanvas: Qn, Popover: vs, ScrollSpy: Ss, Tab: Zs, Toast: mo, Tooltip: ps };
});
//# sourceMappingURL=scripts.js.map
