function Cx(n, a) {
  for (var r = 0; r < a.length; r++) {
    const l = a[r];
    if (typeof l != 'string' && !Array.isArray(l)) {
      for (const o in l)
        if (o !== 'default' && !(o in n)) {
          const c = Object.getOwnPropertyDescriptor(l, o);
          c &&
            Object.defineProperty(
              n,
              o,
              c.get ? c : { enumerable: !0, get: () => l[o] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }),
  );
}
(function () {
  const a = document.createElement('link').relList;
  if (a && a.supports && a.supports('modulepreload')) return;
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
function Ty(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, 'default')
    ? n.default
    : n;
}
var Cc = { exports: {} },
  kr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qm;
function Mx() {
  if (Qm) return kr;
  Qm = 1;
  var n = Symbol.for('react.transitional.element'),
    a = Symbol.for('react.fragment');
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
      { $$typeof: n, type: l, key: d, ref: o !== void 0 ? o : null, props: c }
    );
  }
  return (kr.Fragment = a), (kr.jsx = r), (kr.jsxs = r), kr;
}
var Ym;
function Dx() {
  return Ym || ((Ym = 1), (Cc.exports = Mx())), Cc.exports;
}
var F = Dx(),
  Mc = { exports: {} },
  Se = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Km;
function _x() {
  if (Km) return Se;
  Km = 1;
  var n = Symbol.for('react.transitional.element'),
    a = Symbol.for('react.portal'),
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
  function x(T) {
    return T === null || typeof T != 'object'
      ? null
      : ((T = (v && T[v]) || T['@@iterator']),
        typeof T == 'function' ? T : null);
  }
  var O = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    S = Object.assign,
    w = {};
  function R(T, G, W) {
    (this.props = T),
      (this.context = G),
      (this.refs = w),
      (this.updater = W || O);
  }
  (R.prototype.isReactComponent = {}),
    (R.prototype.setState = function (T, G) {
      if (typeof T != 'object' && typeof T != 'function' && T != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, T, G, 'setState');
    }),
    (R.prototype.forceUpdate = function (T) {
      this.updater.enqueueForceUpdate(this, T, 'forceUpdate');
    });
  function _() {}
  _.prototype = R.prototype;
  function q(T, G, W) {
    (this.props = T),
      (this.context = G),
      (this.refs = w),
      (this.updater = W || O);
  }
  var j = (q.prototype = new _());
  (j.constructor = q), S(j, R.prototype), (j.isPureReactComponent = !0);
  var k = Array.isArray,
    B = { H: null, A: null, T: null, S: null, V: null },
    J = Object.prototype.hasOwnProperty;
  function V(T, G, W, $, ee, ye) {
    return (
      (W = ye.ref),
      { $$typeof: n, type: T, key: G, ref: W !== void 0 ? W : null, props: ye }
    );
  }
  function Y(T, G) {
    return V(T.type, G, void 0, void 0, void 0, T.props);
  }
  function te(T) {
    return typeof T == 'object' && T !== null && T.$$typeof === n;
  }
  function re(T) {
    var G = { '=': '=0', ':': '=2' };
    return (
      '$' +
      T.replace(/[=:]/g, function (W) {
        return G[W];
      })
    );
  }
  var ve = /\/+/g;
  function de(T, G) {
    return typeof T == 'object' && T !== null && T.key != null
      ? re('' + T.key)
      : G.toString(36);
  }
  function ue() {}
  function se(T) {
    switch (T.status) {
      case 'fulfilled':
        return T.value;
      case 'rejected':
        throw T.reason;
      default:
        switch (
          (typeof T.status == 'string'
            ? T.then(ue, ue)
            : ((T.status = 'pending'),
              T.then(
                function (G) {
                  T.status === 'pending' &&
                    ((T.status = 'fulfilled'), (T.value = G));
                },
                function (G) {
                  T.status === 'pending' &&
                    ((T.status = 'rejected'), (T.reason = G));
                },
              )),
          T.status)
        ) {
          case 'fulfilled':
            return T.value;
          case 'rejected':
            throw T.reason;
        }
    }
    throw T;
  }
  function me(T, G, W, $, ee) {
    var ye = typeof T;
    (ye === 'undefined' || ye === 'boolean') && (T = null);
    var oe = !1;
    if (T === null) oe = !0;
    else
      switch (ye) {
        case 'bigint':
        case 'string':
        case 'number':
          oe = !0;
          break;
        case 'object':
          switch (T.$$typeof) {
            case n:
            case a:
              oe = !0;
              break;
            case g:
              return (oe = T._init), me(oe(T._payload), G, W, $, ee);
          }
      }
    if (oe)
      return (
        (ee = ee(T)),
        (oe = $ === '' ? '.' + de(T, 0) : $),
        k(ee)
          ? ((W = ''),
            oe != null && (W = oe.replace(ve, '$&/') + '/'),
            me(ee, G, W, '', function (ut) {
              return ut;
            }))
          : ee != null &&
            (te(ee) &&
              (ee = Y(
                ee,
                W +
                  (ee.key == null || (T && T.key === ee.key)
                    ? ''
                    : ('' + ee.key).replace(ve, '$&/') + '/') +
                  oe,
              )),
            G.push(ee)),
        1
      );
    oe = 0;
    var ce = $ === '' ? '.' : $ + ':';
    if (k(T))
      for (var Ce = 0; Ce < T.length; Ce++)
        ($ = T[Ce]), (ye = ce + de($, Ce)), (oe += me($, G, W, ye, ee));
    else if (((Ce = x(T)), typeof Ce == 'function'))
      for (T = Ce.call(T), Ce = 0; !($ = T.next()).done; )
        ($ = $.value), (ye = ce + de($, Ce++)), (oe += me($, G, W, ye, ee));
    else if (ye === 'object') {
      if (typeof T.then == 'function') return me(se(T), G, W, $, ee);
      throw (
        ((G = String(T)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (G === '[object Object]'
              ? 'object with keys {' + Object.keys(T).join(', ') + '}'
              : G) +
            '). If you meant to render a collection of children, use an array instead.',
        ))
      );
    }
    return oe;
  }
  function M(T, G, W) {
    if (T == null) return T;
    var $ = [],
      ee = 0;
    return (
      me(T, $, '', '', function (ye) {
        return G.call(W, ye, ee++);
      }),
      $
    );
  }
  function X(T) {
    if (T._status === -1) {
      var G = T._result;
      (G = G()),
        G.then(
          function (W) {
            (T._status === 0 || T._status === -1) &&
              ((T._status = 1), (T._result = W));
          },
          function (W) {
            (T._status === 0 || T._status === -1) &&
              ((T._status = 2), (T._result = W));
          },
        ),
        T._status === -1 && ((T._status = 0), (T._result = G));
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var z =
    typeof reportError == 'function'
      ? reportError
      : function (T) {
          if (
            typeof window == 'object' &&
            typeof window.ErrorEvent == 'function'
          ) {
            var G = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof T == 'object' &&
                T !== null &&
                typeof T.message == 'string'
                  ? String(T.message)
                  : String(T),
              error: T,
            });
            if (!window.dispatchEvent(G)) return;
          } else if (
            typeof process == 'object' &&
            typeof process.emit == 'function'
          ) {
            process.emit('uncaughtException', T);
            return;
          }
          console.error(T);
        };
  function I() {}
  return (
    (Se.Children = {
      map: M,
      forEach: function (T, G, W) {
        M(
          T,
          function () {
            G.apply(this, arguments);
          },
          W,
        );
      },
      count: function (T) {
        var G = 0;
        return (
          M(T, function () {
            G++;
          }),
          G
        );
      },
      toArray: function (T) {
        return (
          M(T, function (G) {
            return G;
          }) || []
        );
      },
      only: function (T) {
        if (!te(T))
          throw Error(
            'React.Children.only expected to receive a single React element child.',
          );
        return T;
      },
    }),
    (Se.Component = R),
    (Se.Fragment = r),
    (Se.Profiler = o),
    (Se.PureComponent = q),
    (Se.StrictMode = l),
    (Se.Suspense = m),
    (Se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = B),
    (Se.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (T) {
        return B.H.useMemoCache(T);
      },
    }),
    (Se.cache = function (T) {
      return function () {
        return T.apply(null, arguments);
      };
    }),
    (Se.cloneElement = function (T, G, W) {
      if (T == null)
        throw Error(
          'The argument must be a React element, but you passed ' + T + '.',
        );
      var $ = S({}, T.props),
        ee = T.key,
        ye = void 0;
      if (G != null)
        for (oe in (G.ref !== void 0 && (ye = void 0),
        G.key !== void 0 && (ee = '' + G.key),
        G))
          !J.call(G, oe) ||
            oe === 'key' ||
            oe === '__self' ||
            oe === '__source' ||
            (oe === 'ref' && G.ref === void 0) ||
            ($[oe] = G[oe]);
      var oe = arguments.length - 2;
      if (oe === 1) $.children = W;
      else if (1 < oe) {
        for (var ce = Array(oe), Ce = 0; Ce < oe; Ce++)
          ce[Ce] = arguments[Ce + 2];
        $.children = ce;
      }
      return V(T.type, ee, void 0, void 0, ye, $);
    }),
    (Se.createContext = function (T) {
      return (
        (T = {
          $$typeof: d,
          _currentValue: T,
          _currentValue2: T,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (T.Provider = T),
        (T.Consumer = { $$typeof: c, _context: T }),
        T
      );
    }),
    (Se.createElement = function (T, G, W) {
      var $,
        ee = {},
        ye = null;
      if (G != null)
        for ($ in (G.key !== void 0 && (ye = '' + G.key), G))
          J.call(G, $) &&
            $ !== 'key' &&
            $ !== '__self' &&
            $ !== '__source' &&
            (ee[$] = G[$]);
      var oe = arguments.length - 2;
      if (oe === 1) ee.children = W;
      else if (1 < oe) {
        for (var ce = Array(oe), Ce = 0; Ce < oe; Ce++)
          ce[Ce] = arguments[Ce + 2];
        ee.children = ce;
      }
      if (T && T.defaultProps)
        for ($ in ((oe = T.defaultProps), oe))
          ee[$] === void 0 && (ee[$] = oe[$]);
      return V(T, ye, void 0, void 0, null, ee);
    }),
    (Se.createRef = function () {
      return { current: null };
    }),
    (Se.forwardRef = function (T) {
      return { $$typeof: h, render: T };
    }),
    (Se.isValidElement = te),
    (Se.lazy = function (T) {
      return { $$typeof: g, _payload: { _status: -1, _result: T }, _init: X };
    }),
    (Se.memo = function (T, G) {
      return { $$typeof: p, type: T, compare: G === void 0 ? null : G };
    }),
    (Se.startTransition = function (T) {
      var G = B.T,
        W = {};
      B.T = W;
      try {
        var $ = T(),
          ee = B.S;
        ee !== null && ee(W, $),
          typeof $ == 'object' &&
            $ !== null &&
            typeof $.then == 'function' &&
            $.then(I, z);
      } catch (ye) {
        z(ye);
      } finally {
        B.T = G;
      }
    }),
    (Se.unstable_useCacheRefresh = function () {
      return B.H.useCacheRefresh();
    }),
    (Se.use = function (T) {
      return B.H.use(T);
    }),
    (Se.useActionState = function (T, G, W) {
      return B.H.useActionState(T, G, W);
    }),
    (Se.useCallback = function (T, G) {
      return B.H.useCallback(T, G);
    }),
    (Se.useContext = function (T) {
      return B.H.useContext(T);
    }),
    (Se.useDebugValue = function () {}),
    (Se.useDeferredValue = function (T, G) {
      return B.H.useDeferredValue(T, G);
    }),
    (Se.useEffect = function (T, G, W) {
      var $ = B.H;
      if (typeof W == 'function')
        throw Error(
          'useEffect CRUD overload is not enabled in this build of React.',
        );
      return $.useEffect(T, G);
    }),
    (Se.useId = function () {
      return B.H.useId();
    }),
    (Se.useImperativeHandle = function (T, G, W) {
      return B.H.useImperativeHandle(T, G, W);
    }),
    (Se.useInsertionEffect = function (T, G) {
      return B.H.useInsertionEffect(T, G);
    }),
    (Se.useLayoutEffect = function (T, G) {
      return B.H.useLayoutEffect(T, G);
    }),
    (Se.useMemo = function (T, G) {
      return B.H.useMemo(T, G);
    }),
    (Se.useOptimistic = function (T, G) {
      return B.H.useOptimistic(T, G);
    }),
    (Se.useReducer = function (T, G, W) {
      return B.H.useReducer(T, G, W);
    }),
    (Se.useRef = function (T) {
      return B.H.useRef(T);
    }),
    (Se.useState = function (T) {
      return B.H.useState(T);
    }),
    (Se.useSyncExternalStore = function (T, G, W) {
      return B.H.useSyncExternalStore(T, G, W);
    }),
    (Se.useTransition = function () {
      return B.H.useTransition();
    }),
    (Se.version = '19.1.1'),
    Se
  );
}
var Xm;
function Rf() {
  return Xm || ((Xm = 1), (Mc.exports = _x())), Mc.exports;
}
var E = Rf();
const Gt = Ty(E),
  Cy = Cx({ __proto__: null, default: Gt }, [E]);
var Dc = { exports: {} },
  Hr = {},
  _c = { exports: {} },
  Nc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zm;
function Nx() {
  return (
    Zm ||
      ((Zm = 1),
      (function (n) {
        function a(M, X) {
          var z = M.length;
          M.push(X);
          e: for (; 0 < z; ) {
            var I = (z - 1) >>> 1,
              T = M[I];
            if (0 < o(T, X)) (M[I] = X), (M[z] = T), (z = I);
            else break e;
          }
        }
        function r(M) {
          return M.length === 0 ? null : M[0];
        }
        function l(M) {
          if (M.length === 0) return null;
          var X = M[0],
            z = M.pop();
          if (z !== X) {
            M[0] = z;
            e: for (var I = 0, T = M.length, G = T >>> 1; I < G; ) {
              var W = 2 * (I + 1) - 1,
                $ = M[W],
                ee = W + 1,
                ye = M[ee];
              if (0 > o($, z))
                ee < T && 0 > o(ye, $)
                  ? ((M[I] = ye), (M[ee] = z), (I = ee))
                  : ((M[I] = $), (M[W] = z), (I = W));
              else if (ee < T && 0 > o(ye, z))
                (M[I] = ye), (M[ee] = z), (I = ee);
              else break e;
            }
          }
          return X;
        }
        function o(M, X) {
          var z = M.sortIndex - X.sortIndex;
          return z !== 0 ? z : M.id - X.id;
        }
        if (
          ((n.unstable_now = void 0),
          typeof performance == 'object' &&
            typeof performance.now == 'function')
        ) {
          var c = performance;
          n.unstable_now = function () {
            return c.now();
          };
        } else {
          var d = Date,
            h = d.now();
          n.unstable_now = function () {
            return d.now() - h;
          };
        }
        var m = [],
          p = [],
          g = 1,
          v = null,
          x = 3,
          O = !1,
          S = !1,
          w = !1,
          R = !1,
          _ = typeof setTimeout == 'function' ? setTimeout : null,
          q = typeof clearTimeout == 'function' ? clearTimeout : null,
          j = typeof setImmediate < 'u' ? setImmediate : null;
        function k(M) {
          for (var X = r(p); X !== null; ) {
            if (X.callback === null) l(p);
            else if (X.startTime <= M)
              l(p), (X.sortIndex = X.expirationTime), a(m, X);
            else break;
            X = r(p);
          }
        }
        function B(M) {
          if (((w = !1), k(M), !S))
            if (r(m) !== null) (S = !0), J || ((J = !0), de());
            else {
              var X = r(p);
              X !== null && me(B, X.startTime - M);
            }
        }
        var J = !1,
          V = -1,
          Y = 5,
          te = -1;
        function re() {
          return R ? !0 : !(n.unstable_now() - te < Y);
        }
        function ve() {
          if (((R = !1), J)) {
            var M = n.unstable_now();
            te = M;
            var X = !0;
            try {
              e: {
                (S = !1), w && ((w = !1), q(V), (V = -1)), (O = !0);
                var z = x;
                try {
                  t: {
                    for (
                      k(M), v = r(m);
                      v !== null && !(v.expirationTime > M && re());

                    ) {
                      var I = v.callback;
                      if (typeof I == 'function') {
                        (v.callback = null), (x = v.priorityLevel);
                        var T = I(v.expirationTime <= M);
                        if (((M = n.unstable_now()), typeof T == 'function')) {
                          (v.callback = T), k(M), (X = !0);
                          break t;
                        }
                        v === r(m) && l(m), k(M);
                      } else l(m);
                      v = r(m);
                    }
                    if (v !== null) X = !0;
                    else {
                      var G = r(p);
                      G !== null && me(B, G.startTime - M), (X = !1);
                    }
                  }
                  break e;
                } finally {
                  (v = null), (x = z), (O = !1);
                }
                X = void 0;
              }
            } finally {
              X ? de() : (J = !1);
            }
          }
        }
        var de;
        if (typeof j == 'function')
          de = function () {
            j(ve);
          };
        else if (typeof MessageChannel < 'u') {
          var ue = new MessageChannel(),
            se = ue.port2;
          (ue.port1.onmessage = ve),
            (de = function () {
              se.postMessage(null);
            });
        } else
          de = function () {
            _(ve, 0);
          };
        function me(M, X) {
          V = _(function () {
            M(n.unstable_now());
          }, X);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (M) {
            M.callback = null;
          }),
          (n.unstable_forceFrameRate = function (M) {
            0 > M || 125 < M
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : (Y = 0 < M ? Math.floor(1e3 / M) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return x;
          }),
          (n.unstable_next = function (M) {
            switch (x) {
              case 1:
              case 2:
              case 3:
                var X = 3;
                break;
              default:
                X = x;
            }
            var z = x;
            x = X;
            try {
              return M();
            } finally {
              x = z;
            }
          }),
          (n.unstable_requestPaint = function () {
            R = !0;
          }),
          (n.unstable_runWithPriority = function (M, X) {
            switch (M) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                M = 3;
            }
            var z = x;
            x = M;
            try {
              return X();
            } finally {
              x = z;
            }
          }),
          (n.unstable_scheduleCallback = function (M, X, z) {
            var I = n.unstable_now();
            switch (
              (typeof z == 'object' && z !== null
                ? ((z = z.delay),
                  (z = typeof z == 'number' && 0 < z ? I + z : I))
                : (z = I),
              M)
            ) {
              case 1:
                var T = -1;
                break;
              case 2:
                T = 250;
                break;
              case 5:
                T = 1073741823;
                break;
              case 4:
                T = 1e4;
                break;
              default:
                T = 5e3;
            }
            return (
              (T = z + T),
              (M = {
                id: g++,
                callback: X,
                priorityLevel: M,
                startTime: z,
                expirationTime: T,
                sortIndex: -1,
              }),
              z > I
                ? ((M.sortIndex = z),
                  a(p, M),
                  r(m) === null &&
                    M === r(p) &&
                    (w ? (q(V), (V = -1)) : (w = !0), me(B, z - I)))
                : ((M.sortIndex = T),
                  a(m, M),
                  S || O || ((S = !0), J || ((J = !0), de()))),
              M
            );
          }),
          (n.unstable_shouldYield = re),
          (n.unstable_wrapCallback = function (M) {
            var X = x;
            return function () {
              var z = x;
              x = X;
              try {
                return M.apply(this, arguments);
              } finally {
                x = z;
              }
            };
          });
      })(Nc)),
    Nc
  );
}
var $m;
function Lx() {
  return $m || (($m = 1), (_c.exports = Nx())), _c.exports;
}
var Lc = { exports: {} },
  lt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Im;
function zx() {
  if (Im) return lt;
  Im = 1;
  var n = Rf();
  function a(m) {
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
          throw Error(a(522));
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
  var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(m, p) {
    if (m === 'font') return '';
    if (typeof p == 'string') return p === 'use-credentials' ? p : '';
  }
  return (
    (lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l),
    (lt.createPortal = function (m, p) {
      var g =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
        throw Error(a(299));
      return c(m, p, null, g);
    }),
    (lt.flushSync = function (m) {
      var p = d.T,
        g = l.p;
      try {
        if (((d.T = null), (l.p = 2), m)) return m();
      } finally {
        (d.T = p), (l.p = g), l.d.f();
      }
    }),
    (lt.preconnect = function (m, p) {
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
    (lt.prefetchDNS = function (m) {
      typeof m == 'string' && l.d.D(m);
    }),
    (lt.preinit = function (m, p) {
      if (typeof m == 'string' && p && typeof p.as == 'string') {
        var g = p.as,
          v = h(g, p.crossOrigin),
          x = typeof p.integrity == 'string' ? p.integrity : void 0,
          O = typeof p.fetchPriority == 'string' ? p.fetchPriority : void 0;
        g === 'style'
          ? l.d.S(m, typeof p.precedence == 'string' ? p.precedence : void 0, {
              crossOrigin: v,
              integrity: x,
              fetchPriority: O,
            })
          : g === 'script' &&
            l.d.X(m, {
              crossOrigin: v,
              integrity: x,
              fetchPriority: O,
              nonce: typeof p.nonce == 'string' ? p.nonce : void 0,
            });
      }
    }),
    (lt.preinitModule = function (m, p) {
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
    (lt.preload = function (m, p) {
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
    (lt.preloadModule = function (m, p) {
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
    (lt.requestFormReset = function (m) {
      l.d.r(m);
    }),
    (lt.unstable_batchedUpdates = function (m, p) {
      return m(p);
    }),
    (lt.useFormState = function (m, p, g) {
      return d.H.useFormState(m, p, g);
    }),
    (lt.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (lt.version = '19.1.1'),
    lt
  );
}
var Jm;
function My() {
  if (Jm) return Lc.exports;
  Jm = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (a) {
        console.error(a);
      }
  }
  return n(), (Lc.exports = zx()), Lc.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wm;
function Ux() {
  if (Wm) return Hr;
  Wm = 1;
  var n = Lx(),
    a = Rf(),
    r = My();
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
    x = Symbol.for('react.transitional.element'),
    O = Symbol.for('react.portal'),
    S = Symbol.for('react.fragment'),
    w = Symbol.for('react.strict_mode'),
    R = Symbol.for('react.profiler'),
    _ = Symbol.for('react.provider'),
    q = Symbol.for('react.consumer'),
    j = Symbol.for('react.context'),
    k = Symbol.for('react.forward_ref'),
    B = Symbol.for('react.suspense'),
    J = Symbol.for('react.suspense_list'),
    V = Symbol.for('react.memo'),
    Y = Symbol.for('react.lazy'),
    te = Symbol.for('react.activity'),
    re = Symbol.for('react.memo_cache_sentinel'),
    ve = Symbol.iterator;
  function de(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (ve && e[ve]) || e['@@iterator']),
        typeof e == 'function' ? e : null);
  }
  var ue = Symbol.for('react.client.reference');
  function se(e) {
    if (e == null) return null;
    if (typeof e == 'function')
      return e.$$typeof === ue ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case S:
        return 'Fragment';
      case R:
        return 'Profiler';
      case w:
        return 'StrictMode';
      case B:
        return 'Suspense';
      case J:
        return 'SuspenseList';
      case te:
        return 'Activity';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case O:
          return 'Portal';
        case j:
          return (e.displayName || 'Context') + '.Provider';
        case q:
          return (e._context.displayName || 'Context') + '.Consumer';
        case k:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case V:
          return (
            (t = e.displayName || null), t !== null ? t : se(e.type) || 'Memo'
          );
        case Y:
          (t = e._payload), (e = e._init);
          try {
            return se(e(t));
          } catch {}
      }
    return null;
  }
  var me = Array.isArray,
    M = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    X = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    z = { pending: !1, data: null, method: null, action: null },
    I = [],
    T = -1;
  function G(e) {
    return { current: e };
  }
  function W(e) {
    0 > T || ((e.current = I[T]), (I[T] = null), T--);
  }
  function $(e, t) {
    T++, (I[T] = e.current), (e.current = t);
  }
  var ee = G(null),
    ye = G(null),
    oe = G(null),
    ce = G(null);
  function Ce(e, t) {
    switch (($(oe, t), $(ye, e), $(ee, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? bm(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          (t = bm(t)), (e = Sm(t, e));
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
    W(ee), $(ee, e);
  }
  function ut() {
    W(ee), W(ye), W(oe);
  }
  function It(e) {
    e.memoizedState !== null && $(ce, e);
    var t = ee.current,
      i = Sm(t, e.type);
    t !== i && ($(ye, e), $(ee, i));
  }
  function Jt(e) {
    ye.current === e && (W(ee), W(ye)),
      ce.current === e && (W(ce), (Nr._currentValue = z));
  }
  var Wt = Object.prototype.hasOwnProperty,
    Ln = n.unstable_scheduleCallback,
    go = n.unstable_cancelCallback,
    s0 = n.unstable_shouldYield,
    l0 = n.unstable_requestPaint,
    en = n.unstable_now,
    o0 = n.unstable_getCurrentPriorityLevel,
    Wf = n.unstable_ImmediatePriority,
    ed = n.unstable_UserBlockingPriority,
    cs = n.unstable_NormalPriority,
    u0 = n.unstable_LowPriority,
    td = n.unstable_IdlePriority,
    c0 = n.log,
    f0 = n.unstable_setDisableYieldValue,
    qi = null,
    wt = null;
  function zn(e) {
    if (
      (typeof c0 == 'function' && f0(e),
      wt && typeof wt.setStrictMode == 'function')
    )
      try {
        wt.setStrictMode(qi, e);
      } catch {}
  }
  var Et = Math.clz32 ? Math.clz32 : p0,
    d0 = Math.log,
    h0 = Math.LN2;
  function p0(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((d0(e) / h0) | 0)) | 0;
  }
  var fs = 256,
    ds = 4194304;
  function ca(e) {
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
  function hs(e, t, i) {
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
            ? (u = ca(s))
            : ((y &= b),
              y !== 0
                ? (u = ca(y))
                : i || ((i = b & ~e), i !== 0 && (u = ca(i)))))
        : ((b = s & ~f),
          b !== 0
            ? (u = ca(b))
            : y !== 0
              ? (u = ca(y))
              : i || ((i = s & ~e), i !== 0 && (u = ca(i)))),
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
  function Pi(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function m0(e, t) {
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
  function nd() {
    var e = fs;
    return (fs <<= 1), (fs & 4194048) === 0 && (fs = 256), e;
  }
  function ad() {
    var e = ds;
    return (ds <<= 1), (ds & 62914560) === 0 && (ds = 4194304), e;
  }
  function yo(e) {
    for (var t = [], i = 0; 31 > i; i++) t.push(e);
    return t;
  }
  function Gi(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function g0(e, t, i, s, u, f) {
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
      A = e.expirationTimes,
      L = e.hiddenUpdates;
    for (i = y & ~i; 0 < i; ) {
      var Q = 31 - Et(i),
        Z = 1 << Q;
      (b[Q] = 0), (A[Q] = -1);
      var U = L[Q];
      if (U !== null)
        for (L[Q] = null, Q = 0; Q < U.length; Q++) {
          var H = U[Q];
          H !== null && (H.lane &= -536870913);
        }
      i &= ~Z;
    }
    s !== 0 && id(e, s, 0),
      f !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(y & ~t));
  }
  function id(e, t, i) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var s = 31 - Et(t);
    (e.entangledLanes |= t),
      (e.entanglements[s] = e.entanglements[s] | 1073741824 | (i & 4194090));
  }
  function rd(e, t) {
    var i = (e.entangledLanes |= t);
    for (e = e.entanglements; i; ) {
      var s = 31 - Et(i),
        u = 1 << s;
      (u & t) | (e[s] & t) && (e[s] |= t), (i &= ~u);
    }
  }
  function vo(e) {
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
  function bo(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function sd() {
    var e = X.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Bm(e.type));
  }
  function y0(e, t) {
    var i = X.p;
    try {
      return (X.p = e), t();
    } finally {
      X.p = i;
    }
  }
  var Un = Math.random().toString(36).slice(2),
    rt = '__reactFiber$' + Un,
    ht = '__reactProps$' + Un,
    Ha = '__reactContainer$' + Un,
    So = '__reactEvents$' + Un,
    v0 = '__reactListeners$' + Un,
    b0 = '__reactHandles$' + Un,
    ld = '__reactResources$' + Un,
    Vi = '__reactMarker$' + Un;
  function xo(e) {
    delete e[rt], delete e[ht], delete e[So], delete e[v0], delete e[b0];
  }
  function Ba(e) {
    var t = e[rt];
    if (t) return t;
    for (var i = e.parentNode; i; ) {
      if ((t = i[Ha] || i[rt])) {
        if (
          ((i = t.alternate),
          t.child !== null || (i !== null && i.child !== null))
        )
          for (e = Om(e); e !== null; ) {
            if ((i = e[rt])) return i;
            e = Om(e);
          }
        return t;
      }
      (e = i), (i = e.parentNode);
    }
    return null;
  }
  function qa(e) {
    if ((e = e[rt] || e[Ha])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Fi(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(l(33));
  }
  function Pa(e) {
    var t = e[ld];
    return (
      t ||
        (t = e[ld] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function $e(e) {
    e[Vi] = !0;
  }
  var od = new Set(),
    ud = {};
  function fa(e, t) {
    Ga(e, t), Ga(e + 'Capture', t);
  }
  function Ga(e, t) {
    for (ud[e] = t, e = 0; e < t.length; e++) od.add(t[e]);
  }
  var S0 = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
    ),
    cd = {},
    fd = {};
  function x0(e) {
    return Wt.call(fd, e)
      ? !0
      : Wt.call(cd, e)
        ? !1
        : S0.test(e)
          ? (fd[e] = !0)
          : ((cd[e] = !0), !1);
  }
  function ps(e, t, i) {
    if (x0(t))
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
  function ms(e, t, i) {
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
  function pn(e, t, i, s) {
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
  var wo, dd;
  function Va(e) {
    if (wo === void 0)
      try {
        throw Error();
      } catch (i) {
        var t = i.stack.trim().match(/\n( *(at )?)/);
        (wo = (t && t[1]) || ''),
          (dd =
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
      wo +
      e +
      dd
    );
  }
  var Eo = !1;
  function Oo(e, t) {
    if (!e || Eo) return '';
    Eo = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var s = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var Z = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(Z.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(Z, []);
                } catch (H) {
                  var U = H;
                }
                Reflect.construct(e, [], Z);
              } else {
                try {
                  Z.call();
                } catch (H) {
                  U = H;
                }
                e.call(Z.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (H) {
                U = H;
              }
              (Z = e()) &&
                typeof Z.catch == 'function' &&
                Z.catch(function () {});
            }
          } catch (H) {
            if (H && U && typeof H.stack == 'string') return [H.stack, U.stack];
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
        var A = y.split(`
`),
          L = b.split(`
`);
        for (
          u = s = 0;
          s < A.length && !A[s].includes('DetermineComponentFrameRoot');

        )
          s++;
        for (; u < L.length && !L[u].includes('DetermineComponentFrameRoot'); )
          u++;
        if (s === A.length || u === L.length)
          for (
            s = A.length - 1, u = L.length - 1;
            1 <= s && 0 <= u && A[s] !== L[u];

          )
            u--;
        for (; 1 <= s && 0 <= u; s--, u--)
          if (A[s] !== L[u]) {
            if (s !== 1 || u !== 1)
              do
                if ((s--, u--, 0 > u || A[s] !== L[u])) {
                  var Q =
                    `
` + A[s].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      Q.includes('<anonymous>') &&
                      (Q = Q.replace('<anonymous>', e.displayName)),
                    Q
                  );
                }
              while (1 <= s && 0 <= u);
            break;
          }
      }
    } finally {
      (Eo = !1), (Error.prepareStackTrace = i);
    }
    return (i = e ? e.displayName || e.name : '') ? Va(i) : '';
  }
  function w0(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Va(e.type);
      case 16:
        return Va('Lazy');
      case 13:
        return Va('Suspense');
      case 19:
        return Va('SuspenseList');
      case 0:
      case 15:
        return Oo(e.type, !1);
      case 11:
        return Oo(e.type.render, !1);
      case 1:
        return Oo(e.type, !0);
      case 31:
        return Va('Activity');
      default:
        return '';
    }
  }
  function hd(e) {
    try {
      var t = '';
      do (t += w0(e)), (e = e.return);
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
  function Lt(e) {
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
  function pd(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === 'input' &&
      (t === 'checkbox' || t === 'radio')
    );
  }
  function E0(e) {
    var t = pd(e) ? 'checked' : 'value',
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
  function gs(e) {
    e._valueTracker || (e._valueTracker = E0(e));
  }
  function md(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var i = t.getValue(),
      s = '';
    return (
      e && (s = pd(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = s),
      e !== i ? (t.setValue(e), !0) : !1
    );
  }
  function ys(e) {
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
  var O0 = /[\n"\\]/g;
  function zt(e) {
    return e.replace(O0, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function Ro(e, t, i, s, u, f, y, b) {
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
            (e.value = '' + Lt(t))
          : e.value !== '' + Lt(t) && (e.value = '' + Lt(t))
        : (y !== 'submit' && y !== 'reset') || e.removeAttribute('value'),
      t != null
        ? Ao(e, y, Lt(t))
        : i != null
          ? Ao(e, y, Lt(i))
          : s != null && e.removeAttribute('value'),
      u == null && f != null && (e.defaultChecked = !!f),
      u != null &&
        (e.checked = u && typeof u != 'function' && typeof u != 'symbol'),
      b != null &&
      typeof b != 'function' &&
      typeof b != 'symbol' &&
      typeof b != 'boolean'
        ? (e.name = '' + Lt(b))
        : e.removeAttribute('name');
  }
  function gd(e, t, i, s, u, f, y, b) {
    if (
      (f != null &&
        typeof f != 'function' &&
        typeof f != 'symbol' &&
        typeof f != 'boolean' &&
        (e.type = f),
      t != null || i != null)
    ) {
      if (!((f !== 'submit' && f !== 'reset') || t != null)) return;
      (i = i != null ? '' + Lt(i) : ''),
        (t = t != null ? '' + Lt(t) : i),
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
  function Ao(e, t, i) {
    (t === 'number' && ys(e.ownerDocument) === e) ||
      e.defaultValue === '' + i ||
      (e.defaultValue = '' + i);
  }
  function Fa(e, t, i, s) {
    if (((e = e.options), t)) {
      t = {};
      for (var u = 0; u < i.length; u++) t['$' + i[u]] = !0;
      for (i = 0; i < e.length; i++)
        (u = t.hasOwnProperty('$' + e[i].value)),
          e[i].selected !== u && (e[i].selected = u),
          u && s && (e[i].defaultSelected = !0);
    } else {
      for (i = '' + Lt(i), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === i) {
          (e[u].selected = !0), s && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function yd(e, t, i) {
    if (
      t != null &&
      ((t = '' + Lt(t)), t !== e.value && (e.value = t), i == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = i != null ? '' + Lt(i) : '';
  }
  function vd(e, t, i, s) {
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
    (i = Lt(t)),
      (e.defaultValue = i),
      (s = e.textContent),
      s === i && s !== '' && s !== null && (e.value = s);
  }
  function Qa(e, t) {
    if (t) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var R0 = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' ',
    ),
  );
  function bd(e, t, i) {
    var s = t.indexOf('--') === 0;
    i == null || typeof i == 'boolean' || i === ''
      ? s
        ? e.setProperty(t, '')
        : t === 'float'
          ? (e.cssFloat = '')
          : (e[t] = '')
      : s
        ? e.setProperty(t, i)
        : typeof i != 'number' || i === 0 || R0.has(t)
          ? t === 'float'
            ? (e.cssFloat = i)
            : (e[t] = ('' + i).trim())
          : (e[t] = i + 'px');
  }
  function Sd(e, t, i) {
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
        (s = t[u]), t.hasOwnProperty(u) && i[u] !== s && bd(e, u, s);
    } else for (var f in t) t.hasOwnProperty(f) && bd(e, f, t[f]);
  }
  function To(e) {
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
  var A0 = new Map([
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
    T0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function vs(e) {
    return T0.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var Co = null;
  function Mo(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Ya = null,
    Ka = null;
  function xd(e) {
    var t = qa(e);
    if (t && (e = t.stateNode)) {
      var i = e[ht] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (Ro(
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
                'input[name="' + zt('' + t) + '"][type="radio"]',
              ),
                t = 0;
              t < i.length;
              t++
            ) {
              var s = i[t];
              if (s !== e && s.form === e.form) {
                var u = s[ht] || null;
                if (!u) throw Error(l(90));
                Ro(
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
              (s = i[t]), s.form === e.form && md(s);
          }
          break e;
        case 'textarea':
          yd(e, i.value, i.defaultValue);
          break e;
        case 'select':
          (t = i.value), t != null && Fa(e, !!i.multiple, t, !1);
      }
    }
  }
  var Do = !1;
  function wd(e, t, i) {
    if (Do) return e(t, i);
    Do = !0;
    try {
      var s = e(t);
      return s;
    } finally {
      if (
        ((Do = !1),
        (Ya !== null || Ka !== null) &&
          (al(), Ya && ((t = Ya), (e = Ka), (Ka = Ya = null), xd(t), e)))
      )
        for (t = 0; t < e.length; t++) xd(e[t]);
    }
  }
  function Qi(e, t) {
    var i = e.stateNode;
    if (i === null) return null;
    var s = i[ht] || null;
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
  var mn = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    _o = !1;
  if (mn)
    try {
      var Yi = {};
      Object.defineProperty(Yi, 'passive', {
        get: function () {
          _o = !0;
        },
      }),
        window.addEventListener('test', Yi, Yi),
        window.removeEventListener('test', Yi, Yi);
    } catch {
      _o = !1;
    }
  var jn = null,
    No = null,
    bs = null;
  function Ed() {
    if (bs) return bs;
    var e,
      t = No,
      i = t.length,
      s,
      u = 'value' in jn ? jn.value : jn.textContent,
      f = u.length;
    for (e = 0; e < i && t[e] === u[e]; e++);
    var y = i - e;
    for (s = 1; s <= y && t[i - s] === u[f - s]; s++);
    return (bs = u.slice(e, 1 < s ? 1 - s : void 0));
  }
  function Ss(e) {
    var t = e.keyCode;
    return (
      'charCode' in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function xs() {
    return !0;
  }
  function Od() {
    return !1;
  }
  function pt(e) {
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
          ? xs
          : Od),
        (this.isPropagationStopped = Od),
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
            (this.isDefaultPrevented = xs));
        },
        stopPropagation: function () {
          var i = this.nativeEvent;
          i &&
            (i.stopPropagation
              ? i.stopPropagation()
              : typeof i.cancelBubble != 'unknown' && (i.cancelBubble = !0),
            (this.isPropagationStopped = xs));
        },
        persist: function () {},
        isPersistent: xs,
      }),
      t
    );
  }
  var da = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ws = pt(da),
    Ki = g({}, da, { view: 0, detail: 0 }),
    C0 = pt(Ki),
    Lo,
    zo,
    Xi,
    Es = g({}, Ki, {
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
      getModifierState: jo,
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
          : (e !== Xi &&
              (Xi && e.type === 'mousemove'
                ? ((Lo = e.screenX - Xi.screenX), (zo = e.screenY - Xi.screenY))
                : (zo = Lo = 0),
              (Xi = e)),
            Lo);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : zo;
      },
    }),
    Rd = pt(Es),
    M0 = g({}, Es, { dataTransfer: 0 }),
    D0 = pt(M0),
    _0 = g({}, Ki, { relatedTarget: 0 }),
    Uo = pt(_0),
    N0 = g({}, da, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    L0 = pt(N0),
    z0 = g({}, da, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    U0 = pt(z0),
    j0 = g({}, da, { data: 0 }),
    Ad = pt(j0),
    k0 = {
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
    H0 = {
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
    B0 = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
  function q0(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = B0[e])
        ? !!t[e]
        : !1;
  }
  function jo() {
    return q0;
  }
  var P0 = g({}, Ki, {
      key: function (e) {
        if (e.key) {
          var t = k0[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = Ss(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? H0[e.keyCode] || 'Unidentified'
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
      getModifierState: jo,
      charCode: function (e) {
        return e.type === 'keypress' ? Ss(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? Ss(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    G0 = pt(P0),
    V0 = g({}, Es, {
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
    Td = pt(V0),
    F0 = g({}, Ki, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: jo,
    }),
    Q0 = pt(F0),
    Y0 = g({}, da, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    K0 = pt(Y0),
    X0 = g({}, Es, {
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
    Z0 = pt(X0),
    $0 = g({}, da, { newState: 0, oldState: 0 }),
    I0 = pt($0),
    J0 = [9, 13, 27, 32],
    ko = mn && 'CompositionEvent' in window,
    Zi = null;
  mn && 'documentMode' in document && (Zi = document.documentMode);
  var W0 = mn && 'TextEvent' in window && !Zi,
    Cd = mn && (!ko || (Zi && 8 < Zi && 11 >= Zi)),
    Md = ' ',
    Dd = !1;
  function _d(e, t) {
    switch (e) {
      case 'keyup':
        return J0.indexOf(t.keyCode) !== -1;
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
  function Nd(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
  }
  var Xa = !1;
  function eS(e, t) {
    switch (e) {
      case 'compositionend':
        return Nd(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Dd = !0), Md);
      case 'textInput':
        return (e = t.data), e === Md && Dd ? null : e;
      default:
        return null;
    }
  }
  function tS(e, t) {
    if (Xa)
      return e === 'compositionend' || (!ko && _d(e, t))
        ? ((e = Ed()), (bs = No = jn = null), (Xa = !1), e)
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
        return Cd && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var nS = {
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
  function Ld(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!nS[e.type] : t === 'textarea';
  }
  function zd(e, t, i, s) {
    Ya ? (Ka ? Ka.push(s) : (Ka = [s])) : (Ya = s),
      (t = ul(t, 'onChange')),
      0 < t.length &&
        ((i = new ws('onChange', 'change', null, i, s)),
        e.push({ event: i, listeners: t }));
  }
  var $i = null,
    Ii = null;
  function aS(e) {
    pm(e, 0);
  }
  function Os(e) {
    var t = Fi(e);
    if (md(t)) return e;
  }
  function Ud(e, t) {
    if (e === 'change') return t;
  }
  var jd = !1;
  if (mn) {
    var Ho;
    if (mn) {
      var Bo = 'oninput' in document;
      if (!Bo) {
        var kd = document.createElement('div');
        kd.setAttribute('oninput', 'return;'),
          (Bo = typeof kd.oninput == 'function');
      }
      Ho = Bo;
    } else Ho = !1;
    jd = Ho && (!document.documentMode || 9 < document.documentMode);
  }
  function Hd() {
    $i && ($i.detachEvent('onpropertychange', Bd), (Ii = $i = null));
  }
  function Bd(e) {
    if (e.propertyName === 'value' && Os(Ii)) {
      var t = [];
      zd(t, Ii, e, Mo(e)), wd(aS, t);
    }
  }
  function iS(e, t, i) {
    e === 'focusin'
      ? (Hd(), ($i = t), (Ii = i), $i.attachEvent('onpropertychange', Bd))
      : e === 'focusout' && Hd();
  }
  function rS(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return Os(Ii);
  }
  function sS(e, t) {
    if (e === 'click') return Os(t);
  }
  function lS(e, t) {
    if (e === 'input' || e === 'change') return Os(t);
  }
  function oS(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Ot = typeof Object.is == 'function' ? Object.is : oS;
  function Ji(e, t) {
    if (Ot(e, t)) return !0;
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
      if (!Wt.call(t, u) || !Ot(e[u], t[u])) return !1;
    }
    return !0;
  }
  function qd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Pd(e, t) {
    var i = qd(e);
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
      i = qd(i);
    }
  }
  function Gd(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Gd(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Vd(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = ys(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof t.contentWindow.location.href == 'string';
      } catch {
        i = !1;
      }
      if (i) e = t.contentWindow;
      else break;
      t = ys(e.document);
    }
    return t;
  }
  function qo(e) {
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
  var uS = mn && 'documentMode' in document && 11 >= document.documentMode,
    Za = null,
    Po = null,
    Wi = null,
    Go = !1;
  function Fd(e, t, i) {
    var s =
      i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    Go ||
      Za == null ||
      Za !== ys(s) ||
      ((s = Za),
      'selectionStart' in s && qo(s)
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
      (Wi && Ji(Wi, s)) ||
        ((Wi = s),
        (s = ul(Po, 'onSelect')),
        0 < s.length &&
          ((t = new ws('onSelect', 'select', null, t, i)),
          e.push({ event: t, listeners: s }),
          (t.target = Za))));
  }
  function ha(e, t) {
    var i = {};
    return (
      (i[e.toLowerCase()] = t.toLowerCase()),
      (i['Webkit' + e] = 'webkit' + t),
      (i['Moz' + e] = 'moz' + t),
      i
    );
  }
  var $a = {
      animationend: ha('Animation', 'AnimationEnd'),
      animationiteration: ha('Animation', 'AnimationIteration'),
      animationstart: ha('Animation', 'AnimationStart'),
      transitionrun: ha('Transition', 'TransitionRun'),
      transitionstart: ha('Transition', 'TransitionStart'),
      transitioncancel: ha('Transition', 'TransitionCancel'),
      transitionend: ha('Transition', 'TransitionEnd'),
    },
    Vo = {},
    Qd = {};
  mn &&
    ((Qd = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete $a.animationend.animation,
      delete $a.animationiteration.animation,
      delete $a.animationstart.animation),
    'TransitionEvent' in window || delete $a.transitionend.transition);
  function pa(e) {
    if (Vo[e]) return Vo[e];
    if (!$a[e]) return e;
    var t = $a[e],
      i;
    for (i in t) if (t.hasOwnProperty(i) && i in Qd) return (Vo[e] = t[i]);
    return e;
  }
  var Yd = pa('animationend'),
    Kd = pa('animationiteration'),
    Xd = pa('animationstart'),
    cS = pa('transitionrun'),
    fS = pa('transitionstart'),
    dS = pa('transitioncancel'),
    Zd = pa('transitionend'),
    $d = new Map(),
    Fo =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' ',
      );
  Fo.push('scrollEnd');
  function Qt(e, t) {
    $d.set(e, t), fa(t, [e]);
  }
  var Id = new WeakMap();
  function Ut(e, t) {
    if (typeof e == 'object' && e !== null) {
      var i = Id.get(e);
      return i !== void 0
        ? i
        : ((t = { value: e, source: t, stack: hd(t) }), Id.set(e, t), t);
    }
    return { value: e, source: t, stack: hd(t) };
  }
  var jt = [],
    Ia = 0,
    Qo = 0;
  function Rs() {
    for (var e = Ia, t = (Qo = Ia = 0); t < e; ) {
      var i = jt[t];
      jt[t++] = null;
      var s = jt[t];
      jt[t++] = null;
      var u = jt[t];
      jt[t++] = null;
      var f = jt[t];
      if (((jt[t++] = null), s !== null && u !== null)) {
        var y = s.pending;
        y === null ? (u.next = u) : ((u.next = y.next), (y.next = u)),
          (s.pending = u);
      }
      f !== 0 && Jd(i, u, f);
    }
  }
  function As(e, t, i, s) {
    (jt[Ia++] = e),
      (jt[Ia++] = t),
      (jt[Ia++] = i),
      (jt[Ia++] = s),
      (Qo |= s),
      (e.lanes |= s),
      (e = e.alternate),
      e !== null && (e.lanes |= s);
  }
  function Yo(e, t, i, s) {
    return As(e, t, i, s), Ts(e);
  }
  function Ja(e, t) {
    return As(e, null, null, t), Ts(e);
  }
  function Jd(e, t, i) {
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
          ((u = 31 - Et(i)),
          (e = f.hiddenUpdates),
          (s = e[u]),
          s === null ? (e[u] = [t]) : s.push(t),
          (t.lane = i | 536870912)),
        f)
      : null;
  }
  function Ts(e) {
    if (50 < Or) throw ((Or = 0), (Ju = null), Error(l(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var Wa = {};
  function hS(e, t, i, s) {
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
  function Rt(e, t, i, s) {
    return new hS(e, t, i, s);
  }
  function Ko(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function gn(e, t) {
    var i = e.alternate;
    return (
      i === null
        ? ((i = Rt(e.tag, t, e.key, e.mode)),
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
  function Wd(e, t) {
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
  function Cs(e, t, i, s, u, f) {
    var y = 0;
    if (((s = e), typeof e == 'function')) Ko(e) && (y = 1);
    else if (typeof e == 'string')
      y = mx(e, i, ee.current)
        ? 26
        : e === 'html' || e === 'head' || e === 'body'
          ? 27
          : 5;
    else
      e: switch (e) {
        case te:
          return (e = Rt(31, i, t, u)), (e.elementType = te), (e.lanes = f), e;
        case S:
          return ma(i.children, u, f, t);
        case w:
          (y = 8), (u |= 24);
          break;
        case R:
          return (
            (e = Rt(12, i, t, u | 2)), (e.elementType = R), (e.lanes = f), e
          );
        case B:
          return (e = Rt(13, i, t, u)), (e.elementType = B), (e.lanes = f), e;
        case J:
          return (e = Rt(19, i, t, u)), (e.elementType = J), (e.lanes = f), e;
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case _:
              case j:
                y = 10;
                break e;
              case q:
                y = 9;
                break e;
              case k:
                y = 11;
                break e;
              case V:
                y = 14;
                break e;
              case Y:
                (y = 16), (s = null);
                break e;
            }
          (y = 29),
            (i = Error(l(130, e === null ? 'null' : typeof e, ''))),
            (s = null);
      }
    return (
      (t = Rt(y, i, t, u)), (t.elementType = e), (t.type = s), (t.lanes = f), t
    );
  }
  function ma(e, t, i, s) {
    return (e = Rt(7, e, s, t)), (e.lanes = i), e;
  }
  function Xo(e, t, i) {
    return (e = Rt(6, e, null, t)), (e.lanes = i), e;
  }
  function Zo(e, t, i) {
    return (
      (t = Rt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = i),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var ei = [],
    ti = 0,
    Ms = null,
    Ds = 0,
    kt = [],
    Ht = 0,
    ga = null,
    yn = 1,
    vn = '';
  function ya(e, t) {
    (ei[ti++] = Ds), (ei[ti++] = Ms), (Ms = e), (Ds = t);
  }
  function eh(e, t, i) {
    (kt[Ht++] = yn), (kt[Ht++] = vn), (kt[Ht++] = ga), (ga = e);
    var s = yn;
    e = vn;
    var u = 32 - Et(s) - 1;
    (s &= ~(1 << u)), (i += 1);
    var f = 32 - Et(t) + u;
    if (30 < f) {
      var y = u - (u % 5);
      (f = (s & ((1 << y) - 1)).toString(32)),
        (s >>= y),
        (u -= y),
        (yn = (1 << (32 - Et(t) + u)) | (i << u) | s),
        (vn = f + e);
    } else (yn = (1 << f) | (i << u) | s), (vn = e);
  }
  function $o(e) {
    e.return !== null && (ya(e, 1), eh(e, 1, 0));
  }
  function Io(e) {
    for (; e === Ms; )
      (Ms = ei[--ti]), (ei[ti] = null), (Ds = ei[--ti]), (ei[ti] = null);
    for (; e === ga; )
      (ga = kt[--Ht]),
        (kt[Ht] = null),
        (vn = kt[--Ht]),
        (kt[Ht] = null),
        (yn = kt[--Ht]),
        (kt[Ht] = null);
  }
  var ct = null,
    qe = null,
    De = !1,
    va = null,
    tn = !1,
    Jo = Error(l(519));
  function ba(e) {
    var t = Error(l(418, ''));
    throw (nr(Ut(t, e)), Jo);
  }
  function th(e) {
    var t = e.stateNode,
      i = e.type,
      s = e.memoizedProps;
    switch (((t[rt] = e), (t[ht] = s), i)) {
      case 'dialog':
        Re('cancel', t), Re('close', t);
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        Re('load', t);
        break;
      case 'video':
      case 'audio':
        for (i = 0; i < Ar.length; i++) Re(Ar[i], t);
        break;
      case 'source':
        Re('error', t);
        break;
      case 'img':
      case 'image':
      case 'link':
        Re('error', t), Re('load', t);
        break;
      case 'details':
        Re('toggle', t);
        break;
      case 'input':
        Re('invalid', t),
          gd(
            t,
            s.value,
            s.defaultValue,
            s.checked,
            s.defaultChecked,
            s.type,
            s.name,
            !0,
          ),
          gs(t);
        break;
      case 'select':
        Re('invalid', t);
        break;
      case 'textarea':
        Re('invalid', t), vd(t, s.value, s.defaultValue, s.children), gs(t);
    }
    (i = s.children),
      (typeof i != 'string' && typeof i != 'number' && typeof i != 'bigint') ||
      t.textContent === '' + i ||
      s.suppressHydrationWarning === !0 ||
      vm(t.textContent, i)
        ? (s.popover != null && (Re('beforetoggle', t), Re('toggle', t)),
          s.onScroll != null && Re('scroll', t),
          s.onScrollEnd != null && Re('scrollend', t),
          s.onClick != null && (t.onclick = cl),
          (t = !0))
        : (t = !1),
      t || ba(e);
  }
  function nh(e) {
    for (ct = e.return; ct; )
      switch (ct.tag) {
        case 5:
        case 13:
          tn = !1;
          return;
        case 27:
        case 3:
          tn = !0;
          return;
        default:
          ct = ct.return;
      }
  }
  function er(e) {
    if (e !== ct) return !1;
    if (!De) return nh(e), (De = !0), !1;
    var t = e.tag,
      i;
    if (
      ((i = t !== 3 && t !== 27) &&
        ((i = t === 5) &&
          ((i = e.type),
          (i =
            !(i !== 'form' && i !== 'button') || pc(e.type, e.memoizedProps))),
        (i = !i)),
      i && qe && ba(e),
      nh(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(l(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((i = e.data), i === '/$')) {
              if (t === 0) {
                qe = Kt(e.nextSibling);
                break e;
              }
              t--;
            } else (i !== '$' && i !== '$!' && i !== '$?') || t++;
          e = e.nextSibling;
        }
        qe = null;
      }
    } else
      t === 27
        ? ((t = qe), Jn(e.type) ? ((e = vc), (vc = null), (qe = e)) : (qe = t))
        : (qe = ct ? Kt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function tr() {
    (qe = ct = null), (De = !1);
  }
  function ah() {
    var e = va;
    return (
      e !== null &&
        (yt === null ? (yt = e) : yt.push.apply(yt, e), (va = null)),
      e
    );
  }
  function nr(e) {
    va === null ? (va = [e]) : va.push(e);
  }
  var Wo = G(null),
    Sa = null,
    bn = null;
  function kn(e, t, i) {
    $(Wo, t._currentValue), (t._currentValue = i);
  }
  function Sn(e) {
    (e._currentValue = Wo.current), W(Wo);
  }
  function eu(e, t, i) {
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
  function tu(e, t, i, s) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null; ) {
      var f = u.dependencies;
      if (f !== null) {
        var y = u.child;
        f = f.firstContext;
        e: for (; f !== null; ) {
          var b = f;
          f = u;
          for (var A = 0; A < t.length; A++)
            if (b.context === t[A]) {
              (f.lanes |= i),
                (b = f.alternate),
                b !== null && (b.lanes |= i),
                eu(f.return, i, e),
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
          eu(y, i, e),
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
  function ar(e, t, i, s) {
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
          Ot(u.pendingProps.value, y.value) ||
            (e !== null ? e.push(b) : (e = [b]));
        }
      } else if (u === ce.current) {
        if (((y = u.alternate), y === null)) throw Error(l(387));
        y.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (e !== null ? e.push(Nr) : (e = [Nr]));
      }
      u = u.return;
    }
    e !== null && tu(t, e, i, s), (t.flags |= 262144);
  }
  function _s(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Ot(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function xa(e) {
    (Sa = e),
      (bn = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function st(e) {
    return ih(Sa, e);
  }
  function Ns(e, t) {
    return Sa === null && xa(e), ih(e, t);
  }
  function ih(e, t) {
    var i = t._currentValue;
    if (((t = { context: t, memoizedValue: i, next: null }), bn === null)) {
      if (e === null) throw Error(l(308));
      (bn = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288);
    } else bn = bn.next = t;
    return i;
  }
  var pS =
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
    mS = n.unstable_scheduleCallback,
    gS = n.unstable_NormalPriority,
    Ke = {
      $$typeof: j,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function nu() {
    return { controller: new pS(), data: new Map(), refCount: 0 };
  }
  function ir(e) {
    e.refCount--,
      e.refCount === 0 &&
        mS(gS, function () {
          e.controller.abort();
        });
  }
  var rr = null,
    au = 0,
    ni = 0,
    ai = null;
  function yS(e, t) {
    if (rr === null) {
      var i = (rr = []);
      (au = 0),
        (ni = rc()),
        (ai = {
          status: 'pending',
          value: void 0,
          then: function (s) {
            i.push(s);
          },
        });
    }
    return au++, t.then(rh, rh), t;
  }
  function rh() {
    if (--au === 0 && rr !== null) {
      ai !== null && (ai.status = 'fulfilled');
      var e = rr;
      (rr = null), (ni = 0), (ai = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function vS(e, t) {
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
  var sh = M.S;
  M.S = function (e, t) {
    typeof t == 'object' &&
      t !== null &&
      typeof t.then == 'function' &&
      yS(e, t),
      sh !== null && sh(e, t);
  };
  var wa = G(null);
  function iu() {
    var e = wa.current;
    return e !== null ? e : ke.pooledCache;
  }
  function Ls(e, t) {
    t === null ? $(wa, wa.current) : $(wa, t.pool);
  }
  function lh() {
    var e = iu();
    return e === null ? null : { parent: Ke._currentValue, pool: e };
  }
  var sr = Error(l(460)),
    oh = Error(l(474)),
    zs = Error(l(542)),
    ru = { then: function () {} };
  function uh(e) {
    return (e = e.status), e === 'fulfilled' || e === 'rejected';
  }
  function Us() {}
  function ch(e, t, i) {
    switch (
      ((i = e[i]),
      i === void 0 ? e.push(t) : i !== t && (t.then(Us, Us), (t = i)),
      t.status)
    ) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), dh(e), e);
      default:
        if (typeof t.status == 'string') t.then(Us, Us);
        else {
          if (((e = ke), e !== null && 100 < e.shellSuspendCounter))
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
            throw ((e = t.reason), dh(e), e);
        }
        throw ((lr = t), sr);
    }
  }
  var lr = null;
  function fh() {
    if (lr === null) throw Error(l(459));
    var e = lr;
    return (lr = null), e;
  }
  function dh(e) {
    if (e === sr || e === zs) throw Error(l(483));
  }
  var Hn = !1;
  function su(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function lu(e, t) {
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
  function Bn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function qn(e, t, i) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (((s = s.shared), (_e & 2) !== 0)) {
      var u = s.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (s.pending = t),
        (t = Ts(e)),
        Jd(e, null, i),
        t
      );
    }
    return As(e, s, t, i), Ts(e);
  }
  function or(e, t, i) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (i & 4194048) !== 0))
    ) {
      var s = t.lanes;
      (s &= e.pendingLanes), (i |= s), (t.lanes = i), rd(e, i);
    }
  }
  function ou(e, t) {
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
  var uu = !1;
  function ur() {
    if (uu) {
      var e = ai;
      if (e !== null) throw e;
    }
  }
  function cr(e, t, i, s) {
    uu = !1;
    var u = e.updateQueue;
    Hn = !1;
    var f = u.firstBaseUpdate,
      y = u.lastBaseUpdate,
      b = u.shared.pending;
    if (b !== null) {
      u.shared.pending = null;
      var A = b,
        L = A.next;
      (A.next = null), y === null ? (f = L) : (y.next = L), (y = A);
      var Q = e.alternate;
      Q !== null &&
        ((Q = Q.updateQueue),
        (b = Q.lastBaseUpdate),
        b !== y &&
          (b === null ? (Q.firstBaseUpdate = L) : (b.next = L),
          (Q.lastBaseUpdate = A)));
    }
    if (f !== null) {
      var Z = u.baseState;
      (y = 0), (Q = L = A = null), (b = f);
      do {
        var U = b.lane & -536870913,
          H = U !== b.lane;
        if (H ? (Ae & U) === U : (s & U) === U) {
          U !== 0 && U === ni && (uu = !0),
            Q !== null &&
              (Q = Q.next =
                {
                  lane: 0,
                  tag: b.tag,
                  payload: b.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var pe = e,
              fe = b;
            U = t;
            var Ue = i;
            switch (fe.tag) {
              case 1:
                if (((pe = fe.payload), typeof pe == 'function')) {
                  Z = pe.call(Ue, Z, U);
                  break e;
                }
                Z = pe;
                break e;
              case 3:
                pe.flags = (pe.flags & -65537) | 128;
              case 0:
                if (
                  ((pe = fe.payload),
                  (U = typeof pe == 'function' ? pe.call(Ue, Z, U) : pe),
                  U == null)
                )
                  break e;
                Z = g({}, Z, U);
                break e;
              case 2:
                Hn = !0;
            }
          }
          (U = b.callback),
            U !== null &&
              ((e.flags |= 64),
              H && (e.flags |= 8192),
              (H = u.callbacks),
              H === null ? (u.callbacks = [U]) : H.push(U));
        } else
          (H = {
            lane: U,
            tag: b.tag,
            payload: b.payload,
            callback: b.callback,
            next: null,
          }),
            Q === null ? ((L = Q = H), (A = Z)) : (Q = Q.next = H),
            (y |= U);
        if (((b = b.next), b === null)) {
          if (((b = u.shared.pending), b === null)) break;
          (H = b),
            (b = H.next),
            (H.next = null),
            (u.lastBaseUpdate = H),
            (u.shared.pending = null);
        }
      } while (!0);
      Q === null && (A = Z),
        (u.baseState = A),
        (u.firstBaseUpdate = L),
        (u.lastBaseUpdate = Q),
        f === null && (u.shared.lanes = 0),
        (Xn |= y),
        (e.lanes = y),
        (e.memoizedState = Z);
    }
  }
  function hh(e, t) {
    if (typeof e != 'function') throw Error(l(191, e));
    e.call(t);
  }
  function ph(e, t) {
    var i = e.callbacks;
    if (i !== null)
      for (e.callbacks = null, e = 0; e < i.length; e++) hh(i[e], t);
  }
  var ii = G(null),
    js = G(0);
  function mh(e, t) {
    (e = Tn), $(js, e), $(ii, t), (Tn = e | t.baseLanes);
  }
  function cu() {
    $(js, Tn), $(ii, ii.current);
  }
  function fu() {
    (Tn = js.current), W(ii), W(js);
  }
  var Pn = 0,
    xe = null,
    Le = null,
    Qe = null,
    ks = !1,
    ri = !1,
    Ea = !1,
    Hs = 0,
    fr = 0,
    si = null,
    bS = 0;
  function Ge() {
    throw Error(l(321));
  }
  function du(e, t) {
    if (t === null) return !1;
    for (var i = 0; i < t.length && i < e.length; i++)
      if (!Ot(e[i], t[i])) return !1;
    return !0;
  }
  function hu(e, t, i, s, u, f) {
    return (
      (Pn = f),
      (xe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (M.H = e === null || e.memoizedState === null ? Jh : Wh),
      (Ea = !1),
      (f = i(s, u)),
      (Ea = !1),
      ri && (f = yh(t, i, s, u)),
      gh(e),
      f
    );
  }
  function gh(e) {
    M.H = Fs;
    var t = Le !== null && Le.next !== null;
    if (((Pn = 0), (Qe = Le = xe = null), (ks = !1), (fr = 0), (si = null), t))
      throw Error(l(300));
    e === null ||
      Ie ||
      ((e = e.dependencies), e !== null && _s(e) && (Ie = !0));
  }
  function yh(e, t, i, s) {
    xe = e;
    var u = 0;
    do {
      if ((ri && (si = null), (fr = 0), (ri = !1), 25 <= u))
        throw Error(l(301));
      if (((u += 1), (Qe = Le = null), e.updateQueue != null)) {
        var f = e.updateQueue;
        (f.lastEffect = null),
          (f.events = null),
          (f.stores = null),
          f.memoCache != null && (f.memoCache.index = 0);
      }
      (M.H = AS), (f = t(i, s));
    } while (ri);
    return f;
  }
  function SS() {
    var e = M.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? dr(t) : t),
      (e = e.useState()[0]),
      (Le !== null ? Le.memoizedState : null) !== e && (xe.flags |= 1024),
      t
    );
  }
  function pu() {
    var e = Hs !== 0;
    return (Hs = 0), e;
  }
  function mu(e, t, i) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i);
  }
  function gu(e) {
    if (ks) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      ks = !1;
    }
    (Pn = 0), (Qe = Le = xe = null), (ri = !1), (fr = Hs = 0), (si = null);
  }
  function mt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Qe === null ? (xe.memoizedState = Qe = e) : (Qe = Qe.next = e), Qe;
  }
  function Ye() {
    if (Le === null) {
      var e = xe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Le.next;
    var t = Qe === null ? xe.memoizedState : Qe.next;
    if (t !== null) (Qe = t), (Le = e);
    else {
      if (e === null)
        throw xe.alternate === null ? Error(l(467)) : Error(l(310));
      (Le = e),
        (e = {
          memoizedState: Le.memoizedState,
          baseState: Le.baseState,
          baseQueue: Le.baseQueue,
          queue: Le.queue,
          next: null,
        }),
        Qe === null ? (xe.memoizedState = Qe = e) : (Qe = Qe.next = e);
    }
    return Qe;
  }
  function yu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function dr(e) {
    var t = fr;
    return (
      (fr += 1),
      si === null && (si = []),
      (e = ch(si, e, t)),
      (t = xe),
      (Qe === null ? t.memoizedState : Qe.next) === null &&
        ((t = t.alternate),
        (M.H = t === null || t.memoizedState === null ? Jh : Wh)),
      e
    );
  }
  function Bs(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return dr(e);
      if (e.$$typeof === j) return st(e);
    }
    throw Error(l(438, String(e)));
  }
  function vu(e) {
    var t = null,
      i = xe.updateQueue;
    if ((i !== null && (t = i.memoCache), t == null)) {
      var s = xe.alternate;
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
      i === null && ((i = yu()), (xe.updateQueue = i)),
      (i.memoCache = t),
      (i = t.data[t.index]),
      i === void 0)
    )
      for (i = t.data[t.index] = Array(e), s = 0; s < e; s++) i[s] = re;
    return t.index++, i;
  }
  function xn(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function qs(e) {
    var t = Ye();
    return bu(t, Le, e);
  }
  function bu(e, t, i) {
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
        A = null,
        L = t,
        Q = !1;
      do {
        var Z = L.lane & -536870913;
        if (Z !== L.lane ? (Ae & Z) === Z : (Pn & Z) === Z) {
          var U = L.revertLane;
          if (U === 0)
            A !== null &&
              (A = A.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: L.action,
                  hasEagerState: L.hasEagerState,
                  eagerState: L.eagerState,
                  next: null,
                }),
              Z === ni && (Q = !0);
          else if ((Pn & U) === U) {
            (L = L.next), U === ni && (Q = !0);
            continue;
          } else
            (Z = {
              lane: 0,
              revertLane: L.revertLane,
              action: L.action,
              hasEagerState: L.hasEagerState,
              eagerState: L.eagerState,
              next: null,
            }),
              A === null ? ((b = A = Z), (y = f)) : (A = A.next = Z),
              (xe.lanes |= U),
              (Xn |= U);
          (Z = L.action),
            Ea && i(f, Z),
            (f = L.hasEagerState ? L.eagerState : i(f, Z));
        } else
          (U = {
            lane: Z,
            revertLane: L.revertLane,
            action: L.action,
            hasEagerState: L.hasEagerState,
            eagerState: L.eagerState,
            next: null,
          }),
            A === null ? ((b = A = U), (y = f)) : (A = A.next = U),
            (xe.lanes |= Z),
            (Xn |= Z);
        L = L.next;
      } while (L !== null && L !== t);
      if (
        (A === null ? (y = f) : (A.next = b),
        !Ot(f, e.memoizedState) && ((Ie = !0), Q && ((i = ai), i !== null)))
      )
        throw i;
      (e.memoizedState = f),
        (e.baseState = y),
        (e.baseQueue = A),
        (s.lastRenderedState = f);
    }
    return u === null && (s.lanes = 0), [e.memoizedState, s.dispatch];
  }
  function Su(e) {
    var t = Ye(),
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
      Ot(f, t.memoizedState) || (Ie = !0),
        (t.memoizedState = f),
        t.baseQueue === null && (t.baseState = f),
        (i.lastRenderedState = f);
    }
    return [f, s];
  }
  function vh(e, t, i) {
    var s = xe,
      u = Ye(),
      f = De;
    if (f) {
      if (i === void 0) throw Error(l(407));
      i = i();
    } else i = t();
    var y = !Ot((Le || u).memoizedState, i);
    y && ((u.memoizedState = i), (Ie = !0)), (u = u.queue);
    var b = xh.bind(null, s, u, e);
    if (
      (hr(2048, 8, b, [e]),
      u.getSnapshot !== t || y || (Qe !== null && Qe.memoizedState.tag & 1))
    ) {
      if (
        ((s.flags |= 2048),
        li(9, Ps(), Sh.bind(null, s, u, i, t), null),
        ke === null)
      )
        throw Error(l(349));
      f || (Pn & 124) !== 0 || bh(s, t, i);
    }
    return i;
  }
  function bh(e, t, i) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: i }),
      (t = xe.updateQueue),
      t === null
        ? ((t = yu()), (xe.updateQueue = t), (t.stores = [e]))
        : ((i = t.stores), i === null ? (t.stores = [e]) : i.push(e));
  }
  function Sh(e, t, i, s) {
    (t.value = i), (t.getSnapshot = s), wh(t) && Eh(e);
  }
  function xh(e, t, i) {
    return i(function () {
      wh(t) && Eh(e);
    });
  }
  function wh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var i = t();
      return !Ot(e, i);
    } catch {
      return !0;
    }
  }
  function Eh(e) {
    var t = Ja(e, 2);
    t !== null && Dt(t, e, 2);
  }
  function xu(e) {
    var t = mt();
    if (typeof e == 'function') {
      var i = e;
      if (((e = i()), Ea)) {
        zn(!0);
        try {
          i();
        } finally {
          zn(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: xn,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Oh(e, t, i, s) {
    return (e.baseState = i), bu(e, Le, typeof s == 'function' ? s : xn);
  }
  function xS(e, t, i, s, u) {
    if (Vs(e)) throw Error(l(485));
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
      M.T !== null ? i(!0) : (f.isTransition = !1),
        s(f),
        (i = t.pending),
        i === null
          ? ((f.next = t.pending = f), Rh(t, f))
          : ((f.next = i.next), (t.pending = i.next = f));
    }
  }
  function Rh(e, t) {
    var i = t.action,
      s = t.payload,
      u = e.state;
    if (t.isTransition) {
      var f = M.T,
        y = {};
      M.T = y;
      try {
        var b = i(u, s),
          A = M.S;
        A !== null && A(y, b), Ah(e, t, b);
      } catch (L) {
        wu(e, t, L);
      } finally {
        M.T = f;
      }
    } else
      try {
        (f = i(u, s)), Ah(e, t, f);
      } catch (L) {
        wu(e, t, L);
      }
  }
  function Ah(e, t, i) {
    i !== null && typeof i == 'object' && typeof i.then == 'function'
      ? i.then(
          function (s) {
            Th(e, t, s);
          },
          function (s) {
            return wu(e, t, s);
          },
        )
      : Th(e, t, i);
  }
  function Th(e, t, i) {
    (t.status = 'fulfilled'),
      (t.value = i),
      Ch(t),
      (e.state = i),
      (t = e.pending),
      t !== null &&
        ((i = t.next),
        i === t ? (e.pending = null) : ((i = i.next), (t.next = i), Rh(e, i)));
  }
  function wu(e, t, i) {
    var s = e.pending;
    if (((e.pending = null), s !== null)) {
      s = s.next;
      do (t.status = 'rejected'), (t.reason = i), Ch(t), (t = t.next);
      while (t !== s);
    }
    e.action = null;
  }
  function Ch(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Mh(e, t) {
    return t;
  }
  function Dh(e, t) {
    if (De) {
      var i = ke.formState;
      if (i !== null) {
        e: {
          var s = xe;
          if (De) {
            if (qe) {
              t: {
                for (var u = qe, f = tn; u.nodeType !== 8; ) {
                  if (!f) {
                    u = null;
                    break t;
                  }
                  if (((u = Kt(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                (f = u.data), (u = f === 'F!' || f === 'F' ? u : null);
              }
              if (u) {
                (qe = Kt(u.nextSibling)), (s = u.data === 'F!');
                break e;
              }
            }
            ba(s);
          }
          s = !1;
        }
        s && (t = i[0]);
      }
    }
    return (
      (i = mt()),
      (i.memoizedState = i.baseState = t),
      (s = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Mh,
        lastRenderedState: t,
      }),
      (i.queue = s),
      (i = Zh.bind(null, xe, s)),
      (s.dispatch = i),
      (s = xu(!1)),
      (f = Tu.bind(null, xe, !1, s.queue)),
      (s = mt()),
      (u = { state: t, dispatch: null, action: e, pending: null }),
      (s.queue = u),
      (i = xS.bind(null, xe, u, f, i)),
      (u.dispatch = i),
      (s.memoizedState = e),
      [t, i, !1]
    );
  }
  function _h(e) {
    var t = Ye();
    return Nh(t, Le, e);
  }
  function Nh(e, t, i) {
    if (
      ((t = bu(e, t, Mh)[0]),
      (e = qs(xn)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var s = dr(t);
      } catch (y) {
        throw y === sr ? zs : y;
      }
    else s = t;
    t = Ye();
    var u = t.queue,
      f = u.dispatch;
    return (
      i !== t.memoizedState &&
        ((xe.flags |= 2048), li(9, Ps(), wS.bind(null, u, i), null)),
      [s, f, e]
    );
  }
  function wS(e, t) {
    e.action = t;
  }
  function Lh(e) {
    var t = Ye(),
      i = Le;
    if (i !== null) return Nh(t, i, e);
    Ye(), (t = t.memoizedState), (i = Ye());
    var s = i.queue.dispatch;
    return (i.memoizedState = e), [t, s, !1];
  }
  function li(e, t, i, s) {
    return (
      (e = { tag: e, create: i, deps: s, inst: t, next: null }),
      (t = xe.updateQueue),
      t === null && ((t = yu()), (xe.updateQueue = t)),
      (i = t.lastEffect),
      i === null
        ? (t.lastEffect = e.next = e)
        : ((s = i.next), (i.next = e), (e.next = s), (t.lastEffect = e)),
      e
    );
  }
  function Ps() {
    return { destroy: void 0, resource: void 0 };
  }
  function zh() {
    return Ye().memoizedState;
  }
  function Gs(e, t, i, s) {
    var u = mt();
    (s = s === void 0 ? null : s),
      (xe.flags |= e),
      (u.memoizedState = li(1 | t, Ps(), i, s));
  }
  function hr(e, t, i, s) {
    var u = Ye();
    s = s === void 0 ? null : s;
    var f = u.memoizedState.inst;
    Le !== null && s !== null && du(s, Le.memoizedState.deps)
      ? (u.memoizedState = li(t, f, i, s))
      : ((xe.flags |= e), (u.memoizedState = li(1 | t, f, i, s)));
  }
  function Uh(e, t) {
    Gs(8390656, 8, e, t);
  }
  function jh(e, t) {
    hr(2048, 8, e, t);
  }
  function kh(e, t) {
    return hr(4, 2, e, t);
  }
  function Hh(e, t) {
    return hr(4, 4, e, t);
  }
  function Bh(e, t) {
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
  function qh(e, t, i) {
    (i = i != null ? i.concat([e]) : null), hr(4, 4, Bh.bind(null, t, e), i);
  }
  function Eu() {}
  function Ph(e, t) {
    var i = Ye();
    t = t === void 0 ? null : t;
    var s = i.memoizedState;
    return t !== null && du(t, s[1]) ? s[0] : ((i.memoizedState = [e, t]), e);
  }
  function Gh(e, t) {
    var i = Ye();
    t = t === void 0 ? null : t;
    var s = i.memoizedState;
    if (t !== null && du(t, s[1])) return s[0];
    if (((s = e()), Ea)) {
      zn(!0);
      try {
        e();
      } finally {
        zn(!1);
      }
    }
    return (i.memoizedState = [s, t]), s;
  }
  function Ou(e, t, i) {
    return i === void 0 || (Pn & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = i), (e = Qp()), (xe.lanes |= e), (Xn |= e), i);
  }
  function Vh(e, t, i, s) {
    return Ot(i, t)
      ? i
      : ii.current !== null
        ? ((e = Ou(e, i, s)), Ot(e, t) || (Ie = !0), e)
        : (Pn & 42) === 0
          ? ((Ie = !0), (e.memoizedState = i))
          : ((e = Qp()), (xe.lanes |= e), (Xn |= e), t);
  }
  function Fh(e, t, i, s, u) {
    var f = X.p;
    X.p = f !== 0 && 8 > f ? f : 8;
    var y = M.T,
      b = {};
    (M.T = b), Tu(e, !1, t, i);
    try {
      var A = u(),
        L = M.S;
      if (
        (L !== null && L(b, A),
        A !== null && typeof A == 'object' && typeof A.then == 'function')
      ) {
        var Q = vS(A, s);
        pr(e, t, Q, Mt(e));
      } else pr(e, t, s, Mt(e));
    } catch (Z) {
      pr(e, t, { then: function () {}, status: 'rejected', reason: Z }, Mt());
    } finally {
      (X.p = f), (M.T = y);
    }
  }
  function ES() {}
  function Ru(e, t, i, s) {
    if (e.tag !== 5) throw Error(l(476));
    var u = Qh(e).queue;
    Fh(
      e,
      u,
      t,
      z,
      i === null
        ? ES
        : function () {
            return Yh(e), i(s);
          },
    );
  }
  function Qh(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: z,
      baseState: z,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: xn,
        lastRenderedState: z,
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
          lastRenderedReducer: xn,
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
  function Yh(e) {
    var t = Qh(e).next.queue;
    pr(e, t, {}, Mt());
  }
  function Au() {
    return st(Nr);
  }
  function Kh() {
    return Ye().memoizedState;
  }
  function Xh() {
    return Ye().memoizedState;
  }
  function OS(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var i = Mt();
          e = Bn(i);
          var s = qn(t, e, i);
          s !== null && (Dt(s, t, i), or(s, t, i)),
            (t = { cache: nu() }),
            (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function RS(e, t, i) {
    var s = Mt();
    (i = {
      lane: s,
      revertLane: 0,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Vs(e)
        ? $h(t, i)
        : ((i = Yo(e, t, i, s)), i !== null && (Dt(i, e, s), Ih(i, t, s)));
  }
  function Zh(e, t, i) {
    var s = Mt();
    pr(e, t, i, s);
  }
  function pr(e, t, i, s) {
    var u = {
      lane: s,
      revertLane: 0,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Vs(e)) $h(t, u);
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
          if (((u.hasEagerState = !0), (u.eagerState = b), Ot(b, y)))
            return As(e, t, u, 0), ke === null && Rs(), !1;
        } catch {
        } finally {
        }
      if (((i = Yo(e, t, u, s)), i !== null))
        return Dt(i, e, s), Ih(i, t, s), !0;
    }
    return !1;
  }
  function Tu(e, t, i, s) {
    if (
      ((s = {
        lane: 2,
        revertLane: rc(),
        action: s,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Vs(e))
    ) {
      if (t) throw Error(l(479));
    } else (t = Yo(e, i, s, 2)), t !== null && Dt(t, e, 2);
  }
  function Vs(e) {
    var t = e.alternate;
    return e === xe || (t !== null && t === xe);
  }
  function $h(e, t) {
    ri = ks = !0;
    var i = e.pending;
    i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (e.pending = t);
  }
  function Ih(e, t, i) {
    if ((i & 4194048) !== 0) {
      var s = t.lanes;
      (s &= e.pendingLanes), (i |= s), (t.lanes = i), rd(e, i);
    }
  }
  var Fs = {
      readContext: st,
      use: Bs,
      useCallback: Ge,
      useContext: Ge,
      useEffect: Ge,
      useImperativeHandle: Ge,
      useLayoutEffect: Ge,
      useInsertionEffect: Ge,
      useMemo: Ge,
      useReducer: Ge,
      useRef: Ge,
      useState: Ge,
      useDebugValue: Ge,
      useDeferredValue: Ge,
      useTransition: Ge,
      useSyncExternalStore: Ge,
      useId: Ge,
      useHostTransitionStatus: Ge,
      useFormState: Ge,
      useActionState: Ge,
      useOptimistic: Ge,
      useMemoCache: Ge,
      useCacheRefresh: Ge,
    },
    Jh = {
      readContext: st,
      use: Bs,
      useCallback: function (e, t) {
        return (mt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: st,
      useEffect: Uh,
      useImperativeHandle: function (e, t, i) {
        (i = i != null ? i.concat([e]) : null),
          Gs(4194308, 4, Bh.bind(null, t, e), i);
      },
      useLayoutEffect: function (e, t) {
        return Gs(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Gs(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var i = mt();
        t = t === void 0 ? null : t;
        var s = e();
        if (Ea) {
          zn(!0);
          try {
            e();
          } finally {
            zn(!1);
          }
        }
        return (i.memoizedState = [s, t]), s;
      },
      useReducer: function (e, t, i) {
        var s = mt();
        if (i !== void 0) {
          var u = i(t);
          if (Ea) {
            zn(!0);
            try {
              i(t);
            } finally {
              zn(!1);
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
          (e = e.dispatch = RS.bind(null, xe, e)),
          [s.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = mt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: function (e) {
        e = xu(e);
        var t = e.queue,
          i = Zh.bind(null, xe, t);
        return (t.dispatch = i), [e.memoizedState, i];
      },
      useDebugValue: Eu,
      useDeferredValue: function (e, t) {
        var i = mt();
        return Ou(i, e, t);
      },
      useTransition: function () {
        var e = xu(!1);
        return (
          (e = Fh.bind(null, xe, e.queue, !0, !1)),
          (mt().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, i) {
        var s = xe,
          u = mt();
        if (De) {
          if (i === void 0) throw Error(l(407));
          i = i();
        } else {
          if (((i = t()), ke === null)) throw Error(l(349));
          (Ae & 124) !== 0 || bh(s, t, i);
        }
        u.memoizedState = i;
        var f = { value: i, getSnapshot: t };
        return (
          (u.queue = f),
          Uh(xh.bind(null, s, f, e), [e]),
          (s.flags |= 2048),
          li(9, Ps(), Sh.bind(null, s, f, i, t), null),
          i
        );
      },
      useId: function () {
        var e = mt(),
          t = ke.identifierPrefix;
        if (De) {
          var i = vn,
            s = yn;
          (i = (s & ~(1 << (32 - Et(s) - 1))).toString(32) + i),
            (t = '«' + t + 'R' + i),
            (i = Hs++),
            0 < i && (t += 'H' + i.toString(32)),
            (t += '»');
        } else (i = bS++), (t = '«' + t + 'r' + i.toString(32) + '»');
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Au,
      useFormState: Dh,
      useActionState: Dh,
      useOptimistic: function (e) {
        var t = mt();
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
          (t = Tu.bind(null, xe, !0, i)),
          (i.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: vu,
      useCacheRefresh: function () {
        return (mt().memoizedState = OS.bind(null, xe));
      },
    },
    Wh = {
      readContext: st,
      use: Bs,
      useCallback: Ph,
      useContext: st,
      useEffect: jh,
      useImperativeHandle: qh,
      useInsertionEffect: kh,
      useLayoutEffect: Hh,
      useMemo: Gh,
      useReducer: qs,
      useRef: zh,
      useState: function () {
        return qs(xn);
      },
      useDebugValue: Eu,
      useDeferredValue: function (e, t) {
        var i = Ye();
        return Vh(i, Le.memoizedState, e, t);
      },
      useTransition: function () {
        var e = qs(xn)[0],
          t = Ye().memoizedState;
        return [typeof e == 'boolean' ? e : dr(e), t];
      },
      useSyncExternalStore: vh,
      useId: Kh,
      useHostTransitionStatus: Au,
      useFormState: _h,
      useActionState: _h,
      useOptimistic: function (e, t) {
        var i = Ye();
        return Oh(i, Le, e, t);
      },
      useMemoCache: vu,
      useCacheRefresh: Xh,
    },
    AS = {
      readContext: st,
      use: Bs,
      useCallback: Ph,
      useContext: st,
      useEffect: jh,
      useImperativeHandle: qh,
      useInsertionEffect: kh,
      useLayoutEffect: Hh,
      useMemo: Gh,
      useReducer: Su,
      useRef: zh,
      useState: function () {
        return Su(xn);
      },
      useDebugValue: Eu,
      useDeferredValue: function (e, t) {
        var i = Ye();
        return Le === null ? Ou(i, e, t) : Vh(i, Le.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Su(xn)[0],
          t = Ye().memoizedState;
        return [typeof e == 'boolean' ? e : dr(e), t];
      },
      useSyncExternalStore: vh,
      useId: Kh,
      useHostTransitionStatus: Au,
      useFormState: Lh,
      useActionState: Lh,
      useOptimistic: function (e, t) {
        var i = Ye();
        return Le !== null
          ? Oh(i, Le, e, t)
          : ((i.baseState = e), [e, i.queue.dispatch]);
      },
      useMemoCache: vu,
      useCacheRefresh: Xh,
    },
    oi = null,
    mr = 0;
  function Qs(e) {
    var t = mr;
    return (mr += 1), oi === null && (oi = []), ch(oi, e, t);
  }
  function gr(e, t) {
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
  function ep(e) {
    var t = e._init;
    return t(e._payload);
  }
  function tp(e) {
    function t(D, C) {
      if (e) {
        var N = D.deletions;
        N === null ? ((D.deletions = [C]), (D.flags |= 16)) : N.push(C);
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
      return (D = gn(D, C)), (D.index = 0), (D.sibling = null), D;
    }
    function f(D, C, N) {
      return (
        (D.index = N),
        e
          ? ((N = D.alternate),
            N !== null
              ? ((N = N.index), N < C ? ((D.flags |= 67108866), C) : N)
              : ((D.flags |= 67108866), C))
          : ((D.flags |= 1048576), C)
      );
    }
    function y(D) {
      return e && D.alternate === null && (D.flags |= 67108866), D;
    }
    function b(D, C, N, K) {
      return C === null || C.tag !== 6
        ? ((C = Xo(N, D.mode, K)), (C.return = D), C)
        : ((C = u(C, N)), (C.return = D), C);
    }
    function A(D, C, N, K) {
      var ne = N.type;
      return ne === S
        ? Q(D, C, N.props.children, K, N.key)
        : C !== null &&
            (C.elementType === ne ||
              (typeof ne == 'object' &&
                ne !== null &&
                ne.$$typeof === Y &&
                ep(ne) === C.type))
          ? ((C = u(C, N.props)), gr(C, N), (C.return = D), C)
          : ((C = Cs(N.type, N.key, N.props, null, D.mode, K)),
            gr(C, N),
            (C.return = D),
            C);
    }
    function L(D, C, N, K) {
      return C === null ||
        C.tag !== 4 ||
        C.stateNode.containerInfo !== N.containerInfo ||
        C.stateNode.implementation !== N.implementation
        ? ((C = Zo(N, D.mode, K)), (C.return = D), C)
        : ((C = u(C, N.children || [])), (C.return = D), C);
    }
    function Q(D, C, N, K, ne) {
      return C === null || C.tag !== 7
        ? ((C = ma(N, D.mode, K, ne)), (C.return = D), C)
        : ((C = u(C, N)), (C.return = D), C);
    }
    function Z(D, C, N) {
      if (
        (typeof C == 'string' && C !== '') ||
        typeof C == 'number' ||
        typeof C == 'bigint'
      )
        return (C = Xo('' + C, D.mode, N)), (C.return = D), C;
      if (typeof C == 'object' && C !== null) {
        switch (C.$$typeof) {
          case x:
            return (
              (N = Cs(C.type, C.key, C.props, null, D.mode, N)),
              gr(N, C),
              (N.return = D),
              N
            );
          case O:
            return (C = Zo(C, D.mode, N)), (C.return = D), C;
          case Y:
            var K = C._init;
            return (C = K(C._payload)), Z(D, C, N);
        }
        if (me(C) || de(C))
          return (C = ma(C, D.mode, N, null)), (C.return = D), C;
        if (typeof C.then == 'function') return Z(D, Qs(C), N);
        if (C.$$typeof === j) return Z(D, Ns(D, C), N);
        Ys(D, C);
      }
      return null;
    }
    function U(D, C, N, K) {
      var ne = C !== null ? C.key : null;
      if (
        (typeof N == 'string' && N !== '') ||
        typeof N == 'number' ||
        typeof N == 'bigint'
      )
        return ne !== null ? null : b(D, C, '' + N, K);
      if (typeof N == 'object' && N !== null) {
        switch (N.$$typeof) {
          case x:
            return N.key === ne ? A(D, C, N, K) : null;
          case O:
            return N.key === ne ? L(D, C, N, K) : null;
          case Y:
            return (ne = N._init), (N = ne(N._payload)), U(D, C, N, K);
        }
        if (me(N) || de(N)) return ne !== null ? null : Q(D, C, N, K, null);
        if (typeof N.then == 'function') return U(D, C, Qs(N), K);
        if (N.$$typeof === j) return U(D, C, Ns(D, N), K);
        Ys(D, N);
      }
      return null;
    }
    function H(D, C, N, K, ne) {
      if (
        (typeof K == 'string' && K !== '') ||
        typeof K == 'number' ||
        typeof K == 'bigint'
      )
        return (D = D.get(N) || null), b(C, D, '' + K, ne);
      if (typeof K == 'object' && K !== null) {
        switch (K.$$typeof) {
          case x:
            return (
              (D = D.get(K.key === null ? N : K.key) || null), A(C, D, K, ne)
            );
          case O:
            return (
              (D = D.get(K.key === null ? N : K.key) || null), L(C, D, K, ne)
            );
          case Y:
            var Ee = K._init;
            return (K = Ee(K._payload)), H(D, C, N, K, ne);
        }
        if (me(K) || de(K)) return (D = D.get(N) || null), Q(C, D, K, ne, null);
        if (typeof K.then == 'function') return H(D, C, N, Qs(K), ne);
        if (K.$$typeof === j) return H(D, C, N, Ns(C, K), ne);
        Ys(C, K);
      }
      return null;
    }
    function pe(D, C, N, K) {
      for (
        var ne = null, Ee = null, le = C, he = (C = 0), We = null;
        le !== null && he < N.length;
        he++
      ) {
        le.index > he ? ((We = le), (le = null)) : (We = le.sibling);
        var Me = U(D, le, N[he], K);
        if (Me === null) {
          le === null && (le = We);
          break;
        }
        e && le && Me.alternate === null && t(D, le),
          (C = f(Me, C, he)),
          Ee === null ? (ne = Me) : (Ee.sibling = Me),
          (Ee = Me),
          (le = We);
      }
      if (he === N.length) return i(D, le), De && ya(D, he), ne;
      if (le === null) {
        for (; he < N.length; he++)
          (le = Z(D, N[he], K)),
            le !== null &&
              ((C = f(le, C, he)),
              Ee === null ? (ne = le) : (Ee.sibling = le),
              (Ee = le));
        return De && ya(D, he), ne;
      }
      for (le = s(le); he < N.length; he++)
        (We = H(le, D, he, N[he], K)),
          We !== null &&
            (e &&
              We.alternate !== null &&
              le.delete(We.key === null ? he : We.key),
            (C = f(We, C, he)),
            Ee === null ? (ne = We) : (Ee.sibling = We),
            (Ee = We));
      return (
        e &&
          le.forEach(function (aa) {
            return t(D, aa);
          }),
        De && ya(D, he),
        ne
      );
    }
    function fe(D, C, N, K) {
      if (N == null) throw Error(l(151));
      for (
        var ne = null,
          Ee = null,
          le = C,
          he = (C = 0),
          We = null,
          Me = N.next();
        le !== null && !Me.done;
        he++, Me = N.next()
      ) {
        le.index > he ? ((We = le), (le = null)) : (We = le.sibling);
        var aa = U(D, le, Me.value, K);
        if (aa === null) {
          le === null && (le = We);
          break;
        }
        e && le && aa.alternate === null && t(D, le),
          (C = f(aa, C, he)),
          Ee === null ? (ne = aa) : (Ee.sibling = aa),
          (Ee = aa),
          (le = We);
      }
      if (Me.done) return i(D, le), De && ya(D, he), ne;
      if (le === null) {
        for (; !Me.done; he++, Me = N.next())
          (Me = Z(D, Me.value, K)),
            Me !== null &&
              ((C = f(Me, C, he)),
              Ee === null ? (ne = Me) : (Ee.sibling = Me),
              (Ee = Me));
        return De && ya(D, he), ne;
      }
      for (le = s(le); !Me.done; he++, Me = N.next())
        (Me = H(le, D, he, Me.value, K)),
          Me !== null &&
            (e &&
              Me.alternate !== null &&
              le.delete(Me.key === null ? he : Me.key),
            (C = f(Me, C, he)),
            Ee === null ? (ne = Me) : (Ee.sibling = Me),
            (Ee = Me));
      return (
        e &&
          le.forEach(function (Tx) {
            return t(D, Tx);
          }),
        De && ya(D, he),
        ne
      );
    }
    function Ue(D, C, N, K) {
      if (
        (typeof N == 'object' &&
          N !== null &&
          N.type === S &&
          N.key === null &&
          (N = N.props.children),
        typeof N == 'object' && N !== null)
      ) {
        switch (N.$$typeof) {
          case x:
            e: {
              for (var ne = N.key; C !== null; ) {
                if (C.key === ne) {
                  if (((ne = N.type), ne === S)) {
                    if (C.tag === 7) {
                      i(D, C.sibling),
                        (K = u(C, N.props.children)),
                        (K.return = D),
                        (D = K);
                      break e;
                    }
                  } else if (
                    C.elementType === ne ||
                    (typeof ne == 'object' &&
                      ne !== null &&
                      ne.$$typeof === Y &&
                      ep(ne) === C.type)
                  ) {
                    i(D, C.sibling),
                      (K = u(C, N.props)),
                      gr(K, N),
                      (K.return = D),
                      (D = K);
                    break e;
                  }
                  i(D, C);
                  break;
                } else t(D, C);
                C = C.sibling;
              }
              N.type === S
                ? ((K = ma(N.props.children, D.mode, K, N.key)),
                  (K.return = D),
                  (D = K))
                : ((K = Cs(N.type, N.key, N.props, null, D.mode, K)),
                  gr(K, N),
                  (K.return = D),
                  (D = K));
            }
            return y(D);
          case O:
            e: {
              for (ne = N.key; C !== null; ) {
                if (C.key === ne)
                  if (
                    C.tag === 4 &&
                    C.stateNode.containerInfo === N.containerInfo &&
                    C.stateNode.implementation === N.implementation
                  ) {
                    i(D, C.sibling),
                      (K = u(C, N.children || [])),
                      (K.return = D),
                      (D = K);
                    break e;
                  } else {
                    i(D, C);
                    break;
                  }
                else t(D, C);
                C = C.sibling;
              }
              (K = Zo(N, D.mode, K)), (K.return = D), (D = K);
            }
            return y(D);
          case Y:
            return (ne = N._init), (N = ne(N._payload)), Ue(D, C, N, K);
        }
        if (me(N)) return pe(D, C, N, K);
        if (de(N)) {
          if (((ne = de(N)), typeof ne != 'function')) throw Error(l(150));
          return (N = ne.call(N)), fe(D, C, N, K);
        }
        if (typeof N.then == 'function') return Ue(D, C, Qs(N), K);
        if (N.$$typeof === j) return Ue(D, C, Ns(D, N), K);
        Ys(D, N);
      }
      return (typeof N == 'string' && N !== '') ||
        typeof N == 'number' ||
        typeof N == 'bigint'
        ? ((N = '' + N),
          C !== null && C.tag === 6
            ? (i(D, C.sibling), (K = u(C, N)), (K.return = D), (D = K))
            : (i(D, C), (K = Xo(N, D.mode, K)), (K.return = D), (D = K)),
          y(D))
        : i(D, C);
    }
    return function (D, C, N, K) {
      try {
        mr = 0;
        var ne = Ue(D, C, N, K);
        return (oi = null), ne;
      } catch (le) {
        if (le === sr || le === zs) throw le;
        var Ee = Rt(29, le, null, D.mode);
        return (Ee.lanes = K), (Ee.return = D), Ee;
      } finally {
      }
    };
  }
  var ui = tp(!0),
    np = tp(!1),
    Bt = G(null),
    nn = null;
  function Gn(e) {
    var t = e.alternate;
    $(Xe, Xe.current & 1),
      $(Bt, e),
      nn === null &&
        (t === null || ii.current !== null || t.memoizedState !== null) &&
        (nn = e);
  }
  function ap(e) {
    if (e.tag === 22) {
      if (($(Xe, Xe.current), $(Bt, e), nn === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (nn = e);
      }
    } else Vn();
  }
  function Vn() {
    $(Xe, Xe.current), $(Bt, Bt.current);
  }
  function wn(e) {
    W(Bt), nn === e && (nn = null), W(Xe);
  }
  var Xe = G(0);
  function Ks(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var i = t.memoizedState;
        if (
          i !== null &&
          ((i = i.dehydrated), i === null || i.data === '$?' || yc(i))
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
  function Cu(e, t, i, s) {
    (t = e.memoizedState),
      (i = i(s, t)),
      (i = i == null ? t : g({}, t, i)),
      (e.memoizedState = i),
      e.lanes === 0 && (e.updateQueue.baseState = i);
  }
  var Mu = {
    enqueueSetState: function (e, t, i) {
      e = e._reactInternals;
      var s = Mt(),
        u = Bn(s);
      (u.payload = t),
        i != null && (u.callback = i),
        (t = qn(e, u, s)),
        t !== null && (Dt(t, e, s), or(t, e, s));
    },
    enqueueReplaceState: function (e, t, i) {
      e = e._reactInternals;
      var s = Mt(),
        u = Bn(s);
      (u.tag = 1),
        (u.payload = t),
        i != null && (u.callback = i),
        (t = qn(e, u, s)),
        t !== null && (Dt(t, e, s), or(t, e, s));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var i = Mt(),
        s = Bn(i);
      (s.tag = 2),
        t != null && (s.callback = t),
        (t = qn(e, s, i)),
        t !== null && (Dt(t, e, i), or(t, e, i));
    },
  };
  function ip(e, t, i, s, u, f, y) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(s, f, y)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Ji(i, s) || !Ji(u, f)
          : !0
    );
  }
  function rp(e, t, i, s) {
    (e = t.state),
      typeof t.componentWillReceiveProps == 'function' &&
        t.componentWillReceiveProps(i, s),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(i, s),
      t.state !== e && Mu.enqueueReplaceState(t, t.state, null);
  }
  function Oa(e, t) {
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
  var Xs =
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
  function sp(e) {
    Xs(e);
  }
  function lp(e) {
    console.error(e);
  }
  function op(e) {
    Xs(e);
  }
  function Zs(e, t) {
    try {
      var i = e.onUncaughtError;
      i(t.value, { componentStack: t.stack });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function up(e, t, i) {
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
  function Du(e, t, i) {
    return (
      (i = Bn(i)),
      (i.tag = 3),
      (i.payload = { element: null }),
      (i.callback = function () {
        Zs(e, t);
      }),
      i
    );
  }
  function cp(e) {
    return (e = Bn(e)), (e.tag = 3), e;
  }
  function fp(e, t, i, s) {
    var u = i.type.getDerivedStateFromError;
    if (typeof u == 'function') {
      var f = s.value;
      (e.payload = function () {
        return u(f);
      }),
        (e.callback = function () {
          up(t, i, s);
        });
    }
    var y = i.stateNode;
    y !== null &&
      typeof y.componentDidCatch == 'function' &&
      (e.callback = function () {
        up(t, i, s),
          typeof u != 'function' &&
            (Zn === null ? (Zn = new Set([this])) : Zn.add(this));
        var b = s.stack;
        this.componentDidCatch(s.value, {
          componentStack: b !== null ? b : '',
        });
      });
  }
  function TS(e, t, i, s, u) {
    if (
      ((i.flags |= 32768),
      s !== null && typeof s == 'object' && typeof s.then == 'function')
    ) {
      if (
        ((t = i.alternate),
        t !== null && ar(t, i, u, !0),
        (i = Bt.current),
        i !== null)
      ) {
        switch (i.tag) {
          case 13:
            return (
              nn === null ? ec() : i.alternate === null && Pe === 0 && (Pe = 3),
              (i.flags &= -257),
              (i.flags |= 65536),
              (i.lanes = u),
              s === ru
                ? (i.flags |= 16384)
                : ((t = i.updateQueue),
                  t === null ? (i.updateQueue = new Set([s])) : t.add(s),
                  nc(e, s, u)),
              !1
            );
          case 22:
            return (
              (i.flags |= 65536),
              s === ru
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
                  nc(e, s, u)),
              !1
            );
        }
        throw Error(l(435, i.tag));
      }
      return nc(e, s, u), ec(), !1;
    }
    if (De)
      return (
        (t = Bt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = u),
            s !== Jo && ((e = Error(l(422), { cause: s })), nr(Ut(e, i))))
          : (s !== Jo && ((t = Error(l(423), { cause: s })), nr(Ut(t, i))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (u &= -u),
            (e.lanes |= u),
            (s = Ut(s, i)),
            (u = Du(e.stateNode, s, u)),
            ou(e, u),
            Pe !== 4 && (Pe = 2)),
        !1
      );
    var f = Error(l(520), { cause: s });
    if (
      ((f = Ut(f, i)),
      Er === null ? (Er = [f]) : Er.push(f),
      Pe !== 4 && (Pe = 2),
      t === null)
    )
      return !0;
    (s = Ut(s, i)), (i = t);
    do {
      switch (i.tag) {
        case 3:
          return (
            (i.flags |= 65536),
            (e = u & -u),
            (i.lanes |= e),
            (e = Du(i.stateNode, s, e)),
            ou(i, e),
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
                  (Zn === null || !Zn.has(f)))))
          )
            return (
              (i.flags |= 65536),
              (u &= -u),
              (i.lanes |= u),
              (u = cp(u)),
              fp(u, e, i, s),
              ou(i, u),
              !1
            );
      }
      i = i.return;
    } while (i !== null);
    return !1;
  }
  var dp = Error(l(461)),
    Ie = !1;
  function et(e, t, i, s) {
    t.child = e === null ? np(t, null, i, s) : ui(t, e.child, i, s);
  }
  function hp(e, t, i, s, u) {
    i = i.render;
    var f = t.ref;
    if ('ref' in s) {
      var y = {};
      for (var b in s) b !== 'ref' && (y[b] = s[b]);
    } else y = s;
    return (
      xa(t),
      (s = hu(e, t, i, y, f, u)),
      (b = pu()),
      e !== null && !Ie
        ? (mu(e, t, u), En(e, t, u))
        : (De && b && $o(t), (t.flags |= 1), et(e, t, s, u), t.child)
    );
  }
  function pp(e, t, i, s, u) {
    if (e === null) {
      var f = i.type;
      return typeof f == 'function' &&
        !Ko(f) &&
        f.defaultProps === void 0 &&
        i.compare === null
        ? ((t.tag = 15), (t.type = f), mp(e, t, f, s, u))
        : ((e = Cs(i.type, null, s, t, t.mode, u)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((f = e.child), !Hu(e, u))) {
      var y = f.memoizedProps;
      if (
        ((i = i.compare), (i = i !== null ? i : Ji), i(y, s) && e.ref === t.ref)
      )
        return En(e, t, u);
    }
    return (
      (t.flags |= 1),
      (e = gn(f, s)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function mp(e, t, i, s, u) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (Ji(f, s) && e.ref === t.ref)
        if (((Ie = !1), (t.pendingProps = s = f), Hu(e, u)))
          (e.flags & 131072) !== 0 && (Ie = !0);
        else return (t.lanes = e.lanes), En(e, t, u);
    }
    return _u(e, t, i, s, u);
  }
  function gp(e, t, i) {
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
        return yp(e, t, s, i);
      }
      if ((i & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Ls(t, f !== null ? f.cachePool : null),
          f !== null ? mh(t, f) : cu(),
          ap(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          yp(e, t, f !== null ? f.baseLanes | i : i, i)
        );
    } else
      f !== null
        ? (Ls(t, f.cachePool), mh(t, f), Vn(), (t.memoizedState = null))
        : (e !== null && Ls(t, null), cu(), Vn());
    return et(e, t, u, i), t.child;
  }
  function yp(e, t, i, s) {
    var u = iu();
    return (
      (u = u === null ? null : { parent: Ke._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: i, cachePool: u }),
      e !== null && Ls(t, null),
      cu(),
      ap(t),
      e !== null && ar(e, t, s, !0),
      null
    );
  }
  function $s(e, t) {
    var i = t.ref;
    if (i === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof i != 'function' && typeof i != 'object') throw Error(l(284));
      (e === null || e.ref !== i) && (t.flags |= 4194816);
    }
  }
  function _u(e, t, i, s, u) {
    return (
      xa(t),
      (i = hu(e, t, i, s, void 0, u)),
      (s = pu()),
      e !== null && !Ie
        ? (mu(e, t, u), En(e, t, u))
        : (De && s && $o(t), (t.flags |= 1), et(e, t, i, u), t.child)
    );
  }
  function vp(e, t, i, s, u, f) {
    return (
      xa(t),
      (t.updateQueue = null),
      (i = yh(t, s, i, u)),
      gh(e),
      (s = pu()),
      e !== null && !Ie
        ? (mu(e, t, f), En(e, t, f))
        : (De && s && $o(t), (t.flags |= 1), et(e, t, i, f), t.child)
    );
  }
  function bp(e, t, i, s, u) {
    if ((xa(t), t.stateNode === null)) {
      var f = Wa,
        y = i.contextType;
      typeof y == 'object' && y !== null && (f = st(y)),
        (f = new i(s, f)),
        (t.memoizedState =
          f.state !== null && f.state !== void 0 ? f.state : null),
        (f.updater = Mu),
        (t.stateNode = f),
        (f._reactInternals = t),
        (f = t.stateNode),
        (f.props = s),
        (f.state = t.memoizedState),
        (f.refs = {}),
        su(t),
        (y = i.contextType),
        (f.context = typeof y == 'object' && y !== null ? st(y) : Wa),
        (f.state = t.memoizedState),
        (y = i.getDerivedStateFromProps),
        typeof y == 'function' && (Cu(t, i, y, s), (f.state = t.memoizedState)),
        typeof i.getDerivedStateFromProps == 'function' ||
          typeof f.getSnapshotBeforeUpdate == 'function' ||
          (typeof f.UNSAFE_componentWillMount != 'function' &&
            typeof f.componentWillMount != 'function') ||
          ((y = f.state),
          typeof f.componentWillMount == 'function' && f.componentWillMount(),
          typeof f.UNSAFE_componentWillMount == 'function' &&
            f.UNSAFE_componentWillMount(),
          y !== f.state && Mu.enqueueReplaceState(f, f.state, null),
          cr(t, s, f, u),
          ur(),
          (f.state = t.memoizedState)),
        typeof f.componentDidMount == 'function' && (t.flags |= 4194308),
        (s = !0);
    } else if (e === null) {
      f = t.stateNode;
      var b = t.memoizedProps,
        A = Oa(i, b);
      f.props = A;
      var L = f.context,
        Q = i.contextType;
      (y = Wa), typeof Q == 'object' && Q !== null && (y = st(Q));
      var Z = i.getDerivedStateFromProps;
      (Q =
        typeof Z == 'function' ||
        typeof f.getSnapshotBeforeUpdate == 'function'),
        (b = t.pendingProps !== b),
        Q ||
          (typeof f.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof f.componentWillReceiveProps != 'function') ||
          ((b || L !== y) && rp(t, f, s, y)),
        (Hn = !1);
      var U = t.memoizedState;
      (f.state = U),
        cr(t, s, f, u),
        ur(),
        (L = t.memoizedState),
        b || U !== L || Hn
          ? (typeof Z == 'function' && (Cu(t, i, Z, s), (L = t.memoizedState)),
            (A = Hn || ip(t, i, A, s, U, L, y))
              ? (Q ||
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
                (t.memoizedState = L)),
            (f.props = s),
            (f.state = L),
            (f.context = y),
            (s = A))
          : (typeof f.componentDidMount == 'function' && (t.flags |= 4194308),
            (s = !1));
    } else {
      (f = t.stateNode),
        lu(e, t),
        (y = t.memoizedProps),
        (Q = Oa(i, y)),
        (f.props = Q),
        (Z = t.pendingProps),
        (U = f.context),
        (L = i.contextType),
        (A = Wa),
        typeof L == 'object' && L !== null && (A = st(L)),
        (b = i.getDerivedStateFromProps),
        (L =
          typeof b == 'function' ||
          typeof f.getSnapshotBeforeUpdate == 'function') ||
          (typeof f.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof f.componentWillReceiveProps != 'function') ||
          ((y !== Z || U !== A) && rp(t, f, s, A)),
        (Hn = !1),
        (U = t.memoizedState),
        (f.state = U),
        cr(t, s, f, u),
        ur();
      var H = t.memoizedState;
      y !== Z ||
      U !== H ||
      Hn ||
      (e !== null && e.dependencies !== null && _s(e.dependencies))
        ? (typeof b == 'function' && (Cu(t, i, b, s), (H = t.memoizedState)),
          (Q =
            Hn ||
            ip(t, i, Q, s, U, H, A) ||
            (e !== null && e.dependencies !== null && _s(e.dependencies)))
            ? (L ||
                (typeof f.UNSAFE_componentWillUpdate != 'function' &&
                  typeof f.componentWillUpdate != 'function') ||
                (typeof f.componentWillUpdate == 'function' &&
                  f.componentWillUpdate(s, H, A),
                typeof f.UNSAFE_componentWillUpdate == 'function' &&
                  f.UNSAFE_componentWillUpdate(s, H, A)),
              typeof f.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate == 'function' &&
                (t.flags |= 1024))
            : (typeof f.componentDidUpdate != 'function' ||
                (y === e.memoizedProps && U === e.memoizedState) ||
                (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate != 'function' ||
                (y === e.memoizedProps && U === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = s),
              (t.memoizedState = H)),
          (f.props = s),
          (f.state = H),
          (f.context = A),
          (s = Q))
        : (typeof f.componentDidUpdate != 'function' ||
            (y === e.memoizedProps && U === e.memoizedState) ||
            (t.flags |= 4),
          typeof f.getSnapshotBeforeUpdate != 'function' ||
            (y === e.memoizedProps && U === e.memoizedState) ||
            (t.flags |= 1024),
          (s = !1));
    }
    return (
      (f = s),
      $s(e, t),
      (s = (t.flags & 128) !== 0),
      f || s
        ? ((f = t.stateNode),
          (i =
            s && typeof i.getDerivedStateFromError != 'function'
              ? null
              : f.render()),
          (t.flags |= 1),
          e !== null && s
            ? ((t.child = ui(t, e.child, null, u)),
              (t.child = ui(t, null, i, u)))
            : et(e, t, i, u),
          (t.memoizedState = f.state),
          (e = t.child))
        : (e = En(e, t, u)),
      e
    );
  }
  function Sp(e, t, i, s) {
    return tr(), (t.flags |= 256), et(e, t, i, s), t.child;
  }
  var Nu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Lu(e) {
    return { baseLanes: e, cachePool: lh() };
  }
  function zu(e, t, i) {
    return (e = e !== null ? e.childLanes & ~i : 0), t && (e |= qt), e;
  }
  function xp(e, t, i) {
    var s = t.pendingProps,
      u = !1,
      f = (t.flags & 128) !== 0,
      y;
    if (
      ((y = f) ||
        (y =
          e !== null && e.memoizedState === null ? !1 : (Xe.current & 2) !== 0),
      y && ((u = !0), (t.flags &= -129)),
      (y = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (De) {
        if ((u ? Gn(t) : Vn(), De)) {
          var b = qe,
            A;
          if ((A = b)) {
            e: {
              for (A = b, b = tn; A.nodeType !== 8; ) {
                if (!b) {
                  b = null;
                  break e;
                }
                if (((A = Kt(A.nextSibling)), A === null)) {
                  b = null;
                  break e;
                }
              }
              b = A;
            }
            b !== null
              ? ((t.memoizedState = {
                  dehydrated: b,
                  treeContext: ga !== null ? { id: yn, overflow: vn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (A = Rt(18, null, null, 0)),
                (A.stateNode = b),
                (A.return = t),
                (t.child = A),
                (ct = t),
                (qe = null),
                (A = !0))
              : (A = !1);
          }
          A || ba(t);
        }
        if (
          ((b = t.memoizedState),
          b !== null && ((b = b.dehydrated), b !== null))
        )
          return yc(b) ? (t.lanes = 32) : (t.lanes = 536870912), null;
        wn(t);
      }
      return (
        (b = s.children),
        (s = s.fallback),
        u
          ? (Vn(),
            (u = t.mode),
            (b = Is({ mode: 'hidden', children: b }, u)),
            (s = ma(s, u, i, null)),
            (b.return = t),
            (s.return = t),
            (b.sibling = s),
            (t.child = b),
            (u = t.child),
            (u.memoizedState = Lu(i)),
            (u.childLanes = zu(e, y, i)),
            (t.memoizedState = Nu),
            s)
          : (Gn(t), Uu(t, b))
      );
    }
    if (
      ((A = e.memoizedState), A !== null && ((b = A.dehydrated), b !== null))
    ) {
      if (f)
        t.flags & 256
          ? (Gn(t), (t.flags &= -257), (t = ju(e, t, i)))
          : t.memoizedState !== null
            ? (Vn(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (Vn(),
              (u = s.fallback),
              (b = t.mode),
              (s = Is({ mode: 'visible', children: s.children }, b)),
              (u = ma(u, b, i, null)),
              (u.flags |= 2),
              (s.return = t),
              (u.return = t),
              (s.sibling = u),
              (t.child = s),
              ui(t, e.child, null, i),
              (s = t.child),
              (s.memoizedState = Lu(i)),
              (s.childLanes = zu(e, y, i)),
              (t.memoizedState = Nu),
              (t = u));
      else if ((Gn(t), yc(b))) {
        if (((y = b.nextSibling && b.nextSibling.dataset), y)) var L = y.dgst;
        (y = L),
          (s = Error(l(419))),
          (s.stack = ''),
          (s.digest = y),
          nr({ value: s, source: null, stack: null }),
          (t = ju(e, t, i));
      } else if (
        (Ie || ar(e, t, i, !1), (y = (i & e.childLanes) !== 0), Ie || y)
      ) {
        if (
          ((y = ke),
          y !== null &&
            ((s = i & -i),
            (s = (s & 42) !== 0 ? 1 : vo(s)),
            (s = (s & (y.suspendedLanes | i)) !== 0 ? 0 : s),
            s !== 0 && s !== A.retryLane))
        )
          throw ((A.retryLane = s), Ja(e, s), Dt(y, e, s), dp);
        b.data === '$?' || ec(), (t = ju(e, t, i));
      } else
        b.data === '$?'
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = A.treeContext),
            (qe = Kt(b.nextSibling)),
            (ct = t),
            (De = !0),
            (va = null),
            (tn = !1),
            e !== null &&
              ((kt[Ht++] = yn),
              (kt[Ht++] = vn),
              (kt[Ht++] = ga),
              (yn = e.id),
              (vn = e.overflow),
              (ga = t)),
            (t = Uu(t, s.children)),
            (t.flags |= 4096));
      return t;
    }
    return u
      ? (Vn(),
        (u = s.fallback),
        (b = t.mode),
        (A = e.child),
        (L = A.sibling),
        (s = gn(A, { mode: 'hidden', children: s.children })),
        (s.subtreeFlags = A.subtreeFlags & 65011712),
        L !== null ? (u = gn(L, u)) : ((u = ma(u, b, i, null)), (u.flags |= 2)),
        (u.return = t),
        (s.return = t),
        (s.sibling = u),
        (t.child = s),
        (s = u),
        (u = t.child),
        (b = e.child.memoizedState),
        b === null
          ? (b = Lu(i))
          : ((A = b.cachePool),
            A !== null
              ? ((L = Ke._currentValue),
                (A = A.parent !== L ? { parent: L, pool: L } : A))
              : (A = lh()),
            (b = { baseLanes: b.baseLanes | i, cachePool: A })),
        (u.memoizedState = b),
        (u.childLanes = zu(e, y, i)),
        (t.memoizedState = Nu),
        s)
      : (Gn(t),
        (i = e.child),
        (e = i.sibling),
        (i = gn(i, { mode: 'visible', children: s.children })),
        (i.return = t),
        (i.sibling = null),
        e !== null &&
          ((y = t.deletions),
          y === null ? ((t.deletions = [e]), (t.flags |= 16)) : y.push(e)),
        (t.child = i),
        (t.memoizedState = null),
        i);
  }
  function Uu(e, t) {
    return (
      (t = Is({ mode: 'visible', children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Is(e, t) {
    return (
      (e = Rt(22, e, null, t)),
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
  function ju(e, t, i) {
    return (
      ui(t, e.child, null, i),
      (e = Uu(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function wp(e, t, i) {
    e.lanes |= t;
    var s = e.alternate;
    s !== null && (s.lanes |= t), eu(e.return, t, i);
  }
  function ku(e, t, i, s, u) {
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
  function Ep(e, t, i) {
    var s = t.pendingProps,
      u = s.revealOrder,
      f = s.tail;
    if ((et(e, t, s.children, i), (s = Xe.current), (s & 2) !== 0))
      (s = (s & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && wp(e, i, t);
          else if (e.tag === 19) wp(e, i, t);
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
    switch (($(Xe, s), u)) {
      case 'forwards':
        for (i = t.child, u = null; i !== null; )
          (e = i.alternate),
            e !== null && Ks(e) === null && (u = i),
            (i = i.sibling);
        (i = u),
          i === null
            ? ((u = t.child), (t.child = null))
            : ((u = i.sibling), (i.sibling = null)),
          ku(t, !1, u, i, f);
        break;
      case 'backwards':
        for (i = null, u = t.child, t.child = null; u !== null; ) {
          if (((e = u.alternate), e !== null && Ks(e) === null)) {
            t.child = u;
            break;
          }
          (e = u.sibling), (u.sibling = i), (i = u), (u = e);
        }
        ku(t, !0, i, null, f);
        break;
      case 'together':
        ku(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function En(e, t, i) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Xn |= t.lanes),
      (i & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((ar(e, t, i, !1), (i & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(l(153));
    if (t.child !== null) {
      for (
        e = t.child, i = gn(e, e.pendingProps), t.child = i, i.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (i = i.sibling = gn(e, e.pendingProps)),
          (i.return = t);
      i.sibling = null;
    }
    return t.child;
  }
  function Hu(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && _s(e)));
  }
  function CS(e, t, i) {
    switch (t.tag) {
      case 3:
        Ce(t, t.stateNode.containerInfo),
          kn(t, Ke, e.memoizedState.cache),
          tr();
        break;
      case 27:
      case 5:
        It(t);
        break;
      case 4:
        Ce(t, t.stateNode.containerInfo);
        break;
      case 10:
        kn(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var s = t.memoizedState;
        if (s !== null)
          return s.dehydrated !== null
            ? (Gn(t), (t.flags |= 128), null)
            : (i & t.child.childLanes) !== 0
              ? xp(e, t, i)
              : (Gn(t), (e = En(e, t, i)), e !== null ? e.sibling : null);
        Gn(t);
        break;
      case 19:
        var u = (e.flags & 128) !== 0;
        if (
          ((s = (i & t.childLanes) !== 0),
          s || (ar(e, t, i, !1), (s = (i & t.childLanes) !== 0)),
          u)
        ) {
          if (s) return Ep(e, t, i);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          $(Xe, Xe.current),
          s)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), gp(e, t, i);
      case 24:
        kn(t, Ke, e.memoizedState.cache);
    }
    return En(e, t, i);
  }
  function Op(e, t, i) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Ie = !0;
      else {
        if (!Hu(e, i) && (t.flags & 128) === 0) return (Ie = !1), CS(e, t, i);
        Ie = (e.flags & 131072) !== 0;
      }
    else (Ie = !1), De && (t.flags & 1048576) !== 0 && eh(t, Ds, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var s = t.elementType,
            u = s._init;
          if (((s = u(s._payload)), (t.type = s), typeof s == 'function'))
            Ko(s)
              ? ((e = Oa(s, e)), (t.tag = 1), (t = bp(null, t, s, e, i)))
              : ((t.tag = 0), (t = _u(null, t, s, e, i)));
          else {
            if (s != null) {
              if (((u = s.$$typeof), u === k)) {
                (t.tag = 11), (t = hp(null, t, s, e, i));
                break e;
              } else if (u === V) {
                (t.tag = 14), (t = pp(null, t, s, e, i));
                break e;
              }
            }
            throw ((t = se(s) || s), Error(l(306, t, '')));
          }
        }
        return t;
      case 0:
        return _u(e, t, t.type, t.pendingProps, i);
      case 1:
        return (s = t.type), (u = Oa(s, t.pendingProps)), bp(e, t, s, u, i);
      case 3:
        e: {
          if ((Ce(t, t.stateNode.containerInfo), e === null))
            throw Error(l(387));
          s = t.pendingProps;
          var f = t.memoizedState;
          (u = f.element), lu(e, t), cr(t, s, null, i);
          var y = t.memoizedState;
          if (
            ((s = y.cache),
            kn(t, Ke, s),
            s !== f.cache && tu(t, [Ke], i, !0),
            ur(),
            (s = y.element),
            f.isDehydrated)
          )
            if (
              ((f = { element: s, isDehydrated: !1, cache: y.cache }),
              (t.updateQueue.baseState = f),
              (t.memoizedState = f),
              t.flags & 256)
            ) {
              t = Sp(e, t, s, i);
              break e;
            } else if (s !== u) {
              (u = Ut(Error(l(424)), t)), nr(u), (t = Sp(e, t, s, i));
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
                qe = Kt(e.firstChild),
                  ct = t,
                  De = !0,
                  va = null,
                  tn = !0,
                  i = np(t, null, s, i),
                  t.child = i;
                i;

              )
                (i.flags = (i.flags & -3) | 4096), (i = i.sibling);
            }
          else {
            if ((tr(), s === u)) {
              t = En(e, t, i);
              break e;
            }
            et(e, t, s, i);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          $s(e, t),
          e === null
            ? (i = Cm(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = i)
              : De ||
                ((i = t.type),
                (e = t.pendingProps),
                (s = fl(oe.current).createElement(i)),
                (s[rt] = t),
                (s[ht] = e),
                nt(s, i, e),
                $e(s),
                (t.stateNode = s))
            : (t.memoizedState = Cm(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          It(t),
          e === null &&
            De &&
            ((s = t.stateNode = Rm(t.type, t.pendingProps, oe.current)),
            (ct = t),
            (tn = !0),
            (u = qe),
            Jn(t.type) ? ((vc = u), (qe = Kt(s.firstChild))) : (qe = u)),
          et(e, t, t.pendingProps.children, i),
          $s(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            De &&
            ((u = s = qe) &&
              ((s = nx(s, t.type, t.pendingProps, tn)),
              s !== null
                ? ((t.stateNode = s),
                  (ct = t),
                  (qe = Kt(s.firstChild)),
                  (tn = !1),
                  (u = !0))
                : (u = !1)),
            u || ba(t)),
          It(t),
          (u = t.type),
          (f = t.pendingProps),
          (y = e !== null ? e.memoizedProps : null),
          (s = f.children),
          pc(u, f) ? (s = null) : y !== null && pc(u, y) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((u = hu(e, t, SS, null, null, i)), (Nr._currentValue = u)),
          $s(e, t),
          et(e, t, s, i),
          t.child
        );
      case 6:
        return (
          e === null &&
            De &&
            ((e = i = qe) &&
              ((i = ax(i, t.pendingProps, tn)),
              i !== null
                ? ((t.stateNode = i), (ct = t), (qe = null), (e = !0))
                : (e = !1)),
            e || ba(t)),
          null
        );
      case 13:
        return xp(e, t, i);
      case 4:
        return (
          Ce(t, t.stateNode.containerInfo),
          (s = t.pendingProps),
          e === null ? (t.child = ui(t, null, s, i)) : et(e, t, s, i),
          t.child
        );
      case 11:
        return hp(e, t, t.type, t.pendingProps, i);
      case 7:
        return et(e, t, t.pendingProps, i), t.child;
      case 8:
        return et(e, t, t.pendingProps.children, i), t.child;
      case 12:
        return et(e, t, t.pendingProps.children, i), t.child;
      case 10:
        return (
          (s = t.pendingProps),
          kn(t, t.type, s.value),
          et(e, t, s.children, i),
          t.child
        );
      case 9:
        return (
          (u = t.type._context),
          (s = t.pendingProps.children),
          xa(t),
          (u = st(u)),
          (s = s(u)),
          (t.flags |= 1),
          et(e, t, s, i),
          t.child
        );
      case 14:
        return pp(e, t, t.type, t.pendingProps, i);
      case 15:
        return mp(e, t, t.type, t.pendingProps, i);
      case 19:
        return Ep(e, t, i);
      case 31:
        return (
          (s = t.pendingProps),
          (i = t.mode),
          (s = { mode: s.mode, children: s.children }),
          e === null
            ? ((i = Is(s, i)),
              (i.ref = t.ref),
              (t.child = i),
              (i.return = t),
              (t = i))
            : ((i = gn(e.child, s)),
              (i.ref = t.ref),
              (t.child = i),
              (i.return = t),
              (t = i)),
          t
        );
      case 22:
        return gp(e, t, i);
      case 24:
        return (
          xa(t),
          (s = st(Ke)),
          e === null
            ? ((u = iu()),
              u === null &&
                ((u = ke),
                (f = nu()),
                (u.pooledCache = f),
                f.refCount++,
                f !== null && (u.pooledCacheLanes |= i),
                (u = f)),
              (t.memoizedState = { parent: s, cache: u }),
              su(t),
              kn(t, Ke, u))
            : ((e.lanes & i) !== 0 && (lu(e, t), cr(t, null, null, i), ur()),
              (u = e.memoizedState),
              (f = t.memoizedState),
              u.parent !== s
                ? ((u = { parent: s, cache: s }),
                  (t.memoizedState = u),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = u),
                  kn(t, Ke, s))
                : ((s = f.cache),
                  kn(t, Ke, s),
                  s !== u.cache && tu(t, [Ke], i, !0))),
          et(e, t, t.pendingProps.children, i),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(l(156, t.tag));
  }
  function On(e) {
    e.flags |= 4;
  }
  function Rp(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Lm(t))) {
      if (
        ((t = Bt.current),
        t !== null &&
          ((Ae & 4194048) === Ae
            ? nn !== null
            : ((Ae & 62914560) !== Ae && (Ae & 536870912) === 0) || t !== nn))
      )
        throw ((lr = ru), oh);
      e.flags |= 8192;
    }
  }
  function Js(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? ad() : 536870912), (e.lanes |= t), (hi |= t));
  }
  function yr(e, t) {
    if (!De)
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
  function Be(e) {
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
  function MS(e, t, i) {
    var s = t.pendingProps;
    switch ((Io(t), t.tag)) {
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
        return Be(t), null;
      case 1:
        return Be(t), null;
      case 3:
        return (
          (i = t.stateNode),
          (s = null),
          e !== null && (s = e.memoizedState.cache),
          t.memoizedState.cache !== s && (t.flags |= 2048),
          Sn(Ke),
          ut(),
          i.pendingContext &&
            ((i.context = i.pendingContext), (i.pendingContext = null)),
          (e === null || e.child === null) &&
            (er(t)
              ? On(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), ah())),
          Be(t),
          null
        );
      case 26:
        return (
          (i = t.memoizedState),
          e === null
            ? (On(t),
              i !== null ? (Be(t), Rp(t, i)) : (Be(t), (t.flags &= -16777217)))
            : i
              ? i !== e.memoizedState
                ? (On(t), Be(t), Rp(t, i))
                : (Be(t), (t.flags &= -16777217))
              : (e.memoizedProps !== s && On(t), Be(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        Jt(t), (i = oe.current);
        var u = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== s && On(t);
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(l(166));
            return Be(t), null;
          }
          (e = ee.current),
            er(t) ? th(t) : ((e = Rm(u, s, i)), (t.stateNode = e), On(t));
        }
        return Be(t), null;
      case 5:
        if ((Jt(t), (i = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== s && On(t);
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(l(166));
            return Be(t), null;
          }
          if (((e = ee.current), er(t))) th(t);
          else {
            switch (((u = fl(oe.current)), e)) {
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
            (e[rt] = t), (e[ht] = s);
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
            e: switch ((nt(e, i, s), i)) {
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
            e && On(t);
          }
        }
        return Be(t), (t.flags &= -16777217), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== s && On(t);
        else {
          if (typeof s != 'string' && t.stateNode === null) throw Error(l(166));
          if (((e = oe.current), er(t))) {
            if (
              ((e = t.stateNode),
              (i = t.memoizedProps),
              (s = null),
              (u = ct),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  s = u.memoizedProps;
              }
            (e[rt] = t),
              (e = !!(
                e.nodeValue === i ||
                (s !== null && s.suppressHydrationWarning === !0) ||
                vm(e.nodeValue, i)
              )),
              e || ba(t);
          } else (e = fl(e).createTextNode(s)), (e[rt] = t), (t.stateNode = e);
        }
        return Be(t), null;
      case 13:
        if (
          ((s = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((u = er(t)), s !== null && s.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(l(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(l(317));
              u[rt] = t;
            } else
              tr(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            Be(t), (u = !1);
          } else
            (u = ah()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = u),
              (u = !0);
          if (!u) return t.flags & 256 ? (wn(t), t) : (wn(t), null);
        }
        if ((wn(t), (t.flags & 128) !== 0)) return (t.lanes = i), t;
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
          Be(t),
          null
        );
      case 4:
        return ut(), e === null && uc(t.stateNode.containerInfo), Be(t), null;
      case 10:
        return Sn(t.type), Be(t), null;
      case 19:
        if ((W(Xe), (u = t.memoizedState), u === null)) return Be(t), null;
        if (((s = (t.flags & 128) !== 0), (f = u.rendering), f === null))
          if (s) yr(u, !1);
          else {
            if (Pe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((f = Ks(e)), f !== null)) {
                  for (
                    t.flags |= 128,
                      yr(u, !1),
                      e = f.updateQueue,
                      t.updateQueue = e,
                      Js(t, e),
                      t.subtreeFlags = 0,
                      e = i,
                      i = t.child;
                    i !== null;

                  )
                    Wd(i, e), (i = i.sibling);
                  return $(Xe, (Xe.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            u.tail !== null &&
              en() > tl &&
              ((t.flags |= 128), (s = !0), yr(u, !1), (t.lanes = 4194304));
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
                yr(u, !0),
                u.tail === null &&
                  u.tailMode === 'hidden' &&
                  !f.alternate &&
                  !De)
              )
                return Be(t), null;
            } else
              2 * en() - u.renderingStartTime > tl &&
                i !== 536870912 &&
                ((t.flags |= 128), (s = !0), yr(u, !1), (t.lanes = 4194304));
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
            (u.renderingStartTime = en()),
            (t.sibling = null),
            (e = Xe.current),
            $(Xe, s ? (e & 1) | 2 : e & 1),
            t)
          : (Be(t), null);
      case 22:
      case 23:
        return (
          wn(t),
          fu(),
          (s = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== s && (t.flags |= 8192)
            : s && (t.flags |= 8192),
          s
            ? (i & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Be(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Be(t),
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
          e !== null && W(wa),
          null
        );
      case 24:
        return (
          (i = null),
          e !== null && (i = e.memoizedState.cache),
          t.memoizedState.cache !== i && (t.flags |= 2048),
          Sn(Ke),
          Be(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function DS(e, t) {
    switch ((Io(t), t.tag)) {
      case 1:
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Sn(Ke),
          ut(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Jt(t), null;
      case 13:
        if (
          (wn(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(l(340));
          tr();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return W(Xe), null;
      case 4:
        return ut(), null;
      case 10:
        return Sn(t.type), null;
      case 22:
      case 23:
        return (
          wn(t),
          fu(),
          e !== null && W(wa),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return Sn(Ke), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ap(e, t) {
    switch ((Io(t), t.tag)) {
      case 3:
        Sn(Ke), ut();
        break;
      case 26:
      case 27:
      case 5:
        Jt(t);
        break;
      case 4:
        ut();
        break;
      case 13:
        wn(t);
        break;
      case 19:
        W(Xe);
        break;
      case 10:
        Sn(t.type);
        break;
      case 22:
      case 23:
        wn(t), fu(), e !== null && W(wa);
        break;
      case 24:
        Sn(Ke);
    }
  }
  function vr(e, t) {
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
      je(t, t.return, b);
    }
  }
  function Fn(e, t, i) {
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
              var A = i,
                L = b;
              try {
                L();
              } catch (Q) {
                je(u, A, Q);
              }
            }
          }
          s = s.next;
        } while (s !== f);
      }
    } catch (Q) {
      je(t, t.return, Q);
    }
  }
  function Tp(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var i = e.stateNode;
      try {
        ph(t, i);
      } catch (s) {
        je(e, e.return, s);
      }
    }
  }
  function Cp(e, t, i) {
    (i.props = Oa(e.type, e.memoizedProps)), (i.state = e.memoizedState);
    try {
      i.componentWillUnmount();
    } catch (s) {
      je(e, t, s);
    }
  }
  function br(e, t) {
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
      je(e, t, u);
    }
  }
  function an(e, t) {
    var i = e.ref,
      s = e.refCleanup;
    if (i !== null)
      if (typeof s == 'function')
        try {
          s();
        } catch (u) {
          je(e, t, u);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof i == 'function')
        try {
          i(null);
        } catch (u) {
          je(e, t, u);
        }
      else i.current = null;
  }
  function Mp(e) {
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
      je(e, e.return, u);
    }
  }
  function Bu(e, t, i) {
    try {
      var s = e.stateNode;
      IS(s, e.type, i, t), (s[ht] = t);
    } catch (u) {
      je(e, e.return, u);
    }
  }
  function Dp(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Jn(e.type)) ||
      e.tag === 4
    );
  }
  function qu(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Dp(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && Jn(e.type)) ||
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
  function Pu(e, t, i) {
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
            i != null || t.onclick !== null || (t.onclick = cl));
    else if (
      s !== 4 &&
      (s === 27 && Jn(e.type) && ((i = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (Pu(e, t, i), e = e.sibling; e !== null; )
        Pu(e, t, i), (e = e.sibling);
  }
  function Ws(e, t, i) {
    var s = e.tag;
    if (s === 5 || s === 6)
      (e = e.stateNode), t ? i.insertBefore(e, t) : i.appendChild(e);
    else if (
      s !== 4 &&
      (s === 27 && Jn(e.type) && (i = e.stateNode), (e = e.child), e !== null)
    )
      for (Ws(e, t, i), e = e.sibling; e !== null; )
        Ws(e, t, i), (e = e.sibling);
  }
  function _p(e) {
    var t = e.stateNode,
      i = e.memoizedProps;
    try {
      for (var s = e.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      nt(t, s, i), (t[rt] = e), (t[ht] = i);
    } catch (f) {
      je(e, e.return, f);
    }
  }
  var Rn = !1,
    Ve = !1,
    Gu = !1,
    Np = typeof WeakSet == 'function' ? WeakSet : Set,
    Je = null;
  function _S(e, t) {
    if (((e = e.containerInfo), (dc = yl), (e = Vd(e)), qo(e))) {
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
              A = -1,
              L = 0,
              Q = 0,
              Z = e,
              U = null;
            t: for (;;) {
              for (
                var H;
                Z !== i || (u !== 0 && Z.nodeType !== 3) || (b = y + u),
                  Z !== f || (s !== 0 && Z.nodeType !== 3) || (A = y + s),
                  Z.nodeType === 3 && (y += Z.nodeValue.length),
                  (H = Z.firstChild) !== null;

              )
                (U = Z), (Z = H);
              for (;;) {
                if (Z === e) break t;
                if (
                  (U === i && ++L === u && (b = y),
                  U === f && ++Q === s && (A = y),
                  (H = Z.nextSibling) !== null)
                )
                  break;
                (Z = U), (U = Z.parentNode);
              }
              Z = H;
            }
            i = b === -1 || A === -1 ? null : { start: b, end: A };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (
      hc = { focusedElem: e, selectionRange: i }, yl = !1, Je = t;
      Je !== null;

    )
      if (
        ((t = Je), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null)
      )
        (e.return = t), (Je = e);
      else
        for (; Je !== null; ) {
          switch (((t = Je), (f = t.alternate), (e = t.flags), t.tag)) {
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
                  var pe = Oa(i.type, u, i.elementType === i.type);
                  (e = s.getSnapshotBeforeUpdate(pe, f)),
                    (s.__reactInternalSnapshotBeforeUpdate = e);
                } catch (fe) {
                  je(i, i.return, fe);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (i = e.nodeType), i === 9)
                )
                  gc(e);
                else if (i === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      gc(e);
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
            (e.return = t.return), (Je = e);
            break;
          }
          Je = t.return;
        }
  }
  function Lp(e, t, i) {
    var s = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        Qn(e, i), s & 4 && vr(5, i);
        break;
      case 1:
        if ((Qn(e, i), s & 4))
          if (((e = i.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (y) {
              je(i, i.return, y);
            }
          else {
            var u = Oa(i.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(u, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (y) {
              je(i, i.return, y);
            }
          }
        s & 64 && Tp(i), s & 512 && br(i, i.return);
        break;
      case 3:
        if ((Qn(e, i), s & 64 && ((e = i.updateQueue), e !== null))) {
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
            ph(e, t);
          } catch (y) {
            je(i, i.return, y);
          }
        }
        break;
      case 27:
        t === null && s & 4 && _p(i);
      case 26:
      case 5:
        Qn(e, i), t === null && s & 4 && Mp(i), s & 512 && br(i, i.return);
        break;
      case 12:
        Qn(e, i);
        break;
      case 13:
        Qn(e, i),
          s & 4 && jp(e, i),
          s & 64 &&
            ((e = i.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((i = qS.bind(null, i)), ix(e, i))));
        break;
      case 22:
        if (((s = i.memoizedState !== null || Rn), !s)) {
          (t = (t !== null && t.memoizedState !== null) || Ve), (u = Rn);
          var f = Ve;
          (Rn = s),
            (Ve = t) && !f ? Yn(e, i, (i.subtreeFlags & 8772) !== 0) : Qn(e, i),
            (Rn = u),
            (Ve = f);
        }
        break;
      case 30:
        break;
      default:
        Qn(e, i);
    }
  }
  function zp(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), zp(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && xo(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var He = null,
    gt = !1;
  function An(e, t, i) {
    for (i = i.child; i !== null; ) Up(e, t, i), (i = i.sibling);
  }
  function Up(e, t, i) {
    if (wt && typeof wt.onCommitFiberUnmount == 'function')
      try {
        wt.onCommitFiberUnmount(qi, i);
      } catch {}
    switch (i.tag) {
      case 26:
        Ve || an(i, t),
          An(e, t, i),
          i.memoizedState
            ? i.memoizedState.count--
            : i.stateNode && ((i = i.stateNode), i.parentNode.removeChild(i));
        break;
      case 27:
        Ve || an(i, t);
        var s = He,
          u = gt;
        Jn(i.type) && ((He = i.stateNode), (gt = !1)),
          An(e, t, i),
          Cr(i.stateNode),
          (He = s),
          (gt = u);
        break;
      case 5:
        Ve || an(i, t);
      case 6:
        if (
          ((s = He),
          (u = gt),
          (He = null),
          An(e, t, i),
          (He = s),
          (gt = u),
          He !== null)
        )
          if (gt)
            try {
              (He.nodeType === 9
                ? He.body
                : He.nodeName === 'HTML'
                  ? He.ownerDocument.body
                  : He
              ).removeChild(i.stateNode);
            } catch (f) {
              je(i, t, f);
            }
          else
            try {
              He.removeChild(i.stateNode);
            } catch (f) {
              je(i, t, f);
            }
        break;
      case 18:
        He !== null &&
          (gt
            ? ((e = He),
              Em(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === 'HTML'
                    ? e.ownerDocument.body
                    : e,
                i.stateNode,
              ),
              jr(e))
            : Em(He, i.stateNode));
        break;
      case 4:
        (s = He),
          (u = gt),
          (He = i.stateNode.containerInfo),
          (gt = !0),
          An(e, t, i),
          (He = s),
          (gt = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ve || Fn(2, i, t), Ve || Fn(4, i, t), An(e, t, i);
        break;
      case 1:
        Ve ||
          (an(i, t),
          (s = i.stateNode),
          typeof s.componentWillUnmount == 'function' && Cp(i, t, s)),
          An(e, t, i);
        break;
      case 21:
        An(e, t, i);
        break;
      case 22:
        (Ve = (s = Ve) || i.memoizedState !== null), An(e, t, i), (Ve = s);
        break;
      default:
        An(e, t, i);
    }
  }
  function jp(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        jr(e);
      } catch (i) {
        je(t, t.return, i);
      }
  }
  function NS(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Np()), t;
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Np()),
          t
        );
      default:
        throw Error(l(435, e.tag));
    }
  }
  function Vu(e, t) {
    var i = NS(e);
    t.forEach(function (s) {
      var u = PS.bind(null, e, s);
      i.has(s) || (i.add(s), s.then(u, u));
    });
  }
  function At(e, t) {
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
              if (Jn(b.type)) {
                (He = b.stateNode), (gt = !1);
                break e;
              }
              break;
            case 5:
              (He = b.stateNode), (gt = !1);
              break e;
            case 3:
            case 4:
              (He = b.stateNode.containerInfo), (gt = !0);
              break e;
          }
          b = b.return;
        }
        if (He === null) throw Error(l(160));
        Up(f, y, u),
          (He = null),
          (gt = !1),
          (f = u.alternate),
          f !== null && (f.return = null),
          (u.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) kp(t, e), (t = t.sibling);
  }
  var Yt = null;
  function kp(e, t) {
    var i = e.alternate,
      s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        At(t, e),
          Tt(e),
          s & 4 && (Fn(3, e, e.return), vr(3, e), Fn(5, e, e.return));
        break;
      case 1:
        At(t, e),
          Tt(e),
          s & 512 && (Ve || i === null || an(i, i.return)),
          s & 64 &&
            Rn &&
            ((e = e.updateQueue),
            e !== null &&
              ((s = e.callbacks),
              s !== null &&
                ((i = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = i === null ? s : i.concat(s)))));
        break;
      case 26:
        var u = Yt;
        if (
          (At(t, e),
          Tt(e),
          s & 512 && (Ve || i === null || an(i, i.return)),
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
                          f[Vi] ||
                          f[rt] ||
                          f.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          f.hasAttribute('itemprop')) &&
                          ((f = u.createElement(s)),
                          u.head.insertBefore(
                            f,
                            u.querySelector('head > title'),
                          )),
                        nt(f, s, i),
                        (f[rt] = e),
                        $e(f),
                        (s = f);
                      break e;
                    case 'link':
                      var y = _m('link', 'href', u).get(s + (i.href || ''));
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
                        nt(f, s, i),
                        u.head.appendChild(f);
                      break;
                    case 'meta':
                      if (
                        (y = _m('meta', 'content', u).get(
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
                        nt(f, s, i),
                        u.head.appendChild(f);
                      break;
                    default:
                      throw Error(l(468, s));
                  }
                  (f[rt] = e), $e(f), (s = f);
                }
                e.stateNode = s;
              } else Nm(u, e.type, e.stateNode);
            else e.stateNode = Dm(u, s, e.memoizedProps);
          else
            f !== s
              ? (f === null
                  ? i.stateNode !== null &&
                    ((i = i.stateNode), i.parentNode.removeChild(i))
                  : f.count--,
                s === null
                  ? Nm(u, e.type, e.stateNode)
                  : Dm(u, s, e.memoizedProps))
              : s === null &&
                e.stateNode !== null &&
                Bu(e, e.memoizedProps, i.memoizedProps);
        }
        break;
      case 27:
        At(t, e),
          Tt(e),
          s & 512 && (Ve || i === null || an(i, i.return)),
          i !== null && s & 4 && Bu(e, e.memoizedProps, i.memoizedProps);
        break;
      case 5:
        if (
          (At(t, e),
          Tt(e),
          s & 512 && (Ve || i === null || an(i, i.return)),
          e.flags & 32)
        ) {
          u = e.stateNode;
          try {
            Qa(u, '');
          } catch (H) {
            je(e, e.return, H);
          }
        }
        s & 4 &&
          e.stateNode != null &&
          ((u = e.memoizedProps), Bu(e, u, i !== null ? i.memoizedProps : u)),
          s & 1024 && (Gu = !0);
        break;
      case 6:
        if ((At(t, e), Tt(e), s & 4)) {
          if (e.stateNode === null) throw Error(l(162));
          (s = e.memoizedProps), (i = e.stateNode);
          try {
            i.nodeValue = s;
          } catch (H) {
            je(e, e.return, H);
          }
        }
        break;
      case 3:
        if (
          ((pl = null),
          (u = Yt),
          (Yt = dl(t.containerInfo)),
          At(t, e),
          (Yt = u),
          Tt(e),
          s & 4 && i !== null && i.memoizedState.isDehydrated)
        )
          try {
            jr(t.containerInfo);
          } catch (H) {
            je(e, e.return, H);
          }
        Gu && ((Gu = !1), Hp(e));
        break;
      case 4:
        (s = Yt),
          (Yt = dl(e.stateNode.containerInfo)),
          At(t, e),
          Tt(e),
          (Yt = s);
        break;
      case 12:
        At(t, e), Tt(e);
        break;
      case 13:
        At(t, e),
          Tt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (i !== null && i.memoizedState !== null) &&
            (Zu = en()),
          s & 4 &&
            ((s = e.updateQueue),
            s !== null && ((e.updateQueue = null), Vu(e, s)));
        break;
      case 22:
        u = e.memoizedState !== null;
        var A = i !== null && i.memoizedState !== null,
          L = Rn,
          Q = Ve;
        if (
          ((Rn = L || u),
          (Ve = Q || A),
          At(t, e),
          (Ve = Q),
          (Rn = L),
          Tt(e),
          s & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = u ? t._visibility & -2 : t._visibility | 1,
              u && (i === null || A || Rn || Ve || Ra(e)),
              i = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (i === null) {
                A = i = t;
                try {
                  if (((f = A.stateNode), u))
                    (y = f.style),
                      typeof y.setProperty == 'function'
                        ? y.setProperty('display', 'none', 'important')
                        : (y.display = 'none');
                  else {
                    b = A.stateNode;
                    var Z = A.memoizedProps.style,
                      U =
                        Z != null && Z.hasOwnProperty('display')
                          ? Z.display
                          : null;
                    b.style.display =
                      U == null || typeof U == 'boolean' ? '' : ('' + U).trim();
                  }
                } catch (H) {
                  je(A, A.return, H);
                }
              }
            } else if (t.tag === 6) {
              if (i === null) {
                A = t;
                try {
                  A.stateNode.nodeValue = u ? '' : A.memoizedProps;
                } catch (H) {
                  je(A, A.return, H);
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
            i !== null && ((s.retryQueue = null), Vu(e, i))));
        break;
      case 19:
        At(t, e),
          Tt(e),
          s & 4 &&
            ((s = e.updateQueue),
            s !== null && ((e.updateQueue = null), Vu(e, s)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        At(t, e), Tt(e);
    }
  }
  function Tt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var i, s = e.return; s !== null; ) {
          if (Dp(s)) {
            i = s;
            break;
          }
          s = s.return;
        }
        if (i == null) throw Error(l(160));
        switch (i.tag) {
          case 27:
            var u = i.stateNode,
              f = qu(e);
            Ws(e, f, u);
            break;
          case 5:
            var y = i.stateNode;
            i.flags & 32 && (Qa(y, ''), (i.flags &= -33));
            var b = qu(e);
            Ws(e, b, y);
            break;
          case 3:
          case 4:
            var A = i.stateNode.containerInfo,
              L = qu(e);
            Pu(e, L, A);
            break;
          default:
            throw Error(l(161));
        }
      } catch (Q) {
        je(e, e.return, Q);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Hp(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Hp(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function Qn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) Lp(e, t.alternate, t), (t = t.sibling);
  }
  function Ra(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Fn(4, t, t.return), Ra(t);
          break;
        case 1:
          an(t, t.return);
          var i = t.stateNode;
          typeof i.componentWillUnmount == 'function' && Cp(t, t.return, i),
            Ra(t);
          break;
        case 27:
          Cr(t.stateNode);
        case 26:
        case 5:
          an(t, t.return), Ra(t);
          break;
        case 22:
          t.memoizedState === null && Ra(t);
          break;
        case 30:
          Ra(t);
          break;
        default:
          Ra(t);
      }
      e = e.sibling;
    }
  }
  function Yn(e, t, i) {
    for (i = i && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var s = t.alternate,
        u = e,
        f = t,
        y = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Yn(u, f, i), vr(4, f);
          break;
        case 1:
          if (
            (Yn(u, f, i),
            (s = f),
            (u = s.stateNode),
            typeof u.componentDidMount == 'function')
          )
            try {
              u.componentDidMount();
            } catch (L) {
              je(s, s.return, L);
            }
          if (((s = f), (u = s.updateQueue), u !== null)) {
            var b = s.stateNode;
            try {
              var A = u.shared.hiddenCallbacks;
              if (A !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < A.length; u++)
                  hh(A[u], b);
            } catch (L) {
              je(s, s.return, L);
            }
          }
          i && y & 64 && Tp(f), br(f, f.return);
          break;
        case 27:
          _p(f);
        case 26:
        case 5:
          Yn(u, f, i), i && s === null && y & 4 && Mp(f), br(f, f.return);
          break;
        case 12:
          Yn(u, f, i);
          break;
        case 13:
          Yn(u, f, i), i && y & 4 && jp(u, f);
          break;
        case 22:
          f.memoizedState === null && Yn(u, f, i), br(f, f.return);
          break;
        case 30:
          break;
        default:
          Yn(u, f, i);
      }
      t = t.sibling;
    }
  }
  function Fu(e, t) {
    var i = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (i = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== i && (e != null && e.refCount++, i != null && ir(i));
  }
  function Qu(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && ir(e));
  }
  function rn(e, t, i, s) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Bp(e, t, i, s), (t = t.sibling);
  }
  function Bp(e, t, i, s) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        rn(e, t, i, s), u & 2048 && vr(9, t);
        break;
      case 1:
        rn(e, t, i, s);
        break;
      case 3:
        rn(e, t, i, s),
          u & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && ir(e)));
        break;
      case 12:
        if (u & 2048) {
          rn(e, t, i, s), (e = t.stateNode);
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
          } catch (A) {
            je(t, t.return, A);
          }
        } else rn(e, t, i, s);
        break;
      case 13:
        rn(e, t, i, s);
        break;
      case 23:
        break;
      case 22:
        (f = t.stateNode),
          (y = t.alternate),
          t.memoizedState !== null
            ? f._visibility & 2
              ? rn(e, t, i, s)
              : Sr(e, t)
            : f._visibility & 2
              ? rn(e, t, i, s)
              : ((f._visibility |= 2),
                ci(e, t, i, s, (t.subtreeFlags & 10256) !== 0)),
          u & 2048 && Fu(y, t);
        break;
      case 24:
        rn(e, t, i, s), u & 2048 && Qu(t.alternate, t);
        break;
      default:
        rn(e, t, i, s);
    }
  }
  function ci(e, t, i, s, u) {
    for (u = u && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var f = e,
        y = t,
        b = i,
        A = s,
        L = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          ci(f, y, b, A, u), vr(8, y);
          break;
        case 23:
          break;
        case 22:
          var Q = y.stateNode;
          y.memoizedState !== null
            ? Q._visibility & 2
              ? ci(f, y, b, A, u)
              : Sr(f, y)
            : ((Q._visibility |= 2), ci(f, y, b, A, u)),
            u && L & 2048 && Fu(y.alternate, y);
          break;
        case 24:
          ci(f, y, b, A, u), u && L & 2048 && Qu(y.alternate, y);
          break;
        default:
          ci(f, y, b, A, u);
      }
      t = t.sibling;
    }
  }
  function Sr(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var i = e,
          s = t,
          u = s.flags;
        switch (s.tag) {
          case 22:
            Sr(i, s), u & 2048 && Fu(s.alternate, s);
            break;
          case 24:
            Sr(i, s), u & 2048 && Qu(s.alternate, s);
            break;
          default:
            Sr(i, s);
        }
        t = t.sibling;
      }
  }
  var xr = 8192;
  function fi(e) {
    if (e.subtreeFlags & xr)
      for (e = e.child; e !== null; ) qp(e), (e = e.sibling);
  }
  function qp(e) {
    switch (e.tag) {
      case 26:
        fi(e),
          e.flags & xr &&
            e.memoizedState !== null &&
            yx(Yt, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        fi(e);
        break;
      case 3:
      case 4:
        var t = Yt;
        (Yt = dl(e.stateNode.containerInfo)), fi(e), (Yt = t);
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = xr), (xr = 16777216), fi(e), (xr = t))
            : fi(e));
        break;
      default:
        fi(e);
    }
  }
  function Pp(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function wr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var i = 0; i < t.length; i++) {
          var s = t[i];
          (Je = s), Vp(s, e);
        }
      Pp(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Gp(e), (e = e.sibling);
  }
  function Gp(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        wr(e), e.flags & 2048 && Fn(9, e, e.return);
        break;
      case 3:
        wr(e);
        break;
      case 12:
        wr(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), el(e))
          : wr(e);
        break;
      default:
        wr(e);
    }
  }
  function el(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var i = 0; i < t.length; i++) {
          var s = t[i];
          (Je = s), Vp(s, e);
        }
      Pp(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          Fn(8, t, t.return), el(t);
          break;
        case 22:
          (i = t.stateNode),
            i._visibility & 2 && ((i._visibility &= -3), el(t));
          break;
        default:
          el(t);
      }
      e = e.sibling;
    }
  }
  function Vp(e, t) {
    for (; Je !== null; ) {
      var i = Je;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Fn(8, i, t);
          break;
        case 23:
        case 22:
          if (i.memoizedState !== null && i.memoizedState.cachePool !== null) {
            var s = i.memoizedState.cachePool.pool;
            s != null && s.refCount++;
          }
          break;
        case 24:
          ir(i.memoizedState.cache);
      }
      if (((s = i.child), s !== null)) (s.return = i), (Je = s);
      else
        e: for (i = e; Je !== null; ) {
          s = Je;
          var u = s.sibling,
            f = s.return;
          if ((zp(s), s === i)) {
            Je = null;
            break e;
          }
          if (u !== null) {
            (u.return = f), (Je = u);
            break e;
          }
          Je = f;
        }
    }
  }
  var LS = {
      getCacheForType: function (e) {
        var t = st(Ke),
          i = t.data.get(e);
        return i === void 0 && ((i = e()), t.data.set(e, i)), i;
      },
    },
    zS = typeof WeakMap == 'function' ? WeakMap : Map,
    _e = 0,
    ke = null,
    Oe = null,
    Ae = 0,
    Ne = 0,
    Ct = null,
    Kn = !1,
    di = !1,
    Yu = !1,
    Tn = 0,
    Pe = 0,
    Xn = 0,
    Aa = 0,
    Ku = 0,
    qt = 0,
    hi = 0,
    Er = null,
    yt = null,
    Xu = !1,
    Zu = 0,
    tl = 1 / 0,
    nl = null,
    Zn = null,
    tt = 0,
    $n = null,
    pi = null,
    mi = 0,
    $u = 0,
    Iu = null,
    Fp = null,
    Or = 0,
    Ju = null;
  function Mt() {
    if ((_e & 2) !== 0 && Ae !== 0) return Ae & -Ae;
    if (M.T !== null) {
      var e = ni;
      return e !== 0 ? e : rc();
    }
    return sd();
  }
  function Qp() {
    qt === 0 && (qt = (Ae & 536870912) === 0 || De ? nd() : 536870912);
    var e = Bt.current;
    return e !== null && (e.flags |= 32), qt;
  }
  function Dt(e, t, i) {
    ((e === ke && (Ne === 2 || Ne === 9)) || e.cancelPendingCommit !== null) &&
      (gi(e, 0), In(e, Ae, qt, !1)),
      Gi(e, i),
      ((_e & 2) === 0 || e !== ke) &&
        (e === ke &&
          ((_e & 2) === 0 && (Aa |= i), Pe === 4 && In(e, Ae, qt, !1)),
        sn(e));
  }
  function Yp(e, t, i) {
    if ((_e & 6) !== 0) throw Error(l(327));
    var s = (!i && (t & 124) === 0 && (t & e.expiredLanes) === 0) || Pi(e, t),
      u = s ? kS(e, t) : tc(e, t, !0),
      f = s;
    do {
      if (u === 0) {
        di && !s && In(e, t, 0, !1);
        break;
      } else {
        if (((i = e.current.alternate), f && !US(i))) {
          (u = tc(e, t, !1)), (f = !1);
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
              u = Er;
              var A = b.current.memoizedState.isDehydrated;
              if ((A && (gi(b, y).flags |= 256), (y = tc(b, y, !1)), y !== 2)) {
                if (Yu && !A) {
                  (b.errorRecoveryDisabledLanes |= f), (Aa |= f), (u = 4);
                  break e;
                }
                (f = yt),
                  (yt = u),
                  f !== null && (yt === null ? (yt = f) : yt.push.apply(yt, f));
              }
              u = y;
            }
            if (((f = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          gi(e, 0), In(e, t, 0, !0);
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
              In(s, t, qt, !Kn);
              break e;
            case 2:
              yt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(l(329));
          }
          if ((t & 62914560) === t && ((u = Zu + 300 - en()), 10 < u)) {
            if ((In(s, t, qt, !Kn), hs(s, 0, !0) !== 0)) break e;
            s.timeoutHandle = xm(
              Kp.bind(null, s, i, yt, nl, Xu, t, qt, Aa, hi, Kn, f, 2, -0, 0),
              u,
            );
            break e;
          }
          Kp(s, i, yt, nl, Xu, t, qt, Aa, hi, Kn, f, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    sn(e);
  }
  function Kp(e, t, i, s, u, f, y, b, A, L, Q, Z, U, H) {
    if (
      ((e.timeoutHandle = -1),
      (Z = t.subtreeFlags),
      (Z & 8192 || (Z & 16785408) === 16785408) &&
        ((_r = { stylesheets: null, count: 0, unsuspend: gx }),
        qp(t),
        (Z = vx()),
        Z !== null))
    ) {
      (e.cancelPendingCommit = Z(
        em.bind(null, e, t, f, i, s, u, y, b, A, Q, 1, U, H),
      )),
        In(e, f, y, !L);
      return;
    }
    em(e, t, f, i, s, u, y, b, A);
  }
  function US(e) {
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
            if (!Ot(f(), u)) return !1;
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
  function In(e, t, i, s) {
    (t &= ~Ku),
      (t &= ~Aa),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      s && (e.warmLanes |= t),
      (s = e.expirationTimes);
    for (var u = t; 0 < u; ) {
      var f = 31 - Et(u),
        y = 1 << f;
      (s[f] = -1), (u &= ~y);
    }
    i !== 0 && id(e, i, t);
  }
  function al() {
    return (_e & 6) === 0 ? (Rr(0), !1) : !0;
  }
  function Wu() {
    if (Oe !== null) {
      if (Ne === 0) var e = Oe.return;
      else (e = Oe), (bn = Sa = null), gu(e), (oi = null), (mr = 0), (e = Oe);
      for (; e !== null; ) Ap(e.alternate, e), (e = e.return);
      Oe = null;
    }
  }
  function gi(e, t) {
    var i = e.timeoutHandle;
    i !== -1 && ((e.timeoutHandle = -1), WS(i)),
      (i = e.cancelPendingCommit),
      i !== null && ((e.cancelPendingCommit = null), i()),
      Wu(),
      (ke = e),
      (Oe = i = gn(e.current, null)),
      (Ae = t),
      (Ne = 0),
      (Ct = null),
      (Kn = !1),
      (di = Pi(e, t)),
      (Yu = !1),
      (hi = qt = Ku = Aa = Xn = Pe = 0),
      (yt = Er = null),
      (Xu = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var s = e.entangledLanes;
    if (s !== 0)
      for (e = e.entanglements, s &= t; 0 < s; ) {
        var u = 31 - Et(s),
          f = 1 << u;
        (t |= e[u]), (s &= ~f);
      }
    return (Tn = t), Rs(), i;
  }
  function Xp(e, t) {
    (xe = null),
      (M.H = Fs),
      t === sr || t === zs
        ? ((t = fh()), (Ne = 3))
        : t === oh
          ? ((t = fh()), (Ne = 4))
          : (Ne =
              t === dp
                ? 8
                : t !== null &&
                    typeof t == 'object' &&
                    typeof t.then == 'function'
                  ? 6
                  : 1),
      (Ct = t),
      Oe === null && ((Pe = 1), Zs(e, Ut(t, e.current)));
  }
  function Zp() {
    var e = M.H;
    return (M.H = Fs), e === null ? Fs : e;
  }
  function $p() {
    var e = M.A;
    return (M.A = LS), e;
  }
  function ec() {
    (Pe = 4),
      Kn || ((Ae & 4194048) !== Ae && Bt.current !== null) || (di = !0),
      ((Xn & 134217727) === 0 && (Aa & 134217727) === 0) ||
        ke === null ||
        In(ke, Ae, qt, !1);
  }
  function tc(e, t, i) {
    var s = _e;
    _e |= 2;
    var u = Zp(),
      f = $p();
    (ke !== e || Ae !== t) && ((nl = null), gi(e, t)), (t = !1);
    var y = Pe;
    e: do
      try {
        if (Ne !== 0 && Oe !== null) {
          var b = Oe,
            A = Ct;
          switch (Ne) {
            case 8:
              Wu(), (y = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Bt.current === null && (t = !0);
              var L = Ne;
              if (((Ne = 0), (Ct = null), yi(e, b, A, L), i && di)) {
                y = 0;
                break e;
              }
              break;
            default:
              (L = Ne), (Ne = 0), (Ct = null), yi(e, b, A, L);
          }
        }
        jS(), (y = Pe);
        break;
      } catch (Q) {
        Xp(e, Q);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (bn = Sa = null),
      (_e = s),
      (M.H = u),
      (M.A = f),
      Oe === null && ((ke = null), (Ae = 0), Rs()),
      y
    );
  }
  function jS() {
    for (; Oe !== null; ) Ip(Oe);
  }
  function kS(e, t) {
    var i = _e;
    _e |= 2;
    var s = Zp(),
      u = $p();
    ke !== e || Ae !== t
      ? ((nl = null), (tl = en() + 500), gi(e, t))
      : (di = Pi(e, t));
    e: do
      try {
        if (Ne !== 0 && Oe !== null) {
          t = Oe;
          var f = Ct;
          t: switch (Ne) {
            case 1:
              (Ne = 0), (Ct = null), yi(e, t, f, 1);
              break;
            case 2:
            case 9:
              if (uh(f)) {
                (Ne = 0), (Ct = null), Jp(t);
                break;
              }
              (t = function () {
                (Ne !== 2 && Ne !== 9) || ke !== e || (Ne = 7), sn(e);
              }),
                f.then(t, t);
              break e;
            case 3:
              Ne = 7;
              break e;
            case 4:
              Ne = 5;
              break e;
            case 7:
              uh(f)
                ? ((Ne = 0), (Ct = null), Jp(t))
                : ((Ne = 0), (Ct = null), yi(e, t, f, 7));
              break;
            case 5:
              var y = null;
              switch (Oe.tag) {
                case 26:
                  y = Oe.memoizedState;
                case 5:
                case 27:
                  var b = Oe;
                  if (!y || Lm(y)) {
                    (Ne = 0), (Ct = null);
                    var A = b.sibling;
                    if (A !== null) Oe = A;
                    else {
                      var L = b.return;
                      L !== null ? ((Oe = L), il(L)) : (Oe = null);
                    }
                    break t;
                  }
              }
              (Ne = 0), (Ct = null), yi(e, t, f, 5);
              break;
            case 6:
              (Ne = 0), (Ct = null), yi(e, t, f, 6);
              break;
            case 8:
              Wu(), (Pe = 6);
              break e;
            default:
              throw Error(l(462));
          }
        }
        HS();
        break;
      } catch (Q) {
        Xp(e, Q);
      }
    while (!0);
    return (
      (bn = Sa = null),
      (M.H = s),
      (M.A = u),
      (_e = i),
      Oe !== null ? 0 : ((ke = null), (Ae = 0), Rs(), Pe)
    );
  }
  function HS() {
    for (; Oe !== null && !s0(); ) Ip(Oe);
  }
  function Ip(e) {
    var t = Op(e.alternate, e, Tn);
    (e.memoizedProps = e.pendingProps), t === null ? il(e) : (Oe = t);
  }
  function Jp(e) {
    var t = e,
      i = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = vp(i, t, t.pendingProps, t.type, void 0, Ae);
        break;
      case 11:
        t = vp(i, t, t.pendingProps, t.type.render, t.ref, Ae);
        break;
      case 5:
        gu(t);
      default:
        Ap(i, t), (t = Oe = Wd(t, Tn)), (t = Op(i, t, Tn));
    }
    (e.memoizedProps = e.pendingProps), t === null ? il(e) : (Oe = t);
  }
  function yi(e, t, i, s) {
    (bn = Sa = null), gu(t), (oi = null), (mr = 0);
    var u = t.return;
    try {
      if (TS(e, u, t, i, Ae)) {
        (Pe = 1), Zs(e, Ut(i, e.current)), (Oe = null);
        return;
      }
    } catch (f) {
      if (u !== null) throw ((Oe = u), f);
      (Pe = 1), Zs(e, Ut(i, e.current)), (Oe = null);
      return;
    }
    t.flags & 32768
      ? (De || s === 1
          ? (e = !0)
          : di || (Ae & 536870912) !== 0
            ? (e = !1)
            : ((Kn = e = !0),
              (s === 2 || s === 9 || s === 3 || s === 6) &&
                ((s = Bt.current),
                s !== null && s.tag === 13 && (s.flags |= 16384))),
        Wp(t, e))
      : il(t);
  }
  function il(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Wp(t, Kn);
        return;
      }
      e = t.return;
      var i = MS(t.alternate, t, Tn);
      if (i !== null) {
        Oe = i;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Oe = t;
        return;
      }
      Oe = t = e;
    } while (t !== null);
    Pe === 0 && (Pe = 5);
  }
  function Wp(e, t) {
    do {
      var i = DS(e.alternate, e);
      if (i !== null) {
        (i.flags &= 32767), (Oe = i);
        return;
      }
      if (
        ((i = e.return),
        i !== null &&
          ((i.flags |= 32768), (i.subtreeFlags = 0), (i.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Oe = e;
        return;
      }
      Oe = e = i;
    } while (e !== null);
    (Pe = 6), (Oe = null);
  }
  function em(e, t, i, s, u, f, y, b, A) {
    e.cancelPendingCommit = null;
    do rl();
    while (tt !== 0);
    if ((_e & 6) !== 0) throw Error(l(327));
    if (t !== null) {
      if (t === e.current) throw Error(l(177));
      if (
        ((f = t.lanes | t.childLanes),
        (f |= Qo),
        g0(e, i, f, y, b, A),
        e === ke && ((Oe = ke = null), (Ae = 0)),
        (pi = t),
        ($n = e),
        (mi = i),
        ($u = f),
        (Iu = u),
        (Fp = s),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            GS(cs, function () {
              return rm(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (s = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || s)
      ) {
        (s = M.T), (M.T = null), (u = X.p), (X.p = 2), (y = _e), (_e |= 4);
        try {
          _S(e, t, i);
        } finally {
          (_e = y), (X.p = u), (M.T = s);
        }
      }
      (tt = 1), tm(), nm(), am();
    }
  }
  function tm() {
    if (tt === 1) {
      tt = 0;
      var e = $n,
        t = pi,
        i = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || i) {
        (i = M.T), (M.T = null);
        var s = X.p;
        X.p = 2;
        var u = _e;
        _e |= 4;
        try {
          kp(t, e);
          var f = hc,
            y = Vd(e.containerInfo),
            b = f.focusedElem,
            A = f.selectionRange;
          if (
            y !== b &&
            b &&
            b.ownerDocument &&
            Gd(b.ownerDocument.documentElement, b)
          ) {
            if (A !== null && qo(b)) {
              var L = A.start,
                Q = A.end;
              if ((Q === void 0 && (Q = L), 'selectionStart' in b))
                (b.selectionStart = L),
                  (b.selectionEnd = Math.min(Q, b.value.length));
              else {
                var Z = b.ownerDocument || document,
                  U = (Z && Z.defaultView) || window;
                if (U.getSelection) {
                  var H = U.getSelection(),
                    pe = b.textContent.length,
                    fe = Math.min(A.start, pe),
                    Ue = A.end === void 0 ? fe : Math.min(A.end, pe);
                  !H.extend && fe > Ue && ((y = Ue), (Ue = fe), (fe = y));
                  var D = Pd(b, fe),
                    C = Pd(b, Ue);
                  if (
                    D &&
                    C &&
                    (H.rangeCount !== 1 ||
                      H.anchorNode !== D.node ||
                      H.anchorOffset !== D.offset ||
                      H.focusNode !== C.node ||
                      H.focusOffset !== C.offset)
                  ) {
                    var N = Z.createRange();
                    N.setStart(D.node, D.offset),
                      H.removeAllRanges(),
                      fe > Ue
                        ? (H.addRange(N), H.extend(C.node, C.offset))
                        : (N.setEnd(C.node, C.offset), H.addRange(N));
                  }
                }
              }
            }
            for (Z = [], H = b; (H = H.parentNode); )
              H.nodeType === 1 &&
                Z.push({ element: H, left: H.scrollLeft, top: H.scrollTop });
            for (
              typeof b.focus == 'function' && b.focus(), b = 0;
              b < Z.length;
              b++
            ) {
              var K = Z[b];
              (K.element.scrollLeft = K.left), (K.element.scrollTop = K.top);
            }
          }
          (yl = !!dc), (hc = dc = null);
        } finally {
          (_e = u), (X.p = s), (M.T = i);
        }
      }
      (e.current = t), (tt = 2);
    }
  }
  function nm() {
    if (tt === 2) {
      tt = 0;
      var e = $n,
        t = pi,
        i = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || i) {
        (i = M.T), (M.T = null);
        var s = X.p;
        X.p = 2;
        var u = _e;
        _e |= 4;
        try {
          Lp(e, t.alternate, t);
        } finally {
          (_e = u), (X.p = s), (M.T = i);
        }
      }
      tt = 3;
    }
  }
  function am() {
    if (tt === 4 || tt === 3) {
      (tt = 0), l0();
      var e = $n,
        t = pi,
        i = mi,
        s = Fp;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (tt = 5)
        : ((tt = 0), (pi = $n = null), im(e, e.pendingLanes));
      var u = e.pendingLanes;
      if (
        (u === 0 && (Zn = null),
        bo(i),
        (t = t.stateNode),
        wt && typeof wt.onCommitFiberRoot == 'function')
      )
        try {
          wt.onCommitFiberRoot(qi, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (s !== null) {
        (t = M.T), (u = X.p), (X.p = 2), (M.T = null);
        try {
          for (var f = e.onRecoverableError, y = 0; y < s.length; y++) {
            var b = s[y];
            f(b.value, { componentStack: b.stack });
          }
        } finally {
          (M.T = t), (X.p = u);
        }
      }
      (mi & 3) !== 0 && rl(),
        sn(e),
        (u = e.pendingLanes),
        (i & 4194090) !== 0 && (u & 42) !== 0
          ? e === Ju
            ? Or++
            : ((Or = 0), (Ju = e))
          : (Or = 0),
        Rr(0);
    }
  }
  function im(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), ir(t)));
  }
  function rl(e) {
    return tm(), nm(), am(), rm();
  }
  function rm() {
    if (tt !== 5) return !1;
    var e = $n,
      t = $u;
    $u = 0;
    var i = bo(mi),
      s = M.T,
      u = X.p;
    try {
      (X.p = 32 > i ? 32 : i), (M.T = null), (i = Iu), (Iu = null);
      var f = $n,
        y = mi;
      if (((tt = 0), (pi = $n = null), (mi = 0), (_e & 6) !== 0))
        throw Error(l(331));
      var b = _e;
      if (
        ((_e |= 4),
        Gp(f.current),
        Bp(f, f.current, y, i),
        (_e = b),
        Rr(0, !1),
        wt && typeof wt.onPostCommitFiberRoot == 'function')
      )
        try {
          wt.onPostCommitFiberRoot(qi, f);
        } catch {}
      return !0;
    } finally {
      (X.p = u), (M.T = s), im(e, t);
    }
  }
  function sm(e, t, i) {
    (t = Ut(i, t)),
      (t = Du(e.stateNode, t, 2)),
      (e = qn(e, t, 2)),
      e !== null && (Gi(e, 2), sn(e));
  }
  function je(e, t, i) {
    if (e.tag === 3) sm(e, e, i);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          sm(t, e, i);
          break;
        } else if (t.tag === 1) {
          var s = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof s.componentDidCatch == 'function' &&
              (Zn === null || !Zn.has(s)))
          ) {
            (e = Ut(i, e)),
              (i = cp(2)),
              (s = qn(t, i, 2)),
              s !== null && (fp(i, s, t, e), Gi(s, 2), sn(s));
            break;
          }
        }
        t = t.return;
      }
  }
  function nc(e, t, i) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new zS();
      var u = new Set();
      s.set(t, u);
    } else (u = s.get(t)), u === void 0 && ((u = new Set()), s.set(t, u));
    u.has(i) ||
      ((Yu = !0), u.add(i), (e = BS.bind(null, e, t, i)), t.then(e, e));
  }
  function BS(e, t, i) {
    var s = e.pingCache;
    s !== null && s.delete(t),
      (e.pingedLanes |= e.suspendedLanes & i),
      (e.warmLanes &= ~i),
      ke === e &&
        (Ae & i) === i &&
        (Pe === 4 || (Pe === 3 && (Ae & 62914560) === Ae && 300 > en() - Zu)
          ? (_e & 2) === 0 && gi(e, 0)
          : (Ku |= i),
        hi === Ae && (hi = 0)),
      sn(e);
  }
  function lm(e, t) {
    t === 0 && (t = ad()), (e = Ja(e, t)), e !== null && (Gi(e, t), sn(e));
  }
  function qS(e) {
    var t = e.memoizedState,
      i = 0;
    t !== null && (i = t.retryLane), lm(e, i);
  }
  function PS(e, t) {
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
    s !== null && s.delete(t), lm(e, i);
  }
  function GS(e, t) {
    return Ln(e, t);
  }
  var sl = null,
    vi = null,
    ac = !1,
    ll = !1,
    ic = !1,
    Ta = 0;
  function sn(e) {
    e !== vi &&
      e.next === null &&
      (vi === null ? (sl = vi = e) : (vi = vi.next = e)),
      (ll = !0),
      ac || ((ac = !0), FS());
  }
  function Rr(e, t) {
    if (!ic && ll) {
      ic = !0;
      do
        for (var i = !1, s = sl; s !== null; ) {
          if (e !== 0) {
            var u = s.pendingLanes;
            if (u === 0) var f = 0;
            else {
              var y = s.suspendedLanes,
                b = s.pingedLanes;
              (f = (1 << (31 - Et(42 | e) + 1)) - 1),
                (f &= u & ~(y & ~b)),
                (f = f & 201326741 ? (f & 201326741) | 1 : f ? f | 2 : 0);
            }
            f !== 0 && ((i = !0), fm(s, f));
          } else
            (f = Ae),
              (f = hs(
                s,
                s === ke ? f : 0,
                s.cancelPendingCommit !== null || s.timeoutHandle !== -1,
              )),
              (f & 3) === 0 || Pi(s, f) || ((i = !0), fm(s, f));
          s = s.next;
        }
      while (i);
      ic = !1;
    }
  }
  function VS() {
    om();
  }
  function om() {
    ll = ac = !1;
    var e = 0;
    Ta !== 0 && (JS() && (e = Ta), (Ta = 0));
    for (var t = en(), i = null, s = sl; s !== null; ) {
      var u = s.next,
        f = um(s, t);
      f === 0
        ? ((s.next = null),
          i === null ? (sl = u) : (i.next = u),
          u === null && (vi = i))
        : ((i = s), (e !== 0 || (f & 3) !== 0) && (ll = !0)),
        (s = u);
    }
    Rr(e);
  }
  function um(e, t) {
    for (
      var i = e.suspendedLanes,
        s = e.pingedLanes,
        u = e.expirationTimes,
        f = e.pendingLanes & -62914561;
      0 < f;

    ) {
      var y = 31 - Et(f),
        b = 1 << y,
        A = u[y];
      A === -1
        ? ((b & i) === 0 || (b & s) !== 0) && (u[y] = m0(b, t))
        : A <= t && (e.expiredLanes |= b),
        (f &= ~b);
    }
    if (
      ((t = ke),
      (i = Ae),
      (i = hs(
        e,
        e === t ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (s = e.callbackNode),
      i === 0 ||
        (e === t && (Ne === 2 || Ne === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        s !== null && s !== null && go(s),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((i & 3) === 0 || Pi(e, i)) {
      if (((t = i & -i), t === e.callbackPriority)) return t;
      switch ((s !== null && go(s), bo(i))) {
        case 2:
        case 8:
          i = ed;
          break;
        case 32:
          i = cs;
          break;
        case 268435456:
          i = td;
          break;
        default:
          i = cs;
      }
      return (
        (s = cm.bind(null, e)),
        (i = Ln(i, s)),
        (e.callbackPriority = t),
        (e.callbackNode = i),
        t
      );
    }
    return (
      s !== null && s !== null && go(s),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function cm(e, t) {
    if (tt !== 0 && tt !== 5)
      return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var i = e.callbackNode;
    if (rl() && e.callbackNode !== i) return null;
    var s = Ae;
    return (
      (s = hs(
        e,
        e === ke ? s : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      s === 0
        ? null
        : (Yp(e, s, t),
          um(e, en()),
          e.callbackNode != null && e.callbackNode === i
            ? cm.bind(null, e)
            : null)
    );
  }
  function fm(e, t) {
    if (rl()) return null;
    Yp(e, t, !0);
  }
  function FS() {
    ex(function () {
      (_e & 6) !== 0 ? Ln(Wf, VS) : om();
    });
  }
  function rc() {
    return Ta === 0 && (Ta = nd()), Ta;
  }
  function dm(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : vs('' + e);
  }
  function hm(e, t) {
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
  function QS(e, t, i, s, u) {
    if (t === 'submit' && i && i.stateNode === u) {
      var f = dm((u[ht] || null).action),
        y = s.submitter;
      y &&
        ((t = (t = y[ht] || null)
          ? dm(t.formAction)
          : y.getAttribute('formAction')),
        t !== null && ((f = t), (y = null)));
      var b = new ws('action', 'action', null, s, u);
      e.push({
        event: b,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (s.defaultPrevented) {
                if (Ta !== 0) {
                  var A = y ? hm(u, y) : new FormData(u);
                  Ru(
                    i,
                    { pending: !0, data: A, method: u.method, action: f },
                    null,
                    A,
                  );
                }
              } else
                typeof f == 'function' &&
                  (b.preventDefault(),
                  (A = y ? hm(u, y) : new FormData(u)),
                  Ru(
                    i,
                    { pending: !0, data: A, method: u.method, action: f },
                    f,
                    A,
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var sc = 0; sc < Fo.length; sc++) {
    var lc = Fo[sc],
      YS = lc.toLowerCase(),
      KS = lc[0].toUpperCase() + lc.slice(1);
    Qt(YS, 'on' + KS);
  }
  Qt(Yd, 'onAnimationEnd'),
    Qt(Kd, 'onAnimationIteration'),
    Qt(Xd, 'onAnimationStart'),
    Qt('dblclick', 'onDoubleClick'),
    Qt('focusin', 'onFocus'),
    Qt('focusout', 'onBlur'),
    Qt(cS, 'onTransitionRun'),
    Qt(fS, 'onTransitionStart'),
    Qt(dS, 'onTransitionCancel'),
    Qt(Zd, 'onTransitionEnd'),
    Ga('onMouseEnter', ['mouseout', 'mouseover']),
    Ga('onMouseLeave', ['mouseout', 'mouseover']),
    Ga('onPointerEnter', ['pointerout', 'pointerover']),
    Ga('onPointerLeave', ['pointerout', 'pointerover']),
    fa(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' ',
      ),
    ),
    fa(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' ',
      ),
    ),
    fa('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    fa(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' '),
    ),
    fa(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
    ),
    fa(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
    );
  var Ar =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    XS = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'
        .split(' ')
        .concat(Ar),
    );
  function pm(e, t) {
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
              A = b.instance,
              L = b.currentTarget;
            if (((b = b.listener), A !== f && u.isPropagationStopped()))
              break e;
            (f = b), (u.currentTarget = L);
            try {
              f(u);
            } catch (Q) {
              Xs(Q);
            }
            (u.currentTarget = null), (f = A);
          }
        else
          for (y = 0; y < s.length; y++) {
            if (
              ((b = s[y]),
              (A = b.instance),
              (L = b.currentTarget),
              (b = b.listener),
              A !== f && u.isPropagationStopped())
            )
              break e;
            (f = b), (u.currentTarget = L);
            try {
              f(u);
            } catch (Q) {
              Xs(Q);
            }
            (u.currentTarget = null), (f = A);
          }
      }
    }
  }
  function Re(e, t) {
    var i = t[So];
    i === void 0 && (i = t[So] = new Set());
    var s = e + '__bubble';
    i.has(s) || (mm(t, e, 2, !1), i.add(s));
  }
  function oc(e, t, i) {
    var s = 0;
    t && (s |= 4), mm(i, e, s, t);
  }
  var ol = '_reactListening' + Math.random().toString(36).slice(2);
  function uc(e) {
    if (!e[ol]) {
      (e[ol] = !0),
        od.forEach(function (i) {
          i !== 'selectionchange' && (XS.has(i) || oc(i, !1, e), oc(i, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ol] || ((t[ol] = !0), oc('selectionchange', !1, t));
    }
  }
  function mm(e, t, i, s) {
    switch (Bm(t)) {
      case 2:
        var u = xx;
        break;
      case 8:
        u = wx;
        break;
      default:
        u = Ec;
    }
    (i = u.bind(null, t, i, e)),
      (u = void 0),
      !_o ||
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
  function cc(e, t, i, s, u) {
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
              var A = y.tag;
              if ((A === 3 || A === 4) && y.stateNode.containerInfo === u)
                return;
              y = y.return;
            }
          for (; b !== null; ) {
            if (((y = Ba(b)), y === null)) return;
            if (((A = y.tag), A === 5 || A === 6 || A === 26 || A === 27)) {
              s = f = y;
              continue e;
            }
            b = b.parentNode;
          }
        }
        s = s.return;
      }
    wd(function () {
      var L = f,
        Q = Mo(i),
        Z = [];
      e: {
        var U = $d.get(e);
        if (U !== void 0) {
          var H = ws,
            pe = e;
          switch (e) {
            case 'keypress':
              if (Ss(i) === 0) break e;
            case 'keydown':
            case 'keyup':
              H = G0;
              break;
            case 'focusin':
              (pe = 'focus'), (H = Uo);
              break;
            case 'focusout':
              (pe = 'blur'), (H = Uo);
              break;
            case 'beforeblur':
            case 'afterblur':
              H = Uo;
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
              H = Rd;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              H = D0;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              H = Q0;
              break;
            case Yd:
            case Kd:
            case Xd:
              H = L0;
              break;
            case Zd:
              H = K0;
              break;
            case 'scroll':
            case 'scrollend':
              H = C0;
              break;
            case 'wheel':
              H = Z0;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              H = U0;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              H = Td;
              break;
            case 'toggle':
            case 'beforetoggle':
              H = I0;
          }
          var fe = (t & 4) !== 0,
            Ue = !fe && (e === 'scroll' || e === 'scrollend'),
            D = fe ? (U !== null ? U + 'Capture' : null) : U;
          fe = [];
          for (var C = L, N; C !== null; ) {
            var K = C;
            if (
              ((N = K.stateNode),
              (K = K.tag),
              (K !== 5 && K !== 26 && K !== 27) ||
                N === null ||
                D === null ||
                ((K = Qi(C, D)), K != null && fe.push(Tr(C, K, N))),
              Ue)
            )
              break;
            C = C.return;
          }
          0 < fe.length &&
            ((U = new H(U, pe, null, i, Q)),
            Z.push({ event: U, listeners: fe }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((U = e === 'mouseover' || e === 'pointerover'),
            (H = e === 'mouseout' || e === 'pointerout'),
            U &&
              i !== Co &&
              (pe = i.relatedTarget || i.fromElement) &&
              (Ba(pe) || pe[Ha]))
          )
            break e;
          if (
            (H || U) &&
            ((U =
              Q.window === Q
                ? Q
                : (U = Q.ownerDocument)
                  ? U.defaultView || U.parentWindow
                  : window),
            H
              ? ((pe = i.relatedTarget || i.toElement),
                (H = L),
                (pe = pe ? Ba(pe) : null),
                pe !== null &&
                  ((Ue = c(pe)),
                  (fe = pe.tag),
                  pe !== Ue || (fe !== 5 && fe !== 27 && fe !== 6)) &&
                  (pe = null))
              : ((H = null), (pe = L)),
            H !== pe)
          ) {
            if (
              ((fe = Rd),
              (K = 'onMouseLeave'),
              (D = 'onMouseEnter'),
              (C = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((fe = Td),
                (K = 'onPointerLeave'),
                (D = 'onPointerEnter'),
                (C = 'pointer')),
              (Ue = H == null ? U : Fi(H)),
              (N = pe == null ? U : Fi(pe)),
              (U = new fe(K, C + 'leave', H, i, Q)),
              (U.target = Ue),
              (U.relatedTarget = N),
              (K = null),
              Ba(Q) === L &&
                ((fe = new fe(D, C + 'enter', pe, i, Q)),
                (fe.target = N),
                (fe.relatedTarget = Ue),
                (K = fe)),
              (Ue = K),
              H && pe)
            )
              t: {
                for (fe = H, D = pe, C = 0, N = fe; N; N = bi(N)) C++;
                for (N = 0, K = D; K; K = bi(K)) N++;
                for (; 0 < C - N; ) (fe = bi(fe)), C--;
                for (; 0 < N - C; ) (D = bi(D)), N--;
                for (; C--; ) {
                  if (fe === D || (D !== null && fe === D.alternate)) break t;
                  (fe = bi(fe)), (D = bi(D));
                }
                fe = null;
              }
            else fe = null;
            H !== null && gm(Z, U, H, fe, !1),
              pe !== null && Ue !== null && gm(Z, Ue, pe, fe, !0);
          }
        }
        e: {
          if (
            ((U = L ? Fi(L) : window),
            (H = U.nodeName && U.nodeName.toLowerCase()),
            H === 'select' || (H === 'input' && U.type === 'file'))
          )
            var ne = Ud;
          else if (Ld(U))
            if (jd) ne = lS;
            else {
              ne = rS;
              var Ee = iS;
            }
          else
            (H = U.nodeName),
              !H ||
              H.toLowerCase() !== 'input' ||
              (U.type !== 'checkbox' && U.type !== 'radio')
                ? L && To(L.elementType) && (ne = Ud)
                : (ne = sS);
          if (ne && (ne = ne(e, L))) {
            zd(Z, ne, i, Q);
            break e;
          }
          Ee && Ee(e, U, L),
            e === 'focusout' &&
              L &&
              U.type === 'number' &&
              L.memoizedProps.value != null &&
              Ao(U, 'number', U.value);
        }
        switch (((Ee = L ? Fi(L) : window), e)) {
          case 'focusin':
            (Ld(Ee) || Ee.contentEditable === 'true') &&
              ((Za = Ee), (Po = L), (Wi = null));
            break;
          case 'focusout':
            Wi = Po = Za = null;
            break;
          case 'mousedown':
            Go = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (Go = !1), Fd(Z, i, Q);
            break;
          case 'selectionchange':
            if (uS) break;
          case 'keydown':
          case 'keyup':
            Fd(Z, i, Q);
        }
        var le;
        if (ko)
          e: {
            switch (e) {
              case 'compositionstart':
                var he = 'onCompositionStart';
                break e;
              case 'compositionend':
                he = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                he = 'onCompositionUpdate';
                break e;
            }
            he = void 0;
          }
        else
          Xa
            ? _d(e, i) && (he = 'onCompositionEnd')
            : e === 'keydown' &&
              i.keyCode === 229 &&
              (he = 'onCompositionStart');
        he &&
          (Cd &&
            i.locale !== 'ko' &&
            (Xa || he !== 'onCompositionStart'
              ? he === 'onCompositionEnd' && Xa && (le = Ed())
              : ((jn = Q),
                (No = 'value' in jn ? jn.value : jn.textContent),
                (Xa = !0))),
          (Ee = ul(L, he)),
          0 < Ee.length &&
            ((he = new Ad(he, e, null, i, Q)),
            Z.push({ event: he, listeners: Ee }),
            le
              ? (he.data = le)
              : ((le = Nd(i)), le !== null && (he.data = le)))),
          (le = W0 ? eS(e, i) : tS(e, i)) &&
            ((he = ul(L, 'onBeforeInput')),
            0 < he.length &&
              ((Ee = new Ad('onBeforeInput', 'beforeinput', null, i, Q)),
              Z.push({ event: Ee, listeners: he }),
              (Ee.data = le))),
          QS(Z, e, L, i, Q);
      }
      pm(Z, t);
    });
  }
  function Tr(e, t, i) {
    return { instance: e, listener: t, currentTarget: i };
  }
  function ul(e, t) {
    for (var i = t + 'Capture', s = []; e !== null; ) {
      var u = e,
        f = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          f === null ||
          ((u = Qi(e, i)),
          u != null && s.unshift(Tr(e, u, f)),
          (u = Qi(e, t)),
          u != null && s.push(Tr(e, u, f))),
        e.tag === 3)
      )
        return s;
      e = e.return;
    }
    return [];
  }
  function bi(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function gm(e, t, i, s, u) {
    for (var f = t._reactName, y = []; i !== null && i !== s; ) {
      var b = i,
        A = b.alternate,
        L = b.stateNode;
      if (((b = b.tag), A !== null && A === s)) break;
      (b !== 5 && b !== 26 && b !== 27) ||
        L === null ||
        ((A = L),
        u
          ? ((L = Qi(i, f)), L != null && y.unshift(Tr(i, L, A)))
          : u || ((L = Qi(i, f)), L != null && y.push(Tr(i, L, A)))),
        (i = i.return);
    }
    y.length !== 0 && e.push({ event: t, listeners: y });
  }
  var ZS = /\r\n?/g,
    $S = /\u0000|\uFFFD/g;
  function ym(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        ZS,
        `
`,
      )
      .replace($S, '');
  }
  function vm(e, t) {
    return (t = ym(t)), ym(e) === t;
  }
  function cl() {}
  function ze(e, t, i, s, u, f) {
    switch (i) {
      case 'children':
        typeof s == 'string'
          ? t === 'body' || (t === 'textarea' && s === '') || Qa(e, s)
          : (typeof s == 'number' || typeof s == 'bigint') &&
            t !== 'body' &&
            Qa(e, '' + s);
        break;
      case 'className':
        ms(e, 'class', s);
        break;
      case 'tabIndex':
        ms(e, 'tabindex', s);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        ms(e, i, s);
        break;
      case 'style':
        Sd(e, s, f);
        break;
      case 'data':
        if (t !== 'object') {
          ms(e, 'data', s);
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
        (s = vs('' + s)), e.setAttribute(i, s);
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
              ? (t !== 'input' && ze(e, t, 'name', u.name, u, null),
                ze(e, t, 'formEncType', u.formEncType, u, null),
                ze(e, t, 'formMethod', u.formMethod, u, null),
                ze(e, t, 'formTarget', u.formTarget, u, null))
              : (ze(e, t, 'encType', u.encType, u, null),
                ze(e, t, 'method', u.method, u, null),
                ze(e, t, 'target', u.target, u, null)));
        if (s == null || typeof s == 'symbol' || typeof s == 'boolean') {
          e.removeAttribute(i);
          break;
        }
        (s = vs('' + s)), e.setAttribute(i, s);
        break;
      case 'onClick':
        s != null && (e.onclick = cl);
        break;
      case 'onScroll':
        s != null && Re('scroll', e);
        break;
      case 'onScrollEnd':
        s != null && Re('scrollend', e);
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
        (i = vs('' + s)),
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
        Re('beforetoggle', e), Re('toggle', e), ps(e, 'popover', s);
        break;
      case 'xlinkActuate':
        pn(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', s);
        break;
      case 'xlinkArcrole':
        pn(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', s);
        break;
      case 'xlinkRole':
        pn(e, 'http://www.w3.org/1999/xlink', 'xlink:role', s);
        break;
      case 'xlinkShow':
        pn(e, 'http://www.w3.org/1999/xlink', 'xlink:show', s);
        break;
      case 'xlinkTitle':
        pn(e, 'http://www.w3.org/1999/xlink', 'xlink:title', s);
        break;
      case 'xlinkType':
        pn(e, 'http://www.w3.org/1999/xlink', 'xlink:type', s);
        break;
      case 'xmlBase':
        pn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', s);
        break;
      case 'xmlLang':
        pn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', s);
        break;
      case 'xmlSpace':
        pn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', s);
        break;
      case 'is':
        ps(e, 'is', s);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < i.length) ||
          (i[0] !== 'o' && i[0] !== 'O') ||
          (i[1] !== 'n' && i[1] !== 'N')) &&
          ((i = A0.get(i) || i), ps(e, i, s));
    }
  }
  function fc(e, t, i, s, u, f) {
    switch (i) {
      case 'style':
        Sd(e, s, f);
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
          ? Qa(e, s)
          : (typeof s == 'number' || typeof s == 'bigint') && Qa(e, '' + s);
        break;
      case 'onScroll':
        s != null && Re('scroll', e);
        break;
      case 'onScrollEnd':
        s != null && Re('scrollend', e);
        break;
      case 'onClick':
        s != null && (e.onclick = cl);
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
        if (!ud.hasOwnProperty(i))
          e: {
            if (
              i[0] === 'o' &&
              i[1] === 'n' &&
              ((u = i.endsWith('Capture')),
              (t = i.slice(2, u ? i.length - 7 : void 0)),
              (f = e[ht] || null),
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
                : ps(e, i, s);
          }
    }
  }
  function nt(e, t, i) {
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
        Re('error', e), Re('load', e);
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
                  ze(e, t, f, y, i, null);
              }
          }
        u && ze(e, t, 'srcSet', i.srcSet, i, null),
          s && ze(e, t, 'src', i.src, i, null);
        return;
      case 'input':
        Re('invalid', e);
        var b = (f = y = u = null),
          A = null,
          L = null;
        for (s in i)
          if (i.hasOwnProperty(s)) {
            var Q = i[s];
            if (Q != null)
              switch (s) {
                case 'name':
                  u = Q;
                  break;
                case 'type':
                  y = Q;
                  break;
                case 'checked':
                  A = Q;
                  break;
                case 'defaultChecked':
                  L = Q;
                  break;
                case 'value':
                  f = Q;
                  break;
                case 'defaultValue':
                  b = Q;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (Q != null) throw Error(l(137, t));
                  break;
                default:
                  ze(e, t, s, Q, i, null);
              }
          }
        gd(e, f, b, A, L, y, u, !1), gs(e);
        return;
      case 'select':
        Re('invalid', e), (s = y = f = null);
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
                ze(e, t, u, b, i, null);
            }
        (t = f),
          (i = y),
          (e.multiple = !!s),
          t != null ? Fa(e, !!s, t, !1) : i != null && Fa(e, !!s, i, !0);
        return;
      case 'textarea':
        Re('invalid', e), (f = u = s = null);
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
                ze(e, t, y, b, i, null);
            }
        vd(e, s, u, f), gs(e);
        return;
      case 'option':
        for (A in i)
          if (i.hasOwnProperty(A) && ((s = i[A]), s != null))
            switch (A) {
              case 'selected':
                e.selected =
                  s && typeof s != 'function' && typeof s != 'symbol';
                break;
              default:
                ze(e, t, A, s, i, null);
            }
        return;
      case 'dialog':
        Re('beforetoggle', e), Re('toggle', e), Re('cancel', e), Re('close', e);
        break;
      case 'iframe':
      case 'object':
        Re('load', e);
        break;
      case 'video':
      case 'audio':
        for (s = 0; s < Ar.length; s++) Re(Ar[s], e);
        break;
      case 'image':
        Re('error', e), Re('load', e);
        break;
      case 'details':
        Re('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        Re('error', e), Re('load', e);
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
        for (L in i)
          if (i.hasOwnProperty(L) && ((s = i[L]), s != null))
            switch (L) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(l(137, t));
              default:
                ze(e, t, L, s, i, null);
            }
        return;
      default:
        if (To(t)) {
          for (Q in i)
            i.hasOwnProperty(Q) &&
              ((s = i[Q]), s !== void 0 && fc(e, t, Q, s, i, void 0));
          return;
        }
    }
    for (b in i)
      i.hasOwnProperty(b) && ((s = i[b]), s != null && ze(e, t, b, s, i, null));
  }
  function IS(e, t, i, s) {
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
          A = null,
          L = null,
          Q = null;
        for (H in i) {
          var Z = i[H];
          if (i.hasOwnProperty(H) && Z != null)
            switch (H) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                A = Z;
              default:
                s.hasOwnProperty(H) || ze(e, t, H, null, s, Z);
            }
        }
        for (var U in s) {
          var H = s[U];
          if (((Z = i[U]), s.hasOwnProperty(U) && (H != null || Z != null)))
            switch (U) {
              case 'type':
                f = H;
                break;
              case 'name':
                u = H;
                break;
              case 'checked':
                L = H;
                break;
              case 'defaultChecked':
                Q = H;
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
                H !== Z && ze(e, t, U, H, s, Z);
            }
        }
        Ro(e, y, b, A, L, Q, f, u);
        return;
      case 'select':
        H = y = b = U = null;
        for (f in i)
          if (((A = i[f]), i.hasOwnProperty(f) && A != null))
            switch (f) {
              case 'value':
                break;
              case 'multiple':
                H = A;
              default:
                s.hasOwnProperty(f) || ze(e, t, f, null, s, A);
            }
        for (u in s)
          if (
            ((f = s[u]),
            (A = i[u]),
            s.hasOwnProperty(u) && (f != null || A != null))
          )
            switch (u) {
              case 'value':
                U = f;
                break;
              case 'defaultValue':
                b = f;
                break;
              case 'multiple':
                y = f;
              default:
                f !== A && ze(e, t, u, f, s, A);
            }
        (t = b),
          (i = y),
          (s = H),
          U != null
            ? Fa(e, !!i, U, !1)
            : !!s != !!i &&
              (t != null ? Fa(e, !!i, t, !0) : Fa(e, !!i, i ? [] : '', !1));
        return;
      case 'textarea':
        H = U = null;
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
                ze(e, t, b, null, s, u);
            }
        for (y in s)
          if (
            ((u = s[y]),
            (f = i[y]),
            s.hasOwnProperty(y) && (u != null || f != null))
          )
            switch (y) {
              case 'value':
                U = u;
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
                u !== f && ze(e, t, y, u, s, f);
            }
        yd(e, U, H);
        return;
      case 'option':
        for (var pe in i)
          if (
            ((U = i[pe]),
            i.hasOwnProperty(pe) && U != null && !s.hasOwnProperty(pe))
          )
            switch (pe) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                ze(e, t, pe, null, s, U);
            }
        for (A in s)
          if (
            ((U = s[A]),
            (H = i[A]),
            s.hasOwnProperty(A) && U !== H && (U != null || H != null))
          )
            switch (A) {
              case 'selected':
                e.selected =
                  U && typeof U != 'function' && typeof U != 'symbol';
                break;
              default:
                ze(e, t, A, U, s, H);
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
        for (var fe in i)
          (U = i[fe]),
            i.hasOwnProperty(fe) &&
              U != null &&
              !s.hasOwnProperty(fe) &&
              ze(e, t, fe, null, s, U);
        for (L in s)
          if (
            ((U = s[L]),
            (H = i[L]),
            s.hasOwnProperty(L) && U !== H && (U != null || H != null))
          )
            switch (L) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (U != null) throw Error(l(137, t));
                break;
              default:
                ze(e, t, L, U, s, H);
            }
        return;
      default:
        if (To(t)) {
          for (var Ue in i)
            (U = i[Ue]),
              i.hasOwnProperty(Ue) &&
                U !== void 0 &&
                !s.hasOwnProperty(Ue) &&
                fc(e, t, Ue, void 0, s, U);
          for (Q in s)
            (U = s[Q]),
              (H = i[Q]),
              !s.hasOwnProperty(Q) ||
                U === H ||
                (U === void 0 && H === void 0) ||
                fc(e, t, Q, U, s, H);
          return;
        }
    }
    for (var D in i)
      (U = i[D]),
        i.hasOwnProperty(D) &&
          U != null &&
          !s.hasOwnProperty(D) &&
          ze(e, t, D, null, s, U);
    for (Z in s)
      (U = s[Z]),
        (H = i[Z]),
        !s.hasOwnProperty(Z) ||
          U === H ||
          (U == null && H == null) ||
          ze(e, t, Z, U, s, H);
  }
  var dc = null,
    hc = null;
  function fl(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function bm(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function Sm(e, t) {
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
  function pc(e, t) {
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
  var mc = null;
  function JS() {
    var e = window.event;
    return e && e.type === 'popstate'
      ? e === mc
        ? !1
        : ((mc = e), !0)
      : ((mc = null), !1);
  }
  var xm = typeof setTimeout == 'function' ? setTimeout : void 0,
    WS = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    wm = typeof Promise == 'function' ? Promise : void 0,
    ex =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof wm < 'u'
          ? function (e) {
              return wm.resolve(null).then(e).catch(tx);
            }
          : xm;
  function tx(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Jn(e) {
    return e === 'head';
  }
  function Em(e, t) {
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
            if ((i & 1 && Cr(y.documentElement), i & 2 && Cr(y.body), i & 4))
              for (i = y.head, Cr(i), y = i.firstChild; y; ) {
                var b = y.nextSibling,
                  A = y.nodeName;
                y[Vi] ||
                  A === 'SCRIPT' ||
                  A === 'STYLE' ||
                  (A === 'LINK' && y.rel.toLowerCase() === 'stylesheet') ||
                  i.removeChild(y),
                  (y = b);
              }
          }
          if (u === 0) {
            e.removeChild(f), jr(t);
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
    jr(t);
  }
  function gc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var i = t;
      switch (((t = t.nextSibling), i.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          gc(i), xo(i);
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
  function nx(e, t, i, s) {
    for (; e.nodeType === 1; ) {
      var u = i;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!s && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (s) {
        if (!e[Vi])
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
      if (((e = Kt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function ax(e, t, i) {
    if (t === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') &&
          !i) ||
        ((e = Kt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function yc(e) {
    return (
      e.data === '$!' ||
      (e.data === '$?' && e.ownerDocument.readyState === 'complete')
    );
  }
  function ix(e, t) {
    var i = e.ownerDocument;
    if (e.data !== '$?' || i.readyState === 'complete') t();
    else {
      var s = function () {
        t(), i.removeEventListener('DOMContentLoaded', s);
      };
      i.addEventListener('DOMContentLoaded', s), (e._reactRetry = s);
    }
  }
  function Kt(e) {
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
  var vc = null;
  function Om(e) {
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
  function Rm(e, t, i) {
    switch (((t = fl(i)), e)) {
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
  function Cr(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    xo(e);
  }
  var Pt = new Map(),
    Am = new Set();
  function dl(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var Cn = X.d;
  X.d = { f: rx, r: sx, D: lx, C: ox, L: ux, m: cx, X: dx, S: fx, M: hx };
  function rx() {
    var e = Cn.f(),
      t = al();
    return e || t;
  }
  function sx(e) {
    var t = qa(e);
    t !== null && t.tag === 5 && t.type === 'form' ? Yh(t) : Cn.r(e);
  }
  var Si = typeof document > 'u' ? null : document;
  function Tm(e, t, i) {
    var s = Si;
    if (s && typeof t == 'string' && t) {
      var u = zt(t);
      (u = 'link[rel="' + e + '"][href="' + u + '"]'),
        typeof i == 'string' && (u += '[crossorigin="' + i + '"]'),
        Am.has(u) ||
          (Am.add(u),
          (e = { rel: e, crossOrigin: i, href: t }),
          s.querySelector(u) === null &&
            ((t = s.createElement('link')),
            nt(t, 'link', e),
            $e(t),
            s.head.appendChild(t)));
    }
  }
  function lx(e) {
    Cn.D(e), Tm('dns-prefetch', e, null);
  }
  function ox(e, t) {
    Cn.C(e, t), Tm('preconnect', e, t);
  }
  function ux(e, t, i) {
    Cn.L(e, t, i);
    var s = Si;
    if (s && e && t) {
      var u = 'link[rel="preload"][as="' + zt(t) + '"]';
      t === 'image' && i && i.imageSrcSet
        ? ((u += '[imagesrcset="' + zt(i.imageSrcSet) + '"]'),
          typeof i.imageSizes == 'string' &&
            (u += '[imagesizes="' + zt(i.imageSizes) + '"]'))
        : (u += '[href="' + zt(e) + '"]');
      var f = u;
      switch (t) {
        case 'style':
          f = xi(e);
          break;
        case 'script':
          f = wi(e);
      }
      Pt.has(f) ||
        ((e = g(
          {
            rel: 'preload',
            href: t === 'image' && i && i.imageSrcSet ? void 0 : e,
            as: t,
          },
          i,
        )),
        Pt.set(f, e),
        s.querySelector(u) !== null ||
          (t === 'style' && s.querySelector(Mr(f))) ||
          (t === 'script' && s.querySelector(Dr(f))) ||
          ((t = s.createElement('link')),
          nt(t, 'link', e),
          $e(t),
          s.head.appendChild(t)));
    }
  }
  function cx(e, t) {
    Cn.m(e, t);
    var i = Si;
    if (i && e) {
      var s = t && typeof t.as == 'string' ? t.as : 'script',
        u =
          'link[rel="modulepreload"][as="' + zt(s) + '"][href="' + zt(e) + '"]',
        f = u;
      switch (s) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          f = wi(e);
      }
      if (
        !Pt.has(f) &&
        ((e = g({ rel: 'modulepreload', href: e }, t)),
        Pt.set(f, e),
        i.querySelector(u) === null)
      ) {
        switch (s) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (i.querySelector(Dr(f))) return;
        }
        (s = i.createElement('link')),
          nt(s, 'link', e),
          $e(s),
          i.head.appendChild(s);
      }
    }
  }
  function fx(e, t, i) {
    Cn.S(e, t, i);
    var s = Si;
    if (s && e) {
      var u = Pa(s).hoistableStyles,
        f = xi(e);
      t = t || 'default';
      var y = u.get(f);
      if (!y) {
        var b = { loading: 0, preload: null };
        if ((y = s.querySelector(Mr(f)))) b.loading = 5;
        else {
          (e = g({ rel: 'stylesheet', href: e, 'data-precedence': t }, i)),
            (i = Pt.get(f)) && bc(e, i);
          var A = (y = s.createElement('link'));
          $e(A),
            nt(A, 'link', e),
            (A._p = new Promise(function (L, Q) {
              (A.onload = L), (A.onerror = Q);
            })),
            A.addEventListener('load', function () {
              b.loading |= 1;
            }),
            A.addEventListener('error', function () {
              b.loading |= 2;
            }),
            (b.loading |= 4),
            hl(y, t, s);
        }
        (y = { type: 'stylesheet', instance: y, count: 1, state: b }),
          u.set(f, y);
      }
    }
  }
  function dx(e, t) {
    Cn.X(e, t);
    var i = Si;
    if (i && e) {
      var s = Pa(i).hoistableScripts,
        u = wi(e),
        f = s.get(u);
      f ||
        ((f = i.querySelector(Dr(u))),
        f ||
          ((e = g({ src: e, async: !0 }, t)),
          (t = Pt.get(u)) && Sc(e, t),
          (f = i.createElement('script')),
          $e(f),
          nt(f, 'link', e),
          i.head.appendChild(f)),
        (f = { type: 'script', instance: f, count: 1, state: null }),
        s.set(u, f));
    }
  }
  function hx(e, t) {
    Cn.M(e, t);
    var i = Si;
    if (i && e) {
      var s = Pa(i).hoistableScripts,
        u = wi(e),
        f = s.get(u);
      f ||
        ((f = i.querySelector(Dr(u))),
        f ||
          ((e = g({ src: e, async: !0, type: 'module' }, t)),
          (t = Pt.get(u)) && Sc(e, t),
          (f = i.createElement('script')),
          $e(f),
          nt(f, 'link', e),
          i.head.appendChild(f)),
        (f = { type: 'script', instance: f, count: 1, state: null }),
        s.set(u, f));
    }
  }
  function Cm(e, t, i, s) {
    var u = (u = oe.current) ? dl(u) : null;
    if (!u) throw Error(l(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof i.precedence == 'string' && typeof i.href == 'string'
          ? ((t = xi(i.href)),
            (i = Pa(u).hoistableStyles),
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
          e = xi(i.href);
          var f = Pa(u).hoistableStyles,
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
              (f = u.querySelector(Mr(e))) &&
                !f._p &&
                ((y.instance = f), (y.state.loading = 5)),
              Pt.has(e) ||
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
                Pt.set(e, i),
                f || px(u, e, i, y.state))),
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
            ? ((t = wi(i)),
              (i = Pa(u).hoistableScripts),
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
  function xi(e) {
    return 'href="' + zt(e) + '"';
  }
  function Mr(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function Mm(e) {
    return g({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function px(e, t, i, s) {
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
        nt(t, 'link', i),
        $e(t),
        e.head.appendChild(t));
  }
  function wi(e) {
    return '[src="' + zt(e) + '"]';
  }
  function Dr(e) {
    return 'script[async]' + e;
  }
  function Dm(e, t, i) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var s = e.querySelector('style[data-href~="' + zt(i.href) + '"]');
          if (s) return (t.instance = s), $e(s), s;
          var u = g({}, i, {
            'data-href': i.href,
            'data-precedence': i.precedence,
            href: null,
            precedence: null,
          });
          return (
            (s = (e.ownerDocument || e).createElement('style')),
            $e(s),
            nt(s, 'style', u),
            hl(s, i.precedence, e),
            (t.instance = s)
          );
        case 'stylesheet':
          u = xi(i.href);
          var f = e.querySelector(Mr(u));
          if (f) return (t.state.loading |= 4), (t.instance = f), $e(f), f;
          (s = Mm(i)),
            (u = Pt.get(u)) && bc(s, u),
            (f = (e.ownerDocument || e).createElement('link')),
            $e(f);
          var y = f;
          return (
            (y._p = new Promise(function (b, A) {
              (y.onload = b), (y.onerror = A);
            })),
            nt(f, 'link', s),
            (t.state.loading |= 4),
            hl(f, i.precedence, e),
            (t.instance = f)
          );
        case 'script':
          return (
            (f = wi(i.src)),
            (u = e.querySelector(Dr(f)))
              ? ((t.instance = u), $e(u), u)
              : ((s = i),
                (u = Pt.get(f)) && ((s = g({}, i)), Sc(s, u)),
                (e = e.ownerDocument || e),
                (u = e.createElement('script')),
                $e(u),
                nt(u, 'link', s),
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
        ((s = t.instance), (t.state.loading |= 4), hl(s, i.precedence, e));
    return t.instance;
  }
  function hl(e, t, i) {
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
  function bc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function Sc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var pl = null;
  function _m(e, t, i) {
    if (pl === null) {
      var s = new Map(),
        u = (pl = new Map());
      u.set(i, s);
    } else (u = pl), (s = u.get(i)), s || ((s = new Map()), u.set(i, s));
    if (s.has(e)) return s;
    for (
      s.set(e, null), i = i.getElementsByTagName(e), u = 0;
      u < i.length;
      u++
    ) {
      var f = i[u];
      if (
        !(
          f[Vi] ||
          f[rt] ||
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
  function Nm(e, t, i) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        i,
        t === 'title' ? e.querySelector('head > title') : null,
      );
  }
  function mx(e, t, i) {
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
  function Lm(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  var _r = null;
  function gx() {}
  function yx(e, t, i) {
    if (_r === null) throw Error(l(475));
    var s = _r;
    if (
      t.type === 'stylesheet' &&
      (typeof i.media != 'string' || matchMedia(i.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var u = xi(i.href),
          f = e.querySelector(Mr(u));
        if (f) {
          (e = f._p),
            e !== null &&
              typeof e == 'object' &&
              typeof e.then == 'function' &&
              (s.count++, (s = ml.bind(s)), e.then(s, s)),
            (t.state.loading |= 4),
            (t.instance = f),
            $e(f);
          return;
        }
        (f = e.ownerDocument || e),
          (i = Mm(i)),
          (u = Pt.get(u)) && bc(i, u),
          (f = f.createElement('link')),
          $e(f);
        var y = f;
        (y._p = new Promise(function (b, A) {
          (y.onload = b), (y.onerror = A);
        })),
          nt(f, 'link', i),
          (t.instance = f);
      }
      s.stylesheets === null && (s.stylesheets = new Map()),
        s.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (s.count++,
          (t = ml.bind(s)),
          e.addEventListener('load', t),
          e.addEventListener('error', t));
    }
  }
  function vx() {
    if (_r === null) throw Error(l(475));
    var e = _r;
    return (
      e.stylesheets && e.count === 0 && xc(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var i = setTimeout(function () {
              if ((e.stylesheets && xc(e, e.stylesheets), e.unsuspend)) {
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
  function ml() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) xc(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var gl = null;
  function xc(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (gl = new Map()),
        t.forEach(bx, e),
        (gl = null),
        ml.call(e));
  }
  function bx(e, t) {
    if (!(t.state.loading & 4)) {
      var i = gl.get(e);
      if (i) var s = i.get(null);
      else {
        (i = new Map()), gl.set(e, i);
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
        (s = ml.bind(this)),
        u.addEventListener('load', s),
        u.addEventListener('error', s),
        f
          ? f.parentNode.insertBefore(u, f.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(u, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var Nr = {
    $$typeof: j,
    Provider: null,
    Consumer: null,
    _currentValue: z,
    _currentValue2: z,
    _threadCount: 0,
  };
  function Sx(e, t, i, s, u, f, y, b) {
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
      (this.expirationTimes = yo(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = yo(0)),
      (this.hiddenUpdates = yo(null)),
      (this.identifierPrefix = s),
      (this.onUncaughtError = u),
      (this.onCaughtError = f),
      (this.onRecoverableError = y),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = b),
      (this.incompleteTransitions = new Map());
  }
  function zm(e, t, i, s, u, f, y, b, A, L, Q, Z) {
    return (
      (e = new Sx(e, t, i, y, b, A, L, Z)),
      (t = 1),
      f === !0 && (t |= 24),
      (f = Rt(3, null, null, t)),
      (e.current = f),
      (f.stateNode = e),
      (t = nu()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (f.memoizedState = { element: s, isDehydrated: i, cache: t }),
      su(f),
      e
    );
  }
  function Um(e) {
    return e ? ((e = Wa), e) : Wa;
  }
  function jm(e, t, i, s, u, f) {
    (u = Um(u)),
      s.context === null ? (s.context = u) : (s.pendingContext = u),
      (s = Bn(t)),
      (s.payload = { element: i }),
      (f = f === void 0 ? null : f),
      f !== null && (s.callback = f),
      (i = qn(e, s, t)),
      i !== null && (Dt(i, e, t), or(i, e, t));
  }
  function km(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < t ? i : t;
    }
  }
  function wc(e, t) {
    km(e, t), (e = e.alternate) && km(e, t);
  }
  function Hm(e) {
    if (e.tag === 13) {
      var t = Ja(e, 67108864);
      t !== null && Dt(t, e, 67108864), wc(e, 67108864);
    }
  }
  var yl = !0;
  function xx(e, t, i, s) {
    var u = M.T;
    M.T = null;
    var f = X.p;
    try {
      (X.p = 2), Ec(e, t, i, s);
    } finally {
      (X.p = f), (M.T = u);
    }
  }
  function wx(e, t, i, s) {
    var u = M.T;
    M.T = null;
    var f = X.p;
    try {
      (X.p = 8), Ec(e, t, i, s);
    } finally {
      (X.p = f), (M.T = u);
    }
  }
  function Ec(e, t, i, s) {
    if (yl) {
      var u = Oc(s);
      if (u === null) cc(e, t, s, vl, i), qm(e, s);
      else if (Ox(u, e, t, i, s)) s.stopPropagation();
      else if ((qm(e, s), t & 4 && -1 < Ex.indexOf(e))) {
        for (; u !== null; ) {
          var f = qa(u);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (((f = f.stateNode), f.current.memoizedState.isDehydrated)) {
                  var y = ca(f.pendingLanes);
                  if (y !== 0) {
                    var b = f;
                    for (b.pendingLanes |= 2, b.entangledLanes |= 2; y; ) {
                      var A = 1 << (31 - Et(y));
                      (b.entanglements[1] |= A), (y &= ~A);
                    }
                    sn(f), (_e & 6) === 0 && ((tl = en() + 500), Rr(0));
                  }
                }
                break;
              case 13:
                (b = Ja(f, 2)), b !== null && Dt(b, f, 2), al(), wc(f, 2);
            }
          if (((f = Oc(s)), f === null && cc(e, t, s, vl, i), f === u)) break;
          u = f;
        }
        u !== null && s.stopPropagation();
      } else cc(e, t, s, null, i);
    }
  }
  function Oc(e) {
    return (e = Mo(e)), Rc(e);
  }
  var vl = null;
  function Rc(e) {
    if (((vl = null), (e = Ba(e)), e !== null)) {
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
    return (vl = e), null;
  }
  function Bm(e) {
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
        switch (o0()) {
          case Wf:
            return 2;
          case ed:
            return 8;
          case cs:
          case u0:
            return 32;
          case td:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ac = !1,
    Wn = null,
    ea = null,
    ta = null,
    Lr = new Map(),
    zr = new Map(),
    na = [],
    Ex =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' ',
      );
  function qm(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Wn = null;
        break;
      case 'dragenter':
      case 'dragleave':
        ea = null;
        break;
      case 'mouseover':
      case 'mouseout':
        ta = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Lr.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        zr.delete(t.pointerId);
    }
  }
  function Ur(e, t, i, s, u, f) {
    return e === null || e.nativeEvent !== f
      ? ((e = {
          blockedOn: t,
          domEventName: i,
          eventSystemFlags: s,
          nativeEvent: f,
          targetContainers: [u],
        }),
        t !== null && ((t = qa(t)), t !== null && Hm(t)),
        e)
      : ((e.eventSystemFlags |= s),
        (t = e.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        e);
  }
  function Ox(e, t, i, s, u) {
    switch (t) {
      case 'focusin':
        return (Wn = Ur(Wn, e, t, i, s, u)), !0;
      case 'dragenter':
        return (ea = Ur(ea, e, t, i, s, u)), !0;
      case 'mouseover':
        return (ta = Ur(ta, e, t, i, s, u)), !0;
      case 'pointerover':
        var f = u.pointerId;
        return Lr.set(f, Ur(Lr.get(f) || null, e, t, i, s, u)), !0;
      case 'gotpointercapture':
        return (
          (f = u.pointerId), zr.set(f, Ur(zr.get(f) || null, e, t, i, s, u)), !0
        );
    }
    return !1;
  }
  function Pm(e) {
    var t = Ba(e.target);
    if (t !== null) {
      var i = c(t);
      if (i !== null) {
        if (((t = i.tag), t === 13)) {
          if (((t = d(i)), t !== null)) {
            (e.blockedOn = t),
              y0(e.priority, function () {
                if (i.tag === 13) {
                  var s = Mt();
                  s = vo(s);
                  var u = Ja(i, s);
                  u !== null && Dt(u, i, s), wc(i, s);
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
  function bl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var i = Oc(e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var s = new i.constructor(i.type, i);
        (Co = s), i.target.dispatchEvent(s), (Co = null);
      } else return (t = qa(i)), t !== null && Hm(t), (e.blockedOn = i), !1;
      t.shift();
    }
    return !0;
  }
  function Gm(e, t, i) {
    bl(e) && i.delete(t);
  }
  function Rx() {
    (Ac = !1),
      Wn !== null && bl(Wn) && (Wn = null),
      ea !== null && bl(ea) && (ea = null),
      ta !== null && bl(ta) && (ta = null),
      Lr.forEach(Gm),
      zr.forEach(Gm);
  }
  function Sl(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Ac ||
        ((Ac = !0),
        n.unstable_scheduleCallback(n.unstable_NormalPriority, Rx)));
  }
  var xl = null;
  function Vm(e) {
    xl !== e &&
      ((xl = e),
      n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
        xl === e && (xl = null);
        for (var t = 0; t < e.length; t += 3) {
          var i = e[t],
            s = e[t + 1],
            u = e[t + 2];
          if (typeof s != 'function') {
            if (Rc(s || i) === null) continue;
            break;
          }
          var f = qa(i);
          f !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Ru(f, { pending: !0, data: u, method: i.method, action: s }, s, u));
        }
      }));
  }
  function jr(e) {
    function t(A) {
      return Sl(A, e);
    }
    Wn !== null && Sl(Wn, e),
      ea !== null && Sl(ea, e),
      ta !== null && Sl(ta, e),
      Lr.forEach(t),
      zr.forEach(t);
    for (var i = 0; i < na.length; i++) {
      var s = na[i];
      s.blockedOn === e && (s.blockedOn = null);
    }
    for (; 0 < na.length && ((i = na[0]), i.blockedOn === null); )
      Pm(i), i.blockedOn === null && na.shift();
    if (((i = (e.ownerDocument || e).$$reactFormReplay), i != null))
      for (s = 0; s < i.length; s += 3) {
        var u = i[s],
          f = i[s + 1],
          y = u[ht] || null;
        if (typeof f == 'function') y || Vm(i);
        else if (y) {
          var b = null;
          if (f && f.hasAttribute('formAction')) {
            if (((u = f), (y = f[ht] || null))) b = y.formAction;
            else if (Rc(u) !== null) continue;
          } else b = y.action;
          typeof b == 'function' ? (i[s + 1] = b) : (i.splice(s, 3), (s -= 3)),
            Vm(i);
        }
      }
  }
  function Tc(e) {
    this._internalRoot = e;
  }
  (wl.prototype.render = Tc.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(l(409));
      var i = t.current,
        s = Mt();
      jm(i, s, e, t, null, null);
    }),
    (wl.prototype.unmount = Tc.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          jm(e.current, 2, null, e, null, null), al(), (t[Ha] = null);
        }
      });
  function wl(e) {
    this._internalRoot = e;
  }
  wl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = sd();
      e = { blockedOn: null, target: e, priority: t };
      for (var i = 0; i < na.length && t !== 0 && t < na[i].priority; i++);
      na.splice(i, 0, e), i === 0 && Pm(e);
    }
  };
  var Fm = a.version;
  if (Fm !== '19.1.1') throw Error(l(527, Fm, '19.1.1'));
  X.findDOMNode = function (e) {
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
  var Ax = {
    bundleType: 0,
    version: '19.1.1',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: M,
    reconcilerVersion: '19.1.1',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var El = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!El.isDisabled && El.supportsFiber)
      try {
        (qi = El.inject(Ax)), (wt = El);
      } catch {}
  }
  return (
    (Hr.createRoot = function (e, t) {
      if (!o(e)) throw Error(l(299));
      var i = !1,
        s = '',
        u = sp,
        f = lp,
        y = op,
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
        (t = zm(e, 1, !1, null, null, i, s, u, f, y, b, null)),
        (e[Ha] = t.current),
        uc(e),
        new Tc(t)
      );
    }),
    (Hr.hydrateRoot = function (e, t, i) {
      if (!o(e)) throw Error(l(299));
      var s = !1,
        u = '',
        f = sp,
        y = lp,
        b = op,
        A = null,
        L = null;
      return (
        i != null &&
          (i.unstable_strictMode === !0 && (s = !0),
          i.identifierPrefix !== void 0 && (u = i.identifierPrefix),
          i.onUncaughtError !== void 0 && (f = i.onUncaughtError),
          i.onCaughtError !== void 0 && (y = i.onCaughtError),
          i.onRecoverableError !== void 0 && (b = i.onRecoverableError),
          i.unstable_transitionCallbacks !== void 0 &&
            (A = i.unstable_transitionCallbacks),
          i.formState !== void 0 && (L = i.formState)),
        (t = zm(e, 1, !0, t, i ?? null, s, u, f, y, b, A, L)),
        (t.context = Um(null)),
        (i = t.current),
        (s = Mt()),
        (s = vo(s)),
        (u = Bn(s)),
        (u.callback = null),
        qn(i, u, s),
        (i = s),
        (t.current.lanes = i),
        Gi(t, i),
        sn(t),
        (e[Ha] = t.current),
        uc(e),
        new wl(t)
      );
    }),
    (Hr.version = '19.1.1'),
    Hr
  );
}
var eg;
function jx() {
  if (eg) return Dc.exports;
  eg = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (a) {
        console.error(a);
      }
  }
  return n(), (Dc.exports = Ux()), Dc.exports;
}
var kx = jx(),
  Wr = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(n) {
      return (
        this.listeners.add(n),
        this.onSubscribe(),
        () => {
          this.listeners.delete(n), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Hx = {
    setTimeout: (n, a) => setTimeout(n, a),
    clearTimeout: (n) => clearTimeout(n),
    setInterval: (n, a) => setInterval(n, a),
    clearInterval: (n) => clearInterval(n),
  },
  Bx = class {
    #e = Hx;
    #t = !1;
    setTimeoutProvider(n) {
      this.#e = n;
    }
    setTimeout(n, a) {
      return this.#e.setTimeout(n, a);
    }
    clearTimeout(n) {
      this.#e.clearTimeout(n);
    }
    setInterval(n, a) {
      return this.#e.setInterval(n, a);
    }
    clearInterval(n) {
      this.#e.clearInterval(n);
    }
  },
  Ma = new Bx();
function qx(n) {
  setTimeout(n, 0);
}
var La = typeof window > 'u' || 'Deno' in globalThis;
function vt() {}
function Px(n, a) {
  return typeof n == 'function' ? n(a) : n;
}
function $c(n) {
  return typeof n == 'number' && n >= 0 && n !== 1 / 0;
}
function Dy(n, a) {
  return Math.max(n + (a || 0) - Date.now(), 0);
}
function sa(n, a) {
  return typeof n == 'function' ? n(a) : n;
}
function Vt(n, a) {
  return typeof n == 'function' ? n(a) : n;
}
function tg(n, a) {
  const {
    type: r = 'all',
    exact: l,
    fetchStatus: o,
    predicate: c,
    queryKey: d,
    stale: h,
  } = n;
  if (d) {
    if (l) {
      if (a.queryHash !== Af(d, a.options)) return !1;
    } else if (!Qr(a.queryKey, d)) return !1;
  }
  if (r !== 'all') {
    const m = a.isActive();
    if ((r === 'active' && !m) || (r === 'inactive' && m)) return !1;
  }
  return !(
    (typeof h == 'boolean' && a.isStale() !== h) ||
    (o && o !== a.state.fetchStatus) ||
    (c && !c(a))
  );
}
function ng(n, a) {
  const { exact: r, status: l, predicate: o, mutationKey: c } = n;
  if (c) {
    if (!a.options.mutationKey) return !1;
    if (r) {
      if (Fr(a.options.mutationKey) !== Fr(c)) return !1;
    } else if (!Qr(a.options.mutationKey, c)) return !1;
  }
  return !((l && a.state.status !== l) || (o && !o(a)));
}
function Af(n, a) {
  return (a?.queryKeyHashFn || Fr)(n);
}
function Fr(n) {
  return JSON.stringify(n, (a, r) =>
    Jc(r)
      ? Object.keys(r)
          .sort()
          .reduce((l, o) => ((l[o] = r[o]), l), {})
      : r,
  );
}
function Qr(n, a) {
  return n === a
    ? !0
    : typeof n != typeof a
      ? !1
      : n && a && typeof n == 'object' && typeof a == 'object'
        ? Object.keys(a).every((r) => Qr(n[r], a[r]))
        : !1;
}
var Gx = Object.prototype.hasOwnProperty;
function _y(n, a) {
  if (n === a) return n;
  const r = ag(n) && ag(a);
  if (!r && !(Jc(n) && Jc(a))) return a;
  const o = (r ? n : Object.keys(n)).length,
    c = r ? a : Object.keys(a),
    d = c.length,
    h = r ? new Array(d) : {};
  let m = 0;
  for (let p = 0; p < d; p++) {
    const g = r ? p : c[p],
      v = n[g],
      x = a[g];
    if (v === x) {
      (h[g] = v), (r ? p < o : Gx.call(n, g)) && m++;
      continue;
    }
    if (
      v === null ||
      x === null ||
      typeof v != 'object' ||
      typeof x != 'object'
    ) {
      h[g] = x;
      continue;
    }
    const O = _y(v, x);
    (h[g] = O), O === v && m++;
  }
  return o === d && m === o ? n : h;
}
function Ic(n, a) {
  if (!a || Object.keys(n).length !== Object.keys(a).length) return !1;
  for (const r in n) if (n[r] !== a[r]) return !1;
  return !0;
}
function ag(n) {
  return Array.isArray(n) && n.length === Object.keys(n).length;
}
function Jc(n) {
  if (!ig(n)) return !1;
  const a = n.constructor;
  if (a === void 0) return !0;
  const r = a.prototype;
  return !(
    !ig(r) ||
    !r.hasOwnProperty('isPrototypeOf') ||
    Object.getPrototypeOf(n) !== Object.prototype
  );
}
function ig(n) {
  return Object.prototype.toString.call(n) === '[object Object]';
}
function Vx(n) {
  return new Promise((a) => {
    Ma.setTimeout(a, n);
  });
}
function Wc(n, a, r) {
  return typeof r.structuralSharing == 'function'
    ? r.structuralSharing(n, a)
    : r.structuralSharing !== !1
      ? _y(n, a)
      : a;
}
function Fx(n, a, r = 0) {
  const l = [...n, a];
  return r && l.length > r ? l.slice(1) : l;
}
function Qx(n, a, r = 0) {
  const l = [a, ...n];
  return r && l.length > r ? l.slice(0, -1) : l;
}
var Tf = Symbol();
function Ny(n, a) {
  return !n.queryFn && a?.initialPromise
    ? () => a.initialPromise
    : !n.queryFn || n.queryFn === Tf
      ? () => Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`))
      : n.queryFn;
}
function Yx(n, a) {
  return typeof n == 'function' ? n(...a) : !!n;
}
var Kx = class extends Wr {
    #e;
    #t;
    #n;
    constructor() {
      super(),
        (this.#n = (n) => {
          if (!La && window.addEventListener) {
            const a = () => n();
            return (
              window.addEventListener('visibilitychange', a, !1),
              () => {
                window.removeEventListener('visibilitychange', a);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(n) {
      (this.#n = n),
        this.#t?.(),
        (this.#t = n((a) => {
          typeof a == 'boolean' ? this.setFocused(a) : this.onFocus();
        }));
    }
    setFocused(n) {
      this.#e !== n && ((this.#e = n), this.onFocus());
    }
    onFocus() {
      const n = this.isFocused();
      this.listeners.forEach((a) => {
        a(n);
      });
    }
    isFocused() {
      return typeof this.#e == 'boolean'
        ? this.#e
        : globalThis.document?.visibilityState !== 'hidden';
    }
  },
  Cf = new Kx();
function ef() {
  let n, a;
  const r = new Promise((o, c) => {
    (n = o), (a = c);
  });
  (r.status = 'pending'), r.catch(() => {});
  function l(o) {
    Object.assign(r, o), delete r.resolve, delete r.reject;
  }
  return (
    (r.resolve = (o) => {
      l({ status: 'fulfilled', value: o }), n(o);
    }),
    (r.reject = (o) => {
      l({ status: 'rejected', reason: o }), a(o);
    }),
    r
  );
}
var Xx = qx;
function Zx() {
  let n = [],
    a = 0,
    r = (h) => {
      h();
    },
    l = (h) => {
      h();
    },
    o = Xx;
  const c = (h) => {
      a
        ? n.push(h)
        : o(() => {
            r(h);
          });
    },
    d = () => {
      const h = n;
      (n = []),
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
      a++;
      try {
        m = h();
      } finally {
        a--, a || d();
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
var at = Zx(),
  $x = class extends Wr {
    #e = !0;
    #t;
    #n;
    constructor() {
      super(),
        (this.#n = (n) => {
          if (!La && window.addEventListener) {
            const a = () => n(!0),
              r = () => n(!1);
            return (
              window.addEventListener('online', a, !1),
              window.addEventListener('offline', r, !1),
              () => {
                window.removeEventListener('online', a),
                  window.removeEventListener('offline', r);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(n) {
      (this.#n = n), this.#t?.(), (this.#t = n(this.setOnline.bind(this)));
    }
    setOnline(n) {
      this.#e !== n &&
        ((this.#e = n),
        this.listeners.forEach((r) => {
          r(n);
        }));
    }
    isOnline() {
      return this.#e;
    }
  },
  Vl = new $x();
function Ix(n) {
  return Math.min(1e3 * 2 ** n, 3e4);
}
function Ly(n) {
  return (n ?? 'online') === 'online' ? Vl.isOnline() : !0;
}
var tf = class extends Error {
  constructor(n) {
    super('CancelledError'),
      (this.revert = n?.revert),
      (this.silent = n?.silent);
  }
};
function zy(n) {
  let a = !1,
    r = 0,
    l;
  const o = ef(),
    c = () => o.status !== 'pending',
    d = (w) => {
      if (!c()) {
        const R = new tf(w);
        x(R), n.onCancel?.(R);
      }
    },
    h = () => {
      a = !0;
    },
    m = () => {
      a = !1;
    },
    p = () =>
      Cf.isFocused() &&
      (n.networkMode === 'always' || Vl.isOnline()) &&
      n.canRun(),
    g = () => Ly(n.networkMode) && n.canRun(),
    v = (w) => {
      c() || (l?.(), o.resolve(w));
    },
    x = (w) => {
      c() || (l?.(), o.reject(w));
    },
    O = () =>
      new Promise((w) => {
        (l = (R) => {
          (c() || p()) && w(R);
        }),
          n.onPause?.();
      }).then(() => {
        (l = void 0), c() || n.onContinue?.();
      }),
    S = () => {
      if (c()) return;
      let w;
      const R = r === 0 ? n.initialPromise : void 0;
      try {
        w = R ?? n.fn();
      } catch (_) {
        w = Promise.reject(_);
      }
      Promise.resolve(w)
        .then(v)
        .catch((_) => {
          if (c()) return;
          const q = n.retry ?? (La ? 0 : 3),
            j = n.retryDelay ?? Ix,
            k = typeof j == 'function' ? j(r, _) : j,
            B =
              q === !0 ||
              (typeof q == 'number' && r < q) ||
              (typeof q == 'function' && q(r, _));
          if (a || !B) {
            x(_);
            return;
          }
          r++,
            n.onFail?.(r, _),
            Vx(k)
              .then(() => (p() ? void 0 : O()))
              .then(() => {
                a ? x(_) : S();
              });
        });
    };
  return {
    promise: o,
    status: () => o.status,
    cancel: d,
    continue: () => (l?.(), o),
    cancelRetry: h,
    continueRetry: m,
    canStart: g,
    start: () => (g() ? S() : O().then(S), o),
  };
}
var Uy = class {
    #e;
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      this.clearGcTimeout(),
        $c(this.gcTime) &&
          (this.#e = Ma.setTimeout(() => {
            this.optionalRemove();
          }, this.gcTime));
    }
    updateGcTime(n) {
      this.gcTime = Math.max(
        this.gcTime || 0,
        n ?? (La ? 1 / 0 : 5 * 60 * 1e3),
      );
    }
    clearGcTimeout() {
      this.#e && (Ma.clearTimeout(this.#e), (this.#e = void 0));
    }
  },
  Jx = class extends Uy {
    #e;
    #t;
    #n;
    #i;
    #a;
    #l;
    #s;
    constructor(n) {
      super(),
        (this.#s = !1),
        (this.#l = n.defaultOptions),
        this.setOptions(n.options),
        (this.observers = []),
        (this.#i = n.client),
        (this.#n = this.#i.getQueryCache()),
        (this.queryKey = n.queryKey),
        (this.queryHash = n.queryHash),
        (this.#e = rg(this.options)),
        (this.state = n.state ?? this.#e),
        this.scheduleGc();
    }
    get meta() {
      return this.options.meta;
    }
    get promise() {
      return this.#a?.promise;
    }
    setOptions(n) {
      if (
        ((this.options = { ...this.#l, ...n }),
        this.updateGcTime(this.options.gcTime),
        this.state && this.state.data === void 0)
      ) {
        const a = rg(this.options);
        a.data !== void 0 &&
          (this.setData(a.data, { updatedAt: a.dataUpdatedAt, manual: !0 }),
          (this.#e = a));
      }
    }
    optionalRemove() {
      !this.observers.length &&
        this.state.fetchStatus === 'idle' &&
        this.#n.remove(this);
    }
    setData(n, a) {
      const r = Wc(this.state.data, n, this.options);
      return (
        this.#r({
          data: r,
          type: 'success',
          dataUpdatedAt: a?.updatedAt,
          manual: a?.manual,
        }),
        r
      );
    }
    setState(n, a) {
      this.#r({ type: 'setState', state: n, setStateOptions: a });
    }
    cancel(n) {
      const a = this.#a?.promise;
      return this.#a?.cancel(n), a ? a.then(vt).catch(vt) : Promise.resolve();
    }
    destroy() {
      super.destroy(), this.cancel({ silent: !0 });
    }
    reset() {
      this.destroy(), this.setState(this.#e);
    }
    isActive() {
      return this.observers.some((n) => Vt(n.options.enabled, this) !== !1);
    }
    isDisabled() {
      return this.getObserversCount() > 0
        ? !this.isActive()
        : this.options.queryFn === Tf ||
            this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStatic() {
      return this.getObserversCount() > 0
        ? this.observers.some((n) => sa(n.options.staleTime, this) === 'static')
        : !1;
    }
    isStale() {
      return this.getObserversCount() > 0
        ? this.observers.some((n) => n.getCurrentResult().isStale)
        : this.state.data === void 0 || this.state.isInvalidated;
    }
    isStaleByTime(n = 0) {
      return this.state.data === void 0
        ? !0
        : n === 'static'
          ? !1
          : this.state.isInvalidated
            ? !0
            : !Dy(this.state.dataUpdatedAt, n);
    }
    onFocus() {
      this.observers
        .find((a) => a.shouldFetchOnWindowFocus())
        ?.refetch({ cancelRefetch: !1 }),
        this.#a?.continue();
    }
    onOnline() {
      this.observers
        .find((a) => a.shouldFetchOnReconnect())
        ?.refetch({ cancelRefetch: !1 }),
        this.#a?.continue();
    }
    addObserver(n) {
      this.observers.includes(n) ||
        (this.observers.push(n),
        this.clearGcTimeout(),
        this.#n.notify({ type: 'observerAdded', query: this, observer: n }));
    }
    removeObserver(n) {
      this.observers.includes(n) &&
        ((this.observers = this.observers.filter((a) => a !== n)),
        this.observers.length ||
          (this.#a &&
            (this.#s ? this.#a.cancel({ revert: !0 }) : this.#a.cancelRetry()),
          this.scheduleGc()),
        this.#n.notify({ type: 'observerRemoved', query: this, observer: n }));
    }
    getObserversCount() {
      return this.observers.length;
    }
    invalidate() {
      this.state.isInvalidated || this.#r({ type: 'invalidate' });
    }
    async fetch(n, a) {
      if (
        this.state.fetchStatus !== 'idle' &&
        this.#a?.status() !== 'rejected'
      ) {
        if (this.state.data !== void 0 && a?.cancelRefetch)
          this.cancel({ silent: !0 });
        else if (this.#a) return this.#a.continueRetry(), this.#a.promise;
      }
      if ((n && this.setOptions(n), !this.options.queryFn)) {
        const h = this.observers.find((m) => m.options.queryFn);
        h && this.setOptions(h.options);
      }
      const r = new AbortController(),
        l = (h) => {
          Object.defineProperty(h, 'signal', {
            enumerable: !0,
            get: () => ((this.#s = !0), r.signal),
          });
        },
        o = () => {
          const h = Ny(this.options, a),
            p = (() => {
              const g = {
                client: this.#i,
                queryKey: this.queryKey,
                meta: this.meta,
              };
              return l(g), g;
            })();
          return (
            (this.#s = !1),
            this.options.persister ? this.options.persister(h, p, this) : h(p)
          );
        },
        d = (() => {
          const h = {
            fetchOptions: a,
            options: this.options,
            queryKey: this.queryKey,
            client: this.#i,
            state: this.state,
            fetchFn: o,
          };
          return l(h), h;
        })();
      this.options.behavior?.onFetch(d, this),
        (this.#t = this.state),
        (this.state.fetchStatus === 'idle' ||
          this.state.fetchMeta !== d.fetchOptions?.meta) &&
          this.#r({ type: 'fetch', meta: d.fetchOptions?.meta }),
        (this.#a = zy({
          initialPromise: a?.initialPromise,
          fn: d.fetchFn,
          onCancel: (h) => {
            h instanceof tf &&
              h.revert &&
              this.setState({ ...this.#t, fetchStatus: 'idle' }),
              r.abort();
          },
          onFail: (h, m) => {
            this.#r({ type: 'failed', failureCount: h, error: m });
          },
          onPause: () => {
            this.#r({ type: 'pause' });
          },
          onContinue: () => {
            this.#r({ type: 'continue' });
          },
          retry: d.options.retry,
          retryDelay: d.options.retryDelay,
          networkMode: d.options.networkMode,
          canRun: () => !0,
        }));
      try {
        const h = await this.#a.start();
        if (h === void 0)
          throw new Error(`${this.queryHash} data is undefined`);
        return (
          this.setData(h),
          this.#n.config.onSuccess?.(h, this),
          this.#n.config.onSettled?.(h, this.state.error, this),
          h
        );
      } catch (h) {
        if (h instanceof tf) {
          if (h.silent) return this.#a.promise;
          if (h.revert) {
            if (this.state.data === void 0) throw h;
            return this.state.data;
          }
        }
        throw (
          (this.#r({ type: 'error', error: h }),
          this.#n.config.onError?.(h, this),
          this.#n.config.onSettled?.(this.state.data, h, this),
          h)
        );
      } finally {
        this.scheduleGc();
      }
    }
    #r(n) {
      const a = (r) => {
        switch (n.type) {
          case 'failed':
            return {
              ...r,
              fetchFailureCount: n.failureCount,
              fetchFailureReason: n.error,
            };
          case 'pause':
            return { ...r, fetchStatus: 'paused' };
          case 'continue':
            return { ...r, fetchStatus: 'fetching' };
          case 'fetch':
            return {
              ...r,
              ...jy(r.data, this.options),
              fetchMeta: n.meta ?? null,
            };
          case 'success':
            const l = {
              ...r,
              data: n.data,
              dataUpdateCount: r.dataUpdateCount + 1,
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
            return (this.#t = n.manual ? l : void 0), l;
          case 'error':
            const o = n.error;
            return {
              ...r,
              error: o,
              errorUpdateCount: r.errorUpdateCount + 1,
              errorUpdatedAt: Date.now(),
              fetchFailureCount: r.fetchFailureCount + 1,
              fetchFailureReason: o,
              fetchStatus: 'idle',
              status: 'error',
            };
          case 'invalidate':
            return { ...r, isInvalidated: !0 };
          case 'setState':
            return { ...r, ...n.state };
        }
      };
      (this.state = a(this.state)),
        at.batch(() => {
          this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            this.#n.notify({ query: this, type: 'updated', action: n });
        });
    }
  };
function jy(n, a) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Ly(a.networkMode) ? 'fetching' : 'paused',
    ...(n === void 0 && { error: null, status: 'pending' }),
  };
}
function rg(n) {
  const a =
      typeof n.initialData == 'function' ? n.initialData() : n.initialData,
    r = a !== void 0,
    l = r
      ? typeof n.initialDataUpdatedAt == 'function'
        ? n.initialDataUpdatedAt()
        : n.initialDataUpdatedAt
      : 0;
  return {
    data: a,
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
var Wx = class extends Wr {
  constructor(n, a) {
    super(),
      (this.options = a),
      (this.#e = n),
      (this.#r = null),
      (this.#s = ef()),
      this.bindMethods(),
      this.setOptions(a);
  }
  #e;
  #t = void 0;
  #n = void 0;
  #i = void 0;
  #a;
  #l;
  #s;
  #r;
  #m;
  #d;
  #h;
  #u;
  #c;
  #o;
  #p = new Set();
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 &&
      (this.#t.addObserver(this),
      sg(this.#t, this.options) ? this.#f() : this.updateResult(),
      this.#b());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return nf(this.#t, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return nf(this.#t, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    (this.listeners = new Set()),
      this.#S(),
      this.#x(),
      this.#t.removeObserver(this);
  }
  setOptions(n) {
    const a = this.options,
      r = this.#t;
    if (
      ((this.options = this.#e.defaultQueryOptions(n)),
      this.options.enabled !== void 0 &&
        typeof this.options.enabled != 'boolean' &&
        typeof this.options.enabled != 'function' &&
        typeof Vt(this.options.enabled, this.#t) != 'boolean')
    )
      throw new Error(
        'Expected enabled to be a boolean or a callback that returns a boolean',
      );
    this.#w(),
      this.#t.setOptions(this.options),
      a._defaulted &&
        !Ic(this.options, a) &&
        this.#e
          .getQueryCache()
          .notify({
            type: 'observerOptionsUpdated',
            query: this.#t,
            observer: this,
          });
    const l = this.hasListeners();
    l && lg(this.#t, r, this.options, a) && this.#f(),
      this.updateResult(),
      l &&
        (this.#t !== r ||
          Vt(this.options.enabled, this.#t) !== Vt(a.enabled, this.#t) ||
          sa(this.options.staleTime, this.#t) !== sa(a.staleTime, this.#t)) &&
        this.#g();
    const o = this.#y();
    l &&
      (this.#t !== r ||
        Vt(this.options.enabled, this.#t) !== Vt(a.enabled, this.#t) ||
        o !== this.#o) &&
      this.#v(o);
  }
  getOptimisticResult(n) {
    const a = this.#e.getQueryCache().build(this.#e, n),
      r = this.createResult(a, n);
    return (
      t1(this, r) &&
        ((this.#i = r), (this.#l = this.options), (this.#a = this.#t.state)),
      r
    );
  }
  getCurrentResult() {
    return this.#i;
  }
  trackResult(n, a) {
    return new Proxy(n, {
      get: (r, l) => (
        this.trackProp(l),
        a?.(l),
        l === 'promise' &&
          !this.options.experimental_prefetchInRender &&
          this.#s.status === 'pending' &&
          this.#s.reject(
            new Error(
              'experimental_prefetchInRender feature flag is not enabled',
            ),
          ),
        Reflect.get(r, l)
      ),
    });
  }
  trackProp(n) {
    this.#p.add(n);
  }
  getCurrentQuery() {
    return this.#t;
  }
  refetch({ ...n } = {}) {
    return this.fetch({ ...n });
  }
  fetchOptimistic(n) {
    const a = this.#e.defaultQueryOptions(n),
      r = this.#e.getQueryCache().build(this.#e, a);
    return r.fetch().then(() => this.createResult(r, a));
  }
  fetch(n) {
    return this.#f({ ...n, cancelRefetch: n.cancelRefetch ?? !0 }).then(
      () => (this.updateResult(), this.#i),
    );
  }
  #f(n) {
    this.#w();
    let a = this.#t.fetch(this.options, n);
    return n?.throwOnError || (a = a.catch(vt)), a;
  }
  #g() {
    this.#S();
    const n = sa(this.options.staleTime, this.#t);
    if (La || this.#i.isStale || !$c(n)) return;
    const r = Dy(this.#i.dataUpdatedAt, n) + 1;
    this.#u = Ma.setTimeout(() => {
      this.#i.isStale || this.updateResult();
    }, r);
  }
  #y() {
    return (
      (typeof this.options.refetchInterval == 'function'
        ? this.options.refetchInterval(this.#t)
        : this.options.refetchInterval) ?? !1
    );
  }
  #v(n) {
    this.#x(),
      (this.#o = n),
      !(
        La ||
        Vt(this.options.enabled, this.#t) === !1 ||
        !$c(this.#o) ||
        this.#o === 0
      ) &&
        (this.#c = Ma.setInterval(() => {
          (this.options.refetchIntervalInBackground || Cf.isFocused()) &&
            this.#f();
        }, this.#o));
  }
  #b() {
    this.#g(), this.#v(this.#y());
  }
  #S() {
    this.#u && (Ma.clearTimeout(this.#u), (this.#u = void 0));
  }
  #x() {
    this.#c && (Ma.clearInterval(this.#c), (this.#c = void 0));
  }
  createResult(n, a) {
    const r = this.#t,
      l = this.options,
      o = this.#i,
      c = this.#a,
      d = this.#l,
      m = n !== r ? n.state : this.#n,
      { state: p } = n;
    let g = { ...p },
      v = !1,
      x;
    if (a._optimisticResults) {
      const Y = this.hasListeners(),
        te = !Y && sg(n, a),
        re = Y && lg(n, r, a, l);
      (te || re) && (g = { ...g, ...jy(p.data, n.options) }),
        a._optimisticResults === 'isRestoring' && (g.fetchStatus = 'idle');
    }
    let { error: O, errorUpdatedAt: S, status: w } = g;
    x = g.data;
    let R = !1;
    if (a.placeholderData !== void 0 && x === void 0 && w === 'pending') {
      let Y;
      o?.isPlaceholderData && a.placeholderData === d?.placeholderData
        ? ((Y = o.data), (R = !0))
        : (Y =
            typeof a.placeholderData == 'function'
              ? a.placeholderData(this.#h?.state.data, this.#h)
              : a.placeholderData),
        Y !== void 0 && ((w = 'success'), (x = Wc(o?.data, Y, a)), (v = !0));
    }
    if (a.select && x !== void 0 && !R)
      if (o && x === c?.data && a.select === this.#m) x = this.#d;
      else
        try {
          (this.#m = a.select),
            (x = a.select(x)),
            (x = Wc(o?.data, x, a)),
            (this.#d = x),
            (this.#r = null);
        } catch (Y) {
          this.#r = Y;
        }
    this.#r && ((O = this.#r), (x = this.#d), (S = Date.now()), (w = 'error'));
    const _ = g.fetchStatus === 'fetching',
      q = w === 'pending',
      j = w === 'error',
      k = q && _,
      B = x !== void 0,
      V = {
        status: w,
        fetchStatus: g.fetchStatus,
        isPending: q,
        isSuccess: w === 'success',
        isError: j,
        isInitialLoading: k,
        isLoading: k,
        data: x,
        dataUpdatedAt: g.dataUpdatedAt,
        error: O,
        errorUpdatedAt: S,
        failureCount: g.fetchFailureCount,
        failureReason: g.fetchFailureReason,
        errorUpdateCount: g.errorUpdateCount,
        isFetched: g.dataUpdateCount > 0 || g.errorUpdateCount > 0,
        isFetchedAfterMount:
          g.dataUpdateCount > m.dataUpdateCount ||
          g.errorUpdateCount > m.errorUpdateCount,
        isFetching: _,
        isRefetching: _ && !q,
        isLoadingError: j && !B,
        isPaused: g.fetchStatus === 'paused',
        isPlaceholderData: v,
        isRefetchError: j && B,
        isStale: Mf(n, a),
        refetch: this.refetch,
        promise: this.#s,
        isEnabled: Vt(a.enabled, n) !== !1,
      };
    if (this.options.experimental_prefetchInRender) {
      const Y = (ve) => {
          V.status === 'error'
            ? ve.reject(V.error)
            : V.data !== void 0 && ve.resolve(V.data);
        },
        te = () => {
          const ve = (this.#s = V.promise = ef());
          Y(ve);
        },
        re = this.#s;
      switch (re.status) {
        case 'pending':
          n.queryHash === r.queryHash && Y(re);
          break;
        case 'fulfilled':
          (V.status === 'error' || V.data !== re.value) && te();
          break;
        case 'rejected':
          (V.status !== 'error' || V.error !== re.reason) && te();
          break;
      }
    }
    return V;
  }
  updateResult() {
    const n = this.#i,
      a = this.createResult(this.#t, this.options);
    if (
      ((this.#a = this.#t.state),
      (this.#l = this.options),
      this.#a.data !== void 0 && (this.#h = this.#t),
      Ic(a, n))
    )
      return;
    this.#i = a;
    const r = () => {
      if (!n) return !0;
      const { notifyOnChangeProps: l } = this.options,
        o = typeof l == 'function' ? l() : l;
      if (o === 'all' || (!o && !this.#p.size)) return !0;
      const c = new Set(o ?? this.#p);
      return (
        this.options.throwOnError && c.add('error'),
        Object.keys(this.#i).some((d) => {
          const h = d;
          return this.#i[h] !== n[h] && c.has(h);
        })
      );
    };
    this.#E({ listeners: r() });
  }
  #w() {
    const n = this.#e.getQueryCache().build(this.#e, this.options);
    if (n === this.#t) return;
    const a = this.#t;
    (this.#t = n),
      (this.#n = n.state),
      this.hasListeners() && (a?.removeObserver(this), n.addObserver(this));
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && this.#b();
  }
  #E(n) {
    at.batch(() => {
      n.listeners &&
        this.listeners.forEach((a) => {
          a(this.#i);
        }),
        this.#e
          .getQueryCache()
          .notify({ query: this.#t, type: 'observerResultsUpdated' });
    });
  }
};
function e1(n, a) {
  return (
    Vt(a.enabled, n) !== !1 &&
    n.state.data === void 0 &&
    !(n.state.status === 'error' && a.retryOnMount === !1)
  );
}
function sg(n, a) {
  return e1(n, a) || (n.state.data !== void 0 && nf(n, a, a.refetchOnMount));
}
function nf(n, a, r) {
  if (Vt(a.enabled, n) !== !1 && sa(a.staleTime, n) !== 'static') {
    const l = typeof r == 'function' ? r(n) : r;
    return l === 'always' || (l !== !1 && Mf(n, a));
  }
  return !1;
}
function lg(n, a, r, l) {
  return (
    (n !== a || Vt(l.enabled, n) === !1) &&
    (!r.suspense || n.state.status !== 'error') &&
    Mf(n, r)
  );
}
function Mf(n, a) {
  return Vt(a.enabled, n) !== !1 && n.isStaleByTime(sa(a.staleTime, n));
}
function t1(n, a) {
  return !Ic(n.getCurrentResult(), a);
}
function og(n) {
  return {
    onFetch: (a, r) => {
      const l = a.options,
        o = a.fetchOptions?.meta?.fetchMore?.direction,
        c = a.state.data?.pages || [],
        d = a.state.data?.pageParams || [];
      let h = { pages: [], pageParams: [] },
        m = 0;
      const p = async () => {
        let g = !1;
        const v = (S) => {
            Object.defineProperty(S, 'signal', {
              enumerable: !0,
              get: () => (
                a.signal.aborted
                  ? (g = !0)
                  : a.signal.addEventListener('abort', () => {
                      g = !0;
                    }),
                a.signal
              ),
            });
          },
          x = Ny(a.options, a.fetchOptions),
          O = async (S, w, R) => {
            if (g) return Promise.reject();
            if (w == null && S.pages.length) return Promise.resolve(S);
            const q = (() => {
                const J = {
                  client: a.client,
                  queryKey: a.queryKey,
                  pageParam: w,
                  direction: R ? 'backward' : 'forward',
                  meta: a.options.meta,
                };
                return v(J), J;
              })(),
              j = await x(q),
              { maxPages: k } = a.options,
              B = R ? Qx : Fx;
            return {
              pages: B(S.pages, j, k),
              pageParams: B(S.pageParams, w, k),
            };
          };
        if (o && c.length) {
          const S = o === 'backward',
            w = S ? n1 : ug,
            R = { pages: c, pageParams: d },
            _ = w(l, R);
          h = await O(R, _, S);
        } else {
          const S = n ?? c.length;
          do {
            const w = m === 0 ? (d[0] ?? l.initialPageParam) : ug(l, h);
            if (m > 0 && w == null) break;
            (h = await O(h, w)), m++;
          } while (m < S);
        }
        return h;
      };
      a.options.persister
        ? (a.fetchFn = () =>
            a.options.persister?.(
              p,
              {
                client: a.client,
                queryKey: a.queryKey,
                meta: a.options.meta,
                signal: a.signal,
              },
              r,
            ))
        : (a.fetchFn = p);
    },
  };
}
function ug(n, { pages: a, pageParams: r }) {
  const l = a.length - 1;
  return a.length > 0 ? n.getNextPageParam(a[l], a, r[l], r) : void 0;
}
function n1(n, { pages: a, pageParams: r }) {
  return a.length > 0 ? n.getPreviousPageParam?.(a[0], a, r[0], r) : void 0;
}
var a1 = class extends Uy {
  #e;
  #t;
  #n;
  #i;
  constructor(n) {
    super(),
      (this.#e = n.client),
      (this.mutationId = n.mutationId),
      (this.#n = n.mutationCache),
      (this.#t = []),
      (this.state = n.state || i1()),
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
    this.#t.includes(n) ||
      (this.#t.push(n),
      this.clearGcTimeout(),
      this.#n.notify({ type: 'observerAdded', mutation: this, observer: n }));
  }
  removeObserver(n) {
    (this.#t = this.#t.filter((a) => a !== n)),
      this.scheduleGc(),
      this.#n.notify({ type: 'observerRemoved', mutation: this, observer: n });
  }
  optionalRemove() {
    this.#t.length ||
      (this.state.status === 'pending'
        ? this.scheduleGc()
        : this.#n.remove(this));
  }
  continue() {
    return this.#i?.continue() ?? this.execute(this.state.variables);
  }
  async execute(n) {
    const a = () => {
        this.#a({ type: 'continue' });
      },
      r = {
        client: this.#e,
        meta: this.options.meta,
        mutationKey: this.options.mutationKey,
      };
    this.#i = zy({
      fn: () =>
        this.options.mutationFn
          ? this.options.mutationFn(n, r)
          : Promise.reject(new Error('No mutationFn found')),
      onFail: (c, d) => {
        this.#a({ type: 'failed', failureCount: c, error: d });
      },
      onPause: () => {
        this.#a({ type: 'pause' });
      },
      onContinue: a,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#n.canRun(this),
    });
    const l = this.state.status === 'pending',
      o = !this.#i.canStart();
    try {
      if (l) a();
      else {
        this.#a({ type: 'pending', variables: n, isPaused: o }),
          await this.#n.config.onMutate?.(n, this, r);
        const d = await this.options.onMutate?.(n, r);
        d !== this.state.context &&
          this.#a({ type: 'pending', context: d, variables: n, isPaused: o });
      }
      const c = await this.#i.start();
      return (
        await this.#n.config.onSuccess?.(c, n, this.state.context, this, r),
        await this.options.onSuccess?.(c, n, this.state.context, r),
        await this.#n.config.onSettled?.(
          c,
          null,
          this.state.variables,
          this.state.context,
          this,
          r,
        ),
        await this.options.onSettled?.(c, null, n, this.state.context, r),
        this.#a({ type: 'success', data: c }),
        c
      );
    } catch (c) {
      try {
        throw (
          (await this.#n.config.onError?.(c, n, this.state.context, this, r),
          await this.options.onError?.(c, n, this.state.context, r),
          await this.#n.config.onSettled?.(
            void 0,
            c,
            this.state.variables,
            this.state.context,
            this,
            r,
          ),
          await this.options.onSettled?.(void 0, c, n, this.state.context, r),
          c)
        );
      } finally {
        this.#a({ type: 'error', error: c });
      }
    } finally {
      this.#n.runNext(this);
    }
  }
  #a(n) {
    const a = (r) => {
      switch (n.type) {
        case 'failed':
          return { ...r, failureCount: n.failureCount, failureReason: n.error };
        case 'pause':
          return { ...r, isPaused: !0 };
        case 'continue':
          return { ...r, isPaused: !1 };
        case 'pending':
          return {
            ...r,
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
            ...r,
            data: n.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: 'success',
            isPaused: !1,
          };
        case 'error':
          return {
            ...r,
            data: void 0,
            error: n.error,
            failureCount: r.failureCount + 1,
            failureReason: n.error,
            isPaused: !1,
            status: 'error',
          };
      }
    };
    (this.state = a(this.state)),
      at.batch(() => {
        this.#t.forEach((r) => {
          r.onMutationUpdate(n);
        }),
          this.#n.notify({ mutation: this, type: 'updated', action: n });
      });
  }
};
function i1() {
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
var r1 = class extends Wr {
  constructor(n = {}) {
    super(),
      (this.config = n),
      (this.#e = new Set()),
      (this.#t = new Map()),
      (this.#n = 0);
  }
  #e;
  #t;
  #n;
  build(n, a, r) {
    const l = new a1({
      client: n,
      mutationCache: this,
      mutationId: ++this.#n,
      options: n.defaultMutationOptions(a),
      state: r,
    });
    return this.add(l), l;
  }
  add(n) {
    this.#e.add(n);
    const a = Ol(n);
    if (typeof a == 'string') {
      const r = this.#t.get(a);
      r ? r.push(n) : this.#t.set(a, [n]);
    }
    this.notify({ type: 'added', mutation: n });
  }
  remove(n) {
    if (this.#e.delete(n)) {
      const a = Ol(n);
      if (typeof a == 'string') {
        const r = this.#t.get(a);
        if (r)
          if (r.length > 1) {
            const l = r.indexOf(n);
            l !== -1 && r.splice(l, 1);
          } else r[0] === n && this.#t.delete(a);
      }
    }
    this.notify({ type: 'removed', mutation: n });
  }
  canRun(n) {
    const a = Ol(n);
    if (typeof a == 'string') {
      const l = this.#t.get(a)?.find((o) => o.state.status === 'pending');
      return !l || l === n;
    } else return !0;
  }
  runNext(n) {
    const a = Ol(n);
    return typeof a == 'string'
      ? (this.#t
          .get(a)
          ?.find((l) => l !== n && l.state.isPaused)
          ?.continue() ?? Promise.resolve())
      : Promise.resolve();
  }
  clear() {
    at.batch(() => {
      this.#e.forEach((n) => {
        this.notify({ type: 'removed', mutation: n });
      }),
        this.#e.clear(),
        this.#t.clear();
    });
  }
  getAll() {
    return Array.from(this.#e);
  }
  find(n) {
    const a = { exact: !0, ...n };
    return this.getAll().find((r) => ng(a, r));
  }
  findAll(n = {}) {
    return this.getAll().filter((a) => ng(n, a));
  }
  notify(n) {
    at.batch(() => {
      this.listeners.forEach((a) => {
        a(n);
      });
    });
  }
  resumePausedMutations() {
    const n = this.getAll().filter((a) => a.state.isPaused);
    return at.batch(() => Promise.all(n.map((a) => a.continue().catch(vt))));
  }
};
function Ol(n) {
  return n.options.scope?.id;
}
var s1 = class extends Wr {
    constructor(n = {}) {
      super(), (this.config = n), (this.#e = new Map());
    }
    #e;
    build(n, a, r) {
      const l = a.queryKey,
        o = a.queryHash ?? Af(l, a);
      let c = this.get(o);
      return (
        c ||
          ((c = new Jx({
            client: n,
            queryKey: l,
            queryHash: o,
            options: n.defaultQueryOptions(a),
            state: r,
            defaultOptions: n.getQueryDefaults(l),
          })),
          this.add(c)),
        c
      );
    }
    add(n) {
      this.#e.has(n.queryHash) ||
        (this.#e.set(n.queryHash, n), this.notify({ type: 'added', query: n }));
    }
    remove(n) {
      const a = this.#e.get(n.queryHash);
      a &&
        (n.destroy(),
        a === n && this.#e.delete(n.queryHash),
        this.notify({ type: 'removed', query: n }));
    }
    clear() {
      at.batch(() => {
        this.getAll().forEach((n) => {
          this.remove(n);
        });
      });
    }
    get(n) {
      return this.#e.get(n);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(n) {
      const a = { exact: !0, ...n };
      return this.getAll().find((r) => tg(a, r));
    }
    findAll(n = {}) {
      const a = this.getAll();
      return Object.keys(n).length > 0 ? a.filter((r) => tg(n, r)) : a;
    }
    notify(n) {
      at.batch(() => {
        this.listeners.forEach((a) => {
          a(n);
        });
      });
    }
    onFocus() {
      at.batch(() => {
        this.getAll().forEach((n) => {
          n.onFocus();
        });
      });
    }
    onOnline() {
      at.batch(() => {
        this.getAll().forEach((n) => {
          n.onOnline();
        });
      });
    }
  },
  l1 = class {
    #e;
    #t;
    #n;
    #i;
    #a;
    #l;
    #s;
    #r;
    constructor(n = {}) {
      (this.#e = n.queryCache || new s1()),
        (this.#t = n.mutationCache || new r1()),
        (this.#n = n.defaultOptions || {}),
        (this.#i = new Map()),
        (this.#a = new Map()),
        (this.#l = 0);
    }
    mount() {
      this.#l++,
        this.#l === 1 &&
          ((this.#s = Cf.subscribe(async (n) => {
            n && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#r = Vl.subscribe(async (n) => {
            n && (await this.resumePausedMutations(), this.#e.onOnline());
          })));
    }
    unmount() {
      this.#l--,
        this.#l === 0 &&
          (this.#s?.(), (this.#s = void 0), this.#r?.(), (this.#r = void 0));
    }
    isFetching(n) {
      return this.#e.findAll({ ...n, fetchStatus: 'fetching' }).length;
    }
    isMutating(n) {
      return this.#t.findAll({ ...n, status: 'pending' }).length;
    }
    getQueryData(n) {
      const a = this.defaultQueryOptions({ queryKey: n });
      return this.#e.get(a.queryHash)?.state.data;
    }
    ensureQueryData(n) {
      const a = this.defaultQueryOptions(n),
        r = this.#e.build(this, a),
        l = r.state.data;
      return l === void 0
        ? this.fetchQuery(n)
        : (n.revalidateIfStale &&
            r.isStaleByTime(sa(a.staleTime, r)) &&
            this.prefetchQuery(a),
          Promise.resolve(l));
    }
    getQueriesData(n) {
      return this.#e.findAll(n).map(({ queryKey: a, state: r }) => {
        const l = r.data;
        return [a, l];
      });
    }
    setQueryData(n, a, r) {
      const l = this.defaultQueryOptions({ queryKey: n }),
        c = this.#e.get(l.queryHash)?.state.data,
        d = Px(a, c);
      if (d !== void 0)
        return this.#e.build(this, l).setData(d, { ...r, manual: !0 });
    }
    setQueriesData(n, a, r) {
      return at.batch(() =>
        this.#e
          .findAll(n)
          .map(({ queryKey: l }) => [l, this.setQueryData(l, a, r)]),
      );
    }
    getQueryState(n) {
      const a = this.defaultQueryOptions({ queryKey: n });
      return this.#e.get(a.queryHash)?.state;
    }
    removeQueries(n) {
      const a = this.#e;
      at.batch(() => {
        a.findAll(n).forEach((r) => {
          a.remove(r);
        });
      });
    }
    resetQueries(n, a) {
      const r = this.#e;
      return at.batch(
        () => (
          r.findAll(n).forEach((l) => {
            l.reset();
          }),
          this.refetchQueries({ type: 'active', ...n }, a)
        ),
      );
    }
    cancelQueries(n, a = {}) {
      const r = { revert: !0, ...a },
        l = at.batch(() => this.#e.findAll(n).map((o) => o.cancel(r)));
      return Promise.all(l).then(vt).catch(vt);
    }
    invalidateQueries(n, a = {}) {
      return at.batch(
        () => (
          this.#e.findAll(n).forEach((r) => {
            r.invalidate();
          }),
          n?.refetchType === 'none'
            ? Promise.resolve()
            : this.refetchQueries(
                { ...n, type: n?.refetchType ?? n?.type ?? 'active' },
                a,
              )
        ),
      );
    }
    refetchQueries(n, a = {}) {
      const r = { ...a, cancelRefetch: a.cancelRefetch ?? !0 },
        l = at.batch(() =>
          this.#e
            .findAll(n)
            .filter((o) => !o.isDisabled() && !o.isStatic())
            .map((o) => {
              let c = o.fetch(void 0, r);
              return (
                r.throwOnError || (c = c.catch(vt)),
                o.state.fetchStatus === 'paused' ? Promise.resolve() : c
              );
            }),
        );
      return Promise.all(l).then(vt);
    }
    fetchQuery(n) {
      const a = this.defaultQueryOptions(n);
      a.retry === void 0 && (a.retry = !1);
      const r = this.#e.build(this, a);
      return r.isStaleByTime(sa(a.staleTime, r))
        ? r.fetch(a)
        : Promise.resolve(r.state.data);
    }
    prefetchQuery(n) {
      return this.fetchQuery(n).then(vt).catch(vt);
    }
    fetchInfiniteQuery(n) {
      return (n.behavior = og(n.pages)), this.fetchQuery(n);
    }
    prefetchInfiniteQuery(n) {
      return this.fetchInfiniteQuery(n).then(vt).catch(vt);
    }
    ensureInfiniteQueryData(n) {
      return (n.behavior = og(n.pages)), this.ensureQueryData(n);
    }
    resumePausedMutations() {
      return Vl.isOnline()
        ? this.#t.resumePausedMutations()
        : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(n) {
      this.#n = n;
    }
    setQueryDefaults(n, a) {
      this.#i.set(Fr(n), { queryKey: n, defaultOptions: a });
    }
    getQueryDefaults(n) {
      const a = [...this.#i.values()],
        r = {};
      return (
        a.forEach((l) => {
          Qr(n, l.queryKey) && Object.assign(r, l.defaultOptions);
        }),
        r
      );
    }
    setMutationDefaults(n, a) {
      this.#a.set(Fr(n), { mutationKey: n, defaultOptions: a });
    }
    getMutationDefaults(n) {
      const a = [...this.#a.values()],
        r = {};
      return (
        a.forEach((l) => {
          Qr(n, l.mutationKey) && Object.assign(r, l.defaultOptions);
        }),
        r
      );
    }
    defaultQueryOptions(n) {
      if (n._defaulted) return n;
      const a = {
        ...this.#n.queries,
        ...this.getQueryDefaults(n.queryKey),
        ...n,
        _defaulted: !0,
      };
      return (
        a.queryHash || (a.queryHash = Af(a.queryKey, a)),
        a.refetchOnReconnect === void 0 &&
          (a.refetchOnReconnect = a.networkMode !== 'always'),
        a.throwOnError === void 0 && (a.throwOnError = !!a.suspense),
        !a.networkMode && a.persister && (a.networkMode = 'offlineFirst'),
        a.queryFn === Tf && (a.enabled = !1),
        a
      );
    }
    defaultMutationOptions(n) {
      return n?._defaulted
        ? n
        : {
            ...this.#n.mutations,
            ...(n?.mutationKey && this.getMutationDefaults(n.mutationKey)),
            ...n,
            _defaulted: !0,
          };
    }
    clear() {
      this.#e.clear(), this.#t.clear();
    }
  },
  ky = E.createContext(void 0),
  o1 = (n) => {
    const a = E.useContext(ky);
    if (!a)
      throw new Error('No QueryClient set, use QueryClientProvider to set one');
    return a;
  },
  u1 = ({ client: n, children: a }) => (
    E.useEffect(
      () => (
        n.mount(),
        () => {
          n.unmount();
        }
      ),
      [n],
    ),
    F.jsx(ky.Provider, { value: n, children: a })
  ),
  Hy = E.createContext(!1),
  c1 = () => E.useContext(Hy);
Hy.Provider;
function f1() {
  let n = !1;
  return {
    clearReset: () => {
      n = !1;
    },
    reset: () => {
      n = !0;
    },
    isReset: () => n,
  };
}
var d1 = E.createContext(f1()),
  h1 = () => E.useContext(d1),
  p1 = (n, a) => {
    (n.suspense || n.throwOnError || n.experimental_prefetchInRender) &&
      (a.isReset() || (n.retryOnMount = !1));
  },
  m1 = (n) => {
    E.useEffect(() => {
      n.clearReset();
    }, [n]);
  },
  g1 = ({
    result: n,
    errorResetBoundary: a,
    throwOnError: r,
    query: l,
    suspense: o,
  }) =>
    n.isError &&
    !a.isReset() &&
    !n.isFetching &&
    l &&
    ((o && n.data === void 0) || Yx(r, [n.error, l])),
  y1 = (n) => {
    if (n.suspense) {
      const r = (o) => (o === 'static' ? o : Math.max(o ?? 1e3, 1e3)),
        l = n.staleTime;
      (n.staleTime = typeof l == 'function' ? (...o) => r(l(...o)) : r(l)),
        typeof n.gcTime == 'number' && (n.gcTime = Math.max(n.gcTime, 1e3));
    }
  },
  v1 = (n, a) => n.isLoading && n.isFetching && !a,
  b1 = (n, a) => n?.suspense && a.isPending,
  cg = (n, a, r) =>
    a.fetchOptimistic(n).catch(() => {
      r.clearReset();
    });
function S1(n, a, r) {
  const l = c1(),
    o = h1(),
    c = o1(),
    d = c.defaultQueryOptions(n);
  c.getDefaultOptions().queries?._experimental_beforeQuery?.(d),
    (d._optimisticResults = l ? 'isRestoring' : 'optimistic'),
    y1(d),
    p1(d, o),
    m1(o);
  const h = !c.getQueryCache().get(d.queryHash),
    [m] = E.useState(() => new a(c, d)),
    p = m.getOptimisticResult(d),
    g = !l && n.subscribed !== !1;
  if (
    (E.useSyncExternalStore(
      E.useCallback(
        (v) => {
          const x = g ? m.subscribe(at.batchCalls(v)) : vt;
          return m.updateResult(), x;
        },
        [m, g],
      ),
      () => m.getCurrentResult(),
      () => m.getCurrentResult(),
    ),
    E.useEffect(() => {
      m.setOptions(d);
    }, [d, m]),
    b1(d, p))
  )
    throw cg(d, m, o);
  if (
    g1({
      result: p,
      errorResetBoundary: o,
      throwOnError: d.throwOnError,
      query: c.getQueryCache().get(d.queryHash),
      suspense: d.suspense,
    })
  )
    throw p.error;
  return (
    c.getDefaultOptions().queries?._experimental_afterQuery?.(d, p),
    d.experimental_prefetchInRender &&
      !La &&
      v1(p, l) &&
      (h ? cg(d, m, o) : c.getQueryCache().get(d.queryHash)?.promise)
        ?.catch(vt)
        .finally(() => {
          m.updateResult();
        }),
    d.notifyOnChangeProps ? p : m.trackResult(p)
  );
}
function x1(n, a) {
  return S1(n, Wx);
}
const w1 = ({ children: n }) => {
    const [a] = E.useState(
      () =>
        new l1({
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
    return F.jsx(u1, { client: a, children: n });
  },
  E1 = { theme: 'system', setTheme: () => null },
  By = E.createContext(E1);
function O1({
  children: n,
  defaultTheme: a = 'system',
  storageKey: r = 'vite-ui-theme',
  ...l
}) {
  const [o, c] = E.useState(() => localStorage.getItem(r) || a);
  E.useEffect(() => {
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
  return F.jsx(By.Provider, { ...l, value: d, children: n });
}
const R1 = () => {
    const n = E.useContext(By);
    if (n === void 0)
      throw new Error('useTheme must be used within a ThemeProvider');
    return n;
  },
  A1 = ({ children: n }) =>
    F.jsx(w1, { children: F.jsx(O1, { defaultTheme: 'light', children: n }) }),
  ge = (n) => typeof n == 'string',
  Br = () => {
    let n, a;
    const r = new Promise((l, o) => {
      (n = l), (a = o);
    });
    return (r.resolve = n), (r.reject = a), r;
  },
  fg = (n) => (n == null ? '' : '' + n),
  T1 = (n, a, r) => {
    n.forEach((l) => {
      a[l] && (r[l] = a[l]);
    });
  },
  C1 = /###/g,
  dg = (n) => (n && n.indexOf('###') > -1 ? n.replace(C1, '.') : n),
  hg = (n) => !n || ge(n),
  Vr = (n, a, r) => {
    const l = ge(a) ? a.split('.') : a;
    let o = 0;
    for (; o < l.length - 1; ) {
      if (hg(n)) return {};
      const c = dg(l[o]);
      !n[c] && r && (n[c] = new r()),
        Object.prototype.hasOwnProperty.call(n, c) ? (n = n[c]) : (n = {}),
        ++o;
    }
    return hg(n) ? {} : { obj: n, k: dg(l[o]) };
  },
  pg = (n, a, r) => {
    const { obj: l, k: o } = Vr(n, a, Object);
    if (l !== void 0 || a.length === 1) {
      l[o] = r;
      return;
    }
    let c = a[a.length - 1],
      d = a.slice(0, a.length - 1),
      h = Vr(n, d, Object);
    for (; h.obj === void 0 && d.length; )
      (c = `${d[d.length - 1]}.${c}`),
        (d = d.slice(0, d.length - 1)),
        (h = Vr(n, d, Object)),
        h?.obj && typeof h.obj[`${h.k}.${c}`] < 'u' && (h.obj = void 0);
    h.obj[`${h.k}.${c}`] = r;
  },
  M1 = (n, a, r, l) => {
    const { obj: o, k: c } = Vr(n, a, Object);
    (o[c] = o[c] || []), o[c].push(r);
  },
  Fl = (n, a) => {
    const { obj: r, k: l } = Vr(n, a);
    if (r && Object.prototype.hasOwnProperty.call(r, l)) return r[l];
  },
  D1 = (n, a, r) => {
    const l = Fl(n, r);
    return l !== void 0 ? l : Fl(a, r);
  },
  qy = (n, a, r) => {
    for (const l in a)
      l !== '__proto__' &&
        l !== 'constructor' &&
        (l in n
          ? ge(n[l]) ||
            n[l] instanceof String ||
            ge(a[l]) ||
            a[l] instanceof String
            ? r && (n[l] = a[l])
            : qy(n[l], a[l], r)
          : (n[l] = a[l]));
    return n;
  },
  Ei = (n) => n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
var _1 = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
};
const N1 = (n) => (ge(n) ? n.replace(/[&<>"'\/]/g, (a) => _1[a]) : n);
class L1 {
  constructor(a) {
    (this.capacity = a), (this.regExpMap = new Map()), (this.regExpQueue = []);
  }
  getRegExp(a) {
    const r = this.regExpMap.get(a);
    if (r !== void 0) return r;
    const l = new RegExp(a);
    return (
      this.regExpQueue.length === this.capacity &&
        this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(a, l),
      this.regExpQueue.push(a),
      l
    );
  }
}
const z1 = [' ', ',', '?', '!', ';'],
  U1 = new L1(20),
  j1 = (n, a, r) => {
    (a = a || ''), (r = r || '');
    const l = z1.filter((d) => a.indexOf(d) < 0 && r.indexOf(d) < 0);
    if (l.length === 0) return !0;
    const o = U1.getRegExp(
      `(${l.map((d) => (d === '?' ? '\\?' : d)).join('|')})`,
    );
    let c = !o.test(n);
    if (!c) {
      const d = n.indexOf(r);
      d > 0 && !o.test(n.substring(0, d)) && (c = !0);
    }
    return c;
  },
  af = (n, a, r = '.') => {
    if (!n) return;
    if (n[a]) return Object.prototype.hasOwnProperty.call(n, a) ? n[a] : void 0;
    const l = a.split(r);
    let o = n;
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
  Yr = (n) => n?.replace('_', '-'),
  k1 = {
    type: 'logger',
    log(n) {
      this.output('log', n);
    },
    warn(n) {
      this.output('warn', n);
    },
    error(n) {
      this.output('error', n);
    },
    output(n, a) {
      console?.[n]?.apply?.(console, a);
    },
  };
class Ql {
  constructor(a, r = {}) {
    this.init(a, r);
  }
  init(a, r = {}) {
    (this.prefix = r.prefix || 'i18next:'),
      (this.logger = a || k1),
      (this.options = r),
      (this.debug = r.debug);
  }
  log(...a) {
    return this.forward(a, 'log', '', !0);
  }
  warn(...a) {
    return this.forward(a, 'warn', '', !0);
  }
  error(...a) {
    return this.forward(a, 'error', '');
  }
  deprecate(...a) {
    return this.forward(a, 'warn', 'WARNING DEPRECATED: ', !0);
  }
  forward(a, r, l, o) {
    return o && !this.debug
      ? null
      : (ge(a[0]) && (a[0] = `${l}${this.prefix} ${a[0]}`), this.logger[r](a));
  }
  create(a) {
    return new Ql(this.logger, {
      prefix: `${this.prefix}:${a}:`,
      ...this.options,
    });
  }
  clone(a) {
    return (
      (a = a || this.options),
      (a.prefix = a.prefix || this.prefix),
      new Ql(this.logger, a)
    );
  }
}
var un = new Ql();
class eo {
  constructor() {
    this.observers = {};
  }
  on(a, r) {
    return (
      a.split(' ').forEach((l) => {
        this.observers[l] || (this.observers[l] = new Map());
        const o = this.observers[l].get(r) || 0;
        this.observers[l].set(r, o + 1);
      }),
      this
    );
  }
  off(a, r) {
    if (this.observers[a]) {
      if (!r) {
        delete this.observers[a];
        return;
      }
      this.observers[a].delete(r);
    }
  }
  emit(a, ...r) {
    this.observers[a] &&
      Array.from(this.observers[a].entries()).forEach(([o, c]) => {
        for (let d = 0; d < c; d++) o(...r);
      }),
      this.observers['*'] &&
        Array.from(this.observers['*'].entries()).forEach(([o, c]) => {
          for (let d = 0; d < c; d++) o.apply(o, [a, ...r]);
        });
  }
}
class mg extends eo {
  constructor(a, r = { ns: ['translation'], defaultNS: 'translation' }) {
    super(),
      (this.data = a || {}),
      (this.options = r),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      this.options.ignoreJSONStructure === void 0 &&
        (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(a) {
    this.options.ns.indexOf(a) < 0 && this.options.ns.push(a);
  }
  removeNamespaces(a) {
    const r = this.options.ns.indexOf(a);
    r > -1 && this.options.ns.splice(r, 1);
  }
  getResource(a, r, l, o = {}) {
    const c =
        o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator,
      d =
        o.ignoreJSONStructure !== void 0
          ? o.ignoreJSONStructure
          : this.options.ignoreJSONStructure;
    let h;
    a.indexOf('.') > -1
      ? (h = a.split('.'))
      : ((h = [a, r]),
        l &&
          (Array.isArray(l)
            ? h.push(...l)
            : ge(l) && c
              ? h.push(...l.split(c))
              : h.push(l)));
    const m = Fl(this.data, h);
    return (
      !m &&
        !r &&
        !l &&
        a.indexOf('.') > -1 &&
        ((a = h[0]), (r = h[1]), (l = h.slice(2).join('.'))),
      m || !d || !ge(l) ? m : af(this.data?.[a]?.[r], l, c)
    );
  }
  addResource(a, r, l, o, c = { silent: !1 }) {
    const d =
      c.keySeparator !== void 0 ? c.keySeparator : this.options.keySeparator;
    let h = [a, r];
    l && (h = h.concat(d ? l.split(d) : l)),
      a.indexOf('.') > -1 && ((h = a.split('.')), (o = r), (r = h[1])),
      this.addNamespaces(r),
      pg(this.data, h, o),
      c.silent || this.emit('added', a, r, l, o);
  }
  addResources(a, r, l, o = { silent: !1 }) {
    for (const c in l)
      (ge(l[c]) || Array.isArray(l[c])) &&
        this.addResource(a, r, c, l[c], { silent: !0 });
    o.silent || this.emit('added', a, r, l);
  }
  addResourceBundle(a, r, l, o, c, d = { silent: !1, skipCopy: !1 }) {
    let h = [a, r];
    a.indexOf('.') > -1 && ((h = a.split('.')), (o = l), (l = r), (r = h[1])),
      this.addNamespaces(r);
    let m = Fl(this.data, h) || {};
    d.skipCopy || (l = JSON.parse(JSON.stringify(l))),
      o ? qy(m, l, c) : (m = { ...m, ...l }),
      pg(this.data, h, m),
      d.silent || this.emit('added', a, r, l);
  }
  removeResourceBundle(a, r) {
    this.hasResourceBundle(a, r) && delete this.data[a][r],
      this.removeNamespaces(r),
      this.emit('removed', a, r);
  }
  hasResourceBundle(a, r) {
    return this.getResource(a, r) !== void 0;
  }
  getResourceBundle(a, r) {
    return r || (r = this.options.defaultNS), this.getResource(a, r);
  }
  getDataByLanguage(a) {
    return this.data[a];
  }
  hasLanguageSomeTranslations(a) {
    const r = this.getDataByLanguage(a);
    return !!((r && Object.keys(r)) || []).find(
      (o) => r[o] && Object.keys(r[o]).length > 0,
    );
  }
  toJSON() {
    return this.data;
  }
}
var Py = {
  processors: {},
  addPostProcessor(n) {
    this.processors[n.name] = n;
  },
  handle(n, a, r, l, o) {
    return (
      n.forEach((c) => {
        a = this.processors[c]?.process(a, r, l, o) ?? a;
      }),
      a
    );
  },
};
const Gy = Symbol('i18next/PATH_KEY');
function H1() {
  const n = [],
    a = Object.create(null);
  let r;
  return (
    (a.get = (l, o) => (
      r?.revoke?.(),
      o === Gy ? n : (n.push(o), (r = Proxy.revocable(l, a)), r.proxy)
    )),
    Proxy.revocable(Object.create(null), a).proxy
  );
}
function rf(n, a) {
  const { [Gy]: r } = n(H1());
  return r.join(a?.keySeparator ?? '.');
}
const gg = {},
  yg = (n) => !ge(n) && typeof n != 'boolean' && typeof n != 'number';
class Yl extends eo {
  constructor(a, r = {}) {
    super(),
      T1(
        [
          'resourceStore',
          'languageUtils',
          'pluralResolver',
          'interpolator',
          'backendConnector',
          'i18nFormat',
          'utils',
        ],
        a,
        this,
      ),
      (this.options = r),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      (this.logger = un.create('translator'));
  }
  changeLanguage(a) {
    a && (this.language = a);
  }
  exists(a, r = { interpolation: {} }) {
    const l = { ...r };
    return a == null ? !1 : this.resolve(a, l)?.res !== void 0;
  }
  extractFromKey(a, r) {
    let l = r.nsSeparator !== void 0 ? r.nsSeparator : this.options.nsSeparator;
    l === void 0 && (l = ':');
    const o =
      r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator;
    let c = r.ns || this.options.defaultNS || [];
    const d = l && a.indexOf(l) > -1,
      h =
        !this.options.userDefinedKeySeparator &&
        !r.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !r.nsSeparator &&
        !j1(a, l, o);
    if (d && !h) {
      const m = a.match(this.interpolator.nestingRegexp);
      if (m && m.length > 0) return { key: a, namespaces: ge(c) ? [c] : c };
      const p = a.split(l);
      (l !== o || (l === o && this.options.ns.indexOf(p[0]) > -1)) &&
        (c = p.shift()),
        (a = p.join(o));
    }
    return { key: a, namespaces: ge(c) ? [c] : c };
  }
  translate(a, r, l) {
    let o = typeof r == 'object' ? { ...r } : r;
    if (
      (typeof o != 'object' &&
        this.options.overloadTranslationOptionHandler &&
        (o = this.options.overloadTranslationOptionHandler(arguments)),
      typeof o == 'object' && (o = { ...o }),
      o || (o = {}),
      a == null)
    )
      return '';
    typeof a == 'function' && (a = rf(a, { ...this.options, ...o })),
      Array.isArray(a) || (a = [String(a)]);
    const c =
        o.returnDetails !== void 0
          ? o.returnDetails
          : this.options.returnDetails,
      d =
        o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator,
      { key: h, namespaces: m } = this.extractFromKey(a[a.length - 1], o),
      p = m[m.length - 1];
    let g = o.nsSeparator !== void 0 ? o.nsSeparator : this.options.nsSeparator;
    g === void 0 && (g = ':');
    const v = o.lng || this.language,
      x = o.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (v?.toLowerCase() === 'cimode')
      return x
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
    const O = this.resolve(a, o);
    let S = O?.res;
    const w = O?.usedKey || h,
      R = O?.exactUsedKey || h,
      _ = ['[object Number]', '[object Function]', '[object RegExp]'],
      q = o.joinArrays !== void 0 ? o.joinArrays : this.options.joinArrays,
      j = !this.i18nFormat || this.i18nFormat.handleAsObject,
      k = o.count !== void 0 && !ge(o.count),
      B = Yl.hasDefaultValue(o),
      J = k ? this.pluralResolver.getSuffix(v, o.count, o) : '',
      V =
        o.ordinal && k
          ? this.pluralResolver.getSuffix(v, o.count, { ordinal: !1 })
          : '',
      Y = k && !o.ordinal && o.count === 0,
      te =
        (Y && o[`defaultValue${this.options.pluralSeparator}zero`]) ||
        o[`defaultValue${J}`] ||
        o[`defaultValue${V}`] ||
        o.defaultValue;
    let re = S;
    j && !S && B && (re = te);
    const ve = yg(re),
      de = Object.prototype.toString.apply(re);
    if (j && re && ve && _.indexOf(de) < 0 && !(ge(q) && Array.isArray(re))) {
      if (!o.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            'accessing an object - but returnObjects options is not enabled!',
          );
        const ue = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(w, re, { ...o, ns: m })
          : `key '${h} (${this.language})' returned an object instead of string.`;
        return c
          ? ((O.res = ue), (O.usedParams = this.getUsedParamsDetails(o)), O)
          : ue;
      }
      if (d) {
        const ue = Array.isArray(re),
          se = ue ? [] : {},
          me = ue ? R : w;
        for (const M in re)
          if (Object.prototype.hasOwnProperty.call(re, M)) {
            const X = `${me}${d}${M}`;
            B && !S
              ? (se[M] = this.translate(X, {
                  ...o,
                  defaultValue: yg(te) ? te[M] : void 0,
                  joinArrays: !1,
                  ns: m,
                }))
              : (se[M] = this.translate(X, { ...o, joinArrays: !1, ns: m })),
              se[M] === X && (se[M] = re[M]);
          }
        S = se;
      }
    } else if (j && ge(q) && Array.isArray(S))
      (S = S.join(q)), S && (S = this.extendTranslation(S, a, o, l));
    else {
      let ue = !1,
        se = !1;
      !this.isValidLookup(S) && B && ((ue = !0), (S = te)),
        this.isValidLookup(S) || ((se = !0), (S = h));
      const M =
          (o.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          se
            ? void 0
            : S,
        X = B && te !== S && this.options.updateMissing;
      if (se || ue || X) {
        if (
          (this.logger.log(X ? 'updateKey' : 'missingKey', v, p, h, X ? te : S),
          d)
        ) {
          const G = this.resolve(h, { ...o, keySeparator: !1 });
          G &&
            G.res &&
            this.logger.warn(
              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.',
            );
        }
        let z = [];
        const I = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          o.lng || this.language,
        );
        if (this.options.saveMissingTo === 'fallback' && I && I[0])
          for (let G = 0; G < I.length; G++) z.push(I[G]);
        else
          this.options.saveMissingTo === 'all'
            ? (z = this.languageUtils.toResolveHierarchy(
                o.lng || this.language,
              ))
            : z.push(o.lng || this.language);
        const T = (G, W, $) => {
          const ee = B && $ !== S ? $ : M;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(G, p, W, ee, X, o)
            : this.backendConnector?.saveMissing &&
              this.backendConnector.saveMissing(G, p, W, ee, X, o),
            this.emit('missingKey', G, p, W, S);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && k
            ? z.forEach((G) => {
                const W = this.pluralResolver.getSuffixes(G, o);
                Y &&
                  o[`defaultValue${this.options.pluralSeparator}zero`] &&
                  W.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  W.push(`${this.options.pluralSeparator}zero`),
                  W.forEach(($) => {
                    T([G], h + $, o[`defaultValue${$}`] || te);
                  });
              })
            : T(z, h, te));
      }
      (S = this.extendTranslation(S, a, o, O, l)),
        se &&
          S === h &&
          this.options.appendNamespaceToMissingKey &&
          (S = `${p}${g}${h}`),
        (se || ue) &&
          this.options.parseMissingKeyHandler &&
          (S = this.options.parseMissingKeyHandler(
            this.options.appendNamespaceToMissingKey ? `${p}${g}${h}` : h,
            ue ? S : void 0,
            o,
          ));
    }
    return c
      ? ((O.res = S), (O.usedParams = this.getUsedParamsDetails(o)), O)
      : S;
  }
  extendTranslation(a, r, l, o, c) {
    if (this.i18nFormat?.parse)
      a = this.i18nFormat.parse(
        a,
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
      const m =
        ge(a) &&
        (l?.interpolation?.skipOnVariables !== void 0
          ? l.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let p;
      if (m) {
        const v = a.match(this.interpolator.nestingRegexp);
        p = v && v.length;
      }
      let g = l.replace && !ge(l.replace) ? l.replace : l;
      if (
        (this.options.interpolation.defaultVariables &&
          (g = { ...this.options.interpolation.defaultVariables, ...g }),
        (a = this.interpolator.interpolate(
          a,
          g,
          l.lng || this.language || o.usedLng,
          l,
        )),
        m)
      ) {
        const v = a.match(this.interpolator.nestingRegexp),
          x = v && v.length;
        p < x && (l.nest = !1);
      }
      !l.lng && o && o.res && (l.lng = this.language || o.usedLng),
        l.nest !== !1 &&
          (a = this.interpolator.nest(
            a,
            (...v) =>
              c?.[0] === v[0] && !l.context
                ? (this.logger.warn(
                    `It seems you are nesting recursively key: ${v[0]} in key: ${r[0]}`,
                  ),
                  null)
                : this.translate(...v, r),
            l,
          )),
        l.interpolation && this.interpolator.reset();
    }
    const d = l.postProcess || this.options.postProcess,
      h = ge(d) ? [d] : d;
    return (
      a != null &&
        h?.length &&
        l.applyPostProcessor !== !1 &&
        (a = Py.handle(
          h,
          a,
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
      a
    );
  }
  resolve(a, r = {}) {
    let l, o, c, d, h;
    return (
      ge(a) && (a = [a]),
      a.forEach((m) => {
        if (this.isValidLookup(l)) return;
        const p = this.extractFromKey(m, r),
          g = p.key;
        o = g;
        let v = p.namespaces;
        this.options.fallbackNS && (v = v.concat(this.options.fallbackNS));
        const x = r.count !== void 0 && !ge(r.count),
          O = x && !r.ordinal && r.count === 0,
          S =
            r.context !== void 0 &&
            (ge(r.context) || typeof r.context == 'number') &&
            r.context !== '',
          w = r.lngs
            ? r.lngs
            : this.languageUtils.toResolveHierarchy(
                r.lng || this.language,
                r.fallbackLng,
              );
        v.forEach((R) => {
          this.isValidLookup(l) ||
            ((h = R),
            !gg[`${w[0]}-${R}`] &&
              this.utils?.hasLoadedNamespace &&
              !this.utils?.hasLoadedNamespace(h) &&
              ((gg[`${w[0]}-${R}`] = !0),
              this.logger.warn(
                `key "${o}" for languages "${w.join(', ')}" won't get resolved as namespace "${h}" was not yet loaded`,
                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
              )),
            w.forEach((_) => {
              if (this.isValidLookup(l)) return;
              d = _;
              const q = [g];
              if (this.i18nFormat?.addLookupKeys)
                this.i18nFormat.addLookupKeys(q, g, _, R, r);
              else {
                let k;
                x && (k = this.pluralResolver.getSuffix(_, r.count, r));
                const B = `${this.options.pluralSeparator}zero`,
                  J = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (x &&
                    (r.ordinal &&
                      k.indexOf(J) === 0 &&
                      q.push(g + k.replace(J, this.options.pluralSeparator)),
                    q.push(g + k),
                    O && q.push(g + B)),
                  S)
                ) {
                  const V = `${g}${this.options.contextSeparator || '_'}${r.context}`;
                  q.push(V),
                    x &&
                      (r.ordinal &&
                        k.indexOf(J) === 0 &&
                        q.push(V + k.replace(J, this.options.pluralSeparator)),
                      q.push(V + k),
                      O && q.push(V + B));
                }
              }
              let j;
              for (; (j = q.pop()); )
                this.isValidLookup(l) ||
                  ((c = j), (l = this.getResource(_, R, j, r)));
            }));
        });
      }),
      { res: l, usedKey: o, exactUsedKey: c, usedLng: d, usedNS: h }
    );
  }
  isValidLookup(a) {
    return (
      a !== void 0 &&
      !(!this.options.returnNull && a === null) &&
      !(!this.options.returnEmptyString && a === '')
    );
  }
  getResource(a, r, l, o = {}) {
    return this.i18nFormat?.getResource
      ? this.i18nFormat.getResource(a, r, l, o)
      : this.resourceStore.getResource(a, r, l, o);
  }
  getUsedParamsDetails(a = {}) {
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
      l = a.replace && !ge(a.replace);
    let o = l ? a.replace : a;
    if (
      (l && typeof a.count < 'u' && (o.count = a.count),
      this.options.interpolation.defaultVariables &&
        (o = { ...this.options.interpolation.defaultVariables, ...o }),
      !l)
    ) {
      o = { ...o };
      for (const c of r) delete o[c];
    }
    return o;
  }
  static hasDefaultValue(a) {
    const r = 'defaultValue';
    for (const l in a)
      if (
        Object.prototype.hasOwnProperty.call(a, l) &&
        r === l.substring(0, r.length) &&
        a[l] !== void 0
      )
        return !0;
    return !1;
  }
}
class vg {
  constructor(a) {
    (this.options = a),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = un.create('languageUtils'));
  }
  getScriptPartFromCode(a) {
    if (((a = Yr(a)), !a || a.indexOf('-') < 0)) return null;
    const r = a.split('-');
    return r.length === 2 || (r.pop(), r[r.length - 1].toLowerCase() === 'x')
      ? null
      : this.formatLanguageCode(r.join('-'));
  }
  getLanguagePartFromCode(a) {
    if (((a = Yr(a)), !a || a.indexOf('-') < 0)) return a;
    const r = a.split('-');
    return this.formatLanguageCode(r[0]);
  }
  formatLanguageCode(a) {
    if (ge(a) && a.indexOf('-') > -1) {
      let r;
      try {
        r = Intl.getCanonicalLocales(a)[0];
      } catch {}
      return (
        r && this.options.lowerCaseLng && (r = r.toLowerCase()),
        r || (this.options.lowerCaseLng ? a.toLowerCase() : a)
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng
      ? a.toLowerCase()
      : a;
  }
  isSupportedCode(a) {
    return (
      (this.options.load === 'languageOnly' ||
        this.options.nonExplicitSupportedLngs) &&
        (a = this.getLanguagePartFromCode(a)),
      !this.supportedLngs ||
        !this.supportedLngs.length ||
        this.supportedLngs.indexOf(a) > -1
    );
  }
  getBestMatchFromCodes(a) {
    if (!a) return null;
    let r;
    return (
      a.forEach((l) => {
        if (r) return;
        const o = this.formatLanguageCode(l);
        (!this.options.supportedLngs || this.isSupportedCode(o)) && (r = o);
      }),
      !r &&
        this.options.supportedLngs &&
        a.forEach((l) => {
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
  getFallbackCodes(a, r) {
    if (!a) return [];
    if (
      (typeof a == 'function' && (a = a(r)),
      ge(a) && (a = [a]),
      Array.isArray(a))
    )
      return a;
    if (!r) return a.default || [];
    let l = a[r];
    return (
      l || (l = a[this.getScriptPartFromCode(r)]),
      l || (l = a[this.formatLanguageCode(r)]),
      l || (l = a[this.getLanguagePartFromCode(r)]),
      l || (l = a.default),
      l || []
    );
  }
  toResolveHierarchy(a, r) {
    const l = this.getFallbackCodes(
        (r === !1 ? [] : r) || this.options.fallbackLng || [],
        a,
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
      ge(a) && (a.indexOf('-') > -1 || a.indexOf('_') > -1)
        ? (this.options.load !== 'languageOnly' &&
            c(this.formatLanguageCode(a)),
          this.options.load !== 'languageOnly' &&
            this.options.load !== 'currentOnly' &&
            c(this.getScriptPartFromCode(a)),
          this.options.load !== 'currentOnly' &&
            c(this.getLanguagePartFromCode(a)))
        : ge(a) && c(this.formatLanguageCode(a)),
      l.forEach((d) => {
        o.indexOf(d) < 0 && c(this.formatLanguageCode(d));
      }),
      o
    );
  }
}
const bg = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  Sg = {
    select: (n) => (n === 1 ? 'one' : 'other'),
    resolvedOptions: () => ({ pluralCategories: ['one', 'other'] }),
  };
class B1 {
  constructor(a, r = {}) {
    (this.languageUtils = a),
      (this.options = r),
      (this.logger = un.create('pluralResolver')),
      (this.pluralRulesCache = {});
  }
  addRule(a, r) {
    this.rules[a] = r;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(a, r = {}) {
    const l = Yr(a === 'dev' ? 'en' : a),
      o = r.ordinal ? 'ordinal' : 'cardinal',
      c = JSON.stringify({ cleanedCode: l, type: o });
    if (c in this.pluralRulesCache) return this.pluralRulesCache[c];
    let d;
    try {
      d = new Intl.PluralRules(l, { type: o });
    } catch {
      if (!Intl)
        return (
          this.logger.error('No Intl support, please use an Intl polyfill!'), Sg
        );
      if (!a.match(/-|_/)) return Sg;
      const m = this.languageUtils.getLanguagePartFromCode(a);
      d = this.getRule(m, r);
    }
    return (this.pluralRulesCache[c] = d), d;
  }
  needsPlural(a, r = {}) {
    let l = this.getRule(a, r);
    return (
      l || (l = this.getRule('dev', r)),
      l?.resolvedOptions().pluralCategories.length > 1
    );
  }
  getPluralFormsOfKey(a, r, l = {}) {
    return this.getSuffixes(a, l).map((o) => `${r}${o}`);
  }
  getSuffixes(a, r = {}) {
    let l = this.getRule(a, r);
    return (
      l || (l = this.getRule('dev', r)),
      l
        ? l
            .resolvedOptions()
            .pluralCategories.sort((o, c) => bg[o] - bg[c])
            .map(
              (o) =>
                `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ''}${o}`,
            )
        : []
    );
  }
  getSuffix(a, r, l = {}) {
    const o = this.getRule(a, l);
    return o
      ? `${this.options.prepend}${l.ordinal ? `ordinal${this.options.prepend}` : ''}${o.select(r)}`
      : (this.logger.warn(`no plural rule found for: ${a}`),
        this.getSuffix('dev', r, l));
  }
}
const xg = (n, a, r, l = '.', o = !0) => {
    let c = D1(n, a, r);
    return (
      !c &&
        o &&
        ge(r) &&
        ((c = af(n, r, l)), c === void 0 && (c = af(a, r, l))),
      c
    );
  },
  zc = (n) => n.replace(/\$/g, '$$$$');
class q1 {
  constructor(a = {}) {
    (this.logger = un.create('interpolator')),
      (this.options = a),
      (this.format = a?.interpolation?.format || ((r) => r)),
      this.init(a);
  }
  init(a = {}) {
    a.interpolation || (a.interpolation = { escapeValue: !0 });
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
      nestingPrefix: x,
      nestingPrefixEscaped: O,
      nestingSuffix: S,
      nestingSuffixEscaped: w,
      nestingOptionsSeparator: R,
      maxReplaces: _,
      alwaysFormat: q,
    } = a.interpolation;
    (this.escape = r !== void 0 ? r : N1),
      (this.escapeValue = l !== void 0 ? l : !0),
      (this.useRawValueToEscape = o !== void 0 ? o : !1),
      (this.prefix = c ? Ei(c) : d || '{{'),
      (this.suffix = h ? Ei(h) : m || '}}'),
      (this.formatSeparator = p || ','),
      (this.unescapePrefix = g ? '' : v || '-'),
      (this.unescapeSuffix = this.unescapePrefix ? '' : g || ''),
      (this.nestingPrefix = x ? Ei(x) : O || Ei('$t(')),
      (this.nestingSuffix = S ? Ei(S) : w || Ei(')')),
      (this.nestingOptionsSeparator = R || ','),
      (this.maxReplaces = _ || 1e3),
      (this.alwaysFormat = q !== void 0 ? q : !1),
      this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const a = (r, l) =>
      r?.source === l ? ((r.lastIndex = 0), r) : new RegExp(l, 'g');
    (this.regexp = a(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = a(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`,
      )),
      (this.nestingRegexp = a(
        this.nestingRegexp,
        `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`,
      ));
  }
  interpolate(a, r, l, o) {
    let c, d, h;
    const m =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      p = (O) => {
        if (O.indexOf(this.formatSeparator) < 0) {
          const _ = xg(
            r,
            m,
            O,
            this.options.keySeparator,
            this.options.ignoreJSONStructure,
          );
          return this.alwaysFormat
            ? this.format(_, void 0, l, { ...o, ...r, interpolationkey: O })
            : _;
        }
        const S = O.split(this.formatSeparator),
          w = S.shift().trim(),
          R = S.join(this.formatSeparator).trim();
        return this.format(
          xg(
            r,
            m,
            w,
            this.options.keySeparator,
            this.options.ignoreJSONStructure,
          ),
          R,
          l,
          { ...o, ...r, interpolationkey: w },
        );
      };
    this.resetRegExp();
    const g =
        o?.missingInterpolationHandler ||
        this.options.missingInterpolationHandler,
      v =
        o?.interpolation?.skipOnVariables !== void 0
          ? o.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (O) => zc(O) },
        {
          regex: this.regexp,
          safeValue: (O) => (this.escapeValue ? zc(this.escape(O)) : zc(O)),
        },
      ].forEach((O) => {
        for (h = 0; (c = O.regex.exec(a)); ) {
          const S = c[1].trim();
          if (((d = p(S)), d === void 0))
            if (typeof g == 'function') {
              const R = g(a, c, o);
              d = ge(R) ? R : '';
            } else if (o && Object.prototype.hasOwnProperty.call(o, S)) d = '';
            else if (v) {
              d = c[0];
              continue;
            } else
              this.logger.warn(
                `missed to pass in variable ${S} for interpolating ${a}`,
              ),
                (d = '');
          else !ge(d) && !this.useRawValueToEscape && (d = fg(d));
          const w = O.safeValue(d);
          if (
            ((a = a.replace(c[0], w)),
            v
              ? ((O.regex.lastIndex += d.length),
                (O.regex.lastIndex -= c[0].length))
              : (O.regex.lastIndex = 0),
            h++,
            h >= this.maxReplaces)
          )
            break;
        }
      }),
      a
    );
  }
  nest(a, r, l = {}) {
    let o, c, d;
    const h = (m, p) => {
      const g = this.nestingOptionsSeparator;
      if (m.indexOf(g) < 0) return m;
      const v = m.split(new RegExp(`${g}[ ]*{`));
      let x = `{${v[1]}`;
      (m = v[0]), (x = this.interpolate(x, d));
      const O = x.match(/'/g),
        S = x.match(/"/g);
      (((O?.length ?? 0) % 2 === 0 && !S) || S.length % 2 !== 0) &&
        (x = x.replace(/'/g, '"'));
      try {
        (d = JSON.parse(x)), p && (d = { ...p, ...d });
      } catch (w) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${m}`,
            w,
          ),
          `${m}${g}${x}`
        );
      }
      return (
        d.defaultValue &&
          d.defaultValue.indexOf(this.prefix) > -1 &&
          delete d.defaultValue,
        m
      );
    };
    for (; (o = this.nestingRegexp.exec(a)); ) {
      let m = [];
      (d = { ...l }),
        (d = d.replace && !ge(d.replace) ? d.replace : d),
        (d.applyPostProcessor = !1),
        delete d.defaultValue;
      const p = /{.*}/.test(o[1])
        ? o[1].lastIndexOf('}') + 1
        : o[1].indexOf(this.formatSeparator);
      if (
        (p !== -1 &&
          ((m = o[1]
            .slice(p)
            .split(this.formatSeparator)
            .map((g) => g.trim())
            .filter(Boolean)),
          (o[1] = o[1].slice(0, p))),
        (c = r(h.call(this, o[1].trim(), d), d)),
        c && o[0] === a && !ge(c))
      )
        return c;
      ge(c) || (c = fg(c)),
        c ||
          (this.logger.warn(`missed to resolve ${o[1]} for nesting ${a}`),
          (c = '')),
        m.length &&
          (c = m.reduce(
            (g, v) =>
              this.format(g, v, l.lng, { ...l, interpolationkey: o[1].trim() }),
            c.trim(),
          )),
        (a = a.replace(o[0], c)),
        (this.regexp.lastIndex = 0);
    }
    return a;
  }
}
const P1 = (n) => {
    let a = n.toLowerCase().trim();
    const r = {};
    if (n.indexOf('(') > -1) {
      const l = n.split('(');
      a = l[0].toLowerCase().trim();
      const o = l[1].substring(0, l[1].length - 1);
      a === 'currency' && o.indexOf(':') < 0
        ? r.currency || (r.currency = o.trim())
        : a === 'relativetime' && o.indexOf(':') < 0
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
    return { formatName: a, formatOptions: r };
  },
  wg = (n) => {
    const a = {};
    return (r, l, o) => {
      let c = o;
      o &&
        o.interpolationkey &&
        o.formatParams &&
        o.formatParams[o.interpolationkey] &&
        o[o.interpolationkey] &&
        (c = { ...c, [o.interpolationkey]: void 0 });
      const d = l + JSON.stringify(c);
      let h = a[d];
      return h || ((h = n(Yr(l), o)), (a[d] = h)), h(r);
    };
  },
  G1 = (n) => (a, r, l) => n(Yr(r), l)(a);
class V1 {
  constructor(a = {}) {
    (this.logger = un.create('formatter')), (this.options = a), this.init(a);
  }
  init(a, r = { interpolation: {} }) {
    this.formatSeparator = r.interpolation.formatSeparator || ',';
    const l = r.cacheInBuiltFormats ? wg : G1;
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
  add(a, r) {
    this.formats[a.toLowerCase().trim()] = r;
  }
  addCached(a, r) {
    this.formats[a.toLowerCase().trim()] = wg(r);
  }
  format(a, r, l, o = {}) {
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
      const { formatName: p, formatOptions: g } = P1(m);
      if (this.formats[p]) {
        let v = h;
        try {
          const x = o?.formatParams?.[o.interpolationkey] || {},
            O = x.locale || x.lng || o.locale || o.lng || l;
          v = this.formats[p](h, O, { ...g, ...o, ...x });
        } catch (x) {
          this.logger.warn(x);
        }
        return v;
      } else this.logger.warn(`there was no format function for ${p}`);
      return h;
    }, a);
  }
}
const F1 = (n, a) => {
  n.pending[a] !== void 0 && (delete n.pending[a], n.pendingCount--);
};
class Q1 extends eo {
  constructor(a, r, l, o = {}) {
    super(),
      (this.backend = a),
      (this.store = r),
      (this.services = l),
      (this.languageUtils = l.languageUtils),
      (this.options = o),
      (this.logger = un.create('backendConnector')),
      (this.waitingReads = []),
      (this.maxParallelReads = o.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5),
      (this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      this.backend?.init?.(l, o.backend, o);
  }
  queueLoad(a, r, l, o) {
    const c = {},
      d = {},
      h = {},
      m = {};
    return (
      a.forEach((p) => {
        let g = !0;
        r.forEach((v) => {
          const x = `${p}|${v}`;
          !l.reload && this.store.hasResourceBundle(p, v)
            ? (this.state[x] = 2)
            : this.state[x] < 0 ||
              (this.state[x] === 1
                ? d[x] === void 0 && (d[x] = !0)
                : ((this.state[x] = 1),
                  (g = !1),
                  d[x] === void 0 && (d[x] = !0),
                  c[x] === void 0 && (c[x] = !0),
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
  loaded(a, r, l) {
    const o = a.split('|'),
      c = o[0],
      d = o[1];
    r && this.emit('failedLoading', c, d, r),
      !r &&
        l &&
        this.store.addResourceBundle(c, d, l, void 0, void 0, { skipCopy: !0 }),
      (this.state[a] = r ? -1 : 2),
      r && l && (this.state[a] = 0);
    const h = {};
    this.queue.forEach((m) => {
      M1(m.loaded, [c], d),
        F1(m, a),
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
  read(a, r, l, o = 0, c = this.retryTimeout, d) {
    if (!a.length) return d(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: a,
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
            this.read.call(this, a, r, l, o + 1, c * 2, d);
          }, c);
          return;
        }
        d(p, g);
      },
      m = this.backend[l].bind(this.backend);
    if (m.length === 2) {
      try {
        const p = m(a, r);
        p && typeof p.then == 'function'
          ? p.then((g) => h(null, g)).catch(h)
          : h(null, p);
      } catch (p) {
        h(p);
      }
      return;
    }
    return m(a, r, h);
  }
  prepareLoading(a, r, l = {}, o) {
    if (!this.backend)
      return (
        this.logger.warn(
          'No backend was added via i18next.use. Will not load resources.',
        ),
        o && o()
      );
    ge(a) && (a = this.languageUtils.toResolveHierarchy(a)), ge(r) && (r = [r]);
    const c = this.queueLoad(a, r, l, o);
    if (!c.toLoad.length) return c.pending.length || o(), null;
    c.toLoad.forEach((d) => {
      this.loadOne(d);
    });
  }
  load(a, r, l) {
    this.prepareLoading(a, r, {}, l);
  }
  reload(a, r, l) {
    this.prepareLoading(a, r, { reload: !0 }, l);
  }
  loadOne(a, r = '') {
    const l = a.split('|'),
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
        this.loaded(a, d, h);
    });
  }
  saveMissing(a, r, l, o, c, d = {}, h = () => {}) {
    if (
      this.services?.utils?.hasLoadedNamespace &&
      !this.services?.utils?.hasLoadedNamespace(r)
    ) {
      this.logger.warn(
        `did not save key "${l}" as the namespace "${r}" was not yet loaded`,
        'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
      );
      return;
    }
    if (!(l == null || l === '')) {
      if (this.backend?.create) {
        const m = { ...d, isUpdate: c },
          p = this.backend.create.bind(this.backend);
        if (p.length < 6)
          try {
            let g;
            p.length === 5 ? (g = p(a, r, l, o, m)) : (g = p(a, r, l, o)),
              g && typeof g.then == 'function'
                ? g.then((v) => h(null, v)).catch(h)
                : h(null, g);
          } catch (g) {
            h(g);
          }
        else p(a, r, l, o, h, m);
      }
      !a || !a[0] || this.store.addResource(a[0], r, l, o);
    }
  }
}
const Eg = () => ({
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
    overloadTranslationOptionHandler: (n) => {
      let a = {};
      if (
        (typeof n[1] == 'object' && (a = n[1]),
        ge(n[1]) && (a.defaultValue = n[1]),
        ge(n[2]) && (a.tDescription = n[2]),
        typeof n[2] == 'object' || typeof n[3] == 'object')
      ) {
        const r = n[3] || n[2];
        Object.keys(r).forEach((l) => {
          a[l] = r[l];
        });
      }
      return a;
    },
    interpolation: {
      escapeValue: !0,
      format: (n) => n,
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
  Og = (n) => (
    ge(n.ns) && (n.ns = [n.ns]),
    ge(n.fallbackLng) && (n.fallbackLng = [n.fallbackLng]),
    ge(n.fallbackNS) && (n.fallbackNS = [n.fallbackNS]),
    n.supportedLngs?.indexOf?.('cimode') < 0 &&
      (n.supportedLngs = n.supportedLngs.concat(['cimode'])),
    typeof n.initImmediate == 'boolean' && (n.initAsync = n.initImmediate),
    n
  ),
  Rl = () => {},
  Y1 = (n) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach((r) => {
      typeof n[r] == 'function' && (n[r] = n[r].bind(n));
    });
  };
class Kr extends eo {
  constructor(a = {}, r) {
    if (
      (super(),
      (this.options = Og(a)),
      (this.services = {}),
      (this.logger = un),
      (this.modules = { external: [] }),
      Y1(this),
      r && !this.isInitialized && !a.isClone)
    ) {
      if (!this.options.initAsync) return this.init(a, r), this;
      setTimeout(() => {
        this.init(a, r);
      }, 0);
    }
  }
  init(a = {}, r) {
    (this.isInitializing = !0),
      typeof a == 'function' && ((r = a), (a = {})),
      a.defaultNS == null &&
        a.ns &&
        (ge(a.ns)
          ? (a.defaultNS = a.ns)
          : a.ns.indexOf('translation') < 0 && (a.defaultNS = a.ns[0]));
    const l = Eg();
    (this.options = { ...l, ...this.options, ...Og(a) }),
      (this.options.interpolation = {
        ...l.interpolation,
        ...this.options.interpolation,
      }),
      a.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = a.keySeparator),
      a.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = a.nsSeparator);
    const o = (p) => (p ? (typeof p == 'function' ? new p() : p) : null);
    if (!this.options.isClone) {
      this.modules.logger
        ? un.init(o(this.modules.logger), this.options)
        : un.init(null, this.options);
      let p;
      this.modules.formatter ? (p = this.modules.formatter) : (p = V1);
      const g = new vg(this.options);
      this.store = new mg(this.options.resources, this.options);
      const v = this.services;
      (v.logger = un),
        (v.resourceStore = this.store),
        (v.languageUtils = g),
        (v.pluralResolver = new B1(g, {
          prepend: this.options.pluralSeparator,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        this.options.interpolation.format &&
          this.options.interpolation.format !== l.interpolation.format &&
          this.logger.deprecate(
            'init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting',
          ),
        p &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === l.interpolation.format) &&
          ((v.formatter = o(p)),
          v.formatter.init && v.formatter.init(v, this.options),
          (this.options.interpolation.format = v.formatter.format.bind(
            v.formatter,
          ))),
        (v.interpolator = new q1(this.options)),
        (v.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (v.backendConnector = new Q1(
          o(this.modules.backend),
          v.resourceStore,
          v,
          this.options,
        )),
        v.backendConnector.on('*', (O, ...S) => {
          this.emit(O, ...S);
        }),
        this.modules.languageDetector &&
          ((v.languageDetector = o(this.modules.languageDetector)),
          v.languageDetector.init &&
            v.languageDetector.init(v, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((v.i18nFormat = o(this.modules.i18nFormat)),
          v.i18nFormat.init && v.i18nFormat.init(this)),
        (this.translator = new Yl(this.services, this.options)),
        this.translator.on('*', (O, ...S) => {
          this.emit(O, ...S);
        }),
        this.modules.external.forEach((O) => {
          O.init && O.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      r || (r = Rl),
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
    const h = Br(),
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
  loadResources(a, r = Rl) {
    let l = r;
    const o = ge(a) ? a : this.language;
    if (
      (typeof a == 'function' && (l = a),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        o?.toLowerCase() === 'cimode' &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return l();
      const c = [],
        d = (h) => {
          if (!h || h === 'cimode') return;
          this.services.languageUtils.toResolveHierarchy(h).forEach((p) => {
            p !== 'cimode' && c.indexOf(p) < 0 && c.push(p);
          });
        };
      o
        ? d(o)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((m) => d(m)),
        this.options.preload?.forEach?.((h) => d(h)),
        this.services.backendConnector.load(c, this.options.ns, (h) => {
          !h &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            l(h);
        });
    } else l(null);
  }
  reloadResources(a, r, l) {
    const o = Br();
    return (
      typeof a == 'function' && ((l = a), (a = void 0)),
      typeof r == 'function' && ((l = r), (r = void 0)),
      a || (a = this.languages),
      r || (r = this.options.ns),
      l || (l = Rl),
      this.services.backendConnector.reload(a, r, (c) => {
        o.resolve(), l(c);
      }),
      o
    );
  }
  use(a) {
    if (!a)
      throw new Error(
        'You are passing an undefined module! Please check the object you are passing to i18next.use()',
      );
    if (!a.type)
      throw new Error(
        'You are passing a wrong module! Please check the object you are passing to i18next.use()',
      );
    return (
      a.type === 'backend' && (this.modules.backend = a),
      (a.type === 'logger' || (a.log && a.warn && a.error)) &&
        (this.modules.logger = a),
      a.type === 'languageDetector' && (this.modules.languageDetector = a),
      a.type === 'i18nFormat' && (this.modules.i18nFormat = a),
      a.type === 'postProcessor' && Py.addPostProcessor(a),
      a.type === 'formatter' && (this.modules.formatter = a),
      a.type === '3rdParty' && this.modules.external.push(a),
      this
    );
  }
  setResolvedLanguage(a) {
    if (!(!a || !this.languages) && !(['cimode', 'dev'].indexOf(a) > -1)) {
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
        this.languages.indexOf(a) < 0 &&
        this.store.hasLanguageSomeTranslations(a) &&
        ((this.resolvedLanguage = a), this.languages.unshift(a));
    }
  }
  changeLanguage(a, r) {
    this.isLanguageChangingTo = a;
    const l = Br();
    this.emit('languageChanging', a);
    const o = (h) => {
        (this.language = h),
          (this.languages = this.services.languageUtils.toResolveHierarchy(h)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(h);
      },
      c = (h, m) => {
        m
          ? this.isLanguageChangingTo === a &&
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
        !a && !h && this.services.languageDetector && (h = []);
        const m = ge(h) ? h : h && h[0],
          p = this.store.hasLanguageSomeTranslations(m)
            ? m
            : this.services.languageUtils.getBestMatchFromCodes(
                ge(h) ? [h] : h,
              );
        p &&
          (this.language || o(p),
          this.translator.language || this.translator.changeLanguage(p),
          this.services.languageDetector?.cacheUserLanguage?.(p)),
          this.loadResources(p, (g) => {
            c(g, p);
          });
      };
    return (
      !a &&
      this.services.languageDetector &&
      !this.services.languageDetector.async
        ? d(this.services.languageDetector.detect())
        : !a &&
            this.services.languageDetector &&
            this.services.languageDetector.async
          ? this.services.languageDetector.detect.length === 0
            ? this.services.languageDetector.detect().then(d)
            : this.services.languageDetector.detect(d)
          : d(a),
      l
    );
  }
  getFixedT(a, r, l) {
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
          ? (g = c.map(
              (v) => (
                typeof v == 'function' &&
                  (v = rf(v, { ...this.options, ...d })),
                `${m.keyPrefix}${p}${v}`
              ),
            ))
          : (typeof c == 'function' && (c = rf(c, { ...this.options, ...d })),
            (g = m.keyPrefix ? `${m.keyPrefix}${p}${c}` : c)),
        this.t(g, m)
      );
    };
    return ge(a) ? (o.lng = a) : (o.lngs = a), (o.ns = r), (o.keyPrefix = l), o;
  }
  t(...a) {
    return this.translator?.translate(...a);
  }
  exists(...a) {
    return this.translator?.exists(...a);
  }
  setDefaultNamespace(a) {
    this.options.defaultNS = a;
  }
  hasLoadedNamespace(a, r = {}) {
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
      this.hasResourceBundle(l, a) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (d(l, a) && (!o || d(c, a)))
    );
  }
  loadNamespaces(a, r) {
    const l = Br();
    return this.options.ns
      ? (ge(a) && (a = [a]),
        a.forEach((o) => {
          this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
        }),
        this.loadResources((o) => {
          l.resolve(), r && r(o);
        }),
        l)
      : (r && r(), Promise.resolve());
  }
  loadLanguages(a, r) {
    const l = Br();
    ge(a) && (a = [a]);
    const o = this.options.preload || [],
      c = a.filter(
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
  dir(a) {
    if (
      (a ||
        (a =
          this.resolvedLanguage ||
          (this.languages?.length > 0 ? this.languages[0] : this.language)),
      !a)
    )
      return 'rtl';
    try {
      const o = new Intl.Locale(a);
      if (o && o.getTextInfo) {
        const c = o.getTextInfo();
        if (c && c.direction) return c.direction;
      }
    } catch {}
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
      l = this.services?.languageUtils || new vg(Eg());
    return a.toLowerCase().indexOf('-latn') > 1
      ? 'ltr'
      : r.indexOf(l.getLanguagePartFromCode(a)) > -1 ||
          a.toLowerCase().indexOf('-arab') > 1
        ? 'rtl'
        : 'ltr';
  }
  static createInstance(a = {}, r) {
    return new Kr(a, r);
  }
  cloneInstance(a = {}, r = Rl) {
    const l = a.forkResourceStore;
    l && delete a.forkResourceStore;
    const o = { ...this.options, ...a, isClone: !0 },
      c = new Kr(o);
    if (
      ((a.debug !== void 0 || a.prefix !== void 0) &&
        (c.logger = c.logger.clone(a)),
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
      (c.store = new mg(h, o)), (c.services.resourceStore = c.store);
    }
    return (
      (c.translator = new Yl(c.services, o)),
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
const it = Kr.createInstance();
it.createInstance = Kr.createInstance;
it.createInstance;
it.dir;
it.init;
it.loadResources;
it.reloadResources;
it.use;
it.changeLanguage;
it.getFixedT;
it.t;
it.exists;
it.setDefaultNamespace;
it.hasLoadedNamespace;
it.loadNamespaces;
it.loadLanguages;
const K1 = (n, a, r, l) => {
    const o = [r, { code: a, ...(l || {}) }];
    if (n?.services?.logger?.forward)
      return n.services.logger.forward(o, 'warn', 'react-i18next::', !0);
    _a(o[0]) && (o[0] = `react-i18next:: ${o[0]}`),
      n?.services?.logger?.warn
        ? n.services.logger.warn(...o)
        : console?.warn && console.warn(...o);
  },
  Rg = {},
  sf = (n, a, r, l) => {
    (_a(r) && Rg[r]) || (_a(r) && (Rg[r] = new Date()), K1(n, a, r, l));
  },
  Vy = (n, a) => () => {
    if (n.isInitialized) a();
    else {
      const r = () => {
        setTimeout(() => {
          n.off('initialized', r);
        }, 0),
          a();
      };
      n.on('initialized', r);
    }
  },
  lf = (n, a, r) => {
    n.loadNamespaces(a, Vy(n, r));
  },
  Ag = (n, a, r, l) => {
    if (
      (_a(r) && (r = [r]),
      n.options.preload && n.options.preload.indexOf(a) > -1)
    )
      return lf(n, r, l);
    r.forEach((o) => {
      n.options.ns.indexOf(o) < 0 && n.options.ns.push(o);
    }),
      n.loadLanguages(a, Vy(n, l));
  },
  X1 = (n, a, r = {}) =>
    !a.languages || !a.languages.length
      ? (sf(a, 'NO_LANGUAGES', 'i18n.languages were undefined or empty', {
          languages: a.languages,
        }),
        !0)
      : a.hasLoadedNamespace(n, {
          lng: r.lng,
          precheck: (l, o) => {
            if (
              r.bindI18n &&
              r.bindI18n.indexOf('languageChanging') > -1 &&
              l.services.backendConnector.backend &&
              l.isLanguageChangingTo &&
              !o(l.isLanguageChangingTo, n)
            )
              return !1;
          },
        }),
  _a = (n) => typeof n == 'string',
  Z1 = (n) => typeof n == 'object' && n !== null,
  $1 =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  I1 = {
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
  J1 = (n) => I1[n],
  W1 = (n) => n.replace($1, J1);
let of = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: !0,
  unescape: W1,
};
const ew = (n = {}) => {
    of = { ...of, ...n };
  },
  tw = () => of;
let Fy;
const nw = (n) => {
    Fy = n;
  },
  aw = () => Fy,
  iw = {
    type: '3rdParty',
    init(n) {
      ew(n.options.react), nw(n);
    },
  },
  rw = E.createContext();
class sw {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(a) {
    a.forEach((r) => {
      this.usedNamespaces[r] || (this.usedNamespaces[r] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const lw = (n, a) => {
    const r = E.useRef();
    return (
      E.useEffect(() => {
        r.current = n;
      }, [n, a]),
      r.current
    );
  },
  Qy = (n, a, r, l) => n.getFixedT(a, r, l),
  ow = (n, a, r, l) => E.useCallback(Qy(n, a, r, l), [n, a, r, l]),
  uw = (n, a = {}) => {
    const { i18n: r } = a,
      { i18n: l, defaultNS: o } = E.useContext(rw) || {},
      c = r || l || aw();
    if ((c && !c.reportNamespaces && (c.reportNamespaces = new sw()), !c)) {
      sf(
        c,
        'NO_I18NEXT_INSTANCE',
        'useTranslation: You will need to pass in an i18next instance by using initReactI18next',
      );
      const k = (J, V) =>
          _a(V)
            ? V
            : Z1(V) && _a(V.defaultValue)
              ? V.defaultValue
              : Array.isArray(J)
                ? J[J.length - 1]
                : J,
        B = [k, {}, !1];
      return (B.t = k), (B.i18n = {}), (B.ready = !1), B;
    }
    c.options.react?.wait &&
      sf(
        c,
        'DEPRECATED_OPTION',
        'useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.',
      );
    const d = { ...tw(), ...c.options.react, ...a },
      { useSuspense: h, keyPrefix: m } = d;
    let p = o || c.options?.defaultNS;
    (p = _a(p) ? [p] : p || ['translation']),
      c.reportNamespaces.addUsedNamespaces?.(p);
    const g =
        (c.isInitialized || c.initializedStoreOnce) &&
        p.every((k) => X1(k, c, d)),
      v = ow(c, a.lng || null, d.nsMode === 'fallback' ? p : p[0], m),
      x = () => v,
      O = () => Qy(c, a.lng || null, d.nsMode === 'fallback' ? p : p[0], m),
      [S, w] = E.useState(x);
    let R = p.join();
    a.lng && (R = `${a.lng}${R}`);
    const _ = lw(R),
      q = E.useRef(!0);
    E.useEffect(() => {
      const { bindI18n: k, bindI18nStore: B } = d;
      (q.current = !0),
        !g &&
          !h &&
          (a.lng
            ? Ag(c, a.lng, p, () => {
                q.current && w(O);
              })
            : lf(c, p, () => {
                q.current && w(O);
              })),
        g && _ && _ !== R && q.current && w(O);
      const J = () => {
        q.current && w(O);
      };
      return (
        k && c?.on(k, J),
        B && c?.store.on(B, J),
        () => {
          (q.current = !1),
            c && k && k?.split(' ').forEach((V) => c.off(V, J)),
            B && c && B.split(' ').forEach((V) => c.store.off(V, J));
        }
      );
    }, [c, R]),
      E.useEffect(() => {
        q.current && g && w(x);
      }, [c, m, g]);
    const j = [S, c, g];
    if (((j.t = S), (j.i18n = c), (j.ready = g), g || (!g && !h))) return j;
    throw new Promise((k) => {
      a.lng ? Ag(c, a.lng, p, () => k()) : lf(c, p, () => k());
    });
  },
  { slice: cw, forEach: fw } = [];
function dw(n) {
  return (
    fw.call(cw.call(arguments, 1), (a) => {
      if (a) for (const r in a) n[r] === void 0 && (n[r] = a[r]);
    }),
    n
  );
}
function hw(n) {
  return typeof n != 'string'
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
      ].some((r) => r.test(n));
}
const Tg = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
  pw = function (n, a) {
    const l =
        arguments.length > 2 && arguments[2] !== void 0
          ? arguments[2]
          : { path: '/' },
      o = encodeURIComponent(a);
    let c = `${n}=${o}`;
    if (l.maxAge > 0) {
      const d = l.maxAge - 0;
      if (Number.isNaN(d)) throw new Error('maxAge should be a Number');
      c += `; Max-Age=${Math.floor(d)}`;
    }
    if (l.domain) {
      if (!Tg.test(l.domain)) throw new TypeError('option domain is invalid');
      c += `; Domain=${l.domain}`;
    }
    if (l.path) {
      if (!Tg.test(l.path)) throw new TypeError('option path is invalid');
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
  Cg = {
    create(n, a, r, l) {
      let o =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : { path: '/', sameSite: 'strict' };
      r &&
        ((o.expires = new Date()),
        o.expires.setTime(o.expires.getTime() + r * 60 * 1e3)),
        l && (o.domain = l),
        (document.cookie = pw(n, a, o));
    },
    read(n) {
      const a = `${n}=`,
        r = document.cookie.split(';');
      for (let l = 0; l < r.length; l++) {
        let o = r[l];
        for (; o.charAt(0) === ' '; ) o = o.substring(1, o.length);
        if (o.indexOf(a) === 0) return o.substring(a.length, o.length);
      }
      return null;
    },
    remove(n, a) {
      this.create(n, '', -1, a);
    },
  };
var mw = {
    name: 'cookie',
    lookup(n) {
      let { lookupCookie: a } = n;
      if (a && typeof document < 'u') return Cg.read(a) || void 0;
    },
    cacheUserLanguage(n, a) {
      let {
        lookupCookie: r,
        cookieMinutes: l,
        cookieDomain: o,
        cookieOptions: c,
      } = a;
      r && typeof document < 'u' && Cg.create(r, n, l, o, c);
    },
  },
  gw = {
    name: 'querystring',
    lookup(n) {
      let { lookupQuerystring: a } = n,
        r;
      if (typeof window < 'u') {
        let { search: l } = window.location;
        !window.location.search &&
          window.location.hash?.indexOf('?') > -1 &&
          (l = window.location.hash.substring(
            window.location.hash.indexOf('?'),
          ));
        const c = l.substring(1).split('&');
        for (let d = 0; d < c.length; d++) {
          const h = c[d].indexOf('=');
          h > 0 && c[d].substring(0, h) === a && (r = c[d].substring(h + 1));
        }
      }
      return r;
    },
  },
  yw = {
    name: 'hash',
    lookup(n) {
      let { lookupHash: a, lookupFromHashIndex: r } = n,
        l;
      if (typeof window < 'u') {
        const { hash: o } = window.location;
        if (o && o.length > 2) {
          const c = o.substring(1);
          if (a) {
            const d = c.split('&');
            for (let h = 0; h < d.length; h++) {
              const m = d[h].indexOf('=');
              m > 0 &&
                d[h].substring(0, m) === a &&
                (l = d[h].substring(m + 1));
            }
          }
          if (l) return l;
          if (!l && r > -1) {
            const d = o.match(/\/([a-zA-Z-]*)/g);
            return Array.isArray(d)
              ? d[typeof r == 'number' ? r : 0]?.replace('/', '')
              : void 0;
          }
        }
      }
      return l;
    },
  };
let Oi = null;
const Mg = () => {
  if (Oi !== null) return Oi;
  try {
    if (((Oi = typeof window < 'u' && window.localStorage !== null), !Oi))
      return !1;
    const n = 'i18next.translate.boo';
    window.localStorage.setItem(n, 'foo'), window.localStorage.removeItem(n);
  } catch {
    Oi = !1;
  }
  return Oi;
};
var vw = {
  name: 'localStorage',
  lookup(n) {
    let { lookupLocalStorage: a } = n;
    if (a && Mg()) return window.localStorage.getItem(a) || void 0;
  },
  cacheUserLanguage(n, a) {
    let { lookupLocalStorage: r } = a;
    r && Mg() && window.localStorage.setItem(r, n);
  },
};
let Ri = null;
const Dg = () => {
  if (Ri !== null) return Ri;
  try {
    if (((Ri = typeof window < 'u' && window.sessionStorage !== null), !Ri))
      return !1;
    const n = 'i18next.translate.boo';
    window.sessionStorage.setItem(n, 'foo'),
      window.sessionStorage.removeItem(n);
  } catch {
    Ri = !1;
  }
  return Ri;
};
var bw = {
    name: 'sessionStorage',
    lookup(n) {
      let { lookupSessionStorage: a } = n;
      if (a && Dg()) return window.sessionStorage.getItem(a) || void 0;
    },
    cacheUserLanguage(n, a) {
      let { lookupSessionStorage: r } = a;
      r && Dg() && window.sessionStorage.setItem(r, n);
    },
  },
  Sw = {
    name: 'navigator',
    lookup(n) {
      const a = [];
      if (typeof navigator < 'u') {
        const { languages: r, userLanguage: l, language: o } = navigator;
        if (r) for (let c = 0; c < r.length; c++) a.push(r[c]);
        l && a.push(l), o && a.push(o);
      }
      return a.length > 0 ? a : void 0;
    },
  },
  xw = {
    name: 'htmlTag',
    lookup(n) {
      let { htmlTag: a } = n,
        r;
      const l = a || (typeof document < 'u' ? document.documentElement : null);
      return (
        l &&
          typeof l.getAttribute == 'function' &&
          (r = l.getAttribute('lang')),
        r
      );
    },
  },
  ww = {
    name: 'path',
    lookup(n) {
      let { lookupFromPathIndex: a } = n;
      if (typeof window > 'u') return;
      const r = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
      return Array.isArray(r)
        ? r[typeof a == 'number' ? a : 0]?.replace('/', '')
        : void 0;
    },
  },
  Ew = {
    name: 'subdomain',
    lookup(n) {
      let { lookupFromSubdomainIndex: a } = n;
      const r = typeof a == 'number' ? a + 1 : 1,
        l =
          typeof window < 'u' &&
          window.location?.hostname?.match(
            /^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i,
          );
      if (l) return l[r];
    },
  };
let Yy = !1;
try {
  document.cookie, (Yy = !0);
} catch {}
const Ky = [
  'querystring',
  'cookie',
  'localStorage',
  'sessionStorage',
  'navigator',
  'htmlTag',
];
Yy || Ky.splice(1, 1);
const Ow = () => ({
  order: Ky,
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupSessionStorage: 'i18nextLng',
  caches: ['localStorage'],
  excludeCacheFor: ['cimode'],
  convertDetectedLanguage: (n) => n,
});
class Xy {
  constructor(a) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.type = 'languageDetector'), (this.detectors = {}), this.init(a, r);
  }
  init() {
    let a =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : { languageUtils: {} },
      r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    (this.services = a),
      (this.options = dw(r, this.options || {}, Ow())),
      typeof this.options.convertDetectedLanguage == 'string' &&
        this.options.convertDetectedLanguage.indexOf('15897') > -1 &&
        (this.options.convertDetectedLanguage = (o) => o.replace('-', '_')),
      this.options.lookupFromUrlIndex &&
        (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
      (this.i18nOptions = l),
      this.addDetector(mw),
      this.addDetector(gw),
      this.addDetector(vw),
      this.addDetector(bw),
      this.addDetector(Sw),
      this.addDetector(xw),
      this.addDetector(ww),
      this.addDetector(Ew),
      this.addDetector(yw);
  }
  addDetector(a) {
    return (this.detectors[a.name] = a), this;
  }
  detect() {
    let a =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : this.options.order,
      r = [];
    return (
      a.forEach((l) => {
        if (this.detectors[l]) {
          let o = this.detectors[l].lookup(this.options);
          o && typeof o == 'string' && (o = [o]), o && (r = r.concat(o));
        }
      }),
      (r = r
        .filter((l) => l != null && !hw(l))
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
  cacheUserLanguage(a) {
    let r =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : this.options.caches;
    r &&
      ((this.options.excludeCacheFor &&
        this.options.excludeCacheFor.indexOf(a) > -1) ||
        r.forEach((l) => {
          this.detectors[l] &&
            this.detectors[l].cacheUserLanguage(a, this.options);
        }));
  }
}
Xy.type = 'languageDetector';
const Rw = 'Uzbek. Bizning saytga xush kelibsiz',
  Aw = 'Til',
  Tw = { welcome: Rw, language: Aw },
  Cw = 'Kiril. Bizning saytga xush kelibsiz',
  Mw = 'Til',
  Dw = { welcome: Cw, language: Mw },
  _w = 'Rus. Bizning saytga xush kelibsiz',
  Nw = 'Til',
  Lw = { welcome: _w, language: Nw };
it.use(Xy)
  .use(iw)
  .init({
    resources: {
      uz: { translation: Tw },
      ru: { translation: Lw },
      ki: { translation: Dw },
    },
    fallbackLng: 'uz',
    interpolation: { escapeValue: !1 },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });
function Zy(n, a) {
  return function () {
    return n.apply(a, arguments);
  };
}
const { toString: zw } = Object.prototype,
  { getPrototypeOf: Df } = Object,
  { iterator: to, toStringTag: $y } = Symbol,
  no = ((n) => (a) => {
    const r = zw.call(a);
    return n[r] || (n[r] = r.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  $t = (n) => ((n = n.toLowerCase()), (a) => no(a) === n),
  ao = (n) => (a) => typeof a === n,
  { isArray: zi } = Array,
  Ni = ao('undefined');
function es(n) {
  return (
    n !== null &&
    !Ni(n) &&
    n.constructor !== null &&
    !Ni(n.constructor) &&
    bt(n.constructor.isBuffer) &&
    n.constructor.isBuffer(n)
  );
}
const Iy = $t('ArrayBuffer');
function Uw(n) {
  let a;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (a = ArrayBuffer.isView(n))
      : (a = n && n.buffer && Iy(n.buffer)),
    a
  );
}
const jw = ao('string'),
  bt = ao('function'),
  Jy = ao('number'),
  ts = (n) => n !== null && typeof n == 'object',
  kw = (n) => n === !0 || n === !1,
  Ul = (n) => {
    if (no(n) !== 'object') return !1;
    const a = Df(n);
    return (
      (a === null ||
        a === Object.prototype ||
        Object.getPrototypeOf(a) === null) &&
      !($y in n) &&
      !(to in n)
    );
  },
  Hw = (n) => {
    if (!ts(n) || es(n)) return !1;
    try {
      return (
        Object.keys(n).length === 0 &&
        Object.getPrototypeOf(n) === Object.prototype
      );
    } catch {
      return !1;
    }
  },
  Bw = $t('Date'),
  qw = $t('File'),
  Pw = $t('Blob'),
  Gw = $t('FileList'),
  Vw = (n) => ts(n) && bt(n.pipe),
  Fw = (n) => {
    let a;
    return (
      n &&
      ((typeof FormData == 'function' && n instanceof FormData) ||
        (bt(n.append) &&
          ((a = no(n)) === 'formdata' ||
            (a === 'object' &&
              bt(n.toString) &&
              n.toString() === '[object FormData]'))))
    );
  },
  Qw = $t('URLSearchParams'),
  [Yw, Kw, Xw, Zw] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(
    $t,
  ),
  $w = (n) =>
    n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function ns(n, a, { allOwnKeys: r = !1 } = {}) {
  if (n === null || typeof n > 'u') return;
  let l, o;
  if ((typeof n != 'object' && (n = [n]), zi(n)))
    for (l = 0, o = n.length; l < o; l++) a.call(null, n[l], l, n);
  else {
    if (es(n)) return;
    const c = r ? Object.getOwnPropertyNames(n) : Object.keys(n),
      d = c.length;
    let h;
    for (l = 0; l < d; l++) (h = c[l]), a.call(null, n[h], h, n);
  }
}
function Wy(n, a) {
  if (es(n)) return null;
  a = a.toLowerCase();
  const r = Object.keys(n);
  let l = r.length,
    o;
  for (; l-- > 0; ) if (((o = r[l]), a === o.toLowerCase())) return o;
  return null;
}
const Da =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : global,
  ev = (n) => !Ni(n) && n !== Da;
function uf() {
  const { caseless: n, skipUndefined: a } = (ev(this) && this) || {},
    r = {},
    l = (o, c) => {
      const d = (n && Wy(r, c)) || c;
      Ul(r[d]) && Ul(o)
        ? (r[d] = uf(r[d], o))
        : Ul(o)
          ? (r[d] = uf({}, o))
          : zi(o)
            ? (r[d] = o.slice())
            : (!a || !Ni(o)) && (r[d] = o);
    };
  for (let o = 0, c = arguments.length; o < c; o++)
    arguments[o] && ns(arguments[o], l);
  return r;
}
const Iw = (n, a, r, { allOwnKeys: l } = {}) => (
    ns(
      a,
      (o, c) => {
        r && bt(o) ? (n[c] = Zy(o, r)) : (n[c] = o);
      },
      { allOwnKeys: l },
    ),
    n
  ),
  Jw = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n),
  Ww = (n, a, r, l) => {
    (n.prototype = Object.create(a.prototype, l)),
      (n.prototype.constructor = n),
      Object.defineProperty(n, 'super', { value: a.prototype }),
      r && Object.assign(n.prototype, r);
  },
  eE = (n, a, r, l) => {
    let o, c, d;
    const h = {};
    if (((a = a || {}), n == null)) return a;
    do {
      for (o = Object.getOwnPropertyNames(n), c = o.length; c-- > 0; )
        (d = o[c]), (!l || l(d, n, a)) && !h[d] && ((a[d] = n[d]), (h[d] = !0));
      n = r !== !1 && Df(n);
    } while (n && (!r || r(n, a)) && n !== Object.prototype);
    return a;
  },
  tE = (n, a, r) => {
    (n = String(n)),
      (r === void 0 || r > n.length) && (r = n.length),
      (r -= a.length);
    const l = n.indexOf(a, r);
    return l !== -1 && l === r;
  },
  nE = (n) => {
    if (!n) return null;
    if (zi(n)) return n;
    let a = n.length;
    if (!Jy(a)) return null;
    const r = new Array(a);
    for (; a-- > 0; ) r[a] = n[a];
    return r;
  },
  aE = (
    (n) => (a) =>
      n && a instanceof n
  )(typeof Uint8Array < 'u' && Df(Uint8Array)),
  iE = (n, a) => {
    const l = (n && n[to]).call(n);
    let o;
    for (; (o = l.next()) && !o.done; ) {
      const c = o.value;
      a.call(n, c[0], c[1]);
    }
  },
  rE = (n, a) => {
    let r;
    const l = [];
    for (; (r = n.exec(a)) !== null; ) l.push(r);
    return l;
  },
  sE = $t('HTMLFormElement'),
  lE = (n) =>
    n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (r, l, o) {
      return l.toUpperCase() + o;
    }),
  _g = (
    ({ hasOwnProperty: n }) =>
    (a, r) =>
      n.call(a, r)
  )(Object.prototype),
  oE = $t('RegExp'),
  tv = (n, a) => {
    const r = Object.getOwnPropertyDescriptors(n),
      l = {};
    ns(r, (o, c) => {
      let d;
      (d = a(o, c, n)) !== !1 && (l[c] = d || o);
    }),
      Object.defineProperties(n, l);
  },
  uE = (n) => {
    tv(n, (a, r) => {
      if (bt(n) && ['arguments', 'caller', 'callee'].indexOf(r) !== -1)
        return !1;
      const l = n[r];
      if (bt(l)) {
        if (((a.enumerable = !1), 'writable' in a)) {
          a.writable = !1;
          return;
        }
        a.set ||
          (a.set = () => {
            throw Error("Can not rewrite read-only method '" + r + "'");
          });
      }
    });
  },
  cE = (n, a) => {
    const r = {},
      l = (o) => {
        o.forEach((c) => {
          r[c] = !0;
        });
      };
    return zi(n) ? l(n) : l(String(n).split(a)), r;
  },
  fE = () => {},
  dE = (n, a) => (n != null && Number.isFinite((n = +n)) ? n : a);
function hE(n) {
  return !!(n && bt(n.append) && n[$y] === 'FormData' && n[to]);
}
const pE = (n) => {
    const a = new Array(10),
      r = (l, o) => {
        if (ts(l)) {
          if (a.indexOf(l) >= 0) return;
          if (es(l)) return l;
          if (!('toJSON' in l)) {
            a[o] = l;
            const c = zi(l) ? [] : {};
            return (
              ns(l, (d, h) => {
                const m = r(d, o + 1);
                !Ni(m) && (c[h] = m);
              }),
              (a[o] = void 0),
              c
            );
          }
        }
        return l;
      };
    return r(n, 0);
  },
  mE = $t('AsyncFunction'),
  gE = (n) => n && (ts(n) || bt(n)) && bt(n.then) && bt(n.catch),
  nv = ((n, a) =>
    n
      ? setImmediate
      : a
        ? ((r, l) => (
            Da.addEventListener(
              'message',
              ({ source: o, data: c }) => {
                o === Da && c === r && l.length && l.shift()();
              },
              !1,
            ),
            (o) => {
              l.push(o), Da.postMessage(r, '*');
            }
          ))(`axios@${Math.random()}`, [])
        : (r) => setTimeout(r))(
    typeof setImmediate == 'function',
    bt(Da.postMessage),
  ),
  yE =
    typeof queueMicrotask < 'u'
      ? queueMicrotask.bind(Da)
      : (typeof process < 'u' && process.nextTick) || nv,
  vE = (n) => n != null && bt(n[to]),
  P = {
    isArray: zi,
    isArrayBuffer: Iy,
    isBuffer: es,
    isFormData: Fw,
    isArrayBufferView: Uw,
    isString: jw,
    isNumber: Jy,
    isBoolean: kw,
    isObject: ts,
    isPlainObject: Ul,
    isEmptyObject: Hw,
    isReadableStream: Yw,
    isRequest: Kw,
    isResponse: Xw,
    isHeaders: Zw,
    isUndefined: Ni,
    isDate: Bw,
    isFile: qw,
    isBlob: Pw,
    isRegExp: oE,
    isFunction: bt,
    isStream: Vw,
    isURLSearchParams: Qw,
    isTypedArray: aE,
    isFileList: Gw,
    forEach: ns,
    merge: uf,
    extend: Iw,
    trim: $w,
    stripBOM: Jw,
    inherits: Ww,
    toFlatObject: eE,
    kindOf: no,
    kindOfTest: $t,
    endsWith: tE,
    toArray: nE,
    forEachEntry: iE,
    matchAll: rE,
    isHTMLForm: sE,
    hasOwnProperty: _g,
    hasOwnProp: _g,
    reduceDescriptors: tv,
    freezeMethods: uE,
    toObjectSet: cE,
    toCamelCase: lE,
    noop: fE,
    toFiniteNumber: dE,
    findKey: Wy,
    global: Da,
    isContextDefined: ev,
    isSpecCompliantForm: hE,
    toJSONObject: pE,
    isAsyncFn: mE,
    isThenable: gE,
    setImmediate: nv,
    asap: yE,
    isIterable: vE,
  };
function be(n, a, r, l, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = n),
    (this.name = 'AxiosError'),
    a && (this.code = a),
    r && (this.config = r),
    l && (this.request = l),
    o && ((this.response = o), (this.status = o.status ? o.status : null));
}
P.inherits(be, Error, {
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
      config: P.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const av = be.prototype,
  iv = {};
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
].forEach((n) => {
  iv[n] = { value: n };
});
Object.defineProperties(be, iv);
Object.defineProperty(av, 'isAxiosError', { value: !0 });
be.from = (n, a, r, l, o, c) => {
  const d = Object.create(av);
  P.toFlatObject(
    n,
    d,
    function (g) {
      return g !== Error.prototype;
    },
    (p) => p !== 'isAxiosError',
  );
  const h = n && n.message ? n.message : 'Error',
    m = a == null && n ? n.code : a;
  return (
    be.call(d, h, m, r, l, o),
    n &&
      d.cause == null &&
      Object.defineProperty(d, 'cause', { value: n, configurable: !0 }),
    (d.name = (n && n.name) || 'Error'),
    c && Object.assign(d, c),
    d
  );
};
const bE = null;
function cf(n) {
  return P.isPlainObject(n) || P.isArray(n);
}
function rv(n) {
  return P.endsWith(n, '[]') ? n.slice(0, -2) : n;
}
function Ng(n, a, r) {
  return n
    ? n
        .concat(a)
        .map(function (o, c) {
          return (o = rv(o)), !r && c ? '[' + o + ']' : o;
        })
        .join(r ? '.' : '')
    : a;
}
function SE(n) {
  return P.isArray(n) && !n.some(cf);
}
const xE = P.toFlatObject(P, {}, null, function (a) {
  return /^is[A-Z]/.test(a);
});
function io(n, a, r) {
  if (!P.isObject(n)) throw new TypeError('target must be an object');
  (a = a || new FormData()),
    (r = P.toFlatObject(
      r,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (w, R) {
        return !P.isUndefined(R[w]);
      },
    ));
  const l = r.metaTokens,
    o = r.visitor || g,
    c = r.dots,
    d = r.indexes,
    m = (r.Blob || (typeof Blob < 'u' && Blob)) && P.isSpecCompliantForm(a);
  if (!P.isFunction(o)) throw new TypeError('visitor must be a function');
  function p(S) {
    if (S === null) return '';
    if (P.isDate(S)) return S.toISOString();
    if (P.isBoolean(S)) return S.toString();
    if (!m && P.isBlob(S))
      throw new be('Blob is not supported. Use a Buffer instead.');
    return P.isArrayBuffer(S) || P.isTypedArray(S)
      ? m && typeof Blob == 'function'
        ? new Blob([S])
        : Buffer.from(S)
      : S;
  }
  function g(S, w, R) {
    let _ = S;
    if (S && !R && typeof S == 'object') {
      if (P.endsWith(w, '{}'))
        (w = l ? w : w.slice(0, -2)), (S = JSON.stringify(S));
      else if (
        (P.isArray(S) && SE(S)) ||
        ((P.isFileList(S) || P.endsWith(w, '[]')) && (_ = P.toArray(S)))
      )
        return (
          (w = rv(w)),
          _.forEach(function (j, k) {
            !(P.isUndefined(j) || j === null) &&
              a.append(
                d === !0 ? Ng([w], k, c) : d === null ? w : w + '[]',
                p(j),
              );
          }),
          !1
        );
    }
    return cf(S) ? !0 : (a.append(Ng(R, w, c), p(S)), !1);
  }
  const v = [],
    x = Object.assign(xE, {
      defaultVisitor: g,
      convertValue: p,
      isVisitable: cf,
    });
  function O(S, w) {
    if (!P.isUndefined(S)) {
      if (v.indexOf(S) !== -1)
        throw Error('Circular reference detected in ' + w.join('.'));
      v.push(S),
        P.forEach(S, function (_, q) {
          (!(P.isUndefined(_) || _ === null) &&
            o.call(a, _, P.isString(q) ? q.trim() : q, w, x)) === !0 &&
            O(_, w ? w.concat(q) : [q]);
        }),
        v.pop();
    }
  }
  if (!P.isObject(n)) throw new TypeError('data must be an object');
  return O(n), a;
}
function Lg(n) {
  const a = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0',
  };
  return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function (l) {
    return a[l];
  });
}
function _f(n, a) {
  (this._pairs = []), n && io(n, this, a);
}
const sv = _f.prototype;
sv.append = function (a, r) {
  this._pairs.push([a, r]);
};
sv.toString = function (a) {
  const r = a
    ? function (l) {
        return a.call(this, l, Lg);
      }
    : Lg;
  return this._pairs
    .map(function (o) {
      return r(o[0]) + '=' + r(o[1]);
    }, '')
    .join('&');
};
function wE(n) {
  return encodeURIComponent(n)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+');
}
function lv(n, a, r) {
  if (!a) return n;
  const l = (r && r.encode) || wE;
  P.isFunction(r) && (r = { serialize: r });
  const o = r && r.serialize;
  let c;
  if (
    (o
      ? (c = o(a, r))
      : (c = P.isURLSearchParams(a) ? a.toString() : new _f(a, r).toString(l)),
    c)
  ) {
    const d = n.indexOf('#');
    d !== -1 && (n = n.slice(0, d)),
      (n += (n.indexOf('?') === -1 ? '?' : '&') + c);
  }
  return n;
}
class zg {
  constructor() {
    this.handlers = [];
  }
  use(a, r, l) {
    return (
      this.handlers.push({
        fulfilled: a,
        rejected: r,
        synchronous: l ? l.synchronous : !1,
        runWhen: l ? l.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(a) {
    this.handlers[a] && (this.handlers[a] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(a) {
    P.forEach(this.handlers, function (l) {
      l !== null && a(l);
    });
  }
}
const ov = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  EE = typeof URLSearchParams < 'u' ? URLSearchParams : _f,
  OE = typeof FormData < 'u' ? FormData : null,
  RE = typeof Blob < 'u' ? Blob : null,
  AE = {
    isBrowser: !0,
    classes: { URLSearchParams: EE, FormData: OE, Blob: RE },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  Nf = typeof window < 'u' && typeof document < 'u',
  ff = (typeof navigator == 'object' && navigator) || void 0,
  TE =
    Nf &&
    (!ff || ['ReactNative', 'NativeScript', 'NS'].indexOf(ff.product) < 0),
  CE =
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function',
  ME = (Nf && window.location.href) || 'http://localhost',
  DE = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Nf,
        hasStandardBrowserEnv: TE,
        hasStandardBrowserWebWorkerEnv: CE,
        navigator: ff,
        origin: ME,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  ot = { ...DE, ...AE };
function _E(n, a) {
  return io(n, new ot.classes.URLSearchParams(), {
    visitor: function (r, l, o, c) {
      return ot.isNode && P.isBuffer(r)
        ? (this.append(l, r.toString('base64')), !1)
        : c.defaultVisitor.apply(this, arguments);
    },
    ...a,
  });
}
function NE(n) {
  return P.matchAll(/\w+|\[(\w*)]/g, n).map((a) =>
    a[0] === '[]' ? '' : a[1] || a[0],
  );
}
function LE(n) {
  const a = {},
    r = Object.keys(n);
  let l;
  const o = r.length;
  let c;
  for (l = 0; l < o; l++) (c = r[l]), (a[c] = n[c]);
  return a;
}
function uv(n) {
  function a(r, l, o, c) {
    let d = r[c++];
    if (d === '__proto__') return !0;
    const h = Number.isFinite(+d),
      m = c >= r.length;
    return (
      (d = !d && P.isArray(o) ? o.length : d),
      m
        ? (P.hasOwnProp(o, d) ? (o[d] = [o[d], l]) : (o[d] = l), !h)
        : ((!o[d] || !P.isObject(o[d])) && (o[d] = []),
          a(r, l, o[d], c) && P.isArray(o[d]) && (o[d] = LE(o[d])),
          !h)
    );
  }
  if (P.isFormData(n) && P.isFunction(n.entries)) {
    const r = {};
    return (
      P.forEachEntry(n, (l, o) => {
        a(NE(l), o, r, 0);
      }),
      r
    );
  }
  return null;
}
function zE(n, a, r) {
  if (P.isString(n))
    try {
      return (a || JSON.parse)(n), P.trim(n);
    } catch (l) {
      if (l.name !== 'SyntaxError') throw l;
    }
  return (r || JSON.stringify)(n);
}
const as = {
  transitional: ov,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function (a, r) {
      const l = r.getContentType() || '',
        o = l.indexOf('application/json') > -1,
        c = P.isObject(a);
      if ((c && P.isHTMLForm(a) && (a = new FormData(a)), P.isFormData(a)))
        return o ? JSON.stringify(uv(a)) : a;
      if (
        P.isArrayBuffer(a) ||
        P.isBuffer(a) ||
        P.isStream(a) ||
        P.isFile(a) ||
        P.isBlob(a) ||
        P.isReadableStream(a)
      )
        return a;
      if (P.isArrayBufferView(a)) return a.buffer;
      if (P.isURLSearchParams(a))
        return (
          r.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1,
          ),
          a.toString()
        );
      let h;
      if (c) {
        if (l.indexOf('application/x-www-form-urlencoded') > -1)
          return _E(a, this.formSerializer).toString();
        if ((h = P.isFileList(a)) || l.indexOf('multipart/form-data') > -1) {
          const m = this.env && this.env.FormData;
          return io(
            h ? { 'files[]': a } : a,
            m && new m(),
            this.formSerializer,
          );
        }
      }
      return c || o ? (r.setContentType('application/json', !1), zE(a)) : a;
    },
  ],
  transformResponse: [
    function (a) {
      const r = this.transitional || as.transitional,
        l = r && r.forcedJSONParsing,
        o = this.responseType === 'json';
      if (P.isResponse(a) || P.isReadableStream(a)) return a;
      if (a && P.isString(a) && ((l && !this.responseType) || o)) {
        const d = !(r && r.silentJSONParsing) && o;
        try {
          return JSON.parse(a, this.parseReviver);
        } catch (h) {
          if (d)
            throw h.name === 'SyntaxError'
              ? be.from(h, be.ERR_BAD_RESPONSE, this, null, this.response)
              : h;
        }
      }
      return a;
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: ot.classes.FormData, Blob: ot.classes.Blob },
  validateStatus: function (a) {
    return a >= 200 && a < 300;
  },
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': void 0,
    },
  },
};
P.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (n) => {
  as.headers[n] = {};
});
const UE = P.toObjectSet([
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
  jE = (n) => {
    const a = {};
    let r, l, o;
    return (
      n &&
        n
          .split(
            `
`,
          )
          .forEach(function (d) {
            (o = d.indexOf(':')),
              (r = d.substring(0, o).trim().toLowerCase()),
              (l = d.substring(o + 1).trim()),
              !(!r || (a[r] && UE[r])) &&
                (r === 'set-cookie'
                  ? a[r]
                    ? a[r].push(l)
                    : (a[r] = [l])
                  : (a[r] = a[r] ? a[r] + ', ' + l : l));
          }),
      a
    );
  },
  Ug = Symbol('internals');
function qr(n) {
  return n && String(n).trim().toLowerCase();
}
function jl(n) {
  return n === !1 || n == null ? n : P.isArray(n) ? n.map(jl) : String(n);
}
function kE(n) {
  const a = Object.create(null),
    r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let l;
  for (; (l = r.exec(n)); ) a[l[1]] = l[2];
  return a;
}
const HE = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function Uc(n, a, r, l, o) {
  if (P.isFunction(l)) return l.call(this, a, r);
  if ((o && (a = r), !!P.isString(a))) {
    if (P.isString(l)) return a.indexOf(l) !== -1;
    if (P.isRegExp(l)) return l.test(a);
  }
}
function BE(n) {
  return n
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (a, r, l) => r.toUpperCase() + l);
}
function qE(n, a) {
  const r = P.toCamelCase(' ' + a);
  ['get', 'set', 'has'].forEach((l) => {
    Object.defineProperty(n, l + r, {
      value: function (o, c, d) {
        return this[l].call(this, a, o, c, d);
      },
      configurable: !0,
    });
  });
}
let St = class {
  constructor(a) {
    a && this.set(a);
  }
  set(a, r, l) {
    const o = this;
    function c(h, m, p) {
      const g = qr(m);
      if (!g) throw new Error('header name must be a non-empty string');
      const v = P.findKey(o, g);
      (!v || o[v] === void 0 || p === !0 || (p === void 0 && o[v] !== !1)) &&
        (o[v || m] = jl(h));
    }
    const d = (h, m) => P.forEach(h, (p, g) => c(p, g, m));
    if (P.isPlainObject(a) || a instanceof this.constructor) d(a, r);
    else if (P.isString(a) && (a = a.trim()) && !HE(a)) d(jE(a), r);
    else if (P.isObject(a) && P.isIterable(a)) {
      let h = {},
        m,
        p;
      for (const g of a) {
        if (!P.isArray(g))
          throw TypeError('Object iterator must return a key-value pair');
        h[(p = g[0])] = (m = h[p])
          ? P.isArray(m)
            ? [...m, g[1]]
            : [m, g[1]]
          : g[1];
      }
      d(h, r);
    } else a != null && c(r, a, l);
    return this;
  }
  get(a, r) {
    if (((a = qr(a)), a)) {
      const l = P.findKey(this, a);
      if (l) {
        const o = this[l];
        if (!r) return o;
        if (r === !0) return kE(o);
        if (P.isFunction(r)) return r.call(this, o, l);
        if (P.isRegExp(r)) return r.exec(o);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(a, r) {
    if (((a = qr(a)), a)) {
      const l = P.findKey(this, a);
      return !!(l && this[l] !== void 0 && (!r || Uc(this, this[l], l, r)));
    }
    return !1;
  }
  delete(a, r) {
    const l = this;
    let o = !1;
    function c(d) {
      if (((d = qr(d)), d)) {
        const h = P.findKey(l, d);
        h && (!r || Uc(l, l[h], h, r)) && (delete l[h], (o = !0));
      }
    }
    return P.isArray(a) ? a.forEach(c) : c(a), o;
  }
  clear(a) {
    const r = Object.keys(this);
    let l = r.length,
      o = !1;
    for (; l--; ) {
      const c = r[l];
      (!a || Uc(this, this[c], c, a, !0)) && (delete this[c], (o = !0));
    }
    return o;
  }
  normalize(a) {
    const r = this,
      l = {};
    return (
      P.forEach(this, (o, c) => {
        const d = P.findKey(l, c);
        if (d) {
          (r[d] = jl(o)), delete r[c];
          return;
        }
        const h = a ? BE(c) : String(c).trim();
        h !== c && delete r[c], (r[h] = jl(o)), (l[h] = !0);
      }),
      this
    );
  }
  concat(...a) {
    return this.constructor.concat(this, ...a);
  }
  toJSON(a) {
    const r = Object.create(null);
    return (
      P.forEach(this, (l, o) => {
        l != null && l !== !1 && (r[o] = a && P.isArray(l) ? l.join(', ') : l);
      }),
      r
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([a, r]) => a + ': ' + r).join(`
`);
  }
  getSetCookie() {
    return this.get('set-cookie') || [];
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(a) {
    return a instanceof this ? a : new this(a);
  }
  static concat(a, ...r) {
    const l = new this(a);
    return r.forEach((o) => l.set(o)), l;
  }
  static accessor(a) {
    const l = (this[Ug] = this[Ug] = { accessors: {} }).accessors,
      o = this.prototype;
    function c(d) {
      const h = qr(d);
      l[h] || (qE(o, d), (l[h] = !0));
    }
    return P.isArray(a) ? a.forEach(c) : c(a), this;
  }
};
St.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);
P.reduceDescriptors(St.prototype, ({ value: n }, a) => {
  let r = a[0].toUpperCase() + a.slice(1);
  return {
    get: () => n,
    set(l) {
      this[r] = l;
    },
  };
});
P.freezeMethods(St);
function jc(n, a) {
  const r = this || as,
    l = a || r,
    o = St.from(l.headers);
  let c = l.data;
  return (
    P.forEach(n, function (h) {
      c = h.call(r, c, o.normalize(), a ? a.status : void 0);
    }),
    o.normalize(),
    c
  );
}
function cv(n) {
  return !!(n && n.__CANCEL__);
}
function Ui(n, a, r) {
  be.call(this, n ?? 'canceled', be.ERR_CANCELED, a, r),
    (this.name = 'CanceledError');
}
P.inherits(Ui, be, { __CANCEL__: !0 });
function fv(n, a, r) {
  const l = r.config.validateStatus;
  !r.status || !l || l(r.status)
    ? n(r)
    : a(
        new be(
          'Request failed with status code ' + r.status,
          [be.ERR_BAD_REQUEST, be.ERR_BAD_RESPONSE][
            Math.floor(r.status / 100) - 4
          ],
          r.config,
          r.request,
          r,
        ),
      );
}
function PE(n) {
  const a = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return (a && a[1]) || '';
}
function GE(n, a) {
  n = n || 10;
  const r = new Array(n),
    l = new Array(n);
  let o = 0,
    c = 0,
    d;
  return (
    (a = a !== void 0 ? a : 1e3),
    function (m) {
      const p = Date.now(),
        g = l[c];
      d || (d = p), (r[o] = m), (l[o] = p);
      let v = c,
        x = 0;
      for (; v !== o; ) (x += r[v++]), (v = v % n);
      if (((o = (o + 1) % n), o === c && (c = (c + 1) % n), p - d < a)) return;
      const O = g && p - g;
      return O ? Math.round((x * 1e3) / O) : void 0;
    }
  );
}
function VE(n, a) {
  let r = 0,
    l = 1e3 / a,
    o,
    c;
  const d = (p, g = Date.now()) => {
    (r = g), (o = null), c && (clearTimeout(c), (c = null)), n(...p);
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
const Kl = (n, a, r = 3) => {
    let l = 0;
    const o = GE(50, 250);
    return VE((c) => {
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
        [a ? 'download' : 'upload']: !0,
      };
      n(v);
    }, r);
  },
  jg = (n, a) => {
    const r = n != null;
    return [(l) => a[0]({ lengthComputable: r, total: n, loaded: l }), a[1]];
  },
  kg =
    (n) =>
    (...a) =>
      P.asap(() => n(...a)),
  FE = ot.hasStandardBrowserEnv
    ? ((n, a) => (r) => (
        (r = new URL(r, ot.origin)),
        n.protocol === r.protocol &&
          n.host === r.host &&
          (a || n.port === r.port)
      ))(
        new URL(ot.origin),
        ot.navigator && /(msie|trident)/i.test(ot.navigator.userAgent),
      )
    : () => !0,
  QE = ot.hasStandardBrowserEnv
    ? {
        write(n, a, r, l, o, c) {
          const d = [n + '=' + encodeURIComponent(a)];
          P.isNumber(r) && d.push('expires=' + new Date(r).toGMTString()),
            P.isString(l) && d.push('path=' + l),
            P.isString(o) && d.push('domain=' + o),
            c === !0 && d.push('secure'),
            (document.cookie = d.join('; '));
        },
        read(n) {
          const a = document.cookie.match(
            new RegExp('(^|;\\s*)(' + n + ')=([^;]*)'),
          );
          return a ? decodeURIComponent(a[3]) : null;
        },
        remove(n) {
          this.write(n, '', Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function YE(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function KE(n, a) {
  return a ? n.replace(/\/?\/$/, '') + '/' + a.replace(/^\/+/, '') : n;
}
function dv(n, a, r) {
  let l = !YE(a);
  return n && (l || r == !1) ? KE(n, a) : a;
}
const Hg = (n) => (n instanceof St ? { ...n } : n);
function za(n, a) {
  a = a || {};
  const r = {};
  function l(p, g, v, x) {
    return P.isPlainObject(p) && P.isPlainObject(g)
      ? P.merge.call({ caseless: x }, p, g)
      : P.isPlainObject(g)
        ? P.merge({}, g)
        : P.isArray(g)
          ? g.slice()
          : g;
  }
  function o(p, g, v, x) {
    if (P.isUndefined(g)) {
      if (!P.isUndefined(p)) return l(void 0, p, v, x);
    } else return l(p, g, v, x);
  }
  function c(p, g) {
    if (!P.isUndefined(g)) return l(void 0, g);
  }
  function d(p, g) {
    if (P.isUndefined(g)) {
      if (!P.isUndefined(p)) return l(void 0, p);
    } else return l(void 0, g);
  }
  function h(p, g, v) {
    if (v in a) return l(p, g);
    if (v in n) return l(void 0, p);
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
    headers: (p, g, v) => o(Hg(p), Hg(g), v, !0),
  };
  return (
    P.forEach(Object.keys({ ...n, ...a }), function (g) {
      const v = m[g] || o,
        x = v(n[g], a[g], g);
      (P.isUndefined(x) && v !== h) || (r[g] = x);
    }),
    r
  );
}
const hv = (n) => {
    const a = za({}, n);
    let {
      data: r,
      withXSRFToken: l,
      xsrfHeaderName: o,
      xsrfCookieName: c,
      headers: d,
      auth: h,
    } = a;
    if (
      ((a.headers = d = St.from(d)),
      (a.url = lv(
        dv(a.baseURL, a.url, a.allowAbsoluteUrls),
        n.params,
        n.paramsSerializer,
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
        ),
      P.isFormData(r))
    ) {
      if (ot.hasStandardBrowserEnv || ot.hasStandardBrowserWebWorkerEnv)
        d.setContentType(void 0);
      else if (P.isFunction(r.getHeaders)) {
        const m = r.getHeaders(),
          p = ['content-type', 'content-length'];
        Object.entries(m).forEach(([g, v]) => {
          p.includes(g.toLowerCase()) && d.set(g, v);
        });
      }
    }
    if (
      ot.hasStandardBrowserEnv &&
      (l && P.isFunction(l) && (l = l(a)), l || (l !== !1 && FE(a.url)))
    ) {
      const m = o && c && QE.read(c);
      m && d.set(o, m);
    }
    return a;
  },
  XE = typeof XMLHttpRequest < 'u',
  ZE =
    XE &&
    function (n) {
      return new Promise(function (r, l) {
        const o = hv(n);
        let c = o.data;
        const d = St.from(o.headers).normalize();
        let { responseType: h, onUploadProgress: m, onDownloadProgress: p } = o,
          g,
          v,
          x,
          O,
          S;
        function w() {
          O && O(),
            S && S(),
            o.cancelToken && o.cancelToken.unsubscribe(g),
            o.signal && o.signal.removeEventListener('abort', g);
        }
        let R = new XMLHttpRequest();
        R.open(o.method.toUpperCase(), o.url, !0), (R.timeout = o.timeout);
        function _() {
          if (!R) return;
          const j = St.from(
              'getAllResponseHeaders' in R && R.getAllResponseHeaders(),
            ),
            B = {
              data:
                !h || h === 'text' || h === 'json'
                  ? R.responseText
                  : R.response,
              status: R.status,
              statusText: R.statusText,
              headers: j,
              config: n,
              request: R,
            };
          fv(
            function (V) {
              r(V), w();
            },
            function (V) {
              l(V), w();
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
              (l(new be('Request aborted', be.ECONNABORTED, n, R)), (R = null));
          }),
          (R.onerror = function (k) {
            const B = k && k.message ? k.message : 'Network Error',
              J = new be(B, be.ERR_NETWORK, n, R);
            (J.event = k || null), l(J), (R = null);
          }),
          (R.ontimeout = function () {
            let k = o.timeout
              ? 'timeout of ' + o.timeout + 'ms exceeded'
              : 'timeout exceeded';
            const B = o.transitional || ov;
            o.timeoutErrorMessage && (k = o.timeoutErrorMessage),
              l(
                new be(
                  k,
                  B.clarifyTimeoutError ? be.ETIMEDOUT : be.ECONNABORTED,
                  n,
                  R,
                ),
              ),
              (R = null);
          }),
          c === void 0 && d.setContentType(null),
          'setRequestHeader' in R &&
            P.forEach(d.toJSON(), function (k, B) {
              R.setRequestHeader(B, k);
            }),
          P.isUndefined(o.withCredentials) ||
            (R.withCredentials = !!o.withCredentials),
          h && h !== 'json' && (R.responseType = o.responseType),
          p && (([x, S] = Kl(p, !0)), R.addEventListener('progress', x)),
          m &&
            R.upload &&
            (([v, O] = Kl(m)),
            R.upload.addEventListener('progress', v),
            R.upload.addEventListener('loadend', O)),
          (o.cancelToken || o.signal) &&
            ((g = (j) => {
              R &&
                (l(!j || j.type ? new Ui(null, n, R) : j),
                R.abort(),
                (R = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(g),
            o.signal &&
              (o.signal.aborted ? g() : o.signal.addEventListener('abort', g)));
        const q = PE(o.url);
        if (q && ot.protocols.indexOf(q) === -1) {
          l(new be('Unsupported protocol ' + q + ':', be.ERR_BAD_REQUEST, n));
          return;
        }
        R.send(c || null);
      });
    },
  $E = (n, a) => {
    const { length: r } = (n = n ? n.filter(Boolean) : []);
    if (a || r) {
      let l = new AbortController(),
        o;
      const c = function (p) {
        if (!o) {
          (o = !0), h();
          const g = p instanceof Error ? p : this.reason;
          l.abort(
            g instanceof be ? g : new Ui(g instanceof Error ? g.message : g),
          );
        }
      };
      let d =
        a &&
        setTimeout(() => {
          (d = null), c(new be(`timeout ${a} of ms exceeded`, be.ETIMEDOUT));
        }, a);
      const h = () => {
        n &&
          (d && clearTimeout(d),
          (d = null),
          n.forEach((p) => {
            p.unsubscribe
              ? p.unsubscribe(c)
              : p.removeEventListener('abort', c);
          }),
          (n = null));
      };
      n.forEach((p) => p.addEventListener('abort', c));
      const { signal: m } = l;
      return (m.unsubscribe = () => P.asap(h)), m;
    }
  },
  IE = function* (n, a) {
    let r = n.byteLength;
    if (r < a) {
      yield n;
      return;
    }
    let l = 0,
      o;
    for (; l < r; ) (o = l + a), yield n.slice(l, o), (l = o);
  },
  JE = async function* (n, a) {
    for await (const r of WE(n)) yield* IE(r, a);
  },
  WE = async function* (n) {
    if (n[Symbol.asyncIterator]) {
      yield* n;
      return;
    }
    const a = n.getReader();
    try {
      for (;;) {
        const { done: r, value: l } = await a.read();
        if (r) break;
        yield l;
      }
    } finally {
      await a.cancel();
    }
  },
  Bg = (n, a, r, l) => {
    const o = JE(n, a);
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
              let x = (c += v);
              r(x);
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
  qg = 64 * 1024,
  { isFunction: Al } = P,
  eO = (({ Request: n, Response: a }) => ({ Request: n, Response: a }))(
    P.global,
  ),
  { ReadableStream: Pg, TextEncoder: Gg } = P.global,
  Vg = (n, ...a) => {
    try {
      return !!n(...a);
    } catch {
      return !1;
    }
  },
  tO = (n) => {
    n = P.merge.call({ skipUndefined: !0 }, eO, n);
    const { fetch: a, Request: r, Response: l } = n,
      o = a ? Al(a) : typeof fetch == 'function',
      c = Al(r),
      d = Al(l);
    if (!o) return !1;
    const h = o && Al(Pg),
      m =
        o &&
        (typeof Gg == 'function'
          ? (
              (S) => (w) =>
                S.encode(w)
            )(new Gg())
          : async (S) => new Uint8Array(await new r(S).arrayBuffer())),
      p =
        c &&
        h &&
        Vg(() => {
          let S = !1;
          const w = new r(ot.origin, {
            body: new Pg(),
            method: 'POST',
            get duplex() {
              return (S = !0), 'half';
            },
          }).headers.has('Content-Type');
          return S && !w;
        }),
      g = d && h && Vg(() => P.isReadableStream(new l('').body)),
      v = { stream: g && ((S) => S.body) };
    o &&
      ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((S) => {
        !v[S] &&
          (v[S] = (w, R) => {
            let _ = w && w[S];
            if (_) return _.call(w);
            throw new be(
              `Response type '${S}' is not supported`,
              be.ERR_NOT_SUPPORT,
              R,
            );
          });
      });
    const x = async (S) => {
        if (S == null) return 0;
        if (P.isBlob(S)) return S.size;
        if (P.isSpecCompliantForm(S))
          return (
            await new r(ot.origin, { method: 'POST', body: S }).arrayBuffer()
          ).byteLength;
        if (P.isArrayBufferView(S) || P.isArrayBuffer(S)) return S.byteLength;
        if ((P.isURLSearchParams(S) && (S = S + ''), P.isString(S)))
          return (await m(S)).byteLength;
      },
      O = async (S, w) => {
        const R = P.toFiniteNumber(S.getContentLength());
        return R ?? x(w);
      };
    return async (S) => {
      let {
          url: w,
          method: R,
          data: _,
          signal: q,
          cancelToken: j,
          timeout: k,
          onDownloadProgress: B,
          onUploadProgress: J,
          responseType: V,
          headers: Y,
          withCredentials: te = 'same-origin',
          fetchOptions: re,
        } = hv(S),
        ve = a || fetch;
      V = V ? (V + '').toLowerCase() : 'text';
      let de = $E([q, j && j.toAbortSignal()], k),
        ue = null;
      const se =
        de &&
        de.unsubscribe &&
        (() => {
          de.unsubscribe();
        });
      let me;
      try {
        if (
          J &&
          p &&
          R !== 'get' &&
          R !== 'head' &&
          (me = await O(Y, _)) !== 0
        ) {
          let G = new r(w, { method: 'POST', body: _, duplex: 'half' }),
            W;
          if (
            (P.isFormData(_) &&
              (W = G.headers.get('content-type')) &&
              Y.setContentType(W),
            G.body)
          ) {
            const [$, ee] = jg(me, Kl(kg(J)));
            _ = Bg(G.body, qg, $, ee);
          }
        }
        P.isString(te) || (te = te ? 'include' : 'omit');
        const M = c && 'credentials' in r.prototype,
          X = {
            ...re,
            signal: de,
            method: R.toUpperCase(),
            headers: Y.normalize().toJSON(),
            body: _,
            duplex: 'half',
            credentials: M ? te : void 0,
          };
        ue = c && new r(w, X);
        let z = await (c ? ve(ue, re) : ve(w, X));
        const I = g && (V === 'stream' || V === 'response');
        if (g && (B || (I && se))) {
          const G = {};
          ['status', 'statusText', 'headers'].forEach((ye) => {
            G[ye] = z[ye];
          });
          const W = P.toFiniteNumber(z.headers.get('content-length')),
            [$, ee] = (B && jg(W, Kl(kg(B), !0))) || [];
          z = new l(
            Bg(z.body, qg, $, () => {
              ee && ee(), se && se();
            }),
            G,
          );
        }
        V = V || 'text';
        let T = await v[P.findKey(v, V) || 'text'](z, S);
        return (
          !I && se && se(),
          await new Promise((G, W) => {
            fv(G, W, {
              data: T,
              headers: St.from(z.headers),
              status: z.status,
              statusText: z.statusText,
              config: S,
              request: ue,
            });
          })
        );
      } catch (M) {
        throw (
          (se && se(),
          M && M.name === 'TypeError' && /Load failed|fetch/i.test(M.message)
            ? Object.assign(new be('Network Error', be.ERR_NETWORK, S, ue), {
                cause: M.cause || M,
              })
            : be.from(M, M && M.code, S, ue))
        );
      }
    };
  },
  nO = new Map(),
  pv = (n) => {
    let a = n ? n.env : {};
    const { fetch: r, Request: l, Response: o } = a,
      c = [l, o, r];
    let d = c.length,
      h = d,
      m,
      p,
      g = nO;
    for (; h--; )
      (m = c[h]),
        (p = g.get(m)),
        p === void 0 && g.set(m, (p = h ? new Map() : tO(a))),
        (g = p);
    return p;
  };
pv();
const df = { http: bE, xhr: ZE, fetch: { get: pv } };
P.forEach(df, (n, a) => {
  if (n) {
    try {
      Object.defineProperty(n, 'name', { value: a });
    } catch {}
    Object.defineProperty(n, 'adapterName', { value: a });
  }
});
const Fg = (n) => `- ${n}`,
  aO = (n) => P.isFunction(n) || n === null || n === !1,
  mv = {
    getAdapter: (n, a) => {
      n = P.isArray(n) ? n : [n];
      const { length: r } = n;
      let l, o;
      const c = {};
      for (let d = 0; d < r; d++) {
        l = n[d];
        let h;
        if (
          ((o = l),
          !aO(l) && ((o = df[(h = String(l)).toLowerCase()]), o === void 0))
        )
          throw new be(`Unknown adapter '${h}'`);
        if (o && (P.isFunction(o) || (o = o.get(a)))) break;
        c[h || '#' + d] = o;
      }
      if (!o) {
        const d = Object.entries(c).map(
          ([m, p]) =>
            `adapter ${m} ` +
            (p === !1
              ? 'is not supported by the environment'
              : 'is not available in the build'),
        );
        let h = r
          ? d.length > 1
            ? `since :
` +
              d.map(Fg).join(`
`)
            : ' ' + Fg(d[0])
          : 'as no adapter specified';
        throw new be(
          'There is no suitable adapter to dispatch the request ' + h,
          'ERR_NOT_SUPPORT',
        );
      }
      return o;
    },
    adapters: df,
  };
function kc(n) {
  if (
    (n.cancelToken && n.cancelToken.throwIfRequested(),
    n.signal && n.signal.aborted)
  )
    throw new Ui(null, n);
}
function Qg(n) {
  return (
    kc(n),
    (n.headers = St.from(n.headers)),
    (n.data = jc.call(n, n.transformRequest)),
    ['post', 'put', 'patch'].indexOf(n.method) !== -1 &&
      n.headers.setContentType('application/x-www-form-urlencoded', !1),
    mv
      .getAdapter(
        n.adapter || as.adapter,
        n,
      )(n)
      .then(
        function (l) {
          return (
            kc(n),
            (l.data = jc.call(n, n.transformResponse, l)),
            (l.headers = St.from(l.headers)),
            l
          );
        },
        function (l) {
          return (
            cv(l) ||
              (kc(n),
              l &&
                l.response &&
                ((l.response.data = jc.call(
                  n,
                  n.transformResponse,
                  l.response,
                )),
                (l.response.headers = St.from(l.response.headers)))),
            Promise.reject(l)
          );
        },
      )
  );
}
const gv = '1.12.2',
  ro = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (n, a) => {
    ro[n] = function (l) {
      return typeof l === n || 'a' + (a < 1 ? 'n ' : ' ') + n;
    };
  },
);
const Yg = {};
ro.transitional = function (a, r, l) {
  function o(c, d) {
    return (
      '[Axios v' +
      gv +
      "] Transitional option '" +
      c +
      "'" +
      d +
      (l ? '. ' + l : '')
    );
  }
  return (c, d, h) => {
    if (a === !1)
      throw new be(
        o(d, ' has been removed' + (r ? ' in ' + r : '')),
        be.ERR_DEPRECATED,
      );
    return (
      r &&
        !Yg[d] &&
        ((Yg[d] = !0),
        console.warn(
          o(
            d,
            ' has been deprecated since v' +
              r +
              ' and will be removed in the near future',
          ),
        )),
      a ? a(c, d, h) : !0
    );
  };
};
ro.spelling = function (a) {
  return (r, l) => (console.warn(`${l} is likely a misspelling of ${a}`), !0);
};
function iO(n, a, r) {
  if (typeof n != 'object')
    throw new be('options must be an object', be.ERR_BAD_OPTION_VALUE);
  const l = Object.keys(n);
  let o = l.length;
  for (; o-- > 0; ) {
    const c = l[o],
      d = a[c];
    if (d) {
      const h = n[c],
        m = h === void 0 || d(h, c, n);
      if (m !== !0)
        throw new be('option ' + c + ' must be ' + m, be.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0) throw new be('Unknown option ' + c, be.ERR_BAD_OPTION);
  }
}
const kl = { assertOptions: iO, validators: ro },
  ln = kl.validators;
let Na = class {
  constructor(a) {
    (this.defaults = a || {}),
      (this.interceptors = { request: new zg(), response: new zg() });
  }
  async request(a, r) {
    try {
      return await this._request(a, r);
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
  _request(a, r) {
    typeof a == 'string' ? ((r = r || {}), (r.url = a)) : (r = a || {}),
      (r = za(this.defaults, r));
    const { transitional: l, paramsSerializer: o, headers: c } = r;
    l !== void 0 &&
      kl.assertOptions(
        l,
        {
          silentJSONParsing: ln.transitional(ln.boolean),
          forcedJSONParsing: ln.transitional(ln.boolean),
          clarifyTimeoutError: ln.transitional(ln.boolean),
        },
        !1,
      ),
      o != null &&
        (P.isFunction(o)
          ? (r.paramsSerializer = { serialize: o })
          : kl.assertOptions(
              o,
              { encode: ln.function, serialize: ln.function },
              !0,
            )),
      r.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (r.allowAbsoluteUrls = !0)),
      kl.assertOptions(
        r,
        {
          baseUrl: ln.spelling('baseURL'),
          withXsrfToken: ln.spelling('withXSRFToken'),
        },
        !0,
      ),
      (r.method = (r.method || this.defaults.method || 'get').toLowerCase());
    let d = c && P.merge(c.common, c[r.method]);
    c &&
      P.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        (S) => {
          delete c[S];
        },
      ),
      (r.headers = St.concat(d, c));
    const h = [];
    let m = !0;
    this.interceptors.request.forEach(function (w) {
      (typeof w.runWhen == 'function' && w.runWhen(r) === !1) ||
        ((m = m && w.synchronous), h.unshift(w.fulfilled, w.rejected));
    });
    const p = [];
    this.interceptors.response.forEach(function (w) {
      p.push(w.fulfilled, w.rejected);
    });
    let g,
      v = 0,
      x;
    if (!m) {
      const S = [Qg.bind(this), void 0];
      for (
        S.unshift(...h), S.push(...p), x = S.length, g = Promise.resolve(r);
        v < x;

      )
        g = g.then(S[v++], S[v++]);
      return g;
    }
    x = h.length;
    let O = r;
    for (; v < x; ) {
      const S = h[v++],
        w = h[v++];
      try {
        O = S(O);
      } catch (R) {
        w.call(this, R);
        break;
      }
    }
    try {
      g = Qg.call(this, O);
    } catch (S) {
      return Promise.reject(S);
    }
    for (v = 0, x = p.length; v < x; ) g = g.then(p[v++], p[v++]);
    return g;
  }
  getUri(a) {
    a = za(this.defaults, a);
    const r = dv(a.baseURL, a.url, a.allowAbsoluteUrls);
    return lv(r, a.params, a.paramsSerializer);
  }
};
P.forEach(['delete', 'get', 'head', 'options'], function (a) {
  Na.prototype[a] = function (r, l) {
    return this.request(
      za(l || {}, { method: a, url: r, data: (l || {}).data }),
    );
  };
});
P.forEach(['post', 'put', 'patch'], function (a) {
  function r(l) {
    return function (c, d, h) {
      return this.request(
        za(h || {}, {
          method: a,
          headers: l ? { 'Content-Type': 'multipart/form-data' } : {},
          url: c,
          data: d,
        }),
      );
    };
  }
  (Na.prototype[a] = r()), (Na.prototype[a + 'Form'] = r(!0));
});
let rO = class yv {
  constructor(a) {
    if (typeof a != 'function')
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
      a(function (c, d, h) {
        l.reason || ((l.reason = new Ui(c, d, h)), r(l.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(a) {
    if (this.reason) {
      a(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(a) : (this._listeners = [a]);
  }
  unsubscribe(a) {
    if (!this._listeners) return;
    const r = this._listeners.indexOf(a);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const a = new AbortController(),
      r = (l) => {
        a.abort(l);
      };
    return (
      this.subscribe(r),
      (a.signal.unsubscribe = () => this.unsubscribe(r)),
      a.signal
    );
  }
  static source() {
    let a;
    return {
      token: new yv(function (o) {
        a = o;
      }),
      cancel: a,
    };
  }
};
function sO(n) {
  return function (r) {
    return n.apply(null, r);
  };
}
function lO(n) {
  return P.isObject(n) && n.isAxiosError === !0;
}
const hf = {
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
Object.entries(hf).forEach(([n, a]) => {
  hf[a] = n;
});
function vv(n) {
  const a = new Na(n),
    r = Zy(Na.prototype.request, a);
  return (
    P.extend(r, Na.prototype, a, { allOwnKeys: !0 }),
    P.extend(r, a, null, { allOwnKeys: !0 }),
    (r.create = function (o) {
      return vv(za(n, o));
    }),
    r
  );
}
const Fe = vv(as);
Fe.Axios = Na;
Fe.CanceledError = Ui;
Fe.CancelToken = rO;
Fe.isCancel = cv;
Fe.VERSION = gv;
Fe.toFormData = io;
Fe.AxiosError = be;
Fe.Cancel = Fe.CanceledError;
Fe.all = function (a) {
  return Promise.all(a);
};
Fe.spread = sO;
Fe.isAxiosError = lO;
Fe.mergeConfig = za;
Fe.AxiosHeaders = St;
Fe.formToJSON = (n) => uv(P.isHTMLForm(n) ? new FormData(n) : n);
Fe.getAdapter = mv.getAdapter;
Fe.HttpStatusCode = hf;
Fe.default = Fe;
const {
    Axios: zM,
    AxiosError: UM,
    CanceledError: jM,
    isCancel: kM,
    CancelToken: HM,
    VERSION: BM,
    all: qM,
    Cancel: PM,
    isAxiosError: GM,
    spread: VM,
    toFormData: FM,
    AxiosHeaders: QM,
    HttpStatusCode: YM,
    formToJSON: KM,
    getAdapter: XM,
    mergeConfig: ZM,
  } = Fe,
  oO = 'https://jsonplaceholder.typicode.com',
  uO = '/posts/',
  Lf = Fe.create({ baseURL: oO, timeout: 1e4 });
Lf.interceptors.request.use(
  async (n) => {
    console.log(`API REQUEST to ${n.url}`, n);
    const a = it.language;
    return (n.headers['Accept-Language'] = a), n;
  },
  (n) => Promise.reject(n),
);
Lf.interceptors.response.use(
  (n) => n,
  (n) => (console.error('API error:', n), Promise.reject(n)),
);
const cO = async (n) => await Lf.get(uO, { params: n });
var Hl = ((n) => ((n.UZ = 'uz'), (n.RU = 'ru'), (n.KI = 'ki'), n))(Hl || {});
function Kg(n, a) {
  if (typeof n == 'function') return n(a);
  n != null && (n.current = a);
}
function so(...n) {
  return (a) => {
    let r = !1;
    const l = n.map((o) => {
      const c = Kg(o, a);
      return !r && typeof c == 'function' && (r = !0), c;
    });
    if (r)
      return () => {
        for (let o = 0; o < l.length; o++) {
          const c = l[o];
          typeof c == 'function' ? c() : Kg(n[o], null);
        }
      };
  };
}
function xt(...n) {
  return E.useCallback(so(...n), n);
}
function Xr(n) {
  const a = dO(n),
    r = E.forwardRef((l, o) => {
      const { children: c, ...d } = l,
        h = E.Children.toArray(c),
        m = h.find(pO);
      if (m) {
        const p = m.props.children,
          g = h.map((v) =>
            v === m
              ? E.Children.count(p) > 1
                ? E.Children.only(null)
                : E.isValidElement(p)
                  ? p.props.children
                  : null
              : v,
          );
        return F.jsx(a, {
          ...d,
          ref: o,
          children: E.isValidElement(p) ? E.cloneElement(p, void 0, g) : null,
        });
      }
      return F.jsx(a, { ...d, ref: o, children: c });
    });
  return (r.displayName = `${n}.Slot`), r;
}
var fO = Xr('Slot');
function dO(n) {
  const a = E.forwardRef((r, l) => {
    const { children: o, ...c } = r;
    if (E.isValidElement(o)) {
      const d = gO(o),
        h = mO(c, o.props);
      return (
        o.type !== E.Fragment && (h.ref = l ? so(l, d) : d),
        E.cloneElement(o, h)
      );
    }
    return E.Children.count(o) > 1 ? E.Children.only(null) : null;
  });
  return (a.displayName = `${n}.SlotClone`), a;
}
var hO = Symbol('radix.slottable');
function pO(n) {
  return (
    E.isValidElement(n) &&
    typeof n.type == 'function' &&
    '__radixId' in n.type &&
    n.type.__radixId === hO
  );
}
function mO(n, a) {
  const r = { ...a };
  for (const l in a) {
    const o = n[l],
      c = a[l];
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
  return { ...n, ...r };
}
function gO(n) {
  let a = Object.getOwnPropertyDescriptor(n.props, 'ref')?.get,
    r = a && 'isReactWarning' in a && a.isReactWarning;
  return r
    ? n.ref
    : ((a = Object.getOwnPropertyDescriptor(n, 'ref')?.get),
      (r = a && 'isReactWarning' in a && a.isReactWarning),
      r ? n.props.ref : n.props.ref || n.ref);
}
function bv(n) {
  var a,
    r,
    l = '';
  if (typeof n == 'string' || typeof n == 'number') l += n;
  else if (typeof n == 'object')
    if (Array.isArray(n)) {
      var o = n.length;
      for (a = 0; a < o; a++)
        n[a] && (r = bv(n[a])) && (l && (l += ' '), (l += r));
    } else for (r in n) n[r] && (l && (l += ' '), (l += r));
  return l;
}
function Sv() {
  for (var n, a, r = 0, l = '', o = arguments.length; r < o; r++)
    (n = arguments[r]) && (a = bv(n)) && (l && (l += ' '), (l += a));
  return l;
}
const Xg = (n) => (typeof n == 'boolean' ? `${n}` : n === 0 ? '0' : n),
  Zg = Sv,
  yO = (n, a) => (r) => {
    var l;
    if (a?.variants == null) return Zg(n, r?.class, r?.className);
    const { variants: o, defaultVariants: c } = a,
      d = Object.keys(o).map((p) => {
        const g = r?.[p],
          v = c?.[p];
        if (g === null) return null;
        const x = Xg(g) || Xg(v);
        return o[p][x];
      }),
      h =
        r &&
        Object.entries(r).reduce((p, g) => {
          let [v, x] = g;
          return x === void 0 || (p[v] = x), p;
        }, {}),
      m =
        a == null || (l = a.compoundVariants) === null || l === void 0
          ? void 0
          : l.reduce((p, g) => {
              let { class: v, className: x, ...O } = g;
              return Object.entries(O).every((S) => {
                let [w, R] = S;
                return Array.isArray(R)
                  ? R.includes({ ...c, ...h }[w])
                  : { ...c, ...h }[w] === R;
              })
                ? [...p, v, x]
                : p;
            }, []);
    return Zg(n, d, m, r?.class, r?.className);
  },
  zf = '-',
  vO = (n) => {
    const a = SO(n),
      { conflictingClassGroups: r, conflictingClassGroupModifiers: l } = n;
    return {
      getClassGroupId: (d) => {
        const h = d.split(zf);
        return h[0] === '' && h.length !== 1 && h.shift(), xv(h, a) || bO(d);
      },
      getConflictingClassGroupIds: (d, h) => {
        const m = r[d] || [];
        return h && l[d] ? [...m, ...l[d]] : m;
      },
    };
  },
  xv = (n, a) => {
    if (n.length === 0) return a.classGroupId;
    const r = n[0],
      l = a.nextPart.get(r),
      o = l ? xv(n.slice(1), l) : void 0;
    if (o) return o;
    if (a.validators.length === 0) return;
    const c = n.join(zf);
    return a.validators.find(({ validator: d }) => d(c))?.classGroupId;
  },
  $g = /^\[(.+)\]$/,
  bO = (n) => {
    if ($g.test(n)) {
      const a = $g.exec(n)[1],
        r = a?.substring(0, a.indexOf(':'));
      if (r) return 'arbitrary..' + r;
    }
  },
  SO = (n) => {
    const { theme: a, classGroups: r } = n,
      l = { nextPart: new Map(), validators: [] };
    for (const o in r) pf(r[o], l, o, a);
    return l;
  },
  pf = (n, a, r, l) => {
    n.forEach((o) => {
      if (typeof o == 'string') {
        const c = o === '' ? a : Ig(a, o);
        c.classGroupId = r;
        return;
      }
      if (typeof o == 'function') {
        if (xO(o)) {
          pf(o(l), a, r, l);
          return;
        }
        a.validators.push({ validator: o, classGroupId: r });
        return;
      }
      Object.entries(o).forEach(([c, d]) => {
        pf(d, Ig(a, c), r, l);
      });
    });
  },
  Ig = (n, a) => {
    let r = n;
    return (
      a.split(zf).forEach((l) => {
        r.nextPart.has(l) ||
          r.nextPart.set(l, { nextPart: new Map(), validators: [] }),
          (r = r.nextPart.get(l));
      }),
      r
    );
  },
  xO = (n) => n.isThemeGetter,
  wO = (n) => {
    if (n < 1) return { get: () => {}, set: () => {} };
    let a = 0,
      r = new Map(),
      l = new Map();
    const o = (c, d) => {
      r.set(c, d), a++, a > n && ((a = 0), (l = r), (r = new Map()));
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
  mf = '!',
  gf = ':',
  EO = gf.length,
  OO = (n) => {
    const { prefix: a, experimentalParseClassName: r } = n;
    let l = (o) => {
      const c = [];
      let d = 0,
        h = 0,
        m = 0,
        p;
      for (let S = 0; S < o.length; S++) {
        let w = o[S];
        if (d === 0 && h === 0) {
          if (w === gf) {
            c.push(o.slice(m, S)), (m = S + EO);
            continue;
          }
          if (w === '/') {
            p = S;
            continue;
          }
        }
        w === '[' ? d++ : w === ']' ? d-- : w === '(' ? h++ : w === ')' && h--;
      }
      const g = c.length === 0 ? o : o.substring(m),
        v = RO(g),
        x = v !== g,
        O = p && p > m ? p - m : void 0;
      return {
        modifiers: c,
        hasImportantModifier: x,
        baseClassName: v,
        maybePostfixModifierPosition: O,
      };
    };
    if (a) {
      const o = a + gf,
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
  RO = (n) =>
    n.endsWith(mf)
      ? n.substring(0, n.length - 1)
      : n.startsWith(mf)
        ? n.substring(1)
        : n,
  AO = (n) => {
    const a = Object.fromEntries(n.orderSensitiveModifiers.map((l) => [l, !0]));
    return (l) => {
      if (l.length <= 1) return l;
      const o = [];
      let c = [];
      return (
        l.forEach((d) => {
          d[0] === '[' || a[d] ? (o.push(...c.sort(), d), (c = [])) : c.push(d);
        }),
        o.push(...c.sort()),
        o
      );
    };
  },
  TO = (n) => ({
    cache: wO(n.cacheSize),
    parseClassName: OO(n),
    sortModifiers: AO(n),
    ...vO(n),
  }),
  CO = /\s+/,
  MO = (n, a) => {
    const {
        parseClassName: r,
        getClassGroupId: l,
        getConflictingClassGroupIds: o,
        sortModifiers: c,
      } = a,
      d = [],
      h = n.trim().split(CO);
    let m = '';
    for (let p = h.length - 1; p >= 0; p -= 1) {
      const g = h[p],
        {
          isExternal: v,
          modifiers: x,
          hasImportantModifier: O,
          baseClassName: S,
          maybePostfixModifierPosition: w,
        } = r(g);
      if (v) {
        m = g + (m.length > 0 ? ' ' + m : m);
        continue;
      }
      let R = !!w,
        _ = l(R ? S.substring(0, w) : S);
      if (!_) {
        if (!R) {
          m = g + (m.length > 0 ? ' ' + m : m);
          continue;
        }
        if (((_ = l(S)), !_)) {
          m = g + (m.length > 0 ? ' ' + m : m);
          continue;
        }
        R = !1;
      }
      const q = c(x).join(':'),
        j = O ? q + mf : q,
        k = j + _;
      if (d.includes(k)) continue;
      d.push(k);
      const B = o(_, R);
      for (let J = 0; J < B.length; ++J) {
        const V = B[J];
        d.push(j + V);
      }
      m = g + (m.length > 0 ? ' ' + m : m);
    }
    return m;
  };
function DO() {
  let n = 0,
    a,
    r,
    l = '';
  for (; n < arguments.length; )
    (a = arguments[n++]) && (r = wv(a)) && (l && (l += ' '), (l += r));
  return l;
}
const wv = (n) => {
  if (typeof n == 'string') return n;
  let a,
    r = '';
  for (let l = 0; l < n.length; l++)
    n[l] && (a = wv(n[l])) && (r && (r += ' '), (r += a));
  return r;
};
function _O(n, ...a) {
  let r,
    l,
    o,
    c = d;
  function d(m) {
    const p = a.reduce((g, v) => v(g), n());
    return (r = TO(p)), (l = r.cache.get), (o = r.cache.set), (c = h), h(m);
  }
  function h(m) {
    const p = l(m);
    if (p) return p;
    const g = MO(m, r);
    return o(m, g), g;
  }
  return function () {
    return c(DO.apply(null, arguments));
  };
}
const Ze = (n) => {
    const a = (r) => r[n] || [];
    return (a.isThemeGetter = !0), a;
  },
  Ev = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Ov = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  NO = /^\d+\/\d+$/,
  LO = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  zO =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  UO = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  jO = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  kO =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Ai = (n) => NO.test(n),
  we = (n) => !!n && !Number.isNaN(Number(n)),
  ia = (n) => !!n && Number.isInteger(Number(n)),
  Hc = (n) => n.endsWith('%') && we(n.slice(0, -1)),
  Mn = (n) => LO.test(n),
  HO = () => !0,
  BO = (n) => zO.test(n) && !UO.test(n),
  Rv = () => !1,
  qO = (n) => jO.test(n),
  PO = (n) => kO.test(n),
  GO = (n) => !ae(n) && !ie(n),
  VO = (n) => ji(n, Cv, Rv),
  ae = (n) => Ev.test(n),
  Ca = (n) => ji(n, Mv, BO),
  Bc = (n) => ji(n, XO, we),
  Jg = (n) => ji(n, Av, Rv),
  FO = (n) => ji(n, Tv, PO),
  Tl = (n) => ji(n, Dv, qO),
  ie = (n) => Ov.test(n),
  Pr = (n) => ki(n, Mv),
  QO = (n) => ki(n, ZO),
  Wg = (n) => ki(n, Av),
  YO = (n) => ki(n, Cv),
  KO = (n) => ki(n, Tv),
  Cl = (n) => ki(n, Dv, !0),
  ji = (n, a, r) => {
    const l = Ev.exec(n);
    return l ? (l[1] ? a(l[1]) : r(l[2])) : !1;
  },
  ki = (n, a, r = !1) => {
    const l = Ov.exec(n);
    return l ? (l[1] ? a(l[1]) : r) : !1;
  },
  Av = (n) => n === 'position' || n === 'percentage',
  Tv = (n) => n === 'image' || n === 'url',
  Cv = (n) => n === 'length' || n === 'size' || n === 'bg-size',
  Mv = (n) => n === 'length',
  XO = (n) => n === 'number',
  ZO = (n) => n === 'family-name',
  Dv = (n) => n === 'shadow',
  $O = () => {
    const n = Ze('color'),
      a = Ze('font'),
      r = Ze('text'),
      l = Ze('font-weight'),
      o = Ze('tracking'),
      c = Ze('leading'),
      d = Ze('breakpoint'),
      h = Ze('container'),
      m = Ze('spacing'),
      p = Ze('radius'),
      g = Ze('shadow'),
      v = Ze('inset-shadow'),
      x = Ze('text-shadow'),
      O = Ze('drop-shadow'),
      S = Ze('blur'),
      w = Ze('perspective'),
      R = Ze('aspect'),
      _ = Ze('ease'),
      q = Ze('animate'),
      j = () => [
        'auto',
        'avoid',
        'all',
        'avoid-page',
        'page',
        'left',
        'right',
        'column',
      ],
      k = () => [
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
      B = () => [...k(), ie, ae],
      J = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
      V = () => ['auto', 'contain', 'none'],
      Y = () => [ie, ae, m],
      te = () => [Ai, 'full', 'auto', ...Y()],
      re = () => [ia, 'none', 'subgrid', ie, ae],
      ve = () => ['auto', { span: ['full', ia, ie, ae] }, ia, ie, ae],
      de = () => [ia, 'auto', ie, ae],
      ue = () => ['auto', 'min', 'max', 'fr', ie, ae],
      se = () => [
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
      M = () => ['auto', ...Y()],
      X = () => [
        Ai,
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
        ...Y(),
      ],
      z = () => [n, ie, ae],
      I = () => [...k(), Wg, Jg, { position: [ie, ae] }],
      T = () => ['no-repeat', { repeat: ['', 'x', 'y', 'space', 'round'] }],
      G = () => ['auto', 'cover', 'contain', YO, VO, { size: [ie, ae] }],
      W = () => [Hc, Pr, Ca],
      $ = () => ['', 'none', 'full', p, ie, ae],
      ee = () => ['', we, Pr, Ca],
      ye = () => ['solid', 'dashed', 'dotted', 'double'],
      oe = () => [
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
      ce = () => [we, Hc, Wg, Jg],
      Ce = () => ['', 'none', S, ie, ae],
      ut = () => ['none', we, ie, ae],
      It = () => ['none', we, ie, ae],
      Jt = () => [we, ie, ae],
      Wt = () => [Ai, 'full', ...Y()];
    return {
      cacheSize: 500,
      theme: {
        animate: ['spin', 'ping', 'pulse', 'bounce'],
        aspect: ['video'],
        blur: [Mn],
        breakpoint: [Mn],
        color: [HO],
        container: [Mn],
        'drop-shadow': [Mn],
        ease: ['in', 'out', 'in-out'],
        font: [GO],
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
        'inset-shadow': [Mn],
        leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'],
        perspective: [
          'dramatic',
          'near',
          'normal',
          'midrange',
          'distant',
          'none',
        ],
        radius: [Mn],
        shadow: [Mn],
        spacing: ['px', we],
        text: [Mn],
        'text-shadow': [Mn],
        tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'],
      },
      classGroups: {
        aspect: [{ aspect: ['auto', 'square', Ai, ae, ie, R] }],
        container: ['container'],
        columns: [{ columns: [we, ae, ie, h] }],
        'break-after': [{ 'break-after': j() }],
        'break-before': [{ 'break-before': j() }],
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
        overscroll: [{ overscroll: V() }],
        'overscroll-x': [{ 'overscroll-x': V() }],
        'overscroll-y': [{ 'overscroll-y': V() }],
        position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
        inset: [{ inset: te() }],
        'inset-x': [{ 'inset-x': te() }],
        'inset-y': [{ 'inset-y': te() }],
        start: [{ start: te() }],
        end: [{ end: te() }],
        top: [{ top: te() }],
        right: [{ right: te() }],
        bottom: [{ bottom: te() }],
        left: [{ left: te() }],
        visibility: ['visible', 'invisible', 'collapse'],
        z: [{ z: [ia, 'auto', ie, ae] }],
        basis: [{ basis: [Ai, 'full', 'auto', h, ...Y()] }],
        'flex-direction': [
          { flex: ['row', 'row-reverse', 'col', 'col-reverse'] },
        ],
        'flex-wrap': [{ flex: ['nowrap', 'wrap', 'wrap-reverse'] }],
        flex: [{ flex: [we, Ai, 'auto', 'initial', 'none', ae] }],
        grow: [{ grow: ['', we, ie, ae] }],
        shrink: [{ shrink: ['', we, ie, ae] }],
        order: [{ order: [ia, 'first', 'last', 'none', ie, ae] }],
        'grid-cols': [{ 'grid-cols': re() }],
        'col-start-end': [{ col: ve() }],
        'col-start': [{ 'col-start': de() }],
        'col-end': [{ 'col-end': de() }],
        'grid-rows': [{ 'grid-rows': re() }],
        'row-start-end': [{ row: ve() }],
        'row-start': [{ 'row-start': de() }],
        'row-end': [{ 'row-end': de() }],
        'grid-flow': [
          { 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] },
        ],
        'auto-cols': [{ 'auto-cols': ue() }],
        'auto-rows': [{ 'auto-rows': ue() }],
        gap: [{ gap: Y() }],
        'gap-x': [{ 'gap-x': Y() }],
        'gap-y': [{ 'gap-y': Y() }],
        'justify-content': [{ justify: [...se(), 'normal'] }],
        'justify-items': [{ 'justify-items': [...me(), 'normal'] }],
        'justify-self': [{ 'justify-self': ['auto', ...me()] }],
        'align-content': [{ content: ['normal', ...se()] }],
        'align-items': [{ items: [...me(), { baseline: ['', 'last'] }] }],
        'align-self': [{ self: ['auto', ...me(), { baseline: ['', 'last'] }] }],
        'place-content': [{ 'place-content': se() }],
        'place-items': [{ 'place-items': [...me(), 'baseline'] }],
        'place-self': [{ 'place-self': ['auto', ...me()] }],
        p: [{ p: Y() }],
        px: [{ px: Y() }],
        py: [{ py: Y() }],
        ps: [{ ps: Y() }],
        pe: [{ pe: Y() }],
        pt: [{ pt: Y() }],
        pr: [{ pr: Y() }],
        pb: [{ pb: Y() }],
        pl: [{ pl: Y() }],
        m: [{ m: M() }],
        mx: [{ mx: M() }],
        my: [{ my: M() }],
        ms: [{ ms: M() }],
        me: [{ me: M() }],
        mt: [{ mt: M() }],
        mr: [{ mr: M() }],
        mb: [{ mb: M() }],
        ml: [{ ml: M() }],
        'space-x': [{ 'space-x': Y() }],
        'space-x-reverse': ['space-x-reverse'],
        'space-y': [{ 'space-y': Y() }],
        'space-y-reverse': ['space-y-reverse'],
        size: [{ size: X() }],
        w: [{ w: [h, 'screen', ...X()] }],
        'min-w': [{ 'min-w': [h, 'screen', 'none', ...X()] }],
        'max-w': [
          { 'max-w': [h, 'screen', 'none', 'prose', { screen: [d] }, ...X()] },
        ],
        h: [{ h: ['screen', 'lh', ...X()] }],
        'min-h': [{ 'min-h': ['screen', 'lh', 'none', ...X()] }],
        'max-h': [{ 'max-h': ['screen', 'lh', ...X()] }],
        'font-size': [{ text: ['base', r, Pr, Ca] }],
        'font-smoothing': ['antialiased', 'subpixel-antialiased'],
        'font-style': ['italic', 'not-italic'],
        'font-weight': [{ font: [l, ie, Bc] }],
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
              Hc,
              ae,
            ],
          },
        ],
        'font-family': [{ font: [QO, ae, a] }],
        'fvn-normal': ['normal-nums'],
        'fvn-ordinal': ['ordinal'],
        'fvn-slashed-zero': ['slashed-zero'],
        'fvn-figure': ['lining-nums', 'oldstyle-nums'],
        'fvn-spacing': ['proportional-nums', 'tabular-nums'],
        'fvn-fraction': ['diagonal-fractions', 'stacked-fractions'],
        tracking: [{ tracking: [o, ie, ae] }],
        'line-clamp': [{ 'line-clamp': [we, 'none', ie, Bc] }],
        leading: [{ leading: [c, ...Y()] }],
        'list-image': [{ 'list-image': ['none', ie, ae] }],
        'list-style-position': [{ list: ['inside', 'outside'] }],
        'list-style-type': [{ list: ['disc', 'decimal', 'none', ie, ae] }],
        'text-alignment': [
          { text: ['left', 'center', 'right', 'justify', 'start', 'end'] },
        ],
        'placeholder-color': [{ placeholder: z() }],
        'text-color': [{ text: z() }],
        'text-decoration': [
          'underline',
          'overline',
          'line-through',
          'no-underline',
        ],
        'text-decoration-style': [{ decoration: [...ye(), 'wavy'] }],
        'text-decoration-thickness': [
          { decoration: [we, 'from-font', 'auto', ie, Ca] },
        ],
        'text-decoration-color': [{ decoration: z() }],
        'underline-offset': [{ 'underline-offset': [we, 'auto', ie, ae] }],
        'text-transform': [
          'uppercase',
          'lowercase',
          'capitalize',
          'normal-case',
        ],
        'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
        'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
        indent: [{ indent: Y() }],
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
              ie,
              ae,
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
        content: [{ content: ['none', ie, ae] }],
        'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
        'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
        'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
        'bg-position': [{ bg: I() }],
        'bg-repeat': [{ bg: T() }],
        'bg-size': [{ bg: G() }],
        'bg-image': [
          {
            bg: [
              'none',
              {
                linear: [
                  { to: ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] },
                  ia,
                  ie,
                  ae,
                ],
                radial: ['', ie, ae],
                conic: [ia, ie, ae],
              },
              KO,
              FO,
            ],
          },
        ],
        'bg-color': [{ bg: z() }],
        'gradient-from-pos': [{ from: W() }],
        'gradient-via-pos': [{ via: W() }],
        'gradient-to-pos': [{ to: W() }],
        'gradient-from': [{ from: z() }],
        'gradient-via': [{ via: z() }],
        'gradient-to': [{ to: z() }],
        rounded: [{ rounded: $() }],
        'rounded-s': [{ 'rounded-s': $() }],
        'rounded-e': [{ 'rounded-e': $() }],
        'rounded-t': [{ 'rounded-t': $() }],
        'rounded-r': [{ 'rounded-r': $() }],
        'rounded-b': [{ 'rounded-b': $() }],
        'rounded-l': [{ 'rounded-l': $() }],
        'rounded-ss': [{ 'rounded-ss': $() }],
        'rounded-se': [{ 'rounded-se': $() }],
        'rounded-ee': [{ 'rounded-ee': $() }],
        'rounded-es': [{ 'rounded-es': $() }],
        'rounded-tl': [{ 'rounded-tl': $() }],
        'rounded-tr': [{ 'rounded-tr': $() }],
        'rounded-br': [{ 'rounded-br': $() }],
        'rounded-bl': [{ 'rounded-bl': $() }],
        'border-w': [{ border: ee() }],
        'border-w-x': [{ 'border-x': ee() }],
        'border-w-y': [{ 'border-y': ee() }],
        'border-w-s': [{ 'border-s': ee() }],
        'border-w-e': [{ 'border-e': ee() }],
        'border-w-t': [{ 'border-t': ee() }],
        'border-w-r': [{ 'border-r': ee() }],
        'border-w-b': [{ 'border-b': ee() }],
        'border-w-l': [{ 'border-l': ee() }],
        'divide-x': [{ 'divide-x': ee() }],
        'divide-x-reverse': ['divide-x-reverse'],
        'divide-y': [{ 'divide-y': ee() }],
        'divide-y-reverse': ['divide-y-reverse'],
        'border-style': [{ border: [...ye(), 'hidden', 'none'] }],
        'divide-style': [{ divide: [...ye(), 'hidden', 'none'] }],
        'border-color': [{ border: z() }],
        'border-color-x': [{ 'border-x': z() }],
        'border-color-y': [{ 'border-y': z() }],
        'border-color-s': [{ 'border-s': z() }],
        'border-color-e': [{ 'border-e': z() }],
        'border-color-t': [{ 'border-t': z() }],
        'border-color-r': [{ 'border-r': z() }],
        'border-color-b': [{ 'border-b': z() }],
        'border-color-l': [{ 'border-l': z() }],
        'divide-color': [{ divide: z() }],
        'outline-style': [{ outline: [...ye(), 'none', 'hidden'] }],
        'outline-offset': [{ 'outline-offset': [we, ie, ae] }],
        'outline-w': [{ outline: ['', we, Pr, Ca] }],
        'outline-color': [{ outline: z() }],
        shadow: [{ shadow: ['', 'none', g, Cl, Tl] }],
        'shadow-color': [{ shadow: z() }],
        'inset-shadow': [{ 'inset-shadow': ['none', v, Cl, Tl] }],
        'inset-shadow-color': [{ 'inset-shadow': z() }],
        'ring-w': [{ ring: ee() }],
        'ring-w-inset': ['ring-inset'],
        'ring-color': [{ ring: z() }],
        'ring-offset-w': [{ 'ring-offset': [we, Ca] }],
        'ring-offset-color': [{ 'ring-offset': z() }],
        'inset-ring-w': [{ 'inset-ring': ee() }],
        'inset-ring-color': [{ 'inset-ring': z() }],
        'text-shadow': [{ 'text-shadow': ['none', x, Cl, Tl] }],
        'text-shadow-color': [{ 'text-shadow': z() }],
        opacity: [{ opacity: [we, ie, ae] }],
        'mix-blend': [
          { 'mix-blend': [...oe(), 'plus-darker', 'plus-lighter'] },
        ],
        'bg-blend': [{ 'bg-blend': oe() }],
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
        'mask-image-linear-pos': [{ 'mask-linear': [we] }],
        'mask-image-linear-from-pos': [{ 'mask-linear-from': ce() }],
        'mask-image-linear-to-pos': [{ 'mask-linear-to': ce() }],
        'mask-image-linear-from-color': [{ 'mask-linear-from': z() }],
        'mask-image-linear-to-color': [{ 'mask-linear-to': z() }],
        'mask-image-t-from-pos': [{ 'mask-t-from': ce() }],
        'mask-image-t-to-pos': [{ 'mask-t-to': ce() }],
        'mask-image-t-from-color': [{ 'mask-t-from': z() }],
        'mask-image-t-to-color': [{ 'mask-t-to': z() }],
        'mask-image-r-from-pos': [{ 'mask-r-from': ce() }],
        'mask-image-r-to-pos': [{ 'mask-r-to': ce() }],
        'mask-image-r-from-color': [{ 'mask-r-from': z() }],
        'mask-image-r-to-color': [{ 'mask-r-to': z() }],
        'mask-image-b-from-pos': [{ 'mask-b-from': ce() }],
        'mask-image-b-to-pos': [{ 'mask-b-to': ce() }],
        'mask-image-b-from-color': [{ 'mask-b-from': z() }],
        'mask-image-b-to-color': [{ 'mask-b-to': z() }],
        'mask-image-l-from-pos': [{ 'mask-l-from': ce() }],
        'mask-image-l-to-pos': [{ 'mask-l-to': ce() }],
        'mask-image-l-from-color': [{ 'mask-l-from': z() }],
        'mask-image-l-to-color': [{ 'mask-l-to': z() }],
        'mask-image-x-from-pos': [{ 'mask-x-from': ce() }],
        'mask-image-x-to-pos': [{ 'mask-x-to': ce() }],
        'mask-image-x-from-color': [{ 'mask-x-from': z() }],
        'mask-image-x-to-color': [{ 'mask-x-to': z() }],
        'mask-image-y-from-pos': [{ 'mask-y-from': ce() }],
        'mask-image-y-to-pos': [{ 'mask-y-to': ce() }],
        'mask-image-y-from-color': [{ 'mask-y-from': z() }],
        'mask-image-y-to-color': [{ 'mask-y-to': z() }],
        'mask-image-radial': [{ 'mask-radial': [ie, ae] }],
        'mask-image-radial-from-pos': [{ 'mask-radial-from': ce() }],
        'mask-image-radial-to-pos': [{ 'mask-radial-to': ce() }],
        'mask-image-radial-from-color': [{ 'mask-radial-from': z() }],
        'mask-image-radial-to-color': [{ 'mask-radial-to': z() }],
        'mask-image-radial-shape': [{ 'mask-radial': ['circle', 'ellipse'] }],
        'mask-image-radial-size': [
          {
            'mask-radial': [
              { closest: ['side', 'corner'], farthest: ['side', 'corner'] },
            ],
          },
        ],
        'mask-image-radial-pos': [{ 'mask-radial-at': k() }],
        'mask-image-conic-pos': [{ 'mask-conic': [we] }],
        'mask-image-conic-from-pos': [{ 'mask-conic-from': ce() }],
        'mask-image-conic-to-pos': [{ 'mask-conic-to': ce() }],
        'mask-image-conic-from-color': [{ 'mask-conic-from': z() }],
        'mask-image-conic-to-color': [{ 'mask-conic-to': z() }],
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
        'mask-position': [{ mask: I() }],
        'mask-repeat': [{ mask: T() }],
        'mask-size': [{ mask: G() }],
        'mask-type': [{ 'mask-type': ['alpha', 'luminance'] }],
        'mask-image': [{ mask: ['none', ie, ae] }],
        filter: [{ filter: ['', 'none', ie, ae] }],
        blur: [{ blur: Ce() }],
        brightness: [{ brightness: [we, ie, ae] }],
        contrast: [{ contrast: [we, ie, ae] }],
        'drop-shadow': [{ 'drop-shadow': ['', 'none', O, Cl, Tl] }],
        'drop-shadow-color': [{ 'drop-shadow': z() }],
        grayscale: [{ grayscale: ['', we, ie, ae] }],
        'hue-rotate': [{ 'hue-rotate': [we, ie, ae] }],
        invert: [{ invert: ['', we, ie, ae] }],
        saturate: [{ saturate: [we, ie, ae] }],
        sepia: [{ sepia: ['', we, ie, ae] }],
        'backdrop-filter': [{ 'backdrop-filter': ['', 'none', ie, ae] }],
        'backdrop-blur': [{ 'backdrop-blur': Ce() }],
        'backdrop-brightness': [{ 'backdrop-brightness': [we, ie, ae] }],
        'backdrop-contrast': [{ 'backdrop-contrast': [we, ie, ae] }],
        'backdrop-grayscale': [{ 'backdrop-grayscale': ['', we, ie, ae] }],
        'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [we, ie, ae] }],
        'backdrop-invert': [{ 'backdrop-invert': ['', we, ie, ae] }],
        'backdrop-opacity': [{ 'backdrop-opacity': [we, ie, ae] }],
        'backdrop-saturate': [{ 'backdrop-saturate': [we, ie, ae] }],
        'backdrop-sepia': [{ 'backdrop-sepia': ['', we, ie, ae] }],
        'border-collapse': [{ border: ['collapse', 'separate'] }],
        'border-spacing': [{ 'border-spacing': Y() }],
        'border-spacing-x': [{ 'border-spacing-x': Y() }],
        'border-spacing-y': [{ 'border-spacing-y': Y() }],
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
              ie,
              ae,
            ],
          },
        ],
        'transition-behavior': [{ transition: ['normal', 'discrete'] }],
        duration: [{ duration: [we, 'initial', ie, ae] }],
        ease: [{ ease: ['linear', 'initial', _, ie, ae] }],
        delay: [{ delay: [we, ie, ae] }],
        animate: [{ animate: ['none', q, ie, ae] }],
        backface: [{ backface: ['hidden', 'visible'] }],
        perspective: [{ perspective: [w, ie, ae] }],
        'perspective-origin': [{ 'perspective-origin': B() }],
        rotate: [{ rotate: ut() }],
        'rotate-x': [{ 'rotate-x': ut() }],
        'rotate-y': [{ 'rotate-y': ut() }],
        'rotate-z': [{ 'rotate-z': ut() }],
        scale: [{ scale: It() }],
        'scale-x': [{ 'scale-x': It() }],
        'scale-y': [{ 'scale-y': It() }],
        'scale-z': [{ 'scale-z': It() }],
        'scale-3d': ['scale-3d'],
        skew: [{ skew: Jt() }],
        'skew-x': [{ 'skew-x': Jt() }],
        'skew-y': [{ 'skew-y': Jt() }],
        transform: [{ transform: [ie, ae, '', 'none', 'gpu', 'cpu'] }],
        'transform-origin': [{ origin: B() }],
        'transform-style': [{ transform: ['3d', 'flat'] }],
        translate: [{ translate: Wt() }],
        'translate-x': [{ 'translate-x': Wt() }],
        'translate-y': [{ 'translate-y': Wt() }],
        'translate-z': [{ 'translate-z': Wt() }],
        'translate-none': ['translate-none'],
        accent: [{ accent: z() }],
        appearance: [{ appearance: ['none', 'auto'] }],
        'caret-color': [{ caret: z() }],
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
              ie,
              ae,
            ],
          },
        ],
        'field-sizing': [{ 'field-sizing': ['fixed', 'content'] }],
        'pointer-events': [{ 'pointer-events': ['auto', 'none'] }],
        resize: [{ resize: ['none', '', 'y', 'x'] }],
        'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
        'scroll-m': [{ 'scroll-m': Y() }],
        'scroll-mx': [{ 'scroll-mx': Y() }],
        'scroll-my': [{ 'scroll-my': Y() }],
        'scroll-ms': [{ 'scroll-ms': Y() }],
        'scroll-me': [{ 'scroll-me': Y() }],
        'scroll-mt': [{ 'scroll-mt': Y() }],
        'scroll-mr': [{ 'scroll-mr': Y() }],
        'scroll-mb': [{ 'scroll-mb': Y() }],
        'scroll-ml': [{ 'scroll-ml': Y() }],
        'scroll-p': [{ 'scroll-p': Y() }],
        'scroll-px': [{ 'scroll-px': Y() }],
        'scroll-py': [{ 'scroll-py': Y() }],
        'scroll-ps': [{ 'scroll-ps': Y() }],
        'scroll-pe': [{ 'scroll-pe': Y() }],
        'scroll-pt': [{ 'scroll-pt': Y() }],
        'scroll-pr': [{ 'scroll-pr': Y() }],
        'scroll-pb': [{ 'scroll-pb': Y() }],
        'scroll-pl': [{ 'scroll-pl': Y() }],
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
            'will-change': ['auto', 'scroll', 'contents', 'transform', ie, ae],
          },
        ],
        fill: [{ fill: ['none', ...z()] }],
        'stroke-w': [{ stroke: [we, Pr, Ca, Bc] }],
        stroke: [{ stroke: ['none', ...z()] }],
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
  IO = _O($O);
function Uf(...n) {
  return IO(Sv(n));
}
const JO = yO(
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
function _v({ className: n, variant: a, size: r, asChild: l = !1, ...o }) {
  const c = l ? fO : 'button';
  return F.jsx(c, {
    'data-slot': 'button',
    className: Uf(JO({ variant: a, size: r, className: n })),
    ...o,
  });
}
function Te(n, a, { checkForDefaultPrevented: r = !0 } = {}) {
  return function (o) {
    if ((n?.(o), r === !1 || !o.defaultPrevented)) return a?.(o);
  };
}
function is(n, a = []) {
  let r = [];
  function l(c, d) {
    const h = E.createContext(d),
      m = r.length;
    r = [...r, d];
    const p = (v) => {
      const { scope: x, children: O, ...S } = v,
        w = x?.[n]?.[m] || h,
        R = E.useMemo(() => S, Object.values(S));
      return F.jsx(w.Provider, { value: R, children: O });
    };
    p.displayName = c + 'Provider';
    function g(v, x) {
      const O = x?.[n]?.[m] || h,
        S = E.useContext(O);
      if (S) return S;
      if (d !== void 0) return d;
      throw new Error(`\`${v}\` must be used within \`${c}\``);
    }
    return [p, g];
  }
  const o = () => {
    const c = r.map((d) => E.createContext(d));
    return function (h) {
      const m = h?.[n] || c;
      return E.useMemo(() => ({ [`__scope${n}`]: { ...h, [n]: m } }), [h, m]);
    };
  };
  return (o.scopeName = n), [l, WO(o, ...a)];
}
function WO(...n) {
  const a = n[0];
  if (n.length === 1) return a;
  const r = () => {
    const l = n.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (c) {
      const d = l.reduce((h, { useScope: m, scopeName: p }) => {
        const v = m(c)[`__scope${p}`];
        return { ...h, ...v };
      }, {});
      return E.useMemo(() => ({ [`__scope${a.scopeName}`]: d }), [d]);
    };
  };
  return (r.scopeName = a.scopeName), r;
}
var la = globalThis?.document ? E.useLayoutEffect : () => {},
  eR = Cy[' useInsertionEffect '.trim().toString()] || la;
function Nv({ prop: n, defaultProp: a, onChange: r = () => {}, caller: l }) {
  const [o, c, d] = tR({ defaultProp: a, onChange: r }),
    h = n !== void 0,
    m = h ? n : o;
  {
    const g = E.useRef(n !== void 0);
    E.useEffect(() => {
      const v = g.current;
      v !== h &&
        console.warn(
          `${l} is changing from ${v ? 'controlled' : 'uncontrolled'} to ${h ? 'controlled' : 'uncontrolled'}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (g.current = h);
    }, [h, l]);
  }
  const p = E.useCallback(
    (g) => {
      if (h) {
        const v = nR(g) ? g(n) : g;
        v !== n && d.current?.(v);
      } else c(g);
    },
    [h, n, c, d],
  );
  return [m, p];
}
function tR({ defaultProp: n, onChange: a }) {
  const [r, l] = E.useState(n),
    o = E.useRef(r),
    c = E.useRef(a);
  return (
    eR(() => {
      c.current = a;
    }, [a]),
    E.useEffect(() => {
      o.current !== r && (c.current?.(r), (o.current = r));
    }, [r, o]),
    [r, l, c]
  );
}
function nR(n) {
  return typeof n == 'function';
}
var jf = My();
const aR = Ty(jf);
var iR = [
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
  ft = iR.reduce((n, a) => {
    const r = Xr(`Primitive.${a}`),
      l = E.forwardRef((o, c) => {
        const { asChild: d, ...h } = o,
          m = d ? r : a;
        return (
          typeof window < 'u' && (window[Symbol.for('radix-ui')] = !0),
          F.jsx(m, { ...h, ref: c })
        );
      });
    return (l.displayName = `Primitive.${a}`), { ...n, [a]: l };
  }, {});
function Lv(n, a) {
  n && jf.flushSync(() => n.dispatchEvent(a));
}
function zv(n) {
  const a = n + 'CollectionProvider',
    [r, l] = is(a),
    [o, c] = r(a, { collectionRef: { current: null }, itemMap: new Map() }),
    d = (w) => {
      const { scope: R, children: _ } = w,
        q = Gt.useRef(null),
        j = Gt.useRef(new Map()).current;
      return F.jsx(o, { scope: R, itemMap: j, collectionRef: q, children: _ });
    };
  d.displayName = a;
  const h = n + 'CollectionSlot',
    m = Xr(h),
    p = Gt.forwardRef((w, R) => {
      const { scope: _, children: q } = w,
        j = c(h, _),
        k = xt(R, j.collectionRef);
      return F.jsx(m, { ref: k, children: q });
    });
  p.displayName = h;
  const g = n + 'CollectionItemSlot',
    v = 'data-radix-collection-item',
    x = Xr(g),
    O = Gt.forwardRef((w, R) => {
      const { scope: _, children: q, ...j } = w,
        k = Gt.useRef(null),
        B = xt(R, k),
        J = c(g, _);
      return (
        Gt.useEffect(
          () => (
            J.itemMap.set(k, { ref: k, ...j }), () => void J.itemMap.delete(k)
          ),
        ),
        F.jsx(x, { [v]: '', ref: B, children: q })
      );
    });
  O.displayName = g;
  function S(w) {
    const R = c(n + 'CollectionConsumer', w);
    return Gt.useCallback(() => {
      const q = R.collectionRef.current;
      if (!q) return [];
      const j = Array.from(q.querySelectorAll(`[${v}]`));
      return Array.from(R.itemMap.values()).sort(
        (J, V) => j.indexOf(J.ref.current) - j.indexOf(V.ref.current),
      );
    }, [R.collectionRef, R.itemMap]);
  }
  return [{ Provider: d, Slot: p, ItemSlot: O }, S, l];
}
var rR = E.createContext(void 0);
function Uv(n) {
  const a = E.useContext(rR);
  return n || a || 'ltr';
}
function Dn(n) {
  const a = E.useRef(n);
  return (
    E.useEffect(() => {
      a.current = n;
    }),
    E.useMemo(
      () =>
        (...r) =>
          a.current?.(...r),
      [],
    )
  );
}
function sR(n, a = globalThis?.document) {
  const r = Dn(n);
  E.useEffect(() => {
    const l = (o) => {
      o.key === 'Escape' && r(o);
    };
    return (
      a.addEventListener('keydown', l, { capture: !0 }),
      () => a.removeEventListener('keydown', l, { capture: !0 })
    );
  }, [r, a]);
}
var lR = 'DismissableLayer',
  yf = 'dismissableLayer.update',
  oR = 'dismissableLayer.pointerDownOutside',
  uR = 'dismissableLayer.focusOutside',
  ey,
  jv = E.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  kv = E.forwardRef((n, a) => {
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: l,
        onPointerDownOutside: o,
        onFocusOutside: c,
        onInteractOutside: d,
        onDismiss: h,
        ...m
      } = n,
      p = E.useContext(jv),
      [g, v] = E.useState(null),
      x = g?.ownerDocument ?? globalThis?.document,
      [, O] = E.useState({}),
      S = xt(a, (V) => v(V)),
      w = Array.from(p.layers),
      [R] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1),
      _ = w.indexOf(R),
      q = g ? w.indexOf(g) : -1,
      j = p.layersWithOutsidePointerEventsDisabled.size > 0,
      k = q >= _,
      B = dR((V) => {
        const Y = V.target,
          te = [...p.branches].some((re) => re.contains(Y));
        !k || te || (o?.(V), d?.(V), V.defaultPrevented || h?.());
      }, x),
      J = hR((V) => {
        const Y = V.target;
        [...p.branches].some((re) => re.contains(Y)) ||
          (c?.(V), d?.(V), V.defaultPrevented || h?.());
      }, x);
    return (
      sR((V) => {
        q === p.layers.size - 1 &&
          (l?.(V), !V.defaultPrevented && h && (V.preventDefault(), h()));
      }, x),
      E.useEffect(() => {
        if (g)
          return (
            r &&
              (p.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((ey = x.body.style.pointerEvents),
                (x.body.style.pointerEvents = 'none')),
              p.layersWithOutsidePointerEventsDisabled.add(g)),
            p.layers.add(g),
            ty(),
            () => {
              r &&
                p.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (x.body.style.pointerEvents = ey);
            }
          );
      }, [g, x, r, p]),
      E.useEffect(
        () => () => {
          g &&
            (p.layers.delete(g),
            p.layersWithOutsidePointerEventsDisabled.delete(g),
            ty());
        },
        [g, p],
      ),
      E.useEffect(() => {
        const V = () => O({});
        return (
          document.addEventListener(yf, V),
          () => document.removeEventListener(yf, V)
        );
      }, []),
      F.jsx(ft.div, {
        ...m,
        ref: S,
        style: {
          pointerEvents: j ? (k ? 'auto' : 'none') : void 0,
          ...n.style,
        },
        onFocusCapture: Te(n.onFocusCapture, J.onFocusCapture),
        onBlurCapture: Te(n.onBlurCapture, J.onBlurCapture),
        onPointerDownCapture: Te(
          n.onPointerDownCapture,
          B.onPointerDownCapture,
        ),
      })
    );
  });
kv.displayName = lR;
var cR = 'DismissableLayerBranch',
  fR = E.forwardRef((n, a) => {
    const r = E.useContext(jv),
      l = E.useRef(null),
      o = xt(a, l);
    return (
      E.useEffect(() => {
        const c = l.current;
        if (c)
          return (
            r.branches.add(c),
            () => {
              r.branches.delete(c);
            }
          );
      }, [r.branches]),
      F.jsx(ft.div, { ...n, ref: o })
    );
  });
fR.displayName = cR;
function dR(n, a = globalThis?.document) {
  const r = Dn(n),
    l = E.useRef(!1),
    o = E.useRef(() => {});
  return (
    E.useEffect(() => {
      const c = (h) => {
          if (h.target && !l.current) {
            let m = function () {
              Hv(oR, r, p, { discrete: !0 });
            };
            const p = { originalEvent: h };
            h.pointerType === 'touch'
              ? (a.removeEventListener('click', o.current),
                (o.current = m),
                a.addEventListener('click', o.current, { once: !0 }))
              : m();
          } else a.removeEventListener('click', o.current);
          l.current = !1;
        },
        d = window.setTimeout(() => {
          a.addEventListener('pointerdown', c);
        }, 0);
      return () => {
        window.clearTimeout(d),
          a.removeEventListener('pointerdown', c),
          a.removeEventListener('click', o.current);
      };
    }, [a, r]),
    { onPointerDownCapture: () => (l.current = !0) }
  );
}
function hR(n, a = globalThis?.document) {
  const r = Dn(n),
    l = E.useRef(!1);
  return (
    E.useEffect(() => {
      const o = (c) => {
        c.target &&
          !l.current &&
          Hv(uR, r, { originalEvent: c }, { discrete: !1 });
      };
      return (
        a.addEventListener('focusin', o),
        () => a.removeEventListener('focusin', o)
      );
    }, [a, r]),
    {
      onFocusCapture: () => (l.current = !0),
      onBlurCapture: () => (l.current = !1),
    }
  );
}
function ty() {
  const n = new CustomEvent(yf);
  document.dispatchEvent(n);
}
function Hv(n, a, r, { discrete: l }) {
  const o = r.originalEvent.target,
    c = new CustomEvent(n, { bubbles: !1, cancelable: !0, detail: r });
  a && o.addEventListener(n, a, { once: !0 }),
    l ? Lv(o, c) : o.dispatchEvent(c);
}
var qc = 0;
function pR() {
  E.useEffect(() => {
    const n = document.querySelectorAll('[data-radix-focus-guard]');
    return (
      document.body.insertAdjacentElement('afterbegin', n[0] ?? ny()),
      document.body.insertAdjacentElement('beforeend', n[1] ?? ny()),
      qc++,
      () => {
        qc === 1 &&
          document
            .querySelectorAll('[data-radix-focus-guard]')
            .forEach((a) => a.remove()),
          qc--;
      }
    );
  }, []);
}
function ny() {
  const n = document.createElement('span');
  return (
    n.setAttribute('data-radix-focus-guard', ''),
    (n.tabIndex = 0),
    (n.style.outline = 'none'),
    (n.style.opacity = '0'),
    (n.style.position = 'fixed'),
    (n.style.pointerEvents = 'none'),
    n
  );
}
var Pc = 'focusScope.autoFocusOnMount',
  Gc = 'focusScope.autoFocusOnUnmount',
  ay = { bubbles: !1, cancelable: !0 },
  mR = 'FocusScope',
  Bv = E.forwardRef((n, a) => {
    const {
        loop: r = !1,
        trapped: l = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: c,
        ...d
      } = n,
      [h, m] = E.useState(null),
      p = Dn(o),
      g = Dn(c),
      v = E.useRef(null),
      x = xt(a, (w) => m(w)),
      O = E.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    E.useEffect(() => {
      if (l) {
        let w = function (j) {
            if (O.paused || !h) return;
            const k = j.target;
            h.contains(k) ? (v.current = k) : ra(v.current, { select: !0 });
          },
          R = function (j) {
            if (O.paused || !h) return;
            const k = j.relatedTarget;
            k !== null && (h.contains(k) || ra(v.current, { select: !0 }));
          },
          _ = function (j) {
            if (document.activeElement === document.body)
              for (const B of j) B.removedNodes.length > 0 && ra(h);
          };
        document.addEventListener('focusin', w),
          document.addEventListener('focusout', R);
        const q = new MutationObserver(_);
        return (
          h && q.observe(h, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener('focusin', w),
              document.removeEventListener('focusout', R),
              q.disconnect();
          }
        );
      }
    }, [l, h, O.paused]),
      E.useEffect(() => {
        if (h) {
          ry.add(O);
          const w = document.activeElement;
          if (!h.contains(w)) {
            const _ = new CustomEvent(Pc, ay);
            h.addEventListener(Pc, p),
              h.dispatchEvent(_),
              _.defaultPrevented ||
                (gR(xR(qv(h)), { select: !0 }),
                document.activeElement === w && ra(h));
          }
          return () => {
            h.removeEventListener(Pc, p),
              setTimeout(() => {
                const _ = new CustomEvent(Gc, ay);
                h.addEventListener(Gc, g),
                  h.dispatchEvent(_),
                  _.defaultPrevented || ra(w ?? document.body, { select: !0 }),
                  h.removeEventListener(Gc, g),
                  ry.remove(O);
              }, 0);
          };
        }
      }, [h, p, g, O]);
    const S = E.useCallback(
      (w) => {
        if ((!r && !l) || O.paused) return;
        const R = w.key === 'Tab' && !w.altKey && !w.ctrlKey && !w.metaKey,
          _ = document.activeElement;
        if (R && _) {
          const q = w.currentTarget,
            [j, k] = yR(q);
          j && k
            ? !w.shiftKey && _ === k
              ? (w.preventDefault(), r && ra(j, { select: !0 }))
              : w.shiftKey &&
                _ === j &&
                (w.preventDefault(), r && ra(k, { select: !0 }))
            : _ === q && w.preventDefault();
        }
      },
      [r, l, O.paused],
    );
    return F.jsx(ft.div, { tabIndex: -1, ...d, ref: x, onKeyDown: S });
  });
Bv.displayName = mR;
function gR(n, { select: a = !1 } = {}) {
  const r = document.activeElement;
  for (const l of n)
    if ((ra(l, { select: a }), document.activeElement !== r)) return;
}
function yR(n) {
  const a = qv(n),
    r = iy(a, n),
    l = iy(a.reverse(), n);
  return [r, l];
}
function qv(n) {
  const a = [],
    r = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (l) => {
        const o = l.tagName === 'INPUT' && l.type === 'hidden';
        return l.disabled || l.hidden || o
          ? NodeFilter.FILTER_SKIP
          : l.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; r.nextNode(); ) a.push(r.currentNode);
  return a;
}
function iy(n, a) {
  for (const r of n) if (!vR(r, { upTo: a })) return r;
}
function vR(n, { upTo: a }) {
  if (getComputedStyle(n).visibility === 'hidden') return !0;
  for (; n; ) {
    if (a !== void 0 && n === a) return !1;
    if (getComputedStyle(n).display === 'none') return !0;
    n = n.parentElement;
  }
  return !1;
}
function bR(n) {
  return n instanceof HTMLInputElement && 'select' in n;
}
function ra(n, { select: a = !1 } = {}) {
  if (n && n.focus) {
    const r = document.activeElement;
    n.focus({ preventScroll: !0 }), n !== r && bR(n) && a && n.select();
  }
}
var ry = SR();
function SR() {
  let n = [];
  return {
    add(a) {
      const r = n[0];
      a !== r && r?.pause(), (n = sy(n, a)), n.unshift(a);
    },
    remove(a) {
      (n = sy(n, a)), n[0]?.resume();
    },
  };
}
function sy(n, a) {
  const r = [...n],
    l = r.indexOf(a);
  return l !== -1 && r.splice(l, 1), r;
}
function xR(n) {
  return n.filter((a) => a.tagName !== 'A');
}
var wR = Cy[' useId '.trim().toString()] || (() => {}),
  ER = 0;
function vf(n) {
  const [a, r] = E.useState(wR());
  return (
    la(() => {
      r((l) => l ?? String(ER++));
    }, [n]),
    n || (a ? `radix-${a}` : '')
  );
}
const OR = ['top', 'right', 'bottom', 'left'],
  oa = Math.min,
  _t = Math.max,
  Xl = Math.round,
  Ml = Math.floor,
  fn = (n) => ({ x: n, y: n }),
  RR = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
  AR = { start: 'end', end: 'start' };
function bf(n, a, r) {
  return _t(n, oa(a, r));
}
function _n(n, a) {
  return typeof n == 'function' ? n(a) : n;
}
function Nn(n) {
  return n.split('-')[0];
}
function Hi(n) {
  return n.split('-')[1];
}
function kf(n) {
  return n === 'x' ? 'y' : 'x';
}
function Hf(n) {
  return n === 'y' ? 'height' : 'width';
}
const TR = new Set(['top', 'bottom']);
function cn(n) {
  return TR.has(Nn(n)) ? 'y' : 'x';
}
function Bf(n) {
  return kf(cn(n));
}
function CR(n, a, r) {
  r === void 0 && (r = !1);
  const l = Hi(n),
    o = Bf(n),
    c = Hf(o);
  let d =
    o === 'x'
      ? l === (r ? 'end' : 'start')
        ? 'right'
        : 'left'
      : l === 'start'
        ? 'bottom'
        : 'top';
  return a.reference[c] > a.floating[c] && (d = Zl(d)), [d, Zl(d)];
}
function MR(n) {
  const a = Zl(n);
  return [Sf(n), a, Sf(a)];
}
function Sf(n) {
  return n.replace(/start|end/g, (a) => AR[a]);
}
const ly = ['left', 'right'],
  oy = ['right', 'left'],
  DR = ['top', 'bottom'],
  _R = ['bottom', 'top'];
function NR(n, a, r) {
  switch (n) {
    case 'top':
    case 'bottom':
      return r ? (a ? oy : ly) : a ? ly : oy;
    case 'left':
    case 'right':
      return a ? DR : _R;
    default:
      return [];
  }
}
function LR(n, a, r, l) {
  const o = Hi(n);
  let c = NR(Nn(n), r === 'start', l);
  return (
    o && ((c = c.map((d) => d + '-' + o)), a && (c = c.concat(c.map(Sf)))), c
  );
}
function Zl(n) {
  return n.replace(/left|right|bottom|top/g, (a) => RR[a]);
}
function zR(n) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...n };
}
function Pv(n) {
  return typeof n != 'number'
    ? zR(n)
    : { top: n, right: n, bottom: n, left: n };
}
function $l(n) {
  const { x: a, y: r, width: l, height: o } = n;
  return {
    width: l,
    height: o,
    top: r,
    left: a,
    right: a + l,
    bottom: r + o,
    x: a,
    y: r,
  };
}
function uy(n, a, r) {
  let { reference: l, floating: o } = n;
  const c = cn(a),
    d = Bf(a),
    h = Hf(d),
    m = Nn(a),
    p = c === 'y',
    g = l.x + l.width / 2 - o.width / 2,
    v = l.y + l.height / 2 - o.height / 2,
    x = l[h] / 2 - o[h] / 2;
  let O;
  switch (m) {
    case 'top':
      O = { x: g, y: l.y - o.height };
      break;
    case 'bottom':
      O = { x: g, y: l.y + l.height };
      break;
    case 'right':
      O = { x: l.x + l.width, y: v };
      break;
    case 'left':
      O = { x: l.x - o.width, y: v };
      break;
    default:
      O = { x: l.x, y: l.y };
  }
  switch (Hi(a)) {
    case 'start':
      O[d] -= x * (r && p ? -1 : 1);
      break;
    case 'end':
      O[d] += x * (r && p ? -1 : 1);
      break;
  }
  return O;
}
const UR = async (n, a, r) => {
  const {
      placement: l = 'bottom',
      strategy: o = 'absolute',
      middleware: c = [],
      platform: d,
    } = r,
    h = c.filter(Boolean),
    m = await (d.isRTL == null ? void 0 : d.isRTL(a));
  let p = await d.getElementRects({ reference: n, floating: a, strategy: o }),
    { x: g, y: v } = uy(p, l, m),
    x = l,
    O = {},
    S = 0;
  for (let w = 0; w < h.length; w++) {
    const { name: R, fn: _ } = h[w],
      {
        x: q,
        y: j,
        data: k,
        reset: B,
      } = await _({
        x: g,
        y: v,
        initialPlacement: l,
        placement: x,
        strategy: o,
        middlewareData: O,
        rects: p,
        platform: d,
        elements: { reference: n, floating: a },
      });
    (g = q ?? g),
      (v = j ?? v),
      (O = { ...O, [R]: { ...O[R], ...k } }),
      B &&
        S <= 50 &&
        (S++,
        typeof B == 'object' &&
          (B.placement && (x = B.placement),
          B.rects &&
            (p =
              B.rects === !0
                ? await d.getElementRects({
                    reference: n,
                    floating: a,
                    strategy: o,
                  })
                : B.rects),
          ({ x: g, y: v } = uy(p, x, m))),
        (w = -1));
  }
  return { x: g, y: v, placement: x, strategy: o, middlewareData: O };
};
async function Zr(n, a) {
  var r;
  a === void 0 && (a = {});
  const { x: l, y: o, platform: c, rects: d, elements: h, strategy: m } = n,
    {
      boundary: p = 'clippingAncestors',
      rootBoundary: g = 'viewport',
      elementContext: v = 'floating',
      altBoundary: x = !1,
      padding: O = 0,
    } = _n(a, n),
    S = Pv(O),
    R = h[x ? (v === 'floating' ? 'reference' : 'floating') : v],
    _ = $l(
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
    q =
      v === 'floating'
        ? { x: l, y: o, width: d.floating.width, height: d.floating.height }
        : d.reference,
    j = await (c.getOffsetParent == null
      ? void 0
      : c.getOffsetParent(h.floating)),
    k = (await (c.isElement == null ? void 0 : c.isElement(j)))
      ? (await (c.getScale == null ? void 0 : c.getScale(j))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    B = $l(
      c.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await c.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: h,
            rect: q,
            offsetParent: j,
            strategy: m,
          })
        : q,
    );
  return {
    top: (_.top - B.top + S.top) / k.y,
    bottom: (B.bottom - _.bottom + S.bottom) / k.y,
    left: (_.left - B.left + S.left) / k.x,
    right: (B.right - _.right + S.right) / k.x,
  };
}
const jR = (n) => ({
    name: 'arrow',
    options: n,
    async fn(a) {
      const {
          x: r,
          y: l,
          placement: o,
          rects: c,
          platform: d,
          elements: h,
          middlewareData: m,
        } = a,
        { element: p, padding: g = 0 } = _n(n, a) || {};
      if (p == null) return {};
      const v = Pv(g),
        x = { x: r, y: l },
        O = Bf(o),
        S = Hf(O),
        w = await d.getDimensions(p),
        R = O === 'y',
        _ = R ? 'top' : 'left',
        q = R ? 'bottom' : 'right',
        j = R ? 'clientHeight' : 'clientWidth',
        k = c.reference[S] + c.reference[O] - x[O] - c.floating[S],
        B = x[O] - c.reference[O],
        J = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(p));
      let V = J ? J[j] : 0;
      (!V || !(await (d.isElement == null ? void 0 : d.isElement(J)))) &&
        (V = h.floating[j] || c.floating[S]);
      const Y = k / 2 - B / 2,
        te = V / 2 - w[S] / 2 - 1,
        re = oa(v[_], te),
        ve = oa(v[q], te),
        de = re,
        ue = V - w[S] - ve,
        se = V / 2 - w[S] / 2 + Y,
        me = bf(de, se, ue),
        M =
          !m.arrow &&
          Hi(o) != null &&
          se !== me &&
          c.reference[S] / 2 - (se < de ? re : ve) - w[S] / 2 < 0,
        X = M ? (se < de ? se - de : se - ue) : 0;
      return {
        [O]: x[O] + X,
        data: {
          [O]: me,
          centerOffset: se - me - X,
          ...(M && { alignmentOffset: X }),
        },
        reset: M,
      };
    },
  }),
  kR = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: 'flip',
        options: n,
        async fn(a) {
          var r, l;
          const {
              placement: o,
              middlewareData: c,
              rects: d,
              initialPlacement: h,
              platform: m,
              elements: p,
            } = a,
            {
              mainAxis: g = !0,
              crossAxis: v = !0,
              fallbackPlacements: x,
              fallbackStrategy: O = 'bestFit',
              fallbackAxisSideDirection: S = 'none',
              flipAlignment: w = !0,
              ...R
            } = _n(n, a);
          if ((r = c.arrow) != null && r.alignmentOffset) return {};
          const _ = Nn(o),
            q = cn(h),
            j = Nn(h) === h,
            k = await (m.isRTL == null ? void 0 : m.isRTL(p.floating)),
            B = x || (j || !w ? [Zl(h)] : MR(h)),
            J = S !== 'none';
          !x && J && B.push(...LR(h, w, S, k));
          const V = [h, ...B],
            Y = await Zr(a, R),
            te = [];
          let re = ((l = c.flip) == null ? void 0 : l.overflows) || [];
          if ((g && te.push(Y[_]), v)) {
            const se = CR(o, d, k);
            te.push(Y[se[0]], Y[se[1]]);
          }
          if (
            ((re = [...re, { placement: o, overflows: te }]),
            !te.every((se) => se <= 0))
          ) {
            var ve, de;
            const se = (((ve = c.flip) == null ? void 0 : ve.index) || 0) + 1,
              me = V[se];
            if (
              me &&
              (!(v === 'alignment' ? q !== cn(me) : !1) ||
                re.every((z) =>
                  cn(z.placement) === q ? z.overflows[0] > 0 : !0,
                ))
            )
              return {
                data: { index: se, overflows: re },
                reset: { placement: me },
              };
            let M =
              (de = re
                .filter((X) => X.overflows[0] <= 0)
                .sort((X, z) => X.overflows[1] - z.overflows[1])[0]) == null
                ? void 0
                : de.placement;
            if (!M)
              switch (O) {
                case 'bestFit': {
                  var ue;
                  const X =
                    (ue = re
                      .filter((z) => {
                        if (J) {
                          const I = cn(z.placement);
                          return I === q || I === 'y';
                        }
                        return !0;
                      })
                      .map((z) => [
                        z.placement,
                        z.overflows
                          .filter((I) => I > 0)
                          .reduce((I, T) => I + T, 0),
                      ])
                      .sort((z, I) => z[1] - I[1])[0]) == null
                      ? void 0
                      : ue[0];
                  X && (M = X);
                  break;
                }
                case 'initialPlacement':
                  M = h;
                  break;
              }
            if (o !== M) return { reset: { placement: M } };
          }
          return {};
        },
      }
    );
  };
function cy(n, a) {
  return {
    top: n.top - a.height,
    right: n.right - a.width,
    bottom: n.bottom - a.height,
    left: n.left - a.width,
  };
}
function fy(n) {
  return OR.some((a) => n[a] >= 0);
}
const HR = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: 'hide',
        options: n,
        async fn(a) {
          const { rects: r } = a,
            { strategy: l = 'referenceHidden', ...o } = _n(n, a);
          switch (l) {
            case 'referenceHidden': {
              const c = await Zr(a, { ...o, elementContext: 'reference' }),
                d = cy(c, r.reference);
              return {
                data: { referenceHiddenOffsets: d, referenceHidden: fy(d) },
              };
            }
            case 'escaped': {
              const c = await Zr(a, { ...o, altBoundary: !0 }),
                d = cy(c, r.floating);
              return { data: { escapedOffsets: d, escaped: fy(d) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  Gv = new Set(['left', 'top']);
async function BR(n, a) {
  const { placement: r, platform: l, elements: o } = n,
    c = await (l.isRTL == null ? void 0 : l.isRTL(o.floating)),
    d = Nn(r),
    h = Hi(r),
    m = cn(r) === 'y',
    p = Gv.has(d) ? -1 : 1,
    g = c && m ? -1 : 1,
    v = _n(a, n);
  let {
    mainAxis: x,
    crossAxis: O,
    alignmentAxis: S,
  } = typeof v == 'number'
    ? { mainAxis: v, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: v.mainAxis || 0,
        crossAxis: v.crossAxis || 0,
        alignmentAxis: v.alignmentAxis,
      };
  return (
    h && typeof S == 'number' && (O = h === 'end' ? S * -1 : S),
    m ? { x: O * g, y: x * p } : { x: x * p, y: O * g }
  );
}
const qR = function (n) {
    return (
      n === void 0 && (n = 0),
      {
        name: 'offset',
        options: n,
        async fn(a) {
          var r, l;
          const { x: o, y: c, placement: d, middlewareData: h } = a,
            m = await BR(a, n);
          return d === ((r = h.offset) == null ? void 0 : r.placement) &&
            (l = h.arrow) != null &&
            l.alignmentOffset
            ? {}
            : { x: o + m.x, y: c + m.y, data: { ...m, placement: d } };
        },
      }
    );
  },
  PR = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: 'shift',
        options: n,
        async fn(a) {
          const { x: r, y: l, placement: o } = a,
            {
              mainAxis: c = !0,
              crossAxis: d = !1,
              limiter: h = {
                fn: (R) => {
                  let { x: _, y: q } = R;
                  return { x: _, y: q };
                },
              },
              ...m
            } = _n(n, a),
            p = { x: r, y: l },
            g = await Zr(a, m),
            v = cn(Nn(o)),
            x = kf(v);
          let O = p[x],
            S = p[v];
          if (c) {
            const R = x === 'y' ? 'top' : 'left',
              _ = x === 'y' ? 'bottom' : 'right',
              q = O + g[R],
              j = O - g[_];
            O = bf(q, O, j);
          }
          if (d) {
            const R = v === 'y' ? 'top' : 'left',
              _ = v === 'y' ? 'bottom' : 'right',
              q = S + g[R],
              j = S - g[_];
            S = bf(q, S, j);
          }
          const w = h.fn({ ...a, [x]: O, [v]: S });
          return {
            ...w,
            data: { x: w.x - r, y: w.y - l, enabled: { [x]: c, [v]: d } },
          };
        },
      }
    );
  },
  GR = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        options: n,
        fn(a) {
          const { x: r, y: l, placement: o, rects: c, middlewareData: d } = a,
            { offset: h = 0, mainAxis: m = !0, crossAxis: p = !0 } = _n(n, a),
            g = { x: r, y: l },
            v = cn(o),
            x = kf(v);
          let O = g[x],
            S = g[v];
          const w = _n(h, a),
            R =
              typeof w == 'number'
                ? { mainAxis: w, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...w };
          if (m) {
            const j = x === 'y' ? 'height' : 'width',
              k = c.reference[x] - c.floating[j] + R.mainAxis,
              B = c.reference[x] + c.reference[j] - R.mainAxis;
            O < k ? (O = k) : O > B && (O = B);
          }
          if (p) {
            var _, q;
            const j = x === 'y' ? 'width' : 'height',
              k = Gv.has(Nn(o)),
              B =
                c.reference[v] -
                c.floating[j] +
                ((k && ((_ = d.offset) == null ? void 0 : _[v])) || 0) +
                (k ? 0 : R.crossAxis),
              J =
                c.reference[v] +
                c.reference[j] +
                (k ? 0 : ((q = d.offset) == null ? void 0 : q[v]) || 0) -
                (k ? R.crossAxis : 0);
            S < B ? (S = B) : S > J && (S = J);
          }
          return { [x]: O, [v]: S };
        },
      }
    );
  },
  VR = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: 'size',
        options: n,
        async fn(a) {
          var r, l;
          const { placement: o, rects: c, platform: d, elements: h } = a,
            { apply: m = () => {}, ...p } = _n(n, a),
            g = await Zr(a, p),
            v = Nn(o),
            x = Hi(o),
            O = cn(o) === 'y',
            { width: S, height: w } = c.floating;
          let R, _;
          v === 'top' || v === 'bottom'
            ? ((R = v),
              (_ =
                x ===
                ((await (d.isRTL == null ? void 0 : d.isRTL(h.floating)))
                  ? 'start'
                  : 'end')
                  ? 'left'
                  : 'right'))
            : ((_ = v), (R = x === 'end' ? 'top' : 'bottom'));
          const q = w - g.top - g.bottom,
            j = S - g.left - g.right,
            k = oa(w - g[R], q),
            B = oa(S - g[_], j),
            J = !a.middlewareData.shift;
          let V = k,
            Y = B;
          if (
            ((r = a.middlewareData.shift) != null && r.enabled.x && (Y = j),
            (l = a.middlewareData.shift) != null && l.enabled.y && (V = q),
            J && !x)
          ) {
            const re = _t(g.left, 0),
              ve = _t(g.right, 0),
              de = _t(g.top, 0),
              ue = _t(g.bottom, 0);
            O
              ? (Y =
                  S -
                  2 * (re !== 0 || ve !== 0 ? re + ve : _t(g.left, g.right)))
              : (V =
                  w -
                  2 * (de !== 0 || ue !== 0 ? de + ue : _t(g.top, g.bottom)));
          }
          await m({ ...a, availableWidth: Y, availableHeight: V });
          const te = await d.getDimensions(h.floating);
          return S !== te.width || w !== te.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function lo() {
  return typeof window < 'u';
}
function Bi(n) {
  return Vv(n) ? (n.nodeName || '').toLowerCase() : '#document';
}
function Nt(n) {
  var a;
  return (
    (n == null || (a = n.ownerDocument) == null ? void 0 : a.defaultView) ||
    window
  );
}
function hn(n) {
  var a;
  return (a = (Vv(n) ? n.ownerDocument : n.document) || window.document) == null
    ? void 0
    : a.documentElement;
}
function Vv(n) {
  return lo() ? n instanceof Node || n instanceof Nt(n).Node : !1;
}
function Xt(n) {
  return lo() ? n instanceof Element || n instanceof Nt(n).Element : !1;
}
function dn(n) {
  return lo() ? n instanceof HTMLElement || n instanceof Nt(n).HTMLElement : !1;
}
function dy(n) {
  return !lo() || typeof ShadowRoot > 'u'
    ? !1
    : n instanceof ShadowRoot || n instanceof Nt(n).ShadowRoot;
}
const FR = new Set(['inline', 'contents']);
function rs(n) {
  const { overflow: a, overflowX: r, overflowY: l, display: o } = Zt(n);
  return /auto|scroll|overlay|hidden|clip/.test(a + l + r) && !FR.has(o);
}
const QR = new Set(['table', 'td', 'th']);
function YR(n) {
  return QR.has(Bi(n));
}
const KR = [':popover-open', ':modal'];
function oo(n) {
  return KR.some((a) => {
    try {
      return n.matches(a);
    } catch {
      return !1;
    }
  });
}
const XR = ['transform', 'translate', 'scale', 'rotate', 'perspective'],
  ZR = ['transform', 'translate', 'scale', 'rotate', 'perspective', 'filter'],
  $R = ['paint', 'layout', 'strict', 'content'];
function qf(n) {
  const a = Pf(),
    r = Xt(n) ? Zt(n) : n;
  return (
    XR.some((l) => (r[l] ? r[l] !== 'none' : !1)) ||
    (r.containerType ? r.containerType !== 'normal' : !1) ||
    (!a && (r.backdropFilter ? r.backdropFilter !== 'none' : !1)) ||
    (!a && (r.filter ? r.filter !== 'none' : !1)) ||
    ZR.some((l) => (r.willChange || '').includes(l)) ||
    $R.some((l) => (r.contain || '').includes(l))
  );
}
function IR(n) {
  let a = ua(n);
  for (; dn(a) && !Li(a); ) {
    if (qf(a)) return a;
    if (oo(a)) return null;
    a = ua(a);
  }
  return null;
}
function Pf() {
  return typeof CSS > 'u' || !CSS.supports
    ? !1
    : CSS.supports('-webkit-backdrop-filter', 'none');
}
const JR = new Set(['html', 'body', '#document']);
function Li(n) {
  return JR.has(Bi(n));
}
function Zt(n) {
  return Nt(n).getComputedStyle(n);
}
function uo(n) {
  return Xt(n)
    ? { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop }
    : { scrollLeft: n.scrollX, scrollTop: n.scrollY };
}
function ua(n) {
  if (Bi(n) === 'html') return n;
  const a = n.assignedSlot || n.parentNode || (dy(n) && n.host) || hn(n);
  return dy(a) ? a.host : a;
}
function Fv(n) {
  const a = ua(n);
  return Li(a)
    ? n.ownerDocument
      ? n.ownerDocument.body
      : n.body
    : dn(a) && rs(a)
      ? a
      : Fv(a);
}
function $r(n, a, r) {
  var l;
  a === void 0 && (a = []), r === void 0 && (r = !0);
  const o = Fv(n),
    c = o === ((l = n.ownerDocument) == null ? void 0 : l.body),
    d = Nt(o);
  if (c) {
    const h = xf(d);
    return a.concat(
      d,
      d.visualViewport || [],
      rs(o) ? o : [],
      h && r ? $r(h) : [],
    );
  }
  return a.concat(o, $r(o, [], r));
}
function xf(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function Qv(n) {
  const a = Zt(n);
  let r = parseFloat(a.width) || 0,
    l = parseFloat(a.height) || 0;
  const o = dn(n),
    c = o ? n.offsetWidth : r,
    d = o ? n.offsetHeight : l,
    h = Xl(r) !== c || Xl(l) !== d;
  return h && ((r = c), (l = d)), { width: r, height: l, $: h };
}
function Gf(n) {
  return Xt(n) ? n : n.contextElement;
}
function Di(n) {
  const a = Gf(n);
  if (!dn(a)) return fn(1);
  const r = a.getBoundingClientRect(),
    { width: l, height: o, $: c } = Qv(a);
  let d = (c ? Xl(r.width) : r.width) / l,
    h = (c ? Xl(r.height) : r.height) / o;
  return (
    (!d || !Number.isFinite(d)) && (d = 1),
    (!h || !Number.isFinite(h)) && (h = 1),
    { x: d, y: h }
  );
}
const WR = fn(0);
function Yv(n) {
  const a = Nt(n);
  return !Pf() || !a.visualViewport
    ? WR
    : { x: a.visualViewport.offsetLeft, y: a.visualViewport.offsetTop };
}
function eA(n, a, r) {
  return a === void 0 && (a = !1), !r || (a && r !== Nt(n)) ? !1 : a;
}
function Ua(n, a, r, l) {
  a === void 0 && (a = !1), r === void 0 && (r = !1);
  const o = n.getBoundingClientRect(),
    c = Gf(n);
  let d = fn(1);
  a && (l ? Xt(l) && (d = Di(l)) : (d = Di(n)));
  const h = eA(c, r, l) ? Yv(c) : fn(0);
  let m = (o.left + h.x) / d.x,
    p = (o.top + h.y) / d.y,
    g = o.width / d.x,
    v = o.height / d.y;
  if (c) {
    const x = Nt(c),
      O = l && Xt(l) ? Nt(l) : l;
    let S = x,
      w = xf(S);
    for (; w && l && O !== S; ) {
      const R = Di(w),
        _ = w.getBoundingClientRect(),
        q = Zt(w),
        j = _.left + (w.clientLeft + parseFloat(q.paddingLeft)) * R.x,
        k = _.top + (w.clientTop + parseFloat(q.paddingTop)) * R.y;
      (m *= R.x),
        (p *= R.y),
        (g *= R.x),
        (v *= R.y),
        (m += j),
        (p += k),
        (S = Nt(w)),
        (w = xf(S));
    }
  }
  return $l({ width: g, height: v, x: m, y: p });
}
function co(n, a) {
  const r = uo(n).scrollLeft;
  return a ? a.left + r : Ua(hn(n)).left + r;
}
function Kv(n, a) {
  const r = n.getBoundingClientRect(),
    l = r.left + a.scrollLeft - co(n, r),
    o = r.top + a.scrollTop;
  return { x: l, y: o };
}
function tA(n) {
  let { elements: a, rect: r, offsetParent: l, strategy: o } = n;
  const c = o === 'fixed',
    d = hn(l),
    h = a ? oo(a.floating) : !1;
  if (l === d || (h && c)) return r;
  let m = { scrollLeft: 0, scrollTop: 0 },
    p = fn(1);
  const g = fn(0),
    v = dn(l);
  if (
    (v || (!v && !c)) &&
    ((Bi(l) !== 'body' || rs(d)) && (m = uo(l)), dn(l))
  ) {
    const O = Ua(l);
    (p = Di(l)), (g.x = O.x + l.clientLeft), (g.y = O.y + l.clientTop);
  }
  const x = d && !v && !c ? Kv(d, m) : fn(0);
  return {
    width: r.width * p.x,
    height: r.height * p.y,
    x: r.x * p.x - m.scrollLeft * p.x + g.x + x.x,
    y: r.y * p.y - m.scrollTop * p.y + g.y + x.y,
  };
}
function nA(n) {
  return Array.from(n.getClientRects());
}
function aA(n) {
  const a = hn(n),
    r = uo(n),
    l = n.ownerDocument.body,
    o = _t(a.scrollWidth, a.clientWidth, l.scrollWidth, l.clientWidth),
    c = _t(a.scrollHeight, a.clientHeight, l.scrollHeight, l.clientHeight);
  let d = -r.scrollLeft + co(n);
  const h = -r.scrollTop;
  return (
    Zt(l).direction === 'rtl' && (d += _t(a.clientWidth, l.clientWidth) - o),
    { width: o, height: c, x: d, y: h }
  );
}
const hy = 25;
function iA(n, a) {
  const r = Nt(n),
    l = hn(n),
    o = r.visualViewport;
  let c = l.clientWidth,
    d = l.clientHeight,
    h = 0,
    m = 0;
  if (o) {
    (c = o.width), (d = o.height);
    const g = Pf();
    (!g || (g && a === 'fixed')) && ((h = o.offsetLeft), (m = o.offsetTop));
  }
  const p = co(l);
  if (p <= 0) {
    const g = l.ownerDocument,
      v = g.body,
      x = getComputedStyle(v),
      O =
        (g.compatMode === 'CSS1Compat' &&
          parseFloat(x.marginLeft) + parseFloat(x.marginRight)) ||
        0,
      S = Math.abs(l.clientWidth - v.clientWidth - O);
    S <= hy && (c -= S);
  } else p <= hy && (c += p);
  return { width: c, height: d, x: h, y: m };
}
const rA = new Set(['absolute', 'fixed']);
function sA(n, a) {
  const r = Ua(n, !0, a === 'fixed'),
    l = r.top + n.clientTop,
    o = r.left + n.clientLeft,
    c = dn(n) ? Di(n) : fn(1),
    d = n.clientWidth * c.x,
    h = n.clientHeight * c.y,
    m = o * c.x,
    p = l * c.y;
  return { width: d, height: h, x: m, y: p };
}
function py(n, a, r) {
  let l;
  if (a === 'viewport') l = iA(n, r);
  else if (a === 'document') l = aA(hn(n));
  else if (Xt(a)) l = sA(a, r);
  else {
    const o = Yv(n);
    l = { x: a.x - o.x, y: a.y - o.y, width: a.width, height: a.height };
  }
  return $l(l);
}
function Xv(n, a) {
  const r = ua(n);
  return r === a || !Xt(r) || Li(r)
    ? !1
    : Zt(r).position === 'fixed' || Xv(r, a);
}
function lA(n, a) {
  const r = a.get(n);
  if (r) return r;
  let l = $r(n, [], !1).filter((h) => Xt(h) && Bi(h) !== 'body'),
    o = null;
  const c = Zt(n).position === 'fixed';
  let d = c ? ua(n) : n;
  for (; Xt(d) && !Li(d); ) {
    const h = Zt(d),
      m = qf(d);
    !m && h.position === 'fixed' && (o = null),
      (
        c
          ? !m && !o
          : (!m && h.position === 'static' && !!o && rA.has(o.position)) ||
            (rs(d) && !m && Xv(n, d))
      )
        ? (l = l.filter((g) => g !== d))
        : (o = h),
      (d = ua(d));
  }
  return a.set(n, l), l;
}
function oA(n) {
  let { element: a, boundary: r, rootBoundary: l, strategy: o } = n;
  const d = [
      ...(r === 'clippingAncestors'
        ? oo(a)
          ? []
          : lA(a, this._c)
        : [].concat(r)),
      l,
    ],
    h = d[0],
    m = d.reduce(
      (p, g) => {
        const v = py(a, g, o);
        return (
          (p.top = _t(v.top, p.top)),
          (p.right = oa(v.right, p.right)),
          (p.bottom = oa(v.bottom, p.bottom)),
          (p.left = _t(v.left, p.left)),
          p
        );
      },
      py(a, h, o),
    );
  return {
    width: m.right - m.left,
    height: m.bottom - m.top,
    x: m.left,
    y: m.top,
  };
}
function uA(n) {
  const { width: a, height: r } = Qv(n);
  return { width: a, height: r };
}
function cA(n, a, r) {
  const l = dn(a),
    o = hn(a),
    c = r === 'fixed',
    d = Ua(n, !0, c, a);
  let h = { scrollLeft: 0, scrollTop: 0 };
  const m = fn(0);
  function p() {
    m.x = co(o);
  }
  if (l || (!l && !c))
    if (((Bi(a) !== 'body' || rs(o)) && (h = uo(a)), l)) {
      const O = Ua(a, !0, c, a);
      (m.x = O.x + a.clientLeft), (m.y = O.y + a.clientTop);
    } else o && p();
  c && !l && o && p();
  const g = o && !l && !c ? Kv(o, h) : fn(0),
    v = d.left + h.scrollLeft - m.x - g.x,
    x = d.top + h.scrollTop - m.y - g.y;
  return { x: v, y: x, width: d.width, height: d.height };
}
function Vc(n) {
  return Zt(n).position === 'static';
}
function my(n, a) {
  if (!dn(n) || Zt(n).position === 'fixed') return null;
  if (a) return a(n);
  let r = n.offsetParent;
  return hn(n) === r && (r = r.ownerDocument.body), r;
}
function Zv(n, a) {
  const r = Nt(n);
  if (oo(n)) return r;
  if (!dn(n)) {
    let o = ua(n);
    for (; o && !Li(o); ) {
      if (Xt(o) && !Vc(o)) return o;
      o = ua(o);
    }
    return r;
  }
  let l = my(n, a);
  for (; l && YR(l) && Vc(l); ) l = my(l, a);
  return l && Li(l) && Vc(l) && !qf(l) ? r : l || IR(n) || r;
}
const fA = async function (n) {
  const a = this.getOffsetParent || Zv,
    r = this.getDimensions,
    l = await r(n.floating);
  return {
    reference: cA(n.reference, await a(n.floating), n.strategy),
    floating: { x: 0, y: 0, width: l.width, height: l.height },
  };
};
function dA(n) {
  return Zt(n).direction === 'rtl';
}
const hA = {
  convertOffsetParentRelativeRectToViewportRelativeRect: tA,
  getDocumentElement: hn,
  getClippingRect: oA,
  getOffsetParent: Zv,
  getElementRects: fA,
  getClientRects: nA,
  getDimensions: uA,
  getScale: Di,
  isElement: Xt,
  isRTL: dA,
};
function $v(n, a) {
  return (
    n.x === a.x && n.y === a.y && n.width === a.width && n.height === a.height
  );
}
function pA(n, a) {
  let r = null,
    l;
  const o = hn(n);
  function c() {
    var h;
    clearTimeout(l), (h = r) == null || h.disconnect(), (r = null);
  }
  function d(h, m) {
    h === void 0 && (h = !1), m === void 0 && (m = 1), c();
    const p = n.getBoundingClientRect(),
      { left: g, top: v, width: x, height: O } = p;
    if ((h || a(), !x || !O)) return;
    const S = Ml(v),
      w = Ml(o.clientWidth - (g + x)),
      R = Ml(o.clientHeight - (v + O)),
      _ = Ml(g),
      j = {
        rootMargin: -S + 'px ' + -w + 'px ' + -R + 'px ' + -_ + 'px',
        threshold: _t(0, oa(1, m)) || 1,
      };
    let k = !0;
    function B(J) {
      const V = J[0].intersectionRatio;
      if (V !== m) {
        if (!k) return d();
        V
          ? d(!1, V)
          : (l = setTimeout(() => {
              d(!1, 1e-7);
            }, 1e3));
      }
      V === 1 && !$v(p, n.getBoundingClientRect()) && d(), (k = !1);
    }
    try {
      r = new IntersectionObserver(B, { ...j, root: o.ownerDocument });
    } catch {
      r = new IntersectionObserver(B, j);
    }
    r.observe(n);
  }
  return d(!0), c;
}
function mA(n, a, r, l) {
  l === void 0 && (l = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: c = !0,
      elementResize: d = typeof ResizeObserver == 'function',
      layoutShift: h = typeof IntersectionObserver == 'function',
      animationFrame: m = !1,
    } = l,
    p = Gf(n),
    g = o || c ? [...(p ? $r(p) : []), ...$r(a)] : [];
  g.forEach((_) => {
    o && _.addEventListener('scroll', r, { passive: !0 }),
      c && _.addEventListener('resize', r);
  });
  const v = p && h ? pA(p, r) : null;
  let x = -1,
    O = null;
  d &&
    ((O = new ResizeObserver((_) => {
      let [q] = _;
      q &&
        q.target === p &&
        O &&
        (O.unobserve(a),
        cancelAnimationFrame(x),
        (x = requestAnimationFrame(() => {
          var j;
          (j = O) == null || j.observe(a);
        }))),
        r();
    })),
    p && !m && O.observe(p),
    O.observe(a));
  let S,
    w = m ? Ua(n) : null;
  m && R();
  function R() {
    const _ = Ua(n);
    w && !$v(w, _) && r(), (w = _), (S = requestAnimationFrame(R));
  }
  return (
    r(),
    () => {
      var _;
      g.forEach((q) => {
        o && q.removeEventListener('scroll', r),
          c && q.removeEventListener('resize', r);
      }),
        v?.(),
        (_ = O) == null || _.disconnect(),
        (O = null),
        m && cancelAnimationFrame(S);
    }
  );
}
const gA = qR,
  yA = PR,
  vA = kR,
  bA = VR,
  SA = HR,
  gy = jR,
  xA = GR,
  wA = (n, a, r) => {
    const l = new Map(),
      o = { platform: hA, ...r },
      c = { ...o.platform, _c: l };
    return UR(n, a, { ...o, platform: c });
  };
var EA = typeof document < 'u',
  OA = function () {},
  Bl = EA ? E.useLayoutEffect : OA;
function Il(n, a) {
  if (n === a) return !0;
  if (typeof n != typeof a) return !1;
  if (typeof n == 'function' && n.toString() === a.toString()) return !0;
  let r, l, o;
  if (n && a && typeof n == 'object') {
    if (Array.isArray(n)) {
      if (((r = n.length), r !== a.length)) return !1;
      for (l = r; l-- !== 0; ) if (!Il(n[l], a[l])) return !1;
      return !0;
    }
    if (((o = Object.keys(n)), (r = o.length), r !== Object.keys(a).length))
      return !1;
    for (l = r; l-- !== 0; ) if (!{}.hasOwnProperty.call(a, o[l])) return !1;
    for (l = r; l-- !== 0; ) {
      const c = o[l];
      if (!(c === '_owner' && n.$$typeof) && !Il(n[c], a[c])) return !1;
    }
    return !0;
  }
  return n !== n && a !== a;
}
function Iv(n) {
  return typeof window > 'u'
    ? 1
    : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function yy(n, a) {
  const r = Iv(n);
  return Math.round(a * r) / r;
}
function Fc(n) {
  const a = E.useRef(n);
  return (
    Bl(() => {
      a.current = n;
    }),
    a
  );
}
function RA(n) {
  n === void 0 && (n = {});
  const {
      placement: a = 'bottom',
      strategy: r = 'absolute',
      middleware: l = [],
      platform: o,
      elements: { reference: c, floating: d } = {},
      transform: h = !0,
      whileElementsMounted: m,
      open: p,
    } = n,
    [g, v] = E.useState({
      x: 0,
      y: 0,
      strategy: r,
      placement: a,
      middlewareData: {},
      isPositioned: !1,
    }),
    [x, O] = E.useState(l);
  Il(x, l) || O(l);
  const [S, w] = E.useState(null),
    [R, _] = E.useState(null),
    q = E.useCallback((z) => {
      z !== J.current && ((J.current = z), w(z));
    }, []),
    j = E.useCallback((z) => {
      z !== V.current && ((V.current = z), _(z));
    }, []),
    k = c || S,
    B = d || R,
    J = E.useRef(null),
    V = E.useRef(null),
    Y = E.useRef(g),
    te = m != null,
    re = Fc(m),
    ve = Fc(o),
    de = Fc(p),
    ue = E.useCallback(() => {
      if (!J.current || !V.current) return;
      const z = { placement: a, strategy: r, middleware: x };
      ve.current && (z.platform = ve.current),
        wA(J.current, V.current, z).then((I) => {
          const T = { ...I, isPositioned: de.current !== !1 };
          se.current &&
            !Il(Y.current, T) &&
            ((Y.current = T),
            jf.flushSync(() => {
              v(T);
            }));
        });
    }, [x, a, r, ve, de]);
  Bl(() => {
    p === !1 &&
      Y.current.isPositioned &&
      ((Y.current.isPositioned = !1), v((z) => ({ ...z, isPositioned: !1 })));
  }, [p]);
  const se = E.useRef(!1);
  Bl(
    () => (
      (se.current = !0),
      () => {
        se.current = !1;
      }
    ),
    [],
  ),
    Bl(() => {
      if ((k && (J.current = k), B && (V.current = B), k && B)) {
        if (re.current) return re.current(k, B, ue);
        ue();
      }
    }, [k, B, ue, re, te]);
  const me = E.useMemo(
      () => ({ reference: J, floating: V, setReference: q, setFloating: j }),
      [q, j],
    ),
    M = E.useMemo(() => ({ reference: k, floating: B }), [k, B]),
    X = E.useMemo(() => {
      const z = { position: r, left: 0, top: 0 };
      if (!M.floating) return z;
      const I = yy(M.floating, g.x),
        T = yy(M.floating, g.y);
      return h
        ? {
            ...z,
            transform: 'translate(' + I + 'px, ' + T + 'px)',
            ...(Iv(M.floating) >= 1.5 && { willChange: 'transform' }),
          }
        : { position: r, left: I, top: T };
    }, [r, h, M.floating, g.x, g.y]);
  return E.useMemo(
    () => ({ ...g, update: ue, refs: me, elements: M, floatingStyles: X }),
    [g, ue, me, M, X],
  );
}
const AA = (n) => {
    function a(r) {
      return {}.hasOwnProperty.call(r, 'current');
    }
    return {
      name: 'arrow',
      options: n,
      fn(r) {
        const { element: l, padding: o } = typeof n == 'function' ? n(r) : n;
        return l && a(l)
          ? l.current != null
            ? gy({ element: l.current, padding: o }).fn(r)
            : {}
          : l
            ? gy({ element: l, padding: o }).fn(r)
            : {};
      },
    };
  },
  TA = (n, a) => ({ ...gA(n), options: [n, a] }),
  CA = (n, a) => ({ ...yA(n), options: [n, a] }),
  MA = (n, a) => ({ ...xA(n), options: [n, a] }),
  DA = (n, a) => ({ ...vA(n), options: [n, a] }),
  _A = (n, a) => ({ ...bA(n), options: [n, a] }),
  NA = (n, a) => ({ ...SA(n), options: [n, a] }),
  LA = (n, a) => ({ ...AA(n), options: [n, a] });
var zA = 'Arrow',
  Jv = E.forwardRef((n, a) => {
    const { children: r, width: l = 10, height: o = 5, ...c } = n;
    return F.jsx(ft.svg, {
      ...c,
      ref: a,
      width: l,
      height: o,
      viewBox: '0 0 30 10',
      preserveAspectRatio: 'none',
      children: n.asChild ? r : F.jsx('polygon', { points: '0,0 30,0 15,10' }),
    });
  });
Jv.displayName = zA;
var UA = Jv;
function jA(n) {
  const [a, r] = E.useState(void 0);
  return (
    la(() => {
      if (n) {
        r({ width: n.offsetWidth, height: n.offsetHeight });
        const l = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const c = o[0];
          let d, h;
          if ('borderBoxSize' in c) {
            const m = c.borderBoxSize,
              p = Array.isArray(m) ? m[0] : m;
            (d = p.inlineSize), (h = p.blockSize);
          } else (d = n.offsetWidth), (h = n.offsetHeight);
          r({ width: d, height: h });
        });
        return l.observe(n, { box: 'border-box' }), () => l.unobserve(n);
      } else r(void 0);
    }, [n]),
    a
  );
}
var Vf = 'Popper',
  [Wv, eb] = is(Vf),
  [kA, tb] = Wv(Vf),
  nb = (n) => {
    const { __scopePopper: a, children: r } = n,
      [l, o] = E.useState(null);
    return F.jsx(kA, { scope: a, anchor: l, onAnchorChange: o, children: r });
  };
nb.displayName = Vf;
var ab = 'PopperAnchor',
  ib = E.forwardRef((n, a) => {
    const { __scopePopper: r, virtualRef: l, ...o } = n,
      c = tb(ab, r),
      d = E.useRef(null),
      h = xt(a, d),
      m = E.useRef(null);
    return (
      E.useEffect(() => {
        const p = m.current;
        (m.current = l?.current || d.current),
          p !== m.current && c.onAnchorChange(m.current);
      }),
      l ? null : F.jsx(ft.div, { ...o, ref: h })
    );
  });
ib.displayName = ab;
var Ff = 'PopperContent',
  [HA, BA] = Wv(Ff),
  rb = E.forwardRef((n, a) => {
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
        hideWhenDetached: x = !1,
        updatePositionStrategy: O = 'optimized',
        onPlaced: S,
        ...w
      } = n,
      R = tb(Ff, r),
      [_, q] = E.useState(null),
      j = xt(a, (ce) => q(ce)),
      [k, B] = E.useState(null),
      J = jA(k),
      V = J?.width ?? 0,
      Y = J?.height ?? 0,
      te = l + (c !== 'center' ? '-' + c : ''),
      re =
        typeof g == 'number'
          ? g
          : { top: 0, right: 0, bottom: 0, left: 0, ...g },
      ve = Array.isArray(p) ? p : [p],
      de = ve.length > 0,
      ue = { padding: re, boundary: ve.filter(PA), altBoundary: de },
      {
        refs: se,
        floatingStyles: me,
        placement: M,
        isPositioned: X,
        middlewareData: z,
      } = RA({
        strategy: 'fixed',
        placement: te,
        whileElementsMounted: (...ce) =>
          mA(...ce, { animationFrame: O === 'always' }),
        elements: { reference: R.anchor },
        middleware: [
          TA({ mainAxis: o + Y, alignmentAxis: d }),
          m &&
            CA({
              mainAxis: !0,
              crossAxis: !1,
              limiter: v === 'partial' ? MA() : void 0,
              ...ue,
            }),
          m && DA({ ...ue }),
          _A({
            ...ue,
            apply: ({
              elements: ce,
              rects: Ce,
              availableWidth: ut,
              availableHeight: It,
            }) => {
              const { width: Jt, height: Wt } = Ce.reference,
                Ln = ce.floating.style;
              Ln.setProperty('--radix-popper-available-width', `${ut}px`),
                Ln.setProperty('--radix-popper-available-height', `${It}px`),
                Ln.setProperty('--radix-popper-anchor-width', `${Jt}px`),
                Ln.setProperty('--radix-popper-anchor-height', `${Wt}px`);
            },
          }),
          k && LA({ element: k, padding: h }),
          GA({ arrowWidth: V, arrowHeight: Y }),
          x && NA({ strategy: 'referenceHidden', ...ue }),
        ],
      }),
      [I, T] = ob(M),
      G = Dn(S);
    la(() => {
      X && G?.();
    }, [X, G]);
    const W = z.arrow?.x,
      $ = z.arrow?.y,
      ee = z.arrow?.centerOffset !== 0,
      [ye, oe] = E.useState();
    return (
      la(() => {
        _ && oe(window.getComputedStyle(_).zIndex);
      }, [_]),
      F.jsx('div', {
        ref: se.setFloating,
        'data-radix-popper-content-wrapper': '',
        style: {
          ...me,
          transform: X ? me.transform : 'translate(0, -200%)',
          minWidth: 'max-content',
          zIndex: ye,
          '--radix-popper-transform-origin': [
            z.transformOrigin?.x,
            z.transformOrigin?.y,
          ].join(' '),
          ...(z.hide?.referenceHidden && {
            visibility: 'hidden',
            pointerEvents: 'none',
          }),
        },
        dir: n.dir,
        children: F.jsx(HA, {
          scope: r,
          placedSide: I,
          onArrowChange: B,
          arrowX: W,
          arrowY: $,
          shouldHideArrow: ee,
          children: F.jsx(ft.div, {
            'data-side': I,
            'data-align': T,
            ...w,
            ref: j,
            style: { ...w.style, animation: X ? void 0 : 'none' },
          }),
        }),
      })
    );
  });
rb.displayName = Ff;
var sb = 'PopperArrow',
  qA = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' },
  lb = E.forwardRef(function (a, r) {
    const { __scopePopper: l, ...o } = a,
      c = BA(sb, l),
      d = qA[c.placedSide];
    return F.jsx('span', {
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
      children: F.jsx(UA, {
        ...o,
        ref: r,
        style: { ...o.style, display: 'block' },
      }),
    });
  });
lb.displayName = sb;
function PA(n) {
  return n !== null;
}
var GA = (n) => ({
  name: 'transformOrigin',
  options: n,
  fn(a) {
    const { placement: r, rects: l, middlewareData: o } = a,
      d = o.arrow?.centerOffset !== 0,
      h = d ? 0 : n.arrowWidth,
      m = d ? 0 : n.arrowHeight,
      [p, g] = ob(r),
      v = { start: '0%', center: '50%', end: '100%' }[g],
      x = (o.arrow?.x ?? 0) + h / 2,
      O = (o.arrow?.y ?? 0) + m / 2;
    let S = '',
      w = '';
    return (
      p === 'bottom'
        ? ((S = d ? v : `${x}px`), (w = `${-m}px`))
        : p === 'top'
          ? ((S = d ? v : `${x}px`), (w = `${l.floating.height + m}px`))
          : p === 'right'
            ? ((S = `${-m}px`), (w = d ? v : `${O}px`))
            : p === 'left' &&
              ((S = `${l.floating.width + m}px`), (w = d ? v : `${O}px`)),
      { data: { x: S, y: w } }
    );
  },
});
function ob(n) {
  const [a, r = 'center'] = n.split('-');
  return [a, r];
}
var VA = nb,
  FA = ib,
  QA = rb,
  YA = lb,
  KA = 'Portal',
  ub = E.forwardRef((n, a) => {
    const { container: r, ...l } = n,
      [o, c] = E.useState(!1);
    la(() => c(!0), []);
    const d = r || (o && globalThis?.document?.body);
    return d ? aR.createPortal(F.jsx(ft.div, { ...l, ref: a }), d) : null;
  });
ub.displayName = KA;
function XA(n, a) {
  return E.useReducer((r, l) => a[r][l] ?? r, n);
}
var ss = (n) => {
  const { present: a, children: r } = n,
    l = ZA(a),
    o =
      typeof r == 'function' ? r({ present: l.isPresent }) : E.Children.only(r),
    c = xt(l.ref, $A(o));
  return typeof r == 'function' || l.isPresent
    ? E.cloneElement(o, { ref: c })
    : null;
};
ss.displayName = 'Presence';
function ZA(n) {
  const [a, r] = E.useState(),
    l = E.useRef(null),
    o = E.useRef(n),
    c = E.useRef('none'),
    d = n ? 'mounted' : 'unmounted',
    [h, m] = XA(d, {
      mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
      unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
      unmounted: { MOUNT: 'mounted' },
    });
  return (
    E.useEffect(() => {
      const p = Dl(l.current);
      c.current = h === 'mounted' ? p : 'none';
    }, [h]),
    la(() => {
      const p = l.current,
        g = o.current;
      if (g !== n) {
        const x = c.current,
          O = Dl(p);
        n
          ? m('MOUNT')
          : O === 'none' || p?.display === 'none'
            ? m('UNMOUNT')
            : m(g && x !== O ? 'ANIMATION_OUT' : 'UNMOUNT'),
          (o.current = n);
      }
    }, [n, m]),
    la(() => {
      if (a) {
        let p;
        const g = a.ownerDocument.defaultView ?? window,
          v = (O) => {
            const w = Dl(l.current).includes(CSS.escape(O.animationName));
            if (O.target === a && w && (m('ANIMATION_END'), !o.current)) {
              const R = a.style.animationFillMode;
              (a.style.animationFillMode = 'forwards'),
                (p = g.setTimeout(() => {
                  a.style.animationFillMode === 'forwards' &&
                    (a.style.animationFillMode = R);
                }));
            }
          },
          x = (O) => {
            O.target === a && (c.current = Dl(l.current));
          };
        return (
          a.addEventListener('animationstart', x),
          a.addEventListener('animationcancel', v),
          a.addEventListener('animationend', v),
          () => {
            g.clearTimeout(p),
              a.removeEventListener('animationstart', x),
              a.removeEventListener('animationcancel', v),
              a.removeEventListener('animationend', v);
          }
        );
      } else m('ANIMATION_END');
    }, [a, m]),
    {
      isPresent: ['mounted', 'unmountSuspended'].includes(h),
      ref: E.useCallback((p) => {
        (l.current = p ? getComputedStyle(p) : null), r(p);
      }, []),
    }
  );
}
function Dl(n) {
  return n?.animationName || 'none';
}
function $A(n) {
  let a = Object.getOwnPropertyDescriptor(n.props, 'ref')?.get,
    r = a && 'isReactWarning' in a && a.isReactWarning;
  return r
    ? n.ref
    : ((a = Object.getOwnPropertyDescriptor(n, 'ref')?.get),
      (r = a && 'isReactWarning' in a && a.isReactWarning),
      r ? n.props.ref : n.props.ref || n.ref);
}
var Qc = 'rovingFocusGroup.onEntryFocus',
  IA = { bubbles: !1, cancelable: !0 },
  ls = 'RovingFocusGroup',
  [wf, cb, JA] = zv(ls),
  [WA, fb] = is(ls, [JA]),
  [eT, tT] = WA(ls),
  db = E.forwardRef((n, a) =>
    F.jsx(wf.Provider, {
      scope: n.__scopeRovingFocusGroup,
      children: F.jsx(wf.Slot, {
        scope: n.__scopeRovingFocusGroup,
        children: F.jsx(nT, { ...n, ref: a }),
      }),
    }),
  );
db.displayName = ls;
var nT = E.forwardRef((n, a) => {
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
      } = n,
      x = E.useRef(null),
      O = xt(a, x),
      S = Uv(c),
      [w, R] = Nv({ prop: d, defaultProp: h ?? null, onChange: m, caller: ls }),
      [_, q] = E.useState(!1),
      j = Dn(p),
      k = cb(r),
      B = E.useRef(!1),
      [J, V] = E.useState(0);
    return (
      E.useEffect(() => {
        const Y = x.current;
        if (Y)
          return Y.addEventListener(Qc, j), () => Y.removeEventListener(Qc, j);
      }, [j]),
      F.jsx(eT, {
        scope: r,
        orientation: l,
        dir: S,
        loop: o,
        currentTabStopId: w,
        onItemFocus: E.useCallback((Y) => R(Y), [R]),
        onItemShiftTab: E.useCallback(() => q(!0), []),
        onFocusableItemAdd: E.useCallback(() => V((Y) => Y + 1), []),
        onFocusableItemRemove: E.useCallback(() => V((Y) => Y - 1), []),
        children: F.jsx(ft.div, {
          tabIndex: _ || J === 0 ? -1 : 0,
          'data-orientation': l,
          ...v,
          ref: O,
          style: { outline: 'none', ...n.style },
          onMouseDown: Te(n.onMouseDown, () => {
            B.current = !0;
          }),
          onFocus: Te(n.onFocus, (Y) => {
            const te = !B.current;
            if (Y.target === Y.currentTarget && te && !_) {
              const re = new CustomEvent(Qc, IA);
              if ((Y.currentTarget.dispatchEvent(re), !re.defaultPrevented)) {
                const ve = k().filter((M) => M.focusable),
                  de = ve.find((M) => M.active),
                  ue = ve.find((M) => M.id === w),
                  me = [de, ue, ...ve]
                    .filter(Boolean)
                    .map((M) => M.ref.current);
                mb(me, g);
              }
            }
            B.current = !1;
          }),
          onBlur: Te(n.onBlur, () => q(!1)),
        }),
      })
    );
  }),
  hb = 'RovingFocusGroupItem',
  pb = E.forwardRef((n, a) => {
    const {
        __scopeRovingFocusGroup: r,
        focusable: l = !0,
        active: o = !1,
        tabStopId: c,
        children: d,
        ...h
      } = n,
      m = vf(),
      p = c || m,
      g = tT(hb, r),
      v = g.currentTabStopId === p,
      x = cb(r),
      {
        onFocusableItemAdd: O,
        onFocusableItemRemove: S,
        currentTabStopId: w,
      } = g;
    return (
      E.useEffect(() => {
        if (l) return O(), () => S();
      }, [l, O, S]),
      F.jsx(wf.ItemSlot, {
        scope: r,
        id: p,
        focusable: l,
        active: o,
        children: F.jsx(ft.span, {
          tabIndex: v ? 0 : -1,
          'data-orientation': g.orientation,
          ...h,
          ref: a,
          onMouseDown: Te(n.onMouseDown, (R) => {
            l ? g.onItemFocus(p) : R.preventDefault();
          }),
          onFocus: Te(n.onFocus, () => g.onItemFocus(p)),
          onKeyDown: Te(n.onKeyDown, (R) => {
            if (R.key === 'Tab' && R.shiftKey) {
              g.onItemShiftTab();
              return;
            }
            if (R.target !== R.currentTarget) return;
            const _ = rT(R, g.orientation, g.dir);
            if (_ !== void 0) {
              if (R.metaKey || R.ctrlKey || R.altKey || R.shiftKey) return;
              R.preventDefault();
              let j = x()
                .filter((k) => k.focusable)
                .map((k) => k.ref.current);
              if (_ === 'last') j.reverse();
              else if (_ === 'prev' || _ === 'next') {
                _ === 'prev' && j.reverse();
                const k = j.indexOf(R.currentTarget);
                j = g.loop ? sT(j, k + 1) : j.slice(k + 1);
              }
              setTimeout(() => mb(j));
            }
          }),
          children:
            typeof d == 'function'
              ? d({ isCurrentTabStop: v, hasTabStop: w != null })
              : d,
        }),
      })
    );
  });
pb.displayName = hb;
var aT = {
  ArrowLeft: 'prev',
  ArrowUp: 'prev',
  ArrowRight: 'next',
  ArrowDown: 'next',
  PageUp: 'first',
  Home: 'first',
  PageDown: 'last',
  End: 'last',
};
function iT(n, a) {
  return a !== 'rtl'
    ? n
    : n === 'ArrowLeft'
      ? 'ArrowRight'
      : n === 'ArrowRight'
        ? 'ArrowLeft'
        : n;
}
function rT(n, a, r) {
  const l = iT(n.key, r);
  if (
    !(a === 'vertical' && ['ArrowLeft', 'ArrowRight'].includes(l)) &&
    !(a === 'horizontal' && ['ArrowUp', 'ArrowDown'].includes(l))
  )
    return aT[l];
}
function mb(n, a = !1) {
  const r = document.activeElement;
  for (const l of n)
    if (
      l === r ||
      (l.focus({ preventScroll: a }), document.activeElement !== r)
    )
      return;
}
function sT(n, a) {
  return n.map((r, l) => n[(a + l) % n.length]);
}
var lT = db,
  oT = pb,
  uT = function (n) {
    if (typeof document > 'u') return null;
    var a = Array.isArray(n) ? n[0] : n;
    return a.ownerDocument.body;
  },
  Ti = new WeakMap(),
  _l = new WeakMap(),
  Nl = {},
  Yc = 0,
  gb = function (n) {
    return n && (n.host || gb(n.parentNode));
  },
  cT = function (n, a) {
    return a
      .map(function (r) {
        if (n.contains(r)) return r;
        var l = gb(r);
        return l && n.contains(l)
          ? l
          : (console.error(
              'aria-hidden',
              r,
              'in not contained inside',
              n,
              '. Doing nothing',
            ),
            null);
      })
      .filter(function (r) {
        return !!r;
      });
  },
  fT = function (n, a, r, l) {
    var o = cT(a, Array.isArray(n) ? n : [n]);
    Nl[r] || (Nl[r] = new WeakMap());
    var c = Nl[r],
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
        Array.prototype.forEach.call(v.children, function (x) {
          if (h.has(x)) g(x);
          else
            try {
              var O = x.getAttribute(l),
                S = O !== null && O !== 'false',
                w = (Ti.get(x) || 0) + 1,
                R = (c.get(x) || 0) + 1;
              Ti.set(x, w),
                c.set(x, R),
                d.push(x),
                w === 1 && S && _l.set(x, !0),
                R === 1 && x.setAttribute(r, 'true'),
                S || x.setAttribute(l, 'true');
            } catch (_) {
              console.error('aria-hidden: cannot operate on ', x, _);
            }
        });
    };
    return (
      g(a),
      h.clear(),
      Yc++,
      function () {
        d.forEach(function (v) {
          var x = Ti.get(v) - 1,
            O = c.get(v) - 1;
          Ti.set(v, x),
            c.set(v, O),
            x || (_l.has(v) || v.removeAttribute(l), _l.delete(v)),
            O || v.removeAttribute(r);
        }),
          Yc--,
          Yc ||
            ((Ti = new WeakMap()),
            (Ti = new WeakMap()),
            (_l = new WeakMap()),
            (Nl = {}));
      }
    );
  },
  dT = function (n, a, r) {
    r === void 0 && (r = 'data-aria-hidden');
    var l = Array.from(Array.isArray(n) ? n : [n]),
      o = uT(n);
    return o
      ? (l.push.apply(l, Array.from(o.querySelectorAll('[aria-live], script'))),
        fT(l, o, r, 'aria-hidden'))
      : function () {
          return null;
        };
  },
  on = function () {
    return (
      (on =
        Object.assign ||
        function (a) {
          for (var r, l = 1, o = arguments.length; l < o; l++) {
            r = arguments[l];
            for (var c in r)
              Object.prototype.hasOwnProperty.call(r, c) && (a[c] = r[c]);
          }
          return a;
        }),
      on.apply(this, arguments)
    );
  };
function yb(n, a) {
  var r = {};
  for (var l in n)
    Object.prototype.hasOwnProperty.call(n, l) &&
      a.indexOf(l) < 0 &&
      (r[l] = n[l]);
  if (n != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, l = Object.getOwnPropertySymbols(n); o < l.length; o++)
      a.indexOf(l[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(n, l[o]) &&
        (r[l[o]] = n[l[o]]);
  return r;
}
function hT(n, a, r) {
  if (r || arguments.length === 2)
    for (var l = 0, o = a.length, c; l < o; l++)
      (c || !(l in a)) &&
        (c || (c = Array.prototype.slice.call(a, 0, l)), (c[l] = a[l]));
  return n.concat(c || Array.prototype.slice.call(a));
}
var ql = 'right-scroll-bar-position',
  Pl = 'width-before-scroll-bar',
  pT = 'with-scroll-bars-hidden',
  mT = '--removed-body-scroll-bar-size';
function Kc(n, a) {
  return typeof n == 'function' ? n(a) : n && (n.current = a), n;
}
function gT(n, a) {
  var r = E.useState(function () {
    return {
      value: n,
      callback: a,
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
  return (r.callback = a), r.facade;
}
var yT = typeof window < 'u' ? E.useLayoutEffect : E.useEffect,
  vy = new WeakMap();
function vT(n, a) {
  var r = gT(null, function (l) {
    return n.forEach(function (o) {
      return Kc(o, l);
    });
  });
  return (
    yT(
      function () {
        var l = vy.get(r);
        if (l) {
          var o = new Set(l),
            c = new Set(n),
            d = r.current;
          o.forEach(function (h) {
            c.has(h) || Kc(h, null);
          }),
            c.forEach(function (h) {
              o.has(h) || Kc(h, d);
            });
        }
        vy.set(r, n);
      },
      [n],
    ),
    r
  );
}
function bT(n) {
  return n;
}
function ST(n, a) {
  a === void 0 && (a = bT);
  var r = [],
    l = !1,
    o = {
      read: function () {
        if (l)
          throw new Error(
            'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.',
          );
        return r.length ? r[r.length - 1] : n;
      },
      useMedium: function (c) {
        var d = a(c, l);
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
function xT(n) {
  n === void 0 && (n = {});
  var a = ST(null);
  return (a.options = on({ async: !0, ssr: !1 }, n)), a;
}
var vb = function (n) {
  var a = n.sideCar,
    r = yb(n, ['sideCar']);
  if (!a)
    throw new Error(
      'Sidecar: please provide `sideCar` property to import the right car',
    );
  var l = a.read();
  if (!l) throw new Error('Sidecar medium not found');
  return E.createElement(l, on({}, r));
};
vb.isSideCarExport = !0;
function wT(n, a) {
  return n.useMedium(a), vb;
}
var bb = xT(),
  Xc = function () {},
  fo = E.forwardRef(function (n, a) {
    var r = E.useRef(null),
      l = E.useState({
        onScrollCapture: Xc,
        onWheelCapture: Xc,
        onTouchMoveCapture: Xc,
      }),
      o = l[0],
      c = l[1],
      d = n.forwardProps,
      h = n.children,
      m = n.className,
      p = n.removeScrollBar,
      g = n.enabled,
      v = n.shards,
      x = n.sideCar,
      O = n.noRelative,
      S = n.noIsolation,
      w = n.inert,
      R = n.allowPinchZoom,
      _ = n.as,
      q = _ === void 0 ? 'div' : _,
      j = n.gapMode,
      k = yb(n, [
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
      B = x,
      J = vT([r, a]),
      V = on(on({}, k), o);
    return E.createElement(
      E.Fragment,
      null,
      g &&
        E.createElement(B, {
          sideCar: bb,
          removeScrollBar: p,
          shards: v,
          noRelative: O,
          noIsolation: S,
          inert: w,
          setCallbacks: c,
          allowPinchZoom: !!R,
          lockRef: r,
          gapMode: j,
        }),
      d
        ? E.cloneElement(E.Children.only(h), on(on({}, V), { ref: J }))
        : E.createElement(q, on({}, V, { className: m, ref: J }), h),
    );
  });
fo.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
fo.classNames = { fullWidth: Pl, zeroRight: ql };
var ET = function () {
  if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__;
};
function OT() {
  if (!document) return null;
  var n = document.createElement('style');
  n.type = 'text/css';
  var a = ET();
  return a && n.setAttribute('nonce', a), n;
}
function RT(n, a) {
  n.styleSheet
    ? (n.styleSheet.cssText = a)
    : n.appendChild(document.createTextNode(a));
}
function AT(n) {
  var a = document.head || document.getElementsByTagName('head')[0];
  a.appendChild(n);
}
var TT = function () {
    var n = 0,
      a = null;
    return {
      add: function (r) {
        n == 0 && (a = OT()) && (RT(a, r), AT(a)), n++;
      },
      remove: function () {
        n--,
          !n && a && (a.parentNode && a.parentNode.removeChild(a), (a = null));
      },
    };
  },
  CT = function () {
    var n = TT();
    return function (a, r) {
      E.useEffect(
        function () {
          return (
            n.add(a),
            function () {
              n.remove();
            }
          );
        },
        [a && r],
      );
    };
  },
  Sb = function () {
    var n = CT(),
      a = function (r) {
        var l = r.styles,
          o = r.dynamic;
        return n(l, o), null;
      };
    return a;
  },
  MT = { left: 0, top: 0, right: 0, gap: 0 },
  Zc = function (n) {
    return parseInt(n || '', 10) || 0;
  },
  DT = function (n) {
    var a = window.getComputedStyle(document.body),
      r = a[n === 'padding' ? 'paddingLeft' : 'marginLeft'],
      l = a[n === 'padding' ? 'paddingTop' : 'marginTop'],
      o = a[n === 'padding' ? 'paddingRight' : 'marginRight'];
    return [Zc(r), Zc(l), Zc(o)];
  },
  _T = function (n) {
    if ((n === void 0 && (n = 'margin'), typeof window > 'u')) return MT;
    var a = DT(n),
      r = document.documentElement.clientWidth,
      l = window.innerWidth;
    return {
      left: a[0],
      top: a[1],
      right: a[2],
      gap: Math.max(0, l - r + a[2] - a[0]),
    };
  },
  NT = Sb(),
  _i = 'data-scroll-locked',
  LT = function (n, a, r, l) {
    var o = n.left,
      c = n.top,
      d = n.right,
      h = n.gap;
    return (
      r === void 0 && (r = 'margin'),
      `
  .`
        .concat(
          pT,
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
          _i,
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
            a && 'position: relative '.concat(l, ';'),
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
          ql,
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
          Pl,
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
        .concat(ql, ' .')
        .concat(
          ql,
          ` {
    right: 0 `,
        )
        .concat(
          l,
          `;
  }
  
  .`,
        )
        .concat(Pl, ' .')
        .concat(
          Pl,
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
          _i,
          `] {
    `,
        )
        .concat(mT, ': ')
        .concat(
          h,
          `px;
  }
`,
        )
    );
  },
  by = function () {
    var n = parseInt(document.body.getAttribute(_i) || '0', 10);
    return isFinite(n) ? n : 0;
  },
  zT = function () {
    E.useEffect(function () {
      return (
        document.body.setAttribute(_i, (by() + 1).toString()),
        function () {
          var n = by() - 1;
          n <= 0
            ? document.body.removeAttribute(_i)
            : document.body.setAttribute(_i, n.toString());
        }
      );
    }, []);
  },
  UT = function (n) {
    var a = n.noRelative,
      r = n.noImportant,
      l = n.gapMode,
      o = l === void 0 ? 'margin' : l;
    zT();
    var c = E.useMemo(
      function () {
        return _T(o);
      },
      [o],
    );
    return E.createElement(NT, { styles: LT(c, !a, o, r ? '' : '!important') });
  },
  Ef = !1;
if (typeof window < 'u')
  try {
    var Ll = Object.defineProperty({}, 'passive', {
      get: function () {
        return (Ef = !0), !0;
      },
    });
    window.addEventListener('test', Ll, Ll),
      window.removeEventListener('test', Ll, Ll);
  } catch {
    Ef = !1;
  }
var Ci = Ef ? { passive: !1 } : !1,
  jT = function (n) {
    return n.tagName === 'TEXTAREA';
  },
  xb = function (n, a) {
    if (!(n instanceof Element)) return !1;
    var r = window.getComputedStyle(n);
    return (
      r[a] !== 'hidden' &&
      !(r.overflowY === r.overflowX && !jT(n) && r[a] === 'visible')
    );
  },
  kT = function (n) {
    return xb(n, 'overflowY');
  },
  HT = function (n) {
    return xb(n, 'overflowX');
  },
  Sy = function (n, a) {
    var r = a.ownerDocument,
      l = a;
    do {
      typeof ShadowRoot < 'u' && l instanceof ShadowRoot && (l = l.host);
      var o = wb(n, l);
      if (o) {
        var c = Eb(n, l),
          d = c[1],
          h = c[2];
        if (d > h) return !0;
      }
      l = l.parentNode;
    } while (l && l !== r.body);
    return !1;
  },
  BT = function (n) {
    var a = n.scrollTop,
      r = n.scrollHeight,
      l = n.clientHeight;
    return [a, r, l];
  },
  qT = function (n) {
    var a = n.scrollLeft,
      r = n.scrollWidth,
      l = n.clientWidth;
    return [a, r, l];
  },
  wb = function (n, a) {
    return n === 'v' ? kT(a) : HT(a);
  },
  Eb = function (n, a) {
    return n === 'v' ? BT(a) : qT(a);
  },
  PT = function (n, a) {
    return n === 'h' && a === 'rtl' ? -1 : 1;
  },
  GT = function (n, a, r, l, o) {
    var c = PT(n, window.getComputedStyle(a).direction),
      d = c * l,
      h = r.target,
      m = a.contains(h),
      p = !1,
      g = d > 0,
      v = 0,
      x = 0;
    do {
      if (!h) break;
      var O = Eb(n, h),
        S = O[0],
        w = O[1],
        R = O[2],
        _ = w - R - c * S;
      (S || _) && wb(n, h) && ((v += _), (x += S));
      var q = h.parentNode;
      h = q && q.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? q.host : q;
    } while ((!m && h !== document.body) || (m && (a.contains(h) || a === h)));
    return ((g && Math.abs(v) < 1) || (!g && Math.abs(x) < 1)) && (p = !0), p;
  },
  zl = function (n) {
    return 'changedTouches' in n
      ? [n.changedTouches[0].clientX, n.changedTouches[0].clientY]
      : [0, 0];
  },
  xy = function (n) {
    return [n.deltaX, n.deltaY];
  },
  wy = function (n) {
    return n && 'current' in n ? n.current : n;
  },
  VT = function (n, a) {
    return n[0] === a[0] && n[1] === a[1];
  },
  FT = function (n) {
    return `
  .block-interactivity-`
      .concat(
        n,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        n,
        ` {pointer-events: all;}
`,
      );
  },
  QT = 0,
  Mi = [];
function YT(n) {
  var a = E.useRef([]),
    r = E.useRef([0, 0]),
    l = E.useRef(),
    o = E.useState(QT++)[0],
    c = E.useState(Sb)[0],
    d = E.useRef(n);
  E.useEffect(
    function () {
      d.current = n;
    },
    [n],
  ),
    E.useEffect(
      function () {
        if (n.inert) {
          document.body.classList.add('block-interactivity-'.concat(o));
          var w = hT([n.lockRef.current], (n.shards || []).map(wy), !0).filter(
            Boolean,
          );
          return (
            w.forEach(function (R) {
              return R.classList.add('allow-interactivity-'.concat(o));
            }),
            function () {
              document.body.classList.remove('block-interactivity-'.concat(o)),
                w.forEach(function (R) {
                  return R.classList.remove('allow-interactivity-'.concat(o));
                });
            }
          );
        }
      },
      [n.inert, n.lockRef.current, n.shards],
    );
  var h = E.useCallback(function (w, R) {
      if (
        ('touches' in w && w.touches.length === 2) ||
        (w.type === 'wheel' && w.ctrlKey)
      )
        return !d.current.allowPinchZoom;
      var _ = zl(w),
        q = r.current,
        j = 'deltaX' in w ? w.deltaX : q[0] - _[0],
        k = 'deltaY' in w ? w.deltaY : q[1] - _[1],
        B,
        J = w.target,
        V = Math.abs(j) > Math.abs(k) ? 'h' : 'v';
      if ('touches' in w && V === 'h' && J.type === 'range') return !1;
      var Y = Sy(V, J);
      if (!Y) return !0;
      if ((Y ? (B = V) : ((B = V === 'v' ? 'h' : 'v'), (Y = Sy(V, J))), !Y))
        return !1;
      if (
        (!l.current && 'changedTouches' in w && (j || k) && (l.current = B), !B)
      )
        return !0;
      var te = l.current || B;
      return GT(te, R, w, te === 'h' ? j : k);
    }, []),
    m = E.useCallback(function (w) {
      var R = w;
      if (!(!Mi.length || Mi[Mi.length - 1] !== c)) {
        var _ = 'deltaY' in R ? xy(R) : zl(R),
          q = a.current.filter(function (B) {
            return (
              B.name === R.type &&
              (B.target === R.target || R.target === B.shadowParent) &&
              VT(B.delta, _)
            );
          })[0];
        if (q && q.should) {
          R.cancelable && R.preventDefault();
          return;
        }
        if (!q) {
          var j = (d.current.shards || [])
              .map(wy)
              .filter(Boolean)
              .filter(function (B) {
                return B.contains(R.target);
              }),
            k = j.length > 0 ? h(R, j[0]) : !d.current.noIsolation;
          k && R.cancelable && R.preventDefault();
        }
      }
    }, []),
    p = E.useCallback(function (w, R, _, q) {
      var j = { name: w, delta: R, target: _, should: q, shadowParent: KT(_) };
      a.current.push(j),
        setTimeout(function () {
          a.current = a.current.filter(function (k) {
            return k !== j;
          });
        }, 1);
    }, []),
    g = E.useCallback(function (w) {
      (r.current = zl(w)), (l.current = void 0);
    }, []),
    v = E.useCallback(function (w) {
      p(w.type, xy(w), w.target, h(w, n.lockRef.current));
    }, []),
    x = E.useCallback(function (w) {
      p(w.type, zl(w), w.target, h(w, n.lockRef.current));
    }, []);
  E.useEffect(function () {
    return (
      Mi.push(c),
      n.setCallbacks({
        onScrollCapture: v,
        onWheelCapture: v,
        onTouchMoveCapture: x,
      }),
      document.addEventListener('wheel', m, Ci),
      document.addEventListener('touchmove', m, Ci),
      document.addEventListener('touchstart', g, Ci),
      function () {
        (Mi = Mi.filter(function (w) {
          return w !== c;
        })),
          document.removeEventListener('wheel', m, Ci),
          document.removeEventListener('touchmove', m, Ci),
          document.removeEventListener('touchstart', g, Ci);
      }
    );
  }, []);
  var O = n.removeScrollBar,
    S = n.inert;
  return E.createElement(
    E.Fragment,
    null,
    S ? E.createElement(c, { styles: FT(o) }) : null,
    O
      ? E.createElement(UT, { noRelative: n.noRelative, gapMode: n.gapMode })
      : null,
  );
}
function KT(n) {
  for (var a = null; n !== null; )
    n instanceof ShadowRoot && ((a = n.host), (n = n.host)), (n = n.parentNode);
  return a;
}
const XT = wT(bb, YT);
var Ob = E.forwardRef(function (n, a) {
  return E.createElement(fo, on({}, n, { ref: a, sideCar: XT }));
});
Ob.classNames = fo.classNames;
var Of = ['Enter', ' '],
  ZT = ['ArrowDown', 'PageUp', 'Home'],
  Rb = ['ArrowUp', 'PageDown', 'End'],
  $T = [...ZT, ...Rb],
  IT = { ltr: [...Of, 'ArrowRight'], rtl: [...Of, 'ArrowLeft'] },
  JT = { ltr: ['ArrowLeft'], rtl: ['ArrowRight'] },
  os = 'Menu',
  [Ir, WT, eC] = zv(os),
  [ja, Ab] = is(os, [eC, eb, fb]),
  ho = eb(),
  Tb = fb(),
  [tC, ka] = ja(os),
  [nC, us] = ja(os),
  Cb = (n) => {
    const {
        __scopeMenu: a,
        open: r = !1,
        children: l,
        dir: o,
        onOpenChange: c,
        modal: d = !0,
      } = n,
      h = ho(a),
      [m, p] = E.useState(null),
      g = E.useRef(!1),
      v = Dn(c),
      x = Uv(o);
    return (
      E.useEffect(() => {
        const O = () => {
            (g.current = !0),
              document.addEventListener('pointerdown', S, {
                capture: !0,
                once: !0,
              }),
              document.addEventListener('pointermove', S, {
                capture: !0,
                once: !0,
              });
          },
          S = () => (g.current = !1);
        return (
          document.addEventListener('keydown', O, { capture: !0 }),
          () => {
            document.removeEventListener('keydown', O, { capture: !0 }),
              document.removeEventListener('pointerdown', S, { capture: !0 }),
              document.removeEventListener('pointermove', S, { capture: !0 });
          }
        );
      }, []),
      F.jsx(VA, {
        ...h,
        children: F.jsx(tC, {
          scope: a,
          open: r,
          onOpenChange: v,
          content: m,
          onContentChange: p,
          children: F.jsx(nC, {
            scope: a,
            onClose: E.useCallback(() => v(!1), [v]),
            isUsingKeyboardRef: g,
            dir: x,
            modal: d,
            children: l,
          }),
        }),
      })
    );
  };
Cb.displayName = os;
var aC = 'MenuAnchor',
  Qf = E.forwardRef((n, a) => {
    const { __scopeMenu: r, ...l } = n,
      o = ho(r);
    return F.jsx(FA, { ...o, ...l, ref: a });
  });
Qf.displayName = aC;
var Yf = 'MenuPortal',
  [iC, Mb] = ja(Yf, { forceMount: void 0 }),
  Db = (n) => {
    const { __scopeMenu: a, forceMount: r, children: l, container: o } = n,
      c = ka(Yf, a);
    return F.jsx(iC, {
      scope: a,
      forceMount: r,
      children: F.jsx(ss, {
        present: r || c.open,
        children: F.jsx(ub, { asChild: !0, container: o, children: l }),
      }),
    });
  };
Db.displayName = Yf;
var Ft = 'MenuContent',
  [rC, Kf] = ja(Ft),
  _b = E.forwardRef((n, a) => {
    const r = Mb(Ft, n.__scopeMenu),
      { forceMount: l = r.forceMount, ...o } = n,
      c = ka(Ft, n.__scopeMenu),
      d = us(Ft, n.__scopeMenu);
    return F.jsx(Ir.Provider, {
      scope: n.__scopeMenu,
      children: F.jsx(ss, {
        present: l || c.open,
        children: F.jsx(Ir.Slot, {
          scope: n.__scopeMenu,
          children: d.modal
            ? F.jsx(sC, { ...o, ref: a })
            : F.jsx(lC, { ...o, ref: a }),
        }),
      }),
    });
  }),
  sC = E.forwardRef((n, a) => {
    const r = ka(Ft, n.__scopeMenu),
      l = E.useRef(null),
      o = xt(a, l);
    return (
      E.useEffect(() => {
        const c = l.current;
        if (c) return dT(c);
      }, []),
      F.jsx(Xf, {
        ...n,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: r.open,
        disableOutsideScroll: !0,
        onFocusOutside: Te(n.onFocusOutside, (c) => c.preventDefault(), {
          checkForDefaultPrevented: !1,
        }),
        onDismiss: () => r.onOpenChange(!1),
      })
    );
  }),
  lC = E.forwardRef((n, a) => {
    const r = ka(Ft, n.__scopeMenu);
    return F.jsx(Xf, {
      ...n,
      ref: a,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => r.onOpenChange(!1),
    });
  }),
  oC = Xr('MenuContent.ScrollLock'),
  Xf = E.forwardRef((n, a) => {
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
        onInteractOutside: x,
        onDismiss: O,
        disableOutsideScroll: S,
        ...w
      } = n,
      R = ka(Ft, r),
      _ = us(Ft, r),
      q = ho(r),
      j = Tb(r),
      k = WT(r),
      [B, J] = E.useState(null),
      V = E.useRef(null),
      Y = xt(a, V, R.onContentChange),
      te = E.useRef(0),
      re = E.useRef(''),
      ve = E.useRef(0),
      de = E.useRef(null),
      ue = E.useRef('right'),
      se = E.useRef(0),
      me = S ? Ob : E.Fragment,
      M = S ? { as: oC, allowPinchZoom: !0 } : void 0,
      X = (I) => {
        const T = re.current + I,
          G = k().filter((ce) => !ce.disabled),
          W = document.activeElement,
          $ = G.find((ce) => ce.ref.current === W)?.textValue,
          ee = G.map((ce) => ce.textValue),
          ye = SC(ee, T, $),
          oe = G.find((ce) => ce.textValue === ye)?.ref.current;
        (function ce(Ce) {
          (re.current = Ce),
            window.clearTimeout(te.current),
            Ce !== '' && (te.current = window.setTimeout(() => ce(''), 1e3));
        })(T),
          oe && setTimeout(() => oe.focus());
      };
    E.useEffect(() => () => window.clearTimeout(te.current), []), pR();
    const z = E.useCallback(
      (I) => ue.current === de.current?.side && wC(I, de.current?.area),
      [],
    );
    return F.jsx(rC, {
      scope: r,
      searchRef: re,
      onItemEnter: E.useCallback(
        (I) => {
          z(I) && I.preventDefault();
        },
        [z],
      ),
      onItemLeave: E.useCallback(
        (I) => {
          z(I) || (V.current?.focus(), J(null));
        },
        [z],
      ),
      onTriggerLeave: E.useCallback(
        (I) => {
          z(I) && I.preventDefault();
        },
        [z],
      ),
      pointerGraceTimerRef: ve,
      onPointerGraceIntentChange: E.useCallback((I) => {
        de.current = I;
      }, []),
      children: F.jsx(me, {
        ...M,
        children: F.jsx(Bv, {
          asChild: !0,
          trapped: o,
          onMountAutoFocus: Te(c, (I) => {
            I.preventDefault(), V.current?.focus({ preventScroll: !0 });
          }),
          onUnmountAutoFocus: d,
          children: F.jsx(kv, {
            asChild: !0,
            disableOutsidePointerEvents: h,
            onEscapeKeyDown: p,
            onPointerDownOutside: g,
            onFocusOutside: v,
            onInteractOutside: x,
            onDismiss: O,
            children: F.jsx(lT, {
              asChild: !0,
              ...j,
              dir: _.dir,
              orientation: 'vertical',
              loop: l,
              currentTabStopId: B,
              onCurrentTabStopIdChange: J,
              onEntryFocus: Te(m, (I) => {
                _.isUsingKeyboardRef.current || I.preventDefault();
              }),
              preventScrollOnEntryFocus: !0,
              children: F.jsx(QA, {
                role: 'menu',
                'aria-orientation': 'vertical',
                'data-state': Kb(R.open),
                'data-radix-menu-content': '',
                dir: _.dir,
                ...q,
                ...w,
                ref: Y,
                style: { outline: 'none', ...w.style },
                onKeyDown: Te(w.onKeyDown, (I) => {
                  const G =
                      I.target.closest('[data-radix-menu-content]') ===
                      I.currentTarget,
                    W = I.ctrlKey || I.altKey || I.metaKey,
                    $ = I.key.length === 1;
                  G &&
                    (I.key === 'Tab' && I.preventDefault(),
                    !W && $ && X(I.key));
                  const ee = V.current;
                  if (I.target !== ee || !$T.includes(I.key)) return;
                  I.preventDefault();
                  const oe = k()
                    .filter((ce) => !ce.disabled)
                    .map((ce) => ce.ref.current);
                  Rb.includes(I.key) && oe.reverse(), vC(oe);
                }),
                onBlur: Te(n.onBlur, (I) => {
                  I.currentTarget.contains(I.target) ||
                    (window.clearTimeout(te.current), (re.current = ''));
                }),
                onPointerMove: Te(
                  n.onPointerMove,
                  Jr((I) => {
                    const T = I.target,
                      G = se.current !== I.clientX;
                    if (I.currentTarget.contains(T) && G) {
                      const W = I.clientX > se.current ? 'right' : 'left';
                      (ue.current = W), (se.current = I.clientX);
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
_b.displayName = Ft;
var uC = 'MenuGroup',
  Zf = E.forwardRef((n, a) => {
    const { __scopeMenu: r, ...l } = n;
    return F.jsx(ft.div, { role: 'group', ...l, ref: a });
  });
Zf.displayName = uC;
var cC = 'MenuLabel',
  Nb = E.forwardRef((n, a) => {
    const { __scopeMenu: r, ...l } = n;
    return F.jsx(ft.div, { ...l, ref: a });
  });
Nb.displayName = cC;
var Jl = 'MenuItem',
  Ey = 'menu.itemSelect',
  po = E.forwardRef((n, a) => {
    const { disabled: r = !1, onSelect: l, ...o } = n,
      c = E.useRef(null),
      d = us(Jl, n.__scopeMenu),
      h = Kf(Jl, n.__scopeMenu),
      m = xt(a, c),
      p = E.useRef(!1),
      g = () => {
        const v = c.current;
        if (!r && v) {
          const x = new CustomEvent(Ey, { bubbles: !0, cancelable: !0 });
          v.addEventListener(Ey, (O) => l?.(O), { once: !0 }),
            Lv(v, x),
            x.defaultPrevented ? (p.current = !1) : d.onClose();
        }
      };
    return F.jsx(Lb, {
      ...o,
      ref: m,
      disabled: r,
      onClick: Te(n.onClick, g),
      onPointerDown: (v) => {
        n.onPointerDown?.(v), (p.current = !0);
      },
      onPointerUp: Te(n.onPointerUp, (v) => {
        p.current || v.currentTarget?.click();
      }),
      onKeyDown: Te(n.onKeyDown, (v) => {
        const x = h.searchRef.current !== '';
        r ||
          (x && v.key === ' ') ||
          (Of.includes(v.key) && (v.currentTarget.click(), v.preventDefault()));
      }),
    });
  });
po.displayName = Jl;
var Lb = E.forwardRef((n, a) => {
    const { __scopeMenu: r, disabled: l = !1, textValue: o, ...c } = n,
      d = Kf(Jl, r),
      h = Tb(r),
      m = E.useRef(null),
      p = xt(a, m),
      [g, v] = E.useState(!1),
      [x, O] = E.useState('');
    return (
      E.useEffect(() => {
        const S = m.current;
        S && O((S.textContent ?? '').trim());
      }, [c.children]),
      F.jsx(Ir.ItemSlot, {
        scope: r,
        disabled: l,
        textValue: o ?? x,
        children: F.jsx(oT, {
          asChild: !0,
          ...h,
          focusable: !l,
          children: F.jsx(ft.div, {
            role: 'menuitem',
            'data-highlighted': g ? '' : void 0,
            'aria-disabled': l || void 0,
            'data-disabled': l ? '' : void 0,
            ...c,
            ref: p,
            onPointerMove: Te(
              n.onPointerMove,
              Jr((S) => {
                l
                  ? d.onItemLeave(S)
                  : (d.onItemEnter(S),
                    S.defaultPrevented ||
                      S.currentTarget.focus({ preventScroll: !0 }));
              }),
            ),
            onPointerLeave: Te(
              n.onPointerLeave,
              Jr((S) => d.onItemLeave(S)),
            ),
            onFocus: Te(n.onFocus, () => v(!0)),
            onBlur: Te(n.onBlur, () => v(!1)),
          }),
        }),
      })
    );
  }),
  fC = 'MenuCheckboxItem',
  zb = E.forwardRef((n, a) => {
    const { checked: r = !1, onCheckedChange: l, ...o } = n;
    return F.jsx(Bb, {
      scope: n.__scopeMenu,
      checked: r,
      children: F.jsx(po, {
        role: 'menuitemcheckbox',
        'aria-checked': Wl(r) ? 'mixed' : r,
        ...o,
        ref: a,
        'data-state': If(r),
        onSelect: Te(o.onSelect, () => l?.(Wl(r) ? !0 : !r), {
          checkForDefaultPrevented: !1,
        }),
      }),
    });
  });
zb.displayName = fC;
var Ub = 'MenuRadioGroup',
  [dC, hC] = ja(Ub, { value: void 0, onValueChange: () => {} }),
  jb = E.forwardRef((n, a) => {
    const { value: r, onValueChange: l, ...o } = n,
      c = Dn(l);
    return F.jsx(dC, {
      scope: n.__scopeMenu,
      value: r,
      onValueChange: c,
      children: F.jsx(Zf, { ...o, ref: a }),
    });
  });
jb.displayName = Ub;
var kb = 'MenuRadioItem',
  Hb = E.forwardRef((n, a) => {
    const { value: r, ...l } = n,
      o = hC(kb, n.__scopeMenu),
      c = r === o.value;
    return F.jsx(Bb, {
      scope: n.__scopeMenu,
      checked: c,
      children: F.jsx(po, {
        role: 'menuitemradio',
        'aria-checked': c,
        ...l,
        ref: a,
        'data-state': If(c),
        onSelect: Te(l.onSelect, () => o.onValueChange?.(r), {
          checkForDefaultPrevented: !1,
        }),
      }),
    });
  });
Hb.displayName = kb;
var $f = 'MenuItemIndicator',
  [Bb, pC] = ja($f, { checked: !1 }),
  qb = E.forwardRef((n, a) => {
    const { __scopeMenu: r, forceMount: l, ...o } = n,
      c = pC($f, r);
    return F.jsx(ss, {
      present: l || Wl(c.checked) || c.checked === !0,
      children: F.jsx(ft.span, { ...o, ref: a, 'data-state': If(c.checked) }),
    });
  });
qb.displayName = $f;
var mC = 'MenuSeparator',
  Pb = E.forwardRef((n, a) => {
    const { __scopeMenu: r, ...l } = n;
    return F.jsx(ft.div, {
      role: 'separator',
      'aria-orientation': 'horizontal',
      ...l,
      ref: a,
    });
  });
Pb.displayName = mC;
var gC = 'MenuArrow',
  Gb = E.forwardRef((n, a) => {
    const { __scopeMenu: r, ...l } = n,
      o = ho(r);
    return F.jsx(YA, { ...o, ...l, ref: a });
  });
Gb.displayName = gC;
var yC = 'MenuSub',
  [$M, Vb] = ja(yC),
  Gr = 'MenuSubTrigger',
  Fb = E.forwardRef((n, a) => {
    const r = ka(Gr, n.__scopeMenu),
      l = us(Gr, n.__scopeMenu),
      o = Vb(Gr, n.__scopeMenu),
      c = Kf(Gr, n.__scopeMenu),
      d = E.useRef(null),
      { pointerGraceTimerRef: h, onPointerGraceIntentChange: m } = c,
      p = { __scopeMenu: n.__scopeMenu },
      g = E.useCallback(() => {
        d.current && window.clearTimeout(d.current), (d.current = null);
      }, []);
    return (
      E.useEffect(() => g, [g]),
      E.useEffect(() => {
        const v = h.current;
        return () => {
          window.clearTimeout(v), m(null);
        };
      }, [h, m]),
      F.jsx(Qf, {
        asChild: !0,
        ...p,
        children: F.jsx(Lb, {
          id: o.triggerId,
          'aria-haspopup': 'menu',
          'aria-expanded': r.open,
          'aria-controls': o.contentId,
          'data-state': Kb(r.open),
          ...n,
          ref: so(a, o.onTriggerChange),
          onClick: (v) => {
            n.onClick?.(v),
              !(n.disabled || v.defaultPrevented) &&
                (v.currentTarget.focus(), r.open || r.onOpenChange(!0));
          },
          onPointerMove: Te(
            n.onPointerMove,
            Jr((v) => {
              c.onItemEnter(v),
                !v.defaultPrevented &&
                  !n.disabled &&
                  !r.open &&
                  !d.current &&
                  (c.onPointerGraceIntentChange(null),
                  (d.current = window.setTimeout(() => {
                    r.onOpenChange(!0), g();
                  }, 100)));
            }),
          ),
          onPointerLeave: Te(
            n.onPointerLeave,
            Jr((v) => {
              g();
              const x = r.content?.getBoundingClientRect();
              if (x) {
                const O = r.content?.dataset.side,
                  S = O === 'right',
                  w = S ? -5 : 5,
                  R = x[S ? 'left' : 'right'],
                  _ = x[S ? 'right' : 'left'];
                c.onPointerGraceIntentChange({
                  area: [
                    { x: v.clientX + w, y: v.clientY },
                    { x: R, y: x.top },
                    { x: _, y: x.top },
                    { x: _, y: x.bottom },
                    { x: R, y: x.bottom },
                  ],
                  side: O,
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
          onKeyDown: Te(n.onKeyDown, (v) => {
            const x = c.searchRef.current !== '';
            n.disabled ||
              (x && v.key === ' ') ||
              (IT[l.dir].includes(v.key) &&
                (r.onOpenChange(!0), r.content?.focus(), v.preventDefault()));
          }),
        }),
      })
    );
  });
Fb.displayName = Gr;
var Qb = 'MenuSubContent',
  Yb = E.forwardRef((n, a) => {
    const r = Mb(Ft, n.__scopeMenu),
      { forceMount: l = r.forceMount, ...o } = n,
      c = ka(Ft, n.__scopeMenu),
      d = us(Ft, n.__scopeMenu),
      h = Vb(Qb, n.__scopeMenu),
      m = E.useRef(null),
      p = xt(a, m);
    return F.jsx(Ir.Provider, {
      scope: n.__scopeMenu,
      children: F.jsx(ss, {
        present: l || c.open,
        children: F.jsx(Ir.Slot, {
          scope: n.__scopeMenu,
          children: F.jsx(Xf, {
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
              d.isUsingKeyboardRef.current && m.current?.focus(),
                g.preventDefault();
            },
            onCloseAutoFocus: (g) => g.preventDefault(),
            onFocusOutside: Te(n.onFocusOutside, (g) => {
              g.target !== h.trigger && c.onOpenChange(!1);
            }),
            onEscapeKeyDown: Te(n.onEscapeKeyDown, (g) => {
              d.onClose(), g.preventDefault();
            }),
            onKeyDown: Te(n.onKeyDown, (g) => {
              const v = g.currentTarget.contains(g.target),
                x = JT[d.dir].includes(g.key);
              v &&
                x &&
                (c.onOpenChange(!1), h.trigger?.focus(), g.preventDefault());
            }),
          }),
        }),
      }),
    });
  });
Yb.displayName = Qb;
function Kb(n) {
  return n ? 'open' : 'closed';
}
function Wl(n) {
  return n === 'indeterminate';
}
function If(n) {
  return Wl(n) ? 'indeterminate' : n ? 'checked' : 'unchecked';
}
function vC(n) {
  const a = document.activeElement;
  for (const r of n)
    if (r === a || (r.focus(), document.activeElement !== a)) return;
}
function bC(n, a) {
  return n.map((r, l) => n[(a + l) % n.length]);
}
function SC(n, a, r) {
  const o = a.length > 1 && Array.from(a).every((p) => p === a[0]) ? a[0] : a,
    c = r ? n.indexOf(r) : -1;
  let d = bC(n, Math.max(c, 0));
  o.length === 1 && (d = d.filter((p) => p !== r));
  const m = d.find((p) => p.toLowerCase().startsWith(o.toLowerCase()));
  return m !== r ? m : void 0;
}
function xC(n, a) {
  const { x: r, y: l } = n;
  let o = !1;
  for (let c = 0, d = a.length - 1; c < a.length; d = c++) {
    const h = a[c],
      m = a[d],
      p = h.x,
      g = h.y,
      v = m.x,
      x = m.y;
    g > l != x > l && r < ((v - p) * (l - g)) / (x - g) + p && (o = !o);
  }
  return o;
}
function wC(n, a) {
  if (!a) return !1;
  const r = { x: n.clientX, y: n.clientY };
  return xC(r, a);
}
function Jr(n) {
  return (a) => (a.pointerType === 'mouse' ? n(a) : void 0);
}
var EC = Cb,
  OC = Qf,
  RC = Db,
  AC = _b,
  TC = Zf,
  CC = Nb,
  MC = po,
  DC = zb,
  _C = jb,
  NC = Hb,
  LC = qb,
  zC = Pb,
  UC = Gb,
  jC = Fb,
  kC = Yb,
  mo = 'DropdownMenu',
  [HC] = is(mo, [Ab]),
  dt = Ab(),
  [BC, Xb] = HC(mo),
  Zb = (n) => {
    const {
        __scopeDropdownMenu: a,
        children: r,
        dir: l,
        open: o,
        defaultOpen: c,
        onOpenChange: d,
        modal: h = !0,
      } = n,
      m = dt(a),
      p = E.useRef(null),
      [g, v] = Nv({ prop: o, defaultProp: c ?? !1, onChange: d, caller: mo });
    return F.jsx(BC, {
      scope: a,
      triggerId: vf(),
      triggerRef: p,
      contentId: vf(),
      open: g,
      onOpenChange: v,
      onOpenToggle: E.useCallback(() => v((x) => !x), [v]),
      modal: h,
      children: F.jsx(EC, {
        ...m,
        open: g,
        onOpenChange: v,
        dir: l,
        modal: h,
        children: r,
      }),
    });
  };
Zb.displayName = mo;
var $b = 'DropdownMenuTrigger',
  Ib = E.forwardRef((n, a) => {
    const { __scopeDropdownMenu: r, disabled: l = !1, ...o } = n,
      c = Xb($b, r),
      d = dt(r);
    return F.jsx(OC, {
      asChild: !0,
      ...d,
      children: F.jsx(ft.button, {
        type: 'button',
        id: c.triggerId,
        'aria-haspopup': 'menu',
        'aria-expanded': c.open,
        'aria-controls': c.open ? c.contentId : void 0,
        'data-state': c.open ? 'open' : 'closed',
        'data-disabled': l ? '' : void 0,
        disabled: l,
        ...o,
        ref: so(a, c.triggerRef),
        onPointerDown: Te(n.onPointerDown, (h) => {
          !l &&
            h.button === 0 &&
            h.ctrlKey === !1 &&
            (c.onOpenToggle(), c.open || h.preventDefault());
        }),
        onKeyDown: Te(n.onKeyDown, (h) => {
          l ||
            (['Enter', ' '].includes(h.key) && c.onOpenToggle(),
            h.key === 'ArrowDown' && c.onOpenChange(!0),
            ['Enter', ' ', 'ArrowDown'].includes(h.key) && h.preventDefault());
        }),
      }),
    });
  });
Ib.displayName = $b;
var qC = 'DropdownMenuPortal',
  Jb = (n) => {
    const { __scopeDropdownMenu: a, ...r } = n,
      l = dt(a);
    return F.jsx(RC, { ...l, ...r });
  };
Jb.displayName = qC;
var Wb = 'DropdownMenuContent',
  e0 = E.forwardRef((n, a) => {
    const { __scopeDropdownMenu: r, ...l } = n,
      o = Xb(Wb, r),
      c = dt(r),
      d = E.useRef(!1);
    return F.jsx(AC, {
      id: o.contentId,
      'aria-labelledby': o.triggerId,
      ...c,
      ...l,
      ref: a,
      onCloseAutoFocus: Te(n.onCloseAutoFocus, (h) => {
        d.current || o.triggerRef.current?.focus(),
          (d.current = !1),
          h.preventDefault();
      }),
      onInteractOutside: Te(n.onInteractOutside, (h) => {
        const m = h.detail.originalEvent,
          p = m.button === 0 && m.ctrlKey === !0,
          g = m.button === 2 || p;
        (!o.modal || g) && (d.current = !0);
      }),
      style: {
        ...n.style,
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
e0.displayName = Wb;
var PC = 'DropdownMenuGroup',
  GC = E.forwardRef((n, a) => {
    const { __scopeDropdownMenu: r, ...l } = n,
      o = dt(r);
    return F.jsx(TC, { ...o, ...l, ref: a });
  });
GC.displayName = PC;
var VC = 'DropdownMenuLabel',
  FC = E.forwardRef((n, a) => {
    const { __scopeDropdownMenu: r, ...l } = n,
      o = dt(r);
    return F.jsx(CC, { ...o, ...l, ref: a });
  });
FC.displayName = VC;
var QC = 'DropdownMenuItem',
  t0 = E.forwardRef((n, a) => {
    const { __scopeDropdownMenu: r, ...l } = n,
      o = dt(r);
    return F.jsx(MC, { ...o, ...l, ref: a });
  });
t0.displayName = QC;
var YC = 'DropdownMenuCheckboxItem',
  KC = E.forwardRef((n, a) => {
    const { __scopeDropdownMenu: r, ...l } = n,
      o = dt(r);
    return F.jsx(DC, { ...o, ...l, ref: a });
  });
KC.displayName = YC;
var XC = 'DropdownMenuRadioGroup',
  ZC = E.forwardRef((n, a) => {
    const { __scopeDropdownMenu: r, ...l } = n,
      o = dt(r);
    return F.jsx(_C, { ...o, ...l, ref: a });
  });
ZC.displayName = XC;
var $C = 'DropdownMenuRadioItem',
  IC = E.forwardRef((n, a) => {
    const { __scopeDropdownMenu: r, ...l } = n,
      o = dt(r);
    return F.jsx(NC, { ...o, ...l, ref: a });
  });
IC.displayName = $C;
var JC = 'DropdownMenuItemIndicator',
  WC = E.forwardRef((n, a) => {
    const { __scopeDropdownMenu: r, ...l } = n,
      o = dt(r);
    return F.jsx(LC, { ...o, ...l, ref: a });
  });
WC.displayName = JC;
var eM = 'DropdownMenuSeparator',
  tM = E.forwardRef((n, a) => {
    const { __scopeDropdownMenu: r, ...l } = n,
      o = dt(r);
    return F.jsx(zC, { ...o, ...l, ref: a });
  });
tM.displayName = eM;
var nM = 'DropdownMenuArrow',
  aM = E.forwardRef((n, a) => {
    const { __scopeDropdownMenu: r, ...l } = n,
      o = dt(r);
    return F.jsx(UC, { ...o, ...l, ref: a });
  });
aM.displayName = nM;
var iM = 'DropdownMenuSubTrigger',
  rM = E.forwardRef((n, a) => {
    const { __scopeDropdownMenu: r, ...l } = n,
      o = dt(r);
    return F.jsx(jC, { ...o, ...l, ref: a });
  });
rM.displayName = iM;
var sM = 'DropdownMenuSubContent',
  lM = E.forwardRef((n, a) => {
    const { __scopeDropdownMenu: r, ...l } = n,
      o = dt(r);
    return F.jsx(kC, {
      ...o,
      ...l,
      ref: a,
      style: {
        ...n.style,
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
lM.displayName = sM;
var oM = Zb,
  uM = Ib,
  cM = Jb,
  fM = e0,
  dM = t0;
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hM = (n) => n.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  pM = (n) =>
    n.replace(/^([A-Z])|[\s-_]+(\w)/g, (a, r, l) =>
      l ? l.toUpperCase() : r.toLowerCase(),
    ),
  Oy = (n) => {
    const a = pM(n);
    return a.charAt(0).toUpperCase() + a.slice(1);
  },
  n0 = (...n) =>
    n
      .filter((a, r, l) => !!a && a.trim() !== '' && l.indexOf(a) === r)
      .join(' ')
      .trim(),
  mM = (n) => {
    for (const a in n)
      if (a.startsWith('aria-') || a === 'role' || a === 'title') return !0;
  };
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var gM = {
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
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yM = E.forwardRef(
  (
    {
      color: n = 'currentColor',
      size: a = 24,
      strokeWidth: r = 2,
      absoluteStrokeWidth: l,
      className: o = '',
      children: c,
      iconNode: d,
      ...h
    },
    m,
  ) =>
    E.createElement(
      'svg',
      {
        ref: m,
        ...gM,
        width: a,
        height: a,
        stroke: n,
        strokeWidth: l ? (Number(r) * 24) / Number(a) : r,
        className: n0('lucide', o),
        ...(!c && !mM(h) && { 'aria-hidden': 'true' }),
        ...h,
      },
      [
        ...d.map(([p, g]) => E.createElement(p, g)),
        ...(Array.isArray(c) ? c : [c]),
      ],
    ),
);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jf = (n, a) => {
  const r = E.forwardRef(({ className: l, ...o }, c) =>
    E.createElement(yM, {
      ref: c,
      iconNode: a,
      className: n0(`lucide-${hM(Oy(n))}`, `lucide-${n}`, l),
      ...o,
    }),
  );
  return (r.displayName = Oy(n)), r;
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vM = [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    [
      'path',
      { d: 'M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20', key: '13o1zl' },
    ],
    ['path', { d: 'M2 12h20', key: '9i4pu4' }],
  ],
  bM = Jf('globe', vM);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const SM = [
    [
      'path',
      {
        d: 'M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401',
        key: 'kfwtm',
      },
    ],
  ],
  xM = Jf('moon', SM);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wM = [
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
  EM = Jf('sun', wM);
function a0({ ...n }) {
  return F.jsx(oM, { 'data-slot': 'dropdown-menu', ...n });
}
function i0({ ...n }) {
  return F.jsx(uM, { 'data-slot': 'dropdown-menu-trigger', ...n });
}
function r0({ className: n, sideOffset: a = 4, ...r }) {
  return F.jsx(cM, {
    children: F.jsx(fM, {
      'data-slot': 'dropdown-menu-content',
      sideOffset: a,
      className: Uf(
        'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md',
        n,
      ),
      ...r,
    }),
  });
}
function Gl({ className: n, inset: a, variant: r = 'default', ...l }) {
  return F.jsx(dM, {
    'data-slot': 'dropdown-menu-item',
    'data-inset': a,
    'data-variant': r,
    className: Uf(
      "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      n,
    ),
    ...l,
  });
}
const Ry = [
    { name: "O'zbekcha", key: Hl.UZ },
    { name: 'Ўзбекча', key: Hl.KI },
    { name: 'Русский', key: Hl.RU },
  ],
  OM = () => {
    const { i18n: n } = uw(),
      a = (r) => {
        n.changeLanguage(r);
      };
    return F.jsxs(a0, {
      children: [
        F.jsx(i0, {
          asChild: !0,
          children: F.jsxs(_v, {
            variant: 'outline',
            children: [
              F.jsx(bM, {}),
              F.jsx('span', {
                children: Ry.find((r) => r.key == n.language)?.name,
              }),
            ],
          }),
        }),
        F.jsx(r0, {
          align: 'end',
          children: Ry.map((r) =>
            F.jsx(Gl, { onClick: () => a(r.key), children: r.name }, r.key),
          ),
        }),
      ],
    });
  },
  RM = () => {
    const { setTheme: n } = R1();
    return F.jsxs(a0, {
      children: [
        F.jsx(i0, {
          asChild: !0,
          children: F.jsxs(_v, {
            variant: 'outline',
            size: 'icon',
            children: [
              F.jsx(EM, {
                className:
                  'h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0',
              }),
              F.jsx(xM, {
                className:
                  'absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100',
              }),
              F.jsx('span', { className: 'sr-only', children: 'Toggle theme' }),
            ],
          }),
        }),
        F.jsxs(r0, {
          align: 'end',
          children: [
            F.jsx(Gl, { onClick: () => n('light'), children: 'Light' }),
            F.jsx(Gl, { onClick: () => n('dark'), children: 'Dark' }),
            F.jsx(Gl, { onClick: () => n('system'), children: 'System' }),
          ],
        }),
      ],
    });
  },
  AM = 'modulepreload',
  TM = function (n) {
    return '/' + n;
  },
  Ay = {},
  CM = function (a, r, l) {
    let o = Promise.resolve();
    if (r && r.length > 0) {
      let p = function (g) {
        return Promise.all(
          g.map((v) =>
            Promise.resolve(v).then(
              (x) => ({ status: 'fulfilled', value: x }),
              (x) => ({ status: 'rejected', reason: x }),
            ),
          ),
        );
      };
      var d = p;
      document.getElementsByTagName('link');
      const h = document.querySelector('meta[property=csp-nonce]'),
        m = h?.nonce || h?.getAttribute('nonce');
      o = p(
        r.map((g) => {
          if (((g = TM(g)), g in Ay)) return;
          Ay[g] = !0;
          const v = g.endsWith('.css'),
            x = v ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${g}"]${x}`)) return;
          const O = document.createElement('link');
          if (
            ((O.rel = v ? 'stylesheet' : AM),
            v || (O.as = 'script'),
            (O.crossOrigin = ''),
            (O.href = g),
            m && O.setAttribute('nonce', m),
            document.head.appendChild(O),
            v)
          )
            return new Promise((S, w) => {
              O.addEventListener('load', S),
                O.addEventListener('error', () =>
                  w(new Error(`Unable to preload CSS for ${g}`)),
                );
            });
        }),
      );
    }
    function c(h) {
      const m = new Event('vite:preloadError', { cancelable: !0 });
      if (((m.payload = h), window.dispatchEvent(m), !m.defaultPrevented))
        throw h;
    }
    return o.then((h) => {
      for (const m of h || []) m.status === 'rejected' && c(m.reason);
      return a().catch(c);
    });
  };
class MM extends E.PureComponent {
  constructor(a) {
    super(a), (this.$ = Gt.createRef()), (this._ = Gt.createRef());
  }
  render() {
    return Gt.createElement(
      'span',
      { ref: this.$ },
      Gt.createElement(
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
    const a = this.$.current.appendChild(document.createElement('span'));
    CM(async () => {
      const { render: r } = await import('./buttons.esm-DK2fWHEW.js');
      return { render: r };
    }, []).then(({ render: r }) => {
      this._.current != null &&
        r(a.appendChild(this._.current), function (l) {
          try {
            a.parentNode.replaceChild(l, a);
          } catch {}
        });
    });
  }
  reset() {
    this.$.current.replaceChild(this._.current, this.$.current.lastChild);
  }
}
const DM = () => {
    const { data: n } = x1({ queryKey: ['posts'], queryFn: () => cO() });
    return (
      console.log('data', n),
      F.jsx('div', {
        className:
          'custom-container h-screen rounded-2xl flex items-center justify-center',
        children: F.jsxs('div', {
          className: 'flex flex-col gap-2 items-center',
          children: [
            F.jsx(MM, {
              href: 'https://github.com/fiasuz/fias-ui',
              'data-color-scheme':
                'no-preference: light; light: light; dark: dark;',
              'data-size': 'large',
              'data-show-count': 'true',
              'aria-label': 'Star fiasuz/fias-ui on GitHub',
              children: 'Star',
            }),
            F.jsxs('div', {
              className: 'flex flex-row gap-2',
              children: [F.jsx(RM, {}), F.jsx(OM, {})],
            }),
          ],
        }),
      })
    );
  },
  _M = () => F.jsx(A1, { children: F.jsx(DM, {}) });
kx.createRoot(document.getElementById('root')).render(
  F.jsx(E.StrictMode, { children: F.jsx(_M, {}) }),
);
