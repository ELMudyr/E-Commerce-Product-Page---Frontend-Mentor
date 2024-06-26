(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === "childList")
        for (const i of l.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const l = {};
    return (
      o.integrity && (l.integrity = o.integrity),
      o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = n(o);
    fetch(o.href, l);
  }
})();
function qf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var la = { exports: {} },
  Bo = {},
  ia = { exports: {} },
  $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tr = Symbol.for("react.element"),
  ed = Symbol.for("react.portal"),
  td = Symbol.for("react.fragment"),
  nd = Symbol.for("react.strict_mode"),
  rd = Symbol.for("react.profiler"),
  od = Symbol.for("react.provider"),
  ld = Symbol.for("react.context"),
  id = Symbol.for("react.forward_ref"),
  sd = Symbol.for("react.suspense"),
  ud = Symbol.for("react.memo"),
  ad = Symbol.for("react.lazy"),
  Bs = Symbol.iterator;
function cd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Bs && e[Bs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var sa = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ua = Object.assign,
  aa = {};
function An(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = aa),
    (this.updater = n || sa);
}
An.prototype.isReactComponent = {};
An.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
An.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ca() {}
ca.prototype = An.prototype;
function Mi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = aa),
    (this.updater = n || sa);
}
var Ii = (Mi.prototype = new ca());
Ii.constructor = Mi;
ua(Ii, An.prototype);
Ii.isPureReactComponent = !0;
var Hs = Array.isArray,
  fa = Object.prototype.hasOwnProperty,
  Ri = { current: null },
  da = { key: !0, ref: !0, __self: !0, __source: !0 };
