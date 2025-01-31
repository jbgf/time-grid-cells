import Ii, { createContext as Jt, useContext as at, useId as Bo, useEffect as Be, useCallback as Bi, Component as $o, useLayoutEffect as No, useRef as ue, useInsertionEffect as Uo, useMemo as $e, forwardRef as Wo, Fragment as $i, createElement as Ko, useState as Yo } from "react";
var Go = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ho(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var fn = { exports: {} }, ne = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bs;
function zo() {
  if (bs) return ne;
  bs = 1;
  var t = Ii, e = Symbol.for("react.element"), n = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function r(a, u, l) {
    var c, h = {}, d = null, p = null;
    l !== void 0 && (d = "" + l), u.key !== void 0 && (d = "" + u.key), u.ref !== void 0 && (p = u.ref);
    for (c in u) s.call(u, c) && !o.hasOwnProperty(c) && (h[c] = u[c]);
    if (a && a.defaultProps) for (c in u = a.defaultProps, u) h[c] === void 0 && (h[c] = u[c]);
    return { $$typeof: e, type: a, key: d, ref: p, props: h, _owner: i.current };
  }
  return ne.Fragment = n, ne.jsx = r, ne.jsxs = r, ne;
}
var se = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xs;
function Xo() {
  return xs || (xs = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Ii, e = Symbol.for("react.element"), n = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), r = Symbol.for("react.provider"), a = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), y = Symbol.iterator, v = "@@iterator";
    function S(f) {
      if (f === null || typeof f != "object")
        return null;
      var m = y && f[y] || f[v];
      return typeof m == "function" ? m : null;
    }
    var g = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(f) {
      {
        for (var m = arguments.length, A = new Array(m > 1 ? m - 1 : 0), O = 1; O < m; O++)
          A[O - 1] = arguments[O];
        D("error", f, A);
      }
    }
    function D(f, m, A) {
      {
        var O = g.ReactDebugCurrentFrame, $ = O.getStackAddendum();
        $ !== "" && (m += "%s", A = A.concat([$]));
        var U = A.map(function(I) {
          return String(I);
        });
        U.unshift("Warning: " + m), Function.prototype.apply.call(console[f], console, U);
      }
    }
    var F = !1, C = !1, _ = !1, W = !1, L = !1, Y;
    Y = Symbol.for("react.module.reference");
    function B(f) {
      return !!(typeof f == "string" || typeof f == "function" || f === s || f === o || L || f === i || f === l || f === c || W || f === p || F || C || _ || typeof f == "object" && f !== null && (f.$$typeof === d || f.$$typeof === h || f.$$typeof === r || f.$$typeof === a || f.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      f.$$typeof === Y || f.getModuleId !== void 0));
    }
    function k(f, m, A) {
      var O = f.displayName;
      if (O)
        return O;
      var $ = m.displayName || m.name || "";
      return $ !== "" ? A + "(" + $ + ")" : A;
    }
    function vt(f) {
      return f.displayName || "Context";
    }
    function lt(f) {
      if (f == null)
        return null;
      if (typeof f.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof f == "function")
        return f.displayName || f.name || null;
      if (typeof f == "string")
        return f;
      switch (f) {
        case s:
          return "Fragment";
        case n:
          return "Portal";
        case o:
          return "Profiler";
        case i:
          return "StrictMode";
        case l:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case a:
            var m = f;
            return vt(m) + ".Consumer";
          case r:
            var A = f;
            return vt(A._context) + ".Provider";
          case u:
            return k(f, f.render, "ForwardRef");
          case h:
            var O = f.displayName || null;
            return O !== null ? O : lt(f.type) || "Memo";
          case d: {
            var $ = f, U = $._payload, I = $._init;
            try {
              return lt(I(U));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var V = Object.assign, w = 0, x, P, T, R, M, N, G;
    function X() {
    }
    X.__reactDisabledLog = !0;
    function tt() {
      {
        if (w === 0) {
          x = console.log, P = console.info, T = console.warn, R = console.error, M = console.group, N = console.groupCollapsed, G = console.groupEnd;
          var f = {
            configurable: !0,
            enumerable: !0,
            value: X,
            writable: !0
          };
          Object.defineProperties(console, {
            info: f,
            log: f,
            warn: f,
            error: f,
            group: f,
            groupCollapsed: f,
            groupEnd: f
          });
        }
        w++;
      }
    }
    function rt() {
      {
        if (w--, w === 0) {
          var f = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: V({}, f, {
              value: x
            }),
            info: V({}, f, {
              value: P
            }),
            warn: V({}, f, {
              value: T
            }),
            error: V({}, f, {
              value: R
            }),
            group: V({}, f, {
              value: M
            }),
            groupCollapsed: V({}, f, {
              value: N
            }),
            groupEnd: V({}, f, {
              value: G
            })
          });
        }
        w < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Tt = g.ReactCurrentDispatcher, pt;
    function bt(f, m, A) {
      {
        if (pt === void 0)
          try {
            throw Error();
          } catch ($) {
            var O = $.stack.trim().match(/\n( *(at )?)/);
            pt = O && O[1] || "";
          }
        return `
` + pt + f;
      }
    }
    var mt = !1, Q;
    {
      var xt = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new xt();
    }
    function Ct(f, m) {
      if (!f || mt)
        return "";
      {
        var A = Q.get(f);
        if (A !== void 0)
          return A;
      }
      var O;
      mt = !0;
      var $ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var U;
      U = Tt.current, Tt.current = null, tt();
      try {
        if (m) {
          var I = function() {
            throw Error();
          };
          if (Object.defineProperty(I.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(I, []);
            } catch (ot) {
              O = ot;
            }
            Reflect.construct(f, [], I);
          } else {
            try {
              I.call();
            } catch (ot) {
              O = ot;
            }
            f.call(I.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ot) {
            O = ot;
          }
          f();
        }
      } catch (ot) {
        if (ot && O && typeof ot.stack == "string") {
          for (var j = ot.stack.split(`
`), it = O.stack.split(`
`), q = j.length - 1, J = it.length - 1; q >= 1 && J >= 0 && j[q] !== it[J]; )
            J--;
          for (; q >= 1 && J >= 0; q--, J--)
            if (j[q] !== it[J]) {
              if (q !== 1 || J !== 1)
                do
                  if (q--, J--, J < 0 || j[q] !== it[J]) {
                    var ft = `
` + j[q].replace(" at new ", " at ");
                    return f.displayName && ft.includes("<anonymous>") && (ft = ft.replace("<anonymous>", f.displayName)), typeof f == "function" && Q.set(f, ft), ft;
                  }
                while (q >= 1 && J >= 0);
              break;
            }
        }
      } finally {
        mt = !1, Tt.current = U, rt(), Error.prepareStackTrace = $;
      }
      var Ut = f ? f.displayName || f.name : "", Lt = Ut ? bt(Ut) : "";
      return typeof f == "function" && Q.set(f, Lt), Lt;
    }
    function $t(f, m, A) {
      return Ct(f, !1);
    }
    function go(f) {
      var m = f.prototype;
      return !!(m && m.isReactComponent);
    }
    function Pe(f, m, A) {
      if (f == null)
        return "";
      if (typeof f == "function")
        return Ct(f, go(f));
      if (typeof f == "string")
        return bt(f);
      switch (f) {
        case l:
          return bt("Suspense");
        case c:
          return bt("SuspenseList");
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case u:
            return $t(f.render);
          case h:
            return Pe(f.type, m, A);
          case d: {
            var O = f, $ = O._payload, U = O._init;
            try {
              return Pe(U($), m, A);
            } catch {
            }
          }
        }
      return "";
    }
    var ee = Object.prototype.hasOwnProperty, os = {}, as = g.ReactDebugCurrentFrame;
    function we(f) {
      if (f) {
        var m = f._owner, A = Pe(f.type, f._source, m ? m.type : null);
        as.setExtraStackFrame(A);
      } else
        as.setExtraStackFrame(null);
    }
    function yo(f, m, A, O, $) {
      {
        var U = Function.call.bind(ee);
        for (var I in f)
          if (U(f, I)) {
            var j = void 0;
            try {
              if (typeof f[I] != "function") {
                var it = Error((O || "React class") + ": " + A + " type `" + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[I] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw it.name = "Invariant Violation", it;
              }
              j = f[I](m, I, O, A, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (q) {
              j = q;
            }
            j && !(j instanceof Error) && (we($), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", O || "React class", A, I, typeof j), we(null)), j instanceof Error && !(j.message in os) && (os[j.message] = !0, we($), b("Failed %s type: %s", A, j.message), we(null));
          }
      }
    }
    var vo = Array.isArray;
    function He(f) {
      return vo(f);
    }
    function To(f) {
      {
        var m = typeof Symbol == "function" && Symbol.toStringTag, A = m && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return A;
      }
    }
    function bo(f) {
      try {
        return us(f), !1;
      } catch {
        return !0;
      }
    }
    function us(f) {
      return "" + f;
    }
    function ls(f) {
      if (bo(f))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", To(f)), us(f);
    }
    var cs = g.ReactCurrentOwner, xo = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, fs, hs;
    function So(f) {
      if (ee.call(f, "ref")) {
        var m = Object.getOwnPropertyDescriptor(f, "ref").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return f.ref !== void 0;
    }
    function Po(f) {
      if (ee.call(f, "key")) {
        var m = Object.getOwnPropertyDescriptor(f, "key").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return f.key !== void 0;
    }
    function wo(f, m) {
      typeof f.ref == "string" && cs.current;
    }
    function Ao(f, m) {
      {
        var A = function() {
          fs || (fs = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        A.isReactWarning = !0, Object.defineProperty(f, "key", {
          get: A,
          configurable: !0
        });
      }
    }
    function Do(f, m) {
      {
        var A = function() {
          hs || (hs = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        A.isReactWarning = !0, Object.defineProperty(f, "ref", {
          get: A,
          configurable: !0
        });
      }
    }
    var Co = function(f, m, A, O, $, U, I) {
      var j = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: f,
        key: m,
        ref: A,
        props: I,
        // Record the component responsible for creating this element.
        _owner: U
      };
      return j._store = {}, Object.defineProperty(j._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(j, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: O
      }), Object.defineProperty(j, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $
      }), Object.freeze && (Object.freeze(j.props), Object.freeze(j)), j;
    };
    function Vo(f, m, A, O, $) {
      {
        var U, I = {}, j = null, it = null;
        A !== void 0 && (ls(A), j = "" + A), Po(m) && (ls(m.key), j = "" + m.key), So(m) && (it = m.ref, wo(m, $));
        for (U in m)
          ee.call(m, U) && !xo.hasOwnProperty(U) && (I[U] = m[U]);
        if (f && f.defaultProps) {
          var q = f.defaultProps;
          for (U in q)
            I[U] === void 0 && (I[U] = q[U]);
        }
        if (j || it) {
          var J = typeof f == "function" ? f.displayName || f.name || "Unknown" : f;
          j && Ao(I, J), it && Do(I, J);
        }
        return Co(f, j, it, $, O, cs.current, I);
      }
    }
    var ze = g.ReactCurrentOwner, ds = g.ReactDebugCurrentFrame;
    function Nt(f) {
      if (f) {
        var m = f._owner, A = Pe(f.type, f._source, m ? m.type : null);
        ds.setExtraStackFrame(A);
      } else
        ds.setExtraStackFrame(null);
    }
    var Xe;
    Xe = !1;
    function qe(f) {
      return typeof f == "object" && f !== null && f.$$typeof === e;
    }
    function ps() {
      {
        if (ze.current) {
          var f = lt(ze.current.type);
          if (f)
            return `

Check the render method of \`` + f + "`.";
        }
        return "";
      }
    }
    function Eo(f) {
      return "";
    }
    var ms = {};
    function Ro(f) {
      {
        var m = ps();
        if (!m) {
          var A = typeof f == "string" ? f : f.displayName || f.name;
          A && (m = `

Check the top-level render call using <` + A + ">.");
        }
        return m;
      }
    }
    function gs(f, m) {
      {
        if (!f._store || f._store.validated || f.key != null)
          return;
        f._store.validated = !0;
        var A = Ro(m);
        if (ms[A])
          return;
        ms[A] = !0;
        var O = "";
        f && f._owner && f._owner !== ze.current && (O = " It was passed a child from " + lt(f._owner.type) + "."), Nt(f), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', A, O), Nt(null);
      }
    }
    function ys(f, m) {
      {
        if (typeof f != "object")
          return;
        if (He(f))
          for (var A = 0; A < f.length; A++) {
            var O = f[A];
            qe(O) && gs(O, m);
          }
        else if (qe(f))
          f._store && (f._store.validated = !0);
        else if (f) {
          var $ = S(f);
          if (typeof $ == "function" && $ !== f.entries)
            for (var U = $.call(f), I; !(I = U.next()).done; )
              qe(I.value) && gs(I.value, m);
        }
      }
    }
    function Mo(f) {
      {
        var m = f.type;
        if (m == null || typeof m == "string")
          return;
        var A;
        if (typeof m == "function")
          A = m.propTypes;
        else if (typeof m == "object" && (m.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        m.$$typeof === h))
          A = m.propTypes;
        else
          return;
        if (A) {
          var O = lt(m);
          yo(A, f.props, "prop", O, f);
        } else if (m.PropTypes !== void 0 && !Xe) {
          Xe = !0;
          var $ = lt(m);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", $ || "Unknown");
        }
        typeof m.getDefaultProps == "function" && !m.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Oo(f) {
      {
        for (var m = Object.keys(f.props), A = 0; A < m.length; A++) {
          var O = m[A];
          if (O !== "children" && O !== "key") {
            Nt(f), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", O), Nt(null);
            break;
          }
        }
        f.ref !== null && (Nt(f), b("Invalid attribute `ref` supplied to `React.Fragment`."), Nt(null));
      }
    }
    var vs = {};
    function Ts(f, m, A, O, $, U) {
      {
        var I = B(f);
        if (!I) {
          var j = "";
          (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (j += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var it = Eo();
          it ? j += it : j += ps();
          var q;
          f === null ? q = "null" : He(f) ? q = "array" : f !== void 0 && f.$$typeof === e ? (q = "<" + (lt(f.type) || "Unknown") + " />", j = " Did you accidentally export a JSX literal instead of a component?") : q = typeof f, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", q, j);
        }
        var J = Vo(f, m, A, $, U);
        if (J == null)
          return J;
        if (I) {
          var ft = m.children;
          if (ft !== void 0)
            if (O)
              if (He(ft)) {
                for (var Ut = 0; Ut < ft.length; Ut++)
                  ys(ft[Ut], f);
                Object.freeze && Object.freeze(ft);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ys(ft, f);
        }
        if (ee.call(m, "key")) {
          var Lt = lt(f), ot = Object.keys(m).filter(function(Io) {
            return Io !== "key";
          }), Ze = ot.length > 0 ? "{key: someKey, " + ot.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!vs[Lt + Ze]) {
            var Fo = ot.length > 0 ? "{" + ot.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ze, Lt, Fo, Lt), vs[Lt + Ze] = !0;
          }
        }
        return f === s ? Oo(J) : Mo(J), J;
      }
    }
    function Lo(f, m, A) {
      return Ts(f, m, A, !0);
    }
    function _o(f, m, A) {
      return Ts(f, m, A, !1);
    }
    var ko = _o, jo = Lo;
    se.Fragment = s, se.jsx = ko, se.jsxs = jo;
  }()), se;
}
process.env.NODE_ENV === "production" ? fn.exports = zo() : fn.exports = Xo();
var yt = fn.exports;
const Ss = /* @__PURE__ */ new Set();
function Ne(t, e, n) {
  t || Ss.has(e) || (console.warn(e), Ss.add(e));
}
function qo(t) {
  if (typeof Proxy > "u")
    return t;
  const e = /* @__PURE__ */ new Map(), n = (...s) => (process.env.NODE_ENV !== "production" && Ne(!1, "motion() is deprecated. Use motion.create() instead."), t(...s));
  return new Proxy(n, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (s, i) => i === "create" ? t : (e.has(i) || e.set(i, t(i)), e.get(i))
  });
}
function Ue(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
const hn = (t) => Array.isArray(t);
function Ni(t, e) {
  if (!Array.isArray(e))
    return !1;
  const n = e.length;
  if (n !== t.length)
    return !1;
  for (let s = 0; s < n; s++)
    if (e[s] !== t[s])
      return !1;
  return !0;
}
function de(t) {
  return typeof t == "string" || Array.isArray(t);
}
function Ps(t) {
  const e = [{}, {}];
  return t == null || t.values.forEach((n, s) => {
    e[0][s] = n.get(), e[1][s] = n.getVelocity();
  }), e;
}
function Vn(t, e, n, s) {
  if (typeof e == "function") {
    const [i, o] = Ps(s);
    e = e(n !== void 0 ? n : t.custom, i, o);
  }
  if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
    const [i, o] = Ps(s);
    e = e(n !== void 0 ? n : t.custom, i, o);
  }
  return e;
}
function We(t, e, n) {
  const s = t.getProps();
  return Vn(s, e, n !== void 0 ? n : s.custom, t);
}
const En = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Rn = ["initial", ...En], ve = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], Bt = new Set(ve), St = (t) => t * 1e3, At = (t) => t / 1e3, Zo = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Jo = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Qo = {
  type: "keyframes",
  duration: 0.8
}, ta = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, ea = (t, { keyframes: e }) => e.length > 2 ? Qo : Bt.has(t) ? t.startsWith("scale") ? Jo(e[1]) : Zo : ta;
function Mn(t, e) {
  return t ? t[e] || t.default || t : void 0;
}
const na = {
  skipAnimations: !1,
  useManualTiming: !1
}, sa = (t) => t !== null;
function Ke(t, { repeat: e, repeatType: n = "loop" }, s) {
  const i = t.filter(sa), o = e && n !== "loop" && e % 2 === 1 ? 0 : i.length - 1;
  return !o || s === void 0 ? i[o] : s;
}
const ut = (t) => t;
let Qt = ut, Et = ut;
process.env.NODE_ENV !== "production" && (Qt = (t, e) => {
  !t && typeof console < "u" && console.warn(e);
}, Et = (t, e) => {
  if (!t)
    throw new Error(e);
});
function ia(t) {
  let e = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), s = !1, i = !1;
  const o = /* @__PURE__ */ new WeakSet();
  let r = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function a(l) {
    o.has(l) && (u.schedule(l), t()), l(r);
  }
  const u = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (l, c = !1, h = !1) => {
      const p = h && s ? e : n;
      return c && o.add(l), p.has(l) || p.add(l), l;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (l) => {
      n.delete(l), o.delete(l);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (l) => {
      if (r = l, s) {
        i = !0;
        return;
      }
      s = !0, [e, n] = [n, e], e.forEach(a), e.clear(), s = !1, i && (i = !1, u.process(l));
    }
  };
  return u;
}
const Ae = [
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
], ra = 40;
function Ui(t, e) {
  let n = !1, s = !0;
  const i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, o = () => n = !0, r = Ae.reduce((g, b) => (g[b] = ia(o), g), {}), { read: a, resolveKeyframes: u, update: l, preRender: c, render: h, postRender: d } = r, p = () => {
    const g = performance.now();
    n = !1, i.delta = s ? 1e3 / 60 : Math.max(Math.min(g - i.timestamp, ra), 1), i.timestamp = g, i.isProcessing = !0, a.process(i), u.process(i), l.process(i), c.process(i), h.process(i), d.process(i), i.isProcessing = !1, n && e && (s = !1, t(p));
  }, y = () => {
    n = !0, s = !0, i.isProcessing || t(p);
  };
  return { schedule: Ae.reduce((g, b) => {
    const D = r[b];
    return g[b] = (F, C = !1, _ = !1) => (n || y(), D.schedule(F, C, _)), g;
  }, {}), cancel: (g) => {
    for (let b = 0; b < Ae.length; b++)
      r[Ae[b]].cancel(g);
  }, state: i, steps: r };
}
const { schedule: K, cancel: Rt, state: et, steps: Je } = Ui(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ut, !0), Wi = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, oa = 1e-7, aa = 12;
function ua(t, e, n, s, i) {
  let o, r, a = 0;
  do
    r = e + (n - e) / 2, o = Wi(r, s, i) - t, o > 0 ? n = r : e = r;
  while (Math.abs(o) > oa && ++a < aa);
  return r;
}
function Te(t, e, n, s) {
  if (t === e && n === s)
    return ut;
  const i = (o) => ua(o, 0, 1, t, n);
  return (o) => o === 0 || o === 1 ? o : Wi(i(o), e, s);
}
const Ki = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, Yi = (t) => (e) => 1 - t(1 - e), Gi = /* @__PURE__ */ Te(0.33, 1.53, 0.69, 0.99), On = /* @__PURE__ */ Yi(Gi), Hi = /* @__PURE__ */ Ki(On), zi = (t) => (t *= 2) < 1 ? 0.5 * On(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), Ln = (t) => 1 - Math.sin(Math.acos(t)), Xi = Yi(Ln), qi = Ki(Ln), Zi = (t) => /^0[^.\s]+$/u.test(t);
function la(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || Zi(t) : !0;
}
const Ji = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t), Qi = (t) => (e) => typeof e == "string" && e.startsWith(t), tr = /* @__PURE__ */ Qi("--"), ca = /* @__PURE__ */ Qi("var(--"), _n = (t) => ca(t) ? fa.test(t.split("/*")[0].trim()) : !1, fa = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, ha = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function da(t) {
  const e = ha.exec(t);
  if (!e)
    return [,];
  const [, n, s, i] = e;
  return [`--${n ?? s}`, i];
}
const pa = 4;
function er(t, e, n = 1) {
  Et(n <= pa, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
  const [s, i] = da(t);
  if (!s)
    return;
  const o = window.getComputedStyle(e).getPropertyValue(s);
  if (o) {
    const r = o.trim();
    return Ji(r) ? parseFloat(r) : r;
  }
  return _n(i) ? er(i, e, n + 1) : i;
}
const Dt = (t, e, n) => n > e ? e : n < t ? t : n, te = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, pe = {
  ...te,
  transform: (t) => Dt(0, 1, t)
}, De = {
  ...te,
  default: 1
}, be = (t) => ({
  test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), Vt = /* @__PURE__ */ be("deg"), Pt = /* @__PURE__ */ be("%"), E = /* @__PURE__ */ be("px"), ma = /* @__PURE__ */ be("vh"), ga = /* @__PURE__ */ be("vw"), ws = {
  ...Pt,
  parse: (t) => Pt.parse(t) / 100,
  transform: (t) => Pt.transform(t * 100)
}, ya = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y",
  "translateX",
  "translateY"
]), As = (t) => t === te || t === E, Ds = (t, e) => parseFloat(t.split(", ")[e]), Cs = (t, e) => (n, { transform: s }) => {
  if (s === "none" || !s)
    return 0;
  const i = s.match(/^matrix3d\((.+)\)$/u);
  if (i)
    return Ds(i[1], e);
  {
    const o = s.match(/^matrix\((.+)\)$/u);
    return o ? Ds(o[1], t) : 0;
  }
}, va = /* @__PURE__ */ new Set(["x", "y", "z"]), Ta = ve.filter((t) => !va.has(t));
function ba(t) {
  const e = [];
  return Ta.forEach((n) => {
    const s = t.getValue(n);
    s !== void 0 && (e.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0));
  }), e;
}
const Xt = {
  // Dimensions
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  // Transform
  x: Cs(4, 13),
  y: Cs(5, 14)
};
Xt.translateX = Xt.x;
Xt.translateY = Xt.y;
const nr = (t) => (e) => e.test(t), xa = {
  test: (t) => t === "auto",
  parse: (t) => t
}, sr = [te, E, Pt, Vt, ga, ma, xa], Vs = (t) => sr.find(nr(t)), It = /* @__PURE__ */ new Set();
let dn = !1, pn = !1;
function ir() {
  if (pn) {
    const t = Array.from(It).filter((s) => s.needsMeasurement), e = new Set(t.map((s) => s.element)), n = /* @__PURE__ */ new Map();
    e.forEach((s) => {
      const i = ba(s);
      i.length && (n.set(s, i), s.render());
    }), t.forEach((s) => s.measureInitialState()), e.forEach((s) => {
      s.render();
      const i = n.get(s);
      i && i.forEach(([o, r]) => {
        var a;
        (a = s.getValue(o)) === null || a === void 0 || a.set(r);
      });
    }), t.forEach((s) => s.measureEndState()), t.forEach((s) => {
      s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
    });
  }
  pn = !1, dn = !1, It.forEach((t) => t.complete()), It.clear();
}
function rr() {
  It.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (pn = !0);
  });
}
function Sa() {
  rr(), ir();
}
class kn {
  constructor(e, n, s, i, o, r = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = s, this.motionValue = i, this.element = o, this.isAsync = r;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (It.add(this), dn || (dn = !0, K.read(rr), K.resolveKeyframes(ir))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, name: n, element: s, motionValue: i } = this;
    for (let o = 0; o < e.length; o++)
      if (e[o] === null)
        if (o === 0) {
          const r = i == null ? void 0 : i.get(), a = e[e.length - 1];
          if (r !== void 0)
            e[0] = r;
          else if (s && n) {
            const u = s.readValue(n, a);
            u != null && (e[0] = u);
          }
          e[0] === void 0 && (e[0] = a), i && r === void 0 && i.set(e[0]);
        } else
          e[o] = e[o - 1];
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete() {
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), It.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, It.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const le = (t) => Math.round(t * 1e5) / 1e5, jn = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Pa(t) {
  return t == null;
}
const wa = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Fn = (t, e) => (n) => !!(typeof n == "string" && wa.test(n) && n.startsWith(t) || e && !Pa(n) && Object.prototype.hasOwnProperty.call(n, e)), or = (t, e, n) => (s) => {
  if (typeof s != "string")
    return s;
  const [i, o, r, a] = s.match(jn);
  return {
    [t]: parseFloat(i),
    [e]: parseFloat(o),
    [n]: parseFloat(r),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, Aa = (t) => Dt(0, 255, t), Qe = {
  ...te,
  transform: (t) => Math.round(Aa(t))
}, Ft = {
  test: /* @__PURE__ */ Fn("rgb", "red"),
  parse: /* @__PURE__ */ or("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: n, alpha: s = 1 }) => "rgba(" + Qe.transform(t) + ", " + Qe.transform(e) + ", " + Qe.transform(n) + ", " + le(pe.transform(s)) + ")"
};
function Da(t) {
  let e = "", n = "", s = "", i = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), s = t.substring(5, 7), i = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), s = t.substring(3, 4), i = t.substring(4, 5), e += e, n += n, s += s, i += i), {
    red: parseInt(e, 16),
    green: parseInt(n, 16),
    blue: parseInt(s, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
const mn = {
  test: /* @__PURE__ */ Fn("#"),
  parse: Da,
  transform: Ft.transform
}, Kt = {
  test: /* @__PURE__ */ Fn("hsl", "hue"),
  parse: /* @__PURE__ */ or("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: n, alpha: s = 1 }) => "hsla(" + Math.round(t) + ", " + Pt.transform(le(e)) + ", " + Pt.transform(le(n)) + ", " + le(pe.transform(s)) + ")"
}, nt = {
  test: (t) => Ft.test(t) || mn.test(t) || Kt.test(t),
  parse: (t) => Ft.test(t) ? Ft.parse(t) : Kt.test(t) ? Kt.parse(t) : mn.parse(t),
  transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? Ft.transform(t) : Kt.transform(t)
}, Ca = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Va(t) {
  var e, n;
  return isNaN(t) && typeof t == "string" && (((e = t.match(jn)) === null || e === void 0 ? void 0 : e.length) || 0) + (((n = t.match(Ca)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const ar = "number", ur = "color", Ea = "var", Ra = "var(", Es = "${}", Ma = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function me(t) {
  const e = t.toString(), n = [], s = {
    color: [],
    number: [],
    var: []
  }, i = [];
  let o = 0;
  const a = e.replace(Ma, (u) => (nt.test(u) ? (s.color.push(o), i.push(ur), n.push(nt.parse(u))) : u.startsWith(Ra) ? (s.var.push(o), i.push(Ea), n.push(u)) : (s.number.push(o), i.push(ar), n.push(parseFloat(u))), ++o, Es)).split(Es);
  return { values: n, split: a, indexes: s, types: i };
}
function lr(t) {
  return me(t).values;
}
function cr(t) {
  const { split: e, types: n } = me(t), s = e.length;
  return (i) => {
    let o = "";
    for (let r = 0; r < s; r++)
      if (o += e[r], i[r] !== void 0) {
        const a = n[r];
        a === ar ? o += le(i[r]) : a === ur ? o += nt.transform(i[r]) : o += i[r];
      }
    return o;
  };
}
const Oa = (t) => typeof t == "number" ? 0 : t;
function La(t) {
  const e = lr(t);
  return cr(t)(e.map(Oa));
}
const Mt = {
  test: Va,
  parse: lr,
  createTransformer: cr,
  getAnimatableNone: La
}, _a = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function ka(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
    return t;
  const [s] = n.match(jn) || [];
  if (!s)
    return t;
  const i = n.replace(s, "");
  let o = _a.has(e) ? 1 : 0;
  return s !== n && (o *= 100), e + "(" + o + i + ")";
}
const ja = /\b([a-z-]*)\(.*?\)/gu, gn = {
  ...Mt,
  getAnimatableNone: (t) => {
    const e = t.match(ja);
    return e ? e.map(ka).join(" ") : t;
  }
}, Fa = {
  // Border props
  borderWidth: E,
  borderTopWidth: E,
  borderRightWidth: E,
  borderBottomWidth: E,
  borderLeftWidth: E,
  borderRadius: E,
  radius: E,
  borderTopLeftRadius: E,
  borderTopRightRadius: E,
  borderBottomRightRadius: E,
  borderBottomLeftRadius: E,
  // Positioning props
  width: E,
  maxWidth: E,
  height: E,
  maxHeight: E,
  top: E,
  right: E,
  bottom: E,
  left: E,
  // Spacing props
  padding: E,
  paddingTop: E,
  paddingRight: E,
  paddingBottom: E,
  paddingLeft: E,
  margin: E,
  marginTop: E,
  marginRight: E,
  marginBottom: E,
  marginLeft: E,
  // Misc
  backgroundPositionX: E,
  backgroundPositionY: E
}, Ia = {
  rotate: Vt,
  rotateX: Vt,
  rotateY: Vt,
  rotateZ: Vt,
  scale: De,
  scaleX: De,
  scaleY: De,
  scaleZ: De,
  skew: Vt,
  skewX: Vt,
  skewY: Vt,
  distance: E,
  translateX: E,
  translateY: E,
  translateZ: E,
  x: E,
  y: E,
  z: E,
  perspective: E,
  transformPerspective: E,
  opacity: pe,
  originX: ws,
  originY: ws,
  originZ: E
}, Rs = {
  ...te,
  transform: Math.round
}, In = {
  ...Fa,
  ...Ia,
  zIndex: Rs,
  size: E,
  // SVG
  fillOpacity: pe,
  strokeOpacity: pe,
  numOctaves: Rs
}, Ba = {
  ...In,
  // Color props
  color: nt,
  backgroundColor: nt,
  outlineColor: nt,
  fill: nt,
  stroke: nt,
  // Border props
  borderColor: nt,
  borderTopColor: nt,
  borderRightColor: nt,
  borderBottomColor: nt,
  borderLeftColor: nt,
  filter: gn,
  WebkitFilter: gn
}, Bn = (t) => Ba[t];
function fr(t, e) {
  let n = Bn(t);
  return n !== gn && (n = Mt), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
}
const $a = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function Na(t, e, n) {
  let s = 0, i;
  for (; s < t.length && !i; ) {
    const o = t[s];
    typeof o == "string" && !$a.has(o) && me(o).values.length && (i = t[s]), s++;
  }
  if (i && n)
    for (const o of e)
      t[o] = fr(n, i);
}
class hr extends kn {
  constructor(e, n, s, i, o) {
    super(e, n, s, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: n, name: s } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let u = 0; u < e.length; u++) {
      let l = e[u];
      if (typeof l == "string" && (l = l.trim(), _n(l))) {
        const c = er(l, n.current);
        c !== void 0 && (e[u] = c), u === e.length - 1 && (this.finalKeyframe = l);
      }
    }
    if (this.resolveNoneKeyframes(), !ya.has(s) || e.length !== 2)
      return;
    const [i, o] = e, r = Vs(i), a = Vs(o);
    if (r !== a)
      if (As(r) && As(a))
        for (let u = 0; u < e.length; u++) {
          const l = e[u];
          typeof l == "string" && (e[u] = parseFloat(l));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: n } = this, s = [];
    for (let i = 0; i < e.length; i++)
      la(e[i]) && s.push(i);
    s.length && Na(e, s, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: s } = this;
    if (!e || !e.current)
      return;
    s === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Xt[s](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0] = this.measuredOrigin;
    const i = n[n.length - 1];
    i !== void 0 && e.getValue(s, i).jump(i, !1);
  }
  measureEndState() {
    var e;
    const { element: n, name: s, unresolvedKeyframes: i } = this;
    if (!n || !n.current)
      return;
    const o = n.getValue(s);
    o && o.jump(this.measuredOrigin, !1);
    const r = i.length - 1, a = i[r];
    i[r] = Xt[s](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((e = this.removedTransforms) === null || e === void 0) && e.length && this.removedTransforms.forEach(([u, l]) => {
      n.getValue(u).set(l);
    }), this.resolveNoneKeyframes();
  }
}
function $n(t) {
  return typeof t == "function";
}
let Ee;
function Ua() {
  Ee = void 0;
}
const wt = {
  now: () => (Ee === void 0 && wt.set(et.isProcessing || na.useManualTiming ? et.timestamp : performance.now()), Ee),
  set: (t) => {
    Ee = t, queueMicrotask(Ua);
  }
}, Ms = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(Mt.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url("));
function Wa(t) {
  const e = t[0];
  if (t.length === 1)
    return !0;
  for (let n = 0; n < t.length; n++)
    if (t[n] !== e)
      return !0;
}
function Ka(t, e, n, s) {
  const i = t[0];
  if (i === null)
    return !1;
  if (e === "display" || e === "visibility")
    return !0;
  const o = t[t.length - 1], r = Ms(i, e), a = Ms(o, e);
  return Qt(r === a, `You are trying to animate ${e} from "${i}" to "${o}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${o} via the \`style\` property.`), !r || !a ? !1 : Wa(t) || (n === "spring" || $n(n)) && s;
}
const Ya = 40;
class dr {
  constructor({ autoplay: e = !0, delay: n = 0, type: s = "keyframes", repeat: i = 0, repeatDelay: o = 0, repeatType: r = "loop", ...a }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = wt.now(), this.options = {
      autoplay: e,
      delay: n,
      type: s,
      repeat: i,
      repeatDelay: o,
      repeatType: r,
      ...a
    }, this.updateFinishedPromise();
  }
  /**
   * This method uses the createdAt and resolvedAt to calculate the
   * animation startTime. *Ideally*, we would use the createdAt time as t=0
   * as the following frame would then be the first frame of the animation in
   * progress, which would feel snappier.
   *
   * However, if there's a delay (main thread work) between the creation of
   * the animation and the first commited frame, we prefer to use resolvedAt
   * to avoid a sudden jump into the animation.
   */
  calcStartTime() {
    return this.resolvedAt ? this.resolvedAt - this.createdAt > Ya ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && Sa(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(e, n) {
    this.resolvedAt = wt.now(), this.hasAttemptedResolve = !0;
    const { name: s, type: i, velocity: o, delay: r, onComplete: a, onUpdate: u, isGenerator: l } = this.options;
    if (!l && !Ka(e, s, i, o))
      if (r)
        this.options.duration = 0;
      else {
        u == null || u(Ke(e, this.options, n)), a == null || a(), this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(e, n);
    c !== !1 && (this._resolved = {
      keyframes: e,
      finalKeyframe: n,
      ...c
    }, this.onPostResolved());
  }
  onPostResolved() {
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(e, n) {
    return this.currentFinishedPromise.then(e, n);
  }
  flatten() {
    this.options.type = "keyframes", this.options.ease = "linear";
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((e) => {
      this.resolveFinishedPromise = e;
    });
  }
}
const qt = (t, e, n) => {
  const s = e - t;
  return s === 0 ? 1 : (n - t) / s;
}, pr = (t, e, n = 10) => {
  let s = "";
  const i = Math.max(Math.round(e / n), 2);
  for (let o = 0; o < i; o++)
    s += t(qt(0, i - 1, o)) + ", ";
  return `linear(${s.substring(0, s.length - 2)})`;
};
function mr(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const Ga = 5;
function gr(t, e, n) {
  const s = Math.max(e - Ga, 0);
  return mr(n - t(s), e - s);
}
const H = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, Os = 1e-3;
function Ha({ duration: t = H.duration, bounce: e = H.bounce, velocity: n = H.velocity, mass: s = H.mass }) {
  let i, o;
  Qt(t <= St(H.maxDuration), "Spring duration must be 10 seconds or less");
  let r = 1 - e;
  r = Dt(H.minDamping, H.maxDamping, r), t = Dt(H.minDuration, H.maxDuration, At(t)), r < 1 ? (i = (l) => {
    const c = l * r, h = c * t, d = c - n, p = yn(l, r), y = Math.exp(-h);
    return Os - d / p * y;
  }, o = (l) => {
    const h = l * r * t, d = h * n + n, p = Math.pow(r, 2) * Math.pow(l, 2) * t, y = Math.exp(-h), v = yn(Math.pow(l, 2), r);
    return (-i(l) + Os > 0 ? -1 : 1) * ((d - p) * y) / v;
  }) : (i = (l) => {
    const c = Math.exp(-l * t), h = (l - n) * t + 1;
    return -1e-3 + c * h;
  }, o = (l) => {
    const c = Math.exp(-l * t), h = (n - l) * (t * t);
    return c * h;
  });
  const a = 5 / t, u = Xa(i, o, a);
  if (t = St(t), isNaN(u))
    return {
      stiffness: H.stiffness,
      damping: H.damping,
      duration: t
    };
  {
    const l = Math.pow(u, 2) * s;
    return {
      stiffness: l,
      damping: r * 2 * Math.sqrt(s * l),
      duration: t
    };
  }
}
const za = 12;
function Xa(t, e, n) {
  let s = n;
  for (let i = 1; i < za; i++)
    s = s - t(s) / e(s);
  return s;
}
function yn(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const vn = 2e4;
function yr(t) {
  let e = 0;
  const n = 50;
  let s = t.next(e);
  for (; !s.done && e < vn; )
    e += n, s = t.next(e);
  return e >= vn ? 1 / 0 : e;
}
const qa = ["duration", "bounce"], Za = ["stiffness", "damping", "mass"];
function Ls(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function Ja(t) {
  let e = {
    velocity: H.velocity,
    stiffness: H.stiffness,
    damping: H.damping,
    mass: H.mass,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!Ls(t, Za) && Ls(t, qa))
    if (t.visualDuration) {
      const n = t.visualDuration, s = 2 * Math.PI / (n * 1.2), i = s * s, o = 2 * Dt(0.05, 1, 1 - t.bounce) * Math.sqrt(i);
      e = {
        ...e,
        mass: H.mass,
        stiffness: i,
        damping: o
      };
    } else {
      const n = Ha(t);
      e = {
        ...e,
        ...n,
        mass: H.mass
      }, e.isResolvedFromDuration = !0;
    }
  return e;
}
function vr(t = H.visualDuration, e = H.bounce) {
  const n = typeof t != "object" ? {
    visualDuration: t,
    keyframes: [0, 1],
    bounce: e
  } : t;
  let { restSpeed: s, restDelta: i } = n;
  const o = n.keyframes[0], r = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: o }, { stiffness: u, damping: l, mass: c, duration: h, velocity: d, isResolvedFromDuration: p } = Ja({
    ...n,
    velocity: -At(n.velocity || 0)
  }), y = d || 0, v = l / (2 * Math.sqrt(u * c)), S = r - o, g = At(Math.sqrt(u / c)), b = Math.abs(S) < 5;
  s || (s = b ? H.restSpeed.granular : H.restSpeed.default), i || (i = b ? H.restDelta.granular : H.restDelta.default);
  let D;
  if (v < 1) {
    const C = yn(g, v);
    D = (_) => {
      const W = Math.exp(-v * g * _);
      return r - W * ((y + v * g * S) / C * Math.sin(C * _) + S * Math.cos(C * _));
    };
  } else if (v === 1)
    D = (C) => r - Math.exp(-g * C) * (S + (y + g * S) * C);
  else {
    const C = g * Math.sqrt(v * v - 1);
    D = (_) => {
      const W = Math.exp(-v * g * _), L = Math.min(C * _, 300);
      return r - W * ((y + v * g * S) * Math.sinh(L) + C * S * Math.cosh(L)) / C;
    };
  }
  const F = {
    calculatedDuration: p && h || null,
    next: (C) => {
      const _ = D(C);
      if (p)
        a.done = C >= h;
      else {
        let W = 0;
        v < 1 && (W = C === 0 ? St(y) : gr(D, C, _));
        const L = Math.abs(W) <= s, Y = Math.abs(r - _) <= i;
        a.done = L && Y;
      }
      return a.value = a.done ? r : _, a;
    },
    toString: () => {
      const C = Math.min(yr(F), vn), _ = pr((W) => F.next(C * W).value, C, 30);
      return C + "ms " + _;
    }
  };
  return F;
}
function _s({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: s = 325, bounceDamping: i = 10, bounceStiffness: o = 500, modifyTarget: r, min: a, max: u, restDelta: l = 0.5, restSpeed: c }) {
  const h = t[0], d = {
    done: !1,
    value: h
  }, p = (L) => a !== void 0 && L < a || u !== void 0 && L > u, y = (L) => a === void 0 ? u : u === void 0 || Math.abs(a - L) < Math.abs(u - L) ? a : u;
  let v = n * e;
  const S = h + v, g = r === void 0 ? S : r(S);
  g !== S && (v = g - h);
  const b = (L) => -v * Math.exp(-L / s), D = (L) => g + b(L), F = (L) => {
    const Y = b(L), B = D(L);
    d.done = Math.abs(Y) <= l, d.value = d.done ? g : B;
  };
  let C, _;
  const W = (L) => {
    p(d.value) && (C = L, _ = vr({
      keyframes: [d.value, y(d.value)],
      velocity: gr(D, L, d.value),
      // TODO: This should be passing * 1000
      damping: i,
      stiffness: o,
      restDelta: l,
      restSpeed: c
    }));
  };
  return W(0), {
    calculatedDuration: null,
    next: (L) => {
      let Y = !1;
      return !_ && C === void 0 && (Y = !0, F(L), W(L)), C !== void 0 && L >= C ? _.next(L - C) : (!Y && F(L), d);
    }
  };
}
const Qa = /* @__PURE__ */ Te(0.42, 0, 1, 1), tu = /* @__PURE__ */ Te(0, 0, 0.58, 1), Tr = /* @__PURE__ */ Te(0.42, 0, 0.58, 1), eu = (t) => Array.isArray(t) && typeof t[0] != "number", Nn = (t) => Array.isArray(t) && typeof t[0] == "number", ks = {
  linear: ut,
  easeIn: Qa,
  easeInOut: Tr,
  easeOut: tu,
  circIn: Ln,
  circInOut: qi,
  circOut: Xi,
  backIn: On,
  backInOut: Hi,
  backOut: Gi,
  anticipate: zi
}, js = (t) => {
  if (Nn(t)) {
    Et(t.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [e, n, s, i] = t;
    return Te(e, n, s, i);
  } else if (typeof t == "string")
    return Et(ks[t] !== void 0, `Invalid easing type '${t}'`), ks[t];
  return t;
}, nu = (t, e) => (n) => e(t(n)), xe = (...t) => t.reduce(nu), z = (t, e, n) => t + (e - t) * n;
function tn(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function su({ hue: t, saturation: e, lightness: n, alpha: s }) {
  t /= 360, e /= 100, n /= 100;
  let i = 0, o = 0, r = 0;
  if (!e)
    i = o = r = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e, u = 2 * n - a;
    i = tn(u, a, t + 1 / 3), o = tn(u, a, t), r = tn(u, a, t - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(r * 255),
    alpha: s
  };
}
function Oe(t, e) {
  return (n) => n > 0 ? e : t;
}
const en = (t, e, n) => {
  const s = t * t, i = n * (e * e - s) + s;
  return i < 0 ? 0 : Math.sqrt(i);
}, iu = [mn, Ft, Kt], ru = (t) => iu.find((e) => e.test(t));
function Fs(t) {
  const e = ru(t);
  if (Qt(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`), !e)
    return !1;
  let n = e.parse(t);
  return e === Kt && (n = su(n)), n;
}
const Is = (t, e) => {
  const n = Fs(t), s = Fs(e);
  if (!n || !s)
    return Oe(t, e);
  const i = { ...n };
  return (o) => (i.red = en(n.red, s.red, o), i.green = en(n.green, s.green, o), i.blue = en(n.blue, s.blue, o), i.alpha = z(n.alpha, s.alpha, o), Ft.transform(i));
}, Tn = /* @__PURE__ */ new Set(["none", "hidden"]);
function ou(t, e) {
  return Tn.has(t) ? (n) => n <= 0 ? t : e : (n) => n >= 1 ? e : t;
}
function au(t, e) {
  return (n) => z(t, e, n);
}
function Un(t) {
  return typeof t == "number" ? au : typeof t == "string" ? _n(t) ? Oe : nt.test(t) ? Is : cu : Array.isArray(t) ? br : typeof t == "object" ? nt.test(t) ? Is : uu : Oe;
}
function br(t, e) {
  const n = [...t], s = n.length, i = t.map((o, r) => Un(o)(o, e[r]));
  return (o) => {
    for (let r = 0; r < s; r++)
      n[r] = i[r](o);
    return n;
  };
}
function uu(t, e) {
  const n = { ...t, ...e }, s = {};
  for (const i in n)
    t[i] !== void 0 && e[i] !== void 0 && (s[i] = Un(t[i])(t[i], e[i]));
  return (i) => {
    for (const o in s)
      n[o] = s[o](i);
    return n;
  };
}
function lu(t, e) {
  var n;
  const s = [], i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < e.values.length; o++) {
    const r = e.types[o], a = t.indexes[r][i[r]], u = (n = t.values[a]) !== null && n !== void 0 ? n : 0;
    s[o] = u, i[r]++;
  }
  return s;
}
const cu = (t, e) => {
  const n = Mt.createTransformer(e), s = me(t), i = me(e);
  return s.indexes.var.length === i.indexes.var.length && s.indexes.color.length === i.indexes.color.length && s.indexes.number.length >= i.indexes.number.length ? Tn.has(t) && !i.values.length || Tn.has(e) && !s.values.length ? ou(t, e) : xe(br(lu(s, i), i.values), n) : (Qt(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), Oe(t, e));
};
function xr(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number" ? z(t, e, n) : Un(t)(t, e);
}
function fu(t, e, n) {
  const s = [], i = n || xr, o = t.length - 1;
  for (let r = 0; r < o; r++) {
    let a = i(t[r], t[r + 1]);
    if (e) {
      const u = Array.isArray(e) ? e[r] || ut : e;
      a = xe(u, a);
    }
    s.push(a);
  }
  return s;
}
function hu(t, e, { clamp: n = !0, ease: s, mixer: i } = {}) {
  const o = t.length;
  if (Et(o === e.length, "Both input and output ranges must be the same length"), o === 1)
    return () => e[0];
  if (o === 2 && t[0] === t[1])
    return () => e[1];
  t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const r = fu(e, s, i), a = r.length, u = (l) => {
    let c = 0;
    if (a > 1)
      for (; c < t.length - 2 && !(l < t[c + 1]); c++)
        ;
    const h = qt(t[c], t[c + 1], l);
    return r[c](h);
  };
  return n ? (l) => u(Dt(t[0], t[o - 1], l)) : u;
}
function du(t, e) {
  const n = t[t.length - 1];
  for (let s = 1; s <= e; s++) {
    const i = qt(0, e, s);
    t.push(z(n, 1, i));
  }
}
function pu(t) {
  const e = [0];
  return du(e, t.length - 1), e;
}
function mu(t, e) {
  return t.map((n) => n * e);
}
function gu(t, e) {
  return t.map(() => e || Tr).splice(0, t.length - 1);
}
function Le({ duration: t = 300, keyframes: e, times: n, ease: s = "easeInOut" }) {
  const i = eu(s) ? s.map(js) : js(s), o = {
    done: !1,
    value: e[0]
  }, r = mu(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === e.length ? n : pu(e),
    t
  ), a = hu(r, e, {
    ease: Array.isArray(i) ? i : gu(e, i)
  });
  return {
    calculatedDuration: t,
    next: (u) => (o.value = a(u), o.done = u >= t, o)
  };
}
const yu = (t) => {
  const e = ({ timestamp: n }) => t(n);
  return {
    start: () => K.update(e, !0),
    stop: () => Rt(e),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => et.isProcessing ? et.timestamp : wt.now()
  };
}, vu = {
  decay: _s,
  inertia: _s,
  tween: Le,
  keyframes: Le,
  spring: vr
}, Tu = (t) => t / 100;
class Wn extends dr {
  constructor(e) {
    super(e), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: u } = this.options;
      u && u();
    };
    const { name: n, motionValue: s, element: i, keyframes: o } = this.options, r = (i == null ? void 0 : i.KeyframeResolver) || kn, a = (u, l) => this.onKeyframesResolved(u, l);
    this.resolver = new r(o, a, n, s, i), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(e) {
    const { type: n = "keyframes", repeat: s = 0, repeatDelay: i = 0, repeatType: o, velocity: r = 0 } = this.options, a = $n(n) ? n : vu[n] || Le;
    let u, l;
    a !== Le && typeof e[0] != "number" && (process.env.NODE_ENV !== "production" && Et(e.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${e}`), u = xe(Tu, xr(e[0], e[1])), e = [0, 100]);
    const c = a({ ...this.options, keyframes: e });
    o === "mirror" && (l = a({
      ...this.options,
      keyframes: [...e].reverse(),
      velocity: -r
    })), c.calculatedDuration === null && (c.calculatedDuration = yr(c));
    const { calculatedDuration: h } = c, d = h + i, p = d * (s + 1) - i;
    return {
      generator: c,
      mirroredGenerator: l,
      mapPercentToKeyframes: u,
      calculatedDuration: h,
      resolvedDuration: d,
      totalDuration: p
    };
  }
  onPostResolved() {
    const { autoplay: e = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !e ? this.pause() : this.state = this.pendingPlayState;
  }
  tick(e, n = !1) {
    const { resolved: s } = this;
    if (!s) {
      const { keyframes: L } = this.options;
      return { done: !0, value: L[L.length - 1] };
    }
    const { finalKeyframe: i, generator: o, mirroredGenerator: r, mapPercentToKeyframes: a, keyframes: u, calculatedDuration: l, totalDuration: c, resolvedDuration: h } = s;
    if (this.startTime === null)
      return o.next(0);
    const { delay: d, repeat: p, repeatType: y, repeatDelay: v, onUpdate: S } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - c / this.speed, this.startTime)), n ? this.currentTime = e : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
    const g = this.currentTime - d * (this.speed >= 0 ? 1 : -1), b = this.speed >= 0 ? g < 0 : g > c;
    this.currentTime = Math.max(g, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    let D = this.currentTime, F = o;
    if (p) {
      const L = Math.min(this.currentTime, c) / h;
      let Y = Math.floor(L), B = L % 1;
      !B && L >= 1 && (B = 1), B === 1 && Y--, Y = Math.min(Y, p + 1), !!(Y % 2) && (y === "reverse" ? (B = 1 - B, v && (B -= v / h)) : y === "mirror" && (F = r)), D = Dt(0, 1, B) * h;
    }
    const C = b ? { done: !1, value: u[0] } : F.next(D);
    a && (C.value = a(C.value));
    let { done: _ } = C;
    !b && l !== null && (_ = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const W = this.holdTime === null && (this.state === "finished" || this.state === "running" && _);
    return W && i !== void 0 && (C.value = Ke(u, this.options, i)), S && S(C.value), W && this.finish(), C;
  }
  get duration() {
    const { resolved: e } = this;
    return e ? At(e.calculatedDuration) : 0;
  }
  get time() {
    return At(this.currentTime);
  }
  set time(e) {
    e = St(e), this.currentTime = e, this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    const n = this.playbackSpeed !== e;
    this.playbackSpeed = e, n && (this.time = At(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: e = yu, onPlay: n, startTime: s } = this.options;
    this.driver || (this.driver = e((o) => this.tick(o))), n && n();
    const i = this.driver.now();
    this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = i) : this.startTime = s ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    var e;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    this.state = "paused", this.holdTime = (e = this.currentTime) !== null && e !== void 0 ? e : 0;
  }
  complete() {
    this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.teardown(), this.state = "finished";
    const { onComplete: e } = this.options;
    e && e();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(e) {
    return this.startTime = 0, this.tick(e, !0);
  }
}
const bu = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function Kn(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const xu = {
  linearEasing: void 0
};
function Su(t, e) {
  const n = Kn(t);
  return () => {
    var s;
    return (s = xu[e]) !== null && s !== void 0 ? s : n();
  };
}
const _e = /* @__PURE__ */ Su(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing");
function Sr(t) {
  return !!(typeof t == "function" && _e() || !t || typeof t == "string" && (t in bn || _e()) || Nn(t) || Array.isArray(t) && t.every(Sr));
}
const re = ([t, e, n, s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`, bn = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ re([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ re([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ re([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ re([0.33, 1.53, 0.69, 0.99])
};
function Pr(t, e) {
  if (t)
    return typeof t == "function" && _e() ? pr(t, e) : Nn(t) ? re(t) : Array.isArray(t) ? t.map((n) => Pr(n, e) || bn.easeOut) : bn[t];
}
function Pu(t, e, n, { delay: s = 0, duration: i = 300, repeat: o = 0, repeatType: r = "loop", ease: a = "easeInOut", times: u } = {}) {
  const l = { [e]: n };
  u && (l.offset = u);
  const c = Pr(a, i);
  return Array.isArray(c) && (l.easing = c), t.animate(l, {
    delay: s,
    duration: i,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: o + 1,
    direction: r === "reverse" ? "alternate" : "normal"
  });
}
function Bs(t, e) {
  t.timeline = e, t.onfinish = null;
}
const wu = /* @__PURE__ */ Kn(() => Object.hasOwnProperty.call(Element.prototype, "animate")), ke = 10, Au = 2e4;
function Du(t) {
  return $n(t.type) || t.type === "spring" || !Sr(t.ease);
}
function Cu(t, e) {
  const n = new Wn({
    ...e,
    keyframes: t,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let s = { done: !1, value: t[0] };
  const i = [];
  let o = 0;
  for (; !s.done && o < Au; )
    s = n.sample(o), i.push(s.value), o += ke;
  return {
    times: void 0,
    keyframes: i,
    duration: o - ke,
    ease: "linear"
  };
}
const wr = {
  anticipate: zi,
  backInOut: Hi,
  circInOut: qi
};
function Vu(t) {
  return t in wr;
}
class $s extends dr {
  constructor(e) {
    super(e);
    const { name: n, motionValue: s, element: i, keyframes: o } = this.options;
    this.resolver = new hr(o, (r, a) => this.onKeyframesResolved(r, a), n, s, i), this.resolver.scheduleResolve();
  }
  initPlayback(e, n) {
    var s;
    let { duration: i = 300, times: o, ease: r, type: a, motionValue: u, name: l, startTime: c } = this.options;
    if (!(!((s = u.owner) === null || s === void 0) && s.current))
      return !1;
    if (typeof r == "string" && _e() && Vu(r) && (r = wr[r]), Du(this.options)) {
      const { onComplete: d, onUpdate: p, motionValue: y, element: v, ...S } = this.options, g = Cu(e, S);
      e = g.keyframes, e.length === 1 && (e[1] = e[0]), i = g.duration, o = g.times, r = g.ease, a = "keyframes";
    }
    const h = Pu(u.owner.current, l, e, { ...this.options, duration: i, times: o, ease: r });
    return h.startTime = c ?? this.calcStartTime(), this.pendingTimeline ? (Bs(h, this.pendingTimeline), this.pendingTimeline = void 0) : h.onfinish = () => {
      const { onComplete: d } = this.options;
      u.set(Ke(e, this.options, n)), d && d(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: h,
      duration: i,
      times: o,
      type: a,
      ease: r,
      keyframes: e
    };
  }
  get duration() {
    const { resolved: e } = this;
    if (!e)
      return 0;
    const { duration: n } = e;
    return At(n);
  }
  get time() {
    const { resolved: e } = this;
    if (!e)
      return 0;
    const { animation: n } = e;
    return At(n.currentTime || 0);
  }
  set time(e) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: s } = n;
    s.currentTime = St(e);
  }
  get speed() {
    const { resolved: e } = this;
    if (!e)
      return 1;
    const { animation: n } = e;
    return n.playbackRate;
  }
  set speed(e) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: s } = n;
    s.playbackRate = e;
  }
  get state() {
    const { resolved: e } = this;
    if (!e)
      return "idle";
    const { animation: n } = e;
    return n.playState;
  }
  get startTime() {
    const { resolved: e } = this;
    if (!e)
      return null;
    const { animation: n } = e;
    return n.startTime;
  }
  /**
   * Replace the default DocumentTimeline with another AnimationTimeline.
   * Currently used for scroll animations.
   */
  attachTimeline(e) {
    if (!this._resolved)
      this.pendingTimeline = e;
    else {
      const { resolved: n } = this;
      if (!n)
        return ut;
      const { animation: s } = n;
      Bs(s, e);
    }
    return ut;
  }
  play() {
    if (this.isStopped)
      return;
    const { resolved: e } = this;
    if (!e)
      return;
    const { animation: n } = e;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: e } = this;
    if (!e)
      return;
    const { animation: n } = e;
    n.pause();
  }
  stop() {
    if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: e } = this;
    if (!e)
      return;
    const { animation: n, keyframes: s, duration: i, type: o, ease: r, times: a } = e;
    if (n.playState === "idle" || n.playState === "finished")
      return;
    if (this.time) {
      const { motionValue: l, onUpdate: c, onComplete: h, element: d, ...p } = this.options, y = new Wn({
        ...p,
        keyframes: s,
        duration: i,
        type: o,
        ease: r,
        times: a,
        isGenerator: !0
      }), v = St(this.time);
      l.setWithVelocity(y.sample(v - ke).value, y.sample(v).value, ke);
    }
    const { onStop: u } = this.options;
    u && u(), this.cancel();
  }
  complete() {
    const { resolved: e } = this;
    e && e.animation.finish();
  }
  cancel() {
    const { resolved: e } = this;
    e && e.animation.cancel();
  }
  static supports(e) {
    const { motionValue: n, name: s, repeatDelay: i, repeatType: o, damping: r, type: a } = e;
    return wu() && s && bu.has(s) && n && n.owner && n.owner.current instanceof HTMLElement && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !n.owner.getProps().onUpdate && !i && o !== "mirror" && r !== 0 && a !== "inertia";
  }
}
const Eu = Kn(() => window.ScrollTimeline !== void 0);
class Ru {
  constructor(e) {
    this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean);
  }
  then(e, n) {
    return Promise.all(this.animations).then(e).catch(n);
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(e) {
    return this.animations[0][e];
  }
  setAll(e, n) {
    for (let s = 0; s < this.animations.length; s++)
      this.animations[s][e] = n;
  }
  attachTimeline(e, n) {
    const s = this.animations.map((i) => Eu() && i.attachTimeline ? i.attachTimeline(e) : n(i));
    return () => {
      s.forEach((i, o) => {
        i && i(), this.animations[o].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(e) {
    this.setAll("time", e);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(e) {
    this.setAll("speed", e);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let e = 0;
    for (let n = 0; n < this.animations.length; n++)
      e = Math.max(e, this.animations[n].duration);
    return e;
  }
  runAll(e) {
    this.animations.forEach((n) => n[e]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
function Mu({ when: t, delay: e, delayChildren: n, staggerChildren: s, staggerDirection: i, repeat: o, repeatType: r, repeatDelay: a, from: u, elapsed: l, ...c }) {
  return !!Object.keys(c).length;
}
const Yn = (t, e, n, s = {}, i, o) => (r) => {
  const a = Mn(s, t) || {}, u = a.delay || s.delay || 0;
  let { elapsed: l = 0 } = s;
  l = l - St(u);
  let c = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: e.getVelocity(),
    ...a,
    delay: -l,
    onUpdate: (d) => {
      e.set(d), a.onUpdate && a.onUpdate(d);
    },
    onComplete: () => {
      r(), a.onComplete && a.onComplete();
    },
    name: t,
    motionValue: e,
    element: o ? void 0 : i
  };
  Mu(a) || (c = {
    ...c,
    ...ea(t, c)
  }), c.duration && (c.duration = St(c.duration)), c.repeatDelay && (c.repeatDelay = St(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let h = !1;
  if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (h = !0)), h && !o && e.get() !== void 0) {
    const d = Ke(c.keyframes, a);
    if (d !== void 0)
      return K.update(() => {
        c.onUpdate(d), c.onComplete();
      }), new Ru([]);
  }
  return !o && $s.supports(c) ? new $s(c) : new Wn(c);
}, Ou = (t) => !!(t && typeof t == "object" && t.mix && t.toValue), Lu = (t) => hn(t) ? t[t.length - 1] || 0 : t;
function Gn(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function Hn(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
class zn {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return Gn(this.subscriptions, e), () => Hn(this.subscriptions, e);
  }
  notify(e, n, s) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1)
        this.subscriptions[0](e, n, s);
      else
        for (let o = 0; o < i; o++) {
          const r = this.subscriptions[o];
          r && r(e, n, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Ns = 30, _u = (t) => !isNaN(parseFloat(t));
class ku {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(e, n = {}) {
    this.version = "11.15.0", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (s, i = !0) => {
      const o = wt.now();
      this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(s), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), i && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(e), this.owner = n.owner;
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = wt.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = _u(this.current));
  }
  setPrevFrameValue(e = this.current) {
    this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(e) {
    return process.env.NODE_ENV !== "production" && Ne(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new zn());
    const s = this.events[e].add(n);
    return e === "change" ? () => {
      s(), K.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : s;
  }
  clearListeners() {
    for (const e in this.events)
      this.events[e].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(e, n) {
    this.passiveEffect = e, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(e, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(e, n) : this.passiveEffect(e, this.updateAndNotify);
  }
  setWithVelocity(e, n, s) {
    this.set(n), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - s;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(e, n = !0) {
    this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const e = wt.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Ns)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Ns);
    return mr(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(e) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = e(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function ge(t, e) {
  return new ku(t, e);
}
function ju(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, ge(n));
}
function Fu(t, e) {
  const n = We(t, e);
  let { transitionEnd: s = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...s };
  for (const r in o) {
    const a = Lu(o[r]);
    ju(t, r, a);
  }
}
const Xn = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Iu = "framerAppearId", Ar = "data-" + Xn(Iu);
function Dr(t) {
  return t.props[Ar];
}
const st = (t) => !!(t && t.getVelocity);
function Bu(t) {
  return !!(st(t) && t.add);
}
function xn(t, e) {
  const n = t.getValue("willChange");
  if (Bu(n))
    return n.add(e);
}
function $u({ protectedKeys: t, needsAnimating: e }, n) {
  const s = t.hasOwnProperty(n) && e[n] !== !0;
  return e[n] = !1, s;
}
function Cr(t, e, { delay: n = 0, transitionOverride: s, type: i } = {}) {
  var o;
  let { transition: r = t.getDefaultTransition(), transitionEnd: a, ...u } = e;
  s && (r = s);
  const l = [], c = i && t.animationState && t.animationState.getState()[i];
  for (const h in u) {
    const d = t.getValue(h, (o = t.latestValues[h]) !== null && o !== void 0 ? o : null), p = u[h];
    if (p === void 0 || c && $u(c, h))
      continue;
    const y = {
      delay: n,
      ...Mn(r || {}, h)
    };
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const g = Dr(t);
      if (g) {
        const b = window.MotionHandoffAnimation(g, h, K);
        b !== null && (y.startTime = b, v = !0);
      }
    }
    xn(t, h), d.start(Yn(h, d, p, t.shouldReduceMotion && Bt.has(h) ? { type: !1 } : y, t, v));
    const S = d.animation;
    S && l.push(S);
  }
  return a && Promise.all(l).then(() => {
    K.update(() => {
      a && Fu(t, a);
    });
  }), l;
}
function Sn(t, e, n = {}) {
  var s;
  const i = We(t, e, n.type === "exit" ? (s = t.presenceContext) === null || s === void 0 ? void 0 : s.custom : void 0);
  let { transition: o = t.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (o = n.transitionOverride);
  const r = i ? () => Promise.all(Cr(t, i, n)) : () => Promise.resolve(), a = t.variantChildren && t.variantChildren.size ? (l = 0) => {
    const { delayChildren: c = 0, staggerChildren: h, staggerDirection: d } = o;
    return Nu(t, e, c + l, h, d, n);
  } : () => Promise.resolve(), { when: u } = o;
  if (u) {
    const [l, c] = u === "beforeChildren" ? [r, a] : [a, r];
    return l().then(() => c());
  } else
    return Promise.all([r(), a(n.delay)]);
}
function Nu(t, e, n = 0, s = 0, i = 1, o) {
  const r = [], a = (t.variantChildren.size - 1) * s, u = i === 1 ? (l = 0) => l * s : (l = 0) => a - l * s;
  return Array.from(t.variantChildren).sort(Uu).forEach((l, c) => {
    l.notify("AnimationStart", e), r.push(Sn(l, e, {
      ...o,
      delay: n + u(c)
    }).then(() => l.notify("AnimationComplete", e)));
  }), Promise.all(r);
}
function Uu(t, e) {
  return t.sortNodePosition(e);
}
function Wu(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let s;
  if (Array.isArray(e)) {
    const i = e.map((o) => Sn(t, o, n));
    s = Promise.all(i);
  } else if (typeof e == "string")
    s = Sn(t, e, n);
  else {
    const i = typeof e == "function" ? We(t, e, n.custom) : e;
    s = Promise.all(Cr(t, i, n));
  }
  return s.then(() => {
    t.notify("AnimationComplete", e);
  });
}
const Ku = Rn.length;
function Vr(t) {
  if (!t)
    return;
  if (!t.isControllingVariants) {
    const n = t.parent ? Vr(t.parent) || {} : {};
    return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
  }
  const e = {};
  for (let n = 0; n < Ku; n++) {
    const s = Rn[n], i = t.props[s];
    (de(i) || i === !1) && (e[s] = i);
  }
  return e;
}
const Yu = [...En].reverse(), Gu = En.length;
function Hu(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: s }) => Wu(t, n, s)));
}
function zu(t) {
  let e = Hu(t), n = Us(), s = !0;
  const i = (u) => (l, c) => {
    var h;
    const d = We(t, c, u === "exit" ? (h = t.presenceContext) === null || h === void 0 ? void 0 : h.custom : void 0);
    if (d) {
      const { transition: p, transitionEnd: y, ...v } = d;
      l = { ...l, ...v, ...y };
    }
    return l;
  };
  function o(u) {
    e = u(t);
  }
  function r(u) {
    const { props: l } = t, c = Vr(t.parent) || {}, h = [], d = /* @__PURE__ */ new Set();
    let p = {}, y = 1 / 0;
    for (let S = 0; S < Gu; S++) {
      const g = Yu[S], b = n[g], D = l[g] !== void 0 ? l[g] : c[g], F = de(D), C = g === u ? b.isActive : null;
      C === !1 && (y = S);
      let _ = D === c[g] && D !== l[g] && F;
      if (_ && s && t.manuallyAnimateOnMount && (_ = !1), b.protectedKeys = { ...p }, // If it isn't active and hasn't *just* been set as inactive
      !b.isActive && C === null || // If we didn't and don't have any defined prop for this animation type
      !D && !b.prevProp || // Or if the prop doesn't define an animation
      Ue(D) || typeof D == "boolean")
        continue;
      const W = Xu(b.prevProp, D);
      let L = W || // If we're making this variant active, we want to always make it active
      g === u && b.isActive && !_ && F || // If we removed a higher-priority variant (i is in reverse order)
      S > y && F, Y = !1;
      const B = Array.isArray(D) ? D : [D];
      let k = B.reduce(i(g), {});
      C === !1 && (k = {});
      const { prevResolvedValues: vt = {} } = b, lt = {
        ...vt,
        ...k
      }, V = (P) => {
        L = !0, d.has(P) && (Y = !0, d.delete(P)), b.needsAnimating[P] = !0;
        const T = t.getValue(P);
        T && (T.liveStyle = !1);
      };
      for (const P in lt) {
        const T = k[P], R = vt[P];
        if (p.hasOwnProperty(P))
          continue;
        let M = !1;
        hn(T) && hn(R) ? M = !Ni(T, R) : M = T !== R, M ? T != null ? V(P) : d.add(P) : T !== void 0 && d.has(P) ? V(P) : b.protectedKeys[P] = !0;
      }
      b.prevProp = D, b.prevResolvedValues = k, b.isActive && (p = { ...p, ...k }), s && t.blockInitialAnimation && (L = !1), L && (!(_ && W) || Y) && h.push(...B.map((P) => ({
        animation: P,
        options: { type: g }
      })));
    }
    if (d.size) {
      const S = {};
      d.forEach((g) => {
        const b = t.getBaseTarget(g), D = t.getValue(g);
        D && (D.liveStyle = !0), S[g] = b ?? null;
      }), h.push({ animation: S });
    }
    let v = !!h.length;
    return s && (l.initial === !1 || l.initial === l.animate) && !t.manuallyAnimateOnMount && (v = !1), s = !1, v ? e(h) : Promise.resolve();
  }
  function a(u, l) {
    var c;
    if (n[u].isActive === l)
      return Promise.resolve();
    (c = t.variantChildren) === null || c === void 0 || c.forEach((d) => {
      var p;
      return (p = d.animationState) === null || p === void 0 ? void 0 : p.setActive(u, l);
    }), n[u].isActive = l;
    const h = r(u);
    for (const d in n)
      n[d].protectedKeys = {};
    return h;
  }
  return {
    animateChanges: r,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      n = Us(), s = !0;
    }
  };
}
function Xu(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !Ni(e, t) : !1;
}
function _t(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Us() {
  return {
    animate: _t(!0),
    whileInView: _t(),
    whileHover: _t(),
    whileTap: _t(),
    whileDrag: _t(),
    whileFocus: _t(),
    exit: _t()
  };
}
class Ot {
  constructor(e) {
    this.isMounted = !1, this.node = e;
  }
  update() {
  }
}
class qu extends Ot {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(e) {
    super(e), e.animationState || (e.animationState = zu(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    Ue(e) && (this.unmountControls = e.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var e;
    this.node.animationState.reset(), (e = this.unmountControls) === null || e === void 0 || e.call(this);
  }
}
let Zu = 0;
class Ju extends Ot {
  constructor() {
    super(...arguments), this.id = Zu++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: e, onExitComplete: n } = this.node.presenceContext, { isPresent: s } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === s)
      return;
    const i = this.node.animationState.setActive("exit", !e);
    n && !e && i.then(() => n(this.id));
  }
  mount() {
    const { register: e } = this.node.presenceContext || {};
    e && (this.unmount = e(this.id));
  }
  unmount() {
  }
}
const Qu = {
  animation: {
    Feature: qu
  },
  exit: {
    Feature: Ju
  }
}, gt = {
  x: !1,
  y: !1
};
function Er() {
  return gt.x || gt.y;
}
function tl(t, e, n) {
  var s;
  if (t instanceof Element)
    return [t];
  if (typeof t == "string") {
    let i = document;
    const o = (s = void 0) !== null && s !== void 0 ? s : i.querySelectorAll(t);
    return o ? Array.from(o) : [];
  }
  return Array.from(t);
}
function Rr(t, e) {
  const n = tl(t), s = new AbortController(), i = {
    passive: !0,
    ...e,
    signal: s.signal
  };
  return [n, i, () => s.abort()];
}
function Ws(t) {
  return (e) => {
    e.pointerType === "touch" || Er() || t(e);
  };
}
function el(t, e, n = {}) {
  const [s, i, o] = Rr(t, n), r = Ws((a) => {
    const { target: u } = a, l = e(a);
    if (!l || !u)
      return;
    const c = Ws((h) => {
      l(h), u.removeEventListener("pointerleave", c);
    });
    u.addEventListener("pointerleave", c, i);
  });
  return s.forEach((a) => {
    a.addEventListener("pointerenter", r, i);
  }), o;
}
const qn = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1, oe = /* @__PURE__ */ new WeakSet();
function Ks(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function nn(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }));
}
const nl = (t, e) => {
  const n = t.currentTarget;
  if (!n)
    return;
  const s = Ks(() => {
    if (oe.has(n))
      return;
    nn(n, "down");
    const i = Ks(() => {
      nn(n, "up");
    }), o = () => nn(n, "cancel");
    n.addEventListener("keyup", i, e), n.addEventListener("blur", o, e);
  });
  n.addEventListener("keydown", s, e), n.addEventListener("blur", () => n.removeEventListener("keydown", s), e);
}, sl = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function il(t) {
  return sl.has(t.tagName) || t.tabIndex !== -1;
}
const Mr = (t, e) => e ? t === e ? !0 : Mr(t, e.parentElement) : !1;
function Ys(t) {
  return qn(t) && !Er();
}
function rl(t, e, n = {}) {
  const [s, i, o] = Rr(t, n), r = (a) => {
    const u = a.currentTarget;
    if (!Ys(a) || oe.has(u))
      return;
    oe.add(u);
    const l = e(a), c = (p, y) => {
      window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", d), !(!Ys(p) || !oe.has(u)) && (oe.delete(u), l && l(p, { success: y }));
    }, h = (p) => {
      c(p, n.useGlobalTarget || Mr(u, p.target));
    }, d = (p) => {
      c(p, !1);
    };
    window.addEventListener("pointerup", h, i), window.addEventListener("pointercancel", d, i);
  };
  return s.forEach((a) => {
    il(a) || (a.tabIndex = 0), (n.useGlobalTarget ? window : a).addEventListener("pointerdown", r, i), a.addEventListener("focus", (l) => nl(l, i), i);
  }), o;
}
function ol(t) {
  return t === "x" || t === "y" ? gt[t] ? null : (gt[t] = !0, () => {
    gt[t] = !1;
  }) : gt.x || gt.y ? null : (gt.x = gt.y = !0, () => {
    gt.x = gt.y = !1;
  });
}
function Se(t) {
  return {
    point: {
      x: t.pageX,
      y: t.pageY
    }
  };
}
const al = (t) => (e) => qn(e) && t(e, Se(e));
function ye(t, e, n, s = { passive: !0 }) {
  return t.addEventListener(e, n, s), () => t.removeEventListener(e, n);
}
function ce(t, e, n, s) {
  return ye(t, e, al(n), s);
}
const Gs = (t, e) => Math.abs(t - e);
function ul(t, e) {
  const n = Gs(t.x, e.x), s = Gs(t.y, e.y);
  return Math.sqrt(n ** 2 + s ** 2);
}
class Or {
  constructor(e, n, { transformPagePoint: s, contextWindow: i, dragSnapToOrigin: o = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const h = rn(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, p = ul(h.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !p)
        return;
      const { point: y } = h, { timestamp: v } = et;
      this.history.push({ ...y, timestamp: v });
      const { onStart: S, onMove: g } = this.handlers;
      d || (S && S(this.lastMoveEvent, h), this.startEvent = this.lastMoveEvent), g && g(this.lastMoveEvent, h);
    }, this.handlePointerMove = (h, d) => {
      this.lastMoveEvent = h, this.lastMoveEventInfo = sn(d, this.transformPagePoint), K.update(this.updatePoint, !0);
    }, this.handlePointerUp = (h, d) => {
      this.end();
      const { onEnd: p, onSessionEnd: y, resumeAnimation: v } = this.handlers;
      if (this.dragSnapToOrigin && v && v(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const S = rn(h.type === "pointercancel" ? this.lastMoveEventInfo : sn(d, this.transformPagePoint), this.history);
      this.startEvent && p && p(h, S), y && y(h, S);
    }, !qn(e))
      return;
    this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = s, this.contextWindow = i || window;
    const r = Se(e), a = sn(r, this.transformPagePoint), { point: u } = a, { timestamp: l } = et;
    this.history = [{ ...u, timestamp: l }];
    const { onSessionStart: c } = n;
    c && c(e, rn(a, this.history)), this.removeListeners = xe(ce(this.contextWindow, "pointermove", this.handlePointerMove), ce(this.contextWindow, "pointerup", this.handlePointerUp), ce(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), Rt(this.updatePoint);
  }
}
function sn(t, e) {
  return e ? { point: e(t.point) } : t;
}
function Hs(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function rn({ point: t }, e) {
  return {
    point: t,
    delta: Hs(t, Lr(e)),
    offset: Hs(t, ll(e)),
    velocity: cl(e, 0.1)
  };
}
function ll(t) {
  return t[0];
}
function Lr(t) {
  return t[t.length - 1];
}
function cl(t, e) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let n = t.length - 1, s = null;
  const i = Lr(t);
  for (; n >= 0 && (s = t[n], !(i.timestamp - s.timestamp > St(e))); )
    n--;
  if (!s)
    return { x: 0, y: 0 };
  const o = At(i.timestamp - s.timestamp);
  if (o === 0)
    return { x: 0, y: 0 };
  const r = {
    x: (i.x - s.x) / o,
    y: (i.y - s.y) / o
  };
  return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r;
}
function Yt(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
const _r = 1e-4, fl = 1 - _r, hl = 1 + _r, kr = 0.01, dl = 0 - kr, pl = 0 + kr;
function ct(t) {
  return t.max - t.min;
}
function ml(t, e, n) {
  return Math.abs(t - e) <= n;
}
function zs(t, e, n, s = 0.5) {
  t.origin = s, t.originPoint = z(e.min, e.max, t.origin), t.scale = ct(n) / ct(e), t.translate = z(n.min, n.max, t.origin) - t.originPoint, (t.scale >= fl && t.scale <= hl || isNaN(t.scale)) && (t.scale = 1), (t.translate >= dl && t.translate <= pl || isNaN(t.translate)) && (t.translate = 0);
}
function fe(t, e, n, s) {
  zs(t.x, e.x, n.x, s ? s.originX : void 0), zs(t.y, e.y, n.y, s ? s.originY : void 0);
}
function Xs(t, e, n) {
  t.min = n.min + e.min, t.max = t.min + ct(e);
}
function gl(t, e, n) {
  Xs(t.x, e.x, n.x), Xs(t.y, e.y, n.y);
}
function qs(t, e, n) {
  t.min = e.min - n.min, t.max = t.min + ct(e);
}
function he(t, e, n) {
  qs(t.x, e.x, n.x), qs(t.y, e.y, n.y);
}
function yl(t, { min: e, max: n }, s) {
  return e !== void 0 && t < e ? t = s ? z(e, t, s.min) : Math.max(t, e) : n !== void 0 && t > n && (t = s ? z(n, t, s.max) : Math.min(t, n)), t;
}
function Zs(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
  };
}
function vl(t, { top: e, left: n, bottom: s, right: i }) {
  return {
    x: Zs(t.x, n, i),
    y: Zs(t.y, e, s)
  };
}
function Js(t, e) {
  let n = e.min - t.min, s = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, s] = [s, n]), { min: n, max: s };
}
function Tl(t, e) {
  return {
    x: Js(t.x, e.x),
    y: Js(t.y, e.y)
  };
}
function bl(t, e) {
  let n = 0.5;
  const s = ct(t), i = ct(e);
  return i > s ? n = qt(e.min, e.max - s, t.min) : s > i && (n = qt(t.min, t.max - i, e.min)), Dt(0, 1, n);
}
function xl(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
}
const Pn = 0.35;
function Sl(t = Pn) {
  return t === !1 ? t = 0 : t === !0 && (t = Pn), {
    x: Qs(t, "left", "right"),
    y: Qs(t, "top", "bottom")
  };
}
function Qs(t, e, n) {
  return {
    min: ti(t, e),
    max: ti(t, n)
  };
}
function ti(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const ei = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Gt = () => ({
  x: ei(),
  y: ei()
}), ni = () => ({ min: 0, max: 0 }), Z = () => ({
  x: ni(),
  y: ni()
});
function dt(t) {
  return [t("x"), t("y")];
}
function jr({ top: t, left: e, right: n, bottom: s }) {
  return {
    x: { min: e, max: n },
    y: { min: t, max: s }
  };
}
function Pl({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function wl(t, e) {
  if (!e)
    return t;
  const n = e({ x: t.left, y: t.top }), s = e({ x: t.right, y: t.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: s.y,
    right: s.x
  };
}
function on(t) {
  return t === void 0 || t === 1;
}
function wn({ scale: t, scaleX: e, scaleY: n }) {
  return !on(t) || !on(e) || !on(n);
}
function kt(t) {
  return wn(t) || Fr(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function Fr(t) {
  return si(t.x) || si(t.y);
}
function si(t) {
  return t && t !== "0%";
}
function je(t, e, n) {
  const s = t - n, i = e * s;
  return n + i;
}
function ii(t, e, n, s, i) {
  return i !== void 0 && (t = je(t, i, s)), je(t, n, s) + e;
}
function An(t, e = 0, n = 1, s, i) {
  t.min = ii(t.min, e, n, s, i), t.max = ii(t.max, e, n, s, i);
}
function Ir(t, { x: e, y: n }) {
  An(t.x, e.translate, e.scale, e.originPoint), An(t.y, n.translate, n.scale, n.originPoint);
}
const ri = 0.999999999999, oi = 1.0000000000001;
function Al(t, e, n, s = !1) {
  const i = n.length;
  if (!i)
    return;
  e.x = e.y = 1;
  let o, r;
  for (let a = 0; a < i; a++) {
    o = n[a], r = o.projectionDelta;
    const { visualElement: u } = o.options;
    u && u.props.style && u.props.style.display === "contents" || (s && o.options.layoutScroll && o.scroll && o !== o.root && zt(t, {
      x: -o.scroll.offset.x,
      y: -o.scroll.offset.y
    }), r && (e.x *= r.x.scale, e.y *= r.y.scale, Ir(t, r)), s && kt(o.latestValues) && zt(t, o.latestValues));
  }
  e.x < oi && e.x > ri && (e.x = 1), e.y < oi && e.y > ri && (e.y = 1);
}
function Ht(t, e) {
  t.min = t.min + e, t.max = t.max + e;
}
function ai(t, e, n, s, i = 0.5) {
  const o = z(t.min, t.max, i);
  An(t, e, n, o, s);
}
function zt(t, e) {
  ai(t.x, e.x, e.scaleX, e.scale, e.originX), ai(t.y, e.y, e.scaleY, e.scale, e.originY);
}
function Br(t, e) {
  return jr(wl(t.getBoundingClientRect(), e));
}
function Dl(t, e, n) {
  const s = Br(t, n), { scroll: i } = e;
  return i && (Ht(s.x, i.offset.x), Ht(s.y, i.offset.y)), s;
}
const $r = ({ current: t }) => t ? t.ownerDocument.defaultView : null, Cl = /* @__PURE__ */ new WeakMap();
class Vl {
  constructor(e) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Z(), this.visualElement = e;
  }
  start(e, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1)
      return;
    const i = (c) => {
      const { dragSnapToOrigin: h } = this.getProps();
      h ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Se(c).point);
    }, o = (c, h) => {
      const { drag: d, dragPropagation: p, onDragStart: y } = this.getProps();
      if (d && !p && (this.openDragLock && this.openDragLock(), this.openDragLock = ol(d), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), dt((S) => {
        let g = this.getAxisMotionValue(S).get() || 0;
        if (Pt.test(g)) {
          const { projection: b } = this.visualElement;
          if (b && b.layout) {
            const D = b.layout.layoutBox[S];
            D && (g = ct(D) * (parseFloat(g) / 100));
          }
        }
        this.originPoint[S] = g;
      }), y && K.postRender(() => y(c, h)), xn(this.visualElement, "transform");
      const { animationState: v } = this.visualElement;
      v && v.setActive("whileDrag", !0);
    }, r = (c, h) => {
      const { dragPropagation: d, dragDirectionLock: p, onDirectionLock: y, onDrag: v } = this.getProps();
      if (!d && !this.openDragLock)
        return;
      const { offset: S } = h;
      if (p && this.currentDirection === null) {
        this.currentDirection = El(S), this.currentDirection !== null && y && y(this.currentDirection);
        return;
      }
      this.updateAxis("x", h.point, S), this.updateAxis("y", h.point, S), this.visualElement.render(), v && v(c, h);
    }, a = (c, h) => this.stop(c, h), u = () => dt((c) => {
      var h;
      return this.getAnimationState(c) === "paused" && ((h = this.getAxisMotionValue(c).animation) === null || h === void 0 ? void 0 : h.play());
    }), { dragSnapToOrigin: l } = this.getProps();
    this.panSession = new Or(e, {
      onSessionStart: i,
      onStart: o,
      onMove: r,
      onSessionEnd: a,
      resumeAnimation: u
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: l,
      contextWindow: $r(this.visualElement)
    });
  }
  stop(e, n) {
    const s = this.isDragging;
    if (this.cancel(), !s)
      return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && K.postRender(() => o(e, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: s } = this.getProps();
    !s && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(e, n, s) {
    const { drag: i } = this.getProps();
    if (!s || !Ce(e, i, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(e);
    let r = this.originPoint[e] + s[e];
    this.constraints && this.constraints[e] && (r = yl(r, this.constraints[e], this.elastic[e])), o.set(r);
  }
  resolveConstraints() {
    var e;
    const { dragConstraints: n, dragElastic: s } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout, o = this.constraints;
    n && Yt(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = vl(i.layoutBox, n) : this.constraints = !1, this.elastic = Sl(s), o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && dt((r) => {
      this.constraints !== !1 && this.getAxisMotionValue(r) && (this.constraints[r] = xl(i.layoutBox[r], this.constraints[r]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !Yt(e))
      return !1;
    const s = e.current;
    Et(s !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: i } = this.visualElement;
    if (!i || !i.layout)
      return !1;
    const o = Dl(s, i.root, this.visualElement.getTransformPagePoint());
    let r = Tl(i.layout.layoutBox, o);
    if (n) {
      const a = n(Pl(r));
      this.hasMutatedConstraints = !!a, a && (r = jr(a));
    }
    return r;
  }
  startAnimation(e) {
    const { drag: n, dragMomentum: s, dragElastic: i, dragTransition: o, dragSnapToOrigin: r, onDragTransitionEnd: a } = this.getProps(), u = this.constraints || {}, l = dt((c) => {
      if (!Ce(c, n, this.currentDirection))
        return;
      let h = u[c] || {};
      r && (h = { min: 0, max: 0 });
      const d = i ? 200 : 1e6, p = i ? 40 : 1e7, y = {
        type: "inertia",
        velocity: s ? e[c] : 0,
        bounceStiffness: d,
        bounceDamping: p,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...o,
        ...h
      };
      return this.startAxisValueAnimation(c, y);
    });
    return Promise.all(l).then(a);
  }
  startAxisValueAnimation(e, n) {
    const s = this.getAxisMotionValue(e);
    return xn(this.visualElement, e), s.start(Yn(e, s, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    dt((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    dt((e) => {
      var n;
      return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.pause();
    });
  }
  getAnimationState(e) {
    var n;
    return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(e) {
    const n = `_drag${e.toUpperCase()}`, s = this.visualElement.getProps(), i = s[n];
    return i || this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0);
  }
  snapToCursor(e) {
    dt((n) => {
      const { drag: s } = this.getProps();
      if (!Ce(n, s, this.currentDirection))
        return;
      const { projection: i } = this.visualElement, o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: r, max: a } = i.layout.layoutBox[n];
        o.set(e[n] - z(r, a, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: e, dragConstraints: n } = this.getProps(), { projection: s } = this.visualElement;
    if (!Yt(n) || !s || !this.constraints)
      return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    dt((r) => {
      const a = this.getAxisMotionValue(r);
      if (a && this.constraints !== !1) {
        const u = a.get();
        i[r] = bl({ min: u, max: u }, this.constraints[r]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", s.root && s.root.updateScroll(), s.updateLayout(), this.resolveConstraints(), dt((r) => {
      if (!Ce(r, e, null))
        return;
      const a = this.getAxisMotionValue(r), { min: u, max: l } = this.constraints[r];
      a.set(z(u, l, i[r]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Cl.set(this.visualElement, this);
    const e = this.visualElement.current, n = ce(e, "pointerdown", (u) => {
      const { drag: l, dragListener: c = !0 } = this.getProps();
      l && c && this.start(u);
    }), s = () => {
      const { dragConstraints: u } = this.getProps();
      Yt(u) && u.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: i } = this.visualElement, o = i.addEventListener("measure", s);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), K.read(s);
    const r = ye(window, "resize", () => this.scalePositionWithinConstraints()), a = i.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: l }) => {
      this.isDragging && l && (dt((c) => {
        const h = this.getAxisMotionValue(c);
        h && (this.originPoint[c] += u[c].translate, h.set(h.get() + u[c].translate));
      }), this.visualElement.render());
    });
    return () => {
      r(), n(), o(), a && a();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: s = !1, dragPropagation: i = !1, dragConstraints: o = !1, dragElastic: r = Pn, dragMomentum: a = !0 } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: s,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: r,
      dragMomentum: a
    };
  }
}
function Ce(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function El(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
}
class Rl extends Ot {
  constructor(e) {
    super(e), this.removeGroupControls = ut, this.removeListeners = ut, this.controls = new Vl(e);
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || ut;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const ui = (t) => (e, n) => {
  t && K.postRender(() => t(e, n));
};
class Ml extends Ot {
  constructor() {
    super(...arguments), this.removePointerDownListener = ut;
  }
  onPointerDown(e) {
    this.session = new Or(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: $r(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: n, onPan: s, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: ui(e),
      onStart: ui(n),
      onMove: s,
      onEnd: (o, r) => {
        delete this.session, i && K.postRender(() => i(o, r));
      }
    };
  }
  mount() {
    this.removePointerDownListener = ce(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Zn = Jt(null);
function Ol() {
  const t = at(Zn);
  if (t === null)
    return [!0, null];
  const { isPresent: e, onExitComplete: n, register: s } = t, i = Bo();
  Be(() => s(i), []);
  const o = Bi(() => n && n(i), [i, n]);
  return !e && n ? [!1, o] : [!0];
}
const Nr = Jt({}), Ur = Jt({}), Re = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function li(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const ie = {
  correct: (t, e) => {
    if (!e.target)
      return t;
    if (typeof t == "string")
      if (E.test(t))
        t = parseFloat(t);
      else
        return t;
    const n = li(t, e.target.x), s = li(t, e.target.y);
    return `${n}% ${s}%`;
  }
}, Ll = {
  correct: (t, { treeScale: e, projectionDelta: n }) => {
    const s = t, i = Mt.parse(t);
    if (i.length > 5)
      return s;
    const o = Mt.createTransformer(t), r = typeof i[0] != "number" ? 1 : 0, a = n.x.scale * e.x, u = n.y.scale * e.y;
    i[0 + r] /= a, i[1 + r] /= u;
    const l = z(a, u, 0.5);
    return typeof i[2 + r] == "number" && (i[2 + r] /= l), typeof i[3 + r] == "number" && (i[3 + r] /= l), o(i);
  }
}, Fe = {};
function _l(t) {
  Object.assign(Fe, t);
}
const { schedule: Jn, cancel: Rf } = Ui(queueMicrotask, !1);
class kl extends $o {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: s, layoutId: i } = this.props, { projection: o } = e;
    _l(jl), o && (n.group && n.group.add(o), s && s.register && i && s.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({
      ...o.options,
      onExitComplete: () => this.safeToRemove()
    })), Re.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: n, visualElement: s, drag: i, isPresent: o } = this.props, r = s.projection;
    return r && (r.isPresent = o, i || e.layoutDependency !== n || n === void 0 ? r.willUpdate() : this.safeToRemove(), e.isPresent !== o && (o ? r.promote() : r.relegate() || K.postRender(() => {
      const a = r.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e && (e.root.didUpdate(), Jn.postRender(() => {
      !e.currentAnimation && e.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: s } = this.props, { projection: i } = e;
    i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), s && s.deregister && s.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function Wr(t) {
  const [e, n] = Ol(), s = at(Nr);
  return yt.jsx(kl, { ...t, layoutGroup: s, switchLayoutGroup: at(Ur), isPresent: e, safeToRemove: n });
}
const jl = {
  borderRadius: {
    ...ie,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: ie,
  borderTopRightRadius: ie,
  borderBottomLeftRadius: ie,
  borderBottomRightRadius: ie,
  boxShadow: Ll
}, Kr = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], Fl = Kr.length, ci = (t) => typeof t == "string" ? parseFloat(t) : t, fi = (t) => typeof t == "number" || E.test(t);
function Il(t, e, n, s, i, o) {
  i ? (t.opacity = z(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    Bl(s)
  ), t.opacityExit = z(e.opacity !== void 0 ? e.opacity : 1, 0, $l(s))) : o && (t.opacity = z(e.opacity !== void 0 ? e.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, s));
  for (let r = 0; r < Fl; r++) {
    const a = `border${Kr[r]}Radius`;
    let u = hi(e, a), l = hi(n, a);
    if (u === void 0 && l === void 0)
      continue;
    u || (u = 0), l || (l = 0), u === 0 || l === 0 || fi(u) === fi(l) ? (t[a] = Math.max(z(ci(u), ci(l), s), 0), (Pt.test(l) || Pt.test(u)) && (t[a] += "%")) : t[a] = l;
  }
  (e.rotate || n.rotate) && (t.rotate = z(e.rotate || 0, n.rotate || 0, s));
}
function hi(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const Bl = /* @__PURE__ */ Yr(0, 0.5, Xi), $l = /* @__PURE__ */ Yr(0.5, 0.95, ut);
function Yr(t, e, n) {
  return (s) => s < t ? 0 : s > e ? 1 : n(qt(t, e, s));
}
function di(t, e) {
  t.min = e.min, t.max = e.max;
}
function ht(t, e) {
  di(t.x, e.x), di(t.y, e.y);
}
function pi(t, e) {
  t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
}
function mi(t, e, n, s, i) {
  return t -= e, t = je(t, 1 / n, s), i !== void 0 && (t = je(t, 1 / i, s)), t;
}
function Nl(t, e = 0, n = 1, s = 0.5, i, o = t, r = t) {
  if (Pt.test(e) && (e = parseFloat(e), e = z(r.min, r.max, e / 100) - r.min), typeof e != "number")
    return;
  let a = z(o.min, o.max, s);
  t === o && (a -= e), t.min = mi(t.min, e, n, a, i), t.max = mi(t.max, e, n, a, i);
}
function gi(t, e, [n, s, i], o, r) {
  Nl(t, e[n], e[s], e[i], e.scale, o, r);
}
const Ul = ["x", "scaleX", "originX"], Wl = ["y", "scaleY", "originY"];
function yi(t, e, n, s) {
  gi(t.x, e, Ul, n ? n.x : void 0, s ? s.x : void 0), gi(t.y, e, Wl, n ? n.y : void 0, s ? s.y : void 0);
}
function vi(t) {
  return t.translate === 0 && t.scale === 1;
}
function Gr(t) {
  return vi(t.x) && vi(t.y);
}
function Ti(t, e) {
  return t.min === e.min && t.max === e.max;
}
function Kl(t, e) {
  return Ti(t.x, e.x) && Ti(t.y, e.y);
}
function bi(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function Hr(t, e) {
  return bi(t.x, e.x) && bi(t.y, e.y);
}
function xi(t) {
  return ct(t.x) / ct(t.y);
}
function Si(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
class Yl {
  constructor() {
    this.members = [];
  }
  add(e) {
    Gn(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (Hn(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    const n = this.members.findIndex((i) => e === i);
    if (n === 0)
      return !1;
    let s;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        s = o;
        break;
      }
    }
    return s ? (this.promote(s), !0) : !1;
  }
  promote(e, n) {
    const s = this.lead;
    if (e !== s && (this.prevLead = s, this.lead = e, e.show(), s)) {
      s.instance && s.scheduleRender(), e.scheduleRender(), e.resumeFrom = s, n && (e.resumeFrom.preserveOpacity = !0), s.snapshot && (e.snapshot = s.snapshot, e.snapshot.latestValues = s.animationValues || s.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      const { crossfade: i } = e.options;
      i === !1 && s.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: n, resumingFrom: s } = e;
      n.onExitComplete && n.onExitComplete(), s && s.options.onExitComplete && s.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Gl(t, e, n) {
  let s = "";
  const i = t.x.translate / e.x, o = t.y.translate / e.y, r = (n == null ? void 0 : n.z) || 0;
  if ((i || o || r) && (s = `translate3d(${i}px, ${o}px, ${r}px) `), (e.x !== 1 || e.y !== 1) && (s += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
    const { transformPerspective: l, rotate: c, rotateX: h, rotateY: d, skewX: p, skewY: y } = n;
    l && (s = `perspective(${l}px) ${s}`), c && (s += `rotate(${c}deg) `), h && (s += `rotateX(${h}deg) `), d && (s += `rotateY(${d}deg) `), p && (s += `skewX(${p}deg) `), y && (s += `skewY(${y}deg) `);
  }
  const a = t.x.scale * e.x, u = t.y.scale * e.y;
  return (a !== 1 || u !== 1) && (s += `scale(${a}, ${u})`), s || "none";
}
const Hl = (t, e) => t.depth - e.depth;
class zl {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(e) {
    Gn(this.children, e), this.isDirty = !0;
  }
  remove(e) {
    Hn(this.children, e), this.isDirty = !0;
  }
  forEach(e) {
    this.isDirty && this.children.sort(Hl), this.isDirty = !1, this.children.forEach(e);
  }
}
function Me(t) {
  const e = st(t) ? t.get() : t;
  return Ou(e) ? e.toValue() : e;
}
function Xl(t, e) {
  const n = wt.now(), s = ({ timestamp: i }) => {
    const o = i - n;
    o >= e && (Rt(s), t(o - e));
  };
  return K.read(s, !0), () => Rt(s);
}
function ql(t) {
  return t instanceof SVGElement && t.tagName !== "svg";
}
function Zl(t, e, n) {
  const s = st(t) ? t : ge(t);
  return s.start(Yn("", s, e, n)), s.animation;
}
const jt = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, ae = typeof window < "u" && window.MotionDebug !== void 0, an = ["", "X", "Y", "Z"], Jl = { visibility: "hidden" }, Pi = 1e3;
let Ql = 0;
function un(t, e, n, s) {
  const { latestValues: i } = e;
  i[t] && (n[t] = i[t], e.setStaticValue(t, 0), s && (s[t] = 0));
}
function zr(t) {
  if (t.hasCheckedOptimisedAppear = !0, t.root === t)
    return;
  const { visualElement: e } = t.options;
  if (!e)
    return;
  const n = Dr(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", K, !(i || o));
  }
  const { parent: s } = t;
  s && !s.hasCheckedOptimisedAppear && zr(s);
}
function Xr({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: s, resetTransform: i }) {
  return class {
    constructor(r = {}, a = e == null ? void 0 : e()) {
      this.id = Ql++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, ae && (jt.totalNodes = jt.resolvedTargetDeltas = jt.recalculatedProjection = 0), this.nodes.forEach(nc), this.nodes.forEach(ac), this.nodes.forEach(uc), this.nodes.forEach(sc), ae && window.MotionDebug.record(jt);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = r, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let u = 0; u < this.path.length; u++)
        this.path[u].shouldResetTransform = !0;
      this.root === this && (this.nodes = new zl());
    }
    addEventListener(r, a) {
      return this.eventHandlers.has(r) || this.eventHandlers.set(r, new zn()), this.eventHandlers.get(r).add(a);
    }
    notifyListeners(r, ...a) {
      const u = this.eventHandlers.get(r);
      u && u.notify(...a);
    }
    hasListeners(r) {
      return this.eventHandlers.has(r);
    }
    /**
     * Lifecycles
     */
    mount(r, a = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = ql(r), this.instance = r;
      const { layoutId: u, layout: l, visualElement: c } = this.options;
      if (c && !c.current && c.mount(r), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (l || u) && (this.isLayoutDirty = !0), t) {
        let h;
        const d = () => this.root.updateBlockedByResize = !1;
        t(r, () => {
          this.root.updateBlockedByResize = !0, h && h(), h = Xl(d, 250), Re.hasAnimatedSinceResize && (Re.hasAnimatedSinceResize = !1, this.nodes.forEach(Ai));
        });
      }
      u && this.root.registerSharedNode(u, this), this.options.animate !== !1 && c && (u || l) && this.addEventListener("didUpdate", ({ delta: h, hasLayoutChanged: d, hasRelativeTargetChanged: p, layout: y }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const v = this.options.transition || c.getDefaultTransition() || dc, { onLayoutAnimationStart: S, onLayoutAnimationComplete: g } = c.getProps(), b = !this.targetLayout || !Hr(this.targetLayout, y) || p, D = !d && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || D || d && (b || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(h, D);
          const F = {
            ...Mn(v, "layout"),
            onPlay: S,
            onComplete: g
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (F.delay = 0, F.type = !1), this.startAnimation(F);
        } else
          d || Ai(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = y;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const r = this.getStack();
      r && r.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Rt(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(lc), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: r } = this.options;
      return r && r.getProps().transformTemplate;
    }
    willUpdate(r = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && zr(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const h = this.path[c];
        h.shouldResetTransform = !0, h.updateScroll("snapshot"), h.options.layoutRoot && h.willUpdate(!1);
      }
      const { layoutId: a, layout: u } = this.options;
      if (a === void 0 && !u)
        return;
      const l = this.getTransformTemplate();
      this.prevTransformTemplateValue = l ? l(this.latestValues, "") : void 0, this.updateSnapshot(), r && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(wi);
        return;
      }
      this.isUpdating || this.nodes.forEach(rc), this.isUpdating = !1, this.nodes.forEach(oc), this.nodes.forEach(tc), this.nodes.forEach(ec), this.clearAllSnapshots();
      const a = wt.now();
      et.delta = Dt(0, 1e3 / 60, a - et.timestamp), et.timestamp = a, et.isProcessing = !0, Je.update.process(et), Je.preRender.process(et), Je.render.process(et), et.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Jn.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(ic), this.sharedNodes.forEach(cc);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, K.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      K.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let u = 0; u < this.path.length; u++)
          this.path[u].updateScroll();
      const r = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = Z(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, r ? r.layoutBox : void 0);
    }
    updateScroll(r = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === r && (a = !1), a) {
        const u = s(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: r,
          isRoot: u,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : u
        };
      }
    }
    resetTransform() {
      if (!i)
        return;
      const r = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !Gr(this.projectionDelta), u = this.getTransformTemplate(), l = u ? u(this.latestValues, "") : void 0, c = l !== this.prevTransformTemplateValue;
      r && (a || kt(this.latestValues) || c) && (i(this.instance, l), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(r = !0) {
      const a = this.measurePageBox();
      let u = this.removeElementScroll(a);
      return r && (u = this.removeTransform(u)), pc(u), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: u,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var r;
      const { visualElement: a } = this.options;
      if (!a)
        return Z();
      const u = a.measureViewportBox();
      if (!(((r = this.scroll) === null || r === void 0 ? void 0 : r.wasRoot) || this.path.some(mc))) {
        const { scroll: c } = this.root;
        c && (Ht(u.x, c.offset.x), Ht(u.y, c.offset.y));
      }
      return u;
    }
    removeElementScroll(r) {
      var a;
      const u = Z();
      if (ht(u, r), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
        return u;
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l], { scroll: h, options: d } = c;
        c !== this.root && h && d.layoutScroll && (h.wasRoot && ht(u, r), Ht(u.x, h.offset.x), Ht(u.y, h.offset.y));
      }
      return u;
    }
    applyTransform(r, a = !1) {
      const u = Z();
      ht(u, r);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        !a && c.options.layoutScroll && c.scroll && c !== c.root && zt(u, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), kt(c.latestValues) && zt(u, c.latestValues);
      }
      return kt(this.latestValues) && zt(u, this.latestValues), u;
    }
    removeTransform(r) {
      const a = Z();
      ht(a, r);
      for (let u = 0; u < this.path.length; u++) {
        const l = this.path[u];
        if (!l.instance || !kt(l.latestValues))
          continue;
        wn(l.latestValues) && l.updateSnapshot();
        const c = Z(), h = l.measurePageBox();
        ht(c, h), yi(a, l.latestValues, l.snapshot ? l.snapshot.layoutBox : void 0, c);
      }
      return kt(this.latestValues) && yi(a, this.latestValues), a;
    }
    setTargetDelta(r) {
      this.targetDelta = r, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(r) {
      this.options = {
        ...this.options,
        ...r,
        crossfade: r.crossfade !== void 0 ? r.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== et.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(r = !1) {
      var a;
      const u = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = u.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = u.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = u.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== u;
      if (!(r || l && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: h, layoutId: d } = this.options;
      if (!(!this.layout || !(h || d))) {
        if (this.resolvedRelativeTargetAt = et.timestamp, !this.targetDelta && !this.relativeTarget) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Z(), this.relativeTargetOrigin = Z(), he(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), ht(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Z(), this.targetWithTransforms = Z()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), gl(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : ht(this.target, this.layout.layoutBox), Ir(this.target, this.targetDelta)) : ht(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Z(), this.relativeTargetOrigin = Z(), he(this.relativeTargetOrigin, this.target, p.target), ht(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          ae && jt.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || wn(this.parent.latestValues) || Fr(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var r;
      const a = this.getLead(), u = !!this.resumingFrom || this !== a;
      let l = !0;
      if ((this.isProjectionDirty || !((r = this.parent) === null || r === void 0) && r.isProjectionDirty) && (l = !1), u && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === et.timestamp && (l = !1), l)
        return;
      const { layout: c, layoutId: h } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || h))
        return;
      ht(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x, p = this.treeScale.y;
      Al(this.layoutCorrected, this.treeScale, this.path, u), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = Z());
      const { target: y } = a;
      if (!y) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (pi(this.prevProjectionDelta.x, this.projectionDelta.x), pi(this.prevProjectionDelta.y, this.projectionDelta.y)), fe(this.projectionDelta, this.layoutCorrected, y, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== p || !Si(this.projectionDelta.x, this.prevProjectionDelta.x) || !Si(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", y)), ae && jt.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(r = !0) {
      var a;
      if ((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(), r) {
        const u = this.getStack();
        u && u.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = Gt(), this.projectionDelta = Gt(), this.projectionDeltaWithTransform = Gt();
    }
    setAnimationOrigin(r, a = !1) {
      const u = this.snapshot, l = u ? u.latestValues : {}, c = { ...this.latestValues }, h = Gt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const d = Z(), p = u ? u.source : void 0, y = this.layout ? this.layout.source : void 0, v = p !== y, S = this.getStack(), g = !S || S.members.length <= 1, b = !!(v && !g && this.options.crossfade === !0 && !this.path.some(hc));
      this.animationProgress = 0;
      let D;
      this.mixTargetDelta = (F) => {
        const C = F / 1e3;
        Di(h.x, r.x, C), Di(h.y, r.y, C), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (he(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), fc(this.relativeTarget, this.relativeTargetOrigin, d, C), D && Kl(this.relativeTarget, D) && (this.isProjectionDirty = !1), D || (D = Z()), ht(D, this.relativeTarget)), v && (this.animationValues = c, Il(c, l, this.latestValues, C, b, g)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = C;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(r) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Rt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = K.update(() => {
        Re.hasAnimatedSinceResize = !0, this.currentAnimation = Zl(0, Pi, {
          ...r,
          onUpdate: (a) => {
            this.mixTargetDelta(a), r.onUpdate && r.onUpdate(a);
          },
          onComplete: () => {
            r.onComplete && r.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const r = this.getStack();
      r && r.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Pi), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const r = this.getLead();
      let { targetWithTransforms: a, target: u, layout: l, latestValues: c } = r;
      if (!(!a || !u || !l)) {
        if (this !== r && this.layout && l && qr(this.options.animationType, this.layout.layoutBox, l.layoutBox)) {
          u = this.target || Z();
          const h = ct(this.layout.layoutBox.x);
          u.x.min = r.target.x.min, u.x.max = u.x.min + h;
          const d = ct(this.layout.layoutBox.y);
          u.y.min = r.target.y.min, u.y.max = u.y.min + d;
        }
        ht(a, u), zt(a, c), fe(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(r, a) {
      this.sharedNodes.has(r) || this.sharedNodes.set(r, new Yl()), this.sharedNodes.get(r).add(a);
      const l = a.options.initialPromotionConfig;
      a.promote({
        transition: l ? l.transition : void 0,
        preserveFollowOpacity: l && l.shouldPreserveFollowOpacity ? l.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const r = this.getStack();
      return r ? r.lead === this : !0;
    }
    getLead() {
      var r;
      const { layoutId: a } = this.options;
      return a ? ((r = this.getStack()) === null || r === void 0 ? void 0 : r.lead) || this : this;
    }
    getPrevLead() {
      var r;
      const { layoutId: a } = this.options;
      return a ? (r = this.getStack()) === null || r === void 0 ? void 0 : r.prevLead : void 0;
    }
    getStack() {
      const { layoutId: r } = this.options;
      if (r)
        return this.root.sharedNodes.get(r);
    }
    promote({ needsReset: r, transition: a, preserveFollowOpacity: u } = {}) {
      const l = this.getStack();
      l && l.promote(this, u), r && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const r = this.getStack();
      return r ? r.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: r } = this.options;
      if (!r)
        return;
      let a = !1;
      const { latestValues: u } = r;
      if ((u.z || u.rotate || u.rotateX || u.rotateY || u.rotateZ || u.skewX || u.skewY) && (a = !0), !a)
        return;
      const l = {};
      u.z && un("z", r, l, this.animationValues);
      for (let c = 0; c < an.length; c++)
        un(`rotate${an[c]}`, r, l, this.animationValues), un(`skew${an[c]}`, r, l, this.animationValues);
      r.render();
      for (const c in l)
        r.setStaticValue(c, l[c]), this.animationValues && (this.animationValues[c] = l[c]);
      r.scheduleRender();
    }
    getProjectionStyles(r) {
      var a, u;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return Jl;
      const l = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, l.opacity = "", l.pointerEvents = Me(r == null ? void 0 : r.pointerEvents) || "", l.transform = c ? c(this.latestValues, "") : "none", l;
      const h = this.getLead();
      if (!this.projectionDelta || !this.layout || !h.target) {
        const v = {};
        return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, v.pointerEvents = Me(r == null ? void 0 : r.pointerEvents) || ""), this.hasProjected && !kt(this.latestValues) && (v.transform = c ? c({}, "") : "none", this.hasProjected = !1), v;
      }
      const d = h.animationValues || h.latestValues;
      this.applyTransformsToTarget(), l.transform = Gl(this.projectionDeltaWithTransform, this.treeScale, d), c && (l.transform = c(d, l.transform));
      const { x: p, y } = this.projectionDelta;
      l.transformOrigin = `${p.origin * 100}% ${y.origin * 100}% 0`, h.animationValues ? l.opacity = h === this ? (u = (a = d.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && u !== void 0 ? u : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : l.opacity = h === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
      for (const v in Fe) {
        if (d[v] === void 0)
          continue;
        const { correct: S, applyTo: g } = Fe[v], b = l.transform === "none" ? d[v] : S(d[v], h);
        if (g) {
          const D = g.length;
          for (let F = 0; F < D; F++)
            l[g[F]] = b;
        } else
          l[v] = b;
      }
      return this.options.layoutId && (l.pointerEvents = h === this ? Me(r == null ? void 0 : r.pointerEvents) || "" : "none"), l;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((r) => {
        var a;
        return (a = r.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(wi), this.root.sharedNodes.clear();
    }
  };
}
function tc(t) {
  t.updateLayout();
}
function ec(t) {
  var e;
  const n = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: i } = t.layout, { animationType: o } = t.options, r = n.source !== t.layout.source;
    o === "size" ? dt((h) => {
      const d = r ? n.measuredBox[h] : n.layoutBox[h], p = ct(d);
      d.min = s[h].min, d.max = d.min + p;
    }) : qr(o, n.layoutBox, s) && dt((h) => {
      const d = r ? n.measuredBox[h] : n.layoutBox[h], p = ct(s[h]);
      d.max = d.min + p, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[h].max = t.relativeTarget[h].min + p);
    });
    const a = Gt();
    fe(a, s, n.layoutBox);
    const u = Gt();
    r ? fe(u, t.applyTransform(i, !0), n.measuredBox) : fe(u, s, n.layoutBox);
    const l = !Gr(a);
    let c = !1;
    if (!t.resumeFrom) {
      const h = t.getClosestProjectingParent();
      if (h && !h.resumeFrom) {
        const { snapshot: d, layout: p } = h;
        if (d && p) {
          const y = Z();
          he(y, n.layoutBox, d.layoutBox);
          const v = Z();
          he(v, s, p.layoutBox), Hr(y, v) || (c = !0), h.options.layoutRoot && (t.relativeTarget = v, t.relativeTargetOrigin = y, t.relativeParent = h);
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: s,
      snapshot: n,
      delta: u,
      layoutDelta: a,
      hasLayoutChanged: l,
      hasRelativeTargetChanged: c
    });
  } else if (t.isLead()) {
    const { onExitComplete: s } = t.options;
    s && s();
  }
  t.options.transition = void 0;
}
function nc(t) {
  ae && jt.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function sc(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function ic(t) {
  t.clearSnapshot();
}
function wi(t) {
  t.clearMeasurements();
}
function rc(t) {
  t.isLayoutDirty = !1;
}
function oc(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function Ai(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0;
}
function ac(t) {
  t.resolveTargetDelta();
}
function uc(t) {
  t.calcProjection();
}
function lc(t) {
  t.resetSkewAndRotation();
}
function cc(t) {
  t.removeLeadSnapshot();
}
function Di(t, e, n) {
  t.translate = z(e.translate, 0, n), t.scale = z(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
}
function Ci(t, e, n, s) {
  t.min = z(e.min, n.min, s), t.max = z(e.max, n.max, s);
}
function fc(t, e, n, s) {
  Ci(t.x, e.x, n.x, s), Ci(t.y, e.y, n.y, s);
}
function hc(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const dc = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Vi = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), Ei = Vi("applewebkit/") && !Vi("chrome/") ? Math.round : ut;
function Ri(t) {
  t.min = Ei(t.min), t.max = Ei(t.max);
}
function pc(t) {
  Ri(t.x), Ri(t.y);
}
function qr(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !ml(xi(e), xi(n), 0.2);
}
function mc(t) {
  var e;
  return t !== t.root && ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot);
}
const gc = Xr({
  attachResizeListener: (t, e) => ye(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), ln = {
  current: void 0
}, Zr = Xr({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!ln.current) {
      const t = new gc({});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), ln.current = t;
    }
    return ln.current;
  },
  resetTransform: (t, e) => {
    t.style.transform = e !== void 0 ? e : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), yc = {
  pan: {
    Feature: Ml
  },
  drag: {
    Feature: Rl,
    ProjectionNode: Zr,
    MeasureLayout: Wr
  }
};
function Mi(t, e, n) {
  const { props: s } = t;
  t.animationState && s.whileHover && t.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n, o = s[i];
  o && K.postRender(() => o(e, Se(e)));
}
class vc extends Ot {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = el(e, (n) => (Mi(this.node, n, "Start"), (s) => Mi(this.node, s, "End"))));
  }
  unmount() {
  }
}
class Tc extends Ot {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = xe(ye(this.node.current, "focus", () => this.onFocus()), ye(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Oi(t, e, n) {
  const { props: s } = t;
  t.animationState && s.whileTap && t.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n), o = s[i];
  o && K.postRender(() => o(e, Se(e)));
}
class bc extends Ot {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = rl(e, (n) => (Oi(this.node, n, "Start"), (s, { success: i }) => Oi(this.node, s, i ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Dn = /* @__PURE__ */ new WeakMap(), cn = /* @__PURE__ */ new WeakMap(), xc = (t) => {
  const e = Dn.get(t.target);
  e && e(t);
}, Sc = (t) => {
  t.forEach(xc);
};
function Pc({ root: t, ...e }) {
  const n = t || document;
  cn.has(n) || cn.set(n, {});
  const s = cn.get(n), i = JSON.stringify(e);
  return s[i] || (s[i] = new IntersectionObserver(Sc, { root: t, ...e })), s[i];
}
function wc(t, e, n) {
  const s = Pc(e);
  return Dn.set(t, n), s.observe(t), () => {
    Dn.delete(t), s.unobserve(t);
  };
}
const Ac = {
  some: 0,
  all: 1
};
class Dc extends Ot {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(), { root: n, margin: s, amount: i = "some", once: o } = e, r = {
      root: n ? n.current : void 0,
      rootMargin: s,
      threshold: typeof i == "number" ? i : Ac[i]
    }, a = (u) => {
      const { isIntersecting: l } = u;
      if (this.isInView === l || (this.isInView = l, o && !l && this.hasEnteredView))
        return;
      l && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", l);
      const { onViewportEnter: c, onViewportLeave: h } = this.node.getProps(), d = l ? c : h;
      d && d(u);
    };
    return wc(this.node.current, r, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Cc(e, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Cc({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const Vc = {
  inView: {
    Feature: Dc
  },
  tap: {
    Feature: bc
  },
  focus: {
    Feature: Tc
  },
  hover: {
    Feature: vc
  }
}, Ec = {
  layout: {
    ProjectionNode: Zr,
    MeasureLayout: Wr
  }
}, Jr = Jt({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
}), Ye = Jt({}), Qn = typeof window < "u", Rc = Qn ? No : Be, Qr = Jt({ strict: !1 });
function Mc(t, e, n, s, i) {
  var o, r;
  const { visualElement: a } = at(Ye), u = at(Qr), l = at(Zn), c = at(Jr).reducedMotion, h = ue(null);
  s = s || u.renderer, !h.current && s && (h.current = s(t, {
    visualState: e,
    parent: a,
    props: n,
    presenceContext: l,
    blockInitialAnimation: l ? l.initial === !1 : !1,
    reducedMotionConfig: c
  }));
  const d = h.current, p = at(Ur);
  d && !d.projection && i && (d.type === "html" || d.type === "svg") && Oc(h.current, n, i, p);
  const y = ue(!1);
  Uo(() => {
    d && y.current && d.update(n, l);
  });
  const v = n[Ar], S = ue(!!v && !(!((o = window.MotionHandoffIsComplete) === null || o === void 0) && o.call(window, v)) && ((r = window.MotionHasOptimisedAnimation) === null || r === void 0 ? void 0 : r.call(window, v)));
  return Rc(() => {
    d && (y.current = !0, window.MotionIsMounted = !0, d.updateFeatures(), Jn.render(d.render), S.current && d.animationState && d.animationState.animateChanges());
  }), Be(() => {
    d && (!S.current && d.animationState && d.animationState.animateChanges(), S.current && (queueMicrotask(() => {
      var g;
      (g = window.MotionHandoffMarkAsComplete) === null || g === void 0 || g.call(window, v);
    }), S.current = !1));
  }), d;
}
function Oc(t, e, n, s) {
  const { layoutId: i, layout: o, drag: r, dragConstraints: a, layoutScroll: u, layoutRoot: l } = e;
  t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : to(t.parent)), t.projection.setOptions({
    layoutId: i,
    layout: o,
    alwaysMeasureLayout: !!r || a && Yt(a),
    visualElement: t,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof o == "string" ? o : "both",
    initialPromotionConfig: s,
    layoutScroll: u,
    layoutRoot: l
  });
}
function to(t) {
  if (t)
    return t.options.allowProjection !== !1 ? t.projection : to(t.parent);
}
function Lc(t, e, n) {
  return Bi(
    (s) => {
      s && t.mount && t.mount(s), e && (s ? e.mount(s) : e.unmount()), n && (typeof n == "function" ? n(s) : Yt(n) && (n.current = s));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [e]
  );
}
function Ge(t) {
  return Ue(t.animate) || Rn.some((e) => de(t[e]));
}
function eo(t) {
  return !!(Ge(t) || t.variants);
}
function _c(t, e) {
  if (Ge(t)) {
    const { initial: n, animate: s } = t;
    return {
      initial: n === !1 || de(n) ? n : void 0,
      animate: de(s) ? s : void 0
    };
  }
  return t.inherit !== !1 ? e : {};
}
function kc(t) {
  const { initial: e, animate: n } = _c(t, at(Ye));
  return $e(() => ({ initial: e, animate: n }), [Li(e), Li(n)]);
}
function Li(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const _i = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, Zt = {};
for (const t in _i)
  Zt[t] = {
    isEnabled: (e) => _i[t].some((n) => !!e[n])
  };
function jc(t) {
  for (const e in t)
    Zt[e] = {
      ...Zt[e],
      ...t[e]
    };
}
const Fc = Symbol.for("motionComponentSymbol");
function Ic({ preloadedFeatures: t, createVisualElement: e, useRender: n, useVisualState: s, Component: i }) {
  t && jc(t);
  function o(a, u) {
    let l;
    const c = {
      ...at(Jr),
      ...a,
      layoutId: Bc(a)
    }, { isStatic: h } = c, d = kc(a), p = s(a, h);
    if (!h && Qn) {
      $c(c, t);
      const y = Nc(c);
      l = y.MeasureLayout, d.visualElement = Mc(i, p, c, e, y.ProjectionNode);
    }
    return yt.jsxs(Ye.Provider, { value: d, children: [l && d.visualElement ? yt.jsx(l, { visualElement: d.visualElement, ...c }) : null, n(i, a, Lc(p, d.visualElement, u), p, h, d.visualElement)] });
  }
  const r = Wo(o);
  return r[Fc] = i, r;
}
function Bc({ layoutId: t }) {
  const e = at(Nr).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function $c(t, e) {
  const n = at(Qr).strict;
  if (process.env.NODE_ENV !== "production" && e && n) {
    const s = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    t.ignoreStrict ? Qt(!1, s) : Et(!1, s);
  }
}
function Nc(t) {
  const { drag: e, layout: n } = Zt;
  if (!e && !n)
    return {};
  const s = { ...e, ...n };
  return {
    MeasureLayout: e != null && e.isEnabled(t) || n != null && n.isEnabled(t) ? s.MeasureLayout : void 0,
    ProjectionNode: s.ProjectionNode
  };
}
const Uc = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function ts(t) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof t != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    t.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(Uc.indexOf(t) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(t))
    )
  );
}
function no(t, { style: e, vars: n }, s, i) {
  Object.assign(t.style, e, i && i.getProjectionStyles(s));
  for (const o in n)
    t.style.setProperty(o, n[o]);
}
const so = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function io(t, e, n, s) {
  no(t, e, void 0, s);
  for (const i in e.attrs)
    t.setAttribute(so.has(i) ? i : Xn(i), e.attrs[i]);
}
function ro(t, { layout: e, layoutId: n }) {
  return Bt.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!Fe[t] || t === "opacity");
}
function es(t, e, n) {
  var s;
  const { style: i } = t, o = {};
  for (const r in i)
    (st(i[r]) || e.style && st(e.style[r]) || ro(r, t) || ((s = n == null ? void 0 : n.getValue(r)) === null || s === void 0 ? void 0 : s.liveStyle) !== void 0) && (o[r] = i[r]);
  return o;
}
function oo(t, e, n) {
  const s = es(t, e, n);
  for (const i in t)
    if (st(t[i]) || st(e[i])) {
      const o = ve.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      s[o] = t[i];
    }
  return s;
}
function Wc(t) {
  const e = ue(null);
  return e.current === null && (e.current = t()), e.current;
}
function Kc({ scrapeMotionValuesFromProps: t, createRenderState: e, onMount: n }, s, i, o) {
  const r = {
    latestValues: Yc(s, i, o, t),
    renderState: e()
  };
  return n && (r.mount = (a) => n(s, a, r)), r;
}
const ao = (t) => (e, n) => {
  const s = at(Ye), i = at(Zn), o = () => Kc(t, e, s, i);
  return n ? o() : Wc(o);
};
function Yc(t, e, n, s) {
  const i = {}, o = s(t, {});
  for (const d in o)
    i[d] = Me(o[d]);
  let { initial: r, animate: a } = t;
  const u = Ge(t), l = eo(t);
  e && l && !u && t.inherit !== !1 && (r === void 0 && (r = e.initial), a === void 0 && (a = e.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || r === !1;
  const h = c ? a : r;
  if (h && typeof h != "boolean" && !Ue(h)) {
    const d = Array.isArray(h) ? h : [h];
    for (let p = 0; p < d.length; p++) {
      const y = Vn(t, d[p]);
      if (y) {
        const { transitionEnd: v, transition: S, ...g } = y;
        for (const b in g) {
          let D = g[b];
          if (Array.isArray(D)) {
            const F = c ? D.length - 1 : 0;
            D = D[F];
          }
          D !== null && (i[b] = D);
        }
        for (const b in v)
          i[b] = v[b];
      }
    }
  }
  return i;
}
const ns = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), uo = () => ({
  ...ns(),
  attrs: {}
}), lo = (t, e) => e && typeof t == "number" ? e.transform(t) : t, Gc = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, Hc = ve.length;
function zc(t, e, n) {
  let s = "", i = !0;
  for (let o = 0; o < Hc; o++) {
    const r = ve[o], a = t[r];
    if (a === void 0)
      continue;
    let u = !0;
    if (typeof a == "number" ? u = a === (r.startsWith("scale") ? 1 : 0) : u = parseFloat(a) === 0, !u || n) {
      const l = lo(a, In[r]);
      if (!u) {
        i = !1;
        const c = Gc[r] || r;
        s += `${c}(${l}) `;
      }
      n && (e[r] = l);
    }
  }
  return s = s.trim(), n ? s = n(e, i ? "" : s) : i && (s = "none"), s;
}
function ss(t, e, n) {
  const { style: s, vars: i, transformOrigin: o } = t;
  let r = !1, a = !1;
  for (const u in e) {
    const l = e[u];
    if (Bt.has(u)) {
      r = !0;
      continue;
    } else if (tr(u)) {
      i[u] = l;
      continue;
    } else {
      const c = lo(l, In[u]);
      u.startsWith("origin") ? (a = !0, o[u] = c) : s[u] = c;
    }
  }
  if (e.transform || (r || n ? s.transform = zc(e, t.transform, n) : s.transform && (s.transform = "none")), a) {
    const { originX: u = "50%", originY: l = "50%", originZ: c = 0 } = o;
    s.transformOrigin = `${u} ${l} ${c}`;
  }
}
function ki(t, e, n) {
  return typeof t == "string" ? t : E.transform(e + n * t);
}
function Xc(t, e, n) {
  const s = ki(e, t.x, t.width), i = ki(n, t.y, t.height);
  return `${s} ${i}`;
}
const qc = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, Zc = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Jc(t, e, n = 1, s = 0, i = !0) {
  t.pathLength = 1;
  const o = i ? qc : Zc;
  t[o.offset] = E.transform(-s);
  const r = E.transform(e), a = E.transform(n);
  t[o.array] = `${r} ${a}`;
}
function is(t, {
  attrX: e,
  attrY: n,
  attrScale: s,
  originX: i,
  originY: o,
  pathLength: r,
  pathSpacing: a = 1,
  pathOffset: u = 0,
  // This is object creation, which we try to avoid per-frame.
  ...l
}, c, h) {
  if (ss(t, l, h), c) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: d, style: p, dimensions: y } = t;
  d.transform && (y && (p.transform = d.transform), delete d.transform), y && (i !== void 0 || o !== void 0 || p.transform) && (p.transformOrigin = Xc(y, i !== void 0 ? i : 0.5, o !== void 0 ? o : 0.5)), e !== void 0 && (d.x = e), n !== void 0 && (d.y = n), s !== void 0 && (d.scale = s), r !== void 0 && Jc(d, r, a, u, !1);
}
const rs = (t) => typeof t == "string" && t.toLowerCase() === "svg", Qc = {
  useVisualState: ao({
    scrapeMotionValuesFromProps: oo,
    createRenderState: uo,
    onMount: (t, e, { renderState: n, latestValues: s }) => {
      K.read(() => {
        try {
          n.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
        } catch {
          n.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
      }), K.render(() => {
        is(n, s, rs(e.tagName), t.transformTemplate), io(e, n);
      });
    }
  })
}, tf = {
  useVisualState: ao({
    scrapeMotionValuesFromProps: es,
    createRenderState: ns
  })
};
function co(t, e, n) {
  for (const s in e)
    !st(e[s]) && !ro(s, n) && (t[s] = e[s]);
}
function ef({ transformTemplate: t }, e) {
  return $e(() => {
    const n = ns();
    return ss(n, e, t), Object.assign({}, n.vars, n.style);
  }, [e]);
}
function nf(t, e) {
  const n = t.style || {}, s = {};
  return co(s, n, t), Object.assign(s, ef(t, e)), s;
}
function sf(t, e) {
  const n = {}, s = nf(t, e);
  return t.drag && t.dragListener !== !1 && (n.draggable = !1, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = s, n;
}
const rf = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function Ie(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || rf.has(t);
}
let fo = (t) => !Ie(t);
function of(t) {
  t && (fo = (e) => e.startsWith("on") ? !Ie(e) : t(e));
}
try {
  of(require("@emotion/is-prop-valid").default);
} catch {
}
function af(t, e, n) {
  const s = {};
  for (const i in t)
    i === "values" && typeof t.values == "object" || (fo(i) || n === !0 && Ie(i) || !e && !Ie(i) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && i.startsWith("onDrag")) && (s[i] = t[i]);
  return s;
}
function uf(t, e, n, s) {
  const i = $e(() => {
    const o = uo();
    return is(o, e, rs(s), t.transformTemplate), {
      ...o.attrs,
      style: { ...o.style }
    };
  }, [e]);
  if (t.style) {
    const o = {};
    co(o, t.style, t), i.style = { ...o, ...i.style };
  }
  return i;
}
function lf(t = !1) {
  return (n, s, i, { latestValues: o }, r) => {
    const u = (ts(n) ? uf : sf)(s, o, r, n), l = af(s, typeof n == "string", t), c = n !== $i ? { ...l, ...u, ref: i } : {}, { children: h } = s, d = $e(() => st(h) ? h.get() : h, [h]);
    return Ko(n, {
      ...c,
      children: d
    });
  };
}
function cf(t, e) {
  return function(s, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const r = {
      ...ts(s) ? Qc : tf,
      preloadedFeatures: t,
      useRender: lf(i),
      createVisualElement: e,
      Component: s
    };
    return Ic(r);
  };
}
const Cn = { current: null }, ho = { current: !1 };
function ff() {
  if (ho.current = !0, !!Qn)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => Cn.current = t.matches;
      t.addListener(e), e();
    } else
      Cn.current = !1;
}
function hf(t, e, n) {
  for (const s in e) {
    const i = e[s], o = n[s];
    if (st(i))
      t.addValue(s, i), process.env.NODE_ENV === "development" && Ne(i.version === "11.15.0", `Attempting to mix Motion versions ${i.version} with 11.15.0 may not work as expected.`);
    else if (st(o))
      t.addValue(s, ge(i, { owner: t }));
    else if (o !== i)
      if (t.hasValue(s)) {
        const r = t.getValue(s);
        r.liveStyle === !0 ? r.jump(i) : r.hasAnimated || r.set(i);
      } else {
        const r = t.getStaticValue(s);
        t.addValue(s, ge(r !== void 0 ? r : i, { owner: t }));
      }
  }
  for (const s in n)
    e[s] === void 0 && t.removeValue(s);
  return e;
}
const ji = /* @__PURE__ */ new WeakMap(), df = [...sr, nt, Mt], pf = (t) => df.find(nr(t)), Fi = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class mf {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(e, n, s) {
    return {};
  }
  constructor({ parent: e, props: n, presenceContext: s, reducedMotionConfig: i, blockInitialAnimation: o, visualState: r }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = kn, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const d = wt.now();
      this.renderScheduledAt < d && (this.renderScheduledAt = d, K.render(this.render, !1, !0));
    };
    const { latestValues: u, renderState: l } = r;
    this.latestValues = u, this.baseTarget = { ...u }, this.initialValues = n.initial ? { ...u } : {}, this.renderState = l, this.parent = e, this.props = n, this.presenceContext = s, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = Ge(n), this.isVariantNode = eo(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: c, ...h } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const d in h) {
      const p = h[d];
      u[d] !== void 0 && st(p) && p.set(u[d], !1);
    }
  }
  mount(e) {
    this.current = e, ji.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, s) => this.bindToMotionValue(s, n)), ho.current || ff(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Cn.current, process.env.NODE_ENV !== "production" && Ne(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    ji.delete(this.current), this.projection && this.projection.unmount(), Rt(this.notifyUpdate), Rt(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const e in this.events)
      this.events[e].clear();
    for (const e in this.features) {
      const n = this.features[e];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  bindToMotionValue(e, n) {
    this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
    const s = Bt.has(e), i = n.on("change", (a) => {
      this.latestValues[e] = a, this.props.onUpdate && K.preRender(this.notifyUpdate), s && this.projection && (this.projection.isTransformDirty = !0);
    }), o = n.on("renderRequest", this.scheduleRender);
    let r;
    window.MotionCheckAppearSync && (r = window.MotionCheckAppearSync(this, e, n)), this.valueSubscriptions.set(e, () => {
      i(), o(), r && r(), n.owner && n.stop();
    });
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in Zt) {
      const n = Zt[e];
      if (!n)
        continue;
      const { isEnabled: s, Feature: i } = n;
      if (!this.features[e] && i && s(this.props) && (this.features[e] = new i(this)), this.features[e]) {
        const o = this.features[e];
        o.isMounted ? o.update() : (o.mount(), o.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Z();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(e, n) {
    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let s = 0; s < Fi.length; s++) {
      const i = Fi[s];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const o = "on" + i, r = e[o];
      r && (this.propEventSubscriptions[i] = this.on(i, r));
    }
    this.prevMotionValues = hf(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(e, n) {
    const s = this.values.get(e);
    n !== s && (s && this.removeValue(e), this.bindToMotionValue(e, n), this.values.set(e, n), this.latestValues[e] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    n && (n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e])
      return this.props.values[e];
    let s = this.values.get(e);
    return s === void 0 && n !== void 0 && (s = ge(n === null ? void 0 : n, { owner: this }), this.addValue(e, s)), s;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(e, n) {
    var s;
    let i = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (s = this.getBaseTargetFromProps(this.props, e)) !== null && s !== void 0 ? s : this.readValueFromInstance(this.current, e, this.options);
    return i != null && (typeof i == "string" && (Ji(i) || Zi(i)) ? i = parseFloat(i) : !pf(i) && Mt.test(n) && (i = fr(e, n)), this.setBaseTarget(e, st(i) ? i.get() : i)), st(i) ? i.get() : i;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(e) {
    var n;
    const { initial: s } = this.props;
    let i;
    if (typeof s == "string" || typeof s == "object") {
      const r = Vn(this.props, s, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      r && (i = r[e]);
    }
    if (s && i !== void 0)
      return i;
    const o = this.getBaseTargetFromProps(this.props, e);
    return o !== void 0 && !st(o) ? o : this.initialValues[e] !== void 0 && i === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new zn()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
}
class po extends mf {
  constructor() {
    super(...arguments), this.KeyframeResolver = hr;
  }
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    return e.style ? e.style[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: s }) {
    delete n[e], delete s[e];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    st(e) && (this.childSubscription = e.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function gf(t) {
  return window.getComputedStyle(t);
}
class yf extends po {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = no;
  }
  readValueFromInstance(e, n) {
    if (Bt.has(n)) {
      const s = Bn(n);
      return s && s.default || 0;
    } else {
      const s = gf(e), i = (tr(n) ? s.getPropertyValue(n) : s[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return Br(e, n);
  }
  build(e, n, s) {
    ss(e, n, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return es(e, n, s);
  }
}
class vf extends po {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Z;
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (Bt.has(n)) {
      const s = Bn(n);
      return s && s.default || 0;
    }
    return n = so.has(n) ? n : Xn(n), e.getAttribute(n);
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return oo(e, n, s);
  }
  build(e, n, s) {
    is(e, n, this.isSVGTag, s.transformTemplate);
  }
  renderInstance(e, n, s, i) {
    io(e, n, s, i);
  }
  mount(e) {
    this.isSVGTag = rs(e.tagName), super.mount(e);
  }
}
const Tf = (t, e) => ts(t) ? new vf(e) : new yf(e, {
  allowProjection: t !== $i
}), bf = /* @__PURE__ */ cf({
  ...Qu,
  ...Vc,
  ...yc,
  ...Ec
}, Tf), xf = /* @__PURE__ */ qo(bf), Sf = "style-module__timeCell__vSRJm", Pf = "style-module__water__igzod", wf = "style-module__anim__PooNm", Af = "style-module__waterContent__uSkxq", Df = "style-module__waterProgress__7WR-F", Ve = {
  timeCell: Sf,
  water: Pf,
  anim: wf,
  waterContent: Af,
  waterProgress: Df
};
var mo = { exports: {} };
(function(t, e) {
  (function(n, s) {
    t.exports = s();
  })(Go, function() {
    var n = 1e3, s = 6e4, i = 36e5, o = "millisecond", r = "second", a = "minute", u = "hour", l = "day", c = "week", h = "month", d = "quarter", p = "year", y = "date", v = "Invalid Date", S = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, g = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, b = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(V) {
      var w = ["th", "st", "nd", "rd"], x = V % 100;
      return "[" + V + (w[(x - 20) % 10] || w[x] || w[0]) + "]";
    } }, D = function(V, w, x) {
      var P = String(V);
      return !P || P.length >= w ? V : "" + Array(w + 1 - P.length).join(x) + V;
    }, F = { s: D, z: function(V) {
      var w = -V.utcOffset(), x = Math.abs(w), P = Math.floor(x / 60), T = x % 60;
      return (w <= 0 ? "+" : "-") + D(P, 2, "0") + ":" + D(T, 2, "0");
    }, m: function V(w, x) {
      if (w.date() < x.date()) return -V(x, w);
      var P = 12 * (x.year() - w.year()) + (x.month() - w.month()), T = w.clone().add(P, h), R = x - T < 0, M = w.clone().add(P + (R ? -1 : 1), h);
      return +(-(P + (x - T) / (R ? T - M : M - T)) || 0);
    }, a: function(V) {
      return V < 0 ? Math.ceil(V) || 0 : Math.floor(V);
    }, p: function(V) {
      return { M: h, y: p, w: c, d: l, D: y, h: u, m: a, s: r, ms: o, Q: d }[V] || String(V || "").toLowerCase().replace(/s$/, "");
    }, u: function(V) {
      return V === void 0;
    } }, C = "en", _ = {};
    _[C] = b;
    var W = "$isDayjsObject", L = function(V) {
      return V instanceof vt || !(!V || !V[W]);
    }, Y = function V(w, x, P) {
      var T;
      if (!w) return C;
      if (typeof w == "string") {
        var R = w.toLowerCase();
        _[R] && (T = R), x && (_[R] = x, T = R);
        var M = w.split("-");
        if (!T && M.length > 1) return V(M[0]);
      } else {
        var N = w.name;
        _[N] = w, T = N;
      }
      return !P && T && (C = T), T || !P && C;
    }, B = function(V, w) {
      if (L(V)) return V.clone();
      var x = typeof w == "object" ? w : {};
      return x.date = V, x.args = arguments, new vt(x);
    }, k = F;
    k.l = Y, k.i = L, k.w = function(V, w) {
      return B(V, { locale: w.$L, utc: w.$u, x: w.$x, $offset: w.$offset });
    };
    var vt = function() {
      function V(x) {
        this.$L = Y(x.locale, null, !0), this.parse(x), this.$x = this.$x || x.x || {}, this[W] = !0;
      }
      var w = V.prototype;
      return w.parse = function(x) {
        this.$d = function(P) {
          var T = P.date, R = P.utc;
          if (T === null) return /* @__PURE__ */ new Date(NaN);
          if (k.u(T)) return /* @__PURE__ */ new Date();
          if (T instanceof Date) return new Date(T);
          if (typeof T == "string" && !/Z$/i.test(T)) {
            var M = T.match(S);
            if (M) {
              var N = M[2] - 1 || 0, G = (M[7] || "0").substring(0, 3);
              return R ? new Date(Date.UTC(M[1], N, M[3] || 1, M[4] || 0, M[5] || 0, M[6] || 0, G)) : new Date(M[1], N, M[3] || 1, M[4] || 0, M[5] || 0, M[6] || 0, G);
            }
          }
          return new Date(T);
        }(x), this.init();
      }, w.init = function() {
        var x = this.$d;
        this.$y = x.getFullYear(), this.$M = x.getMonth(), this.$D = x.getDate(), this.$W = x.getDay(), this.$H = x.getHours(), this.$m = x.getMinutes(), this.$s = x.getSeconds(), this.$ms = x.getMilliseconds();
      }, w.$utils = function() {
        return k;
      }, w.isValid = function() {
        return this.$d.toString() !== v;
      }, w.isSame = function(x, P) {
        var T = B(x);
        return this.startOf(P) <= T && T <= this.endOf(P);
      }, w.isAfter = function(x, P) {
        return B(x) < this.startOf(P);
      }, w.isBefore = function(x, P) {
        return this.endOf(P) < B(x);
      }, w.$g = function(x, P, T) {
        return k.u(x) ? this[P] : this.set(T, x);
      }, w.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, w.valueOf = function() {
        return this.$d.getTime();
      }, w.startOf = function(x, P) {
        var T = this, R = !!k.u(P) || P, M = k.p(x), N = function(mt, Q) {
          var xt = k.w(T.$u ? Date.UTC(T.$y, Q, mt) : new Date(T.$y, Q, mt), T);
          return R ? xt : xt.endOf(l);
        }, G = function(mt, Q) {
          return k.w(T.toDate()[mt].apply(T.toDate("s"), (R ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Q)), T);
        }, X = this.$W, tt = this.$M, rt = this.$D, Tt = "set" + (this.$u ? "UTC" : "");
        switch (M) {
          case p:
            return R ? N(1, 0) : N(31, 11);
          case h:
            return R ? N(1, tt) : N(0, tt + 1);
          case c:
            var pt = this.$locale().weekStart || 0, bt = (X < pt ? X + 7 : X) - pt;
            return N(R ? rt - bt : rt + (6 - bt), tt);
          case l:
          case y:
            return G(Tt + "Hours", 0);
          case u:
            return G(Tt + "Minutes", 1);
          case a:
            return G(Tt + "Seconds", 2);
          case r:
            return G(Tt + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, w.endOf = function(x) {
        return this.startOf(x, !1);
      }, w.$set = function(x, P) {
        var T, R = k.p(x), M = "set" + (this.$u ? "UTC" : ""), N = (T = {}, T[l] = M + "Date", T[y] = M + "Date", T[h] = M + "Month", T[p] = M + "FullYear", T[u] = M + "Hours", T[a] = M + "Minutes", T[r] = M + "Seconds", T[o] = M + "Milliseconds", T)[R], G = R === l ? this.$D + (P - this.$W) : P;
        if (R === h || R === p) {
          var X = this.clone().set(y, 1);
          X.$d[N](G), X.init(), this.$d = X.set(y, Math.min(this.$D, X.daysInMonth())).$d;
        } else N && this.$d[N](G);
        return this.init(), this;
      }, w.set = function(x, P) {
        return this.clone().$set(x, P);
      }, w.get = function(x) {
        return this[k.p(x)]();
      }, w.add = function(x, P) {
        var T, R = this;
        x = Number(x);
        var M = k.p(P), N = function(tt) {
          var rt = B(R);
          return k.w(rt.date(rt.date() + Math.round(tt * x)), R);
        };
        if (M === h) return this.set(h, this.$M + x);
        if (M === p) return this.set(p, this.$y + x);
        if (M === l) return N(1);
        if (M === c) return N(7);
        var G = (T = {}, T[a] = s, T[u] = i, T[r] = n, T)[M] || 1, X = this.$d.getTime() + x * G;
        return k.w(X, this);
      }, w.subtract = function(x, P) {
        return this.add(-1 * x, P);
      }, w.format = function(x) {
        var P = this, T = this.$locale();
        if (!this.isValid()) return T.invalidDate || v;
        var R = x || "YYYY-MM-DDTHH:mm:ssZ", M = k.z(this), N = this.$H, G = this.$m, X = this.$M, tt = T.weekdays, rt = T.months, Tt = T.meridiem, pt = function(Q, xt, Ct, $t) {
          return Q && (Q[xt] || Q(P, R)) || Ct[xt].slice(0, $t);
        }, bt = function(Q) {
          return k.s(N % 12 || 12, Q, "0");
        }, mt = Tt || function(Q, xt, Ct) {
          var $t = Q < 12 ? "AM" : "PM";
          return Ct ? $t.toLowerCase() : $t;
        };
        return R.replace(g, function(Q, xt) {
          return xt || function(Ct) {
            switch (Ct) {
              case "YY":
                return String(P.$y).slice(-2);
              case "YYYY":
                return k.s(P.$y, 4, "0");
              case "M":
                return X + 1;
              case "MM":
                return k.s(X + 1, 2, "0");
              case "MMM":
                return pt(T.monthsShort, X, rt, 3);
              case "MMMM":
                return pt(rt, X);
              case "D":
                return P.$D;
              case "DD":
                return k.s(P.$D, 2, "0");
              case "d":
                return String(P.$W);
              case "dd":
                return pt(T.weekdaysMin, P.$W, tt, 2);
              case "ddd":
                return pt(T.weekdaysShort, P.$W, tt, 3);
              case "dddd":
                return tt[P.$W];
              case "H":
                return String(N);
              case "HH":
                return k.s(N, 2, "0");
              case "h":
                return bt(1);
              case "hh":
                return bt(2);
              case "a":
                return mt(N, G, !0);
              case "A":
                return mt(N, G, !1);
              case "m":
                return String(G);
              case "mm":
                return k.s(G, 2, "0");
              case "s":
                return String(P.$s);
              case "ss":
                return k.s(P.$s, 2, "0");
              case "SSS":
                return k.s(P.$ms, 3, "0");
              case "Z":
                return M;
            }
            return null;
          }(Q) || M.replace(":", "");
        });
      }, w.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, w.diff = function(x, P, T) {
        var R, M = this, N = k.p(P), G = B(x), X = (G.utcOffset() - this.utcOffset()) * s, tt = this - G, rt = function() {
          return k.m(M, G);
        };
        switch (N) {
          case p:
            R = rt() / 12;
            break;
          case h:
            R = rt();
            break;
          case d:
            R = rt() / 3;
            break;
          case c:
            R = (tt - X) / 6048e5;
            break;
          case l:
            R = (tt - X) / 864e5;
            break;
          case u:
            R = tt / i;
            break;
          case a:
            R = tt / s;
            break;
          case r:
            R = tt / n;
            break;
          default:
            R = tt;
        }
        return T ? R : k.a(R);
      }, w.daysInMonth = function() {
        return this.endOf(h).$D;
      }, w.$locale = function() {
        return _[this.$L];
      }, w.locale = function(x, P) {
        if (!x) return this.$L;
        var T = this.clone(), R = Y(x, P, !0);
        return R && (T.$L = R), T;
      }, w.clone = function() {
        return k.w(this.$d, this);
      }, w.toDate = function() {
        return new Date(this.valueOf());
      }, w.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, w.toISOString = function() {
        return this.$d.toISOString();
      }, w.toString = function() {
        return this.$d.toUTCString();
      }, V;
    }(), lt = vt.prototype;
    return B.prototype = lt, [["$ms", o], ["$s", r], ["$m", a], ["$H", u], ["$W", l], ["$M", h], ["$y", p], ["$D", y]].forEach(function(V) {
      lt[V[1]] = function(w) {
        return this.$g(w, V[0], V[1]);
      };
    }), B.extend = function(V, w) {
      return V.$i || (V(w, vt, B), V.$i = !0), B;
    }, B.locale = Y, B.isDayjs = L, B.unix = function(V) {
      return B(1e3 * V);
    }, B.en = _[C], B.Ls = _, B.p = {}, B;
  });
})(mo);
var Cf = mo.exports;
const Wt = /* @__PURE__ */ Ho(Cf);
function Vf({
  index: t,
  currentIndex: e,
  isEditing: n = !1,
  maxValue: s,
  unit: i,
  label: o,
  birthDate: r
}) {
  const [a, u] = Yo(0), l = ue(null);
  Be(() => {
    if (t === e) {
      const y = () => {
        var b, D, F, C;
        const S = /* @__PURE__ */ new Date();
        let g = 0;
        switch (i) {
          case "year":
            const _ = new Date(S.getFullYear(), new Date(r).getMonth(), new Date(r).getDate()), W = (b = Wt(_)) != null && b.isBefore(S) ? _ : (D = Wt(_)) == null ? void 0 : D.subtract(1, "year"), L = (F = Wt(_)) != null && F.isAfter(S) ? _ : (C = Wt(_)) == null ? void 0 : C.add(1, "year");
            g = Wt().diff(W, "day") / Wt(L).diff(W, "day");
            break;
          case "month":
            const Y = new Date(S.getFullYear(), S.getMonth() + 1, 0).getDate();
            g = (S.getDate() - 1 + S.getHours() / 24) / Y;
            break;
          case "day":
            g = (S.getHours() + S.getMinutes() / 60) / 24;
            break;
          case "hour":
            g = S.getMinutes() / 60;
            break;
        }
        u(g * 100);
      };
      y();
      const v = setInterval(y, 6e4);
      return () => clearInterval(v);
    }
  }, [t, e, i, r]);
  const c = () => t < e ? "past" : t === e ? "current" : "future", h = () => {
    const y = c(), v = "aspect-square rounded-lg relative transition-all duration-300 overflow-hidden group", S = {
      past: "bg-gray-200",
      current: "bg-lime-700",
      future: "bg-lime-700"
    }, g = s && t >= s && n ? "opacity-50" : "";
    return `${v} ${S[y]} ${g}`;
  }, d = () => {
    const y = c();
    return {
      past: "text-gray-600",
      current: "text-white",
      future: "text-white"
    }[y];
  }, p = () => {
    if (o) return o;
    switch (i) {
      case "year":
        return t;
      case "month":
        return [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ][t];
      case "day":
        return t + 1;
      case "hour":
        return `${t}:00`;
      default:
        return t;
    }
  };
  return /* @__PURE__ */ yt.jsxs(
    xf.div,
    {
      ref: l,
      initial: { scale: 0.8, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: { delay: t * 0.01 },
      className: h(),
      style: { "--progress": `-${a + 100}%` },
      children: [
        /* @__PURE__ */ yt.jsx("span", { className: `absolute top-1 left-1 text-xs ${d()} z-10`, children: p() }),
        t === e && /* @__PURE__ */ yt.jsx("div", { className: Ve.timeCell, children: /* @__PURE__ */ yt.jsx("div", { className: Ve.water, children: /* @__PURE__ */ yt.jsx("div", { className: Ve.waterContent, children: /* @__PURE__ */ yt.jsxs("div", { className: `${Ve.waterProgress} hidden sm:block`, children: [
          Math.round(a),
          "%"
        ] }) }) }) })
      ]
    },
    t
  );
}
const Of = ({ unit: t, lifeExpectancy: e, currentYear: n, birthDate: s, isEditing: i, maxValue: o }) => /* @__PURE__ */ yt.jsx("div", { className: "grid grid-cols-10 gap-2", children: Array.from({ length: e + 1 }).map((r, a) => /* @__PURE__ */ yt.jsx(
  Vf,
  {
    index: a,
    currentIndex: n,
    birthDate: s,
    isEditing: i,
    maxValue: o,
    unit: t,
    label: String(a)
  },
  a
)) });
export {
  Of as TimeGridCells
};
