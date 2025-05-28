var ny = (a) => {
  throw TypeError(a);
};
var Nf = (a, n, r) => n.has(a) || ny('Cannot ' + r);
var M = (a, n, r) => (
    Nf(a, n, 'read from private field'), r ? r.call(a) : n.get(a)
  ),
  ye = (a, n, r) =>
    n.has(a)
      ? ny('Cannot add the same private member more than once')
      : n instanceof WeakSet
        ? n.add(a)
        : n.set(a, r),
  re = (a, n, r, l) => (
    Nf(a, n, 'write to private field'), l ? l.call(a, r) : n.set(a, r), r
  ),
  Me = (a, n, r) => (Nf(a, n, 'access private method'), r);
var Ro = (a, n, r, l) => ({
  set _(o) {
    re(a, n, o, r);
  },
  get _() {
    return M(a, n, l);
  },
});
function q1(a, n) {
  for (var r = 0; r < n.length; r++) {
    const l = n[r];
    if (typeof l != 'string' && !Array.isArray(l)) {
      for (const o in l)
        if (o !== 'default' && !(o in a)) {
          const c = Object.getOwnPropertyDescriptor(l, o);
          c &&
            Object.defineProperty(
              a,
              o,
              c.get ? c : { enumerable: !0, get: () => l[o] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(a, Symbol.toStringTag, { value: 'Module' }),
  );
}
(function () {
  const n = document.createElement('link').relList;
  if (n && n.supports && n.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) l(o);
  new MutationObserver((o) => {
    for (const c of o)
      if (c.type === 'childList')
        for (const d of c.addedNodes)
          d.tagName === 'LINK' && d.rel === 'modulepreload' && l(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(o) {
    const c = {};
    return (
      o.integrity && (c.integrity = o.integrity),
      o.referrerPolicy && (c.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (c.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (c.credentials = 'omit')
          : (c.credentials = 'same-origin'),
      c
    );
  }
  function l(o) {
    if (o.ep) return;
    o.ep = !0;
    const c = r(o);
    fetch(o.href, c);
  }
})();
function Gv(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, 'default')
    ? a.default
    : a;
}
var Lf = { exports: {} },
  Nl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ay;
function G1() {
  if (ay) return Nl;
  ay = 1;
  var a = Symbol.for('react.transitional.element'),
    n = Symbol.for('react.fragment');
  function r(l, o, c) {
    var d = null;
    if (
      (c !== void 0 && (d = '' + c),
      o.key !== void 0 && (d = '' + o.key),
      'key' in o)
    ) {
      c = {};
      for (var h in o) h !== 'key' && (c[h] = o[h]);
    } else c = o;
    return (
      (o = c.ref),
      { $$typeof: a, type: l, key: d, ref: o !== void 0 ? o : null, props: c }
    );
  }
  return (Nl.Fragment = n), (Nl.jsx = r), (Nl.jsxs = r), Nl;
}
var iy;
function P1() {
  return iy || ((iy = 1), (Lf.exports = G1())), Lf.exports;
}
var Y = P1(),
  zf = { exports: {} },
  Ee = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ry;
function V1() {
  if (ry) return Ee;
  ry = 1;
  var a = Symbol.for('react.transitional.element'),
    n = Symbol.for('react.portal'),
    r = Symbol.for('react.fragment'),
    l = Symbol.for('react.strict_mode'),
    o = Symbol.for('react.profiler'),
    c = Symbol.for('react.consumer'),
    d = Symbol.for('react.context'),
    h = Symbol.for('react.forward_ref'),
    m = Symbol.for('react.suspense'),
    p = Symbol.for('react.memo'),
    g = Symbol.for('react.lazy'),
    v = Symbol.iterator;
  function S(A) {
    return A === null || typeof A != 'object'
      ? null
      : ((A = (v && A[v]) || A['@@iterator']),
        typeof A == 'function' ? A : null);
  }
  var E = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    w = Object.assign,
    x = {};
  function R(A, V, te) {
    (this.props = A),
      (this.context = V),
      (this.refs = x),
      (this.updater = te || E);
  }
  (R.prototype.isReactComponent = {}),
    (R.prototype.setState = function (A, V) {
      if (typeof A != 'object' && typeof A != 'function' && A != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, A, V, 'setState');
    }),
    (R.prototype.forceUpdate = function (A) {
      this.updater.enqueueForceUpdate(this, A, 'forceUpdate');
    });
  function _() {}
  _.prototype = R.prototype;
  function k(A, V, te) {
    (this.props = A),
      (this.context = V),
      (this.refs = x),
      (this.updater = te || E);
  }
  var L = (k.prototype = new _());
  (L.constructor = k), w(L, R.prototype), (L.isPureReactComponent = !0);
  var q = Array.isArray,
    B = { H: null, A: null, T: null, S: null, V: null },
    J = Object.prototype.hasOwnProperty;
  function Z(A, V, te, I, ae, Se) {
    return (
      (te = Se.ref),
      {
        $$typeof: a,
        type: A,
        key: V,
        ref: te !== void 0 ? te : null,
        props: Se,
      }
    );
  }
  function G(A, V) {
    return Z(A.type, V, void 0, void 0, void 0, A.props);
  }
  function W(A) {
    return typeof A == 'object' && A !== null && A.$$typeof === a;
  }
  function ne(A) {
    var V = { '=': '=0', ':': '=2' };
    return (
      '$' +
      A.replace(/[=:]/g, function (te) {
        return V[te];
      })
    );
  }
  var fe = /\/+/g;
  function ce(A, V) {
    return typeof A == 'object' && A !== null && A.key != null
      ? ne('' + A.key)
      : V.toString(36);
  }
  function de() {}
  function be(A) {
    switch (A.status) {
      case 'fulfilled':
        return A.value;
      case 'rejected':
        throw A.reason;
      default:
        switch (
          (typeof A.status == 'string'
            ? A.then(de, de)
            : ((A.status = 'pending'),
              A.then(
                function (V) {
                  A.status === 'pending' &&
                    ((A.status = 'fulfilled'), (A.value = V));
                },
                function (V) {
                  A.status === 'pending' &&
                    ((A.status = 'rejected'), (A.reason = V));
                },
              )),
          A.status)
        ) {
          case 'fulfilled':
            return A.value;
          case 'rejected':
            throw A.reason;
        }
    }
    throw A;
  }
  function me(A, V, te, I, ae) {
    var Se = typeof A;
    (Se === 'undefined' || Se === 'boolean') && (A = null);
    var ue = !1;
    if (A === null) ue = !0;
    else
      switch (Se) {
        case 'bigint':
        case 'string':
        case 'number':
          ue = !0;
          break;
        case 'object':
          switch (A.$$typeof) {
            case a:
            case n:
              ue = !0;
              break;
            case g:
              return (ue = A._init), me(ue(A._payload), V, te, I, ae);
          }
      }
    if (ue)
      return (
        (ae = ae(A)),
        (ue = I === '' ? '.' + ce(A, 0) : I),
        q(ae)
          ? ((te = ''),
            ue != null && (te = ue.replace(fe, '$&/') + '/'),
            me(ae, V, te, '', function (Ve) {
              return Ve;
            }))
          : ae != null &&
            (W(ae) &&
              (ae = G(
                ae,
                te +
                  (ae.key == null || (A && A.key === ae.key)
                    ? ''
                    : ('' + ae.key).replace(fe, '$&/') + '/') +
                  ue,
              )),
            V.push(ae)),
        1
      );
    ue = 0;
    var xe = I === '' ? '.' : I + ':';
    if (q(A))
      for (var Le = 0; Le < A.length; Le++)
        (I = A[Le]), (Se = xe + ce(I, Le)), (ue += me(I, V, te, Se, ae));
    else if (((Le = S(A)), typeof Le == 'function'))
      for (A = Le.call(A), Le = 0; !(I = A.next()).done; )
        (I = I.value), (Se = xe + ce(I, Le++)), (ue += me(I, V, te, Se, ae));
    else if (Se === 'object') {
      if (typeof A.then == 'function') return me(be(A), V, te, I, ae);
      throw (
        ((V = String(A)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (V === '[object Object]'
              ? 'object with keys {' + Object.keys(A).join(', ') + '}'
              : V) +
            '). If you meant to render a collection of children, use an array instead.',
        ))
      );
    }
    return ue;
  }
  function N(A, V, te) {
    if (A == null) return A;
    var I = [],
      ae = 0;
    return (
      me(A, I, '', '', function (Se) {
        return V.call(te, Se, ae++);
      }),
      I
    );
  }
  function $(A) {
    if (A._status === -1) {
      var V = A._result;
      (V = V()),
        V.then(
          function (te) {
            (A._status === 0 || A._status === -1) &&
              ((A._status = 1), (A._result = te));
          },
          function (te) {
            (A._status === 0 || A._status === -1) &&
              ((A._status = 2), (A._result = te));
          },
        ),
        A._status === -1 && ((A._status = 0), (A._result = V));
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var P =
    typeof reportError == 'function'
      ? reportError
      : function (A) {
          if (
            typeof window == 'object' &&
            typeof window.ErrorEvent == 'function'
          ) {
            var V = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof A == 'object' &&
                A !== null &&
                typeof A.message == 'string'
                  ? String(A.message)
                  : String(A),
              error: A,
            });
            if (!window.dispatchEvent(V)) return;
          } else if (
            typeof process == 'object' &&
            typeof process.emit == 'function'
          ) {
            process.emit('uncaughtException', A);
            return;
          }
          console.error(A);
        };
  function ee() {}
  return (
    (Ee.Children = {
      map: N,
      forEach: function (A, V, te) {
        N(
          A,
          function () {
            V.apply(this, arguments);
          },
          te,
        );
      },
      count: function (A) {
        var V = 0;
        return (
          N(A, function () {
            V++;
          }),
          V
        );
      },
      toArray: function (A) {
        return (
          N(A, function (V) {
            return V;
          }) || []
        );
      },
      only: function (A) {
        if (!W(A))
          throw Error(
            'React.Children.only expected to receive a single React element child.',
          );
        return A;
      },
    }),
    (Ee.Component = R),
    (Ee.Fragment = r),
    (Ee.Profiler = o),
    (Ee.PureComponent = k),
    (Ee.StrictMode = l),
    (Ee.Suspense = m),
    (Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = B),
    (Ee.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (A) {
        return B.H.useMemoCache(A);
      },
    }),
    (Ee.cache = function (A) {
      return function () {
        return A.apply(null, arguments);
      };
    }),
    (Ee.cloneElement = function (A, V, te) {
      if (A == null)
        throw Error(
          'The argument must be a React element, but you passed ' + A + '.',
        );
      var I = w({}, A.props),
        ae = A.key,
        Se = void 0;
      if (V != null)
        for (ue in (V.ref !== void 0 && (Se = void 0),
        V.key !== void 0 && (ae = '' + V.key),
        V))
          !J.call(V, ue) ||
            ue === 'key' ||
            ue === '__self' ||
            ue === '__source' ||
            (ue === 'ref' && V.ref === void 0) ||
            (I[ue] = V[ue]);
      var ue = arguments.length - 2;
      if (ue === 1) I.children = te;
      else if (1 < ue) {
        for (var xe = Array(ue), Le = 0; Le < ue; Le++)
          xe[Le] = arguments[Le + 2];
        I.children = xe;
      }
      return Z(A.type, ae, void 0, void 0, Se, I);
    }),
    (Ee.createContext = function (A) {
      return (
        (A = {
          $$typeof: d,
          _currentValue: A,
          _currentValue2: A,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (A.Provider = A),
        (A.Consumer = { $$typeof: c, _context: A }),
        A
      );
    }),
    (Ee.createElement = function (A, V, te) {
      var I,
        ae = {},
        Se = null;
      if (V != null)
        for (I in (V.key !== void 0 && (Se = '' + V.key), V))
          J.call(V, I) &&
            I !== 'key' &&
            I !== '__self' &&
            I !== '__source' &&
            (ae[I] = V[I]);
      var ue = arguments.length - 2;
      if (ue === 1) ae.children = te;
      else if (1 < ue) {
        for (var xe = Array(ue), Le = 0; Le < ue; Le++)
          xe[Le] = arguments[Le + 2];
        ae.children = xe;
      }
      if (A && A.defaultProps)
        for (I in ((ue = A.defaultProps), ue))
          ae[I] === void 0 && (ae[I] = ue[I]);
      return Z(A, Se, void 0, void 0, null, ae);
    }),
    (Ee.createRef = function () {
      return { current: null };
    }),
    (Ee.forwardRef = function (A) {
      return { $$typeof: h, render: A };
    }),
    (Ee.isValidElement = W),
    (Ee.lazy = function (A) {
      return { $$typeof: g, _payload: { _status: -1, _result: A }, _init: $ };
    }),
    (Ee.memo = function (A, V) {
      return { $$typeof: p, type: A, compare: V === void 0 ? null : V };
    }),
    (Ee.startTransition = function (A) {
      var V = B.T,
        te = {};
      B.T = te;
      try {
        var I = A(),
          ae = B.S;
        ae !== null && ae(te, I),
          typeof I == 'object' &&
            I !== null &&
            typeof I.then == 'function' &&
            I.then(ee, P);
      } catch (Se) {
        P(Se);
      } finally {
        B.T = V;
      }
    }),
    (Ee.unstable_useCacheRefresh = function () {
      return B.H.useCacheRefresh();
    }),
    (Ee.use = function (A) {
      return B.H.use(A);
    }),
    (Ee.useActionState = function (A, V, te) {
      return B.H.useActionState(A, V, te);
    }),
    (Ee.useCallback = function (A, V) {
      return B.H.useCallback(A, V);
    }),
    (Ee.useContext = function (A) {
      return B.H.useContext(A);
    }),
    (Ee.useDebugValue = function () {}),
    (Ee.useDeferredValue = function (A, V) {
      return B.H.useDeferredValue(A, V);
    }),
    (Ee.useEffect = function (A, V, te) {
      var I = B.H;
      if (typeof te == 'function')
        throw Error(
          'useEffect CRUD overload is not enabled in this build of React.',
        );
      return I.useEffect(A, V);
    }),
    (Ee.useId = function () {
      return B.H.useId();
    }),
    (Ee.useImperativeHandle = function (A, V, te) {
      return B.H.useImperativeHandle(A, V, te);
    }),
    (Ee.useInsertionEffect = function (A, V) {
      return B.H.useInsertionEffect(A, V);
    }),
    (Ee.useLayoutEffect = function (A, V) {
      return B.H.useLayoutEffect(A, V);
    }),
    (Ee.useMemo = function (A, V) {
      return B.H.useMemo(A, V);
    }),
    (Ee.useOptimistic = function (A, V) {
      return B.H.useOptimistic(A, V);
    }),
    (Ee.useReducer = function (A, V, te) {
      return B.H.useReducer(A, V, te);
    }),
    (Ee.useRef = function (A) {
      return B.H.useRef(A);
    }),
    (Ee.useState = function (A) {
      return B.H.useState(A);
    }),
    (Ee.useSyncExternalStore = function (A, V, te) {
      return B.H.useSyncExternalStore(A, V, te);
    }),
    (Ee.useTransition = function () {
      return B.H.useTransition();
    }),
    (Ee.version = '19.1.0'),
    Ee
  );
}
var ly;
function jd() {
  return ly || ((ly = 1), (zf.exports = V1())), zf.exports;
}
var O = jd();
const nn = Gv(O),
  Pv = q1({ __proto__: null, default: nn }, [O]);
var Uf = { exports: {} },
  Ll = {},
  jf = { exports: {} },
  kf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sy;
function Q1() {
  return (
    sy ||
      ((sy = 1),
      (function (a) {
        function n(N, $) {
          var P = N.length;
          N.push($);
          e: for (; 0 < P; ) {
            var ee = (P - 1) >>> 1,
              A = N[ee];
            if (0 < o(A, $)) (N[ee] = $), (N[P] = A), (P = ee);
            else break e;
          }
        }
        function r(N) {
          return N.length === 0 ? null : N[0];
        }
        function l(N) {
          if (N.length === 0) return null;
          var $ = N[0],
            P = N.pop();
          if (P !== $) {
            N[0] = P;
            e: for (var ee = 0, A = N.length, V = A >>> 1; ee < V; ) {
              var te = 2 * (ee + 1) - 1,
                I = N[te],
                ae = te + 1,
                Se = N[ae];
              if (0 > o(I, P))
                ae < A && 0 > o(Se, I)
                  ? ((N[ee] = Se), (N[ae] = P), (ee = ae))
                  : ((N[ee] = I), (N[te] = P), (ee = te));
              else if (ae < A && 0 > o(Se, P))
                (N[ee] = Se), (N[ae] = P), (ee = ae);
              else break e;
            }
          }
          return $;
        }
        function o(N, $) {
          var P = N.sortIndex - $.sortIndex;
          return P !== 0 ? P : N.id - $.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == 'object' &&
            typeof performance.now == 'function')
        ) {
          var c = performance;
          a.unstable_now = function () {
            return c.now();
          };
        } else {
          var d = Date,
            h = d.now();
          a.unstable_now = function () {
            return d.now() - h;
          };
        }
        var m = [],
          p = [],
          g = 1,
          v = null,
          S = 3,
          E = !1,
          w = !1,
          x = !1,
          R = !1,
          _ = typeof setTimeout == 'function' ? setTimeout : null,
          k = typeof clearTimeout == 'function' ? clearTimeout : null,
          L = typeof setImmediate < 'u' ? setImmediate : null;
        function q(N) {
          for (var $ = r(p); $ !== null; ) {
            if ($.callback === null) l(p);
            else if ($.startTime <= N)
              l(p), ($.sortIndex = $.expirationTime), n(m, $);
            else break;
            $ = r(p);
          }
        }
        function B(N) {
          if (((x = !1), q(N), !w))
            if (r(m) !== null) (w = !0), J || ((J = !0), ce());
            else {
              var $ = r(p);
              $ !== null && me(B, $.startTime - N);
            }
        }
        var J = !1,
          Z = -1,
          G = 5,
          W = -1;
        function ne() {
          return R ? !0 : !(a.unstable_now() - W < G);
        }
        function fe() {
          if (((R = !1), J)) {
            var N = a.unstable_now();
            W = N;
            var $ = !0;
            try {
              e: {
                (w = !1), x && ((x = !1), k(Z), (Z = -1)), (E = !0);
                var P = S;
                try {
                  t: {
                    for (
                      q(N), v = r(m);
                      v !== null && !(v.expirationTime > N && ne());

                    ) {
                      var ee = v.callback;
                      if (typeof ee == 'function') {
                        (v.callback = null), (S = v.priorityLevel);
                        var A = ee(v.expirationTime <= N);
                        if (((N = a.unstable_now()), typeof A == 'function')) {
                          (v.callback = A), q(N), ($ = !0);
                          break t;
                        }
                        v === r(m) && l(m), q(N);
                      } else l(m);
                      v = r(m);
                    }
                    if (v !== null) $ = !0;
                    else {
                      var V = r(p);
                      V !== null && me(B, V.startTime - N), ($ = !1);
                    }
                  }
                  break e;
                } finally {
                  (v = null), (S = P), (E = !1);
                }
                $ = void 0;
              }
            } finally {
              $ ? ce() : (J = !1);
            }
          }
        }
        var ce;
        if (typeof L == 'function')
          ce = function () {
            L(fe);
          };
        else if (typeof MessageChannel < 'u') {
          var de = new MessageChannel(),
            be = de.port2;
          (de.port1.onmessage = fe),
            (ce = function () {
              be.postMessage(null);
            });
        } else
          ce = function () {
            _(fe, 0);
          };
        function me(N, $) {
          Z = _(function () {
            N(a.unstable_now());
          }, $);
        }
        (a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (N) {
            N.callback = null;
          }),
          (a.unstable_forceFrameRate = function (N) {
            0 > N || 125 < N
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : (G = 0 < N ? Math.floor(1e3 / N) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (a.unstable_next = function (N) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var $ = 3;
                break;
              default:
                $ = S;
            }
            var P = S;
            S = $;
            try {
              return N();
            } finally {
              S = P;
            }
          }),
          (a.unstable_requestPaint = function () {
            R = !0;
          }),
          (a.unstable_runWithPriority = function (N, $) {
            switch (N) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                N = 3;
            }
            var P = S;
            S = N;
            try {
              return $();
            } finally {
              S = P;
            }
          }),
          (a.unstable_scheduleCallback = function (N, $, P) {
            var ee = a.unstable_now();
            switch (
              (typeof P == 'object' && P !== null
                ? ((P = P.delay),
                  (P = typeof P == 'number' && 0 < P ? ee + P : ee))
                : (P = ee),
              N)
            ) {
              case 1:
                var A = -1;
                break;
              case 2:
                A = 250;
                break;
              case 5:
                A = 1073741823;
                break;
              case 4:
                A = 1e4;
                break;
              default:
                A = 5e3;
            }
            return (
              (A = P + A),
              (N = {
                id: g++,
                callback: $,
                priorityLevel: N,
                startTime: P,
                expirationTime: A,
                sortIndex: -1,
              }),
              P > ee
                ? ((N.sortIndex = P),
                  n(p, N),
                  r(m) === null &&
                    N === r(p) &&
                    (x ? (k(Z), (Z = -1)) : (x = !0), me(B, P - ee)))
                : ((N.sortIndex = A),
                  n(m, N),
                  w || E || ((w = !0), J || ((J = !0), ce()))),
              N
            );
          }),
          (a.unstable_shouldYield = ne),
          (a.unstable_wrapCallback = function (N) {
            var $ = S;
            return function () {
              var P = S;
              S = $;
              try {
                return N.apply(this, arguments);
              } finally {
                S = P;
              }
            };
          });
      })(kf)),
    kf
  );
}
var oy;
function Y1() {
  return oy || ((oy = 1), (jf.exports = Q1())), jf.exports;
}
var Bf = { exports: {} },
  mt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uy;
function K1() {
  if (uy) return mt;
  uy = 1;
  var a = jd();
  function n(m) {
    var p = 'https://react.dev/errors/' + m;
    if (1 < arguments.length) {
      p += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        p += '&args[]=' + encodeURIComponent(arguments[g]);
    }
    return (
      'Minified React error #' +
      m +
      '; visit ' +
      p +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function r() {}
  var l = {
      d: {
        f: r,
        r: function () {
          throw Error(n(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r,
      },
      p: 0,
      findDOMNode: null,
    },
    o = Symbol.for('react.portal');
  function c(m, p, g) {
    var v =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: v == null ? null : '' + v,
      children: m,
      containerInfo: p,
      implementation: g,
    };
  }
  var d = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(m, p) {
    if (m === 'font') return '';
    if (typeof p == 'string') return p === 'use-credentials' ? p : '';
  }
  return (
    (mt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l),
    (mt.createPortal = function (m, p) {
      var g =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
        throw Error(n(299));
      return c(m, p, null, g);
    }),
    (mt.flushSync = function (m) {
      var p = d.T,
        g = l.p;
      try {
        if (((d.T = null), (l.p = 2), m)) return m();
      } finally {
        (d.T = p), (l.p = g), l.d.f();
      }
    }),
    (mt.preconnect = function (m, p) {
      typeof m == 'string' &&
        (p
          ? ((p = p.crossOrigin),
            (p =
              typeof p == 'string'
                ? p === 'use-credentials'
                  ? p
                  : ''
                : void 0))
          : (p = null),
        l.d.C(m, p));
    }),
    (mt.prefetchDNS = function (m) {
      typeof m == 'string' && l.d.D(m);
    }),
    (mt.preinit = function (m, p) {
      if (typeof m == 'string' && p && typeof p.as == 'string') {
        var g = p.as,
          v = h(g, p.crossOrigin),
          S = typeof p.integrity == 'string' ? p.integrity : void 0,
          E = typeof p.fetchPriority == 'string' ? p.fetchPriority : void 0;
        g === 'style'
          ? l.d.S(m, typeof p.precedence == 'string' ? p.precedence : void 0, {
              crossOrigin: v,
              integrity: S,
              fetchPriority: E,
            })
          : g === 'script' &&
            l.d.X(m, {
              crossOrigin: v,
              integrity: S,
              fetchPriority: E,
              nonce: typeof p.nonce == 'string' ? p.nonce : void 0,
            });
      }
    }),
    (mt.preinitModule = function (m, p) {
      if (typeof m == 'string')
        if (typeof p == 'object' && p !== null) {
          if (p.as == null || p.as === 'script') {
            var g = h(p.as, p.crossOrigin);
            l.d.M(m, {
              crossOrigin: g,
              integrity: typeof p.integrity == 'string' ? p.integrity : void 0,
              nonce: typeof p.nonce == 'string' ? p.nonce : void 0,
            });
          }
        } else p == null && l.d.M(m);
    }),
    (mt.preload = function (m, p) {
      if (
        typeof m == 'string' &&
        typeof p == 'object' &&
        p !== null &&
        typeof p.as == 'string'
      ) {
        var g = p.as,
          v = h(g, p.crossOrigin);
        l.d.L(m, g, {
          crossOrigin: v,
          integrity: typeof p.integrity == 'string' ? p.integrity : void 0,
          nonce: typeof p.nonce == 'string' ? p.nonce : void 0,
          type: typeof p.type == 'string' ? p.type : void 0,
          fetchPriority:
            typeof p.fetchPriority == 'string' ? p.fetchPriority : void 0,
          referrerPolicy:
            typeof p.referrerPolicy == 'string' ? p.referrerPolicy : void 0,
          imageSrcSet:
            typeof p.imageSrcSet == 'string' ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == 'string' ? p.imageSizes : void 0,
          media: typeof p.media == 'string' ? p.media : void 0,
        });
      }
    }),
    (mt.preloadModule = function (m, p) {
      if (typeof m == 'string')
        if (p) {
          var g = h(p.as, p.crossOrigin);
          l.d.m(m, {
            as: typeof p.as == 'string' && p.as !== 'script' ? p.as : void 0,
            crossOrigin: g,
            integrity: typeof p.integrity == 'string' ? p.integrity : void 0,
          });
        } else l.d.m(m);
    }),
    (mt.requestFormReset = function (m) {
      l.d.r(m);
    }),
    (mt.unstable_batchedUpdates = function (m, p) {
      return m(p);
    }),
    (mt.useFormState = function (m, p, g) {
      return d.H.useFormState(m, p, g);
    }),
    (mt.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (mt.version = '19.1.0'),
    mt
  );
}
var cy;
function Vv() {
  if (cy) return Bf.exports;
  cy = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (n) {
        console.error(n);
      }
  }
  return a(), (Bf.exports = K1()), Bf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fy;
function F1() {
  if (fy) return Ll;
  fy = 1;
  var a = Y1(),
    n = jd(),
    r = Vv();
  function l(e) {
    var t = 'https://react.dev/errors/' + e;
    if (1 < arguments.length) {
      t += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var i = 2; i < arguments.length; i++)
        t += '&args[]=' + encodeURIComponent(arguments[i]);
    }
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function o(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function c(e) {
    var t = e,
      i = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (i = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? i : null;
  }
  function d(e) {
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
  function h(e) {
    if (c(e) !== e) throw Error(l(188));
  }
  function m(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = c(e)), t === null)) throw Error(l(188));
      return t !== e ? null : e;
    }
    for (var i = e, s = t; ; ) {
      var u = i.return;
      if (u === null) break;
      var f = u.alternate;
      if (f === null) {
        if (((s = u.return), s !== null)) {
          i = s;
          continue;
        }
        break;
      }
      if (u.child === f.child) {
        for (f = u.child; f; ) {
          if (f === i) return h(u), e;
          if (f === s) return h(u), t;
          f = f.sibling;
        }
        throw Error(l(188));
      }
      if (i.return !== s.return) (i = u), (s = f);
      else {
        for (var y = !1, b = u.child; b; ) {
          if (b === i) {
            (y = !0), (i = u), (s = f);
            break;
          }
          if (b === s) {
            (y = !0), (s = u), (i = f);
            break;
          }
          b = b.sibling;
        }
        if (!y) {
          for (b = f.child; b; ) {
            if (b === i) {
              (y = !0), (i = f), (s = u);
              break;
            }
            if (b === s) {
              (y = !0), (s = f), (i = u);
              break;
            }
            b = b.sibling;
          }
          if (!y) throw Error(l(189));
        }
      }
      if (i.alternate !== s) throw Error(l(190));
    }
    if (i.tag !== 3) throw Error(l(188));
    return i.stateNode.current === i ? e : t;
  }
  function p(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = p(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var g = Object.assign,
    v = Symbol.for('react.element'),
    S = Symbol.for('react.transitional.element'),
    E = Symbol.for('react.portal'),
    w = Symbol.for('react.fragment'),
    x = Symbol.for('react.strict_mode'),
    R = Symbol.for('react.profiler'),
    _ = Symbol.for('react.provider'),
    k = Symbol.for('react.consumer'),
    L = Symbol.for('react.context'),
    q = Symbol.for('react.forward_ref'),
    B = Symbol.for('react.suspense'),
    J = Symbol.for('react.suspense_list'),
    Z = Symbol.for('react.memo'),
    G = Symbol.for('react.lazy'),
    W = Symbol.for('react.activity'),
    ne = Symbol.for('react.memo_cache_sentinel'),
    fe = Symbol.iterator;
  function ce(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (fe && e[fe]) || e['@@iterator']),
        typeof e == 'function' ? e : null);
  }
  var de = Symbol.for('react.client.reference');
  function be(e) {
    if (e == null) return null;
    if (typeof e == 'function')
      return e.$$typeof === de ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case w:
        return 'Fragment';
      case R:
        return 'Profiler';
      case x:
        return 'StrictMode';
      case B:
        return 'Suspense';
      case J:
        return 'SuspenseList';
      case W:
        return 'Activity';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case E:
          return 'Portal';
        case L:
          return (e.displayName || 'Context') + '.Provider';
        case k:
          return (e._context.displayName || 'Context') + '.Consumer';
        case q:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case Z:
          return (
            (t = e.displayName || null), t !== null ? t : be(e.type) || 'Memo'
          );
        case G:
          (t = e._payload), (e = e._init);
          try {
            return be(e(t));
          } catch {}
      }
    return null;
  }
  var me = Array.isArray,
    N = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    $ = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    P = { pending: !1, data: null, method: null, action: null },
    ee = [],
    A = -1;
  function V(e) {
    return { current: e };
  }
  function te(e) {
    0 > A || ((e.current = ee[A]), (ee[A] = null), A--);
  }
  function I(e, t) {
    A++, (ee[A] = e.current), (e.current = t);
  }
  var ae = V(null),
    Se = V(null),
    ue = V(null),
    xe = V(null);
  function Le(e, t) {
    switch ((I(ue, t), I(Se, e), I(ae, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Dg(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          (t = Dg(t)), (e = _g(t, e));
        else
          switch (e) {
            case 'svg':
              e = 1;
              break;
            case 'math':
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    te(ae), I(ae, e);
  }
  function Ve() {
    te(ae), te(Se), te(ue);
  }
  function Et(e) {
    e.memoizedState !== null && I(xe, e);
    var t = ae.current,
      i = _g(t, e.type);
    t !== i && (I(Se, e), I(ae, i));
  }
  function rn(e) {
    Se.current === e && (te(ae), te(Se)),
      xe.current === e && (te(xe), (Tl._currentValue = P));
  }
  var ln = Object.prototype.hasOwnProperty,
    Dn = a.unstable_scheduleCallback,
    bi = a.unstable_cancelCallback,
    yu = a.unstable_shouldYield,
    vu = a.unstable_requestPaint,
    Yt = a.unstable_now,
    bu = a.unstable_getCurrentPriorityLevel,
    ka = a.unstable_ImmediatePriority,
    fh = a.unstable_UserBlockingPriority,
    us = a.unstable_NormalPriority,
    xS = a.unstable_LowPriority,
    dh = a.unstable_IdlePriority,
    wS = a.log,
    ES = a.unstable_setDisableYieldValue,
    Ur = null,
    zt = null;
  function Wn(e) {
    if (
      (typeof wS == 'function' && ES(e),
      zt && typeof zt.setStrictMode == 'function')
    )
      try {
        zt.setStrictMode(Ur, e);
      } catch {}
  }
  var Ut = Math.clz32 ? Math.clz32 : AS,
    RS = Math.log,
    OS = Math.LN2;
  function AS(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((RS(e) / OS) | 0)) | 0;
  }
  var cs = 256,
    fs = 4194304;
  function Ba(e) {
    var t = e & 42;
    if (t !== 0) return t;
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
        return 64;
      case 128:
        return 128;
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
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function ds(e, t, i) {
    var s = e.pendingLanes;
    if (s === 0) return 0;
    var u = 0,
      f = e.suspendedLanes,
      y = e.pingedLanes;
    e = e.warmLanes;
    var b = s & 134217727;
    return (
      b !== 0
        ? ((s = b & ~f),
          s !== 0
            ? (u = Ba(s))
            : ((y &= b),
              y !== 0
                ? (u = Ba(y))
                : i || ((i = b & ~e), i !== 0 && (u = Ba(i)))))
        : ((b = s & ~f),
          b !== 0
            ? (u = Ba(b))
            : y !== 0
              ? (u = Ba(y))
              : i || ((i = s & ~e), i !== 0 && (u = Ba(i)))),
      u === 0
        ? 0
        : t !== 0 &&
            t !== u &&
            (t & f) === 0 &&
            ((f = u & -u),
            (i = t & -t),
            f >= i || (f === 32 && (i & 4194048) !== 0))
          ? t
          : u
    );
  }
  function jr(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function TS(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
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
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function hh() {
    var e = cs;
    return (cs <<= 1), (cs & 4194048) === 0 && (cs = 256), e;
  }
  function ph() {
    var e = fs;
    return (fs <<= 1), (fs & 62914560) === 0 && (fs = 4194304), e;
  }
  function Su(e) {
    for (var t = [], i = 0; 31 > i; i++) t.push(e);
    return t;
  }
  function kr(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function CS(e, t, i, s, u, f) {
    var y = e.pendingLanes;
    (e.pendingLanes = i),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= i),
      (e.entangledLanes &= i),
      (e.errorRecoveryDisabledLanes &= i),
      (e.shellSuspendCounter = 0);
    var b = e.entanglements,
      T = e.expirationTimes,
      U = e.hiddenUpdates;
    for (i = y & ~i; 0 < i; ) {
      var K = 31 - Ut(i),
        X = 1 << K;
      (b[K] = 0), (T[K] = -1);
      var j = U[K];
      if (j !== null)
        for (U[K] = null, K = 0; K < j.length; K++) {
          var H = j[K];
          H !== null && (H.lane &= -536870913);
        }
      i &= ~X;
    }
    s !== 0 && mh(e, s, 0),
      f !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(y & ~t));
  }
  function mh(e, t, i) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var s = 31 - Ut(t);
    (e.entangledLanes |= t),
      (e.entanglements[s] = e.entanglements[s] | 1073741824 | (i & 4194090));
  }
  function gh(e, t) {
    var i = (e.entangledLanes |= t);
    for (e = e.entanglements; i; ) {
      var s = 31 - Ut(i),
        u = 1 << s;
      (u & t) | (e[s] & t) && (e[s] |= t), (i &= ~u);
    }
  }
  function xu(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
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
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function wu(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function yh() {
    var e = $.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : $g(e.type));
  }
  function MS(e, t) {
    var i = $.p;
    try {
      return ($.p = e), t();
    } finally {
      $.p = i;
    }
  }
  var ea = Math.random().toString(36).slice(2),
    ht = '__reactFiber$' + ea,
    Rt = '__reactProps$' + ea,
    Si = '__reactContainer$' + ea,
    Eu = '__reactEvents$' + ea,
    DS = '__reactListeners$' + ea,
    _S = '__reactHandles$' + ea,
    vh = '__reactResources$' + ea,
    Br = '__reactMarker$' + ea;
  function Ru(e) {
    delete e[ht], delete e[Rt], delete e[Eu], delete e[DS], delete e[_S];
  }
  function xi(e) {
    var t = e[ht];
    if (t) return t;
    for (var i = e.parentNode; i; ) {
      if ((t = i[Si] || i[ht])) {
        if (
          ((i = t.alternate),
          t.child !== null || (i !== null && i.child !== null))
        )
          for (e = Ug(e); e !== null; ) {
            if ((i = e[ht])) return i;
            e = Ug(e);
          }
        return t;
      }
      (e = i), (i = e.parentNode);
    }
    return null;
  }
  function wi(e) {
    if ((e = e[ht] || e[Si])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Hr(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(l(33));
  }
  function Ei(e) {
    var t = e[vh];
    return (
      t ||
        (t = e[vh] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function it(e) {
    e[Br] = !0;
  }
  var bh = new Set(),
    Sh = {};
  function Ha(e, t) {
    Ri(e, t), Ri(e + 'Capture', t);
  }
  function Ri(e, t) {
    for (Sh[e] = t, e = 0; e < t.length; e++) bh.add(t[e]);
  }
  var NS = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
    ),
    xh = {},
    wh = {};
  function LS(e) {
    return ln.call(wh, e)
      ? !0
      : ln.call(xh, e)
        ? !1
        : NS.test(e)
          ? (wh[e] = !0)
          : ((xh[e] = !0), !1);
  }
  function hs(e, t, i) {
    if (LS(t))
      if (i === null) e.removeAttribute(t);
      else {
        switch (typeof i) {
          case 'undefined':
          case 'function':
          case 'symbol':
            e.removeAttribute(t);
            return;
          case 'boolean':
            var s = t.toLowerCase().slice(0, 5);
            if (s !== 'data-' && s !== 'aria-') {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, '' + i);
      }
  }
  function ps(e, t, i) {
    if (i === null) e.removeAttribute(t);
    else {
      switch (typeof i) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, '' + i);
    }
  }
  function _n(e, t, i, s) {
    if (s === null) e.removeAttribute(i);
    else {
      switch (typeof s) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(i);
          return;
      }
      e.setAttributeNS(t, i, '' + s);
    }
  }
  var Ou, Eh;
  function Oi(e) {
    if (Ou === void 0)
      try {
        throw Error();
      } catch (i) {
        var t = i.stack.trim().match(/\n( *(at )?)/);
        (Ou = (t && t[1]) || ''),
          (Eh =
            -1 <
            i.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < i.stack.indexOf('@')
                ? '@unknown:0:0'
                : '');
      }
    return (
      `
` +
      Ou +
      e +
      Eh
    );
  }
  var Au = !1;
  function Tu(e, t) {
    if (!e || Au) return '';
    Au = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var s = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var X = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(X.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(X, []);
                } catch (H) {
                  var j = H;
                }
                Reflect.construct(e, [], X);
              } else {
                try {
                  X.call();
                } catch (H) {
                  j = H;
                }
                e.call(X.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (H) {
                j = H;
              }
              (X = e()) &&
                typeof X.catch == 'function' &&
                X.catch(function () {});
            }
          } catch (H) {
            if (H && j && typeof H.stack == 'string') return [H.stack, j.stack];
          }
          return [null, null];
        },
      };
      s.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var u = Object.getOwnPropertyDescriptor(
        s.DetermineComponentFrameRoot,
        'name',
      );
      u &&
        u.configurable &&
        Object.defineProperty(s.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        });
      var f = s.DetermineComponentFrameRoot(),
        y = f[0],
        b = f[1];
      if (y && b) {
        var T = y.split(`
`),
          U = b.split(`
`);
        for (
          u = s = 0;
          s < T.length && !T[s].includes('DetermineComponentFrameRoot');

        )
          s++;
        for (; u < U.length && !U[u].includes('DetermineComponentFrameRoot'); )
          u++;
        if (s === T.length || u === U.length)
          for (
            s = T.length - 1, u = U.length - 1;
            1 <= s && 0 <= u && T[s] !== U[u];

          )
            u--;
        for (; 1 <= s && 0 <= u; s--, u--)
          if (T[s] !== U[u]) {
            if (s !== 1 || u !== 1)
              do
                if ((s--, u--, 0 > u || T[s] !== U[u])) {
                  var K =
                    `
` + T[s].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      K.includes('<anonymous>') &&
                      (K = K.replace('<anonymous>', e.displayName)),
                    K
                  );
                }
              while (1 <= s && 0 <= u);
            break;
          }
      }
    } finally {
      (Au = !1), (Error.prepareStackTrace = i);
    }
    return (i = e ? e.displayName || e.name : '') ? Oi(i) : '';
  }
  function zS(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Oi(e.type);
      case 16:
        return Oi('Lazy');
      case 13:
        return Oi('Suspense');
      case 19:
        return Oi('SuspenseList');
      case 0:
      case 15:
        return Tu(e.type, !1);
      case 11:
        return Tu(e.type.render, !1);
      case 1:
        return Tu(e.type, !0);
      case 31:
        return Oi('Activity');
      default:
        return '';
    }
  }
  function Rh(e) {
    try {
      var t = '';
      do (t += zS(e)), (e = e.return);
      while (e);
      return t;
    } catch (i) {
      return (
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack
      );
    }
  }
  function Kt(e) {
    switch (typeof e) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return e;
      default:
        return '';
    }
  }
  function Oh(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === 'input' &&
      (t === 'checkbox' || t === 'radio')
    );
  }
  function US(e) {
    var t = Oh(e) ? 'checked' : 'value',
      i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      s = '' + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof i < 'u' &&
      typeof i.get == 'function' &&
      typeof i.set == 'function'
    ) {
      var u = i.get,
        f = i.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (y) {
            (s = '' + y), f.call(this, y);
          },
        }),
        Object.defineProperty(e, t, { enumerable: i.enumerable }),
        {
          getValue: function () {
            return s;
          },
          setValue: function (y) {
            s = '' + y;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function ms(e) {
    e._valueTracker || (e._valueTracker = US(e));
  }
  function Ah(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var i = t.getValue(),
      s = '';
    return (
      e && (s = Oh(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = s),
      e !== i ? (t.setValue(e), !0) : !1
    );
  }
  function gs(e) {
    if (
      ((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var jS = /[\n"\\]/g;
  function Ft(e) {
    return e.replace(jS, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function Cu(e, t, i, s, u, f, y, b) {
    (e.name = ''),
      y != null &&
      typeof y != 'function' &&
      typeof y != 'symbol' &&
      typeof y != 'boolean'
        ? (e.type = y)
        : e.removeAttribute('type'),
      t != null
        ? y === 'number'
          ? ((t === 0 && e.value === '') || e.value != t) &&
            (e.value = '' + Kt(t))
          : e.value !== '' + Kt(t) && (e.value = '' + Kt(t))
        : (y !== 'submit' && y !== 'reset') || e.removeAttribute('value'),
      t != null
        ? Mu(e, y, Kt(t))
        : i != null
          ? Mu(e, y, Kt(i))
          : s != null && e.removeAttribute('value'),
      u == null && f != null && (e.defaultChecked = !!f),
      u != null &&
        (e.checked = u && typeof u != 'function' && typeof u != 'symbol'),
      b != null &&
      typeof b != 'function' &&
      typeof b != 'symbol' &&
      typeof b != 'boolean'
        ? (e.name = '' + Kt(b))
        : e.removeAttribute('name');
  }
  function Th(e, t, i, s, u, f, y, b) {
    if (
      (f != null &&
        typeof f != 'function' &&
        typeof f != 'symbol' &&
        typeof f != 'boolean' &&
        (e.type = f),
      t != null || i != null)
    ) {
      if (!((f !== 'submit' && f !== 'reset') || t != null)) return;
      (i = i != null ? '' + Kt(i) : ''),
        (t = t != null ? '' + Kt(t) : i),
        b || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (s = s ?? u),
      (s = typeof s != 'function' && typeof s != 'symbol' && !!s),
      (e.checked = b ? e.checked : !!s),
      (e.defaultChecked = !!s),
      y != null &&
        typeof y != 'function' &&
        typeof y != 'symbol' &&
        typeof y != 'boolean' &&
        (e.name = y);
  }
  function Mu(e, t, i) {
    (t === 'number' && gs(e.ownerDocument) === e) ||
      e.defaultValue === '' + i ||
      (e.defaultValue = '' + i);
  }
  function Ai(e, t, i, s) {
    if (((e = e.options), t)) {
      t = {};
      for (var u = 0; u < i.length; u++) t['$' + i[u]] = !0;
      for (i = 0; i < e.length; i++)
        (u = t.hasOwnProperty('$' + e[i].value)),
          e[i].selected !== u && (e[i].selected = u),
          u && s && (e[i].defaultSelected = !0);
    } else {
      for (i = '' + Kt(i), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === i) {
          (e[u].selected = !0), s && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ch(e, t, i) {
    if (
      t != null &&
      ((t = '' + Kt(t)), t !== e.value && (e.value = t), i == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = i != null ? '' + Kt(i) : '';
  }
  function Mh(e, t, i, s) {
    if (t == null) {
      if (s != null) {
        if (i != null) throw Error(l(92));
        if (me(s)) {
          if (1 < s.length) throw Error(l(93));
          s = s[0];
        }
        i = s;
      }
      i == null && (i = ''), (t = i);
    }
    (i = Kt(t)),
      (e.defaultValue = i),
      (s = e.textContent),
      s === i && s !== '' && s !== null && (e.value = s);
  }
  function Ti(e, t) {
    if (t) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var kS = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' ',
    ),
  );
  function Dh(e, t, i) {
    var s = t.indexOf('--') === 0;
    i == null || typeof i == 'boolean' || i === ''
      ? s
        ? e.setProperty(t, '')
        : t === 'float'
          ? (e.cssFloat = '')
          : (e[t] = '')
      : s
        ? e.setProperty(t, i)
        : typeof i != 'number' || i === 0 || kS.has(t)
          ? t === 'float'
            ? (e.cssFloat = i)
            : (e[t] = ('' + i).trim())
          : (e[t] = i + 'px');
  }
  function _h(e, t, i) {
    if (t != null && typeof t != 'object') throw Error(l(62));
    if (((e = e.style), i != null)) {
      for (var s in i)
        !i.hasOwnProperty(s) ||
          (t != null && t.hasOwnProperty(s)) ||
          (s.indexOf('--') === 0
            ? e.setProperty(s, '')
            : s === 'float'
              ? (e.cssFloat = '')
              : (e[s] = ''));
      for (var u in t)
        (s = t[u]), t.hasOwnProperty(u) && i[u] !== s && Dh(e, u, s);
    } else for (var f in t) t.hasOwnProperty(f) && Dh(e, f, t[f]);
  }
  function Du(e) {
    if (e.indexOf('-') === -1) return !1;
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var BS = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height'],
    ]),
    HS =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ys(e) {
    return HS.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var _u = null;
  function Nu(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Ci = null,
    Mi = null;
  function Nh(e) {
    var t = wi(e);
    if (t && (e = t.stateNode)) {
      var i = e[Rt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (Cu(
              e,
              i.value,
              i.defaultValue,
              i.defaultValue,
              i.checked,
              i.defaultChecked,
              i.type,
              i.name,
            ),
            (t = i.name),
            i.type === 'radio' && t != null)
          ) {
            for (i = e; i.parentNode; ) i = i.parentNode;
            for (
              i = i.querySelectorAll(
                'input[name="' + Ft('' + t) + '"][type="radio"]',
              ),
                t = 0;
              t < i.length;
              t++
            ) {
              var s = i[t];
              if (s !== e && s.form === e.form) {
                var u = s[Rt] || null;
                if (!u) throw Error(l(90));
                Cu(
                  s,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name,
                );
              }
            }
            for (t = 0; t < i.length; t++)
              (s = i[t]), s.form === e.form && Ah(s);
          }
          break e;
        case 'textarea':
          Ch(e, i.value, i.defaultValue);
          break e;
        case 'select':
          (t = i.value), t != null && Ai(e, !!i.multiple, t, !1);
      }
    }
  }
  var Lu = !1;
  function Lh(e, t, i) {
    if (Lu) return e(t, i);
    Lu = !0;
    try {
      var s = e(t);
      return s;
    } finally {
      if (
        ((Lu = !1),
        (Ci !== null || Mi !== null) &&
          (no(), Ci && ((t = Ci), (e = Mi), (Mi = Ci = null), Nh(t), e)))
      )
        for (t = 0; t < e.length; t++) Nh(e[t]);
    }
  }
  function qr(e, t) {
    var i = e.stateNode;
    if (i === null) return null;
    var s = i[Rt] || null;
    if (s === null) return null;
    i = s[t];
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        (s = !s.disabled) ||
          ((e = e.type),
          (s = !(
            e === 'button' ||
            e === 'input' ||
            e === 'select' ||
            e === 'textarea'
          ))),
          (e = !s);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (i && typeof i != 'function') throw Error(l(231, t, typeof i));
    return i;
  }
  var Nn = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    zu = !1;
  if (Nn)
    try {
      var Gr = {};
      Object.defineProperty(Gr, 'passive', {
        get: function () {
          zu = !0;
        },
      }),
        window.addEventListener('test', Gr, Gr),
        window.removeEventListener('test', Gr, Gr);
    } catch {
      zu = !1;
    }
  var ta = null,
    Uu = null,
    vs = null;
  function zh() {
    if (vs) return vs;
    var e,
      t = Uu,
      i = t.length,
      s,
      u = 'value' in ta ? ta.value : ta.textContent,
      f = u.length;
    for (e = 0; e < i && t[e] === u[e]; e++);
    var y = i - e;
    for (s = 1; s <= y && t[i - s] === u[f - s]; s++);
    return (vs = u.slice(e, 1 < s ? 1 - s : void 0));
  }
  function bs(e) {
    var t = e.keyCode;
    return (
      'charCode' in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ss() {
    return !0;
  }
  function Uh() {
    return !1;
  }
  function Ot(e) {
    function t(i, s, u, f, y) {
      (this._reactName = i),
        (this._targetInst = u),
        (this.type = s),
        (this.nativeEvent = f),
        (this.target = y),
        (this.currentTarget = null);
      for (var b in e)
        e.hasOwnProperty(b) && ((i = e[b]), (this[b] = i ? i(f) : f[b]));
      return (
        (this.isDefaultPrevented = (
          f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1
        )
          ? Ss
          : Uh),
        (this.isPropagationStopped = Uh),
        this
      );
    }
    return (
      g(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i &&
            (i.preventDefault
              ? i.preventDefault()
              : typeof i.returnValue != 'unknown' && (i.returnValue = !1),
            (this.isDefaultPrevented = Ss));
        },
        stopPropagation: function () {
          var i = this.nativeEvent;
          i &&
            (i.stopPropagation
              ? i.stopPropagation()
              : typeof i.cancelBubble != 'unknown' && (i.cancelBubble = !0),
            (this.isPropagationStopped = Ss));
        },
        persist: function () {},
        isPersistent: Ss,
      }),
      t
    );
  }
  var qa = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    xs = Ot(qa),
    Pr = g({}, qa, { view: 0, detail: 0 }),
    qS = Ot(Pr),
    ju,
    ku,
    Vr,
    ws = g({}, Pr, {
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
      getModifierState: Hu,
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
        return 'movementX' in e
          ? e.movementX
          : (e !== Vr &&
              (Vr && e.type === 'mousemove'
                ? ((ju = e.screenX - Vr.screenX), (ku = e.screenY - Vr.screenY))
                : (ku = ju = 0),
              (Vr = e)),
            ju);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : ku;
      },
    }),
    jh = Ot(ws),
    GS = g({}, ws, { dataTransfer: 0 }),
    PS = Ot(GS),
    VS = g({}, Pr, { relatedTarget: 0 }),
    Bu = Ot(VS),
    QS = g({}, qa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    YS = Ot(QS),
    KS = g({}, qa, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    FS = Ot(KS),
    XS = g({}, qa, { data: 0 }),
    kh = Ot(XS),
    ZS = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    $S = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    JS = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
  function IS(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = JS[e])
        ? !!t[e]
        : !1;
  }
  function Hu() {
    return IS;
  }
  var WS = g({}, Pr, {
      key: function (e) {
        if (e.key) {
          var t = ZS[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = bs(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? $S[e.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Hu,
      charCode: function (e) {
        return e.type === 'keypress' ? bs(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? bs(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    ex = Ot(WS),
    tx = g({}, ws, {
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
    Bh = Ot(tx),
    nx = g({}, Pr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Hu,
    }),
    ax = Ot(nx),
    ix = g({}, qa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    rx = Ot(ix),
    lx = g({}, ws, {
      deltaX: function (e) {
        return 'deltaX' in e
          ? e.deltaX
          : 'wheelDeltaX' in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
            ? -e.wheelDeltaY
            : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    sx = Ot(lx),
    ox = g({}, qa, { newState: 0, oldState: 0 }),
    ux = Ot(ox),
    cx = [9, 13, 27, 32],
    qu = Nn && 'CompositionEvent' in window,
    Qr = null;
  Nn && 'documentMode' in document && (Qr = document.documentMode);
  var fx = Nn && 'TextEvent' in window && !Qr,
    Hh = Nn && (!qu || (Qr && 8 < Qr && 11 >= Qr)),
    qh = ' ',
    Gh = !1;
  function Ph(e, t) {
    switch (e) {
      case 'keyup':
        return cx.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function Vh(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
  }
  var Di = !1;
  function dx(e, t) {
    switch (e) {
      case 'compositionend':
        return Vh(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Gh = !0), qh);
      case 'textInput':
        return (e = t.data), e === qh && Gh ? null : e;
      default:
        return null;
    }
  }
  function hx(e, t) {
    if (Di)
      return e === 'compositionend' || (!qu && Ph(e, t))
        ? ((e = zh()), (vs = Uu = ta = null), (Di = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return Hh && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var px = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
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
  function Qh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!px[e.type] : t === 'textarea';
  }
  function Yh(e, t, i, s) {
    Ci ? (Mi ? Mi.push(s) : (Mi = [s])) : (Ci = s),
      (t = oo(t, 'onChange')),
      0 < t.length &&
        ((i = new xs('onChange', 'change', null, i, s)),
        e.push({ event: i, listeners: t }));
  }
  var Yr = null,
    Kr = null;
  function mx(e) {
    Og(e, 0);
  }
  function Es(e) {
    var t = Hr(e);
    if (Ah(t)) return e;
  }
  function Kh(e, t) {
    if (e === 'change') return t;
  }
  var Fh = !1;
  if (Nn) {
    var Gu;
    if (Nn) {
      var Pu = 'oninput' in document;
      if (!Pu) {
        var Xh = document.createElement('div');
        Xh.setAttribute('oninput', 'return;'),
          (Pu = typeof Xh.oninput == 'function');
      }
      Gu = Pu;
    } else Gu = !1;
    Fh = Gu && (!document.documentMode || 9 < document.documentMode);
  }
  function Zh() {
    Yr && (Yr.detachEvent('onpropertychange', $h), (Kr = Yr = null));
  }
  function $h(e) {
    if (e.propertyName === 'value' && Es(Kr)) {
      var t = [];
      Yh(t, Kr, e, Nu(e)), Lh(mx, t);
    }
  }
  function gx(e, t, i) {
    e === 'focusin'
      ? (Zh(), (Yr = t), (Kr = i), Yr.attachEvent('onpropertychange', $h))
      : e === 'focusout' && Zh();
  }
  function yx(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return Es(Kr);
  }
  function vx(e, t) {
    if (e === 'click') return Es(t);
  }
  function bx(e, t) {
    if (e === 'input' || e === 'change') return Es(t);
  }
  function Sx(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var jt = typeof Object.is == 'function' ? Object.is : Sx;
  function Fr(e, t) {
    if (jt(e, t)) return !0;
    if (
      typeof e != 'object' ||
      e === null ||
      typeof t != 'object' ||
      t === null
    )
      return !1;
    var i = Object.keys(e),
      s = Object.keys(t);
    if (i.length !== s.length) return !1;
    for (s = 0; s < i.length; s++) {
      var u = i[s];
      if (!ln.call(t, u) || !jt(e[u], t[u])) return !1;
    }
    return !0;
  }
  function Jh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ih(e, t) {
    var i = Jh(e);
    e = 0;
    for (var s; i; ) {
      if (i.nodeType === 3) {
        if (((s = e + i.textContent.length), e <= t && s >= t))
          return { node: i, offset: t - e };
        e = s;
      }
      e: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = Jh(i);
    }
  }
  function Wh(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Wh(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function ep(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = gs(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof t.contentWindow.location.href == 'string';
      } catch {
        i = !1;
      }
      if (i) e = t.contentWindow;
      else break;
      t = gs(e.document);
    }
    return t;
  }
  function Vu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  var xx = Nn && 'documentMode' in document && 11 >= document.documentMode,
    _i = null,
    Qu = null,
    Xr = null,
    Yu = !1;
  function tp(e, t, i) {
    var s =
      i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    Yu ||
      _i == null ||
      _i !== gs(s) ||
      ((s = _i),
      'selectionStart' in s && Vu(s)
        ? (s = { start: s.selectionStart, end: s.selectionEnd })
        : ((s = (
            (s.ownerDocument && s.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (s = {
            anchorNode: s.anchorNode,
            anchorOffset: s.anchorOffset,
            focusNode: s.focusNode,
            focusOffset: s.focusOffset,
          })),
      (Xr && Fr(Xr, s)) ||
        ((Xr = s),
        (s = oo(Qu, 'onSelect')),
        0 < s.length &&
          ((t = new xs('onSelect', 'select', null, t, i)),
          e.push({ event: t, listeners: s }),
          (t.target = _i))));
  }
  function Ga(e, t) {
    var i = {};
    return (
      (i[e.toLowerCase()] = t.toLowerCase()),
      (i['Webkit' + e] = 'webkit' + t),
      (i['Moz' + e] = 'moz' + t),
      i
    );
  }
  var Ni = {
      animationend: Ga('Animation', 'AnimationEnd'),
      animationiteration: Ga('Animation', 'AnimationIteration'),
      animationstart: Ga('Animation', 'AnimationStart'),
      transitionrun: Ga('Transition', 'TransitionRun'),
      transitionstart: Ga('Transition', 'TransitionStart'),
      transitioncancel: Ga('Transition', 'TransitionCancel'),
      transitionend: Ga('Transition', 'TransitionEnd'),
    },
    Ku = {},
    np = {};
  Nn &&
    ((np = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Ni.animationend.animation,
      delete Ni.animationiteration.animation,
      delete Ni.animationstart.animation),
    'TransitionEvent' in window || delete Ni.transitionend.transition);
  function Pa(e) {
    if (Ku[e]) return Ku[e];
    if (!Ni[e]) return e;
    var t = Ni[e],
      i;
    for (i in t) if (t.hasOwnProperty(i) && i in np) return (Ku[e] = t[i]);
    return e;
  }
  var ap = Pa('animationend'),
    ip = Pa('animationiteration'),
    rp = Pa('animationstart'),
    wx = Pa('transitionrun'),
    Ex = Pa('transitionstart'),
    Rx = Pa('transitioncancel'),
    lp = Pa('transitionend'),
    sp = new Map(),
    Fu =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' ',
      );
  Fu.push('scrollEnd');
  function sn(e, t) {
    sp.set(e, t), Ha(t, [e]);
  }
  var op = new WeakMap();
  function Xt(e, t) {
    if (typeof e == 'object' && e !== null) {
      var i = op.get(e);
      return i !== void 0
        ? i
        : ((t = { value: e, source: t, stack: Rh(t) }), op.set(e, t), t);
    }
    return { value: e, source: t, stack: Rh(t) };
  }
  var Zt = [],
    Li = 0,
    Xu = 0;
  function Rs() {
    for (var e = Li, t = (Xu = Li = 0); t < e; ) {
      var i = Zt[t];
      Zt[t++] = null;
      var s = Zt[t];
      Zt[t++] = null;
      var u = Zt[t];
      Zt[t++] = null;
      var f = Zt[t];
      if (((Zt[t++] = null), s !== null && u !== null)) {
        var y = s.pending;
        y === null ? (u.next = u) : ((u.next = y.next), (y.next = u)),
          (s.pending = u);
      }
      f !== 0 && up(i, u, f);
    }
  }
  function Os(e, t, i, s) {
    (Zt[Li++] = e),
      (Zt[Li++] = t),
      (Zt[Li++] = i),
      (Zt[Li++] = s),
      (Xu |= s),
      (e.lanes |= s),
      (e = e.alternate),
      e !== null && (e.lanes |= s);
  }
  function Zu(e, t, i, s) {
    return Os(e, t, i, s), As(e);
  }
  function zi(e, t) {
    return Os(e, null, null, t), As(e);
  }
  function up(e, t, i) {
    e.lanes |= i;
    var s = e.alternate;
    s !== null && (s.lanes |= i);
    for (var u = !1, f = e.return; f !== null; )
      (f.childLanes |= i),
        (s = f.alternate),
        s !== null && (s.childLanes |= i),
        f.tag === 22 &&
          ((e = f.stateNode), e === null || e._visibility & 1 || (u = !0)),
        (e = f),
        (f = f.return);
    return e.tag === 3
      ? ((f = e.stateNode),
        u &&
          t !== null &&
          ((u = 31 - Ut(i)),
          (e = f.hiddenUpdates),
          (s = e[u]),
          s === null ? (e[u] = [t]) : s.push(t),
          (t.lane = i | 536870912)),
        f)
      : null;
  }
  function As(e) {
    if (50 < bl) throw ((bl = 0), (tf = null), Error(l(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ui = {};
  function Ox(e, t, i, s) {
    (this.tag = e),
      (this.key = i),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = s),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function kt(e, t, i, s) {
    return new Ox(e, t, i, s);
  }
  function $u(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Ln(e, t) {
    var i = e.alternate;
    return (
      i === null
        ? ((i = kt(e.tag, t, e.key, e.mode)),
          (i.elementType = e.elementType),
          (i.type = e.type),
          (i.stateNode = e.stateNode),
          (i.alternate = e),
          (e.alternate = i))
        : ((i.pendingProps = t),
          (i.type = e.type),
          (i.flags = 0),
          (i.subtreeFlags = 0),
          (i.deletions = null)),
      (i.flags = e.flags & 65011712),
      (i.childLanes = e.childLanes),
      (i.lanes = e.lanes),
      (i.child = e.child),
      (i.memoizedProps = e.memoizedProps),
      (i.memoizedState = e.memoizedState),
      (i.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (i.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (i.sibling = e.sibling),
      (i.index = e.index),
      (i.ref = e.ref),
      (i.refCleanup = e.refCleanup),
      i
    );
  }
  function cp(e, t) {
    e.flags &= 65011714;
    var i = e.alternate;
    return (
      i === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = i.childLanes),
          (e.lanes = i.lanes),
          (e.child = i.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = i.memoizedProps),
          (e.memoizedState = i.memoizedState),
          (e.updateQueue = i.updateQueue),
          (e.type = i.type),
          (t = i.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Ts(e, t, i, s, u, f) {
    var y = 0;
    if (((s = e), typeof e == 'function')) $u(e) && (y = 1);
    else if (typeof e == 'string')
      y = T1(e, i, ae.current)
        ? 26
        : e === 'html' || e === 'head' || e === 'body'
          ? 27
          : 5;
    else
      e: switch (e) {
        case W:
          return (e = kt(31, i, t, u)), (e.elementType = W), (e.lanes = f), e;
        case w:
          return Va(i.children, u, f, t);
        case x:
          (y = 8), (u |= 24);
          break;
        case R:
          return (
            (e = kt(12, i, t, u | 2)), (e.elementType = R), (e.lanes = f), e
          );
        case B:
          return (e = kt(13, i, t, u)), (e.elementType = B), (e.lanes = f), e;
        case J:
          return (e = kt(19, i, t, u)), (e.elementType = J), (e.lanes = f), e;
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case _:
              case L:
                y = 10;
                break e;
              case k:
                y = 9;
                break e;
              case q:
                y = 11;
                break e;
              case Z:
                y = 14;
                break e;
              case G:
                (y = 16), (s = null);
                break e;
            }
          (y = 29),
            (i = Error(l(130, e === null ? 'null' : typeof e, ''))),
            (s = null);
      }
    return (
      (t = kt(y, i, t, u)), (t.elementType = e), (t.type = s), (t.lanes = f), t
    );
  }
  function Va(e, t, i, s) {
    return (e = kt(7, e, s, t)), (e.lanes = i), e;
  }
  function Ju(e, t, i) {
    return (e = kt(6, e, null, t)), (e.lanes = i), e;
  }
  function Iu(e, t, i) {
    return (
      (t = kt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = i),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var ji = [],
    ki = 0,
    Cs = null,
    Ms = 0,
    $t = [],
    Jt = 0,
    Qa = null,
    zn = 1,
    Un = '';
  function Ya(e, t) {
    (ji[ki++] = Ms), (ji[ki++] = Cs), (Cs = e), (Ms = t);
  }
  function fp(e, t, i) {
    ($t[Jt++] = zn), ($t[Jt++] = Un), ($t[Jt++] = Qa), (Qa = e);
    var s = zn;
    e = Un;
    var u = 32 - Ut(s) - 1;
    (s &= ~(1 << u)), (i += 1);
    var f = 32 - Ut(t) + u;
    if (30 < f) {
      var y = u - (u % 5);
      (f = (s & ((1 << y) - 1)).toString(32)),
        (s >>= y),
        (u -= y),
        (zn = (1 << (32 - Ut(t) + u)) | (i << u) | s),
        (Un = f + e);
    } else (zn = (1 << f) | (i << u) | s), (Un = e);
  }
  function Wu(e) {
    e.return !== null && (Ya(e, 1), fp(e, 1, 0));
  }
  function ec(e) {
    for (; e === Cs; )
      (Cs = ji[--ki]), (ji[ki] = null), (Ms = ji[--ki]), (ji[ki] = null);
    for (; e === Qa; )
      (Qa = $t[--Jt]),
        ($t[Jt] = null),
        (Un = $t[--Jt]),
        ($t[Jt] = null),
        (zn = $t[--Jt]),
        ($t[Jt] = null);
  }
  var vt = null,
    Fe = null,
    Ue = !1,
    Ka = null,
    gn = !1,
    tc = Error(l(519));
  function Fa(e) {
    var t = Error(l(418, ''));
    throw (Jr(Xt(t, e)), tc);
  }
  function dp(e) {
    var t = e.stateNode,
      i = e.type,
      s = e.memoizedProps;
    switch (((t[ht] = e), (t[Rt] = s), i)) {
      case 'dialog':
        Ce('cancel', t), Ce('close', t);
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        Ce('load', t);
        break;
      case 'video':
      case 'audio':
        for (i = 0; i < xl.length; i++) Ce(xl[i], t);
        break;
      case 'source':
        Ce('error', t);
        break;
      case 'img':
      case 'image':
      case 'link':
        Ce('error', t), Ce('load', t);
        break;
      case 'details':
        Ce('toggle', t);
        break;
      case 'input':
        Ce('invalid', t),
          Th(
            t,
            s.value,
            s.defaultValue,
            s.checked,
            s.defaultChecked,
            s.type,
            s.name,
            !0,
          ),
          ms(t);
        break;
      case 'select':
        Ce('invalid', t);
        break;
      case 'textarea':
        Ce('invalid', t), Mh(t, s.value, s.defaultValue, s.children), ms(t);
    }
    (i = s.children),
      (typeof i != 'string' && typeof i != 'number' && typeof i != 'bigint') ||
      t.textContent === '' + i ||
      s.suppressHydrationWarning === !0 ||
      Mg(t.textContent, i)
        ? (s.popover != null && (Ce('beforetoggle', t), Ce('toggle', t)),
          s.onScroll != null && Ce('scroll', t),
          s.onScrollEnd != null && Ce('scrollend', t),
          s.onClick != null && (t.onclick = uo),
          (t = !0))
        : (t = !1),
      t || Fa(e);
  }
  function hp(e) {
    for (vt = e.return; vt; )
      switch (vt.tag) {
        case 5:
        case 13:
          gn = !1;
          return;
        case 27:
        case 3:
          gn = !0;
          return;
        default:
          vt = vt.return;
      }
  }
  function Zr(e) {
    if (e !== vt) return !1;
    if (!Ue) return hp(e), (Ue = !0), !1;
    var t = e.tag,
      i;
    if (
      ((i = t !== 3 && t !== 27) &&
        ((i = t === 5) &&
          ((i = e.type),
          (i =
            !(i !== 'form' && i !== 'button') || vf(e.type, e.memoizedProps))),
        (i = !i)),
      i && Fe && Fa(e),
      hp(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(l(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((i = e.data), i === '/$')) {
              if (t === 0) {
                Fe = un(e.nextSibling);
                break e;
              }
              t--;
            } else (i !== '$' && i !== '$!' && i !== '$?') || t++;
          e = e.nextSibling;
        }
        Fe = null;
      }
    } else
      t === 27
        ? ((t = Fe), ya(e.type) ? ((e = wf), (wf = null), (Fe = e)) : (Fe = t))
        : (Fe = vt ? un(e.stateNode.nextSibling) : null);
    return !0;
  }
  function $r() {
    (Fe = vt = null), (Ue = !1);
  }
  function pp() {
    var e = Ka;
    return (
      e !== null &&
        (Ct === null ? (Ct = e) : Ct.push.apply(Ct, e), (Ka = null)),
      e
    );
  }
  function Jr(e) {
    Ka === null ? (Ka = [e]) : Ka.push(e);
  }
  var nc = V(null),
    Xa = null,
    jn = null;
  function na(e, t, i) {
    I(nc, t._currentValue), (t._currentValue = i);
  }
  function kn(e) {
    (e._currentValue = nc.current), te(nc);
  }
  function ac(e, t, i) {
    for (; e !== null; ) {
      var s = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), s !== null && (s.childLanes |= t))
          : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t),
        e === i)
      )
        break;
      e = e.return;
    }
  }
  function ic(e, t, i, s) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null; ) {
      var f = u.dependencies;
      if (f !== null) {
        var y = u.child;
        f = f.firstContext;
        e: for (; f !== null; ) {
          var b = f;
          f = u;
          for (var T = 0; T < t.length; T++)
            if (b.context === t[T]) {
              (f.lanes |= i),
                (b = f.alternate),
                b !== null && (b.lanes |= i),
                ac(f.return, i, e),
                s || (y = null);
              break e;
            }
          f = b.next;
        }
      } else if (u.tag === 18) {
        if (((y = u.return), y === null)) throw Error(l(341));
        (y.lanes |= i),
          (f = y.alternate),
          f !== null && (f.lanes |= i),
          ac(y, i, e),
          (y = null);
      } else y = u.child;
      if (y !== null) y.return = u;
      else
        for (y = u; y !== null; ) {
          if (y === e) {
            y = null;
            break;
          }
          if (((u = y.sibling), u !== null)) {
            (u.return = y.return), (y = u);
            break;
          }
          y = y.return;
        }
      u = y;
    }
  }
  function Ir(e, t, i, s) {
    e = null;
    for (var u = t, f = !1; u !== null; ) {
      if (!f) {
        if ((u.flags & 524288) !== 0) f = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var y = u.alternate;
        if (y === null) throw Error(l(387));
        if (((y = y.memoizedProps), y !== null)) {
          var b = u.type;
          jt(u.pendingProps.value, y.value) ||
            (e !== null ? e.push(b) : (e = [b]));
        }
      } else if (u === xe.current) {
        if (((y = u.alternate), y === null)) throw Error(l(387));
        y.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (e !== null ? e.push(Tl) : (e = [Tl]));
      }
      u = u.return;
    }
    e !== null && ic(t, e, i, s), (t.flags |= 262144);
  }
  function Ds(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!jt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Za(e) {
    (Xa = e),
      (jn = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function pt(e) {
    return mp(Xa, e);
  }
  function _s(e, t) {
    return Xa === null && Za(e), mp(e, t);
  }
  function mp(e, t) {
    var i = t._currentValue;
    if (((t = { context: t, memoizedValue: i, next: null }), jn === null)) {
      if (e === null) throw Error(l(308));
      (jn = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288);
    } else jn = jn.next = t;
    return i;
  }
  var Ax =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (i, s) {
                  e.push(s);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (i) {
                  return i();
                });
            };
          },
    Tx = a.unstable_scheduleCallback,
    Cx = a.unstable_NormalPriority,
    tt = {
      $$typeof: L,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function rc() {
    return { controller: new Ax(), data: new Map(), refCount: 0 };
  }
  function Wr(e) {
    e.refCount--,
      e.refCount === 0 &&
        Tx(Cx, function () {
          e.controller.abort();
        });
  }
  var el = null,
    lc = 0,
    Bi = 0,
    Hi = null;
  function Mx(e, t) {
    if (el === null) {
      var i = (el = []);
      (lc = 0),
        (Bi = uf()),
        (Hi = {
          status: 'pending',
          value: void 0,
          then: function (s) {
            i.push(s);
          },
        });
    }
    return lc++, t.then(gp, gp), t;
  }
  function gp() {
    if (--lc === 0 && el !== null) {
      Hi !== null && (Hi.status = 'fulfilled');
      var e = el;
      (el = null), (Bi = 0), (Hi = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Dx(e, t) {
    var i = [],
      s = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (u) {
          i.push(u);
        },
      };
    return (
      e.then(
        function () {
          (s.status = 'fulfilled'), (s.value = t);
          for (var u = 0; u < i.length; u++) (0, i[u])(t);
        },
        function (u) {
          for (s.status = 'rejected', s.reason = u, u = 0; u < i.length; u++)
            (0, i[u])(void 0);
        },
      ),
      s
    );
  }
  var yp = N.S;
  N.S = function (e, t) {
    typeof t == 'object' &&
      t !== null &&
      typeof t.then == 'function' &&
      Mx(e, t),
      yp !== null && yp(e, t);
  };
  var $a = V(null);
  function sc() {
    var e = $a.current;
    return e !== null ? e : Qe.pooledCache;
  }
  function Ns(e, t) {
    t === null ? I($a, $a.current) : I($a, t.pool);
  }
  function vp() {
    var e = sc();
    return e === null ? null : { parent: tt._currentValue, pool: e };
  }
  var tl = Error(l(460)),
    bp = Error(l(474)),
    Ls = Error(l(542)),
    oc = { then: function () {} };
  function Sp(e) {
    return (e = e.status), e === 'fulfilled' || e === 'rejected';
  }
  function zs() {}
  function xp(e, t, i) {
    switch (
      ((i = e[i]),
      i === void 0 ? e.push(t) : i !== t && (t.then(zs, zs), (t = i)),
      t.status)
    ) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), Ep(e), e);
      default:
        if (typeof t.status == 'string') t.then(zs, zs);
        else {
          if (((e = Qe), e !== null && 100 < e.shellSuspendCounter))
            throw Error(l(482));
          (e = t),
            (e.status = 'pending'),
            e.then(
              function (s) {
                if (t.status === 'pending') {
                  var u = t;
                  (u.status = 'fulfilled'), (u.value = s);
                }
              },
              function (s) {
                if (t.status === 'pending') {
                  var u = t;
                  (u.status = 'rejected'), (u.reason = s);
                }
              },
            );
        }
        switch (t.status) {
          case 'fulfilled':
            return t.value;
          case 'rejected':
            throw ((e = t.reason), Ep(e), e);
        }
        throw ((nl = t), tl);
    }
  }
  var nl = null;
  function wp() {
    if (nl === null) throw Error(l(459));
    var e = nl;
    return (nl = null), e;
  }
  function Ep(e) {
    if (e === tl || e === Ls) throw Error(l(483));
  }
  var aa = !1;
  function uc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function cc(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function ia(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ra(e, t, i) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (((s = s.shared), (ke & 2) !== 0)) {
      var u = s.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (s.pending = t),
        (t = As(e)),
        up(e, null, i),
        t
      );
    }
    return Os(e, s, t, i), As(e);
  }
  function al(e, t, i) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (i & 4194048) !== 0))
    ) {
      var s = t.lanes;
      (s &= e.pendingLanes), (i |= s), (t.lanes = i), gh(e, i);
    }
  }
  function fc(e, t) {
    var i = e.updateQueue,
      s = e.alternate;
    if (s !== null && ((s = s.updateQueue), i === s)) {
      var u = null,
        f = null;
      if (((i = i.firstBaseUpdate), i !== null)) {
        do {
          var y = {
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null,
          };
          f === null ? (u = f = y) : (f = f.next = y), (i = i.next);
        } while (i !== null);
        f === null ? (u = f = t) : (f = f.next = t);
      } else u = f = t;
      (i = {
        baseState: s.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: f,
        shared: s.shared,
        callbacks: s.callbacks,
      }),
        (e.updateQueue = i);
      return;
    }
    (e = i.lastBaseUpdate),
      e === null ? (i.firstBaseUpdate = t) : (e.next = t),
      (i.lastBaseUpdate = t);
  }
  var dc = !1;
  function il() {
    if (dc) {
      var e = Hi;
      if (e !== null) throw e;
    }
  }
  function rl(e, t, i, s) {
    dc = !1;
    var u = e.updateQueue;
    aa = !1;
    var f = u.firstBaseUpdate,
      y = u.lastBaseUpdate,
      b = u.shared.pending;
    if (b !== null) {
      u.shared.pending = null;
      var T = b,
        U = T.next;
      (T.next = null), y === null ? (f = U) : (y.next = U), (y = T);
      var K = e.alternate;
      K !== null &&
        ((K = K.updateQueue),
        (b = K.lastBaseUpdate),
        b !== y &&
          (b === null ? (K.firstBaseUpdate = U) : (b.next = U),
          (K.lastBaseUpdate = T)));
    }
    if (f !== null) {
      var X = u.baseState;
      (y = 0), (K = U = T = null), (b = f);
      do {
        var j = b.lane & -536870913,
          H = j !== b.lane;
        if (H ? (_e & j) === j : (s & j) === j) {
          j !== 0 && j === Bi && (dc = !0),
            K !== null &&
              (K = K.next =
                {
                  lane: 0,
                  tag: b.tag,
                  payload: b.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var ge = e,
              he = b;
            j = t;
            var Ge = i;
            switch (he.tag) {
              case 1:
                if (((ge = he.payload), typeof ge == 'function')) {
                  X = ge.call(Ge, X, j);
                  break e;
                }
                X = ge;
                break e;
              case 3:
                ge.flags = (ge.flags & -65537) | 128;
              case 0:
                if (
                  ((ge = he.payload),
                  (j = typeof ge == 'function' ? ge.call(Ge, X, j) : ge),
                  j == null)
                )
                  break e;
                X = g({}, X, j);
                break e;
              case 2:
                aa = !0;
            }
          }
          (j = b.callback),
            j !== null &&
              ((e.flags |= 64),
              H && (e.flags |= 8192),
              (H = u.callbacks),
              H === null ? (u.callbacks = [j]) : H.push(j));
        } else
          (H = {
            lane: j,
            tag: b.tag,
            payload: b.payload,
            callback: b.callback,
            next: null,
          }),
            K === null ? ((U = K = H), (T = X)) : (K = K.next = H),
            (y |= j);
        if (((b = b.next), b === null)) {
          if (((b = u.shared.pending), b === null)) break;
          (H = b),
            (b = H.next),
            (H.next = null),
            (u.lastBaseUpdate = H),
            (u.shared.pending = null);
        }
      } while (!0);
      K === null && (T = X),
        (u.baseState = T),
        (u.firstBaseUpdate = U),
        (u.lastBaseUpdate = K),
        f === null && (u.shared.lanes = 0),
        (ha |= y),
        (e.lanes = y),
        (e.memoizedState = X);
    }
  }
  function Rp(e, t) {
    if (typeof e != 'function') throw Error(l(191, e));
    e.call(t);
  }
  function Op(e, t) {
    var i = e.callbacks;
    if (i !== null)
      for (e.callbacks = null, e = 0; e < i.length; e++) Rp(i[e], t);
  }
  var qi = V(null),
    Us = V(0);
  function Ap(e, t) {
    (e = Qn), I(Us, e), I(qi, t), (Qn = e | t.baseLanes);
  }
  function hc() {
    I(Us, Qn), I(qi, qi.current);
  }
  function pc() {
    (Qn = Us.current), te(qi), te(Us);
  }
  var la = 0,
    Re = null,
    He = null,
    We = null,
    js = !1,
    Gi = !1,
    Ja = !1,
    ks = 0,
    ll = 0,
    Pi = null,
    _x = 0;
  function $e() {
    throw Error(l(321));
  }
  function mc(e, t) {
    if (t === null) return !1;
    for (var i = 0; i < t.length && i < e.length; i++)
      if (!jt(e[i], t[i])) return !1;
    return !0;
  }
  function gc(e, t, i, s, u, f) {
    return (
      (la = f),
      (Re = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (N.H = e === null || e.memoizedState === null ? um : cm),
      (Ja = !1),
      (f = i(s, u)),
      (Ja = !1),
      Gi && (f = Cp(t, i, s, u)),
      Tp(e),
      f
    );
  }
  function Tp(e) {
    N.H = Vs;
    var t = He !== null && He.next !== null;
    if (((la = 0), (We = He = Re = null), (js = !1), (ll = 0), (Pi = null), t))
      throw Error(l(300));
    e === null ||
      rt ||
      ((e = e.dependencies), e !== null && Ds(e) && (rt = !0));
  }
  function Cp(e, t, i, s) {
    Re = e;
    var u = 0;
    do {
      if ((Gi && (Pi = null), (ll = 0), (Gi = !1), 25 <= u))
        throw Error(l(301));
      if (((u += 1), (We = He = null), e.updateQueue != null)) {
        var f = e.updateQueue;
        (f.lastEffect = null),
          (f.events = null),
          (f.stores = null),
          f.memoCache != null && (f.memoCache.index = 0);
      }
      (N.H = Bx), (f = t(i, s));
    } while (Gi);
    return f;
  }
  function Nx() {
    var e = N.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? sl(t) : t),
      (e = e.useState()[0]),
      (He !== null ? He.memoizedState : null) !== e && (Re.flags |= 1024),
      t
    );
  }
  function yc() {
    var e = ks !== 0;
    return (ks = 0), e;
  }
  function vc(e, t, i) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i);
  }
  function bc(e) {
    if (js) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      js = !1;
    }
    (la = 0), (We = He = Re = null), (Gi = !1), (ll = ks = 0), (Pi = null);
  }
  function At() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return We === null ? (Re.memoizedState = We = e) : (We = We.next = e), We;
  }
  function et() {
    if (He === null) {
      var e = Re.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = He.next;
    var t = We === null ? Re.memoizedState : We.next;
    if (t !== null) (We = t), (He = e);
    else {
      if (e === null)
        throw Re.alternate === null ? Error(l(467)) : Error(l(310));
      (He = e),
        (e = {
          memoizedState: He.memoizedState,
          baseState: He.baseState,
          baseQueue: He.baseQueue,
          queue: He.queue,
          next: null,
        }),
        We === null ? (Re.memoizedState = We = e) : (We = We.next = e);
    }
    return We;
  }
  function Sc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function sl(e) {
    var t = ll;
    return (
      (ll += 1),
      Pi === null && (Pi = []),
      (e = xp(Pi, e, t)),
      (t = Re),
      (We === null ? t.memoizedState : We.next) === null &&
        ((t = t.alternate),
        (N.H = t === null || t.memoizedState === null ? um : cm)),
      e
    );
  }
  function Bs(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return sl(e);
      if (e.$$typeof === L) return pt(e);
    }
    throw Error(l(438, String(e)));
  }
  function xc(e) {
    var t = null,
      i = Re.updateQueue;
    if ((i !== null && (t = i.memoCache), t == null)) {
      var s = Re.alternate;
      s !== null &&
        ((s = s.updateQueue),
        s !== null &&
          ((s = s.memoCache),
          s != null &&
            (t = {
              data: s.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      i === null && ((i = Sc()), (Re.updateQueue = i)),
      (i.memoCache = t),
      (i = t.data[t.index]),
      i === void 0)
    )
      for (i = t.data[t.index] = Array(e), s = 0; s < e; s++) i[s] = ne;
    return t.index++, i;
  }
  function Bn(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Hs(e) {
    var t = et();
    return wc(t, He, e);
  }
  function wc(e, t, i) {
    var s = e.queue;
    if (s === null) throw Error(l(311));
    s.lastRenderedReducer = i;
    var u = e.baseQueue,
      f = s.pending;
    if (f !== null) {
      if (u !== null) {
        var y = u.next;
        (u.next = f.next), (f.next = y);
      }
      (t.baseQueue = u = f), (s.pending = null);
    }
    if (((f = e.baseState), u === null)) e.memoizedState = f;
    else {
      t = u.next;
      var b = (y = null),
        T = null,
        U = t,
        K = !1;
      do {
        var X = U.lane & -536870913;
        if (X !== U.lane ? (_e & X) === X : (la & X) === X) {
          var j = U.revertLane;
          if (j === 0)
            T !== null &&
              (T = T.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: U.action,
                  hasEagerState: U.hasEagerState,
                  eagerState: U.eagerState,
                  next: null,
                }),
              X === Bi && (K = !0);
          else if ((la & j) === j) {
            (U = U.next), j === Bi && (K = !0);
            continue;
          } else
            (X = {
              lane: 0,
              revertLane: U.revertLane,
              action: U.action,
              hasEagerState: U.hasEagerState,
              eagerState: U.eagerState,
              next: null,
            }),
              T === null ? ((b = T = X), (y = f)) : (T = T.next = X),
              (Re.lanes |= j),
              (ha |= j);
          (X = U.action),
            Ja && i(f, X),
            (f = U.hasEagerState ? U.eagerState : i(f, X));
        } else
          (j = {
            lane: X,
            revertLane: U.revertLane,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null,
          }),
            T === null ? ((b = T = j), (y = f)) : (T = T.next = j),
            (Re.lanes |= X),
            (ha |= X);
        U = U.next;
      } while (U !== null && U !== t);
      if (
        (T === null ? (y = f) : (T.next = b),
        !jt(f, e.memoizedState) && ((rt = !0), K && ((i = Hi), i !== null)))
      )
        throw i;
      (e.memoizedState = f),
        (e.baseState = y),
        (e.baseQueue = T),
        (s.lastRenderedState = f);
    }
    return u === null && (s.lanes = 0), [e.memoizedState, s.dispatch];
  }
  function Ec(e) {
    var t = et(),
      i = t.queue;
    if (i === null) throw Error(l(311));
    i.lastRenderedReducer = e;
    var s = i.dispatch,
      u = i.pending,
      f = t.memoizedState;
    if (u !== null) {
      i.pending = null;
      var y = (u = u.next);
      do (f = e(f, y.action)), (y = y.next);
      while (y !== u);
      jt(f, t.memoizedState) || (rt = !0),
        (t.memoizedState = f),
        t.baseQueue === null && (t.baseState = f),
        (i.lastRenderedState = f);
    }
    return [f, s];
  }
  function Mp(e, t, i) {
    var s = Re,
      u = et(),
      f = Ue;
    if (f) {
      if (i === void 0) throw Error(l(407));
      i = i();
    } else i = t();
    var y = !jt((He || u).memoizedState, i);
    y && ((u.memoizedState = i), (rt = !0)), (u = u.queue);
    var b = Np.bind(null, s, u, e);
    if (
      (ol(2048, 8, b, [e]),
      u.getSnapshot !== t || y || (We !== null && We.memoizedState.tag & 1))
    ) {
      if (
        ((s.flags |= 2048),
        Vi(9, qs(), _p.bind(null, s, u, i, t), null),
        Qe === null)
      )
        throw Error(l(349));
      f || (la & 124) !== 0 || Dp(s, t, i);
    }
    return i;
  }
  function Dp(e, t, i) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: i }),
      (t = Re.updateQueue),
      t === null
        ? ((t = Sc()), (Re.updateQueue = t), (t.stores = [e]))
        : ((i = t.stores), i === null ? (t.stores = [e]) : i.push(e));
  }
  function _p(e, t, i, s) {
    (t.value = i), (t.getSnapshot = s), Lp(t) && zp(e);
  }
  function Np(e, t, i) {
    return i(function () {
      Lp(t) && zp(e);
    });
  }
  function Lp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var i = t();
      return !jt(e, i);
    } catch {
      return !0;
    }
  }
  function zp(e) {
    var t = zi(e, 2);
    t !== null && Pt(t, e, 2);
  }
  function Rc(e) {
    var t = At();
    if (typeof e == 'function') {
      var i = e;
      if (((e = i()), Ja)) {
        Wn(!0);
        try {
          i();
        } finally {
          Wn(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Bn,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Up(e, t, i, s) {
    return (e.baseState = i), wc(e, He, typeof s == 'function' ? s : Bn);
  }
  function Lx(e, t, i, s, u) {
    if (Ps(e)) throw Error(l(485));
    if (((e = t.action), e !== null)) {
      var f = {
        payload: u,
        action: e,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (y) {
          f.listeners.push(y);
        },
      };
      N.T !== null ? i(!0) : (f.isTransition = !1),
        s(f),
        (i = t.pending),
        i === null
          ? ((f.next = t.pending = f), jp(t, f))
          : ((f.next = i.next), (t.pending = i.next = f));
    }
  }
  function jp(e, t) {
    var i = t.action,
      s = t.payload,
      u = e.state;
    if (t.isTransition) {
      var f = N.T,
        y = {};
      N.T = y;
      try {
        var b = i(u, s),
          T = N.S;
        T !== null && T(y, b), kp(e, t, b);
      } catch (U) {
        Oc(e, t, U);
      } finally {
        N.T = f;
      }
    } else
      try {
        (f = i(u, s)), kp(e, t, f);
      } catch (U) {
        Oc(e, t, U);
      }
  }
  function kp(e, t, i) {
    i !== null && typeof i == 'object' && typeof i.then == 'function'
      ? i.then(
          function (s) {
            Bp(e, t, s);
          },
          function (s) {
            return Oc(e, t, s);
          },
        )
      : Bp(e, t, i);
  }
  function Bp(e, t, i) {
    (t.status = 'fulfilled'),
      (t.value = i),
      Hp(t),
      (e.state = i),
      (t = e.pending),
      t !== null &&
        ((i = t.next),
        i === t ? (e.pending = null) : ((i = i.next), (t.next = i), jp(e, i)));
  }
  function Oc(e, t, i) {
    var s = e.pending;
    if (((e.pending = null), s !== null)) {
      s = s.next;
      do (t.status = 'rejected'), (t.reason = i), Hp(t), (t = t.next);
      while (t !== s);
    }
    e.action = null;
  }
  function Hp(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function qp(e, t) {
    return t;
  }
  function Gp(e, t) {
    if (Ue) {
      var i = Qe.formState;
      if (i !== null) {
        e: {
          var s = Re;
          if (Ue) {
            if (Fe) {
              t: {
                for (var u = Fe, f = gn; u.nodeType !== 8; ) {
                  if (!f) {
                    u = null;
                    break t;
                  }
                  if (((u = un(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                (f = u.data), (u = f === 'F!' || f === 'F' ? u : null);
              }
              if (u) {
                (Fe = un(u.nextSibling)), (s = u.data === 'F!');
                break e;
              }
            }
            Fa(s);
          }
          s = !1;
        }
        s && (t = i[0]);
      }
    }
    return (
      (i = At()),
      (i.memoizedState = i.baseState = t),
      (s = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: qp,
        lastRenderedState: t,
      }),
      (i.queue = s),
      (i = lm.bind(null, Re, s)),
      (s.dispatch = i),
      (s = Rc(!1)),
      (f = Dc.bind(null, Re, !1, s.queue)),
      (s = At()),
      (u = { state: t, dispatch: null, action: e, pending: null }),
      (s.queue = u),
      (i = Lx.bind(null, Re, u, f, i)),
      (u.dispatch = i),
      (s.memoizedState = e),
      [t, i, !1]
    );
  }
  function Pp(e) {
    var t = et();
    return Vp(t, He, e);
  }
  function Vp(e, t, i) {
    if (
      ((t = wc(e, t, qp)[0]),
      (e = Hs(Bn)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var s = sl(t);
      } catch (y) {
        throw y === tl ? Ls : y;
      }
    else s = t;
    t = et();
    var u = t.queue,
      f = u.dispatch;
    return (
      i !== t.memoizedState &&
        ((Re.flags |= 2048), Vi(9, qs(), zx.bind(null, u, i), null)),
      [s, f, e]
    );
  }
  function zx(e, t) {
    e.action = t;
  }
  function Qp(e) {
    var t = et(),
      i = He;
    if (i !== null) return Vp(t, i, e);
    et(), (t = t.memoizedState), (i = et());
    var s = i.queue.dispatch;
    return (i.memoizedState = e), [t, s, !1];
  }
  function Vi(e, t, i, s) {
    return (
      (e = { tag: e, create: i, deps: s, inst: t, next: null }),
      (t = Re.updateQueue),
      t === null && ((t = Sc()), (Re.updateQueue = t)),
      (i = t.lastEffect),
      i === null
        ? (t.lastEffect = e.next = e)
        : ((s = i.next), (i.next = e), (e.next = s), (t.lastEffect = e)),
      e
    );
  }
  function qs() {
    return { destroy: void 0, resource: void 0 };
  }
  function Yp() {
    return et().memoizedState;
  }
  function Gs(e, t, i, s) {
    var u = At();
    (s = s === void 0 ? null : s),
      (Re.flags |= e),
      (u.memoizedState = Vi(1 | t, qs(), i, s));
  }
  function ol(e, t, i, s) {
    var u = et();
    s = s === void 0 ? null : s;
    var f = u.memoizedState.inst;
    He !== null && s !== null && mc(s, He.memoizedState.deps)
      ? (u.memoizedState = Vi(t, f, i, s))
      : ((Re.flags |= e), (u.memoizedState = Vi(1 | t, f, i, s)));
  }
  function Kp(e, t) {
    Gs(8390656, 8, e, t);
  }
  function Fp(e, t) {
    ol(2048, 8, e, t);
  }
  function Xp(e, t) {
    return ol(4, 2, e, t);
  }
  function Zp(e, t) {
    return ol(4, 4, e, t);
  }
  function $p(e, t) {
    if (typeof t == 'function') {
      e = e();
      var i = t(e);
      return function () {
        typeof i == 'function' ? i() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Jp(e, t, i) {
    (i = i != null ? i.concat([e]) : null), ol(4, 4, $p.bind(null, t, e), i);
  }
  function Ac() {}
  function Ip(e, t) {
    var i = et();
    t = t === void 0 ? null : t;
    var s = i.memoizedState;
    return t !== null && mc(t, s[1]) ? s[0] : ((i.memoizedState = [e, t]), e);
  }
  function Wp(e, t) {
    var i = et();
    t = t === void 0 ? null : t;
    var s = i.memoizedState;
    if (t !== null && mc(t, s[1])) return s[0];
    if (((s = e()), Ja)) {
      Wn(!0);
      try {
        e();
      } finally {
        Wn(!1);
      }
    }
    return (i.memoizedState = [s, t]), s;
  }
  function Tc(e, t, i) {
    return i === void 0 || (la & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = i), (e = ng()), (Re.lanes |= e), (ha |= e), i);
  }
  function em(e, t, i, s) {
    return jt(i, t)
      ? i
      : qi.current !== null
        ? ((e = Tc(e, i, s)), jt(e, t) || (rt = !0), e)
        : (la & 42) === 0
          ? ((rt = !0), (e.memoizedState = i))
          : ((e = ng()), (Re.lanes |= e), (ha |= e), t);
  }
  function tm(e, t, i, s, u) {
    var f = $.p;
    $.p = f !== 0 && 8 > f ? f : 8;
    var y = N.T,
      b = {};
    (N.T = b), Dc(e, !1, t, i);
    try {
      var T = u(),
        U = N.S;
      if (
        (U !== null && U(b, T),
        T !== null && typeof T == 'object' && typeof T.then == 'function')
      ) {
        var K = Dx(T, s);
        ul(e, t, K, Gt(e));
      } else ul(e, t, s, Gt(e));
    } catch (X) {
      ul(e, t, { then: function () {}, status: 'rejected', reason: X }, Gt());
    } finally {
      ($.p = f), (N.T = y);
    }
  }
  function Ux() {}
  function Cc(e, t, i, s) {
    if (e.tag !== 5) throw Error(l(476));
    var u = nm(e).queue;
    tm(
      e,
      u,
      t,
      P,
      i === null
        ? Ux
        : function () {
            return am(e), i(s);
          },
    );
  }
  function nm(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: P,
      baseState: P,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Bn,
        lastRenderedState: P,
      },
      next: null,
    };
    var i = {};
    return (
      (t.next = {
        memoizedState: i,
        baseState: i,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Bn,
          lastRenderedState: i,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function am(e) {
    var t = nm(e).next.queue;
    ul(e, t, {}, Gt());
  }
  function Mc() {
    return pt(Tl);
  }
  function im() {
    return et().memoizedState;
  }
  function rm() {
    return et().memoizedState;
  }
  function jx(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var i = Gt();
          e = ia(i);
          var s = ra(t, e, i);
          s !== null && (Pt(s, t, i), al(s, t, i)),
            (t = { cache: rc() }),
            (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function kx(e, t, i) {
    var s = Gt();
    (i = {
      lane: s,
      revertLane: 0,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Ps(e)
        ? sm(t, i)
        : ((i = Zu(e, t, i, s)), i !== null && (Pt(i, e, s), om(i, t, s)));
  }
  function lm(e, t, i) {
    var s = Gt();
    ul(e, t, i, s);
  }
  function ul(e, t, i, s) {
    var u = {
      lane: s,
      revertLane: 0,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Ps(e)) sm(t, u);
    else {
      var f = e.alternate;
      if (
        e.lanes === 0 &&
        (f === null || f.lanes === 0) &&
        ((f = t.lastRenderedReducer), f !== null)
      )
        try {
          var y = t.lastRenderedState,
            b = f(y, i);
          if (((u.hasEagerState = !0), (u.eagerState = b), jt(b, y)))
            return Os(e, t, u, 0), Qe === null && Rs(), !1;
        } catch {
        } finally {
        }
      if (((i = Zu(e, t, u, s)), i !== null))
        return Pt(i, e, s), om(i, t, s), !0;
    }
    return !1;
  }
  function Dc(e, t, i, s) {
    if (
      ((s = {
        lane: 2,
        revertLane: uf(),
        action: s,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ps(e))
    ) {
      if (t) throw Error(l(479));
    } else (t = Zu(e, i, s, 2)), t !== null && Pt(t, e, 2);
  }
  function Ps(e) {
    var t = e.alternate;
    return e === Re || (t !== null && t === Re);
  }
  function sm(e, t) {
    Gi = js = !0;
    var i = e.pending;
    i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (e.pending = t);
  }
  function om(e, t, i) {
    if ((i & 4194048) !== 0) {
      var s = t.lanes;
      (s &= e.pendingLanes), (i |= s), (t.lanes = i), gh(e, i);
    }
  }
  var Vs = {
      readContext: pt,
      use: Bs,
      useCallback: $e,
      useContext: $e,
      useEffect: $e,
      useImperativeHandle: $e,
      useLayoutEffect: $e,
      useInsertionEffect: $e,
      useMemo: $e,
      useReducer: $e,
      useRef: $e,
      useState: $e,
      useDebugValue: $e,
      useDeferredValue: $e,
      useTransition: $e,
      useSyncExternalStore: $e,
      useId: $e,
      useHostTransitionStatus: $e,
      useFormState: $e,
      useActionState: $e,
      useOptimistic: $e,
      useMemoCache: $e,
      useCacheRefresh: $e,
    },
    um = {
      readContext: pt,
      use: Bs,
      useCallback: function (e, t) {
        return (At().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: pt,
      useEffect: Kp,
      useImperativeHandle: function (e, t, i) {
        (i = i != null ? i.concat([e]) : null),
          Gs(4194308, 4, $p.bind(null, t, e), i);
      },
      useLayoutEffect: function (e, t) {
        return Gs(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Gs(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var i = At();
        t = t === void 0 ? null : t;
        var s = e();
        if (Ja) {
          Wn(!0);
          try {
            e();
          } finally {
            Wn(!1);
          }
        }
        return (i.memoizedState = [s, t]), s;
      },
      useReducer: function (e, t, i) {
        var s = At();
        if (i !== void 0) {
          var u = i(t);
          if (Ja) {
            Wn(!0);
            try {
              i(t);
            } finally {
              Wn(!1);
            }
          }
        } else u = t;
        return (
          (s.memoizedState = s.baseState = u),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: u,
          }),
          (s.queue = e),
          (e = e.dispatch = kx.bind(null, Re, e)),
          [s.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = At();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: function (e) {
        e = Rc(e);
        var t = e.queue,
          i = lm.bind(null, Re, t);
        return (t.dispatch = i), [e.memoizedState, i];
      },
      useDebugValue: Ac,
      useDeferredValue: function (e, t) {
        var i = At();
        return Tc(i, e, t);
      },
      useTransition: function () {
        var e = Rc(!1);
        return (
          (e = tm.bind(null, Re, e.queue, !0, !1)),
          (At().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, i) {
        var s = Re,
          u = At();
        if (Ue) {
          if (i === void 0) throw Error(l(407));
          i = i();
        } else {
          if (((i = t()), Qe === null)) throw Error(l(349));
          (_e & 124) !== 0 || Dp(s, t, i);
        }
        u.memoizedState = i;
        var f = { value: i, getSnapshot: t };
        return (
          (u.queue = f),
          Kp(Np.bind(null, s, f, e), [e]),
          (s.flags |= 2048),
          Vi(9, qs(), _p.bind(null, s, f, i, t), null),
          i
        );
      },
      useId: function () {
        var e = At(),
          t = Qe.identifierPrefix;
        if (Ue) {
          var i = Un,
            s = zn;
          (i = (s & ~(1 << (32 - Ut(s) - 1))).toString(32) + i),
            (t = '«' + t + 'R' + i),
            (i = ks++),
            0 < i && (t += 'H' + i.toString(32)),
            (t += '»');
        } else (i = _x++), (t = '«' + t + 'r' + i.toString(32) + '»');
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Mc,
      useFormState: Gp,
      useActionState: Gp,
      useOptimistic: function (e) {
        var t = At();
        t.memoizedState = t.baseState = e;
        var i = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = i),
          (t = Dc.bind(null, Re, !0, i)),
          (i.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: xc,
      useCacheRefresh: function () {
        return (At().memoizedState = jx.bind(null, Re));
      },
    },
    cm = {
      readContext: pt,
      use: Bs,
      useCallback: Ip,
      useContext: pt,
      useEffect: Fp,
      useImperativeHandle: Jp,
      useInsertionEffect: Xp,
      useLayoutEffect: Zp,
      useMemo: Wp,
      useReducer: Hs,
      useRef: Yp,
      useState: function () {
        return Hs(Bn);
      },
      useDebugValue: Ac,
      useDeferredValue: function (e, t) {
        var i = et();
        return em(i, He.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Hs(Bn)[0],
          t = et().memoizedState;
        return [typeof e == 'boolean' ? e : sl(e), t];
      },
      useSyncExternalStore: Mp,
      useId: im,
      useHostTransitionStatus: Mc,
      useFormState: Pp,
      useActionState: Pp,
      useOptimistic: function (e, t) {
        var i = et();
        return Up(i, He, e, t);
      },
      useMemoCache: xc,
      useCacheRefresh: rm,
    },
    Bx = {
      readContext: pt,
      use: Bs,
      useCallback: Ip,
      useContext: pt,
      useEffect: Fp,
      useImperativeHandle: Jp,
      useInsertionEffect: Xp,
      useLayoutEffect: Zp,
      useMemo: Wp,
      useReducer: Ec,
      useRef: Yp,
      useState: function () {
        return Ec(Bn);
      },
      useDebugValue: Ac,
      useDeferredValue: function (e, t) {
        var i = et();
        return He === null ? Tc(i, e, t) : em(i, He.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Ec(Bn)[0],
          t = et().memoizedState;
        return [typeof e == 'boolean' ? e : sl(e), t];
      },
      useSyncExternalStore: Mp,
      useId: im,
      useHostTransitionStatus: Mc,
      useFormState: Qp,
      useActionState: Qp,
      useOptimistic: function (e, t) {
        var i = et();
        return He !== null
          ? Up(i, He, e, t)
          : ((i.baseState = e), [e, i.queue.dispatch]);
      },
      useMemoCache: xc,
      useCacheRefresh: rm,
    },
    Qi = null,
    cl = 0;
  function Qs(e) {
    var t = cl;
    return (cl += 1), Qi === null && (Qi = []), xp(Qi, e, t);
  }
  function fl(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function Ys(e, t) {
    throw t.$$typeof === v
      ? Error(l(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          l(
            31,
            e === '[object Object]'
              ? 'object with keys {' + Object.keys(t).join(', ') + '}'
              : e,
          ),
        ));
  }
  function fm(e) {
    var t = e._init;
    return t(e._payload);
  }
  function dm(e) {
    function t(D, C) {
      if (e) {
        var z = D.deletions;
        z === null ? ((D.deletions = [C]), (D.flags |= 16)) : z.push(C);
      }
    }
    function i(D, C) {
      if (!e) return null;
      for (; C !== null; ) t(D, C), (C = C.sibling);
      return null;
    }
    function s(D) {
      for (var C = new Map(); D !== null; )
        D.key !== null ? C.set(D.key, D) : C.set(D.index, D), (D = D.sibling);
      return C;
    }
    function u(D, C) {
      return (D = Ln(D, C)), (D.index = 0), (D.sibling = null), D;
    }
    function f(D, C, z) {
      return (
        (D.index = z),
        e
          ? ((z = D.alternate),
            z !== null
              ? ((z = z.index), z < C ? ((D.flags |= 67108866), C) : z)
              : ((D.flags |= 67108866), C))
          : ((D.flags |= 1048576), C)
      );
    }
    function y(D) {
      return e && D.alternate === null && (D.flags |= 67108866), D;
    }
    function b(D, C, z, F) {
      return C === null || C.tag !== 6
        ? ((C = Ju(z, D.mode, F)), (C.return = D), C)
        : ((C = u(C, z)), (C.return = D), C);
    }
    function T(D, C, z, F) {
      var ie = z.type;
      return ie === w
        ? K(D, C, z.props.children, F, z.key)
        : C !== null &&
            (C.elementType === ie ||
              (typeof ie == 'object' &&
                ie !== null &&
                ie.$$typeof === G &&
                fm(ie) === C.type))
          ? ((C = u(C, z.props)), fl(C, z), (C.return = D), C)
          : ((C = Ts(z.type, z.key, z.props, null, D.mode, F)),
            fl(C, z),
            (C.return = D),
            C);
    }
    function U(D, C, z, F) {
      return C === null ||
        C.tag !== 4 ||
        C.stateNode.containerInfo !== z.containerInfo ||
        C.stateNode.implementation !== z.implementation
        ? ((C = Iu(z, D.mode, F)), (C.return = D), C)
        : ((C = u(C, z.children || [])), (C.return = D), C);
    }
    function K(D, C, z, F, ie) {
      return C === null || C.tag !== 7
        ? ((C = Va(z, D.mode, F, ie)), (C.return = D), C)
        : ((C = u(C, z)), (C.return = D), C);
    }
    function X(D, C, z) {
      if (
        (typeof C == 'string' && C !== '') ||
        typeof C == 'number' ||
        typeof C == 'bigint'
      )
        return (C = Ju('' + C, D.mode, z)), (C.return = D), C;
      if (typeof C == 'object' && C !== null) {
        switch (C.$$typeof) {
          case S:
            return (
              (z = Ts(C.type, C.key, C.props, null, D.mode, z)),
              fl(z, C),
              (z.return = D),
              z
            );
          case E:
            return (C = Iu(C, D.mode, z)), (C.return = D), C;
          case G:
            var F = C._init;
            return (C = F(C._payload)), X(D, C, z);
        }
        if (me(C) || ce(C))
          return (C = Va(C, D.mode, z, null)), (C.return = D), C;
        if (typeof C.then == 'function') return X(D, Qs(C), z);
        if (C.$$typeof === L) return X(D, _s(D, C), z);
        Ys(D, C);
      }
      return null;
    }
    function j(D, C, z, F) {
      var ie = C !== null ? C.key : null;
      if (
        (typeof z == 'string' && z !== '') ||
        typeof z == 'number' ||
        typeof z == 'bigint'
      )
        return ie !== null ? null : b(D, C, '' + z, F);
      if (typeof z == 'object' && z !== null) {
        switch (z.$$typeof) {
          case S:
            return z.key === ie ? T(D, C, z, F) : null;
          case E:
            return z.key === ie ? U(D, C, z, F) : null;
          case G:
            return (ie = z._init), (z = ie(z._payload)), j(D, C, z, F);
        }
        if (me(z) || ce(z)) return ie !== null ? null : K(D, C, z, F, null);
        if (typeof z.then == 'function') return j(D, C, Qs(z), F);
        if (z.$$typeof === L) return j(D, C, _s(D, z), F);
        Ys(D, z);
      }
      return null;
    }
    function H(D, C, z, F, ie) {
      if (
        (typeof F == 'string' && F !== '') ||
        typeof F == 'number' ||
        typeof F == 'bigint'
      )
        return (D = D.get(z) || null), b(C, D, '' + F, ie);
      if (typeof F == 'object' && F !== null) {
        switch (F.$$typeof) {
          case S:
            return (
              (D = D.get(F.key === null ? z : F.key) || null), T(C, D, F, ie)
            );
          case E:
            return (
              (D = D.get(F.key === null ? z : F.key) || null), U(C, D, F, ie)
            );
          case G:
            var Ae = F._init;
            return (F = Ae(F._payload)), H(D, C, z, F, ie);
        }
        if (me(F) || ce(F)) return (D = D.get(z) || null), K(C, D, F, ie, null);
        if (typeof F.then == 'function') return H(D, C, z, Qs(F), ie);
        if (F.$$typeof === L) return H(D, C, z, _s(C, F), ie);
        Ys(C, F);
      }
      return null;
    }
    function ge(D, C, z, F) {
      for (
        var ie = null, Ae = null, oe = C, pe = (C = 0), st = null;
        oe !== null && pe < z.length;
        pe++
      ) {
        oe.index > pe ? ((st = oe), (oe = null)) : (st = oe.sibling);
        var ze = j(D, oe, z[pe], F);
        if (ze === null) {
          oe === null && (oe = st);
          break;
        }
        e && oe && ze.alternate === null && t(D, oe),
          (C = f(ze, C, pe)),
          Ae === null ? (ie = ze) : (Ae.sibling = ze),
          (Ae = ze),
          (oe = st);
      }
      if (pe === z.length) return i(D, oe), Ue && Ya(D, pe), ie;
      if (oe === null) {
        for (; pe < z.length; pe++)
          (oe = X(D, z[pe], F)),
            oe !== null &&
              ((C = f(oe, C, pe)),
              Ae === null ? (ie = oe) : (Ae.sibling = oe),
              (Ae = oe));
        return Ue && Ya(D, pe), ie;
      }
      for (oe = s(oe); pe < z.length; pe++)
        (st = H(oe, D, pe, z[pe], F)),
          st !== null &&
            (e &&
              st.alternate !== null &&
              oe.delete(st.key === null ? pe : st.key),
            (C = f(st, C, pe)),
            Ae === null ? (ie = st) : (Ae.sibling = st),
            (Ae = st));
      return (
        e &&
          oe.forEach(function (wa) {
            return t(D, wa);
          }),
        Ue && Ya(D, pe),
        ie
      );
    }
    function he(D, C, z, F) {
      if (z == null) throw Error(l(151));
      for (
        var ie = null,
          Ae = null,
          oe = C,
          pe = (C = 0),
          st = null,
          ze = z.next();
        oe !== null && !ze.done;
        pe++, ze = z.next()
      ) {
        oe.index > pe ? ((st = oe), (oe = null)) : (st = oe.sibling);
        var wa = j(D, oe, ze.value, F);
        if (wa === null) {
          oe === null && (oe = st);
          break;
        }
        e && oe && wa.alternate === null && t(D, oe),
          (C = f(wa, C, pe)),
          Ae === null ? (ie = wa) : (Ae.sibling = wa),
          (Ae = wa),
          (oe = st);
      }
      if (ze.done) return i(D, oe), Ue && Ya(D, pe), ie;
      if (oe === null) {
        for (; !ze.done; pe++, ze = z.next())
          (ze = X(D, ze.value, F)),
            ze !== null &&
              ((C = f(ze, C, pe)),
              Ae === null ? (ie = ze) : (Ae.sibling = ze),
              (Ae = ze));
        return Ue && Ya(D, pe), ie;
      }
      for (oe = s(oe); !ze.done; pe++, ze = z.next())
        (ze = H(oe, D, pe, ze.value, F)),
          ze !== null &&
            (e &&
              ze.alternate !== null &&
              oe.delete(ze.key === null ? pe : ze.key),
            (C = f(ze, C, pe)),
            Ae === null ? (ie = ze) : (Ae.sibling = ze),
            (Ae = ze));
      return (
        e &&
          oe.forEach(function (H1) {
            return t(D, H1);
          }),
        Ue && Ya(D, pe),
        ie
      );
    }
    function Ge(D, C, z, F) {
      if (
        (typeof z == 'object' &&
          z !== null &&
          z.type === w &&
          z.key === null &&
          (z = z.props.children),
        typeof z == 'object' && z !== null)
      ) {
        switch (z.$$typeof) {
          case S:
            e: {
              for (var ie = z.key; C !== null; ) {
                if (C.key === ie) {
                  if (((ie = z.type), ie === w)) {
                    if (C.tag === 7) {
                      i(D, C.sibling),
                        (F = u(C, z.props.children)),
                        (F.return = D),
                        (D = F);
                      break e;
                    }
                  } else if (
                    C.elementType === ie ||
                    (typeof ie == 'object' &&
                      ie !== null &&
                      ie.$$typeof === G &&
                      fm(ie) === C.type)
                  ) {
                    i(D, C.sibling),
                      (F = u(C, z.props)),
                      fl(F, z),
                      (F.return = D),
                      (D = F);
                    break e;
                  }
                  i(D, C);
                  break;
                } else t(D, C);
                C = C.sibling;
              }
              z.type === w
                ? ((F = Va(z.props.children, D.mode, F, z.key)),
                  (F.return = D),
                  (D = F))
                : ((F = Ts(z.type, z.key, z.props, null, D.mode, F)),
                  fl(F, z),
                  (F.return = D),
                  (D = F));
            }
            return y(D);
          case E:
            e: {
              for (ie = z.key; C !== null; ) {
                if (C.key === ie)
                  if (
                    C.tag === 4 &&
                    C.stateNode.containerInfo === z.containerInfo &&
                    C.stateNode.implementation === z.implementation
                  ) {
                    i(D, C.sibling),
                      (F = u(C, z.children || [])),
                      (F.return = D),
                      (D = F);
                    break e;
                  } else {
                    i(D, C);
                    break;
                  }
                else t(D, C);
                C = C.sibling;
              }
              (F = Iu(z, D.mode, F)), (F.return = D), (D = F);
            }
            return y(D);
          case G:
            return (ie = z._init), (z = ie(z._payload)), Ge(D, C, z, F);
        }
        if (me(z)) return ge(D, C, z, F);
        if (ce(z)) {
          if (((ie = ce(z)), typeof ie != 'function')) throw Error(l(150));
          return (z = ie.call(z)), he(D, C, z, F);
        }
        if (typeof z.then == 'function') return Ge(D, C, Qs(z), F);
        if (z.$$typeof === L) return Ge(D, C, _s(D, z), F);
        Ys(D, z);
      }
      return (typeof z == 'string' && z !== '') ||
        typeof z == 'number' ||
        typeof z == 'bigint'
        ? ((z = '' + z),
          C !== null && C.tag === 6
            ? (i(D, C.sibling), (F = u(C, z)), (F.return = D), (D = F))
            : (i(D, C), (F = Ju(z, D.mode, F)), (F.return = D), (D = F)),
          y(D))
        : i(D, C);
    }
    return function (D, C, z, F) {
      try {
        cl = 0;
        var ie = Ge(D, C, z, F);
        return (Qi = null), ie;
      } catch (oe) {
        if (oe === tl || oe === Ls) throw oe;
        var Ae = kt(29, oe, null, D.mode);
        return (Ae.lanes = F), (Ae.return = D), Ae;
      } finally {
      }
    };
  }
  var Yi = dm(!0),
    hm = dm(!1),
    It = V(null),
    yn = null;
  function sa(e) {
    var t = e.alternate;
    I(nt, nt.current & 1),
      I(It, e),
      yn === null &&
        (t === null || qi.current !== null || t.memoizedState !== null) &&
        (yn = e);
  }
  function pm(e) {
    if (e.tag === 22) {
      if ((I(nt, nt.current), I(It, e), yn === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (yn = e);
      }
    } else oa();
  }
  function oa() {
    I(nt, nt.current), I(It, It.current);
  }
  function Hn(e) {
    te(It), yn === e && (yn = null), te(nt);
  }
  var nt = V(0);
  function Ks(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var i = t.memoizedState;
        if (
          i !== null &&
          ((i = i.dehydrated), i === null || i.data === '$?' || xf(i))
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
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
  function _c(e, t, i, s) {
    (t = e.memoizedState),
      (i = i(s, t)),
      (i = i == null ? t : g({}, t, i)),
      (e.memoizedState = i),
      e.lanes === 0 && (e.updateQueue.baseState = i);
  }
  var Nc = {
    enqueueSetState: function (e, t, i) {
      e = e._reactInternals;
      var s = Gt(),
        u = ia(s);
      (u.payload = t),
        i != null && (u.callback = i),
        (t = ra(e, u, s)),
        t !== null && (Pt(t, e, s), al(t, e, s));
    },
    enqueueReplaceState: function (e, t, i) {
      e = e._reactInternals;
      var s = Gt(),
        u = ia(s);
      (u.tag = 1),
        (u.payload = t),
        i != null && (u.callback = i),
        (t = ra(e, u, s)),
        t !== null && (Pt(t, e, s), al(t, e, s));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var i = Gt(),
        s = ia(i);
      (s.tag = 2),
        t != null && (s.callback = t),
        (t = ra(e, s, i)),
        t !== null && (Pt(t, e, i), al(t, e, i));
    },
  };
  function mm(e, t, i, s, u, f, y) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(s, f, y)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Fr(i, s) || !Fr(u, f)
          : !0
    );
  }
  function gm(e, t, i, s) {
    (e = t.state),
      typeof t.componentWillReceiveProps == 'function' &&
        t.componentWillReceiveProps(i, s),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(i, s),
      t.state !== e && Nc.enqueueReplaceState(t, t.state, null);
  }
  function Ia(e, t) {
    var i = t;
    if ('ref' in t) {
      i = {};
      for (var s in t) s !== 'ref' && (i[s] = t[s]);
    }
    if ((e = e.defaultProps)) {
      i === t && (i = g({}, i));
      for (var u in e) i[u] === void 0 && (i[u] = e[u]);
    }
    return i;
  }
  var Fs =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          if (
            typeof window == 'object' &&
            typeof window.ErrorEvent == 'function'
          ) {
            var t = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == 'object' &&
                e !== null &&
                typeof e.message == 'string'
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == 'object' &&
            typeof process.emit == 'function'
          ) {
            process.emit('uncaughtException', e);
            return;
          }
          console.error(e);
        };
  function ym(e) {
    Fs(e);
  }
  function vm(e) {
    console.error(e);
  }
  function bm(e) {
    Fs(e);
  }
  function Xs(e, t) {
    try {
      var i = e.onUncaughtError;
      i(t.value, { componentStack: t.stack });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function Sm(e, t, i) {
    try {
      var s = e.onCaughtError;
      s(i.value, {
        componentStack: i.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function Lc(e, t, i) {
    return (
      (i = ia(i)),
      (i.tag = 3),
      (i.payload = { element: null }),
      (i.callback = function () {
        Xs(e, t);
      }),
      i
    );
  }
  function xm(e) {
    return (e = ia(e)), (e.tag = 3), e;
  }
  function wm(e, t, i, s) {
    var u = i.type.getDerivedStateFromError;
    if (typeof u == 'function') {
      var f = s.value;
      (e.payload = function () {
        return u(f);
      }),
        (e.callback = function () {
          Sm(t, i, s);
        });
    }
    var y = i.stateNode;
    y !== null &&
      typeof y.componentDidCatch == 'function' &&
      (e.callback = function () {
        Sm(t, i, s),
          typeof u != 'function' &&
            (pa === null ? (pa = new Set([this])) : pa.add(this));
        var b = s.stack;
        this.componentDidCatch(s.value, {
          componentStack: b !== null ? b : '',
        });
      });
  }
  function Hx(e, t, i, s, u) {
    if (
      ((i.flags |= 32768),
      s !== null && typeof s == 'object' && typeof s.then == 'function')
    ) {
      if (
        ((t = i.alternate),
        t !== null && Ir(t, i, u, !0),
        (i = It.current),
        i !== null)
      ) {
        switch (i.tag) {
          case 13:
            return (
              yn === null ? af() : i.alternate === null && Xe === 0 && (Xe = 3),
              (i.flags &= -257),
              (i.flags |= 65536),
              (i.lanes = u),
              s === oc
                ? (i.flags |= 16384)
                : ((t = i.updateQueue),
                  t === null ? (i.updateQueue = new Set([s])) : t.add(s),
                  lf(e, s, u)),
              !1
            );
          case 22:
            return (
              (i.flags |= 65536),
              s === oc
                ? (i.flags |= 16384)
                : ((t = i.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([s]),
                      }),
                      (i.updateQueue = t))
                    : ((i = t.retryQueue),
                      i === null ? (t.retryQueue = new Set([s])) : i.add(s)),
                  lf(e, s, u)),
              !1
            );
        }
        throw Error(l(435, i.tag));
      }
      return lf(e, s, u), af(), !1;
    }
    if (Ue)
      return (
        (t = It.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = u),
            s !== tc && ((e = Error(l(422), { cause: s })), Jr(Xt(e, i))))
          : (s !== tc && ((t = Error(l(423), { cause: s })), Jr(Xt(t, i))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (u &= -u),
            (e.lanes |= u),
            (s = Xt(s, i)),
            (u = Lc(e.stateNode, s, u)),
            fc(e, u),
            Xe !== 4 && (Xe = 2)),
        !1
      );
    var f = Error(l(520), { cause: s });
    if (
      ((f = Xt(f, i)),
      vl === null ? (vl = [f]) : vl.push(f),
      Xe !== 4 && (Xe = 2),
      t === null)
    )
      return !0;
    (s = Xt(s, i)), (i = t);
    do {
      switch (i.tag) {
        case 3:
          return (
            (i.flags |= 65536),
            (e = u & -u),
            (i.lanes |= e),
            (e = Lc(i.stateNode, s, e)),
            fc(i, e),
            !1
          );
        case 1:
          if (
            ((t = i.type),
            (f = i.stateNode),
            (i.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == 'function' ||
                (f !== null &&
                  typeof f.componentDidCatch == 'function' &&
                  (pa === null || !pa.has(f)))))
          )
            return (
              (i.flags |= 65536),
              (u &= -u),
              (i.lanes |= u),
              (u = xm(u)),
              wm(u, e, i, s),
              fc(i, u),
              !1
            );
      }
      i = i.return;
    } while (i !== null);
    return !1;
  }
  var Em = Error(l(461)),
    rt = !1;
  function ot(e, t, i, s) {
    t.child = e === null ? hm(t, null, i, s) : Yi(t, e.child, i, s);
  }
  function Rm(e, t, i, s, u) {
    i = i.render;
    var f = t.ref;
    if ('ref' in s) {
      var y = {};
      for (var b in s) b !== 'ref' && (y[b] = s[b]);
    } else y = s;
    return (
      Za(t),
      (s = gc(e, t, i, y, f, u)),
      (b = yc()),
      e !== null && !rt
        ? (vc(e, t, u), qn(e, t, u))
        : (Ue && b && Wu(t), (t.flags |= 1), ot(e, t, s, u), t.child)
    );
  }
  function Om(e, t, i, s, u) {
    if (e === null) {
      var f = i.type;
      return typeof f == 'function' &&
        !$u(f) &&
        f.defaultProps === void 0 &&
        i.compare === null
        ? ((t.tag = 15), (t.type = f), Am(e, t, f, s, u))
        : ((e = Ts(i.type, null, s, t, t.mode, u)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((f = e.child), !Gc(e, u))) {
      var y = f.memoizedProps;
      if (
        ((i = i.compare), (i = i !== null ? i : Fr), i(y, s) && e.ref === t.ref)
      )
        return qn(e, t, u);
    }
    return (
      (t.flags |= 1),
      (e = Ln(f, s)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Am(e, t, i, s, u) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (Fr(f, s) && e.ref === t.ref)
        if (((rt = !1), (t.pendingProps = s = f), Gc(e, u)))
          (e.flags & 131072) !== 0 && (rt = !0);
        else return (t.lanes = e.lanes), qn(e, t, u);
    }
    return zc(e, t, i, s, u);
  }
  function Tm(e, t, i) {
    var s = t.pendingProps,
      u = s.children,
      f = e !== null ? e.memoizedState : null;
    if (s.mode === 'hidden') {
      if ((t.flags & 128) !== 0) {
        if (((s = f !== null ? f.baseLanes | i : i), e !== null)) {
          for (u = t.child = e.child, f = 0; u !== null; )
            (f = f | u.lanes | u.childLanes), (u = u.sibling);
          t.childLanes = f & ~s;
        } else (t.childLanes = 0), (t.child = null);
        return Cm(e, t, s, i);
      }
      if ((i & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Ns(t, f !== null ? f.cachePool : null),
          f !== null ? Ap(t, f) : hc(),
          pm(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          Cm(e, t, f !== null ? f.baseLanes | i : i, i)
        );
    } else
      f !== null
        ? (Ns(t, f.cachePool), Ap(t, f), oa(), (t.memoizedState = null))
        : (e !== null && Ns(t, null), hc(), oa());
    return ot(e, t, u, i), t.child;
  }
  function Cm(e, t, i, s) {
    var u = sc();
    return (
      (u = u === null ? null : { parent: tt._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: i, cachePool: u }),
      e !== null && Ns(t, null),
      hc(),
      pm(t),
      e !== null && Ir(e, t, s, !0),
      null
    );
  }
  function Zs(e, t) {
    var i = t.ref;
    if (i === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof i != 'function' && typeof i != 'object') throw Error(l(284));
      (e === null || e.ref !== i) && (t.flags |= 4194816);
    }
  }
  function zc(e, t, i, s, u) {
    return (
      Za(t),
      (i = gc(e, t, i, s, void 0, u)),
      (s = yc()),
      e !== null && !rt
        ? (vc(e, t, u), qn(e, t, u))
        : (Ue && s && Wu(t), (t.flags |= 1), ot(e, t, i, u), t.child)
    );
  }
  function Mm(e, t, i, s, u, f) {
    return (
      Za(t),
      (t.updateQueue = null),
      (i = Cp(t, s, i, u)),
      Tp(e),
      (s = yc()),
      e !== null && !rt
        ? (vc(e, t, f), qn(e, t, f))
        : (Ue && s && Wu(t), (t.flags |= 1), ot(e, t, i, f), t.child)
    );
  }
  function Dm(e, t, i, s, u) {
    if ((Za(t), t.stateNode === null)) {
      var f = Ui,
        y = i.contextType;
      typeof y == 'object' && y !== null && (f = pt(y)),
        (f = new i(s, f)),
        (t.memoizedState =
          f.state !== null && f.state !== void 0 ? f.state : null),
        (f.updater = Nc),
        (t.stateNode = f),
        (f._reactInternals = t),
        (f = t.stateNode),
        (f.props = s),
        (f.state = t.memoizedState),
        (f.refs = {}),
        uc(t),
        (y = i.contextType),
        (f.context = typeof y == 'object' && y !== null ? pt(y) : Ui),
        (f.state = t.memoizedState),
        (y = i.getDerivedStateFromProps),
        typeof y == 'function' && (_c(t, i, y, s), (f.state = t.memoizedState)),
        typeof i.getDerivedStateFromProps == 'function' ||
          typeof f.getSnapshotBeforeUpdate == 'function' ||
          (typeof f.UNSAFE_componentWillMount != 'function' &&
            typeof f.componentWillMount != 'function') ||
          ((y = f.state),
          typeof f.componentWillMount == 'function' && f.componentWillMount(),
          typeof f.UNSAFE_componentWillMount == 'function' &&
            f.UNSAFE_componentWillMount(),
          y !== f.state && Nc.enqueueReplaceState(f, f.state, null),
          rl(t, s, f, u),
          il(),
          (f.state = t.memoizedState)),
        typeof f.componentDidMount == 'function' && (t.flags |= 4194308),
        (s = !0);
    } else if (e === null) {
      f = t.stateNode;
      var b = t.memoizedProps,
        T = Ia(i, b);
      f.props = T;
      var U = f.context,
        K = i.contextType;
      (y = Ui), typeof K == 'object' && K !== null && (y = pt(K));
      var X = i.getDerivedStateFromProps;
      (K =
        typeof X == 'function' ||
        typeof f.getSnapshotBeforeUpdate == 'function'),
        (b = t.pendingProps !== b),
        K ||
          (typeof f.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof f.componentWillReceiveProps != 'function') ||
          ((b || U !== y) && gm(t, f, s, y)),
        (aa = !1);
      var j = t.memoizedState;
      (f.state = j),
        rl(t, s, f, u),
        il(),
        (U = t.memoizedState),
        b || j !== U || aa
          ? (typeof X == 'function' && (_c(t, i, X, s), (U = t.memoizedState)),
            (T = aa || mm(t, i, T, s, j, U, y))
              ? (K ||
                  (typeof f.UNSAFE_componentWillMount != 'function' &&
                    typeof f.componentWillMount != 'function') ||
                  (typeof f.componentWillMount == 'function' &&
                    f.componentWillMount(),
                  typeof f.UNSAFE_componentWillMount == 'function' &&
                    f.UNSAFE_componentWillMount()),
                typeof f.componentDidMount == 'function' &&
                  (t.flags |= 4194308))
              : (typeof f.componentDidMount == 'function' &&
                  (t.flags |= 4194308),
                (t.memoizedProps = s),
                (t.memoizedState = U)),
            (f.props = s),
            (f.state = U),
            (f.context = y),
            (s = T))
          : (typeof f.componentDidMount == 'function' && (t.flags |= 4194308),
            (s = !1));
    } else {
      (f = t.stateNode),
        cc(e, t),
        (y = t.memoizedProps),
        (K = Ia(i, y)),
        (f.props = K),
        (X = t.pendingProps),
        (j = f.context),
        (U = i.contextType),
        (T = Ui),
        typeof U == 'object' && U !== null && (T = pt(U)),
        (b = i.getDerivedStateFromProps),
        (U =
          typeof b == 'function' ||
          typeof f.getSnapshotBeforeUpdate == 'function') ||
          (typeof f.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof f.componentWillReceiveProps != 'function') ||
          ((y !== X || j !== T) && gm(t, f, s, T)),
        (aa = !1),
        (j = t.memoizedState),
        (f.state = j),
        rl(t, s, f, u),
        il();
      var H = t.memoizedState;
      y !== X ||
      j !== H ||
      aa ||
      (e !== null && e.dependencies !== null && Ds(e.dependencies))
        ? (typeof b == 'function' && (_c(t, i, b, s), (H = t.memoizedState)),
          (K =
            aa ||
            mm(t, i, K, s, j, H, T) ||
            (e !== null && e.dependencies !== null && Ds(e.dependencies)))
            ? (U ||
                (typeof f.UNSAFE_componentWillUpdate != 'function' &&
                  typeof f.componentWillUpdate != 'function') ||
                (typeof f.componentWillUpdate == 'function' &&
                  f.componentWillUpdate(s, H, T),
                typeof f.UNSAFE_componentWillUpdate == 'function' &&
                  f.UNSAFE_componentWillUpdate(s, H, T)),
              typeof f.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate == 'function' &&
                (t.flags |= 1024))
            : (typeof f.componentDidUpdate != 'function' ||
                (y === e.memoizedProps && j === e.memoizedState) ||
                (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate != 'function' ||
                (y === e.memoizedProps && j === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = s),
              (t.memoizedState = H)),
          (f.props = s),
          (f.state = H),
          (f.context = T),
          (s = K))
        : (typeof f.componentDidUpdate != 'function' ||
            (y === e.memoizedProps && j === e.memoizedState) ||
            (t.flags |= 4),
          typeof f.getSnapshotBeforeUpdate != 'function' ||
            (y === e.memoizedProps && j === e.memoizedState) ||
            (t.flags |= 1024),
          (s = !1));
    }
    return (
      (f = s),
      Zs(e, t),
      (s = (t.flags & 128) !== 0),
      f || s
        ? ((f = t.stateNode),
          (i =
            s && typeof i.getDerivedStateFromError != 'function'
              ? null
              : f.render()),
          (t.flags |= 1),
          e !== null && s
            ? ((t.child = Yi(t, e.child, null, u)),
              (t.child = Yi(t, null, i, u)))
            : ot(e, t, i, u),
          (t.memoizedState = f.state),
          (e = t.child))
        : (e = qn(e, t, u)),
      e
    );
  }
  function _m(e, t, i, s) {
    return $r(), (t.flags |= 256), ot(e, t, i, s), t.child;
  }
  var Uc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function jc(e) {
    return { baseLanes: e, cachePool: vp() };
  }
  function kc(e, t, i) {
    return (e = e !== null ? e.childLanes & ~i : 0), t && (e |= Wt), e;
  }
  function Nm(e, t, i) {
    var s = t.pendingProps,
      u = !1,
      f = (t.flags & 128) !== 0,
      y;
    if (
      ((y = f) ||
        (y =
          e !== null && e.memoizedState === null ? !1 : (nt.current & 2) !== 0),
      y && ((u = !0), (t.flags &= -129)),
      (y = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Ue) {
        if ((u ? sa(t) : oa(), Ue)) {
          var b = Fe,
            T;
          if ((T = b)) {
            e: {
              for (T = b, b = gn; T.nodeType !== 8; ) {
                if (!b) {
                  b = null;
                  break e;
                }
                if (((T = un(T.nextSibling)), T === null)) {
                  b = null;
                  break e;
                }
              }
              b = T;
            }
            b !== null
              ? ((t.memoizedState = {
                  dehydrated: b,
                  treeContext: Qa !== null ? { id: zn, overflow: Un } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (T = kt(18, null, null, 0)),
                (T.stateNode = b),
                (T.return = t),
                (t.child = T),
                (vt = t),
                (Fe = null),
                (T = !0))
              : (T = !1);
          }
          T || Fa(t);
        }
        if (
          ((b = t.memoizedState),
          b !== null && ((b = b.dehydrated), b !== null))
        )
          return xf(b) ? (t.lanes = 32) : (t.lanes = 536870912), null;
        Hn(t);
      }
      return (
        (b = s.children),
        (s = s.fallback),
        u
          ? (oa(),
            (u = t.mode),
            (b = $s({ mode: 'hidden', children: b }, u)),
            (s = Va(s, u, i, null)),
            (b.return = t),
            (s.return = t),
            (b.sibling = s),
            (t.child = b),
            (u = t.child),
            (u.memoizedState = jc(i)),
            (u.childLanes = kc(e, y, i)),
            (t.memoizedState = Uc),
            s)
          : (sa(t), Bc(t, b))
      );
    }
    if (
      ((T = e.memoizedState), T !== null && ((b = T.dehydrated), b !== null))
    ) {
      if (f)
        t.flags & 256
          ? (sa(t), (t.flags &= -257), (t = Hc(e, t, i)))
          : t.memoizedState !== null
            ? (oa(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (oa(),
              (u = s.fallback),
              (b = t.mode),
              (s = $s({ mode: 'visible', children: s.children }, b)),
              (u = Va(u, b, i, null)),
              (u.flags |= 2),
              (s.return = t),
              (u.return = t),
              (s.sibling = u),
              (t.child = s),
              Yi(t, e.child, null, i),
              (s = t.child),
              (s.memoizedState = jc(i)),
              (s.childLanes = kc(e, y, i)),
              (t.memoizedState = Uc),
              (t = u));
      else if ((sa(t), xf(b))) {
        if (((y = b.nextSibling && b.nextSibling.dataset), y)) var U = y.dgst;
        (y = U),
          (s = Error(l(419))),
          (s.stack = ''),
          (s.digest = y),
          Jr({ value: s, source: null, stack: null }),
          (t = Hc(e, t, i));
      } else if (
        (rt || Ir(e, t, i, !1), (y = (i & e.childLanes) !== 0), rt || y)
      ) {
        if (
          ((y = Qe),
          y !== null &&
            ((s = i & -i),
            (s = (s & 42) !== 0 ? 1 : xu(s)),
            (s = (s & (y.suspendedLanes | i)) !== 0 ? 0 : s),
            s !== 0 && s !== T.retryLane))
        )
          throw ((T.retryLane = s), zi(e, s), Pt(y, e, s), Em);
        b.data === '$?' || af(), (t = Hc(e, t, i));
      } else
        b.data === '$?'
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = T.treeContext),
            (Fe = un(b.nextSibling)),
            (vt = t),
            (Ue = !0),
            (Ka = null),
            (gn = !1),
            e !== null &&
              (($t[Jt++] = zn),
              ($t[Jt++] = Un),
              ($t[Jt++] = Qa),
              (zn = e.id),
              (Un = e.overflow),
              (Qa = t)),
            (t = Bc(t, s.children)),
            (t.flags |= 4096));
      return t;
    }
    return u
      ? (oa(),
        (u = s.fallback),
        (b = t.mode),
        (T = e.child),
        (U = T.sibling),
        (s = Ln(T, { mode: 'hidden', children: s.children })),
        (s.subtreeFlags = T.subtreeFlags & 65011712),
        U !== null ? (u = Ln(U, u)) : ((u = Va(u, b, i, null)), (u.flags |= 2)),
        (u.return = t),
        (s.return = t),
        (s.sibling = u),
        (t.child = s),
        (s = u),
        (u = t.child),
        (b = e.child.memoizedState),
        b === null
          ? (b = jc(i))
          : ((T = b.cachePool),
            T !== null
              ? ((U = tt._currentValue),
                (T = T.parent !== U ? { parent: U, pool: U } : T))
              : (T = vp()),
            (b = { baseLanes: b.baseLanes | i, cachePool: T })),
        (u.memoizedState = b),
        (u.childLanes = kc(e, y, i)),
        (t.memoizedState = Uc),
        s)
      : (sa(t),
        (i = e.child),
        (e = i.sibling),
        (i = Ln(i, { mode: 'visible', children: s.children })),
        (i.return = t),
        (i.sibling = null),
        e !== null &&
          ((y = t.deletions),
          y === null ? ((t.deletions = [e]), (t.flags |= 16)) : y.push(e)),
        (t.child = i),
        (t.memoizedState = null),
        i);
  }
  function Bc(e, t) {
    return (
      (t = $s({ mode: 'visible', children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function $s(e, t) {
    return (
      (e = kt(22, e, null, t)),
      (e.lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    );
  }
  function Hc(e, t, i) {
    return (
      Yi(t, e.child, null, i),
      (e = Bc(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Lm(e, t, i) {
    e.lanes |= t;
    var s = e.alternate;
    s !== null && (s.lanes |= t), ac(e.return, t, i);
  }
  function qc(e, t, i, s, u) {
    var f = e.memoizedState;
    f === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: s,
          tail: i,
          tailMode: u,
        })
      : ((f.isBackwards = t),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = s),
        (f.tail = i),
        (f.tailMode = u));
  }
  function zm(e, t, i) {
    var s = t.pendingProps,
      u = s.revealOrder,
      f = s.tail;
    if ((ot(e, t, s.children, i), (s = nt.current), (s & 2) !== 0))
      (s = (s & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Lm(e, i, t);
          else if (e.tag === 19) Lm(e, i, t);
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
      s &= 1;
    }
    switch ((I(nt, s), u)) {
      case 'forwards':
        for (i = t.child, u = null; i !== null; )
          (e = i.alternate),
            e !== null && Ks(e) === null && (u = i),
            (i = i.sibling);
        (i = u),
          i === null
            ? ((u = t.child), (t.child = null))
            : ((u = i.sibling), (i.sibling = null)),
          qc(t, !1, u, i, f);
        break;
      case 'backwards':
        for (i = null, u = t.child, t.child = null; u !== null; ) {
          if (((e = u.alternate), e !== null && Ks(e) === null)) {
            t.child = u;
            break;
          }
          (e = u.sibling), (u.sibling = i), (i = u), (u = e);
        }
        qc(t, !0, i, null, f);
        break;
      case 'together':
        qc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function qn(e, t, i) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (ha |= t.lanes),
      (i & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((Ir(e, t, i, !1), (i & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(l(153));
    if (t.child !== null) {
      for (
        e = t.child, i = Ln(e, e.pendingProps), t.child = i, i.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (i = i.sibling = Ln(e, e.pendingProps)),
          (i.return = t);
      i.sibling = null;
    }
    return t.child;
  }
  function Gc(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && Ds(e)));
  }
  function qx(e, t, i) {
    switch (t.tag) {
      case 3:
        Le(t, t.stateNode.containerInfo),
          na(t, tt, e.memoizedState.cache),
          $r();
        break;
      case 27:
      case 5:
        Et(t);
        break;
      case 4:
        Le(t, t.stateNode.containerInfo);
        break;
      case 10:
        na(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var s = t.memoizedState;
        if (s !== null)
          return s.dehydrated !== null
            ? (sa(t), (t.flags |= 128), null)
            : (i & t.child.childLanes) !== 0
              ? Nm(e, t, i)
              : (sa(t), (e = qn(e, t, i)), e !== null ? e.sibling : null);
        sa(t);
        break;
      case 19:
        var u = (e.flags & 128) !== 0;
        if (
          ((s = (i & t.childLanes) !== 0),
          s || (Ir(e, t, i, !1), (s = (i & t.childLanes) !== 0)),
          u)
        ) {
          if (s) return zm(e, t, i);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          I(nt, nt.current),
          s)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Tm(e, t, i);
      case 24:
        na(t, tt, e.memoizedState.cache);
    }
    return qn(e, t, i);
  }
  function Um(e, t, i) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) rt = !0;
      else {
        if (!Gc(e, i) && (t.flags & 128) === 0) return (rt = !1), qx(e, t, i);
        rt = (e.flags & 131072) !== 0;
      }
    else (rt = !1), Ue && (t.flags & 1048576) !== 0 && fp(t, Ms, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var s = t.elementType,
            u = s._init;
          if (((s = u(s._payload)), (t.type = s), typeof s == 'function'))
            $u(s)
              ? ((e = Ia(s, e)), (t.tag = 1), (t = Dm(null, t, s, e, i)))
              : ((t.tag = 0), (t = zc(null, t, s, e, i)));
          else {
            if (s != null) {
              if (((u = s.$$typeof), u === q)) {
                (t.tag = 11), (t = Rm(null, t, s, e, i));
                break e;
              } else if (u === Z) {
                (t.tag = 14), (t = Om(null, t, s, e, i));
                break e;
              }
            }
            throw ((t = be(s) || s), Error(l(306, t, '')));
          }
        }
        return t;
      case 0:
        return zc(e, t, t.type, t.pendingProps, i);
      case 1:
        return (s = t.type), (u = Ia(s, t.pendingProps)), Dm(e, t, s, u, i);
      case 3:
        e: {
          if ((Le(t, t.stateNode.containerInfo), e === null))
            throw Error(l(387));
          s = t.pendingProps;
          var f = t.memoizedState;
          (u = f.element), cc(e, t), rl(t, s, null, i);
          var y = t.memoizedState;
          if (
            ((s = y.cache),
            na(t, tt, s),
            s !== f.cache && ic(t, [tt], i, !0),
            il(),
            (s = y.element),
            f.isDehydrated)
          )
            if (
              ((f = { element: s, isDehydrated: !1, cache: y.cache }),
              (t.updateQueue.baseState = f),
              (t.memoizedState = f),
              t.flags & 256)
            ) {
              t = _m(e, t, s, i);
              break e;
            } else if (s !== u) {
              (u = Xt(Error(l(424)), t)), Jr(u), (t = _m(e, t, s, i));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === 'HTML' ? e.ownerDocument.body : e;
              }
              for (
                Fe = un(e.firstChild),
                  vt = t,
                  Ue = !0,
                  Ka = null,
                  gn = !0,
                  i = hm(t, null, s, i),
                  t.child = i;
                i;

              )
                (i.flags = (i.flags & -3) | 4096), (i = i.sibling);
            }
          else {
            if (($r(), s === u)) {
              t = qn(e, t, i);
              break e;
            }
            ot(e, t, s, i);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Zs(e, t),
          e === null
            ? (i = Hg(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = i)
              : Ue ||
                ((i = t.type),
                (e = t.pendingProps),
                (s = co(ue.current).createElement(i)),
                (s[ht] = t),
                (s[Rt] = e),
                ct(s, i, e),
                it(s),
                (t.stateNode = s))
            : (t.memoizedState = Hg(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Et(t),
          e === null &&
            Ue &&
            ((s = t.stateNode = jg(t.type, t.pendingProps, ue.current)),
            (vt = t),
            (gn = !0),
            (u = Fe),
            ya(t.type) ? ((wf = u), (Fe = un(s.firstChild))) : (Fe = u)),
          ot(e, t, t.pendingProps.children, i),
          Zs(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Ue &&
            ((u = s = Fe) &&
              ((s = p1(s, t.type, t.pendingProps, gn)),
              s !== null
                ? ((t.stateNode = s),
                  (vt = t),
                  (Fe = un(s.firstChild)),
                  (gn = !1),
                  (u = !0))
                : (u = !1)),
            u || Fa(t)),
          Et(t),
          (u = t.type),
          (f = t.pendingProps),
          (y = e !== null ? e.memoizedProps : null),
          (s = f.children),
          vf(u, f) ? (s = null) : y !== null && vf(u, y) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((u = gc(e, t, Nx, null, null, i)), (Tl._currentValue = u)),
          Zs(e, t),
          ot(e, t, s, i),
          t.child
        );
      case 6:
        return (
          e === null &&
            Ue &&
            ((e = i = Fe) &&
              ((i = m1(i, t.pendingProps, gn)),
              i !== null
                ? ((t.stateNode = i), (vt = t), (Fe = null), (e = !0))
                : (e = !1)),
            e || Fa(t)),
          null
        );
      case 13:
        return Nm(e, t, i);
      case 4:
        return (
          Le(t, t.stateNode.containerInfo),
          (s = t.pendingProps),
          e === null ? (t.child = Yi(t, null, s, i)) : ot(e, t, s, i),
          t.child
        );
      case 11:
        return Rm(e, t, t.type, t.pendingProps, i);
      case 7:
        return ot(e, t, t.pendingProps, i), t.child;
      case 8:
        return ot(e, t, t.pendingProps.children, i), t.child;
      case 12:
        return ot(e, t, t.pendingProps.children, i), t.child;
      case 10:
        return (
          (s = t.pendingProps),
          na(t, t.type, s.value),
          ot(e, t, s.children, i),
          t.child
        );
      case 9:
        return (
          (u = t.type._context),
          (s = t.pendingProps.children),
          Za(t),
          (u = pt(u)),
          (s = s(u)),
          (t.flags |= 1),
          ot(e, t, s, i),
          t.child
        );
      case 14:
        return Om(e, t, t.type, t.pendingProps, i);
      case 15:
        return Am(e, t, t.type, t.pendingProps, i);
      case 19:
        return zm(e, t, i);
      case 31:
        return (
          (s = t.pendingProps),
          (i = t.mode),
          (s = { mode: s.mode, children: s.children }),
          e === null
            ? ((i = $s(s, i)),
              (i.ref = t.ref),
              (t.child = i),
              (i.return = t),
              (t = i))
            : ((i = Ln(e.child, s)),
              (i.ref = t.ref),
              (t.child = i),
              (i.return = t),
              (t = i)),
          t
        );
      case 22:
        return Tm(e, t, i);
      case 24:
        return (
          Za(t),
          (s = pt(tt)),
          e === null
            ? ((u = sc()),
              u === null &&
                ((u = Qe),
                (f = rc()),
                (u.pooledCache = f),
                f.refCount++,
                f !== null && (u.pooledCacheLanes |= i),
                (u = f)),
              (t.memoizedState = { parent: s, cache: u }),
              uc(t),
              na(t, tt, u))
            : ((e.lanes & i) !== 0 && (cc(e, t), rl(t, null, null, i), il()),
              (u = e.memoizedState),
              (f = t.memoizedState),
              u.parent !== s
                ? ((u = { parent: s, cache: s }),
                  (t.memoizedState = u),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = u),
                  na(t, tt, s))
                : ((s = f.cache),
                  na(t, tt, s),
                  s !== u.cache && ic(t, [tt], i, !0))),
          ot(e, t, t.pendingProps.children, i),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(l(156, t.tag));
  }
  function Gn(e) {
    e.flags |= 4;
  }
  function jm(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Qg(t))) {
      if (
        ((t = It.current),
        t !== null &&
          ((_e & 4194048) === _e
            ? yn !== null
            : ((_e & 62914560) !== _e && (_e & 536870912) === 0) || t !== yn))
      )
        throw ((nl = oc), bp);
      e.flags |= 8192;
    }
  }
  function Js(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? ph() : 536870912), (e.lanes |= t), (Zi |= t));
  }
  function dl(e, t) {
    if (!Ue)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var i = null; t !== null; )
            t.alternate !== null && (i = t), (t = t.sibling);
          i === null ? (e.tail = null) : (i.sibling = null);
          break;
        case 'collapsed':
          i = e.tail;
          for (var s = null; i !== null; )
            i.alternate !== null && (s = i), (i = i.sibling);
          s === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (s.sibling = null);
      }
  }
  function Ke(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      i = 0,
      s = 0;
    if (t)
      for (var u = e.child; u !== null; )
        (i |= u.lanes | u.childLanes),
          (s |= u.subtreeFlags & 65011712),
          (s |= u.flags & 65011712),
          (u.return = e),
          (u = u.sibling);
    else
      for (u = e.child; u !== null; )
        (i |= u.lanes | u.childLanes),
          (s |= u.subtreeFlags),
          (s |= u.flags),
          (u.return = e),
          (u = u.sibling);
    return (e.subtreeFlags |= s), (e.childLanes = i), t;
  }
  function Gx(e, t, i) {
    var s = t.pendingProps;
    switch ((ec(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ke(t), null;
      case 1:
        return Ke(t), null;
      case 3:
        return (
          (i = t.stateNode),
          (s = null),
          e !== null && (s = e.memoizedState.cache),
          t.memoizedState.cache !== s && (t.flags |= 2048),
          kn(tt),
          Ve(),
          i.pendingContext &&
            ((i.context = i.pendingContext), (i.pendingContext = null)),
          (e === null || e.child === null) &&
            (Zr(t)
              ? Gn(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), pp())),
          Ke(t),
          null
        );
      case 26:
        return (
          (i = t.memoizedState),
          e === null
            ? (Gn(t),
              i !== null ? (Ke(t), jm(t, i)) : (Ke(t), (t.flags &= -16777217)))
            : i
              ? i !== e.memoizedState
                ? (Gn(t), Ke(t), jm(t, i))
                : (Ke(t), (t.flags &= -16777217))
              : (e.memoizedProps !== s && Gn(t), Ke(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        rn(t), (i = ue.current);
        var u = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== s && Gn(t);
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(l(166));
            return Ke(t), null;
          }
          (e = ae.current),
            Zr(t) ? dp(t) : ((e = jg(u, s, i)), (t.stateNode = e), Gn(t));
        }
        return Ke(t), null;
      case 5:
        if ((rn(t), (i = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== s && Gn(t);
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(l(166));
            return Ke(t), null;
          }
          if (((e = ae.current), Zr(t))) dp(t);
          else {
            switch (((u = co(ue.current)), e)) {
              case 1:
                e = u.createElementNS('http://www.w3.org/2000/svg', i);
                break;
              case 2:
                e = u.createElementNS('http://www.w3.org/1998/Math/MathML', i);
                break;
              default:
                switch (i) {
                  case 'svg':
                    e = u.createElementNS('http://www.w3.org/2000/svg', i);
                    break;
                  case 'math':
                    e = u.createElementNS(
                      'http://www.w3.org/1998/Math/MathML',
                      i,
                    );
                    break;
                  case 'script':
                    (e = u.createElement('div')),
                      (e.innerHTML = '<script><\/script>'),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case 'select':
                    (e =
                      typeof s.is == 'string'
                        ? u.createElement('select', { is: s.is })
                        : u.createElement('select')),
                      s.multiple
                        ? (e.multiple = !0)
                        : s.size && (e.size = s.size);
                    break;
                  default:
                    e =
                      typeof s.is == 'string'
                        ? u.createElement(i, { is: s.is })
                        : u.createElement(i);
                }
            }
            (e[ht] = t), (e[Rt] = s);
            e: for (u = t.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) e.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                (u.child.return = u), (u = u.child);
                continue;
              }
              if (u === t) break e;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === t) break e;
                u = u.return;
              }
              (u.sibling.return = u.return), (u = u.sibling);
            }
            t.stateNode = e;
            e: switch ((ct(e, i, s), i)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                e = !!s.autoFocus;
                break e;
              case 'img':
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && Gn(t);
          }
        }
        return Ke(t), (t.flags &= -16777217), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== s && Gn(t);
        else {
          if (typeof s != 'string' && t.stateNode === null) throw Error(l(166));
          if (((e = ue.current), Zr(t))) {
            if (
              ((e = t.stateNode),
              (i = t.memoizedProps),
              (s = null),
              (u = vt),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  s = u.memoizedProps;
              }
            (e[ht] = t),
              (e = !!(
                e.nodeValue === i ||
                (s !== null && s.suppressHydrationWarning === !0) ||
                Mg(e.nodeValue, i)
              )),
              e || Fa(t);
          } else (e = co(e).createTextNode(s)), (e[ht] = t), (t.stateNode = e);
        }
        return Ke(t), null;
      case 13:
        if (
          ((s = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((u = Zr(t)), s !== null && s.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(l(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(l(317));
              u[ht] = t;
            } else
              $r(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            Ke(t), (u = !1);
          } else
            (u = pp()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = u),
              (u = !0);
          if (!u) return t.flags & 256 ? (Hn(t), t) : (Hn(t), null);
        }
        if ((Hn(t), (t.flags & 128) !== 0)) return (t.lanes = i), t;
        if (
          ((i = s !== null), (e = e !== null && e.memoizedState !== null), i)
        ) {
          (s = t.child),
            (u = null),
            s.alternate !== null &&
              s.alternate.memoizedState !== null &&
              s.alternate.memoizedState.cachePool !== null &&
              (u = s.alternate.memoizedState.cachePool.pool);
          var f = null;
          s.memoizedState !== null &&
            s.memoizedState.cachePool !== null &&
            (f = s.memoizedState.cachePool.pool),
            f !== u && (s.flags |= 2048);
        }
        return (
          i !== e && i && (t.child.flags |= 8192),
          Js(t, t.updateQueue),
          Ke(t),
          null
        );
      case 4:
        return Ve(), e === null && hf(t.stateNode.containerInfo), Ke(t), null;
      case 10:
        return kn(t.type), Ke(t), null;
      case 19:
        if ((te(nt), (u = t.memoizedState), u === null)) return Ke(t), null;
        if (((s = (t.flags & 128) !== 0), (f = u.rendering), f === null))
          if (s) dl(u, !1);
          else {
            if (Xe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((f = Ks(e)), f !== null)) {
                  for (
                    t.flags |= 128,
                      dl(u, !1),
                      e = f.updateQueue,
                      t.updateQueue = e,
                      Js(t, e),
                      t.subtreeFlags = 0,
                      e = i,
                      i = t.child;
                    i !== null;

                  )
                    cp(i, e), (i = i.sibling);
                  return I(nt, (nt.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            u.tail !== null &&
              Yt() > eo &&
              ((t.flags |= 128), (s = !0), dl(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!s)
            if (((e = Ks(f)), e !== null)) {
              if (
                ((t.flags |= 128),
                (s = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Js(t, e),
                dl(u, !0),
                u.tail === null &&
                  u.tailMode === 'hidden' &&
                  !f.alternate &&
                  !Ue)
              )
                return Ke(t), null;
            } else
              2 * Yt() - u.renderingStartTime > eo &&
                i !== 536870912 &&
                ((t.flags |= 128), (s = !0), dl(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((f.sibling = t.child), (t.child = f))
            : ((e = u.last),
              e !== null ? (e.sibling = f) : (t.child = f),
              (u.last = f));
        }
        return u.tail !== null
          ? ((t = u.tail),
            (u.rendering = t),
            (u.tail = t.sibling),
            (u.renderingStartTime = Yt()),
            (t.sibling = null),
            (e = nt.current),
            I(nt, s ? (e & 1) | 2 : e & 1),
            t)
          : (Ke(t), null);
      case 22:
      case 23:
        return (
          Hn(t),
          pc(),
          (s = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== s && (t.flags |= 8192)
            : s && (t.flags |= 8192),
          s
            ? (i & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ke(t),
          (i = t.updateQueue),
          i !== null && Js(t, i.retryQueue),
          (i = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (i = e.memoizedState.cachePool.pool),
          (s = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (s = t.memoizedState.cachePool.pool),
          s !== i && (t.flags |= 2048),
          e !== null && te($a),
          null
        );
      case 24:
        return (
          (i = null),
          e !== null && (i = e.memoizedState.cache),
          t.memoizedState.cache !== i && (t.flags |= 2048),
          kn(tt),
          Ke(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function Px(e, t) {
    switch ((ec(t), t.tag)) {
      case 1:
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          kn(tt),
          Ve(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return rn(t), null;
      case 13:
        if (
          (Hn(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(l(340));
          $r();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return te(nt), null;
      case 4:
        return Ve(), null;
      case 10:
        return kn(t.type), null;
      case 22:
      case 23:
        return (
          Hn(t),
          pc(),
          e !== null && te($a),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return kn(tt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function km(e, t) {
    switch ((ec(t), t.tag)) {
      case 3:
        kn(tt), Ve();
        break;
      case 26:
      case 27:
      case 5:
        rn(t);
        break;
      case 4:
        Ve();
        break;
      case 13:
        Hn(t);
        break;
      case 19:
        te(nt);
        break;
      case 10:
        kn(t.type);
        break;
      case 22:
      case 23:
        Hn(t), pc(), e !== null && te($a);
        break;
      case 24:
        kn(tt);
    }
  }
  function hl(e, t) {
    try {
      var i = t.updateQueue,
        s = i !== null ? i.lastEffect : null;
      if (s !== null) {
        var u = s.next;
        i = u;
        do {
          if ((i.tag & e) === e) {
            s = void 0;
            var f = i.create,
              y = i.inst;
            (s = f()), (y.destroy = s);
          }
          i = i.next;
        } while (i !== u);
      }
    } catch (b) {
      Pe(t, t.return, b);
    }
  }
  function ua(e, t, i) {
    try {
      var s = t.updateQueue,
        u = s !== null ? s.lastEffect : null;
      if (u !== null) {
        var f = u.next;
        s = f;
        do {
          if ((s.tag & e) === e) {
            var y = s.inst,
              b = y.destroy;
            if (b !== void 0) {
              (y.destroy = void 0), (u = t);
              var T = i,
                U = b;
              try {
                U();
              } catch (K) {
                Pe(u, T, K);
              }
            }
          }
          s = s.next;
        } while (s !== f);
      }
    } catch (K) {
      Pe(t, t.return, K);
    }
  }
  function Bm(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var i = e.stateNode;
      try {
        Op(t, i);
      } catch (s) {
        Pe(e, e.return, s);
      }
    }
  }
  function Hm(e, t, i) {
    (i.props = Ia(e.type, e.memoizedProps)), (i.state = e.memoizedState);
    try {
      i.componentWillUnmount();
    } catch (s) {
      Pe(e, t, s);
    }
  }
  function pl(e, t) {
    try {
      var i = e.ref;
      if (i !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var s = e.stateNode;
            break;
          case 30:
            s = e.stateNode;
            break;
          default:
            s = e.stateNode;
        }
        typeof i == 'function' ? (e.refCleanup = i(s)) : (i.current = s);
      }
    } catch (u) {
      Pe(e, t, u);
    }
  }
  function vn(e, t) {
    var i = e.ref,
      s = e.refCleanup;
    if (i !== null)
      if (typeof s == 'function')
        try {
          s();
        } catch (u) {
          Pe(e, t, u);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof i == 'function')
        try {
          i(null);
        } catch (u) {
          Pe(e, t, u);
        }
      else i.current = null;
  }
  function qm(e) {
    var t = e.type,
      i = e.memoizedProps,
      s = e.stateNode;
    try {
      e: switch (t) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          i.autoFocus && s.focus();
          break e;
        case 'img':
          i.src ? (s.src = i.src) : i.srcSet && (s.srcset = i.srcSet);
      }
    } catch (u) {
      Pe(e, e.return, u);
    }
  }
  function Pc(e, t, i) {
    try {
      var s = e.stateNode;
      u1(s, e.type, i, t), (s[Rt] = t);
    } catch (u) {
      Pe(e, e.return, u);
    }
  }
  function Gm(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && ya(e.type)) ||
      e.tag === 4
    );
  }
  function Vc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Gm(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && ya(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Qc(e, t, i) {
    var s = e.tag;
    if (s === 5 || s === 6)
      (e = e.stateNode),
        t
          ? (i.nodeType === 9
              ? i.body
              : i.nodeName === 'HTML'
                ? i.ownerDocument.body
                : i
            ).insertBefore(e, t)
          : ((t =
              i.nodeType === 9
                ? i.body
                : i.nodeName === 'HTML'
                  ? i.ownerDocument.body
                  : i),
            t.appendChild(e),
            (i = i._reactRootContainer),
            i != null || t.onclick !== null || (t.onclick = uo));
    else if (
      s !== 4 &&
      (s === 27 && ya(e.type) && ((i = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (Qc(e, t, i), e = e.sibling; e !== null; )
        Qc(e, t, i), (e = e.sibling);
  }
  function Is(e, t, i) {
    var s = e.tag;
    if (s === 5 || s === 6)
      (e = e.stateNode), t ? i.insertBefore(e, t) : i.appendChild(e);
    else if (
      s !== 4 &&
      (s === 27 && ya(e.type) && (i = e.stateNode), (e = e.child), e !== null)
    )
      for (Is(e, t, i), e = e.sibling; e !== null; )
        Is(e, t, i), (e = e.sibling);
  }
  function Pm(e) {
    var t = e.stateNode,
      i = e.memoizedProps;
    try {
      for (var s = e.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      ct(t, s, i), (t[ht] = e), (t[Rt] = i);
    } catch (f) {
      Pe(e, e.return, f);
    }
  }
  var Pn = !1,
    Je = !1,
    Yc = !1,
    Vm = typeof WeakSet == 'function' ? WeakSet : Set,
    lt = null;
  function Vx(e, t) {
    if (((e = e.containerInfo), (gf = yo), (e = ep(e)), Vu(e))) {
      if ('selectionStart' in e)
        var i = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          i = ((i = e.ownerDocument) && i.defaultView) || window;
          var s = i.getSelection && i.getSelection();
          if (s && s.rangeCount !== 0) {
            i = s.anchorNode;
            var u = s.anchorOffset,
              f = s.focusNode;
            s = s.focusOffset;
            try {
              i.nodeType, f.nodeType;
            } catch {
              i = null;
              break e;
            }
            var y = 0,
              b = -1,
              T = -1,
              U = 0,
              K = 0,
              X = e,
              j = null;
            t: for (;;) {
              for (
                var H;
                X !== i || (u !== 0 && X.nodeType !== 3) || (b = y + u),
                  X !== f || (s !== 0 && X.nodeType !== 3) || (T = y + s),
                  X.nodeType === 3 && (y += X.nodeValue.length),
                  (H = X.firstChild) !== null;

              )
                (j = X), (X = H);
              for (;;) {
                if (X === e) break t;
                if (
                  (j === i && ++U === u && (b = y),
                  j === f && ++K === s && (T = y),
                  (H = X.nextSibling) !== null)
                )
                  break;
                (X = j), (j = X.parentNode);
              }
              X = H;
            }
            i = b === -1 || T === -1 ? null : { start: b, end: T };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (
      yf = { focusedElem: e, selectionRange: i }, yo = !1, lt = t;
      lt !== null;

    )
      if (
        ((t = lt), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null)
      )
        (e.return = t), (lt = e);
      else
        for (; lt !== null; ) {
          switch (((t = lt), (f = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && f !== null) {
                (e = void 0),
                  (i = t),
                  (u = f.memoizedProps),
                  (f = f.memoizedState),
                  (s = i.stateNode);
                try {
                  var ge = Ia(i.type, u, i.elementType === i.type);
                  (e = s.getSnapshotBeforeUpdate(ge, f)),
                    (s.__reactInternalSnapshotBeforeUpdate = e);
                } catch (he) {
                  Pe(i, i.return, he);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (i = e.nodeType), i === 9)
                )
                  Sf(e);
                else if (i === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      Sf(e);
                      break;
                    default:
                      e.textContent = '';
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(l(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (lt = e);
            break;
          }
          lt = t.return;
        }
  }
  function Qm(e, t, i) {
    var s = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        ca(e, i), s & 4 && hl(5, i);
        break;
      case 1:
        if ((ca(e, i), s & 4))
          if (((e = i.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (y) {
              Pe(i, i.return, y);
            }
          else {
            var u = Ia(i.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(u, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (y) {
              Pe(i, i.return, y);
            }
          }
        s & 64 && Bm(i), s & 512 && pl(i, i.return);
        break;
      case 3:
        if ((ca(e, i), s & 64 && ((e = i.updateQueue), e !== null))) {
          if (((t = null), i.child !== null))
            switch (i.child.tag) {
              case 27:
              case 5:
                t = i.child.stateNode;
                break;
              case 1:
                t = i.child.stateNode;
            }
          try {
            Op(e, t);
          } catch (y) {
            Pe(i, i.return, y);
          }
        }
        break;
      case 27:
        t === null && s & 4 && Pm(i);
      case 26:
      case 5:
        ca(e, i), t === null && s & 4 && qm(i), s & 512 && pl(i, i.return);
        break;
      case 12:
        ca(e, i);
        break;
      case 13:
        ca(e, i),
          s & 4 && Fm(e, i),
          s & 64 &&
            ((e = i.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((i = Ix.bind(null, i)), g1(e, i))));
        break;
      case 22:
        if (((s = i.memoizedState !== null || Pn), !s)) {
          (t = (t !== null && t.memoizedState !== null) || Je), (u = Pn);
          var f = Je;
          (Pn = s),
            (Je = t) && !f ? fa(e, i, (i.subtreeFlags & 8772) !== 0) : ca(e, i),
            (Pn = u),
            (Je = f);
        }
        break;
      case 30:
        break;
      default:
        ca(e, i);
    }
  }
  function Ym(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Ym(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Ru(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var Ye = null,
    Tt = !1;
  function Vn(e, t, i) {
    for (i = i.child; i !== null; ) Km(e, t, i), (i = i.sibling);
  }
  function Km(e, t, i) {
    if (zt && typeof zt.onCommitFiberUnmount == 'function')
      try {
        zt.onCommitFiberUnmount(Ur, i);
      } catch {}
    switch (i.tag) {
      case 26:
        Je || vn(i, t),
          Vn(e, t, i),
          i.memoizedState
            ? i.memoizedState.count--
            : i.stateNode && ((i = i.stateNode), i.parentNode.removeChild(i));
        break;
      case 27:
        Je || vn(i, t);
        var s = Ye,
          u = Tt;
        ya(i.type) && ((Ye = i.stateNode), (Tt = !1)),
          Vn(e, t, i),
          El(i.stateNode),
          (Ye = s),
          (Tt = u);
        break;
      case 5:
        Je || vn(i, t);
      case 6:
        if (
          ((s = Ye),
          (u = Tt),
          (Ye = null),
          Vn(e, t, i),
          (Ye = s),
          (Tt = u),
          Ye !== null)
        )
          if (Tt)
            try {
              (Ye.nodeType === 9
                ? Ye.body
                : Ye.nodeName === 'HTML'
                  ? Ye.ownerDocument.body
                  : Ye
              ).removeChild(i.stateNode);
            } catch (f) {
              Pe(i, t, f);
            }
          else
            try {
              Ye.removeChild(i.stateNode);
            } catch (f) {
              Pe(i, t, f);
            }
        break;
      case 18:
        Ye !== null &&
          (Tt
            ? ((e = Ye),
              zg(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === 'HTML'
                    ? e.ownerDocument.body
                    : e,
                i.stateNode,
              ),
              _l(e))
            : zg(Ye, i.stateNode));
        break;
      case 4:
        (s = Ye),
          (u = Tt),
          (Ye = i.stateNode.containerInfo),
          (Tt = !0),
          Vn(e, t, i),
          (Ye = s),
          (Tt = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Je || ua(2, i, t), Je || ua(4, i, t), Vn(e, t, i);
        break;
      case 1:
        Je ||
          (vn(i, t),
          (s = i.stateNode),
          typeof s.componentWillUnmount == 'function' && Hm(i, t, s)),
          Vn(e, t, i);
        break;
      case 21:
        Vn(e, t, i);
        break;
      case 22:
        (Je = (s = Je) || i.memoizedState !== null), Vn(e, t, i), (Je = s);
        break;
      default:
        Vn(e, t, i);
    }
  }
  function Fm(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        _l(e);
      } catch (i) {
        Pe(t, t.return, i);
      }
  }
  function Qx(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Vm()), t;
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Vm()),
          t
        );
      default:
        throw Error(l(435, e.tag));
    }
  }
  function Kc(e, t) {
    var i = Qx(e);
    t.forEach(function (s) {
      var u = Wx.bind(null, e, s);
      i.has(s) || (i.add(s), s.then(u, u));
    });
  }
  function Bt(e, t) {
    var i = t.deletions;
    if (i !== null)
      for (var s = 0; s < i.length; s++) {
        var u = i[s],
          f = e,
          y = t,
          b = y;
        e: for (; b !== null; ) {
          switch (b.tag) {
            case 27:
              if (ya(b.type)) {
                (Ye = b.stateNode), (Tt = !1);
                break e;
              }
              break;
            case 5:
              (Ye = b.stateNode), (Tt = !1);
              break e;
            case 3:
            case 4:
              (Ye = b.stateNode.containerInfo), (Tt = !0);
              break e;
          }
          b = b.return;
        }
        if (Ye === null) throw Error(l(160));
        Km(f, y, u),
          (Ye = null),
          (Tt = !1),
          (f = u.alternate),
          f !== null && (f.return = null),
          (u.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) Xm(t, e), (t = t.sibling);
  }
  var on = null;
  function Xm(e, t) {
    var i = e.alternate,
      s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Bt(t, e),
          Ht(e),
          s & 4 && (ua(3, e, e.return), hl(3, e), ua(5, e, e.return));
        break;
      case 1:
        Bt(t, e),
          Ht(e),
          s & 512 && (Je || i === null || vn(i, i.return)),
          s & 64 &&
            Pn &&
            ((e = e.updateQueue),
            e !== null &&
              ((s = e.callbacks),
              s !== null &&
                ((i = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = i === null ? s : i.concat(s)))));
        break;
      case 26:
        var u = on;
        if (
          (Bt(t, e),
          Ht(e),
          s & 512 && (Je || i === null || vn(i, i.return)),
          s & 4)
        ) {
          var f = i !== null ? i.memoizedState : null;
          if (((s = e.memoizedState), i === null))
            if (s === null)
              if (e.stateNode === null) {
                e: {
                  (s = e.type),
                    (i = e.memoizedProps),
                    (u = u.ownerDocument || u);
                  t: switch (s) {
                    case 'title':
                      (f = u.getElementsByTagName('title')[0]),
                        (!f ||
                          f[Br] ||
                          f[ht] ||
                          f.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          f.hasAttribute('itemprop')) &&
                          ((f = u.createElement(s)),
                          u.head.insertBefore(
                            f,
                            u.querySelector('head > title'),
                          )),
                        ct(f, s, i),
                        (f[ht] = e),
                        it(f),
                        (s = f);
                      break e;
                    case 'link':
                      var y = Pg('link', 'href', u).get(s + (i.href || ''));
                      if (y) {
                        for (var b = 0; b < y.length; b++)
                          if (
                            ((f = y[b]),
                            f.getAttribute('href') ===
                              (i.href == null || i.href === ''
                                ? null
                                : i.href) &&
                              f.getAttribute('rel') ===
                                (i.rel == null ? null : i.rel) &&
                              f.getAttribute('title') ===
                                (i.title == null ? null : i.title) &&
                              f.getAttribute('crossorigin') ===
                                (i.crossOrigin == null ? null : i.crossOrigin))
                          ) {
                            y.splice(b, 1);
                            break t;
                          }
                      }
                      (f = u.createElement(s)),
                        ct(f, s, i),
                        u.head.appendChild(f);
                      break;
                    case 'meta':
                      if (
                        (y = Pg('meta', 'content', u).get(
                          s + (i.content || ''),
                        ))
                      ) {
                        for (b = 0; b < y.length; b++)
                          if (
                            ((f = y[b]),
                            f.getAttribute('content') ===
                              (i.content == null ? null : '' + i.content) &&
                              f.getAttribute('name') ===
                                (i.name == null ? null : i.name) &&
                              f.getAttribute('property') ===
                                (i.property == null ? null : i.property) &&
                              f.getAttribute('http-equiv') ===
                                (i.httpEquiv == null ? null : i.httpEquiv) &&
                              f.getAttribute('charset') ===
                                (i.charSet == null ? null : i.charSet))
                          ) {
                            y.splice(b, 1);
                            break t;
                          }
                      }
                      (f = u.createElement(s)),
                        ct(f, s, i),
                        u.head.appendChild(f);
                      break;
                    default:
                      throw Error(l(468, s));
                  }
                  (f[ht] = e), it(f), (s = f);
                }
                e.stateNode = s;
              } else Vg(u, e.type, e.stateNode);
            else e.stateNode = Gg(u, s, e.memoizedProps);
          else
            f !== s
              ? (f === null
                  ? i.stateNode !== null &&
                    ((i = i.stateNode), i.parentNode.removeChild(i))
                  : f.count--,
                s === null
                  ? Vg(u, e.type, e.stateNode)
                  : Gg(u, s, e.memoizedProps))
              : s === null &&
                e.stateNode !== null &&
                Pc(e, e.memoizedProps, i.memoizedProps);
        }
        break;
      case 27:
        Bt(t, e),
          Ht(e),
          s & 512 && (Je || i === null || vn(i, i.return)),
          i !== null && s & 4 && Pc(e, e.memoizedProps, i.memoizedProps);
        break;
      case 5:
        if (
          (Bt(t, e),
          Ht(e),
          s & 512 && (Je || i === null || vn(i, i.return)),
          e.flags & 32)
        ) {
          u = e.stateNode;
          try {
            Ti(u, '');
          } catch (H) {
            Pe(e, e.return, H);
          }
        }
        s & 4 &&
          e.stateNode != null &&
          ((u = e.memoizedProps), Pc(e, u, i !== null ? i.memoizedProps : u)),
          s & 1024 && (Yc = !0);
        break;
      case 6:
        if ((Bt(t, e), Ht(e), s & 4)) {
          if (e.stateNode === null) throw Error(l(162));
          (s = e.memoizedProps), (i = e.stateNode);
          try {
            i.nodeValue = s;
          } catch (H) {
            Pe(e, e.return, H);
          }
        }
        break;
      case 3:
        if (
          ((po = null),
          (u = on),
          (on = fo(t.containerInfo)),
          Bt(t, e),
          (on = u),
          Ht(e),
          s & 4 && i !== null && i.memoizedState.isDehydrated)
        )
          try {
            _l(t.containerInfo);
          } catch (H) {
            Pe(e, e.return, H);
          }
        Yc && ((Yc = !1), Zm(e));
        break;
      case 4:
        (s = on),
          (on = fo(e.stateNode.containerInfo)),
          Bt(t, e),
          Ht(e),
          (on = s);
        break;
      case 12:
        Bt(t, e), Ht(e);
        break;
      case 13:
        Bt(t, e),
          Ht(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (i !== null && i.memoizedState !== null) &&
            (Ic = Yt()),
          s & 4 &&
            ((s = e.updateQueue),
            s !== null && ((e.updateQueue = null), Kc(e, s)));
        break;
      case 22:
        u = e.memoizedState !== null;
        var T = i !== null && i.memoizedState !== null,
          U = Pn,
          K = Je;
        if (
          ((Pn = U || u),
          (Je = K || T),
          Bt(t, e),
          (Je = K),
          (Pn = U),
          Ht(e),
          s & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = u ? t._visibility & -2 : t._visibility | 1,
              u && (i === null || T || Pn || Je || Wa(e)),
              i = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (i === null) {
                T = i = t;
                try {
                  if (((f = T.stateNode), u))
                    (y = f.style),
                      typeof y.setProperty == 'function'
                        ? y.setProperty('display', 'none', 'important')
                        : (y.display = 'none');
                  else {
                    b = T.stateNode;
                    var X = T.memoizedProps.style,
                      j =
                        X != null && X.hasOwnProperty('display')
                          ? X.display
                          : null;
                    b.style.display =
                      j == null || typeof j == 'boolean' ? '' : ('' + j).trim();
                  }
                } catch (H) {
                  Pe(T, T.return, H);
                }
              }
            } else if (t.tag === 6) {
              if (i === null) {
                T = t;
                try {
                  T.stateNode.nodeValue = u ? '' : T.memoizedProps;
                } catch (H) {
                  Pe(T, T.return, H);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              i === t && (i = null), (t = t.return);
            }
            i === t && (i = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        s & 4 &&
          ((s = e.updateQueue),
          s !== null &&
            ((i = s.retryQueue),
            i !== null && ((s.retryQueue = null), Kc(e, i))));
        break;
      case 19:
        Bt(t, e),
          Ht(e),
          s & 4 &&
            ((s = e.updateQueue),
            s !== null && ((e.updateQueue = null), Kc(e, s)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Bt(t, e), Ht(e);
    }
  }
  function Ht(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var i, s = e.return; s !== null; ) {
          if (Gm(s)) {
            i = s;
            break;
          }
          s = s.return;
        }
        if (i == null) throw Error(l(160));
        switch (i.tag) {
          case 27:
            var u = i.stateNode,
              f = Vc(e);
            Is(e, f, u);
            break;
          case 5:
            var y = i.stateNode;
            i.flags & 32 && (Ti(y, ''), (i.flags &= -33));
            var b = Vc(e);
            Is(e, b, y);
            break;
          case 3:
          case 4:
            var T = i.stateNode.containerInfo,
              U = Vc(e);
            Qc(e, U, T);
            break;
          default:
            throw Error(l(161));
        }
      } catch (K) {
        Pe(e, e.return, K);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Zm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Zm(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function ca(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) Qm(e, t.alternate, t), (t = t.sibling);
  }
  function Wa(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ua(4, t, t.return), Wa(t);
          break;
        case 1:
          vn(t, t.return);
          var i = t.stateNode;
          typeof i.componentWillUnmount == 'function' && Hm(t, t.return, i),
            Wa(t);
          break;
        case 27:
          El(t.stateNode);
        case 26:
        case 5:
          vn(t, t.return), Wa(t);
          break;
        case 22:
          t.memoizedState === null && Wa(t);
          break;
        case 30:
          Wa(t);
          break;
        default:
          Wa(t);
      }
      e = e.sibling;
    }
  }
  function fa(e, t, i) {
    for (i = i && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var s = t.alternate,
        u = e,
        f = t,
        y = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          fa(u, f, i), hl(4, f);
          break;
        case 1:
          if (
            (fa(u, f, i),
            (s = f),
            (u = s.stateNode),
            typeof u.componentDidMount == 'function')
          )
            try {
              u.componentDidMount();
            } catch (U) {
              Pe(s, s.return, U);
            }
          if (((s = f), (u = s.updateQueue), u !== null)) {
            var b = s.stateNode;
            try {
              var T = u.shared.hiddenCallbacks;
              if (T !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < T.length; u++)
                  Rp(T[u], b);
            } catch (U) {
              Pe(s, s.return, U);
            }
          }
          i && y & 64 && Bm(f), pl(f, f.return);
          break;
        case 27:
          Pm(f);
        case 26:
        case 5:
          fa(u, f, i), i && s === null && y & 4 && qm(f), pl(f, f.return);
          break;
        case 12:
          fa(u, f, i);
          break;
        case 13:
          fa(u, f, i), i && y & 4 && Fm(u, f);
          break;
        case 22:
          f.memoizedState === null && fa(u, f, i), pl(f, f.return);
          break;
        case 30:
          break;
        default:
          fa(u, f, i);
      }
      t = t.sibling;
    }
  }
  function Fc(e, t) {
    var i = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (i = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== i && (e != null && e.refCount++, i != null && Wr(i));
  }
  function Xc(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Wr(e));
  }
  function bn(e, t, i, s) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) $m(e, t, i, s), (t = t.sibling);
  }
  function $m(e, t, i, s) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        bn(e, t, i, s), u & 2048 && hl(9, t);
        break;
      case 1:
        bn(e, t, i, s);
        break;
      case 3:
        bn(e, t, i, s),
          u & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Wr(e)));
        break;
      case 12:
        if (u & 2048) {
          bn(e, t, i, s), (e = t.stateNode);
          try {
            var f = t.memoizedProps,
              y = f.id,
              b = f.onPostCommit;
            typeof b == 'function' &&
              b(
                y,
                t.alternate === null ? 'mount' : 'update',
                e.passiveEffectDuration,
                -0,
              );
          } catch (T) {
            Pe(t, t.return, T);
          }
        } else bn(e, t, i, s);
        break;
      case 13:
        bn(e, t, i, s);
        break;
      case 23:
        break;
      case 22:
        (f = t.stateNode),
          (y = t.alternate),
          t.memoizedState !== null
            ? f._visibility & 2
              ? bn(e, t, i, s)
              : ml(e, t)
            : f._visibility & 2
              ? bn(e, t, i, s)
              : ((f._visibility |= 2),
                Ki(e, t, i, s, (t.subtreeFlags & 10256) !== 0)),
          u & 2048 && Fc(y, t);
        break;
      case 24:
        bn(e, t, i, s), u & 2048 && Xc(t.alternate, t);
        break;
      default:
        bn(e, t, i, s);
    }
  }
  function Ki(e, t, i, s, u) {
    for (u = u && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var f = e,
        y = t,
        b = i,
        T = s,
        U = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          Ki(f, y, b, T, u), hl(8, y);
          break;
        case 23:
          break;
        case 22:
          var K = y.stateNode;
          y.memoizedState !== null
            ? K._visibility & 2
              ? Ki(f, y, b, T, u)
              : ml(f, y)
            : ((K._visibility |= 2), Ki(f, y, b, T, u)),
            u && U & 2048 && Fc(y.alternate, y);
          break;
        case 24:
          Ki(f, y, b, T, u), u && U & 2048 && Xc(y.alternate, y);
          break;
        default:
          Ki(f, y, b, T, u);
      }
      t = t.sibling;
    }
  }
  function ml(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var i = e,
          s = t,
          u = s.flags;
        switch (s.tag) {
          case 22:
            ml(i, s), u & 2048 && Fc(s.alternate, s);
            break;
          case 24:
            ml(i, s), u & 2048 && Xc(s.alternate, s);
            break;
          default:
            ml(i, s);
        }
        t = t.sibling;
      }
  }
  var gl = 8192;
  function Fi(e) {
    if (e.subtreeFlags & gl)
      for (e = e.child; e !== null; ) Jm(e), (e = e.sibling);
  }
  function Jm(e) {
    switch (e.tag) {
      case 26:
        Fi(e),
          e.flags & gl &&
            e.memoizedState !== null &&
            M1(on, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Fi(e);
        break;
      case 3:
      case 4:
        var t = on;
        (on = fo(e.stateNode.containerInfo)), Fi(e), (on = t);
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = gl), (gl = 16777216), Fi(e), (gl = t))
            : Fi(e));
        break;
      default:
        Fi(e);
    }
  }
  function Im(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function yl(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var i = 0; i < t.length; i++) {
          var s = t[i];
          (lt = s), eg(s, e);
        }
      Im(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Wm(e), (e = e.sibling);
  }
  function Wm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        yl(e), e.flags & 2048 && ua(9, e, e.return);
        break;
      case 3:
        yl(e);
        break;
      case 12:
        yl(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Ws(e))
          : yl(e);
        break;
      default:
        yl(e);
    }
  }
  function Ws(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var i = 0; i < t.length; i++) {
          var s = t[i];
          (lt = s), eg(s, e);
        }
      Im(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          ua(8, t, t.return), Ws(t);
          break;
        case 22:
          (i = t.stateNode),
            i._visibility & 2 && ((i._visibility &= -3), Ws(t));
          break;
        default:
          Ws(t);
      }
      e = e.sibling;
    }
  }
  function eg(e, t) {
    for (; lt !== null; ) {
      var i = lt;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ua(8, i, t);
          break;
        case 23:
        case 22:
          if (i.memoizedState !== null && i.memoizedState.cachePool !== null) {
            var s = i.memoizedState.cachePool.pool;
            s != null && s.refCount++;
          }
          break;
        case 24:
          Wr(i.memoizedState.cache);
      }
      if (((s = i.child), s !== null)) (s.return = i), (lt = s);
      else
        e: for (i = e; lt !== null; ) {
          s = lt;
          var u = s.sibling,
            f = s.return;
          if ((Ym(s), s === i)) {
            lt = null;
            break e;
          }
          if (u !== null) {
            (u.return = f), (lt = u);
            break e;
          }
          lt = f;
        }
    }
  }
  var Yx = {
      getCacheForType: function (e) {
        var t = pt(tt),
          i = t.data.get(e);
        return i === void 0 && ((i = e()), t.data.set(e, i)), i;
      },
    },
    Kx = typeof WeakMap == 'function' ? WeakMap : Map,
    ke = 0,
    Qe = null,
    Te = null,
    _e = 0,
    Be = 0,
    qt = null,
    da = !1,
    Xi = !1,
    Zc = !1,
    Qn = 0,
    Xe = 0,
    ha = 0,
    ei = 0,
    $c = 0,
    Wt = 0,
    Zi = 0,
    vl = null,
    Ct = null,
    Jc = !1,
    Ic = 0,
    eo = 1 / 0,
    to = null,
    pa = null,
    ut = 0,
    ma = null,
    $i = null,
    Ji = 0,
    Wc = 0,
    ef = null,
    tg = null,
    bl = 0,
    tf = null;
  function Gt() {
    if ((ke & 2) !== 0 && _e !== 0) return _e & -_e;
    if (N.T !== null) {
      var e = Bi;
      return e !== 0 ? e : uf();
    }
    return yh();
  }
  function ng() {
    Wt === 0 && (Wt = (_e & 536870912) === 0 || Ue ? hh() : 536870912);
    var e = It.current;
    return e !== null && (e.flags |= 32), Wt;
  }
  function Pt(e, t, i) {
    ((e === Qe && (Be === 2 || Be === 9)) || e.cancelPendingCommit !== null) &&
      (Ii(e, 0), ga(e, _e, Wt, !1)),
      kr(e, i),
      ((ke & 2) === 0 || e !== Qe) &&
        (e === Qe &&
          ((ke & 2) === 0 && (ei |= i), Xe === 4 && ga(e, _e, Wt, !1)),
        Sn(e));
  }
  function ag(e, t, i) {
    if ((ke & 6) !== 0) throw Error(l(327));
    var s = (!i && (t & 124) === 0 && (t & e.expiredLanes) === 0) || jr(e, t),
      u = s ? Zx(e, t) : rf(e, t, !0),
      f = s;
    do {
      if (u === 0) {
        Xi && !s && ga(e, t, 0, !1);
        break;
      } else {
        if (((i = e.current.alternate), f && !Fx(i))) {
          (u = rf(e, t, !1)), (f = !1);
          continue;
        }
        if (u === 2) {
          if (((f = t), e.errorRecoveryDisabledLanes & f)) var y = 0;
          else
            (y = e.pendingLanes & -536870913),
              (y = y !== 0 ? y : y & 536870912 ? 536870912 : 0);
          if (y !== 0) {
            t = y;
            e: {
              var b = e;
              u = vl;
              var T = b.current.memoizedState.isDehydrated;
              if ((T && (Ii(b, y).flags |= 256), (y = rf(b, y, !1)), y !== 2)) {
                if (Zc && !T) {
                  (b.errorRecoveryDisabledLanes |= f), (ei |= f), (u = 4);
                  break e;
                }
                (f = Ct),
                  (Ct = u),
                  f !== null && (Ct === null ? (Ct = f) : Ct.push.apply(Ct, f));
              }
              u = y;
            }
            if (((f = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          Ii(e, 0), ga(e, t, 0, !0);
          break;
        }
        e: {
          switch (((s = e), (f = u), f)) {
            case 0:
            case 1:
              throw Error(l(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ga(s, t, Wt, !da);
              break e;
            case 2:
              Ct = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(l(329));
          }
          if ((t & 62914560) === t && ((u = Ic + 300 - Yt()), 10 < u)) {
            if ((ga(s, t, Wt, !da), ds(s, 0, !0) !== 0)) break e;
            s.timeoutHandle = Ng(
              ig.bind(null, s, i, Ct, to, Jc, t, Wt, ei, Zi, da, f, 2, -0, 0),
              u,
            );
            break e;
          }
          ig(s, i, Ct, to, Jc, t, Wt, ei, Zi, da, f, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Sn(e);
  }
  function ig(e, t, i, s, u, f, y, b, T, U, K, X, j, H) {
    if (
      ((e.timeoutHandle = -1),
      (X = t.subtreeFlags),
      (X & 8192 || (X & 16785408) === 16785408) &&
        ((Al = { stylesheets: null, count: 0, unsuspend: C1 }),
        Jm(t),
        (X = D1()),
        X !== null))
    ) {
      (e.cancelPendingCommit = X(
        fg.bind(null, e, t, f, i, s, u, y, b, T, K, 1, j, H),
      )),
        ga(e, f, y, !U);
      return;
    }
    fg(e, t, f, i, s, u, y, b, T);
  }
  function Fx(e) {
    for (var t = e; ; ) {
      var i = t.tag;
      if (
        (i === 0 || i === 11 || i === 15) &&
        t.flags & 16384 &&
        ((i = t.updateQueue), i !== null && ((i = i.stores), i !== null))
      )
        for (var s = 0; s < i.length; s++) {
          var u = i[s],
            f = u.getSnapshot;
          u = u.value;
          try {
            if (!jt(f(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((i = t.child), t.subtreeFlags & 16384 && i !== null))
        (i.return = t), (t = i);
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
  function ga(e, t, i, s) {
    (t &= ~$c),
      (t &= ~ei),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      s && (e.warmLanes |= t),
      (s = e.expirationTimes);
    for (var u = t; 0 < u; ) {
      var f = 31 - Ut(u),
        y = 1 << f;
      (s[f] = -1), (u &= ~y);
    }
    i !== 0 && mh(e, i, t);
  }
  function no() {
    return (ke & 6) === 0 ? (Sl(0), !1) : !0;
  }
  function nf() {
    if (Te !== null) {
      if (Be === 0) var e = Te.return;
      else (e = Te), (jn = Xa = null), bc(e), (Qi = null), (cl = 0), (e = Te);
      for (; e !== null; ) km(e.alternate, e), (e = e.return);
      Te = null;
    }
  }
  function Ii(e, t) {
    var i = e.timeoutHandle;
    i !== -1 && ((e.timeoutHandle = -1), f1(i)),
      (i = e.cancelPendingCommit),
      i !== null && ((e.cancelPendingCommit = null), i()),
      nf(),
      (Qe = e),
      (Te = i = Ln(e.current, null)),
      (_e = t),
      (Be = 0),
      (qt = null),
      (da = !1),
      (Xi = jr(e, t)),
      (Zc = !1),
      (Zi = Wt = $c = ei = ha = Xe = 0),
      (Ct = vl = null),
      (Jc = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var s = e.entangledLanes;
    if (s !== 0)
      for (e = e.entanglements, s &= t; 0 < s; ) {
        var u = 31 - Ut(s),
          f = 1 << u;
        (t |= e[u]), (s &= ~f);
      }
    return (Qn = t), Rs(), i;
  }
  function rg(e, t) {
    (Re = null),
      (N.H = Vs),
      t === tl || t === Ls
        ? ((t = wp()), (Be = 3))
        : t === bp
          ? ((t = wp()), (Be = 4))
          : (Be =
              t === Em
                ? 8
                : t !== null &&
                    typeof t == 'object' &&
                    typeof t.then == 'function'
                  ? 6
                  : 1),
      (qt = t),
      Te === null && ((Xe = 1), Xs(e, Xt(t, e.current)));
  }
  function lg() {
    var e = N.H;
    return (N.H = Vs), e === null ? Vs : e;
  }
  function sg() {
    var e = N.A;
    return (N.A = Yx), e;
  }
  function af() {
    (Xe = 4),
      da || ((_e & 4194048) !== _e && It.current !== null) || (Xi = !0),
      ((ha & 134217727) === 0 && (ei & 134217727) === 0) ||
        Qe === null ||
        ga(Qe, _e, Wt, !1);
  }
  function rf(e, t, i) {
    var s = ke;
    ke |= 2;
    var u = lg(),
      f = sg();
    (Qe !== e || _e !== t) && ((to = null), Ii(e, t)), (t = !1);
    var y = Xe;
    e: do
      try {
        if (Be !== 0 && Te !== null) {
          var b = Te,
            T = qt;
          switch (Be) {
            case 8:
              nf(), (y = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              It.current === null && (t = !0);
              var U = Be;
              if (((Be = 0), (qt = null), Wi(e, b, T, U), i && Xi)) {
                y = 0;
                break e;
              }
              break;
            default:
              (U = Be), (Be = 0), (qt = null), Wi(e, b, T, U);
          }
        }
        Xx(), (y = Xe);
        break;
      } catch (K) {
        rg(e, K);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (jn = Xa = null),
      (ke = s),
      (N.H = u),
      (N.A = f),
      Te === null && ((Qe = null), (_e = 0), Rs()),
      y
    );
  }
  function Xx() {
    for (; Te !== null; ) og(Te);
  }
  function Zx(e, t) {
    var i = ke;
    ke |= 2;
    var s = lg(),
      u = sg();
    Qe !== e || _e !== t
      ? ((to = null), (eo = Yt() + 500), Ii(e, t))
      : (Xi = jr(e, t));
    e: do
      try {
        if (Be !== 0 && Te !== null) {
          t = Te;
          var f = qt;
          t: switch (Be) {
            case 1:
              (Be = 0), (qt = null), Wi(e, t, f, 1);
              break;
            case 2:
            case 9:
              if (Sp(f)) {
                (Be = 0), (qt = null), ug(t);
                break;
              }
              (t = function () {
                (Be !== 2 && Be !== 9) || Qe !== e || (Be = 7), Sn(e);
              }),
                f.then(t, t);
              break e;
            case 3:
              Be = 7;
              break e;
            case 4:
              Be = 5;
              break e;
            case 7:
              Sp(f)
                ? ((Be = 0), (qt = null), ug(t))
                : ((Be = 0), (qt = null), Wi(e, t, f, 7));
              break;
            case 5:
              var y = null;
              switch (Te.tag) {
                case 26:
                  y = Te.memoizedState;
                case 5:
                case 27:
                  var b = Te;
                  if (!y || Qg(y)) {
                    (Be = 0), (qt = null);
                    var T = b.sibling;
                    if (T !== null) Te = T;
                    else {
                      var U = b.return;
                      U !== null ? ((Te = U), ao(U)) : (Te = null);
                    }
                    break t;
                  }
              }
              (Be = 0), (qt = null), Wi(e, t, f, 5);
              break;
            case 6:
              (Be = 0), (qt = null), Wi(e, t, f, 6);
              break;
            case 8:
              nf(), (Xe = 6);
              break e;
            default:
              throw Error(l(462));
          }
        }
        $x();
        break;
      } catch (K) {
        rg(e, K);
      }
    while (!0);
    return (
      (jn = Xa = null),
      (N.H = s),
      (N.A = u),
      (ke = i),
      Te !== null ? 0 : ((Qe = null), (_e = 0), Rs(), Xe)
    );
  }
  function $x() {
    for (; Te !== null && !yu(); ) og(Te);
  }
  function og(e) {
    var t = Um(e.alternate, e, Qn);
    (e.memoizedProps = e.pendingProps), t === null ? ao(e) : (Te = t);
  }
  function ug(e) {
    var t = e,
      i = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Mm(i, t, t.pendingProps, t.type, void 0, _e);
        break;
      case 11:
        t = Mm(i, t, t.pendingProps, t.type.render, t.ref, _e);
        break;
      case 5:
        bc(t);
      default:
        km(i, t), (t = Te = cp(t, Qn)), (t = Um(i, t, Qn));
    }
    (e.memoizedProps = e.pendingProps), t === null ? ao(e) : (Te = t);
  }
  function Wi(e, t, i, s) {
    (jn = Xa = null), bc(t), (Qi = null), (cl = 0);
    var u = t.return;
    try {
      if (Hx(e, u, t, i, _e)) {
        (Xe = 1), Xs(e, Xt(i, e.current)), (Te = null);
        return;
      }
    } catch (f) {
      if (u !== null) throw ((Te = u), f);
      (Xe = 1), Xs(e, Xt(i, e.current)), (Te = null);
      return;
    }
    t.flags & 32768
      ? (Ue || s === 1
          ? (e = !0)
          : Xi || (_e & 536870912) !== 0
            ? (e = !1)
            : ((da = e = !0),
              (s === 2 || s === 9 || s === 3 || s === 6) &&
                ((s = It.current),
                s !== null && s.tag === 13 && (s.flags |= 16384))),
        cg(t, e))
      : ao(t);
  }
  function ao(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        cg(t, da);
        return;
      }
      e = t.return;
      var i = Gx(t.alternate, t, Qn);
      if (i !== null) {
        Te = i;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Te = t;
        return;
      }
      Te = t = e;
    } while (t !== null);
    Xe === 0 && (Xe = 5);
  }
  function cg(e, t) {
    do {
      var i = Px(e.alternate, e);
      if (i !== null) {
        (i.flags &= 32767), (Te = i);
        return;
      }
      if (
        ((i = e.return),
        i !== null &&
          ((i.flags |= 32768), (i.subtreeFlags = 0), (i.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Te = e;
        return;
      }
      Te = e = i;
    } while (e !== null);
    (Xe = 6), (Te = null);
  }
  function fg(e, t, i, s, u, f, y, b, T) {
    e.cancelPendingCommit = null;
    do io();
    while (ut !== 0);
    if ((ke & 6) !== 0) throw Error(l(327));
    if (t !== null) {
      if (t === e.current) throw Error(l(177));
      if (
        ((f = t.lanes | t.childLanes),
        (f |= Xu),
        CS(e, i, f, y, b, T),
        e === Qe && ((Te = Qe = null), (_e = 0)),
        ($i = t),
        (ma = e),
        (Ji = i),
        (Wc = f),
        (ef = u),
        (tg = s),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            e1(us, function () {
              return gg(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (s = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || s)
      ) {
        (s = N.T), (N.T = null), (u = $.p), ($.p = 2), (y = ke), (ke |= 4);
        try {
          Vx(e, t, i);
        } finally {
          (ke = y), ($.p = u), (N.T = s);
        }
      }
      (ut = 1), dg(), hg(), pg();
    }
  }
  function dg() {
    if (ut === 1) {
      ut = 0;
      var e = ma,
        t = $i,
        i = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || i) {
        (i = N.T), (N.T = null);
        var s = $.p;
        $.p = 2;
        var u = ke;
        ke |= 4;
        try {
          Xm(t, e);
          var f = yf,
            y = ep(e.containerInfo),
            b = f.focusedElem,
            T = f.selectionRange;
          if (
            y !== b &&
            b &&
            b.ownerDocument &&
            Wh(b.ownerDocument.documentElement, b)
          ) {
            if (T !== null && Vu(b)) {
              var U = T.start,
                K = T.end;
              if ((K === void 0 && (K = U), 'selectionStart' in b))
                (b.selectionStart = U),
                  (b.selectionEnd = Math.min(K, b.value.length));
              else {
                var X = b.ownerDocument || document,
                  j = (X && X.defaultView) || window;
                if (j.getSelection) {
                  var H = j.getSelection(),
                    ge = b.textContent.length,
                    he = Math.min(T.start, ge),
                    Ge = T.end === void 0 ? he : Math.min(T.end, ge);
                  !H.extend && he > Ge && ((y = Ge), (Ge = he), (he = y));
                  var D = Ih(b, he),
                    C = Ih(b, Ge);
                  if (
                    D &&
                    C &&
                    (H.rangeCount !== 1 ||
                      H.anchorNode !== D.node ||
                      H.anchorOffset !== D.offset ||
                      H.focusNode !== C.node ||
                      H.focusOffset !== C.offset)
                  ) {
                    var z = X.createRange();
                    z.setStart(D.node, D.offset),
                      H.removeAllRanges(),
                      he > Ge
                        ? (H.addRange(z), H.extend(C.node, C.offset))
                        : (z.setEnd(C.node, C.offset), H.addRange(z));
                  }
                }
              }
            }
            for (X = [], H = b; (H = H.parentNode); )
              H.nodeType === 1 &&
                X.push({ element: H, left: H.scrollLeft, top: H.scrollTop });
            for (
              typeof b.focus == 'function' && b.focus(), b = 0;
              b < X.length;
              b++
            ) {
              var F = X[b];
              (F.element.scrollLeft = F.left), (F.element.scrollTop = F.top);
            }
          }
          (yo = !!gf), (yf = gf = null);
        } finally {
          (ke = u), ($.p = s), (N.T = i);
        }
      }
      (e.current = t), (ut = 2);
    }
  }
  function hg() {
    if (ut === 2) {
      ut = 0;
      var e = ma,
        t = $i,
        i = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || i) {
        (i = N.T), (N.T = null);
        var s = $.p;
        $.p = 2;
        var u = ke;
        ke |= 4;
        try {
          Qm(e, t.alternate, t);
        } finally {
          (ke = u), ($.p = s), (N.T = i);
        }
      }
      ut = 3;
    }
  }
  function pg() {
    if (ut === 4 || ut === 3) {
      (ut = 0), vu();
      var e = ma,
        t = $i,
        i = Ji,
        s = tg;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (ut = 5)
        : ((ut = 0), ($i = ma = null), mg(e, e.pendingLanes));
      var u = e.pendingLanes;
      if (
        (u === 0 && (pa = null),
        wu(i),
        (t = t.stateNode),
        zt && typeof zt.onCommitFiberRoot == 'function')
      )
        try {
          zt.onCommitFiberRoot(Ur, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (s !== null) {
        (t = N.T), (u = $.p), ($.p = 2), (N.T = null);
        try {
          for (var f = e.onRecoverableError, y = 0; y < s.length; y++) {
            var b = s[y];
            f(b.value, { componentStack: b.stack });
          }
        } finally {
          (N.T = t), ($.p = u);
        }
      }
      (Ji & 3) !== 0 && io(),
        Sn(e),
        (u = e.pendingLanes),
        (i & 4194090) !== 0 && (u & 42) !== 0
          ? e === tf
            ? bl++
            : ((bl = 0), (tf = e))
          : (bl = 0),
        Sl(0);
    }
  }
  function mg(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Wr(t)));
  }
  function io(e) {
    return dg(), hg(), pg(), gg();
  }
  function gg() {
    if (ut !== 5) return !1;
    var e = ma,
      t = Wc;
    Wc = 0;
    var i = wu(Ji),
      s = N.T,
      u = $.p;
    try {
      ($.p = 32 > i ? 32 : i), (N.T = null), (i = ef), (ef = null);
      var f = ma,
        y = Ji;
      if (((ut = 0), ($i = ma = null), (Ji = 0), (ke & 6) !== 0))
        throw Error(l(331));
      var b = ke;
      if (
        ((ke |= 4),
        Wm(f.current),
        $m(f, f.current, y, i),
        (ke = b),
        Sl(0, !1),
        zt && typeof zt.onPostCommitFiberRoot == 'function')
      )
        try {
          zt.onPostCommitFiberRoot(Ur, f);
        } catch {}
      return !0;
    } finally {
      ($.p = u), (N.T = s), mg(e, t);
    }
  }
  function yg(e, t, i) {
    (t = Xt(i, t)),
      (t = Lc(e.stateNode, t, 2)),
      (e = ra(e, t, 2)),
      e !== null && (kr(e, 2), Sn(e));
  }
  function Pe(e, t, i) {
    if (e.tag === 3) yg(e, e, i);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          yg(t, e, i);
          break;
        } else if (t.tag === 1) {
          var s = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof s.componentDidCatch == 'function' &&
              (pa === null || !pa.has(s)))
          ) {
            (e = Xt(i, e)),
              (i = xm(2)),
              (s = ra(t, i, 2)),
              s !== null && (wm(i, s, t, e), kr(s, 2), Sn(s));
            break;
          }
        }
        t = t.return;
      }
  }
  function lf(e, t, i) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new Kx();
      var u = new Set();
      s.set(t, u);
    } else (u = s.get(t)), u === void 0 && ((u = new Set()), s.set(t, u));
    u.has(i) ||
      ((Zc = !0), u.add(i), (e = Jx.bind(null, e, t, i)), t.then(e, e));
  }
  function Jx(e, t, i) {
    var s = e.pingCache;
    s !== null && s.delete(t),
      (e.pingedLanes |= e.suspendedLanes & i),
      (e.warmLanes &= ~i),
      Qe === e &&
        (_e & i) === i &&
        (Xe === 4 || (Xe === 3 && (_e & 62914560) === _e && 300 > Yt() - Ic)
          ? (ke & 2) === 0 && Ii(e, 0)
          : ($c |= i),
        Zi === _e && (Zi = 0)),
      Sn(e);
  }
  function vg(e, t) {
    t === 0 && (t = ph()), (e = zi(e, t)), e !== null && (kr(e, t), Sn(e));
  }
  function Ix(e) {
    var t = e.memoizedState,
      i = 0;
    t !== null && (i = t.retryLane), vg(e, i);
  }
  function Wx(e, t) {
    var i = 0;
    switch (e.tag) {
      case 13:
        var s = e.stateNode,
          u = e.memoizedState;
        u !== null && (i = u.retryLane);
        break;
      case 19:
        s = e.stateNode;
        break;
      case 22:
        s = e.stateNode._retryCache;
        break;
      default:
        throw Error(l(314));
    }
    s !== null && s.delete(t), vg(e, i);
  }
  function e1(e, t) {
    return Dn(e, t);
  }
  var ro = null,
    er = null,
    sf = !1,
    lo = !1,
    of = !1,
    ti = 0;
  function Sn(e) {
    e !== er &&
      e.next === null &&
      (er === null ? (ro = er = e) : (er = er.next = e)),
      (lo = !0),
      sf || ((sf = !0), n1());
  }
  function Sl(e, t) {
    if (!of && lo) {
      of = !0;
      do
        for (var i = !1, s = ro; s !== null; ) {
          if (e !== 0) {
            var u = s.pendingLanes;
            if (u === 0) var f = 0;
            else {
              var y = s.suspendedLanes,
                b = s.pingedLanes;
              (f = (1 << (31 - Ut(42 | e) + 1)) - 1),
                (f &= u & ~(y & ~b)),
                (f = f & 201326741 ? (f & 201326741) | 1 : f ? f | 2 : 0);
            }
            f !== 0 && ((i = !0), wg(s, f));
          } else
            (f = _e),
              (f = ds(
                s,
                s === Qe ? f : 0,
                s.cancelPendingCommit !== null || s.timeoutHandle !== -1,
              )),
              (f & 3) === 0 || jr(s, f) || ((i = !0), wg(s, f));
          s = s.next;
        }
      while (i);
      of = !1;
    }
  }
  function t1() {
    bg();
  }
  function bg() {
    lo = sf = !1;
    var e = 0;
    ti !== 0 && (c1() && (e = ti), (ti = 0));
    for (var t = Yt(), i = null, s = ro; s !== null; ) {
      var u = s.next,
        f = Sg(s, t);
      f === 0
        ? ((s.next = null),
          i === null ? (ro = u) : (i.next = u),
          u === null && (er = i))
        : ((i = s), (e !== 0 || (f & 3) !== 0) && (lo = !0)),
        (s = u);
    }
    Sl(e);
  }
  function Sg(e, t) {
    for (
      var i = e.suspendedLanes,
        s = e.pingedLanes,
        u = e.expirationTimes,
        f = e.pendingLanes & -62914561;
      0 < f;

    ) {
      var y = 31 - Ut(f),
        b = 1 << y,
        T = u[y];
      T === -1
        ? ((b & i) === 0 || (b & s) !== 0) && (u[y] = TS(b, t))
        : T <= t && (e.expiredLanes |= b),
        (f &= ~b);
    }
    if (
      ((t = Qe),
      (i = _e),
      (i = ds(
        e,
        e === t ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (s = e.callbackNode),
      i === 0 ||
        (e === t && (Be === 2 || Be === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        s !== null && s !== null && bi(s),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((i & 3) === 0 || jr(e, i)) {
      if (((t = i & -i), t === e.callbackPriority)) return t;
      switch ((s !== null && bi(s), wu(i))) {
        case 2:
        case 8:
          i = fh;
          break;
        case 32:
          i = us;
          break;
        case 268435456:
          i = dh;
          break;
        default:
          i = us;
      }
      return (
        (s = xg.bind(null, e)),
        (i = Dn(i, s)),
        (e.callbackPriority = t),
        (e.callbackNode = i),
        t
      );
    }
    return (
      s !== null && s !== null && bi(s),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function xg(e, t) {
    if (ut !== 0 && ut !== 5)
      return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var i = e.callbackNode;
    if (io() && e.callbackNode !== i) return null;
    var s = _e;
    return (
      (s = ds(
        e,
        e === Qe ? s : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      s === 0
        ? null
        : (ag(e, s, t),
          Sg(e, Yt()),
          e.callbackNode != null && e.callbackNode === i
            ? xg.bind(null, e)
            : null)
    );
  }
  function wg(e, t) {
    if (io()) return null;
    ag(e, t, !0);
  }
  function n1() {
    d1(function () {
      (ke & 6) !== 0 ? Dn(ka, t1) : bg();
    });
  }
  function uf() {
    return ti === 0 && (ti = hh()), ti;
  }
  function Eg(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : ys('' + e);
  }
  function Rg(e, t) {
    var i = t.ownerDocument.createElement('input');
    return (
      (i.name = t.name),
      (i.value = t.value),
      e.id && i.setAttribute('form', e.id),
      t.parentNode.insertBefore(i, t),
      (e = new FormData(e)),
      i.parentNode.removeChild(i),
      e
    );
  }
  function a1(e, t, i, s, u) {
    if (t === 'submit' && i && i.stateNode === u) {
      var f = Eg((u[Rt] || null).action),
        y = s.submitter;
      y &&
        ((t = (t = y[Rt] || null)
          ? Eg(t.formAction)
          : y.getAttribute('formAction')),
        t !== null && ((f = t), (y = null)));
      var b = new xs('action', 'action', null, s, u);
      e.push({
        event: b,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (s.defaultPrevented) {
                if (ti !== 0) {
                  var T = y ? Rg(u, y) : new FormData(u);
                  Cc(
                    i,
                    { pending: !0, data: T, method: u.method, action: f },
                    null,
                    T,
                  );
                }
              } else
                typeof f == 'function' &&
                  (b.preventDefault(),
                  (T = y ? Rg(u, y) : new FormData(u)),
                  Cc(
                    i,
                    { pending: !0, data: T, method: u.method, action: f },
                    f,
                    T,
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var cf = 0; cf < Fu.length; cf++) {
    var ff = Fu[cf],
      i1 = ff.toLowerCase(),
      r1 = ff[0].toUpperCase() + ff.slice(1);
    sn(i1, 'on' + r1);
  }
  sn(ap, 'onAnimationEnd'),
    sn(ip, 'onAnimationIteration'),
    sn(rp, 'onAnimationStart'),
    sn('dblclick', 'onDoubleClick'),
    sn('focusin', 'onFocus'),
    sn('focusout', 'onBlur'),
    sn(wx, 'onTransitionRun'),
    sn(Ex, 'onTransitionStart'),
    sn(Rx, 'onTransitionCancel'),
    sn(lp, 'onTransitionEnd'),
    Ri('onMouseEnter', ['mouseout', 'mouseover']),
    Ri('onMouseLeave', ['mouseout', 'mouseover']),
    Ri('onPointerEnter', ['pointerout', 'pointerover']),
    Ri('onPointerLeave', ['pointerout', 'pointerover']),
    Ha(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' ',
      ),
    ),
    Ha(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' ',
      ),
    ),
    Ha('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Ha(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' '),
    ),
    Ha(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
    ),
    Ha(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
    );
  var xl =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    l1 = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'
        .split(' ')
        .concat(xl),
    );
  function Og(e, t) {
    t = (t & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var s = e[i],
        u = s.event;
      s = s.listeners;
      e: {
        var f = void 0;
        if (t)
          for (var y = s.length - 1; 0 <= y; y--) {
            var b = s[y],
              T = b.instance,
              U = b.currentTarget;
            if (((b = b.listener), T !== f && u.isPropagationStopped()))
              break e;
            (f = b), (u.currentTarget = U);
            try {
              f(u);
            } catch (K) {
              Fs(K);
            }
            (u.currentTarget = null), (f = T);
          }
        else
          for (y = 0; y < s.length; y++) {
            if (
              ((b = s[y]),
              (T = b.instance),
              (U = b.currentTarget),
              (b = b.listener),
              T !== f && u.isPropagationStopped())
            )
              break e;
            (f = b), (u.currentTarget = U);
            try {
              f(u);
            } catch (K) {
              Fs(K);
            }
            (u.currentTarget = null), (f = T);
          }
      }
    }
  }
  function Ce(e, t) {
    var i = t[Eu];
    i === void 0 && (i = t[Eu] = new Set());
    var s = e + '__bubble';
    i.has(s) || (Ag(t, e, 2, !1), i.add(s));
  }
  function df(e, t, i) {
    var s = 0;
    t && (s |= 4), Ag(i, e, s, t);
  }
  var so = '_reactListening' + Math.random().toString(36).slice(2);
  function hf(e) {
    if (!e[so]) {
      (e[so] = !0),
        bh.forEach(function (i) {
          i !== 'selectionchange' && (l1.has(i) || df(i, !1, e), df(i, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[so] || ((t[so] = !0), df('selectionchange', !1, t));
    }
  }
  function Ag(e, t, i, s) {
    switch ($g(t)) {
      case 2:
        var u = L1;
        break;
      case 8:
        u = z1;
        break;
      default:
        u = Tf;
    }
    (i = u.bind(null, t, i, e)),
      (u = void 0),
      !zu ||
        (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
        (u = !0),
      s
        ? u !== void 0
          ? e.addEventListener(t, i, { capture: !0, passive: u })
          : e.addEventListener(t, i, !0)
        : u !== void 0
          ? e.addEventListener(t, i, { passive: u })
          : e.addEventListener(t, i, !1);
  }
  function pf(e, t, i, s, u) {
    var f = s;
    if ((t & 1) === 0 && (t & 2) === 0 && s !== null)
      e: for (;;) {
        if (s === null) return;
        var y = s.tag;
        if (y === 3 || y === 4) {
          var b = s.stateNode.containerInfo;
          if (b === u) break;
          if (y === 4)
            for (y = s.return; y !== null; ) {
              var T = y.tag;
              if ((T === 3 || T === 4) && y.stateNode.containerInfo === u)
                return;
              y = y.return;
            }
          for (; b !== null; ) {
            if (((y = xi(b)), y === null)) return;
            if (((T = y.tag), T === 5 || T === 6 || T === 26 || T === 27)) {
              s = f = y;
              continue e;
            }
            b = b.parentNode;
          }
        }
        s = s.return;
      }
    Lh(function () {
      var U = f,
        K = Nu(i),
        X = [];
      e: {
        var j = sp.get(e);
        if (j !== void 0) {
          var H = xs,
            ge = e;
          switch (e) {
            case 'keypress':
              if (bs(i) === 0) break e;
            case 'keydown':
            case 'keyup':
              H = ex;
              break;
            case 'focusin':
              (ge = 'focus'), (H = Bu);
              break;
            case 'focusout':
              (ge = 'blur'), (H = Bu);
              break;
            case 'beforeblur':
            case 'afterblur':
              H = Bu;
              break;
            case 'click':
              if (i.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              H = jh;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              H = PS;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              H = ax;
              break;
            case ap:
            case ip:
            case rp:
              H = YS;
              break;
            case lp:
              H = rx;
              break;
            case 'scroll':
            case 'scrollend':
              H = qS;
              break;
            case 'wheel':
              H = sx;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              H = FS;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              H = Bh;
              break;
            case 'toggle':
            case 'beforetoggle':
              H = ux;
          }
          var he = (t & 4) !== 0,
            Ge = !he && (e === 'scroll' || e === 'scrollend'),
            D = he ? (j !== null ? j + 'Capture' : null) : j;
          he = [];
          for (var C = U, z; C !== null; ) {
            var F = C;
            if (
              ((z = F.stateNode),
              (F = F.tag),
              (F !== 5 && F !== 26 && F !== 27) ||
                z === null ||
                D === null ||
                ((F = qr(C, D)), F != null && he.push(wl(C, F, z))),
              Ge)
            )
              break;
            C = C.return;
          }
          0 < he.length &&
            ((j = new H(j, ge, null, i, K)),
            X.push({ event: j, listeners: he }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((j = e === 'mouseover' || e === 'pointerover'),
            (H = e === 'mouseout' || e === 'pointerout'),
            j &&
              i !== _u &&
              (ge = i.relatedTarget || i.fromElement) &&
              (xi(ge) || ge[Si]))
          )
            break e;
          if (
            (H || j) &&
            ((j =
              K.window === K
                ? K
                : (j = K.ownerDocument)
                  ? j.defaultView || j.parentWindow
                  : window),
            H
              ? ((ge = i.relatedTarget || i.toElement),
                (H = U),
                (ge = ge ? xi(ge) : null),
                ge !== null &&
                  ((Ge = c(ge)),
                  (he = ge.tag),
                  ge !== Ge || (he !== 5 && he !== 27 && he !== 6)) &&
                  (ge = null))
              : ((H = null), (ge = U)),
            H !== ge)
          ) {
            if (
              ((he = jh),
              (F = 'onMouseLeave'),
              (D = 'onMouseEnter'),
              (C = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((he = Bh),
                (F = 'onPointerLeave'),
                (D = 'onPointerEnter'),
                (C = 'pointer')),
              (Ge = H == null ? j : Hr(H)),
              (z = ge == null ? j : Hr(ge)),
              (j = new he(F, C + 'leave', H, i, K)),
              (j.target = Ge),
              (j.relatedTarget = z),
              (F = null),
              xi(K) === U &&
                ((he = new he(D, C + 'enter', ge, i, K)),
                (he.target = z),
                (he.relatedTarget = Ge),
                (F = he)),
              (Ge = F),
              H && ge)
            )
              t: {
                for (he = H, D = ge, C = 0, z = he; z; z = tr(z)) C++;
                for (z = 0, F = D; F; F = tr(F)) z++;
                for (; 0 < C - z; ) (he = tr(he)), C--;
                for (; 0 < z - C; ) (D = tr(D)), z--;
                for (; C--; ) {
                  if (he === D || (D !== null && he === D.alternate)) break t;
                  (he = tr(he)), (D = tr(D));
                }
                he = null;
              }
            else he = null;
            H !== null && Tg(X, j, H, he, !1),
              ge !== null && Ge !== null && Tg(X, Ge, ge, he, !0);
          }
        }
        e: {
          if (
            ((j = U ? Hr(U) : window),
            (H = j.nodeName && j.nodeName.toLowerCase()),
            H === 'select' || (H === 'input' && j.type === 'file'))
          )
            var ie = Kh;
          else if (Qh(j))
            if (Fh) ie = bx;
            else {
              ie = yx;
              var Ae = gx;
            }
          else
            (H = j.nodeName),
              !H ||
              H.toLowerCase() !== 'input' ||
              (j.type !== 'checkbox' && j.type !== 'radio')
                ? U && Du(U.elementType) && (ie = Kh)
                : (ie = vx);
          if (ie && (ie = ie(e, U))) {
            Yh(X, ie, i, K);
            break e;
          }
          Ae && Ae(e, j, U),
            e === 'focusout' &&
              U &&
              j.type === 'number' &&
              U.memoizedProps.value != null &&
              Mu(j, 'number', j.value);
        }
        switch (((Ae = U ? Hr(U) : window), e)) {
          case 'focusin':
            (Qh(Ae) || Ae.contentEditable === 'true') &&
              ((_i = Ae), (Qu = U), (Xr = null));
            break;
          case 'focusout':
            Xr = Qu = _i = null;
            break;
          case 'mousedown':
            Yu = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (Yu = !1), tp(X, i, K);
            break;
          case 'selectionchange':
            if (xx) break;
          case 'keydown':
          case 'keyup':
            tp(X, i, K);
        }
        var oe;
        if (qu)
          e: {
            switch (e) {
              case 'compositionstart':
                var pe = 'onCompositionStart';
                break e;
              case 'compositionend':
                pe = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                pe = 'onCompositionUpdate';
                break e;
            }
            pe = void 0;
          }
        else
          Di
            ? Ph(e, i) && (pe = 'onCompositionEnd')
            : e === 'keydown' &&
              i.keyCode === 229 &&
              (pe = 'onCompositionStart');
        pe &&
          (Hh &&
            i.locale !== 'ko' &&
            (Di || pe !== 'onCompositionStart'
              ? pe === 'onCompositionEnd' && Di && (oe = zh())
              : ((ta = K),
                (Uu = 'value' in ta ? ta.value : ta.textContent),
                (Di = !0))),
          (Ae = oo(U, pe)),
          0 < Ae.length &&
            ((pe = new kh(pe, e, null, i, K)),
            X.push({ event: pe, listeners: Ae }),
            oe
              ? (pe.data = oe)
              : ((oe = Vh(i)), oe !== null && (pe.data = oe)))),
          (oe = fx ? dx(e, i) : hx(e, i)) &&
            ((pe = oo(U, 'onBeforeInput')),
            0 < pe.length &&
              ((Ae = new kh('onBeforeInput', 'beforeinput', null, i, K)),
              X.push({ event: Ae, listeners: pe }),
              (Ae.data = oe))),
          a1(X, e, U, i, K);
      }
      Og(X, t);
    });
  }
  function wl(e, t, i) {
    return { instance: e, listener: t, currentTarget: i };
  }
  function oo(e, t) {
    for (var i = t + 'Capture', s = []; e !== null; ) {
      var u = e,
        f = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          f === null ||
          ((u = qr(e, i)),
          u != null && s.unshift(wl(e, u, f)),
          (u = qr(e, t)),
          u != null && s.push(wl(e, u, f))),
        e.tag === 3)
      )
        return s;
      e = e.return;
    }
    return [];
  }
  function tr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Tg(e, t, i, s, u) {
    for (var f = t._reactName, y = []; i !== null && i !== s; ) {
      var b = i,
        T = b.alternate,
        U = b.stateNode;
      if (((b = b.tag), T !== null && T === s)) break;
      (b !== 5 && b !== 26 && b !== 27) ||
        U === null ||
        ((T = U),
        u
          ? ((U = qr(i, f)), U != null && y.unshift(wl(i, U, T)))
          : u || ((U = qr(i, f)), U != null && y.push(wl(i, U, T)))),
        (i = i.return);
    }
    y.length !== 0 && e.push({ event: t, listeners: y });
  }
  var s1 = /\r\n?/g,
    o1 = /\u0000|\uFFFD/g;
  function Cg(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        s1,
        `
`,
      )
      .replace(o1, '');
  }
  function Mg(e, t) {
    return (t = Cg(t)), Cg(e) === t;
  }
  function uo() {}
  function qe(e, t, i, s, u, f) {
    switch (i) {
      case 'children':
        typeof s == 'string'
          ? t === 'body' || (t === 'textarea' && s === '') || Ti(e, s)
          : (typeof s == 'number' || typeof s == 'bigint') &&
            t !== 'body' &&
            Ti(e, '' + s);
        break;
      case 'className':
        ps(e, 'class', s);
        break;
      case 'tabIndex':
        ps(e, 'tabindex', s);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        ps(e, i, s);
        break;
      case 'style':
        _h(e, s, f);
        break;
      case 'data':
        if (t !== 'object') {
          ps(e, 'data', s);
          break;
        }
      case 'src':
      case 'href':
        if (s === '' && (t !== 'a' || i !== 'href')) {
          e.removeAttribute(i);
          break;
        }
        if (
          s == null ||
          typeof s == 'function' ||
          typeof s == 'symbol' ||
          typeof s == 'boolean'
        ) {
          e.removeAttribute(i);
          break;
        }
        (s = ys('' + s)), e.setAttribute(i, s);
        break;
      case 'action':
      case 'formAction':
        if (typeof s == 'function') {
          e.setAttribute(
            i,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof f == 'function' &&
            (i === 'formAction'
              ? (t !== 'input' && qe(e, t, 'name', u.name, u, null),
                qe(e, t, 'formEncType', u.formEncType, u, null),
                qe(e, t, 'formMethod', u.formMethod, u, null),
                qe(e, t, 'formTarget', u.formTarget, u, null))
              : (qe(e, t, 'encType', u.encType, u, null),
                qe(e, t, 'method', u.method, u, null),
                qe(e, t, 'target', u.target, u, null)));
        if (s == null || typeof s == 'symbol' || typeof s == 'boolean') {
          e.removeAttribute(i);
          break;
        }
        (s = ys('' + s)), e.setAttribute(i, s);
        break;
      case 'onClick':
        s != null && (e.onclick = uo);
        break;
      case 'onScroll':
        s != null && Ce('scroll', e);
        break;
      case 'onScrollEnd':
        s != null && Ce('scrollend', e);
        break;
      case 'dangerouslySetInnerHTML':
        if (s != null) {
          if (typeof s != 'object' || !('__html' in s)) throw Error(l(61));
          if (((i = s.__html), i != null)) {
            if (u.children != null) throw Error(l(60));
            e.innerHTML = i;
          }
        }
        break;
      case 'multiple':
        e.multiple = s && typeof s != 'function' && typeof s != 'symbol';
        break;
      case 'muted':
        e.muted = s && typeof s != 'function' && typeof s != 'symbol';
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        break;
      case 'autoFocus':
        break;
      case 'xlinkHref':
        if (
          s == null ||
          typeof s == 'function' ||
          typeof s == 'boolean' ||
          typeof s == 'symbol'
        ) {
          e.removeAttribute('xlink:href');
          break;
        }
        (i = ys('' + s)),
          e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', i);
        break;
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        s != null && typeof s != 'function' && typeof s != 'symbol'
          ? e.setAttribute(i, '' + s)
          : e.removeAttribute(i);
        break;
      case 'inert':
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        s && typeof s != 'function' && typeof s != 'symbol'
          ? e.setAttribute(i, '')
          : e.removeAttribute(i);
        break;
      case 'capture':
      case 'download':
        s === !0
          ? e.setAttribute(i, '')
          : s !== !1 &&
              s != null &&
              typeof s != 'function' &&
              typeof s != 'symbol'
            ? e.setAttribute(i, s)
            : e.removeAttribute(i);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        s != null &&
        typeof s != 'function' &&
        typeof s != 'symbol' &&
        !isNaN(s) &&
        1 <= s
          ? e.setAttribute(i, s)
          : e.removeAttribute(i);
        break;
      case 'rowSpan':
      case 'start':
        s == null || typeof s == 'function' || typeof s == 'symbol' || isNaN(s)
          ? e.removeAttribute(i)
          : e.setAttribute(i, s);
        break;
      case 'popover':
        Ce('beforetoggle', e), Ce('toggle', e), hs(e, 'popover', s);
        break;
      case 'xlinkActuate':
        _n(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', s);
        break;
      case 'xlinkArcrole':
        _n(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', s);
        break;
      case 'xlinkRole':
        _n(e, 'http://www.w3.org/1999/xlink', 'xlink:role', s);
        break;
      case 'xlinkShow':
        _n(e, 'http://www.w3.org/1999/xlink', 'xlink:show', s);
        break;
      case 'xlinkTitle':
        _n(e, 'http://www.w3.org/1999/xlink', 'xlink:title', s);
        break;
      case 'xlinkType':
        _n(e, 'http://www.w3.org/1999/xlink', 'xlink:type', s);
        break;
      case 'xmlBase':
        _n(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', s);
        break;
      case 'xmlLang':
        _n(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', s);
        break;
      case 'xmlSpace':
        _n(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', s);
        break;
      case 'is':
        hs(e, 'is', s);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < i.length) ||
          (i[0] !== 'o' && i[0] !== 'O') ||
          (i[1] !== 'n' && i[1] !== 'N')) &&
          ((i = BS.get(i) || i), hs(e, i, s));
    }
  }
  function mf(e, t, i, s, u, f) {
    switch (i) {
      case 'style':
        _h(e, s, f);
        break;
      case 'dangerouslySetInnerHTML':
        if (s != null) {
          if (typeof s != 'object' || !('__html' in s)) throw Error(l(61));
          if (((i = s.__html), i != null)) {
            if (u.children != null) throw Error(l(60));
            e.innerHTML = i;
          }
        }
        break;
      case 'children':
        typeof s == 'string'
          ? Ti(e, s)
          : (typeof s == 'number' || typeof s == 'bigint') && Ti(e, '' + s);
        break;
      case 'onScroll':
        s != null && Ce('scroll', e);
        break;
      case 'onScrollEnd':
        s != null && Ce('scrollend', e);
        break;
      case 'onClick':
        s != null && (e.onclick = uo);
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        if (!Sh.hasOwnProperty(i))
          e: {
            if (
              i[0] === 'o' &&
              i[1] === 'n' &&
              ((u = i.endsWith('Capture')),
              (t = i.slice(2, u ? i.length - 7 : void 0)),
              (f = e[Rt] || null),
              (f = f != null ? f[i] : null),
              typeof f == 'function' && e.removeEventListener(t, f, u),
              typeof s == 'function')
            ) {
              typeof f != 'function' &&
                f !== null &&
                (i in e
                  ? (e[i] = null)
                  : e.hasAttribute(i) && e.removeAttribute(i)),
                e.addEventListener(t, s, u);
              break e;
            }
            i in e
              ? (e[i] = s)
              : s === !0
                ? e.setAttribute(i, '')
                : hs(e, i, s);
          }
    }
  }
  function ct(e, t, i) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'img':
        Ce('error', e), Ce('load', e);
        var s = !1,
          u = !1,
          f;
        for (f in i)
          if (i.hasOwnProperty(f)) {
            var y = i[f];
            if (y != null)
              switch (f) {
                case 'src':
                  s = !0;
                  break;
                case 'srcSet':
                  u = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(l(137, t));
                default:
                  qe(e, t, f, y, i, null);
              }
          }
        u && qe(e, t, 'srcSet', i.srcSet, i, null),
          s && qe(e, t, 'src', i.src, i, null);
        return;
      case 'input':
        Ce('invalid', e);
        var b = (f = y = u = null),
          T = null,
          U = null;
        for (s in i)
          if (i.hasOwnProperty(s)) {
            var K = i[s];
            if (K != null)
              switch (s) {
                case 'name':
                  u = K;
                  break;
                case 'type':
                  y = K;
                  break;
                case 'checked':
                  T = K;
                  break;
                case 'defaultChecked':
                  U = K;
                  break;
                case 'value':
                  f = K;
                  break;
                case 'defaultValue':
                  b = K;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (K != null) throw Error(l(137, t));
                  break;
                default:
                  qe(e, t, s, K, i, null);
              }
          }
        Th(e, f, b, T, U, y, u, !1), ms(e);
        return;
      case 'select':
        Ce('invalid', e), (s = y = f = null);
        for (u in i)
          if (i.hasOwnProperty(u) && ((b = i[u]), b != null))
            switch (u) {
              case 'value':
                f = b;
                break;
              case 'defaultValue':
                y = b;
                break;
              case 'multiple':
                s = b;
              default:
                qe(e, t, u, b, i, null);
            }
        (t = f),
          (i = y),
          (e.multiple = !!s),
          t != null ? Ai(e, !!s, t, !1) : i != null && Ai(e, !!s, i, !0);
        return;
      case 'textarea':
        Ce('invalid', e), (f = u = s = null);
        for (y in i)
          if (i.hasOwnProperty(y) && ((b = i[y]), b != null))
            switch (y) {
              case 'value':
                s = b;
                break;
              case 'defaultValue':
                u = b;
                break;
              case 'children':
                f = b;
                break;
              case 'dangerouslySetInnerHTML':
                if (b != null) throw Error(l(91));
                break;
              default:
                qe(e, t, y, b, i, null);
            }
        Mh(e, s, u, f), ms(e);
        return;
      case 'option':
        for (T in i)
          if (i.hasOwnProperty(T) && ((s = i[T]), s != null))
            switch (T) {
              case 'selected':
                e.selected =
                  s && typeof s != 'function' && typeof s != 'symbol';
                break;
              default:
                qe(e, t, T, s, i, null);
            }
        return;
      case 'dialog':
        Ce('beforetoggle', e), Ce('toggle', e), Ce('cancel', e), Ce('close', e);
        break;
      case 'iframe':
      case 'object':
        Ce('load', e);
        break;
      case 'video':
      case 'audio':
        for (s = 0; s < xl.length; s++) Ce(xl[s], e);
        break;
      case 'image':
        Ce('error', e), Ce('load', e);
        break;
      case 'details':
        Ce('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        Ce('error', e), Ce('load', e);
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (U in i)
          if (i.hasOwnProperty(U) && ((s = i[U]), s != null))
            switch (U) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(l(137, t));
              default:
                qe(e, t, U, s, i, null);
            }
        return;
      default:
        if (Du(t)) {
          for (K in i)
            i.hasOwnProperty(K) &&
              ((s = i[K]), s !== void 0 && mf(e, t, K, s, i, void 0));
          return;
        }
    }
    for (b in i)
      i.hasOwnProperty(b) && ((s = i[b]), s != null && qe(e, t, b, s, i, null));
  }
  function u1(e, t, i, s) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'input':
        var u = null,
          f = null,
          y = null,
          b = null,
          T = null,
          U = null,
          K = null;
        for (H in i) {
          var X = i[H];
          if (i.hasOwnProperty(H) && X != null)
            switch (H) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                T = X;
              default:
                s.hasOwnProperty(H) || qe(e, t, H, null, s, X);
            }
        }
        for (var j in s) {
          var H = s[j];
          if (((X = i[j]), s.hasOwnProperty(j) && (H != null || X != null)))
            switch (j) {
              case 'type':
                f = H;
                break;
              case 'name':
                u = H;
                break;
              case 'checked':
                U = H;
                break;
              case 'defaultChecked':
                K = H;
                break;
              case 'value':
                y = H;
                break;
              case 'defaultValue':
                b = H;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (H != null) throw Error(l(137, t));
                break;
              default:
                H !== X && qe(e, t, j, H, s, X);
            }
        }
        Cu(e, y, b, T, U, K, f, u);
        return;
      case 'select':
        H = y = b = j = null;
        for (f in i)
          if (((T = i[f]), i.hasOwnProperty(f) && T != null))
            switch (f) {
              case 'value':
                break;
              case 'multiple':
                H = T;
              default:
                s.hasOwnProperty(f) || qe(e, t, f, null, s, T);
            }
        for (u in s)
          if (
            ((f = s[u]),
            (T = i[u]),
            s.hasOwnProperty(u) && (f != null || T != null))
          )
            switch (u) {
              case 'value':
                j = f;
                break;
              case 'defaultValue':
                b = f;
                break;
              case 'multiple':
                y = f;
              default:
                f !== T && qe(e, t, u, f, s, T);
            }
        (t = b),
          (i = y),
          (s = H),
          j != null
            ? Ai(e, !!i, j, !1)
            : !!s != !!i &&
              (t != null ? Ai(e, !!i, t, !0) : Ai(e, !!i, i ? [] : '', !1));
        return;
      case 'textarea':
        H = j = null;
        for (b in i)
          if (
            ((u = i[b]),
            i.hasOwnProperty(b) && u != null && !s.hasOwnProperty(b))
          )
            switch (b) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                qe(e, t, b, null, s, u);
            }
        for (y in s)
          if (
            ((u = s[y]),
            (f = i[y]),
            s.hasOwnProperty(y) && (u != null || f != null))
          )
            switch (y) {
              case 'value':
                j = u;
                break;
              case 'defaultValue':
                H = u;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (u != null) throw Error(l(91));
                break;
              default:
                u !== f && qe(e, t, y, u, s, f);
            }
        Ch(e, j, H);
        return;
      case 'option':
        for (var ge in i)
          if (
            ((j = i[ge]),
            i.hasOwnProperty(ge) && j != null && !s.hasOwnProperty(ge))
          )
            switch (ge) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                qe(e, t, ge, null, s, j);
            }
        for (T in s)
          if (
            ((j = s[T]),
            (H = i[T]),
            s.hasOwnProperty(T) && j !== H && (j != null || H != null))
          )
            switch (T) {
              case 'selected':
                e.selected =
                  j && typeof j != 'function' && typeof j != 'symbol';
                break;
              default:
                qe(e, t, T, j, s, H);
            }
        return;
      case 'img':
      case 'link':
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (var he in i)
          (j = i[he]),
            i.hasOwnProperty(he) &&
              j != null &&
              !s.hasOwnProperty(he) &&
              qe(e, t, he, null, s, j);
        for (U in s)
          if (
            ((j = s[U]),
            (H = i[U]),
            s.hasOwnProperty(U) && j !== H && (j != null || H != null))
          )
            switch (U) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (j != null) throw Error(l(137, t));
                break;
              default:
                qe(e, t, U, j, s, H);
            }
        return;
      default:
        if (Du(t)) {
          for (var Ge in i)
            (j = i[Ge]),
              i.hasOwnProperty(Ge) &&
                j !== void 0 &&
                !s.hasOwnProperty(Ge) &&
                mf(e, t, Ge, void 0, s, j);
          for (K in s)
            (j = s[K]),
              (H = i[K]),
              !s.hasOwnProperty(K) ||
                j === H ||
                (j === void 0 && H === void 0) ||
                mf(e, t, K, j, s, H);
          return;
        }
    }
    for (var D in i)
      (j = i[D]),
        i.hasOwnProperty(D) &&
          j != null &&
          !s.hasOwnProperty(D) &&
          qe(e, t, D, null, s, j);
    for (X in s)
      (j = s[X]),
        (H = i[X]),
        !s.hasOwnProperty(X) ||
          j === H ||
          (j == null && H == null) ||
          qe(e, t, X, j, s, H);
  }
  var gf = null,
    yf = null;
  function co(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Dg(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function _g(e, t) {
    if (e === 0)
      switch (t) {
        case 'svg':
          return 1;
        case 'math':
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === 'foreignObject' ? 0 : e;
  }
  function vf(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      typeof t.children == 'bigint' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var bf = null;
  function c1() {
    var e = window.event;
    return e && e.type === 'popstate'
      ? e === bf
        ? !1
        : ((bf = e), !0)
      : ((bf = null), !1);
  }
  var Ng = typeof setTimeout == 'function' ? setTimeout : void 0,
    f1 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Lg = typeof Promise == 'function' ? Promise : void 0,
    d1 =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Lg < 'u'
          ? function (e) {
              return Lg.resolve(null).then(e).catch(h1);
            }
          : Ng;
  function h1(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ya(e) {
    return e === 'head';
  }
  function zg(e, t) {
    var i = t,
      s = 0,
      u = 0;
    do {
      var f = i.nextSibling;
      if ((e.removeChild(i), f && f.nodeType === 8))
        if (((i = f.data), i === '/$')) {
          if (0 < s && 8 > s) {
            i = s;
            var y = e.ownerDocument;
            if ((i & 1 && El(y.documentElement), i & 2 && El(y.body), i & 4))
              for (i = y.head, El(i), y = i.firstChild; y; ) {
                var b = y.nextSibling,
                  T = y.nodeName;
                y[Br] ||
                  T === 'SCRIPT' ||
                  T === 'STYLE' ||
                  (T === 'LINK' && y.rel.toLowerCase() === 'stylesheet') ||
                  i.removeChild(y),
                  (y = b);
              }
          }
          if (u === 0) {
            e.removeChild(f), _l(t);
            return;
          }
          u--;
        } else
          i === '$' || i === '$?' || i === '$!'
            ? u++
            : (s = i.charCodeAt(0) - 48);
      else s = 0;
      i = f;
    } while (i);
    _l(t);
  }
  function Sf(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var i = t;
      switch (((t = t.nextSibling), i.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          Sf(i), Ru(i);
          continue;
        case 'SCRIPT':
        case 'STYLE':
          continue;
        case 'LINK':
          if (i.rel.toLowerCase() === 'stylesheet') continue;
      }
      e.removeChild(i);
    }
  }
  function p1(e, t, i, s) {
    for (; e.nodeType === 1; ) {
      var u = i;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!s && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (s) {
        if (!e[Br])
          switch (t) {
            case 'meta':
              if (!e.hasAttribute('itemprop')) break;
              return e;
            case 'link':
              if (
                ((f = e.getAttribute('rel')),
                f === 'stylesheet' && e.hasAttribute('data-precedence'))
              )
                break;
              if (
                f !== u.rel ||
                e.getAttribute('href') !==
                  (u.href == null || u.href === '' ? null : u.href) ||
                e.getAttribute('crossorigin') !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                e.getAttribute('title') !== (u.title == null ? null : u.title)
              )
                break;
              return e;
            case 'style':
              if (e.hasAttribute('data-precedence')) break;
              return e;
            case 'script':
              if (
                ((f = e.getAttribute('src')),
                (f !== (u.src == null ? null : u.src) ||
                  e.getAttribute('type') !== (u.type == null ? null : u.type) ||
                  e.getAttribute('crossorigin') !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  f &&
                  e.hasAttribute('async') &&
                  !e.hasAttribute('itemprop'))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === 'input' && e.type === 'hidden') {
        var f = u.name == null ? null : '' + u.name;
        if (u.type === 'hidden' && e.getAttribute('name') === f) return e;
      } else return e;
      if (((e = un(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function m1(e, t, i) {
    if (t === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') &&
          !i) ||
        ((e = un(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function xf(e) {
    return (
      e.data === '$!' ||
      (e.data === '$?' && e.ownerDocument.readyState === 'complete')
    );
  }
  function g1(e, t) {
    var i = e.ownerDocument;
    if (e.data !== '$?' || i.readyState === 'complete') t();
    else {
      var s = function () {
        t(), i.removeEventListener('DOMContentLoaded', s);
      };
      i.addEventListener('DOMContentLoaded', s), (e._reactRetry = s);
    }
  }
  function un(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === '$' || t === '$!' || t === '$?' || t === 'F!' || t === 'F')
        )
          break;
        if (t === '/$') return null;
      }
    }
    return e;
  }
  var wf = null;
  function Ug(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === '$' || i === '$!' || i === '$?') {
          if (t === 0) return e;
          t--;
        } else i === '/$' && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function jg(e, t, i) {
    switch (((t = co(i)), e)) {
      case 'html':
        if (((e = t.documentElement), !e)) throw Error(l(452));
        return e;
      case 'head':
        if (((e = t.head), !e)) throw Error(l(453));
        return e;
      case 'body':
        if (((e = t.body), !e)) throw Error(l(454));
        return e;
      default:
        throw Error(l(451));
    }
  }
  function El(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Ru(e);
  }
  var en = new Map(),
    kg = new Set();
  function fo(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var Yn = $.d;
  $.d = { f: y1, r: v1, D: b1, C: S1, L: x1, m: w1, X: R1, S: E1, M: O1 };
  function y1() {
    var e = Yn.f(),
      t = no();
    return e || t;
  }
  function v1(e) {
    var t = wi(e);
    t !== null && t.tag === 5 && t.type === 'form' ? am(t) : Yn.r(e);
  }
  var nr = typeof document > 'u' ? null : document;
  function Bg(e, t, i) {
    var s = nr;
    if (s && typeof t == 'string' && t) {
      var u = Ft(t);
      (u = 'link[rel="' + e + '"][href="' + u + '"]'),
        typeof i == 'string' && (u += '[crossorigin="' + i + '"]'),
        kg.has(u) ||
          (kg.add(u),
          (e = { rel: e, crossOrigin: i, href: t }),
          s.querySelector(u) === null &&
            ((t = s.createElement('link')),
            ct(t, 'link', e),
            it(t),
            s.head.appendChild(t)));
    }
  }
  function b1(e) {
    Yn.D(e), Bg('dns-prefetch', e, null);
  }
  function S1(e, t) {
    Yn.C(e, t), Bg('preconnect', e, t);
  }
  function x1(e, t, i) {
    Yn.L(e, t, i);
    var s = nr;
    if (s && e && t) {
      var u = 'link[rel="preload"][as="' + Ft(t) + '"]';
      t === 'image' && i && i.imageSrcSet
        ? ((u += '[imagesrcset="' + Ft(i.imageSrcSet) + '"]'),
          typeof i.imageSizes == 'string' &&
            (u += '[imagesizes="' + Ft(i.imageSizes) + '"]'))
        : (u += '[href="' + Ft(e) + '"]');
      var f = u;
      switch (t) {
        case 'style':
          f = ar(e);
          break;
        case 'script':
          f = ir(e);
      }
      en.has(f) ||
        ((e = g(
          {
            rel: 'preload',
            href: t === 'image' && i && i.imageSrcSet ? void 0 : e,
            as: t,
          },
          i,
        )),
        en.set(f, e),
        s.querySelector(u) !== null ||
          (t === 'style' && s.querySelector(Rl(f))) ||
          (t === 'script' && s.querySelector(Ol(f))) ||
          ((t = s.createElement('link')),
          ct(t, 'link', e),
          it(t),
          s.head.appendChild(t)));
    }
  }
  function w1(e, t) {
    Yn.m(e, t);
    var i = nr;
    if (i && e) {
      var s = t && typeof t.as == 'string' ? t.as : 'script',
        u =
          'link[rel="modulepreload"][as="' + Ft(s) + '"][href="' + Ft(e) + '"]',
        f = u;
      switch (s) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          f = ir(e);
      }
      if (
        !en.has(f) &&
        ((e = g({ rel: 'modulepreload', href: e }, t)),
        en.set(f, e),
        i.querySelector(u) === null)
      ) {
        switch (s) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (i.querySelector(Ol(f))) return;
        }
        (s = i.createElement('link')),
          ct(s, 'link', e),
          it(s),
          i.head.appendChild(s);
      }
    }
  }
  function E1(e, t, i) {
    Yn.S(e, t, i);
    var s = nr;
    if (s && e) {
      var u = Ei(s).hoistableStyles,
        f = ar(e);
      t = t || 'default';
      var y = u.get(f);
      if (!y) {
        var b = { loading: 0, preload: null };
        if ((y = s.querySelector(Rl(f)))) b.loading = 5;
        else {
          (e = g({ rel: 'stylesheet', href: e, 'data-precedence': t }, i)),
            (i = en.get(f)) && Ef(e, i);
          var T = (y = s.createElement('link'));
          it(T),
            ct(T, 'link', e),
            (T._p = new Promise(function (U, K) {
              (T.onload = U), (T.onerror = K);
            })),
            T.addEventListener('load', function () {
              b.loading |= 1;
            }),
            T.addEventListener('error', function () {
              b.loading |= 2;
            }),
            (b.loading |= 4),
            ho(y, t, s);
        }
        (y = { type: 'stylesheet', instance: y, count: 1, state: b }),
          u.set(f, y);
      }
    }
  }
  function R1(e, t) {
    Yn.X(e, t);
    var i = nr;
    if (i && e) {
      var s = Ei(i).hoistableScripts,
        u = ir(e),
        f = s.get(u);
      f ||
        ((f = i.querySelector(Ol(u))),
        f ||
          ((e = g({ src: e, async: !0 }, t)),
          (t = en.get(u)) && Rf(e, t),
          (f = i.createElement('script')),
          it(f),
          ct(f, 'link', e),
          i.head.appendChild(f)),
        (f = { type: 'script', instance: f, count: 1, state: null }),
        s.set(u, f));
    }
  }
  function O1(e, t) {
    Yn.M(e, t);
    var i = nr;
    if (i && e) {
      var s = Ei(i).hoistableScripts,
        u = ir(e),
        f = s.get(u);
      f ||
        ((f = i.querySelector(Ol(u))),
        f ||
          ((e = g({ src: e, async: !0, type: 'module' }, t)),
          (t = en.get(u)) && Rf(e, t),
          (f = i.createElement('script')),
          it(f),
          ct(f, 'link', e),
          i.head.appendChild(f)),
        (f = { type: 'script', instance: f, count: 1, state: null }),
        s.set(u, f));
    }
  }
  function Hg(e, t, i, s) {
    var u = (u = ue.current) ? fo(u) : null;
    if (!u) throw Error(l(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof i.precedence == 'string' && typeof i.href == 'string'
          ? ((t = ar(i.href)),
            (i = Ei(u).hoistableStyles),
            (s = i.get(t)),
            s ||
              ((s = { type: 'style', instance: null, count: 0, state: null }),
              i.set(t, s)),
            s)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (
          i.rel === 'stylesheet' &&
          typeof i.href == 'string' &&
          typeof i.precedence == 'string'
        ) {
          e = ar(i.href);
          var f = Ei(u).hoistableStyles,
            y = f.get(e);
          if (
            (y ||
              ((u = u.ownerDocument || u),
              (y = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              f.set(e, y),
              (f = u.querySelector(Rl(e))) &&
                !f._p &&
                ((y.instance = f), (y.state.loading = 5)),
              en.has(e) ||
                ((i = {
                  rel: 'preload',
                  as: 'style',
                  href: i.href,
                  crossOrigin: i.crossOrigin,
                  integrity: i.integrity,
                  media: i.media,
                  hrefLang: i.hrefLang,
                  referrerPolicy: i.referrerPolicy,
                }),
                en.set(e, i),
                f || A1(u, e, i, y.state))),
            t && s === null)
          )
            throw Error(l(528, ''));
          return y;
        }
        if (t && s !== null) throw Error(l(529, ''));
        return null;
      case 'script':
        return (
          (t = i.async),
          (i = i.src),
          typeof i == 'string' &&
          t &&
          typeof t != 'function' &&
          typeof t != 'symbol'
            ? ((t = ir(i)),
              (i = Ei(u).hoistableScripts),
              (s = i.get(t)),
              s ||
                ((s = {
                  type: 'script',
                  instance: null,
                  count: 0,
                  state: null,
                }),
                i.set(t, s)),
              s)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(l(444, e));
    }
  }
  function ar(e) {
    return 'href="' + Ft(e) + '"';
  }
  function Rl(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function qg(e) {
    return g({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function A1(e, t, i, s) {
    e.querySelector('link[rel="preload"][as="style"][' + t + ']')
      ? (s.loading = 1)
      : ((t = e.createElement('link')),
        (s.preload = t),
        t.addEventListener('load', function () {
          return (s.loading |= 1);
        }),
        t.addEventListener('error', function () {
          return (s.loading |= 2);
        }),
        ct(t, 'link', i),
        it(t),
        e.head.appendChild(t));
  }
  function ir(e) {
    return '[src="' + Ft(e) + '"]';
  }
  function Ol(e) {
    return 'script[async]' + e;
  }
  function Gg(e, t, i) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var s = e.querySelector('style[data-href~="' + Ft(i.href) + '"]');
          if (s) return (t.instance = s), it(s), s;
          var u = g({}, i, {
            'data-href': i.href,
            'data-precedence': i.precedence,
            href: null,
            precedence: null,
          });
          return (
            (s = (e.ownerDocument || e).createElement('style')),
            it(s),
            ct(s, 'style', u),
            ho(s, i.precedence, e),
            (t.instance = s)
          );
        case 'stylesheet':
          u = ar(i.href);
          var f = e.querySelector(Rl(u));
          if (f) return (t.state.loading |= 4), (t.instance = f), it(f), f;
          (s = qg(i)),
            (u = en.get(u)) && Ef(s, u),
            (f = (e.ownerDocument || e).createElement('link')),
            it(f);
          var y = f;
          return (
            (y._p = new Promise(function (b, T) {
              (y.onload = b), (y.onerror = T);
            })),
            ct(f, 'link', s),
            (t.state.loading |= 4),
            ho(f, i.precedence, e),
            (t.instance = f)
          );
        case 'script':
          return (
            (f = ir(i.src)),
            (u = e.querySelector(Ol(f)))
              ? ((t.instance = u), it(u), u)
              : ((s = i),
                (u = en.get(f)) && ((s = g({}, i)), Rf(s, u)),
                (e = e.ownerDocument || e),
                (u = e.createElement('script')),
                it(u),
                ct(u, 'link', s),
                e.head.appendChild(u),
                (t.instance = u))
          );
        case 'void':
          return null;
        default:
          throw Error(l(443, t.type));
      }
    else
      t.type === 'stylesheet' &&
        (t.state.loading & 4) === 0 &&
        ((s = t.instance), (t.state.loading |= 4), ho(s, i.precedence, e));
    return t.instance;
  }
  function ho(e, t, i) {
    for (
      var s = i.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        u = s.length ? s[s.length - 1] : null,
        f = u,
        y = 0;
      y < s.length;
      y++
    ) {
      var b = s[y];
      if (b.dataset.precedence === t) f = b;
      else if (f !== u) break;
    }
    f
      ? f.parentNode.insertBefore(e, f.nextSibling)
      : ((t = i.nodeType === 9 ? i.head : i), t.insertBefore(e, t.firstChild));
  }
  function Ef(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function Rf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var po = null;
  function Pg(e, t, i) {
    if (po === null) {
      var s = new Map(),
        u = (po = new Map());
      u.set(i, s);
    } else (u = po), (s = u.get(i)), s || ((s = new Map()), u.set(i, s));
    if (s.has(e)) return s;
    for (
      s.set(e, null), i = i.getElementsByTagName(e), u = 0;
      u < i.length;
      u++
    ) {
      var f = i[u];
      if (
        !(
          f[Br] ||
          f[ht] ||
          (e === 'link' && f.getAttribute('rel') === 'stylesheet')
        ) &&
        f.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var y = f.getAttribute(t) || '';
        y = e + y;
        var b = s.get(y);
        b ? b.push(f) : s.set(y, [f]);
      }
    }
    return s;
  }
  function Vg(e, t, i) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        i,
        t === 'title' ? e.querySelector('head > title') : null,
      );
  }
  function T1(e, t, i) {
    if (i === 1 || t.itemProp != null) return !1;
    switch (e) {
      case 'meta':
      case 'title':
        return !0;
      case 'style':
        if (
          typeof t.precedence != 'string' ||
          typeof t.href != 'string' ||
          t.href === ''
        )
          break;
        return !0;
      case 'link':
        if (
          typeof t.rel != 'string' ||
          typeof t.href != 'string' ||
          t.href === '' ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case 'stylesheet':
            return (
              (e = t.disabled), typeof t.precedence == 'string' && e == null
            );
          default:
            return !0;
        }
      case 'script':
        if (
          t.async &&
          typeof t.async != 'function' &&
          typeof t.async != 'symbol' &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == 'string'
        )
          return !0;
    }
    return !1;
  }
  function Qg(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  var Al = null;
  function C1() {}
  function M1(e, t, i) {
    if (Al === null) throw Error(l(475));
    var s = Al;
    if (
      t.type === 'stylesheet' &&
      (typeof i.media != 'string' || matchMedia(i.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var u = ar(i.href),
          f = e.querySelector(Rl(u));
        if (f) {
          (e = f._p),
            e !== null &&
              typeof e == 'object' &&
              typeof e.then == 'function' &&
              (s.count++, (s = mo.bind(s)), e.then(s, s)),
            (t.state.loading |= 4),
            (t.instance = f),
            it(f);
          return;
        }
        (f = e.ownerDocument || e),
          (i = qg(i)),
          (u = en.get(u)) && Ef(i, u),
          (f = f.createElement('link')),
          it(f);
        var y = f;
        (y._p = new Promise(function (b, T) {
          (y.onload = b), (y.onerror = T);
        })),
          ct(f, 'link', i),
          (t.instance = f);
      }
      s.stylesheets === null && (s.stylesheets = new Map()),
        s.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (s.count++,
          (t = mo.bind(s)),
          e.addEventListener('load', t),
          e.addEventListener('error', t));
    }
  }
  function D1() {
    if (Al === null) throw Error(l(475));
    var e = Al;
    return (
      e.stylesheets && e.count === 0 && Of(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var i = setTimeout(function () {
              if ((e.stylesheets && Of(e, e.stylesheets), e.unsuspend)) {
                var s = e.unsuspend;
                (e.unsuspend = null), s();
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                (e.unsuspend = null), clearTimeout(i);
              }
            );
          }
        : null
    );
  }
  function mo() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Of(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var go = null;
  function Of(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (go = new Map()),
        t.forEach(_1, e),
        (go = null),
        mo.call(e));
  }
  function _1(e, t) {
    if (!(t.state.loading & 4)) {
      var i = go.get(e);
      if (i) var s = i.get(null);
      else {
        (i = new Map()), go.set(e, i);
        for (
          var u = e.querySelectorAll(
              'link[data-precedence],style[data-precedence]',
            ),
            f = 0;
          f < u.length;
          f++
        ) {
          var y = u[f];
          (y.nodeName === 'LINK' || y.getAttribute('media') !== 'not all') &&
            (i.set(y.dataset.precedence, y), (s = y));
        }
        s && i.set(null, s);
      }
      (u = t.instance),
        (y = u.getAttribute('data-precedence')),
        (f = i.get(y) || s),
        f === s && i.set(null, u),
        i.set(y, u),
        this.count++,
        (s = mo.bind(this)),
        u.addEventListener('load', s),
        u.addEventListener('error', s),
        f
          ? f.parentNode.insertBefore(u, f.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(u, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var Tl = {
    $$typeof: L,
    Provider: null,
    Consumer: null,
    _currentValue: P,
    _currentValue2: P,
    _threadCount: 0,
  };
  function N1(e, t, i, s, u, f, y, b) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Su(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Su(0)),
      (this.hiddenUpdates = Su(null)),
      (this.identifierPrefix = s),
      (this.onUncaughtError = u),
      (this.onCaughtError = f),
      (this.onRecoverableError = y),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = b),
      (this.incompleteTransitions = new Map());
  }
  function Yg(e, t, i, s, u, f, y, b, T, U, K, X) {
    return (
      (e = new N1(e, t, i, y, b, T, U, X)),
      (t = 1),
      f === !0 && (t |= 24),
      (f = kt(3, null, null, t)),
      (e.current = f),
      (f.stateNode = e),
      (t = rc()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (f.memoizedState = { element: s, isDehydrated: i, cache: t }),
      uc(f),
      e
    );
  }
  function Kg(e) {
    return e ? ((e = Ui), e) : Ui;
  }
  function Fg(e, t, i, s, u, f) {
    (u = Kg(u)),
      s.context === null ? (s.context = u) : (s.pendingContext = u),
      (s = ia(t)),
      (s.payload = { element: i }),
      (f = f === void 0 ? null : f),
      f !== null && (s.callback = f),
      (i = ra(e, s, t)),
      i !== null && (Pt(i, e, t), al(i, e, t));
  }
  function Xg(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < t ? i : t;
    }
  }
  function Af(e, t) {
    Xg(e, t), (e = e.alternate) && Xg(e, t);
  }
  function Zg(e) {
    if (e.tag === 13) {
      var t = zi(e, 67108864);
      t !== null && Pt(t, e, 67108864), Af(e, 67108864);
    }
  }
  var yo = !0;
  function L1(e, t, i, s) {
    var u = N.T;
    N.T = null;
    var f = $.p;
    try {
      ($.p = 2), Tf(e, t, i, s);
    } finally {
      ($.p = f), (N.T = u);
    }
  }
  function z1(e, t, i, s) {
    var u = N.T;
    N.T = null;
    var f = $.p;
    try {
      ($.p = 8), Tf(e, t, i, s);
    } finally {
      ($.p = f), (N.T = u);
    }
  }
  function Tf(e, t, i, s) {
    if (yo) {
      var u = Cf(s);
      if (u === null) pf(e, t, s, vo, i), Jg(e, s);
      else if (j1(u, e, t, i, s)) s.stopPropagation();
      else if ((Jg(e, s), t & 4 && -1 < U1.indexOf(e))) {
        for (; u !== null; ) {
          var f = wi(u);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (((f = f.stateNode), f.current.memoizedState.isDehydrated)) {
                  var y = Ba(f.pendingLanes);
                  if (y !== 0) {
                    var b = f;
                    for (b.pendingLanes |= 2, b.entangledLanes |= 2; y; ) {
                      var T = 1 << (31 - Ut(y));
                      (b.entanglements[1] |= T), (y &= ~T);
                    }
                    Sn(f), (ke & 6) === 0 && ((eo = Yt() + 500), Sl(0));
                  }
                }
                break;
              case 13:
                (b = zi(f, 2)), b !== null && Pt(b, f, 2), no(), Af(f, 2);
            }
          if (((f = Cf(s)), f === null && pf(e, t, s, vo, i), f === u)) break;
          u = f;
        }
        u !== null && s.stopPropagation();
      } else pf(e, t, s, null, i);
    }
  }
  function Cf(e) {
    return (e = Nu(e)), Mf(e);
  }
  var vo = null;
  function Mf(e) {
    if (((vo = null), (e = xi(e)), e !== null)) {
      var t = c(e);
      if (t === null) e = null;
      else {
        var i = t.tag;
        if (i === 13) {
          if (((e = d(t)), e !== null)) return e;
          e = null;
        } else if (i === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (vo = e), null;
  }
  function $g(e) {
    switch (e) {
      case 'beforetoggle':
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'toggle':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 2;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 8;
      case 'message':
        switch (bu()) {
          case ka:
            return 2;
          case fh:
            return 8;
          case us:
          case xS:
            return 32;
          case dh:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Df = !1,
    va = null,
    ba = null,
    Sa = null,
    Cl = new Map(),
    Ml = new Map(),
    xa = [],
    U1 =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' ',
      );
  function Jg(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        va = null;
        break;
      case 'dragenter':
      case 'dragleave':
        ba = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Sa = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Cl.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Ml.delete(t.pointerId);
    }
  }
  function Dl(e, t, i, s, u, f) {
    return e === null || e.nativeEvent !== f
      ? ((e = {
          blockedOn: t,
          domEventName: i,
          eventSystemFlags: s,
          nativeEvent: f,
          targetContainers: [u],
        }),
        t !== null && ((t = wi(t)), t !== null && Zg(t)),
        e)
      : ((e.eventSystemFlags |= s),
        (t = e.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        e);
  }
  function j1(e, t, i, s, u) {
    switch (t) {
      case 'focusin':
        return (va = Dl(va, e, t, i, s, u)), !0;
      case 'dragenter':
        return (ba = Dl(ba, e, t, i, s, u)), !0;
      case 'mouseover':
        return (Sa = Dl(Sa, e, t, i, s, u)), !0;
      case 'pointerover':
        var f = u.pointerId;
        return Cl.set(f, Dl(Cl.get(f) || null, e, t, i, s, u)), !0;
      case 'gotpointercapture':
        return (
          (f = u.pointerId), Ml.set(f, Dl(Ml.get(f) || null, e, t, i, s, u)), !0
        );
    }
    return !1;
  }
  function Ig(e) {
    var t = xi(e.target);
    if (t !== null) {
      var i = c(t);
      if (i !== null) {
        if (((t = i.tag), t === 13)) {
          if (((t = d(i)), t !== null)) {
            (e.blockedOn = t),
              MS(e.priority, function () {
                if (i.tag === 13) {
                  var s = Gt();
                  s = xu(s);
                  var u = zi(i, s);
                  u !== null && Pt(u, i, s), Af(i, s);
                }
              });
            return;
          }
        } else if (t === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function bo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var i = Cf(e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var s = new i.constructor(i.type, i);
        (_u = s), i.target.dispatchEvent(s), (_u = null);
      } else return (t = wi(i)), t !== null && Zg(t), (e.blockedOn = i), !1;
      t.shift();
    }
    return !0;
  }
  function Wg(e, t, i) {
    bo(e) && i.delete(t);
  }
  function k1() {
    (Df = !1),
      va !== null && bo(va) && (va = null),
      ba !== null && bo(ba) && (ba = null),
      Sa !== null && bo(Sa) && (Sa = null),
      Cl.forEach(Wg),
      Ml.forEach(Wg);
  }
  function So(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Df ||
        ((Df = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, k1)));
  }
  var xo = null;
  function ey(e) {
    xo !== e &&
      ((xo = e),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        xo === e && (xo = null);
        for (var t = 0; t < e.length; t += 3) {
          var i = e[t],
            s = e[t + 1],
            u = e[t + 2];
          if (typeof s != 'function') {
            if (Mf(s || i) === null) continue;
            break;
          }
          var f = wi(i);
          f !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Cc(f, { pending: !0, data: u, method: i.method, action: s }, s, u));
        }
      }));
  }
  function _l(e) {
    function t(T) {
      return So(T, e);
    }
    va !== null && So(va, e),
      ba !== null && So(ba, e),
      Sa !== null && So(Sa, e),
      Cl.forEach(t),
      Ml.forEach(t);
    for (var i = 0; i < xa.length; i++) {
      var s = xa[i];
      s.blockedOn === e && (s.blockedOn = null);
    }
    for (; 0 < xa.length && ((i = xa[0]), i.blockedOn === null); )
      Ig(i), i.blockedOn === null && xa.shift();
    if (((i = (e.ownerDocument || e).$$reactFormReplay), i != null))
      for (s = 0; s < i.length; s += 3) {
        var u = i[s],
          f = i[s + 1],
          y = u[Rt] || null;
        if (typeof f == 'function') y || ey(i);
        else if (y) {
          var b = null;
          if (f && f.hasAttribute('formAction')) {
            if (((u = f), (y = f[Rt] || null))) b = y.formAction;
            else if (Mf(u) !== null) continue;
          } else b = y.action;
          typeof b == 'function' ? (i[s + 1] = b) : (i.splice(s, 3), (s -= 3)),
            ey(i);
        }
      }
  }
  function _f(e) {
    this._internalRoot = e;
  }
  (wo.prototype.render = _f.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(l(409));
      var i = t.current,
        s = Gt();
      Fg(i, s, e, t, null, null);
    }),
    (wo.prototype.unmount = _f.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          Fg(e.current, 2, null, e, null, null), no(), (t[Si] = null);
        }
      });
  function wo(e) {
    this._internalRoot = e;
  }
  wo.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = yh();
      e = { blockedOn: null, target: e, priority: t };
      for (var i = 0; i < xa.length && t !== 0 && t < xa[i].priority; i++);
      xa.splice(i, 0, e), i === 0 && Ig(e);
    }
  };
  var ty = n.version;
  if (ty !== '19.1.0') throw Error(l(527, ty, '19.1.0'));
  $.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function'
        ? Error(l(188))
        : ((e = Object.keys(e).join(',')), Error(l(268, e)));
    return (
      (e = m(t)),
      (e = e !== null ? p(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var B1 = {
    bundleType: 0,
    version: '19.1.0',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: N,
    reconcilerVersion: '19.1.0',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Eo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Eo.isDisabled && Eo.supportsFiber)
      try {
        (Ur = Eo.inject(B1)), (zt = Eo);
      } catch {}
  }
  return (
    (Ll.createRoot = function (e, t) {
      if (!o(e)) throw Error(l(299));
      var i = !1,
        s = '',
        u = ym,
        f = vm,
        y = bm,
        b = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (i = !0),
          t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
          t.onCaughtError !== void 0 && (f = t.onCaughtError),
          t.onRecoverableError !== void 0 && (y = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (b = t.unstable_transitionCallbacks)),
        (t = Yg(e, 1, !1, null, null, i, s, u, f, y, b, null)),
        (e[Si] = t.current),
        hf(e),
        new _f(t)
      );
    }),
    (Ll.hydrateRoot = function (e, t, i) {
      if (!o(e)) throw Error(l(299));
      var s = !1,
        u = '',
        f = ym,
        y = vm,
        b = bm,
        T = null,
        U = null;
      return (
        i != null &&
          (i.unstable_strictMode === !0 && (s = !0),
          i.identifierPrefix !== void 0 && (u = i.identifierPrefix),
          i.onUncaughtError !== void 0 && (f = i.onUncaughtError),
          i.onCaughtError !== void 0 && (y = i.onCaughtError),
          i.onRecoverableError !== void 0 && (b = i.onRecoverableError),
          i.unstable_transitionCallbacks !== void 0 &&
            (T = i.unstable_transitionCallbacks),
          i.formState !== void 0 && (U = i.formState)),
        (t = Yg(e, 1, !0, t, i ?? null, s, u, f, y, b, T, U)),
        (t.context = Kg(null)),
        (i = t.current),
        (s = Gt()),
        (s = xu(s)),
        (u = ia(s)),
        (u.callback = null),
        ra(i, u, s),
        (i = s),
        (t.current.lanes = i),
        kr(t, i),
        Sn(t),
        (e[Si] = t.current),
        hf(e),
        new wo(t)
      );
    }),
    (Ll.version = '19.1.0'),
    Ll
  );
}
var dy;
function X1() {
  if (dy) return Uf.exports;
  dy = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (n) {
        console.error(n);
      }
  }
  return a(), (Uf.exports = F1()), Uf.exports;
}
var Z1 = X1(),
  es = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(a) {
      return (
        this.listeners.add(a),
        this.onSubscribe(),
        () => {
          this.listeners.delete(a), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  pi = typeof window > 'u' || 'Deno' in globalThis;
function Dt() {}
function $1(a, n) {
  return typeof a == 'function' ? a(n) : a;
}
function nd(a) {
  return typeof a == 'number' && a >= 0 && a !== 1 / 0;
}
function Qv(a, n) {
  return Math.max(a + (n || 0) - Date.now(), 0);
}
function dr(a, n) {
  return typeof a == 'function' ? a(n) : a;
}
function dn(a, n) {
  return typeof a == 'function' ? a(n) : a;
}
function hy(a, n) {
  const {
    type: r = 'all',
    exact: l,
    fetchStatus: o,
    predicate: c,
    queryKey: d,
    stale: h,
  } = a;
  if (d) {
    if (l) {
      if (n.queryHash !== kd(d, n.options)) return !1;
    } else if (!Gl(n.queryKey, d)) return !1;
  }
  if (r !== 'all') {
    const m = n.isActive();
    if ((r === 'active' && !m) || (r === 'inactive' && m)) return !1;
  }
  return !(
    (typeof h == 'boolean' && n.isStale() !== h) ||
    (o && o !== n.state.fetchStatus) ||
    (c && !c(n))
  );
}
function py(a, n) {
  const { exact: r, status: l, predicate: o, mutationKey: c } = a;
  if (c) {
    if (!n.options.mutationKey) return !1;
    if (r) {
      if (ql(n.options.mutationKey) !== ql(c)) return !1;
    } else if (!Gl(n.options.mutationKey, c)) return !1;
  }
  return !((l && n.state.status !== l) || (o && !o(n)));
}
function kd(a, n) {
  return ((n == null ? void 0 : n.queryKeyHashFn) || ql)(a);
}
function ql(a) {
  return JSON.stringify(a, (n, r) =>
    id(r)
      ? Object.keys(r)
          .sort()
          .reduce((l, o) => ((l[o] = r[o]), l), {})
      : r,
  );
}
function Gl(a, n) {
  return a === n
    ? !0
    : typeof a != typeof n
      ? !1
      : a && n && typeof a == 'object' && typeof n == 'object'
        ? Object.keys(n).every((r) => Gl(a[r], n[r]))
        : !1;
}
function Yv(a, n) {
  if (a === n) return a;
  const r = my(a) && my(n);
  if (r || (id(a) && id(n))) {
    const l = r ? a : Object.keys(a),
      o = l.length,
      c = r ? n : Object.keys(n),
      d = c.length,
      h = r ? [] : {};
    let m = 0;
    for (let p = 0; p < d; p++) {
      const g = r ? p : c[p];
      ((!r && l.includes(g)) || r) && a[g] === void 0 && n[g] === void 0
        ? ((h[g] = void 0), m++)
        : ((h[g] = Yv(a[g], n[g])), h[g] === a[g] && a[g] !== void 0 && m++);
    }
    return o === d && m === o ? a : h;
  }
  return n;
}
function ad(a, n) {
  if (!n || Object.keys(a).length !== Object.keys(n).length) return !1;
  for (const r in a) if (a[r] !== n[r]) return !1;
  return !0;
}
function my(a) {
  return Array.isArray(a) && a.length === Object.keys(a).length;
}
function id(a) {
  if (!gy(a)) return !1;
  const n = a.constructor;
  if (n === void 0) return !0;
  const r = n.prototype;
  return !(
    !gy(r) ||
    !r.hasOwnProperty('isPrototypeOf') ||
    Object.getPrototypeOf(a) !== Object.prototype
  );
}
function gy(a) {
  return Object.prototype.toString.call(a) === '[object Object]';
}
function J1(a) {
  return new Promise((n) => {
    setTimeout(n, a);
  });
}
function rd(a, n, r) {
  return typeof r.structuralSharing == 'function'
    ? r.structuralSharing(a, n)
    : r.structuralSharing !== !1
      ? Yv(a, n)
      : n;
}
function I1(a, n, r = 0) {
  const l = [...a, n];
  return r && l.length > r ? l.slice(1) : l;
}
function W1(a, n, r = 0) {
  const l = [n, ...a];
  return r && l.length > r ? l.slice(0, -1) : l;
}
var Bd = Symbol();
function Kv(a, n) {
  return !a.queryFn && n != null && n.initialPromise
    ? () => n.initialPromise
    : !a.queryFn || a.queryFn === Bd
      ? () => Promise.reject(new Error(`Missing queryFn: '${a.queryHash}'`))
      : a.queryFn;
}
function ew(a, n) {
  return typeof a == 'function' ? a(...n) : !!a;
}
var ii,
  Aa,
  mr,
  Nv,
  tw =
    ((Nv = class extends es {
      constructor() {
        super();
        ye(this, ii);
        ye(this, Aa);
        ye(this, mr);
        re(this, mr, (n) => {
          if (!pi && window.addEventListener) {
            const r = () => n();
            return (
              window.addEventListener('visibilitychange', r, !1),
              () => {
                window.removeEventListener('visibilitychange', r);
              }
            );
          }
        });
      }
      onSubscribe() {
        M(this, Aa) || this.setEventListener(M(this, mr));
      }
      onUnsubscribe() {
        var n;
        this.hasListeners() ||
          ((n = M(this, Aa)) == null || n.call(this), re(this, Aa, void 0));
      }
      setEventListener(n) {
        var r;
        re(this, mr, n),
          (r = M(this, Aa)) == null || r.call(this),
          re(
            this,
            Aa,
            n((l) => {
              typeof l == 'boolean' ? this.setFocused(l) : this.onFocus();
            }),
          );
      }
      setFocused(n) {
        M(this, ii) !== n && (re(this, ii, n), this.onFocus());
      }
      onFocus() {
        const n = this.isFocused();
        this.listeners.forEach((r) => {
          r(n);
        });
      }
      isFocused() {
        var n;
        return typeof M(this, ii) == 'boolean'
          ? M(this, ii)
          : ((n = globalThis.document) == null ? void 0 : n.visibilityState) !==
              'hidden';
      }
    }),
    (ii = new WeakMap()),
    (Aa = new WeakMap()),
    (mr = new WeakMap()),
    Nv),
  Hd = new tw(),
  gr,
  Ta,
  yr,
  Lv,
  nw =
    ((Lv = class extends es {
      constructor() {
        super();
        ye(this, gr, !0);
        ye(this, Ta);
        ye(this, yr);
        re(this, yr, (n) => {
          if (!pi && window.addEventListener) {
            const r = () => n(!0),
              l = () => n(!1);
            return (
              window.addEventListener('online', r, !1),
              window.addEventListener('offline', l, !1),
              () => {
                window.removeEventListener('online', r),
                  window.removeEventListener('offline', l);
              }
            );
          }
        });
      }
      onSubscribe() {
        M(this, Ta) || this.setEventListener(M(this, yr));
      }
      onUnsubscribe() {
        var n;
        this.hasListeners() ||
          ((n = M(this, Ta)) == null || n.call(this), re(this, Ta, void 0));
      }
      setEventListener(n) {
        var r;
        re(this, yr, n),
          (r = M(this, Ta)) == null || r.call(this),
          re(this, Ta, n(this.setOnline.bind(this)));
      }
      setOnline(n) {
        M(this, gr) !== n &&
          (re(this, gr, n),
          this.listeners.forEach((l) => {
            l(n);
          }));
      }
      isOnline() {
        return M(this, gr);
      }
    }),
    (gr = new WeakMap()),
    (Ta = new WeakMap()),
    (yr = new WeakMap()),
    Lv),
  Vo = new nw();
function ld() {
  let a, n;
  const r = new Promise((o, c) => {
    (a = o), (n = c);
  });
  (r.status = 'pending'), r.catch(() => {});
  function l(o) {
    Object.assign(r, o), delete r.resolve, delete r.reject;
  }
  return (
    (r.resolve = (o) => {
      l({ status: 'fulfilled', value: o }), a(o);
    }),
    (r.reject = (o) => {
      l({ status: 'rejected', reason: o }), n(o);
    }),
    r
  );
}
function aw(a) {
  return Math.min(1e3 * 2 ** a, 3e4);
}
function Fv(a) {
  return (a ?? 'online') === 'online' ? Vo.isOnline() : !0;
}
var Xv = class extends Error {
  constructor(a) {
    super('CancelledError'),
      (this.revert = a == null ? void 0 : a.revert),
      (this.silent = a == null ? void 0 : a.silent);
  }
};
function Hf(a) {
  return a instanceof Xv;
}
function Zv(a) {
  let n = !1,
    r = 0,
    l = !1,
    o;
  const c = ld(),
    d = (x) => {
      var R;
      l || (S(new Xv(x)), (R = a.abort) == null || R.call(a));
    },
    h = () => {
      n = !0;
    },
    m = () => {
      n = !1;
    },
    p = () =>
      Hd.isFocused() &&
      (a.networkMode === 'always' || Vo.isOnline()) &&
      a.canRun(),
    g = () => Fv(a.networkMode) && a.canRun(),
    v = (x) => {
      var R;
      l ||
        ((l = !0),
        (R = a.onSuccess) == null || R.call(a, x),
        o == null || o(),
        c.resolve(x));
    },
    S = (x) => {
      var R;
      l ||
        ((l = !0),
        (R = a.onError) == null || R.call(a, x),
        o == null || o(),
        c.reject(x));
    },
    E = () =>
      new Promise((x) => {
        var R;
        (o = (_) => {
          (l || p()) && x(_);
        }),
          (R = a.onPause) == null || R.call(a);
      }).then(() => {
        var x;
        (o = void 0), l || (x = a.onContinue) == null || x.call(a);
      }),
    w = () => {
      if (l) return;
      let x;
      const R = r === 0 ? a.initialPromise : void 0;
      try {
        x = R ?? a.fn();
      } catch (_) {
        x = Promise.reject(_);
      }
      Promise.resolve(x)
        .then(v)
        .catch((_) => {
          var J;
          if (l) return;
          const k = a.retry ?? (pi ? 0 : 3),
            L = a.retryDelay ?? aw,
            q = typeof L == 'function' ? L(r, _) : L,
            B =
              k === !0 ||
              (typeof k == 'number' && r < k) ||
              (typeof k == 'function' && k(r, _));
          if (n || !B) {
            S(_);
            return;
          }
          r++,
            (J = a.onFail) == null || J.call(a, r, _),
            J1(q)
              .then(() => (p() ? void 0 : E()))
              .then(() => {
                n ? S(_) : w();
              });
        });
    };
  return {
    promise: c,
    cancel: d,
    continue: () => (o == null || o(), c),
    cancelRetry: h,
    continueRetry: m,
    canStart: g,
    start: () => (g() ? w() : E().then(w), c),
  };
}
var iw = (a) => setTimeout(a, 0);
function rw() {
  let a = [],
    n = 0,
    r = (h) => {
      h();
    },
    l = (h) => {
      h();
    },
    o = iw;
  const c = (h) => {
      n
        ? a.push(h)
        : o(() => {
            r(h);
          });
    },
    d = () => {
      const h = a;
      (a = []),
        h.length &&
          o(() => {
            l(() => {
              h.forEach((m) => {
                r(m);
              });
            });
          });
    };
  return {
    batch: (h) => {
      let m;
      n++;
      try {
        m = h();
      } finally {
        n--, n || d();
      }
      return m;
    },
    batchCalls:
      (h) =>
      (...m) => {
        c(() => {
          h(...m);
        });
      },
    schedule: c,
    setNotifyFunction: (h) => {
      r = h;
    },
    setBatchNotifyFunction: (h) => {
      l = h;
    },
    setScheduler: (h) => {
      o = h;
    },
  };
}
var ft = rw(),
  ri,
  zv,
  $v =
    ((zv = class {
      constructor() {
        ye(this, ri);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          nd(this.gcTime) &&
            re(
              this,
              ri,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime),
            );
      }
      updateGcTime(a) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          a ?? (pi ? 1 / 0 : 5 * 60 * 1e3),
        );
      }
      clearGcTimeout() {
        M(this, ri) && (clearTimeout(M(this, ri)), re(this, ri, void 0));
      }
    }),
    (ri = new WeakMap()),
    zv),
  vr,
  br,
  tn,
  li,
  gt,
  $l,
  si,
  cn,
  Fn,
  Uv,
  lw =
    ((Uv = class extends $v {
      constructor(n) {
        super();
        ye(this, cn);
        ye(this, vr);
        ye(this, br);
        ye(this, tn);
        ye(this, li);
        ye(this, gt);
        ye(this, $l);
        ye(this, si);
        re(this, si, !1),
          re(this, $l, n.defaultOptions),
          this.setOptions(n.options),
          (this.observers = []),
          re(this, li, n.client),
          re(this, tn, M(this, li).getQueryCache()),
          (this.queryKey = n.queryKey),
          (this.queryHash = n.queryHash),
          re(this, vr, sw(this.options)),
          (this.state = n.state ?? M(this, vr)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var n;
        return (n = M(this, gt)) == null ? void 0 : n.promise;
      }
      setOptions(n) {
        (this.options = { ...M(this, $l), ...n }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === 'idle' &&
          M(this, tn).remove(this);
      }
      setData(n, r) {
        const l = rd(this.state.data, n, this.options);
        return (
          Me(this, cn, Fn).call(this, {
            data: l,
            type: 'success',
            dataUpdatedAt: r == null ? void 0 : r.updatedAt,
            manual: r == null ? void 0 : r.manual,
          }),
          l
        );
      }
      setState(n, r) {
        Me(this, cn, Fn).call(this, {
          type: 'setState',
          state: n,
          setStateOptions: r,
        });
      }
      cancel(n) {
        var l, o;
        const r = (l = M(this, gt)) == null ? void 0 : l.promise;
        return (
          (o = M(this, gt)) == null || o.cancel(n),
          r ? r.then(Dt).catch(Dt) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(M(this, vr));
      }
      isActive() {
        return this.observers.some((n) => dn(n.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === Bd ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
            ? this.observers.some((n) => n.getCurrentResult().isStale)
            : this.state.data === void 0;
      }
      isStaleByTime(n = 0) {
        return (
          this.state.isInvalidated ||
          this.state.data === void 0 ||
          !Qv(this.state.dataUpdatedAt, n)
        );
      }
      onFocus() {
        var r;
        const n = this.observers.find((l) => l.shouldFetchOnWindowFocus());
        n == null || n.refetch({ cancelRefetch: !1 }),
          (r = M(this, gt)) == null || r.continue();
      }
      onOnline() {
        var r;
        const n = this.observers.find((l) => l.shouldFetchOnReconnect());
        n == null || n.refetch({ cancelRefetch: !1 }),
          (r = M(this, gt)) == null || r.continue();
      }
      addObserver(n) {
        this.observers.includes(n) ||
          (this.observers.push(n),
          this.clearGcTimeout(),
          M(this, tn).notify({
            type: 'observerAdded',
            query: this,
            observer: n,
          }));
      }
      removeObserver(n) {
        this.observers.includes(n) &&
          ((this.observers = this.observers.filter((r) => r !== n)),
          this.observers.length ||
            (M(this, gt) &&
              (M(this, si)
                ? M(this, gt).cancel({ revert: !0 })
                : M(this, gt).cancelRetry()),
            this.scheduleGc()),
          M(this, tn).notify({
            type: 'observerRemoved',
            query: this,
            observer: n,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          Me(this, cn, Fn).call(this, { type: 'invalidate' });
      }
      fetch(n, r) {
        var m, p, g;
        if (this.state.fetchStatus !== 'idle') {
          if (this.state.data !== void 0 && r != null && r.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (M(this, gt))
            return M(this, gt).continueRetry(), M(this, gt).promise;
        }
        if ((n && this.setOptions(n), !this.options.queryFn)) {
          const v = this.observers.find((S) => S.options.queryFn);
          v && this.setOptions(v.options);
        }
        const l = new AbortController(),
          o = (v) => {
            Object.defineProperty(v, 'signal', {
              enumerable: !0,
              get: () => (re(this, si, !0), l.signal),
            });
          },
          c = () => {
            const v = Kv(this.options, r),
              S = {
                client: M(this, li),
                queryKey: this.queryKey,
                meta: this.meta,
              };
            return (
              o(S),
              re(this, si, !1),
              this.options.persister ? this.options.persister(v, S, this) : v(S)
            );
          },
          d = {
            fetchOptions: r,
            options: this.options,
            queryKey: this.queryKey,
            client: M(this, li),
            state: this.state,
            fetchFn: c,
          };
        o(d),
          (m = this.options.behavior) == null || m.onFetch(d, this),
          re(this, br, this.state),
          (this.state.fetchStatus === 'idle' ||
            this.state.fetchMeta !==
              ((p = d.fetchOptions) == null ? void 0 : p.meta)) &&
            Me(this, cn, Fn).call(this, {
              type: 'fetch',
              meta: (g = d.fetchOptions) == null ? void 0 : g.meta,
            });
        const h = (v) => {
          var S, E, w, x;
          (Hf(v) && v.silent) ||
            Me(this, cn, Fn).call(this, { type: 'error', error: v }),
            Hf(v) ||
              ((E = (S = M(this, tn).config).onError) == null ||
                E.call(S, v, this),
              (x = (w = M(this, tn).config).onSettled) == null ||
                x.call(w, this.state.data, v, this)),
            this.scheduleGc();
        };
        return (
          re(
            this,
            gt,
            Zv({
              initialPromise: r == null ? void 0 : r.initialPromise,
              fn: d.fetchFn,
              abort: l.abort.bind(l),
              onSuccess: (v) => {
                var S, E, w, x;
                if (v === void 0) {
                  h(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(v);
                } catch (R) {
                  h(R);
                  return;
                }
                (E = (S = M(this, tn).config).onSuccess) == null ||
                  E.call(S, v, this),
                  (x = (w = M(this, tn).config).onSettled) == null ||
                    x.call(w, v, this.state.error, this),
                  this.scheduleGc();
              },
              onError: h,
              onFail: (v, S) => {
                Me(this, cn, Fn).call(this, {
                  type: 'failed',
                  failureCount: v,
                  error: S,
                });
              },
              onPause: () => {
                Me(this, cn, Fn).call(this, { type: 'pause' });
              },
              onContinue: () => {
                Me(this, cn, Fn).call(this, { type: 'continue' });
              },
              retry: d.options.retry,
              retryDelay: d.options.retryDelay,
              networkMode: d.options.networkMode,
              canRun: () => !0,
            }),
          ),
          M(this, gt).start()
        );
      }
    }),
    (vr = new WeakMap()),
    (br = new WeakMap()),
    (tn = new WeakMap()),
    (li = new WeakMap()),
    (gt = new WeakMap()),
    ($l = new WeakMap()),
    (si = new WeakMap()),
    (cn = new WeakSet()),
    (Fn = function (n) {
      const r = (l) => {
        switch (n.type) {
          case 'failed':
            return {
              ...l,
              fetchFailureCount: n.failureCount,
              fetchFailureReason: n.error,
            };
          case 'pause':
            return { ...l, fetchStatus: 'paused' };
          case 'continue':
            return { ...l, fetchStatus: 'fetching' };
          case 'fetch':
            return {
              ...l,
              ...Jv(l.data, this.options),
              fetchMeta: n.meta ?? null,
            };
          case 'success':
            return {
              ...l,
              data: n.data,
              dataUpdateCount: l.dataUpdateCount + 1,
              dataUpdatedAt: n.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: 'success',
              ...(!n.manual && {
                fetchStatus: 'idle',
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case 'error':
            const o = n.error;
            return Hf(o) && o.revert && M(this, br)
              ? { ...M(this, br), fetchStatus: 'idle' }
              : {
                  ...l,
                  error: o,
                  errorUpdateCount: l.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: l.fetchFailureCount + 1,
                  fetchFailureReason: o,
                  fetchStatus: 'idle',
                  status: 'error',
                };
          case 'invalidate':
            return { ...l, isInvalidated: !0 };
          case 'setState':
            return { ...l, ...n.state };
        }
      };
      (this.state = r(this.state)),
        ft.batch(() => {
          this.observers.forEach((l) => {
            l.onQueryUpdate();
          }),
            M(this, tn).notify({ query: this, type: 'updated', action: n });
        });
    }),
    Uv);
function Jv(a, n) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Fv(n.networkMode) ? 'fetching' : 'paused',
    ...(a === void 0 && { error: null, status: 'pending' }),
  };
}
function sw(a) {
  const n =
      typeof a.initialData == 'function' ? a.initialData() : a.initialData,
    r = n !== void 0,
    l = r
      ? typeof a.initialDataUpdatedAt == 'function'
        ? a.initialDataUpdatedAt()
        : a.initialDataUpdatedAt
      : 0;
  return {
    data: n,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? (l ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? 'success' : 'pending',
    fetchStatus: 'idle',
  };
}
var wn,
  jv,
  ow =
    ((jv = class extends es {
      constructor(n = {}) {
        super();
        ye(this, wn);
        (this.config = n), re(this, wn, new Map());
      }
      build(n, r, l) {
        const o = r.queryKey,
          c = r.queryHash ?? kd(o, r);
        let d = this.get(c);
        return (
          d ||
            ((d = new lw({
              client: n,
              queryKey: o,
              queryHash: c,
              options: n.defaultQueryOptions(r),
              state: l,
              defaultOptions: n.getQueryDefaults(o),
            })),
            this.add(d)),
          d
        );
      }
      add(n) {
        M(this, wn).has(n.queryHash) ||
          (M(this, wn).set(n.queryHash, n),
          this.notify({ type: 'added', query: n }));
      }
      remove(n) {
        const r = M(this, wn).get(n.queryHash);
        r &&
          (n.destroy(),
          r === n && M(this, wn).delete(n.queryHash),
          this.notify({ type: 'removed', query: n }));
      }
      clear() {
        ft.batch(() => {
          this.getAll().forEach((n) => {
            this.remove(n);
          });
        });
      }
      get(n) {
        return M(this, wn).get(n);
      }
      getAll() {
        return [...M(this, wn).values()];
      }
      find(n) {
        const r = { exact: !0, ...n };
        return this.getAll().find((l) => hy(r, l));
      }
      findAll(n = {}) {
        const r = this.getAll();
        return Object.keys(n).length > 0 ? r.filter((l) => hy(n, l)) : r;
      }
      notify(n) {
        ft.batch(() => {
          this.listeners.forEach((r) => {
            r(n);
          });
        });
      }
      onFocus() {
        ft.batch(() => {
          this.getAll().forEach((n) => {
            n.onFocus();
          });
        });
      }
      onOnline() {
        ft.batch(() => {
          this.getAll().forEach((n) => {
            n.onOnline();
          });
        });
      }
    }),
    (wn = new WeakMap()),
    jv),
  En,
  bt,
  oi,
  Rn,
  Ra,
  kv,
  uw =
    ((kv = class extends $v {
      constructor(n) {
        super();
        ye(this, Rn);
        ye(this, En);
        ye(this, bt);
        ye(this, oi);
        (this.mutationId = n.mutationId),
          re(this, bt, n.mutationCache),
          re(this, En, []),
          (this.state = n.state || cw()),
          this.setOptions(n.options),
          this.scheduleGc();
      }
      setOptions(n) {
        (this.options = n), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(n) {
        M(this, En).includes(n) ||
          (M(this, En).push(n),
          this.clearGcTimeout(),
          M(this, bt).notify({
            type: 'observerAdded',
            mutation: this,
            observer: n,
          }));
      }
      removeObserver(n) {
        re(
          this,
          En,
          M(this, En).filter((r) => r !== n),
        ),
          this.scheduleGc(),
          M(this, bt).notify({
            type: 'observerRemoved',
            mutation: this,
            observer: n,
          });
      }
      optionalRemove() {
        M(this, En).length ||
          (this.state.status === 'pending'
            ? this.scheduleGc()
            : M(this, bt).remove(this));
      }
      continue() {
        var n;
        return (
          ((n = M(this, oi)) == null ? void 0 : n.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(n) {
        var c, d, h, m, p, g, v, S, E, w, x, R, _, k, L, q, B, J, Z, G;
        const r = () => {
          Me(this, Rn, Ra).call(this, { type: 'continue' });
        };
        re(
          this,
          oi,
          Zv({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(n)
                : Promise.reject(new Error('No mutationFn found')),
            onFail: (W, ne) => {
              Me(this, Rn, Ra).call(this, {
                type: 'failed',
                failureCount: W,
                error: ne,
              });
            },
            onPause: () => {
              Me(this, Rn, Ra).call(this, { type: 'pause' });
            },
            onContinue: r,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => M(this, bt).canRun(this),
          }),
        );
        const l = this.state.status === 'pending',
          o = !M(this, oi).canStart();
        try {
          if (l) r();
          else {
            Me(this, Rn, Ra).call(this, {
              type: 'pending',
              variables: n,
              isPaused: o,
            }),
              await ((d = (c = M(this, bt).config).onMutate) == null
                ? void 0
                : d.call(c, n, this));
            const ne = await ((m = (h = this.options).onMutate) == null
              ? void 0
              : m.call(h, n));
            ne !== this.state.context &&
              Me(this, Rn, Ra).call(this, {
                type: 'pending',
                context: ne,
                variables: n,
                isPaused: o,
              });
          }
          const W = await M(this, oi).start();
          return (
            await ((g = (p = M(this, bt).config).onSuccess) == null
              ? void 0
              : g.call(p, W, n, this.state.context, this)),
            await ((S = (v = this.options).onSuccess) == null
              ? void 0
              : S.call(v, W, n, this.state.context)),
            await ((w = (E = M(this, bt).config).onSettled) == null
              ? void 0
              : w.call(
                  E,
                  W,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                )),
            await ((R = (x = this.options).onSettled) == null
              ? void 0
              : R.call(x, W, null, n, this.state.context)),
            Me(this, Rn, Ra).call(this, { type: 'success', data: W }),
            W
          );
        } catch (W) {
          try {
            throw (
              (await ((k = (_ = M(this, bt).config).onError) == null
                ? void 0
                : k.call(_, W, n, this.state.context, this)),
              await ((q = (L = this.options).onError) == null
                ? void 0
                : q.call(L, W, n, this.state.context)),
              await ((J = (B = M(this, bt).config).onSettled) == null
                ? void 0
                : J.call(
                    B,
                    void 0,
                    W,
                    this.state.variables,
                    this.state.context,
                    this,
                  )),
              await ((G = (Z = this.options).onSettled) == null
                ? void 0
                : G.call(Z, void 0, W, n, this.state.context)),
              W)
            );
          } finally {
            Me(this, Rn, Ra).call(this, { type: 'error', error: W });
          }
        } finally {
          M(this, bt).runNext(this);
        }
      }
    }),
    (En = new WeakMap()),
    (bt = new WeakMap()),
    (oi = new WeakMap()),
    (Rn = new WeakSet()),
    (Ra = function (n) {
      const r = (l) => {
        switch (n.type) {
          case 'failed':
            return {
              ...l,
              failureCount: n.failureCount,
              failureReason: n.error,
            };
          case 'pause':
            return { ...l, isPaused: !0 };
          case 'continue':
            return { ...l, isPaused: !1 };
          case 'pending':
            return {
              ...l,
              context: n.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: n.isPaused,
              status: 'pending',
              variables: n.variables,
              submittedAt: Date.now(),
            };
          case 'success':
            return {
              ...l,
              data: n.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: 'success',
              isPaused: !1,
            };
          case 'error':
            return {
              ...l,
              data: void 0,
              error: n.error,
              failureCount: l.failureCount + 1,
              failureReason: n.error,
              isPaused: !1,
              status: 'error',
            };
        }
      };
      (this.state = r(this.state)),
        ft.batch(() => {
          M(this, En).forEach((l) => {
            l.onMutationUpdate(n);
          }),
            M(this, bt).notify({ mutation: this, type: 'updated', action: n });
        });
    }),
    kv);
function cw() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: 'idle',
    variables: void 0,
    submittedAt: 0,
  };
}
var Xn,
  fn,
  Jl,
  Bv,
  fw =
    ((Bv = class extends es {
      constructor(n = {}) {
        super();
        ye(this, Xn);
        ye(this, fn);
        ye(this, Jl);
        (this.config = n),
          re(this, Xn, new Set()),
          re(this, fn, new Map()),
          re(this, Jl, 0);
      }
      build(n, r, l) {
        const o = new uw({
          mutationCache: this,
          mutationId: ++Ro(this, Jl)._,
          options: n.defaultMutationOptions(r),
          state: l,
        });
        return this.add(o), o;
      }
      add(n) {
        M(this, Xn).add(n);
        const r = Oo(n);
        if (typeof r == 'string') {
          const l = M(this, fn).get(r);
          l ? l.push(n) : M(this, fn).set(r, [n]);
        }
        this.notify({ type: 'added', mutation: n });
      }
      remove(n) {
        if (M(this, Xn).delete(n)) {
          const r = Oo(n);
          if (typeof r == 'string') {
            const l = M(this, fn).get(r);
            if (l)
              if (l.length > 1) {
                const o = l.indexOf(n);
                o !== -1 && l.splice(o, 1);
              } else l[0] === n && M(this, fn).delete(r);
          }
        }
        this.notify({ type: 'removed', mutation: n });
      }
      canRun(n) {
        const r = Oo(n);
        if (typeof r == 'string') {
          const l = M(this, fn).get(r),
            o =
              l == null ? void 0 : l.find((c) => c.state.status === 'pending');
          return !o || o === n;
        } else return !0;
      }
      runNext(n) {
        var l;
        const r = Oo(n);
        if (typeof r == 'string') {
          const o =
            (l = M(this, fn).get(r)) == null
              ? void 0
              : l.find((c) => c !== n && c.state.isPaused);
          return (o == null ? void 0 : o.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        ft.batch(() => {
          M(this, Xn).forEach((n) => {
            this.notify({ type: 'removed', mutation: n });
          }),
            M(this, Xn).clear(),
            M(this, fn).clear();
        });
      }
      getAll() {
        return Array.from(M(this, Xn));
      }
      find(n) {
        const r = { exact: !0, ...n };
        return this.getAll().find((l) => py(r, l));
      }
      findAll(n = {}) {
        return this.getAll().filter((r) => py(n, r));
      }
      notify(n) {
        ft.batch(() => {
          this.listeners.forEach((r) => {
            r(n);
          });
        });
      }
      resumePausedMutations() {
        const n = this.getAll().filter((r) => r.state.isPaused);
        return ft.batch(() =>
          Promise.all(n.map((r) => r.continue().catch(Dt))),
        );
      }
    }),
    (Xn = new WeakMap()),
    (fn = new WeakMap()),
    (Jl = new WeakMap()),
    Bv);
function Oo(a) {
  var n;
  return (n = a.options.scope) == null ? void 0 : n.id;
}
function yy(a) {
  return {
    onFetch: (n, r) => {
      var g, v, S, E, w;
      const l = n.options,
        o =
          (S =
            (v = (g = n.fetchOptions) == null ? void 0 : g.meta) == null
              ? void 0
              : v.fetchMore) == null
            ? void 0
            : S.direction,
        c = ((E = n.state.data) == null ? void 0 : E.pages) || [],
        d = ((w = n.state.data) == null ? void 0 : w.pageParams) || [];
      let h = { pages: [], pageParams: [] },
        m = 0;
      const p = async () => {
        let x = !1;
        const R = (L) => {
            Object.defineProperty(L, 'signal', {
              enumerable: !0,
              get: () => (
                n.signal.aborted
                  ? (x = !0)
                  : n.signal.addEventListener('abort', () => {
                      x = !0;
                    }),
                n.signal
              ),
            });
          },
          _ = Kv(n.options, n.fetchOptions),
          k = async (L, q, B) => {
            if (x) return Promise.reject();
            if (q == null && L.pages.length) return Promise.resolve(L);
            const J = {
              client: n.client,
              queryKey: n.queryKey,
              pageParam: q,
              direction: B ? 'backward' : 'forward',
              meta: n.options.meta,
            };
            R(J);
            const Z = await _(J),
              { maxPages: G } = n.options,
              W = B ? W1 : I1;
            return {
              pages: W(L.pages, Z, G),
              pageParams: W(L.pageParams, q, G),
            };
          };
        if (o && c.length) {
          const L = o === 'backward',
            q = L ? dw : vy,
            B = { pages: c, pageParams: d },
            J = q(l, B);
          h = await k(B, J, L);
        } else {
          const L = a ?? c.length;
          do {
            const q = m === 0 ? (d[0] ?? l.initialPageParam) : vy(l, h);
            if (m > 0 && q == null) break;
            (h = await k(h, q)), m++;
          } while (m < L);
        }
        return h;
      };
      n.options.persister
        ? (n.fetchFn = () => {
            var x, R;
            return (R = (x = n.options).persister) == null
              ? void 0
              : R.call(
                  x,
                  p,
                  {
                    client: n.client,
                    queryKey: n.queryKey,
                    meta: n.options.meta,
                    signal: n.signal,
                  },
                  r,
                );
          })
        : (n.fetchFn = p);
    },
  };
}
function vy(a, { pages: n, pageParams: r }) {
  const l = n.length - 1;
  return n.length > 0 ? a.getNextPageParam(n[l], n, r[l], r) : void 0;
}
function dw(a, { pages: n, pageParams: r }) {
  var l;
  return n.length > 0
    ? (l = a.getPreviousPageParam) == null
      ? void 0
      : l.call(a, n[0], n, r[0], r)
    : void 0;
}
var Ze,
  Ca,
  Ma,
  Sr,
  xr,
  Da,
  wr,
  Er,
  Hv,
  hw =
    ((Hv = class {
      constructor(a = {}) {
        ye(this, Ze);
        ye(this, Ca);
        ye(this, Ma);
        ye(this, Sr);
        ye(this, xr);
        ye(this, Da);
        ye(this, wr);
        ye(this, Er);
        re(this, Ze, a.queryCache || new ow()),
          re(this, Ca, a.mutationCache || new fw()),
          re(this, Ma, a.defaultOptions || {}),
          re(this, Sr, new Map()),
          re(this, xr, new Map()),
          re(this, Da, 0);
      }
      mount() {
        Ro(this, Da)._++,
          M(this, Da) === 1 &&
            (re(
              this,
              wr,
              Hd.subscribe(async (a) => {
                a &&
                  (await this.resumePausedMutations(), M(this, Ze).onFocus());
              }),
            ),
            re(
              this,
              Er,
              Vo.subscribe(async (a) => {
                a &&
                  (await this.resumePausedMutations(), M(this, Ze).onOnline());
              }),
            ));
      }
      unmount() {
        var a, n;
        Ro(this, Da)._--,
          M(this, Da) === 0 &&
            ((a = M(this, wr)) == null || a.call(this),
            re(this, wr, void 0),
            (n = M(this, Er)) == null || n.call(this),
            re(this, Er, void 0));
      }
      isFetching(a) {
        return M(this, Ze).findAll({ ...a, fetchStatus: 'fetching' }).length;
      }
      isMutating(a) {
        return M(this, Ca).findAll({ ...a, status: 'pending' }).length;
      }
      getQueryData(a) {
        var r;
        const n = this.defaultQueryOptions({ queryKey: a });
        return (r = M(this, Ze).get(n.queryHash)) == null
          ? void 0
          : r.state.data;
      }
      ensureQueryData(a) {
        const n = this.defaultQueryOptions(a),
          r = M(this, Ze).build(this, n),
          l = r.state.data;
        return l === void 0
          ? this.fetchQuery(a)
          : (a.revalidateIfStale &&
              r.isStaleByTime(dr(n.staleTime, r)) &&
              this.prefetchQuery(n),
            Promise.resolve(l));
      }
      getQueriesData(a) {
        return M(this, Ze)
          .findAll(a)
          .map(({ queryKey: n, state: r }) => {
            const l = r.data;
            return [n, l];
          });
      }
      setQueryData(a, n, r) {
        const l = this.defaultQueryOptions({ queryKey: a }),
          o = M(this, Ze).get(l.queryHash),
          c = o == null ? void 0 : o.state.data,
          d = $1(n, c);
        if (d !== void 0)
          return M(this, Ze)
            .build(this, l)
            .setData(d, { ...r, manual: !0 });
      }
      setQueriesData(a, n, r) {
        return ft.batch(() =>
          M(this, Ze)
            .findAll(a)
            .map(({ queryKey: l }) => [l, this.setQueryData(l, n, r)]),
        );
      }
      getQueryState(a) {
        var r;
        const n = this.defaultQueryOptions({ queryKey: a });
        return (r = M(this, Ze).get(n.queryHash)) == null ? void 0 : r.state;
      }
      removeQueries(a) {
        const n = M(this, Ze);
        ft.batch(() => {
          n.findAll(a).forEach((r) => {
            n.remove(r);
          });
        });
      }
      resetQueries(a, n) {
        const r = M(this, Ze);
        return ft.batch(
          () => (
            r.findAll(a).forEach((l) => {
              l.reset();
            }),
            this.refetchQueries({ type: 'active', ...a }, n)
          ),
        );
      }
      cancelQueries(a, n = {}) {
        const r = { revert: !0, ...n },
          l = ft.batch(() =>
            M(this, Ze)
              .findAll(a)
              .map((o) => o.cancel(r)),
          );
        return Promise.all(l).then(Dt).catch(Dt);
      }
      invalidateQueries(a, n = {}) {
        return ft.batch(
          () => (
            M(this, Ze)
              .findAll(a)
              .forEach((r) => {
                r.invalidate();
              }),
            (a == null ? void 0 : a.refetchType) === 'none'
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...a,
                    type:
                      (a == null ? void 0 : a.refetchType) ??
                      (a == null ? void 0 : a.type) ??
                      'active',
                  },
                  n,
                )
          ),
        );
      }
      refetchQueries(a, n = {}) {
        const r = { ...n, cancelRefetch: n.cancelRefetch ?? !0 },
          l = ft.batch(() =>
            M(this, Ze)
              .findAll(a)
              .filter((o) => !o.isDisabled())
              .map((o) => {
                let c = o.fetch(void 0, r);
                return (
                  r.throwOnError || (c = c.catch(Dt)),
                  o.state.fetchStatus === 'paused' ? Promise.resolve() : c
                );
              }),
          );
        return Promise.all(l).then(Dt);
      }
      fetchQuery(a) {
        const n = this.defaultQueryOptions(a);
        n.retry === void 0 && (n.retry = !1);
        const r = M(this, Ze).build(this, n);
        return r.isStaleByTime(dr(n.staleTime, r))
          ? r.fetch(n)
          : Promise.resolve(r.state.data);
      }
      prefetchQuery(a) {
        return this.fetchQuery(a).then(Dt).catch(Dt);
      }
      fetchInfiniteQuery(a) {
        return (a.behavior = yy(a.pages)), this.fetchQuery(a);
      }
      prefetchInfiniteQuery(a) {
        return this.fetchInfiniteQuery(a).then(Dt).catch(Dt);
      }
      ensureInfiniteQueryData(a) {
        return (a.behavior = yy(a.pages)), this.ensureQueryData(a);
      }
      resumePausedMutations() {
        return Vo.isOnline()
          ? M(this, Ca).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return M(this, Ze);
      }
      getMutationCache() {
        return M(this, Ca);
      }
      getDefaultOptions() {
        return M(this, Ma);
      }
      setDefaultOptions(a) {
        re(this, Ma, a);
      }
      setQueryDefaults(a, n) {
        M(this, Sr).set(ql(a), { queryKey: a, defaultOptions: n });
      }
      getQueryDefaults(a) {
        const n = [...M(this, Sr).values()],
          r = {};
        return (
          n.forEach((l) => {
            Gl(a, l.queryKey) && Object.assign(r, l.defaultOptions);
          }),
          r
        );
      }
      setMutationDefaults(a, n) {
        M(this, xr).set(ql(a), { mutationKey: a, defaultOptions: n });
      }
      getMutationDefaults(a) {
        const n = [...M(this, xr).values()],
          r = {};
        return (
          n.forEach((l) => {
            Gl(a, l.mutationKey) && Object.assign(r, l.defaultOptions);
          }),
          r
        );
      }
      defaultQueryOptions(a) {
        if (a._defaulted) return a;
        const n = {
          ...M(this, Ma).queries,
          ...this.getQueryDefaults(a.queryKey),
          ...a,
          _defaulted: !0,
        };
        return (
          n.queryHash || (n.queryHash = kd(n.queryKey, n)),
          n.refetchOnReconnect === void 0 &&
            (n.refetchOnReconnect = n.networkMode !== 'always'),
          n.throwOnError === void 0 && (n.throwOnError = !!n.suspense),
          !n.networkMode && n.persister && (n.networkMode = 'offlineFirst'),
          n.queryFn === Bd && (n.enabled = !1),
          n
        );
      }
      defaultMutationOptions(a) {
        return a != null && a._defaulted
          ? a
          : {
              ...M(this, Ma).mutations,
              ...((a == null ? void 0 : a.mutationKey) &&
                this.getMutationDefaults(a.mutationKey)),
              ...a,
              _defaulted: !0,
            };
      }
      clear() {
        M(this, Ze).clear(), M(this, Ca).clear();
      }
    }),
    (Ze = new WeakMap()),
    (Ca = new WeakMap()),
    (Ma = new WeakMap()),
    (Sr = new WeakMap()),
    (xr = new WeakMap()),
    (Da = new WeakMap()),
    (wr = new WeakMap()),
    (Er = new WeakMap()),
    Hv),
  Mt,
  De,
  Il,
  St,
  ui,
  Rr,
  _a,
  Na,
  Wl,
  Or,
  Ar,
  ci,
  fi,
  La,
  Tr,
  je,
  kl,
  sd,
  od,
  ud,
  cd,
  fd,
  dd,
  hd,
  Iv,
  qv,
  pw =
    ((qv = class extends es {
      constructor(n, r) {
        super();
        ye(this, je);
        ye(this, Mt);
        ye(this, De);
        ye(this, Il);
        ye(this, St);
        ye(this, ui);
        ye(this, Rr);
        ye(this, _a);
        ye(this, Na);
        ye(this, Wl);
        ye(this, Or);
        ye(this, Ar);
        ye(this, ci);
        ye(this, fi);
        ye(this, La);
        ye(this, Tr, new Set());
        (this.options = r),
          re(this, Mt, n),
          re(this, Na, null),
          re(this, _a, ld()),
          this.options.experimental_prefetchInRender ||
            M(this, _a).reject(
              new Error(
                'experimental_prefetchInRender feature flag is not enabled',
              ),
            ),
          this.bindMethods(),
          this.setOptions(r);
      }
      bindMethods() {
        this.refetch = this.refetch.bind(this);
      }
      onSubscribe() {
        this.listeners.size === 1 &&
          (M(this, De).addObserver(this),
          by(M(this, De), this.options)
            ? Me(this, je, kl).call(this)
            : this.updateResult(),
          Me(this, je, cd).call(this));
      }
      onUnsubscribe() {
        this.hasListeners() || this.destroy();
      }
      shouldFetchOnReconnect() {
        return pd(M(this, De), this.options, this.options.refetchOnReconnect);
      }
      shouldFetchOnWindowFocus() {
        return pd(M(this, De), this.options, this.options.refetchOnWindowFocus);
      }
      destroy() {
        (this.listeners = new Set()),
          Me(this, je, fd).call(this),
          Me(this, je, dd).call(this),
          M(this, De).removeObserver(this);
      }
      setOptions(n) {
        const r = this.options,
          l = M(this, De);
        if (
          ((this.options = M(this, Mt).defaultQueryOptions(n)),
          this.options.enabled !== void 0 &&
            typeof this.options.enabled != 'boolean' &&
            typeof this.options.enabled != 'function' &&
            typeof dn(this.options.enabled, M(this, De)) != 'boolean')
        )
          throw new Error(
            'Expected enabled to be a boolean or a callback that returns a boolean',
          );
        Me(this, je, hd).call(this),
          M(this, De).setOptions(this.options),
          r._defaulted &&
            !ad(this.options, r) &&
            M(this, Mt)
              .getQueryCache()
              .notify({
                type: 'observerOptionsUpdated',
                query: M(this, De),
                observer: this,
              });
        const o = this.hasListeners();
        o && Sy(M(this, De), l, this.options, r) && Me(this, je, kl).call(this),
          this.updateResult(),
          o &&
            (M(this, De) !== l ||
              dn(this.options.enabled, M(this, De)) !==
                dn(r.enabled, M(this, De)) ||
              dr(this.options.staleTime, M(this, De)) !==
                dr(r.staleTime, M(this, De))) &&
            Me(this, je, sd).call(this);
        const c = Me(this, je, od).call(this);
        o &&
          (M(this, De) !== l ||
            dn(this.options.enabled, M(this, De)) !==
              dn(r.enabled, M(this, De)) ||
            c !== M(this, La)) &&
          Me(this, je, ud).call(this, c);
      }
      getOptimisticResult(n) {
        const r = M(this, Mt).getQueryCache().build(M(this, Mt), n),
          l = this.createResult(r, n);
        return (
          gw(this, l) &&
            (re(this, St, l),
            re(this, Rr, this.options),
            re(this, ui, M(this, De).state)),
          l
        );
      }
      getCurrentResult() {
        return M(this, St);
      }
      trackResult(n, r) {
        return new Proxy(n, {
          get: (l, o) => (
            this.trackProp(o), r == null || r(o), Reflect.get(l, o)
          ),
        });
      }
      trackProp(n) {
        M(this, Tr).add(n);
      }
      getCurrentQuery() {
        return M(this, De);
      }
      refetch({ ...n } = {}) {
        return this.fetch({ ...n });
      }
      fetchOptimistic(n) {
        const r = M(this, Mt).defaultQueryOptions(n),
          l = M(this, Mt).getQueryCache().build(M(this, Mt), r);
        return l.fetch().then(() => this.createResult(l, r));
      }
      fetch(n) {
        return Me(this, je, kl)
          .call(this, { ...n, cancelRefetch: n.cancelRefetch ?? !0 })
          .then(() => (this.updateResult(), M(this, St)));
      }
      createResult(n, r) {
        var W;
        const l = M(this, De),
          o = this.options,
          c = M(this, St),
          d = M(this, ui),
          h = M(this, Rr),
          p = n !== l ? n.state : M(this, Il),
          { state: g } = n;
        let v = { ...g },
          S = !1,
          E;
        if (r._optimisticResults) {
          const ne = this.hasListeners(),
            fe = !ne && by(n, r),
            ce = ne && Sy(n, l, r, o);
          (fe || ce) && (v = { ...v, ...Jv(g.data, n.options) }),
            r._optimisticResults === 'isRestoring' && (v.fetchStatus = 'idle');
        }
        let { error: w, errorUpdatedAt: x, status: R } = v;
        E = v.data;
        let _ = !1;
        if (r.placeholderData !== void 0 && E === void 0 && R === 'pending') {
          let ne;
          c != null &&
          c.isPlaceholderData &&
          r.placeholderData === (h == null ? void 0 : h.placeholderData)
            ? ((ne = c.data), (_ = !0))
            : (ne =
                typeof r.placeholderData == 'function'
                  ? r.placeholderData(
                      (W = M(this, Ar)) == null ? void 0 : W.state.data,
                      M(this, Ar),
                    )
                  : r.placeholderData),
            ne !== void 0 &&
              ((R = 'success'),
              (E = rd(c == null ? void 0 : c.data, ne, r)),
              (S = !0));
        }
        if (r.select && E !== void 0 && !_)
          if (
            c &&
            E === (d == null ? void 0 : d.data) &&
            r.select === M(this, Wl)
          )
            E = M(this, Or);
          else
            try {
              re(this, Wl, r.select),
                (E = r.select(E)),
                (E = rd(c == null ? void 0 : c.data, E, r)),
                re(this, Or, E),
                re(this, Na, null);
            } catch (ne) {
              re(this, Na, ne);
            }
        M(this, Na) &&
          ((w = M(this, Na)),
          (E = M(this, Or)),
          (x = Date.now()),
          (R = 'error'));
        const k = v.fetchStatus === 'fetching',
          L = R === 'pending',
          q = R === 'error',
          B = L && k,
          J = E !== void 0,
          G = {
            status: R,
            fetchStatus: v.fetchStatus,
            isPending: L,
            isSuccess: R === 'success',
            isError: q,
            isInitialLoading: B,
            isLoading: B,
            data: E,
            dataUpdatedAt: v.dataUpdatedAt,
            error: w,
            errorUpdatedAt: x,
            failureCount: v.fetchFailureCount,
            failureReason: v.fetchFailureReason,
            errorUpdateCount: v.errorUpdateCount,
            isFetched: v.dataUpdateCount > 0 || v.errorUpdateCount > 0,
            isFetchedAfterMount:
              v.dataUpdateCount > p.dataUpdateCount ||
              v.errorUpdateCount > p.errorUpdateCount,
            isFetching: k,
            isRefetching: k && !L,
            isLoadingError: q && !J,
            isPaused: v.fetchStatus === 'paused',
            isPlaceholderData: S,
            isRefetchError: q && J,
            isStale: qd(n, r),
            refetch: this.refetch,
            promise: M(this, _a),
          };
        if (this.options.experimental_prefetchInRender) {
          const ne = (de) => {
              G.status === 'error'
                ? de.reject(G.error)
                : G.data !== void 0 && de.resolve(G.data);
            },
            fe = () => {
              const de = re(this, _a, (G.promise = ld()));
              ne(de);
            },
            ce = M(this, _a);
          switch (ce.status) {
            case 'pending':
              n.queryHash === l.queryHash && ne(ce);
              break;
            case 'fulfilled':
              (G.status === 'error' || G.data !== ce.value) && fe();
              break;
            case 'rejected':
              (G.status !== 'error' || G.error !== ce.reason) && fe();
              break;
          }
        }
        return G;
      }
      updateResult() {
        const n = M(this, St),
          r = this.createResult(M(this, De), this.options);
        if (
          (re(this, ui, M(this, De).state),
          re(this, Rr, this.options),
          M(this, ui).data !== void 0 && re(this, Ar, M(this, De)),
          ad(r, n))
        )
          return;
        re(this, St, r);
        const l = () => {
          if (!n) return !0;
          const { notifyOnChangeProps: o } = this.options,
            c = typeof o == 'function' ? o() : o;
          if (c === 'all' || (!c && !M(this, Tr).size)) return !0;
          const d = new Set(c ?? M(this, Tr));
          return (
            this.options.throwOnError && d.add('error'),
            Object.keys(M(this, St)).some((h) => {
              const m = h;
              return M(this, St)[m] !== n[m] && d.has(m);
            })
          );
        };
        Me(this, je, Iv).call(this, { listeners: l() });
      }
      onQueryUpdate() {
        this.updateResult(), this.hasListeners() && Me(this, je, cd).call(this);
      }
    }),
    (Mt = new WeakMap()),
    (De = new WeakMap()),
    (Il = new WeakMap()),
    (St = new WeakMap()),
    (ui = new WeakMap()),
    (Rr = new WeakMap()),
    (_a = new WeakMap()),
    (Na = new WeakMap()),
    (Wl = new WeakMap()),
    (Or = new WeakMap()),
    (Ar = new WeakMap()),
    (ci = new WeakMap()),
    (fi = new WeakMap()),
    (La = new WeakMap()),
    (Tr = new WeakMap()),
    (je = new WeakSet()),
    (kl = function (n) {
      Me(this, je, hd).call(this);
      let r = M(this, De).fetch(this.options, n);
      return (n != null && n.throwOnError) || (r = r.catch(Dt)), r;
    }),
    (sd = function () {
      Me(this, je, fd).call(this);
      const n = dr(this.options.staleTime, M(this, De));
      if (pi || M(this, St).isStale || !nd(n)) return;
      const l = Qv(M(this, St).dataUpdatedAt, n) + 1;
      re(
        this,
        ci,
        setTimeout(() => {
          M(this, St).isStale || this.updateResult();
        }, l),
      );
    }),
    (od = function () {
      return (
        (typeof this.options.refetchInterval == 'function'
          ? this.options.refetchInterval(M(this, De))
          : this.options.refetchInterval) ?? !1
      );
    }),
    (ud = function (n) {
      Me(this, je, dd).call(this),
        re(this, La, n),
        !(
          pi ||
          dn(this.options.enabled, M(this, De)) === !1 ||
          !nd(M(this, La)) ||
          M(this, La) === 0
        ) &&
          re(
            this,
            fi,
            setInterval(
              () => {
                (this.options.refetchIntervalInBackground || Hd.isFocused()) &&
                  Me(this, je, kl).call(this);
              },
              M(this, La),
            ),
          );
    }),
    (cd = function () {
      Me(this, je, sd).call(this),
        Me(this, je, ud).call(this, Me(this, je, od).call(this));
    }),
    (fd = function () {
      M(this, ci) && (clearTimeout(M(this, ci)), re(this, ci, void 0));
    }),
    (dd = function () {
      M(this, fi) && (clearInterval(M(this, fi)), re(this, fi, void 0));
    }),
    (hd = function () {
      const n = M(this, Mt).getQueryCache().build(M(this, Mt), this.options);
      if (n === M(this, De)) return;
      const r = M(this, De);
      re(this, De, n),
        re(this, Il, n.state),
        this.hasListeners() &&
          (r == null || r.removeObserver(this), n.addObserver(this));
    }),
    (Iv = function (n) {
      ft.batch(() => {
        n.listeners &&
          this.listeners.forEach((r) => {
            r(M(this, St));
          }),
          M(this, Mt)
            .getQueryCache()
            .notify({ query: M(this, De), type: 'observerResultsUpdated' });
      });
    }),
    qv);
function mw(a, n) {
  return (
    dn(n.enabled, a) !== !1 &&
    a.state.data === void 0 &&
    !(a.state.status === 'error' && n.retryOnMount === !1)
  );
}
function by(a, n) {
  return mw(a, n) || (a.state.data !== void 0 && pd(a, n, n.refetchOnMount));
}
function pd(a, n, r) {
  if (dn(n.enabled, a) !== !1) {
    const l = typeof r == 'function' ? r(a) : r;
    return l === 'always' || (l !== !1 && qd(a, n));
  }
  return !1;
}
function Sy(a, n, r, l) {
  return (
    (a !== n || dn(l.enabled, a) === !1) &&
    (!r.suspense || a.state.status !== 'error') &&
    qd(a, r)
  );
}
function qd(a, n) {
  return dn(n.enabled, a) !== !1 && a.isStaleByTime(dr(n.staleTime, a));
}
function gw(a, n) {
  return !ad(a.getCurrentResult(), n);
}
var Wv = O.createContext(void 0),
  yw = (a) => {
    const n = O.useContext(Wv);
    if (!n)
      throw new Error('No QueryClient set, use QueryClientProvider to set one');
    return n;
  },
  vw = ({ client: a, children: n }) => (
    O.useEffect(
      () => (
        a.mount(),
        () => {
          a.unmount();
        }
      ),
      [a],
    ),
    Y.jsx(Wv.Provider, { value: a, children: n })
  ),
  eb = O.createContext(!1),
  bw = () => O.useContext(eb);
eb.Provider;
function Sw() {
  let a = !1;
  return {
    clearReset: () => {
      a = !1;
    },
    reset: () => {
      a = !0;
    },
    isReset: () => a,
  };
}
var xw = O.createContext(Sw()),
  ww = () => O.useContext(xw),
  Ew = (a, n) => {
    (a.suspense || a.throwOnError || a.experimental_prefetchInRender) &&
      (n.isReset() || (a.retryOnMount = !1));
  },
  Rw = (a) => {
    O.useEffect(() => {
      a.clearReset();
    }, [a]);
  },
  Ow = ({
    result: a,
    errorResetBoundary: n,
    throwOnError: r,
    query: l,
    suspense: o,
  }) =>
    a.isError &&
    !n.isReset() &&
    !a.isFetching &&
    l &&
    ((o && a.data === void 0) || ew(r, [a.error, l])),
  Aw = (a) => {
    const n = a.staleTime;
    a.suspense &&
      ((a.staleTime =
        typeof n == 'function'
          ? (...r) => Math.max(n(...r), 1e3)
          : Math.max(n ?? 1e3, 1e3)),
      typeof a.gcTime == 'number' && (a.gcTime = Math.max(a.gcTime, 1e3)));
  },
  Tw = (a, n) => a.isLoading && a.isFetching && !n,
  Cw = (a, n) => (a == null ? void 0 : a.suspense) && n.isPending,
  xy = (a, n, r) =>
    n.fetchOptimistic(a).catch(() => {
      r.clearReset();
    });
function Mw(a, n, r) {
  var v, S, E, w, x;
  const l = yw(),
    o = bw(),
    c = ww(),
    d = l.defaultQueryOptions(a);
  (S =
    (v = l.getDefaultOptions().queries) == null
      ? void 0
      : v._experimental_beforeQuery) == null || S.call(v, d),
    (d._optimisticResults = o ? 'isRestoring' : 'optimistic'),
    Aw(d),
    Ew(d, c),
    Rw(c);
  const h = !l.getQueryCache().get(d.queryHash),
    [m] = O.useState(() => new n(l, d)),
    p = m.getOptimisticResult(d),
    g = !o && a.subscribed !== !1;
  if (
    (O.useSyncExternalStore(
      O.useCallback(
        (R) => {
          const _ = g ? m.subscribe(ft.batchCalls(R)) : Dt;
          return m.updateResult(), _;
        },
        [m, g],
      ),
      () => m.getCurrentResult(),
      () => m.getCurrentResult(),
    ),
    O.useEffect(() => {
      m.setOptions(d);
    }, [d, m]),
    Cw(d, p))
  )
    throw xy(d, m, c);
  if (
    Ow({
      result: p,
      errorResetBoundary: c,
      throwOnError: d.throwOnError,
      query: l.getQueryCache().get(d.queryHash),
      suspense: d.suspense,
    })
  )
    throw p.error;
  if (
    ((w =
      (E = l.getDefaultOptions().queries) == null
        ? void 0
        : E._experimental_afterQuery) == null || w.call(E, d, p),
    d.experimental_prefetchInRender && !pi && Tw(p, o))
  ) {
    const R = h
      ? xy(d, m, c)
      : (x = l.getQueryCache().get(d.queryHash)) == null
        ? void 0
        : x.promise;
    R == null ||
      R.catch(Dt).finally(() => {
        m.updateResult();
      });
  }
  return d.notifyOnChangeProps ? p : m.trackResult(p);
}
function Dw(a, n) {
  return Mw(a, pw);
}
const _w = ({ children: a }) => {
    const [n] = O.useState(
      () =>
        new hw({
          defaultOptions: {
            queries: {
              refetchOnWindowFocus: !1,
              retry: 1,
              staleTime: 3e5,
              refetchOnReconnect: !1,
              refetchOnMount: !1,
              refetchInterval: 3e5,
            },
          },
        }),
    );
    return Y.jsx(vw, { client: n, children: a });
  },
  Nw = { theme: 'system', setTheme: () => null },
  tb = O.createContext(Nw);
function Lw({
  children: a,
  defaultTheme: n = 'system',
  storageKey: r = 'vite-ui-theme',
  ...l
}) {
  const [o, c] = O.useState(() => localStorage.getItem(r) || n);
  O.useEffect(() => {
    const h = window.document.documentElement;
    if ((h.classList.remove('light', 'dark'), o === 'system')) {
      const m = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      h.classList.add(m);
      return;
    }
    h.classList.add(o);
  }, [o]);
  const d = {
    theme: o,
    setTheme: (h) => {
      localStorage.setItem(r, h), c(h);
    },
  };
  return Y.jsx(tb.Provider, { ...l, value: d, children: a });
}
const zw = () => {
    const a = O.useContext(tb);
    if (a === void 0)
      throw new Error('useTheme must be used within a ThemeProvider');
    return a;
  },
  Uw = ({ children: a }) =>
    Y.jsx(_w, { children: Y.jsx(Lw, { defaultTheme: 'light', children: a }) }),
  ve = (a) => typeof a == 'string',
  zl = () => {
    let a, n;
    const r = new Promise((l, o) => {
      (a = l), (n = o);
    });
    return (r.resolve = a), (r.reject = n), r;
  },
  wy = (a) => (a == null ? '' : '' + a),
  jw = (a, n, r) => {
    a.forEach((l) => {
      n[l] && (r[l] = n[l]);
    });
  },
  kw = /###/g,
  Ey = (a) => (a && a.indexOf('###') > -1 ? a.replace(kw, '.') : a),
  Ry = (a) => !a || ve(a),
  Hl = (a, n, r) => {
    const l = ve(n) ? n.split('.') : n;
    let o = 0;
    for (; o < l.length - 1; ) {
      if (Ry(a)) return {};
      const c = Ey(l[o]);
      !a[c] && r && (a[c] = new r()),
        Object.prototype.hasOwnProperty.call(a, c) ? (a = a[c]) : (a = {}),
        ++o;
    }
    return Ry(a) ? {} : { obj: a, k: Ey(l[o]) };
  },
  Oy = (a, n, r) => {
    const { obj: l, k: o } = Hl(a, n, Object);
    if (l !== void 0 || n.length === 1) {
      l[o] = r;
      return;
    }
    let c = n[n.length - 1],
      d = n.slice(0, n.length - 1),
      h = Hl(a, d, Object);
    for (; h.obj === void 0 && d.length; )
      (c = `${d[d.length - 1]}.${c}`),
        (d = d.slice(0, d.length - 1)),
        (h = Hl(a, d, Object)),
        h != null &&
          h.obj &&
          typeof h.obj[`${h.k}.${c}`] < 'u' &&
          (h.obj = void 0);
    h.obj[`${h.k}.${c}`] = r;
  },
  Bw = (a, n, r, l) => {
    const { obj: o, k: c } = Hl(a, n, Object);
    (o[c] = o[c] || []), o[c].push(r);
  },
  Qo = (a, n) => {
    const { obj: r, k: l } = Hl(a, n);
    if (r && Object.prototype.hasOwnProperty.call(r, l)) return r[l];
  },
  Hw = (a, n, r) => {
    const l = Qo(a, r);
    return l !== void 0 ? l : Qo(n, r);
  },
  nb = (a, n, r) => {
    for (const l in n)
      l !== '__proto__' &&
        l !== 'constructor' &&
        (l in a
          ? ve(a[l]) ||
            a[l] instanceof String ||
            ve(n[l]) ||
            n[l] instanceof String
            ? r && (a[l] = n[l])
            : nb(a[l], n[l], r)
          : (a[l] = n[l]));
    return a;
  },
  rr = (a) => a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
var qw = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
};
const Gw = (a) => (ve(a) ? a.replace(/[&<>"'\/]/g, (n) => qw[n]) : a);
class Pw {
  constructor(n) {
    (this.capacity = n), (this.regExpMap = new Map()), (this.regExpQueue = []);
  }
  getRegExp(n) {
    const r = this.regExpMap.get(n);
    if (r !== void 0) return r;
    const l = new RegExp(n);
    return (
      this.regExpQueue.length === this.capacity &&
        this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(n, l),
      this.regExpQueue.push(n),
      l
    );
  }
}
const Vw = [' ', ',', '?', '!', ';'],
  Qw = new Pw(20),
  Yw = (a, n, r) => {
    (n = n || ''), (r = r || '');
    const l = Vw.filter((d) => n.indexOf(d) < 0 && r.indexOf(d) < 0);
    if (l.length === 0) return !0;
    const o = Qw.getRegExp(
      `(${l.map((d) => (d === '?' ? '\\?' : d)).join('|')})`,
    );
    let c = !o.test(a);
    if (!c) {
      const d = a.indexOf(r);
      d > 0 && !o.test(a.substring(0, d)) && (c = !0);
    }
    return c;
  },
  md = (a, n, r = '.') => {
    if (!a) return;
    if (a[n]) return Object.prototype.hasOwnProperty.call(a, n) ? a[n] : void 0;
    const l = n.split(r);
    let o = a;
    for (let c = 0; c < l.length; ) {
      if (!o || typeof o != 'object') return;
      let d,
        h = '';
      for (let m = c; m < l.length; ++m)
        if ((m !== c && (h += r), (h += l[m]), (d = o[h]), d !== void 0)) {
          if (
            ['string', 'number', 'boolean'].indexOf(typeof d) > -1 &&
            m < l.length - 1
          )
            continue;
          c += m - c + 1;
          break;
        }
      o = d;
    }
    return o;
  },
  Pl = (a) => (a == null ? void 0 : a.replace('_', '-')),
  Kw = {
    type: 'logger',
    log(a) {
      this.output('log', a);
    },
    warn(a) {
      this.output('warn', a);
    },
    error(a) {
      this.output('error', a);
    },
    output(a, n) {
      var r, l;
      (l =
        (r = console == null ? void 0 : console[a]) == null
          ? void 0
          : r.apply) == null || l.call(r, console, n);
    },
  };
class Yo {
  constructor(n, r = {}) {
    this.init(n, r);
  }
  init(n, r = {}) {
    (this.prefix = r.prefix || 'i18next:'),
      (this.logger = n || Kw),
      (this.options = r),
      (this.debug = r.debug);
  }
  log(...n) {
    return this.forward(n, 'log', '', !0);
  }
  warn(...n) {
    return this.forward(n, 'warn', '', !0);
  }
  error(...n) {
    return this.forward(n, 'error', '');
  }
  deprecate(...n) {
    return this.forward(n, 'warn', 'WARNING DEPRECATED: ', !0);
  }
  forward(n, r, l, o) {
    return o && !this.debug
      ? null
      : (ve(n[0]) && (n[0] = `${l}${this.prefix} ${n[0]}`), this.logger[r](n));
  }
  create(n) {
    return new Yo(this.logger, {
      prefix: `${this.prefix}:${n}:`,
      ...this.options,
    });
  }
  clone(n) {
    return (
      (n = n || this.options),
      (n.prefix = n.prefix || this.prefix),
      new Yo(this.logger, n)
    );
  }
}
var An = new Yo();
class tu {
  constructor() {
    this.observers = {};
  }
  on(n, r) {
    return (
      n.split(' ').forEach((l) => {
        this.observers[l] || (this.observers[l] = new Map());
        const o = this.observers[l].get(r) || 0;
        this.observers[l].set(r, o + 1);
      }),
      this
    );
  }
  off(n, r) {
    if (this.observers[n]) {
      if (!r) {
        delete this.observers[n];
        return;
      }
      this.observers[n].delete(r);
    }
  }
  emit(n, ...r) {
    this.observers[n] &&
      Array.from(this.observers[n].entries()).forEach(([o, c]) => {
        for (let d = 0; d < c; d++) o(...r);
      }),
      this.observers['*'] &&
        Array.from(this.observers['*'].entries()).forEach(([o, c]) => {
          for (let d = 0; d < c; d++) o.apply(o, [n, ...r]);
        });
  }
}
class Ay extends tu {
  constructor(n, r = { ns: ['translation'], defaultNS: 'translation' }) {
    super(),
      (this.data = n || {}),
      (this.options = r),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      this.options.ignoreJSONStructure === void 0 &&
        (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(n) {
    this.options.ns.indexOf(n) < 0 && this.options.ns.push(n);
  }
  removeNamespaces(n) {
    const r = this.options.ns.indexOf(n);
    r > -1 && this.options.ns.splice(r, 1);
  }
  getResource(n, r, l, o = {}) {
    var p, g;
    const c =
        o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator,
      d =
        o.ignoreJSONStructure !== void 0
          ? o.ignoreJSONStructure
          : this.options.ignoreJSONStructure;
    let h;
    n.indexOf('.') > -1
      ? (h = n.split('.'))
      : ((h = [n, r]),
        l &&
          (Array.isArray(l)
            ? h.push(...l)
            : ve(l) && c
              ? h.push(...l.split(c))
              : h.push(l)));
    const m = Qo(this.data, h);
    return (
      !m &&
        !r &&
        !l &&
        n.indexOf('.') > -1 &&
        ((n = h[0]), (r = h[1]), (l = h.slice(2).join('.'))),
      m || !d || !ve(l)
        ? m
        : md(
            (g = (p = this.data) == null ? void 0 : p[n]) == null
              ? void 0
              : g[r],
            l,
            c,
          )
    );
  }
  addResource(n, r, l, o, c = { silent: !1 }) {
    const d =
      c.keySeparator !== void 0 ? c.keySeparator : this.options.keySeparator;
    let h = [n, r];
    l && (h = h.concat(d ? l.split(d) : l)),
      n.indexOf('.') > -1 && ((h = n.split('.')), (o = r), (r = h[1])),
      this.addNamespaces(r),
      Oy(this.data, h, o),
      c.silent || this.emit('added', n, r, l, o);
  }
  addResources(n, r, l, o = { silent: !1 }) {
    for (const c in l)
      (ve(l[c]) || Array.isArray(l[c])) &&
        this.addResource(n, r, c, l[c], { silent: !0 });
    o.silent || this.emit('added', n, r, l);
  }
  addResourceBundle(n, r, l, o, c, d = { silent: !1, skipCopy: !1 }) {
    let h = [n, r];
    n.indexOf('.') > -1 && ((h = n.split('.')), (o = l), (l = r), (r = h[1])),
      this.addNamespaces(r);
    let m = Qo(this.data, h) || {};
    d.skipCopy || (l = JSON.parse(JSON.stringify(l))),
      o ? nb(m, l, c) : (m = { ...m, ...l }),
      Oy(this.data, h, m),
      d.silent || this.emit('added', n, r, l);
  }
  removeResourceBundle(n, r) {
    this.hasResourceBundle(n, r) && delete this.data[n][r],
      this.removeNamespaces(r),
      this.emit('removed', n, r);
  }
  hasResourceBundle(n, r) {
    return this.getResource(n, r) !== void 0;
  }
  getResourceBundle(n, r) {
    return r || (r = this.options.defaultNS), this.getResource(n, r);
  }
  getDataByLanguage(n) {
    return this.data[n];
  }
  hasLanguageSomeTranslations(n) {
    const r = this.getDataByLanguage(n);
    return !!((r && Object.keys(r)) || []).find(
      (o) => r[o] && Object.keys(r[o]).length > 0,
    );
  }
  toJSON() {
    return this.data;
  }
}
var ab = {
  processors: {},
  addPostProcessor(a) {
    this.processors[a.name] = a;
  },
  handle(a, n, r, l, o) {
    return (
      a.forEach((c) => {
        var d;
        n =
          ((d = this.processors[c]) == null ? void 0 : d.process(n, r, l, o)) ??
          n;
      }),
      n
    );
  },
};
const Ty = {},
  Cy = (a) => !ve(a) && typeof a != 'boolean' && typeof a != 'number';
class Ko extends tu {
  constructor(n, r = {}) {
    super(),
      jw(
        [
          'resourceStore',
          'languageUtils',
          'pluralResolver',
          'interpolator',
          'backendConnector',
          'i18nFormat',
          'utils',
        ],
        n,
        this,
      ),
      (this.options = r),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      (this.logger = An.create('translator'));
  }
  changeLanguage(n) {
    n && (this.language = n);
  }
  exists(n, r = { interpolation: {} }) {
    const l = { ...r };
    if (n == null) return !1;
    const o = this.resolve(n, l);
    return (o == null ? void 0 : o.res) !== void 0;
  }
  extractFromKey(n, r) {
    let l = r.nsSeparator !== void 0 ? r.nsSeparator : this.options.nsSeparator;
    l === void 0 && (l = ':');
    const o =
      r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator;
    let c = r.ns || this.options.defaultNS || [];
    const d = l && n.indexOf(l) > -1,
      h =
        !this.options.userDefinedKeySeparator &&
        !r.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !r.nsSeparator &&
        !Yw(n, l, o);
    if (d && !h) {
      const m = n.match(this.interpolator.nestingRegexp);
      if (m && m.length > 0) return { key: n, namespaces: ve(c) ? [c] : c };
      const p = n.split(l);
      (l !== o || (l === o && this.options.ns.indexOf(p[0]) > -1)) &&
        (c = p.shift()),
        (n = p.join(o));
    }
    return { key: n, namespaces: ve(c) ? [c] : c };
  }
  translate(n, r, l) {
    let o = typeof r == 'object' ? { ...r } : r;
    if (
      (typeof o != 'object' &&
        this.options.overloadTranslationOptionHandler &&
        (o = this.options.overloadTranslationOptionHandler(arguments)),
      typeof options == 'object' && (o = { ...o }),
      o || (o = {}),
      n == null)
    )
      return '';
    Array.isArray(n) || (n = [String(n)]);
    const c =
        o.returnDetails !== void 0
          ? o.returnDetails
          : this.options.returnDetails,
      d =
        o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator,
      { key: h, namespaces: m } = this.extractFromKey(n[n.length - 1], o),
      p = m[m.length - 1];
    let g = o.nsSeparator !== void 0 ? o.nsSeparator : this.options.nsSeparator;
    g === void 0 && (g = ':');
    const v = o.lng || this.language,
      S = o.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((v == null ? void 0 : v.toLowerCase()) === 'cimode')
      return S
        ? c
          ? {
              res: `${p}${g}${h}`,
              usedKey: h,
              exactUsedKey: h,
              usedLng: v,
              usedNS: p,
              usedParams: this.getUsedParamsDetails(o),
            }
          : `${p}${g}${h}`
        : c
          ? {
              res: h,
              usedKey: h,
              exactUsedKey: h,
              usedLng: v,
              usedNS: p,
              usedParams: this.getUsedParamsDetails(o),
            }
          : h;
    const E = this.resolve(n, o);
    let w = E == null ? void 0 : E.res;
    const x = (E == null ? void 0 : E.usedKey) || h,
      R = (E == null ? void 0 : E.exactUsedKey) || h,
      _ = ['[object Number]', '[object Function]', '[object RegExp]'],
      k = o.joinArrays !== void 0 ? o.joinArrays : this.options.joinArrays,
      L = !this.i18nFormat || this.i18nFormat.handleAsObject,
      q = o.count !== void 0 && !ve(o.count),
      B = Ko.hasDefaultValue(o),
      J = q ? this.pluralResolver.getSuffix(v, o.count, o) : '',
      Z =
        o.ordinal && q
          ? this.pluralResolver.getSuffix(v, o.count, { ordinal: !1 })
          : '',
      G = q && !o.ordinal && o.count === 0,
      W =
        (G && o[`defaultValue${this.options.pluralSeparator}zero`]) ||
        o[`defaultValue${J}`] ||
        o[`defaultValue${Z}`] ||
        o.defaultValue;
    let ne = w;
    L && !w && B && (ne = W);
    const fe = Cy(ne),
      ce = Object.prototype.toString.apply(ne);
    if (L && ne && fe && _.indexOf(ce) < 0 && !(ve(k) && Array.isArray(ne))) {
      if (!o.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            'accessing an object - but returnObjects options is not enabled!',
          );
        const de = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(x, ne, { ...o, ns: m })
          : `key '${h} (${this.language})' returned an object instead of string.`;
        return c
          ? ((E.res = de), (E.usedParams = this.getUsedParamsDetails(o)), E)
          : de;
      }
      if (d) {
        const de = Array.isArray(ne),
          be = de ? [] : {},
          me = de ? R : x;
        for (const N in ne)
          if (Object.prototype.hasOwnProperty.call(ne, N)) {
            const $ = `${me}${d}${N}`;
            B && !w
              ? (be[N] = this.translate($, {
                  ...o,
                  defaultValue: Cy(W) ? W[N] : void 0,
                  joinArrays: !1,
                  ns: m,
                }))
              : (be[N] = this.translate($, { ...o, joinArrays: !1, ns: m })),
              be[N] === $ && (be[N] = ne[N]);
          }
        w = be;
      }
    } else if (L && ve(k) && Array.isArray(w))
      (w = w.join(k)), w && (w = this.extendTranslation(w, n, o, l));
    else {
      let de = !1,
        be = !1;
      !this.isValidLookup(w) && B && ((de = !0), (w = W)),
        this.isValidLookup(w) || ((be = !0), (w = h));
      const N =
          (o.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          be
            ? void 0
            : w,
        $ = B && W !== w && this.options.updateMissing;
      if (be || de || $) {
        if (
          (this.logger.log($ ? 'updateKey' : 'missingKey', v, p, h, $ ? W : w),
          d)
        ) {
          const V = this.resolve(h, { ...o, keySeparator: !1 });
          V &&
            V.res &&
            this.logger.warn(
              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.',
            );
        }
        let P = [];
        const ee = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          o.lng || this.language,
        );
        if (this.options.saveMissingTo === 'fallback' && ee && ee[0])
          for (let V = 0; V < ee.length; V++) P.push(ee[V]);
        else
          this.options.saveMissingTo === 'all'
            ? (P = this.languageUtils.toResolveHierarchy(
                o.lng || this.language,
              ))
            : P.push(o.lng || this.language);
        const A = (V, te, I) => {
          var Se;
          const ae = B && I !== w ? I : N;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(V, p, te, ae, $, o)
            : (Se = this.backendConnector) != null &&
              Se.saveMissing &&
              this.backendConnector.saveMissing(V, p, te, ae, $, o),
            this.emit('missingKey', V, p, te, w);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && q
            ? P.forEach((V) => {
                const te = this.pluralResolver.getSuffixes(V, o);
                G &&
                  o[`defaultValue${this.options.pluralSeparator}zero`] &&
                  te.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  te.push(`${this.options.pluralSeparator}zero`),
                  te.forEach((I) => {
                    A([V], h + I, o[`defaultValue${I}`] || W);
                  });
              })
            : A(P, h, W));
      }
      (w = this.extendTranslation(w, n, o, E, l)),
        be &&
          w === h &&
          this.options.appendNamespaceToMissingKey &&
          (w = `${p}${g}${h}`),
        (be || de) &&
          this.options.parseMissingKeyHandler &&
          (w = this.options.parseMissingKeyHandler(
            this.options.appendNamespaceToMissingKey ? `${p}${g}${h}` : h,
            de ? w : void 0,
            o,
          ));
    }
    return c
      ? ((E.res = w), (E.usedParams = this.getUsedParamsDetails(o)), E)
      : w;
  }
  extendTranslation(n, r, l, o, c) {
    var m, p;
    if ((m = this.i18nFormat) != null && m.parse)
      n = this.i18nFormat.parse(
        n,
        { ...this.options.interpolation.defaultVariables, ...l },
        l.lng || this.language || o.usedLng,
        o.usedNS,
        o.usedKey,
        { resolved: o },
      );
    else if (!l.skipInterpolation) {
      l.interpolation &&
        this.interpolator.init({
          ...l,
          interpolation: { ...this.options.interpolation, ...l.interpolation },
        });
      const g =
        ve(n) &&
        (((p = l == null ? void 0 : l.interpolation) == null
          ? void 0
          : p.skipOnVariables) !== void 0
          ? l.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let v;
      if (g) {
        const E = n.match(this.interpolator.nestingRegexp);
        v = E && E.length;
      }
      let S = l.replace && !ve(l.replace) ? l.replace : l;
      if (
        (this.options.interpolation.defaultVariables &&
          (S = { ...this.options.interpolation.defaultVariables, ...S }),
        (n = this.interpolator.interpolate(
          n,
          S,
          l.lng || this.language || o.usedLng,
          l,
        )),
        g)
      ) {
        const E = n.match(this.interpolator.nestingRegexp),
          w = E && E.length;
        v < w && (l.nest = !1);
      }
      !l.lng && o && o.res && (l.lng = this.language || o.usedLng),
        l.nest !== !1 &&
          (n = this.interpolator.nest(
            n,
            (...E) =>
              (c == null ? void 0 : c[0]) === E[0] && !l.context
                ? (this.logger.warn(
                    `It seems you are nesting recursively key: ${E[0]} in key: ${r[0]}`,
                  ),
                  null)
                : this.translate(...E, r),
            l,
          )),
        l.interpolation && this.interpolator.reset();
    }
    const d = l.postProcess || this.options.postProcess,
      h = ve(d) ? [d] : d;
    return (
      n != null &&
        h != null &&
        h.length &&
        l.applyPostProcessor !== !1 &&
        (n = ab.handle(
          h,
          n,
          r,
          this.options && this.options.postProcessPassResolved
            ? {
                i18nResolved: {
                  ...o,
                  usedParams: this.getUsedParamsDetails(l),
                },
                ...l,
              }
            : l,
          this,
        )),
      n
    );
  }
  resolve(n, r = {}) {
    let l, o, c, d, h;
    return (
      ve(n) && (n = [n]),
      n.forEach((m) => {
        if (this.isValidLookup(l)) return;
        const p = this.extractFromKey(m, r),
          g = p.key;
        o = g;
        let v = p.namespaces;
        this.options.fallbackNS && (v = v.concat(this.options.fallbackNS));
        const S = r.count !== void 0 && !ve(r.count),
          E = S && !r.ordinal && r.count === 0,
          w =
            r.context !== void 0 &&
            (ve(r.context) || typeof r.context == 'number') &&
            r.context !== '',
          x = r.lngs
            ? r.lngs
            : this.languageUtils.toResolveHierarchy(
                r.lng || this.language,
                r.fallbackLng,
              );
        v.forEach((R) => {
          var _, k;
          this.isValidLookup(l) ||
            ((h = R),
            !Ty[`${x[0]}-${R}`] &&
              (_ = this.utils) != null &&
              _.hasLoadedNamespace &&
              !((k = this.utils) != null && k.hasLoadedNamespace(h)) &&
              ((Ty[`${x[0]}-${R}`] = !0),
              this.logger.warn(
                `key "${o}" for languages "${x.join(', ')}" won't get resolved as namespace "${h}" was not yet loaded`,
                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
              )),
            x.forEach((L) => {
              var J;
              if (this.isValidLookup(l)) return;
              d = L;
              const q = [g];
              if ((J = this.i18nFormat) != null && J.addLookupKeys)
                this.i18nFormat.addLookupKeys(q, g, L, R, r);
              else {
                let Z;
                S && (Z = this.pluralResolver.getSuffix(L, r.count, r));
                const G = `${this.options.pluralSeparator}zero`,
                  W = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (S &&
                    (q.push(g + Z),
                    r.ordinal &&
                      Z.indexOf(W) === 0 &&
                      q.push(g + Z.replace(W, this.options.pluralSeparator)),
                    E && q.push(g + G)),
                  w)
                ) {
                  const ne = `${g}${this.options.contextSeparator}${r.context}`;
                  q.push(ne),
                    S &&
                      (q.push(ne + Z),
                      r.ordinal &&
                        Z.indexOf(W) === 0 &&
                        q.push(ne + Z.replace(W, this.options.pluralSeparator)),
                      E && q.push(ne + G));
                }
              }
              let B;
              for (; (B = q.pop()); )
                this.isValidLookup(l) ||
                  ((c = B), (l = this.getResource(L, R, B, r)));
            }));
        });
      }),
      { res: l, usedKey: o, exactUsedKey: c, usedLng: d, usedNS: h }
    );
  }
  isValidLookup(n) {
    return (
      n !== void 0 &&
      !(!this.options.returnNull && n === null) &&
      !(!this.options.returnEmptyString && n === '')
    );
  }
  getResource(n, r, l, o = {}) {
    var c;
    return (c = this.i18nFormat) != null && c.getResource
      ? this.i18nFormat.getResource(n, r, l, o)
      : this.resourceStore.getResource(n, r, l, o);
  }
  getUsedParamsDetails(n = {}) {
    const r = [
        'defaultValue',
        'ordinal',
        'context',
        'replace',
        'lng',
        'lngs',
        'fallbackLng',
        'ns',
        'keySeparator',
        'nsSeparator',
        'returnObjects',
        'returnDetails',
        'joinArrays',
        'postProcess',
        'interpolation',
      ],
      l = n.replace && !ve(n.replace);
    let o = l ? n.replace : n;
    if (
      (l && typeof n.count < 'u' && (o.count = n.count),
      this.options.interpolation.defaultVariables &&
        (o = { ...this.options.interpolation.defaultVariables, ...o }),
      !l)
    ) {
      o = { ...o };
      for (const c of r) delete o[c];
    }
    return o;
  }
  static hasDefaultValue(n) {
    const r = 'defaultValue';
    for (const l in n)
      if (
        Object.prototype.hasOwnProperty.call(n, l) &&
        r === l.substring(0, r.length) &&
        n[l] !== void 0
      )
        return !0;
    return !1;
  }
}
class My {
  constructor(n) {
    (this.options = n),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = An.create('languageUtils'));
  }
  getScriptPartFromCode(n) {
    if (((n = Pl(n)), !n || n.indexOf('-') < 0)) return null;
    const r = n.split('-');
    return r.length === 2 || (r.pop(), r[r.length - 1].toLowerCase() === 'x')
      ? null
      : this.formatLanguageCode(r.join('-'));
  }
  getLanguagePartFromCode(n) {
    if (((n = Pl(n)), !n || n.indexOf('-') < 0)) return n;
    const r = n.split('-');
    return this.formatLanguageCode(r[0]);
  }
  formatLanguageCode(n) {
    if (ve(n) && n.indexOf('-') > -1) {
      let r;
      try {
        r = Intl.getCanonicalLocales(n)[0];
      } catch {}
      return (
        r && this.options.lowerCaseLng && (r = r.toLowerCase()),
        r || (this.options.lowerCaseLng ? n.toLowerCase() : n)
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng
      ? n.toLowerCase()
      : n;
  }
  isSupportedCode(n) {
    return (
      (this.options.load === 'languageOnly' ||
        this.options.nonExplicitSupportedLngs) &&
        (n = this.getLanguagePartFromCode(n)),
      !this.supportedLngs ||
        !this.supportedLngs.length ||
        this.supportedLngs.indexOf(n) > -1
    );
  }
  getBestMatchFromCodes(n) {
    if (!n) return null;
    let r;
    return (
      n.forEach((l) => {
        if (r) return;
        const o = this.formatLanguageCode(l);
        (!this.options.supportedLngs || this.isSupportedCode(o)) && (r = o);
      }),
      !r &&
        this.options.supportedLngs &&
        n.forEach((l) => {
          if (r) return;
          const o = this.getScriptPartFromCode(l);
          if (this.isSupportedCode(o)) return (r = o);
          const c = this.getLanguagePartFromCode(l);
          if (this.isSupportedCode(c)) return (r = c);
          r = this.options.supportedLngs.find((d) => {
            if (d === c) return d;
            if (
              !(d.indexOf('-') < 0 && c.indexOf('-') < 0) &&
              ((d.indexOf('-') > 0 &&
                c.indexOf('-') < 0 &&
                d.substring(0, d.indexOf('-')) === c) ||
                (d.indexOf(c) === 0 && c.length > 1))
            )
              return d;
          });
        }),
      r || (r = this.getFallbackCodes(this.options.fallbackLng)[0]),
      r
    );
  }
  getFallbackCodes(n, r) {
    if (!n) return [];
    if (
      (typeof n == 'function' && (n = n(r)),
      ve(n) && (n = [n]),
      Array.isArray(n))
    )
      return n;
    if (!r) return n.default || [];
    let l = n[r];
    return (
      l || (l = n[this.getScriptPartFromCode(r)]),
      l || (l = n[this.formatLanguageCode(r)]),
      l || (l = n[this.getLanguagePartFromCode(r)]),
      l || (l = n.default),
      l || []
    );
  }
  toResolveHierarchy(n, r) {
    const l = this.getFallbackCodes(
        (r === !1 ? [] : r) || this.options.fallbackLng || [],
        n,
      ),
      o = [],
      c = (d) => {
        d &&
          (this.isSupportedCode(d)
            ? o.push(d)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${d}`,
              ));
      };
    return (
      ve(n) && (n.indexOf('-') > -1 || n.indexOf('_') > -1)
        ? (this.options.load !== 'languageOnly' &&
            c(this.formatLanguageCode(n)),
          this.options.load !== 'languageOnly' &&
            this.options.load !== 'currentOnly' &&
            c(this.getScriptPartFromCode(n)),
          this.options.load !== 'currentOnly' &&
            c(this.getLanguagePartFromCode(n)))
        : ve(n) && c(this.formatLanguageCode(n)),
      l.forEach((d) => {
        o.indexOf(d) < 0 && c(this.formatLanguageCode(d));
      }),
      o
    );
  }
}
const Dy = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  _y = {
    select: (a) => (a === 1 ? 'one' : 'other'),
    resolvedOptions: () => ({ pluralCategories: ['one', 'other'] }),
  };
class Fw {
  constructor(n, r = {}) {
    (this.languageUtils = n),
      (this.options = r),
      (this.logger = An.create('pluralResolver')),
      (this.pluralRulesCache = {});
  }
  addRule(n, r) {
    this.rules[n] = r;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(n, r = {}) {
    const l = Pl(n === 'dev' ? 'en' : n),
      o = r.ordinal ? 'ordinal' : 'cardinal',
      c = JSON.stringify({ cleanedCode: l, type: o });
    if (c in this.pluralRulesCache) return this.pluralRulesCache[c];
    let d;
    try {
      d = new Intl.PluralRules(l, { type: o });
    } catch {
      if (!Intl)
        return (
          this.logger.error('No Intl support, please use an Intl polyfill!'), _y
        );
      if (!n.match(/-|_/)) return _y;
      const m = this.languageUtils.getLanguagePartFromCode(n);
      d = this.getRule(m, r);
    }
    return (this.pluralRulesCache[c] = d), d;
  }
  needsPlural(n, r = {}) {
    let l = this.getRule(n, r);
    return (
      l || (l = this.getRule('dev', r)),
      (l == null ? void 0 : l.resolvedOptions().pluralCategories.length) > 1
    );
  }
  getPluralFormsOfKey(n, r, l = {}) {
    return this.getSuffixes(n, l).map((o) => `${r}${o}`);
  }
  getSuffixes(n, r = {}) {
    let l = this.getRule(n, r);
    return (
      l || (l = this.getRule('dev', r)),
      l
        ? l
            .resolvedOptions()
            .pluralCategories.sort((o, c) => Dy[o] - Dy[c])
            .map(
              (o) =>
                `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ''}${o}`,
            )
        : []
    );
  }
  getSuffix(n, r, l = {}) {
    const o = this.getRule(n, l);
    return o
      ? `${this.options.prepend}${l.ordinal ? `ordinal${this.options.prepend}` : ''}${o.select(r)}`
      : (this.logger.warn(`no plural rule found for: ${n}`),
        this.getSuffix('dev', r, l));
  }
}
const Ny = (a, n, r, l = '.', o = !0) => {
    let c = Hw(a, n, r);
    return (
      !c &&
        o &&
        ve(r) &&
        ((c = md(a, r, l)), c === void 0 && (c = md(n, r, l))),
      c
    );
  },
  qf = (a) => a.replace(/\$/g, '$$$$');
class Xw {
  constructor(n = {}) {
    var r;
    (this.logger = An.create('interpolator')),
      (this.options = n),
      (this.format =
        ((r = n == null ? void 0 : n.interpolation) == null
          ? void 0
          : r.format) || ((l) => l)),
      this.init(n);
  }
  init(n = {}) {
    n.interpolation || (n.interpolation = { escapeValue: !0 });
    const {
      escape: r,
      escapeValue: l,
      useRawValueToEscape: o,
      prefix: c,
      prefixEscaped: d,
      suffix: h,
      suffixEscaped: m,
      formatSeparator: p,
      unescapeSuffix: g,
      unescapePrefix: v,
      nestingPrefix: S,
      nestingPrefixEscaped: E,
      nestingSuffix: w,
      nestingSuffixEscaped: x,
      nestingOptionsSeparator: R,
      maxReplaces: _,
      alwaysFormat: k,
    } = n.interpolation;
    (this.escape = r !== void 0 ? r : Gw),
      (this.escapeValue = l !== void 0 ? l : !0),
      (this.useRawValueToEscape = o !== void 0 ? o : !1),
      (this.prefix = c ? rr(c) : d || '{{'),
      (this.suffix = h ? rr(h) : m || '}}'),
      (this.formatSeparator = p || ','),
      (this.unescapePrefix = g ? '' : v || '-'),
      (this.unescapeSuffix = this.unescapePrefix ? '' : g || ''),
      (this.nestingPrefix = S ? rr(S) : E || rr('$t(')),
      (this.nestingSuffix = w ? rr(w) : x || rr(')')),
      (this.nestingOptionsSeparator = R || ','),
      (this.maxReplaces = _ || 1e3),
      (this.alwaysFormat = k !== void 0 ? k : !1),
      this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const n = (r, l) =>
      (r == null ? void 0 : r.source) === l
        ? ((r.lastIndex = 0), r)
        : new RegExp(l, 'g');
    (this.regexp = n(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = n(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`,
      )),
      (this.nestingRegexp = n(
        this.nestingRegexp,
        `${this.nestingPrefix}(.+?)${this.nestingSuffix}`,
      ));
  }
  interpolate(n, r, l, o) {
    var E;
    let c, d, h;
    const m =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      p = (w) => {
        if (w.indexOf(this.formatSeparator) < 0) {
          const k = Ny(
            r,
            m,
            w,
            this.options.keySeparator,
            this.options.ignoreJSONStructure,
          );
          return this.alwaysFormat
            ? this.format(k, void 0, l, { ...o, ...r, interpolationkey: w })
            : k;
        }
        const x = w.split(this.formatSeparator),
          R = x.shift().trim(),
          _ = x.join(this.formatSeparator).trim();
        return this.format(
          Ny(
            r,
            m,
            R,
            this.options.keySeparator,
            this.options.ignoreJSONStructure,
          ),
          _,
          l,
          { ...o, ...r, interpolationkey: R },
        );
      };
    this.resetRegExp();
    const g =
        (o == null ? void 0 : o.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      v =
        ((E = o == null ? void 0 : o.interpolation) == null
          ? void 0
          : E.skipOnVariables) !== void 0
          ? o.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (w) => qf(w) },
        {
          regex: this.regexp,
          safeValue: (w) => (this.escapeValue ? qf(this.escape(w)) : qf(w)),
        },
      ].forEach((w) => {
        for (h = 0; (c = w.regex.exec(n)); ) {
          const x = c[1].trim();
          if (((d = p(x)), d === void 0))
            if (typeof g == 'function') {
              const _ = g(n, c, o);
              d = ve(_) ? _ : '';
            } else if (o && Object.prototype.hasOwnProperty.call(o, x)) d = '';
            else if (v) {
              d = c[0];
              continue;
            } else
              this.logger.warn(
                `missed to pass in variable ${x} for interpolating ${n}`,
              ),
                (d = '');
          else !ve(d) && !this.useRawValueToEscape && (d = wy(d));
          const R = w.safeValue(d);
          if (
            ((n = n.replace(c[0], R)),
            v
              ? ((w.regex.lastIndex += d.length),
                (w.regex.lastIndex -= c[0].length))
              : (w.regex.lastIndex = 0),
            h++,
            h >= this.maxReplaces)
          )
            break;
        }
      }),
      n
    );
  }
  nest(n, r, l = {}) {
    let o, c, d;
    const h = (m, p) => {
      const g = this.nestingOptionsSeparator;
      if (m.indexOf(g) < 0) return m;
      const v = m.split(new RegExp(`${g}[ ]*{`));
      let S = `{${v[1]}`;
      (m = v[0]), (S = this.interpolate(S, d));
      const E = S.match(/'/g),
        w = S.match(/"/g);
      ((((E == null ? void 0 : E.length) ?? 0) % 2 === 0 && !w) ||
        w.length % 2 !== 0) &&
        (S = S.replace(/'/g, '"'));
      try {
        (d = JSON.parse(S)), p && (d = { ...p, ...d });
      } catch (x) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${m}`,
            x,
          ),
          `${m}${g}${S}`
        );
      }
      return (
        d.defaultValue &&
          d.defaultValue.indexOf(this.prefix) > -1 &&
          delete d.defaultValue,
        m
      );
    };
    for (; (o = this.nestingRegexp.exec(n)); ) {
      let m = [];
      (d = { ...l }),
        (d = d.replace && !ve(d.replace) ? d.replace : d),
        (d.applyPostProcessor = !1),
        delete d.defaultValue;
      let p = !1;
      if (o[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(o[1])) {
        const g = o[1].split(this.formatSeparator).map((v) => v.trim());
        (o[1] = g.shift()), (m = g), (p = !0);
      }
      if (((c = r(h.call(this, o[1].trim(), d), d)), c && o[0] === n && !ve(c)))
        return c;
      ve(c) || (c = wy(c)),
        c ||
          (this.logger.warn(`missed to resolve ${o[1]} for nesting ${n}`),
          (c = '')),
        p &&
          (c = m.reduce(
            (g, v) =>
              this.format(g, v, l.lng, { ...l, interpolationkey: o[1].trim() }),
            c.trim(),
          )),
        (n = n.replace(o[0], c)),
        (this.regexp.lastIndex = 0);
    }
    return n;
  }
}
const Zw = (a) => {
    let n = a.toLowerCase().trim();
    const r = {};
    if (a.indexOf('(') > -1) {
      const l = a.split('(');
      n = l[0].toLowerCase().trim();
      const o = l[1].substring(0, l[1].length - 1);
      n === 'currency' && o.indexOf(':') < 0
        ? r.currency || (r.currency = o.trim())
        : n === 'relativetime' && o.indexOf(':') < 0
          ? r.range || (r.range = o.trim())
          : o.split(';').forEach((d) => {
              if (d) {
                const [h, ...m] = d.split(':'),
                  p = m
                    .join(':')
                    .trim()
                    .replace(/^'+|'+$/g, ''),
                  g = h.trim();
                r[g] || (r[g] = p),
                  p === 'false' && (r[g] = !1),
                  p === 'true' && (r[g] = !0),
                  isNaN(p) || (r[g] = parseInt(p, 10));
              }
            });
    }
    return { formatName: n, formatOptions: r };
  },
  Ly = (a) => {
    const n = {};
    return (r, l, o) => {
      let c = o;
      o &&
        o.interpolationkey &&
        o.formatParams &&
        o.formatParams[o.interpolationkey] &&
        o[o.interpolationkey] &&
        (c = { ...c, [o.interpolationkey]: void 0 });
      const d = l + JSON.stringify(c);
      let h = n[d];
      return h || ((h = a(Pl(l), o)), (n[d] = h)), h(r);
    };
  },
  $w = (a) => (n, r, l) => a(Pl(r), l)(n);
class Jw {
  constructor(n = {}) {
    (this.logger = An.create('formatter')), (this.options = n), this.init(n);
  }
  init(n, r = { interpolation: {} }) {
    this.formatSeparator = r.interpolation.formatSeparator || ',';
    const l = r.cacheInBuiltFormats ? Ly : $w;
    this.formats = {
      number: l((o, c) => {
        const d = new Intl.NumberFormat(o, { ...c });
        return (h) => d.format(h);
      }),
      currency: l((o, c) => {
        const d = new Intl.NumberFormat(o, { ...c, style: 'currency' });
        return (h) => d.format(h);
      }),
      datetime: l((o, c) => {
        const d = new Intl.DateTimeFormat(o, { ...c });
        return (h) => d.format(h);
      }),
      relativetime: l((o, c) => {
        const d = new Intl.RelativeTimeFormat(o, { ...c });
        return (h) => d.format(h, c.range || 'day');
      }),
      list: l((o, c) => {
        const d = new Intl.ListFormat(o, { ...c });
        return (h) => d.format(h);
      }),
    };
  }
  add(n, r) {
    this.formats[n.toLowerCase().trim()] = r;
  }
  addCached(n, r) {
    this.formats[n.toLowerCase().trim()] = Ly(r);
  }
  format(n, r, l, o = {}) {
    const c = r.split(this.formatSeparator);
    if (
      c.length > 1 &&
      c[0].indexOf('(') > 1 &&
      c[0].indexOf(')') < 0 &&
      c.find((h) => h.indexOf(')') > -1)
    ) {
      const h = c.findIndex((m) => m.indexOf(')') > -1);
      c[0] = [c[0], ...c.splice(1, h)].join(this.formatSeparator);
    }
    return c.reduce((h, m) => {
      var v;
      const { formatName: p, formatOptions: g } = Zw(m);
      if (this.formats[p]) {
        let S = h;
        try {
          const E =
              ((v = o == null ? void 0 : o.formatParams) == null
                ? void 0
                : v[o.interpolationkey]) || {},
            w = E.locale || E.lng || o.locale || o.lng || l;
          S = this.formats[p](h, w, { ...g, ...o, ...E });
        } catch (E) {
          this.logger.warn(E);
        }
        return S;
      } else this.logger.warn(`there was no format function for ${p}`);
      return h;
    }, n);
  }
}
const Iw = (a, n) => {
  a.pending[n] !== void 0 && (delete a.pending[n], a.pendingCount--);
};
class Ww extends tu {
  constructor(n, r, l, o = {}) {
    var c, d;
    super(),
      (this.backend = n),
      (this.store = r),
      (this.services = l),
      (this.languageUtils = l.languageUtils),
      (this.options = o),
      (this.logger = An.create('backendConnector')),
      (this.waitingReads = []),
      (this.maxParallelReads = o.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5),
      (this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      (d = (c = this.backend) == null ? void 0 : c.init) == null ||
        d.call(c, l, o.backend, o);
  }
  queueLoad(n, r, l, o) {
    const c = {},
      d = {},
      h = {},
      m = {};
    return (
      n.forEach((p) => {
        let g = !0;
        r.forEach((v) => {
          const S = `${p}|${v}`;
          !l.reload && this.store.hasResourceBundle(p, v)
            ? (this.state[S] = 2)
            : this.state[S] < 0 ||
              (this.state[S] === 1
                ? d[S] === void 0 && (d[S] = !0)
                : ((this.state[S] = 1),
                  (g = !1),
                  d[S] === void 0 && (d[S] = !0),
                  c[S] === void 0 && (c[S] = !0),
                  m[v] === void 0 && (m[v] = !0)));
        }),
          g || (h[p] = !0);
      }),
      (Object.keys(c).length || Object.keys(d).length) &&
        this.queue.push({
          pending: d,
          pendingCount: Object.keys(d).length,
          loaded: {},
          errors: [],
          callback: o,
        }),
      {
        toLoad: Object.keys(c),
        pending: Object.keys(d),
        toLoadLanguages: Object.keys(h),
        toLoadNamespaces: Object.keys(m),
      }
    );
  }
  loaded(n, r, l) {
    const o = n.split('|'),
      c = o[0],
      d = o[1];
    r && this.emit('failedLoading', c, d, r),
      !r &&
        l &&
        this.store.addResourceBundle(c, d, l, void 0, void 0, { skipCopy: !0 }),
      (this.state[n] = r ? -1 : 2),
      r && l && (this.state[n] = 0);
    const h = {};
    this.queue.forEach((m) => {
      Bw(m.loaded, [c], d),
        Iw(m, n),
        r && m.errors.push(r),
        m.pendingCount === 0 &&
          !m.done &&
          (Object.keys(m.loaded).forEach((p) => {
            h[p] || (h[p] = {});
            const g = m.loaded[p];
            g.length &&
              g.forEach((v) => {
                h[p][v] === void 0 && (h[p][v] = !0);
              });
          }),
          (m.done = !0),
          m.errors.length ? m.callback(m.errors) : m.callback());
    }),
      this.emit('loaded', h),
      (this.queue = this.queue.filter((m) => !m.done));
  }
  read(n, r, l, o = 0, c = this.retryTimeout, d) {
    if (!n.length) return d(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: n,
        ns: r,
        fcName: l,
        tried: o,
        wait: c,
        callback: d,
      });
      return;
    }
    this.readingCalls++;
    const h = (p, g) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const v = this.waitingReads.shift();
          this.read(v.lng, v.ns, v.fcName, v.tried, v.wait, v.callback);
        }
        if (p && g && o < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, n, r, l, o + 1, c * 2, d);
          }, c);
          return;
        }
        d(p, g);
      },
      m = this.backend[l].bind(this.backend);
    if (m.length === 2) {
      try {
        const p = m(n, r);
        p && typeof p.then == 'function'
          ? p.then((g) => h(null, g)).catch(h)
          : h(null, p);
      } catch (p) {
        h(p);
      }
      return;
    }
    return m(n, r, h);
  }
  prepareLoading(n, r, l = {}, o) {
    if (!this.backend)
      return (
        this.logger.warn(
          'No backend was added via i18next.use. Will not load resources.',
        ),
        o && o()
      );
    ve(n) && (n = this.languageUtils.toResolveHierarchy(n)), ve(r) && (r = [r]);
    const c = this.queueLoad(n, r, l, o);
    if (!c.toLoad.length) return c.pending.length || o(), null;
    c.toLoad.forEach((d) => {
      this.loadOne(d);
    });
  }
  load(n, r, l) {
    this.prepareLoading(n, r, {}, l);
  }
  reload(n, r, l) {
    this.prepareLoading(n, r, { reload: !0 }, l);
  }
  loadOne(n, r = '') {
    const l = n.split('|'),
      o = l[0],
      c = l[1];
    this.read(o, c, 'read', void 0, void 0, (d, h) => {
      d &&
        this.logger.warn(
          `${r}loading namespace ${c} for language ${o} failed`,
          d,
        ),
        !d &&
          h &&
          this.logger.log(`${r}loaded namespace ${c} for language ${o}`, h),
        this.loaded(n, d, h);
    });
  }
  saveMissing(n, r, l, o, c, d = {}, h = () => {}) {
    var m, p, g, v, S;
    if (
      (p = (m = this.services) == null ? void 0 : m.utils) != null &&
      p.hasLoadedNamespace &&
      !(
        (v = (g = this.services) == null ? void 0 : g.utils) != null &&
        v.hasLoadedNamespace(r)
      )
    ) {
      this.logger.warn(
        `did not save key "${l}" as the namespace "${r}" was not yet loaded`,
        'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
      );
      return;
    }
    if (!(l == null || l === '')) {
      if ((S = this.backend) != null && S.create) {
        const E = { ...d, isUpdate: c },
          w = this.backend.create.bind(this.backend);
        if (w.length < 6)
          try {
            let x;
            w.length === 5 ? (x = w(n, r, l, o, E)) : (x = w(n, r, l, o)),
              x && typeof x.then == 'function'
                ? x.then((R) => h(null, R)).catch(h)
                : h(null, x);
          } catch (x) {
            h(x);
          }
        else w(n, r, l, o, h, E);
      }
      !n || !n[0] || this.store.addResource(n[0], r, l, o);
    }
  }
}
const zy = () => ({
    debug: !1,
    initAsync: !0,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: 'all',
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: 'fallback',
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: (a) => {
      let n = {};
      if (
        (typeof a[1] == 'object' && (n = a[1]),
        ve(a[1]) && (n.defaultValue = a[1]),
        ve(a[2]) && (n.tDescription = a[2]),
        typeof a[2] == 'object' || typeof a[3] == 'object')
      ) {
        const r = a[3] || a[2];
        Object.keys(r).forEach((l) => {
          n[l] = r[l];
        });
      }
      return n;
    },
    interpolation: {
      escapeValue: !0,
      format: (a) => a,
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      nestingOptionsSeparator: ',',
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
    cacheInBuiltFormats: !0,
  }),
  Uy = (a) => {
    var n, r;
    return (
      ve(a.ns) && (a.ns = [a.ns]),
      ve(a.fallbackLng) && (a.fallbackLng = [a.fallbackLng]),
      ve(a.fallbackNS) && (a.fallbackNS = [a.fallbackNS]),
      ((r = (n = a.supportedLngs) == null ? void 0 : n.indexOf) == null
        ? void 0
        : r.call(n, 'cimode')) < 0 &&
        (a.supportedLngs = a.supportedLngs.concat(['cimode'])),
      typeof a.initImmediate == 'boolean' && (a.initAsync = a.initImmediate),
      a
    );
  },
  Ao = () => {},
  eE = (a) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(a)).forEach((r) => {
      typeof a[r] == 'function' && (a[r] = a[r].bind(a));
    });
  };
class Vl extends tu {
  constructor(n = {}, r) {
    if (
      (super(),
      (this.options = Uy(n)),
      (this.services = {}),
      (this.logger = An),
      (this.modules = { external: [] }),
      eE(this),
      r && !this.isInitialized && !n.isClone)
    ) {
      if (!this.options.initAsync) return this.init(n, r), this;
      setTimeout(() => {
        this.init(n, r);
      }, 0);
    }
  }
  init(n = {}, r) {
    (this.isInitializing = !0),
      typeof n == 'function' && ((r = n), (n = {})),
      n.defaultNS == null &&
        n.ns &&
        (ve(n.ns)
          ? (n.defaultNS = n.ns)
          : n.ns.indexOf('translation') < 0 && (n.defaultNS = n.ns[0]));
    const l = zy();
    (this.options = { ...l, ...this.options, ...Uy(n) }),
      (this.options.interpolation = {
        ...l.interpolation,
        ...this.options.interpolation,
      }),
      n.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = n.keySeparator),
      n.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = n.nsSeparator);
    const o = (p) => (p ? (typeof p == 'function' ? new p() : p) : null);
    if (!this.options.isClone) {
      this.modules.logger
        ? An.init(o(this.modules.logger), this.options)
        : An.init(null, this.options);
      let p;
      this.modules.formatter ? (p = this.modules.formatter) : (p = Jw);
      const g = new My(this.options);
      this.store = new Ay(this.options.resources, this.options);
      const v = this.services;
      (v.logger = An),
        (v.resourceStore = this.store),
        (v.languageUtils = g),
        (v.pluralResolver = new Fw(g, {
          prepend: this.options.pluralSeparator,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        p &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === l.interpolation.format) &&
          ((v.formatter = o(p)),
          v.formatter.init(v, this.options),
          (this.options.interpolation.format = v.formatter.format.bind(
            v.formatter,
          ))),
        (v.interpolator = new Xw(this.options)),
        (v.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (v.backendConnector = new Ww(
          o(this.modules.backend),
          v.resourceStore,
          v,
          this.options,
        )),
        v.backendConnector.on('*', (S, ...E) => {
          this.emit(S, ...E);
        }),
        this.modules.languageDetector &&
          ((v.languageDetector = o(this.modules.languageDetector)),
          v.languageDetector.init &&
            v.languageDetector.init(v, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((v.i18nFormat = o(this.modules.i18nFormat)),
          v.i18nFormat.init && v.i18nFormat.init(this)),
        (this.translator = new Ko(this.services, this.options)),
        this.translator.on('*', (S, ...E) => {
          this.emit(S, ...E);
        }),
        this.modules.external.forEach((S) => {
          S.init && S.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      r || (r = Ao),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const p = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng,
      );
      p.length > 0 && p[0] !== 'dev' && (this.options.lng = p[0]);
    }
    !this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn(
        'init: no languageDetector is used and no lng is defined',
      ),
      [
        'getResource',
        'hasResourceBundle',
        'getResourceBundle',
        'getDataByLanguage',
      ].forEach((p) => {
        this[p] = (...g) => this.store[p](...g);
      }),
      [
        'addResource',
        'addResources',
        'addResourceBundle',
        'removeResourceBundle',
      ].forEach((p) => {
        this[p] = (...g) => (this.store[p](...g), this);
      });
    const h = zl(),
      m = () => {
        const p = (g, v) => {
          (this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                'init: i18next is already initialized. You should call init just once!',
              ),
            (this.isInitialized = !0),
            this.options.isClone ||
              this.logger.log('initialized', this.options),
            this.emit('initialized', this.options),
            h.resolve(v),
            r(g, v);
        };
        if (this.languages && !this.isInitialized)
          return p(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, p);
      };
    return (
      this.options.resources || !this.options.initAsync
        ? m()
        : setTimeout(m, 0),
      h
    );
  }
  loadResources(n, r = Ao) {
    var c, d;
    let l = r;
    const o = ve(n) ? n : this.language;
    if (
      (typeof n == 'function' && (l = n),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        (o == null ? void 0 : o.toLowerCase()) === 'cimode' &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return l();
      const h = [],
        m = (p) => {
          if (!p || p === 'cimode') return;
          this.services.languageUtils.toResolveHierarchy(p).forEach((v) => {
            v !== 'cimode' && h.indexOf(v) < 0 && h.push(v);
          });
        };
      o
        ? m(o)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((g) => m(g)),
        (d = (c = this.options.preload) == null ? void 0 : c.forEach) == null ||
          d.call(c, (p) => m(p)),
        this.services.backendConnector.load(h, this.options.ns, (p) => {
          !p &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            l(p);
        });
    } else l(null);
  }
  reloadResources(n, r, l) {
    const o = zl();
    return (
      typeof n == 'function' && ((l = n), (n = void 0)),
      typeof r == 'function' && ((l = r), (r = void 0)),
      n || (n = this.languages),
      r || (r = this.options.ns),
      l || (l = Ao),
      this.services.backendConnector.reload(n, r, (c) => {
        o.resolve(), l(c);
      }),
      o
    );
  }
  use(n) {
    if (!n)
      throw new Error(
        'You are passing an undefined module! Please check the object you are passing to i18next.use()',
      );
    if (!n.type)
      throw new Error(
        'You are passing a wrong module! Please check the object you are passing to i18next.use()',
      );
    return (
      n.type === 'backend' && (this.modules.backend = n),
      (n.type === 'logger' || (n.log && n.warn && n.error)) &&
        (this.modules.logger = n),
      n.type === 'languageDetector' && (this.modules.languageDetector = n),
      n.type === 'i18nFormat' && (this.modules.i18nFormat = n),
      n.type === 'postProcessor' && ab.addPostProcessor(n),
      n.type === 'formatter' && (this.modules.formatter = n),
      n.type === '3rdParty' && this.modules.external.push(n),
      this
    );
  }
  setResolvedLanguage(n) {
    if (!(!n || !this.languages) && !(['cimode', 'dev'].indexOf(n) > -1)) {
      for (let r = 0; r < this.languages.length; r++) {
        const l = this.languages[r];
        if (
          !(['cimode', 'dev'].indexOf(l) > -1) &&
          this.store.hasLanguageSomeTranslations(l)
        ) {
          this.resolvedLanguage = l;
          break;
        }
      }
      !this.resolvedLanguage &&
        this.languages.indexOf(n) < 0 &&
        this.store.hasLanguageSomeTranslations(n) &&
        ((this.resolvedLanguage = n), this.languages.unshift(n));
    }
  }
  changeLanguage(n, r) {
    this.isLanguageChangingTo = n;
    const l = zl();
    this.emit('languageChanging', n);
    const o = (h) => {
        (this.language = h),
          (this.languages = this.services.languageUtils.toResolveHierarchy(h)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(h);
      },
      c = (h, m) => {
        m
          ? this.isLanguageChangingTo === n &&
            (o(m),
            this.translator.changeLanguage(m),
            (this.isLanguageChangingTo = void 0),
            this.emit('languageChanged', m),
            this.logger.log('languageChanged', m))
          : (this.isLanguageChangingTo = void 0),
          l.resolve((...p) => this.t(...p)),
          r && r(h, (...p) => this.t(...p));
      },
      d = (h) => {
        var g, v;
        !n && !h && this.services.languageDetector && (h = []);
        const m = ve(h) ? h : h && h[0],
          p = this.store.hasLanguageSomeTranslations(m)
            ? m
            : this.services.languageUtils.getBestMatchFromCodes(
                ve(h) ? [h] : h,
              );
        p &&
          (this.language || o(p),
          this.translator.language || this.translator.changeLanguage(p),
          (v =
            (g = this.services.languageDetector) == null
              ? void 0
              : g.cacheUserLanguage) == null || v.call(g, p)),
          this.loadResources(p, (S) => {
            c(S, p);
          });
      };
    return (
      !n &&
      this.services.languageDetector &&
      !this.services.languageDetector.async
        ? d(this.services.languageDetector.detect())
        : !n &&
            this.services.languageDetector &&
            this.services.languageDetector.async
          ? this.services.languageDetector.detect.length === 0
            ? this.services.languageDetector.detect().then(d)
            : this.services.languageDetector.detect(d)
          : d(n),
      l
    );
  }
  getFixedT(n, r, l) {
    const o = (c, d, ...h) => {
      let m;
      typeof d != 'object'
        ? (m = this.options.overloadTranslationOptionHandler([c, d].concat(h)))
        : (m = { ...d }),
        (m.lng = m.lng || o.lng),
        (m.lngs = m.lngs || o.lngs),
        (m.ns = m.ns || o.ns),
        m.keyPrefix !== '' && (m.keyPrefix = m.keyPrefix || l || o.keyPrefix);
      const p = this.options.keySeparator || '.';
      let g;
      return (
        m.keyPrefix && Array.isArray(c)
          ? (g = c.map((v) => `${m.keyPrefix}${p}${v}`))
          : (g = m.keyPrefix ? `${m.keyPrefix}${p}${c}` : c),
        this.t(g, m)
      );
    };
    return ve(n) ? (o.lng = n) : (o.lngs = n), (o.ns = r), (o.keyPrefix = l), o;
  }
  t(...n) {
    var r;
    return (r = this.translator) == null ? void 0 : r.translate(...n);
  }
  exists(...n) {
    var r;
    return (r = this.translator) == null ? void 0 : r.exists(...n);
  }
  setDefaultNamespace(n) {
    this.options.defaultNS = n;
  }
  hasLoadedNamespace(n, r = {}) {
    if (!this.isInitialized)
      return (
        this.logger.warn(
          'hasLoadedNamespace: i18next was not initialized',
          this.languages,
        ),
        !1
      );
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          'hasLoadedNamespace: i18n.languages were undefined or empty',
          this.languages,
        ),
        !1
      );
    const l = r.lng || this.resolvedLanguage || this.languages[0],
      o = this.options ? this.options.fallbackLng : !1,
      c = this.languages[this.languages.length - 1];
    if (l.toLowerCase() === 'cimode') return !0;
    const d = (h, m) => {
      const p = this.services.backendConnector.state[`${h}|${m}`];
      return p === -1 || p === 0 || p === 2;
    };
    if (r.precheck) {
      const h = r.precheck(this, d);
      if (h !== void 0) return h;
    }
    return !!(
      this.hasResourceBundle(l, n) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (d(l, n) && (!o || d(c, n)))
    );
  }
  loadNamespaces(n, r) {
    const l = zl();
    return this.options.ns
      ? (ve(n) && (n = [n]),
        n.forEach((o) => {
          this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
        }),
        this.loadResources((o) => {
          l.resolve(), r && r(o);
        }),
        l)
      : (r && r(), Promise.resolve());
  }
  loadLanguages(n, r) {
    const l = zl();
    ve(n) && (n = [n]);
    const o = this.options.preload || [],
      c = n.filter(
        (d) =>
          o.indexOf(d) < 0 && this.services.languageUtils.isSupportedCode(d),
      );
    return c.length
      ? ((this.options.preload = o.concat(c)),
        this.loadResources((d) => {
          l.resolve(), r && r(d);
        }),
        l)
      : (r && r(), Promise.resolve());
  }
  dir(n) {
    var o, c;
    if (
      (n ||
        (n =
          this.resolvedLanguage ||
          (((o = this.languages) == null ? void 0 : o.length) > 0
            ? this.languages[0]
            : this.language)),
      !n)
    )
      return 'rtl';
    const r = [
        'ar',
        'shu',
        'sqr',
        'ssh',
        'xaa',
        'yhd',
        'yud',
        'aao',
        'abh',
        'abv',
        'acm',
        'acq',
        'acw',
        'acx',
        'acy',
        'adf',
        'ads',
        'aeb',
        'aec',
        'afb',
        'ajp',
        'apc',
        'apd',
        'arb',
        'arq',
        'ars',
        'ary',
        'arz',
        'auz',
        'avl',
        'ayh',
        'ayl',
        'ayn',
        'ayp',
        'bbz',
        'pga',
        'he',
        'iw',
        'ps',
        'pbt',
        'pbu',
        'pst',
        'prp',
        'prd',
        'ug',
        'ur',
        'ydd',
        'yds',
        'yih',
        'ji',
        'yi',
        'hbo',
        'men',
        'xmn',
        'fa',
        'jpr',
        'peo',
        'pes',
        'prs',
        'dv',
        'sam',
        'ckb',
      ],
      l =
        ((c = this.services) == null ? void 0 : c.languageUtils) ||
        new My(zy());
    return r.indexOf(l.getLanguagePartFromCode(n)) > -1 ||
      n.toLowerCase().indexOf('-arab') > 1
      ? 'rtl'
      : 'ltr';
  }
  static createInstance(n = {}, r) {
    return new Vl(n, r);
  }
  cloneInstance(n = {}, r = Ao) {
    const l = n.forkResourceStore;
    l && delete n.forkResourceStore;
    const o = { ...this.options, ...n, isClone: !0 },
      c = new Vl(o);
    if (
      ((n.debug !== void 0 || n.prefix !== void 0) &&
        (c.logger = c.logger.clone(n)),
      ['store', 'services', 'language'].forEach((h) => {
        c[h] = this[h];
      }),
      (c.services = { ...this.services }),
      (c.services.utils = { hasLoadedNamespace: c.hasLoadedNamespace.bind(c) }),
      l)
    ) {
      const h = Object.keys(this.store.data).reduce(
        (m, p) => (
          (m[p] = { ...this.store.data[p] }),
          (m[p] = Object.keys(m[p]).reduce(
            (g, v) => ((g[v] = { ...m[p][v] }), g),
            m[p],
          )),
          m
        ),
        {},
      );
      (c.store = new Ay(h, o)), (c.services.resourceStore = c.store);
    }
    return (
      (c.translator = new Ko(c.services, o)),
      c.translator.on('*', (h, ...m) => {
        c.emit(h, ...m);
      }),
      c.init(o, r),
      (c.translator.options = o),
      (c.translator.backendConnector.services.utils = {
        hasLoadedNamespace: c.hasLoadedNamespace.bind(c),
      }),
      c
    );
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    };
  }
}
const dt = Vl.createInstance();
dt.createInstance = Vl.createInstance;
dt.createInstance;
dt.dir;
dt.init;
dt.loadResources;
dt.reloadResources;
dt.use;
dt.changeLanguage;
dt.getFixedT;
dt.t;
dt.exists;
dt.setDefaultNamespace;
dt.hasLoadedNamespace;
dt.loadNamespaces;
dt.loadLanguages;
const tE = (a, n, r, l) => {
    var c, d, h, m;
    const o = [r, { code: n, ...(l || {}) }];
    if (
      (d = (c = a == null ? void 0 : a.services) == null ? void 0 : c.logger) !=
        null &&
      d.forward
    )
      return a.services.logger.forward(o, 'warn', 'react-i18next::', !0);
    di(o[0]) && (o[0] = `react-i18next:: ${o[0]}`),
      (m = (h = a == null ? void 0 : a.services) == null ? void 0 : h.logger) !=
        null && m.warn
        ? a.services.logger.warn(...o)
        : console != null && console.warn && console.warn(...o);
  },
  jy = {},
  gd = (a, n, r, l) => {
    (di(r) && jy[r]) || (di(r) && (jy[r] = new Date()), tE(a, n, r, l));
  },
  ib = (a, n) => () => {
    if (a.isInitialized) n();
    else {
      const r = () => {
        setTimeout(() => {
          a.off('initialized', r);
        }, 0),
          n();
      };
      a.on('initialized', r);
    }
  },
  yd = (a, n, r) => {
    a.loadNamespaces(n, ib(a, r));
  },
  ky = (a, n, r, l) => {
    if (
      (di(r) && (r = [r]),
      a.options.preload && a.options.preload.indexOf(n) > -1)
    )
      return yd(a, r, l);
    r.forEach((o) => {
      a.options.ns.indexOf(o) < 0 && a.options.ns.push(o);
    }),
      a.loadLanguages(n, ib(a, l));
  },
  nE = (a, n, r = {}) =>
    !n.languages || !n.languages.length
      ? (gd(n, 'NO_LANGUAGES', 'i18n.languages were undefined or empty', {
          languages: n.languages,
        }),
        !0)
      : n.hasLoadedNamespace(a, {
          lng: r.lng,
          precheck: (l, o) => {
            var c;
            if (
              ((c = r.bindI18n) == null
                ? void 0
                : c.indexOf('languageChanging')) > -1 &&
              l.services.backendConnector.backend &&
              l.isLanguageChangingTo &&
              !o(l.isLanguageChangingTo, a)
            )
              return !1;
          },
        }),
  di = (a) => typeof a == 'string',
  aE = (a) => typeof a == 'object' && a !== null,
  iE =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  rE = {
    '&amp;': '&',
    '&#38;': '&',
    '&lt;': '<',
    '&#60;': '<',
    '&gt;': '>',
    '&#62;': '>',
    '&apos;': "'",
    '&#39;': "'",
    '&quot;': '"',
    '&#34;': '"',
    '&nbsp;': ' ',
    '&#160;': ' ',
    '&copy;': '©',
    '&#169;': '©',
    '&reg;': '®',
    '&#174;': '®',
    '&hellip;': '…',
    '&#8230;': '…',
    '&#x2F;': '/',
    '&#47;': '/',
  },
  lE = (a) => rE[a],
  sE = (a) => a.replace(iE, lE);
let vd = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: !0,
  unescape: sE,
};
const oE = (a = {}) => {
    vd = { ...vd, ...a };
  },
  uE = () => vd;
let rb;
const cE = (a) => {
    rb = a;
  },
  fE = () => rb,
  dE = {
    type: '3rdParty',
    init(a) {
      oE(a.options.react), cE(a);
    },
  },
  hE = O.createContext();
class pE {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(n) {
    n.forEach((r) => {
      this.usedNamespaces[r] || (this.usedNamespaces[r] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const mE = (a, n) => {
    const r = O.useRef();
    return (
      O.useEffect(() => {
        r.current = a;
      }, [a, n]),
      r.current
    );
  },
  lb = (a, n, r, l) => a.getFixedT(n, r, l),
  gE = (a, n, r, l) => O.useCallback(lb(a, n, r, l), [a, n, r, l]),
  yE = (a, n = {}) => {
    var q, B, J, Z;
    const { i18n: r } = n,
      { i18n: l, defaultNS: o } = O.useContext(hE) || {},
      c = r || l || fE();
    if ((c && !c.reportNamespaces && (c.reportNamespaces = new pE()), !c)) {
      gd(
        c,
        'NO_I18NEXT_INSTANCE',
        'useTranslation: You will need to pass in an i18next instance by using initReactI18next',
      );
      const G = (ne, fe) =>
          di(fe)
            ? fe
            : aE(fe) && di(fe.defaultValue)
              ? fe.defaultValue
              : Array.isArray(ne)
                ? ne[ne.length - 1]
                : ne,
        W = [G, {}, !1];
      return (W.t = G), (W.i18n = {}), (W.ready = !1), W;
    }
    (q = c.options.react) != null &&
      q.wait &&
      gd(
        c,
        'DEPRECATED_OPTION',
        'useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.',
      );
    const d = { ...uE(), ...c.options.react, ...n },
      { useSuspense: h, keyPrefix: m } = d;
    let p = o || ((B = c.options) == null ? void 0 : B.defaultNS);
    (p = di(p) ? [p] : p || ['translation']),
      (Z = (J = c.reportNamespaces).addUsedNamespaces) == null || Z.call(J, p);
    const g =
        (c.isInitialized || c.initializedStoreOnce) &&
        p.every((G) => nE(G, c, d)),
      v = gE(c, n.lng || null, d.nsMode === 'fallback' ? p : p[0], m),
      S = () => v,
      E = () => lb(c, n.lng || null, d.nsMode === 'fallback' ? p : p[0], m),
      [w, x] = O.useState(S);
    let R = p.join();
    n.lng && (R = `${n.lng}${R}`);
    const _ = mE(R),
      k = O.useRef(!0);
    O.useEffect(() => {
      const { bindI18n: G, bindI18nStore: W } = d;
      (k.current = !0),
        !g &&
          !h &&
          (n.lng
            ? ky(c, n.lng, p, () => {
                k.current && x(E);
              })
            : yd(c, p, () => {
                k.current && x(E);
              })),
        g && _ && _ !== R && k.current && x(E);
      const ne = () => {
        k.current && x(E);
      };
      return (
        G && (c == null || c.on(G, ne)),
        W && (c == null || c.store.on(W, ne)),
        () => {
          (k.current = !1),
            c && (G == null || G.split(' ').forEach((fe) => c.off(fe, ne))),
            W && c && W.split(' ').forEach((fe) => c.store.off(fe, ne));
        }
      );
    }, [c, R]),
      O.useEffect(() => {
        k.current && g && x(S);
      }, [c, m, g]);
    const L = [w, c, g];
    if (((L.t = w), (L.i18n = c), (L.ready = g), g || (!g && !h))) return L;
    throw new Promise((G) => {
      n.lng ? ky(c, n.lng, p, () => G()) : yd(c, p, () => G());
    });
  },
  { slice: vE, forEach: bE } = [];
function SE(a) {
  return (
    bE.call(vE.call(arguments, 1), (n) => {
      if (n) for (const r in n) a[r] === void 0 && (a[r] = n[r]);
    }),
    a
  );
}
function xE(a) {
  return typeof a != 'string'
    ? !1
    : [
        /<\s*script.*?>/i,
        /<\s*\/\s*script\s*>/i,
        /<\s*img.*?on\w+\s*=/i,
        /<\s*\w+\s*on\w+\s*=.*?>/i,
        /javascript\s*:/i,
        /vbscript\s*:/i,
        /expression\s*\(/i,
        /eval\s*\(/i,
        /alert\s*\(/i,
        /document\.cookie/i,
        /document\.write\s*\(/i,
        /window\.location/i,
        /innerHTML/i,
      ].some((r) => r.test(a));
}
const By = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
  wE = function (a, n) {
    const l =
        arguments.length > 2 && arguments[2] !== void 0
          ? arguments[2]
          : { path: '/' },
      o = encodeURIComponent(n);
    let c = `${a}=${o}`;
    if (l.maxAge > 0) {
      const d = l.maxAge - 0;
      if (Number.isNaN(d)) throw new Error('maxAge should be a Number');
      c += `; Max-Age=${Math.floor(d)}`;
    }
    if (l.domain) {
      if (!By.test(l.domain)) throw new TypeError('option domain is invalid');
      c += `; Domain=${l.domain}`;
    }
    if (l.path) {
      if (!By.test(l.path)) throw new TypeError('option path is invalid');
      c += `; Path=${l.path}`;
    }
    if (l.expires) {
      if (typeof l.expires.toUTCString != 'function')
        throw new TypeError('option expires is invalid');
      c += `; Expires=${l.expires.toUTCString()}`;
    }
    if (
      (l.httpOnly && (c += '; HttpOnly'),
      l.secure && (c += '; Secure'),
      l.sameSite)
    )
      switch (
        typeof l.sameSite == 'string' ? l.sameSite.toLowerCase() : l.sameSite
      ) {
        case !0:
          c += '; SameSite=Strict';
          break;
        case 'lax':
          c += '; SameSite=Lax';
          break;
        case 'strict':
          c += '; SameSite=Strict';
          break;
        case 'none':
          c += '; SameSite=None';
          break;
        default:
          throw new TypeError('option sameSite is invalid');
      }
    return l.partitioned && (c += '; Partitioned'), c;
  },
  Hy = {
    create(a, n, r, l) {
      let o =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : { path: '/', sameSite: 'strict' };
      r &&
        ((o.expires = new Date()),
        o.expires.setTime(o.expires.getTime() + r * 60 * 1e3)),
        l && (o.domain = l),
        (document.cookie = wE(a, encodeURIComponent(n), o));
    },
    read(a) {
      const n = `${a}=`,
        r = document.cookie.split(';');
      for (let l = 0; l < r.length; l++) {
        let o = r[l];
        for (; o.charAt(0) === ' '; ) o = o.substring(1, o.length);
        if (o.indexOf(n) === 0) return o.substring(n.length, o.length);
      }
      return null;
    },
    remove(a) {
      this.create(a, '', -1);
    },
  };
var EE = {
    name: 'cookie',
    lookup(a) {
      let { lookupCookie: n } = a;
      if (n && typeof document < 'u') return Hy.read(n) || void 0;
    },
    cacheUserLanguage(a, n) {
      let {
        lookupCookie: r,
        cookieMinutes: l,
        cookieDomain: o,
        cookieOptions: c,
      } = n;
      r && typeof document < 'u' && Hy.create(r, a, l, o, c);
    },
  },
  RE = {
    name: 'querystring',
    lookup(a) {
      var l;
      let { lookupQuerystring: n } = a,
        r;
      if (typeof window < 'u') {
        let { search: o } = window.location;
        !window.location.search &&
          ((l = window.location.hash) == null ? void 0 : l.indexOf('?')) > -1 &&
          (o = window.location.hash.substring(
            window.location.hash.indexOf('?'),
          ));
        const d = o.substring(1).split('&');
        for (let h = 0; h < d.length; h++) {
          const m = d[h].indexOf('=');
          m > 0 && d[h].substring(0, m) === n && (r = d[h].substring(m + 1));
        }
      }
      return r;
    },
  };
let lr = null;
const qy = () => {
  if (lr !== null) return lr;
  try {
    if (((lr = typeof window < 'u' && window.localStorage !== null), !lr))
      return !1;
    const a = 'i18next.translate.boo';
    window.localStorage.setItem(a, 'foo'), window.localStorage.removeItem(a);
  } catch {
    lr = !1;
  }
  return lr;
};
var OE = {
  name: 'localStorage',
  lookup(a) {
    let { lookupLocalStorage: n } = a;
    if (n && qy()) return window.localStorage.getItem(n) || void 0;
  },
  cacheUserLanguage(a, n) {
    let { lookupLocalStorage: r } = n;
    r && qy() && window.localStorage.setItem(r, a);
  },
};
let sr = null;
const Gy = () => {
  if (sr !== null) return sr;
  try {
    if (((sr = typeof window < 'u' && window.sessionStorage !== null), !sr))
      return !1;
    const a = 'i18next.translate.boo';
    window.sessionStorage.setItem(a, 'foo'),
      window.sessionStorage.removeItem(a);
  } catch {
    sr = !1;
  }
  return sr;
};
var AE = {
    name: 'sessionStorage',
    lookup(a) {
      let { lookupSessionStorage: n } = a;
      if (n && Gy()) return window.sessionStorage.getItem(n) || void 0;
    },
    cacheUserLanguage(a, n) {
      let { lookupSessionStorage: r } = n;
      r && Gy() && window.sessionStorage.setItem(r, a);
    },
  },
  TE = {
    name: 'navigator',
    lookup(a) {
      const n = [];
      if (typeof navigator < 'u') {
        const { languages: r, userLanguage: l, language: o } = navigator;
        if (r) for (let c = 0; c < r.length; c++) n.push(r[c]);
        l && n.push(l), o && n.push(o);
      }
      return n.length > 0 ? n : void 0;
    },
  },
  CE = {
    name: 'htmlTag',
    lookup(a) {
      let { htmlTag: n } = a,
        r;
      const l = n || (typeof document < 'u' ? document.documentElement : null);
      return (
        l &&
          typeof l.getAttribute == 'function' &&
          (r = l.getAttribute('lang')),
        r
      );
    },
  },
  ME = {
    name: 'path',
    lookup(a) {
      var o;
      let { lookupFromPathIndex: n } = a;
      if (typeof window > 'u') return;
      const r = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
      return Array.isArray(r)
        ? (o = r[typeof n == 'number' ? n : 0]) == null
          ? void 0
          : o.replace('/', '')
        : void 0;
    },
  },
  DE = {
    name: 'subdomain',
    lookup(a) {
      var o, c;
      let { lookupFromSubdomainIndex: n } = a;
      const r = typeof n == 'number' ? n + 1 : 1,
        l =
          typeof window < 'u' &&
          ((c = (o = window.location) == null ? void 0 : o.hostname) == null
            ? void 0
            : c.match(
                /^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i,
              ));
      if (l) return l[r];
    },
  };
let sb = !1;
try {
  document.cookie, (sb = !0);
} catch {}
const ob = [
  'querystring',
  'cookie',
  'localStorage',
  'sessionStorage',
  'navigator',
  'htmlTag',
];
sb || ob.splice(1, 1);
const _E = () => ({
  order: ob,
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupSessionStorage: 'i18nextLng',
  caches: ['localStorage'],
  excludeCacheFor: ['cimode'],
  convertDetectedLanguage: (a) => a,
});
class ub {
  constructor(n) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.type = 'languageDetector'), (this.detectors = {}), this.init(n, r);
  }
  init() {
    let n =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : { languageUtils: {} },
      r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    (this.services = n),
      (this.options = SE(r, this.options || {}, _E())),
      typeof this.options.convertDetectedLanguage == 'string' &&
        this.options.convertDetectedLanguage.indexOf('15897') > -1 &&
        (this.options.convertDetectedLanguage = (o) => o.replace('-', '_')),
      this.options.lookupFromUrlIndex &&
        (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
      (this.i18nOptions = l),
      this.addDetector(EE),
      this.addDetector(RE),
      this.addDetector(OE),
      this.addDetector(AE),
      this.addDetector(TE),
      this.addDetector(CE),
      this.addDetector(ME),
      this.addDetector(DE);
  }
  addDetector(n) {
    return (this.detectors[n.name] = n), this;
  }
  detect() {
    let n =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : this.options.order,
      r = [];
    return (
      n.forEach((l) => {
        if (this.detectors[l]) {
          let o = this.detectors[l].lookup(this.options);
          o && typeof o == 'string' && (o = [o]), o && (r = r.concat(o));
        }
      }),
      (r = r
        .filter((l) => l != null && !xE(l))
        .map((l) => this.options.convertDetectedLanguage(l))),
      this.services &&
      this.services.languageUtils &&
      this.services.languageUtils.getBestMatchFromCodes
        ? r
        : r.length > 0
          ? r[0]
          : null
    );
  }
  cacheUserLanguage(n) {
    let r =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : this.options.caches;
    r &&
      ((this.options.excludeCacheFor &&
        this.options.excludeCacheFor.indexOf(n) > -1) ||
        r.forEach((l) => {
          this.detectors[l] &&
            this.detectors[l].cacheUserLanguage(n, this.options);
        }));
  }
}
ub.type = 'languageDetector';
const NE = 'Uzbek. Bizning saytga xush kelibsiz',
  LE = 'Til',
  zE = { welcome: NE, language: LE },
  UE = 'Kiril. Bizning saytga xush kelibsiz',
  jE = 'Til',
  kE = { welcome: UE, language: jE },
  BE = 'Rus. Bizning saytga xush kelibsiz',
  HE = 'Til',
  qE = { welcome: BE, language: HE };
dt.use(ub)
  .use(dE)
  .init({
    resources: {
      uz: { translation: zE },
      ru: { translation: qE },
      ki: { translation: kE },
    },
    fallbackLng: 'uz',
    interpolation: { escapeValue: !1 },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });
function cb(a, n) {
  return function () {
    return a.apply(n, arguments);
  };
}
const { toString: GE } = Object.prototype,
  { getPrototypeOf: Gd } = Object,
  { iterator: nu, toStringTag: fb } = Symbol,
  au = ((a) => (n) => {
    const r = GE.call(n);
    return a[r] || (a[r] = r.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  mn = (a) => ((a = a.toLowerCase()), (n) => au(n) === a),
  iu = (a) => (n) => typeof n === a,
  { isArray: Mr } = Array,
  Ql = iu('undefined');
function PE(a) {
  return (
    a !== null &&
    !Ql(a) &&
    a.constructor !== null &&
    !Ql(a.constructor) &&
    _t(a.constructor.isBuffer) &&
    a.constructor.isBuffer(a)
  );
}
const db = mn('ArrayBuffer');
function VE(a) {
  let n;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (n = ArrayBuffer.isView(a))
      : (n = a && a.buffer && db(a.buffer)),
    n
  );
}
const QE = iu('string'),
  _t = iu('function'),
  hb = iu('number'),
  ru = (a) => a !== null && typeof a == 'object',
  YE = (a) => a === !0 || a === !1,
  Uo = (a) => {
    if (au(a) !== 'object') return !1;
    const n = Gd(a);
    return (
      (n === null ||
        n === Object.prototype ||
        Object.getPrototypeOf(n) === null) &&
      !(fb in a) &&
      !(nu in a)
    );
  },
  KE = mn('Date'),
  FE = mn('File'),
  XE = mn('Blob'),
  ZE = mn('FileList'),
  $E = (a) => ru(a) && _t(a.pipe),
  JE = (a) => {
    let n;
    return (
      a &&
      ((typeof FormData == 'function' && a instanceof FormData) ||
        (_t(a.append) &&
          ((n = au(a)) === 'formdata' ||
            (n === 'object' &&
              _t(a.toString) &&
              a.toString() === '[object FormData]'))))
    );
  },
  IE = mn('URLSearchParams'),
  [WE, eR, tR, nR] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(
    mn,
  ),
  aR = (a) =>
    a.trim ? a.trim() : a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function ts(a, n, { allOwnKeys: r = !1 } = {}) {
  if (a === null || typeof a > 'u') return;
  let l, o;
  if ((typeof a != 'object' && (a = [a]), Mr(a)))
    for (l = 0, o = a.length; l < o; l++) n.call(null, a[l], l, a);
  else {
    const c = r ? Object.getOwnPropertyNames(a) : Object.keys(a),
      d = c.length;
    let h;
    for (l = 0; l < d; l++) (h = c[l]), n.call(null, a[h], h, a);
  }
}
function pb(a, n) {
  n = n.toLowerCase();
  const r = Object.keys(a);
  let l = r.length,
    o;
  for (; l-- > 0; ) if (((o = r[l]), n === o.toLowerCase())) return o;
  return null;
}
const ai =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : global,
  mb = (a) => !Ql(a) && a !== ai;
function bd() {
  const { caseless: a } = (mb(this) && this) || {},
    n = {},
    r = (l, o) => {
      const c = (a && pb(n, o)) || o;
      Uo(n[c]) && Uo(l)
        ? (n[c] = bd(n[c], l))
        : Uo(l)
          ? (n[c] = bd({}, l))
          : Mr(l)
            ? (n[c] = l.slice())
            : (n[c] = l);
    };
  for (let l = 0, o = arguments.length; l < o; l++)
    arguments[l] && ts(arguments[l], r);
  return n;
}
const iR = (a, n, r, { allOwnKeys: l } = {}) => (
    ts(
      n,
      (o, c) => {
        r && _t(o) ? (a[c] = cb(o, r)) : (a[c] = o);
      },
      { allOwnKeys: l },
    ),
    a
  ),
  rR = (a) => (a.charCodeAt(0) === 65279 && (a = a.slice(1)), a),
  lR = (a, n, r, l) => {
    (a.prototype = Object.create(n.prototype, l)),
      (a.prototype.constructor = a),
      Object.defineProperty(a, 'super', { value: n.prototype }),
      r && Object.assign(a.prototype, r);
  },
  sR = (a, n, r, l) => {
    let o, c, d;
    const h = {};
    if (((n = n || {}), a == null)) return n;
    do {
      for (o = Object.getOwnPropertyNames(a), c = o.length; c-- > 0; )
        (d = o[c]), (!l || l(d, a, n)) && !h[d] && ((n[d] = a[d]), (h[d] = !0));
      a = r !== !1 && Gd(a);
    } while (a && (!r || r(a, n)) && a !== Object.prototype);
    return n;
  },
  oR = (a, n, r) => {
    (a = String(a)),
      (r === void 0 || r > a.length) && (r = a.length),
      (r -= n.length);
    const l = a.indexOf(n, r);
    return l !== -1 && l === r;
  },
  uR = (a) => {
    if (!a) return null;
    if (Mr(a)) return a;
    let n = a.length;
    if (!hb(n)) return null;
    const r = new Array(n);
    for (; n-- > 0; ) r[n] = a[n];
    return r;
  },
  cR = (
    (a) => (n) =>
      a && n instanceof a
  )(typeof Uint8Array < 'u' && Gd(Uint8Array)),
  fR = (a, n) => {
    const l = (a && a[nu]).call(a);
    let o;
    for (; (o = l.next()) && !o.done; ) {
      const c = o.value;
      n.call(a, c[0], c[1]);
    }
  },
  dR = (a, n) => {
    let r;
    const l = [];
    for (; (r = a.exec(n)) !== null; ) l.push(r);
    return l;
  },
  hR = mn('HTMLFormElement'),
  pR = (a) =>
    a.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (r, l, o) {
      return l.toUpperCase() + o;
    }),
  Py = (
    ({ hasOwnProperty: a }) =>
    (n, r) =>
      a.call(n, r)
  )(Object.prototype),
  mR = mn('RegExp'),
  gb = (a, n) => {
    const r = Object.getOwnPropertyDescriptors(a),
      l = {};
    ts(r, (o, c) => {
      let d;
      (d = n(o, c, a)) !== !1 && (l[c] = d || o);
    }),
      Object.defineProperties(a, l);
  },
  gR = (a) => {
    gb(a, (n, r) => {
      if (_t(a) && ['arguments', 'caller', 'callee'].indexOf(r) !== -1)
        return !1;
      const l = a[r];
      if (_t(l)) {
        if (((n.enumerable = !1), 'writable' in n)) {
          n.writable = !1;
          return;
        }
        n.set ||
          (n.set = () => {
            throw Error("Can not rewrite read-only method '" + r + "'");
          });
      }
    });
  },
  yR = (a, n) => {
    const r = {},
      l = (o) => {
        o.forEach((c) => {
          r[c] = !0;
        });
      };
    return Mr(a) ? l(a) : l(String(a).split(n)), r;
  },
  vR = () => {},
  bR = (a, n) => (a != null && Number.isFinite((a = +a)) ? a : n);
function SR(a) {
  return !!(a && _t(a.append) && a[fb] === 'FormData' && a[nu]);
}
const xR = (a) => {
    const n = new Array(10),
      r = (l, o) => {
        if (ru(l)) {
          if (n.indexOf(l) >= 0) return;
          if (!('toJSON' in l)) {
            n[o] = l;
            const c = Mr(l) ? [] : {};
            return (
              ts(l, (d, h) => {
                const m = r(d, o + 1);
                !Ql(m) && (c[h] = m);
              }),
              (n[o] = void 0),
              c
            );
          }
        }
        return l;
      };
    return r(a, 0);
  },
  wR = mn('AsyncFunction'),
  ER = (a) => a && (ru(a) || _t(a)) && _t(a.then) && _t(a.catch),
  yb = ((a, n) =>
    a
      ? setImmediate
      : n
        ? ((r, l) => (
            ai.addEventListener(
              'message',
              ({ source: o, data: c }) => {
                o === ai && c === r && l.length && l.shift()();
              },
              !1,
            ),
            (o) => {
              l.push(o), ai.postMessage(r, '*');
            }
          ))(`axios@${Math.random()}`, [])
        : (r) => setTimeout(r))(
    typeof setImmediate == 'function',
    _t(ai.postMessage),
  ),
  RR =
    typeof queueMicrotask < 'u'
      ? queueMicrotask.bind(ai)
      : (typeof process < 'u' && process.nextTick) || yb,
  OR = (a) => a != null && _t(a[nu]),
  Q = {
    isArray: Mr,
    isArrayBuffer: db,
    isBuffer: PE,
    isFormData: JE,
    isArrayBufferView: VE,
    isString: QE,
    isNumber: hb,
    isBoolean: YE,
    isObject: ru,
    isPlainObject: Uo,
    isReadableStream: WE,
    isRequest: eR,
    isResponse: tR,
    isHeaders: nR,
    isUndefined: Ql,
    isDate: KE,
    isFile: FE,
    isBlob: XE,
    isRegExp: mR,
    isFunction: _t,
    isStream: $E,
    isURLSearchParams: IE,
    isTypedArray: cR,
    isFileList: ZE,
    forEach: ts,
    merge: bd,
    extend: iR,
    trim: aR,
    stripBOM: rR,
    inherits: lR,
    toFlatObject: sR,
    kindOf: au,
    kindOfTest: mn,
    endsWith: oR,
    toArray: uR,
    forEachEntry: fR,
    matchAll: dR,
    isHTMLForm: hR,
    hasOwnProperty: Py,
    hasOwnProp: Py,
    reduceDescriptors: gb,
    freezeMethods: gR,
    toObjectSet: yR,
    toCamelCase: pR,
    noop: vR,
    toFiniteNumber: bR,
    findKey: pb,
    global: ai,
    isContextDefined: mb,
    isSpecCompliantForm: SR,
    toJSONObject: xR,
    isAsyncFn: wR,
    isThenable: ER,
    setImmediate: yb,
    asap: RR,
    isIterable: OR,
  };
function we(a, n, r, l, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = a),
    (this.name = 'AxiosError'),
    n && (this.code = n),
    r && (this.config = r),
    l && (this.request = l),
    o && ((this.response = o), (this.status = o.status ? o.status : null));
}
Q.inherits(we, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: Q.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const vb = we.prototype,
  bb = {};
[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach((a) => {
  bb[a] = { value: a };
});
Object.defineProperties(we, bb);
Object.defineProperty(vb, 'isAxiosError', { value: !0 });
we.from = (a, n, r, l, o, c) => {
  const d = Object.create(vb);
  return (
    Q.toFlatObject(
      a,
      d,
      function (m) {
        return m !== Error.prototype;
      },
      (h) => h !== 'isAxiosError',
    ),
    we.call(d, a.message, n, r, l, o),
    (d.cause = a),
    (d.name = a.name),
    c && Object.assign(d, c),
    d
  );
};
const AR = null;
function Sd(a) {
  return Q.isPlainObject(a) || Q.isArray(a);
}
function Sb(a) {
  return Q.endsWith(a, '[]') ? a.slice(0, -2) : a;
}
function Vy(a, n, r) {
  return a
    ? a
        .concat(n)
        .map(function (o, c) {
          return (o = Sb(o)), !r && c ? '[' + o + ']' : o;
        })
        .join(r ? '.' : '')
    : n;
}
function TR(a) {
  return Q.isArray(a) && !a.some(Sd);
}
const CR = Q.toFlatObject(Q, {}, null, function (n) {
  return /^is[A-Z]/.test(n);
});
function lu(a, n, r) {
  if (!Q.isObject(a)) throw new TypeError('target must be an object');
  (n = n || new FormData()),
    (r = Q.toFlatObject(
      r,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (x, R) {
        return !Q.isUndefined(R[x]);
      },
    ));
  const l = r.metaTokens,
    o = r.visitor || g,
    c = r.dots,
    d = r.indexes,
    m = (r.Blob || (typeof Blob < 'u' && Blob)) && Q.isSpecCompliantForm(n);
  if (!Q.isFunction(o)) throw new TypeError('visitor must be a function');
  function p(w) {
    if (w === null) return '';
    if (Q.isDate(w)) return w.toISOString();
    if (!m && Q.isBlob(w))
      throw new we('Blob is not supported. Use a Buffer instead.');
    return Q.isArrayBuffer(w) || Q.isTypedArray(w)
      ? m && typeof Blob == 'function'
        ? new Blob([w])
        : Buffer.from(w)
      : w;
  }
  function g(w, x, R) {
    let _ = w;
    if (w && !R && typeof w == 'object') {
      if (Q.endsWith(x, '{}'))
        (x = l ? x : x.slice(0, -2)), (w = JSON.stringify(w));
      else if (
        (Q.isArray(w) && TR(w)) ||
        ((Q.isFileList(w) || Q.endsWith(x, '[]')) && (_ = Q.toArray(w)))
      )
        return (
          (x = Sb(x)),
          _.forEach(function (L, q) {
            !(Q.isUndefined(L) || L === null) &&
              n.append(
                d === !0 ? Vy([x], q, c) : d === null ? x : x + '[]',
                p(L),
              );
          }),
          !1
        );
    }
    return Sd(w) ? !0 : (n.append(Vy(R, x, c), p(w)), !1);
  }
  const v = [],
    S = Object.assign(CR, {
      defaultVisitor: g,
      convertValue: p,
      isVisitable: Sd,
    });
  function E(w, x) {
    if (!Q.isUndefined(w)) {
      if (v.indexOf(w) !== -1)
        throw Error('Circular reference detected in ' + x.join('.'));
      v.push(w),
        Q.forEach(w, function (_, k) {
          (!(Q.isUndefined(_) || _ === null) &&
            o.call(n, _, Q.isString(k) ? k.trim() : k, x, S)) === !0 &&
            E(_, x ? x.concat(k) : [k]);
        }),
        v.pop();
    }
  }
  if (!Q.isObject(a)) throw new TypeError('data must be an object');
  return E(a), n;
}
function Qy(a) {
  const n = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0',
  };
  return encodeURIComponent(a).replace(/[!'()~]|%20|%00/g, function (l) {
    return n[l];
  });
}
function Pd(a, n) {
  (this._pairs = []), a && lu(a, this, n);
}
const xb = Pd.prototype;
xb.append = function (n, r) {
  this._pairs.push([n, r]);
};
xb.toString = function (n) {
  const r = n
    ? function (l) {
        return n.call(this, l, Qy);
      }
    : Qy;
  return this._pairs
    .map(function (o) {
      return r(o[0]) + '=' + r(o[1]);
    }, '')
    .join('&');
};
function MR(a) {
  return encodeURIComponent(a)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function wb(a, n, r) {
  if (!n) return a;
  const l = (r && r.encode) || MR;
  Q.isFunction(r) && (r = { serialize: r });
  const o = r && r.serialize;
  let c;
  if (
    (o
      ? (c = o(n, r))
      : (c = Q.isURLSearchParams(n) ? n.toString() : new Pd(n, r).toString(l)),
    c)
  ) {
    const d = a.indexOf('#');
    d !== -1 && (a = a.slice(0, d)),
      (a += (a.indexOf('?') === -1 ? '?' : '&') + c);
  }
  return a;
}
class Yy {
  constructor() {
    this.handlers = [];
  }
  use(n, r, l) {
    return (
      this.handlers.push({
        fulfilled: n,
        rejected: r,
        synchronous: l ? l.synchronous : !1,
        runWhen: l ? l.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(n) {
    this.handlers[n] && (this.handlers[n] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(n) {
    Q.forEach(this.handlers, function (l) {
      l !== null && n(l);
    });
  }
}
const Eb = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  DR = typeof URLSearchParams < 'u' ? URLSearchParams : Pd,
  _R = typeof FormData < 'u' ? FormData : null,
  NR = typeof Blob < 'u' ? Blob : null,
  LR = {
    isBrowser: !0,
    classes: { URLSearchParams: DR, FormData: _R, Blob: NR },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  Vd = typeof window < 'u' && typeof document < 'u',
  xd = (typeof navigator == 'object' && navigator) || void 0,
  zR =
    Vd &&
    (!xd || ['ReactNative', 'NativeScript', 'NS'].indexOf(xd.product) < 0),
  UR =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  jR = (Vd && window.location.href) || 'http://localhost',
  kR = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Vd,
        hasStandardBrowserEnv: zR,
        hasStandardBrowserWebWorkerEnv: UR,
        navigator: xd,
        origin: jR,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  yt = { ...kR, ...LR };
function BR(a, n) {
  return lu(
    a,
    new yt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (r, l, o, c) {
          return yt.isNode && Q.isBuffer(r)
            ? (this.append(l, r.toString('base64')), !1)
            : c.defaultVisitor.apply(this, arguments);
        },
      },
      n,
    ),
  );
}
function HR(a) {
  return Q.matchAll(/\w+|\[(\w*)]/g, a).map((n) =>
    n[0] === '[]' ? '' : n[1] || n[0],
  );
}
function qR(a) {
  const n = {},
    r = Object.keys(a);
  let l;
  const o = r.length;
  let c;
  for (l = 0; l < o; l++) (c = r[l]), (n[c] = a[c]);
  return n;
}
function Rb(a) {
  function n(r, l, o, c) {
    let d = r[c++];
    if (d === '__proto__') return !0;
    const h = Number.isFinite(+d),
      m = c >= r.length;
    return (
      (d = !d && Q.isArray(o) ? o.length : d),
      m
        ? (Q.hasOwnProp(o, d) ? (o[d] = [o[d], l]) : (o[d] = l), !h)
        : ((!o[d] || !Q.isObject(o[d])) && (o[d] = []),
          n(r, l, o[d], c) && Q.isArray(o[d]) && (o[d] = qR(o[d])),
          !h)
    );
  }
  if (Q.isFormData(a) && Q.isFunction(a.entries)) {
    const r = {};
    return (
      Q.forEachEntry(a, (l, o) => {
        n(HR(l), o, r, 0);
      }),
      r
    );
  }
  return null;
}
function GR(a, n, r) {
  if (Q.isString(a))
    try {
      return (n || JSON.parse)(a), Q.trim(a);
    } catch (l) {
      if (l.name !== 'SyntaxError') throw l;
    }
  return (r || JSON.stringify)(a);
}
const ns = {
  transitional: Eb,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function (n, r) {
      const l = r.getContentType() || '',
        o = l.indexOf('application/json') > -1,
        c = Q.isObject(n);
      if ((c && Q.isHTMLForm(n) && (n = new FormData(n)), Q.isFormData(n)))
        return o ? JSON.stringify(Rb(n)) : n;
      if (
        Q.isArrayBuffer(n) ||
        Q.isBuffer(n) ||
        Q.isStream(n) ||
        Q.isFile(n) ||
        Q.isBlob(n) ||
        Q.isReadableStream(n)
      )
        return n;
      if (Q.isArrayBufferView(n)) return n.buffer;
      if (Q.isURLSearchParams(n))
        return (
          r.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1,
          ),
          n.toString()
        );
      let h;
      if (c) {
        if (l.indexOf('application/x-www-form-urlencoded') > -1)
          return BR(n, this.formSerializer).toString();
        if ((h = Q.isFileList(n)) || l.indexOf('multipart/form-data') > -1) {
          const m = this.env && this.env.FormData;
          return lu(
            h ? { 'files[]': n } : n,
            m && new m(),
            this.formSerializer,
          );
        }
      }
      return c || o ? (r.setContentType('application/json', !1), GR(n)) : n;
    },
  ],
  transformResponse: [
    function (n) {
      const r = this.transitional || ns.transitional,
        l = r && r.forcedJSONParsing,
        o = this.responseType === 'json';
      if (Q.isResponse(n) || Q.isReadableStream(n)) return n;
      if (n && Q.isString(n) && ((l && !this.responseType) || o)) {
        const d = !(r && r.silentJSONParsing) && o;
        try {
          return JSON.parse(n);
        } catch (h) {
          if (d)
            throw h.name === 'SyntaxError'
              ? we.from(h, we.ERR_BAD_RESPONSE, this, null, this.response)
              : h;
        }
      }
      return n;
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: yt.classes.FormData, Blob: yt.classes.Blob },
  validateStatus: function (n) {
    return n >= 200 && n < 300;
  },
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': void 0,
    },
  },
};
Q.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (a) => {
  ns.headers[a] = {};
});
const PR = Q.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  VR = (a) => {
    const n = {};
    let r, l, o;
    return (
      a &&
        a
          .split(
            `
`,
          )
          .forEach(function (d) {
            (o = d.indexOf(':')),
              (r = d.substring(0, o).trim().toLowerCase()),
              (l = d.substring(o + 1).trim()),
              !(!r || (n[r] && PR[r])) &&
                (r === 'set-cookie'
                  ? n[r]
                    ? n[r].push(l)
                    : (n[r] = [l])
                  : (n[r] = n[r] ? n[r] + ', ' + l : l));
          }),
      n
    );
  },
  Ky = Symbol('internals');
function Ul(a) {
  return a && String(a).trim().toLowerCase();
}
function jo(a) {
  return a === !1 || a == null ? a : Q.isArray(a) ? a.map(jo) : String(a);
}
function QR(a) {
  const n = Object.create(null),
    r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let l;
  for (; (l = r.exec(a)); ) n[l[1]] = l[2];
  return n;
}
const YR = (a) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(a.trim());
function Gf(a, n, r, l, o) {
  if (Q.isFunction(l)) return l.call(this, n, r);
  if ((o && (n = r), !!Q.isString(n))) {
    if (Q.isString(l)) return n.indexOf(l) !== -1;
    if (Q.isRegExp(l)) return l.test(n);
  }
}
function KR(a) {
  return a
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (n, r, l) => r.toUpperCase() + l);
}
function FR(a, n) {
  const r = Q.toCamelCase(' ' + n);
  ['get', 'set', 'has'].forEach((l) => {
    Object.defineProperty(a, l + r, {
      value: function (o, c, d) {
        return this[l].call(this, n, o, c, d);
      },
      configurable: !0,
    });
  });
}
let Nt = class {
  constructor(n) {
    n && this.set(n);
  }
  set(n, r, l) {
    const o = this;
    function c(h, m, p) {
      const g = Ul(m);
      if (!g) throw new Error('header name must be a non-empty string');
      const v = Q.findKey(o, g);
      (!v || o[v] === void 0 || p === !0 || (p === void 0 && o[v] !== !1)) &&
        (o[v || m] = jo(h));
    }
    const d = (h, m) => Q.forEach(h, (p, g) => c(p, g, m));
    if (Q.isPlainObject(n) || n instanceof this.constructor) d(n, r);
    else if (Q.isString(n) && (n = n.trim()) && !YR(n)) d(VR(n), r);
    else if (Q.isObject(n) && Q.isIterable(n)) {
      let h = {},
        m,
        p;
      for (const g of n) {
        if (!Q.isArray(g))
          throw TypeError('Object iterator must return a key-value pair');
        h[(p = g[0])] = (m = h[p])
          ? Q.isArray(m)
            ? [...m, g[1]]
            : [m, g[1]]
          : g[1];
      }
      d(h, r);
    } else n != null && c(r, n, l);
    return this;
  }
  get(n, r) {
    if (((n = Ul(n)), n)) {
      const l = Q.findKey(this, n);
      if (l) {
        const o = this[l];
        if (!r) return o;
        if (r === !0) return QR(o);
        if (Q.isFunction(r)) return r.call(this, o, l);
        if (Q.isRegExp(r)) return r.exec(o);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(n, r) {
    if (((n = Ul(n)), n)) {
      const l = Q.findKey(this, n);
      return !!(l && this[l] !== void 0 && (!r || Gf(this, this[l], l, r)));
    }
    return !1;
  }
  delete(n, r) {
    const l = this;
    let o = !1;
    function c(d) {
      if (((d = Ul(d)), d)) {
        const h = Q.findKey(l, d);
        h && (!r || Gf(l, l[h], h, r)) && (delete l[h], (o = !0));
      }
    }
    return Q.isArray(n) ? n.forEach(c) : c(n), o;
  }
  clear(n) {
    const r = Object.keys(this);
    let l = r.length,
      o = !1;
    for (; l--; ) {
      const c = r[l];
      (!n || Gf(this, this[c], c, n, !0)) && (delete this[c], (o = !0));
    }
    return o;
  }
  normalize(n) {
    const r = this,
      l = {};
    return (
      Q.forEach(this, (o, c) => {
        const d = Q.findKey(l, c);
        if (d) {
          (r[d] = jo(o)), delete r[c];
          return;
        }
        const h = n ? KR(c) : String(c).trim();
        h !== c && delete r[c], (r[h] = jo(o)), (l[h] = !0);
      }),
      this
    );
  }
  concat(...n) {
    return this.constructor.concat(this, ...n);
  }
  toJSON(n) {
    const r = Object.create(null);
    return (
      Q.forEach(this, (l, o) => {
        l != null && l !== !1 && (r[o] = n && Q.isArray(l) ? l.join(', ') : l);
      }),
      r
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([n, r]) => n + ': ' + r).join(`
`);
  }
  getSetCookie() {
    return this.get('set-cookie') || [];
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(n) {
    return n instanceof this ? n : new this(n);
  }
  static concat(n, ...r) {
    const l = new this(n);
    return r.forEach((o) => l.set(o)), l;
  }
  static accessor(n) {
    const l = (this[Ky] = this[Ky] = { accessors: {} }).accessors,
      o = this.prototype;
    function c(d) {
      const h = Ul(d);
      l[h] || (FR(o, d), (l[h] = !0));
    }
    return Q.isArray(n) ? n.forEach(c) : c(n), this;
  }
};
Nt.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);
Q.reduceDescriptors(Nt.prototype, ({ value: a }, n) => {
  let r = n[0].toUpperCase() + n.slice(1);
  return {
    get: () => a,
    set(l) {
      this[r] = l;
    },
  };
});
Q.freezeMethods(Nt);
function Pf(a, n) {
  const r = this || ns,
    l = n || r,
    o = Nt.from(l.headers);
  let c = l.data;
  return (
    Q.forEach(a, function (h) {
      c = h.call(r, c, o.normalize(), n ? n.status : void 0);
    }),
    o.normalize(),
    c
  );
}
function Ob(a) {
  return !!(a && a.__CANCEL__);
}
function Dr(a, n, r) {
  we.call(this, a ?? 'canceled', we.ERR_CANCELED, n, r),
    (this.name = 'CanceledError');
}
Q.inherits(Dr, we, { __CANCEL__: !0 });
function Ab(a, n, r) {
  const l = r.config.validateStatus;
  !r.status || !l || l(r.status)
    ? a(r)
    : n(
        new we(
          'Request failed with status code ' + r.status,
          [we.ERR_BAD_REQUEST, we.ERR_BAD_RESPONSE][
            Math.floor(r.status / 100) - 4
          ],
          r.config,
          r.request,
          r,
        ),
      );
}
function XR(a) {
  const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(a);
  return (n && n[1]) || '';
}
function ZR(a, n) {
  a = a || 10;
  const r = new Array(a),
    l = new Array(a);
  let o = 0,
    c = 0,
    d;
  return (
    (n = n !== void 0 ? n : 1e3),
    function (m) {
      const p = Date.now(),
        g = l[c];
      d || (d = p), (r[o] = m), (l[o] = p);
      let v = c,
        S = 0;
      for (; v !== o; ) (S += r[v++]), (v = v % a);
      if (((o = (o + 1) % a), o === c && (c = (c + 1) % a), p - d < n)) return;
      const E = g && p - g;
      return E ? Math.round((S * 1e3) / E) : void 0;
    }
  );
}
function $R(a, n) {
  let r = 0,
    l = 1e3 / n,
    o,
    c;
  const d = (p, g = Date.now()) => {
    (r = g), (o = null), c && (clearTimeout(c), (c = null)), a.apply(null, p);
  };
  return [
    (...p) => {
      const g = Date.now(),
        v = g - r;
      v >= l
        ? d(p, g)
        : ((o = p),
          c ||
            (c = setTimeout(() => {
              (c = null), d(o);
            }, l - v)));
    },
    () => o && d(o),
  ];
}
const Fo = (a, n, r = 3) => {
    let l = 0;
    const o = ZR(50, 250);
    return $R((c) => {
      const d = c.loaded,
        h = c.lengthComputable ? c.total : void 0,
        m = d - l,
        p = o(m),
        g = d <= h;
      l = d;
      const v = {
        loaded: d,
        total: h,
        progress: h ? d / h : void 0,
        bytes: m,
        rate: p || void 0,
        estimated: p && h && g ? (h - d) / p : void 0,
        event: c,
        lengthComputable: h != null,
        [n ? 'download' : 'upload']: !0,
      };
      a(v);
    }, r);
  },
  Fy = (a, n) => {
    const r = a != null;
    return [(l) => n[0]({ lengthComputable: r, total: a, loaded: l }), n[1]];
  },
  Xy =
    (a) =>
    (...n) =>
      Q.asap(() => a(...n)),
  JR = yt.hasStandardBrowserEnv
    ? ((a, n) => (r) => (
        (r = new URL(r, yt.origin)),
        a.protocol === r.protocol &&
          a.host === r.host &&
          (n || a.port === r.port)
      ))(
        new URL(yt.origin),
        yt.navigator && /(msie|trident)/i.test(yt.navigator.userAgent),
      )
    : () => !0,
  IR = yt.hasStandardBrowserEnv
    ? {
        write(a, n, r, l, o, c) {
          const d = [a + '=' + encodeURIComponent(n)];
          Q.isNumber(r) && d.push('expires=' + new Date(r).toGMTString()),
            Q.isString(l) && d.push('path=' + l),
            Q.isString(o) && d.push('domain=' + o),
            c === !0 && d.push('secure'),
            (document.cookie = d.join('; '));
        },
        read(a) {
          const n = document.cookie.match(
            new RegExp('(^|;\\s*)(' + a + ')=([^;]*)'),
          );
          return n ? decodeURIComponent(n[3]) : null;
        },
        remove(a) {
          this.write(a, '', Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function WR(a) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(a);
}
function eO(a, n) {
  return n ? a.replace(/\/?\/$/, '') + '/' + n.replace(/^\/+/, '') : a;
}
function Tb(a, n, r) {
  let l = !WR(n);
  return a && (l || r == !1) ? eO(a, n) : n;
}
const Zy = (a) => (a instanceof Nt ? { ...a } : a);
function mi(a, n) {
  n = n || {};
  const r = {};
  function l(p, g, v, S) {
    return Q.isPlainObject(p) && Q.isPlainObject(g)
      ? Q.merge.call({ caseless: S }, p, g)
      : Q.isPlainObject(g)
        ? Q.merge({}, g)
        : Q.isArray(g)
          ? g.slice()
          : g;
  }
  function o(p, g, v, S) {
    if (Q.isUndefined(g)) {
      if (!Q.isUndefined(p)) return l(void 0, p, v, S);
    } else return l(p, g, v, S);
  }
  function c(p, g) {
    if (!Q.isUndefined(g)) return l(void 0, g);
  }
  function d(p, g) {
    if (Q.isUndefined(g)) {
      if (!Q.isUndefined(p)) return l(void 0, p);
    } else return l(void 0, g);
  }
  function h(p, g, v) {
    if (v in n) return l(p, g);
    if (v in a) return l(void 0, p);
  }
  const m = {
    url: c,
    method: c,
    data: c,
    baseURL: d,
    transformRequest: d,
    transformResponse: d,
    paramsSerializer: d,
    timeout: d,
    timeoutMessage: d,
    withCredentials: d,
    withXSRFToken: d,
    adapter: d,
    responseType: d,
    xsrfCookieName: d,
    xsrfHeaderName: d,
    onUploadProgress: d,
    onDownloadProgress: d,
    decompress: d,
    maxContentLength: d,
    maxBodyLength: d,
    beforeRedirect: d,
    transport: d,
    httpAgent: d,
    httpsAgent: d,
    cancelToken: d,
    socketPath: d,
    responseEncoding: d,
    validateStatus: h,
    headers: (p, g, v) => o(Zy(p), Zy(g), v, !0),
  };
  return (
    Q.forEach(Object.keys(Object.assign({}, a, n)), function (g) {
      const v = m[g] || o,
        S = v(a[g], n[g], g);
      (Q.isUndefined(S) && v !== h) || (r[g] = S);
    }),
    r
  );
}
const Cb = (a) => {
    const n = mi({}, a);
    let {
      data: r,
      withXSRFToken: l,
      xsrfHeaderName: o,
      xsrfCookieName: c,
      headers: d,
      auth: h,
    } = n;
    (n.headers = d = Nt.from(d)),
      (n.url = wb(
        Tb(n.baseURL, n.url, n.allowAbsoluteUrls),
        a.params,
        a.paramsSerializer,
      )),
      h &&
        d.set(
          'Authorization',
          'Basic ' +
            btoa(
              (h.username || '') +
                ':' +
                (h.password ? unescape(encodeURIComponent(h.password)) : ''),
            ),
        );
    let m;
    if (Q.isFormData(r)) {
      if (yt.hasStandardBrowserEnv || yt.hasStandardBrowserWebWorkerEnv)
        d.setContentType(void 0);
      else if ((m = d.getContentType()) !== !1) {
        const [p, ...g] = m
          ? m
              .split(';')
              .map((v) => v.trim())
              .filter(Boolean)
          : [];
        d.setContentType([p || 'multipart/form-data', ...g].join('; '));
      }
    }
    if (
      yt.hasStandardBrowserEnv &&
      (l && Q.isFunction(l) && (l = l(n)), l || (l !== !1 && JR(n.url)))
    ) {
      const p = o && c && IR.read(c);
      p && d.set(o, p);
    }
    return n;
  },
  tO = typeof XMLHttpRequest < 'u',
  nO =
    tO &&
    function (a) {
      return new Promise(function (r, l) {
        const o = Cb(a);
        let c = o.data;
        const d = Nt.from(o.headers).normalize();
        let { responseType: h, onUploadProgress: m, onDownloadProgress: p } = o,
          g,
          v,
          S,
          E,
          w;
        function x() {
          E && E(),
            w && w(),
            o.cancelToken && o.cancelToken.unsubscribe(g),
            o.signal && o.signal.removeEventListener('abort', g);
        }
        let R = new XMLHttpRequest();
        R.open(o.method.toUpperCase(), o.url, !0), (R.timeout = o.timeout);
        function _() {
          if (!R) return;
          const L = Nt.from(
              'getAllResponseHeaders' in R && R.getAllResponseHeaders(),
            ),
            B = {
              data:
                !h || h === 'text' || h === 'json'
                  ? R.responseText
                  : R.response,
              status: R.status,
              statusText: R.statusText,
              headers: L,
              config: a,
              request: R,
            };
          Ab(
            function (Z) {
              r(Z), x();
            },
            function (Z) {
              l(Z), x();
            },
            B,
          ),
            (R = null);
        }
        'onloadend' in R
          ? (R.onloadend = _)
          : (R.onreadystatechange = function () {
              !R ||
                R.readyState !== 4 ||
                (R.status === 0 &&
                  !(R.responseURL && R.responseURL.indexOf('file:') === 0)) ||
                setTimeout(_);
            }),
          (R.onabort = function () {
            R &&
              (l(new we('Request aborted', we.ECONNABORTED, a, R)), (R = null));
          }),
          (R.onerror = function () {
            l(new we('Network Error', we.ERR_NETWORK, a, R)), (R = null);
          }),
          (R.ontimeout = function () {
            let q = o.timeout
              ? 'timeout of ' + o.timeout + 'ms exceeded'
              : 'timeout exceeded';
            const B = o.transitional || Eb;
            o.timeoutErrorMessage && (q = o.timeoutErrorMessage),
              l(
                new we(
                  q,
                  B.clarifyTimeoutError ? we.ETIMEDOUT : we.ECONNABORTED,
                  a,
                  R,
                ),
              ),
              (R = null);
          }),
          c === void 0 && d.setContentType(null),
          'setRequestHeader' in R &&
            Q.forEach(d.toJSON(), function (q, B) {
              R.setRequestHeader(B, q);
            }),
          Q.isUndefined(o.withCredentials) ||
            (R.withCredentials = !!o.withCredentials),
          h && h !== 'json' && (R.responseType = o.responseType),
          p && (([S, w] = Fo(p, !0)), R.addEventListener('progress', S)),
          m &&
            R.upload &&
            (([v, E] = Fo(m)),
            R.upload.addEventListener('progress', v),
            R.upload.addEventListener('loadend', E)),
          (o.cancelToken || o.signal) &&
            ((g = (L) => {
              R &&
                (l(!L || L.type ? new Dr(null, a, R) : L),
                R.abort(),
                (R = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(g),
            o.signal &&
              (o.signal.aborted ? g() : o.signal.addEventListener('abort', g)));
        const k = XR(o.url);
        if (k && yt.protocols.indexOf(k) === -1) {
          l(new we('Unsupported protocol ' + k + ':', we.ERR_BAD_REQUEST, a));
          return;
        }
        R.send(c || null);
      });
    },
  aO = (a, n) => {
    const { length: r } = (a = a ? a.filter(Boolean) : []);
    if (n || r) {
      let l = new AbortController(),
        o;
      const c = function (p) {
        if (!o) {
          (o = !0), h();
          const g = p instanceof Error ? p : this.reason;
          l.abort(
            g instanceof we ? g : new Dr(g instanceof Error ? g.message : g),
          );
        }
      };
      let d =
        n &&
        setTimeout(() => {
          (d = null), c(new we(`timeout ${n} of ms exceeded`, we.ETIMEDOUT));
        }, n);
      const h = () => {
        a &&
          (d && clearTimeout(d),
          (d = null),
          a.forEach((p) => {
            p.unsubscribe
              ? p.unsubscribe(c)
              : p.removeEventListener('abort', c);
          }),
          (a = null));
      };
      a.forEach((p) => p.addEventListener('abort', c));
      const { signal: m } = l;
      return (m.unsubscribe = () => Q.asap(h)), m;
    }
  },
  iO = function* (a, n) {
    let r = a.byteLength;
    if (r < n) {
      yield a;
      return;
    }
    let l = 0,
      o;
    for (; l < r; ) (o = l + n), yield a.slice(l, o), (l = o);
  },
  rO = async function* (a, n) {
    for await (const r of lO(a)) yield* iO(r, n);
  },
  lO = async function* (a) {
    if (a[Symbol.asyncIterator]) {
      yield* a;
      return;
    }
    const n = a.getReader();
    try {
      for (;;) {
        const { done: r, value: l } = await n.read();
        if (r) break;
        yield l;
      }
    } finally {
      await n.cancel();
    }
  },
  $y = (a, n, r, l) => {
    const o = rO(a, n);
    let c = 0,
      d,
      h = (m) => {
        d || ((d = !0), l && l(m));
      };
    return new ReadableStream(
      {
        async pull(m) {
          try {
            const { done: p, value: g } = await o.next();
            if (p) {
              h(), m.close();
              return;
            }
            let v = g.byteLength;
            if (r) {
              let S = (c += v);
              r(S);
            }
            m.enqueue(new Uint8Array(g));
          } catch (p) {
            throw (h(p), p);
          }
        },
        cancel(m) {
          return h(m), o.return();
        },
      },
      { highWaterMark: 2 },
    );
  },
  su =
    typeof fetch == 'function' &&
    typeof Request == 'function' &&
    typeof Response == 'function',
  Mb = su && typeof ReadableStream == 'function',
  sO =
    su &&
    (typeof TextEncoder == 'function'
      ? (
          (a) => (n) =>
            a.encode(n)
        )(new TextEncoder())
      : async (a) => new Uint8Array(await new Response(a).arrayBuffer())),
  Db = (a, ...n) => {
    try {
      return !!a(...n);
    } catch {
      return !1;
    }
  },
  oO =
    Mb &&
    Db(() => {
      let a = !1;
      const n = new Request(yt.origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          return (a = !0), 'half';
        },
      }).headers.has('Content-Type');
      return a && !n;
    }),
  Jy = 64 * 1024,
  wd = Mb && Db(() => Q.isReadableStream(new Response('').body)),
  Xo = { stream: wd && ((a) => a.body) };
su &&
  ((a) => {
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((n) => {
      !Xo[n] &&
        (Xo[n] = Q.isFunction(a[n])
          ? (r) => r[n]()
          : (r, l) => {
              throw new we(
                `Response type '${n}' is not supported`,
                we.ERR_NOT_SUPPORT,
                l,
              );
            });
    });
  })(new Response());
const uO = async (a) => {
    if (a == null) return 0;
    if (Q.isBlob(a)) return a.size;
    if (Q.isSpecCompliantForm(a))
      return (
        await new Request(yt.origin, { method: 'POST', body: a }).arrayBuffer()
      ).byteLength;
    if (Q.isArrayBufferView(a) || Q.isArrayBuffer(a)) return a.byteLength;
    if ((Q.isURLSearchParams(a) && (a = a + ''), Q.isString(a)))
      return (await sO(a)).byteLength;
  },
  cO = async (a, n) => {
    const r = Q.toFiniteNumber(a.getContentLength());
    return r ?? uO(n);
  },
  fO =
    su &&
    (async (a) => {
      let {
        url: n,
        method: r,
        data: l,
        signal: o,
        cancelToken: c,
        timeout: d,
        onDownloadProgress: h,
        onUploadProgress: m,
        responseType: p,
        headers: g,
        withCredentials: v = 'same-origin',
        fetchOptions: S,
      } = Cb(a);
      p = p ? (p + '').toLowerCase() : 'text';
      let E = aO([o, c && c.toAbortSignal()], d),
        w;
      const x =
        E &&
        E.unsubscribe &&
        (() => {
          E.unsubscribe();
        });
      let R;
      try {
        if (
          m &&
          oO &&
          r !== 'get' &&
          r !== 'head' &&
          (R = await cO(g, l)) !== 0
        ) {
          let B = new Request(n, { method: 'POST', body: l, duplex: 'half' }),
            J;
          if (
            (Q.isFormData(l) &&
              (J = B.headers.get('content-type')) &&
              g.setContentType(J),
            B.body)
          ) {
            const [Z, G] = Fy(R, Fo(Xy(m)));
            l = $y(B.body, Jy, Z, G);
          }
        }
        Q.isString(v) || (v = v ? 'include' : 'omit');
        const _ = 'credentials' in Request.prototype;
        w = new Request(n, {
          ...S,
          signal: E,
          method: r.toUpperCase(),
          headers: g.normalize().toJSON(),
          body: l,
          duplex: 'half',
          credentials: _ ? v : void 0,
        });
        let k = await fetch(w);
        const L = wd && (p === 'stream' || p === 'response');
        if (wd && (h || (L && x))) {
          const B = {};
          ['status', 'statusText', 'headers'].forEach((W) => {
            B[W] = k[W];
          });
          const J = Q.toFiniteNumber(k.headers.get('content-length')),
            [Z, G] = (h && Fy(J, Fo(Xy(h), !0))) || [];
          k = new Response(
            $y(k.body, Jy, Z, () => {
              G && G(), x && x();
            }),
            B,
          );
        }
        p = p || 'text';
        let q = await Xo[Q.findKey(Xo, p) || 'text'](k, a);
        return (
          !L && x && x(),
          await new Promise((B, J) => {
            Ab(B, J, {
              data: q,
              headers: Nt.from(k.headers),
              status: k.status,
              statusText: k.statusText,
              config: a,
              request: w,
            });
          })
        );
      } catch (_) {
        throw (
          (x && x(),
          _ && _.name === 'TypeError' && /Load failed|fetch/i.test(_.message)
            ? Object.assign(new we('Network Error', we.ERR_NETWORK, a, w), {
                cause: _.cause || _,
              })
            : we.from(_, _ && _.code, a, w))
        );
      }
    }),
  Ed = { http: AR, xhr: nO, fetch: fO };
Q.forEach(Ed, (a, n) => {
  if (a) {
    try {
      Object.defineProperty(a, 'name', { value: n });
    } catch {}
    Object.defineProperty(a, 'adapterName', { value: n });
  }
});
const Iy = (a) => `- ${a}`,
  dO = (a) => Q.isFunction(a) || a === null || a === !1,
  _b = {
    getAdapter: (a) => {
      a = Q.isArray(a) ? a : [a];
      const { length: n } = a;
      let r, l;
      const o = {};
      for (let c = 0; c < n; c++) {
        r = a[c];
        let d;
        if (
          ((l = r),
          !dO(r) && ((l = Ed[(d = String(r)).toLowerCase()]), l === void 0))
        )
          throw new we(`Unknown adapter '${d}'`);
        if (l) break;
        o[d || '#' + c] = l;
      }
      if (!l) {
        const c = Object.entries(o).map(
          ([h, m]) =>
            `adapter ${h} ` +
            (m === !1
              ? 'is not supported by the environment'
              : 'is not available in the build'),
        );
        let d = n
          ? c.length > 1
            ? `since :
` +
              c.map(Iy).join(`
`)
            : ' ' + Iy(c[0])
          : 'as no adapter specified';
        throw new we(
          'There is no suitable adapter to dispatch the request ' + d,
          'ERR_NOT_SUPPORT',
        );
      }
      return l;
    },
    adapters: Ed,
  };
function Vf(a) {
  if (
    (a.cancelToken && a.cancelToken.throwIfRequested(),
    a.signal && a.signal.aborted)
  )
    throw new Dr(null, a);
}
function Wy(a) {
  return (
    Vf(a),
    (a.headers = Nt.from(a.headers)),
    (a.data = Pf.call(a, a.transformRequest)),
    ['post', 'put', 'patch'].indexOf(a.method) !== -1 &&
      a.headers.setContentType('application/x-www-form-urlencoded', !1),
    _b
      .getAdapter(a.adapter || ns.adapter)(a)
      .then(
        function (l) {
          return (
            Vf(a),
            (l.data = Pf.call(a, a.transformResponse, l)),
            (l.headers = Nt.from(l.headers)),
            l
          );
        },
        function (l) {
          return (
            Ob(l) ||
              (Vf(a),
              l &&
                l.response &&
                ((l.response.data = Pf.call(
                  a,
                  a.transformResponse,
                  l.response,
                )),
                (l.response.headers = Nt.from(l.response.headers)))),
            Promise.reject(l)
          );
        },
      )
  );
}
const Nb = '1.9.0',
  ou = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (a, n) => {
    ou[a] = function (l) {
      return typeof l === a || 'a' + (n < 1 ? 'n ' : ' ') + a;
    };
  },
);
const ev = {};
ou.transitional = function (n, r, l) {
  function o(c, d) {
    return (
      '[Axios v' +
      Nb +
      "] Transitional option '" +
      c +
      "'" +
      d +
      (l ? '. ' + l : '')
    );
  }
  return (c, d, h) => {
    if (n === !1)
      throw new we(
        o(d, ' has been removed' + (r ? ' in ' + r : '')),
        we.ERR_DEPRECATED,
      );
    return (
      r &&
        !ev[d] &&
        ((ev[d] = !0),
        console.warn(
          o(
            d,
            ' has been deprecated since v' +
              r +
              ' and will be removed in the near future',
          ),
        )),
      n ? n(c, d, h) : !0
    );
  };
};
ou.spelling = function (n) {
  return (r, l) => (console.warn(`${l} is likely a misspelling of ${n}`), !0);
};
function hO(a, n, r) {
  if (typeof a != 'object')
    throw new we('options must be an object', we.ERR_BAD_OPTION_VALUE);
  const l = Object.keys(a);
  let o = l.length;
  for (; o-- > 0; ) {
    const c = l[o],
      d = n[c];
    if (d) {
      const h = a[c],
        m = h === void 0 || d(h, c, a);
      if (m !== !0)
        throw new we('option ' + c + ' must be ' + m, we.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0) throw new we('Unknown option ' + c, we.ERR_BAD_OPTION);
  }
}
const ko = { assertOptions: hO, validators: ou },
  xn = ko.validators;
let hi = class {
  constructor(n) {
    (this.defaults = n || {}),
      (this.interceptors = { request: new Yy(), response: new Yy() });
  }
  async request(n, r) {
    try {
      return await this._request(n, r);
    } catch (l) {
      if (l instanceof Error) {
        let o = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(o)
          : (o = new Error());
        const c = o.stack ? o.stack.replace(/^.+\n/, '') : '';
        try {
          l.stack
            ? c &&
              !String(l.stack).endsWith(c.replace(/^.+\n.+\n/, '')) &&
              (l.stack +=
                `
` + c)
            : (l.stack = c);
        } catch {}
      }
      throw l;
    }
  }
  _request(n, r) {
    typeof n == 'string' ? ((r = r || {}), (r.url = n)) : (r = n || {}),
      (r = mi(this.defaults, r));
    const { transitional: l, paramsSerializer: o, headers: c } = r;
    l !== void 0 &&
      ko.assertOptions(
        l,
        {
          silentJSONParsing: xn.transitional(xn.boolean),
          forcedJSONParsing: xn.transitional(xn.boolean),
          clarifyTimeoutError: xn.transitional(xn.boolean),
        },
        !1,
      ),
      o != null &&
        (Q.isFunction(o)
          ? (r.paramsSerializer = { serialize: o })
          : ko.assertOptions(
              o,
              { encode: xn.function, serialize: xn.function },
              !0,
            )),
      r.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (r.allowAbsoluteUrls = !0)),
      ko.assertOptions(
        r,
        {
          baseUrl: xn.spelling('baseURL'),
          withXsrfToken: xn.spelling('withXSRFToken'),
        },
        !0,
      ),
      (r.method = (r.method || this.defaults.method || 'get').toLowerCase());
    let d = c && Q.merge(c.common, c[r.method]);
    c &&
      Q.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        (w) => {
          delete c[w];
        },
      ),
      (r.headers = Nt.concat(d, c));
    const h = [];
    let m = !0;
    this.interceptors.request.forEach(function (x) {
      (typeof x.runWhen == 'function' && x.runWhen(r) === !1) ||
        ((m = m && x.synchronous), h.unshift(x.fulfilled, x.rejected));
    });
    const p = [];
    this.interceptors.response.forEach(function (x) {
      p.push(x.fulfilled, x.rejected);
    });
    let g,
      v = 0,
      S;
    if (!m) {
      const w = [Wy.bind(this), void 0];
      for (
        w.unshift.apply(w, h),
          w.push.apply(w, p),
          S = w.length,
          g = Promise.resolve(r);
        v < S;

      )
        g = g.then(w[v++], w[v++]);
      return g;
    }
    S = h.length;
    let E = r;
    for (v = 0; v < S; ) {
      const w = h[v++],
        x = h[v++];
      try {
        E = w(E);
      } catch (R) {
        x.call(this, R);
        break;
      }
    }
    try {
      g = Wy.call(this, E);
    } catch (w) {
      return Promise.reject(w);
    }
    for (v = 0, S = p.length; v < S; ) g = g.then(p[v++], p[v++]);
    return g;
  }
  getUri(n) {
    n = mi(this.defaults, n);
    const r = Tb(n.baseURL, n.url, n.allowAbsoluteUrls);
    return wb(r, n.params, n.paramsSerializer);
  }
};
Q.forEach(['delete', 'get', 'head', 'options'], function (n) {
  hi.prototype[n] = function (r, l) {
    return this.request(
      mi(l || {}, { method: n, url: r, data: (l || {}).data }),
    );
  };
});
Q.forEach(['post', 'put', 'patch'], function (n) {
  function r(l) {
    return function (c, d, h) {
      return this.request(
        mi(h || {}, {
          method: n,
          headers: l ? { 'Content-Type': 'multipart/form-data' } : {},
          url: c,
          data: d,
        }),
      );
    };
  }
  (hi.prototype[n] = r()), (hi.prototype[n + 'Form'] = r(!0));
});
let pO = class Lb {
  constructor(n) {
    if (typeof n != 'function')
      throw new TypeError('executor must be a function.');
    let r;
    this.promise = new Promise(function (c) {
      r = c;
    });
    const l = this;
    this.promise.then((o) => {
      if (!l._listeners) return;
      let c = l._listeners.length;
      for (; c-- > 0; ) l._listeners[c](o);
      l._listeners = null;
    }),
      (this.promise.then = (o) => {
        let c;
        const d = new Promise((h) => {
          l.subscribe(h), (c = h);
        }).then(o);
        return (
          (d.cancel = function () {
            l.unsubscribe(c);
          }),
          d
        );
      }),
      n(function (c, d, h) {
        l.reason || ((l.reason = new Dr(c, d, h)), r(l.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(n) {
    if (this.reason) {
      n(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(n) : (this._listeners = [n]);
  }
  unsubscribe(n) {
    if (!this._listeners) return;
    const r = this._listeners.indexOf(n);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const n = new AbortController(),
      r = (l) => {
        n.abort(l);
      };
    return (
      this.subscribe(r),
      (n.signal.unsubscribe = () => this.unsubscribe(r)),
      n.signal
    );
  }
  static source() {
    let n;
    return {
      token: new Lb(function (o) {
        n = o;
      }),
      cancel: n,
    };
  }
};
function mO(a) {
  return function (r) {
    return a.apply(null, r);
  };
}
function gO(a) {
  return Q.isObject(a) && a.isAxiosError === !0;
}
const Rd = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Rd).forEach(([a, n]) => {
  Rd[n] = a;
});
function zb(a) {
  const n = new hi(a),
    r = cb(hi.prototype.request, n);
  return (
    Q.extend(r, hi.prototype, n, { allOwnKeys: !0 }),
    Q.extend(r, n, null, { allOwnKeys: !0 }),
    (r.create = function (o) {
      return zb(mi(a, o));
    }),
    r
  );
}
const Ie = zb(ns);
Ie.Axios = hi;
Ie.CanceledError = Dr;
Ie.CancelToken = pO;
Ie.isCancel = Ob;
Ie.VERSION = Nb;
Ie.toFormData = lu;
Ie.AxiosError = we;
Ie.Cancel = Ie.CanceledError;
Ie.all = function (n) {
  return Promise.all(n);
};
Ie.spread = mO;
Ie.isAxiosError = gO;
Ie.mergeConfig = mi;
Ie.AxiosHeaders = Nt;
Ie.formToJSON = (a) => Rb(Q.isHTMLForm(a) ? new FormData(a) : a);
Ie.getAdapter = _b.getAdapter;
Ie.HttpStatusCode = Rd;
Ie.default = Ie;
const {
    Axios: _2,
    AxiosError: N2,
    CanceledError: L2,
    isCancel: z2,
    CancelToken: U2,
    VERSION: j2,
    all: k2,
    Cancel: B2,
    isAxiosError: H2,
    spread: q2,
    toFormData: G2,
    AxiosHeaders: P2,
    HttpStatusCode: V2,
    formToJSON: Q2,
    getAdapter: Y2,
    mergeConfig: K2,
  } = Ie,
  yO = 'https://jsonplaceholder.typicode.com',
  vO = '/posts/',
  Qd = Ie.create({ baseURL: yO, timeout: 1e4 });
Qd.interceptors.request.use(
  async (a) => {
    console.log(`API REQUEST to ${a.url}`, a);
    const n = dt.language;
    return (a.headers['Accept-Language'] = n), a;
  },
  (a) => Promise.reject(a),
);
Qd.interceptors.response.use(
  (a) => a,
  (a) => (console.error('API error:', a), Promise.reject(a)),
);
const bO = async (a) => await Qd.get(vO, { params: a });
var Bo = ((a) => ((a.UZ = 'uz'), (a.RU = 'ru'), (a.KI = 'ki'), a))(Bo || {});
function tv(a, n) {
  if (typeof a == 'function') return a(n);
  a != null && (a.current = n);
}
function uu(...a) {
  return (n) => {
    let r = !1;
    const l = a.map((o) => {
      const c = tv(o, n);
      return !r && typeof c == 'function' && (r = !0), c;
    });
    if (r)
      return () => {
        for (let o = 0; o < l.length; o++) {
          const c = l[o];
          typeof c == 'function' ? c() : tv(a[o], null);
        }
      };
  };
}
function Lt(...a) {
  return O.useCallback(uu(...a), a);
}
function Yl(a) {
  const n = xO(a),
    r = O.forwardRef((l, o) => {
      const { children: c, ...d } = l,
        h = O.Children.toArray(c),
        m = h.find(EO);
      if (m) {
        const p = m.props.children,
          g = h.map((v) =>
            v === m
              ? O.Children.count(p) > 1
                ? O.Children.only(null)
                : O.isValidElement(p)
                  ? p.props.children
                  : null
              : v,
          );
        return Y.jsx(n, {
          ...d,
          ref: o,
          children: O.isValidElement(p) ? O.cloneElement(p, void 0, g) : null,
        });
      }
      return Y.jsx(n, { ...d, ref: o, children: c });
    });
  return (r.displayName = `${a}.Slot`), r;
}
var SO = Yl('Slot');
function xO(a) {
  const n = O.forwardRef((r, l) => {
    const { children: o, ...c } = r;
    if (O.isValidElement(o)) {
      const d = OO(o),
        h = RO(c, o.props);
      return (
        o.type !== O.Fragment && (h.ref = l ? uu(l, d) : d),
        O.cloneElement(o, h)
      );
    }
    return O.Children.count(o) > 1 ? O.Children.only(null) : null;
  });
  return (n.displayName = `${a}.SlotClone`), n;
}
var wO = Symbol('radix.slottable');
function EO(a) {
  return (
    O.isValidElement(a) &&
    typeof a.type == 'function' &&
    '__radixId' in a.type &&
    a.type.__radixId === wO
  );
}
function RO(a, n) {
  const r = { ...n };
  for (const l in n) {
    const o = a[l],
      c = n[l];
    /^on[A-Z]/.test(l)
      ? o && c
        ? (r[l] = (...h) => {
            const m = c(...h);
            return o(...h), m;
          })
        : o && (r[l] = o)
      : l === 'style'
        ? (r[l] = { ...o, ...c })
        : l === 'className' && (r[l] = [o, c].filter(Boolean).join(' '));
  }
  return { ...a, ...r };
}
function OO(a) {
  var l, o;
  let n =
      (l = Object.getOwnPropertyDescriptor(a.props, 'ref')) == null
        ? void 0
        : l.get,
    r = n && 'isReactWarning' in n && n.isReactWarning;
  return r
    ? a.ref
    : ((n =
        (o = Object.getOwnPropertyDescriptor(a, 'ref')) == null
          ? void 0
          : o.get),
      (r = n && 'isReactWarning' in n && n.isReactWarning),
      r ? a.props.ref : a.props.ref || a.ref);
}
function Ub(a) {
  var n,
    r,
    l = '';
  if (typeof a == 'string' || typeof a == 'number') l += a;
  else if (typeof a == 'object')
    if (Array.isArray(a)) {
      var o = a.length;
      for (n = 0; n < o; n++)
        a[n] && (r = Ub(a[n])) && (l && (l += ' '), (l += r));
    } else for (r in a) a[r] && (l && (l += ' '), (l += r));
  return l;
}
function jb() {
  for (var a, n, r = 0, l = '', o = arguments.length; r < o; r++)
    (a = arguments[r]) && (n = Ub(a)) && (l && (l += ' '), (l += n));
  return l;
}
const nv = (a) => (typeof a == 'boolean' ? `${a}` : a === 0 ? '0' : a),
  av = jb,
  AO = (a, n) => (r) => {
    var l;
    if ((n == null ? void 0 : n.variants) == null)
      return av(
        a,
        r == null ? void 0 : r.class,
        r == null ? void 0 : r.className,
      );
    const { variants: o, defaultVariants: c } = n,
      d = Object.keys(o).map((p) => {
        const g = r == null ? void 0 : r[p],
          v = c == null ? void 0 : c[p];
        if (g === null) return null;
        const S = nv(g) || nv(v);
        return o[p][S];
      }),
      h =
        r &&
        Object.entries(r).reduce((p, g) => {
          let [v, S] = g;
          return S === void 0 || (p[v] = S), p;
        }, {}),
      m =
        n == null || (l = n.compoundVariants) === null || l === void 0
          ? void 0
          : l.reduce((p, g) => {
              let { class: v, className: S, ...E } = g;
              return Object.entries(E).every((w) => {
                let [x, R] = w;
                return Array.isArray(R)
                  ? R.includes({ ...c, ...h }[x])
                  : { ...c, ...h }[x] === R;
              })
                ? [...p, v, S]
                : p;
            }, []);
    return av(
      a,
      d,
      m,
      r == null ? void 0 : r.class,
      r == null ? void 0 : r.className,
    );
  },
  Yd = '-',
  TO = (a) => {
    const n = MO(a),
      { conflictingClassGroups: r, conflictingClassGroupModifiers: l } = a;
    return {
      getClassGroupId: (d) => {
        const h = d.split(Yd);
        return h[0] === '' && h.length !== 1 && h.shift(), kb(h, n) || CO(d);
      },
      getConflictingClassGroupIds: (d, h) => {
        const m = r[d] || [];
        return h && l[d] ? [...m, ...l[d]] : m;
      },
    };
  },
  kb = (a, n) => {
    var d;
    if (a.length === 0) return n.classGroupId;
    const r = a[0],
      l = n.nextPart.get(r),
      o = l ? kb(a.slice(1), l) : void 0;
    if (o) return o;
    if (n.validators.length === 0) return;
    const c = a.join(Yd);
    return (d = n.validators.find(({ validator: h }) => h(c))) == null
      ? void 0
      : d.classGroupId;
  },
  iv = /^\[(.+)\]$/,
  CO = (a) => {
    if (iv.test(a)) {
      const n = iv.exec(a)[1],
        r = n == null ? void 0 : n.substring(0, n.indexOf(':'));
      if (r) return 'arbitrary..' + r;
    }
  },
  MO = (a) => {
    const { theme: n, classGroups: r } = a,
      l = { nextPart: new Map(), validators: [] };
    for (const o in r) Od(r[o], l, o, n);
    return l;
  },
  Od = (a, n, r, l) => {
    a.forEach((o) => {
      if (typeof o == 'string') {
        const c = o === '' ? n : rv(n, o);
        c.classGroupId = r;
        return;
      }
      if (typeof o == 'function') {
        if (DO(o)) {
          Od(o(l), n, r, l);
          return;
        }
        n.validators.push({ validator: o, classGroupId: r });
        return;
      }
      Object.entries(o).forEach(([c, d]) => {
        Od(d, rv(n, c), r, l);
      });
    });
  },
  rv = (a, n) => {
    let r = a;
    return (
      n.split(Yd).forEach((l) => {
        r.nextPart.has(l) ||
          r.nextPart.set(l, { nextPart: new Map(), validators: [] }),
          (r = r.nextPart.get(l));
      }),
      r
    );
  },
  DO = (a) => a.isThemeGetter,
  _O = (a) => {
    if (a < 1) return { get: () => {}, set: () => {} };
    let n = 0,
      r = new Map(),
      l = new Map();
    const o = (c, d) => {
      r.set(c, d), n++, n > a && ((n = 0), (l = r), (r = new Map()));
    };
    return {
      get(c) {
        let d = r.get(c);
        if (d !== void 0) return d;
        if ((d = l.get(c)) !== void 0) return o(c, d), d;
      },
      set(c, d) {
        r.has(c) ? r.set(c, d) : o(c, d);
      },
    };
  },
  Ad = '!',
  Td = ':',
  NO = Td.length,
  LO = (a) => {
    const { prefix: n, experimentalParseClassName: r } = a;
    let l = (o) => {
      const c = [];
      let d = 0,
        h = 0,
        m = 0,
        p;
      for (let w = 0; w < o.length; w++) {
        let x = o[w];
        if (d === 0 && h === 0) {
          if (x === Td) {
            c.push(o.slice(m, w)), (m = w + NO);
            continue;
          }
          if (x === '/') {
            p = w;
            continue;
          }
        }
        x === '[' ? d++ : x === ']' ? d-- : x === '(' ? h++ : x === ')' && h--;
      }
      const g = c.length === 0 ? o : o.substring(m),
        v = zO(g),
        S = v !== g,
        E = p && p > m ? p - m : void 0;
      return {
        modifiers: c,
        hasImportantModifier: S,
        baseClassName: v,
        maybePostfixModifierPosition: E,
      };
    };
    if (n) {
      const o = n + Td,
        c = l;
      l = (d) =>
        d.startsWith(o)
          ? c(d.substring(o.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: d,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (r) {
      const o = l;
      l = (c) => r({ className: c, parseClassName: o });
    }
    return l;
  },
  zO = (a) =>
    a.endsWith(Ad)
      ? a.substring(0, a.length - 1)
      : a.startsWith(Ad)
        ? a.substring(1)
        : a,
  UO = (a) => {
    const n = Object.fromEntries(a.orderSensitiveModifiers.map((l) => [l, !0]));
    return (l) => {
      if (l.length <= 1) return l;
      const o = [];
      let c = [];
      return (
        l.forEach((d) => {
          d[0] === '[' || n[d] ? (o.push(...c.sort(), d), (c = [])) : c.push(d);
        }),
        o.push(...c.sort()),
        o
      );
    };
  },
  jO = (a) => ({
    cache: _O(a.cacheSize),
    parseClassName: LO(a),
    sortModifiers: UO(a),
    ...TO(a),
  }),
  kO = /\s+/,
  BO = (a, n) => {
    const {
        parseClassName: r,
        getClassGroupId: l,
        getConflictingClassGroupIds: o,
        sortModifiers: c,
      } = n,
      d = [],
      h = a.trim().split(kO);
    let m = '';
    for (let p = h.length - 1; p >= 0; p -= 1) {
      const g = h[p],
        {
          isExternal: v,
          modifiers: S,
          hasImportantModifier: E,
          baseClassName: w,
          maybePostfixModifierPosition: x,
        } = r(g);
      if (v) {
        m = g + (m.length > 0 ? ' ' + m : m);
        continue;
      }
      let R = !!x,
        _ = l(R ? w.substring(0, x) : w);
      if (!_) {
        if (!R) {
          m = g + (m.length > 0 ? ' ' + m : m);
          continue;
        }
        if (((_ = l(w)), !_)) {
          m = g + (m.length > 0 ? ' ' + m : m);
          continue;
        }
        R = !1;
      }
      const k = c(S).join(':'),
        L = E ? k + Ad : k,
        q = L + _;
      if (d.includes(q)) continue;
      d.push(q);
      const B = o(_, R);
      for (let J = 0; J < B.length; ++J) {
        const Z = B[J];
        d.push(L + Z);
      }
      m = g + (m.length > 0 ? ' ' + m : m);
    }
    return m;
  };
function HO() {
  let a = 0,
    n,
    r,
    l = '';
  for (; a < arguments.length; )
    (n = arguments[a++]) && (r = Bb(n)) && (l && (l += ' '), (l += r));
  return l;
}
const Bb = (a) => {
  if (typeof a == 'string') return a;
  let n,
    r = '';
  for (let l = 0; l < a.length; l++)
    a[l] && (n = Bb(a[l])) && (r && (r += ' '), (r += n));
  return r;
};
function qO(a, ...n) {
  let r,
    l,
    o,
    c = d;
  function d(m) {
    const p = n.reduce((g, v) => v(g), a());
    return (r = jO(p)), (l = r.cache.get), (o = r.cache.set), (c = h), h(m);
  }
  function h(m) {
    const p = l(m);
    if (p) return p;
    const g = BO(m, r);
    return o(m, g), g;
  }
  return function () {
    return c(HO.apply(null, arguments));
  };
}
const at = (a) => {
    const n = (r) => r[a] || [];
    return (n.isThemeGetter = !0), n;
  },
  Hb = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  qb = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  GO = /^\d+\/\d+$/,
  PO = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  VO =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  QO = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  YO = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  KO =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  or = (a) => GO.test(a),
  Oe = (a) => !!a && !Number.isNaN(Number(a)),
  Ea = (a) => !!a && Number.isInteger(Number(a)),
  Qf = (a) => a.endsWith('%') && Oe(a.slice(0, -1)),
  Kn = (a) => PO.test(a),
  FO = () => !0,
  XO = (a) => VO.test(a) && !QO.test(a),
  Gb = () => !1,
  ZO = (a) => YO.test(a),
  $O = (a) => KO.test(a),
  JO = (a) => !le(a) && !se(a),
  IO = (a) => _r(a, Qb, Gb),
  le = (a) => Hb.test(a),
  ni = (a) => _r(a, Yb, XO),
  Yf = (a) => _r(a, aA, Oe),
  lv = (a) => _r(a, Pb, Gb),
  WO = (a) => _r(a, Vb, $O),
  To = (a) => _r(a, Kb, ZO),
  se = (a) => qb.test(a),
  jl = (a) => Nr(a, Yb),
  eA = (a) => Nr(a, iA),
  sv = (a) => Nr(a, Pb),
  tA = (a) => Nr(a, Qb),
  nA = (a) => Nr(a, Vb),
  Co = (a) => Nr(a, Kb, !0),
  _r = (a, n, r) => {
    const l = Hb.exec(a);
    return l ? (l[1] ? n(l[1]) : r(l[2])) : !1;
  },
  Nr = (a, n, r = !1) => {
    const l = qb.exec(a);
    return l ? (l[1] ? n(l[1]) : r) : !1;
  },
  Pb = (a) => a === 'position' || a === 'percentage',
  Vb = (a) => a === 'image' || a === 'url',
  Qb = (a) => a === 'length' || a === 'size' || a === 'bg-size',
  Yb = (a) => a === 'length',
  aA = (a) => a === 'number',
  iA = (a) => a === 'family-name',
  Kb = (a) => a === 'shadow',
  rA = () => {
    const a = at('color'),
      n = at('font'),
      r = at('text'),
      l = at('font-weight'),
      o = at('tracking'),
      c = at('leading'),
      d = at('breakpoint'),
      h = at('container'),
      m = at('spacing'),
      p = at('radius'),
      g = at('shadow'),
      v = at('inset-shadow'),
      S = at('text-shadow'),
      E = at('drop-shadow'),
      w = at('blur'),
      x = at('perspective'),
      R = at('aspect'),
      _ = at('ease'),
      k = at('animate'),
      L = () => [
        'auto',
        'avoid',
        'all',
        'avoid-page',
        'page',
        'left',
        'right',
        'column',
      ],
      q = () => [
        'center',
        'top',
        'bottom',
        'left',
        'right',
        'top-left',
        'left-top',
        'top-right',
        'right-top',
        'bottom-right',
        'right-bottom',
        'bottom-left',
        'left-bottom',
      ],
      B = () => [...q(), se, le],
      J = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
      Z = () => ['auto', 'contain', 'none'],
      G = () => [se, le, m],
      W = () => [or, 'full', 'auto', ...G()],
      ne = () => [Ea, 'none', 'subgrid', se, le],
      fe = () => ['auto', { span: ['full', Ea, se, le] }, Ea, se, le],
      ce = () => [Ea, 'auto', se, le],
      de = () => ['auto', 'min', 'max', 'fr', se, le],
      be = () => [
        'start',
        'end',
        'center',
        'between',
        'around',
        'evenly',
        'stretch',
        'baseline',
        'center-safe',
        'end-safe',
      ],
      me = () => [
        'start',
        'end',
        'center',
        'stretch',
        'center-safe',
        'end-safe',
      ],
      N = () => ['auto', ...G()],
      $ = () => [
        or,
        'auto',
        'full',
        'dvw',
        'dvh',
        'lvw',
        'lvh',
        'svw',
        'svh',
        'min',
        'max',
        'fit',
        ...G(),
      ],
      P = () => [a, se, le],
      ee = () => [...q(), sv, lv, { position: [se, le] }],
      A = () => ['no-repeat', { repeat: ['', 'x', 'y', 'space', 'round'] }],
      V = () => ['auto', 'cover', 'contain', tA, IO, { size: [se, le] }],
      te = () => [Qf, jl, ni],
      I = () => ['', 'none', 'full', p, se, le],
      ae = () => ['', Oe, jl, ni],
      Se = () => ['solid', 'dashed', 'dotted', 'double'],
      ue = () => [
        'normal',
        'multiply',
        'screen',
        'overlay',
        'darken',
        'lighten',
        'color-dodge',
        'color-burn',
        'hard-light',
        'soft-light',
        'difference',
        'exclusion',
        'hue',
        'saturation',
        'color',
        'luminosity',
      ],
      xe = () => [Oe, Qf, sv, lv],
      Le = () => ['', 'none', w, se, le],
      Ve = () => ['none', Oe, se, le],
      Et = () => ['none', Oe, se, le],
      rn = () => [Oe, se, le],
      ln = () => [or, 'full', ...G()];
    return {
      cacheSize: 500,
      theme: {
        animate: ['spin', 'ping', 'pulse', 'bounce'],
        aspect: ['video'],
        blur: [Kn],
        breakpoint: [Kn],
        color: [FO],
        container: [Kn],
        'drop-shadow': [Kn],
        ease: ['in', 'out', 'in-out'],
        font: [JO],
        'font-weight': [
          'thin',
          'extralight',
          'light',
          'normal',
          'medium',
          'semibold',
          'bold',
          'extrabold',
          'black',
        ],
        'inset-shadow': [Kn],
        leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'],
        perspective: [
          'dramatic',
          'near',
          'normal',
          'midrange',
          'distant',
          'none',
        ],
        radius: [Kn],
        shadow: [Kn],
        spacing: ['px', Oe],
        text: [Kn],
        'text-shadow': [Kn],
        tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'],
      },
      classGroups: {
        aspect: [{ aspect: ['auto', 'square', or, le, se, R] }],
        container: ['container'],
        columns: [{ columns: [Oe, le, se, h] }],
        'break-after': [{ 'break-after': L() }],
        'break-before': [{ 'break-before': L() }],
        'break-inside': [
          { 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] },
        ],
        'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
        box: [{ box: ['border', 'content'] }],
        display: [
          'block',
          'inline-block',
          'inline',
          'flex',
          'inline-flex',
          'table',
          'inline-table',
          'table-caption',
          'table-cell',
          'table-column',
          'table-column-group',
          'table-footer-group',
          'table-header-group',
          'table-row-group',
          'table-row',
          'flow-root',
          'grid',
          'inline-grid',
          'contents',
          'list-item',
          'hidden',
        ],
        sr: ['sr-only', 'not-sr-only'],
        float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
        clear: [{ clear: ['left', 'right', 'both', 'none', 'start', 'end'] }],
        isolation: ['isolate', 'isolation-auto'],
        'object-fit': [
          { object: ['contain', 'cover', 'fill', 'none', 'scale-down'] },
        ],
        'object-position': [{ object: B() }],
        overflow: [{ overflow: J() }],
        'overflow-x': [{ 'overflow-x': J() }],
        'overflow-y': [{ 'overflow-y': J() }],
        overscroll: [{ overscroll: Z() }],
        'overscroll-x': [{ 'overscroll-x': Z() }],
        'overscroll-y': [{ 'overscroll-y': Z() }],
        position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
        inset: [{ inset: W() }],
        'inset-x': [{ 'inset-x': W() }],
        'inset-y': [{ 'inset-y': W() }],
        start: [{ start: W() }],
        end: [{ end: W() }],
        top: [{ top: W() }],
        right: [{ right: W() }],
        bottom: [{ bottom: W() }],
        left: [{ left: W() }],
        visibility: ['visible', 'invisible', 'collapse'],
        z: [{ z: [Ea, 'auto', se, le] }],
        basis: [{ basis: [or, 'full', 'auto', h, ...G()] }],
        'flex-direction': [
          { flex: ['row', 'row-reverse', 'col', 'col-reverse'] },
        ],
        'flex-wrap': [{ flex: ['nowrap', 'wrap', 'wrap-reverse'] }],
        flex: [{ flex: [Oe, or, 'auto', 'initial', 'none', le] }],
        grow: [{ grow: ['', Oe, se, le] }],
        shrink: [{ shrink: ['', Oe, se, le] }],
        order: [{ order: [Ea, 'first', 'last', 'none', se, le] }],
        'grid-cols': [{ 'grid-cols': ne() }],
        'col-start-end': [{ col: fe() }],
        'col-start': [{ 'col-start': ce() }],
        'col-end': [{ 'col-end': ce() }],
        'grid-rows': [{ 'grid-rows': ne() }],
        'row-start-end': [{ row: fe() }],
        'row-start': [{ 'row-start': ce() }],
        'row-end': [{ 'row-end': ce() }],
        'grid-flow': [
          { 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] },
        ],
        'auto-cols': [{ 'auto-cols': de() }],
        'auto-rows': [{ 'auto-rows': de() }],
        gap: [{ gap: G() }],
        'gap-x': [{ 'gap-x': G() }],
        'gap-y': [{ 'gap-y': G() }],
        'justify-content': [{ justify: [...be(), 'normal'] }],
        'justify-items': [{ 'justify-items': [...me(), 'normal'] }],
        'justify-self': [{ 'justify-self': ['auto', ...me()] }],
        'align-content': [{ content: ['normal', ...be()] }],
        'align-items': [{ items: [...me(), { baseline: ['', 'last'] }] }],
        'align-self': [{ self: ['auto', ...me(), { baseline: ['', 'last'] }] }],
        'place-content': [{ 'place-content': be() }],
        'place-items': [{ 'place-items': [...me(), 'baseline'] }],
        'place-self': [{ 'place-self': ['auto', ...me()] }],
        p: [{ p: G() }],
        px: [{ px: G() }],
        py: [{ py: G() }],
        ps: [{ ps: G() }],
        pe: [{ pe: G() }],
        pt: [{ pt: G() }],
        pr: [{ pr: G() }],
        pb: [{ pb: G() }],
        pl: [{ pl: G() }],
        m: [{ m: N() }],
        mx: [{ mx: N() }],
        my: [{ my: N() }],
        ms: [{ ms: N() }],
        me: [{ me: N() }],
        mt: [{ mt: N() }],
        mr: [{ mr: N() }],
        mb: [{ mb: N() }],
        ml: [{ ml: N() }],
        'space-x': [{ 'space-x': G() }],
        'space-x-reverse': ['space-x-reverse'],
        'space-y': [{ 'space-y': G() }],
        'space-y-reverse': ['space-y-reverse'],
        size: [{ size: $() }],
        w: [{ w: [h, 'screen', ...$()] }],
        'min-w': [{ 'min-w': [h, 'screen', 'none', ...$()] }],
        'max-w': [
          { 'max-w': [h, 'screen', 'none', 'prose', { screen: [d] }, ...$()] },
        ],
        h: [{ h: ['screen', 'lh', ...$()] }],
        'min-h': [{ 'min-h': ['screen', 'lh', 'none', ...$()] }],
        'max-h': [{ 'max-h': ['screen', 'lh', ...$()] }],
        'font-size': [{ text: ['base', r, jl, ni] }],
        'font-smoothing': ['antialiased', 'subpixel-antialiased'],
        'font-style': ['italic', 'not-italic'],
        'font-weight': [{ font: [l, se, Yf] }],
        'font-stretch': [
          {
            'font-stretch': [
              'ultra-condensed',
              'extra-condensed',
              'condensed',
              'semi-condensed',
              'normal',
              'semi-expanded',
              'expanded',
              'extra-expanded',
              'ultra-expanded',
              Qf,
              le,
            ],
          },
        ],
        'font-family': [{ font: [eA, le, n] }],
        'fvn-normal': ['normal-nums'],
        'fvn-ordinal': ['ordinal'],
        'fvn-slashed-zero': ['slashed-zero'],
        'fvn-figure': ['lining-nums', 'oldstyle-nums'],
        'fvn-spacing': ['proportional-nums', 'tabular-nums'],
        'fvn-fraction': ['diagonal-fractions', 'stacked-fractions'],
        tracking: [{ tracking: [o, se, le] }],
        'line-clamp': [{ 'line-clamp': [Oe, 'none', se, Yf] }],
        leading: [{ leading: [c, ...G()] }],
        'list-image': [{ 'list-image': ['none', se, le] }],
        'list-style-position': [{ list: ['inside', 'outside'] }],
        'list-style-type': [{ list: ['disc', 'decimal', 'none', se, le] }],
        'text-alignment': [
          { text: ['left', 'center', 'right', 'justify', 'start', 'end'] },
        ],
        'placeholder-color': [{ placeholder: P() }],
        'text-color': [{ text: P() }],
        'text-decoration': [
          'underline',
          'overline',
          'line-through',
          'no-underline',
        ],
        'text-decoration-style': [{ decoration: [...Se(), 'wavy'] }],
        'text-decoration-thickness': [
          { decoration: [Oe, 'from-font', 'auto', se, ni] },
        ],
        'text-decoration-color': [{ decoration: P() }],
        'underline-offset': [{ 'underline-offset': [Oe, 'auto', se, le] }],
        'text-transform': [
          'uppercase',
          'lowercase',
          'capitalize',
          'normal-case',
        ],
        'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
        'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
        indent: [{ indent: G() }],
        'vertical-align': [
          {
            align: [
              'baseline',
              'top',
              'middle',
              'bottom',
              'text-top',
              'text-bottom',
              'sub',
              'super',
              se,
              le,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              'normal',
              'nowrap',
              'pre',
              'pre-line',
              'pre-wrap',
              'break-spaces',
            ],
          },
        ],
        break: [{ break: ['normal', 'words', 'all', 'keep'] }],
        wrap: [{ wrap: ['break-word', 'anywhere', 'normal'] }],
        hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
        content: [{ content: ['none', se, le] }],
        'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
        'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
        'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
        'bg-position': [{ bg: ee() }],
        'bg-repeat': [{ bg: A() }],
        'bg-size': [{ bg: V() }],
        'bg-image': [
          {
            bg: [
              'none',
              {
                linear: [
                  { to: ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] },
                  Ea,
                  se,
                  le,
                ],
                radial: ['', se, le],
                conic: [Ea, se, le],
              },
              nA,
              WO,
            ],
          },
        ],
        'bg-color': [{ bg: P() }],
        'gradient-from-pos': [{ from: te() }],
        'gradient-via-pos': [{ via: te() }],
        'gradient-to-pos': [{ to: te() }],
        'gradient-from': [{ from: P() }],
        'gradient-via': [{ via: P() }],
        'gradient-to': [{ to: P() }],
        rounded: [{ rounded: I() }],
        'rounded-s': [{ 'rounded-s': I() }],
        'rounded-e': [{ 'rounded-e': I() }],
        'rounded-t': [{ 'rounded-t': I() }],
        'rounded-r': [{ 'rounded-r': I() }],
        'rounded-b': [{ 'rounded-b': I() }],
        'rounded-l': [{ 'rounded-l': I() }],
        'rounded-ss': [{ 'rounded-ss': I() }],
        'rounded-se': [{ 'rounded-se': I() }],
        'rounded-ee': [{ 'rounded-ee': I() }],
        'rounded-es': [{ 'rounded-es': I() }],
        'rounded-tl': [{ 'rounded-tl': I() }],
        'rounded-tr': [{ 'rounded-tr': I() }],
        'rounded-br': [{ 'rounded-br': I() }],
        'rounded-bl': [{ 'rounded-bl': I() }],
        'border-w': [{ border: ae() }],
        'border-w-x': [{ 'border-x': ae() }],
        'border-w-y': [{ 'border-y': ae() }],
        'border-w-s': [{ 'border-s': ae() }],
        'border-w-e': [{ 'border-e': ae() }],
        'border-w-t': [{ 'border-t': ae() }],
        'border-w-r': [{ 'border-r': ae() }],
        'border-w-b': [{ 'border-b': ae() }],
        'border-w-l': [{ 'border-l': ae() }],
        'divide-x': [{ 'divide-x': ae() }],
        'divide-x-reverse': ['divide-x-reverse'],
        'divide-y': [{ 'divide-y': ae() }],
        'divide-y-reverse': ['divide-y-reverse'],
        'border-style': [{ border: [...Se(), 'hidden', 'none'] }],
        'divide-style': [{ divide: [...Se(), 'hidden', 'none'] }],
        'border-color': [{ border: P() }],
        'border-color-x': [{ 'border-x': P() }],
        'border-color-y': [{ 'border-y': P() }],
        'border-color-s': [{ 'border-s': P() }],
        'border-color-e': [{ 'border-e': P() }],
        'border-color-t': [{ 'border-t': P() }],
        'border-color-r': [{ 'border-r': P() }],
        'border-color-b': [{ 'border-b': P() }],
        'border-color-l': [{ 'border-l': P() }],
        'divide-color': [{ divide: P() }],
        'outline-style': [{ outline: [...Se(), 'none', 'hidden'] }],
        'outline-offset': [{ 'outline-offset': [Oe, se, le] }],
        'outline-w': [{ outline: ['', Oe, jl, ni] }],
        'outline-color': [{ outline: P() }],
        shadow: [{ shadow: ['', 'none', g, Co, To] }],
        'shadow-color': [{ shadow: P() }],
        'inset-shadow': [{ 'inset-shadow': ['none', v, Co, To] }],
        'inset-shadow-color': [{ 'inset-shadow': P() }],
        'ring-w': [{ ring: ae() }],
        'ring-w-inset': ['ring-inset'],
        'ring-color': [{ ring: P() }],
        'ring-offset-w': [{ 'ring-offset': [Oe, ni] }],
        'ring-offset-color': [{ 'ring-offset': P() }],
        'inset-ring-w': [{ 'inset-ring': ae() }],
        'inset-ring-color': [{ 'inset-ring': P() }],
        'text-shadow': [{ 'text-shadow': ['none', S, Co, To] }],
        'text-shadow-color': [{ 'text-shadow': P() }],
        opacity: [{ opacity: [Oe, se, le] }],
        'mix-blend': [
          { 'mix-blend': [...ue(), 'plus-darker', 'plus-lighter'] },
        ],
        'bg-blend': [{ 'bg-blend': ue() }],
        'mask-clip': [
          {
            'mask-clip': [
              'border',
              'padding',
              'content',
              'fill',
              'stroke',
              'view',
            ],
          },
          'mask-no-clip',
        ],
        'mask-composite': [
          { mask: ['add', 'subtract', 'intersect', 'exclude'] },
        ],
        'mask-image-linear-pos': [{ 'mask-linear': [Oe] }],
        'mask-image-linear-from-pos': [{ 'mask-linear-from': xe() }],
        'mask-image-linear-to-pos': [{ 'mask-linear-to': xe() }],
        'mask-image-linear-from-color': [{ 'mask-linear-from': P() }],
        'mask-image-linear-to-color': [{ 'mask-linear-to': P() }],
        'mask-image-t-from-pos': [{ 'mask-t-from': xe() }],
        'mask-image-t-to-pos': [{ 'mask-t-to': xe() }],
        'mask-image-t-from-color': [{ 'mask-t-from': P() }],
        'mask-image-t-to-color': [{ 'mask-t-to': P() }],
        'mask-image-r-from-pos': [{ 'mask-r-from': xe() }],
        'mask-image-r-to-pos': [{ 'mask-r-to': xe() }],
        'mask-image-r-from-color': [{ 'mask-r-from': P() }],
        'mask-image-r-to-color': [{ 'mask-r-to': P() }],
        'mask-image-b-from-pos': [{ 'mask-b-from': xe() }],
        'mask-image-b-to-pos': [{ 'mask-b-to': xe() }],
        'mask-image-b-from-color': [{ 'mask-b-from': P() }],
        'mask-image-b-to-color': [{ 'mask-b-to': P() }],
        'mask-image-l-from-pos': [{ 'mask-l-from': xe() }],
        'mask-image-l-to-pos': [{ 'mask-l-to': xe() }],
        'mask-image-l-from-color': [{ 'mask-l-from': P() }],
        'mask-image-l-to-color': [{ 'mask-l-to': P() }],
        'mask-image-x-from-pos': [{ 'mask-x-from': xe() }],
        'mask-image-x-to-pos': [{ 'mask-x-to': xe() }],
        'mask-image-x-from-color': [{ 'mask-x-from': P() }],
        'mask-image-x-to-color': [{ 'mask-x-to': P() }],
        'mask-image-y-from-pos': [{ 'mask-y-from': xe() }],
        'mask-image-y-to-pos': [{ 'mask-y-to': xe() }],
        'mask-image-y-from-color': [{ 'mask-y-from': P() }],
        'mask-image-y-to-color': [{ 'mask-y-to': P() }],
        'mask-image-radial': [{ 'mask-radial': [se, le] }],
        'mask-image-radial-from-pos': [{ 'mask-radial-from': xe() }],
        'mask-image-radial-to-pos': [{ 'mask-radial-to': xe() }],
        'mask-image-radial-from-color': [{ 'mask-radial-from': P() }],
        'mask-image-radial-to-color': [{ 'mask-radial-to': P() }],
        'mask-image-radial-shape': [{ 'mask-radial': ['circle', 'ellipse'] }],
        'mask-image-radial-size': [
          {
            'mask-radial': [
              { closest: ['side', 'corner'], farthest: ['side', 'corner'] },
            ],
          },
        ],
        'mask-image-radial-pos': [{ 'mask-radial-at': q() }],
        'mask-image-conic-pos': [{ 'mask-conic': [Oe] }],
        'mask-image-conic-from-pos': [{ 'mask-conic-from': xe() }],
        'mask-image-conic-to-pos': [{ 'mask-conic-to': xe() }],
        'mask-image-conic-from-color': [{ 'mask-conic-from': P() }],
        'mask-image-conic-to-color': [{ 'mask-conic-to': P() }],
        'mask-mode': [{ mask: ['alpha', 'luminance', 'match'] }],
        'mask-origin': [
          {
            'mask-origin': [
              'border',
              'padding',
              'content',
              'fill',
              'stroke',
              'view',
            ],
          },
        ],
        'mask-position': [{ mask: ee() }],
        'mask-repeat': [{ mask: A() }],
        'mask-size': [{ mask: V() }],
        'mask-type': [{ 'mask-type': ['alpha', 'luminance'] }],
        'mask-image': [{ mask: ['none', se, le] }],
        filter: [{ filter: ['', 'none', se, le] }],
        blur: [{ blur: Le() }],
        brightness: [{ brightness: [Oe, se, le] }],
        contrast: [{ contrast: [Oe, se, le] }],
        'drop-shadow': [{ 'drop-shadow': ['', 'none', E, Co, To] }],
        'drop-shadow-color': [{ 'drop-shadow': P() }],
        grayscale: [{ grayscale: ['', Oe, se, le] }],
        'hue-rotate': [{ 'hue-rotate': [Oe, se, le] }],
        invert: [{ invert: ['', Oe, se, le] }],
        saturate: [{ saturate: [Oe, se, le] }],
        sepia: [{ sepia: ['', Oe, se, le] }],
        'backdrop-filter': [{ 'backdrop-filter': ['', 'none', se, le] }],
        'backdrop-blur': [{ 'backdrop-blur': Le() }],
        'backdrop-brightness': [{ 'backdrop-brightness': [Oe, se, le] }],
        'backdrop-contrast': [{ 'backdrop-contrast': [Oe, se, le] }],
        'backdrop-grayscale': [{ 'backdrop-grayscale': ['', Oe, se, le] }],
        'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [Oe, se, le] }],
        'backdrop-invert': [{ 'backdrop-invert': ['', Oe, se, le] }],
        'backdrop-opacity': [{ 'backdrop-opacity': [Oe, se, le] }],
        'backdrop-saturate': [{ 'backdrop-saturate': [Oe, se, le] }],
        'backdrop-sepia': [{ 'backdrop-sepia': ['', Oe, se, le] }],
        'border-collapse': [{ border: ['collapse', 'separate'] }],
        'border-spacing': [{ 'border-spacing': G() }],
        'border-spacing-x': [{ 'border-spacing-x': G() }],
        'border-spacing-y': [{ 'border-spacing-y': G() }],
        'table-layout': [{ table: ['auto', 'fixed'] }],
        caption: [{ caption: ['top', 'bottom'] }],
        transition: [
          {
            transition: [
              '',
              'all',
              'colors',
              'opacity',
              'shadow',
              'transform',
              'none',
              se,
              le,
            ],
          },
        ],
        'transition-behavior': [{ transition: ['normal', 'discrete'] }],
        duration: [{ duration: [Oe, 'initial', se, le] }],
        ease: [{ ease: ['linear', 'initial', _, se, le] }],
        delay: [{ delay: [Oe, se, le] }],
        animate: [{ animate: ['none', k, se, le] }],
        backface: [{ backface: ['hidden', 'visible'] }],
        perspective: [{ perspective: [x, se, le] }],
        'perspective-origin': [{ 'perspective-origin': B() }],
        rotate: [{ rotate: Ve() }],
        'rotate-x': [{ 'rotate-x': Ve() }],
        'rotate-y': [{ 'rotate-y': Ve() }],
        'rotate-z': [{ 'rotate-z': Ve() }],
        scale: [{ scale: Et() }],
        'scale-x': [{ 'scale-x': Et() }],
        'scale-y': [{ 'scale-y': Et() }],
        'scale-z': [{ 'scale-z': Et() }],
        'scale-3d': ['scale-3d'],
        skew: [{ skew: rn() }],
        'skew-x': [{ 'skew-x': rn() }],
        'skew-y': [{ 'skew-y': rn() }],
        transform: [{ transform: [se, le, '', 'none', 'gpu', 'cpu'] }],
        'transform-origin': [{ origin: B() }],
        'transform-style': [{ transform: ['3d', 'flat'] }],
        translate: [{ translate: ln() }],
        'translate-x': [{ 'translate-x': ln() }],
        'translate-y': [{ 'translate-y': ln() }],
        'translate-z': [{ 'translate-z': ln() }],
        'translate-none': ['translate-none'],
        accent: [{ accent: P() }],
        appearance: [{ appearance: ['none', 'auto'] }],
        'caret-color': [{ caret: P() }],
        'color-scheme': [
          {
            scheme: [
              'normal',
              'dark',
              'light',
              'light-dark',
              'only-dark',
              'only-light',
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              'auto',
              'default',
              'pointer',
              'wait',
              'text',
              'move',
              'help',
              'not-allowed',
              'none',
              'context-menu',
              'progress',
              'cell',
              'crosshair',
              'vertical-text',
              'alias',
              'copy',
              'no-drop',
              'grab',
              'grabbing',
              'all-scroll',
              'col-resize',
              'row-resize',
              'n-resize',
              'e-resize',
              's-resize',
              'w-resize',
              'ne-resize',
              'nw-resize',
              'se-resize',
              'sw-resize',
              'ew-resize',
              'ns-resize',
              'nesw-resize',
              'nwse-resize',
              'zoom-in',
              'zoom-out',
              se,
              le,
            ],
          },
        ],
        'field-sizing': [{ 'field-sizing': ['fixed', 'content'] }],
        'pointer-events': [{ 'pointer-events': ['auto', 'none'] }],
        resize: [{ resize: ['none', '', 'y', 'x'] }],
        'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
        'scroll-m': [{ 'scroll-m': G() }],
        'scroll-mx': [{ 'scroll-mx': G() }],
        'scroll-my': [{ 'scroll-my': G() }],
        'scroll-ms': [{ 'scroll-ms': G() }],
        'scroll-me': [{ 'scroll-me': G() }],
        'scroll-mt': [{ 'scroll-mt': G() }],
        'scroll-mr': [{ 'scroll-mr': G() }],
        'scroll-mb': [{ 'scroll-mb': G() }],
        'scroll-ml': [{ 'scroll-ml': G() }],
        'scroll-p': [{ 'scroll-p': G() }],
        'scroll-px': [{ 'scroll-px': G() }],
        'scroll-py': [{ 'scroll-py': G() }],
        'scroll-ps': [{ 'scroll-ps': G() }],
        'scroll-pe': [{ 'scroll-pe': G() }],
        'scroll-pt': [{ 'scroll-pt': G() }],
        'scroll-pr': [{ 'scroll-pr': G() }],
        'scroll-pb': [{ 'scroll-pb': G() }],
        'scroll-pl': [{ 'scroll-pl': G() }],
        'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
        'snap-stop': [{ snap: ['normal', 'always'] }],
        'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
        'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
        touch: [{ touch: ['auto', 'none', 'manipulation'] }],
        'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
        'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
        'touch-pz': ['touch-pinch-zoom'],
        select: [{ select: ['none', 'text', 'all', 'auto'] }],
        'will-change': [
          {
            'will-change': ['auto', 'scroll', 'contents', 'transform', se, le],
          },
        ],
        fill: [{ fill: ['none', ...P()] }],
        'stroke-w': [{ stroke: [Oe, jl, ni, Yf] }],
        stroke: [{ stroke: ['none', ...P()] }],
        'forced-color-adjust': [{ 'forced-color-adjust': ['auto', 'none'] }],
      },
      conflictingClassGroups: {
        overflow: ['overflow-x', 'overflow-y'],
        overscroll: ['overscroll-x', 'overscroll-y'],
        inset: [
          'inset-x',
          'inset-y',
          'start',
          'end',
          'top',
          'right',
          'bottom',
          'left',
        ],
        'inset-x': ['right', 'left'],
        'inset-y': ['top', 'bottom'],
        flex: ['basis', 'grow', 'shrink'],
        gap: ['gap-x', 'gap-y'],
        p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
        px: ['pr', 'pl'],
        py: ['pt', 'pb'],
        m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
        mx: ['mr', 'ml'],
        my: ['mt', 'mb'],
        size: ['w', 'h'],
        'font-size': ['leading'],
        'fvn-normal': [
          'fvn-ordinal',
          'fvn-slashed-zero',
          'fvn-figure',
          'fvn-spacing',
          'fvn-fraction',
        ],
        'fvn-ordinal': ['fvn-normal'],
        'fvn-slashed-zero': ['fvn-normal'],
        'fvn-figure': ['fvn-normal'],
        'fvn-spacing': ['fvn-normal'],
        'fvn-fraction': ['fvn-normal'],
        'line-clamp': ['display', 'overflow'],
        rounded: [
          'rounded-s',
          'rounded-e',
          'rounded-t',
          'rounded-r',
          'rounded-b',
          'rounded-l',
          'rounded-ss',
          'rounded-se',
          'rounded-ee',
          'rounded-es',
          'rounded-tl',
          'rounded-tr',
          'rounded-br',
          'rounded-bl',
        ],
        'rounded-s': ['rounded-ss', 'rounded-es'],
        'rounded-e': ['rounded-se', 'rounded-ee'],
        'rounded-t': ['rounded-tl', 'rounded-tr'],
        'rounded-r': ['rounded-tr', 'rounded-br'],
        'rounded-b': ['rounded-br', 'rounded-bl'],
        'rounded-l': ['rounded-tl', 'rounded-bl'],
        'border-spacing': ['border-spacing-x', 'border-spacing-y'],
        'border-w': [
          'border-w-x',
          'border-w-y',
          'border-w-s',
          'border-w-e',
          'border-w-t',
          'border-w-r',
          'border-w-b',
          'border-w-l',
        ],
        'border-w-x': ['border-w-r', 'border-w-l'],
        'border-w-y': ['border-w-t', 'border-w-b'],
        'border-color': [
          'border-color-x',
          'border-color-y',
          'border-color-s',
          'border-color-e',
          'border-color-t',
          'border-color-r',
          'border-color-b',
          'border-color-l',
        ],
        'border-color-x': ['border-color-r', 'border-color-l'],
        'border-color-y': ['border-color-t', 'border-color-b'],
        translate: ['translate-x', 'translate-y', 'translate-none'],
        'translate-none': [
          'translate',
          'translate-x',
          'translate-y',
          'translate-z',
        ],
        'scroll-m': [
          'scroll-mx',
          'scroll-my',
          'scroll-ms',
          'scroll-me',
          'scroll-mt',
          'scroll-mr',
          'scroll-mb',
          'scroll-ml',
        ],
        'scroll-mx': ['scroll-mr', 'scroll-ml'],
        'scroll-my': ['scroll-mt', 'scroll-mb'],
        'scroll-p': [
          'scroll-px',
          'scroll-py',
          'scroll-ps',
          'scroll-pe',
          'scroll-pt',
          'scroll-pr',
          'scroll-pb',
          'scroll-pl',
        ],
        'scroll-px': ['scroll-pr', 'scroll-pl'],
        'scroll-py': ['scroll-pt', 'scroll-pb'],
        touch: ['touch-x', 'touch-y', 'touch-pz'],
        'touch-x': ['touch'],
        'touch-y': ['touch'],
        'touch-pz': ['touch'],
      },
      conflictingClassGroupModifiers: { 'font-size': ['leading'] },
      orderSensitiveModifiers: [
        '*',
        '**',
        'after',
        'backdrop',
        'before',
        'details-content',
        'file',
        'first-letter',
        'first-line',
        'marker',
        'placeholder',
        'selection',
      ],
    };
  },
  lA = qO(rA);
function Kd(...a) {
  return lA(jb(a));
}
const sA = AO(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary:
          'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
        ghost:
          'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
);
function Fb({ className: a, variant: n, size: r, asChild: l = !1, ...o }) {
  const c = l ? SO : 'button';
  return Y.jsx(c, {
    'data-slot': 'button',
    className: Kd(sA({ variant: n, size: r, className: a })),
    ...o,
  });
}
function Ne(a, n, { checkForDefaultPrevented: r = !0 } = {}) {
  return function (o) {
    if ((a == null || a(o), r === !1 || !o.defaultPrevented))
      return n == null ? void 0 : n(o);
  };
}
function as(a, n = []) {
  let r = [];
  function l(c, d) {
    const h = O.createContext(d),
      m = r.length;
    r = [...r, d];
    const p = (v) => {
      var _;
      const { scope: S, children: E, ...w } = v,
        x = ((_ = S == null ? void 0 : S[a]) == null ? void 0 : _[m]) || h,
        R = O.useMemo(() => w, Object.values(w));
      return Y.jsx(x.Provider, { value: R, children: E });
    };
    p.displayName = c + 'Provider';
    function g(v, S) {
      var x;
      const E = ((x = S == null ? void 0 : S[a]) == null ? void 0 : x[m]) || h,
        w = O.useContext(E);
      if (w) return w;
      if (d !== void 0) return d;
      throw new Error(`\`${v}\` must be used within \`${c}\``);
    }
    return [p, g];
  }
  const o = () => {
    const c = r.map((d) => O.createContext(d));
    return function (h) {
      const m = (h == null ? void 0 : h[a]) || c;
      return O.useMemo(() => ({ [`__scope${a}`]: { ...h, [a]: m } }), [h, m]);
    };
  };
  return (o.scopeName = a), [l, oA(o, ...n)];
}
function oA(...a) {
  const n = a[0];
  if (a.length === 1) return n;
  const r = () => {
    const l = a.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (c) {
      const d = l.reduce((h, { useScope: m, scopeName: p }) => {
        const v = m(c)[`__scope${p}`];
        return { ...h, ...v };
      }, {});
      return O.useMemo(() => ({ [`__scope${n.scopeName}`]: d }), [d]);
    };
  };
  return (r.scopeName = n.scopeName), r;
}
var za =
    globalThis != null && globalThis.document ? O.useLayoutEffect : () => {},
  uA = Pv[' useInsertionEffect '.trim().toString()] || za;
function Xb({ prop: a, defaultProp: n, onChange: r = () => {}, caller: l }) {
  const [o, c, d] = cA({ defaultProp: n, onChange: r }),
    h = a !== void 0,
    m = h ? a : o;
  {
    const g = O.useRef(a !== void 0);
    O.useEffect(() => {
      const v = g.current;
      v !== h &&
        console.warn(
          `${l} is changing from ${v ? 'controlled' : 'uncontrolled'} to ${h ? 'controlled' : 'uncontrolled'}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (g.current = h);
    }, [h, l]);
  }
  const p = O.useCallback(
    (g) => {
      var v;
      if (h) {
        const S = fA(g) ? g(a) : g;
        S !== a && ((v = d.current) == null || v.call(d, S));
      } else c(g);
    },
    [h, a, c, d],
  );
  return [m, p];
}
function cA({ defaultProp: a, onChange: n }) {
  const [r, l] = O.useState(a),
    o = O.useRef(r),
    c = O.useRef(n);
  return (
    uA(() => {
      c.current = n;
    }, [n]),
    O.useEffect(() => {
      var d;
      o.current !== r &&
        ((d = c.current) == null || d.call(c, r), (o.current = r));
    }, [r, o]),
    [r, l, c]
  );
}
function fA(a) {
  return typeof a == 'function';
}
var Fd = Vv();
const dA = Gv(Fd);
var hA = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'select',
    'span',
    'svg',
    'ul',
  ],
  xt = hA.reduce((a, n) => {
    const r = Yl(`Primitive.${n}`),
      l = O.forwardRef((o, c) => {
        const { asChild: d, ...h } = o,
          m = d ? r : n;
        return (
          typeof window < 'u' && (window[Symbol.for('radix-ui')] = !0),
          Y.jsx(m, { ...h, ref: c })
        );
      });
    return (l.displayName = `Primitive.${n}`), { ...a, [n]: l };
  }, {});
function Zb(a, n) {
  a && Fd.flushSync(() => a.dispatchEvent(n));
}
function $b(a) {
  const n = a + 'CollectionProvider',
    [r, l] = as(n),
    [o, c] = r(n, { collectionRef: { current: null }, itemMap: new Map() }),
    d = (x) => {
      const { scope: R, children: _ } = x,
        k = nn.useRef(null),
        L = nn.useRef(new Map()).current;
      return Y.jsx(o, { scope: R, itemMap: L, collectionRef: k, children: _ });
    };
  d.displayName = n;
  const h = a + 'CollectionSlot',
    m = Yl(h),
    p = nn.forwardRef((x, R) => {
      const { scope: _, children: k } = x,
        L = c(h, _),
        q = Lt(R, L.collectionRef);
      return Y.jsx(m, { ref: q, children: k });
    });
  p.displayName = h;
  const g = a + 'CollectionItemSlot',
    v = 'data-radix-collection-item',
    S = Yl(g),
    E = nn.forwardRef((x, R) => {
      const { scope: _, children: k, ...L } = x,
        q = nn.useRef(null),
        B = Lt(R, q),
        J = c(g, _);
      return (
        nn.useEffect(
          () => (
            J.itemMap.set(q, { ref: q, ...L }), () => void J.itemMap.delete(q)
          ),
        ),
        Y.jsx(S, { [v]: '', ref: B, children: k })
      );
    });
  E.displayName = g;
  function w(x) {
    const R = c(a + 'CollectionConsumer', x);
    return nn.useCallback(() => {
      const k = R.collectionRef.current;
      if (!k) return [];
      const L = Array.from(k.querySelectorAll(`[${v}]`));
      return Array.from(R.itemMap.values()).sort(
        (J, Z) => L.indexOf(J.ref.current) - L.indexOf(Z.ref.current),
      );
    }, [R.collectionRef, R.itemMap]);
  }
  return [{ Provider: d, Slot: p, ItemSlot: E }, w, l];
}
var pA = O.createContext(void 0);
function Jb(a) {
  const n = O.useContext(pA);
  return a || n || 'ltr';
}
function $n(a) {
  const n = O.useRef(a);
  return (
    O.useEffect(() => {
      n.current = a;
    }),
    O.useMemo(
      () =>
        (...r) => {
          var l;
          return (l = n.current) == null ? void 0 : l.call(n, ...r);
        },
      [],
    )
  );
}
function mA(a, n = globalThis == null ? void 0 : globalThis.document) {
  const r = $n(a);
  O.useEffect(() => {
    const l = (o) => {
      o.key === 'Escape' && r(o);
    };
    return (
      n.addEventListener('keydown', l, { capture: !0 }),
      () => n.removeEventListener('keydown', l, { capture: !0 })
    );
  }, [r, n]);
}
var gA = 'DismissableLayer',
  Cd = 'dismissableLayer.update',
  yA = 'dismissableLayer.pointerDownOutside',
  vA = 'dismissableLayer.focusOutside',
  ov,
  Ib = O.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Wb = O.forwardRef((a, n) => {
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: l,
        onPointerDownOutside: o,
        onFocusOutside: c,
        onInteractOutside: d,
        onDismiss: h,
        ...m
      } = a,
      p = O.useContext(Ib),
      [g, v] = O.useState(null),
      S =
        (g == null ? void 0 : g.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, E] = O.useState({}),
      w = Lt(n, (Z) => v(Z)),
      x = Array.from(p.layers),
      [R] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1),
      _ = x.indexOf(R),
      k = g ? x.indexOf(g) : -1,
      L = p.layersWithOutsidePointerEventsDisabled.size > 0,
      q = k >= _,
      B = xA((Z) => {
        const G = Z.target,
          W = [...p.branches].some((ne) => ne.contains(G));
        !q ||
          W ||
          (o == null || o(Z),
          d == null || d(Z),
          Z.defaultPrevented || h == null || h());
      }, S),
      J = wA((Z) => {
        const G = Z.target;
        [...p.branches].some((ne) => ne.contains(G)) ||
          (c == null || c(Z),
          d == null || d(Z),
          Z.defaultPrevented || h == null || h());
      }, S);
    return (
      mA((Z) => {
        k === p.layers.size - 1 &&
          (l == null || l(Z),
          !Z.defaultPrevented && h && (Z.preventDefault(), h()));
      }, S),
      O.useEffect(() => {
        if (g)
          return (
            r &&
              (p.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((ov = S.body.style.pointerEvents),
                (S.body.style.pointerEvents = 'none')),
              p.layersWithOutsidePointerEventsDisabled.add(g)),
            p.layers.add(g),
            uv(),
            () => {
              r &&
                p.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (S.body.style.pointerEvents = ov);
            }
          );
      }, [g, S, r, p]),
      O.useEffect(
        () => () => {
          g &&
            (p.layers.delete(g),
            p.layersWithOutsidePointerEventsDisabled.delete(g),
            uv());
        },
        [g, p],
      ),
      O.useEffect(() => {
        const Z = () => E({});
        return (
          document.addEventListener(Cd, Z),
          () => document.removeEventListener(Cd, Z)
        );
      }, []),
      Y.jsx(xt.div, {
        ...m,
        ref: w,
        style: {
          pointerEvents: L ? (q ? 'auto' : 'none') : void 0,
          ...a.style,
        },
        onFocusCapture: Ne(a.onFocusCapture, J.onFocusCapture),
        onBlurCapture: Ne(a.onBlurCapture, J.onBlurCapture),
        onPointerDownCapture: Ne(
          a.onPointerDownCapture,
          B.onPointerDownCapture,
        ),
      })
    );
  });
Wb.displayName = gA;
var bA = 'DismissableLayerBranch',
  SA = O.forwardRef((a, n) => {
    const r = O.useContext(Ib),
      l = O.useRef(null),
      o = Lt(n, l);
    return (
      O.useEffect(() => {
        const c = l.current;
        if (c)
          return (
            r.branches.add(c),
            () => {
              r.branches.delete(c);
            }
          );
      }, [r.branches]),
      Y.jsx(xt.div, { ...a, ref: o })
    );
  });
SA.displayName = bA;
function xA(a, n = globalThis == null ? void 0 : globalThis.document) {
  const r = $n(a),
    l = O.useRef(!1),
    o = O.useRef(() => {});
  return (
    O.useEffect(() => {
      const c = (h) => {
          if (h.target && !l.current) {
            let m = function () {
              e0(yA, r, p, { discrete: !0 });
            };
            const p = { originalEvent: h };
            h.pointerType === 'touch'
              ? (n.removeEventListener('click', o.current),
                (o.current = m),
                n.addEventListener('click', o.current, { once: !0 }))
              : m();
          } else n.removeEventListener('click', o.current);
          l.current = !1;
        },
        d = window.setTimeout(() => {
          n.addEventListener('pointerdown', c);
        }, 0);
      return () => {
        window.clearTimeout(d),
          n.removeEventListener('pointerdown', c),
          n.removeEventListener('click', o.current);
      };
    }, [n, r]),
    { onPointerDownCapture: () => (l.current = !0) }
  );
}
function wA(a, n = globalThis == null ? void 0 : globalThis.document) {
  const r = $n(a),
    l = O.useRef(!1);
  return (
    O.useEffect(() => {
      const o = (c) => {
        c.target &&
          !l.current &&
          e0(vA, r, { originalEvent: c }, { discrete: !1 });
      };
      return (
        n.addEventListener('focusin', o),
        () => n.removeEventListener('focusin', o)
      );
    }, [n, r]),
    {
      onFocusCapture: () => (l.current = !0),
      onBlurCapture: () => (l.current = !1),
    }
  );
}
function uv() {
  const a = new CustomEvent(Cd);
  document.dispatchEvent(a);
}
function e0(a, n, r, { discrete: l }) {
  const o = r.originalEvent.target,
    c = new CustomEvent(a, { bubbles: !1, cancelable: !0, detail: r });
  n && o.addEventListener(a, n, { once: !0 }),
    l ? Zb(o, c) : o.dispatchEvent(c);
}
var Kf = 0;
function EA() {
  O.useEffect(() => {
    const a = document.querySelectorAll('[data-radix-focus-guard]');
    return (
      document.body.insertAdjacentElement('afterbegin', a[0] ?? cv()),
      document.body.insertAdjacentElement('beforeend', a[1] ?? cv()),
      Kf++,
      () => {
        Kf === 1 &&
          document
            .querySelectorAll('[data-radix-focus-guard]')
            .forEach((n) => n.remove()),
          Kf--;
      }
    );
  }, []);
}
function cv() {
  const a = document.createElement('span');
  return (
    a.setAttribute('data-radix-focus-guard', ''),
    (a.tabIndex = 0),
    (a.style.outline = 'none'),
    (a.style.opacity = '0'),
    (a.style.position = 'fixed'),
    (a.style.pointerEvents = 'none'),
    a
  );
}
var Ff = 'focusScope.autoFocusOnMount',
  Xf = 'focusScope.autoFocusOnUnmount',
  fv = { bubbles: !1, cancelable: !0 },
  RA = 'FocusScope',
  t0 = O.forwardRef((a, n) => {
    const {
        loop: r = !1,
        trapped: l = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: c,
        ...d
      } = a,
      [h, m] = O.useState(null),
      p = $n(o),
      g = $n(c),
      v = O.useRef(null),
      S = Lt(n, (x) => m(x)),
      E = O.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    O.useEffect(() => {
      if (l) {
        let x = function (L) {
            if (E.paused || !h) return;
            const q = L.target;
            h.contains(q) ? (v.current = q) : Oa(v.current, { select: !0 });
          },
          R = function (L) {
            if (E.paused || !h) return;
            const q = L.relatedTarget;
            q !== null && (h.contains(q) || Oa(v.current, { select: !0 }));
          },
          _ = function (L) {
            if (document.activeElement === document.body)
              for (const B of L) B.removedNodes.length > 0 && Oa(h);
          };
        document.addEventListener('focusin', x),
          document.addEventListener('focusout', R);
        const k = new MutationObserver(_);
        return (
          h && k.observe(h, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener('focusin', x),
              document.removeEventListener('focusout', R),
              k.disconnect();
          }
        );
      }
    }, [l, h, E.paused]),
      O.useEffect(() => {
        if (h) {
          hv.add(E);
          const x = document.activeElement;
          if (!h.contains(x)) {
            const _ = new CustomEvent(Ff, fv);
            h.addEventListener(Ff, p),
              h.dispatchEvent(_),
              _.defaultPrevented ||
                (OA(DA(n0(h)), { select: !0 }),
                document.activeElement === x && Oa(h));
          }
          return () => {
            h.removeEventListener(Ff, p),
              setTimeout(() => {
                const _ = new CustomEvent(Xf, fv);
                h.addEventListener(Xf, g),
                  h.dispatchEvent(_),
                  _.defaultPrevented || Oa(x ?? document.body, { select: !0 }),
                  h.removeEventListener(Xf, g),
                  hv.remove(E);
              }, 0);
          };
        }
      }, [h, p, g, E]);
    const w = O.useCallback(
      (x) => {
        if ((!r && !l) || E.paused) return;
        const R = x.key === 'Tab' && !x.altKey && !x.ctrlKey && !x.metaKey,
          _ = document.activeElement;
        if (R && _) {
          const k = x.currentTarget,
            [L, q] = AA(k);
          L && q
            ? !x.shiftKey && _ === q
              ? (x.preventDefault(), r && Oa(L, { select: !0 }))
              : x.shiftKey &&
                _ === L &&
                (x.preventDefault(), r && Oa(q, { select: !0 }))
            : _ === k && x.preventDefault();
        }
      },
      [r, l, E.paused],
    );
    return Y.jsx(xt.div, { tabIndex: -1, ...d, ref: S, onKeyDown: w });
  });
t0.displayName = RA;
function OA(a, { select: n = !1 } = {}) {
  const r = document.activeElement;
  for (const l of a)
    if ((Oa(l, { select: n }), document.activeElement !== r)) return;
}
function AA(a) {
  const n = n0(a),
    r = dv(n, a),
    l = dv(n.reverse(), a);
  return [r, l];
}
function n0(a) {
  const n = [],
    r = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (l) => {
        const o = l.tagName === 'INPUT' && l.type === 'hidden';
        return l.disabled || l.hidden || o
          ? NodeFilter.FILTER_SKIP
          : l.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; r.nextNode(); ) n.push(r.currentNode);
  return n;
}
function dv(a, n) {
  for (const r of a) if (!TA(r, { upTo: n })) return r;
}
function TA(a, { upTo: n }) {
  if (getComputedStyle(a).visibility === 'hidden') return !0;
  for (; a; ) {
    if (n !== void 0 && a === n) return !1;
    if (getComputedStyle(a).display === 'none') return !0;
    a = a.parentElement;
  }
  return !1;
}
function CA(a) {
  return a instanceof HTMLInputElement && 'select' in a;
}
function Oa(a, { select: n = !1 } = {}) {
  if (a && a.focus) {
    const r = document.activeElement;
    a.focus({ preventScroll: !0 }), a !== r && CA(a) && n && a.select();
  }
}
var hv = MA();
function MA() {
  let a = [];
  return {
    add(n) {
      const r = a[0];
      n !== r && (r == null || r.pause()), (a = pv(a, n)), a.unshift(n);
    },
    remove(n) {
      var r;
      (a = pv(a, n)), (r = a[0]) == null || r.resume();
    },
  };
}
function pv(a, n) {
  const r = [...a],
    l = r.indexOf(n);
  return l !== -1 && r.splice(l, 1), r;
}
function DA(a) {
  return a.filter((n) => n.tagName !== 'A');
}
var _A = Pv[' useId '.trim().toString()] || (() => {}),
  NA = 0;
function Md(a) {
  const [n, r] = O.useState(_A());
  return (
    za(() => {
      r((l) => l ?? String(NA++));
    }, [a]),
    a || (n ? `radix-${n}` : '')
  );
}
const LA = ['top', 'right', 'bottom', 'left'],
  Ua = Math.min,
  Vt = Math.max,
  Zo = Math.round,
  Mo = Math.floor,
  Tn = (a) => ({ x: a, y: a }),
  zA = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
  UA = { start: 'end', end: 'start' };
function Dd(a, n, r) {
  return Vt(a, Ua(n, r));
}
function Jn(a, n) {
  return typeof a == 'function' ? a(n) : a;
}
function In(a) {
  return a.split('-')[0];
}
function Lr(a) {
  return a.split('-')[1];
}
function Xd(a) {
  return a === 'x' ? 'y' : 'x';
}
function Zd(a) {
  return a === 'y' ? 'height' : 'width';
}
function Zn(a) {
  return ['top', 'bottom'].includes(In(a)) ? 'y' : 'x';
}
function $d(a) {
  return Xd(Zn(a));
}
function jA(a, n, r) {
  r === void 0 && (r = !1);
  const l = Lr(a),
    o = $d(a),
    c = Zd(o);
  let d =
    o === 'x'
      ? l === (r ? 'end' : 'start')
        ? 'right'
        : 'left'
      : l === 'start'
        ? 'bottom'
        : 'top';
  return n.reference[c] > n.floating[c] && (d = $o(d)), [d, $o(d)];
}
function kA(a) {
  const n = $o(a);
  return [_d(a), n, _d(n)];
}
function _d(a) {
  return a.replace(/start|end/g, (n) => UA[n]);
}
function BA(a, n, r) {
  const l = ['left', 'right'],
    o = ['right', 'left'],
    c = ['top', 'bottom'],
    d = ['bottom', 'top'];
  switch (a) {
    case 'top':
    case 'bottom':
      return r ? (n ? o : l) : n ? l : o;
    case 'left':
    case 'right':
      return n ? c : d;
    default:
      return [];
  }
}
function HA(a, n, r, l) {
  const o = Lr(a);
  let c = BA(In(a), r === 'start', l);
  return (
    o && ((c = c.map((d) => d + '-' + o)), n && (c = c.concat(c.map(_d)))), c
  );
}
function $o(a) {
  return a.replace(/left|right|bottom|top/g, (n) => zA[n]);
}
function qA(a) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...a };
}
function a0(a) {
  return typeof a != 'number'
    ? qA(a)
    : { top: a, right: a, bottom: a, left: a };
}
function Jo(a) {
  const { x: n, y: r, width: l, height: o } = a;
  return {
    width: l,
    height: o,
    top: r,
    left: n,
    right: n + l,
    bottom: r + o,
    x: n,
    y: r,
  };
}
function mv(a, n, r) {
  let { reference: l, floating: o } = a;
  const c = Zn(n),
    d = $d(n),
    h = Zd(d),
    m = In(n),
    p = c === 'y',
    g = l.x + l.width / 2 - o.width / 2,
    v = l.y + l.height / 2 - o.height / 2,
    S = l[h] / 2 - o[h] / 2;
  let E;
  switch (m) {
    case 'top':
      E = { x: g, y: l.y - o.height };
      break;
    case 'bottom':
      E = { x: g, y: l.y + l.height };
      break;
    case 'right':
      E = { x: l.x + l.width, y: v };
      break;
    case 'left':
      E = { x: l.x - o.width, y: v };
      break;
    default:
      E = { x: l.x, y: l.y };
  }
  switch (Lr(n)) {
    case 'start':
      E[d] -= S * (r && p ? -1 : 1);
      break;
    case 'end':
      E[d] += S * (r && p ? -1 : 1);
      break;
  }
  return E;
}
const GA = async (a, n, r) => {
  const {
      placement: l = 'bottom',
      strategy: o = 'absolute',
      middleware: c = [],
      platform: d,
    } = r,
    h = c.filter(Boolean),
    m = await (d.isRTL == null ? void 0 : d.isRTL(n));
  let p = await d.getElementRects({ reference: a, floating: n, strategy: o }),
    { x: g, y: v } = mv(p, l, m),
    S = l,
    E = {},
    w = 0;
  for (let x = 0; x < h.length; x++) {
    const { name: R, fn: _ } = h[x],
      {
        x: k,
        y: L,
        data: q,
        reset: B,
      } = await _({
        x: g,
        y: v,
        initialPlacement: l,
        placement: S,
        strategy: o,
        middlewareData: E,
        rects: p,
        platform: d,
        elements: { reference: a, floating: n },
      });
    (g = k ?? g),
      (v = L ?? v),
      (E = { ...E, [R]: { ...E[R], ...q } }),
      B &&
        w <= 50 &&
        (w++,
        typeof B == 'object' &&
          (B.placement && (S = B.placement),
          B.rects &&
            (p =
              B.rects === !0
                ? await d.getElementRects({
                    reference: a,
                    floating: n,
                    strategy: o,
                  })
                : B.rects),
          ({ x: g, y: v } = mv(p, S, m))),
        (x = -1));
  }
  return { x: g, y: v, placement: S, strategy: o, middlewareData: E };
};
async function Kl(a, n) {
  var r;
  n === void 0 && (n = {});
  const { x: l, y: o, platform: c, rects: d, elements: h, strategy: m } = a,
    {
      boundary: p = 'clippingAncestors',
      rootBoundary: g = 'viewport',
      elementContext: v = 'floating',
      altBoundary: S = !1,
      padding: E = 0,
    } = Jn(n, a),
    w = a0(E),
    R = h[S ? (v === 'floating' ? 'reference' : 'floating') : v],
    _ = Jo(
      await c.getClippingRect({
        element:
          (r = await (c.isElement == null ? void 0 : c.isElement(R))) == null ||
          r
            ? R
            : R.contextElement ||
              (await (c.getDocumentElement == null
                ? void 0
                : c.getDocumentElement(h.floating))),
        boundary: p,
        rootBoundary: g,
        strategy: m,
      }),
    ),
    k =
      v === 'floating'
        ? { x: l, y: o, width: d.floating.width, height: d.floating.height }
        : d.reference,
    L = await (c.getOffsetParent == null
      ? void 0
      : c.getOffsetParent(h.floating)),
    q = (await (c.isElement == null ? void 0 : c.isElement(L)))
      ? (await (c.getScale == null ? void 0 : c.getScale(L))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    B = Jo(
      c.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await c.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: h,
            rect: k,
            offsetParent: L,
            strategy: m,
          })
        : k,
    );
  return {
    top: (_.top - B.top + w.top) / q.y,
    bottom: (B.bottom - _.bottom + w.bottom) / q.y,
    left: (_.left - B.left + w.left) / q.x,
    right: (B.right - _.right + w.right) / q.x,
  };
}
const PA = (a) => ({
    name: 'arrow',
    options: a,
    async fn(n) {
      const {
          x: r,
          y: l,
          placement: o,
          rects: c,
          platform: d,
          elements: h,
          middlewareData: m,
        } = n,
        { element: p, padding: g = 0 } = Jn(a, n) || {};
      if (p == null) return {};
      const v = a0(g),
        S = { x: r, y: l },
        E = $d(o),
        w = Zd(E),
        x = await d.getDimensions(p),
        R = E === 'y',
        _ = R ? 'top' : 'left',
        k = R ? 'bottom' : 'right',
        L = R ? 'clientHeight' : 'clientWidth',
        q = c.reference[w] + c.reference[E] - S[E] - c.floating[w],
        B = S[E] - c.reference[E],
        J = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(p));
      let Z = J ? J[L] : 0;
      (!Z || !(await (d.isElement == null ? void 0 : d.isElement(J)))) &&
        (Z = h.floating[L] || c.floating[w]);
      const G = q / 2 - B / 2,
        W = Z / 2 - x[w] / 2 - 1,
        ne = Ua(v[_], W),
        fe = Ua(v[k], W),
        ce = ne,
        de = Z - x[w] - fe,
        be = Z / 2 - x[w] / 2 + G,
        me = Dd(ce, be, de),
        N =
          !m.arrow &&
          Lr(o) != null &&
          be !== me &&
          c.reference[w] / 2 - (be < ce ? ne : fe) - x[w] / 2 < 0,
        $ = N ? (be < ce ? be - ce : be - de) : 0;
      return {
        [E]: S[E] + $,
        data: {
          [E]: me,
          centerOffset: be - me - $,
          ...(N && { alignmentOffset: $ }),
        },
        reset: N,
      };
    },
  }),
  VA = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        name: 'flip',
        options: a,
        async fn(n) {
          var r, l;
          const {
              placement: o,
              middlewareData: c,
              rects: d,
              initialPlacement: h,
              platform: m,
              elements: p,
            } = n,
            {
              mainAxis: g = !0,
              crossAxis: v = !0,
              fallbackPlacements: S,
              fallbackStrategy: E = 'bestFit',
              fallbackAxisSideDirection: w = 'none',
              flipAlignment: x = !0,
              ...R
            } = Jn(a, n);
          if ((r = c.arrow) != null && r.alignmentOffset) return {};
          const _ = In(o),
            k = Zn(h),
            L = In(h) === h,
            q = await (m.isRTL == null ? void 0 : m.isRTL(p.floating)),
            B = S || (L || !x ? [$o(h)] : kA(h)),
            J = w !== 'none';
          !S && J && B.push(...HA(h, x, w, q));
          const Z = [h, ...B],
            G = await Kl(n, R),
            W = [];
          let ne = ((l = c.flip) == null ? void 0 : l.overflows) || [];
          if ((g && W.push(G[_]), v)) {
            const me = jA(o, d, q);
            W.push(G[me[0]], G[me[1]]);
          }
          if (
            ((ne = [...ne, { placement: o, overflows: W }]),
            !W.every((me) => me <= 0))
          ) {
            var fe, ce;
            const me = (((fe = c.flip) == null ? void 0 : fe.index) || 0) + 1,
              N = Z[me];
            if (N) {
              var de;
              const P = v === 'alignment' ? k !== Zn(N) : !1,
                ee = ((de = ne[0]) == null ? void 0 : de.overflows[0]) > 0;
              if (!P || ee)
                return {
                  data: { index: me, overflows: ne },
                  reset: { placement: N },
                };
            }
            let $ =
              (ce = ne
                .filter((P) => P.overflows[0] <= 0)
                .sort((P, ee) => P.overflows[1] - ee.overflows[1])[0]) == null
                ? void 0
                : ce.placement;
            if (!$)
              switch (E) {
                case 'bestFit': {
                  var be;
                  const P =
                    (be = ne
                      .filter((ee) => {
                        if (J) {
                          const A = Zn(ee.placement);
                          return A === k || A === 'y';
                        }
                        return !0;
                      })
                      .map((ee) => [
                        ee.placement,
                        ee.overflows
                          .filter((A) => A > 0)
                          .reduce((A, V) => A + V, 0),
                      ])
                      .sort((ee, A) => ee[1] - A[1])[0]) == null
                      ? void 0
                      : be[0];
                  P && ($ = P);
                  break;
                }
                case 'initialPlacement':
                  $ = h;
                  break;
              }
            if (o !== $) return { reset: { placement: $ } };
          }
          return {};
        },
      }
    );
  };
function gv(a, n) {
  return {
    top: a.top - n.height,
    right: a.right - n.width,
    bottom: a.bottom - n.height,
    left: a.left - n.width,
  };
}
function yv(a) {
  return LA.some((n) => a[n] >= 0);
}
const QA = function (a) {
  return (
    a === void 0 && (a = {}),
    {
      name: 'hide',
      options: a,
      async fn(n) {
        const { rects: r } = n,
          { strategy: l = 'referenceHidden', ...o } = Jn(a, n);
        switch (l) {
          case 'referenceHidden': {
            const c = await Kl(n, { ...o, elementContext: 'reference' }),
              d = gv(c, r.reference);
            return {
              data: { referenceHiddenOffsets: d, referenceHidden: yv(d) },
            };
          }
          case 'escaped': {
            const c = await Kl(n, { ...o, altBoundary: !0 }),
              d = gv(c, r.floating);
            return { data: { escapedOffsets: d, escaped: yv(d) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function YA(a, n) {
  const { placement: r, platform: l, elements: o } = a,
    c = await (l.isRTL == null ? void 0 : l.isRTL(o.floating)),
    d = In(r),
    h = Lr(r),
    m = Zn(r) === 'y',
    p = ['left', 'top'].includes(d) ? -1 : 1,
    g = c && m ? -1 : 1,
    v = Jn(n, a);
  let {
    mainAxis: S,
    crossAxis: E,
    alignmentAxis: w,
  } = typeof v == 'number'
    ? { mainAxis: v, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: v.mainAxis || 0,
        crossAxis: v.crossAxis || 0,
        alignmentAxis: v.alignmentAxis,
      };
  return (
    h && typeof w == 'number' && (E = h === 'end' ? w * -1 : w),
    m ? { x: E * g, y: S * p } : { x: S * p, y: E * g }
  );
}
const KA = function (a) {
    return (
      a === void 0 && (a = 0),
      {
        name: 'offset',
        options: a,
        async fn(n) {
          var r, l;
          const { x: o, y: c, placement: d, middlewareData: h } = n,
            m = await YA(n, a);
          return d === ((r = h.offset) == null ? void 0 : r.placement) &&
            (l = h.arrow) != null &&
            l.alignmentOffset
            ? {}
            : { x: o + m.x, y: c + m.y, data: { ...m, placement: d } };
        },
      }
    );
  },
  FA = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        name: 'shift',
        options: a,
        async fn(n) {
          const { x: r, y: l, placement: o } = n,
            {
              mainAxis: c = !0,
              crossAxis: d = !1,
              limiter: h = {
                fn: (R) => {
                  let { x: _, y: k } = R;
                  return { x: _, y: k };
                },
              },
              ...m
            } = Jn(a, n),
            p = { x: r, y: l },
            g = await Kl(n, m),
            v = Zn(In(o)),
            S = Xd(v);
          let E = p[S],
            w = p[v];
          if (c) {
            const R = S === 'y' ? 'top' : 'left',
              _ = S === 'y' ? 'bottom' : 'right',
              k = E + g[R],
              L = E - g[_];
            E = Dd(k, E, L);
          }
          if (d) {
            const R = v === 'y' ? 'top' : 'left',
              _ = v === 'y' ? 'bottom' : 'right',
              k = w + g[R],
              L = w - g[_];
            w = Dd(k, w, L);
          }
          const x = h.fn({ ...n, [S]: E, [v]: w });
          return {
            ...x,
            data: { x: x.x - r, y: x.y - l, enabled: { [S]: c, [v]: d } },
          };
        },
      }
    );
  },
  XA = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        options: a,
        fn(n) {
          const { x: r, y: l, placement: o, rects: c, middlewareData: d } = n,
            { offset: h = 0, mainAxis: m = !0, crossAxis: p = !0 } = Jn(a, n),
            g = { x: r, y: l },
            v = Zn(o),
            S = Xd(v);
          let E = g[S],
            w = g[v];
          const x = Jn(h, n),
            R =
              typeof x == 'number'
                ? { mainAxis: x, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...x };
          if (m) {
            const L = S === 'y' ? 'height' : 'width',
              q = c.reference[S] - c.floating[L] + R.mainAxis,
              B = c.reference[S] + c.reference[L] - R.mainAxis;
            E < q ? (E = q) : E > B && (E = B);
          }
          if (p) {
            var _, k;
            const L = S === 'y' ? 'width' : 'height',
              q = ['top', 'left'].includes(In(o)),
              B =
                c.reference[v] -
                c.floating[L] +
                ((q && ((_ = d.offset) == null ? void 0 : _[v])) || 0) +
                (q ? 0 : R.crossAxis),
              J =
                c.reference[v] +
                c.reference[L] +
                (q ? 0 : ((k = d.offset) == null ? void 0 : k[v]) || 0) -
                (q ? R.crossAxis : 0);
            w < B ? (w = B) : w > J && (w = J);
          }
          return { [S]: E, [v]: w };
        },
      }
    );
  },
  ZA = function (a) {
    return (
      a === void 0 && (a = {}),
      {
        name: 'size',
        options: a,
        async fn(n) {
          var r, l;
          const { placement: o, rects: c, platform: d, elements: h } = n,
            { apply: m = () => {}, ...p } = Jn(a, n),
            g = await Kl(n, p),
            v = In(o),
            S = Lr(o),
            E = Zn(o) === 'y',
            { width: w, height: x } = c.floating;
          let R, _;
          v === 'top' || v === 'bottom'
            ? ((R = v),
              (_ =
                S ===
                ((await (d.isRTL == null ? void 0 : d.isRTL(h.floating)))
                  ? 'start'
                  : 'end')
                  ? 'left'
                  : 'right'))
            : ((_ = v), (R = S === 'end' ? 'top' : 'bottom'));
          const k = x - g.top - g.bottom,
            L = w - g.left - g.right,
            q = Ua(x - g[R], k),
            B = Ua(w - g[_], L),
            J = !n.middlewareData.shift;
          let Z = q,
            G = B;
          if (
            ((r = n.middlewareData.shift) != null && r.enabled.x && (G = L),
            (l = n.middlewareData.shift) != null && l.enabled.y && (Z = k),
            J && !S)
          ) {
            const ne = Vt(g.left, 0),
              fe = Vt(g.right, 0),
              ce = Vt(g.top, 0),
              de = Vt(g.bottom, 0);
            E
              ? (G =
                  w -
                  2 * (ne !== 0 || fe !== 0 ? ne + fe : Vt(g.left, g.right)))
              : (Z =
                  x -
                  2 * (ce !== 0 || de !== 0 ? ce + de : Vt(g.top, g.bottom)));
          }
          await m({ ...n, availableWidth: G, availableHeight: Z });
          const W = await d.getDimensions(h.floating);
          return w !== W.width || x !== W.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function cu() {
  return typeof window < 'u';
}
function zr(a) {
  return i0(a) ? (a.nodeName || '').toLowerCase() : '#document';
}
function Qt(a) {
  var n;
  return (
    (a == null || (n = a.ownerDocument) == null ? void 0 : n.defaultView) ||
    window
  );
}
function Mn(a) {
  var n;
  return (n = (i0(a) ? a.ownerDocument : a.document) || window.document) == null
    ? void 0
    : n.documentElement;
}
function i0(a) {
  return cu() ? a instanceof Node || a instanceof Qt(a).Node : !1;
}
function hn(a) {
  return cu() ? a instanceof Element || a instanceof Qt(a).Element : !1;
}
function Cn(a) {
  return cu() ? a instanceof HTMLElement || a instanceof Qt(a).HTMLElement : !1;
}
function vv(a) {
  return !cu() || typeof ShadowRoot > 'u'
    ? !1
    : a instanceof ShadowRoot || a instanceof Qt(a).ShadowRoot;
}
function is(a) {
  const { overflow: n, overflowX: r, overflowY: l, display: o } = pn(a);
  return (
    /auto|scroll|overlay|hidden|clip/.test(n + l + r) &&
    !['inline', 'contents'].includes(o)
  );
}
function $A(a) {
  return ['table', 'td', 'th'].includes(zr(a));
}
function fu(a) {
  return [':popover-open', ':modal'].some((n) => {
    try {
      return a.matches(n);
    } catch {
      return !1;
    }
  });
}
function Jd(a) {
  const n = Id(),
    r = hn(a) ? pn(a) : a;
  return (
    ['transform', 'translate', 'scale', 'rotate', 'perspective'].some((l) =>
      r[l] ? r[l] !== 'none' : !1,
    ) ||
    (r.containerType ? r.containerType !== 'normal' : !1) ||
    (!n && (r.backdropFilter ? r.backdropFilter !== 'none' : !1)) ||
    (!n && (r.filter ? r.filter !== 'none' : !1)) ||
    ['transform', 'translate', 'scale', 'rotate', 'perspective', 'filter'].some(
      (l) => (r.willChange || '').includes(l),
    ) ||
    ['paint', 'layout', 'strict', 'content'].some((l) =>
      (r.contain || '').includes(l),
    )
  );
}
function JA(a) {
  let n = ja(a);
  for (; Cn(n) && !Cr(n); ) {
    if (Jd(n)) return n;
    if (fu(n)) return null;
    n = ja(n);
  }
  return null;
}
function Id() {
  return typeof CSS > 'u' || !CSS.supports
    ? !1
    : CSS.supports('-webkit-backdrop-filter', 'none');
}
function Cr(a) {
  return ['html', 'body', '#document'].includes(zr(a));
}
function pn(a) {
  return Qt(a).getComputedStyle(a);
}
function du(a) {
  return hn(a)
    ? { scrollLeft: a.scrollLeft, scrollTop: a.scrollTop }
    : { scrollLeft: a.scrollX, scrollTop: a.scrollY };
}
function ja(a) {
  if (zr(a) === 'html') return a;
  const n = a.assignedSlot || a.parentNode || (vv(a) && a.host) || Mn(a);
  return vv(n) ? n.host : n;
}
function r0(a) {
  const n = ja(a);
  return Cr(n)
    ? a.ownerDocument
      ? a.ownerDocument.body
      : a.body
    : Cn(n) && is(n)
      ? n
      : r0(n);
}
function Fl(a, n, r) {
  var l;
  n === void 0 && (n = []), r === void 0 && (r = !0);
  const o = r0(a),
    c = o === ((l = a.ownerDocument) == null ? void 0 : l.body),
    d = Qt(o);
  if (c) {
    const h = Nd(d);
    return n.concat(
      d,
      d.visualViewport || [],
      is(o) ? o : [],
      h && r ? Fl(h) : [],
    );
  }
  return n.concat(o, Fl(o, [], r));
}
function Nd(a) {
  return a.parent && Object.getPrototypeOf(a.parent) ? a.frameElement : null;
}
function l0(a) {
  const n = pn(a);
  let r = parseFloat(n.width) || 0,
    l = parseFloat(n.height) || 0;
  const o = Cn(a),
    c = o ? a.offsetWidth : r,
    d = o ? a.offsetHeight : l,
    h = Zo(r) !== c || Zo(l) !== d;
  return h && ((r = c), (l = d)), { width: r, height: l, $: h };
}
function Wd(a) {
  return hn(a) ? a : a.contextElement;
}
function hr(a) {
  const n = Wd(a);
  if (!Cn(n)) return Tn(1);
  const r = n.getBoundingClientRect(),
    { width: l, height: o, $: c } = l0(n);
  let d = (c ? Zo(r.width) : r.width) / l,
    h = (c ? Zo(r.height) : r.height) / o;
  return (
    (!d || !Number.isFinite(d)) && (d = 1),
    (!h || !Number.isFinite(h)) && (h = 1),
    { x: d, y: h }
  );
}
const IA = Tn(0);
function s0(a) {
  const n = Qt(a);
  return !Id() || !n.visualViewport
    ? IA
    : { x: n.visualViewport.offsetLeft, y: n.visualViewport.offsetTop };
}
function WA(a, n, r) {
  return n === void 0 && (n = !1), !r || (n && r !== Qt(a)) ? !1 : n;
}
function gi(a, n, r, l) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  const o = a.getBoundingClientRect(),
    c = Wd(a);
  let d = Tn(1);
  n && (l ? hn(l) && (d = hr(l)) : (d = hr(a)));
  const h = WA(c, r, l) ? s0(c) : Tn(0);
  let m = (o.left + h.x) / d.x,
    p = (o.top + h.y) / d.y,
    g = o.width / d.x,
    v = o.height / d.y;
  if (c) {
    const S = Qt(c),
      E = l && hn(l) ? Qt(l) : l;
    let w = S,
      x = Nd(w);
    for (; x && l && E !== w; ) {
      const R = hr(x),
        _ = x.getBoundingClientRect(),
        k = pn(x),
        L = _.left + (x.clientLeft + parseFloat(k.paddingLeft)) * R.x,
        q = _.top + (x.clientTop + parseFloat(k.paddingTop)) * R.y;
      (m *= R.x),
        (p *= R.y),
        (g *= R.x),
        (v *= R.y),
        (m += L),
        (p += q),
        (w = Qt(x)),
        (x = Nd(w));
    }
  }
  return Jo({ width: g, height: v, x: m, y: p });
}
function eh(a, n) {
  const r = du(a).scrollLeft;
  return n ? n.left + r : gi(Mn(a)).left + r;
}
function o0(a, n, r) {
  r === void 0 && (r = !1);
  const l = a.getBoundingClientRect(),
    o = l.left + n.scrollLeft - (r ? 0 : eh(a, l)),
    c = l.top + n.scrollTop;
  return { x: o, y: c };
}
function eT(a) {
  let { elements: n, rect: r, offsetParent: l, strategy: o } = a;
  const c = o === 'fixed',
    d = Mn(l),
    h = n ? fu(n.floating) : !1;
  if (l === d || (h && c)) return r;
  let m = { scrollLeft: 0, scrollTop: 0 },
    p = Tn(1);
  const g = Tn(0),
    v = Cn(l);
  if (
    (v || (!v && !c)) &&
    ((zr(l) !== 'body' || is(d)) && (m = du(l)), Cn(l))
  ) {
    const E = gi(l);
    (p = hr(l)), (g.x = E.x + l.clientLeft), (g.y = E.y + l.clientTop);
  }
  const S = d && !v && !c ? o0(d, m, !0) : Tn(0);
  return {
    width: r.width * p.x,
    height: r.height * p.y,
    x: r.x * p.x - m.scrollLeft * p.x + g.x + S.x,
    y: r.y * p.y - m.scrollTop * p.y + g.y + S.y,
  };
}
function tT(a) {
  return Array.from(a.getClientRects());
}
function nT(a) {
  const n = Mn(a),
    r = du(a),
    l = a.ownerDocument.body,
    o = Vt(n.scrollWidth, n.clientWidth, l.scrollWidth, l.clientWidth),
    c = Vt(n.scrollHeight, n.clientHeight, l.scrollHeight, l.clientHeight);
  let d = -r.scrollLeft + eh(a);
  const h = -r.scrollTop;
  return (
    pn(l).direction === 'rtl' && (d += Vt(n.clientWidth, l.clientWidth) - o),
    { width: o, height: c, x: d, y: h }
  );
}
function aT(a, n) {
  const r = Qt(a),
    l = Mn(a),
    o = r.visualViewport;
  let c = l.clientWidth,
    d = l.clientHeight,
    h = 0,
    m = 0;
  if (o) {
    (c = o.width), (d = o.height);
    const p = Id();
    (!p || (p && n === 'fixed')) && ((h = o.offsetLeft), (m = o.offsetTop));
  }
  return { width: c, height: d, x: h, y: m };
}
function iT(a, n) {
  const r = gi(a, !0, n === 'fixed'),
    l = r.top + a.clientTop,
    o = r.left + a.clientLeft,
    c = Cn(a) ? hr(a) : Tn(1),
    d = a.clientWidth * c.x,
    h = a.clientHeight * c.y,
    m = o * c.x,
    p = l * c.y;
  return { width: d, height: h, x: m, y: p };
}
function bv(a, n, r) {
  let l;
  if (n === 'viewport') l = aT(a, r);
  else if (n === 'document') l = nT(Mn(a));
  else if (hn(n)) l = iT(n, r);
  else {
    const o = s0(a);
    l = { x: n.x - o.x, y: n.y - o.y, width: n.width, height: n.height };
  }
  return Jo(l);
}
function u0(a, n) {
  const r = ja(a);
  return r === n || !hn(r) || Cr(r)
    ? !1
    : pn(r).position === 'fixed' || u0(r, n);
}
function rT(a, n) {
  const r = n.get(a);
  if (r) return r;
  let l = Fl(a, [], !1).filter((h) => hn(h) && zr(h) !== 'body'),
    o = null;
  const c = pn(a).position === 'fixed';
  let d = c ? ja(a) : a;
  for (; hn(d) && !Cr(d); ) {
    const h = pn(d),
      m = Jd(d);
    !m && h.position === 'fixed' && (o = null),
      (
        c
          ? !m && !o
          : (!m &&
              h.position === 'static' &&
              !!o &&
              ['absolute', 'fixed'].includes(o.position)) ||
            (is(d) && !m && u0(a, d))
      )
        ? (l = l.filter((g) => g !== d))
        : (o = h),
      (d = ja(d));
  }
  return n.set(a, l), l;
}
function lT(a) {
  let { element: n, boundary: r, rootBoundary: l, strategy: o } = a;
  const d = [
      ...(r === 'clippingAncestors'
        ? fu(n)
          ? []
          : rT(n, this._c)
        : [].concat(r)),
      l,
    ],
    h = d[0],
    m = d.reduce(
      (p, g) => {
        const v = bv(n, g, o);
        return (
          (p.top = Vt(v.top, p.top)),
          (p.right = Ua(v.right, p.right)),
          (p.bottom = Ua(v.bottom, p.bottom)),
          (p.left = Vt(v.left, p.left)),
          p
        );
      },
      bv(n, h, o),
    );
  return {
    width: m.right - m.left,
    height: m.bottom - m.top,
    x: m.left,
    y: m.top,
  };
}
function sT(a) {
  const { width: n, height: r } = l0(a);
  return { width: n, height: r };
}
function oT(a, n, r) {
  const l = Cn(n),
    o = Mn(n),
    c = r === 'fixed',
    d = gi(a, !0, c, n);
  let h = { scrollLeft: 0, scrollTop: 0 };
  const m = Tn(0);
  function p() {
    m.x = eh(o);
  }
  if (l || (!l && !c))
    if (((zr(n) !== 'body' || is(o)) && (h = du(n)), l)) {
      const E = gi(n, !0, c, n);
      (m.x = E.x + n.clientLeft), (m.y = E.y + n.clientTop);
    } else o && p();
  c && !l && o && p();
  const g = o && !l && !c ? o0(o, h) : Tn(0),
    v = d.left + h.scrollLeft - m.x - g.x,
    S = d.top + h.scrollTop - m.y - g.y;
  return { x: v, y: S, width: d.width, height: d.height };
}
function Zf(a) {
  return pn(a).position === 'static';
}
function Sv(a, n) {
  if (!Cn(a) || pn(a).position === 'fixed') return null;
  if (n) return n(a);
  let r = a.offsetParent;
  return Mn(a) === r && (r = r.ownerDocument.body), r;
}
function c0(a, n) {
  const r = Qt(a);
  if (fu(a)) return r;
  if (!Cn(a)) {
    let o = ja(a);
    for (; o && !Cr(o); ) {
      if (hn(o) && !Zf(o)) return o;
      o = ja(o);
    }
    return r;
  }
  let l = Sv(a, n);
  for (; l && $A(l) && Zf(l); ) l = Sv(l, n);
  return l && Cr(l) && Zf(l) && !Jd(l) ? r : l || JA(a) || r;
}
const uT = async function (a) {
  const n = this.getOffsetParent || c0,
    r = this.getDimensions,
    l = await r(a.floating);
  return {
    reference: oT(a.reference, await n(a.floating), a.strategy),
    floating: { x: 0, y: 0, width: l.width, height: l.height },
  };
};
function cT(a) {
  return pn(a).direction === 'rtl';
}
const fT = {
  convertOffsetParentRelativeRectToViewportRelativeRect: eT,
  getDocumentElement: Mn,
  getClippingRect: lT,
  getOffsetParent: c0,
  getElementRects: uT,
  getClientRects: tT,
  getDimensions: sT,
  getScale: hr,
  isElement: hn,
  isRTL: cT,
};
function f0(a, n) {
  return (
    a.x === n.x && a.y === n.y && a.width === n.width && a.height === n.height
  );
}
function dT(a, n) {
  let r = null,
    l;
  const o = Mn(a);
  function c() {
    var h;
    clearTimeout(l), (h = r) == null || h.disconnect(), (r = null);
  }
  function d(h, m) {
    h === void 0 && (h = !1), m === void 0 && (m = 1), c();
    const p = a.getBoundingClientRect(),
      { left: g, top: v, width: S, height: E } = p;
    if ((h || n(), !S || !E)) return;
    const w = Mo(v),
      x = Mo(o.clientWidth - (g + S)),
      R = Mo(o.clientHeight - (v + E)),
      _ = Mo(g),
      L = {
        rootMargin: -w + 'px ' + -x + 'px ' + -R + 'px ' + -_ + 'px',
        threshold: Vt(0, Ua(1, m)) || 1,
      };
    let q = !0;
    function B(J) {
      const Z = J[0].intersectionRatio;
      if (Z !== m) {
        if (!q) return d();
        Z
          ? d(!1, Z)
          : (l = setTimeout(() => {
              d(!1, 1e-7);
            }, 1e3));
      }
      Z === 1 && !f0(p, a.getBoundingClientRect()) && d(), (q = !1);
    }
    try {
      r = new IntersectionObserver(B, { ...L, root: o.ownerDocument });
    } catch {
      r = new IntersectionObserver(B, L);
    }
    r.observe(a);
  }
  return d(!0), c;
}
function hT(a, n, r, l) {
  l === void 0 && (l = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: c = !0,
      elementResize: d = typeof ResizeObserver == 'function',
      layoutShift: h = typeof IntersectionObserver == 'function',
      animationFrame: m = !1,
    } = l,
    p = Wd(a),
    g = o || c ? [...(p ? Fl(p) : []), ...Fl(n)] : [];
  g.forEach((_) => {
    o && _.addEventListener('scroll', r, { passive: !0 }),
      c && _.addEventListener('resize', r);
  });
  const v = p && h ? dT(p, r) : null;
  let S = -1,
    E = null;
  d &&
    ((E = new ResizeObserver((_) => {
      let [k] = _;
      k &&
        k.target === p &&
        E &&
        (E.unobserve(n),
        cancelAnimationFrame(S),
        (S = requestAnimationFrame(() => {
          var L;
          (L = E) == null || L.observe(n);
        }))),
        r();
    })),
    p && !m && E.observe(p),
    E.observe(n));
  let w,
    x = m ? gi(a) : null;
  m && R();
  function R() {
    const _ = gi(a);
    x && !f0(x, _) && r(), (x = _), (w = requestAnimationFrame(R));
  }
  return (
    r(),
    () => {
      var _;
      g.forEach((k) => {
        o && k.removeEventListener('scroll', r),
          c && k.removeEventListener('resize', r);
      }),
        v == null || v(),
        (_ = E) == null || _.disconnect(),
        (E = null),
        m && cancelAnimationFrame(w);
    }
  );
}
const pT = KA,
  mT = FA,
  gT = VA,
  yT = ZA,
  vT = QA,
  xv = PA,
  bT = XA,
  ST = (a, n, r) => {
    const l = new Map(),
      o = { platform: fT, ...r },
      c = { ...o.platform, _c: l };
    return GA(a, n, { ...o, platform: c });
  };
var Ho = typeof document < 'u' ? O.useLayoutEffect : O.useEffect;
function Io(a, n) {
  if (a === n) return !0;
  if (typeof a != typeof n) return !1;
  if (typeof a == 'function' && a.toString() === n.toString()) return !0;
  let r, l, o;
  if (a && n && typeof a == 'object') {
    if (Array.isArray(a)) {
      if (((r = a.length), r !== n.length)) return !1;
      for (l = r; l-- !== 0; ) if (!Io(a[l], n[l])) return !1;
      return !0;
    }
    if (((o = Object.keys(a)), (r = o.length), r !== Object.keys(n).length))
      return !1;
    for (l = r; l-- !== 0; ) if (!{}.hasOwnProperty.call(n, o[l])) return !1;
    for (l = r; l-- !== 0; ) {
      const c = o[l];
      if (!(c === '_owner' && a.$$typeof) && !Io(a[c], n[c])) return !1;
    }
    return !0;
  }
  return a !== a && n !== n;
}
function d0(a) {
  return typeof window > 'u'
    ? 1
    : (a.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function wv(a, n) {
  const r = d0(a);
  return Math.round(n * r) / r;
}
function $f(a) {
  const n = O.useRef(a);
  return (
    Ho(() => {
      n.current = a;
    }),
    n
  );
}
function xT(a) {
  a === void 0 && (a = {});
  const {
      placement: n = 'bottom',
      strategy: r = 'absolute',
      middleware: l = [],
      platform: o,
      elements: { reference: c, floating: d } = {},
      transform: h = !0,
      whileElementsMounted: m,
      open: p,
    } = a,
    [g, v] = O.useState({
      x: 0,
      y: 0,
      strategy: r,
      placement: n,
      middlewareData: {},
      isPositioned: !1,
    }),
    [S, E] = O.useState(l);
  Io(S, l) || E(l);
  const [w, x] = O.useState(null),
    [R, _] = O.useState(null),
    k = O.useCallback((P) => {
      P !== J.current && ((J.current = P), x(P));
    }, []),
    L = O.useCallback((P) => {
      P !== Z.current && ((Z.current = P), _(P));
    }, []),
    q = c || w,
    B = d || R,
    J = O.useRef(null),
    Z = O.useRef(null),
    G = O.useRef(g),
    W = m != null,
    ne = $f(m),
    fe = $f(o),
    ce = $f(p),
    de = O.useCallback(() => {
      if (!J.current || !Z.current) return;
      const P = { placement: n, strategy: r, middleware: S };
      fe.current && (P.platform = fe.current),
        ST(J.current, Z.current, P).then((ee) => {
          const A = { ...ee, isPositioned: ce.current !== !1 };
          be.current &&
            !Io(G.current, A) &&
            ((G.current = A),
            Fd.flushSync(() => {
              v(A);
            }));
        });
    }, [S, n, r, fe, ce]);
  Ho(() => {
    p === !1 &&
      G.current.isPositioned &&
      ((G.current.isPositioned = !1), v((P) => ({ ...P, isPositioned: !1 })));
  }, [p]);
  const be = O.useRef(!1);
  Ho(
    () => (
      (be.current = !0),
      () => {
        be.current = !1;
      }
    ),
    [],
  ),
    Ho(() => {
      if ((q && (J.current = q), B && (Z.current = B), q && B)) {
        if (ne.current) return ne.current(q, B, de);
        de();
      }
    }, [q, B, de, ne, W]);
  const me = O.useMemo(
      () => ({ reference: J, floating: Z, setReference: k, setFloating: L }),
      [k, L],
    ),
    N = O.useMemo(() => ({ reference: q, floating: B }), [q, B]),
    $ = O.useMemo(() => {
      const P = { position: r, left: 0, top: 0 };
      if (!N.floating) return P;
      const ee = wv(N.floating, g.x),
        A = wv(N.floating, g.y);
      return h
        ? {
            ...P,
            transform: 'translate(' + ee + 'px, ' + A + 'px)',
            ...(d0(N.floating) >= 1.5 && { willChange: 'transform' }),
          }
        : { position: r, left: ee, top: A };
    }, [r, h, N.floating, g.x, g.y]);
  return O.useMemo(
    () => ({ ...g, update: de, refs: me, elements: N, floatingStyles: $ }),
    [g, de, me, N, $],
  );
}
const wT = (a) => {
    function n(r) {
      return {}.hasOwnProperty.call(r, 'current');
    }
    return {
      name: 'arrow',
      options: a,
      fn(r) {
        const { element: l, padding: o } = typeof a == 'function' ? a(r) : a;
        return l && n(l)
          ? l.current != null
            ? xv({ element: l.current, padding: o }).fn(r)
            : {}
          : l
            ? xv({ element: l, padding: o }).fn(r)
            : {};
      },
    };
  },
  ET = (a, n) => ({ ...pT(a), options: [a, n] }),
  RT = (a, n) => ({ ...mT(a), options: [a, n] }),
  OT = (a, n) => ({ ...bT(a), options: [a, n] }),
  AT = (a, n) => ({ ...gT(a), options: [a, n] }),
  TT = (a, n) => ({ ...yT(a), options: [a, n] }),
  CT = (a, n) => ({ ...vT(a), options: [a, n] }),
  MT = (a, n) => ({ ...wT(a), options: [a, n] });
var DT = 'Arrow',
  h0 = O.forwardRef((a, n) => {
    const { children: r, width: l = 10, height: o = 5, ...c } = a;
    return Y.jsx(xt.svg, {
      ...c,
      ref: n,
      width: l,
      height: o,
      viewBox: '0 0 30 10',
      preserveAspectRatio: 'none',
      children: a.asChild ? r : Y.jsx('polygon', { points: '0,0 30,0 15,10' }),
    });
  });
h0.displayName = DT;
var _T = h0;
function NT(a) {
  const [n, r] = O.useState(void 0);
  return (
    za(() => {
      if (a) {
        r({ width: a.offsetWidth, height: a.offsetHeight });
        const l = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const c = o[0];
          let d, h;
          if ('borderBoxSize' in c) {
            const m = c.borderBoxSize,
              p = Array.isArray(m) ? m[0] : m;
            (d = p.inlineSize), (h = p.blockSize);
          } else (d = a.offsetWidth), (h = a.offsetHeight);
          r({ width: d, height: h });
        });
        return l.observe(a, { box: 'border-box' }), () => l.unobserve(a);
      } else r(void 0);
    }, [a]),
    n
  );
}
var th = 'Popper',
  [p0, m0] = as(th),
  [LT, g0] = p0(th),
  y0 = (a) => {
    const { __scopePopper: n, children: r } = a,
      [l, o] = O.useState(null);
    return Y.jsx(LT, { scope: n, anchor: l, onAnchorChange: o, children: r });
  };
y0.displayName = th;
var v0 = 'PopperAnchor',
  b0 = O.forwardRef((a, n) => {
    const { __scopePopper: r, virtualRef: l, ...o } = a,
      c = g0(v0, r),
      d = O.useRef(null),
      h = Lt(n, d);
    return (
      O.useEffect(() => {
        c.onAnchorChange((l == null ? void 0 : l.current) || d.current);
      }),
      l ? null : Y.jsx(xt.div, { ...o, ref: h })
    );
  });
b0.displayName = v0;
var nh = 'PopperContent',
  [zT, UT] = p0(nh),
  S0 = O.forwardRef((a, n) => {
    var xe, Le, Ve, Et, rn, ln;
    const {
        __scopePopper: r,
        side: l = 'bottom',
        sideOffset: o = 0,
        align: c = 'center',
        alignOffset: d = 0,
        arrowPadding: h = 0,
        avoidCollisions: m = !0,
        collisionBoundary: p = [],
        collisionPadding: g = 0,
        sticky: v = 'partial',
        hideWhenDetached: S = !1,
        updatePositionStrategy: E = 'optimized',
        onPlaced: w,
        ...x
      } = a,
      R = g0(nh, r),
      [_, k] = O.useState(null),
      L = Lt(n, (Dn) => k(Dn)),
      [q, B] = O.useState(null),
      J = NT(q),
      Z = (J == null ? void 0 : J.width) ?? 0,
      G = (J == null ? void 0 : J.height) ?? 0,
      W = l + (c !== 'center' ? '-' + c : ''),
      ne =
        typeof g == 'number'
          ? g
          : { top: 0, right: 0, bottom: 0, left: 0, ...g },
      fe = Array.isArray(p) ? p : [p],
      ce = fe.length > 0,
      de = { padding: ne, boundary: fe.filter(kT), altBoundary: ce },
      {
        refs: be,
        floatingStyles: me,
        placement: N,
        isPositioned: $,
        middlewareData: P,
      } = xT({
        strategy: 'fixed',
        placement: W,
        whileElementsMounted: (...Dn) =>
          hT(...Dn, { animationFrame: E === 'always' }),
        elements: { reference: R.anchor },
        middleware: [
          ET({ mainAxis: o + G, alignmentAxis: d }),
          m &&
            RT({
              mainAxis: !0,
              crossAxis: !1,
              limiter: v === 'partial' ? OT() : void 0,
              ...de,
            }),
          m && AT({ ...de }),
          TT({
            ...de,
            apply: ({
              elements: Dn,
              rects: bi,
              availableWidth: yu,
              availableHeight: vu,
            }) => {
              const { width: Yt, height: bu } = bi.reference,
                ka = Dn.floating.style;
              ka.setProperty('--radix-popper-available-width', `${yu}px`),
                ka.setProperty('--radix-popper-available-height', `${vu}px`),
                ka.setProperty('--radix-popper-anchor-width', `${Yt}px`),
                ka.setProperty('--radix-popper-anchor-height', `${bu}px`);
            },
          }),
          q && MT({ element: q, padding: h }),
          BT({ arrowWidth: Z, arrowHeight: G }),
          S && CT({ strategy: 'referenceHidden', ...de }),
        ],
      }),
      [ee, A] = E0(N),
      V = $n(w);
    za(() => {
      $ && (V == null || V());
    }, [$, V]);
    const te = (xe = P.arrow) == null ? void 0 : xe.x,
      I = (Le = P.arrow) == null ? void 0 : Le.y,
      ae = ((Ve = P.arrow) == null ? void 0 : Ve.centerOffset) !== 0,
      [Se, ue] = O.useState();
    return (
      za(() => {
        _ && ue(window.getComputedStyle(_).zIndex);
      }, [_]),
      Y.jsx('div', {
        ref: be.setFloating,
        'data-radix-popper-content-wrapper': '',
        style: {
          ...me,
          transform: $ ? me.transform : 'translate(0, -200%)',
          minWidth: 'max-content',
          zIndex: Se,
          '--radix-popper-transform-origin': [
            (Et = P.transformOrigin) == null ? void 0 : Et.x,
            (rn = P.transformOrigin) == null ? void 0 : rn.y,
          ].join(' '),
          ...(((ln = P.hide) == null ? void 0 : ln.referenceHidden) && {
            visibility: 'hidden',
            pointerEvents: 'none',
          }),
        },
        dir: a.dir,
        children: Y.jsx(zT, {
          scope: r,
          placedSide: ee,
          onArrowChange: B,
          arrowX: te,
          arrowY: I,
          shouldHideArrow: ae,
          children: Y.jsx(xt.div, {
            'data-side': ee,
            'data-align': A,
            ...x,
            ref: L,
            style: { ...x.style, animation: $ ? void 0 : 'none' },
          }),
        }),
      })
    );
  });
S0.displayName = nh;
var x0 = 'PopperArrow',
  jT = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' },
  w0 = O.forwardRef(function (n, r) {
    const { __scopePopper: l, ...o } = n,
      c = UT(x0, l),
      d = jT[c.placedSide];
    return Y.jsx('span', {
      ref: c.onArrowChange,
      style: {
        position: 'absolute',
        left: c.arrowX,
        top: c.arrowY,
        [d]: 0,
        transformOrigin: {
          top: '',
          right: '0 0',
          bottom: 'center 0',
          left: '100% 0',
        }[c.placedSide],
        transform: {
          top: 'translateY(100%)',
          right: 'translateY(50%) rotate(90deg) translateX(-50%)',
          bottom: 'rotate(180deg)',
          left: 'translateY(50%) rotate(-90deg) translateX(50%)',
        }[c.placedSide],
        visibility: c.shouldHideArrow ? 'hidden' : void 0,
      },
      children: Y.jsx(_T, {
        ...o,
        ref: r,
        style: { ...o.style, display: 'block' },
      }),
    });
  });
w0.displayName = x0;
function kT(a) {
  return a !== null;
}
var BT = (a) => ({
  name: 'transformOrigin',
  options: a,
  fn(n) {
    var R, _, k;
    const { placement: r, rects: l, middlewareData: o } = n,
      d = ((R = o.arrow) == null ? void 0 : R.centerOffset) !== 0,
      h = d ? 0 : a.arrowWidth,
      m = d ? 0 : a.arrowHeight,
      [p, g] = E0(r),
      v = { start: '0%', center: '50%', end: '100%' }[g],
      S = (((_ = o.arrow) == null ? void 0 : _.x) ?? 0) + h / 2,
      E = (((k = o.arrow) == null ? void 0 : k.y) ?? 0) + m / 2;
    let w = '',
      x = '';
    return (
      p === 'bottom'
        ? ((w = d ? v : `${S}px`), (x = `${-m}px`))
        : p === 'top'
          ? ((w = d ? v : `${S}px`), (x = `${l.floating.height + m}px`))
          : p === 'right'
            ? ((w = `${-m}px`), (x = d ? v : `${E}px`))
            : p === 'left' &&
              ((w = `${l.floating.width + m}px`), (x = d ? v : `${E}px`)),
      { data: { x: w, y: x } }
    );
  },
});
function E0(a) {
  const [n, r = 'center'] = a.split('-');
  return [n, r];
}
var HT = y0,
  qT = b0,
  GT = S0,
  PT = w0,
  VT = 'Portal',
  R0 = O.forwardRef((a, n) => {
    var h;
    const { container: r, ...l } = a,
      [o, c] = O.useState(!1);
    za(() => c(!0), []);
    const d =
      r ||
      (o &&
        ((h = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : h.body));
    return d ? dA.createPortal(Y.jsx(xt.div, { ...l, ref: n }), d) : null;
  });
R0.displayName = VT;
function QT(a, n) {
  return O.useReducer((r, l) => n[r][l] ?? r, a);
}
var rs = (a) => {
  const { present: n, children: r } = a,
    l = YT(n),
    o =
      typeof r == 'function' ? r({ present: l.isPresent }) : O.Children.only(r),
    c = Lt(l.ref, KT(o));
  return typeof r == 'function' || l.isPresent
    ? O.cloneElement(o, { ref: c })
    : null;
};
rs.displayName = 'Presence';
function YT(a) {
  const [n, r] = O.useState(),
    l = O.useRef(null),
    o = O.useRef(a),
    c = O.useRef('none'),
    d = a ? 'mounted' : 'unmounted',
    [h, m] = QT(d, {
      mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
      unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
      unmounted: { MOUNT: 'mounted' },
    });
  return (
    O.useEffect(() => {
      const p = Do(l.current);
      c.current = h === 'mounted' ? p : 'none';
    }, [h]),
    za(() => {
      const p = l.current,
        g = o.current;
      if (g !== a) {
        const S = c.current,
          E = Do(p);
        a
          ? m('MOUNT')
          : E === 'none' || (p == null ? void 0 : p.display) === 'none'
            ? m('UNMOUNT')
            : m(g && S !== E ? 'ANIMATION_OUT' : 'UNMOUNT'),
          (o.current = a);
      }
    }, [a, m]),
    za(() => {
      if (n) {
        let p;
        const g = n.ownerDocument.defaultView ?? window,
          v = (E) => {
            const x = Do(l.current).includes(E.animationName);
            if (E.target === n && x && (m('ANIMATION_END'), !o.current)) {
              const R = n.style.animationFillMode;
              (n.style.animationFillMode = 'forwards'),
                (p = g.setTimeout(() => {
                  n.style.animationFillMode === 'forwards' &&
                    (n.style.animationFillMode = R);
                }));
            }
          },
          S = (E) => {
            E.target === n && (c.current = Do(l.current));
          };
        return (
          n.addEventListener('animationstart', S),
          n.addEventListener('animationcancel', v),
          n.addEventListener('animationend', v),
          () => {
            g.clearTimeout(p),
              n.removeEventListener('animationstart', S),
              n.removeEventListener('animationcancel', v),
              n.removeEventListener('animationend', v);
          }
        );
      } else m('ANIMATION_END');
    }, [n, m]),
    {
      isPresent: ['mounted', 'unmountSuspended'].includes(h),
      ref: O.useCallback((p) => {
        (l.current = p ? getComputedStyle(p) : null), r(p);
      }, []),
    }
  );
}
function Do(a) {
  return (a == null ? void 0 : a.animationName) || 'none';
}
function KT(a) {
  var l, o;
  let n =
      (l = Object.getOwnPropertyDescriptor(a.props, 'ref')) == null
        ? void 0
        : l.get,
    r = n && 'isReactWarning' in n && n.isReactWarning;
  return r
    ? a.ref
    : ((n =
        (o = Object.getOwnPropertyDescriptor(a, 'ref')) == null
          ? void 0
          : o.get),
      (r = n && 'isReactWarning' in n && n.isReactWarning),
      r ? a.props.ref : a.props.ref || a.ref);
}
var Jf = 'rovingFocusGroup.onEntryFocus',
  FT = { bubbles: !1, cancelable: !0 },
  ls = 'RovingFocusGroup',
  [Ld, O0, XT] = $b(ls),
  [ZT, A0] = as(ls, [XT]),
  [$T, JT] = ZT(ls),
  T0 = O.forwardRef((a, n) =>
    Y.jsx(Ld.Provider, {
      scope: a.__scopeRovingFocusGroup,
      children: Y.jsx(Ld.Slot, {
        scope: a.__scopeRovingFocusGroup,
        children: Y.jsx(IT, { ...a, ref: n }),
      }),
    }),
  );
T0.displayName = ls;
var IT = O.forwardRef((a, n) => {
    const {
        __scopeRovingFocusGroup: r,
        orientation: l,
        loop: o = !1,
        dir: c,
        currentTabStopId: d,
        defaultCurrentTabStopId: h,
        onCurrentTabStopIdChange: m,
        onEntryFocus: p,
        preventScrollOnEntryFocus: g = !1,
        ...v
      } = a,
      S = O.useRef(null),
      E = Lt(n, S),
      w = Jb(c),
      [x, R] = Xb({ prop: d, defaultProp: h ?? null, onChange: m, caller: ls }),
      [_, k] = O.useState(!1),
      L = $n(p),
      q = O0(r),
      B = O.useRef(!1),
      [J, Z] = O.useState(0);
    return (
      O.useEffect(() => {
        const G = S.current;
        if (G)
          return G.addEventListener(Jf, L), () => G.removeEventListener(Jf, L);
      }, [L]),
      Y.jsx($T, {
        scope: r,
        orientation: l,
        dir: w,
        loop: o,
        currentTabStopId: x,
        onItemFocus: O.useCallback((G) => R(G), [R]),
        onItemShiftTab: O.useCallback(() => k(!0), []),
        onFocusableItemAdd: O.useCallback(() => Z((G) => G + 1), []),
        onFocusableItemRemove: O.useCallback(() => Z((G) => G - 1), []),
        children: Y.jsx(xt.div, {
          tabIndex: _ || J === 0 ? -1 : 0,
          'data-orientation': l,
          ...v,
          ref: E,
          style: { outline: 'none', ...a.style },
          onMouseDown: Ne(a.onMouseDown, () => {
            B.current = !0;
          }),
          onFocus: Ne(a.onFocus, (G) => {
            const W = !B.current;
            if (G.target === G.currentTarget && W && !_) {
              const ne = new CustomEvent(Jf, FT);
              if ((G.currentTarget.dispatchEvent(ne), !ne.defaultPrevented)) {
                const fe = q().filter((N) => N.focusable),
                  ce = fe.find((N) => N.active),
                  de = fe.find((N) => N.id === x),
                  me = [ce, de, ...fe]
                    .filter(Boolean)
                    .map((N) => N.ref.current);
                D0(me, g);
              }
            }
            B.current = !1;
          }),
          onBlur: Ne(a.onBlur, () => k(!1)),
        }),
      })
    );
  }),
  C0 = 'RovingFocusGroupItem',
  M0 = O.forwardRef((a, n) => {
    const {
        __scopeRovingFocusGroup: r,
        focusable: l = !0,
        active: o = !1,
        tabStopId: c,
        children: d,
        ...h
      } = a,
      m = Md(),
      p = c || m,
      g = JT(C0, r),
      v = g.currentTabStopId === p,
      S = O0(r),
      {
        onFocusableItemAdd: E,
        onFocusableItemRemove: w,
        currentTabStopId: x,
      } = g;
    return (
      O.useEffect(() => {
        if (l) return E(), () => w();
      }, [l, E, w]),
      Y.jsx(Ld.ItemSlot, {
        scope: r,
        id: p,
        focusable: l,
        active: o,
        children: Y.jsx(xt.span, {
          tabIndex: v ? 0 : -1,
          'data-orientation': g.orientation,
          ...h,
          ref: n,
          onMouseDown: Ne(a.onMouseDown, (R) => {
            l ? g.onItemFocus(p) : R.preventDefault();
          }),
          onFocus: Ne(a.onFocus, () => g.onItemFocus(p)),
          onKeyDown: Ne(a.onKeyDown, (R) => {
            if (R.key === 'Tab' && R.shiftKey) {
              g.onItemShiftTab();
              return;
            }
            if (R.target !== R.currentTarget) return;
            const _ = tC(R, g.orientation, g.dir);
            if (_ !== void 0) {
              if (R.metaKey || R.ctrlKey || R.altKey || R.shiftKey) return;
              R.preventDefault();
              let L = S()
                .filter((q) => q.focusable)
                .map((q) => q.ref.current);
              if (_ === 'last') L.reverse();
              else if (_ === 'prev' || _ === 'next') {
                _ === 'prev' && L.reverse();
                const q = L.indexOf(R.currentTarget);
                L = g.loop ? nC(L, q + 1) : L.slice(q + 1);
              }
              setTimeout(() => D0(L));
            }
          }),
          children:
            typeof d == 'function'
              ? d({ isCurrentTabStop: v, hasTabStop: x != null })
              : d,
        }),
      })
    );
  });
M0.displayName = C0;
var WT = {
  ArrowLeft: 'prev',
  ArrowUp: 'prev',
  ArrowRight: 'next',
  ArrowDown: 'next',
  PageUp: 'first',
  Home: 'first',
  PageDown: 'last',
  End: 'last',
};
function eC(a, n) {
  return n !== 'rtl'
    ? a
    : a === 'ArrowLeft'
      ? 'ArrowRight'
      : a === 'ArrowRight'
        ? 'ArrowLeft'
        : a;
}
function tC(a, n, r) {
  const l = eC(a.key, r);
  if (
    !(n === 'vertical' && ['ArrowLeft', 'ArrowRight'].includes(l)) &&
    !(n === 'horizontal' && ['ArrowUp', 'ArrowDown'].includes(l))
  )
    return WT[l];
}
function D0(a, n = !1) {
  const r = document.activeElement;
  for (const l of a)
    if (
      l === r ||
      (l.focus({ preventScroll: n }), document.activeElement !== r)
    )
      return;
}
function nC(a, n) {
  return a.map((r, l) => a[(n + l) % a.length]);
}
var aC = T0,
  iC = M0,
  rC = function (a) {
    if (typeof document > 'u') return null;
    var n = Array.isArray(a) ? a[0] : a;
    return n.ownerDocument.body;
  },
  ur = new WeakMap(),
  _o = new WeakMap(),
  No = {},
  If = 0,
  _0 = function (a) {
    return a && (a.host || _0(a.parentNode));
  },
  lC = function (a, n) {
    return n
      .map(function (r) {
        if (a.contains(r)) return r;
        var l = _0(r);
        return l && a.contains(l)
          ? l
          : (console.error(
              'aria-hidden',
              r,
              'in not contained inside',
              a,
              '. Doing nothing',
            ),
            null);
      })
      .filter(function (r) {
        return !!r;
      });
  },
  sC = function (a, n, r, l) {
    var o = lC(n, Array.isArray(a) ? a : [a]);
    No[r] || (No[r] = new WeakMap());
    var c = No[r],
      d = [],
      h = new Set(),
      m = new Set(o),
      p = function (v) {
        !v || h.has(v) || (h.add(v), p(v.parentNode));
      };
    o.forEach(p);
    var g = function (v) {
      !v ||
        m.has(v) ||
        Array.prototype.forEach.call(v.children, function (S) {
          if (h.has(S)) g(S);
          else
            try {
              var E = S.getAttribute(l),
                w = E !== null && E !== 'false',
                x = (ur.get(S) || 0) + 1,
                R = (c.get(S) || 0) + 1;
              ur.set(S, x),
                c.set(S, R),
                d.push(S),
                x === 1 && w && _o.set(S, !0),
                R === 1 && S.setAttribute(r, 'true'),
                w || S.setAttribute(l, 'true');
            } catch (_) {
              console.error('aria-hidden: cannot operate on ', S, _);
            }
        });
    };
    return (
      g(n),
      h.clear(),
      If++,
      function () {
        d.forEach(function (v) {
          var S = ur.get(v) - 1,
            E = c.get(v) - 1;
          ur.set(v, S),
            c.set(v, E),
            S || (_o.has(v) || v.removeAttribute(l), _o.delete(v)),
            E || v.removeAttribute(r);
        }),
          If--,
          If ||
            ((ur = new WeakMap()),
            (ur = new WeakMap()),
            (_o = new WeakMap()),
            (No = {}));
      }
    );
  },
  oC = function (a, n, r) {
    r === void 0 && (r = 'data-aria-hidden');
    var l = Array.from(Array.isArray(a) ? a : [a]),
      o = rC(a);
    return o
      ? (l.push.apply(l, Array.from(o.querySelectorAll('[aria-live], script'))),
        sC(l, o, r, 'aria-hidden'))
      : function () {
          return null;
        };
  },
  On = function () {
    return (
      (On =
        Object.assign ||
        function (n) {
          for (var r, l = 1, o = arguments.length; l < o; l++) {
            r = arguments[l];
            for (var c in r)
              Object.prototype.hasOwnProperty.call(r, c) && (n[c] = r[c]);
          }
          return n;
        }),
      On.apply(this, arguments)
    );
  };
function N0(a, n) {
  var r = {};
  for (var l in a)
    Object.prototype.hasOwnProperty.call(a, l) &&
      n.indexOf(l) < 0 &&
      (r[l] = a[l]);
  if (a != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, l = Object.getOwnPropertySymbols(a); o < l.length; o++)
      n.indexOf(l[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(a, l[o]) &&
        (r[l[o]] = a[l[o]]);
  return r;
}
function uC(a, n, r) {
  if (r || arguments.length === 2)
    for (var l = 0, o = n.length, c; l < o; l++)
      (c || !(l in n)) &&
        (c || (c = Array.prototype.slice.call(n, 0, l)), (c[l] = n[l]));
  return a.concat(c || Array.prototype.slice.call(n));
}
var qo = 'right-scroll-bar-position',
  Go = 'width-before-scroll-bar',
  cC = 'with-scroll-bars-hidden',
  fC = '--removed-body-scroll-bar-size';
function Wf(a, n) {
  return typeof a == 'function' ? a(n) : a && (a.current = n), a;
}
function dC(a, n) {
  var r = O.useState(function () {
    return {
      value: a,
      callback: n,
      facade: {
        get current() {
          return r.value;
        },
        set current(l) {
          var o = r.value;
          o !== l && ((r.value = l), r.callback(l, o));
        },
      },
    };
  })[0];
  return (r.callback = n), r.facade;
}
var hC = typeof window < 'u' ? O.useLayoutEffect : O.useEffect,
  Ev = new WeakMap();
function pC(a, n) {
  var r = dC(null, function (l) {
    return a.forEach(function (o) {
      return Wf(o, l);
    });
  });
  return (
    hC(
      function () {
        var l = Ev.get(r);
        if (l) {
          var o = new Set(l),
            c = new Set(a),
            d = r.current;
          o.forEach(function (h) {
            c.has(h) || Wf(h, null);
          }),
            c.forEach(function (h) {
              o.has(h) || Wf(h, d);
            });
        }
        Ev.set(r, a);
      },
      [a],
    ),
    r
  );
}
function mC(a) {
  return a;
}
function gC(a, n) {
  n === void 0 && (n = mC);
  var r = [],
    l = !1,
    o = {
      read: function () {
        if (l)
          throw new Error(
            'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.',
          );
        return r.length ? r[r.length - 1] : a;
      },
      useMedium: function (c) {
        var d = n(c, l);
        return (
          r.push(d),
          function () {
            r = r.filter(function (h) {
              return h !== d;
            });
          }
        );
      },
      assignSyncMedium: function (c) {
        for (l = !0; r.length; ) {
          var d = r;
          (r = []), d.forEach(c);
        }
        r = {
          push: function (h) {
            return c(h);
          },
          filter: function () {
            return r;
          },
        };
      },
      assignMedium: function (c) {
        l = !0;
        var d = [];
        if (r.length) {
          var h = r;
          (r = []), h.forEach(c), (d = r);
        }
        var m = function () {
            var g = d;
            (d = []), g.forEach(c);
          },
          p = function () {
            return Promise.resolve().then(m);
          };
        p(),
          (r = {
            push: function (g) {
              d.push(g), p();
            },
            filter: function (g) {
              return (d = d.filter(g)), r;
            },
          });
      },
    };
  return o;
}
function yC(a) {
  a === void 0 && (a = {});
  var n = gC(null);
  return (n.options = On({ async: !0, ssr: !1 }, a)), n;
}
var L0 = function (a) {
  var n = a.sideCar,
    r = N0(a, ['sideCar']);
  if (!n)
    throw new Error(
      'Sidecar: please provide `sideCar` property to import the right car',
    );
  var l = n.read();
  if (!l) throw new Error('Sidecar medium not found');
  return O.createElement(l, On({}, r));
};
L0.isSideCarExport = !0;
function vC(a, n) {
  return a.useMedium(n), L0;
}
var z0 = yC(),
  ed = function () {},
  hu = O.forwardRef(function (a, n) {
    var r = O.useRef(null),
      l = O.useState({
        onScrollCapture: ed,
        onWheelCapture: ed,
        onTouchMoveCapture: ed,
      }),
      o = l[0],
      c = l[1],
      d = a.forwardProps,
      h = a.children,
      m = a.className,
      p = a.removeScrollBar,
      g = a.enabled,
      v = a.shards,
      S = a.sideCar,
      E = a.noRelative,
      w = a.noIsolation,
      x = a.inert,
      R = a.allowPinchZoom,
      _ = a.as,
      k = _ === void 0 ? 'div' : _,
      L = a.gapMode,
      q = N0(a, [
        'forwardProps',
        'children',
        'className',
        'removeScrollBar',
        'enabled',
        'shards',
        'sideCar',
        'noRelative',
        'noIsolation',
        'inert',
        'allowPinchZoom',
        'as',
        'gapMode',
      ]),
      B = S,
      J = pC([r, n]),
      Z = On(On({}, q), o);
    return O.createElement(
      O.Fragment,
      null,
      g &&
        O.createElement(B, {
          sideCar: z0,
          removeScrollBar: p,
          shards: v,
          noRelative: E,
          noIsolation: w,
          inert: x,
          setCallbacks: c,
          allowPinchZoom: !!R,
          lockRef: r,
          gapMode: L,
        }),
      d
        ? O.cloneElement(O.Children.only(h), On(On({}, Z), { ref: J }))
        : O.createElement(k, On({}, Z, { className: m, ref: J }), h),
    );
  });
hu.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
hu.classNames = { fullWidth: Go, zeroRight: qo };
var bC = function () {
  if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__;
};
function SC() {
  if (!document) return null;
  var a = document.createElement('style');
  a.type = 'text/css';
  var n = bC();
  return n && a.setAttribute('nonce', n), a;
}
function xC(a, n) {
  a.styleSheet
    ? (a.styleSheet.cssText = n)
    : a.appendChild(document.createTextNode(n));
}
function wC(a) {
  var n = document.head || document.getElementsByTagName('head')[0];
  n.appendChild(a);
}
var EC = function () {
    var a = 0,
      n = null;
    return {
      add: function (r) {
        a == 0 && (n = SC()) && (xC(n, r), wC(n)), a++;
      },
      remove: function () {
        a--,
          !a && n && (n.parentNode && n.parentNode.removeChild(n), (n = null));
      },
    };
  },
  RC = function () {
    var a = EC();
    return function (n, r) {
      O.useEffect(
        function () {
          return (
            a.add(n),
            function () {
              a.remove();
            }
          );
        },
        [n && r],
      );
    };
  },
  U0 = function () {
    var a = RC(),
      n = function (r) {
        var l = r.styles,
          o = r.dynamic;
        return a(l, o), null;
      };
    return n;
  },
  OC = { left: 0, top: 0, right: 0, gap: 0 },
  td = function (a) {
    return parseInt(a || '', 10) || 0;
  },
  AC = function (a) {
    var n = window.getComputedStyle(document.body),
      r = n[a === 'padding' ? 'paddingLeft' : 'marginLeft'],
      l = n[a === 'padding' ? 'paddingTop' : 'marginTop'],
      o = n[a === 'padding' ? 'paddingRight' : 'marginRight'];
    return [td(r), td(l), td(o)];
  },
  TC = function (a) {
    if ((a === void 0 && (a = 'margin'), typeof window > 'u')) return OC;
    var n = AC(a),
      r = document.documentElement.clientWidth,
      l = window.innerWidth;
    return {
      left: n[0],
      top: n[1],
      right: n[2],
      gap: Math.max(0, l - r + n[2] - n[0]),
    };
  },
  CC = U0(),
  pr = 'data-scroll-locked',
  MC = function (a, n, r, l) {
    var o = a.left,
      c = a.top,
      d = a.right,
      h = a.gap;
    return (
      r === void 0 && (r = 'margin'),
      `
  .`
        .concat(
          cC,
          ` {
   overflow: hidden `,
        )
        .concat(
          l,
          `;
   padding-right: `,
        )
        .concat(h, 'px ')
        .concat(
          l,
          `;
  }
  body[`,
        )
        .concat(
          pr,
          `] {
    overflow: hidden `,
        )
        .concat(
          l,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            n && 'position: relative '.concat(l, ';'),
            r === 'margin' &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `,
                )
                .concat(
                  c,
                  `px;
    padding-right: `,
                )
                .concat(
                  d,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(h, 'px ')
                .concat(
                  l,
                  `;
    `,
                ),
            r === 'padding' &&
              'padding-right: '.concat(h, 'px ').concat(l, ';'),
          ]
            .filter(Boolean)
            .join(''),
          `
  }
  
  .`,
        )
        .concat(
          qo,
          ` {
    right: `,
        )
        .concat(h, 'px ')
        .concat(
          l,
          `;
  }
  
  .`,
        )
        .concat(
          Go,
          ` {
    margin-right: `,
        )
        .concat(h, 'px ')
        .concat(
          l,
          `;
  }
  
  .`,
        )
        .concat(qo, ' .')
        .concat(
          qo,
          ` {
    right: 0 `,
        )
        .concat(
          l,
          `;
  }
  
  .`,
        )
        .concat(Go, ' .')
        .concat(
          Go,
          ` {
    margin-right: 0 `,
        )
        .concat(
          l,
          `;
  }
  
  body[`,
        )
        .concat(
          pr,
          `] {
    `,
        )
        .concat(fC, ': ')
        .concat(
          h,
          `px;
  }
`,
        )
    );
  },
  Rv = function () {
    var a = parseInt(document.body.getAttribute(pr) || '0', 10);
    return isFinite(a) ? a : 0;
  },
  DC = function () {
    O.useEffect(function () {
      return (
        document.body.setAttribute(pr, (Rv() + 1).toString()),
        function () {
          var a = Rv() - 1;
          a <= 0
            ? document.body.removeAttribute(pr)
            : document.body.setAttribute(pr, a.toString());
        }
      );
    }, []);
  },
  _C = function (a) {
    var n = a.noRelative,
      r = a.noImportant,
      l = a.gapMode,
      o = l === void 0 ? 'margin' : l;
    DC();
    var c = O.useMemo(
      function () {
        return TC(o);
      },
      [o],
    );
    return O.createElement(CC, { styles: MC(c, !n, o, r ? '' : '!important') });
  },
  zd = !1;
if (typeof window < 'u')
  try {
    var Lo = Object.defineProperty({}, 'passive', {
      get: function () {
        return (zd = !0), !0;
      },
    });
    window.addEventListener('test', Lo, Lo),
      window.removeEventListener('test', Lo, Lo);
  } catch {
    zd = !1;
  }
var cr = zd ? { passive: !1 } : !1,
  NC = function (a) {
    return a.tagName === 'TEXTAREA';
  },
  j0 = function (a, n) {
    if (!(a instanceof Element)) return !1;
    var r = window.getComputedStyle(a);
    return (
      r[n] !== 'hidden' &&
      !(r.overflowY === r.overflowX && !NC(a) && r[n] === 'visible')
    );
  },
  LC = function (a) {
    return j0(a, 'overflowY');
  },
  zC = function (a) {
    return j0(a, 'overflowX');
  },
  Ov = function (a, n) {
    var r = n.ownerDocument,
      l = n;
    do {
      typeof ShadowRoot < 'u' && l instanceof ShadowRoot && (l = l.host);
      var o = k0(a, l);
      if (o) {
        var c = B0(a, l),
          d = c[1],
          h = c[2];
        if (d > h) return !0;
      }
      l = l.parentNode;
    } while (l && l !== r.body);
    return !1;
  },
  UC = function (a) {
    var n = a.scrollTop,
      r = a.scrollHeight,
      l = a.clientHeight;
    return [n, r, l];
  },
  jC = function (a) {
    var n = a.scrollLeft,
      r = a.scrollWidth,
      l = a.clientWidth;
    return [n, r, l];
  },
  k0 = function (a, n) {
    return a === 'v' ? LC(n) : zC(n);
  },
  B0 = function (a, n) {
    return a === 'v' ? UC(n) : jC(n);
  },
  kC = function (a, n) {
    return a === 'h' && n === 'rtl' ? -1 : 1;
  },
  BC = function (a, n, r, l, o) {
    var c = kC(a, window.getComputedStyle(n).direction),
      d = c * l,
      h = r.target,
      m = n.contains(h),
      p = !1,
      g = d > 0,
      v = 0,
      S = 0;
    do {
      var E = B0(a, h),
        w = E[0],
        x = E[1],
        R = E[2],
        _ = x - R - c * w;
      (w || _) && k0(a, h) && ((v += _), (S += w)),
        (h = h.parentNode.host || h.parentNode);
    } while ((!m && h !== document.body) || (m && (n.contains(h) || n === h)));
    return ((g && Math.abs(v) < 1) || (!g && Math.abs(S) < 1)) && (p = !0), p;
  },
  zo = function (a) {
    return 'changedTouches' in a
      ? [a.changedTouches[0].clientX, a.changedTouches[0].clientY]
      : [0, 0];
  },
  Av = function (a) {
    return [a.deltaX, a.deltaY];
  },
  Tv = function (a) {
    return a && 'current' in a ? a.current : a;
  },
  HC = function (a, n) {
    return a[0] === n[0] && a[1] === n[1];
  },
  qC = function (a) {
    return `
  .block-interactivity-`
      .concat(
        a,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        a,
        ` {pointer-events: all;}
`,
      );
  },
  GC = 0,
  fr = [];
function PC(a) {
  var n = O.useRef([]),
    r = O.useRef([0, 0]),
    l = O.useRef(),
    o = O.useState(GC++)[0],
    c = O.useState(U0)[0],
    d = O.useRef(a);
  O.useEffect(
    function () {
      d.current = a;
    },
    [a],
  ),
    O.useEffect(
      function () {
        if (a.inert) {
          document.body.classList.add('block-interactivity-'.concat(o));
          var x = uC([a.lockRef.current], (a.shards || []).map(Tv), !0).filter(
            Boolean,
          );
          return (
            x.forEach(function (R) {
              return R.classList.add('allow-interactivity-'.concat(o));
            }),
            function () {
              document.body.classList.remove('block-interactivity-'.concat(o)),
                x.forEach(function (R) {
                  return R.classList.remove('allow-interactivity-'.concat(o));
                });
            }
          );
        }
      },
      [a.inert, a.lockRef.current, a.shards],
    );
  var h = O.useCallback(function (x, R) {
      if (
        ('touches' in x && x.touches.length === 2) ||
        (x.type === 'wheel' && x.ctrlKey)
      )
        return !d.current.allowPinchZoom;
      var _ = zo(x),
        k = r.current,
        L = 'deltaX' in x ? x.deltaX : k[0] - _[0],
        q = 'deltaY' in x ? x.deltaY : k[1] - _[1],
        B,
        J = x.target,
        Z = Math.abs(L) > Math.abs(q) ? 'h' : 'v';
      if ('touches' in x && Z === 'h' && J.type === 'range') return !1;
      var G = Ov(Z, J);
      if (!G) return !0;
      if ((G ? (B = Z) : ((B = Z === 'v' ? 'h' : 'v'), (G = Ov(Z, J))), !G))
        return !1;
      if (
        (!l.current && 'changedTouches' in x && (L || q) && (l.current = B), !B)
      )
        return !0;
      var W = l.current || B;
      return BC(W, R, x, W === 'h' ? L : q);
    }, []),
    m = O.useCallback(function (x) {
      var R = x;
      if (!(!fr.length || fr[fr.length - 1] !== c)) {
        var _ = 'deltaY' in R ? Av(R) : zo(R),
          k = n.current.filter(function (B) {
            return (
              B.name === R.type &&
              (B.target === R.target || R.target === B.shadowParent) &&
              HC(B.delta, _)
            );
          })[0];
        if (k && k.should) {
          R.cancelable && R.preventDefault();
          return;
        }
        if (!k) {
          var L = (d.current.shards || [])
              .map(Tv)
              .filter(Boolean)
              .filter(function (B) {
                return B.contains(R.target);
              }),
            q = L.length > 0 ? h(R, L[0]) : !d.current.noIsolation;
          q && R.cancelable && R.preventDefault();
        }
      }
    }, []),
    p = O.useCallback(function (x, R, _, k) {
      var L = { name: x, delta: R, target: _, should: k, shadowParent: VC(_) };
      n.current.push(L),
        setTimeout(function () {
          n.current = n.current.filter(function (q) {
            return q !== L;
          });
        }, 1);
    }, []),
    g = O.useCallback(function (x) {
      (r.current = zo(x)), (l.current = void 0);
    }, []),
    v = O.useCallback(function (x) {
      p(x.type, Av(x), x.target, h(x, a.lockRef.current));
    }, []),
    S = O.useCallback(function (x) {
      p(x.type, zo(x), x.target, h(x, a.lockRef.current));
    }, []);
  O.useEffect(function () {
    return (
      fr.push(c),
      a.setCallbacks({
        onScrollCapture: v,
        onWheelCapture: v,
        onTouchMoveCapture: S,
      }),
      document.addEventListener('wheel', m, cr),
      document.addEventListener('touchmove', m, cr),
      document.addEventListener('touchstart', g, cr),
      function () {
        (fr = fr.filter(function (x) {
          return x !== c;
        })),
          document.removeEventListener('wheel', m, cr),
          document.removeEventListener('touchmove', m, cr),
          document.removeEventListener('touchstart', g, cr);
      }
    );
  }, []);
  var E = a.removeScrollBar,
    w = a.inert;
  return O.createElement(
    O.Fragment,
    null,
    w ? O.createElement(c, { styles: qC(o) }) : null,
    E
      ? O.createElement(_C, { noRelative: a.noRelative, gapMode: a.gapMode })
      : null,
  );
}
function VC(a) {
  for (var n = null; a !== null; )
    a instanceof ShadowRoot && ((n = a.host), (a = a.host)), (a = a.parentNode);
  return n;
}
const QC = vC(z0, PC);
var H0 = O.forwardRef(function (a, n) {
  return O.createElement(hu, On({}, a, { ref: n, sideCar: QC }));
});
H0.classNames = hu.classNames;
var Ud = ['Enter', ' '],
  YC = ['ArrowDown', 'PageUp', 'Home'],
  q0 = ['ArrowUp', 'PageDown', 'End'],
  KC = [...YC, ...q0],
  FC = { ltr: [...Ud, 'ArrowRight'], rtl: [...Ud, 'ArrowLeft'] },
  XC = { ltr: ['ArrowLeft'], rtl: ['ArrowRight'] },
  ss = 'Menu',
  [Xl, ZC, $C] = $b(ss),
  [yi, G0] = as(ss, [$C, m0, A0]),
  pu = m0(),
  P0 = A0(),
  [JC, vi] = yi(ss),
  [IC, os] = yi(ss),
  V0 = (a) => {
    const {
        __scopeMenu: n,
        open: r = !1,
        children: l,
        dir: o,
        onOpenChange: c,
        modal: d = !0,
      } = a,
      h = pu(n),
      [m, p] = O.useState(null),
      g = O.useRef(!1),
      v = $n(c),
      S = Jb(o);
    return (
      O.useEffect(() => {
        const E = () => {
            (g.current = !0),
              document.addEventListener('pointerdown', w, {
                capture: !0,
                once: !0,
              }),
              document.addEventListener('pointermove', w, {
                capture: !0,
                once: !0,
              });
          },
          w = () => (g.current = !1);
        return (
          document.addEventListener('keydown', E, { capture: !0 }),
          () => {
            document.removeEventListener('keydown', E, { capture: !0 }),
              document.removeEventListener('pointerdown', w, { capture: !0 }),
              document.removeEventListener('pointermove', w, { capture: !0 });
          }
        );
      }, []),
      Y.jsx(HT, {
        ...h,
        children: Y.jsx(JC, {
          scope: n,
          open: r,
          onOpenChange: v,
          content: m,
          onContentChange: p,
          children: Y.jsx(IC, {
            scope: n,
            onClose: O.useCallback(() => v(!1), [v]),
            isUsingKeyboardRef: g,
            dir: S,
            modal: d,
            children: l,
          }),
        }),
      })
    );
  };
V0.displayName = ss;
var WC = 'MenuAnchor',
  ah = O.forwardRef((a, n) => {
    const { __scopeMenu: r, ...l } = a,
      o = pu(r);
    return Y.jsx(qT, { ...o, ...l, ref: n });
  });
ah.displayName = WC;
var ih = 'MenuPortal',
  [eM, Q0] = yi(ih, { forceMount: void 0 }),
  Y0 = (a) => {
    const { __scopeMenu: n, forceMount: r, children: l, container: o } = a,
      c = vi(ih, n);
    return Y.jsx(eM, {
      scope: n,
      forceMount: r,
      children: Y.jsx(rs, {
        present: r || c.open,
        children: Y.jsx(R0, { asChild: !0, container: o, children: l }),
      }),
    });
  };
Y0.displayName = ih;
var an = 'MenuContent',
  [tM, rh] = yi(an),
  K0 = O.forwardRef((a, n) => {
    const r = Q0(an, a.__scopeMenu),
      { forceMount: l = r.forceMount, ...o } = a,
      c = vi(an, a.__scopeMenu),
      d = os(an, a.__scopeMenu);
    return Y.jsx(Xl.Provider, {
      scope: a.__scopeMenu,
      children: Y.jsx(rs, {
        present: l || c.open,
        children: Y.jsx(Xl.Slot, {
          scope: a.__scopeMenu,
          children: d.modal
            ? Y.jsx(nM, { ...o, ref: n })
            : Y.jsx(aM, { ...o, ref: n }),
        }),
      }),
    });
  }),
  nM = O.forwardRef((a, n) => {
    const r = vi(an, a.__scopeMenu),
      l = O.useRef(null),
      o = Lt(n, l);
    return (
      O.useEffect(() => {
        const c = l.current;
        if (c) return oC(c);
      }, []),
      Y.jsx(lh, {
        ...a,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: r.open,
        disableOutsideScroll: !0,
        onFocusOutside: Ne(a.onFocusOutside, (c) => c.preventDefault(), {
          checkForDefaultPrevented: !1,
        }),
        onDismiss: () => r.onOpenChange(!1),
      })
    );
  }),
  aM = O.forwardRef((a, n) => {
    const r = vi(an, a.__scopeMenu);
    return Y.jsx(lh, {
      ...a,
      ref: n,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => r.onOpenChange(!1),
    });
  }),
  iM = Yl('MenuContent.ScrollLock'),
  lh = O.forwardRef((a, n) => {
    const {
        __scopeMenu: r,
        loop: l = !1,
        trapFocus: o,
        onOpenAutoFocus: c,
        onCloseAutoFocus: d,
        disableOutsidePointerEvents: h,
        onEntryFocus: m,
        onEscapeKeyDown: p,
        onPointerDownOutside: g,
        onFocusOutside: v,
        onInteractOutside: S,
        onDismiss: E,
        disableOutsideScroll: w,
        ...x
      } = a,
      R = vi(an, r),
      _ = os(an, r),
      k = pu(r),
      L = P0(r),
      q = ZC(r),
      [B, J] = O.useState(null),
      Z = O.useRef(null),
      G = Lt(n, Z, R.onContentChange),
      W = O.useRef(0),
      ne = O.useRef(''),
      fe = O.useRef(0),
      ce = O.useRef(null),
      de = O.useRef('right'),
      be = O.useRef(0),
      me = w ? H0 : O.Fragment,
      N = w ? { as: iM, allowPinchZoom: !0 } : void 0,
      $ = (ee) => {
        var xe, Le;
        const A = ne.current + ee,
          V = q().filter((Ve) => !Ve.disabled),
          te = document.activeElement,
          I =
            (xe = V.find((Ve) => Ve.ref.current === te)) == null
              ? void 0
              : xe.textValue,
          ae = V.map((Ve) => Ve.textValue),
          Se = gM(ae, A, I),
          ue =
            (Le = V.find((Ve) => Ve.textValue === Se)) == null
              ? void 0
              : Le.ref.current;
        (function Ve(Et) {
          (ne.current = Et),
            window.clearTimeout(W.current),
            Et !== '' && (W.current = window.setTimeout(() => Ve(''), 1e3));
        })(A),
          ue && setTimeout(() => ue.focus());
      };
    O.useEffect(() => () => window.clearTimeout(W.current), []), EA();
    const P = O.useCallback((ee) => {
      var V, te;
      return (
        de.current === ((V = ce.current) == null ? void 0 : V.side) &&
        vM(ee, (te = ce.current) == null ? void 0 : te.area)
      );
    }, []);
    return Y.jsx(tM, {
      scope: r,
      searchRef: ne,
      onItemEnter: O.useCallback(
        (ee) => {
          P(ee) && ee.preventDefault();
        },
        [P],
      ),
      onItemLeave: O.useCallback(
        (ee) => {
          var A;
          P(ee) || ((A = Z.current) == null || A.focus(), J(null));
        },
        [P],
      ),
      onTriggerLeave: O.useCallback(
        (ee) => {
          P(ee) && ee.preventDefault();
        },
        [P],
      ),
      pointerGraceTimerRef: fe,
      onPointerGraceIntentChange: O.useCallback((ee) => {
        ce.current = ee;
      }, []),
      children: Y.jsx(me, {
        ...N,
        children: Y.jsx(t0, {
          asChild: !0,
          trapped: o,
          onMountAutoFocus: Ne(c, (ee) => {
            var A;
            ee.preventDefault(),
              (A = Z.current) == null || A.focus({ preventScroll: !0 });
          }),
          onUnmountAutoFocus: d,
          children: Y.jsx(Wb, {
            asChild: !0,
            disableOutsidePointerEvents: h,
            onEscapeKeyDown: p,
            onPointerDownOutside: g,
            onFocusOutside: v,
            onInteractOutside: S,
            onDismiss: E,
            children: Y.jsx(aC, {
              asChild: !0,
              ...L,
              dir: _.dir,
              orientation: 'vertical',
              loop: l,
              currentTabStopId: B,
              onCurrentTabStopIdChange: J,
              onEntryFocus: Ne(m, (ee) => {
                _.isUsingKeyboardRef.current || ee.preventDefault();
              }),
              preventScrollOnEntryFocus: !0,
              children: Y.jsx(GT, {
                role: 'menu',
                'aria-orientation': 'vertical',
                'data-state': oS(R.open),
                'data-radix-menu-content': '',
                dir: _.dir,
                ...k,
                ...x,
                ref: G,
                style: { outline: 'none', ...x.style },
                onKeyDown: Ne(x.onKeyDown, (ee) => {
                  const V =
                      ee.target.closest('[data-radix-menu-content]') ===
                      ee.currentTarget,
                    te = ee.ctrlKey || ee.altKey || ee.metaKey,
                    I = ee.key.length === 1;
                  V &&
                    (ee.key === 'Tab' && ee.preventDefault(),
                    !te && I && $(ee.key));
                  const ae = Z.current;
                  if (ee.target !== ae || !KC.includes(ee.key)) return;
                  ee.preventDefault();
                  const ue = q()
                    .filter((xe) => !xe.disabled)
                    .map((xe) => xe.ref.current);
                  q0.includes(ee.key) && ue.reverse(), pM(ue);
                }),
                onBlur: Ne(a.onBlur, (ee) => {
                  ee.currentTarget.contains(ee.target) ||
                    (window.clearTimeout(W.current), (ne.current = ''));
                }),
                onPointerMove: Ne(
                  a.onPointerMove,
                  Zl((ee) => {
                    const A = ee.target,
                      V = be.current !== ee.clientX;
                    if (ee.currentTarget.contains(A) && V) {
                      const te = ee.clientX > be.current ? 'right' : 'left';
                      (de.current = te), (be.current = ee.clientX);
                    }
                  }),
                ),
              }),
            }),
          }),
        }),
      }),
    });
  });
K0.displayName = an;
var rM = 'MenuGroup',
  sh = O.forwardRef((a, n) => {
    const { __scopeMenu: r, ...l } = a;
    return Y.jsx(xt.div, { role: 'group', ...l, ref: n });
  });
sh.displayName = rM;
var lM = 'MenuLabel',
  F0 = O.forwardRef((a, n) => {
    const { __scopeMenu: r, ...l } = a;
    return Y.jsx(xt.div, { ...l, ref: n });
  });
F0.displayName = lM;
var Wo = 'MenuItem',
  Cv = 'menu.itemSelect',
  mu = O.forwardRef((a, n) => {
    const { disabled: r = !1, onSelect: l, ...o } = a,
      c = O.useRef(null),
      d = os(Wo, a.__scopeMenu),
      h = rh(Wo, a.__scopeMenu),
      m = Lt(n, c),
      p = O.useRef(!1),
      g = () => {
        const v = c.current;
        if (!r && v) {
          const S = new CustomEvent(Cv, { bubbles: !0, cancelable: !0 });
          v.addEventListener(Cv, (E) => (l == null ? void 0 : l(E)), {
            once: !0,
          }),
            Zb(v, S),
            S.defaultPrevented ? (p.current = !1) : d.onClose();
        }
      };
    return Y.jsx(X0, {
      ...o,
      ref: m,
      disabled: r,
      onClick: Ne(a.onClick, g),
      onPointerDown: (v) => {
        var S;
        (S = a.onPointerDown) == null || S.call(a, v), (p.current = !0);
      },
      onPointerUp: Ne(a.onPointerUp, (v) => {
        var S;
        p.current || (S = v.currentTarget) == null || S.click();
      }),
      onKeyDown: Ne(a.onKeyDown, (v) => {
        const S = h.searchRef.current !== '';
        r ||
          (S && v.key === ' ') ||
          (Ud.includes(v.key) && (v.currentTarget.click(), v.preventDefault()));
      }),
    });
  });
mu.displayName = Wo;
var X0 = O.forwardRef((a, n) => {
    const { __scopeMenu: r, disabled: l = !1, textValue: o, ...c } = a,
      d = rh(Wo, r),
      h = P0(r),
      m = O.useRef(null),
      p = Lt(n, m),
      [g, v] = O.useState(!1),
      [S, E] = O.useState('');
    return (
      O.useEffect(() => {
        const w = m.current;
        w && E((w.textContent ?? '').trim());
      }, [c.children]),
      Y.jsx(Xl.ItemSlot, {
        scope: r,
        disabled: l,
        textValue: o ?? S,
        children: Y.jsx(iC, {
          asChild: !0,
          ...h,
          focusable: !l,
          children: Y.jsx(xt.div, {
            role: 'menuitem',
            'data-highlighted': g ? '' : void 0,
            'aria-disabled': l || void 0,
            'data-disabled': l ? '' : void 0,
            ...c,
            ref: p,
            onPointerMove: Ne(
              a.onPointerMove,
              Zl((w) => {
                l
                  ? d.onItemLeave(w)
                  : (d.onItemEnter(w),
                    w.defaultPrevented ||
                      w.currentTarget.focus({ preventScroll: !0 }));
              }),
            ),
            onPointerLeave: Ne(
              a.onPointerLeave,
              Zl((w) => d.onItemLeave(w)),
            ),
            onFocus: Ne(a.onFocus, () => v(!0)),
            onBlur: Ne(a.onBlur, () => v(!1)),
          }),
        }),
      })
    );
  }),
  sM = 'MenuCheckboxItem',
  Z0 = O.forwardRef((a, n) => {
    const { checked: r = !1, onCheckedChange: l, ...o } = a;
    return Y.jsx(eS, {
      scope: a.__scopeMenu,
      checked: r,
      children: Y.jsx(mu, {
        role: 'menuitemcheckbox',
        'aria-checked': eu(r) ? 'mixed' : r,
        ...o,
        ref: n,
        'data-state': uh(r),
        onSelect: Ne(
          o.onSelect,
          () => (l == null ? void 0 : l(eu(r) ? !0 : !r)),
          { checkForDefaultPrevented: !1 },
        ),
      }),
    });
  });
Z0.displayName = sM;
var $0 = 'MenuRadioGroup',
  [oM, uM] = yi($0, { value: void 0, onValueChange: () => {} }),
  J0 = O.forwardRef((a, n) => {
    const { value: r, onValueChange: l, ...o } = a,
      c = $n(l);
    return Y.jsx(oM, {
      scope: a.__scopeMenu,
      value: r,
      onValueChange: c,
      children: Y.jsx(sh, { ...o, ref: n }),
    });
  });
J0.displayName = $0;
var I0 = 'MenuRadioItem',
  W0 = O.forwardRef((a, n) => {
    const { value: r, ...l } = a,
      o = uM(I0, a.__scopeMenu),
      c = r === o.value;
    return Y.jsx(eS, {
      scope: a.__scopeMenu,
      checked: c,
      children: Y.jsx(mu, {
        role: 'menuitemradio',
        'aria-checked': c,
        ...l,
        ref: n,
        'data-state': uh(c),
        onSelect: Ne(
          l.onSelect,
          () => {
            var d;
            return (d = o.onValueChange) == null ? void 0 : d.call(o, r);
          },
          { checkForDefaultPrevented: !1 },
        ),
      }),
    });
  });
W0.displayName = I0;
var oh = 'MenuItemIndicator',
  [eS, cM] = yi(oh, { checked: !1 }),
  tS = O.forwardRef((a, n) => {
    const { __scopeMenu: r, forceMount: l, ...o } = a,
      c = cM(oh, r);
    return Y.jsx(rs, {
      present: l || eu(c.checked) || c.checked === !0,
      children: Y.jsx(xt.span, { ...o, ref: n, 'data-state': uh(c.checked) }),
    });
  });
tS.displayName = oh;
var fM = 'MenuSeparator',
  nS = O.forwardRef((a, n) => {
    const { __scopeMenu: r, ...l } = a;
    return Y.jsx(xt.div, {
      role: 'separator',
      'aria-orientation': 'horizontal',
      ...l,
      ref: n,
    });
  });
nS.displayName = fM;
var dM = 'MenuArrow',
  aS = O.forwardRef((a, n) => {
    const { __scopeMenu: r, ...l } = a,
      o = pu(r);
    return Y.jsx(PT, { ...o, ...l, ref: n });
  });
aS.displayName = dM;
var hM = 'MenuSub',
  [F2, iS] = yi(hM),
  Bl = 'MenuSubTrigger',
  rS = O.forwardRef((a, n) => {
    const r = vi(Bl, a.__scopeMenu),
      l = os(Bl, a.__scopeMenu),
      o = iS(Bl, a.__scopeMenu),
      c = rh(Bl, a.__scopeMenu),
      d = O.useRef(null),
      { pointerGraceTimerRef: h, onPointerGraceIntentChange: m } = c,
      p = { __scopeMenu: a.__scopeMenu },
      g = O.useCallback(() => {
        d.current && window.clearTimeout(d.current), (d.current = null);
      }, []);
    return (
      O.useEffect(() => g, [g]),
      O.useEffect(() => {
        const v = h.current;
        return () => {
          window.clearTimeout(v), m(null);
        };
      }, [h, m]),
      Y.jsx(ah, {
        asChild: !0,
        ...p,
        children: Y.jsx(X0, {
          id: o.triggerId,
          'aria-haspopup': 'menu',
          'aria-expanded': r.open,
          'aria-controls': o.contentId,
          'data-state': oS(r.open),
          ...a,
          ref: uu(n, o.onTriggerChange),
          onClick: (v) => {
            var S;
            (S = a.onClick) == null || S.call(a, v),
              !(a.disabled || v.defaultPrevented) &&
                (v.currentTarget.focus(), r.open || r.onOpenChange(!0));
          },
          onPointerMove: Ne(
            a.onPointerMove,
            Zl((v) => {
              c.onItemEnter(v),
                !v.defaultPrevented &&
                  !a.disabled &&
                  !r.open &&
                  !d.current &&
                  (c.onPointerGraceIntentChange(null),
                  (d.current = window.setTimeout(() => {
                    r.onOpenChange(!0), g();
                  }, 100)));
            }),
          ),
          onPointerLeave: Ne(
            a.onPointerLeave,
            Zl((v) => {
              var E, w;
              g();
              const S =
                (E = r.content) == null ? void 0 : E.getBoundingClientRect();
              if (S) {
                const x = (w = r.content) == null ? void 0 : w.dataset.side,
                  R = x === 'right',
                  _ = R ? -5 : 5,
                  k = S[R ? 'left' : 'right'],
                  L = S[R ? 'right' : 'left'];
                c.onPointerGraceIntentChange({
                  area: [
                    { x: v.clientX + _, y: v.clientY },
                    { x: k, y: S.top },
                    { x: L, y: S.top },
                    { x: L, y: S.bottom },
                    { x: k, y: S.bottom },
                  ],
                  side: x,
                }),
                  window.clearTimeout(h.current),
                  (h.current = window.setTimeout(
                    () => c.onPointerGraceIntentChange(null),
                    300,
                  ));
              } else {
                if ((c.onTriggerLeave(v), v.defaultPrevented)) return;
                c.onPointerGraceIntentChange(null);
              }
            }),
          ),
          onKeyDown: Ne(a.onKeyDown, (v) => {
            var E;
            const S = c.searchRef.current !== '';
            a.disabled ||
              (S && v.key === ' ') ||
              (FC[l.dir].includes(v.key) &&
                (r.onOpenChange(!0),
                (E = r.content) == null || E.focus(),
                v.preventDefault()));
          }),
        }),
      })
    );
  });
rS.displayName = Bl;
var lS = 'MenuSubContent',
  sS = O.forwardRef((a, n) => {
    const r = Q0(an, a.__scopeMenu),
      { forceMount: l = r.forceMount, ...o } = a,
      c = vi(an, a.__scopeMenu),
      d = os(an, a.__scopeMenu),
      h = iS(lS, a.__scopeMenu),
      m = O.useRef(null),
      p = Lt(n, m);
    return Y.jsx(Xl.Provider, {
      scope: a.__scopeMenu,
      children: Y.jsx(rs, {
        present: l || c.open,
        children: Y.jsx(Xl.Slot, {
          scope: a.__scopeMenu,
          children: Y.jsx(lh, {
            id: h.contentId,
            'aria-labelledby': h.triggerId,
            ...o,
            ref: p,
            align: 'start',
            side: d.dir === 'rtl' ? 'left' : 'right',
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            trapFocus: !1,
            onOpenAutoFocus: (g) => {
              var v;
              d.isUsingKeyboardRef.current &&
                ((v = m.current) == null || v.focus()),
                g.preventDefault();
            },
            onCloseAutoFocus: (g) => g.preventDefault(),
            onFocusOutside: Ne(a.onFocusOutside, (g) => {
              g.target !== h.trigger && c.onOpenChange(!1);
            }),
            onEscapeKeyDown: Ne(a.onEscapeKeyDown, (g) => {
              d.onClose(), g.preventDefault();
            }),
            onKeyDown: Ne(a.onKeyDown, (g) => {
              var E;
              const v = g.currentTarget.contains(g.target),
                S = XC[d.dir].includes(g.key);
              v &&
                S &&
                (c.onOpenChange(!1),
                (E = h.trigger) == null || E.focus(),
                g.preventDefault());
            }),
          }),
        }),
      }),
    });
  });
sS.displayName = lS;
function oS(a) {
  return a ? 'open' : 'closed';
}
function eu(a) {
  return a === 'indeterminate';
}
function uh(a) {
  return eu(a) ? 'indeterminate' : a ? 'checked' : 'unchecked';
}
function pM(a) {
  const n = document.activeElement;
  for (const r of a)
    if (r === n || (r.focus(), document.activeElement !== n)) return;
}
function mM(a, n) {
  return a.map((r, l) => a[(n + l) % a.length]);
}
function gM(a, n, r) {
  const o = n.length > 1 && Array.from(n).every((p) => p === n[0]) ? n[0] : n,
    c = r ? a.indexOf(r) : -1;
  let d = mM(a, Math.max(c, 0));
  o.length === 1 && (d = d.filter((p) => p !== r));
  const m = d.find((p) => p.toLowerCase().startsWith(o.toLowerCase()));
  return m !== r ? m : void 0;
}
function yM(a, n) {
  const { x: r, y: l } = a;
  let o = !1;
  for (let c = 0, d = n.length - 1; c < n.length; d = c++) {
    const h = n[c],
      m = n[d],
      p = h.x,
      g = h.y,
      v = m.x,
      S = m.y;
    g > l != S > l && r < ((v - p) * (l - g)) / (S - g) + p && (o = !o);
  }
  return o;
}
function vM(a, n) {
  if (!n) return !1;
  const r = { x: a.clientX, y: a.clientY };
  return yM(r, n);
}
function Zl(a) {
  return (n) => (n.pointerType === 'mouse' ? a(n) : void 0);
}
var bM = V0,
  SM = ah,
  xM = Y0,
  wM = K0,
  EM = sh,
  RM = F0,
  OM = mu,
  AM = Z0,
  TM = J0,
  CM = W0,
  MM = tS,
  DM = nS,
  _M = aS,
  NM = rS,
  LM = sS,
  gu = 'DropdownMenu',
  [zM, X2] = as(gu, [G0]),
  wt = G0(),
  [UM, uS] = zM(gu),
  cS = (a) => {
    const {
        __scopeDropdownMenu: n,
        children: r,
        dir: l,
        open: o,
        defaultOpen: c,
        onOpenChange: d,
        modal: h = !0,
      } = a,
      m = wt(n),
      p = O.useRef(null),
      [g, v] = Xb({ prop: o, defaultProp: c ?? !1, onChange: d, caller: gu });
    return Y.jsx(UM, {
      scope: n,
      triggerId: Md(),
      triggerRef: p,
      contentId: Md(),
      open: g,
      onOpenChange: v,
      onOpenToggle: O.useCallback(() => v((S) => !S), [v]),
      modal: h,
      children: Y.jsx(bM, {
        ...m,
        open: g,
        onOpenChange: v,
        dir: l,
        modal: h,
        children: r,
      }),
    });
  };
cS.displayName = gu;
var fS = 'DropdownMenuTrigger',
  dS = O.forwardRef((a, n) => {
    const { __scopeDropdownMenu: r, disabled: l = !1, ...o } = a,
      c = uS(fS, r),
      d = wt(r);
    return Y.jsx(SM, {
      asChild: !0,
      ...d,
      children: Y.jsx(xt.button, {
        type: 'button',
        id: c.triggerId,
        'aria-haspopup': 'menu',
        'aria-expanded': c.open,
        'aria-controls': c.open ? c.contentId : void 0,
        'data-state': c.open ? 'open' : 'closed',
        'data-disabled': l ? '' : void 0,
        disabled: l,
        ...o,
        ref: uu(n, c.triggerRef),
        onPointerDown: Ne(a.onPointerDown, (h) => {
          !l &&
            h.button === 0 &&
            h.ctrlKey === !1 &&
            (c.onOpenToggle(), c.open || h.preventDefault());
        }),
        onKeyDown: Ne(a.onKeyDown, (h) => {
          l ||
            (['Enter', ' '].includes(h.key) && c.onOpenToggle(),
            h.key === 'ArrowDown' && c.onOpenChange(!0),
            ['Enter', ' ', 'ArrowDown'].includes(h.key) && h.preventDefault());
        }),
      }),
    });
  });
dS.displayName = fS;
var jM = 'DropdownMenuPortal',
  hS = (a) => {
    const { __scopeDropdownMenu: n, ...r } = a,
      l = wt(n);
    return Y.jsx(xM, { ...l, ...r });
  };
hS.displayName = jM;
var pS = 'DropdownMenuContent',
  mS = O.forwardRef((a, n) => {
    const { __scopeDropdownMenu: r, ...l } = a,
      o = uS(pS, r),
      c = wt(r),
      d = O.useRef(!1);
    return Y.jsx(wM, {
      id: o.contentId,
      'aria-labelledby': o.triggerId,
      ...c,
      ...l,
      ref: n,
      onCloseAutoFocus: Ne(a.onCloseAutoFocus, (h) => {
        var m;
        d.current || (m = o.triggerRef.current) == null || m.focus(),
          (d.current = !1),
          h.preventDefault();
      }),
      onInteractOutside: Ne(a.onInteractOutside, (h) => {
        const m = h.detail.originalEvent,
          p = m.button === 0 && m.ctrlKey === !0,
          g = m.button === 2 || p;
        (!o.modal || g) && (d.current = !0);
      }),
      style: {
        ...a.style,
        '--radix-dropdown-menu-content-transform-origin':
          'var(--radix-popper-transform-origin)',
        '--radix-dropdown-menu-content-available-width':
          'var(--radix-popper-available-width)',
        '--radix-dropdown-menu-content-available-height':
          'var(--radix-popper-available-height)',
        '--radix-dropdown-menu-trigger-width':
          'var(--radix-popper-anchor-width)',
        '--radix-dropdown-menu-trigger-height':
          'var(--radix-popper-anchor-height)',
      },
    });
  });
mS.displayName = pS;
var kM = 'DropdownMenuGroup',
  BM = O.forwardRef((a, n) => {
    const { __scopeDropdownMenu: r, ...l } = a,
      o = wt(r);
    return Y.jsx(EM, { ...o, ...l, ref: n });
  });
BM.displayName = kM;
var HM = 'DropdownMenuLabel',
  qM = O.forwardRef((a, n) => {
    const { __scopeDropdownMenu: r, ...l } = a,
      o = wt(r);
    return Y.jsx(RM, { ...o, ...l, ref: n });
  });
qM.displayName = HM;
var GM = 'DropdownMenuItem',
  gS = O.forwardRef((a, n) => {
    const { __scopeDropdownMenu: r, ...l } = a,
      o = wt(r);
    return Y.jsx(OM, { ...o, ...l, ref: n });
  });
gS.displayName = GM;
var PM = 'DropdownMenuCheckboxItem',
  VM = O.forwardRef((a, n) => {
    const { __scopeDropdownMenu: r, ...l } = a,
      o = wt(r);
    return Y.jsx(AM, { ...o, ...l, ref: n });
  });
VM.displayName = PM;
var QM = 'DropdownMenuRadioGroup',
  YM = O.forwardRef((a, n) => {
    const { __scopeDropdownMenu: r, ...l } = a,
      o = wt(r);
    return Y.jsx(TM, { ...o, ...l, ref: n });
  });
YM.displayName = QM;
var KM = 'DropdownMenuRadioItem',
  FM = O.forwardRef((a, n) => {
    const { __scopeDropdownMenu: r, ...l } = a,
      o = wt(r);
    return Y.jsx(CM, { ...o, ...l, ref: n });
  });
FM.displayName = KM;
var XM = 'DropdownMenuItemIndicator',
  ZM = O.forwardRef((a, n) => {
    const { __scopeDropdownMenu: r, ...l } = a,
      o = wt(r);
    return Y.jsx(MM, { ...o, ...l, ref: n });
  });
ZM.displayName = XM;
var $M = 'DropdownMenuSeparator',
  JM = O.forwardRef((a, n) => {
    const { __scopeDropdownMenu: r, ...l } = a,
      o = wt(r);
    return Y.jsx(DM, { ...o, ...l, ref: n });
  });
JM.displayName = $M;
var IM = 'DropdownMenuArrow',
  WM = O.forwardRef((a, n) => {
    const { __scopeDropdownMenu: r, ...l } = a,
      o = wt(r);
    return Y.jsx(_M, { ...o, ...l, ref: n });
  });
WM.displayName = IM;
var e2 = 'DropdownMenuSubTrigger',
  t2 = O.forwardRef((a, n) => {
    const { __scopeDropdownMenu: r, ...l } = a,
      o = wt(r);
    return Y.jsx(NM, { ...o, ...l, ref: n });
  });
t2.displayName = e2;
var n2 = 'DropdownMenuSubContent',
  a2 = O.forwardRef((a, n) => {
    const { __scopeDropdownMenu: r, ...l } = a,
      o = wt(r);
    return Y.jsx(LM, {
      ...o,
      ...l,
      ref: n,
      style: {
        ...a.style,
        '--radix-dropdown-menu-content-transform-origin':
          'var(--radix-popper-transform-origin)',
        '--radix-dropdown-menu-content-available-width':
          'var(--radix-popper-available-width)',
        '--radix-dropdown-menu-content-available-height':
          'var(--radix-popper-available-height)',
        '--radix-dropdown-menu-trigger-width':
          'var(--radix-popper-anchor-width)',
        '--radix-dropdown-menu-trigger-height':
          'var(--radix-popper-anchor-height)',
      },
    });
  });
a2.displayName = n2;
var i2 = cS,
  r2 = dS,
  l2 = hS,
  s2 = mS,
  o2 = gS;
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const u2 = (a) => a.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  c2 = (a) =>
    a.replace(/^([A-Z])|[\s-_]+(\w)/g, (n, r, l) =>
      l ? l.toUpperCase() : r.toLowerCase(),
    ),
  Mv = (a) => {
    const n = c2(a);
    return n.charAt(0).toUpperCase() + n.slice(1);
  },
  yS = (...a) =>
    a
      .filter((n, r, l) => !!n && n.trim() !== '' && l.indexOf(n) === r)
      .join(' ')
      .trim(),
  f2 = (a) => {
    for (const n in a)
      if (n.startsWith('aria-') || n === 'role' || n === 'title') return !0;
  };
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var d2 = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const h2 = O.forwardRef(
  (
    {
      color: a = 'currentColor',
      size: n = 24,
      strokeWidth: r = 2,
      absoluteStrokeWidth: l,
      className: o = '',
      children: c,
      iconNode: d,
      ...h
    },
    m,
  ) =>
    O.createElement(
      'svg',
      {
        ref: m,
        ...d2,
        width: n,
        height: n,
        stroke: a,
        strokeWidth: l ? (Number(r) * 24) / Number(n) : r,
        className: yS('lucide', o),
        ...(!c && !f2(h) && { 'aria-hidden': 'true' }),
        ...h,
      },
      [
        ...d.map(([p, g]) => O.createElement(p, g)),
        ...(Array.isArray(c) ? c : [c]),
      ],
    ),
);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ch = (a, n) => {
  const r = O.forwardRef(({ className: l, ...o }, c) =>
    O.createElement(h2, {
      ref: c,
      iconNode: n,
      className: yS(`lucide-${u2(Mv(a))}`, `lucide-${a}`, l),
      ...o,
    }),
  );
  return (r.displayName = Mv(a)), r;
};
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const p2 = [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    [
      'path',
      { d: 'M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20', key: '13o1zl' },
    ],
    ['path', { d: 'M2 12h20', key: '9i4pu4' }],
  ],
  m2 = ch('globe', p2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const g2 = [
    ['path', { d: 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z', key: 'a7tn18' }],
  ],
  y2 = ch('moon', g2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const v2 = [
    ['circle', { cx: '12', cy: '12', r: '4', key: '4exip2' }],
    ['path', { d: 'M12 2v2', key: 'tus03m' }],
    ['path', { d: 'M12 20v2', key: '1lh1kg' }],
    ['path', { d: 'm4.93 4.93 1.41 1.41', key: '149t6j' }],
    ['path', { d: 'm17.66 17.66 1.41 1.41', key: 'ptbguv' }],
    ['path', { d: 'M2 12h2', key: '1t8f8n' }],
    ['path', { d: 'M20 12h2', key: '1q8mjw' }],
    ['path', { d: 'm6.34 17.66-1.41 1.41', key: '1m8zz5' }],
    ['path', { d: 'm19.07 4.93-1.41 1.41', key: '1shlcs' }],
  ],
  b2 = ch('sun', v2);
function vS({ ...a }) {
  return Y.jsx(i2, { 'data-slot': 'dropdown-menu', ...a });
}
function bS({ ...a }) {
  return Y.jsx(r2, { 'data-slot': 'dropdown-menu-trigger', ...a });
}
function SS({ className: a, sideOffset: n = 4, ...r }) {
  return Y.jsx(l2, {
    children: Y.jsx(s2, {
      'data-slot': 'dropdown-menu-content',
      sideOffset: n,
      className: Kd(
        'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md',
        a,
      ),
      ...r,
    }),
  });
}
function Po({ className: a, inset: n, variant: r = 'default', ...l }) {
  return Y.jsx(o2, {
    'data-slot': 'dropdown-menu-item',
    'data-inset': n,
    'data-variant': r,
    className: Kd(
      "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      a,
    ),
    ...l,
  });
}
const Dv = [
    { name: "O'zbekcha", key: Bo.UZ },
    { name: 'Ўзбекча', key: Bo.KI },
    { name: 'Русский', key: Bo.RU },
  ],
  S2 = () => {
    var r;
    const { i18n: a } = yE(),
      n = (l) => {
        a.changeLanguage(l);
      };
    return Y.jsxs(vS, {
      children: [
        Y.jsx(bS, {
          asChild: !0,
          children: Y.jsxs(Fb, {
            variant: 'outline',
            children: [
              Y.jsx(m2, {}),
              Y.jsx('span', {
                children:
                  (r = Dv.find((l) => l.key == a.language)) == null
                    ? void 0
                    : r.name,
              }),
            ],
          }),
        }),
        Y.jsx(SS, {
          align: 'end',
          children: Dv.map((l) =>
            Y.jsx(Po, { onClick: () => n(l.key), children: l.name }, l.key),
          ),
        }),
      ],
    });
  },
  x2 = () => {
    const { setTheme: a } = zw();
    return Y.jsxs(vS, {
      children: [
        Y.jsx(bS, {
          asChild: !0,
          children: Y.jsxs(Fb, {
            variant: 'outline',
            size: 'icon',
            children: [
              Y.jsx(b2, {
                className:
                  'h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0',
              }),
              Y.jsx(y2, {
                className:
                  'absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100',
              }),
              Y.jsx('span', { className: 'sr-only', children: 'Toggle theme' }),
            ],
          }),
        }),
        Y.jsxs(SS, {
          align: 'end',
          children: [
            Y.jsx(Po, { onClick: () => a('light'), children: 'Light' }),
            Y.jsx(Po, { onClick: () => a('dark'), children: 'Dark' }),
            Y.jsx(Po, { onClick: () => a('system'), children: 'System' }),
          ],
        }),
      ],
    });
  },
  w2 = 'modulepreload',
  E2 = function (a) {
    return '/' + a;
  },
  _v = {},
  R2 = function (n, r, l) {
    let o = Promise.resolve();
    if (r && r.length > 0) {
      let d = function (p) {
        return Promise.all(
          p.map((g) =>
            Promise.resolve(g).then(
              (v) => ({ status: 'fulfilled', value: v }),
              (v) => ({ status: 'rejected', reason: v }),
            ),
          ),
        );
      };
      document.getElementsByTagName('link');
      const h = document.querySelector('meta[property=csp-nonce]'),
        m =
          (h == null ? void 0 : h.nonce) ||
          (h == null ? void 0 : h.getAttribute('nonce'));
      o = d(
        r.map((p) => {
          if (((p = E2(p)), p in _v)) return;
          _v[p] = !0;
          const g = p.endsWith('.css'),
            v = g ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${p}"]${v}`)) return;
          const S = document.createElement('link');
          if (
            ((S.rel = g ? 'stylesheet' : w2),
            g || (S.as = 'script'),
            (S.crossOrigin = ''),
            (S.href = p),
            m && S.setAttribute('nonce', m),
            document.head.appendChild(S),
            g)
          )
            return new Promise((E, w) => {
              S.addEventListener('load', E),
                S.addEventListener('error', () =>
                  w(new Error(`Unable to preload CSS for ${p}`)),
                );
            });
        }),
      );
    }
    function c(d) {
      const h = new Event('vite:preloadError', { cancelable: !0 });
      if (((h.payload = d), window.dispatchEvent(h), !h.defaultPrevented))
        throw d;
    }
    return o.then((d) => {
      for (const h of d || []) h.status === 'rejected' && c(h.reason);
      return n().catch(c);
    });
  };
class O2 extends O.PureComponent {
  constructor(n) {
    super(n), (this.$ = nn.createRef()), (this._ = nn.createRef());
  }
  render() {
    return nn.createElement(
      'span',
      { ref: this.$ },
      nn.createElement(
        'a',
        { ...this.props, ref: this._ },
        this.props.children,
      ),
    );
  }
  componentDidMount() {
    this.paint();
  }
  getSnapshotBeforeUpdate() {
    return this.reset(), null;
  }
  componentDidUpdate() {
    this.paint();
  }
  componentWillUnmount() {
    this.reset();
  }
  paint() {
    const n = this.$.current.appendChild(document.createElement('span'));
    R2(async () => {
      const { render: r } = await import('./buttons.esm-DK2fWHEW.js');
      return { render: r };
    }, []).then(({ render: r }) => {
      this._.current != null &&
        r(n.appendChild(this._.current), function (l) {
          try {
            n.parentNode.replaceChild(l, n);
          } catch {}
        });
    });
  }
  reset() {
    this.$.current.replaceChild(this._.current, this.$.current.lastChild);
  }
}
const A2 = () => {
    const { data: a } = Dw({ queryKey: ['posts'], queryFn: () => bO() });
    return (
      console.log('data', a),
      Y.jsx('div', {
        className:
          'custom-container h-screen rounded-2xl flex items-center justify-center',
        children: Y.jsxs('div', {
          className: 'flex flex-col gap-2 items-center',
          children: [
            Y.jsx(O2, {
              href: 'https://github.com/fiasuz/fias-ui',
              'data-color-scheme':
                'no-preference: light; light: light; dark: dark;',
              'data-size': 'large',
              'data-show-count': 'true',
              'aria-label': 'Star fiasuz/fias-ui on GitHub',
              children: 'Star',
            }),
            Y.jsxs('div', {
              className: 'flex flex-row gap-2',
              children: [Y.jsx(x2, {}), Y.jsx(S2, {})],
            }),
          ],
        }),
      })
    );
  },
  T2 = () => Y.jsx(Uw, { children: Y.jsx(A2, {}) });
Z1.createRoot(document.getElementById('root')).render(
  Y.jsx(O.StrictMode, { children: Y.jsx(T2, {}) }),
);