function pa(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      fa.call(t, r) && !da.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
    o.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: Tr,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: Ri.current,
  };
}
function fd(e, t) {
  return {
    $$typeof: Tr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Di(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Tr;
}
function dd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ws = /\/+/g;
function cl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? dd("" + e.key)
    : t.toString(36);
}
function no(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (l) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Tr:
          case ed:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + cl(i, 0) : r),
      Hs(o)
        ? ((n = ""),
          e != null && (n = e.replace(Ws, "$&/") + "/"),
          no(o, t, n, "", function (a) {
            return a;
          }))
        : o != null &&
          (Di(o) &&
            (o = fd(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Ws, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Hs(e)))
    for (var s = 0; s < e.length; s++) {
      l = e[s];
      var u = r + cl(l, s);
      i += no(l, t, n, u, o);
    }
  else if (((u = cd(e)), typeof u == "function"))
    for (e = u.call(e), s = 0; !(l = e.next()).done; )
      (l = l.value), (u = r + cl(l, s++)), (i += no(l, t, n, u, o));
  else if (l === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function Fr(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    no(e, r, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    r
  );
}
function pd(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ne = { current: null },
  ro = { transition: null },
  md = {
    ReactCurrentDispatcher: Ne,
    ReactCurrentBatchConfig: ro,
    ReactCurrentOwner: Ri,
  };
function ma() {
  throw Error("act(...) is not supported in production builds of React.");
}
$.Children = {
  map: Fr,
  forEach: function (e, t, n) {
    Fr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Fr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Fr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Di(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
$.Component = An;
$.Fragment = td;
$.Profiler = rd;
$.PureComponent = Mi;
$.StrictMode = nd;
$.Suspense = sd;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = md;
$.act = ma;
$.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = ua({}, e.props),
    o = e.key,
    l = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (i = Ri.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      fa.call(t, u) &&
        !da.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
    r.children = s;
  }
  return { $$typeof: Tr, type: e.type, key: o, ref: l, props: r, _owner: i };
};
$.createContext = function (e) {
  return (
    (e = {
      $$typeof: ld,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: od, _context: e }),
    (e.Consumer = e)
  );
};
$.createElement = pa;
$.createFactory = function (e) {
  var t = pa.bind(null, e);
  return (t.type = e), t;
};
$.createRef = function () {
  return { current: null };
};
$.forwardRef = function (e) {
  return { $$typeof: id, render: e };
};
$.isValidElement = Di;
$.lazy = function (e) {
  return { $$typeof: ad, _payload: { _status: -1, _result: e }, _init: pd };
};
$.memo = function (e, t) {
  return { $$typeof: ud, type: e, compare: t === void 0 ? null : t };
};
$.startTransition = function (e) {
  var t = ro.transition;
  ro.transition = {};
  try {
    e();
  } finally {
    ro.transition = t;
  }
};
$.unstable_act = ma;
$.useCallback = function (e, t) {
  return Ne.current.useCallback(e, t);
};
$.useContext = function (e) {
  return Ne.current.useContext(e);
};
$.useDebugValue = function () {};
$.useDeferredValue = function (e) {
  return Ne.current.useDeferredValue(e);
};
$.useEffect = function (e, t) {
  return Ne.current.useEffect(e, t);
};
$.useId = function () {
  return Ne.current.useId();
};
$.useImperativeHandle = function (e, t, n) {
  return Ne.current.useImperativeHandle(e, t, n);
};
$.useInsertionEffect = function (e, t) {
  return Ne.current.useInsertionEffect(e, t);
};
$.useLayoutEffect = function (e, t) {
  return Ne.current.useLayoutEffect(e, t);
};
$.useMemo = function (e, t) {
  return Ne.current.useMemo(e, t);
};
$.useReducer = function (e, t, n) {
  return Ne.current.useReducer(e, t, n);
};
$.useRef = function (e) {
  return Ne.current.useRef(e);
};
$.useState = function (e) {
  return Ne.current.useState(e);
};
$.useSyncExternalStore = function (e, t, n) {
  return Ne.current.useSyncExternalStore(e, t, n);
};
$.useTransition = function () {
  return Ne.current.useTransition();
};
$.version = "18.3.1";
ia.exports = $;
var L = ia.exports;
const hd = qf(L);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gd = L,
  vd = Symbol.for("react.element"),
  yd = Symbol.for("react.fragment"),
  wd = Object.prototype.hasOwnProperty,
  xd = gd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Sd = { key: !0, ref: !0, __self: !0, __source: !0 };
function ha(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) wd.call(t, r) && !Sd.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: vd,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: xd.current,
  };
}
Bo.Fragment = yd;
Bo.jsx = ha;
Bo.jsxs = ha;
la.exports = Bo;
var S = la.exports,
  Dl = {},
  ga = { exports: {} },
  $e = {},
  va = { exports: {} },
  ya = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, T) {
    var I = _.length;
    _.push(T);
    e: for (; 0 < I; ) {
      var F = (I - 1) >>> 1,
        U = _[F];
      if (0 < o(U, T)) (_[F] = T), (_[I] = U), (I = F);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var T = _[0],
      I = _.pop();
    if (I !== T) {
      _[0] = I;
      e: for (var F = 0, U = _.length, ze = U >>> 1; F < ze; ) {
        var Ie = 2 * (F + 1) - 1,
          ft = _[Ie],
          oe = Ie + 1,
          Se = _[oe];
        if (0 > o(ft, I))
          oe < U && 0 > o(Se, ft)
            ? ((_[F] = Se), (_[oe] = I), (F = oe))
            : ((_[F] = ft), (_[Ie] = I), (F = Ie));
        else if (oe < U && 0 > o(Se, I)) (_[F] = Se), (_[oe] = I), (F = oe);
        else break e;
      }
    }
    return T;
  }
  function o(_, T) {
    var I = _.sortIndex - T.sortIndex;
    return I !== 0 ? I : _.id - T.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var i = Date,
      s = i.now();
    e.unstable_now = function () {
      return i.now() - s;
    };
  }
  var u = [],
    a = [],
    h = 1,
    d = null,
    m = 3,
    w = !1,
    g = !1,
    v = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(_) {
    for (var T = n(a); T !== null; ) {
      if (T.callback === null) r(a);
      else if (T.startTime <= _)
        r(a), (T.sortIndex = T.expirationTime), t(u, T);
      else break;
      T = n(a);
    }
  }
  function y(_) {
    if (((v = !1), p(_), !g))
      if (n(u) !== null) (g = !0), me(C);
      else {
        var T = n(a);
        T !== null && he(y, T.startTime - _);
      }
  }
  function C(_, T) {
    (g = !1), v && ((v = !1), f(N), (N = -1)), (w = !0);
    var I = m;
    try {
      for (
        p(T), d = n(u);
        d !== null && (!(d.expirationTime > T) || (_ && !A()));

      ) {
        var F = d.callback;
        if (typeof F == "function") {
          (d.callback = null), (m = d.priorityLevel);
          var U = F(d.expirationTime <= T);
          (T = e.unstable_now()),
            typeof U == "function" ? (d.callback = U) : d === n(u) && r(u),
            p(T);
        } else r(u);
        d = n(u);
      }
      if (d !== null) var ze = !0;
      else {
        var Ie = n(a);
        Ie !== null && he(y, Ie.startTime - T), (ze = !1);
      }
      return ze;
    } finally {
      (d = null), (m = I), (w = !1);
    }
  }
  var P = !1,
    k = null,
    N = -1,
    M = 5,
    z = -1;
  function A() {
    return !(e.unstable_now() - z < M);
  }
  function R() {
    if (k !== null) {
      var _ = e.unstable_now();
      z = _;
      var T = !0;
      try {
        T = k(!0, _);
      } finally {
        T ? re() : ((P = !1), (k = null));
      }
    } else P = !1;
  }
  var re;
  if (typeof c == "function")
    re = function () {
      c(R);
    };
  else if (typeof MessageChannel < "u") {
    var q = new MessageChannel(),
      _e = q.port2;
    (q.port1.onmessage = R),
      (re = function () {
        _e.postMessage(null);
      });
  } else
    re = function () {
      x(R, 0);
    };
  function me(_) {
    (k = _), P || ((P = !0), re());
  }
  function he(_, T) {
    N = x(function () {
      _(e.unstable_now());
    }, T);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || w || ((g = !0), me(C));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (M = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (_) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = m;
      }
      var I = m;
      m = T;
      try {
        return _();
      } finally {
        m = I;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, T) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var I = m;
      m = _;
      try {
        return T();
      } finally {
        m = I;
      }
    }),
    (e.unstable_scheduleCallback = function (_, T, I) {
      var F = e.unstable_now();
      switch (
        (typeof I == "object" && I !== null
          ? ((I = I.delay), (I = typeof I == "number" && 0 < I ? F + I : F))
          : (I = F),
        _)
      ) {
        case 1:
          var U = -1;
          break;
        case 2:
          U = 250;
          break;
        case 5:
          U = 1073741823;
          break;
        case 4:
          U = 1e4;
          break;
        default:
          U = 5e3;
      }
      return (
        (U = I + U),
        (_ = {
          id: h++,
          callback: T,
          priorityLevel: _,
          startTime: I,
          expirationTime: U,
          sortIndex: -1,
        }),
        I > F
          ? ((_.sortIndex = I),
            t(a, _),
            n(u) === null &&
              _ === n(a) &&
              (v ? (f(N), (N = -1)) : (v = !0), he(y, I - F)))
          : ((_.sortIndex = U), t(u, _), g || w || ((g = !0), me(C))),
        _
      );
    }),
    (e.unstable_shouldYield = A),
    (e.unstable_wrapCallback = function (_) {
      var T = m;
      return function () {
        var I = m;
        m = T;
        try {
          return _.apply(this, arguments);
        } finally {
          m = I;
        }
      };
    });
})(ya);
va.exports = ya;
var kd = va.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cd = L,
  Fe = kd;
function E(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var wa = new Set(),
  fr = {};
function un(e, t) {
  Ln(e, t), Ln(e + "Capture", t);
}
function Ln(e, t) {
  for (fr[e] = t, e = 0; e < t.length; e++) wa.add(t[e]);
}
var yt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Al = Object.prototype.hasOwnProperty,
  Ed =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Qs = {},
  Gs = {};
function Nd(e) {
  return Al.call(Gs, e)
    ? !0
    : Al.call(Qs, e)
    ? !1
    : Ed.test(e)
    ? (Gs[e] = !0)
    : ((Qs[e] = !0), !1);
}
function Pd(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function _d(e, t, n, r) {
  if (t === null || typeof t > "u" || Pd(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Pe(e, t, n, r, o, l, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = i);
}
var pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    pe[e] = new Pe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  pe[t] = new Pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  pe[e] = new Pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  pe[e] = new Pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    pe[e] = new Pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  pe[e] = new Pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  pe[e] = new Pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  pe[e] = new Pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  pe[e] = new Pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ai = /[\-:]([a-z])/g;
function Fi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ai, Fi);
    pe[t] = new Pe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ai, Fi);
    pe[t] = new Pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ai, Fi);
  pe[t] = new Pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  pe[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
pe.xlinkHref = new Pe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  pe[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function $i(e, t, n, r) {
  var o = pe.hasOwnProperty(t) ? pe[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (_d(t, n, o, r) && (n = null),
    r || o === null
      ? Nd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var kt = Cd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  $r = Symbol.for("react.element"),
  dn = Symbol.for("react.portal"),
  pn = Symbol.for("react.fragment"),
  Vi = Symbol.for("react.strict_mode"),
  Fl = Symbol.for("react.profiler"),
  xa = Symbol.for("react.provider"),
  Sa = Symbol.for("react.context"),
  Ui = Symbol.for("react.forward_ref"),
  $l = Symbol.for("react.suspense"),
  Vl = Symbol.for("react.suspense_list"),
  Bi = Symbol.for("react.memo"),
  Pt = Symbol.for("react.lazy"),
  ka = Symbol.for("react.offscreen"),
  Ks = Symbol.iterator;
function Un(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ks && e[Ks]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var b = Object.assign,
  fl;
function Jn(e) {
  if (fl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      fl = (t && t[1]) || "";
    }
  return (
    `
` +
    fl +
    e
  );
}
var dl = !1;
function pl(e, t) {
  if (!e || dl) return "";
  dl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var o = a.stack.split(`
`),
          l = r.stack.split(`
`),
          i = o.length - 1,
          s = l.length - 1;
        1 <= i && 0 <= s && o[i] !== l[s];

      )
        s--;
      for (; 1 <= i && 0 <= s; i--, s--)
        if (o[i] !== l[s]) {
          if (i !== 1 || s !== 1)
            do
              if ((i--, s--, 0 > s || o[i] !== l[s])) {
                var u =
                  `
` + o[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= i && 0 <= s);
          break;
        }
    }
  } finally {
    (dl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Jn(e) : "";
}
function zd(e) {
  switch (e.tag) {
    case 5:
      return Jn(e.type);
    case 16:
      return Jn("Lazy");
    case 13:
      return Jn("Suspense");
    case 19:
      return Jn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = pl(e.type, !1)), e;
    case 11:
      return (e = pl(e.type.render, !1)), e;
    case 1:
      return (e = pl(e.type, !0)), e;
    default:
      return "";
  }
}
function Ul(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case pn:
      return "Fragment";
    case dn:
      return "Portal";
    case Fl:
      return "Profiler";
    case Vi:
      return "StrictMode";
    case $l:
      return "Suspense";
    case Vl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Sa:
        return (e.displayName || "Context") + ".Consumer";
      case xa:
        return (e._context.displayName || "Context") + ".Provider";
      case Ui:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Bi:
        return (
          (t = e.displayName || null), t !== null ? t : Ul(e.type) || "Memo"
        );
      case Pt:
        (t = e._payload), (e = e._init);
        try {
          return Ul(e(t));
        } catch {}
    }
  return null;
}
function jd(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ul(t);
    case 8:
      return t === Vi ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Vt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ca(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ld(e) {
  var t = Ca(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (i) {
          (r = "" + i), l.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Vr(e) {
  e._valueTracker || (e._valueTracker = Ld(e));
}
function Ea(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ca(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function go(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Bl(e, t) {
  var n = t.checked;
  return b({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Zs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Vt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Na(e, t) {
  (t = t.checked), t != null && $i(e, "checked", t, !1);
}
function Hl(e, t) {
  Na(e, t);
  var n = Vt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Wl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Wl(e, t.type, Vt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ys(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Wl(e, t, n) {
  (t !== "number" || go(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var bn = Array.isArray;
function En(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Vt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ql(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return b({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Xs(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(E(92));
      if (bn(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Vt(n) };
}
function Pa(e, t) {
  var n = Vt(t.value),
    r = Vt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Js(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function _a(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Gl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? _a(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ur,
  za = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ur = Ur || document.createElement("div"),
          Ur.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ur.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function dr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var tr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Td = ["Webkit", "ms", "Moz", "O"];
Object.keys(tr).forEach(function (e) {
  Td.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (tr[t] = tr[e]);
  });
});
function ja(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (tr.hasOwnProperty(e) && tr[e])
    ? ("" + t).trim()
    : t + "px";
}
function La(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = ja(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Od = b(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Kl(e, t) {
  if (t) {
    if (Od[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function Zl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Yl = null;
function Hi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Xl = null,
  Nn = null,
  Pn = null;
function bs(e) {
  if ((e = Ir(e))) {
    if (typeof Xl != "function") throw Error(E(280));
    var t = e.stateNode;
    t && ((t = Ko(t)), Xl(e.stateNode, e.type, t));
  }
}
function Ta(e) {
  Nn ? (Pn ? Pn.push(e) : (Pn = [e])) : (Nn = e);
}
function Oa() {
  if (Nn) {
    var e = Nn,
      t = Pn;
    if (((Pn = Nn = null), bs(e), t)) for (e = 0; e < t.length; e++) bs(t[e]);
  }
}
function Ma(e, t) {
  return e(t);
}
function Ia() {}
var ml = !1;
function Ra(e, t, n) {
  if (ml) return e(t, n);
  ml = !0;
  try {
    return Ma(e, t, n);
  } finally {
    (ml = !1), (Nn !== null || Pn !== null) && (Ia(), Oa());
  }
}
function pr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ko(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(E(231, t, typeof n));
  return n;
}
var Jl = !1;
if (yt)
  try {
    var Bn = {};
    Object.defineProperty(Bn, "passive", {
      get: function () {
        Jl = !0;
      },
    }),
      window.addEventListener("test", Bn, Bn),
      window.removeEventListener("test", Bn, Bn);
  } catch {
    Jl = !1;
  }
function Md(e, t, n, r, o, l, i, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var nr = !1,
  vo = null,
  yo = !1,
  bl = null,
  Id = {
    onError: function (e) {
      (nr = !0), (vo = e);
    },
  };
function Rd(e, t, n, r, o, l, i, s, u) {
  (nr = !1), (vo = null), Md.apply(Id, arguments);
}
function Dd(e, t, n, r, o, l, i, s, u) {
  if ((Rd.apply(this, arguments), nr)) {
    if (nr) {
      var a = vo;
      (nr = !1), (vo = null);
    } else throw Error(E(198));
    yo || ((yo = !0), (bl = a));
  }
}
function an(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Da(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function qs(e) {
  if (an(e) !== e) throw Error(E(188));
}
function Ad(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = an(e)), t === null)) throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var l = o.alternate;
    if (l === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n) return qs(o), e;
        if (l === r) return qs(o), t;
        l = l.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) (n = o), (r = l);
    else {
      for (var i = !1, s = o.child; s; ) {
        if (s === n) {
          (i = !0), (n = o), (r = l);
          break;
        }
        if (s === r) {
          (i = !0), (r = o), (n = l);
          break;
        }
        s = s.sibling;
      }
      if (!i) {
        for (s = l.child; s; ) {
          if (s === n) {
            (i = !0), (n = l), (r = o);
            break;
          }
          if (s === r) {
            (i = !0), (r = l), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!i) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function Aa(e) {
  return (e = Ad(e)), e !== null ? Fa(e) : null;
}
function Fa(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Fa(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var $a = Fe.unstable_scheduleCallback,
  eu = Fe.unstable_cancelCallback,
  Fd = Fe.unstable_shouldYield,
  $d = Fe.unstable_requestPaint,
  ne = Fe.unstable_now,
  Vd = Fe.unstable_getCurrentPriorityLevel,
  Wi = Fe.unstable_ImmediatePriority,
  Va = Fe.unstable_UserBlockingPriority,
  wo = Fe.unstable_NormalPriority,
  Ud = Fe.unstable_LowPriority,
  Ua = Fe.unstable_IdlePriority,
  Ho = null,
  at = null;
function Bd(e) {
  if (at && typeof at.onCommitFiberRoot == "function")
    try {
      at.onCommitFiberRoot(Ho, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var tt = Math.clz32 ? Math.clz32 : Qd,
  Hd = Math.log,
  Wd = Math.LN2;
function Qd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Hd(e) / Wd) | 0)) | 0;
}
var Br = 64,
  Hr = 4194304;
function qn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function xo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var s = i & ~o;
    s !== 0 ? (r = qn(s)) : ((l &= i), l !== 0 && (r = qn(l)));
  } else (i = n & ~o), i !== 0 ? (r = qn(i)) : l !== 0 && (r = qn(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (l = t & -t), o >= l || (o === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - tt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Gd(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Kd(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var i = 31 - tt(l),
      s = 1 << i,
      u = o[i];
    u === -1
      ? (!(s & n) || s & r) && (o[i] = Gd(s, t))
      : u <= t && (e.expiredLanes |= s),
      (l &= ~s);
  }
}
function ql(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ba() {
  var e = Br;
  return (Br <<= 1), !(Br & 4194240) && (Br = 64), e;
}
function hl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Or(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - tt(t)),
    (e[t] = n);
}
function Zd(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - tt(n),
      l = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function Qi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - tt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var B = 0;
function Ha(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Wa,
  Gi,
  Qa,
  Ga,
  Ka,
  ei = !1,
  Wr = [],
  Ot = null,
  Mt = null,
  It = null,
  mr = new Map(),
  hr = new Map(),
  zt = [],
  Yd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function tu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ot = null;
      break;
    case "dragenter":
    case "dragleave":
      Mt = null;
      break;
    case "mouseover":
    case "mouseout":
      It = null;
      break;
    case "pointerover":
    case "pointerout":
      mr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      hr.delete(t.pointerId);
  }
}
function Hn(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = Ir(t)), t !== null && Gi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Xd(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Ot = Hn(Ot, e, t, n, r, o)), !0;
    case "dragenter":
      return (Mt = Hn(Mt, e, t, n, r, o)), !0;
    case "mouseover":
      return (It = Hn(It, e, t, n, r, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return mr.set(l, Hn(mr.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), hr.set(l, Hn(hr.get(l) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Za(e) {
  var t = Yt(e.target);
  if (t !== null) {
    var n = an(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Da(n)), t !== null)) {
          (e.blockedOn = t),
            Ka(e.priority, function () {
              Qa(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function oo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ti(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Yl = r), n.target.dispatchEvent(r), (Yl = null);
    } else return (t = Ir(n)), t !== null && Gi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function nu(e, t, n) {
  oo(e) && n.delete(t);
}
function Jd() {
  (ei = !1),
    Ot !== null && oo(Ot) && (Ot = null),
    Mt !== null && oo(Mt) && (Mt = null),
    It !== null && oo(It) && (It = null),
    mr.forEach(nu),
    hr.forEach(nu);
}
function Wn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ei ||
      ((ei = !0),
      Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority, Jd)));
}
function gr(e) {
  function t(o) {
    return Wn(o, e);
  }
  if (0 < Wr.length) {
    Wn(Wr[0], e);
    for (var n = 1; n < Wr.length; n++) {
      var r = Wr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ot !== null && Wn(Ot, e),
      Mt !== null && Wn(Mt, e),
      It !== null && Wn(It, e),
      mr.forEach(t),
      hr.forEach(t),
      n = 0;
    n < zt.length;
    n++
  )
    (r = zt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < zt.length && ((n = zt[0]), n.blockedOn === null); )
    Za(n), n.blockedOn === null && zt.shift();
}
var _n = kt.ReactCurrentBatchConfig,
  So = !0;
function bd(e, t, n, r) {
  var o = B,
    l = _n.transition;
  _n.transition = null;
  try {
    (B = 1), Ki(e, t, n, r);
  } finally {
    (B = o), (_n.transition = l);
  }
}
function qd(e, t, n, r) {
  var o = B,
    l = _n.transition;
  _n.transition = null;
  try {
    (B = 4), Ki(e, t, n, r);
  } finally {
    (B = o), (_n.transition = l);
  }
}
function Ki(e, t, n, r) {
  if (So) {
    var o = ti(e, t, n, r);
    if (o === null) Nl(e, t, r, ko, n), tu(e, r);
    else if (Xd(o, e, t, n, r)) r.stopPropagation();
    else if ((tu(e, r), t & 4 && -1 < Yd.indexOf(e))) {
      for (; o !== null; ) {
        var l = Ir(o);
        if (
          (l !== null && Wa(l),
          (l = ti(e, t, n, r)),
          l === null && Nl(e, t, r, ko, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else Nl(e, t, r, null, n);
  }
}
var ko = null;
function ti(e, t, n, r) {
  if (((ko = null), (e = Hi(r)), (e = Yt(e)), e !== null))
    if (((t = an(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Da(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ko = e), null;
}
function Ya(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Vd()) {
        case Wi:
          return 1;
        case Va:
          return 4;
        case wo:
        case Ud:
          return 16;
        case Ua:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Lt = null,
  Zi = null,
  lo = null;
function Xa() {
  if (lo) return lo;
  var e,
    t = Zi,
    n = t.length,
    r,
    o = "value" in Lt ? Lt.value : Lt.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++);
  return (lo = o.slice(e, 1 < r ? 1 - r : void 0));
}
function io(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Qr() {
  return !0;
}
function ru() {
  return !1;
}
function Ve(e) {
  function t(n, r, o, l, i) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = i),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(l) : l[s]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? Qr
        : ru),
      (this.isPropagationStopped = ru),
      this
    );
  }
  return (
    b(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Qr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Qr));
      },
      persist: function () {},
      isPersistent: Qr,
    }),
    t
  );
}
var Fn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Yi = Ve(Fn),
  Mr = b({}, Fn, { view: 0, detail: 0 }),
  ep = Ve(Mr),
  gl,
  vl,
  Qn,
  Wo = b({}, Mr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Xi,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Qn &&
            (Qn && e.type === "mousemove"
              ? ((gl = e.screenX - Qn.screenX), (vl = e.screenY - Qn.screenY))
              : (vl = gl = 0),
            (Qn = e)),
          gl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : vl;
    },
  }),
  ou = Ve(Wo),
  tp = b({}, Wo, { dataTransfer: 0 }),
  np = Ve(tp),
  rp = b({}, Mr, { relatedTarget: 0 }),
  yl = Ve(rp),
  op = b({}, Fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  lp = Ve(op),
  ip = b({}, Fn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  sp = Ve(ip),
  up = b({}, Fn, { data: 0 }),
  lu = Ve(up),
  ap = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  cp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  fp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function dp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = fp[e]) ? !!t[e] : !1;
}
function Xi() {
  return dp;
}
var pp = b({}, Mr, {
    key: function (e) {
      if (e.key) {
        var t = ap[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = io(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? cp[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Xi,
    charCode: function (e) {
      return e.type === "keypress" ? io(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? io(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  mp = Ve(pp),
  hp = b({}, Wo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  iu = Ve(hp),
  gp = b({}, Mr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Xi,
  }),
  vp = Ve(gp),
  yp = b({}, Fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  wp = Ve(yp),
  xp = b({}, Wo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Sp = Ve(xp),
  kp = [9, 13, 27, 32],
  Ji = yt && "CompositionEvent" in window,
  rr = null;
yt && "documentMode" in document && (rr = document.documentMode);
var Cp = yt && "TextEvent" in window && !rr,
  Ja = yt && (!Ji || (rr && 8 < rr && 11 >= rr)),
  su = " ",
  uu = !1;
function ba(e, t) {
  switch (e) {
    case "keyup":
      return kp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function qa(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var mn = !1;
function Ep(e, t) {
  switch (e) {
    case "compositionend":
      return qa(t);
    case "keypress":
      return t.which !== 32 ? null : ((uu = !0), su);
    case "textInput":
      return (e = t.data), e === su && uu ? null : e;
    default:
      return null;
  }
}
function Np(e, t) {
  if (mn)
    return e === "compositionend" || (!Ji && ba(e, t))
      ? ((e = Xa()), (lo = Zi = Lt = null), (mn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ja && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Pp = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function au(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Pp[e.type] : t === "textarea";
}
function ec(e, t, n, r) {
  Ta(r),
    (t = Co(t, "onChange")),
    0 < t.length &&
      ((n = new Yi("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var or = null,
  vr = null;
function _p(e) {
  fc(e, 0);
}
function Qo(e) {
  var t = vn(e);
  if (Ea(t)) return e;
}
function zp(e, t) {
  if (e === "change") return t;
}
var tc = !1;
if (yt) {
  var wl;
  if (yt) {
    var xl = "oninput" in document;
    if (!xl) {
      var cu = document.createElement("div");
      cu.setAttribute("oninput", "return;"),
        (xl = typeof cu.oninput == "function");
    }
    wl = xl;
  } else wl = !1;
  tc = wl && (!document.documentMode || 9 < document.documentMode);
}
function fu() {
  or && (or.detachEvent("onpropertychange", nc), (vr = or = null));
}
function nc(e) {
  if (e.propertyName === "value" && Qo(vr)) {
    var t = [];
    ec(t, vr, e, Hi(e)), Ra(_p, t);
  }
}
function jp(e, t, n) {
  e === "focusin"
    ? (fu(), (or = t), (vr = n), or.attachEvent("onpropertychange", nc))
    : e === "focusout" && fu();
}
function Lp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Qo(vr);
}
function Tp(e, t) {
  if (e === "click") return Qo(t);
}
function Op(e, t) {
  if (e === "input" || e === "change") return Qo(t);
}
function Mp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ot = typeof Object.is == "function" ? Object.is : Mp;
function yr(e, t) {
  if (ot(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Al.call(t, o) || !ot(e[o], t[o])) return !1;
  }
  return !0;
}
function du(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function pu(e, t) {
  var n = du(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = du(n);
  }
}
function rc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? rc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function oc() {
  for (var e = window, t = go(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = go(e.document);
  }
  return t;
}
function bi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Ip(e) {
  var t = oc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    rc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && bi(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          l = Math.min(r.start, o);
        (r = r.end === void 0 ? l : Math.min(r.end, o)),
          !e.extend && l > r && ((o = r), (r = l), (l = o)),
          (o = pu(n, l));
        var i = pu(n, r);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Rp = yt && "documentMode" in document && 11 >= document.documentMode,
  hn = null,
  ni = null,
  lr = null,
  ri = !1;
function mu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ri ||
    hn == null ||
    hn !== go(r) ||
    ((r = hn),
    "selectionStart" in r && bi(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (lr && yr(lr, r)) ||
      ((lr = r),
      (r = Co(ni, "onSelect")),
      0 < r.length &&
        ((t = new Yi("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = hn))));
}
function Gr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var gn = {
    animationend: Gr("Animation", "AnimationEnd"),
    animationiteration: Gr("Animation", "AnimationIteration"),
    animationstart: Gr("Animation", "AnimationStart"),
    transitionend: Gr("Transition", "TransitionEnd"),
  },
  Sl = {},
  lc = {};
yt &&
  ((lc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete gn.animationend.animation,
    delete gn.animationiteration.animation,
    delete gn.animationstart.animation),
  "TransitionEvent" in window || delete gn.transitionend.transition);
function Go(e) {
  if (Sl[e]) return Sl[e];
  if (!gn[e]) return e;
  var t = gn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in lc) return (Sl[e] = t[n]);
  return e;
}
var ic = Go("animationend"),
  sc = Go("animationiteration"),
  uc = Go("animationstart"),
  ac = Go("transitionend"),
  cc = new Map(),
  hu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Bt(e, t) {
  cc.set(e, t), un(t, [e]);
}
for (var kl = 0; kl < hu.length; kl++) {
  var Cl = hu[kl],
    Dp = Cl.toLowerCase(),
    Ap = Cl[0].toUpperCase() + Cl.slice(1);
  Bt(Dp, "on" + Ap);
}
Bt(ic, "onAnimationEnd");
Bt(sc, "onAnimationIteration");
Bt(uc, "onAnimationStart");
Bt("dblclick", "onDoubleClick");
Bt("focusin", "onFocus");
Bt("focusout", "onBlur");
Bt(ac, "onTransitionEnd");
Ln("onMouseEnter", ["mouseout", "mouseover"]);
Ln("onMouseLeave", ["mouseout", "mouseover"]);
Ln("onPointerEnter", ["pointerout", "pointerover"]);
Ln("onPointerLeave", ["pointerout", "pointerover"]);
un(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
un(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
un("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
un(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
un(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
un(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var er =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Fp = new Set("cancel close invalid load scroll toggle".split(" ").concat(er));
function gu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Dd(r, t, void 0, e), (e.currentTarget = null);
}
function fc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var s = r[i],
            u = s.instance,
            a = s.currentTarget;
          if (((s = s.listener), u !== l && o.isPropagationStopped())) break e;
          gu(o, s, a), (l = u);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((s = r[i]),
            (u = s.instance),
            (a = s.currentTarget),
            (s = s.listener),
            u !== l && o.isPropagationStopped())
          )
            break e;
          gu(o, s, a), (l = u);
        }
    }
  }
  if (yo) throw ((e = bl), (yo = !1), (bl = null), e);
}
function G(e, t) {
  var n = t[ui];
  n === void 0 && (n = t[ui] = new Set());
  var r = e + "__bubble";
  n.has(r) || (dc(t, e, 2, !1), n.add(r));
}
function El(e, t, n) {
  var r = 0;
  t && (r |= 4), dc(n, e, r, t);
}
var Kr = "_reactListening" + Math.random().toString(36).slice(2);
function wr(e) {
  if (!e[Kr]) {
    (e[Kr] = !0),
      wa.forEach(function (n) {
        n !== "selectionchange" && (Fp.has(n) || El(n, !1, e), El(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Kr] || ((t[Kr] = !0), El("selectionchange", !1, t));
  }
}
function dc(e, t, n, r) {
  switch (Ya(t)) {
    case 1:
      var o = bd;
      break;
    case 4:
      o = qd;
      break;
    default:
      o = Ki;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Jl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Nl(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === o || (u.nodeType === 8 && u.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; s !== null; ) {
          if (((i = Yt(s)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = l = i;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Ra(function () {
    var a = l,
      h = Hi(n),
      d = [];
    e: {
      var m = cc.get(e);
      if (m !== void 0) {
        var w = Yi,
          g = e;
        switch (e) {
          case "keypress":
            if (io(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = mp;
            break;
          case "focusin":
            (g = "focus"), (w = yl);
            break;
          case "focusout":
            (g = "blur"), (w = yl);
            break;
          case "beforeblur":
          case "afterblur":
            w = yl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = ou;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = np;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = vp;
            break;
          case ic:
          case sc:
          case uc:
            w = lp;
            break;
          case ac:
            w = wp;
            break;
          case "scroll":
            w = ep;
            break;
          case "wheel":
            w = Sp;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = sp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = iu;
        }
        var v = (t & 4) !== 0,
          x = !v && e === "scroll",
          f = v ? (m !== null ? m + "Capture" : null) : m;
        v = [];
        for (var c = a, p; c !== null; ) {
          p = c;
          var y = p.stateNode;
          if (
            (p.tag === 5 &&
              y !== null &&
              ((p = y),
              f !== null && ((y = pr(c, f)), y != null && v.push(xr(c, y, p)))),
            x)
          )
            break;
          c = c.return;
        }
        0 < v.length &&
          ((m = new w(m, g, null, n, h)), d.push({ event: m, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Yl &&
            (g = n.relatedTarget || n.fromElement) &&
            (Yt(g) || g[wt]))
        )
          break e;
        if (
          (w || m) &&
          ((m =
            h.window === h
              ? h
              : (m = h.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          w
            ? ((g = n.relatedTarget || n.toElement),
              (w = a),
              (g = g ? Yt(g) : null),
              g !== null &&
                ((x = an(g)), g !== x || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((w = null), (g = a)),
          w !== g)
        ) {
          if (
            ((v = ou),
            (y = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = iu),
              (y = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (x = w == null ? m : vn(w)),
            (p = g == null ? m : vn(g)),
            (m = new v(y, c + "leave", w, n, h)),
            (m.target = x),
            (m.relatedTarget = p),
            (y = null),
            Yt(h) === a &&
              ((v = new v(f, c + "enter", g, n, h)),
              (v.target = p),
              (v.relatedTarget = x),
              (y = v)),
            (x = y),
            w && g)
          )
            t: {
              for (v = w, f = g, c = 0, p = v; p; p = fn(p)) c++;
              for (p = 0, y = f; y; y = fn(y)) p++;
              for (; 0 < c - p; ) (v = fn(v)), c--;
              for (; 0 < p - c; ) (f = fn(f)), p--;
              for (; c--; ) {
                if (v === f || (f !== null && v === f.alternate)) break t;
                (v = fn(v)), (f = fn(f));
              }
              v = null;
            }
          else v = null;
          w !== null && vu(d, m, w, v, !1),
            g !== null && x !== null && vu(d, x, g, v, !0);
        }
      }
      e: {
        if (
          ((m = a ? vn(a) : window),
          (w = m.nodeName && m.nodeName.toLowerCase()),
          w === "select" || (w === "input" && m.type === "file"))
        )
          var C = zp;
        else if (au(m))
          if (tc) C = Op;
          else {
            C = Lp;
            var P = jp;
          }
        else
          (w = m.nodeName) &&
            w.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (C = Tp);
        if (C && (C = C(e, a))) {
          ec(d, C, n, h);
          break e;
        }
        P && P(e, m, a),
          e === "focusout" &&
            (P = m._wrapperState) &&
            P.controlled &&
            m.type === "number" &&
            Wl(m, "number", m.value);
      }
      switch (((P = a ? vn(a) : window), e)) {
        case "focusin":
          (au(P) || P.contentEditable === "true") &&
            ((hn = P), (ni = a), (lr = null));
          break;
        case "focusout":
          lr = ni = hn = null;
          break;
        case "mousedown":
          ri = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ri = !1), mu(d, n, h);
          break;
        case "selectionchange":
          if (Rp) break;
        case "keydown":
        case "keyup":
          mu(d, n, h);
      }
      var k;
      if (Ji)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        mn
          ? ba(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (Ja &&
          n.locale !== "ko" &&
          (mn || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && mn && (k = Xa())
            : ((Lt = h),
              (Zi = "value" in Lt ? Lt.value : Lt.textContent),
              (mn = !0))),
        (P = Co(a, N)),
        0 < P.length &&
          ((N = new lu(N, e, null, n, h)),
          d.push({ event: N, listeners: P }),
          k ? (N.data = k) : ((k = qa(n)), k !== null && (N.data = k)))),
        (k = Cp ? Ep(e, n) : Np(e, n)) &&
          ((a = Co(a, "onBeforeInput")),
          0 < a.length &&
            ((h = new lu("onBeforeInput", "beforeinput", null, n, h)),
            d.push({ event: h, listeners: a }),
            (h.data = k)));
    }
    fc(d, t);
  });
}
function xr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Co(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = pr(e, n)),
      l != null && r.unshift(xr(e, l, o)),
      (l = pr(e, t)),
      l != null && r.push(xr(e, l, o))),
      (e = e.return);
  }
  return r;
}
function fn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function vu(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      a = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      a !== null &&
      ((s = a),
      o
        ? ((u = pr(n, l)), u != null && i.unshift(xr(n, u, s)))
        : o || ((u = pr(n, l)), u != null && i.push(xr(n, u, s)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var $p = /\r\n?/g,
  Vp = /\u0000|\uFFFD/g;
function yu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      $p,
      `
`
    )
    .replace(Vp, "");
}
function Zr(e, t, n) {
  if (((t = yu(t)), yu(e) !== t && n)) throw Error(E(425));
}
function Eo() {}
var oi = null,
  li = null;
function ii(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var si = typeof setTimeout == "function" ? setTimeout : void 0,
  Up = typeof clearTimeout == "function" ? clearTimeout : void 0,
  wu = typeof Promise == "function" ? Promise : void 0,
  Bp =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof wu < "u"
      ? function (e) {
          return wu.resolve(null).then(e).catch(Hp);
        }
      : si;
function Hp(e) {
  setTimeout(function () {
    throw e;
  });
}
function Pl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), gr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  gr(t);
}
function Rt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function xu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var $n = Math.random().toString(36).slice(2),
  ut = "__reactFiber$" + $n,
  Sr = "__reactProps$" + $n,
  wt = "__reactContainer$" + $n,
  ui = "__reactEvents$" + $n,
  Wp = "__reactListeners$" + $n,
  Qp = "__reactHandles$" + $n;
function Yt(e) {
  var t = e[ut];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[wt] || n[ut])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = xu(e); e !== null; ) {
          if ((n = e[ut])) return n;
          e = xu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ir(e) {
  return (
    (e = e[ut] || e[wt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function vn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function Ko(e) {
  return e[Sr] || null;
}
var ai = [],
  yn = -1;
function Ht(e) {
  return { current: e };
}
function K(e) {
  0 > yn || ((e.current = ai[yn]), (ai[yn] = null), yn--);
}
function W(e, t) {
  yn++, (ai[yn] = e.current), (e.current = t);
}
var Ut = {},
  xe = Ht(Ut),
  Te = Ht(!1),
  tn = Ut;
function Tn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ut;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    l;
  for (l in n) o[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Oe(e) {
  return (e = e.childContextTypes), e != null;
}
function No() {
  K(Te), K(xe);
}
function Su(e, t, n) {
  if (xe.current !== Ut) throw Error(E(168));
  W(xe, t), W(Te, n);
}
function pc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(E(108, jd(e) || "Unknown", o));
  return b({}, n, r);
}
function Po(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ut),
    (tn = xe.current),
    W(xe, e),
    W(Te, Te.current),
    !0
  );
}
function ku(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n
    ? ((e = pc(e, t, tn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      K(Te),
      K(xe),
      W(xe, e))
    : K(Te),
    W(Te, n);
}
var mt = null,
  Zo = !1,
  _l = !1;
function mc(e) {
  mt === null ? (mt = [e]) : mt.push(e);
}
function Gp(e) {
  (Zo = !0), mc(e);
}
function Wt() {
  if (!_l && mt !== null) {
    _l = !0;
    var e = 0,
      t = B;
    try {
      var n = mt;
      for (B = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (mt = null), (Zo = !1);
    } catch (o) {
      throw (mt !== null && (mt = mt.slice(e + 1)), $a(Wi, Wt), o);
    } finally {
      (B = t), (_l = !1);
    }
  }
  return null;
}
var wn = [],
  xn = 0,
  _o = null,
  zo = 0,
  Ue = [],
  Be = 0,
  nn = null,
  ht = 1,
  gt = "";
function Kt(e, t) {
  (wn[xn++] = zo), (wn[xn++] = _o), (_o = e), (zo = t);
}
function hc(e, t, n) {
  (Ue[Be++] = ht), (Ue[Be++] = gt), (Ue[Be++] = nn), (nn = e);
  var r = ht;
  e = gt;
  var o = 32 - tt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var l = 32 - tt(t) + o;
  if (30 < l) {
    var i = o - (o % 5);
    (l = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (ht = (1 << (32 - tt(t) + o)) | (n << o) | r),
      (gt = l + e);
  } else (ht = (1 << l) | (n << o) | r), (gt = e);
}
function qi(e) {
  e.return !== null && (Kt(e, 1), hc(e, 1, 0));
}
function es(e) {
  for (; e === _o; )
    (_o = wn[--xn]), (wn[xn] = null), (zo = wn[--xn]), (wn[xn] = null);
  for (; e === nn; )
    (nn = Ue[--Be]),
      (Ue[Be] = null),
      (gt = Ue[--Be]),
      (Ue[Be] = null),
      (ht = Ue[--Be]),
      (Ue[Be] = null);
}
var Ae = null,
  De = null,
  Z = !1,
  et = null;
function gc(e, t) {
  var n = He(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Cu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ae = e), (De = Rt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ae = e), (De = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = nn !== null ? { id: ht, overflow: gt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = He(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ae = e),
            (De = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ci(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function fi(e) {
  if (Z) {
    var t = De;
    if (t) {
      var n = t;
      if (!Cu(e, t)) {
        if (ci(e)) throw Error(E(418));
        t = Rt(n.nextSibling);
        var r = Ae;
        t && Cu(e, t)
          ? gc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Z = !1), (Ae = e));
      }
    } else {
      if (ci(e)) throw Error(E(418));
      (e.flags = (e.flags & -4097) | 2), (Z = !1), (Ae = e);
    }
  }
}
function Eu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ae = e;
}
function Yr(e) {
  if (e !== Ae) return !1;
  if (!Z) return Eu(e), (Z = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ii(e.type, e.memoizedProps))),
    t && (t = De))
  ) {
    if (ci(e)) throw (vc(), Error(E(418)));
    for (; t; ) gc(e, t), (t = Rt(t.nextSibling));
  }
  if ((Eu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              De = Rt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      De = null;
    }
  } else De = Ae ? Rt(e.stateNode.nextSibling) : null;
  return !0;
}
function vc() {
  for (var e = De; e; ) e = Rt(e.nextSibling);
}
function On() {
  (De = Ae = null), (Z = !1);
}
function ts(e) {
  et === null ? (et = [e]) : et.push(e);
}
var Kp = kt.ReactCurrentBatchConfig;
function Gn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var o = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (i) {
            var s = o.refs;
            i === null ? delete s[l] : (s[l] = i);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function Xr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      E(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Nu(e) {
  var t = e._init;
  return t(e._payload);
}
function yc(e) {
  function t(f, c) {
    if (e) {
      var p = f.deletions;
      p === null ? ((f.deletions = [c]), (f.flags |= 16)) : p.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function o(f, c) {
    return (f = $t(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function l(f, c, p) {
    return (
      (f.index = p),
      e
        ? ((p = f.alternate),
          p !== null
            ? ((p = p.index), p < c ? ((f.flags |= 2), c) : p)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function s(f, c, p, y) {
    return c === null || c.tag !== 6
      ? ((c = Il(p, f.mode, y)), (c.return = f), c)
      : ((c = o(c, p)), (c.return = f), c);
  }
  function u(f, c, p, y) {
    var C = p.type;
    return C === pn
      ? h(f, c, p.props.children, y, p.key)
      : c !== null &&
        (c.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === Pt &&
            Nu(C) === c.type))
      ? ((y = o(c, p.props)), (y.ref = Gn(f, c, p)), (y.return = f), y)
      : ((y = mo(p.type, p.key, p.props, null, f.mode, y)),
        (y.ref = Gn(f, c, p)),
        (y.return = f),
        y);
  }
  function a(f, c, p, y) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = Rl(p, f.mode, y)), (c.return = f), c)
      : ((c = o(c, p.children || [])), (c.return = f), c);
  }
  function h(f, c, p, y, C) {
    return c === null || c.tag !== 7
      ? ((c = en(p, f.mode, y, C)), (c.return = f), c)
      : ((c = o(c, p)), (c.return = f), c);
  }
  function d(f, c, p) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = Il("" + c, f.mode, p)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case $r:
          return (
            (p = mo(c.type, c.key, c.props, null, f.mode, p)),
            (p.ref = Gn(f, null, c)),
            (p.return = f),
            p
          );
        case dn:
          return (c = Rl(c, f.mode, p)), (c.return = f), c;
        case Pt:
          var y = c._init;
          return d(f, y(c._payload), p);
      }
      if (bn(c) || Un(c))
        return (c = en(c, f.mode, p, null)), (c.return = f), c;
      Xr(f, c);
    }
    return null;
  }
  function m(f, c, p, y) {
    var C = c !== null ? c.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return C !== null ? null : s(f, c, "" + p, y);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case $r:
          return p.key === C ? u(f, c, p, y) : null;
        case dn:
          return p.key === C ? a(f, c, p, y) : null;
        case Pt:
          return (C = p._init), m(f, c, C(p._payload), y);
      }
      if (bn(p) || Un(p)) return C !== null ? null : h(f, c, p, y, null);
      Xr(f, p);
    }
    return null;
  }
  function w(f, c, p, y, C) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (f = f.get(p) || null), s(c, f, "" + y, C);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case $r:
          return (f = f.get(y.key === null ? p : y.key) || null), u(c, f, y, C);
        case dn:
          return (f = f.get(y.key === null ? p : y.key) || null), a(c, f, y, C);
        case Pt:
          var P = y._init;
          return w(f, c, p, P(y._payload), C);
      }
      if (bn(y) || Un(y)) return (f = f.get(p) || null), h(c, f, y, C, null);
      Xr(c, y);
    }
    return null;
  }
  function g(f, c, p, y) {
    for (
      var C = null, P = null, k = c, N = (c = 0), M = null;
      k !== null && N < p.length;
      N++
    ) {
      k.index > N ? ((M = k), (k = null)) : (M = k.sibling);
      var z = m(f, k, p[N], y);
      if (z === null) {
        k === null && (k = M);
        break;
      }
      e && k && z.alternate === null && t(f, k),
        (c = l(z, c, N)),
        P === null ? (C = z) : (P.sibling = z),
        (P = z),
        (k = M);
    }
    if (N === p.length) return n(f, k), Z && Kt(f, N), C;
    if (k === null) {
      for (; N < p.length; N++)
        (k = d(f, p[N], y)),
          k !== null &&
            ((c = l(k, c, N)), P === null ? (C = k) : (P.sibling = k), (P = k));
      return Z && Kt(f, N), C;
    }
    for (k = r(f, k); N < p.length; N++)
      (M = w(k, f, N, p[N], y)),
        M !== null &&
          (e && M.alternate !== null && k.delete(M.key === null ? N : M.key),
          (c = l(M, c, N)),
          P === null ? (C = M) : (P.sibling = M),
          (P = M));
    return (
      e &&
        k.forEach(function (A) {
          return t(f, A);
        }),
      Z && Kt(f, N),
      C
    );
  }
  function v(f, c, p, y) {
    var C = Un(p);
    if (typeof C != "function") throw Error(E(150));
    if (((p = C.call(p)), p == null)) throw Error(E(151));
    for (
      var P = (C = null), k = c, N = (c = 0), M = null, z = p.next();
      k !== null && !z.done;
      N++, z = p.next()
    ) {
      k.index > N ? ((M = k), (k = null)) : (M = k.sibling);
      var A = m(f, k, z.value, y);
      if (A === null) {
        k === null && (k = M);
        break;
      }
      e && k && A.alternate === null && t(f, k),
        (c = l(A, c, N)),
        P === null ? (C = A) : (P.sibling = A),
        (P = A),
        (k = M);
    }
    if (z.done) return n(f, k), Z && Kt(f, N), C;
    if (k === null) {
      for (; !z.done; N++, z = p.next())
        (z = d(f, z.value, y)),
          z !== null &&
            ((c = l(z, c, N)), P === null ? (C = z) : (P.sibling = z), (P = z));
      return Z && Kt(f, N), C;
    }
    for (k = r(f, k); !z.done; N++, z = p.next())
      (z = w(k, f, N, z.value, y)),
        z !== null &&
          (e && z.alternate !== null && k.delete(z.key === null ? N : z.key),
          (c = l(z, c, N)),
          P === null ? (C = z) : (P.sibling = z),
          (P = z));
    return (
      e &&
        k.forEach(function (R) {
          return t(f, R);
        }),
      Z && Kt(f, N),
      C
    );
  }
  function x(f, c, p, y) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === pn &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case $r:
          e: {
            for (var C = p.key, P = c; P !== null; ) {
              if (P.key === C) {
                if (((C = p.type), C === pn)) {
                  if (P.tag === 7) {
                    n(f, P.sibling),
                      (c = o(P, p.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  P.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Pt &&
                    Nu(C) === P.type)
                ) {
                  n(f, P.sibling),
                    (c = o(P, p.props)),
                    (c.ref = Gn(f, P, p)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, P);
                break;
              } else t(f, P);
              P = P.sibling;
            }
            p.type === pn
              ? ((c = en(p.props.children, f.mode, y, p.key)),
                (c.return = f),
                (f = c))
              : ((y = mo(p.type, p.key, p.props, null, f.mode, y)),
                (y.ref = Gn(f, c, p)),
                (y.return = f),
                (f = y));
          }
          return i(f);
        case dn:
          e: {
            for (P = p.key; c !== null; ) {
              if (c.key === P)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  n(f, c.sibling),
                    (c = o(c, p.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = Rl(p, f.mode, y)), (c.return = f), (f = c);
          }
          return i(f);
        case Pt:
          return (P = p._init), x(f, c, P(p._payload), y);
      }
      if (bn(p)) return g(f, c, p, y);
      if (Un(p)) return v(f, c, p, y);
      Xr(f, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = o(c, p)), (c.return = f), (f = c))
          : (n(f, c), (c = Il(p, f.mode, y)), (c.return = f), (f = c)),
        i(f))
      : n(f, c);
  }
  return x;
}
var Mn = yc(!0),
  wc = yc(!1),
  jo = Ht(null),
  Lo = null,
  Sn = null,
  ns = null;
function rs() {
  ns = Sn = Lo = null;
}
function os(e) {
  var t = jo.current;
  K(jo), (e._currentValue = t);
}
function di(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function zn(e, t) {
  (Lo = e),
    (ns = Sn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Le = !0), (e.firstContext = null));
}
function Qe(e) {
  var t = e._currentValue;
  if (ns !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Sn === null)) {
      if (Lo === null) throw Error(E(308));
      (Sn = e), (Lo.dependencies = { lanes: 0, firstContext: e });
    } else Sn = Sn.next = e;
  return t;
}
var Xt = null;
function ls(e) {
  Xt === null ? (Xt = [e]) : Xt.push(e);
}
function xc(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), ls(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    xt(e, r)
  );
}
function xt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var _t = !1;
function is(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Sc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function vt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Dt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), V & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      xt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), ls(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    xt(e, n)
  );
}
function so(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Qi(e, n);
  }
}
function Pu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (o = l = i) : (l = l.next = i), (n = n.next);
      } while (n !== null);
      l === null ? (o = l = t) : (l = l.next = t);
    } else o = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function To(e, t, n, r) {
  var o = e.updateQueue;
  _t = !1;
  var l = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var u = s,
      a = u.next;
    (u.next = null), i === null ? (l = a) : (i.next = a), (i = u);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (s = h.lastBaseUpdate),
      s !== i &&
        (s === null ? (h.firstBaseUpdate = a) : (s.next = a),
        (h.lastBaseUpdate = u)));
  }
  if (l !== null) {
    var d = o.baseState;
    (i = 0), (h = a = u = null), (s = l);
    do {
      var m = s.lane,
        w = s.eventTime;
      if ((r & m) === m) {
        h !== null &&
          (h = h.next =
            {
              eventTime: w,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var g = e,
            v = s;
          switch (((m = t), (w = n), v.tag)) {
            case 1:
              if (((g = v.payload), typeof g == "function")) {
                d = g.call(w, d, m);
                break e;
              }
              d = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = v.payload),
                (m = typeof g == "function" ? g.call(w, d, m) : g),
                m == null)
              )
                break e;
              d = b({}, d, m);
              break e;
            case 2:
              _t = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (m = o.effects),
          m === null ? (o.effects = [s]) : m.push(s));
      } else
        (w = {
          eventTime: w,
          lane: m,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          h === null ? ((a = h = w), (u = d)) : (h = h.next = w),
          (i |= m);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (m = s),
          (s = m.next),
          (m.next = null),
          (o.lastBaseUpdate = m),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (u = d),
      (o.baseState = u),
      (o.firstBaseUpdate = a),
      (o.lastBaseUpdate = h),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (i |= o.lane), (o = o.next);
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    (on |= i), (e.lanes = i), (e.memoizedState = d);
  }
}
function _u(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(E(191, o));
        o.call(r);
      }
    }
}
var Rr = {},
  ct = Ht(Rr),
  kr = Ht(Rr),
  Cr = Ht(Rr);
function Jt(e) {
  if (e === Rr) throw Error(E(174));
  return e;
}
function ss(e, t) {
  switch ((W(Cr, t), W(kr, e), W(ct, Rr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Gl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Gl(t, e));
  }
  K(ct), W(ct, t);
}
function In() {
  K(ct), K(kr), K(Cr);
}
function kc(e) {
  Jt(Cr.current);
  var t = Jt(ct.current),
    n = Gl(t, e.type);
  t !== n && (W(kr, e), W(ct, n));
}
function us(e) {
  kr.current === e && (K(ct), K(kr));
}
var X = Ht(0);
function Oo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var zl = [];
function as() {
  for (var e = 0; e < zl.length; e++)
    zl[e]._workInProgressVersionPrimary = null;
  zl.length = 0;
}
var uo = kt.ReactCurrentDispatcher,
  jl = kt.ReactCurrentBatchConfig,
  rn = 0,
  J = null,
  se = null,
  ae = null,
  Mo = !1,
  ir = !1,
  Er = 0,
  Zp = 0;
function ve() {
  throw Error(E(321));
}
function cs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ot(e[n], t[n])) return !1;
  return !0;
}
function fs(e, t, n, r, o, l) {
  if (
    ((rn = l),
    (J = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (uo.current = e === null || e.memoizedState === null ? bp : qp),
    (e = n(r, o)),
    ir)
  ) {
    l = 0;
    do {
      if (((ir = !1), (Er = 0), 25 <= l)) throw Error(E(301));
      (l += 1),
        (ae = se = null),
        (t.updateQueue = null),
        (uo.current = e0),
        (e = n(r, o));
    } while (ir);
  }
  if (
    ((uo.current = Io),
    (t = se !== null && se.next !== null),
    (rn = 0),
    (ae = se = J = null),
    (Mo = !1),
    t)
  )
    throw Error(E(300));
  return e;
}
function ds() {
  var e = Er !== 0;
  return (Er = 0), e;
}
function st() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ae === null ? (J.memoizedState = ae = e) : (ae = ae.next = e), ae;
}
function Ge() {
  if (se === null) {
    var e = J.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = se.next;
  var t = ae === null ? J.memoizedState : ae.next;
  if (t !== null) (ae = t), (se = e);
  else {
    if (e === null) throw Error(E(310));
    (se = e),
      (e = {
        memoizedState: se.memoizedState,
        baseState: se.baseState,
        baseQueue: se.baseQueue,
        queue: se.queue,
        next: null,
      }),
      ae === null ? (J.memoizedState = ae = e) : (ae = ae.next = e);
  }
  return ae;
}
function Nr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ll(e) {
  var t = Ge(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = se,
    o = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var i = o.next;
      (o.next = l.next), (l.next = i);
    }
    (r.baseQueue = o = l), (n.pending = null);
  }
  if (o !== null) {
    (l = o.next), (r = r.baseState);
    var s = (i = null),
      u = null,
      a = l;
    do {
      var h = a.lane;
      if ((rn & h) === h)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var d = {
          lane: h,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        u === null ? ((s = u = d), (i = r)) : (u = u.next = d),
          (J.lanes |= h),
          (on |= h);
      }
      a = a.next;
    } while (a !== null && a !== l);
    u === null ? (i = r) : (u.next = s),
      ot(r, t.memoizedState) || (Le = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (J.lanes |= l), (on |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Tl(e) {
  var t = Ge(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (l = e(l, i.action)), (i = i.next);
    while (i !== o);
    ot(l, t.memoizedState) || (Le = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function Cc() {}
function Ec(e, t) {
  var n = J,
    r = Ge(),
    o = t(),
    l = !ot(r.memoizedState, o);
  if (
    (l && ((r.memoizedState = o), (Le = !0)),
    (r = r.queue),
    ps(_c.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (ae !== null && ae.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Pr(9, Pc.bind(null, n, r, o, t), void 0, null),
      ce === null)
    )
      throw Error(E(349));
    rn & 30 || Nc(n, t, o);
  }
  return o;
}
function Nc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = J.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (J.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Pc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), zc(t) && jc(e);
}
function _c(e, t, n) {
  return n(function () {
    zc(t) && jc(e);
  });
}
function zc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ot(e, n);
  } catch {
    return !0;
  }
}
function jc(e) {
  var t = xt(e, 1);
  t !== null && nt(t, e, 1, -1);
}
function zu(e) {
  var t = st();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Nr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Jp.bind(null, J, e)),
    [t.memoizedState, e]
  );
}
function Pr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = J.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (J.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Lc() {
  return Ge().memoizedState;
}
function ao(e, t, n, r) {
  var o = st();
  (J.flags |= e),
    (o.memoizedState = Pr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Yo(e, t, n, r) {
  var o = Ge();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (se !== null) {
    var i = se.memoizedState;
    if (((l = i.destroy), r !== null && cs(r, i.deps))) {
      o.memoizedState = Pr(t, n, l, r);
      return;
    }
  }
  (J.flags |= e), (o.memoizedState = Pr(1 | t, n, l, r));
}
function ju(e, t) {
  return ao(8390656, 8, e, t);
}
function ps(e, t) {
  return Yo(2048, 8, e, t);
}
function Tc(e, t) {
  return Yo(4, 2, e, t);
}
function Oc(e, t) {
  return Yo(4, 4, e, t);
}
function Mc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ic(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Yo(4, 4, Mc.bind(null, t, e), n)
  );
}
function ms() {}
function Rc(e, t) {
  var n = Ge();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && cs(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Dc(e, t) {
  var n = Ge();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && cs(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ac(e, t, n) {
  return rn & 21
    ? (ot(n, t) || ((n = Ba()), (J.lanes |= n), (on |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Le = !0)), (e.memoizedState = n));
}
function Yp(e, t) {
  var n = B;
  (B = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = jl.transition;
  jl.transition = {};
  try {
    e(!1), t();
  } finally {
    (B = n), (jl.transition = r);
  }
}
function Fc() {
  return Ge().memoizedState;
}
function Xp(e, t, n) {
  var r = Ft(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    $c(e))
  )
    Vc(t, n);
  else if (((n = xc(e, t, n, r)), n !== null)) {
    var o = Ee();
    nt(n, e, r, o), Uc(n, t, r);
  }
}
function Jp(e, t, n) {
  var r = Ft(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if ($c(e)) Vc(t, o);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var i = t.lastRenderedState,
          s = l(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), ot(s, i))) {
          var u = t.interleaved;
          u === null
            ? ((o.next = o), ls(t))
            : ((o.next = u.next), (u.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = xc(e, t, o, r)),
      n !== null && ((o = Ee()), nt(n, e, r, o), Uc(n, t, r));
  }
}
function $c(e) {
  var t = e.alternate;
  return e === J || (t !== null && t === J);
}
function Vc(e, t) {
  ir = Mo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Uc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Qi(e, n);
  }
}
var Io = {
    readContext: Qe,
    useCallback: ve,
    useContext: ve,
    useEffect: ve,
    useImperativeHandle: ve,
    useInsertionEffect: ve,
    useLayoutEffect: ve,
    useMemo: ve,
    useReducer: ve,
    useRef: ve,
    useState: ve,
    useDebugValue: ve,
    useDeferredValue: ve,
    useTransition: ve,
    useMutableSource: ve,
    useSyncExternalStore: ve,
    useId: ve,
    unstable_isNewReconciler: !1,
  },
  bp = {
    readContext: Qe,
    useCallback: function (e, t) {
      return (st().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Qe,
    useEffect: ju,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ao(4194308, 4, Mc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ao(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ao(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = st();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = st();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Xp.bind(null, J, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = st();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: zu,
    useDebugValue: ms,
    useDeferredValue: function (e) {
      return (st().memoizedState = e);
    },
    useTransition: function () {
      var e = zu(!1),
        t = e[0];
      return (e = Yp.bind(null, e[1])), (st().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = J,
        o = st();
      if (Z) {
        if (n === void 0) throw Error(E(407));
        n = n();
      } else {
        if (((n = t()), ce === null)) throw Error(E(349));
        rn & 30 || Nc(r, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        ju(_c.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        Pr(9, Pc.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = st(),
        t = ce.identifierPrefix;
      if (Z) {
        var n = gt,
          r = ht;
        (n = (r & ~(1 << (32 - tt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Er++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Zp++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  qp = {
    readContext: Qe,
    useCallback: Rc,
    useContext: Qe,
    useEffect: ps,
    useImperativeHandle: Ic,
    useInsertionEffect: Tc,
    useLayoutEffect: Oc,
    useMemo: Dc,
    useReducer: Ll,
    useRef: Lc,
    useState: function () {
      return Ll(Nr);
    },
    useDebugValue: ms,
    useDeferredValue: function (e) {
      var t = Ge();
      return Ac(t, se.memoizedState, e);
    },
    useTransition: function () {
      var e = Ll(Nr)[0],
        t = Ge().memoizedState;
      return [e, t];
    },
    useMutableSource: Cc,
    useSyncExternalStore: Ec,
    useId: Fc,
    unstable_isNewReconciler: !1,
  },
  e0 = {
    readContext: Qe,
    useCallback: Rc,
    useContext: Qe,
    useEffect: ps,
    useImperativeHandle: Ic,
    useInsertionEffect: Tc,
    useLayoutEffect: Oc,
    useMemo: Dc,
    useReducer: Tl,
    useRef: Lc,
    useState: function () {
      return Tl(Nr);
    },
    useDebugValue: ms,
    useDeferredValue: function (e) {
      var t = Ge();
      return se === null ? (t.memoizedState = e) : Ac(t, se.memoizedState, e);
    },
    useTransition: function () {
      var e = Tl(Nr)[0],
        t = Ge().memoizedState;
      return [e, t];
    },
    useMutableSource: Cc,
    useSyncExternalStore: Ec,
    useId: Fc,
    unstable_isNewReconciler: !1,
  };
function be(e, t) {
  if (e && e.defaultProps) {
    (t = b({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function pi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : b({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Xo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? an(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ee(),
      o = Ft(e),
      l = vt(r, o);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = Dt(e, l, o)),
      t !== null && (nt(t, e, o, r), so(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ee(),
      o = Ft(e),
      l = vt(r, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = Dt(e, l, o)),
      t !== null && (nt(t, e, o, r), so(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ee(),
      r = Ft(e),
      o = vt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Dt(e, o, r)),
      t !== null && (nt(t, e, r, n), so(t, e, r));
  },
};
function Lu(e, t, n, r, o, l, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !yr(n, r) || !yr(o, l)
      : !0
  );
}
function Bc(e, t, n) {
  var r = !1,
    o = Ut,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = Qe(l))
      : ((o = Oe(t) ? tn : xe.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? Tn(e, o) : Ut)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Xo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function Tu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Xo.enqueueReplaceState(t, t.state, null);
}
function mi(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), is(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = Qe(l))
    : ((l = Oe(t) ? tn : xe.current), (o.context = Tn(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (pi(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Xo.enqueueReplaceState(o, o.state, null),
      To(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Rn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += zd(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (l) {
    o =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Ol(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function hi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var t0 = typeof WeakMap == "function" ? WeakMap : Map;
function Hc(e, t, n) {
  (n = vt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Do || ((Do = !0), (Ni = r)), hi(e, t);
    }),
    n
  );
}
function Wc(e, t, n) {
  (n = vt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        hi(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        hi(e, t),
          typeof r != "function" &&
            (At === null ? (At = new Set([this])) : At.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Ou(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new t0();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = h0.bind(null, e, t, n)), t.then(e, e));
}
function Mu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Iu(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = vt(-1, 1)), (t.tag = 2), Dt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var n0 = kt.ReactCurrentOwner,
  Le = !1;
function Ce(e, t, n, r) {
  t.child = e === null ? wc(t, null, n, r) : Mn(t, e.child, n, r);
}
function Ru(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return (
    zn(t, o),
    (r = fs(e, t, n, r, l, o)),
    (n = ds()),
    e !== null && !Le
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        St(e, t, o))
      : (Z && n && qi(t), (t.flags |= 1), Ce(e, t, r, o), t.child)
  );
}
function Du(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !ks(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), Qc(e, t, l, r, o))
      : ((e = mo(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var i = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : yr), n(i, r) && e.ref === t.ref)
    )
      return St(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = $t(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Qc(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (yr(l, r) && e.ref === t.ref)
      if (((Le = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (Le = !0);
      else return (t.lanes = e.lanes), St(e, t, o);
  }
  return gi(e, t, n, r, o);
}
function Gc(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        W(Cn, Re),
        (Re |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          W(Cn, Re),
          (Re |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        W(Cn, Re),
        (Re |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      W(Cn, Re),
      (Re |= r);
  return Ce(e, t, o, n), t.child;
}
function Kc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function gi(e, t, n, r, o) {
  var l = Oe(n) ? tn : xe.current;
  return (
    (l = Tn(t, l)),
    zn(t, o),
    (n = fs(e, t, n, r, l, o)),
    (r = ds()),
    e !== null && !Le
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        St(e, t, o))
      : (Z && r && qi(t), (t.flags |= 1), Ce(e, t, n, o), t.child)
  );
}
function Au(e, t, n, r, o) {
  if (Oe(n)) {
    var l = !0;
    Po(t);
  } else l = !1;
  if ((zn(t, o), t.stateNode === null))
    co(e, t), Bc(t, n, r), mi(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      s = t.memoizedProps;
    i.props = s;
    var u = i.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = Qe(a))
      : ((a = Oe(n) ? tn : xe.current), (a = Tn(t, a)));
    var h = n.getDerivedStateFromProps,
      d =
        typeof h == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== r || u !== a) && Tu(t, i, r, a)),
      (_t = !1);
    var m = t.memoizedState;
    (i.state = m),
      To(t, r, i, o),
      (u = t.memoizedState),
      s !== r || m !== u || Te.current || _t
        ? (typeof h == "function" && (pi(t, n, h, r), (u = t.memoizedState)),
          (s = _t || Lu(t, n, s, r, m, u, a))
            ? (d ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = a),
          (r = s))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Sc(e, t),
      (s = t.memoizedProps),
      (a = t.type === t.elementType ? s : be(t.type, s)),
      (i.props = a),
      (d = t.pendingProps),
      (m = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Qe(u))
        : ((u = Oe(n) ? tn : xe.current), (u = Tn(t, u)));
    var w = n.getDerivedStateFromProps;
    (h =
      typeof w == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== d || m !== u) && Tu(t, i, r, u)),
      (_t = !1),
      (m = t.memoizedState),
      (i.state = m),
      To(t, r, i, o);
    var g = t.memoizedState;
    s !== d || m !== g || Te.current || _t
      ? (typeof w == "function" && (pi(t, n, w, r), (g = t.memoizedState)),
        (a = _t || Lu(t, n, a, r, m, g, u) || !1)
          ? (h ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, g, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, g, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (i.props = r),
        (i.state = g),
        (i.context = u),
        (r = a))
      : (typeof i.componentDidUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return vi(e, t, n, r, l, o);
}
function vi(e, t, n, r, o, l) {
  Kc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && ku(t, n, !1), St(e, t, l);
  (r = t.stateNode), (n0.current = t);
  var s =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Mn(t, e.child, null, l)), (t.child = Mn(t, null, s, l)))
      : Ce(e, t, s, l),
    (t.memoizedState = r.state),
    o && ku(t, n, !0),
    t.child
  );
}
function Zc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Su(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Su(e, t.context, !1),
    ss(e, t.containerInfo);
}
function Fu(e, t, n, r, o) {
  return On(), ts(o), (t.flags |= 256), Ce(e, t, n, r), t.child;
}
var yi = { dehydrated: null, treeContext: null, retryLane: 0 };
function wi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Yc(e, t, n) {
  var r = t.pendingProps,
    o = X.current,
    l = !1,
    i = (t.flags & 128) !== 0,
    s;
  if (
    ((s = i) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    W(X, o & 1),
    e === null)
  )
    return (
      fi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = i))
                : (l = qo(i, r, 0, null)),
              (e = en(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = wi(n)),
              (t.memoizedState = yi),
              e)
            : hs(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return r0(e, t, i, r, s, o, n);
  if (l) {
    (l = r.fallback), (i = t.mode), (o = e.child), (s = o.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = $t(o, u)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (l = $t(s, l)) : ((l = en(l, i, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? wi(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (l.memoizedState = i),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = yi),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = $t(l, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function hs(e, t) {
  return (
    (t = qo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Jr(e, t, n, r) {
  return (
    r !== null && ts(r),
    Mn(t, e.child, null, n),
    (e = hs(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function r0(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ol(Error(E(422)))), Jr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (o = t.mode),
        (r = qo({ mode: "visible", children: r.children }, o, 0, null)),
        (l = en(l, o, i, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && Mn(t, e.child, null, i),
        (t.child.memoizedState = wi(i)),
        (t.memoizedState = yi),
        l);
  if (!(t.mode & 1)) return Jr(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (l = Error(E(419))), (r = Ol(l, r, void 0)), Jr(e, t, i, r);
  }
  if (((s = (i & e.childLanes) !== 0), Le || s)) {
    if (((r = ce), r !== null)) {
      switch (i & -i) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== l.retryLane &&
          ((l.retryLane = o), xt(e, o), nt(r, e, o, -1));
    }
    return Ss(), (r = Ol(Error(E(421)))), Jr(e, t, i, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = g0.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (De = Rt(o.nextSibling)),
      (Ae = t),
      (Z = !0),
      (et = null),
      e !== null &&
        ((Ue[Be++] = ht),
        (Ue[Be++] = gt),
        (Ue[Be++] = nn),
        (ht = e.id),
        (gt = e.overflow),
        (nn = t)),
      (t = hs(t, r.children)),
      (t.flags |= 4096),
      t);
}
function $u(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), di(e.return, t, n);
}
function Ml(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = o));
}
function Xc(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail;
  if ((Ce(e, t, r.children, n), (r = X.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && $u(e, n, t);
        else if (e.tag === 19) $u(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((W(X, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Oo(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Ml(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Oo(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Ml(t, !0, n, null, l);
        break;
      case "together":
        Ml(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function co(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function St(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (on |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (
      e = t.child, n = $t(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = $t(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function o0(e, t, n) {
  switch (t.tag) {
    case 3:
      Zc(t), On();
      break;
    case 5:
      kc(t);
      break;
    case 1:
      Oe(t.type) && Po(t);
      break;
    case 4:
      ss(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      W(jo, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (W(X, X.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Yc(e, t, n)
          : (W(X, X.current & 1),
            (e = St(e, t, n)),
            e !== null ? e.sibling : null);
      W(X, X.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Xc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        W(X, X.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Gc(e, t, n);
  }
  return St(e, t, n);
}
var Jc, xi, bc, qc;
Jc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
xi = function () {};
bc = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Jt(ct.current);
    var l = null;
    switch (n) {
      case "input":
        (o = Bl(e, o)), (r = Bl(e, r)), (l = []);
        break;
      case "select":
        (o = b({}, o, { value: void 0 })),
          (r = b({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (o = Ql(e, o)), (r = Ql(e, r)), (l = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Eo);
    }
    Kl(n, r);
    var i;
    n = null;
    for (a in o)
      if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
        if (a === "style") {
          var s = o[a];
          for (i in s) s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (fr.hasOwnProperty(a)
              ? l || (l = [])
              : (l = l || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (
        ((s = o != null ? o[a] : void 0),
        r.hasOwnProperty(a) && u !== s && (u != null || s != null))
      )
        if (a === "style")
          if (s) {
            for (i in s)
              !s.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in u)
              u.hasOwnProperty(i) &&
                s[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
          } else n || (l || (l = []), l.push(a, n)), (n = u);
        else
          a === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (l = l || []).push(a, u))
            : a === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (l = l || []).push(a, "" + u)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (fr.hasOwnProperty(a)
                ? (u != null && a === "onScroll" && G("scroll", e),
                  l || s === u || (l = []))
                : (l = l || []).push(a, u));
    }
    n && (l = l || []).push("style", n);
    var a = l;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
qc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Kn(e, t) {
  if (!Z)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ye(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function l0(e, t, n) {
  var r = t.pendingProps;
  switch ((es(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ye(t), null;
    case 1:
      return Oe(t.type) && No(), ye(t), null;
    case 3:
      return (
        (r = t.stateNode),
        In(),
        K(Te),
        K(xe),
        as(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Yr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), et !== null && (zi(et), (et = null)))),
        xi(e, t),
        ye(t),
        null
      );
    case 5:
      us(t);
      var o = Jt(Cr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        bc(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return ye(t), null;
        }
        if (((e = Jt(ct.current)), Yr(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[ut] = t), (r[Sr] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              G("cancel", r), G("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < er.length; o++) G(er[o], r);
              break;
            case "source":
              G("error", r);
              break;
            case "img":
            case "image":
            case "link":
              G("error", r), G("load", r);
              break;
            case "details":
              G("toggle", r);
              break;
            case "input":
              Zs(r, l), G("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                G("invalid", r);
              break;
            case "textarea":
              Xs(r, l), G("invalid", r);
          }
          Kl(n, l), (o = null);
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var s = l[i];
              i === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (l.suppressHydrationWarning !== !0 &&
                      Zr(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (l.suppressHydrationWarning !== !0 &&
                      Zr(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : fr.hasOwnProperty(i) &&
                  s != null &&
                  i === "onScroll" &&
                  G("scroll", r);
            }
          switch (n) {
            case "input":
              Vr(r), Ys(r, l, !0);
              break;
            case "textarea":
              Vr(r), Js(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = Eo);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = _a(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[ut] = t),
            (e[Sr] = r),
            Jc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Zl(n, r)), n)) {
              case "dialog":
                G("cancel", e), G("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                G("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < er.length; o++) G(er[o], e);
                o = r;
                break;
              case "source":
                G("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                G("error", e), G("load", e), (o = r);
                break;
              case "details":
                G("toggle", e), (o = r);
                break;
              case "input":
                Zs(e, r), (o = Bl(e, r)), G("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = b({}, r, { value: void 0 })),
                  G("invalid", e);
                break;
              case "textarea":
                Xs(e, r), (o = Ql(e, r)), G("invalid", e);
                break;
              default:
                o = r;
            }
            Kl(n, o), (s = o);
            for (l in s)
              if (s.hasOwnProperty(l)) {
                var u = s[l];
                l === "style"
                  ? La(e, u)
                  : l === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && za(e, u))
                  : l === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && dr(e, u)
                    : typeof u == "number" && dr(e, "" + u)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (fr.hasOwnProperty(l)
                      ? u != null && l === "onScroll" && G("scroll", e)
                      : u != null && $i(e, l, u, i));
              }
            switch (n) {
              case "input":
                Vr(e), Ys(e, r, !1);
                break;
              case "textarea":
                Vr(e), Js(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Vt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? En(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      En(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Eo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ye(t), null;
    case 6:
      if (e && t.stateNode != null) qc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (((n = Jt(Cr.current)), Jt(ct.current), Yr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ut] = t),
            (l = r.nodeValue !== n) && ((e = Ae), e !== null))
          )
            switch (e.tag) {
              case 3:
                Zr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Zr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[ut] = t),
            (t.stateNode = r);
      }
      return ye(t), null;
    case 13:
      if (
        (K(X),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Z && De !== null && t.mode & 1 && !(t.flags & 128))
          vc(), On(), (t.flags |= 98560), (l = !1);
        else if (((l = Yr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(E(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(E(317));
            l[ut] = t;
          } else
            On(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ye(t), (l = !1);
        } else et !== null && (zi(et), (et = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || X.current & 1 ? ue === 0 && (ue = 3) : Ss())),
          t.updateQueue !== null && (t.flags |= 4),
          ye(t),
          null);
    case 4:
      return (
        In(), xi(e, t), e === null && wr(t.stateNode.containerInfo), ye(t), null
      );
    case 10:
      return os(t.type._context), ye(t), null;
    case 17:
      return Oe(t.type) && No(), ye(t), null;
    case 19:
      if ((K(X), (l = t.memoizedState), l === null)) return ye(t), null;
      if (((r = (t.flags & 128) !== 0), (i = l.rendering), i === null))
        if (r) Kn(l, !1);
        else {
          if (ue !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Oo(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Kn(l, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (i = l.alternate),
                    i === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = i.childLanes),
                        (l.lanes = i.lanes),
                        (l.child = i.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = i.memoizedProps),
                        (l.memoizedState = i.memoizedState),
                        (l.updateQueue = i.updateQueue),
                        (l.type = i.type),
                        (e = i.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return W(X, (X.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            ne() > Dn &&
            ((t.flags |= 128), (r = !0), Kn(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Oo(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Kn(l, !0),
              l.tail === null && l.tailMode === "hidden" && !i.alternate && !Z)
            )
              return ye(t), null;
          } else
            2 * ne() - l.renderingStartTime > Dn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Kn(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = l.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (l.last = i));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = ne()),
          (t.sibling = null),
          (n = X.current),
          W(X, r ? (n & 1) | 2 : n & 1),
          t)
        : (ye(t), null);
    case 22:
    case 23:
      return (
        xs(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Re & 1073741824 && (ye(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ye(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function i0(e, t) {
  switch ((es(t), t.tag)) {
    case 1:
      return (
        Oe(t.type) && No(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        In(),
        K(Te),
        K(xe),
        as(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return us(t), null;
    case 13:
      if ((K(X), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(E(340));
        On();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return K(X), null;
    case 4:
      return In(), null;
    case 10:
      return os(t.type._context), null;
    case 22:
    case 23:
      return xs(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var br = !1,
  we = !1,
  s0 = typeof WeakSet == "function" ? WeakSet : Set,
  j = null;
function kn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        te(e, t, r);
      }
    else n.current = null;
}
function Si(e, t, n) {
  try {
    n();
  } catch (r) {
    te(e, t, r);
  }
}
var Vu = !1;
function u0(e, t) {
  if (((oi = So), (e = oc()), bi(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            s = -1,
            u = -1,
            a = 0,
            h = 0,
            d = e,
            m = null;
          t: for (;;) {
            for (
              var w;
              d !== n || (o !== 0 && d.nodeType !== 3) || (s = i + o),
                d !== l || (r !== 0 && d.nodeType !== 3) || (u = i + r),
                d.nodeType === 3 && (i += d.nodeValue.length),
                (w = d.firstChild) !== null;

            )
              (m = d), (d = w);
            for (;;) {
              if (d === e) break t;
              if (
                (m === n && ++a === o && (s = i),
                m === l && ++h === r && (u = i),
                (w = d.nextSibling) !== null)
              )
                break;
              (d = m), (m = d.parentNode);
            }
            d = w;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (li = { focusedElem: e, selectionRange: n }, So = !1, j = t; j !== null; )
    if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (j = e);
    else
      for (; j !== null; ) {
        t = j;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var v = g.memoizedProps,
                    x = g.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : be(t.type, v),
                      x
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(E(163));
            }
        } catch (y) {
          te(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (j = e);
          break;
        }
        j = t.return;
      }
  return (g = Vu), (Vu = !1), g;
}
function sr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        (o.destroy = void 0), l !== void 0 && Si(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Jo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ki(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function ef(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), ef(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ut], delete t[Sr], delete t[ui], delete t[Wp], delete t[Qp])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function tf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Uu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || tf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ci(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Eo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ci(e, t, n), e = e.sibling; e !== null; ) Ci(e, t, n), (e = e.sibling);
}
function Ei(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ei(e, t, n), e = e.sibling; e !== null; ) Ei(e, t, n), (e = e.sibling);
}
var fe = null,
  qe = !1;
function Ct(e, t, n) {
  for (n = n.child; n !== null; ) nf(e, t, n), (n = n.sibling);
}
function nf(e, t, n) {
  if (at && typeof at.onCommitFiberUnmount == "function")
    try {
      at.onCommitFiberUnmount(Ho, n);
    } catch {}
  switch (n.tag) {
    case 5:
      we || kn(n, t);
    case 6:
      var r = fe,
        o = qe;
      (fe = null),
        Ct(e, t, n),
        (fe = r),
        (qe = o),
        fe !== null &&
          (qe
            ? ((e = fe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : fe.removeChild(n.stateNode));
      break;
    case 18:
      fe !== null &&
        (qe
          ? ((e = fe),
            (n = n.stateNode),
            e.nodeType === 8
              ? Pl(e.parentNode, n)
              : e.nodeType === 1 && Pl(e, n),
            gr(e))
          : Pl(fe, n.stateNode));
      break;
    case 4:
      (r = fe),
        (o = qe),
        (fe = n.stateNode.containerInfo),
        (qe = !0),
        Ct(e, t, n),
        (fe = r),
        (qe = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !we &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var l = o,
            i = l.destroy;
          (l = l.tag),
            i !== void 0 && (l & 2 || l & 4) && Si(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      Ct(e, t, n);
      break;
    case 1:
      if (
        !we &&
        (kn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          te(n, t, s);
        }
      Ct(e, t, n);
      break;
    case 21:
      Ct(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((we = (r = we) || n.memoizedState !== null), Ct(e, t, n), (we = r))
        : Ct(e, t, n);
      break;
    default:
      Ct(e, t, n);
  }
}
function Bu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new s0()),
      t.forEach(function (r) {
        var o = v0.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Je(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var l = e,
          i = t,
          s = i;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (fe = s.stateNode), (qe = !1);
              break e;
            case 3:
              (fe = s.stateNode.containerInfo), (qe = !0);
              break e;
            case 4:
              (fe = s.stateNode.containerInfo), (qe = !0);
              break e;
          }
          s = s.return;
        }
        if (fe === null) throw Error(E(160));
        nf(l, i, o), (fe = null), (qe = !1);
        var u = o.alternate;
        u !== null && (u.return = null), (o.return = null);
      } catch (a) {
        te(o, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) rf(t, e), (t = t.sibling);
}
function rf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Je(t, e), it(e), r & 4)) {
        try {
          sr(3, e, e.return), Jo(3, e);
        } catch (v) {
          te(e, e.return, v);
        }
        try {
          sr(5, e, e.return);
        } catch (v) {
          te(e, e.return, v);
        }
      }
      break;
    case 1:
      Je(t, e), it(e), r & 512 && n !== null && kn(n, n.return);
      break;
    case 5:
      if (
        (Je(t, e),
        it(e),
        r & 512 && n !== null && kn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          dr(o, "");
        } catch (v) {
          te(e, e.return, v);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          i = n !== null ? n.memoizedProps : l,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === "input" && l.type === "radio" && l.name != null && Na(o, l),
              Zl(s, i);
            var a = Zl(s, l);
            for (i = 0; i < u.length; i += 2) {
              var h = u[i],
                d = u[i + 1];
              h === "style"
                ? La(o, d)
                : h === "dangerouslySetInnerHTML"
                ? za(o, d)
                : h === "children"
                ? dr(o, d)
                : $i(o, h, d, a);
            }
            switch (s) {
              case "input":
                Hl(o, l);
                break;
              case "textarea":
                Pa(o, l);
                break;
              case "select":
                var m = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var w = l.value;
                w != null
                  ? En(o, !!l.multiple, w, !1)
                  : m !== !!l.multiple &&
                    (l.defaultValue != null
                      ? En(o, !!l.multiple, l.defaultValue, !0)
                      : En(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[Sr] = l;
          } catch (v) {
            te(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Je(t, e), it(e), r & 4)) {
        if (e.stateNode === null) throw Error(E(162));
        (o = e.stateNode), (l = e.memoizedProps);
        try {
          o.nodeValue = l;
        } catch (v) {
          te(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Je(t, e), it(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          gr(t.containerInfo);
        } catch (v) {
          te(e, e.return, v);
        }
      break;
    case 4:
      Je(t, e), it(e);
      break;
    case 13:
      Je(t, e),
        it(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (ys = ne())),
        r & 4 && Bu(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((we = (a = we) || h), Je(t, e), (we = a)) : Je(t, e),
        it(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !h && e.mode & 1)
        )
          for (j = e, h = e.child; h !== null; ) {
            for (d = j = h; j !== null; ) {
              switch (((m = j), (w = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  sr(4, m, m.return);
                  break;
                case 1:
                  kn(m, m.return);
                  var g = m.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (v) {
                      te(r, n, v);
                    }
                  }
                  break;
                case 5:
                  kn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Wu(d);
                    continue;
                  }
              }
              w !== null ? ((w.return = m), (j = w)) : Wu(d);
            }
            h = h.sibling;
          }
        e: for (h = null, d = e; ; ) {
          if (d.tag === 5) {
            if (h === null) {
              h = d;
              try {
                (o = d.stateNode),
                  a
                    ? ((l = o.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((s = d.stateNode),
                      (u = d.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (s.style.display = ja("display", i)));
              } catch (v) {
                te(e, e.return, v);
              }
            }
          } else if (d.tag === 6) {
            if (h === null)
              try {
                d.stateNode.nodeValue = a ? "" : d.memoizedProps;
              } catch (v) {
                te(e, e.return, v);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            h === d && (h = null), (d = d.return);
          }
          h === d && (h = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Je(t, e), it(e), r & 4 && Bu(e);
      break;
    case 21:
      break;
    default:
      Je(t, e), it(e);
  }
}
function it(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (tf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (dr(o, ""), (r.flags &= -33));
          var l = Uu(e);
          Ei(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            s = Uu(e);
          Ci(e, s, i);
          break;
        default:
          throw Error(E(161));
      }
    } catch (u) {
      te(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function a0(e, t, n) {
  (j = e), of(e);
}
function of(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var o = j,
      l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || br;
      if (!i) {
        var s = o.alternate,
          u = (s !== null && s.memoizedState !== null) || we;
        s = br;
        var a = we;
        if (((br = i), (we = u) && !a))
          for (j = o; j !== null; )
            (i = j),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Qu(o)
                : u !== null
                ? ((u.return = i), (j = u))
                : Qu(o);
        for (; l !== null; ) (j = l), of(l), (l = l.sibling);
        (j = o), (br = s), (we = a);
      }
      Hu(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (j = l)) : Hu(e);
  }
}
function Hu(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              we || Jo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !we)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : be(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && _u(t, l, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                _u(t, i, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var h = a.memoizedState;
                  if (h !== null) {
                    var d = h.dehydrated;
                    d !== null && gr(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(E(163));
          }
        we || (t.flags & 512 && ki(t));
      } catch (m) {
        te(t, t.return, m);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function Wu(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function Qu(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Jo(4, t);
          } catch (u) {
            te(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              te(t, o, u);
            }
          }
          var l = t.return;
          try {
            ki(t);
          } catch (u) {
            te(t, l, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ki(t);
          } catch (u) {
            te(t, i, u);
          }
      }
    } catch (u) {
      te(t, t.return, u);
    }
    if (t === e) {
      j = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (j = s);
      break;
    }
    j = t.return;
  }
}
var c0 = Math.ceil,
  Ro = kt.ReactCurrentDispatcher,
  gs = kt.ReactCurrentOwner,
  We = kt.ReactCurrentBatchConfig,
  V = 0,
  ce = null,
  le = null,
  de = 0,
  Re = 0,
  Cn = Ht(0),
  ue = 0,
  _r = null,
  on = 0,
  bo = 0,
  vs = 0,
  ur = null,
  je = null,
  ys = 0,
  Dn = 1 / 0,
  pt = null,
  Do = !1,
  Ni = null,
  At = null,
  qr = !1,
  Tt = null,
  Ao = 0,
  ar = 0,
  Pi = null,
  fo = -1,
  po = 0;
function Ee() {
  return V & 6 ? ne() : fo !== -1 ? fo : (fo = ne());
}
function Ft(e) {
  return e.mode & 1
    ? V & 2 && de !== 0
      ? de & -de
      : Kp.transition !== null
      ? (po === 0 && (po = Ba()), po)
      : ((e = B),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ya(e.type))),
        e)
    : 1;
}
function nt(e, t, n, r) {
  if (50 < ar) throw ((ar = 0), (Pi = null), Error(E(185)));
  Or(e, n, r),
    (!(V & 2) || e !== ce) &&
      (e === ce && (!(V & 2) && (bo |= n), ue === 4 && jt(e, de)),
      Me(e, r),
      n === 1 && V === 0 && !(t.mode & 1) && ((Dn = ne() + 500), Zo && Wt()));
}
function Me(e, t) {
  var n = e.callbackNode;
  Kd(e, t);
  var r = xo(e, e === ce ? de : 0);
  if (r === 0)
    n !== null && eu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && eu(n), t === 1))
      e.tag === 0 ? Gp(Gu.bind(null, e)) : mc(Gu.bind(null, e)),
        Bp(function () {
          !(V & 6) && Wt();
        }),
        (n = null);
    else {
      switch (Ha(r)) {
        case 1:
          n = Wi;
          break;
        case 4:
          n = Va;
          break;
        case 16:
          n = wo;
          break;
        case 536870912:
          n = Ua;
          break;
        default:
          n = wo;
      }
      n = pf(n, lf.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function lf(e, t) {
  if (((fo = -1), (po = 0), V & 6)) throw Error(E(327));
  var n = e.callbackNode;
  if (jn() && e.callbackNode !== n) return null;
  var r = xo(e, e === ce ? de : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Fo(e, r);
  else {
    t = r;
    var o = V;
    V |= 2;
    var l = uf();
    (ce !== e || de !== t) && ((pt = null), (Dn = ne() + 500), qt(e, t));
    do
      try {
        p0();
        break;
      } catch (s) {
        sf(e, s);
      }
    while (!0);
    rs(),
      (Ro.current = l),
      (V = o),
      le !== null ? (t = 0) : ((ce = null), (de = 0), (t = ue));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = ql(e)), o !== 0 && ((r = o), (t = _i(e, o)))), t === 1)
    )
      throw ((n = _r), qt(e, 0), jt(e, r), Me(e, ne()), n);
    if (t === 6) jt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !f0(o) &&
          ((t = Fo(e, r)),
          t === 2 && ((l = ql(e)), l !== 0 && ((r = l), (t = _i(e, l)))),
          t === 1))
      )
        throw ((n = _r), qt(e, 0), jt(e, r), Me(e, ne()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          Zt(e, je, pt);
          break;
        case 3:
          if (
            (jt(e, r), (r & 130023424) === r && ((t = ys + 500 - ne()), 10 < t))
          ) {
            if (xo(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Ee(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = si(Zt.bind(null, e, je, pt), t);
            break;
          }
          Zt(e, je, pt);
          break;
        case 4:
          if ((jt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - tt(r);
            (l = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~l);
          }
          if (
            ((r = o),
            (r = ne() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * c0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = si(Zt.bind(null, e, je, pt), r);
            break;
          }
          Zt(e, je, pt);
          break;
        case 5:
          Zt(e, je, pt);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return Me(e, ne()), e.callbackNode === n ? lf.bind(null, e) : null;
}
function _i(e, t) {
  var n = ur;
  return (
    e.current.memoizedState.isDehydrated && (qt(e, t).flags |= 256),
    (e = Fo(e, t)),
    e !== 2 && ((t = je), (je = n), t !== null && zi(t)),
    e
  );
}
function zi(e) {
  je === null ? (je = e) : je.push.apply(je, e);
}
function f0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!ot(l(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function jt(e, t) {
  for (
    t &= ~vs,
      t &= ~bo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - tt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Gu(e) {
  if (V & 6) throw Error(E(327));
  jn();
  var t = xo(e, 0);
  if (!(t & 1)) return Me(e, ne()), null;
  var n = Fo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ql(e);
    r !== 0 && ((t = r), (n = _i(e, r)));
  }
  if (n === 1) throw ((n = _r), qt(e, 0), jt(e, t), Me(e, ne()), n);
  if (n === 6) throw Error(E(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Zt(e, je, pt),
    Me(e, ne()),
    null
  );
}
function ws(e, t) {
  var n = V;
  V |= 1;
  try {
    return e(t);
  } finally {
    (V = n), V === 0 && ((Dn = ne() + 500), Zo && Wt());
  }
}
function ln(e) {
  Tt !== null && Tt.tag === 0 && !(V & 6) && jn();
  var t = V;
  V |= 1;
  var n = We.transition,
    r = B;
  try {
    if (((We.transition = null), (B = 1), e)) return e();
  } finally {
    (B = r), (We.transition = n), (V = t), !(V & 6) && Wt();
  }
}
function xs() {
  (Re = Cn.current), K(Cn);
}
function qt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Up(n)), le !== null))
    for (n = le.return; n !== null; ) {
      var r = n;
      switch ((es(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && No();
          break;
        case 3:
          In(), K(Te), K(xe), as();
          break;
        case 5:
          us(r);
          break;
        case 4:
          In();
          break;
        case 13:
          K(X);
          break;
        case 19:
          K(X);
          break;
        case 10:
          os(r.type._context);
          break;
        case 22:
        case 23:
          xs();
      }
      n = n.return;
    }
  if (
    ((ce = e),
    (le = e = $t(e.current, null)),
    (de = Re = t),
    (ue = 0),
    (_r = null),
    (vs = bo = on = 0),
    (je = ur = null),
    Xt !== null)
  ) {
    for (t = 0; t < Xt.length; t++)
      if (((n = Xt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          l = n.pending;
        if (l !== null) {
          var i = l.next;
          (l.next = o), (r.next = i);
        }
        n.pending = r;
      }
    Xt = null;
  }
  return e;
}
function sf(e, t) {
  do {
    var n = le;
    try {
      if ((rs(), (uo.current = Io), Mo)) {
        for (var r = J.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Mo = !1;
      }
      if (
        ((rn = 0),
        (ae = se = J = null),
        (ir = !1),
        (Er = 0),
        (gs.current = null),
        n === null || n.return === null)
      ) {
        (ue = 1), (_r = t), (le = null);
        break;
      }
      e: {
        var l = e,
          i = n.return,
          s = n,
          u = t;
        if (
          ((t = de),
          (s.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var a = u,
            h = s,
            d = h.tag;
          if (!(h.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var m = h.alternate;
            m
              ? ((h.updateQueue = m.updateQueue),
                (h.memoizedState = m.memoizedState),
                (h.lanes = m.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var w = Mu(i);
          if (w !== null) {
            (w.flags &= -257),
              Iu(w, i, s, l, t),
              w.mode & 1 && Ou(l, a, t),
              (t = w),
              (u = a);
            var g = t.updateQueue;
            if (g === null) {
              var v = new Set();
              v.add(u), (t.updateQueue = v);
            } else g.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Ou(l, a, t), Ss();
              break e;
            }
            u = Error(E(426));
          }
        } else if (Z && s.mode & 1) {
          var x = Mu(i);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              Iu(x, i, s, l, t),
              ts(Rn(u, s));
            break e;
          }
        }
        (l = u = Rn(u, s)),
          ue !== 4 && (ue = 2),
          ur === null ? (ur = [l]) : ur.push(l),
          (l = i);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var f = Hc(l, u, t);
              Pu(l, f);
              break e;
            case 1:
              s = u;
              var c = l.type,
                p = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (At === null || !At.has(p))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var y = Wc(l, s, t);
                Pu(l, y);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      cf(n);
    } catch (C) {
      (t = C), le === n && n !== null && (le = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function uf() {
  var e = Ro.current;
  return (Ro.current = Io), e === null ? Io : e;
}
function Ss() {
  (ue === 0 || ue === 3 || ue === 2) && (ue = 4),
    ce === null || (!(on & 268435455) && !(bo & 268435455)) || jt(ce, de);
}
function Fo(e, t) {
  var n = V;
  V |= 2;
  var r = uf();
  (ce !== e || de !== t) && ((pt = null), qt(e, t));
  do
    try {
      d0();
      break;
    } catch (o) {
      sf(e, o);
    }
  while (!0);
  if ((rs(), (V = n), (Ro.current = r), le !== null)) throw Error(E(261));
  return (ce = null), (de = 0), ue;
}
function d0() {
  for (; le !== null; ) af(le);
}
function p0() {
  for (; le !== null && !Fd(); ) af(le);
}
function af(e) {
  var t = df(e.alternate, e, Re);
  (e.memoizedProps = e.pendingProps),
    t === null ? cf(e) : (le = t),
    (gs.current = null);
}
function cf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = i0(n, t)), n !== null)) {
        (n.flags &= 32767), (le = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ue = 6), (le = null);
        return;
      }
    } else if (((n = l0(n, t, Re)), n !== null)) {
      le = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      le = t;
      return;
    }
    le = t = e;
  } while (t !== null);
  ue === 0 && (ue = 5);
}
function Zt(e, t, n) {
  var r = B,
    o = We.transition;
  try {
    (We.transition = null), (B = 1), m0(e, t, n, r);
  } finally {
    (We.transition = o), (B = r);
  }
  return null;
}
function m0(e, t, n, r) {
  do jn();
  while (Tt !== null);
  if (V & 6) throw Error(E(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(E(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (Zd(e, l),
    e === ce && ((le = ce = null), (de = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      qr ||
      ((qr = !0),
      pf(wo, function () {
        return jn(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = We.transition), (We.transition = null);
    var i = B;
    B = 1;
    var s = V;
    (V |= 4),
      (gs.current = null),
      u0(e, n),
      rf(n, e),
      Ip(li),
      (So = !!oi),
      (li = oi = null),
      (e.current = n),
      a0(n),
      $d(),
      (V = s),
      (B = i),
      (We.transition = l);
  } else e.current = n;
  if (
    (qr && ((qr = !1), (Tt = e), (Ao = o)),
    (l = e.pendingLanes),
    l === 0 && (At = null),
    Bd(n.stateNode),
    Me(e, ne()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Do) throw ((Do = !1), (e = Ni), (Ni = null), e);
  return (
    Ao & 1 && e.tag !== 0 && jn(),
    (l = e.pendingLanes),
    l & 1 ? (e === Pi ? ar++ : ((ar = 0), (Pi = e))) : (ar = 0),
    Wt(),
    null
  );
}
function jn() {
  if (Tt !== null) {
    var e = Ha(Ao),
      t = We.transition,
      n = B;
    try {
      if (((We.transition = null), (B = 16 > e ? 16 : e), Tt === null))
        var r = !1;
      else {
        if (((e = Tt), (Tt = null), (Ao = 0), V & 6)) throw Error(E(331));
        var o = V;
        for (V |= 4, j = e.current; j !== null; ) {
          var l = j,
            i = l.child;
          if (j.flags & 16) {
            var s = l.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var a = s[u];
                for (j = a; j !== null; ) {
                  var h = j;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      sr(8, h, l);
                  }
                  var d = h.child;
                  if (d !== null) (d.return = h), (j = d);
                  else
                    for (; j !== null; ) {
                      h = j;
                      var m = h.sibling,
                        w = h.return;
                      if ((ef(h), h === a)) {
                        j = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = w), (j = m);
                        break;
                      }
                      j = w;
                    }
                }
              }
              var g = l.alternate;
              if (g !== null) {
                var v = g.child;
                if (v !== null) {
                  g.child = null;
                  do {
                    var x = v.sibling;
                    (v.sibling = null), (v = x);
                  } while (v !== null);
                }
              }
              j = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null) (i.return = l), (j = i);
          else
            e: for (; j !== null; ) {
              if (((l = j), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    sr(9, l, l.return);
                }
              var f = l.sibling;
              if (f !== null) {
                (f.return = l.return), (j = f);
                break e;
              }
              j = l.return;
            }
        }
        var c = e.current;
        for (j = c; j !== null; ) {
          i = j;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null) (p.return = i), (j = p);
          else
            e: for (i = c; j !== null; ) {
              if (((s = j), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Jo(9, s);
                  }
                } catch (C) {
                  te(s, s.return, C);
                }
              if (s === i) {
                j = null;
                break e;
              }
              var y = s.sibling;
              if (y !== null) {
                (y.return = s.return), (j = y);
                break e;
              }
              j = s.return;
            }
        }
        if (
          ((V = o), Wt(), at && typeof at.onPostCommitFiberRoot == "function")
        )
          try {
            at.onPostCommitFiberRoot(Ho, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (B = n), (We.transition = t);
    }
  }
  return !1;
}
function Ku(e, t, n) {
  (t = Rn(n, t)),
    (t = Hc(e, t, 1)),
    (e = Dt(e, t, 1)),
    (t = Ee()),
    e !== null && (Or(e, 1, t), Me(e, t));
}
function te(e, t, n) {
  if (e.tag === 3) Ku(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ku(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (At === null || !At.has(r)))
        ) {
          (e = Rn(n, e)),
            (e = Wc(t, e, 1)),
            (t = Dt(t, e, 1)),
            (e = Ee()),
            t !== null && (Or(t, 1, e), Me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function h0(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ee()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ce === e &&
      (de & n) === n &&
      (ue === 4 || (ue === 3 && (de & 130023424) === de && 500 > ne() - ys)
        ? qt(e, 0)
        : (vs |= n)),
    Me(e, t);
}
function ff(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Hr), (Hr <<= 1), !(Hr & 130023424) && (Hr = 4194304))
      : (t = 1));
  var n = Ee();
  (e = xt(e, t)), e !== null && (Or(e, t, n), Me(e, n));
}
function g0(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), ff(e, n);
}
function v0(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(E(314));
  }
  r !== null && r.delete(t), ff(e, n);
}
var df;
df = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Te.current) Le = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Le = !1), o0(e, t, n);
      Le = !!(e.flags & 131072);
    }
  else (Le = !1), Z && t.flags & 1048576 && hc(t, zo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      co(e, t), (e = t.pendingProps);
      var o = Tn(t, xe.current);
      zn(t, n), (o = fs(null, t, r, e, o, n));
      var l = ds();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Oe(r) ? ((l = !0), Po(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            is(t),
            (o.updater = Xo),
            (t.stateNode = o),
            (o._reactInternals = t),
            mi(t, r, e, n),
            (t = vi(null, t, r, !0, l, n)))
          : ((t.tag = 0), Z && l && qi(t), Ce(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (co(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = w0(r)),
          (e = be(r, e)),
          o)
        ) {
          case 0:
            t = gi(null, t, r, e, n);
            break e;
          case 1:
            t = Au(null, t, r, e, n);
            break e;
          case 11:
            t = Ru(null, t, r, e, n);
            break e;
          case 14:
            t = Du(null, t, r, be(r.type, e), n);
            break e;
        }
        throw Error(E(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : be(r, o)),
        gi(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : be(r, o)),
        Au(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Zc(t), e === null)) throw Error(E(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          Sc(e, t),
          To(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (o = Rn(Error(E(423)), t)), (t = Fu(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Rn(Error(E(424)), t)), (t = Fu(e, t, r, n, o));
            break e;
          } else
            for (
              De = Rt(t.stateNode.containerInfo.firstChild),
                Ae = t,
                Z = !0,
                et = null,
                n = wc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((On(), r === o)) {
            t = St(e, t, n);
            break e;
          }
          Ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        kc(t),
        e === null && fi(t),
        (r = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (i = o.children),
        ii(r, o) ? (i = null) : l !== null && ii(r, l) && (t.flags |= 32),
        Kc(e, t),
        Ce(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && fi(t), null;
    case 13:
      return Yc(e, t, n);
    case 4:
      return (
        ss(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Mn(t, null, r, n)) : Ce(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : be(r, o)),
        Ru(e, t, r, o, n)
      );
    case 7:
      return Ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (i = o.value),
          W(jo, r._currentValue),
          (r._currentValue = i),
          l !== null)
        )
          if (ot(l.value, i)) {
            if (l.children === o.children && !Te.current) {
              t = St(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var s = l.dependencies;
              if (s !== null) {
                i = l.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (l.tag === 1) {
                      (u = vt(-1, n & -n)), (u.tag = 2);
                      var a = l.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var h = a.pending;
                        h === null
                          ? (u.next = u)
                          : ((u.next = h.next), (h.next = u)),
                          (a.pending = u);
                      }
                    }
                    (l.lanes |= n),
                      (u = l.alternate),
                      u !== null && (u.lanes |= n),
                      di(l.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((i = l.return), i === null)) throw Error(E(341));
                (i.lanes |= n),
                  (s = i.alternate),
                  s !== null && (s.lanes |= n),
                  di(i, n, t),
                  (i = l.sibling);
              } else i = l.child;
              if (i !== null) i.return = l;
              else
                for (i = l; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((l = i.sibling), l !== null)) {
                    (l.return = i.return), (i = l);
                    break;
                  }
                  i = i.return;
                }
              l = i;
            }
        Ce(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        zn(t, n),
        (o = Qe(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ce(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = be(r, t.pendingProps)),
        (o = be(r.type, o)),
        Du(e, t, r, o, n)
      );
    case 15:
      return Qc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : be(r, o)),
        co(e, t),
        (t.tag = 1),
        Oe(r) ? ((e = !0), Po(t)) : (e = !1),
        zn(t, n),
        Bc(t, r, o),
        mi(t, r, o, n),
        vi(null, t, r, !0, e, n)
      );
    case 19:
      return Xc(e, t, n);
    case 22:
      return Gc(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function pf(e, t) {
  return $a(e, t);
}
function y0(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function He(e, t, n, r) {
  return new y0(e, t, n, r);
}
function ks(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function w0(e) {
  if (typeof e == "function") return ks(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ui)) return 11;
    if (e === Bi) return 14;
  }
  return 2;
}
function $t(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = He(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function mo(e, t, n, r, o, l) {
  var i = 2;
  if (((r = e), typeof e == "function")) ks(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case pn:
        return en(n.children, o, l, t);
      case Vi:
        (i = 8), (o |= 8);
        break;
      case Fl:
        return (
          (e = He(12, n, t, o | 2)), (e.elementType = Fl), (e.lanes = l), e
        );
      case $l:
        return (e = He(13, n, t, o)), (e.elementType = $l), (e.lanes = l), e;
      case Vl:
        return (e = He(19, n, t, o)), (e.elementType = Vl), (e.lanes = l), e;
      case ka:
        return qo(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case xa:
              i = 10;
              break e;
            case Sa:
              i = 9;
              break e;
            case Ui:
              i = 11;
              break e;
            case Bi:
              i = 14;
              break e;
            case Pt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(E(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = He(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function en(e, t, n, r) {
  return (e = He(7, e, r, t)), (e.lanes = n), e;
}
function qo(e, t, n, r) {
  return (
    (e = He(22, e, r, t)),
    (e.elementType = ka),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Il(e, t, n) {
  return (e = He(6, e, null, t)), (e.lanes = n), e;
}
function Rl(e, t, n) {
  return (
    (t = He(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function x0(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = hl(0)),
    (this.expirationTimes = hl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = hl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Cs(e, t, n, r, o, l, i, s, u) {
  return (
    (e = new x0(e, t, n, s, u)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = He(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    is(l),
    e
  );
}
function S0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: dn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function mf(e) {
  if (!e) return Ut;
  e = e._reactInternals;
  e: {
    if (an(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Oe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Oe(n)) return pc(e, n, t);
  }
  return t;
}
function hf(e, t, n, r, o, l, i, s, u) {
  return (
    (e = Cs(n, r, !0, e, o, l, i, s, u)),
    (e.context = mf(null)),
    (n = e.current),
    (r = Ee()),
    (o = Ft(n)),
    (l = vt(r, o)),
    (l.callback = t ?? null),
    Dt(n, l, o),
    (e.current.lanes = o),
    Or(e, o, r),
    Me(e, r),
    e
  );
}
function el(e, t, n, r) {
  var o = t.current,
    l = Ee(),
    i = Ft(o);
  return (
    (n = mf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = vt(l, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Dt(o, t, i)),
    e !== null && (nt(e, o, i, l), so(e, o, i)),
    i
  );
}
function $o(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Zu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Es(e, t) {
  Zu(e, t), (e = e.alternate) && Zu(e, t);
}
function k0() {
  return null;
}
var gf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ns(e) {
  this._internalRoot = e;
}
tl.prototype.render = Ns.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  el(e, t, null, null);
};
tl.prototype.unmount = Ns.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ln(function () {
      el(null, e, null, null);
    }),
      (t[wt] = null);
  }
};
function tl(e) {
  this._internalRoot = e;
}
tl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ga();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < zt.length && t !== 0 && t < zt[n].priority; n++);
    zt.splice(n, 0, e), n === 0 && Za(e);
  }
};
function Ps(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function nl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Yu() {}
function C0(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var a = $o(i);
        l.call(a);
      };
    }
    var i = hf(t, r, e, 0, null, !1, !1, "", Yu);
    return (
      (e._reactRootContainer = i),
      (e[wt] = i.current),
      wr(e.nodeType === 8 ? e.parentNode : e),
      ln(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var a = $o(u);
      s.call(a);
    };
  }
  var u = Cs(e, 0, !1, null, null, !1, !1, "", Yu);
  return (
    (e._reactRootContainer = u),
    (e[wt] = u.current),
    wr(e.nodeType === 8 ? e.parentNode : e),
    ln(function () {
      el(t, u, n, r);
    }),
    u
  );
}
function rl(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var u = $o(i);
        s.call(u);
      };
    }
    el(t, i, e, o);
  } else i = C0(n, t, e, o, r);
  return $o(i);
}
Wa = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = qn(t.pendingLanes);
        n !== 0 &&
          (Qi(t, n | 1), Me(t, ne()), !(V & 6) && ((Dn = ne() + 500), Wt()));
      }
      break;
    case 13:
      ln(function () {
        var r = xt(e, 1);
        if (r !== null) {
          var o = Ee();
          nt(r, e, 1, o);
        }
      }),
        Es(e, 1);
  }
};
Gi = function (e) {
  if (e.tag === 13) {
    var t = xt(e, 134217728);
    if (t !== null) {
      var n = Ee();
      nt(t, e, 134217728, n);
    }
    Es(e, 134217728);
  }
};
Qa = function (e) {
  if (e.tag === 13) {
    var t = Ft(e),
      n = xt(e, t);
    if (n !== null) {
      var r = Ee();
      nt(n, e, t, r);
    }
    Es(e, t);
  }
};
Ga = function () {
  return B;
};
Ka = function (e, t) {
  var n = B;
  try {
    return (B = e), t();
  } finally {
    B = n;
  }
};
Xl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Hl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Ko(r);
            if (!o) throw Error(E(90));
            Ea(r), Hl(r, o);
          }
        }
      }
      break;
    case "textarea":
      Pa(e, n);
      break;
    case "select":
      (t = n.value), t != null && En(e, !!n.multiple, t, !1);
  }
};
Ma = ws;
Ia = ln;
var E0 = { usingClientEntryPoint: !1, Events: [Ir, vn, Ko, Ta, Oa, ws] },
  Zn = {
    findFiberByHostInstance: Yt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  N0 = {
    bundleType: Zn.bundleType,
    version: Zn.version,
    rendererPackageName: Zn.rendererPackageName,
    rendererConfig: Zn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: kt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Aa(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Zn.findFiberByHostInstance || k0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var eo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!eo.isDisabled && eo.supportsFiber)
    try {
      (Ho = eo.inject(N0)), (at = eo);
    } catch {}
}
$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = E0;
$e.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ps(t)) throw Error(E(200));
  return S0(e, t, null, n);
};
$e.createRoot = function (e, t) {
  if (!Ps(e)) throw Error(E(299));
  var n = !1,
    r = "",
    o = gf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Cs(e, 1, !1, null, null, n, !1, r, o)),
    (e[wt] = t.current),
    wr(e.nodeType === 8 ? e.parentNode : e),
    new Ns(t)
  );
};
$e.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(E(188))
      : ((e = Object.keys(e).join(",")), Error(E(268, e)));
  return (e = Aa(t)), (e = e === null ? null : e.stateNode), e;
};
$e.flushSync = function (e) {
  return ln(e);
};
$e.hydrate = function (e, t, n) {
  if (!nl(t)) throw Error(E(200));
  return rl(null, e, t, !0, n);
};
$e.hydrateRoot = function (e, t, n) {
  if (!Ps(e)) throw Error(E(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    i = gf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = hf(t, null, e, 1, n ?? null, o, !1, l, i)),
    (e[wt] = t.current),
    wr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new tl(t);
};
$e.render = function (e, t, n) {
  if (!nl(t)) throw Error(E(200));
  return rl(null, e, t, !1, n);
};
$e.unmountComponentAtNode = function (e) {
  if (!nl(e)) throw Error(E(40));
  return e._reactRootContainer
    ? (ln(function () {
        rl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[wt] = null);
        });
      }),
      !0)
    : !1;
};
$e.unstable_batchedUpdates = ws;
$e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!nl(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return rl(e, t, n, !1, r);
};
$e.version = "18.3.1-next-f1338f8080-20240426";
function vf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vf);
    } catch (e) {
      console.error(e);
    }
}
vf(), (ga.exports = $e);
var P0 = ga.exports,
  Xu = P0;
(Dl.createRoot = Xu.createRoot), (Dl.hydrateRoot = Xu.hydrateRoot);
const _0 =
    "data:image/svg+xml,%3csvg%20width='138'%20height='20'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.217%2020c4.761%200%207.519-.753%207.519-4.606%200-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.35-.053c-2.7-.405-3.18-.788-3.18-1.471%200-.478.49-1.331%202.843-1.331%202.455%200%203.493.647%203.493%201.87v.134h4.281v-.133c0-2.389-1.35-5.238-7.774-5.238-5.952%200-7.201%202.584-7.201%204.752%200%203.097%202.763%204.086%207.223%204.675.21.028.433.054.659.081%201.669.197%203.172.42%203.172%201.585%200%201.01-1.615%201.222-3.298%201.222-2.797%200-3.784-.593-3.784-1.92v-.134H.002L0%2014.926v.317c.008.79.118%201.913%201.057%202.862C2.303%2019.362%204.712%2020%208.217%2020Zm13.21%200v-7.49c0-2.104.547-4.423%204.176-4.423%203.915%200%203.778%202.777%203.768%204.042V20h4.18v-7.768c0-2.264-.176-7.766-6.732-7.766-2.778%200-4.192.911-5.195%202.28h-.197V4.467H17.22V20h4.207Zm21.959%200c5.094%200%207.787-2.07%208.217-5.405H47.53c-.386%201.02-1.63%201.72-4.143%201.72-2.721%200-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.056-1.465-5.251-1.465-5.24%200-8.336%202.772-8.336%207.845%200%205.17%203.02%207.846%208.336%207.846Zm4.099-9.574h-8.188c.486-1.574%201.764-2.431%204.089-2.431%202.994%200%203.755%201.267%204.099%202.431ZM70.499%2020V4.457H66.29V6.74h-.176c-1.053-1.377-2.809-2.283-5.677-2.283-6.433%200-7.225%205.293-7.253%207.635v.137c0%202.092.732%207.771%207.241%207.771%202.914%200%204.684-.818%205.734-2.169h.131V20H70.5Zm-8.854-3.623c-3.996%200-4.447-3.032-4.447-4.148%200-1.21.426-4.148%204.455-4.148%203.631%200%204.374%202.044%204.374%204.148%200%202.35-.742%204.148-4.382%204.148ZM88.826%2020l-6.529-9.045%206.588-6.488h-5.827l-6.836%206.756V0h-4.187v19.954h4.187V16.94l3.02-2.976L83.6%2020h5.226Zm9.9%200c5.094%200%207.786-2.07%208.217-5.405h-4.074c-.387%201.02-1.63%201.72-4.143%201.72-2.721%200-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.057-1.465-5.251-1.465-5.24%200-8.336%202.772-8.336%207.845%200%205.17%203.02%207.846%208.336%207.846Zm4.098-9.574h-8.187c.485-1.574%201.763-2.431%204.089-2.431%202.994%200%203.755%201.267%204.098%202.431ZM112.76%2020v-6.97c0-2.103.931-4.542%204.05-4.542%201.33%200%202.393.236%202.785.346l.67-3.976c-.728-.16-1.626-.392-2.757-.392-2.665%200-3.622.794-4.486%202.282h-.262V4.466h-4.21V20h4.21Zm17.221%200c4.761%200%207.519-.753%207.519-4.606%200-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.349-.053c-2.701-.405-3.181-.788-3.181-1.471%200-.478.49-1.331%202.843-1.331%202.455%200%203.493.647%203.493%201.87v.134h4.282v-.133c0-2.389-1.35-5.238-7.775-5.238-5.952%200-7.201%202.584-7.201%204.752%200%203.097%202.763%204.086%207.224%204.675.21.028.432.054.658.081%201.669.197%203.172.42%203.172%201.585%200%201.01-1.615%201.222-3.298%201.222-2.796%200-3.784-.593-3.784-1.92v-.134h-4.319l-.001.301v.317c.008.79.117%201.913%201.056%202.862%201.246%201.257%203.655%201.895%207.16%201.895Z'%20fill='%231D2026'%20fill-rule='nonzero'/%3e%3c/svg%3e",
  z0 =
    "data:image/svg+xml,%3csvg%20width='16'%20height='15'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16%2012v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z'%20fill='%2369707D'%20fill-rule='evenodd'/%3e%3c/svg%3e",
  yf =
    "data:image/svg+xml,%3csvg%20width='22'%20height='20'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20.925%203.641H3.863L3.61.816A.896.896%200%200%200%202.717%200H.897a.896.896%200%201%200%200%201.792h1l1.031%2011.483c.073.828.52%201.726%201.291%202.336C2.83%2017.385%204.099%2020%206.359%2020c1.875%200%203.197-1.87%202.554-3.642h4.905c-.642%201.77.677%203.642%202.555%203.642a2.72%202.72%200%200%200%202.717-2.717%202.72%202.72%200%200%200-2.717-2.717H6.365c-.681%200-1.274-.41-1.53-1.009l14.321-.842a.896.896%200%200%200%20.817-.677l1.821-7.283a.897.897%200%200%200-.87-1.114ZM6.358%2018.208a.926.926%200%200%201%200-1.85.926.926%200%200%201%200%201.85Zm10.015%200a.926.926%200%200%201%200-1.85.926.926%200%200%201%200%201.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383%205.53Z'%20fill='%2369707D'%20fill-rule='nonzero'/%3e%3c/svg%3e",
  j0 = "./assets/image-avatar-DVd-Kri7.png",
  wf =
    "data:image/svg+xml,%3csvg%20width='14'%20height='15'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m11.596.782%202.122%202.122L9.12%207.499l4.597%204.597-2.122%202.122L7%209.62l-4.595%204.597-2.122-2.122L4.878%207.5.282%202.904%202.404.782l4.595%204.596L11.596.782Z'%20fill='%2369707D'%20fill-rule='evenodd'/%3e%3c/svg%3e",
  L0 = "./assets/image-product-1-thumbnail-CUE_C-rn.jpg",
  T0 =
    "data:image/svg+xml,%3csvg%20width='14'%20height='16'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cpath%20d='M0%202.625V1.75C0%201.334.334%201%20.75%201h3.5l.294-.584A.741.741%200%200%201%205.213%200h3.571a.75.75%200%200%201%20.672.416L9.75%201h3.5c.416%200%20.75.334.75.75v.875a.376.376%200%200%201-.375.375H.375A.376.376%200%200%201%200%202.625Zm13%201.75V14.5a1.5%201.5%200%200%201-1.5%201.5h-9A1.5%201.5%200%200%201%201%2014.5V4.375C1%204.169%201.169%204%201.375%204h11.25c.206%200%20.375.169.375.375ZM4.5%206.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0%20.275.225.5.5.5s.5-.225.5-.5v-7Zm3%200c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0%20.275.225.5.5.5s.5-.225.5-.5v-7Zm3%200c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0%20.275.225.5.5.5s.5-.225.5-.5v-7Z'%20id='a'/%3e%3c/defs%3e%3cuse%20fill='%23C3CAD9'%20fill-rule='nonzero'%20xlink:href='%23a'/%3e%3c/svg%3e",
  xf = ({ onClose: e, cartItems: t }) => {
    const n = () => t.reduce((o, l) => o + l.quantity * 125, 0),
      r = () => {};
    return S.jsxs("div", {
      className:
        "fixed  top-[4rem] right-[10%] w-[20rem] bg-white px-5 py-7 rounded-xl shadow-lg ",
      children: [
        S.jsxs("div", {
          className: "flex justify-between items-center mb-2",
          children: [
            S.jsx("h1", { className: "text-lg font-[700]", children: "Cart" }),
            S.jsx("button", {
              className: "text-primary-Orange",
              onClick: e,
              children: "Close",
            }),
          ],
        }),
        S.jsxs("div", {
          className: "flex gap-3 items-center my-7",
          children: [
            S.jsx("img", {
              src: L0,
              alt: "Product",
              className: "object-contain w-12 rounded",
            }),
            S.jsxs("div", {
              children: [
                S.jsx("h1", {
                  className: "text-sm text-Neutral-DarkGrayishBlue",
                  children: "Fall Limited Edition Sneakers",
                }),
                S.jsxs("p", {
                  className: "text-sm text-Neutral-DarkGrayishBlue",
                  children: [
                    "$125.00 x ",
                    t.length,
                    " ",
                    S.jsxs("span", {
                      className: "font-[700] text-Neutral-VeryDarkBlue",
                      children: ["$", n()],
                    }),
                  ],
                }),
              ],
            }),
            S.jsx("img", {
              className: "object-contain w-fit cursor-pointer",
              onClick: r,
              src: T0,
              alt: "clear",
            }),
          ],
        }),
        S.jsx("button", {
          className:
            "bg-primary-Orange gap-3 ] hover:opacity-70 text-white font-[700] justify-center items-center py-3 flex rounded-lg m-auto w-full",
          children: "Checkout",
        }),
      ],
    });
  };
function O0() {
  const [e, t] = L.useState(!1),
    [n, r] = L.useState(!1),
    o = L.useRef(null),
    l = () => {
      t((u) => !u);
    },
    i = () => {
      t(!1);
    };
  L.useEffect(() => {
    const u = (a) => {
      o.current && !o.current.contains(a.target) && i();
    };
    return (
      document.addEventListener("mousedown", u),
      () => {
        document.removeEventListener("mousedown", u);
      }
    );
  }, []);
  const s = () => {
    r((u) => !u);
  };
  return S.jsxs(S.Fragment, {
    children: [
      n &&
        S.jsx(xf, {
          onClose: function () {
            throw new Error("Function not implemented.");
          },
          quantity: 0,
          cartItems: [],
        }),
      S.jsx("div", {
        className: `fixed top-0 left-0 w-full h-full bg-black z-20 ${
          e ? "block" : "hidden"
        } opacity-70`,
      }),
      S.jsxs("div", {
        className:
          "bg-white flex container flex-row justify-between m-auto w-full py-7",
        children: [
          S.jsxs("div", {
            className: "flex gap-4",
            children: [
              S.jsx("img", {
                onClick: l,
                className: "object-none w-fit cursor-pointer lg:hidden",
                src: z0,
                alt: "Menu",
              }),
              S.jsx("img", {
                className: "object-none w-fit",
                src: _0,
                alt: "Logo",
              }),
              S.jsxs("ul", {
                className:
                  "font-[400] hidden   lg:flex text-Neutral-DarkGrayishBlue text-lg m-auto ml-[5rem] gap-8 ",
                children: [
                  S.jsx("li", {
                    children: S.jsx("a", {
                      className:
                        "cursor-pointer hover:border-b-primary-Orange hover:border-b-4 py-7",
                      href: "#",
                      children: "Collection",
                    }),
                  }),
                  S.jsx("li", {
                    children: S.jsx("a", {
                      className:
                        "cursor-pointer hover:border-b-primary-Orange hover:border-b-4 py-7 ",
                      href: "#",
                      children: "Men",
                    }),
                  }),
                  S.jsx("li", {
                    children: S.jsx("a", {
                      className:
                        "cursor-pointer hover:border-b-primary-Orange hover:border-b-4 py-7 ",
                      href: "#",
                      children: "Women",
                    }),
                  }),
                  S.jsx("li", {
                    children: S.jsx("a", {
                      className:
                        "cursor-pointer hover:border-b-primary-Orange hover:border-b-4 py-7 ",
                      href: "#",
                      children: "About",
                    }),
                  }),
                  S.jsx("li", {
                    children: S.jsx("a", {
                      className:
                        "cursor-pointer hover:border-b-primary-Orange hover:border-b-4 py-7 ",
                      href: "#",
                      children: "Contact",
                    }),
                  }),
                ],
              }),
            ],
          }),
          S.jsxs("div", {
            className: "flex gap-4",
            children: [
              S.jsx("img", {
                onClick: s,
                className: "object-none w-fit h-8 cursor-pointer",
                src: yf,
                alt: "Cart",
              }),
              S.jsx("img", {
                className: "object-contain w-fit h-8",
                src: j0,
                alt: "Avatar",
              }),
            ],
          }),
        ],
      }),
      S.jsx("hr", { className: "h-4 w-2/3 mx-auto hidden lg:block" }),
      S.jsxs("div", {
        ref: o,
        className: `fixed top-0 container left-0 h-full bg-white w-2/3 z-30 transition-transform ${
          e ? "transform translate-x-0" : "transform -translate-x-full"
        }`,
        children: [
          S.jsx("div", {
            className: "flex pt-[2rem]",
            children: S.jsx("img", {
              onClick: i,
              className: "cursor-pointer",
              src: wf,
              alt: "close",
            }),
          }),
          S.jsxs("ul", {
            className:
              "font-semibold text-Neutral-VeryDarkBlue text-xl space-y-5 pt-[4rem]",
            children: [
              S.jsx("li", { children: "Collection" }),
              S.jsx("li", { children: "Men" }),
              S.jsx("li", { children: "Women" }),
              S.jsx("li", { children: "About" }),
              S.jsx("li", { children: "Contact" }),
            ],
          }),
        ],
      }),
    ],
  });
}
const M0 = {
  active: !0,
  breakpoints: {},
  delay: 4e3,
  jump: !1,
  playOnInit: !0,
  stopOnFocusIn: !0,
  stopOnInteraction: !0,
  stopOnMouseEnter: !1,
  stopOnLastSnap: !1,
  rootNode: null,
};
function _s(e = {}) {
  let t,
    n,
    r,
    o = !1,
    l = !0,
    i = !1,
    s = 0;
  function u(y, C) {
    n = y;
    const { mergeOptions: P, optionsAtMedia: k } = C,
      N = P(M0, _s.globalOptions),
      M = P(N, e);
    if (((t = k(M)), n.scrollSnapList().length <= 1)) return;
    (i = t.jump), (r = !1);
    const { eventStore: z, ownerDocument: A } = n.internalEngine(),
      R = n.rootNode(),
      re = (t.rootNode && t.rootNode(R)) || R,
      q = n.containerNode();
    n.on("pointerDown", d),
      t.stopOnInteraction || n.on("pointerUp", h),
      t.stopOnMouseEnter &&
        (z.add(re, "mouseenter", () => {
          (l = !1), d();
        }),
        t.stopOnInteraction ||
          z.add(re, "mouseleave", () => {
            (l = !0), h();
          })),
      t.stopOnFocusIn &&
        (z.add(q, "focusin", d),
        t.stopOnInteraction || z.add(q, "focusout", h)),
      z.add(A, "visibilitychange", m),
      t.playOnInit && !w() && h();
  }
  function a() {
    n.off("pointerDown", d).off("pointerUp", h), d(), (r = !0), (o = !1);
  }
  function h() {
    if (r || !l) return;
    o || n.emit("autoplay:play");
    const { ownerWindow: y } = n.internalEngine();
    y.clearInterval(s), (s = y.setInterval(c, t.delay)), (o = !0);
  }
  function d() {
    if (r) return;
    o && n.emit("autoplay:stop");
    const { ownerWindow: y } = n.internalEngine();
    y.clearInterval(s), (s = 0), (o = !1);
  }
  function m() {
    if (w()) return (l = o), d();
    l && h();
  }
  function w() {
    const { ownerDocument: y } = n.internalEngine();
    return y.visibilityState === "hidden";
  }
  function g(y) {
    typeof y < "u" && (i = y), (l = !0), h();
  }
  function v() {
    o && d();
  }
  function x() {
    o && g();
  }
  function f() {
    return o;
  }
  function c() {
    const { index: y } = n.internalEngine(),
      C = y.clone().add(1).get(),
      P = n.scrollSnapList().length - 1;
    t.stopOnLastSnap && C === P && d(),
      n.canScrollNext() ? n.scrollNext(i) : n.scrollTo(0, i);
  }
  return {
    name: "autoplay",
    options: e,
    init: u,
    destroy: a,
    play: g,
    stop: v,
    reset: x,
    isPlaying: f,
  };
}
_s.globalOptions = void 0;
function Sf(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Sf(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function I0() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Sf(e)) && (r && (r += " "), (r += t));
  return r;
}
const zs = "-";
function R0(e) {
  const t = A0(e),
    { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
  function o(i) {
    const s = i.split(zs);
    return s[0] === "" && s.length !== 1 && s.shift(), kf(s, t) || D0(i);
  }
  function l(i, s) {
    const u = n[i] || [];
    return s && r[i] ? [...u, ...r[i]] : u;
  }
  return { getClassGroupId: o, getConflictingClassGroupIds: l };
}
function kf(e, t) {
  var i;
  if (e.length === 0) return t.classGroupId;
  const n = e[0],
    r = t.nextPart.get(n),
    o = r ? kf(e.slice(1), r) : void 0;
  if (o) return o;
  if (t.validators.length === 0) return;
  const l = e.join(zs);
  return (i = t.validators.find(({ validator: s }) => s(l))) == null
    ? void 0
    : i.classGroupId;
}
const Ju = /^\[(.+)\]$/;
function D0(e) {
  if (Ju.test(e)) {
    const t = Ju.exec(e)[1],
      n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n) return "arbitrary.." + n;
  }
}
function A0(e) {
  const { theme: t, prefix: n } = e,
    r = { nextPart: new Map(), validators: [] };
  return (
    $0(Object.entries(e.classGroups), n).forEach(([l, i]) => {
      ji(i, r, l, t);
    }),
    r
  );
}
function ji(e, t, n, r) {
  e.forEach((o) => {
    if (typeof o == "string") {
      const l = o === "" ? t : bu(t, o);
      l.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (F0(o)) {
        ji(o(r), t, n, r);
        return;
      }
      t.validators.push({ validator: o, classGroupId: n });
      return;
    }
    Object.entries(o).forEach(([l, i]) => {
      ji(i, bu(t, l), n, r);
    });
  });
}
function bu(e, t) {
  let n = e;
  return (
    t.split(zs).forEach((r) => {
      n.nextPart.has(r) ||
        n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
        (n = n.nextPart.get(r));
    }),
    n
  );
}
function F0(e) {
  return e.isThemeGetter;
}
function $0(e, t) {
  return t
    ? e.map(([n, r]) => {
        const o = r.map((l) =>
          typeof l == "string"
            ? t + l
            : typeof l == "object"
            ? Object.fromEntries(Object.entries(l).map(([i, s]) => [t + i, s]))
            : l
        );
        return [n, o];
      })
    : e;
}
function V0(e) {
  if (e < 1) return { get: () => {}, set: () => {} };
  let t = 0,
    n = new Map(),
    r = new Map();
  function o(l, i) {
    n.set(l, i), t++, t > e && ((t = 0), (r = n), (n = new Map()));
  }
  return {
    get(l) {
      let i = n.get(l);
      if (i !== void 0) return i;
      if ((i = r.get(l)) !== void 0) return o(l, i), i;
    },
    set(l, i) {
      n.has(l) ? n.set(l, i) : o(l, i);
    },
  };
}
const Cf = "!";
function U0(e) {
  const t = e.separator,
    n = t.length === 1,
    r = t[0],
    o = t.length;
  return function (i) {
    const s = [];
    let u = 0,
      a = 0,
      h;
    for (let v = 0; v < i.length; v++) {
      let x = i[v];
      if (u === 0) {
        if (x === r && (n || i.slice(v, v + o) === t)) {
          s.push(i.slice(a, v)), (a = v + o);
          continue;
        }
        if (x === "/") {
          h = v;
          continue;
        }
      }
      x === "[" ? u++ : x === "]" && u--;
    }
    const d = s.length === 0 ? i : i.substring(a),
      m = d.startsWith(Cf),
      w = m ? d.substring(1) : d,
      g = h && h > a ? h - a : void 0;
    return {
      modifiers: s,
      hasImportantModifier: m,
      baseClassName: w,
      maybePostfixModifierPosition: g,
    };
  };
}
function B0(e) {
  if (e.length <= 1) return e;
  const t = [];
  let n = [];
  return (
    e.forEach((r) => {
      r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
    }),
    t.push(...n.sort()),
    t
  );
}
function H0(e) {
  return { cache: V0(e.cacheSize), splitModifiers: U0(e), ...R0(e) };
}
const W0 = /\s+/;
function Q0(e, t) {
  const {
      splitModifiers: n,
      getClassGroupId: r,
      getConflictingClassGroupIds: o,
    } = t,
    l = new Set();
  return e
    .trim()
    .split(W0)
    .map((i) => {
      const {
        modifiers: s,
        hasImportantModifier: u,
        baseClassName: a,
        maybePostfixModifierPosition: h,
      } = n(i);
      let d = r(h ? a.substring(0, h) : a),
        m = !!h;
      if (!d) {
        if (!h) return { isTailwindClass: !1, originalClassName: i };
        if (((d = r(a)), !d))
          return { isTailwindClass: !1, originalClassName: i };
        m = !1;
      }
      const w = B0(s).join(":");
      return {
        isTailwindClass: !0,
        modifierId: u ? w + Cf : w,
        classGroupId: d,
        originalClassName: i,
        hasPostfixModifier: m,
      };
    })
    .reverse()
    .filter((i) => {
      if (!i.isTailwindClass) return !0;
      const { modifierId: s, classGroupId: u, hasPostfixModifier: a } = i,
        h = s + u;
      return l.has(h)
        ? !1
        : (l.add(h), o(u, a).forEach((d) => l.add(s + d)), !0);
    })
    .reverse()
    .map((i) => i.originalClassName)
    .join(" ");
}
function G0() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Ef(t)) && (r && (r += " "), (r += n));
  return r;
}
function Ef(e) {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Ef(e[r])) && (n && (n += " "), (n += t));
  return n;
}
function K0(e, ...t) {
  let n,
    r,
    o,
    l = i;
  function i(u) {
    const a = t.reduce((h, d) => d(h), e());
    return (n = H0(a)), (r = n.cache.get), (o = n.cache.set), (l = s), s(u);
  }
  function s(u) {
    const a = r(u);
    if (a) return a;
    const h = Q0(u, n);
    return o(u, h), h;
  }
  return function () {
    return l(G0.apply(null, arguments));
  };
}
function Q(e) {
  const t = (n) => n[e] || [];
  return (t.isThemeGetter = !0), t;
}
const Nf = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Z0 = /^\d+\/\d+$/,
  Y0 = new Set(["px", "full", "screen"]),
  X0 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  J0 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  b0 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  q0 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  em =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function dt(e) {
  return bt(e) || Y0.has(e) || Z0.test(e);
}
function Et(e) {
  return Vn(e, "length", um);
}
function bt(e) {
  return !!e && !Number.isNaN(Number(e));
}
function to(e) {
  return Vn(e, "number", bt);
}
function Yn(e) {
  return !!e && Number.isInteger(Number(e));
}
function tm(e) {
  return e.endsWith("%") && bt(e.slice(0, -1));
}
function D(e) {
  return Nf.test(e);
}
function Nt(e) {
  return X0.test(e);
}
const nm = new Set(["length", "size", "percentage"]);
function rm(e) {
  return Vn(e, nm, Pf);
}
function om(e) {
  return Vn(e, "position", Pf);
}
const lm = new Set(["image", "url"]);
function im(e) {
  return Vn(e, lm, cm);
}
function sm(e) {
  return Vn(e, "", am);
}
function Xn() {
  return !0;
}
function Vn(e, t, n) {
  const r = Nf.exec(e);
  return r
    ? r[1]
      ? typeof t == "string"
        ? r[1] === t
        : t.has(r[1])
      : n(r[2])
    : !1;
}
function um(e) {
  return J0.test(e) && !b0.test(e);
}
function Pf() {
  return !1;
}
function am(e) {
  return q0.test(e);
}
function cm(e) {
  return em.test(e);
}
function fm() {
  const e = Q("colors"),
    t = Q("spacing"),
    n = Q("blur"),
    r = Q("brightness"),
    o = Q("borderColor"),
    l = Q("borderRadius"),
    i = Q("borderSpacing"),
    s = Q("borderWidth"),
    u = Q("contrast"),
    a = Q("grayscale"),
    h = Q("hueRotate"),
    d = Q("invert"),
    m = Q("gap"),
    w = Q("gradientColorStops"),
    g = Q("gradientColorStopPositions"),
    v = Q("inset"),
    x = Q("margin"),
    f = Q("opacity"),
    c = Q("padding"),
    p = Q("saturate"),
    y = Q("scale"),
    C = Q("sepia"),
    P = Q("skew"),
    k = Q("space"),
    N = Q("translate"),
    M = () => ["auto", "contain", "none"],
    z = () => ["auto", "hidden", "clip", "visible", "scroll"],
    A = () => ["auto", D, t],
    R = () => [D, t],
    re = () => ["", dt, Et],
    q = () => ["auto", bt, D],
    _e = () => [
      "bottom",
      "center",
      "left",
      "left-bottom",
      "left-top",
      "right",
      "right-bottom",
      "right-top",
      "top",
    ],
    me = () => ["solid", "dashed", "dotted", "double", "none"],
    he = () => [
      "normal",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "color-dodge",
      "color-burn",
      "hard-light",
      "soft-light",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "color",
      "luminosity",
    ],
    _ = () => [
      "start",
      "end",
      "center",
      "between",
      "around",
      "evenly",
      "stretch",
    ],
    T = () => ["", "0", D],
    I = () => [
      "auto",
      "avoid",
      "all",
      "avoid-page",
      "page",
      "left",
      "right",
      "column",
    ],
    F = () => [bt, to],
    U = () => [bt, D];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Xn],
      spacing: [dt, Et],
      blur: ["none", "", Nt, D],
      brightness: F(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Nt, D],
      borderSpacing: R(),
      borderWidth: re(),
      contrast: F(),
      grayscale: T(),
      hueRotate: U(),
      invert: T(),
      gap: R(),
      gradientColorStops: [e],
      gradientColorStopPositions: [tm, Et],
      inset: A(),
      margin: A(),
      opacity: F(),
      padding: R(),
      saturate: F(),
      scale: F(),
      sepia: T(),
      skew: U(),
      space: R(),
      translate: R(),
    },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", D] }],
      container: ["container"],
      columns: [{ columns: [Nt] }],
      "break-after": [{ "break-after": I() }],
      "break-before": [{ "break-before": I() }],
      "break-inside": [
        { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
      ],
      "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
      box: [{ box: ["border", "content"] }],
      display: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden",
      ],
      float: [{ float: ["right", "left", "none", "start", "end"] }],
      clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [
        { object: ["contain", "cover", "fill", "none", "scale-down"] },
      ],
      "object-position": [{ object: [..._e(), D] }],
      overflow: [{ overflow: z() }],
      "overflow-x": [{ "overflow-x": z() }],
      "overflow-y": [{ "overflow-y": z() }],
      overscroll: [{ overscroll: M() }],
      "overscroll-x": [{ "overscroll-x": M() }],
      "overscroll-y": [{ "overscroll-y": M() }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [v] }],
      "inset-x": [{ "inset-x": [v] }],
      "inset-y": [{ "inset-y": [v] }],
      start: [{ start: [v] }],
      end: [{ end: [v] }],
      top: [{ top: [v] }],
      right: [{ right: [v] }],
      bottom: [{ bottom: [v] }],
      left: [{ left: [v] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: ["auto", Yn, D] }],
      basis: [{ basis: A() }],
      "flex-direction": [
        { flex: ["row", "row-reverse", "col", "col-reverse"] },
      ],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", D] }],
      grow: [{ grow: T() }],
      shrink: [{ shrink: T() }],
      order: [{ order: ["first", "last", "none", Yn, D] }],
      "grid-cols": [{ "grid-cols": [Xn] }],
      "col-start-end": [{ col: ["auto", { span: ["full", Yn, D] }, D] }],
      "col-start": [{ "col-start": q() }],
      "col-end": [{ "col-end": q() }],
      "grid-rows": [{ "grid-rows": [Xn] }],
      "row-start-end": [{ row: ["auto", { span: [Yn, D] }, D] }],
      "row-start": [{ "row-start": q() }],
      "row-end": [{ "row-end": q() }],
      "grid-flow": [
        { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
      ],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", D] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", D] }],
      gap: [{ gap: [m] }],
      "gap-x": [{ "gap-x": [m] }],
      "gap-y": [{ "gap-y": [m] }],
      "justify-content": [{ justify: ["normal", ..._()] }],
      "justify-items": [
        { "justify-items": ["start", "end", "center", "stretch"] },
      ],
      "justify-self": [
        { "justify-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      "align-content": [{ content: ["normal", ..._(), "baseline"] }],
      "align-items": [
        { items: ["start", "end", "center", "baseline", "stretch"] },
      ],
      "align-self": [
        { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
      ],
      "place-content": [{ "place-content": [..._(), "baseline"] }],
      "place-items": [
        { "place-items": ["start", "end", "center", "baseline", "stretch"] },
      ],
      "place-self": [
        { "place-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      p: [{ p: [c] }],
      px: [{ px: [c] }],
      py: [{ py: [c] }],
      ps: [{ ps: [c] }],
      pe: [{ pe: [c] }],
      pt: [{ pt: [c] }],
      pr: [{ pr: [c] }],
      pb: [{ pb: [c] }],
      pl: [{ pl: [c] }],
      m: [{ m: [x] }],
      mx: [{ mx: [x] }],
      my: [{ my: [x] }],
      ms: [{ ms: [x] }],
      me: [{ me: [x] }],
      mt: [{ mt: [x] }],
      mr: [{ mr: [x] }],
      mb: [{ mb: [x] }],
      ml: [{ ml: [x] }],
      "space-x": [{ "space-x": [k] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [k] }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", D, t] }],
      "min-w": [{ "min-w": [D, t, "min", "max", "fit"] }],
      "max-w": [
        {
          "max-w": [
            D,
            t,
            "none",
            "full",
            "min",
            "max",
            "fit",
            "prose",
            { screen: [Nt] },
            Nt,
          ],
        },
      ],
      h: [{ h: [D, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "min-h": [{ "min-h": [D, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "max-h": [{ "max-h": [D, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      size: [{ size: [D, t, "auto", "min", "max", "fit"] }],
      "font-size": [{ text: ["base", Nt, Et] }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [
        {
          font: [
            "thin",
            "extralight",
            "light",
            "normal",
            "medium",
            "semibold",
            "bold",
            "extrabold",
            "black",
            to,
          ],
        },
      ],
      "font-family": [{ font: [Xn] }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [
        {
          tracking: [
            "tighter",
            "tight",
            "normal",
            "wide",
            "wider",
            "widest",
            D,
          ],
        },
      ],
      "line-clamp": [{ "line-clamp": ["none", bt, to] }],
      leading: [
        {
          leading: [
            "none",
            "tight",
            "snug",
            "normal",
            "relaxed",
            "loose",
            dt,
            D,
          ],
        },
      ],
      "list-image": [{ "list-image": ["none", D] }],
      "list-style-type": [{ list: ["none", "disc", "decimal", D] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [e] }],
      "placeholder-opacity": [{ "placeholder-opacity": [f] }],
      "text-alignment": [
        { text: ["left", "center", "right", "justify", "start", "end"] },
      ],
      "text-color": [{ text: [e] }],
      "text-opacity": [{ "text-opacity": [f] }],
      "text-decoration": [
        "underline",
        "overline",
        "line-through",
        "no-underline",
      ],
      "text-decoration-style": [{ decoration: [...me(), "wavy"] }],
      "text-decoration-thickness": [
        { decoration: ["auto", "from-font", dt, Et] },
      ],
      "underline-offset": [{ "underline-offset": ["auto", dt, D] }],
      "text-decoration-color": [{ decoration: [e] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
      indent: [{ indent: R() }],
      "vertical-align": [
        {
          align: [
            "baseline",
            "top",
            "middle",
            "bottom",
            "text-top",
            "text-bottom",
            "sub",
            "super",
            D,
          ],
        },
      ],
      whitespace: [
        {
          whitespace: [
            "normal",
            "nowrap",
            "pre",
            "pre-line",
            "pre-wrap",
            "break-spaces",
          ],
        },
      ],
      break: [{ break: ["normal", "words", "all", "keep"] }],
      hyphens: [{ hyphens: ["none", "manual", "auto"] }],
      content: [{ content: ["none", D] }],
      "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
      "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
      "bg-opacity": [{ "bg-opacity": [f] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [{ bg: [..._e(), om] }],
      "bg-repeat": [
        { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
      ],
      "bg-size": [{ bg: ["auto", "cover", "contain", rm] }],
      "bg-image": [
        {
          bg: [
            "none",
            { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
            im,
          ],
        },
      ],
      "bg-color": [{ bg: [e] }],
      "gradient-from-pos": [{ from: [g] }],
      "gradient-via-pos": [{ via: [g] }],
      "gradient-to-pos": [{ to: [g] }],
      "gradient-from": [{ from: [w] }],
      "gradient-via": [{ via: [w] }],
      "gradient-to": [{ to: [w] }],
      rounded: [{ rounded: [l] }],
      "rounded-s": [{ "rounded-s": [l] }],
      "rounded-e": [{ "rounded-e": [l] }],
      "rounded-t": [{ "rounded-t": [l] }],
      "rounded-r": [{ "rounded-r": [l] }],
      "rounded-b": [{ "rounded-b": [l] }],
      "rounded-l": [{ "rounded-l": [l] }],
      "rounded-ss": [{ "rounded-ss": [l] }],
      "rounded-se": [{ "rounded-se": [l] }],
      "rounded-ee": [{ "rounded-ee": [l] }],
      "rounded-es": [{ "rounded-es": [l] }],
      "rounded-tl": [{ "rounded-tl": [l] }],
      "rounded-tr": [{ "rounded-tr": [l] }],
      "rounded-br": [{ "rounded-br": [l] }],
      "rounded-bl": [{ "rounded-bl": [l] }],
      "border-w": [{ border: [s] }],
      "border-w-x": [{ "border-x": [s] }],
      "border-w-y": [{ "border-y": [s] }],
      "border-w-s": [{ "border-s": [s] }],
      "border-w-e": [{ "border-e": [s] }],
      "border-w-t": [{ "border-t": [s] }],
      "border-w-r": [{ "border-r": [s] }],
      "border-w-b": [{ "border-b": [s] }],
      "border-w-l": [{ "border-l": [s] }],
      "border-opacity": [{ "border-opacity": [f] }],
      "border-style": [{ border: [...me(), "hidden"] }],
      "divide-x": [{ "divide-x": [s] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [s] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [f] }],
      "divide-style": [{ divide: me() }],
      "border-color": [{ border: [o] }],
      "border-color-x": [{ "border-x": [o] }],
      "border-color-y": [{ "border-y": [o] }],
      "border-color-t": [{ "border-t": [o] }],
      "border-color-r": [{ "border-r": [o] }],
      "border-color-b": [{ "border-b": [o] }],
      "border-color-l": [{ "border-l": [o] }],
      "divide-color": [{ divide: [o] }],
      "outline-style": [{ outline: ["", ...me()] }],
      "outline-offset": [{ "outline-offset": [dt, D] }],
      "outline-w": [{ outline: [dt, Et] }],
      "outline-color": [{ outline: [e] }],
      "ring-w": [{ ring: re() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [e] }],
      "ring-opacity": [{ "ring-opacity": [f] }],
      "ring-offset-w": [{ "ring-offset": [dt, Et] }],
      "ring-offset-color": [{ "ring-offset": [e] }],
      shadow: [{ shadow: ["", "inner", "none", Nt, sm] }],
      "shadow-color": [{ shadow: [Xn] }],
      opacity: [{ opacity: [f] }],
      "mix-blend": [{ "mix-blend": [...he(), "plus-lighter", "plus-darker"] }],
      "bg-blend": [{ "bg-blend": he() }],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [n] }],
      brightness: [{ brightness: [r] }],
      contrast: [{ contrast: [u] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", Nt, D] }],
      grayscale: [{ grayscale: [a] }],
      "hue-rotate": [{ "hue-rotate": [h] }],
      invert: [{ invert: [d] }],
      saturate: [{ saturate: [p] }],
      sepia: [{ sepia: [C] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [n] }],
      "backdrop-brightness": [{ "backdrop-brightness": [r] }],
      "backdrop-contrast": [{ "backdrop-contrast": [u] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [a] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [h] }],
      "backdrop-invert": [{ "backdrop-invert": [d] }],
      "backdrop-opacity": [{ "backdrop-opacity": [f] }],
      "backdrop-saturate": [{ "backdrop-saturate": [p] }],
      "backdrop-sepia": [{ "backdrop-sepia": [C] }],
      "border-collapse": [{ border: ["collapse", "separate"] }],
      "border-spacing": [{ "border-spacing": [i] }],
      "border-spacing-x": [{ "border-spacing-x": [i] }],
      "border-spacing-y": [{ "border-spacing-y": [i] }],
      "table-layout": [{ table: ["auto", "fixed"] }],
      caption: [{ caption: ["top", "bottom"] }],
      transition: [
        {
          transition: [
            "none",
            "all",
            "",
            "colors",
            "opacity",
            "shadow",
            "transform",
            D,
          ],
        },
      ],
      duration: [{ duration: U() }],
      ease: [{ ease: ["linear", "in", "out", "in-out", D] }],
      delay: [{ delay: U() }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", D] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [y] }],
      "scale-x": [{ "scale-x": [y] }],
      "scale-y": [{ "scale-y": [y] }],
      rotate: [{ rotate: [Yn, D] }],
      "translate-x": [{ "translate-x": [N] }],
      "translate-y": [{ "translate-y": [N] }],
      "skew-x": [{ "skew-x": [P] }],
      "skew-y": [{ "skew-y": [P] }],
      "transform-origin": [
        {
          origin: [
            "center",
            "top",
            "top-right",
            "right",
            "bottom-right",
            "bottom",
            "bottom-left",
            "left",
            "top-left",
            D,
          ],
        },
      ],
      accent: [{ accent: ["auto", e] }],
      appearance: [{ appearance: ["none", "auto"] }],
      cursor: [
        {
          cursor: [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "nw-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "nwse-resize",
            "zoom-in",
            "zoom-out",
            D,
          ],
        },
      ],
      "caret-color": [{ caret: [e] }],
      "pointer-events": [{ "pointer-events": ["none", "auto"] }],
      resize: [{ resize: ["none", "y", "x", ""] }],
      "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
      "scroll-m": [{ "scroll-m": R() }],
      "scroll-mx": [{ "scroll-mx": R() }],
      "scroll-my": [{ "scroll-my": R() }],
      "scroll-ms": [{ "scroll-ms": R() }],
      "scroll-me": [{ "scroll-me": R() }],
      "scroll-mt": [{ "scroll-mt": R() }],
      "scroll-mr": [{ "scroll-mr": R() }],
      "scroll-mb": [{ "scroll-mb": R() }],
      "scroll-ml": [{ "scroll-ml": R() }],
      "scroll-p": [{ "scroll-p": R() }],
      "scroll-px": [{ "scroll-px": R() }],
      "scroll-py": [{ "scroll-py": R() }],
      "scroll-ps": [{ "scroll-ps": R() }],
      "scroll-pe": [{ "scroll-pe": R() }],
      "scroll-pt": [{ "scroll-pt": R() }],
      "scroll-pr": [{ "scroll-pr": R() }],
      "scroll-pb": [{ "scroll-pb": R() }],
      "scroll-pl": [{ "scroll-pl": R() }],
      "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
      "snap-stop": [{ snap: ["normal", "always"] }],
      "snap-type": [{ snap: ["none", "x", "y", "both"] }],
      "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
      touch: [{ touch: ["auto", "none", "manipulation"] }],
      "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
      "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
      "touch-pz": ["touch-pinch-zoom"],
      select: [{ select: ["none", "text", "all", "auto"] }],
      "will-change": [
        { "will-change": ["auto", "scroll", "contents", "transform", D] },
      ],
      fill: [{ fill: [e, "none"] }],
      "stroke-w": [{ stroke: [dt, Et, to] }],
      stroke: [{ stroke: [e, "none"] }],
      sr: ["sr-only", "not-sr-only"],
      "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: [
        "inset-x",
        "inset-y",
        "start",
        "end",
        "top",
        "right",
        "bottom",
        "left",
      ],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": [
        "fvn-ordinal",
        "fvn-slashed-zero",
        "fvn-figure",
        "fvn-spacing",
        "fvn-fraction",
      ],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: [
        "rounded-s",
        "rounded-e",
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-ss",
        "rounded-se",
        "rounded-ee",
        "rounded-es",
        "rounded-tl",
        "rounded-tr",
        "rounded-br",
        "rounded-bl",
      ],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": [
        "border-w-s",
        "border-w-e",
        "border-w-t",
        "border-w-r",
        "border-w-b",
        "border-w-l",
      ],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": [
        "border-color-t",
        "border-color-r",
        "border-color-b",
        "border-color-l",
      ],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": [
        "scroll-mx",
        "scroll-my",
        "scroll-ms",
        "scroll-me",
        "scroll-mt",
        "scroll-mr",
        "scroll-mb",
        "scroll-ml",
      ],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": [
        "scroll-px",
        "scroll-py",
        "scroll-ps",
        "scroll-pe",
        "scroll-pt",
        "scroll-pr",
        "scroll-pb",
        "scroll-pl",
      ],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"],
    },
    conflictingClassGroupModifiers: { "font-size": ["leading"] },
  };
}
const dm = K0(fm);
function Ke(...e) {
  return dm(I0(e));
}
const pm = L.forwardRef(({ className: e, ...t }, n) =>
  S.jsx("div", {
    ref: n,
    className: Ke(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t,
  })
);
pm.displayName = "Card";
const mm = L.forwardRef(({ className: e, ...t }, n) =>
  S.jsx("div", {
    ref: n,
    className: Ke("flex flex-col space-y-1.5 p-6", e),
    ...t,
  })
);
mm.displayName = "CardHeader";
const hm = L.forwardRef(({ className: e, ...t }, n) =>
  S.jsx("h3", {
    ref: n,
    className: Ke("text-2xl font-semibold leading-none tracking-tight", e),
    ...t,
  })
);
hm.displayName = "CardTitle";
const gm = L.forwardRef(({ className: e, ...t }, n) =>
  S.jsx("p", {
    ref: n,
    className: Ke("text-sm text-muted-foreground", e),
    ...t,
  })
);
gm.displayName = "CardDescription";
const _f = L.forwardRef(({ className: e, ...t }, n) =>
  S.jsx("div", { ref: n, className: Ke("p-6 pt-0", e), ...t })
);
_f.displayName = "CardContent";
const vm = L.forwardRef(({ className: e, ...t }, n) =>
  S.jsx("div", { ref: n, className: Ke("flex items-center p-6 pt-0", e), ...t })
);
vm.displayName = "CardFooter";
function ym(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function qu(e) {
  return ym(e) || Array.isArray(e);
}
function wm() {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
}
function js(e, t) {
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})),
    l = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== l
    ? !1
    : n.every((i) => {
        const s = e[i],
          u = t[i];
        return typeof s == "function"
          ? `${s}` == `${u}`
          : !qu(s) || !qu(u)
          ? s === u
          : js(s, u);
      });
}
function ea(e) {
  return e
    .concat()
    .sort((t, n) => (t.name > n.name ? 1 : -1))
    .map((t) => t.options);
}
function xm(e, t) {
  if (e.length !== t.length) return !1;
  const n = ea(e),
    r = ea(t);
  return n.every((o, l) => {
    const i = r[l];
    return js(o, i);
  });
}
function Ls(e) {
  return typeof e == "number";
}
function Li(e) {
  return typeof e == "string";
}
function Ts(e) {
  return typeof e == "boolean";
}
function ta(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Y(e) {
  return Math.abs(e);
}
function Os(e) {
  return Math.sign(e);
}
function cr(e, t) {
  return Y(e - t);
}
function Sm(e, t) {
  if (e === 0 || t === 0 || Y(e) <= Y(t)) return 0;
  const n = cr(Y(e), Y(t));
  return Y(n / e);
}
function zr(e) {
  return jr(e).map(Number);
}
function rt(e) {
  return e[Dr(e)];
}
function Dr(e) {
  return Math.max(0, e.length - 1);
}
function Ms(e, t) {
  return t === Dr(e);
}
function na(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function jr(e) {
  return Object.keys(e);
}
function zf(e, t) {
  return [e, t].reduce(
    (n, r) => (
      jr(r).forEach((o) => {
        const l = n[o],
          i = r[o],
          s = ta(l) && ta(i);
        n[o] = s ? zf(l, i) : i;
      }),
      n
    ),
    {}
  );
}
function Ti(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function km(e, t) {
  const n = { start: r, center: o, end: l };
  function r() {
    return 0;
  }
  function o(u) {
    return l(u) / 2;
  }
  function l(u) {
    return t - u;
  }
  function i(u, a) {
    return Li(e) ? n[e](u) : e(t, u, a);
  }
  return { measure: i };
}
function Lr() {
  let e = [];
  function t(o, l, i, s = { passive: !0 }) {
    let u;
    if ("addEventListener" in o)
      o.addEventListener(l, i, s), (u = () => o.removeEventListener(l, i, s));
    else {
      const a = o;
      a.addListener(i), (u = () => a.removeListener(i));
    }
    return e.push(u), r;
  }
  function n() {
    e = e.filter((o) => o());
  }
  const r = { add: t, clear: n };
  return r;
}
function Cm(e, t, n, r) {
  const o = Lr(),
    l = 1e3 / 60;
  let i = null,
    s = 0,
    u = 0;
  function a() {
    o.add(e, "visibilitychange", () => {
      e.hidden && g();
    });
  }
  function h() {
    w(), o.clear();
  }
  function d(x) {
    if (!u) return;
    i || (i = x);
    const f = x - i;
    for (i = x, s += f; s >= l; ) n(), (s -= l);
    const c = Y(s / l);
    r(c), u && t.requestAnimationFrame(d);
  }
  function m() {
    u || (u = t.requestAnimationFrame(d));
  }
  function w() {
    t.cancelAnimationFrame(u), (i = null), (s = 0), (u = 0);
  }
  function g() {
    (i = null), (s = 0);
  }
  return { init: a, destroy: h, start: m, stop: w, update: n, render: r };
}
function Em(e, t) {
  const n = t === "rtl",
    r = e === "y",
    o = r ? "y" : "x",
    l = r ? "x" : "y",
    i = !r && n ? -1 : 1,
    s = h(),
    u = d();
  function a(g) {
    const { height: v, width: x } = g;
    return r ? v : x;
  }
  function h() {
    return r ? "top" : n ? "right" : "left";
  }
  function d() {
    return r ? "bottom" : n ? "left" : "right";
  }
  function m(g) {
    return g * i;
  }
  return {
    scroll: o,
    cross: l,
    startEdge: s,
    endEdge: u,
    measureSize: a,
    direction: m,
  };
}
function sn(e = 0, t = 0) {
  const n = Y(e - t);
  function r(a) {
    return a < e;
  }
  function o(a) {
    return a > t;
  }
  function l(a) {
    return r(a) || o(a);
  }
  function i(a) {
    return l(a) ? (r(a) ? e : t) : a;
  }
  function s(a) {
    return n ? a - n * Math.ceil((a - t) / n) : a;
  }
  return {
    length: n,
    max: t,
    min: e,
    constrain: i,
    reachedAny: l,
    reachedMax: o,
    reachedMin: r,
    removeOffset: s,
  };
}
function jf(e, t, n) {
  const { constrain: r } = sn(0, e),
    o = e + 1;
  let l = i(t);
  function i(m) {
    return n ? Y((o + m) % o) : r(m);
  }
  function s() {
    return l;
  }
  function u(m) {
    return (l = i(m)), d;
  }
  function a(m) {
    return h().set(s() + m);
  }
  function h() {
    return jf(e, s(), n);
  }
  const d = { get: s, set: u, add: a, clone: h };
  return d;
}
function Nm(e, t, n, r, o, l, i, s, u, a, h, d, m, w, g, v, x, f, c) {
  const { cross: p, direction: y } = e,
    C = ["INPUT", "SELECT", "TEXTAREA"],
    P = { passive: !1 },
    k = Lr(),
    N = Lr(),
    M = sn(50, 225).constrain(w.measure(20)),
    z = { mouse: 300, touch: 400 },
    A = { mouse: 500, touch: 600 },
    R = g ? 43 : 25;
  let re = !1,
    q = 0,
    _e = 0,
    me = !1,
    he = !1,
    _ = !1,
    T = !1;
  function I(O) {
    if (!c) return;
    function H(ge) {
      (Ts(c) || c(O, ge)) && oe(ge);
    }
    const ie = t;
    k.add(ie, "dragstart", (ge) => ge.preventDefault(), P)
      .add(ie, "touchmove", () => {}, P)
      .add(ie, "touchend", () => {})
      .add(ie, "touchstart", H)
      .add(ie, "mousedown", H)
      .add(ie, "touchcancel", ke)
      .add(ie, "contextmenu", ke)
      .add(ie, "click", cn, !0);
  }
  function F() {
    k.clear(), N.clear();
  }
  function U() {
    const O = T ? n : t;
    N.add(O, "touchmove", Se, P)
      .add(O, "touchend", ke)
      .add(O, "mousemove", Se, P)
      .add(O, "mouseup", ke);
  }
  function ze(O) {
    const H = O.nodeName || "";
    return C.includes(H);
  }
  function Ie() {
    return (g ? A : z)[T ? "mouse" : "touch"];
  }
  function ft(O, H) {
    const ie = d.add(Os(O) * -1),
      ge = h.byDistance(O, !g).distance;
    return g || Y(O) < M
      ? ge
      : x && H
      ? ge * 0.5
      : h.byIndex(ie.get(), 0).distance;
  }
  function oe(O) {
    const H = Ti(O, r);
    (T = H),
      (_ = g && H && !O.buttons && re),
      (re = cr(o.get(), i.get()) >= 2),
      !(H && O.button !== 0) &&
        (ze(O.target) ||
          ((me = !0),
          l.pointerDown(O),
          a.useFriction(0).useDuration(0),
          o.set(i),
          U(),
          (q = l.readPoint(O)),
          (_e = l.readPoint(O, p)),
          m.emit("pointerDown")));
  }
  function Se(O) {
    if (!Ti(O, r) && O.touches.length >= 2) return ke(O);
    const ie = l.readPoint(O),
      ge = l.readPoint(O, p),
      lt = cr(ie, q),
      Ye = cr(ge, _e);
    if (!he && !T && (!O.cancelable || ((he = lt > Ye), !he))) return ke(O);
    const Xe = l.pointerMove(O);
    lt > v && (_ = !0),
      a.useFriction(0.3).useDuration(1),
      s.start(),
      o.add(y(Xe)),
      O.preventDefault();
  }
  function ke(O) {
    const ie = h.byDistance(0, !1).index !== d.get(),
      ge = l.pointerUp(O) * Ie(),
      lt = ft(y(ge), ie),
      Ye = Sm(ge, lt),
      Xe = R - 10 * Ye,
      Qt = f + Ye / 50;
    (he = !1),
      (me = !1),
      N.clear(),
      a.useDuration(Xe).useFriction(Qt),
      u.distance(lt, !g),
      (T = !1),
      m.emit("pointerUp");
  }
  function cn(O) {
    _ && (O.stopPropagation(), O.preventDefault(), (_ = !1));
  }
  function Ze() {
    return me;
  }
  return { init: I, pointerDown: Ze, destroy: F };
}
function Pm(e, t) {
  let r, o;
  function l(d) {
    return d.timeStamp;
  }
  function i(d, m) {
    const g = `client${(m || e.scroll) === "x" ? "X" : "Y"}`;
    return (Ti(d, t) ? d : d.touches[0])[g];
  }
  function s(d) {
    return (r = d), (o = d), i(d);
  }
  function u(d) {
    const m = i(d) - i(o),
      w = l(d) - l(r) > 170;
    return (o = d), w && (r = d), m;
  }
  function a(d) {
    if (!r || !o) return 0;
    const m = i(o) - i(r),
      w = l(d) - l(r),
      g = l(d) - l(o) > 170,
      v = m / w;
    return w && !g && Y(v) > 0.1 ? v : 0;
  }
  return { pointerDown: s, pointerMove: u, pointerUp: a, readPoint: i };
}
function _m() {
  function e(n) {
    const { offsetTop: r, offsetLeft: o, offsetWidth: l, offsetHeight: i } = n;
    return {
      top: r,
      right: o + l,
      bottom: r + i,
      left: o,
      width: l,
      height: i,
    };
  }
  return { measure: e };
}
function zm(e) {
  function t(r) {
    return e * (r / 100);
  }
  return { measure: t };
}
function jm(e, t, n, r, o, l, i) {
  let s,
    u,
    a = [],
    h = !1;
  function d(v) {
    return o.measureSize(i.measure(v));
  }
  function m(v) {
    if (!l) return;
    (u = d(e)), (a = r.map(d));
    function x(c) {
      for (const p of c) {
        const y = p.target === e,
          C = r.indexOf(p.target),
          P = y ? u : a[C],
          k = d(y ? e : r[C]);
        if (Y(k - P) >= 0.5) {
          n.requestAnimationFrame(() => {
            v.reInit(), t.emit("resize");
          });
          break;
        }
      }
    }
    (s = new ResizeObserver((c) => {
      h || ((Ts(l) || l(v, c)) && x(c));
    })),
      [e].concat(r).forEach((c) => s.observe(c));
  }
  function w() {
    s && s.disconnect(), (h = !0);
  }
  return { init: m, destroy: w };
}
function Lm(e, t, n, r, o) {
  let l = 0,
    i = 0,
    s = r,
    u = o,
    a = e.get(),
    h = 0;
  function d() {
    const C = n.get() - e.get(),
      P = !s;
    let k = 0;
    return (
      P
        ? ((l = 0), e.set(n), (k = C))
        : ((l += C / s), (l *= u), (a += l), e.add(l), (k = a - h)),
      (i = Os(k)),
      (h = a),
      y
    );
  }
  function m() {
    const C = n.get() - t.get();
    return Y(C) < 0.001;
  }
  function w() {
    return s;
  }
  function g() {
    return i;
  }
  function v() {
    return l;
  }
  function x() {
    return c(r);
  }
  function f() {
    return p(o);
  }
  function c(C) {
    return (s = C), y;
  }
  function p(C) {
    return (u = C), y;
  }
  const y = {
    direction: g,
    duration: w,
    velocity: v,
    seek: d,
    settled: m,
    useBaseFriction: f,
    useBaseDuration: x,
    useFriction: p,
    useDuration: c,
  };
  return y;
}
function Tm(e, t, n, r, o) {
  const l = o.measure(10),
    i = o.measure(50),
    s = sn(0.1, 0.99);
  let u = !1;
  function a() {
    return !(u || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function h(w) {
    if (!a()) return;
    const g = e.reachedMin(t.get()) ? "min" : "max",
      v = Y(e[g] - t.get()),
      x = n.get() - t.get(),
      f = s.constrain(v / i);
    n.subtract(x * f),
      !w &&
        Y(x) < l &&
        (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function d(w) {
    u = !w;
  }
  return { constrain: h, toggleActive: d };
}
function Om(e, t, n, r, o) {
  const l = sn(-t + e, 0),
    i = d(),
    s = h(),
    u = m();
  function a(g, v) {
    return cr(g, v) < 1;
  }
  function h() {
    const g = i[0],
      v = rt(i),
      x = i.lastIndexOf(g),
      f = i.indexOf(v) + 1;
    return sn(x, f);
  }
  function d() {
    return n
      .map((g, v) => {
        const { min: x, max: f } = l,
          c = l.constrain(g),
          p = !v,
          y = Ms(n, v);
        return p ? f : y || a(x, c) ? x : a(f, c) ? f : c;
      })
      .map((g) => parseFloat(g.toFixed(3)));
  }
  function m() {
    if (t <= e + o) return [l.max];
    if (r === "keepSnaps") return i;
    const { min: g, max: v } = s;
    return i.slice(g, v);
  }
  return { snapsContained: u, scrollContainLimit: s };
}
function Mm(e, t, n) {
  const r = t[0],
    o = n ? r - e : rt(t);
  return { limit: sn(o, r) };
}
function Im(e, t, n, r) {
  const l = t.min + 0.1,
    i = t.max + 0.1,
    { reachedMin: s, reachedMax: u } = sn(l, i);
  function a(m) {
    return m === 1 ? u(n.get()) : m === -1 ? s(n.get()) : !1;
  }
  function h(m) {
    if (!a(m)) return;
    const w = e * (m * -1);
    r.forEach((g) => g.add(w));
  }
  return { loop: h };
}
function Rm(e) {
  const { max: t, length: n } = e;
  function r(l) {
    const i = l - t;
    return n ? i / -n : 0;
  }
  return { get: r };
}
function Dm(e, t, n, r, o) {
  const { startEdge: l, endEdge: i } = e,
    { groupSlides: s } = o,
    u = d().map(t.measure),
    a = m(),
    h = w();
  function d() {
    return s(r)
      .map((v) => rt(v)[i] - v[0][l])
      .map(Y);
  }
  function m() {
    return r.map((v) => n[l] - v[l]).map((v) => -Y(v));
  }
  function w() {
    return s(a)
      .map((v) => v[0])
      .map((v, x) => v + u[x]);
  }
  return { snaps: a, snapsAligned: h };
}
function Am(e, t, n, r, o, l) {
  const { groupSlides: i } = o,
    { min: s, max: u } = r,
    a = h();
  function h() {
    const m = i(l),
      w = !e || t === "keepSnaps";
    return n.length === 1
      ? [l]
      : w
      ? m
      : m.slice(s, u).map((g, v, x) => {
          const f = !v,
            c = Ms(x, v);
          if (f) {
            const p = rt(x[0]) + 1;
            return na(p);
          }
          if (c) {
            const p = Dr(l) - rt(x)[0] + 1;
            return na(p, rt(x)[0]);
          }
          return g;
        });
  }
  return { slideRegistry: a };
}
function Fm(e, t, n, r, o) {
  const { reachedAny: l, removeOffset: i, constrain: s } = r;
  function u(g) {
    return g.concat().sort((v, x) => Y(v) - Y(x))[0];
  }
  function a(g) {
    const v = e ? i(g) : s(g),
      x = t
        .map((c, p) => ({ diff: h(c - v, 0), index: p }))
        .sort((c, p) => Y(c.diff) - Y(p.diff)),
      { index: f } = x[0];
    return { index: f, distance: v };
  }
  function h(g, v) {
    const x = [g, g + n, g - n];
    if (!e) return x[0];
    if (!v) return u(x);
    const f = x.filter((c) => Os(c) === v);
    return f.length ? u(f) : rt(x) - n;
  }
  function d(g, v) {
    const x = t[g] - o.get(),
      f = h(x, v);
    return { index: g, distance: f };
  }
  function m(g, v) {
    const x = o.get() + g,
      { index: f, distance: c } = a(x),
      p = !e && l(x);
    if (!v || p) return { index: f, distance: g };
    const y = t[f] - c,
      C = g + h(y, 0);
    return { index: f, distance: C };
  }
  return { byDistance: m, byIndex: d, shortcut: h };
}
function $m(e, t, n, r, o, l, i) {
  function s(d) {
    const m = d.distance,
      w = d.index !== t.get();
    l.add(m),
      m && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())),
      w && (n.set(t.get()), t.set(d.index), i.emit("select"));
  }
  function u(d, m) {
    const w = o.byDistance(d, m);
    s(w);
  }
  function a(d, m) {
    const w = t.clone().set(d),
      g = o.byIndex(w.get(), m);
    s(g);
  }
  return { distance: u, index: a };
}
function Vm(e, t, n, r, o, l) {
  let i = 0;
  function s() {
    l.add(document, "keydown", u, !1), t.forEach(a);
  }
  function u(d) {
    d.code === "Tab" && (i = new Date().getTime());
  }
  function a(d) {
    const m = () => {
      if (new Date().getTime() - i > 10) return;
      e.scrollLeft = 0;
      const v = t.indexOf(d),
        x = n.findIndex((f) => f.includes(v));
      Ls(x) && (o.useDuration(0), r.index(x, 0));
    };
    l.add(d, "focus", m, { passive: !0, capture: !0 });
  }
  return { init: s };
}
function ho(e) {
  let t = e;
  function n() {
    return t;
  }
  function r(u) {
    t = i(u);
  }
  function o(u) {
    t += i(u);
  }
  function l(u) {
    t -= i(u);
  }
  function i(u) {
    return Ls(u) ? u : u.get();
  }
  return { get: n, set: r, add: o, subtract: l };
}
function Lf(e, t) {
  const n = e.scroll === "x" ? l : i,
    r = t.style;
  let o = !1;
  function l(d) {
    return `translate3d(${d}px,0px,0px)`;
  }
  function i(d) {
    return `translate3d(0px,${d}px,0px)`;
  }
  function s(d) {
    o || (r.transform = n(e.direction(d)));
  }
  function u(d) {
    o = !d;
  }
  function a() {
    o ||
      ((r.transform = ""),
      t.getAttribute("style") || t.removeAttribute("style"));
  }
  return { clear: a, to: s, toggleActive: u };
}
function Um(e, t, n, r, o, l, i, s, u) {
  const h = zr(o),
    d = zr(o).reverse(),
    m = f().concat(c());
  function w(k, N) {
    return k.reduce((M, z) => M - o[z], N);
  }
  function g(k, N) {
    return k.reduce((M, z) => (w(M, N) > 0 ? M.concat([z]) : M), []);
  }
  function v(k) {
    return l.map((N, M) => ({
      start: N - r[M] + 0.5 + k,
      end: N + t - 0.5 + k,
    }));
  }
  function x(k, N, M) {
    const z = v(N);
    return k.map((A) => {
      const R = M ? 0 : -n,
        re = M ? n : 0,
        q = M ? "end" : "start",
        _e = z[A][q];
      return {
        index: A,
        loopPoint: _e,
        slideLocation: ho(-1),
        translate: Lf(e, u[A]),
        target: () => (s.get() > _e ? R : re),
      };
    });
  }
  function f() {
    const k = i[0],
      N = g(d, k);
    return x(N, n, !1);
  }
  function c() {
    const k = t - i[0] - 1,
      N = g(h, k);
    return x(N, -n, !0);
  }
  function p() {
    return m.every(({ index: k }) => {
      const N = h.filter((M) => M !== k);
      return w(N, t) <= 0.1;
    });
  }
  function y() {
    m.forEach((k) => {
      const { target: N, translate: M, slideLocation: z } = k,
        A = N();
      A !== z.get() && (M.to(A), z.set(A));
    });
  }
  function C() {
    m.forEach((k) => k.translate.clear());
  }
  return { canLoop: p, clear: C, loop: y, loopPoints: m };
}
function Bm(e, t, n) {
  let r,
    o = !1;
  function l(u) {
    if (!n) return;
    function a(h) {
      for (const d of h)
        if (d.type === "childList") {
          u.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    (r = new MutationObserver((h) => {
      o || ((Ts(n) || n(u, h)) && a(h));
    })),
      r.observe(e, { childList: !0 });
  }
  function i() {
    r && r.disconnect(), (o = !0);
  }
  return { init: l, destroy: i };
}
function Hm(e, t, n, r) {
  const o = {};
  let l = null,
    i = null,
    s,
    u = !1;
  function a() {
    (s = new IntersectionObserver(
      (g) => {
        u ||
          (g.forEach((v) => {
            const x = t.indexOf(v.target);
            o[x] = v;
          }),
          (l = null),
          (i = null),
          n.emit("slidesInView"));
      },
      { root: e.parentElement, threshold: r }
    )),
      t.forEach((g) => s.observe(g));
  }
  function h() {
    s && s.disconnect(), (u = !0);
  }
  function d(g) {
    return jr(o).reduce((v, x) => {
      const f = parseInt(x),
        { isIntersecting: c } = o[f];
      return ((g && c) || (!g && !c)) && v.push(f), v;
    }, []);
  }
  function m(g = !0) {
    if (g && l) return l;
    if (!g && i) return i;
    const v = d(g);
    return g && (l = v), g || (i = v), v;
  }
  return { init: a, destroy: h, get: m };
}
function Wm(e, t, n, r, o, l) {
  const { measureSize: i, startEdge: s, endEdge: u } = e,
    a = n[0] && o,
    h = g(),
    d = v(),
    m = n.map(i),
    w = x();
  function g() {
    if (!a) return 0;
    const c = n[0];
    return Y(t[s] - c[s]);
  }
  function v() {
    if (!a) return 0;
    const c = l.getComputedStyle(rt(r));
    return parseFloat(c.getPropertyValue(`margin-${u}`));
  }
  function x() {
    return n
      .map((c, p, y) => {
        const C = !p,
          P = Ms(y, p);
        return C ? m[p] + h : P ? m[p] + d : y[p + 1][s] - c[s];
      })
      .map(Y);
  }
  return { slideSizes: m, slideSizesWithGaps: w, startGap: h, endGap: d };
}
function Qm(e, t, n, r, o, l, i, s, u) {
  const { startEdge: a, endEdge: h, direction: d } = e,
    m = Ls(n);
  function w(f, c) {
    return zr(f)
      .filter((p) => p % c === 0)
      .map((p) => f.slice(p, p + c));
  }
  function g(f) {
    return f.length
      ? zr(f)
          .reduce((c, p, y) => {
            const C = rt(c) || 0,
              P = C === 0,
              k = p === Dr(f),
              N = o[a] - l[C][a],
              M = o[a] - l[p][h],
              z = !r && P ? d(i) : 0,
              A = !r && k ? d(s) : 0,
              R = Y(M - A - (N + z));
            return y && R > t + u && c.push(p), k && c.push(f.length), c;
          }, [])
          .map((c, p, y) => {
            const C = Math.max(y[p - 1] || 0);
            return f.slice(C, c);
          })
      : [];
  }
  function v(f) {
    return m ? w(f, n) : g(f);
  }
  return { groupSlides: v };
}
function Gm(e, t, n, r, o, l, i) {
  const {
      align: s,
      axis: u,
      direction: a,
      startIndex: h,
      loop: d,
      duration: m,
      dragFree: w,
      dragThreshold: g,
      inViewThreshold: v,
      slidesToScroll: x,
      skipSnaps: f,
      containScroll: c,
      watchResize: p,
      watchSlides: y,
      watchDrag: C,
    } = l,
    P = 2,
    k = _m(),
    N = k.measure(t),
    M = n.map(k.measure),
    z = Em(u, a),
    A = z.measureSize(N),
    R = zm(A),
    re = km(s, A),
    q = !d && !!c,
    _e = d || !!c,
    {
      slideSizes: me,
      slideSizesWithGaps: he,
      startGap: _,
      endGap: T,
    } = Wm(z, N, M, n, _e, o),
    I = Qm(z, A, x, d, N, M, _, T, P),
    { snaps: F, snapsAligned: U } = Dm(z, re, N, M, I),
    ze = -rt(F) + rt(he),
    { snapsContained: Ie, scrollContainLimit: ft } = Om(A, ze, U, c, P),
    oe = q ? Ie : U,
    { limit: Se } = Mm(ze, oe, d),
    ke = jf(Dr(oe), h, d),
    cn = ke.clone(),
    Ze = zr(n),
    ee = ({
      dragHandler: Gt,
      scrollBody: ul,
      scrollBounds: al,
      options: { loop: Ar },
    }) => {
      Ar || al.constrain(Gt.pointerDown()), ul.seek();
    },
    O = (
      {
        scrollBody: Gt,
        translate: ul,
        location: al,
        offsetLocation: Ar,
        scrollLooper: Kf,
        slideLooper: Zf,
        dragHandler: Yf,
        animation: Xf,
        eventHandler: $s,
        options: { loop: Jf },
      },
      bf
    ) => {
      const Vs = Gt.velocity(),
        Us = Gt.settled();
      Us && !Yf.pointerDown() && (Xf.stop(), $s.emit("settle")),
        Us || $s.emit("scroll"),
        Ar.set(al.get() - Vs + Vs * bf),
        Jf && (Kf.loop(Gt.direction()), Zf.loop()),
        ul.to(Ar.get());
    },
    H = Cm(
      r,
      o,
      () => ee(sl),
      (Gt) => O(sl, Gt)
    ),
    ie = 0.68,
    ge = oe[ke.get()],
    lt = ho(ge),
    Ye = ho(ge),
    Xe = ho(ge),
    Qt = Lm(lt, Ye, Xe, m, ie),
    ll = Fm(d, oe, ze, Se, Xe),
    il = $m(H, ke, cn, Qt, ll, Xe, i),
    Ds = Rm(Se),
    As = Lr(),
    Qf = Hm(t, n, i, v),
    { slideRegistry: Fs } = Am(q, c, oe, ft, I, Ze),
    Gf = Vm(e, n, Fs, il, Qt, As),
    sl = {
      ownerDocument: r,
      ownerWindow: o,
      eventHandler: i,
      containerRect: N,
      slideRects: M,
      animation: H,
      axis: z,
      dragHandler: Nm(
        z,
        e,
        r,
        o,
        Xe,
        Pm(z, o),
        lt,
        H,
        il,
        Qt,
        ll,
        ke,
        i,
        R,
        w,
        g,
        f,
        ie,
        C
      ),
      eventStore: As,
      percentOfView: R,
      index: ke,
      indexPrevious: cn,
      limit: Se,
      location: lt,
      offsetLocation: Ye,
      options: l,
      resizeHandler: jm(t, i, o, n, z, p, k),
      scrollBody: Qt,
      scrollBounds: Tm(Se, Ye, Xe, Qt, R),
      scrollLooper: Im(ze, Se, Ye, [lt, Ye, Xe]),
      scrollProgress: Ds,
      scrollSnapList: oe.map(Ds.get),
      scrollSnaps: oe,
      scrollTarget: ll,
      scrollTo: il,
      slideLooper: Um(z, A, ze, me, he, F, oe, Ye, n),
      slideFocus: Gf,
      slidesHandler: Bm(t, i, y),
      slidesInView: Qf,
      slideIndexes: Ze,
      slideRegistry: Fs,
      slidesToScroll: I,
      target: Xe,
      translate: Lf(z, t),
    };
  return sl;
}
function Km() {
  const e = {};
  let t;
  function n(u) {
    t = u;
  }
  function r(u) {
    return e[u] || [];
  }
  function o(u) {
    return r(u).forEach((a) => a(t, u)), s;
  }
  function l(u, a) {
    return (e[u] = r(u).concat([a])), s;
  }
  function i(u, a) {
    return (e[u] = r(u).filter((h) => h !== a)), s;
  }
  const s = { init: n, emit: o, off: i, on: l };
  return s;
}
const Zm = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
};
function Ym(e) {
  function t(l, i) {
    return zf(l, i || {});
  }
  function n(l) {
    const i = l.breakpoints || {},
      s = jr(i)
        .filter((u) => e.matchMedia(u).matches)
        .map((u) => i[u])
        .reduce((u, a) => t(u, a), {});
    return t(l, s);
  }
  function r(l) {
    return l
      .map((i) => jr(i.breakpoints || {}))
      .reduce((i, s) => i.concat(s), [])
      .map(e.matchMedia);
  }
  return { mergeOptions: t, optionsAtMedia: n, optionsMediaQueries: r };
}
function Xm(e) {
  let t = [];
  function n(l, i) {
    return (
      (t = i.filter(({ options: s }) => e.optionsAtMedia(s).active !== !1)),
      t.forEach((s) => s.init(l, e)),
      i.reduce((s, u) => Object.assign(s, { [u.name]: u }), {})
    );
  }
  function r() {
    t = t.filter((l) => l.destroy());
  }
  return { init: n, destroy: r };
}
function Vo(e, t, n) {
  const r = e.ownerDocument,
    o = r.defaultView,
    l = Ym(o),
    i = Xm(l),
    s = Lr(),
    u = Km(),
    { mergeOptions: a, optionsAtMedia: h, optionsMediaQueries: d } = l,
    { on: m, off: w, emit: g } = u,
    v = A;
  let x = !1,
    f,
    c = a(Zm, Vo.globalOptions),
    p = a(c),
    y = [],
    C,
    P,
    k;
  function N() {
    const { container: ee, slides: O } = p;
    P = (Li(ee) ? e.querySelector(ee) : ee) || e.children[0];
    const ie = Li(O) ? P.querySelectorAll(O) : O;
    k = [].slice.call(ie || P.children);
  }
  function M(ee) {
    const O = Gm(e, P, k, r, o, ee, u);
    if (ee.loop && !O.slideLooper.canLoop()) {
      const H = Object.assign({}, ee, { loop: !1 });
      return M(H);
    }
    return O;
  }
  function z(ee, O) {
    x ||
      ((c = a(c, ee)),
      (p = h(c)),
      (y = O || y),
      N(),
      (f = M(p)),
      d([c, ...y.map(({ options: H }) => H)]).forEach((H) =>
        s.add(H, "change", A)
      ),
      p.active &&
        (f.translate.to(f.location.get()),
        f.animation.init(),
        f.slidesInView.init(),
        f.slideFocus.init(),
        f.eventHandler.init(Ze),
        f.resizeHandler.init(Ze),
        f.slidesHandler.init(Ze),
        f.options.loop && f.slideLooper.loop(),
        P.offsetParent && k.length && f.dragHandler.init(Ze),
        (C = i.init(Ze, y))));
  }
  function A(ee, O) {
    const H = F();
    R(), z(a({ startIndex: H }, ee), O), u.emit("reInit");
  }
  function R() {
    f.dragHandler.destroy(),
      f.eventStore.clear(),
      f.translate.clear(),
      f.slideLooper.clear(),
      f.resizeHandler.destroy(),
      f.slidesHandler.destroy(),
      f.slidesInView.destroy(),
      f.animation.destroy(),
      i.destroy(),
      s.clear();
  }
  function re() {
    x || ((x = !0), s.clear(), R(), u.emit("destroy"));
  }
  function q(ee, O, H) {
    !p.active ||
      x ||
      (f.scrollBody.useBaseFriction().useDuration(O === !0 ? 0 : p.duration),
      f.scrollTo.index(ee, H || 0));
  }
  function _e(ee) {
    const O = f.index.add(1).get();
    q(O, ee, -1);
  }
  function me(ee) {
    const O = f.index.add(-1).get();
    q(O, ee, 1);
  }
  function he() {
    return f.index.add(1).get() !== F();
  }
  function _() {
    return f.index.add(-1).get() !== F();
  }
  function T() {
    return f.scrollSnapList;
  }
  function I() {
    return f.scrollProgress.get(f.location.get());
  }
  function F() {
    return f.index.get();
  }
  function U() {
    return f.indexPrevious.get();
  }
  function ze() {
    return f.slidesInView.get();
  }
  function Ie() {
    return f.slidesInView.get(!1);
  }
  function ft() {
    return C;
  }
  function oe() {
    return f;
  }
  function Se() {
    return e;
  }
  function ke() {
    return P;
  }
  function cn() {
    return k;
  }
  const Ze = {
    canScrollNext: he,
    canScrollPrev: _,
    containerNode: ke,
    internalEngine: oe,
    destroy: re,
    off: w,
    on: m,
    emit: g,
    plugins: ft,
    previousScrollSnap: U,
    reInit: v,
    rootNode: Se,
    scrollNext: _e,
    scrollPrev: me,
    scrollProgress: I,
    scrollSnapList: T,
    scrollTo: q,
    selectedScrollSnap: F,
    slideNodes: cn,
    slidesInView: ze,
    slidesNotInView: Ie,
  };
  return z(t, n), setTimeout(() => u.emit("init"), 0), Ze;
}
Vo.globalOptions = void 0;
function Is(e = {}, t = []) {
  const n = L.useRef(e),
    r = L.useRef(t),
    [o, l] = L.useState(),
    [i, s] = L.useState(),
    u = L.useCallback(() => {
      o && o.reInit(n.current, r.current);
    }, [o]);
  return (
    L.useEffect(() => {
      if (wm() && i) {
        Vo.globalOptions = Is.globalOptions;
        const a = Vo(i, n.current, r.current);
        return l(a), () => a.destroy();
      } else l(void 0);
    }, [i, l]),
    L.useEffect(() => {
      js(n.current, e) || ((n.current = e), u());
    }, [e, u]),
    L.useEffect(() => {
      xm(r.current, t) || ((r.current = t), u());
    }, [t, u]),
    [s, o]
  );
}
Is.globalOptions = void 0;
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jm = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Tf = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var bm = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qm = L.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: l,
      iconNode: i,
      ...s
    },
    u
  ) =>
    L.createElement(
      "svg",
      {
        ref: u,
        ...bm,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: Tf("lucide", o),
        ...s,
      },
      [
        ...i.map(([a, h]) => L.createElement(a, h)),
        ...(Array.isArray(l) ? l : [l]),
      ]
    )
);
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Of = (e, t) => {
  const n = L.forwardRef(({ className: r, ...o }, l) =>
    L.createElement(qm, {
      ref: l,
      iconNode: t,
      className: Tf(`lucide-${Jm(e)}`, r),
      ...o,
    })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eh = Of("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }],
]);
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const th = Of("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
function Uo() {
  return (
    (Uo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Uo.apply(this, arguments)
  );
}
function nh(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function rh(...e) {
  return (t) => e.forEach((n) => nh(n, t));
}
const Mf = L.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = L.Children.toArray(n),
    l = o.find(lh);
  if (l) {
    const i = l.props.children,
      s = o.map((u) =>
        u === l
          ? L.Children.count(i) > 1
            ? L.Children.only(null)
            : L.isValidElement(i)
            ? i.props.children
            : null
          : u
      );
    return L.createElement(
      Oi,
      Uo({}, r, { ref: t }),
      L.isValidElement(i) ? L.cloneElement(i, void 0, s) : null
    );
  }
  return L.createElement(Oi, Uo({}, r, { ref: t }), n);
});
Mf.displayName = "Slot";
const Oi = L.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  return L.isValidElement(n)
    ? L.cloneElement(n, { ...ih(r, n.props), ref: t ? rh(t, n.ref) : n.ref })
    : L.Children.count(n) > 1
    ? L.Children.only(null)
    : null;
});
Oi.displayName = "SlotClone";
const oh = ({ children: e }) => L.createElement(L.Fragment, null, e);
function lh(e) {
  return L.isValidElement(e) && e.type === oh;
}
function ih(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      l = t[r];
    /^on[A-Z]/.test(r)
      ? o && l
        ? (n[r] = (...s) => {
            l(...s), o(...s);
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...l })
      : r === "className" && (n[r] = [o, l].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function If(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = If(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function sh() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = If(e)) && (r && (r += " "), (r += t));
  return r;
}
const ra = (e) => (typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e),
  oa = sh,
  uh = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return oa(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: o, defaultVariants: l } = t,
      i = Object.keys(o).map((a) => {
        const h = n == null ? void 0 : n[a],
          d = l == null ? void 0 : l[a];
        if (h === null) return null;
        const m = ra(h) || ra(d);
        return o[a][m];
      }),
      s =
        n &&
        Object.entries(n).reduce((a, h) => {
          let [d, m] = h;
          return m === void 0 || (a[d] = m), a;
        }, {}),
      u =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((a, h) => {
              let { class: d, className: m, ...w } = h;
              return Object.entries(w).every((g) => {
                let [v, x] = g;
                return Array.isArray(x)
                  ? x.includes({ ...l, ...s }[v])
                  : { ...l, ...s }[v] === x;
              })
                ? [...a, d, m]
                : a;
            }, []);
    return oa(
      e,
      i,
      u,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  },
  ah = uh(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  Rs = L.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, l) => {
      const i = r ? Mf : "button";
      return S.jsx(i, {
        className: Ke(ah({ variant: t, size: n, className: e })),
        ref: l,
        ...o,
      });
    }
  );
Rs.displayName = "Button";
const Rf = L.createContext(null);
function ol() {
  const e = L.useContext(Rf);
  if (!e) throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const Df = L.forwardRef(
  (
    {
      orientation: e = "horizontal",
      opts: t,
      setApi: n,
      plugins: r,
      className: o,
      children: l,
      ...i
    },
    s
  ) => {
    const [u, a] = Is({ ...t, axis: e === "horizontal" ? "x" : "y" }, r),
      [h, d] = L.useState(!1),
      [m, w] = L.useState(!1),
      g = L.useCallback((c) => {
        c && (d(c.canScrollPrev()), w(c.canScrollNext()));
      }, []),
      v = L.useCallback(() => {
        a == null || a.scrollPrev();
      }, [a]),
      x = L.useCallback(() => {
        a == null || a.scrollNext();
      }, [a]),
      f = L.useCallback(
        (c) => {
          c.key === "ArrowLeft"
            ? (c.preventDefault(), v())
            : c.key === "ArrowRight" && (c.preventDefault(), x());
        },
        [v, x]
      );
    return (
      L.useEffect(() => {
        !a || !n || n(a);
      }, [a, n]),
      L.useEffect(() => {
        if (a)
          return (
            g(a),
            a.on("reInit", g),
            a.on("select", g),
            () => {
              a == null || a.off("select", g);
            }
          );
      }, [a, g]),
      S.jsx(Rf.Provider, {
        value: {
          carouselRef: u,
          api: a,
          opts: t,
          orientation:
            e ||
            ((t == null ? void 0 : t.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev: v,
          scrollNext: x,
          canScrollPrev: h,
          canScrollNext: m,
        },
        children: S.jsx("div", {
          ref: s,
          onKeyDownCapture: f,
          className: Ke("relative", o),
          role: "region",
          "aria-roledescription": "carousel",
          ...i,
          children: l,
        }),
      })
    );
  }
);
Df.displayName = "Carousel";
const Af = L.forwardRef(({ className: e, ...t }, n) => {
  const { carouselRef: r, orientation: o } = ol();
  return S.jsx("div", {
    ref: r,
    className: "overflow-hidden",
    children: S.jsx("div", {
      ref: n,
      className: Ke("flex", o === "horizontal" ? "-ml-4" : "-mt-4 flex-col", e),
      ...t,
    }),
  });
});
Af.displayName = "CarouselContent";
const Ff = L.forwardRef(({ className: e, ...t }, n) => {
  const { orientation: r } = ol();
  return S.jsx("div", {
    ref: n,
    role: "group",
    "aria-roledescription": "slide",
    className: Ke(
      "min-w-0 shrink-0 grow-0 basis-full",
      r === "horizontal" ? "pl-4" : "pt-4",
      e
    ),
    ...t,
  });
});
Ff.displayName = "CarouselItem";
const $f = L.forwardRef(
  ({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
    const { orientation: l, scrollPrev: i, canScrollPrev: s } = ol();
    return S.jsxs(Rs, {
      ref: o,
      variant: t,
      size: n,
      className: Ke(
        "absolute  h-8 w-8 rounded-full",
        l === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !s,
      onClick: i,
      ...r,
      children: [
        S.jsx(eh, { className: "h-4 w-4" }),
        S.jsx("span", { className: "sr-only", children: "Previous slide" }),
      ],
    });
  }
);
$f.displayName = "CarouselPrevious";
const Vf = L.forwardRef(
  ({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
    const { orientation: l, scrollNext: i, canScrollNext: s } = ol();
    return S.jsxs(Rs, {
      ref: o,
      variant: t,
      size: n,
      className: Ke(
        "absolute h-8 w-8 rounded-full",
        l === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !s,
      onClick: i,
      ...r,
      children: [
        S.jsx(th, { className: "h-4 w-4" }),
        S.jsx("span", { className: "sr-only", children: "Next slide" }),
      ],
    });
  }
);
Vf.displayName = "CarouselNext";
const Uf = "./assets/image-product-1-D36l1Pee.jpg",
  Bf = "./assets/image-product-2-BT5cmuDx.jpg",
  Hf = "./assets/image-product-3-CDkTofMU.jpg",
  Wf = "./assets/image-product-4-DXKEAM1K.jpg",
  ch = [Uf, Bf, Hf, Wf];
function fh() {
  const e = L.useRef(_s({ delay: 2e3, stopOnInteraction: !0 }));
  return S.jsx("div", {
    className: "max-w-[500px]  mx-auto lg:hidden",
    children: S.jsxs(Df, {
      plugins: [e.current],
      className: " w-full mx-auto",
      onMouseEnter: e.current.stop,
      onMouseLeave: e.current.reset,
      children: [
        S.jsx(Af, {
          children: ch.map((t, n) =>
            S.jsx(
              Ff,
              {
                children: S.jsx(_f, {
                  className: "flex p-0  items-center justify-center",
                  children: S.jsx("img", {
                    src: t,
                    alt: `Product ${n + 1}`,
                    className: "max-h-full max-w-full object-contain",
                  }),
                }),
              },
              n
            )
          ),
        }),
        S.jsx($f, {
          className: "absolute top-1/2 left-4 transform -translate-y-1/2",
        }),
        S.jsx(Vf, {
          className: "absolute top-1/2 right-4 transform -translate-y-1/2",
        }),
      ],
    }),
  });
}
const dh = ({ images: e }) => {
    const [t, n] = L.useState(e[0]),
      [r, o] = L.useState(!1),
      l = (u) => {
        n(u);
      },
      i = () => {
        o(!0);
      },
      s = () => {
        o(!1);
      };
    return S.jsxs("div", {
      className:
        "lg:flex flex-col items-center container w-1/3 min-w-[500px] hidden ",
      children: [
        S.jsx("div", {
          className: "mb-4 rounded-xl",
          onClick: i,
          children: S.jsx("img", {
            src: t,
            alt: "Main",
            className: "w-full rounded-2xl cursor-pointer",
          }),
        }),
        S.jsx("div", {
          className: "flex w-full justify-evenly mx-auto",
          children: e.map((u, a) =>
            S.jsx(
              "img",
              {
                src: u,
                alt: `Thumbnail ${a + 1}`,
                className: `w-24 h-24 mr-2 cursor-pointer rounded-2xl hover:opacity-80 ${
                  u === t ? "border-4 border-primary-Orange opacity-70" : ""
                }`,
                onClick: () => l(u),
              },
              a
            )
          ),
        }),
        r &&
          S.jsx("div", {
            className:
              "fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex justify-center items-center",
            children: S.jsx("div", {
              className: " max-w-full max-h-full  ",
              children: S.jsxs("div", {
                className: "flex  relative flex-col justify-center container ",
                children: [
                  S.jsx("img", {
                    src: t,
                    alt: "Main",
                    className: "w-2/3  m-auto rounded-xl",
                  }),
                  S.jsx("img", {
                    src: wf,
                    alt: "close",
                    className:
                      "fixed cursor-pointer w-12 top-[2rem] right-[32%] p-4 fill-white",
                    onClick: s,
                  }),
                  S.jsx("div", {
                    className: "flex  justify-between w-2/4 m-auto mt-5",
                    children: e.map((u, a) =>
                      S.jsx(
                        "img",
                        {
                          src: u,
                          alt: `Thumbnail ${a + 1}`,
                          className: `w-24 h-24 mr-2 cursor-pointer rounded-2xl hover:opacity-80 ${
                            u === t
                              ? "border-4 border-primary-Orange opacity-70"
                              : ""
                          }`,
                          onClick: () => l(u),
                        },
                        a
                      )
                    ),
                  }),
                ],
              }),
            }),
          }),
      ],
    });
  },
  ph =
    "data:image/svg+xml,%3csvg%20width='12'%20height='4'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cpath%20d='M11.357%203.332A.641.641%200%200%200%2012%202.69V.643A.641.641%200%200%200%2011.357%200H.643A.641.641%200%200%200%200%20.643v2.046c0%20.357.287.643.643.643h10.714Z'%20id='a'/%3e%3c/defs%3e%3cuse%20fill='%23FF7E1B'%20fill-rule='nonzero'%20xlink:href='%23a'/%3e%3c/svg%3e",
  mh =
    "data:image/svg+xml,%3csvg%20width='12'%20height='12'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cpath%20d='M12%207.023V4.977a.641.641%200%200%200-.643-.643h-3.69V.643A.641.641%200%200%200%207.022%200H4.977a.641.641%200%200%200-.643.643v3.69H.643A.641.641%200%200%200%200%204.978v2.046c0%20.356.287.643.643.643h3.69v3.691c0%20.356.288.643.644.643h2.046a.641.641%200%200%200%20.643-.643v-3.69h3.691A.641.641%200%200%200%2012%207.022Z'%20id='b'/%3e%3c/defs%3e%3cuse%20fill='%23FF7E1B'%20fill-rule='nonzero'%20xlink:href='%23b'/%3e%3c/svg%3e",
  hh = [Uf, Bf, Hf, Wf];
function gh() {
  const [e, t] = L.useState(0),
    [n, r] = L.useState(!1),
    [o, l] = L.useState([]),
    i = () => {
      t((h) => h + 1);
    },
    s = () => {
      e > 0 && t((h) => h - 1);
    },
    u = () => {
      if (o.find((d) => d.id === 1)) {
        const d = o.map((m) =>
          m.id === 1 ? { ...m, quantity: m.quantity + 1 } : m
        );
        l(d);
      } else l((d) => [...d, { id: 1, quantity: 1 }]);
      r(!0);
    },
    a = () => {
      r(!1);
    };
  return S.jsx(S.Fragment, {
    children: S.jsxs("div", {
      className: "bg-white min-w-[375px] h-full w-full",
      children: [
        S.jsx(O0, {}),
        S.jsx(fh, {}),
        S.jsxs("div", {
          className: "lg:flex md:container lg:mt-[5rem]",
          children: [
            S.jsx(dh, { images: hh }),
            S.jsx("div", {
              className: "items-center m-auto",
              children: S.jsxs("div", {
                className: "container m-auto mt-4 space-y-4 max-w-[550px] ",
                children: [
                  S.jsx("h2", {
                    className: "text-primary-Orange font-[700] text-sm",
                    children: "SNEAKER COMPANY",
                  }),
                  S.jsxs("h1", {
                    className:
                      "font-[700] text-Neutral-VeryDarkBlue text-3xl lg:text-5xl lg:pb-6",
                    children: [
                      "Fall Limited Edition ",
                      S.jsx("br", {}),
                      "Sneakers",
                    ],
                  }),
                  S.jsx("p", {
                    className: "text-Neutral-DarkGrayishBlue font-[400]",
                    children:
                      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
                  }),
                  S.jsxs("div", {
                    className:
                      "m-auto justify-between flex lg:flex-col lg:pb-6",
                    children: [
                      S.jsxs("div", {
                        className: "flex gap-5 items-center",
                        children: [
                          S.jsx("h1", {
                            className:
                              "font-[700] text-Neutral-VeryDarkBlue text-3xl ",
                            children: "$125.00",
                          }),
                          S.jsx("h1", {
                            className:
                              "bg-primary-PaleOrange text-primary-Orange font-[700] text-lg rounded-lg px-2",
                            children: "50%",
                          }),
                        ],
                      }),
                      S.jsx("h1", {
                        className:
                          "self-center line-through lg:self-start  text-Neutral-GrayishBlue font-[700]",
                        children: "$250.00",
                      }),
                    ],
                  }),
                  S.jsxs("div", {
                    className: " space-y-3 lg:space-y-0 gap-3 lg:flex ",
                    children: [
                      S.jsxs("div", {
                        className:
                          "flex justify-between m-auto container lg:max-w-[200px] bg-Neutral-LightGrayishBlue items-center py-4 px-6 rounded-xl",
                        children: [
                          S.jsx("img", {
                            className: "object-none cursor-pointer",
                            src: ph,
                            alt: "minus",
                            onClick: s,
                          }),
                          S.jsx("p", {
                            className:
                              "font-[700] text-Neutral-VeryDarkBlue text-lg",
                            children: e,
                          }),
                          S.jsx("img", {
                            className: "object-none cursor-pointer",
                            src: mh,
                            alt: "Plus",
                            onClick: i,
                          }),
                        ],
                      }),
                      S.jsxs("button", {
                        className:
                          "bg-primary-Orange gap-3 shadow-[0_10px_40px_rgba(255,_125,_26,_0.5)] hover:opacity-70 text-white font-[700] justify-center items-center py-3 flex rounded-lg m-auto w-full",
                        onClick: u,
                        children: [
                          S.jsx("img", {
                            className: "fill-white",
                            src: yf,
                            alt: "",
                          }),
                          " Add to cart",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        n && S.jsx(xf, { onClose: a, quantity: e, cartItems: o }),
      ],
    }),
  });
}
Dl.createRoot(document.getElementById("root")).render(
  S.jsx(hd.StrictMode, { children: S.jsx(gh, {}) })
);
