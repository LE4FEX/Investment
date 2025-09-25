!(function () {
  'use strict';
  var r,
    t,
    e =
      'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
          ? window
          : 'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
              ? self
              : {},
    n = {};
  function i() {
    if (t) return r;
    t = 1;
    var n = function (r) {
      return r && r.Math === Math && r;
    };
    return (r =
      n('object' == typeof globalThis && globalThis) ||
      n('object' == typeof window && window) ||
      n('object' == typeof self && self) ||
      n('object' == typeof e && e) ||
      n('object' == typeof r && r) ||
      (function () {
        return this;
      })() ||
      Function('return this')());
  }
  var o,
    u,
    a,
    c,
    f,
    s,
    l,
    h,
    v = {};
  function p() {
    return u
      ? o
      : ((u = 1),
        (o = function (r) {
          try {
            return !!r();
          } catch (t) {
            return !0;
          }
        }));
  }
  function d() {
    if (c) return a;
    c = 1;
    var r = p();
    return (a = !r(function () {
      return (
        7 !==
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    }));
  }
  function y() {
    if (s) return f;
    s = 1;
    var r = p();
    return (f = !r(function () {
      var r = function () {}.bind();
      return 'function' != typeof r || r.hasOwnProperty('prototype');
    }));
  }
  function g() {
    if (h) return l;
    h = 1;
    var r = y(),
      t = Function.prototype.call;
    return (
      (l = r
        ? t.bind(t)
        : function () {
            return t.apply(t, arguments);
          }),
      l
    );
  }
  var m,
    w,
    b,
    E,
    O,
    S,
    R,
    I,
    k,
    x,
    T,
    A,
    j,
    D,
    _,
    P,
    C,
    M,
    N,
    L,
    F,
    U,
    B,
    z,
    W,
    H,
    V,
    G,
    $,
    q,
    Y,
    J,
    Q,
    X,
    K,
    Z,
    rr,
    tr,
    er,
    nr,
    ir,
    or = {};
  function ur() {
    return b
      ? w
      : ((b = 1),
        (w = function (r, t) {
          return { enumerable: !(1 & r), configurable: !(2 & r), writable: !(4 & r), value: t };
        }));
  }
  function ar() {
    if (O) return E;
    O = 1;
    var r = y(),
      t = Function.prototype,
      e = t.call,
      n = r && t.bind.bind(e, e);
    return (
      (E = r
        ? n
        : function (r) {
            return function () {
              return e.apply(r, arguments);
            };
          }),
      E
    );
  }
  function cr() {
    if (R) return S;
    R = 1;
    var r = ar(),
      t = r({}.toString),
      e = r(''.slice);
    return (S = function (r) {
      return e(t(r), 8, -1);
    });
  }
  function fr() {
    return T
      ? x
      : ((T = 1),
        (x = function (r) {
          return null == r;
        }));
  }
  function sr() {
    if (j) return A;
    j = 1;
    var r = fr(),
      t = TypeError;
    return (A = function (e) {
      if (r(e)) throw new t("Can't call method on " + e);
      return e;
    });
  }
  function lr() {
    if (_) return D;
    _ = 1;
    var r = (function () {
        if (k) return I;
        k = 1;
        var r = ar(),
          t = p(),
          e = cr(),
          n = Object,
          i = r(''.split);
        return (I = t(function () {
          return !n('z').propertyIsEnumerable(0);
        })
          ? function (r) {
              return 'String' === e(r) ? i(r, '') : n(r);
            }
          : n);
      })(),
      t = sr();
    return (D = function (e) {
      return r(t(e));
    });
  }
  function hr() {
    if (C) return P;
    C = 1;
    var r = 'object' == typeof document && document.all;
    return (P =
      void 0 === r && void 0 !== r
        ? function (t) {
            return 'function' == typeof t || t === r;
          }
        : function (r) {
            return 'function' == typeof r;
          });
  }
  function vr() {
    if (N) return M;
    N = 1;
    var r = hr();
    return (M = function (t) {
      return 'object' == typeof t ? null !== t : r(t);
    });
  }
  function pr() {
    if (F) return L;
    F = 1;
    var r = i(),
      t = hr();
    return (
      (L = function (e, n) {
        return arguments.length < 2 ? ((i = r[e]), t(i) ? i : void 0) : r[e] && r[e][n];
        var i;
      }),
      L
    );
  }
  function dr() {
    if (B) return U;
    B = 1;
    var r = ar();
    return (U = r({}.isPrototypeOf));
  }
  function yr() {
    if (W) return z;
    W = 1;
    var r = i().navigator,
      t = r && r.userAgent;
    return (z = t ? String(t) : '');
  }
  function gr() {
    if (V) return H;
    V = 1;
    var r,
      t,
      e = i(),
      n = yr(),
      o = e.process,
      u = e.Deno,
      a = (o && o.versions) || (u && u.version),
      c = a && a.v8;
    return (
      c && (t = (r = c.split('.'))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])),
      !t &&
        n &&
        (!(r = n.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
        (r = n.match(/Chrome\/(\d+)/)) &&
        (t = +r[1]),
      (H = t)
    );
  }
  function mr() {
    if ($) return G;
    $ = 1;
    var r = gr(),
      t = p(),
      e = i().String;
    return (G =
      !!Object.getOwnPropertySymbols &&
      !t(function () {
        var t = Symbol('symbol detection');
        return !e(t) || !(Object(t) instanceof Symbol) || (!Symbol.sham && r && r < 41);
      }));
  }
  function wr() {
    if (Y) return q;
    Y = 1;
    var r = mr();
    return (q = r && !Symbol.sham && 'symbol' == typeof Symbol.iterator);
  }
  function br() {
    if (Q) return J;
    Q = 1;
    var r = pr(),
      t = hr(),
      e = dr(),
      n = wr(),
      i = Object;
    return (J = n
      ? function (r) {
          return 'symbol' == typeof r;
        }
      : function (n) {
          var o = r('Symbol');
          return t(o) && e(o.prototype, i(n));
        });
  }
  function Er() {
    if (K) return X;
    K = 1;
    var r = String;
    return (X = function (t) {
      try {
        return r(t);
      } catch (e) {
        return 'Object';
      }
    });
  }
  function Or() {
    if (rr) return Z;
    rr = 1;
    var r = hr(),
      t = Er(),
      e = TypeError;
    return (Z = function (n) {
      if (r(n)) return n;
      throw new e(t(n) + ' is not a function');
    });
  }
  function Sr() {
    if (er) return tr;
    er = 1;
    var r = Or(),
      t = fr();
    return (tr = function (e, n) {
      var i = e[n];
      return t(i) ? void 0 : r(i);
    });
  }
  function Rr() {
    if (ir) return nr;
    ir = 1;
    var r = g(),
      t = hr(),
      e = vr(),
      n = TypeError;
    return (nr = function (i, o) {
      var u, a;
      if ('string' === o && t((u = i.toString)) && !e((a = r(u, i)))) return a;
      if (t((u = i.valueOf)) && !e((a = r(u, i)))) return a;
      if ('string' !== o && t((u = i.toString)) && !e((a = r(u, i)))) return a;
      throw new n("Can't convert object to primitive value");
    });
  }
  var Ir,
    kr,
    xr,
    Tr,
    Ar,
    jr,
    Dr,
    _r,
    Pr,
    Cr,
    Mr,
    Nr,
    Lr,
    Fr,
    Ur,
    Br,
    zr,
    Wr,
    Hr,
    Vr,
    Gr,
    $r,
    qr,
    Yr,
    Jr = { exports: {} };
  function Qr() {
    return kr ? Ir : ((kr = 1), (Ir = !1));
  }
  function Xr() {
    if (Tr) return xr;
    Tr = 1;
    var r = i(),
      t = Object.defineProperty;
    return (xr = function (e, n) {
      try {
        t(r, e, { value: n, configurable: !0, writable: !0 });
      } catch (i) {
        r[e] = n;
      }
      return n;
    });
  }
  function Kr() {
    if (Ar) return Jr.exports;
    Ar = 1;
    var r = Qr(),
      t = i(),
      e = Xr(),
      n = '__core-js_shared__',
      o = (Jr.exports = t[n] || e(n, {}));
    return (
      (o.versions || (o.versions = [])).push({
        version: '3.45.1',
        mode: r ? 'pure' : 'global',
        copyright: '© 2014-2025 Denis Pushkarev (zloirock.ru)',
        license: 'https://github.com/zloirock/core-js/blob/v3.45.1/LICENSE',
        source: 'https://github.com/zloirock/core-js',
      }),
      Jr.exports
    );
  }
  function Zr() {
    if (Dr) return jr;
    Dr = 1;
    var r = Kr();
    return (jr = function (t, e) {
      return r[t] || (r[t] = e || {});
    });
  }
  function rt() {
    if (Pr) return _r;
    Pr = 1;
    var r = sr(),
      t = Object;
    return (_r = function (e) {
      return t(r(e));
    });
  }
  function tt() {
    if (Mr) return Cr;
    Mr = 1;
    var r = ar(),
      t = rt(),
      e = r({}.hasOwnProperty);
    return (Cr =
      Object.hasOwn ||
      function (r, n) {
        return e(t(r), n);
      });
  }
  function et() {
    if (Lr) return Nr;
    Lr = 1;
    var r = ar(),
      t = 0,
      e = Math.random(),
      n = r((1.1).toString);
    return (Nr = function (r) {
      return 'Symbol(' + (void 0 === r ? '' : r) + ')_' + n(++t + e, 36);
    });
  }
  function nt() {
    if (Ur) return Fr;
    Ur = 1;
    var r = i(),
      t = Zr(),
      e = tt(),
      n = et(),
      o = mr(),
      u = wr(),
      a = r.Symbol,
      c = t('wks'),
      f = u ? a.for || a : (a && a.withoutSetter) || n;
    return (Fr = function (r) {
      return (e(c, r) || (c[r] = o && e(a, r) ? a[r] : f('Symbol.' + r)), c[r]);
    });
  }
  function it() {
    if (zr) return Br;
    zr = 1;
    var r = g(),
      t = vr(),
      e = br(),
      n = Sr(),
      i = Rr(),
      o = nt(),
      u = TypeError,
      a = o('toPrimitive');
    return (Br = function (o, c) {
      if (!t(o) || e(o)) return o;
      var f,
        s = n(o, a);
      if (s) {
        if ((void 0 === c && (c = 'default'), (f = r(s, o, c)), !t(f) || e(f))) return f;
        throw new u("Can't convert object to primitive value");
      }
      return (void 0 === c && (c = 'number'), i(o, c));
    });
  }
  function ot() {
    if (Hr) return Wr;
    Hr = 1;
    var r = it(),
      t = br();
    return (Wr = function (e) {
      var n = r(e, 'string');
      return t(n) ? n : n + '';
    });
  }
  function ut() {
    if (Gr) return Vr;
    Gr = 1;
    var r = i(),
      t = vr(),
      e = r.document,
      n = t(e) && t(e.createElement);
    return (Vr = function (r) {
      return n ? e.createElement(r) : {};
    });
  }
  function at() {
    if (qr) return $r;
    qr = 1;
    var r = d(),
      t = p(),
      e = ut();
    return ($r =
      !r &&
      !t(function () {
        return (
          7 !==
          Object.defineProperty(e('div'), 'a', {
            get: function () {
              return 7;
            },
          }).a
        );
      }));
  }
  function ct() {
    if (Yr) return v;
    Yr = 1;
    var r = d(),
      t = g(),
      e = (function () {
        if (m) return or;
        m = 1;
        var r = {}.propertyIsEnumerable,
          t = Object.getOwnPropertyDescriptor,
          e = t && !r.call({ 1: 2 }, 1);
        return (
          (or.f = e
            ? function (r) {
                var e = t(this, r);
                return !!e && e.enumerable;
              }
            : r),
          or
        );
      })(),
      n = ur(),
      i = lr(),
      o = ot(),
      u = tt(),
      a = at(),
      c = Object.getOwnPropertyDescriptor;
    return (
      (v.f = r
        ? c
        : function (r, f) {
            if (((r = i(r)), (f = o(f)), a))
              try {
                return c(r, f);
              } catch (s) {}
            if (u(r, f)) return n(!t(e.f, r, f), r[f]);
          }),
      v
    );
  }
  var ft,
    st,
    lt,
    ht,
    vt,
    pt,
    dt,
    yt = {};
  function gt() {
    if (st) return ft;
    st = 1;
    var r = d(),
      t = p();
    return (ft =
      r &&
      t(function () {
        return (
          42 !==
          Object.defineProperty(function () {}, 'prototype', { value: 42, writable: !1 }).prototype
        );
      }));
  }
  function mt() {
    if (ht) return lt;
    ht = 1;
    var r = vr(),
      t = String,
      e = TypeError;
    return (lt = function (n) {
      if (r(n)) return n;
      throw new e(t(n) + ' is not an object');
    });
  }
  function wt() {
    if (vt) return yt;
    vt = 1;
    var r = d(),
      t = at(),
      e = gt(),
      n = mt(),
      i = ot(),
      o = TypeError,
      u = Object.defineProperty,
      a = Object.getOwnPropertyDescriptor,
      c = 'enumerable',
      f = 'configurable',
      s = 'writable';
    return (
      (yt.f = r
        ? e
          ? function (r, t, e) {
              if (
                (n(r),
                (t = i(t)),
                n(e),
                'function' == typeof r && 'prototype' === t && 'value' in e && s in e && !e[s])
              ) {
                var o = a(r, t);
                o &&
                  o[s] &&
                  ((r[t] = e.value),
                  (e = {
                    configurable: f in e ? e[f] : o[f],
                    enumerable: c in e ? e[c] : o[c],
                    writable: !1,
                  }));
              }
              return u(r, t, e);
            }
          : u
        : function (r, e, a) {
            if ((n(r), (e = i(e)), n(a), t))
              try {
                return u(r, e, a);
              } catch (c) {}
            if ('get' in a || 'set' in a) throw new o('Accessors not supported');
            return ('value' in a && (r[e] = a.value), r);
          }),
      yt
    );
  }
  function bt() {
    if (dt) return pt;
    dt = 1;
    var r = d(),
      t = wt(),
      e = ur();
    return (pt = r
      ? function (r, n, i) {
          return t.f(r, n, e(1, i));
        }
      : function (r, t, e) {
          return ((r[t] = e), r);
        });
  }
  var Et,
    Ot,
    St,
    Rt,
    It,
    kt,
    xt,
    Tt,
    At,
    jt,
    Dt,
    _t,
    Pt,
    Ct,
    Mt,
    Nt = { exports: {} };
  function Lt() {
    if (Rt) return St;
    Rt = 1;
    var r = ar(),
      t = hr(),
      e = Kr(),
      n = r(Function.toString);
    return (
      t(e.inspectSource) ||
        (e.inspectSource = function (r) {
          return n(r);
        }),
      (St = e.inspectSource)
    );
  }
  function Ft() {
    if (Tt) return xt;
    Tt = 1;
    var r = Zr(),
      t = et(),
      e = r('keys');
    return (xt = function (r) {
      return e[r] || (e[r] = t(r));
    });
  }
  function Ut() {
    return jt ? At : ((jt = 1), (At = {}));
  }
  function Bt() {
    if (_t) return Dt;
    _t = 1;
    var r,
      t,
      e,
      n = (function () {
        if (kt) return It;
        kt = 1;
        var r = i(),
          t = hr(),
          e = r.WeakMap;
        return (It = t(e) && /native code/.test(String(e)));
      })(),
      o = i(),
      u = vr(),
      a = bt(),
      c = tt(),
      f = Kr(),
      s = Ft(),
      l = Ut(),
      h = 'Object already initialized',
      v = o.TypeError,
      p = o.WeakMap;
    if (n || f.state) {
      var d = f.state || (f.state = new p());
      ((d.get = d.get),
        (d.has = d.has),
        (d.set = d.set),
        (r = function (r, t) {
          if (d.has(r)) throw new v(h);
          return ((t.facade = r), d.set(r, t), t);
        }),
        (t = function (r) {
          return d.get(r) || {};
        }),
        (e = function (r) {
          return d.has(r);
        }));
    } else {
      var y = s('state');
      ((l[y] = !0),
        (r = function (r, t) {
          if (c(r, y)) throw new v(h);
          return ((t.facade = r), a(r, y, t), t);
        }),
        (t = function (r) {
          return c(r, y) ? r[y] : {};
        }),
        (e = function (r) {
          return c(r, y);
        }));
    }
    return (Dt = {
      set: r,
      get: t,
      has: e,
      enforce: function (n) {
        return e(n) ? t(n) : r(n, {});
      },
      getterFor: function (r) {
        return function (e) {
          var n;
          if (!u(e) || (n = t(e)).type !== r)
            throw new v('Incompatible receiver, ' + r + ' required');
          return n;
        };
      },
    });
  }
  function zt() {
    if (Pt) return Nt.exports;
    Pt = 1;
    var r = ar(),
      t = p(),
      e = hr(),
      n = tt(),
      i = d(),
      o = (function () {
        if (Ot) return Et;
        Ot = 1;
        var r = d(),
          t = tt(),
          e = Function.prototype,
          n = r && Object.getOwnPropertyDescriptor,
          i = t(e, 'name'),
          o = i && 'something' === function () {}.name,
          u = i && (!r || (r && n(e, 'name').configurable));
        return (Et = { EXISTS: i, PROPER: o, CONFIGURABLE: u });
      })().CONFIGURABLE,
      u = Lt(),
      a = Bt(),
      c = a.enforce,
      f = a.get,
      s = String,
      l = Object.defineProperty,
      h = r(''.slice),
      v = r(''.replace),
      y = r([].join),
      g =
        i &&
        !t(function () {
          return 8 !== l(function () {}, 'length', { value: 8 }).length;
        }),
      m = String(String).split('String'),
      w = (Nt.exports = function (r, t, e) {
        ('Symbol(' === h(s(t), 0, 7) && (t = '[' + v(s(t), /^Symbol\(([^)]*)\).*$/, '$1') + ']'),
          e && e.getter && (t = 'get ' + t),
          e && e.setter && (t = 'set ' + t),
          (!n(r, 'name') || (o && r.name !== t)) &&
            (i ? l(r, 'name', { value: t, configurable: !0 }) : (r.name = t)),
          g && e && n(e, 'arity') && r.length !== e.arity && l(r, 'length', { value: e.arity }));
        try {
          e && n(e, 'constructor') && e.constructor
            ? i && l(r, 'prototype', { writable: !1 })
            : r.prototype && (r.prototype = void 0);
        } catch (a) {}
        var u = c(r);
        return (n(u, 'source') || (u.source = y(m, 'string' == typeof t ? t : '')), r);
      });
    return (
      (Function.prototype.toString = w(function () {
        return (e(this) && f(this).source) || u(this);
      }, 'toString')),
      Nt.exports
    );
  }
  function Wt() {
    if (Mt) return Ct;
    Mt = 1;
    var r = hr(),
      t = wt(),
      e = zt(),
      n = Xr();
    return (Ct = function (i, o, u, a) {
      a || (a = {});
      var c = a.enumerable,
        f = void 0 !== a.name ? a.name : o;
      if ((r(u) && e(u, f, a), a.global)) c ? (i[o] = u) : n(o, u);
      else {
        try {
          a.unsafe ? i[o] && (c = !0) : delete i[o];
        } catch (s) {}
        c
          ? (i[o] = u)
          : t.f(i, o, {
              value: u,
              enumerable: !1,
              configurable: !a.nonConfigurable,
              writable: !a.nonWritable,
            });
      }
      return i;
    });
  }
  var Ht,
    Vt,
    Gt,
    $t,
    qt,
    Yt,
    Jt,
    Qt,
    Xt,
    Kt,
    Zt,
    re,
    te,
    ee,
    ne,
    ie,
    oe,
    ue = {};
  function ae() {
    if ($t) return Gt;
    $t = 1;
    var r = (function () {
      if (Vt) return Ht;
      Vt = 1;
      var r = Math.ceil,
        t = Math.floor;
      return (Ht =
        Math.trunc ||
        function (e) {
          var n = +e;
          return (n > 0 ? t : r)(n);
        });
    })();
    return (Gt = function (t) {
      var e = +t;
      return e != e || 0 === e ? 0 : r(e);
    });
  }
  function ce() {
    if (Yt) return qt;
    Yt = 1;
    var r = ae(),
      t = Math.max,
      e = Math.min;
    return (qt = function (n, i) {
      var o = r(n);
      return o < 0 ? t(o + i, 0) : e(o, i);
    });
  }
  function fe() {
    if (Qt) return Jt;
    Qt = 1;
    var r = ae(),
      t = Math.min;
    return (Jt = function (e) {
      var n = r(e);
      return n > 0 ? t(n, 9007199254740991) : 0;
    });
  }
  function se() {
    if (Kt) return Xt;
    Kt = 1;
    var r = fe();
    return (Xt = function (t) {
      return r(t.length);
    });
  }
  function le() {
    if (ee) return te;
    ee = 1;
    var r = ar(),
      t = tt(),
      e = lr(),
      n = (function () {
        if (re) return Zt;
        re = 1;
        var r = lr(),
          t = ce(),
          e = se(),
          n = function (n) {
            return function (i, o, u) {
              var a = r(i),
                c = e(a);
              if (0 === c) return !n && -1;
              var f,
                s = t(u, c);
              if (n && o != o) {
                for (; c > s; ) if ((f = a[s++]) != f) return !0;
              } else for (; c > s; s++) if ((n || s in a) && a[s] === o) return n || s || 0;
              return !n && -1;
            };
          };
        return (Zt = { includes: n(!0), indexOf: n(!1) });
      })().indexOf,
      i = Ut(),
      o = r([].push);
    return (te = function (r, u) {
      var a,
        c = e(r),
        f = 0,
        s = [];
      for (a in c) !t(i, a) && t(c, a) && o(s, a);
      for (; u.length > f; ) t(c, (a = u[f++])) && (~n(s, a) || o(s, a));
      return s;
    });
  }
  function he() {
    return ie
      ? ne
      : ((ie = 1),
        (ne = [
          'constructor',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'toLocaleString',
          'toString',
          'valueOf',
        ]));
  }
  var ve,
    pe,
    de,
    ye,
    ge,
    me,
    we,
    be,
    Ee,
    Oe,
    Se,
    Re,
    Ie,
    ke,
    xe,
    Te,
    Ae = {};
  function je() {
    if (de) return pe;
    de = 1;
    var r = pr(),
      t = ar(),
      e = (function () {
        if (oe) return ue;
        oe = 1;
        var r = le(),
          t = he().concat('length', 'prototype');
        return (
          (ue.f =
            Object.getOwnPropertyNames ||
            function (e) {
              return r(e, t);
            }),
          ue
        );
      })(),
      n = (ve || ((ve = 1), (Ae.f = Object.getOwnPropertySymbols)), Ae),
      i = mt(),
      o = t([].concat);
    return (pe =
      r('Reflect', 'ownKeys') ||
      function (r) {
        var t = e.f(i(r)),
          u = n.f;
        return u ? o(t, u(r)) : t;
      });
  }
  function De() {
    if (ge) return ye;
    ge = 1;
    var r = tt(),
      t = je(),
      e = ct(),
      n = wt();
    return (ye = function (i, o, u) {
      for (var a = t(o), c = n.f, f = e.f, s = 0; s < a.length; s++) {
        var l = a[s];
        r(i, l) || (u && r(u, l)) || c(i, l, f(o, l));
      }
    });
  }
  function _e() {
    if (Ee) return be;
    Ee = 1;
    var r = i(),
      t = ct().f,
      e = bt(),
      n = Wt(),
      o = Xr(),
      u = De(),
      a = (function () {
        if (we) return me;
        we = 1;
        var r = p(),
          t = hr(),
          e = /#|\.prototype\./,
          n = function (e, n) {
            var c = o[i(e)];
            return c === a || (c !== u && (t(n) ? r(n) : !!n));
          },
          i = (n.normalize = function (r) {
            return String(r).replace(e, '.').toLowerCase();
          }),
          o = (n.data = {}),
          u = (n.NATIVE = 'N'),
          a = (n.POLYFILL = 'P');
        return (me = n);
      })();
    return (be = function (i, c) {
      var f,
        s,
        l,
        h,
        v,
        p = i.target,
        d = i.global,
        y = i.stat;
      if ((f = d ? r : y ? r[p] || o(p, {}) : r[p] && r[p].prototype))
        for (s in c) {
          if (
            ((h = c[s]),
            (l = i.dontCallGetSet ? (v = t(f, s)) && v.value : f[s]),
            !a(d ? s : p + (y ? '.' : '#') + s, i.forced) && void 0 !== l)
          ) {
            if (typeof h == typeof l) continue;
            u(h, l);
          }
          ((i.sham || (l && l.sham)) && e(h, 'sham', !0), n(f, s, h, i));
        }
    });
  }
  function Pe() {
    if (Se) return Oe;
    Se = 1;
    var r = cr();
    return (Oe =
      Array.isArray ||
      function (t) {
        return 'Array' === r(t);
      });
  }
  function Ce() {
    if (xe) return ke;
    xe = 1;
    var r = TypeError;
    return (ke = function (t) {
      if (t > 9007199254740991) throw r('Maximum allowed index exceeded');
      return t;
    });
  }
  !(function () {
    if (Te) return n;
    Te = 1;
    var r = _e(),
      t = rt(),
      e = se(),
      i = (function () {
        if (Ie) return Re;
        Ie = 1;
        var r = d(),
          t = Pe(),
          e = TypeError,
          n = Object.getOwnPropertyDescriptor,
          i =
            r &&
            !(function () {
              if (void 0 !== this) return !0;
              try {
                Object.defineProperty([], 'length', { writable: !1 }).length = 1;
              } catch (r) {
                return r instanceof TypeError;
              }
            })();
        return (Re = i
          ? function (r, i) {
              if (t(r) && !n(r, 'length').writable) throw new e('Cannot set read only .length');
              return (r.length = i);
            }
          : function (r, t) {
              return (r.length = t);
            });
      })(),
      o = Ce();
    r(
      {
        target: 'Array',
        proto: !0,
        arity: 1,
        forced:
          p()(function () {
            return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
          }) ||
          !(function () {
            try {
              Object.defineProperty([], 'length', { writable: !1 }).push();
            } catch (r) {
              return r instanceof TypeError;
            }
          })(),
      },
      {
        push: function (r) {
          var n = t(this),
            u = e(n),
            a = arguments.length;
          o(u + a);
          for (var c = 0; c < a; c++) ((n[u] = arguments[c]), u++);
          return (i(n, u), u);
        },
      }
    );
  })();
  var Me,
    Ne,
    Le,
    Fe,
    Ue,
    Be,
    ze,
    We,
    He,
    Ve,
    Ge = {};
  function $e() {
    if (Ne) return Me;
    Ne = 1;
    var r = dr(),
      t = TypeError;
    return (Me = function (e, n) {
      if (r(n, e)) return e;
      throw new t('Incorrect invocation');
    });
  }
  function qe() {
    if (Be) return Ue;
    Be = 1;
    var r = tt(),
      t = hr(),
      e = rt(),
      n = Ft(),
      i = (function () {
        if (Fe) return Le;
        Fe = 1;
        var r = p();
        return (Le = !r(function () {
          function r() {}
          return ((r.prototype.constructor = null), Object.getPrototypeOf(new r()) !== r.prototype);
        }));
      })(),
      o = n('IE_PROTO'),
      u = Object,
      a = u.prototype;
    return (Ue = i
      ? u.getPrototypeOf
      : function (n) {
          var i = e(n);
          if (r(i, o)) return i[o];
          var c = i.constructor;
          return t(c) && i instanceof c ? c.prototype : i instanceof u ? a : null;
        });
  }
  function Ye() {
    if (We) return ze;
    We = 1;
    var r = zt(),
      t = wt();
    return (ze = function (e, n, i) {
      return (
        i.get && r(i.get, n, { getter: !0 }),
        i.set && r(i.set, n, { setter: !0 }),
        t.f(e, n, i)
      );
    });
  }
  function Je() {
    if (Ve) return He;
    Ve = 1;
    var r = d(),
      t = wt(),
      e = ur();
    return (He = function (n, i, o) {
      r ? t.f(n, i, e(0, o)) : (n[i] = o);
    });
  }
  var Qe,
    Xe,
    Ke,
    Ze,
    rn,
    tn,
    en,
    nn,
    on,
    un,
    an = {};
  function cn() {
    if (Xe) return Qe;
    Xe = 1;
    var r = le(),
      t = he();
    return (Qe =
      Object.keys ||
      function (e) {
        return r(e, t);
      });
  }
  function fn() {
    if (rn) return Ze;
    rn = 1;
    var r = pr();
    return (Ze = r('document', 'documentElement'));
  }
  function sn() {
    if (en) return tn;
    en = 1;
    var r,
      t = mt(),
      e = (function () {
        if (Ke) return an;
        Ke = 1;
        var r = d(),
          t = gt(),
          e = wt(),
          n = mt(),
          i = lr(),
          o = cn();
        return (
          (an.f =
            r && !t
              ? Object.defineProperties
              : function (r, t) {
                  n(r);
                  for (var u, a = i(t), c = o(t), f = c.length, s = 0; f > s; )
                    e.f(r, (u = c[s++]), a[u]);
                  return r;
                }),
          an
        );
      })(),
      n = he(),
      i = Ut(),
      o = fn(),
      u = ut(),
      a = Ft(),
      c = 'prototype',
      f = 'script',
      s = a('IE_PROTO'),
      l = function () {},
      h = function (r) {
        return '<' + f + '>' + r + '</' + f + '>';
      },
      v = function (r) {
        (r.write(h('')), r.close());
        var t = r.parentWindow.Object;
        return ((r = null), t);
      },
      p = function () {
        try {
          r = new ActiveXObject('htmlfile');
        } catch (s) {}
        var t, e, i;
        p =
          'undefined' != typeof document
            ? document.domain && r
              ? v(r)
              : ((e = u('iframe')),
                (i = 'java' + f + ':'),
                (e.style.display = 'none'),
                o.appendChild(e),
                (e.src = String(i)),
                (t = e.contentWindow.document).open(),
                t.write(h('document.F=Object')),
                t.close(),
                t.F)
            : v(r);
        for (var a = n.length; a--; ) delete p[c][n[a]];
        return p();
      };
    return (
      (i[s] = !0),
      (tn =
        Object.create ||
        function (r, n) {
          var i;
          return (
            null !== r ? ((l[c] = t(r)), (i = new l()), (l[c] = null), (i[s] = r)) : (i = p()),
            void 0 === n ? i : e.f(i, n)
          );
        })
    );
  }
  function ln() {
    if (on) return nn;
    on = 1;
    var r,
      t,
      e,
      n = p(),
      i = hr(),
      o = vr(),
      u = sn(),
      a = qe(),
      c = Wt(),
      f = nt(),
      s = Qr(),
      l = f('iterator'),
      h = !1;
    return (
      [].keys &&
        ('next' in (e = [].keys()) ? (t = a(a(e))) !== Object.prototype && (r = t) : (h = !0)),
      !o(r) ||
      n(function () {
        var t = {};
        return r[l].call(t) !== t;
      })
        ? (r = {})
        : s && (r = u(r)),
      i(r[l]) ||
        c(r, l, function () {
          return this;
        }),
      (nn = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: h })
    );
  }
  !(function () {
    if (un) return Ge;
    un = 1;
    var r = _e(),
      t = i(),
      e = $e(),
      n = mt(),
      o = hr(),
      u = qe(),
      a = Ye(),
      c = Je(),
      f = p(),
      s = tt(),
      l = nt(),
      h = ln().IteratorPrototype,
      v = d(),
      y = Qr(),
      g = 'constructor',
      m = 'Iterator',
      w = l('toStringTag'),
      b = TypeError,
      E = t[m],
      O =
        y ||
        !o(E) ||
        E.prototype !== h ||
        !f(function () {
          E({});
        }),
      S = function () {
        if ((e(this, h), u(this) === h))
          throw new b('Abstract class Iterator not directly constructable');
      },
      R = function (r, t) {
        v
          ? a(h, r, {
              configurable: !0,
              get: function () {
                return t;
              },
              set: function (t) {
                if ((n(this), this === h)) throw new b("You can't redefine this property");
                s(this, r) ? (this[r] = t) : c(this, r, t);
              },
            })
          : (h[r] = t);
      };
    (s(h, w) || R(w, m),
      (!O && s(h, g) && h[g] !== Object) || R(g, S),
      (S.prototype = h),
      r({ global: !0, constructor: !0, forced: O }, { Iterator: S }));
  })();
  var hn,
    vn,
    pn,
    dn,
    yn,
    gn,
    mn,
    wn,
    bn,
    En,
    On,
    Sn,
    Rn,
    In,
    kn,
    xn,
    Tn,
    An,
    jn,
    Dn = {};
  function _n() {
    return vn
      ? hn
      : ((vn = 1),
        (hn = function (r) {
          return { iterator: r, next: r.next, done: !1 };
        }));
  }
  function Pn() {
    if (dn) return pn;
    dn = 1;
    var r = Wt();
    return (pn = function (t, e, n) {
      for (var i in e) r(t, i, e[i], n);
      return t;
    });
  }
  function Cn() {
    return gn
      ? yn
      : ((gn = 1),
        (yn = function (r, t) {
          return { value: r, done: t };
        }));
  }
  function Mn() {
    if (wn) return mn;
    wn = 1;
    var r = g(),
      t = mt(),
      e = Sr();
    return (mn = function (n, i, o) {
      var u, a;
      t(n);
      try {
        if (!(u = e(n, 'return'))) {
          if ('throw' === i) throw o;
          return o;
        }
        u = r(u, n);
      } catch (c) {
        ((a = !0), (u = c));
      }
      if ('throw' === i) throw o;
      if (a) throw u;
      return (t(u), o);
    });
  }
  function Nn() {
    if (En) return bn;
    En = 1;
    var r = Mn();
    return (bn = function (t, e, n) {
      for (var i = t.length - 1; i >= 0; i--)
        if (void 0 !== t[i])
          try {
            n = r(t[i].iterator, e, n);
          } catch (o) {
            ((e = 'throw'), (n = o));
          }
      if ('throw' === e) throw n;
      return n;
    });
  }
  function Ln() {
    if (Sn) return On;
    Sn = 1;
    var r = g(),
      t = sn(),
      e = bt(),
      n = Pn(),
      i = nt(),
      o = Bt(),
      u = Sr(),
      a = ln().IteratorPrototype,
      c = Cn(),
      f = Mn(),
      s = Nn(),
      l = i('toStringTag'),
      h = 'IteratorHelper',
      v = 'WrapForValidIterator',
      p = 'normal',
      d = 'throw',
      y = o.set,
      m = function (e) {
        var i = o.getterFor(e ? v : h);
        return n(t(a), {
          next: function () {
            var r = i(this);
            if (e) return r.nextHandler();
            if (r.done) return c(void 0, !0);
            try {
              var t = r.nextHandler();
              return r.returnHandlerResult ? t : c(t, r.done);
            } catch (n) {
              throw ((r.done = !0), n);
            }
          },
          return: function () {
            var t = i(this),
              n = t.iterator;
            if (((t.done = !0), e)) {
              var o = u(n, 'return');
              return o ? r(o, n) : c(void 0, !0);
            }
            if (t.inner)
              try {
                f(t.inner.iterator, p);
              } catch (a) {
                return f(n, d, a);
              }
            if (t.openIters)
              try {
                s(t.openIters, p);
              } catch (a) {
                return f(n, d, a);
              }
            return (n && f(n, p), c(void 0, !0));
          },
        });
      },
      w = m(!0),
      b = m(!1);
    return (
      e(b, l, 'Iterator Helper'),
      (On = function (r, t, e) {
        var n = function (n, i) {
          (i ? ((i.iterator = n.iterator), (i.next = n.next)) : (i = n),
            (i.type = t ? v : h),
            (i.returnHandlerResult = !!e),
            (i.nextHandler = r),
            (i.counter = 0),
            (i.done = !1),
            y(this, i));
        };
        return ((n.prototype = t ? w : b), n);
      })
    );
  }
  function Fn() {
    if (In) return Rn;
    In = 1;
    var r = mt(),
      t = Mn();
    return (Rn = function (e, n, i, o) {
      try {
        return o ? n(r(i)[0], i[1]) : n(i);
      } catch (u) {
        t(e, 'throw', u);
      }
    });
  }
  function Un() {
    return xn
      ? kn
      : ((xn = 1),
        (kn = function (r, t) {
          var e = 'function' == typeof Iterator && Iterator.prototype[r];
          if (e)
            try {
              e.call({ next: null }, t).next();
            } catch (n) {
              return !0;
            }
        }));
  }
  function Bn() {
    if (An) return Tn;
    An = 1;
    var r = i();
    return (Tn = function (t, e) {
      var n = r.Iterator,
        i = n && n.prototype,
        o = i && i[t],
        u = !1;
      if (o)
        try {
          o.call(
            {
              next: function () {
                return { done: !0 };
              },
              return: function () {
                u = !0;
              },
            },
            -1
          );
        } catch (a) {
          a instanceof e || (u = !1);
        }
      if (!u) return o;
    });
  }
  !(function () {
    if (jn) return Dn;
    jn = 1;
    var r = _e(),
      t = g(),
      e = Or(),
      n = mt(),
      i = _n(),
      o = Ln(),
      u = Fn(),
      a = Qr(),
      c = Mn(),
      f = Un(),
      s = Bn(),
      l = !a && !f('filter', function () {}),
      h = !a && !l && s('filter', TypeError),
      v = a || l || h,
      p = o(function () {
        for (var r, e, i = this.iterator, o = this.predicate, a = this.next; ; ) {
          if (((r = n(t(a, i))), (this.done = !!r.done))) return;
          if (((e = r.value), u(i, o, [e, this.counter++], !0))) return e;
        }
      });
    r(
      { target: 'Iterator', proto: !0, real: !0, forced: v },
      {
        filter: function (r) {
          n(this);
          try {
            e(r);
          } catch (o) {
            c(this, 'throw', o);
          }
          return h ? t(h, this, r) : new p(i(this), { predicate: r });
        },
      }
    );
  })();
  var zn,
    Wn,
    Hn,
    Vn,
    Gn,
    $n,
    qn,
    Yn,
    Jn,
    Qn,
    Xn,
    Kn,
    Zn,
    ri,
    ti,
    ei,
    ni,
    ii,
    oi,
    ui = {};
  function ai() {
    if (Vn) return Hn;
    Vn = 1;
    var r = (function () {
        if (Wn) return zn;
        Wn = 1;
        var r = cr(),
          t = ar();
        return (zn = function (e) {
          if ('Function' === r(e)) return t(e);
        });
      })(),
      t = Or(),
      e = y(),
      n = r(r.bind);
    return (
      (Hn = function (r, i) {
        return (
          t(r),
          void 0 === i
            ? r
            : e
              ? n(r, i)
              : function () {
                  return r.apply(i, arguments);
                }
        );
      }),
      Hn
    );
  }
  function ci() {
    return $n ? Gn : (($n = 1), (Gn = {}));
  }
  function fi() {
    if (Yn) return qn;
    Yn = 1;
    var r = nt(),
      t = ci(),
      e = r('iterator'),
      n = Array.prototype;
    return (qn = function (r) {
      return void 0 !== r && (t.Array === r || n[e] === r);
    });
  }
  function si() {
    if (Kn) return Xn;
    Kn = 1;
    var r = (function () {
        if (Qn) return Jn;
        Qn = 1;
        var r = {};
        return ((r[nt()('toStringTag')] = 'z'), (Jn = '[object z]' === String(r)));
      })(),
      t = hr(),
      e = cr(),
      n = nt()('toStringTag'),
      i = Object,
      o =
        'Arguments' ===
        e(
          (function () {
            return arguments;
          })()
        );
    return (Xn = r
      ? e
      : function (r) {
          var u, a, c;
          return void 0 === r
            ? 'Undefined'
            : null === r
              ? 'Null'
              : 'string' ==
                  typeof (a = (function (r, t) {
                    try {
                      return r[t];
                    } catch (e) {}
                  })((u = i(r)), n))
                ? a
                : o
                  ? e(u)
                  : 'Object' === (c = e(u)) && t(u.callee)
                    ? 'Arguments'
                    : c;
        });
  }
  function li() {
    if (ri) return Zn;
    ri = 1;
    var r = si(),
      t = Sr(),
      e = fr(),
      n = ci(),
      i = nt()('iterator');
    return (Zn = function (o) {
      if (!e(o)) return t(o, i) || t(o, '@@iterator') || n[r(o)];
    });
  }
  function hi() {
    if (ei) return ti;
    ei = 1;
    var r = g(),
      t = Or(),
      e = mt(),
      n = Er(),
      i = li(),
      o = TypeError;
    return (
      (ti = function (u, a) {
        var c = arguments.length < 2 ? i(u) : a;
        if (t(c)) return e(r(c, u));
        throw new o(n(u) + ' is not iterable');
      }),
      ti
    );
  }
  function vi() {
    if (ii) return ni;
    ii = 1;
    var r = ai(),
      t = g(),
      e = mt(),
      n = Er(),
      i = fi(),
      o = se(),
      u = dr(),
      a = hi(),
      c = li(),
      f = Mn(),
      s = TypeError,
      l = function (r, t) {
        ((this.stopped = r), (this.result = t));
      },
      h = l.prototype;
    return (ni = function (v, p, d) {
      var y,
        g,
        m,
        w,
        b,
        E,
        O,
        S = d && d.that,
        R = !(!d || !d.AS_ENTRIES),
        I = !(!d || !d.IS_RECORD),
        k = !(!d || !d.IS_ITERATOR),
        x = !(!d || !d.INTERRUPTED),
        T = r(p, S),
        A = function (r) {
          return (y && f(y, 'normal'), new l(!0, r));
        },
        j = function (r) {
          return R ? (e(r), x ? T(r[0], r[1], A) : T(r[0], r[1])) : x ? T(r, A) : T(r);
        };
      if (I) y = v.iterator;
      else if (k) y = v;
      else {
        if (!(g = c(v))) throw new s(n(v) + ' is not iterable');
        if (i(g)) {
          for (m = 0, w = o(v); w > m; m++) if ((b = j(v[m])) && u(h, b)) return b;
          return new l(!1);
        }
        y = a(v, g);
      }
      for (E = I ? v.next : y.next; !(O = t(E, y)).done; ) {
        try {
          b = j(O.value);
        } catch (D) {
          f(y, 'throw', D);
        }
        if ('object' == typeof b && b && u(h, b)) return b;
      }
      return new l(!1);
    });
  }
  !(function () {
    if (oi) return ui;
    oi = 1;
    var r = _e(),
      t = g(),
      e = vi(),
      n = Or(),
      i = mt(),
      o = _n(),
      u = Mn(),
      a = Bn()('find', TypeError);
    r(
      { target: 'Iterator', proto: !0, real: !0, forced: a },
      {
        find: function (r) {
          i(this);
          try {
            n(r);
          } catch (s) {
            u(this, 'throw', s);
          }
          if (a) return t(a, this, r);
          var c = o(this),
            f = 0;
          return e(
            c,
            function (t, e) {
              if (r(t, f++)) return e(t);
            },
            { IS_RECORD: !0, INTERRUPTED: !0 }
          ).result;
        },
      }
    );
  })();
  var pi,
    di = {};
  !(function () {
    if (pi) return di;
    pi = 1;
    var r = _e(),
      t = g(),
      e = vi(),
      n = Or(),
      i = mt(),
      o = _n(),
      u = Mn(),
      a = Bn()('forEach', TypeError);
    r(
      { target: 'Iterator', proto: !0, real: !0, forced: a },
      {
        forEach: function (r) {
          i(this);
          try {
            n(r);
          } catch (s) {
            u(this, 'throw', s);
          }
          if (a) return t(a, this, r);
          var c = o(this),
            f = 0;
          e(
            c,
            function (t) {
              r(t, f++);
            },
            { IS_RECORD: !0 }
          );
        },
      }
    );
  })();
  var yi,
    gi = {};
  !(function () {
    if (yi) return gi;
    yi = 1;
    var r = _e(),
      t = g(),
      e = Or(),
      n = mt(),
      i = _n(),
      o = Ln(),
      u = Fn(),
      a = Mn(),
      c = Un(),
      f = Bn(),
      s = Qr(),
      l = !s && !c('map', function () {}),
      h = !s && !l && f('map', TypeError),
      v = s || l || h,
      p = o(function () {
        var r = this.iterator,
          e = n(t(this.next, r));
        if (!(this.done = !!e.done)) return u(r, this.mapper, [e.value, this.counter++], !0);
      });
    r(
      { target: 'Iterator', proto: !0, real: !0, forced: v },
      {
        map: function (r) {
          n(this);
          try {
            e(r);
          } catch (o) {
            a(this, 'throw', o);
          }
          return h ? t(h, this, r) : new p(i(this), { mapper: r });
        },
      }
    );
  })();
  var mi,
    wi,
    bi,
    Ei = {};
  !(function () {
    if (bi) return Ei;
    bi = 1;
    var r = _e(),
      t = vi(),
      e = Or(),
      n = mt(),
      i = _n(),
      o = Mn(),
      u = Bn(),
      a = (function () {
        if (wi) return mi;
        wi = 1;
        var r = y(),
          t = Function.prototype,
          e = t.apply,
          n = t.call;
        return (
          (mi =
            ('object' == typeof Reflect && Reflect.apply) ||
            (r
              ? n.bind(e)
              : function () {
                  return n.apply(e, arguments);
                })),
          mi
        );
      })(),
      c = p(),
      f = TypeError,
      s = c(function () {
        [].keys().reduce(function () {}, void 0);
      }),
      l = !s && u('reduce', f);
    r(
      { target: 'Iterator', proto: !0, real: !0, forced: s || l },
      {
        reduce: function (r) {
          n(this);
          try {
            e(r);
          } catch (v) {
            o(this, 'throw', v);
          }
          var u = arguments.length < 2,
            c = u ? void 0 : arguments[1];
          if (l) return a(l, this, u ? [r] : [r, c]);
          var s = i(this),
            h = 0;
          if (
            (t(
              s,
              function (t) {
                (u ? ((u = !1), (c = t)) : (c = r(c, t, h)), h++);
              },
              { IS_RECORD: !0 }
            ),
            u)
          )
            throw new f('Reduce of empty iterator with no initial value');
          return c;
        },
      }
    );
  })();
  var Oi,
    Si = {};
  !(function () {
    if (Oi) return Si;
    Oi = 1;
    var r = _e(),
      t = g(),
      e = vi(),
      n = Or(),
      i = mt(),
      o = _n(),
      u = Mn(),
      a = Bn()('some', TypeError);
    r(
      { target: 'Iterator', proto: !0, real: !0, forced: a },
      {
        some: function (r) {
          i(this);
          try {
            n(r);
          } catch (s) {
            u(this, 'throw', s);
          }
          if (a) return t(a, this, r);
          var c = o(this),
            f = 0;
          return e(
            c,
            function (t, e) {
              if (r(t, f++)) return e();
            },
            { IS_RECORD: !0, INTERRUPTED: !0 }
          ).stopped;
        },
      }
    );
  })();
  var Ri,
    Ii,
    ki,
    xi,
    Ti,
    Ai,
    ji,
    Di,
    _i,
    Pi,
    Ci,
    Mi,
    Ni,
    Li,
    Fi,
    Ui,
    Bi,
    zi,
    Wi,
    Hi,
    Vi,
    Gi = {};
  function $i() {
    if (Ii) return Ri;
    Ii = 1;
    var r = ar(),
      t = Set.prototype;
    return (Ri = { Set: Set, add: r(t.add), has: r(t.has), remove: r(t.delete), proto: t });
  }
  function qi() {
    if (xi) return ki;
    xi = 1;
    var r = $i().has;
    return (ki = function (t) {
      return (r(t), t);
    });
  }
  function Yi() {
    if (Ai) return Ti;
    Ai = 1;
    var r = g();
    return (Ti = function (t, e, n) {
      for (var i, o, u = n ? t : t.iterator, a = t.next; !(i = r(a, u)).done; )
        if (void 0 !== (o = e(i.value))) return o;
    });
  }
  function Ji() {
    if (Di) return ji;
    Di = 1;
    var r = ar(),
      t = Yi(),
      e = $i(),
      n = e.Set,
      i = e.proto,
      o = r(i.forEach),
      u = r(i.keys),
      a = u(new n()).next;
    return (ji = function (r, e, n) {
      return n ? t({ iterator: u(r), next: a }, e) : o(r, e);
    });
  }
  function Qi() {
    if (Pi) return _i;
    Pi = 1;
    var r = $i(),
      t = Ji(),
      e = r.Set,
      n = r.add;
    return (_i = function (r) {
      var i = new e();
      return (
        t(r, function (r) {
          n(i, r);
        }),
        i
      );
    });
  }
  function Xi() {
    if (Mi) return Ci;
    Mi = 1;
    var r = ar(),
      t = Or();
    return (Ci = function (e, n, i) {
      try {
        return r(t(Object.getOwnPropertyDescriptor(e, n)[i]));
      } catch (o) {}
    });
  }
  function Ki() {
    if (Li) return Ni;
    Li = 1;
    var r = Xi(),
      t = $i();
    return (Ni =
      r(t.proto, 'size', 'get') ||
      function (r) {
        return r.size;
      });
  }
  function Zi() {
    if (Ui) return Fi;
    Ui = 1;
    var r = Or(),
      t = mt(),
      e = g(),
      n = ae(),
      i = _n(),
      o = 'Invalid size',
      u = RangeError,
      a = TypeError,
      c = Math.max,
      f = function (t, e) {
        ((this.set = t), (this.size = c(e, 0)), (this.has = r(t.has)), (this.keys = r(t.keys)));
      };
    return (
      (f.prototype = {
        getIterator: function () {
          return i(t(e(this.keys, this.set)));
        },
        includes: function (r) {
          return e(this.has, this.set, r);
        },
      }),
      (Fi = function (r) {
        t(r);
        var e = +r.size;
        if (e != e) throw new a(o);
        var i = n(e);
        if (i < 0) throw new u(o);
        return new f(r, i);
      })
    );
  }
  function ro() {
    if (Hi) return Wi;
    Hi = 1;
    var r = pr(),
      t = function (r) {
        return {
          size: r,
          has: function () {
            return !1;
          },
          keys: function () {
            return {
              next: function () {
                return { done: !0 };
              },
            };
          },
        };
      },
      e = function (r) {
        return {
          size: r,
          has: function () {
            return !0;
          },
          keys: function () {
            throw new Error('e');
          },
        };
      };
    return (Wi = function (n, i) {
      var o = r('Set');
      try {
        new o()[n](t(0));
        try {
          return (new o()[n](t(-1)), !1);
        } catch (a) {
          if (!i) return !0;
          try {
            return (new o()[n](e(-1 / 0)), !1);
          } catch (c) {
            var u = new o();
            return (u.add(1), u.add(2), i(u[n](e(1 / 0))));
          }
        }
      } catch (c) {
        return !1;
      }
    });
  }
  !(function () {
    if (Vi) return Gi;
    Vi = 1;
    var r = _e(),
      t = (function () {
        if (zi) return Bi;
        zi = 1;
        var r = qi(),
          t = $i(),
          e = Qi(),
          n = Ki(),
          i = Zi(),
          o = Ji(),
          u = Yi(),
          a = t.has,
          c = t.remove;
        return (Bi = function (t) {
          var f = r(this),
            s = i(t),
            l = e(f);
          return (
            n(f) <= s.size
              ? o(f, function (r) {
                  s.includes(r) && c(l, r);
                })
              : u(s.getIterator(), function (r) {
                  a(l, r) && c(l, r);
                }),
            l
          );
        });
      })(),
      e = p();
    r(
      {
        target: 'Set',
        proto: !0,
        real: !0,
        forced:
          !ro()('difference', function (r) {
            return 0 === r.size;
          }) ||
          e(function () {
            var r = {
                size: 1,
                has: function () {
                  return !0;
                },
                keys: function () {
                  var r = 0;
                  return {
                    next: function () {
                      var e = r++ > 1;
                      return (t.has(1) && t.clear(), { done: e, value: 2 });
                    },
                  };
                },
              },
              t = new Set([1, 2, 3, 4]);
            return 3 !== t.difference(r).size;
          }),
      },
      { difference: t }
    );
  })();
  var to,
    eo,
    no,
    io = {};
  !(function () {
    if (no) return io;
    no = 1;
    var r = _e(),
      t = p(),
      e = (function () {
        if (eo) return to;
        eo = 1;
        var r = qi(),
          t = $i(),
          e = Ki(),
          n = Zi(),
          i = Ji(),
          o = Yi(),
          u = t.Set,
          a = t.add,
          c = t.has;
        return (to = function (t) {
          var f = r(this),
            s = n(t),
            l = new u();
          return (
            e(f) > s.size
              ? o(s.getIterator(), function (r) {
                  c(f, r) && a(l, r);
                })
              : i(f, function (r) {
                  s.includes(r) && a(l, r);
                }),
            l
          );
        });
      })();
    r(
      {
        target: 'Set',
        proto: !0,
        real: !0,
        forced:
          !ro()('intersection', function (r) {
            return 2 === r.size && r.has(1) && r.has(2);
          }) ||
          t(function () {
            return '3,2' !== String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2]))));
          }),
      },
      { intersection: e }
    );
  })();
  var oo,
    uo,
    ao,
    co = {};
  !(function () {
    if (ao) return co;
    ao = 1;
    var r = _e(),
      t = (function () {
        if (uo) return oo;
        uo = 1;
        var r = qi(),
          t = $i().has,
          e = Ki(),
          n = Zi(),
          i = Ji(),
          o = Yi(),
          u = Mn();
        return (oo = function (a) {
          var c = r(this),
            f = n(a);
          if (e(c) <= f.size)
            return (
              !1 !==
              i(
                c,
                function (r) {
                  if (f.includes(r)) return !1;
                },
                !0
              )
            );
          var s = f.getIterator();
          return (
            !1 !==
            o(s, function (r) {
              if (t(c, r)) return u(s, 'normal', !1);
            })
          );
        });
      })();
    r(
      {
        target: 'Set',
        proto: !0,
        real: !0,
        forced: !ro()('isDisjointFrom', function (r) {
          return !r;
        }),
      },
      { isDisjointFrom: t }
    );
  })();
  var fo,
    so,
    lo,
    ho = {};
  !(function () {
    if (lo) return ho;
    lo = 1;
    var r = _e(),
      t = (function () {
        if (so) return fo;
        so = 1;
        var r = qi(),
          t = Ki(),
          e = Ji(),
          n = Zi();
        return (fo = function (i) {
          var o = r(this),
            u = n(i);
          return (
            !(t(o) > u.size) &&
            !1 !==
              e(
                o,
                function (r) {
                  if (!u.includes(r)) return !1;
                },
                !0
              )
          );
        });
      })();
    r(
      {
        target: 'Set',
        proto: !0,
        real: !0,
        forced: !ro()('isSubsetOf', function (r) {
          return r;
        }),
      },
      { isSubsetOf: t }
    );
  })();
  var vo,
    po,
    yo,
    go = {};
  !(function () {
    if (yo) return go;
    yo = 1;
    var r = _e(),
      t = (function () {
        if (po) return vo;
        po = 1;
        var r = qi(),
          t = $i().has,
          e = Ki(),
          n = Zi(),
          i = Yi(),
          o = Mn();
        return (vo = function (u) {
          var a = r(this),
            c = n(u);
          if (e(a) < c.size) return !1;
          var f = c.getIterator();
          return (
            !1 !==
            i(f, function (r) {
              if (!t(a, r)) return o(f, 'normal', !1);
            })
          );
        });
      })();
    r(
      {
        target: 'Set',
        proto: !0,
        real: !0,
        forced: !ro()('isSupersetOf', function (r) {
          return !r;
        }),
      },
      { isSupersetOf: t }
    );
  })();
  var mo,
    wo,
    bo,
    Eo,
    Oo,
    So = {};
  function Ro() {
    return Eo
      ? bo
      : ((Eo = 1),
        (bo = function (r) {
          try {
            var t = new Set(),
              e = {
                size: 0,
                has: function () {
                  return !0;
                },
                keys: function () {
                  return Object.defineProperty({}, 'next', {
                    get: function () {
                      return (
                        t.clear(),
                        t.add(4),
                        function () {
                          return { done: !0 };
                        }
                      );
                    },
                  });
                },
              },
              n = t[r](e);
            return 1 === n.size && 4 === n.values().next().value;
          } catch (i) {
            return !1;
          }
        }));
  }
  !(function () {
    if (Oo) return So;
    Oo = 1;
    var r = _e(),
      t = (function () {
        if (wo) return mo;
        wo = 1;
        var r = qi(),
          t = $i(),
          e = Qi(),
          n = Zi(),
          i = Yi(),
          o = t.add,
          u = t.has,
          a = t.remove;
        return (mo = function (t) {
          var c = r(this),
            f = n(t).getIterator(),
            s = e(c);
          return (
            i(f, function (r) {
              u(c, r) ? a(s, r) : o(s, r);
            }),
            s
          );
        });
      })(),
      e = Ro();
    r(
      {
        target: 'Set',
        proto: !0,
        real: !0,
        forced: !ro()('symmetricDifference') || !e('symmetricDifference'),
      },
      { symmetricDifference: t }
    );
  })();
  var Io,
    ko,
    xo,
    To = {};
  !(function () {
    if (xo) return To;
    xo = 1;
    var r = _e(),
      t = (function () {
        if (ko) return Io;
        ko = 1;
        var r = qi(),
          t = $i().add,
          e = Qi(),
          n = Zi(),
          i = Yi();
        return (Io = function (o) {
          var u = r(this),
            a = n(o).getIterator(),
            c = e(u);
          return (
            i(a, function (r) {
              t(c, r);
            }),
            c
          );
        });
      })(),
      e = Ro();
    r({ target: 'Set', proto: !0, real: !0, forced: !ro()('union') || !e('union') }, { union: t });
  })();
  var Ao,
    jo,
    Do,
    _o,
    Po,
    Co = {};
  function Mo() {
    if (jo) return Ao;
    jo = 1;
    var r = si(),
      t = String;
    return (Ao = function (e) {
      if ('Symbol' === r(e)) throw new TypeError('Cannot convert a Symbol value to a string');
      return t(e);
    });
  }
  function No() {
    if (_o) return Do;
    _o = 1;
    var r = ar(),
      t = tt(),
      e = SyntaxError,
      n = parseInt,
      i = String.fromCharCode,
      o = r(''.charAt),
      u = r(''.slice),
      a = r(/./.exec),
      c = {
        '\\"': '"',
        '\\\\': '\\',
        '\\/': '/',
        '\\b': '\b',
        '\\f': '\f',
        '\\n': '\n',
        '\\r': '\r',
        '\\t': '\t',
      },
      f = /^[\da-f]{4}$/i,
      s = /^[\u0000-\u001F]$/;
    return (Do = function (r, l) {
      for (var h = !0, v = ''; l < r.length; ) {
        var p = o(r, l);
        if ('\\' === p) {
          var d = u(r, l, l + 2);
          if (t(c, d)) ((v += c[d]), (l += 2));
          else {
            if ('\\u' !== d) throw new e('Unknown escape sequence: "' + d + '"');
            var y = u(r, (l += 2), l + 4);
            if (!a(f, y)) throw new e('Bad Unicode escape at: ' + l);
            ((v += i(n(y, 16))), (l += 4));
          }
        } else {
          if ('"' === p) {
            ((h = !1), l++);
            break;
          }
          if (a(s, p)) throw new e('Bad control character in string literal at: ' + l);
          ((v += p), l++);
        }
      }
      if (h) throw new e('Unterminated string at: ' + l);
      return { value: v, end: l };
    });
  }
  !(function () {
    if (Po) return Co;
    Po = 1;
    var r = _e(),
      t = d(),
      e = i(),
      n = pr(),
      o = ar(),
      u = g(),
      a = hr(),
      c = vr(),
      f = Pe(),
      s = tt(),
      l = Mo(),
      h = se(),
      v = Je(),
      y = p(),
      m = No(),
      w = mr(),
      b = e.JSON,
      E = e.Number,
      O = e.SyntaxError,
      S = b && b.parse,
      R = n('Object', 'keys'),
      I = Object.getOwnPropertyDescriptor,
      k = o(''.charAt),
      x = o(''.slice),
      T = o(/./.exec),
      A = o([].push),
      j = /^\d$/,
      D = /^[1-9]$/,
      _ = /^[\d-]$/,
      P = /^[\t\n\r ]$/,
      C = function (r, t, e, n) {
        var i,
          o,
          a,
          l,
          v,
          p = r[t],
          d = n && p === n.value,
          y = d && 'string' == typeof n.source ? { source: n.source } : {};
        if (c(p)) {
          var g = f(p),
            m = d ? n.nodes : g ? [] : {};
          if (g)
            for (i = m.length, a = h(p), l = 0; l < a; l++)
              M(p, l, C(p, '' + l, e, l < i ? m[l] : void 0));
          else
            for (o = R(p), a = h(o), l = 0; l < a; l++)
              ((v = o[l]), M(p, v, C(p, v, e, s(m, v) ? m[v] : void 0)));
        }
        return u(e, r, t, p, y);
      },
      M = function (r, e, n) {
        if (t) {
          var i = I(r, e);
          if (i && !i.configurable) return;
        }
        void 0 === n ? delete r[e] : v(r, e, n);
      },
      N = function (r, t, e, n) {
        ((this.value = r), (this.end = t), (this.source = e), (this.nodes = n));
      },
      L = function (r, t) {
        ((this.source = r), (this.index = t));
      };
    L.prototype = {
      fork: function (r) {
        return new L(this.source, r);
      },
      parse: function () {
        var r = this.source,
          t = this.skip(P, this.index),
          e = this.fork(t),
          n = k(r, t);
        if (T(_, n)) return e.number();
        switch (n) {
          case '{':
            return e.object();
          case '[':
            return e.array();
          case '"':
            return e.string();
          case 't':
            return e.keyword(!0);
          case 'f':
            return e.keyword(!1);
          case 'n':
            return e.keyword(null);
        }
        throw new O('Unexpected character: "' + n + '" at: ' + t);
      },
      node: function (r, t, e, n, i) {
        return new N(t, n, r ? null : x(this.source, e, n), i);
      },
      object: function () {
        for (var r = this.source, t = this.index + 1, e = !1, n = {}, i = {}; t < r.length; ) {
          if (((t = this.until(['"', '}'], t)), '}' === k(r, t) && !e)) {
            t++;
            break;
          }
          var o = this.fork(t).string(),
            u = o.value;
          ((t = o.end),
            (t = this.until([':'], t) + 1),
            (t = this.skip(P, t)),
            (o = this.fork(t).parse()),
            v(i, u, o),
            v(n, u, o.value),
            (t = this.until([',', '}'], o.end)));
          var a = k(r, t);
          if (',' === a) ((e = !0), t++);
          else if ('}' === a) {
            t++;
            break;
          }
        }
        return this.node(1, n, this.index, t, i);
      },
      array: function () {
        for (var r = this.source, t = this.index + 1, e = !1, n = [], i = []; t < r.length; ) {
          if (((t = this.skip(P, t)), ']' === k(r, t) && !e)) {
            t++;
            break;
          }
          var o = this.fork(t).parse();
          if ((A(i, o), A(n, o.value), (t = this.until([',', ']'], o.end)), ',' === k(r, t)))
            ((e = !0), t++);
          else if (']' === k(r, t)) {
            t++;
            break;
          }
        }
        return this.node(1, n, this.index, t, i);
      },
      string: function () {
        var r = this.index,
          t = m(this.source, this.index + 1);
        return this.node(0, t.value, r, t.end);
      },
      number: function () {
        var r = this.source,
          t = this.index,
          e = t;
        if (('-' === k(r, e) && e++, '0' === k(r, e))) e++;
        else {
          if (!T(D, k(r, e))) throw new O('Failed to parse number at: ' + e);
          e = this.skip(j, e + 1);
        }
        if (
          ('.' === k(r, e) && (e = this.skip(j, e + 1)), 'e' === k(r, e) || 'E' === k(r, e)) &&
          (e++, ('+' !== k(r, e) && '-' !== k(r, e)) || e++, e === (e = this.skip(j, e)))
        )
          throw new O("Failed to parse number's exponent value at: " + e);
        return this.node(0, E(x(r, t, e)), t, e);
      },
      keyword: function (r) {
        var t = '' + r,
          e = this.index,
          n = e + t.length;
        if (x(this.source, e, n) !== t) throw new O('Failed to parse value at: ' + e);
        return this.node(0, r, e, n);
      },
      skip: function (r, t) {
        for (var e = this.source; t < e.length && T(r, k(e, t)); t++);
        return t;
      },
      until: function (r, t) {
        t = this.skip(P, t);
        for (var e = k(this.source, t), n = 0; n < r.length; n++) if (r[n] === e) return t;
        throw new O('Unexpected character: "' + e + '" at: ' + t);
      },
    };
    var F = y(function () {
        var r,
          t = '9007199254740993';
        return (
          S(t, function (t, e, n) {
            r = n.source;
          }),
          r !== t
        );
      }),
      U =
        w &&
        !y(function () {
          return 1 / S('-0 \t') != -1 / 0;
        });
    r(
      { target: 'JSON', stat: !0, forced: F },
      {
        parse: function (r, t) {
          return U && !a(t)
            ? S(r)
            : (function (r, t) {
                r = l(r);
                var e = new L(r, 0),
                  n = e.parse(),
                  i = n.value,
                  o = e.skip(P, n.end);
                if (o < r.length)
                  throw new O(
                    'Unexpected extra character: "' + k(r, o) + '" after the parsed data at: ' + o
                  );
                return a(t) ? C({ '': i }, '', t, n) : i;
              })(r, t);
        },
      }
    );
  })();
  var Lo,
    Fo,
    Uo,
    Bo,
    zo,
    Wo,
    Ho,
    Vo,
    Go,
    $o,
    qo,
    Yo,
    Jo,
    Qo,
    Xo,
    Ko = {};
  function Zo() {
    if (Fo) return Lo;
    Fo = 1;
    var r = vr();
    return (Lo = function (t) {
      return r(t) || null === t;
    });
  }
  function ru() {
    if (Bo) return Uo;
    Bo = 1;
    var r = Zo(),
      t = String,
      e = TypeError;
    return (Uo = function (n) {
      if (r(n)) return n;
      throw new e("Can't set " + t(n) + ' as a prototype');
    });
  }
  function tu() {
    if (Vo) return Ho;
    Vo = 1;
    var r = hr(),
      t = vr(),
      e = (function () {
        if (Wo) return zo;
        Wo = 1;
        var r = Xi(),
          t = vr(),
          e = sr(),
          n = ru();
        return (zo =
          Object.setPrototypeOf ||
          ('__proto__' in {}
            ? (function () {
                var i,
                  o = !1,
                  u = {};
                try {
                  ((i = r(Object.prototype, '__proto__', 'set'))(u, []), (o = u instanceof Array));
                } catch (a) {}
                return function (r, u) {
                  return (e(r), n(u), t(r) ? (o ? i(r, u) : (r.__proto__ = u), r) : r);
                };
              })()
            : void 0));
      })();
    return (Ho = function (n, i, o) {
      var u, a;
      return (
        e &&
          r((u = i.constructor)) &&
          u !== o &&
          t((a = u.prototype)) &&
          a !== o.prototype &&
          e(n, a),
        n
      );
    });
  }
  function eu() {
    if ($o) return Go;
    $o = 1;
    var r = Mo();
    return (
      (Go = function (t, e) {
        return void 0 === t ? (arguments.length < 2 ? '' : e) : r(t);
      }),
      Go
    );
  }
  function nu() {
    if (Qo) return Jo;
    Qo = 1;
    var r = ar(),
      t = Error,
      e = r(''.replace),
      n = String(new t('zxcasd').stack),
      i = /\n\s*at [^:]*:[^\n]*/,
      o = i.test(n);
    return (Jo = function (r, n) {
      if (o && 'string' == typeof r && !t.prepareStackTrace) for (; n--; ) r = e(r, i, '');
      return r;
    });
  }
  !(function () {
    if (Xo) return Ko;
    Xo = 1;
    var r = _e(),
      t = i(),
      e = pr(),
      n = ur(),
      o = wt().f,
      u = tt(),
      a = $e(),
      c = tu(),
      f = eu(),
      s = Yo
        ? qo
        : ((Yo = 1),
          (qo = {
            IndexSizeError: { s: 'INDEX_SIZE_ERR', c: 1, m: 1 },
            DOMStringSizeError: { s: 'DOMSTRING_SIZE_ERR', c: 2, m: 0 },
            HierarchyRequestError: { s: 'HIERARCHY_REQUEST_ERR', c: 3, m: 1 },
            WrongDocumentError: { s: 'WRONG_DOCUMENT_ERR', c: 4, m: 1 },
            InvalidCharacterError: { s: 'INVALID_CHARACTER_ERR', c: 5, m: 1 },
            NoDataAllowedError: { s: 'NO_DATA_ALLOWED_ERR', c: 6, m: 0 },
            NoModificationAllowedError: { s: 'NO_MODIFICATION_ALLOWED_ERR', c: 7, m: 1 },
            NotFoundError: { s: 'NOT_FOUND_ERR', c: 8, m: 1 },
            NotSupportedError: { s: 'NOT_SUPPORTED_ERR', c: 9, m: 1 },
            InUseAttributeError: { s: 'INUSE_ATTRIBUTE_ERR', c: 10, m: 1 },
            InvalidStateError: { s: 'INVALID_STATE_ERR', c: 11, m: 1 },
            SyntaxError: { s: 'SYNTAX_ERR', c: 12, m: 1 },
            InvalidModificationError: { s: 'INVALID_MODIFICATION_ERR', c: 13, m: 1 },
            NamespaceError: { s: 'NAMESPACE_ERR', c: 14, m: 1 },
            InvalidAccessError: { s: 'INVALID_ACCESS_ERR', c: 15, m: 1 },
            ValidationError: { s: 'VALIDATION_ERR', c: 16, m: 0 },
            TypeMismatchError: { s: 'TYPE_MISMATCH_ERR', c: 17, m: 1 },
            SecurityError: { s: 'SECURITY_ERR', c: 18, m: 1 },
            NetworkError: { s: 'NETWORK_ERR', c: 19, m: 1 },
            AbortError: { s: 'ABORT_ERR', c: 20, m: 1 },
            URLMismatchError: { s: 'URL_MISMATCH_ERR', c: 21, m: 1 },
            QuotaExceededError: { s: 'QUOTA_EXCEEDED_ERR', c: 22, m: 1 },
            TimeoutError: { s: 'TIMEOUT_ERR', c: 23, m: 1 },
            InvalidNodeTypeError: { s: 'INVALID_NODE_TYPE_ERR', c: 24, m: 1 },
            DataCloneError: { s: 'DATA_CLONE_ERR', c: 25, m: 1 },
          })),
      l = nu(),
      h = d(),
      v = Qr(),
      p = 'DOMException',
      y = e('Error'),
      g = e(p),
      m = function () {
        a(this, w);
        var r = arguments.length,
          t = f(r < 1 ? void 0 : arguments[0]),
          e = f(r < 2 ? void 0 : arguments[1], 'Error'),
          i = new g(t, e),
          u = new y(t);
        return ((u.name = p), o(i, 'stack', n(1, l(u.stack, 1))), c(i, this, m), i);
      },
      w = (m.prototype = g.prototype),
      b = 'stack' in new y(p),
      E = 'stack' in new g(1, 2),
      O = g && h && Object.getOwnPropertyDescriptor(t, p),
      S = !(!O || (O.writable && O.configurable)),
      R = b && !S && !E;
    r({ global: !0, constructor: !0, forced: v || R }, { DOMException: R ? m : g });
    var I = e(p),
      k = I.prototype;
    if (k.constructor !== I)
      for (var x in (v || o(k, 'constructor', n(1, I)), s))
        if (u(s, x)) {
          var T = s[x],
            A = T.s;
          u(I, A) || o(I, A, n(6, T.c));
        }
  })();
  var iu,
    ou,
    uu,
    au,
    cu,
    fu,
    su,
    lu,
    hu,
    vu,
    pu,
    du,
    yu,
    gu,
    mu,
    wu,
    bu,
    Eu,
    Ou,
    Su,
    Ru,
    Iu,
    ku,
    xu,
    Tu,
    Au = {};
  function ju() {
    if (ou) return iu;
    ou = 1;
    var r = ar(),
      t = p(),
      e = hr(),
      n = si(),
      i = pr(),
      o = Lt(),
      u = function () {},
      a = i('Reflect', 'construct'),
      c = /^\s*(?:class|function)\b/,
      f = r(c.exec),
      s = !c.test(u),
      l = function (r) {
        if (!e(r)) return !1;
        try {
          return (a(u, [], r), !0);
        } catch (t) {
          return !1;
        }
      },
      h = function (r) {
        if (!e(r)) return !1;
        switch (n(r)) {
          case 'AsyncFunction':
          case 'GeneratorFunction':
          case 'AsyncGeneratorFunction':
            return !1;
        }
        try {
          return s || !!f(c, o(r));
        } catch (t) {
          return !0;
        }
      };
    return (
      (h.sham = !0),
      (iu =
        !a ||
        t(function () {
          var r;
          return (
            l(l.call) ||
            !l(Object) ||
            !l(function () {
              r = !0;
            }) ||
            r
          );
        })
          ? h
          : l)
    );
  }
  function Du() {
    if (au) return uu;
    au = 1;
    var r = TypeError;
    return (uu = function (t, e) {
      if (t < e) throw new r('Not enough arguments');
      return t;
    });
  }
  function _u() {
    if (vu) return hu;
    vu = 1;
    var r = g(),
      t = tt(),
      e = dr(),
      n = (function () {
        if (fu) return cu;
        fu = 1;
        var r = i(),
          t = p(),
          e = r.RegExp,
          n = !t(function () {
            var r = !0;
            try {
              e('.', 'd');
            } catch (c) {
              r = !1;
            }
            var t = {},
              n = '',
              i = r ? 'dgimsy' : 'gimsy',
              o = function (r, e) {
                Object.defineProperty(t, r, {
                  get: function () {
                    return ((n += e), !0);
                  },
                });
              },
              u = { dotAll: 's', global: 'g', ignoreCase: 'i', multiline: 'm', sticky: 'y' };
            for (var a in (r && (u.hasIndices = 'd'), u)) o(a, u[a]);
            return (
              Object.getOwnPropertyDescriptor(e.prototype, 'flags').get.call(t) !== i || n !== i
            );
          });
        return (cu = { correct: n });
      })(),
      o = (function () {
        if (lu) return su;
        lu = 1;
        var r = mt();
        return (su = function () {
          var t = r(this),
            e = '';
          return (
            t.hasIndices && (e += 'd'),
            t.global && (e += 'g'),
            t.ignoreCase && (e += 'i'),
            t.multiline && (e += 'm'),
            t.dotAll && (e += 's'),
            t.unicode && (e += 'u'),
            t.unicodeSets && (e += 'v'),
            t.sticky && (e += 'y'),
            e
          );
        });
      })(),
      u = RegExp.prototype;
    return (hu = n.correct
      ? function (r) {
          return r.flags;
        }
      : function (i) {
          return n.correct || !e(u, i) || t(i, 'flags') ? i.flags : r(o, i);
        });
  }
  function Pu() {
    if (du) return pu;
    du = 1;
    var r = ar(),
      t = Map.prototype;
    return (pu = {
      Map: Map,
      set: r(t.set),
      get: r(t.get),
      has: r(t.has),
      remove: r(t.delete),
      proto: t,
    });
  }
  function Cu() {
    if (gu) return yu;
    gu = 1;
    var r = i(),
      t = yr(),
      e = cr(),
      n = function (r) {
        return t.slice(0, r.length) === r;
      };
    return (yu = n('Bun/')
      ? 'BUN'
      : n('Cloudflare-Workers')
        ? 'CLOUDFLARE'
        : n('Deno/')
          ? 'DENO'
          : n('Node.js/')
            ? 'NODE'
            : r.Bun && 'string' == typeof Bun.version
              ? 'BUN'
              : r.Deno && 'object' == typeof Deno.version
                ? 'DENO'
                : 'process' === e(r.process)
                  ? 'NODE'
                  : r.window && r.document
                    ? 'BROWSER'
                    : 'REST');
  }
  function Mu() {
    if (Eu) return bu;
    Eu = 1;
    var r = i(),
      t = (function () {
        if (wu) return mu;
        wu = 1;
        var r = Cu();
        return (mu = 'NODE' === r);
      })();
    return (bu = function (e) {
      if (t) {
        try {
          return r.process.getBuiltinModule(e);
        } catch (n) {}
        try {
          return Function('return require("' + e + '")')();
        } catch (n) {}
      }
    });
  }
  function Nu() {
    if (Su) return Ou;
    Su = 1;
    var r = i(),
      t = p(),
      e = gr(),
      n = Cu(),
      o = r.structuredClone;
    return (Ou =
      !!o &&
      !t(function () {
        if (('DENO' === n && e > 92) || ('NODE' === n && e > 94) || ('BROWSER' === n && e > 97))
          return !1;
        var r = new ArrayBuffer(8),
          t = o(r, { transfer: [r] });
        return 0 !== r.byteLength || 8 !== t.byteLength;
      }));
  }
  function Lu() {
    if (Iu) return Ru;
    Iu = 1;
    var r,
      t,
      e,
      n,
      o = i(),
      u = Mu(),
      a = Nu(),
      c = o.structuredClone,
      f = o.ArrayBuffer,
      s = o.MessageChannel,
      l = !1;
    if (a)
      l = function (r) {
        c(r, { transfer: [r] });
      };
    else if (f)
      try {
        (s || ((r = u('worker_threads')) && (s = r.MessageChannel)),
          s &&
            ((t = new s()),
            (e = new f(2)),
            (n = function (r) {
              t.port1.postMessage(null, [r]);
            }),
            2 === e.byteLength && (n(e), 0 === e.byteLength && (l = n))));
      } catch (h) {}
    return (Ru = l);
  }
  function Fu() {
    if (xu) return ku;
    xu = 1;
    var r = p(),
      t = ur();
    return (ku = !r(function () {
      var r = new Error('a');
      return !('stack' in r) || (Object.defineProperty(r, 'stack', t(1, 7)), 7 !== r.stack);
    }));
  }
  !(function () {
    if (Tu) return Au;
    Tu = 1;
    var r,
      t = Qr(),
      e = _e(),
      n = i(),
      o = pr(),
      u = ar(),
      a = p(),
      c = et(),
      f = hr(),
      s = ju(),
      l = fr(),
      h = vr(),
      v = br(),
      d = vi(),
      y = mt(),
      g = si(),
      m = tt(),
      w = Je(),
      b = bt(),
      E = se(),
      O = Du(),
      S = _u(),
      R = Pu(),
      I = $i(),
      k = Ji(),
      x = Lu(),
      T = Fu(),
      A = Nu(),
      j = n.Object,
      D = n.Array,
      _ = n.Date,
      P = n.Error,
      C = n.TypeError,
      M = n.PerformanceMark,
      N = o('DOMException'),
      L = R.Map,
      F = R.has,
      U = R.get,
      B = R.set,
      z = I.Set,
      W = I.add,
      H = I.has,
      V = o('Object', 'keys'),
      G = u([].push),
      $ = u((!0).valueOf),
      q = u((1.1).valueOf),
      Y = u(''.valueOf),
      J = u(_.prototype.getTime),
      Q = c('structuredClone'),
      X = 'DataCloneError',
      K = 'Transferring',
      Z = function (r) {
        return (
          !a(function () {
            var t = new n.Set([7]),
              e = r(t),
              i = r(j(7));
            return e === t || !e.has(7) || !h(i) || 7 !== +i;
          }) && r
        );
      },
      rr = function (r, t) {
        return !a(function () {
          var e = new t(),
            n = r({ a: e, b: e });
          return !(n && n.a === n.b && n.a instanceof t && n.a.stack === e.stack);
        });
      },
      tr = n.structuredClone,
      er =
        t ||
        !rr(tr, P) ||
        !rr(tr, N) ||
        ((r = tr),
        !!a(function () {
          var t = r(new n.AggregateError([1], Q, { cause: 3 }));
          return (
            'AggregateError' !== t.name || 1 !== t.errors[0] || t.message !== Q || 3 !== t.cause
          );
        })),
      nr =
        !tr &&
        Z(function (r) {
          return new M(Q, { detail: r }).detail;
        }),
      ir = Z(tr) || nr,
      or = function (r) {
        throw new N('Uncloneable type: ' + r, X);
      },
      ur = function (r, t) {
        throw new N(
          (t || 'Cloning') + ' of ' + r + ' cannot be properly polyfilled in this engine',
          X
        );
      },
      cr = function (r, t) {
        return (ir || ur(t), ir(r));
      },
      sr = function (r, t, e) {
        if (F(t, r)) return U(t, r);
        var i, o, u, a, c, s;
        if ('SharedArrayBuffer' === (e || g(r))) i = ir ? ir(r) : r;
        else {
          var l = n.DataView;
          l || f(r.slice) || ur('ArrayBuffer');
          try {
            if (f(r.slice) && !r.resizable) i = r.slice(0);
            else {
              ((o = r.byteLength),
                (u = 'maxByteLength' in r ? { maxByteLength: r.maxByteLength } : void 0),
                (i = new ArrayBuffer(o, u)),
                (a = new l(r)),
                (c = new l(i)));
              for (s = 0; s < o; s++) c.setUint8(s, a.getUint8(s));
            }
          } catch (h) {
            throw new N('ArrayBuffer is detached', X);
          }
        }
        return (B(t, r, i), i);
      },
      lr = function (r, t) {
        if ((v(r) && or('Symbol'), !h(r))) return r;
        if (t) {
          if (F(t, r)) return U(t, r);
        } else t = new L();
        var e,
          i,
          u,
          a,
          c,
          s,
          l,
          p,
          d = g(r);
        switch (d) {
          case 'Array':
            u = D(E(r));
            break;
          case 'Object':
            u = {};
            break;
          case 'Map':
            u = new L();
            break;
          case 'Set':
            u = new z();
            break;
          case 'RegExp':
            u = new RegExp(r.source, S(r));
            break;
          case 'Error':
            switch ((i = r.name)) {
              case 'AggregateError':
                u = new (o(i))([]);
                break;
              case 'EvalError':
              case 'RangeError':
              case 'ReferenceError':
              case 'SuppressedError':
              case 'SyntaxError':
              case 'TypeError':
              case 'URIError':
                u = new (o(i))();
                break;
              case 'CompileError':
              case 'LinkError':
              case 'RuntimeError':
                u = new (o('WebAssembly', i))();
                break;
              default:
                u = new P();
            }
            break;
          case 'DOMException':
            u = new N(r.message, r.name);
            break;
          case 'ArrayBuffer':
          case 'SharedArrayBuffer':
            u = sr(r, t, d);
            break;
          case 'DataView':
          case 'Int8Array':
          case 'Uint8Array':
          case 'Uint8ClampedArray':
          case 'Int16Array':
          case 'Uint16Array':
          case 'Int32Array':
          case 'Uint32Array':
          case 'Float16Array':
          case 'Float32Array':
          case 'Float64Array':
          case 'BigInt64Array':
          case 'BigUint64Array':
            ((s = 'DataView' === d ? r.byteLength : r.length),
              (u = (function (r, t, e, i, o) {
                var u = n[t];
                return (h(u) || ur(t), new u(sr(r.buffer, o), e, i));
              })(r, d, r.byteOffset, s, t)));
            break;
          case 'DOMQuad':
            try {
              u = new DOMQuad(lr(r.p1, t), lr(r.p2, t), lr(r.p3, t), lr(r.p4, t));
            } catch (y) {
              u = cr(r, d);
            }
            break;
          case 'File':
            if (ir)
              try {
                ((u = ir(r)), g(u) !== d && (u = void 0));
              } catch (y) {}
            if (!u)
              try {
                u = new File([r], r.name, r);
              } catch (y) {}
            u || ur(d);
            break;
          case 'FileList':
            if (
              (a = (function () {
                var r;
                try {
                  r = new n.DataTransfer();
                } catch (y) {
                  try {
                    r = new n.ClipboardEvent('').clipboardData;
                  } catch (t) {}
                }
                return r && r.items && r.files ? r : null;
              })())
            ) {
              for (c = 0, s = E(r); c < s; c++) a.items.add(lr(r[c], t));
              u = a.files;
            } else u = cr(r, d);
            break;
          case 'ImageData':
            try {
              u = new ImageData(lr(r.data, t), r.width, r.height, { colorSpace: r.colorSpace });
            } catch (y) {
              u = cr(r, d);
            }
            break;
          default:
            if (ir) u = ir(r);
            else
              switch (d) {
                case 'BigInt':
                  u = j(r.valueOf());
                  break;
                case 'Boolean':
                  u = j($(r));
                  break;
                case 'Number':
                  u = j(q(r));
                  break;
                case 'String':
                  u = j(Y(r));
                  break;
                case 'Date':
                  u = new _(J(r));
                  break;
                case 'Blob':
                  try {
                    u = r.slice(0, r.size, r.type);
                  } catch (y) {
                    ur(d);
                  }
                  break;
                case 'DOMPoint':
                case 'DOMPointReadOnly':
                  e = n[d];
                  try {
                    u = e.fromPoint ? e.fromPoint(r) : new e(r.x, r.y, r.z, r.w);
                  } catch (y) {
                    ur(d);
                  }
                  break;
                case 'DOMRect':
                case 'DOMRectReadOnly':
                  e = n[d];
                  try {
                    u = e.fromRect ? e.fromRect(r) : new e(r.x, r.y, r.width, r.height);
                  } catch (y) {
                    ur(d);
                  }
                  break;
                case 'DOMMatrix':
                case 'DOMMatrixReadOnly':
                  e = n[d];
                  try {
                    u = e.fromMatrix ? e.fromMatrix(r) : new e(r);
                  } catch (y) {
                    ur(d);
                  }
                  break;
                case 'AudioData':
                case 'VideoFrame':
                  f(r.clone) || ur(d);
                  try {
                    u = r.clone();
                  } catch (y) {
                    or(d);
                  }
                  break;
                case 'CropTarget':
                case 'CryptoKey':
                case 'FileSystemDirectoryHandle':
                case 'FileSystemFileHandle':
                case 'FileSystemHandle':
                case 'GPUCompilationInfo':
                case 'GPUCompilationMessage':
                case 'ImageBitmap':
                case 'RTCCertificate':
                case 'WebAssembly.Module':
                  ur(d);
                default:
                  or(d);
              }
        }
        switch ((B(t, r, u), d)) {
          case 'Array':
          case 'Object':
            for (l = V(r), c = 0, s = E(l); c < s; c++) ((p = l[c]), w(u, p, lr(r[p], t)));
            break;
          case 'Map':
            r.forEach(function (r, e) {
              B(u, lr(e, t), lr(r, t));
            });
            break;
          case 'Set':
            r.forEach(function (r) {
              W(u, lr(r, t));
            });
            break;
          case 'Error':
            (b(u, 'message', lr(r.message, t)),
              m(r, 'cause') && b(u, 'cause', lr(r.cause, t)),
              'AggregateError' === i
                ? (u.errors = lr(r.errors, t))
                : 'SuppressedError' === i &&
                  ((u.error = lr(r.error, t)), (u.suppressed = lr(r.suppressed, t))));
          case 'DOMException':
            T && b(u, 'stack', lr(r.stack, t));
        }
        return u;
      };
    e(
      { global: !0, enumerable: !0, sham: !A, forced: er },
      {
        structuredClone: function (r) {
          var t,
            e,
            i = O(arguments.length, 1) > 1 && !l(arguments[1]) ? y(arguments[1]) : void 0,
            o = i ? i.transfer : void 0;
          void 0 !== o &&
            (e = (function (r, t) {
              if (!h(r)) throw new C('Transfer option cannot be converted to a sequence');
              var e = [];
              d(r, function (r) {
                G(e, y(r));
              });
              for (var i, o, u, a, c, l = 0, v = E(e), p = new z(); l < v; ) {
                if (((i = e[l++]), 'ArrayBuffer' === (o = g(i)) ? H(p, i) : F(t, i)))
                  throw new N('Duplicate transferable', X);
                if ('ArrayBuffer' !== o) {
                  if (A) a = tr(i, { transfer: [i] });
                  else
                    switch (o) {
                      case 'ImageBitmap':
                        ((u = n.OffscreenCanvas), s(u) || ur(o, K));
                        try {
                          ((c = new u(i.width, i.height))
                            .getContext('bitmaprenderer')
                            .transferFromImageBitmap(i),
                            (a = c.transferToImageBitmap()));
                        } catch (m) {}
                        break;
                      case 'AudioData':
                      case 'VideoFrame':
                        (f(i.clone) && f(i.close)) || ur(o, K);
                        try {
                          ((a = i.clone()), i.close());
                        } catch (m) {}
                        break;
                      case 'MediaSourceHandle':
                      case 'MessagePort':
                      case 'MIDIAccess':
                      case 'OffscreenCanvas':
                      case 'ReadableStream':
                      case 'RTCDataChannel':
                      case 'TransformStream':
                      case 'WebTransportReceiveStream':
                      case 'WebTransportSendStream':
                      case 'WritableStream':
                        ur(o, K);
                    }
                  if (void 0 === a) throw new N('This object cannot be transferred: ' + o, X);
                  B(t, i, a);
                } else W(p, i);
              }
              return p;
            })(o, (t = new L())));
          var u = lr(r, t);
          return (
            e &&
              (function (r) {
                k(r, function (r) {
                  A
                    ? ir(r, { transfer: [r] })
                    : f(r.transfer)
                      ? r.transfer()
                      : x
                        ? x(r)
                        : ur('ArrayBuffer', K);
                });
              })(e),
            u
          );
        },
      }
    );
  })();
  var Uu,
    Bu = {};
  !(function () {
    if (Uu) return Bu;
    Uu = 1;
    var r = Wt(),
      t = ar(),
      e = Mo(),
      n = Du(),
      i = URLSearchParams,
      o = i.prototype,
      u = t(o.append),
      a = t(o.delete),
      c = t(o.forEach),
      f = t([].push),
      s = new i('a=1&a=2&b=3');
    (s.delete('a', 1),
      s.delete('b', void 0),
      s + '' != 'a=2' &&
        r(
          o,
          'delete',
          function (r) {
            var t = arguments.length,
              i = t < 2 ? void 0 : arguments[1];
            if (t && void 0 === i) return a(this, r);
            var o = [];
            (c(this, function (r, t) {
              f(o, { key: t, value: r });
            }),
              n(t, 1));
            for (var s, l = e(r), h = e(i), v = 0, p = 0, d = !1, y = o.length; v < y; )
              ((s = o[v++]), d || s.key === l ? ((d = !0), a(this, s.key)) : p++);
            for (; p < y; ) ((s = o[p++]).key === l && s.value === h) || u(this, s.key, s.value);
          },
          { enumerable: !0, unsafe: !0 }
        ));
  })();
  var zu,
    Wu = {};
  !(function () {
    if (zu) return Wu;
    zu = 1;
    var r = Wt(),
      t = ar(),
      e = Mo(),
      n = Du(),
      i = URLSearchParams,
      o = i.prototype,
      u = t(o.getAll),
      a = t(o.has),
      c = new i('a=1');
    (!c.has('a', 2) && c.has('a', void 0)) ||
      r(
        o,
        'has',
        function (r) {
          var t = arguments.length,
            i = t < 2 ? void 0 : arguments[1];
          if (t && void 0 === i) return a(this, r);
          var o = u(this, r);
          n(t, 1);
          for (var c = e(i), f = 0; f < o.length; ) if (o[f++] === c) return !0;
          return !1;
        },
        { enumerable: !0, unsafe: !0 }
      );
  })();
  var Hu,
    Vu = {};
  !(function () {
    if (Hu) return Vu;
    Hu = 1;
    var r = d(),
      t = ar(),
      e = Ye(),
      n = URLSearchParams.prototype,
      i = t(n.forEach);
    r &&
      !('size' in n) &&
      e(n, 'size', {
        get: function () {
          var r = 0;
          return (
            i(this, function () {
              r++;
            }),
            r
          );
        },
        configurable: !0,
        enumerable: !0,
      });
  })();
  var Gu;
  /*!
   * SJS 6.15.1
   */ Gu ||
    ((Gu = 1),
    (function () {
      function r(r, t) {
        return (
          (t || '') +
          ' (SystemJS https://github.com/systemjs/systemjs/blob/main/docs/errors.md#' +
          r +
          ')'
        );
      }
      function t(r, t) {
        if ((-1 !== r.indexOf('\\') && (r = r.replace(R, '/')), '/' === r[0] && '/' === r[1]))
          return t.slice(0, t.indexOf(':') + 1) + r;
        if (
          ('.' === r[0] &&
            ('/' === r[1] ||
              ('.' === r[1] && ('/' === r[2] || (2 === r.length && (r += '/')))) ||
              (1 === r.length && (r += '/')))) ||
          '/' === r[0]
        ) {
          var e,
            n = t.slice(0, t.indexOf(':') + 1);
          if (
            ((e =
              '/' === t[n.length + 1]
                ? 'file:' !== n
                  ? (e = t.slice(n.length + 2)).slice(e.indexOf('/') + 1)
                  : t.slice(8)
                : t.slice(n.length + ('/' === t[n.length]))),
            '/' === r[0])
          )
            return t.slice(0, t.length - e.length - 1) + r;
          for (
            var i = e.slice(0, e.lastIndexOf('/') + 1) + r, o = [], u = -1, a = 0;
            a < i.length;
            a++
          )
            -1 !== u
              ? '/' === i[a] && (o.push(i.slice(u, a + 1)), (u = -1))
              : '.' === i[a]
                ? '.' !== i[a + 1] || ('/' !== i[a + 2] && a + 2 !== i.length)
                  ? '/' === i[a + 1] || a + 1 === i.length
                    ? (a += 1)
                    : (u = a)
                  : (o.pop(), (a += 2))
                : (u = a);
          return (-1 !== u && o.push(i.slice(u)), t.slice(0, t.length - e.length) + o.join(''));
        }
      }
      function n(r, e) {
        return t(r, e) || (-1 !== r.indexOf(':') ? r : t('./' + r, e));
      }
      function i(r, e, n, i, o) {
        for (var u in r) {
          var a = t(u, n) || u,
            s = r[u];
          if ('string' == typeof s) {
            var l = f(i, t(s, n) || s, o);
            l ? (e[a] = l) : c('W1', u, s);
          }
        }
      }
      function o(r, t, e) {
        var o;
        for (o in (r.imports && i(r.imports, e.imports, t, e, null), r.scopes || {})) {
          var u = n(o, t);
          i(r.scopes[o], e.scopes[u] || (e.scopes[u] = {}), t, e, u);
        }
        for (o in r.depcache || {}) e.depcache[n(o, t)] = r.depcache[o];
        for (o in r.integrity || {}) e.integrity[n(o, t)] = r.integrity[o];
      }
      function u(r, t) {
        if (t[r]) return r;
        var e = r.length;
        do {
          var n = r.slice(0, e + 1);
          if (n in t) return n;
        } while (-1 !== (e = r.lastIndexOf('/', e - 1)));
      }
      function a(r, t) {
        var e = u(r, t);
        if (e) {
          var n = t[e];
          if (null === n) return;
          if (!(r.length > e.length && '/' !== n[n.length - 1])) return n + r.slice(e.length);
          c('W2', e, n);
        }
      }
      function c(t, e, n) {
        console.warn(r(t, [n, e].join(', ')));
      }
      function f(r, t, e) {
        for (var n = r.scopes, i = e && u(e, n); i; ) {
          var o = a(t, n[i]);
          if (o) return o;
          i = u(i.slice(0, i.lastIndexOf('/')), n);
        }
        return a(t, r.imports) || (-1 !== t.indexOf(':') && t);
      }
      function s() {
        this[k] = {};
      }
      function l(t, e, n, i) {
        var o = t[k][e];
        if (o) return o;
        var u = [],
          a = Object.create(null);
        I && Object.defineProperty(a, I, { value: 'Module' });
        var c = Promise.resolve()
            .then(function () {
              return t.instantiate(e, n, i);
            })
            .then(
              function (n) {
                if (!n) throw Error(r(2, e));
                var i = n[1](
                  function (r, t) {
                    o.h = !0;
                    var e = !1;
                    if ('string' == typeof r) (r in a && a[r] === t) || ((a[r] = t), (e = !0));
                    else {
                      for (var n in r)
                        ((t = r[n]), (n in a && a[n] === t) || ((a[n] = t), (e = !0)));
                      r && r.__esModule && (a.__esModule = r.__esModule);
                    }
                    if (e)
                      for (var i = 0; i < u.length; i++) {
                        var c = u[i];
                        c && c(a);
                      }
                    return t;
                  },
                  2 === n[1].length
                    ? {
                        import: function (r, n) {
                          return t.import(r, e, n);
                        },
                        meta: t.createContext(e),
                      }
                    : void 0
                );
                return ((o.e = i.execute || function () {}), [n[0], i.setters || [], n[2] || []]);
              },
              function (r) {
                throw ((o.e = null), (o.er = r), r);
              }
            ),
          f = c.then(function (r) {
            return Promise.all(
              r[0].map(function (n, i) {
                var o = r[1][i],
                  u = r[2][i];
                return Promise.resolve(t.resolve(n, e)).then(function (r) {
                  var n = l(t, r, e, u);
                  return Promise.resolve(n.I).then(function () {
                    return (o && (n.i.push(o), (!n.h && n.I) || o(n.n)), n);
                  });
                });
              })
            ).then(function (r) {
              o.d = r;
            });
          });
        return (o = t[k][e] =
          {
            id: e,
            i: u,
            n: a,
            m: i,
            I: c,
            L: f,
            h: !1,
            d: void 0,
            e: void 0,
            er: void 0,
            E: void 0,
            C: void 0,
            p: void 0,
          });
      }
      function h(r, t, e, n) {
        if (!n[t.id])
          return (
            (n[t.id] = !0),
            Promise.resolve(t.L)
              .then(function () {
                return (
                  (t.p && null !== t.p.e) || (t.p = e),
                  Promise.all(
                    t.d.map(function (t) {
                      return h(r, t, e, n);
                    })
                  )
                );
              })
              .catch(function (r) {
                if (t.er) throw r;
                throw ((t.e = null), r);
              })
          );
      }
      function v(r, t) {
        return (t.C = h(r, t, t, {})
          .then(function () {
            return p(r, t, {});
          })
          .then(function () {
            return t.n;
          }));
      }
      function p(r, t, e) {
        function n() {
          try {
            var r = o.call(T);
            if (r)
              return (
                (r = r.then(
                  function () {
                    ((t.C = t.n), (t.E = null));
                  },
                  function (r) {
                    throw ((t.er = r), (t.E = null), r);
                  }
                )),
                (t.E = r)
              );
            ((t.C = t.n), (t.L = t.I = void 0));
          } catch (e) {
            throw ((t.er = e), e);
          }
        }
        if (!e[t.id]) {
          if (((e[t.id] = !0), !t.e)) {
            if (t.er) throw t.er;
            return t.E ? t.E : void 0;
          }
          var i,
            o = t.e;
          return (
            (t.e = null),
            t.d.forEach(function (n) {
              try {
                var o = p(r, n, e);
                o && (i = i || []).push(o);
              } catch (a) {
                throw ((t.er = a), a);
              }
            }),
            i ? Promise.all(i).then(n) : n()
          );
        }
      }
      function d() {
        [].forEach.call(document.querySelectorAll('script'), function (t) {
          if (!t.sp)
            if ('systemjs-module' === t.type) {
              if (((t.sp = !0), !t.src)) return;
              System.import('import:' === t.src.slice(0, 7) ? t.src.slice(7) : n(t.src, y)).catch(
                function (r) {
                  if (
                    r.message.indexOf(
                      'https://github.com/systemjs/systemjs/blob/main/docs/errors.md#3'
                    ) > -1
                  ) {
                    var e = document.createEvent('Event');
                    (e.initEvent('error', !1, !1), t.dispatchEvent(e));
                  }
                  return Promise.reject(r);
                }
              );
            } else if ('systemjs-importmap' === t.type) {
              t.sp = !0;
              var e = t.src
                ? (System.fetch || fetch)(t.src, {
                    integrity: t.integrity,
                    priority: t.fetchPriority,
                    passThrough: !0,
                  })
                    .then(function (r) {
                      if (!r.ok) throw Error(r.status);
                      return r.text();
                    })
                    .catch(function (e) {
                      return (
                        (e.message = r('W4', t.src) + '\n' + e.message),
                        console.warn(e),
                        'function' == typeof t.onerror && t.onerror(),
                        '{}'
                      );
                    })
                : t.innerHTML;
              D = D.then(function () {
                return e;
              }).then(function (e) {
                !(function (t, e, n) {
                  var i = {};
                  try {
                    i = JSON.parse(e);
                  } catch (a) {
                    console.warn(Error(r('W5')));
                  }
                  o(i, n, t);
                })(_, e, t.src || y);
              });
            }
        });
      }
      var y,
        g = 'undefined' != typeof Symbol,
        m = 'undefined' != typeof self,
        w = 'undefined' != typeof document,
        b = m ? self : e;
      if (w) {
        var E = document.querySelector('base[href]');
        E && (y = E.href);
      }
      if (!y && 'undefined' != typeof location) {
        var O = (y = location.href.split('#')[0].split('?')[0]).lastIndexOf('/');
        -1 !== O && (y = y.slice(0, O + 1));
      }
      var S,
        R = /\\/g,
        I = g && Symbol.toStringTag,
        k = g ? Symbol() : '@',
        x = s.prototype;
      ((x.import = function (r, t, e) {
        var n = this;
        return (
          t && 'object' == typeof t && ((e = t), (t = void 0)),
          Promise.resolve(n.prepareImport())
            .then(function () {
              return n.resolve(r, t, e);
            })
            .then(function (r) {
              var t = l(n, r, void 0, e);
              return t.C || v(n, t);
            })
        );
      }),
        (x.createContext = function (r) {
          var t = this;
          return {
            url: r,
            resolve: function (e, n) {
              return Promise.resolve(t.resolve(e, n || r));
            },
          };
        }),
        (x.register = function (r, t, e) {
          S = [r, t, e];
        }),
        (x.getRegister = function () {
          var r = S;
          return ((S = void 0), r);
        }));
      var T = Object.freeze(Object.create(null));
      b.System = new s();
      var A,
        j,
        D = Promise.resolve(),
        _ = { imports: {}, scopes: {}, depcache: {}, integrity: {} },
        P = w;
      if (
        ((x.prepareImport = function (r) {
          return ((P || r) && (d(), (P = !1)), D);
        }),
        (x.getImportMap = function () {
          return JSON.parse(JSON.stringify(_));
        }),
        w && (d(), window.addEventListener('DOMContentLoaded', d)),
        (x.addImportMap = function (r, t) {
          o(r, t || y, _);
        }),
        w)
      ) {
        window.addEventListener('error', function (r) {
          ((M = r.filename), (N = r.error));
        });
        var C = location.origin;
      }
      x.createScript = function (r) {
        var t = document.createElement('script');
        ((t.async = !0), r.indexOf(C + '/') && (t.crossOrigin = 'anonymous'));
        var e = _.integrity[r];
        return (e && (t.integrity = e), (t.src = r), t);
      };
      var M,
        N,
        L = {},
        F = x.register;
      ((x.register = function (r, t) {
        if (w && 'loading' === document.readyState && 'string' != typeof r) {
          var e = document.querySelectorAll('script[src]'),
            n = e[e.length - 1];
          if (n) {
            A = r;
            var i = this;
            j = setTimeout(function () {
              ((L[n.src] = [r, t]), i.import(n.src));
            });
          }
        } else A = void 0;
        return F.call(this, r, t);
      }),
        (x.instantiate = function (t, e) {
          var n = L[t];
          if (n) return (delete L[t], n);
          var i = this;
          return Promise.resolve(x.createScript(t)).then(function (n) {
            return new Promise(function (o, u) {
              (n.addEventListener('error', function () {
                u(Error(r(3, [t, e].join(', '))));
              }),
                n.addEventListener('load', function () {
                  if ((document.head.removeChild(n), M === t)) u(N);
                  else {
                    var r = i.getRegister(t);
                    (r && r[0] === A && clearTimeout(j), o(r));
                  }
                }),
                document.head.appendChild(n));
            });
          });
        }),
        (x.shouldFetch = function () {
          return !1;
        }),
        'undefined' != typeof fetch && (x.fetch = fetch));
      var U = x.instantiate,
        B = /^(text|application)\/(x-)?javascript(;|$)/;
      ((x.instantiate = function (t, e, n) {
        var i = this;
        return this.shouldFetch(t, e, n)
          ? this.fetch(t, { credentials: 'same-origin', integrity: _.integrity[t], meta: n }).then(
              function (n) {
                if (!n.ok) throw Error(r(7, [n.status, n.statusText, t, e].join(', ')));
                var o = n.headers.get('content-type');
                if (!o || !B.test(o)) throw Error(r(4, o));
                return n.text().then(function (r) {
                  return (
                    r.indexOf('//# sourceURL=') < 0 && (r += '\n//# sourceURL=' + t),
                    (0, eval)(r),
                    i.getRegister(t)
                  );
                });
              }
            )
          : U.apply(this, arguments);
      }),
        (x.resolve = function (e, n) {
          return (
            f(_, t(e, (n = n || y)) || e, n) ||
            (function (t, e) {
              throw Error(r(8, [t, e].join(', ')));
            })(e, n)
          );
        }));
      var z = x.instantiate;
      ((x.instantiate = function (r, t, e) {
        var n = _.depcache[r];
        if (n) for (var i = 0; i < n.length; i++) l(this, this.resolve(n[i], r), r);
        return z.call(this, r, t, e);
      }),
        m &&
          'function' == typeof importScripts &&
          (x.instantiate = function (r) {
            var t = this;
            return Promise.resolve().then(function () {
              return (importScripts(r), t.getRegister(r));
            });
          }));
    })());
})();
//# sourceMappingURL=polyfills-legacy-YJgRGLVR.js.map
